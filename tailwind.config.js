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
          light: "rgb(178 235 242 / <alpha-value>)", // celeste pastel con opacidad
          dark: "rgb(0 151 167 / <alpha-value>)", // celeste oscuro con opacidad
        },
        accent: "#fbc02d", // amarillo de acento 🌟

        gray: {
          light: "#f5f5f5",
          base: "#737373",
          dark: "#171717",
        },
      },
    },
    variants: {
      extend: {
        backdropBlur: ["responsive"],
      },
    },
  },
  plugins: [],
};
