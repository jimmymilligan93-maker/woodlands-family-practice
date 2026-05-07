/** Full-resolution band photo on the legacy WordPress host (OG/social when needed). */
export const SITE_HERO_VISION_REMOTE =
  "https://wfpwa.com.au/wp-content/uploads/2022/10/vision-image.jpg";

/**
 * Band photography tuned for LCP: append width/quality hints for CDNs/plugins that honour them.
 * If your WP stack ignores query strings, add `public/images/vision-band-lcp.jpg` (≤720px wide JPEG)
 * and point skin/services heroes at that path instead.
 */
export function siteHeroVisionBandUrl(maxWidth: number, quality = "82"): string {
  const u = new URL(SITE_HERO_VISION_REMOTE);
  u.searchParams.set("w", String(maxWidth));
  u.searchParams.set("quality", quality);
  return u.toString();
}

/** @deprecated Use SITE_HERO_VISION_REMOTE or siteHeroVisionBandUrl(). */
export const SITE_HERO_VISION_IMAGE = SITE_HERO_VISION_REMOTE;
