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
      accentBg: 'bg-emerald-50 border border-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      name: 'Vegetables',
      desc: 'Fresh farm produce and daily greens',
      icon: Carrot,
      accentBg: 'bg-green-50 border border-green-100',
      iconColor: 'text-green-600',
    },
    {
      name: 'Medical',
      desc: 'Eligible healthcare purchases and medicines',
      icon: Pill,
      accentBg: 'bg-pink-50 border border-pink-100',
      iconColor: 'text-[#FD849F]',
    },
    {
      name: 'Restaurants',
      desc: 'Dining and family food experiences',
      icon: Utensils,
      accentBg: 'bg-amber-50 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      name: 'Beauty & Salon',
      desc: 'Beauty, grooming and personal care',
      icon: Scissors,
      accentBg: 'bg-rose-50 border border-rose-100',
      iconColor: 'text-rose-600',
    },
    {
      name: 'Hotels',
      desc: 'Hospitality, stays and travel leisure',
      icon: Building,
      accentBg: 'bg-indigo-50 border border-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      name: 'Garments',
      desc: 'Apparel and lifestyle fashion',
      icon: Shirt,
      accentBg: 'bg-purple-50 border border-purple-100',
      iconColor: 'text-[#6651BF]',
    },
  ]

  const row2Categories: CategoryItem[] = [
    {
      name: 'Gift Shops',
      desc: 'Presents, celebrations and curated gifts',
      icon: Gift,
      accentBg: 'bg-pink-50 border border-pink-100',
      iconColor: 'text-[#FD849F]',
    },
    {
      name: 'Shoe Stores',
      desc: 'Footwear for every daily occasion',
      icon: Footprints,
      accentBg: 'bg-sky-50 border border-sky-100',
      iconColor: 'text-sky-600',
    },
    {
      name: 'Sweet Shops',
      desc: 'Traditional confectionery and snacks',
      icon: Candy,
      accentBg: 'bg-orange-50 border border-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      name: 'Bakery',
      desc: 'Fresh baked breads, cakes and pastries',
      icon: Cake,
      accentBg: 'bg-amber-50 border border-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      name: 'Electronics',
      desc: 'Smart home appliances and gadgets',
      icon: Zap,
      accentBg: 'bg-blue-50 border border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Hospitals',
      desc: 'Clinical healthcare and consultation services',
      icon: Activity,
      accentBg: 'bg-teal-50 border border-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      name: 'Classes',
      desc: 'Education, tuition and coaching centers',
      icon: GraduationCap,
      accentBg: 'bg-violet-50 border border-violet-100',
      iconColor: 'text-[#6651BF]',
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
    <section id="categories" className="py-16 sm:py-24 bg-[#FAFAFC] relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Centered Architectural Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#6651BF] mb-3 shadow-2xs">
            <span>04</span>
            <span className="text-purple-300">•</span>
            <span>Approved Retail Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#090A15] tracking-tight">
            14 eligible{' '}
            <span className="bg-gradient-to-r from-[#6651BF] to-[#FD849F] bg-clip-text text-transparent font-extrabold">
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
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#FAFAFC] via-[#FAFAFC]/80 to-transparent z-20" />

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
                className="flex flex-col gap-3 sm:gap-4 shrink-0 w-[155px] sm:w-[175px] md:w-[190px]"
              >
                {/* Top Row Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs transition-all duration-200 flex flex-col justify-between group cursor-default hover:border-[#FD849F]/50 hover:shadow-[0_8px_25px_rgba(253,132,159,0.12)] h-[210px] sm:h-[230px]">
                  <div>
                    {/* Category Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${col.top.accentBg} flex items-center justify-center mb-3 sm:mb-4 shadow-2xs group-hover:scale-105 transition-transform`}
                    >
                      <col.top.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${col.top.iconColor}`} />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#6651BF] transition-colors">
                      {col.top.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                      {col.top.desc}
                    </p>
                  </div>

                  <div className="mt-2 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                    <span>Verified Sector</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Bottom Row Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs transition-all duration-200 flex flex-col justify-between group cursor-default hover:border-[#FD849F]/50 hover:shadow-[0_8px_25px_rgba(253,132,159,0.12)] h-[210px] sm:h-[230px]">
                  <div>
                    {/* Category Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${col.bottom.accentBg} flex items-center justify-center mb-3 sm:mb-4 shadow-2xs group-hover:scale-105 transition-transform`}
                    >
                      <col.bottom.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${col.bottom.iconColor}`} />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#6651BF] transition-colors">
                      {col.bottom.name}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                      {col.bottom.desc}
                    </p>
                  </div>

                  <div className="mt-2 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                    <span>Verified Sector</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 font-mono">
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
