import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
}

/**
 * Card component for content containers
 * - Multiple variants for different visual styles
 * - Configurable padding
 * - Interactive mode with hover effects
 */
export function Card({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'lg',
  interactive = false 
}: CardProps) {
  const variants = {
    default: 'bg-card border border-border',
    bordered: 'bg-card border-2 border-primary',
    elevated: 'bg-card shadow-lg border border-border/50',
    ghost: 'bg-transparent',
  };
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  const interactiveStyles = interactive 
    ? 'transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer' 
    : '';
  
  return (
    <div 
      className={`
        rounded-xl ${variants[variant]} ${paddings[padding]} ${interactiveStyles} ${className}
      `.trim().replace(/\s+/g, ' ')}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      {children}
    </div>
  );
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ children, className = '', as: Component = 'h3' }: CardTitleProps) {
  return (
    <Component className={`text-card-foreground font-semibold mb-2 ${className}`}>
      {children}
    </Component>
  );
}

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-muted-foreground text-sm ${className}`}>
      {children}
    </p>
  );
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-card-foreground ${className}`}>
      {children}
    </div>
  );
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-6 flex items-center gap-3 ${className}`}>
      {children}
    </div>
  );
}
