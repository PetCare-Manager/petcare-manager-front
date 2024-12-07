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
        primary: "#d75c7b",
        secondary: "#72C3E0",
        typography: "#4D5C61",
        typography_2: "#292929",
        inputborder: "#A6A6A6",
        customyellow: "#EEE07D",
        customwhite: "#F4F7F7",
        customgrey: "F3F6F6",
        statusred: "#F94E4E",
        statusyellow: "#e5c23a",
        statusgreen: "#007E4E",
      },
    },
  },
  plugins: [],
};
