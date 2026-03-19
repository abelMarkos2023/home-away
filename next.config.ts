import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'khrdiyepfyzljladakhq.supabase.co', // <- lowercase
        port: '',
        pathname: '/storage/v1/object/public/home-away/public/**', // <- fixed typo
      },
    ],
    // https://khrdiyepfyzljladakhq.supabase.co/storage/v1/object/public/home-away/public/1773961746564-cabin.jpg
    
  }
};

export default nextConfig;
