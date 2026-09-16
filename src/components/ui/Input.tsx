import React, { forwardRef } from 'react'
import { AlertCircle } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  prefixText?: string
  suffixText?: string
  badge?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      prefixText,
      suffixText,
      badge,
      className = '',
      id,
      disabled,
      ...props
    },
    ref,
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full flex flex-col gap-1.5 font-sans">
        {/* Label & Optional Badge */}
        {(label || badge) && (
          <div className="flex items-center justify-between">
            {label && (
              <label
                htmlFor={inputId}
                className="text-xs sm:text-sm font-semibold text-slate-800"
              >
                {label}
              </label>
            )}
            {badge && <div>{badge}</div>}
          </div>
        )}

        {/* Input Wrapper */}
        <div
          className={`relative flex items-center w-full rounded-lg bg-white border transition-all duration-150 ${
            error
              ? 'border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20'
              : 'border-slate-300 focus-within:border-womup-purple focus-within:ring-2 focus-within:ring-womup-purple/15'
          } ${disabled ? 'bg-slate-50 cursor-not-allowed opacity-60' : ''}`}
        >
          {/* Left Icon */}
          {leftIcon && (
            <div className="pl-3.5 pr-1 text-slate-400 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Left Text Prefix (e.g. ₹ or +91) */}
          {prefixText && (
            <span className="pl-3.5 pr-1 text-sm font-semibold text-slate-700 select-none font-inr">
              {prefixText}
            </span>
          )}

          {/* Core Input */}
          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            className={`w-full h-11 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent outline-none disabled:cursor-not-allowed ${className}`}
            {...props}
          />

          {/* Suffix Text (e.g. coins, /mo, kg) */}
          {suffixText && (
            <span className="pr-3.5 pl-1 text-xs font-medium text-slate-500 select-none">
              {suffixText}
            </span>
          )}

          {/* Right Icon or Error Icon */}
          {rightIcon && !error && (
            <div className="pr-3.5 pl-1 text-slate-400 flex items-center">{rightIcon}</div>
          )}
          {error && (
            <div className="pr-3.5 pl-1 text-rose-500 flex items-center pointer-events-none">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Error Message or Helper Text */}
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

Input.displayName = 'Input'
