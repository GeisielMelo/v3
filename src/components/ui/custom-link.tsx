import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { FC } from 'react'

const getProjectHref = (repository: Repository): string | null => {
  return repository.live || repository.repo || null
}

const getProjectTitle = (repository: Repository): string => {
  if (repository.live) return 'Live'
  if (repository.repo) return 'GitHub'
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
