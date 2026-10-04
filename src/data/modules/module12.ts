import { Module } from '../../types/learning';

export const module12: Module = {
  id: 'module-12',
  number: 12,
  title: 'Spatial + IoT + Satellite Integrated Project',
  category: 'Autonomous Drones & Satellites',
  daysRange: 'Days 56–60',
  theme: 'Combine location information, satellite observation, and ground-level sensor data to understand a real-world situation.',
  goal: 'Students learn how spatial maps can connect large-area satellite information with detailed IoT sensor information to create a comprehensive ground-to-space monitoring system.',
  bannerImage: '/assets/banners/module-12.jpg',
  estimatedHours: 8,
  days: [
    {
      id: 'day-56',
      dayNumber: 56,
      moduleDayNumber: 1,
      title: 'Ground + Space + Location',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Understand how spatial maps, orbital satellites, and ground IoT sensors fuse together to create complete situational awareness.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Fusing Ground, Space & Location Intelligence',
        },
        {
          type: 'concept',
          title: 'The Three Pillars of Modern Geospatial Monitoring',
          items: [
            'Spatial Technology: Shows WHERE something is (Coordinates, Boundaries, Zones, Pathways).',
            'Satellite Observation: Shows WHAT is happening across a LARGE AREA (Macro-scale vegetation health, surface water, weather fronts).',
            'IoT Ground Sensors: Shows WHAT is happening at a SPECIFIC PINPOINT LOCATION (Micro-scale soil moisture, ambient temperature, localized water levels).',
          ],
        },
        {
          type: 'concept',
          title: 'The Integrated Intelligence Equation',
          content: 'Spatial Map (Where?) + Satellite (Large Area Observation) + IoT Sensors (Local Measurement) = Deep Situational Understanding & Proactive Action',
        },
        {
          type: 'explore',
          title: 'Multi-Scale Observation Inquiry',
          content: 'Why is it significantly more powerful to combine location information, satellite imagery, and ground-level sensor readings than relying on any single source alone?',
        },
        {
          type: 'reflection',
          title: 'Systems Thinking',
          content: 'Reflect on how an airplane pilot or a farm manager relies on both high-altitude global telemetry and localized cockpit/field instrumentation to make safe decisions.',
        },
      ],
    },
    {
      id: 'day-57',
      dayNumber: 57,
      moduleDayNumber: 2,
      title: 'Smart Agriculture Example',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Walk through a complete smart agriculture case study demonstrating the sequential integration pipeline from orbit to soil.',
      sections: [
        {
          type: 'heading',
          title: 'Case Study: The Integrated Smart Agriculture System',
        },
        {
          type: 'concept',
          title: 'End-to-End Ground + Space Pipeline',
          content: 'SPATIAL MAP → FARM ZONES → SATELLITE OBSERVATION → IDENTIFY AREA OF INTEREST → IoT SENSOR → LOCAL MEASUREMENTS → DASHBOARD → ALERT / ANALYSIS → HUMAN DECISION',
        },
        {
          type: 'learning',
          title: 'Step-by-Step System Flow',
          subtitle: 'How the components work in harmony',
          items: [
            '1. Spatial Map: Delineates the total farm boundary and divides land into distinct zones (Zone A, Zone B, Zone C).',
            '2. Satellite Observation: Optical and infrared imagery detects an unusual discoloration or vegetation index drop in Zone C.',
            '3. IoT Pinpoint Probes: Ground soil moisture and temperature sensors in Zone C transmit live micro-telemetry (e.g. Moisture = 14%, Temp = 34°C).',
            '4. Integrated Dashboard: Synthesizes the map polygon, satellite layer, and live sensor stream on a single unified screen.',
            '5. Alert & Decision: Dashboard flags "Critical Soil Moisture Deficit in Zone C" and prompts the agronomist to activate targeted irrigation.',
          ],
        },
        {
          type: 'explore',
          title: 'Cross-Verification Advantage',
          content: 'What happens if a satellite sees brown vegetation due to cloud shadows, but the ground IoT sensor reports optimal 45% moisture? How does sensor fusion prevent false alarms?',
        },
      ],
    },
    {
      id: 'day-58',
      dayNumber: 58,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Solve deep architectural questions on multi-source sensor fusion, disaster monitoring, environmental management, and decision dashboards.',
      sections: [
        {
          type: 'heading',
          title: 'Spatial + IoT + Satellite Questionnaire',
          subtitle: 'Answer these 8 comprehensive system design questions combining maps, satellites, and sensors.',
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q1',
            prompt: 'Question 1 — Smart Farm: Imagine a large farm has an area where plants are not growing well. How could a spatial map and satellite image help identify the problem area?',
            exploreHint: 'Explore: What visual color variations or vegetation index anomalies would stand out across the farm zones?',
            challengeHint: 'Challenge: How could an IoT ground probe pinpoint whether the root cause is water shortage, soil salinity, or root rot?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q2',
            prompt: 'Question 2 — Ground + Space: Imagine a satellite shows that one part of a farm looks abnormally dry. What specific information could an IoT sensor collect from that exact location?',
            exploreHint: 'Explore: Think about soil volumetric water content, soil temperature, ambient humidity, and solar radiation.',
            challengeHint: 'Challenge: What automated escalation should happen if both satellite telemetry and ground sensors confirm severe drought stress?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q3',
            prompt: 'Question 3 — Water Monitoring: Imagine a freshwater lake is becoming smaller over months. How could spatial maps and satellite images help?',
            exploreHint: 'Explore: What surface area boundaries and temporal shoreline historical images could you compare?',
            challengeHint: 'Challenge: What ground-level water quality and water level sensors could verify depth, evaporation rates, and chemical run-off?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q4',
            prompt: 'Question 4 — Disaster Monitoring: Imagine torrential rains cause widespread regional flooding. How could satellite imagery help rescue teams understand the affected area?',
            exploreHint: 'Explore: What flooded road networks, isolated communities, and submerged bridges can be spotted on an orbital map?',
            challengeHint: 'Challenge: What local river ultrasonic water level sensors and rain gauges could provide early evacuation warning hours before peak floodwaters arrive?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q5',
            prompt: 'Question 5 — Environmental Monitoring: Imagine a protected forest reserve needs 24/7 protection. What could spatial maps and satellite technology observe from orbit?',
            exploreHint: 'Explore: Think about overall forest canopy density, illegal access roads, canopy clearing, and wildfire smoke signatures.',
            challengeHint: 'Challenge: What ground-level acoustic sensors or thermal IoT nodes could detect chainsaws, gunshots, or illegal vehicle movement?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q6',
            prompt: 'Question 6 — Your Combined System: Choose one real-world problem (e.g. Wildlife Tracking, Ocean Plastic, Urban Heat, Glacier Melt). How would you combine spatial, satellite, and IoT technologies?',
            exploreHint: 'Explore: What would the spatial map display as its primary layers?',
            challengeHint: 'Challenge: What would satellite observations track macro-scale, and what would ground/buoy IoT sensors measure locally?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q7',
            prompt: 'Question 7 — Dashboard: Imagine all this information appears on a single operator screen. What key visual modules should the dashboard show?',
            exploreHint: 'Explore: Think about interactive spatial maps, selectable zones, live sensor gauge cards, warning status badges, and satellite comparison sliders.',
            challengeHint: 'Challenge: What should happen visually and audibly when the integrated system detects a multi-zone emergency?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm12-d58-q8',
            prompt: 'Question 8 — Human Decision: Imagine your integrated system detects a critical problem. Who should receive the alert and what concrete action could they take?',
            exploreHint: 'Explore: Think about a farmer, environmental scientist, civil engineer, emergency response commander, or city municipal officer.',
            challengeHint: 'Challenge: Can you design a clear step-by-step standard operating procedure (SOP) triggered by the dashboard alert?',
          },
        },
      ],
    },
    {
      id: 'day-59',
      dayNumber: 59,
      moduleDayNumber: 4,
      title: 'Practical Task: Build a Spatial + IoT + Satellite System',
      theme: 'Practical Task',
      duration: '75 min',
      objective: 'Build an interactive multi-layered monitoring prototype fusing spatial zones, satellite-style views, live IoT telemetry, and automated recommendations.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Ground + Space Monitoring Prototype',
        },
        {
          type: 'practical',
          title: 'Task: Build the 5-Part Integrated System',
          practical: {
            objective: 'Build a working interactive prototype demonstrating the fusion of spatial maps, satellite imagery, and IoT telemetry for Smart Agriculture or Environmental Monitoring.',
            materials: [
              'Web development stack (HTML/CSS/JavaScript or React) or dashboard prototyping platform',
              'Spatial vector polygon data (Zones A, B, C, pathways, reservoirs)',
              'Simulated or live IoT telemetry data stream (Moisture, Temp, Humidity, Water Level)',
              'Satellite-style basemap layer with temporal comparison capability',
            ],
            steps: [
              'Part 1 — Spatial Map: Render the farm/facility boundary, distinct zone polygons (Zone A, B, C), roads/pathways, and water source reservoir.',
              'Part 2 — Satellite View: Provide a satellite-style aerial view layer highlighting vegetation health index and flagged areas of interest.',
              'Part 3 — IoT Zone Telemetry: When an operator clicks on any zone, dynamically display live telemetry: Soil Moisture (%), Temperature (°C), Humidity (%), and Water Level (%).',
              'Part 4 — System Status Badges: Display real-time status classifications: Zone A (Normal / Healthy), Zone B (Needs Attention / Low Reserve), Zone C (Critical / Dry).',
              'Part 5 — Automated Action Engine: Provide intelligent recommendations based on sensor fusion (e.g. "Alert: Zone C Soil Moisture is 12%. Trigger Drip Irrigation Line 3 immediately.").',
            ],
            expectedOutput: 'A fully functional interactive web dashboard featuring clickable spatial zones, satellite overlays, dynamic IoT sensor streams, status badges, and actionable recommendations.',
            challenge: 'Add a temporal comparison toggle comparing current satellite view with historical imagery to show the impact of irrigation over time.',
          },
        },
      ],
    },
    {
      id: 'day-60',
      dayNumber: 60,
      moduleDayNumber: 5,
      title: 'Final Challenge + Presentation',
      theme: 'Challenge & Documentation',
      duration: '90 min',
      objective: 'Polish your ground-to-space monitoring system with advanced features and deliver the 11-point Ground + Spatial + Space Capstone Presentation.',
      sections: [
        {
          type: 'heading',
          title: 'Day 60: Capstone Challenge & Presentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Advanced System Capabilities',
          content: 'Enhance your integrated monitoring system with professional operational features:',
          items: [
            'Interactive multi-zone selection with color-coded risk heatmaps',
            'Dynamic simulated fluctuating sensor telemetry with real-time graph trends',
            'Satellite before/after image comparison slider',
            'Multi-level prioritized alert banners with audio/visual triggers',
            'Distance measurement tool between water sources and dry zones',
            'Automated AI-assisted recommendation engine with 1-click execution simulation',
            '3D terrain or perspective representation',
          ],
        },
        {
          type: 'concept',
          title: 'Final Capstone Project: Ground + Spatial + Space Monitoring System',
          subtitle: 'Document and present your completed project across these 11 structural pillars:',
          items: [
            '1. Problem Statement: What real-world environmental or agricultural challenge are you monitoring?',
            '2. Spatial Technology: Where is the problem located? How are boundaries, zones, and pathways mapped?',
            '3. Satellite Observation: What macro-scale information is gathered from space (imagery, vegetation index, thermal)?',
            '4. IoT Sensors: What localized telemetry is measured by ground probes (soil moisture, temperature, water level)?',
            '5. Unified Dashboard: How are spatial maps, satellite layers, and sensor gauges synthesized on screen?',
            '6. Detection Mechanism: What specific anomaly or critical threshold did the system detect?',
            '7. Alert System: How is the operator or field team notified that an anomaly has occurred?',
            '8. Action & SOP: What concrete intervention does the operator perform based on system guidance?',
            '9. Experimentation: What testing procedures and edge cases were evaluated?',
            '10. Problem & Improvement: What engineering challenges arose during development and how were they solved?',
            '11. Future Scalability: How could this prototype scale into an enterprise-grade planetary monitoring network?',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation & Portfolio Presentation',
          content: 'Publish your complete Ground + Spatial + Space system into your ARCS project portfolio, including interactive links, screenshots, telemetry schemas, and full engineering logs.',
        },
      ],
    },
  ],
};
