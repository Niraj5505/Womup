import React from 'react'
import { motion } from 'framer-motion'
import { Users, ArrowDown, Coins, RefreshCw, Sparkles } from 'lucide-react'

export const PromoReferralIncome: React.FC = () => {
  return (
    <section id="income" className="py-20 sm:py-24 bg-[#05062A] border-b border-[#292A52] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Two Streams of Model Income
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-hindi text-white tracking-tight">
            Refer करें और <span className="text-[#FD849F]">2 तरह से Income</span> पाएं
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8E8] font-hindi leading-relaxed">
            WOMUP प्रमोशनल मॉडल के तहत मित्रों व परिचितों को आमंत्रित करके दो भिन्न तरीकों से लाभ अर्जित करने की व्यवस्था।
          </p>
        </div>

        {/* 2 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: SHOPPING COIN INCOME */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0C0D35] rounded-[16px] border border-[#292A52] p-8 sm:p-10 shadow-2xl hover:border-[#6651BF] hover:shadow-[0_8px_30px_rgba(102,81,191,0.25)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#171843] border border-[#292A52] text-[#FD849F] flex items-center justify-center group-hover:bg-[#FD849F] group-hover:text-white group-hover:border-[#FD849F] transition-all duration-300">
                  <Coins className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FD849F] block">
                    Benefit Model 1
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    SHOPPING COIN INCOME
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#D8D8E8] font-hindi leading-relaxed mb-8">
                WOMUP प्रमोशनल मॉडल के अनुसार, आपके रेफरल द्वारा की गई खरीदारी या अकाउंट गतिविधि के आधार पर शॉपिंग कॉइन्स का आवंटन होता है, जिसे आगामी स्टोर्स पर रिडीम किया जा सकता है।
              </p>

              {/* Visual Flow */}
              <div className="p-5 rounded-2xl bg-[#171843] border border-[#292A52] text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C0D35] text-white border border-[#292A52] text-xs font-bold shadow-xs">
                  <Users className="w-3.5 h-3.5 text-[#FD849F]" />
                  <span>Referral (रेफरल)</span>
                </div>
                <div className="flex justify-center text-[#FD849F]">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FD849F] text-white text-xs font-bold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Shopping Coin Income</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#292A52] text-[11px] text-[#D8D8E8]/70 font-hindi text-center">
              *व्याख्यात्मक उद्देश्य हेतु प्रदर्शित। कोई निश्चित कमीशन गारंटी नहीं।
            </div>
          </motion.div>

          {/* Card 2: REPURCHASING INCOME */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#0C0D35] rounded-[16px] border border-[#292A52] p-8 sm:p-10 shadow-2xl hover:border-[#6651BF] hover:shadow-[0_8px_30px_rgba(102,81,191,0.25)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#171843] border border-[#292A52] text-[#D8C9ED] flex items-center justify-center group-hover:bg-[#6651BF] group-hover:text-white group-hover:border-[#6651BF] transition-all duration-300">
                  <RefreshCw className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FD849F] block">
                    Benefit Model 2
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    REPURCHASING INCOME
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#D8D8E8] font-hindi leading-relaxed mb-8">
                जब आपके नेटवर्क के उपभोक्ता बार-बार पार्टनर दुकानों से मासिक राशन, दवाइयां या भोजन की खरीदारी करते हैं, तो उस निरंतर खरीदारी गतिविधि से उत्पन्न रीपरचेसिंग इनकम का मॉडल।
              </p>

              {/* Visual Flow */}
              <div className="p-5 rounded-2xl bg-[#171843] border border-[#292A52] text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C0D35] text-white border border-[#292A52] text-xs font-bold shadow-xs">
                  <Users className="w-3.5 h-3.5 text-[#FD849F]" />
                  <span>Community Purchases</span>
                </div>
                <div className="flex justify-center text-[#6651BF]">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FD849F] to-[#6651BF] text-white text-xs font-bold shadow-xs">
                  <RefreshCw className="w-3.5 h-3.5 text-white" />
                  <span>Repurchasing Income</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#292A52] text-[11px] text-[#D8D8E8]/70 font-hindi text-center">
              *केवल प्रचार सामग्री के विश्लेषण हेतु। वास्तविक परिणाम शर्तों के अधीन हैं।
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
