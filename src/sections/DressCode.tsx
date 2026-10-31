import React from 'react';

export const DressCode: React.FC = () => {
  return (
    <section
      id="dresscode"
      className="relative w-full h-[76.875rem] select-none"
      style={{ minHeight: '76.875rem' }}
    >
      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[76.875rem] mx-auto z-10 pointer-events-none">
        {/* Background Drape Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/bg-dresscode.png"
            alt=""
            className="w-full h-full object-cover"
            width={1440}
            height={1230}
          />
        </div>

        {/* Section Heading: DRESS CODE - pos=(543.7, 2971.0), dim=(352.2x60.0) -> top=1.3125rem, left=33.98125rem */}
        <h2
          data-ref="dresscode_heading"
          className="absolute font-display font-normal text-[3.75rem] leading-none text-[#CBBCAB] uppercase text-center flex items-center justify-center pointer-events-auto whitespace-nowrap"
          style={{
            left: '33.98125rem',
            top: '1.8125rem',
            width: '22.0125rem',
            height: '3.75rem',
          }}
        >
          DRESS CODE
        </h2>

        {/* Color Palette Swatches (y=3101 in PDF -> top=9.4375rem relative to DressCode) */}
        {/* Swatch 1: rect=[542.0, 3101.0, 86.0, 86.0], fill=#040203 */}
        <div
          data-ref="dresscode_swatch_1"
          className="absolute rounded-full border-[3px] border-[#ACACAC] pointer-events-auto transition-transform hover:scale-105"
          style={{
            left: '33.875rem',
            top: '9.4375rem',
            width: '5.375rem',
            height: '5.375rem',
            backgroundColor: '#040203',
          }}
          title="Black / Dark Noir"
        />

        {/* Swatch 2: rect=[632.0, 3101.0, 86.0, 86.0], fill=#CAA56C */}
        <div
          data-ref="dresscode_swatch_2"
          className="absolute rounded-full border-[3px] border-[#ACACAC] pointer-events-auto transition-transform hover:scale-105"
          style={{
            left: '39.5rem',
            top: '9.4375rem',
            width: '5.375rem',
            height: '5.375rem',
            backgroundColor: '#CAA56C',
          }}
          title="Gold / Champagne"
        />

        {/* Swatch 3: rect=[722.0, 3101.0, 86.0, 86.0], fill=#340912 */}
        <div
          data-ref="dresscode_swatch_3"
          className="absolute rounded-full border-[3px] border-[#ACACAC] pointer-events-auto transition-transform hover:scale-105"
          style={{
            left: '45.125rem',
            top: '9.4375rem',
            width: '5.375rem',
            height: '5.375rem',
            backgroundColor: '#340912',
          }}
          title="Deep Maroon"
        />

        {/* Swatch 4: rect=[812.0, 3101.0, 86.0, 86.0], fill=#5D101A */}
        <div
          data-ref="dresscode_swatch_4"
          className="absolute rounded-full border-[3px] border-[#ACACAC] pointer-events-auto transition-transform hover:scale-105"
          style={{
            left: '50.75rem',
            top: '9.4375rem',
            width: '5.375rem',
            height: '5.375rem',
            backgroundColor: '#5D101A',
          }}
          title="Crimson Wine"
        />

        {/* Rose Bloom Left (xref 246): W=386.5, H=388.9, rot=-31.3deg, pos=(17.4, 2923.0) -> top=-1.6875rem */}
        <div
          data-ref="dresscode_rose_left"
          className="absolute pointer-events-none z-10"
          style={{
            left: '1.0875rem',
            top: '-1.6875rem',
            width: '24.15625rem',
            height: '24.30625rem',
            transform: 'rotate(-31.3deg)',
            transformOrigin: '50% 50%',
          }}
        >
          <img
            src="/assets/rose-dresscode-exact.png"
            alt=""
            className="w-full h-full object-contain"
            width={387}
            height={389}
          />
        </div>

        {/*
          Dress Code Model Grid (Frame 12@2x): pos=(328.0, 3242.0), dim=(784.0x784.0)
          top = 3242 - 2950 = 292px = 18.25rem, left = 328px = 20.5rem
        */}
        <div
          data-ref="dresscode_grid"
          className="absolute pointer-events-auto z-10"
          style={{
            left: '20.5rem',
            top: '18.25rem',
            width: '49.0rem',
            height: '49.0rem',
          }}
        >
          <img
            src="/assets/dresscode-grid.png"
            alt="Dress Code Model Grid: Masquerade Glamour"
            className="w-full h-full object-contain"
            width={784}
            height={784}
          />
        </div>
      </div>
    </section>
  );
};

export default DressCode;
