import { Module } from '../../types/learning';

export const module06: Module = {
  id: 'module-06',
  number: 6,
  title: 'Virtual Reality Fundamentals',
  category: 'Spatial Computing & XR (AR/VR)',
  daysRange: 'Days 26–30',
  theme: 'Explore a world that does not physically exist around you.',
  goal: 'Students understand the idea of VR and create a simple virtual environment that a person can explore.',
  bannerImage: '/assets/banners/module-06.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-26',
      dayNumber: 26,
      moduleDayNumber: 1,
      title: 'What Is VR?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Understand the difference between AR and VR, and discover virtual environments through real-world applications.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is Virtual Reality (VR)?',
        },
        {
          type: 'concept',
          title: 'AR vs. VR Distinction',
          items: [
            'AR (Augmented Reality): Adds digital information into the real physical world.',
            'VR (Virtual Reality): Creates a completely digital, simulated environment to explore.',
          ],
        },
        {
          type: 'learning',
          title: 'Familiar VR Applications',
          subtitle: 'Where is VR used today?',
          items: [
            'Immersive virtual games and simulations',
            'Virtual classrooms and remote lecture halls',
            'Virtual museums and art galleries',
            '360° virtual tours of world landmarks',
            'High-stakes training simulations (flight, surgery, fire safety)',
            'Virtual science laboratories with hazardous chemical simulations',
          ],
        },
        {
          type: 'explore',
          title: 'Where Would You Teleport?',
          content: 'If you could visit any place in the universe without physically travelling there, where would you go?',
          items: [
            'Deep space / Surface of Mars',
            'The bottom of the deep ocean trenches',
            'An operating room in a high-tech hospital',
            'An automated semiconductor cleanroom factory',
            'An ancient historical site or pyramid',
          ],
        },
        {
          type: 'reflection',
          title: 'My Virtual Destination',
          content: 'Describe the virtual environment you would most want to explore and what makes it special.',
        },
      ],
    },
    {
      id: 'day-27',
      dayNumber: 27,
      moduleDayNumber: 2,
      title: 'Building a Virtual World',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn the architectural building blocks of a virtual scene: Ground, Walls, Objects, Lights, Camera, and Interactivity.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Anatomy of a Virtual World',
        },
        {
          type: 'concept',
          title: 'The 6 Essential Building Blocks',
          items: [
            'Ground / Floor: The foundational surface plane.',
            'Walls & Boundaries: Defining room enclosures and architecture.',
            'Objects & Props: 3D models populated throughout the space.',
            'Lights: Directional, ambient, and point lights creating depth.',
            'Camera / Viewpoint: The user\'s eyes and perspective in the space.',
            'Interactive Elements: Triggers, clickables, and collision areas.',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: Virtual Room Assembly',
          content: 'Construct a simple virtual room. Place the Floor, set up 4 Walls, position a Table, Chair, Door, and Window, and look around using the virtual camera.',
        },
        {
          type: 'explore',
          title: 'Perspective & Lighting',
          content: 'Notice how moving the light source changes shadows and depth perception inside your virtual room.',
        },
      ],
    },
    {
      id: 'day-28',
      dayNumber: 28,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Answer design inquiries regarding virtual classrooms, labs, tours, safety training, and interactivity.',
      sections: [
        {
          type: 'heading',
          title: 'Virtual Reality Fundamentals Questionnaire',
          subtitle: 'Design your own simulated world and evaluate VR utility.',
        },
        {
          type: 'question',
          question: {
            id: 'm6-d28-q1',
            prompt: 'Question 1 — Your Virtual World: If you could create any virtual environment, what would it be?',
            exploreHint: 'Explore: Why would you choose this specific environment?',
            challengeHint: 'Challenge: Who in the real world would benefit most from visiting it?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm6-d28-q2',
            prompt: 'Question 2 — Virtual Classroom: Imagine a classroom inside VR. What objects should be present?',
            exploreHint: 'Explore: Think beyond conventional tables and chairs (e.g. interactive 3D holographic displays, spatial timelines).',
            challengeHint: 'Challenge: Can one object provide interactive information or launch an experiment when selected?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm6-d28-q3',
            prompt: 'Question 3 — Virtual Laboratory: Imagine students cannot physically enter a chemistry or physics laboratory. How could a virtual laboratory help them?',
            exploreHint: 'Explore: What equipment could they see, hold, or mix safely?',
            challengeHint: 'Challenge: Can you think of an experiment (e.g. dangerous chemical reactions or nuclear physics) that could be demonstrated virtually?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm6-d28-q4',
            prompt: 'Question 4 — Virtual Tour: Imagine you are creating a virtual tour of a famous historical or natural place. What should the visitor be able to do?',
            exploreHint: 'Explore: Think about walking, looking around 360°, selecting artifacts, or listening to audio guides.',
            challengeHint: 'Challenge: Can you add something the visitor cannot normally see or access in a real physical tour?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm6-d28-q5',
            prompt: 'Question 5 — Virtual Training: Imagine a new worker needs to learn how to operate a dangerous industrial machine. How could a virtual environment help them practise?',
            exploreHint: 'Explore: What procedures could the worker practise repeatedly with zero safety risk?',
            challengeHint: 'Challenge: What should happen in the simulation if the worker makes an operational mistake?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm6-d28-q6',
            prompt: 'Question 6 — Make VR Interactive: Imagine a virtual world where everything is only for passive viewing. What could you add to make it engaging and interactive?',
            exploreHint: 'Explore: Think about clickable buttons, pickable objects, avatar movement, spatial sound, or reactive animations.',
            challengeHint: 'Challenge: Can you design one multi-step interaction where doing action A triggers reaction B?',
          },
        },
      ],
    },
    {
      id: 'day-29',
      dayNumber: 29,
      moduleDayNumber: 4,
      title: 'Practical Task: Build a Virtual Environment',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Build a navigable 3D virtual environment with at least 5 objects and 2 interactive elements with info overlays.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Build a Virtual Environment',
        },
        {
          type: 'practical',
          title: 'Task: Build a Virtual Scene',
          practical: {
            objective: 'Students create a simple navigable virtual environment around a chosen real-world theme.',
            materials: [
              'Web-based 3D editor (A-Frame, Spline, Three.js sandbox, or 3D world builder)',
              'Theme Option 1 — Virtual Classroom',
              'Theme Option 2 — Virtual Laboratory',
              'Theme Option 3 — Virtual Museum',
              'Theme Option 4 — Virtual Farm',
              'Theme Option 5 — Virtual Factory',
              'Theme Option 6 — Virtual Space Station',
            ],
            steps: [
              'Select one environment theme.',
              'Set up floor ground plane, walls/sky, and ambient lighting.',
              'Place at least 5 distinct 3D objects in the scene.',
              'Enable navigation or camera orbit view so the user can look around.',
              'Make at least 2 objects interactive (clicking shows details, activates animation, or toggles status).',
            ],
            expectedOutput: 'A functional virtual environment with 5+ objects, 2+ interactive elements, and clear descriptive information displayed upon interaction.',
            challenge: 'Add a second camera viewpoint or a guided walk-through path.',
          },
        },
      ],
    },
    {
      id: 'day-30',
      dayNumber: 30,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Enhance your virtual world with advanced audio, guided tours, or simulated experiments and document your learnings.',
      sections: [
        {
          type: 'heading',
          title: 'Day 30: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Enrich Your Virtual World',
          content: 'Add one high-impact feature to make your virtual environment more useful:',
          items: [
            'Interactive machine with state change (running vs idle)',
            'Floating detailed information panel with diagrams',
            'Audio narration / explanation for objects',
            'Animated moving parts (conveyor belt, fan, robotic arm)',
            'Virtual experiment where user triggers a reaction',
            'Guided virtual tour with step-by-step markers',
            'Interactive control button on a pedestal',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My Virtual World',
          items: [
            'Environment theme chosen and purpose',
            'List of objects included in the environment',
            'Interactive elements implemented',
            'What a user learns by exploring your virtual world',
            'Screenshot / video walkthrough',
            'One major improvement made during building',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Virtual World Build Log',
          content: 'Summarize your virtual environment, the objects placed, interactive features, and how VR enables risk-free training and immersive learning.',
        },
      ],
    },
  ],
};
