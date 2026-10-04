import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Sparkles, FolderGit2, CheckCircle2, ArrowRight, Share2, Layers } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useProgress } from '../../context/ProgressContext';
import { useProjects } from '../../context/ProjectContext';

export const ProgramCompleteCelebration: React.FC = () => {
  const { stats, profile } = useProgress();
  const { projects } = useProjects();

  return (
    <div className="my-10 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0b1730] via-[#091a3c] to-[#081224] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.25)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 mb-6 shadow-xl shadow-cyan-500/30">
          <Award className="w-12 h-12" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-3">
          <Badge variant="cyan" size="md" icon={<Sparkles className="w-4 h-4" />}>
            Mastery Achieved
          </Badge>
          <Badge variant="emerald" size="md">
            80 / 80 Days Completed
          </Badge>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          ARCS 80-Day Program Completed!
        </h1>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Congratulations, <span className="text-cyan-300 font-semibold">{profile.name}</span>! You have navigated the entire 80-day technology roadmap across 16 comprehensive modules, building prototypes, answering technical inquiries, and maintaining your engineering logs.
        </p>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-left">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
              Days Completed
            </span>
            <span className="text-2xl md:text-3xl font-black text-cyan-400">80 / 80</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
              Modules Mastered
            </span>
            <span className="text-2xl md:text-3xl font-black text-blue-400">16 / 16</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
              Portfolio Projects
            </span>
            <span className="text-2xl md:text-3xl font-black text-indigo-400">{projects.length}</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
              Curriculum Pace
            </span>
            <span className="text-2xl md:text-3xl font-black text-emerald-400">100%</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/projects">
            <Button size="lg" variant="glow" icon={<FolderGit2 className="w-5 h-5" />}>
              Review Student Project Portfolio
            </Button>
          </Link>

          <Link to="/progress">
            <Button size="lg" variant="secondary" icon={<Layers className="w-5 h-5" />}>
              View Full Learning Transcript
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
