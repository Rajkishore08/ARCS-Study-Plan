import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Compass,
  Layers,
  FolderGit2,
  BookOpen,
  BarChart3,
  Info,
  Search,
  Flame,
  User,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { SearchModal } from './SearchModal';
import { ProfileModal } from './ProfileModal';

interface NavbarProps {
  onToggleSidebar?: () => void;
  showSidebarToggle?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, showSidebarToggle = false }) => {
  const { stats, progress, profile } = useProgress();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Roadmap', to: '/roadmap', icon: Compass },
    { name: 'Modules', to: '/modules', icon: Layers },
    { name: 'Progress', to: '/progress', icon: BarChart3 },
    { name: 'About', to: '/about', icon: Info },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Left: Brand Logo & Optional Sidebar Toggle */}
            <div className="flex items-center gap-3">
              {showSidebarToggle && (
                <button
                  onClick={onToggleSidebar}
                  className="hidden lg:flex p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors cursor-pointer"
                  title="Toggle Curriculum Sidebar"
                >
                  <Menu className="w-4 h-4" />
                </button>
              )}

              <Link to="/" className="flex items-center gap-3 group">
                <div className="h-9 px-2 rounded-xl bg-white/95 flex items-center justify-center shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform border border-slate-700">
                  <img src="/logo.png" alt="ARCS Logo" className="h-6 w-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-white tracking-wider text-base leading-tight group-hover:text-cyan-300 transition-colors">
                    ARCS <span className="text-cyan-400 font-mono text-xs">80</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                    Tech Discovery
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      }`
                    }
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Tools & Student Profile */}
            <div className="flex items-center gap-2.5">
              {/* Quick Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 text-slate-400 hover:text-slate-200 transition-all text-xs cursor-pointer shadow-inner"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden lg:inline">Search...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
                  ⌘K
                </kbd>
              </button>

              {/* Learning Streak Pill */}
              <div
                title={`${progress.streakDays || 1} day active learning streak`}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-300 text-xs font-mono font-semibold"
              >
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{progress.streakDays || 1}d</span>
              </div>

              {/* Progress Mini Pill */}
              <Link
                to="/progress"
                className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors text-xs text-slate-300"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono font-semibold text-cyan-300">
                  {stats.completedDays}/80
                </span>
                <span className="text-slate-500 text-[10px]">Days</span>
              </Link>

              {/* Profile Avatar Button */}
              <button
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-200 transition-all cursor-pointer"
                title="Student Profile & Settings"
              >
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 text-xs font-bold">
                  {profile.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden xl:inline text-xs font-medium text-slate-300 max-w-[100px] truncate">
                  {profile.name}
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0a0f1d] px-4 pt-3 pb-5 space-y-1 animate-in slide-in-from-top-2 duration-150">
            {navLinks.map(link => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Streak: {progress.streakDays || 1} Days</span>
              </div>
              <div className="text-xs font-mono text-cyan-400 font-semibold">
                Progress: {stats.completedDays} / 80 Days ({stats.percentage}%)
              </div>
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};
