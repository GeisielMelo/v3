import { useDarkMode } from '@/hooks/useDarkMode'
import { ChatBubbleIcon, GitHubLogoIcon, LinkedInLogoIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

const Index: React.FC = () => {
  const { isDarkMode, setDarkMode } = useDarkMode()
  return (
    <footer className='mt-auto font-inter text-sm'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <div className='flex gap-2 lg:fixed bottom-0 left-8 lg:flex-col lg:items-center'>
          <Button variant='ghost' size='sm' onClick={() => window.open('https://github.com/GeisielMelo', '_blank')}>
            <GitHubLogoIcon />
          </Button>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => window.open('https://www.linkedin.com/in/geisiel', '_blank')}
          >
            <LinkedInLogoIcon />
          </Button>
          <div className='hidden h-36 w-[1px] lg:block bg-black dark:bg-white' />
        </div>
        <div className='flex gap-2 lg:fixed bottom-0 right-8 lg:flex-col lg:items-center'>
          <Button variant='ghost' size='sm' onClick={() => setDarkMode(!isDarkMode)}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Button
            variant='ghost'
            size='sm'
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=5571981608087&text="Hello, I would like to speak to Geisiel."',
                '_blank',
              )
            }
          >
            <ChatBubbleIcon />
          </Button>
          <div className='hidden h-36 w-[1px] lg:block bg-black dark:bg-white' />
        </div>
      </div>

      <div className='w-full flex justify-center py-4'>
        <p className='text-xs max-w-max px-2 text-zinc-700 ease-in-out duration-300'>
          © {new Date().getFullYear()} GeisielMelo
        </p>
      </div>
    </footer>
  )
}

export default Index
