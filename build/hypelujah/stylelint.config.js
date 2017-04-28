module.exports = {
  "rules": {
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-named": "never",
    "color-no-hex": true,
    "color-no-invalid-hex": true,

    "font-family-name-quotes": "always-unless-keyword",

    "font-weight-notation": "numeric",

    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-whitespace-after": "always",
    "function-url-quotes": "always",

    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,

    "string-no-newline": true,
    "string-quotes": "single",

    "length-zero-no-unit": true,

    "unit-case": "lower",
    "unit-no-unknown": true,
    "unit-whitelist": [
      "em",
      "rem",
      "px",
      "vh",
      "vh",
      "vw",
      "deg",
      "s",
      "%" ],

    "value-no-vendor-prefix": true,

    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",

    "property-case": "lower",
    "property-no-vendor-prefix": true,

    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,

    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-newline-after": "always-multi-line",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    "selector-class-pattern":  [ "^((u|is|has|js)-([a-z0-9]*[-a-z0-9]*)|(^(?!uni)(?!hui).[a-z0-9]*[-a-z0-9]*)(__([a-z0-9]*[-a-z0-9]*))?(--([a-z0-9]*[-a-z0-9]*))?)(\\@([a-z0-9]*[-a-z0-9]*))?$", {
      "message": "Use the BEM naming convention and don't override uni- or hui- classes"
    } ],
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-max-specificity": "0,2,0",
    "selector-no-id": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",

    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",

    "rule-empty-line-before": [ "always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"]
    } ],

    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    "media-feature-parentheses-space-inside": "never",

    "at-rule-name-case": "lower",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",

    "comment-empty-line-before": [ "always", {
      except: ["first-nested"],
      ignore: ["stylelint-commands"],
    } ],
    "comment-whitespace-inside": "always",

    "indentation": 2,
    "max-empty-lines": 3,
    "max-nesting-depth": [ 2, {
      ignore: ["blockless-at-rules"]
    } ],
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,

    "declaration-block-properties-order": [ [
      "composes",
      "position",
      "z-index",
      "top",
      "right",
      "bottom",
      "left",

      "display",

      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "justify-content",
      "flex",
      "align-items",
      "align-content",
      "order",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "align-self",

      "float",
      "clear",

      "transform",
      "transform-origin",
      "transform-style",
      "backface-visibility",
      "perspective",
      "perspective-origin",

      "overflow",
      "overflow-x",
      "overflow-y",

      "box-sizing",

      "width",
      "height",
      "min-width",
      "max-width",
      "min-height",
      "max-height",

      "visibility",

      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",

      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-collapse",
      "margin-top-collapse",
      "margin-right-collapse",
      "margin-bottom-collapse",
      "margin-left-collapse",

      "border-collapse",

      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-color",
      "border-image",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-spacing",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",

      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-top-left-radius",
      "border-bottom-left-radius",
      "border-radius-topright",
      "border-radius-bottomright",
      "border-radius-bottomleft",
      "border-radius-topleft",

      "background",
      "background-attachment",
      "background-image",
      "background-color",
      "background-repeat",
      "background-position",
      "background-size",
      "background-clip",

      "color",

      "font",
      "font-style",
      "font-variant",
      "font-weight",
      "font-size",
      "font-family",

      "line-height",

      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-size-adjust",
      "text-shadow",
      "text-transform",

      "hyphens",
      "word-spacing",
      "letter-spacing",
      "word-break",
      "word-wrap",
      "white-space",

      "vertical-align",

      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",

      "pointer-events",
      "cursor",

      "box-shadow",

      "opacity",

      "animation",
      "animation-delay",
      "animation-duration",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "animation-fill-mode",

      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",

      "filter",

      "table-layout",

      "resize",

      "content",
      "quotes",

      "outline",
      "outline-offset",

      "zoom",

      "user-select",

    ], { unspecified: "bottom" } ]
  }
}
