import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, CheckSquare, Settings, LogOut, Menu, Bell, Moon, Sun, Search, Command } from 'lucide-react';
import { usersService } from '../../services/userService';
import { User } from '../../types';

export const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentUser = usersService.getCurrentUser();
    if (!currentUser) navigate('/login');
    else {
      setUser(currentUser);
      const savedTheme = currentUser.themePreference === 'dark' ? 'dark' : 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, [navigate, location.pathname]);

  const handleLogout = () => { usersService.logout(); navigate('/login'); };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (user) usersService.update(user.id, { themePreference: newTheme });
  };

  if (!user) return null;

  const navItems = {
    MANAGER: [
      { path: '/manager', label: 'Overview', icon: LayoutDashboard },
      { path: '/manager/projects', label: 'Projects', icon: Briefcase },
      { path: '/manager/tasks', label: 'Issues', icon: CheckSquare },
      { path: '/manager/teams', label: 'Team Directory', icon: Users },
      { path: '/settings', label: 'Settings', icon: Settings },
    ],
    TEAM_LEAD: [
      { path: '/lead', label: 'Overview', icon: LayoutDashboard },
      { path: '/lead/projects', label: 'Projects', icon: Briefcase },
      { path: '/lead/tasks', label: 'Issues', icon: CheckSquare },
      { path: '/settings', label: 'Settings', icon: Settings },
    ],
    DEVELOPER: [
      { path: '/dev', label: 'Overview', icon: LayoutDashboard },
      { path: '/dev/tasks', label: 'My Issues', icon: CheckSquare },
      { path: '/settings', label: 'Settings', icon: Settings },
    ]
  };

  const currentNav = navItems[user.role] || [];

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="app-container font-sans text-sm p-4 gap-4">
        <aside className={`sidebar flex flex-col transition-all duration-500 overflow-hidden ${!isSidebarOpen ? 'w-20' : 'w-72'}`}>
          <div className="h-20 flex items-center px-6 border-b border-border-light/30 gap-4">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-primary/30 object-cover" />
            {isSidebarOpen && <span className="font-extrabold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">TeamFlow</span>}
          </div>
          
          <div className="flex-1 py-6 flex flex-col gap-2 px-4">
            {currentNav.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path !== '/manager' && item.path !== '/lead' && item.path !== '/dev' && location.pathname.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary shadow-inner font-bold' : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'}`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-primary' : 'text-text-muted'}`} />
                  {isSidebarOpen && <span className="text-[15px]">{item.label}</span>}
                </button>
              );
            })}
          </div>

          <div className="p-4 border-t border-border-light/30 bg-primary/5 m-2 rounded-3xl">
            <div className="flex items-center gap-3 px-2 py-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                {user.avatarUrl ? <img src={user.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" /> : user.name.charAt(0)}
              </div>
              {isSidebarOpen && (
                <div className="overflow-hidden flex-1 text-left">
                  <p className="text-sm font-bold truncate leading-tight text-text-primary">{user.name}</p>
                  <p className="text-xs font-medium text-text-muted mt-0.5">{user.role}</p>
                </div>
              )}
            </div>
            <button onClick={handleLogout} className="mt-3 flex items-center justify-center gap-2 px-4 py-2 w-full text-danger hover:bg-danger/10 hover:shadow-inner rounded-xl transition-all font-bold text-xs">
              <LogOut className="w-4 h-4 flex-shrink-0" />
              {isSidebarOpen && <span>Sign Out</span>}
            </button>
          </div>
        </aside>

        <main className="main-content flex-1 flex flex-col min-w-0">
          <header className="header h-20 flex items-center justify-between px-8 z-10">
            <div className="flex items-center gap-6">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-surface-hover rounded-xl text-text-muted hover:text-primary transition-all">
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 text-sm font-semibold">
                 <span className="text-primary bg-primary/10 px-3 py-1 rounded-full">Acme Corp</span>
                 <span className="text-text-muted">/</span>
                 <span className="text-text-primary text-lg capitalize tracking-tight">
                   {location.pathname.split('/').pop()?.replace('-', ' ') || 'Overview'}
                 </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block w-72">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input type="text" placeholder="Search everywhere..." className="w-full bg-surface/50 border border-border-light rounded-full pl-11 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner" />
              </div>
              <button className="p-2.5 bg-surface rounded-full text-text-muted hover:text-primary shadow-sm transition-all border border-border-light">
                <Bell className="w-5 h-5" />
              </button>
              <button onClick={toggleTheme} className="p-2.5 bg-surface rounded-full text-text-muted hover:text-primary shadow-sm transition-all border border-border-light">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>
          </header>
          
          <div className="page-content flex-1 overflow-auto p-6 mt-4">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};



