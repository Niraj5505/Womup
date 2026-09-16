import type {
  Referral,
  ReferralSummary,
  ReferralFilters,
} from '../../types/entities/referral.ts'

export interface ReferralTreeNode {
  id: string
  name: string
  code: string
  level: number
  status: 'Active' | 'Pending'
  children?: ReferralTreeNode[]
}

export interface IReferralService {
  getReferralSummary(): Promise<ReferralSummary>
  getReferralsList(filters?: ReferralFilters): Promise<Referral[]>
  getReferralTree(): Promise<ReferralTreeNode>
  validateReferralCode(code: string): Promise<{ valid: boolean; referrerName?: string }>
}
