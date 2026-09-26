import React, { useRef, useState, useEffect } from 'react'
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

interface CategoryItem {
  name: string
  desc: string
  icon: React.ElementType
  accentBg: string
  iconColor: string
}

export const PromoCategories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftPos, setScrollLeftPos] = useState(0)

  // 14 Categories split into 2 rows (matching the original 2x7 layout)
  const row1Categories: CategoryItem[] = [
    {
      name: 'Grocery',
      desc: 'Everyday household shopping and pantry staples',
      icon: Store,
      accentBg: 'bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_4px_14px_rgba(16,185,129,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Vegetables',
      desc: 'Fresh farm produce and daily greens',
      icon: Carrot,
      accentBg: 'bg-gradient-to-br from-lime-500 to-emerald-600 shadow-[0_4px_14px_rgba(34,197,94,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Medical',
      desc: 'Eligible healthcare purchases and medicines',
      icon: Pill,
      accentBg: 'bg-gradient-to-br from-[#FF1E7A] to-rose-600 shadow-[0_4px_14px_rgba(255,30,122,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Restaurants',
      desc: 'Dining and family food experiences',
      icon: Utensils,
      accentBg: 'bg-gradient-to-br from-amber-400 to-orange-600 shadow-[0_4px_14px_rgba(245,158,11,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Beauty & Salon',
      desc: 'Beauty, grooming and personal care',
      icon: Scissors,
      accentBg: 'bg-gradient-to-br from-pink-400 to-fuchsia-600 shadow-[0_4px_14px_rgba(217,70,239,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Hotels',
      desc: 'Hospitality, stays and travel leisure',
      icon: Building,
      accentBg: 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_4px_14px_rgba(99,102,241,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Garments',
      desc: 'Apparel and lifestyle fashion',
      icon: Shirt,
      accentBg: 'bg-gradient-to-br from-violet-600 to-indigo-700 shadow-[0_4px_14px_rgba(124,58,237,0.35)]',
      iconColor: 'text-white',
    },
  ]

  const row2Categories: CategoryItem[] = [
    {
      name: 'Gift Shops',
      desc: 'Presents, celebrations and curated gifts',
      icon: Gift,
      accentBg: 'bg-gradient-to-br from-rose-400 to-pink-600 shadow-[0_4px_14px_rgba(244,63,94,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Shoe Stores',
      desc: 'Footwear for every daily occasion',
      icon: Footprints,
      accentBg: 'bg-gradient-to-br from-sky-400 to-blue-600 shadow-[0_4px_14px_rgba(14,165,233,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Sweet Shops',
      desc: 'Traditional confectionery and snacks',
      icon: Candy,
      accentBg: 'bg-gradient-to-br from-amber-400 to-yellow-500 shadow-[0_4px_14px_rgba(245,158,11,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Bakery',
      desc: 'Fresh baked breads, cakes and pastries',
      icon: Cake,
      accentBg: 'bg-gradient-to-br from-orange-400 to-amber-600 shadow-[0_4px_14px_rgba(249,115,22,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Electronics',
      desc: 'Smart home appliances and gadgets',
      icon: Zap,
      accentBg: 'bg-gradient-to-br from-blue-500 to-cyan-600 shadow-[0_4px_14px_rgba(59,130,246,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Hospitals',
      desc: 'Clinical healthcare and consultation services',
      icon: Activity,
      accentBg: 'bg-gradient-to-br from-teal-400 to-cyan-600 shadow-[0_4px_14px_rgba(20,184,166,0.35)]',
      iconColor: 'text-white',
    },
    {
      name: 'Classes',
      desc: 'Education, tuition and coaching centers',
      icon: GraduationCap,
      accentBg: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_4px_14px_rgba(139,92,246,0.35)]',
      iconColor: 'text-white',
    },
  ]

  // Pair top and bottom into 2-card columns
  const columnPairs = row1Categories.map((topItem, index) => ({
    top: topItem,
    bottom: row2Categories[index],
  }))

  // Duplicate 3 times for seamless infinite side-scrolling
  const repeatedColumns = [...columnPairs, ...columnPairs, ...columnPairs]

  // Continuous buttery-smooth 60fps auto-scroll
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationFrameId: number
    const speed = 0.75 // Pixels per frame

    const autoScrollLoop = () => {
      if (!isHovered && !isDragging && container) {
        container.scrollLeft += speed

        // Seamless infinite wrap when one set of columns completes
        const oneThird = container.scrollWidth / 3
        if (container.scrollLeft >= oneThird) {
          container.scrollLeft -= oneThird
        }
      }
      animationFrameId = requestAnimationFrame(autoScrollLoop)
    }

    animationFrameId = requestAnimationFrame(autoScrollLoop)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, isDragging])

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeftPos(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk
  }

  // Touch handlers for mobile
  const handleTouchStart = () => {
    setIsHovered(true)
  }

  const handleTouchEnd = () => {
    setIsHovered(false)
  }

  return (
    <section id="categories" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF7FD] to-white relative overflow-hidden border-b border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Centered Architectural Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 border border-purple-200/90 text-xs font-bold text-purple-800 mb-3 shadow-xs">
            <span>04</span>
            <span className="text-purple-300">•</span>
            <span>Approved Retail Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0A0724] tracking-tight">
            14 eligible{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#FF1E7A] to-[#F59E0B] bg-clip-text text-transparent font-extrabold">
              shopping sectors.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everyday purchases across verified local merchants unlock continuous purchasing power.
          </p>
        </div>

        {/* 2-Line Horizontal Side Auto-Scroll Container */}
        <div
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle Left & Right Soft Edge Gradient Fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#FAF7FD] via-[#FAF7FD]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#FAF7FD] via-[#FAF7FD]/80 to-transparent z-20" />

          {/* Scroll Track (2-Line Vertical Pairs in Horizontal Flex) */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-3 sm:gap-4 overflow-x-auto pb-4 pt-1 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            } [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
          >
            {repeatedColumns.map((col, colIndex) => (
              <div
                key={`col-${colIndex}`}
                className="flex flex-col gap-3 sm:gap-4 shrink-0 w-[160px] sm:w-[180px] md:w-[195px]"
              >
                {/* Top Row Card */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-purple-100/90 shadow-[0_4px_20px_rgba(124,58,237,0.04)] transition-all duration-300 flex flex-col justify-between group cursor-default hover:border-pink-300 hover:shadow-[0_12px_32px_rgba(255,30,122,0.15)] h-[215px] sm:h-[235px]">
                  <div>
                    {/* Category Icon */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${col.top.accentBg} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <col.top.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${col.top.iconColor}`} />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0A0724] tracking-tight leading-tight group-hover:text-[#7C3AED] transition-colors">
                      {col.top.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                      {col.top.desc}
                    </p>
                  </div>

                  <div className="mt-2 pt-2.5 border-t border-purple-50 flex items-center justify-between text-[11px] font-medium text-slate-500">
                    <span className="text-slate-400">Verified</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Bottom Row Card */}
                <div className="p-4 sm:p-5 rounded-3xl bg-white border border-purple-100/90 shadow-[0_4px_20px_rgba(124,58,237,0.04)] transition-all duration-300 flex flex-col justify-between group cursor-default hover:border-pink-300 hover:shadow-[0_12px_32px_rgba(255,30,122,0.15)] h-[215px] sm:h-[235px]">
                  <div>
                    {/* Category Icon */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${col.bottom.accentBg} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <col.bottom.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${col.bottom.iconColor}`} />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0A0724] tracking-tight leading-tight group-hover:text-[#7C3AED] transition-colors">
                      {col.bottom.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                      {col.bottom.desc}
                    </p>
                  </div>

                  <div className="mt-2 pt-2.5 border-t border-purple-50 flex items-center justify-between text-[11px] font-medium text-slate-500">
                    <span className="text-slate-400">Verified</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            *Categories shown represent approved retail sectors within the WOMUP rewards framework. Merchant qualification is verified against program criteria.
          </p>
        </div>
      </div>
    </section>
  )
}
