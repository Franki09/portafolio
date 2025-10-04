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
          dark: "#004d40", // verde azulado oscuro
          base: "#00897b", // turquesa
          light: "#80cbc4", // turquesa claro
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

    keyframes: {
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-4px)" },
        "75%": { transform: "translateX(4px)" },
      },
      tilt: {
        "0%, 100%": { transform: "rotate(0deg)" },
        "25%": { transform: "rotate(-2deg)" },
        "75%": { transform: "rotate(2deg)" },
      },
    },
    animation: {
      shake: "shake 0.3s ease-in-out",
      tilt: "tilt 0.5s ease-in-out infinite",
    },
  },
  plugins: [],
};
