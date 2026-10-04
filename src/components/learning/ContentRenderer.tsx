import React from 'react';
import { ContentSection, Day } from '../../types/learning';
import { LearningSection } from './LearningSection';
import { QuestionCard } from './QuestionCard';
import { PracticalTask } from './PracticalTask';
import { ExploreCard } from './ExploreCard';
import { ChallengeCard } from './ChallengeCard';
import { ChecklistCard } from './ChecklistCard';
import { ReflectionCard } from './ReflectionCard';
import { FileCode, Sparkles, BookOpen } from 'lucide-react';

interface ContentRendererProps {
  day: Day;
  moduleId: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ day, moduleId }) => {
  const sections = day.sections || [];

  if (sections.length === 0) {
    return (
      <div className="my-8 p-8 md:p-12 rounded-2xl border border-dashed border-slate-800 bg-[#090e1a]/60 text-center max-w-2xl mx-auto backdrop-blur-sm">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4">
          <BookOpen className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Module Content Ready for Insertion</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          This is <span className="text-cyan-400 font-semibold">{day.title}</span> ({day.theme || 'Self-Paced Learning'}).
          The content rendering pipeline is configured and ready. When the curriculum data is populated in{' '}
          <code className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 text-xs font-mono">
            src/data/modules/{moduleId.replace('-', '')}.ts
          </code>
          , explanations, code blocks, questionnaires, and tasks will render automatically.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-400">
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="text-cyan-400 font-semibold block mb-1">LEARN</span>
            <span>Concepts & Theory</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="text-blue-400 font-semibold block mb-1">EXPLORE</span>
            <span>Investigation & Demos</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="text-amber-400 font-semibold block mb-1">PRACTICE</span>
            <span>Hands-on Tasks</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <span className="text-emerald-400 font-semibold block mb-1">DOCUMENT</span>
            <span>Reflections & Logs</span>
          </div>
        </div>
      </div>
    );
  }

  let questionCounter = 0;

  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        const key = section.id || `sec-${day.id}-${index}`;

        switch (section.type) {
          case 'explore':
            return (
              <ExploreCard
                key={key}
                title={section.title}
                content={section.content}
                items={section.items}
              />
            );

          case 'challenge':
            return (
              <ChallengeCard
                key={key}
                title={section.title}
                content={section.content}
                items={section.items}
              />
            );

          case 'question':
            questionCounter++;
            return (
              <QuestionCard
                key={key}
                dayId={day.id}
                question={
                  section.question || {
                    id: `q-${day.id}-${questionCounter}`,
                    prompt: section.content || section.title || '',
                    exploreHint: section.subtitle,
                  }
                }
                index={questionCounter}
              />
            );

          case 'practical':
          case 'activity':
          case 'documentation':
            return (
              <PracticalTask
                key={key}
                dayId={day.id}
                moduleId={moduleId}
                practical={section.practical}
                title={section.title}
              />
            );

          case 'checklist':
            return (
              <ChecklistCard
                key={key}
                dayId={day.id}
                items={section.checklist || []}
                title={section.title}
              />
            );

          case 'reflection':
            return (
              <ReflectionCard
                key={key}
                dayId={day.id}
                title={section.title}
                content={section.content}
                prompt={section.subtitle}
              />
            );

          default:
            return <LearningSection key={key} section={section} />;
        }
      })}
    </div>
  );
};
