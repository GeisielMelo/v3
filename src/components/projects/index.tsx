'use client'

import { Featured } from './projects-featured'
import { Git } from './projects-git'

const Projects: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full px-6 lg:px-24'>
      <section className='py-10 max-w-5xl w-full'>
        <Featured />
        <Git />
      </section>
    </main>
  )
}

export default Projects
