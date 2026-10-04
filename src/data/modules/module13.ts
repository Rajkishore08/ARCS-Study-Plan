import { Module } from '../../types/learning';

export const module13: Module = {
  id: 'module-13',
  number: 13,
  title: 'Robotics Fundamentals',
  category: 'IoT & Embedded Robotics',
  daysRange: 'Days 61–65',
  theme: 'Make a machine sense, think, and move.',
  goal: 'Students understand the basic idea of robotics by creating a simple machine that can sense its surroundings and respond to them through the core loop: Sensor → Decision → Movement.',
  bannerImage: '/assets/banners/module-13.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-61',
      dayNumber: 61,
      moduleDayNumber: 1,
      title: 'What Is a Robot?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Discover the definition of a robot as a machine that senses, decides, and acts.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is a Robot?',
        },
        {
          type: 'concept',
          title: 'The Core Definition of a Robot',
          content: 'A robot is a machine that can sense something in its environment, make a computational decision, and perform a physical action or movement.',
        },
        {
          type: 'learning',
          title: 'Everyday Robots Around Us',
          subtitle: 'Where are robots working today?',
          items: [
            'Factory Robots: High-precision welding, assembling, and sorting arms.',
            'Cleaning Robots: Autonomous robotic vacuum cleaners mapping floor plans.',
            'Delivery Robots: Wheeled automated ground vehicles navigating sidewalks.',
            'Medical Robots: Surgical assistants and hospital sanitation machines.',
            'Agricultural Robots: Automated fruit-picking and weeding ground rovers.',
            'Rescue Robots: Tracked rovers exploring hazardous disaster rubble.',
            'Educational Robots: Programmable rovers learning logic and navigation.',
          ],
        },
        {
          type: 'example',
          title: 'Simple Scenario: Obstacle Avoidance',
          items: [
            'Physical World: A wall blocks the direct path ahead.',
            'Sensor: Distance sensor detects an obstacle within 15 cm.',
            'Decision: Microcontroller computes that forward travel is blocked.',
            'Action: Motors reverse left wheel and turn right to change direction.',
          ],
        },
        {
          type: 'explore',
          title: 'Robotic Helper Inquiry',
          content: 'If you could build a robot to help you with one specific task at home, school, or work, what would you make it do?',
        },
        {
          type: 'reflection',
          title: 'My Robotic Idea',
          content: 'Describe what physical task your robot would perform and what it needs to detect to do it safely.',
        },
      ],
    },
    {
      id: 'day-62',
      dayNumber: 62,
      moduleDayNumber: 2,
      title: 'How Does a Robot Know What to Do?',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn the 3 foundational building blocks of autonomous robotics: Sense, Think, and Act.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: The Sense → Think → Act Loop',
        },
        {
          type: 'concept',
          title: 'The Three Essential Robotic Pillars',
          items: [
            '1. Sense: The robot collects physical information from the environment using sensors (ultrasonic, infrared, bump switch, light).',
            '2. Think: The microcontroller/processor runs logic to decide what action to take based on the sensor data.',
            '3. Act: The robot engages its motors, actuators, or indicators to perform the physical action.',
          ],
        },
        {
          type: 'example',
          title: 'The Decision Pipeline',
          content: 'OBJECT DETECTED → SENSOR → DECISION → CHANGE DIRECTION',
        },
        {
          type: 'activity',
          title: 'Simple Activity: Robot Observation',
          content: 'Observe a physical robot or simulation and analyze its behavior:',
          items: [
            'What does the robot sense? (Distance, lines, light, buttons)',
            'What decision does it make? (IF distance < 20cm THEN stop)',
            'What physical action does it perform? (Turn wheels 90° right and drive forward)',
          ],
        },
      ],
    },
    {
      id: 'day-63',
      dayNumber: 63,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Analyze robotic decision-making, navigation logic, and sensor requirements across real-world scenarios.',
      sections: [
        {
          type: 'heading',
          title: 'Robotics Fundamentals Questionnaire',
          subtitle: 'Answer these fundamental robotics engineering questions.',
        },
        {
          type: 'question',
          question: {
            id: 'm13-d63-q1',
            prompt: 'Question 1 — Obstacle Robot: Imagine a robot moving through a room. What should it do when it sees an object in front of it?',
            exploreHint: 'Explore: Think about stopping, turning left/right, or reversing backward.',
            challengeHint: 'Challenge: What should it do if there are obstacles on both sides simultaneously?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm13-d63-q2',
            prompt: 'Question 2 — Helpful Robot: What is one real-world task you would like a robot to do for you?',
            exploreHint: 'Explore: Think about applications in home, school, agriculture, shops, hospitals, or factories.',
            challengeHint: 'Challenge: What specific physical conditions would the robot need to sense before performing the task?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm13-d63-q3',
            prompt: 'Question 3 — Following Robot: Imagine a robot designed to follow a person or a guide leader. What would the robot need to detect?',
            exploreHint: 'Explore: Think about ultrasonic distance ranges, infrared beacons, or visual tracking.',
            challengeHint: 'Challenge: What should happen if the person moves too far away or turns a sharp corner out of view?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm13-d63-q4',
            prompt: 'Question 4 — Delivery Robot: Imagine a robot delivering an object from one room to another. What should the robot know before starting?',
            exploreHint: 'Explore: Think about map coordinates, starting position, destination room, and path obstacles.',
            challengeHint: 'Challenge: What should happen if an unexpected obstacle (like a closed door or person) blocks its path?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm13-d63-q5',
            prompt: 'Question 5 — Factory Robot: Imagine a robot working inside an automated manufacturing plant. What could it help with?',
            exploreHint: 'Explore: Think about lifting heavy parts, sorting objects by color/size, quality checking, or packaging.',
            challengeHint: 'Challenge: What safety and status information should the robot continuously collect while working?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm13-d63-q6',
            prompt: 'Question 6 — Your Robot: If you could build any simple robot, what would it do?',
            exploreHint: 'Explore: Who would benefit from using it?',
            challengeHint: 'Challenge: What would the robot sense and what physical actions would it execute in response?',
          },
        },
      ],
    },
    {
      id: 'day-64',
      dayNumber: 64,
      moduleDayNumber: 4,
      title: 'Practical Task: Build an Obstacle-Avoiding Robot',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create an obstacle-avoiding robotic rover or simulation that moves forward, detects obstacles, and changes direction autonomously.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Obstacle-Avoiding Robot',
        },
        {
          type: 'practical',
          title: 'Task: Autonomous Rover Implementation',
          practical: {
            objective: 'Build a working physical robot or simulated rover that drives forward, detects barriers using distance sensing, and executes avoidance turns.',
            materials: [
              'Hardware: 2-wheel/4-wheel robotic chassis, Arduino/ESP32/micro:bit, ultrasonic sensor, motor driver, battery pack',
              'Or Simulator: Tinkercad circuits, Wokwi, Webots, or 2D robotic simulation in JavaScript',
            ],
            steps: [
              'Assemble or initialize the robot drive motors (left motor, right motor).',
              'Connect or configure the ultrasonic distance sensor on the front.',
              'Program the default state: Move forward continuously.',
              'Program the obstacle check: IF distance < 15cm THEN stop motors.',
              'Program the evasion turn: Reverse for 0.5s, turn right 90°, and resume forward drive.',
              'Test the robot in an obstacle course with boxes, walls, and narrow corners.',
            ],
            expectedOutput: 'An operational obstacle-avoiding robot that roams autonomously without crashing into walls or objects.',
            challenge: 'Add dual distance sensors (left and right) so the robot scans both directions and chooses the path with more open space.',
          },
        },
      ],
    },
    {
      id: 'day-65',
      dayNumber: 65,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Enhance your robot with smart directional choice, obstacle counting, or status displays, and document your findings.',
      sections: [
        {
          type: 'heading',
          title: 'Day 65: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Advanced Robotic Behaviors',
          content: 'Implement at least one advanced intelligence feature on your robot:',
          items: [
            'Can the robot sweep a servo-mounted sensor to choose the clearer direction before turning?',
            'Can it count the number of obstacles avoided and display the count on an LCD/OLED screen or console?',
            'Can it detect when it has reached a target destination landmark and come to a complete stop with a victory sound?',
            'Can it display real-time status indicators (e.g. Green = Cruising, Amber = Scanning, Red = Backing Up)?',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My Robot',
          items: [
            'Robot Purpose & target use case',
            'Sensors used & distance thresholds',
            'Motor configuration & movement mechanics',
            'Decision algorithm & state transition rules',
            'Test arena environment & test results',
            'Problems encountered during navigation & calibration fixes',
            'Future improvements & sensor additions',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Robotics Engineering Log',
          content: 'Document your robot architecture, motor driver wiring, code logic, obstacle test videos/photos, and lessons learned about autonomous physical movement.',
        },
      ],
    },
  ],
};
