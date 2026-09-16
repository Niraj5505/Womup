/**
 * WOMUP Design System - Border Radius Tokens
 * Mobile-friendly touch targets with smooth squircle edges.
 */

export const radius = {
  none: '0px',
  sm: '0.375rem',  // 6px - Small badges, micro tags
  md: '0.625rem',  // 10px - Inputs, chips, small buttons
  lg: '0.875rem',  // 14px - Primary buttons, cards
  xl: '1.25rem',   // 20px - Prominent cards, modals, sheets
  '2xl': '1.75rem',// 28px - Featured containers, hero cards
  full: '9999px',  // Pills, round avatars, coin icons
} as const

export type RadiusTokens = typeof radius
