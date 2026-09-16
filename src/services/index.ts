/**
 * Central Service Registry
 * Dynamically resolves between Mock Services (for standalone demo/client-side work)
 * and Live REST API Services based on the environment configuration `VITE_USE_MOCK_API`.
 */

import { env } from '../config/env.ts'

// Mock implementations
import { mockAuthService } from './mock/mockAuthService.ts'
import { mockUserService } from './mock/mockUserService.ts'
import { mockMerchantService } from './mock/mockMerchantService.ts'
import { mockShoppingCoinService } from './mock/mockShoppingCoinService.ts'
import { mockPurchaseService } from './mock/mockPurchaseService.ts'
import { mockReferralService } from './mock/mockReferralService.ts'
import { mockTeamService } from './mock/mockTeamService.ts'
import { mockIncomeService } from './mock/mockIncomeService.ts'
import { mockNotificationService } from './mock/mockNotificationService.ts'

// Real API implementations
import { apiAuthService } from './api-impl/apiAuthService.ts'
import { apiUserService } from './api-impl/apiUserService.ts'
import { apiMerchantService } from './api-impl/apiMerchantService.ts'
import { apiShoppingCoinService } from './api-impl/apiShoppingCoinService.ts'
import { apiPurchaseService } from './api-impl/apiPurchaseService.ts'
import { apiReferralService } from './api-impl/apiReferralService.ts'
import { apiTeamService } from './api-impl/apiTeamService.ts'
import { apiIncomeService } from './api-impl/apiIncomeService.ts'
import { apiNotificationService } from './api-impl/apiNotificationService.ts'

// Interfaces
import type { IAuthService } from './interfaces/auth.interface.ts'
import type { IUserService } from './interfaces/user.interface.ts'
import type { IMerchantService } from './interfaces/merchant.interface.ts'
import type { IShoppingCoinService } from './interfaces/shoppingCoin.interface.ts'
import type { IPurchaseService } from './interfaces/purchase.interface.ts'
import type { IReferralService } from './interfaces/referral.interface.ts'
import type { ITeamService } from './interfaces/team.interface.ts'
import type { IIncomeService } from './interfaces/income.interface.ts'
import type { INotificationService } from './interfaces/notification.interface.ts'

import { mockAdminService } from './mock/mockAdminService.ts'
import type { IAdminService } from './interfaces/admin.interface.ts'

export const isMockMode = env.useMockApi

// Service Singletons
export const authService: IAuthService = isMockMode ? mockAuthService : apiAuthService
export const userService: IUserService = isMockMode ? mockUserService : apiUserService
export const merchantService: IMerchantService = isMockMode
  ? mockMerchantService
  : apiMerchantService
export const shoppingCoinService: IShoppingCoinService = isMockMode
  ? mockShoppingCoinService
  : apiShoppingCoinService
export const purchaseService: IPurchaseService = isMockMode
  ? mockPurchaseService
  : apiPurchaseService
export const referralService: IReferralService = isMockMode
  ? mockReferralService
  : apiReferralService
export const teamService: ITeamService = isMockMode ? mockTeamService : apiTeamService
export const incomeService: IIncomeService = isMockMode ? mockIncomeService : apiIncomeService
export const notificationService: INotificationService = isMockMode
  ? mockNotificationService
  : apiNotificationService
export const adminService: IAdminService = mockAdminService

// Export Interfaces
export type * from './interfaces/auth.interface.ts'
export type * from './interfaces/user.interface.ts'
export type * from './interfaces/merchant.interface.ts'
export type * from './interfaces/shoppingCoin.interface.ts'
export type * from './interfaces/purchase.interface.ts'
export type * from './interfaces/referral.interface.ts'
export type * from './interfaces/team.interface.ts'
export type * from './interfaces/income.interface.ts'
export type * from './interfaces/notification.interface.ts'
export type * from './interfaces/admin.interface.ts'

// Export API Client and Endpoints
export { apiClient } from './api/apiClient.ts'
export { ENDPOINTS } from './api/endpoints.ts'
