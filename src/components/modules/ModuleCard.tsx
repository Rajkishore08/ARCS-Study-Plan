import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Play, ArrowRight } from 'lucide-react';
import { Module } from '../../types/learning';
import { calculateModuleProgress } from '../../utils/progress';
import { useProgress } from '../../context/ProgressContext';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';

interface ModuleCardProps {
  module: Module;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const { progress } = useProgress();
  const modProgress = calculateModuleProgress(module, progress);

  const isCurrent = progress.lastVisitedModuleId === module.id;
  const isCompleted = modProgress.isCompleted;

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
    <Link
      to={`/module/${module.id}`}
      className={`group flex flex-col justify-between rounded-2xl border transition-all duration-200 glass-panel-hover overflow-hidden ${
        isCurrent
          ? 'bg-[#0f182c]/90 border-cyan-500/60 shadow-xl shadow-cyan-950/40'
          : isCompleted
          ? 'bg-[#09151e]/80 border-emerald-500/30'
          : 'bg-[#0d1424]/80 border-slate-800 hover:border-slate-700'
      }`}
    >
      <div>
        {/* Module Banner Image */}
        {module.bannerImage && (
          <div className="relative w-full h-36 overflow-hidden bg-slate-950 border-b border-slate-800/80">
            <img
              src={module.bannerImage}
              alt={module.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-black/30" />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-cyan-300 font-mono text-[11px] font-bold border border-cyan-500/30 shadow">
                MODULE {module.number.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        )}

        <div className="p-5 pb-0">
          {/* Card Header (if no banner or status) */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">{module.daysRange}</span>
            </div>

            <div>
              {isCompleted ? (
                <Badge variant="emerald" icon={<CheckCircle2 className="w-3 h-3" />}>
                  Complete
                </Badge>
              ) : isCurrent ? (
                <Badge variant="cyan" icon={<Play className="w-3 h-3 fill-current" />}>
                  Active
                </Badge>
              ) : modProgress.completedDays > 0 ? (
                <Badge variant="blue">
                  {modProgress.completedDays}/{module.days.length}
                </Badge>
              ) : (
                <Badge variant="slate">5 Days</Badge>
              )}
            </div>
          </div>

          {/* Title & Category */}
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-1">
            {module.title}
          </h3>

          <div className="mb-4">
            <Badge variant={getCategoryVariant(module.category)}>
              {module.category || 'Technology Module'}
            </Badge>
          </div>

          {module.theme && (
            <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
              {module.theme}
            </p>
          )}

          {/* Days mini pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {module.days.map(d => {
              const done = progress.completedDays[d.id];
              return (
                <span
                  key={d.id}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    done
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                      : 'bg-slate-900 text-slate-500 border border-slate-800'
                  }`}
                >
                  D{d.moduleDayNumber} {done ? '✓' : ''}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Progress & Action */}
      <div className="p-5 pt-0">
        <div className="pt-4 border-t border-slate-800/80">
          <div className="flex justify-between items-center text-xs text-slate-400 mb-2 font-medium">
            <span>{modProgress.completedDays} of {module.days.length} Days</span>
            <span className="text-cyan-400 font-semibold">{modProgress.percentage}%</span>
          </div>
          <ProgressBar
            value={modProgress.percentage}
            size="xs"
            variant={isCompleted ? 'emerald' : 'gradient'}
          />

          <div className="mt-4 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
            <span>Explore Module</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};
