import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, MessageCircle, Phone, User, MapPin, Mail } from 'lucide-react'

export const PromoLeadForm: React.FC = () => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !mobile.trim() || !city.trim()) {
      setError('Please fill in your name, mobile number, and city.')
      return
    }

    if (mobile.replace(/\D/g, '').length < 10) {
      setError('Please provide a valid 10-digit mobile number.')
      return
    }

    setError('')
    setIsSubmitted(true)
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello! I would like to learn more about the WOMUP smart shopping and community benefits ecosystem.'
    )
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#05062A] relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6651BF]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0C0D35] rounded-[28px] border border-[#292A52] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle glow inside */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD849F]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
              Direct Enquiry & Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Get In Touch With <span className="text-[#FD849F]">WOMUP</span>
            </h2>
            <p className="mt-3 text-sm text-[#D8D8E8] leading-relaxed">
              Submit your enquiry below or connect directly with our support team on WhatsApp.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#171843] border border-[#4ADE80]/30 text-center space-y-4 max-w-md mx-auto"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#4ADE80]/15 text-[#4ADE80] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <CheckCircle2 className="w-10 h-10 text-[#4ADE80]" />
              </div>
              <h3 className="text-2xl font-black text-white">
                Enquiry Submitted!
              </h3>
              <p className="text-sm font-semibold text-[#4ADE80] leading-relaxed">
                Thank you for your interest in WOMUP.
              </p>
              <p className="text-xs text-[#D8D8E8] leading-relaxed">
                Your enquiry has been successfully recorded. A representative will get in touch with you shortly with comprehensive onboarding information.
              </p>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false)
                  setName('')
                  setMobile('')
                  setEmail('')
                  setCity('')
                  setMessage('')
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#FD849F] hover:bg-[#6651BF] text-white text-xs font-bold transition-colors duration-200 cursor-pointer"
              >
                Submit Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              {error && (
                <div className="p-3.5 rounded-xl bg-[#FB7185]/15 border border-[#FB7185]/40 text-[#FB7185] text-xs font-semibold">
                  {error}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#D8D8E8] block mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#D8C9ED] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171843] border border-[#292A52] text-sm text-white placeholder-[#D8C9ED]/40 focus:bg-[#0C0D35] focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Mobile & City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#D8D8E8] block mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#D8C9ED] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="e.g. 9876543210"
                      maxLength={10}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171843] border border-[#292A52] text-sm text-white placeholder-[#D8C9ED]/40 focus:bg-[#0C0D35] focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#D8D8E8] block mb-1.5">
                    City *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#D8C9ED] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Pune, Mumbai"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171843] border border-[#292A52] text-sm text-white placeholder-[#D8C9ED]/40 focus:bg-[#0C0D35] focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#D8D8E8] block mb-1.5">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#D8C9ED] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#171843] border border-[#292A52] text-sm text-white placeholder-[#D8C9ED]/40 focus:bg-[#0C0D35] focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#D8D8E8] block mb-1.5">
                  Message or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specific questions or merchant inquiries..."
                  className="w-full p-3.5 rounded-xl bg-[#171843] border border-[#292A52] text-sm text-white placeholder-[#D8C9ED]/40 focus:bg-[#0C0D35] focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#FD849F] via-[#6651BF] to-[#3048C8] text-white text-sm font-bold shadow-lg shadow-[#FD849F]/25 hover:shadow-xl hover:shadow-[#6651BF]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#171843] hover:bg-[#6651BF]/20 border border-[#6651BF] text-white text-sm font-bold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#D8D8E8]/70 leading-normal pt-2">
                *This form is exclusively for promotional inquiries and early registration. WOMUP does not solicit upfront payments or financial investments.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
