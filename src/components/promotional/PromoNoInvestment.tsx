import React from 'react'
import { motion } from 'framer-motion'
import { Ban, ShoppingBag, ShieldCheck, AlertCircle } from 'lucide-react'

export const PromoNoInvestment: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#05062A] border-b border-[#292A52] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Promotional Declarations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-hindi text-white tracking-tight">
            <span className="text-[#FD849F]">NA INVESTMENT</span> • <span className="text-[#6651BF]">NA SELLING</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8E8] font-hindi leading-relaxed">
            WOMUP प्रचार सामग्री में प्रस्तुत दो मुख्य स्तंभ — बिना किसी निवेश और बिना किसी उत्पाद बिक्री के मॉडल।
          </p>
        </div>

        {/* 2 Big Statement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: NA INVESTMENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0C0D35] text-white rounded-[16px] p-8 sm:p-10 shadow-2xl border border-[#292A52] hover:border-[#FD849F] transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#FD849F]/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#171843] border border-[#292A52] text-[#FD849F] flex items-center justify-center mb-6 shadow-sm">
                <Ban className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FD849F] block mb-1">
                Zero Financial Risk
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">
                NA INVESTMENT
              </h3>
              <h4 className="text-base font-bold text-[#D8C9ED] font-hindi mb-4">
                कोई निवेश नहीं
              </h4>
              <p className="text-sm text-[#D8D8E8] font-hindi leading-relaxed">
                WOMUP प्रचार सामग्री के अनुसार इस मॉडल में शामिल होने के लिए किसी भी प्रकार के अग्रिम शुल्क, पूंजी निवेश अथवा जमा राशि की कोई आवश्यकता नहीं है।
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#292A52] flex items-center gap-2 text-xs text-[#4ADE80] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Free To Join Model</span>
            </div>
          </motion.div>

          {/* Card 2: NA SELLING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#0C0D35] text-white rounded-[16px] p-8 sm:p-10 shadow-2xl border border-[#292A52] hover:border-[#6651BF] transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#6651BF]/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#171843] border border-[#292A52] text-[#D8C9ED] flex items-center justify-center mb-6 group-hover:bg-[#6651BF] group-hover:text-white transition-colors duration-300 shadow-sm">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FD849F] block mb-1">
                Zero Sales Pressure
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">
                NA SELLING
              </h3>
              <h4 className="text-base font-bold text-[#D8C9ED] font-hindi mb-4">
                कोई सामान बेचना नहीं
              </h4>
              <p className="text-sm text-[#D8D8E8] font-hindi leading-relaxed">
                पारंपरिक मॉडलों के विपरीत, यहाँ किसी प्रकार के प्रॉडक्ट्स डोर-टू-डोर बेचना या मासिक कोटा पूरा करने की बाध्यता प्रचार सामग्री में नहीं दर्शाई गई है।
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#292A52] flex items-center gap-2 text-xs text-[#FD849F] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Pure Everyday Consumption Model</span>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-10 p-4 rounded-xl bg-[#0C0D35] border border-[#292A52] flex items-start gap-3 text-xs text-[#D8D8E8]">
          <AlertCircle className="w-4 h-4 text-[#FD849F] flex-shrink-0 mt-0.5" />
          <p className="font-hindi leading-relaxed">
            These statements reflect the promotional material provided for this website. Users should review the official WOMUP terms and applicable conditions before joining.
          </p>
        </div>
      </div>
    </section>
  )
}
