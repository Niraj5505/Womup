import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Card, type CardVariant } from './Card.tsx'
import { IconBox, type IconBoxColor } from './IconBox.tsx'

export interface StatCardProps {
  label: string
  value: string | number
  prefix?: string
  suffix?: string
  change?: string
  trend?: 'up' | 'down' | 'neutral'
  icon?: React.ReactNode
  iconColor?: IconBoxColor
  variant?: CardVariant
  className?: string
  subtitle?: string
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  prefix,
  suffix,
  change,
  trend = 'up',
  icon,
  iconColor = 'purple',
  variant = 'default',
  className = '',
  subtitle,
}) => {
  return (
    <Card variant={variant} padding="md" className={`flex flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        {icon && (
          <IconBox color={iconColor} size="sm" shape="squircle">
            {icon}
          </IconBox>
        )}
      </div>

      <div className="flex items-baseline gap-1 my-1">
        {prefix && (
          <span className="text-xl sm:text-2xl font-bold font-inr text-slate-800">
            {prefix}
          </span>
        )}
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
          {value}
        </span>
        {suffix && <span className="text-sm font-semibold text-slate-500">{suffix}</span>}
      </div>

      {(change || subtitle) && (
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 text-xs">
          {change && (
            <span
              className={`inline-flex items-center font-bold gap-0.5 ${
                trend === 'up'
                  ? 'text-emerald-600'
                  : trend === 'down'
                  ? 'text-rose-600'
                  : 'text-slate-600'
              }`}
            >
              {trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5" />}
              {trend === 'down' && <ArrowDownRight className="w-3.5 h-3.5" />}
              {change}
            </span>
          )}
          {subtitle && <span className="text-slate-500">{subtitle}</span>}
        </div>
      )}
    </Card>
  )
}
