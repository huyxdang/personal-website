# huyxdang.com — personal site (Astro)

Personal site of Huy X. Dang: an About page plus essays written in markdown.
Migrated from Create React App in July 2026. Design is deliberately modeled on
two references: the writing list follows rajan.sh, and the essay template
follows thinkingmachines.ai's article pages ("Inkling"). When in doubt about a
design decision, match those sites — several values below were measured
directly from them and should not be "improved" casually.

## Commands

- `npm run dev` — dev server on :4321
- `npm run build` — static build to `dist/` (always run after changes; it
  validates content frontmatter against the schema)
- `npm run preview` — serve the built site on :4321

## Publishing an essay

One file in `src/content/writing/` per post. `.md` for plain prose, `.mdx`
only if it uses components (e.g. Sidenote). Frontmatter:

```yaml
---
title: "Post Title"       # a \n forces a line break in the essay <h1>
                          # (collapses to a space on /writing and in <title>)
date: 2026-07-21          # drives sorting and all displayed dates
description: "One line."  # shown on /writing and used as meta description;
                          # NOT rendered on the essay page itself (by design)
external: "https://..."   # optional — entry links out instead of rendering
                          # a local page (used for old Notion posts)
emphasize:                # optional — ToC entries that get the › hover arrow
  - capabilities          # values are heading slugs (lowercase-hyphenated)
hero: "/images/x.png"     # optional — artwork between title block and body,
                          # 825px panel (wider than the 660px text column);
                          # image files live in public/images/
---
```

Headings: `##` becomes a ToC entry; `###` nests (indented) under it. The ToC,
active-section tracking, and anchor links all derive from headings — no config.
The template auto-prepends an "Introduction" ToC entry anchored to the top of
the body — never write an `## Introduction` heading in a post (you'd get two
entries); just open with prose.

Margin citations (Tufte-style), only in `.mdx`:

```mdx
import Sidenote from "../../components/Sidenote.astro";
...text<Sidenote id="unique-id">
  <a href="https://...">Title</a> (Author, Year)
</Sidenote> continuing text...
```

## Design system (measured values — keep faithful)

- Essay body: serif (`--serif`: Iowan Old Style → Lora → Georgia), 17px/1.6,
  color `#282828`, column `max-width: 660px`. Matches thinkingmachines.ai.
- Essay date: sans 15px, `rgb(107, 104, 102)` — measured from their site.
- Small UI (ToC, dates, descriptions): system sans (`--sans`), gray `#676767`.
- Page background is white everywhere; the old cream `#f8f3ef` survives only
  as accents (blockquotes, code panels, figures). Do not reintroduce it as a
  page background.
- The yellow `Huy` highlight on About stays yellow (`#fff200`) — owner's call,
  alternatives were offered and declined.
- ToC active state: color change only, **never bold**; the sliding 4px ink dot
  (`.toc-active-marker`) animates with `cubic-bezier(0.22, 1, 0.36, 1)` —
  copied from thinkingmachines.ai.
- ToC hover: faint underline (`rgba(40,40,40,0.22)`, 1px, offset 3px) plus the
  `›` arrow, which appears **only** for headings listed in `emphasize`. The
  arrow is decorative, not clickable — an expandable/folding ToC was built
  once and explicitly rejected by the owner. Do not bring it back.
- When hovering the active ToC entry, the arrow replaces the dot
  (`:has()` rule in global.css).
- The writing list has no visible "Writing" header — just an `sr-only` h1.
  Entries render as `Title (Mon YYYY)` + one-line description.
- Site nav (MiniNav.astro, rendered once in Base.astro): letterspaced sans
  wordmark "HUY X. DANG" top-left linking home, About/Writing top-right,
  active page in ink. Edge-aligned frame, never centered — the owner
  explicitly moved away from a centered nav (thinkingmachines.ai pattern).

## Gotchas (learned the hard way)

- **Never put `overflow-x: hidden` or `clip` on `html`/`body`** — hidden breaks
  `position: sticky` (the ToC), and clip on the root kills page scrolling
  entirely. Horizontal clipping lives on `.page-shell` only; `.essay-shell`
  must stay unclipped for the sticky rail.
- The ToC script uses a plain scroll listener calling `update()` directly —
  no rAF throttling. rAF never fires in headless/preview contexts, which
  silently freezes the active-state tracking. The work is trivial; leave it
  unthrottled.
- Dot positioning uses `getBoundingClientRect()` deltas, not `offsetTop` —
  list items are `position: relative` (for the hover arrow), which corrupts
  `offsetTop`-based math.
- `/blog` → `/writing` redirect lives in `astro.config.mjs` (old links exist
  in the wild).
- Old post dates were recovered from git history + Substack metadata; they're
  correct — don't "fix" them.

## Content notes

- `demo-essay-format.mdx` (if present) is an uncommitted local template demo —
  never commit or deploy it.
- Four posts are `external:` stubs pointing at Notion; the long-term plan is
  migrating them in-house one at a time.
- About page copy/layout is a faithful port of the old CRA site and should
  visually match it (cream → white background is the only sanctioned change).

## Deploy

Target is Vercel (analytics already wired via `@vercel/analytics/astro`);
`public/CNAME` is a leftover from gh-pages and can go once Vercel serves the
domain.
