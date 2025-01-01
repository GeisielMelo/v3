import { DownloadIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

const Download: React.FC = () => {
  return (
    <Button
      className='cursor-pointer transition-all dark:hover:text-custom-green dark:hover:bg-slate-800/30'
      variant='ghost'
      onClick={() => window.open('static/resume.pdf', '_blank')}
    >
      <DownloadIcon />
    </Button>
  )
}

export default Download
