import type {
  IReferralService,
  ReferralTreeNode,
} from '../interfaces/referral.interface.ts'
import type {
  Referral,
  ReferralSummary,
  ReferralFilters,
} from '../../types/entities/referral.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiReferralService implements IReferralService {
  async getReferralSummary(): Promise<ReferralSummary> {
    return apiClient.get<ReferralSummary>(ENDPOINTS.REFERRALS.SUMMARY)
  }

  async getReferralsList(filters?: ReferralFilters): Promise<Referral[]> {
    return apiClient.get<Referral[]>(ENDPOINTS.REFERRALS.LIST, { params: filters })
  }

  async getReferralTree(): Promise<ReferralTreeNode> {
    return apiClient.get<ReferralTreeNode>(ENDPOINTS.REFERRALS.TREE)
  }

  async validateReferralCode(code: string): Promise<{ valid: boolean; referrerName?: string }> {
    return apiClient.get<{ valid: boolean; referrerName?: string }>(
      ENDPOINTS.REFERRALS.VALIDATE_CODE(code),
      { skipAuth: true }
    )
  }
}

export const apiReferralService = new ApiReferralService()
