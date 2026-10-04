import React, { useState } from 'react';
import { allModules } from '../data/modules';
import { ModuleCard } from '../components/modules/ModuleCard';
import { useProgress } from '../context/ProgressContext';
import { Badge } from '../components/ui/Badge';
import { Search, Layers } from 'lucide-react';

export const Modules: React.FC = () => {
  const { progress, stats } = useProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'in_progress' | 'not_started'>('all');

  const categories = Array.from(new Set(allModules.map(m => m.category))).filter(Boolean);

  const filteredModules = allModules.filter(mod => {
    // 1. Text search
    const matchesSearch =
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.theme?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `module ${mod.number}`.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Category
    const matchesCategory = selectedCategory === 'all' || mod.category === selectedCategory;

    // 3. Status
    const completedDays = mod.days.filter(d => progress.completedDays[d.id]).length;
    const isCompleted = completedDays === mod.days.length && mod.days.length > 0;
    const isStarted = completedDays > 0;

    let matchesStatus = true;
    if (statusFilter === 'completed') matchesStatus = isCompleted;
    if (statusFilter === 'in_progress') matchesStatus = isStarted && !isCompleted;
    if (statusFilter === 'not_started') matchesStatus = !isStarted;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="cyan" icon={<Layers className="w-3.5 h-3.5" />}>
              Curriculum Catalog
            </Badge>
            <span className="text-xs font-mono text-slate-400">16 Modules • 80 Days</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            All Learning Modules
          </h1>
          <p className="text-sm md:text-base text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Browse through all technology modules, explore their 5-day structured workflows, and jump directly into any topic.
          </p>
        </div>

        {/* Quick status pill */}
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
          <div className="text-center px-2">
            <span className="text-slate-500 block text-[10px]">COMPLETED</span>
            <span className="font-bold text-emerald-400 text-base">{stats.completedModules} / 16</span>
          </div>
          <div className="w-px h-8 bg-slate-800" />
          <div className="text-center px-2">
            <span className="text-slate-500 block text-[10px]">TOTAL DAYS</span>
            <span className="font-bold text-cyan-400 text-base">{stats.completedDays} / 80</span>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search module title, category, or module number..."
              className="w-full bg-[#0c1220] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Status Filter */}
          <div className="flex bg-slate-900/90 rounded-xl p-1 border border-slate-800 shrink-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                statusFilter === 'all' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({allModules.length})
            </button>
            <button
              onClick={() => setStatusFilter('in_progress')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                statusFilter === 'in_progress' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                statusFilter === 'completed' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Categories
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Modules */}
      {filteredModules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredModules.map(mod => (
            <ModuleCard key={mod.id} module={mod} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl bg-slate-900/30 border border-dashed border-slate-800">
          <Layers className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white mb-1">No modules found</h3>
          <p className="text-xs text-slate-400">Try changing your search query or category filters.</p>
        </div>
      )}
    </div>
  );
};
