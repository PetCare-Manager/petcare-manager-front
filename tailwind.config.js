/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "afacad-regular": ["AfacadFlux-Regular"],
        "afacad-semibold": ["AfacadFlux-SemiBold"],
        "raleway-extralight": ["Raleway-ExtraLight"],
        "raleway-light": ["Raleway-Light"],
        "raleway-regular": ["Raleway-Regular"],
        "raleway-medium": ["Raleway-Medium"],
        "raleway-semibold": ["Raleway-SemiBold"],
        "raleway-bold": ["Raleway-Bold"],
        "raleway-black": ["Raleway-Black"],
      },
      colors: {
        primary: "#5C66F4",
        secondary: "#FF0066/40",
        typography: "#475569",
        typography_2: "#222222",
        inputborder: "#A6A6A6",
      },
    },
  },
  plugins: [],
};
