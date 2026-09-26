import React from 'react'
import { motion } from 'framer-motion'
import {
  Coins,
  MapPin,
  ShoppingBag,
  Truck,
  Users,
  Clock,
  ChevronRight,
} from 'lucide-react'

interface PromoMobileAppProps {
  onOpenJoinModal?: () => void
}

export const PromoMobileApp: React.FC<PromoMobileAppProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadAction = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  const appFeatures = [
    {
      title: 'Get Monthly Shopping Coin',
      desc: 'Instant ₹2,000 monthly allowance credited directly into your in-app wallet',
      icon: Coins,
      iconColor: 'bg-blue-500 text-white',
    },
    {
      title: 'Find Nearby Shops',
      desc: 'GPS-powered discovery of local verified merchants and exclusive coin discounts',
      icon: MapPin,
      iconColor: 'bg-[#FF007A] text-white',
    },
    {
      title: 'Shop & Save',
      desc: 'Redeem coins effortlessly at checkout with one simple tap or QR scan',
      icon: ShoppingBag,
      iconColor: 'bg-amber-500 text-white',
    },
    {
      title: 'Home Delivery (Vegetables)',
      desc: 'Convenient fresh farm produce and vegetables delivered straight to your doorstep',
      icon: Truck,
      iconColor: 'bg-teal-500 text-white',
    },
    {
      title: 'Refer & Earn',
      desc: 'Share your personal referral link and track multi-level community earnings in real-time',
      icon: Users,
      iconColor: 'bg-purple-600 text-white',
    },
    {
      title: 'Track Orders & Savings',
      desc: 'Complete digital passbook showing every coin spent and cumulative savings earned',
      icon: Clock,
      iconColor: 'bg-indigo-500 text-white',
    },
  ]

  return (
    <section
      id="download-app"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden border-b border-pink-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            <span className="text-[#FF007A]">WOMUP</span> Mobile App
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold tracking-wide">
            Your Smart Shopping &amp; Earning Companion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Dual Phone Mockups from Mockup 7 */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            <div className="relative flex items-center justify-center w-full max-w-lg">
              {/* Back Phone: Login Screen Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -6 }}
                whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-56 sm:w-64 bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border-4 border-slate-800 -mr-16 sm:-mr-20 z-10 hidden sm:block"
              >
                <div className="bg-white rounded-[30px] p-4 text-center h-[460px] flex flex-col justify-between overflow-hidden">
                  <div className="pt-8">
                    <img
                      src="/images/womup-logo.png"
                      alt="WOMUP Logo"
                      className="w-20 mx-auto object-contain mb-3"
                    />
                    <div className="text-xs font-black text-[#0A0E2A]">WOMUP</div>
                    <div className="text-[10px] text-slate-400">Save More • Shop Smarter</div>
                  </div>

                  <div className="space-y-2 py-4">
                    <div className="h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center px-3 text-[11px] text-slate-400">
                      Mobile Number
                    </div>
                    <div className="h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center px-3 text-[11px] text-slate-400">
                      Password
                    </div>
                    <div className="py-2.5 rounded-xl bg-[#FF007A] text-white text-xs font-bold shadow-md">
                      Login
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 pb-2">
                    New user? <span className="text-[#FF007A] font-bold">Create Account</span>
                  </div>
                </div>
              </motion.div>

              {/* Front Phone: Live App Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-64 sm:w-72 bg-slate-900 rounded-[42px] p-3 shadow-[0_25px_60px_rgba(255,0,122,0.2)] border-4 border-slate-800 z-20"
              >
                <div className="bg-[#FAF7FD] rounded-[34px] overflow-hidden text-[#0A0E2A] h-[490px] flex flex-col justify-between">
                  {/* Top Bar */}
                  <div>
                    <div className="h-6 bg-white px-5 flex items-center justify-between text-[10px] font-bold text-slate-500">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>5G</span>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="p-3 bg-white border-b border-pink-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/images/customer_man_avatar.jpg"
                          alt="Manish Shah"
                          className="w-8 h-8 rounded-full object-cover border border-pink-200"
                        />
                        <div>
                          <div className="text-[10px] text-slate-400">Hello</div>
                          <div className="text-xs font-bold text-[#0A0E2A]">Manish Shah</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                        ₹2,000 Coins
                      </span>
                    </div>

                    {/* Coin Balance Card */}
                    <div className="p-3">
                      <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-2xl p-3 text-white shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-xs">
                            ₹
                          </div>
                          <div>
                            <div className="text-[9px] uppercase tracking-wider text-amber-100 font-bold">
                              Shopping Coin
                            </div>
                            <div className="text-base font-black">2,000</div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/80" />
                      </div>
                    </div>

                    {/* Nearby Shops Section */}
                    <div className="px-3 space-y-1.5">
                      <div className="text-[11px] font-black text-slate-800 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#FF007A]" />
                        <span>Nearby Partner Shops</span>
                      </div>

                      {[
                        { name: 'Gokul Vegetables', dist: '0.5 km', off: '15% Off' },
                        { name: 'Shree Kirana Store', dist: '1.2 km', off: '10% Off' },
                        { name: 'Jay Medical Store', dist: '1.5 km', off: '10% Off' },
                      ].map((shop) => (
                        <div
                          key={shop.name}
                          className="bg-white rounded-xl p-2 border border-slate-100 flex items-center justify-between shadow-2xs"
                        >
                          <div>
                            <div className="text-[11px] font-bold text-[#0A0E2A] leading-tight">
                              {shop.name}
                            </div>
                            <div className="text-[9px] text-slate-400">{shop.dist} away</div>
                          </div>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-pink-50 text-[#FF007A]">
                            {shop.off}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* App Bottom Navigation */}
                  <div className="bg-white border-t border-slate-100 px-3 py-2 flex items-center justify-around text-[9px] font-bold text-slate-500">
                    <span className="text-[#FF007A]">Home</span>
                    <span>Pay</span>
                    <span>Orders</span>
                    <span>Wallet</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: 6 Features List & App Download Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white rounded-2xl p-3.5 border border-pink-100/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-pink-300 transition-all flex items-start gap-3"
                  >
                    <div className={`w-9 h-9 rounded-xl ${feat.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-black text-[#0A0E2A] leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* App Store Download Badges from Mockup */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">
                Download Now
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Google Play Button */}
                <button
                  type="button"
                  onClick={handleDownloadAction}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white flex items-center gap-3 shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.366-.37-.61-.91-.61-1.528V3.342c0-.618.244-1.158.61-1.528zM15.207 13.414l2.122 2.121-12.02 6.94 9.898-9.061zM15.207 10.586L5.309 1.525l12.02 6.94-2.122 2.121zM18.737 12l2.673 1.543c.787.454.787 1.196 0 1.65L18.737 12z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] uppercase font-bold text-slate-400 leading-tight">
                      GET IT ON
                    </div>
                    <div className="text-xs font-bold leading-tight">Google Play</div>
                  </div>
                </button>

                {/* Apple App Store Button */}
                <button
                  type="button"
                  onClick={handleDownloadAction}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white flex items-center gap-3 shadow-md hover:scale-105 transition-all cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.64-.78 1.08-1.86.96-2.95-1 .04-2.14.67-2.81 1.45-.58.67-1.1 1.76-.96 2.83 1.12.09 2.19-.55 2.81-1.33z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] uppercase font-bold text-slate-400 leading-tight">
                      DOWNLOAD ON THE
                    </div>
                    <div className="text-xs font-bold leading-tight">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
