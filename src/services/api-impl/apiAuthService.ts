import type { IAuthService, LoginCredentials, RegisterInput } from '../interfaces/auth.interface.ts'
import type { User, UserAuthSession } from '../../types/entities/user.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'
import { env } from '../../config/env.ts'

export class ApiAuthService implements IAuthService {
  async login(credentials: LoginCredentials): Promise<UserAuthSession> {
    const session = await apiClient.post<UserAuthSession>(
      ENDPOINTS.AUTH.LOGIN,
      credentials,
      { skipAuth: true }
    )
    if (session.accessToken) {
      try {
        localStorage.setItem(env.authTokenKey, session.accessToken)
        if (session.refreshToken) {
          localStorage.setItem(env.refreshTokenKey, session.refreshToken)
        }
      } catch {
        // Safe storage ignore
      }
    }
    return session
  }

  async register(data: RegisterInput): Promise<UserAuthSession> {
    const session = await apiClient.post<UserAuthSession>(
      ENDPOINTS.AUTH.REGISTER,
      data,
      { skipAuth: true }
    )
    if (session.accessToken) {
      try {
        localStorage.setItem(env.authTokenKey, session.accessToken)
        if (session.refreshToken) {
          localStorage.setItem(env.refreshTokenKey, session.refreshToken)
        }
      } catch {
        // Safe storage ignore
      }
    }
    return session
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post(ENDPOINTS.AUTH.LOGOUT)
    } finally {
      try {
        localStorage.removeItem(env.authTokenKey)
        localStorage.removeItem(env.refreshTokenKey)
      } catch {
        // Safe storage ignore
      }
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      return await apiClient.get<User>(ENDPOINTS.AUTH.ME)
    } catch {
      return null
    }
  }

  isAuthenticated(): boolean {
    try {
      return Boolean(localStorage.getItem(env.authTokenKey))
    } catch {
      return false
    }
  }
}

export const apiAuthService = new ApiAuthService()
