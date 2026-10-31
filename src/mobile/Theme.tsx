import React from 'react';

export const Theme: React.FC = () => {
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
      id="theme"
      className="relative w-full h-[38.4375rem] select-none pointer-events-auto"
      style={{
        height: '38.4375rem',
      }}
    >
      {/* Background Seamless Theme Canvas Layer */}
      <div
        data-ref="theme_bg_canvas"
        className="absolute top-0 left-0 w-full h-[38.4375rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-theme-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={615}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/* Visually Hidden Content for Screen Readers & SEO */}
        <div style={visuallyHiddenStyle}>
          <h2>EMPIRE OF SHOWS</h2>
          <p>
            Tema yang dibawakan tahun ini adalah “Empire of Shows: Behind the mask, we
            weave our policy". "EMPIRE OF SHOWS" melambangkan sebuah megah-nya arena dan
            panggung tempat setiap mahasiswa menampilkan versi terbaik dari dirinya di
            tengah dinamika perkuliahan. Kata "Empire" menggambarkan kekuatan, kejayaan,
            dan wadah kebersamaan yang kokoh, sedangkan "Shows" menyimbolkan bahwa
            setiap proses perkuliahan adalah sebuah pertunjukan—tempat kita memainkan
            peran, mengasah bakat, dan mengekspresikan diri.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Theme;
