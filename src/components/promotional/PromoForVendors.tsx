import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  TrendingUp,
  QrCode,
  ShieldCheck,
  Building2,
  ArrowRight,
  Footprints,
  BarChart3,
  Award,
  Smartphone,
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

  const bottomPills = [
    { title: 'More Footfall', icon: Footprints },
    { title: 'Higher Sales', icon: BarChart3 },
    { title: 'Trusted Customers', icon: Award },
    { title: 'Digital Business', icon: Smartphone },
  ]

  return (
    <section
      id="for-vendors"
      className="py-14 sm:py-20 bg-gradient-to-b from-white via-blue-50/15 to-white relative overflow-hidden border-b border-blue-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Heading + Unified 5-benefit Card + CTA Button */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header matching 4_for_vendors.png */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
                For <br />
                <span className="text-[#1E3A8A]">Vendors</span>
              </h2>
              <div className="text-sm sm:text-base text-slate-700 font-bold space-y-0.5">
                <div>More Customers</div>
                <div>Higher Sales</div>
                <div>Digital Growth</div>
              </div>
            </div>

            {/* Single Unified White Benefit Card from Mockup 4_for_vendors.png */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-pink-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4">
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
                    <div className="w-10 h-10 rounded-full bg-pink-50 text-[#FF007A] border border-pink-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF007A] group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-black text-[#0A0E2A]">
                      {item.title}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleVendorRegister}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_8px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register as Vendor</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Indian Merchant Shopkeeper Photo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(30,58,138,0.12)] border-4 border-white bg-white">
                <img
                  src="/images/vendor_shopkeeper.jpg"
                  alt="WOMUP Partner Merchant Shopkeeper"
                  className="w-full h-auto object-cover max-h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Quick Pill Tags */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {bottomPills.map((pill) => {
            const Icon = pill.icon
            return (
              <div
                key={pill.title}
                className="bg-white rounded-2xl py-3 px-4 border border-blue-100 shadow-2xs flex items-center justify-center gap-2.5 text-center group hover:border-blue-300 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-black text-[#0A0E2A]">
                  {pill.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
