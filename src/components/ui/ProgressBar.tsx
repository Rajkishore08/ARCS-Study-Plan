import React from 'react';

export interface ProgressBarProps {
  value: number; // 0 - 100
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'cyan' | 'blue' | 'gradient' | 'emerald';
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  size = 'sm',
  variant = 'gradient',
  showLabel = false,
  className = '',
}) => {
  const clampedValue = Math.min(100, Math.max(0, Math.round(value)));

  const sizeClasses = {
    xs: 'h-1',
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  const variantClasses = {
    cyan: 'bg-cyan-400 shadow-sm shadow-cyan-500/50',
    blue: 'bg-blue-500 shadow-sm shadow-blue-500/50',
    emerald: 'bg-emerald-400 shadow-sm shadow-emerald-500/50',
    gradient: 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500',
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
          <span>Progress</span>
          <span className="text-cyan-400 font-semibold">{clampedValue}%</span>
        </div>
      )}
      <div
        className={`w-full bg-slate-900/90 rounded-full overflow-hidden border border-slate-800/80 ${sizeClasses[size]}`}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full transition-all duration-500 ease-out rounded-full ${variantClasses[variant]}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
