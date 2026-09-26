import React, { useState } from 'react'
import {
  ArrowRight,
  ShieldCheck,
  ShoppingCart,
  Utensils,
  Shirt,
  HeartPulse,
  Receipt,
  CheckCircle2,
} from 'lucide-react'

interface PromoBannerProps {
  onOpenJoinModal?: () => void
}

interface CategoryBenefit {
  id: string
  label: string
  icon: React.ElementType
  monthlySpend: number
  benefitSaved: number
  netPayable: number
  rate: string
  exampleMerchant: string
}

const categories: CategoryBenefit[] = [
  {
    id: 'groceries',
    label: 'Groceries & Pantry',
    icon: ShoppingCart,
    monthlySpend: 10000,
    benefitSaved: 1000,
    netPayable: 9000,
    rate: '10% Benefit Return',
    exampleMerchant: 'Nature Basket & Supermarkets',
  },
  {
    id: 'dining',
    label: 'Dining & Cafes',
    icon: Utensils,
    monthlySpend: 5000,
    benefitSaved: 500,
    netPayable: 4500,
    rate: '10% Benefit Return',
    exampleMerchant: 'Partner Family Bistros',
  },
  {
    id: 'fashion',
    label: 'Fashion & Tech',
    icon: Shirt,
    monthlySpend: 20000,
    benefitSaved: 2000,
    netPayable: 18000,
    rate: 'Maximum Monthly Cap',
    exampleMerchant: 'Verified Apparel & Retail Stores',
  },
  {
    id: 'health',
    label: 'Pharmacy & Wellness',
    icon: HeartPulse,
    monthlySpend: 4000,
    benefitSaved: 400,
    netPayable: 3600,
    rate: '10% Benefit Return',
    exampleMerchant: 'Approved Pharmacy Outlets',
  },
]

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenJoinModal }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryBenefit>(categories[2]) // Default to Fashion & Tech max

  const handleJoinClick = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      const el = document.querySelector('#contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#FAFAFC] relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_25px_rgba(15,23,42,0.03)] p-6 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content & Interactive Selectors */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-xs font-semibold text-[#FD849F] shadow-2xs">
                <span>02</span>
                <span className="text-pink-300">•</span>
                <span>Benefit Calculator</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#090A15] tracking-tight leading-tight">
                Calculate your monthly{' '}
                <span className="bg-gradient-to-r from-[#FD849F] to-[#6651BF] bg-clip-text text-transparent font-extrabold">
                  direct return.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Select an everyday spending sector below to preview how WOMUP Shopping Coins directly offset your retail invoices.
              </p>

              {/* Segmented Category Buttons */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider block">
                  Select Expenditure Category
                </span>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 justify-center lg:justify-start">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    const isSelected = activeCategory.id === cat.id
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#FD849F] to-[#6651BF] text-white border-transparent shadow-[0_4px_16px_rgba(253,132,159,0.35)]'
                            : 'bg-slate-50 hover:bg-pink-50/50 hover:text-[#FD849F] hover:border-pink-200 text-slate-700 border-slate-200/80'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{cat.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons & Fine Print */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={handleJoinClick}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#FD849F] hover:bg-[#ff6f90] text-white text-sm font-bold shadow-[0_8px_25px_rgba(253,132,159,0.38)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Claim Monthly Benefit</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Subject to merchant eligibility and program caps</span>
                </div>
              </div>
            </div>

            {/* Right Column: Realistic Digital Receipt Ticket */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white rounded-2xl border border-purple-100 shadow-[0_12px_35px_rgba(102,81,191,0.08)] p-6 relative overflow-hidden font-sans">
                {/* Receipt Header */}
                <div className="border-b border-slate-150 pb-4 text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FD849F] to-[#6651BF] text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest block font-mono">
                    VERIFIED INVOICE SUMMARY
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Merchant: {activeCategory.exampleMerchant}
                  </span>
                </div>

                {/* Line Items */}
                <div className="py-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Monthly Retail Spend</span>
                    <span className="font-bold text-slate-900">
                      ₹{activeCategory.monthlySpend.toLocaleString('en-IN')}.00
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-emerald-700 font-bold bg-emerald-50 border border-emerald-200/80 -mx-2 px-2.5 py-2 rounded-lg">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WOMUP Benefit Credit</span>
                    </span>
                    <span>-₹{activeCategory.benefitSaved.toLocaleString('en-IN')}.00</span>
                  </div>
                </div>

                {/* Dotted Perforation Line */}
                <div className="border-t-2 border-dashed border-slate-200 my-2 relative">
                  <div className="absolute -left-8 -top-3 w-5 h-5 bg-[#FAFAFC] rounded-full border-r border-slate-200" />
                  <div className="absolute -right-8 -top-3 w-5 h-5 bg-[#FAFAFC] rounded-full border-l border-slate-200" />
                </div>

                {/* Total Net Payable */}
                <div className="pt-3 flex items-baseline justify-between font-mono">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-sans font-bold">
                      Effective Out of Pocket
                    </span>
                    <span className="text-2xl font-black text-slate-900">
                      ₹{activeCategory.netPayable.toLocaleString('en-IN')}.00
                    </span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FD849F] text-white shadow-xs font-sans">
                    Saved ₹{activeCategory.benefitSaved.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Barcode Graphic */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="h-6 flex items-center gap-0.5 opacity-60">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3].map((w, i) => (
                      <div
                        key={i}
                        className="bg-slate-800 h-full"
                        style={{ width: `${w}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">AUTH #8491-WOMUP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
