# AMSAF design system

## Confirmed structure and content

The committed Claude Design exports establish the structural direction below. They provide hierarchy and navigation context. Example copy, prices, claims, media, palettes, typography, spacing, and interaction behavior need separate approval.

| Reference                                                                                          | Route and section order                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Commercial homepage](references/Home%20%28%20%29.pdf)                                             | `/`. Header and WhatsApp → introduction with site preview → digital presence and checklist → four service offers and maintenance options → selected work → process → developer introduction with portfolio link → WhatsApp contact → footer. |
| [Landing Pages product detail](references/P%C3%A1gina%20de%20produto%20%28%20landing-pages%29.pdf) | `/landing-pages`. Header and return to services → product selector → introduction, audience, base scope and customization, with starting-price and WhatsApp summary → footer with professional portfolio link.                               |
| [Professional portfolio](references/Portf%C3%B3lio%20profissional%20%28%20portfolio%29.pdf)        | `/portfolio`. Professional section navigation → introduction → skills → experience and education → software projects → return to commercial services.                                                                                        |

Four dedicated product pages are required for M1. The Landing Pages export is the only product-detail reference. The service slugs are approved in the [public route map](ARCHITECTURE.md#approved-public-routes). Confirm category-specific differences in AMSAF-002. The Portfolios product is a commercial service with its own route. The prototype's homepage preview and checklist establish content roles, with behavior to be confirmed for M1.

- The commercial homepage at `/` explains the four service categories, their standard scopes, and approved starting prices. It presents customized proposals and recurring maintenance as options.
- The professional portfolio at `/portfolio` presents Antônio Marcos and verified work. Its purpose is distinct from the Portfolios service.
- The approved route map adds `/contato` and `/portfolio/projetos/[slug]`. Contact uses WhatsApp without a form. Project details share a structure for project-specific content, technologies, decisions, and verified results. Their section order still needs review.
- Use Brazilian Portuguese for public copy, labels, and accessible names. Keep pricing and scope clear. Use WhatsApp as the primary contact action.
- Exclude contact forms, artificial scarcity, and manipulative sales tactics. Publish testimonials and results only when verified and approved.

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
