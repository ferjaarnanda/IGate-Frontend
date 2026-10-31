import React from 'react';
import { scrollToMobile } from './scroll';

export const Footer: React.FC = () => {
  const visuallyHiddenStyle: React.CSSProperties = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    whiteSpace: 'nowrap',
  };

  return (
    <footer
      id="footer"
      className="relative w-full h-[37.6875rem] select-none pointer-events-auto"
      style={{
        height: '37.6875rem',
      }}
    >
      {/* Background Seamless Footer Canvas Layer */}
      <div
        data-ref="footer_bg_canvas"
        className="absolute top-0 left-0 w-full h-[37.6875rem] pointer-events-none z-0"
      >
        <img
          src="/assets/bg-footer-mobile.png"
          alt=""
          className="w-full h-full object-cover"
          width={412}
          height={603}
        />
      </div>

      {/* 25.75rem Mobile Container (412px canvas) */}
      <div className="relative w-full max-w-[25.75rem] h-full mx-auto z-10 pointer-events-none">
        {/* Interactive Navigation Links with >= 44x44 Touch Target */}
        <a
          href="#hero"
          onClick={(e) => scrollToMobile(e, 'hero')}
          data-ref="footer_link_home"
          className="absolute block pointer-events-auto cursor-pointer"
          style={{
            left: '2.5rem',
            top: '4.25rem',
            width: '6.0rem',
            height: '2.75rem', // 44px touch target
          }}
          aria-label="Navigate to Home"
        >
          <span style={visuallyHiddenStyle}>Home</span>
        </a>

        <a
          href="#about"
          onClick={(e) => scrollToMobile(e, 'about')}
          data-ref="footer_link_about"
          className="absolute block pointer-events-auto cursor-pointer"
          style={{
            left: '2.5rem',
            top: '6.125rem',
            width: '6.0rem',
            height: '2.75rem', // 44px touch target
          }}
          aria-label="Navigate to About"
        >
          <span style={visuallyHiddenStyle}>About</span>
        </a>

        <a
          href="#ticket"
          onClick={(e) => scrollToMobile(e, 'ticket')}
          data-ref="footer_link_ticket"
          className="absolute block pointer-events-auto cursor-pointer"
          style={{
            left: '2.5rem',
            top: '8.0rem',
            width: '6.0rem',
            height: '2.75rem', // 44px touch target
          }}
          aria-label="Navigate to Ticket"
        >
          <span style={visuallyHiddenStyle}>Ticket</span>
        </a>

        {/* Support Links */}
        <a
          href="#terms"
          onClick={(e) => e.preventDefault()}
          data-ref="footer_link_terms"
          className="absolute block pointer-events-auto cursor-pointer"
          style={{
            left: '2.5rem',
            top: '14.625rem',
            width: '12.0rem',
            height: '2.75rem', // 44px touch target
          }}
          aria-label="Terms & Condition"
        >
          <span style={visuallyHiddenStyle}>Terms & Condition</span>
        </a>

        <a
          href="#privacy"
          onClick={(e) => e.preventDefault()}
          data-ref="footer_link_privacy"
          className="absolute block pointer-events-auto cursor-pointer"
          style={{
            left: '2.5rem',
            top: '16.5rem',
            width: '10.0rem',
            height: '2.75rem', // 44px touch target
          }}
          aria-label="Privacy Policy"
        >
          <span style={visuallyHiddenStyle}>Privacy Policy</span>
        </a>

        <a
          href="#faq"
          onClick={(e) => e.preventDefault()}
          data-ref="footer_link_faq"
          className="absolute block pointer-events-auto cursor-pointer"
          style={{
            left: '2.5rem',
            top: '18.375rem',
            width: '5.0rem',
            height: '2.75rem', // 44px touch target
          }}
          aria-label="FAQ"
        >
          <span style={visuallyHiddenStyle}>FAQ</span>
        </a>

        {/* Visually Hidden Semantic Footer Info */}
        <div style={visuallyHiddenStyle}>
          <address>
            Gedung E Lantai 3, Fakultas Sains dan Matematika Universitas Diponegoro
          </address>
          <small>© 2026 HMIF UNDIP. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
