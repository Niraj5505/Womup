import type { IUserService, DashboardSummary } from '../interfaces/user.interface.ts'
import type { User, UserProfileUpdateInput } from '../../types/entities/user.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiUserService implements IUserService {
  async getProfile(): Promise<User> {
    return apiClient.get<User>(ENDPOINTS.USERS.PROFILE)
  }

  async updateProfile(input: UserProfileUpdateInput): Promise<User> {
    return apiClient.patch<User>(ENDPOINTS.USERS.UPDATE_PROFILE, input)
  }

  async getDashboardSummary(): Promise<DashboardSummary> {
    return apiClient.get<DashboardSummary>(ENDPOINTS.USERS.DASHBOARD_SUMMARY)
  }
}

export const apiUserService = new ApiUserService()
