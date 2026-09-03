import React from 'react';

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  colorClass?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label, showPercentage = true, colorClass = 'bg-primary' }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm font-medium text-text-secondary">{label}</span>}
          {showPercentage && <span className="text-sm font-medium text-text-primary">{Math.round(clampedProgress)}%</span>}
        </div>
      )}
      <div className="w-full bg-border-light rounded-full h-2.5 overflow-hidden">
        <div 
          className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${colorClass}`} 
          style={{ width: `${clampedProgress}%` }}
        ></div>
      </div>
    </div>
  );
};
