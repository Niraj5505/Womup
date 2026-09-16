import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ShoppingBag } from 'lucide-react'
import { BrandLogo } from '../common/BrandLogo.tsx'

interface PromoFinalCtaProps {
  onOpenJoinModal?: () => void
}

export const PromoFinalCta: React.FC<PromoFinalCtaProps> = ({ onOpenJoinModal }) => {
  const handleJoinClick = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      const el = document.querySelector('#contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 sm:py-28 bg-[#FFF8FA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] p-8 sm:p-12 lg:p-16 border-2 border-white shadow-[0_16px_50px_rgba(5,6,42,0.08)] relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFD0DD 0%, #FFC4D1 45%, #D8C9ED 100%)',
          }}
        >
          {/* Subtle Ambient Reflections */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* WOMUP Logo Header */}
              <div className="flex justify-center lg:justify-start">
                <BrandLogo size="md" showTagline={false} inverted={false} />
              </div>

              {/* Badges / Graphic Row: Shopping bags, Gold Coin, ₹ symbols */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8DDE3] flex items-center justify-center text-[#FD849F] shadow-xs">
                  <ShoppingBag className="w-5 h-5" />
                </div>

                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <img
                    src="/images/gold-coin.jpg"
                    alt="Gold Coin"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8DDE3] flex items-center justify-center font-black font-inr text-lg text-[#6651BF] shadow-xs">
                  ₹
                </div>
              </div>

              {/* Exact Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05062A] tracking-tight leading-tight max-w-xl">
                Make Every Purchase{' '}
                <span className="text-[#FD849F]">
                  More Valuable.
                </span>
              </h2>

              {/* Exact Text */}
              <p className="text-base sm:text-lg text-[#555568] max-w-lg leading-relaxed">
                Explore WOMUP and discover a new approach to shopping, savings and rewards.
              </p>

              {/* Button: "Join WOMUP" */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleJoinClick}
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#FD849F] text-white text-base font-bold shadow-[0_4px_22px_rgba(253,132,159,0.4)] hover:shadow-[0_6px_28px_rgba(253,132,159,0.55)] hover:bg-[#6651BF] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 mx-auto lg:mx-0 cursor-pointer"
                >
                  <span>Join WOMUP</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Large WOMUP Promotional Image */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-sm aspect-[4/3] rounded-[28px] overflow-hidden border-2 border-white shadow-[0_12px_36px_rgba(5,6,42,0.12)] bg-white group"
              >
                <img
                  src="/images/hero-shopper.jpg"
                  alt="WOMUP Promotional Shopping"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DDE3] flex items-center justify-between shadow-xs">
                  <span className="text-xs font-bold text-[#05062A]">Smart Shopping Rewards</span>
                  <Sparkles className="w-4 h-4 text-[#FD849F]" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
