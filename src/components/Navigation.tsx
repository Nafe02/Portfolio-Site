"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
 const { scrollY } = useScroll();
const [scrolled, setScrolled] = useState(false);

useMotionValueEvent(scrollY, "change", (latest) => {
  setScrolled(latest > 20);
});

  return (
    <motion.header
  className="sticky top-0 z-50"
  animate={{
    backgroundColor: scrolled
      ? "rgba(255,255,255,0.95)"
      : "rgba(255,255,255,0.85)",
    backdropFilter: scrolled
      ? "blur(18px)"
      : "blur(8px)",
    boxShadow: scrolled
      ? "0 6px 20px rgba(0,0,0,0.06)"
      : "0 0px 0px rgba(0,0,0,0)",
  }}
  transition={{
    duration: 0.25,
    ease: "easeOut",
  }}
>
      <nav
  className="mx-auto flex max-w-content items-center justify-between border-b border-border/80 px-6 py-5 md:px-10 lg:px-12"
>
        <Link
          href="/"
          className="font-display text-lg font-bold uppercase tracking-wide text-ink transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          Nafiu Gwandu
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
  href={href}
  className={`group relative inline-block -translate-y-0 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 ${
    isActive
      ? "text-accent"
      : "text-ink hover:text-accent"
  }`}
  aria-current={isActive ? "page" : undefined}
>
  {label}

  <span
    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
      isActive
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}
  />
</Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-px w-6 bg-ink transition-all ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border transition-all duration-300 md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-3 text-sm font-medium uppercase tracking-wider transition-colors ${
                    isActive ? "text-accent" : "text-ink hover:text-accent"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.header>
  );
}
