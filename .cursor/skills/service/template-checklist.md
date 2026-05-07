# Service page parity checklist

Compare the new **`app/<slug>/page.tsx`** to **`app/travel-vaccination-woodlands-perth/page.tsx`** (canonical template: Pexels navy band, **`generateMetadata`**, no WordPress vision image).

## Imports & constants

- [ ] `Metadata`, `Image`, `Link`, `PageHero`, `BookingCtaBanner`, `Footer`
- [ ] `BOOKING_URL`, `PHONE_NUMBER`, `PHONE_URL`, `PRACTICE_ADDRESS`, `PRACTICE_ADDRESS_URL`
- [ ] `SITE_CANONICAL_BASE`
- [ ] **`pexelsSizedUrl`** from **`@/lib/pexels`**
- [ ] Cached band fetcher **`get…BandImage`** from **`@/lib/services/<slug>-band-image.ts`** (model on **`travel-vaccination-band-image.ts`**)

## Images module (`lib/services/<slug>-band-image.ts`)

- [ ] **`cache`** + **`searchPexelsPhotos(<service-themed query>, 2)`**
- [ ] **`pexelsSizedUrl`** band width **640** (LCP-aligned; same class as travel template)
- [ ] **`FALLBACK_BAND`** — relevant **Unsplash** URL (explicit width **640**, **`remotePatterns`** already allow `images.unsplash.com`)

## Metadata & page component

- [ ] **`export async function generateMetadata()`** — `title`, `description` (~150–160 chars), `alternates.canonical`, `robots`, **`openGraph.images`** URL = **`pexelsSizedUrl(src, 1080)`** when **`images.pexels.com`**, else raw **`src`**; **`twitter`** mirrors OG
- [ ] **`export default async function …Page()`** — `const bandImage = await get…BandImage()`; **`MedicalWebPage.primaryImageOfPage`** uses **1080-sized Pexels URL** where applicable (`pexelsSizedUrl(bandImage.src, 1080)`), otherwise **`bandImage.src`**
- [ ] Band **`Image`** — **`src={bandImage.src}`**, descriptive **`alt`** (e.g. prefix service context + **`bandImage.alt`**)

Do **not** import **`SITE_HERO_VISION_REMOTE`** or **`siteHeroVisionBandUrl`** for service pages.

## JSON-LD (five scripts)

- [ ] `FAQPage` from FAQ array (`q`/`a` → Question/Answer)
- [ ] `BreadcrumbList`: Home → Services → current page name + `PAGE_URL`
- [ ] `MedicalOrganization` (+ telephone, address, `medicalSpecialty` if used)
- [ ] `Person` clinical team `worksFor` organisation
- [ ] `MedicalWebPage`: `name`, `url`, `description`, `isPartOf` WebSite, `about` typed entity, `reviewedBy`, **`primaryImageOfPage`** = band-derived URL (**not** WordPress vision)

## Layout & UX

- [ ] `PageHero` title + subtitle (address / coverage)
- [ ] Navy band: `Image` fill, `priority`, `fetchPriority="high"`, overlay, eyebrow, italic hook line
- [ ] **Three CTAs**: Book (`BOOKING_URL`, `noopener`), Call (`PHONE_URL`, display `PHONE_NUMBER`), Map (`PRACTICE_ADDRESS_URL`)
- [ ] Cream section: breadcrumb; clinic attribution line; **`#quick-answer`** card with **`h2`** + **`strong`** keyword + phone + booking **`link-inline`**
- [ ] TOC card with **`toc-link`** list
- [ ] Prose: **`scroll-mt-28`** on **`h2`** targets; **`link-inline`** internal links
- [ ] Mid-page CTA box: online book + phone + `/contact`
- [ ] FAQ **`dl`**
- [ ] Footer disclaimer (small text)
- [ ] `BookingCtaBanner`, `Footer`

## Conversion

- [ ] Phone number and booking URL appear in **hero**, **quick answer**, and **mid-page CTA** at minimum.

## Build requirements

- [ ] **`PEXELS_API_KEY`** set for CI/production builds when you want live Pexels results; otherwise fallback Unsplash still renders.
