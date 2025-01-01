import { ChatBubbleIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

const css = {
  button:
    'py-2 dark:bg-transparent dark:hover:text-custom-green transition-all hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs',
}

const href = {
  linkedIn: 'https://www.linkedin.com/in/geisiel',
  gitHub: 'https://github.com/GeisielMelo',
  email: 'mailto:geisiel.nascimento@gmail.com',
  whatsApp: 'https://api.whatsapp.com/send?phone=5571981608087&text="Hello, I would like to speak to Geisiel."',
}

const Footer: React.FC = () => {
  return (
    <footer className='mt-auto font-inter text-sm'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <div className='flex gap-2 lg:fixed bottom-0 left-8 lg:flex-col lg:items-center'>
          <a
            className={css.button}
            target='_blank'
            href={href.gitHub}
            rel='noopener noreferrer'
            aria-label='Explore my projects on my GitHub profile.'
          >
            <GitHubLogoIcon name='GitHub' />
          </a>
          <a
            className={css.button}
            target='_blank'
            href={href.linkedIn}
            rel='noopener noreferrer'
            aria-label='Find more about me on LinkedIn.'
          >
            <LinkedInLogoIcon name='LinkedIn' />
          </a>
          <div className='hidden h-36 w-[1px] lg:block bg-black dark:bg-white' />
        </div>
        <div className='flex gap-2 lg:fixed bottom-0 right-8 lg:flex-col lg:items-center'>
          <a
            className={css.button}
            target='_blank'
            href={href.email}
            rel='noopener noreferrer'
            aria-label='Send me an email.'
          >
            <EnvelopeClosedIcon className='w-4 h-4' name='Email' />
          </a>
          <a
            className={css.button}
            target='_blank'
            href={href.whatsApp}
            rel='noopener noreferrer'
            aria-label='Connect with me directly on WhatsApp.'
          >
            <ChatBubbleIcon name='WhatsApp' />
          </a>
          <div className='hidden h-36 w-[1px] lg:block bg-black dark:bg-white' />
        </div>
      </div>

      <div className='w-full flex justify-center py-4 font-Lexend'>
        <p className='text-xs max-w-max px-2 text-zinc-500 ease-in-out duration-300'>
          © {new Date().getFullYear()} GeisielMelo
        </p>
      </div>
    </footer>
  )
}

export default Footer
