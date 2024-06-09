import Hero from '@/app/components/hero';
import WhoInvolved from './components/who-involved';
import Faq from './components/faq';
import React from 'react';
import About from './components/about';
import History from './components/history';
import WhatsOn from '@/app/(home)/components/whats-on';
import FabTerrace from '@/app/(home)/components/fab-terrace';
import Livestream from '@/app/(home)/components/livestream';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatsOn />
      <FabTerrace />
      <Livestream />
      <WhoInvolved />
      <History />
      <Faq />
    </main>
  );
}
