import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { css } from './index'
import { useNavigate } from 'react-router-dom'
import { useDarkMode } from '@/hooks/useDarkMode'

export const Menu: React.FC = () => {
  const { isDarkMode, setDarkMode } = useDarkMode()
  const navigate = useNavigate()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' className='md:hidden dark:bg-transparent'>
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col w-full items-center py-10 bg-slate-50 dark:bg-slate-950/80'>
        <SheetClose className={css.option} onClick={() => navigate('/')}>
          Home
        </SheetClose>
        <SheetClose className={css.option} onClick={() => navigate('/about')}>
          About
        </SheetClose>
        <SheetClose className={css.option} onClick={() => navigate('/projects')}>
          Projects
        </SheetClose>
        <SheetClose className={css.option} onClick={() => navigate('/contact')}>
          Contact
        </SheetClose>
        <SheetClose className={css.option} onClick={() => navigate('/resume')}>
          Resume
        </SheetClose>
        <Button variant='ghost' className='mt-auto' onClick={() => setDarkMode(!isDarkMode)}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
      </SheetContent>
    </Sheet>
  )
}
