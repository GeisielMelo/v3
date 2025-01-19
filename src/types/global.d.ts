interface Repository {
  name: string
  description: string
  href: {
    github: string
    live: string
    thumbnail: string
  }
  made_at: string
  topics: string[]
  archived: boolean
  stargazers_count: number
  watchers_count: number
  forks: number
  watchers: number
  created_at: string
  updated_at: string
}
