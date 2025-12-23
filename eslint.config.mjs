import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextConfig from "eslint-config-next";
import tailwindcss from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["dist/*", ".cache", "public", "node_modules", "*.esm.js"],
  },
  ...nextConfig,
  ...compat.extends("prettier"),
  ...tailwindcss.configs["flat/recommended"],
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      tailwindcss: {
        callees: ["cn"],
        config: "tailwind.config.js",
      },
      next: {
        rootDir: ["./"],
      },
    },
  },
];

export default eslintConfig;
