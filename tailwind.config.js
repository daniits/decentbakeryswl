/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.5s ease-out forwards',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], 
        roboto: ['Roboto', 'sans-serif'], 
      },
      colors: {
        primary: '#1E3A8A', 
        secondary: '#3B82F6', 
        pink: '#fc7c7c', // pink
        blue: '#2b4174', //darker blue 
        success: '#10B981', 
        warning: '#FBBF24', 
        neutral: '#9CA3AF',
        background: '#F3F4F6',
        foreground: '#111827',
      },
      fontSize: {
        xs: '12px',  
        sm: '14px',  
        base: '16px', 
        lg: '18px',  
        xl: '20px', 
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
        '7xl': '80px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px', 
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        '2xl': '0px 25px 50px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      zIndex: {
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
      },
      transitionTimingFunction: {
        'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
