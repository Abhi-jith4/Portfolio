export interface ProjectStat {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectPrinciple {
  title: string;
  body: string;
}

export interface ProcessSection {
  id: string;
  heading: string;
  body: string;
  media?: { type: 'image' | 'grid'; src?: string; srcs?: string[]; alt?: string };
}

export interface ScreenItem {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
}

export interface ScreenshotGroup {
  id: string;
  title: string;
  description: string;
  screens: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

export interface TechnicalDecision {
  topic: string;
  problem: string;
  solution: string;
}

export interface SystemArchitecture {
  diagramSrc?: string;
  summary: string;
  nodes: {
    title: string;
    role: string;
    tech: string[];
    details: string;
  }[];
}

export interface OutcomeData {
  done: string[];
  honestLimits: string[];
  limitsHeading?: string;
  nextSteps: string[];
  takeaway?: string;
  takeawayHeading?: string;
}

export interface DesignSystemPaletteItem {
  name: string;
  hex: string;
  role: string;
  desc: string;
}

export interface DesignSystemTypographyItem {
  level: string;
  size: string;
  weight: string;
  usage: string;
}

export interface DesignSystemComponentItem {
  title: string;
  description: string;
  imageSrc?: string;
}

export interface DesignSystemData {
  palette: DesignSystemPaletteItem[];
  typography: DesignSystemTypographyItem[];
  components: DesignSystemComponentItem[];
}

export interface ContextSectionData {
  heading: string;
  body: string;
  subsystems: { title: string; description: string }[];
}

export interface InfoArchitectureItem {
  number: string;
  title: string;
  description: string;
}

export interface InfoArchitectureData {
  heading: string;
  body: string;
  elements: InfoArchitectureItem[];
}

export interface SafetyFeedbackItem {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
}

export interface SafetyFeedbackData {
  heading: string;
  body: string;
  items: SafetyFeedbackItem[];
}

export interface ImplementationItem {
  title: string;
  description: string;
  badge?: string;
}

export interface ImplementationData {
  heading: string;
  body: string;
  items: ImplementationItem[];
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  accent: string;
  accentBg?: string;
  year: string;
  coverMedia: { type: 'video' | 'image'; src: string; poster?: string };
  physicalPhoto?: { src: string; alt: string; caption: string };
  overview: string;
  myRole: string;
  myRoleContributions?: string[];
  team: string;
  timeline: string;
  status: string;
  stats: ProjectStat[];
  problem: { headline: string; body: string; challenges: { title: string; body: string }[] };
  principles: ProjectPrinciple[];
  architecture?: SystemArchitecture;
  processSections: ProcessSection[];
  screenshotGroups?: ScreenshotGroup[];
  technicalDecisions?: TechnicalDecision[];
  contextData?: ContextSectionData;
  designSystem?: DesignSystemData;
  infoArchitecture?: InfoArchitectureData;
  safetyFeedback?: SafetyFeedbackData;
  implementation?: ImplementationData;
  keyScreens: ScreenItem[];
  videoSrc?: string;
  videoPoster?: string;
  outcome: OutcomeData;
}
