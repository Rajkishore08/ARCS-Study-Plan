import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 text-center max-w-md mx-auto space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono font-black text-2xl flex items-center justify-center mx-auto mb-2">
        404
      </div>
      <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
      <p className="text-xs md:text-sm text-slate-400">
        The route you are trying to access does not exist in the 80-day curriculum roadmap.
      </p>
      <div className="pt-4 flex justify-center gap-3">
        <Link to="/">
          <Button variant="glow" icon={<Home className="w-4 h-4" />}>
            Back to Dashboard
          </Button>
        </Link>
        <Link to="/roadmap">
          <Button variant="secondary" icon={<Compass className="w-4 h-4" />}>
            Roadmap
          </Button>
        </Link>
      </div>
    </div>
  );
};
