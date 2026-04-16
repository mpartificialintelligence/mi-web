const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/mi-web' : '',
  assetPrefix: isProd ? '/mi-web/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
