import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, Code, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { tasksService } from '../../services/taskService';
import { usersService } from '../../services/userService';
import { User } from '../../types';

export const DevDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [stats, setStats] = useState({
    myTasks: 0,
    completedTasks: 0,
    todoTasks: 0,
    reviewTasks: 0
  });

  useEffect(() => {
    const user = usersService.getCurrentUser();
    setCurrentUser(user);
    if (!user) return;
    
    const t = tasksService.find(x => x.assigneeId === user.id);
    
    setStats({
      myTasks: t.length,
      completedTasks: t.filter(x => x.status === 'COMPLETED').length,
      todoTasks: t.filter(x => x.status === 'TODO' || x.status === 'IN_PROGRESS').length,
      reviewTasks: t.filter(x => x.status === 'REVIEW').length
    });
  }, []);

  const progress = stats.myTasks > 0 ? Math.round((stats.completedTasks / stats.myTasks) * 100) : 0;

  return (
    <div className="flex flex-col gap-8 animate__animated animate__fadeIn">
      <div className="flex items-center justify-between bg-gradient-to-r from-primary to-warning p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Developer Station</h1>
          <p className="text-white/80 text-lg max-w-2xl">Focus on your code. Pick up tasks, move them to Review, and ship great software.</p>
        </div>
        <Code className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 text-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:-translate-y-1 cursor-pointer border-l-4 border-l-primary group" onClick={() => navigate('/dev/tasks')}>
          <div className="flex items-start justify-between">
            <div>
                <div className="p-3 bg-primary-light text-primary rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><CheckSquare className="w-6 h-6"/></div>
                <h3 className="text-xl font-bold text-text-primary mb-1">My Tasks Board</h3>
                <p className="text-sm text-text-secondary">You have {stats.todoTasks} tasks pending. Click to open Kanban board.</p>
            </div>
            <ArrowRight className="text-primary" />
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Clock className="text-primary"/> Personal Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="flex flex-col gap-2">
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Total Assigned</p>
            <h3 className="text-4xl font-bold text-text-primary">{stats.myTasks}</h3>
          </Card>
          <Card className="flex flex-col gap-2">
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Awaiting Review</p>
            <h3 className="text-4xl font-bold text-warning">{stats.reviewTasks}</h3>
          </Card>
          <Card className="flex flex-col gap-2">
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider">Completed</p>
            <h3 className="text-4xl font-bold text-success flex items-center gap-2">{stats.completedTasks} <CheckCircle className="w-6 h-6"/></h3>
          </Card>
          <Card className="flex flex-col gap-4 justify-center">
            <p className="text-sm text-text-secondary font-medium uppercase tracking-wider mb-1">Completion Rate</p>
            <ProgressBar progress={progress} showPercentage={true} colorClass="bg-success" />
          </Card>
        </div>
      </div>
    </div>
  );
};
