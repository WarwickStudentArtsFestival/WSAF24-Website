import Hero from './components/hero';
import KeyDates from './components/key-dates';
import WhoInvolved from './components/who-involved';
import Faq from './components/faq';
import Footer from './components/footer';
import React from 'react';
import About from './components/about';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <KeyDates />
      <WhoInvolved />
      <Faq />
    </main>
  );
}
