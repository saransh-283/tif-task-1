module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      fontFamily: {
        source: ["Source Sans Pro", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "brand-orange": "#E23744",
        "brand-blue": "#0E2368",
        "brand-lightgray": "#444957",
        "brand-gray": "#424961",
      },
      backgroundImage: {
        gradient:"linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)"
      }
    },
  },
  plugins: [],
};
