import { BaseService } from './BaseService';
import { Activity } from '../types';

class ActivityService extends BaseService<Activity> {
  constructor() {
    super('activities');
  }
  
}

export const activitiesService = new ActivityService();
