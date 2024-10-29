/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg":
          "url('../../public/assets/bannerbg.png')",
          "plain-bg": "url('../../public/assets/bg.png')",
          "pattern-bg": "url('../../public/assets/pattern1.png')",
          "pattern-bg1": "url('../../public/assets/pattern2.png')",
          "gradient-bg": "linear-gradient(180deg, #F3F5FE 0%, #FFFFFF 65.11%)",
          "gradient-top": "linear-gradient(0deg, #F3F5FE 0%, #FFFFFF 82.06%)",
      },
      colors: {
        background: "var(--background)",
        "primary-color": "#2447F2",
        "second-color": "#080F33",
        "lightbg": "#f3f5fe",
        "border-color": "#39405f",
        "green-color": "#48DDFF",
        "second-border": "#2447F24D",
        "accbg": "#F3F5FE",
        "title": "#8A8EA6",
        "white-color": "#fff",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
