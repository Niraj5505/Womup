import type { IIncomeService } from '../interfaces/income.interface.ts'
import type { IncomeTransaction, IncomeSummary } from '../../types/entities/income.ts'

export class MockIncomeService implements IIncomeService {
  async getIncomeSummary(): Promise<IncomeSummary> {
    await new Promise((r) => setTimeout(r, 200))
    return {
      totalDisplayedRepurchasingIncome: 12450,
      totalShoppingCoinIncome: 3800,
      currentMonthProjected: 5200,
      lastMonthIncome: 7250,
      isDemo: true,
      disclaimer:
        'Income figures and benefits shown are based on the WOMUP promotional material and should not be interpreted as guaranteed earnings.',
    }
  }

  async getIncomeTransactions(): Promise<IncomeTransaction[]> {
    await new Promise((r) => setTimeout(r, 200))
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

export const mockIncomeService = new MockIncomeService()
