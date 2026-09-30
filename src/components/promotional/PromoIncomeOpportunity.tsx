import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  ShieldBan,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'

interface PromoIncomeOpportunityProps {
  onOpenJoinModal?: () => void
}

export const PromoIncomeOpportunity: React.FC<PromoIncomeOpportunityProps> = ({
  onOpenJoinModal,
}) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKnowMore = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  return (
    <section
      id="income"
      className="py-14 sm:py-20 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden border-b border-pink-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header from 5_income_opportunity.png */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            Income <span className="text-[#FF007A]">Opportunity</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-bold tracking-wide">
            Shop &bull; Refer &bull; Earn
          </p>
        </div>

        {/* Central Display Card matching Mockup 5 */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-pink-100 shadow-[0_12px_36px_rgba(255,0,122,0.06)] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text & High Numbers */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <p className="text-base sm:text-lg font-bold text-slate-700">
                By simply shopping <br />
                and referring others
              </p>

              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#0A0E2A] block sm:inline mr-2">
                  Earn
                </span>
                <span className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#FF007A] tracking-tight block">
                  ₹30,000 <span className="text-2xl sm:text-3xl text-[#FF007A]">to</span>
                </span>
                <span className="text-4xl sm:text-6xl lg:text-[58px] font-black text-[#FF007A] tracking-tight block">
                  ₹3,00,000
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#0A0E2A] block mt-1">
                  per month
                </span>
              </div>
            </div>

            {/* Right: 3D Ascending Bars with Upward Curving Arrow from 5_income_opportunity.png */}
            <div className="lg:col-span-5 relative flex items-end justify-center h-64 sm:h-72 px-4 pb-4">
              {/* 5 Gradient Rising Bars */}
              <div className="w-full flex items-end justify-between gap-3 relative z-10">
                {[
                  { height: '25%', color: 'from-amber-400 to-amber-500' },
                  { height: '42%', color: 'from-rose-400 to-pink-500' },
                  { height: '58%', color: 'from-pink-500 to-[#FF007A]' },
                  { height: '76%', color: 'from-purple-500 to-indigo-600' },
                  { height: '98%', color: 'from-blue-600 to-indigo-800' },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.height }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                    className={`flex-1 rounded-t-xl bg-gradient-to-t ${bar.color} shadow-md relative`}
                  >
                    <div className="absolute top-1 left-1 right-1 h-1.5 rounded-full bg-white/40" />
                  </motion.div>
                ))}
              </div>

              {/* Big Upward Curving Arrow from Mockup */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 240 200"
                fill="none"
              >
                <defs>
                  <linearGradient id="purpleArrow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
                <path
                  d="M 30,170 Q 130,150 200,40"
                  stroke="url(#purpleArrow)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
                <polygon points="215,30 205,52 188,40" fill="#4F46E5" />
              </svg>
            </div>
          </div>
        </div>

        {/* 4 Bottom Guarantee Columns in Single White Card with Dividers matching Mockup */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-pink-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-4 sm:p-5 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* 1. 7 Level Referral Income */}
            <div className="flex flex-col items-center justify-center text-center p-3">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-2 shadow-2xs">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-[#0A0E2A] leading-tight">
                7 Level <br /> Referral Income
              </div>
            </div>

            {/* 2. No Investment Required */}
            <div className="flex flex-col items-center justify-center text-center p-3">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-2 shadow-2xs">
                <ShieldBan className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-[#0A0E2A] leading-tight">
                No Investment <br /> Required
              </div>
            </div>

            {/* 3. Only Real Purchases */}
            <div className="flex flex-col items-center justify-center text-center p-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-2 shadow-2xs">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-[#0A0E2A] leading-tight">
                Only Real <br /> Purchases
              </div>
            </div>

            {/* 4. Long Term Income */}
            <div className="flex flex-col items-center justify-center text-center p-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 shadow-2xs">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-black text-[#0A0E2A] leading-tight">
                Long Term <br /> Income
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button: Know More */}
        <div className="flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleKnowMore}
            className="px-9 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_8px_25px_rgba(255,0,122,0.35)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Know More</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
