/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  redirects: () => ([
    {
      source: '/instagram',
      destination: 'https://www.instagram.com/wsaf24/',
      permanent: true,
    },
    {
      source: '/discord',
      destination: 'https://discord.gg/TuFwJX4GKM',
      permanent: true,
    },
    {
      source: '/submit',
      destination: 'https://forms.office.com/e/VCDf8eLLTp',
      permanent: true,
    },
    {
      source: '/submissions',
      destination: 'https://forms.office.com/e/VCDf8eLLTp',
      permanent: true,
    }
  ])
};

export default nextConfig;
