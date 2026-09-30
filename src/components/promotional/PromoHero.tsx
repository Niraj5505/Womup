import React from 'react'
import { motion } from 'framer-motion'
import { User, Store, ArrowRight, Coins, Percent, TrendingUp } from 'lucide-react'

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
      className="relative pt-8 sm:pt-14 pb-10 sm:pb-16 bg-gradient-to-b from-[#FDF6FA] via-[#FCF9FE] to-white text-[#0A0E2A] overflow-hidden border-b border-pink-100/50"
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
                <span className="text-[#FF007A]">Shopping</span> <br />
                Better Living
              </h1>
            </div>

            {/* Subtitles from mockup */}
            <div className="space-y-1 text-slate-700 font-semibold text-base sm:text-lg">
              <p className="leading-snug">Save on Every Purchase</p>
              <p className="leading-snug">Earn with Every Connection</p>
            </div>

            {/* Dual CTAs: Join as Customer & Register as Vendor */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Pink Pill: Join as Customer */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCustomerJoin}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_8px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Join as Customer</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </motion.button>

              {/* Deep Blue Pill: Register as Vendor */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleVendorRegister}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-sm sm:text-base font-bold shadow-[0_8px_25px_rgba(30,58,138,0.3)] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center">
                  <Store className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Register as Vendor</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Indian Woman Shopper with phone and fresh grocery bag */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Soft ambient radial backing behind the woman */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 via-purple-300/20 to-blue-300/20 rounded-full blur-2xl transform scale-95" />

              {/* Clean seamless image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(255,0,122,0.1)]">
                <img
                  src="/images/hero_woman_grocery.jpg"
                  alt="WOMUP Happy Customer pointing to phone with fresh groceries"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Value Cards inside a Single Unified White Pill Container from Mockup */}
        <div className="mt-10 max-w-5xl mx-auto bg-white rounded-3xl border border-pink-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 sm:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* 1. Monthly Shopping Coin */}
            <div className="flex flex-col items-center justify-center text-center p-3 group">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                <Coins className="w-6 h-6" />
              </div>
              <div className="text-lg font-black text-[#0A0E2A] leading-tight">₹2,000</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5 leading-snug">
                Monthly Shopping Coin
              </div>
            </div>

            {/* 2. Nearby Local Shops */}
            <div className="flex flex-col items-center justify-center text-center p-3 group">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                <Store className="w-6 h-6" />
              </div>
              <div className="text-base font-black text-[#0A0E2A] leading-tight">Nearby</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5 leading-snug">
                Local Shops
              </div>
            </div>

            {/* 3. Real Savings */}
            <div className="flex flex-col items-center justify-center text-center p-3 group">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                <Percent className="w-6 h-6" />
              </div>
              <div className="text-base font-black text-[#0A0E2A] leading-tight">Real</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5 leading-snug">
                Savings
              </div>
            </div>

            {/* 4. Income Opportunity */}
            <div className="flex flex-col items-center justify-center text-center p-3 group">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 shadow-2xs group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-base font-black text-[#0A0E2A] leading-tight">Income</div>
              <div className="text-xs font-bold text-slate-500 mt-0.5 leading-snug">
                Opportunity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
