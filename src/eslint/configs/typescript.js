import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { GLOB_TS, GLOB_TSX } from '../config.js';
import { toArray } from '../utils.js';

export function typescript({ files = [GLOB_TSX, GLOB_TS], tsConfigPath = './tsconfig.json' }) {
	return [
		tsPlugin.configs.recommended,
		tsPlugin.configs.stylistic,
		{
			plugins: {
				'@typescript-eslint': tsPlugin,
			},
			settings: {},
		},
		{
			files,
			languageOptions: {
				parser: tsParser,
				parserOptions: {
					project: toArray(tsConfigPath),
				},
			},
		},
	];
}
