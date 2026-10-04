import { Module } from '../../types/learning';

export const module11: Module = {
  id: 'module-11',
  number: 11,
  title: 'Spatial + Satellite Technology',
  category: 'Autonomous Drones & Satellites',
  daysRange: 'Days 51–55',
  theme: 'Understand locations, maps, Earth observation, and information collected from space.',
  goal: 'Students understand how spatial information, maps, and satellite imagery can help people observe locations, identify changes, measure distances, and make real-world decisions.',
  bannerImage: '/assets/banners/module-11.jpg',
  estimatedHours: 6,
  days: [
    {
      id: 'day-51',
      dayNumber: 51,
      moduleDayNumber: 1,
      title: 'What Is Spatial Technology?',
      theme: 'Learn',
      duration: '45 min',
      objective: 'Discover how digital maps, geographic coordinates, and spatial vectors transform location data into actionable intelligence.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: What Is Spatial Technology?',
        },
        {
          type: 'concept',
          title: 'The Spatial Intelligence Flow',
          content: 'Location → Spatial Data → Map → Information → Decision',
        },
        {
          type: 'learning',
          title: 'Core Concepts of Spatial Data',
          subtitle: 'How computers represent the physical geography',
          items: [
            'Locations and Coordinates: Latitude, longitude, and altitude specifying exact physical positions.',
            'Digital Maps: Interactive layers combining vector data and raster basemaps.',
            'Geometric Primitives: Points (landmarks, trees, sensors), Lines (roads, rivers, pipelines), and Areas/Polygons (farms, lakes, municipal zones).',
            'Distance and Direction: Calculating linear lengths, perimeters, navigation bearings, and routing paths.',
            'Geographic Information Systems (GIS): Linking database attributes to geographical coordinates.',
          ],
        },
        {
          type: 'explore',
          title: 'Everyday Spatial Features',
          content: 'What things around you could be understood better if they were shown on a digital map? Examples: Roads, Buildings, Farms, Rivers, Lakes, Schools, Hospitals, Forests, and Cities.',
        },
        {
          type: 'reflection',
          title: 'Spatial Mapping Application',
          content: 'Think of a location in your neighborhood. How would mapping its boundaries and facilities help community planning?',
        },
      ],
    },
    {
      id: 'day-52',
      dayNumber: 52,
      moduleDayNumber: 2,
      title: 'Satellite + Spatial Observation',
      theme: 'Explore',
      duration: '45 min',
      objective: 'Learn how Earth-observation satellites capture orbital imagery and how temporal comparisons reveal real-world environmental and urban changes.',
      sections: [
        {
          type: 'heading',
          title: 'Learn: Observing Earth From Space',
        },
        {
          type: 'concept',
          title: 'What Is a Satellite?',
          content: 'An artificial orbital platform equipped with optical, infrared, radar, and multispectral sensors observing the Earth continuously from space.',
        },
        {
          type: 'learning',
          title: 'Capabilities of Satellite Observation',
          subtitle: 'Observing large-scale planetary features',
          items: [
            'Observing Vast Areas: Surveying entire provinces, mountain ranges, and ocean currents in single orbital passes.',
            'Feature Identification: Detecting buildings, roads, river networks, lakes, agricultural parcels, forest canopies, and coastlines.',
            'Multispectral Sensing: Seeing beyond visible light (infrared vegetation health, thermal heat islands).',
            'Temporal Comparison: Comparing satellite images of the exact same location captured months or years apart to spot changes.',
          ],
        },
        {
          type: 'activity',
          title: 'Simple Activity: Temporal Change Detection',
          content: 'Examine two satellite views of the same geographic area captured at different times and identify what changed:',
          items: [
            'New urban buildings & infrastructure development',
            'Road network expansion or clearing',
            'Water body expansion (flooding) or shrinkage (drought)',
            'Vegetation health changes & seasonal crop cycles',
            'Deforestation or reforestation patterns',
            'Coastal erosion and shoreline shifts',
          ],
        },
      ],
    },
    {
      id: 'day-53',
      dayNumber: 53,
      moduleDayNumber: 3,
      title: 'Questionnaire',
      theme: 'Questionnaire',
      duration: '60 min',
      objective: 'Analyze spatial mapping, distance calculation, satellite imagery comparison, and change detection scenarios.',
      sections: [
        {
          type: 'heading',
          title: 'Spatial + Satellite Technology Questionnaire',
          subtitle: 'Answer these questions exploring map coordinates, distance analysis, and orbital imagery.',
        },
        {
          type: 'question',
          question: {
            id: 'm11-d53-q1',
            prompt: 'Question 1 — Find a Location: Imagine you want to show the exact location of your school on a digital map. How could you identify and mark it?',
            exploreHint: 'Explore: Think about street addresses, landmark points, and exact GPS latitude/longitude coordinates.',
            challengeHint: 'Challenge: Can you identify and mark three important infrastructure landmarks around your school?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm11-d53-q2',
            prompt: 'Question 2 — Map an Area: Imagine you want to create a spatial map of a farm. What distinct geographic features should appear on the map?',
            exploreHint: 'Explore: Think about crop field polygons, internal access roads, irrigation water channels, storage buildings, and property boundaries.',
            challengeHint: 'Challenge: How would you divide the farm into distinct operational zones for crop management?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm11-d53-q3',
            prompt: 'Question 3 — Measure Distance: Imagine a farmer wants to know how far the water reservoir is from a specific crop field. How could a map help?',
            exploreHint: 'Explore: Think about map scale, coordinate distances, and linear measurement tools.',
            challengeHint: 'Challenge: How would you calculate the shortest and most efficient pipeline or access route between the two locations?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm11-d53-q4',
            prompt: 'Question 4 — Explore From Space: Imagine you want to observe a large remote forest. Why is satellite imagery significantly more useful than ground surveys?',
            exploreHint: 'Explore: What large-scale patterns, canopy density, or inaccessible terrain can you identify from orbital images?',
            challengeHint: 'Challenge: How would you compare two satellite images taken two years apart to detect illegal logging or fire recovery?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm11-d53-q5',
            prompt: 'Question 5 — Find Changes: Imagine a city is growing rapidly. How could spatial and satellite information help municipal planners identify where new construction is happening?',
            exploreHint: 'Explore: Compare optical and thermal views of the urban boundary over consecutive years.',
            challengeHint: 'Challenge: How would you mark and highlight the specific spatial zones that transitioned from open land to paved structures?',
          },
        },
        {
          type: 'question',
          question: {
            id: 'm11-d53-q6',
            prompt: 'Question 6 — Your Spatial Technology Idea: Choose one real-world challenge where location data, digital maps, or satellite information could help.',
            exploreHint: 'Explore: What specific geographic layers and features would you display on the map?',
            challengeHint: 'Challenge: What high-impact decision or emergency response could someone make using your spatial information?',
          },
        },
      ],
    },
    {
      id: 'day-54',
      dayNumber: 54,
      moduleDayNumber: 4,
      title: 'Practical Task: Explore and Map an Area',
      theme: 'Practical Task',
      duration: '60 min',
      objective: 'Select a physical area of interest and create a spatial observation map identifying zones, coordinates, distances, and satellite visual features.',
      sections: [
        {
          type: 'heading',
          title: 'Practical Task: Spatial Observation Map',
        },
        {
          type: 'practical',
          title: 'Task: Spatial Mapping & Observation',
          practical: {
            objective: 'Students select an area of interest, map key geographic elements, analyze satellite views, and document spatial insights.',
            materials: [
              'Mapping tool: Google Earth, OpenStreetMap, QGIS, or web map viewer',
              'Candidate Areas: School / Campus, Agricultural Farm, City District, Lake, River Basin, Forest Reserve, Highway Corridor, or Coastal Shoreline',
            ],
            steps: [
              'Select a target geographic area of interest.',
              'Determine the exact GPS coordinates and bounding box.',
              'Identify and mark important features (points of interest, roads, water channels, buildings).',
              'Define and trace distinct zones or land-use polygons.',
              'Measure key distances between critical infrastructure points.',
              'Inspect satellite or aerial imagery to identify surface variations or temporal changes.',
              'Explain how this spatial map empowers real-world analysis or management.',
            ],
            expectedOutput: 'A documented spatial map featuring marked locations, classified zones, distance measurements, and satellite-derived observations.',
            challenge: 'Calculate the total area (in square meters or hectares) of the primary zone using map polygon measurement tools.',
          },
        },
      ],
    },
    {
      id: 'day-55',
      dayNumber: 55,
      moduleDayNumber: 5,
      title: 'Challenge + Documentation',
      theme: 'Challenge & Documentation',
      duration: '60 min',
      objective: 'Compile a comprehensive Spatial + Satellite Observation Report detailing land classification, change detection, and practical actionable insights.',
      sections: [
        {
          type: 'heading',
          title: 'Day 55: Challenge & Documentation',
        },
        {
          type: 'challenge',
          title: 'Challenge: Spatial + Satellite Observation Report',
          content: 'Synthesize your geographic investigation into a professional observation report:',
          items: [
            'Precise location coordinates & digital map overlay',
            'Key landmark annotations & classified land-use zones',
            'Satellite imagery analysis highlighting surface details',
            'Identified changes, variations, or anomalies observed across zones',
            'Root-cause hypotheses (e.g. soil composition, water availability, urban expansion)',
            'Stakeholders who benefit (farmers, city engineers, conservationists, emergency teams)',
            'Recommended real-world actions based on the spatial data',
          ],
        },
        {
          type: 'concept',
          title: 'Final Output: My Spatial + Satellite Observation',
          items: [
            'Map / satellite imagery exhibit with scale and north arrow',
            'Marked location points and bounding coordinates',
            'Identified operational zones and geometric areas',
            'Key observations and surface features',
            'Detected changes or anomalies over time',
            'Distance & area measurements',
            'Analytical explanation and practical use case',
          ],
        },
        {
          type: 'reflection',
          title: 'Documentation: Spatial Analysis Log',
          content: 'Record your mapping methodology, satellite findings, distance measurements, and reflections on how orbital perspectives transform ground-level decision making.',
        },
      ],
    },
  ],
};
