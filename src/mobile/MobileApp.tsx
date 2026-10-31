import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Ticket } from './Ticket';
import { Theme } from './Theme';
import { DressCode } from './DressCode';
import { Location } from './Location';
import { Throwback } from './Throwback';
import { Footer } from './Footer';

export const MobileApp: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-[#EEEEEE] overflow-x-clip selection:bg-[#6B1724] selection:text-white">
      {/* Mobile Fixed Navbar */}
      <Navbar />

      {/* Mobile Continuous Canvas */}
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Ticket />
        <Theme />
        <DressCode />
        <Location />
        <Throwback />
      </main>

      {/* Mobile Footer */}
      <Footer />
    </div>
  );
};

export default MobileApp;
