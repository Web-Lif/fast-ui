"use strict";(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[3955],{74443:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useResponsiveObserver; },
/* harmony export */   "c": function() { return /* binding */ responsiveArray; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64049);


const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const getResponsiveMap = token => ({
  xs: \`(max-width: \${token.screenXSMax}px)\`,
  sm: \`(min-width: \${token.screenSM}px)\`,
  md: \`(min-width: \${token.screenMD}px)\`,
  lg: \`(min-width: \${token.screenLG}px)\`,
  xl: \`(min-width: \${token.screenXL}px)\`,
  xxl: \`(min-width: \${token.screenXXL}px)\`
});
/**
 * Ensures that the breakpoints token are valid, in good order
 * For each breakpoint : screenMin <= screen <= screenMax and screenMax <= nextScreenMin
 */
const validateBreakpoints = token => {
  const indexableToken = token;
  const revBreakpoints = [].concat(responsiveArray).reverse();
  revBreakpoints.forEach((breakpoint, i) => {
    const breakpointUpper = breakpoint.toUpperCase();
    const screenMin = \`screen\${breakpointUpper}Min\`;
    const screen = \`screen\${breakpointUpper}\`;
    if (!(indexableToken[screenMin] <= indexableToken[screen])) {
      throw new Error(\`\${screenMin}<=\${screen} fails : !(\${indexableToken[screenMin]}<=\${indexableToken[screen]})\`);
    }
    if (i < revBreakpoints.length - 1) {
      const screenMax = \`screen\${breakpointUpper}Max\`;
      if (!(indexableToken[screen] <= indexableToken[screenMax])) {
        throw new Error(\`\${screen}<=\${screenMax} fails : !(\${indexableToken[screen]}<=\${indexableToken[screenMax]})\`);
      }
      const nextBreakpointUpperMin = revBreakpoints[i + 1].toUpperCase();
      const nextScreenMin = \`screen\${nextBreakpointUpperMin}Min\`;
      if (!(indexableToken[screenMax] <= indexableToken[nextScreenMin])) {
        throw new Error(\`\${screenMax}<=\${nextScreenMin} fails : !(\${indexableToken[screenMax]}<=\${indexableToken[nextScreenMin]})\`);
      }
    }
  });
  return token;
};
function useResponsiveObserver() {
  const [, token] = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_1__/* .useToken */ .dQ)();
  const responsiveMap = getResponsiveMap(validateBreakpoints(token));
  // To avoid repeat create instance, we add \`useMemo\` here.
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const subscribers = new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach(func => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size) this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size) this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach(screen => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = _ref => {
            let {
              matches
            } = _ref;
            this.dispatch(Object.assign(Object.assign({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  }, [token]);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ0NDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ21CO0FBQ3RDO0FBQ1A7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDLHFCQUFxQixlQUFlO0FBQ3BDLHFCQUFxQixlQUFlO0FBQ3BDLHFCQUFxQixlQUFlO0FBQ3BDLHFCQUFxQixlQUFlO0FBQ3BDLHNCQUFzQixnQkFBZ0I7QUFDdEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0MsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBLHlCQUF5QixVQUFVLElBQUksUUFBUSxZQUFZLDBCQUEwQixJQUFJLHVCQUF1QjtBQUNoSDtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBLDJCQUEyQixPQUFPLElBQUksV0FBVyxZQUFZLHVCQUF1QixJQUFJLDBCQUEwQjtBQUNsSDtBQUNBO0FBQ0EscUNBQXFDLHVCQUF1QjtBQUM1RDtBQUNBLDJCQUEyQixVQUFVLElBQUksZUFBZSxZQUFZLDBCQUEwQixJQUFJLDhCQUE4QjtBQUNoSTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDZTtBQUNmLG9CQUFvQixtRUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUywwQ0FBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLHdEQUF3RDtBQUN4RDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvcmVzcG9uc2l2ZU9ic2VydmVyLmpzPzUzZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRva2VuIH0gZnJvbSAnLi4vdGhlbWUvaW50ZXJuYWwnO1xuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVBcnJheSA9IFsneHhsJywgJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5jb25zdCBnZXRSZXNwb25zaXZlTWFwID0gdG9rZW4gPT4gKHtcbiAgeHM6IGAobWF4LXdpZHRoOiAke3Rva2VuLnNjcmVlblhTTWF4fXB4KWAsXG4gIHNtOiBgKG1pbi13aWR0aDogJHt0b2tlbi5zY3JlZW5TTX1weClgLFxuICBtZDogYChtaW4td2lkdGg6ICR7dG9rZW4uc2NyZWVuTUR9cHgpYCxcbiAgbGc6IGAobWluLXdpZHRoOiAke3Rva2VuLnNjcmVlbkxHfXB4KWAsXG4gIHhsOiBgKG1pbi13aWR0aDogJHt0b2tlbi5zY3JlZW5YTH1weClgLFxuICB4eGw6IGAobWluLXdpZHRoOiAke3Rva2VuLnNjcmVlblhYTH1weClgXG59KTtcbi8qKlxuICogRW5zdXJlcyB0aGF0IHRoZSBicmVha3BvaW50cyB0b2tlbiBhcmUgdmFsaWQsIGluIGdvb2Qgb3JkZXJcbiAqIEZvciBlYWNoIGJyZWFrcG9pbnQgOiBzY3JlZW5NaW4gPD0gc2NyZWVuIDw9IHNjcmVlbk1heCBhbmQgc2NyZWVuTWF4IDw9IG5leHRTY3JlZW5NaW5cbiAqL1xuY29uc3QgdmFsaWRhdGVCcmVha3BvaW50cyA9IHRva2VuID0+IHtcbiAgY29uc3QgaW5kZXhhYmxlVG9rZW4gPSB0b2tlbjtcbiAgY29uc3QgcmV2QnJlYWtwb2ludHMgPSBbXS5jb25jYXQocmVzcG9uc2l2ZUFycmF5KS5yZXZlcnNlKCk7XG4gIHJldkJyZWFrcG9pbnRzLmZvckVhY2goKGJyZWFrcG9pbnQsIGkpID0+IHtcbiAgICBjb25zdCBicmVha3BvaW50VXBwZXIgPSBicmVha3BvaW50LnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3Qgc2NyZWVuTWluID0gYHNjcmVlbiR7YnJlYWtwb2ludFVwcGVyfU1pbmA7XG4gICAgY29uc3Qgc2NyZWVuID0gYHNjcmVlbiR7YnJlYWtwb2ludFVwcGVyfWA7XG4gICAgaWYgKCEoaW5kZXhhYmxlVG9rZW5bc2NyZWVuTWluXSA8PSBpbmRleGFibGVUb2tlbltzY3JlZW5dKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NjcmVlbk1pbn08PSR7c2NyZWVufSBmYWlscyA6ICEoJHtpbmRleGFibGVUb2tlbltzY3JlZW5NaW5dfTw9JHtpbmRleGFibGVUb2tlbltzY3JlZW5dfSlgKTtcbiAgICB9XG4gICAgaWYgKGkgPCByZXZCcmVha3BvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBzY3JlZW5NYXggPSBgc2NyZWVuJHticmVha3BvaW50VXBwZXJ9TWF4YDtcbiAgICAgIGlmICghKGluZGV4YWJsZVRva2VuW3NjcmVlbl0gPD0gaW5kZXhhYmxlVG9rZW5bc2NyZWVuTWF4XSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3NjcmVlbn08PSR7c2NyZWVuTWF4fSBmYWlscyA6ICEoJHtpbmRleGFibGVUb2tlbltzY3JlZW5dfTw9JHtpbmRleGFibGVUb2tlbltzY3JlZW5NYXhdfSlgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRCcmVha3BvaW50VXBwZXJNaW4gPSByZXZCcmVha3BvaW50c1tpICsgMV0udG9VcHBlckNhc2UoKTtcbiAgICAgIGNvbnN0IG5leHRTY3JlZW5NaW4gPSBgc2NyZWVuJHtuZXh0QnJlYWtwb2ludFVwcGVyTWlufU1pbmA7XG4gICAgICBpZiAoIShpbmRleGFibGVUb2tlbltzY3JlZW5NYXhdIDw9IGluZGV4YWJsZVRva2VuW25leHRTY3JlZW5NaW5dKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7c2NyZWVuTWF4fTw9JHtuZXh0U2NyZWVuTWlufSBmYWlscyA6ICEoJHtpbmRleGFibGVUb2tlbltzY3JlZW5NYXhdfTw9JHtpbmRleGFibGVUb2tlbltuZXh0U2NyZWVuTWluXX0pYCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRva2VuO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlc3BvbnNpdmVPYnNlcnZlcigpIHtcbiAgY29uc3QgWywgdG9rZW5dID0gdXNlVG9rZW4oKTtcbiAgY29uc3QgcmVzcG9uc2l2ZU1hcCA9IGdldFJlc3BvbnNpdmVNYXAodmFsaWRhdGVCcmVha3BvaW50cyh0b2tlbikpO1xuICAvLyBUbyBhdm9pZCByZXBlYXQgY3JlYXRlIGluc3RhbmNlLCB3ZSBhZGQgYHVzZU1lbW9gIGhlcmUuXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IG5ldyBNYXAoKTtcbiAgICBsZXQgc3ViVWlkID0gLTE7XG4gICAgbGV0IHNjcmVlbnMgPSB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgbWF0Y2hIYW5kbGVyczoge30sXG4gICAgICBkaXNwYXRjaChwb2ludE1hcCkge1xuICAgICAgICBzY3JlZW5zID0gcG9pbnRNYXA7XG4gICAgICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuYyA9PiBmdW5jKHNjcmVlbnMpKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXJzLnNpemUgPj0gMTtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmUoZnVuYykge1xuICAgICAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgICAgc3ViVWlkICs9IDE7XG4gICAgICAgIHN1YnNjcmliZXJzLnNldChzdWJVaWQsIGZ1bmMpO1xuICAgICAgICBmdW5jKHNjcmVlbnMpO1xuICAgICAgICByZXR1cm4gc3ViVWlkO1xuICAgICAgfSxcbiAgICAgIHVuc3Vic2NyaWJlKHBhcmFtVG9rZW4pIHtcbiAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKHBhcmFtVG9rZW4pO1xuICAgICAgICBpZiAoIXN1YnNjcmliZXJzLnNpemUpIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgfSxcbiAgICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLmZvckVhY2goc2NyZWVuID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubWF0Y2hIYW5kbGVyc1ttYXRjaE1lZGlhUXVlcnldO1xuICAgICAgICAgIGhhbmRsZXIgPT09IG51bGwgfHwgaGFuZGxlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFuZGxlci5tcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlciA9PT0gbnVsbCB8fCBoYW5kbGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVyLmxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLmZvckVhY2goc2NyZWVuID0+IHtcbiAgICAgICAgICBjb25zdCBtYXRjaE1lZGlhUXVlcnkgPSByZXNwb25zaXZlTWFwW3NjcmVlbl07XG4gICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBfcmVmID0+IHtcbiAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgICAgIH0gPSBfcmVmO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNjcmVlbnMpLCB7XG4gICAgICAgICAgICAgIFtzY3JlZW5dOiBtYXRjaGVzXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShtYXRjaE1lZGlhUXVlcnkpO1xuICAgICAgICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgdGhpcy5tYXRjaEhhbmRsZXJzW21hdGNoTWVkaWFRdWVyeV0gPSB7XG4gICAgICAgICAgICBtcWwsXG4gICAgICAgICAgICBsaXN0ZW5lclxuICAgICAgICAgIH07XG4gICAgICAgICAgbGlzdGVuZXIobXFsKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmVzcG9uc2l2ZU1hcFxuICAgIH07XG4gIH0sIFt0b2tlbl0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///74443
`)},16591:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ input_Input; },
  "D7": function() { return /* binding */ Input_fixControlledValue; },
  "rJ": function() { return /* binding */ Input_resolveOnChange; },
  "nH": function() { return /* binding */ Input_triggerFocus; }
});

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
;// CONCATENATED MODULE: ./node_modules/rc-input/es/utils/commonUtils.js
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }

  var event = e;

  if (e.type === 'click') {
    // Clone a new target for event.
    // Avoid the following usage, the setQuery method gets the original value.
    //
    // const [query, setQuery] = React.useState('');
    // <Input
    //   allowClear
    //   value={query}
    //   onChange={(e)=> {
    //     setQuery((prevStatus) => e.target.value);
    //   }}
    // />
    var currentTarget = target.cloneNode(true); // click clear icon

    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = '';
    onChange(event);
    return;
  } // Trigger by composition event, this means we need force change the input value


  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }

  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option); // Selection content

  var _ref = option || {},
      cursor = _ref.cursor;

  if (cursor) {
    var len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;

      case 'end':
        element.setSelectionRange(len, len);
        break;

      default:
        element.setSelectionRange(0, len);
    }
  }
}
function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return String(value);
}
;// CONCATENATED MODULE: ./node_modules/rc-input/es/BaseInput.js






var BaseInput = function BaseInput(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      prefix = props.prefix,
      suffix = props.suffix,
      addonBefore = props.addonBefore,
      addonAfter = props.addonAfter,
      className = props.className,
      style = props.style,
      affixWrapperClassName = props.affixWrapperClassName,
      groupClassName = props.groupClassName,
      wrapperClassName = props.wrapperClassName,
      disabled = props.disabled,
      readOnly = props.readOnly,
      focused = props.focused,
      triggerFocus = props.triggerFocus,
      allowClear = props.allowClear,
      value = props.value,
      handleReset = props.handleReset,
      hidden = props.hidden;
  var containerRef = (0,react.useRef)(null);

  var onInputClick = function onInputClick(e) {
    var _containerRef$current;

    if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) {
      triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
    }
  }; // ================== Clear Icon ================== //


  var getClearIcon = function getClearIcon() {
    var _classNames;

    if (!allowClear) {
      return null;
    }

    var needClear = !disabled && !readOnly && value;
    var clearIconCls = "".concat(prefixCls, "-clear-icon");
    var iconNode = (0,esm_typeof/* default */.Z)(allowClear) === 'object' && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : '\u2716';
    return /*#__PURE__*/react.createElement("span", {
      onClick: handleReset // Do not trigger onBlur when clear input
      // https://github.com/ant-design/ant-design/issues/31200
      ,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      className: classnames_default()(clearIconCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(clearIconCls, "-hidden"), !needClear), (0,defineProperty/* default */.Z)(_classNames, "".concat(clearIconCls, "-has-suffix"), !!suffix), _classNames)),
      role: "button",
      tabIndex: -1
    }, iconNode);
  };

  var element = /*#__PURE__*/(0,react.cloneElement)(inputElement, {
    value: value,
    hidden: hidden
  }); // ================== Prefix & Suffix ================== //

  if (hasPrefixSuffix(props)) {
    var _classNames2;

    var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
    var affixWrapperCls = classnames_default()(affixWrapperPrefixCls, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-focused"), focused), (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), _classNames2), !hasAddon(props) && className, affixWrapperClassName);
    var suffixNode = (suffix || allowClear) && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, getClearIcon(), suffix);
    element = /*#__PURE__*/react.createElement("span", {
      className: affixWrapperCls,
      style: style,
      hidden: !hasAddon(props) && hidden,
      onClick: onInputClick,
      ref: containerRef
    }, prefix && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-prefix")
    }, prefix), /*#__PURE__*/(0,react.cloneElement)(inputElement, {
      style: null,
      value: value,
      hidden: null
    }), suffixNode);
  } // ================== Addon ================== //


  if (hasAddon(props)) {
    var wrapperCls = "".concat(prefixCls, "-group");
    var addonCls = "".concat(wrapperCls, "-addon");
    var mergedWrapperClassName = classnames_default()("".concat(prefixCls, "-wrapper"), wrapperCls, wrapperClassName);
    var mergedGroupClassName = classnames_default()("".concat(prefixCls, "-group-wrapper"), className, groupClassName); // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper

    return /*#__PURE__*/react.createElement("span", {
      className: mergedGroupClassName,
      style: style,
      hidden: hidden
    }, /*#__PURE__*/react.createElement("span", {
      className: mergedWrapperClassName
    }, addonBefore && /*#__PURE__*/react.createElement("span", {
      className: addonCls
    }, addonBefore), /*#__PURE__*/(0,react.cloneElement)(element, {
      style: null,
      hidden: null
    }), addonAfter && /*#__PURE__*/react.createElement("span", {
      className: addonCls
    }, addonAfter)));
  }

  return element;
};

/* harmony default export */ var es_BaseInput = (BaseInput);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
;// CONCATENATED MODULE: ./node_modules/rc-input/es/Input.js






var _excluded = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "inputClassName"];






var Input = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var autoComplete = props.autoComplete,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onPressEnter = props.onPressEnter,
      onKeyDown = props.onKeyDown,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-input' : _props$prefixCls,
      disabled = props.disabled,
      htmlSize = props.htmlSize,
      className = props.className,
      maxLength = props.maxLength,
      suffix = props.suffix,
      showCount = props.showCount,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      inputClassName = props.inputClassName,
      rest = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var _useMergedState = (0,useMergedState/* default */.Z)(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var inputRef = (0,react.useRef)(null);

  var focus = function focus(option) {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };

  (0,react.useImperativeHandle)(ref, function () {
    return {
      focus: focus,
      blur: function blur() {
        var _inputRef$current;

        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;

        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;

        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.select();
      },
      input: inputRef.current
    };
  });
  (0,react.useEffect)(function () {
    setFocused(function (prev) {
      return prev && disabled ? false : prev;
    });
  }, [disabled]);

  var handleChange = function handleChange(e) {
    if (props.value === undefined) {
      setValue(e.target.value);
    }

    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };

  var handleFocus = function handleFocus(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };

  var handleBlur = function handleBlur(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };

  var handleReset = function handleReset(e) {
    setValue('');
    focus();

    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };

  var getInputElement = function getInputElement() {
    // Fix https://fb.me/react-unknown-prop
    var otherProps = (0,omit/* default */.Z)(props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    'defaultValue', 'showCount', 'affixWrapperClassName', 'groupClassName', 'inputClassName', 'wrapperClassName', 'htmlSize']);
    return /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
      autoComplete: autoComplete
    }, otherProps, {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: classnames_default()(prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled), inputClassName, !hasAddon(props) && !hasPrefixSuffix(props) && className),
      ref: inputRef,
      size: htmlSize,
      type: type
    }));
  };

  var getSuffix = function getSuffix() {
    // Max length value
    var hasMaxLength = Number(maxLength) > 0;

    if (suffix || showCount) {
      var val = fixControlledValue(value);

      var valueLength = (0,toConsumableArray/* default */.Z)(val).length;

      var dataCount = (0,esm_typeof/* default */.Z)(showCount) === 'object' ? showCount.formatter({
        value: val,
        count: valueLength,
        maxLength: maxLength
      }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
      return /*#__PURE__*/react.createElement(react.Fragment, null, !!showCount && /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-show-count-suffix"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix))
      }, dataCount), suffix);
    }

    return null;
  };

  return /*#__PURE__*/react.createElement(es_BaseInput, (0,esm_extends/* default */.Z)({}, rest, {
    prefixCls: prefixCls,
    className: className,
    inputElement: getInputElement(),
    handleReset: handleReset,
    value: fixControlledValue(value),
    focused: focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled: disabled
  }));
});
/* harmony default export */ var es_Input = (Input);
;// CONCATENATED MODULE: ./node_modules/rc-input/es/index.js



/* harmony default export */ var es = (es_Input);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(9708);
// EXTERNAL MODULE: ./node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js
var useRemovePasswordTimeout = __webpack_require__(72922);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/utils.js
// eslint-disable-next-line import/prefer-default-export
function utils_hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var style = __webpack_require__(47673);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/Input.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














// CSSINJS

function Input_fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}
function Input_resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  let event = e;
  if (e.type === 'click') {
    // Clone a new target for event.
    // Avoid the following usage, the setQuery method gets the original value.
    //
    // const [query, setQuery] = React.useState('');
    // <Input
    //   allowClear
    //   value={query}
    //   onChange={(e)=> {
    //     setQuery((prevStatus) => e.target.value);
    //   }}
    // />
    const currentTarget = target.cloneNode(true);
    // click clear icon
    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = '';
    onChange(event);
    return;
  }
  // Trigger by composition event, this means we need force change the input value
  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function Input_triggerFocus(element, option) {
  if (!element) {
    return;
  }
  element.focus(option);
  // Selection content
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
        break;
    }
  }
}
const Input_Input = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      bordered = true,
      status: customStatus,
      size: customSize,
      disabled: customDisabled,
      onBlur,
      onFocus,
      suffix,
      allowClear,
      addonAfter,
      addonBefore,
      className,
      onChange
    } = props,
    rest = __rest(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "onChange"]);
  const {
    getPrefixCls,
    direction,
    input
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('input', customizePrefixCls);
  const inputRef = (0,react.useRef)(null);
  // Style
  const [wrapSSR, hashId] = (0,style/* default */.ZP)(prefixCls);
  // ===================== Compact Item =====================
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  // ===================== Size =====================
  const size = react.useContext(SizeContext/* default */.Z);
  const mergedSize = compactSize || customSize || size;
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  // ===================== Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = (0,react.useContext)(form_context/* FormItemInputContext */.aM);
  const mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  // ===================== Focus warning =====================
  const inputHasPrefixSuffix = utils_hasPrefixSuffix(props) || !!hasFeedback;
  const prevHasPrefixSuffix = (0,react.useRef)(inputHasPrefixSuffix);
  (0,react.useEffect)(() => {
    var _a;
    if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
       false ? 0 : void 0;
    }
    prevHasPrefixSuffix.current = inputHasPrefixSuffix;
  }, [inputHasPrefixSuffix]);
  // ===================== Remove Password value =====================
  const removePasswordTimeout = (0,useRemovePasswordTimeout/* default */.Z)(inputRef, true);
  const handleBlur = e => {
    removePasswordTimeout();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  const handleFocus = e => {
    removePasswordTimeout();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  const handleChange = e => {
    removePasswordTimeout();
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  const suffixNode = (hasFeedback || suffix) && /*#__PURE__*/react.createElement(react.Fragment, null, suffix, hasFeedback && feedbackIcon);
  // Allow clear
  let mergedAllowClear;
  if (typeof allowClear === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null)
    };
  }
  return wrapSSR( /*#__PURE__*/react.createElement(es, Object.assign({
    ref: (0,es_ref/* composeRef */.sQ)(ref, inputRef),
    prefixCls: prefixCls,
    autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
  }, rest, {
    disabled: mergedDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: classnames_default()(className, compactItemClassnames),
    onChange: handleChange,
    addonAfter: addonAfter && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      override: true,
      status: true
    }, addonAfter)),
    addonBefore: addonBefore && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      override: true,
      status: true
    }, addonBefore)),
    inputClassName: classnames_default()({
      [\`\${prefixCls}-sm\`]: mergedSize === 'small',
      [\`\${prefixCls}-lg\`]: mergedSize === 'large',
      [\`\${prefixCls}-rtl\`]: direction === 'rtl',
      [\`\${prefixCls}-borderless\`]: !bordered
    }, !inputHasPrefixSuffix && (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus), hashId),
    affixWrapperClassName: classnames_default()({
      [\`\${prefixCls}-affix-wrapper-sm\`]: mergedSize === 'small',
      [\`\${prefixCls}-affix-wrapper-lg\`]: mergedSize === 'large',
      [\`\${prefixCls}-affix-wrapper-rtl\`]: direction === 'rtl',
      [\`\${prefixCls}-affix-wrapper-borderless\`]: !bordered
    }, (0,statusUtils/* getStatusClassNames */.Z)(\`\${prefixCls}-affix-wrapper\`, mergedStatus, hasFeedback), hashId),
    wrapperClassName: classnames_default()({
      [\`\${prefixCls}-group-rtl\`]: direction === 'rtl'
    }, hashId),
    groupClassName: classnames_default()({
      [\`\${prefixCls}-group-wrapper-sm\`]: mergedSize === 'small',
      [\`\${prefixCls}-group-wrapper-lg\`]: mergedSize === 'large',
      [\`\${prefixCls}-group-wrapper-rtl\`]: direction === 'rtl'
    }, (0,statusUtils/* getStatusClassNames */.Z)(\`\${prefixCls}-group-wrapper\`, mergedStatus, hasFeedback), hashId)
  })));
});
/* harmony default export */ var input_Input = (Input_Input);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY1OTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQSx5QkFBeUI7O0FBRXpCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOztBQ3ZGd0U7QUFDaEI7QUFDSjtBQUNoQjtBQUM0Qjs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBTTs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUFPO0FBQzFCLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxpQkFBaUIsb0JBQVUsZ0NBQWdDLEVBQUUsaUNBQWUsK0RBQStELGlDQUFlO0FBQzFKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNkJBQTZCLHNCQUFZO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHLEdBQUc7O0FBRU4sTUFBTSxlQUFlO0FBQ3JCOztBQUVBO0FBQ0EsMEJBQTBCLG9CQUFVLDBDQUEwQyxFQUFFLGlDQUFlLHlFQUF5RSxpQ0FBZSx1RUFBdUUsaUNBQWUseUVBQXlFLGlDQUFlLDBIQUEwSCxRQUFRO0FBQ3ZlLDREQUE0RCxtQkFBbUI7QUFDL0U7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSxLQUFLLHlCQUF5QixtQkFBbUI7QUFDakQ7QUFDQSxLQUFLLHdCQUF3QixzQkFBWTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0osTUFBTSxRQUFRO0FBQ2Q7QUFDQTtBQUNBLGlDQUFpQyxvQkFBVTtBQUMzQywrQkFBK0Isb0JBQVUscUVBQXFFO0FBQzlHOztBQUVBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSyxlQUFlLG1CQUFtQjtBQUN2QztBQUNBLEtBQUssOEJBQThCLG1CQUFtQjtBQUN0RDtBQUNBLEtBQUssNkJBQTZCLHNCQUFZO0FBQzlDO0FBQ0E7QUFDQSxLQUFLLDhCQUE4QixtQkFBbUI7QUFDdEQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxpREFBZSxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7O0FDbkhnQztBQUNzQjtBQUNwQjtBQUNjO0FBQ0Y7QUFDb0I7QUFDMUY7QUFDNEY7QUFDeEQ7QUFDRDtBQUNnRjtBQUMvRTtBQUN5QjtBQUM3RCx5QkFBeUIsb0JBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMENBQXdCOztBQUVyQyx3QkFBd0IsaUNBQWM7QUFDdEM7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLGdDQUFjO0FBQ3ZDO0FBQ0E7O0FBRUEsa0JBQWtCLGtCQUFRO0FBQzFCLG1CQUFtQixnQ0FBYztBQUNqQztBQUNBOztBQUVBLGlCQUFpQixnQkFBTTs7QUFFdkI7QUFDQTtBQUNBLE1BQU0sWUFBWTtBQUNsQjtBQUNBOztBQUVBLEVBQUUsNkJBQW1CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsbUJBQVM7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGVBQWU7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sZUFBZTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQUk7QUFDekI7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUIsVUFBVSw4QkFBUTtBQUM3RDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBVSxZQUFZLGlDQUFlLEdBQUcsaUVBQWlFLFFBQVEsWUFBWSxlQUFlO0FBQzdKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCOztBQUVsQyx3QkFBd0Isb0NBQWtCOztBQUUxQyxzQkFBc0IsNkJBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBCQUEwQixtQkFBbUIsQ0FBQyxjQUFjLG9DQUFvQyxtQkFBbUI7QUFDbkgsbUJBQW1CLG9CQUFVLDZDQUE2QyxpQ0FBZSxHQUFHO0FBQzVGLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixtQkFBbUIsQ0FBQyxZQUFTLEVBQUUsOEJBQVEsR0FBRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCw2Q0FBZSxLQUFLLEU7O0FDMUtnQjtBQUNSO0FBQ1A7QUFDckIsdUNBQWUsUUFBSyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIcEI7QUFDTyxTQUFTLHFCQUFlO0FBQy9CO0FBQ0EsQzs7OztBQ0hBLGFBQWEsU0FBSSxJQUFJLFNBQUk7QUFDekI7QUFDQTtBQUNBLDRIQUE0SCxjQUFjO0FBQzFJO0FBQ0E7QUFDQTtBQUNBO0FBQzZFO0FBQ3pDO0FBQ0w7QUFDYTtBQUM2QjtBQUN0QjtBQUNjO0FBQ1I7QUFDVztBQUNLO0FBQ0c7QUFDckM7QUFDaUM7QUFDOUI7QUFDMUM7QUFDK0I7QUFDeEIsU0FBUyx3QkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMscUJBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTLGtCQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sV0FBSyxnQkFBZ0Isb0JBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLGdCQUFnQixDQUFDLDZCQUFhO0FBQ3BDO0FBQ0EsbUJBQW1CLGdCQUFNO0FBQ3pCO0FBQ0EsNEJBQTRCLHlCQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLHlDQUFxQjtBQUMzQjtBQUNBLGVBQWUsZ0JBQWdCLENBQUMsMEJBQVc7QUFDM0M7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0IsQ0FBQyw4QkFBZTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsb0JBQVUsQ0FBQyx5Q0FBb0I7QUFDckMsdUJBQXVCLHNDQUFlO0FBQ3RDO0FBQ0EsK0JBQStCLHFCQUFlO0FBQzlDLDhCQUE4QixnQkFBTTtBQUNwQyxFQUFFLG1CQUFTO0FBQ1g7QUFDQTtBQUNBLE1BQU0sTUFBcUMsR0FBRyxDQUFnUztBQUM5VTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDLDJDQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsbUJBQW1CLENBQUMsY0FBYztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDhCQUE4QixtQkFBbUIsQ0FBQyxnQ0FBaUI7QUFDbkU7QUFDQTtBQUNBLCtCQUErQixtQkFBbUIsQ0FBQyxFQUFPO0FBQzFELFNBQVMsNkJBQVU7QUFDbkI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQkFBVTtBQUN6QjtBQUNBLDJDQUEyQyxtQkFBbUIsQ0FBQyw4QkFBYyxxQkFBcUIsbUJBQW1CLENBQUMsZ0NBQVc7QUFDakk7QUFDQTtBQUNBLEtBQUs7QUFDTCw2Q0FBNkMsbUJBQW1CLENBQUMsOEJBQWMscUJBQXFCLG1CQUFtQixDQUFDLGdDQUFXO0FBQ25JO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLG9CQUFVO0FBQzlCLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQixLQUFLLDJCQUEyQiwwQ0FBbUI7QUFDbkQsMkJBQTJCLG9CQUFVO0FBQ3JDLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQixLQUFLLEVBQUUsMENBQW1CLElBQUksVUFBVTtBQUN4QyxzQkFBc0Isb0JBQVU7QUFDaEMsVUFBVSxVQUFVO0FBQ3BCLEtBQUs7QUFDTCxvQkFBb0Isb0JBQVU7QUFDOUIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsS0FBSyxFQUFFLDBDQUFtQixJQUFJLFVBQVU7QUFDeEMsR0FBRztBQUNILENBQUM7QUFDRCxnREFBZSxXQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWlucHV0L2VzL3V0aWxzL2NvbW1vblV0aWxzLmpzPzVhZjkiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWlucHV0L2VzL0Jhc2VJbnB1dC5qcz9lMjVjIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9yYy1pbnB1dC9lcy9JbnB1dC5qcz8zNjk1Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9yYy1pbnB1dC9lcy9pbmRleC5qcz9hMmZlIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L3V0aWxzLmpzPzZkNmYiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5wdXQvSW5wdXQuanM/MzFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFzQWRkb24ocHJvcHMpIHtcbiAgcmV0dXJuICEhKHByb3BzLmFkZG9uQmVmb3JlIHx8IHByb3BzLmFkZG9uQWZ0ZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ByZWZpeFN1ZmZpeChwcm9wcykge1xuICByZXR1cm4gISEocHJvcHMucHJlZml4IHx8IHByb3BzLnN1ZmZpeCB8fCBwcm9wcy5hbGxvd0NsZWFyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlT25DaGFuZ2UodGFyZ2V0LCBlLCBvbkNoYW5nZSwgdGFyZ2V0VmFsdWUpIHtcbiAgaWYgKCFvbkNoYW5nZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBldmVudCA9IGU7XG5cbiAgaWYgKGUudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgIC8vIENsb25lIGEgbmV3IHRhcmdldCBmb3IgZXZlbnQuXG4gICAgLy8gQXZvaWQgdGhlIGZvbGxvd2luZyB1c2FnZSwgdGhlIHNldFF1ZXJ5IG1ldGhvZCBnZXRzIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAgICAvL1xuICAgIC8vIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICAgIC8vIDxJbnB1dFxuICAgIC8vICAgYWxsb3dDbGVhclxuICAgIC8vICAgdmFsdWU9e3F1ZXJ5fVxuICAgIC8vICAgb25DaGFuZ2U9eyhlKT0+IHtcbiAgICAvLyAgICAgc2V0UXVlcnkoKHByZXZTdGF0dXMpID0+IGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyAgIH19XG4gICAgLy8gLz5cbiAgICB2YXIgY3VycmVudFRhcmdldCA9IHRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7IC8vIGNsaWNrIGNsZWFyIGljb25cblxuICAgIGV2ZW50ID0gT2JqZWN0LmNyZWF0ZShlLCB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IGN1cnJlbnRUYXJnZXRcbiAgICAgIH0sXG4gICAgICBjdXJyZW50VGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBjdXJyZW50VGFyZ2V0XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgIG9uQ2hhbmdlKGV2ZW50KTtcbiAgICByZXR1cm47XG4gIH0gLy8gVHJpZ2dlciBieSBjb21wb3NpdGlvbiBldmVudCwgdGhpcyBtZWFucyB3ZSBuZWVkIGZvcmNlIGNoYW5nZSB0aGUgaW5wdXQgdmFsdWVcblxuXG4gIGlmICh0YXJnZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnQgPSBPYmplY3QuY3JlYXRlKGUsIHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogdGFyZ2V0XG4gICAgICB9LFxuICAgICAgY3VycmVudFRhcmdldDoge1xuICAgICAgICB2YWx1ZTogdGFyZ2V0XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGFyZ2V0LnZhbHVlID0gdGFyZ2V0VmFsdWU7XG4gICAgb25DaGFuZ2UoZXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyRm9jdXMoZWxlbWVudCwgb3B0aW9uKSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBlbGVtZW50LmZvY3VzKG9wdGlvbik7IC8vIFNlbGVjdGlvbiBjb250ZW50XG5cbiAgdmFyIF9yZWYgPSBvcHRpb24gfHwge30sXG4gICAgICBjdXJzb3IgPSBfcmVmLmN1cnNvcjtcblxuICBpZiAoY3Vyc29yKSB7XG4gICAgdmFyIGxlbiA9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChjdXJzb3IpIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuLCBsZW4pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBsZW4pO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGhhc0FkZG9uLCBoYXNQcmVmaXhTdWZmaXggfSBmcm9tIFwiLi91dGlscy9jb21tb25VdGlsc1wiO1xuXG52YXIgQmFzZUlucHV0ID0gZnVuY3Rpb24gQmFzZUlucHV0KHByb3BzKSB7XG4gIHZhciBpbnB1dEVsZW1lbnQgPSBwcm9wcy5pbnB1dEVsZW1lbnQsXG4gICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXggPSBwcm9wcy5wcmVmaXgsXG4gICAgICBzdWZmaXggPSBwcm9wcy5zdWZmaXgsXG4gICAgICBhZGRvbkJlZm9yZSA9IHByb3BzLmFkZG9uQmVmb3JlLFxuICAgICAgYWRkb25BZnRlciA9IHByb3BzLmFkZG9uQWZ0ZXIsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgYWZmaXhXcmFwcGVyQ2xhc3NOYW1lID0gcHJvcHMuYWZmaXhXcmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgZ3JvdXBDbGFzc05hbWUgPSBwcm9wcy5ncm91cENsYXNzTmFtZSxcbiAgICAgIHdyYXBwZXJDbGFzc05hbWUgPSBwcm9wcy53cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICBmb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIHRyaWdnZXJGb2N1cyA9IHByb3BzLnRyaWdnZXJGb2N1cyxcbiAgICAgIGFsbG93Q2xlYXIgPSBwcm9wcy5hbGxvd0NsZWFyLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIGhhbmRsZVJlc2V0ID0gcHJvcHMuaGFuZGxlUmVzZXQsXG4gICAgICBoaWRkZW4gPSBwcm9wcy5oaWRkZW47XG4gIHZhciBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdmFyIG9uSW5wdXRDbGljayA9IGZ1bmN0aW9uIG9uSW5wdXRDbGljayhlKSB7XG4gICAgdmFyIF9jb250YWluZXJSZWYkY3VycmVudDtcblxuICAgIGlmICgoX2NvbnRhaW5lclJlZiRjdXJyZW50ID0gY29udGFpbmVyUmVmLmN1cnJlbnQpICE9PSBudWxsICYmIF9jb250YWluZXJSZWYkY3VycmVudCAhPT0gdm9pZCAwICYmIF9jb250YWluZXJSZWYkY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRyaWdnZXJGb2N1cyA9PT0gbnVsbCB8fCB0cmlnZ2VyRm9jdXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyaWdnZXJGb2N1cygpO1xuICAgIH1cbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09IENsZWFyIEljb24gPT09PT09PT09PT09PT09PT09IC8vXG5cblxuICB2YXIgZ2V0Q2xlYXJJY29uID0gZnVuY3Rpb24gZ2V0Q2xlYXJJY29uKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIGlmICghYWxsb3dDbGVhcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG5lZWRDbGVhciA9ICFkaXNhYmxlZCAmJiAhcmVhZE9ubHkgJiYgdmFsdWU7XG4gICAgdmFyIGNsZWFySWNvbkNscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXItaWNvblwiKTtcbiAgICB2YXIgaWNvbk5vZGUgPSBfdHlwZW9mKGFsbG93Q2xlYXIpID09PSAnb2JqZWN0JyAmJiBhbGxvd0NsZWFyICE9PSBudWxsICYmIGFsbG93Q2xlYXIgIT09IHZvaWQgMCAmJiBhbGxvd0NsZWFyLmNsZWFySWNvbiA/IGFsbG93Q2xlYXIuY2xlYXJJY29uIDogJ+Kclic7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBvbkNsaWNrOiBoYW5kbGVSZXNldCAvLyBEbyBub3QgdHJpZ2dlciBvbkJsdXIgd2hlbiBjbGVhciBpbnB1dFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMzEyMDBcbiAgICAgICxcbiAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsZWFySWNvbkNscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoY2xlYXJJY29uQ2xzLCBcIi1oaWRkZW5cIiksICFuZWVkQ2xlYXIpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGNsZWFySWNvbkNscywgXCItaGFzLXN1ZmZpeFwiKSwgISFzdWZmaXgpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgIHRhYkluZGV4OiAtMVxuICAgIH0sIGljb25Ob2RlKTtcbiAgfTtcblxuICB2YXIgZWxlbWVudCA9IC8qI19fUFVSRV9fKi9jbG9uZUVsZW1lbnQoaW5wdXRFbGVtZW50LCB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGhpZGRlbjogaGlkZGVuXG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT0gUHJlZml4ICYgU3VmZml4ID09PT09PT09PT09PT09PT09PSAvL1xuXG4gIGlmIChoYXNQcmVmaXhTdWZmaXgocHJvcHMpKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgIHZhciBhZmZpeFdyYXBwZXJQcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXJcIik7XG4gICAgdmFyIGFmZml4V3JhcHBlckNscyA9IGNsYXNzTmFtZXMoYWZmaXhXcmFwcGVyUHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KGFmZml4V3JhcHBlclByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQoYWZmaXhXcmFwcGVyUHJlZml4Q2xzLCBcIi1mb2N1c2VkXCIpLCBmb2N1c2VkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQoYWZmaXhXcmFwcGVyUHJlZml4Q2xzLCBcIi1yZWFkb25seVwiKSwgcmVhZE9ubHkpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChhZmZpeFdyYXBwZXJQcmVmaXhDbHMsIFwiLWlucHV0LXdpdGgtY2xlYXItYnRuXCIpLCBzdWZmaXggJiYgYWxsb3dDbGVhciAmJiB2YWx1ZSksIF9jbGFzc05hbWVzMiksICFoYXNBZGRvbihwcm9wcykgJiYgY2xhc3NOYW1lLCBhZmZpeFdyYXBwZXJDbGFzc05hbWUpO1xuICAgIHZhciBzdWZmaXhOb2RlID0gKHN1ZmZpeCB8fCBhbGxvd0NsZWFyKSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN1ZmZpeFwiKVxuICAgIH0sIGdldENsZWFySWNvbigpLCBzdWZmaXgpO1xuICAgIGVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBhZmZpeFdyYXBwZXJDbHMsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBoaWRkZW46ICFoYXNBZGRvbihwcm9wcykgJiYgaGlkZGVuLFxuICAgICAgb25DbGljazogb25JbnB1dENsaWNrLFxuICAgICAgcmVmOiBjb250YWluZXJSZWZcbiAgICB9LCBwcmVmaXggJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wcmVmaXhcIilcbiAgICB9LCBwcmVmaXgpLCAvKiNfX1BVUkVfXyovY2xvbmVFbGVtZW50KGlucHV0RWxlbWVudCwge1xuICAgICAgc3R5bGU6IG51bGwsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBoaWRkZW46IG51bGxcbiAgICB9KSwgc3VmZml4Tm9kZSk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09IEFkZG9uID09PT09PT09PT09PT09PT09PSAvL1xuXG5cbiAgaWYgKGhhc0FkZG9uKHByb3BzKSkge1xuICAgIHZhciB3cmFwcGVyQ2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cFwiKTtcbiAgICB2YXIgYWRkb25DbHMgPSBcIlwiLmNvbmNhdCh3cmFwcGVyQ2xzLCBcIi1hZGRvblwiKTtcbiAgICB2YXIgbWVyZ2VkV3JhcHBlckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyXCIpLCB3cmFwcGVyQ2xzLCB3cmFwcGVyQ2xhc3NOYW1lKTtcbiAgICB2YXIgbWVyZ2VkR3JvdXBDbGFzc05hbWUgPSBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXAtd3JhcHBlclwiKSwgY2xhc3NOYW1lLCBncm91cENsYXNzTmFtZSk7IC8vIE5lZWQgYW5vdGhlciB3cmFwcGVyIGZvciBjaGFuZ2luZyBkaXNwbGF5OnRhYmxlIHRvIGRpc3BsYXk6aW5saW5lLWJsb2NrXG4gICAgLy8gYW5kIHB1dCBzdHlsZSBwcm9wIGluIHdyYXBwZXJcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBtZXJnZWRHcm91cENsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIGhpZGRlbjogaGlkZGVuXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogbWVyZ2VkV3JhcHBlckNsYXNzTmFtZVxuICAgIH0sIGFkZG9uQmVmb3JlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IGFkZG9uQ2xzXG4gICAgfSwgYWRkb25CZWZvcmUpLCAvKiNfX1BVUkVfXyovY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgIHN0eWxlOiBudWxsLFxuICAgICAgaGlkZGVuOiBudWxsXG4gICAgfSksIGFkZG9uQWZ0ZXIgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogYWRkb25DbHNcbiAgICB9LCBhZGRvbkFmdGVyKSkpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlSW5wdXQ7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJhdXRvQ29tcGxldGVcIiwgXCJvbkNoYW5nZVwiLCBcIm9uRm9jdXNcIiwgXCJvbkJsdXJcIiwgXCJvblByZXNzRW50ZXJcIiwgXCJvbktleURvd25cIiwgXCJwcmVmaXhDbHNcIiwgXCJkaXNhYmxlZFwiLCBcImh0bWxTaXplXCIsIFwiY2xhc3NOYW1lXCIsIFwibWF4TGVuZ3RoXCIsIFwic3VmZml4XCIsIFwic2hvd0NvdW50XCIsIFwidHlwZVwiLCBcImlucHV0Q2xhc3NOYW1lXCJdO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSBcIi4vQmFzZUlucHV0XCI7XG5pbXBvcnQgb21pdCBmcm9tIFwicmMtdXRpbC9lcy9vbWl0XCI7XG5pbXBvcnQgeyBmaXhDb250cm9sbGVkVmFsdWUsIGhhc0FkZG9uLCBoYXNQcmVmaXhTdWZmaXgsIHJlc29sdmVPbkNoYW5nZSwgdHJpZ2dlckZvY3VzIH0gZnJvbSBcIi4vdXRpbHMvY29tbW9uVXRpbHNcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVzZU1lcmdlZFN0YXRlIGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCI7XG52YXIgSW5wdXQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25QcmVzc0VudGVyID0gcHJvcHMub25QcmVzc0VudGVyLFxuICAgICAgb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy1pbnB1dCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGh0bWxTaXplID0gcHJvcHMuaHRtbFNpemUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBtYXhMZW5ndGggPSBwcm9wcy5tYXhMZW5ndGgsXG4gICAgICBzdWZmaXggPSBwcm9wcy5zdWZmaXgsXG4gICAgICBzaG93Q291bnQgPSBwcm9wcy5zaG93Q291bnQsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgaW5wdXRDbGFzc05hbWUgPSBwcm9wcy5pbnB1dENsYXNzTmFtZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZSA9IHVzZU1lcmdlZFN0YXRlKHByb3BzLmRlZmF1bHRWYWx1ZSwge1xuICAgIHZhbHVlOiBwcm9wcy52YWx1ZVxuICB9KSxcbiAgICAgIF91c2VNZXJnZWRTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlTWVyZ2VkU3RhdGUsIDIpLFxuICAgICAgdmFsdWUgPSBfdXNlTWVyZ2VkU3RhdGUyWzBdLFxuICAgICAgc2V0VmFsdWUgPSBfdXNlTWVyZ2VkU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShmYWxzZSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGZvY3VzZWQgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhciBmb2N1cyA9IGZ1bmN0aW9uIGZvY3VzKG9wdGlvbikge1xuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICB0cmlnZ2VyRm9jdXMoaW5wdXRSZWYuY3VycmVudCwgb3B0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9jdXM6IGZvY3VzLFxuICAgICAgYmx1cjogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgICAgdmFyIF9pbnB1dFJlZiRjdXJyZW50O1xuXG4gICAgICAgIChfaW5wdXRSZWYkY3VycmVudCA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbnB1dFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5wdXRSZWYkY3VycmVudC5ibHVyKCk7XG4gICAgICB9LFxuICAgICAgc2V0U2VsZWN0aW9uUmFuZ2U6IGZ1bmN0aW9uIHNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgX2lucHV0UmVmJGN1cnJlbnQyO1xuXG4gICAgICAgIChfaW5wdXRSZWYkY3VycmVudDIgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbnB1dFJlZiRjdXJyZW50Mi5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pO1xuICAgICAgfSxcbiAgICAgIHNlbGVjdDogZnVuY3Rpb24gc2VsZWN0KCkge1xuICAgICAgICB2YXIgX2lucHV0UmVmJGN1cnJlbnQzO1xuXG4gICAgICAgIChfaW5wdXRSZWYkY3VycmVudDMgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfaW5wdXRSZWYkY3VycmVudDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbnB1dFJlZiRjdXJyZW50My5zZWxlY3QoKTtcbiAgICAgIH0sXG4gICAgICBpbnB1dDogaW5wdXRSZWYuY3VycmVudFxuICAgIH07XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldEZvY3VzZWQoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgIHJldHVybiBwcmV2ICYmIGRpc2FibGVkID8gZmFsc2UgOiBwcmV2O1xuICAgIH0pO1xuICB9LCBbZGlzYWJsZWRdKTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBpZiAocHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICByZXNvbHZlT25DaGFuZ2UoaW5wdXRSZWYuY3VycmVudCwgZSwgb25DaGFuZ2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZSkge1xuICAgIGlmIChvblByZXNzRW50ZXIgJiYgZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIG9uUHJlc3NFbnRlcihlKTtcbiAgICB9XG5cbiAgICBvbktleURvd24gPT09IG51bGwgfHwgb25LZXlEb3duID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbktleURvd24oZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUZvY3VzID0gZnVuY3Rpb24gaGFuZGxlRm9jdXMoZSkge1xuICAgIHNldEZvY3VzZWQodHJ1ZSk7XG4gICAgb25Gb2N1cyA9PT0gbnVsbCB8fCBvbkZvY3VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkZvY3VzKGUpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVCbHVyID0gZnVuY3Rpb24gaGFuZGxlQmx1cihlKSB7XG4gICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgb25CbHVyID09PSBudWxsIHx8IG9uQmx1ciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25CbHVyKGUpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVSZXNldCA9IGZ1bmN0aW9uIGhhbmRsZVJlc2V0KGUpIHtcbiAgICBzZXRWYWx1ZSgnJyk7XG4gICAgZm9jdXMoKTtcblxuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICByZXNvbHZlT25DaGFuZ2UoaW5wdXRSZWYuY3VycmVudCwgZSwgb25DaGFuZ2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SW5wdXRFbGVtZW50ID0gZnVuY3Rpb24gZ2V0SW5wdXRFbGVtZW50KCkge1xuICAgIC8vIEZpeCBodHRwczovL2ZiLm1lL3JlYWN0LXVua25vd24tcHJvcFxuICAgIHZhciBvdGhlclByb3BzID0gb21pdChwcm9wcywgWydwcmVmaXhDbHMnLCAnb25QcmVzc0VudGVyJywgJ2FkZG9uQmVmb3JlJywgJ2FkZG9uQWZ0ZXInLCAncHJlZml4JywgJ3N1ZmZpeCcsICdhbGxvd0NsZWFyJywgLy8gSW5wdXQgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQsXG4gICAgLy8gc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCBib3RoLlxuICAgICdkZWZhdWx0VmFsdWUnLCAnc2hvd0NvdW50JywgJ2FmZml4V3JhcHBlckNsYXNzTmFtZScsICdncm91cENsYXNzTmFtZScsICdpbnB1dENsYXNzTmFtZScsICd3cmFwcGVyQ2xhc3NOYW1lJywgJ2h0bWxTaXplJ10pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlXG4gICAgfSwgb3RoZXJQcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscywgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIGlucHV0Q2xhc3NOYW1lLCAhaGFzQWRkb24ocHJvcHMpICYmICFoYXNQcmVmaXhTdWZmaXgocHJvcHMpICYmIGNsYXNzTmFtZSksXG4gICAgICByZWY6IGlucHV0UmVmLFxuICAgICAgc2l6ZTogaHRtbFNpemUsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSkpO1xuICB9O1xuXG4gIHZhciBnZXRTdWZmaXggPSBmdW5jdGlvbiBnZXRTdWZmaXgoKSB7XG4gICAgLy8gTWF4IGxlbmd0aCB2YWx1ZVxuICAgIHZhciBoYXNNYXhMZW5ndGggPSBOdW1iZXIobWF4TGVuZ3RoKSA+IDA7XG5cbiAgICBpZiAoc3VmZml4IHx8IHNob3dDb3VudCkge1xuICAgICAgdmFyIHZhbCA9IGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIHZhciB2YWx1ZUxlbmd0aCA9IF90b0NvbnN1bWFibGVBcnJheSh2YWwpLmxlbmd0aDtcblxuICAgICAgdmFyIGRhdGFDb3VudCA9IF90eXBlb2Yoc2hvd0NvdW50KSA9PT0gJ29iamVjdCcgPyBzaG93Q291bnQuZm9ybWF0dGVyKHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgY291bnQ6IHZhbHVlTGVuZ3RoLFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aFxuICAgICAgfSkgOiBcIlwiLmNvbmNhdCh2YWx1ZUxlbmd0aCkuY29uY2F0KGhhc01heExlbmd0aCA/IFwiIC8gXCIuY29uY2F0KG1heExlbmd0aCkgOiAnJyk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsICEhc2hvd0NvdW50ICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctY291bnQtc3VmZml4XCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2hvdy1jb3VudC1oYXMtc3VmZml4XCIpLCAhIXN1ZmZpeCkpXG4gICAgICB9LCBkYXRhQ291bnQpLCBzdWZmaXgpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYXNlSW5wdXQsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgaW5wdXRFbGVtZW50OiBnZXRJbnB1dEVsZW1lbnQoKSxcbiAgICBoYW5kbGVSZXNldDogaGFuZGxlUmVzZXQsXG4gICAgdmFsdWU6IGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSksXG4gICAgZm9jdXNlZDogZm9jdXNlZCxcbiAgICB0cmlnZ2VyRm9jdXM6IGZvY3VzLFxuICAgIHN1ZmZpeDogZ2V0U3VmZml4KCksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gIH0pKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7IiwiaW1wb3J0IEJhc2VJbnB1dCBmcm9tIFwiLi9CYXNlSW5wdXRcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuZXhwb3J0IHsgQmFzZUlucHV0IH07XG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ByZWZpeFN1ZmZpeChwcm9wcykge1xuICByZXR1cm4gISEocHJvcHMucHJlZml4IHx8IHByb3BzLnN1ZmZpeCB8fCBwcm9wcy5hbGxvd0NsZWFyKTtcbn0iLCJ2YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IENsb3NlQ2lyY2xlRmlsbGVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmNJbnB1dCBmcm9tICdyYy1pbnB1dCc7XG5pbXBvcnQgeyBjb21wb3NlUmVmIH0gZnJvbSBcInJjLXV0aWwvZXMvcmVmXCI7XG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBEaXNhYmxlZENvbnRleHQgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyL0Rpc2FibGVkQ29udGV4dCc7XG5pbXBvcnQgU2l6ZUNvbnRleHQgZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0JztcbmltcG9ydCB7IEZvcm1JdGVtSW5wdXRDb250ZXh0LCBOb0Zvcm1TdHlsZSB9IGZyb20gJy4uL2Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBOb0NvbXBhY3RTdHlsZSwgdXNlQ29tcGFjdEl0ZW1Db250ZXh0IH0gZnJvbSAnLi4vc3BhY2UvQ29tcGFjdCc7XG5pbXBvcnQgeyBnZXRNZXJnZWRTdGF0dXMsIGdldFN0YXR1c0NsYXNzTmFtZXMgfSBmcm9tICcuLi9fdXRpbC9zdGF0dXNVdGlscyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCB1c2VSZW1vdmVQYXNzd29yZFRpbWVvdXQgZnJvbSAnLi9ob29rcy91c2VSZW1vdmVQYXNzd29yZFRpbWVvdXQnO1xuaW1wb3J0IHsgaGFzUHJlZml4U3VmZml4IH0gZnJvbSAnLi91dGlscyc7XG4vLyBDU1NJTkpTXG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgZnVuY3Rpb24gZml4Q29udHJvbGxlZFZhbHVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBTdHJpbmcodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVPbkNoYW5nZSh0YXJnZXQsIGUsIG9uQ2hhbmdlLCB0YXJnZXRWYWx1ZSkge1xuICBpZiAoIW9uQ2hhbmdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBldmVudCA9IGU7XG4gIGlmIChlLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAvLyBDbG9uZSBhIG5ldyB0YXJnZXQgZm9yIGV2ZW50LlxuICAgIC8vIEF2b2lkIHRoZSBmb2xsb3dpbmcgdXNhZ2UsIHRoZSBzZXRRdWVyeSBtZXRob2QgZ2V0cyB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gICAgLy9cbiAgICAvLyBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgICAvLyA8SW5wdXRcbiAgICAvLyAgIGFsbG93Q2xlYXJcbiAgICAvLyAgIHZhbHVlPXtxdWVyeX1cbiAgICAvLyAgIG9uQ2hhbmdlPXsoZSk9PiB7XG4gICAgLy8gICAgIHNldFF1ZXJ5KChwcmV2U3RhdHVzKSA9PiBlLnRhcmdldC52YWx1ZSk7XG4gICAgLy8gICB9fVxuICAgIC8vIC8+XG4gICAgY29uc3QgY3VycmVudFRhcmdldCA9IHRhcmdldC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgLy8gY2xpY2sgY2xlYXIgaWNvblxuICAgIGV2ZW50ID0gT2JqZWN0LmNyZWF0ZShlLCB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IGN1cnJlbnRUYXJnZXRcbiAgICAgIH0sXG4gICAgICBjdXJyZW50VGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiBjdXJyZW50VGFyZ2V0XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgIG9uQ2hhbmdlKGV2ZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVHJpZ2dlciBieSBjb21wb3NpdGlvbiBldmVudCwgdGhpcyBtZWFucyB3ZSBuZWVkIGZvcmNlIGNoYW5nZSB0aGUgaW5wdXQgdmFsdWVcbiAgaWYgKHRhcmdldFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICBldmVudCA9IE9iamVjdC5jcmVhdGUoZSwge1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiB0YXJnZXRcbiAgICAgIH0sXG4gICAgICBjdXJyZW50VGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0YXJnZXQudmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICBvbkNoYW5nZShldmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG9uQ2hhbmdlKGV2ZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyRm9jdXMoZWxlbWVudCwgb3B0aW9uKSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50LmZvY3VzKG9wdGlvbik7XG4gIC8vIFNlbGVjdGlvbiBjb250ZW50XG4gIGNvbnN0IHtcbiAgICBjdXJzb3JcbiAgfSA9IG9wdGlvbiB8fCB7fTtcbiAgaWYgKGN1cnNvcikge1xuICAgIGNvbnN0IGxlbiA9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICAgIHN3aXRjaCAoY3Vyc29yKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShsZW4sIGxlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBsZW4pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbmNvbnN0IElucHV0ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3Qge1xuICAgICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgICBib3JkZXJlZCA9IHRydWUsXG4gICAgICBzdGF0dXM6IGN1c3RvbVN0YXR1cyxcbiAgICAgIHNpemU6IGN1c3RvbVNpemUsXG4gICAgICBkaXNhYmxlZDogY3VzdG9tRGlzYWJsZWQsXG4gICAgICBvbkJsdXIsXG4gICAgICBvbkZvY3VzLFxuICAgICAgc3VmZml4LFxuICAgICAgYWxsb3dDbGVhcixcbiAgICAgIGFkZG9uQWZ0ZXIsXG4gICAgICBhZGRvbkJlZm9yZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG9uQ2hhbmdlXG4gICAgfSA9IHByb3BzLFxuICAgIHJlc3QgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImJvcmRlcmVkXCIsIFwic3RhdHVzXCIsIFwic2l6ZVwiLCBcImRpc2FibGVkXCIsIFwib25CbHVyXCIsIFwib25Gb2N1c1wiLCBcInN1ZmZpeFwiLCBcImFsbG93Q2xlYXJcIiwgXCJhZGRvbkFmdGVyXCIsIFwiYWRkb25CZWZvcmVcIiwgXCJjbGFzc05hbWVcIiwgXCJvbkNoYW5nZVwiXSk7XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHMsXG4gICAgZGlyZWN0aW9uLFxuICAgIGlucHV0XG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICBjb25zdCBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2lucHV0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vIFN0eWxlXG4gIGNvbnN0IFt3cmFwU1NSLCBoYXNoSWRdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IENvbXBhY3QgSXRlbSA9PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3Qge1xuICAgIGNvbXBhY3RTaXplLFxuICAgIGNvbXBhY3RJdGVtQ2xhc3NuYW1lc1xuICB9ID0gdXNlQ29tcGFjdEl0ZW1Db250ZXh0KHByZWZpeENscywgZGlyZWN0aW9uKTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IFNpemUgPT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHNpemUgPSBSZWFjdC51c2VDb250ZXh0KFNpemVDb250ZXh0KTtcbiAgY29uc3QgbWVyZ2VkU2l6ZSA9IGNvbXBhY3RTaXplIHx8IGN1c3RvbVNpemUgfHwgc2l6ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IERpc2FibGVkID09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBkaXNhYmxlZCA9IFJlYWN0LnVzZUNvbnRleHQoRGlzYWJsZWRDb250ZXh0KTtcbiAgY29uc3QgbWVyZ2VkRGlzYWJsZWQgPSBjdXN0b21EaXNhYmxlZCAhPT0gbnVsbCAmJiBjdXN0b21EaXNhYmxlZCAhPT0gdm9pZCAwID8gY3VzdG9tRGlzYWJsZWQgOiBkaXNhYmxlZDtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IFN0YXR1cyA9PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3Qge1xuICAgIHN0YXR1czogY29udGV4dFN0YXR1cyxcbiAgICBoYXNGZWVkYmFjayxcbiAgICBmZWVkYmFja0ljb25cbiAgfSA9IHVzZUNvbnRleHQoRm9ybUl0ZW1JbnB1dENvbnRleHQpO1xuICBjb25zdCBtZXJnZWRTdGF0dXMgPSBnZXRNZXJnZWRTdGF0dXMoY29udGV4dFN0YXR1cywgY3VzdG9tU3RhdHVzKTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IEZvY3VzIHdhcm5pbmcgPT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IGlucHV0SGFzUHJlZml4U3VmZml4ID0gaGFzUHJlZml4U3VmZml4KHByb3BzKSB8fCAhIWhhc0ZlZWRiYWNrO1xuICBjb25zdCBwcmV2SGFzUHJlZml4U3VmZml4ID0gdXNlUmVmKGlucHV0SGFzUHJlZml4U3VmZml4KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGlucHV0SGFzUHJlZml4U3VmZml4ICYmICFwcmV2SGFzUHJlZml4U3VmZml4LmN1cnJlbnQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gKChfYSA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbnB1dCksICdJbnB1dCcsIGBXaGVuIElucHV0IGlzIGZvY3VzZWQsIGR5bmFtaWMgYWRkIG9yIHJlbW92ZSBwcmVmaXggLyBzdWZmaXggd2lsbCBtYWtlIGl0IGxvc2UgZm9jdXMgY2F1c2VkIGJ5IGRvbSBzdHJ1Y3R1cmUgY2hhbmdlLiBSZWFkIG1vcmU6IGh0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2lucHV0LyNGQVFgKSA6IHZvaWQgMDtcbiAgICB9XG4gICAgcHJldkhhc1ByZWZpeFN1ZmZpeC5jdXJyZW50ID0gaW5wdXRIYXNQcmVmaXhTdWZmaXg7XG4gIH0sIFtpbnB1dEhhc1ByZWZpeFN1ZmZpeF0pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT0gUmVtb3ZlIFBhc3N3b3JkIHZhbHVlID09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCByZW1vdmVQYXNzd29yZFRpbWVvdXQgPSB1c2VSZW1vdmVQYXNzd29yZFRpbWVvdXQoaW5wdXRSZWYsIHRydWUpO1xuICBjb25zdCBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgcmVtb3ZlUGFzc3dvcmRUaW1lb3V0KCk7XG4gICAgb25CbHVyID09PSBudWxsIHx8IG9uQmx1ciA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25CbHVyKGUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVGb2N1cyA9IGUgPT4ge1xuICAgIHJlbW92ZVBhc3N3b3JkVGltZW91dCgpO1xuICAgIG9uRm9jdXMgPT09IG51bGwgfHwgb25Gb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Gb2N1cyhlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgcmVtb3ZlUGFzc3dvcmRUaW1lb3V0KCk7XG4gICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGUpO1xuICB9O1xuICBjb25zdCBzdWZmaXhOb2RlID0gKGhhc0ZlZWRiYWNrIHx8IHN1ZmZpeCkgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHN1ZmZpeCwgaGFzRmVlZGJhY2sgJiYgZmVlZGJhY2tJY29uKTtcbiAgLy8gQWxsb3cgY2xlYXJcbiAgbGV0IG1lcmdlZEFsbG93Q2xlYXI7XG4gIGlmICh0eXBlb2YgYWxsb3dDbGVhciA9PT0gJ29iamVjdCcgJiYgKGFsbG93Q2xlYXIgPT09IG51bGwgfHwgYWxsb3dDbGVhciA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWxsb3dDbGVhci5jbGVhckljb24pKSB7XG4gICAgbWVyZ2VkQWxsb3dDbGVhciA9IGFsbG93Q2xlYXI7XG4gIH0gZWxzZSBpZiAoYWxsb3dDbGVhcikge1xuICAgIG1lcmdlZEFsbG93Q2xlYXIgPSB7XG4gICAgICBjbGVhckljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb3NlQ2lyY2xlRmlsbGVkLCBudWxsKVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHdyYXBTU1IoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJjSW5wdXQsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogY29tcG9zZVJlZihyZWYsIGlucHV0UmVmKSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBhdXRvQ29tcGxldGU6IGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dC5hdXRvQ29tcGxldGVcbiAgfSwgcmVzdCwge1xuICAgIGRpc2FibGVkOiBtZXJnZWREaXNhYmxlZCxcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgc3VmZml4OiBzdWZmaXhOb2RlLFxuICAgIGFsbG93Q2xlYXI6IG1lcmdlZEFsbG93Q2xlYXIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgY29tcGFjdEl0ZW1DbGFzc25hbWVzKSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIGFkZG9uQWZ0ZXI6IGFkZG9uQWZ0ZXIgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm9Db21wYWN0U3R5bGUsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vRm9ybVN0eWxlLCB7XG4gICAgICBvdmVycmlkZTogdHJ1ZSxcbiAgICAgIHN0YXR1czogdHJ1ZVxuICAgIH0sIGFkZG9uQWZ0ZXIpKSxcbiAgICBhZGRvbkJlZm9yZTogYWRkb25CZWZvcmUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm9Db21wYWN0U3R5bGUsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vRm9ybVN0eWxlLCB7XG4gICAgICBvdmVycmlkZTogdHJ1ZSxcbiAgICAgIHN0YXR1czogdHJ1ZVxuICAgIH0sIGFkZG9uQmVmb3JlKSksXG4gICAgaW5wdXRDbGFzc05hbWU6IGNsYXNzTmFtZXMoe1xuICAgICAgW2Ake3ByZWZpeENsc30tc21gXTogbWVyZ2VkU2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxnYF06IG1lcmdlZFNpemUgPT09ICdsYXJnZScsXG4gICAgICBbYCR7cHJlZml4Q2xzfS1ydGxgXTogZGlyZWN0aW9uID09PSAncnRsJyxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJvcmRlcmxlc3NgXTogIWJvcmRlcmVkXG4gICAgfSwgIWlucHV0SGFzUHJlZml4U3VmZml4ICYmIGdldFN0YXR1c0NsYXNzTmFtZXMocHJlZml4Q2xzLCBtZXJnZWRTdGF0dXMpLCBoYXNoSWQpLFxuICAgIGFmZml4V3JhcHBlckNsYXNzTmFtZTogY2xhc3NOYW1lcyh7XG4gICAgICBbYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyLXNtYF06IG1lcmdlZFNpemUgPT09ICdzbWFsbCcsXG4gICAgICBbYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyLWxnYF06IG1lcmdlZFNpemUgPT09ICdsYXJnZScsXG4gICAgICBbYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyLXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnLFxuICAgICAgW2Ake3ByZWZpeENsc30tYWZmaXgtd3JhcHBlci1ib3JkZXJsZXNzYF06ICFib3JkZXJlZFxuICAgIH0sIGdldFN0YXR1c0NsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyYCwgbWVyZ2VkU3RhdHVzLCBoYXNGZWVkYmFjayksIGhhc2hJZCksXG4gICAgd3JhcHBlckNsYXNzTmFtZTogY2xhc3NOYW1lcyh7XG4gICAgICBbYCR7cHJlZml4Q2xzfS1ncm91cC1ydGxgXTogZGlyZWN0aW9uID09PSAncnRsJ1xuICAgIH0sIGhhc2hJZCksXG4gICAgZ3JvdXBDbGFzc05hbWU6IGNsYXNzTmFtZXMoe1xuICAgICAgW2Ake3ByZWZpeENsc30tZ3JvdXAtd3JhcHBlci1zbWBdOiBtZXJnZWRTaXplID09PSAnc21hbGwnLFxuICAgICAgW2Ake3ByZWZpeENsc30tZ3JvdXAtd3JhcHBlci1sZ2BdOiBtZXJnZWRTaXplID09PSAnbGFyZ2UnLFxuICAgICAgW2Ake3ByZWZpeENsc30tZ3JvdXAtd3JhcHBlci1ydGxgXTogZGlyZWN0aW9uID09PSAncnRsJ1xuICAgIH0sIGdldFN0YXR1c0NsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS1ncm91cC13cmFwcGVyYCwgbWVyZ2VkU3RhdHVzLCBoYXNGZWVkYmFjayksIGhhc2hJZClcbiAgfSkpKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///16591
`)},80173:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ input_TextArea; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-textarea/es/index.js + 2 modules
var es = __webpack_require__(57239);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(65223);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(9708);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(32531);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(73568);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(4340);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/ClearableLabeledInput.js










const ClearableInputType = ['text', 'input'];
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
let ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ClearableLabeledInput, _React$Component);
  var _super = (0,createSuper/* default */.Z)(ClearableLabeledInput);
  function ClearableLabeledInput() {
    (0,classCallCheck/* default */.Z)(this, ClearableLabeledInput);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      const {
        value,
        disabled,
        readOnly,
        handleReset,
        suffix
      } = this.props;
      const needClear = !disabled && !readOnly && value;
      const className = \`\${prefixCls}-clear-icon\`;
      return /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, {
        onClick: handleReset,
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown: e => e.preventDefault(),
        className: classnames_default()({
          [\`\${className}-hidden\`]: !needClear,
          [\`\${className}-has-suffix\`]: !!suffix
        }, className),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
      const {
        value,
        allowClear,
        className,
        style,
        direction,
        bordered,
        hidden,
        status: customStatus,
        hashId
      } = this.props;
      const {
        status: contextStatus,
        hasFeedback
      } = statusContext;
      if (!allowClear) {
        return (0,reactNode/* cloneElement */.Tm)(element, {
          value
        });
      }
      const affixWrapperCls = classnames_default()(\`\${prefixCls}-affix-wrapper\`, \`\${prefixCls}-affix-wrapper-textarea-with-clear-btn\`, (0,statusUtils/* getStatusClassNames */.Z)(\`\${prefixCls}-affix-wrapper\`, (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus), hasFeedback), {
        [\`\${prefixCls}-affix-wrapper-rtl\`]: direction === 'rtl',
        [\`\${prefixCls}-affix-wrapper-borderless\`]: !bordered,
        // className will go to addon wrapper
        [\`\${className}\`]: !hasAddon(this.props) && className
      }, hashId);
      return /*#__PURE__*/react.createElement("span", {
        className: affixWrapperCls,
        style: style,
        hidden: hidden
      }, (0,reactNode/* cloneElement */.Tm)(element, {
        style: null,
        value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(form_context/* FormItemInputContext.Consumer */.aM.Consumer, null, statusContext => {
        const {
          prefixCls,
          inputType,
          element
        } = this.props;
        if (inputType === ClearableInputType[0]) {
          return this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
        }
      });
    }
  }]);
  return ClearableLabeledInput;
}(react.Component);
/* harmony default export */ var input_ClearableLabeledInput = (ClearableLabeledInput);
// EXTERNAL MODULE: ./node_modules/antd/es/input/Input.js + 5 modules
var Input = __webpack_require__(16591);
// EXTERNAL MODULE: ./node_modules/antd/es/input/style/index.js
var input_style = __webpack_require__(47673);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/TextArea.js

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













function fixEmojiLength(value, maxLength) {
  return (0,toConsumableArray/* default */.Z)(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // \u5149\u6807\u5728\u5C3E\u90E8\uFF0C\u76F4\u63A5\u622A\u65AD
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ((0,toConsumableArray/* default */.Z)(preValue || '').length < triggerValue.length && (0,toConsumableArray/* default */.Z)(triggerValue || '').length > maxLength) {
    // \u5149\u6807\u5728\u4E2D\u95F4\uFF0C\u5982\u679C\u6700\u540E\u7684\u503C\u8D85\u8FC7\u6700\u5927\u503C\uFF0C\u5219\u91C7\u7528\u539F\u5148\u7684\u503C
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
const TextArea = /*#__PURE__*/react.forwardRef((_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      showCount = false,
      maxLength,
      className,
      style,
      size: customizeSize,
      disabled: customDisabled,
      onCompositionStart,
      onCompositionEnd,
      onChange,
      status: customStatus
    } = _a,
    props = __rest(_a, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "status"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const size = react.useContext(SizeContext/* default */.Z);
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = react.useContext(form_context/* FormItemInputContext */.aM);
  const mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  const innerRef = react.useRef(null);
  const clearableInputRef = react.useRef(null);
  const [compositing, setCompositing] = react.useState(false);
  const oldCompositionValueRef = react.useRef();
  const oldSelectionStartRef = react.useRef(0);
  const [value, setValue] = (0,useMergedState/* default */.Z)(props.defaultValue, {
    value: props.value
  });
  const {
    hidden
  } = props;
  const handleSetValue = (val, callback) => {
    if (props.value === undefined) {
      setValue(val);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  };
  // =========================== Value Update ===========================
  // Max length value
  const hasMaxLength = Number(maxLength) > 0;
  const onInternalCompositionStart = e => {
    setCompositing(true);
    // \u62FC\u97F3\u8F93\u5165\u524D\u4FDD\u5B58\u4E00\u4EFD\u65E7\u503C
    oldCompositionValueRef.current = value;
    // \u4FDD\u5B58\u65E7\u7684\u5149\u6807\u4F4D\u7F6E
    oldSelectionStartRef.current = e.currentTarget.selectionStart;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  const onInternalCompositionEnd = e => {
    var _a;
    setCompositing(false);
    let triggerValue = e.currentTarget.value;
    if (hasMaxLength) {
      const isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_a = oldCompositionValueRef.current) === null || _a === void 0 ? void 0 : _a.length);
      triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
    }
    // Patch composition onChange when value changed
    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      (0,Input/* resolveOnChange */.rJ)(e.currentTarget, e, onChange, triggerValue);
    }
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  const handleChange = e => {
    let triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      // 1. \u590D\u5236\u7C98\u8D34\u8D85\u8FC7maxlength\u7684\u60C5\u51B5 2.\u672A\u8D85\u8FC7maxlength\u7684\u60C5\u51B5
      const isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
      triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
    }
    handleSetValue(triggerValue);
    (0,Input/* resolveOnChange */.rJ)(e.currentTarget, e, onChange, triggerValue);
  };
  // ============================== Reset ===============================
  const handleReset = e => {
    var _a, _b, _c;
    handleSetValue('');
    (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    (0,Input/* resolveOnChange */.rJ)((_c = (_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.resizableTextArea) === null || _c === void 0 ? void 0 : _c.textArea, e, onChange);
  };
  const prefixCls = getPrefixCls('input', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = (0,input_style/* default */.ZP)(prefixCls);
  react.useImperativeHandle(ref, () => {
    var _a;
    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: option => {
        var _a, _b;
        (0,Input/* triggerFocus */.nH)((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: () => {
        var _a;
        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  const textArea = /*#__PURE__*/react.createElement(es/* default */.Z, Object.assign({}, (0,omit/* default */.Z)(props, ['allowClear']), {
    disabled: mergedDisabled,
    className: classnames_default()({
      [\`\${prefixCls}-borderless\`]: !bordered,
      [className]: className && !showCount,
      [\`\${prefixCls}-sm\`]: size === 'small' || customizeSize === 'small',
      [\`\${prefixCls}-lg\`]: size === 'large' || customizeSize === 'large'
    }, (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus), hashId),
    style: showCount ? {
      resize: style === null || style === void 0 ? void 0 : style.resize
    } : style,
    prefixCls: prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  let val = (0,Input/* fixControlledValue */.D7)(value);
  if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
    // fix #27612 \u5C06value\u8F6C\u4E3A\u6570\u7EC4\u8FDB\u884C\u622A\u53D6\uFF0C\u89E3\u51B3 '\u{1F602}'.length === 2 \u7B49emoji\u8868\u60C5\u5BFC\u81F4\u7684\u622A\u53D6\u4E71\u7801\u7684\u95EE\u9898
    val = fixEmojiLength(val, maxLength);
  }
  // TextArea
  const textareaNode = /*#__PURE__*/react.createElement(input_ClearableLabeledInput, Object.assign({
    disabled: mergedDisabled
  }, props, {
    prefixCls: prefixCls,
    direction: direction,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset: handleReset,
    ref: clearableInputRef,
    bordered: bordered,
    status: customStatus,
    style: showCount ? undefined : style,
    hashId: hashId
  }));
  // Only show text area wrapper when needed
  if (showCount || hasFeedback) {
    const valueLength = (0,toConsumableArray/* default */.Z)(val).length;
    let dataCount = '';
    if (typeof showCount === 'object') {
      dataCount = showCount.formatter({
        value: val,
        count: valueLength,
        maxLength
      });
    } else {
      dataCount = \`\${valueLength}\${hasMaxLength ? \` / \${maxLength}\` : ''}\`;
    }
    return /*#__PURE__*/react.createElement("div", {
      hidden: hidden,
      className: classnames_default()(\`\${prefixCls}-textarea\`, {
        [\`\${prefixCls}-textarea-rtl\`]: direction === 'rtl',
        [\`\${prefixCls}-textarea-show-count\`]: showCount
      }, (0,statusUtils/* getStatusClassNames */.Z)(\`\${prefixCls}-textarea\`, mergedStatus, hasFeedback), className, hashId),
      style: style,
      "data-count": dataCount
    }, textareaNode, hasFeedback && /*#__PURE__*/react.createElement("span", {
      className: \`\${prefixCls}-textarea-suffix\`
    }, feedbackIcon));
  }
  return wrapSSR(textareaNode);
});
/* harmony default export */ var input_TextArea = (TextArea);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBDQUFtQixJQUFJLFVBQVU7QUFDMUM7QUFDQTtBQUNBLEtBQUssNENBQTRDLG1CQUFtQjtBQUNwRSxvQkFBb0IsVUFBVTtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRCxtREFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5wdXQvQ2xlYXJhYmxlTGFiZWxlZElucHV0LmpzPzAxMWUiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvaW5wdXQvVGV4dEFyZWEuanM/MTZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IENsb3NlQ2lyY2xlRmlsbGVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9DbG9zZUNpcmNsZUZpbGxlZFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtSXRlbUlucHV0Q29udGV4dCB9IGZyb20gJy4uL2Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tICcuLi9fdXRpbC9yZWFjdE5vZGUnO1xuaW1wb3J0IHsgZ2V0TWVyZ2VkU3RhdHVzLCBnZXRTdGF0dXNDbGFzc05hbWVzIH0gZnJvbSAnLi4vX3V0aWwvc3RhdHVzVXRpbHMnO1xuY29uc3QgQ2xlYXJhYmxlSW5wdXRUeXBlID0gWyd0ZXh0JywgJ2lucHV0J107XG5mdW5jdGlvbiBoYXNBZGRvbihwcm9wcykge1xuICByZXR1cm4gISEocHJvcHMuYWRkb25CZWZvcmUgfHwgcHJvcHMuYWRkb25BZnRlcik7XG59XG5sZXQgQ2xlYXJhYmxlTGFiZWxlZElucHV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDbGVhcmFibGVMYWJlbGVkSW5wdXQsIF9SZWFjdCRDb21wb25lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENsZWFyYWJsZUxhYmVsZWRJbnB1dCk7XG4gIGZ1bmN0aW9uIENsZWFyYWJsZUxhYmVsZWRJbnB1dCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xlYXJhYmxlTGFiZWxlZElucHV0KTtcbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKENsZWFyYWJsZUxhYmVsZWRJbnB1dCwgW3tcbiAgICBrZXk6IFwicmVuZGVyQ2xlYXJJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFySWNvbihwcmVmaXhDbHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICByZWFkT25seSxcbiAgICAgICAgaGFuZGxlUmVzZXQsXG4gICAgICAgIHN1ZmZpeFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBuZWVkQ2xlYXIgPSAhZGlzYWJsZWQgJiYgIXJlYWRPbmx5ICYmIHZhbHVlO1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7cHJlZml4Q2xzfS1jbGVhci1pY29uYDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbG9zZUNpcmNsZUZpbGxlZCwge1xuICAgICAgICBvbkNsaWNrOiBoYW5kbGVSZXNldCxcbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgb25CbHVyIHdoZW4gY2xlYXIgaW5wdXRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMzEyMDBcbiAgICAgICAgb25Nb3VzZURvd246IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoe1xuICAgICAgICAgIFtgJHtjbGFzc05hbWV9LWhpZGRlbmBdOiAhbmVlZENsZWFyLFxuICAgICAgICAgIFtgJHtjbGFzc05hbWV9LWhhcy1zdWZmaXhgXTogISFzdWZmaXhcbiAgICAgICAgfSwgY2xhc3NOYW1lKSxcbiAgICAgICAgcm9sZTogXCJidXR0b25cIlxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclRleHRBcmVhV2l0aENsZWFySWNvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUZXh0QXJlYVdpdGhDbGVhckljb24ocHJlZml4Q2xzLCBlbGVtZW50LCBzdGF0dXNDb250ZXh0KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBhbGxvd0NsZWFyLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIGJvcmRlcmVkLFxuICAgICAgICBoaWRkZW4sXG4gICAgICAgIHN0YXR1czogY3VzdG9tU3RhdHVzLFxuICAgICAgICBoYXNoSWRcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge1xuICAgICAgICBzdGF0dXM6IGNvbnRleHRTdGF0dXMsXG4gICAgICAgIGhhc0ZlZWRiYWNrXG4gICAgICB9ID0gc3RhdHVzQ29udGV4dDtcbiAgICAgIGlmICghYWxsb3dDbGVhcikge1xuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFmZml4V3JhcHBlckNscyA9IGNsYXNzTmFtZXMoYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyYCwgYCR7cHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyLXRleHRhcmVhLXdpdGgtY2xlYXItYnRuYCwgZ2V0U3RhdHVzQ2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWFmZml4LXdyYXBwZXJgLCBnZXRNZXJnZWRTdGF0dXMoY29udGV4dFN0YXR1cywgY3VzdG9tU3RhdHVzKSwgaGFzRmVlZGJhY2spLCB7XG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LWFmZml4LXdyYXBwZXItcnRsYF06IGRpcmVjdGlvbiA9PT0gJ3J0bCcsXG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LWFmZml4LXdyYXBwZXItYm9yZGVybGVzc2BdOiAhYm9yZGVyZWQsXG4gICAgICAgIC8vIGNsYXNzTmFtZSB3aWxsIGdvIHRvIGFkZG9uIHdyYXBwZXJcbiAgICAgICAgW2Ake2NsYXNzTmFtZX1gXTogIWhhc0FkZG9uKHRoaXMucHJvcHMpICYmIGNsYXNzTmFtZVxuICAgICAgfSwgaGFzaElkKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGFmZml4V3JhcHBlckNscyxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBoaWRkZW46IGhpZGRlblxuICAgICAgfSwgY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgc3R5bGU6IG51bGwsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSwgdGhpcy5yZW5kZXJDbGVhckljb24ocHJlZml4Q2xzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUl0ZW1JbnB1dENvbnRleHQuQ29uc3VtZXIsIG51bGwsIHN0YXR1c0NvbnRleHQgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgcHJlZml4Q2xzLFxuICAgICAgICAgIGlucHV0VHlwZSxcbiAgICAgICAgICBlbGVtZW50XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoaW5wdXRUeXBlID09PSBDbGVhcmFibGVJbnB1dFR5cGVbMF0pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZXh0QXJlYVdpdGhDbGVhckljb24ocHJlZml4Q2xzLCBlbGVtZW50LCBzdGF0dXNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDbGVhcmFibGVMYWJlbGVkSW5wdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBDbGVhcmFibGVMYWJlbGVkSW5wdXQ7IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSY1RleHRBcmVhIGZyb20gJ3JjLXRleHRhcmVhJztcbmltcG9ydCB1c2VNZXJnZWRTdGF0ZSBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VNZXJnZWRTdGF0ZVwiO1xuaW1wb3J0IG9taXQgZnJvbSBcInJjLXV0aWwvZXMvb21pdFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgRGlzYWJsZWRDb250ZXh0IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlci9EaXNhYmxlZENvbnRleHQnO1xuaW1wb3J0IFNpemVDb250ZXh0IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dCc7XG5pbXBvcnQgeyBGb3JtSXRlbUlucHV0Q29udGV4dCB9IGZyb20gJy4uL2Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBnZXRNZXJnZWRTdGF0dXMsIGdldFN0YXR1c0NsYXNzTmFtZXMgfSBmcm9tICcuLi9fdXRpbC9zdGF0dXNVdGlscyc7XG5pbXBvcnQgQ2xlYXJhYmxlTGFiZWxlZElucHV0IGZyb20gJy4vQ2xlYXJhYmxlTGFiZWxlZElucHV0JztcbmltcG9ydCB7IGZpeENvbnRyb2xsZWRWYWx1ZSwgcmVzb2x2ZU9uQ2hhbmdlLCB0cmlnZ2VyRm9jdXMgfSBmcm9tICcuL0lucHV0JztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmZ1bmN0aW9uIGZpeEVtb2ppTGVuZ3RoKHZhbHVlLCBtYXhMZW5ndGgpIHtcbiAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheSh2YWx1ZSB8fCAnJykuc2xpY2UoMCwgbWF4TGVuZ3RoKS5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIHNldFRyaWdnZXJWYWx1ZShpc0N1cnNvckluRW5kLCBwcmVWYWx1ZSwgdHJpZ2dlclZhbHVlLCBtYXhMZW5ndGgpIHtcbiAgbGV0IG5ld1RyaWdnZXJWYWx1ZSA9IHRyaWdnZXJWYWx1ZTtcbiAgaWYgKGlzQ3Vyc29ySW5FbmQpIHtcbiAgICAvLyDlhYnmoIflnKjlsL7pg6jvvIznm7TmjqXmiKrmlq1cbiAgICBuZXdUcmlnZ2VyVmFsdWUgPSBmaXhFbW9qaUxlbmd0aCh0cmlnZ2VyVmFsdWUsIG1heExlbmd0aCk7XG4gIH0gZWxzZSBpZiAoX3RvQ29uc3VtYWJsZUFycmF5KHByZVZhbHVlIHx8ICcnKS5sZW5ndGggPCB0cmlnZ2VyVmFsdWUubGVuZ3RoICYmIF90b0NvbnN1bWFibGVBcnJheSh0cmlnZ2VyVmFsdWUgfHwgJycpLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgIC8vIOWFieagh+WcqOS4remXtO+8jOWmguaenOacgOWQjueahOWAvOi2hei/h+acgOWkp+WAvO+8jOWImemHh+eUqOWOn+WFiOeahOWAvFxuICAgIG5ld1RyaWdnZXJWYWx1ZSA9IHByZVZhbHVlO1xuICB9XG4gIHJldHVybiBuZXdUcmlnZ2VyVmFsdWU7XG59XG5jb25zdCBUZXh0QXJlYSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChfYSwgcmVmKSA9PiB7XG4gIHZhciB7XG4gICAgICBwcmVmaXhDbHM6IGN1c3RvbWl6ZVByZWZpeENscyxcbiAgICAgIGJvcmRlcmVkID0gdHJ1ZSxcbiAgICAgIHNob3dDb3VudCA9IGZhbHNlLFxuICAgICAgbWF4TGVuZ3RoLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBzaXplOiBjdXN0b21pemVTaXplLFxuICAgICAgZGlzYWJsZWQ6IGN1c3RvbURpc2FibGVkLFxuICAgICAgb25Db21wb3NpdGlvblN0YXJ0LFxuICAgICAgb25Db21wb3NpdGlvbkVuZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc3RhdHVzOiBjdXN0b21TdGF0dXNcbiAgICB9ID0gX2EsXG4gICAgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImJvcmRlcmVkXCIsIFwic2hvd0NvdW50XCIsIFwibWF4TGVuZ3RoXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJzaXplXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNvbXBvc2l0aW9uU3RhcnRcIiwgXCJvbkNvbXBvc2l0aW9uRW5kXCIsIFwib25DaGFuZ2VcIiwgXCJzdGF0dXNcIl0pO1xuICBjb25zdCB7XG4gICAgZ2V0UHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvblxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgY29uc3Qgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoU2l6ZUNvbnRleHQpO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT0gRGlzYWJsZWQgPT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IGRpc2FibGVkID0gUmVhY3QudXNlQ29udGV4dChEaXNhYmxlZENvbnRleHQpO1xuICBjb25zdCBtZXJnZWREaXNhYmxlZCA9IGN1c3RvbURpc2FibGVkICE9PSBudWxsICYmIGN1c3RvbURpc2FibGVkICE9PSB2b2lkIDAgPyBjdXN0b21EaXNhYmxlZCA6IGRpc2FibGVkO1xuICBjb25zdCB7XG4gICAgc3RhdHVzOiBjb250ZXh0U3RhdHVzLFxuICAgIGhhc0ZlZWRiYWNrLFxuICAgIGZlZWRiYWNrSWNvblxuICB9ID0gUmVhY3QudXNlQ29udGV4dChGb3JtSXRlbUlucHV0Q29udGV4dCk7XG4gIGNvbnN0IG1lcmdlZFN0YXR1cyA9IGdldE1lcmdlZFN0YXR1cyhjb250ZXh0U3RhdHVzLCBjdXN0b21TdGF0dXMpO1xuICBjb25zdCBpbm5lclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgY2xlYXJhYmxlSW5wdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtjb21wb3NpdGluZywgc2V0Q29tcG9zaXRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvbGRDb21wb3NpdGlvblZhbHVlUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IG9sZFNlbGVjdGlvblN0YXJ0UmVmID0gUmVhY3QudXNlUmVmKDApO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZU1lcmdlZFN0YXRlKHByb3BzLmRlZmF1bHRWYWx1ZSwge1xuICAgIHZhbHVlOiBwcm9wcy52YWx1ZVxuICB9KTtcbiAgY29uc3Qge1xuICAgIGhpZGRlblxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGhhbmRsZVNldFZhbHVlID0gKHZhbCwgY2FsbGJhY2spID0+IHtcbiAgICBpZiAocHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VmFsdWUodmFsKTtcbiAgICAgIGNhbGxiYWNrID09PSBudWxsIHx8IGNhbGxiYWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IFZhbHVlIFVwZGF0ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gTWF4IGxlbmd0aCB2YWx1ZVxuICBjb25zdCBoYXNNYXhMZW5ndGggPSBOdW1iZXIobWF4TGVuZ3RoKSA+IDA7XG4gIGNvbnN0IG9uSW50ZXJuYWxDb21wb3NpdGlvblN0YXJ0ID0gZSA9PiB7XG4gICAgc2V0Q29tcG9zaXRpbmcodHJ1ZSk7XG4gICAgLy8g5ou86Z+z6L6T5YWl5YmN5L+d5a2Y5LiA5Lu95pen5YC8XG4gICAgb2xkQ29tcG9zaXRpb25WYWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgLy8g5L+d5a2Y5pen55qE5YWJ5qCH5L2N572uXG4gICAgb2xkU2VsZWN0aW9uU3RhcnRSZWYuY3VycmVudCA9IGUuY3VycmVudFRhcmdldC5zZWxlY3Rpb25TdGFydDtcbiAgICBvbkNvbXBvc2l0aW9uU3RhcnQgPT09IG51bGwgfHwgb25Db21wb3NpdGlvblN0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNvbXBvc2l0aW9uU3RhcnQoZSk7XG4gIH07XG4gIGNvbnN0IG9uSW50ZXJuYWxDb21wb3NpdGlvbkVuZCA9IGUgPT4ge1xuICAgIHZhciBfYTtcbiAgICBzZXRDb21wb3NpdGluZyhmYWxzZSk7XG4gICAgbGV0IHRyaWdnZXJWYWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICBpZiAoaGFzTWF4TGVuZ3RoKSB7XG4gICAgICBjb25zdCBpc0N1cnNvckluRW5kID0gb2xkU2VsZWN0aW9uU3RhcnRSZWYuY3VycmVudCA+PSBtYXhMZW5ndGggKyAxIHx8IG9sZFNlbGVjdGlvblN0YXJ0UmVmLmN1cnJlbnQgPT09ICgoX2EgPSBvbGRDb21wb3NpdGlvblZhbHVlUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpO1xuICAgICAgdHJpZ2dlclZhbHVlID0gc2V0VHJpZ2dlclZhbHVlKGlzQ3Vyc29ySW5FbmQsIG9sZENvbXBvc2l0aW9uVmFsdWVSZWYuY3VycmVudCwgdHJpZ2dlclZhbHVlLCBtYXhMZW5ndGgpO1xuICAgIH1cbiAgICAvLyBQYXRjaCBjb21wb3NpdGlvbiBvbkNoYW5nZSB3aGVuIHZhbHVlIGNoYW5nZWRcbiAgICBpZiAodHJpZ2dlclZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgaGFuZGxlU2V0VmFsdWUodHJpZ2dlclZhbHVlKTtcbiAgICAgIHJlc29sdmVPbkNoYW5nZShlLmN1cnJlbnRUYXJnZXQsIGUsIG9uQ2hhbmdlLCB0cmlnZ2VyVmFsdWUpO1xuICAgIH1cbiAgICBvbkNvbXBvc2l0aW9uRW5kID09PSBudWxsIHx8IG9uQ29tcG9zaXRpb25FbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ29tcG9zaXRpb25FbmQoZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIGxldCB0cmlnZ2VyVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAoIWNvbXBvc2l0aW5nICYmIGhhc01heExlbmd0aCkge1xuICAgICAgLy8gMS4g5aSN5Yi257KY6LS06LaF6L+HbWF4bGVuZ3Ro55qE5oOF5Ya1IDIu5pyq6LaF6L+HbWF4bGVuZ3Ro55qE5oOF5Ya1XG4gICAgICBjb25zdCBpc0N1cnNvckluRW5kID0gZS50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPj0gbWF4TGVuZ3RoICsgMSB8fCBlLnRhcmdldC5zZWxlY3Rpb25TdGFydCA9PT0gdHJpZ2dlclZhbHVlLmxlbmd0aCB8fCAhZS50YXJnZXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB0cmlnZ2VyVmFsdWUgPSBzZXRUcmlnZ2VyVmFsdWUoaXNDdXJzb3JJbkVuZCwgdmFsdWUsIHRyaWdnZXJWYWx1ZSwgbWF4TGVuZ3RoKTtcbiAgICB9XG4gICAgaGFuZGxlU2V0VmFsdWUodHJpZ2dlclZhbHVlKTtcbiAgICByZXNvbHZlT25DaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LCBlLCBvbkNoYW5nZSwgdHJpZ2dlclZhbHVlKTtcbiAgfTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlc2V0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSBlID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBoYW5kbGVTZXRWYWx1ZSgnJyk7XG4gICAgKF9hID0gaW5uZXJSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgcmVzb2x2ZU9uQ2hhbmdlKChfYyA9IChfYiA9IGlubmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXNpemFibGVUZXh0QXJlYSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRleHRBcmVhLCBlLCBvbkNoYW5nZSk7XG4gIH07XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnaW5wdXQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAvLyBTdHlsZVxuICBjb25zdCBbd3JhcFNTUiwgaGFzaElkXSA9IHVzZVN0eWxlKHByZWZpeENscyk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiB7XG4gICAgICByZXNpemFibGVUZXh0QXJlYTogKF9hID0gaW5uZXJSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc2l6YWJsZVRleHRBcmVhLFxuICAgICAgZm9jdXM6IG9wdGlvbiA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRyaWdnZXJGb2N1cygoX2IgPSAoX2EgPSBpbm5lclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzaXphYmxlVGV4dEFyZWEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50ZXh0QXJlYSwgb3B0aW9uKTtcbiAgICAgIH0sXG4gICAgICBibHVyOiAoKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IGlubmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ibHVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IHRleHRBcmVhID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmNUZXh0QXJlYSwgT2JqZWN0LmFzc2lnbih7fSwgb21pdChwcm9wcywgWydhbGxvd0NsZWFyJ10pLCB7XG4gICAgZGlzYWJsZWQ6IG1lcmdlZERpc2FibGVkLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyh7XG4gICAgICBbYCR7cHJlZml4Q2xzfS1ib3JkZXJsZXNzYF06ICFib3JkZXJlZCxcbiAgICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgJiYgIXNob3dDb3VudCxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LXNtYF06IHNpemUgPT09ICdzbWFsbCcgfHwgY3VzdG9taXplU2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxnYF06IHNpemUgPT09ICdsYXJnZScgfHwgY3VzdG9taXplU2l6ZSA9PT0gJ2xhcmdlJ1xuICAgIH0sIGdldFN0YXR1c0NsYXNzTmFtZXMocHJlZml4Q2xzLCBtZXJnZWRTdGF0dXMpLCBoYXNoSWQpLFxuICAgIHN0eWxlOiBzaG93Q291bnQgPyB7XG4gICAgICByZXNpemU6IHN0eWxlID09PSBudWxsIHx8IHN0eWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZS5yZXNpemVcbiAgICB9IDogc3R5bGUsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgb25Db21wb3NpdGlvblN0YXJ0OiBvbkludGVybmFsQ29tcG9zaXRpb25TdGFydCxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIG9uQ29tcG9zaXRpb25FbmQ6IG9uSW50ZXJuYWxDb21wb3NpdGlvbkVuZCxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0pKTtcbiAgbGV0IHZhbCA9IGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSk7XG4gIGlmICghY29tcG9zaXRpbmcgJiYgaGFzTWF4TGVuZ3RoICYmIChwcm9wcy52YWx1ZSA9PT0gbnVsbCB8fCBwcm9wcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgIC8vIGZpeCAjMjc2MTIg5bCGdmFsdWXovazkuLrmlbDnu4Tov5vooYzmiKrlj5bvvIzop6PlhrMgJ/CfmIInLmxlbmd0aCA9PT0gMiDnrYllbW9qaeihqOaDheWvvOiHtOeahOaIquWPluS5seeggeeahOmXrumimFxuICAgIHZhbCA9IGZpeEVtb2ppTGVuZ3RoKHZhbCwgbWF4TGVuZ3RoKTtcbiAgfVxuICAvLyBUZXh0QXJlYVxuICBjb25zdCB0ZXh0YXJlYU5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbGVhcmFibGVMYWJlbGVkSW5wdXQsIE9iamVjdC5hc3NpZ24oe1xuICAgIGRpc2FibGVkOiBtZXJnZWREaXNhYmxlZFxuICB9LCBwcm9wcywge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgIGlucHV0VHlwZTogXCJ0ZXh0XCIsXG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbGVtZW50OiB0ZXh0QXJlYSxcbiAgICBoYW5kbGVSZXNldDogaGFuZGxlUmVzZXQsXG4gICAgcmVmOiBjbGVhcmFibGVJbnB1dFJlZixcbiAgICBib3JkZXJlZDogYm9yZGVyZWQsXG4gICAgc3RhdHVzOiBjdXN0b21TdGF0dXMsXG4gICAgc3R5bGU6IHNob3dDb3VudCA/IHVuZGVmaW5lZCA6IHN0eWxlLFxuICAgIGhhc2hJZDogaGFzaElkXG4gIH0pKTtcbiAgLy8gT25seSBzaG93IHRleHQgYXJlYSB3cmFwcGVyIHdoZW4gbmVlZGVkXG4gIGlmIChzaG93Q291bnQgfHwgaGFzRmVlZGJhY2spIHtcbiAgICBjb25zdCB2YWx1ZUxlbmd0aCA9IF90b0NvbnN1bWFibGVBcnJheSh2YWwpLmxlbmd0aDtcbiAgICBsZXQgZGF0YUNvdW50ID0gJyc7XG4gICAgaWYgKHR5cGVvZiBzaG93Q291bnQgPT09ICdvYmplY3QnKSB7XG4gICAgICBkYXRhQ291bnQgPSBzaG93Q291bnQuZm9ybWF0dGVyKHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgY291bnQ6IHZhbHVlTGVuZ3RoLFxuICAgICAgICBtYXhMZW5ndGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhQ291bnQgPSBgJHt2YWx1ZUxlbmd0aH0ke2hhc01heExlbmd0aCA/IGAgLyAke21heExlbmd0aH1gIDogJyd9YDtcbiAgICB9XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGhpZGRlbjogaGlkZGVuLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGAke3ByZWZpeENsc30tdGV4dGFyZWFgLCB7XG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LXRleHRhcmVhLXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnLFxuICAgICAgICBbYCR7cHJlZml4Q2xzfS10ZXh0YXJlYS1zaG93LWNvdW50YF06IHNob3dDb3VudFxuICAgICAgfSwgZ2V0U3RhdHVzQ2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LXRleHRhcmVhYCwgbWVyZ2VkU3RhdHVzLCBoYXNGZWVkYmFjayksIGNsYXNzTmFtZSwgaGFzaElkKSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIFwiZGF0YS1jb3VudFwiOiBkYXRhQ291bnRcbiAgICB9LCB0ZXh0YXJlYU5vZGUsIGhhc0ZlZWRiYWNrICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeENsc30tdGV4dGFyZWEtc3VmZml4YFxuICAgIH0sIGZlZWRiYWNrSWNvbikpO1xuICB9XG4gIHJldHVybiB3cmFwU1NSKHRleHRhcmVhTm9kZSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///80173
`)},72922:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRemovePasswordTimeout; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);

function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      var _a, _b, _c, _d;
      if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute('type')) === 'password' && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute('value'))) {
        (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute('value');
      }
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach(timer => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzI5MjIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUMzQjtBQUNmLG1DQUFtQyw2Q0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbnB1dC9ob29rcy91c2VSZW1vdmVQYXNzd29yZFRpbWVvdXQuanM/NTg4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVJlbW92ZVBhc3N3b3JkVGltZW91dChpbnB1dFJlZiwgdHJpZ2dlck9uTW91bnQpIHtcbiAgY29uc3QgcmVtb3ZlUGFzc3dvcmRUaW1lb3V0UmVmID0gdXNlUmVmKFtdKTtcbiAgY29uc3QgcmVtb3ZlUGFzc3dvcmRUaW1lb3V0ID0gKCkgPT4ge1xuICAgIHJlbW92ZVBhc3N3b3JkVGltZW91dFJlZi5jdXJyZW50LnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICBpZiAoKChfYSA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbnB1dCkgJiYgKChfYiA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSkgPT09ICdwYXNzd29yZCcgJiYgKChfYyA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pbnB1dC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpKSB7XG4gICAgICAgIChfZCA9IGlucHV0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmlnZ2VyT25Nb3VudCkge1xuICAgICAgcmVtb3ZlUGFzc3dvcmRUaW1lb3V0KCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiByZW1vdmVQYXNzd29yZFRpbWVvdXRSZWYuY3VycmVudC5mb3JFYWNoKHRpbWVyID0+IHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiByZW1vdmVQYXNzd29yZFRpbWVvdXQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///72922
`)},47673:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M1": function() { return /* binding */ genActiveStyle; },
/* harmony export */   "Xy": function() { return /* binding */ genDisabledStyle; },
/* harmony export */   "bi": function() { return /* binding */ genStatusStyle; },
/* harmony export */   "e5": function() { return /* binding */ initInputToken; },
/* harmony export */   "ik": function() { return /* binding */ genBasicInputStyle; },
/* harmony export */   "nz": function() { return /* binding */ genPlaceholderStyle; },
/* harmony export */   "pU": function() { return /* binding */ genHoverStyle; },
/* harmony export */   "s7": function() { return /* binding */ genInputGroupStyle; },
/* harmony export */   "x0": function() { return /* binding */ genInputSmallStyle; }
/* harmony export */ });
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45503);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67968);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14747);
/* harmony import */ var _style_compact_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80110);



const genPlaceholderStyle = color => ({
  // Firefox
  '&::-moz-placeholder': {
    opacity: 1
  },
  '&::placeholder': {
    color,
    userSelect: 'none' // https://github.com/ant-design/ant-design/pull/32639
  },

  '&:placeholder-shown': {
    textOverflow: 'ellipsis'
  }
});
const genHoverStyle = token => ({
  borderColor: token.inputBorderHoverColor,
  borderInlineEndWidth: token.lineWidth
});
const genActiveStyle = token => ({
  borderColor: token.inputBorderHoverColor,
  boxShadow: \`0 0 0 \${token.controlOutlineWidth}px \${token.controlOutline}\`,
  borderInlineEndWidth: token.lineWidth,
  outline: 0
});
const genDisabledStyle = token => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: 'none',
  cursor: 'not-allowed',
  opacity: 1,
  '&:hover': Object.assign({}, genHoverStyle((0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* .merge */ .TS)(token, {
    inputBorderHoverColor: token.colorBorder
  })))
});
const genInputLargeStyle = token => {
  const {
    inputPaddingVerticalLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    inputPaddingHorizontalLG
  } = token;
  return {
    padding: \`\${inputPaddingVerticalLG}px \${inputPaddingHorizontalLG}px\`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = token => ({
  padding: \`\${token.inputPaddingVerticalSM}px \${token.controlPaddingHorizontalSM - 1}px\`,
  borderRadius: token.borderRadiusSM
});
const genStatusStyle = (token, parentCls) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    colorErrorOutline,
    colorWarningOutline,
    colorErrorBorderHover,
    colorWarningBorderHover
  } = token;
  return {
    [\`&-status-error:not(\${parentCls}-disabled):not(\${parentCls}-borderless)\${parentCls}\`]: {
      borderColor: colorError,
      '&:hover': {
        borderColor: colorErrorBorderHover
      },
      '&:focus, &-focused': Object.assign({}, genActiveStyle((0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* .merge */ .TS)(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      }))),
      [\`\${componentCls}-prefix, \${componentCls}-suffix\`]: {
        color: colorError
      }
    },
    [\`&-status-warning:not(\${parentCls}-disabled):not(\${parentCls}-borderless)\${parentCls}\`]: {
      borderColor: colorWarning,
      '&:hover': {
        borderColor: colorWarningBorderHover
      },
      '&:focus, &-focused': Object.assign({}, genActiveStyle((0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* .merge */ .TS)(token, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      }))),
      [\`\${componentCls}-prefix, \${componentCls}-suffix\`]: {
        color: colorWarning
      }
    }
  };
};
const genBasicInputStyle = token => Object.assign(Object.assign({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  minWidth: 0,
  padding: \`\${token.inputPaddingVertical}px \${token.inputPaddingHorizontal}px\`,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  backgroundColor: token.colorBgContainer,
  backgroundImage: 'none',
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: token.colorBorder,
  borderRadius: token.borderRadius,
  transition: \`all \${token.motionDurationMid}\`
}, genPlaceholderStyle(token.colorTextPlaceholder)), {
  '&:hover': Object.assign({}, genHoverStyle(token)),
  '&:focus, &-focused': Object.assign({}, genActiveStyle(token)),
  '&-disabled, &[disabled]': Object.assign({}, genDisabledStyle(token)),
  '&-borderless': {
    '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none'
    }
  },
  // Reset height for \`textarea\`s
  'textarea&': {
    maxWidth: '100%',
    height: 'auto',
    minHeight: token.controlHeight,
    lineHeight: token.lineHeight,
    verticalAlign: 'bottom',
    transition: \`all \${token.motionDurationSlow}, height 0s\`,
    resize: 'vertical'
  },
  // Size
  '&-lg': Object.assign({}, genInputLargeStyle(token)),
  '&-sm': Object.assign({}, genInputSmallStyle(token)),
  // RTL
  '&-rtl': {
    direction: 'rtl'
  },
  '&-textarea-rtl': {
    direction: 'rtl'
  }
});
const genInputGroupStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: 'relative',
    display: 'table',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    // Undo padding and float of grid classes
    [\`&[class*='col-']\`]: {
      paddingInlineEnd: token.paddingXS,
      '&:last-child': {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [\`&-lg \${componentCls}, &-lg > \${componentCls}-group-addon\`]: Object.assign({}, genInputLargeStyle(token)),
    [\`&-sm \${componentCls}, &-sm > \${componentCls}-group-addon\`]: Object.assign({}, genInputSmallStyle(token)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [\`&-lg \${antCls}-select-single \${antCls}-select-selector\`]: {
      height: token.controlHeightLG
    },
    [\`&-sm \${antCls}-select-single \${antCls}-select-selector\`]: {
      height: token.controlHeightSM
    },
    [\`> \${componentCls}\`]: {
      display: 'table-cell',
      '&:not(:first-child):not(:last-child)': {
        borderRadius: 0
      }
    },
    [\`\${componentCls}-group\`]: {
      [\`&-addon, &-wrap\`]: {
        display: 'table-cell',
        width: 1,
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        '&:not(:first-child):not(:last-child)': {
          borderRadius: 0
        }
      },
      '&-wrap > *': {
        display: 'block !important'
      },
      '&-addon': {
        position: 'relative',
        padding: \`0 \${token.inputPaddingHorizontal}px\`,
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize,
        textAlign: 'center',
        backgroundColor: token.colorFillAlter,
        border: \`\${token.lineWidth}px \${token.lineType} \${token.colorBorder}\`,
        borderRadius: token.borderRadius,
        transition: \`all \${token.motionDurationSlow}\`,
        lineHeight: 1,
        // Reset Select's style in addon
        [\`\${antCls}-select\`]: {
          margin: \`-\${token.inputPaddingVertical + 1}px -\${token.inputPaddingHorizontal}px\`,
          [\`&\${antCls}-select-single:not(\${antCls}-select-customize-input)\`]: {
            [\`\${antCls}-select-selector\`]: {
              backgroundColor: 'inherit',
              border: \`\${token.lineWidth}px \${token.lineType} transparent\`,
              boxShadow: 'none'
            }
          },
          '&-open, &-focused': {
            [\`\${antCls}-select-selector\`]: {
              color: token.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [\`\${antCls}-cascader-picker\`]: {
          margin: \`-9px -\${token.inputPaddingHorizontal}px\`,
          backgroundColor: 'transparent',
          [\`\${antCls}-cascader-input\`]: {
            textAlign: 'start',
            border: 0,
            boxShadow: 'none'
          }
        }
      },
      '&-addon:first-child': {
        borderInlineEnd: 0
      },
      '&-addon:last-child': {
        borderInlineStart: 0
      }
    },
    [\`\${componentCls}\`]: {
      width: '100%',
      marginBottom: 0,
      textAlign: 'inherit',
      '&:focus': {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      '&:hover': {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [\`\${componentCls}-search-with-button &\`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [\`> \${componentCls}:first-child, \${componentCls}-group-addon:first-child\`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [\`\${antCls}-select \${antCls}-select-selector\`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [\`> \${componentCls}-affix-wrapper\`]: {
      [\`&:not(:first-child) \${componentCls}\`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [\`&:not(:last-child) \${componentCls}\`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [\`> \${componentCls}:last-child, \${componentCls}-group-addon:last-child\`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [\`\${antCls}-select \${antCls}-select-selector\`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [\`\${componentCls}-affix-wrapper\`]: {
      '&:not(:last-child)': {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [\`\${componentCls}-search &\`]: {
          borderStartStartRadius: token.borderRadius,
          borderEndStartRadius: token.borderRadius
        }
      },
      [\`&:not(:first-child), \${componentCls}-search &:not(:first-child)\`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [\`&\${componentCls}-group-compact\`]: Object.assign(Object.assign({
      display: 'block'
    }, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .clearFix */ .dF)()), {
      [\`\${componentCls}-group-addon, \${componentCls}-group-wrap, > \${componentCls}\`]: {
        '&:not(:first-child):not(:last-child)': {
          borderInlineEndWidth: token.lineWidth,
          '&:hover': {
            zIndex: 1
          },
          '&:focus': {
            zIndex: 1
          }
        }
      },
      '& > *': {
        display: 'inline-block',
        float: 'none',
        verticalAlign: 'top',
        borderRadius: 0
      },
      [\`& > \${componentCls}-affix-wrapper\`]: {
        display: 'inline-flex'
      },
      [\`& > \${antCls}-picker-range\`]: {
        display: 'inline-flex'
      },
      '& > *:not(:last-child)': {
        marginInlineEnd: -token.lineWidth,
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [\`\${componentCls}\`]: {
        float: 'none'
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [\`& > \${antCls}-select > \${antCls}-select-selector,
      & > \${antCls}-select-auto-complete \${componentCls},
      & > \${antCls}-cascader-picker \${componentCls},
      & > \${componentCls}-group-wrapper \${componentCls}\`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        '&:hover': {
          zIndex: 1
        },
        '&:focus': {
          zIndex: 1
        }
      },
      [\`& > \${antCls}-select-focused\`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [\`& > \${antCls}-select > \${antCls}-select-arrow\`]: {
        zIndex: 1 // https://github.com/ant-design/ant-design/issues/20371
      },
      [\`& > *:first-child,
      & > \${antCls}-select:first-child > \${antCls}-select-selector,
      & > \${antCls}-select-auto-complete:first-child \${componentCls},
      & > \${antCls}-cascader-picker:first-child \${componentCls}\`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [\`& > *:last-child,
      & > \${antCls}-select:last-child > \${antCls}-select-selector,
      & > \${antCls}-cascader-picker:last-child \${componentCls},
      & > \${antCls}-cascader-picker-focused:last-child \${componentCls}\`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [\`& > \${antCls}-select-auto-complete \${componentCls}\`]: {
        verticalAlign: 'top'
      },
      [\`\${componentCls}-group-wrapper + \${componentCls}-group-wrapper\`]: {
        marginInlineStart: -token.lineWidth,
        [\`\${componentCls}-affix-wrapper\`]: {
          borderRadius: 0
        }
      },
      [\`\${componentCls}-group-wrapper:not(:last-child)\`]: {
        [\`&\${componentCls}-search > \${componentCls}-group\`]: {
          [\`& > \${componentCls}-group-addon > \${componentCls}-search-button\`]: {
            borderRadius: 0
          },
          [\`& > \${componentCls}\`]: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token.borderRadius
          }
        }
      }
    })
  };
};
const genInputStyle = token => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), genBasicInputStyle(token)), genStatusStyle(token, componentCls)), {
      '&[type="color"]': {
        height: token.controlHeight,
        [\`&\${componentCls}-lg\`]: {
          height: token.controlHeightLG
        },
        [\`&\${componentCls}-sm\`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        '-webkit-appearance': 'none'
      }
    })
  };
};
const genAllowClearStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [\`\${componentCls}-clear-icon\`]: {
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: 'pointer',
      transition: \`color \${token.motionDurationSlow}\`,
      '&:hover': {
        color: token.colorTextTertiary
      },
      '&:active': {
        color: token.colorText
      },
      '&-hidden': {
        visibility: 'hidden'
      },
      '&-has-suffix': {
        margin: \`0 \${token.inputAffixPadding}px\`
      }
    },
    // ======================= TextArea ========================
    '&-textarea-with-clear-btn': {
      padding: '0 !important',
      border: '0 !important',
      [\`\${componentCls}-clear-icon\`]: {
        position: 'absolute',
        insetBlockStart: token.paddingXS,
        insetInlineEnd: token.paddingXS,
        zIndex: 1
      }
    }
  };
};
const genAffixStyle = token => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  return {
    [\`\${componentCls}-affix-wrapper\`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBasicInputStyle(token)), {
      display: 'inline-flex',
      [\`&:not(\${componentCls}-affix-wrapper-disabled):hover\`]: Object.assign(Object.assign({}, genHoverStyle(token)), {
        zIndex: 1,
        [\`\${componentCls}-search-with-button &\`]: {
          zIndex: 0
        }
      }),
      '&-focused, &:focus': {
        zIndex: 1
      },
      '&-disabled': {
        [\`\${componentCls}[disabled]\`]: {
          background: 'transparent'
        }
      },
      [\`> input\${componentCls}\`]: {
        padding: 0,
        fontSize: 'inherit',
        border: 'none',
        borderRadius: 0,
        outline: 'none',
        '&:focus': {
          boxShadow: 'none !important'
        }
      },
      '&::before': {
        width: 0,
        visibility: 'hidden',
        content: '"\\\\a0"'
      },
      [\`\${componentCls}\`]: {
        '&-prefix, &-suffix': {
          display: 'flex',
          flex: 'none',
          alignItems: 'center',
          '> *:not(:last-child)': {
            marginInlineEnd: token.paddingXS
          }
        },
        '&-show-count-suffix': {
          color: colorTextDescription
        },
        '&-show-count-has-suffix': {
          marginInlineEnd: token.paddingXXS
        },
        '&-prefix': {
          marginInlineEnd: inputAffixPadding
        },
        '&-suffix': {
          marginInlineStart: inputAffixPadding
        }
      }
    }), genAllowClearStyle(token)), {
      // password
      [\`\${iconCls}\${componentCls}-password-icon\`]: {
        color: colorIcon,
        cursor: 'pointer',
        transition: \`all \${motionDurationSlow}\`,
        '&:hover': {
          color: colorIconHover
        }
      }
    }), genStatusStyle(token, \`\${componentCls}-affix-wrapper\`))
  };
};
const genGroupStyle = token => {
  const {
    componentCls,
    colorError,
    colorSuccess,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [\`\${componentCls}-group\`]: Object.assign(Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), genInputGroupStyle(token)), {
      '&-rtl': {
        direction: 'rtl'
      },
      '&-wrapper': {
        display: 'inline-block',
        width: '100%',
        textAlign: 'start',
        verticalAlign: 'top',
        '&-rtl': {
          direction: 'rtl'
        },
        // Size
        '&-lg': {
          [\`\${componentCls}-group-addon\`]: {
            borderRadius: borderRadiusLG
          }
        },
        '&-sm': {
          [\`\${componentCls}-group-addon\`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Status
        '&-status-error': {
          [\`\${componentCls}-group-addon\`]: {
            color: colorError,
            borderColor: colorError
          }
        },
        '&-status-warning': {
          [\`\${componentCls}-group-addon:last-child\`]: {
            color: colorSuccess,
            borderColor: colorSuccess
          }
        }
      }
    })
  };
};
const genSearchInputStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  const searchPrefixCls = \`\${componentCls}-search\`;
  return {
    [searchPrefixCls]: {
      [\`\${componentCls}\`]: {
        '&:hover, &:focus': {
          borderColor: token.colorPrimaryHover,
          [\`+ \${componentCls}-group-addon \${searchPrefixCls}-button:not(\${antCls}-btn-primary)\`]: {
            borderInlineStartColor: token.colorPrimaryHover
          }
        }
      },
      [\`\${componentCls}-affix-wrapper\`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [\`\${componentCls}-lg\`]: {
        lineHeight: token.lineHeightLG - 0.0002
      },
      [\`> \${componentCls}-group\`]: {
        [\`> \${componentCls}-group-addon:last-child\`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [\`\${searchPrefixCls}-button\`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: token.borderRadius,
            borderEndEndRadius: token.borderRadius,
            borderEndStartRadius: 0
          },
          [\`\${searchPrefixCls}-button:not(\${antCls}-btn-primary)\`]: {
            color: token.colorTextDescription,
            '&:hover': {
              color: token.colorPrimaryHover
            },
            '&:active': {
              color: token.colorPrimaryActive
            },
            [\`&\${antCls}-btn-loading::before\`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [\`\${searchPrefixCls}-button\`]: {
        height: token.controlHeight,
        '&:hover, &:focus': {
          zIndex: 1
        }
      },
      [\`&-large \${searchPrefixCls}-button\`]: {
        height: token.controlHeightLG
      },
      [\`&-small \${searchPrefixCls}-button\`]: {
        height: token.controlHeightSM
      },
      '&-rtl': {
        direction: 'rtl'
      },
      // ===================== Compact Item Customized Styles =====================
      [\`&\${componentCls}-compact-item\`]: {
        [\`&:not(\${componentCls}-compact-last-item)\`]: {
          [\`\${componentCls}-group-addon\`]: {
            [\`\${componentCls}-search-button\`]: {
              marginInlineEnd: -token.lineWidth,
              borderRadius: 0
            }
          }
        },
        [\`&:not(\${componentCls}-compact-first-item)\`]: {
          [\`\${componentCls},\${componentCls}-affix-wrapper\`]: {
            borderRadius: 0
          }
        },
        [\`> \${componentCls}-group-addon \${componentCls}-search-button,
        > \${componentCls},
        \${componentCls}-affix-wrapper\`]: {
          '&:hover,&:focus,&:active': {
            zIndex: 2
          }
        },
        [\`> \${componentCls}-affix-wrapper-focused\`]: {
          zIndex: 2
        }
      }
    }
  };
};
function initInputToken(token) {
  // @ts-ignore
  return (0,_theme_internal__WEBPACK_IMPORTED_MODULE_0__/* .merge */ .TS)(token, {
    inputAffixPadding: token.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((token.controlHeightLG - token.fontSizeLG * token.lineHeightLG) / 2 * 10) / 10 - token.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((token.controlHeightSM - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 0),
    inputPaddingHorizontal: token.paddingSM - token.lineWidth,
    inputPaddingHorizontalSM: token.paddingXS - token.lineWidth,
    inputPaddingHorizontalLG: token.controlPaddingHorizontal - token.lineWidth,
    inputBorderHoverColor: token.colorPrimaryHover,
    inputBorderActiveColor: token.colorPrimaryHover
  });
}
const genTextAreaStyle = token => {
  const {
    componentCls,
    inputPaddingHorizontal,
    paddingLG
  } = token;
  const textareaPrefixCls = \`\${componentCls}-textarea\`;
  return {
    [textareaPrefixCls]: {
      position: 'relative',
      [\`\${textareaPrefixCls}-suffix\`]: {
        position: 'absolute',
        top: 0,
        insetInlineEnd: inputPaddingHorizontal,
        bottom: 0,
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        margin: 'auto'
      },
      [\`&-status-error,
        &-status-warning,
        &-status-success,
        &-status-validating\`]: {
        [\`&\${textareaPrefixCls}-has-feedback\`]: {
          [\`\${componentCls}\`]: {
            paddingInlineEnd: paddingLG
          }
        }
      },
      '&-show-count': {
        // https://github.com/ant-design/ant-design/issues/33049
        [\`> \${componentCls}\`]: {
          height: '100%'
        },
        '&::after': {
          color: token.colorTextDescription,
          whiteSpace: 'nowrap',
          content: 'attr(data-count)',
          pointerEvents: 'none',
          float: 'right'
        }
      },
      '&-rtl': {
        '&::after': {
          float: 'left'
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ __webpack_exports__["ZP"] = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('Input', token => {
  const inputToken = initInputToken(token);
  return [genInputStyle(inputToken), genTextAreaStyle(inputToken), genAffixStyle(inputToken), genGroupStyle(inputToken), genSearchInputStyle(inputToken),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0,_style_compact_item__WEBPACK_IMPORTED_MODULE_3__/* .genCompactItemStyle */ .c)(inputToken)];
}));//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBZSxvRUFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUZBQW1CO0FBQ3JCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2lucHV0L3N0eWxlL2luZGV4LmpzP2EyZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuQ29tcG9uZW50U3R5bGVIb29rLCBtZXJnZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWUvaW50ZXJuYWwnO1xuaW1wb3J0IHsgY2xlYXJGaXgsIHJlc2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3R5bGUnO1xuaW1wb3J0IHsgZ2VuQ29tcGFjdEl0ZW1TdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlL2NvbXBhY3QtaXRlbSc7XG5leHBvcnQgY29uc3QgZ2VuUGxhY2Vob2xkZXJTdHlsZSA9IGNvbG9yID0+ICh7XG4gIC8vIEZpcmVmb3hcbiAgJyY6Oi1tb3otcGxhY2Vob2xkZXInOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgY29sb3IsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vcHVsbC8zMjYzOVxuICB9LFxuXG4gICcmOnBsYWNlaG9sZGVyLXNob3duJzoge1xuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICB9XG59KTtcbmV4cG9ydCBjb25zdCBnZW5Ib3ZlclN0eWxlID0gdG9rZW4gPT4gKHtcbiAgYm9yZGVyQ29sb3I6IHRva2VuLmlucHV0Qm9yZGVySG92ZXJDb2xvcixcbiAgYm9yZGVySW5saW5lRW5kV2lkdGg6IHRva2VuLmxpbmVXaWR0aFxufSk7XG5leHBvcnQgY29uc3QgZ2VuQWN0aXZlU3R5bGUgPSB0b2tlbiA9PiAoe1xuICBib3JkZXJDb2xvcjogdG9rZW4uaW5wdXRCb3JkZXJIb3ZlckNvbG9yLFxuICBib3hTaGFkb3c6IGAwIDAgMCAke3Rva2VuLmNvbnRyb2xPdXRsaW5lV2lkdGh9cHggJHt0b2tlbi5jb250cm9sT3V0bGluZX1gLFxuICBib3JkZXJJbmxpbmVFbmRXaWR0aDogdG9rZW4ubGluZVdpZHRoLFxuICBvdXRsaW5lOiAwXG59KTtcbmV4cG9ydCBjb25zdCBnZW5EaXNhYmxlZFN0eWxlID0gdG9rZW4gPT4gKHtcbiAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERpc2FibGVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXJEaXNhYmxlZCxcbiAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yQm9yZGVyLFxuICBib3hTaGFkb3c6ICdub25lJyxcbiAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICBvcGFjaXR5OiAxLFxuICAnJjpob3Zlcic6IE9iamVjdC5hc3NpZ24oe30sIGdlbkhvdmVyU3R5bGUobWVyZ2VUb2tlbih0b2tlbiwge1xuICAgIGlucHV0Qm9yZGVySG92ZXJDb2xvcjogdG9rZW4uY29sb3JCb3JkZXJcbiAgfSkpKVxufSk7XG5jb25zdCBnZW5JbnB1dExhcmdlU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBpbnB1dFBhZGRpbmdWZXJ0aWNhbExHLFxuICAgIGZvbnRTaXplTEcsXG4gICAgbGluZUhlaWdodExHLFxuICAgIGJvcmRlclJhZGl1c0xHLFxuICAgIGlucHV0UGFkZGluZ0hvcml6b250YWxMR1xuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgcGFkZGluZzogYCR7aW5wdXRQYWRkaW5nVmVydGljYWxMR31weCAke2lucHV0UGFkZGluZ0hvcml6b250YWxMR31weGAsXG4gICAgZm9udFNpemU6IGZvbnRTaXplTEcsXG4gICAgbGluZUhlaWdodDogbGluZUhlaWdodExHLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzTEdcbiAgfTtcbn07XG5leHBvcnQgY29uc3QgZ2VuSW5wdXRTbWFsbFN0eWxlID0gdG9rZW4gPT4gKHtcbiAgcGFkZGluZzogYCR7dG9rZW4uaW5wdXRQYWRkaW5nVmVydGljYWxTTX1weCAke3Rva2VuLmNvbnRyb2xQYWRkaW5nSG9yaXpvbnRhbFNNIC0gMX1weGAsXG4gIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzU01cbn0pO1xuZXhwb3J0IGNvbnN0IGdlblN0YXR1c1N0eWxlID0gKHRva2VuLCBwYXJlbnRDbHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBjb2xvckVycm9yLFxuICAgIGNvbG9yV2FybmluZyxcbiAgICBjb2xvckVycm9yT3V0bGluZSxcbiAgICBjb2xvcldhcm5pbmdPdXRsaW5lLFxuICAgIGNvbG9yRXJyb3JCb3JkZXJIb3ZlcixcbiAgICBjb2xvcldhcm5pbmdCb3JkZXJIb3ZlclxuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW2AmLXN0YXR1cy1lcnJvcjpub3QoJHtwYXJlbnRDbHN9LWRpc2FibGVkKTpub3QoJHtwYXJlbnRDbHN9LWJvcmRlcmxlc3MpJHtwYXJlbnRDbHN9YF06IHtcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvckVycm9yLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvckVycm9yQm9yZGVySG92ZXJcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cywgJi1mb2N1c2VkJzogT2JqZWN0LmFzc2lnbih7fSwgZ2VuQWN0aXZlU3R5bGUobWVyZ2VUb2tlbih0b2tlbiwge1xuICAgICAgICBpbnB1dEJvcmRlckFjdGl2ZUNvbG9yOiBjb2xvckVycm9yLFxuICAgICAgICBpbnB1dEJvcmRlckhvdmVyQ29sb3I6IGNvbG9yRXJyb3IsXG4gICAgICAgIGNvbnRyb2xPdXRsaW5lOiBjb2xvckVycm9yT3V0bGluZVxuICAgICAgfSkpKSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LXByZWZpeCwgJHtjb21wb25lbnRDbHN9LXN1ZmZpeGBdOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvckVycm9yXG4gICAgICB9XG4gICAgfSxcbiAgICBbYCYtc3RhdHVzLXdhcm5pbmc6bm90KCR7cGFyZW50Q2xzfS1kaXNhYmxlZCk6bm90KCR7cGFyZW50Q2xzfS1ib3JkZXJsZXNzKSR7cGFyZW50Q2xzfWBdOiB7XG4gICAgICBib3JkZXJDb2xvcjogY29sb3JXYXJuaW5nLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcldhcm5pbmdCb3JkZXJIb3ZlclxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzLCAmLWZvY3VzZWQnOiBPYmplY3QuYXNzaWduKHt9LCBnZW5BY3RpdmVTdHlsZShtZXJnZVRva2VuKHRva2VuLCB7XG4gICAgICAgIGlucHV0Qm9yZGVyQWN0aXZlQ29sb3I6IGNvbG9yV2FybmluZyxcbiAgICAgICAgaW5wdXRCb3JkZXJIb3ZlckNvbG9yOiBjb2xvcldhcm5pbmcsXG4gICAgICAgIGNvbnRyb2xPdXRsaW5lOiBjb2xvcldhcm5pbmdPdXRsaW5lXG4gICAgICB9KSkpLFxuICAgICAgW2Ake2NvbXBvbmVudENsc30tcHJlZml4LCAke2NvbXBvbmVudENsc30tc3VmZml4YF06IHtcbiAgICAgICAgY29sb3I6IGNvbG9yV2FybmluZ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgY29uc3QgZ2VuQmFzaWNJbnB1dFN0eWxlID0gdG9rZW4gPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICB3aWR0aDogJzEwMCUnLFxuICBtaW5XaWR0aDogMCxcbiAgcGFkZGluZzogYCR7dG9rZW4uaW5wdXRQYWRkaW5nVmVydGljYWx9cHggJHt0b2tlbi5pbnB1dFBhZGRpbmdIb3Jpem9udGFsfXB4YCxcbiAgY29sb3I6IHRva2VuLmNvbG9yVGV4dCxcbiAgZm9udFNpemU6IHRva2VuLmZvbnRTaXplLFxuICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXIsXG4gIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICBib3JkZXJXaWR0aDogdG9rZW4ubGluZVdpZHRoLFxuICBib3JkZXJTdHlsZTogdG9rZW4ubGluZVR5cGUsXG4gIGJvcmRlckNvbG9yOiB0b2tlbi5jb2xvckJvcmRlcixcbiAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gIHRyYW5zaXRpb246IGBhbGwgJHt0b2tlbi5tb3Rpb25EdXJhdGlvbk1pZH1gXG59LCBnZW5QbGFjZWhvbGRlclN0eWxlKHRva2VuLmNvbG9yVGV4dFBsYWNlaG9sZGVyKSksIHtcbiAgJyY6aG92ZXInOiBPYmplY3QuYXNzaWduKHt9LCBnZW5Ib3ZlclN0eWxlKHRva2VuKSksXG4gICcmOmZvY3VzLCAmLWZvY3VzZWQnOiBPYmplY3QuYXNzaWduKHt9LCBnZW5BY3RpdmVTdHlsZSh0b2tlbikpLFxuICAnJi1kaXNhYmxlZCwgJltkaXNhYmxlZF0nOiBPYmplY3QuYXNzaWduKHt9LCBnZW5EaXNhYmxlZFN0eWxlKHRva2VuKSksXG4gICcmLWJvcmRlcmxlc3MnOiB7XG4gICAgJyYsICY6aG92ZXIsICY6Zm9jdXMsICYtZm9jdXNlZCwgJi1kaXNhYmxlZCwgJltkaXNhYmxlZF0nOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnXG4gICAgfVxuICB9LFxuICAvLyBSZXNldCBoZWlnaHQgZm9yIGB0ZXh0YXJlYWBzXG4gICd0ZXh0YXJlYSYnOiB7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBtaW5IZWlnaHQ6IHRva2VuLmNvbnRyb2xIZWlnaHQsXG4gICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fSwgaGVpZ2h0IDBzYCxcbiAgICByZXNpemU6ICd2ZXJ0aWNhbCdcbiAgfSxcbiAgLy8gU2l6ZVxuICAnJi1sZyc6IE9iamVjdC5hc3NpZ24oe30sIGdlbklucHV0TGFyZ2VTdHlsZSh0b2tlbikpLFxuICAnJi1zbSc6IE9iamVjdC5hc3NpZ24oe30sIGdlbklucHV0U21hbGxTdHlsZSh0b2tlbikpLFxuICAvLyBSVExcbiAgJyYtcnRsJzoge1xuICAgIGRpcmVjdGlvbjogJ3J0bCdcbiAgfSxcbiAgJyYtdGV4dGFyZWEtcnRsJzoge1xuICAgIGRpcmVjdGlvbjogJ3J0bCdcbiAgfVxufSk7XG5leHBvcnQgY29uc3QgZ2VuSW5wdXRHcm91cFN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGFudENsc1xuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJvcmRlckNvbGxhcHNlOiAnc2VwYXJhdGUnLFxuICAgIGJvcmRlclNwYWNpbmc6IDAsXG4gICAgLy8gVW5kbyBwYWRkaW5nIGFuZCBmbG9hdCBvZiBncmlkIGNsYXNzZXNcbiAgICBbYCZbY2xhc3MqPSdjb2wtJ11gXToge1xuICAgICAgcGFkZGluZ0lubGluZUVuZDogdG9rZW4ucGFkZGluZ1hTLFxuICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgcGFkZGluZ0lubGluZUVuZDogMFxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gU2l6aW5nIG9wdGlvbnNcbiAgICBbYCYtbGcgJHtjb21wb25lbnRDbHN9LCAmLWxnID4gJHtjb21wb25lbnRDbHN9LWdyb3VwLWFkZG9uYF06IE9iamVjdC5hc3NpZ24oe30sIGdlbklucHV0TGFyZ2VTdHlsZSh0b2tlbikpLFxuICAgIFtgJi1zbSAke2NvbXBvbmVudENsc30sICYtc20gPiAke2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb25gXTogT2JqZWN0LmFzc2lnbih7fSwgZ2VuSW5wdXRTbWFsbFN0eWxlKHRva2VuKSksXG4gICAgLy8gRml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzU3NTRcbiAgICBbYCYtbGcgJHthbnRDbHN9LXNlbGVjdC1zaW5nbGUgJHthbnRDbHN9LXNlbGVjdC1zZWxlY3RvcmBdOiB7XG4gICAgICBoZWlnaHQ6IHRva2VuLmNvbnRyb2xIZWlnaHRMR1xuICAgIH0sXG4gICAgW2AmLXNtICR7YW50Q2xzfS1zZWxlY3Qtc2luZ2xlICR7YW50Q2xzfS1zZWxlY3Qtc2VsZWN0b3JgXToge1xuICAgICAgaGVpZ2h0OiB0b2tlbi5jb250cm9sSGVpZ2h0U01cbiAgICB9LFxuICAgIFtgPiAke2NvbXBvbmVudENsc31gXToge1xuICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxuICAgICAgJyY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1ncm91cGBdOiB7XG4gICAgICBbYCYtYWRkb24sICYtd3JhcGBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcbiAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgJyY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmLXdyYXAgPiAqJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2sgIWltcG9ydGFudCdcbiAgICAgIH0sXG4gICAgICAnJi1hZGRvbic6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHBhZGRpbmc6IGAwICR7dG9rZW4uaW5wdXRQYWRkaW5nSG9yaXpvbnRhbH1weGAsXG4gICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHQsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemUsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JGaWxsQWx0ZXIsXG4gICAgICAgIGJvcmRlcjogYCR7dG9rZW4ubGluZVdpZHRofXB4ICR7dG9rZW4ubGluZVR5cGV9ICR7dG9rZW4uY29sb3JCb3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9YCxcbiAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgLy8gUmVzZXQgU2VsZWN0J3Mgc3R5bGUgaW4gYWRkb25cbiAgICAgICAgW2Ake2FudENsc30tc2VsZWN0YF06IHtcbiAgICAgICAgICBtYXJnaW46IGAtJHt0b2tlbi5pbnB1dFBhZGRpbmdWZXJ0aWNhbCArIDF9cHggLSR7dG9rZW4uaW5wdXRQYWRkaW5nSG9yaXpvbnRhbH1weGAsXG4gICAgICAgICAgW2AmJHthbnRDbHN9LXNlbGVjdC1zaW5nbGU6bm90KCR7YW50Q2xzfS1zZWxlY3QtY3VzdG9taXplLWlucHV0KWBdOiB7XG4gICAgICAgICAgICBbYCR7YW50Q2xzfS1zZWxlY3Qtc2VsZWN0b3JgXToge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgYm9yZGVyOiBgJHt0b2tlbi5saW5lV2lkdGh9cHggJHt0b2tlbi5saW5lVHlwZX0gdHJhbnNwYXJlbnRgLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyYtb3BlbiwgJi1mb2N1c2VkJzoge1xuICAgICAgICAgICAgW2Ake2FudENsc30tc2VsZWN0LXNlbGVjdG9yYF06IHtcbiAgICAgICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMzEzMzNcbiAgICAgICAgW2Ake2FudENsc30tY2FzY2FkZXItcGlja2VyYF06IHtcbiAgICAgICAgICBtYXJnaW46IGAtOXB4IC0ke3Rva2VuLmlucHV0UGFkZGluZ0hvcml6b250YWx9cHhgLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBbYCR7YW50Q2xzfS1jYXNjYWRlci1pbnB1dGBdOiB7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdzdGFydCcsXG4gICAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmLWFkZG9uOmZpcnN0LWNoaWxkJzoge1xuICAgICAgICBib3JkZXJJbmxpbmVFbmQ6IDBcbiAgICAgIH0sXG4gICAgICAnJi1hZGRvbjpsYXN0LWNoaWxkJzoge1xuICAgICAgICBib3JkZXJJbmxpbmVTdGFydDogMFxuICAgICAgfVxuICAgIH0sXG4gICAgW2Ake2NvbXBvbmVudENsc31gXToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcbiAgICAgIHRleHRBbGlnbjogJ2luaGVyaXQnLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBib3JkZXJJbmxpbmVFbmRXaWR0aDogMSxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30tc2VhcmNoLXdpdGgtYnV0dG9uICZgXToge1xuICAgICAgICAgIHpJbmRleDogMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBSZXNldCByb3VuZGVkIGNvcm5lcnNcbiAgICBbYD4gJHtjb21wb25lbnRDbHN9OmZpcnN0LWNoaWxkLCAke2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGRgXToge1xuICAgICAgYm9yZGVyU3RhcnRFbmRSYWRpdXM6IDAsXG4gICAgICBib3JkZXJFbmRFbmRSYWRpdXM6IDAsXG4gICAgICAvLyBSZXNldCBTZWxlY3QncyBzdHlsZSBpbiBhZGRvblxuICAgICAgW2Ake2FudENsc30tc2VsZWN0ICR7YW50Q2xzfS1zZWxlY3Qtc2VsZWN0b3JgXToge1xuICAgICAgICBib3JkZXJTdGFydEVuZFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyRW5kRW5kUmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBbYD4gJHtjb21wb25lbnRDbHN9LWFmZml4LXdyYXBwZXJgXToge1xuICAgICAgW2AmOm5vdCg6Zmlyc3QtY2hpbGQpICR7Y29tcG9uZW50Q2xzfWBdOiB7XG4gICAgICAgIGJvcmRlclN0YXJ0U3RhcnRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzOiAwXG4gICAgICB9LFxuICAgICAgW2AmOm5vdCg6bGFzdC1jaGlsZCkgJHtjb21wb25lbnRDbHN9YF06IHtcbiAgICAgICAgYm9yZGVyU3RhcnRFbmRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckVuZEVuZFJhZGl1czogMFxuICAgICAgfVxuICAgIH0sXG4gICAgW2A+ICR7Y29tcG9uZW50Q2xzfTpsYXN0LWNoaWxkLCAke2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb246bGFzdC1jaGlsZGBdOiB7XG4gICAgICBib3JkZXJTdGFydFN0YXJ0UmFkaXVzOiAwLFxuICAgICAgYm9yZGVyRW5kU3RhcnRSYWRpdXM6IDAsXG4gICAgICAvLyBSZXNldCBTZWxlY3QncyBzdHlsZSBpbiBhZGRvblxuICAgICAgW2Ake2FudENsc30tc2VsZWN0ICR7YW50Q2xzfS1zZWxlY3Qtc2VsZWN0b3JgXToge1xuICAgICAgICBib3JkZXJTdGFydFN0YXJ0UmFkaXVzOiAwLFxuICAgICAgICBib3JkZXJFbmRTdGFydFJhZGl1czogMFxuICAgICAgfVxuICAgIH0sXG4gICAgW2Ake2NvbXBvbmVudENsc30tYWZmaXgtd3JhcHBlcmBdOiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJTdGFydEVuZFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyRW5kRW5kUmFkaXVzOiAwLFxuICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1zZWFyY2ggJmBdOiB7XG4gICAgICAgICAgYm9yZGVyU3RhcnRTdGFydFJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJjpub3QoOmZpcnN0LWNoaWxkKSwgJHtjb21wb25lbnRDbHN9LXNlYXJjaCAmOm5vdCg6Zmlyc3QtY2hpbGQpYF06IHtcbiAgICAgICAgYm9yZGVyU3RhcnRTdGFydFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyRW5kU3RhcnRSYWRpdXM6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1ncm91cC1jb21wYWN0YF06IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSwgY2xlYXJGaXgoKSksIHtcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWdyb3VwLWFkZG9uLCAke2NvbXBvbmVudENsc30tZ3JvdXAtd3JhcCwgPiAke2NvbXBvbmVudENsc31gXToge1xuICAgICAgICAnJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICAgIGJvcmRlcklubGluZUVuZFdpZHRoOiB0b2tlbi5saW5lV2lkdGgsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICAgICAgekluZGV4OiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYgPiAqJzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgZmxvYXQ6ICdub25lJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogMFxuICAgICAgfSxcbiAgICAgIFtgJiA+ICR7Y29tcG9uZW50Q2xzfS1hZmZpeC13cmFwcGVyYF06IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICAgICAgfSxcbiAgICAgIFtgJiA+ICR7YW50Q2xzfS1waWNrZXItcmFuZ2VgXToge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gICAgICB9LFxuICAgICAgJyYgPiAqOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIG1hcmdpbklubGluZUVuZDogLXRva2VuLmxpbmVXaWR0aCxcbiAgICAgICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IHRva2VuLmxpbmVXaWR0aFxuICAgICAgfSxcbiAgICAgIC8vIFVuZG8gZmxvYXQgZm9yIC5hbnQtaW5wdXQtZ3JvdXAgLmFudC1pbnB1dFxuICAgICAgW2Ake2NvbXBvbmVudENsc31gXToge1xuICAgICAgICBmbG9hdDogJ25vbmUnXG4gICAgICB9LFxuICAgICAgLy8gcmVzZXQgYm9yZGVyIGZvciBTZWxlY3QsIERhdGVQaWNrZXIsIEF1dG9Db21wbGV0ZSwgQ2FzY2FkZXIsIE1lbnRpb24sIFRpbWVQaWNrZXIsIElucHV0XG4gICAgICBbYCYgPiAke2FudENsc30tc2VsZWN0ID4gJHthbnRDbHN9LXNlbGVjdC1zZWxlY3RvcixcbiAgICAgICYgPiAke2FudENsc30tc2VsZWN0LWF1dG8tY29tcGxldGUgJHtjb21wb25lbnRDbHN9LFxuICAgICAgJiA+ICR7YW50Q2xzfS1jYXNjYWRlci1waWNrZXIgJHtjb21wb25lbnRDbHN9LFxuICAgICAgJiA+ICR7Y29tcG9uZW50Q2xzfS1ncm91cC13cmFwcGVyICR7Y29tcG9uZW50Q2xzfWBdOiB7XG4gICAgICAgIGJvcmRlcklubGluZUVuZFdpZHRoOiB0b2tlbi5saW5lV2lkdGgsXG4gICAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgekluZGV4OiAxXG4gICAgICAgIH0sXG4gICAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICAgIHpJbmRleDogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmID4gJHthbnRDbHN9LXNlbGVjdC1mb2N1c2VkYF06IHtcbiAgICAgICAgekluZGV4OiAxXG4gICAgICB9LFxuICAgICAgLy8gdXBkYXRlIHotaW5kZXggZm9yIGFycm93IGljb25cbiAgICAgIFtgJiA+ICR7YW50Q2xzfS1zZWxlY3QgPiAke2FudENsc30tc2VsZWN0LWFycm93YF06IHtcbiAgICAgICAgekluZGV4OiAxIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzIwMzcxXG4gICAgICB9LFxuICAgICAgW2AmID4gKjpmaXJzdC1jaGlsZCxcbiAgICAgICYgPiAke2FudENsc30tc2VsZWN0OmZpcnN0LWNoaWxkID4gJHthbnRDbHN9LXNlbGVjdC1zZWxlY3RvcixcbiAgICAgICYgPiAke2FudENsc30tc2VsZWN0LWF1dG8tY29tcGxldGU6Zmlyc3QtY2hpbGQgJHtjb21wb25lbnRDbHN9LFxuICAgICAgJiA+ICR7YW50Q2xzfS1jYXNjYWRlci1waWNrZXI6Zmlyc3QtY2hpbGQgJHtjb21wb25lbnRDbHN9YF06IHtcbiAgICAgICAgYm9yZGVyU3RhcnRTdGFydFJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJFbmRTdGFydFJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzXG4gICAgICB9LFxuICAgICAgW2AmID4gKjpsYXN0LWNoaWxkLFxuICAgICAgJiA+ICR7YW50Q2xzfS1zZWxlY3Q6bGFzdC1jaGlsZCA+ICR7YW50Q2xzfS1zZWxlY3Qtc2VsZWN0b3IsXG4gICAgICAmID4gJHthbnRDbHN9LWNhc2NhZGVyLXBpY2tlcjpsYXN0LWNoaWxkICR7Y29tcG9uZW50Q2xzfSxcbiAgICAgICYgPiAke2FudENsc30tY2FzY2FkZXItcGlja2VyLWZvY3VzZWQ6bGFzdC1jaGlsZCAke2NvbXBvbmVudENsc31gXToge1xuICAgICAgICBib3JkZXJJbmxpbmVFbmRXaWR0aDogdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICBib3JkZXJTdGFydEVuZFJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJFbmRFbmRSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1c1xuICAgICAgfSxcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEyNDkzXG4gICAgICBbYCYgPiAke2FudENsc30tc2VsZWN0LWF1dG8tY29tcGxldGUgJHtjb21wb25lbnRDbHN9YF06IHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1ncm91cC13cmFwcGVyICsgJHtjb21wb25lbnRDbHN9LWdyb3VwLXdyYXBwZXJgXToge1xuICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogLXRva2VuLmxpbmVXaWR0aCxcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc30tYWZmaXgtd3JhcHBlcmBdOiB7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1ncm91cC13cmFwcGVyOm5vdCg6bGFzdC1jaGlsZClgXToge1xuICAgICAgICBbYCYke2NvbXBvbmVudENsc30tc2VhcmNoID4gJHtjb21wb25lbnRDbHN9LWdyb3VwYF06IHtcbiAgICAgICAgICBbYCYgPiAke2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb24gPiAke2NvbXBvbmVudENsc30tc2VhcmNoLWJ1dHRvbmBdOiB7XG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiA+ICR7Y29tcG9uZW50Q2xzfWBdOiB7XG4gICAgICAgICAgICBib3JkZXJTdGFydFN0YXJ0UmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICBib3JkZXJTdGFydEVuZFJhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlckVuZEVuZFJhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9O1xufTtcbmNvbnN0IGdlbklucHV0U3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgY29udHJvbEhlaWdodFNNLFxuICAgIGxpbmVXaWR0aFxuICB9ID0gdG9rZW47XG4gIGNvbnN0IEZJWEVEX0NIUk9NRV9DT0xPUl9IRUlHSFQgPSAxNjtcbiAgY29uc3QgY29sb3JTbWFsbFBhZGRpbmcgPSAoY29udHJvbEhlaWdodFNNIC0gbGluZVdpZHRoICogMiAtIEZJWEVEX0NIUk9NRV9DT0xPUl9IRUlHSFQpIC8gMjtcbiAgcmV0dXJuIHtcbiAgICBbY29tcG9uZW50Q2xzXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwgZ2VuQmFzaWNJbnB1dFN0eWxlKHRva2VuKSksIGdlblN0YXR1c1N0eWxlKHRva2VuLCBjb21wb25lbnRDbHMpKSwge1xuICAgICAgJyZbdHlwZT1cImNvbG9yXCJdJzoge1xuICAgICAgICBoZWlnaHQ6IHRva2VuLmNvbnRyb2xIZWlnaHQsXG4gICAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1sZ2BdOiB7XG4gICAgICAgICAgaGVpZ2h0OiB0b2tlbi5jb250cm9sSGVpZ2h0TEdcbiAgICAgICAgfSxcbiAgICAgICAgW2AmJHtjb21wb25lbnRDbHN9LXNtYF06IHtcbiAgICAgICAgICBoZWlnaHQ6IGNvbnRyb2xIZWlnaHRTTSxcbiAgICAgICAgICBwYWRkaW5nVG9wOiBjb2xvclNtYWxsUGFkZGluZyxcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBjb2xvclNtYWxsUGFkZGluZ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyZbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwgJlt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uJzoge1xuICAgICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnXG4gICAgICB9XG4gICAgfSlcbiAgfTtcbn07XG5jb25zdCBnZW5BbGxvd0NsZWFyU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHNcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gSW5wdXQgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIFtgJHtjb21wb25lbnRDbHN9LWNsZWFyLWljb25gXToge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFF1YXRlcm5hcnksXG4gICAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVJY29uLFxuICAgICAgdmVydGljYWxBbGlnbjogLTEsXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL3B1bGwvMTgxNTFcbiAgICAgIC8vIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy93aXphcmRseS1zdW4tdTEwYnJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogYGNvbG9yICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fWAsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dFRlcnRpYXJ5XG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0XG4gICAgICB9LFxuICAgICAgJyYtaGlkZGVuJzoge1xuICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgICAgfSxcbiAgICAgICcmLWhhcy1zdWZmaXgnOiB7XG4gICAgICAgIG1hcmdpbjogYDAgJHt0b2tlbi5pbnB1dEFmZml4UGFkZGluZ31weGBcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09IFRleHRBcmVhID09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICcmLXRleHRhcmVhLXdpdGgtY2xlYXItYnRuJzoge1xuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgW2Ake2NvbXBvbmVudENsc30tY2xlYXItaWNvbmBdOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBpbnNldEJsb2NrU3RhcnQ6IHRva2VuLnBhZGRpbmdYUyxcbiAgICAgICAgaW5zZXRJbmxpbmVFbmQ6IHRva2VuLnBhZGRpbmdYUyxcbiAgICAgICAgekluZGV4OiAxXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGdlbkFmZml4U3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgaW5wdXRBZmZpeFBhZGRpbmcsXG4gICAgY29sb3JUZXh0RGVzY3JpcHRpb24sXG4gICAgbW90aW9uRHVyYXRpb25TbG93LFxuICAgIGNvbG9ySWNvbixcbiAgICBjb2xvckljb25Ib3ZlcixcbiAgICBpY29uQ2xzXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1hZmZpeC13cmFwcGVyYF06IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2VuQmFzaWNJbnB1dFN0eWxlKHRva2VuKSksIHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBbYCY6bm90KCR7Y29tcG9uZW50Q2xzfS1hZmZpeC13cmFwcGVyLWRpc2FibGVkKTpob3ZlcmBdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdlbkhvdmVyU3R5bGUodG9rZW4pKSwge1xuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIFtgJHtjb21wb25lbnRDbHN9LXNlYXJjaC13aXRoLWJ1dHRvbiAmYF06IHtcbiAgICAgICAgICB6SW5kZXg6IDBcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAnJi1mb2N1c2VkLCAmOmZvY3VzJzoge1xuICAgICAgICB6SW5kZXg6IDFcbiAgICAgIH0sXG4gICAgICAnJi1kaXNhYmxlZCc6IHtcbiAgICAgICAgW2Ake2NvbXBvbmVudENsc31bZGlzYWJsZWRdYF06IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYD4gaW5wdXQke2NvbXBvbmVudENsc31gXToge1xuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUgIWltcG9ydGFudCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgY29udGVudDogJ1wiXFxcXGEwXCInXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc31gXToge1xuICAgICAgICAnJi1wcmVmaXgsICYtc3VmZml4Jzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBmbGV4OiAnbm9uZScsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgJz4gKjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICAgICAgbWFyZ2luSW5saW5lRW5kOiB0b2tlbi5wYWRkaW5nWFNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICcmLXNob3ctY291bnQtc3VmZml4Jzoge1xuICAgICAgICAgIGNvbG9yOiBjb2xvclRleHREZXNjcmlwdGlvblxuICAgICAgICB9LFxuICAgICAgICAnJi1zaG93LWNvdW50LWhhcy1zdWZmaXgnOiB7XG4gICAgICAgICAgbWFyZ2luSW5saW5lRW5kOiB0b2tlbi5wYWRkaW5nWFhTXG4gICAgICAgIH0sXG4gICAgICAgICcmLXByZWZpeCc6IHtcbiAgICAgICAgICBtYXJnaW5JbmxpbmVFbmQ6IGlucHV0QWZmaXhQYWRkaW5nXG4gICAgICAgIH0sXG4gICAgICAgICcmLXN1ZmZpeCc6IHtcbiAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogaW5wdXRBZmZpeFBhZGRpbmdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBnZW5BbGxvd0NsZWFyU3R5bGUodG9rZW4pKSwge1xuICAgICAgLy8gcGFzc3dvcmRcbiAgICAgIFtgJHtpY29uQ2xzfSR7Y29tcG9uZW50Q2xzfS1wYXNzd29yZC1pY29uYF06IHtcbiAgICAgICAgY29sb3I6IGNvbG9ySWNvbixcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHttb3Rpb25EdXJhdGlvblNsb3d9YCxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGNvbG9ySWNvbkhvdmVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSwgZ2VuU3RhdHVzU3R5bGUodG9rZW4sIGAke2NvbXBvbmVudENsc30tYWZmaXgtd3JhcHBlcmApKVxuICB9O1xufTtcbmNvbnN0IGdlbkdyb3VwU3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgY29sb3JFcnJvcixcbiAgICBjb2xvclN1Y2Nlc3MsXG4gICAgYm9yZGVyUmFkaXVzTEcsXG4gICAgYm9yZGVyUmFkaXVzU01cbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtgJHtjb21wb25lbnRDbHN9LWdyb3VwYF06IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXNldENvbXBvbmVudCh0b2tlbikpLCBnZW5JbnB1dEdyb3VwU3R5bGUodG9rZW4pKSwge1xuICAgICAgJyYtcnRsJzoge1xuICAgICAgICBkaXJlY3Rpb246ICdydGwnXG4gICAgICB9LFxuICAgICAgJyYtd3JhcHBlcic6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHRleHRBbGlnbjogJ3N0YXJ0JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICcmLXJ0bCc6IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdydGwnXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFNpemVcbiAgICAgICAgJyYtbGcnOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb25gXToge1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNMR1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYtc20nOiB7XG4gICAgICAgICAgW2Ake2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb25gXToge1xuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNTTVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gU3RhdHVzXG4gICAgICAgICcmLXN0YXR1cy1lcnJvcic6IHtcbiAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1ncm91cC1hZGRvbmBdOiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3JFcnJvcixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvckVycm9yXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJi1zdGF0dXMtd2FybmluZyc6IHtcbiAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1ncm91cC1hZGRvbjpsYXN0LWNoaWxkYF06IHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclN1Y2Nlc3MsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JTdWNjZXNzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfTtcbn07XG5jb25zdCBnZW5TZWFyY2hJbnB1dFN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGFudENsc1xuICB9ID0gdG9rZW47XG4gIGNvbnN0IHNlYXJjaFByZWZpeENscyA9IGAke2NvbXBvbmVudENsc30tc2VhcmNoYDtcbiAgcmV0dXJuIHtcbiAgICBbc2VhcmNoUHJlZml4Q2xzXToge1xuICAgICAgW2Ake2NvbXBvbmVudENsc31gXToge1xuICAgICAgICAnJjpob3ZlciwgJjpmb2N1cyc6IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5SG92ZXIsXG4gICAgICAgICAgW2ArICR7Y29tcG9uZW50Q2xzfS1ncm91cC1hZGRvbiAke3NlYXJjaFByZWZpeENsc30tYnV0dG9uOm5vdCgke2FudENsc30tYnRuLXByaW1hcnkpYF06IHtcbiAgICAgICAgICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUhvdmVyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30tYWZmaXgtd3JhcHBlcmBdOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogMFxuICAgICAgfSxcbiAgICAgIC8vIGZpeCBzbGlnaHQgaGVpZ2h0IGRpZmYgaW4gRmlyZWZveDpcbiAgICAgIC8vIGh0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2F1dG8tY29tcGxldGUtY24vI2NvbXBvbmVudHMtYXV0by1jb21wbGV0ZS1kZW1vLWNlcnRhaW4tY2F0ZWdvcnlcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LWxnYF06IHtcbiAgICAgICAgbGluZUhlaWdodDogdG9rZW4ubGluZUhlaWdodExHIC0gMC4wMDAyXG4gICAgICB9LFxuICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1ncm91cGBdOiB7XG4gICAgICAgIFtgPiAke2NvbXBvbmVudENsc30tZ3JvdXAtYWRkb246bGFzdC1jaGlsZGBdOiB7XG4gICAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogLTEsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgW2Ake3NlYXJjaFByZWZpeENsc30tYnV0dG9uYF06IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgICAgICAgICAgYm9yZGVyU3RhcnRTdGFydFJhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICBib3JkZXJFbmRFbmRSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1cyxcbiAgICAgICAgICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCR7c2VhcmNoUHJlZml4Q2xzfS1idXR0b246bm90KCR7YW50Q2xzfS1idG4tcHJpbWFyeSlgXToge1xuICAgICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlIb3ZlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUFjdGl2ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtgJiR7YW50Q2xzfS1idG4tbG9hZGluZzo6YmVmb3JlYF06IHtcbiAgICAgICAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogMCxcbiAgICAgICAgICAgICAgaW5zZXRJbmxpbmVFbmQ6IDAsXG4gICAgICAgICAgICAgIGluc2V0QmxvY2tTdGFydDogMCxcbiAgICAgICAgICAgICAgaW5zZXRCbG9ja0VuZDogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgJHtzZWFyY2hQcmVmaXhDbHN9LWJ1dHRvbmBdOiB7XG4gICAgICAgIGhlaWdodDogdG9rZW4uY29udHJvbEhlaWdodCxcbiAgICAgICAgJyY6aG92ZXIsICY6Zm9jdXMnOiB7XG4gICAgICAgICAgekluZGV4OiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYtbGFyZ2UgJHtzZWFyY2hQcmVmaXhDbHN9LWJ1dHRvbmBdOiB7XG4gICAgICAgIGhlaWdodDogdG9rZW4uY29udHJvbEhlaWdodExHXG4gICAgICB9LFxuICAgICAgW2AmLXNtYWxsICR7c2VhcmNoUHJlZml4Q2xzfS1idXR0b25gXToge1xuICAgICAgICBoZWlnaHQ6IHRva2VuLmNvbnRyb2xIZWlnaHRTTVxuICAgICAgfSxcbiAgICAgICcmLXJ0bCc6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAncnRsJ1xuICAgICAgfSxcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PSBDb21wYWN0IEl0ZW0gQ3VzdG9taXplZCBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09XG4gICAgICBbYCYke2NvbXBvbmVudENsc30tY29tcGFjdC1pdGVtYF06IHtcbiAgICAgICAgW2AmOm5vdCgke2NvbXBvbmVudENsc30tY29tcGFjdC1sYXN0LWl0ZW0pYF06IHtcbiAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1ncm91cC1hZGRvbmBdOiB7XG4gICAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1zZWFyY2gtYnV0dG9uYF06IHtcbiAgICAgICAgICAgICAgbWFyZ2luSW5saW5lRW5kOiAtdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtgJjpub3QoJHtjb21wb25lbnRDbHN9LWNvbXBhY3QtZmlyc3QtaXRlbSlgXToge1xuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LCR7Y29tcG9uZW50Q2xzfS1hZmZpeC13cmFwcGVyYF06IHtcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2A+ICR7Y29tcG9uZW50Q2xzfS1ncm91cC1hZGRvbiAke2NvbXBvbmVudENsc30tc2VhcmNoLWJ1dHRvbixcbiAgICAgICAgPiAke2NvbXBvbmVudENsc30sXG4gICAgICAgICR7Y29tcG9uZW50Q2xzfS1hZmZpeC13cmFwcGVyYF06IHtcbiAgICAgICAgICAnJjpob3ZlciwmOmZvY3VzLCY6YWN0aXZlJzoge1xuICAgICAgICAgICAgekluZGV4OiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9LWFmZml4LXdyYXBwZXItZm9jdXNlZGBdOiB7XG4gICAgICAgICAgekluZGV4OiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnB1dFRva2VuKHRva2VuKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIG1lcmdlVG9rZW4odG9rZW4sIHtcbiAgICBpbnB1dEFmZml4UGFkZGluZzogdG9rZW4ucGFkZGluZ1hYUyxcbiAgICBpbnB1dFBhZGRpbmdWZXJ0aWNhbDogTWF0aC5tYXgoTWF0aC5yb3VuZCgodG9rZW4uY29udHJvbEhlaWdodCAtIHRva2VuLmZvbnRTaXplICogdG9rZW4ubGluZUhlaWdodCkgLyAyICogMTApIC8gMTAgLSB0b2tlbi5saW5lV2lkdGgsIDMpLFxuICAgIGlucHV0UGFkZGluZ1ZlcnRpY2FsTEc6IE1hdGguY2VpbCgodG9rZW4uY29udHJvbEhlaWdodExHIC0gdG9rZW4uZm9udFNpemVMRyAqIHRva2VuLmxpbmVIZWlnaHRMRykgLyAyICogMTApIC8gMTAgLSB0b2tlbi5saW5lV2lkdGgsXG4gICAgaW5wdXRQYWRkaW5nVmVydGljYWxTTTogTWF0aC5tYXgoTWF0aC5yb3VuZCgodG9rZW4uY29udHJvbEhlaWdodFNNIC0gdG9rZW4uZm9udFNpemUgKiB0b2tlbi5saW5lSGVpZ2h0KSAvIDIgKiAxMCkgLyAxMCAtIHRva2VuLmxpbmVXaWR0aCwgMCksXG4gICAgaW5wdXRQYWRkaW5nSG9yaXpvbnRhbDogdG9rZW4ucGFkZGluZ1NNIC0gdG9rZW4ubGluZVdpZHRoLFxuICAgIGlucHV0UGFkZGluZ0hvcml6b250YWxTTTogdG9rZW4ucGFkZGluZ1hTIC0gdG9rZW4ubGluZVdpZHRoLFxuICAgIGlucHV0UGFkZGluZ0hvcml6b250YWxMRzogdG9rZW4uY29udHJvbFBhZGRpbmdIb3Jpem9udGFsIC0gdG9rZW4ubGluZVdpZHRoLFxuICAgIGlucHV0Qm9yZGVySG92ZXJDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5SG92ZXIsXG4gICAgaW5wdXRCb3JkZXJBY3RpdmVDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5SG92ZXJcbiAgfSk7XG59XG5jb25zdCBnZW5UZXh0QXJlYVN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGlucHV0UGFkZGluZ0hvcml6b250YWwsXG4gICAgcGFkZGluZ0xHXG4gIH0gPSB0b2tlbjtcbiAgY29uc3QgdGV4dGFyZWFQcmVmaXhDbHMgPSBgJHtjb21wb25lbnRDbHN9LXRleHRhcmVhYDtcbiAgcmV0dXJuIHtcbiAgICBbdGV4dGFyZWFQcmVmaXhDbHNdOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIFtgJHt0ZXh0YXJlYVByZWZpeENsc30tc3VmZml4YF06IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgaW5zZXRJbmxpbmVFbmQ6IGlucHV0UGFkZGluZ0hvcml6b250YWwsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICAgIH0sXG4gICAgICBbYCYtc3RhdHVzLWVycm9yLFxuICAgICAgICAmLXN0YXR1cy13YXJuaW5nLFxuICAgICAgICAmLXN0YXR1cy1zdWNjZXNzLFxuICAgICAgICAmLXN0YXR1cy12YWxpZGF0aW5nYF06IHtcbiAgICAgICAgW2AmJHt0ZXh0YXJlYVByZWZpeENsc30taGFzLWZlZWRiYWNrYF06IHtcbiAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfWBdOiB7XG4gICAgICAgICAgICBwYWRkaW5nSW5saW5lRW5kOiBwYWRkaW5nTEdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJi1zaG93LWNvdW50Jzoge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8zMzA0OVxuICAgICAgICBbYD4gJHtjb21wb25lbnRDbHN9YF06IHtcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgICB9LFxuICAgICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdhdHRyKGRhdGEtY291bnQpJyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmLXJ0bCc6IHtcbiAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgIGZsb2F0OiAnbGVmdCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRXhwb3J0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgZ2VuQ29tcG9uZW50U3R5bGVIb29rKCdJbnB1dCcsIHRva2VuID0+IHtcbiAgY29uc3QgaW5wdXRUb2tlbiA9IGluaXRJbnB1dFRva2VuKHRva2VuKTtcbiAgcmV0dXJuIFtnZW5JbnB1dFN0eWxlKGlucHV0VG9rZW4pLCBnZW5UZXh0QXJlYVN0eWxlKGlucHV0VG9rZW4pLCBnZW5BZmZpeFN0eWxlKGlucHV0VG9rZW4pLCBnZW5Hcm91cFN0eWxlKGlucHV0VG9rZW4pLCBnZW5TZWFyY2hJbnB1dFN0eWxlKGlucHV0VG9rZW4pLFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PSAgICAgICAgICAgICBTcGFjZSBDb21wYWN0ICAgICAgICAgICAgICAgICAgICAgICA9PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBnZW5Db21wYWN0SXRlbVN0eWxlKGlucHV0VG9rZW4pXTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///47673
`)},57239:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ rc_textarea_es; }
});

// UNUSED EXPORTS: ResizableTextArea

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(32531);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(73568);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(48555);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/calculateNodeHeight.js
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = "\\n  min-height:0 !important;\\n  max-height:none !important;\\n  height:0 !important;\\n  visibility:hidden !important;\\n  overflow:hidden !important;\\n  position:absolute !important;\\n  z-index:-1000 !important;\\n  top:0 !important;\\n  right:0 !important;\\n  pointer-events: none !important;\\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing', 'word-break'];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  }
  // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577
  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  }
  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
    paddingSize = _calculateNodeStyling.paddingSize,
    borderSize = _calculateNodeStyling.borderSize,
    boxSizing = _calculateNodeStyling.boxSizing,
    sizingStyle = _calculateNodeStyling.sizingStyle;
  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = undefined;
  var maxHeight = undefined;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }
  var style = {
    height: height,
    overflowY: overflowY,
    resize: 'none'
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/ResizableTextArea.js






var _excluded = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];







var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-textarea' : _props$prefixCls,
    onPressEnter = props.onPressEnter,
    defaultValue = props.defaultValue,
    value = props.value,
    autoSize = props.autoSize,
    onResize = props.onResize,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    onChange = props.onChange,
    onInternalAutoSize = props.onInternalAutoSize,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  // =============================== Value ================================
  var _useMergedState = (0,useMergedState/* default */.Z)(defaultValue, {
      value: value,
      postState: function postState(val) {
        return val !== null && val !== void 0 ? val : '';
      }
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  // ================================ Ref =================================
  var textareaRef = react.useRef();
  react.useImperativeHandle(ref, function () {
    return {
      textArea: textareaRef.current
    };
  });
  // ============================== AutoSize ==============================
  var _React$useMemo = react.useMemo(function () {
      if (autoSize && (0,esm_typeof/* default */.Z)(autoSize) === 'object') {
        return [autoSize.minRows, autoSize.maxRows];
      }
      return [];
    }, [autoSize]),
    _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
    minRows = _React$useMemo2[0],
    maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;
  // =============================== Scroll ===============================
  // https://github.com/ant-design/ant-design/issues/21870
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll() {
    try {
      // FF has bug with jump of scroll to top. We force back here.
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current,
          selectionStart = _textareaRef$current.selectionStart,
          selectionEnd = _textareaRef$current.selectionEnd,
          scrollTop = _textareaRef$current.scrollTop;
        // Fix Safari bug which not rollback when break line
        // This makes Chinese IME can't input. Do not fix this
        // const { value: tmpValue } = textareaRef.current;
        // textareaRef.current.value = '';
        // textareaRef.current.value = tmpValue;
        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  };
  // =============================== Resize ===============================
  var _React$useState = react.useState(RESIZE_STABLE),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    resizeState = _React$useState2[0],
    setResizeState = _React$useState2[1];
  var _React$useState3 = react.useState(),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    autoSizeStyle = _React$useState4[0],
    setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize() {
    setResizeState(RESIZE_START);
    if (false) {}
  };
  // Change to trigger resize measure
  (0,useLayoutEffect/* default */.Z)(function () {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      // Safari has bug that text will keep break line on text cut when it's prev is break line.
      // ZombieJ: This not often happen. So we just skip it.
      // const { selectionStart, selectionEnd, scrollTop } = textareaRef.current;
      // const { value: tmpValue } = textareaRef.current;
      // textareaRef.current.value = '';
      // textareaRef.current.value = tmpValue;
      // if (document.activeElement === textareaRef.current) {
      //   textareaRef.current.scrollTop = scrollTop;
      //   textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
      // }
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
      fixFirefoxAutoScroll();
    }
  }, [resizeState]);
  // We lock resize trigger by raf to avoid Safari warning
  var resizeRafRef = react.useRef();
  var cleanRaf = function cleanRaf() {
    raf/* default.cancel */.Z.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize === null || onResize === void 0 ? void 0 : onResize(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = (0,raf/* default */.Z)(function () {
          startResize();
        });
      }
    }
  };
  react.useEffect(function () {
    return cleanRaf;
  }, []);
  // =============================== Render ===============================
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = 'hidden';
    mergedStyle.overflowX = 'hidden';
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize)
  }, /*#__PURE__*/react.createElement("textarea", (0,esm_extends/* default */.Z)({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled)),
    disabled: disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
/* harmony default export */ var es_ResizableTextArea = (ResizableTextArea);
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/index.js







var TextArea = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(TextArea, _React$Component);
  var _super = (0,createSuper/* default */.Z)(TextArea);
  function TextArea(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, TextArea);
    _this = _super.call(this, props);
    _this.resizableTextArea = void 0;
    _this.focus = function () {
      _this.resizableTextArea.textArea.focus();
    };
    _this.saveTextArea = function (resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };
    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;
      _this.setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };
    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
        onPressEnter = _this$props.onPressEnter,
        onKeyDown = _this$props.onKeyDown;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };
    var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }
  (0,createClass/* default */.Z)(TextArea, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(es_ResizableTextArea, (0,esm_extends/* default */.Z)({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }
      return null;
    }
  }]);
  return TextArea;
}(react.Component);

/* harmony default export */ var rc_textarea_es = (TextArea);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bW9kdWxlcy9yYy10ZXh0YXJlYS9lcy9jYWxjdWxhdGVOb2RlSGVpZ2h0LmpzP2RkODQiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLXRleHRhcmVhL2VzL1Jlc2l6YWJsZVRleHRBcmVhLmpzP2NjNTAiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLXRleHRhcmVhL2VzL2luZGV4LmpzP2RjMjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhhbmtzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL3JlYWN0LXRleHRhcmVhLWF1dG9zaXplL1xuLyoqXG4gKiBjYWxjdWxhdGVOb2RlSGVpZ2h0KHVpVGV4dE5vZGUsIHVzZUNhY2hlID0gZmFsc2UpXG4gKi9cbnZhciBISURERU5fVEVYVEFSRUFfU1RZTEUgPSBcIlxcbiAgbWluLWhlaWdodDowICFpbXBvcnRhbnQ7XFxuICBtYXgtaGVpZ2h0Om5vbmUgIWltcG9ydGFudDtcXG4gIGhlaWdodDowICFpbXBvcnRhbnQ7XFxuICB2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnQ7XFxuICBwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgei1pbmRleDotMTAwMCAhaW1wb3J0YW50O1xcbiAgdG9wOjAgIWltcG9ydGFudDtcXG4gIHJpZ2h0OjAgIWltcG9ydGFudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuXCI7XG52YXIgU0laSU5HX1NUWUxFID0gWydsZXR0ZXItc3BhY2luZycsICdsaW5lLWhlaWdodCcsICdwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdmb250LWZhbWlseScsICdmb250LXdlaWdodCcsICdmb250LXNpemUnLCAnZm9udC12YXJpYW50JywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHQtdHJhbnNmb3JtJywgJ3dpZHRoJywgJ3RleHQtaW5kZW50JywgJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci13aWR0aCcsICdib3gtc2l6aW5nJywgJ3dvcmQtYnJlYWsnXTtcbnZhciBjb21wdXRlZFN0eWxlQ2FjaGUgPSB7fTtcbnZhciBoaWRkZW5UZXh0YXJlYTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb2RlU3R5bGluZyhub2RlKSB7XG4gIHZhciB1c2VDYWNoZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHZhciBub2RlUmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhY3RpZCcpIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gIGlmICh1c2VDYWNoZSAmJiBjb21wdXRlZFN0eWxlQ2FjaGVbbm9kZVJlZl0pIHtcbiAgICByZXR1cm4gY29tcHV0ZWRTdHlsZUNhY2hlW25vZGVSZWZdO1xuICB9XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICB2YXIgYm94U2l6aW5nID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy1tb3otYm94LXNpemluZycpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy13ZWJraXQtYm94LXNpemluZycpO1xuICB2YXIgcGFkZGluZ1NpemUgPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJykpICsgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpKTtcbiAgdmFyIGJvcmRlclNpemUgPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1ib3R0b20td2lkdGgnKSkgKyBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci10b3Atd2lkdGgnKSk7XG4gIHZhciBzaXppbmdTdHlsZSA9IFNJWklOR19TVFlMRS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQobmFtZSwgXCI6XCIpLmNvbmNhdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpKTtcbiAgfSkuam9pbignOycpO1xuICB2YXIgbm9kZUluZm8gPSB7XG4gICAgc2l6aW5nU3R5bGU6IHNpemluZ1N0eWxlLFxuICAgIHBhZGRpbmdTaXplOiBwYWRkaW5nU2l6ZSxcbiAgICBib3JkZXJTaXplOiBib3JkZXJTaXplLFxuICAgIGJveFNpemluZzogYm94U2l6aW5nXG4gIH07XG4gIGlmICh1c2VDYWNoZSAmJiBub2RlUmVmKSB7XG4gICAgY29tcHV0ZWRTdHlsZUNhY2hlW25vZGVSZWZdID0gbm9kZUluZm87XG4gIH1cbiAgcmV0dXJuIG5vZGVJbmZvO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY3VsYXRlQXV0b1NpemVTdHlsZSh1aVRleHROb2RlKSB7XG4gIHZhciB1c2VDYWNoZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHZhciBtaW5Sb3dzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICB2YXIgbWF4Um93cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgaWYgKCFoaWRkZW5UZXh0YXJlYSkge1xuICAgIGhpZGRlblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3RhYi1pbmRleCcsICctMScpO1xuICAgIGhpZGRlblRleHRhcmVhLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGlkZGVuVGV4dGFyZWEpO1xuICB9XG4gIC8vIEZpeCB3cmFwPVwib2ZmXCIgaXNzdWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNjU3N1xuICBpZiAodWlUZXh0Tm9kZS5nZXRBdHRyaWJ1dGUoJ3dyYXAnKSkge1xuICAgIGhpZGRlblRleHRhcmVhLnNldEF0dHJpYnV0ZSgnd3JhcCcsIHVpVGV4dE5vZGUuZ2V0QXR0cmlidXRlKCd3cmFwJykpO1xuICB9IGVsc2Uge1xuICAgIGhpZGRlblRleHRhcmVhLnJlbW92ZUF0dHJpYnV0ZSgnd3JhcCcpO1xuICB9XG4gIC8vIENvcHkgYWxsIENTUyBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBhbiBpbXBhY3Qgb24gdGhlIGhlaWdodCBvZiB0aGUgY29udGVudCBpblxuICAvLyB0aGUgdGV4dGJveFxuICB2YXIgX2NhbGN1bGF0ZU5vZGVTdHlsaW5nID0gY2FsY3VsYXRlTm9kZVN0eWxpbmcodWlUZXh0Tm9kZSwgdXNlQ2FjaGUpLFxuICAgIHBhZGRpbmdTaXplID0gX2NhbGN1bGF0ZU5vZGVTdHlsaW5nLnBhZGRpbmdTaXplLFxuICAgIGJvcmRlclNpemUgPSBfY2FsY3VsYXRlTm9kZVN0eWxpbmcuYm9yZGVyU2l6ZSxcbiAgICBib3hTaXppbmcgPSBfY2FsY3VsYXRlTm9kZVN0eWxpbmcuYm94U2l6aW5nLFxuICAgIHNpemluZ1N0eWxlID0gX2NhbGN1bGF0ZU5vZGVTdHlsaW5nLnNpemluZ1N0eWxlO1xuICAvLyBOZWVkIHRvIGhhdmUgdGhlIG92ZXJmbG93IGF0dHJpYnV0ZSB0byBoaWRlIHRoZSBzY3JvbGxiYXIgb3RoZXJ3aXNlXG4gIC8vIHRleHQtbGluZXMgd2lsbCBub3QgY2FsY3VsYXRlZCBwcm9wZXJseSBhcyB0aGUgc2hhZG93IHdpbGwgdGVjaG5pY2FsbHkgYmVcbiAgLy8gbmFycm93ZXIgZm9yIGNvbnRlbnRcbiAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiXCIuY29uY2F0KHNpemluZ1N0eWxlLCBcIjtcIikuY29uY2F0KEhJRERFTl9URVhUQVJFQV9TVFlMRSkpO1xuICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9IHVpVGV4dE5vZGUudmFsdWUgfHwgdWlUZXh0Tm9kZS5wbGFjZWhvbGRlciB8fCAnJztcbiAgdmFyIG1pbkhlaWdodCA9IHVuZGVmaW5lZDtcbiAgdmFyIG1heEhlaWdodCA9IHVuZGVmaW5lZDtcbiAgdmFyIG92ZXJmbG93WTtcbiAgdmFyIGhlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodDtcbiAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgLy8gYm9yZGVyLWJveDogYWRkIGJvcmRlciwgc2luY2UgaGVpZ2h0ID0gY29udGVudCArIHBhZGRpbmcgKyBib3JkZXJcbiAgICBoZWlnaHQgKz0gYm9yZGVyU2l6ZTtcbiAgfSBlbHNlIGlmIChib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcpIHtcbiAgICAvLyByZW1vdmUgcGFkZGluZywgc2luY2UgaGVpZ2h0ID0gY29udGVudFxuICAgIGhlaWdodCAtPSBwYWRkaW5nU2l6ZTtcbiAgfVxuICBpZiAobWluUm93cyAhPT0gbnVsbCB8fCBtYXhSb3dzICE9PSBudWxsKSB7XG4gICAgLy8gbWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuICAgIGhpZGRlblRleHRhcmVhLnZhbHVlID0gJyAnO1xuICAgIHZhciBzaW5nbGVSb3dIZWlnaHQgPSBoaWRkZW5UZXh0YXJlYS5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nU2l6ZTtcbiAgICBpZiAobWluUm93cyAhPT0gbnVsbCkge1xuICAgICAgbWluSGVpZ2h0ID0gc2luZ2xlUm93SGVpZ2h0ICogbWluUm93cztcbiAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQgKyBwYWRkaW5nU2l6ZSArIGJvcmRlclNpemU7XG4gICAgICB9XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChtaW5IZWlnaHQsIGhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtYXhSb3dzICE9PSBudWxsKSB7XG4gICAgICBtYXhIZWlnaHQgPSBzaW5nbGVSb3dIZWlnaHQgKiBtYXhSb3dzO1xuICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgICAgIH1cbiAgICAgIG92ZXJmbG93WSA9IGhlaWdodCA+IG1heEhlaWdodCA/ICcnIDogJ2hpZGRlbic7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihtYXhIZWlnaHQsIGhlaWdodCk7XG4gICAgfVxuICB9XG4gIHZhciBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBvdmVyZmxvd1k6IG92ZXJmbG93WSxcbiAgICByZXNpemU6ICdub25lJ1xuICB9O1xuICBpZiAobWluSGVpZ2h0KSB7XG4gICAgc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0O1xuICB9XG4gIGlmIChtYXhIZWlnaHQpIHtcbiAgICBzdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wicHJlZml4Q2xzXCIsIFwib25QcmVzc0VudGVyXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwidmFsdWVcIiwgXCJhdXRvU2l6ZVwiLCBcIm9uUmVzaXplXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJkaXNhYmxlZFwiLCBcIm9uQ2hhbmdlXCIsIFwib25JbnRlcm5hbEF1dG9TaXplXCJdO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3JjLXJlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQgdXNlTGF5b3V0RWZmZWN0IGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZUxheW91dEVmZmVjdFwiO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbmltcG9ydCB1c2VNZXJnZWRTdGF0ZSBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VNZXJnZWRTdGF0ZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY2FsY3VsYXRlQXV0b1NpemVTdHlsZSBmcm9tICcuL2NhbGN1bGF0ZU5vZGVIZWlnaHQnO1xudmFyIFJFU0laRV9TVEFSVCA9IDA7XG52YXIgUkVTSVpFX01FQVNVUklORyA9IDE7XG52YXIgUkVTSVpFX1NUQUJMRSA9IDI7XG52YXIgUmVzaXphYmxlVGV4dEFyZWEgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtdGV4dGFyZWEnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICBvblByZXNzRW50ZXIgPSBwcm9wcy5vblByZXNzRW50ZXIsXG4gICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgYXV0b1NpemUgPSBwcm9wcy5hdXRvU2l6ZSxcbiAgICBvblJlc2l6ZSA9IHByb3BzLm9uUmVzaXplLFxuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICBvbkludGVybmFsQXV0b1NpemUgPSBwcm9wcy5vbkludGVybmFsQXV0b1NpemUsXG4gICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFZhbHVlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSB1c2VNZXJnZWRTdGF0ZShkZWZhdWx0VmFsdWUsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHBvc3RTdGF0ZTogZnVuY3Rpb24gcG9zdFN0YXRlKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsICE9PSBudWxsICYmIHZhbCAhPT0gdm9pZCAwID8gdmFsIDogJyc7XG4gICAgICB9XG4gICAgfSksXG4gICAgX3VzZU1lcmdlZFN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZSwgMiksXG4gICAgbWVyZ2VkVmFsdWUgPSBfdXNlTWVyZ2VkU3RhdGUyWzBdLFxuICAgIHNldE1lcmdlZFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlsxXTtcbiAgdmFyIG9uSW50ZXJuYWxDaGFuZ2UgPSBmdW5jdGlvbiBvbkludGVybmFsQ2hhbmdlKGV2ZW50KSB7XG4gICAgc2V0TWVyZ2VkVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoZXZlbnQpO1xuICB9O1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciB0ZXh0YXJlYVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0QXJlYTogdGV4dGFyZWFSZWYuY3VycmVudFxuICAgIH07XG4gIH0pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQXV0b1NpemUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGF1dG9TaXplICYmIF90eXBlb2YoYXV0b1NpemUpID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gW2F1dG9TaXplLm1pblJvd3MsIGF1dG9TaXplLm1heFJvd3NdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sIFthdXRvU2l6ZV0pLFxuICAgIF9SZWFjdCR1c2VNZW1vMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VNZW1vLCAyKSxcbiAgICBtaW5Sb3dzID0gX1JlYWN0JHVzZU1lbW8yWzBdLFxuICAgIG1heFJvd3MgPSBfUmVhY3QkdXNlTWVtbzJbMV07XG4gIHZhciBuZWVkQXV0b1NpemUgPSAhIWF1dG9TaXplO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNjcm9sbCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzIxODcwXG4gIHZhciBmaXhGaXJlZm94QXV0b1Njcm9sbCA9IGZ1bmN0aW9uIGZpeEZpcmVmb3hBdXRvU2Nyb2xsKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBGRiBoYXMgYnVnIHdpdGgganVtcCBvZiBzY3JvbGwgdG8gdG9wLiBXZSBmb3JjZSBiYWNrIGhlcmUuXG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGV4dGFyZWFSZWYuY3VycmVudCkge1xuICAgICAgICB2YXIgX3RleHRhcmVhUmVmJGN1cnJlbnQgPSB0ZXh0YXJlYVJlZi5jdXJyZW50LFxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gX3RleHRhcmVhUmVmJGN1cnJlbnQuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gX3RleHRhcmVhUmVmJGN1cnJlbnQuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF90ZXh0YXJlYVJlZiRjdXJyZW50LnNjcm9sbFRvcDtcbiAgICAgICAgLy8gRml4IFNhZmFyaSBidWcgd2hpY2ggbm90IHJvbGxiYWNrIHdoZW4gYnJlYWsgbGluZVxuICAgICAgICAvLyBUaGlzIG1ha2VzIENoaW5lc2UgSU1FIGNhbid0IGlucHV0LiBEbyBub3QgZml4IHRoaXNcbiAgICAgICAgLy8gY29uc3QgeyB2YWx1ZTogdG1wVmFsdWUgfSA9IHRleHRhcmVhUmVmLmN1cnJlbnQ7XG4gICAgICAgIC8vIHRleHRhcmVhUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAgICAgLy8gdGV4dGFyZWFSZWYuY3VycmVudC52YWx1ZSA9IHRtcFZhbHVlO1xuICAgICAgICB0ZXh0YXJlYVJlZi5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xuICAgICAgICB0ZXh0YXJlYVJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBGaXggZXJyb3IgaW4gQ2hyb21lOlxuICAgICAgLy8gRmFpbGVkIHRvIHJlYWQgdGhlICdzZWxlY3Rpb25TdGFydCcgcHJvcGVydHkgZnJvbSAnSFRNTElucHV0RWxlbWVudCdcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIxMTc3NDg5LzMwNDA2MDVcbiAgICB9XG4gIH07XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVzaXplID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKFJFU0laRV9TVEFCTEUpLFxuICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgIHJlc2l6ZVN0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICBzZXRSZXNpemVTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUzID0gUmVhY3QudXNlU3RhdGUoKSxcbiAgICBfUmVhY3QkdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlMywgMiksXG4gICAgYXV0b1NpemVTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTRbMF0sXG4gICAgc2V0QXV0b1NpemVTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07XG4gIHZhciBzdGFydFJlc2l6ZSA9IGZ1bmN0aW9uIHN0YXJ0UmVzaXplKCkge1xuICAgIHNldFJlc2l6ZVN0YXRlKFJFU0laRV9TVEFSVCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgIG9uSW50ZXJuYWxBdXRvU2l6ZSA9PT0gbnVsbCB8fCBvbkludGVybmFsQXV0b1NpemUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uSW50ZXJuYWxBdXRvU2l6ZSgpO1xuICAgIH1cbiAgfTtcbiAgLy8gQ2hhbmdlIHRvIHRyaWdnZXIgcmVzaXplIG1lYXN1cmVcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmVlZEF1dG9TaXplKSB7XG4gICAgICBzdGFydFJlc2l6ZSgpO1xuICAgIH1cbiAgfSwgW3ZhbHVlLCBtaW5Sb3dzLCBtYXhSb3dzLCBuZWVkQXV0b1NpemVdKTtcbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVzaXplU3RhdGUgPT09IFJFU0laRV9TVEFSVCkge1xuICAgICAgc2V0UmVzaXplU3RhdGUoUkVTSVpFX01FQVNVUklORyk7XG4gICAgfSBlbHNlIGlmIChyZXNpemVTdGF0ZSA9PT0gUkVTSVpFX01FQVNVUklORykge1xuICAgICAgdmFyIHRleHRhcmVhU3R5bGVzID0gY2FsY3VsYXRlQXV0b1NpemVTdHlsZSh0ZXh0YXJlYVJlZi5jdXJyZW50LCBmYWxzZSwgbWluUm93cywgbWF4Um93cyk7XG4gICAgICAvLyBTYWZhcmkgaGFzIGJ1ZyB0aGF0IHRleHQgd2lsbCBrZWVwIGJyZWFrIGxpbmUgb24gdGV4dCBjdXQgd2hlbiBpdCdzIHByZXYgaXMgYnJlYWsgbGluZS5cbiAgICAgIC8vIFpvbWJpZUo6IFRoaXMgbm90IG9mdGVuIGhhcHBlbi4gU28gd2UganVzdCBza2lwIGl0LlxuICAgICAgLy8gY29uc3QgeyBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kLCBzY3JvbGxUb3AgfSA9IHRleHRhcmVhUmVmLmN1cnJlbnQ7XG4gICAgICAvLyBjb25zdCB7IHZhbHVlOiB0bXBWYWx1ZSB9ID0gdGV4dGFyZWFSZWYuY3VycmVudDtcbiAgICAgIC8vIHRleHRhcmVhUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAgIC8vIHRleHRhcmVhUmVmLmN1cnJlbnQudmFsdWUgPSB0bXBWYWx1ZTtcbiAgICAgIC8vIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0ZXh0YXJlYVJlZi5jdXJyZW50KSB7XG4gICAgICAvLyAgIHRleHRhcmVhUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgLy8gICB0ZXh0YXJlYVJlZi5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xuICAgICAgLy8gfVxuICAgICAgc2V0UmVzaXplU3RhdGUoUkVTSVpFX1NUQUJMRSk7XG4gICAgICBzZXRBdXRvU2l6ZVN0eWxlKHRleHRhcmVhU3R5bGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZml4RmlyZWZveEF1dG9TY3JvbGwoKTtcbiAgICB9XG4gIH0sIFtyZXNpemVTdGF0ZV0pO1xuICAvLyBXZSBsb2NrIHJlc2l6ZSB0cmlnZ2VyIGJ5IHJhZiB0byBhdm9pZCBTYWZhcmkgd2FybmluZ1xuICB2YXIgcmVzaXplUmFmUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBjbGVhblJhZiA9IGZ1bmN0aW9uIGNsZWFuUmFmKCkge1xuICAgIHJhZi5jYW5jZWwocmVzaXplUmFmUmVmLmN1cnJlbnQpO1xuICB9O1xuICB2YXIgb25JbnRlcm5hbFJlc2l6ZSA9IGZ1bmN0aW9uIG9uSW50ZXJuYWxSZXNpemUoc2l6ZSkge1xuICAgIGlmIChyZXNpemVTdGF0ZSA9PT0gUkVTSVpFX1NUQUJMRSkge1xuICAgICAgb25SZXNpemUgPT09IG51bGwgfHwgb25SZXNpemUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUmVzaXplKHNpemUpO1xuICAgICAgaWYgKGF1dG9TaXplKSB7XG4gICAgICAgIGNsZWFuUmFmKCk7XG4gICAgICAgIHJlc2l6ZVJhZlJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdGFydFJlc2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNsZWFuUmFmO1xuICB9LCBbXSk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIG1lcmdlZEF1dG9TaXplU3R5bGUgPSBuZWVkQXV0b1NpemUgPyBhdXRvU2l6ZVN0eWxlIDogbnVsbDtcbiAgdmFyIG1lcmdlZFN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIG1lcmdlZEF1dG9TaXplU3R5bGUpO1xuICBpZiAocmVzaXplU3RhdGUgPT09IFJFU0laRV9TVEFSVCB8fCByZXNpemVTdGF0ZSA9PT0gUkVTSVpFX01FQVNVUklORykge1xuICAgIG1lcmdlZFN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIG1lcmdlZFN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgIG9uUmVzaXplOiBvbkludGVybmFsUmVzaXplLFxuICAgIGRpc2FibGVkOiAhKGF1dG9TaXplIHx8IG9uUmVzaXplKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICByZWY6IHRleHRhcmVhUmVmLFxuICAgIHN0eWxlOiBtZXJnZWRTdHlsZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpKSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgdmFsdWU6IG1lcmdlZFZhbHVlLFxuICAgIG9uQ2hhbmdlOiBvbkludGVybmFsQ2hhbmdlXG4gIH0pKSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IFJlc2l6YWJsZVRleHRBcmVhOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXNpemFibGVUZXh0QXJlYSBmcm9tICcuL1Jlc2l6YWJsZVRleHRBcmVhJztcbnZhciBUZXh0QXJlYSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGV4dEFyZWEsIF9SZWFjdCRDb21wb25lbnQpO1xuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRleHRBcmVhKTtcbiAgZnVuY3Rpb24gVGV4dEFyZWEocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRBcmVhKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICBfdGhpcy5yZXNpemFibGVUZXh0QXJlYSA9IHZvaWQgMDtcbiAgICBfdGhpcy5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlc2l6YWJsZVRleHRBcmVhLnRleHRBcmVhLmZvY3VzKCk7XG4gICAgfTtcbiAgICBfdGhpcy5zYXZlVGV4dEFyZWEgPSBmdW5jdGlvbiAocmVzaXphYmxlVGV4dEFyZWEpIHtcbiAgICAgIF90aGlzLnJlc2l6YWJsZVRleHRBcmVhID0gcmVzaXphYmxlVGV4dEFyZWE7XG4gICAgfTtcbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICBvblByZXNzRW50ZXIgPSBfdGhpcyRwcm9wcy5vblByZXNzRW50ZXIsXG4gICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzLm9uS2V5RG93bjtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIG9uUHJlc3NFbnRlcikge1xuICAgICAgICBvblByZXNzRW50ZXIoZSk7XG4gICAgICB9XG4gICAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICAgIG9uS2V5RG93bihlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBwcm9wcy52YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHMudmFsdWUgPT09IG51bGwgPyBwcm9wcy5kZWZhdWx0VmFsdWUgOiBwcm9wcy52YWx1ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhUZXh0QXJlYSwgW3tcbiAgICBrZXk6IFwic2V0VmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoISgndmFsdWUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMucmVzaXphYmxlVGV4dEFyZWEudGV4dEFyZWEuYmx1cigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6YWJsZVRleHRBcmVhLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVUZXh0QXJlYVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFRleHRBcmVhO1xufShSZWFjdC5Db21wb25lbnQpO1xuZXhwb3J0IHsgUmVzaXphYmxlVGV4dEFyZWEgfTtcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///57239
`)}}]);
