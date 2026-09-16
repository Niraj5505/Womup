import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UserCheck,
  Users,
  Network,
  Award,
  Crown,
  Sparkles,
  Trophy,
  ChevronDown,
  ShieldCheck,
  GitCommit,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox, type IconBoxColor } from '../ui/IconBox.tsx'

interface TeamLevel {
  level: string
  levelNum: number
  teamSize: string
  icon: React.ComponentType<{ className?: string }>
  color: IconBoxColor
  tierName: string
  details: string
}

const teamLevels: TeamLevel[] = [
  {
    level: '1st Level',
    levelNum: 1,
    teamSize: '30 people',
    icon: UserCheck,
    color: 'purple',
    tierName: 'Direct Foundation',
    details: 'Direct referral connections introduced to the WOMUP shopping platform.',
  },
  {
    level: '2nd Level',
    levelNum: 2,
    teamSize: '500 people',
    icon: Users,
    color: 'magenta',
    tierName: 'Community Circle',
    details: 'Secondary circle of shoppers participating in everyday category purchases.',
  },
  {
    level: '3rd Level',
    levelNum: 3,
    teamSize: '2,000 people',
    icon: Network,
    color: 'pink',
    tierName: 'Expansion Tier',
    details: 'Third-tier community network shopping across participating merchant categories.',
  },
  {
    level: '4th Level',
    levelNum: 4,
    teamSize: '5,000 people',
    icon: Award,
    color: 'gold',
    tierName: 'Regional Cluster',
    details: 'Regional shopper participation scale illustrated in promotional materials.',
  },
  {
    level: '5th Level',
    levelNum: 5,
    teamSize: '25,000 people',
    icon: Crown,
    color: 'purple',
    tierName: 'State Network',
    details: 'Wide-reach community tier active across merchant categories.',
  },
  {
    level: '6th Level',
    levelNum: 6,
    teamSize: '1,00,000 people',
    icon: Sparkles,
    color: 'magenta',
    tierName: 'National Scale',
    details: 'Large-scale consumer participation footprint as described in promotional model.',
  },
  {
    level: '7th Level',
    levelNum: 7,
    teamSize: '1,00,000 people',
    icon: Trophy,
    color: 'gold',
    tierName: 'Leadership Tier',
    details: 'Upper-tier team structure depicted in WOMUP promotional materials.',
  },
]

export const TeamStructureSection: React.FC = () => {
  // Expand/collapse state for individual level items
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1)

  const toggleLevel = (num: number) => {
    setExpandedLevel((prev) => (prev === num ? null : num))
  }

  return (
    <section id="partners" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <Container size="lg">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge={
              <Badge variant="purple" size="md" icon={<Network className="w-3.5 h-3.5 text-womup-purple" />}>
                Promotional Team Hierarchy
              </Badge>
            }
            title="WOMUP Team Structure"
            description="Visual hierarchy of the 7 network levels and team sizes presented in the WOMUP promotional material."
            align="left"
            action={
              <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                <GitCommit className="w-4 h-4 text-womup-purple" />
                <span>7 Tier Architecture</span>
              </div>
            }
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP VIEW: Diagonal / Horizontal Connected Network Path */}
        {/* ------------------------------------------------------------- */}
        <div className="hidden lg:block mb-12">
          <div className="p-8 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-xs relative overflow-hidden">
            {/* Top network level tracker banner */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Network Progression Ladder (Level 1 → Level 7)
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Click any level to expand/collapse details
              </span>
            </div>

            {/* Stepper Network Node Strip */}
            <div className="grid grid-cols-7 gap-3 items-stretch relative">
              {teamLevels.map((item) => {
                const Icon = item.icon
                const isExpanded = expandedLevel === item.levelNum
                return (
                  <motion.div
                    key={item.levelNum}
                    whileHover={{ y: -3 }}
                    onClick={() => toggleLevel(item.levelNum)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 border flex flex-col justify-between ${
                      isExpanded
                        ? 'bg-white border-womup-purple shadow-womup-card ring-2 ring-womup-purple/15'
                        : 'bg-white/75 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div>
                      {/* Level Badge */}
                      <div className="flex items-center justify-between gap-1 mb-3">
                        <span className="text-[11px] font-black uppercase text-slate-500">
                          {item.level}
                        </span>
                        <IconBox color={item.color} size="sm" shape="squircle">
                          <Icon className="w-3.5 h-3.5" />
                        </IconBox>
                      </div>

                      {/* Team Size Number */}
                      <p className="text-base xl:text-lg font-black text-slate-950 leading-tight">
                        {item.teamSize}
                      </p>

                      <span className="text-[11px] font-semibold text-womup-purple mt-1 block">
                        {item.tierName}
                      </span>
                    </div>

                    {/* Bottom Status Dot */}
                    <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Lvl {item.levelNum}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-180 text-womup-purple' : ''
                        }`}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Expanded Detail Panel for Desktop */}
            <AnimatePresence mode="wait">
              {expandedLevel !== null && (
                <motion.div
                  key={expandedLevel}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 pt-6 border-t border-slate-200"
                >
                  {(() => {
                    const current =
                      teamLevels.find((l) => l.levelNum === expandedLevel) || teamLevels[0]
                    const Icon = current.icon
                    return (
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-6 shadow-xs">
                        <div className="flex items-center gap-4">
                          <IconBox color={current.color} size="lg" shape="squircle">
                            <Icon className="w-6 h-6" />
                          </IconBox>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                {current.level} Focus
                              </span>
                              <Badge variant="purple" size="sm">
                                {current.tierName}
                              </Badge>
                            </div>
                            <h4 className="text-xl font-black text-slate-950 mt-0.5">
                              Team Size: {current.teamSize}
                            </h4>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-2xl">
                              {current.details}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setExpandedLevel(null)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                          Collapse
                        </button>
                      </div>
                    )
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE VIEW: Vertical Expandable Level Cards */}
        {/* ------------------------------------------------------------- */}
        <div className="block lg:hidden space-y-3 mb-10">
          {teamLevels.map((item) => {
            const Icon = item.icon
            const isExpanded = expandedLevel === item.levelNum
            return (
              <Card
                key={item.levelNum}
                variant="default"
                padding="sm"
                className={`transition-all border ${
                  isExpanded
                    ? 'border-womup-purple shadow-sm bg-purple-50/20'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Header (Always Visible & Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleLevel(item.levelNum)}
                  className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <IconBox color={item.color} size="md" shape="squircle">
                      <Icon className="w-5 h-5" />
                    </IconBox>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                          {item.level}
                        </span>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-semibold">
                          {item.tierName}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-950 font-inr">
                        {item.teamSize}
                      </h4>
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg text-slate-400">
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform ${
                        isExpanded ? 'rotate-180 text-womup-purple' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expandable Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                        <p>{item.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            )
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COMPLIANCE NOTE */}
        {/* ------------------------------------------------------------- */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-100/90 border border-slate-200 flex items-start gap-3.5 text-xs text-slate-700 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              "Team structure shown according to the supplied WOMUP promotional material."
            </h4>
            <p className="text-slate-600">
              The level hierarchy and team size figures (1st Level: 30, 2nd Level: 500, 3rd Level: 2,000,
              4th Level: 5,000, 5th Level: 25,000, 6th Level: 1,00,000, 7th Level: 1,00,000) are purely
              structural tiers depicted in WOMUP promotional materials. No income calculation, revenue projection,
              or earning promise is made or implied from these network counts.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
