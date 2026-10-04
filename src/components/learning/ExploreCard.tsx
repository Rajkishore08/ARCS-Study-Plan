import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ExploreCardProps {
  title?: string;
  content?: string;
  items?: string[];
}

export const ExploreCard: React.FC<ExploreCardProps> = ({
  title = 'Deep Exploration',
  content,
  items,
}) => {
  return (
    <div className="my-6 rounded-xl border border-cyan-500/30 bg-[#081326]/70 p-5 md:p-6 relative overflow-hidden backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="cyan" icon={<Compass className="w-3.5 h-3.5" />}>
          Explore
        </Badge>
        <span className="text-xs text-cyan-400/80 font-medium flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Hands-on Investigation
        </span>
      </div>

      <h4 className="text-base md:text-lg font-bold text-white mb-2">{title}</h4>

      {content && <p className="text-slate-200 text-sm leading-relaxed mb-3">{content}</p>}

      {items && items.length > 0 && (
        <ul className="space-y-2 mt-3">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-900/30"
            >
              <span className="text-cyan-400 font-bold">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
