import React from 'react'
import { motion } from 'framer-motion'
import { Coins, ShoppingCart, Percent } from 'lucide-react'

export const PromoCoinHighlight: React.FC = () => {
  const cards = [
    {
      title: 'SHOPPING COIN',
      hindiTitle: 'शॉपिंग कॉइन मॉडल',
      description:
        'WOMUP promotional material के अनुसार हर महीने ₹2,000 Shopping Coin की promotional allowance मिलती है जिसका उपयोग पार्टनर स्टोर्स पर किया जा सकता है।',
      icon: Coins,
      highlight: '₹2,000 Monthly',
    },
    {
      title: 'SMART SHOPPING',
      hindiTitle: 'स्मार्ट खरीदारी',
      description:
        'किराना, सब्ज़ी, मेडिकल, रेस्टोरेंट और लाइफस्टाइल की रोज़मर्रा की खरीदारी पर सीधे बिल में छूट प्राप्त करके अपनी हर खरीदारी को स्मार्ट बनाएं।',
      icon: ShoppingCart,
      highlight: 'Everyday Essentials',
    },
    {
      title: 'MORE SAVINGS',
      hindiTitle: 'अधिक बचत',
      description:
        'पारंपरिक खरीदारी में जहां कोई बचत नहीं होती, वहां WOMUP मॉडल से हर महीने अपने पारिवारिक खर्च में महत्वपूर्ण बचत करने का अवसर मिलता है।',
      icon: Percent,
      highlight: 'Up to ₹2,000 Savings',
    },
  ]

  return (
    <section id="shopping-coin" className="py-20 sm:py-24 bg-[#05062A] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6651BF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Core Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-hindi text-white tracking-tight">
            हर महीने{' '}
            <span className="bg-gradient-to-r from-[#FD849F] via-[#FFC4D1] to-[#6651BF] bg-clip-text text-transparent font-inr">
              ₹2,000
            </span>{' '}
            Shopping Coin
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8E8] font-hindi leading-relaxed">
            WOMUP प्रमोशनल मॉडल के तहत अपनी दैनिक खरीदारी को अधिक किफायती और लाभप्रद बनाने की अनूठी पहल।
          </p>
        </div>

        {/* Central Coin Showcase Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-14 p-6 sm:p-8 rounded-[20px] bg-[#0C0D35] border border-[#292A52] shadow-[0_0_40px_rgba(102,81,191,0.25)] flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto relative overflow-hidden group"
        >
          <div className="absolute -right-16 -bottom-16 w-60 h-60 bg-[#FD849F]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-5">
            {/* Digital Reward Coin Visual */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#FD849F] via-[#6651BF] to-[#3048C8] p-[2px] shadow-[0_0_25px_rgba(253,132,159,0.35)] shrink-0">
              <div className="w-full h-full bg-[#0C0D35] rounded-[14px] flex flex-col items-center justify-center">
                <Coins className="w-8 h-8 sm:w-9 sm:h-9 text-[#FD849F]" />
                <span className="text-[9px] font-black text-[#D8C9ED] uppercase tracking-tighter">Coin</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD849F] block">
                Digital Reward Coin
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                ₹2,000 Promotional Allowance
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D8E8] mt-1">
                दुकानों और स्टोर्स पर सीधे बिल छूट के लिए डिज़ाइन किया गया रिवॉर्ड सिस्टम।
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="px-5 py-2.5 rounded-[10px] bg-[#171843] border border-[#6651BF] text-white text-xs font-bold uppercase tracking-wider block text-center">
              100% Free Allocation
            </span>
          </div>
        </motion.div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-[#0C0D35] rounded-[16px] border border-[#292A52] p-8 shadow-lg hover:shadow-[0_8px_30px_rgba(102,81,191,0.25)] hover:border-[#6651BF]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#171843] border border-[#292A52] text-[#FD849F] flex items-center justify-center mb-6 group-hover:bg-[#FD849F] group-hover:text-white group-hover:border-[#FD849F] transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Badge */}
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FD849F] block mb-1">
                    {card.highlight}
                  </span>

                  {/* Titles */}
                  <h3 className="text-xl font-black text-white tracking-tight font-display">
                    {card.title}
                  </h3>
                  <h4 className="text-sm font-bold text-[#D8C9ED] font-hindi mt-0.5 mb-3">
                    {card.hindiTitle}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[#D8D8E8] font-hindi leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#292A52] flex items-center text-xs font-bold text-[#FD849F] group-hover:text-white group-hover:translate-x-1 transition-all">
                  <span>Promotional Framework</span>
                  <span className="ml-1">&rarr;</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
