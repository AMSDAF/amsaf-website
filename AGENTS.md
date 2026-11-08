<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Inspect repository state, applicable instructions, and relevant documentation before editing. Preserve unrelated changes.
- Keep the Next.js application in `frontend/` and project documentation at the root or in `docs/`. Read `frontend/AGENTS.md` before changing the application.
- Use English for documentation and technical conventions. Use Brazilian Portuguese for user-facing site content.
- Use the approved Claude Design prototype as the structural reference. Check the design system for visual decisions and distinguish exploratory ideas from approved requirements.
- Keep the commercial homepage and professional portfolio at `/portfolio` distinct. Follow the README's commercial requirements. Use only approved prices and verified portfolio content or claims.
- Keep dependencies and abstractions tied to concrete needs. Follow the naming and commit conventions in `docs/ARCHITECTURE.md`.
- Run scope-appropriate checks and report any unavailable validation. Keep documentation aligned with implementation. Never stage, commit, or push without explicit authorization.

## Graphify

- When exploring architecture, dependencies, or reuse opportunities, consult existing Graphify outputs in `graphify-out/` when available. Graphify is optional. Verify findings against the relevant source files and project requirements.
- During implementation and analysis, reuse the existing graph without regenerating it. If the graph is missing, stale, or incomplete, continue with source verification.
- Regenerate the graph only after an `AMSAF-###` task has been approved and completed, and only if the existing graph is outdated or a new graph is necessary.
- Keep generated `graphify-out/` artifacts local and excluded from Git.

## Backlog work

1. Locate the requested `AMSAF-###` task and acceptance criteria in `docs/BACKLOG.md`.
2. Review `docs/ARCHITECTURE.md`, the relevant milestone in `docs/ROADMAP.md`, and `docs/DESIGN_SYSTEM.md` for interface work. Confirm tooling against the README and actual project files.
3. Report architectural decisions and blockers. Investigate and report conflicts among requirements, architecture, and implementation before changing scope.
4. Execute only the requested task. Validate it and record status, evidence, and blockers in the backlog. Mark a task `Done` when its acceptance criteria are met and validation evidence is recorded. Reopen it if subsequent review identifies issues.
5. Keep task reports concise. Include changed files, checks, reuse, limitations, and pending decisions. Record material reuse, decisions, and rework in `docs/DEV_LOG.md` when relevant.
