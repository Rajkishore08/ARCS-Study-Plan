import React, { useState, useEffect } from 'react';
import {
  Wrench,
  Target,
  Package,
  ListOrdered,
  CheckCircle,
  Zap,
  FileText,
  Save,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
} from 'lucide-react';
import { PracticalTaskDetail } from '../../types/learning';
import { useProgress } from '../../context/ProgressContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface PracticalTaskProps {
  dayId: string;
  moduleId: string;
  practical?: PracticalTaskDetail;
  title?: string;
}

export const PracticalTask: React.FC<PracticalTaskProps> = ({
  dayId,
  practical,
  title = 'Practical Hands-On Task',
}) => {
  const { progress, savePracticalDoc } = useProgress();
  const savedDoc = progress.dayPracticalDocs?.[dayId] || {
    whatIBuilt: '',
    whatITested: '',
    whatHappened: '',
    whatWentWrong: '',
    whatIChanged: '',
    whatILearned: '',
    repoOrDemoLink: '',
    updatedAt: '',
  };

  const [doc, setDoc] = useState(savedDoc);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'instructions' | 'documentation'>('instructions');

  useEffect(() => {
    if (progress.dayPracticalDocs?.[dayId]) {
      setDoc(progress.dayPracticalDocs[dayId]);
    }
  }, [dayId, progress.dayPracticalDocs]);

  const handleDocChange = (field: keyof typeof doc, value: string) => {
    setDoc(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    savePracticalDoc(dayId, doc);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const hasLoggedDocs = Boolean(
    doc.whatIBuilt.trim() || doc.whatILearned.trim() || doc.whatHappened.trim()
  );

  return (
    <div className="my-8 rounded-2xl border border-cyan-500/30 bg-[#0b101d] overflow-hidden shadow-2xl relative">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-cyan-950/80 via-blue-950/60 to-slate-900 p-5 md:p-6 border-b border-cyan-500/20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="cyan">Practical Task</Badge>
                {hasLoggedDocs && (
                  <Badge variant="emerald" icon={<CheckCircle2 className="w-3 h-3" />}>
                    Documented
                  </Badge>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mt-1">{title}</h3>
            </div>
          </div>

          {/* Toggle Tabs */}
          <div className="flex bg-slate-900/90 rounded-lg p-1 border border-slate-800">
            <button
              onClick={() => setActiveTab('instructions')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'instructions'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Task Blueprint
            </button>
            <button
              onClick={() => setActiveTab('documentation')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'documentation'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>My Documentation</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-7">
        {activeTab === 'instructions' ? (
          <div className="space-y-6">
            {/* Objective */}
            {practical?.objective && (
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4" />
                  <span>Task Objective</span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{practical.objective}</p>
              </div>
            )}

            {/* What You Need */}
            {practical?.materials && practical.materials.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold uppercase tracking-wider mb-3">
                  <Package className="w-4 h-4 text-indigo-400" />
                  <span>What You Need / Prerequisites</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {practical.materials.map((mat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs md:text-sm text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps */}
            {practical?.steps && practical.steps.length > 0 && (
              <div>
                <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold uppercase tracking-wider mb-3">
                  <ListOrdered className="w-4 h-4 text-blue-400" />
                  <span>Implementation Steps</span>
                </div>
                <div className="space-y-3">
                  {practical.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/90 text-sm"
                    >
                      <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-slate-200 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Expected Output */}
            {practical?.expectedOutput && (
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Expected Output & Verification</span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{practical.expectedOutput}</p>
              </div>
            )}

            {/* Challenge */}
            {practical?.challenge && (
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/30">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Zap className="w-4 h-4" />
                  <span>Bonus Challenge</span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{practical.challenge}</p>
              </div>
            )}

            {/* Switch to documentation prompt */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-400">
                Ready to document your implementation, findings, and experiments?
              </p>
              <Button
                size="sm"
                variant="glow"
                onClick={() => setActiveTab('documentation')}
                icon={<FileText className="w-4 h-4" />}
              >
                Open Documentation Workspace
              </Button>
            </div>
          </div>
        ) : (
          /* Student Documentation Form */
          <div className="space-y-5">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-200">Self-Paced Engineering Log</p>
                <p className="text-slate-400 mt-0.5">
                  Record your engineering notes, observations, and debugging steps. These entries are automatically saved to your browser and contribute to your portfolio.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  1. What I Built:
                </label>
                <textarea
                  value={doc.whatIBuilt}
                  onChange={e => handleDocChange('whatIBuilt', e.target.value)}
                  placeholder="Describe your prototype, hardware setup, or software implementation..."
                  rows={3}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  2. What I Tested:
                </label>
                <textarea
                  value={doc.whatITested}
                  onChange={e => handleDocChange('whatITested', e.target.value)}
                  placeholder="What inputs, edge cases, or test routines did you execute?"
                  rows={3}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  3. What Happened:
                </label>
                <textarea
                  value={doc.whatHappened}
                  onChange={e => handleDocChange('whatHappened', e.target.value)}
                  placeholder="Actual outcome, serial output, or sensor response observed..."
                  rows={3}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-rose-300 uppercase tracking-wider mb-1.5">
                  4. What Went Wrong (Bugs / Errors):
                </label>
                <textarea
                  value={doc.whatWentWrong}
                  onChange={e => handleDocChange('whatWentWrong', e.target.value)}
                  placeholder="Errors encountered, syntax bugs, wiring mistakes, or unexpected delays..."
                  rows={3}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                  5. What I Changed (Fixes / Iterations):
                </label>
                <textarea
                  value={doc.whatIChanged}
                  onChange={e => handleDocChange('whatIChanged', e.target.value)}
                  placeholder="How did you resolve the issues? What configuration or code was tuned?"
                  rows={3}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5">
                  6. What I Learned:
                </label>
                <textarea
                  value={doc.whatILearned}
                  onChange={e => handleDocChange('whatILearned', e.target.value)}
                  placeholder="Key engineering takeaways, mental models, and principles mastered..."
                  rows={3}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Repository / Live Demo / Simulator Link (Optional):
              </label>
              <div className="flex items-center gap-2 bg-[#070b14] border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100">
                <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
                <input
                  type="url"
                  value={doc.repoOrDemoLink || ''}
                  onChange={e => handleDocChange('repoOrDemoLink', e.target.value)}
                  placeholder="https://github.com/your-username/my-project"
                  className="w-full bg-transparent focus:outline-none text-slate-100 placeholder-slate-600 text-sm"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {doc.updatedAt
                  ? `Last updated: ${new Date(doc.updatedAt).toLocaleTimeString()}`
                  : 'Changes saved locally'}
              </span>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setActiveTab('instructions')}
                >
                  View Blueprint
                </Button>
                <Button
                  size="sm"
                  variant={isSaved ? 'glow' : 'primary'}
                  onClick={handleSave}
                  icon={isSaved ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
                >
                  {isSaved ? 'Documentation Saved!' : 'Save Documentation'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
