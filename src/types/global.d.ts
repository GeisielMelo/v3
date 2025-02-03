interface DataLayerEvent {
  event: string
  [key: string]: string | number | boolean | undefined
}

interface Window {
  dataLayer: {
    push: (event: DataLayerEvent) => void
  }
}

interface Repository {
  name: string
  made_at: string
  repo: string
  live: string
  tags: string[]
  date: string
  archive: boolean
}
