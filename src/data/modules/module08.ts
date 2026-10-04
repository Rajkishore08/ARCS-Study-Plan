import { Module } from '../../types/learning';

export const module08: Module = {
  id: 'module-08',
  number: 8,
  title: 'AR/VR Mini Project',
  category: 'Spatial Computing & XR (AR/VR)',
  daysRange: 'Days 36–40',
  theme: 'Build an interactive 3D experience that solves a real problem.',
  goal: 'This capstone spatial computing module unites everything learned in Modules 05–07 into an interactive 3D / AR / VR Minimum Viable Product (MVP).',
  bannerImage: '/assets/banners/module-08.jpg',
  estimatedHours: 8,
  days: [
    {
      id: 'day-36',
      dayNumber: 36,
      moduleDayNumber: 1,
      title: 'From Idea to Experience',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Learn how to translate a concept into an immersive, interactive 3D user experience using the 7-stage pipeline.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: The 7-Stage Experience Pipeline',
        },
        {
          type: 'concept',
          title: 'The Architecture of an Immersive Experience',
          content: 'Problem → User → Environment → Objects → Interaction → Information → Action',
        },
        {
          type: 'example',
          title: 'Concrete Industrial Walkthrough: Smart Factory Twin',
          items: [
            'Problem: Students and apprentice technicians cannot easily understand a complex automated factory.',
            'User: Engineering student or new factory apprentice.',
            'Environment: Virtual modern factory shop floor.',
            'Objects: Robotic arms, conveyor belt, CNC machine, sensor nodes, control panel.',
            'Interaction: User clicks or points at a CNC machine.',
            'Information: Real-time machine operational status, RPM, and temperature.',
            'Action: User understands the assembly process and spots an overheating alert.',
          ],
        },
        {
          type: 'explore',
          title: 'Explore Your Mini Project Vision',
          content: 'Review your insights from Modules 5, 6, and 7. What environment (Factory, Hospital, Farm, Lab, or Space) will serve as the canvas for your project?',
        },
      ],
    },
    {
      id: 'day-37',
      dayNumber: 37,
      moduleDayNumber: 2,
      title: 'Design Your Experience',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Design the full blueprint of your AR/VR Mini Project across all 6 planning dimensions.',
      sections: [
        {
          type: 'heading',
          title: 'Project Blueprint & Spatial Planning',
        },
        {
          type: 'learning',
          title: 'The 6 Core Design Steps',
          subtitle: 'Plan your experience before building:',
          items: [
            'Step 1 — Choose the Problem: What specific real-world challenge are you addressing?',
            'Step 2 — Choose the User: Who will put on the headset or open the application?',
            'Step 3 — Choose the Environment: Where does the virtual or augmented experience happen?',
            'Step 4 — Choose the Objects: What key 3D models and props must exist in the space?',
            'Step 5 — Choose the Interaction: Exactly what happens when the user clicks, moves, or taps?',
            'Step 6 — Choose the Information: What knowledge or feedback should the system explain?',
          ],
        },
        {
          type: 'reflection',
          title: 'My AR/VR MVP Blueprint',
          content: 'Write a brief outline describing your chosen environment, 3 main objects, and what the user will do inside the space.',
        },
      ],
    },
    {
      id: 'day-38',
      dayNumber: 38,
      moduleDayNumber: 3,
      title: 'Project Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Answer comprehensive design, interaction, and state-change inquiries for your AR/VR Mini Project.',
      sections: [
        {
          type: 'heading',
          title: 'AR/VR Mini Project Design Questionnaire',
          subtitle: 'Answer these 8 structured questions to finalize your spatial MVP specification.',
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q1',
            prompt: 'Question 1 — What Problem? What real-world problem will your AR/VR project solve?',
            exploreHint: 'Explore: Why does this problem matter to students, workers, or society?',
            challengeHint: 'Challenge: Can you explain the core value proposition in one clear sentence?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q2',
            prompt: 'Question 2 — Who Is the User? Who will use your experience?',
            exploreHint: 'Explore: Student, teacher, industrial worker, farmer, doctor, museum visitor, etc.',
            challengeHint: 'Challenge: What does this person need to learn, inspect, or accomplish?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q3',
            prompt: 'Question 3 — Where Does It Happen? What environment should the user explore?',
            exploreHint: 'Explore: Classroom, smart farm, automated factory, hospital OR, natural history museum, planetary orbital space, etc.',
            challengeHint: 'Challenge: What are the most important zones or focal points of this environment?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q4',
            prompt: 'Question 4 — What Will the User See? What objects should be inside the environment?',
            exploreHint: 'Explore: List at least five distinct objects.',
            challengeHint: 'Challenge: Which single object is the central hero asset?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q5',
            prompt: 'Question 5 — What Can the User Do? What should happen when the user interacts with an object?',
            exploreHint: 'Explore: Select, rotate, move, open/disassemble, inspect, or activate power.',
            challengeHint: 'Challenge: Can you create more than one distinct interaction?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q6',
            prompt: 'Question 6 — What Will the User Learn? What information should the experience provide?',
            exploreHint: 'Explore: Technical facts, assembly instructions, safety warnings, sensor measurements, live status.',
            challengeHint: 'Challenge: Can the information change dynamically based on which part the user selects?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q7',
            prompt: 'Question 7 — What If Something Changes? Imagine one object in your environment changes (e.g. machine activates, plant needs water, temperature increases, sensor triggers alert). What should the user see?',
            exploreHint: 'Explore: Think about smooth animation, glowing color changes, sound effects, or warning popups.',
            challengeHint: 'Challenge: Can you make the environment respond automatically to the state change?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm8-d38-q8',
            prompt: 'Question 8 — Make It Useful: What is one feature that would make your project more useful in the real world?',
            exploreHint: 'Explore: Think about telemetry dashboards, audio guides, diagnostic logs, step-by-step checklists, or AR camera overlays.',
            challengeHint: 'Challenge: How does your 3D experience bridge digital simulation with real-world physical action?',
          },
        },
      ],
    },
    {
      id: 'day-39',
      dayNumber: 39,
      moduleDayNumber: 4,
      title: 'Practical Task: Build Your AR/VR Mini Project',
      theme: 'Practical Task',
      duration: '75 min',
      objective: 'Assemble and test your working interactive 3D MVP meeting all 6 core requirements.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: AR/VR Mini Project Implementation',
        },
        {
          type: 'practical',
          title: 'Task: Build Your Interactive 3D MVP',
          practical: {
            objective: 'Students build an interactive 3D / AR / VR Minimum Viable Product based on their questionnaire responses.',
            materials: [
              'Web 3D engine (Three.js, WebXR, A-Frame, Spline, or 3D prototyping workspace)',
              'Minimum Requirements Checklist: 1. Clear environment, 2. At least 5 objects, 3. At least 3 interactions, 4. Information display, 5. One changing/animated element, 6. Clear purpose',
            ],
            steps: [
              'Build the primary environment (Farm / Factory / Hospital / Classroom / Museum / Space).',
              'Populate at least 5 distinct 3D objects with proper lighting and scales.',
              'Program at least 3 distinct user interactions (e.g. click machine to inspect, toggle view, trigger test).',
              'Implement the informational UI overlay with title, diagnostic metrics, or instructions.',
              'Add at least one dynamic animated element (rotating part, pulsing sensor, or changing state).',
              'Test the complete walkthrough and document your findings in the engineering log.',
            ],
            expectedOutput: 'A working interactive spatial application where a user can navigate, select multiple objects, view dynamic information, and observe animated state changes.',
            challenge: 'Save your completed build into the Student Project Portfolio (/projects).',
          },
        },
      ],
    },
    {
      id: 'day-40',
      dayNumber: 40,
      moduleDayNumber: 5,
      title: 'Final Challenge + Presentation',
      theme: 'Challenge & Documentation',
      duration: '75 min',
      objective: 'Implement an advanced application feature and deliver the 11-point Final AR/VR MVP Presentation.',
      sections: [
        {
          type: 'heading',
          title: 'Day 40: Capstone Challenge & Final Presentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Polish into a Real-World Application',
          content: 'Add at least one advanced feature to make your prototype feel like an enterprise/production tool:',
          items: [
            'Live / simulated sensor telemetry data stream',
            'Color-coded status indicators & alert badges',
            'Interactive head-up dashboard (HUD)',
            'Multi-camera viewpoints (Top-down, First-person, Machine focus)',
            'Smooth guided walkthrough mode with audio explanations',
            'AR mobile camera placement interaction',
          ],
        },
        {
          type: 'learning',
          title: 'Final AR/VR MVP Presentation Guide',
          subtitle: 'The 11-Point Engineering Reflection:',
          items: [
            '1. Problem: What real-world problem are you solving?',
            '2. User: Who needs this solution?',
            '3. Environment: What environment did you create?',
            '4. Objects: What 3D objects did you include?',
            '5. Interaction: What can the user do inside the experience?',
            '6. Information: What does the system explain or display?',
            '7. Real-World Connection: How could this be used outside the classroom?',
            '8. Experiment: What did you try and test?',
            '9. Problem: What did not work initially during development?',
            '10. Improvement: What did you change to resolve the issue?',
            '11. Future: What would you build next if you had more time?',
          ],
        },
        {
          type: 'concept',
          title: 'First 40 Days Milestone: AI + XR Mastered!',
          content: 'You have completed the entire first half of the ARCS 80-Day Program (Days 1–40):',
          items: [
            'Days 1–20 (Modules 01–04): Artificial Intelligence & Digital Assistants',
            'Days 21–40 (Modules 05–08): Augmented Reality & Virtual Reality Environments',
          ],
        },
        {
          type: 'reflection',
          title: 'Final Presentation & Documentation Log',
          content: 'Record your final AR/VR Mini Project presentation notes covering the 11 points, prototype link, and upload this project to your Student Project Portfolio (/projects)!',
        },
      ],
    },
  ],
};
