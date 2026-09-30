import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

interface PromoContactJoinProps {
  onOpenJoinModal?: () => void
}

export const PromoContactJoin: React.FC<PromoContactJoinProps> = () => {
  const [form, setForm] = useState({ name: '', mobile: '', option: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  const joinOptions = [
    { emoji: '👤', title: 'Join as Customer', desc: 'Shop smart & save' },
    { emoji: '🏪', title: 'Register as Vendor', desc: 'Grow your business' },
    { emoji: '📊', title: 'Explore Business Plan', desc: 'Earn referral income' },
  ]

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden bg-contact">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,0,122,0.10) 0%, transparent 70%)', transform: 'translate(-25%,-25%)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,61,230,0.08) 0%, transparent 70%)', transform: 'translate(20%,20%)' }} />

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
            Be a Part of <span style={{ color: '#FF007A' }}>WOMUP</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base font-semibold"
            style={{ color: '#6B7280' }}
          >
            Together for a Smarter, Healthier and Prosperous Community
          </motion.p>
        </div>

        {/* 3 Join option cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {joinOptions.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-5 text-center glass border border-pink-100 group hover:border-pink-300 transition-all cursor-default"
              style={{ boxShadow: '0 4px 16px rgba(255,0,122,0.07)' }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{o.emoji}</div>
              <div className="text-sm font-black mb-0.5" style={{ color: '#0A0E2A' }}>{o.title}</div>
              <div className="text-xs font-semibold" style={{ color: '#6B7280' }}>{o.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Contact form + support info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 max-w-5xl mx-auto">

          {/* LEFT — Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl p-7 sm:p-8 glass border border-pink-100"
              style={{ boxShadow: '0 12px 40px rgba(255,0,122,0.07)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                  <div className="text-5xl">🎉</div>
                  <div className="text-xl font-black" style={{ color: '#0A0E2A' }}>Thank you!</div>
                  <div className="text-sm font-semibold" style={{ color: '#6B7280' }}>We'll get back to you shortly.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text" required placeholder="Your Name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold border-2 outline-none transition-all focus:border-pink-400 bg-white"
                    style={{ borderColor: '#E5E7EB', color: '#0A0E2A' }}
                  />
                  <input
                    type="tel" required placeholder="Mobile Number"
                    value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold border-2 outline-none transition-all focus:border-pink-400 bg-white"
                    style={{ borderColor: '#E5E7EB', color: '#0A0E2A' }}
                  />
                  <select
                    value={form.option} onChange={e => setForm({ ...form, option: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold border-2 outline-none transition-all focus:border-pink-400 bg-white appearance-none"
                    style={{ borderColor: '#E5E7EB', color: form.option ? '#0A0E2A' : '#9CA3AF' }}
                  >
                    <option value="">Select Option: Customer Registration</option>
                    <option value="customer">Customer Registration</option>
                    <option value="vendor">Vendor Registration</option>
                    <option value="income">Income Opportunity</option>
                  </select>
                  <textarea
                    placeholder="Your Message" rows={3}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold border-2 outline-none transition-all focus:border-pink-400 bg-white resize-none"
                    style={{ borderColor: '#E5E7EB', color: '#0A0E2A' }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="w-full py-4 rounded-full text-white font-black text-base cursor-pointer flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 6px 22px rgba(255,0,122,0.38)' }}
                  >
                    Submit ✈
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

          {/* RIGHT — Support info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Support rep card */}
              <div className="rounded-3xl p-5 glass border border-pink-100 flex items-center gap-4" style={{ boxShadow: '0 6px 20px rgba(255,0,122,0.07)' }}>
                <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-md shrink-0">
                  <img src="/images/support_rep.jpg" alt="Support" className="w-full h-full object-cover" onError={e => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="15" r="8" fill="%23fda4c5"/><ellipse cx="20" cy="35" rx="14" ry="8" fill="%23fda4c5"/></svg>' }} />
                </div>
                <div>
                  <div className="text-base font-black" style={{ color: '#0A0E2A' }}>We are here</div>
                  <div className="text-base font-black" style={{ color: '#0A0E2A' }}>to help you!</div>
                </div>
              </div>

              {/* Contact details card */}
              <div className="rounded-3xl p-5 glass border border-pink-100 space-y-4" style={{ boxShadow: '0 6px 20px rgba(255,0,122,0.07)' }}>
                <a href="tel:+919876543210" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ background: 'rgba(255,0,122,0.10)' }}>
                    <Phone className="w-5 h-5" style={{ color: '#FF007A' }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: '#0A0E2A' }}>+91 98765 43210</span>
                </a>
                <a href="mailto:info@womup.in" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform" style={{ background: 'rgba(255,0,122,0.10)' }}>
                    <Mail className="w-5 h-5" style={{ color: '#FF007A' }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: '#0A0E2A' }}>info@womup.in</span>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,0,122,0.10)' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#FF007A' }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: '#0A0E2A' }}>Mahesana, Gujarat, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
