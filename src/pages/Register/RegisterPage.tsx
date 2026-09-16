import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Phone,
  Mail,
  MapPin,
  Share2,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Coins,
  Sparkles,
  ShoppingBag,
  Store,
  RefreshCw,
} from 'lucide-react'
import { Container } from '../../components/ui/Container.tsx'
import { Card } from '../../components/ui/Card.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { Input } from '../../components/ui/Input.tsx'
import { Badge } from '../../components/ui/Badge.tsx'
import { IconBox } from '../../components/ui/IconBox.tsx'
import { useToast } from '../../hooks/useToast.ts'
import { useRouter } from '../../router/RouterContext.tsx'

interface FormData {
  fullName: string
  mobileNumber: string
  email: string
  city: string
  referralId: string
  password: string
  confirmPassword: string
  agreeTerms: boolean
}

interface FormErrors {
  fullName?: string
  mobileNumber?: string
  email?: string
  city?: string
  referralId?: string
  password?: string
  confirmPassword?: string
  agreeTerms?: string
}

export const RegisterPage: React.FC<{ onLoginClick?: () => void }> = ({ onLoginClick }) => {
  const toast = useToast()
  const { navigate } = useRouter()

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    referralId: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [generatedMemberId, setGeneratedMemberId] = useState('')

  // Field change handler with error clearance
  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field as keyof FormErrors]: undefined }))
    }
  }

  // Comprehensive Form Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters'
    }

    // Mobile Number (Indian 10-digit format starting with 6-9)
    const mobileClean = formData.mobileNumber.replace(/\D/g, '')
    if (!mobileClean) {
      newErrors.mobileNumber = 'Mobile number is required'
    } else if (!/^[6-9]\d{9}$/.test(mobileClean)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number (starts with 6-9)'
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com)'
    }

    // City
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    } else if (formData.city.trim().length < 2) {
      newErrors.city = 'Please enter a valid city name'
    }

    // Password
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long'
    } else if (!/(?=.*[0-9])|(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password = 'Include at least one number or special symbol'
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    // Terms Checkbox
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms and Privacy Policy to register'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Mock Registration Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error(
        'Validation Incomplete',
        'Please check the highlighted fields and correct the errors before submitting.',
      )
      return
    }

    setIsSubmitting(true)

    // Simulate mock registration API network call
    setTimeout(() => {
      setIsSubmitting(false)
      const mockId = `WM-${Math.floor(10000 + Math.random() * 90000)}`
      setGeneratedMemberId(mockId)
      setIsRegistered(true)

      // Trigger Toast Notifications
      toast.success(
        'Account Created Successfully! 🎉',
        `Welcome to WOMUP, ${formData.fullName.split(' ')[0]}! Your Member ID is ${mockId}.`,
      )

      setTimeout(() => {
        toast.reward(
          '₹2,000 Shopping Coin Activated! 🪙',
          'Promotional shopping coin credit is now available for partner store purchases.',
        )
      }, 700)
    }, 1100)
  }

  // Reset form to register another user
  const handleResetForm = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      city: '',
      referralId: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    })
    setErrors({})
    setIsRegistered(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-slate-50 to-white py-12 lg:py-16">
      <Container size="lg">
        {/* ------------------------------------------------------------- */}
        {/* SUCCESS STATE DISPLAY */}
        {/* ------------------------------------------------------------- */}
        {isRegistered ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <Card variant="elevated" padding="lg" className="border-purple-200 shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Registration Successful
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display mt-3 mb-2">
                Welcome to WOMUP!
              </h2>

              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Your member profile has been registered in the promotional database. You can now explore partner outlets and utilize your Shopping Coins.
              </p>

              {/* Digital Member Card Preview */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-900 via-womup-purple to-purple-950 text-white text-left shadow-lg relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-36 h-36 bg-womup-magenta/20 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-purple-200 uppercase">
                    WOMUP Member Card
                  </span>
                  <Badge variant="gold" size="sm" icon={<Sparkles className="w-3 h-3" />}>
                    Active
                  </Badge>
                </div>

                <div className="text-xl font-black font-mono tracking-wider mb-3">
                  {generatedMemberId}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs border-t border-purple-800/80 pt-3">
                  <div>
                    <span className="text-purple-300/80 text-[11px] block">Member Name</span>
                    <span className="font-bold text-white truncate block">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-purple-300/80 text-[11px] block">Location</span>
                    <span className="font-bold text-white truncate block">{formData.city}</span>
                  </div>
                </div>

                <div className="mt-4 p-2.5 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-amber-300" />
                    <span className="text-xs text-purple-200">Promotional Shopping Coin</span>
                  </div>
                  <span className="text-sm font-black text-amber-300 font-inr">₹2,000</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  rightIcon={<Store className="w-4 h-4" />}
                  onClick={() => navigate('/partners')}
                >
                  Explore Demo Partners
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  onClick={() => navigate('/')}
                >
                  Return to Home
                </Button>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                <span>Want to test with another account?</span>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="text-womup-purple font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Register Another</span>
                </button>
              </div>
            </Card>
          </motion.div>
        ) : (
          /* ------------------------------------------------------------- */
          /* REGISTRATION FORM (DEFAULT VIEW) */
          /* ------------------------------------------------------------- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Brand Pillars & Rewards Highlights */}
            <div className="lg:col-span-5 space-y-6 pt-2">
              <div>
                <Badge variant="purple" size="md" icon={<Sparkles className="w-3.5 h-3.5 text-womup-purple" />}>
                  Free Membership
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display mt-3">
                  Join WOMUP
                </h1>
                <p className="text-base text-slate-600 mt-2 leading-relaxed">
                  Create your account and get started.
                </p>
              </div>

              {/* Benefits Feature Cards */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                  <IconBox color="gold" size="md" shape="squircle">
                    <Coins className="w-5 h-5 text-amber-800" />
                  </IconBox>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">₹2,000 Shopping Coin</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Shop smarter on everyday groceries, dining, salon, and essentials with promotional coin deductions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                  <IconBox color="purple" size="md" shape="squircle">
                    <ShoppingBag className="w-5 h-5 text-womup-purple" />
                  </IconBox>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">14 Merchant Categories</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Kirana, vegetables, medicines, restaurants, footwear, apparel, and more across local partner hubs.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                  <IconBox color="magenta" size="md" shape="squircle">
                    <ShieldCheck className="w-5 h-5 text-womup-magenta" />
                  </IconBox>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">No Investment • No Selling</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Zero joining fees and zero inventory holding as illustrated in WOMUP promotional materials.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Tag */}
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-womup-purple block mb-1">
                  100% Free Account Registration
                </span>
                No financial commitment is required to create an account. All benefits reflect the WOMUP promotional framework.
              </div>
            </div>

            {/* Right Column: Registration Form Card */}
            <div className="lg:col-span-7">
              <Card variant="default" padding="lg" className="border-slate-200 shadow-md">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 font-display">
                    Member Registration
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in your details below to create your free account.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name */}
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name (e.g. Priya Sharma)"
                    leftIcon={<User className="w-4 h-4 text-slate-400" />}
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    error={errors.fullName}
                    disabled={isSubmitting}
                    required
                  />

                  {/* Two-Column Grid: Mobile & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Mobile Number with Indian +91 Prefix */}
                    <Input
                      label="Mobile Number"
                      placeholder="98765 43210"
                      prefixText="+91"
                      type="tel"
                      maxLength={10}
                      leftIcon={<Phone className="w-4 h-4 text-slate-400" />}
                      value={formData.mobileNumber}
                      onChange={(e) => {
                        const numericOnly = e.target.value.replace(/\D/g, '')
                        handleChange('mobileNumber', numericOnly)
                      }}
                      error={errors.mobileNumber}
                      helperText={!errors.mobileNumber ? '10-digit Indian mobile number' : undefined}
                      disabled={isSubmitting}
                      required
                    />

                    {/* Email */}
                    <Input
                      label="Email Address"
                      placeholder="you@example.com"
                      type="email"
                      leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      error={errors.email}
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {/* Two-Column Grid: City & Referral ID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City */}
                    <Input
                      label="City"
                      placeholder="E.g. Pune, Mumbai, Delhi, Jaipur..."
                      leftIcon={<MapPin className="w-4 h-4 text-slate-400" />}
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      error={errors.city}
                      disabled={isSubmitting}
                      required
                    />

                    {/* Referral ID (Optional) */}
                    <Input
                      label="Referral ID"
                      placeholder="E.g. WM-1082 (Optional)"
                      leftIcon={<Share2 className="w-4 h-4 text-slate-400" />}
                      value={formData.referralId}
                      onChange={(e) => handleChange('referralId', e.target.value)}
                      badge={<Badge variant="outline" size="sm">Optional</Badge>}
                      helperText="Enter sponsor ID if invited by a friend"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Two-Column Grid: Password & Confirm Password */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Password */}
                    <div className="relative">
                      <Input
                        label="Password"
                        placeholder="Min 8 characters"
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
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        error={errors.password}
                        disabled={isSubmitting}
                        required
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                      <Input
                        label="Confirm Password"
                        placeholder="Re-enter password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                        rightIcon={
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="text-slate-400 hover:text-slate-600 cursor-pointer focus:outline-none"
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        }
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        error={errors.confirmPassword}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>

                  {/* Terms & Privacy Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                        disabled={isSubmitting}
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-womup-purple focus:ring-womup-purple cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        I agree to the{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            toast.info(
                              'Terms of Service',
                              'Standard terms of participation apply. Verified purchases determine coin utility.',
                            )
                          }}
                          className="text-womup-purple font-bold hover:underline cursor-pointer"
                        >
                          Terms
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            toast.info(
                              'Privacy Policy',
                              'Your information is protected and used solely for account and rewards administration.',
                            )
                          }}
                          className="text-womup-purple font-bold hover:underline cursor-pointer"
                        >
                          Privacy Policy
                        </button>
                        .
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <p className="text-xs text-rose-500 font-medium mt-1.5 ml-7">
                        {errors.agreeTerms}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Create Account
                    </Button>
                  </div>

                  {/* Already have an account? Login */}
                  <div className="pt-4 text-center border-t border-slate-100">
                    <p className="text-sm text-slate-600">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          if (onLoginClick) {
                            onLoginClick()
                          } else {
                            toast.info('Login', 'Please use the Login button in the top navigation bar.')
                          }
                        }}
                        className="text-womup-purple font-bold hover:underline cursor-pointer"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </Card>

              {/* Informational Compliance Note */}
              <div className="mt-4 text-center text-[11px] text-slate-400">
                Promotional account demo. No live payment gateway or third-party data tracking is attached.
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
