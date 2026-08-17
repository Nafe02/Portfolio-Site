"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

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
  className={`sticky top-0 z-50 backdrop-blur transition-colors duration-300 ${
    scrolled
      ? "bg-white/95 dark:bg-neutral-950/95 shadow-lg"
      : "bg-white/85 dark:bg-neutral-950/85"
  }`}
  animate={{
    opacity: 1,
  }}
  transition={{
    duration: 0.25,
  }}
>
      <nav
  className="mx-auto flex max-w-content items-center justify-between border-b border-border/80 px-6 py-5 md:px-10 lg:px-12"
>
        <Link
          href="/"
          className="font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white transition-colors duration-200 hover:text-accent dark:hover:text-accent"
          onClick={() => setOpen(false)}
        >
          Nafiu Gwandu
        </Link>

        <div className="hidden items-center gap-8 md:flex">
  <ul className="flex items-center gap-10">
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
  : "text-ink dark:text-white hover:text-accent"
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

  <ThemeToggle />
</div>

        <button
          type="button"
         className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-accent dark:text-white dark:hover:text-accent md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
  <X size={24} />
) : (
  <Menu size={24} />
)}
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
                    isActive
  ? "text-accent"
  : "text-ink dark:text-white hover:text-accent"
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
