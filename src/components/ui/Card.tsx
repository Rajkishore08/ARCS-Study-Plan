import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'interactive' | 'outline' | 'glow';
  glowColor?: 'cyan' | 'blue' | 'indigo' | 'emerald';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'glass',
  glowColor = 'cyan',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-200';

  const glowStyles = {
    cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]',
    blue: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]',
    indigo: 'hover:border-indigo-500/40 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]',
    emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]',
  };

  const variantStyles = {
    glass:
      'bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/90 text-slate-100 shadow-xl shadow-black/20',
    solid:
      'bg-[#111728] border border-slate-800 text-slate-100 shadow-lg',
    interactive: `bg-[#0d1322]/90 backdrop-blur-md border border-slate-800/80 text-slate-100 hover:-translate-y-1 cursor-pointer ${glowStyles[glowColor]}`,
    outline:
      'bg-transparent border border-slate-800 text-slate-200 hover:border-slate-700',
    glow: 'bg-[#0f172a]/90 backdrop-blur-md border border-cyan-500/30 text-slate-100 shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)]',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
