import React, { useState, useEffect } from 'react';
import { StudentProject } from '../../types/project';
import { allModules } from '../../data/modules';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Save } from 'lucide-react';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (projectData: Omit<StudentProject, 'id' | 'createdAt' | 'updatedAt'>) => void;
  initialData?: StudentProject | null;
}

export const ProjectFormModal: React.FC<ProjectFormModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [title, setTitle] = useState('');
  const [moduleId, setModuleId] = useState('');
  const [category, setCategory] = useState('Applied Technology Prototype');
  const [problem, setProblem] = useState('');
  const [idea, setIdea] = useState('');
  const [techInput, setTechInput] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [whatIBuilt, setWhatIBuilt] = useState('');
  const [whatWorked, setWhatWorked] = useState('');
  const [whatDidntWork, setWhatDidntWork] = useState('');
  const [improvements, setImprovements] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState<StudentProject['status']>('in_progress');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setModuleId(initialData.moduleId || '');
      setCategory(initialData.category || 'Applied Technology Prototype');
      setProblem(initialData.problem || '');
      setIdea(initialData.idea || '');
      setTechnologies(initialData.technologies || []);
      setWhatIBuilt(initialData.whatIBuilt || '');
      setWhatWorked(initialData.whatWorked || '');
      setWhatDidntWork(initialData.whatDidntWork || '');
      setImprovements(initialData.improvements || '');
      setProjectLink(initialData.projectLink || '');
      setGithubLink(initialData.githubLink || '');
      setDemoLink(initialData.demoLink || '');
      setImageUrl(initialData.imageUrl || '');
      setStatus(initialData.status || 'in_progress');
    } else {
      setTitle('');
      setModuleId('');
      setCategory('Applied Technology Prototype');
      setProblem('');
      setIdea('');
      setTechnologies([]);
      setWhatIBuilt('');
      setWhatWorked('');
      setWhatDidntWork('');
      setImprovements('');
      setProjectLink('');
      setGithubLink('');
      setDemoLink('');
      setImageUrl('');
      setStatus('in_progress');
    }
  }, [initialData, isOpen]);

  const handleAddTech = () => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setTechnologies(prev => [...prev, techInput.trim()]);
      setTechInput('');
    }
  };

  const handleRemoveTech = (tech: string) => {
    setTechnologies(prev => prev.filter(t => t !== tech));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const selectedMod = allModules.find(m => m.id === moduleId);

    onSave({
      title: title.trim(),
      moduleId: moduleId || undefined,
      moduleTitle: selectedMod ? selectedMod.title : undefined,
      category,
      problem,
      idea,
      technologies,
      whatIBuilt,
      whatWorked,
      whatDidntWork,
      improvements,
      projectLink: projectLink.trim() || undefined,
      githubLink: githubLink.trim() || undefined,
      demoLink: demoLink.trim() || undefined,
      imageUrl: imageUrl.trim() || undefined,
      status,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={initialData ? 'Edit Student Project' : 'Create New Project Record'}
      description="Document your prototype, experiments, engineering challenges, and deployment links."
      maxWidth="3xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Autonomous Vision Rover Prototype"
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Related Module
            </label>
            <select
              value={moduleId}
              onChange={e => setModuleId(e.target.value)}
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
            >
              <option value="">None / Independent Project</option>
              {allModules.map(mod => (
                <option key={mod.id} value={mod.id}>
                  {mod.title} ({mod.daysRange})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={e => setCategory(e.target.value)}
              placeholder="e.g. AI / Spatial / Robotics / IoT"
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Project Status
            </label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value as StudentProject['status'])}
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
            >
              <option value="planning">Planning Phase</option>
              <option value="in_progress">In Active Development</option>
              <option value="completed">Completed & Verified</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Technologies Tagging */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Technologies Used
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={techInput}
              onChange={e => setTechInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTech();
                }
              }}
              placeholder="e.g. ESP32, React, PyTorch, WebXR..."
              className="flex-1 bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Button type="button" size="sm" variant="secondary" onClick={handleAddTech}>
              Add Tech
            </Button>
          </div>
          <div className="flex flex-wrap gap-1.5 min-h-[32px]">
            {technologies.map(tech => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-700/40 text-cyan-300 text-xs font-medium"
              >
                <span>{tech}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="hover:text-rose-400 cursor-pointer"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Idea */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Problem Identified
            </label>
            <textarea
              rows={2}
              value={problem}
              onChange={e => setProblem(e.target.value)}
              placeholder="What real-world engineering or technical challenge does this address?"
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Proposed Idea / Solution
            </label>
            <textarea
              rows={2}
              value={idea}
              onChange={e => setIdea(e.target.value)}
              placeholder="How does your technology solution solve the problem?"
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Technical Implementation Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-1.5">
              What I Built
            </label>
            <textarea
              rows={3}
              value={whatIBuilt}
              onChange={e => setWhatIBuilt(e.target.value)}
              placeholder="Hardware schematic, software components, architecture..."
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5">
              What Worked
            </label>
            <textarea
              rows={3}
              value={whatWorked}
              onChange={e => setWhatWorked(e.target.value)}
              placeholder="Successful tests, working features, benchmarks achieved..."
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-rose-300 uppercase tracking-wider mb-1.5">
              What Didn't Work (Challenges)
            </label>
            <textarea
              rows={3}
              value={whatDidntWork}
              onChange={e => setWhatDidntWork(e.target.value)}
              placeholder="Bugs encountered, hardware bottlenecks, latency issues..."
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
              Next Improvements / Next Version
            </label>
            <textarea
              rows={3}
              value={improvements}
              onChange={e => setImprovements(e.target.value)}
              placeholder="Future optimizations, sensors to add, cloud deployment ideas..."
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Links & Media */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Repository URL
            </label>
            <input
              type="url"
              value={githubLink}
              onChange={e => setGithubLink(e.target.value)}
              placeholder="https://github.com/..."
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Live Demo URL
            </label>
            <input
              type="url"
              value={demoLink}
              onChange={e => setDemoLink(e.target.value)}
              placeholder="https://..."
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Image / Diagram URL
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="glow" icon={<Save className="w-4 h-4" />}>
            {initialData ? 'Save Changes' : 'Create Project Record'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
