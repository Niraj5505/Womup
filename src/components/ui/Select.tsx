import React, { forwardRef } from 'react'
import { ChevronDown, AlertCircle } from 'lucide-react'

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helperText?: string
  error?: string
  options: SelectOption[]
  badge?: React.ReactNode
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      badge,
      className = '',
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full flex flex-col gap-1.5 font-sans">
        {/* Label & Optional Badge */}
        {(label || badge) && (
          <div className="flex items-center justify-between">
            {label && (
              <label
                htmlFor={selectId}
                className="text-xs sm:text-sm font-semibold text-slate-800"
              >
                {label}
              </label>
            )}
            {badge && <div>{badge}</div>}
          </div>
        )}

        {/* Select Wrapper */}
        <div
          className={`relative flex items-center w-full rounded-lg bg-white border transition-all duration-150 ${
            error
              ? 'border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20'
              : 'border-slate-300 focus-within:border-womup-purple focus-within:ring-2 focus-within:ring-womup-purple/15'
          } ${disabled ? 'bg-slate-50 cursor-not-allowed opacity-60' : ''}`}
        >
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            className={`w-full h-11 pl-3.5 pr-10 text-sm text-slate-900 bg-transparent outline-none appearance-none cursor-pointer disabled:cursor-not-allowed ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Custom Chevron or Alert Icon */}
          <div className="absolute right-3.5 pointer-events-none text-slate-500 flex items-center">
            {error ? (
              <AlertCircle className="w-4 h-4 text-rose-500" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>

        {/* Error or Helper text */}
        {error ? (
          <p className="text-xs text-rose-600 flex items-center gap-1 mt-0.5">
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p className="text-xs text-slate-500 mt-0.5">{helperText}</p>
        ) : null}
      </div>
    )
  },
)

Select.displayName = 'Select'
