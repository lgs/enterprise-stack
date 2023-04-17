const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/tw-elements/dist/js/**/*.js',
		require('path').join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		),
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms', 'nightwind', 'tw-elements/dist/plugin'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
	],
	darkMode: "class"
}

module.exports = config