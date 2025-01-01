'use client'

import { DropdownLanguage } from './header-dropdown-language'
import { ArchiveButton } from './header-archive-button'
import { ThemeButton } from './header-theme-button'
import { useDarkMode } from '@/hooks/useDarkMode'
import { usePathname } from 'next/navigation'
import { HeaderAside } from './header-aside'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const css = {
  option: `font-Lexend inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-transparent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer w-28 text-md text-slate-500`,
  selected:
    'text-accent-foreground bg-transparent rounded-none border-b border-black dark:border-custom-green dark:text-custom-green',
}

const Navbar: React.FC<{ locale: string }> = ({ locale }) => {
  const pathname = usePathname()
  const { isDarkMode, setDarkMode } = useDarkMode()
  const t = useTranslations('Navigation')

  const navLinks = [
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <header className='w-full z-20 py-4 gap-9 px-6 flex justify-between items-center sticky top-0 backdrop-blur-md dark:backdrop-blur-sm border-b bg-slate-100/90 dark:bg-custom-navy/90'>
      <Link href={`/${locale}`}>
        <span className='font-Inter text-2xl font-bold flex items-center justify-center h-11 w-11 rounded-full'>G</span>
      </Link>
      <div className='hidden lg:flex max-w-5xl w-full gap-2'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className={`${css.option} ${pathname === link.href ? css.selected : ''}`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className='gap-1 hidden lg:flex'>
        <ArchiveButton locale={locale} />
        <DropdownLanguage />
        <ThemeButton isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </div>

      <HeaderAside isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </header>
  )
}

export default Navbar
