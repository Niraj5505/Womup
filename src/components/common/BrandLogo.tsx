import React from 'react'

interface BrandLogoProps {
  className?: string
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
  inverted?: boolean
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showTagline = false,
  size = 'md',
  inverted = false, // Default to false for light theme
}) => {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', badge: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-2xl', badge: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-3xl', badge: 'text-xs' },
  }[size]

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Visual Logo Mark (W Icon) */}
      <div
        className={`relative ${sizeClasses.icon} flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FD849F] via-[#6651BF] to-[#3048C8] p-[1.5px] shadow-[0_0_15px_rgba(253,132,159,0.35)] group transition-transform duration-300 hover:scale-105`}
      >
        <div className="relative w-full h-full bg-[#0C0D35] rounded-[10px] flex items-center justify-center overflow-hidden">
          {/* Stylized W Icon */}
          <svg viewBox="0 0 40 40" className="w-5/6 h-5/6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 12L14 28L20 16L26 28L32 12"
              stroke="url(#womupLogoGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="11" r="2.2" fill="#FD849F" />
            <defs>
              <linearGradient id="womupLogoGradient" x1="8" y1="12" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FD849F" />
                <stop offset="40%" stopColor="#FFC4D1" />
                <stop offset="75%" stopColor="#6651BF" />
                <stop offset="100%" stopColor="#3048C8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span
            className={`font-sans font-extrabold tracking-tight ${sizeClasses.text} ${
              inverted ? 'text-white' : 'text-[#05062A]'
            }`}
          >
            WOM
          </span>
          <span
            className={`font-sans font-extrabold tracking-tight ${sizeClasses.text} bg-gradient-to-r from-[#FD849F] via-[#FFC4D1] to-[#6651BF] bg-clip-text text-transparent`}
          >
            UP
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FD849F] shadow-[0_0_6px_#FD849F] ml-1 self-start mt-1.5" />
        </div>
        {showTagline && (
          <span
            className={`text-[9px] uppercase font-medium tracking-wider ${
              inverted ? 'text-[#D8C9ED]' : 'text-[#6651BF]'
            }`}
          >
            Empowerment • Shopping • Rewards
          </span>
        )}
      </div>
    </div>
  )
}
