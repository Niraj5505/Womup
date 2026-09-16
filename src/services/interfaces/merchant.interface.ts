import type { Merchant, MerchantCategory, MerchantFilters } from '../../types/entities/merchant.ts'

export interface IMerchantService {
  getMerchants(filters?: MerchantFilters): Promise<Merchant[]>
  getMerchantById(id: string): Promise<Merchant | null>
  getCategories(): Promise<{ key: MerchantCategory | 'All'; label: string }[]>
}
