/**
 * WOMUP Generic API Client
 * Lightweight, zero-dependency HTTP client wrapper around the Fetch API with:
 * - Bearer token authorization injection
 * - Unified error handling & ApiError transformation
 * - Query parameter serialization
 * - Timeout handling
 */

import { env } from '../../config/env.ts'
import { ApiError, type ApiResponse } from '../../types/api.ts'

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
  timeoutMs?: number
  skipAuth?: boolean
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string = env.apiBaseUrl) {
    this.baseUrl = baseUrl.replace(/\/+$/, '')
  }

  /**
   * Returns current access token from client storage
   */
  private getAuthToken(): string | null {
    try {
      return localStorage.getItem(env.authTokenKey)
    } catch {
      return null
    }
  }

  /**
   * Builds full URL with serialized query parameters
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private buildUrl(path: string, params?: Record<string, any>): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    const url = new URL(`${this.baseUrl}${cleanPath}`, window.location.origin)

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.append(key, String(value))
        }
      })
    }

    return url.toString()
  }

  /**
   * Primary HTTP request runner
   */
  public async request<T = unknown>(path: string, options: RequestOptions = {}): Promise<T> {
    const { params, body, timeoutMs = 15000, skipAuth = false, headers = {}, ...customConfig } = options

    const fullUrl = this.buildUrl(path, params)
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeoutMs)

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(headers as Record<string, string>),
    }

    if (!skipAuth) {
      const token = this.getAuthToken()
      if (token) {
        requestHeaders['Authorization'] = `Bearer ${token}`
      }
    }

    try {
      const response = await fetch(fullUrl, {
        ...customConfig,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })

      clearTimeout(timer)

      // Check content-type for JSON parsing
      const contentType = response.headers.get('content-type')
      const isJson = contentType && contentType.includes('application/json')
      const data = isJson ? await response.json() : await response.text()

      if (!response.ok) {
        // Structured error response
        const message =
          (isJson && data?.message) || `HTTP error ${response.status}: ${response.statusText}`
        const errors = isJson && data?.errors ? data.errors : undefined
        throw new ApiError(message, response.status, errors)
      }

      // If wrapped in standard ApiResponse envelope, return inner data or entire response
      if (isJson && data && typeof data === 'object' && 'data' in data && 'success' in data) {
        const apiResp = data as ApiResponse<T>
        return apiResp.data
      }

      return data as T
    } catch (err: unknown) {
      clearTimeout(timer)

      if (err instanceof ApiError) {
        throw err
      }

      if (err instanceof DOMException && err.name === 'AbortError') {
        throw new ApiError(`Request timed out after ${timeoutMs}ms`, 408)
      }

      const errorMessage = err instanceof Error ? err.message : 'Network communication error'
      throw new ApiError(errorMessage, 0)
    }
  }

  public get<T = unknown>(path: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(path, { ...options, method: 'GET' })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public post<T = unknown>(path: string, body?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>(path, { ...options, method: 'POST', body })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public put<T = unknown>(path: string, body?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>(path, { ...options, method: 'PUT', body })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public patch<T = unknown>(path: string, body?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>(path, { ...options, method: 'PATCH', body })
  }

  public delete<T = unknown>(path: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(path, { ...options, method: 'DELETE' })
  }
}

export const apiClient = new ApiClient()
