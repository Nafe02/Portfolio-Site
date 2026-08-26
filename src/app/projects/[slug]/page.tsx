import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allProjects } from "@/lib/data";
import Link from "next/link";
import ArtifactCard from "@/components/projects/ArtifactCard";
import SprintFramework from "@/components/projects/SprintFramework";
import { FadeIn } from "@/components/FadeIn";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} — Product Case Study | Nafiu Gwandu`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: `https://nafiu.vercel.app/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.summary,
      url: `https://nafiu.vercel.app/projects/${project.slug}`,
      type: "article",
    },
  };
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
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);

const nextProject =
  allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Hero */}

      <FadeIn className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-muted">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-bold uppercase leading-tight">
          {project.title}
        </h1>

        <p className="mt-8 text-xl leading-relaxed text-muted">
          {project.summary}
        </p>
      </FadeIn>

      {/* Project Info */}

      <FadeIn className="mt-20">
  <div className="grid gap-10 border-t pt-10 md:grid-cols-4">

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
      </FadeIn>

      {/* Overview */}

      {project.overview && (
        <FadeIn>
  <section className="mt-24">
          <h2 className="text-3xl font-bold">Overview</h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            {project.overview}
          </p>
        </section>
</FadeIn>
      )}

      {/* Challenge */}

      <FadeIn>
  <section className="mt-24">
        <h2 className="text-3xl font-bold">
          The Challenge
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted">
          {project.challenge}
        </p>
     </section>
</FadeIn>

      {/* Crisis */}

      {project.crisis && (
        <FadeIn>
  <section className="mt-24">
          <h2 className="text-3xl font-bold">
            The Crisis Point
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            {project.crisis}
          </p>
        </section>
</FadeIn>
      )}

      {/* Pivot */}

      {project.pivot && (
       <FadeIn>
  <section className="mt-24">
          <h2 className="text-3xl font-bold">
            Strategic Pivot
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            {project.pivot}
          </p>
         </section>
</FadeIn>
      )}

      {/* Sprint Framework */}

      {project.sprintFramework && (
        <FadeIn>
  <section className="mt-24">

          <h2 className="text-3xl font-bold">
            Sprint Operating System
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            I introduced a structured operating rhythm that kept engineering,
            design, and product aligned throughout every sprint.
          </p>

          <SprintFramework phases={project.sprintFramework} />

         </section>
</FadeIn>
      )}

      {/* Responsibilities */}

{project.responsibilities && (
  <FadeIn>
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
  </FadeIn>
)}


{/* Key Initiatives */}

{project.initiatives && (
  <FadeIn>
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
  </FadeIn>
)}


      {/* Solution */}

      <FadeIn>
  <section className="mt-24">

        <h2 className="text-3xl font-bold">
          My Approach
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted">
          {project.solution}
        </p>

      </section>
</FadeIn>

      {/* Results */}

      {project.metrics && (
  <FadeIn>
    <section className="mt-24">
          <h2 className="text-3xl font-bold">
            Results
          </h2>

         {project.metrics && (
  <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
    {project.metrics.map((item) => (
      <div
        key={item.label}
        className="min-w-0 rounded-lg border p-5 md:p-8"
      >
      <p className="break-normal text-2xl font-bold leading-tight sm:text-2xl lg:text-3xl 2xl:text-4xl">
  {item.value}
</p>

        <p className="mt-2 break-words text-[10px] uppercase tracking-[0.12em] text-muted sm:text-xs md:mt-3 md:text-sm md:tracking-wide">
          {item.label}
        </p>
      </div>
    ))}
  </div>
)}

        </section>
  </FadeIn>
)}   

      {/* Reflection */}
      <FadeIn>
  <section className="mt-32">

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
</FadeIn>

{/* Product Artefacts */}

<FadeIn>
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

    {project.artifacts?.map((artifact) => (
  <ArtifactCard
    key={artifact.title}
    image={artifact.image}
    alt={artifact.title}
    category={artifact.category}
    title={artifact.title}
    description={artifact.description}
  />
))}

  </div>
</section>
</FadeIn>

{/* Lessons */}
{project.lessons && (
  <FadeIn>
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
  </FadeIn>
)}

{/* Business Impact */}

<FadeIn>
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
</FadeIn>

<FadeIn>
  <section className="mt-32 border-t pt-16">
    <p className="text-sm uppercase tracking-[0.2em] text-muted">
      Next Case Study
    </p>

    <h2 className="mt-4 text-5xl font-bold">
      {nextProject.title}
    </h2>

    <p className="mt-6 max-w-2xl text-lg text-muted">
      {nextProject.summary}
    </p>

    <Link
      href={`/projects/${nextProject.slug}`}
      className="mt-10 inline-block border px-8 py-4 font-semibold transition hover:bg-black hover:text-white"
    >
      View {nextProject.company} Case Study →
    </Link>
  </section>
</FadeIn> 

    </main>
  );
}