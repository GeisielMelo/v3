import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { css } from './Navbar'
import Link from 'next/link'

export type HeaderProps = {
  isDarkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const NavbarAside: React.FC<HeaderProps> = ({ isDarkMode, setDarkMode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' className='lg:hidden dark:bg-transparent' name='Hamburger menu button.'>
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col w-full items-center py-10 bg-slate-50 dark:bg-slate-950/80'>
        <SheetClose>
          <Link className={css.option} href='/'>
            Home
          </Link>
        </SheetClose>
        <SheetClose>
          <Link className={css.option} href='/about'>
            About
          </Link>
        </SheetClose>
        <SheetClose>
          <Link className={css.option} href='/projects'>
            Projects
          </Link>
        </SheetClose>
        <SheetClose>
          <Link className={css.option} href='/contact'>
            Contact
          </Link>
        </SheetClose>
        <SheetClose>
          <Link className={css.option} href='/resume'>
            Resume
          </Link>
        </SheetClose>
        <Button variant='ghost' className='mt-auto' onClick={() => setDarkMode(!isDarkMode)}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
      </SheetContent>
    </Sheet>
  )
}
