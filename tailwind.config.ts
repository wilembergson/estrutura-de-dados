import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'principal': ['Outfit', 'sans-serif']
    },
    extend: {
      spacing: {
        '-10': '-2.5rem', // Adiciona uma margem superior de -10 (representada em rem)
      },
      colors: {
        'yellow': '#FFBF00',
        'yellow2': '#FACC2E',
        'gray': '#424242',
        'gray-clear': '#585858',
        'gray-clear-2': '#DEDCDB',
        'main-item': '#F9F9F9'
      },
      height: {
      '100': '420px'
      },
      margin:{
        'lf-arrow':'-26px',
        'lf-item':'-66px',
        'rf-arrow':'-46px',
        'rf-item':'-36px',
        'tp-opcontainer':'-66px'
      }
    },
  },
  plugins: [],
}
export default config
