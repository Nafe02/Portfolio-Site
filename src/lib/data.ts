export type Project = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  category: string;
  metric?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "platform-redesign",
    title: "Platform Redesign",
    summary:
      "Led a zero-to-one product overhaul for a B2B workflow platform serving 40k+ monthly users.",
    category: "Product Strategy",
    metric: "32% increase in activation",
    featured: true,
    challenge: "Legacy UX was blocking enterprise adoption.",
    solution: "Rebuilt core flows with a cross-functional squad in 12 weeks.",
    impact: "Activation up 32%, NPS +18 points.",
  },
  {
    slug: "growth-engine",
    title: "Growth Engine",
    summary:
      "Designed and shipped a self-serve onboarding system that scaled acquisition without headcount.",
    category: "Growth",
    metric: "2.4× trial-to-paid conversion",
    featured: true,
    challenge: "Paid acquisition was efficient but onboarding leaked users.",
    solution: "Instrumented funnel, shipped progressive disclosure onboarding.",
    impact: "Trial-to-paid improved 2.4× in one quarter.",
  },
  {
    slug: "team-scale",
    title: "Team at Scale",
    summary:
      "Built product org practices that took a team from 4 to 28 while maintaining shipping velocity.",
    category: "Leadership",
    metric: "Ship cadence held at 2-week cycles",
    featured: true,
    challenge: "Rapid hiring threatened quality and alignment.",
    solution: "Introduced lightweight rituals, clear ownership, and outcome metrics.",
    impact: "Maintained 2-week release cadence through 7× team growth.",
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
