import React from 'react'

export interface SectionHeadingProps {
  title: React.ReactNode
  tagline?: string
  description?: React.ReactNode
  badge?: React.ReactNode
  align?: 'left' | 'center' | 'right'
  action?: React.ReactNode
  className?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  tagline,
  description,
  badge,
  align = 'left',
  action,
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align]

  return (
    <div
      className={`w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 ${className}`}
    >
      <div className={`flex flex-col ${alignClasses} max-w-2xl`}>
        {/* Badge or Tagline */}
        {(badge || tagline) && (
          <div className="flex items-center gap-2 mb-2.5">
            {badge}
            {tagline && (
              <span className="text-xs font-semibold uppercase tracking-wider text-womup-magenta">
                {tagline}
              </span>
            )}
          </div>
        )}

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Optional Top Action (e.g., View All, Filter, or Claim CTA) */}
      {action && <div className="flex-shrink-0 pt-2 md:pt-0">{action}</div>}
    </div>
  )
}
