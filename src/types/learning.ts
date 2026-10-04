export type ContentSectionType =
  | 'text'
  | 'heading'
  | 'subheading'
  | 'learning'
  | 'concept'
  | 'example'
  | 'explore'
  | 'question'
  | 'challenge'
  | 'activity'
  | 'practical'
  | 'checklist'
  | 'image'
  | 'video'
  | 'code'
  | 'diagram'
  | 'resource'
  | 'reflection'
  | 'callout'
  | 'documentation';

export interface PracticalTaskDetail {
  objective?: string;
  requirements?: string[];
  materials?: string[];
  steps?: string[];
  expectedOutput?: string;
  challenge?: string;
  troubleshooting?: string[];
  submissionPrompt?: string;
}

export interface QuestionDetail {
  id: string;
  prompt: string;
  exploreHint?: string;
  challengeHint?: string;
  sampleAnswer?: string;
  options?: string[];
  type?: 'open' | 'multiple-choice' | 'boolean';
}

export interface ChecklistItem {
  id: string;
  label: string;
  hint?: string;
}

export interface ResourceLink {
  title: string;
  url: string;
  type: 'docs' | 'video' | 'tool' | 'github' | 'article' | 'download';
  description?: string;
}

export interface ContentSection {
  id?: string;
  type: ContentSectionType;
  title?: string;
  subtitle?: string;
  content?: string;
  items?: string[];
  code?: string;
  language?: string;
  imageUrl?: string;
  imageCaption?: string;
  videoUrl?: string;
  calloutType?: 'info' | 'tip' | 'warning' | 'important';
  practical?: PracticalTaskDetail;
  question?: QuestionDetail;
  checklist?: ChecklistItem[];
  resources?: ResourceLink[];
}

export interface Day {
  id: string; // e.g. "day-01"
  dayNumber: number; // 1 - 80
  moduleDayNumber: number; // 1 - 5 within the module
  title: string;
  theme?: string;
  duration?: string; // e.g. "45-60 min"
  objective?: string;
  sections: ContentSection[];
}

export type ModuleCategory =
  | 'Core Technology Foundations'
  | 'Applied AI & Intelligent Systems'
  | 'Spatial Computing & XR (AR/VR)'
  | 'IoT & Embedded Robotics'
  | 'Autonomous Drones & Satellites'
  | '3D Fabrication & Advanced Hardware'
  | 'Capstone & Integrated Systems';

export interface Module {
  id: string; // e.g. "module-01"
  number: number; // 1 - 16
  title: string;
  category: ModuleCategory | string;
  daysRange: string; // e.g. "Days 1–5"
  theme?: string;
  goal?: string;
  description?: string;
  iconName?: string;
  bannerImage?: string;
  estimatedHours?: number;
  prerequisites?: string[];
  tags?: string[];
  days: Day[];
}

export interface UserProgress {
  completedDays: Record<string, boolean>; // key: "day-XX" -> boolean
  completedModules: Record<string, boolean>; // key: "module-XX" -> boolean
  dayAnswers: Record<string, Record<string, string>>; // key: "day-XX" -> { questionId: answer }
  dayPracticalDocs: Record<string, PracticalDocumentation>; // key: "day-XX" -> doc
  checklistState: Record<string, Record<string, boolean>>; // key: "day-XX" -> { checklistItemId: boolean }
  lastVisitedDayId: string | null;
  lastVisitedModuleId: string | null;
  dayNotes: Record<string, string>; // user scratch notes per day
  streakDays: number;
  lastActiveDate: string | null;
  activityHistory: ActivityLogItem[];
  startedAt: string;
}

export interface PracticalDocumentation {
  whatIBuilt: string;
  whatITested: string;
  whatHappened: string;
  whatWentWrong: string;
  whatIChanged: string;
  whatILearned: string;
  repoOrDemoLink?: string;
  updatedAt: string;
}

export interface ActivityLogItem {
  id: string;
  timestamp: string;
  type: 'day_completed' | 'module_completed' | 'project_created' | 'task_saved' | 'question_answered';
  title: string;
  description: string;
  moduleId?: string;
  dayId?: string;
}
