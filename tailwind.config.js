/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        basic: "hsl(240, 7%, 14%)",
        basicLight: "hsl(223, 18%, 26%)",
        lightGray: "hsl(220, 13%, 91%)",
      },
      boxShadow: {
        fallback: "0px 20px 80px 0px #223049",
      },
    },
  },
  plugins: [],
};
