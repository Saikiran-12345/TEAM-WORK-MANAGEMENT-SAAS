import { BaseService } from './BaseService';
import { Team } from '../types';

class TeamService extends BaseService<Team> {
  constructor() {
    super('teams');
  }
  
}

export const teamsService = new TeamService();
