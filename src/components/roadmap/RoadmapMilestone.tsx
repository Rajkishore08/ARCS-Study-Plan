import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Play, ArrowRight, Circle, Layers, Award } from 'lucide-react';
import { Module } from '../../types/learning';
import { calculateModuleProgress } from '../../utils/progress';
import { useProgress } from '../../context/ProgressContext';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';

interface RoadmapMilestoneProps {
  module: Module;
  index: number;
  isLast?: boolean;
}

export const RoadmapMilestone: React.FC<RoadmapMilestoneProps> = ({ module, index, isLast = false }) => {
  const { progress } = useProgress();
  const modProgress = calculateModuleProgress(module, progress);

  const isCurrent =
    progress.lastVisitedModuleId === module.id ||
    (!progress.lastVisitedModuleId && index === 0);

  const isCompleted = modProgress.isCompleted;
  const isStarted = modProgress.completedDays > 0;

  // Category badge colors
  const getCategoryVariant = (category: string) => {
    if (category.includes('Core') || category.includes('Foundations')) return 'cyan';
    if (category.includes('AI') || category.includes('Intelligent')) return 'blue';
    if (category.includes('Spatial') || category.includes('XR')) return 'purple';
    if (category.includes('IoT') || category.includes('Robotics')) return 'amber';
    if (category.includes('Drones') || category.includes('Satellites')) return 'emerald';
    if (category.includes('Fabrication') || category.includes('3D')) return 'indigo';
    return 'cyan';
  };

  return (
    <div className="relative flex items-start gap-4 md:gap-8 group">
      {/* Left Timeline Line & Milestone Node */}
      <div className="flex flex-col items-center shrink-0 relative">
        {/* Node Circle */}
        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-sm md:text-base transition-all duration-300 z-10 ${
            isCompleted
              ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
              : isCurrent
              ? 'bg-cyan-500 text-slate-950 pulse-milestone font-extrabold shadow-lg shadow-cyan-500/40'
              : isStarted
              ? 'bg-blue-600/30 border-2 border-blue-500 text-blue-300'
              : 'bg-slate-900 border border-slate-700/80 text-slate-400 group-hover:border-slate-500'
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <span>{module.number.toString().padStart(2, '0')}</span>
          )}
        </div>

        {/* Connecting Vertical Line */}
        {!isLast && (
          <div
            className={`w-0.5 my-2 flex-1 min-h-[70px] md:min-h-[90px] transition-colors ${
              isCompleted
                ? 'bg-emerald-500/60'
                : isStarted
                ? 'bg-gradient-to-b from-blue-500 to-slate-800'
                : 'bg-slate-800'
            }`}
          />
        )}
      </div>

      {/* Milestone Card */}
      <div className="flex-1 pb-8 md:pb-12">
        <Link
          to={`/module/${module.id}`}
          className={`block p-5 md:p-6 rounded-2xl border transition-all duration-200 glass-panel-hover ${
            isCurrent
              ? 'bg-[#0e1628]/90 border-cyan-500/50 shadow-xl shadow-cyan-950/40'
              : isCompleted
              ? 'bg-[#09141d]/80 border-emerald-500/30'
              : 'bg-[#0d1322]/70 border-slate-800/90 hover:border-slate-700'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                MODULE {module.number.toString().padStart(2, '0')}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-cyan-400 font-semibold">{module.daysRange}</span>
              <Badge variant={getCategoryVariant(module.category)}>
                {module.category || 'General Technology'}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              {isCompleted ? (
                <Badge variant="emerald" icon={<CheckCircle2 className="w-3 h-3" />}>
                  Completed
                </Badge>
              ) : isCurrent ? (
                <Badge variant="cyan" icon={<Play className="w-3 h-3 fill-current" />}>
                  Current
                </Badge>
              ) : isStarted ? (
                <Badge variant="blue">In Progress</Badge>
              ) : (
                <span className="text-xs text-slate-500">Not Started</span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {module.title}
              </h3>
              {module.theme && (
                <p className="text-xs md:text-sm text-slate-400 mt-1">{module.theme}</p>
              )}
            </div>

            <div className="w-full md:w-48 shrink-0">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
                <span>{modProgress.completedDays} / {module.days.length} Days</span>
                <span className="text-cyan-400 font-semibold">{modProgress.percentage}%</span>
              </div>
              <ProgressBar
                value={modProgress.percentage}
                size="sm"
                variant={isCompleted ? 'emerald' : 'gradient'}
              />
            </div>
          </div>

          {/* Days Mini Pill List */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {module.days.map(day => {
                const dayDone = progress.completedDays[day.id];
                return (
                  <span
                    key={day.id}
                    title={`${day.title} - ${day.theme || 'Day'}`}
                    className={`px-2 py-1 rounded text-[11px] font-mono transition-colors ${
                      dayDone
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    Day {day.dayNumber.toString().padStart(2, '0')} {dayDone ? '✓' : ''}
                  </span>
                );
              })}
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
              <span>Open Module</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
