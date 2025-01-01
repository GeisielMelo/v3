import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

type ThemeButton = {
  isDarkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const ThemeButton: React.FC<ThemeButton> = ({ isDarkMode, setDarkMode }) => {
  return (
    <Button
      variant='ghost'
      className='transition-all dark:hover:text-custom-green dark:hover:bg-slate-800/30'
      onClick={() => setDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
