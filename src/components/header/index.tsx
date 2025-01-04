'use client'

import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { useSection } from '@/context/SectionContext'
import { ThemeSwitch } from '../ui/theme-switch'
import { useTranslations } from 'next-intl'
import { DropdownLanguage } from '@/components/ui/dropdown-languages'
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

      <div>
        <div className='ml-1 mt-8 flex items-center uppercase'>
          <a href='https://github.com/GeisielMelo' className='anchor' target='_blank'>
            <GitHubLogoIcon />
          </a>

          <a href='https://www.linkedin.com/in/geisiel' className='anchor' target='_blank'>
            <LinkedInLogoIcon />
          </a>

          <a href='mailto:geisiel.nascimento@gmail.com' className='anchor' target='_blank'>
            <EnvelopeClosedIcon />
          </a>

          <DropdownLanguage />

          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default Header
