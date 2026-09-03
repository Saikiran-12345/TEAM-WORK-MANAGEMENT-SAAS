export type Role = 'MANAGER' | 'TEAM_LEAD' | 'DEVELOPER';
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type ProjectStatus = 'PLANNING' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  teamId?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  themePreference: 'light' | 'dark' | 'system';
  notificationPreference: boolean;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  leadId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  teamId: string;
  leadId: string;
  status: ProjectStatus;
  startDate: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  priority: TaskPriority;
  progress: number;
  budget?: number;
  revenue?: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  projectId: string;
  assigneeId?: string;
  creatorId: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  progress: number; // 0 to 100
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

export interface Comment {
  id: string;
  taskId: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR';
  isRead: boolean;
  linkTo?: string;
  createdAt: string;
}

export interface Activity {
  id: string;
  userId: string;
  action: string;
  entityType: 'PROJECT' | 'TASK' | 'TEAM' | 'USER';
  entityId: string;
  metadata: string;
  createdAt: string;
}

export interface DashboardStatsManager {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalEmployees: number;
  teamLeads: number;
  developers: number;
  pendingTasks: number;
  completedTasks: number;
  overdueTasks: number;
  organizationProgress: number;
}

export interface DashboardStatsLead {
  assignedProjects: number;
  teamSize: number;
  pendingTasks: number;
  completedTasks: number;
  overdueTasks: number;
  projectProgress: number;
  upcomingDeadlines: number;
}

export interface DashboardStatsDeveloper {
  myTasks: number;
  todaysTasks: number;
  upcomingDeadlines: number;
  completedTasks: number;
  pendingTasks: number;
  personalProgress: number;
}
