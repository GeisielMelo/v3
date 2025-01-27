'use client'

import { DropdownLanguage } from '@/components/ui/dropdown-languages'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

import FolderZipIcon from '@mui/icons-material/FolderZip'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

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
          <ul className='flex flex-col gap-1 mt-16 w-max'>
            {keys.map((key, index) => (
              <li key={index} className='flex text-xs font-bold uppercase tracking-widest hover:pl-4 hover:text-white transition-all cursor-pointer'>
                <Link href={locale + '/' + t(`options.${key}.href`)}>{t(`options.${key}.title`)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='mt-8 flex items-center gap-2' aria-label='Social media'>
        <a
          href='https://github.com/GeisielMelo'
          className='shrink-0 text-xs bg-slate-800/50 hover:text-white transition-all p-1 rounded-sm'
          target='_blank'
        >
          <GitHubIcon fontSize='small' />
        </a>

        <a
          href='https://www.linkedin.com/in/geisiel'
          className='shrink-0 text-xs bg-slate-800/50 hover:text-white transition-all p-1 rounded-sm'
          target='_blank'
        >
          <LinkedInIcon fontSize='small' />
        </a>

        <a
          href='mailto:geisiel.nascimento@gmail.com'
          className='shrink-0 text-xs bg-slate-800/50 hover:text-white transition-all p-1 rounded-sm'
          target='_blank'
        >
          <EmailIcon fontSize='small' />
        </a>

        <Link
          href={locale + '/archive'}
          className='shrink-0 text-xs bg-slate-800/50 hover:text-white transition-all p-1 rounded-sm'
        >
          <FolderZipIcon fontSize='small' />
        </Link>

        <DropdownLanguage />
      </div>
    </header>
  )
}
