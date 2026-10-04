import React, { useState } from 'react';
import { BookOpen, Sparkles, MessageSquare } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { useProgress } from '../../context/ProgressContext';
import { Button } from '../ui/Button';

interface ReflectionCardProps {
  dayId: string;
  title?: string;
  content?: string;
  prompt?: string;
}

export const ReflectionCard: React.FC<ReflectionCardProps> = ({
  dayId,
  title = 'Student Reflection & Synthesis',
  content,
  prompt,
}) => {
  const { progress, saveDayNote } = useProgress();
  const savedNote = progress.dayNotes?.[dayId] || '';
  const [note, setNote] = useState(savedNote);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    saveDayNote(dayId, note);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-purple-500/30 bg-[#140f24]/70 p-5 md:p-6 backdrop-blur-sm shadow-xl">
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="purple" icon={<BookOpen className="w-3.5 h-3.5" />}>
          Reflection
        </Badge>
        <span className="text-xs text-purple-300/80 font-medium flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Synthesis & Notes
        </span>
      </div>

      <h4 className="text-base md:text-lg font-bold text-white mb-2">{title}</h4>

      {content && <p className="text-slate-300 text-sm leading-relaxed mb-3">{content}</p>}

      {prompt && (
        <div className="p-3.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-xs md:text-sm text-purple-200 mb-4 flex items-start gap-2.5">
          <MessageSquare className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <p>{prompt}</p>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Your Journal / Notes:
        </label>
        <textarea
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="Jot down concepts you want to remember, ideas for your projects, or questions..."
          rows={3}
          className="w-full bg-[#080612] border border-purple-900/50 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="mt-3 flex justify-end">
          <Button size="sm" variant="secondary" onClick={handleSave}>
            {isSaved ? 'Note Saved!' : 'Save Reflection'}
          </Button>
        </div>
      </div>
    </div>
  );
};
