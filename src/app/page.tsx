import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center w-full px-6 lg:px-24'>
      <section className='flex flex-col justify-center max-w-5xl w-full lg:pr-36 font-Inter py-10 min-h-[calc(100dvh-125px)] text-slate-500'>
        <label className='mb-1 md:mb-4'>Hi, my name is</label>
        <span className='text-[clamp(20px,6vw,60px)] font-Lexend leading-none font-semibold tracking-tighter text-accent-foreground'>
          Geisiel Melo.
        </span>
        <h1 className='text-[clamp(20px,6vw,60px)] font-Lexend leading-none font-semibold tracking-tighter text-accent-foreground'>
          I&#39;m a Full Stack Developer
        </h1>
        <div className='my-4 max-w-lg'>
          <p>
            Building exceptional digital experiences is my specialty as a developer. I am currently focused on{' '}
            <span className='font-bold dark:font-normal dark:text-custom-green'>web development</span> where I can
            utilize my skills and knowledge to create applications that are useful and functional.
          </p>
        </div>

        <Link
          className='max-w-56 mt-4 transition-all bg-slate-200 hover:bg-slate-100 dark:text-custom-green dark:bg-transparent border dark:border-custom-green dark:hover:bg-slate-800 px-8 py-4 rounded-md'
          href='/about'
        >
          Read more <span>about me</span>
        </Link>
      </section>
    </main>
  )
}
