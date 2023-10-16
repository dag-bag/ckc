import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // "sans" : ['Quicksand', 'monospace'],
        "sans": ['Quicksand', 'monospace'],

        "game": ['Orbitron', 'monospace'],
        "heading": ['Gabarito', 'monospace'],
        "fun": ["Fredoka", "monospace"]
      }
    },
  },
  plugins: [],
}
export default config
