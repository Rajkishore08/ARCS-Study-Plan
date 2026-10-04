import { Module } from '../../types/learning';

export const module14: Module = {
  id: 'module-14',
  number: 14,
  title: 'Drone Technology',
  category: 'Autonomous Drones & Satellites',
  daysRange: 'Days 66–70',
  theme: 'Observe and inspect from above.',
  goal: 'Students understand how drones can be used for aerial observation, infrastructure inspection, mapping, monitoring, and delivery by designing autonomous drone flight missions.',
  bannerImage: '/assets/banners/module-14.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-66',
      dayNumber: 66,
      moduleDayNumber: 1,
      title: 'What Is a Drone?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Understand unmanned aerial vehicles (UAVs) and how aerial perspectives unlock revolutionary observation capabilities.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is a Drone?',
        },
        {
          type: 'concept',
          title: 'Definition of an Aerial Drone',
          content: 'A drone is a remotely controlled or autonomous unmanned aircraft system (UAS) capable of carrying high-resolution cameras, thermal imagers, LiDAR, and specialized payloads.',
        },
        {
          type: 'learning',
          title: 'Real-World Drone Applications',
          subtitle: 'Where are drones transforming industries today?',
          items: [
            'Agriculture: Multispectral crop health scouting and targeted aerial spraying.',
            'Building & Roof Inspection: Inspecting solar panels, high-rise facades, and wind turbines safely.',
            'Disaster Monitoring: Rapid aerial assessment of flooded zones, wildfires, and earthquake damage.',
            'Aerial Photography & Cinematography: Capturing cinematic angles and sports broadcasts.',
            'Orthomosaic Mapping & 3D Surveying: Generating centimeter-accurate topographic terrain models.',
            'Search and Rescue (SAR): Locating missing hikers with thermal infrared cameras in dense forests.',
            'Emergency Medical Delivery: Transporting blood samples, vaccines, and automated external defibrillators.',
            'Environmental Conservation: Monitoring wildlife populations and tracking illegal deforestation.',
          ],
        },
        {
          type: 'explore',
          title: 'Aerial Perspective Inquiry',
          content: 'What can an aerial drone see from 50 meters above that a person standing on the ground could never easily observe?',
        },
        {
          type: 'reflection',
          title: 'Drone Application Idea',
          content: 'Think of a tall structure or vast natural landscape near you. How would an aerial camera make monitoring it safer and faster?',
        },
      ],
    },
    {
      id: 'day-67',
      dayNumber: 67,
      moduleDayNumber: 2,
      title: 'Planning a Drone Mission',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn how to architect an autonomous drone flight plan from takeoff waypoint to landing.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: The Structure of a Drone Flight Mission',
        },
        {
          type: 'concept',
          title: 'The 5-Stage Flight Lifecycle',
          content: 'Start (Takeoff Waypoint) → Fly (Cruise Path) → Observe (Inspection Zone) → Collect Information (Sensory Capture) → Return (Safe Landing Waypoint)',
        },
        {
          type: 'example',
          title: 'Case Study: Autonomous Building Inspection Mission',
          items: [
            '1. Safe Launch: Drone powers on at designated ground pad with calibrated GPS lock.',
            '2. Autonomous Ascent: Climbs to 30m altitude and traverses along building perimeter.',
            '3. Inspection Grid: Holds position at 10m standoff distance to check exterior walls, windows, and roof tiles.',
            '4. Data Capture: Records 4K video, geo-tagged high-res photos, and thermal heat leak scans.',
            '5. Safe Return-to-Home (RTH): Automatically returns to the launch pad and lands smoothly.',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: Define Inspection Targets',
          content: 'Pick a facility (hospital, stadium, bridge, or farm). List the exact structural points the drone camera must inspect during its flight.',
        },
      ],
    },
    {
      id: 'day-68',
      dayNumber: 68,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Analyze flight mission safety, sensor payloads, payload delivery, and aerial computer vision logic.',
      sections: [
        {
          type: 'heading',
          title: 'Drone Technology Questionnaire',
          subtitle: 'Answer these drone mission planning and aerial sensing questions.',
        },
        {
          type: 'question',
          question: {
            id: 'm14-d68-q1',
            prompt: 'Question 1 — Drone Inspection: Imagine a drone is checking a large multi-story building. What specific defects or hazards should it look for?',
            exploreHint: 'Explore: Think about cracked walls, damaged roof tiles, broken windows, water pooling, or loose cables.',
            challengeHint: 'Challenge: How could the drone system tag and record the exact GPS coordinates and altitude of each defect found?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm14-d68-q2',
            prompt: 'Question 2 — Farm Drone: Imagine a drone is flying an automated survey grid over an agricultural farm. What could it observe?',
            exploreHint: 'Explore: Think about crop height, weed patches, dry soil patches, irrigation leaks, or pest damage.',
            challengeHint: 'Challenge: What actionable recommendations could an agronomist generate from this aerial survey?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm14-d68-q3',
            prompt: 'Question 3 — Disaster Drone: Imagine a severe flood has affected a large residential region. How could a drone fleet assist emergency responders?',
            exploreHint: 'Explore: Think about submerged roads, stranded citizens on rooftops, floodwater flow direction, and collapsed bridges.',
            challengeHint: 'Challenge: What critical telemetry or video stream would be most important to transmit live to the command center first?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm14-d68-q4',
            prompt: 'Question 4 — Drone Delivery: Imagine an autonomous drone needs to deliver medical supplies to a remote clinic. What does the flight computer need to know?',
            exploreHint: 'Explore: Think about takeoff coordinates, destination waypoint, tree/powerline obstacle heights, battery endurance, and wind speed.',
            challengeHint: 'Challenge: What failsafe protocol should the drone execute if the designated landing pad is blocked by people or animals?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm14-d68-q5',
            prompt: 'Question 5 — Drone + Camera: Imagine a drone carries an onboard camera. What information can modern computer vision extract from the video stream?',
            exploreHint: 'Explore: Think about object detection (counting vehicles, tracking animals), thermal hotspots, and surface change detection.',
            challengeHint: 'Challenge: How could AI software automatically alert an operator when an anomaly (like a wildfire spark) appears in the frame?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm14-d68-q6',
            prompt: 'Question 6 — Your Drone Mission: Choose one real-world aerial mission for a drone.',
            exploreHint: 'Explore: Where would the drone fly and what flight path would it follow?',
            challengeHint: 'Challenge: What sensory data would it collect and how would that information solve a critical human problem?',
          },
        },
      ],
    },
    {
      id: 'day-69',
      dayNumber: 69,
      moduleDayNumber: 4,
      title: 'Practical Task: Design a Drone Inspection Mission',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Design a complete waypoint-based drone flight mission on a digital map, 3D simulator, or mission planner.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Drone Mission Planning',
        },
        {
          type: 'practical',
          title: 'Task: Waypoint Mission Design',
          practical: {
            objective: 'Students design a full autonomous drone flight mission with structured waypoints, inspection targets, and telemetry capture.',
            materials: [
              'Mission planner or map simulator: Mission Planner, QGroundControl, DroneDeploy simulator, Google Earth, or custom 2D canvas',
              'Mission Options: Building inspection, Agricultural crop monitoring, Flood disaster assessment, Forest canopy survey, Highway corridor inspection, or Search & Rescue',
            ],
            steps: [
              'Select the mission scenario and target operational area.',
              'Establish the Launch / Takeoff Point with safe clearance.',
              'Plot the waypoint flight trajectory with designated flight speeds and altitudes (e.g. 30m altitude, 5 m/s speed).',
              'Define key Inspection Areas / Camera POIs (Points of Interest) where the drone slows or hovers to capture data.',
              'Specify the exact information collected at each waypoint (optical images, thermal readings, video clip).',
              'Set the Return-to-Home (RTH) path and safe landing protocol.',
            ],
            expectedOutput: 'A documented drone mission plan with plotted waypoints, altitude profiles, camera trigger points, and data collection specs.',
            challenge: 'Calculate the total estimated flight distance and estimated battery consumption for the mission.',
          },
        },
      ],
    },
    {
      id: 'day-70',
      dayNumber: 70,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Add intelligent autonomous behaviors to your drone mission plan and compile the final mission brief.',
      sections: [
        {
          type: 'heading',
          title: 'Day 70: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Intelligent Drone Mission Features',
          content: 'Incorporate at least one smart autonomous feature into your drone flight plan:',
          items: [
            'Dynamic Anomaly Flagging: Drone automatically detects a defect (e.g. solar panel crack) and marks the exact GPS coordinate with a red pin.',
            'Adaptive Altitude Terrain Following: Drone adjusts flight altitude automatically to maintain consistent 15m ground clearance over hilly terrain.',
            'Automated Battery Failsafe: Drone constantly computes remaining energy and initiates Return-to-Home if battery level drops below 25%.',
            'Obstacle Avoidance Standoff: Drone detects unforeseen crane/tree branches and diverts 5m around the obstacle before rejoining the flight path.',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My Drone Mission',
          items: [
            'Mission Purpose & operational context',
            'Takeoff point, landing coordinates, and safety buffer',
            'Full flight path waypoints with speeds and altitudes',
            'Specific inspection checkpoints & camera angles',
            'Information & imagery collected at each target',
            'Mission screenshot, flight map render, or simulated video',
            'One operational challenge encountered & flight plan improvement made',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Drone Flight Log',
          content: 'Record your mission parameters, waypoint coordinates, payload sensors, and reflections on how aerial autonomy enhances ground safety.',
        },
      ],
    },
  ],
};
