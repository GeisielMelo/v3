import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'
import Link from 'next/link'

export const DropdownLanguage: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='transition-all dark:hover:bg-slate-800/30'>
          <Languages size={16} strokeWidth={1} absoluteStrokeWidth />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-36 dark:bg-custom-navy'>
        <DropdownMenuItem className='dark:hover:text-custom-green dark:hover:bg-slate-800/30'>
          <Link href='/en'>English</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className='dark:hover:text-custom-green dark:hover:bg-slate-800/30'>
          <Link href='/pt'>Português</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
