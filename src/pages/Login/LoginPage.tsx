import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  KeyRound,
} from 'lucide-react'
import { Container } from '../../components/ui/Container.tsx'
import { Card } from '../../components/ui/Card.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { Input } from '../../components/ui/Input.tsx'
import { IconBox } from '../../components/ui/IconBox.tsx'
import { Modal } from '../../components/ui/Modal.tsx'
import { BrandLogo } from '../../components/common/BrandLogo.tsx'
import { useToast } from '../../hooks/useToast.ts'
import { useRouter } from '../../router/RouterContext.tsx'

interface FormErrors {
  identifier?: string
  password?: string
}

export const LoginPage: React.FC = () => {
  const toast = useToast()
  const { navigate } = useRouter()

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const [forgotEmailOrPhone, setForgotEmailOrPhone] = useState('')
  const [isSendingReset, setIsSendingReset] = useState(false)

  // Quick Auto-fill for reviewer testing convenience
  const handleAutoFillDemo = () => {
    setIdentifier('demo@womup.in')
    setPassword('Womup@2026')
    setErrors({})
    toast.info('Demo Credentials Loaded', 'Sample mobile/email and password auto-filled for instant testing.')
  }

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    const trimmedId = identifier.trim()

    // Validate identifier (must be either 10-digit mobile or valid email)
    if (!trimmedId) {
      newErrors.identifier = 'Mobile number or email address is required'
    } else {
      const isDigitsOnly = /^\d+$/.test(trimmedId.replace(/\D/g, ''))
      const cleanDigits = trimmedId.replace(/\D/g, '')

      if (isDigitsOnly || (trimmedId.startsWith('+91') && cleanDigits.length === 12)) {
        // Mobile validation (10 digits starting with 6-9)
        const phone10 = cleanDigits.slice(-10)
        if (!/^[6-9]\d{9}$/.test(phone10)) {
          newErrors.identifier = 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210)'
        }
      } else {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(trimmedId)) {
          newErrors.identifier = 'Enter a valid email address or 10-digit mobile number'
        }
      }
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle Login Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      toast.error(
        'Login Incomplete',
        'Please check your mobile/email and password before signing in.',
      )
      return
    }

    setIsSubmitting(true)

    // Simulate mock authentication API call (Zero insecure password storage)
    setTimeout(() => {
      setIsSubmitting(false)

      toast.success(
        'Welcome Back! 🎉',
        'Authentication successful. Accessing your WOMUP rewards dashboard.',
      )

      setTimeout(() => {
        toast.reward(
          'Wallet Synced: ₹2,000 Shopping Coin',
          'Your promotional balance is ready to use at participating partner outlets.',
        )
        navigate('/dashboard')
      }, 700)
    }, 1000)
  }

  // Handle Forgot Password mock flow
  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!forgotEmailOrPhone.trim()) {
      toast.error('Required Field', 'Please enter your registered mobile number or email.')
      return
    }

    setIsSendingReset(true)
    setTimeout(() => {
      setIsSendingReset(false)
      setIsForgotPasswordOpen(false)
      setForgotEmailOrPhone('')
      toast.success(
        'Reset Link Dispatched 📩',
        `A verification code has been sent to ${forgotEmailOrPhone}. Please check your inbox or SMS.`,
      )
    }, 900)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-slate-50 to-white py-12 lg:py-16 flex items-center justify-center">
      <Container size="sm" className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {/* Top Brand Header */}
          <div className="text-center mb-8">
            <div className="inline-flex justify-center mb-4">
              <BrandLogo size="lg" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-slate-600 mt-1.5 max-w-sm mx-auto">
              Login to access your WOMUP Shopping Coins and member benefits.
            </p>
          </div>

          {/* Login Card */}
          <Card variant="default" padding="lg" className="border-slate-200 shadow-md">
            {/* Quick Demo Helper Strip */}
            <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200/80 mb-6 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-womup-purple font-medium">
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Testing the platform?</span>
              </div>
              <button
                type="button"
                onClick={handleAutoFillDemo}
                className="font-bold text-womup-purple hover:text-womup-magenta cursor-pointer hover:underline"
              >
                Auto-fill Demo &rarr;
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Field 1: Mobile / Email */}
              <Input
                label="Mobile / Email"
                placeholder="Enter 10-digit mobile or email address"
                leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value)
                  if (errors.identifier) setErrors((prev) => ({ ...prev, identifier: undefined }))
                }}
                error={errors.identifier}
                disabled={isSubmitting}
                required
              />

              {/* Field 2: Password */}
              <div className="relative">
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                  leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-slate-400 hover:text-slate-600 cursor-pointer focus:outline-none"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  }
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                  }}
                  error={errors.password}
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Options Row: Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1 pb-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs sm:text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isSubmitting}
                    className="w-4 h-4 rounded border-slate-300 text-womup-purple focus:ring-womup-purple cursor-pointer"
                  />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  onClick={() => setIsForgotPasswordOpen(true)}
                  className="text-xs sm:text-sm text-womup-purple font-semibold hover:underline cursor-pointer focus:outline-none"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Button: Login */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Login
                </Button>
              </div>

              {/* Below: Don't have an account? Join Free */}
              <div className="pt-5 mt-2 text-center border-t border-slate-100">
                <p className="text-sm text-slate-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="text-womup-purple font-bold hover:text-womup-magenta hover:underline cursor-pointer"
                  >
                    Join Free
                  </button>
                </p>
              </div>
            </form>
          </Card>

          {/* Bottom Security Assurance Note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Encrypted Session • Mock Authentication Demo</span>
          </div>
        </motion.div>
      </Container>

      {/* ------------------------------------------------------------- */}
      {/* FORGOT PASSWORD MODAL */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        title="Reset Your Password"
        description="Enter your registered mobile or email to receive password reset instructions."
        icon={
          <IconBox color="purple" size="md" shape="squircle">
            <KeyRound className="w-5 h-5 text-womup-purple" />
          </IconBox>
        }
        footer={
          <div className="w-full flex items-center justify-end gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsForgotPasswordOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              isLoading={isSendingReset}
              onClick={handleForgotSubmit}
            >
              Send Reset Link
            </Button>
          </div>
        }
      >
        <form onSubmit={handleForgotSubmit} className="space-y-4">
          <Input
            label="Registered Mobile or Email"
            placeholder="e.g. 9876543210 or name@example.com"
            value={forgotEmailOrPhone}
            onChange={(e) => setForgotEmailOrPhone(e.target.value)}
            leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
            required
            autoFocus
          />
          <p className="text-xs text-slate-500 leading-relaxed">
            In demonstration mode, submitting will simulate an instant OTP / recovery notification without real database writes.
          </p>
        </form>
      </Modal>
    </div>
  )
}
