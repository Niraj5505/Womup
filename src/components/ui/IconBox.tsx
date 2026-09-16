import React from 'react'

export type IconBoxColor = 'purple' | 'magenta' | 'pink' | 'gold' | 'white' | 'dark'
export type IconBoxSize = 'sm' | 'md' | 'lg' | 'xl'
export type IconBoxShape = 'squircle' | 'circle'

export interface IconBoxProps {
  children: React.ReactNode
  color?: IconBoxColor
  size?: IconBoxSize
  shape?: IconBoxShape
  className?: string
}

export const IconBox: React.FC<IconBoxProps> = ({
  children,
  color = 'purple',
  size = 'md',
  shape = 'squircle',
  className = '',
}) => {
  const colorStyles: Record<IconBoxColor, string> = {
    purple: 'bg-purple-100/80 text-purple-900 border border-purple-200/60',
    magenta: 'bg-fuchsia-100/80 text-fuchsia-900 border border-fuchsia-200/60',
    pink: 'bg-pink-100/80 text-pink-900 border border-pink-200/60',
    gold: 'bg-amber-100/90 text-amber-900 border border-amber-200/80 shadow-xs',
    white: 'bg-white text-slate-800 border border-slate-200 shadow-sm',
    dark: 'bg-slate-900 text-white border border-slate-800 shadow-sm',
  }

  const sizeStyles: Record<IconBoxSize, { box: string; icon: string }> = {
    sm: { box: 'w-8 h-8', icon: '[&>svg]:w-4 [&>svg]:h-4' },
    md: { box: 'w-11 h-11', icon: '[&>svg]:w-5 [&>svg]:h-5' },
    lg: { box: 'w-14 h-14', icon: '[&>svg]:w-7 [&>svg]:h-7' },
    xl: { box: 'w-16 h-16', icon: '[&>svg]:w-8 [&>svg]:h-8' },
  }

  const shapeStyles: Record<IconBoxShape, string> = {
    squircle: 'rounded-xl',
    circle: 'rounded-full',
  }

  return (
    <div
      className={`inline-flex items-center justify-center flex-shrink-0 transition-transform ${
        colorStyles[color]
      } ${sizeStyles[size].box} ${sizeStyles[size].icon} ${shapeStyles[shape]} ${className}`}
    >
      {children}
    </div>
  )
}
