# ARCS 80-Day Technology Discovery & Learning Platform

A self-paced, production-grade React & TypeScript learning platform built for the **ARCS 80-Day Technology Learning & Project Program**.

The application features **16 learning modules covering 80 days** across core technologies (AI, Spatial Computing & XR, Embedded IoT, Robotics, Autonomous Drones, and 3D Fabrication).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will be accessible at: `http://localhost:5173/`

### 3. Build for Production
```bash
npm run build
```

---

## 🏗️ Application Architecture

```text
src/
├── types/
│   ├── learning.ts         # Module, Day, ContentSection, UserProgress, PracticalDocumentation types
│   ├── project.ts          # StudentProject, ResourceItem types
│
├── data/
│   ├── modules/
│   │   ├── module01.ts     # Days 1–5 (Placeholder schema ready for content)
│   │   ├── module02.ts     # Days 6–10
│   │   ├── ...
│   │   ├── module16.ts     # Days 76–80
│   │   └── index.ts        # Aggregated exports and navigation utilities (getNextDay, getPreviousDay)
│   └── resources.ts        # Curated developer tools, SDKs, and platform links
│
├── context/
│   ├── ProgressContext.tsx # Centralized LocalStorage progress, streaks, answers, notes, backup/restore
│   └── ProjectContext.tsx  # Student project workspace & portfolio management
│
├── components/
│   ├── layout/             # Navbar, Sidebar (collapsible 16-module tree), Footer, SearchModal, ProfileModal, AppLayout
│   ├── ui/                 # Button, Card, Badge, ProgressBar, Modal
│   ├── roadmap/            # RoadmapTimeline, RoadmapMilestone
│   ├── modules/            # ModuleCard, ModuleList, ModuleHeader
│   ├── learning/           # ContentRenderer, LearningSection, QuestionCard, PracticalTask, ChecklistCard, etc.
│   └── projects/           # ProjectCard, ProjectFormModal, ProjectDetailModal
│
└── pages/
    ├── Dashboard.tsx       # Main student dashboard with active learning tracker & stats
    ├── Roadmap.tsx         # Complete 80-day milestone visual roadmap
    ├── Modules.tsx         # 16-module catalog with search & category filters
    ├── ModulePage.tsx      # Individual module overview & 5-day structured schedule
    ├── DayPage.tsx         # Interactive day learning experience with content renderer & confetti celebration
    ├── ProgressPage.tsx    # 80-Day milestone matrix, analytics & JSON export
    ├── ProjectsPage.tsx    # Student project portfolio workspace
    ├── ResourcesPage.tsx   # Developer tools and documentation hub
    ├── AboutPage.tsx       # Program vision, curriculum stages, and technology tracks
    └── NotFoundPage.tsx    # 404 handler
```

---

## 📝 How to Add Module Curriculum Content

All 16 module placeholder files are located in `src/data/modules/` (`module01.ts` through `module16.ts`).

### Schema Example (`src/data/modules/module01.ts`):

```typescript
import { Module } from '../../types/learning';

export const module01: Module = {
  id: 'module-01',
  number: 1,
  title: 'Module 01: Foundations of Intelligent Systems',
  category: 'Applied AI & Intelligent Systems',
  daysRange: 'Days 1–5',
  theme: 'Mental Models & Neural Architectures',
  goal: 'Understand core machine learning pipelines and run local model inference.',
  description: 'A comprehensive entry into intelligent systems...',
  days: [
    {
      id: 'day-01',
      dayNumber: 1,
      moduleDayNumber: 1,
      title: 'Day 01: Neural Representation',
      theme: 'Learn',
      objective: 'Master tensor operations and vector embeddings.',
      sections: [
        {
          type: 'heading',
          title: 'Introduction to High-Dimensional Spaces',
        },
        {
          type: 'text',
          content: 'Embeddings represent semantic meaning as vectors in multi-dimensional space.',
        },
        {
          type: 'concept',
          title: 'Cosine Similarity',
          content: 'A metric used to measure how similar two vectors are regardless of magnitude.',
        },
        {
          type: 'question',
          question: {
            id: 'q-d1-1',
            prompt: 'How does vector dimensionality influence representation fidelity?',
            exploreHint: 'Investigate token embeddings in small vs large language models.',
            challengeHint: 'Calculate cosine similarity between two 3D vectors manually.',
          },
        },
        {
          type: 'practical',
          title: 'Hands-on Embedding Generation',
          practical: {
            objective: 'Compute and visualize word vector embeddings locally.',
            materials: ['Python 3.10+', 'numpy', 'sentence-transformers'],
            steps: [
              'Install sentence-transformers library',
              'Load a lightweight mini-LM model',
              'Generate vectors for 5 sample sentences',
              'Plot cosine distance matrix',
            ],
            expectedOutput: 'A symmetric 5x5 distance matrix displaying pairwise similarity.',
            challenge: 'Add a threshold filter to identify clusters automatically.',
          },
        },
      ],
    },
    // ... Days 2 to 5
  ],
};
```

### Supported Section Types in `ContentRenderer`:

| Section Type | Rendered Component | Capabilities |
| :--- | :--- | :--- |
| `heading` / `subheading` | `LearningSection` | Styled typography with cyan accents |
| `text` | `LearningSection` | Clean, readable paragraphs |
| `concept` / `learning` | `LearningSection` | Gradient card with core takeaways |
| `example` | `LearningSection` | Syntax-highlighted code & explanation |
| `explore` | `ExploreCard` | Investigation prompt & deep-dive bullet points |
| `question` | `QuestionCard` | Technical question with Explore/Challenge hints & live saved student input |
| `practical` / `activity` | `PracticalTask` | Detailed task blueprint with **6-step student engineering log** |
| `challenge` | `ChallengeCard` | Extension tasks with difficulty indicators |
| `checklist` | `ChecklistCard` | Interactive checkmarks with real-time completion counter |
| `reflection` | `ReflectionCard` | Student journal notes with persistence |
| `code` | `CodeBlock` | Syntax-styled code container with copy button |
| `image` / `video` | `LearningSection` | Responsive media container with captions |
| `callout` | `LearningSection` | Info / Tip / Warning / Important banners |

---

## ⚙️ Key Platform Features

1. **Self-Paced Architecture**: Zero forced deadlines or arbitrary lockout dates. Students can learn, explore, pause, and review freely.
2. **80-Day Milestone Journey**: Visual connecting roadmap communicating progression from Fundamentals → Exploration → Practical Tasks → Mini Projects → Capstone Integration.
3. **Interactive Documentation Log**: Built directly into every practical task (What I built, What I tested, What happened, What went wrong, What I changed, What I learned).
4. **Student Project Portfolio**: Clean portfolio workspace for creating, editing, and archiving hardware/software prototypes with repository and live demo links.
5. **Search**: Global modal (`⌘K` or top navigation) searching modules, days (1–80), projects, and resource libraries.
6. **Milestone Celebrations**: Confetti animations on day completion, module summaries upon finishing 5/5 days, and a full graduation experience upon completing all 80 days.
7. **Local Persistence & Portability**: Automatically syncs progress, answers, logs, and streaks to `localStorage`, with one-click JSON backup export and restore.
