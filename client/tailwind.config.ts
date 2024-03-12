import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/play.jpg')",
        footer: "url('/footer.png')",
      },
      backgroundSize: {
        footer: "400px 425px",
        // Adjust width and height as needed
        // hero: "1500px 1900px",
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["30px", "48px"],
        xl: ["50px", "92px"],
      },
    },
  },
  plugins: [],
};
export default config;
