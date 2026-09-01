# Portfolio Visual Refactor Plan

## Refactor principles

- Preserve technical proof before changing presentation.
- Keep the portfolio distinct from the consulting sales funnel.
- Work in small checkpoints that can be reviewed and reverted independently.
- Keep English and French behavior aligned.
- Do not add dependencies or change deployment configuration without approval.
- Update tests with intentional UI changes rather than weakening coverage.

## 1. Checkpoint the current state

### Work

- Confirm a clean or understood Git working tree and record the baseline commit.
- Run the current build and Playwright suite.
- Capture reference screenshots for `/` and `/fr` at representative mobile and desktop widths.
- Record the consulting-site reference at the same widths.
- Inventory current anchor IDs, visible labels, public assets, and external links protected by tests.

### Validation

```bash
git status --short
npm ci
npm run build
npm run test:e2e
```

### Exit criterion

The pre-refactor site is reproducible, test results are known, and visual comparisons have a stable baseline.

## 2. Align global design tokens

### Work

- Introduce semantic CSS custom properties for navy backgrounds, surfaces, text, muted text, violet borders, blue/violet accents, focus, status, radius, spacing, shadow, and glow.
- Map existing styles to semantic tokens before making large layout changes.
- Consolidate repeated color, border, radius, and shadow declarations.
- Add or verify reduced-motion and focus-visible foundations.

### Likely scope

- `src/styles/portfolio.css`

### Validation

- Build succeeds.
- Existing pages remain usable before later structural checkpoints.
- Contrast and focus indicators are manually reviewed.

## 3. Refactor layout and continuous background

### Work

- Move to the consulting site's calmer near-black navy foundation with restrained blue/violet radial light.
- Standardize the main container, section widths, vertical rhythm, and separators.
- Remove the warm coral decorative glow and reduce competing surface effects.
- Replace the fixed side navigation pattern with the foundation for a minimal header layout.
- Ensure anchor offsets work with any sticky header behavior.

### Likely scope

- `src/components/PortfolioPage.astro`
- `src/styles/portfolio.css`
- `tests/portfolio.spec.ts`

### Validation

- No horizontal overflow from mobile through wide desktop.
- Skills, Experience, Projects, and Contact anchors remain directly accessible.
- English and French navigation remain equivalent.

## 4. Refactor the hero

### Work

- Create a compact centered hero with a controlled heading and lead width.
- Preserve Cloud & DevOps Engineer positioning while making Platform Engineering visible only where supported by project evidence.
- Keep CV, GitHub, and LinkedIn easy to reach.
- Rework the current terminal-style metric card into quieter credibility signals or a compact proof row.
- Preserve Swiss market and Geneva-area context without making freelance the only path.
- Keep availability language factual and consistent across both languages.

### Likely scope

- `src/components/PortfolioPage.astro`
- `src/data/portfolioContent.ts`
- `src/styles/portfolio.css`
- `tests/portfolio.spec.ts`

### Validation

- Hero purpose is clear at mobile and desktop widths.
- CV and profile links remain correct.
- The hero does not read as a consulting sales CTA.

## 5. Refactor skills

### Work

- Group the current 15 entries into a clearer capability hierarchy without deleting meaningful coverage.
- Prioritize Cloud platforms, Infrastructure as Code, CI/CD/automation, containers/Kubernetes, security/operations, and delivery.
- Use compact grouped cards, rows, or chips instead of equal large cards.
- Keep tool lists readable and avoid unsupported proficiency levels.

### Likely scope

- `src/components/PortfolioPage.astro`
- `src/data/portfolioContent.ts`
- `src/styles/portfolio.css`

### Validation

- All retained claims match current source content.
- French and English data structures remain compatible.
- Skills remain legible at 320px and at 200% zoom.

## 6. Refactor experience

### Work

- Keep Oracle Cloud Consultant as the primary professional experience.
- Improve hierarchy between role, location, summary, client environments, and delivery areas.
- Present Epitech and project coordination as supporting experience with lower visual weight.
- Preserve named environments and claims exactly unless separately verified and intentionally revised.
- Reduce tag density through grouping and progressive visual emphasis, not deletion of proof.

### Likely scope

- `src/components/PortfolioPage.astro`
- `src/data/portfolioContent.ts`
- `src/styles/portfolio.css`

### Validation

- No experience claim is invented or broadened.
- Reading order remains logical without CSS grid.
- Dense tag groups wrap without overflow in both languages.

## 7. Refactor featured projects

### Work

- Keep AWS EKS Platform Golden Path and Azure Legacy App Migration as the two strongest featured proofs.
- Establish a reusable featured-evidence layout with clear context, proof statement, metrics, scope, stack, and repository action.
- Preserve lifecycle, observability, IAM/OIDC, Terraform, Kubernetes, CI/CD, and cost-awareness evidence.
- Make AWS Ephemeral Web Platform, AWS EKS Landing Zone, Pokédex DevOps Deployment Lab, and Kubernetes Visual Ops Lab more compact while retaining repository and live-site access.
- Use restrained glow only for featured evidence, not every project card.

### Likely scope

- `src/components/PortfolioPage.astro`
- `src/data/portfolioContent.ts`
- `src/styles/portfolio.css`
- `tests/portfolio.spec.ts`

### Validation

- Every existing project URL remains correct.
- Featured proof remains visible and scannable.
- Project actions have descriptive accessible names and safe external-link attributes.

## 8. Refactor contact and footer

### Work

- Keep contact suitable for both Swiss permanent roles and freelance conversations.
- Preserve email, location, availability, GitHub, and LinkedIn.
- Build a coherent footer with identity, internal navigation, CV, GitHub, LinkedIn, consulting site, and copyright.
- Avoid copying the consulting site's lead form or sales promises.

### Likely scope

- `src/components/PortfolioPage.astro`
- `src/data/portfolioContent.ts`
- `src/styles/portfolio.css`
- `tests/portfolio.spec.ts`

### Validation

- Contact links work in both languages.
- Footer landmarks and navigation labels are accessible.
- The page has a deliberate visual ending on mobile and desktop.

## 9. Add the consulting website link

### Work

- Add `https://consulting.badismerakchi.com/` to the centralized links object.
- Surface it in the minimal header and footer, with bilingual labels that distinguish consulting services from technical portfolio proof.
- Consider one contextual link near Contact only if it does not compete with CV, GitHub, or LinkedIn.
- Add Playwright assertions for the URL and labels in both languages.

### Likely scope

- `src/data/portfolioContent.ts`
- `src/components/PortfolioPage.astro`
- `tests/portfolio.spec.ts`
- `src/styles/portfolio.css`

### Validation

- The consulting link is clear but secondary.
- Cross-site navigation works in both directions.
- No sales copy is imported into the portfolio.

## 10. Final SEO, accessibility, and responsive pass

### Work

- Review page titles, descriptions, canonical URLs, language alternatives, Open Graph metadata, and structured data appropriate to a person/portfolio site.
- Verify semantic landmarks, skip link, heading order, accessible names, keyboard navigation, focus visibility, reduced motion, contrast, and link purpose.
- Review `/` and `/fr` at mobile, tablet, laptop, and wide desktop widths.
- Check 200% zoom, long French strings, tag wrapping, anchor offsets, and no-content-loss behavior.
- Update Playwright tests for intentional labels and add high-value accessibility/responsive regression coverage where practical.

### Validation

```bash
npm run build
npm run test:e2e
```

Manual review targets:

- `/`
- `/fr`
- keyboard-only navigation
- mobile width from 320px
- tablet and desktop layouts
- 200% browser zoom
- reduced-motion preference
- CV, GitHub, LinkedIn, consulting, repository, and live-site links

### Exit criterion

The portfolio shares a coherent visual system with the consulting website, retains its technical proof, supports both permanent-role and freelance credibility, and passes build, automated tests, accessibility review, and responsive review.

## Recommended first implementation task

Start with checkpoint 2: introduce semantic global design tokens and map the existing palette, borders, radii, shadows, focus states, and motion behavior to them without changing page structure. This creates the safest reviewable foundation for every later visual checkpoint.
