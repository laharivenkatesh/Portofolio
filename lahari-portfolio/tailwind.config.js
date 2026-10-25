/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette (Cotton / Cherry Red / Maroon / Noir Black + Maroon & Cream swatches)
        void: '#1B1717', // Noir Black — page background
        cotton: '#EDEBDD', // Cotton
        cream: '#FAF2E7', // Cream
        wine: '#630000', // Maroon
        cherry: '#810100', // Cherry Red
        claret: '#5A0717', // deep Maroon swatch
        parchment: '#EBDCCD', // soft cream panel (from the reference's "What I do" card)
        navy: {
          // deep maroon-black surfaces
          DEFAULT: '#2A0E0F',
          deep: '#210B0C',
          light: '#3A1416',
        },
        glass: {
          border: 'rgba(237,235,221,0.12)',
          borderStrong: 'rgba(217,175,152,0.35)',
          fill: 'rgba(237,235,221,0.03)',
        },
        ink: {
          DEFAULT: '#EDEBDD',
          muted: '#D3C2B8',
          faint: '#B5A39B',
        },
        accent: {
          blush: '#D9AF98', // the reference's peach headline tone
          rose: '#D89E93', // dusty rose for labels
          cherry: '#810100',
        },
      },
      fontFamily: {
        display: ['"Bodoni Moda Variable"', 'Didot', '"Bodoni 72"', 'Georgia', 'serif'],
        body: ['"Jost Variable"', 'system-ui', 'sans-serif'],
        label: ['"Jost Variable"', 'system-ui', 'sans-serif'],
        script: ['Allura', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 36px rgba(217,175,152,0.10)',
        card: '0 10px 36px rgba(10,3,3,0.45)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '100%': { transform: 'translate3d(4%, 6%, 0) scale(1.12)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        drift: 'drift 26s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
