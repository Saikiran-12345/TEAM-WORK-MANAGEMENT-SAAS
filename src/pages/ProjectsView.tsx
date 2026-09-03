import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { useToast } from '../components/ui/Toast';
import { projectsService } from '../services/projectService';
import { usersService } from '../services/userService';
import { Project, User } from '../types';
import { Plus, Edit, Trash, Briefcase, Calendar } from 'lucide-react';

export const ProjectsView: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [leads, setLeads] = useState<User[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { showToast } = useToast();
  
  // Form
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [leadId, setLeadId] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const user = usersService.getCurrentUser();
    setCurrentUser(user);
    if (!user) return;
    
    setLeads(usersService.getByRole('TEAM_LEAD'));
    
    if (user.role === 'MANAGER') {
      setProjects(projectsService.getAll());
    } else if (user.role === 'TEAM_LEAD') {
      setProjects(projectsService.find(p => p.leadId === user.id));
    }
  };

  const handleCreate = () => {
    if (!name || !desc) {
      showToast('Please fill all fields', 'error');
      return;
    }
    const finalLeadId = currentUser?.role === 'TEAM_LEAD' ? currentUser.id : leadId;
    if (!finalLeadId && currentUser?.role === 'MANAGER') {
      showToast('Please select a Team Lead', 'error');
      return;
    }

    projectsService.create({
      name, description: desc, leadId: finalLeadId, teamId: 'default',
      status: 'ACTIVE', startDate: new Date().toISOString(), deadline: new Date(Date.now() + 86400000 * 30).toISOString(),
      priority: 'MEDIUM', progress: 0
    });
    
    showToast('Project created successfully!', 'success');
    setIsFormOpen(false);
    setName(''); setDesc(''); setLeadId('');
    loadData();
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete project?')) {
      projectsService.delete(id);
      showToast('Project deleted', 'success');
      loadData();
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Projects</h1>
          <p className="text-text-secondary">Manage and track your active projects</p>
        </div>
        {(currentUser?.role === 'MANAGER' || currentUser?.role === 'TEAM_LEAD') && (
          <Button onClick={() => setIsFormOpen(!isFormOpen)} icon={Plus}>
            {isFormOpen ? 'Cancel' : 'New Project'}
          </Button>
        )}
      </div>

      {isFormOpen && (
        <Card className="animate__animated animate__fadeIn border-2 border-primary border-t-8 shadow-xl">
          <h2 className="text-xl font-bold mb-4">Create New Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Project Name" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Q4 Website Redesign" />
            {currentUser?.role === 'MANAGER' && (
              <Select label="Assign Team Lead" value={leadId} onChange={e => setLeadId(e.target.value)} 
                options={leads.map(l => ({ value: l.id, label: l.name }))} />
            )}
            <div className="md:col-span-2">
              <Input label="Description" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Brief overview of the project goals..." />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={handleCreate}>Save Project</Button>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 && !isFormOpen && (
          <div className="col-span-full p-12 flex flex-col items-center justify-center text-text-muted bg-surface rounded-xl border border-dashed border-border-dark">
             <Briefcase className="w-16 h-16 mb-4 text-primary opacity-50"/>
             <p className="text-xl font-bold">No Projects Found</p>
             <p>Create a project to get started.</p>
          </div>
        )}
        {projects.map(p => {
          const lead = usersService.getById(p.leadId);
          return (
            <Card key={p.id} className="flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200 border-t-4 border-t-primary cursor-pointer hover:shadow-lg">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-text-primary truncate flex items-center gap-2" title={p.name}><Briefcase className="w-5 h-5 text-purple-500 flex-shrink-0" />{p.name}</h3>
                <span className="bg-success-light text-success px-2 py-1 text-xs rounded-full font-bold uppercase">{p.status}</span>
              </div>
              <p className="text-sm text-text-secondary line-clamp-2 min-h-[40px]">{p.description}</p>
              
              <div className="flex items-center gap-2 text-sm text-text-muted bg-surface-hover p-2 rounded">
                <Calendar className="w-4 h-4 text-primary"/> 
                <span>Due: {new Date(p.deadline).toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between items-center mt-2 pt-4 border-t border-border-light">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-xs">{lead?.avatarUrl ? <img src={lead.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" /> : (lead?.name.charAt(0) || "?")}</div>
                  <span className="text-xs font-medium text-text-secondary">{lead?.name || 'Unassigned'}</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }} className="p-2 text-danger hover:bg-danger-light rounded"><Trash className="w-4 h-4 text-danger"/></button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};


