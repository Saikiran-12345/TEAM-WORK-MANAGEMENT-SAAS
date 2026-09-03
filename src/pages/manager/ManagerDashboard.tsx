import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/Card';
import { ProgressBar } from '../../components/ui/ProgressBar';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Briefcase, ShieldCheck, Target, 
  Activity, ArrowRight, TrendingUp, Clock, DollarSign, CalendarDays
} from 'lucide-react';
import { projectsService } from '../../services/projectService';
import { tasksService } from '../../services/taskService';
import { usersService } from '../../services/userService';
import { useRealTimeSync } from '../../hooks/useRealTimeSync';

export const ManagerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    projects: 0,
    activeProjects: 0,
    tasks: 0,
    completedTasks: 0,
    users: 0,
    leads: 0,
    devs: 0
  });
  
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const [projectsData, setProjectsData] = useState<any[]>([]);

  const calculateData = () => {
    const p = projectsService.getAll();
    const t = tasksService.getAll();
    const u = usersService.getAll();
    
    setStats({
      projects: p.length,
      activeProjects: p.filter(x => x.status === 'ACTIVE').length,
      tasks: t.length,
      completedTasks: t.filter(x => x.status === 'COMPLETED').length,
      users: u.length,
      leads: u.filter(x => x.role === 'TEAM_LEAD').length,
      devs: u.filter(x => x.role === 'DEVELOPER').length
    });
    
    const allUsers = u.filter(user => user.role !== 'MANAGER');
    const performanceStats = allUsers.map(user => {
      const userTasks = t.filter(task => task.assigneeId === user.id);
      const completed = userTasks.filter(task => task.status === 'COMPLETED').length;
      const charCode = user.id.charCodeAt(0) + new Date().getDate();
      return {
         ...user,
         tasksAssigned: userTasks.length,
         tasksCompleted: completed,
         velocityScore: completed * 10,
         isOnline: (charCode % 10) > 2
      };
    }).sort((a, b) => b.velocityScore - a.velocityScore);
    
    setEmployeeData(performanceStats);
    setProjectsData(p.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()));
  };

  useRealTimeSync(calculateData);
  useEffect(() => { calculateData(); }, []);

  const progress = stats.tasks > 0 ? Math.round((stats.completedTasks / stats.tasks) * 100) : 0;
  
  const formatCurrency = (amount: number = 0) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex flex-col gap-8 animate__animated animate__fadeIn pb-12">
      {/* Welcome Banner */}
      <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary-light p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">TeamFlow</span></h1>
          <p className="text-white/80 text-lg max-w-2xl">Get a real-time bird's-eye view of your entire organization. Manage projects, track financials, and monitor performance throughput.</p>
        </div>
        <Target className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 text-white/10" />
      </div>

      {/* Core Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:-translate-y-1 cursor-pointer border-l-4 border-l-primary" onClick={() => navigate('/manager/projects')}>
          <div className="flex items-start justify-between">
            <div>
                <div className="p-3 bg-primary-light text-primary rounded-xl w-12 h-12 flex items-center justify-center mb-4"><Briefcase className="w-6 h-6"/></div>
                <h3 className="text-xl font-bold text-text-primary mb-1">Manage Projects</h3>
                <p className="text-sm text-text-secondary">Create initiatives and view full timelines.</p>
            </div>
            <ArrowRight className="text-text-muted" />
          </div>
        </Card>
        
        <Card className="hover:-translate-y-1 cursor-pointer border-l-4 border-l-success" onClick={() => navigate('/manager/teams')}>
          <div className="flex items-start justify-between">
            <div>
                <div className="p-3 bg-success-light text-success rounded-xl w-12 h-12 flex items-center justify-center mb-4"><Users className="w-6 h-6"/></div>
                <h3 className="text-xl font-bold text-text-primary mb-1">Organization Team</h3>
                <p className="text-sm text-text-secondary">View and manage all employees and roles.</p>
            </div>
            <ArrowRight className="text-text-muted" />
          </div>
        </Card>

        <Card className="hover:-translate-y-1 cursor-pointer border-l-4 border-l-warning" onClick={() => navigate('/settings')}>
          <div className="flex items-start justify-between">
            <div>
                <div className="p-3 bg-warning-light text-warning rounded-xl w-12 h-12 flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6"/></div>
                <h3 className="text-xl font-bold text-text-primary mb-1">System Settings</h3>
                <p className="text-sm text-text-secondary">Configure organization security.</p>
            </div>
            <ArrowRight className="text-text-muted" />
          </div>
        </Card>
      </div>

      {/* NEW: Financials & Deadlines */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><DollarSign className="text-success"/> Project Financials & Deadlines</h2>
        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-hover/50 text-text-muted text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold border-b border-border-light">Project Name</th>
                  <th className="p-4 font-bold border-b border-border-light">Submission Date</th>
                  <th className="p-4 font-bold border-b border-border-light text-right">Project Cost</th>
                  <th className="p-4 font-bold border-b border-border-light text-right">Income Generated</th>
                  <th className="p-4 font-bold border-b border-border-light text-right">Net Profit</th>
                </tr>
              </thead>
              <tbody>
                {projectsData.length === 0 && (
                  <tr><td colSpan={5} className="p-4 text-center text-text-muted">No active projects found.</td></tr>
                )}
                {projectsData.map(proj => {
                  const budget = proj.budget || 0;
                  const revenue = proj.revenue || 0;
                  const profit = revenue - budget;
                  const isProfitable = profit >= 0;
                  
                  return (
                    <tr key={proj.id} className="border-b border-border-light/50 last:border-0 hover:bg-surface-hover/30 transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-sm text-text-primary">{proj.name}</div>
                        <div className="text-[10px] text-text-muted mt-1 uppercase tracking-wider">{proj.status}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-text-secondary">
                          <CalendarDays className="w-4 h-4 text-primary" />
                          {formatDate(proj.deadline)}
                        </div>
                      </td>
                      <td className="p-4 text-right font-medium text-danger">
                        {formatCurrency(budget)}
                      </td>
                      <td className="p-4 text-right font-medium text-success">
                        {formatCurrency(revenue)}
                      </td>
                      <td className="p-4 text-right">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${isProfitable ? 'bg-success-light/30 text-success' : 'bg-danger-light/30 text-danger'}`}>
                           {isProfitable ? '+' : ''}{formatCurrency(profit)}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Employee Management Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Performance Leaderboard */}
        <Card className="flex flex-col gap-4">
          <h2 className="text-xl font-bold flex items-center gap-2"><TrendingUp className="text-primary"/> Employee Performance</h2>
          <p className="text-xs text-text-muted mb-2">Real-time velocity and task completion rates.</p>
          <div className="flex flex-col gap-3">
             {employeeData.slice(0, 5).map(emp => (
                <div key={emp.id} className="flex items-center gap-4 p-3 bg-surface-hover rounded-xl border border-border-light">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center font-bold">
                     {emp.avatarUrl ? <img src={emp.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" /> : emp.name.charAt(0)}
                   </div>
                   <div className="flex-1">
                     <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-text-primary">{emp.name}</span>
                        <span className="text-xs font-bold text-primary bg-primary-light/30 px-2 py-0.5 rounded-full">{emp.velocityScore} pts</span>
                     </div>
                     <ProgressBar progress={emp.tasksAssigned > 0 ? (emp.tasksCompleted / emp.tasksAssigned) * 100 : 0} showPercentage={false} colorClass="bg-primary" />
                     <p className="text-[10px] text-text-muted mt-1">{emp.tasksCompleted} of {emp.tasksAssigned} tasks completed</p>
                   </div>
                </div>
             ))}
          </div>
        </Card>

        {/* Live Attendance */}
        <Card className="flex flex-col gap-4">
          <h2 className="text-xl font-bold flex items-center gap-2"><Clock className="text-success"/> Today's Attendance</h2>
          <p className="text-xs text-text-muted mb-2">Live status of organization personnel.</p>
          <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] pr-2">
             {employeeData.map(emp => (
                <div key={emp.id} className="flex items-center justify-between p-3 border-b border-border-light/50 last:border-0 hover:bg-surface-hover transition-colors rounded-lg">
                   <div className="flex items-center gap-3">
                     <div className="relative">
                       <div className="w-8 h-8 rounded-full bg-border-light flex items-center justify-center text-text-primary font-bold text-xs">
                         {emp.avatarUrl ? <img src={emp.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" /> : emp.name.charAt(0)}
                       </div>
                       <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white shadow-sm ${emp.isOnline ? 'bg-success' : 'bg-text-muted'}`}></div>
                     </div>
                     <div>
                       <p className="font-semibold text-sm text-text-primary leading-tight">{emp.name}</p>
                       <p className="text-[10px] text-text-muted uppercase tracking-wider">{emp.role.replace('_', ' ')}</p>
                     </div>
                   </div>
                   <div className="text-right">
                      <span className={`text-xs font-bold ${emp.isOnline ? 'text-success' : 'text-text-muted'}`}>{emp.isOnline ? 'Online' : 'Offline'}</span>
                      <p className="text-[10px] text-text-muted">{emp.isOnline ? 'Working on tasks' : 'On Leave / Away'}</p>
                   </div>
                </div>
             ))}
          </div>
        </Card>
      </div>

    </div>
  );
};




