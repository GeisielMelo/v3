import { Featured } from '@/components/Featured'
import { GitProjects } from '@/components/GitProjects'

const Projects: React.FC = () => {
  return (
    <section className='py-10 max-w-5xl w-full'>
      <Featured />
      <GitProjects />
    </section>
  )
}

export default Projects
