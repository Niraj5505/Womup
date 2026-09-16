import React, { createContext, useContext, useState, useCallback } from 'react'

export type ToastVariant = 'success' | 'reward' | 'info' | 'error'

export interface ToastItem {
  id: string
  title: string
  message?: string
  variant: ToastVariant
  duration?: number
}

interface ToastContextType {
  toasts: ToastItem[]
  showToast: (toast: Omit<ToastItem, 'id'>) => void
  dismissToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    ({ title, message, variant, duration = 4000 }: Omit<ToastItem, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9)
      const newToast: ToastItem = { id, title, message, variant, duration }

      setToasts((prev) => [...prev, newToast])

      if (duration > 0) {
        setTimeout(() => {
          dismissToast(id)
        }, duration)
      }
    },
    [dismissToast],
  )

  return (
    <ToastContext.Provider value={{ toasts, showToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider')
  }
  return context
}
