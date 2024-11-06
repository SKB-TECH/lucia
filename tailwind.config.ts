import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center:true,
  			padding: {
  				DEFAULT: '1rem',
  				md: '1.5rem',
  				lg: '2rem'
  			}
  		},
		colors:{
			grays:"#f0f3f9"
		}
  	}
  },
  
};
export default config;
