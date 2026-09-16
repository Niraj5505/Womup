import type { INotificationService } from '../interfaces/notification.interface.ts'
import type { Notification } from '../../types/entities/notification.ts'
import { apiClient } from '../api/apiClient.ts'
import { ENDPOINTS } from '../api/endpoints.ts'

export class ApiNotificationService implements INotificationService {
  async getNotifications(): Promise<Notification[]> {
    return apiClient.get<Notification[]>(ENDPOINTS.NOTIFICATIONS.LIST)
  }

  async markAsRead(id: string): Promise<void> {
    await apiClient.post(ENDPOINTS.NOTIFICATIONS.MARK_READ(id))
  }

  async markAllAsRead(): Promise<void> {
    await apiClient.post(ENDPOINTS.NOTIFICATIONS.MARK_ALL_READ)
  }

  async getUnreadCount(): Promise<number> {
    const list = await this.getNotifications()
    return list.filter((n) => !n.isRead).length
  }
}

export const apiNotificationService = new ApiNotificationService()
