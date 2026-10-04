import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Layers, FolderGit2, Compass, ArrowRight } from 'lucide-react';
import { allModules } from '../../data/modules';
import { useProjects } from '../../context/ProjectContext';
import { resourceCategories } from '../../data/resources';
import { Badge } from '../ui/Badge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResultItem {
  id: string;
  type: 'module' | 'day' | 'project' | 'resource';
  title: string;
  subtitle: string;
  url: string;
  badge: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { projects } = useProjects();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search through all modules & days
  const results: SearchResultItem[] = [];

  if (trimmed) {
    // 1. Modules
    for (const mod of allModules) {
      if (
        mod.title.toLowerCase().includes(trimmed) ||
        mod.category.toLowerCase().includes(trimmed) ||
        mod.theme?.toLowerCase().includes(trimmed) ||
        mod.id.toLowerCase().includes(trimmed)
      ) {
        results.push({
          id: `mod-${mod.id}`,
          type: 'module',
          title: mod.title,
          subtitle: `${mod.category} • ${mod.daysRange}`,
          url: `/module/${mod.id}`,
          badge: 'Module',
        });
      }

      // 2. Days
      for (const day of mod.days) {
        if (
          day.title.toLowerCase().includes(trimmed) ||
          day.theme?.toLowerCase().includes(trimmed) ||
          day.objective?.toLowerCase().includes(trimmed) ||
          `day ${day.dayNumber}`.includes(trimmed)
        ) {
          results.push({
            id: `day-${day.id}`,
            type: 'day',
            title: `${mod.title} — ${day.title}`,
            subtitle: `Day ${day.dayNumber} of 80 • ${day.theme || 'Lesson'}`,
            url: `/module/${mod.id}/day/${day.id}`,
            badge: 'Day',
          });
        }
      }
    }
  }

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
    setQuery('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl bg-[#0d1424] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100 animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-5 h-5 text-cyan-400 shrink-0 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search modules, days (1-80), topics, projects, or tools..."
            className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white rounded-md cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1.5">
          {!trimmed && (
            <div className="py-8 text-center text-xs text-slate-500">
              <p>Type keywords like "Module 01", "Day 15", "Robotics", "AI", or "Projects"...</p>
            </div>
          )}

          {trimmed && results.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-sm font-semibold text-slate-300">No learning content matched your search</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for a module number, day number, or category.</p>
            </div>
          )}

          {results.slice(0, 10).map(item => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.url)}
              className="w-full text-left p-3 rounded-xl hover:bg-slate-800/80 transition-colors flex items-center justify-between gap-3 group cursor-pointer border border-transparent hover:border-slate-700/60"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40">
                  {item.type === 'module' && <Layers className="w-4 h-4" />}
                  {item.type === 'day' && <BookOpen className="w-4 h-4" />}
                  {item.type === 'project' && <FolderGit2 className="w-4 h-4" />}
                  {item.type === 'resource' && <Compass className="w-4 h-4" />}
                </div>
                <div className="min-w-0">
                  <h5 className="text-sm font-semibold text-white group-hover:text-cyan-300 truncate">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-400 truncate">{item.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Badge variant={item.type === 'day' ? 'cyan' : item.type === 'module' ? 'blue' : 'indigo'}>
                  {item.badge}
                </Badge>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
