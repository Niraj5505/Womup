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
    <section id="how-it-works" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#6651BF] mb-3 shadow-2xs">
            <span>03</span>
            <span className="text-purple-300">•</span>
            <span>Simple Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#090A15] tracking-tight">
            How WOMUP{' '}
            <span className="bg-gradient-to-r from-[#6651BF] to-[#FD849F] bg-clip-text text-transparent font-extrabold">
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
            const badgeColors = [
              'bg-pink-50 text-[#FD849F] border-pink-200',
              'bg-purple-50 text-[#6651BF] border-purple-200',
              'bg-emerald-50 text-emerald-700 border-emerald-200',
            ][index]
            const hoverIconColors = [
              'group-hover:border-[#FD849F] group-hover:bg-pink-50/80 group-hover:text-[#FD849F]',
              'group-hover:border-[#6651BF] group-hover:bg-purple-50/80 group-hover:text-[#6651BF]',
              'group-hover:border-emerald-500 group-hover:bg-emerald-50/80 group-hover:text-emerald-600',
            ][index]

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl bg-[#FAFAFC] border border-slate-200/90 p-7 sm:p-8 shadow-2xs hover:shadow-sm hover:border-[#FD849F]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/70">
                    <span className="text-2xl font-mono font-black text-[#6651BF]">
                      {item.step}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full border text-[11px] font-bold ${badgeColors}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 text-slate-900 transition-colors shadow-2xs ${hoverIconColors}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-[#6651BF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Phase {item.step}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FD849F] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
