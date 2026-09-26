import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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

      const sections = ['home', 'about', 'how-it-works', 'for-customers', 'for-vendors', 'income', 'categories', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'For Customers', href: '#for-customers', id: 'for-customers' },
    { name: 'For Vendors', href: '#for-vendors', id: 'for-vendors' },
    { name: 'Income', href: '#income', id: 'income' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    let target = href
    if (target === '#about' && !document.querySelector('#about')) {
      target = '#how-it-works'
    }
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadClick = () => {
    setIsMobileMenuOpen(false)
    const el = document.querySelector('#download-app') || document.querySelector('#contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else if (onOpenJoinModal) {
      onOpenJoinModal()
    }
  }

  return (
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-pink-100 shadow-[0_8px_30px_rgba(255,0,122,0.06)]'
            : 'bg-white/90 backdrop-blur-xl border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
        }`}
      >
        {/* Brand Logo with Tagline */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('#home')
          }}
        >
          <BrandLogo size="sm" showTagline={true} inverted={false} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive ? 'text-[#FF007A] font-bold' : 'text-slate-600 hover:text-[#0A0E2A]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-pink-50 border border-pink-100"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            )
          })}
        </nav>

        {/* Right CTA Button: Download App */}
        <div className="hidden sm:flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleDownloadClick}
            className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold shadow-[0_4px_16px_rgba(255,0,122,0.35)] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Download App</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center pr-1">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-800 hover:bg-pink-50 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FF007A]" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>
      </header>

      {/* Floating Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pointer-events-auto absolute top-16 left-4 right-4 max-w-sm mx-auto p-4 rounded-3xl bg-white/98 backdrop-blur-2xl border border-pink-100 shadow-2xl space-y-3 lg:hidden z-50"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-left px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-pink-50 text-[#FF007A] font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={handleDownloadClick}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] text-white text-xs font-bold shadow-[0_4px_16px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Download App</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
