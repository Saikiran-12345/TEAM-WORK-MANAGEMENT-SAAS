import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ className = '', noPadding = false, children, ...props }) => {
  return (
    <div className={`card ${noPadding ? '' : 'p-6'} ${className}`} {...props}>
      {children}
    </div>
  );
};
