import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

interface PromoHeroProps {
  onOpenJoinModal?: () => void
}

// Lucide-style icons matching reference
const GiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
)
const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 9l1-5h16l1 5"/><path d="M3 9a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2"/>
    <path d="M5 22V12"/><path d="M19 22V12"/><path d="M9 22V17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"/>
  </svg>
)
const PercentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
)
const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
)

export const PromoHero: React.FC<PromoHeroProps> = ({ onOpenJoinModal }) => {
  const [videoOpen, setVideoOpen] = useState(false)

  const handleJoin = () => {
    setVideoOpen(false)
    if (onOpenJoinModal) onOpenJoinModal()
    else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden bg-hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Soft ambient glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,182,218,0.35) 0%, transparent 70%)', transform: 'translate(25%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(167,139,250,0.20) 0%, transparent 70%)', transform: 'translate(-25%,25%)' }} />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,100,180,0.10) 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }} />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-14 flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">

          {/* ── LEFT TEXT ── */}
          <div className="text-left space-y-6 lg:pr-6">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-black leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', color: '#0A0E2A' }}
            >
              Smart
              <br />Shopping
              <br />
              <span style={{ color: '#FF007A' }}>Better Living</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-sm sm:text-base font-semibold space-y-0.5"
              style={{ color: '#374151' }}
            >
              <div>Save on Every Purchase</div>
              <div>Earn with Every Connection</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="flex flex-row items-center gap-4"
            >
              {/* Join Now */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleJoin}
                type="button"
                className="px-7 py-3 rounded-full text-white text-sm font-black cursor-pointer"
                style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 6px 22px rgba(255,0,122,0.38)' }}
              >
                Join Now
              </motion.button>

              {/* Watch Video */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setVideoOpen(true)}
                type="button"
                className="flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold cursor-pointer bg-white border-2"
                style={{ borderColor: '#FDA4C5', color: '#0A0E2A', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,0,122,0.10)' }}>
                  <Play className="w-3.5 h-3.5" style={{ color: '#FF007A', fill: '#FF007A' }} />
                </div>
                Watch Video
              </motion.button>
            </motion.div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="relative flex justify-center items-end">
            {/* Pink glow behind */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(255,100,180,0.22) 0%, transparent 65%)' }} />

            {/* Woman image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative z-10 w-full max-w-[430px] sm:max-w-[500px]"
            >
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: '0 16px 48px rgba(255,0,122,0.14), 0 4px 16px rgba(0,0,0,0.08)' }}>
                <img
                  src="/images/hero_woman_grocery.jpg"
                  alt="Smart Shopping with WOMUP"
                  className="w-full h-auto object-cover"
                  style={{ display: 'block', maxHeight: 520 }}
                />
              </div>
            </motion.div>

            {/* Save / Shop / Earn vertical pills */}
            <div className="absolute right-0 top-6 flex flex-col gap-2.5 z-20" style={{ right: '-8px' }}>
              {[
                { label: 'Save', bg: 'linear-gradient(135deg,#FF007A,#c7005f)' },
                { label: 'Shop', bg: 'linear-gradient(135deg,#7C3AED,#5b21b6)' },
                { label: 'Earn', bg: 'linear-gradient(135deg,#1E40AF,#1e3a8a)' },
              ].map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="px-5 py-2.5 rounded-2xl text-white font-black text-sm text-center shadow-lg"
                  style={{ background: b.bg, minWidth: 68 }}
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4 Bottom Value Tiles ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-12 rounded-3xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 8px 32px rgba(0,0,0,0.07)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { Icon: GiftIcon, label: 'Monthly', sub: 'Shopping Coin', iconBg: 'linear-gradient(135deg,#FF007A,#c7005f)' },
              { Icon: StoreIcon, label: 'Wide', sub: 'Shop Network', iconBg: 'linear-gradient(135deg,#7C3AED,#5b21b6)' },
              { Icon: PercentIcon, label: 'Real Savings', sub: 'on Purchases', iconBg: 'linear-gradient(135deg,#06b6d4,#0284c7)' },
              { Icon: TrendingUpIcon, label: 'Income', sub: 'Opportunity', iconBg: 'linear-gradient(135deg,#F59E0B,#d97706)' },
            ].map(({ Icon, label, sub, iconBg }, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-4 py-5 sm:py-6 group hover:bg-pink-50/30 transition-colors"
                style={{ borderRight: i < 3 ? '1px solid rgba(0,0,0,0.05)' : 'none', borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}
              >
                <div
                  className="w-11 h-11 rounded-2xl text-white flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform shadow"
                  style={{ background: iconBg }}
                >
                  <Icon />
                </div>
                <div className="text-xs sm:text-sm font-black leading-tight" style={{ color: '#0A0E2A' }}>{label}</div>
                <div className="text-[11px] font-semibold" style={{ color: '#6B7280' }}>{sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 shadow-2xl"
            >
              <button type="button" onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 cursor-pointer"><X className="w-5 h-5 text-slate-500" /></button>
              <h3 className="text-xl font-black mb-4" style={{ color: '#0A0E2A' }}>How WOMUP Works</h3>
              <div className="aspect-video rounded-2xl flex flex-col items-center justify-center text-white gap-4" style={{ background: 'linear-gradient(135deg,#0A0E2A 0%,#7C3AED 60%,#FF007A 100%)' }}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <div className="text-lg font-black text-center px-4">WOMUP — Smart Shopping &amp; Earning System</div>
              </div>
              <button type="button" onClick={handleJoin} className="mt-4 w-full py-3 rounded-full text-white font-black cursor-pointer" style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)' }}>Join WOMUP Today</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
