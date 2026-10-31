import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="footer"
      data-ref="footer_bg"
      className="relative w-full h-[26.75rem] select-none text-[#FFFFFF]"
      style={{
        minHeight: '26.75rem',
        backgroundColor: '#420C11',
      }}
    >
      {/* Top 5px Drape from PDF (y=6000..6005) */}
      <div className="absolute top-0 left-0 w-full h-[0.3125rem] pointer-events-none z-0">
        <img
          src="/assets/footer-top-drape.png"
          alt=""
          className="w-full h-full object-cover"
          width={1440}
          height={5}
        />
      </div>

      {/* 90rem Canvas Layer (1440px) */}
      <div className="relative w-full max-w-[90rem] h-[26.75rem] mx-auto z-10 pointer-events-none">
        {/* HMIF Undip Logo: pos=(55.81, 6064.0), dim=(86.38x109.0) -> top=4.0rem, left=3.488rem */}
        <div
          data-ref="footer_logo_hmif"
          className="absolute pointer-events-auto"
          style={{
            left: '3.488rem',
            top: '4.0rem',
            width: '5.399rem',
            height: '6.8125rem',
          }}
        >
          <img
            src="/assets/logo-hmif.png"
            alt="Logo HMIF Universitas Diponegoro"
            className="w-full h-full object-contain"
            width={86}
            height={109}
          />
        </div>

        {/* Kabinet Gantara Karsa Logo: pos=(153.71, 6062.0), dim=(123.58x113.0) -> top=3.875rem, left=9.607rem */}
        <div
          data-ref="footer_logo_gantara"
          className="absolute pointer-events-auto"
          style={{
            left: '9.607rem',
            top: '3.875rem',
            width: '7.724rem',
            height: '7.0625rem',
          }}
        >
          <img
            src="/assets/logo-gantara-karsa.png"
            alt="Logo Kabinet Gantara Karsa HMIF Undip"
            className="w-full h-full object-contain"
            width={124}
            height={113}
          />
        </div>

        {/* Secretariat Address: pos=(56.0, 6175.0), dim=(331.0x34.0) -> top=10.9375rem, left=3.5rem */}
        <p
          data-ref="footer_address"
          className="absolute font-sans font-normal text-[1rem] leading-[1.2] text-[#FFFFFF] pointer-events-auto select-text"
          style={{
            left: '3.5rem',
            top: '10.9375rem',
            width: '20.6875rem',
            height: '2.125rem',
          }}
        >
          Gedung E Lantai 3, Fakultas Sains dan Matematika <br />
          Universitas Diponegoro
        </p>

        {/* Column: Navigation Heading: pos=(781.0, 6084.0), dim=(112.0x24.0) -> top=5.4375rem, left=48.8125rem */}
        <h3
          data-ref="footer_nav_heading"
          className="absolute font-sans font-bold text-[1.5rem] leading-none text-[#FFFFFF] pointer-events-auto"
          style={{
            left: '48.8125rem',
            top: '5.4375rem',
            width: '7.0rem',
            height: '1.5rem',
          }}
        >
          Navigation
        </h3>

        {/* Column: Navigation Link 1 - Home: top=8.3125rem */}
        <div
          className="absolute flex items-center pointer-events-auto"
          style={{
            left: '50.03875rem',
            top: '8.3125rem',
            height: '1.25rem',
          }}
        >
          <img
            src="/assets/arrow-right.png"
            alt=""
            className="w-[1.11rem] h-[0.9425rem] object-contain pointer-events-none"
            width={18}
            height={15}
          />
          <a
            href="#hero"
            className="ml-[0.54rem] font-sans font-normal text-[1.25rem] leading-none text-[#FFFFFF] hover:text-[#CAA56C] transition-colors duration-200"
          >
            Home
          </a>
        </div>

        {/* Column: Navigation Link 2 - About: top=10.1875rem */}
        <div
          className="absolute flex items-center pointer-events-auto"
          style={{
            left: '50.03875rem',
            top: '10.1875rem',
            height: '1.25rem',
          }}
        >
          <img
            src="/assets/arrow-right.png"
            alt=""
            className="w-[1.11rem] h-[0.9425rem] object-contain pointer-events-none"
            width={18}
            height={15}
          />
          <a
            href="#about"
            className="ml-[0.54rem] font-sans font-normal text-[1.25rem] leading-none text-[#FFFFFF] hover:text-[#CAA56C] transition-colors duration-200"
          >
            About
          </a>
        </div>

        {/* Column: Navigation Link 3 - Ticket: top=12.0625rem */}
        <div
          className="absolute flex items-center pointer-events-auto"
          style={{
            left: '50.03875rem',
            top: '12.0625rem',
            height: '1.25rem',
          }}
        >
          <img
            src="/assets/arrow-right.png"
            alt=""
            className="w-[1.11rem] h-[0.9425rem] object-contain pointer-events-none"
            width={18}
            height={15}
          />
          <a
            href="#ticket"
            onClick={(e) => scrollToSection(e, 'ticket')}
            className="ml-[0.54rem] font-sans font-normal text-[1.25rem] leading-none text-[#FFFFFF] hover:text-[#CAA56C] transition-colors duration-200"
          >
            Ticket
          </a>
        </div>

        {/* Column: Support Heading: pos=(1052.0, 6084.0), dim=(84.0x24.0) -> top=5.4375rem, left=65.6875rem */}
        <h3
          data-ref="footer_support_heading"
          className="absolute font-sans font-bold text-[1.5rem] leading-none text-[#FFFFFF] pointer-events-auto"
          style={{
            left: '65.6875rem',
            top: '5.4375rem',
            width: '5.25rem',
            height: '1.5rem',
          }}
        >
          Support
        </h3>

        {/* Column: Support Link 1 - Terms & Condition: top=8.3125rem */}
        <div
          className="absolute flex items-center pointer-events-auto"
          style={{
            left: '66.97625rem',
            top: '8.3125rem',
            height: '1.25rem',
          }}
        >
          <img
            src="/assets/arrow-right.png"
            alt=""
            className="w-[1.11rem] h-[0.9425rem] object-contain pointer-events-none"
            width={18}
            height={15}
          />
          <a
            href="#terms"
            className="ml-[0.54rem] font-sans font-normal text-[1.25rem] leading-none text-[#FFFFFF] hover:text-[#CAA56C] transition-colors duration-200"
          >
            Terms & Condition
          </a>
        </div>

        {/* Column: Support Link 2 - Privacy Policy: top=10.1875rem */}
        <div
          className="absolute flex items-center pointer-events-auto"
          style={{
            left: '66.97625rem',
            top: '10.1875rem',
            height: '1.25rem',
          }}
        >
          <img
            src="/assets/arrow-right.png"
            alt=""
            className="w-[1.11rem] h-[0.9425rem] object-contain pointer-events-none"
            width={18}
            height={15}
          />
          <a
            href="#privacy"
            className="ml-[0.54rem] font-sans font-normal text-[1.25rem] leading-none text-[#FFFFFF] hover:text-[#CAA56C] transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>

        {/* Column: Support Link 3 - FAQ: top=12.0625rem */}
        <div
          className="absolute flex items-center pointer-events-auto"
          style={{
            left: '66.97625rem',
            top: '12.0625rem',
            height: '1.25rem',
          }}
        >
          <img
            src="/assets/arrow-right.png"
            alt=""
            className="w-[1.11rem] h-[0.9425rem] object-contain pointer-events-none"
            width={18}
            height={15}
          />
          <a
            href="#faq"
            className="ml-[0.54rem] font-sans font-normal text-[1.25rem] leading-none text-[#FFFFFF] hover:text-[#CAA56C] transition-colors duration-200"
          >
            FAQ
          </a>
        </div>

        {/* Footer Copyright: pos=(588.0, 6368.0), dim=(228.6x13.0) -> top=23.0rem, left=36.75rem */}
        <p
          data-ref="footer_copyright"
          className="absolute font-sans font-normal text-[0.875rem] leading-none text-[#FFFFFF]/80 text-center flex items-center justify-center pointer-events-auto select-text"
          style={{
            left: '36.75rem',
            top: '23.0rem',
            width: '16.5rem',
            height: '1.25rem',
          }}
        >
          © 2026 HMIF UNDIP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
