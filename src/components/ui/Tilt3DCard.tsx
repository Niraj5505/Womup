import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Tilt3DCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number // Maximum rotation in degrees (default 12)
  glare?: boolean // Show dynamic light sheen (default true)
  perspective?: number // Perspective in px (default 1000)
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  perspective = 1000,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for normalized mouse positions (-1 to 1)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for natural feel
  const springConfig = { damping: 22, stiffness: 280, mass: 0.6 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Map mouse coordinates to 3D rotation angles
  const rotateX = useTransform(smoothY, [-1, 1], [maxTilt, -maxTilt])
  const rotateY = useTransform(smoothX, [-1, 1], [-maxTilt, maxTilt])

  // Glare position
  const glareX = useTransform(smoothX, [-1, 1], ['0%', '100%'])
  const glareY = useTransform(smoothY, [-1, 1], ['0%', '100%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate relative mouse position from -1 to 1
    const x = (e.clientX - rect.left) / width - 0.5
    const y = (e.clientY - rect.top) / height - 0.5

    mouseX.set(x * 2)
    mouseY.set(y * 2)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`relative ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full transition-shadow duration-300"
      >
        {children}

        {/* Dynamic Specular 3D Glare Overlay */}
        {glare && isHovered && (
          <motion.div
            style={{
              left: glareX,
              top: glareY,
              transform: 'translate(-50%, -50%) translateZ(40px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute w-[240px] h-[240px] rounded-full bg-radial from-white/60 via-white/20 to-transparent blur-xl"
          />
        )}
      </motion.div>
    </div>
  )
}
