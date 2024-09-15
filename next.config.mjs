/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  output: 'export',
  images: {
    unoptimized: true, // For export
    remotePatterns: process.env.WSAF_ASSETS_BASE_URL ? [
      {
        protocol: process.env.WSAF_ASSETS_BASE_URL.includes('https') ? 'https' : 'http',
        hostname: process.env.WSAF_ASSETS_BASE_URL.replace('https://', '').replace('http://', '').split('/')[0],
        pathname: '/**'
      }
    ] : [],
  },
  redirects: () => ([
    {
      source: '/instagram',
      destination: 'https://www.instagram.com/wsaf25/',
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
    },
    {
      source: '/helfertool',
      destination: 'https://helfertool.wsaf.org.uk/wsaf24/',
      permanent: true,
    },
    {
      source: '/sign-up',
      destination: 'https://helfertool.wsaf.org.uk/wsaf24/',
      permanent: true,
    },
    {
      source: '/volunteer',
      destination: '/team',
      permanent: true,
    },
    {
      source: '/youtube',
      destination: 'https://www.youtube.com/channel/UCCFESD5QMLnlgKQjkBLuv3A',
      permanent: true,
    },
    {
      source: '/stream',
      destination: 'https://www.youtube.com/channel/UCCFESD5QMLnlgKQjkBLuv3A',
      permanent: true,
    },
    {
      source: '/feedback',
      destination: 'https://forms.gle/kpL6q6M1ZGV6Dzao7',
      permanent: true,
    },
    {
      source: '/qr/d62',
      destination: 'https://wsaf.org.uk/schedule?utm_campaign=schedule&utm_medium=ds&utm_source=screens',
      permanent: true,
    },
    {
      source: '/qr/2d2',
      destination: 'https://wsaf.org.uk/schedule?utm_campaign=schedule&utm_medium=ds&utm_source=oculus',
      permanent: true,
    },
    {
      source: '/qr/ee4',
      destination: 'https://wsaf.org.uk/schedule?utm_campaign=slides&utm_medium=ds&utm_source=tv',
      permanent: true,
    }
  ])
};

export default nextConfig;
