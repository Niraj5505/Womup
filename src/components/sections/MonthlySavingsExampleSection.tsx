import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  PiggyBank,
  Coins,
  ArrowDown,
  Receipt,
  Wallet,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox } from '../ui/IconBox.tsx'
import { Button } from '../ui/Button.tsx'

export interface MonthlySavingsExampleSectionProps {
  onJoinFreeClick?: () => void
}

// Custom Counter Hook with in-view animation
function useAnimatedCounter(endValue: number, duration: number = 1.2, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeProgress * endValue))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(endValue)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [endValue, duration, shouldStart])

  return count
}

export const MonthlySavingsExampleSection: React.FC<MonthlySavingsExampleSectionProps> = ({
  onJoinFreeClick,
}) => {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  // Animated counters for the numbers
  const beforeSpending = useAnimatedCounter(20000, 1.2, isInView)
  const afterSpending = useAnimatedCounter(18000, 1.2, isInView)
  const displayedSaving = useAnimatedCounter(2000, 1.2, isInView)

  return (
    <section
      ref={sectionRef}
      id="income"
      className="py-16 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Ambient background tints */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="lg">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge={
              <Badge variant="gold" size="md" icon={<PiggyBank className="w-3.5 h-3.5 text-amber-700" />}>
                Monthly Budget Comparison
              </Badge>
            }
            title="Monthly Savings Example"
            description="A clear side-by-side comparison showing how regular monthly household purchases transform through the WOMUP shopping coin model."
            align="left"
            action={
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Promotional Reference Case</span>
              </div>
            }
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BEFORE VS AFTER HIGH-LEVEL COMPARISON CARDS */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* LEFT: BEFORE WOMUP CARD (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <Card
              variant="default"
              padding="lg"
              className="h-full border-slate-300/80 bg-slate-50/60 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-200/80 px-2.5 py-1 rounded-md">
                    BEFORE
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Standard Shopping</span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-200/70 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 leading-tight">
                      Monthly household spending:
                    </h3>
                    <span className="text-xs text-slate-500">Traditional store invoices</span>
                  </div>
                </div>

                <div className="my-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-inr tracking-tight">
                    ₹{beforeSpending.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Full retail bill paid via regular cash or UPI with zero shopping coin deductions.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Coins Redeemed:</span>
                <span className="font-bold text-slate-700">₹0</span>
              </div>
            </Card>
          </motion.div>

          {/* CENTER: COIN BRIDGE ICON (2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-womup-purple to-womup-magenta text-white shadow-womup-glow-magenta flex items-center justify-center flex-shrink-0">
              <Coins className="w-7 h-7 text-amber-300" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-womup-purple mt-2 text-center">
              Shopping Coin Model
            </span>
            <span className="text-[11px] text-slate-400 text-center">Redeemed per rules</span>
          </div>

          {/* RIGHT: AFTER WOMUP CARD (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <Card
              variant="rewards"
              padding="lg"
              className="h-full border-amber-300 bg-gradient-to-b from-amber-50/70 via-white to-white shadow-womup-card-hover flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-900 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-200">
                    AFTER
                  </span>
                  <Badge variant="gold" size="sm">
                    WOMUP Advantage
                  </Badge>
                </div>

                {/* Displayed monthly spending */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-slate-600 block">
                        Displayed monthly spending:
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-womup-purple font-inr">
                        ₹{afterSpending.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-purple-100 text-womup-purple flex items-center justify-center">
                      <Wallet className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Displayed saving Hero Box with Piggy-Bank */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-sm flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                        <PiggyBank className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-100 block">
                          Net Benefit
                        </span>
                        <h4 className="text-sm font-extrabold text-white">
                          Displayed saving:
                        </h4>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black text-white font-inr">
                        ₹{displayedSaving.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>10% Net Savings on Sample Budget</span>
                </span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXACT REQUIRED VISUAL COMPARISON FLOW */}
        {/* ₹20,000 ↓ Shopping Coin ↓ ₹18,000 ↓ ₹2,000 displayed saving */}
        {/* ------------------------------------------------------------- */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Step-By-Step Progression
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              The Visual Calculation Sequence
            </h3>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto">
            {/* Step 1: ₹20,000 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <IconBox color="purple" size="sm" shape="squircle">
                  <Receipt className="w-4 h-4 text-purple-700" />
                </IconBox>
                <span className="text-sm font-bold text-slate-700">Starting Spending</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-950 font-inr">
                ₹20,000
              </span>
            </motion.div>

            {/* Downward Connector 1 */}
            <div className="flex flex-col items-center my-1 z-10">
              <div className="w-0.5 h-3 bg-slate-300" />
              <div className="w-7 h-7 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-500">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
              <div className="w-0.5 h-3 bg-slate-300" />
            </div>

            {/* Step 2: Shopping Coin */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full p-4 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100/60 border border-amber-300 shadow-xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <IconBox color="gold" size="sm" shape="squircle">
                  <Coins className="w-4 h-4 text-amber-700" />
                </IconBox>
                <span className="text-sm font-bold text-slate-900">Shopping Coin</span>
              </div>
              <Badge variant="gold" size="md">
                Applied Benefit
              </Badge>
            </motion.div>

            {/* Downward Connector 2 */}
            <div className="flex flex-col items-center my-1 z-10">
              <div className="w-0.5 h-3 bg-slate-300" />
              <div className="w-7 h-7 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center text-slate-500">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
              <div className="w-0.5 h-3 bg-slate-300" />
            </div>

            {/* Step 3: ₹18,000 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full p-4 rounded-xl bg-purple-50/70 border border-purple-200 shadow-xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <IconBox color="purple" size="sm" shape="squircle">
                  <Wallet className="w-4 h-4 text-womup-purple" />
                </IconBox>
                <span className="text-sm font-bold text-slate-700">Net Checkout Cost</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-womup-purple font-inr">
                ₹18,000
              </span>
            </motion.div>

            {/* Downward Connector 3 */}
            <div className="flex flex-col items-center my-1 z-10">
              <div className="w-0.5 h-3 bg-emerald-400" />
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white shadow-xs flex items-center justify-center">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
              <div className="w-0.5 h-3 bg-emerald-400" />
            </div>

            {/* Step 4: ₹2,000 displayed saving */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full p-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <PiggyBank className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-extrabold text-white">Displayed Saving</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white font-inr">
                ₹2,000
              </span>
            </motion.div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COMPLIANCE DISCLAIMER & ILLUSTRATIVE LABEL */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-xs text-slate-700 leading-relaxed">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900 text-sm mb-1">
                Illustrative example from WOMUP promotional material
              </p>
              <p className="text-slate-600">
                The ₹20,000 spending, ₹18,000 net spending, and ₹2,000 displayed saving figures are
                strictly an illustrative promotional example from the WOMUP reference material to demonstrate
                the deduction mechanism. ₹2,000 is <strong>not a guaranteed saving</strong> for every user.
                Actual monthly savings and coin redemptions depend entirely on merchant participation, invoice
                categories, eligible bill slabs, and active promotional campaign rules.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={onJoinFreeClick}
          >
            Start Your Savings Journey Free
          </Button>
        </div>
      </Container>
    </section>
  )
}
