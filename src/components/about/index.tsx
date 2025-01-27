import { useTranslations } from 'next-intl'
import { FC } from 'react'

export const About: FC = () => {
  const t = useTranslations('About')

  return (
    <section id='about' className='section'>
      <div className='leading-relaxed'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only my-6'>{t('title')}</h2>
        <p className='mb-4'>{t('paragraph.p1')}</p>
        <p className='mb-4'>{t('paragraph.p2')}</p>
        <p className='mb-4'>{t('paragraph.p3')}</p>
        <p className='mb-4'>{t('paragraph.p4')}</p>
      </div>
    </section>
  )
}
