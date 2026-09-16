import type { IPurchaseService } from '../interfaces/purchase.interface.ts'
import type { Purchase, CreatePurchaseInput } from '../../types/entities/purchase.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiPurchaseService implements IPurchaseService {
  async getPurchases(): Promise<Purchase[]> {
    return apiClient.get<Purchase[]>(ENDPOINTS.PURCHASES.LIST)
  }

  async getPurchaseById(id: string): Promise<Purchase | null> {
    try {
      return await apiClient.get<Purchase>(ENDPOINTS.PURCHASES.DETAIL(id))
    } catch {
      return null
    }
  }

  async recordCounterPurchase(input: CreatePurchaseInput): Promise<Purchase> {
    return apiClient.post<Purchase>(ENDPOINTS.PURCHASES.CREATE, input)
  }
}

export const apiPurchaseService = new ApiPurchaseService()
