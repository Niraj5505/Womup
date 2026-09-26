import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ShieldAlert, Check } from 'lucide-react'

export const PromoShoppingBenefits: React.FC = () => {
  return (
    <section id="savings" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7FD] to-white relative overflow-hidden border-b border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200/90 text-xs font-bold text-emerald-800 mb-3 shadow-xs">
            <span>07</span>
            <span className="text-emerald-400">•</span>
            <span>Mathematical Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0724] tracking-tight">
            How the monthly{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-[#7C3AED] bg-clip-text text-transparent font-extrabold">
              savings balance works.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Transparent before-and-after breakdown showing the exact impact on routine family budgets.
          </p>
        </div>

        {/* Main Grid: Visual Step-by-Step Calculation + Cart Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: BEFORE → BENEFIT → AFTER Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {/* Card 1: MONTHLY SHOPPING ₹20,000 */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-purple-100/90 flex items-center justify-between shadow-[0_8px_25px_rgba(124,58,237,0.05)] gap-4"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  1. RETAIL BILL TOTAL
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0A0724]">Standard Household Spend</h3>
                <p className="text-xs text-slate-500 mt-0.5">Groceries, essentials, pharmacy & dining</p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-mono font-black text-[#0A0724]">
                  ₹20,000
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Gross Spend</span>
              </div>
            </motion.div>

            {/* Down Connector */}
            <div className="flex justify-center -my-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF1E7A] to-[#7C3AED] flex items-center justify-center text-white shadow-xs">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: SHOPPING BENEFIT ₹2,000 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50/90 border-2 border-emerald-300 flex items-center justify-between shadow-[0_12px_32px_rgba(16,185,129,0.15)] gap-4"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  2. WOMUP BENEFIT OFFSET
                </span>
                <h3 className="text-base sm:text-lg font-bold text-emerald-950">Shopping Coin Deduction</h3>
                <p className="text-xs text-emerald-800 mt-0.5 flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  Direct offset at participating registers
                </p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-600">
                  - ₹2,000
                </div>
                <span className="text-[11px] text-emerald-800 font-mono font-bold">Monthly Cap</span>
              </div>
            </motion.div>

            {/* Down Connector */}
            <div className="flex justify-center -my-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-[#7C3AED] flex items-center justify-center text-white shadow-xs">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: EFFECTIVE SPEND ₹18,000 */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0A0724] via-[#1A0F3D] to-[#2D0D4E] text-white border border-purple-400/30 flex items-center justify-between shadow-[0_16px_40px_rgba(10,7,36,0.35)] gap-4"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 block mb-1">
                  3. EFFECTIVE OUT-OF-POCKET
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">Net Optimized Budget</h3>
                <p className="text-xs text-purple-200/80 mt-0.5">Real out-of-pocket cash paid</p>
              </div>

              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-mono font-black text-white">
                  ₹18,000
                </div>
                <span className="text-xs text-slate-950 font-bold bg-gradient-to-r from-emerald-400 to-teal-400 px-2.5 py-0.5 rounded-full inline-block mt-0.5 shadow-xs">
                  Saved 10% Overall
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grounded Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-purple-100 shadow-[0_16px_40px_rgba(124,58,237,0.1)] bg-white">
              <img
                src="/images/shopping-cart.jpg"
                alt="Shopping cart with groceries"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-purple-700 block">
                    Real-World Ledger
                  </span>
                  <span className="text-xs font-bold text-[#0A0724]">Average Family Spend</span>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF1E7A] to-[#7C3AED] text-white text-xs font-mono font-bold shadow-xs">
                  ₹2,000 Off
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Mandatory Disclaimers */}
        <div className="max-w-3xl mx-auto mt-10 p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex items-center gap-3 text-xs text-slate-600 shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-purple-600 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-purple-950 font-semibold">Program Policy:</strong> Benefits are subject to merchant eligibility and program allowances. Figures represent an illustrative financial budget model.
          </p>
        </div>
      </div>
    </section>
  )
}
