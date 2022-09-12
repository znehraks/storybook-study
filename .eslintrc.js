module.exports = {
  plugins: ['@typescript-eslint', 'file-progress', 'import', 'prettier', 'react'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-redeclare': 'warn',
    'file-progress/activate': 1,
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          'vitest.config.ts',
          'webpack.config.*',
          '.ci/**/*',
          'packages/*/test/**/*',
          '**/__benchmarks__/**/*',
          '**/__tests__/**/*',
          '**/__stories__/**/*',
        ],
      },
    ],
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'archisketch',
            group: 'internal',
          },
          {
            pattern: '@archisketch-dev-team/**',
            group: 'internal',
          },
          {
            pattern: 'worker-loader?inline=no-fallback!../**',
            group: 'parent',
          },
          {
            pattern: 'worker-loader?inline=no-fallback!./**',
            group: 'sibling',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'no-console': 'off',
    'no-param-reassign': [
      'warn',
      {
        props: false,
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['connect'],
            message: "Please use 'useDispatch' and 'useSelector' instead.",
          },
          {
            name: 'react-i18next',
            importNames: ['withTranslation', 'WithTranslation'],
            message: "Please use 'useTranslation' instead.",
          },
        ],
      },
    ],
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-underscore-dangle': [
      'warn',
      {
        allow: ['_id'],
      },
    ],
    '@typescript-eslint/naming-convention': ['warn'],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [],
};
