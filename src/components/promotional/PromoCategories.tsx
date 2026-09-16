import React from 'react'
import { motion } from 'framer-motion'
import {
  Store,
  Carrot,
  Pill,
  Utensils,
  Scissors,
  Building,
  Shirt,
  Gift,
  Footprints,
  Candy,
  Cake,
  Zap,
  Activity,
  GraduationCap,
} from 'lucide-react'

export const PromoCategories: React.FC = () => {
  const categories = [
    {
      name: 'Grocery',
      desc: 'Everyday household shopping and pantry staples',
      icon: Store,
      accentBg: 'bg-[#FFD0DD]/50',
      iconColor: 'text-[#FD849F]',
    },
    {
      name: 'Vegetables',
      desc: 'Fresh farm produce and daily greens',
      icon: Carrot,
      accentBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#22C55E]',
    },
    {
      name: 'Medical',
      desc: 'Eligible healthcare purchases and medicines',
      icon: Pill,
      accentBg: 'bg-[#FFD0DD]/60',
      iconColor: 'text-[#FD849F]',
    },
    {
      name: 'Restaurants',
      desc: 'Dining and family food experiences',
      icon: Utensils,
      accentBg: 'bg-[#FEF08A]/60',
      iconColor: 'text-[#EAB308]',
    },
    {
      name: 'Beauty & Salon',
      desc: 'Beauty, grooming and personal care',
      icon: Scissors,
      accentBg: 'bg-[#FFC4D1]/40',
      iconColor: 'text-[#FD849F]',
    },
    {
      name: 'Hotels',
      desc: 'Hospitality, stays and travel leisure',
      icon: Building,
      accentBg: 'bg-[#D8C9ED]/50',
      iconColor: 'text-[#6651BF]',
    },
    {
      name: 'Garments',
      desc: 'Apparel and lifestyle fashion',
      icon: Shirt,
      accentBg: 'bg-[#FFD0DD]/50',
      iconColor: 'text-[#FD849F]',
    },
    {
      name: 'Gift Shops',
      desc: 'Presents, celebrations and curated gifts',
      icon: Gift,
      accentBg: 'bg-[#FFE4E6]',
      iconColor: 'text-[#F43F5E]',
    },
    {
      name: 'Shoe Stores',
      desc: 'Footwear for every daily occasion',
      icon: Footprints,
      accentBg: 'bg-[#D8C9ED]/50',
      iconColor: 'text-[#6651BF]',
    },
    {
      name: 'Sweet Shops',
      desc: 'Traditional confectionery and snacks',
      icon: Candy,
      accentBg: 'bg-[#FEF08A]/60',
      iconColor: 'text-[#EAB308]',
    },
    {
      name: 'Bakery',
      desc: 'Fresh baked breads, cakes and pastries',
      icon: Cake,
      accentBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#F97316]',
    },
    {
      name: 'Electronics',
      desc: 'Smart home appliances and gadgets',
      icon: Zap,
      accentBg: 'bg-[#DBEAFE]',
      iconColor: 'text-[#3048C8]',
    },
    {
      name: 'Hospitals',
      desc: 'Clinical healthcare and consultation services',
      icon: Activity,
      accentBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#16A34A]',
    },
    {
      name: 'Classes',
      desc: 'Education, tuition and coaching centers',
      icon: GraduationCap,
      accentBg: 'bg-[#D8C9ED]/50',
      iconColor: 'text-[#6651BF]',
    },
  ]

  return (
    <section id="categories" className="py-20 sm:py-28 bg-[#FFF8FA] relative overflow-hidden">
      {/* Background Soft Accent Glows */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-[#FFD0DD]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-white border border-[#E8DDE3] text-[#FD849F] text-xs font-extrabold uppercase tracking-wider inline-block mb-3 shadow-xs">
            Everyday Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#05062A] tracking-tight">
            Shopping <span className="text-[#FD849F]">Categories</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555568] leading-relaxed">
            Discover 14 core shopping categories where your everyday purchases can unlock continuous benefits.
          </p>
        </div>

        {/* 14 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -6, boxShadow: '0 12px 35px rgba(253,132,159,0.15)' }}
                className="p-6 rounded-[22px] bg-white border border-[#E8DDE3] shadow-[0_8px_30px_rgba(5,6,42,0.05)] transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Category Visual Icon with Soft Accent */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${cat.accentBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 ${cat.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-black text-[#05062A] tracking-tight group-hover:text-[#FD849F] transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[#555568] mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8DDE3] flex items-center justify-between text-[11px] text-[#555568]">
                  <span className="font-semibold">Eligible Category</span>
                  <span className="w-2 h-2 rounded-full bg-[#FD849F]" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#555568] leading-relaxed">
            *Categories shown represent illustrative retail segments within the promotional framework. Participation of specific merchants is subject to official qualification and applicable program terms.
          </p>
        </div>
      </div>
    </section>
  )
}
