/**
 * Safe, centralized application environment configuration.
 * Automatically resolves defaults if environment variables are omitted.
 */

export interface AppConfig {
  apiBaseUrl: string
  useMockApi: boolean
  authTokenKey: string
  refreshTokenKey: string
  appName: string
  supportEmail: string
  supportPhone: string
  isDevelopment: boolean
  isProduction: boolean
}

// Safely parse boolean environment variable (defaults to true for standalone demo experience)
const parseBoolean = (val: string | undefined, defaultValue: boolean): boolean => {
  if (val === undefined || val === '') return defaultValue
  return val.toLowerCase() === 'true' || val === '1'
}

export const env: AppConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  useMockApi: parseBoolean(import.meta.env.VITE_USE_MOCK_API, true),
  authTokenKey: import.meta.env.VITE_AUTH_TOKEN_KEY || 'womup_auth_token',
  refreshTokenKey: import.meta.env.VITE_REFRESH_TOKEN_KEY || 'womup_refresh_token',
  appName: import.meta.env.VITE_APP_NAME || 'WOMUP',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@womup.in',
  supportPhone: import.meta.env.VITE_SUPPORT_PHONE || '+919876543210',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
}
