import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, icon: Icon, helperText, id, ...props }, ref) => {
    const inputId = id || Math.random().toString(36).substring(7);
    
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <label htmlFor={inputId} className="label">{label}</label>}
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon className="h-5 w-5 text-text-muted" />
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={`input ${Icon ? 'pl-10' : ''} ${error ? 'border-danger focus:ring-danger focus:border-danger' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-sm text-danger mt-1">{error}</p>}
        {helperText && !error && <p className="text-sm text-text-muted mt-1">{helperText}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
