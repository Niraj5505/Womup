import { colors } from './colors.ts'
import { typography } from './typography.ts'
import { radius } from './radius.ts'
import { shadows } from './shadows.ts'
import { gradients } from './gradients.ts'
import { spacing } from './spacing.ts'

/**
 * WOMUP Design System - Consolidated Tokens
 */
export const buttonTokens = {
  sizes: {
    sm: {
      height: '36px',
      padding: '0 14px',
      fontSize: typography.sizes.xs.fontSize,
      iconSize: '14px',
      borderRadius: radius.md,
    },
    md: {
      height: '44px', // Touch-friendly
      padding: '0 20px',
      fontSize: typography.sizes.sm.fontSize,
      iconSize: '18px',
      borderRadius: radius.lg,
    },
    lg: {
      height: '52px',
      padding: '0 28px',
      fontSize: typography.sizes.base.fontSize,
      iconSize: '20px',
      borderRadius: radius.xl,
    },
  },
  variants: {
    primary: {
      bg: 'linear-gradient(135deg, #581C87 0%, #C026D3 100%)',
      color: '#FFFFFF',
      shadow: shadows.glowMagenta,
      border: 'none',
    },
    magenta: {
      bg: '#C026D3',
      color: '#FFFFFF',
      shadow: shadows.glowMagenta,
      border: 'none',
    },
    gold: {
      bg: 'linear-gradient(135deg, #F59E0B 0%, #E5A93C 100%)',
      color: '#0F172A',
      shadow: shadows.glowGold,
      border: 'none',
    },
    secondary: {
      bg: '#FFFFFF',
      color: '#0F172A',
      shadow: shadows.sm,
      border: '1px solid #E2E8F0',
    },
    outline: {
      bg: 'transparent',
      color: '#581C87',
      border: '1.5px solid #581C87',
    },
    ghost: {
      bg: 'transparent',
      color: '#334155',
      border: 'none',
    },
  },
} as const

export const cardTokens = {
  variants: {
    default: {
      bg: '#FFFFFF',
      border: '1px solid #E2E8F0',
      shadow: shadows.card,
      borderRadius: radius.xl,
    },
    elevated: {
      bg: '#FFFFFF',
      border: '1px solid #F1F5F9',
      shadow: shadows.cardHover,
      borderRadius: radius.xl,
    },
    rewards: {
      bg: 'linear-gradient(180deg, #FFFDF7 0%, #FFFFFF 100%)',
      border: '1px solid #FDE68A',
      shadow: shadows.card,
      borderRadius: radius.xl,
    },
    interactive: {
      bg: '#FFFFFF',
      border: '1px solid #E2E8F0',
      shadow: shadows.card,
      hoverShadow: shadows.cardHover,
      borderRadius: radius.xl,
      hoverY: '-4px',
    },
    subtle: {
      bg: '#F8FAFC',
      border: '1px solid #E2E8F0',
      borderRadius: radius.lg,
    },
  },
} as const

export const designTokens = {
  colors,
  typography,
  radius,
  shadows,
  gradients,
  spacing,
  buttons: buttonTokens,
  cards: cardTokens,
} as const

export type DesignTokens = typeof designTokens
