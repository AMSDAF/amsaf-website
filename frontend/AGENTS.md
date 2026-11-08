<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## AMSAF frontend

- Apply the root project instructions. Keep this as a single Next.js application. Read the relevant installed Next.js guide under `node_modules/next/dist/docs/` before writing application code.
- Use App Router routes and layouts under `src/app/`. Keep data, types, and presentation separate where useful. Follow the architecture's dependency rules and reuse existing components where they fit.
- Keep user-facing copy and accessible labels in Brazilian Portuguese. Use the approved structure for `/` and `/portfolio`. Consult the design system before introducing visual choices.
- Keep public indexing disabled until the production domain and publication are authorized. Keep secrets server-side and check the selected Cloudflare runtime before relying on server APIs or image delivery.
- Use the npm scripts in `package.json` and the root README for validation. Generate Next.js route types before standalone type checking on a clean checkout.
