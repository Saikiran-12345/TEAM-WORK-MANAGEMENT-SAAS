import { BaseService } from './BaseService';
import { User, Role } from '../types';

class UserService extends BaseService<User> {
  constructor() {
    super('users');
  }

  public login(email: string): User | null {
    const user = this.findOne(u => u.email === email && u.isActive);
    if (user) {
      window.dispatchEvent(new Event('teamflow_update'));
    localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }
    return null;
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
  }

  public getCurrentUser(): User | null {
    try {
      const data = localStorage.getItem('currentUser');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  public getByRole(role: Role): User[] {
    return this.find(u => u.role === role);
  }
}

export const usersService = new UserService();
