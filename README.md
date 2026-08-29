# Hunny Farm — hunnyfarm.com

Static site for Hunny Farm raw honey. Built with [Astro](https://astro.build); no framework, no CMS.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Vercel)

Import the repo in Vercel. It detects Astro automatically: build `npm run build`, output `dist`. Point `hunnyfarm.com` at the project under Domains.

## Where things live

- `src/data/honeys.ts` — the four honeys plus maple and buckwheat: names, prices, notes, copy, colors, and `buyUrl`.
- `src/content/journal/*.md` — journal posts. Add a markdown file with the same frontmatter to publish a new one.
- `src/pages/` — home, `honey/[slug]`, `journal`, `farm`.
- `public/jars/` — jar photos with the label removed; the Hunny Farm label is drawn in HTML on top (`src/components/Jar.astro`).

## Before launch

- Replace every `[BRACKETED]` placeholder: beekeeper name, town, email, Instagram, newsletter form action, farm photos.
- Set `buyUrl` on each product to a Stripe Payment Link (or Shopify Buy Button URL). Until then the buttons go nowhere.
- `buckwheat.webp` is a darkened maple jar standing in for a real photo.
