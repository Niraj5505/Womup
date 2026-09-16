/**
 * Standard API Envelopes and Response Types
 */

export interface ApiResponse<T = unknown> {
  success: boolean
  data: T
  message?: string
  timestamp: string
}

export interface PaginatedResponse<T = unknown> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasNextPage: boolean
}

export interface ApiErrorDetail {
  field?: string
  message: string
  code?: string
}

export interface ApiErrorResponse {
  success: false
  message: string
  statusCode: number
  errors?: ApiErrorDetail[]
  timestamp: string
}

export class ApiError extends Error {
  statusCode: number
  errors?: ApiErrorDetail[]

  constructor(message: string, statusCode: number = 500, errors?: ApiErrorDetail[]) {
    super(message)
    this.name = 'ApiError'
    this.statusCode = statusCode
    this.errors = errors
    Object.setPrototypeOf(this, ApiError.prototype)
  }
}
