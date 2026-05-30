import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { allProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Nafiu Gwandu — product strategy, growth, leadership, and execution at scale.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-content px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24 lg:px-12 lg:pt-28">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
          Work
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-ink md:text-6xl lg:text-7xl">
          Projects that moved the needle.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          A curated set of initiatives across product, growth, and leadership.
          Placeholder content — clean cards, easy to scan, no giant case studies
          yet.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-24 lg:px-12">
          <div className="grid gap-16 md:grid-cols-2 lg:gap-20">
            {allProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink text-white">
        <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            Newsletter
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Get updates on new work
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Subscribe for occasional notes when new projects and essays go live.
          </p>
          <NewsletterForm variant="cta" className="mt-8 max-w-xl" />
        </div>
      </section>
    </PageTransition>
  );
}
