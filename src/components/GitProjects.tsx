import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import gitRepos from '../assets/json/gitRepos.json'
import { useState } from 'react'

type IData = {
  name: string
  description: string
  topics: string[]
  html_url: string
  homepage?: string
}

export const GitProjects: React.FC = () => {
  const data: IData[] = gitRepos
  const [maxCards, setMaxCards] = useState(6)

  const handleSetCardsNumber = () => {
    if (maxCards >= data.length) setMaxCards(6)
    else setMaxCards(maxCards + 3)
  }

  return (
    <div>
      <h1 className='text-center font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground mb-2 mt-20'>
        My personal Git projects.
      </h1>
      <h2 className='text-center font-Inter leading-none tracking-tighter text-accent-foreground mb-8 dark:text-custom-green'>
        Take a look
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.slice(0, maxCards).map((project, index) => (
          <div
            key={index}
            className='flex flex-col p-6 gap-8 font-Lexend md:flex rounded-md shadow-md transition-all bg-slate-200/50 dark:bg-custom-navy-light/60 hover:shadow-black/50 dark:hover:shadow-custom-green/50'
          >
            <div className='flex items-center justify-between capitalize gap-2'>
              <h1>{project.name}</h1>
              <div>
                {project.homepage && (
                  <Button
                    className='dark:text-white dark:hover:bg-slate-800/30 dark:hover:text-custom-green transition-all cursor-pointer'
                    variant='ghost'
                    size='sm'
                    onClick={() => window.open(project.homepage)}
                  >
                    <ExternalLinkIcon />
                  </Button>
                )}
                <Button
                  className='dark:text-white dark:hover:bg-slate-800/30 dark:hover:text-custom-green transition-all cursor-pointer'
                  variant='ghost'
                  size='sm'
                  onClick={() => window.open(project.html_url)}
                >
                  <GitHubLogoIcon />
                </Button>
              </div>
            </div>

            <p className='text-sm font-Inter'>{project.description}</p>

            <ul className='flex flex-wrap mt-auto gap-2 text-slate-500 font-Inter text-sm capitalize'>
              {project.topics.map((topic, key) => (
                <li
                  key={key}
                  className="before:content-['▹'] before:dark:text-custom-green before:text-black before:pr-2 font-Lexend text-xs"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='flex justify-center font-Inter'>
        <Button
          className='px-6 py-4 mt-12 border cursor-pointer transition-all dark:border-white border-slate-800/30 dark:hover:text-custom-green dark:hover:bg-slate-800/30 dark:hover:border-custom-green'
          variant='ghost'
          onClick={() => handleSetCardsNumber()}
        >
          {maxCards >= data.length ? 'Hide!' : 'More!'}
        </Button>
      </div>
    </div>
  )
}
