import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersService } from '../../services/userService';
import { Mail, Lock, Command } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = usersService.getCurrentUser();
    if (user) {
      if (user.role === 'MANAGER') navigate('/manager');
      else if (user.role === 'TEAM_LEAD') navigate('/lead');
      else navigate('/dev');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(r => setTimeout(r, 800));

    const user = usersService.login(email);
    
    if (user) {
      if (user.role === 'MANAGER') navigate('/manager');
      else if (user.role === 'TEAM_LEAD') navigate('/lead');
      else navigate('/dev');
    } else {
      setError('Invalid credentials.');
    }
    setIsLoading(false);
  };

  const autofill = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('demo123');
  };

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="fixed inset-0 flex items-center justify-center p-4 z-10 overflow-hidden">
        
        {/* INCREASED WIDTH (480px) */}
        <div className="w-[480px] animate-smooth-enter">
          
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <img src="/logo.jpg" alt="Logo" className="w-20 h-20 mb-3 rounded-2xl shadow-lg shadow-primary/20 object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3" />
            <h1 className="text-2xl font-extrabold text-text-primary tracking-[0.2em] leading-none text-center w-full">TEAMFLOW</h1>
          </div>

          <div className="card px-8 py-6 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 opacity-80"></div>
            
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <h2 className="text-sm font-bold text-center text-text-primary mb-1 opacity-80">Sign in to your workspace</h2>
              
              {error && (
                <div className="px-3 py-1.5 bg-danger-light text-danger border border-danger/30 rounded-lg text-xs text-center font-bold animate-smooth-enter">
                  {error}
                </div>
              )}

              {/* TWO COLUMN GRID TO DECREASE HEIGHT */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                   <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5 block transition-colors group-focus-within:text-primary">Email Address</label>
                   <div className="relative">
                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted transition-colors group-focus-within:text-primary" />
                     <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-bg-root/50 border border-border-light rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium focus:outline-none focus:border-primary focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all text-text-primary placeholder:text-text-muted/50" placeholder="name@teamflow.local" />
                   </div>
                </div>

                <div className="group">
                   <label className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1.5 block transition-colors group-focus-within:text-primary">Password</label>
                   <div className="relative">
                     <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted transition-colors group-focus-within:text-primary" />
                     <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-bg-root/50 border border-border-light rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium focus:outline-none focus:border-primary focus:bg-surface focus:ring-4 focus:ring-primary/10 transition-all text-text-primary placeholder:text-text-muted/50" placeholder="Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢" />
                   </div>
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="btn-primary w-full mt-2 py-3 rounded-xl relative overflow-hidden group text-sm font-bold tracking-wide text-center">
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 block w-full text-center m-0 p-0 leading-normal">{isLoading ? 'Wait...' : 'Secure Login'}</span>
              </button>
            </form>
            
            <div className="mt-5 pt-4 border-t border-border-light/50">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider m-0">Fast Demo Access:</p>
                <div className="flex gap-2">
                  <button type="button" onClick={() => autofill('manager@teamflow.local')} className="btn-outline py-1 px-3 text-[10px] font-bold hover:scale-105 transition-transform duration-300 text-center">Manager</button>
                  <button type="button" onClick={() => autofill('lead@teamflow.local')} className="btn-outline py-1 px-3 text-[10px] font-bold hover:scale-105 transition-transform duration-300 text-center">Lead</button>
                  <button type="button" onClick={() => autofill('dev@teamflow.local')} className="btn-outline py-1 px-3 text-[10px] font-bold hover:scale-105 transition-transform duration-300 text-center">Dev</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};


