import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Coins,
  PiggyBank,
  TrendingUp,
  Users,
  Network,
  Receipt,
  User,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  Store,
} from 'lucide-react'
import { Button } from '../ui/Button.tsx'
import { BrandLogo } from '../common/BrandLogo.tsx'
import { useToast } from '../../hooks/useToast.ts'
import { useRouter } from '../../router/RouterContext.tsx'

export interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
  subtitle = 'WOMUP Member Center • Demonstration Mode',
}) => {
  const toast = useToast()
  const { pathname, navigate } = useRouter()
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)

  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Welcome Shopping Coins Active! 🎉',
      message: '₹2,000 Shopping Coin promotional credit is ready for partner store use.',
      time: '10 mins ago',
      isRead: false,
    },
    {
      id: 'notif-2',
      title: 'New Demo Referral Registered 👥',
      message: 'Rahul Sharma joined using your referral code WM-84920.',
      time: '2 hours ago',
      isRead: false,
    },
    {
      id: 'notif-3',
      title: 'Savings Statement Ready 📊',
      message: 'You saved ₹600 on your simulated Kirana shopping this month.',
      time: '1 day ago',
      isRead: true,
    },
  ])

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
    toast.info('Notifications Cleared', 'All demo notifications have been marked as read.')
  }

  const handleLogout = () => {
    toast.info('Logged Out', 'You have been safely signed out of your demonstration session.')
    navigate('/')
  }

  const navLinks = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Shopping Coin', path: '/dashboard/shopping-coin', icon: Coins, badge: '₹2k' },
    { label: 'Savings', path: '/dashboard', icon: PiggyBank },
    { label: 'Income', path: '/dashboard', icon: TrendingUp },
    { label: 'Referrals', path: '/dashboard/referrals', icon: Users },
    { label: 'Team', path: '/dashboard', icon: Network },
    { label: 'Transactions', path: '/dashboard', icon: Receipt },
    { label: 'Profile', path: '/dashboard', icon: User },
    { label: 'Settings', path: '/dashboard', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP SIDEBAR */}
      {/* ------------------------------------------------------------- */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200 fixed inset-y-0 z-30 shadow-xs">
        {/* Brand Logo & Header */}
        <div className="h-20 px-6 flex items-center border-b border-slate-100">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}
            className="flex items-center cursor-pointer"
          >
            <BrandLogo size="md" />
          </a>
        </div>

        {/* User Quick Info */}
        <div className="p-4 border-b border-slate-100 bg-purple-50/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-womup-purple text-white font-bold flex items-center justify-center text-sm shadow-xs">
              PS
            </div>
            <div className="overflow-hidden">
              <h4 className="text-sm font-bold text-slate-900 truncate">Priya Sharma</h4>
              <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                <span>ID: WM-84920</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 font-sans font-bold">
                  Demo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-womup-purple text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            )
          })}
        </nav>

        {/* Sidebar Footer / Logout */}
        <div className="p-3 border-t border-slate-100">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-rose-500" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE SIDEBAR DRAWER */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileSidebarOpen(false)}
              className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="h-18 px-5 flex items-center justify-between border-b border-slate-100">
                <BrandLogo size="md" />
                <button
                  type="button"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User Info */}
              <div className="p-4 bg-purple-50/50 border-b border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-womup-purple text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  PS
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Priya Sharma</h4>
                  <div className="text-[11px] text-slate-500 font-mono">ID: WM-84920 (Demo)</div>
                </div>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {navLinks.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.path
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        navigate(item.path)
                        setIsMobileSidebarOpen(false)
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-womup-purple text-white shadow-xs font-bold'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                            isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-900'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  )
                })}
              </nav>

              <div className="p-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-rose-500" />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* MAIN CONTENT AREA */}
      {/* ------------------------------------------------------------- */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* TOP BAR */}
        <header className="sticky top-0 z-20 h-18 lg:h-20 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between shadow-2xs">
          {/* Left: Mobile Hamburger & Page Title */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 font-display">
                {title}
              </h1>
              <span className="text-[11px] text-slate-500 hidden sm:inline">{subtitle}</span>
            </div>
          </div>

          {/* Right: Actions, Notifications, Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Store className="w-4 h-4" />}
              onClick={() => navigate('/partners')}
              className="hidden sm:inline-flex"
            >
              Demo Partners
            </Button>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-80 sm:w-88 rounded-2xl bg-white border border-slate-200 shadow-xl p-4 z-50"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Demo Notifications
                      </span>
                      <button
                        type="button"
                        onClick={handleMarkAllRead}
                        className="text-[11px] text-womup-purple font-semibold hover:underline cursor-pointer"
                      >
                        Mark all read
                      </button>
                    </div>

                    <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto mt-2">
                      {notifications.map((n) => (
                        <div key={n.id} className="py-2.5 text-left">
                          <h5 className="text-xs font-bold text-slate-900 leading-snug">{n.title}</h5>
                          <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                            {n.message}
                          </p>
                          <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                            {n.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Avatar */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-700 to-womup-magenta text-white font-bold flex items-center justify-center text-xs shadow-xs">
                PS
              </div>
              <div className="hidden md:block text-left">
                <span className="text-xs font-bold text-slate-900 block leading-tight">
                  Priya Sharma
                </span>
                <span className="text-[10px] font-semibold text-emerald-600">Member • Active</span>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-8 flex-1">{children}</main>
      </div>
    </div>
  )
}
