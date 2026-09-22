/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      // ---------------------------------------------------------------
      // DESIGN TOKENS — palette Atelier di Architettura: BASE SABBIA calda
      // + ACCENTO VIVACE (terracotta acceso). Indicazioni cliente.
      // DA VALIDARE AL GATE 0.
      // ---------------------------------------------------------------
      colors: {
        ink: '#1c1b19',        // testo forte / sezioni scure / footer
        accent: {
          DEFAULT: '#e4572e',  // terracotta ACCESO (bottoni, link, eyebrow, riga intro)
          dark: '#c8441f',     // hover
        },
        sand: {
          DEFAULT: '#e4d7c3',  // sabbia (accenti/corsivi su fondo scuro)
          light: '#ede3d2',    // sabbia chiara (fondo sezioni alternate)
        },
        paper: '#f5eee1',      // sabbia chiarissima (fondo pagina)
        grey: {
          DEFAULT: '#94856f',  // testo secondario caldo (sabbia-grigio)
          light: '#ede3d2',    // neutro sabbia (fondo card)
        },
        body: '#2e2a24',       // testo corrente (caldo, alto contrasto su sabbia)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        heading: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        h1: ['clamp(2rem,3.2vw + 1rem,4.25rem)', { lineHeight: '1.04', letterSpacing: '-.02em' }],
        h2: ['clamp(1.625rem,2.2vw + 1rem,3rem)', { lineHeight: '1.1', letterSpacing: '-.015em' }],
        h3: ['clamp(1.25rem,1.2vw + .75rem,1.75rem)', { lineHeight: '1.2' }],
        h4: ['clamp(1.125rem,1vw + .625rem,1.375rem)', { lineHeight: '1.25' }],
        h5: ['1.125rem', { lineHeight: '1.35' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        s: ['.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '3rem',
        '2xl': '4.5rem',
        header: 'var(--header-h)',
      },
      height: { header: 'var(--header-h)' },
      minHeight: { svh: '100svh' },
      maxWidth: { '2xl': '42rem' },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },
  plugins: [],
};
