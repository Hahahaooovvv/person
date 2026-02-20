import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/person",
  assetPrefix: "/person/",
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  // Use turbopack rules for Next.js 16 (Turbopack is default)
  turbopack: {
    rules: {
      "*.md": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
  // Fallback for webpack (e.g. next build --webpack)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
