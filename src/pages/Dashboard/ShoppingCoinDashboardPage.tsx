import React, { useState, useMemo } from 'react'
import {
  Coins,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ArrowDownLeft,
  Filter,
  Search,
  ShieldAlert,
  Sparkles,
  Store,
  Receipt,
  QrCode,
  Calendar,
  HelpCircle,
} from 'lucide-react'
import { DashboardLayout } from '../../components/layout/DashboardLayout.tsx'
import { Card } from '../../components/ui/Card.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { Badge } from '../../components/ui/Badge.tsx'
import { IconBox } from '../../components/ui/IconBox.tsx'
import { Modal } from '../../components/ui/Modal.tsx'
import { useRouter } from '../../router/RouterContext.tsx'
import { useToast } from '../../hooks/useToast.ts'

interface CoinTransaction {
  id: string
  date: string
  rawDate: string // YYYY-MM-DD for date filtering
  merchant: string
  category: string
  purchaseAmount: number
  shoppingCoin: number
  type: 'debit' | 'credit' | 'expired'
  status: 'Redeemed (Demo)' | 'Credited (Demo)' | 'Expired (Demo)'
}

export const ShoppingCoinDashboardPage: React.FC = () => {
  const toast = useToast()
  const { navigate } = useRouter()

  const [dateFilter, setDateFilter] = useState<'all' | 'this-month' | 'last-month' | 'last-90'>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'redeemed' | 'credited' | 'expired'>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isQrModalOpen, setIsQrModalOpen] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  // Demo Coin Transactions List
  const allTransactions: CoinTransaction[] = [
    {
      id: 'TXN-9021',
      date: '16 Sep 2026, 2:15 PM',
      rawDate: '2026-09-16',
      merchant: 'Sharma Super Kirana & Provision Store',
      category: 'Kirana',
      purchaseAmount: 10000,
      shoppingCoin: 600,
      type: 'debit',
      status: 'Redeemed (Demo)',
    },
    {
      id: 'TXN-8994',
      date: '15 Sep 2026, 11:30 AM',
      rawDate: '2026-09-15',
      merchant: 'Kisan Fresh Farm Vegetables',
      category: 'Vegetable',
      purchaseAmount: 4000,
      shoppingCoin: 600,
      type: 'debit',
      status: 'Redeemed (Demo)',
    },
    {
      id: 'TXN-8850',
      date: '12 Sep 2026, 6:45 PM',
      rawDate: '2026-09-12',
      merchant: 'Apollo Lifeline Medical Store',
      category: 'Medical',
      purchaseAmount: 2000,
      shoppingCoin: 300,
      type: 'debit',
      status: 'Redeemed (Demo)',
    },
    {
      id: 'TXN-8742',
      date: '10 Sep 2026, 8:20 PM',
      rawDate: '2026-09-10',
      merchant: 'Annapurna Spices Restaurant',
      category: 'Restaurant',
      purchaseAmount: 2000,
      shoppingCoin: 300,
      type: 'debit',
      status: 'Redeemed (Demo)',
    },
    {
      id: 'TXN-8600',
      date: '01 Sep 2026, 12:00 AM',
      rawDate: '2026-09-01',
      merchant: 'WOMUP Monthly Allocation',
      category: 'Rewards Allowance',
      purchaseAmount: 0,
      shoppingCoin: 2000,
      type: 'credit',
      status: 'Credited (Demo)',
    },
    {
      id: 'TXN-8451',
      date: '24 Aug 2026, 4:10 PM',
      rawDate: '2026-08-24',
      merchant: 'Glamour Touch Salon & Studio',
      category: 'Beauty',
      purchaseAmount: 2000,
      shoppingCoin: 300,
      type: 'debit',
      status: 'Redeemed (Demo)',
    },
    {
      id: 'TXN-8310',
      date: '18 Aug 2026, 7:00 PM',
      rawDate: '2026-08-18',
      merchant: 'Paridhan Trends Ethnic Garments',
      category: 'Garments',
      purchaseAmount: 2500,
      shoppingCoin: 400,
      type: 'debit',
      status: 'Redeemed (Demo)',
    },
    {
      id: 'TXN-8200',
      date: '01 Aug 2026, 12:00 AM',
      rawDate: '2026-08-01',
      merchant: 'WOMUP Welcome Rewards Credit',
      category: 'Registration Bonus',
      purchaseAmount: 0,
      shoppingCoin: 1800,
      type: 'credit',
      status: 'Credited (Demo)',
    },
  ]

  // Available categories for dropdown
  const categories = [
    'all',
    'Kirana',
    'Vegetable',
    'Medical',
    'Restaurant',
    'Beauty',
    'Garments',
    'Rewards Allowance',
    'Registration Bonus',
  ]

  // Filtered transactions
  const filteredTransactions = useMemo(() => {
    return allTransactions.filter((tx) => {
      // Category filter
      if (categoryFilter !== 'all' && tx.category !== categoryFilter) {
        return false
      }

      // Status filter
      if (statusFilter === 'redeemed' && tx.type !== 'debit') return false
      if (statusFilter === 'credited' && tx.type !== 'credit') return false
      if (statusFilter === 'expired' && tx.type !== 'expired') return false

      // Date filter (mock logic based on 2026 dates)
      if (dateFilter === 'this-month' && !tx.rawDate.startsWith('2026-09')) return false
      if (dateFilter === 'last-month' && !tx.rawDate.startsWith('2026-08')) return false

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const matches =
          tx.merchant.toLowerCase().includes(query) ||
          tx.category.toLowerCase().includes(query) ||
          tx.id.toLowerCase().includes(query)
        if (!matches) return false
      }

      return true
    })
  }, [dateFilter, categoryFilter, statusFilter, searchQuery])

  return (
    <DashboardLayout
      title="Shopping Coin Wallet"
      subtitle="Track your available promotional coins, redemptions, and store deductions"
    >
      {/* ------------------------------------------------------------- */}
      {/* TOP DEMO COMPLIANCE BANNER */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3.5 text-xs text-amber-900 shadow-2xs">
        <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-extrabold uppercase tracking-wider block mb-0.5">
            Demonstration Coin Ledger • Demo Data
          </span>
          <p className="text-amber-800 leading-relaxed">
            All coin allowances, balances, and deductions displayed in this wallet are mock demonstration records reflecting the WOMUP promotional framework. No real monetary transactions or banking withdrawals occur.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CLEAN WALLET-STYLE HERO PASS CARD */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Digital Wallet Card */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-3xl bg-gradient-to-br from-purple-950 via-womup-purple to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-purple-800/40 relative overflow-hidden flex flex-col justify-between">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-womup-magenta/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header row */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
                    <Coins className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-200 block leading-none">
                      WOMUP Digital Pass
                    </span>
                    <span className="text-[10px] text-amber-300 font-semibold">Shopping Coin Balance</span>
                  </div>
                </div>

                <Badge variant="gold" size="sm" icon={<Sparkles className="w-3 h-3" />}>
                  Demo Wallet
                </Badge>
              </div>

              {/* Big Coin Balance Display */}
              <div className="my-4 relative z-10">
                <span className="text-xs font-semibold text-purple-200 uppercase tracking-wider block mb-1">
                  Available to Spend
                </span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-inr text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200 tracking-tight leading-none">
                  ₹2,000
                </div>
                <span className="text-xs text-purple-200/80 mt-2 block font-medium">
                  Monthly allocation ready for grocery, dining, pharmacy & lifestyle deductions.
                </span>
              </div>
            </div>

            {/* Bottom Card Strip */}
            <div className="pt-6 border-t border-purple-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[10px] text-purple-300 uppercase tracking-widest block font-mono">
                  MEMBER PASS ID
                </span>
                <span className="text-sm font-black font-mono tracking-wider text-white">
                  WM-84920-IND
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  variant="gold"
                  size="sm"
                  leftIcon={<QrCode className="w-4 h-4 text-slate-950" />}
                  onClick={() => setIsQrModalOpen(true)}
                  className="flex-1 sm:flex-initial"
                >
                  Show QR Pass
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<Store className="w-4 h-4" />}
                  onClick={() => navigate('/partners')}
                  className="flex-1 sm:flex-initial"
                >
                  Spend at Partners
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Policy & Model Info Card */}
        <div className="lg:col-span-5">
          <Card variant="default" padding="lg" className="h-full border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>How Coins Work Here</span>
                  <Badge variant="purple" size="sm">Rules</Badge>
                </h3>
                <button
                  type="button"
                  onClick={() => setIsInfoModalOpen(true)}
                  className="text-xs text-womup-purple font-semibold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Guide</span>
                </button>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Coins className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">₹2,000 Monthly Allocation</span>
                    <span>Received each active month according to the WOMUP promotional framework.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Receipt className="w-4 h-4 text-womup-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Instant Store Bill Deductions</span>
                    <span>Redeem at Kirana (up to ₹600), Vegetables (up to ₹600), Medical (₹300), etc.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">No Investment Or Lock-in</span>
                    <span>Designed exclusively for personal household consumer utility.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Next Demo Refresh: <strong>01 Oct 2026</strong></span>
              <span className="text-emerald-600 font-bold">● Active Allowance</span>
            </div>
          </Card>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4 STAT CARDS (As Requested) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 1. Available Shopping Coin */}
        <Card variant="rewards" padding="md" className="border-amber-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="gold" size="md" shape="squircle">
              <Coins className="w-5 h-5 text-amber-800" />
            </IconBox>
            <Badge variant="gold" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900/80">
            Available Shopping Coin
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹2,000
          </h3>
          <p className="text-[11px] text-amber-950 font-medium mt-1">
            Ready for instant partner deductions
          </p>
        </Card>

        {/* 2. Used Shopping Coin */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="purple" size="md" shape="squircle">
              <ArrowDownLeft className="w-5 h-5 text-womup-purple" />
            </IconBox>
            <Badge variant="purple" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Used Shopping Coin
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹1,800
          </h3>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            Deducted across Kirana, Veg & Medical bills
          </p>
        </Card>

        {/* 3. Earned Shopping Coin */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="magenta" size="md" shape="squircle">
              <ArrowUpRight className="w-5 h-5 text-womup-magenta" />
            </IconBox>
            <Badge variant="magenta" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Earned Shopping Coin
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹3,800
          </h3>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            Monthly allowances + referral bonuses
          </p>
        </Card>

        {/* 4. Expired Shopping Coin */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="dark" size="md" shape="squircle">
              <Clock className="w-5 h-5 text-slate-400" />
            </IconBox>
            <Badge variant="outline" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Expired Shopping Coin
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹0
          </h3>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1">
            All allowance coins actively utilized
          </p>
        </Card>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TRANSACTION HISTORY SECTION WITH INTERACTIVE FILTERS */}
      {/* ------------------------------------------------------------- */}
      <Card variant="default" padding="lg" className="border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Shopping Coin Transaction History</span>
              <Badge variant="outline" size="sm">Demo Records</Badge>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Detailed ledger of simulated coin credits and partner store redemptions
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search merchant or txn ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:bg-white focus:border-womup-purple focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Filters Bar: Date, Category, Status */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          {/* Date Filter */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
              Filter by Date
            </label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value as any)}
              className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-womup-purple"
            >
              <option value="all">All Dates</option>
              <option value="this-month">This Month (September 2026)</option>
              <option value="last-month">Last Month (August 2026)</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
              Filter by Category
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-womup-purple"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'all' ? 'All Categories' : c}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
              Filter by Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-womup-purple"
            >
              <option value="all">All Statuses</option>
              <option value="redeemed">Redeemed (Deductions)</option>
              <option value="credited">Credited (Allowances)</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        {/* Transaction Table */}
        {filteredTransactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3 pr-4">Date</th>
                  <th className="pb-3 px-3">Merchant</th>
                  <th className="pb-3 px-3">Category</th>
                  <th className="pb-3 px-3 text-right">Purchase Bill</th>
                  <th className="pb-3 px-3 text-right">Shopping Coin</th>
                  <th className="pb-3 pl-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTransactions.map((tx) => {
                  const isDebit = tx.type === 'debit'
                  const isCredit = tx.type === 'credit'
                  return (
                    <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Date */}
                      <td className="py-3.5 pr-4 text-slate-500 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{tx.date}</span>
                        </div>
                      </td>

                      {/* Merchant */}
                      <td className="py-3.5 px-3">
                        <span className="font-bold text-slate-900 block truncate max-w-xs">
                          {tx.merchant}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{tx.id}</span>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                          {tx.category}
                        </span>
                      </td>

                      {/* Purchase Amount */}
                      <td className="py-3.5 px-3 text-right font-inr text-slate-700 font-semibold whitespace-nowrap">
                        {tx.purchaseAmount > 0 ? `₹${tx.purchaseAmount.toLocaleString('en-IN')}` : '—'}
                      </td>

                      {/* Shopping Coin */}
                      <td className="py-3.5 px-3 text-right whitespace-nowrap font-inr font-bold">
                        {isDebit && (
                          <span className="text-amber-700">
                            - ₹{tx.shoppingCoin.toLocaleString('en-IN')} Coins
                          </span>
                        )}
                        {isCredit && (
                          <span className="text-emerald-600">
                            + ₹{tx.shoppingCoin.toLocaleString('en-IN')} Coins
                          </span>
                        )}
                        {tx.type === 'expired' && (
                          <span className="text-slate-400">
                            ₹{tx.shoppingCoin.toLocaleString('en-IN')} Expired
                          </span>
                        )}
                      </td>

                      {/* Status */}
                      <td className="py-3.5 pl-3 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            isDebit
                              ? 'bg-amber-100 text-amber-900'
                              : isCredit
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Filter className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">No Transactions Match Filter</h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your category, status, or date range filters.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setDateFilter('all')
                setCategoryFilter('all')
                setStatusFilter('all')
                setSearchQuery('')
                toast.info('Filters Reset', 'All transaction filters restored to default.')
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Card>

      {/* ------------------------------------------------------------- */}
      {/* QR PASS MODAL */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        title="Member QR Code Pass"
        description="Present this QR at participating partner counters to redeem Shopping Coins."
        icon={
          <IconBox color="gold" size="md" shape="squircle">
            <QrCode className="w-5 h-5 text-amber-800" />
          </IconBox>
        }
        footer={
          <Button variant="primary" size="sm" fullWidth onClick={() => setIsQrModalOpen(false)}>
            Close QR Pass
          </Button>
        }
      >
        <div className="flex flex-col items-center text-center p-4">
          {/* Simulated QR Box */}
          <div className="p-4 rounded-2xl bg-white border-2 border-dashed border-purple-300 shadow-sm mb-4">
            <div className="w-48 h-48 bg-slate-900 rounded-xl p-3 flex flex-col justify-between items-center text-white relative">
              <div className="flex justify-between w-full">
                <div className="w-10 h-10 border-4 border-white rounded-md" />
                <div className="w-10 h-10 border-4 border-white rounded-md" />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono tracking-widest text-amber-300 font-bold">
                <Coins className="w-3.5 h-3.5" />
                <span>WM-84920</span>
              </div>
              <div className="flex justify-between w-full">
                <div className="w-10 h-10 border-4 border-white rounded-md" />
                <div className="w-10 h-10 bg-amber-400 rounded-md" />
              </div>
            </div>
          </div>

          <span className="text-sm font-bold text-slate-900 block">Priya Sharma</span>
          <span className="text-xs font-mono text-slate-500">Member ID: WM-84920 (Demo)</span>

          <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed max-w-sm">
            Simulated merchant scanner payload. In the live version, merchant POS will scan this QR to deduct coins directly from the store bill.
          </div>
        </div>
      </Modal>

      {/* ------------------------------------------------------------- */}
      {/* COIN INFO GUIDE MODAL */}
      {/* ------------------------------------------------------------- */}
      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title="Shopping Coin Mechanics Guide"
        description="Understanding how coins are calculated and redeemed according to the WOMUP model."
        icon={
          <IconBox color="purple" size="md" shape="squircle">
            <Coins className="w-5 h-5 text-womup-purple" />
          </IconBox>
        }
        footer={
          <Button variant="primary" size="sm" fullWidth onClick={() => setIsInfoModalOpen(false)}>
            Got It
          </Button>
        }
      >
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200">
            <h5 className="font-bold text-slate-900 text-sm mb-1">Monthly ₹2,000 Coin Allowance</h5>
            <p>
              As illustrated in WOMUP promotional materials, active members receive up to ₹2,000 in Shopping Coins monthly to reduce out-of-pocket bills across everyday local partner outlets.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-slate-900">Reference Category Redemptions</h5>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-700">
              <li><strong>Kirana & Groceries:</strong> Up to ₹600 Coins deducted on ₹10,000 bill.</li>
              <li><strong>Fresh Vegetables:</strong> Up to ₹600 Coins deducted on ₹4,000 bill.</li>
              <li><strong>Medical Store:</strong> Up to ₹300 Coins deducted on ₹2,000 bill.</li>
              <li><strong>Restaurant:</strong> Up to ₹300 Coins deducted on ₹2,000 bill.</li>
              <li><strong>Beauty Parlour:</strong> Up to ₹300 Coins deducted on ₹2,000 bill.</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
            *Demo data only. Actual partner limits and terms will be governed by official WOMUP agreements.
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  )
}
