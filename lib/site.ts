/** Canonical site URL for metadata, JSON-LD, and Open Graph (no trailing slash). */
export const SITE_CANONICAL_BASE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.wfpwa.com.au";
