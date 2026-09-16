import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBasket,
  Leaf,
  Pill,
  UtensilsCrossed,
  Scissors,
  Coins,
  ArrowDown,
  Receipt,
  Wallet,
  ShieldCheck,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Minus,
  Equal,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox, type IconBoxColor } from '../ui/IconBox.tsx'
import { Button } from '../ui/Button.tsx'

interface SavingsExample {
  id: string
  category: string
  billAmount: number
  shoppingCoin: number
  amountToPay: number
  displayedSaving: number
  icon: React.ComponentType<{ className?: string }>
  color: IconBoxColor
  note: string
  savingsPercentage: number
}

const savingsExamples: SavingsExample[] = [
  {
    id: 'kirana',
    category: 'Kirana',
    billAmount: 10000,
    shoppingCoin: 600,
    amountToPay: 9400,
    displayedSaving: 600,
    savingsPercentage: 6,
    icon: ShoppingBasket,
    color: 'purple',
    note: 'Monthly household grocery & staple goods shopping.',
  },
  {
    id: 'vegetable',
    category: 'Vegetable',
    billAmount: 4000,
    shoppingCoin: 600,
    amountToPay: 3400,
    displayedSaving: 600,
    savingsPercentage: 15,
    icon: Leaf,
    color: 'gold',
    note: 'Fresh farm vegetables, seasonal fruits & greens.',
  },
  {
    id: 'medical',
    category: 'Medical',
    billAmount: 2000,
    shoppingCoin: 300,
    amountToPay: 1700,
    displayedSaving: 300,
    savingsPercentage: 15,
    icon: Pill,
    color: 'magenta',
    note: 'Prescription medicines, daily healthcare & pharmacy essentials.',
  },
  {
    id: 'restaurant',
    category: 'Restaurant',
    billAmount: 2000,
    shoppingCoin: 300,
    amountToPay: 1700,
    displayedSaving: 300,
    savingsPercentage: 15,
    icon: UtensilsCrossed,
    color: 'pink',
    note: 'Family dining, casual cafe meals & food orders.',
  },
  {
    id: 'salon',
    category: 'Beauty Parlour / Salon',
    billAmount: 2000,
    shoppingCoin: 300,
    amountToPay: 1700,
    displayedSaving: 300,
    savingsPercentage: 15,
    icon: Scissors,
    color: 'magenta',
    note: 'Hair treatments, salon grooming & personal skincare.',
  },
]

export interface SavingsCalculatorSectionProps {
  onStartSavingClick?: () => void
}

export const SavingsCalculatorSection: React.FC<SavingsCalculatorSectionProps> = ({
  onStartSavingClick,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('kirana')

  const activeExample =
    savingsExamples.find((ex) => ex.id === activeTabId) || savingsExamples[0]

  return (
    <section id="savings-calculator" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <Container size="lg">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge={
              <Badge variant="purple" size="md" icon={<Coins className="w-3.5 h-3.5 text-womup-purple" />}>
                Promotional Reference Examples
              </Badge>
            }
            title="How Much Can You Save?"
            description="Explore real reference examples from the WOMUP promotional material demonstrating the step-by-step calculation flow from Bill Amount to Displayed Saving."
            align="left"
            action={
              <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Reference Model Breakdown</span>
              </div>
            }
          />
        </div>

        {/* 1. Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {savingsExamples.map((item) => {
            const Icon = item.icon
            const isActive = activeTabId === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTabId(item.id)}
                className={`relative flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer select-none border ${
                  isActive
                    ? 'bg-womup-purple text-white border-womup-purple shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                <span>{item.category}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeCalculatorTab"
                    className="absolute inset-0 rounded-xl bg-womup-purple -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* 2. Main Calculation Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Clean Visual Calculation Flow (7 columns) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Visual Calculation Flow
                  </span>
                  <Badge variant="gold" size="sm">
                    {activeExample.category}
                  </Badge>
                </div>
                <span className="text-xs font-semibold text-slate-400">WOMUP Model</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExample.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col items-center w-full"
                >
                  {/* --------------------------------------------------- */}
                  {/* LEVEL 1: Bill Amount */}
                  {/* --------------------------------------------------- */}
                  <div className="w-full p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 flex-shrink-0">
                        <Receipt className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Starting Invoice
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          Bill Amount
                        </h4>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-black text-slate-950 font-inr">
                        ₹{activeExample.billAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Flow Arrow Down 1 */}
                  <div className="flex flex-col items-center my-1.5 z-10">
                    <div className="w-0.5 h-3 bg-slate-300" />
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-500">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-0.5 h-3 bg-slate-300" />
                  </div>

                  {/* --------------------------------------------------- */}
                  {/* LEVEL 2: Shopping Coin */}
                  {/* --------------------------------------------------- */}
                  <div className="w-full p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-50/90 via-white to-amber-50/60 border border-amber-300 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <IconBox color="gold" size="md" shape="squircle">
                        <Coins className="w-5 h-5 text-amber-700" />
                      </IconBox>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                            Redeemable Benefit
                          </span>
                          <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.2 rounded">
                            Discount
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1">
                          <span>Shopping Coin</span>
                        </h4>
                      </div>
                    </div>

                    <div className="text-right flex items-center gap-1">
                      <Minus className="w-4 h-4 text-amber-600" />
                      <span className="text-xl sm:text-2xl font-black text-amber-700 font-inr">
                        ₹{activeExample.shoppingCoin.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Flow Arrow Down 2 */}
                  <div className="flex flex-col items-center my-1.5 z-10">
                    <div className="w-0.5 h-3 bg-slate-300" />
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-500">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-0.5 h-3 bg-slate-300" />
                  </div>

                  {/* --------------------------------------------------- */}
                  {/* LEVEL 3: Amount to Pay */}
                  {/* --------------------------------------------------- */}
                  <div className="w-full p-4 sm:p-5 rounded-xl bg-purple-50/60 border border-purple-200 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 text-womup-purple flex items-center justify-center flex-shrink-0">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
                          Net Payable
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          Amount to Pay
                        </h4>
                      </div>
                    </div>

                    <div className="text-right flex items-center gap-1">
                      <Equal className="w-4 h-4 text-womup-purple" />
                      <span className="text-xl sm:text-2xl font-black text-womup-purple font-inr">
                        ₹{activeExample.amountToPay.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Flow Arrow Down 3 */}
                  <div className="flex flex-col items-center my-1.5 z-10">
                    <div className="w-0.5 h-3 bg-emerald-400" />
                    <div className="w-7 h-7 rounded-full bg-emerald-500 border border-emerald-600 shadow-xs flex items-center justify-center text-white">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-0.5 h-3 bg-emerald-400" />
                  </div>

                  {/* --------------------------------------------------- */}
                  {/* LEVEL 4: Displayed Saving */}
                  {/* --------------------------------------------------- */}
                  <div className="w-full p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center flex-shrink-0">
                        <TrendingDown className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-100 block">
                          Direct Net Pocket Benefit
                        </span>
                        <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                          Displayed Saving
                        </h3>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-inr block">
                        ₹{activeExample.displayedSaving.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-100 bg-white/15 px-2 py-0.5 rounded-full inline-block mt-0.5">
                        {activeExample.savingsPercentage}% Instant Off
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Breakdown Summary Card & Model Context (5 columns) */}
          <div className="lg:col-span-5">
            <Card variant="default" padding="lg" className="border-slate-200 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Category Breakdown
                  </span>
                  <Badge variant="purple" size="sm">
                    {activeExample.category}
                  </Badge>
                </div>

                <h4 className="text-lg font-bold text-slate-900 leading-snug">
                  {activeExample.category} Shopping Calculation
                </h4>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeExample.note}
                </p>
              </div>

              {/* Quick Math Summary Table */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Store Bill Amount</span>
                  <span className="font-bold text-slate-900 font-inr">
                    ₹{activeExample.billAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-amber-700">
                  <span className="font-medium">Less: Shopping Coin</span>
                  <span className="font-bold font-inr">
                    - ₹{activeExample.shoppingCoin.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-700 pt-2 border-t border-slate-200">
                  <span>Final Amount to Pay</span>
                  <span className="font-bold text-womup-purple font-inr">
                    ₹{activeExample.amountToPay.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-emerald-700 pt-1 font-bold">
                  <span>Your Net Displayed Saving</span>
                  <span className="font-inr text-sm">
                    ₹{activeExample.displayedSaving.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* 3 Practical Steps */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-womup-purple font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Bill Amount</span>
                    <span className="text-slate-500">Shop for ₹{activeExample.billAmount.toLocaleString('en-IN')} at partner store.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Shopping Coin</span>
                    <span className="text-slate-500">Redeem ₹{activeExample.shoppingCoin} Coin via WOMUP app.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Amount to Pay</span>
                    <span className="text-slate-500">Pay only ₹{activeExample.amountToPay.toLocaleString('en-IN')} & save ₹{activeExample.displayedSaving}.</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  onClick={onStartSavingClick}
                >
                  Start Saving With Shopping Coins
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Important Promotional Model Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100/90 border border-slate-200 flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-800">Important Promotional Reference Note:</strong> These figures
            (Kirana, Vegetable, Medical, Restaurant, Beauty Parlour / Salon) are promotional examples taken strictly
            from the supplied WOMUP material. They illustrate how the shopping coin deduction operates on sample
            invoices and must not be interpreted as universally applicable guaranteed savings across all transactions.
            Redemption limits are subject to merchant partner terms and category policies.
          </p>
        </div>
      </Container>
    </section>
  )
}
