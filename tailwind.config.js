/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "./src/assets/MITI_logo.svg",
        banner_one: "/src/assets/banner-1.svg",
        banner_two: "/src/assets/banner-2.svg",
        game_logo: "/src/assets/game_info.svg",
      },
    },
  },
  plugins: [],
};
