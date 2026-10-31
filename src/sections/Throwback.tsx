import React from 'react';

export const Throwback: React.FC = () => {
  return (
    <section
      id="throwback"
      className="relative w-full h-[50rem] select-none"
      style={{ minHeight: '50rem' }}
    >
      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[50rem] mx-auto z-10 pointer-events-none">
        {/* Exact Throwback Composition Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/bg-throwback.png"
            alt=""
            className="w-full h-full object-cover"
            width={1440}
            height={800}
          />
        </div>

        {/* Semantic Heading: THROWBACK - pos=(548.5, 5204.0), dim=(343.7x60.0) -> top=0.78125rem, left=34.28125rem */}
        <h2
          data-ref="throwback_heading"
          className="absolute font-display font-normal text-[3.75rem] leading-none text-[#CBBCAB] uppercase text-center flex items-center justify-center pointer-events-auto select-text whitespace-nowrap"
          style={{
            left: '34.28125rem',
            top: '0.78125rem',
            width: '21.48125rem',
            height: '3.75rem',
          }}
        >
          THROWBACK
        </h2>

        {/* Semantic Subtitle: "To One Last Year" - pos=(607.6, 5269.0), dim=(225.8x40.0) -> top=4.3125rem, left=37.975rem */}
        <p
          data-ref="throwback_subtitle"
          className="absolute font-script text-[2.5rem] leading-none text-[#CBBCAB] text-center flex items-center justify-center pointer-events-auto select-text whitespace-nowrap"
          style={{
            left: '37.975rem',
            top: '4.3125rem',
            width: '14.1125rem',
            height: '2.5rem',
          }}
        >
          To One Last Year
        </p>

        {/* Accessible interactive overlay regions for Polaroid rows */}
        {/* Row 1: pos=(236.0, 5385.0), dim=(968.0x174.0) -> top=11.5625rem, left=14.75rem */}
        <div
          data-ref="throwback_strip_1"
          className="absolute pointer-events-auto z-10"
          style={{
            left: '14.75rem',
            top: '11.5625rem',
            width: '60.5rem',
            height: '10.875rem',
          }}
          aria-label="I-GATE Memories 2025: Row 1"
          role="region"
        />

        {/* Row 2: pos=(236.0, 5553.0), dim=(968.0x174.0) -> top=22.0625rem, left=14.75rem */}
        <div
          data-ref="throwback_strip_2"
          className="absolute pointer-events-auto z-10"
          style={{
            left: '14.75rem',
            top: '22.0625rem',
            width: '60.5rem',
            height: '10.875rem',
          }}
          aria-label="I-GATE Memories 2025: Row 2"
          role="region"
        />

        {/* Row 3: pos=(236.0, 5721.0), dim=(968.0x174.0) -> top=32.5625rem, left=14.75rem */}
        <div
          data-ref="throwback_strip_3"
          className="absolute pointer-events-auto z-10"
          style={{
            left: '14.75rem',
            top: '32.5625rem',
            width: '60.5rem',
            height: '10.875rem',
          }}
          aria-label="I-GATE Memories 2025: Row 3"
          role="region"
        />
      </div>
    </section>
  );
};

export default Throwback;
