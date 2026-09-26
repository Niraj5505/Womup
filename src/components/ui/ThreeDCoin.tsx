import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, Coins, TrendingUp } from 'lucide-react'

interface ThreeDCoinProps {
  size?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  showOrbiters?: boolean
  className?: string
  onClick?: () => void
}

export const ThreeDCoin: React.FC<ThreeDCoinProps> = ({
  size = 'md',
  interactive = true,
  showOrbiters = true,
  className = '',
  onClick,
}) => {
  const [isFlipping, setIsFlipping] = useState(false)

  // Mouse tracking for interactive tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const tiltX = useTransform(smoothY, [-0.5, 0.5], [18, -18])
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-18, 18])

  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-28 sm:h-28',
    md: 'w-44 h-44 sm:w-52 sm:h-52',
    lg: 'w-64 h-64 sm:w-72 sm:h-72',
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleClick = () => {
    if (!isFlipping) {
      setIsFlipping(true)
      setTimeout(() => setIsFlipping(false), 1200)
    }
    if (onClick) onClick()
  }

  return (
    <div
      style={{ perspective: '1100px' }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* 3D Coin Container */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: 'preserve-3d',
        }}
        animate={
          isFlipping
            ? { rotateY: [0, 720], scale: [1, 1.15, 1] }
            : {
                rotateY: [-12, 12, -12],
                rotateX: [6, -6, 6],
                y: [-8, 8, -8],
              }
        }
        transition={
          isFlipping
            ? { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }
            : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }
        }
        className={`relative ${sizeClasses[size]} rounded-full cursor-pointer flex items-center justify-center`}
      >
        {/* Outer 3D Gold Glow Aura */}
        <div className="absolute -inset-4 rounded-full bg-radial from-[#F59E0B]/40 via-[#FD849F]/20 to-transparent blur-2xl pointer-events-none" />

        {/* Outer Multi-gradient Bezel */}
        <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-tr from-[#F59E0B] via-[#FFD0DD] to-[#6651BF] shadow-[0_16px_40px_rgba(245,158,11,0.3)]">
          {/* Inner 3D Specular Shadowed Coin */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/90 shadow-2xl relative">
            <img
              src="/images/gold-coin.jpg"
              alt="WOMUP 3D Gold Coin"
              className="w-full h-full object-cover pointer-events-none transform hover:scale-105 transition-transform duration-500"
            />
            {/* Glossy lighting sweep */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Orbiting 3D Particle Chips (When enabled for lg/md) */}
        {showOrbiters && size !== 'sm' && (
          <>
            {/* Orbiting Badge 1: Coin Value (Top Right) */}
            <motion.div
              style={{ transform: 'translateZ(45px)' }}
              animate={{
                y: [-4, 6, -4],
                x: [0, 5, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DDE3] shadow-[0_8px_20px_rgba(5,6,42,0.12)] flex items-center gap-1.5 text-xs font-black text-[#05062A]"
            >
              <Coins className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>₹2,000</span>
            </motion.div>

            {/* Orbiting Badge 2: 100% Value (Bottom Left) */}
            <motion.div
              style={{ transform: 'translateZ(55px)' }}
              animate={{
                y: [4, -6, 4],
                x: [0, -5, 0],
                rotate: [0, -4, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DDE3] shadow-[0_8px_20px_rgba(5,6,42,0.12)] flex items-center gap-1.5 text-xs font-black text-[#16A34A]"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Free Reward</span>
            </motion.div>

            {/* Orbiting Sparkle (Top Left) */}
            <motion.div
              style={{ transform: 'translateZ(65px)' }}
              animate={{
                scale: [0.9, 1.15, 0.9],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-2 -left-3 w-7 h-7 rounded-full bg-white shadow-md border border-[#FFC4D1] flex items-center justify-center text-[#FD849F]"
            >
              <Sparkles className="w-4 h-4 text-[#FD849F]" />
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Realistic 3D Ground Shadow that scales with height */}
      <motion.div
        animate={{
          scale: [0.85, 1.05, 0.85],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-6 w-3/4 h-5 rounded-full bg-[#05062A]/20 blur-md pointer-events-none"
      />
    </div>
  )
}
