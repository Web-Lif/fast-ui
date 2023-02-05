"use strict";(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[1879],{24599:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E4": function() { return /* reexport */ Keyframes; },
  "jG": function() { return /* reexport */ createTheme; },
  "fp": function() { return /* reexport */ useCacheToken; },
  "xy": function() { return /* reexport */ useStyleRegister; }
});

// UNUSED EXPORTS: StyleProvider, Theme, createCache, extractStyle, legacyLogicalPropertiesTransformer, legacyNotSelectorLinter, logicalPropertiesLinter, parentSelectorLinter

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/node_modules/@emotion/hash/dist/hash.browser.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ var hash_browser_esm = (murmur2);

// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var hooks_useMemo = __webpack_require__(56982);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isEqual.js
var es_isEqual = __webpack_require__(91881);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/Cache.js




// [times, realValue]
var Entity = /*#__PURE__*/function () {
  function Entity() {
    (0,classCallCheck/* default */.Z)(this, Entity);

    (0,defineProperty/* default */.Z)(this, "cache", new Map());
  }

  (0,createClass/* default */.Z)(Entity, [{
    key: "get",
    value: function get(keys) {
      return this.cache.get(keys.join('%')) || null;
    }
  }, {
    key: "update",
    value: function update(keys, valueFn) {
      var path = keys.join('%');
      var prevValue = this.cache.get(path);
      var nextValue = valueFn(prevValue);

      if (nextValue === null) {
        this.cache.delete(path);
      } else {
        this.cache.set(path, nextValue);
      }
    }
  }]);

  return Entity;
}();

/* harmony default export */ var Cache = (Entity);
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/StyleContext.js


var _excluded = (/* unused pure expression or super */ null && (["children"]));




var StyleContext_ATTR_TOKEN = 'data-token-hash';
var StyleContext_ATTR_MARK = 'data-css-hash';
var ATTR_DEV_CACHE_PATH = 'data-dev-cache-path'; // Mark css-in-js instance in style element

var CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
var CSS_IN_JS_INSTANCE_ID = Math.random().toString(12).slice(2);
function createCache() {
  if (typeof document !== 'undefined' && document.head && document.body) {
    var styles = document.body.querySelectorAll("style[".concat(StyleContext_ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function (style) {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || CSS_IN_JS_INSTANCE_ID; // Not force move if no head

      document.head.insertBefore(style, firstChild);
    }); // Deduplicate of moved styles

    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(StyleContext_ATTR_MARK, "]"))).forEach(function (style) {
      var hash = style.getAttribute(StyleContext_ATTR_MARK);

      if (styleHash[hash]) {
        if (style[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
          var _style$parentNode;

          (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }

  return new Cache();
}
var StyleContext = /*#__PURE__*/react.createContext({
  hashPriority: 'low',
  cache: createCache(),
  defaultCache: true
});
var StyleProvider = function StyleProvider(props) {
  var children = props.children,
      restProps = _objectWithoutProperties(props, _excluded);

  var parentContext = React.useContext(StyleContext);
  var context = useMemo(function () {
    var mergedContext = _objectSpread({}, parentContext);

    Object.keys(restProps).forEach(function (key) {
      var value = restProps[key];

      if (restProps[key] !== undefined) {
        mergedContext[key] = value;
      }
    });
    var cache = restProps.cache;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.defaultCache;
    return mergedContext;
  }, [parentContext, restProps], function (prev, next) {
    return !isEqual(prev[0], next[0], true) || !isEqual(prev[1], next[1], true);
  });
  return /*#__PURE__*/React.createElement(StyleContext.Provider, {
    value: context
  }, children);
};
/* harmony default export */ var es_StyleContext = (StyleContext);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/hooks/useHMR.js
function useProdHMR() {
  return false;
}

var webpackHMR = false;

function useDevHMR() {
  return webpackHMR;
}

/* harmony default export */ var useHMR = ( true ? useProdHMR : 0); // Webpack \`module.hot.accept\` do not support any deps update trigger
// We have to hack handler to force mark as HRM

if (false) { var originWebpackHotUpdate, win; }
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js





function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  var _React$useContext = react.useContext(es_StyleContext),
      globalCache = _React$useContext.cache;

  var fullPath = [prefix].concat((0,toConsumableArray/* default */.Z)(keyPath));
  var HMRUpdate = useHMR(); // Create cache

  react.useMemo(function () {
    globalCache.update(fullPath, function (prevCache) {
      var _ref = prevCache || [],
          _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
          _ref2$ = _ref2[0],
          times = _ref2$ === void 0 ? 0 : _ref2$,
          cache = _ref2[1]; // HMR should always ignore cache since developer may change it


      var tmpCache = cache;

      if (false) {}

      var mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
  },
  /* eslint-disable react-hooks/exhaustive-deps */
  [fullPath.join('_')]
  /* eslint-enable */
  ); // Remove if no need anymore

  react.useEffect(function () {
    return function () {
      globalCache.update(fullPath, function (prevCache) {
        var _ref3 = prevCache || [],
            _ref4 = (0,slicedToArray/* default */.Z)(_ref3, 2),
            _ref4$ = _ref4[0],
            times = _ref4$ === void 0 ? 0 : _ref4$,
            cache = _ref4[1];

        var nextCount = times - 1;

        if (nextCount === 0) {
          onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
          return null;
        }

        return [times - 1, cache];
      });
    };
  }, fullPath);
  return globalCache.get(fullPath)[1];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(44958);
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/util.js




function flattenToken(token) {
  var str = '';
  Object.keys(token).forEach(function (key) {
    var value = token[key];
    str += key;

    if (value && (0,esm_typeof/* default */.Z)(value) === 'object') {
      str += flattenToken(value);
    } else {
      str += value;
    }
  });
  return str;
}
/**
 * Convert derivative token to key string
 */

function token2key(token, salt) {
  return hash_browser_esm("".concat(salt, "_").concat(flattenToken(token)));
}
var layerKey = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\\./g, '');
var layerWidth = '903px';

function supportSelector(styleStr, handleElement) {
  if ((0,canUseDom/* default */.Z)()) {
    var _ele$parentNode;

    (0,dynamicCSS/* updateCSS */.hq)(styleStr, layerKey);

    var _ele = document.createElement('div');

    _ele.style.position = 'fixed';
    _ele.style.left = '0';
    _ele.style.top = '0';
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(_ele);
    document.body.appendChild(_ele);

    if (false) {}

    var support = getComputedStyle(_ele).width === layerWidth;
    (_ele$parentNode = _ele.parentNode) === null || _ele$parentNode === void 0 ? void 0 : _ele$parentNode.removeChild(_ele);
    (0,dynamicCSS/* removeCSS */.jL)(layerKey);
    return support;
  }

  return false;
}

var canLayer = undefined;
function supportLayer() {
  if (canLayer === undefined) {
    canLayer = supportSelector("@layer ".concat(layerKey, " { .").concat(layerKey, " { width: ").concat(layerWidth, "!important; } }"), function (ele) {
      ele.className = layerKey;
    });
  }

  return canLayer;
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js







var EMPTY_OVERRIDE = {}; // Generate different prefix to make user selector break in production env.
// This helps developer not to do style override directly on the hash id.

var hashPrefix =  false ? 0 : 'css';
var tokenKeys = new Map();

function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}

function removeStyleTags(key) {
  if (typeof document !== 'undefined') {
    var styles = document.querySelectorAll("style[".concat(StyleContext_ATTR_TOKEN, "=\\"").concat(key, "\\"]"));
    styles.forEach(function (style) {
      if (style[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
        var _style$parentNode;

        (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
      }
    });
  }
} // Remove will check current keys first


function cleanTokenStyle(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function (key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });

  if (cleanableKeyList.length < tokenKeyList.length) {
    cleanableKeyList.forEach(function (key) {
      removeStyleTags(key);
      tokenKeys.delete(key);
    });
  }
}
/**
 * Cache theme derivative token as global shared one
 * @param theme Theme entity
 * @param tokens List of tokens, used for cache. Please do not dynamic generate object directly
 * @param option Additional config
 * @returns Call Theme.getDerivativeToken(tokenObject) to get token
 */


function useCacheToken(theme, tokens) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _option$salt = option.salt,
      salt = _option$salt === void 0 ? '' : _option$salt,
      _option$override = option.override,
      override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override,
      formatToken = option.formatToken; // Basic - We do basic cache here

  var mergedToken = react.useMemo(function () {
    return Object.assign.apply(Object, [{}].concat((0,toConsumableArray/* default */.Z)(tokens)));
  }, [tokens]);
  var tokenStr = react.useMemo(function () {
    return flattenToken(mergedToken);
  }, [mergedToken]);
  var overrideTokenStr = react.useMemo(function () {
    return flattenToken(override);
  }, [override]);
  var cachedToken = useClientCache('token', [salt, theme.id, tokenStr, overrideTokenStr], function () {
    var derivativeToken = theme.getDerivativeToken(mergedToken); // Merge with override

    var mergedDerivativeToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, derivativeToken), override); // Format if needed


    if (formatToken) {
      mergedDerivativeToken = formatToken(mergedDerivativeToken);
    } // Optimize for \`useStyleRegister\` performance


    var tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    var hashId = "".concat(hashPrefix, "-").concat(hash_browser_esm(tokenKey));
    mergedDerivativeToken._hashId = hashId; // Not used

    return [mergedDerivativeToken, hashId];
  }, function (cache) {
    // Remove token will remove all related style
    cleanTokenStyle(cache[0]._tokenKey);
  });
  return cachedToken;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitless_browser_esm = __webpack_require__(40351);
// EXTERNAL MODULE: ./node_modules/stylis/src/Serializer.js
var Serializer = __webpack_require__(20211);
// EXTERNAL MODULE: ./node_modules/stylis/src/Parser.js
var Parser = __webpack_require__(92190);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/linters/utils.js

function utils_lintWarning(message, info) {
  var path = info.path,
      parentSelectors = info.parentSelectors;
  devWarning(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in ".concat(path, ": ") : '').concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(' | ')) : ''));
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/linters/contentQuotesLinter.js


var linter = function linter(key, value, info) {
  if (key === 'content') {
    // From emotion: https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js#L63
    var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\\(|(no-)?(open|close)-quote/;
    var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];

    if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      lintWarning("You seem to be using a value for 'content' without quotes, try replacing it with \`content: '\\"".concat(value, "\\"'\`."), info);
    }
  }
};

/* harmony default export */ var contentQuotesLinter = ((/* unused pure expression or super */ null && (linter)));
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/linters/hashedAnimationLinter.js


var hashedAnimationLinter_linter = function linter(key, value, info) {
  if (key === 'animation') {
    if (info.hashId && value !== 'none') {
      lintWarning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
    }
  }
};

/* harmony default export */ var hashedAnimationLinter = ((/* unused pure expression or super */ null && (hashedAnimationLinter_linter)));
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/linters/legacyNotSelectorLinter.js


function isConcatSelector(selector) {
  var _selector$match;

  var notContent = ((_selector$match = selector.match(/:not\\(([^)]*)\\)/)) === null || _selector$match === void 0 ? void 0 : _selector$match[1]) || ''; // split selector. e.g.
  // \`h1#a.b\` => ['h1', #a', '.b']

  var splitCells = notContent.split(/(\\[[^[]*])|(?=[.#])/).filter(function (str) {
    return str;
  });
  return splitCells.length > 1;
}

function parsePath(info) {
  return info.parentSelectors.reduce(function (prev, cur) {
    if (!prev) {
      return cur;
    }

    return cur.includes('&') ? cur.replace(/&/g, prev) : "".concat(prev, " ").concat(cur);
  }, '');
}

var legacyNotSelectorLinter_linter = function linter(key, value, info) {
  var parentSelectorPath = parsePath(info);
  var notList = parentSelectorPath.match(/:not\\([^)]*\\)/g) || [];

  if (notList.length > 0 && notList.some(isConcatSelector)) {
    lintWarning("Concat ':not' selector not support in legacy browsers.", info);
  }
};

/* harmony default export */ var legacyNotSelectorLinter = ((/* unused pure expression or super */ null && (legacyNotSelectorLinter_linter)));
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/linters/logicalPropertiesLinter.js


var logicalPropertiesLinter_linter = function linter(key, value, info) {
  switch (key) {
    case 'marginLeft':
    case 'marginRight':
    case 'paddingLeft':
    case 'paddingRight':
    case 'left':
    case 'right':
    case 'borderLeft':
    case 'borderLeftWidth':
    case 'borderLeftStyle':
    case 'borderLeftColor':
    case 'borderRight':
    case 'borderRightWidth':
    case 'borderRightStyle':
    case 'borderRightColor':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      lintWarning("You seem to be using non-logical property '".concat(key, "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
      return;

    case 'margin':
    case 'padding':
    case 'borderWidth':
    case 'borderStyle':
      // case 'borderColor':
      if (typeof value === 'string') {
        var valueArr = value.split(' ').map(function (item) {
          return item.trim();
        });

        if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
          lintWarning("You seem to be using '".concat(key, "' property with different left ").concat(key, " and right ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
        }
      }

      return;

    case 'clear':
    case 'textAlign':
      if (value === 'left' || value === 'right') {
        lintWarning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
      }

      return;

    case 'borderRadius':
      if (typeof value === 'string') {
        var radiusGroups = value.split('/').map(function (item) {
          return item.trim();
        });
        var invalid = radiusGroups.reduce(function (result, group) {
          if (result) {
            return result;
          }

          var radiusArr = group.split(' ').map(function (item) {
            return item.trim();
          }); // borderRadius: '2px 4px'

          if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
            return true;
          } // borderRadius: '4px 4px 2px'


          if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
            return true;
          } // borderRadius: '4px 4px 2px 4px'


          if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
            return true;
          }

          return result;
        }, false);

        if (invalid) {
          lintWarning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
        }
      }

      return;

    default:
  }
};

/* harmony default export */ var logicalPropertiesLinter = ((/* unused pure expression or super */ null && (logicalPropertiesLinter_linter)));
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/linters/parentSelectorLinter.js


var parentSelectorLinter_linter = function linter(key, value, info) {
  if (info.parentSelectors.some(function (selector) {
    var selectors = selector.split(',');
    return selectors.some(function (item) {
      return item.split('&').length > 2;
    });
  })) {
    lintWarning('Should not use more than one \`&\` in a selector.', info);
  }
};

/* harmony default export */ var parentSelectorLinter = ((/* unused pure expression or super */ null && (parentSelectorLinter_linter)));
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/linters/index.js





;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js









 // @ts-ignore







var isClientSide = (0,canUseDom/* default */.Z)();
var SKIP_CHECK = '_skip_check_';
// ============================================================================
// ==                                 Parser                                 ==
// ============================================================================
// Preprocessor style content to browser support one
function normalizeStyle(styleStr) {
  var serialized = (0,Serializer/* serialize */.q)((0,Parser/* compile */.MY)(styleStr), Serializer/* stringify */.P);
  return serialized.replace(/\\{%%%\\:[^;];}/g, ';');
}

function isCompoundCSSProperty(value) {
  return (0,esm_typeof/* default */.Z)(value) === 'object' && value && SKIP_CHECK in value;
} // \u6CE8\u5165 hash \u503C


function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }

  var hashClassName = ".".concat(hashId);
  var hashSelector = hashPriority === 'low' ? ":where(".concat(hashClassName, ")") : hashClassName; // \u6CE8\u5165 hashId

  var keys = key.split(',').map(function (k) {
    var _firstPath$match;

    var fullPath = k.trim().split(/\\s+/); // \u5982\u679C Selector \u7B2C\u4E00\u4E2A\u662F HTML Element\uFF0C\u90A3\u6211\u4EEC\u5C31\u63D2\u5230\u5B83\u7684\u540E\u9762\u3002\u53CD\u4E4B\uFF0C\u5C31\u63D2\u5230\u6700\u524D\u9762\u3002

    var firstPath = fullPath[0] || '';
    var htmlElement = ((_firstPath$match = firstPath.match(/^\\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || '';
    firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat((0,toConsumableArray/* default */.Z)(fullPath.slice(1))).join(' ');
  });
  return keys.join(',');
}

// Global effect style will mount once and not removed
// The effect will not save in SSR cache (e.g. keyframes)
var globalEffectStyleKeys = new Set();
/**
 * @private Test only. Clear the global effect style keys.
 */

var _cf = (/* unused pure expression or super */ null && ( false ? 0 : undefined)); // Parse CSSObject to style content

var parseStyle = function parseStyle(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    root: true,
    parentSelectors: []
  },
      root = _ref.root,
      injectHash = _ref.injectHash,
      parentSelectors = _ref.parentSelectors;

  var hashId = config.hashId,
      layer = config.layer,
      path = config.path,
      hashPriority = config.hashPriority,
      _config$transformers = config.transformers,
      transformers = _config$transformers === void 0 ? [] : _config$transformers,
      _config$linters = config.linters,
      linters = _config$linters === void 0 ? [] : _config$linters;
  var styleStr = '';
  var effectStyle = {};

  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);

    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors: parentSelectors
      }),
          _parseStyle2 = (0,slicedToArray/* default */.Z)(_parseStyle, 1),
          _parsedStr = _parseStyle2[0];

      effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
    }
  }

  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    list.forEach(function (item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }

  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function (originStyle) {
    // Only root level can use raw string
    var style = typeof originStyle === 'string' && !root ? {} : originStyle;

    if (typeof style === 'string') {
      styleStr += "".concat(style, "\\n");
    } else if (style._keyframe) {
      // Keyframe
      parseKeyframes(style);
    } else {
      var mergedStyle = transformers.reduce(function (prev, trans) {
        var _trans$visit;

        return (trans === null || trans === void 0 ? void 0 : (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev)) || prev;
      }, style); // Normal CSSObject

      Object.keys(mergedStyle).forEach(function (key) {
        var value = mergedStyle[key];

        if ((0,esm_typeof/* default */.Z)(value) === 'object' && value && (key !== 'animationName' || !value._keyframe) && !isCompoundCSSProperty(value)) {
          var subInjectHash = false; // \u5F53\u6210\u5D4C\u5957\u5BF9\u8C61\u6765\u5904\u7406

          var mergedKey = key.trim(); // Whether treat child as root. In most case it is false.

          var nextRoot = false; // \u62C6\u5206\u591A\u4E2A\u9009\u62E9\u5668

          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith('@')) {
              // \u7565\u8FC7\u5A92\u4F53\u67E5\u8BE2\uFF0C\u4EA4\u7ED9\u5B50\u8282\u70B9\u7EE7\u7EED\u63D2\u5165 hashId
              subInjectHash = true;
            } else {
              // \u6CE8\u5165 hashId
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
            // In case of \`{ '&': { a: { color: 'red' } } }\` or \`{ '': { a: { color: 'red' } } }\` without hashId,
            // we will get \`&{a:{color:red;}}\` or \`{a:{color:red;}}\` string for stylis to compile.
            // But it does not conform to stylis syntax,
            // and finally we will get \`{color:red;}\` as css, which is wrong.
            // So we need to remove key in root, and treat child \`{ a: { color: 'red' } }\` as root.
            mergedKey = '';
            nextRoot = true;
          }

          var _parseStyle3 = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [].concat((0,toConsumableArray/* default */.Z)(parentSelectors), [mergedKey])
          }),
              _parseStyle4 = (0,slicedToArray/* default */.Z)(_parseStyle3, 2),
              _parsedStr2 = _parseStyle4[0],
              childEffectStyle = _parseStyle4[1];

          effectStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, effectStyle), childEffectStyle);
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          var _value;

          var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;

          if (false) {} // \u5982\u679C\u662F\u6837\u5F0F\u5219\u76F4\u63A5\u63D2\u5165


          var styleName = key.replace(/[A-Z]/g, function (match) {
            return "-".concat(match.toLowerCase());
          }); // Auto suffix with px

          var formatValue = actualValue;

          if (!unitless_browser_esm/* default */.Z[key] && typeof formatValue === 'number' && formatValue !== 0) {
            formatValue = "".concat(formatValue, "px");
          } // handle animationName & Keyframe value


          if (key === 'animationName' && value !== null && value !== void 0 && value._keyframe) {
            parseKeyframes(value);
            formatValue = value.getName(hashId);
          }

          styleStr += "".concat(styleName, ":").concat(formatValue, ";");
        }
      });
    }
  });

  if (!root) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer && supportLayer()) {
    var layerCells = layer.split(',');
    var layerName = layerCells[layerCells.length - 1].trim();
    styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}"); // Order of layer if needed

    if (layerCells.length > 1) {
      // zombieJ: stylis do not support layer order, so we need to handle it manually.
      styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
    }
  }

  return [styleStr, effectStyle];
}; // ============================================================================
// ==                                Register                                ==
// ============================================================================

function uniqueHash(path, styleStr) {
  return hash_browser_esm("".concat(path.join('%')).concat(styleStr));
}

function Empty() {
  return null;
}
/**
 * Register a style to the global style sheet.
 */


function useStyleRegister(info, styleFn) {
  var token = info.token,
      path = info.path,
      hashId = info.hashId,
      layer = info.layer;

  var _React$useContext = react.useContext(es_StyleContext),
      autoClear = _React$useContext.autoClear,
      mock = _React$useContext.mock,
      defaultCache = _React$useContext.defaultCache,
      hashPriority = _React$useContext.hashPriority,
      container = _React$useContext.container,
      ssrInline = _React$useContext.ssrInline,
      transformers = _React$useContext.transformers,
      linters = _React$useContext.linters;

  var tokenKey = token._tokenKey;
  var fullPath = [tokenKey].concat((0,toConsumableArray/* default */.Z)(path)); // Check if need insert style

  var isMergedClientSide = isClientSide;

  if (false) {}

  var _useGlobalCache = useClientCache('style', fullPath, // Create cache if needed
  function () {
    var styleObj = styleFn();

    var _parseStyle5 = parseStyle(styleObj, {
      hashId: hashId,
      hashPriority: hashPriority,
      layer: layer,
      path: path.join('-'),
      transformers: transformers,
      linters: linters
    }),
        _parseStyle6 = (0,slicedToArray/* default */.Z)(_parseStyle5, 2),
        parsedStyle = _parseStyle6[0],
        effectStyle = _parseStyle6[1];

    var styleStr = normalizeStyle(parsedStyle);
    var styleId = uniqueHash(fullPath, styleStr);

    if (isMergedClientSide) {
      var style = (0,dynamicCSS/* updateCSS */.hq)(styleStr, styleId, {
        mark: StyleContext_ATTR_MARK,
        prepend: 'queue',
        attachTo: container
      });
      style[CSS_IN_JS_INSTANCE] = CSS_IN_JS_INSTANCE_ID; // Used for \`useCacheToken\` to remove on batch when token removed

      style.setAttribute(StyleContext_ATTR_TOKEN, tokenKey); // Dev usage to find which cache path made this easily

      if (false) {} // Inject client side effect style


      Object.keys(effectStyle).forEach(function (effectKey) {
        if (!globalEffectStyleKeys.has(effectKey)) {
          globalEffectStyleKeys.add(effectKey); // Inject

          (0,dynamicCSS/* updateCSS */.hq)(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), {
            mark: StyleContext_ATTR_MARK,
            prepend: 'queue',
            attachTo: container
          });
        }
      });
    }

    return [styleStr, tokenKey, styleId];
  }, // Remove cache if no need
  function (_ref2, fromHMR) {
    var _ref3 = (0,slicedToArray/* default */.Z)(_ref2, 3),
        styleId = _ref3[2];

    if ((fromHMR || autoClear) && isClientSide) {
      (0,dynamicCSS/* removeCSS */.jL)(styleId, {
        mark: StyleContext_ATTR_MARK
      });
    }
  }),
      _useGlobalCache2 = (0,slicedToArray/* default */.Z)(_useGlobalCache, 3),
      cachedStyleStr = _useGlobalCache2[0],
      cachedTokenKey = _useGlobalCache2[1],
      cachedStyleId = _useGlobalCache2[2];

  return function (node) {
    var styleNode;

    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /*#__PURE__*/react.createElement(Empty, null);
    } else {
      var _ref4;

      styleNode = /*#__PURE__*/react.createElement("style", (0,esm_extends/* default */.Z)({}, (_ref4 = {}, (0,defineProperty/* default */.Z)(_ref4, StyleContext_ATTR_TOKEN, cachedTokenKey), (0,defineProperty/* default */.Z)(_ref4, StyleContext_ATTR_MARK, cachedStyleId), _ref4), {
        dangerouslySetInnerHTML: {
          __html: cachedStyleStr
        }
      }));
    }

    return /*#__PURE__*/react.createElement(react.Fragment, null, styleNode, node);
  };
} // ============================================================================
// ==                                  SSR                                   ==
// ============================================================================

function extractStyle(cache) {
  // prefix with \`style\` is used for \`useStyleRegister\` to cache style context
  var styleKeys = Array.from(cache.cache.keys()).filter(function (key) {
    return key.startsWith('style%');
  }); // const tokenStyles: Record<string, string[]> = {};

  var styleText = '';
  styleKeys.forEach(function (key) {
    var _ = _slicedToArray(cache.cache.get(key)[1], 3),
        styleStr = _[0],
        tokenKey = _[1],
        styleId = _[2];

    styleText += "<style ".concat(ATTR_TOKEN, "=\\"").concat(tokenKey, "\\" ").concat(ATTR_MARK, "=\\"").concat(styleId, "\\">").concat(styleStr, "</style>");
  });
  return styleText;
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/Keyframes.js




var Keyframe = /*#__PURE__*/function () {
  function Keyframe(name, style) {
    (0,classCallCheck/* default */.Z)(this, Keyframe);

    (0,defineProperty/* default */.Z)(this, "name", void 0);

    (0,defineProperty/* default */.Z)(this, "style", void 0);

    (0,defineProperty/* default */.Z)(this, "_keyframe", true);

    this.name = name;
    this.style = style;
  }

  (0,createClass/* default */.Z)(Keyframe, [{
    key: "getName",
    value: function getName() {
      var hashId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
    }
  }]);

  return Keyframe;
}();

/* harmony default export */ var Keyframes = (Keyframe);
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js




// ================================== Cache ==================================
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }

  return true;
}

var ThemeCache = /*#__PURE__*/function () {
  function ThemeCache() {
    (0,classCallCheck/* default */.Z)(this, ThemeCache);

    (0,defineProperty/* default */.Z)(this, "cache", void 0);

    (0,defineProperty/* default */.Z)(this, "keys", void 0);

    (0,defineProperty/* default */.Z)(this, "cacheCallTimes", void 0);

    this.cache = new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }

  (0,createClass/* default */.Z)(ThemeCache, [{
    key: "size",
    value: function size() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function internalGet(derivativeOption) {
      var _cache2, _cache3;

      var updateCallTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cache = {
        map: this.cache
      };
      derivativeOption.forEach(function (derivative) {
        if (!cache) {
          cache = undefined;
        } else {
          var _cache, _cache$map;

          cache = (_cache = cache) === null || _cache === void 0 ? void 0 : (_cache$map = _cache.map) === null || _cache$map === void 0 ? void 0 : _cache$map.get(derivative);
        }
      });

      if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
        cache.value[1] = this.cacheCallTimes++;
      }

      return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
    }
  }, {
    key: "get",
    value: function get(derivativeOption) {
      var _this$internalGet;

      return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
    }
  }, {
    key: "has",
    value: function has(derivativeOption) {
      return !!this.internalGet(derivativeOption);
    }
  }, {
    key: "set",
    value: function set(derivativeOption, value) {
      var _this = this;

      // New cache
      if (!this.has(derivativeOption)) {
        if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
          var _this$keys$reduce = this.keys.reduce(function (result, key) {
            var _result = (0,slicedToArray/* default */.Z)(result, 2),
                callTimes = _result[1];

            if (_this.internalGet(key)[1] < callTimes) {
              return [key, _this.internalGet(key)[1]];
            }

            return result;
          }, [this.keys[0], this.cacheCallTimes]),
              _this$keys$reduce2 = (0,slicedToArray/* default */.Z)(_this$keys$reduce, 1),
              targetKey = _this$keys$reduce2[0];

          this.delete(targetKey);
        }

        this.keys.push(derivativeOption);
      }

      var cache = this.cache;
      derivativeOption.forEach(function (derivative, index) {
        if (index === derivativeOption.length - 1) {
          cache.set(derivative, {
            value: [value, _this.cacheCallTimes++]
          });
        } else {
          var cacheValue = cache.get(derivative);

          if (!cacheValue) {
            cache.set(derivative, {
              map: new Map()
            });
          } else if (!cacheValue.map) {
            cacheValue.map = new Map();
          }

          cache = cache.get(derivative).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function deleteByPath(currentCache, derivatives) {
      var cache = currentCache.get(derivatives[0]);

      if (derivatives.length === 1) {
        var _cache$value;

        if (!cache.map) {
          currentCache.delete(derivatives[0]);
        } else {
          currentCache.set(derivatives[0], {
            map: cache.map
          });
        }

        return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
      }

      var result = this.deleteByPath(cache.map, derivatives.slice(1));

      if ((!cache.map || cache.map.size === 0) && !cache.value) {
        currentCache.delete(derivatives[0]);
      }

      return result;
    }
  }, {
    key: "delete",
    value: function _delete(derivativeOption) {
      // If cache exists
      if (this.has(derivativeOption)) {
        this.keys = this.keys.filter(function (item) {
          return !sameDerivativeOption(item, derivativeOption);
        });
        return this.deleteByPath(this.cache, derivativeOption);
      }

      return undefined;
    }
  }]);

  return ThemeCache;
}();

(0,defineProperty/* default */.Z)(ThemeCache, "MAX_CACHE_SIZE", 20);

(0,defineProperty/* default */.Z)(ThemeCache, "MAX_CACHE_OFFSET", 5);


;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/theme/Theme.js




var uuid = 0;
/**
 * Theme with algorithms to derive tokens from design tokens.
 * Use \`createTheme\` first which will help to manage the theme instance cache.
 */

var Theme = /*#__PURE__*/function () {
  function Theme(derivatives) {
    (0,classCallCheck/* default */.Z)(this, Theme);

    (0,defineProperty/* default */.Z)(this, "derivatives", void 0);

    (0,defineProperty/* default */.Z)(this, "id", void 0);

    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;

    if (derivatives.length === 0) {
      (0,warning/* warning */.Kp)(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
    }

    uuid += 1;
  }

  (0,createClass/* default */.Z)(Theme, [{
    key: "getDerivativeToken",
    value: function getDerivativeToken(token) {
      return this.derivatives.reduce(function (result, derivative) {
        return derivative(token, result);
      }, undefined);
    }
  }]);

  return Theme;
}();


;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/theme/createTheme.js


var cacheThemes = new ThemeCache();
/**
 * Same as new Theme, but will always return same one if \`derivative\` not changed.
 */

function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives]; // Create new theme if not exist

  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  } // Get theme from cache and return


  return cacheThemes.get(derivativeArr);
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/theme/index.js



;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/transformers/legacyLogicalProperties.js
function splitValues(value) {
  if (typeof value === 'number') {
    return [value];
  }

  var splitStyle = String(value).split(/\\s+/); // Combine styles split in brackets, like \`calc(1px + 2px)\`

  var temp = '';
  var brackets = 0;
  return splitStyle.reduce(function (list, item) {
    if (item.includes('(')) {
      temp += item;
      brackets += item.split('(').length - 1;
    } else if (item.includes(')')) {
      temp += item;
      brackets -= item.split(')').length - 1;

      if (brackets === 0) {
        list.push(temp);
        temp = '';
      }
    } else if (brackets > 0) {
      temp += item;
    } else {
      list.push(item);
    }

    return list;
  }, []);
}

function noSplit(list) {
  list.notSplit = true;
  return list;
}

var keyMap = {
  // Inset
  inset: ['top', 'right', 'bottom', 'left'],
  insetBlock: ['top', 'bottom'],
  insetBlockStart: ['top'],
  insetBlockEnd: ['bottom'],
  insetInline: ['left', 'right'],
  insetInlineStart: ['left'],
  insetInlineEnd: ['right'],
  // Margin
  marginBlock: ['marginTop', 'marginBottom'],
  marginBlockStart: ['marginTop'],
  marginBlockEnd: ['marginBottom'],
  marginInline: ['marginLeft', 'marginRight'],
  marginInlineStart: ['marginLeft'],
  marginInlineEnd: ['marginRight'],
  // Padding
  paddingBlock: ['paddingTop', 'paddingBottom'],
  paddingBlockStart: ['paddingTop'],
  paddingBlockEnd: ['paddingBottom'],
  paddingInline: ['paddingLeft', 'paddingRight'],
  paddingInlineStart: ['paddingLeft'],
  paddingInlineEnd: ['paddingRight'],
  // Border
  borderBlock: noSplit(['borderTop', 'borderBottom']),
  borderBlockStart: noSplit(['borderTop']),
  borderBlockEnd: noSplit(['borderBottom']),
  borderInline: noSplit(['borderLeft', 'borderRight']),
  borderInlineStart: noSplit(['borderLeft']),
  borderInlineEnd: noSplit(['borderRight']),
  // Border width
  borderBlockWidth: ['borderTopWidth', 'borderBottomWidth'],
  borderBlockStartWidth: ['borderTopWidth'],
  borderBlockEndWidth: ['borderBottomWidth'],
  borderInlineWidth: ['borderLeftWidth', 'borderRightWidth'],
  borderInlineStartWidth: ['borderLeftWidth'],
  borderInlineEndWidth: ['borderRightWidth'],
  // Border style
  borderBlockStyle: ['borderTopStyle', 'borderBottomStyle'],
  borderBlockStartStyle: ['borderTopStyle'],
  borderBlockEndStyle: ['borderBottomStyle'],
  borderInlineStyle: ['borderLeftStyle', 'borderRightStyle'],
  borderInlineStartStyle: ['borderLeftStyle'],
  borderInlineEndStyle: ['borderRightStyle'],
  // Border color
  borderBlockColor: ['borderTopColor', 'borderBottomColor'],
  borderBlockStartColor: ['borderTopColor'],
  borderBlockEndColor: ['borderBottomColor'],
  borderInlineColor: ['borderLeftColor', 'borderRightColor'],
  borderInlineStartColor: ['borderLeftColor'],
  borderInlineEndColor: ['borderRightColor'],
  // Border radius
  borderStartStartRadius: ['borderTopLeftRadius'],
  borderStartEndRadius: ['borderTopRightRadius'],
  borderEndStartRadius: ['borderBottomLeftRadius'],
  borderEndEndRadius: ['borderBottomRightRadius']
};

function skipCheck(value) {
  return {
    _skip_check_: true,
    value: value
  };
}
/**
 * Convert css logical properties to legacy properties.
 * Such as: \`margin-block-start\` to \`margin-top\`.
 * Transform list:
 * - inset
 * - margin
 * - padding
 * - border
 */


var transform = {
  visit: function visit(cssObj) {
    var clone = {};
    Object.keys(cssObj).forEach(function (key) {
      var value = cssObj[key];
      var matchValue = keyMap[key];

      if (matchValue && (typeof value === 'number' || typeof value === 'string')) {
        var values = splitValues(value);

        if (matchValue.length && matchValue.notSplit) {
          // not split means always give same value like border
          matchValue.forEach(function (matchKey) {
            clone[matchKey] = skipCheck(value);
          });
        } else if (matchValue.length === 1) {
          // Handle like \`marginBlockStart\` => \`marginTop\`
          clone[matchValue[0]] = skipCheck(value);
        } else if (matchValue.length === 2) {
          // Handle like \`marginBlock\` => \`marginTop\` & \`marginBottom\`
          matchValue.forEach(function (matchKey, index) {
            var _values$index;

            clone[matchKey] = skipCheck((_values$index = values[index]) !== null && _values$index !== void 0 ? _values$index : values[0]);
          });
        } else if (matchValue.length === 4) {
          // Handle like \`inset\` => \`top\` & \`right\` & \`bottom\` & \`left\`
          matchValue.forEach(function (matchKey, index) {
            var _ref, _values$index2;

            clone[matchKey] = skipCheck((_ref = (_values$index2 = values[index]) !== null && _values$index2 !== void 0 ? _values$index2 : values[index - 2]) !== null && _ref !== void 0 ? _ref : values[0]);
          });
        } else {
          clone[key] = value;
        }
      } else {
        clone[key] = value;
      }
    });
    return clone;
  }
};
/* harmony default export */ var legacyLogicalProperties = ((/* unused pure expression or super */ null && (transform)));
;// CONCATENATED MODULE: ./node_modules/@ant-design/cssinjs/es/index.js







//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNERBQWUseURBQVMsSTs7QUN6SjBCO0FBQ3dCO0FBQ3RDO0FBQytEO0FBQ3ZDO0FBQ2Y7QUFDMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2hhc2guYnJvd3Nlci5lc20uanM/OTAwOSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9lcy9DYWNoZS5qcz9iYmU2Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL1N0eWxlQ29udGV4dC5qcz81YWIxIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL2hvb2tzL3VzZUhNUi5qcz80NGNmIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL2hvb2tzL3VzZUdsb2JhbENhY2hlLmpzP2RiMzQiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzc2luanMvZXMvdXRpbC5qcz83NzAyIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL2hvb2tzL3VzZUNhY2hlVG9rZW4uanM/MjZhYiIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9lcy9saW50ZXJzL3V0aWxzLmpzP2RhYjMiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzc2luanMvZXMvbGludGVycy9jb250ZW50UXVvdGVzTGludGVyLmpzP2IxZjQiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzc2luanMvZXMvbGludGVycy9oYXNoZWRBbmltYXRpb25MaW50ZXIuanM/Yzg5MSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9lcy9saW50ZXJzL2xlZ2FjeU5vdFNlbGVjdG9yTGludGVyLmpzPzNhYzMiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzc2luanMvZXMvbGludGVycy9sb2dpY2FsUHJvcGVydGllc0xpbnRlci5qcz84YjMxIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL2xpbnRlcnMvcGFyZW50U2VsZWN0b3JMaW50ZXIuanM/YmIyNyIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9lcy9saW50ZXJzL2luZGV4LmpzPzlmNWEiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzc2luanMvZXMvaG9va3MvdXNlU3R5bGVSZWdpc3Rlci5qcz9iNjA5Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL0tleWZyYW1lcy5qcz9lYmIzIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL3RoZW1lL1RoZW1lQ2FjaGUuanM/YTFhNSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9lcy90aGVtZS9UaGVtZS5qcz9mZjAzIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3NpbmpzL2VzL3RoZW1lL2NyZWF0ZVRoZW1lLmpzPzM5MjUiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzc2luanMvZXMvdGhlbWUvaW5kZXguanM/NGZkOSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9lcy90cmFuc2Zvcm1lcnMvbGVnYWN5TG9naWNhbFByb3BlcnRpZXMuanM/YWU4ZSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzaW5qcy9lcy9pbmRleC5qcz9iMGE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXIyO1xuIiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuXG4vLyBbdGltZXMsIHJlYWxWYWx1ZV1cbnZhciBFbnRpdHkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFbnRpdHkoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVudGl0eSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjYWNoZVwiLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEVudGl0eSwgW3tcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChrZXlzKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoa2V5cy5qb2luKCclJykpIHx8IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoa2V5cywgdmFsdWVGbikge1xuICAgICAgdmFyIHBhdGggPSBrZXlzLmpvaW4oJyUnKTtcbiAgICAgIHZhciBwcmV2VmFsdWUgPSB0aGlzLmNhY2hlLmdldChwYXRoKTtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSB2YWx1ZUZuKHByZXZWYWx1ZSk7XG5cbiAgICAgIGlmIChuZXh0VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jYWNoZS5kZWxldGUocGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhY2hlLnNldChwYXRoLCBuZXh0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFbnRpdHk7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJjaGlsZHJlblwiXTtcbmltcG9ydCB1c2VNZW1vIGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZU1lbW9cIjtcbmltcG9ydCBpc0VxdWFsIGZyb20gXCJyYy11dGlsL2VzL2lzRXF1YWxcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYWNoZUVudGl0eSBmcm9tIFwiLi9DYWNoZVwiO1xuZXhwb3J0IHZhciBBVFRSX1RPS0VOID0gJ2RhdGEtdG9rZW4taGFzaCc7XG5leHBvcnQgdmFyIEFUVFJfTUFSSyA9ICdkYXRhLWNzcy1oYXNoJztcbmV4cG9ydCB2YXIgQVRUUl9ERVZfQ0FDSEVfUEFUSCA9ICdkYXRhLWRldi1jYWNoZS1wYXRoJzsgLy8gTWFyayBjc3MtaW4tanMgaW5zdGFuY2UgaW4gc3R5bGUgZWxlbWVudFxuXG5leHBvcnQgdmFyIENTU19JTl9KU19JTlNUQU5DRSA9ICdfX2Nzc2luanNfaW5zdGFuY2VfXyc7XG5leHBvcnQgdmFyIENTU19JTl9KU19JTlNUQU5DRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTIpLnNsaWNlKDIpO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5oZWFkICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICB2YXIgc3R5bGVzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbXCIuY29uY2F0KEFUVFJfTUFSSywgXCJdXCIpKSB8fCBbXTtcbiAgICB2YXIgZmlyc3RDaGlsZCA9IGRvY3VtZW50LmhlYWQuZmlyc3RDaGlsZDtcbiAgICBBcnJheS5mcm9tKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIHN0eWxlW0NTU19JTl9KU19JTlNUQU5DRV0gPSBzdHlsZVtDU1NfSU5fSlNfSU5TVEFOQ0VdIHx8IENTU19JTl9KU19JTlNUQU5DRV9JRDsgLy8gTm90IGZvcmNlIG1vdmUgaWYgbm8gaGVhZFxuXG4gICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShzdHlsZSwgZmlyc3RDaGlsZCk7XG4gICAgfSk7IC8vIERlZHVwbGljYXRlIG9mIG1vdmVkIHN0eWxlc1xuXG4gICAgdmFyIHN0eWxlSGFzaCA9IHt9O1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW1wiLmNvbmNhdChBVFRSX01BUkssIFwiXVwiKSkpLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICB2YXIgaGFzaCA9IHN0eWxlLmdldEF0dHJpYnV0ZShBVFRSX01BUkspO1xuXG4gICAgICBpZiAoc3R5bGVIYXNoW2hhc2hdKSB7XG4gICAgICAgIGlmIChzdHlsZVtDU1NfSU5fSlNfSU5TVEFOQ0VdID09PSBDU1NfSU5fSlNfSU5TVEFOQ0VfSUQpIHtcbiAgICAgICAgICB2YXIgX3N0eWxlJHBhcmVudE5vZGU7XG5cbiAgICAgICAgICAoX3N0eWxlJHBhcmVudE5vZGUgPSBzdHlsZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfc3R5bGUkcGFyZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0eWxlJHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZUhhc2hbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBDYWNoZUVudGl0eSgpO1xufVxudmFyIFN0eWxlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgaGFzaFByaW9yaXR5OiAnbG93JyxcbiAgY2FjaGU6IGNyZWF0ZUNhY2hlKCksXG4gIGRlZmF1bHRDYWNoZTogdHJ1ZVxufSk7XG5leHBvcnQgdmFyIFN0eWxlUHJvdmlkZXIgPSBmdW5jdGlvbiBTdHlsZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBwYXJlbnRDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTdHlsZUNvbnRleHQpO1xuICB2YXIgY29udGV4dCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZXJnZWRDb250ZXh0ID0gX29iamVjdFNwcmVhZCh7fSwgcGFyZW50Q29udGV4dCk7XG5cbiAgICBPYmplY3Qua2V5cyhyZXN0UHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gcmVzdFByb3BzW2tleV07XG5cbiAgICAgIGlmIChyZXN0UHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lcmdlZENvbnRleHRba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBjYWNoZSA9IHJlc3RQcm9wcy5jYWNoZTtcbiAgICBtZXJnZWRDb250ZXh0LmNhY2hlID0gbWVyZ2VkQ29udGV4dC5jYWNoZSB8fCBjcmVhdGVDYWNoZSgpO1xuICAgIG1lcmdlZENvbnRleHQuZGVmYXVsdENhY2hlID0gIWNhY2hlICYmIHBhcmVudENvbnRleHQuZGVmYXVsdENhY2hlO1xuICAgIHJldHVybiBtZXJnZWRDb250ZXh0O1xuICB9LCBbcGFyZW50Q29udGV4dCwgcmVzdFByb3BzXSwgZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICByZXR1cm4gIWlzRXF1YWwocHJldlswXSwgbmV4dFswXSwgdHJ1ZSkgfHwgIWlzRXF1YWwocHJldlsxXSwgbmV4dFsxXSwgdHJ1ZSk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRcbiAgfSwgY2hpbGRyZW4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN0eWxlQ29udGV4dDsiLCJmdW5jdGlvbiB1c2VQcm9kSE1SKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciB3ZWJwYWNrSE1SID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHVzZURldkhNUigpIHtcbiAgcmV0dXJuIHdlYnBhY2tITVI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyB1c2VQcm9kSE1SIDogdXNlRGV2SE1SOyAvLyBXZWJwYWNrIGBtb2R1bGUuaG90LmFjY2VwdGAgZG8gbm90IHN1cHBvcnQgYW55IGRlcHMgdXBkYXRlIHRyaWdnZXJcbi8vIFdlIGhhdmUgdG8gaGFjayBoYW5kbGVyIHRvIGZvcmNlIG1hcmsgYXMgSFJNXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZSAmJiBtb2R1bGUuaG90KSB7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKHR5cGVvZiB3aW4ud2VicGFja0hvdFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBvcmlnaW5XZWJwYWNrSG90VXBkYXRlID0gd2luLndlYnBhY2tIb3RVcGRhdGU7XG5cbiAgICB3aW4ud2VicGFja0hvdFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdlYnBhY2tITVIgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdlYnBhY2tITVIgPSBmYWxzZTtcbiAgICAgIH0sIDApO1xuICAgICAgcmV0dXJuIG9yaWdpbldlYnBhY2tIb3RVcGRhdGUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn0iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVDb250ZXh0IGZyb20gXCIuLi9TdHlsZUNvbnRleHRcIjtcbmltcG9ydCB1c2VITVIgZnJvbSBcIi4vdXNlSE1SXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDbGllbnRDYWNoZShwcmVmaXgsIGtleVBhdGgsIGNhY2hlRm4sIG9uQ2FjaGVSZW1vdmUpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTdHlsZUNvbnRleHQpLFxuICAgICAgZ2xvYmFsQ2FjaGUgPSBfUmVhY3QkdXNlQ29udGV4dC5jYWNoZTtcblxuICB2YXIgZnVsbFBhdGggPSBbcHJlZml4XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGtleVBhdGgpKTtcbiAgdmFyIEhNUlVwZGF0ZSA9IHVzZUhNUigpOyAvLyBDcmVhdGUgY2FjaGVcblxuICBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBnbG9iYWxDYWNoZS51cGRhdGUoZnVsbFBhdGgsIGZ1bmN0aW9uIChwcmV2Q2FjaGUpIHtcbiAgICAgIHZhciBfcmVmID0gcHJldkNhY2hlIHx8IFtdLFxuICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgX3JlZjIkID0gX3JlZjJbMF0sXG4gICAgICAgICAgdGltZXMgPSBfcmVmMiQgPT09IHZvaWQgMCA/IDAgOiBfcmVmMiQsXG4gICAgICAgICAgY2FjaGUgPSBfcmVmMlsxXTsgLy8gSE1SIHNob3VsZCBhbHdheXMgaWdub3JlIGNhY2hlIHNpbmNlIGRldmVsb3BlciBtYXkgY2hhbmdlIGl0XG5cblxuICAgICAgdmFyIHRtcENhY2hlID0gY2FjaGU7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNhY2hlICYmIEhNUlVwZGF0ZSkge1xuICAgICAgICBvbkNhY2hlUmVtb3ZlID09PSBudWxsIHx8IG9uQ2FjaGVSZW1vdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2FjaGVSZW1vdmUodG1wQ2FjaGUsIEhNUlVwZGF0ZSk7XG4gICAgICAgIHRtcENhY2hlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIG1lcmdlZENhY2hlID0gdG1wQ2FjaGUgfHwgY2FjaGVGbigpO1xuICAgICAgcmV0dXJuIFt0aW1lcyArIDEsIG1lcmdlZENhY2hlXTtcbiAgICB9KTtcbiAgfSxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4gIFtmdWxsUGF0aC5qb2luKCdfJyldXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbiAgKTsgLy8gUmVtb3ZlIGlmIG5vIG5lZWQgYW55bW9yZVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGdsb2JhbENhY2hlLnVwZGF0ZShmdWxsUGF0aCwgZnVuY3Rpb24gKHByZXZDYWNoZSkge1xuICAgICAgICB2YXIgX3JlZjMgPSBwcmV2Q2FjaGUgfHwgW10sXG4gICAgICAgICAgICBfcmVmNCA9IF9zbGljZWRUb0FycmF5KF9yZWYzLCAyKSxcbiAgICAgICAgICAgIF9yZWY0JCA9IF9yZWY0WzBdLFxuICAgICAgICAgICAgdGltZXMgPSBfcmVmNCQgPT09IHZvaWQgMCA/IDAgOiBfcmVmNCQsXG4gICAgICAgICAgICBjYWNoZSA9IF9yZWY0WzFdO1xuXG4gICAgICAgIHZhciBuZXh0Q291bnQgPSB0aW1lcyAtIDE7XG5cbiAgICAgICAgaWYgKG5leHRDb3VudCA9PT0gMCkge1xuICAgICAgICAgIG9uQ2FjaGVSZW1vdmUgPT09IG51bGwgfHwgb25DYWNoZVJlbW92ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DYWNoZVJlbW92ZShjYWNoZSwgZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFt0aW1lcyAtIDEsIGNhY2hlXTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIGZ1bGxQYXRoKTtcbiAgcmV0dXJuIGdsb2JhbENhY2hlLmdldChmdWxsUGF0aClbMV07XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGhhc2ggZnJvbSAnQGVtb3Rpb24vaGFzaCc7XG5pbXBvcnQgY2FuVXNlRG9tIGZyb20gXCJyYy11dGlsL2VzL0RvbS9jYW5Vc2VEb21cIjtcbmltcG9ydCB7IHJlbW92ZUNTUywgdXBkYXRlQ1NTIH0gZnJvbSBcInJjLXV0aWwvZXMvRG9tL2R5bmFtaWNDU1NcIjtcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuVG9rZW4odG9rZW4pIHtcbiAgdmFyIHN0ciA9ICcnO1xuICBPYmplY3Qua2V5cyh0b2tlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gdG9rZW5ba2V5XTtcbiAgICBzdHIgKz0ga2V5O1xuXG4gICAgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgc3RyICs9IGZsYXR0ZW5Ub2tlbih2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufVxuLyoqXG4gKiBDb252ZXJ0IGRlcml2YXRpdmUgdG9rZW4gdG8ga2V5IHN0cmluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbjJrZXkodG9rZW4sIHNhbHQpIHtcbiAgcmV0dXJuIGhhc2goXCJcIi5jb25jYXQoc2FsdCwgXCJfXCIpLmNvbmNhdChmbGF0dGVuVG9rZW4odG9rZW4pKSk7XG59XG52YXIgbGF5ZXJLZXkgPSBcImxheWVyLVwiLmNvbmNhdChEYXRlLm5vdygpLCBcIi1cIikuY29uY2F0KE1hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG52YXIgbGF5ZXJXaWR0aCA9ICc5MDNweCc7XG5cbmZ1bmN0aW9uIHN1cHBvcnRTZWxlY3RvcihzdHlsZVN0ciwgaGFuZGxlRWxlbWVudCkge1xuICBpZiAoY2FuVXNlRG9tKCkpIHtcbiAgICB2YXIgX2VsZSRwYXJlbnROb2RlO1xuXG4gICAgdXBkYXRlQ1NTKHN0eWxlU3RyLCBsYXllcktleSk7XG5cbiAgICB2YXIgX2VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgX2VsZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgX2VsZS5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIF9lbGUuc3R5bGUudG9wID0gJzAnO1xuICAgIGhhbmRsZUVsZW1lbnQgPT09IG51bGwgfHwgaGFuZGxlRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFuZGxlRWxlbWVudChfZWxlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF9lbGUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIF9lbGUuaW5uZXJIVE1MID0gJ1Rlc3QnO1xuICAgICAgX2VsZS5zdHlsZS56SW5kZXggPSAnOTk5OTk5OSc7XG4gICAgfVxuXG4gICAgdmFyIHN1cHBvcnQgPSBnZXRDb21wdXRlZFN0eWxlKF9lbGUpLndpZHRoID09PSBsYXllcldpZHRoO1xuICAgIChfZWxlJHBhcmVudE5vZGUgPSBfZWxlLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9lbGUkcGFyZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VsZSRwYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9lbGUpO1xuICAgIHJlbW92ZUNTUyhsYXllcktleSk7XG4gICAgcmV0dXJuIHN1cHBvcnQ7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBjYW5MYXllciA9IHVuZGVmaW5lZDtcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0TGF5ZXIoKSB7XG4gIGlmIChjYW5MYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FuTGF5ZXIgPSBzdXBwb3J0U2VsZWN0b3IoXCJAbGF5ZXIgXCIuY29uY2F0KGxheWVyS2V5LCBcIiB7IC5cIikuY29uY2F0KGxheWVyS2V5LCBcIiB7IHdpZHRoOiBcIikuY29uY2F0KGxheWVyV2lkdGgsIFwiIWltcG9ydGFudDsgfSB9XCIpLCBmdW5jdGlvbiAoZWxlKSB7XG4gICAgICBlbGUuY2xhc3NOYW1lID0gbGF5ZXJLZXk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY2FuTGF5ZXI7XG59IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGFzaCBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB7IEFUVFJfVE9LRU4sIENTU19JTl9KU19JTlNUQU5DRSwgQ1NTX0lOX0pTX0lOU1RBTkNFX0lEIH0gZnJvbSBcIi4uL1N0eWxlQ29udGV4dFwiO1xuaW1wb3J0IHVzZUdsb2JhbENhY2hlIGZyb20gXCIuL3VzZUdsb2JhbENhY2hlXCI7XG5pbXBvcnQgeyBmbGF0dGVuVG9rZW4sIHRva2VuMmtleSB9IGZyb20gXCIuLi91dGlsXCI7XG52YXIgRU1QVFlfT1ZFUlJJREUgPSB7fTsgLy8gR2VuZXJhdGUgZGlmZmVyZW50IHByZWZpeCB0byBtYWtlIHVzZXIgc2VsZWN0b3IgYnJlYWsgaW4gcHJvZHVjdGlvbiBlbnYuXG4vLyBUaGlzIGhlbHBzIGRldmVsb3BlciBub3QgdG8gZG8gc3R5bGUgb3ZlcnJpZGUgZGlyZWN0bHkgb24gdGhlIGhhc2ggaWQuXG5cbnZhciBoYXNoUHJlZml4ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdjc3MtZGV2LW9ubHktZG8tbm90LW92ZXJyaWRlJyA6ICdjc3MnO1xudmFyIHRva2VuS2V5cyA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gcmVjb3JkQ2xlYW5Ub2tlbih0b2tlbktleSkge1xuICB0b2tlbktleXMuc2V0KHRva2VuS2V5LCAodG9rZW5LZXlzLmdldCh0b2tlbktleSkgfHwgMCkgKyAxKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVUYWdzKGtleSkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBzdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbXCIuY29uY2F0KEFUVFJfVE9LRU4sIFwiPVxcXCJcIikuY29uY2F0KGtleSwgXCJcXFwiXVwiKSk7XG4gICAgc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBpZiAoc3R5bGVbQ1NTX0lOX0pTX0lOU1RBTkNFXSA9PT0gQ1NTX0lOX0pTX0lOU1RBTkNFX0lEKSB7XG4gICAgICAgIHZhciBfc3R5bGUkcGFyZW50Tm9kZTtcblxuICAgICAgICAoX3N0eWxlJHBhcmVudE5vZGUgPSBzdHlsZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfc3R5bGUkcGFyZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0eWxlJHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IC8vIFJlbW92ZSB3aWxsIGNoZWNrIGN1cnJlbnQga2V5cyBmaXJzdFxuXG5cbmZ1bmN0aW9uIGNsZWFuVG9rZW5TdHlsZSh0b2tlbktleSkge1xuICB0b2tlbktleXMuc2V0KHRva2VuS2V5LCAodG9rZW5LZXlzLmdldCh0b2tlbktleSkgfHwgMCkgLSAxKTtcbiAgdmFyIHRva2VuS2V5TGlzdCA9IEFycmF5LmZyb20odG9rZW5LZXlzLmtleXMoKSk7XG4gIHZhciBjbGVhbmFibGVLZXlMaXN0ID0gdG9rZW5LZXlMaXN0LmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNvdW50ID0gdG9rZW5LZXlzLmdldChrZXkpIHx8IDA7XG4gICAgcmV0dXJuIGNvdW50IDw9IDA7XG4gIH0pO1xuXG4gIGlmIChjbGVhbmFibGVLZXlMaXN0Lmxlbmd0aCA8IHRva2VuS2V5TGlzdC5sZW5ndGgpIHtcbiAgICBjbGVhbmFibGVLZXlMaXN0LmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVtb3ZlU3R5bGVUYWdzKGtleSk7XG4gICAgICB0b2tlbktleXMuZGVsZXRlKGtleSk7XG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogQ2FjaGUgdGhlbWUgZGVyaXZhdGl2ZSB0b2tlbiBhcyBnbG9iYWwgc2hhcmVkIG9uZVxuICogQHBhcmFtIHRoZW1lIFRoZW1lIGVudGl0eVxuICogQHBhcmFtIHRva2VucyBMaXN0IG9mIHRva2VucywgdXNlZCBmb3IgY2FjaGUuIFBsZWFzZSBkbyBub3QgZHluYW1pYyBnZW5lcmF0ZSBvYmplY3QgZGlyZWN0bHlcbiAqIEBwYXJhbSBvcHRpb24gQWRkaXRpb25hbCBjb25maWdcbiAqIEByZXR1cm5zIENhbGwgVGhlbWUuZ2V0RGVyaXZhdGl2ZVRva2VuKHRva2VuT2JqZWN0KSB0byBnZXQgdG9rZW5cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNhY2hlVG9rZW4odGhlbWUsIHRva2Vucykge1xuICB2YXIgb3B0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIF9vcHRpb24kc2FsdCA9IG9wdGlvbi5zYWx0LFxuICAgICAgc2FsdCA9IF9vcHRpb24kc2FsdCA9PT0gdm9pZCAwID8gJycgOiBfb3B0aW9uJHNhbHQsXG4gICAgICBfb3B0aW9uJG92ZXJyaWRlID0gb3B0aW9uLm92ZXJyaWRlLFxuICAgICAgb3ZlcnJpZGUgPSBfb3B0aW9uJG92ZXJyaWRlID09PSB2b2lkIDAgPyBFTVBUWV9PVkVSUklERSA6IF9vcHRpb24kb3ZlcnJpZGUsXG4gICAgICBmb3JtYXRUb2tlbiA9IG9wdGlvbi5mb3JtYXRUb2tlbjsgLy8gQmFzaWMgLSBXZSBkbyBiYXNpYyBjYWNoZSBoZXJlXG5cbiAgdmFyIG1lcmdlZFRva2VuID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbe31dLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodG9rZW5zKSkpO1xuICB9LCBbdG9rZW5zXSk7XG4gIHZhciB0b2tlblN0ciA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmbGF0dGVuVG9rZW4obWVyZ2VkVG9rZW4pO1xuICB9LCBbbWVyZ2VkVG9rZW5dKTtcbiAgdmFyIG92ZXJyaWRlVG9rZW5TdHIgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmxhdHRlblRva2VuKG92ZXJyaWRlKTtcbiAgfSwgW292ZXJyaWRlXSk7XG4gIHZhciBjYWNoZWRUb2tlbiA9IHVzZUdsb2JhbENhY2hlKCd0b2tlbicsIFtzYWx0LCB0aGVtZS5pZCwgdG9rZW5TdHIsIG92ZXJyaWRlVG9rZW5TdHJdLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlcml2YXRpdmVUb2tlbiA9IHRoZW1lLmdldERlcml2YXRpdmVUb2tlbihtZXJnZWRUb2tlbik7IC8vIE1lcmdlIHdpdGggb3ZlcnJpZGVcblxuICAgIHZhciBtZXJnZWREZXJpdmF0aXZlVG9rZW4gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlcml2YXRpdmVUb2tlbiksIG92ZXJyaWRlKTsgLy8gRm9ybWF0IGlmIG5lZWRlZFxuXG5cbiAgICBpZiAoZm9ybWF0VG9rZW4pIHtcbiAgICAgIG1lcmdlZERlcml2YXRpdmVUb2tlbiA9IGZvcm1hdFRva2VuKG1lcmdlZERlcml2YXRpdmVUb2tlbik7XG4gICAgfSAvLyBPcHRpbWl6ZSBmb3IgYHVzZVN0eWxlUmVnaXN0ZXJgIHBlcmZvcm1hbmNlXG5cblxuICAgIHZhciB0b2tlbktleSA9IHRva2VuMmtleShtZXJnZWREZXJpdmF0aXZlVG9rZW4sIHNhbHQpO1xuICAgIG1lcmdlZERlcml2YXRpdmVUb2tlbi5fdG9rZW5LZXkgPSB0b2tlbktleTtcbiAgICByZWNvcmRDbGVhblRva2VuKHRva2VuS2V5KTtcbiAgICB2YXIgaGFzaElkID0gXCJcIi5jb25jYXQoaGFzaFByZWZpeCwgXCItXCIpLmNvbmNhdChoYXNoKHRva2VuS2V5KSk7XG4gICAgbWVyZ2VkRGVyaXZhdGl2ZVRva2VuLl9oYXNoSWQgPSBoYXNoSWQ7IC8vIE5vdCB1c2VkXG5cbiAgICByZXR1cm4gW21lcmdlZERlcml2YXRpdmVUb2tlbiwgaGFzaElkXTtcbiAgfSwgZnVuY3Rpb24gKGNhY2hlKSB7XG4gICAgLy8gUmVtb3ZlIHRva2VuIHdpbGwgcmVtb3ZlIGFsbCByZWxhdGVkIHN0eWxlXG4gICAgY2xlYW5Ub2tlblN0eWxlKGNhY2hlWzBdLl90b2tlbktleSk7XG4gIH0pO1xuICByZXR1cm4gY2FjaGVkVG9rZW47XG59IiwiaW1wb3J0IGRldldhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGxpbnRXYXJuaW5nKG1lc3NhZ2UsIGluZm8pIHtcbiAgdmFyIHBhdGggPSBpbmZvLnBhdGgsXG4gICAgICBwYXJlbnRTZWxlY3RvcnMgPSBpbmZvLnBhcmVudFNlbGVjdG9ycztcbiAgZGV2V2FybmluZyhmYWxzZSwgXCJbQW50IERlc2lnbiBDU1MtaW4tSlNdIFwiLmNvbmNhdChwYXRoID8gXCJFcnJvciBpbiBcIi5jb25jYXQocGF0aCwgXCI6IFwiKSA6ICcnKS5jb25jYXQobWVzc2FnZSkuY29uY2F0KHBhcmVudFNlbGVjdG9ycy5sZW5ndGggPyBcIiBTZWxlY3RvcjogXCIuY29uY2F0KHBhcmVudFNlbGVjdG9ycy5qb2luKCcgfCAnKSkgOiAnJykpO1xufSIsImltcG9ydCB7IGxpbnRXYXJuaW5nIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxudmFyIGxpbnRlciA9IGZ1bmN0aW9uIGxpbnRlcihrZXksIHZhbHVlLCBpbmZvKSB7XG4gIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgIC8vIEZyb20gZW1vdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi9ibG9iL21haW4vcGFja2FnZXMvc2VyaWFsaXplL3NyYy9pbmRleC5qcyNMNjNcbiAgICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjb3VudGVycz98dXJsfCgoKHJlcGVhdGluZy0pPyhsaW5lYXJ8cmFkaWFsKSl8Y29uaWMpLWdyYWRpZW50KVxcKHwobm8tKT8ob3BlbnxjbG9zZSktcXVvdGUvO1xuICAgIHZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdpbml0aWFsJywgJ2luaGVyaXQnLCAndW5zZXQnXTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgIGxpbnRXYXJuaW5nKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcXCInYC5cIiksIGluZm8pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGludGVyOyIsImltcG9ydCB7IGxpbnRXYXJuaW5nIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxudmFyIGxpbnRlciA9IGZ1bmN0aW9uIGxpbnRlcihrZXksIHZhbHVlLCBpbmZvKSB7XG4gIGlmIChrZXkgPT09ICdhbmltYXRpb24nKSB7XG4gICAgaWYgKGluZm8uaGFzaElkICYmIHZhbHVlICE9PSAnbm9uZScpIHtcbiAgICAgIGxpbnRXYXJuaW5nKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgaGFzaGVkIGFuaW1hdGlvbiAnXCIuY29uY2F0KHZhbHVlLCBcIicsIGluIHdoaWNoIGNhc2UgJ2FuaW1hdGlvbk5hbWUnIHdpdGggS2V5ZnJhbWUgYXMgdmFsdWUgaXMgcmVjb21tZW5kZWQuXCIpLCBpbmZvKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbnRlcjsiLCJpbXBvcnQgeyBsaW50V2FybmluZyB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIGlzQ29uY2F0U2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgdmFyIF9zZWxlY3RvciRtYXRjaDtcblxuICB2YXIgbm90Q29udGVudCA9ICgoX3NlbGVjdG9yJG1hdGNoID0gc2VsZWN0b3IubWF0Y2goLzpub3RcXCgoW14pXSopXFwpLykpID09PSBudWxsIHx8IF9zZWxlY3RvciRtYXRjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3NlbGVjdG9yJG1hdGNoWzFdKSB8fCAnJzsgLy8gc3BsaXQgc2VsZWN0b3IuIGUuZy5cbiAgLy8gYGgxI2EuYmAgPT4gWydoMScsICNhJywgJy5iJ11cblxuICB2YXIgc3BsaXRDZWxscyA9IG5vdENvbnRlbnQuc3BsaXQoLyhcXFtbXltdKl0pfCg/PVsuI10pLykuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9KTtcbiAgcmV0dXJuIHNwbGl0Q2VsbHMubGVuZ3RoID4gMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoKGluZm8pIHtcbiAgcmV0dXJuIGluZm8ucGFyZW50U2VsZWN0b3JzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XG4gICAgaWYgKCFwcmV2KSB7XG4gICAgICByZXR1cm4gY3VyO1xuICAgIH1cblxuICAgIHJldHVybiBjdXIuaW5jbHVkZXMoJyYnKSA/IGN1ci5yZXBsYWNlKC8mL2csIHByZXYpIDogXCJcIi5jb25jYXQocHJldiwgXCIgXCIpLmNvbmNhdChjdXIpO1xuICB9LCAnJyk7XG59XG5cbnZhciBsaW50ZXIgPSBmdW5jdGlvbiBsaW50ZXIoa2V5LCB2YWx1ZSwgaW5mbykge1xuICB2YXIgcGFyZW50U2VsZWN0b3JQYXRoID0gcGFyc2VQYXRoKGluZm8pO1xuICB2YXIgbm90TGlzdCA9IHBhcmVudFNlbGVjdG9yUGF0aC5tYXRjaCgvOm5vdFxcKFteKV0qXFwpL2cpIHx8IFtdO1xuXG4gIGlmIChub3RMaXN0Lmxlbmd0aCA+IDAgJiYgbm90TGlzdC5zb21lKGlzQ29uY2F0U2VsZWN0b3IpKSB7XG4gICAgbGludFdhcm5pbmcoXCJDb25jYXQgJzpub3QnIHNlbGVjdG9yIG5vdCBzdXBwb3J0IGluIGxlZ2FjeSBicm93c2Vycy5cIiwgaW5mbyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbnRlcjsiLCJpbXBvcnQgeyBsaW50V2FybmluZyB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbnZhciBsaW50ZXIgPSBmdW5jdGlvbiBsaW50ZXIoa2V5LCB2YWx1ZSwgaW5mbykge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ21hcmdpbkxlZnQnOlxuICAgIGNhc2UgJ21hcmdpblJpZ2h0JzpcbiAgICBjYXNlICdwYWRkaW5nTGVmdCc6XG4gICAgY2FzZSAncGFkZGluZ1JpZ2h0JzpcbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6XG4gICAgY2FzZSAnYm9yZGVyTGVmdCc6XG4gICAgY2FzZSAnYm9yZGVyTGVmdFdpZHRoJzpcbiAgICBjYXNlICdib3JkZXJMZWZ0U3R5bGUnOlxuICAgIGNhc2UgJ2JvcmRlckxlZnRDb2xvcic6XG4gICAgY2FzZSAnYm9yZGVyUmlnaHQnOlxuICAgIGNhc2UgJ2JvcmRlclJpZ2h0V2lkdGgnOlxuICAgIGNhc2UgJ2JvcmRlclJpZ2h0U3R5bGUnOlxuICAgIGNhc2UgJ2JvcmRlclJpZ2h0Q29sb3InOlxuICAgIGNhc2UgJ2JvcmRlclRvcExlZnRSYWRpdXMnOlxuICAgIGNhc2UgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJzpcbiAgICBjYXNlICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJzpcbiAgICBjYXNlICdib3JkZXJCb3R0b21SaWdodFJhZGl1cyc6XG4gICAgICBsaW50V2FybmluZyhcIllvdSBzZWVtIHRvIGJlIHVzaW5nIG5vbi1sb2dpY2FsIHByb3BlcnR5ICdcIi5jb25jYXQoa2V5LCBcIicgd2hpY2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCBSVEwgbW9kZS4gUGxlYXNlIHVzZSBsb2dpY2FsIHByb3BlcnRpZXMgYW5kIHZhbHVlcyBpbnN0ZWFkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NTU19Mb2dpY2FsX1Byb3BlcnRpZXMuXCIpLCBpbmZvKTtcbiAgICAgIHJldHVybjtcblxuICAgIGNhc2UgJ21hcmdpbic6XG4gICAgY2FzZSAncGFkZGluZyc6XG4gICAgY2FzZSAnYm9yZGVyV2lkdGgnOlxuICAgIGNhc2UgJ2JvcmRlclN0eWxlJzpcbiAgICAgIC8vIGNhc2UgJ2JvcmRlckNvbG9yJzpcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB2YWx1ZUFyciA9IHZhbHVlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsdWVBcnIubGVuZ3RoID09PSA0ICYmIHZhbHVlQXJyWzFdICE9PSB2YWx1ZUFyclszXSkge1xuICAgICAgICAgIGxpbnRXYXJuaW5nKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgJ1wiLmNvbmNhdChrZXksIFwiJyBwcm9wZXJ0eSB3aXRoIGRpZmZlcmVudCBsZWZ0IFwiKS5jb25jYXQoa2V5LCBcIiBhbmQgcmlnaHQgXCIpLmNvbmNhdChrZXksIFwiLCB3aGljaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFJUTCBtb2RlLiBQbGVhc2UgdXNlIGxvZ2ljYWwgcHJvcGVydGllcyBhbmQgdmFsdWVzIGluc3RlYWQuIEZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ1NTX0xvZ2ljYWxfUHJvcGVydGllcy5cIiksIGluZm8pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcblxuICAgIGNhc2UgJ2NsZWFyJzpcbiAgICBjYXNlICd0ZXh0QWxpZ24nOlxuICAgICAgaWYgKHZhbHVlID09PSAnbGVmdCcgfHwgdmFsdWUgPT09ICdyaWdodCcpIHtcbiAgICAgICAgbGludFdhcm5pbmcoXCJZb3Ugc2VlbSB0byBiZSB1c2luZyBub24tbG9naWNhbCB2YWx1ZSAnXCIuY29uY2F0KHZhbHVlLCBcIicgb2YgXCIpLmNvbmNhdChrZXksIFwiLCB3aGljaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFJUTCBtb2RlLiBQbGVhc2UgdXNlIGxvZ2ljYWwgcHJvcGVydGllcyBhbmQgdmFsdWVzIGluc3RlYWQuIEZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ1NTX0xvZ2ljYWxfUHJvcGVydGllcy5cIiksIGluZm8pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG5cbiAgICBjYXNlICdib3JkZXJSYWRpdXMnOlxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJhZGl1c0dyb3VwcyA9IHZhbHVlLnNwbGl0KCcvJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGludmFsaWQgPSByYWRpdXNHcm91cHMucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGdyb3VwKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmFkaXVzQXJyID0gZ3JvdXAuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcbiAgICAgICAgICB9KTsgLy8gYm9yZGVyUmFkaXVzOiAnMnB4IDRweCdcblxuICAgICAgICAgIGlmIChyYWRpdXNBcnIubGVuZ3RoID49IDIgJiYgcmFkaXVzQXJyWzBdICE9PSByYWRpdXNBcnJbMV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gLy8gYm9yZGVyUmFkaXVzOiAnNHB4IDRweCAycHgnXG5cblxuICAgICAgICAgIGlmIChyYWRpdXNBcnIubGVuZ3RoID09PSAzICYmIHJhZGl1c0FyclsxXSAhPT0gcmFkaXVzQXJyWzJdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IC8vIGJvcmRlclJhZGl1czogJzRweCA0cHggMnB4IDRweCdcblxuXG4gICAgICAgICAgaWYgKHJhZGl1c0Fyci5sZW5ndGggPT09IDQgJiYgcmFkaXVzQXJyWzJdICE9PSByYWRpdXNBcnJbM10pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIGxpbnRXYXJuaW5nKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgbm9uLWxvZ2ljYWwgdmFsdWUgJ1wiLmNvbmNhdCh2YWx1ZSwgXCInIG9mIFwiKS5jb25jYXQoa2V5LCBcIiwgd2hpY2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCBSVEwgbW9kZS4gUGxlYXNlIHVzZSBsb2dpY2FsIHByb3BlcnRpZXMgYW5kIHZhbHVlcyBpbnN0ZWFkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NTU19Mb2dpY2FsX1Byb3BlcnRpZXMuXCIpLCBpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG5cbiAgICBkZWZhdWx0OlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaW50ZXI7IiwiaW1wb3J0IHsgbGludFdhcm5pbmcgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG52YXIgbGludGVyID0gZnVuY3Rpb24gbGludGVyKGtleSwgdmFsdWUsIGluZm8pIHtcbiAgaWYgKGluZm8ucGFyZW50U2VsZWN0b3JzLnNvbWUoZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIHNlbGVjdG9ycyA9IHNlbGVjdG9yLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHNlbGVjdG9ycy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5zcGxpdCgnJicpLmxlbmd0aCA+IDI7XG4gICAgfSk7XG4gIH0pKSB7XG4gICAgbGludFdhcm5pbmcoJ1Nob3VsZCBub3QgdXNlIG1vcmUgdGhhbiBvbmUgYCZgIGluIGEgc2VsZWN0b3IuJywgaW5mbyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbnRlcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnRRdW90ZXNMaW50ZXIgfSBmcm9tIFwiLi9jb250ZW50UXVvdGVzTGludGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhc2hlZEFuaW1hdGlvbkxpbnRlciB9IGZyb20gXCIuL2hhc2hlZEFuaW1hdGlvbkxpbnRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZWdhY3lOb3RTZWxlY3RvckxpbnRlciB9IGZyb20gXCIuL2xlZ2FjeU5vdFNlbGVjdG9yTGludGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvZ2ljYWxQcm9wZXJ0aWVzTGludGVyIH0gZnJvbSBcIi4vbG9naWNhbFByb3BlcnRpZXNMaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyZW50U2VsZWN0b3JMaW50ZXIgfSBmcm9tIFwiLi9wYXJlbnRTZWxlY3RvckxpbnRlclwiOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgaGFzaCBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSBcInJjLXV0aWwvZXMvRG9tL2NhblVzZURvbVwiO1xuaW1wb3J0IHsgcmVtb3ZlQ1NTLCB1cGRhdGVDU1MgfSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vZHluYW1pY0NTU1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnOyAvLyBAdHMtaWdub3JlXG5cbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgeyBjb21waWxlLCBzZXJpYWxpemUsIHN0cmluZ2lmeSB9IGZyb20gJ3N0eWxpcyc7XG5pbXBvcnQgeyBjb250ZW50UXVvdGVzTGludGVyLCBoYXNoZWRBbmltYXRpb25MaW50ZXIgfSBmcm9tIFwiLi4vbGludGVyc1wiO1xuaW1wb3J0IFN0eWxlQ29udGV4dCwgeyBBVFRSX0RFVl9DQUNIRV9QQVRILCBBVFRSX01BUkssIEFUVFJfVE9LRU4sIENTU19JTl9KU19JTlNUQU5DRSwgQ1NTX0lOX0pTX0lOU1RBTkNFX0lEIH0gZnJvbSBcIi4uL1N0eWxlQ29udGV4dFwiO1xuaW1wb3J0IHsgc3VwcG9ydExheWVyIH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCB1c2VHbG9iYWxDYWNoZSBmcm9tIFwiLi91c2VHbG9iYWxDYWNoZVwiO1xudmFyIGlzQ2xpZW50U2lkZSA9IGNhblVzZURvbSgpO1xudmFyIFNLSVBfQ0hFQ0sgPSAnX3NraXBfY2hlY2tfJztcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFyc2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFByZXByb2Nlc3NvciBzdHlsZSBjb250ZW50IHRvIGJyb3dzZXIgc3VwcG9ydCBvbmVcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVTdHlsZShzdHlsZVN0cikge1xuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZShjb21waWxlKHN0eWxlU3RyKSwgc3RyaW5naWZ5KTtcbiAgcmV0dXJuIHNlcmlhbGl6ZWQucmVwbGFjZSgvXFx7JSUlXFw6W147XTt9L2csICc7Jyk7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG91bmRDU1NQcm9wZXJ0eSh2YWx1ZSkge1xuICByZXR1cm4gX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIFNLSVBfQ0hFQ0sgaW4gdmFsdWU7XG59IC8vIOazqOWFpSBoYXNoIOWAvFxuXG5cbmZ1bmN0aW9uIGluamVjdFNlbGVjdG9ySGFzaChrZXksIGhhc2hJZCwgaGFzaFByaW9yaXR5KSB7XG4gIGlmICghaGFzaElkKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIHZhciBoYXNoQ2xhc3NOYW1lID0gXCIuXCIuY29uY2F0KGhhc2hJZCk7XG4gIHZhciBoYXNoU2VsZWN0b3IgPSBoYXNoUHJpb3JpdHkgPT09ICdsb3cnID8gXCI6d2hlcmUoXCIuY29uY2F0KGhhc2hDbGFzc05hbWUsIFwiKVwiKSA6IGhhc2hDbGFzc05hbWU7IC8vIOazqOWFpSBoYXNoSWRcblxuICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHZhciBfZmlyc3RQYXRoJG1hdGNoO1xuXG4gICAgdmFyIGZ1bGxQYXRoID0gay50cmltKCkuc3BsaXQoL1xccysvKTsgLy8g5aaC5p6cIFNlbGVjdG9yIOesrOS4gOS4quaYryBIVE1MIEVsZW1lbnTvvIzpgqPmiJHku6zlsLHmj5LliLDlroPnmoTlkI7pnaLjgILlj43kuYvvvIzlsLHmj5LliLDmnIDliY3pnaLjgIJcblxuICAgIHZhciBmaXJzdFBhdGggPSBmdWxsUGF0aFswXSB8fCAnJztcbiAgICB2YXIgaHRtbEVsZW1lbnQgPSAoKF9maXJzdFBhdGgkbWF0Y2ggPSBmaXJzdFBhdGgubWF0Y2goL15cXHcrLykpID09PSBudWxsIHx8IF9maXJzdFBhdGgkbWF0Y2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9maXJzdFBhdGgkbWF0Y2hbMF0pIHx8ICcnO1xuICAgIGZpcnN0UGF0aCA9IFwiXCIuY29uY2F0KGh0bWxFbGVtZW50KS5jb25jYXQoaGFzaFNlbGVjdG9yKS5jb25jYXQoZmlyc3RQYXRoLnNsaWNlKGh0bWxFbGVtZW50Lmxlbmd0aCkpO1xuICAgIHJldHVybiBbZmlyc3RQYXRoXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGZ1bGxQYXRoLnNsaWNlKDEpKSkuam9pbignICcpO1xuICB9KTtcbiAgcmV0dXJuIGtleXMuam9pbignLCcpO1xufVxuXG4vLyBHbG9iYWwgZWZmZWN0IHN0eWxlIHdpbGwgbW91bnQgb25jZSBhbmQgbm90IHJlbW92ZWRcbi8vIFRoZSBlZmZlY3Qgd2lsbCBub3Qgc2F2ZSBpbiBTU1IgY2FjaGUgKGUuZy4ga2V5ZnJhbWVzKVxudmFyIGdsb2JhbEVmZmVjdFN0eWxlS2V5cyA9IG5ldyBTZXQoKTtcbi8qKlxuICogQHByaXZhdGUgVGVzdCBvbmx5LiBDbGVhciB0aGUgZ2xvYmFsIGVmZmVjdCBzdHlsZSBrZXlzLlxuICovXG5cbmV4cG9ydCB2YXIgX2NmID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGdsb2JhbEVmZmVjdFN0eWxlS2V5cy5jbGVhcigpO1xufSA6IHVuZGVmaW5lZDsgLy8gUGFyc2UgQ1NTT2JqZWN0IHRvIHN0eWxlIGNvbnRlbnRcblxuZXhwb3J0IHZhciBwYXJzZVN0eWxlID0gZnVuY3Rpb24gcGFyc2VTdHlsZShpbnRlcnBvbGF0aW9uKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgcm9vdDogdHJ1ZSxcbiAgICBwYXJlbnRTZWxlY3RvcnM6IFtdXG4gIH0sXG4gICAgICByb290ID0gX3JlZi5yb290LFxuICAgICAgaW5qZWN0SGFzaCA9IF9yZWYuaW5qZWN0SGFzaCxcbiAgICAgIHBhcmVudFNlbGVjdG9ycyA9IF9yZWYucGFyZW50U2VsZWN0b3JzO1xuXG4gIHZhciBoYXNoSWQgPSBjb25maWcuaGFzaElkLFxuICAgICAgbGF5ZXIgPSBjb25maWcubGF5ZXIsXG4gICAgICBwYXRoID0gY29uZmlnLnBhdGgsXG4gICAgICBoYXNoUHJpb3JpdHkgPSBjb25maWcuaGFzaFByaW9yaXR5LFxuICAgICAgX2NvbmZpZyR0cmFuc2Zvcm1lcnMgPSBjb25maWcudHJhbnNmb3JtZXJzLFxuICAgICAgdHJhbnNmb3JtZXJzID0gX2NvbmZpZyR0cmFuc2Zvcm1lcnMgPT09IHZvaWQgMCA/IFtdIDogX2NvbmZpZyR0cmFuc2Zvcm1lcnMsXG4gICAgICBfY29uZmlnJGxpbnRlcnMgPSBjb25maWcubGludGVycyxcbiAgICAgIGxpbnRlcnMgPSBfY29uZmlnJGxpbnRlcnMgPT09IHZvaWQgMCA/IFtdIDogX2NvbmZpZyRsaW50ZXJzO1xuICB2YXIgc3R5bGVTdHIgPSAnJztcbiAgdmFyIGVmZmVjdFN0eWxlID0ge307XG5cbiAgZnVuY3Rpb24gcGFyc2VLZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XG4gICAgdmFyIGFuaW1hdGlvbk5hbWUgPSBrZXlmcmFtZXMuZ2V0TmFtZShoYXNoSWQpO1xuXG4gICAgaWYgKCFlZmZlY3RTdHlsZVthbmltYXRpb25OYW1lXSkge1xuICAgICAgdmFyIF9wYXJzZVN0eWxlID0gcGFyc2VTdHlsZShrZXlmcmFtZXMuc3R5bGUsIGNvbmZpZywge1xuICAgICAgICByb290OiBmYWxzZSxcbiAgICAgICAgcGFyZW50U2VsZWN0b3JzOiBwYXJlbnRTZWxlY3RvcnNcbiAgICAgIH0pLFxuICAgICAgICAgIF9wYXJzZVN0eWxlMiA9IF9zbGljZWRUb0FycmF5KF9wYXJzZVN0eWxlLCAxKSxcbiAgICAgICAgICBfcGFyc2VkU3RyID0gX3BhcnNlU3R5bGUyWzBdO1xuXG4gICAgICBlZmZlY3RTdHlsZVthbmltYXRpb25OYW1lXSA9IFwiQGtleWZyYW1lcyBcIi5jb25jYXQoa2V5ZnJhbWVzLmdldE5hbWUoaGFzaElkKSkuY29uY2F0KF9wYXJzZWRTdHIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXR0ZW5MaXN0KGxpc3QpIHtcbiAgICB2YXIgZnVsbExpc3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgZmxhdHRlbkxpc3QoaXRlbSwgZnVsbExpc3QpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtKSB7XG4gICAgICAgIGZ1bGxMaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bGxMaXN0O1xuICB9XG5cbiAgdmFyIGZsYXR0ZW5TdHlsZUxpc3QgPSBmbGF0dGVuTGlzdChBcnJheS5pc0FycmF5KGludGVycG9sYXRpb24pID8gaW50ZXJwb2xhdGlvbiA6IFtpbnRlcnBvbGF0aW9uXSk7XG4gIGZsYXR0ZW5TdHlsZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAob3JpZ2luU3R5bGUpIHtcbiAgICAvLyBPbmx5IHJvb3QgbGV2ZWwgY2FuIHVzZSByYXcgc3RyaW5nXG4gICAgdmFyIHN0eWxlID0gdHlwZW9mIG9yaWdpblN0eWxlID09PSAnc3RyaW5nJyAmJiAhcm9vdCA/IHt9IDogb3JpZ2luU3R5bGU7XG5cbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgc3R5bGVTdHIgKz0gXCJcIi5jb25jYXQoc3R5bGUsIFwiXFxuXCIpO1xuICAgIH0gZWxzZSBpZiAoc3R5bGUuX2tleWZyYW1lKSB7XG4gICAgICAvLyBLZXlmcmFtZVxuICAgICAgcGFyc2VLZXlmcmFtZXMoc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWVyZ2VkU3R5bGUgPSB0cmFuc2Zvcm1lcnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCB0cmFucykge1xuICAgICAgICB2YXIgX3RyYW5zJHZpc2l0O1xuXG4gICAgICAgIHJldHVybiAodHJhbnMgPT09IG51bGwgfHwgdHJhbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfdHJhbnMkdmlzaXQgPSB0cmFucy52aXNpdCkgPT09IG51bGwgfHwgX3RyYW5zJHZpc2l0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdHJhbnMkdmlzaXQuY2FsbCh0cmFucywgcHJldikpIHx8IHByZXY7XG4gICAgICB9LCBzdHlsZSk7IC8vIE5vcm1hbCBDU1NPYmplY3RcblxuICAgICAgT2JqZWN0LmtleXMobWVyZ2VkU3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBtZXJnZWRTdHlsZVtrZXldO1xuXG4gICAgICAgIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgKGtleSAhPT0gJ2FuaW1hdGlvbk5hbWUnIHx8ICF2YWx1ZS5fa2V5ZnJhbWUpICYmICFpc0NvbXBvdW5kQ1NTUHJvcGVydHkodmFsdWUpKSB7XG4gICAgICAgICAgdmFyIHN1YkluamVjdEhhc2ggPSBmYWxzZTsgLy8g5b2T5oiQ5bWM5aWX5a+56LGh5p2l5aSE55CGXG5cbiAgICAgICAgICB2YXIgbWVyZ2VkS2V5ID0ga2V5LnRyaW0oKTsgLy8gV2hldGhlciB0cmVhdCBjaGlsZCBhcyByb290LiBJbiBtb3N0IGNhc2UgaXQgaXMgZmFsc2UuXG5cbiAgICAgICAgICB2YXIgbmV4dFJvb3QgPSBmYWxzZTsgLy8g5ouG5YiG5aSa5Liq6YCJ5oup5ZmoXG5cbiAgICAgICAgICBpZiAoKHJvb3QgfHwgaW5qZWN0SGFzaCkgJiYgaGFzaElkKSB7XG4gICAgICAgICAgICBpZiAobWVyZ2VkS2V5LnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgICAgICAvLyDnlaXov4flqpLkvZPmn6Xor6LvvIzkuqTnu5nlrZDoioLngrnnu6fnu63mj5LlhaUgaGFzaElkXG4gICAgICAgICAgICAgIHN1YkluamVjdEhhc2ggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8g5rOo5YWlIGhhc2hJZFxuICAgICAgICAgICAgICBtZXJnZWRLZXkgPSBpbmplY3RTZWxlY3Rvckhhc2goa2V5LCBoYXNoSWQsIGhhc2hQcmlvcml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChyb290ICYmICFoYXNoSWQgJiYgKG1lcmdlZEtleSA9PT0gJyYnIHx8IG1lcmdlZEtleSA9PT0gJycpKSB7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIG9mIGB7ICcmJzogeyBhOiB7IGNvbG9yOiAncmVkJyB9IH0gfWAgb3IgYHsgJyc6IHsgYTogeyBjb2xvcjogJ3JlZCcgfSB9IH1gIHdpdGhvdXQgaGFzaElkLFxuICAgICAgICAgICAgLy8gd2Ugd2lsbCBnZXQgYCZ7YTp7Y29sb3I6cmVkO319YCBvciBge2E6e2NvbG9yOnJlZDt9fWAgc3RyaW5nIGZvciBzdHlsaXMgdG8gY29tcGlsZS5cbiAgICAgICAgICAgIC8vIEJ1dCBpdCBkb2VzIG5vdCBjb25mb3JtIHRvIHN0eWxpcyBzeW50YXgsXG4gICAgICAgICAgICAvLyBhbmQgZmluYWxseSB3ZSB3aWxsIGdldCBge2NvbG9yOnJlZDt9YCBhcyBjc3MsIHdoaWNoIGlzIHdyb25nLlxuICAgICAgICAgICAgLy8gU28gd2UgbmVlZCB0byByZW1vdmUga2V5IGluIHJvb3QsIGFuZCB0cmVhdCBjaGlsZCBgeyBhOiB7IGNvbG9yOiAncmVkJyB9IH1gIGFzIHJvb3QuXG4gICAgICAgICAgICBtZXJnZWRLZXkgPSAnJztcbiAgICAgICAgICAgIG5leHRSb290ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3BhcnNlU3R5bGUzID0gcGFyc2VTdHlsZSh2YWx1ZSwgY29uZmlnLCB7XG4gICAgICAgICAgICByb290OiBuZXh0Um9vdCxcbiAgICAgICAgICAgIGluamVjdEhhc2g6IHN1YkluamVjdEhhc2gsXG4gICAgICAgICAgICBwYXJlbnRTZWxlY3RvcnM6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocGFyZW50U2VsZWN0b3JzKSwgW21lcmdlZEtleV0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9wYXJzZVN0eWxlNCA9IF9zbGljZWRUb0FycmF5KF9wYXJzZVN0eWxlMywgMiksXG4gICAgICAgICAgICAgIF9wYXJzZWRTdHIyID0gX3BhcnNlU3R5bGU0WzBdLFxuICAgICAgICAgICAgICBjaGlsZEVmZmVjdFN0eWxlID0gX3BhcnNlU3R5bGU0WzFdO1xuXG4gICAgICAgICAgZWZmZWN0U3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGVmZmVjdFN0eWxlKSwgY2hpbGRFZmZlY3RTdHlsZSk7XG4gICAgICAgICAgc3R5bGVTdHIgKz0gXCJcIi5jb25jYXQobWVyZ2VkS2V5KS5jb25jYXQoX3BhcnNlZFN0cjIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfdmFsdWU7XG5cbiAgICAgICAgICB2YXIgYWN0dWFsVmFsdWUgPSAoX3ZhbHVlID0gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnZhbHVlKSAhPT0gbnVsbCAmJiBfdmFsdWUgIT09IHZvaWQgMCA/IF92YWx1ZSA6IHZhbHVlO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKF90eXBlb2YodmFsdWUpICE9PSAnb2JqZWN0JyB8fCAhKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgJiYgdmFsdWVbU0tJUF9DSEVDS10pKSkge1xuICAgICAgICAgICAgW2NvbnRlbnRRdW90ZXNMaW50ZXIsIGhhc2hlZEFuaW1hdGlvbkxpbnRlcl0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShsaW50ZXJzKSkuZm9yRWFjaChmdW5jdGlvbiAobGludGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaW50ZXIoa2V5LCBhY3R1YWxWYWx1ZSwge1xuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgaGFzaElkOiBoYXNoSWQsXG4gICAgICAgICAgICAgICAgcGFyZW50U2VsZWN0b3JzOiBwYXJlbnRTZWxlY3RvcnNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IC8vIOWmguaenOaYr+agt+W8j+WImeebtOaOpeaPkuWFpVxuXG5cbiAgICAgICAgICB2YXIgc3R5bGVOYW1lID0ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiLmNvbmNhdChtYXRjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9KTsgLy8gQXV0byBzdWZmaXggd2l0aCBweFxuXG4gICAgICAgICAgdmFyIGZvcm1hdFZhbHVlID0gYWN0dWFsVmFsdWU7XG5cbiAgICAgICAgICBpZiAoIXVuaXRsZXNzW2tleV0gJiYgdHlwZW9mIGZvcm1hdFZhbHVlID09PSAnbnVtYmVyJyAmJiBmb3JtYXRWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgZm9ybWF0VmFsdWUgPSBcIlwiLmNvbmNhdChmb3JtYXRWYWx1ZSwgXCJweFwiKTtcbiAgICAgICAgICB9IC8vIGhhbmRsZSBhbmltYXRpb25OYW1lICYgS2V5ZnJhbWUgdmFsdWVcblxuXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ2FuaW1hdGlvbk5hbWUnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgJiYgdmFsdWUuX2tleWZyYW1lKSB7XG4gICAgICAgICAgICBwYXJzZUtleWZyYW1lcyh2YWx1ZSk7XG4gICAgICAgICAgICBmb3JtYXRWYWx1ZSA9IHZhbHVlLmdldE5hbWUoaGFzaElkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdHlsZVN0ciArPSBcIlwiLmNvbmNhdChzdHlsZU5hbWUsIFwiOlwiKS5jb25jYXQoZm9ybWF0VmFsdWUsIFwiO1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoIXJvb3QpIHtcbiAgICBzdHlsZVN0ciA9IFwie1wiLmNvbmNhdChzdHlsZVN0ciwgXCJ9XCIpO1xuICB9IGVsc2UgaWYgKGxheWVyICYmIHN1cHBvcnRMYXllcigpKSB7XG4gICAgdmFyIGxheWVyQ2VsbHMgPSBsYXllci5zcGxpdCgnLCcpO1xuICAgIHZhciBsYXllck5hbWUgPSBsYXllckNlbGxzW2xheWVyQ2VsbHMubGVuZ3RoIC0gMV0udHJpbSgpO1xuICAgIHN0eWxlU3RyID0gXCJAbGF5ZXIgXCIuY29uY2F0KGxheWVyTmFtZSwgXCIge1wiKS5jb25jYXQoc3R5bGVTdHIsIFwifVwiKTsgLy8gT3JkZXIgb2YgbGF5ZXIgaWYgbmVlZGVkXG5cbiAgICBpZiAobGF5ZXJDZWxscy5sZW5ndGggPiAxKSB7XG4gICAgICAvLyB6b21iaWVKOiBzdHlsaXMgZG8gbm90IHN1cHBvcnQgbGF5ZXIgb3JkZXIsIHNvIHdlIG5lZWQgdG8gaGFuZGxlIGl0IG1hbnVhbGx5LlxuICAgICAgc3R5bGVTdHIgPSBcIkBsYXllciBcIi5jb25jYXQobGF5ZXIsIFwieyUlJTolfVwiKS5jb25jYXQoc3R5bGVTdHIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbc3R5bGVTdHIsIGVmZmVjdFN0eWxlXTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gdW5pcXVlSGFzaChwYXRoLCBzdHlsZVN0cikge1xuICByZXR1cm4gaGFzaChcIlwiLmNvbmNhdChwYXRoLmpvaW4oJyUnKSkuY29uY2F0KHN0eWxlU3RyKSk7XG59XG5cbmZ1bmN0aW9uIEVtcHR5KCkge1xuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogUmVnaXN0ZXIgYSBzdHlsZSB0byB0aGUgZ2xvYmFsIHN0eWxlIHNoZWV0LlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3R5bGVSZWdpc3RlcihpbmZvLCBzdHlsZUZuKSB7XG4gIHZhciB0b2tlbiA9IGluZm8udG9rZW4sXG4gICAgICBwYXRoID0gaW5mby5wYXRoLFxuICAgICAgaGFzaElkID0gaW5mby5oYXNoSWQsXG4gICAgICBsYXllciA9IGluZm8ubGF5ZXI7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTdHlsZUNvbnRleHQpLFxuICAgICAgYXV0b0NsZWFyID0gX1JlYWN0JHVzZUNvbnRleHQuYXV0b0NsZWFyLFxuICAgICAgbW9jayA9IF9SZWFjdCR1c2VDb250ZXh0Lm1vY2ssXG4gICAgICBkZWZhdWx0Q2FjaGUgPSBfUmVhY3QkdXNlQ29udGV4dC5kZWZhdWx0Q2FjaGUsXG4gICAgICBoYXNoUHJpb3JpdHkgPSBfUmVhY3QkdXNlQ29udGV4dC5oYXNoUHJpb3JpdHksXG4gICAgICBjb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5jb250YWluZXIsXG4gICAgICBzc3JJbmxpbmUgPSBfUmVhY3QkdXNlQ29udGV4dC5zc3JJbmxpbmUsXG4gICAgICB0cmFuc2Zvcm1lcnMgPSBfUmVhY3QkdXNlQ29udGV4dC50cmFuc2Zvcm1lcnMsXG4gICAgICBsaW50ZXJzID0gX1JlYWN0JHVzZUNvbnRleHQubGludGVycztcblxuICB2YXIgdG9rZW5LZXkgPSB0b2tlbi5fdG9rZW5LZXk7XG4gIHZhciBmdWxsUGF0aCA9IFt0b2tlbktleV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXRoKSk7IC8vIENoZWNrIGlmIG5lZWQgaW5zZXJ0IHN0eWxlXG5cbiAgdmFyIGlzTWVyZ2VkQ2xpZW50U2lkZSA9IGlzQ2xpZW50U2lkZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBtb2NrICE9PSB1bmRlZmluZWQpIHtcbiAgICBpc01lcmdlZENsaWVudFNpZGUgPSBtb2NrID09PSAnY2xpZW50JztcbiAgfVxuXG4gIHZhciBfdXNlR2xvYmFsQ2FjaGUgPSB1c2VHbG9iYWxDYWNoZSgnc3R5bGUnLCBmdWxsUGF0aCwgLy8gQ3JlYXRlIGNhY2hlIGlmIG5lZWRlZFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0eWxlT2JqID0gc3R5bGVGbigpO1xuXG4gICAgdmFyIF9wYXJzZVN0eWxlNSA9IHBhcnNlU3R5bGUoc3R5bGVPYmosIHtcbiAgICAgIGhhc2hJZDogaGFzaElkLFxuICAgICAgaGFzaFByaW9yaXR5OiBoYXNoUHJpb3JpdHksXG4gICAgICBsYXllcjogbGF5ZXIsXG4gICAgICBwYXRoOiBwYXRoLmpvaW4oJy0nKSxcbiAgICAgIHRyYW5zZm9ybWVyczogdHJhbnNmb3JtZXJzLFxuICAgICAgbGludGVyczogbGludGVyc1xuICAgIH0pLFxuICAgICAgICBfcGFyc2VTdHlsZTYgPSBfc2xpY2VkVG9BcnJheShfcGFyc2VTdHlsZTUsIDIpLFxuICAgICAgICBwYXJzZWRTdHlsZSA9IF9wYXJzZVN0eWxlNlswXSxcbiAgICAgICAgZWZmZWN0U3R5bGUgPSBfcGFyc2VTdHlsZTZbMV07XG5cbiAgICB2YXIgc3R5bGVTdHIgPSBub3JtYWxpemVTdHlsZShwYXJzZWRTdHlsZSk7XG4gICAgdmFyIHN0eWxlSWQgPSB1bmlxdWVIYXNoKGZ1bGxQYXRoLCBzdHlsZVN0cik7XG5cbiAgICBpZiAoaXNNZXJnZWRDbGllbnRTaWRlKSB7XG4gICAgICB2YXIgc3R5bGUgPSB1cGRhdGVDU1Moc3R5bGVTdHIsIHN0eWxlSWQsIHtcbiAgICAgICAgbWFyazogQVRUUl9NQVJLLFxuICAgICAgICBwcmVwZW5kOiAncXVldWUnLFxuICAgICAgICBhdHRhY2hUbzogY29udGFpbmVyXG4gICAgICB9KTtcbiAgICAgIHN0eWxlW0NTU19JTl9KU19JTlNUQU5DRV0gPSBDU1NfSU5fSlNfSU5TVEFOQ0VfSUQ7IC8vIFVzZWQgZm9yIGB1c2VDYWNoZVRva2VuYCB0byByZW1vdmUgb24gYmF0Y2ggd2hlbiB0b2tlbiByZW1vdmVkXG5cbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShBVFRSX1RPS0VOLCB0b2tlbktleSk7IC8vIERldiB1c2FnZSB0byBmaW5kIHdoaWNoIGNhY2hlIHBhdGggbWFkZSB0aGlzIGVhc2lseVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoQVRUUl9ERVZfQ0FDSEVfUEFUSCwgZnVsbFBhdGguam9pbignfCcpKTtcbiAgICAgIH0gLy8gSW5qZWN0IGNsaWVudCBzaWRlIGVmZmVjdCBzdHlsZVxuXG5cbiAgICAgIE9iamVjdC5rZXlzKGVmZmVjdFN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChlZmZlY3RLZXkpIHtcbiAgICAgICAgaWYgKCFnbG9iYWxFZmZlY3RTdHlsZUtleXMuaGFzKGVmZmVjdEtleSkpIHtcbiAgICAgICAgICBnbG9iYWxFZmZlY3RTdHlsZUtleXMuYWRkKGVmZmVjdEtleSk7IC8vIEluamVjdFxuXG4gICAgICAgICAgdXBkYXRlQ1NTKG5vcm1hbGl6ZVN0eWxlKGVmZmVjdFN0eWxlW2VmZmVjdEtleV0pLCBcIl9lZmZlY3QtXCIuY29uY2F0KGVmZmVjdEtleSksIHtcbiAgICAgICAgICAgIG1hcms6IEFUVFJfTUFSSyxcbiAgICAgICAgICAgIHByZXBlbmQ6ICdxdWV1ZScsXG4gICAgICAgICAgICBhdHRhY2hUbzogY29udGFpbmVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBbc3R5bGVTdHIsIHRva2VuS2V5LCBzdHlsZUlkXTtcbiAgfSwgLy8gUmVtb3ZlIGNhY2hlIGlmIG5vIG5lZWRcbiAgZnVuY3Rpb24gKF9yZWYyLCBmcm9tSE1SKSB7XG4gICAgdmFyIF9yZWYzID0gX3NsaWNlZFRvQXJyYXkoX3JlZjIsIDMpLFxuICAgICAgICBzdHlsZUlkID0gX3JlZjNbMl07XG5cbiAgICBpZiAoKGZyb21ITVIgfHwgYXV0b0NsZWFyKSAmJiBpc0NsaWVudFNpZGUpIHtcbiAgICAgIHJlbW92ZUNTUyhzdHlsZUlkLCB7XG4gICAgICAgIG1hcms6IEFUVFJfTUFSS1xuICAgICAgfSk7XG4gICAgfVxuICB9KSxcbiAgICAgIF91c2VHbG9iYWxDYWNoZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlR2xvYmFsQ2FjaGUsIDMpLFxuICAgICAgY2FjaGVkU3R5bGVTdHIgPSBfdXNlR2xvYmFsQ2FjaGUyWzBdLFxuICAgICAgY2FjaGVkVG9rZW5LZXkgPSBfdXNlR2xvYmFsQ2FjaGUyWzFdLFxuICAgICAgY2FjaGVkU3R5bGVJZCA9IF91c2VHbG9iYWxDYWNoZTJbMl07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIHN0eWxlTm9kZTtcblxuICAgIGlmICghc3NySW5saW5lIHx8IGlzTWVyZ2VkQ2xpZW50U2lkZSB8fCAhZGVmYXVsdENhY2hlKSB7XG4gICAgICBzdHlsZU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbXB0eSwgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcmVmNDtcblxuICAgICAgc3R5bGVOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCBfZXh0ZW5kcyh7fSwgKF9yZWY0ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmNCwgQVRUUl9UT0tFTiwgY2FjaGVkVG9rZW5LZXkpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjQsIEFUVFJfTUFSSywgY2FjaGVkU3R5bGVJZCksIF9yZWY0KSwge1xuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgIF9faHRtbDogY2FjaGVkU3R5bGVTdHJcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc3R5bGVOb2RlLCBub2RlKTtcbiAgfTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1NSICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFN0eWxlKGNhY2hlKSB7XG4gIC8vIHByZWZpeCB3aXRoIGBzdHlsZWAgaXMgdXNlZCBmb3IgYHVzZVN0eWxlUmVnaXN0ZXJgIHRvIGNhY2hlIHN0eWxlIGNvbnRleHRcbiAgdmFyIHN0eWxlS2V5cyA9IEFycmF5LmZyb20oY2FjaGUuY2FjaGUua2V5cygpKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkuc3RhcnRzV2l0aCgnc3R5bGUlJyk7XG4gIH0pOyAvLyBjb25zdCB0b2tlblN0eWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cbiAgdmFyIHN0eWxlVGV4dCA9ICcnO1xuICBzdHlsZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIF8gPSBfc2xpY2VkVG9BcnJheShjYWNoZS5jYWNoZS5nZXQoa2V5KVsxXSwgMyksXG4gICAgICAgIHN0eWxlU3RyID0gX1swXSxcbiAgICAgICAgdG9rZW5LZXkgPSBfWzFdLFxuICAgICAgICBzdHlsZUlkID0gX1syXTtcblxuICAgIHN0eWxlVGV4dCArPSBcIjxzdHlsZSBcIi5jb25jYXQoQVRUUl9UT0tFTiwgXCI9XFxcIlwiKS5jb25jYXQodG9rZW5LZXksIFwiXFxcIiBcIikuY29uY2F0KEFUVFJfTUFSSywgXCI9XFxcIlwiKS5jb25jYXQoc3R5bGVJZCwgXCJcXFwiPlwiKS5jb25jYXQoc3R5bGVTdHIsIFwiPC9zdHlsZT5cIik7XG4gIH0pO1xuICByZXR1cm4gc3R5bGVUZXh0O1xufSIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcblxudmFyIEtleWZyYW1lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gS2V5ZnJhbWUobmFtZSwgc3R5bGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5ZnJhbWUpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3R5bGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9rZXlmcmFtZVwiLCB0cnVlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEtleWZyYW1lLCBbe1xuICAgIGtleTogXCJnZXROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICB2YXIgaGFzaElkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHJldHVybiBoYXNoSWQgPyBcIlwiLmNvbmNhdChoYXNoSWQsIFwiLVwiKS5jb25jYXQodGhpcy5uYW1lKSA6IHRoaXMubmFtZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gS2V5ZnJhbWU7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEtleWZyYW1lOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDYWNoZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gc2FtZURlcml2YXRpdmVPcHRpb24obGVmdCwgcmlnaHQpIHtcbiAgaWYgKGxlZnQubGVuZ3RoICE9PSByaWdodC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlZnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobGVmdFtpXSAhPT0gcmlnaHRbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIFRoZW1lQ2FjaGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUaGVtZUNhY2hlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZUNhY2hlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNhY2hlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJrZXlzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjYWNoZUNhbGxUaW1lc1wiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgICB0aGlzLmNhY2hlQ2FsbFRpbWVzID0gMDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUaGVtZUNhY2hlLCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5rZXlzLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW50ZXJuYWxHZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW50ZXJuYWxHZXQoZGVyaXZhdGl2ZU9wdGlvbikge1xuICAgICAgdmFyIF9jYWNoZTIsIF9jYWNoZTM7XG5cbiAgICAgIHZhciB1cGRhdGVDYWxsVGltZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIGNhY2hlID0ge1xuICAgICAgICBtYXA6IHRoaXMuY2FjaGVcbiAgICAgIH07XG4gICAgICBkZXJpdmF0aXZlT3B0aW9uLmZvckVhY2goZnVuY3Rpb24gKGRlcml2YXRpdmUpIHtcbiAgICAgICAgaWYgKCFjYWNoZSkge1xuICAgICAgICAgIGNhY2hlID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfY2FjaGUsIF9jYWNoZSRtYXA7XG5cbiAgICAgICAgICBjYWNoZSA9IChfY2FjaGUgPSBjYWNoZSkgPT09IG51bGwgfHwgX2NhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2NhY2hlJG1hcCA9IF9jYWNoZS5tYXApID09PSBudWxsIHx8IF9jYWNoZSRtYXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jYWNoZSRtYXAuZ2V0KGRlcml2YXRpdmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKChfY2FjaGUyID0gY2FjaGUpICE9PSBudWxsICYmIF9jYWNoZTIgIT09IHZvaWQgMCAmJiBfY2FjaGUyLnZhbHVlICYmIHVwZGF0ZUNhbGxUaW1lcykge1xuICAgICAgICBjYWNoZS52YWx1ZVsxXSA9IHRoaXMuY2FjaGVDYWxsVGltZXMrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfY2FjaGUzID0gY2FjaGUpID09PSBudWxsIHx8IF9jYWNoZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jYWNoZTMudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoZGVyaXZhdGl2ZU9wdGlvbikge1xuICAgICAgdmFyIF90aGlzJGludGVybmFsR2V0O1xuXG4gICAgICByZXR1cm4gKF90aGlzJGludGVybmFsR2V0ID0gdGhpcy5pbnRlcm5hbEdldChkZXJpdmF0aXZlT3B0aW9uLCB0cnVlKSkgPT09IG51bGwgfHwgX3RoaXMkaW50ZXJuYWxHZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGludGVybmFsR2V0WzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKGRlcml2YXRpdmVPcHRpb24pIHtcbiAgICAgIHJldHVybiAhIXRoaXMuaW50ZXJuYWxHZXQoZGVyaXZhdGl2ZU9wdGlvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoZGVyaXZhdGl2ZU9wdGlvbiwgdmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIC8vIE5ldyBjYWNoZVxuICAgICAgaWYgKCF0aGlzLmhhcyhkZXJpdmF0aXZlT3B0aW9uKSkge1xuICAgICAgICBpZiAodGhpcy5zaXplKCkgKyAxID4gVGhlbWVDYWNoZS5NQVhfQ0FDSEVfU0laRSArIFRoZW1lQ2FjaGUuTUFYX0NBQ0hFX09GRlNFVCkge1xuICAgICAgICAgIHZhciBfdGhpcyRrZXlzJHJlZHVjZSA9IHRoaXMua2V5cy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgICAgICAgICB2YXIgX3Jlc3VsdCA9IF9zbGljZWRUb0FycmF5KHJlc3VsdCwgMiksXG4gICAgICAgICAgICAgICAgY2FsbFRpbWVzID0gX3Jlc3VsdFsxXTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmludGVybmFsR2V0KGtleSlbMV0gPCBjYWxsVGltZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIF90aGlzLmludGVybmFsR2V0KGtleSlbMV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0sIFt0aGlzLmtleXNbMF0sIHRoaXMuY2FjaGVDYWxsVGltZXNdKSxcbiAgICAgICAgICAgICAgX3RoaXMka2V5cyRyZWR1Y2UyID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMka2V5cyRyZWR1Y2UsIDEpLFxuICAgICAgICAgICAgICB0YXJnZXRLZXkgPSBfdGhpcyRrZXlzJHJlZHVjZTJbMF07XG5cbiAgICAgICAgICB0aGlzLmRlbGV0ZSh0YXJnZXRLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5rZXlzLnB1c2goZGVyaXZhdGl2ZU9wdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgICBkZXJpdmF0aXZlT3B0aW9uLmZvckVhY2goZnVuY3Rpb24gKGRlcml2YXRpdmUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gZGVyaXZhdGl2ZU9wdGlvbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY2FjaGUuc2V0KGRlcml2YXRpdmUsIHtcbiAgICAgICAgICAgIHZhbHVlOiBbdmFsdWUsIF90aGlzLmNhY2hlQ2FsbFRpbWVzKytdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNhY2hlVmFsdWUgPSBjYWNoZS5nZXQoZGVyaXZhdGl2ZSk7XG5cbiAgICAgICAgICBpZiAoIWNhY2hlVmFsdWUpIHtcbiAgICAgICAgICAgIGNhY2hlLnNldChkZXJpdmF0aXZlLCB7XG4gICAgICAgICAgICAgIG1hcDogbmV3IE1hcCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFjYWNoZVZhbHVlLm1hcCkge1xuICAgICAgICAgICAgY2FjaGVWYWx1ZS5tYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGUgPSBjYWNoZS5nZXQoZGVyaXZhdGl2ZSkubWFwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsZXRlQnlQYXRoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUJ5UGF0aChjdXJyZW50Q2FjaGUsIGRlcml2YXRpdmVzKSB7XG4gICAgICB2YXIgY2FjaGUgPSBjdXJyZW50Q2FjaGUuZ2V0KGRlcml2YXRpdmVzWzBdKTtcblxuICAgICAgaWYgKGRlcml2YXRpdmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgX2NhY2hlJHZhbHVlO1xuXG4gICAgICAgIGlmICghY2FjaGUubWFwKSB7XG4gICAgICAgICAgY3VycmVudENhY2hlLmRlbGV0ZShkZXJpdmF0aXZlc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudENhY2hlLnNldChkZXJpdmF0aXZlc1swXSwge1xuICAgICAgICAgICAgbWFwOiBjYWNoZS5tYXBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoX2NhY2hlJHZhbHVlID0gY2FjaGUudmFsdWUpID09PSBudWxsIHx8IF9jYWNoZSR2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NhY2hlJHZhbHVlWzBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kZWxldGVCeVBhdGgoY2FjaGUubWFwLCBkZXJpdmF0aXZlcy5zbGljZSgxKSk7XG5cbiAgICAgIGlmICgoIWNhY2hlLm1hcCB8fCBjYWNoZS5tYXAuc2l6ZSA9PT0gMCkgJiYgIWNhY2hlLnZhbHVlKSB7XG4gICAgICAgIGN1cnJlbnRDYWNoZS5kZWxldGUoZGVyaXZhdGl2ZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWxldGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGV0ZShkZXJpdmF0aXZlT3B0aW9uKSB7XG4gICAgICAvLyBJZiBjYWNoZSBleGlzdHNcbiAgICAgIGlmICh0aGlzLmhhcyhkZXJpdmF0aXZlT3B0aW9uKSkge1xuICAgICAgICB0aGlzLmtleXMgPSB0aGlzLmtleXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuICFzYW1lRGVyaXZhdGl2ZU9wdGlvbihpdGVtLCBkZXJpdmF0aXZlT3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZUJ5UGF0aCh0aGlzLmNhY2hlLCBkZXJpdmF0aXZlT3B0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGhlbWVDYWNoZTtcbn0oKTtcblxuX2RlZmluZVByb3BlcnR5KFRoZW1lQ2FjaGUsIFwiTUFYX0NBQ0hFX1NJWkVcIiwgMjApO1xuXG5fZGVmaW5lUHJvcGVydHkoVGhlbWVDYWNoZSwgXCJNQVhfQ0FDSEVfT0ZGU0VUXCIsIDUpO1xuXG5leHBvcnQgeyBUaGVtZUNhY2hlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xudmFyIHV1aWQgPSAwO1xuLyoqXG4gKiBUaGVtZSB3aXRoIGFsZ29yaXRobXMgdG8gZGVyaXZlIHRva2VucyBmcm9tIGRlc2lnbiB0b2tlbnMuXG4gKiBVc2UgYGNyZWF0ZVRoZW1lYCBmaXJzdCB3aGljaCB3aWxsIGhlbHAgdG8gbWFuYWdlIHRoZSB0aGVtZSBpbnN0YW5jZSBjYWNoZS5cbiAqL1xuXG52YXIgVGhlbWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUaGVtZShkZXJpdmF0aXZlcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkZXJpdmF0aXZlc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaWRcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuZGVyaXZhdGl2ZXMgPSBBcnJheS5pc0FycmF5KGRlcml2YXRpdmVzKSA/IGRlcml2YXRpdmVzIDogW2Rlcml2YXRpdmVzXTtcbiAgICB0aGlzLmlkID0gdXVpZDtcblxuICAgIGlmIChkZXJpdmF0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdhcm5pbmcoZGVyaXZhdGl2ZXMubGVuZ3RoID4gMCwgJ1tBbnQgRGVzaWduIENTUy1pbi1KU10gVGhlbWUgc2hvdWxkIGhhdmUgYXQgbGVhc3Qgb25lIGRlcml2YXRpdmUgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdXVpZCArPSAxO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRoZW1lLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmF0aXZlVG9rZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZhdGl2ZVRva2VuKHRva2VuKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZXJpdmF0aXZlcy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgZGVyaXZhdGl2ZSkge1xuICAgICAgICByZXR1cm4gZGVyaXZhdGl2ZSh0b2tlbiwgcmVzdWx0KTtcbiAgICAgIH0sIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRoZW1lO1xufSgpO1xuXG5leHBvcnQgeyBUaGVtZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IFRoZW1lQ2FjaGUgZnJvbSBcIi4vVGhlbWVDYWNoZVwiO1xuaW1wb3J0IFRoZW1lIGZyb20gXCIuL1RoZW1lXCI7XG52YXIgY2FjaGVUaGVtZXMgPSBuZXcgVGhlbWVDYWNoZSgpO1xuLyoqXG4gKiBTYW1lIGFzIG5ldyBUaGVtZSwgYnV0IHdpbGwgYWx3YXlzIHJldHVybiBzYW1lIG9uZSBpZiBgZGVyaXZhdGl2ZWAgbm90IGNoYW5nZWQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGhlbWUoZGVyaXZhdGl2ZXMpIHtcbiAgdmFyIGRlcml2YXRpdmVBcnIgPSBBcnJheS5pc0FycmF5KGRlcml2YXRpdmVzKSA/IGRlcml2YXRpdmVzIDogW2Rlcml2YXRpdmVzXTsgLy8gQ3JlYXRlIG5ldyB0aGVtZSBpZiBub3QgZXhpc3RcblxuICBpZiAoIWNhY2hlVGhlbWVzLmhhcyhkZXJpdmF0aXZlQXJyKSkge1xuICAgIGNhY2hlVGhlbWVzLnNldChkZXJpdmF0aXZlQXJyLCBuZXcgVGhlbWUoZGVyaXZhdGl2ZUFycikpO1xuICB9IC8vIEdldCB0aGVtZSBmcm9tIGNhY2hlIGFuZCByZXR1cm5cblxuXG4gIHJldHVybiBjYWNoZVRoZW1lcy5nZXQoZGVyaXZhdGl2ZUFycik7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVUaGVtZSB9IGZyb20gXCIuL2NyZWF0ZVRoZW1lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRoZW1lIH0gZnJvbSBcIi4vVGhlbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGhlbWVDYWNoZSB9IGZyb20gXCIuL1RoZW1lQ2FjaGVcIjsiLCJmdW5jdGlvbiBzcGxpdFZhbHVlcyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbdmFsdWVdO1xuICB9XG5cbiAgdmFyIHNwbGl0U3R5bGUgPSBTdHJpbmcodmFsdWUpLnNwbGl0KC9cXHMrLyk7IC8vIENvbWJpbmUgc3R5bGVzIHNwbGl0IGluIGJyYWNrZXRzLCBsaWtlIGBjYWxjKDFweCArIDJweClgXG5cbiAgdmFyIHRlbXAgPSAnJztcbiAgdmFyIGJyYWNrZXRzID0gMDtcbiAgcmV0dXJuIHNwbGl0U3R5bGUucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaW5jbHVkZXMoJygnKSkge1xuICAgICAgdGVtcCArPSBpdGVtO1xuICAgICAgYnJhY2tldHMgKz0gaXRlbS5zcGxpdCgnKCcpLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIGlmIChpdGVtLmluY2x1ZGVzKCcpJykpIHtcbiAgICAgIHRlbXAgKz0gaXRlbTtcbiAgICAgIGJyYWNrZXRzIC09IGl0ZW0uc3BsaXQoJyknKS5sZW5ndGggLSAxO1xuXG4gICAgICBpZiAoYnJhY2tldHMgPT09IDApIHtcbiAgICAgICAgbGlzdC5wdXNoKHRlbXApO1xuICAgICAgICB0ZW1wID0gJyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChicmFja2V0cyA+IDApIHtcbiAgICAgIHRlbXAgKz0gaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIG5vU3BsaXQobGlzdCkge1xuICBsaXN0Lm5vdFNwbGl0ID0gdHJ1ZTtcbiAgcmV0dXJuIGxpc3Q7XG59XG5cbnZhciBrZXlNYXAgPSB7XG4gIC8vIEluc2V0XG4gIGluc2V0OiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICBpbnNldEJsb2NrOiBbJ3RvcCcsICdib3R0b20nXSxcbiAgaW5zZXRCbG9ja1N0YXJ0OiBbJ3RvcCddLFxuICBpbnNldEJsb2NrRW5kOiBbJ2JvdHRvbSddLFxuICBpbnNldElubGluZTogWydsZWZ0JywgJ3JpZ2h0J10sXG4gIGluc2V0SW5saW5lU3RhcnQ6IFsnbGVmdCddLFxuICBpbnNldElubGluZUVuZDogWydyaWdodCddLFxuICAvLyBNYXJnaW5cbiAgbWFyZ2luQmxvY2s6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICBtYXJnaW5CbG9ja1N0YXJ0OiBbJ21hcmdpblRvcCddLFxuICBtYXJnaW5CbG9ja0VuZDogWydtYXJnaW5Cb3R0b20nXSxcbiAgbWFyZ2luSW5saW5lOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbWFyZ2luSW5saW5lU3RhcnQ6IFsnbWFyZ2luTGVmdCddLFxuICBtYXJnaW5JbmxpbmVFbmQ6IFsnbWFyZ2luUmlnaHQnXSxcbiAgLy8gUGFkZGluZ1xuICBwYWRkaW5nQmxvY2s6IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ10sXG4gIHBhZGRpbmdCbG9ja1N0YXJ0OiBbJ3BhZGRpbmdUb3AnXSxcbiAgcGFkZGluZ0Jsb2NrRW5kOiBbJ3BhZGRpbmdCb3R0b20nXSxcbiAgcGFkZGluZ0lubGluZTogWydwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnXSxcbiAgcGFkZGluZ0lubGluZVN0YXJ0OiBbJ3BhZGRpbmdMZWZ0J10sXG4gIHBhZGRpbmdJbmxpbmVFbmQ6IFsncGFkZGluZ1JpZ2h0J10sXG4gIC8vIEJvcmRlclxuICBib3JkZXJCbG9jazogbm9TcGxpdChbJ2JvcmRlclRvcCcsICdib3JkZXJCb3R0b20nXSksXG4gIGJvcmRlckJsb2NrU3RhcnQ6IG5vU3BsaXQoWydib3JkZXJUb3AnXSksXG4gIGJvcmRlckJsb2NrRW5kOiBub1NwbGl0KFsnYm9yZGVyQm90dG9tJ10pLFxuICBib3JkZXJJbmxpbmU6IG5vU3BsaXQoWydib3JkZXJMZWZ0JywgJ2JvcmRlclJpZ2h0J10pLFxuICBib3JkZXJJbmxpbmVTdGFydDogbm9TcGxpdChbJ2JvcmRlckxlZnQnXSksXG4gIGJvcmRlcklubGluZUVuZDogbm9TcGxpdChbJ2JvcmRlclJpZ2h0J10pLFxuICAvLyBCb3JkZXIgd2lkdGhcbiAgYm9yZGVyQmxvY2tXaWR0aDogWydib3JkZXJUb3BXaWR0aCcsICdib3JkZXJCb3R0b21XaWR0aCddLFxuICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg6IFsnYm9yZGVyVG9wV2lkdGgnXSxcbiAgYm9yZGVyQmxvY2tFbmRXaWR0aDogWydib3JkZXJCb3R0b21XaWR0aCddLFxuICBib3JkZXJJbmxpbmVXaWR0aDogWydib3JkZXJMZWZ0V2lkdGgnLCAnYm9yZGVyUmlnaHRXaWR0aCddLFxuICBib3JkZXJJbmxpbmVTdGFydFdpZHRoOiBbJ2JvcmRlckxlZnRXaWR0aCddLFxuICBib3JkZXJJbmxpbmVFbmRXaWR0aDogWydib3JkZXJSaWdodFdpZHRoJ10sXG4gIC8vIEJvcmRlciBzdHlsZVxuICBib3JkZXJCbG9ja1N0eWxlOiBbJ2JvcmRlclRvcFN0eWxlJywgJ2JvcmRlckJvdHRvbVN0eWxlJ10sXG4gIGJvcmRlckJsb2NrU3RhcnRTdHlsZTogWydib3JkZXJUb3BTdHlsZSddLFxuICBib3JkZXJCbG9ja0VuZFN0eWxlOiBbJ2JvcmRlckJvdHRvbVN0eWxlJ10sXG4gIGJvcmRlcklubGluZVN0eWxlOiBbJ2JvcmRlckxlZnRTdHlsZScsICdib3JkZXJSaWdodFN0eWxlJ10sXG4gIGJvcmRlcklubGluZVN0YXJ0U3R5bGU6IFsnYm9yZGVyTGVmdFN0eWxlJ10sXG4gIGJvcmRlcklubGluZUVuZFN0eWxlOiBbJ2JvcmRlclJpZ2h0U3R5bGUnXSxcbiAgLy8gQm9yZGVyIGNvbG9yXG4gIGJvcmRlckJsb2NrQ29sb3I6IFsnYm9yZGVyVG9wQ29sb3InLCAnYm9yZGVyQm90dG9tQ29sb3InXSxcbiAgYm9yZGVyQmxvY2tTdGFydENvbG9yOiBbJ2JvcmRlclRvcENvbG9yJ10sXG4gIGJvcmRlckJsb2NrRW5kQ29sb3I6IFsnYm9yZGVyQm90dG9tQ29sb3InXSxcbiAgYm9yZGVySW5saW5lQ29sb3I6IFsnYm9yZGVyTGVmdENvbG9yJywgJ2JvcmRlclJpZ2h0Q29sb3InXSxcbiAgYm9yZGVySW5saW5lU3RhcnRDb2xvcjogWydib3JkZXJMZWZ0Q29sb3InXSxcbiAgYm9yZGVySW5saW5lRW5kQ29sb3I6IFsnYm9yZGVyUmlnaHRDb2xvciddLFxuICAvLyBCb3JkZXIgcmFkaXVzXG4gIGJvcmRlclN0YXJ0U3RhcnRSYWRpdXM6IFsnYm9yZGVyVG9wTGVmdFJhZGl1cyddLFxuICBib3JkZXJTdGFydEVuZFJhZGl1czogWydib3JkZXJUb3BSaWdodFJhZGl1cyddLFxuICBib3JkZXJFbmRTdGFydFJhZGl1czogWydib3JkZXJCb3R0b21MZWZ0UmFkaXVzJ10sXG4gIGJvcmRlckVuZEVuZFJhZGl1czogWydib3JkZXJCb3R0b21SaWdodFJhZGl1cyddXG59O1xuXG5mdW5jdGlvbiBza2lwQ2hlY2sodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59XG4vKipcbiAqIENvbnZlcnQgY3NzIGxvZ2ljYWwgcHJvcGVydGllcyB0byBsZWdhY3kgcHJvcGVydGllcy5cbiAqIFN1Y2ggYXM6IGBtYXJnaW4tYmxvY2stc3RhcnRgIHRvIGBtYXJnaW4tdG9wYC5cbiAqIFRyYW5zZm9ybSBsaXN0OlxuICogLSBpbnNldFxuICogLSBtYXJnaW5cbiAqIC0gcGFkZGluZ1xuICogLSBib3JkZXJcbiAqL1xuXG5cbnZhciB0cmFuc2Zvcm0gPSB7XG4gIHZpc2l0OiBmdW5jdGlvbiB2aXNpdChjc3NPYmopIHtcbiAgICB2YXIgY2xvbmUgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjc3NPYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gY3NzT2JqW2tleV07XG4gICAgICB2YXIgbWF0Y2hWYWx1ZSA9IGtleU1hcFtrZXldO1xuXG4gICAgICBpZiAobWF0Y2hWYWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gc3BsaXRWYWx1ZXModmFsdWUpO1xuXG4gICAgICAgIGlmIChtYXRjaFZhbHVlLmxlbmd0aCAmJiBtYXRjaFZhbHVlLm5vdFNwbGl0KSB7XG4gICAgICAgICAgLy8gbm90IHNwbGl0IG1lYW5zIGFsd2F5cyBnaXZlIHNhbWUgdmFsdWUgbGlrZSBib3JkZXJcbiAgICAgICAgICBtYXRjaFZhbHVlLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoS2V5KSB7XG4gICAgICAgICAgICBjbG9uZVttYXRjaEtleV0gPSBza2lwQ2hlY2sodmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoVmFsdWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIGxpa2UgYG1hcmdpbkJsb2NrU3RhcnRgID0+IGBtYXJnaW5Ub3BgXG4gICAgICAgICAgY2xvbmVbbWF0Y2hWYWx1ZVswXV0gPSBza2lwQ2hlY2sodmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoVmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIGxpa2UgYG1hcmdpbkJsb2NrYCA9PiBgbWFyZ2luVG9wYCAmIGBtYXJnaW5Cb3R0b21gXG4gICAgICAgICAgbWF0Y2hWYWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaEtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfdmFsdWVzJGluZGV4O1xuXG4gICAgICAgICAgICBjbG9uZVttYXRjaEtleV0gPSBza2lwQ2hlY2soKF92YWx1ZXMkaW5kZXggPSB2YWx1ZXNbaW5kZXhdKSAhPT0gbnVsbCAmJiBfdmFsdWVzJGluZGV4ICE9PSB2b2lkIDAgPyBfdmFsdWVzJGluZGV4IDogdmFsdWVzWzBdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaFZhbHVlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgIC8vIEhhbmRsZSBsaWtlIGBpbnNldGAgPT4gYHRvcGAgJiBgcmlnaHRgICYgYGJvdHRvbWAgJiBgbGVmdGBcbiAgICAgICAgICBtYXRjaFZhbHVlLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoS2V5LCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIF9yZWYsIF92YWx1ZXMkaW5kZXgyO1xuXG4gICAgICAgICAgICBjbG9uZVttYXRjaEtleV0gPSBza2lwQ2hlY2soKF9yZWYgPSAoX3ZhbHVlcyRpbmRleDIgPSB2YWx1ZXNbaW5kZXhdKSAhPT0gbnVsbCAmJiBfdmFsdWVzJGluZGV4MiAhPT0gdm9pZCAwID8gX3ZhbHVlcyRpbmRleDIgOiB2YWx1ZXNbaW5kZXggLSAyXSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IHZhbHVlc1swXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xvbmVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtOyIsImltcG9ydCB1c2VDYWNoZVRva2VuIGZyb20gXCIuL2hvb2tzL3VzZUNhY2hlVG9rZW5cIjtcbmltcG9ydCB1c2VTdHlsZVJlZ2lzdGVyLCB7IGV4dHJhY3RTdHlsZSB9IGZyb20gXCIuL2hvb2tzL3VzZVN0eWxlUmVnaXN0ZXJcIjtcbmltcG9ydCBLZXlmcmFtZXMgZnJvbSBcIi4vS2V5ZnJhbWVzXCI7XG5pbXBvcnQgeyBsZWdhY3lOb3RTZWxlY3RvckxpbnRlciwgbG9naWNhbFByb3BlcnRpZXNMaW50ZXIsIHBhcmVudFNlbGVjdG9yTGludGVyIH0gZnJvbSBcIi4vbGludGVyc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2FjaGUsIFN0eWxlUHJvdmlkZXIgfSBmcm9tIFwiLi9TdHlsZUNvbnRleHRcIjtcbmltcG9ydCB7IGNyZWF0ZVRoZW1lLCBUaGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgbGVnYWN5TG9naWNhbFByb3BlcnRpZXNUcmFuc2Zvcm1lciBmcm9tIFwiLi90cmFuc2Zvcm1lcnMvbGVnYWN5TG9naWNhbFByb3BlcnRpZXNcIjtcbmV4cG9ydCB7IFRoZW1lLCBjcmVhdGVUaGVtZSwgdXNlU3R5bGVSZWdpc3RlciwgdXNlQ2FjaGVUb2tlbiwgY3JlYXRlQ2FjaGUsIFN0eWxlUHJvdmlkZXIsIEtleWZyYW1lcywgZXh0cmFjdFN0eWxlLCAvLyBUcmFuc2Zvcm1lclxubGVnYWN5TG9naWNhbFByb3BlcnRpZXNUcmFuc2Zvcm1lciwgLy8gTGludGVyc1xubG9naWNhbFByb3BlcnRpZXNMaW50ZXIsIGxlZ2FjeU5vdFNlbGVjdG9yTGludGVyLCBwYXJlbnRTZWxlY3RvckxpbnRlciB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///24599
`)},10274:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ TinyColor; }
/* harmony export */ });
/* unused harmony export tinycolor */
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86500);
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48701);
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1350);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90279);




var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .numberInputToObject */ .Yt)(color);
        }
        this.originalInput = color;
        var rgb = (0,_format_input__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by \`inputToRgb\`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .boundAlpha */ .Yq)(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsv */ .py)(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsv */ .py)(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsl */ .lC)(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsl */ .lC)(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHex */ .vq)(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbaToHex */ .s)(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__/* .bound01 */ .sh)(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__/* .bound01 */ .sh)(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHex */ .vq)(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(_css_color_names__WEBPACK_IMPORTED_MODULE_3__/* .names */ .R); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__/* .clamp01 */ .V2)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling \`desaturate(100)\`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a,
        });
    };
    /**
     * Alias for \`polyad(3)\`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for \`polyad(4)\`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLHdDQUF3QyxrREFBa0Q7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29CO0FBQ3JCO0FBQ087QUFDUCw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGN0cmwvdGlueWNvbG9yL2Rpc3QvbW9kdWxlL2luZGV4LmpzP2I3YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbnVtYmVySW5wdXRUb09iamVjdCwgcmdiYVRvSGV4LCByZ2JUb0hleCwgcmdiVG9Ic2wsIHJnYlRvSHN2IH0gZnJvbSAnLi9jb252ZXJzaW9uJztcbmltcG9ydCB7IG5hbWVzIH0gZnJvbSAnLi9jc3MtY29sb3ItbmFtZXMnO1xuaW1wb3J0IHsgaW5wdXRUb1JHQiB9IGZyb20gJy4vZm9ybWF0LWlucHV0JztcbmltcG9ydCB7IGJvdW5kMDEsIGJvdW5kQWxwaGEsIGNsYW1wMDEgfSBmcm9tICcuL3V0aWwnO1xudmFyIFRpbnlDb2xvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaW55Q29sb3IoY29sb3IsIG9wdHMpIHtcbiAgICAgICAgaWYgKGNvbG9yID09PSB2b2lkIDApIHsgY29sb3IgPSAnJzsgfVxuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIElmIGlucHV0IGlzIGFscmVhZHkgYSB0aW55Y29sb3IsIHJldHVybiBpdHNlbGZcbiAgICAgICAgaWYgKGNvbG9yIGluc3RhbmNlb2YgVGlueUNvbG9yKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RydWN0b3ItcmV0dXJuXG4gICAgICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbG9yID0gbnVtYmVySW5wdXRUb09iamVjdChjb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcmlnaW5hbElucHV0ID0gY29sb3I7XG4gICAgICAgIHZhciByZ2IgPSBpbnB1dFRvUkdCKGNvbG9yKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbElucHV0ID0gY29sb3I7XG4gICAgICAgIHRoaXMuciA9IHJnYi5yO1xuICAgICAgICB0aGlzLmcgPSByZ2IuZztcbiAgICAgICAgdGhpcy5iID0gcmdiLmI7XG4gICAgICAgIHRoaXMuYSA9IHJnYi5hO1xuICAgICAgICB0aGlzLnJvdW5kQSA9IE1hdGgucm91bmQoMTAwICogdGhpcy5hKSAvIDEwMDtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSAoX2EgPSBvcHRzLmZvcm1hdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogcmdiLmZvcm1hdDtcbiAgICAgICAgdGhpcy5ncmFkaWVudFR5cGUgPSBvcHRzLmdyYWRpZW50VHlwZTtcbiAgICAgICAgLy8gRG9uJ3QgbGV0IHRoZSByYW5nZSBvZiBbMCwyNTVdIGNvbWUgYmFjayBpbiBbMCwxXS5cbiAgICAgICAgLy8gUG90ZW50aWFsbHkgbG9zZSBhIGxpdHRsZSBiaXQgb2YgcHJlY2lzaW9uIGhlcmUsIGJ1dCB3aWxsIGZpeCBpc3N1ZXMgd2hlcmVcbiAgICAgICAgLy8gLjUgZ2V0cyBpbnRlcnByZXRlZCBhcyBoYWxmIG9mIHRoZSB0b3RhbCwgaW5zdGVhZCBvZiBoYWxmIG9mIDFcbiAgICAgICAgLy8gSWYgaXQgd2FzIHN1cHBvc2VkIHRvIGJlIDEyOCwgdGhpcyB3YXMgYWxyZWFkeSB0YWtlbiBjYXJlIG9mIGJ5IGBpbnB1dFRvUmdiYFxuICAgICAgICBpZiAodGhpcy5yIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5yID0gTWF0aC5yb3VuZCh0aGlzLnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmcgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmcgPSBNYXRoLnJvdW5kKHRoaXMuZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYiA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuYiA9IE1hdGgucm91bmQodGhpcy5iKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzVmFsaWQgPSByZ2Iub2s7XG4gICAgfVxuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuaXNEYXJrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmlnaHRuZXNzKCkgPCAxMjg7XG4gICAgfTtcbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmlzTGlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0RhcmsoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlcmNlaXZlZCBicmlnaHRuZXNzIG9mIHRoZSBjb2xvciwgZnJvbSAwLTI1NS5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmdldEJyaWdodG5lc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0FFUlQjY29sb3ItY29udHJhc3RcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgcmV0dXJuIChyZ2IuciAqIDI5OSArIHJnYi5nICogNTg3ICsgcmdiLmIgKiAxMTQpIC8gMTAwMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlcmNlaXZlZCBsdW1pbmFuY2Ugb2YgYSBjb2xvciwgZnJvbSAwLTEuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5nZXRMdW1pbmFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgICAgdmFyIHJnYiA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgdmFyIFI7XG4gICAgICAgIHZhciBHO1xuICAgICAgICB2YXIgQjtcbiAgICAgICAgdmFyIFJzUkdCID0gcmdiLnIgLyAyNTU7XG4gICAgICAgIHZhciBHc1JHQiA9IHJnYi5nIC8gMjU1O1xuICAgICAgICB2YXIgQnNSR0IgPSByZ2IuYiAvIDI1NTtcbiAgICAgICAgaWYgKFJzUkdCIDw9IDAuMDM5MjgpIHtcbiAgICAgICAgICAgIFIgPSBSc1JHQiAvIDEyLjkyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1leHBvbmVudGlhdGlvbi1vcGVyYXRvclxuICAgICAgICAgICAgUiA9IE1hdGgucG93KChSc1JHQiArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHc1JHQiA8PSAwLjAzOTI4KSB7XG4gICAgICAgICAgICBHID0gR3NSR0IgLyAxMi45MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZXhwb25lbnRpYXRpb24tb3BlcmF0b3JcbiAgICAgICAgICAgIEcgPSBNYXRoLnBvdygoR3NSR0IgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQnNSR0IgPD0gMC4wMzkyOCkge1xuICAgICAgICAgICAgQiA9IEJzUkdCIC8gMTIuOTI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWV4cG9uZW50aWF0aW9uLW9wZXJhdG9yXG4gICAgICAgICAgICBCID0gTWF0aC5wb3coKEJzUkdCICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDAuMjEyNiAqIFIgKyAwLjcxNTIgKiBHICsgMC4wNzIyICogQjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFscGhhIHZhbHVlIG9mIGEgY29sb3IsIGZyb20gMC0xLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuZ2V0QWxwaGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhbHBoYSB2YWx1ZSBvbiB0aGUgY3VycmVudCBjb2xvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhbHBoYSAtIFRoZSBuZXcgYWxwaGEgdmFsdWUuIFRoZSBhY2NlcHRlZCByYW5nZSBpcyAwLTEuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5zZXRBbHBoYSA9IGZ1bmN0aW9uIChhbHBoYSkge1xuICAgICAgICB0aGlzLmEgPSBib3VuZEFscGhhKGFscGhhKTtcbiAgICAgICAgdGhpcy5yb3VuZEEgPSBNYXRoLnJvdW5kKDEwMCAqIHRoaXMuYSkgLyAxMDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0IGFzIGEgSFNWQSBvYmplY3QuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hzdiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhzdiA9IHJnYlRvSHN2KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgICAgICByZXR1cm4geyBoOiBoc3YuaCAqIDM2MCwgczogaHN2LnMsIHY6IGhzdi52LCBhOiB0aGlzLmEgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhzdmEgdmFsdWVzIGludGVycG9sYXRlZCBpbnRvIGEgc3RyaW5nIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gICAgICogXCJoc3ZhKHh4eCwgeHh4LCB4eHgsIHh4KVwiLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9Ic3ZTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoc3YgPSByZ2JUb0hzdih0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLnJvdW5kKGhzdi5oICogMzYwKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnJvdW5kKGhzdi5zICogMTAwKTtcbiAgICAgICAgdmFyIHYgPSBNYXRoLnJvdW5kKGhzdi52ICogMTAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYSA9PT0gMSA/IFwiaHN2KFwiLmNvbmNhdChoLCBcIiwgXCIpLmNvbmNhdChzLCBcIiUsIFwiKS5jb25jYXQodiwgXCIlKVwiKSA6IFwiaHN2YShcIi5jb25jYXQoaCwgXCIsIFwiKS5jb25jYXQocywgXCIlLCBcIikuY29uY2F0KHYsIFwiJSwgXCIpLmNvbmNhdCh0aGlzLnJvdW5kQSwgXCIpXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0IGFzIGEgSFNMQSBvYmplY3QuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hzbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhzbCA9IHJnYlRvSHNsKHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgICAgICByZXR1cm4geyBoOiBoc2wuaCAqIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sLCBhOiB0aGlzLmEgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGhzbGEgdmFsdWVzIGludGVycG9sYXRlZCBpbnRvIGEgc3RyaW5nIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtYXQ6XG4gICAgICogXCJoc2xhKHh4eCwgeHh4LCB4eHgsIHh4KVwiLlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9Ic2xTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoc2wgPSByZ2JUb0hzbCh0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLnJvdW5kKGhzbC5oICogMzYwKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLnJvdW5kKGhzbC5zICogMTAwKTtcbiAgICAgICAgdmFyIGwgPSBNYXRoLnJvdW5kKGhzbC5sICogMTAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYSA9PT0gMSA/IFwiaHNsKFwiLmNvbmNhdChoLCBcIiwgXCIpLmNvbmNhdChzLCBcIiUsIFwiKS5jb25jYXQobCwgXCIlKVwiKSA6IFwiaHNsYShcIi5jb25jYXQoaCwgXCIsIFwiKS5jb25jYXQocywgXCIlLCBcIikuY29uY2F0KGwsIFwiJSwgXCIpLmNvbmNhdCh0aGlzLnJvdW5kQSwgXCIpXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvci5cbiAgICAgKiBAcGFyYW0gYWxsb3czQ2hhciB3aWxsIHNob3J0ZW4gaGV4IHZhbHVlIHRvIDMgY2hhciBpZiBwb3NzaWJsZVxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9IZXggPSBmdW5jdGlvbiAoYWxsb3czQ2hhcikge1xuICAgICAgICBpZiAoYWxsb3czQ2hhciA9PT0gdm9pZCAwKSB7IGFsbG93M0NoYXIgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gcmdiVG9IZXgodGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgYWxsb3czQ2hhcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yIC13aXRoIGEgIyBhcHBlbmVkLlxuICAgICAqIEBwYXJhbSBhbGxvdzNDaGFyIHdpbGwgc2hvcnRlbiBoZXggdmFsdWUgdG8gMyBjaGFyIGlmIHBvc3NpYmxlXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hleFN0cmluZyA9IGZ1bmN0aW9uIChhbGxvdzNDaGFyKSB7XG4gICAgICAgIGlmIChhbGxvdzNDaGFyID09PSB2b2lkIDApIHsgYWxsb3czQ2hhciA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiAnIycgKyB0aGlzLnRvSGV4KGFsbG93M0NoYXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaGV4IDggdmFsdWUgb2YgdGhlIGNvbG9yLlxuICAgICAqIEBwYXJhbSBhbGxvdzRDaGFyIHdpbGwgc2hvcnRlbiBoZXggdmFsdWUgdG8gNCBjaGFyIGlmIHBvc3NpYmxlXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b0hleDggPSBmdW5jdGlvbiAoYWxsb3c0Q2hhcikge1xuICAgICAgICBpZiAoYWxsb3c0Q2hhciA9PT0gdm9pZCAwKSB7IGFsbG93NENoYXIgPSBmYWxzZTsgfVxuICAgICAgICByZXR1cm4gcmdiYVRvSGV4KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIsIHRoaXMuYSwgYWxsb3c0Q2hhcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBoZXggOCB2YWx1ZSBvZiB0aGUgY29sb3IgLXdpdGggYSAjIGFwcGVuZWQuXG4gICAgICogQHBhcmFtIGFsbG93NENoYXIgd2lsbCBzaG9ydGVuIGhleCB2YWx1ZSB0byA0IGNoYXIgaWYgcG9zc2libGVcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvSGV4OFN0cmluZyA9IGZ1bmN0aW9uIChhbGxvdzRDaGFyKSB7XG4gICAgICAgIGlmIChhbGxvdzRDaGFyID09PSB2b2lkIDApIHsgYWxsb3c0Q2hhciA9IGZhbHNlOyB9XG4gICAgICAgIHJldHVybiAnIycgKyB0aGlzLnRvSGV4OChhbGxvdzRDaGFyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhcyBhIFJHQkEgb2JqZWN0LlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9SZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByOiBNYXRoLnJvdW5kKHRoaXMuciksXG4gICAgICAgICAgICBnOiBNYXRoLnJvdW5kKHRoaXMuZyksXG4gICAgICAgICAgICBiOiBNYXRoLnJvdW5kKHRoaXMuYiksXG4gICAgICAgICAgICBhOiB0aGlzLmEsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBSR0JBIHZhbHVlcyBpbnRlcnBvbGF0ZWQgaW50byBhIHN0cmluZyB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxuICAgICAqIFwiUkdCQSh4eHgsIHh4eCwgeHh4LCB4eClcIi5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvUmdiU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IE1hdGgucm91bmQodGhpcy5yKTtcbiAgICAgICAgdmFyIGcgPSBNYXRoLnJvdW5kKHRoaXMuZyk7XG4gICAgICAgIHZhciBiID0gTWF0aC5yb3VuZCh0aGlzLmIpO1xuICAgICAgICByZXR1cm4gdGhpcy5hID09PSAxID8gXCJyZ2IoXCIuY29uY2F0KHIsIFwiLCBcIikuY29uY2F0KGcsIFwiLCBcIikuY29uY2F0KGIsIFwiKVwiKSA6IFwicmdiYShcIi5jb25jYXQociwgXCIsIFwiKS5jb25jYXQoZywgXCIsIFwiKS5jb25jYXQoYiwgXCIsIFwiKS5jb25jYXQodGhpcy5yb3VuZEEsIFwiKVwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhcyBhIFJHQkEgb2JqZWN0LlxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9QZXJjZW50YWdlUmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm10ID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIFwiXCIuY29uY2F0KE1hdGgucm91bmQoYm91bmQwMSh4LCAyNTUpICogMTAwKSwgXCIlXCIpOyB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcjogZm10KHRoaXMuciksXG4gICAgICAgICAgICBnOiBmbXQodGhpcy5nKSxcbiAgICAgICAgICAgIGI6IGZtdCh0aGlzLmIpLFxuICAgICAgICAgICAgYTogdGhpcy5hLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgUkdCQSByZWxhdGl2ZSB2YWx1ZXMgaW50ZXJwb2xhdGVkIGludG8gYSBzdHJpbmdcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnRvUGVyY2VudGFnZVJnYlN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJuZCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiBNYXRoLnJvdW5kKGJvdW5kMDEoeCwgMjU1KSAqIDEwMCk7IH07XG4gICAgICAgIHJldHVybiB0aGlzLmEgPT09IDFcbiAgICAgICAgICAgID8gXCJyZ2IoXCIuY29uY2F0KHJuZCh0aGlzLnIpLCBcIiUsIFwiKS5jb25jYXQocm5kKHRoaXMuZyksIFwiJSwgXCIpLmNvbmNhdChybmQodGhpcy5iKSwgXCIlKVwiKVxuICAgICAgICAgICAgOiBcInJnYmEoXCIuY29uY2F0KHJuZCh0aGlzLnIpLCBcIiUsIFwiKS5jb25jYXQocm5kKHRoaXMuZyksIFwiJSwgXCIpLmNvbmNhdChybmQodGhpcy5iKSwgXCIlLCBcIikuY29uY2F0KHRoaXMucm91bmRBLCBcIilcIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgJ3JlYWwnIG5hbWUgb2YgdGhlIGNvbG9yIC1pZiB0aGVyZSBpcyBvbmUuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmEgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNwYXJlbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmEgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhleCA9ICcjJyArIHJnYlRvSGV4KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIsIGZhbHNlKTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG5hbWVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XG4gICAgICAgICAgICBpZiAoaGV4ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgdmFyIGZvcm1hdFNldCA9IEJvb2xlYW4oZm9ybWF0KTtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0ICE9PSBudWxsICYmIGZvcm1hdCAhPT0gdm9pZCAwID8gZm9ybWF0IDogdGhpcy5mb3JtYXQ7XG4gICAgICAgIHZhciBmb3JtYXR0ZWRTdHJpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGhhc0FscGhhID0gdGhpcy5hIDwgMSAmJiB0aGlzLmEgPj0gMDtcbiAgICAgICAgdmFyIG5lZWRzQWxwaGFGb3JtYXQgPSAhZm9ybWF0U2V0ICYmIGhhc0FscGhhICYmIChmb3JtYXQuc3RhcnRzV2l0aCgnaGV4JykgfHwgZm9ybWF0ID09PSAnbmFtZScpO1xuICAgICAgICBpZiAobmVlZHNBbHBoYUZvcm1hdCkge1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBcInRyYW5zcGFyZW50XCIsIGFsbCBvdGhlciBub24tYWxwaGEgZm9ybWF0c1xuICAgICAgICAgICAgLy8gd2lsbCByZXR1cm4gcmdiYSB3aGVuIHRoZXJlIGlzIHRyYW5zcGFyZW5jeS5cbiAgICAgICAgICAgIGlmIChmb3JtYXQgPT09ICduYW1lJyAmJiB0aGlzLmEgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b05hbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ3JnYicpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9SZ2JTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAncHJnYicpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9QZXJjZW50YWdlUmdiU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2hleCcgfHwgZm9ybWF0ID09PSAnaGV4NicpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAnaGV4MycpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2hleDQnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSGV4OFN0cmluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSAnaGV4OCcpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9IZXg4U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvTmFtZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdoc2wnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgPSB0aGlzLnRvSHNsU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2hzdicpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyA9IHRoaXMudG9Ic3ZTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkU3RyaW5nIHx8IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICB9O1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUudG9OdW1iZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoTWF0aC5yb3VuZCh0aGlzLnIpIDw8IDE2KSArIChNYXRoLnJvdW5kKHRoaXMuZykgPDwgOCkgKyBNYXRoLnJvdW5kKHRoaXMuYik7XG4gICAgfTtcbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcih0aGlzLnRvU3RyaW5nKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTGlnaHRlbiB0aGUgY29sb3IgYSBnaXZlbiBhbW91bnQuIFByb3ZpZGluZyAxMDAgd2lsbCBhbHdheXMgcmV0dXJuIHdoaXRlLlxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB2YWxpZCBiZXR3ZWVuIDEtMTAwXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5saWdodGVuID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMTA7IH1cbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgaHNsLmwgKz0gYW1vdW50IC8gMTAwO1xuICAgICAgICBoc2wubCA9IGNsYW1wMDEoaHNsLmwpO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihoc2wpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQnJpZ2h0ZW4gdGhlIGNvbG9yIGEgZ2l2ZW4gYW1vdW50LCBmcm9tIDAgdG8gMTAwLlxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB2YWxpZCBiZXR3ZWVuIDEtMTAwXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5icmlnaHRlbiA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDEwOyB9XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHJnYi5yID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCByZ2IuciAtIE1hdGgucm91bmQoMjU1ICogLShhbW91bnQgLyAxMDApKSkpO1xuICAgICAgICByZ2IuZyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgcmdiLmcgLSBNYXRoLnJvdW5kKDI1NSAqIC0oYW1vdW50IC8gMTAwKSkpKTtcbiAgICAgICAgcmdiLmIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIHJnYi5iIC0gTWF0aC5yb3VuZCgyNTUgKiAtKGFtb3VudCAvIDEwMCkpKSk7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKHJnYik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEYXJrZW4gdGhlIGNvbG9yIGEgZ2l2ZW4gYW1vdW50LCBmcm9tIDAgdG8gMTAwLlxuICAgICAqIFByb3ZpZGluZyAxMDAgd2lsbCBhbHdheXMgcmV0dXJuIGJsYWNrLlxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB2YWxpZCBiZXR3ZWVuIDEtMTAwXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5kYXJrZW4gPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSAxMDsgfVxuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICBoc2wubCAtPSBhbW91bnQgLyAxMDA7XG4gICAgICAgIGhzbC5sID0gY2xhbXAwMShoc2wubCk7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGhzbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNaXggdGhlIGNvbG9yIHdpdGggcHVyZSB3aGl0ZSwgZnJvbSAwIHRvIDEwMC5cbiAgICAgKiBQcm92aWRpbmcgMCB3aWxsIGRvIG5vdGhpbmcsIHByb3ZpZGluZyAxMDAgd2lsbCBhbHdheXMgcmV0dXJuIHdoaXRlLlxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB2YWxpZCBiZXR3ZWVuIDEtMTAwXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50aW50ID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMTA7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWl4KCd3aGl0ZScsIGFtb3VudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNaXggdGhlIGNvbG9yIHdpdGggcHVyZSBibGFjaywgZnJvbSAwIHRvIDEwMC5cbiAgICAgKiBQcm92aWRpbmcgMCB3aWxsIGRvIG5vdGhpbmcsIHByb3ZpZGluZyAxMDAgd2lsbCBhbHdheXMgcmV0dXJuIGJsYWNrLlxuICAgICAqIEBwYXJhbSBhbW91bnQgLSB2YWxpZCBiZXR3ZWVuIDEtMTAwXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5zaGFkZSA9IGZ1bmN0aW9uIChhbW91bnQpIHtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gdm9pZCAwKSB7IGFtb3VudCA9IDEwOyB9XG4gICAgICAgIHJldHVybiB0aGlzLm1peCgnYmxhY2snLCBhbW91bnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzYXR1cmF0ZSB0aGUgY29sb3IgYSBnaXZlbiBhbW91bnQsIGZyb20gMCB0byAxMDAuXG4gICAgICogUHJvdmlkaW5nIDEwMCB3aWxsIGlzIHRoZSBzYW1lIGFzIGNhbGxpbmcgZ3JleXNjYWxlXG4gICAgICogQHBhcmFtIGFtb3VudCAtIHZhbGlkIGJldHdlZW4gMS0xMDBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLmRlc2F0dXJhdGUgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPT09IHZvaWQgMCkgeyBhbW91bnQgPSAxMDsgfVxuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICBoc2wucyAtPSBhbW91bnQgLyAxMDA7XG4gICAgICAgIGhzbC5zID0gY2xhbXAwMShoc2wucyk7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGhzbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTYXR1cmF0ZSB0aGUgY29sb3IgYSBnaXZlbiBhbW91bnQsIGZyb20gMCB0byAxMDAuXG4gICAgICogQHBhcmFtIGFtb3VudCAtIHZhbGlkIGJldHdlZW4gMS0xMDBcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnNhdHVyYXRlID0gZnVuY3Rpb24gKGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMTA7IH1cbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgaHNsLnMgKz0gYW1vdW50IC8gMTAwO1xuICAgICAgICBoc2wucyA9IGNsYW1wMDEoaHNsLnMpO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihoc2wpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcGxldGVseSBkZXNhdHVyYXRlcyBhIGNvbG9yIGludG8gZ3JleXNjYWxlLlxuICAgICAqIFNhbWUgYXMgY2FsbGluZyBgZGVzYXR1cmF0ZSgxMDApYFxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuZ3JleXNjYWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNhdHVyYXRlKDEwMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTcGluIHRha2VzIGEgcG9zaXRpdmUgb3IgbmVnYXRpdmUgYW1vdW50IHdpdGhpbiBbLTM2MCwgMzYwXSBpbmRpY2F0aW5nIHRoZSBjaGFuZ2Ugb2YgaHVlLlxuICAgICAqIFZhbHVlcyBvdXRzaWRlIG9mIHRoaXMgcmFuZ2Ugd2lsbCBiZSB3cmFwcGVkIGludG8gdGhpcyByYW5nZS5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnNwaW4gPSBmdW5jdGlvbiAoYW1vdW50KSB7XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIHZhciBodWUgPSAoaHNsLmggKyBhbW91bnQpICUgMzYwO1xuICAgICAgICBoc2wuaCA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG4gICAgICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGhzbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNaXggdGhlIGN1cnJlbnQgY29sb3IgYSBnaXZlbiBhbW91bnQgd2l0aCBhbm90aGVyIGNvbG9yLCBmcm9tIDAgdG8gMTAwLlxuICAgICAqIDAgbWVhbnMgbm8gbWl4aW5nIChyZXR1cm4gY3VycmVudCBjb2xvcikuXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5taXggPSBmdW5jdGlvbiAoY29sb3IsIGFtb3VudCkge1xuICAgICAgICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gNTA7IH1cbiAgICAgICAgdmFyIHJnYjEgPSB0aGlzLnRvUmdiKCk7XG4gICAgICAgIHZhciByZ2IyID0gbmV3IFRpbnlDb2xvcihjb2xvcikudG9SZ2IoKTtcbiAgICAgICAgdmFyIHAgPSBhbW91bnQgLyAxMDA7XG4gICAgICAgIHZhciByZ2JhID0ge1xuICAgICAgICAgICAgcjogKHJnYjIuciAtIHJnYjEucikgKiBwICsgcmdiMS5yLFxuICAgICAgICAgICAgZzogKHJnYjIuZyAtIHJnYjEuZykgKiBwICsgcmdiMS5nLFxuICAgICAgICAgICAgYjogKHJnYjIuYiAtIHJnYjEuYikgKiBwICsgcmdiMS5iLFxuICAgICAgICAgICAgYTogKHJnYjIuYSAtIHJnYjEuYSkgKiBwICsgcmdiMS5hLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihyZ2JhKTtcbiAgICB9O1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuYW5hbG9nb3VzID0gZnVuY3Rpb24gKHJlc3VsdHMsIHNsaWNlcykge1xuICAgICAgICBpZiAocmVzdWx0cyA9PT0gdm9pZCAwKSB7IHJlc3VsdHMgPSA2OyB9XG4gICAgICAgIGlmIChzbGljZXMgPT09IHZvaWQgMCkgeyBzbGljZXMgPSAzMDsgfVxuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICB2YXIgcGFydCA9IDM2MCAvIHNsaWNlcztcbiAgICAgICAgdmFyIHJldCA9IFt0aGlzXTtcbiAgICAgICAgZm9yIChoc2wuaCA9IChoc2wuaCAtICgocGFydCAqIHJlc3VsdHMpID4+IDEpICsgNzIwKSAlIDM2MDsgLS1yZXN1bHRzOykge1xuICAgICAgICAgICAgaHNsLmggPSAoaHNsLmggKyBwYXJ0KSAlIDM2MDtcbiAgICAgICAgICAgIHJldC5wdXNoKG5ldyBUaW55Q29sb3IoaHNsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2luZnVzaW9uL2pRdWVyeS14Y29sb3IvYmxvYi9tYXN0ZXIvanF1ZXJ5Lnhjb2xvci5qc1xuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuY29tcGxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcbiAgICAgICAgaHNsLmggPSAoaHNsLmggKyAxODApICUgMzYwO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcihoc2wpO1xuICAgIH07XG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS5tb25vY2hyb21hdGljID0gZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKHJlc3VsdHMgPT09IHZvaWQgMCkgeyByZXN1bHRzID0gNjsgfVxuICAgICAgICB2YXIgaHN2ID0gdGhpcy50b0hzdigpO1xuICAgICAgICB2YXIgaCA9IGhzdi5oO1xuICAgICAgICB2YXIgcyA9IGhzdi5zO1xuICAgICAgICB2YXIgdiA9IGhzdi52O1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHZhciBtb2RpZmljYXRpb24gPSAxIC8gcmVzdWx0cztcbiAgICAgICAgd2hpbGUgKHJlc3VsdHMtLSkge1xuICAgICAgICAgICAgcmVzLnB1c2gobmV3IFRpbnlDb2xvcih7IGg6IGgsIHM6IHMsIHY6IHYgfSkpO1xuICAgICAgICAgICAgdiA9ICh2ICsgbW9kaWZpY2F0aW9uKSAlIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuc3BsaXRjb21wbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuICAgICAgICB2YXIgaCA9IGhzbC5oO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIG5ldyBUaW55Q29sb3IoeyBoOiAoaCArIDcyKSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICAgICAgbmV3IFRpbnlDb2xvcih7IGg6IChoICsgMjE2KSAlIDM2MCwgczogaHNsLnMsIGw6IGhzbC5sIH0pLFxuICAgICAgICBdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBob3cgdGhlIGNvbG9yIHdvdWxkIGFwcGVhciBvbiBhIGJhY2tncm91bmRcbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLm9uQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgIHZhciBmZyA9IHRoaXMudG9SZ2IoKTtcbiAgICAgICAgdmFyIGJnID0gbmV3IFRpbnlDb2xvcihiYWNrZ3JvdW5kKS50b1JnYigpO1xuICAgICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcih7XG4gICAgICAgICAgICByOiBiZy5yICsgKGZnLnIgLSBiZy5yKSAqIGZnLmEsXG4gICAgICAgICAgICBnOiBiZy5nICsgKGZnLmcgLSBiZy5nKSAqIGZnLmEsXG4gICAgICAgICAgICBiOiBiZy5iICsgKGZnLmIgLSBiZy5iKSAqIGZnLmEsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGBwb2x5YWQoMylgXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50cmlhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWFkKDMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGBwb2x5YWQoNClgXG4gICAgICovXG4gICAgVGlueUNvbG9yLnByb3RvdHlwZS50ZXRyYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlhZCg0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBwb2x5YWQgY29sb3JzLCBsaWtlIChmb3IgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgZXRjLi4uKVxuICAgICAqIG1vbmFkLCBkeWFkLCB0cmlhZCwgdGV0cmFkLCBwZW50YWQsIGhleGFkLCBoZXB0YWQsIG9jdGFkLCBldGMuLi5cbiAgICAgKi9cbiAgICBUaW55Q29sb3IucHJvdG90eXBlLnBvbHlhZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG4gICAgICAgIHZhciBoID0gaHNsLmg7XG4gICAgICAgIHZhciByZXN1bHQgPSBbdGhpc107XG4gICAgICAgIHZhciBpbmNyZW1lbnQgPSAzNjAgLyBuO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IFRpbnlDb2xvcih7IGg6IChoICsgaSAqIGluY3JlbWVudCkgJSAzNjAsIHM6IGhzbC5zLCBsOiBoc2wubCB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGNvbXBhcmUgY29sb3IgdnMgY3VycmVudCBjb2xvclxuICAgICAqL1xuICAgIFRpbnlDb2xvci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvUmdiU3RyaW5nKCkgPT09IG5ldyBUaW55Q29sb3IoY29sb3IpLnRvUmdiU3RyaW5nKCk7XG4gICAgfTtcbiAgICByZXR1cm4gVGlueUNvbG9yO1xufSgpKTtcbmV4cG9ydCB7IFRpbnlDb2xvciB9O1xuLy8ga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGFiaWxpdHkgd2l0aCB2MVxuZXhwb3J0IGZ1bmN0aW9uIHRpbnljb2xvcihjb2xvciwgb3B0cykge1xuICAgIGlmIChjb2xvciA9PT0gdm9pZCAwKSB7IGNvbG9yID0gJyc7IH1cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxuICAgIHJldHVybiBuZXcgVGlueUNvbG9yKGNvbG9yLCBvcHRzKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///10274
`)},40351:function(__unused_webpack_module,__webpack_exports__){eval(`var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["Z"] = (unitlessKeys);
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAzNTEuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzPzI1YzIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///40351
`)},96159:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M2": function() { return /* binding */ isFragment; },
/* harmony export */   "Tm": function() { return /* binding */ cloneElement; },
/* harmony export */   "l$": function() { return /* binding */ isValidElement; },
/* harmony export */   "wm": function() { return /* binding */ replaceElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);

const {
  isValidElement
} = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));
function isFragment(child) {
  return child && isValidElement(child) && child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTYxNTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDeEI7QUFDUDtBQUNBLEVBQUUsRUFBRSx5TEFBSztBQUNGO0FBQ1AsMERBQTBELDJDQUFjO0FBQ3hFO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQWtCLGlFQUFpRTtBQUN6RztBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL3JlYWN0Tm9kZS5qcz9lMjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCB7XG4gIGlzVmFsaWRFbGVtZW50XG59ID0gUmVhY3Q7XG5leHBvcnQgZnVuY3Rpb24gaXNGcmFnbWVudChjaGlsZCkge1xuICByZXR1cm4gY2hpbGQgJiYgaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnR5cGUgPT09IFJlYWN0LkZyYWdtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQsIHJlcGxhY2VtZW50LCBwcm9wcykge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VtZW50O1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHR5cGVvZiBwcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzKGVsZW1lbnQucHJvcHMgfHwge30pIDogcHJvcHMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gcmVwbGFjZUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudCwgcHJvcHMpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///96159
`)},53124:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ ConfigConsumer; },
/* harmony export */   "E_": function() { return /* binding */ ConfigContext; },
/* harmony export */   "oR": function() { return /* binding */ defaultIconPrefixCls; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);

const defaultIconPrefixCls = 'anticon';
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? \`ant-\${suffixCls}\` : 'ant';
};
// zombieJ: \u{1F6A8} Do not pass \`defaultRenderEmpty\` here since it will cause circular dependency.
const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
const {
  Consumer: ConfigConsumer
} = ConfigContext;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTMxMjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQ3hCO0FBQ1A7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDTyxtQ0FBbUMsZ0RBQW1CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0EsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NvbmZpZy1wcm92aWRlci9jb250ZXh0LmpzP2YyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRJY29uUHJlZml4Q2xzID0gJ2FudGljb24nO1xuY29uc3QgZGVmYXVsdEdldFByZWZpeENscyA9IChzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykgPT4ge1xuICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICByZXR1cm4gc3VmZml4Q2xzID8gYGFudC0ke3N1ZmZpeENsc31gIDogJ2FudCc7XG59O1xuLy8gem9tYmllSjog8J+aqCBEbyBub3QgcGFzcyBgZGVmYXVsdFJlbmRlckVtcHR5YCBoZXJlIHNpbmNlIGl0IHdpbGwgY2F1c2UgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbmV4cG9ydCBjb25zdCBDb25maWdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAvLyBXZSBwcm92aWRlIGEgZGVmYXVsdCBmdW5jdGlvbiBmb3IgQ29udGV4dCB3aXRob3V0IHByb3ZpZGVyXG4gIGdldFByZWZpeENsczogZGVmYXVsdEdldFByZWZpeENscyxcbiAgaWNvblByZWZpeENsczogZGVmYXVsdEljb25QcmVmaXhDbHNcbn0pO1xuZXhwb3J0IGNvbnN0IHtcbiAgQ29uc3VtZXI6IENvbmZpZ0NvbnN1bWVyXG59ID0gQ29uZmlnQ29udGV4dDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///53124
`)},14747:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lx": function() { return /* binding */ genLinkStyle; },
/* harmony export */   "Qy": function() { return /* binding */ genFocusStyle; },
/* harmony export */   "Ro": function() { return /* binding */ resetIcon; },
/* harmony export */   "Wf": function() { return /* binding */ resetComponent; },
/* harmony export */   "dF": function() { return /* binding */ clearFix; },
/* harmony export */   "du": function() { return /* binding */ genCommonStyle; },
/* harmony export */   "oN": function() { return /* binding */ genFocusOutline; },
/* harmony export */   "vS": function() { return /* binding */ textEllipsis; }
/* harmony export */ });



const textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
const resetComponent = token => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: 'none',
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily
});
const resetIcon = () => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'inherit',
  fontStyle: 'normal',
  lineHeight: 0,
  textAlign: 'center',
  textTransform: 'none',
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: '-0.125em',
  textRendering: 'optimizeLegibility',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  '> *': {
    lineHeight: 1
  },
  svg: {
    display: 'inline-block'
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  '&::before': {
    display: 'table',
    content: '""'
  },
  '&::after': {
    // https://github.com/ant-design/ant-design/issues/21864
    display: 'table',
    clear: 'both',
    content: '""'
  }
});
const genLinkStyle = token => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: 'transparent',
    outline: 'none',
    cursor: 'pointer',
    transition: \`color \${token.motionDurationSlow}\`,
    '-webkit-text-decoration-skip': 'objects',
    '&:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    },
    [\`&:active,
  &:hover\`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    '&:focus': {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    '&[disabled]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }
  }
});
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = \`[class^="\${componentPrefixCls}"], [class*=" \${componentPrefixCls}"]\`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box'
      },
      [rootPrefixSelector]: {
        boxSizing: 'border-box',
        '&::before, &::after': {
          boxSizing: 'border-box'
        }
      }
    }
  };
};
const genFocusOutline = token => ({
  outline: \`\${token.lineWidthBold}px solid \${token.colorPrimaryBorder}\`,
  outlineOffset: 1,
  transition: 'outline-offset 0s, outline 0s'
});
const genFocusStyle = token => ({
  '&:focus-visible': Object.assign({}, genFocusOutline(token))
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ3NDcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUNGO0FBQ0M7QUFDeEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSix5Q0FBeUMsbUJBQW1CLGdCQUFnQixtQkFBbUI7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxjQUFjLG9CQUFvQixXQUFXLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1AscUNBQXFDO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdHlsZS9pbmRleC5qcz9kMjNmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IG9wZXJhdGlvblVuaXQgfSBmcm9tICcuL29wZXJhdGlvblVuaXQnO1xuZXhwb3J0IHsgcm91bmRlZEFycm93IH0gZnJvbSAnLi9yb3VuZGVkQXJyb3cnO1xuZXhwb3J0IHsgZ2VuUHJlc2V0Q29sb3IgfSBmcm9tICcuL3ByZXNldENvbG9yJztcbmV4cG9ydCBjb25zdCB0ZXh0RWxsaXBzaXMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xufTtcbmV4cG9ydCBjb25zdCByZXNldENvbXBvbmVudCA9IHRva2VuID0+ICh7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDAsXG4gIGNvbG9yOiB0b2tlbi5jb2xvclRleHQsXG4gIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZSxcbiAgLy8gZm9udC12YXJpYW50OiBAZm9udC12YXJpYW50LWJhc2U7XG4gIGxpbmVIZWlnaHQ6IHRva2VuLmxpbmVIZWlnaHQsXG4gIGxpc3RTdHlsZTogJ25vbmUnLFxuICAvLyBmb250LWZlYXR1cmUtc2V0dGluZ3M6IEBmb250LWZlYXR1cmUtc2V0dGluZ3MtYmFzZTtcbiAgZm9udEZhbWlseTogdG9rZW4uZm9udEZhbWlseVxufSk7XG5leHBvcnQgY29uc3QgcmVzZXRJY29uID0gKCkgPT4gKHtcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gIGxpbmVIZWlnaHQ6IDAsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgLy8gZm9yIFNWRyBpY29uLCBzZWUgaHR0cHM6Ly9ibG9nLnByb3RvdHlwci5pby9hbGlnbi1zdmctaWNvbnMtdG8tdGV4dC1hbmQtc2F5LWdvb2RieWUtdG8tZm9udC1pY29ucy1kNDRiM2Q3YjI2YjRcbiAgdmVydGljYWxBbGlnbjogJy0wLjEyNWVtJyxcbiAgdGV4dFJlbmRlcmluZzogJ29wdGltaXplTGVnaWJpbGl0eScsXG4gICctd2Via2l0LWZvbnQtc21vb3RoaW5nJzogJ2FudGlhbGlhc2VkJyxcbiAgJy1tb3otb3N4LWZvbnQtc21vb3RoaW5nJzogJ2dyYXlzY2FsZScsXG4gICc+IConOiB7XG4gICAgbGluZUhlaWdodDogMVxuICB9LFxuICBzdmc6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICB9XG59KTtcbmV4cG9ydCBjb25zdCBjbGVhckZpeCA9ICgpID0+ICh7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzIxMzAxI2lzc3VlY29tbWVudC01ODM5NTUyMjlcbiAgJyY6OmJlZm9yZSc6IHtcbiAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgIGNvbnRlbnQ6ICdcIlwiJ1xuICB9LFxuICAnJjo6YWZ0ZXInOiB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjE4NjRcbiAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgIGNsZWFyOiAnYm90aCcsXG4gICAgY29udGVudDogJ1wiXCInXG4gIH1cbn0pO1xuZXhwb3J0IGNvbnN0IGdlbkxpbmtTdHlsZSA9IHRva2VuID0+ICh7XG4gIGE6IHtcbiAgICBjb2xvcjogdG9rZW4uY29sb3JMaW5rLFxuICAgIHRleHREZWNvcmF0aW9uOiB0b2tlbi5saW5rRGVjb3JhdGlvbixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHRyYW5zaXRpb246IGBjb2xvciAke3Rva2VuLm1vdGlvbkR1cmF0aW9uU2xvd31gLFxuICAgICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwJzogJ29iamVjdHMnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yTGlua0hvdmVyXG4gICAgfSxcbiAgICAnJjphY3RpdmUnOiB7XG4gICAgICBjb2xvcjogdG9rZW4uY29sb3JMaW5rQWN0aXZlXG4gICAgfSxcbiAgICBbYCY6YWN0aXZlLFxuICAmOmhvdmVyYF06IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiB0b2tlbi5saW5rSG92ZXJEZWNvcmF0aW9uLFxuICAgICAgb3V0bGluZTogMFxuICAgIH0sXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjI1MDNcbiAgICAnJjpmb2N1cyc6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiB0b2tlbi5saW5rRm9jdXNEZWNvcmF0aW9uLFxuICAgICAgb3V0bGluZTogMFxuICAgIH0sXG4gICAgJyZbZGlzYWJsZWRdJzoge1xuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERpc2FibGVkLFxuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnXG4gICAgfVxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBnZW5Db21tb25TdHlsZSA9ICh0b2tlbiwgY29tcG9uZW50UHJlZml4Q2xzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb250RmFtaWx5LFxuICAgIGZvbnRTaXplXG4gIH0gPSB0b2tlbjtcbiAgY29uc3Qgcm9vdFByZWZpeFNlbGVjdG9yID0gYFtjbGFzc149XCIke2NvbXBvbmVudFByZWZpeENsc31cIl0sIFtjbGFzcyo9XCIgJHtjb21wb25lbnRQcmVmaXhDbHN9XCJdYDtcbiAgcmV0dXJuIHtcbiAgICBbcm9vdFByZWZpeFNlbGVjdG9yXToge1xuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGZvbnRTaXplLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAnJjo6YmVmb3JlLCAmOjphZnRlcic6IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICAgIH0sXG4gICAgICBbcm9vdFByZWZpeFNlbGVjdG9yXToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgJyY6OmJlZm9yZSwgJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgY29uc3QgZ2VuRm9jdXNPdXRsaW5lID0gdG9rZW4gPT4gKHtcbiAgb3V0bGluZTogYCR7dG9rZW4ubGluZVdpZHRoQm9sZH1weCBzb2xpZCAke3Rva2VuLmNvbG9yUHJpbWFyeUJvcmRlcn1gLFxuICBvdXRsaW5lT2Zmc2V0OiAxLFxuICB0cmFuc2l0aW9uOiAnb3V0bGluZS1vZmZzZXQgMHMsIG91dGxpbmUgMHMnXG59KTtcbmV4cG9ydCBjb25zdCBnZW5Gb2N1c1N0eWxlID0gdG9rZW4gPT4gKHtcbiAgJyY6Zm9jdXMtdmlzaWJsZSc6IE9iamVjdC5hc3NpZ24oe30sIGdlbkZvY3VzT3V0bGluZSh0b2tlbikpXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///14747
`)},64049:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Mj": function() { return /* binding */ DesignTokenContext; },
  "u_": function() { return /* binding */ defaultConfig; },
  "dQ": function() { return /* binding */ useToken; }
});

// UNUSED EXPORTS: PresetColors, genComponentStyleHook, mergeToken, statistic, statisticToken, useStyleRegister

// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 21 modules
var es = __webpack_require__(24599);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/version/index.js + 1 modules
var version = __webpack_require__(67159);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/default/index.js + 5 modules
var themes_default = __webpack_require__(67164);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(2790);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/util/getAlphaColor.js

function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new dist_module/* TinyColor */.C(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new dist_module/* TinyColor */.C(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new dist_module/* TinyColor */.C({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  // fallback
  /* istanbul ignore next */
  return new dist_module/* TinyColor */.C({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
/* harmony default export */ var util_getAlphaColor = (getAlphaColor);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/util/alias.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



/**
 * Seed (designer) > Derivative (designer) > Alias (developer).
 *
 * Merge seed & derivative & override token and generate alias token for developer.
 */
function formatToken(derivativeToken) {
  const {
      override
    } = derivativeToken,
    restToken = __rest(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(seed/* default */.Z).forEach(token => {
    delete overrideTokens[token];
  });
  const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  // Generate alias token
  const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: util_getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: util_getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: util_getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: util_getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: 'none',
    linkHoverDecoration: 'none',
    linkFocusDecoration: 'none',
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: \`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    \`,
    boxShadowSecondary: \`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    \`,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
    boxShadowCard: \`
      0 1px 2px -2px \${new dist_module/* TinyColor */.C('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 \${new dist_module/* TinyColor */.C('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px \${new dist_module/* TinyColor */.C('rgba(0, 0, 0, 0.09)').toRgbString()}
    \`,
    boxShadowDrawerRight: \`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    \`,
    boxShadowDrawerLeft: \`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    \`,
    boxShadowDrawerUp: \`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    \`,
    boxShadowDrawerDown: \`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    \`,
    boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
  }), overrideTokens);
  return aliasToken;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/internal.js









const defaultTheme = (0,es/* createTheme */.jG)(themes_default/* default */.Z);

// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
const defaultConfig = {
  token: seed/* default */.Z,
  hashed: true
};
const DesignTokenContext = /*#__PURE__*/react.createContext(defaultConfig);
// ================================== Hook ==================================
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    components
  } = react.useContext(DesignTokenContext);
  const salt = \`\${version/* default */.Z}-\${hashed || ''}\`;
  const mergedTheme = theme || defaultTheme;
  const [token, hashId] = (0,es/* useCacheToken */.fp)(mergedTheme, [seed/* default */.Z, rootDesignToken], {
    salt,
    override: Object.assign({
      override: rootDesignToken
    }, components),
    formatToken: formatToken
  });
  return [mergedTheme, token, hashed ? hashId : ''];
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGVfbW9kdWxlcy9hbnRkL2VzL3RoZW1lL3V0aWwvZ2V0QWxwaGFDb2xvci5qcz9jNWEyIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RoZW1lL3V0aWwvYWxpYXMuanM/YjhjZiIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aGVtZS9pbnRlcm5hbC5qcz9kZWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbnlDb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XG5mdW5jdGlvbiBpc1N0YWJsZUNvbG9yKGNvbG9yKSB7XG4gIHJldHVybiBjb2xvciA+PSAwICYmIGNvbG9yIDw9IDI1NTtcbn1cbmZ1bmN0aW9uIGdldEFscGhhQ29sb3IoZnJvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yKSB7XG4gIGNvbnN0IHtcbiAgICByOiBmUixcbiAgICBnOiBmRyxcbiAgICBiOiBmQixcbiAgICBhOiBvcmlnaW5BbHBoYVxuICB9ID0gbmV3IFRpbnlDb2xvcihmcm9udENvbG9yKS50b1JnYigpO1xuICBpZiAob3JpZ2luQWxwaGEgPCAxKSB7XG4gICAgcmV0dXJuIGZyb250Q29sb3I7XG4gIH1cbiAgY29uc3Qge1xuICAgIHI6IGJSLFxuICAgIGc6IGJHLFxuICAgIGI6IGJCXG4gIH0gPSBuZXcgVGlueUNvbG9yKGJhY2tncm91bmRDb2xvcikudG9SZ2IoKTtcbiAgZm9yIChsZXQgZkEgPSAwLjAxOyBmQSA8PSAxOyBmQSArPSAwLjAxKSB7XG4gICAgY29uc3QgciA9IE1hdGgucm91bmQoKGZSIC0gYlIgKiAoMSAtIGZBKSkgLyBmQSk7XG4gICAgY29uc3QgZyA9IE1hdGgucm91bmQoKGZHIC0gYkcgKiAoMSAtIGZBKSkgLyBmQSk7XG4gICAgY29uc3QgYiA9IE1hdGgucm91bmQoKGZCIC0gYkIgKiAoMSAtIGZBKSkgLyBmQSk7XG4gICAgaWYgKGlzU3RhYmxlQ29sb3IocikgJiYgaXNTdGFibGVDb2xvcihnKSAmJiBpc1N0YWJsZUNvbG9yKGIpKSB7XG4gICAgICByZXR1cm4gbmV3IFRpbnlDb2xvcih7XG4gICAgICAgIHIsXG4gICAgICAgIGcsXG4gICAgICAgIGIsXG4gICAgICAgIGE6IE1hdGgucm91bmQoZkEgKiAxMDApIC8gMTAwXG4gICAgICB9KS50b1JnYlN0cmluZygpO1xuICAgIH1cbiAgfVxuICAvLyBmYWxsYmFja1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gbmV3IFRpbnlDb2xvcih7XG4gICAgcjogZlIsXG4gICAgZzogZkcsXG4gICAgYjogZkIsXG4gICAgYTogMVxuICB9KS50b1JnYlN0cmluZygpO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxwaGFDb2xvcjsiLCJ2YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgVGlueUNvbG9yIH0gZnJvbSAnQGN0cmwvdGlueWNvbG9yJztcbmltcG9ydCBnZXRBbHBoYUNvbG9yIGZyb20gJy4vZ2V0QWxwaGFDb2xvcic7XG5pbXBvcnQgc2VlZFRva2VuIGZyb20gJy4uL3RoZW1lcy9zZWVkJztcbi8qKlxuICogU2VlZCAoZGVzaWduZXIpID4gRGVyaXZhdGl2ZSAoZGVzaWduZXIpID4gQWxpYXMgKGRldmVsb3BlcikuXG4gKlxuICogTWVyZ2Ugc2VlZCAmIGRlcml2YXRpdmUgJiBvdmVycmlkZSB0b2tlbiBhbmQgZ2VuZXJhdGUgYWxpYXMgdG9rZW4gZm9yIGRldmVsb3Blci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0VG9rZW4oZGVyaXZhdGl2ZVRva2VuKSB7XG4gIGNvbnN0IHtcbiAgICAgIG92ZXJyaWRlXG4gICAgfSA9IGRlcml2YXRpdmVUb2tlbixcbiAgICByZXN0VG9rZW4gPSBfX3Jlc3QoZGVyaXZhdGl2ZVRva2VuLCBbXCJvdmVycmlkZVwiXSk7XG4gIGNvbnN0IG92ZXJyaWRlVG9rZW5zID0gT2JqZWN0LmFzc2lnbih7fSwgb3ZlcnJpZGUpO1xuICBPYmplY3Qua2V5cyhzZWVkVG9rZW4pLmZvckVhY2godG9rZW4gPT4ge1xuICAgIGRlbGV0ZSBvdmVycmlkZVRva2Vuc1t0b2tlbl07XG4gIH0pO1xuICBjb25zdCBtZXJnZWRUb2tlbiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzdFRva2VuKSwgb3ZlcnJpZGVUb2tlbnMpO1xuICBjb25zdCBzY3JlZW5YUyA9IDQ4MDtcbiAgY29uc3Qgc2NyZWVuU00gPSA1NzY7XG4gIGNvbnN0IHNjcmVlbk1EID0gNzY4O1xuICBjb25zdCBzY3JlZW5MRyA9IDk5MjtcbiAgY29uc3Qgc2NyZWVuWEwgPSAxMjAwO1xuICBjb25zdCBzY3JlZW5YWEwgPSAxNjAwO1xuICAvLyBHZW5lcmF0ZSBhbGlhcyB0b2tlblxuICBjb25zdCBhbGlhc1Rva2VuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFRva2VuKSwge1xuICAgIGNvbG9yTGluazogbWVyZ2VkVG9rZW4uY29sb3JJbmZvVGV4dCxcbiAgICBjb2xvckxpbmtIb3ZlcjogbWVyZ2VkVG9rZW4uY29sb3JJbmZvSG92ZXIsXG4gICAgY29sb3JMaW5rQWN0aXZlOiBtZXJnZWRUb2tlbi5jb2xvckluZm9BY3RpdmUsXG4gICAgLy8gPT09PT09PT09PT09PT0gQmFja2dyb3VuZCA9PT09PT09PT09PT09PSAvL1xuICAgIGNvbG9yRmlsbENvbnRlbnQ6IG1lcmdlZFRva2VuLmNvbG9yRmlsbFNlY29uZGFyeSxcbiAgICBjb2xvckZpbGxDb250ZW50SG92ZXI6IG1lcmdlZFRva2VuLmNvbG9yRmlsbCxcbiAgICBjb2xvckZpbGxBbHRlcjogbWVyZ2VkVG9rZW4uY29sb3JGaWxsUXVhdGVybmFyeSxcbiAgICBjb2xvckJnQ29udGFpbmVyRGlzYWJsZWQ6IG1lcmdlZFRva2VuLmNvbG9yRmlsbFRlcnRpYXJ5LFxuICAgIC8vID09PT09PT09PT09PT09IFNwbGl0ID09PT09PT09PT09PT09IC8vXG4gICAgY29sb3JCb3JkZXJCZzogbWVyZ2VkVG9rZW4uY29sb3JCZ0NvbnRhaW5lcixcbiAgICBjb2xvclNwbGl0OiBnZXRBbHBoYUNvbG9yKG1lcmdlZFRva2VuLmNvbG9yQm9yZGVyU2Vjb25kYXJ5LCBtZXJnZWRUb2tlbi5jb2xvckJnQ29udGFpbmVyKSxcbiAgICAvLyA9PT09PT09PT09PT09PSBUZXh0ID09PT09PT09PT09PT09IC8vXG4gICAgY29sb3JUZXh0UGxhY2Vob2xkZXI6IG1lcmdlZFRva2VuLmNvbG9yVGV4dFF1YXRlcm5hcnksXG4gICAgY29sb3JUZXh0RGlzYWJsZWQ6IG1lcmdlZFRva2VuLmNvbG9yVGV4dFF1YXRlcm5hcnksXG4gICAgY29sb3JUZXh0SGVhZGluZzogbWVyZ2VkVG9rZW4uY29sb3JUZXh0LFxuICAgIGNvbG9yVGV4dExhYmVsOiBtZXJnZWRUb2tlbi5jb2xvclRleHRTZWNvbmRhcnksXG4gICAgY29sb3JUZXh0RGVzY3JpcHRpb246IG1lcmdlZFRva2VuLmNvbG9yVGV4dFRlcnRpYXJ5LFxuICAgIGNvbG9yVGV4dExpZ2h0U29saWQ6IG1lcmdlZFRva2VuLmNvbG9yV2hpdGUsXG4gICAgY29sb3JIaWdobGlnaHQ6IG1lcmdlZFRva2VuLmNvbG9yRXJyb3IsXG4gICAgY29sb3JCZ1RleHRIb3ZlcjogbWVyZ2VkVG9rZW4uY29sb3JGaWxsU2Vjb25kYXJ5LFxuICAgIGNvbG9yQmdUZXh0QWN0aXZlOiBtZXJnZWRUb2tlbi5jb2xvckZpbGwsXG4gICAgY29sb3JJY29uOiBtZXJnZWRUb2tlbi5jb2xvclRleHRUZXJ0aWFyeSxcbiAgICBjb2xvckljb25Ib3ZlcjogbWVyZ2VkVG9rZW4uY29sb3JUZXh0LFxuICAgIGNvbG9yRXJyb3JPdXRsaW5lOiBnZXRBbHBoYUNvbG9yKG1lcmdlZFRva2VuLmNvbG9yRXJyb3JCZywgbWVyZ2VkVG9rZW4uY29sb3JCZ0NvbnRhaW5lciksXG4gICAgY29sb3JXYXJuaW5nT3V0bGluZTogZ2V0QWxwaGFDb2xvcihtZXJnZWRUb2tlbi5jb2xvcldhcm5pbmdCZywgbWVyZ2VkVG9rZW4uY29sb3JCZ0NvbnRhaW5lciksXG4gICAgLy8gRm9udFxuICAgIGZvbnRTaXplSWNvbjogbWVyZ2VkVG9rZW4uZm9udFNpemVTTSxcbiAgICAvLyBDb250cm9sXG4gICAgbGluZVdpZHRoOiBtZXJnZWRUb2tlbi5saW5lV2lkdGgsXG4gICAgY29udHJvbE91dGxpbmVXaWR0aDogbWVyZ2VkVG9rZW4ubGluZVdpZHRoICogMixcbiAgICAvLyBDaGVja2JveCBzaXplIGFuZCBleHBhbmQgaWNvbiBzaXplXG4gICAgY29udHJvbEludGVyYWN0aXZlU2l6ZTogbWVyZ2VkVG9rZW4uY29udHJvbEhlaWdodCAvIDIsXG4gICAgY29udHJvbEl0ZW1CZ0hvdmVyOiBtZXJnZWRUb2tlbi5jb2xvckZpbGxUZXJ0aWFyeSxcbiAgICBjb250cm9sSXRlbUJnQWN0aXZlOiBtZXJnZWRUb2tlbi5jb2xvclByaW1hcnlCZyxcbiAgICBjb250cm9sSXRlbUJnQWN0aXZlSG92ZXI6IG1lcmdlZFRva2VuLmNvbG9yUHJpbWFyeUJnSG92ZXIsXG4gICAgY29udHJvbEl0ZW1CZ0FjdGl2ZURpc2FibGVkOiBtZXJnZWRUb2tlbi5jb2xvckZpbGwsXG4gICAgY29udHJvbFRtcE91dGxpbmU6IG1lcmdlZFRva2VuLmNvbG9yRmlsbFF1YXRlcm5hcnksXG4gICAgY29udHJvbE91dGxpbmU6IGdldEFscGhhQ29sb3IobWVyZ2VkVG9rZW4uY29sb3JQcmltYXJ5QmcsIG1lcmdlZFRva2VuLmNvbG9yQmdDb250YWluZXIpLFxuICAgIGxpbmVUeXBlOiBtZXJnZWRUb2tlbi5saW5lVHlwZSxcbiAgICBib3JkZXJSYWRpdXM6IG1lcmdlZFRva2VuLmJvcmRlclJhZGl1cyxcbiAgICBib3JkZXJSYWRpdXNYUzogbWVyZ2VkVG9rZW4uYm9yZGVyUmFkaXVzWFMsXG4gICAgYm9yZGVyUmFkaXVzU006IG1lcmdlZFRva2VuLmJvcmRlclJhZGl1c1NNLFxuICAgIGJvcmRlclJhZGl1c0xHOiBtZXJnZWRUb2tlbi5ib3JkZXJSYWRpdXNMRyxcbiAgICBmb250V2VpZ2h0U3Ryb25nOiA2MDAsXG4gICAgb3BhY2l0eUxvYWRpbmc6IDAuNjUsXG4gICAgbGlua0RlY29yYXRpb246ICdub25lJyxcbiAgICBsaW5rSG92ZXJEZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgbGlua0ZvY3VzRGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbnRyb2xQYWRkaW5nSG9yaXpvbnRhbDogMTIsXG4gICAgY29udHJvbFBhZGRpbmdIb3Jpem9udGFsU006IDgsXG4gICAgcGFkZGluZ1hYUzogbWVyZ2VkVG9rZW4uc2l6ZVhYUyxcbiAgICBwYWRkaW5nWFM6IG1lcmdlZFRva2VuLnNpemVYUyxcbiAgICBwYWRkaW5nU006IG1lcmdlZFRva2VuLnNpemVTTSxcbiAgICBwYWRkaW5nOiBtZXJnZWRUb2tlbi5zaXplLFxuICAgIHBhZGRpbmdNRDogbWVyZ2VkVG9rZW4uc2l6ZU1ELFxuICAgIHBhZGRpbmdMRzogbWVyZ2VkVG9rZW4uc2l6ZUxHLFxuICAgIHBhZGRpbmdYTDogbWVyZ2VkVG9rZW4uc2l6ZVhMLFxuICAgIHBhZGRpbmdDb250ZW50SG9yaXpvbnRhbExHOiBtZXJnZWRUb2tlbi5zaXplTEcsXG4gICAgcGFkZGluZ0NvbnRlbnRWZXJ0aWNhbExHOiBtZXJnZWRUb2tlbi5zaXplTVMsXG4gICAgcGFkZGluZ0NvbnRlbnRIb3Jpem9udGFsOiBtZXJnZWRUb2tlbi5zaXplTVMsXG4gICAgcGFkZGluZ0NvbnRlbnRWZXJ0aWNhbDogbWVyZ2VkVG9rZW4uc2l6ZVNNLFxuICAgIHBhZGRpbmdDb250ZW50SG9yaXpvbnRhbFNNOiBtZXJnZWRUb2tlbi5zaXplLFxuICAgIHBhZGRpbmdDb250ZW50VmVydGljYWxTTTogbWVyZ2VkVG9rZW4uc2l6ZVhTLFxuICAgIG1hcmdpblhYUzogbWVyZ2VkVG9rZW4uc2l6ZVhYUyxcbiAgICBtYXJnaW5YUzogbWVyZ2VkVG9rZW4uc2l6ZVhTLFxuICAgIG1hcmdpblNNOiBtZXJnZWRUb2tlbi5zaXplU00sXG4gICAgbWFyZ2luOiBtZXJnZWRUb2tlbi5zaXplLFxuICAgIG1hcmdpbk1EOiBtZXJnZWRUb2tlbi5zaXplTUQsXG4gICAgbWFyZ2luTEc6IG1lcmdlZFRva2VuLnNpemVMRyxcbiAgICBtYXJnaW5YTDogbWVyZ2VkVG9rZW4uc2l6ZVhMLFxuICAgIG1hcmdpblhYTDogbWVyZ2VkVG9rZW4uc2l6ZVhYTCxcbiAgICBib3hTaGFkb3c6IGBcbiAgICAgIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMyksXG4gICAgICAwIDFweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDIpLFxuICAgICAgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjAyKVxuICAgIGAsXG4gICAgYm94U2hhZG93U2Vjb25kYXJ5OiBgXG4gICAgICAwIDZweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgICAgIDAgM3B4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAwIDlweCAyOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpXG4gICAgYCxcbiAgICBzY3JlZW5YUyxcbiAgICBzY3JlZW5YU01pbjogc2NyZWVuWFMsXG4gICAgc2NyZWVuWFNNYXg6IHNjcmVlblNNIC0gMSxcbiAgICBzY3JlZW5TTSxcbiAgICBzY3JlZW5TTU1pbjogc2NyZWVuU00sXG4gICAgc2NyZWVuU01NYXg6IHNjcmVlbk1EIC0gMSxcbiAgICBzY3JlZW5NRCxcbiAgICBzY3JlZW5NRE1pbjogc2NyZWVuTUQsXG4gICAgc2NyZWVuTURNYXg6IHNjcmVlbkxHIC0gMSxcbiAgICBzY3JlZW5MRyxcbiAgICBzY3JlZW5MR01pbjogc2NyZWVuTEcsXG4gICAgc2NyZWVuTEdNYXg6IHNjcmVlblhMIC0gMSxcbiAgICBzY3JlZW5YTCxcbiAgICBzY3JlZW5YTE1pbjogc2NyZWVuWEwsXG4gICAgc2NyZWVuWExNYXg6IHNjcmVlblhYTCAtIDEsXG4gICAgc2NyZWVuWFhMLFxuICAgIHNjcmVlblhYTE1pbjogc2NyZWVuWFhMLFxuICAgIC8vIEZJWE1FOiBjb21wb25lbnQgYm94LXNoYWRvdywgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICBib3hTaGFkb3dQb3BvdmVyQXJyb3c6ICczcHggM3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgIGJveFNoYWRvd0NhcmQ6IGBcbiAgICAgIDAgMXB4IDJweCAtMnB4ICR7bmV3IFRpbnlDb2xvcigncmdiYSgwLCAwLCAwLCAwLjE2KScpLnRvUmdiU3RyaW5nKCl9LFxuICAgICAgMCAzcHggNnB4IDAgJHtuZXcgVGlueUNvbG9yKCdyZ2JhKDAsIDAsIDAsIDAuMTIpJykudG9SZ2JTdHJpbmcoKX0sXG4gICAgICAwIDVweCAxMnB4IDRweCAke25ldyBUaW55Q29sb3IoJ3JnYmEoMCwgMCwgMCwgMC4wOSknKS50b1JnYlN0cmluZygpfVxuICAgIGAsXG4gICAgYm94U2hhZG93RHJhd2VyUmlnaHQ6IGBcbiAgICAgIC02cHggMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgICAgIC0zcHggMCA2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgLTlweCAwIDI4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcbiAgICBgLFxuICAgIGJveFNoYWRvd0RyYXdlckxlZnQ6IGBcbiAgICAgIDZweCAwIDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxuICAgICAgM3B4IDAgNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgIDlweCAwIDI4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcbiAgICBgLFxuICAgIGJveFNoYWRvd0RyYXdlclVwOiBgXG4gICAgICAwIDZweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgICAgIDAgM3B4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAwIDlweCAyOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpXG4gICAgYCxcbiAgICBib3hTaGFkb3dEcmF3ZXJEb3duOiBgXG4gICAgICAwIC02cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCksXG4gICAgICAwIC0zcHggNnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgIDAgLTlweCAyOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpXG4gICAgYCxcbiAgICBib3hTaGFkb3dUYWJzT3ZlcmZsb3dMZWZ0OiAnaW5zZXQgMTBweCAwIDhweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCknLFxuICAgIGJveFNoYWRvd1RhYnNPdmVyZmxvd1JpZ2h0OiAnaW5zZXQgLTEwcHggMCA4cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgICBib3hTaGFkb3dUYWJzT3ZlcmZsb3dUb3A6ICdpbnNldCAwIDEwcHggOHB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjA4KScsXG4gICAgYm94U2hhZG93VGFic092ZXJmbG93Qm90dG9tOiAnaW5zZXQgMCAtMTBweCA4cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMDgpJ1xuICB9KSwgb3ZlcnJpZGVUb2tlbnMpO1xuICByZXR1cm4gYWxpYXNUb2tlbjtcbn0iLCJpbXBvcnQgeyBjcmVhdGVUaGVtZSwgdXNlQ2FjaGVUb2tlbiwgdXNlU3R5bGVSZWdpc3RlciB9IGZyb20gJ0BhbnQtZGVzaWduL2Nzc2luanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB2ZXJzaW9uIGZyb20gJy4uL3ZlcnNpb24nO1xuaW1wb3J0IHsgUHJlc2V0Q29sb3JzIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IGRlZmF1bHREZXJpdmF0aXZlIGZyb20gJy4vdGhlbWVzL2RlZmF1bHQnO1xuaW1wb3J0IGRlZmF1bHRTZWVkVG9rZW4gZnJvbSAnLi90aGVtZXMvc2VlZCc7XG5pbXBvcnQgZm9ybWF0VG9rZW4gZnJvbSAnLi91dGlsL2FsaWFzJztcbmltcG9ydCBnZW5Db21wb25lbnRTdHlsZUhvb2sgZnJvbSAnLi91dGlsL2dlbkNvbXBvbmVudFN0eWxlSG9vayc7XG5pbXBvcnQgc3RhdGlzdGljVG9rZW4sIHsgbWVyZ2UgYXMgbWVyZ2VUb2tlbiwgc3RhdGlzdGljIH0gZnJvbSAnLi91dGlsL3N0YXRpc3RpYyc7XG5jb25zdCBkZWZhdWx0VGhlbWUgPSBjcmVhdGVUaGVtZShkZWZhdWx0RGVyaXZhdGl2ZSk7XG5leHBvcnQge1xuLy8gY29sb3JzXG5QcmVzZXRDb2xvcnMsXG4vLyBTdGF0aXN0aWNcbnN0YXRpc3RpYywgc3RhdGlzdGljVG9rZW4sIG1lcmdlVG9rZW4sXG4vLyBob29rc1xudXNlU3R5bGVSZWdpc3RlciwgZ2VuQ29tcG9uZW50U3R5bGVIb29rIH07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb250ZXh0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVG8gZW5zdXJlIHNuYXBzaG90IHN0YWJsZS4gV2UgZGlzYWJsZSBoYXNoZWQgaW4gdGVzdCBlbnYuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgdG9rZW46IGRlZmF1bHRTZWVkVG9rZW4sXG4gIGhhc2hlZDogdHJ1ZVxufTtcbmV4cG9ydCBjb25zdCBEZXNpZ25Ub2tlbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0Q29uZmlnKTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSG9vayA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gdXNlVG9rZW4oKSB7XG4gIGNvbnN0IHtcbiAgICB0b2tlbjogcm9vdERlc2lnblRva2VuLFxuICAgIGhhc2hlZCxcbiAgICB0aGVtZSxcbiAgICBjb21wb25lbnRzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KERlc2lnblRva2VuQ29udGV4dCk7XG4gIGNvbnN0IHNhbHQgPSBgJHt2ZXJzaW9ufS0ke2hhc2hlZCB8fCAnJ31gO1xuICBjb25zdCBtZXJnZWRUaGVtZSA9IHRoZW1lIHx8IGRlZmF1bHRUaGVtZTtcbiAgY29uc3QgW3Rva2VuLCBoYXNoSWRdID0gdXNlQ2FjaGVUb2tlbihtZXJnZWRUaGVtZSwgW2RlZmF1bHRTZWVkVG9rZW4sIHJvb3REZXNpZ25Ub2tlbl0sIHtcbiAgICBzYWx0LFxuICAgIG92ZXJyaWRlOiBPYmplY3QuYXNzaWduKHtcbiAgICAgIG92ZXJyaWRlOiByb290RGVzaWduVG9rZW5cbiAgICB9LCBjb21wb25lbnRzKSxcbiAgICBmb3JtYXRUb2tlblxuICB9KTtcbiAgcmV0dXJuIFttZXJnZWRUaGVtZSwgdG9rZW4sIGhhc2hlZCA/IGhhc2hJZCA6ICcnXTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///64049
`)},67164:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ derivative; }
});

// EXTERNAL MODULE: ./node_modules/@ant-design/colors/es/index.js + 1 modules
var es = __webpack_require__(16397);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/shared/genControlHeight.js
var genControlHeight = __webpack_require__(372);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/shared/genSizeMapToken.js
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3) // 4
  };
}
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(2790);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/shared/genColorMapToken.js
var genColorMapToken = __webpack_require__(57);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/shared/genRadius.js
const genRadius = radiusBase => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  // radiusLG
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  // radiusSM
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  // radiusXS
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  // radiusOuter
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
/* harmony default export */ var shared_genRadius = (genRadius);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/shared/genCommonMapToken.js

function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return Object.assign({
    // motion
    motionDurationFast: \`\${(motionBase + motionUnit).toFixed(1)}s\`,
    motionDurationMid: \`\${(motionBase + motionUnit * 2).toFixed(1)}s\`,
    motionDurationSlow: \`\${(motionBase + motionUnit * 3).toFixed(1)}s\`,
    // line
    lineWidthBold: lineWidth + 1
  }, shared_genRadius(borderRadius));
}
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(10274);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/default/colorAlgorithm.js

const getAlphaColor = (baseColor, alpha) => new dist_module/* TinyColor */.C(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new dist_module/* TinyColor */.C(baseColor);
  return instance.darken(brightness).toHexString();
};
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/default/colors.js


const generateColorPalettes = baseColor => {
  const colors = (0,es.generate)(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};

const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || '#fff';
  const colorTextBase = textBaseColor || '#000';
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
// EXTERNAL MODULE: ./node_modules/antd/es/theme/themes/shared/genFontMapToken.js + 1 modules
var genFontMapToken = __webpack_require__(98378);
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/default/index.js








function derivative(token) {
  const colorPalettes = Object.keys(seed/* defaultPresetColors */.M).map(colorKey => {
    const colors = (0,es.generate)(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[\`\${colorKey}-\${i + 1}\`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = Object.assign(Object.assign({}, prev), cur);
    return prev;
  }, {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), (0,genColorMapToken/* default */.Z)(token, {
    generateColorPalettes: generateColorPalettes,
    generateNeutralColorPalettes: generateNeutralColorPalettes
  })), (0,genFontMapToken/* default */.Z)(token.fontSize)), genSizeMapToken(token)), (0,genControlHeight/* default */.Z)(token)), genCommonMapToken(token));
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjcxNjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBZSxTQUFTLEU7O0FDN0NZO0FBQ3JCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsMkJBQTJCLHFDQUFxQztBQUNoRSwwQkFBMEIseUNBQXlDO0FBQ25FLDJCQUEyQix5Q0FBeUM7QUFDcEU7QUFDQTtBQUNBLEdBQUcsRUFBRSxnQkFBUztBQUNkLEM7Ozs7QUNoQjRDO0FBQ3JDLGdEQUFnRCw0QkFBUztBQUN6RDtBQUNQLHVCQUF1Qiw0QkFBUztBQUNoQztBQUNBLEU7O0FDTDhDO0FBQ2tCO0FBQ3pEO0FBQ1AsaUJBQWlCLGVBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLHdCQUF3QixhQUFhO0FBQ3JDLHVCQUF1QixhQUFhO0FBQ3BDLHlCQUF5QixhQUFhO0FBQ3RDLGVBQWUsYUFBYTtBQUM1Qix3QkFBd0IsYUFBYTtBQUNyQyx1QkFBdUIsYUFBYTtBQUNwQyx5QkFBeUIsYUFBYTtBQUN0QyxtQkFBbUIsYUFBYTtBQUNoQyxzQkFBc0IsYUFBYTtBQUNuQyxxQkFBcUIsYUFBYTtBQUNsQyxzQkFBc0IsYUFBYTtBQUNuQyxpQkFBaUIsYUFBYTtBQUM5QiwwQkFBMEIsYUFBYTtBQUN2QztBQUNBLEU7Ozs7QUMxQzhDO0FBQ1k7QUFDRjtBQUNWO0FBQ1k7QUFDRTtBQUNtQjtBQUN2QjtBQUN6QztBQUNmLG9DQUFvQywrQkFBbUI7QUFDdkQsbUJBQW1CLGVBQVE7QUFDM0I7QUFDQSxjQUFjLFNBQVMsR0FBRyxNQUFNO0FBQ2hDO0FBQ0EsS0FBSyxJQUFJO0FBQ1QsR0FBRztBQUNILHlDQUF5QztBQUN6QztBQUNBLEdBQUcsSUFBSTtBQUNQLDZHQUE2RywwQkFBMEIsbUNBQWdCO0FBQ3ZKLHlCQUF5QjtBQUN6QixnQ0FBZ0M7QUFDaEMsR0FBRyxJQUFJLGtDQUFlLG1CQUFtQixlQUFlLFVBQVUsbUNBQWdCLFVBQVUsaUJBQWlCO0FBQzdHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGhlbWUvdGhlbWVzL3NoYXJlZC9nZW5TaXplTWFwVG9rZW4uanM/MGFhMCIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aGVtZS90aGVtZXMvc2hhcmVkL2dlblJhZGl1cy5qcz8zOWQwIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RoZW1lL3RoZW1lcy9zaGFyZWQvZ2VuQ29tbW9uTWFwVG9rZW4uanM/OTI4NSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aGVtZS90aGVtZXMvZGVmYXVsdC9jb2xvckFsZ29yaXRobS5qcz8xMzY3Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RoZW1lL3RoZW1lcy9kZWZhdWx0L2NvbG9ycy5qcz9lODRhIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RoZW1lL3RoZW1lcy9kZWZhdWx0L2luZGV4LmpzPzExZGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuU2l6ZU1hcFRva2VuKHRva2VuKSB7XG4gIGNvbnN0IHtcbiAgICBzaXplVW5pdCxcbiAgICBzaXplU3RlcFxuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgc2l6ZVhYTDogc2l6ZVVuaXQgKiAoc2l6ZVN0ZXAgKyA4KSxcbiAgICBzaXplWEw6IHNpemVVbml0ICogKHNpemVTdGVwICsgNCksXG4gICAgc2l6ZUxHOiBzaXplVW5pdCAqIChzaXplU3RlcCArIDIpLFxuICAgIHNpemVNRDogc2l6ZVVuaXQgKiAoc2l6ZVN0ZXAgKyAxKSxcbiAgICBzaXplTVM6IHNpemVVbml0ICogc2l6ZVN0ZXAsXG4gICAgc2l6ZTogc2l6ZVVuaXQgKiBzaXplU3RlcCxcbiAgICBzaXplU006IHNpemVVbml0ICogKHNpemVTdGVwIC0gMSksXG4gICAgc2l6ZVhTOiBzaXplVW5pdCAqIChzaXplU3RlcCAtIDIpLFxuICAgIHNpemVYWFM6IHNpemVVbml0ICogKHNpemVTdGVwIC0gMykgLy8gNFxuICB9O1xufSIsImNvbnN0IGdlblJhZGl1cyA9IHJhZGl1c0Jhc2UgPT4ge1xuICBsZXQgcmFkaXVzTEcgPSByYWRpdXNCYXNlO1xuICBsZXQgcmFkaXVzU00gPSByYWRpdXNCYXNlO1xuICBsZXQgcmFkaXVzWFMgPSByYWRpdXNCYXNlO1xuICBsZXQgcmFkaXVzT3V0ZXIgPSByYWRpdXNCYXNlO1xuICAvLyByYWRpdXNMR1xuICBpZiAocmFkaXVzQmFzZSA8IDYgJiYgcmFkaXVzQmFzZSA+PSA1KSB7XG4gICAgcmFkaXVzTEcgPSByYWRpdXNCYXNlICsgMTtcbiAgfSBlbHNlIGlmIChyYWRpdXNCYXNlIDwgMTYgJiYgcmFkaXVzQmFzZSA+PSA2KSB7XG4gICAgcmFkaXVzTEcgPSByYWRpdXNCYXNlICsgMjtcbiAgfSBlbHNlIGlmIChyYWRpdXNCYXNlID49IDE2KSB7XG4gICAgcmFkaXVzTEcgPSAxNjtcbiAgfVxuICAvLyByYWRpdXNTTVxuICBpZiAocmFkaXVzQmFzZSA8IDcgJiYgcmFkaXVzQmFzZSA+PSA1KSB7XG4gICAgcmFkaXVzU00gPSA0O1xuICB9IGVsc2UgaWYgKHJhZGl1c0Jhc2UgPCA4ICYmIHJhZGl1c0Jhc2UgPj0gNykge1xuICAgIHJhZGl1c1NNID0gNTtcbiAgfSBlbHNlIGlmIChyYWRpdXNCYXNlIDwgMTQgJiYgcmFkaXVzQmFzZSA+PSA4KSB7XG4gICAgcmFkaXVzU00gPSA2O1xuICB9IGVsc2UgaWYgKHJhZGl1c0Jhc2UgPCAxNiAmJiByYWRpdXNCYXNlID49IDE0KSB7XG4gICAgcmFkaXVzU00gPSA3O1xuICB9IGVsc2UgaWYgKHJhZGl1c0Jhc2UgPj0gMTYpIHtcbiAgICByYWRpdXNTTSA9IDg7XG4gIH1cbiAgLy8gcmFkaXVzWFNcbiAgaWYgKHJhZGl1c0Jhc2UgPCA2ICYmIHJhZGl1c0Jhc2UgPj0gMikge1xuICAgIHJhZGl1c1hTID0gMTtcbiAgfSBlbHNlIGlmIChyYWRpdXNCYXNlID49IDYpIHtcbiAgICByYWRpdXNYUyA9IDI7XG4gIH1cbiAgLy8gcmFkaXVzT3V0ZXJcbiAgaWYgKHJhZGl1c0Jhc2UgPiA0ICYmIHJhZGl1c0Jhc2UgPCA4KSB7XG4gICAgcmFkaXVzT3V0ZXIgPSA0O1xuICB9IGVsc2UgaWYgKHJhZGl1c0Jhc2UgPj0gOCkge1xuICAgIHJhZGl1c091dGVyID0gNjtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJvcmRlclJhZGl1czogcmFkaXVzQmFzZSA+IDE2ID8gMTYgOiByYWRpdXNCYXNlLFxuICAgIGJvcmRlclJhZGl1c1hTOiByYWRpdXNYUyxcbiAgICBib3JkZXJSYWRpdXNTTTogcmFkaXVzU00sXG4gICAgYm9yZGVyUmFkaXVzTEc6IHJhZGl1c0xHLFxuICAgIGJvcmRlclJhZGl1c091dGVyOiByYWRpdXNPdXRlclxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlblJhZGl1czsiLCJpbXBvcnQgZ2VuUmFkaXVzIGZyb20gJy4vZ2VuUmFkaXVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbkNvbW1vbk1hcFRva2VuKHRva2VuKSB7XG4gIGNvbnN0IHtcbiAgICBtb3Rpb25Vbml0LFxuICAgIG1vdGlvbkJhc2UsXG4gICAgYm9yZGVyUmFkaXVzLFxuICAgIGxpbmVXaWR0aFxuICB9ID0gdG9rZW47XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAvLyBtb3Rpb25cbiAgICBtb3Rpb25EdXJhdGlvbkZhc3Q6IGAkeyhtb3Rpb25CYXNlICsgbW90aW9uVW5pdCkudG9GaXhlZCgxKX1zYCxcbiAgICBtb3Rpb25EdXJhdGlvbk1pZDogYCR7KG1vdGlvbkJhc2UgKyBtb3Rpb25Vbml0ICogMikudG9GaXhlZCgxKX1zYCxcbiAgICBtb3Rpb25EdXJhdGlvblNsb3c6IGAkeyhtb3Rpb25CYXNlICsgbW90aW9uVW5pdCAqIDMpLnRvRml4ZWQoMSl9c2AsXG4gICAgLy8gbGluZVxuICAgIGxpbmVXaWR0aEJvbGQ6IGxpbmVXaWR0aCArIDFcbiAgfSwgZ2VuUmFkaXVzKGJvcmRlclJhZGl1cykpO1xufSIsImltcG9ydCB7IFRpbnlDb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XG5leHBvcnQgY29uc3QgZ2V0QWxwaGFDb2xvciA9IChiYXNlQ29sb3IsIGFscGhhKSA9PiBuZXcgVGlueUNvbG9yKGJhc2VDb2xvcikuc2V0QWxwaGEoYWxwaGEpLnRvUmdiU3RyaW5nKCk7XG5leHBvcnQgY29uc3QgZ2V0U29saWRDb2xvciA9IChiYXNlQ29sb3IsIGJyaWdodG5lc3MpID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGlueUNvbG9yKGJhc2VDb2xvcik7XG4gIHJldHVybiBpbnN0YW5jZS5kYXJrZW4oYnJpZ2h0bmVzcykudG9IZXhTdHJpbmcoKTtcbn07IiwiaW1wb3J0IHsgZ2VuZXJhdGUgfSBmcm9tICdAYW50LWRlc2lnbi9jb2xvcnMnO1xuaW1wb3J0IHsgZ2V0QWxwaGFDb2xvciwgZ2V0U29saWRDb2xvciB9IGZyb20gJy4vY29sb3JBbGdvcml0aG0nO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ29sb3JQYWxldHRlcyA9IGJhc2VDb2xvciA9PiB7XG4gIGNvbnN0IGNvbG9ycyA9IGdlbmVyYXRlKGJhc2VDb2xvcik7XG4gIHJldHVybiB7XG4gICAgMTogY29sb3JzWzBdLFxuICAgIDI6IGNvbG9yc1sxXSxcbiAgICAzOiBjb2xvcnNbMl0sXG4gICAgNDogY29sb3JzWzNdLFxuICAgIDU6IGNvbG9yc1s0XSxcbiAgICA2OiBjb2xvcnNbNV0sXG4gICAgNzogY29sb3JzWzZdLFxuICAgIDg6IGNvbG9yc1s0XSxcbiAgICA5OiBjb2xvcnNbNV0sXG4gICAgMTA6IGNvbG9yc1s2XVxuICAgIC8vIDg6IGNvbG9yc1s3XSxcbiAgICAvLyA5OiBjb2xvcnNbOF0sXG4gICAgLy8gMTA6IGNvbG9yc1s5XSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5ldXRyYWxDb2xvclBhbGV0dGVzID0gKGJnQmFzZUNvbG9yLCB0ZXh0QmFzZUNvbG9yKSA9PiB7XG4gIGNvbnN0IGNvbG9yQmdCYXNlID0gYmdCYXNlQ29sb3IgfHwgJyNmZmYnO1xuICBjb25zdCBjb2xvclRleHRCYXNlID0gdGV4dEJhc2VDb2xvciB8fCAnIzAwMCc7XG4gIHJldHVybiB7XG4gICAgY29sb3JCZ0Jhc2UsXG4gICAgY29sb3JUZXh0QmFzZSxcbiAgICBjb2xvclRleHQ6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC44OCksXG4gICAgY29sb3JUZXh0U2Vjb25kYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuNjUpLFxuICAgIGNvbG9yVGV4dFRlcnRpYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuNDUpLFxuICAgIGNvbG9yVGV4dFF1YXRlcm5hcnk6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC4yNSksXG4gICAgY29sb3JGaWxsOiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuMTUpLFxuICAgIGNvbG9yRmlsbFNlY29uZGFyeTogZ2V0QWxwaGFDb2xvcihjb2xvclRleHRCYXNlLCAwLjA2KSxcbiAgICBjb2xvckZpbGxUZXJ0aWFyeTogZ2V0QWxwaGFDb2xvcihjb2xvclRleHRCYXNlLCAwLjA0KSxcbiAgICBjb2xvckZpbGxRdWF0ZXJuYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuMDIpLFxuICAgIGNvbG9yQmdMYXlvdXQ6IGdldFNvbGlkQ29sb3IoY29sb3JCZ0Jhc2UsIDQpLFxuICAgIGNvbG9yQmdDb250YWluZXI6IGdldFNvbGlkQ29sb3IoY29sb3JCZ0Jhc2UsIDApLFxuICAgIGNvbG9yQmdFbGV2YXRlZDogZ2V0U29saWRDb2xvcihjb2xvckJnQmFzZSwgMCksXG4gICAgY29sb3JCZ1Nwb3RsaWdodDogZ2V0QWxwaGFDb2xvcihjb2xvclRleHRCYXNlLCAwLjg1KSxcbiAgICBjb2xvckJvcmRlcjogZ2V0U29saWRDb2xvcihjb2xvckJnQmFzZSwgMTUpLFxuICAgIGNvbG9yQm9yZGVyU2Vjb25kYXJ5OiBnZXRTb2xpZENvbG9yKGNvbG9yQmdCYXNlLCA2KVxuICB9O1xufTsiLCJpbXBvcnQgeyBnZW5lcmF0ZSB9IGZyb20gJ0BhbnQtZGVzaWduL2NvbG9ycyc7XG5pbXBvcnQgZ2VuQ29udHJvbEhlaWdodCBmcm9tICcuLi9zaGFyZWQvZ2VuQ29udHJvbEhlaWdodCc7XG5pbXBvcnQgZ2VuU2l6ZU1hcFRva2VuIGZyb20gJy4uL3NoYXJlZC9nZW5TaXplTWFwVG9rZW4nO1xuaW1wb3J0IHsgZGVmYXVsdFByZXNldENvbG9ycyB9IGZyb20gJy4uL3NlZWQnO1xuaW1wb3J0IGdlbkNvbG9yTWFwVG9rZW4gZnJvbSAnLi4vc2hhcmVkL2dlbkNvbG9yTWFwVG9rZW4nO1xuaW1wb3J0IGdlbkNvbW1vbk1hcFRva2VuIGZyb20gJy4uL3NoYXJlZC9nZW5Db21tb25NYXBUb2tlbic7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvbG9yUGFsZXR0ZXMsIGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXMgfSBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgZ2VuRm9udE1hcFRva2VuIGZyb20gJy4uL3NoYXJlZC9nZW5Gb250TWFwVG9rZW4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVyaXZhdGl2ZSh0b2tlbikge1xuICBjb25zdCBjb2xvclBhbGV0dGVzID0gT2JqZWN0LmtleXMoZGVmYXVsdFByZXNldENvbG9ycykubWFwKGNvbG9yS2V5ID0+IHtcbiAgICBjb25zdCBjb2xvcnMgPSBnZW5lcmF0ZSh0b2tlbltjb2xvcktleV0pO1xuICAgIHJldHVybiBuZXcgQXJyYXkoMTApLmZpbGwoMSkucmVkdWNlKChwcmV2LCBfLCBpKSA9PiB7XG4gICAgICBwcmV2W2Ake2NvbG9yS2V5fS0ke2kgKyAxfWBdID0gY29sb3JzW2ldO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICB9KS5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgIHByZXYgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXYpLCBjdXIpO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIGNvbG9yUGFsZXR0ZXMpLCBnZW5Db2xvck1hcFRva2VuKHRva2VuLCB7XG4gICAgZ2VuZXJhdGVDb2xvclBhbGV0dGVzLFxuICAgIGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXNcbiAgfSkpLCBnZW5Gb250TWFwVG9rZW4odG9rZW4uZm9udFNpemUpKSwgZ2VuU2l6ZU1hcFRva2VuKHRva2VuKSksIGdlbkNvbnRyb2xIZWlnaHQodG9rZW4pKSwgZ2VuQ29tbW9uTWFwVG9rZW4odG9rZW4pKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///67164
`)},2790:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ defaultPresetColors; }
/* harmony export */ });
const defaultPresetColors = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911'
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorTextBase: '',
  colorBgBase: '',
  // Font
  fontFamily: \`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'\`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: 'solid',
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
/* harmony default export */ __webpack_exports__["Z"] = (seedToken);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc5MC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHlEQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aGVtZS90aGVtZXMvc2VlZC5qcz9lYjI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkZWZhdWx0UHJlc2V0Q29sb3JzID0ge1xuICBibHVlOiAnIzE2NzdmZicsXG4gIHB1cnBsZTogJyM3MjJFRDEnLFxuICBjeWFuOiAnIzEzQzJDMicsXG4gIGdyZWVuOiAnIzUyQzQxQScsXG4gIG1hZ2VudGE6ICcjRUIyRjk2JyxcbiAgcGluazogJyNlYjJmOTYnLFxuICByZWQ6ICcjRjUyMjJEJyxcbiAgb3JhbmdlOiAnI0ZBOEMxNicsXG4gIHllbGxvdzogJyNGQURCMTQnLFxuICB2b2xjYW5vOiAnI0ZBNTQxQycsXG4gIGdlZWtibHVlOiAnIzJGNTRFQicsXG4gIGdvbGQ6ICcjRkFBRDE0JyxcbiAgbGltZTogJyNBMEQ5MTEnXG59O1xuY29uc3Qgc2VlZFRva2VuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJlc2V0Q29sb3JzKSwge1xuICAvLyBDb2xvclxuICBjb2xvclByaW1hcnk6ICcjMTY3N2ZmJyxcbiAgY29sb3JTdWNjZXNzOiAnIzUyYzQxYScsXG4gIGNvbG9yV2FybmluZzogJyNmYWFkMTQnLFxuICBjb2xvckVycm9yOiAnI2ZmNGQ0ZicsXG4gIGNvbG9ySW5mbzogJyMxNjc3ZmYnLFxuICBjb2xvclRleHRCYXNlOiAnJyxcbiAgY29sb3JCZ0Jhc2U6ICcnLFxuICAvLyBGb250XG4gIGZvbnRGYW1pbHk6IGAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsXG4nTm90byBTYW5zJywgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsXG4nTm90byBDb2xvciBFbW9qaSdgLFxuICBmb250U2l6ZTogMTQsXG4gIC8vIExpbmVcbiAgbGluZVdpZHRoOiAxLFxuICBsaW5lVHlwZTogJ3NvbGlkJyxcbiAgLy8gTW90aW9uXG4gIG1vdGlvblVuaXQ6IDAuMSxcbiAgbW90aW9uQmFzZTogMCxcbiAgbW90aW9uRWFzZU91dENpcmM6ICdjdWJpYy1iZXppZXIoMC4wOCwgMC44MiwgMC4xNywgMSknLFxuICBtb3Rpb25FYXNlSW5PdXRDaXJjOiAnY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpJyxcbiAgbW90aW9uRWFzZU91dDogJ2N1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpJyxcbiAgbW90aW9uRWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJyxcbiAgbW90aW9uRWFzZU91dEJhY2s6ICdjdWJpYy1iZXppZXIoMC4xMiwgMC40LCAwLjI5LCAxLjQ2KScsXG4gIG1vdGlvbkVhc2VJbkJhY2s6ICdjdWJpYy1iZXppZXIoMC43MSwgLTAuNDYsIDAuODgsIDAuNiknLFxuICBtb3Rpb25FYXNlSW5RdWludDogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJyxcbiAgbW90aW9uRWFzZU91dFF1aW50OiAnY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJyxcbiAgLy8gUmFkaXVzXG4gIGJvcmRlclJhZGl1czogNixcbiAgLy8gU2l6ZVxuICBzaXplVW5pdDogNCxcbiAgc2l6ZVN0ZXA6IDQsXG4gIHNpemVQb3B1cEFycm93OiAxNixcbiAgLy8gQ29udHJvbCBCYXNlXG4gIGNvbnRyb2xIZWlnaHQ6IDMyLFxuICAvLyB6SW5kZXhcbiAgekluZGV4QmFzZTogMCxcbiAgekluZGV4UG9wdXBCYXNlOiAxMDAwLFxuICAvLyBJbWFnZVxuICBvcGFjaXR5SW1hZ2U6IDEsXG4gIC8vIFdpcmVmcmFtZVxuICB3aXJlZnJhbWU6IGZhbHNlXG59KTtcbmV4cG9ydCBkZWZhdWx0IHNlZWRUb2tlbjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///2790
`)},57:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ genColorMapToken; }
/* harmony export */ });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10274);

function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes,
    generateNeutralColorPalettes
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes(colorPrimaryBase);
  const successColors = generateColorPalettes(colorSuccessBase);
  const warningColors = generateColorPalettes(colorWarningBase);
  const errorColors = generateColorPalettes(colorErrorBase);
  const infoColors = generateColorPalettes(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__/* .TinyColor */ .C('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE0QztBQUM3QjtBQUNmO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtEQUFTO0FBQzlCO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGhlbWUvdGhlbWVzL3NoYXJlZC9nZW5Db2xvck1hcFRva2VuLmpzPzI5NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlueUNvbG9yIH0gZnJvbSAnQGN0cmwvdGlueWNvbG9yJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbkNvbG9yTWFwVG9rZW4oc2VlZCwgX3JlZikge1xuICBsZXQge1xuICAgIGdlbmVyYXRlQ29sb3JQYWxldHRlcyxcbiAgICBnZW5lcmF0ZU5ldXRyYWxDb2xvclBhbGV0dGVzXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgY29sb3JTdWNjZXNzOiBjb2xvclN1Y2Nlc3NCYXNlLFxuICAgIGNvbG9yV2FybmluZzogY29sb3JXYXJuaW5nQmFzZSxcbiAgICBjb2xvckVycm9yOiBjb2xvckVycm9yQmFzZSxcbiAgICBjb2xvckluZm86IGNvbG9ySW5mb0Jhc2UsXG4gICAgY29sb3JQcmltYXJ5OiBjb2xvclByaW1hcnlCYXNlLFxuICAgIGNvbG9yQmdCYXNlLFxuICAgIGNvbG9yVGV4dEJhc2VcbiAgfSA9IHNlZWQ7XG4gIGNvbnN0IHByaW1hcnlDb2xvcnMgPSBnZW5lcmF0ZUNvbG9yUGFsZXR0ZXMoY29sb3JQcmltYXJ5QmFzZSk7XG4gIGNvbnN0IHN1Y2Nlc3NDb2xvcnMgPSBnZW5lcmF0ZUNvbG9yUGFsZXR0ZXMoY29sb3JTdWNjZXNzQmFzZSk7XG4gIGNvbnN0IHdhcm5pbmdDb2xvcnMgPSBnZW5lcmF0ZUNvbG9yUGFsZXR0ZXMoY29sb3JXYXJuaW5nQmFzZSk7XG4gIGNvbnN0IGVycm9yQ29sb3JzID0gZ2VuZXJhdGVDb2xvclBhbGV0dGVzKGNvbG9yRXJyb3JCYXNlKTtcbiAgY29uc3QgaW5mb0NvbG9ycyA9IGdlbmVyYXRlQ29sb3JQYWxldHRlcyhjb2xvckluZm9CYXNlKTtcbiAgY29uc3QgbmV1dHJhbENvbG9ycyA9IGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXMoY29sb3JCZ0Jhc2UsIGNvbG9yVGV4dEJhc2UpO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBuZXV0cmFsQ29sb3JzKSwge1xuICAgIGNvbG9yUHJpbWFyeUJnOiBwcmltYXJ5Q29sb3JzWzFdLFxuICAgIGNvbG9yUHJpbWFyeUJnSG92ZXI6IHByaW1hcnlDb2xvcnNbMl0sXG4gICAgY29sb3JQcmltYXJ5Qm9yZGVyOiBwcmltYXJ5Q29sb3JzWzNdLFxuICAgIGNvbG9yUHJpbWFyeUJvcmRlckhvdmVyOiBwcmltYXJ5Q29sb3JzWzRdLFxuICAgIGNvbG9yUHJpbWFyeUhvdmVyOiBwcmltYXJ5Q29sb3JzWzVdLFxuICAgIGNvbG9yUHJpbWFyeTogcHJpbWFyeUNvbG9yc1s2XSxcbiAgICBjb2xvclByaW1hcnlBY3RpdmU6IHByaW1hcnlDb2xvcnNbN10sXG4gICAgY29sb3JQcmltYXJ5VGV4dEhvdmVyOiBwcmltYXJ5Q29sb3JzWzhdLFxuICAgIGNvbG9yUHJpbWFyeVRleHQ6IHByaW1hcnlDb2xvcnNbOV0sXG4gICAgY29sb3JQcmltYXJ5VGV4dEFjdGl2ZTogcHJpbWFyeUNvbG9yc1sxMF0sXG4gICAgY29sb3JTdWNjZXNzQmc6IHN1Y2Nlc3NDb2xvcnNbMV0sXG4gICAgY29sb3JTdWNjZXNzQmdIb3Zlcjogc3VjY2Vzc0NvbG9yc1syXSxcbiAgICBjb2xvclN1Y2Nlc3NCb3JkZXI6IHN1Y2Nlc3NDb2xvcnNbM10sXG4gICAgY29sb3JTdWNjZXNzQm9yZGVySG92ZXI6IHN1Y2Nlc3NDb2xvcnNbNF0sXG4gICAgY29sb3JTdWNjZXNzSG92ZXI6IHN1Y2Nlc3NDb2xvcnNbNF0sXG4gICAgY29sb3JTdWNjZXNzOiBzdWNjZXNzQ29sb3JzWzZdLFxuICAgIGNvbG9yU3VjY2Vzc0FjdGl2ZTogc3VjY2Vzc0NvbG9yc1s3XSxcbiAgICBjb2xvclN1Y2Nlc3NUZXh0SG92ZXI6IHN1Y2Nlc3NDb2xvcnNbOF0sXG4gICAgY29sb3JTdWNjZXNzVGV4dDogc3VjY2Vzc0NvbG9yc1s5XSxcbiAgICBjb2xvclN1Y2Nlc3NUZXh0QWN0aXZlOiBzdWNjZXNzQ29sb3JzWzEwXSxcbiAgICBjb2xvckVycm9yQmc6IGVycm9yQ29sb3JzWzFdLFxuICAgIGNvbG9yRXJyb3JCZ0hvdmVyOiBlcnJvckNvbG9yc1syXSxcbiAgICBjb2xvckVycm9yQm9yZGVyOiBlcnJvckNvbG9yc1szXSxcbiAgICBjb2xvckVycm9yQm9yZGVySG92ZXI6IGVycm9yQ29sb3JzWzRdLFxuICAgIGNvbG9yRXJyb3JIb3ZlcjogZXJyb3JDb2xvcnNbNV0sXG4gICAgY29sb3JFcnJvcjogZXJyb3JDb2xvcnNbNl0sXG4gICAgY29sb3JFcnJvckFjdGl2ZTogZXJyb3JDb2xvcnNbN10sXG4gICAgY29sb3JFcnJvclRleHRIb3ZlcjogZXJyb3JDb2xvcnNbOF0sXG4gICAgY29sb3JFcnJvclRleHQ6IGVycm9yQ29sb3JzWzldLFxuICAgIGNvbG9yRXJyb3JUZXh0QWN0aXZlOiBlcnJvckNvbG9yc1sxMF0sXG4gICAgY29sb3JXYXJuaW5nQmc6IHdhcm5pbmdDb2xvcnNbMV0sXG4gICAgY29sb3JXYXJuaW5nQmdIb3Zlcjogd2FybmluZ0NvbG9yc1syXSxcbiAgICBjb2xvcldhcm5pbmdCb3JkZXI6IHdhcm5pbmdDb2xvcnNbM10sXG4gICAgY29sb3JXYXJuaW5nQm9yZGVySG92ZXI6IHdhcm5pbmdDb2xvcnNbNF0sXG4gICAgY29sb3JXYXJuaW5nSG92ZXI6IHdhcm5pbmdDb2xvcnNbNF0sXG4gICAgY29sb3JXYXJuaW5nOiB3YXJuaW5nQ29sb3JzWzZdLFxuICAgIGNvbG9yV2FybmluZ0FjdGl2ZTogd2FybmluZ0NvbG9yc1s3XSxcbiAgICBjb2xvcldhcm5pbmdUZXh0SG92ZXI6IHdhcm5pbmdDb2xvcnNbOF0sXG4gICAgY29sb3JXYXJuaW5nVGV4dDogd2FybmluZ0NvbG9yc1s5XSxcbiAgICBjb2xvcldhcm5pbmdUZXh0QWN0aXZlOiB3YXJuaW5nQ29sb3JzWzEwXSxcbiAgICBjb2xvckluZm9CZzogaW5mb0NvbG9yc1sxXSxcbiAgICBjb2xvckluZm9CZ0hvdmVyOiBpbmZvQ29sb3JzWzJdLFxuICAgIGNvbG9ySW5mb0JvcmRlcjogaW5mb0NvbG9yc1szXSxcbiAgICBjb2xvckluZm9Cb3JkZXJIb3ZlcjogaW5mb0NvbG9yc1s0XSxcbiAgICBjb2xvckluZm9Ib3ZlcjogaW5mb0NvbG9yc1s0XSxcbiAgICBjb2xvckluZm86IGluZm9Db2xvcnNbNl0sXG4gICAgY29sb3JJbmZvQWN0aXZlOiBpbmZvQ29sb3JzWzddLFxuICAgIGNvbG9ySW5mb1RleHRIb3ZlcjogaW5mb0NvbG9yc1s4XSxcbiAgICBjb2xvckluZm9UZXh0OiBpbmZvQ29sb3JzWzldLFxuICAgIGNvbG9ySW5mb1RleHRBY3RpdmU6IGluZm9Db2xvcnNbMTBdLFxuICAgIGNvbG9yQmdNYXNrOiBuZXcgVGlueUNvbG9yKCcjMDAwJykuc2V0QWxwaGEoMC40NSkudG9SZ2JTdHJpbmcoKSxcbiAgICBjb2xvcldoaXRlOiAnI2ZmZidcbiAgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///57
`)},372:function(__unused_webpack_module,__webpack_exports__){eval(`const genControlHeight = token => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
/* harmony default export */ __webpack_exports__["Z"] = (genControlHeight);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBZSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aGVtZS90aGVtZXMvc2hhcmVkL2dlbkNvbnRyb2xIZWlnaHQuanM/OTI2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW5Db250cm9sSGVpZ2h0ID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29udHJvbEhlaWdodFxuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgY29udHJvbEhlaWdodFNNOiBjb250cm9sSGVpZ2h0ICogMC43NSxcbiAgICBjb250cm9sSGVpZ2h0WFM6IGNvbnRyb2xIZWlnaHQgKiAwLjUsXG4gICAgY29udHJvbEhlaWdodExHOiBjb250cm9sSGVpZ2h0ICogMS4yNVxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdlbkNvbnRyb2xIZWlnaHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///372
`)},98378:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ shared_genFontMapToken; }
});

;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/shared/genFontSizes.js
// https://zhuanlan.zhihu.com/p/32746810
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    // Convert to even
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map(size => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
;// CONCATENATED MODULE: ./node_modules/antd/es/theme/themes/shared/genFontMapToken.js

const genFontMapToken = fontSize => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map(pair => pair.size);
  const lineHeights = fontSizePairs.map(pair => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
/* harmony default export */ var shared_genFontMapToken = (genFontMapToken);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTgzNzguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7QUNqQjBDO0FBQzFDO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBZSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGhlbWUvdGhlbWVzL3NoYXJlZC9nZW5Gb250U2l6ZXMuanM/YzA2YyIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aGVtZS90aGVtZXMvc2hhcmVkL2dlbkZvbnRNYXBUb2tlbi5qcz9jMjIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vemh1YW5sYW4uemhpaHUuY29tL3AvMzI3NDY4MTBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZvbnRTaXplcyhiYXNlKSB7XG4gIGNvbnN0IGZvbnRTaXplcyA9IG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaSA9IGluZGV4IC0gMTtcbiAgICBjb25zdCBiYXNlU2l6ZSA9IGJhc2UgKiBNYXRoLnBvdygyLjcxODI4LCBpIC8gNSk7XG4gICAgY29uc3QgaW50U2l6ZSA9IGluZGV4ID4gMSA/IE1hdGguZmxvb3IoYmFzZVNpemUpIDogTWF0aC5jZWlsKGJhc2VTaXplKTtcbiAgICAvLyBDb252ZXJ0IHRvIGV2ZW5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihpbnRTaXplIC8gMikgKiAyO1xuICB9KTtcbiAgZm9udFNpemVzWzFdID0gYmFzZTtcbiAgcmV0dXJuIGZvbnRTaXplcy5tYXAoc2l6ZSA9PiB7XG4gICAgY29uc3QgaGVpZ2h0ID0gc2l6ZSArIDg7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpemUsXG4gICAgICBsaW5lSGVpZ2h0OiBoZWlnaHQgLyBzaXplXG4gICAgfTtcbiAgfSk7XG59IiwiaW1wb3J0IGdlbkZvbnRTaXplcyBmcm9tICcuL2dlbkZvbnRTaXplcyc7XG5jb25zdCBnZW5Gb250TWFwVG9rZW4gPSBmb250U2l6ZSA9PiB7XG4gIGNvbnN0IGZvbnRTaXplUGFpcnMgPSBnZW5Gb250U2l6ZXMoZm9udFNpemUpO1xuICBjb25zdCBmb250U2l6ZXMgPSBmb250U2l6ZVBhaXJzLm1hcChwYWlyID0+IHBhaXIuc2l6ZSk7XG4gIGNvbnN0IGxpbmVIZWlnaHRzID0gZm9udFNpemVQYWlycy5tYXAocGFpciA9PiBwYWlyLmxpbmVIZWlnaHQpO1xuICByZXR1cm4ge1xuICAgIGZvbnRTaXplU006IGZvbnRTaXplc1swXSxcbiAgICBmb250U2l6ZTogZm9udFNpemVzWzFdLFxuICAgIGZvbnRTaXplTEc6IGZvbnRTaXplc1syXSxcbiAgICBmb250U2l6ZVhMOiBmb250U2l6ZXNbM10sXG4gICAgZm9udFNpemVIZWFkaW5nMTogZm9udFNpemVzWzZdLFxuICAgIGZvbnRTaXplSGVhZGluZzI6IGZvbnRTaXplc1s1XSxcbiAgICBmb250U2l6ZUhlYWRpbmczOiBmb250U2l6ZXNbNF0sXG4gICAgZm9udFNpemVIZWFkaW5nNDogZm9udFNpemVzWzNdLFxuICAgIGZvbnRTaXplSGVhZGluZzU6IGZvbnRTaXplc1syXSxcbiAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0c1sxXSxcbiAgICBsaW5lSGVpZ2h0TEc6IGxpbmVIZWlnaHRzWzJdLFxuICAgIGxpbmVIZWlnaHRTTTogbGluZUhlaWdodHNbMF0sXG4gICAgbGluZUhlaWdodEhlYWRpbmcxOiBsaW5lSGVpZ2h0c1s2XSxcbiAgICBsaW5lSGVpZ2h0SGVhZGluZzI6IGxpbmVIZWlnaHRzWzVdLFxuICAgIGxpbmVIZWlnaHRIZWFkaW5nMzogbGluZUhlaWdodHNbNF0sXG4gICAgbGluZUhlaWdodEhlYWRpbmc0OiBsaW5lSGVpZ2h0c1szXSxcbiAgICBsaW5lSGVpZ2h0SGVhZGluZzU6IGxpbmVIZWlnaHRzWzJdXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuRm9udE1hcFRva2VuOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///98378
`)},67968:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ genComponentStyleHook; }
/* harmony export */ });
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24599);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62435);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14747);
/* harmony import */ var _config_provider_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53124);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64049);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45503);





function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return prefixCls => {
    const [theme, token, hashId] = (0,_internal__WEBPACK_IMPORTED_MODULE_2__/* .useToken */ .dQ)();
    const {
      getPrefixCls,
      iconPrefixCls
    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_config_provider_context__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
    const rootPrefixCls = getPrefixCls();
    // Generate style for all a tags in antd component.
    (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .useStyleRegister */ .xy)({
      theme,
      token,
      hashId,
      path: ['Shared', rootPrefixCls]
    }, () => [{
      // Link
      '&': (0,_style__WEBPACK_IMPORTED_MODULE_4__/* .genLinkStyle */ .Lx)(token)
    }]);
    return [(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .useStyleRegister */ .xy)({
      theme,
      token,
      hashId,
      path: [component, prefixCls, iconPrefixCls]
    }, () => {
      const {
        token: proxyToken,
        flush
      } = (0,_internal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(token);
      const defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = Object.assign(Object.assign({}, defaultComponentToken), token[component]);
      const componentCls = \`.\${prefixCls}\`;
      const mergedToken = (0,_internal__WEBPACK_IMPORTED_MODULE_5__/* .merge */ .TS)(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: \`.\${iconPrefixCls}\`,
        antCls: \`.\${rootPrefixCls}\`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls,
        overrideComponentToken: token[component]
      });
      flush(component, mergedComponentToken);
      return [(0,_style__WEBPACK_IMPORTED_MODULE_4__/* .genCommonStyle */ .du)(token, prefixCls), styleInterpolation];
    }), hashId];
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjc5NjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVEO0FBQ3BCO0FBQ3dCO0FBQ0c7QUFDSztBQUNwRDtBQUNmO0FBQ0EsbUNBQW1DLDZEQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSxpREFBVSxDQUFDLDZFQUFhO0FBQ2hDO0FBQ0E7QUFDQSxJQUFJLCtFQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsOERBQVk7QUFDdkIsS0FBSztBQUNMLFlBQVksK0VBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsRUFBRSwrREFBYztBQUN4QjtBQUNBLGlFQUFpRTtBQUNqRSwrQkFBK0IsVUFBVTtBQUN6QywwQkFBMEIsMERBQVU7QUFDcEM7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DLG9CQUFvQixjQUFjO0FBQ2xDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxjQUFjLGdFQUFjO0FBQzVCLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGhlbWUvdXRpbC9nZW5Db21wb25lbnRTdHlsZUhvb2suanM/NmUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdHlsZVJlZ2lzdGVyIH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzaW5qcyc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2VuQ29tbW9uU3R5bGUsIGdlbkxpbmtTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb25maWctcHJvdmlkZXIvY29udGV4dCc7XG5pbXBvcnQgeyBtZXJnZVRva2VuLCBzdGF0aXN0aWNUb2tlbiwgdXNlVG9rZW4gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5Db21wb25lbnRTdHlsZUhvb2soY29tcG9uZW50LCBzdHlsZUZuLCBnZXREZWZhdWx0VG9rZW4pIHtcbiAgcmV0dXJuIHByZWZpeENscyA9PiB7XG4gICAgY29uc3QgW3RoZW1lLCB0b2tlbiwgaGFzaElkXSA9IHVzZVRva2VuKCk7XG4gICAgY29uc3Qge1xuICAgICAgZ2V0UHJlZml4Q2xzLFxuICAgICAgaWNvblByZWZpeENsc1xuICAgIH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICAgIGNvbnN0IHJvb3RQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoKTtcbiAgICAvLyBHZW5lcmF0ZSBzdHlsZSBmb3IgYWxsIGEgdGFncyBpbiBhbnRkIGNvbXBvbmVudC5cbiAgICB1c2VTdHlsZVJlZ2lzdGVyKHtcbiAgICAgIHRoZW1lLFxuICAgICAgdG9rZW4sXG4gICAgICBoYXNoSWQsXG4gICAgICBwYXRoOiBbJ1NoYXJlZCcsIHJvb3RQcmVmaXhDbHNdXG4gICAgfSwgKCkgPT4gW3tcbiAgICAgIC8vIExpbmtcbiAgICAgICcmJzogZ2VuTGlua1N0eWxlKHRva2VuKVxuICAgIH1dKTtcbiAgICByZXR1cm4gW3VzZVN0eWxlUmVnaXN0ZXIoe1xuICAgICAgdGhlbWUsXG4gICAgICB0b2tlbixcbiAgICAgIGhhc2hJZCxcbiAgICAgIHBhdGg6IFtjb21wb25lbnQsIHByZWZpeENscywgaWNvblByZWZpeENsc11cbiAgICB9LCAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRva2VuOiBwcm94eVRva2VuLFxuICAgICAgICBmbHVzaFxuICAgICAgfSA9IHN0YXRpc3RpY1Rva2VuKHRva2VuKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb21wb25lbnRUb2tlbiA9IHR5cGVvZiBnZXREZWZhdWx0VG9rZW4gPT09ICdmdW5jdGlvbicgPyBnZXREZWZhdWx0VG9rZW4ocHJveHlUb2tlbikgOiBnZXREZWZhdWx0VG9rZW47XG4gICAgICBjb25zdCBtZXJnZWRDb21wb25lbnRUb2tlbiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbXBvbmVudFRva2VuKSwgdG9rZW5bY29tcG9uZW50XSk7XG4gICAgICBjb25zdCBjb21wb25lbnRDbHMgPSBgLiR7cHJlZml4Q2xzfWA7XG4gICAgICBjb25zdCBtZXJnZWRUb2tlbiA9IG1lcmdlVG9rZW4ocHJveHlUb2tlbiwge1xuICAgICAgICBjb21wb25lbnRDbHMsXG4gICAgICAgIHByZWZpeENscyxcbiAgICAgICAgaWNvbkNsczogYC4ke2ljb25QcmVmaXhDbHN9YCxcbiAgICAgICAgYW50Q2xzOiBgLiR7cm9vdFByZWZpeENsc31gXG4gICAgICB9LCBtZXJnZWRDb21wb25lbnRUb2tlbik7XG4gICAgICBjb25zdCBzdHlsZUludGVycG9sYXRpb24gPSBzdHlsZUZuKG1lcmdlZFRva2VuLCB7XG4gICAgICAgIGhhc2hJZCxcbiAgICAgICAgcHJlZml4Q2xzLFxuICAgICAgICByb290UHJlZml4Q2xzLFxuICAgICAgICBpY29uUHJlZml4Q2xzLFxuICAgICAgICBvdmVycmlkZUNvbXBvbmVudFRva2VuOiB0b2tlbltjb21wb25lbnRdXG4gICAgICB9KTtcbiAgICAgIGZsdXNoKGNvbXBvbmVudCwgbWVyZ2VkQ29tcG9uZW50VG9rZW4pO1xuICAgICAgcmV0dXJuIFtnZW5Db21tb25TdHlsZSh0b2tlbiwgcHJlZml4Q2xzKSwgc3R5bGVJbnRlcnBvbGF0aW9uXTtcbiAgICB9KSwgaGFzaElkXTtcbiAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///67968
`)},45503:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TS": function() { return /* binding */ merge; },
/* harmony export */   "ZP": function() { return /* binding */ statisticToken; }
/* harmony export */ });
/* unused harmony exports statistic, _statistic_build_ */
const enableStatistic =  false || typeof CSSINJS_STATISTIC !== 'undefined';
let recording = true;
/**
 * This function will do as \`Object.assign\` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
/** @private Internal Usage. Not use in your production. */
const statistic = {};
/** @private Internal Usage. Not use in your production. */
// eslint-disable-next-line camelcase
const _statistic_build_ = {};
/* istanbul ignore next */
function noop() {}
/** Statistic token usage case. Should use \`merge\` function if you do not want spread record. */
function statisticToken(token) {
  let tokenKeys;
  let proxy = token;
  let flush = noop;
  if (enableStatistic) {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: componentToken
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDU1MDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3QkFBd0IsTUFBcUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asc0VBQXNFLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aGVtZS91dGlsL3N0YXRpc3RpYy5qcz8yYzMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVuYWJsZVN0YXRpc3RpYyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgfHwgdHlwZW9mIENTU0lOSlNfU1RBVElTVElDICE9PSAndW5kZWZpbmVkJztcbmxldCByZWNvcmRpbmcgPSB0cnVlO1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgZG8gYXMgYE9iamVjdC5hc3NpZ25gIGluIHByb2R1Y3Rpb24uIEJ1dCB3aWxsIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHk6Z2V0IHRvXG4gKiBwYXNzIGFsbCB2YWx1ZSBhY2Nlc3MgaW4gZGV2ZWxvcG1lbnQuIFRvIHN1cHBvcnQgc3RhdGlzdGljIGZpZWxkIHVzYWdlIHdpdGggYWxpYXMgdG9rZW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG9ianMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgb2Jqc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVuYWJsZVN0YXRpc3RpYykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCwgW3t9XS5jb25jYXQob2JqcykpO1xuICB9XG4gIHJlY29yZGluZyA9IGZhbHNlO1xuICBjb25zdCByZXQgPSB7fTtcbiAgb2Jqcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6ICgpID0+IG9ialtrZXldXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJlY29yZGluZyA9IHRydWU7XG4gIHJldHVybiByZXQ7XG59XG4vKiogQHByaXZhdGUgSW50ZXJuYWwgVXNhZ2UuIE5vdCB1c2UgaW4geW91ciBwcm9kdWN0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IHN0YXRpc3RpYyA9IHt9O1xuLyoqIEBwcml2YXRlIEludGVybmFsIFVzYWdlLiBOb3QgdXNlIGluIHlvdXIgcHJvZHVjdGlvbi4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmV4cG9ydCBjb25zdCBfc3RhdGlzdGljX2J1aWxkXyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqIFN0YXRpc3RpYyB0b2tlbiB1c2FnZSBjYXNlLiBTaG91bGQgdXNlIGBtZXJnZWAgZnVuY3Rpb24gaWYgeW91IGRvIG5vdCB3YW50IHNwcmVhZCByZWNvcmQuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0aXN0aWNUb2tlbih0b2tlbikge1xuICBsZXQgdG9rZW5LZXlzO1xuICBsZXQgcHJveHkgPSB0b2tlbjtcbiAgbGV0IGZsdXNoID0gbm9vcDtcbiAgaWYgKGVuYWJsZVN0YXRpc3RpYykge1xuICAgIHRva2VuS2V5cyA9IG5ldyBTZXQoKTtcbiAgICBwcm94eSA9IG5ldyBQcm94eSh0b2tlbiwge1xuICAgICAgZ2V0KG9iaiwgcHJvcCkge1xuICAgICAgICBpZiAocmVjb3JkaW5nKSB7XG4gICAgICAgICAgdG9rZW5LZXlzLmFkZChwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZsdXNoID0gKGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudFRva2VuKSA9PiB7XG4gICAgICBzdGF0aXN0aWNbY29tcG9uZW50TmFtZV0gPSB7XG4gICAgICAgIGdsb2JhbDogQXJyYXkuZnJvbSh0b2tlbktleXMpLFxuICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudFRva2VuXG4gICAgICB9O1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogcHJveHksXG4gICAga2V5czogdG9rZW5LZXlzLFxuICAgIGZsdXNoXG4gIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///45503
`)},67159:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_version; }
});

;// CONCATENATED MODULE: ./node_modules/antd/es/version/version.js
/* harmony default export */ var version = ('5.1.7');
;// CONCATENATED MODULE: ./node_modules/antd/es/version/index.js
/* eslint import/no-unresolved: 0 */
// @ts-ignore

/* harmony default export */ var es_version = (version);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjcxNTkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDRDQUFlLE9BQU8sRTs7QUNBdEI7QUFDQTtBQUNnQztBQUNoQywrQ0FBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdmVyc2lvbi92ZXJzaW9uLmpzP2E3Y2UiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdmVyc2lvbi9pbmRleC5qcz84YTU5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICc1LjEuNyc7IiwiLyogZXNsaW50IGltcG9ydC9uby11bnJlc29sdmVkOiAwICovXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgdmVyc2lvbiBmcm9tICcuL3ZlcnNpb24nO1xuZXhwb3J0IGRlZmF1bHQgdmVyc2lvbjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///67159
`)},27563:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ab": function() { return /* binding */ COMMENT; },
/* harmony export */   "Fr": function() { return /* binding */ RULESET; },
/* harmony export */   "G$": function() { return /* binding */ WEBKIT; },
/* harmony export */   "K$": function() { return /* binding */ IMPORT; },
/* harmony export */   "MS": function() { return /* binding */ MS; },
/* harmony export */   "h5": function() { return /* binding */ DECLARATION; },
/* harmony export */   "lK": function() { return /* binding */ KEYFRAMES; },
/* harmony export */   "uj": function() { return /* binding */ MOZ; }
/* harmony export */ });
/* unused harmony exports PAGE, MEDIA, CHARSET, VIEWPORT, SUPPORTS, DOCUMENT, NAMESPACE, FONT_FACE, COUNTER_STYLE, FONT_FEATURE_VALUES */
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc1NjMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL0VudW0uanM/ZmNkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIE1TID0gJy1tcy0nXG5leHBvcnQgdmFyIE1PWiA9ICctbW96LSdcbmV4cG9ydCB2YXIgV0VCS0lUID0gJy13ZWJraXQtJ1xuXG5leHBvcnQgdmFyIENPTU1FTlQgPSAnY29tbSdcbmV4cG9ydCB2YXIgUlVMRVNFVCA9ICdydWxlJ1xuZXhwb3J0IHZhciBERUNMQVJBVElPTiA9ICdkZWNsJ1xuXG5leHBvcnQgdmFyIFBBR0UgPSAnQHBhZ2UnXG5leHBvcnQgdmFyIE1FRElBID0gJ0BtZWRpYSdcbmV4cG9ydCB2YXIgSU1QT1JUID0gJ0BpbXBvcnQnXG5leHBvcnQgdmFyIENIQVJTRVQgPSAnQGNoYXJzZXQnXG5leHBvcnQgdmFyIFZJRVdQT1JUID0gJ0B2aWV3cG9ydCdcbmV4cG9ydCB2YXIgU1VQUE9SVFMgPSAnQHN1cHBvcnRzJ1xuZXhwb3J0IHZhciBET0NVTUVOVCA9ICdAZG9jdW1lbnQnXG5leHBvcnQgdmFyIE5BTUVTUEFDRSA9ICdAbmFtZXNwYWNlJ1xuZXhwb3J0IHZhciBLRVlGUkFNRVMgPSAnQGtleWZyYW1lcydcbmV4cG9ydCB2YXIgRk9OVF9GQUNFID0gJ0Bmb250LWZhY2UnXG5leHBvcnQgdmFyIENPVU5URVJfU1RZTEUgPSAnQGNvdW50ZXItc3R5bGUnXG5leHBvcnQgdmFyIEZPTlRfRkVBVFVSRV9WQUxVRVMgPSAnQGZvbnQtZmVhdHVyZS12YWx1ZXMnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///27563
`)},92190:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY": function() { return /* binding */ compile; }
/* harmony export */ });
/* unused harmony exports parse, ruleset, comment, declaration */
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27563);
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26686);
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46411);




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .dealloc */ .cE)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .alloc */ .un)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .charat */ .uO)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .indexof */ .Cw)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)(character), '&', '&\\f'), '&\\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)(character)
				break
			// \\t \\n \\r \\s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .whitespace */ .Qb)(previous)
				break
			// \\
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .escaping */ .kq)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .commenter */ .q6)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) * ampersand
			// } ; \\0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \\0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .charat */ .uO)(characters, 3) === 110 ? 100 : atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .append */ .R3)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .prev */ .mp)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .from */ .Dp)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .delimit */ .iF)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .peek */ .fj)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .identifier */ .QU)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .caret */ .Ud)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .strlen */ .to)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .sizeof */ .Ei)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .abs */ .Wn)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .trim */ .fy)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .replace */ .gx)(y, /&\\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .RULESET */ .Fr : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .COMMENT */ .Ab, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .from */ .Dp)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .char */ .Tb)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__/* .node */ .dH)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__/* .DECLARATION */ .h5, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* .substr */ .tb)(value, length + 1, -1), length)
}
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLDJEQUFJLENBQUMsNkRBQUksS0FBSyw2REFBTTtBQUMvRDs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQLFFBQVEsNkRBQUksc0JBQXNCLDJEQUFXLEVBQUUsNkRBQU0sb0JBQW9CLDZEQUFNO0FBQy9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvUGFyc2VyLmpzPzUxZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDT01NRU5ULCBSVUxFU0VULCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHthYnMsIGNoYXJhdCwgdHJpbSwgZnJvbSwgc2l6ZW9mLCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCByZXBsYWNlLCBpbmRleG9mfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge25vZGUsIGNoYXIsIHByZXYsIG5leHQsIHBlZWssIGNhcmV0LCBhbGxvYywgZGVhbGxvYywgZGVsaW1pdCwgd2hpdGVzcGFjZSwgZXNjYXBpbmcsIGlkZW50aWZpZXIsIGNvbW1lbnRlcn0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtvYmplY3RbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUgKHZhbHVlKSB7XG5cdHJldHVybiBkZWFsbG9jKHBhcnNlKCcnLCBudWxsLCBudWxsLCBudWxsLCBbJyddLCB2YWx1ZSA9IGFsbG9jKHZhbHVlKSwgMCwgWzBdLCB2YWx1ZSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc2V0c1xuICogQHBhcmFtIHtudW1iZXJbXX0gcHNldWRvXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGRlY2xhcmF0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHZhbHVlLCByb290LCBwYXJlbnQsIHJ1bGUsIHJ1bGVzLCBydWxlc2V0cywgcHNldWRvLCBwb2ludHMsIGRlY2xhcmF0aW9ucykge1xuXHR2YXIgaW5kZXggPSAwXG5cdHZhciBvZmZzZXQgPSAwXG5cdHZhciBsZW5ndGggPSBwc2V1ZG9cblx0dmFyIGF0cnVsZSA9IDBcblx0dmFyIHByb3BlcnR5ID0gMFxuXHR2YXIgcHJldmlvdXMgPSAwXG5cdHZhciB2YXJpYWJsZSA9IDFcblx0dmFyIHNjYW5uaW5nID0gMVxuXHR2YXIgYW1wZXJzYW5kID0gMVxuXHR2YXIgY2hhcmFjdGVyID0gMFxuXHR2YXIgdHlwZSA9ICcnXG5cdHZhciBwcm9wcyA9IHJ1bGVzXG5cdHZhciBjaGlsZHJlbiA9IHJ1bGVzZXRzXG5cdHZhciByZWZlcmVuY2UgPSBydWxlXG5cdHZhciBjaGFyYWN0ZXJzID0gdHlwZVxuXG5cdHdoaWxlIChzY2FubmluZylcblx0XHRzd2l0Y2ggKHByZXZpb3VzID0gY2hhcmFjdGVyLCBjaGFyYWN0ZXIgPSBuZXh0KCkpIHtcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmIChwcmV2aW91cyAhPSAxMDggJiYgY2hhcmF0KGNoYXJhY3RlcnMsIGxlbmd0aCAtIDEpID09IDU4KSB7XG5cdFx0XHRcdFx0aWYgKGluZGV4b2YoY2hhcmFjdGVycyArPSByZXBsYWNlKGRlbGltaXQoY2hhcmFjdGVyKSwgJyYnLCAnJlxcZicpLCAnJlxcZicpICE9IC0xKVxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gLTFcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHQvLyBcIiAnIFtcblx0XHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgOTE6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXHQgXFxuIFxcciBcXHNcblx0XHRcdGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSB3aGl0ZXNwYWNlKHByZXZpb3VzKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFxcblx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZXNjYXBpbmcoY2FyZXQoKSAtIDEsIDcpXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHQvLyAvXG5cdFx0XHRjYXNlIDQ3OlxuXHRcdFx0XHRzd2l0Y2ggKHBlZWsoKSkge1xuXHRcdFx0XHRcdGNhc2UgNDI6IGNhc2UgNDc6XG5cdFx0XHRcdFx0XHRhcHBlbmQoY29tbWVudChjb21tZW50ZXIobmV4dCgpLCBjYXJldCgpKSwgcm9vdCwgcGFyZW50KSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSAnLydcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8ge1xuXHRcdFx0Y2FzZSAxMjMgKiB2YXJpYWJsZTpcblx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gc3RybGVuKGNoYXJhY3RlcnMpICogYW1wZXJzYW5kXG5cdFx0XHQvLyB9IDsgXFwwXG5cdFx0XHRjYXNlIDEyNSAqIHZhcmlhYmxlOiBjYXNlIDU5OiBjYXNlIDA6XG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XG5cdFx0XHRcdFx0Ly8gXFwwIH1cblx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgMTI1OiBzY2FubmluZyA9IDBcblx0XHRcdFx0XHQvLyA7XG5cdFx0XHRcdFx0Y2FzZSA1OSArIG9mZnNldDpcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA+IDAgJiYgKHN0cmxlbihjaGFyYWN0ZXJzKSAtIGxlbmd0aCkpXG5cdFx0XHRcdFx0XHRcdGFwcGVuZChwcm9wZXJ0eSA+IDMyID8gZGVjbGFyYXRpb24oY2hhcmFjdGVycyArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAxKSA6IGRlY2xhcmF0aW9uKHJlcGxhY2UoY2hhcmFjdGVycywgJyAnLCAnJykgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMiksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQCA7XG5cdFx0XHRcdFx0Y2FzZSA1OTogY2hhcmFjdGVycyArPSAnOydcblx0XHRcdFx0XHQvLyB7IHJ1bGUvYXQtcnVsZVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRhcHBlbmQocmVmZXJlbmNlID0gcnVsZXNldChjaGFyYWN0ZXJzLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzID0gW10sIGNoaWxkcmVuID0gW10sIGxlbmd0aCksIHJ1bGVzZXRzKVxuXG5cdFx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09PSAxMjMpXG5cdFx0XHRcdFx0XHRcdGlmIChvZmZzZXQgPT09IDApXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2UoY2hhcmFjdGVycywgcm9vdCwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHByb3BzLCBydWxlc2V0cywgbGVuZ3RoLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChhdHJ1bGUgPT09IDk5ICYmIGNoYXJhdChjaGFyYWN0ZXJzLCAzKSA9PT0gMTEwID8gMTAwIDogYXRydWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBkIG0gc1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxMDA6IGNhc2UgMTA5OiBjYXNlIDExNTpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2UodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBydWxlICYmIGFwcGVuZChydWxlc2V0KHZhbHVlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgMCwgMCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcnVsZXMsIHByb3BzID0gW10sIGxlbmd0aCksIGNoaWxkcmVuKSwgcnVsZXMsIGNoaWxkcmVuLCBsZW5ndGgsIHBvaW50cywgcnVsZSA/IHByb3BzIDogY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBbJyddLCBjaGlsZHJlbiwgMCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbmRleCA9IG9mZnNldCA9IHByb3BlcnR5ID0gMCwgdmFyaWFibGUgPSBhbXBlcnNhbmQgPSAxLCB0eXBlID0gY2hhcmFjdGVycyA9ICcnLCBsZW5ndGggPSBwc2V1ZG9cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIDpcblx0XHRcdGNhc2UgNTg6XG5cdFx0XHRcdGxlbmd0aCA9IDEgKyBzdHJsZW4oY2hhcmFjdGVycyksIHByb3BlcnR5ID0gcHJldmlvdXNcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmICh2YXJpYWJsZSA8IDEpXG5cdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PSAxMjMpXG5cdFx0XHRcdFx0XHQtLXZhcmlhYmxlXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY2hhcmFjdGVyID09IDEyNSAmJiB2YXJpYWJsZSsrID09IDAgJiYgcHJldigpID09IDEyNSlcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXJzICs9IGZyb20oY2hhcmFjdGVyKSwgY2hhcmFjdGVyICogdmFyaWFibGUpIHtcblx0XHRcdFx0XHQvLyAmXG5cdFx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IG9mZnNldCA+IDAgPyAxIDogKGNoYXJhY3RlcnMgKz0gJ1xcZicsIC0xKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAsXG5cdFx0XHRcdFx0Y2FzZSA0NDpcblx0XHRcdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IChzdHJsZW4oY2hhcmFjdGVycykgLSAxKSAqIGFtcGVyc2FuZCwgYW1wZXJzYW5kID0gMVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyBAXG5cdFx0XHRcdFx0Y2FzZSA2NDpcblx0XHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRcdGlmIChwZWVrKCkgPT09IDQ1KVxuXHRcdFx0XHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQobmV4dCgpKVxuXG5cdFx0XHRcdFx0XHRhdHJ1bGUgPSBwZWVrKCksIG9mZnNldCA9IGxlbmd0aCA9IHN0cmxlbih0eXBlID0gY2hhcmFjdGVycyArPSBpZGVudGlmaWVyKGNhcmV0KCkpKSwgY2hhcmFjdGVyKytcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdGNhc2UgNDU6XG5cdFx0XHRcdFx0XHRpZiAocHJldmlvdXMgPT09IDQ1ICYmIHN0cmxlbihjaGFyYWN0ZXJzKSA9PSAyKVxuXHRcdFx0XHRcdFx0XHR2YXJpYWJsZSA9IDBcblx0XHRcdFx0fVxuXHRcdH1cblxuXHRyZXR1cm4gcnVsZXNldHNcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlc2V0ICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHR2YXIgcG9zdCA9IG9mZnNldCAtIDFcblx0dmFyIHJ1bGUgPSBvZmZzZXQgPT09IDAgPyBydWxlcyA6IFsnJ11cblx0dmFyIHNpemUgPSBzaXplb2YocnVsZSlcblxuXHRmb3IgKHZhciBpID0gMCwgaiA9IDAsIGsgPSAwOyBpIDwgaW5kZXg7ICsraSlcblx0XHRmb3IgKHZhciB4ID0gMCwgeSA9IHN1YnN0cih2YWx1ZSwgcG9zdCArIDEsIHBvc3QgPSBhYnMoaiA9IHBvaW50c1tpXSkpLCB6ID0gdmFsdWU7IHggPCBzaXplOyArK3gpXG5cdFx0XHRpZiAoeiA9IHRyaW0oaiA+IDAgPyBydWxlW3hdICsgJyAnICsgeSA6IHJlcGxhY2UoeSwgLyZcXGYvZywgcnVsZVt4XSkpKVxuXHRcdFx0XHRwcm9wc1trKytdID0gelxuXG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIG9mZnNldCA9PT0gMCA/IFJVTEVTRVQgOiB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudCAodmFsdWUsIHJvb3QsIHBhcmVudCkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBDT01NRU5ULCBmcm9tKGNoYXIoKSksIHN1YnN0cih2YWx1ZSwgMiwgLTIpLCAwKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJhdGlvbiAodmFsdWUsIHJvb3QsIHBhcmVudCwgbGVuZ3RoKSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIERFQ0xBUkFUSU9OLCBzdWJzdHIodmFsdWUsIDAsIGxlbmd0aCksIHN1YnN0cih2YWx1ZSwgbGVuZ3RoICsgMSwgLTEpLCBsZW5ndGgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///92190
`)},20211:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": function() { return /* binding */ stringify; },
/* harmony export */   "q": function() { return /* binding */ serialize; }
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27563);
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26686);



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .sizeof */ .Ei)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .IMPORT */ .K$: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .DECLARATION */ .h5: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .COMMENT */ .Ab: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .KEYFRAMES */ .lK: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__/* .RULESET */ .Fr: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .strlen */ .to)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBFO0FBQy9COztBQUUzQztBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBLGNBQWMsNkRBQU07O0FBRXBCLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBLE9BQU8sc0RBQU0sT0FBTywyREFBVztBQUMvQixPQUFPLHVEQUFPO0FBQ2QsT0FBTyx5REFBUyw0Q0FBNEMsOENBQThDO0FBQzFHLE9BQU8sdURBQU87QUFDZDs7QUFFQSxRQUFRLDZEQUFNLHdGQUF3RixpQkFBaUI7QUFDdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9TZXJpYWxpemVyLmpzPzNmODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTVBPUlQsIENPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OLCBLRVlGUkFNRVN9IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7c3RybGVuLCBzaXplb2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSAoY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHZhciBvdXRwdXQgPSAnJ1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNoaWxkcmVuKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0b3V0cHV0ICs9IGNhbGxiYWNrKGNoaWxkcmVuW2ldLCBpLCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0cmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5IChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgS0VZRlJBTUVTOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSArICd9J1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///20211
`)},46411:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FK": function() { return /* binding */ position; },
/* harmony export */   "JG": function() { return /* binding */ copy; },
/* harmony export */   "QU": function() { return /* binding */ identifier; },
/* harmony export */   "Qb": function() { return /* binding */ whitespace; },
/* harmony export */   "Tb": function() { return /* binding */ char; },
/* harmony export */   "Ud": function() { return /* binding */ caret; },
/* harmony export */   "cE": function() { return /* binding */ dealloc; },
/* harmony export */   "dH": function() { return /* binding */ node; },
/* harmony export */   "fj": function() { return /* binding */ peek; },
/* harmony export */   "iF": function() { return /* binding */ delimit; },
/* harmony export */   "kq": function() { return /* binding */ escaping; },
/* harmony export */   "lp": function() { return /* binding */ next; },
/* harmony export */   "mp": function() { return /* binding */ prev; },
/* harmony export */   "q6": function() { return /* binding */ commenter; },
/* harmony export */   "r": function() { return /* binding */ token; },
/* harmony export */   "tP": function() { return /* binding */ slice; },
/* harmony export */   "un": function() { return /* binding */ alloc; }
/* harmony export */ });
/* unused harmony exports line, column, length, character, characters, tokenize, tokenizer, delimiter */
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26686);


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .assign */ .f0)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .charat */ .uO)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .substr */ .tb)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \\0 \\t \\n \\r \\s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .strlen */ .to)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .trim */ .fy)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \\
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__/* .from */ .Dp)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDY0MTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStFOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVA7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxlQUFlO0FBQzFCLFdBQVcsZUFBZTtBQUMxQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxRQUFRO0FBQ25CO0FBQ087QUFDUCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNPO0FBQ1AsUUFBUSw2REFBTSxpREFBaUQscUJBQXFCO0FBQ3BGOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ087QUFDUCw0QkFBNEIsNkRBQU07O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1AsaUNBQWlDLDZEQUFNOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQLFFBQVEsNkRBQU07QUFDZDs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ087QUFDUCxRQUFRLDZEQUFNO0FBQ2Q7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ087QUFDUCxvQ0FBb0MsNkRBQU07QUFDMUM7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNPO0FBQ1AsUUFBUSwyREFBSTtBQUNaOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCwyREFBSTtBQUN0RDs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1Rva2VuaXplci5qcz8wY2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZnJvbSwgdHJpbSwgY2hhcmF0LCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCBhc3NpZ259IGZyb20gJy4vVXRpbGl0eS5qcydcblxuZXhwb3J0IHZhciBsaW5lID0gMVxuZXhwb3J0IHZhciBjb2x1bW4gPSAxXG5leHBvcnQgdmFyIGxlbmd0aCA9IDBcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlciA9IDBcbmV4cG9ydCB2YXIgY2hhcmFjdGVycyA9ICcnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXSB8IHN0cmluZ30gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0W10gfCBzdHJpbmd9IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub2RlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHRyZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgcm9vdDogcm9vdCwgcGFyZW50OiBwYXJlbnQsIHR5cGU6IHR5cGUsIHByb3BzOiBwcm9wcywgY2hpbGRyZW46IGNoaWxkcmVuLCBsaW5lOiBsaW5lLCBjb2x1bW46IGNvbHVtbiwgbGVuZ3RoOiBsZW5ndGgsIHJldHVybjogJyd9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29weSAocm9vdCwgcHJvcHMpIHtcblx0cmV0dXJuIGFzc2lnbihub2RlKCcnLCBudWxsLCBudWxsLCAnJywgbnVsbCwgbnVsbCwgMCksIHJvb3QsIHtsZW5ndGg6IC1yb290Lmxlbmd0aH0sIHByb3BzKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXIgKCkge1xuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJldiAoKSB7XG5cdGNoYXJhY3RlciA9IHBvc2l0aW9uID4gMCA/IGNoYXJhdChjaGFyYWN0ZXJzLCAtLXBvc2l0aW9uKSA6IDBcblxuXHRpZiAoY29sdW1uLS0sIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZS0tXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHQgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA8IGxlbmd0aCA/IGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbisrKSA6IDBcblxuXHRpZiAoY29sdW1uKyssIGNoYXJhY3RlciA9PT0gMTApXG5cdFx0Y29sdW1uID0gMSwgbGluZSsrXG5cblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlZWsgKCkge1xuXHRyZXR1cm4gY2hhcmF0KGNoYXJhY3RlcnMsIHBvc2l0aW9uKVxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhcmV0ICgpIHtcblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGljZSAoYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gc3Vic3RyKGNoYXJhY3RlcnMsIGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuICh0eXBlKSB7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdC8vIFxcMCBcXHQgXFxuIFxcciBcXHMgd2hpdGVzcGFjZSB0b2tlblxuXHRcdGNhc2UgMDogY2FzZSA5OiBjYXNlIDEwOiBjYXNlIDEzOiBjYXNlIDMyOlxuXHRcdFx0cmV0dXJuIDVcblx0XHQvLyAhICsgLCAvID4gQCB+IGlzb2xhdGUgdG9rZW5cblx0XHRjYXNlIDMzOiBjYXNlIDQzOiBjYXNlIDQ0OiBjYXNlIDQ3OiBjYXNlIDYyOiBjYXNlIDY0OiBjYXNlIDEyNjpcblx0XHQvLyA7IHsgfSBicmVha3BvaW50IHRva2VuXG5cdFx0Y2FzZSA1OTogY2FzZSAxMjM6IGNhc2UgMTI1OlxuXHRcdFx0cmV0dXJuIDRcblx0XHQvLyA6IGFjY29tcGFuaWVkIHRva2VuXG5cdFx0Y2FzZSA1ODpcblx0XHRcdHJldHVybiAzXG5cdFx0Ly8gXCIgJyAoIFsgb3BlbmluZyBkZWxpbWl0IHRva2VuXG5cdFx0Y2FzZSAzNDogY2FzZSAzOTogY2FzZSA0MDogY2FzZSA5MTpcblx0XHRcdHJldHVybiAyXG5cdFx0Ly8gKSBdIGNsb3NpbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgNDE6IGNhc2UgOTM6XG5cdFx0XHRyZXR1cm4gMVxuXHR9XG5cblx0cmV0dXJuIDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge2FueVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBsaW5lID0gY29sdW1uID0gMSwgbGVuZ3RoID0gc3RybGVuKGNoYXJhY3RlcnMgPSB2YWx1ZSksIHBvc2l0aW9uID0gMCwgW11cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWxsb2MgKHZhbHVlKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJzID0gJycsIHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGltaXQgKHR5cGUpIHtcblx0cmV0dXJuIHRyaW0oc2xpY2UocG9zaXRpb24gLSAxLCBkZWxpbWl0ZXIodHlwZSA9PT0gOTEgPyB0eXBlICsgMiA6IHR5cGUgPT09IDQwID8gdHlwZSArIDEgOiB0eXBlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyh0b2tlbml6ZXIoYWxsb2ModmFsdWUpKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hpdGVzcGFjZSAodHlwZSkge1xuXHR3aGlsZSAoY2hhcmFjdGVyID0gcGVlaygpKVxuXHRcdGlmIChjaGFyYWN0ZXIgPCAzMylcblx0XHRcdG5leHQoKVxuXHRcdGVsc2Vcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHRva2VuKHR5cGUpID4gMiB8fCB0b2tlbihjaGFyYWN0ZXIpID4gMyA/ICcnIDogJyAnXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemVyIChjaGlsZHJlbikge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuXHRcdFx0Y2FzZSAwOiBhcHBlbmQoaWRlbnRpZmllcihwb3NpdGlvbiAtIDEpLCBjaGlsZHJlbilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjogYXBwZW5kKGRlbGltaXQoY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OiBhcHBlbmQoZnJvbShjaGFyYWN0ZXIpLCBjaGlsZHJlbilcblx0XHR9XG5cblx0cmV0dXJuIGNoaWxkcmVuXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwaW5nIChpbmRleCwgY291bnQpIHtcblx0d2hpbGUgKC0tY291bnQgJiYgbmV4dCgpKVxuXHRcdC8vIG5vdCAwLTkgQS1GIGEtZlxuXHRcdGlmIChjaGFyYWN0ZXIgPCA0OCB8fCBjaGFyYWN0ZXIgPiAxMDIgfHwgKGNoYXJhY3RlciA+IDU3ICYmIGNoYXJhY3RlciA8IDY1KSB8fCAoY2hhcmFjdGVyID4gNzAgJiYgY2hhcmFjdGVyIDwgOTcpKVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gc2xpY2UoaW5kZXgsIGNhcmV0KCkgKyAoY291bnQgPCA2ICYmIHBlZWsoKSA9PSAzMiAmJiBuZXh0KCkgPT0gMzIpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ZXIgKHR5cGUpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0Ly8gXSApIFwiICdcblx0XHRcdGNhc2UgdHlwZTpcblx0XHRcdFx0cmV0dXJuIHBvc2l0aW9uXG5cdFx0XHQvLyBcIiAnXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OlxuXHRcdFx0XHRpZiAodHlwZSAhPT0gMzQgJiYgdHlwZSAhPT0gMzkpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKGNoYXJhY3Rlcilcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmICh0eXBlID09PSA0MSlcblx0XHRcdFx0XHRkZWxpbWl0ZXIodHlwZSlcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRuZXh0KClcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0cmV0dXJuIHBvc2l0aW9uXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudGVyICh0eXBlLCBpbmRleCkge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdC8vIC8vXG5cdFx0aWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQ3ICsgMTApXG5cdFx0XHRicmVha1xuXHRcdC8vIC8qXG5cdFx0ZWxzZSBpZiAodHlwZSArIGNoYXJhY3RlciA9PT0gNDIgKyA0MiAmJiBwZWVrKCkgPT09IDQ3KVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gJy8qJyArIHNsaWNlKGluZGV4LCBwb3NpdGlvbiAtIDEpICsgJyonICsgZnJvbSh0eXBlID09PSA0NyA/IHR5cGUgOiBuZXh0KCkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyIChpbmRleCkge1xuXHR3aGlsZSAoIXRva2VuKHBlZWsoKSkpXG5cdFx0bmV4dCgpXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBwb3NpdGlvbilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///46411
`)},26686:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": function() { return /* binding */ combine; },
/* harmony export */   "Cw": function() { return /* binding */ indexof; },
/* harmony export */   "Dp": function() { return /* binding */ from; },
/* harmony export */   "EQ": function() { return /* binding */ match; },
/* harmony export */   "Ei": function() { return /* binding */ sizeof; },
/* harmony export */   "R3": function() { return /* binding */ append; },
/* harmony export */   "Wn": function() { return /* binding */ abs; },
/* harmony export */   "f0": function() { return /* binding */ assign; },
/* harmony export */   "fy": function() { return /* binding */ trim; },
/* harmony export */   "gx": function() { return /* binding */ replace; },
/* harmony export */   "tb": function() { return /* binding */ substr; },
/* harmony export */   "to": function() { return /* binding */ strlen; },
/* harmony export */   "uO": function() { return /* binding */ charat; },
/* harmony export */   "vp": function() { return /* binding */ hash; }
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY2ODYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUNPOztBQUVQO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUNPOztBQUVQO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWjtBQUNPOztBQUVQO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9VdGlsaXR5LmpzPzVmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IHZhciBhYnMgPSBNYXRoLmFic1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgdmFyIGZyb20gPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCB2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaCAodmFsdWUsIGxlbmd0aCkge1xuXHRyZXR1cm4gY2hhcmF0KHZhbHVlLCAwKSBeIDQ1ID8gKCgoKCgoKGxlbmd0aCA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMCkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAxKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDIpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMykgOiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUudHJpbSgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuICogQHJldHVybiB7c3RyaW5nP31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoICh2YWx1ZSwgcGF0dGVybikge1xuXHRyZXR1cm4gKHZhbHVlID0gcGF0dGVybi5leGVjKHZhbHVlKSkgPyB2YWx1ZVswXSA6IHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlICh2YWx1ZSwgcGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRleG9mICh2YWx1ZSwgc2VhcmNoKSB7XG5cdHJldHVybiB2YWx1ZS5pbmRleE9mKHNlYXJjaClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhcmF0ICh2YWx1ZSwgaW5kZXgpIHtcblx0cmV0dXJuIHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpIHwgMFxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHIgKHZhbHVlLCBiZWdpbiwgZW5kKSB7XG5cdHJldHVybiB2YWx1ZS5zbGljZShiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVvZiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHthbnlbXX0gYXJyYXlcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCAodmFsdWUsIGFycmF5KSB7XG5cdHJldHVybiBhcnJheS5wdXNoKHZhbHVlKSwgdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhcnJheVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUgKGFycmF5LCBjYWxsYmFjaykge1xuXHRyZXR1cm4gYXJyYXkubWFwKGNhbGxiYWNrKS5qb2luKCcnKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///26686
`)}}]);
