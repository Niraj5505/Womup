import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, User, Phone, Mail, MapPin, Sparkles, Send } from 'lucide-react'

interface JoinFreeModalProps {
  isOpen: boolean
  onClose: () => void
}

export const JoinFreeModal: React.FC<JoinFreeModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [interest, setInterest] = useState<'shopper' | 'referral' | 'merchant'>('shopper')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !mobile.trim() || !city.trim()) {
      setError('Please provide your full name, mobile number, and city.')
      return
    }
    if (mobile.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    setError('')
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setName('')
    setMobile('')
    setEmail('')
    setCity('')
    setInterest('shopper')
    setIsSubmitted(false)
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05062A]/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-lg bg-white border border-[#E8DDE3] rounded-[28px] p-6 sm:p-8 shadow-[0_20px_60px_rgba(5,6,42,0.15)] z-10 overflow-hidden"
        >
          {/* Decorative soft glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#FFD0DD]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#D8C9ED]/50 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FFF8FA] border border-[#E8DDE3] flex items-center justify-center text-[#555568] hover:text-[#05062A] hover:border-[#FD849F] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#DCFCE7] border border-[#86EFAC] text-[#16A34A] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-black text-[#05062A]">Registration Received!</h3>
              <p className="text-sm text-[#555568] leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="text-[#FD849F] font-bold">{name}</span>. Your enquiry for{' '}
                <span className="text-[#05062A] font-semibold capitalize">{interest}</span> access has been recorded. Our team will reach out with onboarding details.
              </p>

              <div className="p-4 rounded-xl bg-[#FFF8FA] border border-[#E8DDE3] text-xs text-[#555568]">
                No upfront fees or deposit required. Always free registration under WOMUP program guidelines.
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 rounded-full bg-[#FD849F] hover:bg-[#6651BF] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFF8FA] border border-[#E8DDE3] text-[#FD849F] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    Free Registration
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#05062A] tracking-tight">
                  Join <span className="text-[#FD849F]">WOMUP</span> Today
                </h3>
                <p className="text-xs sm:text-sm text-[#555568] mt-1.5 leading-relaxed">
                  Start saving on everyday purchases and explore community benefits. 100% free registration with no initial investment.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-[#FFE4E6] border border-[#FDA4AF] text-[#E11D48] text-xs font-semibold">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#555568] block mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#FD849F] absolute left-3.5 top-3 pointer-events-none" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full pl-10 pr-4 py-2.5 rounded-[12px] bg-[#FFF8FA] border border-[#E8DDE3] text-sm text-[#05062A] placeholder-[#555568]/50 focus:bg-white focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Mobile & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#555568] block mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#FD849F] absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g. 9876543210"
                        maxLength={10}
                        className="w-full pl-10 pr-4 py-2.5 rounded-[12px] bg-[#FFF8FA] border border-[#E8DDE3] text-sm text-[#05062A] placeholder-[#555568]/50 focus:bg-white focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#555568] block mb-1">
                      City *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#FD849F] absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Mumbai, Delhi"
                        className="w-full pl-10 pr-4 py-2.5 rounded-[12px] bg-[#FFF8FA] border border-[#E8DDE3] text-sm text-[#05062A] placeholder-[#555568]/50 focus:bg-white focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#555568] block mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#FD849F] absolute left-3.5 top-3 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-[12px] bg-[#FFF8FA] border border-[#E8DDE3] text-sm text-[#05062A] placeholder-[#555568]/50 focus:bg-white focus:border-[#FD849F] focus:ring-1 focus:ring-[#FD849F] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Role / Interest */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#555568] block mb-1.5">
                    I am interested in
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'shopper', label: 'Smart Shopper' },
                      { key: 'referral', label: 'Referral Partner' },
                      { key: 'merchant', label: 'Merchant Partner' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setInterest(item.key as any)}
                        className={`py-2 px-2 text-xs font-semibold rounded-[10px] border transition-all text-center cursor-pointer ${
                          interest === item.key
                            ? 'bg-[#FFD0DD]/60 border-[#FD849F] text-[#05062A] shadow-xs font-bold'
                            : 'bg-[#FFF8FA] border-[#E8DDE3] text-[#555568] hover:border-[#FD849F]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-3 py-3.5 rounded-full bg-[#FD849F] hover:bg-[#6651BF] text-white font-bold text-sm shadow-[0_4px_18px_rgba(253,132,159,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Registration</span>
                </button>

                <p className="text-[10px] text-center text-[#555568]/80 leading-normal pt-1">
                  *Promotional early registration only. WOMUP does not request payment details or investment capital.
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
