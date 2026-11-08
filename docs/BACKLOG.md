# AMSAF backlog

This is the source of truth for tasks, acceptance criteria, and completion evidence. Each epic maps to one [roadmap milestone](ROADMAP.md). Tasks are **Planned** unless a status and evidence are recorded. Update status and add evidence against the relevant criteria when work occurs. Use **In progress**, **Blocked**, or **Done** as appropriate.

## EPIC-01 — Structural Foundation (M1)

**Status.** Planned. The preparation audit below records the current baseline. Implementation requires explicit approval of this plan. M1 uses static content in the existing Next.js app. Final visual identity, advanced animation and mascot behavior, production infrastructure and integrations, admin implementation, and deployment are outside M1.

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

**Dependencies.** AMSAF-003, AMSAF-004, AMSAF-005. Can run alongside AMSAF-011.

**Acceptance.** Direct-load each approved `/portfolio/projetos/[slug]` URL using one shared detail structure and its matching project record. Verify project-specific content, technologies, decisions, and verified results where available. Omit missing optional sections according to the approved inventory. An unknown slug returns a 404. The structure accommodates a return link to `/portfolio`.

### D — Validation

#### AMSAF-012 — Wire public navigation and contact

**Dependencies.** AMSAF-006 through AMSAF-011, AMSAF-023, AMSAF-024.

**Acceptance.** Verify the home links to all four services and the professional portfolio, `/contato` is reachable through approved public navigation, and listed projects open their own detail URLs and link back to `/portfolio`. Verify the service selector and return-to-services links from every service page, the portfolio's link back to services, and approved header and footer links. Confirm that section links work from their source routes and the service selector identifies the current page. Check that WhatsApp actions resolve to the approved destination and that all internal targets exist.

#### AMSAF-013 — Add automated structural checks

**Dependencies.** AMSAF-012.

**Acceptance.** Using existing Vitest tooling, verify four distinct service paths, separation from `/portfolio`, consistency between service records and configured links, unique project slugs, and known and unknown slug lookup. Keep inherited SEO tests passing. Run lint, production build, type check, and tests, and attach command results. Check rendered routes separately in AMSAF-014 because the existing Vitest suite runs in Node.

#### AMSAF-014 — Verify the complete M1 structure

**Dependencies.** AMSAF-013.

**Acceptance.** Record a local production-build smoke check covering direct entry and navigation on every fixed public route and every approved project URL, plus a 404 for an unknown project slug, including section links, the service selector, portfolio return, and WhatsApp. At 320px and a representative desktop width, verify legible content order, visible keyboard focus, usable navigation, and absence of unintended horizontal overflow. Compare headings and sections with the approved inventory and check content consistency across routes, including approved prices and scope, Brazilian Portuguese, and the absence of contact forms, artificial scarcity, manipulative sales tactics, and unsupported claims. Verify robots and sitemap remain in the inherited non-indexing state. Record evidence and outstanding defects before closing M1.

### Preparation audit and open decisions

| Classification | Foundation evidence and opportunity                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reusable       | App Router root layout, `pt-BR` document language, semantic landmarks, typed link and image references, static configuration pattern, centralized SEO policy and its robots/sitemap helpers, existing build/lint/type-check scripts and Vitest.                                                                                                                                     |
| Adaptable      | `SiteShell` uses one global navigation and footer, while the references show different public navigation contexts. `Hero` renders title, copy and actions but no preview or media. `ContentSection` supports a heading and description. `Gallery` hardcodes demo headings, and `Card` requires an image. Adapt only where the approved content fits. Demo SVGs are scaffold assets. |
| Missing        | Service, contact, portfolio and project detail routes, a service selector and detail/price composition, homepage service summaries and process steps, and professional skills and experience/project rows. Prefer route-local markup for one-off sections and share composition when multiple approved pages need it.                                                               |

- The repository currently serves only the scaffold at `/` alongside robots and sitemap. The existing tests cover SEO defaults and provide no rendered-route or responsive coverage.
- The approved [M1 route acceptance checklist](DESIGN_SYSTEM.md#m1-route-acceptance-checklist) defines one service hierarchy, contact and project detail structures, and static treatment of the homepage preview and checklist. Final visual tokens, mascot behavior, and advanced motion remain outside M1.
- Review cross-route anchors and shared data ownership before enabling public navigation. A single globally configured shell or copied service data could produce incorrect links and inconsistent prices.
- Approved content, pricing, and the WhatsApp destination gate page acceptance. Keep M1 local and non-indexable. [Cloudflare, authentication, persistent content and image management](ARCHITECTURE.md#technical-risks-and-validation-gates) remain later validation gates.

## EPIC-02 — Visual Identity (M2)

| Task                                              | Acceptance criteria                                                                                                                                                                              |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AMSAF-015 — Approve and apply the visual identity | Record approved tokens and component states. Verify their application on the public routes at mobile and desktop widths, including hierarchy, contrast, keyboard focus, and horizontal overflow. |

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
