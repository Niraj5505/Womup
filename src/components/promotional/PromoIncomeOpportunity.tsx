import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  ShieldBan,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  Sparkles,
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

  const guaranteeCards = [
    {
      title: '7 Level Referral Income',
      desc: 'Build a multi-tier network and earn overrides on household spends',
      icon: Users,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
    },
    {
      title: 'No Investment Required',
      desc: '100% free to join. Never buy starter kits or pay registration fees',
      icon: ShieldBan,
      iconColor: 'text-[#FF007A]',
      iconBg: 'bg-pink-50',
    },
    {
      title: 'Only Real Purchases',
      desc: 'Driven strictly by everyday essential groceries, medicines, and dining',
      icon: ShoppingCart,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
    },
    {
      title: 'Long Term Income',
      desc: 'Sustainable monthly cashflow from continuous recurring retail shopping',
      icon: TrendingUp,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
  ]

  return (
    <section
      id="income"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/25 to-white relative overflow-hidden border-b border-pink-100/60"
    >
      {/* Radiant Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            Income <span className="text-[#FF007A]">Opportunity</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold tracking-wide">
            Shop &bull; Refer &bull; Earn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Left Column: Big Earning Callout & 4 Guarantee Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-semibold text-slate-700">
                By simply shopping and referring others
              </p>

              <div className="inline-block">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0A0E2A] mr-3">
                  Earn
                </span>
                <span className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#FF007A] tracking-tight block sm:inline">
                  ₹30,000 to ₹3,00,000
                </span>
                <span className="text-lg sm:text-2xl font-black text-slate-700 block sm:inline sm:ml-3">
                  per month
                </span>
              </div>
            </div>

            {/* 4 Guarantee Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {guaranteeCards.map((g, idx) => {
                const Icon = g.icon
                return (
                  <motion.div
                    key={g.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white rounded-2xl p-4 border border-pink-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-pink-300 hover:shadow-[0_8px_20px_rgba(255,0,122,0.08)] transition-all flex items-start gap-3.5"
                  >
                    <div className={`w-10 h-10 rounded-xl ${g.iconBg} ${g.iconColor} flex items-center justify-center shrink-0 shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-[#0A0E2A] leading-tight">
                        {g.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-snug">
                        {g.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleKnowMore}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer mx-auto lg:mx-0"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: 3D Rising Growth Bar Chart Graphic from Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-[0_20px_50px_rgba(255,0,122,0.12)] overflow-hidden">
              {/* Subtle grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#FDE2EC_1px,transparent_1px),linear-gradient(to_bottom,#FDE2EC_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none" />

              {/* Graphic Title */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 text-[#FF007A] flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0A0E2A]">Income Scalability</div>
                    <div className="text-[10px] text-slate-500 font-medium">7-Level Compounding</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100">
                  <Sparkles className="w-3 h-3" />
                  <span>Verified Model</span>
                </div>
              </div>

              {/* 3D Ascending Bars Visualization */}
              <div className="relative z-10 flex items-end justify-between gap-3 h-52 sm:h-60 px-2 pt-6 pb-2">
                {[
                  { level: 'L1', height: '28%', amount: '₹3,000', color: 'from-pink-300 to-pink-400' },
                  { level: 'L2', height: '42%', amount: '₹12,000', color: 'from-pink-400 to-rose-500' },
                  { level: 'L3', height: '58%', amount: '₹35,000', color: 'from-purple-400 to-indigo-500' },
                  { level: 'L4', height: '76%', amount: '₹95,000', color: 'from-indigo-500 to-blue-600' },
                  { level: 'L5+', height: '100%', amount: '₹3,00,000+', color: 'from-[#FF007A] to-purple-700' },
                ].map((bar, i) => (
                  <div key={bar.level} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <span className="text-[10px] font-bold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.amount}
                    </span>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: bar.height }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.12 }}
                      className={`w-full rounded-t-xl bg-gradient-to-t ${bar.color} shadow-md relative group-hover:brightness-110 transition-all cursor-pointer`}
                    >
                      <div className="absolute top-1 left-1 right-1 h-1.5 rounded-full bg-white/30" />
                    </motion.div>
                    <span className="text-xs font-black text-[#0A0E2A] mt-2">
                      {bar.level}
                    </span>
                  </div>
                ))}

                {/* Big Upward Curved Growth Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -top-3 right-0 sm:right-2 bg-gradient-to-r from-[#FF007A] to-[#7C3AED] text-white px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5 z-20"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Unlimited Growth</span>
                </motion.div>
              </div>

              {/* Bottom Label */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center relative z-10">
                <span className="text-[11px] font-semibold text-slate-500">
                  Earned automatically as your referral circle shops for groceries & essentials.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
