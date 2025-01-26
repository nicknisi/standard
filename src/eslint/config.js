// This matches on .js, .jsx, .ts, .tsx, .cjs, .mjs, .mjsx, etc.
const globExtension = '?([cm])[jt]s?(x)';

export const GLOB_SRC = `**/*.${globExtension}`;
export const GLOB_JS = '**/*.?([cm])js';
export const GLOB_JSX = '**/*.?([cm])jsx';
export const GLOB_TS = '**/*.?([cm])ts';
export const GLOB_TSX = '**/*.?([cm])tsx';
export const GLOB_JSON = '**/*.json';
export const GLOB_HTML = '**/*.htm?(l)';
export const GLOB_TESTS = [
	`**/__tests__/**/*.${globExtension}`,
	`**/*.spec.${globExtension}`,
	`**/*.test.${globExtension}`,
];
