import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Menu } from './Menu'
import { useDarkMode } from '@/hooks/useDarkMode'

export const css = {
  option:
    'font-Lexend inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer w-28 text-md text-slate-500',
}

const Index: React.FC = () => {
  const { isDarkMode, setDarkMode } = useDarkMode()
  const navigate = useNavigate()

  return (
    <header className='z-20 py-4 px-6 flex justify-between items-center sticky top-0 backdrop-blur-sm border-b'>
      <Button variant='ghost' onClick={() => navigate('/')}>
        <span className='text-2xl font-bold text-slate-800 dark:text-slate-100 transition-transform hover:rotate-12'>
          G
        </span>
      </Button>
      <ul className='hidden md:flex max-w-5xl w-full gap-2'>
        <li className={css.option} onClick={() => navigate('/about')}>
          About
        </li>
        <li className={css.option} onClick={() => navigate('/projects')}>
          Projects
        </li>
        <li className={css.option} onClick={() => navigate('/contact')}>
          Contact
        </li>
        <li className={css.option} onClick={() => navigate('/resume')}>
          Resume
        </li>
      </ul>
      <Button variant='ghost' className='hidden md:block' onClick={() => setDarkMode(!isDarkMode)}>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Menu />
    </header>
  )
}

export default Index
