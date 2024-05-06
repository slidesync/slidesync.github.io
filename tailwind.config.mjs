/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";


export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-primary': 'linear-gradient(to right, #137BBE, #1899E9, #0D5B91)',
      }),
      colors: {
        primary: "#1899E9", // Define your custom color
        primaryDark: "#1178c1"
      },
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
        sora: ["Sora", "sans-serif"],
      },
      scale: {
        '175': '1.75',
        '200': '2',
        '300': '3',
      },
    },
  },
  plugins: [],
};
