import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Coins,
  TrendingUp,
} from 'lucide-react'

interface PromoHeroProps {
  onOpenJoinModal?: () => void
}

export const PromoHero: React.FC<PromoHeroProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleJoinClick = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-40 md:pb-28 bg-[#FFF8FA] text-[#05062A] overflow-hidden"
    >
      {/* Soft Pink, Light Pink & Lavender Decorative Background Glows */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-[600px] h-[450px] bg-[#FFD0DD]/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#D8C9ED]/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-6 left-1/3 w-[450px] h-[350px] bg-[#FFC4D1]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            {/* Small Pink Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD0DD]/60 border border-[#FFC4D1] text-xs font-bold uppercase tracking-widest text-[#FD849F]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FD849F]" />
              <span>WOMUP</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight text-[#05062A]">
                Save More.
                <br />
                Shop Smarter.
              </h1>
              {/* Highlighted Text */}
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#FD849F] pt-1">
                Earn More Value.
              </div>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg text-[#555568] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Discover WOMUP — a shopping-focused ecosystem designed to bring more value to your everyday purchases.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <button
                type="button"
                onClick={handleJoinClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FD849F] text-white text-sm font-bold shadow-[0_4px_22px_rgba(253,132,159,0.4)] hover:shadow-[0_6px_28px_rgba(253,132,159,0.55)] hover:bg-[#6651BF] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Join WOMUP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#benefits')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border-2 border-[#6651BF] text-[#05062A] hover:text-white hover:bg-[#6651BF] text-sm font-bold shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Benefits</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-[#555568]"
            >
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#E8DDE3] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <span className="font-semibold text-[#05062A]">Free Registration</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#E8DDE3] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FD849F]" />
                <span className="font-semibold text-[#05062A]">No Initial Investment</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-[#E8DDE3] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#6651BF]" />
                <span className="font-semibold text-[#05062A]">14+ Categories</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Large Premium Promotional Lifestyle Image inside Soft Glow */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Soft Gradient Glow Ring Behind Image */}
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-[#FFD0DD] via-[#FFC4D1] to-[#D8C9ED] blur-lg opacity-80 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative w-full aspect-[4/3] rounded-[28px] sm:rounded-[32px] overflow-hidden border-2 border-white shadow-[0_12px_40px_rgba(5,6,42,0.08)] bg-white"
              >
                {/* Indian Shopper Image */}
                <img
                  src="/images/hero-shopper.jpg"
                  alt="WOMUP Indian Shopper Lifestyle"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Badge 1: Shopping Coin (Top Left) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-3 left-3 sm:top-5 sm:left-5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md text-[#05062A] shadow-[0_8px_30px_rgba(5,6,42,0.12)] border border-[#E8DDE3] flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#FD849F] to-[#6651BF] text-white flex items-center justify-center font-black shadow-xs shrink-0">
                    <Coins className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-[#FD849F] block tracking-wider">
                      Shopping Coin
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#05062A]">
                      Up To ₹2,000 / Mo
                    </span>
                  </div>
                </motion.div>

                {/* Floating Glass Badge 2: Everyday Savings (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-10 right-3 sm:bottom-5 sm:right-5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md text-[#05062A] shadow-[0_8px_30px_rgba(5,6,42,0.12)] border border-[#E8DDE3] flex items-center gap-2 sm:gap-3"
                >
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-[#4ADE80]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-5 sm:h-5 font-black" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase text-[#22C55E] block tracking-wider">
                      Smart Shopping
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#05062A]">
                      Everyday Value
                    </span>
                  </div>
                </motion.div>

                {/* Floating Pill: WOMUP Branding (Bottom Left) */}
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DDE3] shadow-md flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#FD849F]" />
                  <span className="text-[10px] sm:text-xs font-black text-[#05062A] tracking-wide">WOMUP</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
