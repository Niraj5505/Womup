import React from 'react'
import { motion } from 'framer-motion'

interface PromoCategoriesProps {
  onOpenJoinModal?: () => void
}

const categories = [
  { name: 'Vegetables', img: '/images/categories/cat_vegetables.jpg', emoji: '🥦' },
  { name: 'Grocery', img: '/images/categories/cat_grocery.jpg', emoji: '🛒' },
  { name: 'Medical', img: '/images/categories/cat_medical.jpg', emoji: '💊' },
  { name: 'Salon', img: '/images/categories/cat_salon.jpg', emoji: '✂️' },
  { name: 'Garments', img: '/images/categories/cat_garments.jpg', emoji: '👗' },
  { name: 'Electronics', img: '/images/categories/cat_electronics.jpg', emoji: '💻' },
  { name: 'Footwear', img: '/images/categories/cat_footwear.jpg', emoji: '👟' },
  { name: 'Stationery', img: '/images/categories/cat_stationery.jpg', emoji: '📚' },
  { name: 'Restaurant', img: '/images/categories/cat_restaurant.jpg', emoji: '🍽️' },
  { name: 'Sweet Shop', img: '/images/categories/cat_sweetshop.jpg', emoji: '🍮' },
  { name: 'Hardware', img: '/images/categories/cat_hardware.jpg', emoji: '🔧' },
  { name: 'More', img: '/images/categories/cat_more.png', emoji: '🏪' },
]

export const PromoCategories: React.FC<PromoCategoriesProps> = ({ onOpenJoinModal }) => {
  const handleViewAll = () => {
    if (onOpenJoinModal) onOpenJoinModal()
    else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="categories" className="relative py-16 sm:py-24 overflow-hidden bg-categories">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,0,122,0.06) 0%, transparent 70%)', transform: 'translate(-20%,-20%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight mb-2"
            style={{ color: '#0A0E2A' }}
          >
            Wide Range of <span style={{ color: '#FF007A' }}>Local Shops</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base font-semibold"
            style={{ color: '#6B7280' }}
          >
            Everything you need, near you
          </motion.p>
        </div>

        {/* 4×3 grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="rounded-2xl overflow-hidden group cursor-pointer glass border border-slate-100 hover:border-pink-200 transition-all"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1', background: '#f9f0f5' }}>
                {cat.img ? (
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={e => {
                      const t = e.target as HTMLImageElement
                      t.style.display = 'none'
                      t.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                ) : null}
                <div className={`${cat.img ? 'hidden' : ''} w-full h-full flex items-center justify-center text-4xl`}>
                  {cat.emoji}
                </div>
                {/* "More" card special style */}
                {cat.name === 'More' && (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl" style={{ background: 'linear-gradient(135deg,#fff0f5,#f5f0ff)' }}>
                    🏪
                  </div>
                )}
              </div>
              {/* Label */}
              <div className="py-2 px-2 text-center">
                <span className="text-xs sm:text-sm font-black" style={{ color: '#0A0E2A' }}>{cat.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleViewAll}
            type="button"
            className="px-10 py-3.5 rounded-full text-white font-black text-base cursor-pointer"
            style={{ background: 'linear-gradient(135deg,#FF007A,#c7005f)', boxShadow: '0 6px 22px rgba(255,0,122,0.38)' }}
          >
            View All Shops
          </motion.button>
        </div>
      </div>
    </section>
  )
}
