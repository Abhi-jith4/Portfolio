import type { ProjectData } from './types';

const ms: ProjectData = {
  slug: 'medisync',
  title: 'MediSync – Smart Medicine Dispenser',
  subtitle: 'A connected pill & syrup dispensing machine with remote health vitals monitoring.',
  tags: ['Mini Project', 'Completed Prototype', 'Product Design', 'IoT Hardware', 'Healthcare', 'Mobile App'],
  accent: '#8B5CF6',
  accentBg: '#0F0A1E',
  year: '2026',
  coverMedia: { type: 'image', src: '/assets/medisync/cover.png' },
  physicalPhoto: {
    src: '/assets/medisync/medisync.jpeg',
    alt: 'The physical MediSync prototype — dual-outlet tablet and syrup dispenser with integrated vitals monitoring station',
    caption: 'The physical MediSync prototype — dual-outlet tablet and syrup dispenser with integrated vitals monitoring station',
  },
  externalLinks: [
    {
      label: 'View GitHub Repository',
      url: 'https://github.com/Abhi-jith4/SmartMed-IoT-System',
      icon: 'github',
    },
  ],
  overview:
    'MediSync is a smart medicine dispensing and remote health monitoring system designed to help elderly people who may forget to take their medicines at the correct time. We identified that people experiencing memory-related difficulties frequently miss their medication schedules. To solve this, we developed a physical product that dispenses scheduled pills and syrups automatically. Caregivers configure dispensing times through a mobile app, while the device also reads the patient’s heart rate and blood oxygen (SpO₂) and displays the readings in the app.',
  myRole: 'Product Design, Hardware Assembly & Motor Programming',
  myRoleContributions: [
    'Mobile Application Design: Designed the MediSync mobile app interface in Figma, including medicine scheduling, dispensing status, and patient health monitoring screens.',
    'Hardware Connections: Contributed to connecting the electronic components, microcontrollers, and sensors used in the dispenser and health monitoring station.',
    'Motor Programming: Contributed to programming and controlling the multiple motors involved in the medicine dispensing mechanism (rotating stepper motor for pills and liquid pump for syrups).',
    'Health Monitoring: Worked on integrating health monitoring features that collect heart rate and blood oxygen (SpO₂) readings and display them in the mobile application.',
    'System Integration: Contributed to connecting the mobile application with the hardware system so users can schedule medicines and receive updated health information in real time.',
  ],
  team: 'Abhijith V S, Pranav E, Abhiram S, Emmanuel',
  timeline: 'Completed May 2026',
  status: 'Mini Project · Functional Hardware Prototype',
  stats: [
    {
      value: 'Mini Project',
      label: 'Academic Scope',
      description: 'Completed hardware & software prototype',
    },
    {
      value: '05',
      label: 'Pill Compartments',
      description: 'Motorized automatic tablet dispensing',
    },
    {
      value: '05',
      label: 'Syrup Compartments',
      description: 'Calibrated pump liquid dispensing',
    },
    {
      value: 'Pulse & SpO₂',
      label: 'Health Monitoring',
      description: 'Real-time vital signs in the mobile app',
    },
  ],
  problem: {
    headline: 'Helping elderly patients take the right medicine at the right time.',
    body: 'Managing daily medications is stressful for elderly individuals, especially those dealing with memory difficulties. Phone reminders ring, but they do not guarantee that pills were actually taken. Family members who live away worry because they cannot easily verify if their loved ones took their morning or evening doses.',
    challenges: [
      {
        title: 'Forgetting Medication Times',
        body: 'Elderly patients often forget whether they took their morning pills or afternoon syrup, leading to missed doses or accidental double-dosing.',
      },
      {
        title: 'Remote Family Worry',
        body: 'Family members and caregivers living separately have no reliable way to verify if medication was taken without making repeated phone calls throughout the day.',
      },
      {
        title: 'Scattered Health Measurements',
        body: 'Vital measurements like pulse and oxygen levels are usually measured with standalone finger clips and quickly forgotten instead of being tracked over time.',
      },
      {
        title: 'Complicated Device Setup',
        body: 'Many smart devices require complex Bluetooth pairing or local Wi-Fi setup that elderly patients find intimidating and difficult to manage.',
      },
    ],
  },
  principles: [
    {
      title: 'Physical Confirmation Over Simple Reminders',
      body: 'The system only marks a dose as dispensed after the physical motor has actually turned and dropped the medicine into the collection cup.',
    },
    {
      title: 'Clear Colors Anyone Can Understand',
      body: 'Medicine slots use simple visual indicators: Grey means unset, Orange means scheduled and saved, and Green confirms the dose was successfully dispensed.',
    },
    {
      title: 'Works from Anywhere Without Complicated Setup',
      body: 'All schedules and health readings sync securely through cloud database connection. Caregivers can check in from any phone without requiring Bluetooth pairing.',
    },
  ],
  architecture: {
    diagramSrc: '/assets/medisync/screens/page05.png',
    summary:
      'MediSync connects the physical dispenser machine and health sensors directly to the caregiver mobile app through a secure cloud database, so updates happen in real time from anywhere.',
    nodes: [
      {
        title: 'Pill & Syrup Dispenser Box',
        role: 'Physical Dispensing Machine',
        tech: ['ESP32 Microcontroller', 'Stepper Carousel', 'Liquid Pump', 'Digital Clock'],
        details:
          'Rotates an internal pill wheel to drop tablets at scheduled times. Runs a precision pump to pour exact syrup quantities (0.5 to 15 ml) and syncs dispensing events with the cloud.',
      },
      {
        title: 'Health Monitoring Station',
        role: 'Pulse & Blood Oxygen Readings',
        tech: ['ESP32 Microcontroller', 'SpO₂ Sensor', 'Heart Rate Sensor', 'OLED Screen'],
        details:
          'Reads the patient’s pulse and blood oxygen percentage when a finger is placed on the sensor, showing numbers immediately on the physical screen and sending them to the app.',
      },
      {
        title: 'Cloud Database (Firebase)',
        role: 'Real-Time Communication Bridge',
        tech: ['Realtime Cloud DB', 'Secure Connection', 'Instant Synchronization'],
        details:
          'Safely stores medication times, dispensing logs, and health readings. Ensures that changes made in the mobile app immediately reach the physical machine.',
      },
      {
        title: 'Mobile App (Caregiver App)',
        role: 'Scheduling & Vitals Dashboard',
        tech: ['React Native', 'Real-Time Sync', 'Local Storage'],
        details:
          'Allows caregivers to set pill and syrup times, check whether the physical machine is currently connected, and review recent heart rate and oxygen readings.',
      },
    ],
  },
  screenshotGroups: [
    {
      id: 'home-overview',
      title: 'Group 1 — Home & Machine Overview',
      description:
        'The main home screen immediately shows whether the dispenser machine is powered on and connected, followed by quick buttons for medicine, syrup, and health checks.',
      screens: [
        {
          src: '/assets/medisync/screens/01_home_checking.png',
          alt: 'MediSync Home screen — checking connection state',
          title: 'Checking Machine Connection',
          description:
            'Shows an initial checking state verifying that the physical machine is powered on and communicating properly before showing controls.',
        },
        {
          src: '/assets/medisync/screens/02_home_connected.png',
          alt: 'MediSync Home screen — connected state with module shortcuts',
          title: 'Connected Dashboard',
          description:
            'Green confirmation badge showing the machine is online, with clear cards to manage pill slots, syrup schedules, and health vitals.',
        },
      ],
    },
    {
      id: 'medicine-dispensing',
      title: 'Group 2 — Tablet Dispensing Schedules',
      description:
        'Five scheduled tablet slots mapped directly to the physical rotating carousel inside the dispenser box.',
      screens: [
        {
          src: '/assets/medisync/screens/03_medicine_slots.png',
          alt: 'MediSync Medicine Slots screen showing 5 timed slots and dispensed tracking',
          title: 'Medicine Slots Interface',
          description:
            'Shows five tablet slots with independent schedules. Color-coded states: Grey (unset), Orange (saved to cloud), and Green (dispensed). Displays a clear "REFILL REQUIRED" notice when all 5 slots are emptied.',
        },
      ],
    },
    {
      id: 'syrup-dispensing',
      title: 'Group 3 — Liquid Syrup Dispensing',
      description:
        'Liquid medicine channels calibrated with the physical pump, pouring exact amounts without needing manual measuring cups.',
      screens: [
        {
          src: '/assets/medisync/screens/04_syrup_slots.png',
          alt: 'MediSync Syrup Slots screen with time and volume per slot',
          title: 'Syrup Schedule Overview',
          description:
            'Five syrup channels displaying scheduled dispensing times and volume amounts set for each dose.',
        },
        {
          src: '/assets/medisync/screens/05_syrup_volume_picker.png',
          alt: 'MediSync Syrup Volume Picker modal with 0.5 to 15 ml selector',
          title: 'Syrup Volume Selector',
          description:
            'Simple popup allowing caregivers to select the exact syrup volume (from 0.5 ml up to 15 ml) with immediate sync to the physical pump.',
        },
      ],
    },
    {
      id: 'vital-monitoring',
      title: 'Group 4 — Health Vitals Monitoring',
      description:
        'Health tracking screen showing measurements taken by the physical sensors, organized in clear, easy-to-read cards.',
      screens: [
        {
          src: '/assets/medisync/screens/06_heart_rate_stress.png',
          alt: 'MediSync Heart Rate & Stress monitoring screen with BPM and history',
          title: 'Heart Rate & Pulse History',
          description:
            'Displays heart rate in beats per minute (BPM) alongside a history log of recent readings so family members can see general trends.',
        },
        {
          src: '/assets/medisync/screens/07_spo2_monitoring.png',
          alt: 'MediSync SpO2 monitoring screen with percentage and status badge',
          title: 'Blood Oxygen (SpO₂) Monitoring',
          description:
            'Shows blood oxygen percentage accompanied by clear plain-language status badges ("Normal", "Low", "Seek care") and a sensor reset button.',
        },
      ],
    },
  ],
  technicalDecisions: [
    {
      topic: 'Confirming if the Machine is Really Online',
      problem: 'If a smart device loses power or Wi-Fi unexpectedly, an app might still show it as connected.',
      solution:
        'The app checks if the physical dispenser sent an electronic heartbeat within the last 35 seconds. If not, it turns red and alerts the user that the device is offline.',
    },
    {
      topic: 'Preventing Accidental Schedule Overwrites',
      problem: 'When a user edits a medicine time, rapid cloud updates could sometimes revert changes before saving.',
      solution:
        'Added a short 5-second save confirmation that displays an orange "Saving" badge before confirming the schedule is safely stored.',
    },
    {
      topic: 'Accurate Clock Timing for Doses',
      problem: 'If phone and microcontroller clocks differ slightly, medication could be dispensed at the wrong minute.',
      solution:
        'The physical dispenser synchronizes its internal clock with accurate internet time (NTP) so alarms always ring at the exact scheduled minute.',
    },
    {
      topic: 'Notifying Caregivers When Doses Run Out',
      problem: 'An automated dispenser running empty without notifying anyone could cause patients to miss doses.',
      solution:
        'When all 5 physical slots have been dispensed, the app flags a prominent "REFILL REQUIRED" warning until the caregiver refills the machine.',
    },
    {
      topic: 'Reliable Pulse & Oxygen Sensor Readings',
      problem: 'Cold hands, movement, or loose finger placement can temporarily affect optical sensor readings.',
      solution:
        'Added an on-screen "Reset Sensor" button to recalibrate the sensor and paired every number with simple guidance words (like "Normal").',
    },
  ],
  processSections: [
    {
      id: 'enclosure-hardware',
      heading: 'Physical Hardware Enclosure & Construction',
      body: 'The physical prototype was constructed as a functional tabletop machine with two integrated dispensing systems: an internal rotating carousel driven by a stepper motor for tablets, and a precision peristaltic pump for liquid syrup. The front panel includes dedicated spaces for a pill collection cup, a syrup beaker, a system status screen, and a patient feedback display.',
      media: {
        type: 'image',
        src: '/assets/medisync/screens/page06.png',
        alt: 'Physical product breakdown showing enclosure callouts 1 through 7',
      },
    },
    {
      id: 'data-model',
      heading: 'Cloud Integration Between App & Hardware',
      body: 'The mobile app and physical dispenser communicate through a secure cloud database. When a caregiver updates a medicine schedule on their phone, the time is transmitted to the physical dispenser. When the patient takes a vital reading or receives a dose, the event is immediately recorded in the app.',
      media: {
        type: 'image',
        src: '/assets/medisync/screens/page10.png',
        alt: 'Firebase Realtime Database schema and data model',
      },
    },
  ],
  keyScreens: [
    { src: '/assets/medisync/screens/01_home_checking.png', alt: 'Home — checking connection', caption: 'Home — checking connection' },
    { src: '/assets/medisync/screens/02_home_connected.png', alt: 'Home — device connected', caption: 'Home — device connected' },
    { src: '/assets/medisync/screens/03_medicine_slots.png', alt: 'Medicine slots', caption: 'Medicine slots' },
    { src: '/assets/medisync/screens/04_syrup_slots.png', alt: 'Syrup slots', caption: 'Syrup slots' },
    { src: '/assets/medisync/screens/05_syrup_volume_picker.png', alt: 'Volume picker', caption: 'Volume picker' },
    { src: '/assets/medisync/screens/06_heart_rate_stress.png', alt: 'Heart rate & stress', caption: 'Heart rate & stress' },
    { src: '/assets/medisync/screens/07_spo2_monitoring.png', alt: 'SpO₂ monitoring', caption: 'SpO₂ monitoring' },
    { src: '/assets/medisync/screens/08_settings.png', alt: 'Settings', caption: 'Settings' },
  ],
  outcome: {
    done: [
      'Built and completed a working physical prototype capable of automated pill and syrup dispensing.',
      'Designed and developed the companion mobile application for medication scheduling and health tracking.',
      'Connected and integrated the electronic circuits, microcontrollers, motors, and health sensors.',
      'Programmed the motor control logic to rotate the pill wheel and pump exact syrup volumes (0.5 to 15 ml).',
      'Established cloud synchronization allowing remote caregivers to schedule doses and view health data.',
    ],
    honestLimits: [
      'This project was built as a functional student mini project prototype; the health sensors are for demonstration and monitoring, not certified medical diagnostic instruments.',
      'The physical housing was handcrafted as a working proof-of-concept prototype rather than a mass-production plastic enclosure.',
    ],
    nextSteps: [
      'Design an injection-molded plastic enclosure suitable for commercial home use.',
      'Add sound and voice reminders directly on the physical dispenser box.',
      'Enable multiple caregiver accounts so several family members can stay informed.',
      'Add downloadable summary reports that can be shared with healthcare providers.',
    ],
    takeaway:
      'Developing MediSync as a mini project was an invaluable experience. It showed me how to take a project from a real problem to an actual physical product—combining user-friendly mobile app design with hands-on electronics, motor control, and hardware integration.',
  },
};

export default ms;
