'use client'

import { useSection } from '@/context/SectionContext'
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC<{ locale: string }> = ({ locale }) => {
  const t = useTranslations('Header')
  const { visibleSection } = useSection()
  const keys = ['about', 'experience', 'projects'] as const

  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>{t('name')}</h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>{t('dev')}</h2>
        <p className='mt-4 max-w-xs leading-normal'>{t('description')}</p>

        <nav className='nav hidden lg:block'>
          <ul className='mt-16 w-max'>
            {keys.map((key) => (
              <li key={key}>
                <Link href={locale + '/' + t(`options.${key}.href`)}>
                  {t(`options.${key}.title`)} {key == visibleSection && 'ATUAL'}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className='ml-1 mt-8 flex gap-4 items-center uppercase'>
        <li>
          <a href='https://github.com/GeisielMelo' className='flex p-2 rounded'>
            <GitHubLogoIcon />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/geisiel' className='flex p-2 rounded'>
            <LinkedInLogoIcon />
          </a>
        </li>
        <li>
          <a href='mailto:geisiel.nascimento@gmail.com' className='flex p-2 rounded'>
            <EnvelopeClosedIcon />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
