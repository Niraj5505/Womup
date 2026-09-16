/**
 * Purchase Entity
 * Represents an in-store counter purchase record at a WOMUP Partner Merchant.
 * NOTE: WOMUP records store receipts for coin deduction; no direct banking money transfer occurs on the platform.
 */

export type PurchasePaymentMethod = 'store_counter' | 'cash' | 'upi_counter' | 'pos_card'
export type PurchaseStatus = 'completed' | 'pending' | 'cancelled' | 'refunded'

export interface Purchase {
  id: string
  userId: string
  merchantId: string
  merchantName: string
  category: string
  totalBillAmount: number
  coinDiscountApplied: number
  netPayableAmount: number
  paymentMethod: PurchasePaymentMethod
  status: PurchaseStatus
  invoiceNumber?: string
  billDate: string
  createdAt: string
  isDemo: boolean
  notes?: string
}

export interface CreatePurchaseInput {
  merchantId: string
  totalBillAmount: number
  coinDiscountApplied: number
  paymentMethod: PurchasePaymentMethod
  invoiceNumber?: string
  notes?: string
}
