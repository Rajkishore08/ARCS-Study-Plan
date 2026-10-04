import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Terminal, BookOpen, Layers, FolderGit2, Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#060a12] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-8 px-2 rounded-xl bg-white/95 flex items-center justify-center border border-slate-700 shadow-md">
                <img src="/logo.png" alt="ARCS Logo" className="h-5 w-auto object-contain" />
              </div>
              <span className="font-bold text-white tracking-wider text-base">
                ARCS <span className="text-cyan-400 font-mono text-xs">80-DAY</span> PLATFORM
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              A self-paced engineering & technology discovery program spanning 16 comprehensive modules across AI, Spatial Computing, Embedded IoT, Robotics, Drones, and Hardware Fabrication.
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              Self-Paced • Project-First • Experimental • Engineering Focused
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-3">
              Program Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/roadmap" className="hover:text-cyan-400 transition-colors">
                  80-Day Visual Roadmap
                </Link>
              </li>
              <li>
                <Link to="/modules" className="hover:text-cyan-400 transition-colors">
                  All 16 Modules Catalog
                </Link>
              </li>
              <li>
                <Link to="/progress" className="hover:text-cyan-400 transition-colors">
                  Progress & Activity Logs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Curriculum
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Info */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/module/module-01/day/day-01" className="hover:text-cyan-400 transition-colors">
                  Start Day 01: AI Fundamentals
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  Program Vision & Structure
                </Link>
              </li>
              <li>
                <a
                  href="#top"
                  onClick={e => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Back to Top ↑
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ARCS Technology Program. Designed for independent student learning.</p>
          <p className="flex items-center gap-1">
            Built for future technology builders & researchers
          </p>
        </div>
      </div>
    </footer>
  );
};
