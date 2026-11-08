# AMSAF roadmap

The Claude Design prototype defines the structural direction. Visual details are subject to refinement. All milestones are planned. The [backlog](BACKLOG.md) tracks individual tasks and completion evidence.

## M1 — Structural Foundation

**Scope.** Establish the commercial homepage and separate professional portfolio using static, typed content. Apply the approved prototype structure and reuse the inherited shell and components where they fit.

**Success criteria**

- `/` and `/portfolio` load directly and are reachable through public navigation. Each route has a distinct purpose, heading, and Brazilian Portuguese copy.
- The homepage lists all four categories, their standard scopes and approved starting prices, plus options for a customized proposal and recurring maintenance.
- The primary contact action opens the approved WhatsApp destination. A route review finds no contact forms, artificial scarcity, or manipulative sales tactics.
- Portfolio entries use verified content. Homepage and portfolio structure are reviewed against the approved prototype.

## M2 — Visual Identity

**Scope.** Refine and approve AMSAF typography, color, spacing, layout, and component states for the public routes.

**Success criteria**

- Approved tokens and component patterns are recorded in the design system and applied across both routes.
- Mobile and desktop reviews confirm readable hierarchy, visible keyboard focus, sufficient text and control contrast, and layouts free from unintended horizontal overflow.

## M3 — Personality and Interactivity

**Scope.** Select and implement interactions that express Antônio Marcos's personality while keeping service discovery and contact straightforward.

**Success criteria**

- Each approved interaction has a recorded purpose and passes a review with pointer, touch, and keyboard where applicable.
- Essential content, navigation, and contact remain usable with reduced motion. Interaction states are documented and reviewed on both public routes where used.

## M4 — Configuration and Integrations

**Scope.** Configure the canonical URL and WhatsApp destination, validate the Cloudflare runtime, and make decisions on authentication, content storage, and media delivery. Assess optional integrations separately.

**Success criteria**

- A repeatable Cloudflare preview serves both public routes and verifies metadata routes, assets, server configuration, and the runtime capabilities needed for the panel.
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
