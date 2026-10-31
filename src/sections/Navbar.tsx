import React from 'react';

export const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      data-ref="nav_bg"
      className="fixed top-0 left-0 w-full h-[5rem] z-50 pointer-events-auto"
      style={{
        backgroundColor: '#160101',
      }}
    >
      {/* 90rem Canvas Container (1440px) */}
      <div className="relative w-full max-w-[90rem] h-full mx-auto pointer-events-auto">
        {/* Logo I-Gate: scale 0.8 -> 101.6x63.38, vertically centered in 80px navbar (top=8.31px, bottom=8.31px) */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          data-ref="nav_logo"
          className="absolute block cursor-pointer transition-opacity hover:opacity-90"
          style={{
            left: '5.1875rem',
            top: '0.52rem',
            width: '6.35rem',
            height: '3.96rem',
          }}
          aria-label="I-GATE 2026 Home"
        >
          <img
            src="/assets/logo-igate.png"
            alt="I-GATE 2026 Logo"
            className="w-full h-full object-contain"
            width={102}
            height={63}
          />
        </a>

        {/* Link: Home - pos=(893.5, 28), dim=(72.0x24.0) - vertically centered in 80px navbar (top=28px, bottom=28px) */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          data-ref="nav_link_home"
          className="absolute font-sans font-normal text-[1.25rem] leading-[1.6] text-white hover:text-[#E0D2C2] transition-colors duration-200 flex items-center justify-center tracking-[0.02em]"
          style={{
            left: '55.844rem',
            top: '1.75rem',
            width: '4.5rem',
            height: '1.5rem',
          }}
        >
          Home
        </a>

        {/* Link: About - pos=(1079.0, 28), dim=(80.0x24.0) - vertically centered in 80px navbar (top=28px, bottom=28px) */}
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          data-ref="nav_link_about"
          className="absolute font-sans font-normal text-[1.25rem] leading-[1.6] text-white hover:text-[#E0D2C2] transition-colors duration-200 flex items-center justify-center tracking-[0.02em]"
          style={{
            left: '67.4375rem',
            top: '1.75rem',
            width: '5.0rem',
            height: '1.5rem',
          }}
        >
          About
        </a>

        {/* Button: Ticket - rect with 6px rounded corners per draw_173 (dim: 130x36px, top: 22px, bg: #6E1618, opacity: 1) */}
        <a
          href="#ticket"
          onClick={(e) => scrollToSection(e, 'ticket')}
          data-ref="nav_btn_ticket"
          className="absolute block cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 rounded-[6px] overflow-hidden"
          style={{
            left: '78.625rem',
            top: '1.375rem',
            width: '8.125rem',
            height: '2.25rem',
            backgroundColor: '#6E1618',
            borderRadius: '6px',
            opacity: 1,
          }}
          aria-label="Ticket"
        >
          {/* Ticket Icon: height 28px (1.75rem), vertically centered in 36px (top=4px) */}
          <img
            src="/assets/icon-ticket.png"
            alt=""
            className="absolute object-contain pointer-events-none"
            style={{
              left: '0.5rem',
              top: '0.25rem',
              width: '1.75rem',
              height: '1.75rem',
            }}
            width={28}
            height={28}
          />

          {/* Ticket Text: font-size SAMA dengan Home dan About (visual letter height ~15px) */}
          <span
            data-ref="nav_text_ticket"
            className="absolute font-sans font-normal text-[1.25rem] leading-[1.6] text-white flex items-center justify-center tracking-[0.02em]"
            style={{
              left: '2.75rem',
              top: '0.375rem',
              height: '1.5rem',
            }}
          >
            Ticket
          </span>
        </a>
      </div>
    </header>
  );
};
export default Navbar;