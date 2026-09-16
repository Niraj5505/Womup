import React from 'react'
import { motion } from 'framer-motion'
import { Users, ArrowDown, ShieldAlert, TrendingUp } from 'lucide-react'

export const PromoReferralSection: React.FC = () => {
  return (
    <section
      id="referral"
      className="py-12 sm:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF8FA 0%, #FFD0DD 40%, #D8C9ED 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-white border border-[#E8DDE3] text-[#FD849F] text-xs font-extrabold uppercase tracking-wider inline-block mb-3 shadow-xs">
            Community & Referral Concept
          </span>
          {/* Exact Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05062A] tracking-tight">
            Refer.{' '}
            <span className="text-[#FD849F]">
              Connect.
            </span>{' '}
            Grow.
          </h2>
          {/* Exact Text */}
          <p className="mt-4 text-base sm:text-lg text-[#555568] leading-relaxed max-w-2xl mx-auto">
            WOMUP also presents opportunities connected with referrals and qualifying activity within its program structure.
          </p>
        </div>

        {/* Top Grid: Community Network Image + Visual Network Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
          {/* Left: Community Network Visual Photography */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg aspect-[4/3] rounded-[28px] overflow-hidden border-2 border-white shadow-[0_12px_36px_rgba(5,6,42,0.08)] group bg-white"
            >
              <img
                src="/images/community-network.jpg"
                alt="WOMUP Community Network of Indian Shoppers"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8DDE3] flex items-center justify-between shadow-sm">
                <span className="text-xs font-bold text-[#05062A]">Community Connection</span>
                <span className="text-xs font-extrabold text-[#FD849F]">Multi-Tier Sharing</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Network Diagram (YOU -> LEVEL 1 -> LEVEL 2 -> LEVEL 3) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-[24px] sm:rounded-[28px] bg-white border border-[#E8DDE3] shadow-[0_10px_35px_rgba(5,6,42,0.06)] relative overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#555568] block mb-1">
                Illustrative Referral Flow
              </span>
              <h4 className="text-lg font-bold text-[#05062A]">
                Multi-Level Community Structure
              </h4>
            </div>

            <div className="flex flex-col items-center space-y-3 relative">
              {/* YOU Node with #FD849F / #6651BF gradient */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[#FD849F] via-[#6651BF] to-[#3048C8] text-white font-extrabold text-sm shadow-[0_4px_20px_rgba(253,132,159,0.35)] flex items-center gap-2.5 z-10"
              >
                <Users className="w-4 h-4 text-white" />
                <span>YOU</span>
              </motion.div>

              {/* Connector 1 */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-5 bg-[#FD849F]" />
                <ArrowDown className="w-4 h-4 text-[#FD849F] -mt-1" />
              </div>

              {/* LEVEL 1 Node */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-xs px-6 py-2.5 rounded-xl bg-[#FFF8FA] border-2 border-[#FFC4D1] text-[#05062A] text-center shadow-xs z-10"
              >
                <span className="text-[10px] uppercase font-bold text-[#FD849F] block tracking-wider">
                  Direct Connections
                </span>
                <span className="text-sm font-black text-[#05062A]">LEVEL 1</span>
              </motion.div>

              {/* Connector 2 */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-5 bg-[#6651BF]" />
                <ArrowDown className="w-4 h-4 text-[#6651BF] -mt-1" />
              </div>

              {/* LEVEL 2 Node */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-xs px-6 py-2.5 rounded-xl bg-[#FFF8FA] border-2 border-[#D8C9ED] text-[#05062A] text-center shadow-xs z-10"
              >
                <span className="text-[10px] uppercase font-bold text-[#6651BF] block tracking-wider">
                  Secondary Network
                </span>
                <span className="text-sm font-black text-[#05062A]">LEVEL 2</span>
              </motion.div>

              {/* Connector 3 */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-5 bg-[#3048C8]" />
                <ArrowDown className="w-4 h-4 text-[#3048C8] -mt-1" />
              </div>

              {/* LEVEL 3 Node */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-xs px-6 py-2.5 rounded-xl bg-[#FFF8FA] border-2 border-[#E8DDE3] text-[#05062A] text-center shadow-xs z-10"
              >
                <span className="text-[10px] uppercase font-bold text-[#3048C8] block tracking-wider">
                  Extended Community
                </span>
                <span className="text-sm font-black text-[#05062A]">LEVEL 3</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Additional Earning Opportunities Card in White with Pink Accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-[28px] bg-white border border-[#E8DDE3] p-8 sm:p-12 text-center shadow-[0_10px_40px_rgba(5,6,42,0.06)] relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8FA] border border-[#FFC4D1] text-xs font-bold text-[#FD849F] mb-5 shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#FD849F]" />
            <span>Additional Earning Opportunities</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#05062A] mb-2">
            Additional Earning Opportunities
          </h3>

          <div className="text-4xl sm:text-6xl md:text-7xl font-black font-inr text-[#FD849F] tracking-tight my-4">
            ₹50,000 — ₹5,00,000
          </div>

          {/* Exact Label */}
          <div className="text-xs sm:text-sm font-extrabold text-[#05062A] uppercase tracking-widest">
            Illustrative Promotional Range
          </div>

          {/* Non-Guaranteed Notice */}
          <div className="mt-8 p-4 rounded-2xl bg-[#FFF8FA] border border-[#E8DDE3] flex items-start sm:items-center gap-3 text-xs text-[#555568] text-left">
            <ShieldAlert className="w-5 h-5 text-[#FD849F] shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-[#05062A] font-semibold">Important Notice:</strong> Income figures shown are promotional examples and are not guaranteed. Actual earnings depend on applicable terms, eligibility and qualifying activity. WOMUP does not make any income guarantee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
