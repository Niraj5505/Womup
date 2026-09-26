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
    <section className="py-16 sm:py-24 bg-[#FAFAFC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#05062A] via-[#181146] to-[#2B0E4C] text-white border border-purple-500/30 shadow-[0_24px_60px_rgba(5,6,42,0.3)] relative overflow-hidden">
          {/* Subtle Radiant Brand Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FD849F]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#6651BF]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#332266_1px,transparent_1px),linear-gradient(to_bottom,#332266_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-25" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            {/* Logo */}
            <div className="flex justify-center">
              <BrandLogo size="md" showTagline={false} inverted={true} />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to automate your{' '}
              <span className="bg-gradient-to-r from-[#FD849F] via-[#ff7f9b] to-[#F59E0B] bg-clip-text text-transparent font-extrabold">
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleJoinClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FD849F] hover:bg-[#ff6f90] text-white text-sm font-extrabold shadow-[0_10px_30px_rgba(253,132,159,0.48)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Create Free Member Profile</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </motion.button>
            </div>

            {/* Verification Checklist */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-purple-200/90 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Instant Phone Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>No Credit Card Needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Up to ₹2,000 / Mo Benefit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
