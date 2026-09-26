import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, ShoppingCart, Coins, ArrowRight } from 'lucide-react'

export const PromoHowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Create Free Profile',
      description: 'Sign up in under 60 seconds. No credit checks, joining fees, or mandatory product purchases.',
      icon: UserPlus,
      badge: 'Zero Entry Cost',
    },
    {
      step: '02',
      title: 'Shop at Partner Outlets',
      description: 'Continue purchasing your usual groceries, pharmacy, and dining needs at participating local stores.',
      icon: ShoppingCart,
      badge: '14 Core Sectors',
    },
    {
      step: '03',
      title: 'Receive Direct Value',
      description: 'Earn monthly Shopping Coins and direct deductions against eligible receipts up to ₹2,000 per month.',
      icon: Coins,
      badge: 'Monthly Allowance',
    },
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7FD] to-white relative overflow-hidden border-b border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 border border-purple-200/90 text-xs font-bold text-purple-800 mb-3 shadow-xs">
            <span>03</span>
            <span className="text-purple-300">•</span>
            <span>Simple Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0724] tracking-tight">
            How WOMUP{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#FF1E7A] to-[#F59E0B] bg-clip-text text-transparent font-extrabold">
              functions.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent 3-step operational framework designed to automate value return on your everyday expenses.
          </p>
        </div>

        {/* 3 Step Cards (Linear Product Grid Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon
            const stepColors = [
              {
                num: 'text-indigo-600',
                badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
                iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600 shadow-[0_6px_20px_rgba(99,102,241,0.3)]',
                cardHover: 'hover:border-indigo-300 hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]',
                titleHover: 'group-hover:text-indigo-600',
                arrowHover: 'group-hover:text-indigo-600',
              },
              {
                num: 'text-[#FF1E7A]',
                badge: 'bg-pink-50 text-[#BE185D] border-pink-200',
                iconBg: 'bg-gradient-to-br from-[#FF1E7A] via-[#E11D48] to-[#D946EF] shadow-[0_6px_20px_rgba(255,30,122,0.3)]',
                cardHover: 'hover:border-pink-300 hover:shadow-[0_16px_40px_rgba(255,30,122,0.12)]',
                titleHover: 'group-hover:text-[#FF1E7A]',
                arrowHover: 'group-hover:text-[#FF1E7A]',
              },
              {
                num: 'text-emerald-600',
                badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_6px_20px_rgba(16,185,129,0.3)]',
                cardHover: 'hover:border-emerald-300 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)]',
                titleHover: 'group-hover:text-emerald-600',
                arrowHover: 'group-hover:text-emerald-600',
              },
            ][index]

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-3xl bg-white border border-purple-100/90 p-7 sm:p-8 shadow-[0_10px_30px_rgba(124,58,237,0.05)] ${stepColors.cardHover} transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-50">
                    <span className={`text-2xl font-mono font-black ${stepColors.num}`}>
                      {item.step}
                    </span>
                    <span className={`px-3 py-1 rounded-full border text-[11px] font-bold ${stepColors.badge}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-13 h-13 rounded-2xl ${stepColors.iconBg} flex items-center justify-center mb-5 text-white transition-transform group-hover:scale-105 duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-[#0A0724] tracking-tight mb-2 ${stepColors.titleHover} transition-colors`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-50 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Phase {item.step}</span>
                  <ArrowRight className={`w-4 h-4 text-slate-400 ${stepColors.arrowHover} group-hover:translate-x-1.5 transition-all`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
