# Cloudflare Workers cutover (Dayspring marketing site)

This repo stays deployable on **Vercel** (`.vercelignore`, `api/contact.ts`,
platform defaults). Cloudflare Workers is additive. Do not change DNS or
promote a Worker to production from this PR.

Analytics tags (PostHog, Google Ads) are not present in this tree and were
not added or rewritten. Leave them alone if they land later.

## Build

```bash
npm install
npm run build          # Astro static output → dist/
npx wrangler deploy --dry-run
```

Production deploy (after you are ready; **not** this PR):

```bash
npm run deploy:cf      # build + wrangler deploy
```

Wrangler serves `dist/` as static assets (`wrangler.jsonc` → `assets.directory`).

| Concern | Vercel today | Workers |
| --- | --- | --- |
| Pretty HTML (`/why` and `/why/`) | 200 both | `html_handling: auto-trailing-slash` |
| Unknown path | 404, not `index.html` | `not_found_handling: 404-page` |
| Headers | HSTS `max-age=63072000`, `Access-Control-Allow-Origin: *`, `Cache-Control: public, max-age=0, must-revalidate` | `public/_headers` (copied into `dist/`) |
| Path redirects | none (no `vercel.json`) | `public/_redirects` (none) |
| Apex → www | 307 at the domain | attach both hostnames; 307 apex → www (below) |

`/api/contact` is a Vercel serverless function. The Worker is assets-only, so
that POST will 404 on Cloudflare until it is ported or proxied. Keep Vercel
in front of `/api/*`, or move the handler, **before** pointing the domain at
the Worker.

## Domain attach (do not do this yet)

1. Deploy once to a `workers.dev` / preview URL: `npm run deploy:cf`.
2. Confirm routes on that URL (see the PR for the local `wrangler dev` list).
3. In the Cloudflare dashboard: Worker → **Domains & Routes** → **Add**  
   `www.usedayspring.app`.
4. Add `usedayspring.app` (apex) on the same Worker.
5. Configure apex → `https://www.usedayspring.app/:path*` as a **307** (today’s
   Vercel status). Bulk Redirects or a tiny `run_worker_first` host check both
   work; `_redirects` cannot match on hostname.
6. Only then change DNS (apex + www) from Vercel to Cloudflare. This PR
   does not do that.

## Rollback

Vercel project, Git integration, and env vars are unchanged.

1. Point DNS for `usedayspring.app` and `www.usedayspring.app` back to Vercel.
2. Do not delete `wrangler.jsonc`; leave the Worker idle.
3. Confirm `/`, `/help/contact`, and `POST /api/contact` on Vercel.
4. Apex should again 307 to `https://www.usedayspring.app/`.
