export type Project = {
  slug: string;
  title: string;

  company?: string;
  role?: string;
  duration?: string;

  summary: string;
  overview?: string;

  category: string;
  metric?: string;
  featured?: boolean;

  challenge: string;
  solution: string;
  impact: string;

  teamSize?: string;

  tools?: string[];

  crisis?: string;
  pivot?: string;

  lessons?: string[];

  responsibilities?: string[];
  initiatives?: string[];

  metrics?: {
    label: string;
    value: string;
  }[];

  sprintFramework?: {
    day: string;
    title: string;
    activities: string[];
  }[];
};

export const featuredProjects: Project[] = [
  {
    slug: "ilim-tutor",

    title: "Leadership and Strategic Pivots in EdTech Development",

    company: "Ilim Tutor",

    role: "Product Manager",

    duration: "Mar 2024 – Mar 2025",

    category: "EdTech",

    metric: "+87% Delivery Velocity",

    featured: true,

    summary:
      "Led delivery of an AI-powered STEM platform by introducing structured sprint management, improving execution, reducing burnout, and accelerating feature delivery.",

    overview:
      "Ilim Tutor is an AI-powered STEM learning platform that personalizes education for K–12 students. I worked as Product Manager leading cross-functional delivery, improving operational execution, and strengthening product development processes.",

    challenge:
      "Four months into development, delivery velocity had slowed significantly. System integrations remained incomplete, burnout was increasing, and sprint commitments were becoming difficult to achieve.",

    crisis:
      "Three consecutive sprint cycles experienced declining productivity. Engineers were overwhelmed, priorities shifted frequently, and stakeholders had reduced confidence in delivery timelines.",

    pivot:
      "I redesigned the team's delivery process by introducing structured sprint planning, Friday retrospectives, Monday kickoffs, daily standups, clearer ownership, and measurable sprint goals.",

    solution:
      "The new operating rhythm improved communication, accelerated blocker resolution, and restored predictable delivery across engineering, design, and product.",

    impact:
      "The team completed all core platform initiatives while dramatically improving delivery speed and reducing burnout.",

    teamSize: "12 Cross-functional Team Members",

    tools: [
      "Linear",
      "Google Meet",
      "Google Workspace",
    ],

    responsibilities: [
      "Sprint Planning",
      "Roadmap Prioritization",
      "Cross-functional Leadership",
      "Stakeholder Communication",
      "Risk Management",
      "Release Planning",
    ],

    initiatives: [
      "Student Dashboard",
      "AI Virtual Assistant",
      "Game Integration Platform",
    ],

    metrics: [
      {
        label: "Delivery Velocity",
        value: "+87%",
      },
      {
        label: "Sprint Completion",
        value: "95%",
      },
      {
        label: "Bug Resolution",
        value: "-66%",
      },
      {
        label: "Burnout Reduction",
        value: "15%",
      },
    ],

    sprintFramework: [
      {
        day: "Friday",
        title: "Sprint Planning & Retrospective",
        activities: [
          "Sprint retrospective",
          "Task planning & prioritization",
          "Sprint commitment",
          "Architecture discussions",
        ],
      },
      {
        day: "Monday",
        title: "Sprint Kickoff",
        activities: [
          "Sprint goal alignment",
          "Resource allocation",
          "Identify blockers",
          "Confirm ownership",
        ],
      },
      {
        day: "Tuesday – Thursday",
        title: "Daily Standups",
        activities: [
          "Yesterday's progress",
          "Today's priorities",
          "Resolve blockers",
          "Cross-team synchronization",
        ],
      },
    ],

    lessons: [
      "Structure creates speed.",
      "Transparent communication prevents hidden blockers.",
      "Consistent sprint rituals improve execution.",
      "Healthy teams ship better products.",
    ],
  },

  {
    slug: "growth-engine",
    title: "Growth Engine",
    summary:
      "Designed and shipped a self-serve onboarding system that scaled acquisition without headcount.",
    category: "Growth",
    metric: "2.4× trial-to-paid conversion",
    featured: true,
    challenge:
      "Paid acquisition was efficient but onboarding leaked users.",
    solution:
      "Instrumented funnel and shipped progressive disclosure onboarding.",
    impact:
      "Trial-to-paid improved 2.4× in one quarter.",
  },

  {
    slug: "team-scale",
    title: "Team at Scale",
    summary:
      "Built product org practices that took a team from 4 to 28 while maintaining shipping velocity.",
    category: "Leadership",
    metric: "Ship cadence held at 2-week cycles",
    featured: true,
    challenge:
      "Rapid hiring threatened quality and alignment.",
    solution:
      "Introduced lightweight rituals, clear ownership, and outcome metrics.",
    impact:
      "Maintained 2-week release cadence through 7× team growth.",
  },
];
  
 

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    slug: "marketplace-launch",
    title: "Marketplace Launch",
    summary: "Took a two-sided marketplace from concept to public beta in 90 days.",
    category: "0→1",
    metric: "1,200 sellers in beta",
    challenge: "No supply-side liquidity at launch.",
    solution: "Curated initial supply with founder-led outreach and incentives.",
    impact: "1,200 active sellers before public launch.",
  },
  {
    slug: "ops-automation",
    title: "Ops Automation",
    summary: "Reduced manual ops load by automating high-volume support workflows.",
    category: "Operations",
    metric: "60% fewer manual tickets",
    challenge: "Support volume outpaced team capacity.",
    solution: "Built internal tooling and routing rules with ops partners.",
    impact: "Manual ticket volume down 60%.",
  },
  {
    slug: "data-infrastructure",
    title: "Data Infrastructure",
    summary: "Established product analytics foundations for faster, evidence-led decisions.",
    category: "Analytics",
    metric: "Decision time cut in half",
    challenge: "Teams debated opinions without shared data.",
    solution: "Standardized event taxonomy and self-serve dashboards.",
    impact: "Average decision cycle time reduced by 50%.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
] as const;

export const socialLinks = [
  { href: "https://www.linkedin.com/in/nafiu-gwandu/", label: "LinkedIn" },
  { href: "https://mycasestudy.notion.site/Leadership-and-Strategic-Pivots-in-EdTech-Development-1453b0e5210980dc86ccf09ee74347c7", label: "Notion" },
  { href: "https://github.com/Nafe02", label: "GitHub" },
] as const;
