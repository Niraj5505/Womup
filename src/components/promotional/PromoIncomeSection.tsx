import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react'

export const PromoIncomeSection: React.FC = () => {
  return (
    <section id="income" className="py-20 sm:py-28 bg-[#05062A] relative overflow-hidden">
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#FD849F]/12 via-[#6651BF]/15 to-[#3048C8]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Ecosystem Potential
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Additional Earning{' '}
            <span className="bg-gradient-to-r from-[#FD849F] via-[#FFC4D1] to-[#6651BF] bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8E8] leading-relaxed">
            Depending on the applicable WOMUP program structure, qualifying participants may have access to additional earning opportunities.
          </p>
        </div>

        {/* Large Visual Income Range Showcase Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-[28px] bg-gradient-to-b from-[#0C0D35] to-[#171843] border border-[#292A52] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05062A] border border-[#6651BF] text-xs font-bold text-[#FFC4D1] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FD849F]" />
            <span>Illustrative Monthly Income Range</span>
          </div>

          {/* Large Visual Range */}
          <div className="text-4xl sm:text-6xl md:text-7xl font-black font-inr bg-gradient-to-r from-[#FD849F] via-[#FFC4D1] to-[#6651BF] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(253,132,159,0.35)] tracking-tight">
            ₹50,000 — ₹5,00,000
          </div>

          <div className="text-sm sm:text-base font-bold text-white uppercase tracking-widest mt-4">
            Illustrative Monthly Income Range
          </div>

          <p className="text-xs sm:text-sm text-[#D8D8E8] max-w-lg mx-auto mt-2 leading-relaxed">
            Illustrative potential based on active community expansion, qualifying partner activity, and repurchasing milestones.
          </p>

          {/* Key Compliance Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#292A52] text-left">
            <div className="p-4 rounded-xl bg-[#0C0D35]/80 border border-[#292A52] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">Zero Risk</span>
                <span className="text-[11px] text-[#D8D8E8]">No financial deposits or inventory purchase required</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0C0D35]/80 border border-[#292A52] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FD849F] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">Performance Based</span>
                <span className="text-[11px] text-[#D8D8E8]">Rewards correlate directly with verified community shopping</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0C0D35]/80 border border-[#292A52] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#6651BF] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block">Dual Mechanism</span>
                <span className="text-[11px] text-[#D8D8E8]">Shopping Coin savings + optional referral repurchasing rewards</span>
              </div>
            </div>
          </div>

          {/* Mandatory Compliance Disclaimer */}
          <div className="mt-8 p-4 rounded-2xl bg-[#05062A]/90 border border-[#292A52] flex items-start sm:items-center gap-3 text-xs text-[#D8D8E8] text-left">
            <ShieldAlert className="w-5 h-5 text-[#FACC15] shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-white font-semibold">Regulatory Notice:</strong> Income figures are promotional examples and are not guaranteed. Actual earnings, if any, depend on eligibility, performance, qualifying activity and applicable terms. WOMUP makes no promise of fixed or guaranteed returns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
