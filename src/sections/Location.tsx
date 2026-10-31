import React from 'react';

export const Location: React.FC = () => {
  return (
    <section
      id="location"
      className="relative w-full h-[63.75rem] select-none"
      style={{ minHeight: '63.75rem' }}
    >
      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[63.75rem] mx-auto z-10 pointer-events-none">
        {/* Exact Location Background & Composition Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/bg-location.png"
            alt=""
            className="w-full h-full object-cover"
            width={1440}
            height={1020}
          />
        </div>

        {/* Semantic Heading: LOCATION - pos=(576.1, 4199.0), dim=(276.6x60.0) -> top=1.6875rem, left=36.00625rem */}
        <h2
          data-ref="location_heading"
          className="absolute font-display font-normal text-[3.75rem] leading-none text-[#CBBCAB] uppercase text-center flex items-center justify-center pointer-events-auto select-text whitespace-nowrap"
          style={{
            left: '36.00625rem',
            top: '1.6875rem',
            width: '17.2875rem',
            height: '3.75rem',
          }}
        >
          LOCATION
        </h2>

        {/* Venue Photo Region: pos=(339.0, 4359.4), dim=(752.0x503.2) -> top=11.2125rem, left=21.1875rem */}
        <div
          data-ref="location_photo"
          className="absolute pointer-events-auto z-10"
          style={{
            left: '21.1875rem',
            top: '11.2125rem',
            width: '47.0rem',
            height: '31.45rem',
          }}
          aria-label="Venue: Gedung Prof Soedarto"
          role="img"
        />

        {/* Venue Caption: "Gedung Prof Soedarto" - pos=(523.3, 4912.0), dim=(383.4x40.0) -> top=45.75rem, left=32.70625rem */}
        <p
          data-ref="location_caption"
          className="absolute font-sans font-normal text-[2.5rem] leading-none text-transparent tracking-[0.05em] text-center flex items-center justify-center pointer-events-auto select-text"
          style={{
            left: '32.70625rem',
            top: '45.75rem',
            width: '24.5rem',
            height: '2.5rem',
          }}
        >
          Gedung Prof Soedarto
        </p>
      </div>
    </section>
  );
};

export default Location;
