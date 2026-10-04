import { Module } from '../../types/learning';

export const module07: Module = {
  id: 'module-07',
  number: 7,
  title: 'AR + VR for Real-World Applications',
  category: 'Spatial Computing & XR (AR/VR)',
  daysRange: 'Days 31–35',
  theme: 'Use AR and VR to understand, learn, train, and explore.',
  goal: 'This module is where students begin connecting immersive technology with real-world and industrial problems across sectors.',
  bannerImage: '/assets/banners/module-07.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-31',
      dayNumber: 31,
      moduleDayNumber: 1,
      title: 'AR/VR Beyond Games',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Discover high-impact applications of AR/VR across industry, healthcare, safety, and infrastructure.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Industrial & Professional XR',
        },
        {
          type: 'learning',
          title: 'Real-World Immersive Applications',
          subtitle: 'Where do AR and VR create true value?',
          items: [
            'Education: 3D interactive learning models and virtual laboratories.',
            'Healthcare: Anatomical body systems and surgery/medical training simulations.',
            'Manufacturing: Industrial machine training, maintenance overlays, and digital twins.',
            'Agriculture: Farm 3D visualization and real-time crop sensor telemetry.',
            'Construction & Architecture: Building visualization, structural walkthroughs before building.',
            'Tourism & Heritage: 360° virtual tours of inaccessible monuments.',
            'Safety & Emergency Response: Training for hazardous or dangerous situations without risk.',
          ],
        },
        {
          type: 'explore',
          title: 'The Spatial Advantage',
          content: 'Why would an engineer, doctor, or student use AR or VR instead of simply looking at a flat 2D picture or reading a textbook?',
          items: [
            'Spatial depth and scale comprehension',
            'Safe trial-and-error without physical cost or danger',
            'Interactive cause-and-effect understanding',
            'Overlaying live context directly where work happens',
          ],
        },
        {
          type: 'reflection',
          title: 'My Industry Observations',
          content: 'Which real-world sector do you think benefits the most from immersive 3D technology and why?',
        },
      ],
    },
    {
      id: 'day-32',
      dayNumber: 32,
      moduleDayNumber: 2,
      title: 'Learn, Train, and Understand',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Understand the specific roles of AR, VR, and 3D in solving real-world learning and training challenges.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: The Three Immersive Modalities',
        },
        {
          type: 'concept',
          title: 'Comparing the Purposes',
          items: [
            'AR (Augmented Reality): See live operational information while looking at the real physical object or machine.',
            'VR (Virtual Reality): Enter a fully simulated virtual environment to explore or practice safely before going on-site.',
            'Interactive 3D: Understand spatial parts and mechanisms by rotating, disassembling, and manipulating them.',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Scenario: Factory Machine Training',
          content: 'Imagine a worker needs to learn how to operate a complex, high-voltage packaging machine.',
          items: [
            'How could VR help? The worker practices the entire startup routine in a simulation with no danger of electrocution.',
            'How could AR help? When standing in front of the real machine, AR highlights the exact green start valve and displays current pressure.',
            'What would the worker see in both cases?',
          ],
        },
      ],
    },
    {
      id: 'day-33',
      dayNumber: 33,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Evaluate trade-offs between AR and VR for machines, medicine, farming, manufacturing, and hazard safety.',
      sections: [
        {
          type: 'heading',
          title: 'Real-World Immersive Applications Questionnaire',
          subtitle: 'Answer these industry application questions to design your XR solution.',
        },
        {
          type: 'question',
          question: {
            id: 'm7-d33-q1',
            prompt: 'Question 1 — AR or VR? Imagine students need to learn about a large machine. Would it be more useful to see information overlaid on the real machine, or explore the machine in a virtual environment?',
            exploreHint: 'Explore: What information would students need in each case?',
            challengeHint: 'Challenge: Can both AR and VR be used together (e.g. VR for practice first, AR for on-site execution)?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm7-d33-q2',
            prompt: 'Question 2 — Machine Training: Imagine a worker is learning how to operate a machine. What should the system show first?',
            exploreHint: 'Explore: Think about machine parts, startup instructions, safety warnings, or controls.',
            challengeHint: 'Challenge: Can you create a step-by-step training sequence from power-on to safe shutdown?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm7-d33-q3',
            prompt: 'Question 3 — Medical Learning: Imagine students are learning about the human body. What could they understand better using a 3D model?',
            exploreHint: 'Explore: Think about organs, bones, blood circulation pathways, or interconnected nervous systems.',
            challengeHint: 'Challenge: Can you design one specific interaction for learning about a specific organ (e.g. inflating lungs)?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm7-d33-q4',
            prompt: 'Question 4 — Smart Farming: Imagine a farmer wants to understand what is happening across an entire agricultural field. How could a 3D or AR system help?',
            exploreHint: 'Explore: Think about crops, soil health, moisture levels, weather forecasts, or irrigation lines.',
            challengeHint: 'Challenge: What specific diagnostic data could appear when the farmer points at or selects a crop?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm7-d33-q5',
            prompt: 'Question 5 — Factory Training: Imagine a new worker enters an industrial factory for the first time. How could VR help them learn before entering the physical floor?',
            exploreHint: 'Explore: Think about machine locations, designated forklift safety walkways, and emergency exits.',
            challengeHint: 'Challenge: Can you design a virtual orientation scenario where the worker finds all fire extinguishers?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm7-d33-q6',
            prompt: 'Question 6 — Dangerous Situation: Imagine students or workers need to learn what to do during a dangerous situation (e.g. chemical spill, fire, earthquake). Why is VR ideal?',
            exploreHint: 'Explore: Think about situations that are too dangerous, expensive, or destructive to practice in real life.',
            challengeHint: 'Challenge: What feedback should happen in the simulation when the user makes a critical error?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm7-d33-q7',
            prompt: 'Question 7 — Your Idea: Choose one real-world problem where AR or VR could help people learn, train, or inspect. What would you create?',
            exploreHint: 'Explore: Who would use your application?',
            challengeHint: 'Challenge: What key objects and interactive actions would the user be able to perform?',
          },
        },
      ],
    },
    {
      id: 'day-34',
      dayNumber: 34,
      moduleDayNumber: 4,
      title: 'Practical Task: Create an AR/VR Application Idea',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create a working interactive prototype solving an applied real-world problem from your questionnaire.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Build an Applied XR Prototype',
        },
        {
          type: 'practical',
          title: 'Task: Applied AR/VR Prototype',
          practical: {
            objective: 'Students choose one real-world problem from their questionnaire and create a focused interactive 3D prototype.',
            materials: [
              'Web 3D viewer / AR overlay tool / VR scene environment',
              'Project Option 1 — Virtual Machine Training: User explores an industrial machine and inspects components.',
              'Project Option 2 — Human Body Explorer: User selects an anatomical organ and views vital functions.',
              'Project Option 3 — Smart Farm Explorer: User surveys a virtual farm and checks plant moisture levels.',
              'Project Option 4 — Virtual Museum: User navigates gallery exhibits and explores cultural history.',
              'Project Option 5 — Factory Safety Training: User navigates a shop floor and identifies hazard zones.',
              'Project Option 6 — Space Explorer: User tours planetary orbits and explores astronomical facts.',
            ],
            steps: [
              'Select one real-world project use-case.',
              'Build the main environment and primary focal object/machine.',
              'Program object click/selection triggers.',
              'Display functional information, metrics, or diagnostic text upon selection.',
              'Test that user interaction produces clear, actionable feedback.',
            ],
            expectedOutput: 'A working interactive 3D application demonstrating real-world utility (e.g. selecting machine part shows function and operating temperature).',
            challenge: 'Add color-coded status indicators (Green = OK, Yellow = Warning, Red = Fault).',
          },
        },
      ],
    },
    {
      id: 'day-35',
      dayNumber: 35,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Add contextual real-world interactions (telemetry, condition, warnings) and complete your solution documentation.',
      sections: [
        {
          type: 'heading',
          title: 'Day 35: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Real-World Contextual Trigger',
          content: 'Add at least one responsive real-world interaction to your prototype:',
          items: [
            'Select a machine part → show its mechanical function & maintenance guide',
            'Select a crop/plant → show its soil condition & hydration status',
            'Select an organ → show its biological function & pulse rate',
            'Select a safety area → trigger an animated hazard warning',
            'Select a planet → show gravitational data & atmosphere composition',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My AR/VR Solution',
          items: [
            'Real-world problem addressed',
            'Target user and industry setting',
            'Environment created and primary objects',
            'Interactive mechanisms implemented',
            'Information and telemetry provided',
            'Why AR/VR was the best tool for this solution',
            'Screenshot / recording link & future enhancements',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Real-World XR Solution Log',
          content: 'Record your solution details, why spatial interaction beats 2D media for this use case, and how your application can be scaled for real workers or students.',
        },
      ],
    },
  ],
};
