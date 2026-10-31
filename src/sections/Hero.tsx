import React from 'react';

export const Hero: React.FC = () => {
  const scrollToTicket = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('ticket');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

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
      className="relative w-full h-[47.5rem] select-none pointer-events-auto"
      style={{
        minHeight: '47.5rem',
      }}
    >
      {/* Seamless Canvas Background matching 80px Navbar & About (smoke and decorations start at y=80) */}
      <div
        data-ref="hero_bg_smoke"
        className="absolute top-0 left-0 w-full h-[47.5rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-hero-exact.png"
          alt=""
          className="w-full h-full object-cover"
          width={1440}
          height={760}
        />
      </div>

      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[47.5rem] mx-auto z-10 pointer-events-none">
        {/*
          Hero Title: Pure HTML <h1> "I-GATE"
          PDF: span size 100px, bbox=[569, 207, 885.07, 307], draw_2 visual=[569, 234.64, 882.28, 307.2]
          Shifted 17px up: top = 219px = 13.6875rem, left = 569px = 35.5625rem
          Font: Irish Grover 400, color: #EDEDED, font-synthesis: none
        */}
        <h1
          data-ref="hero_title"
          className="absolute font-display font-normal text-[#EDEDED] text-center pointer-events-auto select-none"
          style={{
            left: '35.5625rem',
            top: '13.6875rem',
            width: '19.754rem',
            height: '4.535rem',
            fontSize: '6.25rem', // 100px per PDF text_span_3
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

        {/* Tagline: BEHIND THE MASK, WE WEAVE OUR LEGACY - shifted up 17px (top: 343px = 21.4375rem) */}
        <div
          data-ref="hero_tagline"
          className="absolute block pointer-events-auto"
          style={{
            left: '31.75rem',
            top: '21.4375rem',
            width: '27.25rem',
            height: '6.0625rem',
          }}
        >
          <img
            src="/assets/tagline-behind-the-mask.png"
            alt="Behind the mask, we weave our legacy"
            className="w-full h-full object-contain"
            width={436}
            height={97}
          />
          <span style={visuallyHiddenStyle}>Empire of Shows: Behind the mask, we weave our legacy</span>
        </div>

        {/* CTA Button: SECURE YOUR SEAT (elemen/Frame 2@2x.png) - pos=(629.0, 570.0), dim=(196.0x62.0) -> top=35.625rem */}
        <a
          href="#ticket"
          onClick={scrollToTicket}
          data-ref="hero_btn_cta"
          className="absolute pointer-events-auto block transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{
            left: '39.3125rem',
            top: '35.625rem',
            width: '12.25rem',
            height: '3.875rem',
          }}
        >
          <img
            src="/assets/btn-secure-seat.png"
            alt="SECURE YOUR SEAT"
            className="w-full h-full object-contain"
            width={196}
            height={62}
          />
          <span style={visuallyHiddenStyle}>SECURE YOUR SEAT</span>
        </a>
      </div>
    </section>
  );
};
export default Hero;