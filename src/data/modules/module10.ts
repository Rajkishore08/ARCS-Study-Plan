import { Module } from '../../types/learning';

export const module10: Module = {
  id: 'module-10',
  number: 10,
  title: 'IoT Applications',
  category: 'IoT & Embedded Robotics',
  daysRange: 'Days 46–50',
  theme: 'Connect sensors to a useful monitoring system.',
  goal: 'Students move from controlling one object to understanding how multiple devices and sensor values can be monitored together on a central dashboard.',
  bannerImage: '/assets/banners/module-10.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-46',
      dayNumber: 46,
      moduleDayNumber: 1,
      title: 'From Sensor to Dashboard',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Understand the multi-stage pipeline connecting physical sensors over networks to unified dashboards for human decision-making.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: From Sensor to Dashboard',
        },
        {
          type: 'concept',
          title: 'The End-to-End IoT Monitoring Pipeline',
          content: 'Sensor → Data → Device → Dashboard → Human Decision',
        },
        {
          type: 'example',
          title: 'Concrete Flow: Smart Farm Monitoring',
          items: [
            'Soil Sensor: Probes moisture levels deep in the crop root zone.',
            'Moisture Value: Generates a calibrated electrical reading (e.g. 18% volumetric water content).',
            'IoT Device: Microcontroller packets data and transmits over Wi-Fi/LoRa network.',
            'Dashboard: Cloud interface renders real-time graph and highlights drying trends.',
            'Human Decision: Farmer sees soil condition and triggers targeted drip irrigation.',
          ],
        },
        {
          type: 'explore',
          title: 'Managing Complex Sensor Networks',
          content: 'If many sensors (hundreds across fields or factories) are working at the same time, how could a person understand all the information without being overwhelmed?',
        },
        {
          type: 'reflection',
          title: 'Dashboard Design Thinking',
          content: 'Think about how colors, graphs, and summary cards can help a human make quick, life-critical or business-critical decisions.',
        },
      ],
    },
    {
      id: 'day-47',
      dayNumber: 47,
      moduleDayNumber: 2,
      title: 'Understanding Sensor Data',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn how continuous telemetry values fluctuate over time and how thresholds classify data into Normal, Low, High, and Warning states.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Sensor Telemetry & Thresholds',
        },
        {
          type: 'concept',
          title: 'Values Over Time vs Single Events',
          content: "A sensor doesn't just say: 'Something happened.' It provides dynamic quantitative values that change continuously over time.",
        },
        {
          type: 'example',
          title: 'Sample Real-Time Telemetry Stream',
          items: [
            'Temperature: 31°C (Moderate / Warm)',
            'Humidity: 65% (Optimal comfort)',
            'Soil Moisture: 40% (Adequate hydration)',
            'Water Level: 80% (Near capacity)',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: Classify Sensor States',
          content: 'Observe incoming sensor values and categorize each reading into operational bands:',
          items: [
            'Normal: Operating within healthy target ranges.',
            'Low: Below baseline minimum requirements (e.g. soil moisture < 25%).',
            'High: Exceeding safe baseline parameters (e.g. temperature > 38°C).',
            'Warning: Critical state requiring immediate human intervention or automated shutdown.',
          ],
        },
      ],
    },
    {
      id: 'day-48',
      dayNumber: 48,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Design telemetry collection, threshold alerts, and dashboard architectures for diverse real-world environments.',
      sections: [
        {
          type: 'heading',
          title: 'IoT Applications Questionnaire',
          subtitle: 'Analyze multi-sensor monitoring, threshold logic, and visualization strategies.',
        },
        {
          type: 'question',
          question: {
            id: 'm10-d48-q1',
            prompt: 'Question 1 — Smart Farm: Imagine a farmer wants to know whether crops have enough water. What information should the system collect?',
            exploreHint: 'Explore: Think about soil moisture, water level, ambient temperature, humidity, or sunlight/weather.',
            challengeHint: 'Challenge: What automated action or urgent notification should happen when the soil becomes critically dry?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm10-d48-q2',
            prompt: 'Question 2 — Smart Classroom: Imagine a classroom that can monitor its environment. What could it measure?',
            exploreHint: 'Explore: Think about room temperature, ambient light, room occupancy/people count, CO2 levels, or air quality.',
            challengeHint: 'Challenge: What automated environmental action could happen automatically (e.g. turn on ventilation or adjust smart blinds)?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm10-d48-q3',
            prompt: 'Question 3 — Smart Factory: Imagine a factory machine is running continuously on a production line. What could sensors monitor?',
            exploreHint: 'Explore: Think about motor temperature, rotational speed, abnormal vibration, power draw, or machine health status.',
            challengeHint: 'Challenge: What safety action should happen if vibration or heat becomes abnormal?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm10-d48-q4',
            prompt: 'Question 4 — Water Monitoring: Imagine a municipal or building water tank is connected to an IoT system. What information should appear on a dashboard?',
            exploreHint: 'Explore: Think about live water level percentage, inflow/outflow rate, and daily consumption trends.',
            challengeHint: 'Challenge: How would you design a 2-stage warning system for low water reserve vs high overflow risk?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm10-d48-q5',
            prompt: 'Question 5 — Multiple Sensors: Imagine five sensors are working simultaneously in different physical zones. How could a person immediately know which sensor needs attention?',
            exploreHint: 'Explore: Think about color-coded status badges (Green/Yellow/Red), audio alerts, and prioritized warning cards.',
            challengeHint: 'Challenge: Can you sketch or outline a simple dashboard layout for multi-zone monitoring?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm10-d48-q6',
            prompt: 'Question 6 — Your IoT System: Choose one real-world place (Farm, School, Factory, Hospital, Home, or Shop). What would you monitor there?',
            exploreHint: 'Explore: Choose at least three distinct sensor streams to track.',
            challengeHint: 'Challenge: What high-impact human decision or automated workflow could be made from this combined information?',
          },
        },
      ],
    },
    {
      id: 'day-49',
      dayNumber: 49,
      moduleDayNumber: 4,
      title: 'Practical Task: Build an IoT Monitoring Dashboard',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Create a live or simulated multi-sensor monitoring dashboard displaying real-time metrics, status badges, and alert thresholds.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: IoT Monitoring Dashboard',
        },
        {
          type: 'practical',
          title: 'Task: Multi-Sensor Dashboard Implementation',
          practical: {
            objective: 'Students create a monitoring dashboard using real or simulated sensor data streams (e.g. Smart Farm Dashboard).',
            materials: [
              'Web interface / Dashboard tool (HTML/JS, Node-RED, Blynk, ThingsBoard, or Adafruit IO)',
              'Live physical sensors (ESP32/Arduino) or simulated JavaScript telemetry stream',
              'Visual widgets: gauges, numerical readouts, status cards, and notification banners',
            ],
            steps: [
              'Select a monitoring scenario (Smart Farm, Classroom, Factory, or Home).',
              'Display at least 3 distinct sensor telemetry values (e.g. Soil Moisture, Temperature, Humidity, Water Level).',
              'Implement continuous or timed telemetry updates.',
              'Display color-coded status indicators (Normal, Warning, Critical).',
              'Trigger at least one contextual alert banner when a value crosses a safety threshold.',
              'Add clear descriptive text explaining what each sensor reading indicates to the operator.',
            ],
            expectedOutput: 'An operational IoT dashboard rendering live or simulated telemetry with dynamic status badges and threshold-triggered alerts.',
            challenge: 'Add an interactive slider or button to simulate extreme weather or emergency equipment failure to test alert responses.',
          },
        },
      ],
    },
    {
      id: 'day-50',
      dayNumber: 50,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Make the dashboard dynamically generate automated recommendations based on fluctuating telemetry, and document the complete system.',
      sections: [
        {
          type: 'heading',
          title: 'Day 50: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Dynamic Data-Driven Recommendations',
          content: 'Make your dashboard actively interpret changing data streams and offer automated recommendations:',
          items: [
            'Soil moisture decreases below 30% → Status changes to Dry → Amber warning banner appears → Recommendation: "Activate Zone 2 Drip Irrigation for 15 minutes".',
            'Temperature spikes above 38°C → Status changes to Overheating → Red alert flashes → Recommendation: "Engage Auxiliary Cooling Fans immediately".',
            'Tank water level drops below 15% → Status changes to Low Reserve → Recommendation: "Trigger Main Water Pump refill cycle".',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My IoT Monitoring System',
          items: [
            'Real-world problem and facility monitored',
            'Sensors chosen & telemetry units recorded',
            'Dashboard layout and visual metrics designed',
            'Threshold alerts & trigger criteria established',
            'Operator decisions & automated workflows enabled',
            'Screenshot / video demonstration of the operational dashboard',
            'Future enhancements & industrial scaling potential',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: IoT Dashboard Engineering Log',
          content: 'Log your dashboard architecture, sensor variables, alert logic, and reflections on how centralized IoT monitoring empowers human operators.',
        },
      ],
    },
  ],
};
