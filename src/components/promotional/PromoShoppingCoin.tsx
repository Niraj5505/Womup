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
    <section id="shopping-coin" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
            <span>05</span>
            <span className="text-slate-300">•</span>
            <span>Reward Unit Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#090A15] tracking-tight">
            The Shopping Coin <span className="text-slate-500 font-extrabold">standard.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A transparent promotional unit designed to provide guaranteed out-of-pocket savings on verified retail purchases.
          </p>
        </div>

        {/* Center: Clean 3D Gold Coin Display */}
        <div className="flex flex-col items-center justify-center mb-14 relative">
          <ThreeDCoin size="md" showOrbiters={true} />

          <p className="text-xs text-slate-500 mt-5 font-mono">
            Interactive Model • Click to inspect rotation
          </p>
        </div>

        {/* 3 Architectural Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {coinFeatures.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#FAFAFC] border border-slate-200/90 p-7 sm:p-8 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/70">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-900 shadow-2xs">
                    <Icon className="w-5 h-5 text-slate-800" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/70 text-xs font-mono text-emerald-600 font-semibold">
                  ✓ Verified Program Criterion
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Regulatory Disclaimer Notice */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start sm:items-center gap-3.5 text-xs text-slate-600 shadow-2xs">
          <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-slate-900 font-semibold">Compliance Disclosure:</strong> WOMUP Shopping Coins are promotional retail discount allowances within a closed ecosystem. They do not constitute cryptocurrency, equity, or deposit instruments.
          </p>
        </div>
      </div>
    </section>
  )
}
