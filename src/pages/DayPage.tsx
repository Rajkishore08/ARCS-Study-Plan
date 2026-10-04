import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { modulesById } from '../data/modules';
import { useProgress } from '../context/ProgressContext';
import { DayHeader } from '../components/learning/DayHeader';
import { DayNavigation } from '../components/learning/DayNavigation';
import { ContentRenderer } from '../components/learning/ContentRenderer';
import { ModuleCompleteSummary } from '../components/learning/ModuleCompleteSummary';
import { ProgramCompleteCelebration } from '../components/learning/ProgramCompleteCelebration';
import { calculateModuleProgress } from '../utils/progress';
import { Button } from '../components/ui/Button';

export const DayPage: React.FC = () => {
  const { moduleId, dayId } = useParams<{ moduleId: string; dayId: string }>();
  const { progress, setLastVisited, stats } = useProgress();

  const module = moduleId ? modulesById[moduleId] : null;
  const day = module && dayId ? module.days.find(d => d.id === dayId) : null;

  useEffect(() => {
    if (moduleId && dayId) {
      setLastVisited(moduleId, dayId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [moduleId, dayId, setLastVisited]);

  if (!module || !day) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Day Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">
          The requested learning day could not be located in this curriculum.
        </p>
        <Link to="/roadmap">
          <Button variant="glow">Return to Roadmap</Button>
        </Link>
      </div>
    );
  }

  const modProgress = calculateModuleProgress(module, progress);
  const isModuleComplete = modProgress.isCompleted;
  const isProgramComplete = stats.percentage === 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Day Learning Header */}
      <DayHeader module={module} day={day} />

      {/* Dynamic Content Renderer */}
      <ContentRenderer day={day} moduleId={module.id} />

      {/* Navigation, Mark Complete, and Pagination */}
      <DayNavigation module={module} day={day} />

      {/* Module Complete Banner if all 5 days in this module are finished */}
      {isModuleComplete && <ModuleCompleteSummary module={module} />}

      {/* Final 80-Day Program Milestone Celebration if 80/80 completed */}
      {isProgramComplete && <ProgramCompleteCelebration />}
    </div>
  );
};
