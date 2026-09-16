import type { User, UserRole, UserStatus } from '../../types/entities/user.ts'
import type { Merchant, MerchantCategory } from '../../types/entities/merchant.ts'
import type { Purchase } from '../../types/entities/purchase.ts'
import type { ShoppingCoinTransaction } from '../../types/entities/shoppingCoin.ts'
import type { Referral } from '../../types/entities/referral.ts'
import type { IncomeTransaction } from '../../types/entities/income.ts'
import type { TeamStructureOverview } from '../../types/entities/team.ts'

export interface AdminStats {
  totalUsers: number
  activeUsers: number
  totalMerchants: number
  activeMerchants: number
  totalPurchasesCount: number
  totalPurchasesAmount: number
  shoppingCoinsIssued: number
  shoppingCoinsRedeemed: number
  totalReferrals: number
  totalRepurchasingIncomeDistributed: number
}

export interface UserManagementFilters {
  query?: string
  status?: UserStatus | 'all'
  role?: UserRole | 'all'
  sortBy?: 'createdAt' | 'fullName' | 'shoppingCoinBalance'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

export interface MerchantManagementFilters {
  query?: string
  category?: MerchantCategory | 'All'
  status?: 'all' | 'active' | 'deactivated'
  sortBy?: 'rating' | 'name' | 'createdAt'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

export interface CreateMerchantInput {
  name: string
  category: MerchantCategory
  location: string
  city: string
  address: string
  maxCoinAcceptance: number
  shoppingCoinInfo: string
  image?: string
  hours?: string
  contactPhone?: string
}

export interface UpdateMerchantInput extends Partial<CreateMerchantInput> {
  isDemo?: boolean
  rating?: number
}

export interface IAdminService {
  getStats(): Promise<AdminStats>
  getUsers(filters?: UserManagementFilters): Promise<{ users: User[]; total: number }>
  getUserById(id: string): Promise<User | null>
  updateUserStatus(userId: string, status: UserStatus): Promise<User>
  getMerchants(filters?: MerchantManagementFilters): Promise<{ merchants: Merchant[]; total: number }>
  getMerchantById(id: string): Promise<Merchant | null>
  createMerchant(input: CreateMerchantInput): Promise<Merchant>
  updateMerchant(id: string, input: UpdateMerchantInput): Promise<Merchant>
  toggleMerchantStatus(id: string): Promise<Merchant>
  getPurchases(): Promise<Purchase[]>
  getCoinTransactions(): Promise<ShoppingCoinTransaction[]>
  getReferrals(): Promise<Referral[]>
  getTeamStructure(): Promise<TeamStructureOverview>
  getIncomeTransactions(): Promise<IncomeTransaction[]>
}
