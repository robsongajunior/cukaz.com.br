/** @type {import('tailwindcss').Config} */
module.exports = {
	// important: true,
	darkMode: 'class',
	content: [
		'src/**/*.{astro,html,md,mdx,js,vue}',
		'node_modules/**/*.{html,vue}' // required for astro project
	],
	// theme: {},
	plugins: [
		require('@tailwindcss/typography'),
		function ({ addUtilities/*, variants*/ }) {
			const newUtilities = {};

			newUtilities['.px-shell'] = {
				paddingLeft: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem)',
				paddingRight: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem)'
			};

			newUtilities['.px-container'] = {
				maxWidth: '1536px',
				margin: '0 auto',
				paddingLeft: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem)',
				paddingRight: 'clamp(0.75rem, 0.7484rem + 2.6076vw, 2rem)'
			};

			newUtilities['@media (min-width: 768px)'] = {
				'.px-shell': {
					paddingLeft: '2rem',
					paddingRight: '2rem',
				},
				'.px-container': {
					paddingLeft: '2rem',
					paddingRight: '2rem',
				}
			};

			newUtilities['@media (min-width: 1024px)'] = {
				'.px-container': {
					paddingLeft: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem)',
					paddingRight: 'clamp(2rem, -3.3683rem + 8.3879vw, 10rem)',
				}
			};

			addUtilities(newUtilities, ['responsive', 'hover']);
		},
	]
}
