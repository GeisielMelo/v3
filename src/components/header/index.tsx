'use client'

import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { DropdownLanguage } from '@/components/ui/dropdown-languages'
import { ThemeSwitch } from '@/components/ui/theme-switch'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC<{ locale: string }> = ({ locale }) => {
  const t = useTranslations('Header')
  const keys = ['about', 'experience', 'projects'] as const

  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-[#ededed] sm:text-5xl'>{t('name')}</h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-[#ededed] sm:text-xl'>{t('dev')}</h2>
        <p className='mt-4 max-w-xs leading-normal'>{t('description')}</p>

        <nav className='nav hidden lg:block'>
          <ul className='mt-16 w-max'>
            {keys.map((key, index) => (
              <li
                key={index}
                className='text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-all'
              >
                <Link href={locale + '/' + t(`options.${key}.href`)}>{t(`options.${key}.title`)}</Link>
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
