# M2 visual audit

Pre-planning input for [EPIC-02](BACKLOG.md#epic-02--visual-identity-m2). Audited on 2026-11-08 against the approved Claude Design exports in [`references/`](references/). No implementation changes were made.

## How to read this audit

This is a historical record of the M1 site and the reference renders as they stood on 2026-11-08. The observations and sampled values remain valid reference evidence. Several recommendations were later decided differently. The [M2 visual direction](DESIGN_SYSTEM.md#m2-visual-direction) in the design system takes precedence wherever the two disagree. [AMSAF-015](BACKLOG.md#amsaf-015--approve-visual-specifications) remains the approval gate for exact values.

Items carry one of these labels where a later decision applies:

- **Superseded.** A later owner decision replaced the recommendation. Keep it only as context.
- **Resolved.** The owner decided the open question. The decision is recorded in the design system.
- **Explored.** Follow-up work produced candidates for approval.

Unlabelled items are open recommendations for the M2 implementation tasks.

## Summary

Every route matches the approved section order. Visually, the site is still the M1 scaffold: Arial, neutral greys, square-cornered black buttons, and the same light treatment on every route. The references define a distinct identity that is not yet implemented: a dark commercial site, a light professional portfolio, one blue accent, three type roles, pill buttons, and numbered section labels. All recommendations below preserve the approved structure.

> **Superseded in part.** The owner approved a dark theme on every public page, including the professional portfolio, project details, and 404. The light portfolio treatment in the references is not carried forward. The portfolio stays editorial and distinct through layout and hierarchy.

## Method

- Reviewed all eight public routes and the 404 page on the local dev server at 1280px, 375px, and 320px widths.
- Compared them with the rendered reference pages and sampled reference colors from those renders.
- The PDFs are rasterized screenshots. Font families cannot be extracted from them, and the type sizes below are estimates that assume a 1440px design canvas.

## Reference colors

Sampled from the rendered references. These are reference evidence, not approved values.

| Role                      | Commercial (dark)                    | Professional `/portfolio` (light) |
| ------------------------- | ------------------------------------ | --------------------------------- |
| Page background           | `#0d0d0d` (contact/footer `#0a0a0a`) | `#ecede8`                         |
| Card background / border  | `#141416` / `#1f1f21`                | Rules `#d6d7d2`                   |
| Main text                 | `#f4f5f1`                            | `#0c0c0c`                         |
| Accent                    | `#4c7dfe`, with dark button labels   | Same blue; closing band `#0d0d0d` |
| Illustrative site preview | Warm cream `#f1ece6`                 | —                                 |

The professional (light) column is **superseded** as a palette for the site. It records what the reference shows.

**Resolved.** AMSAF-015 approved background `#0D0D0D`, surfaces `#141416`, primary text `#F4F5F1`, and accent `#3973FF`. The approved accent replaces the sampled `#4c7dfe`. See the [approved color roles](DESIGN_SYSTEM.md#color-roles).

## P0 — Foundations

These block the rest of the work.

1. **Two themes, one per audience.** The commercial routes (`/`, the four service pages, `/contato`) are dark in the references. `/portfolio` is light warm grey and ends with a dark band. The implementation uses one light treatment everywhere, so the visual distinction between the commercial site and the professional portfolio is lost. The project detail page has no reference and should follow the portfolio theme.

   **Superseded.** Every public page uses the dark theme. The commercial and professional purposes stay distinct through hierarchy, layout, content, and navigation. The professional pages use an editorial layout.

2. **One accent, with a darker light-theme variant.** The references use the blue for WhatsApp actions, section labels, the highlighted headline word, arrows, and the dot in the wordmark. The implementation has no accent. Contrast:
   - Blue on `#0d0d0d` is about 5.3:1 and passes.
   - White text on the blue is about 3.7:1 and fails for normal text. Keep dark labels on blue buttons, as the reference does.
   - Blue on `#ecede8` is about 3.1:1 and fails for the small portfolio labels. The light theme needs a darker blue, such as `#2b59d9` (about 5:1).

   **Superseded.** The darker light-theme blue is no longer needed because no page uses the light theme. The ratios above apply to the sampled blue. The approved `#3973FF` measures 4.69:1 on the background and 4.44:1 on surfaces. The specification adds a lighter accent text color for small text. See the [tested pairings](DESIGN_SYSTEM.md#tested-pairings).

3. **Typography in three roles, replacing Arial.**
   - A heavy display grotesque with tight negative tracking for headings: hero about 80–88px, section headings about 52px, service title about 64–72px.
   - A neo-grotesque sans for body and interface text, about 16–17px.
   - A monospace for section labels, route labels, list numbers, dates, and tech stacks.

   Source the exact families and sizes from the Claude Design project instead of inferring them from the rasters.

   **Resolved.** The owner decided that the committed PDFs are sufficient visual references. [AMSAF-025](BACKLOG.md#amsaf-025--explore-typography) compared candidate systems in the [typography exploration](m2-typography-exploration.md). AMSAF-015 approved Bricolage Grotesque, Instrument Sans, and JetBrains Mono, with the [approved scale](DESIGN_SYSTEM.md#typography).

4. **Wordmark.** The references use a lowercase bold "amsaf" with a blue dot, and "amsaf. /portfolio" on the portfolio. The implementation shows plain "AMSAF" and "Antônio Marcos". This is an identity decision that needs approval.

   **Resolved.** The lowercase `amsaf.` wordmark with a blue dot is approved. The "amsaf. /portfolio" variant is not separately approved.

5. **Focus ring per theme.** The current `#404040` outline would be invisible on the dark background. Use an accent-based focus color per theme.

   **Resolved.** One accent focus ring applies to the single dark theme. See the [component states](DESIGN_SYSTEM.md#components-and-states).

## P1 — Shared components

6. **Button system.** The references use pill buttons in three levels:
   - Blue filled for WhatsApp, with a chat icon.
   - Light filled for the primary hero action.
   - Outlined for secondary actions, such as "Ver trabalhos" and "Detalhes →".

   The implementation renders every button in the same black, square-cornered style, so the two hero actions have equal weight.

   **Superseded in part.** The three levels carry forward. The pill shape is replaced by geometric buttons with restrained corner radii. The WhatsApp action uses a generic chat icon. See the [component states](DESIGN_SYSTEM.md#components-and-states).

7. **Header.**
   - On desktop, the reference is one row: brand left, navigation centered, blue action right.
   - On mobile, the implemented header stacks to 175px on `/` and `/contato`, about 22% of an 812px screen. Its navigation links are 16px tall, below the 24px minimum target size in WCAG 2.5.8.
   - The references include no mobile layout, so the mobile navigation pattern needs a decision. A disclosure menu would overlap with M3 interaction scope.

   **Resolved.** M2 uses a compact mobile header with expandable navigation. The disclosure is essential navigation and belongs in M2. Creative motion stays in M3.

8. **Footer.** The reference is one row: "amsaf. · Antônio Marcos · Brasil" on the left and links on the right. The implementation shows links only, on a grey band, without a brand line.
9. **Section heading pattern.**
   - A numbered monospace label in the accent above each section, such as "01 — presença digital".
   - On wide screens, a two-column header with a large heading on the left and the introduction on the right.

   The label wording is new copy and needs approval.

10. **Spacing and width.** The references use about 96–110px of vertical padding per section and a content width of about 1240px. The implementation uses 64px (`py-16`) and 1152px (`max-w-6xl`). The references also use dashed dividers above prices and numbered list rows.

    **Resolved.** See the approved [spacing and width](DESIGN_SYSTEM.md#spacing-and-width).

## P2 — Page compositions

### Commercial homepage

- **Illustrative preview.** Present it as a browser window with three dots and a monospace URL bar, showing a cream mock site, with the caption below. Keep the M1 removal of the category controls.
- **Checklist.** Place it in the right column beside the heading, as bordered rows. Keep checkbox affordances and the score removed.
- **Service cards.** The reference cards have a number, a large title, dash bullets, a dashed divider above the price, a large price, and side-by-side "Detalhes" and "WhatsApp" buttons. The category tags ("Página única", "Vitrine", and so on) are new copy and need approval.
- **Maintenance.** The reference uses a separate row, "E depois que o site estiver no ar?", with two option cards. The implementation shows the monthly maintenance price inside each card. That content can stay; only the composition changes.
- **Selected work.** The reference shows large two-column image cards. Emilly Araújo Fotografia is the only approved project and has no approved images, so it needs a deliberate no-image treatment. Do not add the reference's second "amsaf. você está aqui" card unless it is approved.
- **Process.** Five columns with large muted numerals, vertical dividers, and an "opcional" tag on the final step. The implementation uses a plain numbered list.
- **Developer introduction.** The reference uses two columns with a portrait and a link card that shows a monospace URL. No photo is approved, so the layout must work without one.
- **Contact invitation.** The reference centers it, with a very large heading and a large blue WhatsApp button. `/contato` should use the same pattern.

### Service pages

- A blue monospace route label, such as "/landing-pages", above a larger title.
- Base scope items as numbered rows.
- A dark price card with a full-width blue WhatsApp button.
- "← Voltar para serviços" with an arrow in the header.
- The reference's helper text "Abre o WhatsApp com uma mensagem pronta" implies a prefilled message. Do not add that copy unless the feature is approved.

### Professional portfolio

- A very large two-line name with a monospace label, and the profile summary in the right column.
- Each section as a two-column row, with a label column about 25% wide, separated by full-width rules.
- Skills as monospace tags, experience rows with a monospace period column, and project rows with the stack and an arrow.
- A dark closing band.
- The reference header has a dark "Precisa de um site? →" button. It is a visual replacement for the current "Voltar aos serviços" link with the same destination.

**Superseded in part.** The editorial composition (large name, label column, full-width rules, row-based sections) carries forward on the dark theme. The dark closing band and dark header button were contrast devices against a light page. On the dark theme they need a different treatment, such as a surface or rule change, which AMSAF-015 and AMSAF-035 decide.

### 404 page

The 404 page has no header or footer and uses scaffold styling. It should use the commercial shell.

## Already meets the references or M2 criteria

- Section order and anchors on every route match the [M1 route acceptance checklist](DESIGN_SYSTEM.md#m1-route-acceptance-checklist).
- No horizontal overflow at 320px, 375px, or 1280px on any route.
- The skip link, `lang="pt-BR"`, and the service price summary following the main content in reading order.

## Decisions needed before planning

The status column records decisions made after this audit.

| # | Decision | Status |
| --- | --- | --- |
| 1 | Exact font families, ideally sourced from the Claude Design project. | **Resolved.** The PDFs are the accepted reference. AMSAF-015 approved Bricolage Grotesque, Instrument Sans, and JetBrains Mono. |
| 2 | Approval of the two-theme split and the darker light-theme accent. | **Superseded.** A single dark theme applies to every public page. |
| 3 | Wordmark treatment. | **Resolved.** Lowercase `amsaf.` with a blue dot. |
| 4 | The mobile header and navigation pattern, and whether it belongs in M2 or M3. | **Resolved.** Compact header with an expandable disclosure, in M2. |
| 5 | New copy implied by the references: service category tags, numbered section labels, and the developer introduction and selected work layouts that expect images. | Open. Requires separate copy approval. Layouts must work without project imagery or a developer portrait. |
| 6 | The hero's highlighted-word treatment depends on the reference headline. The current hero copy is provisional, so this is a content dependency. | Open. Any highlighted word must work with approved heading copy. |

## Related cleanup

`Card` and `Gallery` in `frontend/src/components/` are unused scaffold components and could be removed.
