import React from 'react'
import { motion } from 'framer-motion'
import {
  ShoppingBasket,
  Leaf,
  Pill,
  UtensilsCrossed,
  Scissors,
  Hotel,
  Shirt,
  Gift,
  Footprints,
  Candy,
  CakeSlice,
  Zap,
  Activity,
  GraduationCap,
  Coins,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Container } from '../ui/Container.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { IconBox, type IconBoxColor } from '../ui/IconBox.tsx'
import { Button } from '../ui/Button.tsx'

export interface ShoppingCategory {
  id: number
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: IconBoxColor
  badgeText: string
}

const shoppingCategories: ShoppingCategory[] = [
  {
    id: 1,
    name: 'Kirana Store',
    description: 'Daily groceries, packaged foods & household essentials with Coin redemption.',
    icon: ShoppingBasket,
    color: 'purple',
    badgeText: 'Daily Grocery',
  },
  {
    id: 2,
    name: 'Vegetable Store',
    description: 'Fresh farm vegetables, seasonal fruits & green produce at local partner outlets.',
    icon: Leaf,
    color: 'gold',
    badgeText: 'Farm Fresh',
  },
  {
    id: 3,
    name: 'Medical Store',
    description: 'Prescription medicines, healthcare supplies & wellness essentials.',
    icon: Pill,
    color: 'magenta',
    badgeText: 'Healthcare',
  },
  {
    id: 4,
    name: 'Restaurant',
    description: 'Family dining, quick bites, cafes & delicious meals with coin benefits.',
    icon: UtensilsCrossed,
    color: 'pink',
    badgeText: 'Food & Dining',
  },
  {
    id: 5,
    name: 'Beauty Parlour / Salon',
    description: 'Hair care, skincare treatments & personal grooming services.',
    icon: Scissors,
    color: 'magenta',
    badgeText: 'Self Care',
  },
  {
    id: 6,
    name: 'Hotel',
    description: 'Weekend getaways, business stays & comfortable hospitality bookings.',
    icon: Hotel,
    color: 'purple',
    badgeText: 'Hospitality',
  },
  {
    id: 7,
    name: 'Garment Shop',
    description: 'Ethnic fashion, casual wear, kidswear & trending seasonal outfits.',
    icon: Shirt,
    color: 'pink',
    badgeText: 'Fashion',
  },
  {
    id: 8,
    name: 'Gift Shop',
    description: 'Festive novelties, customized gift hampers, toys & celebration decor.',
    icon: Gift,
    color: 'gold',
    badgeText: 'Celebrations',
  },
  {
    id: 9,
    name: 'Shoe Store',
    description: 'Formal, casual & athletic footwear for men, women & children.',
    icon: Footprints,
    color: 'purple',
    badgeText: 'Footwear',
  },
  {
    id: 10,
    name: 'Sweet Shop',
    description: 'Traditional Indian mithai, festive sweets, namkeen & celebration boxes.',
    icon: Candy,
    color: 'gold',
    badgeText: 'Indian Mithai',
  },
  {
    id: 11,
    name: 'Bakery',
    description: 'Freshly baked artisan breads, customized cakes, pastries & cookies.',
    icon: CakeSlice,
    color: 'pink',
    badgeText: 'Bakes & Cakes',
  },
  {
    id: 12,
    name: 'Electric Shop',
    description: 'Small home appliances, electrical lighting, cables & electronic gadgets.',
    icon: Zap,
    color: 'gold',
    badgeText: 'Electronics',
  },
  {
    id: 13,
    name: 'Hospital',
    description: 'Diagnostic centers, clinical checkups, consultations & nursing care.',
    icon: Activity,
    color: 'purple',
    badgeText: 'Medical Care',
  },
  {
    id: 14,
    name: 'Classes',
    description: 'Coaching centers, skill training academies, music & academic tuition.',
    icon: GraduationCap,
    color: 'magenta',
    badgeText: 'Education',
  },
]

export interface ShoppingCoinSectionProps {
  onCategoryClick?: (category: ShoppingCategory) => void
}

export const ShoppingCoinSection: React.FC<ShoppingCoinSectionProps> = ({ onCategoryClick }) => {
  return (
    <section id="shopping-coin" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge={
              <Badge variant="gold" size="md" icon={<Coins className="w-3.5 h-3.5 text-amber-600" />}>
                Everyday Use Categories
              </Badge>
            }
            title={
              <span>
                <span className="font-inr text-womup-purple font-black">₹2,000</span> Shopping Coin
              </span>
            }
            description="Shop for your everyday needs and use Shopping Coin according to the WOMUP model."
            align="left"
            action={
              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>14 Everyday Categories Active</span>
              </div>
            }
          />
        </div>

        {/* Responsive Grid:
            Desktop: 4 columns (lg:grid-cols-4)
            Tablet: 2-3 columns (sm:grid-cols-2 md:grid-cols-3)
            Mobile: 2 columns (grid-cols-2)
        */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {shoppingCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
              >
                <Card
                  variant="default"
                  interactive
                  padding="sm"
                  className="h-full flex flex-col justify-between group border-slate-200 hover:border-womup-purple/30 bg-white hover:shadow-womup-card-hover transition-all duration-200"
                  onClick={() => onCategoryClick?.(category)}
                >
                  <div>
                    {/* Top Row: Icon and Micro-badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <IconBox
                        color={category.color}
                        size="md"
                        shape="squircle"
                        className="group-hover:scale-105 transition-transform duration-200"
                      >
                        <Icon className="w-5 h-5" />
                      </IconBox>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded-md hidden xs:inline-block truncate">
                        {category.badgeText}
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-womup-purple transition-colors leading-snug">
                      {category.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  {/* Bottom Coin Benefit Strip */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
                      <Coins className="w-3 h-3 text-amber-500" />
                      <span>Use Coins</span>
                    </span>

                    <span className="text-slate-400 group-hover:text-womup-purple group-hover:translate-x-0.5 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Section Bottom Model Note & CTA Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-50/80 via-white to-amber-50/80 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3.5 max-w-2xl">
            <div className="w-10 h-10 rounded-xl bg-womup-purple text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
              <Coins className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Everyday Spending Transformed Into Rewarding Value
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Whether you visit your local neighborhood kirana store, book clinical visits, or dine out,
                the WOMUP shopping coin model is structured around real recurring household needs across India.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              fullWidth
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => {
                const el = document.getElementById('home')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Start Earning Coins
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
