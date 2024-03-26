import { Worked } from '@/components/Worked'
import Download from '@/components/Download'

const data = [
  {
    title: 'Freelance Web Developer',
    period: 'Ago 2022 — Present',
    locale: 'Remote - Brazil',
    description:
      'Working as a full-stack developer, I have been involved in the complete development cycle of applications, from planning to launch, using the MERN and TS tech stack. I developed APIs and interfaces, prioritizing user experience and applying best programming practices, including version control with Git.',
    technologies: ['MongoDB', 'Express', 'React', 'Node', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'E-Commerce',
    period: 'Jan 2020 — Mar 2022',
    locale: 'Remote - Brazil',
    description:
      'I worked on brand development and identity creation, efficient traffic management, customer relations, creating a user-friendly environment, and made direct contributions to design and data analysis',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
]

const Resume: React.FC = () => {
  return (
    <section className='py-28 max-w-5xl w-full'>
      <h1 className='font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground'>
        Where I’ve Worked
      </h1>
      {data.map((element, key) => (
        <Worked data={element} key={key} />
      ))}
      <div className='flex justify-center'>
        <Download />
      </div>
    </section>
  )
}

export default Resume
