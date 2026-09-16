import type { IUserService, DashboardSummary } from '../interfaces/user.interface.ts'
import type { User, UserProfileUpdateInput } from '../../types/entities/user.ts'
import { mockAuthService } from './mockAuthService.ts'

export class MockUserService implements IUserService {
  async getProfile(): Promise<User> {
    await new Promise((r) => setTimeout(r, 200))
    const user = await mockAuthService.getCurrentUser()
    if (!user) throw new Error('User not found')
    return user
  }

  async updateProfile(input: UserProfileUpdateInput): Promise<User> {
    await new Promise((r) => setTimeout(r, 300))
    const user = await mockAuthService.getCurrentUser()
    if (!user) throw new Error('User not found')
    const updated = { ...user, ...input, updatedAt: new Date().toISOString() }
    return updated
  }

  async getDashboardSummary(): Promise<DashboardSummary> {
    await new Promise((r) => setTimeout(r, 250))
    const user = await this.getProfile()
    return {
      user,
      shoppingCoinBalance: 2000,
      totalDisplayedSavings: 4250,
      referralCount: 18,
      repurchasingIncome: 12450,
      isDemo: true,
    }
  }
}

export const mockUserService = new MockUserService()
