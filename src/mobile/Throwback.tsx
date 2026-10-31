import React from 'react';

export const Throwback: React.FC = () => {
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
      id="throwback"
      className="relative w-full h-[52.0625rem] select-none pointer-events-auto"
      style={{
        height: '52.0625rem',
      }}
    >
      {/* Background Seamless Throwback Canvas Layer */}
      <div
        data-ref="throwback_bg_canvas"
        className="absolute top-0 left-0 w-full h-[52.0625rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-throwback-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={833}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/* Visually Hidden Content for Screen Readers & SEO */}
        <div style={visuallyHiddenStyle}>
          <h2>THROWBACK</h2>
          <p>To One Last Year: Moments and memories from previous I-GATE gatherings.</p>
        </div>
      </div>
    </section>
  );
};

export default Throwback;
