import { DownloadIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

const DownloadResume = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('static/resume.pdf')

      if (!response.ok) throw new Error('Something went wrong.')

      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = blobUrl
      link.setAttribute('download', 'resume.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Something went wrong.')
    }
  }

  return (
    <Button
      className='cursor-pointer transition-all dark:hover:text-custom-green dark:hover:bg-slate-800/30'
      variant='ghost'
      onClick={handleDownload}
    >
      <DownloadIcon />
    </Button>
  )
}

export default DownloadResume
