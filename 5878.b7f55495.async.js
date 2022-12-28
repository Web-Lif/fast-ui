"use strict";(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[5878],{96923:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xB": function() { return /* binding */ Global; },
  "iv": function() { return /* binding */ css; }
});

// UNUSED EXPORTS: CacheProvider, ClassNames, ThemeContext, ThemeProvider, __unsafe_useEmotionCache, createElement, jsx, keyframes, useTheme, withEmotionCache, withTheme

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 2 modules
var emotion_cache_browser_esm = __webpack_require__(9463);
// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js + 2 modules
var emotion_serialize_browser_esm = __webpack_require__(62324);
;// CONCATENATED MODULE: ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js



var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = react_namespaceObject['useInsertion' + 'Effect'] ? react_namespaceObject['useInsertion' + 'Effect'] : false;
var emotion_use_insertion_effect_with_fallbacks_browser_esm_useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react.useLayoutEffect;



;// CONCATENATED MODULE: ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js









var emotion_element_6a883da9_browser_esm_hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,emotion_cache_browser_esm/* default */.Z)({
  key: 'css'
}) : null);

if (false) {}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return useContext(EmotionCacheContext);
};

var emotion_element_6a883da9_browser_esm_withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var emotion_element_6a883da9_browser_esm_ThemeContext = /* #__PURE__ */(0,react.createContext)({});

if (false) {}

var useTheme = function useTheme() {
  return useContext(emotion_element_6a883da9_browser_esm_ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (false) {}

  return _extends({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(/* unused pure expression or super */ null && (weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
})));
var ThemeProvider = function ThemeProvider(props) {
  var theme = useContext(emotion_element_6a883da9_browser_esm_ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/createElement(emotion_element_6a883da9_browser_esm_ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = useContext(emotion_element_6a883da9_browser_esm_ThemeContext);
    return /*#__PURE__*/createElement(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\\s+at\\s+([A-Za-z0-9$.]+)\\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var emotion_element_6a883da9_browser_esm_createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (emotion_element_6a883da9_browser_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  return null;
};

var emotion_element_6a883da9_browser_esm_Emotion = /* #__PURE__ */(/* unused pure expression or super */ null && (emotion_element_6a883da9_browser_esm_withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using \`css\` from \`emotion\` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, useContext(emotion_element_6a883da9_browser_esm_ThemeContext));

  if (false) { var labelFromStack; }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (emotion_element_6a883da9_browser_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/createElement(WrappedComponent, newProps));
})));

if (false) {}



// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var emotion_utils_browser_esm = __webpack_require__(70444);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js












var pkg = {
	name: "@emotion/react",
	version: "11.10.5",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				worker: "./dist/emotion-react.worker.esm.js",
				browser: "./dist/emotion-react.browser.esm.js",
				"default": "./dist/emotion-react.esm.js"
			},
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			module: {
				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
			},
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			module: {
				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
			},
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			module: {
				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
			},
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": "./macro.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.10.5",
		"@emotion/cache": "^11.10.5",
		"@emotion/serialize": "^1.1.1",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
		"@emotion/utils": "^1.2.0",
		"@emotion/weak-memoize": "^0.3.0",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.18.5",
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.10.5",
		"@emotion/css-prettifier": "1.1.1",
		"@emotion/server": "11.10.0",
		"@emotion/styled": "11.10.5",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact",
		exports: {
			envConditions: [
				"browser",
				"worker"
			],
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": "./macro.js"
			}
		}
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */emotion_element_6a883da9_browser_esm_withEmotionCache(function (props, cache) {
  if (false) {}

  var styles = props.styles;
  var serialized = (0,emotion_serialize_browser_esm/* serializeStyles */.O)([styles], undefined, (0,react.useContext)(emotion_element_6a883da9_browser_esm_ThemeContext));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react.useRef)();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\\"" + key + " " + serialized.name + "\\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,emotion_utils_browser_esm/* insertStyles */.My)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (false) {}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,emotion_serialize_browser_esm/* serializeStyles */.O)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var emotion_react_browser_esm_Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by \`cx\`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(emotion_react_browser_esm_Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
})));

if (false) {}

if (false) { var globalKey, globalContext, isTestEnv, isBrowser; }


//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtBQUNyRjtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsWUFBb0IsbUJBQW1CLEVBRXpEOztBQUVMLDJFQUEyRSxlQUFlO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxtQ0FBUztBQUN4RjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsQ0FBQzs7QUFFRixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7O0FBRUQsSUFBSSxLQUFxQyxFQUFFLHVEQWtCMUM7O0FBRXdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzL2Rpc3QvZW1vdGlvbi11c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy5icm93c2VyLmVzbS5qcz83YzEwIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tZWxlbWVudC02YTg4M2RhOS5icm93c2VyLmVzbS5qcz82ZjhjIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanM/NTgxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBzeW5jRmFsbGJhY2sgPSBmdW5jdGlvbiBzeW5jRmFsbGJhY2soY3JlYXRlKSB7XG4gIHJldHVybiBjcmVhdGUoKTtcbn07XG5cbnZhciB1c2VJbnNlcnRpb25FZmZlY3QgPSBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA/IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddIDogZmFsc2U7XG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayA9ICB1c2VJbnNlcnRpb25FZmZlY3QgfHwgc3luY0ZhbGxiYWNrO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayA9IHVzZUluc2VydGlvbkVmZmVjdCB8fCB1c2VMYXlvdXRFZmZlY3Q7XG5cbmV4cG9ydCB7IHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2ssIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgZm9yd2FyZFJlZiwgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHdlYWtNZW1vaXplIGZyb20gJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBpbnNlcnRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayB9IGZyb20gJ0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzJztcblxudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyogI19fUFVSRV9fICovY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gLyogI19fUFVSRV9fICovY3JlYXRlQ2FjaGUoe1xuICBrZXk6ICdjc3MnXG59KSA6IG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBFbW90aW9uQ2FjaGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DYWNoZUNvbnRleHQnO1xufVxuXG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG52YXIgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gdXNlRW1vdGlvbkNhY2hlKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChFbW90aW9uQ2FjaGVDb250ZXh0KTtcbn07XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgLy8gdGhlIGNhY2hlIHdpbGwgbmV2ZXIgYmUgbnVsbCBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBjYWNoZSA9IHVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG4gICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICB9KTtcbn07XG5cbnZhciBUaGVtZUNvbnRleHQgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVDb250ZXh0KHt9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGhlbWVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25UaGVtZUNvbnRleHQnO1xufVxuXG52YXIgdXNlVGhlbWUgPSBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbn07XG5cbnZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWUsIHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PSBudWxsIHx8IHR5cGVvZiBtZXJnZWRUaGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShtZXJnZWRUaGVtZSkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24sIGkuZS4gdGhlbWU9eygpID0+ICh7fSl9IScpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICh0aGVtZSA9PSBudWxsIHx8IHR5cGVvZiB0aGVtZSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh0aGVtZSkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIG1ha2UgeW91ciB0aGVtZSBwcm9wIGEgcGxhaW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbnZhciBnZXRMYXN0UGFydCA9IGZ1bmN0aW9uIGdldExhc3RQYXJ0KGZ1bmN0aW9uTmFtZSkge1xuICAvLyBUaGUgbWF0Y2ggbWF5IGJlIHNvbWV0aGluZyBsaWtlICdPYmplY3QuY3JlYXRlRW1vdGlvblByb3BzJyBvclxuICAvLyAnTG9hZGVyLnByb3RvdHlwZS5yZW5kZXInXG4gIHZhciBwYXJ0cyA9IGZ1bmN0aW9uTmFtZS5zcGxpdCgnLicpO1xuICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG59O1xuXG52YXIgZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lID0gZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lKGxpbmUpIHtcbiAgLy8gVjhcbiAgdmFyIG1hdGNoID0gL15cXHMrYXRcXHMrKFtBLVphLXowLTkkLl0rKVxccy8uZXhlYyhsaW5lKTtcbiAgaWYgKG1hdGNoKSByZXR1cm4gZ2V0TGFzdFBhcnQobWF0Y2hbMV0pOyAvLyBTYWZhcmkgLyBGaXJlZm94XG5cbiAgbWF0Y2ggPSAvXihbQS1aYS16MC05JC5dKylALy5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2gpIHJldHVybiBnZXRMYXN0UGFydChtYXRjaFsxXSk7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgaW50ZXJuYWxSZWFjdEZ1bmN0aW9uTmFtZXMgPSAvKiAjX19QVVJFX18gKi9uZXcgU2V0KFsncmVuZGVyV2l0aEhvb2tzJywgJ3Byb2Nlc3NDaGlsZCcsICdmaW5pc2hDbGFzc0NvbXBvbmVudCcsICdyZW5kZXJUb1N0cmluZyddKTsgLy8gVGhlc2UgaWRlbnRpZmllcnMgY29tZSBmcm9tIGVycm9yIHN0YWNrcywgc28gdGhleSBoYXZlIHRvIGJlIHZhbGlkIEpTXG4vLyBpZGVudGlmaWVycywgdGh1cyB3ZSBvbmx5IG5lZWQgdG8gcmVwbGFjZSB3aGF0IGlzIGEgdmFsaWQgY2hhcmFjdGVyIGZvciBKUyxcbi8vIGJ1dCBub3QgZm9yIENTUy5cblxudmFyIHNhbml0aXplSWRlbnRpZmllciA9IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnJlcGxhY2UoL1xcJC9nLCAnLScpO1xufTtcblxudmFyIGdldExhYmVsRnJvbVN0YWNrVHJhY2UgPSBmdW5jdGlvbiBnZXRMYWJlbEZyb21TdGFja1RyYWNlKHN0YWNrVHJhY2UpIHtcbiAgaWYgKCFzdGFja1RyYWNlKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgbGluZXMgPSBzdGFja1RyYWNlLnNwbGl0KCdcXG4nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uTmFtZUZyb21TdGFja1RyYWNlTGluZShsaW5lc1tpXSk7IC8vIFRoZSBmaXJzdCBsaW5lIG9mIFY4IHN0YWNrIHRyYWNlcyBpcyBqdXN0IFwiRXJyb3JcIlxuXG4gICAgaWYgKCFmdW5jdGlvbk5hbWUpIGNvbnRpbnVlOyAvLyBJZiB3ZSByZWFjaCBvbmUgb2YgdGhlc2UsIHdlIGhhdmUgZ29uZSB0b28gZmFyIGFuZCBzaG91bGQgcXVpdFxuXG4gICAgaWYgKGludGVybmFsUmVhY3RGdW5jdGlvbk5hbWVzLmhhcyhmdW5jdGlvbk5hbWUpKSBicmVhazsgLy8gVGhlIGNvbXBvbmVudCBuYW1lIGlzIHRoZSBmaXJzdCBmdW5jdGlvbiBpbiB0aGUgc3RhY2sgdGhhdCBzdGFydHMgd2l0aCBhblxuICAgIC8vIHVwcGVyY2FzZSBsZXR0ZXJcblxuICAgIGlmICgvXltBLVpdLy50ZXN0KGZ1bmN0aW9uTmFtZSkpIHJldHVybiBzYW5pdGl6ZUlkZW50aWZpZXIoZnVuY3Rpb25OYW1lKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9yZWFjdCcgbGlrZSB0aGlzOiBjc3NgXCIgKyBwcm9wcy5jc3MgKyBcImBcIik7XG4gIH1cblxuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7IC8vIEZvciBwZXJmb3JtYW5jZSwgb25seSBjYWxsIGdldExhYmVsRnJvbVN0YWNrVHJhY2UgaW4gZGV2ZWxvcG1lbnQgYW5kIHdoZW5cbiAgLy8gdGhlIGxhYmVsIGhhc24ndCBhbHJlYWR5IGJlZW4gY29tcHV0ZWRcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhIXByb3BzLmNzcyAmJiAodHlwZW9mIHByb3BzLmNzcyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHByb3BzLmNzcy5uYW1lICE9PSAnc3RyaW5nJyB8fCBwcm9wcy5jc3MubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSkge1xuICAgIHZhciBsYWJlbCA9IGdldExhYmVsRnJvbVN0YWNrVHJhY2UobmV3IEVycm9yKCkuc3RhY2spO1xuICAgIGlmIChsYWJlbCkgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBsYWJlbDtcbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZCA9IF9yZWYuc2VyaWFsaXplZCxcbiAgICAgIGlzU3RyaW5nVGFnID0gX3JlZi5pc1N0cmluZ1RhZztcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdmFyIHJ1bGVzID0gdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBFbW90aW9uID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlLCByZWYpIHtcbiAgdmFyIGNzc1Byb3AgPSBwcm9wcy5jc3M7IC8vIHNvIHRoYXQgdXNpbmcgYGNzc2AgZnJvbSBgZW1vdGlvbmAgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgY3NzIHByb3Agd29ya3NcbiAgLy8gbm90IHBhc3NpbmcgdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8gc2VyaWFsaXplU3R5bGVzIGJlY2F1c2UgaXQgd291bGRcbiAgLy8gbWFrZSBjZXJ0YWluIGJhYmVsIG9wdGltaXNhdGlvbnMgbm90IHBvc3NpYmxlXG5cbiAgaWYgKHR5cGVvZiBjc3NQcm9wID09PSAnc3RyaW5nJyAmJiBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjc3NQcm9wID0gY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXTtcbiAgfVxuXG4gIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gcHJvcHNbdHlwZVByb3BOYW1lXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbY3NzUHJvcF07XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNhY2hlLnJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHJlZ2lzdGVyZWRTdHlsZXMsIHVuZGVmaW5lZCwgdXNlQ29udGV4dChUaGVtZUNvbnRleHQpKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgIHZhciBsYWJlbEZyb21TdGFjayA9IHByb3BzW2xhYmVsUHJvcE5hbWVdO1xuXG4gICAgaWYgKGxhYmVsRnJvbVN0YWNrKSB7XG4gICAgICBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzZXJpYWxpemVkLCAnbGFiZWw6JyArIGxhYmVsRnJvbVN0YWNrICsgJzsnXSk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3NOYW1lICs9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IGtleSAhPT0gbGFiZWxQcm9wTmFtZSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGlzU3RyaW5nVGFnOiB0eXBlb2YgV3JhcHBlZENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgfSksIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIG5ld1Byb3BzKSk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRW1vdGlvbi5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ3NzUHJvcEludGVybmFsJztcbn1cblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciBhcyBDLCBFbW90aW9uIGFzIEUsIFRoZW1lQ29udGV4dCBhcyBULCBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgYXMgXywgVGhlbWVQcm92aWRlciBhcyBhLCB3aXRoVGhlbWUgYXMgYiwgY3JlYXRlRW1vdGlvblByb3BzIGFzIGMsIGhhc093blByb3BlcnR5IGFzIGgsIHVzZVRoZW1lIGFzIHUsIHdpdGhFbW90aW9uQ2FjaGUgYXMgdyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlQ29udGV4dCwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgaCBhcyBoYXNPd25Qcm9wZXJ0eSwgRSBhcyBFbW90aW9uLCBjIGFzIGNyZWF0ZUVtb3Rpb25Qcm9wcywgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBUIGFzIFRoZW1lQ29udGV4dCB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LTZhODgzZGE5LmJyb3dzZXIuZXNtLmpzJztcbmV4cG9ydCB7IEMgYXMgQ2FjaGVQcm92aWRlciwgVCBhcyBUaGVtZUNvbnRleHQsIGEgYXMgVGhlbWVQcm92aWRlciwgXyBhcyBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUsIHUgYXMgdXNlVGhlbWUsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgYiBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC02YTg4M2RhOS5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCAnLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGluc2VydFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrLCB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrIH0gZnJvbSAnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnO1xuXG52YXIgcGtnID0ge1xuXHRuYW1lOiBcIkBlbW90aW9uL3JlYWN0XCIsXG5cdHZlcnNpb246IFwiMTEuMTAuNVwiLFxuXHRtYWluOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIixcblx0bW9kdWxlOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIixcblx0YnJvd3Nlcjoge1xuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZXNtLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanNcIlxuXHR9LFxuXHRleHBvcnRzOiB7XG5cdFx0XCIuXCI6IHtcblx0XHRcdG1vZHVsZToge1xuXHRcdFx0XHR3b3JrZXI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3Qud29ya2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRicm93c2VyOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9qc3gtcnVudGltZVwiOiB7XG5cdFx0XHRtb2R1bGU6IHtcblx0XHRcdFx0d29ya2VyOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLndvcmtlci5lc20uanNcIixcblx0XHRcdFx0YnJvd3NlcjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5icm93c2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lc20uanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmNqcy5qc1wiXG5cdFx0fSxcblx0XHRcIi4vX2lzb2xhdGVkLWhucnNcIjoge1xuXHRcdFx0bW9kdWxlOiB7XG5cdFx0XHRcdHdvcmtlcjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy53b3JrZXIuZXNtLmpzXCIsXG5cdFx0XHRcdGJyb3dzZXI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZXNtLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRcImRlZmF1bHRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5janMuanNcIlxuXHRcdH0sXG5cdFx0XCIuL2pzeC1kZXYtcnVudGltZVwiOiB7XG5cdFx0XHRtb2R1bGU6IHtcblx0XHRcdFx0d29ya2VyOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUud29ya2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRicm93c2VyOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5lc20uanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5lc20uanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuXHRcdFwiLi90eXBlcy9jc3MtcHJvcFwiOiBcIi4vdHlwZXMvY3NzLXByb3AuZC50c1wiLFxuXHRcdFwiLi9tYWNyb1wiOiBcIi4vbWFjcm8uanNcIlxuXHR9LFxuXHR0eXBlczogXCJ0eXBlcy9pbmRleC5kLnRzXCIsXG5cdGZpbGVzOiBbXG5cdFx0XCJzcmNcIixcblx0XHRcImRpc3RcIixcblx0XHRcImpzeC1ydW50aW1lXCIsXG5cdFx0XCJqc3gtZGV2LXJ1bnRpbWVcIixcblx0XHRcIl9pc29sYXRlZC1obnJzXCIsXG5cdFx0XCJ0eXBlcy8qLmQudHNcIixcblx0XHRcIm1hY3JvLmpzXCIsXG5cdFx0XCJtYWNyby5kLnRzXCIsXG5cdFx0XCJtYWNyby5qcy5mbG93XCJcblx0XSxcblx0c2lkZUVmZmVjdHM6IGZhbHNlLFxuXHRhdXRob3I6IFwiRW1vdGlvbiBDb250cmlidXRvcnNcIixcblx0bGljZW5zZTogXCJNSVRcIixcblx0c2NyaXB0czoge1xuXHRcdFwidGVzdDp0eXBlc2NyaXB0XCI6IFwiZHRzbGludCB0eXBlc1wiXG5cdH0sXG5cdGRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL3J1bnRpbWVcIjogXCJeNy4xOC4zXCIsXG5cdFx0XCJAZW1vdGlvbi9iYWJlbC1wbHVnaW5cIjogXCJeMTEuMTAuNVwiLFxuXHRcdFwiQGVtb3Rpb24vY2FjaGVcIjogXCJeMTEuMTAuNVwiLFxuXHRcdFwiQGVtb3Rpb24vc2VyaWFsaXplXCI6IFwiXjEuMS4xXCIsXG5cdFx0XCJAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrc1wiOiBcIl4xLjAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vdXRpbHNcIjogXCJeMS4yLjBcIixcblx0XHRcIkBlbW90aW9uL3dlYWstbWVtb2l6ZVwiOiBcIl4wLjMuMFwiLFxuXHRcdFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjogXCJeMy4zLjFcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjAuMFwiLFxuXHRcdHJlYWN0OiBcIj49MTYuOC4wXCJcblx0fSxcblx0cGVlckRlcGVuZGVuY2llc01ldGE6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fSxcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiB7XG5cdFx0XHRvcHRpb25hbDogdHJ1ZVxuXHRcdH1cblx0fSxcblx0ZGV2RGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjE4LjVcIixcblx0XHRcIkBkZWZpbml0ZWx5dHlwZWQvZHRzbGludFwiOiBcIjAuMC4xMTJcIixcblx0XHRcIkBlbW90aW9uL2Nzc1wiOiBcIjExLjEwLjVcIixcblx0XHRcIkBlbW90aW9uL2Nzcy1wcmV0dGlmaWVyXCI6IFwiMS4xLjFcIixcblx0XHRcIkBlbW90aW9uL3NlcnZlclwiOiBcIjExLjEwLjBcIixcblx0XHRcIkBlbW90aW9uL3N0eWxlZFwiOiBcIjExLjEwLjVcIixcblx0XHRcImh0bWwtdGFnLW5hbWVzXCI6IFwiXjEuMS4yXCIsXG5cdFx0cmVhY3Q6IFwiMTYuMTQuMFwiLFxuXHRcdFwic3ZnLXRhZy1uYW1lc1wiOiBcIl4xLjEuMVwiLFxuXHRcdHR5cGVzY3JpcHQ6IFwiXjQuNS41XCJcblx0fSxcblx0cmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL3RyZWUvbWFpbi9wYWNrYWdlcy9yZWFjdFwiLFxuXHRwdWJsaXNoQ29uZmlnOiB7XG5cdFx0YWNjZXNzOiBcInB1YmxpY1wiXG5cdH0sXG5cdFwidW1kOm1haW5cIjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QudW1kLm1pbi5qc1wiLFxuXHRwcmVjb25zdHJ1Y3Q6IHtcblx0XHRlbnRyeXBvaW50czogW1xuXHRcdFx0XCIuL2luZGV4LmpzXCIsXG5cdFx0XHRcIi4vanN4LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9qc3gtZGV2LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9faXNvbGF0ZWQtaG5ycy5qc1wiXG5cdFx0XSxcblx0XHR1bWROYW1lOiBcImVtb3Rpb25SZWFjdFwiLFxuXHRcdGV4cG9ydHM6IHtcblx0XHRcdGVudkNvbmRpdGlvbnM6IFtcblx0XHRcdFx0XCJicm93c2VyXCIsXG5cdFx0XHRcdFwid29ya2VyXCJcblx0XHRcdF0sXG5cdFx0XHRleHRyYToge1xuXHRcdFx0XHRcIi4vdHlwZXMvY3NzLXByb3BcIjogXCIuL3R5cGVzL2Nzcy1wcm9wLmQudHNcIixcblx0XHRcdFx0XCIuL21hY3JvXCI6IFwiLi9tYWNyby5qc1wiXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG52YXIganN4ID0gZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG52YXIgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gZmFsc2U7IC8vIG1haW50YWluIHBsYWNlIG92ZXIgcmVyZW5kZXJzLlxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG5cbnZhciBHbG9iYWwgPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCAmJiAoIC8vIGNoZWNrIGZvciBjbGFzc05hbWUgYXMgd2VsbCBzaW5jZSB0aGUgdXNlciBpc1xuICAvLyBwcm9iYWJseSB1c2luZyB0aGUgY3VzdG9tIGNyZWF0ZUVsZW1lbnQgd2hpY2hcbiAgLy8gbWVhbnMgaXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIGNsYXNzTmFtZSBwcm9wXG4gIC8vICRGbG93Rml4TWUgSSBkb24ndCByZWFsbHkgd2FudCB0byBhZGQgaXQgdG8gdGhlIHR5cGUgc2luY2UgaXQgc2hvdWxkbid0IGJlIHVzZWRcbiAgcHJvcHMuY2xhc3NOYW1lIHx8IHByb3BzLmNzcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNzcyBwcm9wIG9uIEdsb2JhbCwgZGlkIHlvdSBtZWFuIHRvIHVzZSB0aGUgc3R5bGVzIHByb3AgaW5zdGVhZD9cIik7XG4gICAgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdLCB1bmRlZmluZWQsIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG4gIC8vIGJ1dCBpdCBpcyBiYXNlZCBvbiBhIGNvbnN0YW50IHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UgYXQgcnVudGltZVxuICAvLyBpdCdzIGVmZmVjdGl2ZWx5IGxpa2UgaGF2aW5nIHR3byBpbXBsZW1lbnRhdGlvbnMgYW5kIHN3aXRjaGluZyB0aGVtIG91dFxuICAvLyBzbyBpdCdzIG5vdCBhY3R1YWxseSBicmVha2luZyBhbnl0aGluZ1xuXG5cbiAgdmFyIHNoZWV0UmVmID0gdXNlUmVmKCk7XG4gIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleSA9IGNhY2hlLmtleSArIFwiLWdsb2JhbFwiOyAvLyB1c2UgY2FzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL2lzc3Vlcy8yNjc1XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgY2FjaGUuc2hlZXQuY29uc3RydWN0b3Ioe1xuICAgICAga2V5OiBrZXksXG4gICAgICBub25jZTogY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IGNhY2hlLnNoZWV0LmNvbnRhaW5lcixcbiAgICAgIHNwZWVkeTogY2FjaGUuc2hlZXQuaXNTcGVlZHlcbiAgICB9KTtcbiAgICB2YXIgcmVoeWRyYXRpbmcgPSBmYWxzZTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uPVxcXCJcIiArIGtleSArIFwiIFwiICsgc2VyaWFsaXplZC5uYW1lICsgXCJcXFwiXVwiKTtcblxuICAgIGlmIChjYWNoZS5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgc2hlZXQuYmVmb3JlID0gY2FjaGUuc2hlZXQudGFnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVoeWRyYXRpbmcgPSB0cnVlOyAvLyBjbGVhciB0aGUgaGFzaCBzbyB0aGlzIG5vZGUgd29uJ3QgYmUgcmVjb2duaXphYmxlIGFzIHJlaHlkcmF0YWJsZSBieSBvdGhlciA8R2xvYmFsLz5zXG5cbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBrZXkpO1xuICAgICAgc2hlZXQuaHlkcmF0ZShbbm9kZV0pO1xuICAgIH1cblxuICAgIHNoZWV0UmVmLmN1cnJlbnQgPSBbc2hlZXQsIHJlaHlkcmF0aW5nXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9O1xuICB9LCBbY2FjaGVdKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hlZXRSZWZDdXJyZW50ID0gc2hlZXRSZWYuY3VycmVudDtcbiAgICB2YXIgc2hlZXQgPSBzaGVldFJlZkN1cnJlbnRbMF0sXG4gICAgICAgIHJlaHlkcmF0aW5nID0gc2hlZXRSZWZDdXJyZW50WzFdO1xuXG4gICAgaWYgKHJlaHlkcmF0aW5nKSB7XG4gICAgICBzaGVldFJlZkN1cnJlbnRbMV0gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHRoaXMgZG9lc24ndCBleGlzdCB0aGVuIGl0IHdpbGwgYmUgbnVsbCBzbyB0aGUgc3R5bGUgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICB2YXIgZWxlbWVudCA9IHNoZWV0LnRhZ3Nbc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBzaGVldC5iZWZvcmUgPSBlbGVtZW50O1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9XG5cbiAgICBjYWNoZS5pbnNlcnQoXCJcIiwgc2VyaWFsaXplZCwgc2hlZXQsIGZhbHNlKTtcbiAgfSwgW2NhY2hlLCBzZXJpYWxpemVkLm5hbWVdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgR2xvYmFsLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25HbG9iYWwnO1xufVxuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplU3R5bGVzKGFyZ3MpO1xufVxuXG52YXIga2V5ZnJhbWVzID0gZnVuY3Rpb24ga2V5ZnJhbWVzKCkge1xuICB2YXIgaW5zZXJ0YWJsZSA9IGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIHZhciBuYW1lID0gXCJhbmltYXRpb24tXCIgKyBpbnNlcnRhYmxlLm5hbWU7IC8vICRGbG93Rml4TWVcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBcIkBrZXlmcmFtZXMgXCIgKyBuYW1lICsgXCJ7XCIgKyBpbnNlcnRhYmxlLnN0eWxlcyArIFwifVwiLFxuICAgIGFuaW06IDEsXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiX0VNT19cIiArIHRoaXMubmFtZSArIFwiX1wiICsgdGhpcy5zdHlsZXMgKyBcIl9FTU9fXCI7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjbHMgPSAnJztcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmcuc3R5bGVzICE9PSB1bmRlZmluZWQgJiYgYXJnLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdZb3UgaGF2ZSBwYXNzZWQgc3R5bGVzIGNyZWF0ZWQgd2l0aCBgY3NzYCBmcm9tIGBAZW1vdGlvbi9yZWFjdGAgcGFja2FnZSB0byB0aGUgYGN4YC5cXG4nICsgJ2BjeGAgaXMgbWVhbnQgdG8gY29tcG9zZSBjbGFzcyBuYW1lcyAoc3RyaW5ncykgc28geW91IHNob3VsZCBjb252ZXJ0IHRob3NlIHN0eWxlcyB0byBhIGNsYXNzIG5hbWUgYnkgcGFzc2luZyB0aGVtIHRvIHRoZSBgY3NzYCByZWNlaXZlZCBmcm9tIDxDbGFzc05hbWVzLz4gY29tcG9uZW50LicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xuXG5mdW5jdGlvbiBtZXJnZShyZWdpc3RlcmVkLCBjc3MsIGNsYXNzTmFtZSkge1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWUpO1xuXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzKTtcbn1cblxudmFyIEluc2VydGlvbiA9IGZ1bmN0aW9uIEluc2VydGlvbihfcmVmKSB7XG4gIHZhciBjYWNoZSA9IF9yZWYuY2FjaGUsXG4gICAgICBzZXJpYWxpemVkQXJyID0gX3JlZi5zZXJpYWxpemVkQXJyO1xuICB2YXIgcnVsZXMgPSB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJlcyA9IGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZEFycltpXSwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgQ2xhc3NOYW1lcyA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcbiAgdmFyIHNlcmlhbGl6ZWRBcnIgPSBbXTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XG4gICAgc2VyaWFsaXplZEFyci5wdXNoKHNlcmlhbGl6ZWQpOyAvLyByZWdpc3RyYXRpb24gaGFzIHRvIGhhcHBlbiBoZXJlIGFzIHRoZSByZXN1bHQgb2YgdGhpcyBtaWdodCBnZXQgY29uc3VtZWQgYnkgYGN4YFxuXG4gICAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIH07XG5cbiAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3ggY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGNhY2hlLnJlZ2lzdGVyZWQsIGNzcywgY2xhc3NuYW1lcyhhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY3NzOiBjc3MsXG4gICAgY3g6IGN4LFxuICAgIHRoZW1lOiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgfTtcbiAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICBoYXNSZW5kZXJlZCA9IHRydWU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWRBcnI6IHNlcmlhbGl6ZWRBcnJcbiAgfSksIGVsZSk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQ2xhc3NOYW1lcy5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ2xhc3NOYW1lcyc7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJzsgLy8gIzE3MjcsICMyOTA1IGZvciBzb21lIHJlYXNvbiBKZXN0IGFuZCBWaXRlc3QgZXZhbHVhdGUgbW9kdWxlcyB0d2ljZSBpZiBzb21lIGNvbnN1bWluZyBtb2R1bGUgZ2V0cyBtb2NrZWRcblxuICB2YXIgaXNUZXN0RW52ID0gdHlwZW9mIGplc3QgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB2aSAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKGlzQnJvd3NlciAmJiAhaXNUZXN0RW52KSB7XG4gICAgLy8gZ2xvYmFsVGhpcyBoYXMgd2lkZSBicm93c2VyIHN1cHBvcnQgLSBodHRwczovL2Nhbml1c2UuY29tLz9zZWFyY2g9Z2xvYmFsVGhpcywgTm9kZS5qcyAxMiBhbmQgbGF0ZXJcbiAgICB2YXIgZ2xvYmFsQ29udGV4dCA9IC8vICRGbG93SWdub3JlXG4gICAgdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgOiBpc0Jyb3dzZXIgPyB3aW5kb3cgOiBnbG9iYWw7XG4gICAgdmFyIGdsb2JhbEtleSA9IFwiX19FTU9USU9OX1JFQUNUX1wiICsgcGtnLnZlcnNpb24uc3BsaXQoJy4nKVswXSArIFwiX19cIjtcblxuICAgIGlmIChnbG9iYWxDb250ZXh0W2dsb2JhbEtleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybignWW91IGFyZSBsb2FkaW5nIEBlbW90aW9uL3JlYWN0IHdoZW4gaXQgaXMgYWxyZWFkeSBsb2FkZWQuIFJ1bm5pbmcgJyArICdtdWx0aXBsZSBpbnN0YW5jZXMgbWF5IGNhdXNlIHByb2JsZW1zLiBUaGlzIGNhbiBoYXBwZW4gaWYgbXVsdGlwbGUgJyArICd2ZXJzaW9ucyBhcmUgdXNlZCwgb3IgaWYgbXVsdGlwbGUgYnVpbGRzIG9mIHRoZSBzYW1lIHZlcnNpb24gYXJlICcgKyAndXNlZC4nKTtcbiAgICB9XG5cbiAgICBnbG9iYWxDb250ZXh0W2dsb2JhbEtleV0gPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCB7IENsYXNzTmFtZXMsIEdsb2JhbCwganN4IGFzIGNyZWF0ZUVsZW1lbnQsIGNzcywganN4LCBrZXlmcmFtZXMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///96923
`)},55212:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ slots_Logo; }
});

// EXTERNAL MODULE: ./.dumi/tmp-production/dumi/exports.ts + 21 modules
var dumi_exports = __webpack_require__(59934);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/Logo/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/Logo/index.js




var Logo = function Logo() {
  var _useSiteData = (0,dumi_exports/* useSiteData */.WF)(),
      themeConfig = _useSiteData.themeConfig;

  var locale = (0,dumi_exports/* useLocale */.bU)();
  return /*#__PURE__*/react.createElement(dumi_exports/* Link */.rU, {
    className: "dumi-default-logo",
    to: 'base' in locale ? locale.base : '/'
  }, /*#__PURE__*/react.createElement("img", {
    src: themeConfig.logo || 'data:image/png;base64,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',
    alt: themeConfig.name
  }), themeConfig.name);
};

/* harmony default export */ var slots_Logo = (Logo);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUyMTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O0FDQW9EO0FBQzFCO0FBQ0o7O0FBRXRCO0FBQ0EscUJBQXFCLG9DQUFXO0FBQ2hDOztBQUVBLGVBQWUsa0NBQVM7QUFDeEIsc0JBQXNCLG1CQUFtQixDQUFDLHlCQUFJO0FBQzlDO0FBQ0E7QUFDQSxHQUFHLGVBQWUsbUJBQW1CO0FBQ3JDLDZDQUE2QztBQUM3QztBQUNBLEdBQUc7QUFDSDs7QUFFQSwrQ0FBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2R1bWkvdGhlbWUtZGVmYXVsdC9zbG90cy9Mb2dvL2luZGV4Lmxlc3M/YTk0NCIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvZHVtaS90aGVtZS1kZWZhdWx0L3Nsb3RzL0xvZ28vaW5kZXguanM/YWNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBMaW5rLCB1c2VMb2NhbGUsIHVzZVNpdGVEYXRhIH0gZnJvbSAnZHVtaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG5cbnZhciBMb2dvID0gZnVuY3Rpb24gTG9nbygpIHtcbiAgdmFyIF91c2VTaXRlRGF0YSA9IHVzZVNpdGVEYXRhKCksXG4gICAgICB0aGVtZUNvbmZpZyA9IF91c2VTaXRlRGF0YS50aGVtZUNvbmZpZztcblxuICB2YXIgbG9jYWxlID0gdXNlTG9jYWxlKCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7XG4gICAgY2xhc3NOYW1lOiBcImR1bWktZGVmYXVsdC1sb2dvXCIsXG4gICAgdG86ICdiYXNlJyBpbiBsb2NhbGUgPyBsb2NhbGUuYmFzZSA6ICcvJ1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgc3JjOiB0aGVtZUNvbmZpZy5sb2dvIHx8ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlRQUFBQ0NDQU1BQUFDd3c1Q0lBQUFDZjFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy8vOFlrUDhBQUFBQ0N4TWFtdi82K3ZvYUdob1hpL1lZanY4YW9QOGNxLzhkci84Ym8vOGNxUDhicHY4WWt2OGRydjhCQXdVY3JQOFpsZjhYamYvczdPekx5OHNjcC84YW5QOFptUC9kM2QwQkJBcmc0T0RUMDlPN3U3c0VHQ3NLQ2dvYW5mOFlsUC84L1B6MDlQVEl5TWdNVElWMWRYVUdLRVZFUkVRME5EUU9EZzRHQmdZZHN2OGRzZjhabC8vbTV1WVZnT1hqNCtNV2d0ZlcxdFlUYzg3QndjRVJiTFd6czdPdnI2K25wNmNRWDZPZ29LQ1RrNU1NU1hsd2NIQnJhMnRpWW1JVkZSVWV0Zi8zOS9mcDZla1doT2tYaStRVmZOdlkyTmpQejg4VGRjVVNiN3U2dXJxM3Q3Y1BZSzBOVUpHUWtKQ0xpNHR0YlcwSk8yY0lORnRWVlZWUlVWRUhNRkVITEVzNk9qb0VIREVpSWlJY0hCd1hqL3Z4OGZFV2grNFNiOGdSYkwrcnE2dXBxYWtPVlppV2xwYUppWW1HaG9ZTVNJRjlmWDE1ZVhrS1BuUUxSSEpNVEV4SFIwYzlQVDBGSHprcUtpb21KaVlFRnlVQkJ3OGJvdmZ1N3U0V2h0NFVlZHNVZU1yRnhjVzl2YjBSWnJPa3BLU2FtcG9QWFpxQWdJQUxRbXRsWldVSk9HSlpXVmtJTUZjRklVRXhNVEV3TURBdExTMERFaDhabC92NCtQZ1hqL1FXaHZFV2h2QVlrdThZanV3VWZOY1VmTkFWZmMwUmFMa1NhS3NSWjZrUFdxRU5VWWxiVzFzQ0VCaGtTUENrQUFBQU9IUlNUbE1BODd5NEJlS3JsdGJGblVEbzBNQ3VwNkQ2N3Q3YXlaS0dlbXRtV1M4ckV3TE5zbzF3VkVwRkdhUitVRFVsSHdtQllsczVpMW9OL0RNeW00WUFBQWZUU1VSQlZIamF4Tm5kUzFOeEhNZnhYNXM2dDFLejFLenN1YXpNbnFqZ3l4djAzb3Z0UXJZeFVCRWZMa1JFVkJRZjBBc0ZCUlVVUXZFaVNWRlEwWXN1aWlJaXFLQy9vSCtvMzFsemp0UFpnNTV6dHRmVk5uYng1ZmZ3K1g1M3BteDVVRmwyK1hMWjR6cFZPUFdsSkZUbnRZeWlCd0YvVmJYMzlTdjl1cFlVOS9RSGpiWGU2cXFheXJybnlsWFhpMGtvdjNHVnVGaU11TnFiSGhJdTNGY3V1b2haWitqRGg3bWRYa3dxbEd0S01HbU9TRnpyR2lZZTVaTDQrdmRzZC9TSEZ5WXh0SVFsSWRpRDRmdENhMzlvc1RseFJ0endITzF0VU9MbTBYWWs2VDNhc01SdGRLSGRVczZxditMMWwvdktnYWsyU1lqcU4rMXlZZzJHNU5nUjRQZDUvRjdmazlzTzNZaFNrb1lrYVc0MEtDazJSajlLVW9pa3FtdE9uOFlweWRFNko3eEZ5cTV5VWh4SWp2WkpjVWZaNUVPYjZveEdRbVBkdEVRbFI0TXh1cGM2SW9PZHpXaVZ5cGFiYUYxQmllc0lTODc2T2lTdWZSWHR2TzBEY1NpMmRBTitaY2NsWUZac0NhT3BzM25ZVU9LcHJEVGlTV3pxQWlvQ25wSVg5ZXAwM3B4a3c3all0TVd4MHBkbjdKYjJpMWppeE4zY002T0dGQ3RpMHpncHlvcE9zdzZ4aVpIb3lISVBMSWhOSGREN2JXUitjN3puRkQzK1BOcCt2eGhtUmtOaTI4Qm9XQXpCUGJRSEtoZGxRTGU0b2dzb1ZUbDRpallqcm1pS0FUZFVkdmZqaDlFbHk4RFZIRnZXZTNISk1CQlEyUVdBZCtLU2VlQnhqdHV4S0M3WnpHMDdIdDBEdXNRbGZ3RGZzMndaNGIyRVlWQmNFU0hPODFCbGNJV0VTWEhGVjdRc3M1YVhZMUZ4UlNqN0w3UUFodjN0c2FWQk1WbjhPdTFNRlV0alczc1lLakwwak82UVdKaUE3aVp4eXNCYnREcGxwUlQ0S1piUVdrVWJIUk1uR0ZVVUt3dU5hSDFpYVJKK1RmOGJEYnFjV0pIMkh1Q1YrbDlEcGt1eHRkc3VHbHBZSE5BSjFGcU5Nam5FOVFvY09YSkNQd0ozMDl6UFQ5bGE4ZTV5VUp3d0MvalRCTldRNUVrSXFFeXpIUk9TSnp2V1NlRkRXNU04T1VBcnNkZ01xMkVtYW5PeUdCNFdTeU1ZQWhacDJUd2tKb3V3Mm1adm11c1VTd3RyYUEvL203RFhaOFNzQnhpUU01dEdTeE51djMrWlUvTm1JcGZOOXFEWHhwMXNPNExETnJFMjAySjZjSEUxVFZxMmYxdU5pQTM5SzkvN0pKMEp3R2U2bnZPU1o0T0ExL1IwYkZieXJCV29NVVgybk9UWkFPQTNwY1NYakZXN1VPSm5VMTdWQVllWnY5OHBUdnNCMUtzVFJWWEF0cVFWQS9yRldTTm8xMVNLaXVSWVpla25FQlJuN1dKNHJaS3VYOHBjUk92Qmo2ZzRyTFVaUThOSllCbzJKYi9heDJLa2hLWWY2STFJM29XbmdLcVVoZmdrQlRDTDFwaWNzMWVsSUNhUy81WTlqaytYQmRFQmVKS2hIWkdDQ0xaQVdUSWtCcVFnTmxyK05iR2kyd0hnUzF0VEFiUU5BeFczaTFSNThXV2dkNzI1QU5aN2dYUEZOYXFhZ3J2d3QxdDdhVzBxaU9JQVBsRXJQcUpDcTZKV3JXOHIxYXIxeGYwbjROeG5ucENFTEVLeUNObWtKWlNRUlNDYlFsdG9vUzRzVkFwaUMxMFUya1doRlJVRUVkR0Y0dnVOSDhnN2M5TlEycGplcFBjQi9yNUFEamxuenAyWk0rUU1YSGVZYisxV2ZPNWhpNVFmdmVZZTMzWEo0K2Q4YTNNTlFIYkk3NUtoTXQ5ejl3RjRGUk5jSWkzd085NGJBSEppUUhDSE5nbWdoM1FEOEQxTUNLNkkrS2VOQ1VnYmdGRlJjRVg4UXdob3YwMTRvL2p1VWxFb3hlcXJncHNBN29XcDRBWnBybnB2MUFOZ1NoRmNvVTRhKzM2ak1nT3VWR1ltbnVKMVdiMGhLV3FDQzhRQ2dJNGRxeWZSYk5DRm9xREJYN1h6NkMwQVM2NjBLM1VLUUNkaHVxQWJkcUZUK0I4bUFYUVRiaHRicE03bmc0WW4xb3l0T3dGTXU1QVA5UUdBYTRRejhsRnd2RldJSDZHN1FqaWpjOC9MRHVlRHl2ZDR6MTUxRVlCdndPRitsUkZUQUs2VEdpK0FDV2RMazBvekFOcXZrcG9qQUZKS1JuQ1NsRnQzbThwTGM5YkpUeWxWbjY0dHk5ckpmRWwxY3BWS2JIM3VKMnYxUWxlVXFPQ0kyaDl4ZWVQMGFWcUxDQTRKU0xrNnM3aHU2Q2JrcU9BSUdweUI3aVJaNXhMdkZXbEhFa0lUeWpLLzQxL3Y5aDBBQzNsbmdwQ3owUFhXZjB5RFVjbUJoRkR0MFQvZmx4OENrTkw4VkxBWmpVaHZBSFNRZWs1QXR5QUxkcVA1ZTlCZGJQQ2tac2J1RlJLVnZsUkhzL1cxQWZDOTAyeU5nb3JpV3dDZXF3MWZTTCtKMlZrV05CRjh2Y2tyNm1QUTNaY2p0a1ZCQS8zejRKdTZCczVBTnpjazJCUUZwVU1UeGxWWlE0ZWdlOTV2VXhSVUhvUE9lNXMwMU9XQmJyeWYyaEVGRFg0RmM0VnM0Z2FZWjNaRVFlWEJKUGdNY0ZQbndZekpWbWVFNmpHc0dDTkFFL3JBbFBJQmFta01RdjlZQ0xwenhKUmpZTXI1QkxYeWc1RXZnVGxLVE9vRWt3MkxVY3Q2ZFR6NG9qcUNOTzA0bU1tNFpFMTUwbWhNdVErakhwcHdBVXhxVU01UUs5cWtQTElFNWpocHlna3ZtSEpZaVc0NUZhTDhJd21kWnk5cFV0YzJNSzlIdHZnbG9abmdKeU1WcDN0Sjg0NkFTYjdRMU5ZcmcxSk4rdWtEczRlMDVMd0hUTzViVUtHMHRSQkVlWEFLekozcnBFWGRCOEM5ZkJJV0tXMGhoT0JJQmR5Mks2UjExenZBTFk2RUZZRTIxeUhGNE9kS0VrejdPYklsWFh2QWhWNE9xdW9BcGFZYnBDbzlxYXlBMjlsTHR1cmliaGltU2dPU0ZqRzFJTFJ3WW53U2huMDl4QXJuVDhQd2RuSE1MNm4raGwrMmdEOFdqaityTE1Pd3E0OVk1ZFpwVktVV1MrK1ZjQ3dkQ2RUNS9VaGNrNVNINDVWcFZPM3FKRmJxMlk1VnZseTJWQmdRWTVLcUtXSTZIWStuMDZLaXFWSk1TUXlQLzM3d0I2djI5eEdyblRoeUVEV2g1ZHlyK2ZKc2NiUXcvT2pSY0dHME9Gdk8zbitRU3FLbTdleGxZZ3N2TmdvbGt5RnMxSEdWMk9RZ1RHc2pOam5WQnRPOE93ajNud2JoZ1dudHRnV3h5MlBhb1dhQytBdUFYcVdZS0h1cE1nQUFBQUJKUlU1RXJrSmdnZz09JyxcbiAgICBhbHQ6IHRoZW1lQ29uZmlnLm5hbWVcbiAgfSksIHRoZW1lQ29uZmlnLm5hbWUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///55212
`)},38097:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ slots_SearchBar; }
});

// UNUSED EXPORTS: SearchInput, SearchMask

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/inline-svg/outlined/arrow-down.svg
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArrowDown = (props) => /* @__PURE__ */ react.createElement("svg", __spreadValues({ viewBox: "64 64 896 896" }, props), /* @__PURE__ */ react.createElement("path", { d: "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" }));

/* harmony default export */ var arrow_down = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=");

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/inline-svg/outlined/arrow-up.svg
var arrow_up_defProp = Object.defineProperty;
var arrow_up_getOwnPropSymbols = Object.getOwnPropertySymbols;
var arrow_up_hasOwnProp = Object.prototype.hasOwnProperty;
var arrow_up_propIsEnum = Object.prototype.propertyIsEnumerable;
var arrow_up_defNormalProp = (obj, key, value) => key in obj ? arrow_up_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var arrow_up_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (arrow_up_hasOwnProp.call(b, prop))
      arrow_up_defNormalProp(a, prop, b[prop]);
  if (arrow_up_getOwnPropSymbols)
    for (var prop of arrow_up_getOwnPropSymbols(b)) {
      if (arrow_up_propIsEnum.call(b, prop))
        arrow_up_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgArrowUp = (props) => /* @__PURE__ */ react.createElement("svg", arrow_up_spreadValues({ viewBox: "64 64 896 896" }, props), /* @__PURE__ */ react.createElement("path", { d: "M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z" }));

/* harmony default export */ var arrow_up = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+");

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/inline-svg/outlined/search.svg
var search_defProp = Object.defineProperty;
var search_getOwnPropSymbols = Object.getOwnPropertySymbols;
var search_hasOwnProp = Object.prototype.hasOwnProperty;
var search_propIsEnum = Object.prototype.propertyIsEnumerable;
var search_defNormalProp = (obj, key, value) => key in obj ? search_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var search_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (search_hasOwnProp.call(b, prop))
      search_defNormalProp(a, prop, b[prop]);
  if (search_getOwnPropSymbols)
    for (var prop of search_getOwnPropSymbols(b)) {
      if (search_propIsEnum.call(b, prop))
        search_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgSearch = (props) => /* @__PURE__ */ react.createElement("svg", search_spreadValues({ viewBox: "64 64 896 896" }, props), /* @__PURE__ */ react.createElement("path", { d: "M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" }));

/* harmony default export */ var search = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=");

// EXTERNAL MODULE: ./.dumi/tmp-production/dumi/exports.ts + 21 modules
var dumi_exports = __webpack_require__(59934);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/inline-svg/outlined/inbox.svg
var inbox_defProp = Object.defineProperty;
var inbox_getOwnPropSymbols = Object.getOwnPropertySymbols;
var inbox_hasOwnProp = Object.prototype.hasOwnProperty;
var inbox_propIsEnum = Object.prototype.propertyIsEnumerable;
var inbox_defNormalProp = (obj, key, value) => key in obj ? inbox_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var inbox_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (inbox_hasOwnProp.call(b, prop))
      inbox_defNormalProp(a, prop, b[prop]);
  if (inbox_getOwnPropSymbols)
    for (var prop of inbox_getOwnPropSymbols(b)) {
      if (inbox_propIsEnum.call(b, prop))
        inbox_defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgInbox = (props) => /* @__PURE__ */ react.createElement("svg", inbox_spreadValues({ viewBox: "0 0 1024 1024" }, props), /* @__PURE__ */ react.createElement("path", { d: "m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" }));

/* harmony default export */ var inbox = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=");

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/SearchResult/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/SearchResult/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var IconTitle = function IconTitle() {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"
  }));
};

var IconPage = function IconPage() {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"
  }));
};

var IconContent = function IconContent() {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"
  }));
};

var IconDemo = function IconDemo() {
  return /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"
  }));
};

var ICONS_MAPPING = {
  title: IconTitle,
  page: IconPage,
  content: IconContent,
  demo: IconDemo
};

var Highlight = function Highlight(props) {
  return /*#__PURE__*/react.createElement(react.Fragment, null, props.texts.map(function (text, idx) {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: idx
    }, text.highlighted ? /*#__PURE__*/react.createElement("mark", null, text.text) : text.text);
  }));
};

var useFlatSearchData = function useFlatSearchData(data) {
  var update = (0,react.useCallback)(function () {
    var activeIndex = 0;
    var ret = [];
    data.forEach(function (item) {
      if (item.title) {
        ret.push({
          type: 'title',
          value: {
            title: item.title
          }
        });
      }

      item.hints.forEach(function (hint) {
        ret.push({
          type: 'hint',
          activeIndex: activeIndex++,
          value: hint
        });
      });
    });
    return [ret, activeIndex];
  }, [data]);

  var _useState = (0,react.useState)(update),
      _useState2 = _slicedToArray(_useState, 2),
      flatData = _useState2[0],
      setFlatData = _useState2[1];

  (0,react.useEffect)(function () {
    setFlatData(update);
  }, [data]);
  return flatData;
};

var SearchResult = function SearchResult(props) {
  var _useFlatSearchData = useFlatSearchData(props.data),
      _useFlatSearchData2 = _slicedToArray(_useFlatSearchData, 2),
      data = _useFlatSearchData2[0],
      histsCount = _useFlatSearchData2[1];

  var _useState3 = (0,react.useState)(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1];

  (0,react.useEffect)(function () {
    var handler = function handler(ev) {
      // TODO: scroll into view for invisible items
      if (ev.key === 'ArrowDown') {
        setActiveIndex((activeIndex + 1) % histsCount);
      } else if (ev.key === 'ArrowUp') {
        setActiveIndex((activeIndex + histsCount - 1) % histsCount);
      } else if (ev.key === 'Enter' && activeIndex >= 0) {
        var _props$onItemSelect;

        var _item = data.find(function (item) {
          return item.type === 'hint' && item.activeIndex === activeIndex;
        }).value;
        dumi_exports/* history.push */.m8.push(_item.link);
        (_props$onItemSelect = props.onItemSelect) === null || _props$onItemSelect === void 0 ? void 0 : _props$onItemSelect.call(props, _item);
        document.activeElement.blur();
      }

      if (['Escape', 'Enter'].includes(ev.key)) {
        setActiveIndex(-1);
      }
    };

    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-search-result",
    onMouseEnter: function onMouseEnter() {
      return setActiveIndex(-1);
    } // for ux, only hide result when mouse up
    ,
    onMouseDownCapture: function onMouseDownCapture(ev) {
      return ev.preventDefault();
    },
    onMouseUpCapture: function onMouseUpCapture() {
      document.activeElement.blur();
    }
  }, Boolean(props.data.length || props.loading) ? /*#__PURE__*/react.createElement("dl", null, data.map(function (item, i) {
    return item.type === 'title' ? /*#__PURE__*/react.createElement("dt", {
      key: String(i)
    }, item.value.title) : /*#__PURE__*/react.createElement("dd", {
      key: String(i)
    }, /*#__PURE__*/react.createElement(dumi_exports/* Link */.rU, {
      to: item.value.link,
      "data-active": activeIndex === item.activeIndex || undefined,
      onClick: function onClick() {
        var _props$onItemSelect2;

        return (_props$onItemSelect2 = props.onItemSelect) === null || _props$onItemSelect2 === void 0 ? void 0 : _props$onItemSelect2.call(props, item.value);
      }
    }, /*#__PURE__*/react.createElement(ICONS_MAPPING[item.value.type]), /*#__PURE__*/react.createElement("h4", null, /*#__PURE__*/react.createElement(Highlight, {
      texts: item.value.highlightTitleTexts
    })), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement(Highlight, {
      texts: item.value.highlightTexts
    }))));
  })) : /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-search-empty"
  }, /*#__PURE__*/react.createElement(SvgInbox, null), /*#__PURE__*/react.createElement(dumi_exports/* FormattedMessage */._H, {
    id: "search.not.found"
  })));
};

/* harmony default export */ var slots_SearchResult = (SearchResult);
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/SearchBar/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/SearchBar/Input.js


var Input = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var intl = (0,dumi_exports/* useIntl */.YB)();
  var imeWaiting = (0,react.useRef)(false);
  var nativeInputRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, function () {
    return nativeInputRef.current;
  });
  return /*#__PURE__*/react.createElement("input", {
    className: "dumi-default-search-bar-input",
    onCompositionStart: function onCompositionStart() {
      return imeWaiting.current = true;
    },
    onCompositionEnd: function onCompositionEnd(ev) {
      imeWaiting.current = false; // special case: press Enter open IME panel will not trigger onChange

      props.onChange(ev.currentTarget.value);
    },
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onKeyDown: function onKeyDown(ev) {
      if (['ArrowDown', 'ArrowUp'].includes(ev.key)) ev.preventDefault(); // esc to blur input

      if (ev.key === 'Escape' && !imeWaiting.current) ev.currentTarget.blur();
    },
    onChange: function onChange(ev) {
      // wait for onCompositionEnd event be triggered
      setTimeout(function () {
        if (!imeWaiting.current) {
          props.onChange(ev.target.value);
        }
      }, 1);
    },
    placeholder: intl.formatMessage({
      id: 'header.search.placeholder'
    }),
    ref: nativeInputRef
  });
});
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/SearchBar/Mask.js

var Mask = function Mask(props) {
  (0,react.useEffect)(function () {
    if (props.visible) {
      document.body.style.overflow = 'hidden';
    } else {
      var _props$onClose;

      document.body.style.overflow = '';
      (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props);
    }
  }, [props.visible]);
  return props.visible ? /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-search-modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-search-modal-mask",
    onClick: props.onMaskClick
  }), /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-search-modal-content"
  }, props.children)) : null;
};
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/slots/SearchBar/index.js
var _navigator;

function SearchBar_slicedToArray(arr, i) { return SearchBar_arrayWithHoles(arr) || SearchBar_iterableToArrayLimit(arr, i) || SearchBar_unsupportedIterableToArray(arr, i) || SearchBar_nonIterableRest(); }

function SearchBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SearchBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SearchBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SearchBar_arrayLikeToArray(o, minLen); }

function SearchBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SearchBar_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SearchBar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== 'undefined' ? (_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.platform : '');

var SearchBar = function SearchBar() {
  var _useState = (0,react.useState)(false),
      _useState2 = SearchBar_slicedToArray(_useState, 2),
      focusing = _useState2[0],
      setFocusing = _useState2[1];

  var inputRef = (0,react.useRef)(null);
  var modalInputRef = (0,react.useRef)(null);

  var _useState3 = (0,react.useState)('\u2318'),
      _useState4 = SearchBar_slicedToArray(_useState3, 2),
      symbol = _useState4[0],
      setSymbol = _useState4[1];

  var _useSiteSearch = (0,dumi_exports/* useSiteSearch */.OO)(),
      keywords = _useSiteSearch.keywords,
      setKeywords = _useSiteSearch.setKeywords,
      result = _useSiteSearch.result,
      loading = _useSiteSearch.loading;

  var _useState5 = (0,react.useState)(false),
      _useState6 = SearchBar_slicedToArray(_useState5, 2),
      modalVisible = _useState6[0],
      setModalVisible = _useState6[1];

  (0,react.useEffect)(function () {
    // why put useEffect?
    // to avoid Text content mismatch between server & client in ssr
    if (!isAppleDevice) {
      setSymbol('Ctrl');
    }

    var handler = function handler(ev) {
      if ((isAppleDevice ? ev.metaKey : ev.ctrlKey) && ev.key === 'k' || ev.key === '/') {
        ev.preventDefault();

        if (inputRef.current) {
          var _inputRef$current$get = inputRef.current.getBoundingClientRect(),
              top = _inputRef$current$get.top,
              bottom = _inputRef$current$get.bottom,
              left = _inputRef$current$get.left,
              right = _inputRef$current$get.right;

          var isInViewport = top >= 0 && left >= 0 && bottom <= window.innerHeight && right <= window.innerWidth;

          if (isInViewport) {
            inputRef.current.focus();
          } else {
            setKeywords('');
            setModalVisible(true);
            setTimeout(function () {
              var _modalInputRef$curren;

              (_modalInputRef$curren = modalInputRef.current) === null || _modalInputRef$curren === void 0 ? void 0 : _modalInputRef$curren.focus();
            });
          }
        }
      }

      if (ev.key === 'Escape') {
        ev.preventDefault();
        setModalVisible(false);
      }
    };

    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-search-bar"
  }, /*#__PURE__*/react.createElement(SvgSearch, {
    className: "dumi-default-search-bar-svg"
  }), /*#__PURE__*/react.createElement(Input, {
    onFocus: function onFocus() {
      return setFocusing(true);
    },
    onBlur: function onBlur() {
      // wait for item click
      setTimeout(function () {
        setFocusing(false);
      }, 1);
    },
    onChange: function onChange(keywords) {
      return setKeywords(keywords);
    },
    ref: inputRef
  }), /*#__PURE__*/react.createElement("span", {
    className: "dumi-default-search-shortcut"
  }, symbol, " K"), keywords.trim() && focusing && (result.length || !loading) && !modalVisible && /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-search-popover"
  }, /*#__PURE__*/react.createElement("section", null, /*#__PURE__*/react.createElement(slots_SearchResult, {
    data: result,
    loading: loading
  }))), /*#__PURE__*/react.createElement(Mask, {
    visible: modalVisible,
    onMaskClick: function onMaskClick() {
      setModalVisible(false);
    },
    onClose: function onClose() {
      return setKeywords('');
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement(SvgSearch, {
    className: "dumi-default-search-bar-svg"
  }), /*#__PURE__*/react.createElement(Input, {
    onFocus: function onFocus() {
      return setFocusing(true);
    },
    onBlur: function onBlur() {
      // wait for item click
      setTimeout(function () {
        setFocusing(false);
      }, 1);
    },
    onChange: function onChange(keywords) {
      return setKeywords(keywords);
    },
    ref: modalInputRef
  })), /*#__PURE__*/react.createElement(slots_SearchResult, {
    data: result,
    loading: loading,
    onItemSelect: function onItemSelect() {
      setModalVisible(false);
    }
  }), /*#__PURE__*/react.createElement("footer", null, /*#__PURE__*/react.createElement("ul", {
    className: "dumi-default-search-modal-commands"
  }, /*#__PURE__*/react.createElement("li", {
    className: "dumi-default-search-modal-commands-arrow"
  }, /*#__PURE__*/react.createElement("span", {
    className: "dumi-default-search-modal-shortcut"
  }, /*#__PURE__*/react.createElement(SvgArrowUp, {
    width: "10px",
    height: "10px",
    fill: "rgba(0, 0, 0, 0.45)"
  })), /*#__PURE__*/react.createElement("span", {
    className: "dumi-default-search-modal-shortcut"
  }, /*#__PURE__*/react.createElement(SvgArrowDown, {
    width: "10px",
    height: "10px",
    fill: "rgba(0, 0, 0, 0.45)"
  })), /*#__PURE__*/react.createElement("span", {
    className: "dumi-default-search-modal-commands-text"
  }, "to navigate")), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("span", {
    className: "dumi-default-search-modal-shortcut"
  }, "esc"), /*#__PURE__*/react.createElement("span", {
    className: "dumi-default-search-modal-commands-text"
  }, "to close"))))));
};

/* harmony default export */ var slots_SearchBar = (SearchBar);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEdBQUcsaUJBQWlCLG1CQUFtQjtBQUN2QztBQUNBLEdBQUcsZUFBZSxtQkFBbUIsQ0FBQyxZQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaUJBQWlCLG1CQUFtQjtBQUN2QztBQUNBLEdBQUcsZ0NBQWdDLG1CQUFtQiwwQkFBMEIsbUJBQW1CO0FBQ25HO0FBQ0EsR0FBRyx1QkFBdUIsbUJBQW1CO0FBQzdDO0FBQ0EsR0FBRztBQUNIOztBQUVBLG9EQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2lubGluZS1zdmcvb3V0bGluZWQvYXJyb3ctZG93bi5zdmc/ODM2MCIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2lubGluZS1zdmcvb3V0bGluZWQvYXJyb3ctdXAuc3ZnP2E2OTIiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9pbmxpbmUtc3ZnL291dGxpbmVkL3NlYXJjaC5zdmc/NzdkZSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2lubGluZS1zdmcvb3V0bGluZWQvaW5ib3guc3ZnPzI5YWYiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2R1bWkvdGhlbWUtZGVmYXVsdC9zbG90cy9TZWFyY2hSZXN1bHQvaW5kZXgubGVzcz80MTk2Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9kdW1pL3RoZW1lLWRlZmF1bHQvc2xvdHMvU2VhcmNoUmVzdWx0L2luZGV4LmpzP2UwY2UiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2R1bWkvdGhlbWUtZGVmYXVsdC9zbG90cy9TZWFyY2hCYXIvaW5kZXgubGVzcz85OWJhIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9kdW1pL3RoZW1lLWRlZmF1bHQvc2xvdHMvU2VhcmNoQmFyL0lucHV0LmpzP2FmZTYiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2R1bWkvdGhlbWUtZGVmYXVsdC9zbG90cy9TZWFyY2hCYXIvTWFzay5qcz9jMDZjIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9kdW1pL3RoZW1lLWRlZmF1bHQvc2xvdHMvU2VhcmNoQmFyL2luZGV4LmpzP2M0MDMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTdmdBcnJvd0Rvd24gPSAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9fc3ByZWFkVmFsdWVzKHsgdmlld0JveDogXCI2NCA2NCA4OTYgODk2XCIgfSwgcHJvcHMpLCAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk04NjIgNDY1LjNoLTgxYy00LjYgMC05IDItMTIuMSA1LjVMNTUwIDcyMy4xVjE2MGMwLTQuNC0zLjYtOC04LThoLTYwYy00LjQgMC04IDMuNi04IDh2NTYzLjFMMjU1LjEgNDcwLjhjLTMtMy41LTcuNC01LjUtMTIuMS01LjVoLTgxYy02LjggMC0xMC41IDguMS02IDEzLjJMNDg3LjkgODYxYTMxLjk2IDMxLjk2IDAgMCAwIDQ4LjMgMEw4NjggNDc4LjVjNC41LTUuMi44LTEzLjItNi0xMy4yelwiIH0pKTtcbmV4cG9ydCB7IFN2Z0Fycm93RG93biBhcyBSZWFjdENvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyYVdWM1FtOTRQU0kyTkNBMk5DQTRPVFlnT0RrMklqNDhjR0YwYUNCa1BTSk5PRFl5SURRMk5TNHphQzA0TVdNdE5DNDJJREF0T1NBeUxURXlMakVnTlM0MVREVTFNQ0EzTWpNdU1WWXhOakJqTUMwMExqUXRNeTQyTFRndE9DMDRhQzAyTUdNdE5DNDBJREF0T0NBekxqWXRPQ0E0ZGpVMk15NHhUREkxTlM0eElEUTNNQzQ0WXkwekxUTXVOUzAzTGpRdE5TNDFMVEV5TGpFdE5TNDFhQzA0TVdNdE5pNDRJREF0TVRBdU5TQTRMakV0TmlBeE15NHlURFE0Tnk0NUlEZzJNV0V6TVM0NU5pQXpNUzQ1TmlBd0lEQWdNQ0EwT0M0eklEQk1PRFk0SURRM09DNDFZelF1TlMwMUxqSXVPQzB4TXk0eUxUWXRNVE11TW5vaUx6NDhMM04yWno0PVwiO1xuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTdmdBcnJvd1VwID0gKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfX3NwcmVhZFZhbHVlcyh7IHZpZXdCb3g6IFwiNjQgNjQgODk2IDg5NlwiIH0sIHByb3BzKSwgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6XCIgfSkpO1xuZXhwb3J0IHsgU3ZnQXJyb3dVcCBhcyBSZWFjdENvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyYVdWM1FtOTRQU0kyTkNBMk5DQTRPVFlnT0RrMklqNDhjR0YwYUNCa1BTSk5PRFk0SURVME5TNDFJRFV6Tmk0eElERTJNMkV6TVM0NU5pQXpNUzQ1TmlBd0lEQWdNQzAwT0M0eklEQk1NVFUySURVME5TNDFZVGN1T1RjZ055NDVOeUF3SURBZ01DQTJJREV6TGpKb09ERmpOQzQySURBZ09TMHlJREV5TGpFdE5TNDFURFEzTkNBek1EQXVPVlk0TmpSak1DQTBMalFnTXk0MklEZ2dPQ0E0YURZd1l6UXVOQ0F3SURndE15NDJJRGd0T0ZZek1EQXVPV3d5TVRndU9TQXlOVEl1TTJNeklETXVOU0EzTGpRZ05TNDFJREV5TGpFZ05TNDFhRGd4WXpZdU9DQXdJREV3TGpVdE9DQTJMVEV6TGpKNklpOCtQQzl6ZG1jK1wiO1xuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTdmdTZWFyY2ggPSAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9fc3ByZWFkVmFsdWVzKHsgdmlld0JveDogXCI2NCA2NCA4OTYgODk2XCIgfSwgcHJvcHMpLCAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk05MDkuNiA4NTQuNSA2NDkuOSA1OTQuOEM2OTAuMiA1NDIuNyA3MTIgNDc5IDcxMiA0MTJjMC04MC4yLTMxLjMtMTU1LjQtODcuOS0yMTIuMS01Ni42LTU2LjctMTMyLTg3LjktMjEyLjEtODcuOXMtMTU1LjUgMzEuMy0yMTIuMSA4Ny45QzE0My4yIDI1Ni41IDExMiAzMzEuOCAxMTIgNDEyYzAgODAuMSAzMS4zIDE1NS41IDg3LjkgMjEyLjFDMjU2LjUgNjgwLjggMzMxLjggNzEyIDQxMiA3MTJjNjcgMCAxMzAuNi0yMS44IDE4Mi43LTYybDI1OS43IDI1OS42YTguMiA4LjIgMCAwIDAgMTEuNiAwbDQzLjYtNDMuNWE4LjIgOC4yIDAgMCAwIDAtMTEuNnpNNTcwLjQgNTcwLjRDNTI4IDYxMi43IDQ3MS44IDYzNiA0MTIgNjM2cy0xMTYtMjMuMy0xNTguNC02NS42QzIxMS4zIDUyOCAxODggNDcxLjggMTg4IDQxMnMyMy4zLTExNi4xIDY1LjYtMTU4LjRDMjk2IDIxMS4zIDM1Mi4yIDE4OCA0MTIgMTg4czExNi4xIDIzLjIgMTU4LjQgNjUuNlM2MzYgMzUyLjIgNjM2IDQxMnMtMjMuMyAxMTYuMS02NS42IDE1OC40elwiIH0pKTtcbmV4cG9ydCB7IFN2Z1NlYXJjaCBhcyBSZWFjdENvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyYVdWM1FtOTRQU0kyTkNBMk5DQTRPVFlnT0RrMklqNDhjR0YwYUNCa1BTSk5PVEE1TGpZZ09EVTBMalVnTmpRNUxqa2dOVGswTGpoRE5qa3dMaklnTlRReUxqY2dOekV5SURRM09TQTNNVElnTkRFeVl6QXRPREF1TWkwek1TNHpMVEUxTlM0MExUZzNMamt0TWpFeUxqRXROVFl1TmkwMU5pNDNMVEV6TWkwNE55NDVMVEl4TWk0eExUZzNMamx6TFRFMU5TNDFJRE14TGpNdE1qRXlMakVnT0RjdU9VTXhORE11TWlBeU5UWXVOU0F4TVRJZ016TXhMamdnTVRFeUlEUXhNbU13SURnd0xqRWdNekV1TXlBeE5UVXVOU0E0Tnk0NUlESXhNaTR4UXpJMU5pNDFJRFk0TUM0NElETXpNUzQ0SURjeE1pQTBNVElnTnpFeVl6WTNJREFnTVRNd0xqWXRNakV1T0NBeE9ESXVOeTAyTW13eU5Ua3VOeUF5TlRrdU5tRTRMaklnT0M0eUlEQWdNQ0F3SURFeExqWWdNR3cwTXk0MkxUUXpMalZoT0M0eUlEZ3VNaUF3SURBZ01DQXdMVEV4TGpaNlRUVTNNQzQwSURVM01DNDBRelV5T0NBMk1USXVOeUEwTnpFdU9DQTJNellnTkRFeUlEWXpObk10TVRFMkxUSXpMak10TVRVNExqUXROalV1TmtNeU1URXVNeUExTWpnZ01UZzRJRFEzTVM0NElERTRPQ0EwTVRKek1qTXVNeTB4TVRZdU1TQTJOUzQyTFRFMU9DNDBRekk1TmlBeU1URXVNeUF6TlRJdU1pQXhPRGdnTkRFeUlERTRPSE14TVRZdU1TQXlNeTR5SURFMU9DNDBJRFkxTGpaVE5qTTJJRE0xTWk0eUlEWXpOaUEwTVRKekxUSXpMak1nTVRFMkxqRXROalV1TmlBeE5UZ3VOSG9pTHo0OEwzTjJaejQ9XCI7XG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX3NwcmVhZFZhbHVlcyA9IChhLCBiKSA9PiB7XG4gIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcbiAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXG4gICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhiKSkge1xuICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxuICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XG4gICAgfVxuICByZXR1cm4gYTtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFN2Z0luYm94ID0gKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfX3NwcmVhZFZhbHVlcyh7IHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiIH0sIHByb3BzKSwgLyogQF9fUFVSRV9fICovIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXpcIiB9KSk7XG5leHBvcnQgeyBTdmdJbmJveCBhcyBSZWFjdENvbXBvbmVudCB9O1xuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyYVdWM1FtOTRQU0l3SURBZ01UQXlOQ0F4TURJMElqNDhjR0YwYUNCa1BTSnRPRGcxTGpJZ05EUTJMak10TGpJdExqZ3RNVEV5TGpJdE1qZzFMakZqTFRVdE1UWXVNUzB4T1M0NUxUSTNMakl0TXpZdU9DMHlOeTR5U0RJNE1TNHlZeTB4TnlBd0xUTXlMakVnTVRFdU15MHpOaTQ1SURJM0xqWk1NVE01TGpRZ05EUXpiQzB1TXk0M0xTNHlMamhqTFRFdU15QTBMamt0TVM0M0lEa3VPUzB4SURFMExqZ3RMakVnTVM0MkxTNHlJRE11TWkwdU1pQTBMamhXT0RNd1lUWXdMamtnTmpBdU9TQXdJREFnTUNBMk1DNDRJRFl3TGpob05qSTNMakpqTXpNdU5TQXdJRFl3TGpndE1qY3VNeUEyTUM0NUxUWXdMamhXTkRZMExqRmpNQzB4TGpNZ01DMHlMall0TGpFdE15NDNMalF0TkM0NUlEQXRPUzQyTFRFdU15MHhOQzR4ZW0wdE1qazFMamd0TkRNdExqTWdNVFV1TjJNdExqZ2dORFF1T1Mwek1TNDRJRGMxTGpFdE56Y3VNU0EzTlM0eExUSXlMakVnTUMwME1TNHhMVGN1TVMwMU5DNDRMVEl3TGpaVE5ETTJJRFEwTVM0eUlEUXpOUzQySURReE9Xd3RMak10TVRVdU4wZ3lNamt1TlV3ek1Ea2dNakV3YURNNU9TNHliRGd4TGpjZ01Ua3pMak5JTlRnNUxqUjZiUzB6TnpVZ056WXVPR2d4TlRjdU0yTXlOQzR6SURVM0xqRWdOellnT1RBdU9DQXhOREF1TkNBNU1DNDRJRE16TGpjZ01DQTJOUzA1TGpRZ09UQXVNeTB5Tnk0eUlESXlMakl0TVRVdU5pQXpPUzQxTFRNM0xqUWdOVEF1TnkwMk15NDJhREUxTmk0MVZqZ3hORWd5TVRRdU5GWTBPREF1TVhvaUx6NDhMM04yWno0PVwiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBJY29uSW5ib3ggfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1zdmcvaW5saW5lLXN2Zy9vdXRsaW5lZC9pbmJveC5zdmcnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgaGlzdG9yeSwgTGluayB9IGZyb20gJ2R1bWknO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuXG52YXIgSWNvblRpdGxlID0gZnVuY3Rpb24gSWNvblRpdGxlKCkge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTUuMzMzIDEwLjY2N2gyMS4zMzRjLjg4OSAwIDEuMzMzLjQ0NCAxLjMzMyAxLjMzM3MtLjQ0NCAxLjMzMy0xLjMzMyAxLjMzM0g1LjMzM0M0LjQ0NCAxMy4zMzMgNCAxMi44OSA0IDEycy40NDQtMS4zMzMgMS4zMzMtMS4zMzNaXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTMuMjA3IDIuNjY3aC4xMjZhMS4yMDYgMS4yMDYgMCAwIDEgMS4yIDEuMzI2bC0yLjQxMyAyNC4xNGExLjMzMyAxLjMzMyAwIDAgMS0xLjMyNyAxLjJoLS4xMjZhMS4yMDYgMS4yMDYgMCAwIDEtMS4yLTEuMzI2bDIuNDEzLTI0LjE0Yy4wNjgtLjY4Mi42NDItMS4yIDEuMzI3LTEuMlptOCAwaC4xMjZhMS4yMDYgMS4yMDYgMCAwIDEgMS4yIDEuMzI2bC0yLjQxMyAyNC4xNGExLjMzMyAxLjMzMyAwIDAgMS0xLjMyNyAxLjJoLS4xMjZhMS4yMDYgMS4yMDYgMCAwIDEtMS4yLTEuMzI2bDIuNDEzLTI0LjE0Yy4wNjgtLjY4Mi42NDItMS4yIDEuMzI3LTEuMlpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjMzMyAxOC42NjdoMjEuMzM0Yy44ODkgMCAxLjMzMy40NDQgMS4zMzMgMS4zMzNzLS40NDQgMS4zMzMtMS4zMzMgMS4zMzNINS4zMzNDNC40NDQgMjEuMzMzIDQgMjAuODkgNCAyMHMuNDQ0LTEuMzMzIDEuMzMzLTEuMzMzWlwiXG4gIH0pKTtcbn07XG5cbnZhciBJY29uUGFnZSA9IGZ1bmN0aW9uIEljb25QYWdlKCkge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTkuNDAyIDBoMTQuNzhMMzAgNi4xNlYyNC41YzAgMS45MzMtMS43MSAzLjUtMy41ODkgMy41SDkuNDAxQzcuNTI0IDI4IDYgMjYuNDMzIDYgMjQuNXYtMjFDNiAxLjU2NyA3LjUyMyAwIDkuNDAyIDBaTTIzIDJ2NC4xODNjMCAuNDUxLjM2Ni44MTcuODE3LjgxN0gyOGwtNS01Wm0zLjMzMyAyNGMuOTIgMCAxLjY2Ny0uNzY4IDEuNjY3LTEuNzE0VjguODU3aC01Yy0uOTIgMC0xLjY2Ny0uNzY3LTEuNjY3LTEuNzE0VjJIOS42NjdDOC43NDcgMiA4IDIuNzY4IDggMy43MTR2MjAuNTcyQzggMjUuMjMyIDguNzQ2IDI2IDkuNjY3IDI2aDE2LjY2NlpcIlxuICB9KSk7XG59O1xuXG52YXIgSWNvbkNvbnRlbnQgPSBmdW5jdGlvbiBJY29uQ29udGVudCgpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk02LjEyIDE0LjU4OWg2LjYyOGwxLjUyIDQuMDA0aDIuNDg1bC01LjkzOC0xNS4xOUg4LjA1M0wyLjExNSAxOC43MzJINC42bDEuNTItNC4xNDNaTTguODggNi44NTVjLjEzOS0uNDE0LjI3Ny0uODI4LjQxNS0xLjM4aC4xMzhjMCAuMTM4LjEzOC40MTQuNDE0IDEuMTA0IDAgLjEzOC4xMzguMjc2LjEzOC4yNzYgMCAuMTM4LjgyOSAyLjA3MiAyLjIxIDUuOTM4SDYuNjcyYzEuNTE5LTMuODY2IDIuMjEtNS44IDIuMjEtNS45MzhabTguMTQ4IDIuMzQ4aDEyLjcwNXYxLjkzM0gxNy4wMjlWOS4yMDNaTTIuMTE1IDIwLjY2NWgyNy42MTl2MS45MzNIMi4xMTR2LTEuOTMzWm0xNC45MTQtNS42NjJoMTIuNzA1djEuOTMzSDE3LjAyOXYtMS45MzNaTTIuMTE1IDI2LjMyN2gyNy42MTl2MS45MzNIMi4xMTR2LTEuOTMzWk0xNy4wMjkgMy41NGgxMi43MDV2MS45MzRIMTcuMDI5VjMuNTRaXCJcbiAgfSkpO1xufTtcblxudmFyIEljb25EZW1vID0gZnVuY3Rpb24gSWNvbkRlbW8oKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgdmlld0JveDogXCIwIDAgMzIgMzJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjggNmgtNWE1IDUgMCAwIDAtMTAgMEg4YTIgMiAwIDAgMC0yIDJ2NWE1IDUgMCAwIDAgMCAxMHY1YTIgMiAwIDAgMCAyIDJoN3YtMmEzIDMgMCAwIDEgNiAwdjJoN2EyIDIgMCAwIDAgMi0ydi03aC0yYTMgMyAwIDAgMSAwLTZoMlY4YTIgMiAwIDAgMC0yLTJabS01IDEyYTUgNSAwIDAgMCA1IDV2NWgtNWE1IDUgMCAwIDAtMTAgMEg4di03SDZhMyAzIDAgMCAxIDAtNmgyVjhoN1Y2YTMgMyAwIDAgMSA2IDB2Mmg3djVhNSA1IDAgMCAwLTUgNVpcIlxuICB9KSk7XG59O1xuXG52YXIgSUNPTlNfTUFQUElORyA9IHtcbiAgdGl0bGU6IEljb25UaXRsZSxcbiAgcGFnZTogSWNvblBhZ2UsXG4gIGNvbnRlbnQ6IEljb25Db250ZW50LFxuICBkZW1vOiBJY29uRGVtb1xufTtcblxudmFyIEhpZ2hsaWdodCA9IGZ1bmN0aW9uIEhpZ2hsaWdodChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHByb3BzLnRleHRzLm1hcChmdW5jdGlvbiAodGV4dCwgaWR4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7XG4gICAgICBrZXk6IGlkeFxuICAgIH0sIHRleHQuaGlnaGxpZ2h0ZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1hcmtcIiwgbnVsbCwgdGV4dC50ZXh0KSA6IHRleHQudGV4dCk7XG4gIH0pKTtcbn07XG5cbnZhciB1c2VGbGF0U2VhcmNoRGF0YSA9IGZ1bmN0aW9uIHVzZUZsYXRTZWFyY2hEYXRhKGRhdGEpIHtcbiAgdmFyIHVwZGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWN0aXZlSW5kZXggPSAwO1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICAgIHJldC5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAndGl0bGUnLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS50aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uaGludHMuZm9yRWFjaChmdW5jdGlvbiAoaGludCkge1xuICAgICAgICByZXQucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2hpbnQnLFxuICAgICAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCsrLFxuICAgICAgICAgIHZhbHVlOiBoaW50XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtyZXQsIGFjdGl2ZUluZGV4XTtcbiAgfSwgW2RhdGFdKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUodXBkYXRlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgZmxhdERhdGEgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RmxhdERhdGEgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmxhdERhdGEodXBkYXRlKTtcbiAgfSwgW2RhdGFdKTtcbiAgcmV0dXJuIGZsYXREYXRhO1xufTtcblxudmFyIFNlYXJjaFJlc3VsdCA9IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdChwcm9wcykge1xuICB2YXIgX3VzZUZsYXRTZWFyY2hEYXRhID0gdXNlRmxhdFNlYXJjaERhdGEocHJvcHMuZGF0YSksXG4gICAgICBfdXNlRmxhdFNlYXJjaERhdGEyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUZsYXRTZWFyY2hEYXRhLCAyKSxcbiAgICAgIGRhdGEgPSBfdXNlRmxhdFNlYXJjaERhdGEyWzBdLFxuICAgICAgaGlzdHNDb3VudCA9IF91c2VGbGF0U2VhcmNoRGF0YTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSgtMSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBhY3RpdmVJbmRleCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRBY3RpdmVJbmRleCA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoZXYpIHtcbiAgICAgIC8vIFRPRE86IHNjcm9sbCBpbnRvIHZpZXcgZm9yIGludmlzaWJsZSBpdGVtc1xuICAgICAgaWYgKGV2LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgoKGFjdGl2ZUluZGV4ICsgMSkgJSBoaXN0c0NvdW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZXYua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgc2V0QWN0aXZlSW5kZXgoKGFjdGl2ZUluZGV4ICsgaGlzdHNDb3VudCAtIDEpICUgaGlzdHNDb3VudCk7XG4gICAgICB9IGVsc2UgaWYgKGV2LmtleSA9PT0gJ0VudGVyJyAmJiBhY3RpdmVJbmRleCA+PSAwKSB7XG4gICAgICAgIHZhciBfcHJvcHMkb25JdGVtU2VsZWN0O1xuXG4gICAgICAgIHZhciBfaXRlbSA9IGRhdGEuZmluZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT09ICdoaW50JyAmJiBpdGVtLmFjdGl2ZUluZGV4ID09PSBhY3RpdmVJbmRleDtcbiAgICAgICAgfSkudmFsdWU7XG4gICAgICAgIGhpc3RvcnkucHVzaChfaXRlbS5saW5rKTtcbiAgICAgICAgKF9wcm9wcyRvbkl0ZW1TZWxlY3QgPSBwcm9wcy5vbkl0ZW1TZWxlY3QpID09PSBudWxsIHx8IF9wcm9wcyRvbkl0ZW1TZWxlY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcm9wcyRvbkl0ZW1TZWxlY3QuY2FsbChwcm9wcywgX2l0ZW0pO1xuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFsnRXNjYXBlJywgJ0VudGVyJ10uaW5jbHVkZXMoZXYua2V5KSkge1xuICAgICAgICBzZXRBY3RpdmVJbmRleCgtMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1yZXN1bHRcIixcbiAgICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcbiAgICAgIHJldHVybiBzZXRBY3RpdmVJbmRleCgtMSk7XG4gICAgfSAvLyBmb3IgdXgsIG9ubHkgaGlkZSByZXN1bHQgd2hlbiBtb3VzZSB1cFxuICAgICxcbiAgICBvbk1vdXNlRG93bkNhcHR1cmU6IGZ1bmN0aW9uIG9uTW91c2VEb3duQ2FwdHVyZShldikge1xuICAgICAgcmV0dXJuIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcbiAgICBvbk1vdXNlVXBDYXB0dXJlOiBmdW5jdGlvbiBvbk1vdXNlVXBDYXB0dXJlKCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9LCBCb29sZWFuKHByb3BzLmRhdGEubGVuZ3RoIHx8IHByb3BzLmxvYWRpbmcpID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkbFwiLCBudWxsLCBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgIHJldHVybiBpdGVtLnR5cGUgPT09ICd0aXRsZScgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImR0XCIsIHtcbiAgICAgIGtleTogU3RyaW5nKGkpXG4gICAgfSwgaXRlbS52YWx1ZS50aXRsZSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRkXCIsIHtcbiAgICAgIGtleTogU3RyaW5nKGkpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywge1xuICAgICAgdG86IGl0ZW0udmFsdWUubGluayxcbiAgICAgIFwiZGF0YS1hY3RpdmVcIjogYWN0aXZlSW5kZXggPT09IGl0ZW0uYWN0aXZlSW5kZXggfHwgdW5kZWZpbmVkLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgdmFyIF9wcm9wcyRvbkl0ZW1TZWxlY3QyO1xuXG4gICAgICAgIHJldHVybiAoX3Byb3BzJG9uSXRlbVNlbGVjdDIgPSBwcm9wcy5vbkl0ZW1TZWxlY3QpID09PSBudWxsIHx8IF9wcm9wcyRvbkl0ZW1TZWxlY3QyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvcHMkb25JdGVtU2VsZWN0Mi5jYWxsKHByb3BzLCBpdGVtLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJQ09OU19NQVBQSU5HW2l0ZW0udmFsdWUudHlwZV0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImg0XCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhpZ2hsaWdodCwge1xuICAgICAgdGV4dHM6IGl0ZW0udmFsdWUuaGlnaGxpZ2h0VGl0bGVUZXh0c1xuICAgIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhpZ2hsaWdodCwge1xuICAgICAgdGV4dHM6IGl0ZW0udmFsdWUuaGlnaGxpZ2h0VGV4dHNcbiAgICB9KSkpKTtcbiAgfSkpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJkdW1pLWRlZmF1bHQtc2VhcmNoLWVtcHR5XCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkluYm94LCBudWxsKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWF0dGVkTWVzc2FnZSwge1xuICAgIGlkOiBcInNlYXJjaC5ub3QuZm91bmRcIlxuICB9KSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHVzZUludGwgfSBmcm9tICdkdW1pJztcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIElucHV0ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGludGwgPSB1c2VJbnRsKCk7XG4gIHZhciBpbWVXYWl0aW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIG5hdGl2ZUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuYXRpdmVJbnB1dFJlZi5jdXJyZW50O1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIGNsYXNzTmFtZTogXCJkdW1pLWRlZmF1bHQtc2VhcmNoLWJhci1pbnB1dFwiLFxuICAgIG9uQ29tcG9zaXRpb25TdGFydDogZnVuY3Rpb24gb25Db21wb3NpdGlvblN0YXJ0KCkge1xuICAgICAgcmV0dXJuIGltZVdhaXRpbmcuY3VycmVudCA9IHRydWU7XG4gICAgfSxcbiAgICBvbkNvbXBvc2l0aW9uRW5kOiBmdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kKGV2KSB7XG4gICAgICBpbWVXYWl0aW5nLmN1cnJlbnQgPSBmYWxzZTsgLy8gc3BlY2lhbCBjYXNlOiBwcmVzcyBFbnRlciBvcGVuIElNRSBwYW5lbCB3aWxsIG5vdCB0cmlnZ2VyIG9uQ2hhbmdlXG5cbiAgICAgIHByb3BzLm9uQ2hhbmdlKGV2LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgb25Gb2N1czogcHJvcHMub25Gb2N1cyxcbiAgICBvbkJsdXI6IHByb3BzLm9uQmx1cixcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihldikge1xuICAgICAgaWYgKFsnQXJyb3dEb3duJywgJ0Fycm93VXAnXS5pbmNsdWRlcyhldi5rZXkpKSBldi5wcmV2ZW50RGVmYXVsdCgpOyAvLyBlc2MgdG8gYmx1ciBpbnB1dFxuXG4gICAgICBpZiAoZXYua2V5ID09PSAnRXNjYXBlJyAmJiAhaW1lV2FpdGluZy5jdXJyZW50KSBldi5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldikge1xuICAgICAgLy8gd2FpdCBmb3Igb25Db21wb3NpdGlvbkVuZCBldmVudCBiZSB0cmlnZ2VyZWRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWltZVdhaXRpbmcuY3VycmVudCkge1xuICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEpO1xuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IGludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICBpZDogJ2hlYWRlci5zZWFyY2gucGxhY2Vob2xkZXInXG4gICAgfSksXG4gICAgcmVmOiBuYXRpdmVJbnB1dFJlZlxuICB9KTtcbn0pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIE1hc2sgPSBmdW5jdGlvbiBNYXNrKHByb3BzKSB7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BzLnZpc2libGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9wcm9wcyRvbkNsb3NlO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAoX3Byb3BzJG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlKSA9PT0gbnVsbCB8fCBfcHJvcHMkb25DbG9zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Byb3BzJG9uQ2xvc2UuY2FsbChwcm9wcyk7XG4gICAgfVxuICB9LCBbcHJvcHMudmlzaWJsZV0pO1xuICByZXR1cm4gcHJvcHMudmlzaWJsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1tb2RhbFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1tb2RhbC1tYXNrXCIsXG4gICAgb25DbGljazogcHJvcHMub25NYXNrQ2xpY2tcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1tb2RhbC1jb250ZW50XCJcbiAgfSwgcHJvcHMuY2hpbGRyZW4pKSA6IG51bGw7XG59OyIsInZhciBfbmF2aWdhdG9yO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIEljb25BcnJvd0Rvd24gfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1zdmcvaW5saW5lLXN2Zy9vdXRsaW5lZC9hcnJvdy1kb3duLnN2Zyc7XG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBJY29uQXJyb3dVcCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLXN2Zy9pbmxpbmUtc3ZnL291dGxpbmVkL2Fycm93LXVwLnN2Zyc7XG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBJY29uU2VhcmNoIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2lubGluZS1zdmcvb3V0bGluZWQvc2VhcmNoLnN2Zyc7XG5pbXBvcnQgeyB1c2VTaXRlU2VhcmNoIH0gZnJvbSAnZHVtaSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tIFwiLi4vU2VhcmNoUmVzdWx0XCI7XG5pbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCB7IE1hc2sgfSBmcm9tIFwiLi9NYXNrXCI7XG5leHBvcnQgeyBJbnB1dCBhcyBTZWFyY2hJbnB1dCB9IGZyb20gXCIuL0lucHV0XCI7XG5leHBvcnQgeyBNYXNrIGFzIFNlYXJjaE1hc2sgfSBmcm9tIFwiLi9NYXNrXCI7XG52YXIgaXNBcHBsZURldmljZSA9IC8obWFjfGlwaG9uZXxpcG9kfGlwYWQpL2kudGVzdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyA/IChfbmF2aWdhdG9yID0gbmF2aWdhdG9yKSA9PT0gbnVsbCB8fCBfbmF2aWdhdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbmF2aWdhdG9yLnBsYXRmb3JtIDogJycpO1xuXG52YXIgU2VhcmNoQmFyID0gZnVuY3Rpb24gU2VhcmNoQmFyKCkge1xuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBmb2N1c2luZyA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRGb2N1c2luZyA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgbW9kYWxJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKCfijJgnKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHN5bWJvbCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTeW1ib2wgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU2l0ZVNlYXJjaCA9IHVzZVNpdGVTZWFyY2goKSxcbiAgICAgIGtleXdvcmRzID0gX3VzZVNpdGVTZWFyY2gua2V5d29yZHMsXG4gICAgICBzZXRLZXl3b3JkcyA9IF91c2VTaXRlU2VhcmNoLnNldEtleXdvcmRzLFxuICAgICAgcmVzdWx0ID0gX3VzZVNpdGVTZWFyY2gucmVzdWx0LFxuICAgICAgbG9hZGluZyA9IF91c2VTaXRlU2VhcmNoLmxvYWRpbmc7XG5cbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBtb2RhbFZpc2libGUgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0TW9kYWxWaXNpYmxlID0gX3VzZVN0YXRlNlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIHdoeSBwdXQgdXNlRWZmZWN0P1xuICAgIC8vIHRvIGF2b2lkIFRleHQgY29udGVudCBtaXNtYXRjaCBiZXR3ZWVuIHNlcnZlciAmIGNsaWVudCBpbiBzc3JcbiAgICBpZiAoIWlzQXBwbGVEZXZpY2UpIHtcbiAgICAgIHNldFN5bWJvbCgnQ3RybCcpO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcihldikge1xuICAgICAgaWYgKChpc0FwcGxlRGV2aWNlID8gZXYubWV0YUtleSA6IGV2LmN0cmxLZXkpICYmIGV2LmtleSA9PT0gJ2snIHx8IGV2LmtleSA9PT0gJy8nKSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICB2YXIgX2lucHV0UmVmJGN1cnJlbnQkZ2V0ID0gaW5wdXRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgdG9wID0gX2lucHV0UmVmJGN1cnJlbnQkZ2V0LnRvcCxcbiAgICAgICAgICAgICAgYm90dG9tID0gX2lucHV0UmVmJGN1cnJlbnQkZ2V0LmJvdHRvbSxcbiAgICAgICAgICAgICAgbGVmdCA9IF9pbnB1dFJlZiRjdXJyZW50JGdldC5sZWZ0LFxuICAgICAgICAgICAgICByaWdodCA9IF9pbnB1dFJlZiRjdXJyZW50JGdldC5yaWdodDtcblxuICAgICAgICAgIHZhciBpc0luVmlld3BvcnQgPSB0b3AgPj0gMCAmJiBsZWZ0ID49IDAgJiYgYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCAmJiByaWdodCA8PSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgIGlmIChpc0luVmlld3BvcnQpIHtcbiAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0S2V5d29yZHMoJycpO1xuICAgICAgICAgICAgc2V0TW9kYWxWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBfbW9kYWxJbnB1dFJlZiRjdXJyZW47XG5cbiAgICAgICAgICAgICAgKF9tb2RhbElucHV0UmVmJGN1cnJlbiA9IG1vZGFsSW5wdXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX21vZGFsSW5wdXRSZWYkY3VycmVuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbW9kYWxJbnB1dFJlZiRjdXJyZW4uZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXYua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJkdW1pLWRlZmF1bHQtc2VhcmNoLWJhclwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25TZWFyY2gsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1iYXItc3ZnXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICAgIHJldHVybiBzZXRGb2N1c2luZyh0cnVlKTtcbiAgICB9LFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgLy8gd2FpdCBmb3IgaXRlbSBjbGlja1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldEZvY3VzaW5nKGZhbHNlKTtcbiAgICAgIH0sIDEpO1xuICAgIH0sXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGtleXdvcmRzKSB7XG4gICAgICByZXR1cm4gc2V0S2V5d29yZHMoa2V5d29yZHMpO1xuICAgIH0sXG4gICAgcmVmOiBpbnB1dFJlZlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1zaG9ydGN1dFwiXG4gIH0sIHN5bWJvbCwgXCIgS1wiKSwga2V5d29yZHMudHJpbSgpICYmIGZvY3VzaW5nICYmIChyZXN1bHQubGVuZ3RoIHx8ICFsb2FkaW5nKSAmJiAhbW9kYWxWaXNpYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1wb3BvdmVyXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlYXJjaFJlc3VsdCwge1xuICAgIGRhdGE6IHJlc3VsdCxcbiAgICBsb2FkaW5nOiBsb2FkaW5nXG4gIH0pKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1hc2ssIHtcbiAgICB2aXNpYmxlOiBtb2RhbFZpc2libGUsXG4gICAgb25NYXNrQ2xpY2s6IGZ1bmN0aW9uIG9uTWFza0NsaWNrKCkge1xuICAgICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICB9LFxuICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7XG4gICAgICByZXR1cm4gc2V0S2V5d29yZHMoJycpO1xuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvblNlYXJjaCwge1xuICAgIGNsYXNzTmFtZTogXCJkdW1pLWRlZmF1bHQtc2VhcmNoLWJhci1zdmdcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHtcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgcmV0dXJuIHNldEZvY3VzaW5nKHRydWUpO1xuICAgIH0sXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICAvLyB3YWl0IGZvciBpdGVtIGNsaWNrXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0Rm9jdXNpbmcoZmFsc2UpO1xuICAgICAgfSwgMSk7XG4gICAgfSxcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2Uoa2V5d29yZHMpIHtcbiAgICAgIHJldHVybiBzZXRLZXl3b3JkcyhrZXl3b3Jkcyk7XG4gICAgfSxcbiAgICByZWY6IG1vZGFsSW5wdXRSZWZcbiAgfSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWFyY2hSZXN1bHQsIHtcbiAgICBkYXRhOiByZXN1bHQsXG4gICAgbG9hZGluZzogbG9hZGluZyxcbiAgICBvbkl0ZW1TZWxlY3Q6IGZ1bmN0aW9uIG9uSXRlbVNlbGVjdCgpIHtcbiAgICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImR1bWktZGVmYXVsdC1zZWFyY2gtbW9kYWwtY29tbWFuZHNcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1tb2RhbC1jb21tYW5kcy1hcnJvd1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImR1bWktZGVmYXVsdC1zZWFyY2gtbW9kYWwtc2hvcnRjdXRcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQXJyb3dVcCwge1xuICAgIHdpZHRoOiBcIjEwcHhcIixcbiAgICBoZWlnaHQ6IFwiMTBweFwiLFxuICAgIGZpbGw6IFwicmdiYSgwLCAwLCAwLCAwLjQ1KVwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1tb2RhbC1zaG9ydGN1dFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25BcnJvd0Rvd24sIHtcbiAgICB3aWR0aDogXCIxMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwcHhcIixcbiAgICBmaWxsOiBcInJnYmEoMCwgMCwgMCwgMC40NSlcIlxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImR1bWktZGVmYXVsdC1zZWFyY2gtbW9kYWwtY29tbWFuZHMtdGV4dFwiXG4gIH0sIFwidG8gbmF2aWdhdGVcIikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImR1bWktZGVmYXVsdC1zZWFyY2gtbW9kYWwtc2hvcnRjdXRcIlxuICB9LCBcImVzY1wiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZHVtaS1kZWZhdWx0LXNlYXJjaC1tb2RhbC1jb21tYW5kcy10ZXh0XCJcbiAgfSwgXCJ0byBjbG9zZVwiKSkpKSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///38097
`)}}]);
