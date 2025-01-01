import Contact from '@/components/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Page() {
  return <Contact />
}
