import React, { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUp, X, Shield, FileText, AlertCircle } from 'lucide-react'
import { BrandLogo } from '../common/BrandLogo.tsx'

export const PromoFooter: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A0724] text-white border-t border-purple-900/60 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-r from-[#FF007A]/15 via-[#7C3AED]/20 to-[#3048C8]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-purple-900/50">
          {/* Brand Column (Span 2) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 space-y-4">
            <BrandLogo size="lg" showTagline={false} inverted={true} />

            <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#FF007A] to-[#A855F7] bg-clip-text text-transparent uppercase tracking-wider">
              Empowerment &bull; Shopping &bull; Revolution
            </p>

            <p className="text-xs sm:text-sm text-[#D8D8E8] leading-relaxed max-w-sm">
              WOMUP connects customers with trusted local neighborhood merchants for instant monthly savings and sustainable multi-tier referral income.
            </p>

            {/* Direct Official Contact */}
            <div className="pt-2 space-y-2 text-xs text-[#D8D8E8]">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-[#FF007A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF007A]" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@womup.in"
                className="flex items-center gap-2 hover:text-[#FF007A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF007A]" />
                <span>info@womup.in</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#3048C8]" />
                <span>Mahesana, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D8E8]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#for-customers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  For Customers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#for-vendors')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  For Vendors
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Opportunities */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Opportunities
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D8E8]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#income')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Income Opportunity
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shop Categories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#download-app')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  WOMUP Mobile App
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact &amp; Join
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D8E8]">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Earnings Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D8E8]/70">
          <p>
            &copy; {new Date().getFullYear()} WOMUP. All rights reserved. Save More. Shop Smarter. Earn More.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#171843] border border-[#292A52] text-white hover:text-[#FF007A] hover:border-[#FF007A] transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal Dialog for Legal Content */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05062A]/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0C0D35] border border-[#292A52] rounded-[24px] p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#171843] border border-[#292A52] flex items-center justify-center text-[#D8D8E8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {activeModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#FF007A]">
                  <FileText className="w-6 h-6" />
                  <h3 className="text-lg font-black text-white">Terms of Service</h3>
                </div>
                <div className="text-xs text-[#D8D8E8] space-y-3 leading-relaxed">
                  <p>
                    1. WOMUP is a promotional shopper rewards platform providing monthly shopping coins and referral incentive allowances.
                  </p>
                  <p>
                    2. Monthly coins (e.g. ₹2,000 monthly shopping coins) can be redeemed towards eligible purchases at authorized vendor partners up to specified discount percentages (10% to 15%).
                  </p>
                  <p>
                    3. Users must follow verified merchant guidelines and genuine billing procedures to redeem benefits.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#3048C8]">
                  <Shield className="w-6 h-6" />
                  <h3 className="text-lg font-black text-white">Privacy Policy</h3>
                </div>
                <div className="text-xs text-[#D8D8E8] space-y-3 leading-relaxed">
                  <p>
                    WOMUP respects your privacy. Any mobile number, email, or contact information collected via this portal is utilized solely for customer service onboarding and merchant partnership communication.
                  </p>
                  <p>
                    We do not sell, rent, or lease personal contact details to unauthorized third-party commercial marketing firms.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'disclaimer' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-400">
                  <AlertCircle className="w-6 h-6" />
                  <h3 className="text-lg font-black text-white">Earnings Disclaimer</h3>
                </div>
                <div className="text-xs text-[#D8D8E8] space-y-3 leading-relaxed">
                  <p>
                    Earning representations (such as ₹30,000 to ₹3,00,000 per month) demonstrate potential multi-tier affiliate referral income based on actual active customer retail purchasing volume across 7 referral tiers.
                  </p>
                  <p>
                    Individual results vary depending on team building, community engagement, and actual recurring merchant shopping transactions.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  )
}
