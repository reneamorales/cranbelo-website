/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'secondary': ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif']
      },
      lineHeight: {
        'lh-2xs': '0.75rem',    // 12px
        'lh-xs': '1rem',        // 16px
        'lh-sm': '1.25rem',     // 20px
        'lh-base': '1.5rem',    // 24px
        'lh-xl': '1.75rem',     // 28px
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.scale-105': {
          transform: 'scale(1.05)'
        },
      });
    },
  ],
};

