/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#e5e7eb",
					secondary: "#5eead4",
					accent: "#ffffff",
					neutral: "#ffffff",
					"base-100": "#ffffff",
					info: "#5eead4",
					success: "#4ade80",
					warning: "#fb7185",
					error: "#f43f5e",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
