import React from 'react';

export const Location: React.FC = () => {
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
      id="location"
      className="relative w-full h-[38.0rem] select-none pointer-events-auto"
      style={{
        height: '38.0rem',
      }}
    >
      {/* Background Seamless Location Canvas Layer */}
      <div
        data-ref="location_bg_canvas"
        className="absolute top-0 left-0 w-full h-[38.0rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-location-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={608}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/* Visually Hidden Content for Screen Readers & SEO */}
        <div style={visuallyHiddenStyle}>
          <h2>LOCATION</h2>
          <p>Venue: Gedung Prof Soedarto, Universitas Diponegoro, Semarang</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
