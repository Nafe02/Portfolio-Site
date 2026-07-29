"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
   <motion.article
  whileHover={{ y: -4 }}
  transition={{
    duration: 0.2,
    ease: "easeOut",
  }}
  className={`group flex flex-col border-t border-border pt-8 transition-colors ${
    featured ? "md:pt-10" : ""
  }`}
>
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {project.category}
        </span>
        {project.metric && (
          <span className="text-right text-xs text-ink/70">{project.metric}</span>
        )}
      </div>

      <h3
        className={`font-display font-bold uppercase leading-none tracking-tight text-ink transition-colors group-hover:text-accent ${
          featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
        }`}
      >
        {project.title}
      </h3>

      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted">
        {project.summary}
      </p>

      {!featured && (
        <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">
              Challenge
            </dt>
            <dd className="mt-1 text-ink">{project.challenge}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">
              Solution
            </dt>
            <dd className="mt-1 text-ink">{project.solution}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted">
              Impact
            </dt>
            <dd className="mt-1 font-medium text-ink">{project.impact}</dd>
          </div>
        </dl>
      )}

      {featured && project.impact && (
        <p className="mt-6 text-sm font-medium text-ink">{project.impact}</p>
      )}

<Link
  href={`/projects/${project.slug}`}
  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
>
  View case study
 <motion.span
  aria-hidden
  whileHover={{ x: 4 }}
  transition={{ duration: 0.2 }}
>
  →
</motion.span>
</Link>
   </motion.article>
  );
}
