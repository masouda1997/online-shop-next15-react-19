import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			"no-console": ["warn", { allow: ['error' , 'warn'] }], // Warns on any console usage except console.error and console.warn
			'@typescript-eslint/no-explicit-any': 'off'
		},
	},
];

export default eslintConfig;
