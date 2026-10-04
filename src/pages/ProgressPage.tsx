import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allModules } from '../data/modules';
import { useProgress } from '../context/ProgressContext';
import { useProjects } from '../context/ProjectContext';
import { calculateModuleProgress } from '../utils/progress';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Card } from '../components/ui/Card';
import {
  BarChart3,
  CheckCircle2,
  Flame,
  Calendar,
  Activity,
  Download,
  ArrowRight,
} from 'lucide-react';

export const ProgressPage: React.FC = () => {
  const { stats, progress, profile, exportData } = useProgress();
  const { projects } = useProjects();
  const [activeView, setActiveView] = useState<'matrix' | 'modules' | 'activity'>('matrix');

  // Count practical tasks documented
  let totalDocsSaved = 0;
  if (progress.dayPracticalDocs) {
    Object.values(progress.dayPracticalDocs).forEach(doc => {
      if (doc.whatIBuilt?.trim() || doc.whatILearned?.trim()) {
        totalDocsSaved++;
      }
    });
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="cyan" icon={<BarChart3 className="w-3.5 h-3.5" />}>
              Analytics & Transcript
            </Badge>
            <span className="text-xs font-mono text-slate-400">Student ID: {profile.name}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            Learning Progress Dashboard
          </h1>
          <p className="text-sm md:text-base text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Track your completed milestones, practical documentation records, interactive inquiries, and 80-day curriculum mastery.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              const jsonStr = exportData();
              const blob = new Blob([jsonStr], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `arcs-progress-transcript-${new Date().toISOString().split('T')[0]}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            icon={<Download className="w-4 h-4" />}
          >
            Export Transcript
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card variant="glass" className="p-4 sm:p-5 text-center">
          <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
            Program Mastery
          </span>
          <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
            {stats.percentage}%
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">{stats.completedDays} / 80 Days</span>
        </Card>

        <Card variant="glass" className="p-4 sm:p-5 text-center">
          <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
            Modules Completed
          </span>
          <span className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
            {stats.completedModules} / 16
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">{stats.remainingModules} remaining</span>
        </Card>

        <Card variant="glass" className="p-4 sm:p-5 text-center">
          <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
            Learning Streak
          </span>
          <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono flex items-center justify-center gap-1">
            <Flame className="w-5 h-5 fill-amber-400" />
            {progress.streakDays || 1}
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Days active</span>
        </Card>

        <Card variant="glass" className="p-4 sm:p-5 text-center">
          <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
            Practical Logs
          </span>
          <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
            {totalDocsSaved}
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Tasks Documented</span>
        </Card>

        <Card variant="glass" className="p-4 sm:p-5 text-center col-span-2 sm:col-span-1">
          <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
            Portfolio Projects
          </span>
          <span className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">
            {projects.length}
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Workspace entries</span>
        </Card>
      </div>

      {/* Main View Tabs */}
      <div className="flex bg-slate-900/90 rounded-2xl p-1.5 border border-slate-800 max-w-md">
        <button
          onClick={() => setActiveView('matrix')}
          className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
            activeView === 'matrix'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          80-Day Grid Matrix
        </button>
        <button
          onClick={() => setActiveView('modules')}
          className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
            activeView === 'modules'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          16 Module Breakdown
        </button>
        <button
          onClick={() => setActiveView('activity')}
          className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
            activeView === 'activity'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Activity Stream
        </button>
      </div>

      {/* Tab 1: 80-Day Interactive Matrix */}
      {activeView === 'matrix' && (
        <Card variant="glass" className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>80-Day Milestone Matrix</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any day square to jump directly into the learning workspace.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500" />
                <span className="text-slate-300">Completed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
                <span className="text-slate-400">Available</span>
              </div>
            </div>
          </div>

          {/* 16 Modules Row Matrix */}
          <div className="space-y-4">
            {allModules.map(mod => {
              const modProgress = calculateModuleProgress(mod, progress);
              return (
                <div
                  key={mod.id}
                  className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 w-full md:w-56 shrink-0">
                    <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 font-mono text-xs font-bold flex items-center justify-center text-cyan-400">
                      M{mod.number.toString().padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <Link
                        to={`/module/${mod.id}`}
                        className="text-xs font-bold text-white hover:text-cyan-300 truncate block transition-colors"
                      >
                        {mod.title}
                      </Link>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {mod.daysRange} • {modProgress.completedDays}/5 done
                      </span>
                    </div>
                  </div>

                  {/* 5 Day Squares */}
                  <div className="grid grid-cols-5 gap-2 flex-1 max-w-md">
                    {mod.days.map(day => {
                      const isDone = Boolean(progress.completedDays[day.id]);
                      return (
                        <Link
                          key={day.id}
                          to={`/module/${mod.id}/day/${day.id}`}
                          title={`Day ${day.dayNumber}: ${day.title} (${day.theme || 'Lesson'})`}
                          className={`p-2 rounded-lg text-center font-mono text-xs transition-all border ${
                            isDone
                              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold hover:bg-emerald-500/30'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:text-white'
                          }`}
                        >
                          D{day.dayNumber.toString().padStart(2, '0')}
                          {isDone ? ' ✓' : ''}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="w-16 text-right shrink-0 hidden md:block">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {modProgress.percentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Tab 2: 16 Module Breakdown */}
      {activeView === 'modules' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allModules.map(mod => {
            const modProgress = calculateModuleProgress(mod, progress);
            return (
              <Card key={mod.id} variant="glass" className="p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      MODULE {mod.number.toString().padStart(2, '0')} ({mod.daysRange})
                    </span>
                    {modProgress.isCompleted ? (
                      <Badge variant="emerald" icon={<CheckCircle2 className="w-3 h-3" />}>
                        Mastered
                      </Badge>
                    ) : (
                      <Badge variant="slate">{modProgress.completedDays}/5 Days</Badge>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">{mod.title}</h4>
                  <p className="text-xs text-slate-400 mb-4">{mod.category}</p>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-mono">
                    <span>Progress</span>
                    <span className="text-cyan-400 font-bold">{modProgress.percentage}%</span>
                  </div>
                  <ProgressBar
                    value={modProgress.percentage}
                    size="xs"
                    variant={modProgress.isCompleted ? 'emerald' : 'gradient'}
                    className="mb-3"
                  />

                  <Link
                    to={`/module/${mod.id}`}
                    className="flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 pt-2 border-t border-slate-800"
                  >
                    <span>View Module Days</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Tab 3: Activity Stream */}
      {activeView === 'activity' && (
        <Card variant="glass" className="p-6">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Learning Activity History</span>
          </h3>

          <div className="space-y-3">
            {(progress.activityHistory || []).map(act => (
              <div
                key={act.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="cyan" size="sm">
                      {act.type.replace('_', ' ')}
                    </Badge>
                    <h5 className="text-sm font-semibold text-white">{act.title}</h5>
                  </div>
                  <p className="text-xs text-slate-400">{act.description}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 shrink-0">
                  {new Date(act.timestamp).toLocaleString()}
                </span>
              </div>
            ))}

            {(!progress.activityHistory || progress.activityHistory.length === 0) && (
              <p className="text-xs text-slate-500 py-8 text-center">
                No activity records yet. Completing days or documenting tasks will populate this stream.
              </p>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};
