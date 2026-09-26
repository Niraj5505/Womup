import React from 'react'
import { ArrowDown, ShieldAlert } from 'lucide-react'

export const PromoReferralSection: React.FC = () => {
  return (
    <section id="referral" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
            <span>08</span>
            <span className="text-slate-300">•</span>
            <span>Network Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#090A15] tracking-tight">
            Referral & community <span className="text-slate-500 font-extrabold">distribution.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            WOMUP provides structured community sharing allowances when your network saves across everyday retail categories.
          </p>
        </div>

        {/* Top Grid: Community Network Image + Visual Network Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto mb-14">
          {/* Left: Community Network Visual Photography */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group bg-white">
              <img
                src="/images/community-network.jpg"
                alt="WOMUP Community Network"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-xs">
                <span className="text-xs font-bold text-slate-900">Community Structure</span>
                <span className="text-xs font-mono font-semibold text-emerald-600">Multi-Tier Sharing</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Network Diagram (YOU -> LEVEL 1 -> LEVEL 2 -> LEVEL 3) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 shadow-2xs">
            <div className="text-center mb-6">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block mb-1">
                TIERED REWARDS INFRASTRUCTURE
              </span>
              <h3 className="text-lg font-bold text-slate-900">Team Earning Model</h3>
            </div>

            <div className="space-y-3">
              {/* YOU */}
              <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                    00
                  </div>
                  <span className="font-bold text-sm">You (Active Member)</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold">Primary Beneficiary</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1">
                <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {/* Level 1 */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700">
                    01
                  </div>
                  <div>
                    <span className="font-bold text-sm text-slate-900 block leading-tight">Direct Referrals</span>
                    <span className="text-[11px] text-slate-500">Tier 1 Network</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-900">Direct Allowance</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-1">
                <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {/* Level 2 & 3 */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700">
                    02
                  </div>
                  <div>
                    <span className="font-bold text-sm text-slate-900 block leading-tight">Extended Community</span>
                    <span className="text-[11px] text-slate-500">Tier 2 & 3 Secondary Spends</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-900">Community Pool</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-500 shadow-2xs">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-slate-800 font-semibold">Regulatory Notice:</strong> Community allowances depend entirely on legitimate retail consumption across approved partner stores. No recruiting or joining commissions are paid.
          </p>
        </div>
      </div>
    </section>
  )
}
