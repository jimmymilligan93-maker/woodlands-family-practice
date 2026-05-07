import { cache } from "react";
import { type PexelsPhoto, pexelsSizedUrl, searchPexelsPhotos } from "@/lib/pexels";

const FALLBACK_IMAGES: PexelsPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=720&q=75",
    alt: "Reception area at a modern medical clinic",
    photographer: "Unsplash",
    photographerUrl: "https://unsplash.com",
  },
  {
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=680&q=75",
    alt: "GP consulting with a patient in a bright clinic room",
    photographer: "Unsplash",
    photographerUrl: "https://unsplash.com",
  },
];

/** Mobile-first LCP: match ~device width on Moto G–class viewports; OG metadata bumps width separately. */
const PEXELS_HERO_W = 720;
const PEXELS_INLINE_W = 680;

function sizedPexels(p: PexelsPhoto, width: number): PexelsPhoto {
  const src = p.src.includes("images.pexels.com") ? pexelsSizedUrl(p.src, width) : p.src;
  return { ...p, src };
}

/**
 * Deduplicated Pexels fetch for the Perth new-patient GP finder post (build + metadata).
 * Falls back to stock photography when the API key is missing or no results return.
 */
export const getGpAcceptingNewPatientsPerthImages = cache(async () => {
  const photos = await searchPexelsPhotos("general practice doctor reception Perth patient consultation", 2);
  const raw = photos.filter((p) => p.src.length > 0);
  if (raw.length >= 2) {
    return [sizedPexels(raw[0], PEXELS_HERO_W), sizedPexels(raw[1], PEXELS_INLINE_W)];
  }
  if (raw.length === 1) {
    const second =
      FALLBACK_IMAGES.find((f) => f.src !== raw[0].src) ?? FALLBACK_IMAGES[1];
    return [sizedPexels(raw[0], PEXELS_HERO_W), second];
  }
  return FALLBACK_IMAGES.slice(0, 2);
});
