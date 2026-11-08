# AMSAF design system

## Confirmed structure and content

The committed Claude Design exports establish the structural direction below. They provide hierarchy and navigation context. Example copy, prices, claims, media, palettes, typography, spacing, and interaction behavior need separate approval.

| Reference                                                                                          | Route and section order                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Commercial homepage](references/Home%20%28%20%29.pdf)                                             | `/`. Header and WhatsApp → introduction with site preview → digital presence and checklist → four service offers and maintenance options → selected work → process → developer introduction with portfolio link → WhatsApp contact → footer. |
| [Landing Pages product detail](references/P%C3%A1gina%20de%20produto%20%28%20landing-pages%29.pdf) | `/landing-pages`. Header and return to services → product selector → introduction, audience, base scope and customization, with starting-price and WhatsApp summary → footer with professional portfolio link.                               |
| [Professional portfolio](references/Portf%C3%B3lio%20profissional%20%28%20portfolio%29.pdf)        | `/portfolio`. Professional section navigation → introduction → skills → experience and education → software projects → return to commercial services.                                                                                        |

Four dedicated product pages are required for M1. The Landing Pages export provides the shared product-detail structure. The service slugs are approved in the [public route map](ARCHITECTURE.md#approved-public-routes). The Portfolios product is a commercial service with its own route. The M1 checklist below specifies the approved treatment of the homepage preview and checklist.

- The commercial homepage at `/` explains the four service categories, their standard scopes, and approved starting prices. It presents customized proposals and recurring maintenance as options. Use the [commercial offer](commercial-offer.md#confirmed-prices-and-baseline-scopes) for the homepage and service pages, and format prices for Brazilian Portuguese.
- The professional portfolio at `/portfolio` presents Antônio Marcos and verified work. Its purpose is distinct from the Portfolios service.
- The approved route map adds `/contato` and `/portfolio/projetos/[slug]`. Contact uses WhatsApp without a form. The M1 checklist below gives the shared project detail section order.
- Use Brazilian Portuguese for public copy, labels, and accessible names. Keep pricing and scope clear. Use WhatsApp as the primary contact action.
- Exclude contact forms, artificial scarcity, and manipulative sales tactics. Publish testimonials and results only when verified and approved.

## M1 route acceptance checklist

The project owner approved this checklist in AMSAF-002 on 2026-11-08. Use it to compare the implemented M1 pages against the agreed section order, navigation, and interaction treatment.

| Route | Ordered structure | Navigation and destinations |
| --- | --- | --- |
| `/` | Commercial header → introduction with illustrative site preview → digital presence with checklist → four service offers and optional maintenance (`#servicos`) → selected work (`#trabalhos`) → process (`#como-funciona`) → developer introduction (`#sobre`) → contact invitation → commercial footer. | Header brand → `/`. Header section links go to the four anchors in order, with a professional portfolio link to `/portfolio` and a direct WhatsApp action. Hero links go to `#servicos` and `#trabalhos`. Each offer links to its service route and WhatsApp. The developer introduction links to `/portfolio`. The contact invitation links directly to WhatsApp and offers `/contato` for guidance. Footer links go to `#servicos`, `#trabalhos`, and `/portfolio`. |
| `/landing-pages`, `/portfolios`, `/institucionais`, `/comerciais` | Service header → four-service selector → introduction → intended audience → base scope → customization note → summary with approved starting price, optional maintenance where applicable, and primary WhatsApp action → service footer. The summary sits alongside the main content where space allows and follows it in reading order. | Brand → `/`. Return to services → `/#servicos`. The selector lists the four routes in homepage order and identifies the current service. Footer → `/portfolio`. |
| `/contato` | Commercial header → contact heading → brief guidance on what to share → primary WhatsApp action → commercial footer. The homepage contact invitation supplies the structural model. | Reuse commercial navigation with absolute homepage anchors, including `/#servicos`. Use the approved WhatsApp destination and omit a contact form. |
| `/portfolio` | Professional header → profile introduction → skills (`#habilidades`) → experience and education (`#experiencia`) → software projects (`#projetos`) → commercial return. | Portfolio brand → `/portfolio`. Header section links go to the three anchors in order. Header and closing commercial links go to `/#servicos`. Each verified project links to its own detail URL. |
| `/portfolio/projetos/[slug]` | Professional detail header → project title and summary → project context and detail → technologies → key decisions → verified results → project links → return to projects. Use one shared structure and a unique static record per project. | Header brand → `/portfolio`. Header and closing return links go to `/portfolio#projetos`. Use only verified project link destinations. Unknown slugs return a 404. |

- Use the Landing Pages hierarchy for all four services. The introduction, audience, base scope, customization, price, maintenance information, and contact context come from each service's own record. The commercial `/portfolios` offer shares this hierarchy and stays separate from the professional `/portfolio`.
- For project details, require the title, summary, and project-specific detail. Omit empty optional sections for technologies, decisions, verified results, or links. Place approved project images with their corresponding content and include appropriate alt text. Omit missing images and sample claims.
- Keep the homepage preview as one static, clearly identified illustrative example and the checklist as a static list. Remove the preview category controls, checkbox affordances, and score from the prototype's M1 treatment. Keep the preview and checklist in their reference positions.
- The secondary link to `/contato` adds an internal route to the homepage contact invitation. Keep the reference's direct WhatsApp action as the primary action and use the destination below.
- The homepage showcase and professional portfolio link each listed project to its own detail page. The detail page returns visitors to `/portfolio#projetos`.

## M1 public content inputs

- Use the approved commercial WhatsApp number `+5581999370547` for the homepage, service pages, and `/contato`. The direct link is `https://wa.me/5581999370547`.
- Use provisional Brazilian Portuguese commercial copy, subject to refinement. Base service copy on the [commercial offer](commercial-offer.md). On `/contato`, invite visitors to describe their business and what they need from the site.
- Keep the homepage introduction and professional profile to verified facts. Antônio Marcos is an independent software developer and AMSAF is his independent developer identity.
- Emilly Araújo Fotografia is the sole project authorized for initial display in the commercial showcase and professional portfolio. Use the same project record across the showcase, portfolio, and detail page.
- Omit unavailable optional material, including project links, technologies, decisions, results, images, testimonials, metrics, and professional claims. Include alt text for any approved images used.

### Emilly Araújo Fotografia

Use this minimal Brazilian Portuguese case study for M1, subject to editorial refinement. The approved project selection and the [commercial homepage reference](references/Home%20%28%20%29.pdf) establish the project name and identify it as a photography portfolio.

| Field | Content |
| --- | --- |
| Title | Emilly Araújo Fotografia |
| Summary | Portfólio de fotografia |
| Slug | `emilly-araujo-fotografia` |
| Project detail | O site da Emilly Araújo Fotografia funciona como portfólio digital para apresentar o trabalho fotográfico de Emilly Araújo. |

The approved M1 case study omits technologies, decisions, results, external links, and images with their associated alt text. It also omits testimonials and metrics.

## Inherited implementation

The current shell, hero, sections, cards, gallery, neutral Tailwind color roles, and focus styling are scaffold assets. The abstract gallery images are demonstration assets. Assess reuse against the AMSAF content and structure. Existing typography, palette, spacing, and assets carry no AMSAF visual approval.

## M2 visual direction

Apply a dark theme on every public page, including the professional portfolio, project details, and 404. Use a neutral black-and-white foundation with blue accents and the lowercase `amsaf.` wordmark with a blue dot. Maintain the different commercial and professional purposes through hierarchy, layout, content, and navigation. Keep the professional portfolio and project details editorial on the same dark theme, distinguished by layout and hierarchy rather than a separate palette. The [Claude Design exports](#confirmed-structure-and-content) guide composition, and the [M1 route acceptance checklist](#m1-route-acceptance-checklist) governs section order and destinations.

Use a compact mobile header with expandable navigation. Its disclosure is essential navigation in M2. Creative motion, mascot behavior, and other personality interactions belong in M3. The homepage preview and checklist keep their static M1 behavior.

Use Bricolage Grotesque for display, Instrument Sans for body and interface text, and JetBrains Mono for labels, self-hosted as local variable fonts. Use geometric components with restrained corner radii, a spacious hero with compact cards, and SVG icons. The [approved visual specification](#m2-approved-visual-specification) below defines the exact values. The committed PDFs are the visual references. The [typography exploration](m2-typography-exploration.md) records the compared candidates. The [M2 visual audit](m2-visual-audit.md) provides sampled colors, type estimates, and composition ideas, and labels its superseded and resolved items. Where the audit or the references disagree with this specification, this specification applies.

Use approved Portuguese copy, prices, and verified work. The audit's sample tags and labels, highlighted headline wording, prefilled WhatsApp message, and extra showcase entry would require separate approval. Design the selected work and developer introduction for the approved content available today, which includes neither project imagery nor a developer portrait.

## M2 approved visual specification

The project owner approved this specification in [AMSAF-015](BACKLOG.md#amsaf-015--approve-visual-specifications) on 2026-11-08. It applies to every public route and the 404. It changes presentation only. M1 content, section order, anchors, destinations, and landmarks stay as defined in the [M1 route acceptance checklist](#m1-route-acceptance-checklist).

### Owner approvals

| Area | Approved decision |
| --- | --- |
| Typography | Bricolage Grotesque for display, Instrument Sans for body and interface, JetBrains Mono for labels. |
| Theme | Dark theme on every route. |
| Core colors | Background `#0D0D0D`, surfaces `#141416`, primary text `#F4F5F1`, accent `#3973FF`. |
| Identity | Lowercase `amsaf.` wordmark with a blue dot. |
| Shape | Geometric buttons and components with restrained corner radii. These replace the reference's pill buttons. |
| Density | Spacious hero and compact cards. |
| Professional pages | Editorial portfolio and project details within the shared dark identity. |
| Navigation | Compact expandable mobile navigation. |
| Assets and loading | SVG icons and performance-conscious local font hosting. |

The derived color roles, scale, spacing, and states below implement these decisions. They were tested against the approved core colors.

### Color roles

| Token | Value | Role |
| --- | --- | --- |
| `canvas` | `#0D0D0D` | Page background on every route. Approved. |
| `surface` | `#141416` | Cards, price summary, mobile navigation panel, illustrative preview frame. Approved. |
| `surface-muted` | `#1A1A1D` | Hover and pressed backgrounds for secondary controls and linked cards. |
| `border` | `#1F1F21` | Decorative card and section borders. |
| `rule` | `#2A2A2D` | Dividers, scope rows, editorial rules, and the dashed price divider. |
| `border-strong` | `#6A6C67` | Boundaries of secondary buttons, the menu button, and other controls. |
| `content` | `#F4F5F1` | Primary text, headings, and wordmark letters. Approved. |
| `content-muted` | `#9D9F9A` | Secondary text, ledes, summaries, and inactive navigation. |
| `content-subtle` | `#82847F` | Metadata, paths, process numerals, and availability notes. |
| `accent` | `#3973FF` | Contact fills, wordmark dot, icons, current-state indicators, focus ring, and large accent text. Approved. |
| `accent-hover` | `#5A8BFF` | Contact fill on hover. |
| `accent-active` | `#4A7EFF` | Contact fill while pressed. |
| `accent-text` | `#6E98FF` | Accent text below large-text size, including route labels and link hover. |
| `on-accent` | `#0D0D0D` | Labels and icons on accent fills. |
| `inverse` | `#F4F5F1` | Primary action fill. Hover `#FFFFFF`, pressed `#DCDDD8`. |
| `on-inverse` | `#0D0D0D` | Labels on inverse fills. |
| `focus` | `#3973FF` | Focus ring. |

The theme is dark under both light and dark system preferences. Set `color-scheme: dark` and add no `prefers-color-scheme` variants. Text selection uses `on-accent` on `accent`.

### Tested pairings

Contrast ratios were calculated with the WCAG 2.2 relative luminance formula. Normal text needs 4.5:1. Large text (24 px, or 18.66 px bold) and required control indicators need 3:1.

| Foreground | Background | Ratio | Permitted use |
| --- | --- | --- | --- |
| `content` | `canvas` / `surface` / `surface-muted` | 17.75 / 16.80 / 15.86 | All text. |
| `content-muted` | `canvas` / `surface` / `surface-muted` | 7.27 / 6.89 / 6.50 | All text. |
| `content-subtle` | `canvas` / `surface` / `surface-muted` | 5.14 / 4.87 / 4.59 | All text. |
| `accent-text` | `canvas` / `surface` / `surface-muted` | 7.03 / 6.66 / 6.28 | All text. |
| `accent` | `canvas` | 4.69 | Large text, icons, indicators, focus ring. Use `accent-text` for small text. |
| `accent` | `surface` / `surface-muted` | 4.44 / 4.19 | Large text, icons, indicators, focus ring only. |
| `on-accent` | `accent` / `accent-hover` / `accent-active` | 4.69 / 6.08 / 5.29 | Contact labels and icons in every state. |
| `on-inverse` | `inverse` / hover / pressed | 17.75 / 19.44 / 14.23 | Primary action labels in every state. |
| `border-strong` | `canvas` / `surface` / `surface-muted` | 3.66 / 3.46 / 3.27 | Control boundaries. |
| `focus` ring | `canvas` / `surface` | 4.69 / 4.44 | Focus indicator on any background used. |

Do not place `content` (3.78:1) or white (4.14:1) text on `accent`. Do not darken the contact fill for its pressed state, because dark labels fall below 4.5:1. `border` and `rule` are decorative and never the only indicator of a control or state.

### Typography

| Role | Family | Local file (Latin subset, WOFF2) | Variable axes | Size | Preload |
| --- | --- | --- | --- | --- | --- |
| Display | Bricolage Grotesque | `bricolage-grotesque-latin-wght.woff2` | `wght` 200–800, other axes at defaults | 40.4 KiB | Yes |
| Body and interface | Instrument Sans | `instrument-sans-latin-wght.woff2` | `wght` 400–700 | 29.4 KiB | Yes |
| Labels | JetBrains Mono | `jetbrains-mono-latin-wght.woff2` | `wght` 100–800 | 39.5 KiB | No |

- **Hosting.** Store the files in `frontend/src/app/fonts/` with each family's OFL licence text. Load them with `next/font/local` in the root layout using `display: "swap"`, the default `adjustFontFallback`, and the CSS variables `--font-bricolage`, `--font-instrument`, and `--font-jetbrains`. Set `preload: false` for JetBrains Mono. The approved subset is Google Fonts' `latin` range, which covers every Portuguese character in current content. No request goes to a third-party font service at build time or run time.
- **Licensing.** All three families use the SIL Open Font License 1.1 with no Reserved Font Name, so subsetted self-hosted copies are permitted.
- **Fallback stacks.** Sans roles: `ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. Labels: `ui-monospace, "Cascadia Mono", "SF Mono", Menlo, Consolas, monospace`.
- **Styles.** Use upright styles only. Do not load italics, and avoid synthesized italic or bold.

Fluid sizes interpolate between the 320–375 px and 1280 px values shown.

| Token | Family and weight | Size (mobile → desktop) | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- |
| `display-xl` | Bricolage 800 | `clamp(2.5rem, 1rem + 6vw, 5.5rem)` (40 → 88 px) | 0.98 | −0.035em | Homepage hero, contact invitation, `/contato` heading, 404 heading. |
| `display-name` | Bricolage 800 | `clamp(3rem, 1rem + 8vw, 6.5rem)` (48 → 104 px) | 0.92 | −0.035em | Professional name on `/portfolio`. |
| `display-lg` | Bricolage 800 | `clamp(2.5rem, 1.5rem + 4vw, 4.5rem)` (40 → 72 px) | 1 | −0.03em | Service and project detail titles. |
| `heading` | Bricolage 700 | `clamp(2rem, 1.25rem + 3vw, 3.25rem)` (32 → 52 px) | 1.05 | −0.03em | Section headings. |
| `title` | Bricolage 700 | `clamp(1.5rem, 1.25rem + 1vw, 2rem)` (24 → 32 px) | 1.1 | −0.02em | Card titles, project rows, sub-headings. |
| `price` | Bricolage 700 | `clamp(2.25rem, 1.8rem + 1.5vw, 3rem)` (36 → 48 px) | 1 | −0.02em | Starting prices. |
| `numeral` | Bricolage 700 | `clamp(2.5rem, 2rem + 2vw, 3.5rem)` (40 → 56 px) | 1 | −0.02em | Process step numerals, in `content-subtle`. |
| `wordmark` | Bricolage 800 | `clamp(1.5rem, 1.35rem + 0.4vw, 1.625rem)` (24 → 26 px) | 1 | −0.04em | `amsaf.` in headers and footers. |
| `lede` | Instrument 400 | `clamp(1.0625rem, 0.95rem + 0.4vw, 1.25rem)` (17 → 20 px) | 1.55 | 0 | Hero and section introductions. |
| `body` | Instrument 400 | `1rem` (16 px) | 1.6 | 0 | Paragraphs, scope items, notes. |
| `body-sm` | Instrument 400 | `0.875rem` (14 px) | 1.5 | 0 | Price context, maintenance terms, captions. |
| `nav` | Instrument 500 | `0.9375rem` (15 px) | 1.4 | 0 | Header, footer, and selector links. |
| `button` | Instrument 600 | `0.9375rem` (15 px) | 1.25 | 0 | Button labels. |
| `label` | JetBrains 400 | `0.8125rem` (13 px) | 1.5 | 0 | Route labels, scope numbers, section labels, editorial row labels. |
| `label-sm` | JetBrains 400 | `0.75rem` (12 px) | 1.5 | 0 | Paths, dates, stacks, and skill tags. |

- **Measure.** Hero headings at most 12ch. Other headings at most 18ch. Ledes at most 38ch. Body text at most 65ch.
- **Wrapping.** Use `text-wrap: balance` on headings and `text-wrap: pretty` on body text. Do not hyphenate automatically. Let paths and URLs break with `overflow-wrap: anywhere`.
- **Case and figures.** Set labels as written, without case transforms. Use proportional figures for standalone prices and tabular figures only for aligned numeric columns.
- **Hierarchy.** Each page keeps one `h1`. The token follows the visual role, not the heading level.

### Spacing and width

| Token or rule | Value | Use |
| --- | --- | --- |
| Base unit | `0.25rem` (Tailwind default) | All spacing utilities. |
| `container-site` | `77.5rem` (1240 px) maximum content width | Header, sections, footer. |
| Gutters | 16 px below 640, 24 px from 640, 32 px from 1024 | Container inline padding. |
| `spacing-hero` | `clamp(4.5rem, 2rem + 8vw, 9rem)` (72 → 134 px at 1280) | Hero block padding. |
| `spacing-section` | `clamp(4rem, 2.5rem + 5vw, 7rem)` (64 → 104 px at 1280) | Section block padding. |
| Section header to content | 40 px, 56 px from 1024 | Gap after a section heading or split header. |
| Label to heading | 12 px | Optional label above a heading. |
| Heading to lede | 16 px, 24 px from 1024 | Gap after headings. |
| Content to actions | 32 px | Gap before an action group. |
| Action gap | 12 px | Between buttons, wrapping as needed. |
| Card padding | 20 px, 24 px from 640 | Compact cards and the price summary. |
| Card gap | 16 px, 20 px from 1024 | Card grids. |
| Row padding | 12 px block | Scope rows, editorial rows, mobile navigation rows (minimum 48 px row height). |
| Header height | 64 px, 72 px from 1024 | All header compositions. |

### Shape and borders

| Token | Value | Use |
| --- | --- | --- |
| `radius-tag` | `0.25rem` (4 px) | Skill tags and small chips. |
| `radius-control` | `0.375rem` (6 px) | Buttons, menu button, skip link, service selector items. |
| `radius-card` | `0.625rem` (10 px) | Cards, price summary, mobile navigation panel, illustrative preview window. |

Borders are 1 px. Rules separate editorial rows and scope rows at full width. The price divider is a 1 px dashed `rule`. Do not use pill shapes, shadows, or gradients.

### Responsive layout

Use Tailwind's default breakpoints: 640 (`sm`), 768 (`md`), 1024 (`lg`), and 1280 px (`xl`). Reading order always follows the DOM order defined in M1.

| Pattern | Below the breakpoint | At and above the breakpoint |
| --- | --- | --- |
| Commercial and portfolio headers (`lg`) | Wordmark and a 44 × 44 px menu button. Links and the WhatsApp action appear in the disclosure panel. | One row: wordmark left, links center, action right. |
| Service and project headers | One row at every width: wordmark and the return link. No disclosure. | Same. |
| Homepage hero (`lg`) | Text, actions, then the illustrative preview. | Two columns: text and actions left, preview right. |
| Section headers (`lg`) | Label, heading, then introduction. | Split: heading in the left 5/12, introduction in the right 7/12. |
| Presence checklist (`lg`) | Below the introduction. | Right column beside the heading. |
| Service cards | One column; two from 640. | Four columns from 1280. |
| Service detail summary (`lg`) | Follows the details. | Beside the details, 3fr and 2fr. |
| Process steps | One column; two from 640. | Five columns from 1024 with vertical rules. |
| Professional rows (`md`) | Label above content. | Label column 1fr, content 3fr. |
| Contact invitation and `/contato` | Centered, heading at most 18ch, actions wrapping. | Same, centered. |
| Footers (`md`) | Brand line, then links, stacked. | One row: brand line left, links right. |

- **Mobile disclosure.** The menu button uses the accessible name "Menu" and exposes `aria-expanded` and `aria-controls`. The panel opens below the header on `surface`, lists every link of that composition in 48 px rows, and ends with any composition action at full width. Collapsed links are hidden from the accessibility tree and tab order. The panel closes on Escape, returning focus to the button, and when a link is activated. Opening and closing are instant in M2. Any transition belongs to M3 and must respect reduced motion.
- **Targets.** Interactive targets are at least 44 × 44 px for buttons and the menu button, and at least 24 px tall for inline and footer links. No layout produces horizontal overflow from 320 px.

### Components and states

Hover and color transitions use 150 ms ease and apply to color, background, and border only. Every interactive element shows the focus ring on `:focus-visible`: a 2 px solid `focus` outline with a 2 px offset. Current location uses `aria-current`. Components have no disabled state because no approved flow needs one.

| Component | Rest | Hover | Pressed | Current or other |
| --- | --- | --- | --- | --- |
| Contact button (WhatsApp) | `accent` fill, `on-accent` label and chat icon, `radius-control`, 44 px minimum height, 18 px inline padding | `accent-hover` | `accent-active` | Full width in the service summary and the mobile panel. |
| Primary button | `inverse` fill, `on-inverse` label | `#FFFFFF` | `#DCDDD8` | Used for the main hero action. |
| Secondary button | Transparent, 1 px `border-strong`, `content` label | `surface-muted` background | `surface-muted` background, `content-muted` border | "Ver trabalhos" and "Ver detalhes". |
| Header compact action | Contact button at 44 px minimum height and 16 px inline padding | As contact | As contact | Desktop header only. |
| Inline link | `content`, underline with 4 px offset in `content-subtle` | `accent-text` text and underline | Same as hover | Visited state matches rest. |
| Navigation link | `content-muted` | `content` | `content` | Current: `content` with a 2 px `accent` underline. |
| Service selector item | `content-muted` label on `canvas`, `radius-control` | `content`, `surface` background | Same as hover | Current: `content` label, `surface` background, 2 px `accent` bottom indicator. |
| Card | `surface` fill, 1 px `border`, `radius-card` | Linked cards: `border-strong` border | No change | Static cards have no hover state. |
| Scope row | 1 px top `rule`, `label` number in `content-subtle`, `body` text | — | — | Numbered from 01. |
| Price block | Dashed `rule` above, "A partir de" in `body-sm` `content-muted`, amount in `price` | — | — | Maintenance terms in `body-sm`. |
| Editorial row | 1 px top `rule`, `label` row heading in `content-muted` | — | — | Project rows show the title in `title`, the summary in `body`, and an arrow icon in `accent`. |
| Skill tag | 1 px `rule`, `radius-tag`, `label-sm` | — | — | Only with verified skills. |
| Menu button | Transparent, 1 px `border-strong`, menu icon | `surface-muted` background | `surface-muted` background | Expanded: close icon, `surface-muted` background. |
| Skip link | Hidden until focused, then `accent` fill, `on-accent` label, `radius-control` | — | — | First focusable element on every page. |

### Icons and wordmark

- **Icons.** Author icons as local inline SVG components without an icon dependency. Use a 24 × 24 viewBox, 2 px strokes with round caps and joins, and `currentColor`. Render at 16, 20, or 24 px. Mark them `aria-hidden="true"` and `focusable="false"`, and name the control instead. The approved set is arrow left, arrow right, menu, close, and a generic chat bubble for the WhatsApp action. Use SVG for directional arrows because the Latin font subsets do not include arrow glyphs.
- **Wordmark.** Render `amsaf` in `content` and the dot in `accent` as live text in the `wordmark` style. The brand link's accessible name must include the visible "amsaf" text. The commercial brand keeps its `/` destination and the professional brand keeps `/portfolio`.

### Implementation tokens

AMSAF-026 applies these tokens in `frontend/src/app/globals.css`, replacing the scaffold values and keeping the existing token names where they match.

```css
@theme {
  --color-canvas: #0d0d0d;
  --color-surface: #141416;
  --color-surface-muted: #1a1a1d;
  --color-border: #1f1f21;
  --color-rule: #2a2a2d;
  --color-border-strong: #6a6c67;
  --color-content: #f4f5f1;
  --color-content-muted: #9d9f9a;
  --color-content-subtle: #82847f;
  --color-accent: #3973ff;
  --color-accent-hover: #5a8bff;
  --color-accent-active: #4a7eff;
  --color-accent-text: #6e98ff;
  --color-on-accent: #0d0d0d;
  --color-inverse: #f4f5f1;
  --color-inverse-hover: #ffffff;
  --color-inverse-active: #dcddd8;
  --color-on-inverse: #0d0d0d;
  --color-focus: #3973ff;

  --text-display-xl: clamp(2.5rem, 1rem + 6vw, 5.5rem);
  --text-display-xl--line-height: 0.98;
  --text-display-xl--letter-spacing: -0.035em;
  --text-display-xl--font-weight: 800;
  --text-display-name: clamp(3rem, 1rem + 8vw, 6.5rem);
  --text-display-name--line-height: 0.92;
  --text-display-name--letter-spacing: -0.035em;
  --text-display-name--font-weight: 800;
  --text-display-lg: clamp(2.5rem, 1.5rem + 4vw, 4.5rem);
  --text-display-lg--line-height: 1;
  --text-display-lg--letter-spacing: -0.03em;
  --text-display-lg--font-weight: 800;
  --text-heading: clamp(2rem, 1.25rem + 3vw, 3.25rem);
  --text-heading--line-height: 1.05;
  --text-heading--letter-spacing: -0.03em;
  --text-heading--font-weight: 700;
  --text-title: clamp(1.5rem, 1.25rem + 1vw, 2rem);
  --text-title--line-height: 1.1;
  --text-title--letter-spacing: -0.02em;
  --text-title--font-weight: 700;
  --text-price: clamp(2.25rem, 1.8rem + 1.5vw, 3rem);
  --text-price--line-height: 1;
  --text-price--letter-spacing: -0.02em;
  --text-price--font-weight: 700;
  --text-numeral: clamp(2.5rem, 2rem + 2vw, 3.5rem);
  --text-numeral--line-height: 1;
  --text-numeral--letter-spacing: -0.02em;
  --text-numeral--font-weight: 700;
  --text-wordmark: clamp(1.5rem, 1.35rem + 0.4vw, 1.625rem);
  --text-wordmark--line-height: 1;
  --text-wordmark--letter-spacing: -0.04em;
  --text-wordmark--font-weight: 800;
  --text-lede: clamp(1.0625rem, 0.95rem + 0.4vw, 1.25rem);
  --text-lede--line-height: 1.55;
  --text-body: 1rem;
  --text-body--line-height: 1.6;
  --text-body-sm: 0.875rem;
  --text-body-sm--line-height: 1.5;
  --text-nav: 0.9375rem;
  --text-nav--line-height: 1.4;
  --text-nav--font-weight: 500;
  --text-button: 0.9375rem;
  --text-button--line-height: 1.25;
  --text-button--font-weight: 600;
  --text-label: 0.8125rem;
  --text-label--line-height: 1.5;
  --text-label-sm: 0.75rem;
  --text-label-sm--line-height: 1.5;

  --container-site: 77.5rem;
  --spacing-hero: clamp(4.5rem, 2rem + 8vw, 9rem);
  --spacing-section: clamp(4rem, 2.5rem + 5vw, 7rem);

  --radius-tag: 0.25rem;
  --radius-control: 0.375rem;
  --radius-card: 0.625rem;
}

@theme inline {
  --font-display: var(--font-bricolage), ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-sans: var(--font-instrument), ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: var(--font-jetbrains), ui-monospace, "Cascadia Mono", "SF Mono", Menlo, Consolas, monospace;
}
```

Display tokens set size, line height, tracking, and weight. Pair them with `font-display`. Body tokens inherit `font-sans` from the root. Label tokens pair with `font-mono`.

### Open decisions

| Decision | Status | Affected scope |
| --- | --- | --- |
| Professional brand presentation: an optional `/portfolio` label beside the wordmark and the brand link's accessible name. | Open. The name must include the visible "amsaf". | AMSAF-027, AMSAF-035, AMSAF-036 |
| Palette of the illustrative site inside the homepage preview. The reference uses a warm cream mock. | Open. The frame uses `surface`. The mock content needs a separate choice. | AMSAF-030 |
| Numbered section label wording and service category tags. | Open. Requires copy approval. Components render without them. | AMSAF-029, AMSAF-031 |
| Highlighted hero word. | Open. Depends on approved heading copy. | AMSAF-030 |
| Official WhatsApp logo. | Not approved. Use the generic chat icon. | AMSAF-029, AMSAF-031, AMSAF-033, AMSAF-034 |
| Bricolage Grotesque optical-size axis. It adds the display optical cut for 34.7 KiB more. | Not adopted. The approved specimens used the weight-only file. Revisit only with owner approval. | AMSAF-026 |

## Further exploration

| Area | Status |
| --- | --- |
| Identity, layout, and components | Specified for M2 above. Changes need owner approval and an update to this design system. |
| Personality | Explore purposeful motion or interactive details in M3 and compare them with simpler states. Include keyboard, touch, and reduced-motion behavior in any evaluation. |

Record the approved creative interactions and their accessibility behavior in M3.
