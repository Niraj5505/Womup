import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, ShieldCheck, ShieldAlert, Coins } from 'lucide-react'
import { ThreeDCoin } from '../ui/ThreeDCoin.tsx'

export const PromoShoppingCoin: React.FC = () => {
  const coinFeatures = [
    {
      code: 'UNIT-01',
      title: '₹1.00 Direct Value',
      desc: 'Each Shopping Coin functions as a strict ₹1.00 deduction against verified partner merchant invoices.',
      icon: Coins,
      tag: '1:1 Value Peg',
    },
    {
      code: 'UNIT-02',
      title: 'Non-Speculative Utility',
      desc: 'Operates entirely within an approved closed-loop retail rewards network. Zero volatility, zero cryptocurrency risk.',
      icon: ShieldCheck,
      tag: 'Closed Loop',
    },
    {
      code: 'UNIT-03',
      title: 'Direct Bill Reductions',
      desc: 'Redeem coins effortlessly at the point of sale across all 14 core shopping categories without voucher friction.',
      icon: ShoppingBag,
      tag: 'Instant Offset',
    },
  ]

  return (
    <section id="shopping-coin" className="py-16 sm:py-24 bg-[#FAF7FD] relative overflow-hidden border-b border-purple-100/70">
      {/* Golden Aura Background Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-400/20 via-yellow-300/15 to-purple-500/10 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-purple-500/10 border border-amber-300/80 text-xs font-bold text-amber-900 mb-3 shadow-xs">
            <span>05</span>
            <span className="text-amber-400">•</span>
            <span>Reward Unit Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0724] tracking-tight">
            The Shopping Coin{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#E11D48] to-[#7C3AED] bg-clip-text text-transparent font-extrabold">
              standard.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A transparent promotional unit designed to provide guaranteed out-of-pocket savings on verified retail purchases.
          </p>
        </div>

        {/* Center: Clean 3D Gold Coin Display */}
        <div className="flex flex-col items-center justify-center mb-14 relative">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-400/30 to-purple-500/20 blur-xl -z-10 animate-pulse-slow" />
            <ThreeDCoin size="md" showOrbiters={true} />
          </div>

          <p className="text-xs text-purple-800 mt-5 font-mono font-medium bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Interactive Model • Click or drag to inspect 3D rotation
          </p>
        </div>

        {/* 3 Architectural Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {coinFeatures.map((item, index) => {
            const Icon = item.icon
            const featureStyles = [
              {
                border: 'border-amber-200/90 hover:border-amber-400 hover:shadow-[0_16px_40px_rgba(245,158,11,0.18)]',
                iconBg: 'bg-gradient-to-br from-amber-400 to-yellow-500 shadow-[0_6px_20px_rgba(245,158,11,0.35)]',
                code: 'text-amber-700',
                badge: 'bg-amber-50 text-amber-900 border-amber-200',
              },
              {
                border: 'border-purple-200/90 hover:border-purple-400 hover:shadow-[0_16px_40px_rgba(124,58,237,0.18)]',
                iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_6px_20px_rgba(124,58,237,0.35)]',
                code: 'text-purple-700',
                badge: 'bg-purple-50 text-purple-900 border-purple-200',
              },
              {
                border: 'border-pink-200/90 hover:border-pink-400 hover:shadow-[0_16px_40px_rgba(255,30,122,0.18)]',
                iconBg: 'bg-gradient-to-br from-[#FF1E7A] to-rose-600 shadow-[0_6px_20px_rgba(255,30,122,0.35)]',
                code: 'text-[#FF1E7A]',
                badge: 'bg-pink-50 text-[#BE185D] border-pink-200',
              },
            ][index]

            return (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-3xl bg-white border ${featureStyles.border} p-7 sm:p-8 shadow-[0_8px_30px_rgba(124,58,237,0.06)] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-purple-50">
                    <span className={`text-xs font-mono font-bold ${featureStyles.code}`}>
                      {item.code}
                    </span>
                    <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full border ${featureStyles.badge}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div className={`w-13 h-13 rounded-2xl ${featureStyles.iconBg} flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0A0724] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-purple-50 text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Verified Program Criterion</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex items-start sm:items-center gap-3.5 text-xs text-slate-700 shadow-2xs">
          <ShieldAlert className="w-5 h-5 text-purple-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-purple-950 font-bold">Compliance Disclosure:</strong> WOMUP Shopping Coins are promotional retail discount allowances within a closed ecosystem. They do not constitute cryptocurrency, equity, or deposit instruments.
          </p>
        </div>
      </div>
    </section>
  )
}
