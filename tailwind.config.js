/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy':      '#0A0F1E',
        'navy-card': '#0f1629',
        'navy-hover':'#131d35',
        'teal':      '#64FFCC',
        'blue-acc':  '#7DBFFF',
        'amber-acc': '#FFCB6B',
        'slate-text':'#E2E8F4',
        'muted':     '#8892A4',
        'dim':       '#4a5568',
        // light mode
        'light-bg':  '#F7F8FC',
        'light-card':'#FFFFFF',
        'light-teal':'#007864',
        'light-blue':'#1d5fa8',
        'light-amber':'#b45309',
      },
      fontFamily: {
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
