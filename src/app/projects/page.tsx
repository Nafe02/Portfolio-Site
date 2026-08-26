import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected projects by Nafiu Gwandu — product strategy, growth, leadership, and execution at scale.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-content px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24 lg:px-12 lg:pt-28">
        <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
        Case Studies
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-ink md:text-6xl lg:text-7xl">
        Product decisions, delivery, and measurable outcomes.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
        A collection of real product case studies highlighting strategy, execution, cross-functional leadership, and measurable business impact.
        </p>
        </FadeIn>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 lg:gap-20">
           {allProjects.map((project, index) => (
  <FadeIn
    key={project.slug}
    delay={index * 0.08}
  >
    <ProjectCard project={project} />
  </FadeIn>
))}
          </div>
        </div>
      </section>

    
    </>
  );
}
