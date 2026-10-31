/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'desktop': '1440px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          dark: '#000000',
          darker: '#070707',
          surface: '#0B0406',
          red: '#B62D25',
          'red-crimson': '#5D101A',
          'red-wine': '#340912',
          'red-maroon': '#440C12',
          'red-grunge': '#6B1724',
          gold: '#CAA56C',
          'gold-accent': '#E5B869',
          'gold-light': '#C5A572',
          cream: '#E8DCC4',
          beige: '#D9C7B2',
          light: '#EEEEEE',
          white: '#FFFFFF',
        },
        swatch: {
          black: '#040203',
          gold: '#CAA56C',
          burgundy: '#340912',
          crimson: '#5D101A',
        }
      },
      fontFamily: {
        display: ['"Irish Grover"', 'Georgia', 'serif'],
        sans: ['"Iosevka Charon"', 'monospace', 'sans-serif'],
        body: ['"Iosevka Charon"', 'monospace', 'sans-serif'],
        script: ['"Cherish"', 'cursive'],
      },
      maxWidth: {
        'desktop': '90rem', // 1440px in rem
        'tablet': '35rem',  // ~560px
        'mobile': '25.75rem', // 412px in rem
      },
      boxShadow: {
        'glow-red': '0 0 1.5625rem rgba(182, 45, 37, 0.45)',
        'glow-red-lg': '0 0 2.8125rem rgba(182, 45, 37, 0.65)',
        'btn-shadow': '0 0.625rem 1.5625rem -0.3125rem rgba(0, 0, 0, 0.6), 0 0 0.9375rem rgba(182, 45, 37, 0.3)',
      },
    },
  },
  plugins: [],
};
