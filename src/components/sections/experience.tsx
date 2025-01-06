import { title } from 'process'
import { FC } from 'react'

const data = [
  {
    start: '2000',
    end: '2024',
    title: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi. Quas cupiditate, atque voluptas recusandae voluptates id corporis officia minus ullam corrupti at harum alias, sit autem iusto officiis temporibus.',
    tags: 'Node, TypeScript, React, TailwindCSS',
  },
  {
    start: '2000',
    end: '2024',
    title: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi. Quas cupiditate, atque voluptas recusandae voluptates id corporis officia minus ullam corrupti at harum alias, sit autem iusto officiis temporibus.',
    tags: 'Node, TypeScript, React, TailwindCSS',
  },
  {
    start: '2000',
    end: '2024',
    title: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi. Quas cupiditate, atque voluptas recusandae voluptates id corporis officia minus ullam corrupti at harum alias, sit autem iusto officiis temporibus.',
    tags: 'Node, TypeScript, React, TailwindCSS',
  },
]

interface Card {
  start: string
  end: string
  title: string
  description: string
  tags: string
  href?: string
}

const Card: FC<{ data: Card }> = ({ data }) => {
  const tags = data.tags.split(', ')

  return (
    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12'>
      <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />

      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
        {data.start} — {data.end}
      </header>

      <div className='z-10 sm:col-span-6'>
        <h3 className='font-medium leading-snug text-slate-200'>{data.title}</h3>
        <p className='mt-2 text-sm leading-normal'>{data.description}</p>
        <ul className='mt-2 flex flex-wrap'>
          {tags.map((tag, key) => (
            <li key={key} className='mr-1.5 mt-2'>
              <div className='flex items-center rounded-full bg-zinc-400/10 px-3 py-1 text-xs font-medium leading-5 text-zinc-300 '>
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Experience: FC = () => {
  return (
    <>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only my-6'>Experience</h2>
      {data.map((data, key) => (
        <Card data={data} key={key} />
      ))}
    </>
  )
}
