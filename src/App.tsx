import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Ticket } from './sections/Ticket';
import { Theme } from './sections/Theme';
import { DressCode } from './sections/DressCode';
import { Location } from './sections/Location';
import { Throwback } from './sections/Throwback';
import { Footer } from './sections/Footer';

import { MobileApp } from './mobile/MobileApp';

export const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1023px)');
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-[#EEEEEE] overflow-x-clip selection:bg-[#6B1724] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Continuous Canvas */}
        <main className="relative z-10 w-full flex flex-col items-center">
          <Hero />
          <About />
          <Ticket />
          <Theme />
          <DressCode />
          <Location />
          <Throwback />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
