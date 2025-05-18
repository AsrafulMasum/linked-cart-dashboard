/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F665A",
        secondary: "#E7F0EF",
        sub_title: "#757575",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
