import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  TrendingUp,
  ShieldAlert,
  Sliders,
  Scale,
  Sparkles,
  Info,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox } from '../ui/IconBox.tsx'

export interface IncomeRangeSectionProps {
  onLearnMoreClick?: () => void
}

// Custom Counter Hook with ease-out animation on scroll into view
function useAnimatedCounter(endValue: number, duration: number = 1.4, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
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

export const IncomeRangeSection: React.FC<IncomeRangeSectionProps> = ({
  onLearnMoreClick,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  // Animated counters for minimum and maximum figures
  const minIncome = useAnimatedCounter(50000, 1.4, isInView)
  const maxIncome = useAnimatedCounter(500000, 1.6, isInView)

  return (
    <section
      id="income-range"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-purple-50/25 to-white border-b border-slate-200/80"
    >
      <Container size="lg">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeading
            badge={
              <Badge variant="purple" size="md" icon={<TrendingUp className="w-3.5 h-3.5 text-womup-purple" />}>
                Promotional Information
              </Badge>
            }
            title="Promotional Income Range"
            description="Overview of figures referenced in WOMUP promotional materials, presented with full transparency and regulatory context."
            align="center"
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* HERO CARD: Premium Range Display with Animated Numbers */}
        {/* ------------------------------------------------------------- */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white p-8 sm:p-12 shadow-2xl border border-purple-800/40"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-womup-magenta/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Top Tag Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-purple-200 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Reference Scale</span>
              </div>

              {/* Exact Secondary Text Required */}
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-purple-200/90 tracking-wide uppercase font-display max-w-xl">
                Income range displayed in WOMUP promotional material
              </h3>

              {/* Big Animated Number Range Display */}
              <div className="my-6 sm:my-8">
                <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-fuchsia-300 tracking-tight font-inr leading-none drop-shadow-sm">
                  ₹{minIncome.toLocaleString('en-IN')} – ₹{maxIncome.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Visual Scale Spectrum Bar */}
              <div className="w-full max-w-2xl bg-white/10 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-sm mt-2 mb-6">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-300 mb-2.5 font-inr">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    ₹50,000 (Lower Reference)
                  </span>
                  <span className="flex items-center gap-1.5 text-fuchsia-300">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
                    ₹5,00,000 (Upper Reference)
                  </span>
                </div>

                {/* Gradient Range Bar with Animated Fill */}
                <div className="h-3 w-full bg-white/15 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-500 shadow-sm"
                  />
                </div>

                <p className="text-[11px] sm:text-xs text-purple-200/70 mt-3 text-center">
                  Scale visualizes the two boundary reference figures published in WOMUP marketing materials.
                </p>
              </div>

              {/* Three Clarity Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl text-left">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1">
                    <Scale className="w-4 h-4" />
                    <span>Promotional Reference</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Figures represent marketing examples shown in supplied documentation.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-fuchsia-300 mb-1">
                    <Sliders className="w-4 h-4" />
                    <span>Outcome Variations</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Individual shopper activity, team structure, and eligibility rules apply.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-300 mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Official Terms</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Participation governed strictly by WOMUP formal platform terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MANDATORY REGULATORY COMPLIANCE DISCLOSURE BOX */}
        {/* ------------------------------------------------------------- */}
        <div className="max-w-4xl mx-auto">
          <Card
            variant="default"
            padding="lg"
            className="border-amber-200 bg-amber-50/50 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <IconBox color="gold" size="md" shape="squircle" className="flex-shrink-0 mt-0.5">
                <ShieldAlert className="w-5 h-5 text-amber-900" />
              </IconBox>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-md">
                    Regulatory Disclosure & Notice
                  </span>
                </div>

                {/* EXACT MANDATORY NOTICE TEXT */}
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                  "Figures shown are promotional claims from the supplied material. Actual income, eligibility and outcomes may vary and should be verified against WOMUP's official terms and applicable regulations."
                </p>

                <div className="pt-2 border-t border-amber-200/80 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-amber-700" />
                    No fixed earning guarantee is made or implied.
                  </span>
                  <span className="flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-amber-700" />
                    Subject to verifiable merchant transactions.
                  </span>
                  {onLearnMoreClick && (
                    <button
                      type="button"
                      onClick={onLearnMoreClick}
                      className="text-womup-purple font-bold hover:underline cursor-pointer ml-auto"
                    >
                      View Platform Guidelines &rarr;
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
