import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'
import { FC } from 'react'

export const DropdownLanguage: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className='anchor cursor-pointer'>
          <Languages size={16} strokeWidth={1.5} />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-36'>
        <a href='/en'>
          <DropdownMenuItem>English</DropdownMenuItem>
        </a>

        <a href='/pt'>
          <DropdownMenuItem>Português</DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
