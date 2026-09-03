import { useEffect } from 'react';

export const useRealTimeSync = (onUpdate: () => void) => {
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      // Fast refresh on any data change
      if (e.key && ['tasks', 'projects', 'users', 'teams'].includes(e.key)) {
        onUpdate();
      }
    };
    const handleLocalUpdate = () => { onUpdate(); };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('teamflow_update', handleLocalUpdate);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('teamflow_update', handleLocalUpdate);
    };
  }, [onUpdate]);
};
