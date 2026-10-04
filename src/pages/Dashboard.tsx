import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  Layers,
  FolderGit2,
  ArrowRight,
  Sparkles,
  Flame,
  Play,
  Activity,
  Plus,
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useProjects } from '../context/ProjectContext';
import { allModules } from '../data/modules';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ProjectCard } from '../components/projects/ProjectCard';
import { calculateModuleProgress, getNextUncompletedDay } from '../utils/progress';
import { Module, Day } from '../types/learning';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { stats, progress, profile } = useProgress();
  const { projects } = useProjects();

  // Find current day or next uncompleted day
  const nextTarget = getNextUncompletedDay(progress);
  const currentModule: Module =
    allModules.find(m => m.id === progress.lastVisitedModuleId) || nextTarget.module;
  const currentDay: Day =
    currentModule.days.find(d => d.id === progress.lastVisitedDayId) || nextTarget.day || currentModule.days[0];

  const currentModProgress = calculateModuleProgress(currentModule, progress);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#0c1628] via-[#0e1d3d] to-[#0a1122] border border-cyan-500/30 shadow-2xl overflow-hidden tech-grid-bg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
              ARCS Technology Discovery Program
            </Badge>
            <Badge variant="blue">Self-Paced Architecture</Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Learn, Explore, Build & Experiment at Your Own Pace.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Welcome, <span className="text-cyan-300 font-semibold">{profile.name}</span>. Embark on an 80-day engineering journey across 16 technology modules—from core foundations and applied AI to spatial computing, robotics, and hardware prototyping.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to={`/module/${currentModule.id}/day/${currentDay.id}`}>
              <Button size="lg" variant="glow" icon={<Play className="w-5 h-5 fill-current" />}>
                Continue Day {currentDay.dayNumber.toString().padStart(2, '0')}
              </Button>
            </Link>

            <Link to="/roadmap">
              <Button size="lg" variant="secondary" icon={<Compass className="w-5 h-5" />}>
                Explore 80-Day Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Primary Status & Continue Learning Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Learning Featured Card */}
        <Card variant="glass" className="p-6 md:p-7 border-cyan-500/40 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500 text-slate-950 font-mono text-[11px] font-bold rounded-bl-xl uppercase tracking-wider">
            Up Next
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
              Active Milestone
            </span>
            <h3 className="text-xl font-bold text-white mb-1">{currentModule.title}</h3>
            <p className="text-xs text-slate-400 mb-4">{currentModule.category} • {currentModule.daysRange}</p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-4">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-cyan-300">
                  {currentDay.title}
                </span>
                <Badge variant="cyan" size="sm">
                  {currentDay.theme || 'Learning Session'}
                </Badge>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                {currentDay.objective || 'Complete concepts, explore demos, answer technical inquiries, and document your hands-on tasks.'}
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
              <span>Module Progress</span>
              <span className="text-cyan-400 font-bold">{currentModProgress.percentage}%</span>
            </div>
            <ProgressBar value={currentModProgress.percentage} size="xs" variant="gradient" className="mb-4" />

            <Link to={`/module/${currentModule.id}/day/${currentDay.id}`} className="block">
              <Button size="md" variant="primary" className="w-full" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Continue Learning
              </Button>
            </Link>
          </div>
        </Card>

        {/* Overall Program Progress Card */}
        <Card variant="glass" className="p-6 md:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Overall Program Progress
              </span>
              <span className="text-xl font-black text-cyan-400 font-mono">{stats.percentage}%</span>
            </div>

            <ProgressBar value={stats.percentage} size="md" variant="gradient" className="mb-4" />

            <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">DAYS COMPLETED</span>
                <span className="text-base font-bold text-white mt-0.5 block">{stats.completedDays} / 80</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block text-[10px]">REMAINING DAYS</span>
                <span className="text-base font-bold text-slate-300 mt-0.5 block">{stats.remainingDays} Days</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">Total Program: 80 Days</span>
            <Link to="/progress" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>View Analytics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>

        {/* Modules & Streak Card */}
        <Card variant="glass" className="p-6 md:p-7 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-4">
              Achievements & Metrics
            </span>

            <div className="space-y-3">
              {/* Modules Completed */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Modules Completed</span>
                    <span className="text-[11px] text-slate-400">{stats.remainingModules} modules remaining</span>
                  </div>
                </div>
                <span className="text-lg font-black text-blue-400 font-mono">
                  {stats.completedModules} / 16
                </span>
              </div>

              {/* Learning Streak */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <Flame className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-200 block">Learning Streak</span>
                    <span className="text-[11px] text-amber-400/80">Active continuous pace</span>
                  </div>
                </div>
                <span className="text-lg font-black text-amber-400 font-mono">
                  {progress.streakDays || 1} Days
                </span>
              </div>

              {/* Active Learning Day */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Current Focus</span>
                    <span className="text-[11px] text-slate-400">Day {currentDay.dayNumber}: {currentDay.title}</span>
                  </div>
                </div>
                <span className="text-lg font-black text-cyan-400 font-mono">
                  D{currentDay.dayNumber.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">Track: {profile.targetRole}</span>
            <Link to="/modules" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              <span>All Modules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>
      </div>

      {/* Quick Access Roadmap Preview */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-400" />
              <span>16-Module Curriculum Journey</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Explore your roadmap progression across the 80 days of technology discovery.
            </p>
          </div>
          <Link to="/roadmap">
            <Button size="sm" variant="outline" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
              Full Roadmap
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {allModules.map(mod => {
            const modProgress = calculateModuleProgress(mod, progress);
            const isCur = mod.id === currentModule.id;

            return (
              <Link
                key={mod.id}
                to={`/module/${mod.id}`}
                className={`p-3.5 rounded-xl border text-center transition-all glass-panel-hover ${
                  modProgress.isCompleted
                    ? 'bg-[#09151e] border-emerald-500/40 text-emerald-300'
                    : isCur
                    ? 'bg-[#0e192f] border-cyan-500/60 shadow-md shadow-cyan-950/40'
                    : 'bg-[#0d1424]/70 border-slate-800/80 text-slate-400'
                }`}
              >
                <div className="text-[11px] font-mono font-bold mb-1">
                  M{mod.number.toString().padStart(2, '0')}
                </div>
                <div className="text-xs font-semibold text-white truncate mb-2">
                  {mod.title}
                </div>
                <ProgressBar
                  value={modProgress.percentage}
                  size="xs"
                  variant={modProgress.isCompleted ? 'emerald' : 'gradient'}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity Log & Projects Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card variant="glass" className="lg:col-span-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Latest Activity</span>
              </span>
            </div>

            <div className="space-y-3">
              {(progress.activityHistory || []).slice(0, 5).map(act => (
                <div
                  key={act.id}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-white truncate">{act.title}</span>
                    <span className="text-[10px] font-mono text-slate-500 shrink-0">
                      {new Date(act.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px] line-clamp-1">{act.description}</p>
                </div>
              ))}

              {(!progress.activityHistory || progress.activityHistory.length === 0) && (
                <p className="text-xs text-slate-500 py-4 text-center">
                  Your activity stream will record completed days and questionnaire answers.
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800">
            <Link to="/progress" className="text-xs text-cyan-400 font-semibold hover:text-cyan-300">
              View Complete Transcript →
            </Link>
          </div>
        </Card>

        {/* Featured Learning Tracks */}
        <Card variant="glass" className="lg:col-span-2 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Curriculum Tracks Overview</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Explore the 4 key stages of the ARCS technology discovery program.
                </p>
              </div>

              <Link to="/modules">
                <Button size="sm" variant="glow" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
                  View All Modules
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/module/module-01" className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold text-cyan-400">TRACK 01 (Days 1–20)</span>
                  <Badge variant="cyan" size="sm">AI Track</Badge>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">Artificial Intelligence</h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">Understand → Interact → Apply → Build</p>
              </Link>

              <Link to="/module/module-05" className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold text-purple-400">TRACK 02 (Days 21–40)</span>
                  <Badge variant="purple" size="sm">XR Track</Badge>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">Augmented & Virtual Reality</h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">Explore → Create → Apply → Build</p>
              </Link>

              <Link to="/module/module-09" className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold text-blue-400">TRACK 03 (Days 41–60)</span>
                  <Badge variant="blue" size="sm">IoT & Space</Badge>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">IoT + Satellite Technology</h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">Sense → Monitor → Observe → Combine</p>
              </Link>

              <Link to="/module/module-13" className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold text-emerald-400">TRACK 04 (Days 61–80)</span>
                  <Badge variant="emerald" size="sm">Robotics & ARCS</Badge>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">Robotics, Drones & Capstone</h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">Move → Fly → Build → Integrate</p>
              </Link>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/80 flex justify-between items-center text-xs text-slate-400">
            <span>Complete 80-Day Engineering Curriculum</span>
            <Link to="/roadmap" className="text-cyan-400 font-semibold hover:text-cyan-300 flex items-center gap-1">
              <span>View Interactive Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
