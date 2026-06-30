import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nafiu Gwandu — his story, philosophy, experience, and approach to building products and teams.",
};

const experience = [
  {
    period: "2025 — Present",
    role: "Project Manager",
    company: "Albatross.",
    detail: "Leading remote product teams to deliver a scalable logistics coordination platform for small and mid-size enterprises, improving delivery accuracy by 35%. Established sprint-based delivery cycles, reducing task turnaround time by 25%. Designed a progress-tracking dashboard in Jira to enhance visibility and accountability across distributed teams. Collaborated with UX/UI designers and developers to refine user journeys, increasing overall system usability by 20%.",
  },
  {
    period: "2024 — 2025",
    role: "Project Manager",
    company: "NextCBA.",
    detail: "Oversaw multiple fintech product development cycles, achieving a 40% faster release cadence through Agile implementation. Directed cross-functional collaboration between engineering, QA, and operations teams to ensure product scalability and compliance. Led backlog prioritization and sprint planning, improving feature delivery predictability by 30%. Conducted product performance reviews and stakeholder reporting, driving data-based strategic decisions.",
  },
  {
    period: "2024 — 2025",
    role: "Project Manager",
    company: "MufasaX.",
    detail: "I plan and develop the project scope, Create and lead a team, monitor project progress and set deadlines. I overcome obstacles, manage the project budget, ensure stakeholder satisfaction, and evaluate project performance.",
  },
  {
    period: "2024 — 2025",
    role: "Project Manager",
    company: "Microbiz Microfinance Bank Ltd.",
    detail: "I am focused on the technical aspects of product development, work closely with engineering teams to translate product requirements into technical specifications, manage technical roadmaps, and ensure that the technical aspects of the product align with the overall vision.",
  },
  {
    period: "2024 — 2025",
    role: "Product Manager",
    company: "ilim Tutor.",
    detail: "I help with the strategy, roadmap, and feature definition of a product or product line. I am working closely with cross-functional teams, including engineering, design, marketing, and sales, to deliver products that align with the company’s vision and meet customer needs. I'm also Focused on the underlying platforms that support multiple products or services, ensure scalability and reliability, manage APIs and integration points, and work with developers to enable new capabilities.",
  },
  {
    period: "2023 — 2024",
    role: "Associate Product Manager",
    company: "FlexiSAF Edusoft Limited",
    detail: "I help and inspire a talented software product team to create exceptional digital solutions.",
  },
  {
    period: "2022 — 2022",
    role: "Mentor",
    company: "HostBeak.",
    detail: "I mentor and teach mentees how to install WordPress websites, upload themes, and design the websites. I also have classes and mentorship sessions with them.",
  },
];

const industries = [
  "B2B SaaS",
  "Marketplaces",
  "Fintech",
  "Developer Tools",
  "Consumer Apps",
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-content px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24 lg:px-12 lg:pt-28">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
          About
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-ink md:text-6xl lg:text-7xl">
          Thoughtful products start with thoughtful people.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          I&apos;m Nafiu Gwandu — a product leader who believes clarity is a
          competitive advantage. I&apos;m passionate about bringing ideas to life. Proficient in project and management, cross-team communication, and best-in-class customer service. Enjoys finding creative solutions in customer service, marketing, and web development initiatives.
        </p>
      </section>

      {/* Story */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
                Personal story
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-8 lg:text-lg">
              <p>
                I started where many builders start — curious about how things
                work, impatient with how things are explained, and drawn to the
                gap between vision and execution. Over time, that curiosity
                became a career in product: not because I love roadmaps, but
                because I love making hard things legible for teams and customers
                alike.
              </p>
              <p>
               The through-line in my work has been
                helping organizations move faster without losing their soul —
                shipping with discipline, learning in public, and treating design
                and engineering as partners, not vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border bg-ink/[0.02]">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <SectionHeading
            eyebrow="Philosophy"
            title="Clarity over noise"
            description="A few beliefs that guide how I build products and lead teams. Placeholder philosophy copy."
          />
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Outcomes over output",
                body: "Shipping is necessary; impact is the point. Every initiative should tie to a measurable outcome customers feel.",
              },
              {
                title: "Systems over heroics",
                body: "Sustainable velocity comes from rituals, ownership, and shared context — not late-night saves.",
              },
              {
                title: "Truth over comfort",
                body: "The best teams invite disagreement early, decide clearly, and commit fully once the call is made.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="border-t border-border pt-6"
              >
                <h3 className="font-display text-xl font-bold uppercase text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
                Leadership style
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-8 lg:text-lg">
              <p>
                I lead by creating conditions for excellence: clear goals,
                empowered owners, and enough structure that creativity has room
                to breathe. Placeholder copy on coaching, feedback, and building
                trust across design, engineering, and go-to-market.
              </p>
              <p>
                I&apos;m direct but not harsh, ambitious but not reckless. Teams
                I work with tend to describe the environment as calm, focused,
                and unusually honest about tradeoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building products */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
                How I build
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ol className="space-y-8">
                {[
                  "Start with the customer problem — not the feature list.",
                  "Prototype to learn; scale what earns conviction.",
                  "Instrument early so debates end with data, not volume.",
                  "Align stakeholders before you need them in a war room.",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-6 border-t border-border pt-6"
                  >
                    <span className="font-display text-2xl font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-relaxed text-muted md:text-lg">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border bg-ink/[0.02]">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            description="The roles and companies that I have worked for."
          />
          <ul className="mt-12 space-y-0">
            {experience.map((item) => (
              <li
                key={item.period}
                className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted md:col-span-3">
                  {item.period}
                </p>
                <div className="md:col-span-9">
                  <p className="font-display text-xl font-bold uppercase text-ink">
                    {item.role}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
            Industries
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <li
                key={industry}
                className="border border-border px-4 py-2 text-sm text-ink"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase text-ink md:text-4xl">
                See the work
              </h2>
              <p className="mt-3 max-w-md text-muted">
                Explore projects across product, growth, and leadership.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex bg-accent px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent/90"
            >
              View projects
            </Link>
          </div>
          <div className="mt-16 border-t border-border pt-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Newsletter
            </p>
            <p className="mt-2 font-display text-2xl font-bold uppercase text-ink">
              Stay connected
            </p>
            <NewsletterForm className="mt-6 max-w-lg" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
