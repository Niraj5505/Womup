/**
 * WOMUP Design System - Color Palette
 * Visual direction: Premium, modern, trustworthy, e-commerce & rewards inspired for an Indian audience.
 * Colors: Deep purple, bright magenta, pink, white, gold/yellow, dark text.
 */

export const colors = {
  // Deep Trustworthy Purples
  purple: {
    50: '#FAF5FF',
    100: '#F3E8FF',
    200: '#E9D5FF',
    300: '#D8B4FE',
    400: '#C084FC',
    500: '#A855F7',
    600: '#9333EA',
    700: '#7E22CE',
    800: '#581C87',
    900: '#3D0C66',
    950: '#2A0845',
    primary: '#581C87', // Primary deep purple anchor
    deep: '#2A0845',
    light: '#FAF5FF',
  },

  // Vibrant Brand Action Magenta
  magenta: {
    50: '#FDF4FF',
    100: '#FAE8FF',
    200: '#F5D0FE',
    300: '#F0ABFC',
    400: '#E879F9',
    500: '#D946EF',
    600: '#C026D3', // Signature brand magenta
    700: '#A21CAF',
    800: '#86198F',
    900: '#701A75',
    DEFAULT: '#C026D3',
  },

  // Pink Accents & Highlights
  pink: {
    50: '#FDF2F8',
    100: '#FCE7F3',
    200: '#FBCFE8',
    300: '#F472B6',
    400: '#F43F5E',
    500: '#EC4899',
    600: '#DB2777',
    700: '#BE185D',
    soft: '#FDF2F8',
  },

  // Gold & Yellow (Rewards, Coins, Cashback, Festive Tiers)
  gold: {
    50: '#FEFCE8',
    100: '#FEF9C3',
    200: '#FEF08A',
    300: '#FDE047',
    400: '#FACC15',
    500: '#E5A93C', // Signature prestige gold
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    coins: '#F59E0B',
    warmBg: '#FFFBEB',
  },

  // Trustworthy Dark Text & Neutrals (High contrast on white/light surfaces)
  text: {
    primary: '#0F172A',   // Slate 900 - Headings & key text
    secondary: '#334155', // Slate 700 - Body & descriptions
    muted: '#64748B',     // Slate 500 - Secondary info, captions
    placeholder: '#94A3B8', // Slate 400
    inverted: '#FFFFFF',  // White text on dark/colored cards
  },

  // Surfaces & Backgrounds
  surface: {
    white: '#FFFFFF',
    subtle: '#F8FAFC',
    card: '#FFFFFF',
    border: '#E2E8F0',
    borderSubtle: '#F1F5F9',
    goldTint: '#FFFDF7',
    purpleTint: '#FAF7FF',
    dark: '#0F041D',
  },

  // Semantic States for E-Commerce & Rewards
  semantic: {
    success: '#10B981', // Cashback, savings, verified
    successBg: '#ECFDF5',
    successText: '#065F46',
    warning: '#F59E0B',
    warningBg: '#FFFBEB',
    error: '#EF4444',
    errorBg: '#FEF2F2',
    info: '#3B82F6',
    infoBg: '#EFF6FF',
  },
} as const

export const brandColors = colors
export type ColorPalette = typeof colors
export type BrandColors = typeof brandColors
