import React from 'react';

export const Theme: React.FC = () => {
  return (
    <section
      id="theme"
      className="relative w-full h-[53.125rem] select-none z-10"
      style={{ minHeight: '53.125rem' }}
    >
      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[53.125rem] mx-auto z-10 pointer-events-none">
        {/*
          Card Theme Visual: tema@2x (card-theme.png)
          Pos=(1.0, 2060.0), Dim=(1439.0 x 862.0)
          top = 2060 - 2100 = -40px = -2.5rem, left = 1px = 0.0625rem
        */}
        <div
          data-ref="theme_card_visual"
          className="absolute pointer-events-auto"
          style={{
            left: '0.0625rem',
            top: '-2.5rem',
            width: '89.9375rem',
            height: '53.875rem',
            zIndex: 10,
          }}
        >
          <img
            src="/assets/card-theme.png"
            alt="Theme: Empire of Shows"
            className="w-full h-full object-contain"
            width={1439}
            height={862}
          />
        </div>

        {/* Rose Bloom Right/Bottom (xref 88): W=477.8, H=716.7, rot=-37.0deg, pos=(1060.6, 2325.6) */}
        <div
          data-ref="theme_rose_bloom"
          className="absolute pointer-events-none"
          style={{
            left: '66.2875rem',
            top: '14.10rem',
            width: '29.8625rem',
            height: '44.79375rem',
            transform: 'rotate(-37.0deg)',
            transformOrigin: '50% 50%',
            zIndex: 20,
          }}
        >
          <img
            src="/assets/rose-theme-exact.png"
            alt=""
            className="w-full h-full object-contain"
            width={478}
            height={717}
          />
        </div>

        {/* Semantic Heading Overlay: "EMPIRE OF SHOWS" - pos=(516.7, 2096.0), dim=(433.2x50.0) */}
        <h2
          data-ref="theme_heading"
          className="absolute font-display text-transparent select-text pointer-events-none"
          style={{
            left: '32.29rem',
            top: '-0.25rem',
            width: '27.075rem',
            height: '3.125rem',
            zIndex: 25,
          }}
          aria-label="EMPIRE OF SHOWS"
        >
          EMPIRE OF SHOWS
        </h2>

        {/* Semantic Body Text Overlay for Accessibility */}
        <div
          data-ref="theme_body_text"
          className="absolute pointer-events-auto font-sans text-transparent select-text flex flex-col justify-start"
          style={{
            left: '21.78rem',
            top: '5.75rem',
            width: '50.5rem',
            height: '37.5rem',
            zIndex: 25,
            fontSize: '1.25rem',
            lineHeight: '1.8',
          }}
        >
          <p>
            Tema yang dibawakan tahun ini adalah &quot;Empire of Shows: Behind the mask, we weave our legacy&quot;.
            &quot;EMPIRE OF SHOWS&quot; melambangkan sebuah megah-nya arena dan panggung tempat setiap mahasiswa
            menampilkan versi terbaik dari dirinya di tengah dinamika perkuliahan. Kata &quot;Empire&quot; menggambarkan
            kekuatan, kejayaan, dan wadah kebersamaan yang kokoh, sedangkan &quot;Shows&quot; menyimbolkan bahwa
            setiap proses perkuliahan adalah sebuah pertunjukan—tempat kita memainkan peran, mengasah bakat, dan mengekspresikan diri.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Theme;
