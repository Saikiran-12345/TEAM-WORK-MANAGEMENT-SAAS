import { BaseService } from './BaseService';
import { Notification } from '../types';

class NotificationService extends BaseService<Notification> {
  constructor() {
    super('notifications');
  }
  
}

export const notificationsService = new NotificationService();
