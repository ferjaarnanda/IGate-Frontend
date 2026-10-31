import React from 'react';

export const DressCode: React.FC = () => {
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
      id="dresscode"
      className="relative w-full h-[49.875rem] select-none pointer-events-auto"
      style={{
        height: '49.875rem',
      }}
    >
      {/* Background Seamless Dress Code Canvas Layer */}
      <div
        data-ref="dresscode_bg_canvas"
        className="absolute top-0 left-0 w-full h-[49.875rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-dresscode-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={798}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/* Visually Hidden Content for Screen Readers & SEO */}
        <div style={visuallyHiddenStyle}>
          <h2>DRESS CODE</h2>
          <p>Color Palette: Noir Black (#030103), Gold Glam (#CAA56B), Burgundy Wine (#340811), Crimson (#5D0F1A)</p>
          <p>Dress Code Moodboard: Elegant formal evening wear, masquerade ball attire with masks and gold accents.</p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
