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
      desc: 'Tap into thousands of active local customers incentivized to spend their ₹2,000 monthly coins at your shop.',
      icon: Users,
    },
    {
      title: 'Increase daily sales',
      desc: 'Attract repeat footfall and bigger basket sizes without having to run expensive local promotions.',
      icon: TrendingUp,
    },
    {
      title: 'Easy QR based billing',
      desc: 'Seamless contactless transactions. Customers simply scan your WOMUP QR to instantly redeem coins.',
      icon: QrCode,
    },
    {
      title: 'Timely settlement',
      desc: 'Guaranteed, hassle-free automated payouts straight into your registered merchant bank account.',
      icon: ShieldCheck,
    },
    {
      title: 'Be part of a growing community',
      desc: 'Gain digital visibility alongside top local businesses and build long-term trusted customer relationships.',
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
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden border-b border-blue-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#1E3A8A] tracking-tight">
            For <span className="text-[#FF007A]">Vendors</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold tracking-wide">
            More Customers &bull; Higher Sales &bull; Digital Growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: 5 Merchant Benefits List + Register CTA */}
          <div className="lg:col-span-6 space-y-4">
            {vendorBenefits.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-150 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-pink-300 hover:shadow-[0_8px_24px_rgba(255,0,122,0.08)] transition-all flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-pink-50 text-[#FF007A] border border-pink-100 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-[#0A0E2A] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-medium mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* CTA Button */}
            <div className="pt-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleVendorRegister}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register as Vendor</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Vendor Shopkeeper Portrait Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(30,58,138,0.15)] border-4 border-white bg-white">
                <img
                  src="/images/vendor_shopkeeper.jpg"
                  alt="WOMUP Partner Merchant Shopkeeper"
                  className="w-full h-auto object-cover max-h-[500px] hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified Merchant Badge */}
              <div className="absolute -bottom-3 right-4 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200 text-[#0A0E2A] shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">
                    Trusted Partner
                  </div>
                  <div className="text-xs font-black text-[#1E3A8A]">
                    Verified WOMUP Merchant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Quick Pill Tags (Matching Mockup 4) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {bottomPills.map((pill) => {
            const Icon = pill.icon
            return (
              <div
                key={pill.title}
                className="bg-white rounded-2xl py-3 px-4 border border-blue-100 shadow-xs flex items-center justify-center gap-2.5 text-center group hover:border-blue-300 transition-all"
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
