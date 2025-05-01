import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3B82F6',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://octobit8.com'),
  title: {
    default: 'Octobit8 - IT Solutions & Technology Services',
    template: '%s | Octobit8'
  },
  description: 'Octobit8 provides comprehensive IT solutions including website development, DevOps & cloud services, and AI development. Transform your business with our expert technology services.',
  keywords: ['IT solutions', 'website development', 'DevOps', 'cloud services', 'AI development', 'technology services', 'software development', 'digital transformation'],
  authors: [{ name: 'Octobit8 Team' }],
  creator: 'Octobit8',
  publisher: 'Octobit8',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://octobit8.com',
    siteName: 'Octobit8',
    title: 'Octobit8 - IT Solutions & Technology Services',
    description: 'Transform your business with our expert technology services including website development, DevOps, and AI solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Octobit8 - IT Solutions & Technology Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Octobit8 - IT Solutions & Technology Services',
    description: 'Transform your business with our expert technology services including website development, DevOps, and AI solutions.',
    images: ['/twitter-image.jpg'],
    creator: '@octobit8',
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
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
} 