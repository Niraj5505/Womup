import React from 'react'
import { motion } from 'framer-motion'
import { UserCheck, ShoppingCart, Gift, Users } from 'lucide-react'

export const PromoWhyWomup: React.FC = () => {
  const cards = [
    {
      code: 'PILLAR-01',
      title: 'Zero Entry Barrier',
      desc: 'Join WOMUP completely free. No upfront deposits, registration fees, or mandatory product purchases are ever required.',
      icon: UserCheck,
      badge: '100% Free',
    },
    {
      code: 'PILLAR-02',
      title: 'Routine Spends Only',
      desc: 'No lifestyle change required. Applies directly to the everyday groceries, pharmacy, and dining you already buy.',
      icon: ShoppingCart,
      badge: 'Everyday Needs',
    },
    {
      code: 'PILLAR-03',
      title: 'Direct Invoice Offset',
      desc: 'Shopping Coins function as instant deductions against verified point-of-sale bills up to ₹2,000 every single month.',
      icon: Gift,
      badge: 'Guaranteed Rate',
    },
    {
      code: 'PILLAR-04',
      title: 'Community Network',
      desc: 'Earn additional community rewards and milestone referral allowances as friends and family also save on their shopping.',
      icon: Users,
      badge: 'Optional Growth',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#FAF7FD] relative overflow-hidden border-b border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-200/90 text-xs font-bold text-[#BE185D] mb-3 shadow-xs">
            <span>06</span>
            <span className="text-pink-300">•</span>
            <span>Value Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0724] tracking-tight">
            The four core{' '}
            <span className="bg-gradient-to-r from-[#FF1E7A] via-[#A855F7] to-[#4F46E5] bg-clip-text text-transparent font-extrabold">
              pillars.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            The foundational principles that make the WOMUP rewards ecosystem transparent, reliable, and grounded.
          </p>
        </div>

        {/* 4 Cards (Linear Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            const pillarStyles = [
              {
                border: 'border-emerald-100 hover:border-emerald-300 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)]',
                iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_6px_20px_rgba(16,185,129,0.3)]',
                code: 'text-emerald-700',
                badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
              },
              {
                border: 'border-indigo-100 hover:border-indigo-300 hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]',
                iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600 shadow-[0_6px_20px_rgba(99,102,241,0.3)]',
                code: 'text-indigo-700',
                badge: 'bg-indigo-50 text-indigo-800 border-indigo-200',
              },
              {
                border: 'border-pink-100 hover:border-pink-300 hover:shadow-[0_16px_40px_rgba(255,30,122,0.12)]',
                iconBg: 'bg-gradient-to-br from-[#FF1E7A] to-rose-600 shadow-[0_6px_20px_rgba(255,30,122,0.3)]',
                code: 'text-[#FF1E7A]',
                badge: 'bg-pink-50 text-[#BE185D] border-pink-200',
              },
              {
                border: 'border-amber-100 hover:border-amber-300 hover:shadow-[0_16px_40px_rgba(245,158,11,0.12)]',
                iconBg: 'bg-gradient-to-br from-amber-400 to-yellow-500 shadow-[0_6px_20px_rgba(245,158,11,0.3)]',
                code: 'text-amber-700',
                badge: 'bg-amber-50 text-amber-900 border-amber-200',
              },
            ][index]

            return (
              <motion.div
                key={card.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`rounded-3xl bg-white border ${pillarStyles.border} p-6 sm:p-7 shadow-[0_8px_30px_rgba(124,58,237,0.05)] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-purple-50">
                    <span className={`text-xs font-mono font-bold ${pillarStyles.code}`}>
                      {card.code}
                    </span>
                    <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full border ${pillarStyles.badge}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl ${pillarStyles.iconBg} flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-[#0A0724] tracking-tight mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-purple-50 text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Core Operational Guarantee</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
