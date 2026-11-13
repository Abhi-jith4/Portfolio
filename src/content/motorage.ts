import type { ProjectData } from './types';

const mg: ProjectData = {
  slug: 'motorage',
  title: 'Team Motorage Vehicle Dashboard',
  subtitle:
    'A compact LVGL interface for an electric BAJA vehicle, displaying driving information and vehicle fault status.',
  tags: ['Embedded UI', 'C / LVGL', 'CAN Bus', 'Electric Vehicle', 'Automotive HMI'],
  accent: '#00F56A',
  accentBg: '#020B0F',
  year: '2026',
  coverMedia: { type: 'video', src: '/assets/motorage/demo.mp4', poster: '/assets/motorage/poster.jpg' },
  overview:
    'Team Motorage designed and engineered an all-electric off-road vehicle for SAE eBAJA 2026. Operating in rough terrain, the driver needed a single cockpit interface to track speed, motor conditions, and vehicle vitals at a glance, while allowing engineering team members to diagnose electrical subsystems and contactor states without connecting external diagnostic laptops. Built on a Raspberry Pi 4 with a 1024×600 HDMI touchscreen, the dashboard decodes real-time CAN bus telemetry and delivers high-contrast glanceability under harsh sunlight.',
  myRole: 'UI Design, Embedded UI Development',
  myRoleContributions: [
    'Designed the dashboard interface and screen layouts tailored for a driver operating an electric off-road vehicle.',
    'Organised driving telemetry so speed, accelerator demand, and active gear are instantly recognizable at a glance.',
    'Architected a two-screen separation: Drive screen for essential vehicle operation, and Status screen for engineering diagnostics.',
    'Developed the embedded interface in C using the lightweight LVGL (Light and Versatile Graphics Library).',
    'Implemented touchscreen interactions, including a guarded 2-second hold-to-reset mechanism for trip distance.',
    'Simulated CAN telemetry scenarios on a desktop simulator and captured demonstration cycles across normal and faulted states.',
  ],
  team: 'Team Motorage · SAE eBAJA · 40 Members',
  timeline: 'Completed November 2026',
  status: 'Built and simulated · Competition scheduled for December 2026',
  stats: [
    { value: '02', label: 'Dashboard Screens', description: 'Drive and Status' },
    { value: '08', label: 'Fault Monitoring Channels', description: 'Vehicle health monitoring' },
    { value: '05', label: 'Diagnostic Checks', description: 'Sensor and CAN health' },
    { value: '02s', label: 'Hold-to-Reset', description: 'Trip distance reset interaction' },
  ],
  contextData: {
    heading: 'A cockpit display built for rapid off-road decision-making.',
    body: 'During an endurance race, an off-road driver is absorbed in track navigation, obstacle avoidance, and constant steering corrections. The dashboard must bridge two distinct operational needs: providing immediate, split-second driving telemetry to the driver, and exposing deep electrical diagnostics to the technical crew during pit stops:',
    subsystems: [
      {
        title: 'Real-Time Drive Telemetry',
        description: 'Displays speed on a 0–120 km/h green radial arc, accelerator pedal percentage, active gear, direction, and dual temperature gauges.',
      },
      {
        title: 'Battery & Motor Diagnostics',
        description: 'Tracks DC bus voltage, controller current, motor RPM, and thermal limits across the electric powertrain.',
      },
      {
        title: '8-Channel Fault System',
        description: 'Continuously monitors overcurrent, overvoltage, undervoltage, thermal cutoff, and sensor integrity over CAN.',
      },
      {
        title: 'DC Contactor & Pre-Charge',
        description: 'Provides visual confirmation of high-voltage contactor engagement and safe pre-charge sequences.',
      },
      {
        title: 'CAN Network Health',
        description: 'Live heartbeat verification across motor controllers, battery management, and sensor nodes.',
      },
      {
        title: 'Trip Distance Counter',
        description: 'Tracks cumulative distance with a guarded 2-second hold-to-reset interaction designed for vibration resilience.',
      },
    ],
  },
  problem: {
    headline: 'High-speed vibration, rough terrain, and split-second glances.',
    body: 'Cockpit interfaces for off-road buggies operate under severe physical constraints: intense sunlight glare, heavy chassis vibration, and zero tolerance for driver distraction. Five core design challenges guided the interface development:',
    challenges: [
      {
        title: 'Glanceable Information',
        body: 'The driver can only glance away from the track for a fraction of a second. Speed must read immediately without eye strain or mental conversion.',
      },
      {
        title: 'No Deep Menus',
        body: 'Important vehicle values must never be buried beneath multiple screens, dropdowns, or complex menu trees while driving.',
      },
      {
        title: 'Distinct Fault Conditions',
        body: 'Fault states must be unmistakably visible the moment they trigger, yet the screen must remain calm and clutter-free during nominal operation.',
      },
      {
        title: 'Clear Visual Hierarchy',
        body: 'Prioritizing primary driving metrics (speed and gear) over secondary parameters (temperatures and voltage) through contrast and scale.',
      },
      {
        title: 'Touchscreen Reliability on Bumpy Tracks',
        body: 'On uneven terrain, accidental finger taps occur frequently. Destructive actions like resetting trip distance require deliberate hold input.',
      },
    ],
  },
  principles: [
    {
      title: 'Glanceable Information',
      body: 'The speedometer is the dominant visual anchor with large numerals and a green dynamic radial arc. Peripheral labels remain small and muted, ensuring numbers can be read in a fraction of a second.',
    },
    {
      title: 'Clear Screen Separation',
      body: 'Strict division of purpose: the Drive screen presents only essential operational data for the driver, while the Status screen contains comprehensive electrical diagnostics for engineers.',
    },
    {
      title: 'Consistent Visual Feedback',
      body: 'Color is strictly reserved for state changes. Green indicates active forward drive and nominal health, cyan represents normal sensor telemetry, and bright red is reserved exclusively for critical warnings and faults.',
    },
    {
      title: 'Touch-Friendly Interaction',
      body: 'Touch targets are generously proportioned for gloved or vibrating fingers. Destructive actions, such as resetting the trip meter, require an intentional 2-second continuous hold.',
    },
    {
      title: 'Readable Fault Information',
      body: 'The Status screen arranges eight fault channels into a structured, fixed-dimension list. Channel rows never shift position or change height when a fault triggers, ensuring predictable scanning under stress.',
    },
  ],
  processSections: [
    {
      id: 'step-1',
      heading: '1. Understand Driver & Vehicle Operational Requirements',
      body: 'Analyzed the physical demands of SAE eBAJA endurance racing to determine which metrics the driver must monitor continuously versus what engineers inspect in pit lane.',
    },
    {
      id: 'step-2',
      heading: '2. Establish Dual-Screen Information Architecture',
      body: 'Separated operational driving data from deep electrical telemetry, structuring the interface into dedicated DRIVE and STATUS views with single-touch tab switching.',
    },
    {
      id: 'step-3',
      heading: '3. Design Glanceable Visual Layouts in Figma',
      body: 'Designed 1024×600 pixel layouts with high-contrast surfaces, a large central speedometer arc, bold single-letter gear indicators, and structured sensor clusters.',
    },
    {
      id: 'step-4',
      heading: '4. Design Intentional Touch & Safety Mechanisms',
      body: 'Engineered the 2-second hold-to-reset interaction to prevent accidental trip zeroing, and established threshold-based visual alarms for motor and controller thermal cutoffs.',
    },
    {
      id: 'step-5',
      heading: '5. Develop Embedded UI with C and LVGL',
      body: 'Implemented the production interface in C using LVGL, creating lightweight, memory-efficient widgets optimized for smooth rendering on Raspberry Pi 4 hardware.',
    },
    {
      id: 'step-6',
      heading: '6. Simulate Scenarios & Validate Interface States',
      body: 'Executed scripted CAN telemetry sequences in a desktop simulator to rigorously test nominal driving, contactor cycling, thermal spikes, and multi-channel fault states.',
    },
  ],
  screenshotGroups: [
    {
      id: 'drive-screen',
      title: 'A. Drive Screen — Primary Cockpit Layout',
      description:
        'The primary driving interface designed for split-second glanceability. Speed is the hero visual anchor (0–120 km/h green radial arc with bold central numerals), accompanied by an accelerator pedal percentage bar, prominent single-letter direction (F/N/R), active gear indicator (1/2/3/N), and a lower telemetry bar with motor temperature, trip distance, and controller temperature.',
      screens: [
        {
          src: '/assets/motorage/screens/02_drive_forward_48kmh.png',
          alt: 'Motorage Drive Screen in active forward motion at 48 km/h',
          title: 'Active Forward Drive (48 km/h, Gear 2)',
          description:
            'Shows green speed arc extended to 48 km/h, 48% accelerator demand bar, Forward direction indicator, Gear 2, and dual nominal temperature readouts.',
        },
        {
          src: '/assets/motorage/screens/01_drive_idle_neutral.png',
          alt: 'Motorage Drive Screen at idle in neutral',
          title: 'Idle & Neutral Baseline (0 km/h, Neutral)',
          description:
            'Calm baseline state with zero speed arc, Neutral direction indicator, Gear N, and 0% accelerator demand ready for driver input.',
        },
      ],
    },
    {
      id: 'status-screen',
      title: 'B. Status Screen — Dedicated Vehicle Health & Diagnostics',
      description:
        'A dedicated diagnostic view for engineering crew members and pre-race technical inspections. Features a high-contrast top banner displaying "NO FAULT DETECTED" in green, a left panel tracking electrical telemetry (motor RPM, temperatures, controller current, DC bus voltage, and throttle), and a right panel grouping five controller diagnostic checks and eight dedicated fault monitoring channels.',
      screens: [
        {
          src: '/assets/motorage/screens/10_status_nominal.png',
          alt: 'Motorage Status Screen displaying nominal vehicle health',
          title: 'Nominal Health Overview (Contactor ON, All Channels Clear)',
          description:
            'Clean baseline state with green "NO FAULT DETECTED" banner, active DC contactor indicator, healthy motor/controller metrics, and all 8 fault channels reading nominal.',
        },
      ],
    },
    {
      id: 'vehicle-telemetry',
      title: 'C. Vehicle Information & Dynamic Drive States',
      description:
        'To eliminate cognitive load during severe chassis vibration, the interface geometry remains completely rigid across all operational modes. As the driver accelerates, shifts gears, or backs up, only the numerals, gauge arcs, and direction letters change, preserving a reliable mental map.',
      screens: [
        {
          src: '/assets/motorage/screens/03_drive_high_speed_95kmh.png',
          alt: 'Motorage Drive Screen at high speed of 95 km/h in gear 3',
          title: 'High-Speed Operation (95 km/h, Gear 3)',
          description:
            'Dynamic high-speed state showing the green arc extending to 95 km/h, 82% accelerator demand, and Gear 3 engagement with clear thermal stability.',
        },
        {
          src: '/assets/motorage/screens/04_drive_reverse.png',
          alt: 'Motorage Drive Screen in reverse maneuver',
          title: 'Reverse Maneuver (6 km/h, Direction R, Gear R)',
          description:
            'Low-speed reverse operation with prominent direction letter R and Gear R, providing immediate tactile and visual confirmation.',
        },
      ],
    },
    {
      id: 'fault-diagnostics',
      title: 'D. Fault, Thermal & Diagnostic States',
      description:
        'Critical safety alerts are communicated through proactive, unambiguous visual feedback without disruptive modal popups. When thermal limits are breached (motor >90°C or controller >80°C), values and thermometer icons transition to alert red. On the Status screen, individual fault channels illuminate in red while maintaining fixed row dimensions.',
      screens: [
        {
          src: '/assets/motorage/screens/05_drive_over_temp.png',
          alt: 'Motorage Drive Screen displaying motor and controller thermal warnings',
          title: 'Thermal Warning on Drive Screen',
          description:
            'Motor temperature (95°C) and controller temperature (85°C) turn alert red immediately upon exceeding thresholds, warning the driver without obscuring speed.',
        },
        {
          src: '/assets/motorage/screens/11_status_contactor_off.png',
          alt: 'Motorage Status Screen with DC contactor off',
          title: 'Vehicle Idle / Contactor Open',
          description:
            'Pre-charge state showing the main DC contactor deactivated, operation mode set to STOP, and zero current draw.',
        },
        {
          src: '/assets/motorage/screens/12_status_fault_overcurrent.png',
          alt: 'Motorage Status Screen with overcurrent fault active',
          title: 'Single-Channel Fault State (Overcurrent)',
          description:
            'Top banner flips to red "FAULT DETECTED" and the Overcurrent row illuminates with a red FAULT badge, pinpointing the issue instantly.',
        },
        {
          src: '/assets/motorage/screens/13_status_all_faults.png',
          alt: 'Motorage Status Screen stress test with all fault channels active',
          title: 'Multi-Channel Fault Stress State',
          description:
            'Simulated worst-case scenario demonstrating that fixed row heights and structured column alignments remain perfectly legible even under multiple concurrent faults.',
        },
      ],
    },
    {
      id: 'touch-interactions',
      title: 'E. Touch Interactions & Guarded Hold-to-Reset',
      description:
        'Operating an off-road buggy means unintentional screen taps are frequent due to chassis bumps. To prevent accidental loss of trip data, the trip reset control requires a deliberate 2-second continuous press. During the hold, the button provides active progress feedback ("RESETTING..."). If the driver releases early, the reset cancels and the previous value is restored without interrupting drive telemetry.',
      screens: [
        {
          src: '/assets/motorage/screens/06_reset_before_trip_12.6km.png',
          alt: 'Motorage hold-to-reset initial state showing trip distance 12.6 km',
          title: 'State 1: Initial Counter (Trip 12.6 km)',
          description: 'Standard driving state with accumulated trip distance of 12.6 km before initiating reset.',
        },
        {
          src: '/assets/motorage/screens/07_reset_holding_RESETTING.png',
          alt: 'Motorage hold-to-reset active press state showing RESETTING text',
          title: 'State 2: Active Press-and-Hold (RESETTING...)',
          description: 'Button highlights and displays "RESETTING..." feedback while the driver maintains a continuous 2-second touch.',
        },
        {
          src: '/assets/motorage/screens/08_reset_done_trip_0.0km.png',
          alt: 'Motorage hold-to-reset completed state showing 0.0 km',
          title: 'State 3: Reset Confirmation (Trip 0.0 km)',
          description: 'Full 2-second hold completes successfully, zeroing the trip counter to 0.0 km.',
        },
        {
          src: '/assets/motorage/screens/09_reset_cancelled_early_release.png',
          alt: 'Motorage hold-to-reset cancelled state restoring 12.6 km',
          title: 'State 4: Cancelled Early Release (Restored 12.6 km)',
          description: 'Releasing the button before 2 seconds immediately aborts the reset and restores the previous 12.6 km reading.',
        },
      ],
    },
  ],
  designSystem: {
    palette: [
      {
        name: 'Canvas Black',
        hex: '#020B0F',
        role: 'Deep Background',
        desc: 'Deep black background minimizing nighttime glare and maximizing visual contrast under direct bright sunlight.',
      },
      {
        name: 'Panel Surface',
        hex: '#04151D',
        role: 'Elevated Cards & Panels',
        desc: 'Subtle dark teal container background grouping related telemetry data without adding visual weight.',
      },
      {
        name: 'Panel Border',
        hex: '#0A4E5C',
        role: 'Structural Dividers',
        desc: 'Subtle outline defining card boundaries and modular data zones cleanly.',
      },
      {
        name: 'Signal Green',
        hex: '#00F56A',
        role: 'Primary State & Speed Arc',
        desc: 'Primary interactive and operational color: speedometer radial arc, active gear, CAN OK indicator, and nominal health banner.',
      },
      {
        name: 'Telemetry Cyan',
        hex: '#00BDEB',
        role: 'Secondary Telemetry',
        desc: 'Used across secondary metrics: motor and controller temperature gauges, DC bus voltage, and trip distance.',
      },
      {
        name: 'Alert Red',
        hex: '#FF4D4D',
        role: 'Over-Temp & Critical Faults',
        desc: 'Reserved exclusively for critical safety states: motor/controller over-temperature warnings, contactor cutoffs, and active fault badges.',
      },
    ],
    typography: [
      {
        level: 'Hero Numerals',
        size: '44px–48px',
        weight: 'Bold (700)',
        usage: 'Central digital speedometer readout and main trip numerals for instant split-second glanceability.',
      },
      {
        level: 'Secondary Telemetry',
        size: '18px–24px',
        weight: 'SemiBold (600)',
        usage: 'Motor RPM, battery voltage, temperature readings, and direction / gear indicator letters.',
      },
      {
        level: 'Peripheral Labels & Units',
        size: '11px–12px',
        weight: 'Medium / Muted Caps (500)',
        usage: 'Widely tracked uppercase labels (e.g. ACCELERATOR, MOTOR TEMP, TRIP DISTANCE) that never compete with data values.',
      },
    ],
    components: [
      {
        title: 'Speedometer Radial Arc Gauge',
        description:
          'Dynamic 0–120 km/h circular arc with large central numeral that smoothly fills with Signal Green as vehicle velocity increases.',
      },
      {
        title: 'Segmented Header & Screen Tabs',
        description:
          'Fixed top bar providing one-touch switching between DRIVE and STATUS views with a persistent CAN OK communication heartbeat.',
      },
      {
        title: 'Guarded Hold-to-Reset Button',
        description:
          'Touch-friendly button engineered with a 2-second hold requirement, live "RESETTING..." feedback, and automatic abort on early release.',
      },
      {
        title: 'Fixed-Height Fault Channel Rows',
        description:
          'Structured diagnostic rows displaying channel names and green/red status badges with rigid heights to prevent layout shifts.',
      },
      {
        title: 'Modular Telemetry Cards',
        description:
          'Self-contained data cards grouping sensor values, unit labels, and visual progress bars for rapid glance reading.',
      },
    ],
  },
  implementation: {
    heading: 'From vehicle CAN frames to embedded touchscreen pixels.',
    body: 'The dashboard functions as a thin client on the vehicle communication bus. Telemetry frames broadcast by the motor controller and battery management system are decoded and rendered locally with zero desktop toolkit overhead:',
    items: [
      {
        title: 'Raspberry Pi 4 & HDMI Touchscreen',
        description: 'Runs on a 1024×600 7-inch HDMI capacitive touchscreen powered by a Raspberry Pi 4 compute module.',
        badge: 'Hardware Platform',
      },
      {
        title: 'C & LVGL Graphics Framework',
        description: 'Developed in C using the Light and Versatile Graphics Library (LVGL), providing low memory footprint and high-speed rendering.',
        badge: 'Embedded Software',
      },
      {
        title: 'CAN Bus Communication Architecture',
        description: 'Decodes broadcast frames from the electric motor controller and battery management system over high-speed CAN 2.0B.',
        badge: 'Vehicle Bus',
      },
      {
        title: 'Desktop Simulation & Scripted Scenarios',
        description: 'Interface logic was rigorously verified on a desktop simulator using scripted test sequences before physical hardware deployment.',
        badge: 'Validation',
      },
      {
        title: '13 Verified Operational States',
        description: 'Verified all nominal, high-speed, reverse, thermal warning, hold-to-reset, and multi-channel fault scenarios.',
        badge: 'Test Coverage',
      },
    ],
  },
  keyScreens: [],
  videoSrc: '/assets/motorage/demo.mp4',
  videoPoster: '/assets/motorage/poster.jpg',
  outcome: {
    done: [
      'Designed a two-screen dashboard separating driving information from vehicle health monitoring.',
      'Organised essential vehicle information into a clear visual hierarchy.',
      'Created structured fault-monitoring and diagnostic views.',
      'Implemented touchscreen navigation and interaction patterns.',
      'Developed and simulated the embedded interface using Raspberry Pi 4 and LVGL.',
    ],
    limitsHeading: 'Current limitations',
    honestLimits: [
      'Live CAN bus validation against the physical vehicle motor controller is pending final vehicle assembly.',
      'Sunlight legibility, glare resilience, and vibration dampening will be evaluated during upcoming track testing.',
      'The vehicle has not yet competed; formal competition is scheduled for December 2026.',
    ],
    nextSteps: [
      'Evaluating information readability and control accessibility with drivers.',
      'Refining the presentation of alerts and fault information.',
      'Improving the clarity of critical-state feedback.',
      'Gathering driver feedback during actual vehicle operation and refining the interface accordingly.',
    ],
    takeawayHeading: 'Design reflection',
    takeaway:
      'Designing the Motorage dashboard helped me understand how important information hierarchy and visual feedback are in interfaces where users need to make quick decisions. It taught me to prioritise essential information, simplify complex data, and design interactions that remain clear under demanding operating conditions.',
  },
};

export default mg;
