/**
 * TeamMember Entity
 * Represents members placed across levels 1 through 7 in the WOMUP organizational hierarchy.
 */

export interface TeamMember {
  id: string
  userId: string
  fullName: string
  mobileMasked: string
  city: string
  level: number // 1 to 7
  directSponsorId: string
  directSponsorName: string
  status: 'active' | 'inactive'
  joinedAt: string
  shoppingCoinVolume?: number
}

export interface TeamLevelSummary {
  level: number
  levelLabel: string
  targetCapacity: number
  activeCount: number
  totalMembers: number
  isUnlocked: boolean
}

export interface TeamStructureOverview {
  totalTeamCount: number
  activeTeamCount: number
  levels: TeamLevelSummary[]
  isDemo: boolean
}
