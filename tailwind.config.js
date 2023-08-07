/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "500px" },
      },
      boxShadow: {
        base: "0px 0px 6px 0px rgba(46, 58, 90, 0.13)",
      },
      backgroundColor: {
        'aluxion-primary': "#F97316",
      },
      fontFamily: {
        aluxion: "General Sans",
      },
      colors:{
        'aluxion-primary':"#F97316"
      }
    },
  },
  plugins: [],
};
