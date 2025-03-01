import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,vue,html}"],
	theme: {
		extend: {
			colors: {
				primary: "#f58a42",
				secondary: "#64748B",
				accent: "#F59E0B",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Merriweather", "serif"],
			},
			spacing: {
				"128": "32rem",
				"144": "36rem",
			},
			borderRadius: {
				xl: "1.25rem",
			},
		},
	},
	plugins: [],
};

export default config;
