module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],

  plugins: ["react", "react-hooks"],

  rules: {
    /* ---------- General JS ---------- */
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "eqeqeq": ["error", "always"],
    "prefer-const": "error",
    "no-var": "error",

    /* ---------- React ---------- */
    "react/react-in-jsx-scope": "off", // React 17+
    "react/prop-types": "off", // Use TS or other validation
    "react/jsx-uses-react": "off",
    "react/jsx-key": "error",
    "react/no-direct-mutation-state": "error",
    "react/self-closing-comp": "error",

    /* ---------- Hooks ---------- */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    /* ---------- JSX Style ---------- */
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-curly-brace-presence": ["error", { props: "never" }],
    "react/jsx-no-useless-fragment": "error",

    /* ---------- Code Cleanliness ---------- */
    "no-trailing-spaces": "error",
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
  },
};
