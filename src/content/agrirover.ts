import type { ProjectData } from './types';

const ag: ProjectData = {
  slug: 'agrirover',
  title: 'AgriRover – Mobile App UX Redesign',
  subtitle:
    'A mobile app designed to simplify rover operation through intuitive navigation, accessible controls, and clear visual feedback.',
  tags: ['Mobile UX', 'Figma', 'UI Design', 'Robotics', 'React Native'],
  accent: '#F97316',
  accentBg: '#1A0D00',
  year: '2026',
  coverMedia: { type: 'video', src: '/assets/agrirover/demo.mp4', poster: '/assets/agrirover/poster.jpg' },
  overview:
    'AgriRover is an autonomous agricultural robot engineered to harvest ripe tomatoes using a 6-DOF robotic arm and an on-board collection box. Operating in dynamic field environments requires an interface where driving, robotic manipulation, live computer vision, and autonomous missions can be managed quickly and safely. This mobile application unifies all five operational subsystems into a glanceable, thumb-accessible cockpit designed in Figma and validated through code-to-hardware communication testing.',
  myRole: 'UI/UX Design, App Development & Hardware Communication Testing',
  myRoleContributions: [
    'Designed the mobile app interface and screen layouts in Figma.',
    'Structured the information architecture and navigation flow.',
    'Designed driving, steering, and robotic arm control interactions.',
    'Designed autonomous and unload mode interfaces.',
    'Created visual indicators for system status, connectivity, and alerts.',
    'Developed the app and tested communication between the app and rover hardware.',
  ],
  team: 'Abhijith V S, Pranav E, Abhiram S, Emmanuel Das',
  timeline: 'Completed October 2026',
  status: 'Prototype Completed · Field Testing Pending',
  stats: [
    { value: '11', label: 'Screens Designed', description: 'Mobile app screens' },
    { value: '06', label: 'App Navigation Options', description: 'Core module cards on Home' },
    { value: '03', label: 'Drive Modes', description: 'Manual, Unload, and Autonomous' },
    { value: '6-DOF', label: 'Robotic Arm Controls', description: 'Full joint articulation & presets' },
  ],
  contextData: {
    heading: 'One app to operate an entire harvesting rover.',
    body: 'AgriRover is an autonomous tomato-harvesting robot with a 6-DOF robotic arm and an onboard collection box. Bringing driving, arm manipulation, computer vision, and harvest collection into a single mobile interface requires careful navigation and interaction design across six operational demands:',
    subsystems: [
      {
        title: 'Drive and Steer the Rover',
        description: 'Command forward, reverse, speed throttle, and precise wheel angle steering across farm rows.',
      },
      {
        title: 'Operate the Robotic Arm',
        description: 'Independently articulate joints J1 through J5 and actuate the end-effector gripper.',
      },
      {
        title: 'Monitor Camera Feed',
        description: 'Stream low-latency WebRTC video from the mast camera to confirm tomato ripeness and obstacle clearance.',
      },
      {
        title: 'Start Autonomous Missions',
        description: 'Initiate, pause, and monitor automated row-following and computer-vision harvesting routines.',
      },
      {
        title: 'Unload the Collection Box',
        description: 'Actuate the motorized collection-box lift mechanism with built-in timed safety cutoffs.',
      },
      {
        title: 'Monitor Connectivity & Health',
        description: 'Continuously track battery state of charge, CPU temperature, Wi-Fi RSSI, and ESP32 heartbeat.',
      },
    ],
  },
  problem: {
    headline: 'Five subsystems, one thumb.',
    body: 'Operating a motorized agricultural robot outdoors introduces unique human-factors constraints—glare from bright sunlight, operating with one hand while walking alongside the rover, and zero margin for delayed commands. Five design challenges shaped the application:',
    challenges: [
      {
        title: 'Multiple Controls',
        body: 'Making driving, robotic arm manipulation, live camera viewing, and autonomous operation accessible from one mobile app without cognitive overload.',
      },
      {
        title: 'Navigation Complexity',
        body: 'Allowing users to transition between operational workflows (e.g. driving between rows vs. picking tomatoes) without getting trapped in deep menu hierarchies.',
      },
      {
        title: 'Safety & Emergency Stop',
        body: 'Making Emergency Stop and high-consequence motor commands unmistakable, instant, and impossible to miss in high-stress moments.',
      },
      {
        title: 'Outdoor Usability',
        body: 'Ensuring interface elements remain legible in harsh sunlight with large touch targets, high contrast, and clean visual cards.',
      },
      {
        title: 'System Visibility',
        body: 'Clearly communicating Wi-Fi connection health, battery voltage, camera stream state, and hardware communication over an ad-hoc field link.',
      },
    ],
  },
  principles: [
    {
      title: 'One Tap from Home',
      body: 'Six large module cards provide direct access to every core app function without nested menus. Back navigation always returns to the Home hub.',
    },
    {
      title: 'Safety Always Visible',
      body: 'A prominent full-width red Emergency Stop is permanently anchored on the Drive screen, and a live Connection status chip is displayed across all screens.',
    },
    {
      title: 'Glanceable Health',
      body: 'Battery voltage, CPU load, and Wi-Fi signal strength are highlighted as high-contrast numbers directly on Home without opening diagnostic sub-pages.',
    },
    {
      title: 'Colour as Navigation',
      body: 'Distinct semantic colors instantly distinguish functional domains: Orange for drive, Blue for robotic arm, Green for camera, Purple for autonomy, and Teal for system status.',
    },
  ],
  infoArchitecture: {
    heading: 'How the 11 screens connect.',
    body: 'The app is organized around a hub-and-spoke architecture that balances quick task switching with strict back-stack predictability:',
    elements: [
      {
        number: '01',
        title: 'Home as Navigation Hub',
        description:
          'Six large, color-coded module cards fan out directly to Drive Rover, Robotic Arm, Camera Feed, Autonomous Mode, Saved Poses, and System Status.',
      },
      {
        number: '02',
        title: 'Integrated Drive Context',
        description:
          'Manual Control, Unload Mode, and Autonomous routines live as segmented tabs inside the Drive screen, allowing the operator to shift tasks without losing situational context.',
      },
      {
        number: '03',
        title: 'Persistent Bottom Navigation',
        description:
          'A fixed bottom bar provides instant access to Home, Alerts, Settings, and About from any point in the application.',
      },
      {
        number: '04',
        title: 'Interactive Screen Hierarchy',
        description:
          'Every secondary view maintains a single-tap back arrow returning directly to the Home hub, preventing navigation disorientation in the field.',
      },
    ],
  },
  processSections: [
    {
      id: 'step-1',
      heading: '1. Understand Rover Operational Requirements',
      body: 'Analyzed the physical rover subsystems—wheel drive motors, 6-DOF arm servos, collection-box lift, and camera stream—to determine operator task priorities during harvesting.',
    },
    {
      id: 'step-2',
      heading: '2. Organize into a Clear Navigation Structure',
      body: 'Structured the application into a hub-and-spoke model with six primary Home cards, tabbed drive modes, and persistent global navigation.',
    },
    {
      id: 'step-3',
      heading: '3. Design Screen Layouts & Flows in Figma',
      body: 'Designed 11 mobile screens in Figma, crafting clean white card surfaces on a cool-grey canvas and connecting every transition into an interactive prototype.',
    },
    {
      id: 'step-4',
      heading: '4. Create Specialized HMI Controls',
      body: 'Engineered custom touch controls tailored for physical machinery: the multi-function steering dial, joint articulation sliders, and the full-width Emergency Stop.',
    },
    {
      id: 'step-5',
      heading: '5. Establish Semantic Design System',
      body: 'Defined purposeful color tokens (Orange, Green, Blue, Purple, Teal, Red), high-contrast typography, and standardized touch target sizes for field use.',
    },
    {
      id: 'step-6',
      heading: '6. Develop App & Test Hardware Communication',
      body: 'Built the mobile application frontend and verified two-way telemetry and command packet transmission against the rover ESP32 and Raspberry Pi hardware.',
    },
  ],
  screenshotGroups: [
    {
      id: 'home-dashboard',
      title: '1. Home Dashboard',
      description:
        'The primary launchpad of the application. Provides an instantaneous overview of connection status, system vital metrics, and one-tap entry into all rover capabilities.',
      screens: [
        {
          src: '/assets/agrirover/screens/01_home_dashboard.png',
          alt: 'AgriRover mobile app Home Dashboard screen',
          title: 'Home Navigation Hub & Status Overview',
          description:
            'Features live "Connected" badge, six color-coded module cards (Drive Rover, Robotic Arm, Camera, Autonomous, Saved Poses, System Status), battery/CPU/Wi-Fi health tiles, and persistent bottom navigation.',
        },
      ],
    },
    {
      id: 'drive-steering',
      title: '2. Manual Drive and Steering Controls',
      description:
        'The manual vehicle control cockpit. Combines directional triggers, speed throttle control, a custom multi-functional steering dial, and an immediate Emergency Stop button.',
      screens: [
        {
          src: '/assets/agrirover/screens/02_drive_steering.png',
          alt: 'AgriRover Drive Rover Screen with steering dial and E-Stop',
          title: 'Steering Dial & Rover Drive Cockpit',
          description:
            'Features Forward/Stop/Reverse triggers, speed slider with PWM feedback, full-width red Emergency Stop, and a custom circular steering dial (-45° to +45°) with live numeric readout and one-tap Center reset.',
        },
      ],
    },
    {
      id: 'unload-mode',
      title: '3. Unload Mode',
      description:
        'Dedicated collection-box lift interface enabling the operator to dump harvested tomatoes into field transport crates with built-in timed safety protection.',
      screens: [
        {
          src: '/assets/agrirover/screens/03_unload_mode.png',
          alt: 'AgriRover Unload Mode screen with lift controls',
          title: 'Collection-Box Lift Controls',
          description:
            'Offers opposing "LIFT UP" and "LOWER DOWN" actions, "STATUS: READY" confirmation, and an automatic 10-second relay shutoff to prevent actuator motor burn-out.',
        },
      ],
    },
    {
      id: 'autonomous-mode',
      title: '4. Autonomous Mode',
      description:
        'Supervised autonomous harvesting control room. Enables the operator to initiate computer-vision tomato harvesting runs while monitoring live visual and status feedback.',
      screens: [
        {
          src: '/assets/agrirover/screens/04_autonomous_mode.png',
          alt: 'AgriRover Autonomous Mode screen with live camera preview',
          title: 'Autonomous Mission Execution',
          description:
            'Provides Start, Pause, and Stop mission actions, live camera preview, active tomato detection indicators, and mission progress telemetry.',
        },
      ],
    },
    {
      id: 'robotic-arm',
      title: '5. Robotic Arm Controls',
      description:
        'Joint-by-joint articulation cockpit for the 6-DOF robotic arm. Uses a visual arm diagram and dedicated sliders to create a direct mental model between touch and physical servo movement.',
      screens: [
        {
          src: '/assets/agrirover/screens/05_robotic_arm.png',
          alt: 'AgriRover 6-DOF Robotic Arm screen with joint sliders',
          title: 'Joint-Level Articulation & Gripper Control',
          description:
            'Displays visual arm schematic, Open/Close gripper toggle, J1 through J5 joint sliders with degree boundaries, and fast switching between Joint Control and Saved Poses.',
        },
      ],
    },
    {
      id: 'saved-poses',
      title: '6. Saved Arm Poses',
      description:
        'A preset library storing pre-calibrated arm trajectories for common harvesting tasks, eliminating the fatigue of manual joint manipulation.',
      screens: [
        {
          src: '/assets/agrirover/screens/06_saved_poses.png',
          alt: 'AgriRover Saved Arm Poses screen with preset cards',
          title: 'One-Tap Arm Preset Library',
          description:
            'Provides pre-configured macros for "Home Position", "Pick Tomato", "Place in Bin", and "Transport Position" with single-tap "RUN POSE" triggers and custom user save slots.',
        },
      ],
    },
    {
      id: 'camera-feed',
      title: '7. Camera and Live Feed',
      description:
        'Full-screen video monitoring console displaying low-latency WebRTC streams from the mast camera with diagnostic connection telemetry.',
      screens: [
        {
          src: '/assets/agrirover/screens/07_camera_feed.png',
          alt: 'AgriRover Camera Feed Screen with live and offline states',
          title: 'Live Video Feed & Diagnostic Stream Telemetry',
          description:
            'Features high-contrast video window, Live/Offline badge, Reload and Expand buttons, and stream connection details (host IP, port, codec, and ESP32 status).',
        },
      ],
    },
    {
      id: 'system-status',
      title: '8. System Diagnostics',
      description:
        'Central hardware diagnostic dashboard aggregating vital health signals across rover compute, power, and wireless subsystems.',
      screens: [
        {
          src: '/assets/agrirover/screens/08_system_status.png',
          alt: 'AgriRover System Status screen with telemetry tiles',
          title: 'Comprehensive Subsystem Health Overview',
          description:
            'Displays battery percentage and voltage, CPU utilization and temperature, Wi-Fi RSSI signal strength, controller link state, and motor thermal telemetry.',
        },
      ],
    },
    {
      id: 'alerts-notifications',
      title: '9. Alerts and Notifications',
      description:
        'Action-oriented notification center logging hardware events, harvest milestones, and safety warnings with semantic color coding.',
      screens: [
        {
          src: '/assets/agrirover/screens/09_notifications.png',
          alt: 'AgriRover Notifications Screen with timestamped alert cards',
          title: 'Categorized Alerts & Mission Log',
          description:
            'Color-coded notification cards with timestamps and clear plain-language descriptions distinguishing harvest completion, battery warnings, and rover disconnections.',
        },
      ],
    },
    {
      id: 'settings-about',
      title: '10. Settings & Platform Information',
      description:
        'Configuration console for field network parameters, telemetry polling frequencies, and platform hardware specifications.',
      screens: [
        {
          src: '/assets/agrirover/screens/10_settings.png',
          alt: 'AgriRover Settings Screen',
          title: 'Field Network & HMI Configuration',
          description:
            'Allows field operators to configure rover host IP, video streaming port, dark theme for field glare, haptic feedback on motor stops, and telemetry rate (10 Hz / 100 ms).',
        },
        {
          src: '/assets/agrirover/screens/11_about.png',
          alt: 'AgriRover About Screen',
          title: 'Platform Architecture & Credits',
          description:
            'Documents AgriRover v2.0 platform architecture, core compute specifications (Raspberry Pi 4B, ESP32-WROOM, 6-DOF servo arm), and team credits.',
        },
      ],
    },
  ],
  designSystem: {
    palette: [
      {
        name: 'Brand Orange',
        hex: '#F97316',
        role: 'Primary Actions & Drive Controls',
        desc: 'Marks primary interactive triggers, active tab selections, directional drive buttons, and the steering dial.',
      },
      {
        name: 'Success Green',
        hex: '#22C55E',
        role: 'Connected State & Forward Drive',
        desc: 'Communicates verified connection, camera live status, forward motion commands, and operational readiness.',
      },
      {
        name: 'Arm Blue',
        hex: '#2563EB',
        role: 'Robotic Arm Controls & Telemetry',
        desc: 'Identifies robotic arm joint sliders, angle readouts, gripper toggles, and CPU utilization telemetry.',
      },
      {
        name: 'Autonomy Purple',
        hex: '#7C3AED',
        role: 'Autonomous Harvesting Missions',
        desc: 'Dedicated accent for autonomous navigation routines, row-following algorithms, and AI tomato detection.',
      },
      {
        name: 'Status Teal',
        hex: '#0EA5B7',
        role: 'System Health & Diagnostics',
        desc: 'Used across system status indicators, Wi-Fi signal badges, hardware communication rows, and diagnostic tools.',
      },
      {
        name: 'Danger Red',
        hex: '#EF4444',
        role: 'Emergency Stop & Critical Errors',
        desc: 'Reserved exclusively for the prominent Emergency Stop button, hardware disconnections, and critical alerts.',
      },
    ],
    typography: [
      {
        level: 'Primary Headers & Key Numbers',
        size: '22px–26px',
        weight: 'Bold / Black (700/900)',
        usage: 'Screen titles, steering angle readouts, battery percentages, and high-glanceability metrics.',
      },
      {
        level: 'Card Titles & Tab Labels',
        size: '14px–16px',
        weight: 'SemiBold (600)',
        usage: 'Module card titles, segmented mode tabs, joint names (J1–J5), and action button text.',
      },
      {
        level: 'Status Labels & Metadata',
        size: '11px–13px',
        weight: 'Medium / Regular (400/500)',
        usage: 'Connection badges, sensor units, notification timestamps, and secondary operational details.',
      },
    ],
    components: [
      {
        title: 'Segmented Mode Tabs',
        description:
          'Pill-style top navigation tabs allowing fluid switching between Manual Control, Unload Mode, and Autonomous routines without losing context.',
      },
      {
        title: 'Interactive Steering Dial',
        description:
          'Custom circular touch dial mapping physical front-wheel steering limits (-45° to +45°) with live degree readout and one-tap center reset.',
      },
      {
        title: 'Status & Connection Chips',
        description:
          'High-contrast pills (e.g. Connected, Online, Offline, Status: Ready) providing unambiguous operational status at a glance.',
      },
      {
        title: 'Joint Articulation Sliders',
        description:
          'Touch-friendly range sliders displaying minimum, current, and maximum degree bounds for smooth robotic arm manipulation.',
      },
      {
        title: 'Pinned Emergency Stop Button',
        description:
          'Full-width high-contrast red button anchored to the base of the manual driving screen for instantaneous fail-safe reaction.',
      },
      {
        title: 'Persistent Bottom Navigation Bar',
        description:
          'Fixed four-tab bottom bar (Home, Alerts, Settings, About) providing consistent back-stack navigation throughout the entire application.',
      },
    ],
  },
  safetyFeedback: {
    heading: 'Safety, errors and honest states.',
    body: 'An agricultural robotics application must be judged by how effectively it protects hardware, crops, and human operators when unexpected events occur. Three core feedback mechanisms ensure fail-safe operation:',
    items: [
      {
        title: 'Emergency Stop',
        subtitle: 'Instant Hardware Override',
        description:
          'A full-width, high-contrast red Emergency Stop button is permanently pinned to the base of the Drive screen. Tapping it instantly broadcasts a zero-velocity kill command to all wheel and arm motors and logs a critical event in the Alerts feed.',
        imageSrc: '/assets/agrirover/screens/02_drive_steering.png',
      },
      {
        title: 'Offline Video State',
        subtitle: 'Transparent Stream Recovery',
        description:
          'Rather than displaying an ambiguous frozen image or an unexplained blank canvas when the camera connection drops, the app presents a clear "OFFLINE" indicator with diagnostic stream parameters and a single-tap "Reload" action.',
        imageSrc: '/assets/agrirover/screens/07_camera_feed.png',
      },
      {
        title: 'Alerts That Explain',
        subtitle: 'Action-Oriented System Guidance',
        description:
          'Alerts are categorized with distinct color tokens (Red for alert, Yellow for warning, Green for success) and provide concise, plain-language descriptions that instruct the operator on immediate next steps.',
        imageSrc: '/assets/agrirover/screens/09_notifications.png',
      },
    ],
  },
  keyScreens: [],
  videoSrc: '/assets/agrirover/demo.mp4',
  videoPoster: '/assets/agrirover/poster.jpg',
  outcome: {
    done: [
      "Designed 11 mobile app screens covering the rover's main operations.",
      'Created a structured navigation system with six main Home screen entry points.',
      'Designed interfaces for drive control, steering, robotic arm operation, and different operating modes.',
      'Established consistent visual indicators for connection and system status.',
      'Developed the app and tested communication with the rover hardware.',
    ],
    limitsHeading: 'Current limitations',
    honestLimits: [
      'Notifications currently display demonstration content rather than live operational events.',
      'The app has not yet undergone usability testing with real operators or validation in agricultural field conditions.',
    ],
    nextSteps: [
      'Conduct field usability testing with real operators to evaluate navigation clarity, control accessibility, and ease of operation.',
      'Enhance outdoor usability through improved text readability, visual contrast, and accessible touch targets.',
      'Refine interaction feedback with clearer loading, success, error, and confirmation states for important user actions.',
      'Enhance the Alerts screen with live harvesting progress, tomato counts, and mission history to help operators understand completed and ongoing operations.',
    ],
    takeawayHeading: 'Design reflection',
    takeaway:
      'Designing AgriRover taught me how important it is to simplify complex operations through intuitive navigation, accessible controls, and meaningful visual feedback. It helped me understand how thoughtful interface design can make a technical product easier and more comfortable to use.',
  },
};

export default ag;
