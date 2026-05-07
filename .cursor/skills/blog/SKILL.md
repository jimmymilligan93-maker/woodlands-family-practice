---
name: blog
disable-model-invocation: true
description: >-
  Generates Woodlands Family Practice long-form blog posts from keywords/questions CSVs,
  Pexels imagery, brand reference docs, and on-page SEO. Mirrors the technical structure of
  app/blog/mental-health-care-plan/page.tsx. Use when the user invokes /blog, asks for a new
  blog post, keyword-cluster article, or SEO blog publish workflow for this repository.
---

# Blog post generation (Woodlands Family Practice)

## Before you start

1. Read **`CLAUDE.md`** (voice, image limits, research transparency, on-page SEO pointer).
2. Read **`on-page-seo.md`** (project root) and apply every **blog-applicable** item.
3. Read **`references/voice.md`**, **`references/stats.md`**, **`references/stories.md`**, **`references/opinions.md`**, **`references/humour.md`** before drafting body copy.
4. Confirm **`PEXELS_API_KEY`** exists for build-time Pexels fetch (see **`lib/pexels.ts`**). Without it, fallbacks use Unsplash URLs in the images module.

## Step 1 — Pick source keyword(s)

Choose **one** primary entry using project CSVs:

| File | Use when |
|------|-----------|
| **`keywords/keywords.csv`** | Broad informational “what is / how does” topics (`Keyword`, intent, content type, stage, notes). |
| **`keywords/questions.csv`** | Question-shaped queries (`Keyword` column = natural-language question). |

**Cluster (minimum):**

- **1 primary keyword** → drives H1, title tag (length rules below), slug, first-100-words placement, canonical focus.
- **4–10 supporting phrases** → drawn from the **same CSV** (adjacent rows, same service/theme), **`Notes`**, or semantically related questions you would expect in **People Also Ask**. Map each to an **H2** or FAQ item; do not keyword-stuff.

Record the cluster in your working notes (not necessarily in the published article).

## Step 2 — URL slug & route

- **Slug:** lowercase, hyphens, under 60 characters, primary keyword baked in; no underscore.
- **Path:** **`app/blog/<slug>/page.tsx`** (same depth as **`mental-health-care-plan`**).
- **Stable:** never change slug after publish without redirects (static export).

## Step 3 — Technical template (non-negotiable)

**Clone the structure and behaviour of** **`app/blog/mental-health-care-plan/page.tsx`**, not the mental-health topic. Every new post must reuse the same **technical skeleton**:

- **`generateMetadata()`** async: canonical, **`robots`**, Open Graph (**`article`**, **`publishedTime`**, **`modifiedTime`**), Twitter; OG/Twitter images from first Pexels hero via **`pexelsSizedUrl(..., 1080)`** when URL is `images.pexels.com`.
- **JSON-LD scripts:** `FAQPage`, `BreadcrumbList`, `BlogPosting`, `MedicalOrganization`, `Person` (clinical team + **`/team`**), aligned with existing shapes.
- **Article UI:** hero **`section`** (full-bleed **`Image`** **`fill`**, **`priority`**, **`fetchPriority="high"`**, navy overlay, eyebrow, H1, byline with **`<time>`** published + updated, breadcrumb in hero).
- **Body shell:** “About the authors” card → TOC grid (**`toc-link`** anchors) → **`MidPostImage`** once before a mid H2 → prose sections → FAQ **`dl`** → disclaimer (**`text-slate`** border-top) → **`BookingCtaBanner`** → **`Footer`**.
- **Back-to-top** control: **`bottom-24 md:bottom-6`** so it clears the mobile sticky bar.
- **Links:** body/internal use **`link-inline`**; external **`target="_blank"`** **`rel="noopener noreferrer"`**.
- **Images module:** add **`lib/blog/<slug>-post-images.ts`** modelled on **`lib/blog/mental-health-post-images.ts`**: `cache`, **`searchPexelsPhotos(query, 2)`**, **`pexelsSizedUrl`** widths **720** (hero) and **680** (inline), Unsplash fallbacks sized **720 / 680**, never duplicate the same **`src`** in one post.

**Image rules (CLAUDE.md):** max **2** Pexels images unless the post exceeds **1,500 words** (then third allowed); hero + one mid-band only; never repeat an image.

See **[template-checklist.md](template-checklist.md)** for a line-by-line parity checklist.

## Step 4 — Voice & content composition

- **Opening:** human observation or scene (**voice.md**); **not** a dictionary definition or “In Australia’s healthcare system…”.
- **“I”** at least twice in the first three paragraphs where natural.
- **Australian English**, **Medicare** framing, **GP** (not “primary care physician”).
- **Stats:** weave **`references/stats.md`** numbers with brief attribution where relevant; do not stack multiple statistics in one paragraph (**rule of three** / spacing per project guides).
- **Stories:** **At most one** per post, from **`references/stories.md`** only (no invented anecdotes).
- **Opinions:** **At most one** strong take per post, from **`references/opinions.md`**, tied to a real number.
- **Humour:** follow **`references/humour.md`**; skip if topic is inappropriate.
- **Honesty:** include **when not to use the clinic / when ED or specialist is appropriate** where clinically relevant.
- **Banned:** AI-tell phrases, exclamation marks, emojis, explaining research methodology, citing “ranking guides” or SEO process in copy.

Target **at least 1,500 words** for long-form posts unless user specifies shorter; align length with **`on-page-seo.md`** SERP guidance.

## Step 5 — On-page SEO execution

From **`on-page-seo.md`**, for each blog:

- Title **~50–60 chars** including layout suffix **`| Woodlands Family Practice`** — craft **`metadata.title`** accordingly.
- Meta description **150–160 chars**, keyword + benefit + soft CTA (phone/booking).
- **One H1** with primary keyword; logical **H2**/**H3** ladder.
- **TOC** + jump anchors for major H2s; **Back to top**.
- **FAQ:** **4–8** items, **2–4 sentences** each + **FAQPage** JSON-LD matching visible copy.
- **Internal:** **3–5** contextual links with descriptive anchors (**`link-inline`** / no “click here”).
- **External:** **2–3** authoritative **`.gov` / Healthdirect / peak bodies**; **`noopener noreferrer`**.
- **Article schema** (`BlogPosting`): headline, dates, author URL **`/team`**, publisher, **`image`** when available.

## Step 6 — Publish checklist (repository)

- [ ] **`app/blog/<slug>/page.tsx`** complete and matches template.
- [ ] **`lib/blog/<slug>-post-images.ts`** with topic-specific Pexels **`query`** string.
- [ ] **`public/sitemap.xml`**: add **`loc`** for **`https://www.wfpwa.com.au/blog/<slug>`** and refresh **`lastmod`** when material.
- [ ] **`components/blog/BlogGrid.tsx`**: prepend a card for the new post (title, excerpt, date, image href to hero or grid asset, **`href`**).
- [ ] **`npm run build`**: route **`○` Static**; no SSG violations.

## Step 7 — Performance & accessibility (blog defaults)

- Hero **`sizes`** tuned for mobile LCP (see mental-health page pattern).
- **`MidPostImage`:** explicit **`width`/`height`**, **`loading="lazy"`**, **`sizes`** for content column.
- Do not **`priority`** the navbar logo except on **`/`** (handled in **`Navbar`**).

---

## Quick reference — files to read each run

| Purpose | Path |
|--------|------|
| Canonical blog template | `app/blog/mental-health-care-plan/page.tsx` |
| Pexels + sizing | `lib/pexels.ts`, `lib/blog/mental-health-post-images.ts` |
| Keywords | `keywords/keywords.csv`, `keywords/questions.csv` |
| Voice / stats / stories / opinions / humour | `references/*.md` |
| On-page checklist | `on-page-seo.md` |
| Project rules | `CLAUDE.md` |
