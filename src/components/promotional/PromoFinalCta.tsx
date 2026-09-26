import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
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
    <section className="py-16 sm:py-24 bg-[#FAF7FD] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#0A0724] via-[#1E0F3D] to-[#3B0E57] text-white border border-purple-400/40 shadow-[0_24px_70px_rgba(10,7,36,0.45)] relative overflow-hidden">
          {/* Subtle Radiant Brand Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF1E7A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#7C3AED]/30 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4C1D95_1px,transparent_1px),linear-gradient(to_bottom,#4C1D95_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            {/* Logo */}
            <div className="flex justify-center">
              <BrandLogo size="md" showTagline={false} inverted={true} />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to automate your{' '}
              <span className="bg-gradient-to-r from-[#FF4D94] via-[#F43F5E] via-[#FFB800] to-[#FBBF24] bg-clip-text text-transparent font-extrabold">
                monthly retail savings?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-purple-100/90 max-w-xl mx-auto leading-relaxed">
              Join thousands of smart shoppers. Registration takes less than a minute with zero upfront deposits or credit requirements.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleJoinClick}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#FF1E7A] via-[#E11D48] to-[#7C3AED] hover:from-[#E11D48] hover:to-[#6366F1] text-white text-base font-extrabold shadow-[0_12px_36px_rgba(255,30,122,0.55)] ring-2 ring-white/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Create Free Member Profile</span>
                <ArrowRight className="w-4 h-4 text-pink-100" />
              </motion.button>
            </div>

            {/* Verification Checklist */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-purple-200/95 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Instant Phone Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>No Credit Card Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Up to ₹2,000 / Mo Benefit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
