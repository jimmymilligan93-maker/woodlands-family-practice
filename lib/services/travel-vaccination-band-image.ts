import { cache } from "react";
import { type PexelsPhoto, pexelsSizedUrl, searchPexelsPhotos } from "@/lib/pexels";

const FALLBACK_BAND: PexelsPhoto = {
  src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=640&q=75",
  alt: "Carry-on luggage at an airport departure hall",
  photographer: "Unsplash",
  photographerUrl: "https://unsplash.com",
};

/** Mobile-first LCP for service band (~full-bleed; matches skin-check `640` band hint). */
const PEXELS_BAND_W = 640;

function sizedPexels(p: PexelsPhoto, width: number): PexelsPhoto {
  const src = p.src.includes("images.pexels.com") ? pexelsSizedUrl(p.src, width) : p.src;
  return { ...p, src };
}

/**
 * Band hero for travel vaccination Woodlands Perth (build-time Pexels + metadata).
 * Falls back when API key missing or no results return.
 */
export const getTravelVaccinationBandImage = cache(async () => {
  const photos = await searchPexelsPhotos("travel vaccination health passport syringe itinerary", 2);
  const raw = photos.filter((p) => p.src.length > 0);
  if (raw.length >= 1) {
    return sizedPexels(raw[0], PEXELS_BAND_W);
  }
  return FALLBACK_BAND;
});
