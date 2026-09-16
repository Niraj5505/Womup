import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Coins,
  Repeat,
  ArrowDown,
  Info,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  GitBranch,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox } from '../ui/IconBox.tsx'
import { Button } from '../ui/Button.tsx'

export interface IncomeModelSectionProps {
  onJoinFreeClick?: () => void
}

export const IncomeModelSection: React.FC<IncomeModelSectionProps> = ({ onJoinFreeClick }) => {
  return (
    <section id="income-model" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <Container size="lg">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge={
              <Badge variant="purple" size="md" icon={<GitBranch className="w-3.5 h-3.5 text-womup-purple" />}>
                Two-Way Reward Framework
              </Badge>
            }
            title="Refer Kare Aur 2 Tarah Se Income Paayen"
            description="Explore the two referral and shopping incentive mechanisms described in the WOMUP promotional model."
            align="left"
            action={
              <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>2 Reward Streams</span>
              </div>
            }
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VISUAL DIAGRAM: Referral -> Stream 1 AND Referral -> Stream 2 */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Referral Architecture
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Visual Referral Relationship Flow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* STREAM 1 FLOW: Referral ↓ Shopping Coin Income */}
            <div className="flex flex-col items-center p-5 rounded-xl bg-amber-50/50 border border-amber-200/80">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Users className="w-4 h-4 text-womup-purple" />
                <span className="text-sm font-bold text-slate-900">Referral</span>
              </div>

              {/* Arrow Down */}
              <div className="my-3 flex flex-col items-center">
                <div className="w-0.5 h-3 bg-amber-400" />
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
                <div className="w-0.5 h-3 bg-amber-400" />
              </div>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-xs">
                <Coins className="w-4 h-4 text-slate-950" />
                <span>Shopping Coin Income</span>
              </div>
            </div>

            {/* STREAM 2 FLOW: Referral ↓ Repurchasing Income */}
            <div className="flex flex-col items-center p-5 rounded-xl bg-fuchsia-50/50 border border-fuchsia-200/80">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Users className="w-4 h-4 text-womup-purple" />
                <span className="text-sm font-bold text-slate-900">Referral</span>
              </div>

              {/* Arrow Down */}
              <div className="my-3 flex flex-col items-center">
                <div className="w-0.5 h-3 bg-fuchsia-400" />
                <div className="w-6 h-6 rounded-full bg-fuchsia-600 text-white flex items-center justify-center shadow-xs">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
                <div className="w-0.5 h-3 bg-fuchsia-400" />
              </div>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-womup-purple to-womup-magenta text-white font-bold text-sm shadow-xs">
                <Repeat className="w-4 h-4 text-white" />
                <span>Repurchasing Income</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TWO LARGE CARDS */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* CARD 1: Shopping Coin Income */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Card
              variant="rewards"
              padding="lg"
              interactive
              className="h-full flex flex-col justify-between border-amber-300/90 bg-gradient-to-b from-amber-50/70 via-white to-white shadow-womup-card hover:shadow-womup-card-hover"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <Badge variant="gold" size="md" icon={<Coins className="w-3.5 h-3.5 text-amber-700" />}>
                    Benefit Stream 01
                  </Badge>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                    Coin Mechanism
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <IconBox color="gold" size="lg" shape="squircle">
                    <Coins className="w-7 h-7 text-amber-700" />
                  </IconBox>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight leading-tight">
                      Shopping Coin Income
                    </h3>
                    <span className="text-xs text-amber-700 font-semibold mt-0.5 block">
                      Associated with purchases & referrals
                    </span>
                  </div>
                </div>

                {/* Exact Provided Description */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4">
                  "Shopping Coin associated with purchases/referrals according to the WOMUP model."
                </p>

                {/* Visual relationship badge */}
                <div className="mt-6 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Model Pathway:</span>
                  <span className="font-bold text-amber-900 font-mono">
                    Referral → Shopping Coin Income
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-amber-100 flex items-center justify-between text-xs text-slate-500">
                <span>Subject to WOMUP model rules</span>
                <span className="text-amber-800 font-bold flex items-center gap-1">
                  <span>Stream 01</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Card>
          </motion.div>

          {/* CARD 2: Repurchasing Income */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="h-full"
          >
            <Card
              variant="purple"
              padding="lg"
              interactive
              className="h-full flex flex-col justify-between border-purple-200/90 bg-gradient-to-b from-purple-50/70 via-white to-white shadow-womup-card hover:shadow-womup-card-hover"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <Badge variant="magenta" size="md" icon={<Repeat className="w-3.5 h-3.5 text-womup-magenta" />}>
                    Benefit Stream 02
                  </Badge>
                  <span className="text-xs font-bold text-womup-purple uppercase tracking-wide">
                    Repeat Cycle
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <IconBox color="magenta" size="lg" shape="squircle">
                    <Repeat className="w-7 h-7 text-fuchsia-700" />
                  </IconBox>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight leading-tight">
                      Repurchasing Income
                    </h3>
                    <span className="text-xs text-womup-purple font-semibold mt-0.5 block">
                      As described in promotional material
                    </span>
                  </div>
                </div>

                {/* Exact Provided Description */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4">
                  "Repurchasing income described in the WOMUP promotional material."
                </p>

                {/* Visual relationship badge */}
                <div className="mt-6 p-3.5 rounded-xl bg-purple-50/80 border border-purple-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Model Pathway:</span>
                  <span className="font-bold text-womup-purple font-mono">
                    Referral → Repurchasing Income
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-purple-100 flex items-center justify-between text-xs text-slate-500">
                <span>Subject to promotional terms</span>
                <span className="text-womup-purple font-bold flex items-center gap-1">
                  <span>Stream 02</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* REQUIRED INFORMATION NOTE (COMPLIANCE STANDARD) */}
        {/* ------------------------------------------------------------- */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-100/90 border border-slate-200 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Important Regulatory Information Note
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                "Income figures and benefits shown on this website are based on the WOMUP promotional
                material and should not be interpreted as guaranteed earnings."
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-200/80">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero mandatory investment requirements</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transparent promotional rewards model</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={onJoinFreeClick}
          >
            Explore Referral Model Free
          </Button>
        </div>
      </Container>
    </section>
  )
}
