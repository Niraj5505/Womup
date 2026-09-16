import type { User, UserAuthSession } from '../../types/entities/user.ts'

export interface LoginCredentials {
  identifier: string // Mobile or Email
  password: string
  rememberMe?: boolean
}

export interface RegisterInput {
  fullName: string
  mobileNumber: string
  email: string
  city: string
  referralId: string
  password: string
}

export interface IAuthService {
  login(credentials: LoginCredentials): Promise<UserAuthSession>
  register(data: RegisterInput): Promise<UserAuthSession>
  logout(): Promise<void>
  getCurrentUser(): Promise<User | null>
  isAuthenticated(): boolean
}
