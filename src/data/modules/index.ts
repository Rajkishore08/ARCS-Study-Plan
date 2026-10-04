import { Module } from '../../types/learning';
import { module01 } from './module01';
import { module02 } from './module02';
import { module03 } from './module03';
import { module04 } from './module04';
import { module05 } from './module05';
import { module06 } from './module06';
import { module07 } from './module07';
import { module08 } from './module08';
import { module09 } from './module09';
import { module10 } from './module10';
import { module11 } from './module11';
import { module12 } from './module12';
import { module13 } from './module13';
import { module14 } from './module14';
import { module15 } from './module15';
import { module16 } from './module16';

export const allModules: Module[] = [
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
  module09,
  module10,
  module11,
  module12,
  module13,
  module14,
  module15,
  module16,
];

export const modulesById: Record<string, Module> = allModules.reduce((acc, mod) => {
  acc[mod.id] = mod;
  return acc;
}, {} as Record<string, Module>);

export const totalProgramDays = 80;
export const totalModulesCount = 16;

export function getModuleByDayNumber(dayNumber: number): Module | undefined {
  return allModules.find(m => m.days.some(d => d.dayNumber === dayNumber));
}

export function getDayByNumber(dayNumber: number) {
  for (const mod of allModules) {
    const day = mod.days.find(d => d.dayNumber === dayNumber);
    if (day) return { module: mod, day };
  }
  return null;
}

export function getDayById(dayId: string) {
  for (const mod of allModules) {
    const day = mod.days.find(d => d.id === dayId);
    if (day) return { module: mod, day };
  }
  return null;
}

export function getNextDay(moduleId: string, dayId: string) {
  const currentModule = modulesById[moduleId];
  if (!currentModule) return null;

  const currentDayIndex = currentModule.days.findIndex(d => d.id === dayId);
  if (currentDayIndex >= 0 && currentDayIndex < currentModule.days.length - 1) {
    return {
      module: currentModule,
      day: currentModule.days[currentDayIndex + 1],
      isNextModule: false,
    };
  }

  // Check next module's first day
  const currentModIndex = allModules.findIndex(m => m.id === moduleId);
  if (currentModIndex >= 0 && currentModIndex < allModules.length - 1) {
    const nextMod = allModules[currentModIndex + 1];
    return {
      module: nextMod,
      day: nextMod.days[0],
      isNextModule: true,
    };
  }

  return null; // program completed!
}

export function getPreviousDay(moduleId: string, dayId: string) {
  const currentModule = modulesById[moduleId];
  if (!currentModule) return null;

  const currentDayIndex = currentModule.days.findIndex(d => d.id === dayId);
  if (currentDayIndex > 0) {
    return {
      module: currentModule,
      day: currentModule.days[currentDayIndex - 1],
      isPrevModule: false,
    };
  }

  // Check previous module's last day
  const currentModIndex = allModules.findIndex(m => m.id === moduleId);
  if (currentModIndex > 0) {
    const prevMod = allModules[currentModIndex - 1];
    return {
      module: prevMod,
      day: prevMod.days[prevMod.days.length - 1],
      isPrevModule: true,
    };
  }

  return null;
}

export {
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
  module09,
  module10,
  module11,
  module12,
  module13,
  module14,
  module15,
  module16,
};
