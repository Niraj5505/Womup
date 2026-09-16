import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Store,
  ShoppingBag,
  Coins,
  GitBranch,
  Network,
  TrendingUp,
  BarChart3,
  BellRing,
  Settings,
  ShieldCheck,
  ShieldAlert,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { BrandLogo } from '../common/BrandLogo.tsx'
import { Button } from '../ui/Button.tsx'
import { Badge } from '../ui/Badge.tsx'
import { useRouter } from '../../router/RouterContext.tsx'
import { useToast } from '../../hooks/useToast.ts'

export type AdminSectionId =
  | 'dashboard'
  | 'users'
  | 'merchants'
  | 'purchases'
  | 'coins'
  | 'referrals'
  | 'team'
  | 'income'
  | 'reports'
  | 'notifications'
  | 'settings'

interface AdminNavEntry {
  id: AdminSectionId
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

export interface AdminLayoutProps {
  activeSection: AdminSectionId
  onSectionChange: (section: AdminSectionId) => void
  children: React.ReactNode
  adminRole?: 'admin' | 'member'
  onRoleToggle?: () => void
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  activeSection,
  onSectionChange,
  children,
  adminRole = 'admin',
  onRoleToggle,
}) => {
  const { navigate } = useRouter()
  const toast = useToast()
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

  const navEntries: AdminNavEntry[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users, badge: '1.2k' },
    { id: 'merchants', label: 'Merchants', icon: Store, badge: '15' },
    { id: 'purchases', label: 'Purchases', icon: ShoppingBag },
    { id: 'coins', label: 'Shopping Coins', icon: Coins },
    { id: 'referrals', label: 'Referrals', icon: GitBranch },
    { id: 'team', label: 'Team Structure', icon: Network },
    { id: 'income', label: 'Income Transactions', icon: TrendingUp },
    { id: 'reports', label: 'Reports & Analytics', icon: BarChart3 },
    { id: 'notifications', label: 'Notifications', icon: BellRing },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  // RBAC Access Denied Screen
  if (adminRole !== 'admin') {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mb-6 shadow-2xl">
          <ShieldAlert className="w-10 h-10" />
        </div>
        <Badge variant="outline" size="md" className="border-rose-500/40 text-rose-400 mb-3">
          403 • Unauthorized Access
        </Badge>
        <h1 className="text-3xl font-black font-display text-white max-w-md">
          Restricted Administrator Console
        </h1>
        <p className="text-sm text-slate-400 mt-2 max-w-lg leading-relaxed">
          You do not have the required administrative role (<code className="font-mono text-rose-300">admin</code>) to view the WOMUP platform back-office.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button
            variant="primary"
            size="md"
            leftIcon={<ShieldCheck className="w-4 h-4 text-emerald-300" />}
            onClick={() => {
              if (onRoleToggle) onRoleToggle()
              toast.success('Admin Role Restored', 'Switched session to Administrator (Vikram Malhotra).')
            }}
          >
            Switch to Admin Role
          </Button>

          <Button
            variant="outline"
            size="md"
            className="border-slate-700 text-slate-300 hover:bg-slate-800"
            onClick={() => navigate('/dashboard')}
          >
            Return to Member Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP ADMIN SIDEBAR */}
      {/* ------------------------------------------------------------- */}
      <aside className="hidden lg:flex flex-col w-64 bg-slate-900 border-r border-slate-800 fixed inset-y-0 z-30 shadow-2xl">
        {/* Brand Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/40">
          <div className="flex items-center gap-2">
            <BrandLogo size="md" />
            <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase tracking-wider border border-purple-500/30">
              Admin
            </span>
          </div>
        </div>

        {/* Current Admin User Badge */}
        <div className="p-4 border-b border-slate-800/80 bg-purple-950/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-womup-purple to-purple-600 text-white font-bold flex items-center justify-center text-sm shadow-md border border-purple-400/30">
              VM
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-bold text-white truncate">Vikram Malhotra</h4>
              <div className="flex items-center gap-1.5 text-[11px] text-purple-300 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Super Admin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navEntries.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-womup-purple to-purple-700 text-white shadow-lg shadow-purple-950/50 font-bold border border-purple-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Sidebar Footer Shortcuts */}
        <div className="p-3 border-t border-slate-800 space-y-1 bg-slate-950/30">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-purple-300 hover:bg-slate-800/60 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Member Dashboard</span>
            </span>
            <ArrowRight className="w-3 h-3 text-slate-500" />
          </button>

          <button
            type="button"
            onClick={() => {
              if (onRoleToggle) onRoleToggle()
              toast.info('Role Switched', 'Switched active session to Standard Member for RBAC verification.')
            }}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-[11px] font-medium text-amber-400 hover:bg-amber-950/30 transition-colors cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Test RBAC Guard</span>
            </span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-amber-900/50 text-amber-300">
              Demo
            </span>
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE DRAWER */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/80 z-40 lg:hidden backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 w-72 bg-slate-900 z-50 lg:hidden flex flex-col shadow-2xl border-r border-slate-800"
            >
              <div className="h-18 px-5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BrandLogo size="md" />
                  <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase tracking-wider">
                    Admin
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-800 cursor-pointer"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User Profile */}
              <div className="p-4 bg-purple-950/30 border-b border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-womup-purple text-white font-bold flex items-center justify-center text-sm">
                  VM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Vikram Malhotra</h4>
                  <div className="text-[11px] text-purple-300 font-medium">Administrator • Online</div>
                </div>
              </div>

              {/* Nav */}
              <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {navEntries.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onSectionChange(item.id)
                        setIsMobileSidebarOpen(false)
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-womup-purple text-white font-bold'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  )
                })}
              </nav>

              <div className="p-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="w-full flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Member Dashboard</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* MAIN ADMIN CONTENT AREA */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 bg-slate-950">
        {/* TOP BAR */}
        <header className="sticky top-0 z-20 h-18 lg:h-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 flex items-center justify-between shadow-md">
          {/* Left: Hamburger & Breadcrumb */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:bg-slate-800 cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  WOMUP Control Center
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-bold text-slate-400 capitalize">{activeSection}</span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-white font-display capitalize">
                {activeSection.replace('-', ' ')}
              </h1>
            </div>
          </div>

          {/* Right: Quick Role Switcher, Notifications, Admin Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* RBAC Persona Switcher (For Demo & Testing) */}
            <button
              type="button"
              onClick={() => {
                if (onRoleToggle) onRoleToggle()
                toast.info('Role Toggled', 'Simulated role change for testing.')
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-purple-500/40 bg-purple-950/40 text-purple-300 text-xs font-bold hover:bg-purple-900/50 transition-colors cursor-pointer"
              title="Click to toggle between Admin and Member role to test RBAC"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Role: ADMIN</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
                aria-label="Admin notifications"
              >
                <BellRing className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-purple-500 ring-2 ring-slate-900" />
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-80 sm:w-88 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-4 z-50 text-left"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        System Audit Alerts
                      </span>
                      <Badge variant="purple" size="sm">Admin Log</Badge>
                    </div>

                    <div className="divide-y divide-slate-800/60 max-h-72 overflow-y-auto mt-2">
                      <div className="py-2.5">
                        <h5 className="text-xs font-bold text-white">Database Backup Completed</h5>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Daily automated SQLite backup stored safely.
                        </p>
                        <span className="text-[10px] text-slate-500 font-mono mt-1 block">5 mins ago</span>
                      </div>
                      <div className="py-2.5">
                        <h5 className="text-xs font-bold text-white">New Merchant Onboarding Request</h5>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Krishna Sweets & Bakery submitted catalog details.
                        </p>
                        <span className="text-[10px] text-slate-500 font-mono mt-1 block">1 hour ago</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Pill */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-womup-magenta text-white font-bold flex items-center justify-center text-xs shadow-xs">
                VM
              </div>
              <div className="hidden md:block text-left">
                <span className="text-xs font-bold text-white block leading-tight">
                  Vikram Malhotra
                </span>
                <span className="text-[10px] font-semibold text-purple-400">Platform Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT CONTAINER */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1">{children}</main>
      </div>
    </div>
  )
}
