import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Store, Percent, TrendingUp, Play, X, ArrowRight } from 'lucide-react'

interface PromoHeroProps {
  onOpenJoinModal?: () => void
}

export const PromoHero: React.FC<PromoHeroProps> = ({ onOpenJoinModal }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleJoinNow = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  const valueCards = [
    {
      icon: Gift,
      iconColor: 'text-[#FF007A]',
      bgColor: 'bg-pink-50',
      line1: 'Monthly',
      line2: 'Shopping Coin',
    },
    {
      icon: Store,
      iconColor: 'text-[#6366F1]',
      bgColor: 'bg-indigo-50',
      line1: 'Wide',
      line2: 'Shop Network',
    },
    {
      icon: Percent,
      iconColor: 'text-[#2563EB]',
      bgColor: 'bg-blue-50',
      line1: 'Real Savings',
      line2: 'on Purchases',
    },
    {
      icon: TrendingUp,
      iconColor: 'text-[#A855F7]',
      bgColor: 'bg-purple-50',
      line1: 'Income',
      line2: 'Opportunity',
    },
  ]

  return (
    <section
      id="home"
      className="relative pt-6 sm:pt-12 pb-10 sm:pb-16 bg-gradient-to-b from-[#FFF5F9] via-[#FAF7FD] to-white text-[#0A0E2A] overflow-hidden border-b border-pink-100/50"
    >
      {/* Soft Ambient Radial Background Glows matching mockup */}
      <div className="absolute top-10 right-1/4 w-[480px] h-[480px] bg-gradient-to-bl from-pink-300/20 via-purple-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 left-10 w-[380px] h-[380px] bg-gradient-to-tr from-blue-300/15 via-pink-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Stacked 3-line Headline, Subtitle, Dual CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 pt-2 sm:pt-4">
            {/* 3-line stacked headline matching mockup 1_home_hero.png */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.08] text-[#0A0E2A]">
                Smart <br />
                Shopping <br />
                <span className="bg-gradient-to-r from-[#FF007A] via-[#E11D48] to-[#9333EA] bg-clip-text text-transparent">
                  Better Living
                </span>
              </h1>
            </div>

            {/* Subtitles from mockup */}
            <div className="space-y-1 text-slate-700 font-bold text-base sm:text-lg">
              <p className="leading-snug">Save on Every Purchase</p>
              <p className="leading-snug">Earn with Every Connection</p>
            </div>

            {/* Dual CTAs matching Mockup 1: [Join Now] and [> Watch Video] */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Pink Pill: Join Now */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleJoinNow}
                className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-base font-black shadow-[0_8px_25px_rgba(255,0,122,0.38)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </motion.button>

              {/* White Pill with Pink Border: Watch Video */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-pink-50/50 text-[#0A0E2A] text-base font-bold border-2 border-pink-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-pink-100 text-[#FF007A] flex items-center justify-center shrink-0">
                  <Play className="w-3.5 h-3.5 fill-[#FF007A] ml-0.5" />
                </div>
                <span>Watch Video</span>
              </motion.button>
            </div>
          </div>

          {/* Right Column: Indian Woman Shopper with phone and fresh grocery bag + Save/Shop/Earn Badge */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Soft ambient radial backing behind the woman */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/25 via-purple-300/20 to-blue-300/20 rounded-full blur-2xl transform scale-95" />

              {/* Clean seamless image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(255,0,122,0.12)]">
                <img
                  src="/images/hero_woman_grocery.jpg"
                  alt="WOMUP Happy Customer pointing to phone with fresh groceries"
                  className="w-full h-auto object-cover max-h-[520px]"
                />

                {/* Vertical floating badge from Mockup 1: Save / Shop / Earn */}
                <div className="absolute top-8 right-4 flex flex-col gap-2 z-20">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="px-4 py-1.5 rounded-xl bg-[#FF007A] text-white font-black text-xs sm:text-sm tracking-wide shadow-lg text-center"
                  >
                    Save
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                    className="px-4 py-1.5 rounded-xl bg-[#7C3AED] text-white font-black text-xs sm:text-sm tracking-wide shadow-lg text-center"
                  >
                    Shop
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="px-4 py-1.5 rounded-xl bg-[#2563EB] text-white font-black text-xs sm:text-sm tracking-wide shadow-lg text-center"
                  >
                    Earn
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Value Cards inside a Single Unified White Pill Container from Mockup 1 */}
        <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl border border-pink-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 sm:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {valueCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center p-3 group hover:bg-pink-50/30 rounded-2xl transition-colors"
                >
                  <div className={`w-12 h-12 rounded-2xl ${card.bgColor} ${card.iconColor} flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm sm:text-base font-black text-[#0A0E2A] leading-tight">
                    {card.line1}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500 mt-0.5 leading-snug">
                    {card.line2}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-black text-[#0A0E2A]">
                  How WOMUP Works Video
                </h3>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
              <div className="aspect-video w-full rounded-2xl bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FF007A] flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <div className="text-lg font-black">WOMUP Smart Shopping &amp; Earning System</div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  Discover how WOMUP connects smart customers with trusted local vendors to save on every purchase and earn income up to 7 referral levels.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsVideoOpen(false)
                    handleJoinNow()
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#FF007A] text-white font-bold text-xs hover:bg-[#E11D48] transition-colors"
                >
                  Join WOMUP Today
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
