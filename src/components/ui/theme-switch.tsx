'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export const ThemeSwitch: React.FC = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant='ghost' size='icon' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme == 'dark' ? (
        <MoonIcon className='rotate-0 scale-100 transition-all' />
      ) : (
        <SunIcon className='rotate-0 scale-100 transition-all' />
      )}
    </Button>
  )
}
