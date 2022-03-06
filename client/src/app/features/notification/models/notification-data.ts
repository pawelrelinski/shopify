import { NotificationType } from '@features/notification/models/notification-type';

export interface NotificationData {
  title: string;
  message: string;
  type?: NotificationType;
}
