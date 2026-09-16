import type {
  IAdminService,
  AdminStats,
  UserManagementFilters,
  MerchantManagementFilters,
  CreateMerchantInput,
  UpdateMerchantInput,
} from '../interfaces/admin.interface.ts'
import type { User, UserStatus } from '../../types/entities/user.ts'
import type { Merchant } from '../../types/entities/merchant.ts'
import type { Purchase } from '../../types/entities/purchase.ts'
import type { ShoppingCoinTransaction } from '../../types/entities/shoppingCoin.ts'
import type { Referral } from '../../types/entities/referral.ts'
import type { IncomeTransaction } from '../../types/entities/income.ts'
import type { TeamStructureOverview } from '../../types/entities/team.ts'
import { DEMO_MERCHANTS } from '../../data/demoMerchants.ts'

export class MockAdminService implements IAdminService {
  private users: User[] = [
    {
      id: 'WM-84920',
      fullName: 'Priya Sharma',
      mobileNumber: '9876543210',
      email: 'priya.sharma@example.com',
      city: 'Pune',
      referralCode: 'WM-84920',
      referredBy: 'WM-10001',
      role: 'member',
      status: 'active',
      shoppingCoinBalance: 2000,
      createdAt: '2026-08-01T10:00:00Z',
      updatedAt: '2026-09-16T10:00:00Z',
    },
    {
      id: 'WM-10492',
      fullName: 'Rahul Sharma',
      mobileNumber: '9822012345',
      email: 'rahul.sharma@example.com',
      city: 'Pune',
      referralCode: 'WM-10492',
      referredBy: 'WM-84920',
      role: 'member',
      status: 'active',
      shoppingCoinBalance: 2000,
      createdAt: '2026-09-15T09:30:00Z',
      updatedAt: '2026-09-15T09:30:00Z',
    },
    {
      id: 'WM-10518',
      fullName: 'Neha Verma',
      mobileNumber: '9845098765',
      email: 'neha.verma@example.com',
      city: 'Bengaluru',
      referralCode: 'WM-10518',
      referredBy: 'WM-84920',
      role: 'member',
      status: 'active',
      shoppingCoinBalance: 2000,
      createdAt: '2026-09-14T11:15:00Z',
      updatedAt: '2026-09-14T11:15:00Z',
    },
    {
      id: 'WM-10564',
      fullName: 'Amit Patel',
      mobileNumber: '9879011223',
      email: 'amit.patel@example.com',
      city: 'Ahmedabad',
      referralCode: 'WM-10564',
      referredBy: 'WM-84920',
      role: 'member',
      status: 'active',
      shoppingCoinBalance: 2000,
      createdAt: '2026-09-12T14:20:00Z',
      updatedAt: '2026-09-12T14:20:00Z',
    },
    {
      id: 'WM-10601',
      fullName: 'Sunita Joshi',
      mobileNumber: '9820055443',
      email: 'sunita.joshi@example.com',
      city: 'Mumbai',
      referralCode: 'WM-10601',
      referredBy: 'WM-84920',
      role: 'member',
      status: 'active',
      shoppingCoinBalance: 2000,
      createdAt: '2026-09-10T16:45:00Z',
      updatedAt: '2026-09-10T16:45:00Z',
    },
    {
      id: 'WM-10642',
      fullName: 'Vikas Deshmukh',
      mobileNumber: '9811066778',
      email: 'vikas.deshmukh@example.com',
      city: 'Noida',
      referralCode: 'WM-10642',
      referredBy: 'WM-84920',
      role: 'member',
      status: 'suspended',
      shoppingCoinBalance: 2000,
      createdAt: '2026-09-08T18:00:00Z',
      updatedAt: '2026-09-15T12:00:00Z',
    },
    {
      id: 'WM-ADMIN-01',
      fullName: 'Vikram Malhotra',
      mobileNumber: '9900011122',
      email: 'admin@womup.in',
      city: 'Mumbai',
      referralCode: 'WM-ADMIN',
      referredBy: null,
      role: 'admin',
      status: 'active',
      shoppingCoinBalance: 10000,
      createdAt: '2026-01-01T00:00:00Z',
      updatedAt: '2026-09-16T12:00:00Z',
    },
  ]

  private merchants: (Merchant & { isActive: boolean })[] = DEMO_MERCHANTS.map((m) => ({
    ...(m as unknown as Merchant),
    isActive: true,
  }))

  private purchases: Purchase[] = [
    {
      id: 'PUR-8401',
      userId: 'WM-84920',
      merchantId: 'M-101',
      merchantName: 'Sharma Super Kirana & Provision Store',
      category: 'Kirana',
      totalBillAmount: 10000,
      coinDiscountApplied: 600,
      netPayableAmount: 9400,
      paymentMethod: 'store_counter',
      status: 'completed',
      invoiceNumber: 'INV-2026-0916-01',
      billDate: '16 Sep 2026, 2:15 PM',
      createdAt: '2026-09-16T14:15:00Z',
      isDemo: true,
    },
    {
      id: 'PUR-8395',
      userId: 'WM-84920',
      merchantId: 'M-102',
      merchantName: 'Green Fresh Organic Vegetable Mart',
      category: 'Vegetable',
      totalBillAmount: 2000,
      coinDiscountApplied: 600,
      netPayableAmount: 1400,
      paymentMethod: 'store_counter',
      status: 'completed',
      invoiceNumber: 'INV-2026-0915-08',
      billDate: '15 Sep 2026, 10:45 AM',
      createdAt: '2026-09-15T10:45:00Z',
      isDemo: true,
    },
    {
      id: 'PUR-8380',
      userId: 'WM-10492',
      merchantId: 'M-103',
      merchantName: 'Sanjivani Medicos & Wellness Clinic',
      category: 'Medical',
      totalBillAmount: 2000,
      coinDiscountApplied: 300,
      netPayableAmount: 1700,
      paymentMethod: 'store_counter',
      status: 'completed',
      invoiceNumber: 'INV-2026-0914-12',
      billDate: '14 Sep 2026, 6:30 PM',
      createdAt: '2026-09-14T18:30:00Z',
      isDemo: true,
    },
  ]

  async getStats(): Promise<AdminStats> {
    await new Promise((r) => setTimeout(r, 150))
    const totalUsers = 1248
    const activeUsers = 1098
    const totalMerchants = this.merchants.length
    const activeMerchants = this.merchants.filter((m) => m.isActive).length

    return {
      totalUsers,
      activeUsers,
      totalMerchants,
      activeMerchants,
      totalPurchasesCount: 4120,
      totalPurchasesAmount: 1845200,
      shoppingCoinsIssued: 2480000,
      shoppingCoinsRedeemed: 1420000,
      totalReferrals: 3420,
      totalRepurchasingIncomeDistributed: 284500,
    }
  }

  async getUsers(filters?: UserManagementFilters): Promise<{ users: User[]; total: number }> {
    await new Promise((r) => setTimeout(r, 150))
    let result = [...this.users]

    if (filters?.status && filters.status !== 'all') {
      result = result.filter((u) => u.status === filters.status)
    }

    if (filters?.role && filters.role !== 'all') {
      result = result.filter((u) => u.role === filters.role)
    }

    if (filters?.query) {
      const q = filters.query.toLowerCase().trim()
      result = result.filter(
        (u) =>
          u.fullName.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.mobileNumber.includes(q) ||
          u.city.toLowerCase().includes(q) ||
          u.referralCode.toLowerCase().includes(q)
      )
    }

    if (filters?.sortBy) {
      result.sort((a, b) => {
        const order = filters.sortOrder === 'desc' ? -1 : 1
        if (filters.sortBy === 'shoppingCoinBalance') {
          return (a.shoppingCoinBalance - b.shoppingCoinBalance) * order
        }
        if (filters.sortBy === 'fullName') {
          return a.fullName.localeCompare(b.fullName) * order
        }
        return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * order
      })
    }

    const total = result.length
    const page = filters?.page || 1
    const limit = filters?.limit || 10
    const start = (page - 1) * limit
    const paginated = result.slice(start, start + limit)

    return { users: paginated, total }
  }

  async getUserById(id: string): Promise<User | null> {
    await new Promise((r) => setTimeout(r, 100))
    return this.users.find((u) => u.id === id) || null
  }

  async updateUserStatus(userId: string, status: UserStatus): Promise<User> {
    await new Promise((r) => setTimeout(r, 200))
    const user = this.users.find((u) => u.id === userId)
    if (!user) throw new Error('User not found')
    user.status = status
    user.updatedAt = new Date().toISOString()
    return { ...user }
  }

  async getMerchants(filters?: MerchantManagementFilters): Promise<{ merchants: Merchant[]; total: number }> {
    await new Promise((r) => setTimeout(r, 150))
    let result = [...this.merchants]

    if (filters?.category && filters.category !== 'All') {
      result = result.filter((m) => m.category === filters.category)
    }

    if (filters?.status === 'active') {
      result = result.filter((m) => m.isActive)
    } else if (filters?.status === 'deactivated') {
      result = result.filter((m) => !m.isActive)
    }

    if (filters?.query) {
      const q = filters.query.toLowerCase().trim()
      result = result.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.location.toLowerCase().includes(q) ||
          m.city.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q)
      )
    }

    if (filters?.sortBy) {
      result.sort((a, b) => {
        const order = filters.sortOrder === 'desc' ? -1 : 1
        if (filters.sortBy === 'rating') {
          return (a.rating - b.rating) * order
        }
        if (filters.sortBy === 'name') {
          return a.name.localeCompare(b.name) * order
        }
        return 0
      })
    }

    const total = result.length
    const page = filters?.page || 1
    const limit = filters?.limit || 10
    const start = (page - 1) * limit
    const paginated = result.slice(start, start + limit)

    return { merchants: paginated, total }
  }

  async getMerchantById(id: string): Promise<Merchant | null> {
    await new Promise((r) => setTimeout(r, 100))
    const found = this.merchants.find((m) => m.id === id)
    return found || null
  }

  async createMerchant(input: CreateMerchantInput): Promise<Merchant> {
    await new Promise((r) => setTimeout(r, 300))
    const newId = `M-${Math.floor(200 + Math.random() * 800)}`
    const newMerchant: Merchant & { isActive: boolean } = {
      id: newId,
      name: input.name,
      category: input.category,
      categoryLabel: input.category,
      location: input.location,
      city: input.city,
      address: input.address,
      shoppingCoinInfo: input.shoppingCoinInfo || `Save up to ₹${input.maxCoinAcceptance} Coins`,
      maxCoinAcceptance: input.maxCoinAcceptance,
      sampleBill: {
        billAmount: input.maxCoinAcceptance * 10,
        coinUsed: input.maxCoinAcceptance,
        amountToPay: input.maxCoinAcceptance * 9,
        saving: input.maxCoinAcceptance,
      },
      image:
        input.image ||
        'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      rating: 4.8,
      reviewCount: 1,
      hours: input.hours || '9:00 AM – 9:00 PM',
      isDemo: true,
      isActive: true,
      createdAt: new Date().toISOString(),
    }

    this.merchants.unshift(newMerchant)
    return newMerchant
  }

  async updateMerchant(id: string, input: UpdateMerchantInput): Promise<Merchant> {
    await new Promise((r) => setTimeout(r, 250))
    const index = this.merchants.findIndex((m) => m.id === id)
    if (index === -1) throw new Error('Merchant not found')

    const updated = {
      ...this.merchants[index],
      ...input,
    }
    this.merchants[index] = updated
    return updated
  }

  async toggleMerchantStatus(id: string): Promise<Merchant> {
    await new Promise((r) => setTimeout(r, 200))
    const index = this.merchants.findIndex((m) => m.id === id)
    if (index === -1) throw new Error('Merchant not found')

    this.merchants[index].isActive = !this.merchants[index].isActive
    return this.merchants[index]
  }

  async getPurchases(): Promise<Purchase[]> {
    await new Promise((r) => setTimeout(r, 150))
    return [...this.purchases]
  }

  async getCoinTransactions(): Promise<ShoppingCoinTransaction[]> {
    await new Promise((r) => setTimeout(r, 150))
    return [
      {
        id: 'TXN-9021',
        userId: 'WM-84920',
        merchantId: 'M-101',
        merchantName: 'Sharma Super Kirana & Provision Store',
        category: 'Kirana',
        purchaseAmount: 10000,
        shoppingCoin: 600,
        type: 'debit',
        status: 'completed',
        description: 'Monthly grocery shopping bill deduction',
        date: '16 Sep 2026, 2:15 PM',
        createdAt: '2026-09-16T14:15:00Z',
      },
      {
        id: 'TXN-9019',
        userId: 'WM-84920',
        merchantId: 'M-102',
        merchantName: 'Green Fresh Organic Vegetable Mart',
        category: 'Vegetable',
        purchaseAmount: 2000,
        shoppingCoin: 600,
        type: 'debit',
        status: 'completed',
        description: 'Weekly fresh vegetables & fruits basket',
        date: '15 Sep 2026, 10:45 AM',
        createdAt: '2026-09-15T10:45:00Z',
      },
      {
        id: 'TXN-9001',
        userId: 'WM-84920',
        merchantName: 'WOMUP Monthly Promotional Allowance',
        category: 'Rewards Allowance',
        purchaseAmount: 0,
        shoppingCoin: 2000,
        type: 'credit',
        status: 'completed',
        description: 'Monthly Shopping Coin benefit allocation',
        date: '01 Sep 2026, 12:00 AM',
        createdAt: '2026-09-01T00:00:00Z',
      },
    ]
  }

  async getReferrals(): Promise<Referral[]> {
    await new Promise((r) => setTimeout(r, 150))
    return [
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
      },
    ]
  }

  async getTeamStructure(): Promise<TeamStructureOverview> {
    await new Promise((r) => setTimeout(r, 150))
    return {
      totalTeamCount: 3420,
      activeTeamCount: 3010,
      isDemo: true,
      levels: [
        { level: 1, levelLabel: '1st Level', targetCapacity: 30, activeCount: 28, totalMembers: 30, isUnlocked: true },
        { level: 2, levelLabel: '2nd Level', targetCapacity: 500, activeCount: 460, totalMembers: 500, isUnlocked: true },
        { level: 3, levelLabel: '3rd Level', targetCapacity: 2000, activeCount: 1814, totalMembers: 2000, isUnlocked: true },
        { level: 4, levelLabel: '4th Level', targetCapacity: 5000, activeCount: 708, totalMembers: 890, isUnlocked: true },
        { level: 5, levelLabel: '5th Level', targetCapacity: 25000, activeCount: 0, totalMembers: 0, isUnlocked: false },
        { level: 6, levelLabel: '6th Level', targetCapacity: 100000, activeCount: 0, totalMembers: 0, isUnlocked: false },
        { level: 7, levelLabel: '7th Level', targetCapacity: 100000, activeCount: 0, totalMembers: 0, isUnlocked: false },
      ],
    }
  }

  async getIncomeTransactions(): Promise<IncomeTransaction[]> {
    await new Promise((r) => setTimeout(r, 150))
    return [
      {
        id: 'INC-701',
        userId: 'WM-84920',
        type: 'repurchasing_income',
        typeLabel: 'Repurchasing Income',
        amount: 850,
        currency: 'INR',
        levelFrom: 2,
        sourceUserName: 'Karan Patel',
        description: 'Repurchasing income according to promotional material',
        status: 'credited',
        date: '15 Sep 2026',
        createdAt: '2026-09-15T18:00:00Z',
        isDemo: true,
      },
      {
        id: 'INC-702',
        userId: 'WM-84920',
        type: 'shopping_coin_income',
        typeLabel: 'Shopping Coin Income',
        amount: 100,
        currency: 'COINS',
        levelFrom: 1,
        sourceUserName: 'Rahul Sharma',
        description: 'Shopping coin associated with purchase/referral',
        status: 'credited',
        date: '15 Sep 2026',
        createdAt: '2026-09-15T15:00:00Z',
        isDemo: true,
      },
    ]
  }
}

export const mockAdminService = new MockAdminService()
