import { GitHubLogoIcon } from '@radix-ui/react-icons'
import featuredJson from '../assets/json/featured.json'
import { Button } from './ui/button'

type FeaturedProps = {
  title: string
  description: string
  image: string
  git: string
  live: string
  technologies: string[]
}

export const Featured: React.FC = () => {
  const data: FeaturedProps[] = featuredJson

  return (
    <div>
      <h1 className='text-center font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground mb-2'>
        Some Things I’ve Built
      </h1>
      <h2 className='text-center font-Inter leading-none tracking-tighter text-accent-foreground mb-8 dark:text-custom-green'>
        Selected Work
      </h2>
      <div className='grid sm:grid-cols-2 gap-4'>
        {data.map((element, key) => (
          <div
            className='rounded-xs rounded-md shadow-md transition-all bg-slate-200/50 dark:bg-custom-navy-light/60'
            key={key}
          >
            <img
              className='rounded-t-lg cursor-pointer object-cover'
              src={element.image}
              alt={`${element.title} preview image.`}
              onClick={() => window.open(element.live, '_blank')}
            />

            <div className='flex flex-col p-4 relative'>
              <div className='flex items-center justify-between'>
                <h1 className='font-Lexend text-md'>{element.title}</h1>
                <Button
                  className='dark:bg-transparent dark:hover:text-custom-green transition-all'
                  variant='ghost'
                  size='sm'
                  onClick={() => window.open(element.git, '_blank')}
                >
                  <GitHubLogoIcon />
                </Button>
              </div>
              <p className='font-Inter text-sm my-4'>{element.description}</p>
              <ul className='flex flex-wrap gap-2 capitalize'>
                {element.technologies.map((tech, techKey) => (
                  <li className='font-Inter text-xs opacity-40' key={techKey}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
