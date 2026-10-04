import React, { useState } from 'react';
import { resourceCategories } from '../data/resources';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import {
  BookOpen,
  Search,
  ExternalLink,
  Layers,
  Terminal,
  Cpu,
  Glasses,
  Bot,
  Sparkles,
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Glasses':
        return <Glasses className="w-5 h-5 text-purple-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = resourceCategories
    .map(category => {
      const matchingItems = category.items.filter(item => {
        const matchesSearch =
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesType = selectedType === 'all' || item.type === selectedType;
        const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;

        return matchesSearch && matchesType && matchesCategory;
      });

      return {
        ...category,
        items: matchingItems,
      };
    })
    .filter(cat => cat.items.length > 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="cyan" icon={<BookOpen className="w-3.5 h-3.5" />}>
            Knowledge Hub
          </Badge>
          <span className="text-xs font-mono text-slate-400">Developer Tooling & Documentation</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
          Learning Resources & Toolkits
        </h1>
        <p className="text-sm md:text-base text-slate-300 mt-1 max-w-2xl leading-relaxed">
          Curated reference documentation, development platforms, emulators, and SDKs supporting your 80-day technology discovery path.
        </p>
      </div>

      {/* Search & Type Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search tools, documentation, frameworks, or tags..."
            className="w-full bg-[#0c1220] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          className="bg-[#0c1220] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
        >
          <option value="all">All Resource Types</option>
          <option value="tool">Tools & IDEs</option>
          <option value="documentation">Documentation</option>
          <option value="website">Websites</option>
          <option value="tutorial">Tutorials</option>
          <option value="reference">References</option>
        </select>
      </div>

      {/* Categories & Items List */}
      <div className="space-y-10">
        {filteredCategories.map(category => (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                {getCategoryIcon(category.icon)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                <p className="text-xs text-slate-400">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map(item => (
                <Card
                  key={item.id}
                  variant="glass"
                  className="p-5 flex flex-col justify-between glass-panel-hover"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="cyan" size="sm">
                        {item.type}
                      </Badge>
                      {item.isFeatured && (
                        <Badge variant="amber" size="sm" icon={<Sparkles className="w-3 h-3" />}>
                          Featured
                        </Badge>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono">External Toolkit</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Open Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="py-16 text-center rounded-2xl bg-slate-900/30 border border-dashed border-slate-800">
            <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No resources match your search</h3>
            <p className="text-xs text-slate-400">Try adjusting your keyword filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
