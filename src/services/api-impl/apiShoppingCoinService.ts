import type {
  IShoppingCoinService,
  CoinRedemptionInput,
} from '../interfaces/shoppingCoin.interface.ts'
import type {
  ShoppingCoinTransaction,
  ShoppingCoinWalletSummary,
  CoinTransactionFilters,
} from '../../types/entities/shoppingCoin.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiShoppingCoinService implements IShoppingCoinService {
  async getWalletSummary(): Promise<ShoppingCoinWalletSummary> {
    return apiClient.get<ShoppingCoinWalletSummary>(ENDPOINTS.SHOPPING_COINS.WALLET)
  }

  async getTransactions(filters?: CoinTransactionFilters): Promise<ShoppingCoinTransaction[]> {
    return apiClient.get<ShoppingCoinTransaction[]>(ENDPOINTS.SHOPPING_COINS.TRANSACTIONS, {
      params: filters,
    })
  }

  async getTransactionById(id: string): Promise<ShoppingCoinTransaction | null> {
    try {
      return await apiClient.get<ShoppingCoinTransaction>(
        ENDPOINTS.SHOPPING_COINS.TRANSACTION_DETAIL(id)
      )
    } catch {
      return null
    }
  }

  async redeemCoins(input: CoinRedemptionInput): Promise<ShoppingCoinTransaction> {
    return apiClient.post<ShoppingCoinTransaction>(ENDPOINTS.SHOPPING_COINS.REDEEM, input)
  }
}

export const apiShoppingCoinService = new ApiShoppingCoinService()
