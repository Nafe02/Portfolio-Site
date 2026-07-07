import { notFound } from "next/navigation";
import { allProjects } from "@/lib/data";

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

    </main>
  );
}