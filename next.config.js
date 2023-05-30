/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // ISSO AQUI
  },
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
