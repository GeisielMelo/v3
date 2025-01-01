'use client'

import technologiesJson from '@/assets/json/technologies.json'
import { Worked } from '@/components/about/about-worked'
import workedJson from '@/assets/json/worked.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  keywords: technologiesJson,
}

const About: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full px-6 lg:px-24'>
      <section className='max-w-5xl w-full lg:pr-36 font-Inter py-10 text-slate-500'>
        <h1 className='font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground'>
          About
        </h1>
        <div className='flex flex-col gap-2 my-6'>
          <p>
            My interest in <span className='font-bold dark:font-normal dark:text-custom-green'>web development</span>{' '}
            began in 2020 when I worked in the digital market building and editing landing pages to sell products
            online. This experience taught me a lot about HTML and CSS and was enough to spark my curiosity and drive me
            to explore development further.
          </p>
          <p>
            In nowadays im <span className='font-bold dark:font-normal dark:text-custom-green'>looking for a job</span>{' '}
            where i can utilize my skills and knowledge to build useful and functional applications.
          </p>
          <p>Here are a few technologies that I&#39;ve been using recently!</p>
          <ul className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4'>
            {technologiesJson.map((technology, key) => (
              <li
                key={key}
                className="before:content-['▹'] before:dark:text-custom-green before:text-black before:pr-2 font-Lexend text-sm"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='py-10 max-w-5xl w-full'>
        <h1 className='font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground'>
          Where I&#39;ve Worked
        </h1>
        {workedJson.map((element, key) => (
          <Worked data={element} key={key} />
        ))}
      </section>
    </main>
  )
}

export default About
