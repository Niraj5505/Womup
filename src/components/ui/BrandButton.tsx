import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

export interface BrandButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: 'primary' | 'gold' | 'purple' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

export const BrandButton: React.FC<BrandButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const variantStyles = {
    // Primary Purple -> Magenta -> Pink gradient
    primary:
      'bg-brand-gradient-primary text-white font-semibold shadow-glow-magenta hover:shadow-[0_0_40px_-5px_rgba(217,70,239,0.6)] border border-white/20',
    // Luxury Gold
    gold:
      'bg-brand-gradient-gold text-brand-obsidian font-bold shadow-glow-gold hover:shadow-[0_0_40px_-5px_rgba(229,169,60,0.6)] border border-brand-gold-champagne/40',
    // Rich Purple
    purple:
      'bg-brand-purple hover:bg-brand-purple-vivid text-white font-semibold shadow-glow-purple border border-brand-purple-light/30',
    // Glass Outline
    outline:
      'bg-white/5 hover:bg-white/10 text-white font-medium border border-white/15 hover:border-brand-magenta/40 backdrop-blur-md',
    // Subtle Ghost
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium',
  }[variant]

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
  }[size]

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center justify-center transition-all cursor-pointer select-none ${variantStyles} ${sizeStyles} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  )
}
