import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export type ButtonVariant = 'primary' | 'magenta' | 'gold' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const variantStyles: Record<ButtonVariant, string> = {
    // Deep purple to magenta subtle primary action
    primary:
      'bg-gradient-to-r from-womup-purple-800 to-womup-magenta text-white font-semibold shadow-sm hover:shadow-womup-glow-magenta border border-transparent',
    // Bright signature magenta
    magenta:
      'bg-womup-magenta hover:bg-womup-magenta-700 text-white font-semibold shadow-sm hover:shadow-womup-glow-magenta border border-transparent',
    // Gold rewards & coin claims
    gold:
      'bg-gradient-to-r from-amber-500 via-womup-gold to-amber-600 text-slate-950 font-bold shadow-sm hover:shadow-womup-glow-gold border border-amber-300/40',
    // High-trust white card button
    secondary:
      'bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm',
    // Purple outline
    outline:
      'bg-transparent text-womup-purple font-semibold border-2 border-womup-purple hover:bg-womup-purple-50',
    // Subtle ghost
    ghost:
      'bg-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-100 font-medium',
  }

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-9 px-3.5 text-xs rounded-md gap-1.5',
    md: 'h-11 px-5 text-sm rounded-lg gap-2', // 44px mobile touch target
    lg: 'h-13 px-6 text-base rounded-xl gap-2.5',
  }

  return (
    <motion.button
      whileHover={disabled || isLoading ? undefined : { scale: 1.01 }}
      whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.12 }}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center select-none transition-all cursor-pointer font-sans disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  )
}
