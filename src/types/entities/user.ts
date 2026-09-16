/**
 * User Entity
 * Represents an authenticated member, merchant, or administrator in the WOMUP ecosystem.
 */

export type UserRole = 'member' | 'merchant' | 'admin'
export type UserStatus = 'active' | 'pending' | 'suspended'

export interface User {
  id: string
  fullName: string
  mobileNumber: string
  email: string
  city: string
  referralCode: string
  referredBy?: string | null
  role: UserRole
  status: UserStatus
  shoppingCoinBalance: number
  avatarUrl?: string
  createdAt: string
  updatedAt: string
}

export interface UserProfileUpdateInput {
  fullName?: string
  email?: string
  city?: string
  avatarUrl?: string
}

export interface UserAuthSession {
  user: User
  accessToken: string
  refreshToken: string
  expiresAt: number
}
