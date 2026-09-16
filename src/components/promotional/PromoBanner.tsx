import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, ShieldAlert } from 'lucide-react'

interface PromoBannerProps {
  onOpenJoinModal?: () => void
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenJoinModal }) => {
  const handleJoinClick = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      const el = document.querySelector('#contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="benefits" className="py-12 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[24px] sm:rounded-[32px] p-6 sm:p-12 lg:p-16 border border-[#E8DDE3] shadow-[0_12px_45px_rgba(5,6,42,0.06)] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFF8FA 0%, #FFD0DD 50%, #D8C9ED 100%)',
          }}
        >
          {/* Subtle Decorative Glow Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC4D1]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8DDE3] text-[#FD849F] text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FD849F]" />
                <span>Featured Promotion</span>
              </div>

              {/* Exact Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#05062A] leading-tight tracking-tight">
                Up To{' '}
                <span className="text-[#FD849F]">
                  ₹2,000
                </span>{' '}
                Shopping Benefit
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#555568] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Make your everyday shopping more valuable with WOMUP.
              </p>

              {/* Highlight Panel: Large ₹2,000 with Gold Coin */}
              <div className="p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] bg-white border border-[#E8DDE3] shadow-[0_8px_30px_rgba(5,6,42,0.06)] flex flex-row items-center gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
                {/* 3D Gold Coin */}
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-[0_0_20px_rgba(253,132,159,0.3)] border-2 border-[#FFC4D1] shrink-0">
                  <img
                    src="/images/gold-coin.jpg"
                    alt="Gold Shopping Coin"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <span className="text-xs uppercase font-extrabold text-[#FD849F] tracking-widest block">
                    Monthly Shopping Benefit
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-inr text-[#FD849F]">
                    ₹2,000
                  </div>
                  <span className="text-xs text-[#555568] block mt-0.5">
                    For eligible purchases at participating stores
                  </span>
                </div>
              </div>

              {/* CTA: Discover WOMUP with pink gradient #FD849F -> #6651BF */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleJoinClick}
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#FD849F] to-[#6651BF] text-white text-base font-bold shadow-[0_4px_22px_rgba(253,132,159,0.4)] hover:shadow-[0_6px_28px_rgba(102,81,191,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 mx-auto lg:mx-0 cursor-pointer"
                >
                  <span>Discover WOMUP</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Small Disclaimer */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#555568] pt-2">
                <ShieldAlert className="w-4 h-4 text-[#FD849F] shrink-0" />
                <span>
                  Promotional example. Actual benefits depend on applicable program terms and eligibility.
                </span>
              </div>
            </div>

            {/* Right Column: Indian Shopping Lifestyle Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-sm sm:max-w-md aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden border-2 border-white shadow-[0_12px_36px_rgba(5,6,42,0.1)] group bg-white"
              >
                <img
                  src="/images/promo-banner-shopper.jpg"
                  alt="Indian shopping lifestyle in mall"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DDE3] flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-[#05062A]">Everyday Shopping Value</span>
                  <span className="text-xs font-extrabold text-[#FD849F]">₹2,000 Benefit</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
