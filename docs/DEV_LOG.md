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
