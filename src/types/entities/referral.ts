/**
 * Referral Entity
 * Represents invitations and direct/multi-tier referral relationships in the WOMUP network.
 * NOTE: All referral stats are based on WOMUP promotional models without income guarantees.
 */

export type ReferralStatus = 'Active' | 'Pending First Shop' | 'Inactive'

export interface ReferralChildNode {
  id: string
  name: string
  location: string
  status: 'Active' | 'Pending'
  joinedDate?: string
}

export interface Referral {
  id: string
  referrerId: string
  referredUserId: string
  referredUserName: string
  referredUserLocation: string
  referralCodeUsed: string
  level: number // 1 to 7
  tier: string // e.g. '1st Level'
  status: ReferralStatus
  coinBenefit: number
  joinedDate: string
  children?: ReferralChildNode[]
  createdAt?: string
}

export interface ReferralSummary {
  referralCode: string
  referralLink: string
  totalReferrals: number
  activeReferrals: number
  foundationProgress: {
    current: number
    target: number
  }
  referralCoinsEarned: number
  isDemo: boolean
}

export interface ReferralFilters {
  status?: 'all' | 'Active' | 'Pending'
  query?: string
  level?: number
  limit?: number
  offset?: number
}
