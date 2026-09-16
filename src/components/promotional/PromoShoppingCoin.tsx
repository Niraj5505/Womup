import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, TrendingUp, Sparkles, ShieldAlert } from 'lucide-react'

export const PromoShoppingCoin: React.FC = () => {
  const coinFeatures = [
    {
      keyword: 'SHOP',
      title: 'Everyday Shopping',
      desc: 'Use across eligible merchant partners for groceries, essentials, and lifestyle needs.',
      icon: ShoppingBag,
      bg: 'bg-[#FFF8FA]',
      badge: 'border-[#FFC4D1] text-[#FD849F]',
    },
    {
      keyword: 'SAVE',
      title: 'Direct Bill Savings',
      desc: 'Lower your out-of-pocket costs with structured promotional shopping discounts.',
      icon: TrendingUp,
      bg: 'bg-[#FFD0DD]/30',
      badge: 'border-[#FD849F] text-[#6651BF]',
    },
    {
      keyword: 'ENJOY BENEFITS',
      title: 'Continuous Value',
      desc: 'Experience ongoing monthly advantages designed to enhance your purchasing power.',
      icon: Sparkles,
      bg: 'bg-[#D8C9ED]/30',
      badge: 'border-[#D8C9ED] text-[#3048C8]',
    },
  ]

  return (
    <section id="shopping-coin" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#FFD0DD]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFF8FA] border border-[#E8DDE3] text-[#FD849F] text-xs font-extrabold uppercase tracking-wider inline-block mb-3 shadow-xs">
            Ecosystem Currency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05062A] tracking-tight">
            Meet the{' '}
            <span className="text-[#FD849F]">
              WOMUP Shopping Coin
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555568] leading-relaxed max-w-2xl mx-auto">
            A promotional shopping-benefit concept designed to add more value to eligible purchases within the WOMUP ecosystem.
          </p>
        </div>

        {/* Center: Large 3D Gold Coin with Pink, Purple, Royal Blue, Lavender Ambient Elements */}
        <div className="flex justify-center mb-16 relative">
          {/* Ambient Colorful Outer Rings */}
          <div className="absolute -top-6 -left-6 sm:left-1/4 w-32 h-32 bg-[#FFD0DD]/60 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 sm:right-1/4 w-36 h-36 bg-[#D8C9ED]/60 rounded-full blur-2xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-[#FFD0DD] via-[#FFC4D1] to-[#D8C9ED] shadow-[0_16px_50px_rgba(253,132,159,0.25)] flex items-center justify-center cursor-pointer"
          >
            {/* 3D Gold Coin Image */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
              <img
                src="/images/gold-coin.jpg"
                alt="WOMUP Shopping Coin ₹"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 3 Floating Cards with #FFF8FA, #FFD0DD, #D8C9ED accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coinFeatures.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.keyword}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(253,132,159,0.12)' }}
                className={`rounded-[24px] ${item.bg} border border-[#E8DDE3] p-8 shadow-[0_8px_30px_rgba(5,6,42,0.06)] transition-all duration-300 flex flex-col justify-between group text-center sm:text-left`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8DDE3] text-[#FD849F] flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 shadow-xs mx-auto sm:mx-0">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border mb-3 bg-white ${item.badge}`}>
                    {item.keyword}
                  </span>

                  <h3 className="text-xl font-bold text-[#05062A] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#555568] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DDE3] flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-[#05062A]">
                  <Sparkles className="w-4 h-4 text-[#FD849F]" />
                  <span>WOMUP Shopping Coin Concept</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-[#FFF8FA] border border-[#E8DDE3] flex items-center gap-4 text-xs text-[#555568] shadow-xs">
          <ShieldAlert className="w-6 h-6 text-[#FD849F] shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-[#05062A] font-semibold">Important Notice:</strong> Shopping Coin is a promotional benefit mechanism within the WOMUP ecosystem. It is not legal tender and cannot be converted into cash unless permitted under applicable program terms.
          </p>
        </div>
      </div>
    </section>
  )
}
