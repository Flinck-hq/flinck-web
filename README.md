# Flinck Landing Page

Marketing site for [Flinck](https://getflinck.pro)—the agricultural social marketplace for farmers, buyers, businesses, banks, government, and ag investors.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:2000](http://localhost:2000).

The first page load after startup may take 20–30s while webpack compiles; later navigations are fast. Dev uses webpack (not Turbopack) for stability in this monorepo layout.

## Build

```bash
pnpm build
pnpm start
```

## Content

- **Site copy & audiences:** `lib/site-content.ts`
- **Blog posts:** `lib/blog.ts` (add posts to the `blogPosts` array)
- **Sitemap:** `app/sitemap.ts` (static routes, `/for/*`, and `/blog/*` generated automatically)

## Routes

| Path | Description |
|------|-------------|
| `/` | Homepage |
| `/how-it-works` | Platform workflow & pillars |
| `/for/[slug]` | Stakeholder pages (farmers, buyers, banks, etc.) |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog article |
| `/partners` | Institutional partnerships |
| `/download` | Android app download |
| `/policy` | Privacy policy |

Legacy paths `/platform`, `/capabilities`, and `/workflow` redirect to `/how-it-works`.

## Brand

Use **Flinck** (not Flink) in all user-facing copy. Canonical site URL: `https://getflinck.pro`.
