# AMSAF backlog

This is the source of truth for tasks, acceptance criteria, and completion evidence. Each epic maps to one [roadmap milestone](ROADMAP.md). Every epic and task below is **Planned**, with acceptance criteria pending and no implementation evidence recorded. Update status and add evidence against the relevant criteria when work occurs. Use **In progress**, **Blocked**, or **Done** as appropriate.

## EPIC-01 — Structural Foundation (M1)

| Task                                         | Acceptance criteria                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-001 — Build the commercial homepage    | Review the page structure against the approved prototype. In Brazilian Portuguese, present Landing Pages, Portfolios, Institutional Websites, and Commercial Websites with a standard scope and an approved starting price for each. Make customized proposals and optional recurring maintenance clear. Verify the primary action opens the approved WhatsApp destination. Review the page for contact forms, artificial scarcity, and manipulative sales tactics. |
| AMSAF-002 — Build the professional portfolio | Open `/portfolio` directly and through public navigation. Verify distinct headings and purpose, Brazilian Portuguese copy, and verified professional content. Review the structure against the approved prototype.                                                                                                                                                                                                                                                  |

## EPIC-02 — Visual Identity (M2)

| Task                                              | Acceptance criteria                                                                                                                                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-003 — Approve and apply the visual identity | Record approved tokens and component states. Verify their application on both public routes at mobile and desktop widths, including hierarchy, contrast, keyboard focus, and horizontal overflow. |

## EPIC-03 — Personality and Interactivity (M3)

| Task                                         | Acceptance criteria                                                                                                                                                                                         |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-004 — Select and validate interactions | Record the purpose and states of each selected interaction. Verify applicable pointer, touch, and keyboard use. With reduced motion, confirm that essential content, navigation, and contact remain usable. |

## EPIC-04 — Configuration and Integrations (M4)

| Task                                                      | Acceptance criteria                                                                                                                                                                                                                                                                |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-005 — Validate Cloudflare and public configuration  | Document a repeatable non-indexable preview. Verify both public routes, metadata, assets, WhatsApp configuration, and the server capabilities needed by the panel. Document the production domain and index-enablement procedure. Smoke-test each enabled optional integration.    |
| AMSAF-006 — Decide authentication, persistence, and media | Record provider and data ownership decisions, or explicit blockers, for each [technical risk](ARCHITECTURE.md#technical-risks-and-validation-gates). Capture preview evidence for session handling, durable reads and writes, and image delivery before the panel depends on them. |

## EPIC-05 — Administrative Panel (M5)

| Task                                                  | Acceptance criteria                                                                                                                                                                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-007 — Protect administrative access             | Verify sign-in and sign-out for an authorized operator. Verify that unauthenticated and unauthorized users are denied protected reads and writes via both UI and direct requests.                                                   |
| AMSAF-008 — Enable approved content and media changes | Edit an agreed content field, redeploy, and verify the public result according to the documented publication and cache behavior. Verify upload validation, image replacement, removal, and recovery after a failed media operation. |

## EPIC-06 — Quality and Launch (M6)

| Task                                     | Acceptance criteria                                                                                                                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMSAF-009 — Verify release readiness     | Record passing lint, build, type-check, and test results. Record responsive, accessibility, performance, and end-to-end results against agreed launch criteria. Exercise documented deployment and rollback steps in preview. |
| AMSAF-010 — Launch and verify production | Record launch approval and smoke checks for both routes, approved content, WhatsApp, admin access controls, canonical URLs, robots, and sitemap behavior on the authorized production domain.                                 |
