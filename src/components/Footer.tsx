import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { SiNotion } from "react-icons/si";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-tight text-ink md:text-3xl">
              Nafiu Gwandu
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Product leader building systems, teams, and products with clarity
              and intent.
            </p>
            <ul className="mt-8 flex items-center gap-5">
  {socialLinks.map(({ href, label }) => {
    const Icon =
      label === "LinkedIn"
        ? FaLinkedin
        : label === "GitHub"
        ? FaGithub
        : SiNotion;

    return (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted transition-colors hover:text-accent"
        >
          <Icon size={22} />
        </a>
      </li>
    );
  })}
</ul>
</div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Newsletter
            </p>
            <p className="mt-2 font-display text-xl font-bold uppercase text-ink">
              Stay in the loop
            </p>
            <p className="mt-2 text-sm text-muted">
              Thoughts on product, leadership, and building — delivered
              occasionally.
            </p>
            <NewsletterForm variant="compact" className="mt-6" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {year} Nafiu Gwandu. All rights reserved.</p>
          <p>Built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
