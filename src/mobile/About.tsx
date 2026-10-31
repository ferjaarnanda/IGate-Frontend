import React from 'react';

export const About: React.FC = () => {
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
      id="about"
      className="relative w-full h-[19.5625rem] select-none pointer-events-auto"
      style={{
        height: '19.5625rem',
      }}
    >
      {/* Background Seamless Composition Layer */}
      <div
        data-ref="about_bg_canvas"
        className="absolute top-0 left-0 w-full h-[19.5625rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-about-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={313}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/* Card Target Wrapper: aligns with the topmost edge of the tilted card envelope & tab (y=573.9px in PDF) */}
        <div
          id="about-card"
          data-ref="about_card_target"
          className="absolute pointer-events-none"
          style={{
            top: '-5.63125rem', // 573.9px - 664px = -90.1px = -5.63125rem
            left: 0,
            width: '100%',
            height: '25.19375rem',
          }}
        />

        {/* Visually Hidden Content for Screen Readers & SEO */}
        <div style={visuallyHiddenStyle}>
          <h2>ABOUT I-GATE</h2>
          <p>
            Informatics Gathering (I-GATE) adalah acara tahunan keluarga besar
            Informatika Universitas Diponegoro yang menjadi ajang kebersamaan,
            kreativitas, dan apresiasi. Melalui kegiatan ini, seluruh mahasiswa, dosen,
            dan tenaga pendidikan Informatika berkumpul dalam suasana penuh kehangatan
            untuk saling mengenal lebih dekat, menampilkan karya seni, serta memperkuat
            rasa kekeluargaan di lingkungan Informatika Undip.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
