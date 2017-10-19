// @flow

// See https://github.com/benmosher/eslint-plugin-import

module.exports = {
  plugins: ['import'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
  },
  rules: {
    // 文法
    'import/extensions': 2,
    'import/newline-after-import': 2,
    'import/no-named-as-default': 2,
    'import/no-amd': 2,
    'import/no-commonjs': 0,
    'import/no-named-default': 2,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],

    // エラーが望ましい
    'import/default': 2,
    'import/export': 2,
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/namespace': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-named-as-default-member': 2,

    // ベストプラクティス
    'import/first': 2,
    // hmm... this rule appears to be an alias to import/first... But I gotta configure them allllllll!
    'import/imports-first': 2,
    'import/max-dependencies': [2, { max: 14 }],
    'import/no-anonymous-default-export': 0,
    'import/no-absolute-path': 2,
    'import/no-deprecated': 1, // this is an in progress rule
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 1, // sometimes it can be handy, shouldn't break a build
    'import/no-internal-modules': 0,
    'import/no-mutable-exports': 2,
    'import/no-restricted-paths': 0,
    'import/no-unassigned-import': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/prefer-default-export': 1,
    'import/unambiguous': 0, // not sure I understand this rule well enough right now...
  },
}