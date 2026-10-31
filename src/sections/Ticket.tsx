import React from 'react';

export const Ticket: React.FC = () => {
  return (
    <section
      id="ticket"
      className="relative w-full h-[45rem] select-none"
      style={{ minHeight: '45rem' }}
    >
      {/* Background Repeating Marquee Ticket Pattern (Group 45@2x): pos=(0, 1383), dim=(1440x659) */}
      <div
        data-ref="ticket_marquee_pattern"
        className="absolute left-0 w-full h-[41.1875rem] pointer-events-none z-0 overflow-hidden"
        style={{
          top: '0.1875rem',
        }}
      >
        <img
          src="/assets/pattern-ticket-marquee.png"
          alt=""
          className="w-full h-full object-cover object-top"
          width={1440}
          height={659}
        />
      </div>

      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[45rem] mx-auto z-10 pointer-events-none">
        {/*
          Ticket Card Visual (Frame 18@2x / xref 868): pos=(311.0, 1459.0), dim=(812.0 x 515.0)
          top = 1459 - 1380 = 79px = 4.9375rem, left = 311px = 19.4375rem
        */}
        <div
          data-ref="ticket_card_visual"
          className="absolute pointer-events-auto"
          style={{
            left: '19.4375rem',
            top: '4.9375rem',
            width: '50.75rem',
            height: '32.1875rem',
            zIndex: 10,
          }}
        >
          <img
            src="/assets/card-ticket.png"
            alt="I-GATE Ticket Card"
            className="w-full h-full object-contain"
            width={812}
            height={515}
          />
        </div>

        {/* Semantic Heading Overlay: "GRAB UR TICKET" */}
        <h2
          data-ref="ticket_heading"
          className="absolute font-display text-transparent select-text pointer-events-none"
          style={{
            left: '31.875rem',
            top: '6.25rem',
            width: '25.875rem',
            height: '6.25rem',
            zIndex: 15,
          }}
          aria-label="GRAB UR TICKET"
        >
          GRAB UR TICKET
        </h2>

        {/* Semantic Metadata Overlays for Accessibility */}
        <div
          data-ref="ticket_metadata"
          className="absolute font-sans text-transparent select-text pointer-events-none"
          style={{
            left: '23.75rem',
            top: '16.5rem',
            width: '42.5rem',
            height: '14.0rem',
            zIndex: 15,
          }}
        >
          <p>Date: 21 December 2026</p>
          <p>Time: 18:00 WIB</p>
          <p>Venue: Muladi Dome Undip</p>
          <p>Presale 1 Ticket</p>
        </div>

        {/* Interactive Buy Ticket Button Overlay: pos=(353.8, 1891.5), dim=(720.4x56.0) */}
        <a
          href="https://ticket.igate2026.com"
          target="_blank"
          rel="noopener noreferrer"
          data-ref="ticket_btn_buy"
          className="absolute pointer-events-auto block cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#CBBCAB]"
          style={{
            left: '22.1125rem',
            top: '31.96875rem',
            width: '45.025rem',
            height: '3.5rem',
            zIndex: 20,
          }}
          aria-label="BUY TICKET NOW"
        >
          <span className="sr-only">BUY TICKET NOW</span>
        </a>
      </div>
    </section>
  );
};

export default Ticket;
