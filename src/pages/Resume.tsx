import { Worked } from '@/components/Worked'
// import Download from '@/components/Download'
import data from '../assets/json/worked.json'

const Resume: React.FC = () => {
  return (
    <section className='py-28 max-w-5xl w-full'>
      <h1 className='font-Inter text-[clamp(20px,4vw,25px)] leading-none font-semibold tracking-tighter text-accent-foreground'>
        Where I’ve Worked
      </h1>
      {data.map((element, key) => (
        <Worked data={element} key={key} />
      ))}
      {/* <div className='flex justify-center'>
        <Download />
      </div> */}
    </section>
  )
}

export default Resume
