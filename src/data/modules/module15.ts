import { Module } from '../../types/learning';

export const module15: Module = {
  id: 'module-15',
  number: 15,
  title: '3D Printing & Digital Fabrication',
  category: '3D Fabrication & Advanced Hardware',
  daysRange: 'Days 71–75',
  theme: 'Turn an idea into a physical object.',
  goal: 'Students understand how digital 3D designs materialize into tangible physical objects through additive manufacturing, following the iterative loop: Problem → Idea → Design → Print → Test → Improve.',
  bannerImage: '/assets/banners/module-15.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-71',
      dayNumber: 71,
      moduleDayNumber: 1,
      title: 'What Is 3D Printing?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Discover additive manufacturing and how digital geometric models are converted layer-by-layer into physical objects.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is 3D Printing?',
        },
        {
          type: 'concept',
          title: 'Additive Manufacturing Principle',
          content: '3D printing allows a digital CAD (Computer-Aided Design) model to be turned into a real, tangible physical object by depositing filament or resin layer by microscopic layer.',
        },
        {
          type: 'learning',
          title: 'Everyday 3D Printed Applications',
          subtitle: 'What can be created with 3D printing?',
          items: [
            'Ergonomic phone and tablet stands with custom viewing angles',
            'Custom tool holders, wrench racks, and workbench organizers',
            'Replacement parts for broken household appliances and toys',
            'Educational tactile models (DNA helix, architectural scale models, planetary orbits)',
            'Modular storage organizers and component bins',
            'Custom machine components and motor brackets for robots',
            'Rapid prototype parts and IoT sensor enclosures',
          ],
        },
        {
          type: 'explore',
          title: 'Functional Object Inquiry',
          content: 'Examine a 3D printed object (or CAD model). What specific physical problem was it created to solve? How is it better than a generic store-bought plastic item?',
        },
        {
          type: 'reflection',
          title: 'Physical Fabrication Thinking',
          content: 'Think of an object in your room that is wobbly, disorganized, or broken. How could a custom 3D printed bracket or clip fix it?',
        },
      ],
    },
    {
      id: 'day-72',
      dayNumber: 72,
      moduleDayNumber: 2,
      title: 'From Idea to Object',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn the 6-stage engineering design pipeline from initial problem definition to final printed part.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: The Digital Fabrication Pipeline',
        },
        {
          type: 'concept',
          title: 'The 6-Step Engineering Workflow',
          content: 'Problem → Design Idea → 3D CAD Model → 3D Print / Slicing → Test & Measure → Improve Iteration',
        },
        {
          type: 'activity',
          title: 'Simple Activity: Ideate a Functional Mini-Object',
          content: 'Choose one small physical object you would like to design to solve an everyday annoyance:',
          items: [
            'Desk cable organizer clip (prevents charging cables from falling behind tables)',
            'Multi-angle mobile phone stand with charging wire passthrough',
            'Snapping sensor holder for an ESP32 or ultrasonic distance sensor',
            'Wall-mounted key and lanyard hook',
            'Custom screw-top storage container for small electronic components',
            'Pen and stylus desktop holder with angled slots',
          ],
        },
      ],
    },
    {
      id: 'day-73',
      dayNumber: 73,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Solve design, dimensional tolerance, structural strength, and IoT/robotics integration questions.',
      sections: [
        {
          type: 'heading',
          title: '3D Printing & Fabrication Questionnaire',
          subtitle: 'Answer these practical product design and CAD modeling questions.',
        },
        {
          type: 'question',
          question: {
            id: 'm15-d73-q1',
            prompt: 'Question 1 — Solve a Problem: What small physical object would make an everyday activity significantly easier for you?',
            exploreHint: 'Explore: What exact frustration or inconvenience does the object solve?',
            challengeHint: 'Challenge: How could you optimize your design to make it smaller, stronger, and use less plastic filament?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm15-d73-q2',
            prompt: 'Question 2 — Design an Object: Imagine you need a sturdy holder for a small electronic device (e.g. phone, micro:bit, or power bank). What geometric features should it have?',
            exploreHint: 'Explore: Think about width, depth, base weight, viewing angle tilt, and cable cutouts.',
            challengeHint: 'Challenge: How can you design the center of gravity and retaining lips so the device never tips over?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm15-d73-q3',
            prompt: 'Question 3 — Replace Something: Imagine a small plastic gear or battery cover in a household device has cracked. How would you design a 3D printed replacement?',
            exploreHint: 'Explore: What precise dimensions (caliper measurements, screw hole spacing, wall thickness) do you need?',
            challengeHint: 'Challenge: What happens if your printed part is 0.5mm too large or too small due to printer shrinkage?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm15-d73-q4',
            prompt: 'Question 4 — Useful for IoT: Imagine you have a sensitive sensor board (like a temperature or soil sensor). What kind of enclosure could you 3D print to mount and protect it?',
            exploreHint: 'Explore: Think about screw mounting lugs, ventilation grates, and weatherproof wire ports.',
            challengeHint: 'Challenge: How can you ensure the plastic enclosure protects the electronics while still allowing ambient air/light to reach the sensing element?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm15-d73-q5',
            prompt: 'Question 5 — Useful for Robotics: Imagine you have a small robotic rover. What physical mechanical component could you 3D print to upgrade it?',
            exploreHint: 'Explore: Think about custom wheel treads, sensor bumper mounts, gripper arms, or chassis battery trays.',
            challengeHint: 'Challenge: How does this custom printed component directly improve the robot’s stability, traction, or functionality?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm15-d73-q6',
            prompt: 'Question 6 — Your 3D Printed Idea: What custom physical object would you like to model and manufacture?',
            exploreHint: 'Explore: Who would use it and where would it be placed?',
            challengeHint: 'Challenge: What physical test would you run on the first print, and how would you iterate on version 2?',
          },
        },
      ],
    },
    {
      id: 'day-74',
      dayNumber: 74,
      moduleDayNumber: 4,
      title: 'Practical Task: Design a Useful 3D Object',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create a 3D CAD model of a functional everyday solution, export an STL file, and prepare it for printing or simulation.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: 3D CAD Modeling',
        },
        {
          type: 'practical',
          title: 'Task: 3D Digital Fabrication Design',
          practical: {
            objective: 'Design a purposeful 3D model using parametric CAD software (Tinkercad, Fusion 360, Onshape, or Blender) and prepare it for physical fabrication.',
            materials: [
              'CAD Software: Tinkercad (free web-based), Onshape, Fusion 360, or Blender',
              'Slicing software (optional): Ultimaker Cura, PrusaSlicer, or Bambu Studio',
              'Candidate Projects: Phone stand, IoT sensor enclosure, Robotics bracket, Cable organizer clip, Modular storage box, Plant label marker, or Tool rack',
            ],
            steps: [
              'Choose your project and measure the physical dimensions needed using a ruler or caliper.',
              'Create the foundational 3D geometric shapes (boxes, cylinders, bevels) in your CAD software.',
              'Add necessary functional features: cutouts for cables, holes for M3 mounting screws, and chamfered edges.',
              'Verify structural integrity (ensure wall thickness is at least 2mm so it will not snap).',
              'Export the final 3D design as an STL or OBJ file.',
              'If a 3D printer is available, slice and print the model; otherwise review the 3D model in a slice preview simulator.',
            ],
            expectedOutput: 'A complete, manifold 3D CAD model (STL file) designed to exact dimensions for physical printing and practical use.',
            challenge: 'Add embossed or debossed text (such as your name, logo, or port labels) onto the surface of the model.',
          },
        },
      ],
    },
    {
      id: 'day-75',
      dayNumber: 75,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Audit your 3D design for strength, material efficiency, and ergonomics, and compile your fabrication report.',
      sections: [
        {
          type: 'heading',
          title: 'Day 75: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Design Optimization & Material Efficiency',
          content: 'Critically evaluate your 3D model across five engineering design checks:',
          items: [
            'Dimensional Fit: Is it too tight or too loose for the device it holds?',
            'Structural Strength: Will it withstand mechanical pressure or dropping without cracking along layer lines?',
            'Ergonomics & Ease of Use: Can a user insert and remove cables or devices effortlessly with one hand?',
            'Filament Conservation: Can you add hollow cutouts or reduce wall thickness to save 30% print time and material?',
            'Printability: Does the design avoid steep unsupported overhangs (>45°) so it prints cleanly without messy support waste?',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My 3D Printed Solution',
          items: [
            'Real-world Problem addressed & user need',
            'Object Name & functional specifications',
            'CAD Design software used & geometric modeling approach',
            'Exact dimensions (Length × Width × Height in mm)',
            'Digital 3D CAD screenshot / 3D model render',
            'Printed object photo / test fit result (if printer available)',
            'Design revisions & improvements made for Version 2',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: 3D Fabrication Engineering Log',
          content: 'Document your CAD modeling journey, dimensional measurements, slicing settings (infill %, layer height), test fit results, and how digital fabrication empowers inventors.',
        },
      ],
    },
  ],
};
