import { Module } from '../../types/learning';

export const module01: Module = {
  id: 'module-01',
  number: 1,
  title: 'AI Fundamentals',
  category: 'Artificial Intelligence',
  daysRange: 'Days 1–5',
  theme: 'Make the computer understand simple information.',
  goal: 'Students understand what AI is, where they see it in everyday life, and how a computer can take information as an input and produce an output. Students are not expected to know programming or AI before starting.',
  bannerImage: '/assets/banners/module-01.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-01',
      dayNumber: 1,
      moduleDayNumber: 1,
      title: 'What Is AI?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Discover what AI is through familiar everyday examples and understand how computers recognize patterns.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is AI?',
        },
        {
          type: 'text',
          content: 'Artificial Intelligence is all around us in technology we use every single day. Look at these familiar examples:',
        },
        {
          type: 'learning',
          title: 'Everyday Examples of AI',
          subtitle: 'Where do you see AI?',
          items: [
            'Face unlock on a phone',
            'YouTube recommendations',
            'Google Maps navigation & route prediction',
            'Voice assistants (Siri, Alexa, Google Assistant)',
            'Spam detection in email',
            'Chatbots and automated helpers',
            'Photo recognition and tagging in gallery apps',
            'Language translation tools',
          ],
        },
        {
          type: 'concept',
          title: 'Think About It',
          content: 'A computer normally follows strict, step-by-step instructions given to it by a programmer. AI introduces a new way: it allows computers to recognize patterns, understand information, or produce a helpful response on their own.',
        },
        {
          type: 'activity',
          title: 'Simple Activity: AI Around You',
          content: 'Think about the AI you have already interacted with today.',
          calloutType: 'info',
        },
        {
          type: 'explore',
          title: 'Reflect on Face Unlock',
          content: 'When you unlock your phone using your face, how does the phone know it is you?',
          items: [
            'Notice that you do not need to know the technical code or math yet.',
            'The goal is to observe, question, and become curious about how machines see and decide.',
          ],
        },
        {
          type: 'reflection',
          title: 'My Observations on Everyday AI',
          content: 'Note down one application you used today that you think involves AI and what it did for you.',
        },
      ],
    },
    {
      id: 'day-02',
      dayNumber: 2,
      moduleDayNumber: 2,
      title: 'Input → AI → Output',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Understand the fundamental model of AI: how information enters, is processed by AI, and produces an output.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Input → AI → Output',
        },
        {
          type: 'concept',
          title: 'The Core AI Flow',
          content: 'Every AI system, no matter how complex, follows this foundational model:',
          items: [
            'INPUT: The information given to the computer (photo, sound, text, sensor reading).',
            'AI SYSTEM: The computer analyzes the information and looks for patterns.',
            'OUTPUT: The result, prediction, translation, or action produced.',
          ],
        },
        {
          type: 'example',
          title: 'Examples of the Flow',
          items: [
            'Photo → AI System → Recognized object',
            'Voice → AI System → Written text',
            'Question → AI System → Helpful answer',
            'Image → AI System → Prediction',
          ],
        },
        {
          type: 'explore',
          title: 'Explore the Model',
          content: 'For any everyday technology you see, ask yourself these 3 questions:',
          items: [
            'What is the input?',
            'What does the computer do?',
            'What is the output?',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: Map Input to Output',
          content: 'Pick 3 everyday gadgets or apps (e.g. camera filters, voice search, navigation). Identify what goes in as Input, how AI processes it, and what comes out as Output.',
        },
      ],
    },
    {
      id: 'day-03',
      dayNumber: 3,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Answer exploratory questions about AI recognition, voice processing, predictions, and computer vs. human perception.',
      sections: [
        {
          type: 'heading',
          title: 'AI Fundamentals Questionnaire',
          subtitle: 'Answer the questions below to test and deepen your understanding.',
        },
        {
          type: 'question',
          question: {
            id: 'm1-d3-q1',
            prompt: 'Question 1 — AI Around You: Can you think of one application you use that you believe uses AI?',
            exploreHint: 'Explore: What does the application do for you?',
            challengeHint: 'Challenge: Can you find another application that performs a similar task?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm1-d3-q2',
            prompt: 'Question 2 — Can a Computer Recognize? Imagine showing a computer a picture of a dog. Can you think of how the computer could identify that the picture contains a dog?',
            exploreHint: 'Explore: What other objects could the computer recognize?',
            challengeHint: 'Challenge: Can you think of an object that might be difficult for the computer to recognize?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm1-d3-q3',
            prompt: 'Question 3 — Voice to Text: Imagine speaking to a phone and seeing your words appear as text. What information is going into the computer, and what information is coming out?',
            exploreHint: 'Explore: Try speaking different sentences.',
            challengeHint: 'Challenge: What might happen if you speak very fast or in a noisy place?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm1-d3-q4',
            prompt: 'Question 4 — AI Makes a Prediction: Imagine an application trying to decide whether an email is useful or unwanted. What information could the computer look at before making its decision?',
            exploreHint: 'Explore: Think about the sender, message content, or other information.',
            challengeHint: 'Challenge: Can you think of a situation where the computer might make a wrong decision?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm1-d3-q5',
            prompt: 'Question 5 — Human or Computer? Imagine two people look at a picture and give different answers about what they see. Can a computer also make a mistake when recognizing something?',
            exploreHint: 'Explore: Think about why a computer might be confused (lighting, angles, blur).',
            challengeHint: 'Challenge: Can you create an example where an object could be difficult to recognize?',
          },
        },
      ],
    },
    {
      id: 'day-04',
      dayNumber: 4,
      moduleDayNumber: 4,
      title: 'Practical Task: Can AI Recognize?',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Test different physical objects or images with an AI recognition tool and document the results.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Can AI Recognize?',
        },
        {
          type: 'practical',
          title: 'Task: Can AI Recognize?',
          practical: {
            objective: 'Students use a simple AI recognition tool/application provided by the instructor to test different objects or images.',
            materials: [
              'Webcam / Smartphone camera or image files',
              'AI recognition tool (e.g. Teachable Machine, Google Lens, or web classifier)',
              'Common physical objects (Bottle, Book, Pen, Cup, etc.)',
            ],
            steps: [
              'Choose an object around you.',
              'Show it to the AI recognition system / camera.',
              'Record what the AI thinks it is and whether it is correct.',
              'Try another object with different angles.',
              'Find at least one example where the result is unexpected or incorrect.',
            ],
            expectedOutput: 'A recorded test log table: Test 1: Bottle → Bottle (Correct: Yes), Test 2: Book → Book (Correct: Yes), Test 3: Custom object → Observation.',
            challenge: 'Find an object angle or lighting condition where the AI gives an incorrect classification.',
          },
        },
      ],
    },
    {
      id: 'day-05',
      dayNumber: 5,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Improve your AI recognition experiment by changing variables, documenting mistakes, and explaining what you learned.',
      sections: [
        {
          type: 'heading',
          title: 'Day 5: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Can I make the AI recognize my object more clearly?',
          content: 'Choose one recognition problem and try to improve your experiment by changing one or more variables:',
          items: [
            'Distance (closer vs further from camera)',
            'Lighting (bright, dim, direct sunlight, shadow)',
            'Object position (tilted, upside down, partial view)',
            'Background (plain white background vs cluttered room)',
            'Object type (clear glass vs solid colored objects)',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: AI Recognition Experiment',
          items: [
            'Screenshot / photo of the test setup',
            'Objects tested and their predictions',
            'Results table',
            'One mistake or confusion observed',
            'What you learned about AI vision',
          ],
        },
        {
          type: 'checklist',
          title: 'Skills Developed Checklist',
          checklist: [
            { id: 'm1-chk-1', label: 'Observation: Identified visual patterns and details' },
            { id: 'm1-chk-2', label: 'Experimentation: Tested multiple objects and variables' },
            { id: 'm1-chk-3', label: 'Understanding AI: Grasped input → pattern recognition → output' },
            { id: 'm1-chk-4', label: 'Problem-solving: Investigated why errors occurred' },
            { id: 'm1-chk-5', label: 'Explaining results: Documented findings clearly' },
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: AI Recognition Log',
          content: 'Record your final findings, the biggest mistake the AI made, and how changing lighting or angles affected the result.',
        },
      ],
    },
  ],
};
