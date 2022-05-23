module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ["Tomorrow", "sans-serif"],
        telex: ["Telex", "sans-serif"],
        tech: ["Share Tech", "sans-serif"],
      },
      dropShadow: {
        "6px": "6px 6px 0px rgba(0,0,0,1)",
        "10px": "10px 10px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
