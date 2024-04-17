'use client'

import Link from 'next/link'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { NavbarAside } from './NavbarAside'
import { useDarkMode } from '@/hooks/useDarkMode'
import { usePathname } from 'next/navigation'

export const css = {
  option: `font-Lexend inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-transparent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer w-28 text-md text-slate-500`,
  selected:
    'text-accent-foreground bg-transparent rounded-none border-b border-black dark:border-custom-green dark:text-custom-green',
}

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const { isDarkMode, setDarkMode } = useDarkMode()

  return (
    <header className='w-full z-20 py-4 gap-9 px-6 flex justify-between items-center sticky top-0 backdrop-blur-md dark:backdrop-blur-sm border-b bg-slate-100/90 dark:bg-custom-navy/90'>
      <span className='font-Inter text-2xl font-bold flex items-center justify-center h-11 w-11 rounded-full'>G</span>
      <div className='hidden lg:flex max-w-5xl w-full gap-2'>
        <Link className={`${css.option} + ${pathname == '/' && css.selected}`} href='/'>
          Home
        </Link>

        <Link className={`${css.option} + ${pathname == '/about' && css.selected}`} href='/about'>
          About
        </Link>

        <Link className={`${css.option} + ${pathname == '/projects' && css.selected}`} href='/projects'>
          Projects
        </Link>

        <Link className={`${css.option} + ${pathname == '/contact' && css.selected}`} href='contact'>
          Contact
        </Link>

        <Link className={`${css.option} + ${pathname == '/resume' && css.selected}`} href='/resume'>
          Resume
        </Link>
      </div>
      <Button
        variant='ghost'
        className='hidden lg:block transition-all dark:hover:text-custom-green dark:hover:bg-slate-800/30'
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </Button>
      <NavbarAside isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </header>
  )
}

export default Navbar
