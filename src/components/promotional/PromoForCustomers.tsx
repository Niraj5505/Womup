import React from 'react'
import { motion } from 'framer-motion'
import {
  Gift,
  Store,
  Percent,
  Star,
  ArrowRight,
  ShoppingBag,
  CreditCard,
  MapPin,
  ChevronRight,
} from 'lucide-react'

interface PromoForCustomersProps {
  onOpenJoinModal?: () => void
}

export const PromoForCustomers: React.FC<PromoForCustomersProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleStartShopping = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  const benefits = [
    {
      title: '₹2,000 Monthly Shopping Coin',
      desc: 'Use up to 10-15% coin on every purchase across all partner stores',
      icon: Gift,
      iconBg: 'bg-emerald-50 text-emerald-600',
      badge: 'Guaranteed',
    },
    {
      title: 'Shop at Nearby Local Stores',
      desc: 'Continue purchasing from your favorite neighborhood kirana, medical, salon and more',
      icon: Store,
      iconBg: 'bg-blue-50 text-blue-600',
      badge: 'Local Access',
    },
    {
      title: 'Real Savings on Every Purchase',
      desc: 'Get genuine instant bill discounts with coins plus home delivery options',
      icon: Percent,
      iconBg: 'bg-purple-50 text-purple-600',
      badge: 'Instant Value',
    },
    {
      title: 'Extra Benefits and Rewards',
      desc: 'Refer your friends and family to unlock progressive income up to 7 levels',
      icon: Star,
      iconBg: 'bg-pink-50 text-[#FF007A]',
      badge: 'Refer & Earn',
    },
  ]

  const bottomPills = [
    { title: 'Real Savings', icon: Percent },
    { title: 'Local Shops', icon: Store },
    { title: 'Wide Variety', icon: ShoppingBag },
    { title: 'Easy Payment', icon: CreditCard },
  ]

  return (
    <section
      id="for-customers"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden border-b border-pink-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            For <span className="text-[#FF007A]">Customers</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold tracking-wide">
            Shop Smart &bull; Save Money &bull; Earn Income
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: 4 Benefit Cards + CTA */}
          <div className="lg:col-span-6 space-y-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-pink-100/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-pink-300 hover:shadow-[0_8px_24px_rgba(255,0,122,0.08)] transition-all flex items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl ${b.iconBg} flex items-center justify-center shrink-0 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-black text-[#0A0E2A]">
                        {b.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-[#FF007A] border border-pink-100 shrink-0">
                        {b.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                      {b.desc}
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
                onClick={handleStartShopping}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Shopping Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Customer App Smartphone Mockup with Fresh Produce Graphic */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            {/* Phone Frame Mockup */}
            <div className="w-full max-w-[320px] sm:max-w-[340px] bg-slate-900 rounded-[40px] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border-4 border-slate-800 relative z-10">
              {/* Screen Content */}
              <div className="bg-[#FAF7FD] rounded-[32px] overflow-hidden border border-slate-200 text-[#0A0E2A]">
                {/* Status Bar */}
                <div className="h-6 bg-white px-6 flex items-center justify-between text-[10px] font-semibold text-slate-500">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>5G</span>
                  </div>
                </div>

                {/* In-App Header */}
                <div className="p-4 bg-white border-b border-pink-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/customer_man_avatar.jpg"
                      alt="Manish Shah"
                      className="w-9 h-9 rounded-full object-cover border border-pink-200"
                    />
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Hello</div>
                      <div className="text-xs font-black text-[#0A0E2A]">Manish Shah</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                    ID: 9819012310
                  </span>
                </div>

                {/* My Shopping Coin Card (Exact from mockup) */}
                <div className="p-4">
                  <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-2xl p-3.5 text-white shadow-md flex items-center justify-between cursor-pointer hover:shadow-lg transition-all">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center font-black text-white text-base">
                        ₹
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-amber-100">
                          My Shopping Coin
                        </div>
                        <div className="text-xl font-black">2,000</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/80" />
                  </div>
                </div>

                {/* Quick Nav Pills inside App */}
                <div className="grid grid-cols-4 gap-1 px-3 pb-3 text-center">
                  {['Nearby Shops', 'Orders', 'Offers', 'Wallet'].map((tab, i) => (
                    <div
                      key={tab}
                      className={`py-1.5 px-1 rounded-xl text-[10px] font-bold ${
                        i === 0
                          ? 'bg-pink-100 text-[#FF007A]'
                          : 'bg-white text-slate-600 border border-slate-100'
                      }`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                {/* Nearby Shops List (Matching Mockup) */}
                <div className="px-4 pb-4 space-y-2">
                  <div className="text-xs font-black text-slate-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF007A]" />
                    <span>Nearby Shops</span>
                  </div>

                  {[
                    { name: 'Gokul Vegetables', dist: '0.5 km', cat: 'Fresh Produce', badge: '15% Coin' },
                    { name: 'Shree Kirana Store', dist: '1.2 km', cat: 'Daily Grocery', badge: '10% Coin' },
                    { name: 'Jay Medical', dist: '1.5 km', cat: 'Healthcare', badge: '10% Coin' },
                    { name: 'Beauty Salon', dist: '1.8 km', cat: 'Personal Care', badge: '15% Coin' },
                  ].map((shop) => (
                    <div
                      key={shop.name}
                      className="bg-white rounded-xl p-2.5 border border-slate-100 flex items-center justify-between shadow-2xs hover:border-pink-200 transition-all"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#0A0E2A] leading-tight">
                          {shop.name}
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <span>{shop.cat}</span>
                          <span>•</span>
                          <span className="text-[#FF007A] font-medium">{shop.dist}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                        {shop.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Quick Pill Tags (Matching Mockup 3) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {bottomPills.map((pill) => {
            const Icon = pill.icon
            return (
              <div
                key={pill.title}
                className="bg-white rounded-2xl py-3 px-4 border border-pink-100 shadow-xs flex items-center justify-center gap-2.5 text-center group hover:border-pink-300 transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-50 text-[#FF007A] flex items-center justify-center group-hover:bg-[#FF007A] group-hover:text-white transition-colors">
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
