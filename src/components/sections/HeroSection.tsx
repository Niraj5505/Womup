import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Coins,
  ArrowRight,
  ShieldCheck,
  Zap,
  ShoppingBag,
  TrendingUp,
  CheckCircle2,
  PlayCircle,
  Users,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { Button } from '../ui/Button.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox } from '../ui/IconBox.tsx'
import heroImage from '../../assets/images/womup-hero.jpg'

export interface HeroSectionProps {
  onJoinFreeClick?: () => void
  onHowItWorksClick?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onJoinFreeClick,
  onHowItWorksClick,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-6 pb-12 lg:pt-10 lg:pb-16 border-b border-slate-200/80">
      {/* Subtle background ambient glow (kept clean and non-overpowering) */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-b from-purple-100/40 via-fuchsia-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-t from-amber-100/30 via-pink-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ------------------------------------------------------------- */}
          {/* LEFT COLUMN: Headlines, Description, CTA Buttons */}
          {/* ------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline & Promotional Model Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Badge
                variant="purple"
                size="md"
                icon={<Sparkles className="w-3.5 h-3.5 text-womup-purple" />}
              >
                WOMUP Promotional Model
              </Badge>
              <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Empowerment • Shopping • Revolutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
              <span className="block">Bachat bhi aur</span>
              <span className="bg-gradient-to-r from-womup-purple-800 via-womup-magenta to-pink-600 bg-clip-text text-transparent">
                Income bhi.
              </span>
            </h1>

            {/* Secondary Headline */}
            <div className="mt-4 sm:mt-5 flex items-baseline flex-wrap gap-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Har Mahine{' '}
                <span className="text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/80 font-inr inline-block">
                  ₹2,000
                </span>{' '}
                Shopping Coin*
              </span>
            </div>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Shop smarter, save on your everyday purchases, and explore the WOMUP rewards and
              referral model.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={onJoinFreeClick}
                className="shadow-womup-glow-magenta"
              >
                Join Free
              </Button>

              <Button
                variant="secondary"
                size="lg"
                leftIcon={<PlayCircle className="w-4 h-4 text-womup-purple" />}
                onClick={onHowItWorksClick}
              >
                How It Works
              </Button>
            </div>

            {/* Compliance Clarification / Promotional Disclaimer Note */}
            <p className="mt-4 text-[11px] text-slate-500 leading-normal max-w-lg">
              *₹2,000 Shopping Coin represents the promotional rewards and referral incentive model
              highlighted in WOMUP promotional materials. Not a guaranteed salary or fixed income.
              Rewards depend on shopping transactions & active participation.
            </p>

            {/* Social Proof Quick Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-inr">100% Free</span>
                <span className="text-xs text-slate-500 mt-0.5">Zero Joining Fee</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4">
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-inr">₹ Direct UPI</span>
                <span className="text-xs text-slate-500 mt-0.5">Cashback Transfer</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4">
                <span className="text-lg sm:text-xl font-bold text-slate-900 font-inr">450+</span>
                <span className="text-xs text-slate-500 mt-0.5">Partner Brands</span>
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Premium Visual + Floating Animated Cards */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Decorative colored glow backdrop behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-womup-purple/10 via-fuchsia-500/10 to-amber-400/15 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* Main Lifestyle Visual Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-womup-modal border border-slate-200 bg-white"
            >
              <img
                src={heroImage}
                alt="WOMUP shopping and rewards lifestyle"
                className="w-full h-auto object-cover max-h-[500px] lg:max-h-[540px] transform hover:scale-102 transition-transform duration-700"
                loading="eager"
              />

              {/* Gradient overlay at image bottom for text contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-transparent pointer-events-none" />

              {/* In-image lifestyle caption badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold drop-shadow-sm">
                    Live Cashback Active
                  </span>
                </div>
                <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-medium">
                  Verified Merchants
                </span>
              </div>
            </motion.div>

            {/* --------------------------------------------------------- */}
            {/* FLOATING CARD 1: Monthly Shopping Coin Reward (Top Left) */}
            {/* --------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: -15 }}
              animate={{ opacity: 1, y: [0, -8, 0], x: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.25 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute -top-5 -left-4 sm:-top-6 sm:-left-8 z-20"
            >
              <Card
                variant="rewards"
                padding="sm"
                className="w-60 sm:w-64 border-amber-300 shadow-womup-modal backdrop-blur-xl"
              >
                <div className="flex items-start gap-2.5">
                  <IconBox color="gold" size="sm" shape="squircle">
                    <Coins className="w-4 h-4 text-amber-700" />
                  </IconBox>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">
                        Monthly Reward
                      </span>
                      <Badge variant="gold" size="sm">
                        Active
                      </Badge>
                    </div>
                    <p className="text-base sm:text-lg font-black text-slate-950 font-inr leading-snug mt-0.5">
                      ₹2,000 Coins
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      Promotional Shopping Credits
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* --------------------------------------------------------- */}
            {/* FLOATING CARD 2: Bachat + Direct UPI Cashback (Bottom Right) */}
            {/* --------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 15 }}
              animate={{ opacity: 1, y: [0, 8, 0], x: 0 }}
              transition={{
                opacity: { duration: 0.5, delay: 0.35 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }}
              className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 z-20"
            >
              <Card
                variant="default"
                padding="sm"
                className="w-60 sm:w-64 border-slate-200 shadow-womup-modal backdrop-blur-xl"
              >
                <div className="flex items-center gap-2.5">
                  <IconBox color="magenta" size="sm" shape="squircle">
                    <TrendingUp className="w-4 h-4 text-fuchsia-700" />
                  </IconBox>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Instant Benefit
                    </span>
                    <p className="text-sm font-bold text-slate-950 leading-tight">
                      Bachat + Referral Income
                    </p>
                    <div className="flex items-center gap-1 mt-0.5 text-[11px] font-semibold text-emerald-600">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span>Direct UPI Transfer</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* --------------------------------------------------------- */}
            {/* FLOATING MICRO-BADGE: Community Shoppers (Top Right) */}
            {/* --------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute top-1/3 -right-2 sm:-right-4 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-womup-card backdrop-blur-md">
                <Users className="w-3.5 h-3.5 text-womup-purple" />
                <span className="text-xs font-bold text-slate-900">85k+</span>
                <span className="text-[11px] text-slate-500">Shoppers</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* ------------------------------------------------------------- */}
      {/* TRUST / REWARDS STRIP BELOW THE HERO */}
      {/* ------------------------------------------------------------- */}
      <div className="mt-14 pt-6 border-t border-slate-200/70 bg-slate-50/80">
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-2">
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <IconBox color="purple" size="sm" shape="squircle">
                <ShoppingBag className="w-4 h-4 text-purple-700" />
              </IconBox>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  450+ Partner Stores
                </span>
                <span className="text-[11px] text-slate-500">
                  Fashion, Beauty, Grocery & Tech
                </span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <IconBox color="gold" size="sm" shape="squircle">
                <Coins className="w-4 h-4 text-amber-700" />
              </IconBox>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Shopping Coins
                </span>
                <span className="text-[11px] text-slate-500">
                  Promotional Rewards on Every Order
                </span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <IconBox color="magenta" size="sm" shape="squircle">
                <Zap className="w-4 h-4 text-fuchsia-700" />
              </IconBox>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Referral Model
                </span>
                <span className="text-[11px] text-slate-500">
                  Earn Together with Friends
                </span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3">
              <IconBox color="white" size="sm" shape="squircle">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </IconBox>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  100% Trust & Security
                </span>
                <span className="text-[11px] text-slate-500">
                  Free Forever • No Hidden Costs
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
