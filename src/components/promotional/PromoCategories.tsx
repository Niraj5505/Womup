import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

  // 12 Exact Categories from Mockup 6
  const categories = [
    {
      name: 'Vegetables',
      image: '/images/categories/exact_vegetables.png',
    },
    {
      name: 'Grocery',
      image: '/images/categories/exact_grocery.png',
    },
    {
      name: 'Medical',
      image: '/images/categories/exact_medical.png',
    },
    {
      name: 'Salon',
      image: '/images/categories/exact_salon.png',
    },
    {
      name: 'Garments',
      image: '/images/categories/exact_garments.png',
    },
    {
      name: 'Electronics',
      image: '/images/categories/exact_electronics.png',
    },
    {
      name: 'Footwear',
      image: '/images/categories/exact_footwear.png',
    },
    {
      name: 'Stationery',
      image: '/images/categories/exact_stationery.png',
    },
    {
      name: 'Restaurant',
      image: '/images/categories/exact_restaurant.png',
    },
    {
      name: 'Sweet Shop',
      image: '/images/categories/exact_sweetshop.png',
    },
    {
      name: 'Hardware',
      image: '/images/categories/exact_hardware.png',
    },
    {
      name: 'More',
      image: '/images/categories/exact_more.png',
    },
  ]

  return (
    <section
      id="categories"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/15 to-white relative overflow-hidden border-b border-pink-100/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Mockup 6 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0E2A] tracking-tight">
            Wide Range of <span className="text-[#FF007A]">Local Shops</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-bold tracking-wide">
            Everything you need, near you
          </p>
        </div>

        {/* 12 Category Grid (4 cols on lg, 3 on md, 2 on sm) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              onClick={handleViewAll}
              className="bg-white rounded-3xl p-3.5 sm:p-4 border border-pink-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-pink-300 hover:shadow-[0_12px_28px_rgba(255,0,122,0.12)] transition-all flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Image Box */}
              <div className="w-full aspect-4/3 rounded-2xl overflow-hidden mb-3 bg-slate-50 border border-slate-100 flex items-center justify-center p-1">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-300"
                />
              </div>

              {/* Bold Category Name from Mockup */}
              <h3 className="text-sm sm:text-base font-black text-[#0A0E2A] group-hover:text-[#FF007A] transition-colors">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button: View All Shops in Pink Pill */}
        <div className="flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleViewAll}
            className="px-10 py-3.5 rounded-full bg-gradient-to-r from-[#FF007A] to-[#E11D48] hover:from-[#E11D48] hover:to-[#BE185D] text-white text-sm sm:text-base font-bold shadow-[0_8px_25px_rgba(255,0,122,0.35)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View All Shops</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
