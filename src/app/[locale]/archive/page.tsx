import { Archive } from '@/components/archive'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Archive',
}

export default function Page() {
  return <Archive />
}
