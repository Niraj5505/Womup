import { useToastContext } from '../context/ToastContext.tsx'

export const useToast = () => {
  const { showToast, dismissToast } = useToastContext()

  return {
    toast: showToast,
    success: (title: string, message?: string) => showToast({ title, message, variant: 'success' }),
    reward: (title: string, message?: string) => showToast({ title, message, variant: 'reward' }),
    info: (title: string, message?: string) => showToast({ title, message, variant: 'info' }),
    error: (title: string, message?: string) => showToast({ title, message, variant: 'error' }),
    dismiss: dismissToast,
  }
}
