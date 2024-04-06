import type { Metadata, Viewport } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Footer from '@/app/components/footer';
import React from 'react';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Warwick Student Arts Festival 2024',
  description:
    'Warwick Student Arts Festival (WSAF) is a 3 day showcase and celebration of all aspects of the arts at Warwick.\n\nSubmissions are open until Friday 26th April.',
  category: 'website',
  keywords: [
    'Warwick',
    'Warwick University',
    'Warwick Student Arts Festival',
    'WSAF',
    'Warwick Arts',
    'Festival',
  ],
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
};

export const viewport: Viewport = {
  themeColor: '#087F8C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} flex flex-col min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
