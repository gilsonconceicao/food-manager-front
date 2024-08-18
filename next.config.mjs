/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: [{
    source: '/sobre',
    destination: '/about',
    permanent: true, // ou false se for temporário
  },]
};

export default nextConfig;
