# M2 typography exploration

Exploration for [AMSAF-025](BACKLOG.md#amsaf-025--explore-typography), recorded on 2026-11-08. It presented candidate typography systems for owner approval in [AMSAF-015](BACKLOG.md#amsaf-015--approve-visual-specifications). The public website is unchanged.

## Outcome

The owner approved System B in AMSAF-015: Bricolage Grotesque, Instrument Sans, and JetBrains Mono. The approved implementation will self-host the fonts with `next/font/local`. The weight-only Bricolage file shown in the specimens was adopted, and the optical-size axis remains an open option. The [M2 approved visual specification](DESIGN_SYSTEM.md#m2-approved-visual-specification) is authoritative. The rest of this document is the exploration record, and its recommendation of System A was not adopted.

## Scope and inputs

- **Direction.** The [M2 visual direction](DESIGN_SYSTEM.md#m2-visual-direction) calls for a universal dark theme, blue accents, the lowercase `amsaf.` wordmark, and three type roles: display, body and interface, and monospace. The professional portfolio stays editorial and distinct through layout and hierarchy on the same dark theme.
- **References.** The committed PDFs in [`references/`](references/) are the visual reference. Access to the original Claude Design project is not required. The [M2 visual audit](m2-visual-audit.md) supplies the reference role structure, size estimates, and sampled colors.
- **Constraints.** Freely available families with commercial licences, including alternatives to the prototype. Performance-conscious loading compatible with Next.js 16.4.1 `next/font`.
- **Content.** Every specimen uses approved Brazilian Portuguese copy from the M1 site: the homepage hero and actions, the Landing Pages record and prices, the professional introduction, the availability note, the Emilly Araújo Fotografia project row, and existing route paths. No new copy was introduced.

## Specimens

Open the [standalone specimen page](specimens/typography.html) in a browser with network access to Google Fonts. Append `?system=a` for Geist, `?system=b` for Bricolage Grotesque with Instrument Sans and JetBrains Mono, or `?system=c` for Schibsted Grotesk with IBM Plex Mono. Omit the query to show all three.

To reproduce the recorded views, set the browser's responsive viewport to 1280 px for desktop and 375 px for mobile. Wait for the fonts to load before comparing or capturing each view. The original review also checked 320 px for overflow. The standalone specimen is the versioned record for both desktop and mobile.

Each specimen shows the commercial header and hero, a service card with scope rows and price, the editorial professional introduction and project row, a diacritics line, body paragraphs, monospace labels, an aligned price column, and the available display weights. Colors are the audit's reference samples. Every text pairing used measures at least 4.74:1. The pairings are text on canvas (17.75:1), muted text on canvas and card (7.27:1 and 6.89:1), blue on canvas and card (5.25:1 and 4.97:1), and dark labels on blue (5.25:1).

## Candidate systems

Payload is the Latin-subset WOFF2 that `next/font/google` self-hosts, measured from the Google Fonts CSS2 files on 2026-11-08. Weights and axes come from the font data bundled with the installed Next.js.

| | A · Geist | B · Bricolage + Instrument | C · Schibsted + Plex |
| --- | --- | --- | --- |
| Display | Geist 800, −0.045em | Bricolage Grotesque 800, −0.035em | Schibsted Grotesk 900, −0.04em |
| Body and interface | Geist 400–600 | Instrument Sans 400–600 | Schibsted Grotesk 400–600 |
| Monospace | Geist Mono 400 | JetBrains Mono 400 | IBM Plex Mono 400/500 |
| Display weights | 100–900 variable | 200–800 variable, plus `opsz` and `wdth` axes | 400–900 variable |
| Files | 2 variable | 3 variable | 1 variable, 2 static |
| Latin payload | **51.3 KiB** (28.7 + 22.6) | **109.3 KiB** (40.4 + 29.4 + 39.5) | **74.6 KiB** (45.7 + 14.4 + 14.5) |
| Critical payload, mono deferred | 28.7 KiB, one file for both text roles | 69.8 KiB | 45.7 KiB, one file for both text roles |
| Character | Neutral, technical, closest to the prototype's neo-grotesque | Expressive display details, calm narrow body | Editorial news grotesque, dense heavy weights |

### A · Geist and Geist Mono

- **Strengths.** One superfamily covers all three roles with matched proportions and the full 100–900 range. It has the smallest payload and the fewest files. A single file serves display and body, so the critical path is one request. Clean diacritics and excellent 16–17 px legibility on dark surfaces. It is the closest match to the reference's neutral display and body pairing.
- **Risks.** Geist is the default family in `create-next-app` and widely used in developer tooling, so the type alone does not distinguish AMSAF. Distinction has to come from the wordmark, blue accent, layout, and M3 personality work.

### B · Bricolage Grotesque, Instrument Sans, and JetBrains Mono

- **Strengths.** The most personality at display sizes, with distinctive curves and terminals. Instrument Sans is readable and slightly narrow, which fits long Portuguese words in cards. JetBrains Mono is highly legible for labels and numbers.
- **Risks.** It has the largest payload and three families to coordinate. The maximum weight is 800, so the display is a little lighter than the reference. The weight-only file serves the default text optical size (opsz 14). The distinctive display cut needs `axes: ['opsz']`, which raises Bricolage to 75.1 KiB and the system to 144.0 KiB. Adding the width axis as well brings Bricolage to 128.5 KiB.

### C · Schibsted Grotesk and IBM Plex Mono

- **Strengths.** The strongest editorial voice, suited to the portfolio's editorial layout. One family serves display and body. The heavy weights are dense and confident, closest to the reference's heavy display.
- **Risks.** It sets wider than the other bodies, so the hero lede and card summaries wrap one line earlier on mobile. At 900 with −0.04em tracking, word spaces in the hero tighten noticeably, so the tracking would need easing. Its tabular figures widen the comma and period ("R$ 750 , 00"), so standalone prices must use proportional figures. IBM Plex Mono is static, so each extra weight costs a file.

## Shared findings

- **Diacritics.** All three systems render the full Portuguese set (`á â ã à ç é ê í ó ô õ ú`, uppercase included) from the `latin` subset. `latin-ext` is not needed for current content. Approved names such as Antônio and Araújo render correctly in every role.
- **Arrows.** No served Google Fonts subset includes `←` (U+2190) or `→` (U+2192) for any candidate. Those characters would render in a system fallback font. The references use arrows in "Detalhes →", "← Voltar para serviços", and project rows. Use decorative inline SVG icons hidden from assistive technology, as the specimen does.
- **Figures.** Use proportional figures for standalone prices and tabular figures only where prices align in a column. Geist and Bricolage handle both cleanly.
- **Responsive sizes.** The specimens use fluid sizes. The hero is `clamp(2.5rem, 1rem + 6vw, 5.5rem)` (40 px at 320–375, 88 px at 1280). The professional name is `clamp(3rem, 1rem + 8vw, 6.5rem)`, body text 16–17 px with 1.55–1.6 line height, and mono labels 12–13 px. These are exploration settings for AMSAF-015, not approved values.
- **Overflow.** No system produced horizontal overflow at 1280, 375, or 320 px in headless Edge.

## Licensing

All candidates are licensed under the SIL Open Font License 1.1, verified against the `METADATA.pb` files in the Google Fonts repository on 2026-11-08.

| Family | Designers |
| --- | --- |
| Geist, Geist Mono | Andrés Briganti, Mateo Zaragoza, Guillermo Rauch, Evil Rabbit, José Rago, Facundo Santana |
| Bricolage Grotesque | Mathieu Triay |
| Instrument Sans | Rodrigo Fuenzalida, Jordan Egstad |
| JetBrains Mono | JetBrains, Philipp Nurullin, Konstantin Bulenkov |
| Schibsted Grotesk | Bakken & Bæck, Henrik Kongsvoll |
| IBM Plex Mono | Mike Abbink, Bold Monday |

The OFL permits commercial use, web embedding, and self-hosting without fees. The fonts cannot be sold on their own. Modified versions cannot use a Reserved Font Name. If font files are committed for `next/font/local`, include each family's licence text alongside them.

## Loading and performance

- **Recommended loader.** Use `next/font/google` in the root layout with variable fonts, `subsets: ['latin']`, and CSS variables mapped to the Tailwind theme. Next.js downloads the files at build time and serves them from the site's own domain, so browsers send no requests to Google. It defaults to `display: 'swap'` and generates size-adjusted fallback faces that limit layout shift.
- **Preloading.** Preload only the display and body files. Set `preload: false` on the monospace family, which does not appear in the homepage hero. In Systems A and C, display and body share one file, so the critical path is a single font request.
- **Build dependency.** `next/font/google` fetches from Google Fonts during `next build`. The Cloudflare build path in M4 must allow that request, or the project can commit the WOFF2 files and use `next/font/local` with the licence text.
- **Fallback stacks.** Next.js adds a metric-adjusted fallback automatically. Proposed generic stacks after it:
  - Sans roles: `ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
  - Monospace: `ui-monospace, "Cascadia Mono", "SF Mono", Menlo, Consolas, monospace`

## Recommendation

**Approve System A, Geist and Geist Mono.** It best fits the approved neutral black-and-white foundation and the reference's neo-grotesque structure. It has the lightest and simplest loading profile, one critical file of 28.7 KiB, and no figure or tracking workarounds. Its common use is a real trade-off. The approved direction already places distinctiveness in the wordmark, blue accent, editorial portfolio layout, and M3 personality work rather than in the typeface.

**Alternative: System B** if the owner wants the type itself to carry more personality. Budget for the `opsz` axis (144.0 KiB total) to get its display character.

System C is not recommended for the full site. Its editorial strength fits the portfolio, but wider body setting, tracking adjustments, and the figure workaround add cost on the commercial pages.

## Decisions for AMSAF-015

1. Select a system, or request another combination.
2. Confirm the display weight and tracking, and the type scale for hero, section heading, service title, price, body, and labels.
3. Confirm decorative SVG icons for directional arrows.
4. Confirm the loading approach: `next/font/google` at build time, or committed files with `next/font/local`.
