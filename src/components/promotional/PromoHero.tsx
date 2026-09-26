import React from 'react'
import { motion } from 'framer-motion'
import { User, Store, ArrowRight, Coins, Percent, TrendingUp, Sparkles } from 'lucide-react'

interface PromoHeroProps {
  onOpenJoinModal?: () => void
}

export const PromoHero: React.FC<PromoHeroProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCustomerJoin = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  const handleVendorRegister = () => {
    scrollTo('#for-vendors')
  }

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 bg-gradient-to-b from-pink-50/40 via-white to-blue-50/30 text-[#0A0E2A] overflow-hidden border-b border-pink-100/60"
    >
      {/* Radiant Background Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Headlines, Subtitle, Dual CTAs & 4 Value Cards */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            {/* Main Headline (Exact 3-line Stack from Mockup) */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.06] text-[#0A0E2A]">
                Smart <br />
                <span className="text-[#FF007A] drop-shadow-xs">Shopping</span> <br />
                Better Living
              </h1>
            </div>

            {/* Subtitles */}
            <div className="space-y-1 text-slate-600 font-medium text-base sm:text-lg">
              <p className="leading-snug">Save on Every Purchase</p>
              <p className="leading-snug">Earn with Every Connection</p>
            </div>

            {/* Dual Action CTAs from Mockup */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Pink Pill: Join as Customer */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCustomerJoin}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Join as Customer</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.button>

              {/* Blue Pill: Register as Vendor */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleVendorRegister}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(30,58,138,0.3)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Store className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Register as Vendor</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.button>
            </div>

            {/* 4 Bottom Value Cards (Matching Mockup 1) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Card 1: Monthly Shopping Coin */}
              <div className="bg-white rounded-2xl p-3.5 border border-pink-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center group hover:border-pink-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-1.5 shadow-xs">
                  <Coins className="w-5 h-5" />
                </div>
                <div className="text-base font-black text-[#0A0E2A] leading-tight">₹2,000</div>
                <div className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                  Monthly Shopping Coin
                </div>
              </div>

              {/* Card 2: Nearby Local Shops */}
              <div className="bg-white rounded-2xl p-3.5 border border-indigo-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center group hover:border-indigo-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5 shadow-xs">
                  <Store className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-[#0A0E2A] leading-tight">Nearby</div>
                <div className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                  Local Shops
                </div>
              </div>

              {/* Card 3: Real Savings */}
              <div className="bg-white rounded-2xl p-3.5 border border-purple-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center group hover:border-purple-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5 shadow-xs">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-[#0A0E2A] leading-tight">Real</div>
                <div className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                  Savings
                </div>
              </div>

              {/* Card 4: Income Opportunity */}
              <div className="bg-white rounded-2xl p-3.5 border border-blue-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center group hover:border-blue-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 shadow-xs">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-[#0A0E2A] leading-tight">Income</div>
                <div className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                  Opportunity
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic matching Mockup */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Outer Decorative Glow Ring */}
            <div className="relative w-full max-w-lg">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(255,0,122,0.15)] border-4 border-white bg-gradient-to-b from-pink-50 to-white">
                <img
                  src="/images/hero_woman_grocery.jpg"
                  alt="WOMUP Happy Customer with fresh grocery and phone"
                  className="w-full h-auto object-cover max-h-[520px] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating "Save Shop Earn" Pill Badge (As shown in Mockup 2 Hero) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-3 right-4 sm:-right-4 z-20 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF007A] to-[#BE185D] text-white shadow-[0_8px_20px_rgba(255,0,122,0.4)] flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wide"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
                <span>Save • Shop • Earn</span>
              </motion.div>

              {/* Floating ₹2,000 Coin Pill Badge at bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 left-4 sm:-left-4 z-20 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-pink-200 text-[#0A0E2A] shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black shadow-xs text-sm">
                  ₹
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">Every Single Month</div>
                  <div className="text-xs sm:text-sm font-black text-[#FF007A]">
                    ₹2,000 Shopping Coin
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
