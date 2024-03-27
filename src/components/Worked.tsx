import { useState } from 'react'

type CardProps = {
  data: {
    title: string
    period: string
    locale: string
    description: string
    technologies: string[]
  }
}

export const Worked: React.FC<CardProps> = ({ data }) => {
  const [openCard, setOpenCad] = useState(false)

  return (
    <div
      className='font-Lexend block md:flex gap-0 md:gap-8 w-full px-6 py-6 my-6 rounded-md shadow-md dark:shadow-light-shadow transition-all bg-slate-200/50 dark:bg-custom-navy-light/60 cursor-pointer'
      onClick={() => setOpenCad(!openCard)}
    >
      <h1 className='text-slate-500 font-Inter text-sm'>{data.period}</h1>

      <div className='w-full'>
        <h1>{data.title}</h1>
        <h2 className='text-slate-500 text-sm font-semibold'>{data.locale}</h2>
        {openCard && <p className='my-4 text-slate-500'>{data.description}</p>}

        <div className='flex flex-wrap gap-2 mt-6'>
          {data.technologies.map((element, key) => (
            <p
              className='opacity-70 text-xs px-2 py-1 rounded-full cursor-default dark:hover:text-custom-green hover:opacity-100 border dark:border-custom-green dark:bg-custom-navy-light'
              key={key}
            >
              {element}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
