/**
 * ShoppingCoinTransaction Entity
 * Records allowances, partner store redemptions, bonus credits, and expiration of WOMUP Shopping Coins.
 */

export type CoinTransactionType = 'credit' | 'debit' | 'expired' | 'bonus' | 'refund'
export type CoinTransactionStatus = 'completed' | 'pending' | 'failed' | 'expired'

export interface ShoppingCoinTransaction {
  id: string
  userId: string
  merchantId?: string | null
  merchantName?: string
  category?: string
  purchaseAmount?: number
  shoppingCoin: number
  type: CoinTransactionType
  status: CoinTransactionStatus
  description: string
  referenceId?: string
  date: string
  rawDate?: string
  createdAt: string
}

export interface ShoppingCoinWalletSummary {
  availableCoins: number
  usedCoins: number
  earnedCoins: number
  expiredCoins: number
  monthlyAllowanceLimit: number
  isDemo: boolean
}

export interface CoinTransactionFilters {
  dateRange?: 'all' | 'this-month' | 'last-month' | 'last-90'
  category?: string
  type?: 'all' | 'credit' | 'debit' | 'expired'
  status?: string
  query?: string
  limit?: number
  offset?: number
}
