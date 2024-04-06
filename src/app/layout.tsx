import type { Metadata, Viewport } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

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
      </body>
    </html>
  );
}
