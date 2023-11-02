/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	printWidth: 80,
	bracketSpacing: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
export default config
