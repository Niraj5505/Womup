import type { IMerchantService } from '../interfaces/merchant.interface.ts'
import type { Merchant, MerchantCategory, MerchantFilters } from '../../types/entities/merchant.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiMerchantService implements IMerchantService {
  async getMerchants(filters?: MerchantFilters): Promise<Merchant[]> {
    return apiClient.get<Merchant[]>(ENDPOINTS.MERCHANTS.LIST, { params: filters, skipAuth: true })
  }

  async getMerchantById(id: string): Promise<Merchant | null> {
    try {
      return await apiClient.get<Merchant>(ENDPOINTS.MERCHANTS.DETAIL(id), { skipAuth: true })
    } catch {
      return null
    }
  }

  async getCategories(): Promise<{ key: MerchantCategory | 'All'; label: string }[]> {
    return apiClient.get<{ key: MerchantCategory | 'All'; label: string }[]>(
      ENDPOINTS.MERCHANTS.CATEGORIES,
      { skipAuth: true }
    )
  }
}

export const apiMerchantService = new ApiMerchantService()
