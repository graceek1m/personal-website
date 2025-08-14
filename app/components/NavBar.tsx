'use client'

import { useState, useEffect } from 'react'

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Track which section is currently visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
      }
    )

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Grace
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700 scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {/* Active indicator dot */}
                {activeSection === item.id && (
                  <span className="ml-2 w-2 h-2 bg-blue-600 rounded-full inline-block animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center space-y-1 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-600 group-hover:bg-blue-600 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 group-hover:bg-blue-600 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-600 group-hover:bg-blue-600 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="pt-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="ml-2 text-blue-600">•</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
