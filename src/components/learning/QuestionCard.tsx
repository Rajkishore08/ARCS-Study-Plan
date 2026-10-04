import React, { useState, useEffect } from 'react';
import { HelpCircle, Compass, Zap, Save, CheckCircle2 } from 'lucide-react';
import { QuestionDetail } from '../../types/learning';
import { useProgress } from '../../context/ProgressContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface QuestionCardProps {
  dayId: string;
  question: QuestionDetail;
  index?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ dayId, question, index = 1 }) => {
  const { progress, saveQuestionAnswer } = useProgress();
  const savedAnswer = progress.dayAnswers?.[dayId]?.[question.id] || '';
  const [answer, setAnswer] = useState(savedAnswer);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setAnswer(progress.dayAnswers?.[dayId]?.[question.id] || '');
  }, [dayId, question.id, progress.dayAnswers]);

  const handleSave = () => {
    saveQuestionAnswer(dayId, question.id, answer);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const hasAnswered = Boolean(savedAnswer.trim());

  return (
    <div className="my-6 rounded-xl border border-slate-800 bg-[#0c1220]/90 p-5 md:p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Badge variant="blue" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            Question {index}
          </Badge>
          {hasAnswered && (
            <Badge variant="emerald" icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
              Answered
            </Badge>
          )}
        </div>
        <span className="text-xs text-slate-500 font-mono">ID: {question.id}</span>
      </div>

      {/* Question Prompt */}
      <div className="mb-5">
        <h4 className="text-base md:text-lg font-semibold text-white leading-relaxed">
          {question.prompt || 'Question prompt will be loaded here.'}
        </h4>
      </div>

      {/* Explore Section */}
      {question.exploreHint && (
        <div className="mb-4 p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-800/30 text-sm text-cyan-200">
          <div className="flex items-center gap-2 font-semibold text-cyan-300 text-xs uppercase tracking-wider mb-1.5">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Explore</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{question.exploreHint}</p>
        </div>
      )}

      {/* Challenge Section */}
      {question.challengeHint && (
        <div className="mb-5 p-3.5 rounded-lg bg-amber-950/20 border border-amber-800/30 text-sm text-amber-200">
          <div className="flex items-center gap-2 font-semibold text-amber-300 text-xs uppercase tracking-wider mb-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Challenge</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-xs md:text-sm">{question.challengeHint}</p>
        </div>
      )}

      {/* Options if Multiple Choice */}
      {question.options && question.options.length > 0 && (
        <div className="mb-4 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Select an option:</p>
          <div className="space-y-1.5">
            {question.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setAnswer(opt)}
                className={`w-full text-left p-3 rounded-lg border text-sm transition-all cursor-pointer ${
                  answer === opt
                    ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200 font-medium'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="inline-block w-5 font-mono text-slate-500">{String.fromCharCode(65 + i)}.</span> {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Student Answer Text Area */}
      <div className="mt-4">
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Your Answer & Observations:
        </label>
        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          placeholder="Type your reflection, answer, findings, or code snippets here..."
          rows={3}
          className="w-full bg-[#070b14] border border-slate-700/80 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
        />

        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            {hasAnswered ? 'Saved locally on this device' : 'Record your thoughts to track your understanding'}
          </p>
          <Button
            size="sm"
            variant={isSaved ? 'glow' : 'secondary'}
            onClick={handleSave}
            icon={isSaved ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          >
            {isSaved ? 'Saved!' : 'Save Answer'}
          </Button>
        </div>
      </div>
    </div>
  );
};
