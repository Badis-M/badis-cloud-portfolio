# Repository Guidance

## Language and purpose

- Respond in French. Keep code, commands, comments and new technical identifiers in English.
- Current user requests override older planning context.
- This is a bilingual technical portfolio supporting Swiss permanent roles and consulting credibility, not a sales landing page.
- Preserve verified client experience, project evidence, public CV and profile links. Never invent claims.

## Architecture

- Static Astro with TypeScript and native CSS; Node.js >=22.12.0.
- Shared page and SEO metadata: `src/components/PortfolioPage.astro`.
- English/French wrappers: `src/pages/index.astro` and `src/pages/fr.astro`.
- Verified content and links: `src/data/portfolioContent.ts`.
- Presentation copy and confirmed career/education data: `src/data/portfolioPresentation.ts`.
- Theme and responsive styling: `src/styles/portfolio.css`.
- Public assets and locally hosted licensed fonts: `public/`.
- Browser coverage: `tests/portfolio.spec.ts`.

## Design and export workflow

- Current reference: https://consulting.badismerakchi.com/
- Use warm ivory surfaces, dark readable text, Instrument Serif headings, Manrope body text and restrained terracotta accents. Availability is green.
- Keep both languages, responsive navigation, accessible focus, semantic headings and reduced-motion support.
- Lovable syncs `Badis-M/portfolio`; production source is `Badis-M/badis-cloud-portfolio`. They are separate repositories.
- `portfolio_new/` is an ignored local design/archive reference. Do not import its React/TanStack runtime, dependencies or telemetry.
- Do not unpack exports over the root. Inspect them separately and port only approved design changes.
- Keep changes small and reviewable. Do not add dependencies without approval.
- Do not edit generated/dependency folders: `dist/`, `.astro/`, `node_modules/`.
- Never rewrite published Git history.

## Validation

- Install existing dependencies: `npm ci`.
- Development: `npm run dev`; English `/`, French `/fr/`.
- Build after every site/content change: `npm run build`.
- Browser tests: `npm run test:e2e`, especially for structure, navigation, content, links or assets.
- Whitespace validation: `git diff --check`.
- Review both languages at mobile, tablet and desktop sizes before publication.
- `npm run check` builds and starts preview; it is not a TypeScript-only check.
- Optional `npx astro check` currently has a known missing Node type for `process` in Playwright configuration; report it honestly rather than adding dependencies silently.

## Deployment safety

- Cloudflare Workers Static Assets publishes `./dist` using root `wrangler.jsonc`.
- GitHub is source/CI only; CI builds and runs Playwright for main and pull requests.
- Do not modify deployment/security configuration without approval.
- Commit, push and production actions require user authorization.
- Keep secrets, credentials, tokens, .env, kubeconfigs, Terraform variables and state out of commits and tool output.
