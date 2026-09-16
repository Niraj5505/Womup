import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  ShoppingBag,
  Coins,
  CheckCircle2,
  Sparkles,
  Info,
  ArrowRight,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox } from '../ui/IconBox.tsx'
import { Button } from '../ui/Button.tsx'

export interface NoInvestmentNoSellingSectionProps {
  onJoinFreeClick?: () => void
}

export const NoInvestmentNoSellingSection: React.FC<NoInvestmentNoSellingSectionProps> = ({
  onJoinFreeClick,
}) => {
  return (
    <section
      id="promotional-highlights"
      className="py-16 lg:py-24 bg-white border-b border-slate-200/80"
    >
      <Container size="lg">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge={
              <Badge variant="purple" size="md" icon={<Sparkles className="w-3.5 h-3.5 text-womup-purple" />}>
                Promotional Highlights
              </Badge>
            }
            title="Promotional Model Highlights"
            description="Key consumer propositions highlighted in the WOMUP promotional literature for everyday shoppers."
            align="left"
            action={
              <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 text-xs font-bold text-womup-purple border border-purple-100">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Barrier Overview</span>
              </div>
            }
          />
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TWO CARDS: No Investment & No Selling */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* CARD 1: NO INVESTMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
          >
            <Card
              variant="default"
              padding="lg"
              className="h-full flex flex-col justify-between border-slate-200 hover:border-womup-purple/40 hover:shadow-womup-card transition-all group"
            >
              <div>
                {/* Header row with badges & icon */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <IconBox color="purple" size="lg" shape="squircle">
                    <Coins className="w-6 h-6 text-womup-purple" />
                  </IconBox>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-purple-100/80 text-womup-purple text-xs font-black tracking-wider uppercase">
                      "NA INVESTMENT"
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Promotional Highlight
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-black text-slate-950 tracking-tight font-display mb-3 flex items-center gap-2">
                  <span>No Investment</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  As presented in the WOMUP promotional material, the platform emphasizes participation without requiring capital investment or upfront financial commitment.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Free account registration model illustrated in promotional guides.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>No mandatory portfolio packages or joining fees described.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Focus on everyday household shopping utility.</span>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Model Feature 01</span>
                <span className="text-[11px] text-slate-400">Promotional Reference</span>
              </div>
            </Card>
          </motion.div>

          {/* CARD 2: NO SELLING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card
              variant="default"
              padding="lg"
              className="h-full flex flex-col justify-between border-slate-200 hover:border-womup-magenta/40 hover:shadow-womup-card transition-all group"
            >
              <div>
                {/* Header row with badges & icon */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <IconBox color="magenta" size="lg" shape="squircle">
                    <ShoppingBag className="w-6 h-6 text-womup-magenta" />
                  </IconBox>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-fuchsia-100/80 text-fuchsia-800 text-xs font-black tracking-wider uppercase">
                      "NA SELLING"
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Promotional Highlight
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-black text-slate-950 tracking-tight font-display mb-3 flex items-center gap-2">
                  <span>No Selling</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  According to the supplied WOMUP promotional material, the ecosystem is built around personal consumer purchases rather than stocking inventory or selling products to customers.
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>No personal merchandise inventory or door-to-door sales required.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Shop directly at participating local merchant stores for daily needs.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Designed for personal and family household consumption.</span>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Model Feature 02</span>
                <span className="text-[11px] text-slate-400">Promotional Reference</span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MANDATORY REGULATORY NOTICE (WORD-FOR-WORD AS SPECIFIED) */}
        {/* ------------------------------------------------------------- */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
          <IconBox color="purple" size="md" shape="squircle" className="flex-shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-womup-purple" />
          </IconBox>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Promotional Material Notice
            </span>

            {/* EXACT TEXT REQUIRED */}
            <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
              "These statements reflect the promotional material provided for this website. Users should review the official WOMUP terms and applicable conditions before joining."
            </p>

            <p className="text-xs text-slate-600 leading-relaxed">
              WOMUP does not guarantee platform performance or individual financial outcomes. Terms of merchant participation, coin redemption limits, and promotional features remain subject to official platform documentation.
            </p>
          </div>
        </div>

        {/* Call to action */}
        {onJoinFreeClick && (
          <div className="mt-8 text-center">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={onJoinFreeClick}
            >
              Explore WOMUP Free
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}
