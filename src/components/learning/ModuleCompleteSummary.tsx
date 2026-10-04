import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, CheckCircle, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { Module } from '../../types/learning';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { allModules } from '../../data/modules';

interface ModuleCompleteSummaryProps {
  module: Module;
}

export const ModuleCompleteSummary: React.FC<ModuleCompleteSummaryProps> = ({ module }) => {
  const currentIdx = allModules.findIndex(m => m.id === module.id);
  const nextModule = currentIdx < allModules.length - 1 ? allModules[currentIdx + 1] : null;

  return (
    <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-[#0a1428] via-[#0d1c38] to-[#0a1428] border border-cyan-500/40 shadow-2xl relative overflow-hidden text-center">
      <div className="inline-flex p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 mb-4 shadow-lg shadow-cyan-500/20">
        <Trophy className="w-8 h-8" />
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <Badge variant="cyan">Milestone Achieved</Badge>
        <Badge variant="emerald">{module.days.length} / {module.days.length} Days Completed</Badge>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
        {module.title} Completed!
      </h2>

      <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
        You have worked through all {module.days.length} days of this module. Your practical logs and questionnaire answers are saved to your student profile.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link to={`/module/${module.id}`}>
          <Button variant="secondary" size="md" icon={<BookOpen className="w-4 h-4" />}>
            Review Module Overview
          </Button>
        </Link>

        {nextModule ? (
          <Link to={`/module/${nextModule.id}/day/${nextModule.days[0].id}`}>
            <Button
              variant="glow"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Continue to {nextModule.title}
            </Button>
          </Link>
        ) : (
          <Link to="/roadmap">
            <Button variant="glow" size="md" icon={<CheckCircle className="w-4 h-4" />}>
              View Complete 80-Day Program Summary
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
