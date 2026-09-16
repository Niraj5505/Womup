import type { TeamMember, TeamStructureOverview } from '../../types/entities/team.ts'

export interface ITeamService {
  getTeamStructure(): Promise<TeamStructureOverview>
  getTeamMembersByLevel(level: number): Promise<TeamMember[]>
}
