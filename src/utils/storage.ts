import { UserProgress, PracticalDocumentation, ActivityLogItem } from '../types/learning';
import { StudentProject } from '../types/project';

const STORAGE_KEYS = {
  PROGRESS: 'arcs_student_progress_v1',
  PROJECTS: 'arcs_student_projects_v1',
  USER_PROFILE: 'arcs_student_profile_v1',
};

export interface StudentProfile {
  name: string;
  avatarSeed: string;
  targetRole: string;
  themePreference: 'dark' | 'system';
}

const DEFAULT_PROFILE: StudentProfile = {
  name: 'Student Explorer',
  avatarSeed: 'arcs-learner',
  targetRole: 'Technology Innovator',
  themePreference: 'dark',
};

const DEFAULT_PROGRESS: UserProgress = {
  completedDays: {},
  completedModules: {},
  dayAnswers: {},
  dayPracticalDocs: {},
  checklistState: {},
  lastVisitedDayId: 'day-01',
  lastVisitedModuleId: 'module-01',
  dayNotes: {},
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  activityHistory: [
    {
      id: 'init-1',
      timestamp: new Date().toISOString(),
      type: 'day_completed',
      title: 'Program Started',
      description: 'Welcome to the ARCS 80-Day Technology Discovery Program!',
      moduleId: 'module-01',
      dayId: 'day-01',
    },
  ],
  startedAt: new Date().toISOString(),
};

export function loadProgressFromStorage(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
    };
  } catch (e) {
    console.error('Failed to load progress from storage', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveProgressToStorage(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to storage', e);
  }
}

export function loadProjectsFromStorage(): StudentProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load projects from storage', e);
    return [];
  }
}

export function saveProjectsToStorage(projects: StudentProject[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  } catch (e) {
    console.error('Failed to save projects to storage', e);
  }
}

export function loadProfileFromStorage(): StudentProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (!raw) return DEFAULT_PROFILE;
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch (e) {
    return DEFAULT_PROFILE;
  }
}

export function saveProfileToStorage(profile: StudentProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile to storage', e);
  }
}
