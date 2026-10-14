# Badis Merakchi — Portfolio

Personal portfolio website for my Cloud & DevOps engineering profile.

The website presents my technical skills, consulting experience, selected personal projects, and contact information.

## Tech Stack

- Astro
- TypeScript and native CSS
- Locally hosted Instrument Serif and Manrope fonts
- Playwright browser tests
- Cloudflare Workers Static Assets
- Custom domain

## Website

https://portfolio.badismerakchi.com/

## Purpose

This bilingual technical portfolio supports Swiss permanent-role applications and consulting credibility. It demonstrates verified client experience and practical project evidence; it is not the consulting site's sales landing page.

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

The approved Lovable design uses warm ivory surfaces, Instrument Serif headings, Manrope body text and terracotta accents. It is implemented in native Astro/CSS without importing the React/TanStack runtime. Presentation data is in `src/data/portfolioPresentation.ts`; verified project and client evidence remains in `src/data/portfolioContent.ts`. Fonts are hosted locally with their OFL licenses.

The original version is preserved on GitHub by the annotated `V1.0` tag. The navy design was subsequently published on `main`; the ivory redesign requires local visual approval before production publication. See `PROJECT_STATE.md` for the current status.

Lovable syncs a separate repository, `Badis-M/portfolio`. This production repository is `Badis-M/badis-cloud-portfolio`; there is no automatic sync between them. Transfer approved visual changes deliberately, rather than copying an export over the repository root.

The ignored `portfolio_new/` directory is a local design/archive reference, not a build input or a GitHub backup. The latest downloaded archive and extraneous imported scaffold are preserved under `portfolio_new/latest-export/`. Do not replace `package.json`, `tsconfig.json`, deployment configuration, public links or verified content with export defaults.

Cloudflare Workers Static Assets publishes `./dist` using `wrangler.jsonc`. GitHub is the source repository, not the hosting provider.
