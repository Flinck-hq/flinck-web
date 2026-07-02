import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: rootDir,
  turbopack: {
    root: rootDir,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/platform",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/capabilities",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: "/workflow",
        destination: "/how-it-works",
        permanent: true,
      },
      {
        source: '/share/:path*',
        destination: 'https://srv.getflink.pro/share/:path*', // Secretly proxies the Flinck backend!
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
