/**
 * WOMUP Design System - Typography Tokens
 * Clean, modern sans fonts optimized for e-commerce, rewards, and Indian Rupee (₹) symbol clarity.
 */

export const typography = {
  fonts: {
    sans: '"Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: '"Outfit", "Plus Jakarta Sans", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },

  sizes: {
    xs: { fontSize: '0.75rem', lineHeight: '1rem' },        // 12px
    sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },    // 14px
    base: { fontSize: '1rem', lineHeight: '1.5rem' },        // 16px
    lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },    // 18px
    xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },     // 20px
    '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },      // 24px
    '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' }, // 30px
    '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },   // 36px
    '5xl': { fontSize: '3rem', lineHeight: '1.15' },         // 48px
  },

  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  letterSpacing: {
    tighter: '-0.03em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

export type TypographyTokens = typeof typography
