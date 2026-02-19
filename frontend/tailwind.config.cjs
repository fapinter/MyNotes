/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          background: "var(--gray-background)",
          light_bg: "var(--gray-background-2)",
          blue_pri: "var(--blue-primary)",
          blue_sec: "var(--blue-secondary)",
          my_white: "var(--white-primary)",
          stone_gray: "var(--stone-gray)",
          stone_black: "var(--stone-black)" ,

        },
      
    },
  },
  plugins: [],
}
