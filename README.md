# Badis Merakchi — Portfolio

Personal portfolio website for my Cloud & DevOps engineering profile.

The website presents my technical skills, consulting experience, selected personal projects, and contact information.

## Tech Stack

- Astro
- HTML / CSS
- Cloudflare Workers Static Assets
- Custom domain

## Website

https://portfolio.badismerakchi.com/

## Purpose

This portfolio is designed as a professional landing page for Cloud, DevOps, and infrastructure engineering opportunities around Geneva and Switzerland.

## Author

Badis Merakchi  
Cloud & DevOps Engineer

## Local development

Requires Node.js >=22.12.0.

```sh
npm ci
npm run dev
```

English: http://localhost:4321/ — French: http://localhost:4321/fr/.

```sh
npm run build
npm run test:e2e
git diff --check
```

## Visual migration and backup

The Lovable design is implemented in native Astro/CSS without importing its React/TanStack runtime. Presentation data is in `src/data/portfolioPresentation.ts`; original project and client evidence remains in `src/data/portfolioContent.ts`. Fonts are hosted locally with their OFL licenses.

The previous version is preserved on GitHub by the annotated `V1.0` tag. The migration is developed on `codex/lovable-visual-migration` and requires local visual approval before production publication. See `PROJECT_STATE.md` for the current status.

Cloudflare Workers Static Assets publishes `./dist` using `wrangler.jsonc`. GitHub is the source repository, not the hosting provider.
