import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DropdownLanguage } from './header-dropdown-language'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { ThemeButton } from './header-theme-button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { css } from './index'

type HeaderAside = {
  isDarkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const HeaderAside: React.FC<HeaderAside> = ({ isDarkMode, setDarkMode }) => {
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

        <div className='flex gap-1'>
          <DropdownLanguage />
          <ThemeButton isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
