import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ShieldAlert, Check } from 'lucide-react'

export const PromoShoppingBenefits: React.FC = () => {
  return (
    <section id="savings" className="py-12 sm:py-28 bg-[#FFF8FA] relative overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[400px] bg-[#FFD0DD]/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[400px] bg-[#D8C9ED]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-white border border-[#E8DDE3] text-[#FD849F] text-xs font-extrabold uppercase tracking-wider inline-block mb-3 shadow-xs">
            Value Simulation
          </span>
          {/* Exact Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05062A] tracking-tight">
            See How The{' '}
            <span className="text-[#FD849F]">
              Saving Concept Works
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555568] leading-relaxed">
            Understand the direct value impact on your monthly household expenses with this illustrative before-and-after comparison.
          </p>
        </div>

        {/* Main Grid: Visual Step-by-Step Calculation + Cart Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: BEFORE → BENEFIT → AFTER Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Card 1: MONTHLY SHOPPING ₹20,000 (#05062A) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 sm:p-7 rounded-[20px] sm:rounded-[24px] bg-white border border-[#E8DDE3] flex items-center justify-between shadow-[0_8px_30px_rgba(5,6,42,0.06)] gap-4"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#555568] block mb-1">
                  MONTHLY SHOPPING
                </span>
                <h3 className="text-xl font-bold text-[#05062A]">Everyday Essentials</h3>
                <p className="text-xs text-[#555568] mt-1">Regular household groceries & shopping</p>
              </div>

              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-black font-inr text-[#05062A]">
                  ₹20,000
                </div>
                <span className="text-[11px] text-[#555568]">Retail Value</span>
              </div>
            </motion.div>

            {/* Down Arrow Connector */}
            <div className="flex justify-center -my-1">
              <div className="w-9 h-9 rounded-full bg-white border border-[#FFC4D1] flex items-center justify-center text-[#FD849F] shadow-sm">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: SHOPPING BENEFIT ₹2,000 (#FD849F) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-7 rounded-[24px] bg-gradient-to-r from-white via-[#FFF8FA] to-white border-2 border-[#FD849F] shadow-[0_8px_30px_rgba(253,132,159,0.18)] flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#FD849F] block mb-1">
                  SHOPPING BENEFIT
                </span>
                <h3 className="text-xl font-bold text-[#05062A]">WOMUP Program Benefit</h3>
                <p className="text-xs text-[#22C55E] font-semibold mt-1 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Applied at participating merchants
                </p>
              </div>

              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-black font-inr text-[#FD849F]">
                  - ₹2,000
                </div>
                <span className="text-[11px] font-bold text-[#FD849F]">Promotional Savings</span>
              </div>
            </motion.div>

            {/* Down Arrow Connector */}
            <div className="flex justify-center -my-1">
              <div className="w-9 h-9 rounded-full bg-white border border-[#D8C9ED] flex items-center justify-center text-[#6651BF] shadow-sm">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3: EFFECTIVE SPEND ₹18,000 (#6651BF) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-7 rounded-[24px] bg-white border-2 border-[#6651BF]/40 flex items-center justify-between shadow-[0_8px_30px_rgba(102,81,191,0.1)]"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#6651BF] block mb-1">
                  EFFECTIVE SPEND
                </span>
                <h3 className="text-xl font-bold text-[#05062A]">Net Out-Of-Pocket</h3>
                <p className="text-xs text-[#555568] mt-1">Actual optimized household cost</p>
              </div>

              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-black font-inr text-[#6651BF]">
                  ₹18,000
                </div>
                <span className="text-[11px] text-[#6651BF] font-bold">Optimized Budget</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Promotional Shopping Cart & Grocery Imagery */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md aspect-square rounded-[28px] overflow-hidden border-2 border-white shadow-[0_12px_36px_rgba(5,6,42,0.1)] group bg-white"
            >
              <img
                src="/images/shopping-cart.jpg"
                alt="Shopping cart with groceries and floating Rupee coins"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8DDE3] flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#555568] block">
                    Illustrative Example
                  </span>
                  <span className="text-sm font-black text-[#05062A]">Family Grocery Savings</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FFD0DD]/60 text-[#FD849F] text-xs font-black">
                  Save ₹2,000
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Clear Mandatory Disclaimers */}
        <div className="max-w-4xl mx-auto mt-10 p-5 rounded-2xl bg-white border border-[#E8DDE3] flex items-center gap-3 text-xs text-[#555568] shadow-xs">
          <ShieldAlert className="w-5 h-5 text-[#FD849F] shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-[#05062A] font-semibold">Illustrative Example:</strong> Actual benefits may vary according to applicable terms, eligible purchases and participating merchants. No guaranteed financial return is implied.
          </p>
        </div>
      </div>
    </section>
  )
}
