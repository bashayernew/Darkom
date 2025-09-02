import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Darkom - Luxury Construction & Design',
  description: 'Darkom — luxury construction, interior design, façades, landscaping, and consulting in Kuwait.',
  keywords: 'construction, interior design, architecture, Kuwait, luxury, renovation, landscaping',
  authors: [{ name: 'Darkom Construction & Consulting' }],
  creator: 'Darkom',
  publisher: 'Darkom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://darkom.com'),
  openGraph: {
    title: 'Darkom | Luxury Construction & Design',
    description: 'Luxury construction, interior design, façades, landscaping, and consulting in Kuwait.',
    url: 'https://darkom.com',
    siteName: 'Darkom',
    images: [
      {
        url: '/images/hero-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Darkom Construction & Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darkom | Luxury Construction & Design',
    description: 'Luxury construction, interior design, façades, landscaping, and consulting in Kuwait.',
    images: ['/images/hero-poster.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <head>
        <link rel="canonical" href="https://darkom.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#c49e57" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-dark text-cream antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
