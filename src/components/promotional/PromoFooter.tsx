import React, { useState } from 'react'
import { Mail, Globe, ArrowUp, X, Shield, FileText, AlertCircle } from 'lucide-react'
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
    <footer className="bg-[#05062A] text-white border-t border-[#292A52] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-[#FD849F]/5 via-[#6651BF]/10 to-[#3048C8]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#292A52]">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" showTagline={false} inverted={true} />

            <p className="text-xs sm:text-sm font-semibold text-[#FD849F] uppercase tracking-wider">
              Empowerment • Shopping • Rewards
            </p>

            <p className="text-xs sm:text-sm text-[#D8D8E8] leading-relaxed max-w-sm">
              Discover a modern promotional shopping ecosystem designed to deliver savings on everyday purchases and unlock community rewards.
            </p>

            {/* Direct Official Contact */}
            <div className="pt-2 space-y-2 text-xs text-[#D8D8E8]">
              <a
                href="mailto:womupproducts@gmail.com"
                className="flex items-center gap-2 hover:text-[#FD849F] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FD849F]" />
                <span>womupproducts@gmail.com</span>
              </a>
              <a
                href="https://womup.shop"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#FD849F] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#6651BF]" />
                <span>womup.shop</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D8E8]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
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
                  onClick={() => handleNavClick('#benefits')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Categories
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Contact & Enquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D8E8]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="mailto:womupproducts@gmail.com"
                  className="hover:text-white transition-colors block"
                >
                  Support Desk
                </a>
              </li>
              <li>
                <a
                  href="https://womup.shop"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  womup.shop
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Legal & Disclaimers
            </h4>
            <ul className="space-y-2 text-xs text-[#D8D8E8]">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D8E8]/70">
          <p>
            &copy; {new Date().getFullYear()} WOMUP. All rights reserved. Promotional advertising presentation.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#171843] border border-[#292A52] text-white hover:text-[#FD849F] hover:border-[#FD849F] transition-colors flex items-center gap-1.5 cursor-pointer"
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
            >
              <X className="w-4 h-4" />
            </button>

            {activeModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#FD849F]">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">Terms & Conditions</h3>
                </div>
                <p className="text-xs text-[#D8D8E8] leading-relaxed">
                  This website is created solely for promotional, educational, and brand advertising purposes. Participation in WOMUP requires no initial registration fee or compulsory purchase of inventory.
                </p>
                <p className="text-xs text-[#D8D8E8] leading-relaxed">
                  Shopping benefits and Shopping Coins are subject to program qualification, participating merchant agreements, and applicable regulatory compliance.
                </p>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#6651BF]">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
                </div>
                <p className="text-xs text-[#D8D8E8] leading-relaxed">
                  We respect user privacy. Any contact information submitted through our enquiry or early registration forms is used solely to respond to questions and provide official onboarding information.
                </p>
                <p className="text-xs text-[#D8D8E8] leading-relaxed">
                  WOMUP does not sell, rent, or lease personal contact details to third-party advertisers.
                </p>
              </div>
            )}

            {activeModal === 'disclaimer' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#FACC15]">
                  <AlertCircle className="w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">Program Disclaimer</h3>
                </div>
                <p className="text-xs text-[#D8D8E8] leading-relaxed">
                  All earning ranges, team structure member counts, and benefit calculations shown on this website are illustrative promotional examples and do not constitute financial guarantees or employment contracts.
                </p>
                <p className="text-xs text-[#D8D8E8] leading-relaxed">
                  Shopping Coin is not legal tender or currency and cannot be converted into cash unless expressly permitted under applicable terms. Actual earnings depend entirely on individual performance, qualifying network activity, and program terms.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#292A52]">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 rounded-full bg-[#171843] hover:bg-[#6651BF] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
