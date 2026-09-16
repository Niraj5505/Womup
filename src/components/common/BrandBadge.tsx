import React from 'react'

interface BrandBadgeProps {
  children: React.ReactNode
  variant?: 'purple' | 'magenta' | 'pink' | 'gold' | 'outline'
  size?: 'sm' | 'md'
  className?: string
  icon?: React.ReactNode
}

export const BrandBadge: React.FC<BrandBadgeProps> = ({
  children,
  variant = 'magenta',
  size = 'md',
  className = '',
  icon,
}) => {
  const variantStyles = {
    purple: 'bg-brand-purple-deep/40 text-brand-purple-light border-brand-purple/40 shadow-[0_0_15px_-3px_rgba(124,58,237,0.3)]',
    magenta: 'bg-brand-magenta-deep/30 text-brand-magenta-light border-brand-magenta/40 shadow-[0_0_15px_-3px_rgba(192,38,211,0.3)]',
    pink: 'bg-brand-pink-500/15 text-brand-pink-300 border-brand-pink-500/30 shadow-[0_0_15px_-3px_rgba(236,72,153,0.3)]',
    gold: 'bg-brand-gold-antique/25 text-brand-gold-champagne border-brand-gold/40 shadow-[0_0_15px_-3px_rgba(229,169,60,0.3)]',
    outline: 'bg-white/5 text-slate-200 border-white/10 hover:border-white/20',
  }[variant]

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs md:text-sm px-3.5 py-1 gap-2',
  }[size]

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border backdrop-blur-md transition-colors ${variantStyles} ${sizeStyles} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
