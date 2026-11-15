import type { ProjectData } from './types';

const ag: ProjectData = {
  slug: 'agrirover',
  title: 'AgriRover – Autonomous Harvesting Rover',
  subtitle:
    'A robotic harvesting vehicle and mobile application designed to assist farmers with tomato harvesting in large agricultural fields.',
  tags: ['Major Project', 'Ongoing', 'Product Design', 'Robotics', 'CAD Modelling', 'Electronics'],
  accent: '#F97316',
  accentBg: '#1A0D00',
  year: '2026',
  coverMedia: { type: 'video', src: '/assets/agrirover/demo.mp4', poster: '/assets/agrirover/poster.jpg' },
  externalLinks: [
    {
      label: 'View Figma Design',
      url: 'https://www.figma.com/design/JNjYHuOmWcMhZ5mUUAVahC/Mobile-App-UX-Redesign?node-id=0-1&t=4UvLZqL8UU7Q7e3Z-0',
      icon: 'figma',
    },
    {
      label: 'View Interactive Prototype',
      url: 'https://www.figma.com/proto/JNjYHuOmWcMhZ5mUUAVahC/Mobile-App-UX-Redesign?node-id=26-940&p=f&viewport=1310%2C716%2C0.44&t=GCZqo7VpQRxLe0gr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=26%3A940&page-id=0%3A1',
      icon: 'figma',
    },
  ],
  overview:
    'AgriRover is an autonomous tomato-harvesting rover designed to help farmers reduce manual effort in large tomato fields. The goal is to develop a robotic vehicle that can move close to tomato plants, identify ripe tomatoes, pick them using a 6-DOF robotic arm, and place the harvested tomatoes into a collection box. We are currently developing a prototype to demonstrate the concept and its working.',
  myRole: 'Product Design, 3D CAD Modelling & Hardware Integration',
  myRoleContributions: [
    'Designed the AgriRover mobile application interface using Figma, focusing on rover movement, robotic arm control, camera monitoring, and autonomous operation.',
    'Currently learning and working on the CAD modelling of a 6-DOF robotic arm using Fusion 360 (ongoing development).',
    'Contributing to hardware connections and integration of the rover electronic components.',
    'Participating in the development of the overall rover prototype and understanding how the mobile app, electronics, and robotic arm work together.',
  ],
  team: 'Abhijith V S, Pranav E, Abhiram S, Emmanuel',
  timeline: '2026 – Present (In Development)',
  status: 'Major Project · Prototype in Development',
  stats: [
    { value: 'Major Project', label: 'Academic Scope', description: 'Final-year ongoing major project' },
    { value: 'In Progress', label: 'Current Status', description: 'Prototype in active development' },
    { value: '11', label: 'App Screens Designed', description: 'Mobile control interface in Figma' },
    { value: '6-DOF', label: 'Robotic Arm Modelling', description: 'CAD mechanical design in Fusion 360' },
  ],
  contextData: {
    heading: 'A mobile interface to operate an agricultural rover.',
    body: 'AgriRover combines vehicle driving, robotic arm movement, camera vision, and harvest collection. The mobile application was designed to give farmers and operators clear, simple control over all key functions:',
    subsystems: [
      {
        title: 'Drive and Steer the Rover',
        description: 'Move the vehicle forward and backward, control its speed, and steer precisely between plant rows.',
      },
      {
        title: 'Control the Robotic Arm',
        description: 'Adjust each arm joint individually and open or close the gripper to hold tomatoes gently.',
      },
      {
        title: 'Live Camera View',
        description: 'Watch a live video feed from the rover camera to check tomato ripeness and spot obstacles.',
      },
      {
        title: 'Start Autonomous Harvesting',
        description: 'Start, pause, or stop automated row-following and tomato harvesting with one tap.',
      },
      {
        title: 'Empty the Collection Box',
        description: 'Lift and tilt the collection box using motor controls to unload picked tomatoes into field crates.',
      },
      {
        title: 'Check Rover Health',
        description: 'Keep track of battery level, internal temperature, and wireless connection strength at all times.',
      },
    ],
  },
  problem: {
    headline: 'Helping farmers harvest crops with less physical strain.',
    body: 'Harvesting tomatoes by hand requires hours of bending, lifting, and repetitive work under intense sun. Developing a robotic helper introduces practical challenges that the mobile app must solve:',
    challenges: [
      {
        title: 'Controlling Multiple Parts Easily',
        body: 'The operator needs to drive the wheels, move the arm, watch the camera, and check battery levels without getting confused by complicated menus.',
      },
      {
        title: 'Simple and Quick Navigation',
        body: 'Farmers need to switch quickly between driving between field rows and controlling the arm without getting lost in deep settings.',
      },
      {
        title: 'Clear Safety and Stop Controls',
        body: 'If something unexpected happens in the field, the operator must be able to stop the rover immediately with a large, unmissable Emergency Stop button.',
      },
      {
        title: 'Easy to Read in Bright Sunlight',
        body: 'Screens used outdoors must have strong visual contrast, large text, and big touch buttons that are easy to tap while wearing garden gloves.',
      },
      {
        title: 'Clear Wireless Connection Status',
        body: 'The app must clearly show whether it is connected to the rover so the operator always knows the vehicle is responding.',
      },
    ],
  },
  principles: [
    {
      title: 'One Tap from the Home Screen',
      body: 'Six clear cards give immediate access to every major function. The user is never more than one tap away from returning to the home screen.',
    },
    {
      title: 'Safety is Always Visible',
      body: 'A large red Emergency Stop button is permanently pinned at the bottom of the manual driving screen for instant access.',
    },
    {
      title: 'Key Information at a Glance',
      body: 'Battery life, connection status, and system temperature are displayed prominently on the home screen without needing to open sub-menus.',
    },
    {
      title: 'Color-Coded Sections',
      body: 'Simple colors help users instantly know what they are controlling: Orange for driving, Blue for the robotic arm, Green for camera, and Purple for autonomous mode.',
    },
  ],
  infoArchitecture: {
    heading: 'How the 11 app screens are organized.',
    body: 'The app uses a simple hub layout where every tool connects directly back to the main home screen:',
    elements: [
      {
        number: '01',
        title: 'Home as the Main Hub',
        description:
          'Six clear, color-coded cards give direct access to Drive Rover, Robotic Arm, Camera Feed, Autonomous Mode, Saved Poses, and System Status.',
      },
      {
        number: '02',
        title: 'Unified Drive Screen',
        description:
          'Manual Driving, Unload Mode, and Autonomous routines live together as easy tabs inside the Drive section so the user never loses their place.',
      },
      {
        number: '03',
        title: 'Simple Bottom Bar',
        description:
          'A fixed navigation bar at the bottom provides one-tap access to Home, Alerts, Settings, and About from anywhere in the app.',
      },
      {
        number: '04',
        title: 'Easy Back Navigation',
        description:
          'Every screen includes a prominent back button that takes the user directly back to Home, preventing any confusion in the field.',
      },
    ],
  },
  processSections: [
    {
      id: 'step-1',
      heading: '1. Understand Rover & Farming Needs',
      body: 'Studied what farmers need during harvesting and analyzed the rover main parts—driving wheels, 6-DOF arm joints, collection box, and camera—to decide which controls matter most.',
    },
    {
      id: 'step-2',
      heading: '2. Organize Clear & Simple Navigation',
      body: 'Structured the mobile app into a clear home hub with six main action cards and organized tabs so users can switch tasks effortlessly.',
    },
    {
      id: 'step-3',
      heading: '3. Design Screen Layouts in Figma',
      body: 'Designed 11 mobile screens in Figma using high-contrast cards, large touch targets, and clear visual indicators, connected into an interactive prototype.',
    },
    {
      id: 'step-4',
      heading: '4. 6-DOF Robotic Arm CAD Modelling (Ongoing)',
      body: 'Currently learning and working on the 3D CAD design of the 6-DOF robotic arm using Fusion 360, focusing on joint ranges and gripper mechanics.',
    },
    {
      id: 'step-5',
      heading: '5. Hardware Connections & Integration',
      body: 'Contributing to the electrical wiring, motor connections, and sensor integration on the rover prototype chassis alongside team members.',
    },
    {
      id: 'step-6',
      heading: '6. Testing System Communication',
      body: 'Testing how commands sent from the mobile app are received and executed by the rover onboard electronics and microcontrollers.',
    },
  ],
  screenshotGroups: [
    {
      id: 'home-dashboard',
      title: '1. Home Dashboard',
      description:
        'The main launchpad of the app. Gives a quick overview of connection status, battery health, and one-tap entry into all rover capabilities.',
      screens: [
        {
          src: '/assets/agrirover/screens/01_home_dashboard.png',
          alt: 'AgriRover mobile app Home Dashboard screen',
          title: 'Home Navigation Hub & Status Overview',
          description:
            'Shows a green "Connected" badge, six colorful module cards (Drive Rover, Robotic Arm, Camera, Autonomous, Saved Poses, System Status), and battery/Wi-Fi health stats.',
        },
      ],
    },
    {
      id: 'drive-steering',
      title: '2. Manual Drive and Steering Controls',
      description:
        'The manual vehicle control screen. Combines forward and reverse buttons, speed control, a steering dial, and an immediate Emergency Stop button.',
      screens: [
        {
          src: '/assets/agrirover/screens/02_drive_steering.png',
          alt: 'AgriRover Drive Rover Screen with steering dial and E-Stop',
          title: 'Steering Dial & Rover Drive Cockpit',
          description:
            'Features Forward, Stop, and Reverse buttons, a speed slider, an unmissable red Emergency Stop button, and an interactive steering dial with one-tap center reset.',
        },
      ],
    },
    {
      id: 'unload-mode',
      title: '3. Unload Mode',
      description:
        'Controls the motorized collection box to empty harvested tomatoes into farm crates safely.',
      screens: [
        {
          src: '/assets/agrirover/screens/03_unload_mode.png',
          alt: 'AgriRover Unload Mode screen with lift controls',
          title: 'Collection-Box Lift Controls',
          description:
            'Provides clear "LIFT UP" and "LOWER DOWN" buttons, a ready confirmation status, and automatic safety shut-offs to protect the lift motors.',
        },
      ],
    },
    {
      id: 'autonomous-mode',
      title: '4. Autonomous Mode',
      description:
        'Automated harvesting screen where operators can start automated harvesting while watching the live camera.',
      screens: [
        {
          src: '/assets/agrirover/screens/04_autonomous_mode.png',
          alt: 'AgriRover Autonomous Mode screen with live camera preview',
          title: 'Autonomous Mission Execution',
          description:
            'Provides Start, Pause, and Stop mission buttons, a live camera preview, and visual indicators showing tomato detection progress.',
        },
      ],
    },
    {
      id: 'robotic-arm',
      title: '5. Robotic Arm Controls',
      description:
        'Joint-by-joint controls for the 6-DOF robotic arm. Uses simple sliders to make moving each joint intuitive and predictable.',
      screens: [
        {
          src: '/assets/agrirover/screens/05_robotic_arm.png',
          alt: 'AgriRover 6-DOF Robotic Arm screen with joint sliders',
          title: 'Joint Sliders & Gripper Control',
          description:
            'Shows a visual arm diagram, Open/Close gripper buttons, and smooth sliders to position joints J1 through J5 accurately.',
        },
      ],
    },
    {
      id: 'saved-poses',
      title: '6. Saved Arm Positions',
      description:
        'A preset library storing pre-set arm movements for frequent tasks, saving operators from adjusting joints manually every time.',
      screens: [
        {
          src: '/assets/agrirover/screens/06_saved_poses.png',
          alt: 'AgriRover Saved Arm Poses screen with preset cards',
          title: 'One-Tap Arm Preset Library',
          description:
            'Provides ready-to-use buttons for "Home Position", "Pick Tomato", "Place in Bin", and "Transport Position" with one-tap execution.',
        },
      ],
    },
    {
      id: 'camera-feed',
      title: '7. Camera and Live Feed',
      description:
        'Live video monitoring screen showing what the rover camera sees in real time with connection details.',
      screens: [
        {
          src: '/assets/agrirover/screens/07_camera_feed.png',
          alt: 'AgriRover Camera Feed Screen with live and offline states',
          title: 'Live Video Feed & Connection Details',
          description:
            'Features a large video window, live/offline badge, reload button, and network details showing connection health.',
        },
      ],
    },
    {
      id: 'system-status',
      title: '8. System Diagnostics',
      description:
        'Hardware health dashboard summarizing battery power, processor temperature, and wireless connection signals.',
      screens: [
        {
          src: '/assets/agrirover/screens/08_system_status.png',
          alt: 'AgriRover System Status screen with telemetry tiles',
          title: 'Hardware Health Overview',
          description:
            'Displays battery percentage, voltage, computer temperature, Wi-Fi signal strength, and motor status in clear numbers.',
        },
      ],
    },
    {
      id: 'alerts-notifications',
      title: '9. Alerts and Notifications',
      description:
        'Clear notification center showing recent system events, harvest milestones, and safety warnings.',
      screens: [
        {
          src: '/assets/agrirover/screens/09_notifications.png',
          alt: 'AgriRover Notifications Screen with timestamped alert cards',
          title: 'Categorized Alerts & Mission Log',
          description:
            'Color-coded notification cards with timestamps and plain-English descriptions explaining battery warnings, harvest updates, or connection changes.',
        },
      ],
    },
    {
      id: 'settings-about',
      title: '10. Settings & Project Information',
      description:
        'Settings screen for network setup, interface options, and project details.',
      screens: [
        {
          src: '/assets/agrirover/screens/10_settings.png',
          alt: 'AgriRover Settings Screen',
          title: 'Network & Interface Settings',
          description:
            'Allows operators to configure rover IP addresses, video port, dark theme for field glare, and vibration feedback on button presses.',
        },
        {
          src: '/assets/agrirover/screens/11_about.png',
          alt: 'AgriRover About Screen',
          title: 'Project Architecture & Team Credits',
          description:
            'Documents the AgriRover project architecture, hardware components, and team contributor credits.',
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
        desc: 'Used for primary buttons, active tabs, driving controls, and the circular steering dial.',
      },
      {
        name: 'Success Green',
        hex: '#22C55E',
        role: 'Connected Status & Forward Drive',
        desc: 'Shows confirmed connection, active camera feed, forward motion, and ready states.',
      },
      {
        name: 'Arm Blue',
        hex: '#2563EB',
        role: 'Robotic Arm Controls',
        desc: 'Highlights robotic arm sliders, joint angle numbers, and gripper toggle buttons.',
      },
      {
        name: 'Autonomy Purple',
        hex: '#7C3AED',
        role: 'Autonomous Harvesting Mode',
        desc: 'Used for autonomous harvesting buttons, mission status, and automated detection indicators.',
      },
      {
        name: 'Status Teal',
        hex: '#0EA5B7',
        role: 'System Health & Diagnostics',
        desc: 'Used for battery metrics, Wi-Fi signal indicators, and diagnostic information cards.',
      },
      {
        name: 'Danger Red',
        hex: '#EF4444',
        role: 'Emergency Stop & Warnings',
        desc: 'Reserved exclusively for the large Emergency Stop button, disconnections, and critical alerts.',
      },
    ],
    typography: [
      {
        level: 'Primary Headers & Key Numbers',
        size: '22px–26px',
        weight: 'Bold / Black (700/900)',
        usage: 'Screen titles, steering degree numbers, battery percentages, and key metrics.',
      },
      {
        level: 'Card Titles & Tab Labels',
        size: '14px–16px',
        weight: 'SemiBold (600)',
        usage: 'Module card titles, navigation tabs, joint names (J1–J5), and action button text.',
      },
      {
        level: 'Status Labels & Details',
        size: '11px–13px',
        weight: 'Medium / Regular (400/500)',
        usage: 'Connection badges, sensor units, notification timestamps, and helpful descriptions.',
      },
    ],
    components: [
      {
        title: 'Segmented Mode Tabs',
        description:
          'Clear top tabs allowing quick switching between Manual Driving, Unload Mode, and Autonomous routines.',
      },
      {
        title: 'Interactive Steering Dial',
        description:
          'Circular touch dial showing front wheel steering angle with live degree numbers and a one-tap center button.',
      },
      {
        title: 'Status & Connection Chips',
        description:
          'High-contrast badges (such as Connected, Ready, or Offline) that are easy to spot at a quick glance.',
      },
      {
        title: 'Joint Articulation Sliders',
        description:
          'Finger-friendly sliders showing minimum, current, and maximum angles for smooth robotic arm positioning.',
      },
      {
        title: 'Pinned Emergency Stop Button',
        description:
          'Full-width red button permanently fixed at the bottom of the manual driving screen for instant safety.',
      },
      {
        title: 'Bottom Navigation Bar',
        description:
          'Fixed four-item bar (Home, Alerts, Settings, About) providing fast navigation throughout the entire app.',
      },
    ],
  },
  safetyFeedback: {
    heading: 'Safety, feedback, and clear states.',
    body: 'In agricultural robotics, safety and clear feedback protect the machine, crops, and people working nearby. Three built-in feedback features keep operations clear and safe:',
    items: [
      {
        title: 'Emergency Stop Button',
        subtitle: 'Instant Motor Shutdown',
        description:
          'A prominent red Emergency Stop button is permanently pinned at the bottom of the driving screen. Tapping it immediately sends a stop signal to all motors and records an urgent notice in the Alerts feed.',
        imageSrc: '/assets/agrirover/screens/02_drive_steering.png',
      },
      {
        title: 'Clear Offline Video Notice',
        subtitle: 'Transparent Camera Status',
        description:
          'If the camera signal drops, the screen clearly displays an "OFFLINE" notice with an easy "Reload" button rather than showing a confusing frozen picture.',
        imageSrc: '/assets/agrirover/screens/07_camera_feed.png',
      },
      {
        title: 'Plain-English Alerts',
        subtitle: 'Helpful and Actionable Messages',
        description:
          'Alerts use simple colors (Red for urgent warnings, Yellow for cautions, Green for success) and plain language that tells the operator exactly what happened and what to do next.',
        imageSrc: '/assets/agrirover/screens/09_notifications.png',
      },
    ],
  },
  keyScreens: [],
  videoSrc: '/assets/agrirover/demo.mp4',
  videoPoster: '/assets/agrirover/poster.jpg',
  outcome: {
    done: [
      'Designed 11 mobile application screens in Figma covering rover driving, robotic arm controls, camera feed, and autonomous mode.',
      'Created a simple navigation layout with six main entry cards on the Home screen.',
      'Currently developing the 3D CAD model of the 6-DOF robotic arm using Fusion 360 (ongoing work).',
      'Contributing to hardware wiring, motor connections, and electronics integration on the rover chassis.',
      'Testing communication between the mobile app interface and rover onboard electronics.',
    ],
    limitsHeading: 'Current project status & limitations',
    honestLimits: [
      'AgriRover is currently an ongoing major project; the complete physical rover and autonomous harvesting system are actively in development.',
      'The 6-DOF robotic arm CAD model is still being developed in Fusion 360 and has not yet been physically manufactured.',
      'Field testing in real tomato fields will be conducted once the full physical prototype is assembled and tested.',
    ],
    nextSteps: [
      'Complete the 3D CAD modeling and mechanical fabrication of the 6-DOF robotic arm.',
      'Finalize the physical rover chassis and complete all electronic wiring connections.',
      'Test computer-vision tomato detection and harvesting in real field conditions.',
      'Conduct usability testing with farmers to further refine the mobile app controls and readability.',
    ],
    takeawayHeading: 'Project reflection',
    takeaway:
      'Working on AgriRover as my major project has helped me grow as a product designer. It has given me hands-on experience in balancing mobile interface design with physical 3D CAD modeling and practical electronics, showing me how software and hardware come together in a real-world product.',
  },
};

export default ag;
