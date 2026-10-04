import { Module } from '../../types/learning';

export const module04: Module = {
  id: 'module-04',
  number: 4,
  title: 'AI Mini Project',
  category: 'Artificial Intelligence',
  daysRange: 'Days 16–20',
  theme: 'Turn an idea into a small working AI experience.',
  goal: 'This capstone AI module brings together what students learned in Modules 1–3 to design, build, test, and present a complete working AI MVP.',
  bannerImage: '/assets/banners/module-04.jpg',
  estimatedHours: 8,
  days: [
    {
      id: 'day-16',
      dayNumber: 16,
      moduleDayNumber: 1,
      title: 'From Idea to Project',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Learn how to structure a complete AI project pipeline from user problem down to concrete user action.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: The End-to-End Project Structure',
        },
        {
          type: 'concept',
          title: 'The 6-Step Project Flow',
          content: 'Problem → User → Input → AI Engine → Output → Action',
        },
        {
          type: 'example',
          title: 'Concrete Project Walkthrough: Study Helper',
          items: [
            'Problem: Students have difficulty understanding difficult concepts in complex textbooks.',
            'User: High school or college student.',
            'Input: Student\'s typed question or uploaded textbook passage.',
            'AI: Explains the topic using analogies and simplified language.',
            'Output: Simple explanation formatted in 3 key bullet points.',
            'Action: Student grasps the concept and solves the homework problem.',
          ],
        },
        {
          type: 'explore',
          title: 'Explore Your Project Direction',
          content: 'Review your notes from Modules 1, 2, and 3. Which topic sparked the most excitement for you? Recognition, chat assistance, or recommendation?',
        },
      ],
    },
    {
      id: 'day-17',
      dayNumber: 17,
      moduleDayNumber: 2,
      title: 'Design Your AI Idea',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Define the scope and specifications for your AI Mini Project using the 5 core planning questions.',
      sections: [
        {
          type: 'heading',
          title: 'Project Blueprint & Planning',
        },
        {
          type: 'learning',
          title: 'The 5 Project Planning Questions',
          subtitle: 'Answer these before writing code or prompts:',
          items: [
            '1. What problem are you solving?',
            '2. Who will use it?',
            '3. What information will the user provide (text, image, voice, options)?',
            '4. What should the AI do with that information?',
            '5. What should the user see at the end?',
          ],
        },
        {
          type: 'explore',
          title: 'Prototype Scope Guard',
          content: 'Keep the prototype focused. It is better to build a small AI experience that works reliably than a massive project that fails.',
        },
        {
          type: 'reflection',
          title: 'My AI Project Proposal',
          content: 'Write a 2-sentence summary of what your AI Mini Project will do and who it is for.',
        },
      ],
    },
    {
      id: 'day-18',
      dayNumber: 18,
      moduleDayNumber: 3,
      title: 'Project Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Answer comprehensive design and resilience questions for your AI Mini Project.',
      sections: [
        {
          type: 'heading',
          title: 'AI Mini Project Design Questionnaire',
          subtitle: 'Define the detailed parameters of your AI solution.',
        },
        {
          type: 'question',
          question: {
            id: 'm4-d18-q1',
            prompt: 'Question 1 — Your Problem: What problem would you like your project to solve?',
            exploreHint: 'Explore: Why is this problem important to you?',
            challengeHint: 'Challenge: Can you explain the problem in one simple sentence?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm4-d18-q2',
            prompt: 'Question 2 — Your User: Who would use your project?',
            exploreHint: 'Explore: Think about a student, teacher, farmer, doctor, shopkeeper, worker, etc.',
            challengeHint: 'Challenge: What would this person expect from your project?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm4-d18-q3',
            prompt: 'Question 3 — Your Input: What information will the user give your system?',
            exploreHint: 'Explore: Could it be text, voice, image, number, or a choice?',
            challengeHint: 'Challenge: Can your system accept more than one type of input?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm4-d18-q4',
            prompt: 'Question 4 — Your AI: What should the AI do with the information?',
            exploreHint: 'Explore: Should it recognize, answer, explain, generate, classify, or recommend something?',
            challengeHint: 'Challenge: Can you describe what the AI should do in one sentence?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm4-d18-q5',
            prompt: 'Question 5 — Your Output: What should the user see after the AI processes the information?',
            exploreHint: 'Explore: Think about text, image, sound, score, recommendation, or another result.',
            challengeHint: 'Challenge: Can you make the result easier for the user to understand?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm4-d18-q6',
            prompt: 'Question 6 — What If It Goes Wrong? Imagine the AI gives the wrong answer. What should your application do?',
            exploreHint: 'Explore: Should it ask the user another clarifying question or show a friendly warning?',
            challengeHint: 'Challenge: Can you design a way for the user to report the mistake?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm4-d18-q7',
            prompt: 'Question 7 — Make It Better: What is one feature you would like to add to your project?',
            exploreHint: 'Explore: Think about voice, animation, images, history, score, or another interaction.',
            challengeHint: 'Challenge: Which feature would make the project more useful?',
          },
        },
      ],
    },
    {
      id: 'day-19',
      dayNumber: 19,
      moduleDayNumber: 4,
      title: 'Practical Task: Build Your AI Mini Project',
      theme: 'Practical Task',
      duration: '75 min',
      objective: 'Assemble and test your working AI Minimum Viable Product (MVP).',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: AI Mini Project Build',
        },
        {
          type: 'practical',
          title: 'Task: AI Mini Project Implementation',
          practical: {
            objective: 'Students build a small working prototype based on their questionnaire responses.',
            materials: [
              'Project ideas: AI Study Assistant, AI Quiz Generator, AI Image Recognition, AI Voice Assistant, AI Recommendation System, AI Information Assistant, AI Problem Solver',
              'Prototyping software / code workspace',
            ],
            steps: [
              'Implement the user input interface (text box, camera feed, or buttons).',
              'Connect input to your AI engine or prompt pipeline.',
              'Format the output so it is clean, legible, and easy to read.',
              'Test the complete interaction: User → Input → AI → Result → User Action.',
              'Document testing observations in your engineering log below.',
            ],
            expectedOutput: 'A working AI MVP that solves one clear problem, accepts input, uses an AI capability, and produces a visible, interactive result.',
            challenge: 'Save your completed build into the Student Project Workspace (/projects).',
          },
        },
      ],
    },
    {
      id: 'day-20',
      dayNumber: 20,
      moduleDayNumber: 5,
      title: 'Final Challenge + Presentation',
      theme: 'Challenge & Documentation',
      duration: '75 min',
      objective: 'Refine your project with a major enhancement and complete the 10-point Final Project Presentation.',
      sections: [
        {
          type: 'heading',
          title: 'Day 20: Capstone Challenge & Final Presentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Make Your Project More Useful',
          content: 'Select one major improvement to implement before final presentation:',
          items: [
            'Can you make it easier to use?',
            'Can you add voice or speech?',
            'Can you add image recognition?',
            'Can you make it remember previous questions?',
            'Can you make the result easier to understand?',
            'Can you add an interactive visual interface?',
          ],
        },
        {
          type: 'learning',
          title: 'Final Project Presentation Guide',
          subtitle: 'The 10-Point Engineering Reflection:',
          items: [
            '1. Problem: What problem did you identify?',
            '2. User: Who is going to use your solution?',
            '3. Solution: What did you build?',
            '4. AI: Where is AI being used?',
            '5. Input: What does the user provide?',
            '6. Output: What does the system produce?',
            '7. Experiment: What did you test?',
            '8. Problem Encountered: What did not work initially?',
            '9. Improvement: What did you change to fix it?',
            '10. Future Idea: What would you add if you had more time?',
          ],
        },
        {
          type: 'concept',
          title: 'First 20 Days AI Milestone Summary',
          content: 'Congratulations on completing the Artificial Intelligence foundation track! Here is your progression summary:',
          items: [
            'Module 01 (Days 1–5): AI Fundamentals → AI Recognition Experiment',
            'Module 02 (Days 6–10): AI Interaction → Digital Assistant Prototype',
            'Module 03 (Days 11–15): AI Applications → AI Problem Solver',
            'Module 04 (Days 16–20): AI Mini Project → Working AI MVP',
          ],
        },
        {
          type: 'reflection',
          title: 'Final Presentation & Documentation Log',
          content: 'Record your final project presentation notes covering problem, user, solution, bugs encountered, and future ideas. Add this project to your Student Project Portfolio (/projects)!',
        },
      ],
    },
  ],
};
