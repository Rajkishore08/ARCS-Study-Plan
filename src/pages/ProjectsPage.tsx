import React, { useState } from 'react';
import { useProjects } from '../context/ProjectContext';
import { StudentProject } from '../types/project';
import { allModules } from '../data/modules';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFormModal } from '../components/projects/ProjectFormModal';
import { ProjectDetailModal } from '../components/projects/ProjectDetailModal';
import { FolderGit2, Plus, Search } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<StudentProject | null>(null);
  const [detailProject, setDetailProject] = useState<StudentProject | null>(null);

  const filteredProjects = projects.filter(p => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesModule = selectedModule === 'all' || p.moduleId === selectedModule;
    const matchesStatus = selectedStatus === 'all' || p.status === selectedStatus;

    return matchesSearch && matchesModule && matchesStatus;
  });

  const handleSaveProject = (projectData: Omit<StudentProject, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingProject) {
      updateProject(editingProject.id, projectData);
      setEditingProject(null);
    } else {
      addProject(projectData);
    }
  };

  const handleOpenEdit = (project: StudentProject) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="cyan" icon={<FolderGit2 className="w-3.5 h-3.5" />}>
              Engineering Portfolio
            </Badge>
            <span className="text-xs font-mono text-slate-400">{projects.length} Entries Recorded</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            Student Project Workspace
          </h1>
          <p className="text-sm md:text-base text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Document practical builds, hardware experiments, failure logs, and deployment links into your personal technology portfolio.
          </p>
        </div>

        <Button
          size="md"
          variant="glow"
          onClick={() => {
            setEditingProject(null);
            setIsFormOpen(true);
          }}
          icon={<Plus className="w-4 h-4" />}
        >
          Create Project Record
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, problem, or technology tag..."
            className="w-full bg-[#0c1220] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <select
          value={selectedModule}
          onChange={e => setSelectedModule(e.target.value)}
          className="bg-[#0c1220] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
        >
          <option value="all">All Modules</option>
          {allModules.map(mod => (
            <option key={mod.id} value={mod.id}>
              {mod.title}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={e => setSelectedStatus(e.target.value)}
          className="bg-[#0c1220] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
        >
          <option value="all">All Statuses</option>
          <option value="planning">Planning</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setDetailProject(project)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center rounded-3xl bg-slate-900/40 border border-dashed border-slate-800 max-w-2xl mx-auto p-8">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4">
            <FolderGit2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Your project workspace is waiting for your first idea.
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
            Record prototypes from your module practical tasks, experimental hardware circuits, or independent projects.
          </p>
          <Button
            size="md"
            variant="glow"
            onClick={() => {
              setEditingProject(null);
              setIsFormOpen(true);
            }}
            icon={<Plus className="w-4 h-4" />}
          >
            Create First Project Record
          </Button>
        </div>
      )}

      {/* Form Modal (Create / Edit) */}
      <ProjectFormModal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        initialData={editingProject}
      />

      {/* Detail View Modal */}
      <ProjectDetailModal
        project={detailProject}
        isOpen={Boolean(detailProject)}
        onClose={() => setDetailProject(null)}
        onEdit={handleOpenEdit}
        onDelete={deleteProject}
      />
    </div>
  );
};
