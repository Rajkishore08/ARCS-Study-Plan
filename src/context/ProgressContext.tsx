import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { UserProgress, PracticalDocumentation, ActivityLogItem } from '../types/learning';
import {
  loadProgressFromStorage,
  saveProgressToStorage,
  loadProfileFromStorage,
  saveProfileToStorage,
  StudentProfile,
} from '../utils/storage';
import { calculateOverallProgress, updateStreak } from '../utils/progress';

interface ProgressContextType {
  progress: UserProgress;
  profile: StudentProfile;
  stats: ReturnType<typeof calculateOverallProgress>;
  markDayComplete: (dayId: string, moduleId: string, dayTitle?: string) => void;
  markDayIncomplete: (dayId: string) => void;
  toggleDayCompletion: (dayId: string, moduleId: string, dayTitle?: string) => void;
  saveQuestionAnswer: (dayId: string, questionId: string, answer: string) => void;
  savePracticalDoc: (dayId: string, doc: Partial<PracticalDocumentation>) => void;
  toggleChecklistItem: (dayId: string, itemId: string) => void;
  saveDayNote: (dayId: string, note: string) => void;
  setLastVisited: (moduleId: string, dayId: string) => void;
  updateProfile: (profile: Partial<StudentProfile>) => void;
  resetAllProgress: () => void;
  exportData: () => string;
  importData: (jsonStr: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgressFromStorage());
  const [profile, setProfile] = useState<StudentProfile>(() => loadProfileFromStorage());

  useEffect(() => {
    saveProgressToStorage(progress);
  }, [progress]);

  useEffect(() => {
    saveProfileToStorage(profile);
  }, [profile]);

  // Check streak on mount
  useEffect(() => {
    const streakInfo = updateStreak(progress);
    if (streakInfo.lastActiveDate !== progress.lastActiveDate || streakInfo.streakDays !== progress.streakDays) {
      setProgress(prev => ({
        ...prev,
        ...streakInfo,
      }));
    }
  }, []);

  const setLastVisited = useCallback((moduleId: string, dayId: string) => {
    setProgress(prev => ({
      ...prev,
      lastVisitedModuleId: moduleId,
      lastVisitedDayId: dayId,
    }));
  }, []);

  const markDayComplete = useCallback((dayId: string, moduleId: string, dayTitle = '') => {
    setProgress(prev => {
      const isAlreadyCompleted = prev.completedDays[dayId];
      if (isAlreadyCompleted) return prev;

      const newActivity: ActivityLogItem = {
        id: `act-${Date.now()}`,
        timestamp: new Date().toISOString(),
        type: 'day_completed',
        title: `Completed ${dayTitle || dayId.toUpperCase()}`,
        description: `Marked day completion for ${moduleId.toUpperCase()}`,
        moduleId,
        dayId,
      };

      return {
        ...prev,
        completedDays: {
          ...prev.completedDays,
          [dayId]: true,
        },
        activityHistory: [newActivity, ...(prev.activityHistory || [])].slice(0, 50),
      };
    });
  }, []);

  const markDayIncomplete = useCallback((dayId: string) => {
    setProgress(prev => {
      const nextCompleted = { ...prev.completedDays };
      delete nextCompleted[dayId];
      return {
        ...prev,
        completedDays: nextCompleted,
      };
    });
  }, []);

  const toggleDayCompletion = useCallback((dayId: string, moduleId: string, dayTitle = '') => {
    setProgress(prev => {
      const isCompleted = Boolean(prev.completedDays[dayId]);
      if (isCompleted) {
        const nextCompleted = { ...prev.completedDays };
        delete nextCompleted[dayId];
        return {
          ...prev,
          completedDays: nextCompleted,
        };
      } else {
        const newActivity: ActivityLogItem = {
          id: `act-${Date.now()}`,
          timestamp: new Date().toISOString(),
          type: 'day_completed',
          title: `Completed ${dayTitle || dayId.toUpperCase()}`,
          description: `Marked day completion for ${moduleId.toUpperCase()}`,
          moduleId,
          dayId,
        };
        return {
          ...prev,
          completedDays: {
            ...prev.completedDays,
            [dayId]: true,
          },
          activityHistory: [newActivity, ...(prev.activityHistory || [])].slice(0, 50),
        };
      }
    });
  }, []);

  const saveQuestionAnswer = useCallback((dayId: string, questionId: string, answer: string) => {
    setProgress(prev => ({
      ...prev,
      dayAnswers: {
        ...prev.dayAnswers,
        [dayId]: {
          ...(prev.dayAnswers?.[dayId] || {}),
          [questionId]: answer,
        },
      },
    }));
  }, []);

  const savePracticalDoc = useCallback((dayId: string, doc: Partial<PracticalDocumentation>) => {
    setProgress(prev => {
      const currentDoc = prev.dayPracticalDocs?.[dayId] || {
        whatIBuilt: '',
        whatITested: '',
        whatHappened: '',
        whatWentWrong: '',
        whatIChanged: '',
        whatILearned: '',
        updatedAt: new Date().toISOString(),
      };

      const updated: PracticalDocumentation = {
        ...currentDoc,
        ...doc,
        updatedAt: new Date().toISOString(),
      };

      return {
        ...prev,
        dayPracticalDocs: {
          ...prev.dayPracticalDocs,
          [dayId]: updated,
        },
      };
    });
  }, []);

  const toggleChecklistItem = useCallback((dayId: string, itemId: string) => {
    setProgress(prev => {
      const currentDayChecklist = prev.checklistState?.[dayId] || {};
      const nextValue = !currentDayChecklist[itemId];

      return {
        ...prev,
        checklistState: {
          ...prev.checklistState,
          [dayId]: {
            ...currentDayChecklist,
            [itemId]: nextValue,
          },
        },
      };
    });
  }, []);

  const saveDayNote = useCallback((dayId: string, note: string) => {
    setProgress(prev => ({
      ...prev,
      dayNotes: {
        ...prev.dayNotes,
        [dayId]: note,
      },
    }));
  }, []);

  const updateProfile = useCallback((updates: Partial<StudentProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...updates,
    }));
  }, []);

  const resetAllProgress = useCallback(() => {
    const emptyProgress: UserProgress = {
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
      activityHistory: [],
      startedAt: new Date().toISOString(),
    };
    setProgress(emptyProgress);
  }, []);

  const exportData = useCallback(() => {
    return JSON.stringify({ progress, profile }, null, 2);
  }, [progress, profile]);

  const importData = useCallback((jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.progress) {
        setProgress(parsed.progress);
      }
      if (parsed.profile) {
        setProfile(parsed.profile);
      }
      return true;
    } catch (e) {
      console.error('Failed to import progress data', e);
      return false;
    }
  }, []);

  const stats = calculateOverallProgress(progress);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        profile,
        stats,
        markDayComplete,
        markDayIncomplete,
        toggleDayCompletion,
        saveQuestionAnswer,
        savePracticalDoc,
        toggleChecklistItem,
        saveDayNote,
        setLastVisited,
        updateProfile,
        resetAllProgress,
        exportData,
        importData,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
