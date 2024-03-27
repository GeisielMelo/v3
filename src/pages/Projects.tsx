import { Featured } from '@/components/Featured'
import { GitProjects } from '@/components/GitProjects'

const Projects: React.FC = () => {
  return (
    <section className='py-10 max-w-5xl w-full'>
      <h1 className='font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground mb-8'>
        Some Things I’ve Built
      </h1>
      <Featured />
      <GitProjects />
    </section>
  )
}

export default Projects
