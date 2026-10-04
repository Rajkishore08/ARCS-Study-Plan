import React from 'react';
import {
  BookOpen,
  Lightbulb,
  Info,
  AlertTriangle,
  FileCode,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ContentSection } from '../../types/learning';
import { Badge } from '../ui/Badge';
import { CodeBlock } from './CodeBlock';

interface LearningSectionProps {
  section: ContentSection;
}

export const LearningSection: React.FC<LearningSectionProps> = ({ section }) => {
  switch (section.type) {
    case 'heading':
      return (
        <div className="pt-6 pb-2 border-b border-slate-800/80 mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-cyan-400" />
            {section.title}
          </h2>
          {section.subtitle && <p className="text-sm text-slate-400 mt-1">{section.subtitle}</p>}
        </div>
      );

    case 'subheading':
      return (
        <h3 className="text-lg md:text-xl font-semibold text-cyan-200 mt-6 mb-3 flex items-center gap-2">
          <span>#</span> {section.title}
        </h3>
      );

    case 'text':
      return (
        <div className="my-3 text-slate-300 leading-relaxed text-sm md:text-base font-normal">
          <p>{section.content}</p>
        </div>
      );

    case 'learning':
    case 'concept':
      return (
        <div className="my-5 p-5 md:p-6 rounded-xl bg-gradient-to-br from-[#0c1424] to-[#0d1830] border border-blue-500/20 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="blue" icon={<BookOpen className="w-3.5 h-3.5" />}>
              {section.type === 'concept' ? 'Core Concept' : 'Learn'}
            </Badge>
            {section.subtitle && <span className="text-xs text-slate-400">{section.subtitle}</span>}
          </div>
          {section.title && <h4 className="text-base md:text-lg font-bold text-white mb-2">{section.title}</h4>}
          {section.content && (
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">{section.content}</p>
          )}
          {section.items && section.items.length > 0 && (
            <ul className="mt-3 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'example':
      return (
        <div className="my-5 p-5 rounded-xl bg-[#091220] border border-cyan-500/20 shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="cyan" icon={<Lightbulb className="w-3.5 h-3.5 text-cyan-400" />}>
              Example
            </Badge>
            {section.subtitle && <span className="text-xs text-slate-400">{section.subtitle}</span>}
          </div>
          {section.title && <h4 className="text-base font-bold text-white mb-2">{section.title}</h4>}
          {section.content && <p className="text-slate-300 text-sm leading-relaxed mb-3">{section.content}</p>}
          {section.code && <CodeBlock code={section.code} language={section.language || 'typescript'} />}
          {section.items && section.items.length > 0 && (
            <div className="mt-3 space-y-1.5 text-xs md:text-sm text-slate-300">
              {section.items.map((it, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{it}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case 'callout':
      const calloutStyles = {
        info: 'border-blue-500/40 bg-blue-950/20 text-blue-200',
        tip: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-200',
        warning: 'border-amber-500/40 bg-amber-950/20 text-amber-200',
        important: 'border-rose-500/40 bg-rose-950/20 text-rose-200',
      };
      const type = section.calloutType || 'info';
      return (
        <div className={`my-4 p-4 rounded-xl border flex items-start gap-3.5 ${calloutStyles[type]}`}>
          {type === 'warning' || type === 'important' ? (
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
          ) : (
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
          )}
          <div className="text-sm">
            {section.title && <p className="font-bold text-white mb-1">{section.title}</p>}
            <p className="text-slate-200 leading-relaxed">{section.content}</p>
          </div>
        </div>
      );

    case 'code':
      return <CodeBlock code={section.code || ''} language={section.language} title={section.title} />;

    case 'image':
      return (
        <div className="my-5 rounded-xl overflow-hidden border border-slate-800 bg-[#070b14]">
          <img
            src={section.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'}
            alt={section.title || 'Illustration'}
            className="w-full max-h-96 object-cover"
          />
          {(section.title || section.imageCaption) && (
            <div className="p-3 bg-slate-900/70 border-t border-slate-800 text-xs text-slate-400 text-center">
              <span className="font-medium text-slate-300">{section.title}: </span>
              {section.imageCaption}
            </div>
          )}
        </div>
      );

    case 'resource':
      return (
        <div className="my-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-white">{section.title || 'Learning Resource'}</h5>
              {section.content && <p className="text-xs text-slate-400 mt-0.5">{section.content}</p>}
            </div>
          </div>
          {section.resources && section.resources[0] && (
            <a
              href={section.resources[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-medium transition-colors"
            >
              <span>Visit Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      );

    default:
      return (
        <div className="my-3 text-slate-300 text-sm">
          {section.title && <h4 className="font-bold text-white mb-1">{section.title}</h4>}
          <p>{section.content}</p>
        </div>
      );
  }
};
