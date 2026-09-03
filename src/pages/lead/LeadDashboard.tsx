import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { Briefcase, CheckSquare, Target, Activity, ArrowRight } from 'lucide-react';
import { projectsService } from '../../services/projectService';
import { tasksService } from '../../services/taskService';
import { usersService } from '../../services/userService';
import { User } from '../../types';

export const LeadDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [stats, setStats] = useState({
    myProjects: 0,
    totalTasks: 0,
    completedTasks: 0,
    todoTasks: 0
  });

  useEffect(() => {
    const user = usersService.getCurrentUser();
    setCurrentUser(user);
    if (!user) return;
    
    const p = projectsService.find(x => x.leadId === user.id);
    const pIds = p.map(x => x.id);
    const t = tasksService.getAll().filter(x => pIds.includes(x.projectId));
    
    setStats({
      myProjects: p.length,
      totalTasks: t.length,
      completedTasks: t.filter(x => x.status === 'COMPLETED').length,
      todoTasks: t.filter(x => x.status === 'TODO').length
    });
  }, []);

  const progress = stats.totalTasks > 0 ? Math.round((stats.completedTasks / stats.totalTasks) * 100) : 0;

  return (
    <div className="flex flex-col gap-8 animate__animated animate__fadeIn">
      <div className="flex items-center justify-between bg-gradient-to-r from-success to-success-light p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Team Lead Workspace</h1>
          <p className="text-white/80 text-lg max-w-2xl">Manage your assigned projects and distribute tasks to your developers. Keep the momentum going!</p>
        </div>
        <Activity className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 text-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:-translate-y-1 cursor-pointer border-l-4 border-l-primary" onClick={() => navigate('/lead/projects')}>
          <div className="flex items-start justify-between">
            <div>
                <div className="p-3 bg-primary-light text-primary rounded-xl w-12 h-12 flex items-center justify-center mb-4"><Briefcase className="w-6 h-6"/></div>
                <h3 className="text-xl font-bold text-text-primary mb-1">My Projects ({stats.myProjects})</h3>
                <p className="text-sm text-text-secondary">View the scope and details of projects you lead.</p>
            </div>
            <ArrowRight className="text-text-muted" />
          </div>
        </Card>
        
        <Card className="hover:-translate-y-1 cursor-pointer border-l-4 border-l-warning" onClick={() => navigate('/lead/tasks')}>
          <div className="flex items-start justify-between">
            <div>
                <div className="p-3 bg-warning-light text-warning rounded-xl w-12 h-12 flex items-center justify-center mb-4"><CheckSquare className="w-6 h-6"/></div>
                <h3 className="text-xl font-bold text-text-primary mb-1">Task Board ({stats.todoTasks} Pending)</h3>
                <p className="text-sm text-text-secondary">Assign new tasks and review developer progress.</p>
            </div>
            <ArrowRight className="text-text-muted" />
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Target className="text-primary"/> Sprint Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col gap-2">
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Total Tasks</p>
            <h3 className="text-4xl font-bold text-text-primary">{stats.totalTasks}</h3>
          </Card>
          <Card className="flex flex-col gap-2">
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Completed</p>
            <h3 className="text-4xl font-bold text-success">{stats.completedTasks}</h3>
          </Card>
          <Card className="flex flex-col gap-4 justify-center">
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider mb-1">Overall Progress</p>
            <ProgressBar progress={progress} showPercentage={true} colorClass="bg-success" />
          </Card>
        </div>
      </div>
    </div>
  );
};
