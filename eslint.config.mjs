import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

export default defineConfig(
  {
    ignores: ["node_modules/**", "playwright-report/**", "test-results/**"],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["tests/**/*.ts", "pages/**/*.ts", "components/**/*.ts"],
    ...playwright.configs["flat/recommended"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,

      "playwright/no-wait-for-timeout": "error",
      "playwright/no-focused-test": "error",
      "playwright/expect-expect": "error",
      "playwright/prefer-web-first-assertions": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
);
