import React from 'react';
import { StudentProject } from '../../types/project';
import { Badge } from '../ui/Badge';
import { ExternalLink, GitBranch, ArrowRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: StudentProject;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
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
    <div
      onClick={onClick}
      className="group flex flex-col justify-between p-5 md:p-6 rounded-2xl border border-slate-800 bg-[#0d1424]/90 hover:border-cyan-500/40 glass-panel-hover cursor-pointer"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant={statusVariants[project.status]}>
            {statusLabels[project.status]}
          </Badge>
          <span className="text-[11px] font-mono text-slate-500">
            {new Date(project.updatedAt).toLocaleDateString()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* Linked Module */}
        {project.moduleTitle && (
          <p className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="truncate">{project.moduleTitle}</span>
          </p>
        )}

        {/* Problem or Idea snippet */}
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
          {project.problem || project.idea || project.whatIBuilt || 'Click to view student engineering documentation.'}
        </p>

        {/* Tech tags */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1.5 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-400">
          {project.githubLink && (
            <span title="Source Repository">
              <GitBranch className="w-4 h-4 hover:text-white" />
            </span>
          )}
          {project.demoLink && (
            <span title="Live Demo">
              <ExternalLink className="w-4 h-4 hover:text-cyan-400" />
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
};
