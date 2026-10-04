import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useProgress } from '../../context/ProgressContext';
import { useProjects } from '../../context/ProjectContext';
import {
  User,
  Download,
  Upload,
  RotateCcw,
  Sparkles,
  Flame,
  CheckCircle2,
  Calendar,
  Layers,
  Save,
  Check,
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const {
    profile,
    progress,
    stats,
    updateProfile,
    resetAllProgress,
    exportData,
    importData,
  } = useProgress();
  const { projects } = useProjects();

  const [name, setName] = useState(profile.name);
  const [targetRole, setTargetRole] = useState(profile.targetRole);
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'data'>('profile');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, targetRole });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleExport = () => {
    const jsonStr = exportData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `arcs-progress-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSubmit = () => {
    if (!importText.trim()) return;
    const success = importData(importText);
    if (success) {
      setImportStatus('Progress imported successfully!');
      setImportText('');
      setTimeout(() => setImportStatus(null), 3000);
    } else {
      setImportStatus('Invalid JSON data. Please check format.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="2xl"
      title="Student Profile & Learning Settings"
      description="Manage your learning identity, progress backups, and self-paced preferences."
    >
      <div className="space-y-6">
        {/* Tab Selector */}
        <div className="flex bg-slate-900/90 rounded-xl p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Profile & Stats
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'data'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Backup & Data Management
          </button>
        </div>

        {activeTab === 'profile' ? (
          <div className="space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">
                  Roadmap
                </span>
                <span className="text-xl font-bold text-cyan-400">{stats.completedDays} / 80</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Days Done</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">
                  Modules
                </span>
                <span className="text-xl font-bold text-blue-400">{stats.completedModules} / 16</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Mastered</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">
                  Streak
                </span>
                <span className="text-xl font-bold text-amber-400 flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 fill-amber-400" />
                  {progress.streakDays || 1}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Days Active</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">
                  Projects
                </span>
                <span className="text-xl font-bold text-emerald-400">{projects.length}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Built</span>
              </div>
            </div>

            {/* Profile Form */}
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Student Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Target Track / Focus Area
                </label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={e => setTargetRole(e.target.value)}
                  placeholder="e.g. AI Engineer, Robotics Developer, Full Stack Spatial Dev"
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  size="sm"
                  variant={isSaved ? 'glow' : 'primary'}
                  icon={isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                >
                  {isSaved ? 'Profile Updated' : 'Save Profile'}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Export */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">Export Learning Data</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Download a complete JSON snapshot of your completed days, answers, practical logs, and streak.
                </p>
              </div>
              <Button size="sm" variant="secondary" onClick={handleExport} icon={<Download className="w-4 h-4" />}>
                Export JSON
              </Button>
            </div>

            {/* Import */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div>
                <h4 className="text-sm font-bold text-white">Import Progress Data</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Paste previously exported JSON data to restore your progress onto another device.
                </p>
              </div>
              <textarea
                rows={3}
                value={importText}
                onChange={e => setImportText(e.target.value)}
                placeholder='Paste JSON here: {"progress": {...}}'
                className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {importStatus && (
                <p
                  className={`text-xs font-medium ${
                    importStatus.includes('success') ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {importStatus}
                </p>
              )}
              <div className="flex justify-end">
                <Button size="sm" variant="secondary" onClick={handleImportSubmit} icon={<Upload className="w-4 h-4" />}>
                  Restore Progress
                </Button>
              </div>
            </div>

            {/* Reset */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-rose-300">Reset Local Progress</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Clear all local progress, answers, and streak state on this device.
                </p>
              </div>
              <Button
                size="sm"
                variant="danger"
                onClick={() => {
                  if (confirm('Are you sure you want to reset all progress? This cannot be undone unless you exported a backup.')) {
                    resetAllProgress();
                    onClose();
                  }
                }}
                icon={<RotateCcw className="w-4 h-4" />}
              >
                Reset Progress
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
