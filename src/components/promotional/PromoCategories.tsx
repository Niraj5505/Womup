import React from 'react'
import { motion } from 'framer-motion'
import {
  Carrot,
  Store,
  Pill,
  Scissors,
  Shirt,
  Tv,
  Footprints,
  BookOpen,
  UtensilsCrossed,
  Cookie,
  Wrench,
  Grid,
  ArrowRight,
} from 'lucide-react'

interface PromoCategoriesProps {
  onOpenJoinModal?: () => void
}

export const PromoCategories: React.FC<PromoCategoriesProps> = ({ onOpenJoinModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleViewAll = () => {
    if (onOpenJoinModal) {
      onOpenJoinModal()
    } else {
      scrollTo('#contact')
    }
  }

  // 12 Exact Categories from Mockup 6 (Wide Range of Local Shops)
  const categories = [
    {
      name: 'Vegetables',
      icon: Carrot,
      bgGradient: 'from-emerald-400 to-green-600',
      tagColor: 'bg-emerald-50 text-emerald-700',
      imageDesc: 'Fresh Farm Greens',
    },
    {
      name: 'Grocery',
      icon: Store,
      bgGradient: 'from-amber-400 to-orange-500',
      tagColor: 'bg-amber-50 text-amber-700',
      imageDesc: 'Daily Kirana & Staples',
    },
    {
      name: 'Medical',
      icon: Pill,
      bgGradient: 'from-cyan-400 to-blue-600',
      tagColor: 'bg-blue-50 text-blue-700',
      imageDesc: 'Pharmacy & Wellness',
    },
    {
      name: 'Salon',
      icon: Scissors,
      bgGradient: 'from-pink-400 to-rose-500',
      tagColor: 'bg-rose-50 text-rose-700',
      imageDesc: 'Beauty & Grooming',
    },
    {
      name: 'Garments',
      icon: Shirt,
      bgGradient: 'from-purple-400 to-indigo-600',
      tagColor: 'bg-purple-50 text-purple-700',
      imageDesc: 'Apparel & Fashion',
    },
    {
      name: 'Electronics',
      icon: Tv,
      bgGradient: 'from-blue-500 to-indigo-700',
      tagColor: 'bg-indigo-50 text-indigo-700',
      imageDesc: 'Gadgets & Home Tech',
    },
    {
      name: 'Footwear',
      icon: Footprints,
      bgGradient: 'from-stone-500 to-neutral-700',
      tagColor: 'bg-stone-50 text-stone-700',
      imageDesc: 'Shoes & Daily Wear',
    },
    {
      name: 'Stationery',
      icon: BookOpen,
      bgGradient: 'from-teal-400 to-emerald-600',
      tagColor: 'bg-teal-50 text-teal-700',
      imageDesc: 'Books & Supplies',
    },
    {
      name: 'Restaurant',
      icon: UtensilsCrossed,
      bgGradient: 'from-red-400 to-amber-600',
      tagColor: 'bg-orange-50 text-orange-700',
      imageDesc: 'Dining & Delicacies',
    },
    {
      name: 'Sweet Shop',
      icon: Cookie,
      bgGradient: 'from-amber-500 to-yellow-600',
      tagColor: 'bg-yellow-50 text-yellow-800',
      imageDesc: 'Mithai & Traditional Sweets',
    },
    {
      name: 'Hardware',
      icon: Wrench,
      bgGradient: 'from-slate-500 to-slate-700',
      tagColor: 'bg-slate-50 text-slate-700',
      imageDesc: 'Tools & Construction',
    },
    {
      name: 'More',
      icon: Grid,
      bgGradient: 'from-[#FF007A] to-purple-600',
      tagColor: 'bg-pink-50 text-[#FF007A]',
      imageDesc: '50+ Local Sectors',
    },
  ]

  return (
    <section
      id="categories"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/15 to-white relative overflow-hidden border-b border-pink-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            Wide Range of <span className="text-[#1E3A8A]">Local Shops</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-semibold tracking-wide">
            Everything you need, near you
          </p>
        </div>

        {/* 12 Category Grid (4 cols on lg, 3 on md, 2 on sm) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={handleViewAll}
                className="bg-white rounded-3xl p-5 border border-pink-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-pink-300 hover:shadow-[0_12px_28px_rgba(255,0,122,0.1)] transition-all flex flex-col items-center text-center cursor-pointer group"
              >
                {/* Visual Icon Tile */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.bgGradient} text-white flex items-center justify-center mb-3.5 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Name */}
                <h3 className="text-base font-black text-[#0A0E2A] group-hover:text-[#FF007A] transition-colors">
                  {cat.name}
                </h3>

                {/* Quick Subtitle */}
                <span className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {cat.imageDesc}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleViewAll}
            className="px-9 py-3.5 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white text-sm sm:text-base font-bold shadow-[0_10px_25px_rgba(30,58,138,0.3)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View All Shops</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
