/**
 * Merchant Entity
 * Represents an onboarded store/business partner accepting WOMUP Shopping Coins.
 */

export type MerchantCategory =
  | 'Kirana'
  | 'Vegetable'
  | 'Medical'
  | 'Restaurant'
  | 'Beauty'
  | 'Hotel'
  | 'Garments'
  | 'Gift'
  | 'Shoes'
  | 'Sweet'
  | 'Bakery'
  | 'Electric'
  | 'Hospital'
  | 'Classes'

export interface Merchant {
  id: string
  name: string
  category: MerchantCategory
  categoryLabel: string
  location: string
  city: string
  address: string
  shoppingCoinInfo: string
  maxCoinAcceptance: number
  sampleBill: {
    billAmount: number
    coinUsed: number
    amountToPay: number
    saving: number
  }
  image: string
  rating: number
  reviewCount: number
  hours: string
  isDemo: boolean
  featured?: boolean
  contactPhone?: string
  createdAt?: string
}

export interface MerchantFilters {
  category?: MerchantCategory | 'All'
  city?: string
  query?: string
  limit?: number
  offset?: number
}
