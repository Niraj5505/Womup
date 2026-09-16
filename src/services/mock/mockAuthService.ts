import type { IAuthService, LoginCredentials, RegisterInput } from '../interfaces/auth.interface.ts'
import type { User, UserAuthSession } from '../../types/entities/user.ts'
import { env } from '../../config/env.ts'

const DEMO_USER: User = {
  id: 'WM-84920',
  fullName: 'Priya Sharma',
  mobileNumber: '9876543210',
  email: 'priya.sharma@example.com',
  city: 'Pune',
  referralCode: 'WM-84920',
  referredBy: 'WM-10001',
  role: 'member',
  status: 'active',
  shoppingCoinBalance: 2000,
  createdAt: '2026-08-01T10:00:00Z',
  updatedAt: '2026-09-16T10:00:00Z',
}

export class MockAuthService implements IAuthService {
  private currentUser: User | null = DEMO_USER

  async login(credentials: LoginCredentials): Promise<UserAuthSession> {
    await new Promise((r) => setTimeout(r, 400)) // simulate network

    const user: User = {
      ...DEMO_USER,
      fullName: credentials.identifier.includes('@')
        ? credentials.identifier.split('@')[0]
        : 'Priya Sharma',
      email: credentials.identifier.includes('@') ? credentials.identifier : DEMO_USER.email,
    }
    this.currentUser = user
    try {
      localStorage.setItem(env.authTokenKey, 'mock_demo_jwt_token_womup')
    } catch {
      // safe storage ignore
    }

    return {
      user,
      accessToken: 'mock_demo_jwt_token_womup',
      refreshToken: 'mock_demo_refresh_token_womup',
      expiresAt: Date.now() + 3600 * 1000,
    }
  }

  async register(data: RegisterInput): Promise<UserAuthSession> {
    await new Promise((r) => setTimeout(r, 600)) // simulate network

    const newUser: User = {
      id: `WM-${Math.floor(10000 + Math.random() * 90000)}`,
      fullName: data.fullName,
      mobileNumber: data.mobileNumber,
      email: data.email,
      city: data.city,
      referralCode: `WM-${Math.floor(10000 + Math.random() * 90000)}`,
      referredBy: data.referralId || null,
      role: 'member',
      status: 'active',
      shoppingCoinBalance: 2000, // Promotional initial allocation
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    this.currentUser = newUser
    try {
      localStorage.setItem(env.authTokenKey, 'mock_demo_jwt_token_womup')
    } catch {
      // safe storage ignore
    }

    return {
      user: newUser,
      accessToken: 'mock_demo_jwt_token_womup',
      refreshToken: 'mock_demo_refresh_token_womup',
      expiresAt: Date.now() + 3600 * 1000,
    }
  }

  async logout(): Promise<void> {
    await new Promise((r) => setTimeout(r, 200))
    this.currentUser = null
    try {
      localStorage.removeItem(env.authTokenKey)
      localStorage.removeItem(env.refreshTokenKey)
    } catch {
      // safe storage ignore
    }
  }

  async getCurrentUser(): Promise<User | null> {
    return this.currentUser
  }

  isAuthenticated(): boolean {
    return true // In demo mode, user is authenticated
  }
}

export const mockAuthService = new MockAuthService()
