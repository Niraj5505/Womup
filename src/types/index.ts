/**
 * Global TypeScript definitions for WOMUP
 */

export type ThemeVariant = 'primary' | 'gold' | 'magenta' | 'purple' | 'ghost' | 'outline'

export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface BrandColorToken {
  name: string
  hex: string
  category: 'purple' | 'magenta' | 'pink' | 'white' | 'gold'
  description: string
}

// Re-export Entities
export type * from './entities/user.ts'
export type * from './entities/merchant.ts'
export type * from './entities/shoppingCoin.ts'
export type * from './entities/purchase.ts'
export type * from './entities/referral.ts'
export type * from './entities/team.ts'
export type * from './entities/income.ts'
export type * from './entities/notification.ts'

// Re-export API types & classes
export {
  ApiError,
  type ApiResponse,
  type PaginatedResponse,
  type ApiErrorDetail,
  type ApiErrorResponse,
} from './api.ts'
