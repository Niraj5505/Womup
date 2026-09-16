import React from 'react'

export type BadgeVariant = 'purple' | 'magenta' | 'pink' | 'gold' | 'success' | 'outline'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: React.ReactNode
  dot?: boolean
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'md',
  icon,
  dot = false,
  className = '',
}) => {
  const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
    purple: {
      container: 'bg-purple-50 text-purple-900 border-purple-200',
      dot: 'bg-purple-600',
    },
    magenta: {
      container: 'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200',
      dot: 'bg-fuchsia-600',
    },
    pink: {
      container: 'bg-pink-50 text-pink-900 border-pink-200',
      dot: 'bg-pink-600',
    },
    gold: {
      container: 'bg-amber-50 text-amber-900 border-amber-300 font-semibold shadow-xs',
      dot: 'bg-amber-500',
    },
    success: {
      container: 'bg-emerald-50 text-emerald-900 border-emerald-200 font-medium',
      dot: 'bg-emerald-500',
    },
    outline: {
      container: 'bg-white text-slate-700 border-slate-200',
      dot: 'bg-slate-400',
    },
  }

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-[11px] px-2 py-0.5 gap-1 font-medium',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
  }

  const currentVariant = variantStyles[variant]

  return (
    <span
      className={`inline-flex items-center rounded-full border leading-none transition-colors select-none ${
        currentVariant.container
      } ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${currentVariant.dot} flex-shrink-0`} />}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
