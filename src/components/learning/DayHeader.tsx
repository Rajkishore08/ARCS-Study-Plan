import React from 'react';
import { Module, Day } from '../../types/learning';
import { Badge } from '../ui/Badge';
import { Clock, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';

interface DayHeaderProps {
  module: Module;
  day: Day;
}

export const DayHeader: React.FC<DayHeaderProps> = ({ module, day }) => {
  const { progress, toggleDayCompletion } = useProgress();
  const isCompleted = Boolean(progress.completedDays[day.id]);

  const themeVariants: Record<string, 'cyan' | 'blue' | 'indigo' | 'amber' | 'emerald' | 'purple'> = {
    Learn: 'blue',
    Explore: 'cyan',
    Questionnaire: 'indigo',
    'Practical Task': 'amber',
    'Challenge & Documentation': 'emerald',
  };

  const badgeVariant = themeVariants[day.theme || ''] || 'cyan';

  return (
    <div className="mb-8 pb-6 border-b border-slate-800">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
        <Link to="/roadmap" className="hover:text-cyan-400 transition-colors">
          80-Day Roadmap
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link to={`/module/${module.id}`} className="hover:text-cyan-400 transition-colors">
          {module.title}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-cyan-400 font-medium">Day {day.dayNumber.toString().padStart(2, '0')}</span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs font-semibold">
              DAY {day.moduleDayNumber.toString().padStart(2, '0')} OF {module.days.length.toString().padStart(2, '0')}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              (DAY {day.dayNumber} / 80)
            </span>
            {day.theme && (
              <Badge variant={badgeVariant}>
                {day.theme}
              </Badge>
            )}
            {day.duration && (
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {day.duration}
              </span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {day.title}
          </h1>

          {day.objective && (
            <p className="text-sm md:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {day.objective}
            </p>
          )}
        </div>

        {/* Quick status pill */}
        <button
          onClick={() => toggleDayCompletion(day.id, module.id, day.title)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
            isCompleted
              ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 hover:bg-emerald-950/60 shadow-sm shadow-emerald-500/20'
              : 'bg-slate-900/80 border-slate-700/80 text-slate-400 hover:text-white hover:border-slate-600'
          }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
          <span>{isCompleted ? 'Day Completed' : 'Mark Complete'}</span>
        </button>
      </div>
    </div>
  );
};
