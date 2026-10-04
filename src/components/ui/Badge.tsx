import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'slate' | 'purple';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  icon,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium gap-1',
    md: 'text-xs px-3 py-1 font-semibold gap-1.5',
  };

  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/30',
    rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/30',
    slate: 'bg-slate-800/80 text-slate-300 border border-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-wide uppercase transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
