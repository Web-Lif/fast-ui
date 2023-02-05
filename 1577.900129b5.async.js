"use strict";(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[1577],{45353:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ wave; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/style.js

const genWaveStyle = token => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: \`var(--wave-color, \${colorPrimary})\`,
      boxShadow: \`0 0 0 0 currentcolor\`,
      opacity: 0.2,
      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: [\`box-shadow 0.4s \${token.motionEaseOutCirc}\`, \`opacity 2s \${token.motionEaseOutCirc}\`].join(','),
        '&-active': {
          boxShadow: \`0 0 0 6px currentcolor\`,
          opacity: 0
        }
      }
    }
  };
};
/* harmony default export */ var style = ((0,genComponentStyleHook/* default */.Z)('Wave', token => [genWaveStyle(token)]));
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(62874);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
// EXTERNAL MODULE: ./node_modules/rc-util/es/React/render.js
var render = __webpack_require__(38135);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/util.js
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  const match = (color || '').match(/rgba?\\((\\d*), (\\d*), (\\d*)(, [\\d.]*)?\\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && isNotGrey(color) && !/rgba\\((?:\\d*, ){3}0\\)/.test(color) &&
  // any transparent rgba color
  color !== 'transparent';
}
function getTargetWaveColor(node) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/WaveEffect.js






function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = props => {
  const {
    className,
    target
  } = props;
  const divRef = react.useRef(null);
  const [color, setWaveColor] = react.useState(null);
  const [borderRadius, setBorderRadius] = react.useState([]);
  const [left, setLeft] = react.useState(0);
  const [top, setTop] = react.useState(0);
  const [width, setWidth] = react.useState(0);
  const [height, setHeight] = react.useState(0);
  const [enabled, setEnabled] = react.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map(radius => \`\${radius}px\`).join(' ')
  };
  if (color) {
    waveStyle['--wave-color'] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    // Get wave color from target
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === 'static';
    // Rect
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    // Get border radius
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map(radius => validateNum(parseFloat(radius))));
  }
  react.useEffect(() => {
    if (target) {
      // We need delay to check position here
      // since UI may change after click
      const id = (0,raf/* default */.Z)(() => {
        syncPos();
        setEnabled(true);
      });
      // Add resize observer to follow size
      let resizeObserver;
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        raf/* default.cancel */.Z.cancel(id);
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5000,
    onAppearEnd: (_, event) => {
      var _a;
      if (event.deadline || event.propertyName === 'opacity') {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        (0,render/* unmount */.v)(holder).then(() => {
          var _a;
          (_a = holder.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(holder);
        });
      }
      return false;
    }
  }, _ref => {
    let {
      className: motionClassName
    } = _ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: divRef,
      className: classnames_default()(className, motionClassName),
      style: waveStyle
    });
  });
};
function showWaveEffect(node, className) {
  // Create holder
  const holder = document.createElement('div');
  holder.style.position = 'absolute';
  holder.style.left = \`0px\`;
  holder.style.top = \`0px\`;
  node === null || node === void 0 ? void 0 : node.insertBefore(holder, node === null || node === void 0 ? void 0 : node.firstChild);
  (0,render/* render */.s)( /*#__PURE__*/react.createElement(WaveEffect, {
    target: node,
    className: className
  }), holder);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/useWave.js

function useWave(nodeRef, className) {
  function showWave() {
    const node = nodeRef.current;
    showWaveEffect(node, className);
  }
  return showWave;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave/index.js








const Wave = props => {
  const {
    children,
    disabled
  } = props;
  const {
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const containerRef = (0,react.useRef)(null);
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('wave');
  const [, hashId] = style(prefixCls);
  // =============================== Wave ===============================
  const showWave = useWave(containerRef, classnames_default()(prefixCls, hashId));
  // ============================== Effect ==============================
  react.useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== 1 || disabled) {
      return;
    }
    // Click handler
    const onClick = e => {
      // Fix radio button click twice
      if (e.target.tagName === 'INPUT' || !(0,isVisible/* default */.Z)(e.target) ||
      // No need wave
      !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) {
        return;
      }
      showWave();
    };
    // Bind events
    node.addEventListener('click', onClick, true);
    return () => {
      node.removeEventListener('click', onClick, true);
    };
  }, [disabled]);
  // ============================== Render ==============================
  if (! /*#__PURE__*/react.isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = (0,es_ref/* supportRef */.Yr)(children) ? (0,es_ref/* composeRef */.sQ)(children.ref, containerRef) : containerRef;
  return (0,reactNode/* cloneElement */.Tm)(children, {
    ref
  });
};
if (false) {}
/* harmony default export */ var wave = (Wave);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsYUFBYSw2QkFBVTtBQUMvQyxTQUFTLGtDQUFZO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QseUNBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL3dhdmUvc3R5bGUuanM/NjQ4YiIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9fdXRpbC93YXZlL3V0aWwuanM/NTIxMiIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9fdXRpbC93YXZlL1dhdmVFZmZlY3QuanM/N2YwMSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9fdXRpbC93YXZlL3VzZVdhdmUuanM/YThkYyIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9fdXRpbC93YXZlL2luZGV4LmpzP2RlNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuQ29tcG9uZW50U3R5bGVIb29rIH0gZnJvbSAnLi4vLi4vdGhlbWUvaW50ZXJuYWwnO1xuY29uc3QgZ2VuV2F2ZVN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGNvbG9yUHJpbWFyeVxuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW2NvbXBvbmVudENsc106IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgY29sb3I6IGB2YXIoLS13YXZlLWNvbG9yLCAke2NvbG9yUHJpbWFyeX0pYCxcbiAgICAgIGJveFNoYWRvdzogYDAgMCAwIDAgY3VycmVudGNvbG9yYCxcbiAgICAgIG9wYWNpdHk6IDAuMixcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT0gTW90aW9uID09PT09PT09PT09PT09PT09PT1cbiAgICAgICcmLndhdmUtbW90aW9uLWFwcGVhcic6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogW2Bib3gtc2hhZG93IDAuNHMgJHt0b2tlbi5tb3Rpb25FYXNlT3V0Q2lyY31gLCBgb3BhY2l0eSAycyAke3Rva2VuLm1vdGlvbkVhc2VPdXRDaXJjfWBdLmpvaW4oJywnKSxcbiAgICAgICAgJyYtYWN0aXZlJzoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDZweCBjdXJyZW50Y29sb3JgLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZW5Db21wb25lbnRTdHlsZUhvb2soJ1dhdmUnLCB0b2tlbiA9PiBbZ2VuV2F2ZVN0eWxlKHRva2VuKV0pOyIsImV4cG9ydCBmdW5jdGlvbiBpc05vdEdyZXkoY29sb3IpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIGNvbnN0IG1hdGNoID0gKGNvbG9yIHx8ICcnKS5tYXRjaCgvcmdiYT9cXCgoXFxkKiksIChcXGQqKSwgKFxcZCopKCwgW1xcZC5dKik/XFwpLyk7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiBtYXRjaFszXSkge1xuICAgIHJldHVybiAhKG1hdGNoWzFdID09PSBtYXRjaFsyXSAmJiBtYXRjaFsyXSA9PT0gbWF0Y2hbM10pO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRXYXZlQ29sb3IoY29sb3IpIHtcbiAgcmV0dXJuIGNvbG9yICYmIGNvbG9yICE9PSAnI2ZmZicgJiYgY29sb3IgIT09ICcjZmZmZmZmJyAmJiBjb2xvciAhPT0gJ3JnYigyNTUsIDI1NSwgMjU1KScgJiYgY29sb3IgIT09ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyAmJiBpc05vdEdyZXkoY29sb3IpICYmICEvcmdiYVxcKCg/OlxcZCosICl7M30wXFwpLy50ZXN0KGNvbG9yKSAmJlxuICAvLyBhbnkgdHJhbnNwYXJlbnQgcmdiYSBjb2xvclxuICBjb2xvciAhPT0gJ3RyYW5zcGFyZW50Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRXYXZlQ29sb3Iobm9kZSkge1xuICBjb25zdCB7XG4gICAgYm9yZGVyVG9wQ29sb3IsXG4gICAgYm9yZGVyQ29sb3IsXG4gICAgYmFja2dyb3VuZENvbG9yXG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBpZiAoaXNWYWxpZFdhdmVDb2xvcihib3JkZXJUb3BDb2xvcikpIHtcbiAgICByZXR1cm4gYm9yZGVyVG9wQ29sb3I7XG4gIH1cbiAgaWYgKGlzVmFsaWRXYXZlQ29sb3IoYm9yZGVyQ29sb3IpKSB7XG4gICAgcmV0dXJuIGJvcmRlckNvbG9yO1xuICB9XG4gIGlmIChpc1ZhbGlkV2F2ZUNvbG9yKGJhY2tncm91bmRDb2xvcikpIHtcbiAgICByZXR1cm4gYmFja2dyb3VuZENvbG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NNb3Rpb24gZnJvbSAncmMtbW90aW9uJztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG5pbXBvcnQgeyByZW5kZXIsIHVubW91bnQgfSBmcm9tIFwicmMtdXRpbC9lcy9SZWFjdC9yZW5kZXJcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0V2F2ZUNvbG9yIH0gZnJvbSAnLi91dGlsJztcbmZ1bmN0aW9uIHZhbGlkYXRlTnVtKHZhbHVlKSB7XG4gIHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpID8gMCA6IHZhbHVlO1xufVxuY29uc3QgV2F2ZUVmZmVjdCA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICB0YXJnZXRcbiAgfSA9IHByb3BzO1xuICBjb25zdCBkaXZSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtjb2xvciwgc2V0V2F2ZUNvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYm9yZGVyUmFkaXVzLCBzZXRCb3JkZXJSYWRpdXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGVmdCwgc2V0TGVmdF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvcCwgc2V0VG9wXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtlbmFibGVkLCBzZXRFbmFibGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgd2F2ZVN0eWxlID0ge1xuICAgIGxlZnQsXG4gICAgdG9wLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cy5tYXAocmFkaXVzID0+IGAke3JhZGl1c31weGApLmpvaW4oJyAnKVxuICB9O1xuICBpZiAoY29sb3IpIHtcbiAgICB3YXZlU3R5bGVbJy0td2F2ZS1jb2xvciddID0gY29sb3I7XG4gIH1cbiAgZnVuY3Rpb24gc3luY1BvcygpIHtcbiAgICBjb25zdCBub2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgLy8gR2V0IHdhdmUgY29sb3IgZnJvbSB0YXJnZXRcbiAgICBzZXRXYXZlQ29sb3IoZ2V0VGFyZ2V0V2F2ZUNvbG9yKHRhcmdldCkpO1xuICAgIGNvbnN0IGlzU3RhdGljID0gbm9kZVN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJztcbiAgICAvLyBSZWN0XG4gICAgY29uc3Qge1xuICAgICAgYm9yZGVyTGVmdFdpZHRoLFxuICAgICAgYm9yZGVyVG9wV2lkdGhcbiAgICB9ID0gbm9kZVN0eWxlO1xuICAgIHNldExlZnQoaXNTdGF0aWMgPyB0YXJnZXQub2Zmc2V0TGVmdCA6IHZhbGlkYXRlTnVtKC1wYXJzZUZsb2F0KGJvcmRlckxlZnRXaWR0aCkpKTtcbiAgICBzZXRUb3AoaXNTdGF0aWMgPyB0YXJnZXQub2Zmc2V0VG9wIDogdmFsaWRhdGVOdW0oLXBhcnNlRmxvYXQoYm9yZGVyVG9wV2lkdGgpKSk7XG4gICAgc2V0V2lkdGgodGFyZ2V0Lm9mZnNldFdpZHRoKTtcbiAgICBzZXRIZWlnaHQodGFyZ2V0Lm9mZnNldEhlaWdodCk7XG4gICAgLy8gR2V0IGJvcmRlciByYWRpdXNcbiAgICBjb25zdCB7XG4gICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXMsXG4gICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzLFxuICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcbiAgICB9ID0gbm9kZVN0eWxlO1xuICAgIHNldEJvcmRlclJhZGl1cyhbYm9yZGVyVG9wTGVmdFJhZGl1cywgYm9yZGVyVG9wUmlnaHRSYWRpdXMsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzLCBib3JkZXJCb3R0b21MZWZ0UmFkaXVzXS5tYXAocmFkaXVzID0+IHZhbGlkYXRlTnVtKHBhcnNlRmxvYXQocmFkaXVzKSkpKTtcbiAgfVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIC8vIFdlIG5lZWQgZGVsYXkgdG8gY2hlY2sgcG9zaXRpb24gaGVyZVxuICAgICAgLy8gc2luY2UgVUkgbWF5IGNoYW5nZSBhZnRlciBjbGlja1xuICAgICAgY29uc3QgaWQgPSByYWYoKCkgPT4ge1xuICAgICAgICBzeW5jUG9zKCk7XG4gICAgICAgIHNldEVuYWJsZWQodHJ1ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCByZXNpemUgb2JzZXJ2ZXIgdG8gZm9sbG93IHNpemVcbiAgICAgIGxldCByZXNpemVPYnNlcnZlcjtcbiAgICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHN5bmNQb3MpO1xuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICByYWYuY2FuY2VsKGlkKTtcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIgPT09IG51bGwgfHwgcmVzaXplT2JzZXJ2ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbXSk7XG4gIGlmICghZW5hYmxlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIG1vdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICBtb3Rpb25OYW1lOiBcIndhdmUtbW90aW9uXCIsXG4gICAgbW90aW9uRGVhZGxpbmU6IDUwMDAsXG4gICAgb25BcHBlYXJFbmQ6IChfLCBldmVudCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgaWYgKGV2ZW50LmRlYWRsaW5lIHx8IGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICAgIGNvbnN0IGhvbGRlciA9IChfYSA9IGRpdlJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudDtcbiAgICAgICAgdW5tb3VudChob2xkZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAoX2EgPSBob2xkZXIucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKGhvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwgX3JlZiA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGNsYXNzTmFtZTogbW90aW9uQ2xhc3NOYW1lXG4gICAgfSA9IF9yZWY7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogZGl2UmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgbW90aW9uQ2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiB3YXZlU3R5bGVcbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1dhdmVFZmZlY3Qobm9kZSwgY2xhc3NOYW1lKSB7XG4gIC8vIENyZWF0ZSBob2xkZXJcbiAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbGRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGhvbGRlci5zdHlsZS5sZWZ0ID0gYDBweGA7XG4gIGhvbGRlci5zdHlsZS50b3AgPSBgMHB4YDtcbiAgbm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLmluc2VydEJlZm9yZShob2xkZXIsIG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5maXJzdENoaWxkKTtcbiAgcmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXYXZlRWZmZWN0LCB7XG4gICAgdGFyZ2V0OiBub2RlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0pLCBob2xkZXIpO1xufSIsImltcG9ydCBzaG93V2F2ZUVmZmVjdCBmcm9tICcuL1dhdmVFZmZlY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2F2ZShub2RlUmVmLCBjbGFzc05hbWUpIHtcbiAgZnVuY3Rpb24gc2hvd1dhdmUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVSZWYuY3VycmVudDtcbiAgICBzaG93V2F2ZUVmZmVjdChub2RlLCBjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBzaG93V2F2ZTtcbn0iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNvbXBvc2VSZWYsIHN1cHBvcnRSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcbmltcG9ydCBpc1Zpc2libGUgZnJvbSBcInJjLXV0aWwvZXMvRG9tL2lzVmlzaWJsZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50IH0gZnJvbSAnLi4vcmVhY3ROb2RlJztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB1c2VXYXZlIGZyb20gJy4vdXNlV2F2ZSc7XG5jb25zdCBXYXZlID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZGlzYWJsZWRcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgZ2V0UHJlZml4Q2xzXG4gIH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTdHlsZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnd2F2ZScpO1xuICBjb25zdCBbLCBoYXNoSWRdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBXYXZlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3Qgc2hvd1dhdmUgPSB1c2VXYXZlKGNvbnRhaW5lclJlZiwgY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGhhc2hJZCkpO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjb250YWluZXJSZWYuY3VycmVudDtcbiAgICBpZiAoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSAhPT0gMSB8fCBkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDbGljayBoYW5kbGVyXG4gICAgY29uc3Qgb25DbGljayA9IGUgPT4ge1xuICAgICAgLy8gRml4IHJhZGlvIGJ1dHRvbiBjbGljayB0d2ljZVxuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgIWlzVmlzaWJsZShlLnRhcmdldCkgfHxcbiAgICAgIC8vIE5vIG5lZWQgd2F2ZVxuICAgICAgIW5vZGUuZ2V0QXR0cmlidXRlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IG5vZGUuZGlzYWJsZWQgfHwgbm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ2Rpc2FibGVkJykgfHwgbm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJy1sZWF2ZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNob3dXYXZlKCk7XG4gICAgfTtcbiAgICAvLyBCaW5kIGV2ZW50c1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrLCB0cnVlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2ssIHRydWUpO1xuICAgIH07XG4gIH0sIFtkaXNhYmxlZF0pO1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuICE9PSBudWxsICYmIGNoaWxkcmVuICE9PSB2b2lkIDAgPyBjaGlsZHJlbiA6IG51bGw7XG4gIH1cbiAgY29uc3QgcmVmID0gc3VwcG9ydFJlZihjaGlsZHJlbikgPyBjb21wb3NlUmVmKGNoaWxkcmVuLnJlZiwgY29udGFpbmVyUmVmKSA6IGNvbnRhaW5lclJlZjtcbiAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIHJlZlxuICB9KTtcbn07XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBXYXZlLmRpc3BsYXlOYW1lID0gJ1dhdmUnO1xufVxuZXhwb3J0IGRlZmF1bHQgV2F2ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///45353
`)},87149:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": function() { return /* binding */ convertLegacyProps; },
  "Z": function() { return /* binding */ button_button; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(45353);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98866);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/internal.js + 2 modules
var internal = __webpack_require__(64049);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button-group.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const GroupSizeContext = /*#__PURE__*/react.createContext(undefined);
const ButtonGroup = props => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props,
    others = __rest(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  const [,, hashId] = (0,internal/* useToken */.dQ)();
  let sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    case 'middle':
    case undefined:
      break;
    default:
       false ? 0 : void 0;
  }
  const classes = classnames_default()(prefixCls, {
    [\`\${prefixCls}-\${sizeCls}\`]: sizeCls,
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  }, className, hashId);
  return /*#__PURE__*/react.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
/* harmony default export */ var button_group = (ButtonGroup);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/buttonHelpers.js


const rxTwoCNChar = /^[\\u4e00-\\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}
function isUnBorderedButtonType(type) {
  return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === undefined) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0,reactNode/* cloneElement */.Tm)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (typeof child === 'string') {
    return isTwoCNChar(child) ? /*#__PURE__*/react.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/react.createElement("span", null, child);
  }
  if ((0,reactNode/* isFragment */.M2)(child)) {
    return /*#__PURE__*/react.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  react.Children.forEach(children, child => {
    const type = typeof child;
    const isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = \`\${lastChild}\${child}\`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return react.Children.map(childList, child => splitCNCharsBySpace(child, needInserted));
}
const ButtonTypes = (/* unused pure expression or super */ null && (['default', 'primary', 'ghost', 'dashed', 'link', 'text']));
const ButtonShapes = (/* unused pure expression or super */ null && (['default', 'circle', 'round']));
const ButtonHTMLTypes = (/* unused pure expression or super */ null && (['submit', 'button', 'reset']));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(50888);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(62874);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/LoadingIcon.js



const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)'
});
const getRealWidth = node => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)'
});
const LoadingIcon = _ref => {
  let {
    prefixCls,
    loading,
    existIcon
  } = _ref;
  const visible = !!loading;
  if (existIcon) {
    return /*#__PURE__*/react.createElement("span", {
      className: \`\${prefixCls}-loading-icon\`
    }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null));
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    visible: visible,
    // We do not really use this motionName
    motionName: \`\${prefixCls}-loading-icon-motion\`,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, (_ref2, ref) => {
    let {
      className,
      style
    } = _ref2;
    return /*#__PURE__*/react.createElement("span", {
      className: \`\${prefixCls}-loading-icon\`,
      style: style,
      ref: ref
    }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
      className: className
    }));
  });
};
/* harmony default export */ var button_LoadingIcon = (LoadingIcon);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/style/group.js
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [\`> span, > \${buttonTypeCls}\`]: {
    '&:not(:last-child)': {
      [\`&, & > \${buttonTypeCls}\`]: {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor
        }
      }
    },
    '&:not(:first-child)': {
      [\`&, & > \${buttonTypeCls}\`]: {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = token => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token;
  return {
    [\`\${componentCls}-group\`]: [{
      position: 'relative',
      display: 'inline-flex',
      // Border
      [\`> span, > \${componentCls}\`]: {
        '&:not(:last-child)': {
          [\`&, & > \${componentCls}\`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        '&:not(:first-child)': {
          marginInlineStart: -lineWidth,
          [\`&, & > \${componentCls}\`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      },
      [componentCls]: {
        position: 'relative',
        zIndex: 1,
        [\`&:hover,
          &:focus,
          &:active\`]: {
          zIndex: 2
        },
        '&[disabled]': {
          zIndex: 0
        }
      },
      [\`\${componentCls}-icon-only\`]: {
        fontSize
      }
    },
    // Border Color
    genButtonBorderStyle(\`\${componentCls}-primary\`, colorPrimaryHover), genButtonBorderStyle(\`\${componentCls}-danger\`, colorErrorHover)]
  };
};
/* harmony default export */ var group = (genGroupStyle);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(80110);
;// CONCATENATED MODULE: ./node_modules/antd/es/style/compact-item-vertical.js
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [\`&-item:not(\${parentCls}-last-item)\`]: {
      marginBottom: -token.lineWidth
    },
    '&-item': {
      '&:hover,&:focus,&:active': {
        zIndex: 2
      },
      '&[disabled]': {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [\`&-item:not(\${parentCls}-first-item):not(\${parentCls}-last-item)\`]: {
      borderRadius: 0
    },
    [\`&-item\${parentCls}-first-item:not(\${parentCls}-last-item)\`]: {
      [\`&, &\${prefixCls}-sm, &\${prefixCls}-lg\`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [\`&-item\${parentCls}-last-item:not(\${parentCls}-first-item)\`]: {
      [\`&, &\${prefixCls}-sm, &\${prefixCls}-lg\`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = \`\${token.componentCls}-compact-vertical\`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
;// CONCATENATED MODULE: ./node_modules/antd/es/button/style/index.js





// ============================== Shared ==============================
const genSharedButtonStyle = token => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      fontWeight: 400,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      border: \`\${token.lineWidth}px \${token.lineType} transparent\`,
      cursor: 'pointer',
      transition: \`all \${token.motionDurationMid} \${token.motionEaseInOut}\`,
      userSelect: 'none',
      touchAction: 'manipulation',
      lineHeight: token.lineHeight,
      color: token.colorText,
      '> span': {
        display: 'inline-block'
      },
      // Leave a space between icon and text.
      [\`> \${iconCls} + span, > span + \${iconCls}\`]: {
        marginInlineStart: token.marginXS
      },
      '> a': {
        color: 'currentColor'
      },
      '&:not(:disabled)': Object.assign({}, (0,style/* genFocusStyle */.Qy)(token)),
      // make \`btn-icon-only\` not too narrow
      [\`&-icon-only\${componentCls}-compact-item\`]: {
        flex: 'none'
      },
      // Special styles for Primary Button
      [\`&-compact-item\${componentCls}-primary\`]: {
        [\`&:not([disabled]) + \${componentCls}-compact-item\${componentCls}-primary:not([disabled])\`]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: 'inline-block',
            width: token.lineWidth,
            height: \`calc(100% + \${token.lineWidth * 2}px)\`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      '&-compact-vertical-item': {
        [\`&\${componentCls}-primary\`]: {
          [\`&:not([disabled]) + \${componentCls}-compact-vertical-item\${componentCls}-primary:not([disabled])\`]: {
            position: 'relative',
            '&:before': {
              position: 'absolute',
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: 'inline-block',
              width: \`calc(100% + \${token.lineWidth * 2}px)\`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
  '&:not(:disabled)': {
    '&:hover': hoverStyle,
    '&:active': activeStyle
  }
});
// ============================== Shape ===============================
const genCircleButtonStyle = token => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
});
const genRoundButtonStyle = token => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
// =============================== Type ===============================
const genDisabledStyle = token => ({
  cursor: 'not-allowed',
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: 'none'
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [\`&\${btnCls}-background-ghost\`]: Object.assign(Object.assign({
    color: textColor || undefined,
    backgroundColor: 'transparent',
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle(Object.assign({
    backgroundColor: 'transparent'
  }, hoverStyle), Object.assign({
    backgroundColor: 'transparent'
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = token => ({
  '&:disabled': Object.assign({}, genDisabledStyle(token))
});
const genSolidButtonStyle = token => Object.assign({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = token => ({
  '&:disabled': {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
});
// Type: Default
const genDefaultButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorder,
  boxShadow: \`0 \${token.controlOutlineWidth}px 0 \${token.controlTmpOutline}\`
}), genHoverActiveButtonStyle({
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), {
  [\`&\${token.componentCls}-dangerous\`]: Object.assign(Object.assign(Object.assign({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
// Type: Primary
const genPrimaryButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,
  boxShadow: \`0 \${token.controlOutlineWidth}px 0 \${token.controlOutline}\`
}), genHoverActiveButtonStyle({
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [\`&\${token.componentCls}-dangerous\`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: token.colorError,
    boxShadow: \`0 \${token.controlOutlineWidth}px 0 \${token.colorErrorOutline}\`
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
// Type: Dashed
const genDashedButtonStyle = token => Object.assign(Object.assign({}, genDefaultButtonStyle(token)), {
  borderStyle: 'dashed'
});
// Type: Link
const genLinkButtonStyle = token => Object.assign(Object.assign(Object.assign({
  color: token.colorLink
}, genHoverActiveButtonStyle({
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [\`&\${token.componentCls}-dangerous\`]: Object.assign(Object.assign({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
// Type: Text
const genTextButtonStyle = token => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle({
  color: token.colorText,
  backgroundColor: token.colorBgTextHover
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [\`&\${token.componentCls}-dangerous\`]: Object.assign(Object.assign({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
// Href and Disabled
const genDisabledButtonStyle = token => Object.assign(Object.assign({}, genDisabledStyle(token)), {
  [\`&\${token.componentCls}:hover\`]: Object.assign({}, genDisabledStyle(token))
});
const genTypeButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [\`\${componentCls}-default\`]: genDefaultButtonStyle(token),
    [\`\${componentCls}-primary\`]: genPrimaryButtonStyle(token),
    [\`\${componentCls}-dashed\`]: genDashedButtonStyle(token),
    [\`\${componentCls}-link\`]: genLinkButtonStyle(token),
    [\`\${componentCls}-text\`]: genTextButtonStyle(token),
    [\`\${componentCls}-disabled\`]: genDisabledButtonStyle(token)
  };
};
// =============================== Size ===============================
const genSizeButtonStyle = function (token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = \`\${componentCls}-icon-only\`;
  return [
  // Size
  {
    [\`\${componentCls}\${sizePrefixCls}\`]: {
      fontSize,
      height: controlHeight,
      padding: \`\${paddingVertical}px \${paddingHorizontal}px\`,
      borderRadius,
      [\`&\${iconOnlyCls}\`]: {
        width: controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        [\`&\${componentCls}-round\`]: {
          width: 'auto'
        },
        '> span': {
          transform: 'scale(1.143)' // 14px -> 16px
        }
      },

      // Loading
      [\`&\${componentCls}-loading\`]: {
        opacity: token.opacityLoading,
        cursor: 'default'
      },
      [\`\${componentCls}-loading-icon\`]: {
        transition: \`width \${token.motionDurationSlow} \${token.motionEaseInOut}, opacity \${token.motionDurationSlow} \${token.motionEaseInOut}\`
      },
      [\`&:not(\${iconOnlyCls}) \${componentCls}-loading-icon > \${iconCls}\`]: {
        marginInlineEnd: token.marginXS
      }
    }
  },
  // Shape - patch prefixCls again to override solid border radius style
  {
    [\`\${componentCls}\${componentCls}-circle\${sizePrefixCls}\`]: genCircleButtonStyle(token)
  }, {
    [\`\${componentCls}\${componentCls}-round\${sizePrefixCls}\`]: genRoundButtonStyle(token)
  }];
};
const genSizeBaseButtonStyle = token => genSizeButtonStyle(token);
const genSizeSmallButtonStyle = token => {
  const smallToken = (0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, \`\${token.componentCls}-sm\`);
};
const genSizeLargeButtonStyle = token => {
  const largeToken = (0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, \`\${token.componentCls}-lg\`);
};
const genBlockButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [\`&\${componentCls}-block\`]: {
        width: '100%'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var button_style = ((0,genComponentStyleHook/* default */.Z)('Button', token => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token;
  const buttonToken = (0,statistic/* merge */.TS)(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeSmallButtonStyle(buttonToken), genSizeBaseButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Group (type, ghost, danger, disabled, loading)
  genTypeButtonStyle(buttonToken),
  // Button Group
  group(buttonToken),
  // Space Compact
  (0,compact_item/* genCompactItemStyle */.c)(token, {
    focus: false
  }), genCompactItemVerticalStyle(token)];
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button.js
var button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */













function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
const InternalButton = (props, ref) => {
  const {
      loading = false,
      prefixCls: customizePrefixCls,
      type = 'default',
      danger,
      shape = 'default',
      size: customizeSize,
      disabled: customDisabled,
      className,
      children,
      icon,
      ghost = false,
      block = false,
      // React does not recognize the \`htmlType\` prop on a DOM element. Here we pick it out of \`rest\`.
      htmlType = 'button'
    } = props,
    rest = button_rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]);
  const {
    getPrefixCls,
    autoInsertSpaceInButton,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const [wrapSSR, hashId] = button_style(prefixCls);
  const size = react.useContext(SizeContext/* default */.Z);
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = react.useContext(GroupSizeContext);
  const [innerLoading, setLoading] = react.useState(!!loading);
  const [hasTwoCNChar, setHasTwoCNChar] = react.useState(false);
  const buttonRef = ref || /*#__PURE__*/react.createRef();
  const isNeedInserted = () => react.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
  const fixTwoCNChar = () => {
    // FIXME: for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    const buttonText = buttonRef.current.textContent;
    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  };
  const loadingOrDelay = typeof loading === 'boolean' ? loading : (loading === null || loading === void 0 ? void 0 : loading.delay) || true;
  react.useEffect(() => {
    let delayTimer = null;
    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
    function cleanupTimer() {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay]);
  react.useEffect(fixTwoCNChar, [buttonRef]);
  const handleClick = e => {
    const {
      onClick
    } = props;
    // FIXME: https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
   false ? 0 : void 0;
   false ? 0 : void 0;
  const autoInsertSpace = autoInsertSpaceInButton !== false;
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  const sizeFullname = compactSize || groupSize || customizeSize || size;
  const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';
  const iconType = innerLoading ? 'loading' : icon;
  const linkButtonRestProps = (0,omit/* default */.Z)(rest, ['navigate']);
  const hrefAndDisabled = linkButtonRestProps.href !== undefined && mergedDisabled;
  const classes = classnames_default()(prefixCls, hashId, {
    [\`\${prefixCls}-\${shape}\`]: shape !== 'default' && shape,
    [\`\${prefixCls}-\${type}\`]: type,
    [\`\${prefixCls}-\${sizeCls}\`]: sizeCls,
    [\`\${prefixCls}-icon-only\`]: !children && children !== 0 && !!iconType,
    [\`\${prefixCls}-background-ghost\`]: ghost && !isUnBorderedButtonType(type),
    [\`\${prefixCls}-loading\`]: innerLoading,
    [\`\${prefixCls}-two-chinese-chars\`]: hasTwoCNChar && autoInsertSpace && !innerLoading,
    [\`\${prefixCls}-block\`]: block,
    [\`\${prefixCls}-dangerous\`]: !!danger,
    [\`\${prefixCls}-rtl\`]: direction === 'rtl',
    [\`\${prefixCls}-disabled\`]: hrefAndDisabled
  }, compactItemClassnames, className);
  const iconNode = icon && !innerLoading ? icon : /*#__PURE__*/react.createElement(button_LoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  const kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  if (linkButtonRestProps.href !== undefined) {
    return wrapSSR( /*#__PURE__*/react.createElement("a", Object.assign({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids));
  }
  let buttonNode = /*#__PURE__*/react.createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids);
  if (!isUnBorderedButtonType(type)) {
    buttonNode = /*#__PURE__*/react.createElement(wave/* default */.Z, {
      disabled: !!innerLoading
    }, buttonNode);
  }
  return wrapSSR(buttonNode);
};
const Button = /*#__PURE__*/react.forwardRef(InternalButton);
if (false) {}
Button.Group = button_group;
Button.__ANT_BUTTON = true;
/* harmony default export */ var button_button = (Button);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLHlDQUFxQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVCQUFJO0FBQ2xDO0FBQ0Esa0JBQWtCLG9CQUFVO0FBQzVCLFFBQVEsVUFBVSxHQUFHLE1BQU07QUFDM0IsUUFBUSxVQUFVLEdBQUcsS0FBSztBQUMxQixRQUFRLFVBQVUsR0FBRyxRQUFRO0FBQzdCLFFBQVEsVUFBVTtBQUNsQixRQUFRLFVBQVUsK0JBQStCLHNCQUFzQjtBQUN2RSxRQUFRLFVBQVU7QUFDbEIsUUFBUSxVQUFVO0FBQ2xCLFFBQVEsVUFBVTtBQUNsQixRQUFRLFVBQVU7QUFDbEIsUUFBUSxVQUFVO0FBQ2xCLFFBQVEsVUFBVTtBQUNsQixHQUFHO0FBQ0gsK0RBQStELG1CQUFtQixDQUFDLGtCQUFXO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0Q0FBNEMsYUFBYTtBQUN6RDtBQUNBLGlDQUFpQyxtQkFBbUIsc0JBQXNCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdDQUFnQyxtQkFBbUIsMkJBQTJCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzQkFBc0I7QUFDN0IsOEJBQThCLG1CQUFtQixDQUFDLG1CQUFJO0FBQ3REO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUMsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsZUFBZSxZQUFLO0FBQ3BCO0FBQ0Esa0RBQWUsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2J1dHRvbi9idXR0b24tZ3JvdXAuanM/ZGRjMCIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9idXR0b24vYnV0dG9uSGVscGVycy5qcz81ODczIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2J1dHRvbi9Mb2FkaW5nSWNvbi5qcz9kYzlkIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2J1dHRvbi9zdHlsZS9ncm91cC5qcz85ZWQ2Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0eWxlL2NvbXBhY3QtaXRlbS12ZXJ0aWNhbC5qcz85ZjM2Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2J1dHRvbi9zdHlsZS9pbmRleC5qcz8xODUwIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2J1dHRvbi9idXR0b24uanM/Yzc1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCB7IHVzZVRva2VuIH0gZnJvbSAnLi4vdGhlbWUvaW50ZXJuYWwnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5leHBvcnQgY29uc3QgR3JvdXBTaXplQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5jb25zdCBCdXR0b25Hcm91cCA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGdldFByZWZpeENscyxcbiAgICBkaXJlY3Rpb25cbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzLFxuICAgICAgc2l6ZSxcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0gPSBwcm9wcyxcbiAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIl0pO1xuICBjb25zdCBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2J0bi1ncm91cCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIGNvbnN0IFssLCBoYXNoSWRdID0gdXNlVG9rZW4oKTtcbiAgbGV0IHNpemVDbHMgPSAnJztcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgc2l6ZUNscyA9ICdsZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghc2l6ZSwgJ0J1dHRvbi5Hcm91cCcsICdJbnZhbGlkIHByb3AgYHNpemVgLicpIDogdm9pZCAwO1xuICB9XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHByZWZpeENscywge1xuICAgIFtgJHtwcmVmaXhDbHN9LSR7c2l6ZUNsc31gXTogc2l6ZUNscyxcbiAgICBbYCR7cHJlZml4Q2xzfS1ydGxgXTogZGlyZWN0aW9uID09PSAncnRsJ1xuICB9LCBjbGFzc05hbWUsIGhhc2hJZCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChHcm91cFNpemVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHNpemVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgb3RoZXJzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzXG4gIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uR3JvdXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgaXNGcmFnbWVudCB9IGZyb20gJy4uL191dGlsL3JlYWN0Tm9kZSc7XG5jb25zdCByeFR3b0NOQ2hhciA9IC9eW1xcdTRlMDAtXFx1OWZhNV17Mn0kLztcbmV4cG9ydCBjb25zdCBpc1R3b0NOQ2hhciA9IHJ4VHdvQ05DaGFyLnRlc3QuYmluZChyeFR3b0NOQ2hhcik7XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VuQm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUgPT09ICd0ZXh0JyB8fCB0eXBlID09PSAnbGluayc7XG59XG5mdW5jdGlvbiBzcGxpdENOQ2hhcnNCeVNwYWNlKGNoaWxkLCBuZWVkSW5zZXJ0ZWQpIHtcbiAgaWYgKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgU1BBQ0UgPSBuZWVkSW5zZXJ0ZWQgPyAnICcgOiAnJztcbiAgaWYgKHR5cGVvZiBjaGlsZCAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIGNoaWxkICE9PSAnbnVtYmVyJyAmJiBpc1N0cmluZyhjaGlsZC50eXBlKSAmJiBpc1R3b0NOQ2hhcihjaGlsZC5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBjaGlsZHJlbjogY2hpbGQucHJvcHMuY2hpbGRyZW4uc3BsaXQoJycpLmpvaW4oU1BBQ0UpXG4gICAgfSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaXNUd29DTkNoYXIoY2hpbGQpID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkLnNwbGl0KCcnKS5qb2luKFNQQUNFKSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGQpO1xuICB9XG4gIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGQpO1xuICB9XG4gIHJldHVybiBjaGlsZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzcGFjZUNoaWxkcmVuKGNoaWxkcmVuLCBuZWVkSW5zZXJ0ZWQpIHtcbiAgbGV0IGlzUHJldkNoaWxkUHVyZSA9IGZhbHNlO1xuICBjb25zdCBjaGlsZExpc3QgPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2hpbGQ7XG4gICAgY29uc3QgaXNDdXJyZW50Q2hpbGRQdXJlID0gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG4gICAgaWYgKGlzUHJldkNoaWxkUHVyZSAmJiBpc0N1cnJlbnRDaGlsZFB1cmUpIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGNoaWxkTGlzdC5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgbGFzdENoaWxkID0gY2hpbGRMaXN0W2xhc3RJbmRleF07XG4gICAgICBjaGlsZExpc3RbbGFzdEluZGV4XSA9IGAke2xhc3RDaGlsZH0ke2NoaWxkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTGlzdC5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgaXNQcmV2Q2hpbGRQdXJlID0gaXNDdXJyZW50Q2hpbGRQdXJlO1xuICB9KTtcbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZExpc3QsIGNoaWxkID0+IHNwbGl0Q05DaGFyc0J5U3BhY2UoY2hpbGQsIG5lZWRJbnNlcnRlZCkpO1xufVxuY29uc3QgQnV0dG9uVHlwZXMgPSBbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdnaG9zdCcsICdkYXNoZWQnLCAnbGluaycsICd0ZXh0J107XG5jb25zdCBCdXR0b25TaGFwZXMgPSBbJ2RlZmF1bHQnLCAnY2lyY2xlJywgJ3JvdW5kJ107XG5jb25zdCBCdXR0b25IVE1MVHlwZXMgPSBbJ3N1Ym1pdCcsICdidXR0b24nLCAncmVzZXQnXTsiLCJpbXBvcnQgTG9hZGluZ091dGxpbmVkIGZyb20gXCJAYW50LWRlc2lnbi9pY29ucy9lcy9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIjtcbmltcG9ydCBDU1NNb3Rpb24gZnJvbSAncmMtbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBnZXRDb2xsYXBzZWRXaWR0aCA9ICgpID0+ICh7XG4gIHdpZHRoOiAwLFxuICBvcGFjaXR5OiAwLFxuICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbn0pO1xuY29uc3QgZ2V0UmVhbFdpZHRoID0gbm9kZSA9PiAoe1xuICB3aWR0aDogbm9kZS5zY3JvbGxXaWR0aCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG59KTtcbmNvbnN0IExvYWRpbmdJY29uID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgcHJlZml4Q2xzLFxuICAgIGxvYWRpbmcsXG4gICAgZXhpc3RJY29uXG4gIH0gPSBfcmVmO1xuICBjb25zdCB2aXNpYmxlID0gISFsb2FkaW5nO1xuICBpZiAoZXhpc3RJY29uKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IGAke3ByZWZpeENsc30tbG9hZGluZy1pY29uYFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdPdXRsaW5lZCwgbnVsbCkpO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIHtcbiAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgIC8vIFdlIGRvIG5vdCByZWFsbHkgdXNlIHRoaXMgbW90aW9uTmFtZVxuICAgIG1vdGlvbk5hbWU6IGAke3ByZWZpeENsc30tbG9hZGluZy1pY29uLW1vdGlvbmAsXG4gICAgcmVtb3ZlT25MZWF2ZTogdHJ1ZSxcbiAgICBvbkFwcGVhclN0YXJ0OiBnZXRDb2xsYXBzZWRXaWR0aCxcbiAgICBvbkFwcGVhckFjdGl2ZTogZ2V0UmVhbFdpZHRoLFxuICAgIG9uRW50ZXJTdGFydDogZ2V0Q29sbGFwc2VkV2lkdGgsXG4gICAgb25FbnRlckFjdGl2ZTogZ2V0UmVhbFdpZHRoLFxuICAgIG9uTGVhdmVTdGFydDogZ2V0UmVhbFdpZHRoLFxuICAgIG9uTGVhdmVBY3RpdmU6IGdldENvbGxhcHNlZFdpZHRoXG4gIH0sIChfcmVmMiwgcmVmKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlXG4gICAgfSA9IF9yZWYyO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWxvYWRpbmctaWNvbmAsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICByZWY6IHJlZlxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdPdXRsaW5lZCwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdJY29uOyIsImNvbnN0IGdlbkJ1dHRvbkJvcmRlclN0eWxlID0gKGJ1dHRvblR5cGVDbHMsIGJvcmRlckNvbG9yKSA9PiAoe1xuICAvLyBCb3JkZXJcbiAgW2A+IHNwYW4sID4gJHtidXR0b25UeXBlQ2xzfWBdOiB7XG4gICAgJyY6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgIFtgJiwgJiA+ICR7YnV0dG9uVHlwZUNsc31gXToge1xuICAgICAgICAnJjpub3QoOmRpc2FibGVkKSc6IHtcbiAgICAgICAgICBib3JkZXJJbmxpbmVFbmRDb2xvcjogYm9yZGVyQ29sb3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJyY6bm90KDpmaXJzdC1jaGlsZCknOiB7XG4gICAgICBbYCYsICYgPiAke2J1dHRvblR5cGVDbHN9YF06IHtcbiAgICAgICAgJyY6bm90KDpkaXNhYmxlZCknOiB7XG4gICAgICAgICAgYm9yZGVySW5saW5lU3RhcnRDb2xvcjogYm9yZGVyQ29sb3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5jb25zdCBnZW5Hcm91cFN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGZvbnRTaXplLFxuICAgIGxpbmVXaWR0aCxcbiAgICBjb2xvclByaW1hcnlIb3ZlcixcbiAgICBjb2xvckVycm9ySG92ZXJcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtgJHtjb21wb25lbnRDbHN9LWdyb3VwYF06IFt7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAvLyBCb3JkZXJcbiAgICAgIFtgPiBzcGFuLCA+ICR7Y29tcG9uZW50Q2xzfWBdOiB7XG4gICAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgICAgW2AmLCAmID4gJHtjb21wb25lbnRDbHN9YF06IHtcbiAgICAgICAgICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzOiAwLFxuICAgICAgICAgICAgYm9yZGVyRW5kRW5kUmFkaXVzOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJjpub3QoOmZpcnN0LWNoaWxkKSc6IHtcbiAgICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogLWxpbmVXaWR0aCxcbiAgICAgICAgICBbYCYsICYgPiAke2NvbXBvbmVudENsc31gXToge1xuICAgICAgICAgICAgYm9yZGVyU3RhcnRTdGFydFJhZGl1czogMCxcbiAgICAgICAgICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2NvbXBvbmVudENsc106IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgW2AmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgJjphY3RpdmVgXToge1xuICAgICAgICAgIHpJbmRleDogMlxuICAgICAgICB9LFxuICAgICAgICAnJltkaXNhYmxlZF0nOiB7XG4gICAgICAgICAgekluZGV4OiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1pY29uLW9ubHlgXToge1xuICAgICAgICBmb250U2l6ZVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gQm9yZGVyIENvbG9yXG4gICAgZ2VuQnV0dG9uQm9yZGVyU3R5bGUoYCR7Y29tcG9uZW50Q2xzfS1wcmltYXJ5YCwgY29sb3JQcmltYXJ5SG92ZXIpLCBnZW5CdXR0b25Cb3JkZXJTdHlsZShgJHtjb21wb25lbnRDbHN9LWRhbmdlcmAsIGNvbG9yRXJyb3JIb3ZlcildXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuR3JvdXBTdHlsZTsiLCJmdW5jdGlvbiBjb21wYWN0SXRlbVZlcnRpY2FsQm9yZGVyKHRva2VuLCBwYXJlbnRDbHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBib3JkZXIgY29sbGFwc2VcbiAgICBbYCYtaXRlbTpub3QoJHtwYXJlbnRDbHN9LWxhc3QtaXRlbSlgXToge1xuICAgICAgbWFyZ2luQm90dG9tOiAtdG9rZW4ubGluZVdpZHRoXG4gICAgfSxcbiAgICAnJi1pdGVtJzoge1xuICAgICAgJyY6aG92ZXIsJjpmb2N1cywmOmFjdGl2ZSc6IHtcbiAgICAgICAgekluZGV4OiAyXG4gICAgICB9LFxuICAgICAgJyZbZGlzYWJsZWRdJzoge1xuICAgICAgICB6SW5kZXg6IDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjb21wYWN0SXRlbUJvcmRlclZlcnRpY2FsUmFkaXVzKHByZWZpeENscywgcGFyZW50Q2xzKSB7XG4gIHJldHVybiB7XG4gICAgW2AmLWl0ZW06bm90KCR7cGFyZW50Q2xzfS1maXJzdC1pdGVtKTpub3QoJHtwYXJlbnRDbHN9LWxhc3QtaXRlbSlgXToge1xuICAgICAgYm9yZGVyUmFkaXVzOiAwXG4gICAgfSxcbiAgICBbYCYtaXRlbSR7cGFyZW50Q2xzfS1maXJzdC1pdGVtOm5vdCgke3BhcmVudENsc30tbGFzdC1pdGVtKWBdOiB7XG4gICAgICBbYCYsICYke3ByZWZpeENsc30tc20sICYke3ByZWZpeENsc30tbGdgXToge1xuICAgICAgICBib3JkZXJFbmRFbmRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSxcbiAgICBbYCYtaXRlbSR7cGFyZW50Q2xzfS1sYXN0LWl0ZW06bm90KCR7cGFyZW50Q2xzfS1maXJzdC1pdGVtKWBdOiB7XG4gICAgICBbYCYsICYke3ByZWZpeENsc30tc20sICYke3ByZWZpeENsc30tbGdgXToge1xuICAgICAgICBib3JkZXJTdGFydFN0YXJ0UmFkaXVzOiAwLFxuICAgICAgICBib3JkZXJTdGFydEVuZFJhZGl1czogMFxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZW5Db21wYWN0SXRlbVZlcnRpY2FsU3R5bGUodG9rZW4pIHtcbiAgY29uc3QgY29tcGFjdENscyA9IGAke3Rva2VuLmNvbXBvbmVudENsc30tY29tcGFjdC12ZXJ0aWNhbGA7XG4gIHJldHVybiB7XG4gICAgW2NvbXBhY3RDbHNdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBhY3RJdGVtVmVydGljYWxCb3JkZXIodG9rZW4sIGNvbXBhY3RDbHMpKSwgY29tcGFjdEl0ZW1Cb3JkZXJWZXJ0aWNhbFJhZGl1cyh0b2tlbi5jb21wb25lbnRDbHMsIGNvbXBhY3RDbHMpKVxuICB9O1xufSIsImltcG9ydCB7IGdlbkNvbXBvbmVudFN0eWxlSG9vaywgbWVyZ2VUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lL2ludGVybmFsJztcbmltcG9ydCBnZW5Hcm91cFN0eWxlIGZyb20gJy4vZ3JvdXAnO1xuaW1wb3J0IHsgZ2VuRm9jdXNTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlJztcbmltcG9ydCB7IGdlbkNvbXBhY3RJdGVtU3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZS9jb21wYWN0LWl0ZW0nO1xuaW1wb3J0IHsgZ2VuQ29tcGFjdEl0ZW1WZXJ0aWNhbFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGUvY29tcGFjdC1pdGVtLXZlcnRpY2FsJztcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGFyZWQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBnZW5TaGFyZWRCdXR0b25TdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBpY29uQ2xzXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbY29tcG9uZW50Q2xzXToge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyOiBgJHt0b2tlbi5saW5lV2lkdGh9cHggJHt0b2tlbi5saW5lVHlwZX0gdHJhbnNwYXJlbnRgLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25NaWR9ICR7dG9rZW4ubW90aW9uRWFzZUluT3V0fWAsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB0b3VjaEFjdGlvbjogJ21hbmlwdWxhdGlvbicsXG4gICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0LFxuICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dCxcbiAgICAgICc+IHNwYW4nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICB9LFxuICAgICAgLy8gTGVhdmUgYSBzcGFjZSBiZXR3ZWVuIGljb24gYW5kIHRleHQuXG4gICAgICBbYD4gJHtpY29uQ2xzfSArIHNwYW4sID4gc3BhbiArICR7aWNvbkNsc31gXToge1xuICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogdG9rZW4ubWFyZ2luWFNcbiAgICAgIH0sXG4gICAgICAnPiBhJzoge1xuICAgICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH0sXG4gICAgICAnJjpub3QoOmRpc2FibGVkKSc6IE9iamVjdC5hc3NpZ24oe30sIGdlbkZvY3VzU3R5bGUodG9rZW4pKSxcbiAgICAgIC8vIG1ha2UgYGJ0bi1pY29uLW9ubHlgIG5vdCB0b28gbmFycm93XG4gICAgICBbYCYtaWNvbi1vbmx5JHtjb21wb25lbnRDbHN9LWNvbXBhY3QtaXRlbWBdOiB7XG4gICAgICAgIGZsZXg6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIC8vIFNwZWNpYWwgc3R5bGVzIGZvciBQcmltYXJ5IEJ1dHRvblxuICAgICAgW2AmLWNvbXBhY3QtaXRlbSR7Y29tcG9uZW50Q2xzfS1wcmltYXJ5YF06IHtcbiAgICAgICAgW2AmOm5vdChbZGlzYWJsZWRdKSArICR7Y29tcG9uZW50Q2xzfS1jb21wYWN0LWl0ZW0ke2NvbXBvbmVudENsc30tcHJpbWFyeTpub3QoW2Rpc2FibGVkXSlgXToge1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAtdG9rZW4ubGluZVdpZHRoLFxuICAgICAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogLXRva2VuLmxpbmVXaWR0aCxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgd2lkdGg6IHRva2VuLmxpbmVXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSArICR7dG9rZW4ubGluZVdpZHRoICogMn1weClgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlIb3ZlcixcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIFNwZWNpYWwgc3R5bGVzIGZvciBQcmltYXJ5IEJ1dHRvblxuICAgICAgJyYtY29tcGFjdC12ZXJ0aWNhbC1pdGVtJzoge1xuICAgICAgICBbYCYke2NvbXBvbmVudENsc30tcHJpbWFyeWBdOiB7XG4gICAgICAgICAgW2AmOm5vdChbZGlzYWJsZWRdKSArICR7Y29tcG9uZW50Q2xzfS1jb21wYWN0LXZlcnRpY2FsLWl0ZW0ke2NvbXBvbmVudENsc30tcHJpbWFyeTpub3QoW2Rpc2FibGVkXSlgXToge1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0b3A6IC10b2tlbi5saW5lV2lkdGgsXG4gICAgICAgICAgICAgIGluc2V0SW5saW5lU3RhcnQ6IC10b2tlbi5saW5lV2lkdGgsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7dG9rZW4ubGluZVdpZHRoICogMn1weClgLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHRva2VuLmxpbmVXaWR0aCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlIb3ZlcixcbiAgICAgICAgICAgICAgY29udGVudDogJ1wiXCInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGdlbkhvdmVyQWN0aXZlQnV0dG9uU3R5bGUgPSAoaG92ZXJTdHlsZSwgYWN0aXZlU3R5bGUpID0+ICh7XG4gICcmOm5vdCg6ZGlzYWJsZWQpJzoge1xuICAgICcmOmhvdmVyJzogaG92ZXJTdHlsZSxcbiAgICAnJjphY3RpdmUnOiBhY3RpdmVTdHlsZVxuICB9XG59KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaGFwZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBnZW5DaXJjbGVCdXR0b25TdHlsZSA9IHRva2VuID0+ICh7XG4gIG1pbldpZHRoOiB0b2tlbi5jb250cm9sSGVpZ2h0LFxuICBwYWRkaW5nSW5saW5lU3RhcnQ6IDAsXG4gIHBhZGRpbmdJbmxpbmVFbmQ6IDAsXG4gIGJvcmRlclJhZGl1czogJzUwJSdcbn0pO1xuY29uc3QgZ2VuUm91bmRCdXR0b25TdHlsZSA9IHRva2VuID0+ICh7XG4gIGJvcmRlclJhZGl1czogdG9rZW4uY29udHJvbEhlaWdodCxcbiAgcGFkZGluZ0lubGluZVN0YXJ0OiB0b2tlbi5jb250cm9sSGVpZ2h0IC8gMixcbiAgcGFkZGluZ0lubGluZUVuZDogdG9rZW4uY29udHJvbEhlaWdodCAvIDJcbn0pO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBUeXBlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGdlbkRpc2FibGVkU3R5bGUgPSB0b2tlbiA9PiAoe1xuICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gIGJvcmRlckNvbG9yOiB0b2tlbi5jb2xvckJvcmRlcixcbiAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERpc2FibGVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXJEaXNhYmxlZCxcbiAgYm94U2hhZG93OiAnbm9uZSdcbn0pO1xuY29uc3QgZ2VuR2hvc3RCdXR0b25TdHlsZSA9IChidG5DbHMsIHRleHRDb2xvciwgYm9yZGVyQ29sb3IsIHRleHRDb2xvckRpc2FibGVkLCBib3JkZXJDb2xvckRpc2FibGVkLCBob3ZlclN0eWxlLCBhY3RpdmVTdHlsZSkgPT4gKHtcbiAgW2AmJHtidG5DbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICBjb2xvcjogdGV4dENvbG9yIHx8IHVuZGVmaW5lZCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yIHx8IHVuZGVmaW5lZCxcbiAgICBib3hTaGFkb3c6ICdub25lJ1xuICB9LCBnZW5Ib3ZlckFjdGl2ZUJ1dHRvblN0eWxlKE9iamVjdC5hc3NpZ24oe1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICB9LCBob3ZlclN0eWxlKSwgT2JqZWN0LmFzc2lnbih7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gIH0sIGFjdGl2ZVN0eWxlKSkpLCB7XG4gICAgJyY6ZGlzYWJsZWQnOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICBjb2xvcjogdGV4dENvbG9yRGlzYWJsZWQgfHwgdW5kZWZpbmVkLFxuICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yRGlzYWJsZWQgfHwgdW5kZWZpbmVkXG4gICAgfVxuICB9KVxufSk7XG5jb25zdCBnZW5Tb2xpZERpc2FibGVkQnV0dG9uU3R5bGUgPSB0b2tlbiA9PiAoe1xuICAnJjpkaXNhYmxlZCc6IE9iamVjdC5hc3NpZ24oe30sIGdlbkRpc2FibGVkU3R5bGUodG9rZW4pKVxufSk7XG5jb25zdCBnZW5Tb2xpZEJ1dHRvblN0eWxlID0gdG9rZW4gPT4gT2JqZWN0LmFzc2lnbih7fSwgZ2VuU29saWREaXNhYmxlZEJ1dHRvblN0eWxlKHRva2VuKSk7XG5jb25zdCBnZW5QdXJlRGlzYWJsZWRCdXR0b25TdHlsZSA9IHRva2VuID0+ICh7XG4gICcmOmRpc2FibGVkJzoge1xuICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICBjb2xvcjogdG9rZW4uY29sb3JUZXh0RGlzYWJsZWRcbiAgfVxufSk7XG4vLyBUeXBlOiBEZWZhdWx0XG5jb25zdCBnZW5EZWZhdWx0QnV0dG9uU3R5bGUgPSB0b2tlbiA9PiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdlblNvbGlkQnV0dG9uU3R5bGUodG9rZW4pKSwge1xuICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXIsXG4gIGJvcmRlckNvbG9yOiB0b2tlbi5jb2xvckJvcmRlcixcbiAgYm94U2hhZG93OiBgMCAke3Rva2VuLmNvbnRyb2xPdXRsaW5lV2lkdGh9cHggMCAke3Rva2VuLmNvbnRyb2xUbXBPdXRsaW5lfWBcbn0pLCBnZW5Ib3ZlckFjdGl2ZUJ1dHRvblN0eWxlKHtcbiAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUhvdmVyLFxuICBib3JkZXJDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5SG92ZXJcbn0sIHtcbiAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUFjdGl2ZSxcbiAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUFjdGl2ZVxufSkpLCBnZW5HaG9zdEJ1dHRvblN0eWxlKHRva2VuLmNvbXBvbmVudENscywgdG9rZW4uY29sb3JCZ0NvbnRhaW5lciwgdG9rZW4uY29sb3JCZ0NvbnRhaW5lciwgdG9rZW4uY29sb3JUZXh0RGlzYWJsZWQsIHRva2VuLmNvbG9yQm9yZGVyKSksIHtcbiAgW2AmJHt0b2tlbi5jb21wb25lbnRDbHN9LWRhbmdlcm91c2BdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3IsXG4gICAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yRXJyb3JcbiAgfSwgZ2VuSG92ZXJBY3RpdmVCdXR0b25TdHlsZSh7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JIb3ZlcixcbiAgICBib3JkZXJDb2xvcjogdG9rZW4uY29sb3JFcnJvckJvcmRlckhvdmVyXG4gIH0sIHtcbiAgICBjb2xvcjogdG9rZW4uY29sb3JFcnJvckFjdGl2ZSxcbiAgICBib3JkZXJDb2xvcjogdG9rZW4uY29sb3JFcnJvckFjdGl2ZVxuICB9KSksIGdlbkdob3N0QnV0dG9uU3R5bGUodG9rZW4uY29tcG9uZW50Q2xzLCB0b2tlbi5jb2xvckVycm9yLCB0b2tlbi5jb2xvckVycm9yLCB0b2tlbi5jb2xvclRleHREaXNhYmxlZCwgdG9rZW4uY29sb3JCb3JkZXIpKSwgZ2VuU29saWREaXNhYmxlZEJ1dHRvblN0eWxlKHRva2VuKSlcbn0pO1xuLy8gVHlwZTogUHJpbWFyeVxuY29uc3QgZ2VuUHJpbWFyeUJ1dHRvblN0eWxlID0gdG9rZW4gPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZW5Tb2xpZEJ1dHRvblN0eWxlKHRva2VuKSksIHtcbiAgY29sb3I6IHRva2VuLmNvbG9yVGV4dExpZ2h0U29saWQsXG4gIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5LFxuICBib3hTaGFkb3c6IGAwICR7dG9rZW4uY29udHJvbE91dGxpbmVXaWR0aH1weCAwICR7dG9rZW4uY29udHJvbE91dGxpbmV9YFxufSksIGdlbkhvdmVyQWN0aXZlQnV0dG9uU3R5bGUoe1xuICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHRTb2xpZCxcbiAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlIb3ZlclxufSwge1xuICBjb2xvcjogdG9rZW4uY29sb3JUZXh0TGlnaHRTb2xpZCxcbiAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlBY3RpdmVcbn0pKSwgZ2VuR2hvc3RCdXR0b25TdHlsZSh0b2tlbi5jb21wb25lbnRDbHMsIHRva2VuLmNvbG9yUHJpbWFyeSwgdG9rZW4uY29sb3JQcmltYXJ5LCB0b2tlbi5jb2xvclRleHREaXNhYmxlZCwgdG9rZW4uY29sb3JCb3JkZXIsIHtcbiAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUhvdmVyLFxuICBib3JkZXJDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5SG92ZXJcbn0sIHtcbiAgY29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUFjdGl2ZSxcbiAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUFjdGl2ZVxufSkpLCB7XG4gIFtgJiR7dG9rZW4uY29tcG9uZW50Q2xzfS1kYW5nZXJvdXNgXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JFcnJvcixcbiAgICBib3hTaGFkb3c6IGAwICR7dG9rZW4uY29udHJvbE91dGxpbmVXaWR0aH1weCAwICR7dG9rZW4uY29sb3JFcnJvck91dGxpbmV9YFxuICB9LCBnZW5Ib3ZlckFjdGl2ZUJ1dHRvblN0eWxlKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yRXJyb3JIb3ZlclxuICB9LCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckVycm9yQWN0aXZlXG4gIH0pKSwgZ2VuR2hvc3RCdXR0b25TdHlsZSh0b2tlbi5jb21wb25lbnRDbHMsIHRva2VuLmNvbG9yRXJyb3IsIHRva2VuLmNvbG9yRXJyb3IsIHRva2VuLmNvbG9yVGV4dERpc2FibGVkLCB0b2tlbi5jb2xvckJvcmRlciwge1xuICAgIGNvbG9yOiB0b2tlbi5jb2xvckVycm9ySG92ZXIsXG4gICAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yRXJyb3JIb3ZlclxuICB9LCB7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JBY3RpdmUsXG4gICAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yRXJyb3JBY3RpdmVcbiAgfSkpLCBnZW5Tb2xpZERpc2FibGVkQnV0dG9uU3R5bGUodG9rZW4pKVxufSk7XG4vLyBUeXBlOiBEYXNoZWRcbmNvbnN0IGdlbkRhc2hlZEJ1dHRvblN0eWxlID0gdG9rZW4gPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZW5EZWZhdWx0QnV0dG9uU3R5bGUodG9rZW4pKSwge1xuICBib3JkZXJTdHlsZTogJ2Rhc2hlZCdcbn0pO1xuLy8gVHlwZTogTGlua1xuY29uc3QgZ2VuTGlua0J1dHRvblN0eWxlID0gdG9rZW4gPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICBjb2xvcjogdG9rZW4uY29sb3JMaW5rXG59LCBnZW5Ib3ZlckFjdGl2ZUJ1dHRvblN0eWxlKHtcbiAgY29sb3I6IHRva2VuLmNvbG9yTGlua0hvdmVyXG59LCB7XG4gIGNvbG9yOiB0b2tlbi5jb2xvckxpbmtBY3RpdmVcbn0pKSwgZ2VuUHVyZURpc2FibGVkQnV0dG9uU3R5bGUodG9rZW4pKSwge1xuICBbYCYke3Rva2VuLmNvbXBvbmVudENsc30tZGFuZ2Vyb3VzYF06IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JcbiAgfSwgZ2VuSG92ZXJBY3RpdmVCdXR0b25TdHlsZSh7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JIb3ZlclxuICB9LCB7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JBY3RpdmVcbiAgfSkpLCBnZW5QdXJlRGlzYWJsZWRCdXR0b25TdHlsZSh0b2tlbikpXG59KTtcbi8vIFR5cGU6IFRleHRcbmNvbnN0IGdlblRleHRCdXR0b25TdHlsZSA9IHRva2VuID0+IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZW5Ib3ZlckFjdGl2ZUJ1dHRvblN0eWxlKHtcbiAgY29sb3I6IHRva2VuLmNvbG9yVGV4dCxcbiAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvckJnVGV4dEhvdmVyXG59LCB7XG4gIGNvbG9yOiB0b2tlbi5jb2xvclRleHQsXG4gIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JCZ1RleHRBY3RpdmVcbn0pKSwgZ2VuUHVyZURpc2FibGVkQnV0dG9uU3R5bGUodG9rZW4pKSwge1xuICBbYCYke3Rva2VuLmNvbXBvbmVudENsc30tZGFuZ2Vyb3VzYF06IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JcbiAgfSwgZ2VuUHVyZURpc2FibGVkQnV0dG9uU3R5bGUodG9rZW4pKSwgZ2VuSG92ZXJBY3RpdmVCdXR0b25TdHlsZSh7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JIb3ZlcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yRXJyb3JCZ1xuICB9LCB7XG4gICAgY29sb3I6IHRva2VuLmNvbG9yRXJyb3JIb3ZlcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yRXJyb3JCZ1xuICB9KSlcbn0pO1xuLy8gSHJlZiBhbmQgRGlzYWJsZWRcbmNvbnN0IGdlbkRpc2FibGVkQnV0dG9uU3R5bGUgPSB0b2tlbiA9PiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdlbkRpc2FibGVkU3R5bGUodG9rZW4pKSwge1xuICBbYCYke3Rva2VuLmNvbXBvbmVudENsc306aG92ZXJgXTogT2JqZWN0LmFzc2lnbih7fSwgZ2VuRGlzYWJsZWRTdHlsZSh0b2tlbikpXG59KTtcbmNvbnN0IGdlblR5cGVCdXR0b25TdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENsc1xuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW2Ake2NvbXBvbmVudENsc30tZGVmYXVsdGBdOiBnZW5EZWZhdWx0QnV0dG9uU3R5bGUodG9rZW4pLFxuICAgIFtgJHtjb21wb25lbnRDbHN9LXByaW1hcnlgXTogZ2VuUHJpbWFyeUJ1dHRvblN0eWxlKHRva2VuKSxcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS1kYXNoZWRgXTogZ2VuRGFzaGVkQnV0dG9uU3R5bGUodG9rZW4pLFxuICAgIFtgJHtjb21wb25lbnRDbHN9LWxpbmtgXTogZ2VuTGlua0J1dHRvblN0eWxlKHRva2VuKSxcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS10ZXh0YF06IGdlblRleHRCdXR0b25TdHlsZSh0b2tlbiksXG4gICAgW2Ake2NvbXBvbmVudENsc30tZGlzYWJsZWRgXTogZ2VuRGlzYWJsZWRCdXR0b25TdHlsZSh0b2tlbilcbiAgfTtcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNpemUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgZ2VuU2l6ZUJ1dHRvblN0eWxlID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIGxldCBzaXplUHJlZml4Q2xzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBpY29uQ2xzLFxuICAgIGNvbnRyb2xIZWlnaHQsXG4gICAgZm9udFNpemUsXG4gICAgbGluZUhlaWdodCxcbiAgICBsaW5lV2lkdGgsXG4gICAgYm9yZGVyUmFkaXVzLFxuICAgIGJ1dHRvblBhZGRpbmdIb3Jpem9udGFsXG4gIH0gPSB0b2tlbjtcbiAgY29uc3QgcGFkZGluZ1ZlcnRpY2FsID0gTWF0aC5tYXgoMCwgKGNvbnRyb2xIZWlnaHQgLSBmb250U2l6ZSAqIGxpbmVIZWlnaHQpIC8gMiAtIGxpbmVXaWR0aCk7XG4gIGNvbnN0IHBhZGRpbmdIb3Jpem9udGFsID0gYnV0dG9uUGFkZGluZ0hvcml6b250YWwgLSBsaW5lV2lkdGg7XG4gIGNvbnN0IGljb25Pbmx5Q2xzID0gYCR7Y29tcG9uZW50Q2xzfS1pY29uLW9ubHlgO1xuICByZXR1cm4gW1xuICAvLyBTaXplXG4gIHtcbiAgICBbYCR7Y29tcG9uZW50Q2xzfSR7c2l6ZVByZWZpeENsc31gXToge1xuICAgICAgZm9udFNpemUsXG4gICAgICBoZWlnaHQ6IGNvbnRyb2xIZWlnaHQsXG4gICAgICBwYWRkaW5nOiBgJHtwYWRkaW5nVmVydGljYWx9cHggJHtwYWRkaW5nSG9yaXpvbnRhbH1weGAsXG4gICAgICBib3JkZXJSYWRpdXMsXG4gICAgICBbYCYke2ljb25Pbmx5Q2xzfWBdOiB7XG4gICAgICAgIHdpZHRoOiBjb250cm9sSGVpZ2h0LFxuICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IDAsXG4gICAgICAgIHBhZGRpbmdJbmxpbmVFbmQ6IDAsXG4gICAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1yb3VuZGBdOiB7XG4gICAgICAgICAgd2lkdGg6ICdhdXRvJ1xuICAgICAgICB9LFxuICAgICAgICAnPiBzcGFuJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMTQzKScgLy8gMTRweCAtPiAxNnB4XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIExvYWRpbmdcbiAgICAgIFtgJiR7Y29tcG9uZW50Q2xzfS1sb2FkaW5nYF06IHtcbiAgICAgICAgb3BhY2l0eTogdG9rZW4ub3BhY2l0eUxvYWRpbmcsXG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30tbG9hZGluZy1pY29uYF06IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYHdpZHRoICR7dG9rZW4ubW90aW9uRHVyYXRpb25TbG93fSAke3Rva2VuLm1vdGlvbkVhc2VJbk91dH0sIG9wYWNpdHkgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9ICR7dG9rZW4ubW90aW9uRWFzZUluT3V0fWBcbiAgICAgIH0sXG4gICAgICBbYCY6bm90KCR7aWNvbk9ubHlDbHN9KSAke2NvbXBvbmVudENsc30tbG9hZGluZy1pY29uID4gJHtpY29uQ2xzfWBdOiB7XG4gICAgICAgIG1hcmdpbklubGluZUVuZDogdG9rZW4ubWFyZ2luWFNcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vIFNoYXBlIC0gcGF0Y2ggcHJlZml4Q2xzIGFnYWluIHRvIG92ZXJyaWRlIHNvbGlkIGJvcmRlciByYWRpdXMgc3R5bGVcbiAge1xuICAgIFtgJHtjb21wb25lbnRDbHN9JHtjb21wb25lbnRDbHN9LWNpcmNsZSR7c2l6ZVByZWZpeENsc31gXTogZ2VuQ2lyY2xlQnV0dG9uU3R5bGUodG9rZW4pXG4gIH0sIHtcbiAgICBbYCR7Y29tcG9uZW50Q2xzfSR7Y29tcG9uZW50Q2xzfS1yb3VuZCR7c2l6ZVByZWZpeENsc31gXTogZ2VuUm91bmRCdXR0b25TdHlsZSh0b2tlbilcbiAgfV07XG59O1xuY29uc3QgZ2VuU2l6ZUJhc2VCdXR0b25TdHlsZSA9IHRva2VuID0+IGdlblNpemVCdXR0b25TdHlsZSh0b2tlbik7XG5jb25zdCBnZW5TaXplU21hbGxCdXR0b25TdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qgc21hbGxUb2tlbiA9IG1lcmdlVG9rZW4odG9rZW4sIHtcbiAgICBjb250cm9sSGVpZ2h0OiB0b2tlbi5jb250cm9sSGVpZ2h0U00sXG4gICAgcGFkZGluZzogdG9rZW4ucGFkZGluZ1hTLFxuICAgIGJ1dHRvblBhZGRpbmdIb3Jpem9udGFsOiA4LFxuICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzU01cbiAgfSk7XG4gIHJldHVybiBnZW5TaXplQnV0dG9uU3R5bGUoc21hbGxUb2tlbiwgYCR7dG9rZW4uY29tcG9uZW50Q2xzfS1zbWApO1xufTtcbmNvbnN0IGdlblNpemVMYXJnZUJ1dHRvblN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCBsYXJnZVRva2VuID0gbWVyZ2VUb2tlbih0b2tlbiwge1xuICAgIGNvbnRyb2xIZWlnaHQ6IHRva2VuLmNvbnRyb2xIZWlnaHRMRyxcbiAgICBmb250U2l6ZTogdG9rZW4uZm9udFNpemVMRyxcbiAgICBib3JkZXJSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1c0xHXG4gIH0pO1xuICByZXR1cm4gZ2VuU2l6ZUJ1dHRvblN0eWxlKGxhcmdlVG9rZW4sIGAke3Rva2VuLmNvbXBvbmVudENsc30tbGdgKTtcbn07XG5jb25zdCBnZW5CbG9ja0J1dHRvblN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbY29tcG9uZW50Q2xzXToge1xuICAgICAgW2AmJHtjb21wb25lbnRDbHN9LWJsb2NrYF06IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRXhwb3J0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgZ2VuQ29tcG9uZW50U3R5bGVIb29rKCdCdXR0b24nLCB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sVG1wT3V0bGluZSxcbiAgICBwYWRkaW5nQ29udGVudEhvcml6b250YWxcbiAgfSA9IHRva2VuO1xuICBjb25zdCBidXR0b25Ub2tlbiA9IG1lcmdlVG9rZW4odG9rZW4sIHtcbiAgICBjb2xvck91dGxpbmVEZWZhdWx0OiBjb250cm9sVG1wT3V0bGluZSxcbiAgICBidXR0b25QYWRkaW5nSG9yaXpvbnRhbDogcGFkZGluZ0NvbnRlbnRIb3Jpem9udGFsXG4gIH0pO1xuICByZXR1cm4gW1xuICAvLyBTaGFyZWRcbiAgZ2VuU2hhcmVkQnV0dG9uU3R5bGUoYnV0dG9uVG9rZW4pLFxuICAvLyBTaXplXG4gIGdlblNpemVTbWFsbEJ1dHRvblN0eWxlKGJ1dHRvblRva2VuKSwgZ2VuU2l6ZUJhc2VCdXR0b25TdHlsZShidXR0b25Ub2tlbiksIGdlblNpemVMYXJnZUJ1dHRvblN0eWxlKGJ1dHRvblRva2VuKSxcbiAgLy8gQmxvY2tcbiAgZ2VuQmxvY2tCdXR0b25TdHlsZShidXR0b25Ub2tlbiksXG4gIC8vIEdyb3VwICh0eXBlLCBnaG9zdCwgZGFuZ2VyLCBkaXNhYmxlZCwgbG9hZGluZylcbiAgZ2VuVHlwZUJ1dHRvblN0eWxlKGJ1dHRvblRva2VuKSxcbiAgLy8gQnV0dG9uIEdyb3VwXG4gIGdlbkdyb3VwU3R5bGUoYnV0dG9uVG9rZW4pLFxuICAvLyBTcGFjZSBDb21wYWN0XG4gIGdlbkNvbXBhY3RJdGVtU3R5bGUodG9rZW4sIHtcbiAgICBmb2N1czogZmFsc2VcbiAgfSksIGdlbkNvbXBhY3RJdGVtVmVydGljYWxTdHlsZSh0b2tlbildO1xufSk7IiwidmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2J1dHRvbi1oYXMtdHlwZSAqL1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgb21pdCBmcm9tIFwicmMtdXRpbC9lcy9vbWl0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCBXYXZlIGZyb20gJy4uL191dGlsL3dhdmUnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgRGlzYWJsZWRDb250ZXh0IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlci9EaXNhYmxlZENvbnRleHQnO1xuaW1wb3J0IFNpemVDb250ZXh0IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VDb21wYWN0SXRlbUNvbnRleHQgfSBmcm9tICcuLi9zcGFjZS9Db21wYWN0JztcbmltcG9ydCBHcm91cCwgeyBHcm91cFNpemVDb250ZXh0IH0gZnJvbSAnLi9idXR0b24tZ3JvdXAnO1xuaW1wb3J0IHsgaXNUd29DTkNoYXIsIGlzVW5Cb3JkZXJlZEJ1dHRvblR5cGUsIHNwYWNlQ2hpbGRyZW4gfSBmcm9tICcuL2J1dHRvbkhlbHBlcnMnO1xuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gJy4vTG9hZGluZ0ljb24nO1xuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQcm9wcyh0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnZGFuZ2VyJykge1xuICAgIHJldHVybiB7XG4gICAgICBkYW5nZXI6IHRydWVcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZVxuICB9O1xufVxuY29uc3QgSW50ZXJuYWxCdXR0b24gPSAocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgICBsb2FkaW5nID0gZmFsc2UsXG4gICAgICBwcmVmaXhDbHM6IGN1c3RvbWl6ZVByZWZpeENscyxcbiAgICAgIHR5cGUgPSAnZGVmYXVsdCcsXG4gICAgICBkYW5nZXIsXG4gICAgICBzaGFwZSA9ICdkZWZhdWx0JyxcbiAgICAgIHNpemU6IGN1c3RvbWl6ZVNpemUsXG4gICAgICBkaXNhYmxlZDogY3VzdG9tRGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGljb24sXG4gICAgICBnaG9zdCA9IGZhbHNlLFxuICAgICAgYmxvY2sgPSBmYWxzZSxcbiAgICAgIC8vIFJlYWN0IGRvZXMgbm90IHJlY29nbml6ZSB0aGUgYGh0bWxUeXBlYCBwcm9wIG9uIGEgRE9NIGVsZW1lbnQuIEhlcmUgd2UgcGljayBpdCBvdXQgb2YgYHJlc3RgLlxuICAgICAgaHRtbFR5cGUgPSAnYnV0dG9uJ1xuICAgIH0gPSBwcm9wcyxcbiAgICByZXN0ID0gX19yZXN0KHByb3BzLCBbXCJsb2FkaW5nXCIsIFwicHJlZml4Q2xzXCIsIFwidHlwZVwiLCBcImRhbmdlclwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcImRpc2FibGVkXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJpY29uXCIsIFwiZ2hvc3RcIiwgXCJibG9ja1wiLCBcImh0bWxUeXBlXCJdKTtcbiAgY29uc3Qge1xuICAgIGdldFByZWZpeENscyxcbiAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICBkaXJlY3Rpb25cbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnYnRuJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgY29uc3QgW3dyYXBTU1IsIGhhc2hJZF0gPSB1c2VTdHlsZShwcmVmaXhDbHMpO1xuICBjb25zdCBzaXplID0gUmVhY3QudXNlQ29udGV4dChTaXplQ29udGV4dCk7XG4gIGNvbnN0IGRpc2FibGVkID0gUmVhY3QudXNlQ29udGV4dChEaXNhYmxlZENvbnRleHQpO1xuICBjb25zdCBtZXJnZWREaXNhYmxlZCA9IGN1c3RvbURpc2FibGVkICE9PSBudWxsICYmIGN1c3RvbURpc2FibGVkICE9PSB2b2lkIDAgPyBjdXN0b21EaXNhYmxlZCA6IGRpc2FibGVkO1xuICBjb25zdCBncm91cFNpemUgPSBSZWFjdC51c2VDb250ZXh0KEdyb3VwU2l6ZUNvbnRleHQpO1xuICBjb25zdCBbaW5uZXJMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKCEhbG9hZGluZyk7XG4gIGNvbnN0IFtoYXNUd29DTkNoYXIsIHNldEhhc1R3b0NOQ2hhcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGJ1dHRvblJlZiA9IHJlZiB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IGlzTmVlZEluc2VydGVkID0gKCkgPT4gUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAxICYmICFpY29uICYmICFpc1VuQm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpO1xuICBjb25zdCBmaXhUd29DTkNoYXIgPSAoKSA9PiB7XG4gICAgLy8gRklYTUU6IGZvciBIT0MgdXNhZ2UgbGlrZSA8Rm9ybWF0TWVzc2FnZSAvPlxuICAgIGlmICghYnV0dG9uUmVmIHx8ICFidXR0b25SZWYuY3VycmVudCB8fCBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGJ1dHRvblJlZi5jdXJyZW50LnRleHRDb250ZW50O1xuICAgIGlmIChpc05lZWRJbnNlcnRlZCgpICYmIGlzVHdvQ05DaGFyKGJ1dHRvblRleHQpKSB7XG4gICAgICBpZiAoIWhhc1R3b0NOQ2hhcikge1xuICAgICAgICBzZXRIYXNUd29DTkNoYXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNUd29DTkNoYXIpIHtcbiAgICAgIHNldEhhc1R3b0NOQ2hhcihmYWxzZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBsb2FkaW5nT3JEZWxheSA9IHR5cGVvZiBsb2FkaW5nID09PSAnYm9vbGVhbicgPyBsb2FkaW5nIDogKGxvYWRpbmcgPT09IG51bGwgfHwgbG9hZGluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9hZGluZy5kZWxheSkgfHwgdHJ1ZTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZGVsYXlUaW1lciA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBsb2FkaW5nT3JEZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRlbGF5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlbGF5VGltZXIgPSBudWxsO1xuICAgICAgICBzZXRMb2FkaW5nKGxvYWRpbmdPckRlbGF5KTtcbiAgICAgIH0sIGxvYWRpbmdPckRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TG9hZGluZyhsb2FkaW5nT3JEZWxheSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFudXBUaW1lcigpIHtcbiAgICAgIGlmIChkZWxheVRpbWVyKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZGVsYXlUaW1lcik7XG4gICAgICAgIGRlbGF5VGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xlYW51cFRpbWVyO1xuICB9LCBbbG9hZGluZ09yRGVsYXldKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZpeFR3b0NOQ2hhciwgW2J1dHRvblJlZl0pO1xuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2xpY2tcbiAgICB9ID0gcHJvcHM7XG4gICAgLy8gRklYTUU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzMwMjA3XG4gICAgaWYgKGlubmVyTG9hZGluZyB8fCBtZXJnZWREaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkNsaWNrID09PSBudWxsIHx8IG9uQ2xpY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2xpY2soZSk7XG4gIH07XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycgJiYgaWNvbi5sZW5ndGggPiAyKSwgJ0J1dHRvbicsIGBcXGBpY29uXFxgIGlzIHVzaW5nIFJlYWN0Tm9kZSBpbnN0ZWFkIG9mIHN0cmluZyBuYW1pbmcgaW4gdjQuIFBsZWFzZSBjaGVjayBcXGAke2ljb259XFxgIGF0IGh0dHBzOi8vYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb25gKSA6IHZvaWQgMDtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKGdob3N0ICYmIGlzVW5Cb3JkZXJlZEJ1dHRvblR5cGUodHlwZSkpLCAnQnV0dG9uJywgXCJgbGlua2Agb3IgYHRleHRgIGJ1dHRvbiBjYW4ndCBiZSBhIGBnaG9zdGAgYnV0dG9uLlwiKSA6IHZvaWQgMDtcbiAgY29uc3QgYXV0b0luc2VydFNwYWNlID0gYXV0b0luc2VydFNwYWNlSW5CdXR0b24gIT09IGZhbHNlO1xuICBjb25zdCB7XG4gICAgY29tcGFjdFNpemUsXG4gICAgY29tcGFjdEl0ZW1DbGFzc25hbWVzXG4gIH0gPSB1c2VDb21wYWN0SXRlbUNvbnRleHQocHJlZml4Q2xzLCBkaXJlY3Rpb24pO1xuICBjb25zdCBzaXplQ2xhc3NOYW1lTWFwID0ge1xuICAgIGxhcmdlOiAnbGcnLFxuICAgIHNtYWxsOiAnc20nLFxuICAgIG1pZGRsZTogdW5kZWZpbmVkXG4gIH07XG4gIGNvbnN0IHNpemVGdWxsbmFtZSA9IGNvbXBhY3RTaXplIHx8IGdyb3VwU2l6ZSB8fCBjdXN0b21pemVTaXplIHx8IHNpemU7XG4gIGNvbnN0IHNpemVDbHMgPSBzaXplRnVsbG5hbWUgPyBzaXplQ2xhc3NOYW1lTWFwW3NpemVGdWxsbmFtZV0gfHwgJycgOiAnJztcbiAgY29uc3QgaWNvblR5cGUgPSBpbm5lckxvYWRpbmcgPyAnbG9hZGluZycgOiBpY29uO1xuICBjb25zdCBsaW5rQnV0dG9uUmVzdFByb3BzID0gb21pdChyZXN0LCBbJ25hdmlnYXRlJ10pO1xuICBjb25zdCBocmVmQW5kRGlzYWJsZWQgPSBsaW5rQnV0dG9uUmVzdFByb3BzLmhyZWYgIT09IHVuZGVmaW5lZCAmJiBtZXJnZWREaXNhYmxlZDtcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBoYXNoSWQsIHtcbiAgICBbYCR7cHJlZml4Q2xzfS0ke3NoYXBlfWBdOiBzaGFwZSAhPT0gJ2RlZmF1bHQnICYmIHNoYXBlLFxuICAgIFtgJHtwcmVmaXhDbHN9LSR7dHlwZX1gXTogdHlwZSxcbiAgICBbYCR7cHJlZml4Q2xzfS0ke3NpemVDbHN9YF06IHNpemVDbHMsXG4gICAgW2Ake3ByZWZpeENsc30taWNvbi1vbmx5YF06ICFjaGlsZHJlbiAmJiBjaGlsZHJlbiAhPT0gMCAmJiAhIWljb25UeXBlLFxuICAgIFtgJHtwcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogZ2hvc3QgJiYgIWlzVW5Cb3JkZXJlZEJ1dHRvblR5cGUodHlwZSksXG4gICAgW2Ake3ByZWZpeENsc30tbG9hZGluZ2BdOiBpbm5lckxvYWRpbmcsXG4gICAgW2Ake3ByZWZpeENsc30tdHdvLWNoaW5lc2UtY2hhcnNgXTogaGFzVHdvQ05DaGFyICYmIGF1dG9JbnNlcnRTcGFjZSAmJiAhaW5uZXJMb2FkaW5nLFxuICAgIFtgJHtwcmVmaXhDbHN9LWJsb2NrYF06IGJsb2NrLFxuICAgIFtgJHtwcmVmaXhDbHN9LWRhbmdlcm91c2BdOiAhIWRhbmdlcixcbiAgICBbYCR7cHJlZml4Q2xzfS1ydGxgXTogZGlyZWN0aW9uID09PSAncnRsJyxcbiAgICBbYCR7cHJlZml4Q2xzfS1kaXNhYmxlZGBdOiBocmVmQW5kRGlzYWJsZWRcbiAgfSwgY29tcGFjdEl0ZW1DbGFzc25hbWVzLCBjbGFzc05hbWUpO1xuICBjb25zdCBpY29uTm9kZSA9IGljb24gJiYgIWlubmVyTG9hZGluZyA/IGljb24gOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nSWNvbiwge1xuICAgIGV4aXN0SWNvbjogISFpY29uLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGxvYWRpbmc6ICEhaW5uZXJMb2FkaW5nXG4gIH0pO1xuICBjb25zdCBraWRzID0gY2hpbGRyZW4gfHwgY2hpbGRyZW4gPT09IDAgPyBzcGFjZUNoaWxkcmVuKGNoaWxkcmVuLCBpc05lZWRJbnNlcnRlZCgpICYmIGF1dG9JbnNlcnRTcGFjZSkgOiBudWxsO1xuICBpZiAobGlua0J1dHRvblJlc3RQcm9wcy5ocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gd3JhcFNTUiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe30sIGxpbmtCdXR0b25SZXN0UHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiBidXR0b25SZWZcbiAgICB9KSwgaWNvbk5vZGUsIGtpZHMpKTtcbiAgfVxuICBsZXQgYnV0dG9uTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oe30sIHJlc3QsIHtcbiAgICB0eXBlOiBodG1sVHlwZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgZGlzYWJsZWQ6IG1lcmdlZERpc2FibGVkLFxuICAgIHJlZjogYnV0dG9uUmVmXG4gIH0pLCBpY29uTm9kZSwga2lkcyk7XG4gIGlmICghaXNVbkJvcmRlcmVkQnV0dG9uVHlwZSh0eXBlKSkge1xuICAgIGJ1dHRvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXYXZlLCB7XG4gICAgICBkaXNhYmxlZDogISFpbm5lckxvYWRpbmdcbiAgICB9LCBidXR0b25Ob2RlKTtcbiAgfVxuICByZXR1cm4gd3JhcFNTUihidXR0b25Ob2RlKTtcbn07XG5jb25zdCBCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihJbnRlcm5hbEJ1dHRvbik7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBCdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcbn1cbkJ1dHRvbi5Hcm91cCA9IEdyb3VwO1xuQnV0dG9uLl9fQU5UX0JVVFRPTiA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///87149
`)},71577:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87149);


/* harmony default export */ __webpack_exports__["ZP"] = (_button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzE1NzcuanMiLCJtYXBwaW5ncyI6IjtBQUE4QjtBQUNFO0FBQ2hDLDBEQUFlLHdEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvYnV0dG9uL2luZGV4LmpzPzAxYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2J1dHRvbkhlbHBlcnMnO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///71577
`)},98866:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ DisabledContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);

const DisabledContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const DisabledContextProvider = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DisabledContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
/* harmony default export */ __webpack_exports__["Z"] = (DisabledContext);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTg4NjYuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQjtBQUMvQixxQ0FBcUMsZ0RBQW1CO0FBQ2pEO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHlCQUF5Qiw2Q0FBZ0I7QUFDekMsc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBLHlEQUFlLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jb25maWctcHJvdmlkZXIvRGlzYWJsZWRDb250ZXh0LmpzPzY0NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgRGlzYWJsZWRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoZmFsc2UpO1xuZXhwb3J0IGNvbnN0IERpc2FibGVkQ29udGV4dFByb3ZpZGVyID0gX3JlZiA9PiB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZGlzYWJsZWRcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IG9yaWdpbkRpc2FibGVkID0gUmVhY3QudXNlQ29udGV4dChEaXNhYmxlZENvbnRleHQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGlzYWJsZWRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGRpc2FibGVkICE9PSBudWxsICYmIGRpc2FibGVkICE9PSB2b2lkIDAgPyBkaXNhYmxlZCA6IG9yaWdpbkRpc2FibGVkXG4gIH0sIGNoaWxkcmVuKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEaXNhYmxlZENvbnRleHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///98866
`)},97647:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ SizeContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);

const SizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const SizeContextProvider = _ref => {
  let {
    children,
    size
  } = _ref;
  const originSize = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SizeContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
/* harmony default export */ __webpack_exports__["Z"] = (SizeContext);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTc2NDcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUErQjtBQUMvQixpQ0FBaUMsZ0RBQW1CO0FBQzdDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHFCQUFxQiw2Q0FBZ0I7QUFDckMsc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBLHlEQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHQuanM/YzNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBTaXplQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5leHBvcnQgY29uc3QgU2l6ZUNvbnRleHRQcm92aWRlciA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIHNpemVcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IG9yaWdpblNpemUgPSBSZWFjdC51c2VDb250ZXh0KFNpemVDb250ZXh0KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHNpemUgfHwgb3JpZ2luU2l6ZVxuICB9LCBjaGlsZHJlbik7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2l6ZUNvbnRleHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///97647
`)},4173:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BR": function() { return /* binding */ NoCompactStyle; },
/* harmony export */   "ri": function() { return /* binding */ useCompactItemContext; }
/* harmony export */ });
/* unused harmony export SpaceCompactItemContext */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50344);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62435);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53124);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51916);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const SpaceCompactItemContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(SpaceCompactItemContext);
  const compactItemClassnames = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    if (!compactItemContext) return '';
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      [\`\${prefixCls}-compact\${separator}item\`]: true,
      [\`\${prefixCls}-compact\${separator}first-item\`]: isFirstItem,
      [\`\${prefixCls}-compact\${separator}last-item\`]: isLastItem,
      [\`\${prefixCls}-compact\${separator}item-rtl\`]: direction === 'rtl'
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
const NoCompactStyle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
const CompactItem = _a => {
  var {
      children
    } = _a,
    otherProps = __rest(_a, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
const Compact = props => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_3__/* .ConfigContext */ .E_);
  const {
      size = 'middle',
      direction,
      block,
      prefixCls: customizePrefixCls,
      className,
      children
    } = props,
    restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "children"]);
  const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
  const [wrapSSR, hashId] = (0,_style__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(prefixCls);
  const clx = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, hashId, {
    [\`\${prefixCls}-rtl\`]: directionConfig === 'rtl',
    [\`\${prefixCls}-block\`]: block,
    [\`\${prefixCls}-vertical\`]: direction === 'vertical'
  }, className);
  const compactItemContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(SpaceCompactItemContext);
  const childNodes = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(children);
  const nodes = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => childNodes.map((child, i) => {
    const key = child && child.key || \`\${prefixCls}-item-\${i}\`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CompactItem, {
      key: key,
      compactSize: size,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
/* harmony default export */ __webpack_exports__["ZP"] = (Compact);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDE3My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGFBQWEsU0FBSSxJQUFJLFNBQUk7QUFDekI7QUFDQTtBQUNBLDRIQUE0SCxjQUFjO0FBQzFJO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ2M7QUFDbkI7QUFDb0I7QUFDcEI7QUFDeEIsNkNBQTZDLGdEQUFtQjtBQUNoRTtBQUNQLDZCQUE2Qiw2Q0FBZ0I7QUFDN0MsZ0NBQWdDLDBDQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxXQUFXLGlEQUFVO0FBQ3JCLFVBQVUsVUFBVSxVQUFVLFVBQVU7QUFDeEMsVUFBVSxVQUFVLFVBQVUsVUFBVTtBQUN4QyxVQUFVLFVBQVUsVUFBVSxVQUFVO0FBQ3hDLFVBQVUsVUFBVSxVQUFVLFVBQVU7QUFDeEMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0osc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksRUFBRSw2Q0FBZ0IsQ0FBQyxxRUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNEJBQTRCLDJEQUFRO0FBQ3BDLGNBQWMsaURBQVU7QUFDeEIsUUFBUSxVQUFVO0FBQ2xCLFFBQVEsVUFBVTtBQUNsQixRQUFRLFVBQVU7QUFDbEIsR0FBRztBQUNILDZCQUE2Qiw2Q0FBZ0I7QUFDN0MscUJBQXFCLGdGQUFPO0FBQzVCLGdCQUFnQiwwQ0FBYTtBQUM3Qix5Q0FBeUMsVUFBVSxRQUFRLEVBQUU7QUFDN0Qsd0JBQXdCLGdEQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnREFBbUI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQSwwREFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3BhY2UvQ29tcGFjdC5qcz83OWRmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUnO1xuZXhwb3J0IGNvbnN0IFNwYWNlQ29tcGFjdEl0ZW1Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgY29uc3QgdXNlQ29tcGFjdEl0ZW1Db250ZXh0ID0gKHByZWZpeENscywgZGlyZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNvbXBhY3RJdGVtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoU3BhY2VDb21wYWN0SXRlbUNvbnRleHQpO1xuICBjb25zdCBjb21wYWN0SXRlbUNsYXNzbmFtZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWNvbXBhY3RJdGVtQ29udGV4dCkgcmV0dXJuICcnO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbXBhY3REaXJlY3Rpb24sXG4gICAgICBpc0ZpcnN0SXRlbSxcbiAgICAgIGlzTGFzdEl0ZW1cbiAgICB9ID0gY29tcGFjdEl0ZW1Db250ZXh0O1xuICAgIGNvbnN0IHNlcGFyYXRvciA9IGNvbXBhY3REaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgPyAnLXZlcnRpY2FsLScgOiAnLSc7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMoe1xuICAgICAgW2Ake3ByZWZpeENsc30tY29tcGFjdCR7c2VwYXJhdG9yfWl0ZW1gXTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWNvbXBhY3Qke3NlcGFyYXRvcn1maXJzdC1pdGVtYF06IGlzRmlyc3RJdGVtLFxuICAgICAgW2Ake3ByZWZpeENsc30tY29tcGFjdCR7c2VwYXJhdG9yfWxhc3QtaXRlbWBdOiBpc0xhc3RJdGVtLFxuICAgICAgW2Ake3ByZWZpeENsc30tY29tcGFjdCR7c2VwYXJhdG9yfWl0ZW0tcnRsYF06IGRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICB9KTtcbiAgfSwgW3ByZWZpeENscywgZGlyZWN0aW9uLCBjb21wYWN0SXRlbUNvbnRleHRdKTtcbiAgcmV0dXJuIHtcbiAgICBjb21wYWN0U2l6ZTogY29tcGFjdEl0ZW1Db250ZXh0ID09PSBudWxsIHx8IGNvbXBhY3RJdGVtQ29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcGFjdEl0ZW1Db250ZXh0LmNvbXBhY3RTaXplLFxuICAgIGNvbXBhY3REaXJlY3Rpb246IGNvbXBhY3RJdGVtQ29udGV4dCA9PT0gbnVsbCB8fCBjb21wYWN0SXRlbUNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBhY3RJdGVtQ29udGV4dC5jb21wYWN0RGlyZWN0aW9uLFxuICAgIGNvbXBhY3RJdGVtQ2xhc3NuYW1lc1xuICB9O1xufTtcbmV4cG9ydCBjb25zdCBOb0NvbXBhY3RTdHlsZSA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3BhY2VDb21wYWN0SXRlbUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbnVsbFxuICB9LCBjaGlsZHJlbik7XG59O1xuY29uc3QgQ29tcGFjdEl0ZW0gPSBfYSA9PiB7XG4gIHZhciB7XG4gICAgICBjaGlsZHJlblxuICAgIH0gPSBfYSxcbiAgICBvdGhlclByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZUNvbXBhY3RJdGVtQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBvdGhlclByb3BzXG4gIH0sIGNoaWxkcmVuKTtcbn07XG5jb25zdCBDb21wYWN0ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgZ2V0UHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uQ29uZmlnXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICBjb25zdCB7XG4gICAgICBzaXplID0gJ21pZGRsZScsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBibG9jayxcbiAgICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gcHJvcHMsXG4gICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJzaXplXCIsIFwiZGlyZWN0aW9uXCIsIFwiYmxvY2tcIiwgXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiXSk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnc3BhY2UtY29tcGFjdCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIGNvbnN0IFt3cmFwU1NSLCBoYXNoSWRdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3QgY2x4ID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGhhc2hJZCwge1xuICAgIFtgJHtwcmVmaXhDbHN9LXJ0bGBdOiBkaXJlY3Rpb25Db25maWcgPT09ICdydGwnLFxuICAgIFtgJHtwcmVmaXhDbHN9LWJsb2NrYF06IGJsb2NrLFxuICAgIFtgJHtwcmVmaXhDbHN9LXZlcnRpY2FsYF06IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJ1xuICB9LCBjbGFzc05hbWUpO1xuICBjb25zdCBjb21wYWN0SXRlbUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNwYWNlQ29tcGFjdEl0ZW1Db250ZXh0KTtcbiAgY29uc3QgY2hpbGROb2RlcyA9IHRvQXJyYXkoY2hpbGRyZW4pO1xuICBjb25zdCBub2RlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gY2hpbGROb2Rlcy5tYXAoKGNoaWxkLCBpKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gY2hpbGQgJiYgY2hpbGQua2V5IHx8IGAke3ByZWZpeENsc30taXRlbS0ke2l9YDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcGFjdEl0ZW0sIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29tcGFjdFNpemU6IHNpemUsXG4gICAgICBjb21wYWN0RGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBpc0ZpcnN0SXRlbTogaSA9PT0gMCAmJiAoIWNvbXBhY3RJdGVtQ29udGV4dCB8fCAoY29tcGFjdEl0ZW1Db250ZXh0ID09PSBudWxsIHx8IGNvbXBhY3RJdGVtQ29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcGFjdEl0ZW1Db250ZXh0LmlzRmlyc3RJdGVtKSksXG4gICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZE5vZGVzLmxlbmd0aCAtIDEgJiYgKCFjb21wYWN0SXRlbUNvbnRleHQgfHwgKGNvbXBhY3RJdGVtQ29udGV4dCA9PT0gbnVsbCB8fCBjb21wYWN0SXRlbUNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBhY3RJdGVtQ29udGV4dC5pc0xhc3RJdGVtKSlcbiAgICB9LCBjaGlsZCk7XG4gIH0pLCBbc2l6ZSwgY2hpbGROb2RlcywgY29tcGFjdEl0ZW1Db250ZXh0XSk7XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB3cmFwU1NSKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBjbGFzc05hbWU6IGNseFxuICB9LCByZXN0UHJvcHMpLCBub2RlcykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbXBhY3Q7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///4173
`)},51916:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ style; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/compact.js
const genSpaceCompactStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-block': {
        display: 'flex',
        width: '100%'
      },
      '&-vertical': {
        flexDirection: 'column'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var compact = (genSpaceCompactStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/style/index.js


const genSpaceStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center'
        },
        '&-start': {
          alignItems: 'flex-start'
        },
        '&-end': {
          alignItems: 'flex-end'
        },
        '&-baseline': {
          alignItems: 'baseline'
        }
      },
      [\`\${componentCls}-space-item\`]: {
        '&:empty': {
          display: 'none'
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var style = ((0,genComponentStyleHook/* default */.Z)('Space', token => [genSpaceStyle(token), compact(token)]));//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTE5MTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUFlLG9CQUFvQixFOztBQ2xCMEI7QUFDaEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQWUsd0NBQXFCLDBDQUEwQyxPQUFvQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3BhY2Uvc3R5bGUvY29tcGFjdC5qcz9kZGZmIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NwYWNlL3N0eWxlL2luZGV4LmpzP2Y4ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2VuU3BhY2VDb21wYWN0U3R5bGUgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHNcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtjb21wb25lbnRDbHNdOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgJyYtYmxvY2snOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgICcmLXZlcnRpY2FsJzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRXhwb3J0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgZ2VuU3BhY2VDb21wYWN0U3R5bGU7IiwiaW1wb3J0IHsgZ2VuQ29tcG9uZW50U3R5bGVIb29rIH0gZnJvbSAnLi4vLi4vdGhlbWUvaW50ZXJuYWwnO1xuaW1wb3J0IGdlblNwYWNlQ29tcGFjdFN0eWxlIGZyb20gJy4vY29tcGFjdCc7XG5jb25zdCBnZW5TcGFjZVN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbY29tcG9uZW50Q2xzXToge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICcmLXJ0bCc6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAncnRsJ1xuICAgICAgfSxcbiAgICAgICcmLXZlcnRpY2FsJzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgfSxcbiAgICAgICcmLWFsaWduJzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgJyYtY2VudGVyJzoge1xuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgICcmLXN0YXJ0Jzoge1xuICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0J1xuICAgICAgICB9LFxuICAgICAgICAnJi1lbmQnOiB7XG4gICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJ1xuICAgICAgICB9LFxuICAgICAgICAnJi1iYXNlbGluZSc6IHtcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1zcGFjZS1pdGVtYF06IHtcbiAgICAgICAgJyY6ZW1wdHknOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEV4cG9ydCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBkZWZhdWx0IGdlbkNvbXBvbmVudFN0eWxlSG9vaygnU3BhY2UnLCB0b2tlbiA9PiBbZ2VuU3BhY2VTdHlsZSh0b2tlbiksIGdlblNwYWNlQ29tcGFjdFN0eWxlKHRva2VuKV0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///51916
`)},80110:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ genCompactItemStyle; }
/* harmony export */ });
// handle border collapse
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? '> *' : '';
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(n => \`&:\${n} \${childCombinator}\`).join(',');
  return {
    [\`&-item:not(\${parentCls}-last-item)\`]: {
      marginInlineEnd: -token.lineWidth
    },
    '&-item': Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [\`&\${focusElCls}\`]: {
        zIndex: 2
      }
    } : {}), {
      [\`&[disabled] \${childCombinator}\`]: {
        zIndex: 0
      }
    })
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? \`> \${borderElCls}\` : '';
  return {
    [\`&-item:not(\${parentCls}-first-item):not(\${parentCls}-last-item) \${childCombinator}\`]: {
      borderRadius: 0
    },
    [\`&-item:not(\${parentCls}-last-item)\${parentCls}-first-item\`]: {
      [\`& \${childCombinator}, &\${prefixCls}-sm \${childCombinator}, &\${prefixCls}-lg \${childCombinator}\`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [\`&-item:not(\${parentCls}-first-item)\${parentCls}-last-item\`]: {
      [\`& \${childCombinator}, &\${prefixCls}-sm \${childCombinator}, &\${prefixCls}-lg \${childCombinator}\`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = \`\${componentCls}-compact\`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAxMTAuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsaUdBQWlHLEdBQUcsRUFBRSxnQkFBZ0I7QUFDdEg7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBLE1BQU0sSUFBSTtBQUNWLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osNkNBQTZDLFlBQVk7QUFDekQ7QUFDQSxtQkFBbUIsVUFBVSxtQkFBbUIsVUFBVSxjQUFjLGdCQUFnQjtBQUN4RjtBQUNBLEtBQUs7QUFDTCxtQkFBbUIsVUFBVSxhQUFhLFVBQVU7QUFDcEQsWUFBWSxnQkFBZ0IsS0FBSyxVQUFVLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxNQUFNLGdCQUFnQjtBQUN0RztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUJBQW1CLFVBQVUsY0FBYyxVQUFVO0FBQ3JELFlBQVksZ0JBQWdCLEtBQUssVUFBVSxNQUFNLGdCQUFnQixLQUFLLFVBQVUsTUFBTSxnQkFBZ0I7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdHlsZS9jb21wYWN0LWl0ZW0uanM/YjEyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoYW5kbGUgYm9yZGVyIGNvbGxhcHNlXG5mdW5jdGlvbiBjb21wYWN0SXRlbUJvcmRlcih0b2tlbiwgcGFyZW50Q2xzLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBmb2N1c0VsQ2xzLFxuICAgIGZvY3VzLFxuICAgIGJvcmRlckVsQ2xzXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBjaGlsZENvbWJpbmF0b3IgPSBib3JkZXJFbENscyA/ICc+IConIDogJyc7XG4gIGNvbnN0IGhvdmVyRWZmZWN0cyA9IFsnaG92ZXInLCBmb2N1cyA/ICdmb2N1cycgOiBudWxsLCAnYWN0aXZlJ10uZmlsdGVyKEJvb2xlYW4pLm1hcChuID0+IGAmOiR7bn0gJHtjaGlsZENvbWJpbmF0b3J9YCkuam9pbignLCcpO1xuICByZXR1cm4ge1xuICAgIFtgJi1pdGVtOm5vdCgke3BhcmVudENsc30tbGFzdC1pdGVtKWBdOiB7XG4gICAgICBtYXJnaW5JbmxpbmVFbmQ6IC10b2tlbi5saW5lV2lkdGhcbiAgICB9LFxuICAgICcmLWl0ZW0nOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgW2hvdmVyRWZmZWN0c106IHtcbiAgICAgICAgekluZGV4OiAyXG4gICAgICB9XG4gICAgfSwgZm9jdXNFbENscyA/IHtcbiAgICAgIFtgJiR7Zm9jdXNFbENsc31gXToge1xuICAgICAgICB6SW5kZXg6IDJcbiAgICAgIH1cbiAgICB9IDoge30pLCB7XG4gICAgICBbYCZbZGlzYWJsZWRdICR7Y2hpbGRDb21iaW5hdG9yfWBdOiB7XG4gICAgICAgIHpJbmRleDogMFxuICAgICAgfVxuICAgIH0pXG4gIH07XG59XG4vLyBoYW5kbGUgYm9yZGVyLXJhZGl1c1xuZnVuY3Rpb24gY29tcGFjdEl0ZW1Cb3JkZXJSYWRpdXMocHJlZml4Q2xzLCBwYXJlbnRDbHMsIG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGJvcmRlckVsQ2xzXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBjaGlsZENvbWJpbmF0b3IgPSBib3JkZXJFbENscyA/IGA+ICR7Ym9yZGVyRWxDbHN9YCA6ICcnO1xuICByZXR1cm4ge1xuICAgIFtgJi1pdGVtOm5vdCgke3BhcmVudENsc30tZmlyc3QtaXRlbSk6bm90KCR7cGFyZW50Q2xzfS1sYXN0LWl0ZW0pICR7Y2hpbGRDb21iaW5hdG9yfWBdOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IDBcbiAgICB9LFxuICAgIFtgJi1pdGVtOm5vdCgke3BhcmVudENsc30tbGFzdC1pdGVtKSR7cGFyZW50Q2xzfS1maXJzdC1pdGVtYF06IHtcbiAgICAgIFtgJiAke2NoaWxkQ29tYmluYXRvcn0sICYke3ByZWZpeENsc30tc20gJHtjaGlsZENvbWJpbmF0b3J9LCAmJHtwcmVmaXhDbHN9LWxnICR7Y2hpbGRDb21iaW5hdG9yfWBdOiB7XG4gICAgICAgIGJvcmRlclN0YXJ0RW5kUmFkaXVzOiAwLFxuICAgICAgICBib3JkZXJFbmRFbmRSYWRpdXM6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJi1pdGVtOm5vdCgke3BhcmVudENsc30tZmlyc3QtaXRlbSkke3BhcmVudENsc30tbGFzdC1pdGVtYF06IHtcbiAgICAgIFtgJiAke2NoaWxkQ29tYmluYXRvcn0sICYke3ByZWZpeENsc30tc20gJHtjaGlsZENvbWJpbmF0b3J9LCAmJHtwcmVmaXhDbHN9LWxnICR7Y2hpbGRDb21iaW5hdG9yfWBdOiB7XG4gICAgICAgIGJvcmRlclN0YXJ0U3RhcnRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckVuZFN0YXJ0UmFkaXVzOiAwXG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbkNvbXBhY3RJdGVtU3R5bGUodG9rZW4pIHtcbiAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICBmb2N1czogdHJ1ZVxuICB9O1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzXG4gIH0gPSB0b2tlbjtcbiAgY29uc3QgY29tcGFjdENscyA9IGAke2NvbXBvbmVudENsc30tY29tcGFjdGA7XG4gIHJldHVybiB7XG4gICAgW2NvbXBhY3RDbHNdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBhY3RJdGVtQm9yZGVyKHRva2VuLCBjb21wYWN0Q2xzLCBvcHRpb25zKSksIGNvbXBhY3RJdGVtQm9yZGVyUmFkaXVzKGNvbXBvbmVudENscywgY29tcGFjdENscywgb3B0aW9ucykpXG4gIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///80110
`)},38135:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`var react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ render; },
/* harmony export */   "v": function() { return /* binding */ unmount; }
/* harmony export */ });
/* unused harmony exports _r, _u */
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74165);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71002);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61254);





// Let compiler not to search module usage
var fullClone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, /*#__PURE__*/ (react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_0__, 2))));
var version = fullClone.version,
  reactRender = fullClone.render,
  unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  var mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e) {
  // Do nothing;
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = '__rc_react_root__';
function modernRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}
function legacyRender(node, container) {
  reactRender(node, container);
}
/** @private Test usage. Not work in prod */
function _r(node, container) {
  if (false) {}
}
function render(node, container) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender(node, container);
}
// ========================= Unmount ==========================
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().mark(function _callee(container) {
    return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Promise.resolve().then(function () {
              var _container$MARK;
              (_container$MARK = container[MARK]) === null || _container$MARK === void 0 ? void 0 : _container$MARK.unmount();
              delete container[MARK];
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
/** @private Test usage. Not work in prod */
function _u(container) {
  if (false) {}
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().mark(function _callee2(container) {
    return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(createRoot !== undefined)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", modernUnmount(container));
          case 2:
            legacyUnmount(container);
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgxMzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDSjtBQUNwQjtBQUNhO0FBQy9CO0FBQ3RDO0FBQ0EsZ0JBQWdCLDZGQUFhLEdBQUcsRUFBRSxxTUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsc0ZBQU87QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxNQUFNLEtBQXFDLEVBQUUsRUFFMUM7QUFDSDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnR0FBaUIsZUFBZSxrR0FBbUI7QUFDdEUsV0FBVyxrR0FBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxNQUFNLEtBQXFDLEVBQUUsRUFFMUM7QUFDSDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnR0FBaUIsZUFBZSxrR0FBbUI7QUFDaEUsV0FBVyxrR0FBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvUmVhY3QvcmVuZGVyLmpzPzkxYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlZ2VuZXJhdG9yUnVudGltZVwiO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yXCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIExldCBjb21waWxlciBub3QgdG8gc2VhcmNoIG1vZHVsZSB1c2FnZVxudmFyIGZ1bGxDbG9uZSA9IF9vYmplY3RTcHJlYWQoe30sIFJlYWN0RE9NKTtcbnZhciB2ZXJzaW9uID0gZnVsbENsb25lLnZlcnNpb24sXG4gIHJlYWN0UmVuZGVyID0gZnVsbENsb25lLnJlbmRlcixcbiAgdW5tb3VudENvbXBvbmVudEF0Tm9kZSA9IGZ1bGxDbG9uZS51bm1vdW50Q29tcG9uZW50QXROb2RlO1xudmFyIGNyZWF0ZVJvb3Q7XG50cnkge1xuICB2YXIgbWFpblZlcnNpb24gPSBOdW1iZXIoKHZlcnNpb24gfHwgJycpLnNwbGl0KCcuJylbMF0pO1xuICBpZiAobWFpblZlcnNpb24gPj0gMTgpIHtcbiAgICBjcmVhdGVSb290ID0gZnVsbENsb25lLmNyZWF0ZVJvb3Q7XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgLy8gRG8gbm90aGluZztcbn1cbmZ1bmN0aW9uIHRvZ2dsZVdhcm5pbmcoc2tpcCkge1xuICB2YXIgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBmdWxsQ2xvbmUuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGlmIChfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCAmJiBfdHlwZW9mKF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEKSA9PT0gJ29iamVjdCcpIHtcbiAgICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRC51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBza2lwO1xuICB9XG59XG52YXIgTUFSSyA9ICdfX3JjX3JlYWN0X3Jvb3RfXyc7XG5mdW5jdGlvbiBtb2Rlcm5SZW5kZXIobm9kZSwgY29udGFpbmVyKSB7XG4gIHRvZ2dsZVdhcm5pbmcodHJ1ZSk7XG4gIHZhciByb290ID0gY29udGFpbmVyW01BUktdIHx8IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbiAgdG9nZ2xlV2FybmluZyhmYWxzZSk7XG4gIHJvb3QucmVuZGVyKG5vZGUpO1xuICBjb250YWluZXJbTUFSS10gPSByb290O1xufVxuZnVuY3Rpb24gbGVnYWN5UmVuZGVyKG5vZGUsIGNvbnRhaW5lcikge1xuICByZWFjdFJlbmRlcihub2RlLCBjb250YWluZXIpO1xufVxuLyoqIEBwcml2YXRlIFRlc3QgdXNhZ2UuIE5vdCB3b3JrIGluIHByb2QgKi9cbmV4cG9ydCBmdW5jdGlvbiBfcihub2RlLCBjb250YWluZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbGVnYWN5UmVuZGVyKG5vZGUsIGNvbnRhaW5lcik7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIobm9kZSwgY29udGFpbmVyKSB7XG4gIGlmIChjcmVhdGVSb290KSB7XG4gICAgbW9kZXJuUmVuZGVyKG5vZGUsIGNvbnRhaW5lcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxlZ2FjeVJlbmRlcihub2RlLCBjb250YWluZXIpO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBVbm1vdW50ID09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBtb2Rlcm5Vbm1vdW50KF94KSB7XG4gIHJldHVybiBfbW9kZXJuVW5tb3VudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX21vZGVyblVubW91bnQoKSB7XG4gIF9tb2Rlcm5Vbm1vdW50ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBfY29udGFpbmVyJE1BUks7XG4gICAgICAgICAgICAgIChfY29udGFpbmVyJE1BUksgPSBjb250YWluZXJbTUFSS10pID09PSBudWxsIHx8IF9jb250YWluZXIkTUFSSyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NvbnRhaW5lciRNQVJLLnVubW91bnQoKTtcbiAgICAgICAgICAgICAgZGVsZXRlIGNvbnRhaW5lcltNQVJLXTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBfbW9kZXJuVW5tb3VudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gbGVnYWN5VW5tb3VudChjb250YWluZXIpIHtcbiAgdW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpO1xufVxuLyoqIEBwcml2YXRlIFRlc3QgdXNhZ2UuIE5vdCB3b3JrIGluIHByb2QgKi9cbmV4cG9ydCBmdW5jdGlvbiBfdShjb250YWluZXIpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbGVnYWN5VW5tb3VudChjb250YWluZXIpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudChfeDIpIHtcbiAgcmV0dXJuIF91bm1vdW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfdW5tb3VudCgpIHtcbiAgX3VubW91bnQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBpZiAoIShjcmVhdGVSb290ICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBtb2Rlcm5Vbm1vdW50KGNvbnRhaW5lcikpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlZ2FjeVVubW91bnQoY29udGFpbmVyKTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMik7XG4gIH0pKTtcbiAgcmV0dXJuIF91bm1vdW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///38135
`)}}]);
