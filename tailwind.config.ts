import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'white-gray': '#f7f9fb',
      'gray': {
        100: '#f7f9fb',
        200: '#f1f1f1',
        300: '#959595',
        900: '#565656',
      },
      'green': '#00cbc8',
      'light-green' :'#e5faf9',
      'red': '#fd1018',
      'black': '#000000'
    },
  },
  plugins: [],
};
export default config;
