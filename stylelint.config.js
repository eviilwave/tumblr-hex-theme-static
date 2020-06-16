/**
 * @typedef {import('stylelint').StylelintConfig} Config
 */
/**
 * @type Config
 */
const config = {
    // extends: 'stylelint-config-standard',
    extends: 'stylelint-config-sass-guidelines',
    plugins: ['stylelint-scss'],
    rules: {
        'at-rule-no-vendor-prefix': true,
        'color-hex-case': 'lower',
        'color-hex-length': 'long',
        'color-named': 'never',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-no-important': true,
        'font-family-name-quotes': 'always-unless-keyword',
        'function-url-quotes': 'always',
        indentation: 4,
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'no-duplicate-selectors': true,
        'number-leading-zero': 'always',
        'property-no-vendor-prefix': true,
        'rule-empty-line-before': 'always',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'always',
        'selector-attribute-operator-space-before': 'always',
        'selector-attribute-quotes': 'never',
        'selector-combinator-space-after': 'always',
        'selector-max-id': 1000,
        'selector-no-universal': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-colon-notation': 'double',
        'string-quotes': 'single',
        'value-no-vendor-prefix': true,
    },
};

module.exports = config;
