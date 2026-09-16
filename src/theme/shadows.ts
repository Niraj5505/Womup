/**
 * WOMUP Design System - Shadows & Elevation
 * High-trust, soft shadows inspired by modern fintech, e-commerce, and rewards apps.
 */

export const shadows = {
  xs: '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
  sm: '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
  card: '0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 1px 4px -1px rgba(15, 23, 42, 0.04)',
  cardHover: '0 12px 24px -6px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04)',
  modal: '0 20px 40px -12px rgba(15, 23, 42, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.08)',
  popover: '0 10px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)',
  
  // Subtle Brand Glows (Used selectively for CTAs and Rewards)
  glowPurple: '0 4px 14px 0 rgba(88, 28, 135, 0.25)',
  glowMagenta: '0 4px 16px 0 rgba(192, 38, 211, 0.3)',
  glowGold: '0 4px 14px 0 rgba(229, 169, 60, 0.3)',
  glowPink: '0 4px 14px 0 rgba(236, 72, 153, 0.25)',
} as const

export type ShadowTokens = typeof shadows
