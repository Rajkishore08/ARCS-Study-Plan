import React, { useState } from 'react';
import { allModules } from '../../data/modules';
import { RoadmapMilestone } from './RoadmapMilestone';
import { useProgress } from '../../context/ProgressContext';
import { Filter, Layers, CheckCircle2, Compass, Sparkles, Trophy } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const RoadmapTimeline: React.FC = () => {
  const { stats } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = Array.from(new Set(allModules.map(m => m.category))).filter(Boolean);

  const filteredModules =
    selectedCategory === 'all'
      ? allModules
      : allModules.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Top Progression Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#0f1d38] to-[#0c1322] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
              Curriculum Architecture
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              80-Day Engineering & Technology Progression
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
              Step from core foundations through deep exploration, hands-on tasks, mini projects, to complete capstone systems.
            </p>
          </div>

          <div className="w-full md:w-64 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
              <span>Overall Roadmap Completion</span>
              <span className="text-cyan-400 font-bold">{stats.percentage}%</span>
            </div>
            <ProgressBar value={stats.percentage} size="md" variant="gradient" />
            <div className="flex justify-between items-center text-[11px] text-slate-500 mt-2 font-mono">
              <span>{stats.completedDays} / 80 Days</span>
              <span>{stats.completedModules} / 16 Modules</span>
            </div>
          </div>
        </div>

        {/* Progression Stage Badges */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Stage 1</span>
            <span className="font-semibold text-cyan-300">Fundamentals</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Stage 2</span>
            <span className="font-semibold text-blue-300">Exploration</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Stage 3</span>
            <span className="font-semibold text-purple-300">Practical Tasks</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Stage 4</span>
            <span className="font-semibold text-amber-300">Mini Projects</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 col-span-2 sm:col-span-1">
            <span className="text-[10px] text-slate-500 block uppercase font-mono">Stage 5</span>
            <span className="font-semibold text-emerald-300">Integrated Capstone</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <span className="text-xs text-slate-400 flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>Category Filter:</span>
        </span>
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          All 16 Modules ({allModules.length})
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vertical Milestones Timeline */}
      <div className="relative pl-2 md:pl-6">
        {filteredModules.map((module, index) => (
          <RoadmapMilestone
            key={module.id}
            module={module}
            index={index}
            isLast={index === filteredModules.length - 1}
          />
        ))}
      </div>

      {/* Bottom Motto Required by Spec 31 */}
      <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-cyan-950/20 to-slate-950 border border-slate-800 text-center">
        <p className="text-xs md:text-sm font-mono tracking-widest text-cyan-400 uppercase font-semibold">
          80 Days → 16 Modules → Learn → Explore → Build → Experiment → Document → Present
        </p>
        <p className="text-xs text-slate-500 mt-1">
          ARCS Self-Paced Technology Discovery & Engineering Program
        </p>
      </div>
    </div>
  );
};
