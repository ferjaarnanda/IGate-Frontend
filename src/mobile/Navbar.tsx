import React from 'react';
import { scrollToMobile } from './scroll';

export const Navbar: React.FC = () => {
  return (
    <header
      id="navbar"
      data-ref="nav_bg"
      className="fixed top-0 left-0 w-full h-[4.375rem] z-50 pointer-events-auto"
      style={{
        backgroundColor: '#160101',
      }}
    >
      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto pointer-events-auto">
        {/* Logo I-Gate: pos=(22.0, 13.0), dim=(68.0x43.0) -> (44, 26, 180, 112) at 2x */}
        <a
          href="#hero"
          onClick={(e) => scrollToMobile(e, 'hero')}
          data-ref="nav_logo"
          className="absolute block cursor-pointer transition-opacity hover:opacity-90"
          style={{
            left: '1.375rem',
            top: '0.8125rem',
            width: '4.25rem',
            height: '2.6875rem',
          }}
          aria-label="I-GATE 2026 Home"
        >
          <span className="absolute -inset-2" aria-hidden="true" />
          <img
            src="/assets/logo-igate-mobile.png"
            alt="I-GATE 2026 Logo"
            className="w-full h-full block"
            width={68}
            height={43}
          />
        </a>

        {/* Link: Home - pos=(187.0, 23.0) */}
        <a
          href="#hero"
          onClick={(e) => scrollToMobile(e, 'hero')}
          data-ref="nav_link_home"
          className="absolute font-sans font-normal text-[1.25rem] text-white hover:text-[#E0D2C2] transition-colors leading-none tracking-[0.01em]"
          style={{
            left: '11.6875rem',
            top: '1.4375rem',
          }}
        >
          <span className="absolute -inset-2.5" aria-hidden="true" />
          Home
        </a>

        {/* Link: About - pos=(245.5, 23.0) */}
        <a
          href="#about"
          onClick={(e) => scrollToMobile(e, 'about')}
          data-ref="nav_link_about"
          className="absolute font-sans font-normal text-[1.25rem] text-white hover:text-[#E0D2C2] transition-colors leading-none tracking-[0.01em]"
          style={{
            left: '15.34375rem',
            top: '1.4375rem',
          }}
        >
          <span className="absolute -inset-2.5" aria-hidden="true" />
          About
        </a>

        {/* Button: Ticket - pos=(308.0, 18.0), dim=(87.0x32.0), bg: #6F1718, radius: 6px */}
        <a
          href="#ticket"
          onClick={(e) => scrollToMobile(e, 'ticket')}
          data-ref="nav_btn_ticket"
          className="absolute block cursor-pointer transition-transform duration-200 active:scale-95 rounded-[6px] overflow-hidden"
          style={{
            left: '19.25rem',
            top: '1.125rem',
            width: '5.4375rem',
            height: '2.0rem',
            backgroundColor: '#6F1718',
            borderRadius: '6px',
          }}
          aria-label="Get Tickets"
        >
          <span className="absolute -inset-2" aria-hidden="true" />
          <div className="relative w-full h-full flex items-center pl-[0.25rem] gap-[0.125rem]">
            <img
              src="/assets/icon-ticket.png"
              alt=""
              className="w-[1.3125rem] h-[1.3125rem] object-contain flex-shrink-0"
              width={21}
              height={21}
              aria-hidden="true"
            />
            <span className="font-sans font-normal text-[1.25rem] text-white leading-none">
              Ticket
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
