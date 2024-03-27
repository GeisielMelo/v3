import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import gitRepos from '../assets/json/gitRepos.json'

type IData = {
  name: string
  description: string
  topics: string[]
  html_url: string
  homepage?: string
}

export const GitProjects: React.FC = () => {
  const data: IData[] = gitRepos

  return (
    <>
      <h2 className='font-Inter leading-none tracking-tighter text-accent-foreground mb-8 dark:text-custom-green'>
        Take a look at my personal Git projects.
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((project, index) => (
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
    </>
  )
}
