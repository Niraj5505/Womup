import React, { useState } from 'react'
import {
  Coins,
  PiggyBank,
  TrendingUp,
  Users,
  Copy,
  Check,
  ShieldAlert,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Info,
} from 'lucide-react'
import { DashboardLayout } from '../../components/layout/DashboardLayout.tsx'
import { Card } from '../../components/ui/Card.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { Badge } from '../../components/ui/Badge.tsx'
import { IconBox } from '../../components/ui/IconBox.tsx'
import { useToast } from '../../hooks/useToast.ts'
import { useRouter } from '../../router/RouterContext.tsx'

export const DashboardPage: React.FC = () => {
  const toast = useToast()
  const { navigate } = useRouter()
  const [hasCopiedCode, setHasCopiedCode] = useState(false)

  // Copy referral code handler
  const handleCopyReferral = () => {
    navigator.clipboard.writeText('WM-84920')
    setHasCopiedCode(true)
    toast.success('Referral Code Copied!', 'Share WM-84920 with friends to invite them to WOMUP.')
    setTimeout(() => setHasCopiedCode(false), 2000)
  }

  // Demo Recent Transactions List
  const recentTransactions = [
    {
      id: 'TXN-9021',
      merchant: 'Sharma Super Kirana & Provision Store',
      category: 'Kirana',
      date: 'Today, 2:15 PM',
      billAmount: 10000,
      coinUsed: 600,
      amountPaid: 9400,
      saving: 600,
      status: 'Completed (Demo)',
    },
    {
      id: 'TXN-8842',
      merchant: 'Kisan Fresh Farm Vegetables',
      category: 'Vegetable',
      date: 'Yesterday, 11:30 AM',
      billAmount: 4000,
      coinUsed: 600,
      amountPaid: 3400,
      saving: 600,
      status: 'Completed (Demo)',
    },
    {
      id: 'TXN-8720',
      merchant: 'Apollo Lifeline Medical Store',
      category: 'Medical',
      date: '12 Sep, 6:45 PM',
      billAmount: 2000,
      coinUsed: 300,
      amountPaid: 1700,
      saving: 300,
      status: 'Completed (Demo)',
    },
    {
      id: 'TXN-8651',
      merchant: 'Annapurna Spices Restaurant',
      category: 'Restaurant',
      date: '10 Sep, 8:20 PM',
      billAmount: 2000,
      coinUsed: 300,
      amountPaid: 1700,
      saving: 300,
      status: 'Completed (Demo)',
    },
  ]

  // Demo Team Structure Overview
  const teamOverviewData = [
    { level: '1st Level', target: '30 people', currentCount: 18, percentage: 60, tier: 'Direct Foundation' },
    { level: '2nd Level', target: '500 people', currentCount: 142, percentage: 28, tier: 'Community Circle' },
    { level: '3rd Level', target: '2,000 people', currentCount: 320, percentage: 16, tier: 'Expansion Tier' },
    { level: '4th Level', target: '5,000 people', currentCount: 450, percentage: 9, tier: 'Regional Cluster' },
    { level: '5th Level', target: '25,000 people', currentCount: 820, percentage: 3, tier: 'State Network' },
    { level: '6th Level', target: '1,00,000 people', currentCount: 1200, percentage: 1.2, tier: 'National Scale' },
    { level: '7th Level', target: '1,00,000 people', currentCount: 1500, percentage: 1.5, tier: 'Leadership Tier' },
  ]

  return (
    <DashboardLayout
      title="Dashboard Overview"
      subtitle="Welcome to your WOMUP Member Center • Demonstration Mode"
    >
      {/* TOP DEMO DATA COMPLIANCE NOTICE */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3.5 text-xs text-amber-900 shadow-2xs">
        <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-extrabold uppercase tracking-wider block mb-0.5">
            Demonstration Dashboard View • Demo Data Notice
          </span>
          <p className="text-amber-800 leading-relaxed">
            All financial figures, coin balances, displayed savings, and transactions shown on this dashboard are simulated demonstration data (Demo Data) for evaluation purposes. No real monetary transactions or guaranteed earnings are represented.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4 DASHBOARD STAT CARDS */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Shopping Coin Balance */}
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
            Shopping Coin Balance
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹2,000
          </h3>
          <p className="text-[11px] text-amber-950 font-medium mt-1">
            Usable across 14 verified partner categories
          </p>
        </Card>

        {/* Card 2: Total Displayed Savings */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="purple" size="md" shape="squircle">
              <PiggyBank className="w-5 h-5 text-womup-purple" />
            </IconBox>
            <Badge variant="purple" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Total Displayed Savings
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹4,200
          </h3>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            +₹600 saved this month (Simulated)
          </p>
        </Card>

        {/* Card 3: Referral Count */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="magenta" size="md" shape="squircle">
              <Users className="w-5 h-5 text-womup-magenta" />
            </IconBox>
            <Badge variant="magenta" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Referral Count
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            18 Members
          </h3>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            Direct connections in your shopping circle
          </p>
        </Card>

        {/* Card 4: Repurchasing Income */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="purple" size="md" shape="squircle">
              <TrendingUp className="w-5 h-5 text-womup-purple" />
            </IconBox>
            <Badge variant="outline" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Repurchasing Income
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹1,850
          </h3>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            Promotional repurchasing model calculation
          </p>
        </Card>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1 & 2: CHARTS ROW (Shopping Coin Summary & Category Savings) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 1. Shopping Coin Summary Chart */}
        <div className="lg:col-span-7">
          <Card variant="default" padding="lg" className="h-full border-slate-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Shopping Coin Summary</span>
                  <Badge variant="gold" size="sm">Demo Data</Badge>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Monthly coin earnings vs redemptions (Last 6 Months)
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-womup-purple">
                  <span className="w-2.5 h-2.5 rounded-full bg-womup-purple" />
                  Coins Used
                </span>
                <span className="flex items-center gap-1.5 text-amber-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  Balance
                </span>
              </div>
            </div>

            {/* Simulated Visual Chart Bars */}
            <div className="space-y-4 pt-2">
              {[
                { month: 'Jan', used: 1200, balance: 2000, height: '60%' },
                { month: 'Feb', used: 1500, balance: 2000, height: '75%' },
                { month: 'Mar', used: 900, balance: 2000, height: '45%' },
                { month: 'Apr', used: 1800, balance: 2000, height: '90%' },
                { month: 'May', used: 1400, balance: 2000, height: '70%' },
                { month: 'Jun', used: 1600, balance: 2000, height: '80%' },
              ].map((m) => (
                <div key={m.month} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>{m.month} 2026</span>
                    <span className="font-inr text-slate-500">
                      ₹{m.used} Coins Used / ₹{m.balance} Allowance
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-womup-purple rounded-full"
                      style={{ width: m.height }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>*Simulated coin usage tracking for illustrative dashboard visualization.</span>
              <button
                type="button"
                onClick={() => navigate('/dashboard/shopping-coin')}
                className="text-womup-purple font-bold hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>Wallet Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card>
        </div>

        {/* 2. Category Savings Breakdown Chart */}
        <div className="lg:col-span-5">
          <Card variant="default" padding="lg" className="h-full border-slate-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Category Savings</span>
                  <Badge variant="purple" size="sm">Demo Data</Badge>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Distribution of simulated household savings
                </p>
              </div>
            </div>

            {/* Progress Distribution */}
            <div className="space-y-4">
              {[
                { cat: 'Kirana & Groceries', share: '35%', amount: '₹1,470', color: 'bg-womup-purple' },
                { cat: 'Vegetable & Produce', share: '25%', amount: '₹1,050', color: 'bg-womup-magenta' },
                { cat: 'Medical & Pharmacy', share: '18%', amount: '₹756', color: 'bg-amber-500' },
                { cat: 'Dining & Restaurants', share: '14%', amount: '₹588', color: 'bg-pink-500' },
                { cat: 'Others (Salon, Shoes, etc)', share: '8%', amount: '₹336', color: 'bg-slate-600' },
              ].map((c) => (
                <div key={c.cat} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{c.cat}</span>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-slate-500">{c.share}</span>
                      <span className="font-bold text-slate-900 font-inr">{c.amount}</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${c.color} rounded-full`} style={{ width: c.share }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between text-xs">
              <span className="font-bold text-womup-purple">Total Simulated Savings</span>
              <span className="font-black text-slate-900 font-inr text-sm">₹4,200</span>
            </div>
          </Card>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3 & 4: RECENT TRANSACTIONS & REFERRAL OVERVIEW */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 3. Recent Transactions */}
        <div className="lg:col-span-8">
          <Card variant="default" padding="lg" className="border-slate-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Recent Transactions</span>
                  <Badge variant="outline" size="sm">Demo Data</Badge>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Simulated partner outlet shopping deductions
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                onClick={() => navigate('/dashboard/shopping-coin')}
              >
                View Coin Wallet
              </Button>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3 pr-4">Merchant</th>
                    <th className="pb-3 px-3">Date</th>
                    <th className="pb-3 px-3 text-right">Bill</th>
                    <th className="pb-3 px-3 text-right">Coins Used</th>
                    <th className="pb-3 px-3 text-right">You Paid</th>
                    <th className="pb-3 pl-3 text-right">Saved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 pr-4">
                        <span className="font-bold text-slate-900 block truncate max-w-xs sm:max-w-sm">
                          {tx.merchant}
                        </span>
                        <span className="text-[11px] text-slate-400">{tx.category}</span>
                      </td>
                      <td className="py-3 px-3 text-slate-500 whitespace-nowrap">{tx.date}</td>
                      <td className="py-3 px-3 text-right font-inr text-slate-700 font-semibold">
                        ₹{tx.billAmount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-3 text-right font-inr font-bold text-amber-700">
                        -₹{tx.coinUsed.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-3 text-right font-inr font-extrabold text-slate-950">
                        ₹{tx.amountPaid.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 pl-3 text-right font-inr font-black text-emerald-600">
                        +₹{tx.saving.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* 4. Referral Overview */}
        <div className="lg:col-span-4">
          <Card variant="default" padding="lg" className="h-full border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Referral Overview</span>
                  <Badge variant="magenta" size="sm">Demo Data</Badge>
                </h3>
              </div>

              {/* Share Code Card */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Your Unique Referral Code
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xl font-black text-womup-purple font-mono tracking-wider">
                    WM-84920
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyReferral}
                    className="px-3 py-1.5 rounded-lg bg-white border border-purple-300 text-xs font-bold text-womup-purple hover:bg-purple-50 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    {hasCopiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{hasCopiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Referral Stats Summary */}
              <div className="space-y-3 text-xs mb-4">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                  <span className="text-slate-600">Direct Referrals (1st Level):</span>
                  <span className="font-bold text-slate-900 font-mono">18 / 30 Target</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                  <span className="text-slate-600">Shopping Coin Earned:</span>
                  <span className="font-bold text-amber-700 font-inr">₹1,800 Coins</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                  <span className="text-slate-600">Circle Activity Rate:</span>
                  <span className="font-bold text-emerald-600">88% Active</span>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="sm"
              fullWidth
              onClick={handleCopyReferral}
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              Invite Friends & Family
            </Button>
          </Card>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 5 & 6: TEAM LEVEL OVERVIEW & MONTHLY ACTIVITY FEED */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 5. Team Level Overview (7 Levels) */}
        <div className="lg:col-span-7">
          <Card variant="default" padding="lg" className="border-slate-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Team Level Overview</span>
                  <Badge variant="purple" size="sm">7 Levels</Badge>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Progression through WOMUP promotional tiers (Demo Simulation)
                </p>
              </div>
              <Badge variant="outline" size="sm">
                Demo Data
              </Badge>
            </div>

            {/* 7 Levels Ladder */}
            <div className="space-y-3.5">
              {teamOverviewData.map((lvl) => (
                <div key={lvl.level} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900">{lvl.level}</span>
                      <span className="text-[10px] font-semibold text-womup-purple bg-purple-100/80 px-2 py-0.2 rounded-full">
                        {lvl.tier}
                      </span>
                    </div>
                    <span className="font-mono text-slate-500 font-medium text-[11px]">
                      {lvl.currentCount} / {lvl.target}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-womup-purple to-womup-magenta rounded-full"
                      style={{ width: `${lvl.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* 6. Monthly Activity Feed */}
        <div className="lg:col-span-5">
          <Card variant="default" padding="lg" className="border-slate-200 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span>Monthly Activity</span>
                    <Badge variant="gold" size="sm">Live Feed</Badge>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Latest simulated shopping & reward events
                  </p>
                </div>
              </div>

              {/* Activity Timeline */}
              <div className="space-y-4">
                {[
                  {
                    title: '₹600 Coins Redeemed',
                    desc: 'Simulated bill checkout at Sharma Super Kirana',
                    time: 'Today, 2:15 PM',
                    icon: ShoppingBag,
                  },
                  {
                    title: 'New Member Joined',
                    desc: 'Rahul S. registered via your referral link',
                    time: 'Yesterday, 5:30 PM',
                    icon: Users,
                  },
                  {
                    title: '₹600 Coins Redeemed',
                    desc: 'Farm produce purchase at Kisan Fresh Vegetables',
                    time: '14 Sep, 11:30 AM',
                    icon: ShoppingBag,
                  },
                  {
                    title: '₹300 Coins Redeemed',
                    desc: 'Prescription medicines at Apollo Lifeline Medical',
                    time: '12 Sep, 6:45 PM',
                    icon: ShoppingBag,
                  },
                ].map((act, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs">
                    <div className="p-2 rounded-lg bg-slate-100 text-womup-purple flex-shrink-0 mt-0.5">
                      <act.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-slate-900 leading-snug">{act.title}</h5>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5">{act.desc}</p>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">{act.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Info className="w-3.5 h-3.5 text-slate-400" />
                <span>Demo Event Log</span>
              </span>
              <span className="text-[11px] font-semibold text-womup-purple">Auto-refreshed</span>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
