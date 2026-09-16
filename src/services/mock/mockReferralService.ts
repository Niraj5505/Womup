import type {
  IReferralService,
  ReferralTreeNode,
} from '../interfaces/referral.interface.ts'
import type {
  Referral,
  ReferralSummary,
  ReferralFilters,
} from '../../types/entities/referral.ts'

export class MockReferralService implements IReferralService {
  private referrals: Referral[] = [
    {
      id: 'WM-10492',
      referrerId: 'WM-84920',
      referredUserId: 'U-201',
      referredUserName: 'Rahul Sharma',
      referredUserLocation: 'Kothrud, Pune',
      referralCodeUsed: 'WM-84920',
      level: 1,
      tier: '1st Level',
      status: 'Active',
      coinBenefit: 100,
      joinedDate: '15 Sep 2026',
      children: [
        { id: 'WM-20114', name: 'Karan Patel', location: 'Pune', status: 'Active' },
        { id: 'WM-20119', name: 'Suresh More', location: 'Pune', status: 'Active' },
      ],
    },
    {
      id: 'WM-10518',
      referrerId: 'WM-84920',
      referredUserId: 'U-202',
      referredUserName: 'Neha Verma',
      referredUserLocation: 'Indiranagar, Bengaluru',
      referralCodeUsed: 'WM-84920',
      level: 1,
      tier: '1st Level',
      status: 'Active',
      coinBenefit: 100,
      joinedDate: '14 Sep 2026',
      children: [
        { id: 'WM-20188', name: 'Anita Deshmukh', location: 'Bengaluru', status: 'Active' },
        { id: 'WM-20194', name: 'Rohit Kulkarni', location: 'Bengaluru', status: 'Pending' },
      ],
    },
    {
      id: 'WM-10564',
      referrerId: 'WM-84920',
      referredUserId: 'U-203',
      referredUserName: 'Amit Patel',
      referredUserLocation: 'Satellite, Ahmedabad',
      referralCodeUsed: 'WM-84920',
      level: 1,
      tier: '1st Level',
      status: 'Active',
      coinBenefit: 100,
      joinedDate: '12 Sep 2026',
      children: [{ id: 'WM-20240', name: 'Meera Shah', location: 'Ahmedabad', status: 'Active' }],
    },
    {
      id: 'WM-10601',
      referrerId: 'WM-84920',
      referredUserId: 'U-204',
      referredUserName: 'Sunita Joshi',
      referredUserLocation: 'Andheri West, Mumbai',
      referralCodeUsed: 'WM-84920',
      level: 1,
      tier: '1st Level',
      status: 'Active',
      coinBenefit: 100,
      joinedDate: '10 Sep 2026',
      children: [{ id: 'WM-20311', name: 'Dipak Patil', location: 'Mumbai', status: 'Active' }],
    },
    {
      id: 'WM-10642',
      referrerId: 'WM-84920',
      referredUserId: 'U-205',
      referredUserName: 'Vikas Deshmukh',
      referredUserLocation: 'Sector 18, Noida',
      referralCodeUsed: 'WM-84920',
      level: 1,
      tier: '1st Level',
      status: 'Pending First Shop',
      coinBenefit: 0,
      joinedDate: '08 Sep 2026',
    },
    {
      id: 'WM-10690',
      referrerId: 'WM-84920',
      referredUserId: 'U-206',
      referredUserName: 'Pooja Patil',
      referredUserLocation: 'Banjara Hills, Hyderabad',
      referralCodeUsed: 'WM-84920',
      level: 1,
      tier: '1st Level',
      status: 'Active',
      coinBenefit: 100,
      joinedDate: '05 Sep 2026',
    },
  ]

  async getReferralSummary(): Promise<ReferralSummary> {
    await new Promise((r) => setTimeout(r, 200))
    return {
      referralCode: 'WM-84920',
      referralLink: 'https://womup.in/register?ref=WM-84920',
      totalReferrals: 18,
      activeReferrals: 16,
      foundationProgress: {
        current: 18,
        target: 30,
      },
      referralCoinsEarned: 1800,
      isDemo: true,
    }
  }

  async getReferralsList(filters?: ReferralFilters): Promise<Referral[]> {
    await new Promise((r) => setTimeout(r, 200))

    let list = [...this.referrals]

    if (filters?.status && filters.status !== 'all') {
      if (filters.status === 'Active') {
        list = list.filter((m) => m.status === 'Active')
      } else if (filters.status === 'Pending') {
        list = list.filter((m) => m.status === 'Pending First Shop')
      }
    }

    if (filters?.query) {
      const q = filters.query.toLowerCase().trim()
      list = list.filter(
        (m) =>
          m.referredUserName.toLowerCase().includes(q) ||
          m.referredUserLocation.toLowerCase().includes(q) ||
          m.id.toLowerCase().includes(q)
      )
    }

    return list
  }

  async getReferralTree(): Promise<ReferralTreeNode> {
    await new Promise((r) => setTimeout(r, 250))
    return {
      id: 'root',
      name: 'Priya Sharma (You)',
      code: 'WM-84920',
      level: 0,
      status: 'Active',
      children: this.referrals.slice(0, 4).map((m) => ({
        id: m.id,
        name: m.referredUserName,
        code: m.id,
        level: 1,
        status: m.status === 'Active' ? 'Active' : 'Pending',
        children: m.children?.map((c) => ({
          id: c.id,
          name: c.name,
          code: c.id,
          level: 2,
          status: c.status,
        })),
      })),
    }
  }

  async validateReferralCode(code: string): Promise<{ valid: boolean; referrerName?: string }> {
    await new Promise((r) => setTimeout(r, 200))
    if (code.toUpperCase() === 'WM-84920' || code.toUpperCase().startsWith('WM-')) {
      return { valid: true, referrerName: 'Priya Sharma' }
    }
    return { valid: false }
  }
}

export const mockReferralService = new MockReferralService()
