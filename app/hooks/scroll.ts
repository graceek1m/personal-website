import { useState, useEffect } from 'react'

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: `-${offset}px 0px -${offset}px 0px`
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sectionIds, offset])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return { activeSection, scrollToSection }
}
