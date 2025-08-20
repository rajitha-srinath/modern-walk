import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'men-color': "#2BD9AF",
        'women-color': '#FF5E84',
        'price-color': '#0E42FD',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom': '10px 15px 20px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
