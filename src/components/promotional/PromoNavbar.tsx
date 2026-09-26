import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '../common/BrandLogo.tsx'

interface PromoNavbarProps {
  onOpenJoinModal?: () => void
}

export const PromoNavbar: React.FC<PromoNavbarProps> = ({ onOpenJoinModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'for-customers', 'for-vendors', 'income', 'categories', 'download-app', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160 && rect.bottom >= 160) {
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
    { name: 'About', href: '#how-it-works', id: 'about' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'For Customers', href: '#for-customers', id: 'for-customers' },
    { name: 'For Vendors', href: '#for-vendors', id: 'for-vendors' },
    { name: 'Income', href: '#income', id: 'income' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
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
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive ? 'text-[#FF007A]' : 'text-slate-600 hover:text-[#0A0E2A]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-pink-50 border border-pink-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            )
          })}
        </nav>

        {/* Desktop Download App CTA Button */}
        <div className="hidden lg:flex items-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleDownloadClick}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] text-white text-xs font-black shadow-[0_4px_14px_rgba(255,0,122,0.35)] transition-all cursor-pointer"
          >
            Download App
          </motion.button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleDownloadClick}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] text-white text-[11px] font-bold shadow-xs cursor-pointer"
          >
            Download
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-pink-50 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-pink-100 bg-white px-4 pt-3 pb-5 mt-2 space-y-2"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left px-3 py-2 text-sm font-bold text-slate-700 hover:text-[#FF007A] rounded-xl hover:bg-pink-50 transition-all cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
