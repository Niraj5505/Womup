import type { IncomeTransaction, IncomeSummary } from '../../types/entities/income.ts'

export interface IIncomeService {
  getIncomeSummary(): Promise<IncomeSummary>
  getIncomeTransactions(): Promise<IncomeTransaction[]>
}
