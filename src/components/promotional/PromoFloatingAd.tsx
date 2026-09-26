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
          <div className="relative rounded-full bg-[#0A0724]/95 backdrop-blur-2xl text-white border border-purple-400/40 shadow-[0_16px_50px_rgba(10,7,36,0.45)] p-2 sm:p-2.5 flex items-center justify-between gap-3">
            {/* Left Info */}
            <div className="flex items-center gap-3 min-w-0 pl-1.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                <Coins className="w-4 h-4 text-white" />
              </div>

              <div className="min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold text-purple-300 tracking-wider">
                    Official Program
                  </span>
                </div>
                <p className="text-xs font-semibold text-white truncate">
                  Up to ₹2,000 monthly shopping benefits
                </p>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="flex items-center gap-1.5 shrink-0">
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenJoinModal}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FF1E7A] via-[#E11D48] to-[#7C3AED] hover:from-[#E11D48] hover:to-[#6366F1] text-white text-xs font-bold shadow-[0_4px_16px_rgba(255,30,122,0.45)] ring-1 ring-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Join Free</span>
                <ArrowRight className="w-3.5 h-3.5 text-pink-100" />
              </motion.button>

              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="w-7 h-7 rounded-full text-purple-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
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
