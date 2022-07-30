module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "some-other-config-you-use",
    "prettier"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', "prettier"],
    "rules": {
      "prettier/prettier": "error"
    },
    root: true,
  };