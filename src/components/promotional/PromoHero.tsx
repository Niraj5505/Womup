import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Store,
  Pill,
  Utensils,
  Zap,
  Check,
} from 'lucide-react'

interface PromoHeroProps {
  onOpenJoinModal?: () => void
}

interface TransactionItem {
  id: string
  store: string
  category: string
  spend: string
  coinsEarned: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
}

const liveTransactions: TransactionItem[] = [
  {
    id: 'tx-1',
    store: 'FreshMart Supermarket',
    category: 'Groceries & Pantry',
    spend: '₹3,420',
    coinsEarned: '+₹342.00',
    icon: Store,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    id: 'tx-2',
    store: 'Apollo Health & Pharma',
    category: 'Healthcare & Wellness',
    spend: '₹1,250',
    coinsEarned: '+₹125.00',
    icon: Pill,
    iconColor: 'text-[#FD849F]',
    iconBg: 'bg-pink-50',
  },
  {
    id: 'tx-3',
    store: 'Blue Ribbon Kitchen',
    category: 'Dining & Food',
    spend: '₹890',
    coinsEarned: '+₹89.00',
    icon: Utensils,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    id: 'tx-4',
    store: 'Croma Electronics',
    category: 'Smart Devices',
    spend: '₹18,500',
    coinsEarned: '+₹1,850.00',
    icon: Zap,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
]

export const PromoHero: React.FC<PromoHeroProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleJoinClick = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#FAF7FD] text-[#0A0724] border-b border-purple-100/70 overflow-hidden"
    >
      {/* Radiant Ambient Atmospheric Background Orbs */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-[#FF1E7A]/15 via-fuchsia-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-500/15 via-indigo-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[300px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F1EBFB_1px,transparent_1px),linear-gradient(to_bottom,#F1EBFB_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Direct Editorial Typography & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Architectural Micro-Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-200/90 text-xs font-bold text-[#BE185D] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF1E7A] shadow-[0_0_8px_#FF1E7A] animate-pulse" />
              <span>Consumer Rewards Ecosystem</span>
              <span className="text-pink-300">|</span>
              <span className="text-purple-700 font-medium">v2.4 Active</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0724] leading-[1.08]">
                Everyday expenses,{' '}
                <span className="block bg-gradient-to-r from-[#FF1E7A] via-[#D946EF] via-[#8B5CF6] to-[#4F46E5] bg-clip-text text-transparent font-extrabold">
                  automatically rewarded.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal pt-1">
                WOMUP returns up to <strong className="text-purple-950 font-bold bg-purple-100/60 px-1.5 py-0.5 rounded">₹2,000 every month</strong> on groceries, dining, healthcare, and daily household shopping. No entry deposit. Direct purchasing benefits.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleJoinClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF1E7A] via-[#E11D48] to-[#7C3AED] hover:from-[#E11D48] hover:to-[#6366F1] text-white text-sm font-bold shadow-[0_10px_28px_rgba(255,30,122,0.42)] ring-1 ring-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-4 h-4 text-pink-100" />
              </motion.button>

              <button
                type="button"
                onClick={() => scrollTo('#benefits')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border-2 border-purple-200 text-[#6B21A8] hover:bg-purple-50/80 hover:border-purple-300 text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Calculate Monthly Return</span>
              </button>
            </div>

            {/* Grounded Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">₹0 Joining Fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">Direct In-Store Redemption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800">14 Approved Categories</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Interactive Product UI (Card & Ledger) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl border border-purple-200/90 shadow-[0_20px_50px_rgba(124,58,237,0.12)] overflow-hidden">
              {/* Product Header Bar */}
              <div className="p-4 sm:p-5 border-b border-purple-100 flex items-center justify-between bg-gradient-to-r from-purple-50/70 to-pink-50/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1E7A] via-[#E11D48] to-[#7C3AED] flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                    W
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      WOMUP Reserve
                    </span>
                    <span className="text-[11px] text-purple-700 font-mono">
                      AC-9482 • Verified Member
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 inline-block shadow-2xs">
                    ● Active Benefit
                  </span>
                  <div className="text-xs font-extrabold text-[#0A0724] mt-0.5">
                    ₹2,000 / Mo Cap
                  </div>
                </div>
              </div>

              {/* Embossed Membership Chip Card Graphic */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-[#0B092B] via-[#1E1145] to-[#380E52] border border-purple-400/40 text-white rounded-2xl mx-4 sm:mx-5 my-3 relative overflow-hidden shadow-[0_16px_36px_rgba(11,9,43,0.35)]">
                {/* Diagonal subtle brand iridescent line */}
                <div className="absolute -right-8 -top-8 w-48 h-48 bg-gradient-to-bl from-[#FF1E7A]/25 via-purple-500/20 to-transparent rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-36">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-purple-200 font-bold">
                      WOMUP PLATINUM
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs">
                      <span className="w-2 h-2 rounded-full bg-[#FF1E7A] shadow-[0_0_6px_#FF1E7A]" />
                      <span className="text-[10px] font-mono text-purple-100 font-semibold">INR ACCOUNT</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 rounded-md bg-gradient-to-br from-[#FFE082] via-[#FFD54F] to-[#FFA000] border border-[#FFECB3] relative overflow-hidden flex items-center justify-center shadow-xs">
                      <div className="w-full h-0.5 bg-amber-700/30" />
                    </div>
                    <span className="font-mono text-xs text-purple-200 tracking-widest font-semibold">
                      •••• •••• •••• 4210
                    </span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-purple-300 block font-mono font-medium">
                        Member Balance
                      </span>
                      <span className="text-xl font-black font-mono tracking-tight text-white flex items-center gap-1.5">
                        <span className="text-[#FF1E7A]">₹</span> 2,000.00 Coins
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300 font-bold bg-emerald-950/80 border border-emerald-400/40 px-2 py-0.5 rounded-md shadow-2xs">
                      ₹1.00 = 1 Coin
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Cashback Ledger Feed */}
              <div className="p-4 sm:p-5 pt-1">
                <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                  <span className="text-xs font-bold text-[#0A0724] uppercase tracking-wider">
                    Recent Verified Activity
                  </span>
                  <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">Live Simulation</span>
                </div>

                <div className="divide-y divide-purple-50 pt-1">
                  {liveTransactions.map((tx) => {
                    const Icon = tx.icon
                    return (
                      <div
                        key={tx.id}
                        className="py-2.5 flex items-center justify-between hover:bg-purple-50/50 px-2 -mx-2 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${tx.iconBg} flex items-center justify-center shrink-0`}>
                            <Icon className={`w-4 h-4 ${tx.iconColor}`} />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-slate-900 block leading-tight">
                              {tx.store}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              Spend: {tx.spend}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md font-mono inline-block">
                            {tx.coinsEarned}
                          </span>
                          <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">Credited</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
