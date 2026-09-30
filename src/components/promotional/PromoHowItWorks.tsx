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
      className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#FCF8FB] to-white relative overflow-hidden border-b border-pink-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header from Mockup */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            How <span className="text-[#FF007A]">WOMUP</span> Works?
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 font-semibold max-w-xl mx-auto leading-relaxed">
            A simple platform connecting Customers and Local Vendors for Smart Shopping and Earning Opportunities.
          </p>
        </div>

        {/* Central Circular Diagram: Customer <-> WOMUP <-> Vendor */}
        <div className="max-w-4xl mx-auto mb-14 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative">
            {/* Left: Customer Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group z-10"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-pink-400 to-[#FF007A] shadow-[0_10px_25px_rgba(255,0,122,0.22)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/images/customer_man_avatar.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-lg font-black text-[#0A0E2A]">Customer</div>
                <div className="text-xs sm:text-sm font-bold text-[#FF007A]">
                  Shop &amp; Save
                </div>
              </div>
            </motion.div>

            {/* Center: WOMUP Animated Circular Arrows Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 z-10 my-2 md:my-0"
            >
              {/* SVG Looping Arrows (Pink top arrow to right, Blue bottom arrow to left) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                <defs>
                  <linearGradient id="pinkArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF007A" />
                    <stop offset="100%" stopColor="#BE185D" />
                  </linearGradient>
                  <linearGradient id="blueArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                </defs>

                {/* Top Pink Arc with Arrowhead pointing Right */}
                <path
                  d="M 28,70 A 52,52 0 0,1 132,70"
                  fill="none"
                  stroke="url(#pinkArrowGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <polygon points="132,60 144,70 132,80" fill="#FF007A" />

                {/* Bottom Blue Arc with Arrowhead pointing Left */}
                <path
                  d="M 132,90 A 52,52 0 0,1 28,90"
                  fill="none"
                  stroke="url(#blueArrowGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <polygon points="28,100 16,90 28,80" fill="#1E3A8A" />
              </svg>

              {/* Center White Disc with Official WOMUP Logo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)] border-2 border-pink-100 flex flex-col items-center justify-center p-2 z-20">
                <img
                  src="/images/womup-logo.png"
                  alt="WOMUP"
                  className="w-12 sm:w-16 h-auto object-contain"
                />
                <span className="text-[8px] font-black text-[#FF007A] tracking-wider uppercase">
                  WOMUP
                </span>
              </div>
            </motion.div>

            {/* Right: Vendor Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group z-10"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 to-[#1E3A8A] shadow-[0_10px_25px_rgba(30,58,138,0.22)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/images/vendor_shopkeeper.jpg"
                    alt="Vendor"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-lg font-black text-[#0A0E2A]">Vendor</div>
                <div className="text-xs sm:text-sm font-bold text-[#1E3A8A]">
                  Grow Business
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Numbered Steps from Mockup (Join, Get Coin, Shop, Earn) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-5 border border-pink-100/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] text-center flex flex-col items-center hover:shadow-[0_10px_25px_rgba(255,0,122,0.1)] hover:border-pink-200 transition-all duration-300 group"
            >
              {/* Pink Number Badge */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF007A] to-[#E11D48] text-white font-black text-base flex items-center justify-center shadow-[0_4px_12px_rgba(255,0,122,0.3)] mb-3 group-hover:scale-110 transition-transform">
                {s.num}
              </div>

              {/* Title */}
              <h3 className="text-base font-black text-[#0A0E2A] mb-1">{s.title}</h3>

              {/* Description */}
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">
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
            className="px-9 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_8px_25px_rgba(255,0,122,0.35)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
