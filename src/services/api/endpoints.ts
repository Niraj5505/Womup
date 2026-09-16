/**
 * Standardized Backend REST API Endpoints for WOMUP
 */

export const ENDPOINTS = {
  // Authentication & Session
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },

  // Users & Profile
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    CHANGE_PASSWORD: '/users/change-password',
    DASHBOARD_SUMMARY: '/users/dashboard-summary',
  },

  // Merchants & Store Directory
  MERCHANTS: {
    LIST: '/merchants',
    DETAIL: (id: string) => `/merchants/${id}`,
    CATEGORIES: '/merchants/categories',
    FEATURED: '/merchants/featured',
  },

  // Shopping Coin Wallet & Ledger
  SHOPPING_COINS: {
    WALLET: '/coins/wallet',
    TRANSACTIONS: '/coins/transactions',
    TRANSACTION_DETAIL: (id: string) => `/coins/transactions/${id}`,
    REDEEM: '/coins/redeem',
    RULES: '/coins/rules',
  },

  // In-Store Purchases & Receipts
  PURCHASES: {
    LIST: '/purchases',
    DETAIL: (id: string) => `/purchases/${id}`,
    CREATE: '/purchases',
  },

  // Referrals & Network
  REFERRALS: {
    SUMMARY: '/referrals/summary',
    LIST: '/referrals',
    TREE: '/referrals/tree',
    VALIDATE_CODE: (code: string) => `/referrals/validate/${code}`,
  },

  // Organizational Team Hierarchy (Levels 1-7)
  TEAM: {
    STRUCTURE: '/team/structure',
    MEMBERS_BY_LEVEL: (level: number) => `/team/levels/${level}/members`,
  },

  // Income & Benefits (Promotional Model Data)
  INCOME: {
    SUMMARY: '/income/summary',
    TRANSACTIONS: '/income/transactions',
  },

  // Notifications
  NOTIFICATIONS: {
    LIST: '/notifications',
    MARK_READ: (id: string) => `/notifications/${id}/read`,
    MARK_ALL_READ: '/notifications/mark-all-read',
    DELETE: (id: string) => `/notifications/${id}`,
  },
} as const
