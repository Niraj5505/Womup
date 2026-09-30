import React from 'react'
import { motion } from 'framer-motion'

interface PromoIncomeOpportunityProps {
  onOpenJoinModal?: () => void
}

const bottomCards = [
  { emoji: '🌐', label: '7 Level Referral Income' },
  { emoji: '💰', label: 'No Investment Required' },
  { emoji: '🛒', label: 'Only Real Purchases' },
  { emoji: '📊', label: 'Long Term Income' },
]

// Bar chart matching reference — 5 bars increasing from left to right
const BarChart = () => (
  <div className="flex items-end justify-center gap-2 h-48 sm:h-60">
    {[30, 45, 60, 75, 100].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
        className="w-10 sm:w-14 rounded-t-xl relative"
        style={{
          background: i < 4
            ? 'linear-gradient(180deg, rgba(255,0,122,0.3) 0%, rgba(255,0,122,0.15) 100%)'
            : 'linear-gradient(180deg, #FF007A 0%, #c7005f 100%)',
          alignSelf: 'flex-end',
        }}
      />
    ))}
    {/* Arrow overlay */}
  </div>
)

export const PromoIncomeOpportunity: React.FC<PromoIncomeOpportunityProps> = ({ onOpenJoinModal }) => {
  const handleKnowMore = () => {
    if (onOpenJoinModal) onOpenJoinModal()
    else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="income" className="relative py-16 sm:py-24 overflow-hidden bg-income">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,0,122,0.09) 0%, transparent 70%)', transform: 'translate(25%,-25%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-2"
            style={{ color: '#0A0E2A' }}
          >
            Income <span style={{ color: '#FF007A' }}>O</span>pportunity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base font-semibold"
            style={{ color: '#6B7280' }}
          >
            Shop &bull; Refer &bull; Earn
          </motion.p>
        </div>

        {/* Main content card */}
        <div className="max-w-5xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 sm:p-10 glass border border-pink-100"
            style={{ boxShadow: '0 12px 40px rgba(255,0,122,0.08)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* LEFT text */}
              <div>
                <p className="text-base font-semibold mb-4" style={{ color: '#374151' }}>
                  By simply shopping and referring others
                </p>
                <div>
                  <div className="text-base font-bold mb-1" style={{ color: '#374151' }}>Earn</div>
                  <div className="font-black leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FF007A' }}>
                    ₹30,000 to<br />₹3,00,000
                  </div>
                  <div className="text-xl font-black mt-1" style={{ color: '#0A0E2A' }}>per month</div>
                </div>
              </div>

              {/* RIGHT bar chart with arrow */}
              <div className="relative">
                {/* Upward arrow overlay */}
                <div className="absolute right-4 top-0 z-10">
                  <svg viewBox="0 0 60 120" className="w-10 h-24" fill="none">
                    <defs>
                      <linearGradient id="arrowGrad" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#FF007A" />
                        <stop offset="100%" stopColor="#FF6EC7" />
                      </linearGradient>
                    </defs>
                    <path d="M 30,110 L 30,15 L 15,30 M 30,15 L 45,30" stroke="url(#arrowGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <BarChart />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Bottom cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {bottomCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl p-4 sm:p-5 text-center glass border border-pink-100 group hover:border-pink-300 transition-all"
              style={{ boxShadow: '0 2px 12px rgba(255,0,122,0.05)' }}
            >
              <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">{c.emoji}</div>
              <div className="text-[11px] sm:text-xs font-black leading-snug" style={{ color: '#0A0E2A' }}>{c.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Know More CTA */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleKnowMore}
            type="button"
            className="px-10 py-3.5 rounded-full text-white font-black text-base cursor-pointer"
            style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 6px 22px rgba(255,0,122,0.38)' }}
          >
            Know More
          </motion.button>
        </div>
      </div>
    </section>
  )
}
