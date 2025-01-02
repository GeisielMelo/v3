'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'

interface SectionContextType {
  visibleSection: string | null
  observeSections: (sections: HTMLElement[]) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visibleSection, setVisibleSection] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  const observeSections = (sections: HTMLElement[]) => {
    if (observer.current) {
      sections.forEach((section) => observer.current?.unobserve(section))
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
          }
        })
      },
      { root: null, threshold: 0.5 },
    )

    sections.forEach((section) => observer.current?.observe(section))
  }

  useEffect(() => {
    return () => observer.current?.disconnect()
  }, [])

  return <SectionContext.Provider value={{ visibleSection, observeSections }}>{children}</SectionContext.Provider>
}

export const useSection = () => {
  const context = useContext(SectionContext)
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider')
  }
  return context
}
