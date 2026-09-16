import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

export interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  variant?: 'default' | 'gold' | 'purple' | 'magenta'
  interactive?: boolean
  className?: string
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  interactive = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    default:
      'bg-gradient-to-b from-brand-surface/80 to-brand-night/80 border-white/10 hover:border-brand-magenta/30',
    gold:
      'bg-gradient-to-b from-brand-surface/90 to-brand-night/90 border-brand-gold/30 hover:border-brand-gold/60 shadow-[0_0_30px_-10px_rgba(229,169,60,0.2)]',
    purple:
      'bg-gradient-to-b from-brand-surface/90 to-brand-night/90 border-brand-purple/30 hover:border-brand-purple/60 shadow-[0_0_30px_-10px_rgba(124,58,237,0.2)]',
    magenta:
      'bg-gradient-to-b from-brand-surface/90 to-brand-night/90 border-brand-magenta/30 hover:border-brand-magenta/60 shadow-[0_0_30px_-10px_rgba(192,38,211,0.2)]',
  }[variant]

  const interactiveAnimation = interactive
    ? {
        whileHover: { y: -4, transition: { duration: 0.2 } },
        whileTap: { y: -1 },
      }
    : {}

  return (
    <motion.div
      {...interactiveAnimation}
      className={`relative rounded-2xl p-6 backdrop-blur-xl border transition-colors ${variantStyles} ${
        interactive ? 'cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {/* Top subtle highlight shimmer */}
      <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  )
}
