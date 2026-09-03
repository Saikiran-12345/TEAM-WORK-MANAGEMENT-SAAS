import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'primary' }) => {
  return (
    <span className={`px-2 py-1 text-[10px] font-bold rounded-full bg-${color}-light/30 text-${color}`}>
      {children}
    </span>
  );
};
