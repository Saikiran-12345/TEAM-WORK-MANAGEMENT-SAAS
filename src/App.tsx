import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastProvider } from './components/ui/Toast';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/auth/Login';
import { ManagerDashboard } from './pages/manager/ManagerDashboard';
import { LeadDashboard } from './pages/lead/LeadDashboard';
import { DevDashboard } from './pages/dev/DevDashboard';
import { ProjectsView } from './pages/ProjectsView';
import { TasksView } from './pages/TasksView';
import { TeamsView } from './pages/TeamsView';
import { Settings } from './pages/Settings';

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            <Route path="/manager" element={<ManagerDashboard />} />
            <Route path="/manager/projects" element={<ProjectsView />} />
            <Route path="/manager/tasks" element={<TasksView />} />
            <Route path="/manager/teams" element={<TeamsView />} />
            
            <Route path="/lead" element={<LeadDashboard />} />
            <Route path="/lead/projects" element={<ProjectsView />} />
            <Route path="/lead/tasks" element={<TasksView />} />
            
            <Route path="/dev" element={<DevDashboard />} />
            <Route path="/dev/projects" element={<ProjectsView />} />
            <Route path="/dev/tasks" element={<TasksView />} />
            
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
};
