/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#6440fa",
        primaryHover: "#5030d6",
        secondary: "#00fe84",
           secondaryHover: "#00d672",
        accent: "#e9543e",
        neutral: "#FFFFFF",

        // بک‌گراند در حالت روشن و تیره
        background: {
          default: "#ffffff", // light
          dark: "#111827", // FF یعنی شفافیت 100%

          card: {
            light: "#F3F4F6", // کارت در حالت روشن
            dark: "#3b42520", // کارت در حالت تیره
          },
          muted: "#E5E7EB", // borderها و جداکننده‌ها در حالت روشن
          mutedDark: "#374151", // معادل تیره muted
        },

        // رنگ متن
        primaryText: {
          heading: {
            light: "#24272B", // مشکی در حالت روشن
            dark: "#F9FAFB", // طوسی روشن در حالت تیره
          },
          secondaryText: {
            light: "#4B5563", // طوسی معمولی (مثلاً slate-600)
            dark: "#9CA3AF", // طوسی روشن‌تر (slate-400)
          },
        },
      },
    },
  },

  plugins: [],
};
