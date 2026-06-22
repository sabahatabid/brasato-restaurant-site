/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint errors will not fail the build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript errors will not fail the build
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
