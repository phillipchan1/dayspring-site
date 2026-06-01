# Dayspring — marketing site

The marketing website for **Dayspring**, a private AI journal for reflective
Christians. Built with [Astro](https://astro.build), TypeScript, and scoped CSS.
Static-first and island-light — almost no JS ships.

## Design language — "First Light"

A warm dawn rising over a dark, quiet page. Restraint is the brand. Tokens live
in [`src/styles/global.css`](src/styles/global.css) as CSS custom properties
(`--ink`, `--paper`, `--dawn-1/2/3`, `--gold`, …). Fonts: **Fraunces** (display),
**Newsreader** (body), **JetBrains Mono** (labels/accents).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # preview the build
```

Deploy target: Vercel or Netlify (static output, no adapter needed).

## Structure

```
reference/            # source-of-truth design + copy (not shipped)
src/
  content/            # all copy as data — edit here, not in markup
    site.ts           # nav, footer, pricing, downloads, shared strings
    home.ts           # home page copy
  styles/global.css   # First Light tokens, film grain, reduced-motion
  layouts/Base.astro  # html shell, meta/OG, fonts, Nav + Footer
  components/
    Nav.astro          # sticky, blurs on scroll, iOS + macOS pills
    Footer.astro
    DawnGlow.astro     # reusable radial backlight (stage/corner/bloom)
    SectionReveal.astro# IntersectionObserver fade-up wrapper
    Hero.astro         # the dawn — one dramatic motion moment
    EditorMock.astro   # framed editor: focus dimming, caret, theme swatches
    PhoneFrame.astro   # dark device shell — native mock OR real screenshot
    LetterCard.astro   # the "letter to yourself" reflection card
    PricingTiers.astro # 3 tiers, Annual featured
  pages/
    index.astro        # Home (matches reference/dayspring-prototype.html 1:1)
```

## Screenshots

Real product screenshots slot into framed components without layout shift —
see [SCREENSHOTS.md](SCREENSHOTS.md).

## Accessibility & motion

- Respects `prefers-reduced-motion`: the dawn animation and scroll reveals are
  disabled; content shows immediately.
- Semantic HTML, keyboard-focusable nav/CTAs with visible focus rings, skip link.

## Status

All six routes are built:

- **/** — Home: hero → problem → editor → year-in-review → formation → the Gain
  → import → privacy → pricing → footer.
- **/why** — the manifesto (four figures, each earning a feature).
- **/features** — three deep dives (editor / year-in-review / formation), each
  with a live app-element mock, layouts alternating left/right.
- **/faq** — native `<details>` accordion (no JS), honest trust-load answers.
- **/privacy** — stewardship framing; only true claims, no overclaiming.
- **/maker** — a personal founder note (first-person; ⚠️ draft for Phil to
  make his own — confirm the signature and add real specifics).

Copy follows the Notion brand doc + one-pager + manifesto and their language
guardrails (use: becoming/formation/seasons/the arc/carried; ban: "journaling
app"/streaks/"faith journey"). The faith signal stays to the name, the
Formation section, and the single Vault line.

## Downloads

- **macOS** pill always serves the **latest `.dmg`** from GitHub Releases
  (`phillipchan1/dayspring-releases`). Because the asset name is versioned
  (`Dayspring_<v>_aarch64.dmg`), GitHub's stable `/releases/latest/download/<name>`
  URL can't be used directly, so `Nav.astro` progressively enhances the link:
  the `href` defaults to the latest-release **page** (works with no JS / if the
  API is down), and on hover/focus a tiny script resolves the exact `.dmg` via
  the GitHub REST API (CORS-enabled) and rewrites the `href` to a direct download.
  - **To make this a clean, zero-JS link instead:** have the release CI also
    publish a stable-named copy (e.g. `Dayspring-aarch64.dmg`), then point the
    pill straight at
    `https://github.com/phillipchan1/dayspring-releases/releases/latest/download/Dayspring-aarch64.dmg`.
- **iOS** is rendered as a non-clickable "Soon" pill until it ships.

### Open follow-ups
- Swap the custom App Store pills for Apple's official badges before launch.
- Replace the placeholder OG card (`public/og/dayspring-og.svg`) with a 1200×630
  PNG and point `Base.astro`'s `ogImage` back to it.
- Drop real screenshots into the framed slots (see `SCREENSHOTS.md`).
