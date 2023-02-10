module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      colors: {
        "brand-orange": "#E23744",
        "brand-blue": "#0E2368",
        "brand-lightgray": "#444957",
        "brand-gray": "#424961",
      },
    },
  },
  plugins: [],
};
