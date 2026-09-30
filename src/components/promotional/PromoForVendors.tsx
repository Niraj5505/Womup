import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  TrendingUp,
  Coins,
  QrCode,
  ShieldCheck,
  Building2,
  ChevronRight,
  Footprints,
  BarChart3,
  Monitor,
} from 'lucide-react'

interface PromoForVendorsProps {
  onOpenJoinModal?: () => void
}

export const PromoForVendors: React.FC<PromoForVendorsProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleVendorRegister = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  // 6 Exact Bullets from Mockup 4
  const vendorBenefits = [
    {
      title: 'Get more customers from WOMUP network',
      icon: Users,
    },
    {
      title: 'Increase daily sales',
      icon: TrendingUp,
    },
    {
      title: 'No extra investment',
      icon: Coins,
    },
    {
      title: 'Easy QR based billing',
      icon: QrCode,
    },
    {
      title: 'Timely settlement',
      icon: ShieldCheck,
    },
    {
      title: 'Be part of a growing community',
      icon: Building2,
    },
  ]

  // 4 Bottom cards matching Mockup 4
  const bottomCards = [
    {
      title: 'More Footfall',
      icon: Footprints,
      iconColor: 'text-[#8B5CF6]',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Higher Sales',
      icon: BarChart3,
      iconColor: 'text-[#FF007A]',
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Trusted Customers',
      icon: Users,
      iconColor: 'text-[#E11D48]',
      bgColor: 'bg-rose-50',
    },
    {
      title: 'Digital Business',
      icon: Monitor,
      iconColor: 'text-[#2563EB]',
      bgColor: 'bg-blue-50',
    },
  ]

  return (
    <section
      id="for-vendors"
      className="py-14 sm:py-20 bg-gradient-to-b from-white via-blue-50/15 to-white relative overflow-hidden border-b border-blue-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Mockup 4 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            For Vendors
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-bold tracking-wide">
            More Customers &bull; Higher Sales &bull; Digital Growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 max-w-6xl mx-auto">
          {/* Left Column: Unified 6-benefit Card + CTA Button */}
          <div className="lg:col-span-6 space-y-6">
            {/* Single Unified White Benefit Card from Mockup 4 */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-pink-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4">
              {vendorBenefits.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF007A] to-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-108 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-slate-800">
                      {item.title}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button: Register as Vendor > */}
            <div className="flex justify-center lg:justify-start">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleVendorRegister}
                className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_8px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register as Vendor</span>
                <ChevronRight className="w-5 h-5 ml-0.5" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Indian Merchant Shopkeeper Photo */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/25 via-pink-200/20 to-transparent rounded-3xl blur-2xl transform scale-95" />
              <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(30,58,138,0.12)] border-4 border-white bg-white">
                <img
                  src="/images/vendor_shopkeeper.jpg"
                  alt="WOMUP Partner Merchant Shopkeeper"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Bottom Cards in a Single Unified White Pill Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-pink-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-3 sm:p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {bottomCards.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center p-3 group hover:bg-blue-50/30 rounded-2xl transition-colors"
                >
                  <div className={`w-11 h-11 rounded-2xl ${card.bgColor} ${card.iconColor} flex items-center justify-center mb-1.5 shadow-2xs group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#0A0E2A]">
                    {card.title}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
