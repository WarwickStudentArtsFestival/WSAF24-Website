import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#087F8C',
        secondary: '#4F1D75',
        accent: '#FFBD00',
        white: '#FFFFFF',
        dark: '#000000',
      },
      fontSize: {
        '2xs': '0.6rem',
      },
    },
    fontFamily: {
      lexend: ['var(--font-lexend)', 'sans-serif'],
    },
    screens: {
      '2xs': '440px',
      xs: '520px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
