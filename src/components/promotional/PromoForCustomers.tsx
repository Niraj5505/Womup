import React from 'react'
import { motion } from 'framer-motion'
import {
  Gift,
  Coins,
  Store,
  Truck,
  Users,
  Wallet,
  ShoppingBag,
  CreditCard,
  ArrowRight,
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

  const bulletPoints = [
    {
      text: 'Use up to 10-15% coin on every purchase',
      icon: Coins,
      iconColor: 'bg-[#8B5CF6] text-white',
    },
    {
      text: 'Shop at nearby trusted local stores',
      icon: Store,
      iconColor: 'bg-[#FF007A] text-white',
    },
    {
      text: 'Get home delivery (for vegetables)',
      icon: Truck,
      iconColor: 'bg-[#FF007A] text-white',
    },
    {
      text: 'Refer others and earn income',
      icon: Users,
      iconColor: 'bg-[#FF007A] text-white',
    },
  ]

  const bottomCards = [
    {
      title: 'Real Savings',
      icon: Wallet,
      iconColor: 'text-[#FF007A]',
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Local Shops',
      icon: Store,
      iconColor: 'text-[#FF007A]',
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Wide Variety',
      icon: ShoppingBag,
      iconColor: 'text-[#10B981]',
      bgColor: 'bg-emerald-50',
    },
    {
      title: 'Easy Payment',
      icon: CreditCard,
      iconColor: 'text-[#2563EB]',
      bgColor: 'bg-blue-50',
    },
  ]

  return (
    <section
      id="for-customers"
      className="py-14 sm:py-20 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden border-b border-pink-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Mockup 3 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            For <span className="text-[#FF007A]">Customers</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-bold tracking-wide">
            Shop Smart &bull; Save Money &bull; Earn Income
          </p>
        </div>

        {/* Main Content: Left Woman with Phone pointing + Right Card with ₹2,000 Shopping Coin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 max-w-6xl mx-auto">
          {/* Left Column: Indian Woman pointing at phone */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Soft ambient pink glow behind the portrait */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/30 via-purple-200/20 to-transparent rounded-3xl blur-2xl transform scale-95" />

              <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(255,0,122,0.12)] border-4 border-white bg-white">
                <img
                  src="/images/customer_woman_pointing.jpg"
                  alt="WOMUP Happy Customer pointing to smartphone"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Benefit Card + Shopping Cart */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-[0_12px_40px_rgba(255,0,122,0.06)] overflow-hidden"
            >
              {/* Header inside card: Big Pink Gift Box + ₹2,000 Shopping Coin */}
              <div className="flex items-center gap-4 sm:gap-5 pb-6 border-b border-pink-50">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-[#FF007A] to-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(255,0,122,0.3)]">
                  <Gift className="w-9 h-9 sm:w-11 sm:h-11" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-black text-[#0A0E2A] leading-tight">
                    Get
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#FF007A] tracking-tight leading-none my-0.5">
                    ₹2,000
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#0A0E2A] leading-tight">
                    Shopping Coin <span className="font-extrabold text-slate-700">every month</span>
                  </div>
                </div>
              </div>

              {/* 4 Bullet check items with circular icons */}
              <div className="py-6 space-y-4">
                {bulletPoints.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center gap-3.5"
                    >
                      <div className={`w-8 h-8 rounded-full ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base font-bold text-slate-800">
                        {item.text}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Action Button & Shopping Cart with Vegetables */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleStartShopping}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-black shadow-[0_8px_25px_rgba(255,0,122,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer z-10"
                >
                  <span>Start Shopping Now</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </motion.button>

                {/* Shopping Cart Image on bottom-right of card */}
                <div className="w-28 sm:w-36 h-auto shrink-0 -mb-4 sm:-mb-6 self-end">
                  <img
                    src="/images/vegetable_cart.jpg"
                    alt="Shopping Cart Full of Fresh Vegetables"
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>
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
                  className="flex flex-col items-center justify-center text-center p-3 group hover:bg-pink-50/30 rounded-2xl transition-colors"
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
