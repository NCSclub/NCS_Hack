/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070707"
      },
      backgroundImage: {
        shadow: "url('/images/Footer/backgroundShadow.svg')",
        arrow: "url('/images/Footer/backGroundArrow.svg')",
        cube: "url('/images/Footer/backGroundCube.svg')",
      },
    },
  },
  plugins: [],
};
