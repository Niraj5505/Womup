import type { Notification } from '../../types/entities/notification.ts'

export interface INotificationService {
  getNotifications(): Promise<Notification[]>
  markAsRead(id: string): Promise<void>
  markAllAsRead(): Promise<void>
  getUnreadCount(): Promise<number>
}
