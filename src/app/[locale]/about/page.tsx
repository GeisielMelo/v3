import data from '@/assets/json/technologies.json'
import About from '@/components/about'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  keywords: data,
}

export default function Page() {
  return <About />
}
