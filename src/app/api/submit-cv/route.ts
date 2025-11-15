import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const message = formData.get('message') as string
    const cvFile = formData.get('cv') as File | null

    if (!name || !email || !phone || !cvFile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter - Configure with your email service
    // For Gmail, you'll need an App Password
    // For other services, adjust the configuration accordingly
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_FROM,
        pass: process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD,
      },
    })

    // Convert file to buffer
    const fileBuffer = Buffer.from(await cvFile.arrayBuffer())
    const fileName = cvFile.name

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #c49e57;">New CV Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${position ? `<p><strong>Position of Interest:</strong> ${position}</p>` : ''}
        ${message ? `<p><strong>Cover Letter:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
      </div>
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"Darkom Website" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'hello@darkom.design',
      subject: `CV Submission - ${name}`,
      html: emailHtml,
      attachments: [
        {
          filename: fileName,
          content: fileBuffer,
        },
      ],
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'CV submitted successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending CV email:', error)
    return NextResponse.json(
      { error: 'Failed to submit CV. Please try again later.' },
      { status: 500 }
    )
  }
}

