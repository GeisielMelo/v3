'use client'

import { useSection } from '@/context/SectionContext'
import { useEffect, useRef } from 'react'
import { About } from './about'
import { Experience } from './experience'
import { Projects } from './projects'

const Sections = () => {
  const about = useRef<HTMLElement | null>(null)
  const experience = useRef<HTMLElement | null>(null)
  const projects = useRef<HTMLElement | null>(null)

  const { observeSections } = useSection()

  useEffect(() => {
    const sections = [about.current, experience.current, projects.current].filter(Boolean) as HTMLElement[]

    observeSections(sections)
  }, [observeSections])

  return (
    <div>
      <section id='about' className='section' ref={about}>
        <About />
      </section>

      <section id='experience' className='section' ref={experience}>
        <Experience />
      </section>

      <section id='projects' className='section' ref={projects}>
        <Projects />
      </section>
    </div>
  )
}

export default Sections
