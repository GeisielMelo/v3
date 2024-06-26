import '@/styles/global.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.geisiel.com/'),
  title: {
    default: 'Geisiel | Web Developer',
    template: '%s | Geisiel',
  },
  authors: {
    name: 'Geisiel',
    url: 'https://www.linkedin.com/in/geisiel',
  },
  description:
    'Web developer with years of experience specializing in creating optimized, responsive sites for exceptional user experiences.',
  applicationName: 'GeisielMelo',
  publisher: 'Geisiel',
  archives: '/static/resume.pdf',
  creator: 'Geisiel Nascimento',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'web developer',
    'web developer geisiel',
    'web developer geisiel melo',
    'web developer geisiel nascimento',
    'geisiel open to work, open to work, geisiel melo',
  ],
  classification: 'Portfolio - GeisielMelo',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: ['/img/social.png'],
    type: 'website',
    url: '/',
    locale: 'en_US',
    description: "I'm the right developer to optimize your Google positioning with quality and results.",
  },
  twitter: {
    images: ['/img/social.png'],
    description: "I'm the right developer to optimize your Google positioning with quality and results.",
  },
  verification: {
    google: process.env.APP_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.APP_BING_SITE_VERIFICATION as string,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-dvh bg-slate-50/30 dark:bg-custom-navy transition-all'>
        <NextTopLoader color='#cdcdcd' />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
