import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-[#070b14] shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-300 font-medium">{title || language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-slate-200">
        <pre>{code}</pre>
      </div>
    </div>
  );
};
