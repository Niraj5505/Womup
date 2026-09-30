import React from 'react'
import { motion } from 'framer-motion'

interface PromoHowItWorksProps {
  onOpenJoinModal?: () => void
}

export const PromoHowItWorks: React.FC<PromoHowItWorksProps> = ({ onOpenJoinModal }) => {
  const handleJoin = () => {
    if (onOpenJoinModal) onOpenJoinModal()
    else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const steps = [
    { n: '1', title: 'Join', desc: 'Register on WOMUP App', color: '#FF007A' },
    { n: '2', title: 'Get Coins', desc: 'Receive ₹2,000 Shopping Coin every month', color: '#FF007A' },
    { n: '3', title: 'Shop', desc: 'Use coins + Pay balance amount at nearby shops', color: '#FF007A' },
    { n: '4', title: 'Earn', desc: 'Refer others & earn income up to 7 levels', color: '#FF007A' },
  ]

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 overflow-hidden bg-how">
      {/* Top border glow */}
      <div className="section-divider mb-0 absolute top-0 left-0 right-0" />

      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,0,122,0.07) 0%, transparent 70%)', transform: 'translate(30%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,61,230,0.06) 0%, transparent 70%)', transform: 'translate(-20%,20%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-3"
            style={{ color: '#0A0E2A' }}
          >
            How <span style={{ color: '#FF007A' }}>WOMUP</span> Works?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base font-semibold max-w-lg mx-auto"
            style={{ color: '#6B7280' }}
          >
            A simple platform connecting Customers and Local Vendors for Smart Shopping and Earning Opportunities.
          </motion.p>
        </div>

        {/* Diagram: Customer ↔ WOMUP ↔ Vendor */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-14">

          {/* Customer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl"
              style={{ boxShadow: '0 8px 32px rgba(255,0,122,0.25)' }}
            >
              <img src="/images/customer_man_avatar.jpg" alt="Customer" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 text-base font-black" style={{ color: '#0A0E2A' }}>Customer</div>
            <div className="text-sm font-semibold" style={{ color: '#FF007A' }}>Shop &amp; Save</div>
          </motion.div>

          {/* Arrows + WOMUP center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
            style={{ width: 180, height: 180 }}
          >
            {/* Circular arrows SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 180 180" fill="none">
              {/* top arc pink */}
              <path d="M 30,90 A 60,60 0 0,1 150,90" stroke="#FF007A" strokeWidth="5" strokeLinecap="round" fill="none" />
              <polygon points="150,80 164,90 150,100" fill="#FF007A" />
              {/* bottom arc navy */}
              <path d="M 150,90 A 60,60 0 0,1 30,90" stroke="#0A0E2A" strokeWidth="5" strokeLinecap="round" fill="none" />
              <polygon points="30,100 16,90 30,80" fill="#0A0E2A" />
            </svg>
            {/* WOMUP center */}
            <div
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center z-10 shadow-lg"
              style={{ border: '2px solid rgba(255,0,122,0.15)' }}
            >
              <img src="/images/womup-logo.png" alt="WOMUP" className="w-12 h-auto object-contain" onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
              <span className="text-xs font-black" style={{ color: '#FF007A', display: 'none' }}>W</span>
            </div>
          </motion.div>

          {/* Vendor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl"
              style={{ boxShadow: '0 8px 32px rgba(7,31,82,0.18)' }}
            >
              <img src="/images/vendor_stall_avatar.jpg" alt="Vendor" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 text-base font-black" style={{ color: '#0A0E2A' }}>Vendor</div>
            <div className="text-sm font-semibold" style={{ color: '#0A0E2A' }}>Grow Business</div>
          </motion.div>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl p-5 text-center glass border border-pink-100"
              style={{ boxShadow: '0 4px 16px rgba(255,0,122,0.06)' }}
            >
              <div
                className="w-9 h-9 rounded-full text-white font-black text-base flex items-center justify-center mx-auto mb-3"
                style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 3px 10px rgba(255,0,122,0.35)' }}
              >
                {s.n}
              </div>
              <div className="text-sm font-black mb-1" style={{ color: '#0A0E2A' }}>{s.title}</div>
              <div className="text-[11px] font-semibold leading-snug" style={{ color: '#6B7280' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleJoin}
            type="button"
            className="px-10 py-3.5 rounded-full text-white text-base font-black cursor-pointer"
            style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 6px 22px rgba(255,0,122,0.38)' }}
          >
            Join Now
          </motion.button>
        </div>
      </div>
    </section>
  )
}
