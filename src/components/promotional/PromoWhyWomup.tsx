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
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-[#FD849F] mb-3 shadow-2xs">
            <span>06</span>
            <span className="text-pink-300">•</span>
            <span>Value Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#090A15] tracking-tight">
            The four core{' '}
            <span className="bg-gradient-to-r from-[#FD849F] to-[#6651BF] bg-clip-text text-transparent font-extrabold">
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
            const badgeColors = [
              'bg-emerald-50 text-emerald-700 border-emerald-200',
              'bg-purple-50 text-[#6651BF] border-purple-200',
              'bg-pink-50 text-[#FD849F] border-pink-200',
              'bg-amber-50 text-amber-700 border-amber-200',
            ][index]

            return (
              <motion.div
                key={card.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#FAFAFC] border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-sm hover:border-[#FD849F]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-[#6651BF]">
                      {card.code}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${badgeColors}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-900 group-hover:border-[#FD849F] group-hover:text-[#FD849F] group-hover:bg-pink-50/50 transition-colors shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-[#6651BF] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/70 text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
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
