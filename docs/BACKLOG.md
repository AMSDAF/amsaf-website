# AMSAF backlog

This is the source of truth for tasks, acceptance criteria, and completion evidence. Each epic maps to one [roadmap milestone](ROADMAP.md). Tasks are **Planned** unless a status and evidence are recorded. Update status and add evidence against the relevant criteria when work occurs. Use **In progress**, **Blocked**, or **Done** as appropriate.

## EPIC-01 — Structural Foundation (M1)

**Status.** Done. AMSAF-014 verified the local M1 structure on 2026-11-08. The preparation audit below records the inherited baseline. M1 uses static content in the existing Next.js app. Final visual identity, advanced animation and mascot behavior, production infrastructure and integrations, admin implementation, and deployment belong to later milestones.

The approved public route map is [documented in the architecture](ARCHITECTURE.md#approved-public-routes).

### A — Preparation

#### AMSAF-001 — Initialize project documentation

**Status.** Done. **Dependencies.** None.

**Acceptance and evidence.** Establish project scope and language conventions, six milestones and epics, the design and architecture baseline, contributor instructions, and the development log. Delivered in commit `802e40c`. The previous backlog used this ID for homepage work. That work is now AMSAF-010.

#### AMSAF-002 — Confirm the route and section inventory

**Status.** Done. The project owner approved the inventory on 2026-11-08.

**Dependencies.** AMSAF-001.

**Acceptance.** Use the approved route map to record section order, navigation destinations and anchors, and how the Landing Pages layout applies to the three other services. Confirm the contact page hierarchy and the common project detail structure, including how optional project content is presented. Decide the M1 treatment of the homepage preview and checklist and record any approved departure from the references. Use this inventory as the comparison checklist for page acceptance.

**Evidence.** Reviewed all six pages of the three committed design exports. The approved [M1 route acceptance checklist](DESIGN_SYSTEM.md#m1-route-acceptance-checklist) maps the eight route patterns to ordered sections and navigation destinations. It records service layout reuse, contact and project hierarchies, optional project sections, and approved departures from the references. Checked that all eight inventory route patterns match the architecture and that all seven documented anchor targets are defined. `git diff --check` passed. Publishable content and the WhatsApp destination are tracked in AMSAF-003. Rendered route and navigation checks are tracked in AMSAF-014.

#### AMSAF-003 — Confirm content and contact inputs

**Status.** Done.

**Dependencies.** AMSAF-001. Can run alongside AMSAF-002.

**Acceptance.** Record approved Brazilian Portuguese copy or content inputs for every public route and approved project, including each service's audience, standard scope and starting price, custom proposal and optional maintenance language, and the WhatsApp destination. Identify approved work, profile facts, unique project slugs, project links, technologies, decisions, verified results, images and alt text, or record an approved omission or fallback for each missing optional item. Keep any remaining required inputs explicitly blocked. Prototype placeholders, prices, sample brands, and claims are reference material.

**Evidence.** On 2026-11-08, recorded the approved implementation and maintenance prices, four service audiences and scopes, payment and maintenance terms, separate internal pricing assumptions, and open contract details in the [commercial offer](commercial-offer.md). Cross-checked the service routes against the approved route map and the scopes against the committed references and the owner's Commercial Websites clarification. Verified all eight price entries, documentation references, and whitespace. `git diff --check` passed.

**Additional evidence.** On 2026-11-08, the owner approved the commercial WhatsApp destination, Emilly Araújo Fotografia as the sole initial public project, provisional Brazilian Portuguese commercial copy, and omission of unavailable optional content. The [M1 public content inputs](DESIGN_SYSTEM.md#m1-public-content-inputs) record the destination, project title, summary and unique slug, verified profile facts, and omission policy.

**Case-study evidence.** The [Emilly Araújo Fotografia record](DESIGN_SYSTEM.md#emilly-araújo-fotografia) supplies the required title, summary, unique slug, and concise Brazilian Portuguese project detail based on its documented purpose as a photography portfolio. The owner approved omission of unavailable optional sections. Verified the record against the M1 project detail checklist and the initial publication decision. Outstanding proposal and contract details remain tracked separately in the commercial offer.

### B — Shared structure

#### AMSAF-004 — Establish public layouts and landmarks

**Status.** Done.

**Dependencies.** AMSAF-002.

**Acceptance.** Use the existing App Router layout and shell where they fit. Render one main landmark per page and distinct header/footer compositions for the home, service details, contact page, professional portfolio and project details as specified in the route inventory. Verify on the available scaffold that Brazilian Portuguese language metadata, keyboard focus, and the default indexing policy remain intact. Final link wiring is covered by AMSAF-012.

**Evidence.** On 2026-11-08, verified that all eight route layouts render one main landmark, a skip link, and the expected header and footer destinations using temporary server-rendered fixtures. Headless Edge at 320 px verified the production homepage's `pt-BR` document language, single main, visible first-Tab skip link, focus transfer to main on Enter, and no horizontal overflow. Verified `noindex, nofollow`, a disallow-all robots response, and an empty sitemap. Lint, production build, type check, the three SEO tests, and `git diff --check` passed. The default format check flagged existing CRLF checkout endings. Prettier passed with `--end-of-line auto`. The homepage uses its scaffold anchors until AMSAF-010. The other layouts are ready for their page tasks, with final link verification in AMSAF-012.

#### AMSAF-005 — Define static content contracts

**Status.** Done.

**Dependencies.** AMSAF-002.

**Acceptance.** Type-check one static service record per approved category, with unique route and label, summary, audience, base scope, approved starting-price field and contact reference. The homepage and detail pages can consume the same service records. Keep professional profile, experience, and project content separate from service records. Use typed project records with unique slugs, summary and detail content, technologies, decisions, and verified results when available. Use those records for both the portfolio listing and detail routes. Model only fields the approved pages consume and keep absent values explicit. Approved publishable values come from AMSAF-003.

**Evidence.** On 2026-11-08, checked the four ordered service routes, distinct labels, required copy, all eight approved BRL amounts, and the shared WhatsApp reference with a temporary Vitest fixture. Verified the sole approved project, its exact detail copy, and explicit empty collections for unavailable profile and project material. The three SEO tests, both content checks, lint, production build, standalone type check, Prettier with `--end-of-line auto`, and `git diff --check` passed. Page rendering and permanent structural tests remain in their respective tasks.

### C — Pages

#### AMSAF-006 — Build the Landing Pages detail route

**Status.** Done.

**Dependencies.** AMSAF-003, AMSAF-004, AMSAF-005.

**Acceptance.** Direct-load `/landing-pages` and verify the reference order and hierarchy. The page includes a service selector, introduction, intended audience, base scope, customization note, and starting-price and WhatsApp summary. The layout accommodates the home/services return and portfolio footer link. Verify copy and price against the Landing Pages record. Extract shared detail composition only where it fits the approved service pages.

**Evidence.** On 2026-11-08, direct-loaded `/landing-pages` in the local production build and checked the rendered page against the committed Landing Pages export and the approved M1 inventory. Verified selector order and current state, catalog copy and scope, the R$ 750,00 starting price, R$ 49,90 optional monthly maintenance, WhatsApp destination, and return and footer link targets. Headless Edge at 320 and 1280 px verified the summary placement, readable order, keyboard focus, and absence of horizontal overflow. Confirmed `pt-BR`, a single main landmark, and inherited `noindex, nofollow`. Lint, build, type check, SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed. Destination availability for the other services, homepage anchor, and professional portfolio remains in their page tasks, with final navigation checks in AMSAF-012.

#### AMSAF-007 — Build the Portfolios service route

**Status.** Done.

**Dependencies.** AMSAF-006.

**Acceptance.** Direct-load `/portfolios`. Review the page against its approved section inventory and Portfolios record, including audience, base scope, customization, price, maintenance language where applicable, and contact. Verify that the service route and its content are distinct from `/portfolio`.

**Evidence.** On 2026-11-08, direct-loaded `/portfolios` in the production build. Verified the approved section order, audience, responsive gallery scope, customization note, R$ 1.090,00 starting price, R$ 79,90 optional monthly maintenance, WhatsApp destination, and selector current state. Headless Edge verified keyboard focus and summary placement without horizontal overflow at 320 and 1280 px. Confirmed `pt-BR` and inherited `noindex, nofollow`. The footer points to `/portfolio`, which remains a separate unpublished route under AMSAF-011. `/landing-pages` still returns 200. Build, type check, lint, SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

#### AMSAF-008 — Build the Institutional Websites detail route

**Status.** Done.

**Dependencies.** AMSAF-006.

**Acceptance.** Direct-load `/institucionais`. Review the approved section inventory and service record for its own audience, base scope, customization, price, maintenance language where applicable, and contact.

**Evidence.** On 2026-11-08, direct-loaded `/institucionais` in the production build and verified the approved section order, institutional audience, internal-page and basic SEO scope, customization note, R$ 1.590,00 starting price, R$ 119,90 optional monthly maintenance, and WhatsApp destination. Headless Edge at 320 and 1280 px confirmed the selector state, keyboard focus, responsive summary placement, and absence of horizontal overflow. Confirmed `pt-BR`, inherited `noindex, nofollow`, and HTTP 200 for the two existing service pages. Build, type check, lint, SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed. Complete navigation verification remains in AMSAF-012.

#### AMSAF-009 — Build the Commercial Websites detail route

**Status.** Done.

**Dependencies.** AMSAF-006.

**Acceptance.** Direct-load `/comerciais`. Review the approved section inventory and service record for its own audience, base scope, customization, price, maintenance language where applicable, and contact.

**Evidence.** On 2026-11-08, direct-loaded `/comerciais` in the production build and verified section order, selector state, the approved audience and catalog scope, the scope exclusions, customization, R$ 1.990,00 starting price, R$ 169,90 optional monthly maintenance, and WhatsApp destination. Confirmed HTTP 200 for the other three service pages and that the scope note appears only on `/comerciais`. Headless Edge verified keyboard focus, summary placement, and no horizontal overflow at 320 px with scrollbars hidden to simulate mobile and at 1280 px with desktop scrollbars. A 320 px desktop viewport with a reserved scrollbar exposes the scaffold's existing 320 px body minimum. Confirmed `pt-BR` and inherited `noindex, nofollow`. Build, type check, lint, SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

**Overflow follow-up.** Removed the inherited `body` minimum width from the stylesheet imported by the root layout. In the production build, all four service routes passed at 320 and 1280 px both with a reserved vertical scrollbar and with no reserved gutter. At 320 px with a reserved scrollbar, document client and scroll widths both measured 305 px. Reapplying the old rule in the browser reproduced the 320 px scroll width on every service route. Desktop geometry matched with and without the old rule in both scrollbar conditions, and the summary stayed below the details at 320 px and beside them at 1280 px. Build, type check, lint, SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

#### AMSAF-010 — Build the commercial homepage

**Status.** Done.

**Dependencies.** AMSAF-003, AMSAF-004, AMSAF-005. Can run alongside the service pages.

**Acceptance.** Direct-load `/` and verify the section inventory in order. Present all four service summaries with their shared base scopes and approved starting prices, customized proposals, and optional maintenance. Verify that selected work and the developer introduction use approved content and that the layout accommodates the service, portfolio, and WhatsApp actions. Follow the agreed M1 treatment for the preview and checklist.

**Evidence.** On 2026-11-08, direct-loaded `/` in the production build and checked the approved section order, illustrative preview, static checklist, sole approved project, and verified developer introduction. Headless Edge at 320 and 1280 px verified visible keyboard focus, skip-link focus transfer, hero anchor navigation, and absence of horizontal overflow. Confirmed all four service routes returned HTTP 200 and matched the homepage's base scopes and eight approved prices. Verified the portfolio, contact guidance, and WhatsApp link targets, `pt-BR`, inherited `noindex, nofollow`, disallow-all robots, and an empty sitemap. Build, type check, lint, three SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed. Portfolio, contact, and project detail pages remain in their respective tasks. Complete navigation is tracked in AMSAF-012.

#### AMSAF-011 — Build the professional portfolio

**Status.** Done.

**Dependencies.** AMSAF-003, AMSAF-004, AMSAF-005. Can run alongside the homepage and service pages.

**Acceptance.** Direct-load `/portfolio` and verify the professional introduction, skills, experience and education, software projects, and return to commercial services in the approved order. Verify Brazilian Portuguese headings, approved profile content, and verified projects. Keep the commercial service catalog on the commercial routes.

**Evidence.** On 2026-11-08, direct-loaded `/portfolio` in the production build at 320 and 1280 px. Verified the approved order, Brazilian Portuguese headings and metadata, verified introduction, and Emilly Araújo Fotografia as the sole project. The skills and experience and education sections show an availability note until verified entries are available. Confirmed visible keyboard focus, skip-link focus transfer, section anchor navigation, no horizontal overflow, and navigation to the commercial services and back. Direct-loaded the separate `/portfolios` service and confirmed its distinct heading. Verified the project link target by slug. The target returns 404 until AMSAF-024 implements project details, with complete navigation verification in AMSAF-012. Confirmed `noindex, nofollow`, disallow-all robots, and an empty sitemap. Build, type check, lint, three SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

#### AMSAF-023 — Build the contact page

**Status.** Done.

**Dependencies.** AMSAF-003, AMSAF-004. Can run alongside the service and portfolio pages.

**Acceptance.** Direct-load `/contato` and verify the approved Brazilian Portuguese heading, contact guidance, and primary WhatsApp link using the approved destination. The page has no contact form. Verify keyboard access to the contact action and shared navigation.

**Evidence.** On 2026-11-08, direct-loaded `/contato` in the production build and verified the Brazilian Portuguese heading and guidance, a single primary contact action in the main content, and absence of a contact form. Headless Edge at 320 and 1280 px verified visible keyboard focus, skip-link focus transfer, navigation to the approved WhatsApp URL using an intercepted request, shared header and footer destinations, and no horizontal overflow. Verified keyboard navigation to the homepage services anchor and the homepage link back to `/contato`. Confirmed `pt-BR`, `noindex, nofollow`, disallow-all robots, and an empty sitemap. Build, type check, lint, three SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

#### AMSAF-024 — Build the dynamic project detail pages

**Status.** Done.

**Dependencies.** AMSAF-003, AMSAF-004, AMSAF-005. Can run alongside AMSAF-011.

**Acceptance.** Direct-load each approved `/portfolio/projetos/[slug]` URL using one shared detail structure and its matching project record. Verify project-specific content, technologies, decisions, and verified results where available. Omit missing optional sections according to the approved inventory. An unknown slug returns a 404. The structure accommodates a return link to `/portfolio`.

**Evidence.** On 2026-11-08, direct-loaded the prerendered Emilly Araújo Fotografia detail at `/portfolio/projetos/emilly-araujo-fotografia` and verified its approved title, summary, case description, metadata, and omitted optional sections and images. Headless Edge at 320 and 1280 px verified visible keyboard focus, skip-link focus transfer, return to `/portfolio#projetos`, navigation back to the detail from the listing, and no horizontal overflow. An unknown slug and a case-mismatched slug returned HTTP 404. Confirmed `pt-BR`, `noindex, nofollow`, disallow-all robots, and an empty sitemap. Build, type check, lint, three SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

### D — Validation

#### AMSAF-012 — Wire public navigation and contact

**Status.** Done.

**Dependencies.** AMSAF-006 through AMSAF-011, AMSAF-023, AMSAF-024.

**Acceptance.** Verify the home links to all four services and the professional portfolio, `/contato` is reachable through approved public navigation, and listed projects open their own detail URLs and link back to `/portfolio`. Verify the service selector and return-to-services links from every service page, the portfolio's link back to services, and approved header and footer links. Confirm that section links work from their source routes and the service selector identifies the current page. Check that WhatsApp actions resolve to the approved destination and that all internal targets exist.

**Evidence.** On 2026-11-08, all eight public pages returned HTTP 200 in the production build. At both 320 and 1280 px, headless Edge followed 67 internal links and verified 12 WhatsApp navigation requests to the approved URL through interception. Checked header, footer, and main content destinations, fragment visibility, the active service on every selector transition, the homepage link to `/contato`, and both project listings and the detail return links. Confirmed an unknown project slug returned HTTP 404 and the indexing policy remained disabled. Build, type check, lint, three SEO tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

#### AMSAF-013 — Add automated structural checks

**Status.** Done.

**Dependencies.** AMSAF-012.

**Acceptance.** Using existing Vitest tooling, verify four distinct service paths, separation from `/portfolio`, consistency between service records and configured links, unique project slugs, and known and unknown slug lookup. Keep inherited SEO tests passing. Run lint, production build, type check, and tests, and attach command results. Check rendered routes separately in AMSAF-014 because the existing Vitest suite runs in Node.

**Evidence.** On 2026-11-08, added five checks in [public-structure.test.ts](../frontend/tests/public-structure.test.ts). They verify the four approved service paths in order, exclusion of `/portfolio`, consistency with the configured WhatsApp link, unique project slugs, matching detail URLs and records for known slugs, and an undefined result for an unknown slug. Rendered route validation remains in AMSAF-014.

| Command | Result |
| --- | --- |
| `npm run lint` | Passed (exit 0). |
| `npm run build` | Passed (exit 0). Prerendered the eight public pages, including the approved project detail. |
| `npm run typecheck` | Passed (exit 0), after the build generated route types. |
| `npm test` | Passed (exit 0). Two suites, eight tests, including the three inherited SEO tests. |
| `npm run format:check -- --end-of-line auto` | Passed (exit 0). |
| `git diff --check` | Passed (exit 0). |

#### AMSAF-014 — Verify the complete M1 structure

**Status.** Done.

**Dependencies.** AMSAF-013.

**Acceptance.** Record a local production-build smoke check covering direct entry and navigation on every fixed public route and every approved project URL, plus a 404 for an unknown project slug, including section links, the service selector, portfolio return, and WhatsApp. At 320px and a representative desktop width, verify legible content order, visible keyboard focus, usable navigation, and absence of unintended horizontal overflow. Compare headings and sections with the approved inventory and check content consistency across routes, including approved prices and scope, Brazilian Portuguese, and the absence of contact forms, artificial scarcity, manipulative sales tactics, and unsupported claims. Verify robots and sitemap remain in the inherited non-indexing state. Record evidence and outstanding defects before closing M1.

**Evidence.** On 2026-11-08, a fresh local production build returned HTTP 200 for `/`, all four service pages, `/contato`, `/portfolio`, and `/portfolio/projetos/emilly-araujo-fotografia`. At 320 and 1280 px, headless Edge followed 67 internal links and intercepted 12 WhatsApp navigations to the approved destination at each width. Verified section destinations, current-service indicators, project return, visible keyboard focus, skip-link focus transfer, responsive summary placement, and no horizontal overflow with or without a reserved scrollbar gutter.

Reviewed rendered headings, screenshots, and copy against the approved inventory and content. Confirmed the static preview and checklist, all four base scopes and eight approved prices, custom proposals and optional maintenance, verified profile and project content, and Brazilian Portuguese. The review found no contact forms, artificial scarcity, manipulative sales tactics, or unsupported claims. All eight pages retained `noindex, nofollow`. Robots disallowed all crawling and the sitemap was empty.

**Defects and closeout.** Replaced the English framework fallback with a Brazilian Portuguese 404 and verified HTTP 404, `noindex`, and keyboard return to the homepage for an unknown project slug. No outstanding M1 defects were found in this smoke check. Skills, experience, and education entries still require verified content, consistent with the approved M1 omission. Build, standalone type check, lint, all eight Vitest tests, Prettier with `--end-of-line auto`, and `git diff --check` passed.

### Preparation audit and open decisions

| Classification | Foundation evidence and opportunity                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reusable       | App Router root layout, `pt-BR` document language, semantic landmarks, typed link and image references, static configuration pattern, centralized SEO policy and its robots/sitemap helpers, existing build/lint/type-check scripts and Vitest.                                                                                                                                     |
| Adaptable      | `SiteShell` uses one global navigation and footer, while the references show different public navigation contexts. `Hero` renders title, copy and actions but no preview or media. `ContentSection` supports a heading and description. `Gallery` hardcodes demo headings, and `Card` requires an image. Adapt only where the approved content fits. Demo SVGs are scaffold assets. |
| Missing        | Service, contact, portfolio and project detail routes, a service selector and detail/price composition, homepage service summaries and process steps, and professional skills and experience/project rows. Prefer route-local markup for one-off sections and share composition when multiple approved pages need it.                                                               |

- At the start of M1, the repository served the scaffold at `/` alongside robots and sitemap. The inherited tests covered SEO defaults.
- The approved [M1 route acceptance checklist](DESIGN_SYSTEM.md#m1-route-acceptance-checklist) defines one service hierarchy, contact and project detail structures, and static treatment of the homepage preview and checklist. Final visual tokens, mascot behavior, and advanced motion remain outside M1.
- Review cross-route anchors and shared data ownership before enabling public navigation. A single globally configured shell or copied service data could produce incorrect links and inconsistent prices.
- Approved content, pricing, and the WhatsApp destination gate page acceptance. Keep M1 local and non-indexable. [Cloudflare, authentication, persistent content and image management](ARCHITECTURE.md#technical-risks-and-validation-gates) remain later validation gates.

## EPIC-02 — Visual Identity (M2)

**Status.** In progress. M1 is complete. AMSAF-025, AMSAF-015, AMSAF-026, AMSAF-027, AMSAF-028, and AMSAF-029 are done. The [approved visual specification](DESIGN_SYSTEM.md#m2-approved-visual-specification) guides the remaining M2 tasks. See the [M2 visual audit](m2-visual-audit.md), the [typography exploration](m2-typography-exploration.md), the [Claude Design references](DESIGN_SYSTEM.md#confirmed-structure-and-content), and the [approved M2 direction](DESIGN_SYSTEM.md#m2-visual-direction).

### A — Visual foundations

#### AMSAF-025 — Explore typography

**Status.** Done.

**Dependencies.** AMSAF-014.

**Acceptance.** Compare at least two new family combinations for display, body/interface, and monospace roles using existing Brazilian Portuguese hero, service price, and portfolio samples. Record mobile and desktop specimens, diacritics, available weights, license and loading considerations, and a proposed fallback stack. Present candidates for approval in AMSAF-015.

**Evidence.** On 2026-11-08, the [typography exploration](m2-typography-exploration.md) compared three OFL 1.1 systems. They are Geist with Geist Mono, Bricolage Grotesque with Instrument Sans and JetBrains Mono, and Schibsted Grotesk with IBM Plex Mono. A standalone [specimen page](specimens/typography.html) sets the approved hero and actions, Landing Pages card and prices, professional introduction, availability note, and project row on the reference dark palette. Headless Edge recorded screenshots at 1280 and 375 px, confirmed all candidate faces loaded, and found no horizontal overflow at 1280, 375, or 320 px. Every specimen text pairing measured at least 4.74:1.

The record covers Portuguese diacritics, available weights and axes from the installed Next.js font data, and licences verified against the Google Fonts repository. It reports measured Latin WOFF2 payloads of 51.3, 109.3, and 74.6 KiB, the `next/font` loading approach, and proposed fallback stacks. It found two constraints. No served subset includes the reference's arrows, so they need SVG icons. Schibsted Grotesk's tabular figures widen price separators. It recommends System A, with System B as the alternative. The specimens are not imported by the application, and the public routes are unchanged. `git diff --check` passed. AMSAF-015 records the owner’s selection of System B.

#### AMSAF-015 — Approve visual specifications

**Status.** Done.

**Dependencies.** AMSAF-025.

**Acceptance.** Record owner approval in the design system for type families, roles and scale, dark neutral and blue color roles, spacing and width, responsive layout, and shared component variants and states. Include tested text, control, and focus color pairings. Track open decisions with their affected scope. Treat sampled values and estimates from the audit as reference evidence.

**Evidence.** On 2026-11-08, the owner approved the items now recorded in the [M2 approved visual specification](DESIGN_SYSTEM.md#m2-approved-visual-specification):

- Bricolage Grotesque, Instrument Sans, and JetBrains Mono.
- A dark theme on every route, with `#0D0D0D`, `#141416`, `#F4F5F1`, and the `#3973FF` accent.
- The `amsaf.` wordmark, restrained geometric radii, a spacious hero with compact cards, and the editorial portfolio.
- Compact expandable mobile navigation, SVG icons, and local font hosting.

The specification covers each acceptance item:

- **Type.** Font files, axes, payloads, preload rules, fallback stacks, and 15 responsive type tokens.
- **Color.** 19 color tokens.
- **Space and layout.** Spacing and width tokens, radii, and responsive rules for each M1 pattern, including which headers use the mobile disclosure.
- **Components.** Variants and states for buttons, links, navigation, the selector, cards, rows, tags, the menu button, and the skip link.
- **Tokens.** An implementation-ready Tailwind token block.

**Contrast testing.** Every text, control, and focus pairing was calculated with the WCAG 2.2 formula. Text pairings measure at least 4.59:1, control boundaries at least 3.27:1, and the focus ring at least 4.44:1. The tests found that the approved accent measures 4.44:1 on surfaces. The specification therefore adds `accent-text` (`#6E98FF`, at least 6.28:1) for small accent text. It also keeps the pressed contact fill lighter than rest, because a darker fill drops dark labels to 3.91:1.

**Reference values and open decisions.** The audit's sampled colors and pill buttons were treated as reference only and are superseded where they differ. Six open decisions are tracked with their affected tasks. Documentation links resolved and `git diff --check` passed. The standalone specimen reproduces the desktop and mobile views from AMSAF-025. No application files changed.

#### AMSAF-026 — Apply the approved visual foundations

**Status.** Done. The project owner visually approved the implementation within the task scope on 2026-11-08.

**Dependencies.** AMSAF-015.

**Acceptance.** Reuse the root layout and global Tailwind/CSS styling to apply the approved typography, dark surfaces, text and accent roles, responsive widths and spacing, and visible focus. Verify those styles on commercial, professional, and fallback pages, with a readable font fallback and the same dark presentation under light and dark system preferences.

**Evidence.** The root layout loads the three approved Latin WOFF2 files locally, with two preloads and JetBrains Mono available on demand. Shared styles and existing components apply the approved palette, typography, spacing, container gutters, focus outline, and interactive target sizes. Lint, typecheck, all eight tests, and the production build passed. Production Edge checks covered all eight public pages and both unknown URL cases at 320, 375, and 1280 px. They verified HTTP status, dark presentation under both system preferences, heading and main landmarks, target sizes, keyboard focus and skip links where present, service selector state and summary placement, and horizontal overflow. A separate check verified the homepage action's rest, hover, and pressed states and anchor navigation. Blocking the font downloads left the homepage, portfolio, and 404 readable at 320 px. Axe reported zero violations in the checked WCAG A/AA rules at 320 and 1280 px.

**Review scope.** The process step labels retain their existing size in the approved body font. The display title size exceeded the current five-column layout for “Desenvolvimento” at 1280 px. AMSAF-032 owns the process hierarchy. The wordmark, mobile disclosure, page compositions, action variants, and 404 shell have separate implementation tasks.

### B — Shared components

#### AMSAF-027 — Refine the wordmark and responsive header

**Status.** Done. The project owner visually approved the shared wordmark, responsive navigation, accessible disclosure and focus behavior, and single-row service and project headers on 2026-11-08. The approval confirms the existing navigation destinations and M1 behavior. No visual corrections were requested.

**Dependencies.** AMSAF-026.

**Acceptance.** Adapt `SiteShell` and its route compositions to display the lowercase `amsaf.` wordmark with a blue dot. Preserve brand destinations, distinct commercial and professional navigation, and each existing action. At desktop widths verify the brand, links and actions fit in the approved hierarchy. At mobile widths verify a compact collapsed header and a disclosure that exposes every applicable link and action. Check the Portuguese accessible name, exposed expanded state, hidden links out of tab order, and operation by keyboard and touch. Verify usable targets and visible focus at 320 px.

**Implementation.** Reused the shared shell, route link data, local display font, design tokens, and global focus style. Commercial and portfolio headers share one responsive navigation rendered by a small client disclosure. Service and project headers render a server-side return link alongside the shared wordmark.

**Evidence.** On 2026-11-08, headless Microsoft Edge 157 checked all four header compositions in the production build at 320, 375, 1024, and 1280 px. Verified wordmark text, color, typography, accessible names, destinations, row heights, visible focus, and no horizontal overflow. At 320 and 375 px, checked touch taps, keyboard tab order, the collapsed accessibility tree, the trigger's expanded state and panel reference, Escape focus return, and closing on link activation. Measured 44 px controls and at least 48 px disclosure rows. The M1 regression pass at 320 and 1280 px verified all eight routes, 67 internal navigations and 12 intercepted WhatsApp navigations per width, and the localized 404 and indexing policy.

**Checks.** Lint, typecheck, eight automated tests, production build, `git diff --check`, and Prettier with `--end-of-line auto` passed. The default Prettier command flags existing CRLF files in this Windows checkout.

**Visual review.** From `frontend/`, run `npm run build` and `npm run start`. In Edge, use responsive widths 320, 375, 1024, and 1280 px on `/`, `/portfolio`, `/landing-pages`, and `/portfolio/projetos/emilly-araujo-fotografia`. Review both disclosure states on the first two routes below 1024 px.

#### AMSAF-028 — Refine shared footers

**Status.** Done. The project owner visually approved the commercial and professional footers on desktop and mobile on 2026-11-08.

**Dependencies.** AMSAF-026.

**Acceptance.** Verify the approved brand treatment and existing route-specific footer links in the commercial, service, profile, and project compositions. Verify desktop alignment, narrow-width wrapping, and visible link and focus states. Use approved identity content.

**Implementation.** Reused the approved linked wordmark and the existing footer surface, border, and padding in `SiteShell`. The wordmark sits above the wrapping navigation below 768 px and aligns with the navigation in a single row from 768 px. Existing route layouts supply the brand destination and navigation links for each composition. Footer links reuse the navigation typography, color tokens, and global focus outline.

**Evidence.** On 2026-11-08, headless Microsoft Edge 157 checked all eight public routes in the production build at 320, 375, 1024, and 1280 px, plus 767 and 768 px for the layout transition. Verified all four footer compositions, commercial link wrapping at 320 px, aligned gutters, and no horizontal overflow with a reserved scrollbar gutter. Verified accessible names, Tab order, Enter activation, destination fragments, hover styles, and link heights of at least 24 px. On the footer surface, navigation text measured 6.89:1 at rest and 16.80:1 on hover, and the blue dot and 2 px focus outline measured 4.44:1. The approved header checks passed at the four requested widths.

**Checks.** Lint, typecheck, eight automated tests, production build, `git diff --check`, and Prettier with `--end-of-line auto` passed. Default Prettier reported existing Windows checkout line endings.

**M1 regression.** At both 320 and 1280 px, Edge verified all eight routes, followed 75 internal links, and intercepted 12 WhatsApp navigations to the approved destination. The main content text matched the AMSAF-027 baseline on all eight routes. The localized 404 and indexing checks passed.

**Visual review.** From `frontend/`, run `npm run build` and `npm run start`. In Edge responsive mode at 320, 375, 1024, and 1280 px, open `/`, `/portfolio`, `/landing-pages`, and `/portfolio/projetos/emilly-araujo-fotografia` at `http://localhost:3000`. Scroll to the footer, then Tab through the wordmark and links to check order and focus.

#### AMSAF-029 — Define shared action and section treatments

**Status.** Done. The project owner visually approved the shared action and section treatments on 2026-11-08.

**Dependencies.** AMSAF-026.

**Acceptance.** Adapt the existing hero and section components where they fit. Demonstrate distinct filled contact, primary, and secondary action treatments and approved hover, focus, and active states. Verify the approved section heading, optional monospace label, and wide-screen split heading treatment collapse in reading order. Use existing copy or separately approved labels.

**Implementation.** `ActionLink` reuses the approved action target, color, and focus tokens. The homepage hero demonstrates the primary and secondary variants, and the homepage invitation and `/contato` demonstrate the contact variant with the generic chat icon. `ContentSection` supports an optional monospace label and an opt-in split. The services heading uses the 5/12 and 7/12 split from 1024 px and stacks above its introduction below that width. Numbered section labels remain pending copy approval, and the existing offer and service summary treatments are reserved for their page tasks.

**Evidence.** On 2026-11-08, headless Edge 157 verified rest, hover, pressed, and keyboard focus states, 44 × 44 px minimum targets, activation of the homepage anchors and intercepted WhatsApp destination, split heading alignment and reading order, and absence of horizontal overflow at 320, 375, 1023, 1024, and 1280 px. A static render check verified the optional label's typography classes and DOM order, omission without a label, and fallback without an introduction. Lint, typecheck, eight automated tests, production build, Prettier with `--end-of-line auto`, and `git diff --check` passed.

**Visual review.** From `frontend/`, run `npm run build` and `npm run start`. In Edge, open `/` and `/contato` at `http://localhost:3000`. Compare the hero actions and the services heading at 320 and 1280 px. Tab through the actions to review their focus outlines.

**M1 regression.** At 320 and 1280 px, all eight public routes passed checks for content, link destinations, focus, and horizontal overflow. Main content text matched the AMSAF-028 baseline byte for byte. The localized 404 and disabled indexing checks passed.

### C — Commercial pages

#### AMSAF-030 — Refine the homepage hero, preview, and checklist

**Dependencies.** AMSAF-029.

**Acceptance.** Verify primary and secondary hero hierarchy and destinations, a clearly illustrative static browser-style preview with caption, and static checklist rows. Verify the wide composition and narrow stacking in the M1 order. Any highlighted word must work with the approved heading copy.

#### AMSAF-031 — Refine homepage offers and maintenance

**Dependencies.** AMSAF-029.

**Acceptance.** Verify all four service cards show the catalog scope, approved starting price, custom proposal context, optional maintenance price and terms, and distinct details and WhatsApp actions. Review numbering, scope rows, price separation and action wrapping on desktop and mobile. Any separate maintenance treatment must keep each monthly price clearly associated with its service.

#### AMSAF-032 — Refine homepage work, process, and developer sections

**Dependencies.** AMSAF-029.

**Acceptance.** Verify the sole approved case study has a deliberate text-led treatment and working detail link. Verify the existing process sequence has visible step hierarchy and the developer introduction retains verified profile copy and its portfolio link. Review wide and narrow compositions using available content, including the absence of approved project imagery and a developer portrait.

#### AMSAF-033 — Refine the shared service detail layout

**Dependencies.** AMSAF-027, AMSAF-028, AMSAF-029.

**Acceptance.** Use the Landing Pages export for the route label, title, numbered scope rows, service selector, return link, and price/contact hierarchy. Verify all four routes use `ServiceDetail`, mark the current service, and match the corresponding catalog scope, prices, optional maintenance, and contact destination. Verify the summary sits beside the details at wide widths and follows them at narrow widths and in reading order. Keep the commercial-only scope note on `/comerciais`.

#### AMSAF-034 — Refine contact and the homepage contact invitation

**Dependencies.** AMSAF-027, AMSAF-028, AMSAF-029.

**Acceptance.** Verify the two surfaces share the approved centered contact hierarchy with a prominent WhatsApp action using the approved destination. Confirm the homepage retains its guidance link to `/contato` and the contact page keeps its guidance and single primary action. Verify keyboard access and wrapping at narrow widths.

### D — Professional pages

#### AMSAF-035 — Refine the professional portfolio

**Dependencies.** AMSAF-027, AMSAF-028, AMSAF-029.

**Acceptance.** Adapt the portfolio export's large name, split introduction, section rows and rules, and closing return to services to the approved dark palette. Preserve anchors and verify the skills and experience availability notes, the sole approved project row and its detail link, and the return to `/#servicos`. Check the stacked reading order at mobile widths. Use verified data for tags, dates, or stacks when available.

#### AMSAF-036 — Refine shared project details

**Dependencies.** AMSAF-027, AMSAF-028, AMSAF-029.

**Acceptance.** Apply the professional visual patterns to the shared detail composition. Verify the approved project renders its title, summary and case content, omits absent optional material, and returns to `/portfolio#projetos`. Check narrow and wide widths and confirm unknown slugs still return HTTP 404.

### E — Fallback and final validation

#### AMSAF-037 — Align the 404 page with the commercial shell

**Dependencies.** AMSAF-027, AMSAF-028, AMSAF-029.

**Acceptance.** Verify an unknown top-level URL and unknown project slug retain HTTP 404, Brazilian Portuguese fallback copy, and a visible home recovery action in the dark commercial shell. Check exactly one main landmark, skip-link focus transfer, and usable navigation on mobile and desktop.

#### AMSAF-038 — Verify the complete M2 visual identity

**Dependencies.** AMSAF-030 through AMSAF-037.

**Acceptance.** Review a local production build at 320, 375, and 1280 px on every public route and the 404. Record screenshots and results by route and width, including readable hierarchy, contrast (4.5:1 for normal text and 3:1 for large text and required control indicators), visible focus, navigation target sizing, mobile disclosure behavior, and absence of unintended horizontal overflow. Recheck the [M1 route acceptance checklist](DESIGN_SYSTEM.md#m1-route-acceptance-checklist), approved prices and verified content, WhatsApp destination, landmarks, links and anchors, 404 status, and disabled indexing. Run the README checks and record evidence and any blockers in the backlog.

## EPIC-03 — Personality and Interactivity (M3)

| Task                                         | Acceptance criteria                                                                                                                                                                                         |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-016 — Select and validate interactions | Record the purpose and states of each selected interaction. Verify applicable pointer, touch, and keyboard use. With reduced motion, confirm that essential content, navigation, and contact remain usable. |

## EPIC-04 — Configuration and Integrations (M4)

| Task                                                      | Acceptance criteria                                                                                                                                                                                                                                                                |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-017 — Validate Cloudflare and public configuration  | Document a repeatable non-indexable preview. Verify the public routes, metadata, assets, WhatsApp configuration, and the server capabilities needed by the panel. Document the production domain and index-enablement procedure. Smoke-test each enabled optional integration.     |
| AMSAF-018 — Decide authentication, persistence, and media | Record provider and data ownership decisions, or explicit blockers, for each [technical risk](ARCHITECTURE.md#technical-risks-and-validation-gates). Capture preview evidence for session handling, durable reads and writes, and image delivery before the panel depends on them. |

## EPIC-05 — Administrative Panel (M5)

| Task                                                  | Acceptance criteria                                                                                                                                                                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-019 — Protect administrative access             | Verify sign-in and sign-out for an authorized operator. Verify that unauthenticated and unauthorized users are denied protected reads and writes via both UI and direct requests.                                                   |
| AMSAF-020 — Enable approved content and media changes | Edit an agreed content field, redeploy, and verify the public result according to the documented publication and cache behavior. Verify upload validation, image replacement, removal, and recovery after a failed media operation. |

## EPIC-06 — Quality and Launch (M6)

| Task                                     | Acceptance criteria                                                                                                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-021 — Verify release readiness     | Record passing lint, build, type-check, and test results. Record responsive, accessibility, performance, and end-to-end results against agreed launch criteria. Exercise documented deployment and rollback steps in preview. |
| AMSAF-022 — Launch and verify production | Record launch approval and smoke checks for the public routes, approved content, WhatsApp, admin access controls, canonical URLs, robots, and sitemap behavior on the authorized production domain.                           |
