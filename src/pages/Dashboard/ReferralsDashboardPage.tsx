import React, { useState, useMemo } from 'react'
import {
  Users,
  Copy,
  Check,
  ShieldAlert,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  GitBranch,
  Network,
  UserCheck,
  Send,
} from 'lucide-react'
import { DashboardLayout } from '../../components/layout/DashboardLayout.tsx'
import { Card } from '../../components/ui/Card.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { Badge } from '../../components/ui/Badge.tsx'
import { IconBox } from '../../components/ui/IconBox.tsx'
import { useToast } from '../../hooks/useToast.ts'

interface ReferralMember {
  id: string
  name: string
  location: string
  joinedDate: string
  status: 'Active' | 'Pending First Shop'
  coinBenefit: number
  tier: string
  children?: { id: string; name: string; location: string; status: 'Active' | 'Pending' }[]
}

export const ReferralsDashboardPage: React.FC = () => {
  const toast = useToast()
  const [hasCopiedLink, setHasCopiedLink] = useState(false)
  const [hasCopiedCode, setHasCopiedCode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'Active' | 'Pending'>('all')
  const [selectedTreeNode, setSelectedTreeNode] = useState<string | null>('root')

  const referralCode = 'WM-84920'
  const referralLink = `https://womup.in/register?ref=${referralCode}`

  // Copy referral link handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setHasCopiedLink(true)
    toast.success('Referral Link Copied! 🔗', 'Share your personal invitation link with friends and family.')
    setTimeout(() => setHasCopiedLink(false), 2000)
  }

  // Copy referral code handler
  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode)
    setHasCopiedCode(true)
    toast.success('Referral Code Copied!', `Code ${referralCode} copied to clipboard.`)
    setTimeout(() => setHasCopiedCode(false), 2000)
  }

  // WhatsApp share handler
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      `Hey! Join me on WOMUP — shop smarter and save up to ₹2,000 with Shopping Coins across local grocery, dining & medical stores. Register free using my link: ${referralLink}`
    )
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank')
    toast.info('Opening WhatsApp', 'Sharing your WOMUP invitation message.')
  }

  // Demo Referral Members List (1st Level Direct Connections)
  const referralMembers: ReferralMember[] = [
    {
      id: 'WM-10492',
      name: 'Rahul Sharma',
      location: 'Kothrud, Pune',
      joinedDate: '15 Sep 2026',
      status: 'Active',
      coinBenefit: 100,
      tier: '1st Level',
      children: [
        { id: 'WM-20114', name: 'Karan Patel', location: 'Pune', status: 'Active' },
        { id: 'WM-20119', name: 'Suresh More', location: 'Pune', status: 'Active' },
      ],
    },
    {
      id: 'WM-10518',
      name: 'Neha Verma',
      location: 'Indiranagar, Bengaluru',
      joinedDate: '14 Sep 2026',
      status: 'Active',
      coinBenefit: 100,
      tier: '1st Level',
      children: [
        { id: 'WM-20188', name: 'Anita Deshmukh', location: 'Bengaluru', status: 'Active' },
        { id: 'WM-20194', name: 'Rohit Kulkarni', location: 'Bengaluru', status: 'Pending' },
      ],
    },
    {
      id: 'WM-10564',
      name: 'Amit Patel',
      location: 'Satellite, Ahmedabad',
      joinedDate: '12 Sep 2026',
      status: 'Active',
      coinBenefit: 100,
      tier: '1st Level',
      children: [
        { id: 'WM-20240', name: 'Meera Shah', location: 'Ahmedabad', status: 'Active' },
      ],
    },
    {
      id: 'WM-10601',
      name: 'Sunita Joshi',
      location: 'Andheri West, Mumbai',
      joinedDate: '10 Sep 2026',
      status: 'Active',
      coinBenefit: 100,
      tier: '1st Level',
      children: [
        { id: 'WM-20311', name: 'Dipak Patil', location: 'Mumbai', status: 'Active' },
      ],
    },
    {
      id: 'WM-10642',
      name: 'Vikas Deshmukh',
      location: 'Sector 18, Noida',
      joinedDate: '08 Sep 2026',
      status: 'Pending First Shop',
      coinBenefit: 0,
      tier: '1st Level',
    },
    {
      id: 'WM-10690',
      name: 'Pooja Patil',
      location: 'Banjara Hills, Hyderabad',
      joinedDate: '05 Sep 2026',
      status: 'Active',
      coinBenefit: 100,
      tier: '1st Level',
    },
  ]

  // Filtered referrals
  const filteredReferrals = useMemo(() => {
    return referralMembers.filter((m) => {
      if (statusFilter === 'Active' && m.status !== 'Active') return false
      if (statusFilter === 'Pending' && m.status !== 'Pending First Shop') return false

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        return (
          m.name.toLowerCase().includes(query) ||
          m.location.toLowerCase().includes(query) ||
          m.id.toLowerCase().includes(query)
        )
      }
      return true
    })
  }, [searchQuery, statusFilter, referralMembers])

  return (
    <DashboardLayout
      title="Referrals & Invitations"
      subtitle="Invite family and friends to join your WOMUP shopping community"
    >
      {/* ------------------------------------------------------------- */}
      {/* COMPLIANCE WARNING BANNER */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3.5 text-xs text-amber-900 shadow-2xs">
        <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-extrabold uppercase tracking-wider block mb-0.5">
            Demonstration Referral Network • Demo Data
          </span>
          <p className="text-amber-800 leading-relaxed">
            All referral counts, network trees, and coin credits displayed on this page are simulated demonstration figures (Demo Data). WOMUP does not guarantee fixed earnings, income returns, or mandatory referral requirements.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TOP STAT CARDS (4 CARDS) */}
      {/* ------------------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Referrals */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="purple" size="md" shape="squircle">
              <Users className="w-5 h-5 text-womup-purple" />
            </IconBox>
            <Badge variant="purple" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Total Referrals
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            18 Members
          </h3>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            Joined using code {referralCode}
          </p>
        </Card>

        {/* Active Referrals */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="magenta" size="md" shape="squircle">
              <UserCheck className="w-5 h-5 text-womup-magenta" />
            </IconBox>
            <Badge variant="magenta" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Active Referrals
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            16 Active
          </h3>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            88% activity rate this month
          </p>
        </Card>

        {/* 1st Level Foundation Progress */}
        <Card variant="default" padding="md" className="border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="purple" size="md" shape="squircle">
              <Network className="w-5 h-5 text-womup-purple" />
            </IconBox>
            <Badge variant="outline" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            1st Level Foundation
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            18 / 30 Target
          </h3>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            12 spots remaining in tier 1
          </p>
        </Card>

        {/* Shopping Coins Earned */}
        <Card variant="rewards" padding="md" className="border-amber-200">
          <div className="flex items-center justify-between mb-3">
            <IconBox color="gold" size="md" shape="squircle">
              <Sparkles className="w-5 h-5 text-amber-800" />
            </IconBox>
            <Badge variant="gold" size="sm">
              Demo Data
            </Badge>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900/80">
            Referral Coins Earned
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-inr mt-1">
            ₹1,800
          </h3>
          <p className="text-[11px] text-amber-950 font-medium mt-1">
            Promotional coins credited to wallet
          </p>
        </Card>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* "INVITE FRIENDS" & REFERRAL LINK CARD */}
      {/* ------------------------------------------------------------- */}
      <Card variant="default" padding="lg" className="border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-womup-purple text-[11px] font-bold uppercase tracking-wider">
                Invitation Hub
              </span>
              <Badge variant="gold" size="sm">Promotional Program</Badge>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
              Invite Friends & Grow Your Circle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
              Share your personal WOMUP referral link. When friends register free, they explore everyday savings with ₹2,000 Shopping Coins according to the promotional model.
            </p>
          </div>

          {/* Quick Code Pill */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 flex items-center justify-between gap-4 self-start lg:self-auto min-w-[240px]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Your Referral Code
              </span>
              <span className="text-2xl font-black font-mono text-womup-purple tracking-wider">
                {referralCode}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyCode}
              className="p-2 rounded-xl bg-white border border-purple-200 text-womup-purple hover:bg-purple-100 transition-colors cursor-pointer shadow-2xs"
              aria-label="Copy code"
            >
              {hasCopiedCode ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Link Box & Social Sharing Strip */}
        <div className="pt-6 space-y-4">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Shareable Invitation Link
          </label>

          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            {/* Link Input Field */}
            <div className="flex-1 relative flex items-center rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-800 select-all overflow-x-auto">
              <span className="truncate">{referralLink}</span>
            </div>

            {/* Copy Link Button */}
            <Button
              variant="secondary"
              size="md"
              leftIcon={hasCopiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              onClick={handleCopyLink}
              className="sm:w-auto"
            >
              {hasCopiedLink ? 'Copied!' : 'Copy Link'}
            </Button>

            {/* WhatsApp Share Button */}
            <Button
              variant="primary"
              size="md"
              leftIcon={<Send className="w-4 h-4 text-emerald-300" />}
              onClick={handleWhatsAppShare}
              className="sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white border-transparent"
            >
              Share on WhatsApp
            </Button>
          </div>
        </div>
      </Card>

      {/* ------------------------------------------------------------- */}
      {/* VISUAL REFERRAL TREE (HIERARCHICAL NETWORK VIEW) */}
      {/* ------------------------------------------------------------- */}
      <Card variant="default" padding="lg" className="border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-womup-purple" />
              <span>Visual Referral Tree</span>
              <Badge variant="purple" size="sm">Demo Hierarchy</Badge>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Interactive structural map of your 1st Level and 2nd Level community branches
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-womup-purple" />
              You (Root)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-womup-magenta" />
              1st Level
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              2nd Level
            </span>
          </div>
        </div>

        {/* Interactive Visual Network Diagram */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-purple-50/20 border border-slate-200 overflow-x-auto">
          <div className="min-w-[650px] flex flex-col items-center">
            {/* LEVEL 0: ROOT (YOU) */}
            <div
              onClick={() => setSelectedTreeNode('root')}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-womup-purple to-purple-900 text-white shadow-md border-2 border-purple-400 flex items-center gap-3 transition-transform group-hover:scale-105">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                  YOU
                </div>
                <div>
                  <span className="text-xs font-bold block leading-tight">Priya Sharma</span>
                  <span className="text-[10px] text-purple-200 font-mono">WM-84920 (Root)</span>
                </div>
              </div>

              {/* Connecting vertical line down */}
              <div className="w-0.5 h-8 bg-purple-300 my-1" />
            </div>

            {/* LEVEL 1: DIRECT CONNECTIONS (HORIZONTALLY SPREAD) */}
            <div className="w-full relative">
              {/* Horizontal line across children */}
              <div className="absolute top-0 left-[12%] right-[12%] h-0.5 bg-purple-200" />

              <div className="grid grid-cols-4 gap-4 pt-4">
                {referralMembers.slice(0, 4).map((member) => (
                  <div key={member.id} className="flex flex-col items-center relative">
                    {/* Vertical connector to horizontal bar */}
                    <div className="w-0.5 h-4 bg-purple-200 absolute -top-4" />

                    {/* Member Node Card */}
                    <div
                      onClick={() => setSelectedTreeNode(member.id)}
                      className={`w-full p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedTreeNode === member.id
                          ? 'bg-white border-womup-magenta shadow-md ring-2 ring-womup-magenta/20'
                          : 'bg-white/90 border-slate-200 hover:border-purple-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-full bg-fuchsia-100 text-womup-magenta font-bold text-xs flex items-center justify-center mx-auto mb-1.5">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-xs font-bold text-slate-900 block truncate">
                        {member.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono block">
                        {member.id}
                      </span>
                      <span className="text-[9px] font-semibold text-emerald-600 mt-1 inline-block bg-emerald-50 px-1.5 py-0.2 rounded">
                        1st Level
                      </span>
                    </div>

                    {/* LEVEL 2 BRANCHES (If present) */}
                    {member.children && member.children.length > 0 && (
                      <div className="flex flex-col items-center w-full mt-2">
                        <div className="w-0.5 h-3 bg-amber-200" />
                        <div className="w-full space-y-1.5">
                          {member.children.map((child) => (
                            <div
                              key={child.id}
                              className="p-2 rounded-lg bg-amber-50/70 border border-amber-200/70 text-[10px] text-center"
                            >
                              <span className="font-bold text-slate-800 block truncate">
                                {child.name}
                              </span>
                              <span className="text-[9px] text-amber-800 font-mono">
                                {child.id} • 2nd Lvl
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 mt-4 text-center">
          *Visual network diagram illustrates multi-tier community expansion (1st Level & 2nd Level) using demo structural data.
        </p>
      </Card>

      {/* ------------------------------------------------------------- */}
      {/* DIRECT REFERRALS LIST TABLE */}
      {/* ------------------------------------------------------------- */}
      <Card variant="default" padding="lg" className="border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Direct Referrals Directory</span>
              <Badge variant="purple" size="sm">{filteredReferrals.length} Members</Badge>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Shoppers who registered using your referral link
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Status Filter Toggle */}
            <div className="flex items-center rounded-xl bg-slate-100 p-1 text-xs">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  statusFilter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('Active')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  statusFilter === 'Active' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Active
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('Pending')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                  statusFilter === 'Pending' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Pending
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-56">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search member or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:bg-white focus:border-womup-purple focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Referrals Table */}
        {filteredReferrals.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3 pr-4">Member Name</th>
                  <th className="pb-3 px-3">Member ID</th>
                  <th className="pb-3 px-3">Location</th>
                  <th className="pb-3 px-3">Joined Date</th>
                  <th className="pb-3 px-3 text-center">Status</th>
                  <th className="pb-3 pl-3 text-right">Coin Credit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredReferrals.map((member) => (
                  <tr key={member.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Name & Avatar */}
                    <td className="py-3.5 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 text-womup-purple font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {member.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 block leading-tight">{member.name}</span>
                          <span className="text-[10px] text-slate-400">{member.tier}</span>
                        </div>
                      </div>
                    </td>

                    {/* Member ID */}
                    <td className="py-3.5 px-3 font-mono text-slate-600 whitespace-nowrap">
                      {member.id}
                    </td>

                    {/* Location */}
                    <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
                      {member.location}
                    </td>

                    {/* Joined Date */}
                    <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap">
                      {member.joinedDate}
                    </td>

                    {/* Status Pill */}
                    <td className="py-3.5 px-3 text-center whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          member.status === 'Active'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {member.status === 'Active' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        <span>{member.status}</span>
                      </span>
                    </td>

                    {/* Coin Benefit */}
                    <td className="py-3.5 pl-3 text-right font-inr font-bold text-amber-700 whitespace-nowrap">
                      {member.coinBenefit > 0 ? `+ ₹${member.coinBenefit} Coins` : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-12 text-center">
            <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900">No Referrals Found</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search query or status filter.
            </p>
          </div>
        )}
      </Card>
    </DashboardLayout>
  )
}
