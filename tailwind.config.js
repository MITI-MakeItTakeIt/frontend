/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./src/assets/MITI_logo.svg')",
        banner_one: "url('./src/assets/banner-1.svg')",
        banner_two: "url('./src/assets/banner-2.svg')",
        game_logo: "url('./src/assets/game_info.svg')",
      },
    },
  },
  plugins: [],
};
