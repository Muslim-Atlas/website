import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'sonner'],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
