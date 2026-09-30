import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Store,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'
import { useToastContext } from '../../context/ToastContext.tsx'

interface PromoContactJoinProps {
  onOpenJoinModal?: () => void
}

export const PromoContactJoin: React.FC<PromoContactJoinProps> = ({ onOpenJoinModal }) => {
  const { showToast } = useToastContext()
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    option: 'Customer Registration',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      showToast({
        title: 'Validation Error',
        message: 'Please enter your full name',
        variant: 'error',
      })
      return
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '')
    if (cleanMobile.length < 10) {
      showToast({
        title: 'Validation Error',
        message: 'Please enter a valid 10-digit mobile number',
        variant: 'error',
      })
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      showToast({
        title: 'Request Received!',
        message: `Thank you ${formData.name}. Our WOMUP representative will contact you on +91 ${cleanMobile.slice(-10)} shortly.`,
        variant: 'success',
      })
      setFormData({
        name: '',
        mobile: '',
        option: 'Customer Registration',
        message: '',
      })
      setTimeout(() => setIsSubmitted(false), 8000)
    }, 700)
  }

  const handleCustomerCardClick = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      setFormData((prev) => ({ ...prev, option: 'Customer Registration' }))
    }
  }

  const handleVendorCardClick = () => {
    setFormData((prev) => ({ ...prev, option: 'Vendor Partner Registration' }))
    const formElement = document.getElementById('enquiry-form')
    if (formElement) formElement.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="contact"
      className="py-14 sm:py-20 bg-gradient-to-b from-white via-pink-50/15 to-white relative overflow-hidden border-b border-pink-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header from 8_contact_join.png */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            Be a Part of <span className="text-[#FF007A]">WOMUP</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-semibold tracking-wide">
            Together for a Smarter, Healthier and Prosperous Community
          </p>
        </div>

        {/* Top 2 Action Selection Cards from Mockup 8 (Soft Tinted Backgrounds) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12">
          {/* Card 1: Join as Customer (Pink Tint #FFF5F8) */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={handleCustomerCardClick}
            className="bg-[#FFF5F8] rounded-3xl p-5 sm:p-6 border border-pink-200/80 shadow-[0_4px_20px_rgba(255,0,122,0.06)] hover:border-[#FF007A] transition-all flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#FF007A] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(255,0,122,0.3)]">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#FF007A]">
                  Join as Customer
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  Start your smart shopping journey today.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#FF007A] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2: Register as Vendor (Blue Tint #F0F7FF) */}
          <motion.div
            whileHover={{ y: -3, scale: 1.01 }}
            onClick={handleVendorCardClick}
            className="bg-[#F0F7FF] rounded-3xl p-5 sm:p-6 border border-blue-200/80 shadow-[0_4px_20px_rgba(30,58,138,0.06)] hover:border-[#1E3A8A] transition-all flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(30,58,138,0.3)]">
                <Store className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#1E3A8A]">
                  Register as Vendor
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  Grow your business with more customers.
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Split Layout: Left Form + Right Support & Contact Details from Mockup 8 */}
        <div id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto items-center">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-pink-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-black text-emerald-900">Enquiry Submitted!</h4>
                <p className="text-xs text-emerald-700 font-medium">
                  We have received your message. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Your Name */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:bg-white focus:border-[#FF007A] text-xs sm:text-sm font-semibold outline-hidden transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:bg-white focus:border-[#FF007A] text-xs sm:text-sm font-semibold outline-hidden transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Select Option Dropdown */}
                <div className="relative">
                  <select
                    value={formData.option}
                    onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 focus:bg-white focus:border-[#FF007A] text-xs sm:text-sm font-semibold outline-hidden transition-all text-slate-700 appearance-none cursor-pointer"
                  >
                    <option value="Customer Registration">Select Option: Customer Registration</option>
                    <option value="Vendor Partner Registration">Select Option: Vendor Partner Registration</option>
                    <option value="Referral Network Partner">Select Option: Referral Partner (7-Level Income)</option>
                    <option value="General Enquiry">Select Option: General Enquiry</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Your Message */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 focus:bg-white focus:border-[#FF007A] text-xs sm:text-sm font-semibold outline-hidden transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Full-width Hot Pink Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm font-bold shadow-[0_8px_20px_rgba(255,0,122,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-3.5 h-3.5 ml-1" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Right Column: Customer Support Woman + Contact Details Card from Mockup 8 */}
          <div className="lg:col-span-6 flex flex-col items-center sm:items-start space-y-4">
            {/* Title & Agent Image */}
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#0A0E2A]">
                  We are here <br /> to help you!
                </h3>
              </div>
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-pink-200 shadow-md">
                <img
                  src="/images/customer_support_woman.jpg"
                  alt="Customer Support Representative"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Details Card with Pink Icons from Mockup 8 */}
            <div className="w-full bg-white rounded-3xl p-5 border border-pink-100 shadow-[0_8px_25px_rgba(0,0,0,0.04)] space-y-3.5">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-pink-50 text-[#FF007A] border border-pink-200 flex items-center justify-center shrink-0 group-hover:bg-[#FF007A] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-black text-[#0A0E2A] group-hover:text-[#FF007A] transition-colors">
                  +91 98765 43210
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@womup.in"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-pink-50 text-[#FF007A] border border-pink-200 flex items-center justify-center shrink-0 group-hover:bg-[#FF007A] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-black text-[#0A0E2A] group-hover:text-[#FF007A] transition-colors">
                  info@womup.in
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-pink-50 text-[#FF007A] border border-pink-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-black text-[#0A0E2A]">
                  Mahesana, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
