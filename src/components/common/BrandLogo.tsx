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
      {/* Visual Logo Mark (Official W Icon) */}
      <div
        className={`relative ${sizeClasses.icon} flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FD849F] via-[#6651BF] to-[#3048C8] p-[1.5px] shadow-[0_4px_16px_rgba(253,132,159,0.3)] group transition-transform duration-300 hover:scale-105 shrink-0`}
      >
        <div className="relative w-full h-full bg-[#05062A] rounded-[10px] flex items-center justify-center overflow-hidden">
          <img
            src="/images/womup-logo.png"
            alt="WOMUP Logo"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
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
