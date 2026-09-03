import { BaseService } from './BaseService';
import { Task } from '../types';

class TaskService extends BaseService<Task> {
  constructor() {
    super('tasks');
  }
  
}

export const tasksService = new TaskService();
