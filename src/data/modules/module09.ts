import { Module } from '../../types/learning';

export const module09: Module = {
  id: 'module-09',
  number: 9,
  title: 'IoT Fundamentals',
  category: 'IoT & Embedded Robotics',
  daysRange: 'Days 41–45',
  theme: 'Make the physical world sense and respond.',
  goal: 'Students understand how sensors can collect information from the physical world and how a device can respond to that information. The focus is on seeing the connection between the real world and technology, rather than learning electronics theory.',
  bannerImage: '/assets/banners/module-09.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-41',
      dayNumber: 41,
      moduleDayNumber: 1,
      title: 'What Is IoT?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Discover the Internet of Things through the 5-step flow: Physical World → Sensor → Data → Decision → Action.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is the Internet of Things (IoT)?',
        },
        {
          type: 'concept',
          title: 'The Foundational IoT Loop',
          content: 'Physical World → Sensor → Data → Decision → Action',
        },
        {
          type: 'example',
          title: 'Concrete Everyday Example: Room Cooling',
          items: [
            'Physical World: A room becomes warm and stuffy.',
            'Sensor: Temperature Sensor detects thermal increase.',
            'Data: Digital reading transmits 32°C.',
            'Decision: IoT microcontroller checks if 32°C > 26°C threshold.',
            'Action: System turns the Cooling Fan ON automatically.',
          ],
        },
        {
          type: 'learning',
          title: 'Everyday IoT Applications',
          subtitle: 'Where is IoT working today?',
          items: [
            'Smart lights (auto-turn on when walking in)',
            'Smart watches & fitness bands (heart rate & step telemetry)',
            'Smart door locks (keyless proximity unlocking)',
            'Smart agriculture (soil moisture automation)',
            'Smart homes (thermostats & voice-controlled plugs)',
            'Industrial factory sensors (vibration & pressure gauges)',
            'Water-level monitoring tanks in buildings',
            'Cold-chain vaccine & food temperature monitoring',
          ],
        },
        {
          type: 'explore',
          title: 'Sense & Respond Inquiry',
          content: 'Look around your home or school. What is something around you that could become smarter if it could sense what is happening physically?',
        },
        {
          type: 'reflection',
          title: 'My Smart Device Idea',
          content: 'Describe an ordinary physical object and what physical change you would want it to sense.',
        },
      ],
    },
    {
      id: 'day-42',
      dayNumber: 42,
      moduleDayNumber: 2,
      title: 'Sensors Around Us',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn common physical sensors and how they translate physical environmental conditions into digital signals.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: How Sensors Sense the World',
        },
        {
          type: 'concept',
          title: 'The Role of a Sensor',
          content: 'A sensor is an electronic sense organ. It helps a computing system notice something changing in the physical world.',
        },
        {
          type: 'learning',
          title: 'Common Sensor Types',
          subtitle: 'What can computers detect?',
          items: [
            'Temperature Sensor: Measures warmth, heat, or cooling in °C.',
            'Light Sensor (LDR): Detects brightness, darkness, or daylight.',
            'Distance Sensor (Ultrasonic/IR): Measures how close or far an object is in cm.',
            'Soil Moisture Sensor: Measures water content and conductivity in soil.',
            'Motion Sensor (PIR): Detects infrared heat moving across a space.',
            'Sound Sensor (Microphone): Detects noise level, claps, or voice spikes.',
            'Water-Level Sensor: Detects height and liquid presence in a tank.',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: Match Sensor to Scenario',
          content: 'Observe different physical scenarios and identify the exact sensor required. For example: If you wanted a hallway system to know whether someone is walking nearby, which sensor would you choose?',
        },
      ],
    },
    {
      id: 'day-43',
      dayNumber: 43,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Analyze sensing and automated response logic for smart lights, plants, doors, temperature, and tanks.',
      sections: [
        {
          type: 'heading',
          title: 'IoT Fundamentals Questionnaire',
          subtitle: 'Answer these design questions about sensing and automated actions.',
        },
        {
          type: 'question',
          question: {
            id: 'm9-d43-q1',
            prompt: 'Question 1 — Smart Light: Imagine a light that turns ON automatically when someone enters a room. What would the system need to know?',
            exploreHint: 'Explore: Think about what the system needs to detect (motion, presence, darkness).',
            challengeHint: 'Challenge: What should happen when the person leaves the room or stays still for a long time?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm9-d43-q2',
            prompt: 'Question 2 — Smart Plant: Imagine a plant that needs water. How could a device know whether the soil is dry?',
            exploreHint: 'Explore: What electrical property or moisture value could the device measure?',
            challengeHint: 'Challenge: What automated action or alert should happen when the soil becomes very dry?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm9-d43-q3',
            prompt: 'Question 3 — Smart Door: Imagine a door that opens automatically when someone comes near it. What information would the system need?',
            exploreHint: 'Explore: Think about distance in centimeters or human motion direction.',
            challengeHint: 'Challenge: What should happen if nobody is near the door or if an obstacle blocks the doorway?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm9-d43-q4',
            prompt: 'Question 4 — Temperature: Imagine a room becomes too hot. How could a device know that the room is hot?',
            exploreHint: 'Explore: What threshold measurement could the device compare against?',
            challengeHint: 'Challenge: What sequential actions could happen automatically (e.g. open vent, turn on fan, send notification)?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm9-d43-q5',
            prompt: 'Question 5 — Water Tank: Imagine a rooftop water tank that should never overflow. How could a device know how much water is inside?',
            exploreHint: 'Explore: Think about measuring liquid levels or float switches.',
            challengeHint: 'Challenge: What emergency cutoff should happen the instant the tank reaches 95% full?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm9-d43-q6',
            prompt: 'Question 6 — Your Smart Object: Choose one ordinary object around you that you would like to make "smart". What should it be able to detect?',
            exploreHint: 'Explore: What specific sensor could help?',
            challengeHint: 'Challenge: What automated decision and physical action should happen after it detects the event?',
          },
        },
      ],
    },
    {
      id: 'day-44',
      dayNumber: 44,
      moduleDayNumber: 4,
      title: 'Practical Task: Build a Smart Object',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create a working smart device that detects an input, makes a decision, and triggers an output.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Build a Smart Object',
        },
        {
          type: 'practical',
          title: 'Task: Sense & Respond Prototype',
          practical: {
            objective: 'Students choose one simple IoT problem and create a working prototype that detects, decides, and acts.',
            materials: [
              'Hardware (ESP32/Arduino/micro:bit) or online circuit simulator (Wokwi/Tinkercad)',
              'Option 1 — Smart Light: Motion sensor → Light ON',
              'Option 2 — Smart Plant: Soil moisture probe → Plant hydration status LED',
              'Option 3 — Smart Doorbell: Push button/distance sensor → Buzzer alert',
              'Option 4 — Automatic Night Light: Ambient light level (LDR) → LED turns on in darkness',
              'Option 5 — Water-Level Indicator: Liquid sensor → 3-level LED indicator',
            ],
            steps: [
              'Choose one smart object project.',
              'Connect or configure the sensor input.',
              'Set the decision condition logic (e.g. IF light < 200 THEN LED = HIGH).',
              'Connect the output indicator (LED, buzzer, or screen message).',
              'Test with high and low sensor values to verify the decision works.',
            ],
            expectedOutput: 'A working smart device that detects physical changes, executes a programmed rule, and outputs a physical response.',
            challenge: 'Add a second output (e.g. sound buzzer AND blink LED).',
          },
        },
      ],
    },
    {
      id: 'day-45',
      dayNumber: 45,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Enhance your smart object with multi-conditional logic or variable responses and complete your documentation.',
      sections: [
        {
          type: 'heading',
          title: 'Day 45: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Multi-Condition Smart Behavior',
          content: 'Add at least one advanced behavior to your smart prototype:',
          items: [
            'Can the light blink with frequency proportional to distance or temperature?',
            'Can a warning buzzer activate only when two conditions are met simultaneously (e.g. motion detected AND it is dark)?',
            'Can the system show 3 distinct color states (Green = Good, Yellow = Caution, Red = Critical)?',
            'Can the system log the trigger time in memory?',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My Smart Object',
          items: [
            'Real-world problem addressed',
            'Sensor / input used and threshold configured',
            'What physical condition was detected',
            'Output actuator triggered',
            'Testing observations and edge cases',
            'What happened during testing & improvements made',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Smart Object Engineering Log',
          content: 'Record your project details, sensor wiring/simulation, decision rules, and how physical sensing creates intelligent automation.',
        },
      ],
    },
  ],
};
