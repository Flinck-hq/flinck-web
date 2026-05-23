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
    unoptimized: true,
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
    ];
  },
};

export default nextConfig;
