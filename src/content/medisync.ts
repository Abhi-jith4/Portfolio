import type { ProjectData } from './types';

const ms: ProjectData = {
  slug: 'medisync',
  title: 'MediSync',
  subtitle: 'A connected medication dispensing and remote vital monitoring system.',
  tags: ['Mobile App', 'React Native', 'Firebase', 'IoT', 'Hardware'],
  accent: '#8B5CF6',
  accentBg: '#0F0A1E',
  year: '2026',
  coverMedia: { type: 'image', src: '/assets/medisync/cover.png' },
  physicalPhoto: {
    src: '/assets/medisync/medisync.jpeg',
    alt: 'The physical MediSync prototype — dual-outlet tablet and syrup dispenser with integrated vitals monitoring station',
    caption: 'The physical MediSync prototype — dual-outlet tablet and syrup dispenser with integrated vitals monitoring station',
  },
  overview:
    'MediSync pairs a tabletop dispenser for tablets and syrup with a vitals station that reads SpO₂, heart rate and stress. Both report to one mobile app through Firebase. A caregiver can schedule doses, see whether a dose was actually dispensed, and take a reading without being in the room. There is no static IP, port forwarding or Bluetooth pairing anywhere in the setup.',
  myRole:
    'App Development, Hardware Integration & Testing',
  myRoleContributions: [
    'Mobile application UI/UX design and frontend development using React Native 0.81 and Expo SDK 54.',
    'Engineered the cloud data model on Firebase Realtime Database for real-time bidirectional telemetry.',
    'Constructed the physical enclosure from foam board with precision cutouts for dual outlets and dual displays.',
    'Wired the dispenser electronics (stepper carousel & peristaltic pump) and vitals sensors (MAX30102 & AD8232).',
    'Tested end-to-end communication between the two independent ESP32 microcontrollers and the mobile app.',
  ],
  team: 'Abhijith V S, Pranav E, Abhiram S, Emmanuel Das',
  timeline: 'Completed May 2026',
  status: 'Prototype Completed · App v1.0',
  stats: [
    {
      value: '05',
      label: 'Tablet Compartments',
      description: 'Scheduled tablet dispensing',
    },
    {
      value: '05',
      label: 'Syrup Compartments',
      description: 'Automated liquid dispensing',
    },
    {
      value: '0.5–15 mL',
      label: 'Adjustable Dosage',
      description: 'Configurable syrup quantities',
    },
    {
      value: 'Live',
      label: 'Device Monitoring',
      description: 'Connection and dispensing status',
    },
  ],
  problem: {
    headline: 'Dosing at home breaks in the gaps between devices.',
    body: 'A reminder on a phone says nothing about whether a tablet actually came out. Caregivers manage medication from a distance with no objective confirmation, while vital signs live in silos on separate gadgets that require manual recording and complex network configuration.',
    challenges: [
      {
        title: 'Schedule and pill are separate',
        body: 'A phone reminder alerts the patient, but offers no physical confirmation that a tablet was actually dispensed from the carousel.',
      },
      {
        title: 'Caregivers are remote',
        body: 'Family members and caregivers have no way to verify adherence or vital trends without constant phone check-ins or manual logging.',
      },
      {
        title: 'Vital readings live in silos',
        body: 'Oxygen saturation and pulse readings are taken intermittently on standalone gadgets, remembered for an hour, but never systematically recorded.',
      },
      {
        title: 'Complex home IoT setups',
        body: 'Conventional local-network gadgets demand static IPs, port forwarding, or Bluetooth pairing that non-technical families cannot debug.',
      },
    ],
  },
  principles: [
    {
      title: 'Never claim a status that was not proven',
      body: 'A device is displayed as Connected only while its last heartbeat is under 35 seconds old. Otherwise, the status card switches to Offline and turns red.',
    },
    {
      title: 'Make state readable at a glance',
      body: 'Every slot uses unambiguous semantic color: Grey (unset), Orange (uploaded & waiting in cloud), Green (dispensed). Vitals carry a plain-language status word next to the number.',
    },
    {
      title: 'Remote first, no pairing',
      body: 'All commands, schedules, and readings travel through Firebase Realtime Database. The app works from any cellular or Wi-Fi network with zero local-network pairing.',
    },
  ],
  architecture: {
    diagramSrc: '/assets/medisync/screens/page05.png',
    summary:
      'Firebase Realtime Database serves as the decoupled single source of truth between the two ESP32 microcontrollers and the React Native mobile app. Nothing talks directly over the local network.',
    nodes: [
      {
        title: 'Dispenser Node (ESP32)',
        role: 'Physical Dispensing & Clock',
        tech: ['ESP32-WROOM-32', 'Stepper Carousel', 'Peristaltic Pump', 'NTP Clock'],
        details:
          'Rotates carousel to drop tablets at scheduled hour/minute. Drives peristaltic pump for calibrated liquid volume (0.5–15 ml). Maintains synchronized NTP time and writes status heartbeats.',
      },
      {
        title: 'Vitals Node (ESP32)',
        role: 'Biometric Acquisition',
        tech: ['ESP32-WROOM-32', 'MAX30102 Oximeter', 'AD8232 ECG Front-End'],
        details:
          'Listens for trigger mode set by app. Executes high-frequency sampling for SpO₂ and ECG/heart-rate, packages readings with status words, and pushes records to the cloud.',
      },
      {
        title: 'Firebase Realtime Database',
        role: 'Decoupled Cloud Contract',
        tech: ['WebSockets', 'JSON Realtime DB', 'Timestamp Indexing'],
        details:
          'Holds paths: dispenser/status, slots/0..4, syrupSlots/0..4, vitals/status, vitals/current_mode, vitals/spo2, and vitals/ecg. Ensures hardware and app evolve without blocking each other.',
      },
      {
        title: 'Mobile App (React Native)',
        role: 'Caregiver Command Center',
        tech: ['React Native 0.81', 'Expo SDK 54', 'onValue() Listeners', 'AsyncStorage'],
        details:
          'Subscribes to real-time database paths. Evaluates the 35s sliding heartbeat window, handles dosage editing with save cooldowns, and visualizes historical vital trends.',
      },
    ],
  },
  screenshotGroups: [
    {
      id: 'home-overview',
      title: 'Group 1 — Home & Device Overview',
      description:
        'The primary command screen provides instant certainty on hardware connectivity before presenting quick-access shortcuts to medicine, syrup, and vital diagnostics.',
      screens: [
        {
          src: '/assets/medisync/screens/01_home_checking.png',
          alt: 'MediSync Home screen — checking connection state',
          title: 'Checking Connection State',
          description:
            'Initial launch state comparing local device timestamp against the last recorded ESP32 heartbeat to ensure link freshness.',
        },
        {
          src: '/assets/medisync/screens/02_home_connected.png',
          alt: 'MediSync Home screen — connected state with module shortcuts',
          title: 'Connected Dashboard',
          description:
            'Real-time dashboard showing validated online status, direct navigation cards to dispenser modules, and instant vitals telemetry shortcuts.',
        },
      ],
    },
    {
      id: 'medicine-dispensing',
      title: 'Group 2 — Medicine Dispensing',
      description:
        'Five independent tablet slots mapped directly to the physical stepper carousel with automated status progression and refill warnings.',
      screens: [
        {
          src: '/assets/medisync/screens/03_medicine_slots.png',
          alt: 'MediSync Medicine Slots screen showing 5 timed slots and dispensed tracking',
          title: 'Medicine Slots Interface',
          description:
            'Five tablet slots with independent daily schedules. Color-coded states: Grey (unset), Orange (saved to cloud), Green (dispensed). Automatically triggers "REFILL REQUIRED" when carousel completes 5 cycles.',
        },
      ],
    },
    {
      id: 'syrup-dispensing',
      title: 'Group 3 — Syrup Dispensing',
      description:
        'Liquid medication channels calibrated to a precision peristaltic pump, enabling exact volume dispensing without manual measuring cups.',
      screens: [
        {
          src: '/assets/medisync/screens/04_syrup_slots.png',
          alt: 'MediSync Syrup Slots screen with time and volume per slot',
          title: 'Syrup Schedule Overview',
          description:
            'Five liquid dosage channels displaying programmed delivery time and calibrated volume per slot.',
        },
        {
          src: '/assets/medisync/screens/05_syrup_volume_picker.png',
          alt: 'MediSync Syrup Volume Picker modal with 0.5 to 15 ml selector',
          title: 'Syrup Volume Calibration Modal',
          description:
            'Centered one-tap volume picker allowing caregivers to set exact liquid medicine dosage from 0.5 ml up to 15 ml with immediate cloud sync.',
        },
      ],
    },
    {
      id: 'vital-monitoring',
      title: 'Group 4 — Vital Monitoring',
      description:
        'Remote biometric station controlled on demand through the mobile app. The smartphone never measures anything itself — it commands the hardware node and displays clinician-friendly context.',
      screens: [
        {
          src: '/assets/medisync/screens/06_heart_rate_stress.png',
          alt: 'MediSync Heart Rate & Stress monitoring screen with BPM and history',
          title: 'Heart Rate & Stress Tracking',
          description:
            'On-demand ECG/pulse analysis showing live BPM, historical log (capped at 30 readings, newest first), and computed stress assessment.',
        },
        {
          src: '/assets/medisync/screens/07_spo2_monitoring.png',
          alt: 'MediSync SpO2 monitoring screen with percentage and status badge',
          title: 'SpO₂ Blood Oxygen Monitoring',
          description:
            'Displays percentage oxygen saturation accompanied by clinical status words ("Normal", "Low", "Seek care") and a "Reset Sensor" button to re-calibrate against ambient light or skin resistance noise.',
        },
      ],
    },
  ],
  technicalDecisions: [
    {
      topic: 'Is the device really online?',
      problem: 'A boolean flag set once becomes stale if power or Wi-Fi cuts out abruptly.',
      solution:
        'Compare the last recorded heartbeat to current time: under 35s is displayed as Connected. Checked every 3s and instantly upon any fresh vitals heartbeat.',
    },
    {
      topic: 'Edits snapping back',
      problem:
        'The live onValue() listener could overwrite local slot edits before the cloud confirmed the write.',
      solution:
        'Enforced a 5-second save cooldown. The status badge displays an orange "Save" state, then cleanly settles to "Uploaded".',
    },
    {
      topic: 'Showing the correct time',
      problem: 'Microcontroller hardware clocks and smartphone clocks frequently drift.',
      solution:
        'Synchronize the ESP32 via NTP and display hardware clock time. The mobile app ticks locally each second from the last sync.',
    },
    {
      topic: 'Running out of doses',
      problem: 'Silent empty slots are the most dangerous failure mode in automatic medication dispensing.',
      solution:
        'When the dispensed count reaches 5, the interface flags "REFILL REQUIRED" and prevents further cycles until a refill command resets the counter on next sync.',
    },
    {
      topic: 'Noisy optical sensor readings',
      problem: 'Pressure, ambient illumination, and cold skin distort photoplethysmography readings.',
      solution:
        'Added an in-app "Reset Sensor" command to reboot the optical baseline, and paired every reading with a contextual status word instead of an isolated number.',
    },
  ],
  processSections: [
    {
      id: 'enclosure-hardware',
      heading: 'Hardware Enclosure & Prototype Construction',
      body: 'The physical device was built inside a custom foam-board enclosure designed to unite two distinct mechanical functions: a rotating stepper carousel for tablets and a peristaltic liquid pump for syrup. The front panel features precision cutouts for a stainless tablet collection cup, a liquid measuring beaker, an OLED display for system status, and a secondary color screen for patient feedback.',
      media: {
        type: 'image',
        src: '/assets/medisync/screens/page06.png',
        alt: 'Physical product breakdown showing enclosure callouts 1 through 7',
      },
    },
    {
      id: 'data-model',
      heading: 'Unified Cloud Data Model',
      body: 'The entire product operates around a single, lightweight JSON tree in Firebase Realtime Database. Both ESP32 nodes and the React Native app read and write the same paths over secure WebSockets. Heartbeats carry Unix timestamps, while vital records carry both human-readable strings and numeric timestamps for effortless chronological sorting.',
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
      'Completed physical prototype and React Native mobile application (v1.0).',
      'Engineered two independent ESP32 microcontrollers coordinating dispensing and biometrics over Firebase.',
      'Automated scheduled tablet dispensing across 5 carousel slots and syrup dispensing (0.5–15 ml).',
      'Remote vitals measurement pipeline capturing SpO₂ and ECG/stress on demand without local network pairing.',
      'Verified 35-second heartbeat window and 5-second save cooldown eliminating false connection confidence and edit snap-back.',
    ],
    honestLimits: [
      'A prototype. Biometric sensors are intended for demonstration and home monitoring, not certified medical-grade diagnosis.',
      'No multi-user authentication accounts or native mobile push notifications in v1.0.',
    ],
    nextSteps: [
      'Improved medication scheduling and tracking experience with clearer reminders and visual status indicators.',
      'User authentication with dedicated login and sign-up screens.',
      'Historical health data tracking and downloadable PDF reports.',
    ],
    takeaway:
      "Designing MediSync taught me that a good interface is more than displaying information. It's about helping users understand what's happening, know what action to take, and feel confident using the product.",
  },
};

export default ms;
