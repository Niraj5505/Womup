import type { ITeamService } from '../interfaces/team.interface.ts'
import type { TeamMember, TeamStructureOverview } from '../../types/entities/team.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiTeamService implements ITeamService {
  async getTeamStructure(): Promise<TeamStructureOverview> {
    return apiClient.get<TeamStructureOverview>(ENDPOINTS.TEAM.STRUCTURE)
  }

  async getTeamMembersByLevel(level: number): Promise<TeamMember[]> {
    return apiClient.get<TeamMember[]>(ENDPOINTS.TEAM.MEMBERS_BY_LEVEL(level))
  }
}

export const apiTeamService = new ApiTeamService()
