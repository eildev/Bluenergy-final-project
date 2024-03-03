/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      karla: ["Karla", "sans-serif"],
      titillium: ['Titillium Web', "sans-serif"]
    },
    backgroundColor: {
      body: "#F6FCFC",
      primary: "#64b15f",
      secondary: "#2552a3",
      gray: "#92989A",
      white: "#FFFFFF",
    },
    textColor: {
      primary: "#64b15f",
      secondary: "#2552a3",
      gray: "#92989A",
      body: "#F6FCFC",
      white: "#FFFFFF",
    },
    borderColor: {
      primary: "#64b15f",
      secondary: "#2552a3",
    },
    outlineColor: {
      primary: "#64b15f",
      secondary: "#2552a3",
    },
    ringColor: {
      primary: "#64b15f",
      secondary: "#2552a3",
    }
  },
  plugins: [],
}

