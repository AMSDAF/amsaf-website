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

## Exploratory directions

| Area        | Open for refinement                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity    | Wordmark or text treatment, color roles, typography, and imagery.                                                                                              |
| Layout      | Spacing, density, responsive presentation of service scopes and starting prices, and presentation of verified project work.                                    |
| Components  | Shared navigation, service and project presentations, and a recognizable WhatsApp action. Review hover, focus, and active states where relevant.               |
| Personality | Explore purposeful motion or interactive details and compare them with simpler states. Include keyboard, touch, and reduced-motion behavior in any evaluation. |

Record approved choices and their usage in M2. Record approved interactions and accessibility behavior in M3.
