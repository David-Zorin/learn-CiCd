import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // 1. Tell ESLint which files to ignore (replaces .eslintignore)
    ignores: ["dist/**", "coverage/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      // 2. Add node globals here
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  }
);