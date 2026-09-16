import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Coins, ArrowRight, User } from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { BrandLogo } from '../common/BrandLogo.tsx'
import { Button } from '../ui/Button.tsx'
import { useRouter } from '../../router/RouterContext.tsx'

export interface NavItem {
  label: string
  href: string
  badge?: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shopping Coin', href: '/#shopping-coin', badge: 'Rewards' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Income', href: '/#income' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export interface NavbarProps {
  onLoginClick?: () => void
  onJoinFreeClick?: () => void
  activeSection?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  onLoginClick,
  onJoinFreeClick,
  activeSection = 'Home',
}) => {
  const { pathname, navigate } = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(activeSection)

  // Sync active item when pathname changes
  useEffect(() => {
    if (pathname === '/partners') {
      setActiveItem('Partners')
    } else if (pathname === '/') {
      setActiveItem(activeSection)
    }
  }, [pathname, activeSection])

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  // Navigation handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (item.href === '/partners') {
      setActiveItem('Partners')
      navigate('/partners')
      return
    }

    if (item.href.includes('#')) {
      const hash = item.href.split('#')[1]
      setActiveItem(item.label)
      if (pathname === '/') {
        const targetElement = document.getElementById(hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        navigate('/', hash)
      }
      return
    }

    // Default: Home
    setActiveItem('Home')
    if (pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <Container size="lg">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Left: WOMUP Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, { label: 'Home', href: '/' })}
              className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-womup-purple rounded-lg"
              aria-label="WOMUP Home"
            >
              <BrandLogo size="md" />
            </a>
          </div>

          {/* Center: Desktop Navigation Menu */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 mx-4"
            aria-label="Desktop Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeItem === item.label
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-womup-purple font-bold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>

                  {/* Optional coin/reward badge for Shopping Coin */}
                  {item.badge && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 leading-none">
                      <Coins className="w-2.5 h-2.5 text-amber-600" />
                      {item.badge}
                    </span>
                  )}

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-womup-purple to-womup-magenta rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right: Action Buttons (Login + Join Free) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<User className="w-4 h-4 text-slate-500" />}
              onClick={onLoginClick}
            >
              Login
            </Button>

            <Button
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={onJoinFreeClick}
            >
              Join Free
            </Button>
          </div>

          {/* Mobile Right: Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-womup-purple/20 cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Animated Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl overflow-hidden shadow-womup-modal"
          >
            <Container size="lg" className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {navItems.map((item, index) => {
                  const isActive = activeItem === item.label
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.18 }}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-purple-50 text-womup-purple font-bold'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {item.badge && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                            <Coins className="w-2.5 h-2.5 text-amber-600" />
                            {item.badge}
                          </span>
                        )}
                      </span>

                      <span className="text-slate-400 text-xs font-mono">→</span>
                    </motion.a>
                  )
                })}
              </nav>

              {/* Mobile Menu Action Buttons */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  leftIcon={<User className="w-4 h-4 text-slate-500" />}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onLoginClick?.()
                  }}
                >
                  Login
                </Button>

                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onJoinFreeClick?.()
                  }}
                >
                  Join Free
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
