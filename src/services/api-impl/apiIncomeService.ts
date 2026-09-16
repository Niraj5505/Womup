import type { IIncomeService } from '../interfaces/income.interface.ts'
import type { IncomeTransaction, IncomeSummary } from '../../types/entities/income.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiIncomeService implements IIncomeService {
  async getIncomeSummary(): Promise<IncomeSummary> {
    return apiClient.get<IncomeSummary>(ENDPOINTS.INCOME.SUMMARY)
  }

  async getIncomeTransactions(): Promise<IncomeTransaction[]> {
    return apiClient.get<IncomeTransaction[]>(ENDPOINTS.INCOME.TRANSACTIONS)
  }
}

export const apiIncomeService = new ApiIncomeService()
