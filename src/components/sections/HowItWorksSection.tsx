import React from 'react'
import { motion } from 'framer-motion'
import {
  UserPlus,
  ShoppingBag,
  Coins,
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox, type IconBoxColor } from '../ui/IconBox.tsx'
import { Button } from '../ui/Button.tsx'

export interface HowItWorksSectionProps {
  onJoinFreeClick?: () => void
}

interface StepItem {
  number: string
  title: string
  explanation: string
  icon: React.ComponentType<{ className?: string }>
  color: IconBoxColor
  badgeText: string
  subPoints: string[]
}

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Register Free',
    explanation: 'Create your WOMUP account and complete registration.',
    icon: UserPlus,
    color: 'purple',
    badgeText: 'Step 1',
    subPoints: ['Quick digital onboarding', 'Zero registration fee'],
  },
  {
    number: '02',
    title: 'Shop',
    explanation:
      'Shop through participating WOMUP merchants/categories according to the applicable model.',
    icon: ShoppingBag,
    color: 'magenta',
    badgeText: 'Step 2',
    subPoints: ['Participating merchants', 'Applicable category model'],
  },
  {
    number: '03',
    title: 'Shopping Coin',
    explanation: 'Receive/use Shopping Coin according to the applicable WOMUP rules.',
    icon: Coins,
    color: 'gold',
    badgeText: 'Step 3',
    subPoints: ['Receive & use Shopping Coins', 'Per applicable WOMUP rules'],
  },
]

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onJoinFreeClick }) => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <SectionHeading
            badge={
              <Badge variant="magenta" size="md" icon={<Sparkles className="w-3.5 h-3.5 text-womup-magenta" />}>
                Simple 3-Step Process
              </Badge>
            }
            title="How WOMUP Works"
            description="Empowerment • Shopping • Revolutions. A straightforward 3-step model designed to make everyday purchases more rewarding."
            align="left"
            action={
              <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Free to Get Started</span>
              </div>
            }
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3-STEP CARDS WITH CONNECTING ARROWS */}
        {/* ------------------------------------------------------------- */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.15 }}
                    className="w-full h-full"
                  >
                    <Card
                      variant="default"
                      padding="lg"
                      interactive
                      className="h-full flex flex-col justify-between bg-white border-slate-200 hover:border-womup-purple/40 hover:shadow-womup-card-hover transition-all duration-200 relative overflow-hidden group"
                    >
                      {/* Subtle background number watermark */}
                      <span className="absolute top-3 right-4 text-6xl sm:text-7xl font-black text-slate-100 font-display select-none pointer-events-none group-hover:text-purple-50 transition-colors">
                        {step.number}
                      </span>

                      <div>
                        {/* Top step indicator and Icon */}
                        <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                          <IconBox
                            color={step.color}
                            size="lg"
                            shape="squircle"
                            className="group-hover:scale-105 transition-transform duration-200 shadow-xs"
                          >
                            <Icon className="w-7 h-7" />
                          </IconBox>

                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                            {step.badgeText}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-3 group-hover:text-womup-purple transition-colors leading-tight">
                          {step.title}
                        </h3>

                        {/* Exact Provided Explanation */}
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.explanation}
                        </p>
                      </div>

                      {/* Sub-points / Feature assurance */}
                      <div className="mt-8 pt-5 border-t border-slate-100 space-y-2">
                        {step.subPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  {/* Desktop Horizontal Arrow Connector between cards */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-womup-purple/30 text-womup-purple shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Mobile Vertical Arrow Connector between cards */}
                  {index < steps.length - 1 && (
                    <div className="flex lg:hidden my-2 items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-womup-purple/30 text-womup-purple shadow-sm flex items-center justify-center">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM CALL TO ACTION: Join Free */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-womup-purple-950 via-womup-purple-800 to-womup-magenta text-white shadow-womup-modal flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300 flex-shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Ready to Experience the WOMUP Model?
              </h4>
              <p className="text-xs sm:text-sm text-purple-100 mt-1 max-w-xl leading-relaxed">
                Complete your free registration in minutes and explore participating merchants and
                Shopping Coin benefits.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              fullWidth
              rightIcon={<ArrowRight className="w-4 h-4 text-slate-950" />}
              onClick={onJoinFreeClick}
              className="shadow-womup-glow-gold text-slate-950 font-bold"
            >
              Join Free
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
