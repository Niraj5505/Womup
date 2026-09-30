import React from 'react'
import { motion } from 'framer-motion'

interface PromoForCustomersProps {
  onOpenJoinModal?: () => void
}

// SVG Icons matching reference
const CheckCircle = ({ color = '#FF007A' }) => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
  </svg>
)

const bulletData = [
  { text: 'Use up to 10-15% coin on every purchase' },
  { text: 'Shop at nearby trusted local stores' },
  { text: 'Get home delivery (for vegetables)' },
  { text: 'Refer others and earn income' },
]

const bottomCards = [
  { emoji: '💳', label: 'Real Savings' },
  { emoji: '🏪', label: 'Local Shops' },
  { emoji: '🛍️', label: 'Wide Variety' },
  { emoji: '📱', label: 'Easy Pay' },
]

export const PromoForCustomers: React.FC<PromoForCustomersProps> = ({ onOpenJoinModal }) => {
  const handleStart = () => {
    if (onOpenJoinModal) onOpenJoinModal()
    else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="for-customers" className="relative py-16 sm:py-24 overflow-hidden bg-customers">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,0,122,0.09) 0%, transparent 70%)', transform: 'translate(25%,-20%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-2"
            style={{ color: '#FF007A' }}
          >
            For Customers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base font-semibold"
            style={{ color: '#6B7280' }}
          >
            Shop Smart &bull; Save Money &bull; Earn Income
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-10 max-w-6xl mx-auto">

          {/* LEFT — Woman photo */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative w-full max-w-sm"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,0,122,0.20) 0%, transparent 70%)' }} />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/images/customer_woman_pointing.jpg"
                  alt="WOMUP Customer"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: 500 }}
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Benefit card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl p-7 sm:p-8 glass border border-pink-100"
              style={{ boxShadow: '0 12px 40px rgba(255,0,122,0.08)' }}
            >
              {/* ₹2,000 coin header */}
              <div className="flex items-center gap-5 pb-6 mb-6" style={{ borderBottom: '1.5px solid rgba(255,0,122,0.10)' }}>
                <div
                  className="w-20 h-20 rounded-3xl text-white flex items-center justify-center text-3xl shrink-0 shadow-lg"
                  style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 8px 24px rgba(255,0,122,0.38)' }}
                >
                  🎁
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: '#9CA3AF' }}>Get</div>
                  <div className="text-4xl font-black leading-none" style={{ color: '#FF007A' }}>₹2,000</div>
                  <div className="text-base font-bold" style={{ color: '#0A0E2A' }}>
                    Shopping Coin <span className="font-medium text-sm" style={{ color: '#374151' }}>every month</span>
                  </div>
                </div>
              </div>

              {/* Bullet list */}
              <div className="space-y-4 mb-7">
                {bulletData.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle color="#FF007A" />
                    <span className="text-sm sm:text-base font-semibold" style={{ color: '#374151' }}>{b.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleStart}
                  type="button"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-black text-sm cursor-pointer"
                  style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 6px 22px rgba(255,0,122,0.38)' }}
                >
                  Start Shopping Now →
                </motion.button>
                {/* Grocery cart image */}
                <div className="w-28 h-auto shrink-0">
                  <img src="/images/vegetable_cart.jpg" alt="Grocery" className="w-full h-auto object-contain drop-shadow-lg" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4 Bottom cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {bottomCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl p-4 text-center glass border border-pink-100 hover:border-pink-300 transition-all group"
              style={{ boxShadow: '0 2px 12px rgba(255,0,122,0.05)' }}
            >
              <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">{c.emoji}</div>
              <div className="text-xs font-black" style={{ color: '#0A0E2A' }}>{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
