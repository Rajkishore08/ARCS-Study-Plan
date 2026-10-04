import { allModules, totalProgramDays, totalModulesCount } from '../data/modules';
import { UserProgress, Module } from '../types/learning';

export function calculateOverallProgress(progress: UserProgress) {
  const completedCount = Object.keys(progress.completedDays).filter(
    k => progress.completedDays[k]
  ).length;

  const percentage = Math.round((completedCount / totalProgramDays) * 100);
  const completedModulesCount = allModules.filter(m => isModuleFullyCompleted(m, progress)).length;

  return {
    completedDays: completedCount,
    totalDays: totalProgramDays,
    percentage: Math.min(100, Math.max(0, percentage)),
    completedModules: completedModulesCount,
    totalModules: totalModulesCount,
    remainingDays: totalProgramDays - completedCount,
    remainingModules: totalModulesCount - completedModulesCount,
  };
}

export function calculateModuleProgress(module: Module, progress: UserProgress) {
  const totalDays = module.days.length;
  if (totalDays === 0) return { completedDays: 0, totalDays: 0, percentage: 0, isCompleted: false };

  const completedDays = module.days.filter(d => progress.completedDays[d.id]).length;
  const percentage = Math.round((completedDays / totalDays) * 100);
  const isCompleted = completedDays === totalDays && totalDays > 0;

  return {
    completedDays,
    totalDays,
    percentage,
    isCompleted,
  };
}

export function isModuleFullyCompleted(module: Module, progress: UserProgress): boolean {
  if (!module.days || module.days.length === 0) return false;
  return module.days.every(d => progress.completedDays[d.id]);
}

export function isDayCompleted(dayId: string, progress: UserProgress): boolean {
  return Boolean(progress.completedDays[dayId]);
}

export function getNextUncompletedDay(progress: UserProgress) {
  for (const mod of allModules) {
    for (const day of mod.days) {
      if (!progress.completedDays[day.id]) {
        return { module: mod, day };
      }
    }
  }
  // All completed, return last day or first
  return { module: allModules[0], day: allModules[0].days[0] };
}

export function updateStreak(progress: UserProgress): { streakDays: number; lastActiveDate: string } {
  const today = new Date().toISOString().split('T')[0];
  if (!progress.lastActiveDate) {
    return { streakDays: 1, lastActiveDate: today };
  }

  if (progress.lastActiveDate === today) {
    return { streakDays: progress.streakDays || 1, lastActiveDate: today };
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (progress.lastActiveDate === yesterdayStr) {
    return { streakDays: (progress.streakDays || 0) + 1, lastActiveDate: today };
  }

  // Missed more than 1 day
  return { streakDays: 1, lastActiveDate: today };
}
