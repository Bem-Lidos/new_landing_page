import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder = 'Selecione uma opção',
  className = '' 
}: SelectProps) {
  const selectId = `select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={selectId} className="text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border border-input bg-input-background text-foreground
            appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${className}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  );
}
