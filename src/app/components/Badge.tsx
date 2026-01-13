import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'destructive' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  dot?: boolean;
}

/**
 * Badge component for labels and status indicators
 * - Multiple semantic variants
 * - Optional dot indicator
 * - Size variants
 */
export function Badge({ 
  children, 
  variant = 'neutral', 
  size = 'md',
  className = '',
  dot = false 
}: BadgeProps) {
  const variants = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border-2 border-primary text-primary bg-transparent',
    success: 'bg-success text-success-foreground',
    warning: 'bg-warning text-warning-foreground',
    destructive: 'bg-destructive text-destructive-foreground',
    info: 'bg-info text-info-foreground',
    neutral: 'bg-muted text-muted-foreground',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  return (
    <span 
      className={`
        inline-flex items-center gap-1.5
        font-medium rounded-full
        ${variants[variant]} ${sizes[size]} ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {dot && (
        <span 
          className="w-1.5 h-1.5 rounded-full bg-current"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
