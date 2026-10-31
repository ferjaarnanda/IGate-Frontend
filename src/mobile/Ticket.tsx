import React from 'react';

export const Ticket: React.FC = () => {
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
      id="ticket"
      className="relative w-full h-[42.3125rem] select-none pointer-events-auto"
      style={{
        height: '42.3125rem',
      }}
    >
      {/* Background Seamless Ticket Canvas Layer */}
      <div
        data-ref="ticket_bg_canvas"
        className="absolute top-0 left-0 w-full h-[42.3125rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-ticket-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={677}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/* Ticket Card Target Wrapper: aligns with the top of the ticket card visual (y=1040px in PDF) */}
        <div
          id="ticket-card"
          data-ref="ticket_card_target"
          className="absolute pointer-events-none"
          style={{
            top: '3.9375rem', // 1040px - 977px = 63px = 3.9375rem
            left: 0,
            width: '100%',
            height: '32.1875rem',
          }}
        />

        {/* Visually Hidden Content for Screen Readers & SEO */}
        <div style={visuallyHiddenStyle}>
          <h2>GRAB UR TICKET</h2>
          <p>Date: 21 December 2026</p>
          <p>Place: Prof Soedarto</p>
          <p>Time: 18:30 - 21:00</p>
          <p>Price: Rp40.000</p>
        </div>

        {/*
          Interactive Button: BUY TICKET
          PDF bbox=(39.0, 1464.0, 360.0, 1516.0), dim=(321.0x52.0)
          Ticket top=977px -> top = 1464 - 977 = 487.0px = 30.4375rem
          left = 39.0px = 2.4375rem, width = 321.0px = 20.0625rem, height = 52.0px = 3.25rem
        */}
        <a
          href="https://ticket.igate2026.com"
          target="_blank"
          rel="noopener noreferrer"
          data-ref="ticket_btn_buy"
          className="absolute block pointer-events-auto cursor-pointer transition-transform duration-200 active:scale-95"
          style={{
            left: '2.4375rem',
            top: '30.4375rem',
            width: '20.0625rem',
            height: '3.25rem',
            zIndex: 20,
          }}
          aria-label="BUY TICKET NOW"
        >
          <span style={visuallyHiddenStyle}>BUY TICKET NOW</span>
        </a>
      </div>
    </section>
  );
};

export default Ticket;
