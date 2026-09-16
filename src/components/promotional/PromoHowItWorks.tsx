import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, ShoppingCart, Sparkles, ArrowRight } from 'lucide-react'

export const PromoHowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Register Free',
      description: 'Explore the WOMUP ecosystem without an initial registration fee.',
      icon: UserPlus,
      badge: 'Zero Entry Cost',
    },
    {
      step: '02',
      title: 'Shop',
      description: 'Shop through participating WOMUP categories and merchants.',
      icon: ShoppingCart,
      badge: '14+ Daily Categories',
    },
    {
      step: '03',
      title: 'Get More Value',
      description: 'Eligible shopping activity may provide benefits according to applicable program terms.',
      icon: Sparkles,
      badge: 'Continuous Benefits',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#FFD0DD]/60 border border-[#FFC4D1] text-[#FD849F] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Simple 3-Step Flow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05062A] tracking-tight">
            How WOMUP <span className="text-[#FD849F]">Works</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555568] leading-relaxed">
            Discover a straightforward process designed to make every shopping routine more rewarding.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(253,132,159,0.12)' }}
                className="relative rounded-[24px] bg-white border border-[#E8DDE3] p-8 sm:p-10 shadow-[0_8px_30px_rgba(5,6,42,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#FD849F] to-[#6651BF] bg-clip-text text-transparent">
                      {item.step}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#FFF8FA] border border-[#E8DDE3] text-[11px] font-bold text-[#FD849F]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon Graphic in Soft Pink Background with #FD849F Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#FFD0DD]/40 border border-[#FFC4D1]/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-8 h-8 text-[#FD849F]" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl font-black text-[#05062A] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555568] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-[#E8DDE3] flex items-center justify-between text-xs font-semibold text-[#555568]">
                  <span>Step {item.step} of 03</span>
                  <ArrowRight className="w-4 h-4 text-[#FD849F] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
