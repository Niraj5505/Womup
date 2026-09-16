import type { INotificationService } from '../interfaces/notification.interface.ts'
import type { Notification } from '../../types/entities/notification.ts'

export class MockNotificationService implements INotificationService {
  private notifications: Notification[] = [
    {
      id: 'notif-1',
      title: 'Welcome Shopping Coins Active! 🎉',
      message: '₹2,000 Shopping Coin promotional credit is ready for partner store use.',
      type: 'reward',
      isRead: false,
      createdAt: '2026-09-16T09:40:00Z',
      timeAgo: '10 mins ago',
      actionUrl: '/dashboard/shopping-coin',
    },
    {
      id: 'notif-2',
      title: 'New Demo Referral Registered 👥',
      message: 'Rahul Sharma joined using your referral code WM-84920.',
      type: 'referral',
      isRead: false,
      createdAt: '2026-09-16T07:50:00Z',
      timeAgo: '2 hours ago',
      actionUrl: '/dashboard/referrals',
    },
    {
      id: 'notif-3',
      title: 'Savings Statement Ready 📊',
      message: 'You saved ₹600 on your simulated Kirana shopping this month.',
      type: 'info',
      isRead: true,
      createdAt: '2026-09-15T09:00:00Z',
      timeAgo: '1 day ago',
      actionUrl: '/dashboard',
    },
  ]

  async getNotifications(): Promise<Notification[]> {
    await new Promise((r) => setTimeout(r, 150))
    return [...this.notifications]
  }

  async markAsRead(id: string): Promise<void> {
    await new Promise((r) => setTimeout(r, 100))
    this.notifications = this.notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
  }

  async markAllAsRead(): Promise<void> {
    await new Promise((r) => setTimeout(r, 150))
    this.notifications = this.notifications.map((n) => ({ ...n, isRead: true }))
  }

  async getUnreadCount(): Promise<number> {
    return this.notifications.filter((n) => !n.isRead).length
  }
}

export const mockNotificationService = new MockNotificationService()
