import { Featured } from '@/components/Featured'
import { GitProjects } from '@/components/GitProjects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects'
}

const Projects: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full px-6 lg:px-24'>
      <section className='py-10 max-w-5xl w-full'>
        <Featured />
        <GitProjects />
      </section>
    </main>
  )
}

export default Projects
