import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { FC } from 'react'

const getProjectHref = ({ href }: Repository): string | null => {
  return href.live || href.github || null
}

const getProjectTitle = ({ href }: Repository): string => {
  if (href.live) return 'Live'
  if (href.github) return 'GitHub'
  return ''
}

export const CustomLink: FC<{ repository: Repository }> = ({ repository }) => {
  const href = getProjectHref(repository)
  const title = getProjectTitle(repository)

  if (!href) return null

  return (
    <a href={href} target='_blank' rel='noopener noreferrer' title={title}>
      {title === 'Live' ? <ExternalLinkIcon height={16} width={16} /> : <GitHubLogoIcon height={16} width={16} />}
    </a>
  )
}
