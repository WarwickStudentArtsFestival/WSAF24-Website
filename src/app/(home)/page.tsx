import Hero from '@/app/components/hero';
import KeyDates from './components/key-dates';
import WhoInvolved from './components/who-involved';
import Faq from './components/faq';
import React from 'react';
import About from './components/about';
import WhatsOn from '@/app/(home)/components/whats-on';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatsOn />
      <WhoInvolved />
      <Faq />
    </main>
  );
}
