import Link from 'next/link'
import { Button } from '../ui/button'
import { ArchiveIcon } from '@radix-ui/react-icons'

export const ArchiveButton: React.FC<{ locale: string }> = ({ locale }) => {
  return (
    <Link href={`/${locale}/archive`}>
      <Button variant='ghost' className='transition-all dark:hover:text-custom-green dark:hover:bg-slate-800/30'>
        <ArchiveIcon />
      </Button>
    </Link>
  )
}
