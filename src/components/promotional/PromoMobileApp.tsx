import React from 'react'
import { motion } from 'framer-motion'

interface PromoMobileAppProps {
  onOpenJoinModal?: () => void
}

const appFeatures = [
  { emoji: '🎁', label: 'Get Monthly Shopping Coin' },
  { emoji: '📍', label: 'Find Nearby Shops' },
  { emoji: '🛒', label: 'Shop & Save' },
  { emoji: '🚚', label: 'Home Delivery (Vegetables)' },
  { emoji: '👥', label: 'Refer & Earn' },
  { emoji: '📦', label: 'Track Orders' },
]

export const PromoMobileApp: React.FC<PromoMobileAppProps> = () => {
  return (
    <section id="download-app" className="relative py-16 sm:py-24 overflow-hidden bg-app">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,0,122,0.09) 0%, transparent 70%)', transform: 'translate(20%,20%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-2"
            style={{ color: '#0A0E2A' }}
          >
            <span style={{ color: '#FF007A' }}>WOMUP</span> Mobile App
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base font-semibold"
            style={{ color: '#6B7280' }}
          >
            Your Smart Shopping &amp; Earning Companion
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT — Phone mockups */}
          <div className="lg:col-span-6 flex justify-center items-end gap-2 sm:gap-4">
            {/* Phone 1 — Login screen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative z-10"
              style={{ filter: 'drop-shadow(0 16px 32px rgba(255,0,122,0.18))' }}
            >
              <div className="w-32 sm:w-40 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl" style={{ aspectRatio: '9/18', background: 'linear-gradient(170deg,#0A0E2A,#673DE6)' }}>
                <div className="p-3 h-full flex flex-col">
                  {/* Notch */}
                  <div className="w-8 h-1.5 bg-white/20 rounded-full mx-auto mb-2" />
                  {/* Logo */}
                  <div className="flex flex-col items-center gap-1 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white font-black text-base">W</div>
                    <div className="text-white font-black text-[9px]">WOMUP</div>
                    <div className="text-white/60 text-[7px]">Empowerment Shopping Earning</div>
                  </div>
                  {/* Form */}
                  <div className="space-y-1.5 mb-2">
                    <div className="bg-white/10 rounded-lg px-2 py-1.5 text-[8px] text-white/60">Mobile Number</div>
                    <div className="bg-white/10 rounded-lg px-2 py-1.5 text-[8px] text-white/60">Password</div>
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg px-2 py-1.5 text-[8px] text-white font-black text-center">Login</div>
                  </div>
                  <div className="text-center text-[7px] text-white/50 mt-auto">Create Account</div>
                </div>
              </div>
            </motion.div>

            {/* Phone 2 — Dashboard (main, taller) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative z-20"
              style={{ filter: 'drop-shadow(0 20px 48px rgba(255,0,122,0.20))' }}
            >
              <div className="w-40 sm:w-52 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl" style={{ aspectRatio: '9/19', background: '#fff' }}>
                <div className="p-3 h-full flex flex-col bg-gray-50">
                  {/* Status bar */}
                  <div className="w-6 h-1.5 bg-gray-200 rounded-full mx-auto mb-2" />
                  {/* User row */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-black" style={{ color: '#FF007A' }}>👤</div>
                    <div>
                      <div className="text-[9px] font-black" style={{ color: '#0A0E2A' }}>Manish Shah</div>
                      <div className="text-[7px]" style={{ color: '#9CA3AF' }}>Mehsana, Gujarat</div>
                    </div>
                  </div>
                  {/* Coin card */}
                  <div className="rounded-xl p-2.5 mb-2.5 text-white" style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)' }}>
                    <div className="text-[8px] font-bold mb-0.5 opacity-90">Shopping Coin</div>
                    <div className="text-xl font-black">₹ 2,000</div>
                    <div className="text-[7px] opacity-70 mt-0.5">Valid this month</div>
                  </div>
                  {/* Quick links */}
                  <div className="grid grid-cols-4 gap-1 mb-2.5">
                    {['🥦','💊','👗','🏪'].map((e, i) => (
                      <div key={i} className="bg-white rounded-lg p-1.5 text-center shadow-sm">
                        <div className="text-xs">{e}</div>
                        <div className="text-[6px] mt-0.5" style={{ color: '#6B7280' }}>Shop</div>
                      </div>
                    ))}
                  </div>
                  {/* Nearby shops label */}
                  <div className="text-[8px] font-black mb-1.5" style={{ color: '#0A0E2A' }}>Nearby Shops</div>
                  <div className="space-y-1 flex-1">
                    {['Ekta Vegetables', 'Drew Pharma Store', 'Jay Medical Store'].map((s, i) => (
                      <div key={i} className="flex items-center gap-1.5 bg-white rounded-lg px-1.5 py-1 shadow-sm">
                        <div className="w-5 h-5 rounded bg-pink-50 flex items-center justify-center text-[9px]">🏪</div>
                        <div>
                          <div className="text-[7px] font-bold" style={{ color: '#0A0E2A' }}>{s}</div>
                          <div className="text-[6px]" style={{ color: '#9CA3AF' }}>{i + 1}.{i + 2} km</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Features list + Download */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-3">
              {appFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 p-3.5 rounded-2xl glass border border-pink-100 group hover:border-pink-300 transition-all"
                  style={{ boxShadow: '0 2px 10px rgba(255,0,122,0.05)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl text-white flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)' }}
                  >
                    {f.emoji}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#374151' }}>{f.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Now label */}
            <div className="text-base font-black" style={{ color: '#0A0E2A' }}>Download Now</div>

            {/* Store badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#download-app"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl cursor-pointer text-white"
                style={{ background: '#000', boxShadow: '0 4px 16px rgba(0,0,0,0.20)' }}
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <span className="text-2xl">▶</span>
                <div>
                  <div className="text-[9px] opacity-70">Get it on</div>
                  <div className="text-sm font-black">Google Play</div>
                </div>
              </motion.a>
              <motion.a
                href="#download-app"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl cursor-pointer text-white"
                style={{ background: '#000', boxShadow: '0 4px 16px rgba(0,0,0,0.20)' }}
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                <span className="text-2xl"></span>
                <div>
                  <div className="text-[9px] opacity-70">Download on the</div>
                  <div className="text-sm font-black">App Store</div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
