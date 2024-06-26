import { Worked } from '@/components/Worked'
// import Download from '@/components/Download'
import data from '@/assets/json/worked.json'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume'
}

const Resume: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center w-full px-6 lg:px-24'>
      <section className='py-10 max-w-5xl w-full'>
        <h1 className='font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground'>
          Where I&#39;ve Worked
        </h1>
        {data.map((element, key) => (
          <Worked data={element} key={key} />
        ))}
        {/* <div className='flex justify-center'><Download /></div>  */}
      </section>
    </main>
  )
}

export default Resume
