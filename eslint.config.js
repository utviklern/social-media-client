import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
	{
		ignores: ["node_modules/**"],
	},
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
			globals: {
				window: "readonly",
				document: "readonly",
				console: "readonly",
				localStorage: "readonly",
				location: "readonly",
				URL: "readonly",
				URLSearchParams: "readonly",
				FormData: "readonly",
				Image: "readonly",
				fetch: "readonly",
				alert: "readonly",
			},
		},
		rules: {
			"no-unused-vars": "warn",
			"prettier/prettier": "warn",
		},
		plugins: {
			prettier: prettierPlugin,
		},
	},
	js.configs.recommended,
	prettierConfig,
];
