import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Input component with accessibility features
 * - Proper label association
 * - Error state with aria-invalid
 * - Helper text with aria-describedby
 * - Icon support
 */
export function Input({ 
  label, 
  error, 
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = true,
  className = '', 
  id,
  disabled,
  required,
  ...props 
}: InputProps) {
  const inputId = id || `input-${React.useId()}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;
  
  const hasError = !!error;
  const hasHelper = !!helperText && !error;
  
  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
          {required && <span className="text-destructive ml-1" aria-label="required">*</span>}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {leftIcon}
          </div>
        )}
        
        <input
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? errorId : hasHelper ? helperId : undefined}
          className={`
            w-full h-11 px-4 rounded-lg
            border border-input bg-background
            text-foreground placeholder:text-muted-foreground
            text-base font-normal
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted
            ${hasError ? 'border-destructive focus:ring-destructive' : ''}
            ${leftIcon ? 'pl-10' : ''}
            ${rightIcon ? 'pr-10' : ''}
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p id={errorId} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
      
      {hasHelper && (
        <p id={helperId} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
    </div>
  );
}
