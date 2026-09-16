import React, { useState, useEffect, useMemo } from 'react'
import {
  Users,
  Store,
  ShoppingBag,
  Coins,
  GitBranch,
  Network,
  TrendingUp,
  Search,
  Plus,
  Edit2,
  Eye,
  CheckCircle2,
  XCircle,
  ArrowUpDown,
  Download,
  Send,
  Sliders,
  Check,
  FileSpreadsheet,
} from 'lucide-react'
import { AdminLayout, type AdminSectionId } from '../../components/layout/AdminLayout.tsx'
import { Card } from '../../components/ui/Card.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { Badge } from '../../components/ui/Badge.tsx'
import { IconBox } from '../../components/ui/IconBox.tsx'
import { Modal } from '../../components/ui/Modal.tsx'
import { Input } from '../../components/ui/Input.tsx'
import { useToast } from '../../hooks/useToast.ts'
import { adminService } from '../../services/index.ts'
import type { AdminStats, CreateMerchantInput } from '../../services/interfaces/admin.interface.ts'
import type { User, UserStatus, UserRole } from '../../types/entities/user.ts'
import type { Merchant, MerchantCategory } from '../../types/entities/merchant.ts'
import type { Purchase } from '../../types/entities/purchase.ts'
import type { ShoppingCoinTransaction } from '../../types/entities/shoppingCoin.ts'
import type { Referral } from '../../types/entities/referral.ts'
import type { TeamStructureOverview } from '../../types/entities/team.ts'
import type { IncomeTransaction } from '../../types/entities/income.ts'

export const AdminDashboardPage: React.FC = () => {
  const toast = useToast()
  const [activeSection, setActiveSection] = useState<AdminSectionId>('dashboard')
  const [adminRole, setAdminRole] = useState<'admin' | 'member'>('admin')

  // Data states
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [merchants, setMerchants] = useState<Merchant[]>([])
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [coinTransactions, setCoinTransactions] = useState<ShoppingCoinTransaction[]>([])
  const [referrals, setReferrals] = useState<Referral[]>([])
  const [teamStructure, setTeamStructure] = useState<TeamStructureOverview | null>(null)
  const [incomeTransactions, setIncomeTransactions] = useState<IncomeTransaction[]>([])

  // Modals
  const [selectedUserForView, setSelectedUserForView] = useState<User | null>(null)
  const [selectedMerchantForView, setSelectedMerchantForView] = useState<Merchant | null>(null)
  const [isCreateMerchantOpen, setIsCreateMerchantOpen] = useState(false)
  const [editingMerchant, setEditingMerchant] = useState<Merchant | null>(null)
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false)

  // Broadcast state
  const [broadcastTitle, setBroadcastTitle] = useState('')
  const [broadcastMessage, setBroadcastMessage] = useState('')
  const [broadcastType, setBroadcastType] = useState<'info' | 'reward' | 'system'>('info')

  // Filters: Users Table
  const [userSearch, setUserSearch] = useState('')
  const [userStatusFilter, setUserStatusFilter] = useState<UserStatus | 'all'>('all')
  const [userRoleFilter, setUserRoleFilter] = useState<UserRole | 'all'>('all')
  const [userSortField, setUserSortField] = useState<'fullName' | 'createdAt' | 'shoppingCoinBalance'>('createdAt')
  const [userSortOrder, setUserSortOrder] = useState<'asc' | 'desc'>('desc')
  const [userPage, setUserPage] = useState(1)
  const usersPerPage = 5

  // Filters: Merchants Table
  const [merchantSearch, setMerchantSearch] = useState('')
  const [merchantCategoryFilter, setMerchantCategoryFilter] = useState<string>('All')
  const [merchantPage, setMerchantPage] = useState(1)
  const merchantsPerPage = 6

  // Filters: Purchases Table
  const [purchaseSearch, setPurchaseSearch] = useState('')
  const [purchasePage, setPurchasePage] = useState(1)
  const purchasesPerPage = 5

  // Form: Create/Edit Merchant
  const [merchantForm, setMerchantForm] = useState<CreateMerchantInput>({
    name: '',
    category: 'Kirana',
    location: '',
    city: '',
    address: '',
    maxCoinAcceptance: 600,
    shoppingCoinInfo: 'Save up to ₹600 Coins',
    image: '',
    hours: '9:00 AM – 9:00 PM',
  })

  // Load initial data
  const loadData = async () => {
    try {
      const [
        s,
        uData,
        mData,
        pData,
        cData,
        rData,
        tData,
        iData,
      ] = await Promise.all([
        adminService.getStats(),
        adminService.getUsers(),
        adminService.getMerchants(),
        adminService.getPurchases(),
        adminService.getCoinTransactions(),
        adminService.getReferrals(),
        adminService.getTeamStructure(),
        adminService.getIncomeTransactions(),
      ])
      setStats(s)
      setUsers(uData.users)
      setMerchants(mData.merchants)
      setPurchases(pData)
      setCoinTransactions(cData)
      setReferrals(rData)
      setTeamStructure(tData)
      setIncomeTransactions(iData)
    } catch {
      // safe fallback
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // -------------------------------------------------------------
  // USER MANAGEMENT ACTIONS
  // -------------------------------------------------------------
  const handleToggleUserStatus = async (user: User) => {
    const newStatus: UserStatus = user.status === 'active' ? 'suspended' : 'active'
    await adminService.updateUserStatus(user.id, newStatus)
    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, status: newStatus } : u))
    )
    toast.success(
      `User ${newStatus === 'active' ? 'Activated' : 'Deactivated'}`,
      `${user.fullName} (${user.id}) status is now ${newStatus}.`
    )
  }

  // -------------------------------------------------------------
  // MERCHANT MANAGEMENT ACTIONS
  // -------------------------------------------------------------
  const handleToggleMerchantStatus = async (merchant: Merchant) => {
    const updated = await adminService.toggleMerchantStatus(merchant.id)
    setMerchants((prev) =>
      prev.map((m) => (m.id === merchant.id ? { ...m, isDemo: updated.isDemo } : m))
    )
    toast.success('Merchant Status Updated', `${merchant.name} status updated.`)
    loadData()
  }

  const handleSaveMerchant = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!merchantForm.name || !merchantForm.location || !merchantForm.city) {
      toast.error('Missing Required Fields', 'Please fill in merchant name, location, and city.')
      return
    }

    if (editingMerchant) {
      await adminService.updateMerchant(editingMerchant.id, merchantForm)
      toast.success('Merchant Updated', `${merchantForm.name} updated successfully.`)
    } else {
      await adminService.createMerchant(merchantForm)
      toast.success('Merchant Created', `${merchantForm.name} added to WOMUP directory.`)
    }

    setIsCreateMerchantOpen(false)
    setEditingMerchant(null)
    setMerchantForm({
      name: '',
      category: 'Kirana',
      location: '',
      city: '',
      address: '',
      maxCoinAcceptance: 600,
      shoppingCoinInfo: 'Save up to ₹600 Coins',
      image: '',
      hours: '9:00 AM – 9:00 PM',
    })
    loadData()
  }

  const openEditMerchant = (m: Merchant) => {
    setEditingMerchant(m)
    setMerchantForm({
      name: m.name,
      category: m.category,
      location: m.location,
      city: m.city,
      address: m.address,
      maxCoinAcceptance: m.maxCoinAcceptance,
      shoppingCoinInfo: m.shoppingCoinInfo,
      image: m.image,
      hours: m.hours,
    })
    setIsCreateMerchantOpen(true)
  }

  // -------------------------------------------------------------
  // BROADCAST NOTIFICATION ACTION
  // -------------------------------------------------------------
  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault()
    if (!broadcastTitle || !broadcastMessage) {
      toast.error('Empty Notification', 'Please provide a title and message.')
      return
    }
    toast.success('Announcement Broadcasted! 📢', `Sent "${broadcastTitle}" to all platform members.`)
    setIsBroadcastModalOpen(false)
    setBroadcastTitle('')
    setBroadcastMessage('')
  }

  // -------------------------------------------------------------
  // FILTERED & SORTED USERS
  // -------------------------------------------------------------
  const filteredUsers = useMemo(() => {
    let list = [...users]
    if (userStatusFilter !== 'all') {
      list = list.filter((u) => u.status === userStatusFilter)
    }
    if (userRoleFilter !== 'all') {
      list = list.filter((u) => u.role === userRoleFilter)
    }
    if (userSearch.trim()) {
      const q = userSearch.toLowerCase().trim()
      list = list.filter(
        (u) =>
          u.fullName.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.mobileNumber.includes(q) ||
          u.city.toLowerCase().includes(q) ||
          u.referralCode.toLowerCase().includes(q)
      )
    }
    list.sort((a, b) => {
      const order = userSortOrder === 'desc' ? -1 : 1
      if (userSortField === 'shoppingCoinBalance') {
        return (a.shoppingCoinBalance - b.shoppingCoinBalance) * order
      }
      if (userSortField === 'fullName') {
        return a.fullName.localeCompare(b.fullName) * order
      }
      return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * order
    })
    return list
  }, [users, userStatusFilter, userRoleFilter, userSearch, userSortField, userSortOrder])

  const paginatedUsers = useMemo(() => {
    const start = (userPage - 1) * usersPerPage
    return filteredUsers.slice(start, start + usersPerPage)
  }, [filteredUsers, userPage])

  const totalUserPages = Math.ceil(filteredUsers.length / usersPerPage) || 1

  // -------------------------------------------------------------
  // FILTERED MERCHANTS
  // -------------------------------------------------------------
  const filteredMerchants = useMemo(() => {
    let list = [...merchants]
    if (merchantCategoryFilter !== 'All') {
      list = list.filter((m) => m.category === merchantCategoryFilter)
    }
    if (merchantSearch.trim()) {
      const q = merchantSearch.toLowerCase().trim()
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.city.toLowerCase().includes(q) ||
          m.location.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q)
      )
    }
    return list
  }, [merchants, merchantCategoryFilter, merchantSearch])

  const paginatedMerchants = useMemo(() => {
    const start = (merchantPage - 1) * merchantsPerPage
    return filteredMerchants.slice(start, start + merchantsPerPage)
  }, [filteredMerchants, merchantPage])

  const totalMerchantPages = Math.ceil(filteredMerchants.length / merchantsPerPage) || 1

  // -------------------------------------------------------------
  // FILTERED PURCHASES
  // -------------------------------------------------------------
  const filteredPurchases = useMemo(() => {
    let list = [...purchases]
    if (purchaseSearch.trim()) {
      const q = purchaseSearch.toLowerCase().trim()
      list = list.filter(
        (p) =>
          p.invoiceNumber?.toLowerCase().includes(q) ||
          p.merchantName.toLowerCase().includes(q) ||
          p.userId.toLowerCase().includes(q)
      )
    }
    return list
  }, [purchases, purchaseSearch])

  const paginatedPurchases = useMemo(() => {
    const start = (purchasePage - 1) * purchasesPerPage
    return filteredPurchases.slice(start, start + purchasesPerPage)
  }, [filteredPurchases, purchasePage])

  const totalPurchasePages = Math.ceil(filteredPurchases.length / purchasesPerPage) || 1

  return (
    <AdminLayout
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      adminRole={adminRole}
      onRoleToggle={() => setAdminRole((prev) => (prev === 'admin' ? 'member' : 'admin'))}
    >
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: DASHBOARD (EXECUTIVE OVERVIEW) */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'dashboard' && (
        <div className="space-y-8">
          {/* Top Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-slate-900 border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider border border-purple-500/30">
                  Administrative Command Center
                </span>
                <Badge variant="purple" size="sm">Live Node SQLite</Badge>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                Executive Platform Overview
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Real-time metrics, user growth, store redemptions, and community referral network distribution.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<Send className="w-3.5 h-3.5" />}
                onClick={() => setIsBroadcastModalOpen(true)}
              >
                Broadcast Alert
              </Button>
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Plus className="w-3.5 h-3.5" />}
                onClick={() => {
                  setEditingMerchant(null)
                  setIsCreateMerchantOpen(true)
                }}
              >
                Add Merchant
              </Button>
            </div>
          </div>

          {/* 6 Core Admin Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1: Total Users */}
            <Card variant="default" padding="md" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-3">
                <IconBox color="purple" size="md" shape="squircle">
                  <Users className="w-5 h-5 text-purple-300" />
                </IconBox>
                <Badge variant="purple" size="sm">Directory</Badge>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Registered Users
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-inr mt-1">
                {stats?.totalUsers.toLocaleString() || '1,248'}
              </h3>
              <p className="text-[11px] text-purple-300 mt-1 font-medium">
                +42 registered in last 7 days
              </p>
            </Card>

            {/* Card 2: Active Users */}
            <Card variant="default" padding="md" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-3">
                <IconBox color="magenta" size="md" shape="squircle">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-300" />
                </IconBox>
                <Badge variant="magenta" size="sm">88% Active</Badge>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Active Members
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-inr mt-1">
                {stats?.activeUsers.toLocaleString() || '1,098'}
              </h3>
              <p className="text-[11px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" />
                Verified store shoppers
              </p>
            </Card>

            {/* Card 3: Total Merchants */}
            <Card variant="default" padding="md" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-3">
                <IconBox color="gold" size="md" shape="squircle">
                  <Store className="w-5 h-5 text-amber-300" />
                </IconBox>
                <Badge variant="gold" size="sm">15 Categories</Badge>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Partner Merchants
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-inr mt-1">
                {merchants.length} Stores
              </h3>
              <p className="text-[11px] text-amber-300 mt-1 font-medium">
                100% verified local vendors
              </p>
            </Card>

            {/* Card 4: Total Purchases */}
            <Card variant="default" padding="md" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-3">
                <IconBox color="purple" size="md" shape="squircle">
                  <ShoppingBag className="w-5 h-5 text-purple-300" />
                </IconBox>
                <Badge variant="outline" size="sm" className="border-slate-700 text-slate-300">
                  Counter Receipts
                </Badge>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Store Purchases
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-inr mt-1">
                ₹{stats?.totalPurchasesAmount.toLocaleString('en-IN') || '18,45,200'}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">
                4,120 counter bills recorded
              </p>
            </Card>

            {/* Card 5: Shopping Coin Activity */}
            <Card variant="default" padding="md" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-3">
                <IconBox color="gold" size="md" shape="squircle">
                  <Coins className="w-5 h-5 text-amber-300" />
                </IconBox>
                <Badge variant="gold" size="sm">Minted / Redeemed</Badge>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Shopping Coin Activity
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-inr mt-1">
                ₹14.2L Redeemed
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">
                Out of ₹24.8L promotional coins minted
              </p>
            </Card>

            {/* Card 6: Referral Activity */}
            <Card variant="default" padding="md" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-3">
                <IconBox color="magenta" size="md" shape="squircle">
                  <GitBranch className="w-5 h-5 text-fuchsia-300" />
                </IconBox>
                <Badge variant="magenta" size="sm">7 Levels</Badge>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Referral Network Growth
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-inr mt-1">
                {stats?.totalReferrals.toLocaleString() || '3,420'}
              </h3>
              <p className="text-[11px] text-fuchsia-300 mt-1 font-medium">
                Invitations linked across tiers
              </p>
            </Card>
          </div>

          {/* Quick Shortcuts to Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Registrations Card */}
            <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Recent Members</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveSection('users')}
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
                >
                  View All &rarr;
                </button>
              </div>

              <div className="divide-y divide-slate-800/60">
                {users.slice(0, 4).map((u) => (
                  <div key={u.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white block">{u.fullName}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{u.id} • {u.city}</span>
                    </div>
                    <Badge variant="outline" size="sm">
                      {u.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Partner Merchants Snapshot */}
            <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Store className="w-4 h-4 text-amber-400" />
                  <span>Top Partner Stores</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveSection('merchants')}
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
                >
                  Manage All &rarr;
                </button>
              </div>

              <div className="divide-y divide-slate-800/60">
                {merchants.slice(0, 4).map((m) => (
                  <div key={m.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white block">{m.name}</span>
                      <span className="text-[10px] text-slate-400">{m.category} • {m.location}</span>
                    </div>
                    <span className="text-[11px] font-bold text-amber-400 font-inr">
                      Max ₹{m.maxCoinAcceptance} Coins
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: USERS (USER MANAGEMENT) */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'users' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>User Management</span>
                <Badge variant="purple" size="sm">{filteredUsers.length} Users</Badge>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Inspect member accounts, verify referral IDs, and activate/deactivate access
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search */}
              <div className="relative w-full sm:w-48">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search name, phone, ID..."
                  value={userSearch}
                  onChange={(e) => {
                    setUserSearch(e.target.value)
                    setUserPage(1)
                  }}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Status Filter */}
              <select
                value={userStatusFilter}
                onChange={(e) => {
                  setUserStatusFilter(e.target.value as UserStatus | 'all')
                  setUserPage(1)
                }}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Deactivated / Suspended</option>
              </select>

              {/* Role Filter */}
              <select
                value={userRoleFilter}
                onChange={(e) => {
                  setUserRoleFilter(e.target.value as UserRole | 'all')
                  setUserPage(1)
                }}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="all">All Roles</option>
                <option value="member">Member</option>
                <option value="merchant">Merchant</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th
                    className="pb-3 pr-3 cursor-pointer hover:text-white"
                    onClick={() => {
                      setUserSortField('fullName')
                      setUserSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <span>User Info</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="pb-3 px-3">Referral Code</th>
                  <th className="pb-3 px-3">Sponsor ID</th>
                  <th className="pb-3 px-3">City</th>
                  <th
                    className="pb-3 px-3 cursor-pointer hover:text-white"
                    onClick={() => {
                      setUserSortField('shoppingCoinBalance')
                      setUserSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <span>Coin Balance</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="pb-3 px-3 text-center">Status</th>
                  <th className="pb-3 pl-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {paginatedUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 pr-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-purple-900/60 text-purple-300 font-bold text-xs flex items-center justify-center border border-purple-500/20">
                          {u.fullName.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <span className="font-bold text-white block leading-tight">{u.fullName}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{u.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-purple-300">{u.referralCode}</td>
                    <td className="py-3.5 px-3 font-mono text-slate-400">{u.referredBy || '—'}</td>
                    <td className="py-3.5 px-3 text-slate-300">{u.city}</td>
                    <td className="py-3.5 px-3 font-inr font-bold text-amber-400">
                      ₹{u.shoppingCoinBalance.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          u.status === 'active'
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {u.status === 'active' ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        <span>{u.status}</span>
                      </span>
                    </td>
                    <td className="py-3.5 pl-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelectedUserForView(u)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="View user profile"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggleUserStatus(u)}
                          className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                            u.status === 'active'
                              ? 'bg-rose-950/60 text-rose-300 hover:bg-rose-900 border border-rose-500/30'
                              : 'bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900 border border-emerald-500/30'
                          }`}
                        >
                          {u.status === 'active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800 text-xs text-slate-400">
            <span>
              Showing Page {userPage} of {totalUserPages} ({filteredUsers.length} total)
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={userPage === 1}
                onClick={() => setUserPage((p) => Math.max(1, p - 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <button
                type="button"
                disabled={userPage >= totalUserPages}
                onClick={() => setUserPage((p) => Math.min(totalUserPages, p + 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: MERCHANTS (MERCHANT MANAGEMENT) */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'merchants' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Store className="w-5 h-5 text-amber-400" />
                <span>Merchant Directory & Management</span>
                <Badge variant="gold" size="sm">{filteredMerchants.length} Stores</Badge>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Create new vendors, edit redemption policies, and deactivate stores
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Search */}
              <div className="relative w-full sm:w-44">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search store name..."
                  value={merchantSearch}
                  onChange={(e) => {
                    setMerchantSearch(e.target.value)
                    setMerchantPage(1)
                  }}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={merchantCategoryFilter}
                onChange={(e) => {
                  setMerchantCategoryFilter(e.target.value)
                  setMerchantPage(1)
                }}
                className="px-2.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Kirana">Kirana</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Medical">Medical</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Beauty">Beauty</option>
                <option value="Garments">Garments</option>
              </select>

              {/* Create Merchant Button */}
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Plus className="w-3.5 h-3.5" />}
                onClick={() => {
                  setEditingMerchant(null)
                  setMerchantForm({
                    name: '',
                    category: 'Kirana',
                    location: '',
                    city: '',
                    address: '',
                    maxCoinAcceptance: 600,
                    shoppingCoinInfo: 'Save up to ₹600 Coins',
                    image: '',
                    hours: '9:00 AM – 9:00 PM',
                  })
                  setIsCreateMerchantOpen(true)
                }}
              >
                Create Merchant
              </Button>
            </div>
          </div>

          {/* Merchants Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3 pr-3">Store Details</th>
                  <th className="pb-3 px-3">Category</th>
                  <th className="pb-3 px-3">City & Location</th>
                  <th className="pb-3 px-3">Coin Acceptance</th>
                  <th className="pb-3 px-3 text-center">Rating</th>
                  <th className="pb-3 pl-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {paginatedMerchants.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 pr-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="w-10 h-10 rounded-xl object-cover border border-slate-700 flex-shrink-0"
                        />
                        <div>
                          <span className="font-bold text-white block leading-tight">{m.name}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{m.id} • {m.hours}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                        {m.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-slate-300">
                      <span>{m.location}</span>
                      <span className="text-[10px] text-slate-500 block">{m.city}</span>
                    </td>
                    <td className="py-3.5 px-3 font-inr font-bold text-emerald-400">
                      Up to ₹{m.maxCoinAcceptance}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <span className="text-amber-400 font-bold">★ {m.rating}</span>
                      <span className="text-[10px] text-slate-500 block">({m.reviewCount} reviews)</span>
                    </td>
                    <td className="py-3.5 pl-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setSelectedMerchantForView(m)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="View store details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => openEditMerchant(m)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-white transition-colors cursor-pointer"
                          title="Edit merchant"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggleMerchantStatus(m)}
                          className="px-2 py-1 rounded-lg text-[10px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                        >
                          Toggle Status
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800 text-xs text-slate-400">
            <span>
              Showing Page {merchantPage} of {totalMerchantPages} ({filteredMerchants.length} total)
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={merchantPage === 1}
                onClick={() => setMerchantPage((p) => Math.max(1, p - 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <button
                type="button"
                disabled={merchantPage >= totalMerchantPages}
                onClick={() => setMerchantPage((p) => Math.min(totalMerchantPages, p + 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: PURCHASES */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'purchases' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
                <span>Store Counter Purchases Ledger</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Audit trail of verified store receipts with coin deductions
              </p>
            </div>

            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search invoice or store..."
                value={purchaseSearch}
                onChange={(e) => setPurchaseSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3 pr-3">Invoice & Date</th>
                  <th className="pb-3 px-3">Member ID</th>
                  <th className="pb-3 px-3">Partner Store</th>
                  <th className="pb-3 px-3 text-right">Bill Total</th>
                  <th className="pb-3 px-3 text-right">Coin Discount</th>
                  <th className="pb-3 px-3 text-right">Net Paid</th>
                  <th className="pb-3 pl-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {paginatedPurchases.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-800/40">
                    <td className="py-3.5 pr-3">
                      <span className="font-bold text-white block font-mono">{p.invoiceNumber}</span>
                      <span className="text-[10px] text-slate-400">{p.billDate}</span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-purple-300">{p.userId}</td>
                    <td className="py-3.5 px-3 text-slate-200">
                      <span>{p.merchantName}</span>
                      <span className="text-[10px] text-slate-500 block">{p.category}</span>
                    </td>
                    <td className="py-3.5 px-3 text-right font-inr font-medium text-slate-300">
                      ₹{p.totalBillAmount.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-3 text-right font-inr font-bold text-amber-400">
                      - ₹{p.coinDiscountApplied}
                    </td>
                    <td className="py-3.5 px-3 text-right font-inr font-bold text-emerald-400">
                      ₹{p.netPayableAmount.toLocaleString()}
                    </td>
                    <td className="py-3.5 pl-3 text-center">
                      <Badge variant="outline" size="sm" className="border-emerald-500/30 text-emerald-400">
                        {p.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800 text-xs text-slate-400">
            <span>Showing Page {purchasePage} of {totalPurchasePages}</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={purchasePage === 1}
                onClick={() => setPurchasePage((p) => Math.max(1, p - 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer"
              >
                Prev
              </button>
              <button
                type="button"
                disabled={purchasePage >= totalPurchasePages}
                onClick={() => setPurchasePage((p) => Math.min(totalPurchasePages, p + 1))}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: SHOPPING COINS */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'coins' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span>Platform Shopping Coin Issuance & Redemptions</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Ledger of all promotional allowances, member welcome bonuses, and counter redemptions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Total Minted</span>
              <span className="text-2xl font-black text-white font-inr mt-1 block">₹24,80,000</span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">Promotional credits issued</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Total Redeemed</span>
              <span className="text-2xl font-black text-amber-400 font-inr mt-1 block">₹14,20,000</span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">Deducted at store checkouts</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <span className="text-[11px] font-bold uppercase text-slate-400 block">Active Circulating</span>
              <span className="text-2xl font-black text-emerald-400 font-inr mt-1 block">₹10,60,000</span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">Available across member wallets</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/60">
            {coinTransactions.map((tx) => (
              <div key={tx.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{tx.description}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{tx.id} • {tx.date}</span>
                </div>
                <span
                  className={`font-inr font-bold text-sm ${
                    tx.type === 'credit' ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                >
                  {tx.type === 'credit' ? `+ ₹${tx.shoppingCoin}` : `- ₹${tx.shoppingCoin}`} Coins
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 6: REFERRALS */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'referrals' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-purple-400" />
              <span>Global Referral Network Connections</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Promotional multi-tier referral distribution and link tracking
            </p>
          </div>

          <div className="divide-y divide-slate-800/60">
            {referrals.map((r) => (
              <div key={r.id} className="py-3.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-950 text-fuchsia-300 font-bold flex items-center justify-center text-xs border border-fuchsia-500/30">
                    {r.referredUserName[0]}
                  </div>
                  <div>
                    <span className="font-bold text-white block">{r.referredUserName}</span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Ref Code Used: {r.referralCodeUsed} • {r.referredUserLocation}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="purple" size="sm">{r.tier}</Badge>
                  <span className="text-[10px] text-slate-500 block mt-1 font-mono">{r.joinedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 7: TEAM STRUCTURE */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'team' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Network className="w-5 h-5 text-purple-400" />
              <span>Team Structure (7-Tier Platform Distribution)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Tier capacities according to supplied WOMUP promotional material (1st Level: 30 to 7th Level: 1,00,000)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamStructure?.levels.map((lvl) => (
              <div
                key={lvl.level}
                className={`p-4 rounded-2xl border ${
                  lvl.isUnlocked
                    ? 'bg-slate-800/60 border-purple-500/30'
                    : 'bg-slate-900/40 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-purple-300 uppercase tracking-wider">
                    {lvl.levelLabel}
                  </span>
                  <Badge variant={lvl.isUnlocked ? 'purple' : 'outline'} size="sm">
                    {lvl.isUnlocked ? 'Unlocked' : 'Locked'}
                  </Badge>
                </div>
                <div className="text-2xl font-black text-white font-inr">
                  {lvl.totalMembers.toLocaleString()} / {lvl.targetCapacity.toLocaleString()}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Active participants: {lvl.activeCount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 8: INCOME TRANSACTIONS */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'income' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Income Benefits Distribution Audit</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Simulated promotional model allocations (Shopping Coin Income & Repurchasing Income)
            </p>
          </div>

          <div className="divide-y divide-slate-800/60">
            {incomeTransactions.map((inc) => (
              <div key={inc.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{inc.description}</span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {inc.id} • {inc.typeLabel} • {inc.date}
                  </span>
                </div>
                <span className="text-emerald-400 font-bold font-inr text-sm">
                  {inc.currency === 'INR' ? `₹${inc.amount}` : `${inc.amount} Coins`}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 9: REPORTS */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'reports' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-purple-400" />
                <span>Reports & Analytics</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Download consolidated performance datasets and audit summaries
              </p>
            </div>

            <Button
              variant="secondary"
              size="sm"
              leftIcon={<Download className="w-3.5 h-3.5" />}
              onClick={() => toast.success('Exporting Report', 'Generating womup_monthly_report_sep2026.csv...')}
            >
              Export CSV
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <h4 className="text-xs font-bold text-white mb-2">Category-Wise Coin Redemptions</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Kirana & Grocery</span>
                  <span className="font-bold text-white">45% (₹6.4L)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Fresh Vegetables & Fruits</span>
                  <span className="font-bold text-white">25% (₹3.5L)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Medical & Healthcare</span>
                  <span className="font-bold text-white">18% (₹2.5L)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Dining & Others</span>
                  <span className="font-bold text-white">12% (₹1.8L)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <h4 className="text-xs font-bold text-white mb-2">Platform Growth Summary</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>New Registrations (This Month)</span>
                  <span className="font-bold text-emerald-400">+312 Members</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>New Store Onboardings</span>
                  <span className="font-bold text-amber-400">+4 Stores</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Active Retention Rate</span>
                  <span className="font-bold text-purple-400">88.4%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 10: NOTIFICATIONS */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'notifications' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-purple-400" />
                <span>System Broadcast Manager</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Send real-time alerts or promotional notices to all active users
              </p>
            </div>

            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="w-3.5 h-3.5" />}
              onClick={() => setIsBroadcastModalOpen(true)}
            >
              Compose Broadcast
            </Button>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-300 mb-4">
            Broadcast announcements are received by all authenticated members in their top notifications bell.
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* SECTION 11: SETTINGS */}
      {/* ------------------------------------------------------------- */}
      {activeSection === 'settings' && (
        <Card variant="default" padding="lg" className="bg-slate-900 border-slate-800 text-slate-100">
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-purple-400" />
              <span>Platform Rules & Policy Settings</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Control global parameters, coin limits, and maintenance modes
            </p>
          </div>

          <div className="space-y-4 max-w-xl text-xs">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Monthly Shopping Coin Allowance Limit</span>
                <span className="text-slate-400 text-[11px]">Maximum coins credited per member cycle</span>
              </div>
              <span className="font-bold text-amber-400 text-sm font-inr">₹2,000 Coins</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Kirana Category Max Redemption</span>
                <span className="text-slate-400 text-[11px]">Maximum coins usable per Kirana purchase</span>
              </div>
              <span className="font-bold text-amber-400 text-sm font-inr">₹600 Coins</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Vegetables Category Max Redemption</span>
                <span className="text-slate-400 text-[11px]">Maximum coins usable per Vegetable purchase</span>
              </div>
              <span className="font-bold text-amber-400 text-sm font-inr">₹600 Coins</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Medical Category Max Redemption</span>
                <span className="text-slate-400 text-[11px]">Maximum coins usable per Pharmacy purchase</span>
              </div>
              <span className="font-bold text-amber-400 text-sm font-inr">₹300 Coins</span>
            </div>
          </div>
        </Card>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: VIEW USER DETAILS */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={Boolean(selectedUserForView)}
        onClose={() => setSelectedUserForView(null)}
        title="User Account Details"
        description={selectedUserForView ? `ID: ${selectedUserForView.id}` : ''}
        size="md"
      >
        {selectedUserForView && (
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-womup-purple text-white font-bold text-base flex items-center justify-center">
                {selectedUserForView.fullName.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{selectedUserForView.fullName}</h4>
                <div className="text-slate-500 font-mono">{selectedUserForView.email}</div>
                <div className="text-slate-500 font-mono">{selectedUserForView.mobileNumber}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Referral Code</span>
                <span className="text-xs font-bold font-mono text-purple-700 mt-0.5 block">
                  {selectedUserForView.referralCode}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Referred By (Sponsor)</span>
                <span className="text-xs font-bold font-mono text-slate-700 mt-0.5 block">
                  {selectedUserForView.referredBy || 'Direct Platform Root'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Coin Balance</span>
                <span className="text-xs font-bold font-inr text-amber-600 mt-0.5 block">
                  ₹{selectedUserForView.shoppingCoinBalance.toLocaleString()} Coins
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold uppercase block">City</span>
                <span className="text-xs font-bold text-slate-700 mt-0.5 block">
                  {selectedUserForView.city}
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedUserForView(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: VIEW MERCHANT DETAILS */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={Boolean(selectedMerchantForView)}
        onClose={() => setSelectedMerchantForView(null)}
        title={selectedMerchantForView?.name || 'Merchant Details'}
        description={selectedMerchantForView ? `${selectedMerchantForView.category} • ${selectedMerchantForView.city}` : ''}
        size="md"
      >
        {selectedMerchantForView && (
          <div className="space-y-4 text-xs">
            <img
              src={selectedMerchantForView.image}
              alt={selectedMerchantForView.name}
              className="w-full h-40 object-cover rounded-xl border border-slate-200"
            />
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Category</span>
                <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                  {selectedMerchantForView.category}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Max Coin Discount</span>
                <span className="text-xs font-bold font-inr text-emerald-600 mt-0.5 block">
                  ₹{selectedMerchantForView.maxCoinAcceptance} Coins
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2">
                <span className="text-slate-400 text-[10px] font-bold uppercase block">Full Address</span>
                <span className="text-xs text-slate-700 mt-0.5 block">
                  {selectedMerchantForView.address}
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedMerchantForView(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: CREATE / EDIT MERCHANT */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={isCreateMerchantOpen}
        onClose={() => {
          setIsCreateMerchantOpen(false)
          setEditingMerchant(null)
        }}
        title={editingMerchant ? 'Edit Merchant Store' : 'Onboard New Partner Merchant'}
        description="Add store details, category and coin acceptance rules"
        size="md"
      >
        <form onSubmit={handleSaveMerchant} className="space-y-3.5 text-xs">
          <div>
            <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
              Store / Business Name *
            </label>
            <Input
              value={merchantForm.name}
              onChange={(e) => setMerchantForm({ ...merchantForm, name: e.target.value })}
              placeholder="e.g. Royal Kirana & Provision Store"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
                Category *
              </label>
              <select
                value={merchantForm.category}
                onChange={(e) =>
                  setMerchantForm({ ...merchantForm, category: e.target.value as MerchantCategory })
                }
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none"
              >
                <option value="Kirana">Kirana</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Medical">Medical</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Beauty">Beauty</option>
                <option value="Garments">Garments</option>
                <option value="Gift">Gift</option>
                <option value="Shoes">Shoes</option>
                <option value="Sweet">Sweet</option>
                <option value="Bakery">Bakery</option>
                <option value="Electric">Electric</option>
                <option value="Hospital">Hospital</option>
                <option value="Classes">Classes</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
                Max Coin Acceptance (₹) *
              </label>
              <Input
                type="number"
                value={merchantForm.maxCoinAcceptance}
                onChange={(e) =>
                  setMerchantForm({ ...merchantForm, maxCoinAcceptance: Number(e.target.value) })
                }
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
                Locality / Area *
              </label>
              <Input
                value={merchantForm.location}
                onChange={(e) => setMerchantForm({ ...merchantForm, location: e.target.value })}
                placeholder="e.g. Kothrud"
                required
              />
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
                City *
              </label>
              <Input
                value={merchantForm.city}
                onChange={(e) => setMerchantForm({ ...merchantForm, city: e.target.value })}
                placeholder="e.g. Pune"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
              Full Address
            </label>
            <Input
              value={merchantForm.address}
              onChange={(e) => setMerchantForm({ ...merchantForm, address: e.target.value })}
              placeholder="e.g. Shop 12, Main Market Road"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => {
                setIsCreateMerchantOpen(false)
                setEditingMerchant(null)
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              {editingMerchant ? 'Save Changes' : 'Create Merchant'}
            </Button>
          </div>
        </form>
      </Modal>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: BROADCAST ANNOUNCEMENT */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={isBroadcastModalOpen}
        onClose={() => setIsBroadcastModalOpen(false)}
        title="Broadcast System Announcement"
        description="Send platform notice to all active member accounts"
        size="md"
      >
        <form onSubmit={handleSendBroadcast} className="space-y-3.5 text-xs">
          <div>
            <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
              Notification Title *
            </label>
            <Input
              value={broadcastTitle}
              onChange={(e) => setBroadcastTitle(e.target.value)}
              placeholder="e.g. Special Weekend Shopping Coin Bonus!"
              required
            />
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
              Type
            </label>
            <select
              value={broadcastType}
              onChange={(e) => setBroadcastType(e.target.value as 'info' | 'reward' | 'system')}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none"
            >
              <option value="info">Informational Notice</option>
              <option value="reward">Reward / Coin Allowance</option>
              <option value="system">System Maintenance</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold uppercase text-slate-600 block mb-1">
              Message Content *
            </label>
            <textarea
              rows={4}
              value={broadcastMessage}
              onChange={(e) => setBroadcastMessage(e.target.value)}
              placeholder="Enter message text to display in member notification center..."
              className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setIsBroadcastModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              leftIcon={<Send className="w-3.5 h-3.5" />}
            >
              Broadcast Now
            </Button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  )
}
