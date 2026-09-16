/**
 * IncomeTransaction Entity
 * Represents promotional income events:
 * 1. Shopping Coin Income
 * 2. Repurchasing Income
 * NOTE: Income figures and benefits shown are based on the WOMUP promotional material and should not be interpreted as guaranteed earnings.
 */

export type IncomeType = 'shopping_coin_income' | 'repurchasing_income'
export type IncomeStatus = 'credited' | 'pending' | 'projected'

export interface IncomeTransaction {
  id: string
  userId: string
  type: IncomeType
  typeLabel: string
  amount: number
  currency: 'INR' | 'COINS'
  levelFrom: number // 1 to 7
  sourceUserId?: string
  sourceUserName?: string
  description: string
  status: IncomeStatus
  date: string
  createdAt: string
  isDemo: boolean
}

export interface IncomeSummary {
  totalDisplayedRepurchasingIncome: number
  totalShoppingCoinIncome: number
  currentMonthProjected: number
  lastMonthIncome: number
  isDemo: boolean
  disclaimer: string
}
