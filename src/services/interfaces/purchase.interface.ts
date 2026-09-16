import type { Purchase, CreatePurchaseInput } from '../../types/entities/purchase.ts'

export interface IPurchaseService {
  getPurchases(): Promise<Purchase[]>
  getPurchaseById(id: string): Promise<Purchase | null>
  recordCounterPurchase(input: CreatePurchaseInput): Promise<Purchase>
}
