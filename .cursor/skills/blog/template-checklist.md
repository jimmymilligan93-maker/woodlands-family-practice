# Blog route parity checklist

Compare the new **`app/blog/<slug>/page.tsx`** to **`app/blog/mental-health-care-plan/page.tsx`**. Structural items must match unless the user explicitly asks to diverge.

## Metadata & head

- [ ] **`PAGE_PATH`**, **`PAGE_URL`** (`SITE_CANONICAL_BASE`), **`DATE_PUBLISHED`**, **`DATE_PUBLISHED_ISO`**, **`DATE_MODIFIED`**, **`DATE_MODIFIED_ISO`**
- [ ] **`META_TITLE`** (browser title ~50–60 chars with layout suffix)
- [ ] **`META_DESCRIPTION`**, **`OG_DESCRIPTION`**, **`TWITTER_DESCRIPTION`** (OG/Twitter may differ slightly from meta)
- [ ] **`generateMetadata`**: canonical, **`robots`**, OG **`article`** + times, **`pexelsSizedUrl(hero, 1080)`** when Pexels

## JSON-LD (five scripts)

- [ ] `FAQPage` ← **`faqItems`**
- [ ] `BreadcrumbList` ← Home / Blog / current title
- [ ] `BlogPosting` ← headline, dates, author Person URL **`/team`**, publisher, image, description
- [ ] `MedicalOrganization` ← practice contact/address
- [ ] `Person` ← clinical team + **`worksFor`**

## Article layout

- [ ] **Back-to-top** link: **`bottom-24 md:bottom-6`**, **`aria-label`**, **`#page-top`**
- [ ] Hero **`section#page-top`**: **`Image` fill**, **`priority`**, **`fetchPriority="high"`**, **`sizes`**, overlay, breadcrumb, eyebrow, **H1**, byline **`Link /team`** + **`<time>`** ×2
- [ ] **About the authors** **`section`** (border card)
- [ ] **TOC** container: **`toc-link`** list, **`scroll-mt`** on targets
- [ ] **MidPostImage** figure: **`link-inline`** caption, lazy **`Image`**, width/height **`680×383`**, **`sizes`**
- [ ] **FAQ** **`dl`** + visible questions match FAQ schema exactly
- [ ] Footer disclaimer **`text-slate`**, **`border-t`**
- [ ] **`BookingCtaBanner`**, **`Footer`**

## Supporting code

- [ ] **`lib/blog/<slug>-post-images.ts`**: `cache`, 2 photos, **`PEXELS_HERO_W` / `PEXELS_INLINE_W`**, fallbacks
- [ ] **`public/sitemap.xml`** entry
- [ ] **`BlogGrid`** article row
