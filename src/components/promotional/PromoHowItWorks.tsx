import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface PromoHowItWorksProps {
  onOpenJoinModal?: () => void
}

export const PromoHowItWorks: React.FC<PromoHowItWorksProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAction = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  const steps = [
    {
      num: '1',
      title: 'Join',
      desc: 'Register on WOMUP App',
    },
    {
      num: '2',
      title: 'Get Coin',
      desc: 'Receive ₹2,000 Shopping Coin every month',
    },
    {
      num: '3',
      title: 'Shop',
      desc: 'Use coin at nearby shops',
    },
    {
      num: '4',
      title: 'Earn',
      desc: 'Refer others & get income up to 7 levels',
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden border-b border-pink-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            How <span className="text-[#FF007A]">WOMUP</span> Works?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            A simple platform connecting Customers and Local Vendors for Smart Shopping and Earning Opportunities.
          </p>
        </div>

        {/* Central Circular Diagram: Customer <-> WOMUP <-> Vendor */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
            {/* Left: Customer Circle / Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-pink-400 to-[#FF007A] shadow-[0_10px_25px_rgba(255,0,122,0.25)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/images/customer_man_avatar.jpg"
                      alt="Customer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-lg font-black text-[#0A0E2A]">Customer</div>
                <div className="text-xs sm:text-sm font-semibold text-[#FF007A]">
                  Shop & Save
                </div>
              </div>
            </motion.div>

            {/* Center: WOMUP Center Logo Badge with Animated Connecting Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center my-4 md:my-0 relative"
            >
              {/* Outer decorative dashed orbit */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-pink-300 flex items-center justify-center p-3 animate-spin-slow">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF007A]" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1E3A8A]" />
              </div>

              {/* Inner Solid Card */}
              <div className="absolute inset-0 m-auto w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white shadow-[0_12px_30px_rgba(255,0,122,0.18)] border-2 border-pink-100 flex flex-col items-center justify-center p-2">
                <img
                  src="/images/womup-logo.png"
                  alt="WOMUP"
                  className="w-14 sm:w-18 h-auto object-contain"
                />
                <span className="text-[9px] font-black text-[#FF007A] tracking-wider uppercase mt-1">
                  WOMUP
                </span>
              </div>
            </motion.div>

            {/* Right: Vendor Circle / Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 to-[#1E3A8A] shadow-[0_10px_25px_rgba(30,58,138,0.25)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src="/images/vendor_shopkeeper.jpg"
                      alt="Vendor"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-lg font-black text-[#0A0E2A]">Vendor</div>
                <div className="text-xs sm:text-sm font-semibold text-[#1E3A8A]">
                  Grow Business
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Numbered Steps from Mockup (Join, Get Coin, Shop, Earn) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-pink-100 shadow-[0_8px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center relative hover:shadow-[0_12px_28px_rgba(255,0,122,0.12)] hover:border-pink-200 transition-all duration-300 group"
            >
              {/* Pink Number Badge */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF007A] to-[#E11D48] text-white font-black text-lg flex items-center justify-center shadow-[0_4px_12px_rgba(255,0,122,0.35)] mb-4 group-hover:scale-110 transition-transform">
                {s.num}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-[#0A0E2A] mb-1.5">{s.title}</h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleAction}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(255,0,122,0.35)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
