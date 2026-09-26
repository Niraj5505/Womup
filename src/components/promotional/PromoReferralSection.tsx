import React from 'react'
import { ArrowDown, ShieldAlert } from 'lucide-react'

export const PromoReferralSection: React.FC = () => {
  return (
    <section id="referral" className="py-16 sm:py-24 bg-[#FAF7FD] relative overflow-hidden border-b border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 border border-purple-200/90 text-xs font-bold text-purple-800 mb-3 shadow-xs">
            <span>08</span>
            <span className="text-purple-300">•</span>
            <span>Network Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0724] tracking-tight">
            Referral & community{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#FF1E7A] to-[#6366F1] bg-clip-text text-transparent font-extrabold">
              distribution.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            WOMUP provides structured community sharing allowances when your network saves across everyday retail categories.
          </p>
        </div>

        {/* Top Grid: Community Network Image + Visual Network Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-14">
          {/* Left: Community Network Visual Photography */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border-2 border-purple-100 shadow-[0_16px_40px_rgba(124,58,237,0.1)] group bg-white">
              <img
                src="/images/community-network.jpg"
                alt="WOMUP Community Network"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 flex items-center justify-between shadow-lg">
                <span className="text-xs font-bold text-[#0A0724]">Community Structure</span>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Multi-Tier Sharing</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Network Diagram (YOU -> LEVEL 1 -> LEVEL 2 -> LEVEL 3) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-purple-200/90 shadow-[0_12px_35px_rgba(124,58,237,0.08)]">
            <div className="text-center mb-6">
              <span className="text-[11px] font-mono uppercase font-bold text-purple-700 block mb-1">
                TIERED REWARDS INFRASTRUCTURE
              </span>
              <h3 className="text-lg font-bold text-[#0A0724]">Team Earning Model</h3>
            </div>

            <div className="space-y-3">
              {/* YOU */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF1E7A] via-[#E11D48] via-[#7C3AED] to-[#4F46E5] text-white flex items-center justify-between shadow-[0_8px_25px_rgba(255,30,122,0.35)] ring-1 ring-white/25">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xs text-white shadow-xs">
                    00
                  </div>
                  <span className="font-extrabold text-sm">You (Active Member)</span>
                </div>
                <span className="text-xs font-mono text-emerald-300 font-bold bg-black/20 px-2.5 py-0.5 rounded-full border border-emerald-400/40">Primary Beneficiary</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1">
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-[#7C3AED]">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Level 1 */}
              <div className="p-4 rounded-2xl bg-purple-50/40 border-2 border-purple-200 flex items-center justify-between shadow-2xs hover:border-purple-400 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center font-bold text-xs text-purple-700">
                    01
                  </div>
                  <div>
                    <span className="font-bold text-sm text-[#0A0724] block leading-tight">Direct Referrals</span>
                    <span className="text-[11px] text-purple-700 font-medium">Tier 1 Network</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-purple-950 bg-white px-2.5 py-1 rounded-lg border border-purple-200">Direct Allowance</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1">
                <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center text-[#FF1E7A]">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Level 2 & 3 */}
              <div className="p-4 rounded-2xl bg-pink-50/40 border-2 border-pink-200 flex items-center justify-between shadow-2xs hover:border-pink-400 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center font-bold text-xs text-[#BE185D]">
                    02
                  </div>
                  <div>
                    <span className="font-bold text-sm text-[#0A0724] block leading-tight">Extended Community</span>
                    <span className="text-[11px] text-pink-700 font-medium">Tier 2 & 3 Secondary Spends</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-pink-950 bg-white px-2.5 py-1 rounded-lg border border-pink-200">Community Pool</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex items-center gap-3 text-xs text-slate-700 shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-purple-600 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-purple-950 font-bold">Regulatory Notice:</strong> Community allowances depend entirely on legitimate retail consumption across approved partner stores. No recruiting or joining commissions are paid.
          </p>
        </div>
      </div>
    </section>
  )
}
