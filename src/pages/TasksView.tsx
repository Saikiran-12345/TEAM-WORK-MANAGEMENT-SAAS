import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { useToast } from '../components/ui/Toast';
import { tasksService } from '../services/taskService';
import { projectsService } from '../services/projectService';
import { usersService } from '../services/userService';
import { useRealTimeSync } from '../hooks/useRealTimeSync';
import { Task, Project, User } from '../types';
import { 
  CheckCircle, Clock, PlayCircle, Plus, Trash, 
  Calendar, User as UserIcon, AlignLeft, Briefcase,
  AlertCircle, Target, ArrowRight, ArrowLeft
} from 'lucide-react';

export const TasksView: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [devs, setDevs] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { showToast } = useToast();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [projectId, setProjectId] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('MEDIUM');

  useEffect(() => { loadData(); }, []);
  useRealTimeSync(loadData);

  function loadData() {
    const user = usersService.getCurrentUser();
    setCurrentUser(user);
    if (!user) return;
    
    setDevs(usersService.getByRole('DEVELOPER'));
    
    if (user.role === 'MANAGER') {
      setProjects(projectsService.getAll());
      setTasks(tasksService.getAll());
    } else if (user.role === 'TEAM_LEAD') {
      const myProjects = projectsService.find(p => p.leadId === user.id);
      setProjects(myProjects);
      const pIds = myProjects.map(p => p.id);
      setTasks(tasksService.getAll().filter(t => pIds.includes(t.projectId) || t.creatorId === user.id));
    } else if (user.role === 'DEVELOPER') {
      setProjects(projectsService.getAll());
      setTasks(tasksService.find(t => t.assigneeId === user.id));
    }
  };

  const handleCreate = () => {
    if (!title) { showToast('Task Title is required', 'error'); return; }
    if (!projectId) { showToast('Please select a Project', 'error'); return; }
    if (!dueDate) { showToast('Please select a Deadline', 'error'); return; }
    
    tasksService.create({
      title, 
      description: desc, 
      projectId, 
      assigneeId, 
      creatorId: currentUser!.id,
      status: 'TODO', 
      priority: priority as any, 
      progress: 0, 
      dueDate: new Date(dueDate).toISOString()
    });
    
    showToast('Task assigned successfully!', 'success');
    setIsFormOpen(false); 
    setTitle(''); 
    setDesc(''); 
    setProjectId(''); 
    setAssigneeId(''); 
    setDueDate('');
    setPriority('MEDIUM');
    loadData();
  };

  const updateStatus = (taskId: string, newStatus: any) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    if (currentUser?.role === 'DEVELOPER' && task.assigneeId !== currentUser.id) {
      showToast('Permission denied', 'error');
      return;
    }
    tasksService.update(taskId, { 
      status: newStatus, 
      progress: newStatus === 'COMPLETED' ? 100 : newStatus === 'IN_PROGRESS' ? 50 : 0 
    });
    showToast(`Task moved to ${newStatus.replace('_', ' ')}`, 'info');
    loadData();
  };

  const handleDelete = (id: string) => {
    if(confirm('Are you sure you want to delete this task?')) { 
      tasksService.delete(id); 
      showToast('Task deleted successfully', 'success'); 
      loadData(); 
    }
  };

  const columns = [
    { id: 'TODO', label: 'To Do', icon: Clock, color: 'text-text-muted', bg: 'bg-surface-hover', border: 'border-text-muted' },
    { id: 'IN_PROGRESS', label: 'In Progress', icon: PlayCircle, color: 'text-primary', bg: 'bg-primary-light', border: 'border-primary' },
    { id: 'REVIEW', label: 'Review', icon: AlertCircle, color: 'text-warning', bg: 'bg-warning-light', border: 'border-warning' },
    { id: 'COMPLETED', label: 'Completed', icon: CheckCircle, color: 'text-success', bg: 'bg-success-light', border: 'border-success' }
  ];

  const priorityColors: Record<string, string> = {
    LOW: 'bg-surface border-border-dark text-text-secondary',
    MEDIUM: 'bg-primary-light text-primary',
    HIGH: 'bg-warning-light text-warning',
    CRITICAL: 'bg-danger-light text-danger'
  };

  return (
    <div className="flex flex-col gap-6 w-full h-full min-h-[calc(100vh-140px)] animate__animated animate__fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary flex items-center gap-3">
            <Target className="text-primary w-8 h-8" /> Task Board
          </h1>
          <p className="text-text-secondary mt-1">Manage, assign, and track progress of your tasks.</p>
        </div>
        {(currentUser?.role === 'TEAM_LEAD' || currentUser?.role === 'MANAGER') && (
          <Button onClick={() => setIsFormOpen(!isFormOpen)} icon={isFormOpen ? Trash : Plus} variant={isFormOpen ? 'outline' : 'primary'}>
            {isFormOpen ? 'Cancel' : 'Assign New Task'}
          </Button>
        )}
      </div>

      {isFormOpen && (
        <Card className="animate__animated animate__slideInDown border-t-4 border-t-primary shadow-2xl">
          <div className="flex items-center gap-2 mb-6 border-b border-border-light pb-4">
            <Plus className="text-primary w-6 h-6" />
            <h2 className="text-xl font-bold">Assign New Task</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Input label="Task Title" placeholder="E.g., Implement login API" value={title} onChange={e => setTitle(e.target.value)} icon={AlignLeft} />
            </div>
            <Select label="Priority" value={priority} onChange={e => setPriority(e.target.value)} 
              options={[
                {value: 'LOW', label: 'Low Priority'},
                {value: 'MEDIUM', label: 'Medium Priority'},
                {value: 'HIGH', label: 'High Priority'},
                {value: 'CRITICAL', label: 'Critical Priority'}
              ]} 
            />
            
            <Select label="Project" value={projectId} onChange={e => setProjectId(e.target.value)} 
                options={projects.map(p => ({ value: p.id, label: p.name }))} />
            
            <Select label="Assign To Developer" value={assigneeId} onChange={e => setAssigneeId(e.target.value)} 
                options={devs.map(d => ({ value: d.id, label: d.name }))} />
                
            <Input type="date" label="Deadline" value={dueDate} onChange={e => setDueDate(e.target.value)} icon={Calendar} />
            
            <div className="lg:col-span-3">
              <Input label="Detailed Description" placeholder="Add any technical details, links, or requirements here..." value={desc} onChange={e => setDesc(e.target.value)} />
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-border-light flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsFormOpen(false)}>Cancel</Button>
            <Button onClick={handleCreate} icon={CheckCircle}>Confirm & Assign Task</Button>
          </div>
        </Card>
      )}

      <div className="flex gap-6 overflow-x-auto pb-6 flex-1 items-stretch">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.id);
          return (
            <div key={col.id} className="flex-1 min-w-[320px] bg-surface border border-border-light rounded-xl flex flex-col shadow-sm">
              <div className={`p-4 font-bold border-b-2 ${col.border} flex items-center justify-between bg-bg-root rounded-t-xl`}>
                <div className="flex items-center gap-2">
                    <col.icon className={`w-5 h-5 ${col.color}`} />
                    <span className="text-text-primary uppercase tracking-wider text-sm">{col.label}</span>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${col.bg} ${col.color}`}>
                  {colTasks.length}
                </span>
              </div>
              
              <div className="p-3 flex flex-col gap-3 overflow-y-auto flex-1 bg-surface-hover/30 min-h-[200px]">
                {colTasks.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-32 text-text-muted border-2 border-dashed border-border-light rounded-lg opacity-60">
                    <col.icon className="w-8 h-8 mb-2 opacity-50"/>
                    <span className="text-sm">No tasks here</span>
                  </div>
                )}
                
                {colTasks.map(task => {
                  const assignedDev = devs.find(d => d.id === task.assigneeId);
                  const project = projects.find(p => p.id === task.projectId);
                  
                  return (
                    <Card key={task.id} noPadding className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-border-light group bg-surface overflow-hidden hover:-translate-y-1">
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h4 className="font-bold text-text-primary leading-tight">{task.title}</h4>
                          <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${priorityColors[task.priority] || priorityColors.MEDIUM}`}>
                            {task.priority}
                          </span>
                        </div>
                        
                        <p className="text-xs text-text-secondary line-clamp-2 mb-4 min-h-[32px]">{task.description}</p>
                        
                        {project && (
                          <div className="flex items-center gap-1.5 text-xs font-medium text-primary mb-3 bg-primary-light/50 w-fit px-2 py-1 rounded">
                            <Briefcase className="w-3.5 h-3.5"/>
                            <span className="truncate max-w-[150px]">{project.name}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between text-xs text-text-muted">
                          <div className="flex items-center gap-1.5 bg-surface-hover px-2 py-1 rounded border border-border-light">
                            <Calendar className="w-3.5 h-3.5"/> 
                            <span className={new Date(task.dueDate) < new Date() ? 'text-danger font-bold' : ''}>
                              {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-1.5" title={assignedDev?.name || 'Unassigned'}>
                            <UserIcon className="w-3.5 h-3.5"/>
                            <span className="truncate max-w-[80px]">{assignedDev?.name.split(' ')[0] || 'Unassigned'}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-bg-root border-t border-border-light px-4 py-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                          {col.id !== 'TODO' && (
                            <button onClick={() => updateStatus(task.id, col.id === 'COMPLETED' ? 'REVIEW' : col.id === 'REVIEW' ? 'IN_PROGRESS' : 'TODO')} className="p-1.5 hover:bg-surface-hover rounded-md text-text-secondary border border-transparent hover:border-border-dark transition-colors" title="Move back">
                              <ArrowLeft className="w-4 h-4"/>
                            </button>
                          )}
                          {col.id !== 'COMPLETED' && (
                            <button onClick={() => updateStatus(task.id, col.id === 'TODO' ? 'IN_PROGRESS' : col.id === 'IN_PROGRESS' ? 'REVIEW' : 'COMPLETED')} className="p-1.5 hover:bg-primary-light rounded-md text-primary border border-transparent hover:border-primary transition-colors" title="Move forward">
                              <ArrowRight className="w-4 h-4"/>
                            </button>
                          )}
                        </div>
                        {(currentUser?.role === 'TEAM_LEAD' || currentUser?.role === 'MANAGER') && (
                          <button onClick={() => handleDelete(task.id)} className="p-1.5 hover:bg-danger-light rounded-md text-danger transition-colors" title="Delete Task">
                            <Trash className="w-4 h-4"/>
                          </button>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
