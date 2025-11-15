import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      name,
      email,
      phone,
      message,
      date,
      time,
      serviceType
    } = body

    if (!name || !email || !phone || !date || !time || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter - Configure with your email service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_FROM,
        pass: process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD,
      },
    })

    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #c49e57;">New Consultation Booking</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #c49e57; margin-top: 0;">Booking Details</h3>
          <p><strong>Service Type:</strong> ${serviceType === 'inPerson' ? 'In-Person Consultation' : 'Online Meeting'}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${time}</p>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #c49e57;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        ${message ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #c49e57;">Additional Details</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        ` : ''}
      </div>
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"Darkom Website" <${process.env.EMAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'hello@darkom.design',
      subject: `New Consultation Booking - ${serviceType === 'inPerson' ? 'In-Person' : 'Online'} - ${name}`,
      html: emailHtml,
      replyTo: email, // Allow replying directly to the client
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Booking submitted successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending booking email:', error)
    return NextResponse.json(
      { error: 'Failed to submit booking. Please try again later.' },
      { status: 500 }
    )
  }
}

