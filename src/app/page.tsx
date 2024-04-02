import Hero from './hero';
import KeyDates from './key-dates';
import WhoInvolved from './who-involved';
import Faq from './faq';
import Footer from './footer';
import React from 'react';
import About from '@/app/about';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <KeyDates />
        <WhoInvolved />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
