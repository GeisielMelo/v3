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
      <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 leading-relaxed' ref={about}>
        <p className='mb-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ea ratione consequuntur ad impedit atque quam
          sit quibusdam? Eligendi officia vero saepe voluptate facere eius ea voluptates dolorem adipisci neque. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Illo dolorum maxime optio dignissimos explicabo.
        </p>

        <p className='mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque sequi ducimus! Porro pariatur
          molestias repellat temporibus hic illum, modi beatae dignissimos labore? Sint enim officiis laudantium
          repellat voluptatibus eaque!
        </p>

        <p className='mb-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quibusdam illo harum ipsam minima distinctio
          suscipit voluptatibus facilis debitis earum, magni hic, odio recusandae vitae aliquid ut. Ut, iste dolores.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui at temporibus excepturi cum? Minima
          soluta reprehenderit accusantium adipisci quam facilis corporis illo beatae!
        </p>

        <p className='mb-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, sint quasi unde hic aspernatur fugit incidunt
          eum officia optio perspiciatis maiores veritatis? Placeat, nulla.
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
