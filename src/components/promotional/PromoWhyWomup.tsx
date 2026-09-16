import React from 'react'
import { motion } from 'framer-motion'
import { UserCheck, ShoppingCart, Gift, Sparkles, CheckCircle2 } from 'lucide-react'

export const PromoWhyWomup: React.FC = () => {
  const cards = [
    {
      title: 'FREE REGISTRATION',
      desc: 'Join the WOMUP platform completely free of charge. No upfront fees, registration costs, or compulsory packages are ever required.',
      icon: UserCheck,
      badge: 'Zero Entry Cost',
    },
    {
      title: 'EVERYDAY SHOPPING',
      desc: 'Seamlessly applies to your routine household purchases across groceries, healthcare, dining, salons, and local retail stores.',
      icon: ShoppingCart,
      badge: '14+ Daily Categories',
    },
    {
      title: 'SHOPPING BENEFITS',
      desc: 'Unlock continuous monthly value through the WOMUP Shopping Coin mechanism designed to optimize family living expenditures.',
      icon: Gift,
      badge: 'Continuous Value',
    },
    {
      title: 'ADDITIONAL OPPORTUNITIES',
      desc: 'Explore community referral rewards and optional partner milestones through active network growth and qualifying activity.',
      icon: Sparkles,
      badge: 'Community Rewards',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFF8FA] border border-[#E8DDE3] text-[#FD849F] text-xs font-extrabold uppercase tracking-wider inline-block mb-3 shadow-xs">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05062A] tracking-tight">
            Why <span className="text-[#FD849F]">WOMUP?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555568] leading-relaxed">
            Four key pillars that make the WOMUP promotional advertising ecosystem clear, transparent, and valuable.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(253,132,159,0.12)' }}
                className="p-7 rounded-[24px] bg-white border border-[#E8DDE3] shadow-[0_8px_30px_rgba(5,6,42,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFD0DD]/40 border border-[#FFC4D1] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#FD849F]" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#FFF8FA] border border-[#E8DDE3] text-[10px] font-bold text-[#6651BF] uppercase tracking-wider">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#05062A] tracking-tight mb-3 group-hover:text-[#FD849F] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555568] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DDE3] flex items-center gap-2 text-xs font-semibold text-[#22C55E]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>WOMUP Standard</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
