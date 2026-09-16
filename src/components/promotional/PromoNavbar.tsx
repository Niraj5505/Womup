import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { BrandLogo } from '../common/BrandLogo.tsx'

interface PromoNavbarProps {
  onOpenJoinModal?: () => void
}

export const PromoNavbar: React.FC<PromoNavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'benefits', 'how-it-works', 'categories', 'about']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Benefits', href: '#benefits', id: 'benefits' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Categories', href: '#categories', id: 'categories' },
    { name: 'About', href: '#about', id: 'about' },
  ]

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleJoinClick = () => {
    setIsMobileMenuOpen(false)
    if (onOpenJoinModal) {
      onOpenJoinModal()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8DDE3] py-3.5 shadow-[0_4px_20px_rgba(5,6,42,0.06)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E8DDE3]/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick('#home')
            }}
          >
            <BrandLogo size="md" showTagline={false} inverted={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className={`text-sm font-semibold transition-colors duration-200 cursor-pointer relative py-1 group ${
                    isActive ? 'text-[#FD849F]' : 'text-[#05062A] hover:text-[#FD849F]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#FD849F] rounded-full transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={handleJoinClick}
              className="px-6 py-2.5 rounded-full bg-[#FD849F] text-white text-sm font-bold shadow-[0_4px_18px_rgba(253,132,159,0.35)] hover:shadow-[0_6px_24px_rgba(253,132,159,0.5)] hover:bg-[#6651BF] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Join Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#E8DDE3] text-[#05062A] hover:text-[#FD849F] transition-colors cursor-pointer shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8DDE3] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className={`px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#FFD0DD]/30 text-[#FD849F]'
                      : 'text-[#05062A] hover:bg-[#FFF8FA] hover:text-[#FD849F]'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleJoinClick}
              className="w-full py-3 rounded-full bg-[#FD849F] text-white text-sm font-bold shadow-[0_4px_18px_rgba(253,132,159,0.35)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Join Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
