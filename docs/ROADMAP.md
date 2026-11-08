# AMSAF roadmap

The Claude Design prototype defines the structural direction. Visual details are subject to refinement. The [backlog](BACKLOG.md) tracks individual tasks and completion evidence.

## M1 — Structural Foundation

**Status.** Done. Local verification is recorded in [AMSAF-014](BACKLOG.md#amsaf-014--verify-the-complete-m1-structure).

**Scope.** Use static, typed content to deliver the [approved public route map](ARCHITECTURE.md#approved-public-routes), including the commercial homepage, four dedicated product pages, `/contato`, `/portfolio`, and dynamic project details at `/portfolio/projetos/[slug]`. Apply the approved structural inventory and reuse Foundation components where they fit. Final identity, advanced interactions, production integrations, admin, and deployment belong to later milestones.

**Success criteria**

- All fixed public routes and approved project URLs load directly in a local production build. Unknown project slugs return a 404. The homepage links to every product and the professional portfolio. Product selection, return-to-services links, portfolio return, project links and their return paths, and approved header, footer, contact, and section links work.
- Pages match the approved structural inventory and use Brazilian Portuguese. The homepage shows all four standard scopes and approved starting prices, with customized proposals and optional recurring maintenance. Service detail content agrees with the homepage, and the professional portfolio uses verified profile and project content.
- Project details share a common structure and present project-specific content, technologies, decisions, and verified results where available.
- Primary contact actions, including on `/contato`, open the approved WhatsApp destination. The public routes contain no contact forms, artificial scarcity, or manipulative sales tactics.
- Narrow and desktop checks verify readable section order, keyboard navigation, and no unintended horizontal overflow. Lint, production build, type check, and automated structural and SEO checks pass. Record evidence and keep indexing disabled.

## M2 — Visual Identity

**Status.** In progress. The visual specification is approved and recorded in the design system. See [EPIC-02](BACKLOG.md#epic-02--visual-identity-m2) for the approval gate, implementation sequence, and validation tasks.

**Scope.** Preserve the M1 structure and apply the [approved visual direction](DESIGN_SYSTEM.md#m2-visual-direction) across commercial pages, professional pages, and the 404. Use a dark neutral foundation with blue accents, the lowercase `amsaf.` wordmark with a blue dot, and a compact expandable mobile header. Apply the typography approved in AMSAF-015. Creative interactions belong in M3.

**Success criteria**

- Record approved typography, visual tokens, and component patterns in the design system before applying them across the public routes and 404.
- Review a local production build at 320, 375, and 1280 px for hierarchy, contrast, visible focus, mobile navigation behavior, and horizontal overflow. Recheck the M1 route and content inventory, WhatsApp, fallback status, and disabled indexing.

## M3 — Personality and Interactivity

**Scope.** Select and implement interactions that express Antônio Marcos's personality while keeping service discovery and contact straightforward.

**Success criteria**

- Each approved interaction has a recorded purpose and passes a review with pointer, touch, and keyboard where applicable.
- Essential content, navigation, and contact remain usable with reduced motion. Interaction states are documented and reviewed on the public routes where used.

## M4 — Configuration and Integrations

**Scope.** Configure the canonical URL and WhatsApp destination, validate the Cloudflare runtime, and make decisions on authentication, content storage, and media delivery. Assess optional integrations separately.

**Success criteria**

- A repeatable Cloudflare preview serves the public routes and verifies metadata routes, assets, server configuration, and the runtime capabilities needed for the panel.
- The architecture records decisions for authentication, content storage, and media delivery with preview evidence or explicit blockers. Any optional integration enabled has a documented purpose and a smoke test.
- Preview stays non-indexable. The canonical production domain and index-enablement procedure are documented.

## M5 — Administrative Panel

**Scope.** Build a protected panel for approved content and media workflows once M4 validates the integration choices.

**Success criteria**

- Authorized operators can sign in, sign out, and update the agreed content and media fields. Unauthenticated and unauthorized requests cannot read protected data or mutate content, including through direct requests.
- An approved edit survives a redeployment and appears on the public route according to the documented publication and cache behavior.
- A preview exercise verifies upload validation, image replacement and removal, and recovery from a failed media operation.

## M6 — Quality and Launch

**Scope.** Validate the public routes and admin flow, review launch content, and release to the authorized production domain.

**Success criteria**

- Lint, production build, type check, and tests pass. Launch evidence records accessibility, responsive layout, performance, and end-to-end smoke checks against agreed criteria.
- Production smoke checks verify routes, WhatsApp, approved content, and admin access controls. Metadata, canonical URLs, robots, and the sitemap reflect the authorized indexing state.
- Deployment and rollback steps are recorded and exercised in preview. Launch approval and the production smoke-check results are recorded in the backlog.
