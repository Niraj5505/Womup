import type { ITeamService } from '../interfaces/team.interface.ts'
import type { TeamMember, TeamStructureOverview } from '../../types/entities/team.ts'

export class MockTeamService implements ITeamService {
  async getTeamStructure(): Promise<TeamStructureOverview> {
    await new Promise((r) => setTimeout(r, 200))
    return {
      totalTeamCount: 2548,
      activeTeamCount: 2210,
      isDemo: true,
      levels: [
        {
          level: 1,
          levelLabel: '1st Level',
          targetCapacity: 30,
          activeCount: 16,
          totalMembers: 18,
          isUnlocked: true,
        },
        {
          level: 2,
          levelLabel: '2nd Level',
          targetCapacity: 500,
          activeCount: 380,
          totalMembers: 412,
          isUnlocked: true,
        },
        {
          level: 3,
          levelLabel: '3rd Level',
          targetCapacity: 2000,
          activeCount: 1814,
          totalMembers: 2118,
          isUnlocked: true,
        },
        {
          level: 4,
          levelLabel: '4th Level',
          targetCapacity: 5000,
          activeCount: 0,
          totalMembers: 0,
          isUnlocked: false,
        },
        {
          level: 5,
          levelLabel: '5th Level',
          targetCapacity: 25000,
          activeCount: 0,
          totalMembers: 0,
          isUnlocked: false,
        },
        {
          level: 6,
          levelLabel: '6th Level',
          targetCapacity: 100000,
          activeCount: 0,
          totalMembers: 0,
          isUnlocked: false,
        },
        {
          level: 7,
          levelLabel: '7th Level',
          targetCapacity: 100000,
          activeCount: 0,
          totalMembers: 0,
          isUnlocked: false,
        },
      ],
    }
  }

  async getTeamMembersByLevel(level: number): Promise<TeamMember[]> {
    await new Promise((r) => setTimeout(r, 200))
    if (level === 1) {
      return [
        {
          id: 'TM-101',
          userId: 'U-201',
          fullName: 'Rahul Sharma',
          mobileMasked: 'XXXXXX3210',
          city: 'Pune',
          level: 1,
          directSponsorId: 'WM-84920',
          directSponsorName: 'Priya Sharma',
          status: 'active',
          joinedAt: '2026-09-15T10:00:00Z',
          shoppingCoinVolume: 600,
        },
        {
          id: 'TM-102',
          userId: 'U-202',
          fullName: 'Neha Verma',
          mobileMasked: 'XXXXXX5521',
          city: 'Bengaluru',
          level: 1,
          directSponsorId: 'WM-84920',
          directSponsorName: 'Priya Sharma',
          status: 'active',
          joinedAt: '2026-09-14T12:00:00Z',
          shoppingCoinVolume: 600,
        },
      ]
    }
    return []
  }
}

export const mockTeamService = new MockTeamService()
