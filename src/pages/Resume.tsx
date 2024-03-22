import { Card } from '@/components/resume/Card'
import { Button } from '@/components/ui/button'
import { DownloadIcon } from '@radix-ui/react-icons'

const data = [
  {
    title: 'Frontend Developer',
    period: 'Out 2020 — Fev 2022',
    locale: 'Brazil',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Backend Developer',
    period: 'Out 2022 — Fev 2024',
    locale: 'USA',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    technologies: ['Angular', 'TypeScript', 'TailwindCSS'],
  },
]

const Resume: React.FC = () => {
  return (
    <section className='py-28 max-w-5xl w-full'>
      <h1 className='font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground'>
        Where I’ve Worked
      </h1>
      {data.map((element, key) => (
        <Card data={element} key={key} />
      ))}
      <div className='flex justify-center'>
        <Button
          className='cursor-pointer transition-all dark:hover:text-custom-green dark:hover:bg-slate-800/30'
          variant='ghost'
        >
          <DownloadIcon />
        </Button>
      </div>
    </section>
  )
}

export default Resume
