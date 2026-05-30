import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PageTransition } from "@/components/PageTransition";
import { featuredProjects } from "@/lib/data";

export default function HomePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="mx-auto max-w-content px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24 lg:px-12 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Product Leader · Builder · Strategist
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-ink text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              I build products and teams that ship with clarity.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Nafiu Gwandu helps startups and scaling companies turn ambiguity
              into momentum — from zero-to-one launches to org design at scale.
              Placeholder copy for positioning and expertise.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="inline-flex bg-accent px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent/90"
              >
                View projects
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:text-accent"
              >
                About me →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            <div className="border border-border p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Newsletter
              </p>
              <p className="mt-2 font-display text-xl font-bold uppercase text-ink">
                Join the list
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Occasional notes on product, leadership, and building — no spam,
                no provider hooked up yet.
              </p>
              <NewsletterForm className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section
        className="border-t border-border bg-white"
        aria-labelledby="featured-heading"
      >
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            titleId="featured-heading"
            description="A snapshot of recent impact across product, growth, and leadership. Placeholder metrics and summaries."
          />
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
          <div className="mt-16 md:mt-20">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:text-accent"
            >
              All projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="border-t border-border" aria-labelledby="about-preview-heading">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="About"
                title="More than a résumé"
                titleId="about-preview-heading"
              />
            </div>
            <div className="lg:col-span-7 lg:pl-8">
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                I care about the systems behind great products — how teams
                align, how decisions get made, and how execution stays honest
                when scale demands it. This is placeholder copy for a human,
                reflective introduction.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                On the About page you&apos;ll find my story, philosophy, and how
                I approach building products and leading people.
              </p>
              <Link
                href="/about"
                className="mt-10 inline-flex border-b border-ink pb-1 text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Read my story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="bg-ink text-white"
        aria-labelledby="newsletter-cta-heading"
      >
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                Newsletter
              </p>
              <h2
                id="newsletter-cta-heading"
                className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl"
              >
                Ideas worth your inbox.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Product strategy, leadership lessons, and honest takes on
                building — subscribe for occasional, high-signal updates.
              </p>
            </div>
            <NewsletterForm variant="cta" />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
