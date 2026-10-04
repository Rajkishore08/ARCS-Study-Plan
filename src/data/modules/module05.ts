import { Module } from '../../types/learning';

export const module05: Module = {
  id: 'module-05',
  number: 5,
  title: 'Augmented Reality Fundamentals',
  category: 'Spatial Computing & XR (AR/VR)',
  daysRange: 'Days 21–25',
  theme: 'Bring digital information into the real world.',
  goal: 'Students understand the basic idea of AR and explore how digital objects can appear, move, and interact with the real world. Students do not need prior knowledge of 3D, AR, programming, or game development.',
  bannerImage: '/assets/banners/module-05.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-21',
      dayNumber: 21,
      moduleDayNumber: 1,
      title: 'What Is AR?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Understand the core concept of Augmented Reality: Real World + Digital Information = Augmented Reality.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is Augmented Reality (AR)?',
        },
        {
          type: 'concept',
          title: 'The Core Formula',
          content: 'Real World + Digital Information = Augmented Reality',
        },
        {
          type: 'learning',
          title: 'Familiar AR Examples',
          subtitle: 'Where do you see AR today?',
          items: [
            'Seeing a virtual object through a phone camera',
            'Face filters on social media and video apps',
            'AR games (like finding creatures in physical parks)',
            'Trying furniture inside a real room before buying',
            'Interactive 3D learning models in textbooks',
            'Navigation overlays and walking directions on streets',
          ],
        },
        {
          type: 'explore',
          title: 'Imagine Digital Placement',
          content: 'If you could place any digital object in the real world, what would you place?',
          items: [
            'A sports car',
            'A rotating planet',
            'A beating human heart',
            'A wild animal',
            'A complex mechanical engine',
            'A historic architectural building',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: Classroom AR Vision',
          content: 'Look around your room or table right now. Imagine placing a fully interactive 3D model of the Solar System right on your desk. What would you inspect first?',
        },
        {
          type: 'reflection',
          title: 'My AR Placement Idea',
          content: 'What digital object would you place in your physical environment and why?',
        },
      ],
    },
    {
      id: 'day-22',
      dayNumber: 22,
      moduleDayNumber: 2,
      title: 'Exploring 3D Objects',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn foundational 3D spatial properties: Object, Shape, Size, Position, Rotation, and Movement.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: How 3D Objects Work in Space',
        },
        {
          type: 'concept',
          title: 'The 6 Core 3D Concepts',
          items: [
            'Object: The entity or model created in 3D space.',
            'Shape: The geometry, mesh, and contours of the model.',
            'Size: Scaling the object (small, life-size, huge).',
            'Position: Coordinates (X, Y, Z) in the physical room.',
            'Rotation: Tilting and turning around axes (pitch, yaw, roll).',
            'Movement: Translating and animating across space.',
          ],
        },
        {
          type: 'explore',
          title: 'Interactive 3D Manipulation',
          content: 'When interacting with a 3D model, practice these fundamental interactions:',
          items: [
            'Rotate it to see all sides and angles',
            'Move it across the spatial surface',
            'Zoom in and out to inspect fine details',
            'Select individual components',
            'View annotations and metadata overlays',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: 3D Inspection',
          content: 'Pick an object category (Cube, Car, Human heart, Planet, Tree, or Industrial machine) and explore how manipulating rotation and scale reveals insights impossible with 2D photos.',
        },
      ],
    },
    {
      id: 'day-23',
      dayNumber: 23,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Analyze AR interactions, 3D manipulation, education in AR, games, and industrial repair assistance.',
      sections: [
        {
          type: 'heading',
          title: 'Augmented Reality Fundamentals Questionnaire',
          subtitle: 'Answer these design questions about spatial digital interaction.',
        },
        {
          type: 'question',
          question: {
            id: 'm5-d23-q1',
            prompt: 'Question 1 — Digital Object in the Real World: Imagine you could place one digital object on your classroom table. What would you place there?',
            exploreHint: 'Explore: Why would you choose that specific object?',
            challengeHint: 'Challenge: What information or live telemetry could the object show?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm5-d23-q2',
            prompt: 'Question 2 — Explore an Object: Imagine you are looking at a 3D model of a car. What would you like to do with the model?',
            exploreHint: 'Explore: Think about rotating, zooming, opening doors/hood, or selecting engine parts.',
            challengeHint: 'Challenge: Can you think of one interaction that would help someone understand how the car works better?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm5-d23-q3',
            prompt: 'Question 3 — Learn Through AR: Imagine a student is learning about the human heart. Would seeing a 3D heart help the student understand it?',
            exploreHint: 'Explore: What could the student interact with (valves, blood flow, heartbeats)?',
            challengeHint: 'Challenge: Can you think of information that could appear when a part of the heart is selected?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm5-d23-q4',
            prompt: 'Question 4 — AR Around You: Imagine your school has an AR application. What could students point their phones at to learn something?',
            exploreHint: 'Explore: Think about classrooms, buildings, lab machines, plants in the garden, posters, or textbooks.',
            challengeHint: 'Challenge: Can you design one useful AR interaction that makes learning interactive?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm5-d23-q5',
            prompt: 'Question 5 — AR Game: Imagine a game where digital objects appear around you in the room. What kind of game would you create?',
            exploreHint: 'Explore: Think about collecting objects, finding hidden clues, solving puzzles, or defending a base.',
            challengeHint: 'Challenge: What mechanic would make the game more exciting or active?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm5-d23-q6',
            prompt: 'Question 6 — AR for Work: Imagine a technician or worker is repairing a complex machine. How could AR help the worker?',
            exploreHint: 'Explore: Think about step-by-step instructions, highlighted machine parts, safety warnings, or live sensor readings.',
            challengeHint: 'Challenge: What specific information should appear when the worker selects or points at a faulty machine part?',
          },
        },
      ],
    },
    {
      id: 'day-24',
      dayNumber: 24,
      moduleDayNumber: 4,
      title: 'Practical Task: Explore a 3D World',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create or explore a simple interactive 3D scene containing at least 3 objects with selection, info display, and interaction.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Explore a 3D World',
        },
        {
          type: 'practical',
          title: 'Task: Explore a 3D Scene',
          practical: {
            objective: 'Students create or explore a simple interactive 3D scene containing at least three objects.',
            materials: [
              '3D scene builder / WebGL viewer / 3D model repository',
              'Theme Option 1 — Space: Sun, Earth, Moon',
              'Theme Option 2 — Classroom: Table, Chair, Board',
              'Theme Option 3 — Farm: Tree, Water tank, Plant',
              'Theme Option 4 — Human Body: Heart, Lungs, Brain',
            ],
            steps: [
              'Load or view the interactive 3D scene.',
              'Inspect and position at least 3 distinct objects.',
              'Select an object in the scene.',
              'Display its name and one piece of informational text.',
              'Perform one interactive transformation (e.g. rotate, scale, or animate).',
            ],
            expectedOutput: 'A 3D scene with 3 objects where clicking/selecting an object reveals its name, descriptive info, and triggers an interaction.',
            challenge: 'Add a camera reset button or dual-axis rotation control.',
          },
        },
      ],
    },
    {
      id: 'day-25',
      dayNumber: 25,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Enhance your 3D scene with animation, sound, or info panels and complete your Interactive 3D World documentation.',
      sections: [
        {
          type: 'heading',
          title: 'Day 25: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Level Up Your 3D Scene',
          content: 'Improve your 3D scene by adding one or more advanced features:',
          items: [
            'Object continuous animation (e.g. orbital rotation, beating motion)',
            'Multi-axis user rotation controls',
            'Interactive floating information panel',
            'Spatial audio or click sound effects',
            'Multiple objects with relational hierarchy',
            'Object outline / glow highlighting on hover',
            'Smooth camera focus transitions',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My Interactive 3D World',
          items: [
            'What you created and its theme',
            'Objects included in the 3D scene',
            'Interactive actions supported',
            'Information overlays shown to the user',
            'Key learnings about spatial coordinates and 3D meshes',
            'Screenshot / recording link',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Interactive 3D World Log',
          content: 'Record your 3D scene details, objects placed, user interactions, and how 3D visual models improve comprehension over 2D images.',
        },
      ],
    },
  ],
};
