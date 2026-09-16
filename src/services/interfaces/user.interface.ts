import type { User, UserProfileUpdateInput } from '../../types/entities/user.ts'

export interface DashboardSummary {
  user: User
  shoppingCoinBalance: number
  totalDisplayedSavings: number
  referralCount: number
  repurchasingIncome: number
  isDemo: boolean
}

export interface IUserService {
  getProfile(): Promise<User>
  updateProfile(input: UserProfileUpdateInput): Promise<User>
  getDashboardSummary(): Promise<DashboardSummary>
}
