# Design Alignment Brief

## Objective

Make the portfolio and consulting website feel like two parts of one professional identity while preserving their different jobs:

- the consulting site explains services and converts business enquiries;
- the portfolio proves technical depth for Swiss permanent roles and freelance due diligence.

Reference reviewed on 2026-09-01: <https://consulting.badismerakchi.com/>

## What to visually reuse

- A continuous near-black navy page background with low-opacity blue and violet radial light.
- A restrained blue-to-violet accent direction for primary actions, small labels, borders, and selected highlights.
- A compact, centered hero with a controlled text width and clear primary/secondary actions.
- Inter/system sans-serif typography, tight display-heading tracking, and small monospace uppercase eyebrow labels.
- Generous vertical whitespace and a consistent centered content container.
- Dark translucent surfaces with fine violet-tinted borders, soft inset highlights, rounded corners, and restrained depth.
- Clear section introductions with a small technical eyebrow, strong heading, and short supporting copy.
- Minimal navigation with a quiet brand treatment and a small number of high-value destinations.
- A structured footer that closes the page with identity, navigation, and profile links.
- Subtle interactions: small elevation changes, border emphasis, and limited glow rather than dramatic animation.

## What not to reuse

- Sales-service cards, service packages, intervention formats, lead qualification, budget fields, or a consulting enquiry form.
- Sales-oriented claims such as response-time promises unless independently confirmed and appropriate for the portfolio.
- A dominant “book a call” or “discuss your need” conversion funnel.
- The consulting site's Services / About / Method information architecture.
- Copy that positions the entire portfolio exclusively around independent consulting.
- Oversized marketing sections that push technical evidence below the fold.
- Decorative effects that reduce code/project scanability or make every card look featured.

## Shared color direction

Use the reference as a direction, not as a requirement to copy undocumented source tokens verbatim.

- Page foundation: near-black navy around the observed `#050814` range.
- Primary text: cool off-white around `#f8f9fc`.
- Secondary text: cool muted blue-gray; preserve WCAG contrast at all text sizes.
- Accent: controlled progression from strong blue through indigo to soft violet.
- Borders: low-opacity indigo/violet, similar to the observed `rgba(129, 140, 248, 0.12)` treatment.
- Surfaces: translucent navy slightly lighter than the page background.
- Success/availability: use green only when semantically necessary, not as a competing brand accent.
- Remove the current coral/pink accent from general decoration unless a specific semantic purpose justifies it.
- Keep glows sparse: one restrained hero field and occasional emphasis for the highest-value technical proof.

Before implementation, define semantic CSS custom properties for background, surface, elevated surface, primary text, muted text, border, accent start/end, focus, success, shadow, and glow.

## Typography direction

- Continue with Inter plus the existing system sans-serif fallback stack; no font dependency is required.
- Use compact, high-contrast display headings with tight but readable tracking.
- Use monospace uppercase eyebrow labels for technical orientation and shared brand rhythm.
- Keep body copy comfortably readable with controlled line length and approximately `1.6–1.75` line height.
- Reduce the number of competing font sizes and weights.
- Keep project titles and proof statements prominent, but avoid marketing-scale typography inside dense evidence cards.
- Allow French copy enough width and responsive flexibility; do not tune layouts only for shorter English labels.

## Card style direction

- Establish three levels rather than one repeated card style:
  1. featured evidence surfaces for the two strongest projects;
  2. standard cards for experience and additional projects;
  3. compact grouped rows or chips for skills and metadata.
- Use approximately 18–20px radii for primary surfaces, thin violet-tinted borders, and dark translucent fills.
- Prefer spacing, typography, and separators over strong shadows.
- Reserve glow and hover elevation for actionable or featured surfaces.
- Keep project evidence, stack, repository links, and live links easy to scan.
- Avoid terminal-window decoration unless it communicates real information; it should not define the hero aesthetic.
- Avoid turning every skill into an equal large card. Group related capabilities and expose the core stack first.

## Navigation direction

- Replace the fixed side pill navigation with a compact horizontal header on larger screens.
- Preserve direct access to Skills, Experience, Projects, and Contact.
- Keep the English/French switch visible and keyboard accessible.
- Add a clearly labelled link to <https://consulting.badismerakchi.com/> without making it the primary portfolio action.
- On small screens, use a simple wrapping or compact navigation pattern; do not add a dependency-driven menu without approval.
- Preserve a skip link or add one if absent so keyboard users can bypass repeated navigation.
- Ensure sticky behavior, if used, does not obscure anchor targets or consume excessive mobile space.

## Footer direction

Create a footer that is visually coherent with the consulting site but portfolio-specific:

- identity and “Cloud & DevOps / Platform Engineering” positioning;
- short internal navigation;
- GitHub, LinkedIn, CV, and consulting-site links;
- language-aware labels where appropriate;
- copyright and Astro/GitHub Pages attribution if retained;
- clear separation from the contact section without introducing a new sales CTA.

## Responsive expectations

- Mobile-first behavior from approximately 320px wide.
- No horizontal overflow from navigation, long project names, tags, URLs, or French copy.
- Hero actions stack or wrap with full-size touch targets.
- Featured project layouts collapse to one logical reading order: context, proof, scope, stack, actions.
- Skills and project grids reduce columns progressively rather than compressing content.
- Navigation remains usable without a fixed side rail.
- Section spacing scales down without making the page feel crowded.
- Test representative mobile, tablet, laptop, and wide desktop viewports in both languages.
- Respect safe zoom and text reflow at 200%.

## Accessibility expectations

- Preserve semantic page landmarks and a single meaningful `h1`.
- Maintain a logical heading hierarchy and DOM order independent of visual grid placement.
- Provide a visible skip link and visible `:focus-visible` states.
- Meet WCAG 2.2 AA contrast for text, controls, borders needed for perception, and focus indicators.
- Do not rely on color or glow alone to communicate selection, availability, or link purpose.
- Keep interactive targets at least 44 by 44 CSS pixels where practical.
- Preserve descriptive accessible names for language switching, external profiles, CV, repositories, and live sites.
- Honor `prefers-reduced-motion` and avoid essential information that depends on animation.
- Treat decorative gradients and glows as non-content; they must not reduce legibility.
- Keep external-link behavior consistent and retain safe `rel="noopener noreferrer"` usage.

## Alignment test

The refactor is successful when the two websites clearly share background, type, spacing, surface, accent, navigation, and footer DNA, while a visitor can still identify within seconds that:

- the consulting site sells Cloud / DevOps services;
- the portfolio demonstrates verified experience and hands-on technical work.

