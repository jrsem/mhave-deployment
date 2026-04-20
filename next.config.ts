import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows all hostnames
      },
      {
        protocol: 'http',
        hostname: '**', // This allows all hostnames over insecure connections
      },
    ],
  },
};

export default withNextIntl(nextConfig);
