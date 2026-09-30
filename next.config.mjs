/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local static assets are served from /public; no remote patterns needed.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Fleet Solutions is the canonical route; keep old links working.
    return [{ source: "/fleet-economics", destination: "/fleet-solutions", permanent: true }];
  },
};

export default nextConfig;
