/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  // Keep static export behind an explicit flag so dev is stable.
  ...(isStaticExport ? { output: "export" } : {}),
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "wfpwa.com.au" },
    ],
  },
};

export default nextConfig;
