import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full h-[38.75rem] select-none z-10"
      style={{ minHeight: '38.75rem' }}
    >
      {/* Exact Seamless Background & Composition Layer */}
      <div
        data-ref="about_bg_smoke"
        className="absolute top-0 left-0 w-full h-[38.75rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-about-exact.png"
          alt=""
          className="w-full h-full object-cover"
          width={1440}
          height={620}
        />
      </div>

      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[38.75rem] mx-auto z-10 pointer-events-none">
        {/*
          Header Tab Overlay: "ABOUT I-GATE"
          Target Pos=(58.0, 753.0) -> with -6.6deg rotation, unrotated top = 774px (top = 0.875rem relative to About)
        */}
        <div
          data-ref="about_header_tab"
          className="absolute pointer-events-auto flex items-center"
          style={{
            left: '3.625rem',
            top: '0.875rem',
            width: '11.25rem',
            height: '1.625rem',
            transform: 'rotate(-6.6deg)',
            transformOrigin: 'top left',
            zIndex: 15,
          }}
        >
          <h2 className="font-display font-normal text-[1.25rem] text-transparent select-text tracking-[0.05em] uppercase">
            ABOUT I-GATE
          </h2>
        </div>

        {/*
          Body Text Overlay: 7 lines
          Target Pos=(52.0, 840.0) -> with -6.6deg rotation, unrotated top = 938px (top = 11.125rem relative to About)
        */}
        <div
          data-ref="about_body_text"
          className="absolute pointer-events-auto font-sans text-transparent select-text"
          style={{
            left: '3.25rem',
            top: '11.125rem',
            width: '53.125rem',
            height: '17.5rem',
            transform: 'rotate(-6.6deg)',
            transformOrigin: 'top left',
            zIndex: 15,
            fontSize: '1.0625rem',
            lineHeight: '1.7',
          }}
        >
          <p>
            Informatics Gathering (I-GATE) adalah acara tahunan keluarga besar
            <br />
            Informatika Universitas Diponegoro yang menjadi ajang
            <br />
            kebersamaan, kreativitas, dan apresiasi. Melalui kegiatan ini,
            <br />
            seluruh mahasiswa, dosen, dan tenaga pendidikan Informatika
            <br />
            berkumpul dalam suasana penuh kehangatan untuk saling mengenal
            <br />
            lebih dekat, menampilkan karya seni, serta memperkuat rasa
            <br />
            kekeluargaan di lingkungan Informatika Undip.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
