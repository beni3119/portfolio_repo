# Hardik Beniwal — Portfolio

Personal portfolio for **Hardik Beniwal**, AI/ML Engineer.
Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS**.

## Highlights

- **Auto-syncs Medium articles** from the public RSS feed (`@hardik31tkd`) on every build.
- **Auto-syncs GitHub repos** from `beni3119` via the GitHub REST API.
- **Manually-curated LinkedIn articles** (LinkedIn doesn't expose RSS).
- **Two ATS-safe resumes** (Indian + UK/EU/Sponsored) downloadable from `/resume`.
- **SEO**: sitemap, robots, JSON-LD `Person` schema, dynamic Open Graph image, Twitter card.
- **Themes**: light/dark with system-pref + localStorage, no flash on first paint.
- **One source of truth** — content lives in `src/data/*.ts`, edit there and rebuild.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing content

Everything is centralised. To update:

| What you change | File |
|---|---|
| Name, tagline, links, location, visa | `src/data/site.ts` |
| Jobs / internships | `src/data/experience.ts` |
| Projects (incl. detail pages at `/projects/[slug]`) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| LinkedIn articles & featured Medium pins | `src/data/writing.ts` |

Medium posts auto-load from `https://medium.com/feed/@hardik31tkd`. To "feature" any Medium post (highlighted ring on the card), add its URL to `featuredMediumUrls` in `src/data/writing.ts`.

To swap the resumes, replace the PDFs in `public/`:

- `public/Hardik_Beniwal_Resume_India.pdf`
- `public/Hardik_Beniwal_Resume_UK_EU.pdf`

## Production build

```bash
npm run build
npm start
```

## Deployment

### Vercel (recommended, 1-click)

1. Push this folder to a GitHub repo (e.g. `beni3119/portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Accept defaults. Done.

You'll get `<your-project>.vercel.app` instantly. Add a custom domain in **Project → Settings → Domains** when ready.

### GitHub Pages (free forever)

Add `output: "export"` to `next.config.mjs` and run `npm run build`. The static site lives in `out/`. Push that to `gh-pages` branch (or use a workflow). Note: when using static export, GitHub repos still fetch at build time, but the OG image needs `runtime: "edge"` to be removed.

### Cloudflare Pages

Connect the repo, set framework preset to **Next.js**, build command `npm run build`. Done.

## Customising the look

- **Accent colour**: edit `--accent` HSL in `src/app/globals.css` (`:root` and `.dark`).
- **Initials avatar**: change `initials` in `src/data/site.ts`.
- **Tagline**: change `tagline` and `longTagline` in `src/data/site.ts`.

## Optional next steps

- Replace the initials avatar with a real headshot: drop `headshot.jpg` into `public/` and update `Hero.tsx`.
- Wire a real contact form (Formspree / Resend). Currently the contact CTA is a `mailto:` link.
- Enable Vercel Analytics: `npm install @vercel/analytics` and add `<Analytics />` to `RootLayout`.
- Add an MDX blog under `src/app/blog/` if you want first-party posts (instead of just linking out to Medium).
