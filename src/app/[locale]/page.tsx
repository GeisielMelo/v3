import { SectionProvider } from '../../context/SectionContext'
import Sections from '@/components/sections'
import { getLocale } from 'next-intl/server'
import Header from '@/components/header'

export default async function Page() {
  const locale = await getLocale()

  return (
    <SectionProvider>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header locale={locale} />
          <main className='pt-24 lg:w-[52%] lg:py-24'>
            <Sections />
          </main>
        </div>
      </div>
    </SectionProvider>
  )
}
