# AMSAF development log

Add a short dated entry when work establishes a decision, reuses an existing asset, or revisits an earlier approach. Record the effort or work performed, what was reused, the reason for decisions, and any rework or open questions. Keep task acceptance evidence in the [backlog](BACKLOG.md).

## 2026-11-08 — Commercial Websites detail

- **AMSAF-009.** Added `/comerciais` using the shared service layout, detail component, and approved catalog record. The record supplies a scope note that makes the approved exclusions visible alongside the included deliverables.
- **Overflow follow-up.** Removed the Foundation body's 320 px minimum in the global stylesheet so the shared shell can fit the space left by a vertical scrollbar. Verified all four service routes in both scrollbar conditions at narrow and desktop widths. The fix required no layout component changes.

## 2026-11-08 — Institutional Websites detail

- **AMSAF-008.** Added `/institucionais` using the shared service layout and detail component. The page and selector reference the same Institutional Websites catalog record, and the page derives its metadata from that record.

## 2026-11-08 — Portfolios service detail

- **AMSAF-007.** Added `/portfolios` using the existing service layout, detail component, and approved Portfolios catalog record. The route exports its own metadata and leaves the professional portfolio at `/portfolio` for AMSAF-011.

## 2026-11-08 — Landing Pages detail

- **AMSAF-006.** Reviewed the committed Landing Pages prototype and applied the approved M1 hierarchy to `/landing-pages`. Reused the service layout, approved catalog and WhatsApp configuration, and neutral scaffold styles. The shared detail component keeps the price and contact summary after the descriptive sections in reading order.
- **Navigation.** The selector uses the four approved routes and marks the current page. The other services, homepage services anchor, and professional portfolio are tracked in their own tasks. AMSAF-012 covers verification of the complete navigation.

## 2026-11-08 — Static content contracts

- **AMSAF-005.** Added typed service, profile, and project records from the approved M1 inputs. Reused the shared link and image types, moved the WhatsApp destination into shared configuration, and used the profile name in the professional header.
- **Data decisions.** Store prices in integer centavos and use empty collections for unavailable profile and project material. The four offers and the approved case study are ready for the later page tasks.

## 2026-11-08 — Public layouts and landmarks

- **AMSAF-004.** Reused the App Router root document, the Foundation shell's responsive styling, and the existing focus and indexing policies. Moved navigation into route layouts and made the shell responsible for a single main landmark and a keyboard skip link.
- **Layout decision.** Home and contact use the commercial composition, all four service layouts share a composition, and the profile and project layouts are siblings so each owns its own landmarks. The current homepage keeps links to its scaffold sections until AMSAF-010 replaces the content. Future layouts ship without page entries. AMSAF-012 verifies the complete link wiring.

## 2026-11-08 — Project documentation baseline

- **Effort.** Inspected the Git working tree, inherited scaffold, and both instruction files. Defined the AMSAF scope, six milestones, and matching backlog.
- **Reuse.** Retained the single-app boundary, directory responsibilities, typed static configuration, and opt-in indexing policy. Identified scaffold components and local assets for review during implementation.
- **Decisions.** Documented a commercial homepage and separate professional portfolio. Recorded the prototype as the structural reference, with visual identity and interaction choices left for refinement.
- **Rework.** Replaced the cleared template documents with AMSAF-specific documentation and revised the inherited architecture and contributor guidance. Application code stayed as inherited.
- **Open.** Confirm approved scope and price details, WhatsApp destination, professional content, and the prototype artifact for implementation review. Validate the Cloudflare path and decide authentication, content storage, and media delivery in M4.

## 2026-11-08 — EPIC-01 planning

- **Effort.** Reviewed the inherited layouts, components, static content contracts, and tests. Inspected all six pages across the three committed Claude Design exports.
- **Reuse.** Identified the root layout, typed links, static configuration, SEO policy, and existing checks as the starting point. The public shell and demo components need fit checks against each route.
- **Decisions and rework.** Planned six public routes and split implementation into preparation, shared structure, pages, and validation. Restored AMSAF-001 to documentation initialization and renumbered the high-level later tasks.
- **Open.** Await approval of the plan and confirmation of the missing product route details, approved content and contact inputs, and the homepage preview and checklist behavior.

## 2026-11-08 — Approved public route map

- **Decisions and rework.** Recorded the approved product slugs, added the WhatsApp contact page and shared project detail route to M1, and updated navigation and validation gates. Added AMSAF-023 and AMSAF-024 to preserve existing task IDs.
- **Open.** Confirm contact and project section hierarchy, approved project records and results, and the remaining content inputs before implementation.

## 2026-11-08 — AMSAF-002 route inventory

- **Effort and reuse.** Reviewed the six export pages against the approved route map and M1 acceptance criteria. Used the homepage, Landing Pages, and professional portfolio exports as the structural baseline.
- **Decisions.** The project owner approved one hierarchy for all four services, dedicated contact and project detail structures, and explicit navigation targets. The homepage uses a static preview and checklist to preserve their content roles in M1.
- **Open.** AMSAF-003 tracks publishable content and the WhatsApp destination.

## 2026-11-08 — AMSAF-003 commercial offer

- **Effort and reuse.** Checked the service descriptions in the committed Claude Design exports and mapped each offer to its approved service route.
- **Decisions.** Recorded approved pricing and terms in one reference for the homepage and service pages, separated internal estimating assumptions from confirmed prices, and clarified the WhatsApp catalog and menu scope.
- **Open.** The backlog tracks outstanding content and contact approvals. The commercial offer records unresolved proposal and contract details.

## 2026-11-08 — AMSAF-003 contact and launch content

- **Decisions and reuse.** Recorded the approved WhatsApp destination and sole initial project, Emilly Araújo Fotografia. Reused the reference's project title and summary, assigned its route slug, and recorded the owner's approval of provisional commercial copy and omission of unavailable optional content.
- **Open.** The project detail route still needs verified project-specific content.

## 2026-11-08 — AMSAF-003 case-study completion

- **Decision and reuse.** Used the documented photography portfolio purpose for the concise Emilly Araújo Fotografia detail copy. Recorded the approved optional omissions and closed the content task with the case study subject to editorial refinement.

## 2026-11-08 — Graphify experiment

- **Effort.** The initial graph covered 34 files and produced 218 nodes, 390 relationships, and 14 communities. A follow-up architectural analysis using the existing graph took 19 seconds and traced reuse opportunities and implementation gaps for EPIC-01.
- **Reuse.** The analysis identified the root layout and shell, homepage components, typed content primitives, and SEO configuration as starting points. Source inspection confirmed which routes and content models still needed implementation.
- **Limitations.** The benchmark estimated 7.7× fewer tokens per query across four sample queries. Actual savings were unverified, and semantic extraction token counts were unavailable. The graph omitted 16 references with unresolved targets and could not verify rendered behavior.
- **Decision.** Use Graphify as an optional aid alongside source verification. Reuse the existing graph during implementation and analysis. Regenerate it only after an approved AMSAF task is complete and a refresh is needed. Keep generated artifacts local and out of Git.

## 2026-11-08 — AMSAF-010 commercial homepage

- **Reuse.** Switched the homepage to the approved commercial shell links and extended the existing hero and section components to accept content. Reused the service, contact, project, and profile records. Shared BRL formatting with the service details.
- **Decisions.** Used the neutral scaffold styles for M1 and wrote provisional Brazilian Portuguese copy. Replaced the prototype controls with an illustrative photography site and a static checklist. The showcase presents the sole approved project as a text entry. The project detail and complete navigation are tracked in AMSAF-024 and AMSAF-012.

## 2026-11-08 — AMSAF-011 professional portfolio

- **Reuse.** Composed the page in the existing profile route group with the professional shell, shared hero and section components, and the approved profile and project records.
- **Decisions.** Kept the required section headings and navigation anchors for skills and for experience and education. Used a short availability note for each section while its content records are empty. The project row links to its approved slug, with the detail page tracked in AMSAF-024.

## 2026-11-08 — AMSAF-023 contact page

- **Reuse.** Used the existing commercial layout, hero, and approved WhatsApp destination. Reused the homepage contact heading and added brief guidance on what to share in the first message.

## 2026-11-08 — AMSAF-024 project detail pages

- **Reuse.** Composed the shared detail page with the existing professional detail layout, hero, and content sections. The detail and metadata use the same project record as the portfolio listing.
- **Decisions.** Prerendered the approved project slugs and disabled runtime generation for other slugs. The initial Emilly Araújo Fotografia record supplies the title, summary, and context. Optional content renders only when its approved record includes it.

## 2026-11-08 — AMSAF-012 public navigation and contact

- **Reuse.** Kept the approved shell links, catalog-driven service selector, and shared WhatsApp destination. Added the project detail link to the homepage showcase and used the same slug-based path builder in both project listings.

## 2026-11-08 — AMSAF-013 automated structural checks

- **Reuse.** Added catalog and link assertions to the existing Node-based Vitest suite. The service tests check the route values used by the homepage and selector and the WhatsApp link used by service records. The project tests use the existing slug lookup and detail path builder.
- **Validation scope.** The tests exercise data and URL helpers. AMSAF-014 covers the rendered routes.

## 2026-11-08 — AMSAF-014 M1 verification

- **Reuse.** Extended the local navigation smoke check to compare rendered headings, prices, scopes, keyboard focus, and viewport layout with the approved M1 inventory. Reviewed the rendered copy and screenshots across the eight public pages.
- **Rework.** The unknown project URL exposed the English framework fallback. Added a Brazilian Portuguese root 404 using the shared hero and a keyboard-accessible link to the homepage.

## 2026-11-08 — EPIC-02 planning

- **Evidence and reuse.** Used the Claude visual audit and committed reference inventory alongside the verified M1 baseline. Checked the existing graph report against the root styles, route layouts, shared shell, and page components. The plan reuses these components and the existing catalog and project records.
- **Decisions.** Recorded the approved dark theme for both audiences, the wordmark, and the mobile disclosure. Kept AMSAF-015 as the approval gate and assigned AMSAF-025 through AMSAF-038 to exploration, implementation, and validation. The 404 shell treatment has its own acceptance checks.
- **Open.** Font candidates and exact visual specifications need approval. The page tasks use approved content and document the image omissions. M3 owns creative interactions.

## 2026-11-08 — AMSAF-025 typography exploration

- **Effort.** Compared three OFL typography systems in a standalone specimen page that uses approved Portuguese copy on the reference dark palette. Recorded screenshots with headless Edge through a scratch CDP script, measured Latin WOFF2 payloads from the Google Fonts CSS2 files that `next/font` self-hosts, and verified licences against the Google Fonts repository.
- **Reuse.** Used the installed Next.js font data for weights and axes, the M1 service and profile records for specimen copy, and the audit's sampled colors. Kept the specimens in `docs/` so the application and its dependencies are unchanged.
- **Decisions.** The owner accepted the committed PDFs as the visual reference, opened the choice to licensed alternatives to the prototype, and confirmed an editorial professional portfolio on the universal dark theme. Recommended Geist with Geist Mono for its neutral fit and 28.7 KiB critical payload, with Bricolage Grotesque and Instrument Sans as the alternative.
- **Rework.** Relabelled the M2 visual audit so its 2026-11-08 observations stay intact while superseded and resolved recommendations are marked. The committed backlog and design system already linked to the audit, which was not yet in Git.
- **Follow-up.** AMSAF-015 records the owner selection, type scale, arrow icons, and loading approach.

## 2026-11-08 — AMSAF-015 visual specification

- **Effort.** Recorded the owner's M2 approvals and turned them into an implementation-ready specification in the design system. It covers color roles, tested contrast pairings, local font files and loading, a responsive type scale, spacing and width, radii, responsive layout rules, and component states. Compiled the documented token block with the project's Tailwind 4.3.3 to confirm that the utilities generate.
- **Reuse.** Kept the existing Tailwind token names (`canvas`, `surface`, `surface-muted`, `border`, `content`, `content-muted`, `content-subtle`, `focus`) and the current component breakpoints, so AMSAF-026 changes values rather than component contracts. Reused the AMSAF-025 measurements, specimens, and licence checks.
- **Decisions.** The approved accent measures 4.44:1 on surfaces, so small accent text uses a derived `accent-text` tint. The pressed contact fill stays lighter than rest to keep dark labels at 4.5:1 or above. Adopted the weight-only Bricolage file shown in the approved specimens. Local hosting removes the build-time Google Fonts request noted in AMSAF-025. Only the commercial and portfolio headers use the mobile disclosure, because the service and project headers fit on one row at 320 px.
- **Rework.** Updated the typography exploration with the outcome. Its System A recommendation was not adopted. Marked the audit's sampled accent, pill buttons, focus, and spacing items as resolved or superseded. During documentation review, aligned the compact desktop action with the shared 44 px target minimum and replaced generated screenshot links with viewport reproduction instructions.
- **Open.** Six decisions remain in the design system: the professional brand presentation, the preview mock palette, section label and tag copy, the highlighted hero word, the official WhatsApp logo, and the Bricolage optical-size axis.

## 2026-11-08 — AMSAF-026 visual foundations

- **Reuse.** Applied the AMSAF-015 Tailwind tokens through the existing global stylesheet, root layout, shell, hero, sections, and shared service detail. Used the Latin WOFF2 files from the approved typography specimen and included their OFL licences. Kept the M1 markup, content, destinations, and route layouts.
- **Rework.** Retained the existing process step label size with the approved body font after the display title size caused “Desenvolvimento” to extend beyond its column at 1280 px. AMSAF-032 owns the process hierarchy.
- **Validation and approval.** Recorded production browser and npm checks in the [AMSAF-026 backlog entry](BACKLOG.md#amsaf-026--apply-the-approved-visual-foundations). The owner visually approved the dark foundation, typography, responsive spacing, and accessibility improvements within the task scope. AMSAF-026 is Done.

## 2026-11-08 — AMSAF-027 wordmark and responsive header

- **Reuse.** Kept `SiteShell`, the existing route-specific destinations, and the M2 font, color, and focus tokens. The commercial and portfolio headers use the same navigation markup at all widths. A small client component owns disclosure state and keyboard handling. Service and project layouts use the shared wordmark with their existing return link.
- **Decision.** Recorded the approved shared `amsaf.` wordmark and the professional link name in the design system. Used the specified blue WhatsApp action and local SVG icons in the header.
- **Validation.** The production build passed Edge checks at 320, 375, 1024, and 1280 px across all four header compositions. Mobile checks verified touch and keyboard operation, Escape focus return, target sizes, and exclusion of collapsed links from the accessibility tree and tab order. The M1 regression pass covered all eight public routes at 320 and 1280 px. Lint, typecheck, eight automated tests, production build, Prettier with `--end-of-line auto`, and `git diff --check` passed. See the [AMSAF-027 backlog entry](BACKLOG.md#amsaf-027--refine-the-wordmark-and-responsive-header) for results and reproduction steps.
- **Approval.** On 2026-11-08, the project owner visually approved the unified wordmark, desktop headers, mobile disclosure and focus behavior, and single-row service and project headers. Existing navigation destinations and M1 behavior were verified. The owner requested no corrections. AMSAF-027 is Done.

## 2026-11-08 — AMSAF-028 shared footers

- **Reuse and decisions.** Reused the existing linked wordmark in the shared footer. Kept the current surface, border, and vertical padding, and used the existing spacing scale between the wordmark and navigation. The route layouts continue to supply the commercial, service, profile, and project destinations. The footer stacks below 768 px and uses the shared container to align the desktop row.
- **Validation.** All eight routes passed footer checks in headless Edge 157 at the four requested widths and at both sides of the 768 px breakpoint. The AMSAF-027 header regression checks passed. Lint, typecheck, eight tests, the production build, and Prettier with `--end-of-line auto` passed. See the [AMSAF-028 backlog entry](BACKLOG.md#amsaf-028--refine-shared-footers) for accessibility measurements and local review steps.
- **Approval.** On 2026-11-08, the project owner approved the commercial and professional footers on desktop and mobile, including the shared live wordmark, responsive layout, existing links and destinations, spacing, typography, visual hierarchy, and accessible keyboard focus. The owner requested no visual changes. AMSAF-028 is Done.

## 2026-11-08 — AMSAF-029 shared actions and section headings

- **Reuse and decisions.** Reused the M2 action target and global focus outline in `ActionLink` and wired the existing hero to accept action variants. Used the existing contact copy and destination with the approved generic chat icon. Kept section headings stacked by default and used the split treatment on the homepage services heading. The optional label renders only when supplied because public wording still needs approval.
- **Validation.** Verified action states and destinations and the split breakpoint in headless Edge. Checked the optional label and section reading order with a static render. See the [AMSAF-029 backlog entry](BACKLOG.md#amsaf-029--define-shared-action-and-section-treatments) for the check results and preview steps.
- **Approval.** On 2026-11-08, the project owner visually approved the shared action and section treatments. AMSAF-029 is Done.
