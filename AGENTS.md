# AGENTS.md — Nafiu Gwandu Portfolio

This file is the primary guide for AI coding agents (and humans) working on this repository. Read it before making changes.

---

## Project overview

**Personal portfolio website** for Nafiu Gwandu — a product leader / startup founder aesthetic, not a generic developer template.

### Primary goals (do not dilute)

1. **Educate** visitors on who Nafiu is, his experience, philosophy, and projects.
2. **Convert** visitors to newsletter subscribers via a simple email capture UI (placeholder only — no provider, no backend).

### Site scope

Exactly **3 pages**:

| Route       | File                      | Purpose |
|------------|---------------------------|---------|
| `/`        | `src/app/page.tsx`        | Hero, featured projects, about preview, newsletter CTA |
| `/about`   | `src/app/about/page.tsx`  | Story, philosophy, leadership, experience, industries |
| `/projects`| `src/app/projects/page.tsx` | Full project grid with challenge / solution / impact |

Global shell: `src/app/layout.tsx` (nav + footer on every page).

---

## Tech stack

| Layer        | Choice |
|-------------|--------|
| Framework   | Next.js 15 (App Router) |
| Language    | TypeScript (strict) |
| Styling     | Tailwind CSS 3 |
| Runtime     | React 19 |
| Deployment  | Vercel (no env vars required today) |

### Intentionally excluded

Do **not** add unless explicitly requested:

- CMS, databases, auth, API routes for newsletter
- Heavy state libraries (Redux, Zustand, etc.)
- Animation libraries (Framer Motion, etc.)
- Extra UI kits (shadcn, MUI, Chakra, etc.)
- Parallax, animated backgrounds, heavy motion

Keep the codebase **simple, modular, and beginner-friendly**.

---

## Commands

```bash
npm install          # install dependencies (requires Node 18+)
npm run dev          # dev server → http://localhost:3000
npm run build        # production build
npm start            # serve production build
npm run lint         # ESLint (next/core-web-vitals)
```

### Node / npm notes

- Standard workflow: install [Node.js LTS](https://nodejs.org/) and run commands from the repo root.
- A portable Node binary may exist under `.tools/` from automated setup; it is **gitignored**. Prefer the system `npm` when available.

---

## Repository structure

```
Portfolio-Site/
├── AGENTS.md                 # This file
├── README.md                 # Human quick start
├── package.json
├── tailwind.config.ts        # Design tokens (colors, fonts, animation)
├── next.config.ts
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata, Nav + Footer
│   │   ├── globals.css       # Tailwind layers, smooth scroll, selection
│   │   ├── page.tsx          # Home
│   │   ├── about/page.tsx
│   │   └── projects/page.tsx
│   ├── components/
│   │   ├── Navigation.tsx    # Sticky nav, active states, mobile menu (client)
│   │   ├── Footer.tsx
│   │   ├── NewsletterForm.tsx # Email capture + success state (client)
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeading.tsx
│   │   └── PageTransition.tsx # Subtle fade-in wrapper
│   └── lib/
│       └── data.ts           # Nav links, projects, social placeholders
```

### Where to edit what

| Task | Location |
|------|----------|
| Project copy / list | `src/lib/data.ts` |
| About page narrative | `src/app/about/page.tsx` (inline sections today) |
| Home layout & sections | `src/app/page.tsx` |
| SEO per page | `export const metadata` in each `page.tsx`; defaults in `layout.tsx` |
| Colors, fonts, motion tokens | `tailwind.config.ts` + `globals.css` |
| Shared chrome | `Navigation.tsx`, `Footer.tsx` |

---

## Design system

### Aesthetic keywords

Clean · minimal · bold · modern · editorial · premium · intentional.

**Should feel like:** a confident product leader’s personal brand site.  
**Should NOT feel like:** a SaaS dashboard, template marketplace, or crowded agency site.

### Color palette (monochrome + one accent)

| Token (Tailwind) | Hex       | Usage |
|------------------|-----------|--------|
| `white` (bg)     | `#FFFFFF` | Page background |
| `ink`            | `#0A0A0A` | Primary text |
| `muted`          | `#5C5C5C` | Secondary text |
| `border`         | `#E8E8E8` | Dividers, borders |
| `accent`         | `#E10600` | **Violent red** — use sparingly |

**Accent red rules:** buttons, hover states, active nav, newsletter CTAs, tiny details only. Overusing red weakens the brand.

### Typography

Loaded in `src/app/layout.tsx` via Fontshare:

```html
<link href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap" rel="stylesheet" />
```

| Font    | Tailwind class   | Use |
|---------|------------------|-----|
| Switzer | `font-sans`      | Body, UI, paragraphs |
| Khand   | `font-display`   | Headings, hero statements |

Headings: oversized, uppercase, tight tracking (`font-display font-bold uppercase`).

### Layout

- Max content width: `max-w-content` (72rem), centered with horizontal padding `px-6 md:px-10 lg:px-12`.
- Heavy whitespace; avoid boxed/card clutter everywhere.
- Prefer border-top dividers over heavy shadows.
- Asymmetrical two-column grids on large screens (`lg:grid-cols-12`) are intentional.

### Animation

Allowed: fade-ins, hover transitions, subtle movement (`animate-fadeIn` on `PageTransition`).

Avoid: parallax, spinners, animated backgrounds, excessive motion.

---

## Components reference

### `NewsletterForm` (client component)

- **Props:** `variant?: "default" | "compact" | "cta"`, `className?`
- **Behavior:** On submit, validates email client-side, then shows a **success placeholder** — no network request, no provider.
- **Do not** wire to Mailchimp, Resend, etc. without an explicit user request and env setup.

### `ProjectCard`

- **Props:** `project: Project`, `featured?: boolean`
- **Featured mode** (home): title, summary, category, metric, impact — compact.
- **Full mode** (projects page): adds challenge / solution / impact block.

### `Navigation` (client)

- Uses `usePathname()` for active link styling (`text-accent` + underline).
- Mobile hamburger toggles `#mobile-menu`.

### `SectionHeading`

- **Props:** `eyebrow?`, `title`, `description?`, `align?`, `titleId?` (for `aria-labelledby`).

---

## Data model

Defined in `src/lib/data.ts`:

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  category: string;
  metric?: string;
  featured?: boolean;
};
```

- `featuredProjects` — 3 items for the home page grid.
- `allProjects` — full list for `/projects`.
- `navLinks`, `socialLinks` — navigation and footer placeholders (`href: "#"` until real URLs exist).

When adding projects, keep slugs unique and update both arrays if the project should appear on the home page.

---

## Page content guidelines

### Home (`src/app/page.tsx`)

1. Hero — positioning headline, supporting copy, CTA to projects, inline newsletter box.
2. Featured projects — 3 cards from `featuredProjects`.
3. About preview — teaser + link to `/about`.
4. Newsletter CTA — full-width `bg-ink` band with `NewsletterForm variant="cta"`.

### About (`src/app/about/page.tsx`)

Human and reflective — **not a résumé dump**. Sections: story, philosophy (3 beliefs), leadership style, how I build (numbered list), experience timeline, industries tags, projects CTA + newsletter.

Copy is placeholder; replace with real narrative over time.

### Projects (`src/app/projects/page.tsx`)

Scannable editorial grid — **no long case studies yet**. Each card uses full `ProjectCard` detail fields.

---

## SEO & accessibility

- Root metadata in `layout.tsx` (`title.template`, `description`, Open Graph).
- Per-page `metadata` exports on About and Projects.
- Semantic landmarks: `<main>`, `<header>`, `<footer>`, `<section>`, heading hierarchy.
- Forms: visible labels or `sr-only` labels, `aria-live` on newsletter success.
- `html { scroll-behavior: smooth; }` in `globals.css`.

---

## Agent workflow conventions

### Before coding

1. Confirm the change fits the **3-page scope** and **two primary goals**.
2. Match existing Tailwind patterns and component APIs — do not introduce new abstractions for one-off use.
3. Prefer editing `data.ts` over hardcoding duplicate project strings.

### When implementing features

- **Small diffs** — minimal scope per task.
- **No over-engineering** — no helpers for one line; no speculative error handling.
- **Client components** only when needed (`"use client"` for hooks, pathname, form state).
- **Placeholder content** is acceptable until the user supplies real copy.

### Safe changes (common tasks)

- Swap placeholder copy in `data.ts` or page files.
- Add real social URLs in `socialLinks`.
- Add a project row to `allProjects` / `featuredProjects`.
- Tune spacing/typography within existing Tailwind tokens.
- Add `metadata` or favicon under `app/`.

### Changes that need explicit user approval

- New pages or routes beyond Home / About / Projects.
- Newsletter backend or third-party integrations.
- New npm dependencies.
- Design system changes (new colors, fonts, layout paradigm).
- Authentication, CMS, database, or API routes.

---

## Deployment (Vercel)

1. Push repository to GitHub.
2. Import project in Vercel; framework preset **Next.js**.
3. Build command: `npm run build` (default). Output: Next.js default.
4. No environment variables required for current functionality.

---

## Content ownership

All visible copy is **placeholder** unless the user has replaced it. The site represents **Nafiu Gwandu** — keep tone: confident, clear, product-leadership oriented.

---

## Related files

| File | Audience |
|------|----------|
| `README.md` | Quick human onboarding |
| `AGENTS.md` | AI agents + detailed project contract |
| `.eslintrc.json` | Lint rules (`next/core-web-vitals`) |

When `README.md` and `AGENTS.md` disagree, **`AGENTS.md` wins** for agents; update both if project conventions change.
