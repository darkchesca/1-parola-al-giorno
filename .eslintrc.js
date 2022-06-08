module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'airbnb',
        'plugin:jest/recommended',
        'plugin:jest/style',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        // indent rules
        indent: [2, 4, { SwitchCase: 1 }],
        'react/jsx-indent': [2, 4, { indentLogicalExpressions: true }],
        'react/jsx-indent-props': [2, { indentMode: 4, ignoreTernaryOperator: true }],
        'react/jsx-newline': [2, { prevent: true }],
        'no-unused-vars': [2, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'consistent-return': [2, { treatUndefinedAsUnspecified: true }],
        // force parens for multiline react's returns
        'react/jsx-wrap-multilines': [2, { return: 'parens-new-line' }],
        // add a empty line between return statements
        'padding-line-between-statements': [2, { blankLine: 'always', prev: '*', next: 'return' }],
        // force align props
        'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
        // force react components to be a function declaration
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/jsx-props-no-spreading': 0,
        // force `React.Fragment`
        'react/jsx-fragments': [2, 'element'],
        'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
        'react/no-unstable-nested-components': [2, { allowAsProps: true }],
        // enable longer lines of code and disable this rule for the comments
        'max-len': [2, { code: 120, ignoreComments: true }],
        // a11y rule override
        'jsx-a11y/label-has-associated-control': [2, { assert: 'either' }],
        // disable prop-types check
        'react/prop-types': 0,
        // disable jsx filename
        'react/jsx-filename-extension': 0,
        'no-restricted-exports': 0,
        'react/no-unescaped-entities': 0,
        'no-plusplus': 0,
        // currently eslint has problem with linting jsx tags inside ternary operators
        'react/jsx-closing-tag-location': 0,
        'import/no-unresolved': [2, { ignore: ['scripts'] }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.spec.js'] }],
    },
};
