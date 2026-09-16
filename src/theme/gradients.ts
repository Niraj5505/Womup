/**
 * WOMUP Design System - Gradients
 * Used sparingly for primary CTA buttons, reward coins/vouchers, and subtle accent highlights.
 */

export const gradients = {
  // Primary CTA (Deep Purple to Magenta)
  primary: 'linear-gradient(135deg, #581C87 0%, #C026D3 100%)',
  primaryHover: 'linear-gradient(135deg, #4A154B 0%, #A21CAF 100%)',

  // Gold Rewards & Coins
  rewards: 'linear-gradient(135deg, #F59E0B 0%, #E5A93C 60%, #D97706 100%)',
  rewardsSubtle: 'linear-gradient(135deg, #FEF9C3 0%, #FEF08A 100%)',

  // Warm Pink Micro-accent
  pinkAccent: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',

  // Subtle Header/Card Tints (Clean and non-overpowering)
  cardTintPurple: 'linear-gradient(180deg, #FAF5FF 0%, #FFFFFF 100%)',
  cardTintGold: 'linear-gradient(180deg, #FFFDF7 0%, #FFFFFF 100%)',
  
  // High contrast text gradients (Used only on headlines)
  textBrand: 'linear-gradient(135deg, #2A0845 0%, #C026D3 60%, #EC4899 100%)',
  textGold: 'linear-gradient(135deg, #B45309 0%, #D97706 60%, #E5A93C 100%)',
} as const

export type GradientTokens = typeof gradients
