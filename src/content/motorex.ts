import type { ProjectData } from './types';

const mx: ProjectData = {
  slug: 'motorex',
  title: 'Team Motorex Vehicle Dashboard',
  subtitle:
    'A driver-focused dashboard combining vehicle telemetry, steering controls, and autonomous mode selection in one interface.',
  tags: ['Embedded UI', 'C / LVGL', 'CAN Bus', 'Autonomous Vehicle', 'Automotive HMI'],
  accent: '#FF1E27',
  accentBg: '#0A0A0A',
  year: '2026',
  coverMedia: { type: 'video', src: '/assets/motorex/demo.mp4', poster: '/assets/motorex/poster.jpg' },
  overview:
    'Team Motorex designed and built an autonomous off-road vehicle for SAE BAJA 2026. The operator needed one cockpit interface to monitor real-time vehicle telemetry, input steering angles, and safely switch between autonomous driving modes. Operating on a Raspberry Pi 4 with a 1024×600 7-inch HDMI touchscreen, the dashboard communicates over the vehicle CAN bus with independent Teensy steering, motor controller, and Jetson autonomy nodes.',
  myRole: 'UI Design, Dashboard Development & Testing',
  myRoleContributions: [
    'Designed the dashboard interface and its individual screens in Figma and C/LVGL.',
    'Structured navigation across the different dashboard sections with a persistent 3-zone layout (header, content canvas, and footer navigation).',
    'Designed the steering interaction and custom numeric on-screen keypad to eliminate reliance on external keyboards.',
    'Created visual indicators for vehicle status, sensor health, and active autonomous modes.',
    'Implemented and tested the dashboard interface on Raspberry Pi 4 hardware connected to the vehicle CAN bus.',
  ],
  team: 'Team Motorex,SAE A-Baja  40 Members',
  timeline: 'Completed July 2026',
  status: 'Implemented and tested on Raspberry Pi 4 hardware',
  stats: [
    { value: '07', label: 'Core Screens', description: 'Dedicated driver interfaces' },
    { value: '04', label: 'Autonomous Modes', description: 'Guarded mode switching' },
    { value: '100 Hz', label: 'Feedback Loop', description: 'Real-time steering telemetry' },
    { value: '1024×600', label: 'Touch Resolution', description: '7-inch embedded display' },
  ],
  contextData: {
    heading: 'A dashboard for the whole vehicle.',
    body: 'The operator needs to monitor vehicle information, control steering, and understand which autonomous mode is active, all through a compact 7-inch touchscreen. Three independent vehicle subsystems share a single CAN bus, and the driver-side display is where they meet:',
    subsystems: [
      {
        title: 'Steering',
        description:
          'A dedicated Teensy controller reads an AS5600 magnetic encoder and drives the steering motor toward the commanded angle at 500 Hz with a 100 Hz feedback loop.',
      },
      {
        title: 'Powertrain',
        description:
          'The vehicle motor controller continuously broadcasts battery voltage, motor RPM, temperatures, and gear selection across extended CAN IDs.',
      },
      {
        title: 'Autonomous Systems',
        description:
          'Jetson-side autonomy nodes execute AEB (Automatic Emergency Braking), LKA (Lane Keep Assist), or Endurance algorithms depending on the mode selected on the dashboard.',
      },
    ],
  },
  problem: {
    headline: 'Designing for a screen where every interaction matters.',
    body: 'Operating an off-road autonomous vehicle requires quick decision-making under demanding physical conditions—intense vibration, dust, changing ambient sunlight, and zero tolerance for erroneous input. Six design challenges shaped every interface decision:',
    challenges: [
      {
        title: 'Limited Screen Space',
        body: 'Fitting critical telemetry, diagnostics, and mode controls onto a compact 7-inch (1024×600) display without scrolling or crowded touch targets.',
      },
      {
        title: 'No Physical Keyboard',
        body: 'Allowing users to enter precise numeric steering angles using touchscreen controls without cluttering or obstructing the primary cockpit view.',
      },
      {
        title: 'Multiple Information Sources',
        body: 'Unifying disparate data streams from steering, powertrain, and autonomy nodes into a predictable, consistent visual framework.',
      },
      {
        title: 'Accidental Interactions',
        body: 'Preventing unintended steering commands and accidental mode changes while driving over rough off-road terrain.',
      },
      {
        title: 'Information Clarity',
        body: 'Making important values, active states, and warnings instantly recognizable through high-contrast typography, distinct color coding, and zero nested menus.',
      },
      {
        title: 'Fault Visibility',
        body: 'Ensuring errors and sensor disconnects are immediately noticeable with loud visual alerts rather than displaying frozen, misleading numbers.',
      },
    ],
  },
  principles: [
    {
      title: 'Glanceable',
      body: 'One idea per card. Big numerals, strong color coding for operational state, and zero nested menus to dig through while operating.',
    },
    {
      title: 'Confirm Before Commit',
      body: 'Any interaction that moves the vehicle or alters the autonomous mode requires a deliberate second confirmation tap.',
    },
    {
      title: 'Honest Feedback',
      body: 'Always display the real sensor signal. If an encoder disconnects, the UI displays loud ERR flags rather than the last valid reading.',
    },
  ],
  processSections: [
    {
      id: 'step-1',
      heading: '1. Understand Operator Needs',
      body: 'Identified what information the driver needs to see at a glance (speed, battery, gear, steering angle) versus what controls require deliberate input during testing and autonomous runs (target angles, mode triggers).',
    },
    {
      id: 'step-2',
      heading: '2. Organize into Clear Navigation Categories',
      body: 'Structured the cockpit into focused, single-purpose domains: Home, Vehicle, Sensors, Steering, Mode, Errors, and Settings to eliminate deep menu trees.',
    },
    {
      id: 'step-3',
      heading: '3. Establish a Consistent Layout Framework',
      body: 'Created a persistent 3-zone frame: status header at top with time and perception dots, dynamic content canvas in the center, and a 7-tab navigation bar pinned at bottom.',
    },
    {
      id: 'step-4',
      heading: '4. Design High-Consequence Interactions',
      body: 'Prototyped the custom numeric on-screen steering keypad and the two-step confirmation dialog for autonomous mode switching to safeguard against rough off-road vibrations.',
    },
    {
      id: 'step-5',
      heading: '5. Establish Visual Hierarchy & Design System',
      body: 'Developed a high-contrast dark theme with purposeful color semantics (Red for active/critical, Green for healthy, Cyan for LKA, Amber for Standby) and legible Montserrat typography.',
    },
    {
      id: 'step-6',
      heading: '6. Review States & Failure Conditions',
      body: 'Simulated every operational state—normal driving, sensor fault conditions, mode transitions, and emergency stops—before flashing and testing on vehicle hardware.',
    },
  ],
  screenshotGroups: [
    {
      id: 'home-dashboard',
      title: '1. Home Dashboard',
      description:
        'The home screen introduces the dashboard, verifies subsystem readiness, and provides immediate access to all vehicle functions without nested menus.',
      screens: [
        {
          src: '/assets/motorex/screens/1_Home/01_home_booting.png',
          alt: 'Home screen booting state',
          title: 'Booting & Subsystem Check',
          description:
            'During startup, the dashboard displays team identity and performs real-time communication checks across steering, brake, motor, battery, camera, radar, and GPS nodes.',
        },
        {
          src: '/assets/motorex/screens/1_Home/02_home_ready.png',
          alt: 'Home screen ready to drive state',
          title: 'Ready to Drive',
          description:
            'Once verified, a prominent green "READY TO DRIVE" progress banner appears with battery state of charge and immediate access to the 7 persistent bottom navigation tabs.',
        },
      ],
    },
    {
      id: 'vehicle-monitoring',
      title: '2. Vehicle Monitoring',
      description:
        'Presents critical driving telemetry in high-contrast data cards, paired with a top-down chassis diagram for instantaneous glanceability.',
      screens: [
        {
          src: '/assets/motorex/screens/2_Vehicle/04_vehicle_driving_endurance.png',
          alt: 'Vehicle monitoring during endurance drive',
          title: 'Live Driving Telemetry (Endurance)',
          description:
            'Displays steering angle (+27°), throttle (45%), battery voltage (48.2V), vehicle speed (34 km/h), motor RPM (3,420), gear (D), and individual per-wheel RPM indicators on the chassis.',
        },
        {
          src: '/assets/motorex/screens/2_Vehicle/05_vehicle_hard_braking_left_turn.png',
          alt: 'Vehicle monitoring during hard braking and sharp left turn',
          title: 'Hard Braking & Left Turn Telemetry',
          description:
            'Under aggressive dynamic conditions, the chassis clearly indicates front-wheel angle (-48°), regenerative braking, and differential wheel speeds at a glance.',
        },
        {
          src: '/assets/motorex/screens/2_Vehicle/06_vehicle_reverse.png',
          alt: 'Vehicle reverse gear state',
          title: 'Reverse Gear Engagement',
          description:
            'Instant visual shift to reverse state (R) with distinct color feedback and vehicle motion indication.',
        },
      ],
    },
    {
      id: 'sensor-monitoring',
      title: '3. Sensor Monitoring',
      description:
        'Dedicated perception and hardware sensor overview providing immediate visual verification before engaging autonomous driving.',
      screens: [
        {
          src: '/assets/motorex/screens/3_Sensors/07_sensors_standby.png',
          alt: 'Sensor monitoring in standby mode',
          title: 'Sensors in Standby Mode',
          description:
            'Monitors front camera, radar, IMU, steering encoder, wheel-speed sensors, and brake-pressure transducers in a clean grid with status badges.',
        },
        {
          src: '/assets/motorex/screens/3_Sensors/08_sensors_endurance.png',
          alt: 'Sensor monitoring in endurance mode',
          title: 'Full Autonomous Sensor Engagement',
          description:
            'All perception sensors online and streaming data during full autonomous mission execution.',
        },
      ],
    },
    {
      id: 'steering-control',
      title: '4. Steering Control & Custom Numeric Keypad',
      description:
        'A multi-step touchscreen interaction enabling the operator to command precise steering angles without a physical keyboard.',
      screens: [
        {
          src: '/assets/motorex/screens/4_Steering_no_keypad/09_steering_centered_ok.png',
          alt: 'Steering centered at zero degrees',
          title: 'Centered Steering (0°)',
          description:
            'Visual steering wheel graphic mirrors physical wheel feedback in real time, accompanied by live angle (0.0°), target box, and encoder health.',
        },
        {
          src: '/assets/motorex/screens/4_Steering_no_keypad/10_steering_right_27deg_target30.png',
          alt: 'Steering active turn at 27 degrees chasing target 30',
          title: 'Active Angle Following (+27° → +30°)',
          description:
            'Rotating wheel graphic rotates smoothly with encoder feedback as the Teensy closed-loop controller drives toward target angle.',
        },
        {
          src: '/assets/motorex/screens/5_Steering_with_keypad/k1_keypad_open_centered.png',
          alt: 'Custom numeric keypad opened in context panel',
          title: 'Keypad Slide-Out Interaction',
          description:
            'Tapping the target box opens a custom numeric keypad in the right context panel, keeping the primary steering visual unobstructed.',
        },
        {
          src: '/assets/motorex/screens/5_Steering_with_keypad/k2_keypad_typing_30.png',
          alt: 'Typing steering target on keypad',
          title: 'Numeric Entry & Range Guarding',
          description:
            'Operator enters target degrees. Inputs are clamped to ±60° maximum steering lock to prevent physical steering rack over-travel.',
        },
        {
          src: '/assets/motorex/screens/5_Steering_with_keypad/k3_keypad_negative_45_wheel_right_12.png',
          alt: 'Negative angle target entry with sign toggle',
          title: 'Sign Toggle & Explicit Confirm',
          description:
            'Dedicated "+/-" toggle enables negative steering angles. Commands are sent across CAN 0x103 only when the operator taps "CONFIRM".',
        },
      ],
    },
    {
      id: 'mode-selection',
      title: '5. Autonomous Mode Selection & Guarded Confirmation',
      description:
        'Central control hub managing the four vehicle autonomous modes, protected by two-stage confirmation dialogs to prevent accidental mode switches.',
      screens: [
        {
          src: '/assets/motorex/screens/6_Mode_4_modes/13_mode_standby.png',
          alt: 'Standby mode card view',
          title: 'Standby Mode (Value 0)',
          description:
            'Default manual driving mode. Autonomy algorithms idle, steering controlled manually or via test commands.',
        },
        {
          src: '/assets/motorex/screens/6_Mode_4_modes/14_mode_aeb.png',
          alt: 'AEB mode selected',
          title: 'Automatic Emergency Braking (Value 1)',
          description:
            'Radar-driven collision mitigation mode with active longitudinal emergency braking capabilities.',
        },
        {
          src: '/assets/motorex/screens/6_Mode_4_modes/15_mode_lka.png',
          alt: 'Lane Keep Assist mode',
          title: 'Lane Keep Assist (Value 2)',
          description:
            'Camera-driven vision lane tracking indicated with distinct cyan accent (#00E5FF) and lateral control indicators.',
        },
        {
          src: '/assets/motorex/screens/6_Mode_4_modes/16_mode_endurance.png',
          alt: 'Full endurance autonomous mode',
          title: 'Endurance Mission (Value 3)',
          description:
            'Full autonomous competition mode integrating camera, radar, and IMU nodes with longitudinal and lateral control.',
        },
        {
          src: '/assets/motorex/screens/7_Mode_dialog_throttle_brake/17_mode_confirm_dialog_aeb.png',
          alt: 'Confirmation dialog before entering AEB mode',
          title: 'Guarded Confirmation Dialog',
          description:
            'Tapping any mode card opens an explicit "Yes / No" modal confirmation. Only tapping "Yes" transmits CAN ID 0x400, eliminating accidental switches.',
        },
        {
          src: '/assets/motorex/screens/7_Mode_dialog_throttle_brake/18_mode_throttle_tab_driving.png',
          alt: 'Throttle tab with pedal arc and motor RPM',
          title: 'Throttle Subsystem Tab',
          description:
            'Shows pedal input percentage arc, motor RPM, and controller temperature telemetry.',
        },
        {
          src: '/assets/motorex/screens/7_Mode_dialog_throttle_brake/20_mode_brake_tab_pressed.png',
          alt: 'Brake tab showing actuator pressure and ABS status',
          title: 'Brake Subsystem Tab',
          description:
            'Displays real-time brake actuator position, line pressure, and ABS modulation status.',
        },
      ],
    },
    {
      id: 'error-fault-states',
      title: '6. Error and Fault States',
      description:
        'Honest feedback architecture ensuring hardware failures and CAN disconnects are immediately obvious rather than silent.',
      screens: [
        {
          src: '/assets/motorex/screens/8_Errors/1_errors_nominal.png',
          alt: 'Errors page all systems nominal',
          title: 'Nominal Health Overview',
          description:
            'All vehicle controllers, CAN nodes, and sensors operating with green verified indicators.',
        },
        {
          src: '/assets/motorex/screens/8_Errors/2_errors_fault.png',
          alt: 'Errors page critical fault state',
          title: 'Critical Hardware Fault Detection',
          description:
            'Immediate red warning card and banner identifying loss of AS5600 steering encoder over I2C.',
        },
        {
          src: '/assets/motorex/screens/4_Steering_no_keypad/12_steering_sensor_error.png',
          alt: 'Steering screen showing sensor error',
          title: 'Steering Subsystem Fault State',
          description:
            'When sensor status byte on CAN 0x063 flips to 1, the angle display reads "ERR" in bright red and locks out new commands.',
        },
      ],
    },
    {
      id: 'settings',
      title: '7. Settings & Protocol Reference',
      description:
        'Integrated diagnostic reference tool allowing pit crew and trackside engineers to inspect CAN bus mappings without an external laptop.',
      screens: [
        {
          src: '/assets/motorex/screens/9_Settings/settings_can_id_reference.png',
          alt: 'Settings screen displaying CAN ID reference map',
          title: 'Live CAN ID & Node Mapping',
          description:
            'Built-in reference screen mapping CAN ID 0x103 (steering target), 0x203 (feedback), 0x063 (sensors), 0x180117EF (powertrain), and 0x400 (mode).',
        },
      ],
    },
  ],
  designSystem: {
    palette: [
      {
        name: 'Accent / Active',
        hex: '#FF1E27',
        role: 'Primary Accent & Command Targets',
        desc: 'Marks active navigation tabs, steering command targets, critical alerts, and primary interactive elements.',
      },
      {
        name: 'Healthy / OK',
        hex: '#00FF66',
        role: 'System Status & Sensor Health',
        desc: 'Communicates verified readiness, connected CAN nodes, nominal sensor health, and positive confirmations.',
      },
      {
        name: 'Standby / Warning',
        hex: '#FFB400',
        role: 'Manual Standby & Alerts',
        desc: 'Indicates manual standby mode, system idle states, and pre-operational warning conditions.',
      },
      {
        name: 'LKA Accent',
        hex: '#00E5FF',
        role: 'Lane Keep Assist & Lateral Path',
        desc: 'Dedicated cyan accent distinguishing lateral lane-keeping vision telemetry from other modes.',
      },
      {
        name: 'Card Background',
        hex: '#141414',
        role: 'Data Card Container',
        desc: 'Subtle dark neutral surface providing tactile depth and card separation against the pure black backdrop.',
      },
      {
        name: 'Secondary Text',
        hex: '#999999',
        role: 'Units, Labels & Metadata',
        desc: 'High-legibility muted tone for units (°C, RPM, km/h), secondary labels, and timestamp metadata.',
      },
    ],
    typography: [
      {
        level: 'Titles & Primary Telemetry',
        size: '24px',
        weight: 'Bold / Black (700/900)',
        usage: 'Speedometer, steering angle, motor RPM, and screen titles. Instant glanceability from the driver seat.',
      },
      {
        level: 'Navigation & Card Labels',
        size: '16px',
        weight: 'SemiBold (600)',
        usage: '7-tab bottom navigation, data card section headings, modal dialog titles, and keypad keys.',
      },
      {
        level: 'Secondary Details & Units',
        size: '12px',
        weight: 'Medium / Regular (400/500)',
        usage: 'Engineering units (°C, V, km/h, deg), timestamps, sensor status captions, and diagnostic metadata.',
      },
    ],
    components: [
      {
        title: 'Persistent Status Header',
        description:
          'Fixed at the top of every screen: displays real-time clock, AUTO/LAT/LONG mode status pills, and Camera/Radar/IMU perception health dots.',
      },
      {
        title: '7-Tab Bottom Navigation Bar',
        description:
          'Fixed at the bottom: provides one-tap direct access to Home, Vehicle, Sensors, Steering, Mode, Errors, and Settings with a distinct red active outline.',
      },
      {
        title: 'Custom Numeric Keypad',
        description:
          'Slides out in the right context slot on demand, offering large touch targets, sign toggle (+/-), and range clamping (±60°) without a physical keyboard.',
      },
      {
        title: 'Guarded Mode Confirmation Dialog',
        description:
          'Two-stage modal overlay requiring an intentional second tap before transmitting high-consequence autonomous mode switches over CAN 0x400.',
      },
      {
        title: 'Glanceable Telemetry Cards',
        description:
          'Standardized rounded dark cards (#141414) with high-contrast numerals and clear engineering unit annotations.',
      },
    ],
  },
  keyScreens: [],
  videoSrc: '/assets/motorex/demo.mp4',
  videoPoster: '/assets/motorex/poster.jpg',
  outcome: {
    done: [
      'Designed a unified touchscreen interface for vehicle monitoring and control.',
      'Organized dashboard navigation into dedicated sections for vehicle data, sensors, steering, modes, errors, and settings.',
      'Created a custom numeric keypad for touchscreen steering input.',
      'Designed visual indicators and confirmation interactions for important system states.',
      'Implemented and tested the dashboard on Raspberry Pi 4 hardware.',
    ],
    limitsHeading: 'Current limitations',
    honestLimits: [
      'Header sensor dots follow the chosen mode rather than independent hardware status flags.',
      'Sensor status is temporarily hidden in the side panel while the steering keypad is open.',
      'CAN bus timeout warnings are not yet displayed as dedicated popups on the Errors page.',
    ],
    nextSteps: [
      'Improve the visibility of fault information during steering input.',
      'Make sensor status reflect actual system health more clearly.',
      'Refine the presentation of vehicle information and telemetry.',
      'Continue validating steering behaviour and dashboard interactions.',
    ],
    takeawayHeading: 'Design reflection',
    takeaway:
      'Designing this dashboard taught me how to translate complex vehicle operations into a clear and understandable interface. I learned the importance of visual hierarchy, predictable interactions, and meaningful feedback when designing for environments where users need to make decisions quickly.',
  },
};

export default mx;
