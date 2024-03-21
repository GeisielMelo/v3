import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className='max-w-5xl w-full lg:pr-36 font-Inter py-24 text-slate-500'>
      <h1 className='mb-1 md:mb-4'>Hi, my name is</h1>
      <h2 className='text-[clamp(20px,6vw,60px)] font-Lexend leading-none font-semibold tracking-tighter text-accent-foreground'>
        Geisiel Melo.
      </h2>
      <h3 className='text-[clamp(20px,6vw,60px)] font-Lexend leading-none font-semibold tracking-tighter text-accent-foreground'>
        I'm a Full Stack Developer
      </h3>
      <div className='flex flex-col gap-4 mt-6 mb-4'>
        <p>
          My interest in <span className='font-bold dark:font-normal dark:text-custom-green'>web development</span>{' '}
          began in 2020 when I worked in the digital market building and editing landing pages to sell products online.
          This experience taught me a lot about HTML and CSS and was enough to spark my curiosity and drive me to
          explore development further.
        </p>
        <p>
          In nowadays im <span className='font-bold dark:font-normal dark:text-custom-green'>looking for a job</span>{' '}
          where i can utilize my skills and knowledge to build useful and functional applications.
        </p>
      </div>
      <div>
        <button
          className='mt-4 transition-all bg-slate-200 hover:bg-slate-100 dark:text-custom-green dark:bg-transparent dark:border dark:border-custom-green dark:hover:bg-slate-800 px-8 py-4 rounded-md'
          onClick={() => navigate('/about')}
        >
          Read more <span>about me</span>
        </button>
      </div>
    </section>
  )
}

export default Home
