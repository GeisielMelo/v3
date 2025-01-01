import { useState } from 'react'
import Image from 'next/image'

export const ImageLoader: React.FC<{ element: FeaturedProps }> = ({ element }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const css = 'cursor-pointer aspect-video block w-full h-auto'

  return (
    <a href={element.live} target='_blank' rel='noopener' className={css + (!imageLoaded && ' animate-pulse')}>
      <Image
        className={css + (imageLoaded ? ' block rounded-t-lg' : ' hidden')}
        src={element.image}
        alt={`${element.title} preview image.`}
        loading='eager'
        onLoad={() => setImageLoaded(true)}
        sizes='100vw'
        width={600}
        height={300}
        title={`Featured project ${element.title}.`}
        priority
      />
    </a>
  )
}
