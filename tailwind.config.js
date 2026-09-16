/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // EXACT WOMUP Brand Color System
        'womup-dark': '#05062A',        // Primary Dark Background (Dominant 60%)
        'womup-surface': '#0C0D35',     // Surface for cards & dark sections (20%)
        'womup-surface-light': '#171843', // Elevated cards & navigation states
        'womup-pink': '#FD849F',        // Primary Pink (CTAs, highlights, badges, numbers)
        'womup-pink-light': '#FFC4D1',  // Primary Pink Light (Gradient highlights, glow)
        'womup-soft-pink': '#FFD0DD',   // Soft Pink (Light accents, small highlights)
        'womup-purple': '#6651BF',      // Primary Purple (Secondary buttons, icons, transitions)
        'womup-blue': '#3048C8',        // Royal Blue (Secondary accents, logo graphics)
        'womup-deep-purple': '#66338C', // Deep Purple (Dark gradient areas, effects)
        'womup-lavender': '#D8C9ED',    // Lavender (Secondary text, light highlights)
        'womup-pink-white': '#FDE3EB',  // Pink White (Very light backgrounds)
        'womup-secondary-pink': '#F3BED8', // Secondary Pink (Supporting accents)
        
        // Text Colors
        'womup-text-primary': '#FFFFFF',
        'womup-text-secondary': '#D8D8E8',
        'womup-text-dark': '#05062A',
        
        // Borders
        'womup-border': '#292A52',      // Default subtle border
        'womup-border-light': 'rgba(5, 6, 42, 0.10)',
        
        // Status Colors
        'womup-success': '#4ADE80',
        'womup-warning': '#FACC15',
        'womup-error': '#FB7185',
        
        // Aliases for compatibility
        womup: {
          dark: '#05062A',
          surface: '#0C0D35',
          'surface-light': '#171843',
          pink: '#FD849F',
          'pink-light': '#FFC4D1',
          'soft-pink': '#FFD0DD',
          purple: '#6651BF',
          blue: '#3048C8',
          'deep-purple': '#66338C',
          lavender: '#D8C9ED',
          'pink-white': '#FDE3EB',
          'secondary-pink': '#F3BED8',
          border: '#292A52',
          success: '#4ADE80',
        },
      },
      backgroundImage: {
        'womup-gradient-main': 'linear-gradient(135deg, #FD849F 0%, #FFC4D1 50%, #6651BF 100%)',
        'womup-gradient-pink-blue': 'linear-gradient(135deg, #FD849F 0%, #FFC4D1 50%, #3048C8 100%)',
        'womup-gradient-full': 'linear-gradient(135deg, #FD849F 0%, #F3BED8 30%, #6651BF 70%, #3048C8 100%)',
        'womup-gradient-soft': 'linear-gradient(135deg, #FFD0DD 0%, #F3BED8 35%, #D8C9ED 70%, #6651BF 100%)',
        'womup-gradient-dark': 'linear-gradient(135deg, #05062A 0%, #0C0D35 40%, #66338C 75%, #6651BF 100%)',
        'womup-gradient-cta': 'linear-gradient(135deg, #05062A 0%, #66338C 50%, #6651BF 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'Inter', 'sans-serif'],
        inr: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card-dark': '0 4px 20px -2px rgba(5, 6, 42, 0.4)',
        'card-hover': '0 12px 32px -4px rgba(102, 81, 191, 0.25)',
        'pink-glow': '0 8px 28px -4px rgba(253, 132, 159, 0.4)',
        'purple-glow': '0 8px 28px -4px rgba(102, 81, 191, 0.35)',
        'coin-glow': '0 0 35px rgba(253, 132, 159, 0.3), 0 0 60px rgba(102, 81, 191, 0.2)',
      },
      borderRadius: {
        'button': '10px',
        'card': '16px',
      },
    },
  },
  plugins: [],
}
