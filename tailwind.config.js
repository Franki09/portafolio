/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#770186", // violeta oscuro
          base: "#df03fc", // tu color 🎯
          light: "#f5c2fe", // violeta pastel
        },
        secondary: {
          light: "#b2ebf2", // celeste pastel
          dark: "#0097a7", // celeste oscuro
        },
        accent: "#fbc02d", // amarillo de acento 🌟

        gray: {
          light: "#f5f5f5",
          base: "#737373",
          dark: "#171717",
        },
      },
    },
  },
  plugins: [],
};
