import type { Config } from "tailwindcss";

const config: Config = {
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
        gray: "var(--gray)",
        green: "var(--green)",
        yellow: "var(--yellow)",
        red: "var(--red)",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
};
export default config;
