/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E2327",

          secondary: "#161B22",

          accent: "#637381",

          neutral: "#FFFFFF",

          "base-100": "#F5F6F9",

          info: "#1F54E5",

          success: "#168D7D",

          warning: "#CB7315",

          error: "#F41A4D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
