import { ContactForm } from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact'
}

const Contact: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full px-6 lg:px-24'>
      <section className='font-Inter py-10 max-w-5xl w-full'>
        <h1 className='text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground'>
          Get In Touch
        </h1>
        <p className='mt-8 mb-4 text-base text-slate-900 dark:text-slate-400 lg:pr-36 max-w-3xl'>
          I&#39;m actively seeking new opportunities, so feel free to reach out anytime. Whether you have a question or
          simply want to say hello, I&#39;ll do my best to respond promptly!
        </p>
        <ContactForm />
      </section>
    </main>
  )
}

export default Contact
