'use client'

import { useSection } from '@/context/SectionContext'
import { useEffect, useRef } from 'react'

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
      <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 h-dvh bg-red-500' ref={about}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi. Quas cupiditate, atque
          voluptas recusandae voluptates id corporis officia minus ullam corrupti at harum alias, sit autem iusto
          officiis temporibus.
        </p>
      </section>

      <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 h-dvh' ref={experience}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi. Quas cupiditate, atque
          voluptas recusandae voluptates id corporis officia minus ullam corrupti at harum alias, sit autem iusto
          officiis temporibus.
        </p>
      </section>

      <section
        id='projects'
        className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 h-dvh bg-blue-500'
        ref={projects}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi. Quas cupiditate, atque
          voluptas recusandae voluptates id corporis officia minus ullam corrupti at harum alias, sit autem iusto
          officiis temporibus.
        </p>
      </section>
    </div>
  )
}

export default Sections
