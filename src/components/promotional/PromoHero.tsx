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
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#FAFAFC] text-[#090A15] border-b border-slate-200/70 overflow-hidden"
    >
      {/* Subtle Architectural Grid Pattern (Stripe/Linear style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F1F5F9_1px,transparent_1px),linear-gradient(to_bottom,#F1F5F9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Direct Editorial Typography & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Architectural Micro-Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-[#FD849F] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FD849F] animate-pulse" />
              <span>Consumer Rewards Ecosystem</span>
              <span className="text-pink-300">|</span>
              <span className="text-slate-600 font-medium">v2.4 Active</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#090A15] leading-[1.08]">
                Everyday expenses,{' '}
                <span className="block bg-gradient-to-r from-[#FD849F] via-[#ea5b7b] to-[#6651BF] bg-clip-text text-transparent font-extrabold">
                  automatically rewarded.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal pt-1">
                WOMUP returns up to <strong className="text-slate-900 font-bold">₹2,000 every month</strong> on groceries, dining, healthcare, and daily household shopping. No entry deposit. Direct purchasing benefits.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleJoinClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FD849F] hover:bg-[#ff6f90] text-white text-sm font-bold shadow-[0_8px_25px_rgba(253,132,159,0.42)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.button>

              <button
                type="button"
                onClick={() => scrollTo('#benefits')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white border border-purple-200/80 text-[#6651BF] hover:bg-purple-50/60 text-sm font-semibold shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Calculate Monthly Return</span>
              </button>
            </div>

            {/* Grounded Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-700">₹0 Joining Fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-700">Direct In-Store Redemption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-700">14 Approved Categories</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Interactive Product UI (Card & Ledger) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl border border-purple-100/80 shadow-[0_16px_45px_rgba(102,81,191,0.09)] overflow-hidden">
              {/* Product Header Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FD849F] to-[#6651BF] flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                    W
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      WOMUP Reserve
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      AC-9482 • Verified Member
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 inline-block">
                    ● Active Benefit
                  </span>
                  <div className="text-xs font-extrabold text-slate-900 mt-0.5">
                    ₹2,000 / Mo Cap
                  </div>
                </div>
              </div>

              {/* Embossed Membership Chip Card Graphic */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-[#05062A] via-[#1A1244] to-[#34114D] border border-purple-500/30 text-white rounded-2xl mx-4 sm:mx-5 my-3 relative overflow-hidden shadow-[0_10px_28px_rgba(5,6,42,0.25)]">
                {/* Diagonal subtle brand iridescent line */}
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-bl from-[#FD849F]/20 to-transparent rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-36">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-purple-200/80 font-bold">
                      WOMUP PLATINUM
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-xs">
                      <span className="w-2 h-2 rounded-full bg-[#FD849F]" />
                      <span className="text-[10px] font-mono text-purple-100 font-medium">INR ACCOUNT</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 rounded-md bg-gradient-to-br from-amber-200 via-amber-300 to-yellow-500 border border-amber-300/80 relative overflow-hidden flex items-center justify-center shadow-xs">
                      <div className="w-full h-0.5 bg-amber-600/30" />
                    </div>
                    <span className="font-mono text-xs text-purple-200/90 tracking-widest font-medium">
                      •••• •••• •••• 4210
                    </span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-purple-300/80 block font-mono">
                        Member Balance
                      </span>
                      <span className="text-lg font-black font-mono tracking-tight text-white flex items-center gap-1.5">
                        <span className="text-[#FD849F]">₹</span> 2,000.00 Coins
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                      ₹1.00 = 1 Coin
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Cashback Ledger Feed */}
              <div className="p-4 sm:p-5 pt-1">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Recent Verified Activity
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">Live Simulation</span>
                </div>

                <div className="divide-y divide-slate-100 pt-1">
                  {liveTransactions.map((tx) => {
                    const Icon = tx.icon
                    return (
                      <div
                        key={tx.id}
                        className="py-2.5 flex items-center justify-between hover:bg-slate-50/80 px-2 -mx-2 rounded-lg transition-colors"
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
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md font-mono inline-block">
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
