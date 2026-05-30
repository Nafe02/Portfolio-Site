# Nafiu Gwandu — Personal Portfolio

A minimal, editorial portfolio built with Next.js, TypeScript, Tailwind CSS, and the App Router. Designed for deployment on Vercel.

## Pages

- **Home** — Hero, featured projects, about preview, newsletter CTA
- **About** — Story, philosophy, leadership, experience, industries
- **Projects** — Project cards with challenge, solution, and impact

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design

- **Fonts:** Switzer (body), Khand (headings) via Fontshare
- **Palette:** White background, black type, accent red `#E10600`
- **Newsletter:** UI-only form with placeholder success state (no backend)

## Project structure

```
src/
  app/           # Pages and layout
  components/    # Reusable UI
  lib/           # Placeholder data
```

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com). No environment variables required.
