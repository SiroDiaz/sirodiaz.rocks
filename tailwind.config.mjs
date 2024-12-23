import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindMotion from 'tailwindcss-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        onyx: '#424348',
        raisingBlack: '#15131a',
        springGreen: '#03ff96',
      },
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ["'Nunito Variable'", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [typography, daisyui, tailwindMotion],
  daisyui: {
    themes: ['black']
  },
}
