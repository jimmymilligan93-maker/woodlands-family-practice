---
name: service
disable-model-invocation: true
description: >-
  Generates Woodlands Family Practice commercial service landing pages (service + suburb) from
  keywords/service-keywords.csv, brand reference docs, and on-page SEO. Mirrors the technical
  structure of app/travel-vaccination-woodlands-perth/page.tsx — Pexels navy band hero and async
  generateMetadata (no WordPress vision image). Shorter than blogs—confirm service, brief explanation,
  trust, booking. Use when the user invokes /service or asks for a new service landing page,
  location page, or suburb combo SEO page for this repository.
---

# Service landing pages (Woodlands Family Practice)

## Purpose & length

Service pages are **not blogs**. They should:

- Confirm **what** the service is and **that** Woodlands offers it.
- Explain **briefly** what happens in a typical appointment (plain Australian English; read **`references/voice.md`** including consulting-room voice).
- Build **enough trust** to book (team link, RACGP context, honest limits).
- Make booking **frictionless** — **phone + online booking** repeated in hero band, quick-answer box, and closing CTA strip.

Target roughly **600–1,000 words** of body prose (excluding FAQ). If content balloons past that, cut tangents — blogs carry depth.

## Before you start

1. Read **`CLAUDE.md`** (voice, fees honesty, on-page SEO pointer).
2. Read **`on-page-seo.md`** — apply every **service-page** item (metadata, headings, FAQ + schema, breadcrumbs, internal/external links, CTAs).
3. Read **`references/voice.md`**, **`references/stats.md`**, **`references/stories.md`**, **`references/opinions.md`**, **`references/humour.md`** before drafting.
4. Use numbers from **`stats.md`** where relevant; **one story max** (`stories.md`); **one strong opinion max** (`opinions.md`); humour **optional** and gentle (`humour.md`).
5. Never explain SEO methodology or competitor research in the copy.
6. Ensure **`PEXELS_API_KEY`** is available for builds that should pull live Pexels band images (see **`lib/pexels.ts`**); without it, band modules fall back to Unsplash URLs.

## Step 1 — Keyword → service + suburb

Use **`keywords/service-keywords.csv`**.

| Column | Use |
|--------|-----|
| **Keyword** | Primary phrase (e.g. `travel vaccination Woodlands Perth`, `mental health care plan Innaloo Perth`). Split into **service theme** + **location intent** (suburb / “Perth northern suburbs” / postcode where natural). |
| **Notes** | PRIMARY vs suburb priority — prefer rows marked PRIMARY for Woodlands core when sequencing builds. |

Derive **supporting phrases** from adjacent rows sharing the same **service** or **suburb** cluster for H2 labels and FAQ — do not paste keyword lists into prose.

## Step 2 — URL slug & route

- **Pattern:** kebab-case, **service-first + suburb/geo**, under **60 characters**, hyphens only — mirror **`/travel-vaccination-woodlands-perth`** (e.g. `/skin-check-karrinyup-perth`, `/mental-health-care-plan-innaloo-perth`).
- **File:** **`app/<slug>/page.tsx`** at repo root App Router (same level as **`travel-vaccination-woodlands-perth`**).
- **Stable:** avoid changing slug after publish without redirects (`output: 'export'`).

## Step 3 — Technical template (non-negotiable)

Copy **structure and behaviour** from **`app/travel-vaccination-woodlands-perth/page.tsx`**, swapping only **service-specific** constants, **`faqItems`**, **`toc`**, Pexels query/fallback copy, and body prose.

**Band imagery — standard for every service page**

- Do **not** use the WordPress **`siteHeroVisionBandUrl`** / **`SITE_HERO_VISION_REMOTE`** pipeline on service pages.
- Add **`lib/services/<slug>-band-image.ts`** modelled on **`lib/services/travel-vaccination-band-image.ts`**: **`cache`**, **`searchPexelsPhotos(<themed query>, 2)`**, **`pexelsSizedUrl`** at width **640** for the navy band **`Image`** (LCP-aligned), **`FALLBACK_BAND`** pointing at a relevant **Unsplash** image (explicit **`?w=640`** style sizing).
- Map page: **`export async function generateMetadata()`** — load band image once; **`openGraph.images`** and **`twitter.images`** use **`pexelsSizedUrl(src, 1080)`** when the URL hosts **`images.pexels.com`**, else use the **`src`** as returned (fallback Unsplash is already absolute).
- Page component **`export default async function …`** — `const bandImage = await get…BandImage()`; navy band **`Image`** uses **`bandImage.src`** and a descriptive **`alt`** tying the visual to the **service**.
- **`MedicalWebPage`** JSON-LD **`primaryImageOfPage.url`** matches the logical share image (**1080** Pexels resize when applicable) — never the legacy WP vision JPEG.

Structural parity otherwise matches the travel template:

- **JSON-LD scripts** (order/shape): **`FAQPage`**, **`BreadcrumbList`** (`Home` → **`Services`** → page title), **`MedicalOrganization`**, **`Person`** (clinical team `worksFor` org), **`MedicalWebPage`** (**`about`** → appropriate **`MedicalProcedure`** / **`MedicalTherapy`** for the topic).
- **`<article>` layout:**
  1. **`PageHero`** — `title` + `subtitle` (address line / suburb coverage).
  2. **Navy band section** — Pexels (or fallback) **`Image`** **`fill`**, **`priority`**, **`fetchPriority="high"`**, **`sizes`** matching travel template (`(max-width: 768px) 100vw, 560px`), overlay, eyebrow line, short supporting **italic** line, **three CTAs**: **`BOOKING_URL`** (terra primary button), **`PHONE_URL`** + **`PHONE_NUMBER`**, **`PRACTICE_ADDRESS_URL`** + address text.
  3. **`bg-cream`** content **`max-w-3xl`**: breadcrumb (**Home** / **Services** / current), clinic line, **`#quick-answer`** white card with **`h2`** + keyword in opening + **phone + online booking** links, TOC card (**`toc-link`** anchors), prose sections, **`link-inline`** internal links.
  4. **Mid-page CTA** bordered box — book + phone + **`/contact`** (same pattern as travel template).
  5. **`h2#faq`** + **`dl`** FAQ list.
  6. Short disclaimer paragraph (border-top optional).
- **`BookingCtaBanner`** + **`Footer`** after `</article>`.

Reuse **`BOOKING_URL`**, **`PHONE_NUMBER`**, **`PHONE_URL`**, **`PRACTICE_ADDRESS`**, **`PRACTICE_ADDRESS_URL`** from **`@/lib/constants`**.

See **[template-checklist.md](template-checklist.md)** for a line-by-line parity list.

### Legacy reference

Older service pages such as **`app/skin-check-woodlands-perth/page.tsx`** used the WordPress vision band.**Do not clone that pattern for new builds** — migrate any remaining legacy pages to the Pexels band approach when revisiting them.

## Step 4 — Recommended H2 spine (adapt labels, keep pattern)

Keep **Quick answer** + **FAQ**; rename middle sections per service while preserving **role**:

| Role | Example (travel vaccination) |
|------|------------------------------|
| Why here / why now | Why planning ahead matters |
| What we do | What we cover in a … consult / appointment |
| Book / prepare | How to book and prepare |
| Fees | Fees and Medicare |
| Honesty | When we are not the right first stop |

TOC entries must match **`id`s** on **`h2`** elements (`scroll-mt-28`).

## Step 5 — On-page SEO (service)

- **Title ~50–60 characters** including **` | Woodlands Family Practice`** from root layout template — craft **`metadata.title`** segment accordingly (see travel-vaccination pattern with em dash if needed).
- **One clear H1-equivalent** via **`PageHero` title**; keyword naturally in hero + first **quick-answer** paragraph.
- **FAQ:** **4–8** items, **2–4 sentences** each; **`FAQPage`** JSON-LD must match visible answers (`q`/`a` fields).
- **Internal:** **3–5** links — typically **`/services`**, **`/our-practice`**, **`/team`**, **`/patient-info`**, **`/contact`** as relevant.
- **External:** **2–3** authoritative sources (e.g. Healthdirect, Smartraveller, Cancer Council) relevant to the **clinical topic**, **`noopener noreferrer`**.

## Step 6 — Ship checklist

- [ ] **`lib/services/<slug>-band-image.ts`** Pexels module with themed query + Unsplash fallback.
- [ ] **`app/<slug>/page.tsx`** matches **travel-vaccination** template (async metadata + async page, Pexels band, no WP vision).
- [ ] **`public/sitemap.xml`** — add **`loc`** with **`https://www.wfpwa.com.au/<slug>`** and **`lastmod`** when material.
- [ ] **`app/services/page.tsx`** — add or update a contextual link to the new landing page where it fits (follow existing dedicated-link patterns).
- [ ] **`npm run build`** — route **`○` Static**.

## Quick reference

| Item | Path |
|------|------|
| **Canonical template** | `app/travel-vaccination-woodlands-perth/page.tsx` |
| **Canonical band-images pattern** | `lib/services/travel-vaccination-band-image.ts` |
| Keywords | `keywords/service-keywords.csv` |
| Pexels API | `lib/pexels.ts` |
| Site constants | `lib/constants.ts` |
| Voice / stats / stories / opinions / humour | `references/*.md` |
| SEO checklist | `on-page-seo.md` |
| Project rules | `CLAUDE.md` |
