import React from 'react';
import { StudentProject } from '../../types/project';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  ExternalLink,
  GitBranch,
  Globe,
  Edit,
  Trash2,
  Calendar,
  Layers,
  CheckCircle,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: StudentProject | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (project: StudentProject) => void;
  onDelete: (id: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}) => {
  if (!project) return null;

  const statusVariants: Record<StudentProject['status'], 'cyan' | 'emerald' | 'amber' | 'slate'> = {
    planning: 'amber',
    in_progress: 'cyan',
    completed: 'emerald',
    archived: 'slate',
  };

  const statusLabels: Record<StudentProject['status'], string> = {
    planning: 'Planning',
    in_progress: 'In Progress',
    completed: 'Completed',
    archived: 'Archived',
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="3xl"
      title={
        <div className="flex flex-wrap items-center gap-2">
          <span>{project.title}</span>
          <Badge variant={statusVariants[project.status]}>
            {statusLabels[project.status]}
          </Badge>
        </div>
      }
      description={project.moduleTitle ? `Linked to ${project.moduleTitle}` : 'Independent Prototype'}
    >
      <div className="space-y-6">
        {/* Banner image if present */}
        {project.imageUrl && (
          <div className="rounded-xl overflow-hidden border border-slate-800 max-h-64 bg-slate-950">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Metadata & Categories */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400">Category:</span>
            <span className="text-cyan-400 font-semibold">{project.category}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Created {new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Technologies list */}
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Problem & Idea */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.problem && (
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Problem Addressed
              </h5>
              <p className="text-sm text-slate-200 leading-relaxed">{project.problem}</p>
            </div>
          )}

          {project.idea && (
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1.5">
                Proposed Solution
              </h5>
              <p className="text-sm text-slate-200 leading-relaxed">{project.idea}</p>
            </div>
          )}
        </div>

        {/* What I Built */}
        {project.whatIBuilt && (
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800/30">
            <h5 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>What I Built & Implemented</span>
            </h5>
            <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">{project.whatIBuilt}</p>
          </div>
        )}

        {/* What Worked & Didn't Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.whatWorked && (
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30">
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1.5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>What Worked (Successes)</span>
              </h5>
              <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">{project.whatWorked}</p>
            </div>
          )}

          {project.whatDidntWork && (
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/30">
              <h5 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1.5 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>What Didn't Work (Debugging Notes)</span>
              </h5>
              <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">{project.whatDidntWork}</p>
            </div>
          )}
        </div>

        {/* Improvements */}
        {project.improvements && (
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/30">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Future Improvements & Iterations</span>
            </h5>
            <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">{project.improvements}</p>
          </div>
        )}

        {/* Project Links */}
        {(project.githubLink || project.demoLink || project.projectLink) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors border border-slate-700"
              >
                <GitBranch className="w-4 h-4 text-cyan-400" />
                <span>Source Repository</span>
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 text-xs font-medium transition-colors border border-cyan-700/50"
              >
                <Globe className="w-4 h-4" />
                <span>Live Interactive Demo</span>
              </a>
            )}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Documentation / Site</span>
              </a>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              if (confirm('Are you sure you want to delete this project entry?')) {
                onDelete(project.id);
                onClose();
              }
            }}
            icon={<Trash2 className="w-4 h-4" />}
          >
            Delete Project
          </Button>

          <div className="flex items-center gap-3">
            <Button size="sm" variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button
              size="sm"
              variant="glow"
              onClick={() => {
                onClose();
                onEdit(project);
              }}
              icon={<Edit className="w-4 h-4" />}
            >
              Edit Project
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
