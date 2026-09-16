import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

export type CardVariant = 'default' | 'elevated' | 'rewards' | 'purple' | 'subtle'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  variant?: CardVariant
  padding?: CardPadding
  interactive?: boolean
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  className = '',
  ...props
}) => {
  const variantStyles: Record<CardVariant, string> = {
    // Standard clean e-commerce surface
    default: 'bg-white border border-slate-200 shadow-womup-card text-slate-900',
    // Elevated floating card
    elevated: 'bg-white border border-slate-100 shadow-womup-card-hover text-slate-900',
    // Warm gold rewards card (Cashback, coins, exclusive perks)
    rewards:
      'bg-gradient-to-b from-amber-50/70 via-white to-white border border-amber-200/90 shadow-womup-card text-slate-900',
    // Soft purple brand card
    purple:
      'bg-gradient-to-b from-purple-50/70 via-white to-white border border-purple-200/90 shadow-womup-card text-slate-900',
    // Minimal slate container
    subtle: 'bg-slate-50/90 border border-slate-200/80 text-slate-800',
  }

  const paddingStyles: Record<CardPadding, string> = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const interactiveAnimation = interactive
    ? {
        whileHover: { y: -3, transition: { duration: 0.18 } },
        whileTap: { y: 0 },
      }
    : {}

  return (
    <motion.div
      {...interactiveAnimation}
      className={`relative rounded-xl transition-all duration-200 ${
        variantStyles[variant]
      } ${paddingStyles[padding]} ${interactive ? 'cursor-pointer hover:shadow-womup-card-hover hover:border-slate-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
