# Portfolio Project State

## Audit baseline

This document records the repository and live-site state reviewed on 2026-09-01. It is planning context for a future visual refactor; it does not authorize implementation or deployment changes.

## Current site purpose

The portfolio is a bilingual technical credibility site for Badis Merakchi's Cloud and DevOps profile. Its primary job is to support:

- Swiss permanent-role applications, especially around Geneva and French-speaking Switzerland;
- freelance and consulting credibility without becoming a sales landing page;
- verification of practical Cloud, DevOps, Infrastructure as Code, Kubernetes, CI/CD, automation, security, operations, and cost-control experience;
- direct access to the CV, GitHub repositories, LinkedIn profile, live labs, and contact details.

Live URL: <https://portfolio.badismerakchi.com/>

Visual reference: <https://consulting.badismerakchi.com/>

## Current stack and deployment

- Astro `^6.2.1` static site.
- TypeScript `^5.9.3` with Astro's strict TypeScript configuration.
- Hand-written global and responsive CSS; no component or design-system dependency.
- English page at `src/pages/index.astro` and French page at `src/pages/fr.astro`.
- Shared page structure in `src/components/PortfolioPage.astro`.
- Centralized bilingual copy and project data in `src/data/portfolioContent.ts`.
- Playwright `^1.61.0` end-to-end tests in `tests/portfolio.spec.ts`.
- Public CV and favicon assets in `public/`.
- GitHub is the source code repository only; it no longer hosts or deploys the production site.
- GitHub Actions CI through `.github/workflows/portfolio-ci.yml`: dependency installation, Astro build, Chromium installation, and Playwright tests.
- Cloudflare Workers Static Assets is the production deployment target. Cloudflare builds and deploys from the GitHub repository on push, using the root `wrangler.jsonc` configuration to publish the Astro build output from `./dist` after `npm run build`.
- The custom domain `portfolio.badismerakchi.com` is served by Cloudflare.
- The explicit Wrangler configuration is required so `npx wrangler deploy` treats the project as a static asset site and does not attempt the interactive `astro add cloudflare` setup in CI.
- `public/_headers` applies security headers to all static routes after Astro copies it to `dist/_headers`. The initial policy keeps inline scripts and styles compatible, excludes cross-origin isolation, and starts HSTS at `max-age=86400` without preload.
- Node.js requirement: `>=22.12.0`.

## Current pages, components, and styles

### Pages

- `/` — English portfolio.
- `/fr` — French portfolio.

### Components and data

- `src/components/PortfolioPage.astro` — the complete shared page structure and document metadata.
- `src/data/portfolioContent.ts` — English/French copy, skills, experience, project data, contact details, and external links.

### Styles and tests

- `src/styles/portfolio.css` — global tokens, layout, cards, responsive rules, and interaction states.
- `tests/portfolio.spec.ts` — page titles, language switching, anchor navigation, CV delivery, and important project/profile links.

## Current sections

1. Header with personal wordmark and English/French switch.
2. Fixed side navigation for Skills, Experience, Projects, and Contact.
3. Hero with positioning, CV/GitHub/LinkedIn actions, availability, focus, cloud, and location metrics.
4. Skills grid with 15 technical and delivery categories.
5. Experience section led by Oracle Cloud Consultant work, selected client environments, delivery areas, Epitech teaching, and project coordination.
6. Projects section with:
   - AWS EKS Platform Golden Path as the main featured project;
   - Azure Legacy App Migration as the migration spotlight;
   - AWS Ephemeral Web Platform;
   - AWS EKS Landing Zone;
   - Pokédex DevOps Deployment Lab;
   - Kubernetes Visual Ops Lab.
7. Contact section with email, location, availability, GitHub, and LinkedIn.
8. Minimal single-line footer.

## Current strengths

- The portfolio purpose is clear and strongly technical.
- English and French use one compatible content model and one shared component.
- The Oracle and Epitech experience provides professional and teaching credibility.
- Featured projects include concrete scope, lifecycle, stack, implementation highlights, and repository links instead of unsupported slogans.
- AWS, Azure, OCI, Terraform, Kubernetes, CI/CD, observability, security, and FinOps coverage is visible.
- The CV, GitHub, LinkedIn, repository, and selected live-lab links are directly accessible.
- The static architecture is simple, fast, low-risk, and maintainable.
- CI and Playwright tests protect important navigation and public links in both languages.
- The current site already uses a dark background, readable contrast, responsive layouts, and consistent card primitives.

## Design issues relative to the consulting site

The consulting site was inspected as the current visual reference on 2026-09-01.

- The portfolio uses bright cyan as its primary accent and coral/pink as a secondary signal; the consulting site uses a quieter blue-to-violet direction with subtler violet borders and glows.
- The portfolio background shifts through several navy tones and includes a warm coral glow. The consulting site feels more continuous, darker, and calmer, with restrained blue/violet radial light.
- The large left-aligned hero plus terminal-style profile card reads as a developer dashboard. The reference uses a more compact, centered, premium hero with fewer competing elements.
- The fixed pill-based side navigation is visually assertive and disconnected from the reference's minimal horizontal navigation.
- Fifteen equal-weight skill cards create density and make prioritization difficult.
- Card treatments are repeated at similar visual weight across skills, experience, and projects; the reference has a clearer surface hierarchy and more whitespace.
- Featured project cards contain strong proof but are long and visually heavy. Their evidence should remain intact while hierarchy and scanability improve.
- Cyan buttons and coral project labels create a broader accent palette than the reference.
- Section spacing is functional but less generous and less editorial than the consulting site.
- The contact area works as information, but the footer is only a copyright line and does not create a coherent end to the page.
- The portfolio currently has no link to the consulting website, while the consulting website already links back to the portfolio.

## Target structure

The future refactor should keep the portfolio as a technical evidence site with this hierarchy:

1. Minimal header: identity, compact section navigation, language switch, and a clear consulting-site link.
2. Compact centered hero: Cloud / DevOps / Platform Engineering positioning, Swiss-market context, and primary actions for CV and technical profiles.
3. Curated skills: grouped by capability so core expertise is legible without removing meaningful breadth.
4. Experience: Oracle first, then Epitech and complementary coordination experience, with verified details only.
5. Featured technical proof: AWS EKS Platform Golden Path and Azure Legacy App Migration with prominent repository access and preserved evidence.
6. Additional projects: compact cards for the remaining DevOps, Kubernetes, and AWS labs.
7. Contact and profiles: appropriate for both permanent-role and freelance conversations.
8. Coherent footer: identity, purpose, internal navigation, GitHub, LinkedIn, consulting site, and copyright.

## Constraints

- Keep the portfolio's proof-oriented purpose distinct from the consulting site's sales purpose.
- Treat the `https://badismerakchi.com` website value currently shown in `README.md` as a documentation discrepancy; the portfolio URL for this refactor is `https://portfolio.badismerakchi.com/`.
- Preserve important experience, project evidence, repositories, live labs, CV access, GitHub, and LinkedIn.
- Do not invent clients, outcomes, metrics, certifications, availability, or technical claims.
- Keep English and French content structurally compatible.
- Do not add dependencies without approval.
- Keep future changes small, reviewable, testable, and reversible.
- Do not modify deployment configuration without approval.
- Preserve static Cloudflare Workers Static Assets compatibility and keep GitHub as the source code repository only.
- Respect existing accessible names and links or update Playwright coverage alongside intentional label changes.
- Validate shared changes on both `/` and `/fr` and across mobile, tablet, and desktop widths.
- Maintain visible focus, keyboard navigation, reduced-motion behavior, semantic headings, contrast, and touch target quality.

## Existing external links

- Consulting site: not currently present in the portfolio codebase.
- GitHub: <https://github.com/Badis-M>
- LinkedIn: <https://www.linkedin.com/in/merakchi>
- CV: `/Badis-Merakchi-CV.pdf`
