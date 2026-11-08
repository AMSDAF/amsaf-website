# AMSAF

AMSAF is Antônio Marcos's independent developer identity and the name of his official website project. The site helps prospective clients understand his website services and gives professional audiences a separate place to explore his work.

## Public website

| Route                      | Purpose                                                                                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                        | Commercial homepage for Landing Pages, Portfolios, Institutional Websites, and Commercial Websites. Each category presents a standard scope and an approved starting price. Clients can request a customized proposal and choose optional recurring maintenance. |
| Four product detail routes | One page for each service. See the [M1 route plan](docs/BACKLOG.md#epic-01--structural-foundation-m1) for planning and the [approved route map](docs/ARCHITECTURE.md#approved-public-routes).                                                                    |
| `/portfolio`               | Antônio Marcos's professional profile and verified work, separate from the commercial Portfolios service.                                                                                                                                                        |

The approved routes also include `/contato` for contact and `/portfolio/projetos/[slug]` for project details. WhatsApp is the primary contact channel. The site uses no contact forms, artificial scarcity, or manipulative sales tactics. Public content is in Brazilian Portuguese. Project documentation and technical conventions are in English.

The Claude Design prototype establishes the structural direction. Visual identity and interaction details are open for refinement. The inherited Portfolio Foundation scaffold runs at `/`. Service details are available at `/landing-pages` and `/portfolios`. The AMSAF homepage, remaining product details, contact page, professional portfolio, and project details are planned.

## Local development

The Next.js application lives in `frontend/`. Use Node.js 20.9 or later and npm. [Next.js installation requirements](https://nextjs.org/docs/app/getting-started/installation)

```sh
cd frontend
npm ci
npm run dev
```

Open <http://localhost:3000>. Run checks from `frontend/`.

```sh
npm run lint
npm run build
npm run typecheck
npm test
npm run format:check
```

The build generates Next.js route types used by the standalone type check on a fresh checkout. The repository lockfile defines the dependency versions.

## Project documentation

- [Commercial offer](docs/commercial-offer.md) for approved pricing, scopes, payment and maintenance terms, and internal assumptions.
- [Roadmap](docs/ROADMAP.md) for milestone scope and exit criteria.
- [Backlog](docs/BACKLOG.md) for tasks, acceptance criteria, and evidence.
- [Design system](docs/DESIGN_SYSTEM.md) for approved requirements and open design directions.
- [Architecture](docs/ARCHITECTURE.md) for the inherited baseline, required adaptations, and technical risks.
- [Development log](docs/DEV_LOG.md) for effort, reuse, decisions, and rework.
- [Repository instructions](AGENTS.md) and [frontend instructions](frontend/AGENTS.md) for contributors.
