import type { IPurchaseService } from '../interfaces/purchase.interface.ts'
import type { Purchase, CreatePurchaseInput } from '../../types/entities/purchase.ts'

export class MockPurchaseService implements IPurchaseService {
  private purchases: Purchase[] = [
    {
      id: 'PUR-8401',
      userId: 'WM-84920',
      merchantId: 'M-101',
      merchantName: 'Sharma Super Kirana & Provision Store',
      category: 'Kirana',
      totalBillAmount: 10000,
      coinDiscountApplied: 600,
      netPayableAmount: 9400,
      paymentMethod: 'store_counter',
      status: 'completed',
      invoiceNumber: 'INV-2026-0916-01',
      billDate: '16 Sep 2026',
      createdAt: '2026-09-16T14:15:00Z',
      isDemo: true,
      notes: 'Demo purchase record at local kirana store',
    },
    {
      id: 'PUR-8395',
      userId: 'WM-84920',
      merchantId: 'M-102',
      merchantName: 'Green Fresh Organic Vegetable Mart',
      category: 'Vegetable',
      totalBillAmount: 2000,
      coinDiscountApplied: 600,
      netPayableAmount: 1400,
      paymentMethod: 'store_counter',
      status: 'completed',
      invoiceNumber: 'INV-2026-0915-08',
      billDate: '15 Sep 2026',
      createdAt: '2026-09-15T10:45:00Z',
      isDemo: true,
    },
  ]

  async getPurchases(): Promise<Purchase[]> {
    await new Promise((r) => setTimeout(r, 200))
    return [...this.purchases]
  }

  async getPurchaseById(id: string): Promise<Purchase | null> {
    await new Promise((r) => setTimeout(r, 100))
    const item = this.purchases.find((p) => p.id === id)
    return item || null
  }

  async recordCounterPurchase(input: CreatePurchaseInput): Promise<Purchase> {
    await new Promise((r) => setTimeout(r, 300))

    const newPurchase: Purchase = {
      id: `PUR-${Math.floor(8500 + Math.random() * 500)}`,
      userId: 'WM-84920',
      merchantId: input.merchantId,
      merchantName: 'Partner Merchant (Demo)',
      category: 'Store Counter',
      totalBillAmount: input.totalBillAmount,
      coinDiscountApplied: input.coinDiscountApplied,
      netPayableAmount: input.totalBillAmount - input.coinDiscountApplied,
      paymentMethod: input.paymentMethod,
      status: 'completed',
      invoiceNumber: input.invoiceNumber || `INV-DEMO-${Date.now()}`,
      billDate: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      createdAt: new Date().toISOString(),
      isDemo: true,
      notes: input.notes,
    }

    this.purchases.unshift(newPurchase)
    return newPurchase
  }
}

export const mockPurchaseService = new MockPurchaseService()
