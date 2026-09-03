import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, options, id, ...props }, ref) => {
    const selectId = id || Math.random().toString(36).substring(7);
    
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <label htmlFor={selectId} className="label">{label}</label>}
        <select
          id={selectId}
          ref={ref}
          className={`input cursor-pointer ${error ? 'border-danger focus:ring-danger' : ''} ${className}`}
          {...props}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {error && <p className="text-sm text-danger mt-1">{error}</p>}
      </div>
    );
  }
);
Select.displayName = 'Select';
