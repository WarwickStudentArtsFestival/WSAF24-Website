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
