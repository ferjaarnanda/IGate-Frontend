import React from 'react';
import { scrollToMobile } from './scroll';

export const Hero: React.FC = () => {
  const visuallyHiddenStyle: React.CSSProperties = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    whiteSpace: 'nowrap',
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[37.125rem] select-none pointer-events-auto"
      style={{
        height: '37.125rem',
      }}
    >
      {/* Background Smoke Canvas Layer */}
      <div
        data-ref="hero_bg_smoke"
        className="absolute top-0 left-0 w-full h-[37.125rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-hero-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={594}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/*
          Title: Pure HTML <h1> "I-GATE"
          Visual bbox in PDF: y0=175.3, y1=226.1 -> from Hero top (70px): y=105.3px
          Adjusted top for font-display: 97px = 6.0625rem
          Font: Irish Grover, color: #EDEDED
        */}
        <h1
          data-ref="hero_title"
          className="absolute font-display font-normal text-[#EDEDED] text-center pointer-events-auto select-none"
          style={{
            left: '8.75rem',
            top: '6.0625rem',
            width: '13.825rem',
            height: '4.375rem',
            fontSize: '4.375rem', // 70px per PDF
            lineHeight: '1',
            fontSynthesis: 'none',
            letterSpacing: '0',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          I-GATE
        </h1>

        {/*
          CTA Button: SECURE YOUR SEAT
          PDF: bbox=(112.0, 407.0, 278.0, 465.0), dim=(166.0x58.0)
          Hero top=70px -> top = 407.0 - 70.0 = 337.0px = 21.0625rem
          left = 112.0px = 7.0rem, width = 166.0px = 10.375rem, height = 58.0px = 3.625rem
        */}
        <a
          href="#ticket"
          onClick={(e) => scrollToMobile(e, 'ticket')}
          data-ref="hero_btn_cta"
          className="absolute pointer-events-auto block transition-transform duration-200 active:scale-95"
          style={{
            left: '7.0rem',
            top: '21.0625rem',
            width: '10.375rem',
            height: '3.625rem',
          }}
          aria-label="Secure Your Seat"
        >
          <img
            src="/assets/btn-secure-seat-mobile.png"
            alt="SECURE YOUR SEAT"
            className="w-full h-full object-contain"
            width={166}
            height={58}
          />
          <span style={visuallyHiddenStyle}>SECURE YOUR SEAT</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
