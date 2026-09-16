import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Sparkles, Info, AlertCircle, X } from 'lucide-react'
import { useToastContext, type ToastItem } from '../../context/ToastContext.tsx'

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useToastContext()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onDismiss={() => dismissToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  )
}

const ToastCard: React.FC<{ toast: ToastItem; onDismiss: () => void }> = ({ toast, onDismiss }) => {
  const variantConfig = {
    success: {
      border: 'border-emerald-200',
      bg: 'bg-white',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />,
      badge: 'bg-emerald-50 text-emerald-800',
    },
    reward: {
      border: 'border-amber-300',
      bg: 'bg-gradient-to-r from-amber-50/90 to-white',
      icon: <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0" />,
      badge: 'bg-amber-100 text-amber-900',
    },
    info: {
      border: 'border-purple-200',
      bg: 'bg-white',
      icon: <Info className="w-5 h-5 text-womup-purple flex-shrink-0" />,
      badge: 'bg-purple-50 text-womup-purple',
    },
    error: {
      border: 'border-rose-200',
      bg: 'bg-white',
      icon: <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />,
      badge: 'bg-rose-50 text-rose-800',
    },
  }[toast.variant]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-womup-modal ${variantConfig.border} ${variantConfig.bg}`}
    >
      <div className="mt-0.5">{variantConfig.icon}</div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-900 leading-snug">{toast.title}</h4>
        {toast.message && (
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{toast.message}</p>
        )}
      </div>

      <button
        type="button"
        onClick={onDismiss}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors cursor-pointer -mr-1 -mt-1"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}
