import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { modulesById } from '../data/modules';
import { useProgress } from '../context/ProgressContext';
import { calculateModuleProgress } from '../utils/progress';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import {
  CheckCircle2,
  Play,
  Target,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { ModuleCompleteSummary } from '../components/learning/ModuleCompleteSummary';

export const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { progress, setLastVisited } = useProgress();

  const module = moduleId ? modulesById[moduleId] : null;

  useEffect(() => {
    if (module) {
      setLastVisited(module.id, module.days[0]?.id || 'day-01');
    }
  }, [module, setLastVisited]);

  if (!module) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Module Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested module ID could not be found.</p>
        <Link to="/modules">
          <Button variant="glow">Browse All Modules</Button>
        </Link>
      </div>
    );
  }

  const modProgress = calculateModuleProgress(module, progress);

  // Find first uncompleted day in module
  const firstUncompletedDay = module.days.find(d => !progress.completedDays[d.id]) || module.days[0];

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link to="/roadmap" className="hover:text-cyan-400 transition-colors">
          80-Day Roadmap
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link to="/modules" className="hover:text-cyan-400 transition-colors">
          Modules
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-cyan-400 font-medium">Module {module.number.toString().padStart(2, '0')}</span>
      </div>

      {/* Module Hero Header Card */}
      <div className="p-6 md:p-10 rounded-3xl bg-gradient-to-br from-[#0c1628] via-[#0d1d3a] to-[#0a1222] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        {module.bannerImage && (
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 pointer-events-none overflow-hidden">
            <img
              src={module.bannerImage}
              alt=""
              className="w-full h-full object-cover object-center mask-radial-fade"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1628] via-[#0c1628]/80 to-transparent" />
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                MODULE {module.number.toString().padStart(2, '0')}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-mono text-cyan-400">{module.daysRange}</span>
              <Badge variant="blue">{module.category}</Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              {module.title}
            </h1>

            {module.theme && (
              <p className="text-sm md:text-base text-cyan-200/90 font-medium">
                Theme: {module.theme}
              </p>
            )}

            {module.goal && (
              <div className="flex items-start gap-2 text-xs md:text-sm text-slate-300 pt-1">
                <Target className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Goal: {module.goal}</span>
              </div>
            )}
          </div>

          {/* Action & Module Progress Box */}
          <div className="w-full lg:w-72 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shrink-0 space-y-4">
            <div>
              <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
                <span>Module Progress</span>
                <span className="text-cyan-400 font-bold">{modProgress.percentage}%</span>
              </div>
              <ProgressBar
                value={modProgress.percentage}
                size="sm"
                variant={modProgress.isCompleted ? 'emerald' : 'gradient'}
              />
              <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono mt-2">
                <span>{modProgress.completedDays} / {module.days.length} Days Completed</span>
              </div>
            </div>

            <Button
              size="md"
              variant={modProgress.isCompleted ? 'secondary' : 'glow'}
              className="w-full"
              onClick={() => navigate(`/module/${module.id}/day/${firstUncompletedDay.id}`)}
              icon={modProgress.isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Play className="w-4 h-4 fill-current" />}
            >
              {modProgress.isCompleted
                ? 'Review Module'
                : modProgress.completedDays > 0
                ? `Continue ${firstUncompletedDay.title}`
                : 'Start Module'}
            </Button>
          </div>
        </div>
      </div>

      {/* 5-Day Learning Structure Workflow */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Learning Schedule & Day Breakdown</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Work through each day's concepts, interactive inquiries, and engineering challenges.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {module.days.map(day => {
            const isDone = Boolean(progress.completedDays[day.id]);
            const isCurrent = firstUncompletedDay.id === day.id;

            return (
              <Link
                key={day.id}
                to={`/module/${module.id}/day/${day.id}`}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border transition-all glass-panel-hover group ${
                  isDone
                    ? 'bg-[#09151e]/80 border-emerald-500/30'
                    : isCurrent
                    ? 'bg-[#0e172a] border-cyan-500/50 shadow-lg shadow-cyan-950/30'
                    : 'bg-[#0d1424]/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start sm:items-center gap-4 mb-3 sm:mb-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isDone
                        ? 'bg-emerald-500 text-slate-950'
                        : isCurrent
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span>D{day.moduleDayNumber}</span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        Day {day.dayNumber.toString().padStart(2, '0')} of 80
                      </span>
                      {day.theme && (
                        <Badge variant="slate" size="sm">
                          {day.theme}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {day.title}
                    </h3>
                    {day.objective && (
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {day.objective}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                  {isDone ? (
                    <Badge variant="emerald" icon={<CheckCircle2 className="w-3 h-3" />}>
                      Completed
                    </Badge>
                  ) : isCurrent ? (
                    <Badge variant="cyan">Active Day</Badge>
                  ) : (
                    <span className="text-xs text-slate-500 font-mono">50 min</span>
                  )}

                  <span className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-400 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Module completion summary if fully completed */}
      {modProgress.isCompleted && <ModuleCompleteSummary module={module} />}
    </div>
  );
};
