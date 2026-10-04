export interface StudentProject {
  id: string;
  title: string;
  moduleId?: string;
  moduleTitle?: string;
  dayNumber?: number;
  category: string;
  problem: string;
  idea: string;
  technologies: string[];
  whatIBuilt: string;
  whatWorked: string;
  whatDidntWork: string;
  improvements: string;
  projectLink?: string;
  githubLink?: string;
  demoLink?: string;
  imageUrl?: string;
  status: 'planning' | 'in_progress' | 'completed' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: ResourceItem[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  type: 'documentation' | 'video' | 'website' | 'tool' | 'tutorial' | 'reference' | 'download';
  tags: string[];
  isFeatured?: boolean;
}
