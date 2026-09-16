import type {
  ShoppingCoinTransaction,
  ShoppingCoinWalletSummary,
  CoinTransactionFilters,
} from '../../types/entities/shoppingCoin.ts'

export interface CoinRedemptionInput {
  merchantId: string
  coinAmount: number
  billAmount: number
}

export interface IShoppingCoinService {
  getWalletSummary(): Promise<ShoppingCoinWalletSummary>
  getTransactions(filters?: CoinTransactionFilters): Promise<ShoppingCoinTransaction[]>
  getTransactionById(id: string): Promise<ShoppingCoinTransaction | null>
  redeemCoins(input: CoinRedemptionInput): Promise<ShoppingCoinTransaction>
}
