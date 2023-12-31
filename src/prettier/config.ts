import type { Config } from 'prettier';

export const config: Config = {
	useTabs: true,
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	arrowParens: 'avoid',
	printWidth: 120,
} as Config;

export default config;
