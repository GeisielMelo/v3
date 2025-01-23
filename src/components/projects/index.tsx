/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'
import { FC } from 'react'

export const Projects: FC = () => {
  const t = useTranslations('Projects')
  const keys = ['c1', 'c2', 'c3', 'c4']

  return (
    <section id='projects' className='section'>
      <div>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only my-6'>Projects</h2>

        {keys.map((key, index) => (
          <div key={index} className='mb-12'>
            <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
              <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />

              <div className='z-10 sm:order-2 sm:col-span-6'>
                <h3>{t(`cards.${key}.title`)}</h3>
                <p className='mt-2 text-sm leading-normal'>{t(`cards.${key}.description`)}</p>
              </div>

              <img
                src={t(`cards.${key}.image`)}
                alt='placeholder image'
                className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
