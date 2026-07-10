import { notFound } from "next/navigation";
import { allProjects } from "@/lib/data";
import Link from "next/link";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Hero */}

      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-muted">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-bold uppercase leading-tight">
          {project.title}
        </h1>

        <p className="mt-8 text-xl leading-relaxed text-muted">
          {project.summary}
        </p>
      </div>

      {/* Project Info */}

      <div className="mt-20 grid gap-10 border-t pt-10 md:grid-cols-4">

        <div>
          <p className="text-xs uppercase text-muted">Company</p>
          <p className="mt-2 font-semibold">{project.company}</p>
        </div>

        <div>
          <p className="text-xs uppercase text-muted">Role</p>
          <p className="mt-2 font-semibold">{project.role}</p>
        </div>

        <div>
          <p className="text-xs uppercase text-muted">Duration</p>
          <p className="mt-2 font-semibold">{project.duration}</p>
        </div>

        <div>
          <p className="text-xs uppercase text-muted">Team</p>
          <p className="mt-2 font-semibold">{project.teamSize}</p>
        </div>

      </div>

      {/* Overview */}

      {project.overview && (
        <section className="mt-24">
          <h2 className="text-3xl font-bold">Overview</h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            {project.overview}
          </p>
        </section>
      )}

      {/* Challenge */}

      <section className="mt-24">
        <h2 className="text-3xl font-bold">
          The Challenge
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted">
          {project.challenge}
        </p>
      </section>

      {/* Crisis */}

      {project.crisis && (
        <section className="mt-24">
          <h2 className="text-3xl font-bold">
            The Crisis Point
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            {project.crisis}
          </p>
        </section>
      )}

      {/* Pivot */}

      {project.pivot && (
        <section className="mt-24">
          <h2 className="text-3xl font-bold">
            Strategic Pivot
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            {project.pivot}
          </p>
        </section>
      )}

      {/* Sprint Framework */}

      {project.sprintFramework && (
        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            Sprint Operating System
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            I introduced a structured operating rhythm that kept engineering,
            design, and product aligned throughout every sprint.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {project.sprintFramework.map((phase) => (

              <div
                key={phase.day}
                className="border border-border p-8 rounded-lg"
              >

                <p className="text-sm uppercase tracking-[0.2em] text-accent">
                  {phase.day}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {phase.title}
                </h3>

                <ul className="mt-6 space-y-3">

                  {phase.activities.map((activity) => (

                    <li
                      key={activity}
                      className="text-muted"
                    >
                      • {activity}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </section>
      )}

      {/* Responsibilities */}

{project.responsibilities && (
  <section className="mt-24">
    <h2 className="text-3xl font-bold">
      My Responsibilities
    </h2>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {project.responsibilities.map((item) => (
        <div
          key={item}
          className="border border-border p-6"
        >
          <p className="font-medium">
            {item}
          </p>
        </div>
      ))}
    </div>
  </section>
)}

{/* Key Initiatives */}

{project.initiatives && (
  <section className="mt-24">
    <h2 className="text-3xl font-bold">
      Key Initiatives
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {project.initiatives.map((item) => (
        <div
          key={item}
          className="border border-border p-8"
        >
          <h3 className="font-semibold text-lg">
            {item}
          </h3>
        </div>
      ))}
    </div>
  </section>
)}

      {/* Solution */}

      <section className="mt-24">

        <h2 className="text-3xl font-bold">
          My Approach
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted">
          {project.solution}
        </p>

      </section>

      {/* Results */}

      {project.metrics && (

        <section className="mt-24">

          <h2 className="text-3xl font-bold">
            Results
          </h2>

          <div className="mt-10 grid gap-6 grid-cols-2 md:grid-cols-4">

          {project.metrics.map((item) => (

              <div
                key={item.label}
                className="border rounded-lg p-8"
              >

                <p className="text-4xl font-bold">
                  {item.value}
                </p>

                <p className="mt-3 text-sm uppercase tracking-wide text-muted">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </section>

)}   

      {/* Reflection */}
      <section className="mt-24">
  <h2 className="text-3xl font-bold">
    Reflection
  </h2>

  <p className="mt-6 text-lg leading-8 text-muted">
    This project reinforced that delivery challenges are rarely caused by a
    lack of talent. More often, they stem from unclear priorities,
    inconsistent communication, and weak operating systems. By redesigning
    how the team worked—not just what they worked on—we restored
    predictability, improved collaboration, and accelerated delivery.
  </p>
</section>

{/* Product Artefacts */}

<section className="mt-32">
  <div className="max-w-3xl">
    <p className="text-sm uppercase tracking-[0.25em] text-muted">
      Delivery Assets
    </p>

    <h2 className="mt-4 text-4xl font-bold">
      Product Artefacts
    </h2>

    <p className="mt-6 text-lg leading-8 text-muted">
      Throughout the engagement, I created lightweight systems that improved
      planning, communication, and delivery visibility. These artefacts became
      the team&apos;s single source of truth during execution.
    </p>
  </div>

  <div className="mt-14 grid gap-10 lg:grid-cols-2">

    {/* Sprint Board */}

    <article className="overflow-hidden rounded-lg border border-border bg-white">

      <img
        src="/artifacts/sprint-board.png"
        alt="Sprint Planning Board"
        className="w-full"
      />

      <div className="p-8">

        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Sprint Planning
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Weekly Sprint Board
        </h3>

        <p className="mt-4 leading-7 text-muted">
          Used during every sprint planning session to prioritize work,
          identify blockers, assign ownership, and align engineering,
          product, and design around a shared sprint goal.
        </p>

      </div>

    </article>

    {/* Roadmap */}

    <article className="overflow-hidden rounded-lg border border-border bg-white">

      <img
        src="/artifacts/roadmap.png"
        alt="Product Roadmap"
        className="w-full"
      />

      <div className="p-8">

        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Strategy
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Product Roadmap
        </h3>

        <p className="mt-4 leading-7 text-muted">
          Connected quarterly business objectives with engineering delivery,
          helping stakeholders understand priorities, sequencing, and release
          timelines.
        </p>

      </div>

    </article>

    {/* Metrics Dashboard */}

    <article className="overflow-hidden rounded-lg border border-border bg-white">

      <img
        src="/artifacts/dashboard.png"
        alt="Sprint Metrics Dashboard"
        className="w-full"
      />

      <div className="p-8">

        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Analytics
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Delivery Dashboard
        </h3>

        <p className="mt-4 leading-7 text-muted">
          Monitored sprint health, velocity, blocker resolution, completion
          rates, and delivery trends to support data-driven retrospectives.
        </p>

      </div>

    </article>

    {/* Meeting Notes */}

    <article className="overflow-hidden rounded-lg border border-border bg-white">

      <img
        src="/artifacts/retrospective.png"
        alt="Sprint Retrospective"
        className="w-full"
      />

      <div className="p-8">

        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Continuous Improvement
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          Sprint Retrospectives
        </h3>

        <p className="mt-4 leading-7 text-muted">
          Captured lessons learned after every sprint, documented action items,
          and tracked improvements that reduced recurring delivery issues.
        </p>

      </div>

    </article>

  </div>
</section>

{/* Lessons */}

{project.lessons && (

<section className="mt-24">

  <h2 className="text-3xl font-bold">
    Lessons Learned
  </h2>

  <ul className="mt-8 space-y-4">

    {project.lessons.map((lesson) => (

      <li
        key={lesson}
        className="border-l-2 border-accent pl-6 text-lg leading-8"
      >
        {lesson}
      </li>

    ))}

  </ul>

</section>

)}

{/* Business Impact */}

<section className="mt-24">

  <h2 className="text-3xl font-bold">
    Business Impact
  </h2>

  <div className="mt-10 grid gap-8 md:grid-cols-2">

    <div className="border border-border p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">
        Delivery
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        Predictable Product Delivery
      </h3>

      <p className="mt-4 text-muted leading-8">
        Introducing structured sprint planning and weekly operating
        rituals significantly improved delivery consistency,
        reducing missed deadlines and improving execution across the
        entire engineering organization.
      </p>
    </div>

    <div className="border border-border p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">
        Team Operations
      </p>

      <h3 className="mt-4 text-2xl font-bold">
        Stronger Cross-functional Collaboration
      </h3>

      <p className="mt-4 text-muted leading-8">
        Designers, engineers, QA and product managers operated from a
        single sprint framework, reducing communication gaps and making
        priorities visible across every team.
      </p>
    </div>

  </div>

</section>

<section className="mt-32 border-t pt-16">

<p className="text-sm uppercase tracking-[0.2em] text-muted">
Next Case Study
</p>

<h2 className="mt-4 text-5xl font-bold">
Technical Product Leadership in Fintech
</h2>

<p className="mt-6 max-w-2xl text-lg text-muted">
How I helped engineering teams translate business requirements into
technical delivery while improving scalability and product quality.
</p>

<Link
  href="/projects/microbiz"
  className="mt-10 inline-block border px-8 py-4 font-semibold hover:bg-black hover:text-white transition"
>
View Microbiz Case Study →
</Link>

</section>  

    </main>
  );
}