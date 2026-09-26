import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Coins } from 'lucide-react'

interface PromoFloatingAdProps {
  onOpenJoinModal?: () => void
}

export const PromoFloatingAd: React.FC<PromoFloatingAdProps> = ({ onOpenJoinModal }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating ad after scrolling past 350px
      if (window.scrollY > 350 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg"
        >
          <div className="relative rounded-full bg-slate-900 text-white border border-slate-800 shadow-[0_12px_40px_rgba(15,23,42,0.25)] p-2 sm:p-2.5 flex items-center justify-between gap-3">
            {/* Left Info */}
            <div className="flex items-center gap-3 min-w-0 pl-1.5">
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <Coins className="w-3.5 h-3.5 text-[#FD849F]" />
              </div>

              <div className="min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Official Program
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-100 truncate">
                  Up to ₹2,000 monthly shopping benefits
                </p>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="flex items-center gap-1.5 shrink-0">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenJoinModal}
                className="px-4 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Join Free</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FD849F]" />
              </motion.button>

              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="w-7 h-7 rounded-full text-slate-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
