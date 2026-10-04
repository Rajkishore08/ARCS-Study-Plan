import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { StudentProject } from '../types/project';
import { loadProjectsFromStorage, saveProjectsToStorage } from '../utils/storage';

interface ProjectContextType {
  projects: StudentProject[];
  addProject: (project: Omit<StudentProject, 'id' | 'createdAt' | 'updatedAt'>) => StudentProject;
  updateProject: (id: string, updates: Partial<StudentProject>) => void;
  deleteProject: (id: string) => void;
  getProjectById: (id: string) => StudentProject | undefined;
  getProjectsByModule: (moduleId: string) => StudentProject[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<StudentProject[]>(() => loadProjectsFromStorage());

  useEffect(() => {
    saveProjectsToStorage(projects);
  }, [projects]);

  const addProject = useCallback(
    (newProjectData: Omit<StudentProject, 'id' | 'createdAt' | 'updatedAt'>) => {
      const now = new Date().toISOString();
      const newProject: StudentProject = {
        ...newProjectData,
        id: `proj-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        createdAt: now,
        updatedAt: now,
      };

      setProjects(prev => [newProject, ...prev]);
      return newProject;
    },
    []
  );

  const updateProject = useCallback((id: string, updates: Partial<StudentProject>) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === id
          ? {
              ...p,
              ...updates,
              updatedAt: new Date().toISOString(),
            }
          : p
      )
    );
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  }, []);

  const getProjectById = useCallback(
    (id: string) => {
      return projects.find(p => p.id === id);
    },
    [projects]
  );

  const getProjectsByModule = useCallback(
    (moduleId: string) => {
      return projects.filter(p => p.moduleId === moduleId);
    },
    [projects]
  );

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        getProjectById,
        getProjectsByModule,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}
