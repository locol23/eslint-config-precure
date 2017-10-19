// @flow

// See https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
  extends: ['prettier/flowtype'],
  plugins: ['flowtype'],
  rules: {
    // 'flowtype/no-primitive-constructor-types': 2,
    // 'flowtype/require-parameter-type': [1, { excludeArrowFunctions: true }],
    'flowtype/use-flow-type': 1,

    // うーむ
    'flowtype/no-mutable-array': 1,
    'flowtype/no-unused-expressions': 0,
    'flowtype/no-weak-types': 1,

    // 型が足りないときはflow自身が警告を出す
    'require-parameter-type': 0,

    // 基本的に推論させる
    'flowtype/require-return-type': 0,

    // 全ての宣言に型注釈が必要
    'flowtype/require-variable-type': 0,
    'flowtype/require-parameter-type': 0,

    // Flow環境の場合、ほとんどの場合flow対象にする
    'flowtype/require-valid-file-annotation': [1, 'always'],

    // prettier
    'flowtype/boolean-style': 0,

    'flowtype/no-dupe-keys': 2,
    'flowtype/define-flow-type': 2,
    'flowtype/no-types-missing-file-annotation': 2,

    'flowtype/no-primitive-constructor-types': 2,

    'flowtype/type-id-match': 0,

    // flowのコメントタイプのため
    'spaced-comment': 0,

    'flowtype/sort-keys': 0,
  },
}