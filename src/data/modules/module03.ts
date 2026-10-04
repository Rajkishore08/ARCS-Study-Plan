import { Module } from '../../types/learning';

export const module03: Module = {
  id: 'module-03',
  number: 3,
  title: 'AI in Everyday Applications',
  category: 'Artificial Intelligence',
  daysRange: 'Days 11–15',
  theme: 'Find a real problem and use AI to help solve it.',
  goal: 'Students move from "What is AI?" to "Where can AI be useful?" They explore simple applications of AI in everyday life and industry.',
  bannerImage: '/assets/banners/module-03.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-11',
      dayNumber: 11,
      moduleDayNumber: 1,
      title: 'Where Can AI Help?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Discover real-world applications of AI across education, healthcare, agriculture, business, and manufacturing.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Real-World Industry Applications',
        },
        {
          type: 'learning',
          title: 'AI Across Sectors',
          subtitle: 'Where is AI deployed today?',
          items: [
            'Education: Personalised learning, quiz generation, automated study assistants',
            'Healthcare: Medical image analysis, patient assistance, symptom information systems',
            'Agriculture: Plant health monitoring, crop analysis, weather-based irrigation decisions',
            'Business: Customer support, product recommendations, document processing',
            'Manufacturing: Quality checking, visual defect detection, predictive maintenance',
          ],
        },
        {
          type: 'explore',
          title: 'Explore Everyday Friction',
          content: 'Look around your home, school, farm, or neighborhood. What problem around you takes a lot of manual time, repetitive effort, or human attention?',
        },
        {
          type: 'reflection',
          title: 'Problem Brainstorming',
          content: 'Jot down 2 or 3 real-world situations you noticed that could benefit from an automated helper or pattern recognition.',
        },
      ],
    },
    {
      id: 'day-12',
      dayNumber: 12,
      moduleDayNumber: 2,
      title: 'Problem → AI → Solution',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn the 5-step problem solving framework: Problem → Information → AI → Result → Action.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: The 5-Step Solution Framework',
        },
        {
          type: 'concept',
          title: 'The Architecture',
          content: 'Problem → Information (Data) → AI Analysis → Result (Prediction) → Human Action',
        },
        {
          type: 'example',
          title: 'Concrete Example: Agriculture / Plant Care',
          items: [
            'Problem: Crops or house plants may not get enough water.',
            'Information: Photograph of leaf or soil moisture sensor reading.',
            'AI: Analyzes color, dryness, and visual patterns.',
            'Result: AI predicts plant needs water and shows confidence score.',
            'Action: Person receives alert and waters the plant.',
          ],
        },
        {
          type: 'explore',
          title: 'Explore Your Own Pipeline',
          content: 'Take one problem you identified yesterday and map it through this exact 5-step framework.',
        },
      ],
    },
    {
      id: 'day-13',
      dayNumber: 13,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Evaluate problems, data requirements, rule-based vs AI logic, error analysis, and human-AI collaboration.',
      sections: [
        {
          type: 'heading',
          title: 'Everyday AI Applications Questionnaire',
          subtitle: 'Answer the following questions to structure your problem-solving idea.',
        },
        {
          type: 'question',
          question: {
            id: 'm3-d13-q1',
            prompt: 'Question 1 — Find a Problem: What is one small problem you see at home, school, college, farm, shop, or workplace?',
            exploreHint: 'Explore: How is the problem currently handled without AI?',
            challengeHint: 'Challenge: What could make it easier or faster to solve?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm3-d13-q2',
            prompt: 'Question 2 — What Information Is Needed? Imagine you want a computer to identify whether a plant looks healthy. What information could you give the computer?',
            exploreHint: 'Explore: Think about photographs, colour, size, soil texture, etc.',
            challengeHint: 'Challenge: Can you think of two different types of information?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm3-d13-q3',
            prompt: 'Question 3 — AI or Normal Program? Imagine a light turns ON every day at 6 PM. Does the computer need to understand anything, or can it simply follow a fixed instruction?',
            exploreHint: 'Explore: Think of another example where a simple fixed timer instruction is enough.',
            challengeHint: 'Challenge: Can you think of a problem where the computer needs to recognize or understand something?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm3-d13-q4',
            prompt: 'Question 4 — Can AI Make Mistakes? Imagine an AI system checks whether a product is damaged. What could cause it to make a wrong decision?',
            exploreHint: 'Explore: Think about lighting, position, size, shadows, or unusual damage.',
            challengeHint: 'Challenge: How could a person help double-check the AI\'s decision?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm3-d13-q5',
            prompt: 'Question 5 — AI + Human: Imagine an AI system gives a recommendation to a person. Should the person always follow the AI\'s answer?',
            exploreHint: 'Explore: Think about situations where a human should review the result before taking action.',
            challengeHint: 'Challenge: Can you think of a situation where human judgment is especially important (e.g. medicine or safety)?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm3-d13-q6',
            prompt: 'Question 6 — Your AI Idea: If you could build one simple AI application to help people around you, what would it do?',
            exploreHint: 'Explore: Who would use it?',
            challengeHint: 'Challenge: What information would your application need as input?',
          },
        },
      ],
    },
    {
      id: 'day-14',
      dayNumber: 14,
      moduleDayNumber: 4,
      title: 'Practical Task: Build a Simple AI Problem Solver',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create a small working AI-based problem solver prototype addressing a real-world use case.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Build a Simple AI Problem Solver',
        },
        {
          type: 'practical',
          title: 'Task: Build a Simple AI Problem Solver',
          practical: {
            objective: 'Students select one problem from their questionnaire and create a small AI-based prototype. The prototype does not need to be technically complex.',
            materials: [
              'Web browser & prototyping tool or prompt builder',
              'Sample ideas: Study Assistant (Question → Explanation), Image Recognizer (Image → Recognition), Voice Assistant (Voice → Response), Topic Generator (Topic → Questions), Simple Recommendation (Choice → Recommendation)',
            ],
            steps: [
              'Select a clear problem from Day 13 questionnaire.',
              'Define the single main input the user will provide.',
              'Set up the AI rule or prompt to process the input.',
              'Verify that it produces a helpful output result.',
              'Test with at least 3 different user inputs.',
            ],
            expectedOutput: 'A tested problem solver prototype that takes input data and outputs a helpful recommendation, explanation, or classification.',
            challenge: 'Add error handling for invalid or empty inputs.',
          },
        },
      ],
    },
    {
      id: 'day-15',
      dayNumber: 15,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Improve your problem solver prototype with an extra feature and document the solution, limitations, and user value.',
      sections: [
        {
          type: 'heading',
          title: 'Day 15: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Enhance Your Problem Solver',
          content: 'Improve your prototype by adding one useful enhancement:',
          items: [
            'Better, more concise responses',
            'Voice input or audio output',
            'Image input option',
            'More diverse questions or scenarios supported',
            'Cleaner user interface',
            'Different user role options',
            'Error handling for unusual questions',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My AI Problem Solver',
          items: [
            'Identified problem',
            'Who experiences the problem?',
            'Proposed AI solution',
            'Input data provided',
            'AI processing description',
            'Output generated',
            'Screenshot or recording link',
            'One limitation observed',
            'One improvement made',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Problem Solver Log',
          content: 'Record your final project submission notes, who benefits from this AI application, and its current limitations.',
        },
      ],
    },
  ],
};
