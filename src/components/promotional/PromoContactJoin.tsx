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
  Headphones,
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
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden border-b border-pink-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            Be a Part of <span className="text-[#FF007A]">WOMUP</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold tracking-wide">
            Together for a Smarter, Healthier and Prosperous Community
          </p>
        </div>

        {/* Top 2 Action Selection Cards from Mockup 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {/* Card 1: Join as Customer */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={handleCustomerCardClick}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-pink-100 shadow-[0_8px_24px_rgba(255,0,122,0.06)] hover:border-pink-300 hover:shadow-[0_12px_32px_rgba(255,0,122,0.12)] transition-all flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-[#FF007A] flex items-center justify-center shrink-0 group-hover:bg-[#FF007A] group-hover:text-white transition-colors shadow-2xs">
                <User className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A0E2A] group-hover:text-[#FF007A] transition-colors">
                  Join as Customer
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Start your smart shopping journey today.
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-50 text-[#FF007A] flex items-center justify-center group-hover:bg-[#FF007A] group-hover:text-white transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Card 2: Register as Vendor */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={handleVendorCardClick}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-[0_8px_24px_rgba(30,58,138,0.06)] hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(30,58,138,0.12)] transition-all flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors shadow-2xs">
                <Store className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#0A0E2A] group-hover:text-[#1E3A8A] transition-colors">
                  Register as Vendor
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Grow your business with more customers.
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E3A8A] flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Split Layout: Left Form + Right Support & Contact Details */}
        <div id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-lg font-black text-[#0A0E2A] mb-5">Send Us a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-black text-emerald-900">Enquiry Submitted!</h4>
                <p className="text-xs text-emerald-700 font-medium">
                  We have received your message. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Your Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#FF007A] focus:ring-2 focus:ring-pink-100 text-sm font-semibold outline-hidden transition-all"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="10 digit mobile number"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#FF007A] focus:ring-2 focus:ring-pink-100 text-sm font-semibold outline-hidden transition-all"
                    />
                  </div>
                </div>

                {/* Select Option */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Option
                  </label>
                  <select
                    value={formData.option}
                    onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#FF007A] focus:ring-2 focus:ring-pink-100 text-sm font-semibold outline-hidden transition-all"
                  >
                    <option value="Customer Registration">Customer Registration (₹2,000 Coin)</option>
                    <option value="Vendor Partner Registration">Vendor Partner Registration (Shop Owner)</option>
                    <option value="Referral Network Partner">Referral Partner (7-Level Income)</option>
                    <option value="General Enquiry">General Enquiry &amp; Support</option>
                  </select>
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write your query or shop details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#FF007A] focus:ring-2 focus:ring-pink-100 text-sm font-semibold outline-hidden transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm font-bold shadow-[0_8px_20px_rgba(255,0,122,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>

          {/* Right Column: Customer Support Profile & Contact Card from Mockup 8 */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Support Agent Card */}
            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-center flex flex-col items-center">
              <div className="relative mb-3">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-pink-400 to-[#FF007A] shadow-md">
                  <img
                    src="/images/customer_support_woman.jpg"
                    alt="Customer Support Representative"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                  <Headphones className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 mb-1">
                ● Active Support
              </div>
              <h4 className="text-base font-black text-[#0A0E2A]">We are here to help you!</h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Our support team is available Mon - Sat from 9:00 AM to 7:00 PM
              </p>
            </div>

            {/* Direct Contact Details from Mockup 8 */}
            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] space-y-4">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3.5 group p-2 rounded-2xl hover:bg-pink-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#FF007A] group-hover:bg-[#FF007A] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Call Us Directly
                  </div>
                  <div className="text-sm font-black text-[#0A0E2A] group-hover:text-[#FF007A] transition-colors">
                    +91 98765 43210
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@womup.in"
                className="flex items-center gap-3.5 group p-2 rounded-2xl hover:bg-pink-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#FF007A] group-hover:bg-[#FF007A] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Official Support Email
                  </div>
                  <div className="text-sm font-black text-[#0A0E2A] group-hover:text-[#FF007A] transition-colors">
                    info@womup.in
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-2 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Headquarters
                  </div>
                  <div className="text-sm font-black text-[#0A0E2A]">
                    Mahesana, Gujarat, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
