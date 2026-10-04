import React from 'react';
import { CheckSquare, Check, Sparkles } from 'lucide-react';
import { ChecklistItem } from '../../types/learning';
import { useProgress } from '../../context/ProgressContext';
import { Badge } from '../ui/Badge';

interface ChecklistCardProps {
  dayId: string;
  items: ChecklistItem[];
  title?: string;
}

export const ChecklistCard: React.FC<ChecklistCardProps> = ({
  dayId,
  items,
  title = 'Self-Check & Validation Criteria',
}) => {
  const { progress, toggleChecklistItem } = useProgress();
  const currentDayChecklist = progress.checklistState?.[dayId] || {};

  const checkedCount = items.filter(item => currentDayChecklist[item.id]).length;
  const isAllChecked = items.length > 0 && checkedCount === items.length;

  return (
    <div className="my-6 rounded-xl border border-slate-800 bg-[#0d1424] p-5 md:p-6 shadow-lg">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Badge variant="indigo" icon={<CheckSquare className="w-3.5 h-3.5" />}>
            Checklist
          </Badge>
          <span className="text-xs text-slate-400">
            {checkedCount} / {items.length} completed
          </span>
        </div>
        {isAllChecked && (
          <Badge variant="emerald" icon={<Sparkles className="w-3 h-3" />}>
            All Done!
          </Badge>
        )}
      </div>

      <h4 className="text-base font-bold text-white mb-3">{title}</h4>

      <div className="space-y-2">
        {items.map(item => {
          const isChecked = Boolean(currentDayChecklist[item.id]);
          return (
            <button
              key={item.id}
              onClick={() => toggleChecklistItem(dayId, item.id)}
              className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 cursor-pointer ${
                isChecked
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  isChecked
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'border border-slate-600 bg-slate-800'
                }`}
              >
                {isChecked && <Check className="w-3.5 h-3.5" />}
              </div>
              <div>
                <p className={`text-sm ${isChecked ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                  {item.label}
                </p>
                {item.hint && <p className="text-xs text-slate-500 mt-0.5">{item.hint}</p>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
