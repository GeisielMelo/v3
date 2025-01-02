import '@/styles/global.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/header'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { SectionProvider } from '../../context/SectionContext'

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

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className='flex flex-col min-h-dvh bg-slate-50/30 dark:bg-custom-navy transition-all'>
        <NextIntlClientProvider messages={messages}>
          <SectionProvider>
            <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
              <div className='lg:flex lg:justify-between lg:gap-4'>
                <Header locale={locale} />
                <main className='pt-24 lg:w-[52%] lg:py-24'>{children}</main>
              </div>
            </div>
          </SectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
