import React from 'react'
import { motion } from 'framer-motion'

interface PromoForVendorsProps {
  onOpenJoinModal?: () => void
}

const CheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="#FF007A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
  </svg>
)

const bullets = [
  'Get more customers from WOMUP network',
  'Increase daily sales',
  'No extra investment',
  'Easy QR based billing',
  'Timely settlement',
  'Be part of a growing community',
]

const bottomCards = [
  { emoji: '👣', label: 'More Footfall' },
  { emoji: '📈', label: 'Higher Sales' },
  { emoji: '👥', label: 'Trusted Customers' },
  { emoji: '💻', label: 'Digital Business' },
]

export const PromoForVendors: React.FC<PromoForVendorsProps> = ({ onOpenJoinModal }) => {
  const handleAction = () => {
    if (onOpenJoinModal) onOpenJoinModal()
    else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="for-vendors" className="relative py-16 sm:py-24 overflow-hidden bg-vendors">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(7,31,82,0.06) 0%, transparent 70%)', transform: 'translate(20%,20%)' }} />

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
            For Vendors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base font-semibold"
            style={{ color: '#6B7280' }}
          >
            More Customers &bull; Higher Sales &bull; Digital Growth
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-10 max-w-6xl mx-auto">

          {/* LEFT — benefits list */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-4"
            >
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle />
                  <span className="text-sm sm:text-base font-semibold" style={{ color: '#374151' }}>{b}</span>
                </motion.div>
              ))}

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleAction}
                  type="button"
                  className="px-9 py-3.5 rounded-full text-white font-black text-sm cursor-pointer flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 6px 22px rgba(255,0,122,0.38)' }}
                >
                  Register as Vendor <span>›</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Shopkeeper photo */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative w-full max-w-sm"
            >
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/images/vendor_shopkeeper.jpg"
                  alt="WOMUP Vendor"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: 480 }}
                />
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
              className="rounded-2xl p-4 text-center glass border border-slate-100 hover:border-pink-200 transition-all group"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
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
