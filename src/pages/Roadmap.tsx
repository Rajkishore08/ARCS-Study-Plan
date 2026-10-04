import React from 'react';
import { RoadmapTimeline } from '../components/roadmap/RoadmapTimeline';
import { Badge } from '../components/ui/Badge';
import { Compass } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="cyan" icon={<Compass className="w-3.5 h-3.5" />}>
            Interactive Journey
          </Badge>
          <span className="text-xs font-mono text-slate-400">16 Milestones • 80 Days</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
          ARCS 80-Day Technology Roadmap
        </h1>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-3xl leading-relaxed">
          Navigate the complete self-paced technology curriculum. Every milestone unlocks new concepts, interactive inquiries, and engineering challenges.
        </p>
      </div>

      {/* Interactive Roadmap Timeline */}
      <RoadmapTimeline />
    </div>
  );
};
