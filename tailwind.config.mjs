/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";


export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1899E9", // Define your custom color

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
