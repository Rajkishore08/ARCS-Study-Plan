import { Module } from '../../types/learning';

export const module02: Module = {
  id: 'module-02',
  number: 2,
  title: 'AI Interaction & Digital Assistants',
  category: 'Artificial Intelligence',
  daysRange: 'Days 6–10',
  theme: 'Make a computer understand and respond to people.',
  goal: 'Students explore how people can communicate with computers using text and voice.',
  bannerImage: '/assets/banners/module-02.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-06',
      dayNumber: 6,
      moduleDayNumber: 1,
      title: 'Talking to Computers',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Explore how humans communicate with computers using text and voice commands through digital assistants and chatbots.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Talking to Computers',
        },
        {
          type: 'learning',
          title: 'Familiar Interaction Examples',
          subtitle: 'Where do we talk to computers?',
          items: [
            'Chatbots on websites and apps',
            'Voice assistants (Siri, Alexa, Google Assistant)',
            'AI search engines',
            'Customer support bots',
            'AI study assistants and tutors',
          ],
        },
        {
          type: 'concept',
          title: 'The Simple Interaction Flow',
          content: 'Person → Question / Command → AI System → Response',
        },
        {
          type: 'explore',
          title: 'Imagine Your Digital Assistant',
          content: 'If you could have a digital assistant, what would you ask it to do?',
          items: [
            'Explain a difficult lesson',
            'Tell an engaging story',
            'Answer curious science questions',
            'Give directions and navigation',
            'Help organize homework and study schedules',
          ],
        },
        {
          type: 'reflection',
          title: 'My Dream Assistant',
          content: 'What is the number one thing you would want a personal digital assistant to do for you?',
        },
      ],
    },
    {
      id: 'day-07',
      dayNumber: 7,
      moduleDayNumber: 2,
      title: 'Asking Better Questions',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Experiment with prompt phrasing to see how changing a question changes the clarity and quality of the AI answer.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: How You Ask Changes the Answer',
        },
        {
          type: 'concept',
          title: 'Question Comparison',
          content: 'Notice the difference in clarity between general and specific prompts:',
        },
        {
          type: 'example',
          title: 'General vs Specific Question',
          items: [
            'General: "Tell me about plants."',
            'Specific & Clear: "Explain why plants need sunlight using simple words."',
          ],
        },
        {
          type: 'explore',
          title: 'Explore Prompt Variations',
          content: 'Ask an AI or test different versions of the same question. Notice how adding constraints (like "in 3 sentences" or "for a beginner") changes the output.',
        },
        {
          type: 'challenge',
          title: 'Challenge: Specific Output',
          content: 'Can you create a question that gives you a specific type of answer? For example: "Explain the water cycle in 5 simple points."',
        },
      ],
    },
    {
      id: 'day-08',
      dayNumber: 8,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Analyze digital assistant design, question phrasing, personalities, voice commands, and memory.',
      sections: [
        {
          type: 'heading',
          title: 'AI Interaction Questionnaire',
          subtitle: 'Answer the following design questions for your digital assistant.',
        },
        {
          type: 'question',
          question: {
            id: 'm2-d8-q1',
            prompt: 'Question 1 — Digital Assistant: Imagine you have your own digital assistant. What is one problem you would like it to help you solve?',
            exploreHint: 'Explore: Think about something you do regularly.',
            challengeHint: 'Challenge: Can you think of three different things the assistant could help with?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm2-d8-q2',
            prompt: 'Question 2 — Ask and Answer: If you ask "What is photosynthesis?", what kind of answer would you expect?',
            exploreHint: 'Explore: Try asking the question in a different way.',
            challengeHint: 'Challenge: Can you ask the AI to explain it to a younger student?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm2-d8-q3',
            prompt: 'Question 3 — AI Personality: Imagine your digital assistant has a personality. How would you like it to communicate with you?',
            exploreHint: 'Explore: Friendly, serious, funny, teacher-like, etc.',
            challengeHint: 'Challenge: Can you describe the personality in a few sentences?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm2-d8-q4',
            prompt: 'Question 4 — Voice Assistant: Imagine saying "Start the classroom presentation." What should the computer do after hearing the command?',
            exploreHint: 'Explore: Think of three more voice commands.',
            challengeHint: 'Challenge: What should happen if the computer does not understand the command?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm2-d8-q5',
            prompt: 'Question 5 — Remembering Information: Imagine you tell your assistant "My favourite subject is science." Later you ask "What is my favourite subject?" What would you expect the assistant to do?',
            exploreHint: 'Explore: Think of other information an assistant could remember.',
            challengeHint: 'Challenge: Why might remembering information be useful?',
          },
        },
      ],
    },
    {
      id: 'day-09',
      dayNumber: 9,
      moduleDayNumber: 4,
      title: 'Practical Task: Build Your Digital Assistant',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create a simple chatbot or AI assistant around a chosen topic that accepts questions and produces structured answers.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Build Your Digital Assistant',
        },
        {
          type: 'practical',
          title: 'Task: Build Your Digital Assistant',
          practical: {
            objective: 'Students create a simple chatbot or AI assistant around a topic they understand.',
            materials: [
              'No-code chatbot builder / scratch script / AI prompt workspace',
              'Topic ideas: School, Science, Sports, Animals, Space, Agriculture, Health education, Local culture',
            ],
            steps: [
              'Give your assistant a memorable name.',
              'Choose a specific subject area (e.g. Space Facts or Plant Care).',
              'Set up greeting and welcome message.',
              'Test that it accepts a question from a user.',
              'Ensure it gives clear answers and responds differently to different questions.',
            ],
            expectedOutput: 'A working assistant prototype with name, custom knowledge/personality, and verified sample dialogue.',
            challenge: 'Add a custom personality, voice, or conversation history tracking.',
          },
        },
      ],
    },
    {
      id: 'day-10',
      dayNumber: 10,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Enhance your digital assistant with voice, personality, or extra subject knowledge and document your engineering process.',
      sections: [
        {
          type: 'heading',
          title: 'Day 10: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Make the assistant more useful',
          content: 'Choose one or more improvements to level up your digital assistant:',
          items: [
            'Add voice interaction or audio prompts',
            'Add more varied questions and answer branches',
            'Add a special personality (humorous, scholarly, encouraging)',
            'Make it remember simple user preferences or names',
            'Make it answer questions about a specific specialized subject',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My Digital Assistant',
          items: [
            'Assistant name & purpose',
            'List of questions tested',
            'Example conversation transcript',
            'What worked well',
            'What did not work (limitations/bugs)',
            'Improvements made',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation & Reflection',
          content: 'Summarize your digital assistant project, example dialogue, and how you improved its responses.',
        },
      ],
    },
  ],
};
