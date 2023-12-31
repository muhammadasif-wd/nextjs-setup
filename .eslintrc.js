module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'next',
        'prettier',
        'next/core-web-vitals',
        'plugin:@typescript-eslint',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
