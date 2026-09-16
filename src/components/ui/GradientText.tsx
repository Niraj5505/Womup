import React from 'react'

export interface GradientTextProps {
  children: React.ReactNode
  variant?: 'primary' | 'gold' | 'purple' | 'pink'
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'span',
}) => {
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-brand-purple-light via-brand-magenta to-brand-pink bg-clip-text text-transparent',
    gold:
      'bg-gradient-to-r from-brand-gold-champagne via-brand-gold to-brand-gold-antique bg-clip-text text-transparent',
    purple:
      'bg-gradient-to-r from-white via-brand-purple-light to-brand-purple bg-clip-text text-transparent',
    pink:
      'bg-gradient-to-r from-brand-pink-soft via-brand-pink to-brand-magenta bg-clip-text text-transparent',
  }[variant]

  return <Component className={`font-display ${variantStyles} ${className}`}>{children}</Component>
}
