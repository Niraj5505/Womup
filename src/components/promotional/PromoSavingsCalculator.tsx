import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

interface SavingsExample {
  id: string
  name: string
  hindiName: string
  billAmount: number
  shoppingCoin: number
  amountToPay: number
  displayedSaving: number
  description: string
}

export const PromoSavingsCalculator: React.FC = () => {
  const examples: SavingsExample[] = [
    {
      id: 'kirana',
      name: 'Kirana',
      hindiName: 'किराना स्टोर',
      billAmount: 10000,
      shoppingCoin: 600,
      amountToPay: 9400,
      displayedSaving: 600,
      description: 'मासिक किराना एवं राशन की ₹10,000 की खरीदारी पर ₹600 का शॉपिंग कॉइन डिस्काउंट।',
    },
    {
      id: 'vegetable',
      name: 'Vegetable',
      hindiName: 'सब्ज़ी स्टोर',
      billAmount: 4000,
      shoppingCoin: 600,
      amountToPay: 3400,
      displayedSaving: 600,
      description: 'महीने भर की ताज़ी सब्ज़ियों की ₹4,000 की खरीदारी पर ₹600 का शॉपिंग कॉइन डिस्काउंट।',
    },
    {
      id: 'medical',
      name: 'Medical',
      hindiName: 'मेडिकल स्टोर',
      billAmount: 2000,
      shoppingCoin: 300,
      amountToPay: 1700,
      displayedSaving: 300,
      description: 'दवाइयों व वेलनेस उत्पादों की ₹2,000 की खरीदारी पर ₹300 का शॉपिंग कॉइन डिस्काउंट।',
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      hindiName: 'रेस्टोरेंट',
      billAmount: 2000,
      shoppingCoin: 300,
      amountToPay: 1700,
      displayedSaving: 300,
      description: 'पारिवारिक भोजन व डाइनिंग बिल ₹2,000 पर ₹300 का शॉपिंग कॉइन डिस्काउंट।',
    },
    {
      id: 'salon',
      name: 'Beauty Parlour / Salon',
      hindiName: 'ब्यूटी पार्लर / सैलून',
      billAmount: 2000,
      shoppingCoin: 300,
      amountToPay: 1700,
      displayedSaving: 300,
      description: 'सैलून व ग्रूमिंग सेवाओं के ₹2,000 के बिल पर ₹300 का शॉपिंग कॉइन डिस्काउंट।',
    },
  ]

  const [activeTab, setActiveTab] = useState<string>('kirana')
  const current = examples.find((e) => e.id === activeTab) || examples[0]

  return (
    <section id="savings" className="py-20 sm:py-24 bg-[#05062A] relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-[#6651BF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#171843] border border-[#292A52] text-[#D8C9ED] text-xs font-extrabold uppercase tracking-wider inline-block mb-3">
            Real Purchase Math
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-hindi text-white tracking-tight">
            बचत के <span className="text-[#FD849F]">वास्तविक उदाहरण</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D8E8] font-hindi leading-relaxed">
            WOMUP प्रमोशनल सामग्री में दिए गए बिल और शॉपिंग कॉइन डिस्काउंट के अनुसार अपनी बचत की गणना देखें।
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {examples.map((item) => {
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FD849F] text-white shadow-md shadow-[#FD849F]/30 scale-105'
                    : 'bg-[#171843] text-[#D8D8E8] border border-[#292A52] hover:border-[#6651BF] hover:text-white'
                }`}
              >
                <span>{item.name}</span>
                <span className="ml-1.5 opacity-80 font-hindi">({item.hindiName})</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Calculator Card Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0C0D35] rounded-[16px] border border-[#292A52] shadow-2xl p-6 sm:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#292A52] gap-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FD849F] block">
                    Category Breakdown
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {current.name} <span className="font-hindi text-xl font-bold text-[#D8C9ED]">({current.hindiName})</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8D8E8] font-hindi mt-1">
                    {current.description}
                  </p>
                </div>

                {/* Displayed Saving Badge */}
                <div className="p-4 rounded-2xl bg-[#4ADE80]/10 border border-[#4ADE80]/30 self-start md:self-auto text-center min-w-[170px]">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4ADE80] block">
                    Displayed Saving
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#4ADE80] font-inr mt-0.5 block">
                    ₹{current.displayedSaving.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* 4 Math Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Bill Amount */}
                <div className="p-4 rounded-xl bg-[#171843] border border-[#292A52]">
                  <span className="text-[11px] font-bold uppercase text-[#D8D8E8] block">
                    1. Bill Amount
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white font-inr mt-1 block">
                    ₹{current.billAmount.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#D8D8E8]/70 font-hindi mt-1 block">
                    कुल खरीदारी राशि
                  </span>
                </div>

                {/* 2. Shopping Coin */}
                <div className="p-4 rounded-xl bg-[#FD849F]/10 border border-[#FD849F]/30">
                  <span className="text-[11px] font-bold uppercase text-[#FD849F] block">
                    2. Shopping Coin
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#FD849F] font-inr mt-1 block">
                    - ₹{current.shoppingCoin.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#FD849F]/80 font-hindi mt-1 block">
                    कॉइन से कटौती
                  </span>
                </div>

                {/* 3. Amount to Pay */}
                <div className="p-4 rounded-xl bg-[#05062A] border border-[#292A52] text-white">
                  <span className="text-[11px] font-bold uppercase text-[#D8C9ED] block">
                    3. Amount to Pay
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white font-inr mt-1 block">
                    ₹{current.amountToPay.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#D8D8E8]/70 font-hindi mt-1 block">
                    दुकान पर देय राशि
                  </span>
                </div>

                {/* 4. Displayed Saving */}
                <div className="p-4 rounded-xl bg-[#4ADE80]/10 border border-[#4ADE80]/30">
                  <span className="text-[11px] font-bold uppercase text-[#4ADE80] block">
                    4. Total Saving
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#4ADE80] font-inr mt-1 block">
                    ₹{current.displayedSaving.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#4ADE80]/80 font-hindi mt-1 block">
                    आपकी सीधी बचत
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mandatory Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-[#0C0D35] border border-[#292A52] flex items-start gap-3 text-xs text-[#D8D8E8] shadow-xs">
            <AlertCircle className="w-4 h-4 text-[#FD849F] flex-shrink-0 mt-0.5" />
            <p className="font-hindi leading-relaxed">
              <strong>Disclaimer:</strong> Examples shown are based on the promotional material provided by WOMUP. Actual applicable benefits may vary depending on merchant category, store terms, and monthly coin balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
