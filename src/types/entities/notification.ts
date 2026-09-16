/**
 * Notification Entity
 * Represents in-app transactional alerts, referral notices, coin credits, and system announcements.
 */

export type NotificationType = 'info' | 'reward' | 'referral' | 'system'

export interface Notification {
  id: string
  userId?: string
  title: string
  message: string
  type: NotificationType
  isRead: boolean
  createdAt: string
  timeAgo?: string
  actionUrl?: string
}

export interface NotificationListResponse {
  notifications: Notification[]
  unreadCount: number
}
