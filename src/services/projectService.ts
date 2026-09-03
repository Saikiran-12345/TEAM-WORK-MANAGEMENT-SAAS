import { BaseService } from './BaseService';
import { Project } from '../types';

class ProjectService extends BaseService<Project> {
  constructor() {
    super('projects');
  }
  
}

export const projectsService = new ProjectService();
