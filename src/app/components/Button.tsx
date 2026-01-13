import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * Button component following accessibility best practices
 * - Supports keyboard navigation
 * - Includes focus states
 * - Disabled state with proper aria attributes
 */
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '', 
  children,
  disabled,
  type = 'button',
  ...props 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    active:scale-[0.98]
  `;
  
  const variants = {
    primary: `
      bg-primary text-primary-foreground
      hover:bg-primary-700 
      shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-secondary text-secondary-foreground
      hover:bg-secondary-600
      shadow-sm hover:shadow-md
    `,
    outline: `
      border-2 border-primary text-primary
      bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/20
    `,
    ghost: `
      text-foreground
      hover:bg-accent hover:text-accent-foreground
    `,
    destructive: `
      bg-destructive text-destructive-foreground
      hover:bg-destructive/90
      shadow-sm hover:shadow-md
    `,
    success: `
      bg-success text-success-foreground
      hover:bg-success/90
      shadow-sm hover:shadow-md
    `,
  };
  
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5 text-base',
    lg: 'h-12 px-6 text-lg',
    xl: 'h-14 px-8 text-xl',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </button>
  );
}
