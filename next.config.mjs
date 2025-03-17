/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['placeholder.svg'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    // Ensure CSS modules are properly processed
    webpack: (config) => {
      return config;
    },
  }
  
  export default nextConfig;
  
  