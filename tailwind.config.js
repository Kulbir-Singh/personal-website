/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#101010",
        "custom-blue": "#2196F3",
        "custom-green-100": "#fffef5",
        "custom-green-300": "#f9fbf1",
        "custom-green-300": "#edf5e9",
        "custom-green-400": "#c2dfcd",
        "custom-green-900": "#2D3D36",
      },
    },
    zIndex: {
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
    },
  },
  plugins: [],
};
