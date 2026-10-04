import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { Module, Day } from '../../types/learning';
import { useProgress } from '../../context/ProgressContext';
import { getNextDay, getPreviousDay } from '../../data/modules';
import { Button } from '../ui/Button';

interface DayNavigationProps {
  module: Module;
  day: Day;
}

export const DayNavigation: React.FC<DayNavigationProps> = ({ module, day }) => {
  const navigate = useNavigate();
  const { progress, markDayComplete, toggleDayCompletion } = useProgress();
  const [showCelebration, setShowCelebration] = useState(false);

  const isCompleted = Boolean(progress.completedDays[day.id]);
  const next = getNextDay(module.id, day.id);
  const prev = getPreviousDay(module.id, day.id);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#22d3ee', '#38bdf8', '#818cf8', '#10b981', '#fbbf24'],
    });
  };

  const handleMarkComplete = () => {
    if (!isCompleted) {
      markDayComplete(day.id, module.id, day.title);
      triggerConfetti();
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 4000);
    } else {
      toggleDayCompletion(day.id, module.id, day.title);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-slate-800/90 space-y-6">
      {/* Day Completion Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0d1627] via-[#0f1d38] to-[#0d1627] border border-cyan-500/30 shadow-xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative z-10">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Self-Paced Checkpoint
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white">
            {isCompleted ? 'Day Finished! Great work on this milestone.' : 'Have you completed this day?'}
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-lg">
            {isCompleted
              ? 'You can always revisit these concepts or update your documentation logs at any time.'
              : 'Marking this day complete updates your 80-day roadmap progress and learning streak.'}
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <Button
            size="lg"
            variant={isCompleted ? 'secondary' : 'glow'}
            onClick={handleMarkComplete}
            icon={isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Sparkles className="w-5 h-5" />}
          >
            {isCompleted ? 'Completed ✓ (Click to Undo)' : 'Mark Day Complete'}
          </Button>

          {next && (
            <Button
              size="lg"
              variant="primary"
              onClick={() => {
                if (!isCompleted) {
                  markDayComplete(day.id, module.id, day.title);
                  triggerConfetti();
                }
                navigate(`/module/${next.module.id}/day/${next.day.id}`);
              }}
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Continue to {next.day.title}
            </Button>
          )}
        </div>
      </div>

      {/* Pagination Navigation */}
      <div className="flex items-center justify-between gap-4">
        {prev ? (
          <Link
            to={`/module/${prev.module.id}/day/${prev.day.id}`}
            className="group flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/60 transition-all text-left max-w-xs"
          >
            <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                {prev.isPrevModule ? `Prev Module: ${prev.module.title}` : 'Previous Day'}
              </span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 truncate block transition-colors">
                {prev.day.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            to={`/module/${next.module.id}/day/${next.day.id}`}
            className="group flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all text-right max-w-xs ml-auto"
          >
            <div className="overflow-hidden">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                {next.isNextModule ? `Next Module: ${next.module.title}` : 'Next Day'}
              </span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 truncate block transition-colors">
                {next.day.title}
              </span>
            </div>
            <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-950/40 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          <Link
            to="/roadmap"
            className="group flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-950/60 transition-all text-right ml-auto"
          >
            <div className="overflow-hidden">
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                Program Milestone
              </span>
              <span className="text-sm font-semibold text-emerald-200">
                View 80-Day Completion
              </span>
            </div>
            <div className="p-2 rounded-lg bg-emerald-500 text-slate-950 font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
