import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Coins, TrendingUp, ShieldAlert } from 'lucide-react'

export const PromoSavingsAndIncome: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#05062A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Dual Benefit Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-hindi text-white tracking-tight">
            बचत भी और <span className="text-[#FD849F]">Income भी</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8E8] font-hindi leading-relaxed">
            WOMUP प्रमोशनल मॉडल घर के खर्चों में बचत और कम्युनिटी सहभागिता से अवसर प्रस्तुत करता है।
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: SAVINGS (बचत) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0C0D35] rounded-[16px] border border-[#292A52] p-6 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#292A52]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#4ADE80] bg-[#4ADE80]/15 px-3 py-1 rounded-full border border-[#4ADE80]/30">
                  घरेलू मासिक बजट
                </span>
                <span className="text-2xl font-black text-white font-hindi">बचत</span>
              </div>

              <h3 className="text-xl font-bold text-white font-hindi mb-2">
                मासिक खर्च में तुलनात्मक कमी
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D8E8] font-hindi leading-relaxed mb-8">
                सामान्य परिवारों के ₹20,000 के मासिक ग्रोसरी, सब्ज़ी और आवश्यक खर्चों पर WOMUP मॉडल का प्रभाव:
              </p>

              {/* Vertical Steps */}
              <div className="space-y-4 text-center max-w-sm mx-auto">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-[#171843] border border-[#292A52]">
                  <span className="text-xs text-[#D8D8E8] font-bold block">
                    पूर्व मासिक घरेलू खर्च
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white font-inr mt-0.5 block">
                    ₹20,000
                  </span>
                </div>

                <div className="flex justify-center text-[#FD849F]">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-[#05062A] border border-[#292A52] text-white">
                  <span className="text-xs text-[#D8C9ED] font-bold block">
                    WOMUP डिस्काउंट के बाद वास्तविक भुगतान
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white font-inr mt-0.5 block">
                    ₹18,000
                  </span>
                </div>

                <div className="flex justify-center text-[#4ADE80]">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-[#4ADE80]/10 border-2 border-[#4ADE80]">
                  <span className="text-xs font-black text-[#4ADE80] uppercase block">
                    कुल प्रदर्शित सीधी बचत
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-[#4ADE80] font-inr mt-0.5 block">
                    ₹2,000
                  </span>
                  <span className="text-[11px] text-[#4ADE80]/90 font-hindi mt-1 block">
                    हर महीने पारिवारिक बजट की सुरक्षा
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#292A52] text-[11px] text-[#D8D8E8]/70 font-hindi">
              *आंकड़े WOMUP प्रचार सामग्री के मॉडल विश्लेषण पर आधारित हैं।
            </div>
          </motion.div>

          {/* RIGHT: INCOME (Income) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0C0D35] rounded-[16px] border border-[#292A52] p-6 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#292A52]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#FD849F] bg-[#FD849F]/15 px-3 py-1 rounded-full border border-[#FD849F]/30">
                  प्रमोशनल मॉडल
                </span>
                <span className="text-2xl font-black text-white">Income</span>
              </div>

              <h3 className="text-xl font-bold text-white font-hindi mb-2">
                WOMUP में 2 प्रकार के इनकम मॉडल
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D8E8] font-hindi leading-relaxed mb-6">
                प्रचार सामग्री में समझाए गए दो प्रमुख लाभ चैनल:
              </p>

              <div className="space-y-4">
                {/* Concept 1 */}
                <div className="p-5 rounded-xl bg-[#171843] border border-[#292A52] hover:border-[#6651BF] transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#FD849F]/15 text-[#FD849F] flex items-center justify-center font-bold">
                      <Coins className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        1. Shopping Coin Income
                      </h4>
                      <span className="text-xs text-[#FD849F] font-hindi">शॉपिंग कॉइन इन्कम</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#D8D8E8] font-hindi leading-relaxed">
                    WOMUP मॉडल के अनुसार खरीदारी और रेफरल से संबंधित शॉपिंग कॉइन लाभ प्राप्त होते हैं जिनका उपयोग पुनः खरीदारी पर छूट के लिए किया जाता है।
                  </p>
                </div>

                {/* Concept 2 */}
                <div className="p-5 rounded-xl bg-[#171843] border border-[#292A52] hover:border-[#6651BF] transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#6651BF]/20 text-[#D8C9ED] flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5 text-[#FD849F]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        2. Repurchasing Income
                      </h4>
                      <span className="text-xs text-[#FD849F] font-hindi">रीपरचेसिंग इन्कम</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#D8D8E8] font-hindi leading-relaxed">
                    WOMUP प्रचार सामग्री में वर्णित रीपरचेसिंग इनकम, जो नेटवर्क में सदस्यों द्वारा नियमित रूप से की जाने वाली पुनः खरीदारी पर आधारित है।
                  </p>
                </div>
              </div>
            </div>

            {/* Strict Income Disclaimer */}
            <div className="mt-8 p-3.5 rounded-xl bg-[#171843] border border-[#292A52] flex items-start gap-2.5 text-xs text-[#D8D8E8]">
              <ShieldAlert className="w-4 h-4 text-[#FACC15] flex-shrink-0 mt-0.5" />
              <p className="font-hindi text-[11px] leading-relaxed">
                <strong>सूचना:</strong> इनकम के आंकड़े और लाभ आधिकारिक प्रचार सामग्री पर आधारित हैं और इन्हें किसी भी प्रकार की गारंटीड कमाई या फिक्स्ड रिटर्न के रूप में नहीं समझा जाना चाहिए।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
