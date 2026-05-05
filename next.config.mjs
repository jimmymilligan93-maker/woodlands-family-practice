/** @type {import('next').NextConfig} */
const nextConfig = {
  // `output: 'export'` breaks some App Router dev flows (e.g. root renders as 404 after hydration).
  // Keep static export for production builds only; `next dev` runs without it.
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "wfpwa.com.au" },
    ],
  },
};

export default nextConfig;
