module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "project": ["./tsconfig.json"]
  },
  plugins: ['react-refresh',"@typescript-eslint", "prettier","import"],

  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin", // Built-in imports (come from NodeJS native) go first
          "external", // <- External imports
          "internal", // <- Absolute imports
          ["sibling", "parent"], // <- Relative imports, the sibling and parent types they can be mingled together
          "index", // <- index imports
          "unknown" // <- unknown
        ],
        "newlines-between": "always",
        "alphabetize": {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          "order": "asc",
          /* ignore case. Options: [true, false] */
          "caseInsensitive": true
        }
      }
    ],
  },
}
