module.exports = {
  rules: {
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-before': 'always',
    'color-function-notation': 'modern',
    'color-named': 'never',
    'color-no-hex': true,
    'comment-empty-line-before': ['always', { except: ['first-nested'] }],
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'font-weight-notation': 'numeric',
    'function-calc-no-unspaced-operator': true,
    'function-name-case': 'lower',
    'function-url-no-scheme-relative': true,
    'max-empty-lines': 1,
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    'media-feature-name-case': 'lower',
    'no-unknown-animations': true,
    'number-leading-zero': 'always',
    'number-max-precision': 3,
    'property-case': 'lower',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-class-pattern': '[a-zA-Z_]+',
    'selector-max-class': 3,
    'unicode-bom': 'never',
    'unit-case': 'lower',
  }
};