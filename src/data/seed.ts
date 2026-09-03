import { usersService } from '../services/userService';
import { teamsService } from '../services/teamService';
import { projectsService } from '../services/projectService';
import { tasksService } from '../services/taskService';

export const seedDatabase = () => {
  const version = localStorage.getItem('seed_version');
  if (version !== 'v5') {
    localStorage.clear();
    localStorage.setItem('seed_version', 'v5');
  } else {
    if (usersService.getAll().length > 0) return;
  }

  console.log('Seeding initial data with financials...');

  const manager = usersService.create({ name: 'System Manager', avatarUrl: 'https://ui-avatars.com/api/?name=System Manager&background=random&color=fff&size=128', email: 'manager@teamflow.local', role: 'MANAGER', isActive: true, themePreference: 'light', notificationPreference: true });
  
  const lead1 = usersService.create({ name: 'Alice Chen (Lead)', avatarUrl: 'https://ui-avatars.com/api/?name=Alice Chen (Lead)&background=random&color=fff&size=128', email: 'lead@teamflow.local', role: 'TEAM_LEAD', isActive: true, themePreference: 'light', notificationPreference: true });
  const lead2 = usersService.create({ name: 'David Kim', avatarUrl: 'https://ui-avatars.com/api/?name=David Kim&background=random&color=fff&size=128', email: 'david@teamflow.local', role: 'TEAM_LEAD', isActive: true, themePreference: 'light', notificationPreference: true });
  const lead3 = usersService.create({ name: 'Sarah Jenkins', avatarUrl: 'https://ui-avatars.com/api/?name=Sarah Jenkins&background=random&color=fff&size=128', email: 'sarah@teamflow.local', role: 'TEAM_LEAD', isActive: true, themePreference: 'light', notificationPreference: true });

  const dev1 = usersService.create({ name: 'Bob Smith (Dev)', avatarUrl: 'https://ui-avatars.com/api/?name=Bob Smith (Dev)&background=random&color=fff&size=128', email: 'dev@teamflow.local', role: 'DEVELOPER', isActive: true, themePreference: 'light', notificationPreference: true });
  const devs = [dev1];
  
  const names = [
      'Michael Chang', 'Elena Rodriguez', 'James Wilson', 'Anita Patel', 
      'Robert Fox', 'Lisa Wong', 'Thomas Wright', 'Maria Garcia'
  ];
  
  names.forEach((name, i) => {
      devs.push(usersService.create({ name, email: `${name.split(' ')[0].toLowerCase()}@teamflow.local`, role: 'DEVELOPER', isActive: true, themePreference: 'light', notificationPreference: true }));
  });

  const team1 = teamsService.create({ name: 'Core Platform Team', description: 'Backend infrastructure and UI.', leadId: lead1.id });
  const team2 = teamsService.create({ name: 'Growth & Monetization', description: 'Billing and onboarding.', leadId: lead2.id });
  const team3 = teamsService.create({ name: 'Security & DevOps', description: 'CI/CD and infrastructure.', leadId: lead3.id });
  
  devs.forEach((d, i) => {
      const tId = i % 3 === 0 ? team1.id : i % 3 === 1 ? team2.id : team3.id;
      usersService.update(d.id, { teamId: tId });
  });

  const proj1 = projectsService.create({ name: 'Project Phoenix - Q4 MVP', description: 'Complete rewrite of the legacy dashboard.', teamId: team1.id, leadId: lead1.id, status: 'ACTIVE', startDate: new Date().toISOString(), deadline: new Date(Date.now() + 86400000*30).toISOString(), priority: 'HIGH', progress: 35, budget: 150000, revenue: 320000 });
  const proj2 = projectsService.create({ name: 'Stripe Billing Integration', description: 'Automated Stripe recurring subscriptions.', teamId: team2.id, leadId: lead2.id, status: 'ACTIVE', startDate: new Date().toISOString(), deadline: new Date(Date.now() + 86400000*14).toISOString(), priority: 'CRITICAL', progress: 60, budget: 45000, revenue: 185000 });
  const proj3 = projectsService.create({ name: 'Zero-Trust Architecture', description: 'Implement strict RBAC and JWT validation.', teamId: team3.id, leadId: lead3.id, status: 'ACTIVE', startDate: new Date().toISOString(), deadline: new Date(Date.now() + 86400000*60).toISOString(), priority: 'HIGH', progress: 15, budget: 200000, revenue: 190000 });
  const proj4 = projectsService.create({ name: 'Mobile App Redesign', description: 'Revamp React Native mobile client.', teamId: team1.id, leadId: lead1.id, status: 'PLANNING', startDate: new Date().toISOString(), deadline: new Date(Date.now() + 86400000*90).toISOString(), priority: 'MEDIUM', progress: 0, budget: 85000, revenue: 0 });

  const realTasks = [
    { title: 'Implement OAuth2 Google Login', desc: 'Set up Google Cloud credentials.', status: 'COMPLETED', priority: 'HIGH', proj: proj1.id, offset: -2 },
    { title: 'Fix CSS Grid overflow on Mobile', desc: 'Adjust media queries.', status: 'REVIEW', priority: 'MEDIUM', proj: proj1.id, offset: 1 },
    { title: 'Write Unit Tests for Payment Processor', desc: '80% test coverage.', status: 'IN_PROGRESS', priority: 'HIGH', proj: proj2.id, offset: 2 }
  ];

  realTasks.forEach((t, i) => {
    const dev = devs[i % devs.length];
    const lead = t.proj === proj1.id ? lead1.id : t.proj === proj2.id ? lead2.id : lead3.id;
    tasksService.create({ title: t.title, description: t.desc, projectId: t.proj, assigneeId: dev.id, creatorId: lead, status: t.status as any, priority: t.priority as any, dueDate: new Date(Date.now() + 86400000 * t.offset).toISOString(), progress: t.status === 'COMPLETED' ? 100 : t.status === 'REVIEW' ? 90 : 40 });
  });

  window.dispatchEvent(new Event('teamflow_update'));
};



