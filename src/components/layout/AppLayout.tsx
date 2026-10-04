import React, { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

export const AppLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Show learning sidebar on module or day routes
  const isLearningRoute = location.pathname.startsWith('/module');

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar
        showSidebarToggle={isLearningRoute}
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      <div className="flex-1 flex w-full">
        {isLearningRoute && (
          <div className="hidden lg:block">
            <Sidebar
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            />
          </div>
        )}

        <main className="flex-1 min-w-0 flex flex-col">
          <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
