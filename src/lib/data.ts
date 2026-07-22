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

  artifacts?: {
  image: string;
  category: string;
  title: string;
  description: string;
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

    artifacts: [
  {
    image: "/artifacts/sprint-board.png",
    category: "Sprint Planning",
    title: "Weekly Sprint Board",
    description:
      "Used during every sprint planning session to prioritize work, identify blockers, assign ownership, and align engineering, product, and design around a shared sprint goal.",
  },
  {
    image: "/artifacts/roadmap.png",
    category: "Strategy",
    title: "Product Roadmap",
    description:
      "Connected quarterly business objectives with engineering delivery, helping stakeholders understand priorities, sequencing, and release timelines.",
  },
  {
    image: "/artifacts/dashboard.png",
    category: "Analytics",
    title: "Delivery Dashboard",
    description:
      "Monitored sprint health, velocity, blocker resolution, completion rates, and delivery trends to support data-driven retrospectives.",
  },
  {
    image: "/artifacts/retrospective.png",
    category: "Continuous Improvement",
    title: "Sprint Retrospectives",
    description:
      "Captured lessons learned after every sprint, documented action items, and tracked improvements that reduced recurring delivery issues.",
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
  slug: "flexisaf-safapply",

  title: "Scaling School Admissions Through User-Centered Product Management",

  company: "FlexiSAF",

  role: "Associate Product Manager",

  duration: "Jul 2023 – May 2024",

  category: "EdTech",

  metric: "25 Schools Onboarded",

  featured: true,

  summary:
    "Led product delivery for SAFapply, an admissions and school management platform, by introducing structured sprint management, translating customer feedback into product improvements, and improving delivery predictability.",

  overview:
    "SAFapply was developed to simplify admissions and school operations for educational institutions while also targeting business customers. User research and market validation later revealed significantly stronger adoption within the education sector, leading the business to merge SAFapply into SAFRecords.",

  challenge:
    "The product served two different customer segments—schools and businesses—which created competing priorities and diluted product focus.",

  crisis:
    "Although more than 25 schools successfully adopted the platform, business adoption remained low, forcing leadership to reconsider the long-term product strategy.",

  pivot:
    "Customer research, usage data, and stakeholder discussions led to consolidating SAFapply into SAFRecords, allowing the company to focus investment on a stronger education platform.",

  solution:
    "I improved sprint execution, prioritized customer-driven features, translated support requests into actionable user stories, and maintained delivery consistency throughout the transition.",

  impact:
    "The team successfully onboarded over 25 educational institutions while reducing delivery time, improving software quality, and increasing customer satisfaction.",

  teamSize: "Cross-functional Product Team",

  tools: [
    "Jira",
    "Confluence",
    "Google Meet",
    "Google Workspace",
  ],

  responsibilities: [
    "Sprint Planning",
    "Backlog Prioritization",
    "Stakeholder Management",
    "User Story Writing",
    "Product Discovery",
    "Roadmap Planning",
  ],

  initiatives: [
    "Admissions Portal",
    "School Dashboard",
    "Application Tracking",
    "Payment Management",
  ],

  metrics: [
    {
      label: "Schools",
      value: "25+",
    },
    {
      label: "Cycle Time",
      value: "-25%",
    },
    {
      label: "Bug Reports",
      value: "-35%",
    },
    {
      label: "NPS",
      value: "8.5",
    },
  ],

  artifacts: [
    {
      image: "/artifacts/safapply-discovery-board.png",
      category: "Product Discovery",
      title: "Feature Prioritization Board",
      description:
        "Centralized customer feedback, stakeholder requests, and support insights into a structured prioritization board that guided sprint planning and roadmap decisions.",
    },
    {
  image: "/artifacts/flexisaf-roadmap.png",
  category: "Strategy",
  title: "Product Roadmap",
  description:
    "Connected quarterly business objectives with engineering delivery, helping stakeholders understand priorities, sequencing, and release timelines.",
},
{
  image: "/artifacts/flexisaf-dashboard.png",
  category: "Analytics",
  title: "Delivery Dashboard",
  description:
    "Tracked sprint health, release progress, delivery velocity, bug trends, and customer adoption metrics to support data-driven product decisions.",
},
{
  image: "/artifacts/safapply-retrospective.png",
  category: "Continuous Improvement",
  title: "Sprint Retrospective",
  description:
    "Captured sprint wins, recurring blockers, action items, and ownership after every iteration, creating a continuous improvement loop that steadily improved delivery quality.",
},
  ],

  sprintFramework: [
    {
      day: "Monday–Friday",
      title: "Daily Stand-ups",
      activities: [
        "Team progress updates",
        "Identify blockers",
        "Engineering coordination",
        "Priority alignment",
      ],
    },
    {
      day: "Friday",
      title: "Sprint Planning",
      activities: [
        "Sprint retrospective",
        "Backlog refinement",
        "Sprint planning",
        "Roadmap review",
      ],
    },
    {
      day: "Continuous",
      title: "Product Discovery",
      activities: [
        "Support ticket analysis",
        "User story creation",
        "Customer interviews",
        "Feature prioritization",
      ],
    },
  ],

  lessons: [
    "Customer feedback should drive product direction.",
    "Focus creates stronger products than serving everyone.",
    "Structured sprint planning improves delivery consistency.",
    "Data-informed decisions build stakeholder confidence.",
  ],
},

  {
    slug: "microbiz",

    title: "Technical Product Leadership in Fintech",

    company: "Microbiz",

    role: "Project Manager",

    duration: "Mar 2024 – Apr 2025",

    category: "Fintech",

    metric: "Successful Mobile Banking Launch",

    featured: true,

    summary:
      "Led delivery of a mobile banking application while coordinating core banking enhancements, improving cross-functional collaboration, and establishing structured delivery processes.",

    overview:
      "Microbiz was developing a mobile banking application designed to improve the customer banking experience while enhancing parts of its core banking infrastructure. I worked as Project Manager, coordinating product, engineering, and QA teams throughout a complex fintech delivery process.",

    challenge:
      "The team needed to develop a seamless mobile banking experience while integrating with existing core banking infrastructure. The project required close coordination between product, engineering, and QA while maintaining security, reliability, and delivery momentum.",

    crisis:
      "A critical bug in the transaction system was discovered just days before a major release. Communication gaps and technical dependencies were creating pressure across the team and threatening delivery confidence.",

    pivot:
      "I introduced a structured operating rhythm with focused delivery syncs every three days, weekly retrospectives and planning sessions, Linear-based task management, and a feature roadmap that gave the team a clear view of delivery progress.",

    solution:
      "The new operating system improved communication, made blockers visible earlier, strengthened collaboration between engineering and QA, and created a more predictable rhythm for feature delivery and release coordination.",

    impact:
      "The team successfully delivered the mobile banking application, improved cross-functional collaboration, and established stronger delivery processes that supported future fintech innovation.",

    teamSize: "Cross-functional Product & Engineering Team",

    tools: [
      "Linear",
      "Google Meet",
      "Google Workspace",
    ],

    responsibilities: [
      "Project Planning",
      "Feature Prioritization",
      "Cross-functional Coordination",
      "Stakeholder Communication",
      "Risk Management",
      "Release Coordination",
      "Technical Delivery Tracking",
    ],

    initiatives: [
      "Mobile Banking Application",
      "Core Banking Enhancements",
      "Transaction System",
      "Feature Roadmap",
    ],

    metrics: [
      {
        label: "Product",
        value: "Mobile Banking App",
      },
      {
        label: "Delivery",
        value: "Successfully Launched",
      },
      {
        label: "Team",
        value: "Cross-functional",
      },
      {
        label: "Focus",
        value: "Fintech Innovation",
      },
    ],
artifacts: [
  {
    image: "/artifacts/microbiz-roadmap.png",
    category: "Strategy",
    title: "Mobile Banking Product Roadmap",
    description:
      "Connected customer banking needs with product priorities and technical delivery, helping the team align mobile banking features, core banking enhancements, and release sequencing around clear product goals.",
  },
  {
    image: "/artifacts/microbiz-delivery-board.png",
    category: "Delivery Management",
    title: "Cross-functional Delivery Board",
    description:
      "Tracked mobile banking features, core banking enhancements, technical dependencies, QA activities, and release blockers in one shared delivery view, helping the team coordinate work and identify risks earlier.",
  },
  {
    image: "/artifacts/microbiz-release-dashboard.png",
    category: "Quality & Release",
    title: "Transaction System Release Dashboard",
    description:
      "Tracked transaction-system readiness, QA progress, critical defects, technical dependencies, and release risks, helping the team prioritize issues and improve confidence before deployment.",
  },
  {
    image: "/artifacts/microbiz-retrospective.png",
    category: "Continuous Improvement",
    title: "Delivery Retrospective Framework",
    description:
      "Used weekly retrospectives to identify recurring blockers, evaluate delivery performance, capture improvement actions, and strengthen collaboration across product, engineering, and QA.",
  },
],

    sprintFramework: [
      {
        day: "Every 3 Days",
        title: "Delivery Sync",
        activities: [
          "Review project progress",
          "Identify blockers",
          "Coordinate engineering work",
          "Align priorities",
        ],
      },
      {
        day: "Weekly",
        title: "Retrospective & Planning",
        activities: [
          "Review what worked",
          "Identify improvement areas",
          "Prioritize upcoming features",
          "Set weekly goals",
        ],
      },
      {
        day: "Continuous",
        title: "Product Tracking",
        activities: [
          "Linear task management",
          "Feature tracking",
          "Roadmap monitoring",
          "Implementation tracking",
        ],
      },
    ],

    lessons: [
      "Clear communication is critical in complex fintech delivery.",
      "Structured operating rhythms make blockers visible earlier.",
      "Strong collaboration between product, engineering, and QA improves release confidence.",
      "Technical challenges become easier to solve when teams work from shared goals.",
    ],
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
