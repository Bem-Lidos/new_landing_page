import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
}

export function Checkbox({ label, checked = false, onChange, id, className = '' }: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        id={checkboxId}
        onClick={() => onChange?.(!checked)}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200
          ${checked 
            ? 'bg-primary border-primary' 
            : 'border-input bg-input-background hover:border-primary'
          }
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
      >
        {checked && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
      </button>
      {label && (
        <label 
          htmlFor={checkboxId}
          className="cursor-pointer select-none text-foreground"
          onClick={() => onChange?.(!checked)}
        >
          {label}
        </label>
      )}
    </div>
  );
}
