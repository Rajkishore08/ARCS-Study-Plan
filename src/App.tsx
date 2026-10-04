import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { ProjectProvider } from './context/ProjectContext';
import { AppLayout } from './components/layout/AppLayout';

// Pages
import { Dashboard } from './pages/Dashboard';
import { Roadmap } from './pages/Roadmap';
import { Modules } from './pages/Modules';
import { ModulePage } from './pages/ModulePage';
import { DayPage } from './pages/DayPage';
import { ProgressPage } from './pages/ProgressPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <ProgressProvider>
      <ProjectProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="roadmap" element={<Roadmap />} />
              <Route path="modules" element={<Modules />} />
              <Route path="module/:moduleId" element={<ModulePage />} />
              <Route path="module/:moduleId/day/:dayId" element={<DayPage />} />
              <Route path="progress" element={<ProgressPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="resources" element={<ResourcesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProjectProvider>
    </ProgressProvider>
  );
}

export default App;
