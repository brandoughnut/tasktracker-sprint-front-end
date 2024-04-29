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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'teal' : '#6FDFC4',
        'dark-teal' : '#3EBE9F',        
        'darker-teal': '#0B7D61',
        'light-teal' : '#AEE6D9',
        'very-light-teal' : '#F1FFFC',
        'cyan' : '#57CDFF',
        'red' : '#CD0000',
        'light-red' : '#FF6E6E',
        'magenta' : '#D59FFF',
        'gray' : '#C8C8C8',
        'drk-gray' : '#ABABAB',
        'very-dark-gray' : '#5E5E5E',        
        'light-gray' : '#F4F4F4',
        'purple' : '#513DCC',
        'yellow' : '#D3FF57',
        'orange' : '#FFC56E',
        'basically-black' :'#171717',
        'blue' : '#3177FF',
      },
    },
  },
  plugins: [],
};
export default config;
