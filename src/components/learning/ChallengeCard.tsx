import React from 'react';
import { Zap, Award } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ChallengeCardProps {
  title?: string;
  content?: string;
  items?: string[];
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title = 'Level-Up Challenge',
  content,
  items,
}) => {
  return (
    <div className="my-6 rounded-xl border border-amber-500/30 bg-[#171207]/70 p-5 md:p-6 relative overflow-hidden backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="amber" icon={<Zap className="w-3.5 h-3.5" />}>
          Challenge
        </Badge>
        <span className="text-xs text-amber-400/80 font-medium flex items-center gap-1">
          <Award className="w-3 h-3" /> Extension Activity
        </span>
      </div>

      <h4 className="text-base md:text-lg font-bold text-amber-100 mb-2">{title}</h4>

      {content && <p className="text-slate-200 text-sm leading-relaxed mb-3">{content}</p>}

      {items && items.length > 0 && (
        <ul className="space-y-2 mt-3">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 p-2.5 rounded-lg bg-amber-950/20 border border-amber-900/30"
            >
              <span className="text-amber-400 font-bold">★</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
