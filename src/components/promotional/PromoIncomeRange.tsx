import React from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, TrendingUp } from 'lucide-react'

export const PromoIncomeRange: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 bg-[#05062A] text-white relative overflow-hidden">
      {/* Secondary decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#6651BF]/20 to-[#3048C8]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171843] border border-[#292A52] text-xs font-bold text-[#D8C9ED] mb-6 shadow-sm"
        >
          <TrendingUp className="w-3.5 h-3.5 text-[#FD849F]" />
          <span>Promotional Framework Information</span>
        </motion.div>

        {/* Heading description */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-xl font-bold font-hindi text-[#D8D8E8] mb-4"
        >
          WOMUP प्रचार सामग्री में प्रदर्शित आय दायरा (Income Range)
        </motion.h3>

        {/* Large Highlight Figures */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-6 p-6 sm:p-10 rounded-3xl bg-[#0C0D35] border border-[#292A52] shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#FD849F]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="text-3xl sm:text-5xl md:text-6xl font-black font-hindi text-white tracking-tight leading-tight">
            <span className="text-[#FD849F] font-inr drop-shadow-[0_0_20px_rgba(253,132,159,0.3)]">₹50,000</span> से{' '}
            <span className="text-[#FD849F] font-inr drop-shadow-[0_0_20px_rgba(253,132,159,0.3)]">₹5,00,000</span>
          </div>
          <span className="text-xl sm:text-2xl font-bold font-hindi text-[#D8C9ED] mt-3 block">
            तक हर महीने
          </span>
          <p className="text-xs sm:text-sm text-[#D8D8E8]/70 font-hindi mt-3 max-w-xl mx-auto">
            (Income range displayed in WOMUP promotional material based on multi-level network model)
          </p>
        </motion.div>

        {/* Mandatory Regulatory & Income Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-5 rounded-2xl bg-[#171843] border border-[#292A52] text-left flex items-start gap-3.5 max-w-3xl mx-auto mt-8 text-xs text-[#D8D8E8] shadow-lg"
        >
          <ShieldAlert className="w-5 h-5 text-[#FACC15] flex-shrink-0 mt-0.5" />
          <div className="space-y-1 font-hindi leading-relaxed text-[11px] sm:text-xs">
            <span className="font-extrabold uppercase tracking-wider text-[#FACC15] block">
              महत्वपूर्ण सूचना एवं अस्वीकरण (Mandatory Disclosure)
            </span>
            <p>
              प्रदर्शित आंकड़े WOMUP द्वारा उपलब्ध कराई गई प्रचार सामग्री के आधार पर हैं। यह कोई गारंटीकृत आय, रिटर्न या सुनिश्चित रोजगार का वादा नहीं है। वास्तविक परिणाम, पात्रता और प्रतिफल व्यक्तिगत प्रयास, नेटवर्क आकार और लागू कानूनी नियमों पर निर्भर करते हैं।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
