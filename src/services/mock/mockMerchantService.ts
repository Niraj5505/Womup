import type { IMerchantService } from '../interfaces/merchant.interface.ts'
import type { Merchant, MerchantCategory, MerchantFilters } from '../../types/entities/merchant.ts'
import { DEMO_MERCHANTS, PARTNER_CATEGORIES } from '../../data/demoMerchants.ts'

export class MockMerchantService implements IMerchantService {
  private merchants: Merchant[] = DEMO_MERCHANTS as unknown as Merchant[]

  async getMerchants(filters?: MerchantFilters): Promise<Merchant[]> {
    await new Promise((r) => setTimeout(r, 200))

    let result = [...this.merchants]

    if (filters?.category && filters.category !== 'All') {
      result = result.filter((m) => m.category === filters.category)
    }

    if (filters?.city) {
      result = result.filter((m) => m.city.toLowerCase() === filters.city!.toLowerCase())
    }

    if (filters?.query) {
      const q = filters.query.toLowerCase().trim()
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.location.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q)
      )
    }

    return result
  }

  async getMerchantById(id: string): Promise<Merchant | null> {
    await new Promise((r) => setTimeout(r, 150))
    const found = this.merchants.find((m) => m.id === id)
    return found || null
  }

  async getCategories(): Promise<{ key: MerchantCategory | 'All'; label: string }[]> {
    return PARTNER_CATEGORIES.map((cat) => ({
      key: cat as MerchantCategory | 'All',
      label: cat,
    }))
  }
}

export const mockMerchantService = new MockMerchantService()
