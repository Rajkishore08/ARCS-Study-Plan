import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Compass,
  Play,
  Layers,
  ChevronLeft,
} from 'lucide-react';
import { allModules } from '../../data/modules';
import { useProgress } from '../../context/ProgressContext';
import { calculateModuleProgress } from '../../utils/progress';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const { moduleId, dayId } = useParams<{ moduleId?: string; dayId?: string }>();
  const { progress } = useProgress();
  const location = useLocation();

  // Track expanded modules in sidebar
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    allModules.forEach(m => {
      // Default expand active module or module 1
      initial[m.id] = m.id === moduleId || m.id === 'module-01';
    });
    return initial;
  });

  useEffect(() => {
    if (moduleId) {
      setExpandedModules(prev => ({
        ...prev,
        [moduleId]: true,
      }));
    }
  }, [moduleId]);

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside
      className={`h-[calc(100vh-4rem)] sticky top-16 bg-[#080d19] border-r border-slate-800/90 flex flex-col transition-all duration-300 z-30 shrink-0 ${
        isCollapsed ? 'w-16' : 'w-72 xl:w-80'
      }`}
    >
      {/* Sidebar Header */}
      <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
        {!isCollapsed && (
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              Curriculum Navigation
            </span>
            <span className="text-xs font-semibold text-slate-200">16 Modules • 80 Days</span>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className={`p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ${
            isCollapsed ? 'mx-auto' : ''
          }`}
          title={isCollapsed ? 'Expand Curriculum Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Module & Day Tree */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {/* Roadmap Quick Link */}
        <NavLink
          to="/roadmap"
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
              isActive
                ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
            } ${isCollapsed ? 'justify-center px-2' : ''}`
          }
          title="80-Day Roadmap"
        >
          <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
          {!isCollapsed && <span>Complete 80-Day Roadmap</span>}
        </NavLink>

        <div className="pt-2 pb-1 px-3">
          {!isCollapsed && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
              Learning Modules
            </span>
          )}
        </div>

        {/* 16 Modules List */}
        {allModules.map(mod => {
          const isExpanded = Boolean(expandedModules[mod.id]);
          const modProgress = calculateModuleProgress(mod, progress);
          const isCurrentModule = moduleId === mod.id;

          if (isCollapsed) {
            return (
              <NavLink
                key={mod.id}
                to={`/module/${mod.id}`}
                title={`${mod.title} (${modProgress.completedDays}/5 Days)`}
                className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all ${
                  isCurrentModule
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : modProgress.isCompleted
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {modProgress.isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <span>{mod.number.toString().padStart(2, '0')}</span>
                )}
              </NavLink>
            );
          }

          return (
            <div key={mod.id} className="rounded-xl overflow-hidden">
              {/* Module Header Row */}
              <div
                className={`flex items-center justify-between p-2 rounded-xl text-xs transition-colors cursor-pointer ${
                  isCurrentModule
                    ? 'bg-[#0f172a] text-cyan-300 font-semibold border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="flex items-center gap-2 flex-1 text-left min-w-0"
                >
                  <span className="font-mono text-cyan-400 font-bold shrink-0">
                    M{mod.number.toString().padStart(2, '0')}
                  </span>
                  <span className="truncate font-medium">{mod.title}</span>
                </button>

                <div className="flex items-center gap-1.5 shrink-0">
                  {modProgress.isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">
                      {modProgress.completedDays}/5
                    </span>
                  )}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="p-0.5 text-slate-500 hover:text-slate-300"
                  >
                    {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Day Sub-Items */}
              {isExpanded && (
                <div className="ml-3 pl-3 my-1 border-l border-slate-800 space-y-1">
                  {mod.days.map(day => {
                    const isDayDone = progress.completedDays[day.id];
                    const isCurrentDay = dayId === day.id;

                    return (
                      <NavLink
                        key={day.id}
                        to={`/module/${mod.id}/day/${day.id}`}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                          isCurrentDay
                            ? 'bg-cyan-500/10 text-cyan-300 font-semibold border border-cyan-500/30'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono text-[11px] text-slate-500 shrink-0">
                            D{day.dayNumber.toString().padStart(2, '0')}
                          </span>
                          <span className="truncate">{day.title}</span>
                        </div>

                        {isDayDone && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        )}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
