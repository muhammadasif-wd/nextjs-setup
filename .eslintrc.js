module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
