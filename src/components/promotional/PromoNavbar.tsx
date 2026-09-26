import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <div className="fixed top-3.5 sm:top-4 left-0 right-0 z-50 flex justify-center px-3.5 sm:px-6 pointer-events-none">
      <header
        className={`pointer-events-auto w-full max-w-4xl rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 flex items-center justify-between border ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-purple-200/80 shadow-[0_10px_35px_rgba(124,58,237,0.1)]'
            : 'bg-white/90 backdrop-blur-xl border-purple-100/80 shadow-[0_6px_25px_rgba(124,58,237,0.06)]'
        }`}
      >
        {/* Minimal Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer pl-1"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('#home')
          }}
        >
          <BrandLogo size="sm" showTagline={false} inverted={false} />
        </a>

        {/* Desktop Minimal Nav Links with Animated Active Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-purple-50/60 p-1 rounded-full border border-purple-100">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-[#FF1E7A]' : 'text-slate-600 hover:text-purple-950'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-white shadow-xs border border-pink-200/80"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            )
          })}
        </nav>

        {/* Minimal Right CTA */}
        <div className="hidden md:flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleJoinClick}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FF1E7A] via-[#E11D48] to-[#7C3AED] hover:from-[#E11D48] hover:to-[#6366F1] text-white text-xs font-bold shadow-[0_4px_18px_rgba(255,30,122,0.45)] ring-1 ring-white/25 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-3.5 h-3.5 text-pink-100" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center pr-1">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-800 hover:bg-purple-50 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-purple-900" /> : <Menu className="w-5 h-5 text-purple-900" />}
          </button>
        </div>
      </header>

      {/* Floating Minimal Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pointer-events-auto absolute top-16 left-4 right-4 max-w-sm mx-auto p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-purple-200/80 shadow-2xl space-y-3 md:hidden z-50"
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
                        ? 'bg-pink-50/80 text-[#FF1E7A] font-bold border border-pink-200/60'
                        : 'text-slate-600 hover:bg-purple-50/60'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
            </div>

            <div className="pt-2 border-t border-purple-100">
              <button
                type="button"
                onClick={handleJoinClick}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF1E7A] via-[#E11D48] to-[#7C3AED] text-white text-xs font-bold shadow-[0_4px_16px_rgba(255,30,122,0.4)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-100" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
