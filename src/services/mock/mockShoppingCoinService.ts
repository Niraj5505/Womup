import type {
  IShoppingCoinService,
  CoinRedemptionInput,
} from '../interfaces/shoppingCoin.interface.ts'
import type {
  ShoppingCoinTransaction,
  ShoppingCoinWalletSummary,
  CoinTransactionFilters,
} from '../../types/entities/shoppingCoin.ts'

export class MockShoppingCoinService implements IShoppingCoinService {
  private transactions: ShoppingCoinTransaction[] = [
    {
      id: 'TXN-9021',
      userId: 'WM-84920',
      merchantId: 'M-101',
      merchantName: 'Sharma Super Kirana & Provision Store',
      category: 'Kirana',
      purchaseAmount: 10000,
      shoppingCoin: 600,
      type: 'debit',
      status: 'completed',
      description: 'Monthly grocery shopping bill deduction',
      date: '16 Sep 2026, 2:15 PM',
      rawDate: '2026-09-16',
      createdAt: '2026-09-16T14:15:00Z',
    },
    {
      id: 'TXN-9019',
      userId: 'WM-84920',
      merchantId: 'M-102',
      merchantName: 'Green Fresh Organic Vegetable Mart',
      category: 'Vegetable',
      purchaseAmount: 2000,
      shoppingCoin: 600,
      type: 'debit',
      status: 'completed',
      description: 'Weekly fresh vegetables & fruits basket',
      date: '15 Sep 2026, 10:45 AM',
      rawDate: '2026-09-15',
      createdAt: '2026-09-15T10:45:00Z',
    },
    {
      id: 'TXN-9015',
      userId: 'WM-84920',
      merchantId: 'M-103',
      merchantName: 'Sanjivani Medicos & Wellness Clinic',
      category: 'Medical',
      purchaseAmount: 2000,
      shoppingCoin: 300,
      type: 'debit',
      status: 'completed',
      description: 'Prescription medicines and healthcare supplies',
      date: '12 Sep 2026, 6:30 PM',
      rawDate: '2026-09-12',
      createdAt: '2026-09-12T18:30:00Z',
    },
    {
      id: 'TXN-9008',
      userId: 'WM-84920',
      merchantId: 'M-104',
      merchantName: 'Spice Symphony Family Fine Dine',
      category: 'Restaurant',
      purchaseAmount: 1800,
      shoppingCoin: 300,
      type: 'debit',
      status: 'completed',
      description: 'Weekend dinner banquet voucher discount',
      date: '08 Sep 2026, 8:50 PM',
      rawDate: '2026-09-08',
      createdAt: '2026-09-08T20:50:00Z',
    },
    {
      id: 'TXN-9001',
      userId: 'WM-84920',
      merchantName: 'WOMUP Monthly Promotional Allowance',
      category: 'Rewards Allowance',
      purchaseAmount: 0,
      shoppingCoin: 2000,
      type: 'credit',
      status: 'completed',
      description: 'Monthly Shopping Coin benefit allocation',
      date: '01 Sep 2026, 12:00 AM',
      rawDate: '2026-09-01',
      createdAt: '2026-09-01T00:00:00Z',
    },
    {
      id: 'TXN-8840',
      userId: 'WM-84920',
      merchantName: 'WOMUP Free Registration Bonus',
      category: 'Registration Bonus',
      purchaseAmount: 0,
      shoppingCoin: 1800,
      type: 'credit',
      status: 'completed',
      description: 'Welcome Shopping Coins upon member account verification',
      date: '15 Aug 2026, 11:30 AM',
      rawDate: '2026-08-15',
      createdAt: '2026-08-15T11:30:00Z',
    },
  ]

  async getWalletSummary(): Promise<ShoppingCoinWalletSummary> {
    await new Promise((r) => setTimeout(r, 200))
    return {
      availableCoins: 2000,
      usedCoins: 1800,
      earnedCoins: 3800,
      expiredCoins: 0,
      monthlyAllowanceLimit: 2000,
      isDemo: true,
    }
  }

  async getTransactions(filters?: CoinTransactionFilters): Promise<ShoppingCoinTransaction[]> {
    await new Promise((r) => setTimeout(r, 200))

    let result = [...this.transactions]

    if (filters?.type && filters.type !== 'all') {
      result = result.filter((t) => t.type === filters.type)
    }

    if (filters?.category && filters.category !== 'all') {
      result = result.filter((t) => t.category === filters.category)
    }

    if (filters?.query) {
      const q = filters.query.toLowerCase().trim()
      result = result.filter(
        (t) =>
          (t.merchantName && t.merchantName.toLowerCase().includes(q)) ||
          t.id.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      )
    }

    return result
  }

  async getTransactionById(id: string): Promise<ShoppingCoinTransaction | null> {
    await new Promise((r) => setTimeout(r, 100))
    const item = this.transactions.find((t) => t.id === id)
    return item || null
  }

  async redeemCoins(input: CoinRedemptionInput): Promise<ShoppingCoinTransaction> {
    await new Promise((r) => setTimeout(r, 350))

    const newTxn: ShoppingCoinTransaction = {
      id: `TXN-${Math.floor(9100 + Math.random() * 900)}`,
      userId: 'WM-84920',
      merchantId: input.merchantId,
      merchantName: 'Partner Merchant (Demo)',
      category: 'Counter Purchase',
      purchaseAmount: input.billAmount,
      shoppingCoin: input.coinAmount,
      type: 'debit',
      status: 'completed',
      description: `In-store redemption of ${input.coinAmount} Shopping Coins`,
      date: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      createdAt: new Date().toISOString(),
    }

    this.transactions.unshift(newTxn)
    return newTxn
  }
}

export const mockShoppingCoinService = new MockShoppingCoinService()
