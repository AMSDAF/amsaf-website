# AMSAF

AMSAF is Antônio Marcos's independent developer identity and the name of his official website project. The site helps prospective clients understand his website services and gives professional audiences a separate place to explore his work.

## Public website

| Route        | Purpose                                                                                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`          | Commercial homepage for Landing Pages, Portfolios, Institutional Websites, and Commercial Websites. Each category presents a standard scope and an approved starting price. Clients can request a customized proposal and choose optional recurring maintenance. |
| `/portfolio` | Dedicated professional portfolio for Antônio Marcos, focused on his profile and verified work. Portfolios sold as a service belong on the commercial homepage.                                                                                                   |

WhatsApp is the primary contact channel. The site uses no contact forms, artificial scarcity, or manipulative sales tactics. Public content is in Brazilian Portuguese. Project documentation and technical conventions are in English.

The Claude Design prototype establishes the structural direction. Visual identity and interaction details are open for refinement. The repository currently runs the inherited Portfolio Foundation scaffold at `/`. The AMSAF homepage and `/portfolio` are planned.

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

- [Roadmap](docs/ROADMAP.md) for milestone scope and exit criteria.
- [Backlog](docs/BACKLOG.md) for tasks, acceptance criteria, and evidence.
- [Design system](docs/DESIGN_SYSTEM.md) for approved requirements and open design directions.
- [Architecture](docs/ARCHITECTURE.md) for the inherited baseline, required adaptations, and technical risks.
- [Development log](docs/DEV_LOG.md) for effort, reuse, decisions, and rework.
- [Repository instructions](AGENTS.md) and [frontend instructions](frontend/AGENTS.md) for contributors.
