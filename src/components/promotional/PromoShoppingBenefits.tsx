import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ShieldAlert, Check } from 'lucide-react'

export const PromoShoppingBenefits: React.FC = () => {
  return (
    <section id="savings" className="py-16 sm:py-24 bg-[#FAFAFC] relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
            <span>07</span>
            <span className="text-slate-300">•</span>
            <span>Mathematical Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#090A15] tracking-tight">
            How the monthly <span className="text-slate-500 font-extrabold">savings balance works.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Transparent before-and-after breakdown showing the exact impact on routine family budgets.
          </p>
        </div>

        {/* Main Grid: Visual Step-by-Step Calculation + Cart Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: BEFORE → BENEFIT → AFTER Cards */}
          <div className="lg:col-span-7 space-y-3">
            {/* Card 1: MONTHLY SHOPPING ₹20,000 */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between shadow-2xs gap-4"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  1. RETAIL BILL TOTAL
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Standard Household Spend</h3>
                <p className="text-xs text-slate-500 mt-0.5">Groceries, essentials, pharmacy & dining</p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-900">
                  ₹20,000
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Gross Spend</span>
              </div>
            </motion.div>

            {/* Down Connector */}
            <div className="flex justify-center -my-1">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: SHOPPING BENEFIT ₹2,000 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between shadow-2xs gap-4"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  2. WOMUP BENEFIT OFFSET
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Shopping Coin Deduction</h3>
                <p className="text-xs text-emerald-700 mt-0.5 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  Direct offset at participating registers
                </p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-600">
                  - ₹2,000
                </div>
                <span className="text-[11px] text-emerald-700 font-mono">Monthly Cap</span>
              </div>
            </motion.div>

            {/* Down Connector */}
            <div className="flex justify-center -my-1">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: EFFECTIVE SPEND ₹18,000 */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between shadow-sm gap-4"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  3. EFFECTIVE OUT-OF-POCKET
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">Net Optimized Budget</h3>
                <p className="text-xs text-slate-400 mt-0.5">Real out-of-pocket cash paid</p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  ₹18,000
                </div>
                <span className="text-[11px] text-emerald-400 font-mono">Saved 10% Overall</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grounded Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="/images/shopping-cart.jpg"
                alt="Shopping cart with groceries"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                    Real-World Ledger
                  </span>
                  <span className="text-xs font-bold text-slate-900">Average Family Spend</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-900 text-white text-xs font-mono font-bold">
                  ₹2,000 Off
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Mandatory Disclaimers */}
        <div className="max-w-3xl mx-auto mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-500 shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-slate-800 font-semibold">Program Policy:</strong> Benefits are subject to merchant eligibility and program allowances. Figures represent an illustrative financial budget model.
          </p>
        </div>
      </div>
    </section>
  )
}
