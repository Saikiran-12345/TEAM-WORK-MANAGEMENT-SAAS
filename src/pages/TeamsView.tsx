import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';
import { usersService } from '../services/userService';
import { User } from '../types';
import { Users, Mail, Shield } from 'lucide-react';

export const TeamsView: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    setUsers(usersService.getAll());
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Organization Members</h1>
        <p className="text-text-secondary">Manage developers, leads, and access.</p>
      </div>
      <Card noPadding className="overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-surface-hover text-text-secondary text-sm border-b border-border-light">
            <tr>
              <th className="p-4 font-semibold">User</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Role</th>
              <th className="p-4 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b border-border-light hover:bg-surface-hover/50">
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold">{u.name.charAt(0)}</div>
                  <span className="font-semibold text-text-primary">{u.name}</span>
                </td>
                <td className="p-4 text-text-secondary"><div className="flex items-center gap-2"><Mail className="w-4 h-4"/>{u.email}</div></td>
                <td className="p-4"><span className="bg-surface border border-border-dark px-2 py-1 rounded text-xs font-bold text-text-secondary uppercase">{u.role.replace('_', ' ')}</span></td>
                <td className="p-4 text-right"><span className="bg-success-light text-success px-2 py-1 rounded text-xs font-bold">ACTIVE</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
