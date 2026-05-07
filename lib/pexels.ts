export type PexelsPhoto = {
  src: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
};

/** Resize/compress Pexels CDN JPEGs (saves hundreds of KiB vs large2x defaults). */
export function pexelsSizedUrl(src: string, width: number): string {
  if (!src.includes("images.pexels.com")) return src;
  try {
    const u = new URL(src);
    u.searchParams.set("auto", "compress");
    u.searchParams.set("cs", "tinysrgb");
    u.searchParams.set("w", String(width));
    u.searchParams.delete("h");
    u.searchParams.delete("dpr");
    return u.toString();
  } catch {
    return src;
  }
}

/**
 * Fetches photos from Pexels at build time (static export).
 * Returns [] if the API key is missing or the request fails.
 */
export async function searchPexelsPhotos(
  query: string,
  perPage = 3,
): Promise<PexelsPhoto[]> {
  const key = process.env.PEXELS_API_KEY;
  if (!key?.trim()) {
    return [];
  }

  try {
    const url = new URL("https://api.pexels.com/v1/search");
    url.searchParams.set("query", query);
    url.searchParams.set("per_page", String(perPage));

    const res = await fetch(url.toString(), {
      headers: { Authorization: key },
    });

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as {
      photos?: Array<{
        src?: { large2x?: string; large?: string; medium?: string };
        alt?: string;
        photographer?: string;
        photographer_url?: string;
      }>;
    };

    const photos = data.photos ?? [];
    return photos.map((p) => {
      /** Prefer `large` over `large2x` — fewer bytes; width capped via `pexelsSizedUrl` at call sites. */
      const src = p.src?.large ?? p.src?.large2x ?? p.src?.medium ?? "";
      return {
        src,
        alt: (p.alt && p.alt.trim()) || "Photograph",
        photographer: p.photographer ?? "",
        photographerUrl: p.photographer_url ?? "https://www.pexels.com",
      };
    });
  } catch {
    return [];
  }
}
