# AMSAF architecture

## Scope and baseline

AMSAF is one Next.js application in `frontend/`, with project documentation at the repository root and in `docs/`. The commercial homepage and professional portfolio are separate routes within that application. Start with static, typed content. A protected administrative panel and persistent editing follow the integration decisions in M4. A separate backend, generic CMS, theme system, and plugin platform are outside the current scope.

The inherited baseline is Next.js 16.4.1 with App Router and Turbopack, React and React DOM 19.3.0, TypeScript 5.9.3 in strict mode, Tailwind CSS and its Turbopack loader at 4.3.3, Vitest 3.2.4, and npm. See [package.json](../frontend/package.json) and [package-lock.json](../frontend/package-lock.json). The `@/*` alias resolves to `frontend/src/*`.

| Location                   | Current responsibility                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `frontend/src/app/`        | Root layout, scaffold homepage, global styles, robots, and sitemap. The layout sets `lang="pt-BR"`.          |
| `frontend/src/components/` | Shell, hero, sections, gallery, and card. The shell reads site configuration and the card uses `next/image`. |
| `frontend/src/config/`     | Typed static scaffold content and centralized SEO settings.                                                  |
| `frontend/src/types/`      | Shared content and navigation contracts.                                                                     |
| `frontend/public/gallery/` | Local demonstration SVGs.                                                                                    |
| `frontend/tests/`          | Unit tests for the default indexing and sitemap behavior.                                                    |

Indexing is currently disabled and the canonical site URL is unset. The layout uses the indexing flag, robots disallows crawling, and the sitemap function returns no entries. When authorized for production, keep route metadata, robots, and sitemap aligned with the central policy. Include both public routes in the production sitemap and keep previews non-indexable. Protect private resources through authorization.

## Required adaptations

- Replace the template-specific copy, navigation, gallery examples, and metadata with AMSAF content in M1. Review the shell and component contracts for reuse across `/` and the new `/portfolio` route. The inherited package name remains `portfolio-foundation`.
- Keep public copy in Brazilian Portuguese and document approved visual choices in M2. Existing styles provide a neutral scaffold.
- Reassess the inherited hosting and service assumptions in M4. Vercel was a template possibility. Cloudflare is the deployment target to validate. Authentication, content and media providers, and optional analytics or search integrations remain undecided. None of these integrations are configured in the repository.

## Technical risks and validation gates

| Risk                       | What to decide and verify                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cloudflare deployment      | The repository has no Cloudflare runtime configuration. Choose a deployment path that supports the pinned Next.js App Router app and the panel's server needs. Verify the build, public and metadata routes, static assets, environment bindings, and representative server requests in a Cloudflare preview. A local Next.js build alone cannot verify runtime compatibility. |
| Authentication             | Decide the provider, operator access policy, and session lifecycle. In preview, verify cookie and callback behavior on the selected runtime, server-side authorization for protected reads and mutations, sign-out, and rejection of expired or unauthorized sessions. Keep credentials server-side.                                                                           |
| Persistent content storage | Decide editable fields, schema, source of truth, publication and cache behavior, migrations, and recovery. Verify authorized writes, survival across redeploys, public reads, and cache refresh. Treat bundled static configuration as an initial content source.                                                                                                              |
| Image management           | Local SVGs exercise bundled assets only. Choose storage, delivery and optimization, upload limits and validation, access controls, alt text handling, and replacement and deletion rules. Verify representative uploads and `next/image` behavior on the target runtime. Test recovery from partial failures that could leave broken references or orphaned files.             |

Cloudflare's current Next.js guidance is a starting point for the compatibility check. Record the selected path and evidence in M4 before relying on it for M5. [Cloudflare Next.js deployment guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)

## Dependency rules

- `app` composes route-level UI and can use components, configuration, types, and feature or service modules once they are needed.
- Keep feature-specific data, types, and behavior close to their feature. Create `features/` or `lib/` when concrete responsibilities justify them. Avoid dependencies between sibling features and cycles between layers.
- Shared components can consume typed props and shared contracts. Keep feature-specific content in its owning route, feature, or configuration. Data, configuration, services, and types do not import presentation. Configuration may import shared types.
- Keep the indexing policy centralized for metadata, robots, and sitemap. Give external integrations clear boundaries and introduce them when the corresponding task requires them.

## Conventions

Use kebab-case for filenames and directories, PascalCase for components and types, and camelCase for functions and variables. Use English and Conventional Commits for commit messages. Use `AMSAF-###` for tasks and `EPIC-##` for epic identifiers.
