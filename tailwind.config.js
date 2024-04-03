/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}','./src/posts/*.md'],
	theme: {
		extend: {
			fontSize: {
				'12xl': '12rem',
			},
			lineHeight: {
				'extra-loose': '100', // Example custom line height
				// Add more custom line heights as needed
			  }
		}
	},
	plugins: []
};
