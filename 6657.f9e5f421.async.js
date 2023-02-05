"use strict";(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[6657],{63185:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C2": function() { return /* binding */ getStyle; }
/* harmony export */ });
/* unused harmony export genCheckboxStyle */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24599);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45503);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67968);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14747);



// ============================== Motion ==============================
const antCheckboxEffect = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antCheckboxEffect', {
  '0%': {
    transform: 'scale(1)',
    opacity: 0.5
  },
  '100%': {
    transform: 'scale(1.6)',
    opacity: 0
  }
});
// ============================== Styles ==============================
const genCheckboxStyle = token => {
  const {
    checkboxCls
  } = token;
  const wrapperCls = \`\${checkboxCls}-wrapper\`;
  return [
  // ===================== Basic =====================
  {
    // Group
    [\`\${checkboxCls}-group\`]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), {
      display: 'inline-flex'
    }),
    // Wrapper
    [wrapperCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), {
      display: 'inline-flex',
      alignItems: 'baseline',
      cursor: 'pointer',
      // Fix checkbox & radio in flex align #30260
      '&:after': {
        display: 'inline-block',
        width: 0,
        overflow: 'hidden',
        content: "'\\\\a0'"
      },
      // Checkbox near checkbox
      [\`& + \${wrapperCls}\`]: {
        marginInlineStart: token.marginXS
      },
      [\`&\${wrapperCls}-in-form-item\`]: {
        'input[type="checkbox"]': {
          width: 14,
          height: 14 // FIXME: magic
        }
      }
    }),

    // Wrapper > Checkbox
    [checkboxCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), {
      top: '0.2em',
      position: 'relative',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      cursor: 'pointer',
      // Wrapper > Checkbox > input
      [\`\${checkboxCls}-input\`]: {
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        opacity: 0,
        [\`&:focus-visible + \${checkboxCls}-inner\`]: Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .genFocusOutline */ .oN)(token))
      },
      // Wrapper > Checkbox > inner
      [\`\${checkboxCls}-inner\`]: {
        boxSizing: 'border-box',
        position: 'relative',
        top: 0,
        insetInlineStart: 0,
        display: 'block',
        width: token.checkboxSize,
        height: token.checkboxSize,
        direction: 'ltr',
        backgroundColor: token.colorBgContainer,
        border: \`\${token.lineWidth}px \${token.lineType} \${token.colorBorder}\`,
        borderRadius: token.borderRadiusSM,
        borderCollapse: 'separate',
        transition: \`all \${token.motionDurationSlow}\`,
        '&:after': {
          boxSizing: 'border-box',
          position: 'absolute',
          top: '50%',
          insetInlineStart: '21.5%',
          display: 'table',
          width: token.checkboxSize / 14 * 5,
          height: token.checkboxSize / 14 * 8,
          border: \`\${token.lineWidthBold}px solid \${token.colorWhite}\`,
          borderTop: 0,
          borderInlineStart: 0,
          transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
          opacity: 0,
          content: '""',
          transition: \`all \${token.motionDurationFast} \${token.motionEaseInBack}, opacity \${token.motionDurationFast}\`
        }
      },
      // Wrapper > Checkbox + Text
      '& + span': {
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS
      }
    })
  },
  // ================= Indeterminate =================
  {
    [checkboxCls]: {
      '&-indeterminate': {
        // Wrapper > Checkbox > inner
        [\`\${checkboxCls}-inner\`]: {
          '&:after': {
            top: '50%',
            insetInlineStart: '50%',
            width: token.fontSizeLG / 2,
            height: token.fontSizeLG / 2,
            backgroundColor: token.colorPrimary,
            border: 0,
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1,
            content: '""'
          }
        }
      }
    }
  },
  // ===================== Hover =====================
  {
    // Wrapper
    [\`\${wrapperCls}:hover \${checkboxCls}:after\`]: {
      visibility: 'visible'
    },
    // Wrapper & Wrapper > Checkbox
    [\`
        \${wrapperCls}:not(\${wrapperCls}-disabled),
        \${checkboxCls}:not(\${checkboxCls}-disabled)
      \`]: {
      [\`&:hover \${checkboxCls}-inner\`]: {
        borderColor: token.colorPrimary
      }
    },
    [\`\${wrapperCls}:not(\${wrapperCls}-disabled)\`]: {
      [\`&:hover \${checkboxCls}-checked:not(\${checkboxCls}-disabled) \${checkboxCls}-inner\`]: {
        backgroundColor: token.colorPrimaryHover,
        borderColor: 'transparent'
      },
      [\`&:hover \${checkboxCls}-checked:not(\${checkboxCls}-disabled):after\`]: {
        borderColor: token.colorPrimaryHover
      }
    }
  },
  // ==================== Checked ====================
  {
    // Wrapper > Checkbox
    [\`\${checkboxCls}-checked\`]: {
      [\`\${checkboxCls}-inner\`]: {
        backgroundColor: token.colorPrimary,
        borderColor: token.colorPrimary,
        '&:after': {
          opacity: 1,
          transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
          transition: \`all \${token.motionDurationMid} \${token.motionEaseOutBack} \${token.motionDurationFast}\`
        }
      },
      // Checked Effect
      '&:after': {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        width: '100%',
        height: '100%',
        borderRadius: token.borderRadiusSM,
        visibility: 'hidden',
        border: \`\${token.lineWidthBold}px solid \${token.colorPrimary}\`,
        animationName: antCheckboxEffect,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'backwards',
        content: '""',
        transition: \`all \${token.motionDurationSlow}\`
      }
    },
    [\`
        \${wrapperCls}-checked:not(\${wrapperCls}-disabled),
        \${checkboxCls}-checked:not(\${checkboxCls}-disabled)
      \`]: {
      [\`&:hover \${checkboxCls}-inner\`]: {
        backgroundColor: token.colorPrimaryHover,
        borderColor: 'transparent'
      },
      [\`&:hover \${checkboxCls}:after\`]: {
        borderColor: token.colorPrimaryHover
      }
    }
  },
  // ==================== Disable ====================
  {
    // Wrapper
    [\`\${wrapperCls}-disabled\`]: {
      cursor: 'not-allowed'
    },
    // Wrapper > Checkbox
    [\`\${checkboxCls}-disabled\`]: {
      // Wrapper > Checkbox > input
      [\`&, \${checkboxCls}-input\`]: {
        cursor: 'not-allowed',
        // Disabled for native input to enable Tooltip event handler
        // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
        pointerEvents: 'none'
      },
      // Wrapper > Checkbox > inner
      [\`\${checkboxCls}-inner\`]: {
        background: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        '&:after': {
          borderColor: token.colorTextDisabled
        }
      },
      '&:after': {
        display: 'none'
      },
      '& + span': {
        color: token.colorTextDisabled
      },
      [\`&\${checkboxCls}-indeterminate \${checkboxCls}-inner::after\`]: {
        background: token.colorTextDisabled
      }
    }
  }];
};
// ============================== Export ==============================
function getStyle(prefixCls, token) {
  const checkboxToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__/* .merge */ .TS)(token, {
    checkboxCls: \`.\${prefixCls}\`,
    checkboxSize: token.controlInteractiveSize
  });
  return [genCheckboxStyle(checkboxToken)];
}
/* harmony default export */ __webpack_exports__["ZP"] = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('Checkbox', (token, _ref) => {
  let {
    prefixCls
  } = _ref;
  return [getStyle(prefixCls, token)];
}));//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLFlBQVk7QUFDcEI7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsV0FBVyxZQUFZLGlCQUFpQixZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUCx3QkFBd0IsZ0VBQVU7QUFDbEMscUJBQXFCLFVBQVU7QUFDL0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDBEQUFlLG9FQUFxQjtBQUNwQztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2hlY2tib3gvc3R5bGUvaW5kZXguanM/MDNjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlmcmFtZXMgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmltcG9ydCB7IGdlbkNvbXBvbmVudFN0eWxlSG9vaywgbWVyZ2VUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lL2ludGVybmFsJztcbmltcG9ydCB7IGdlbkZvY3VzT3V0bGluZSwgcmVzZXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zdHlsZSc7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTW90aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgYW50Q2hlY2tib3hFZmZlY3QgPSBuZXcgS2V5ZnJhbWVzKCdhbnRDaGVja2JveEVmZmVjdCcsIHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAwLjVcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS42KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTdHlsZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgZ2VuQ2hlY2tib3hTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNoZWNrYm94Q2xzXG4gIH0gPSB0b2tlbjtcbiAgY29uc3Qgd3JhcHBlckNscyA9IGAke2NoZWNrYm94Q2xzfS13cmFwcGVyYDtcbiAgcmV0dXJuIFtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IEJhc2ljID09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgLy8gR3JvdXBcbiAgICBbYCR7Y2hlY2tib3hDbHN9LWdyb3VwYF06IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICAgIH0pLFxuICAgIC8vIFdyYXBwZXJcbiAgICBbd3JhcHBlckNsc106IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIC8vIEZpeCBjaGVja2JveCAmIHJhZGlvIGluIGZsZXggYWxpZ24gIzMwMjYwXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGNvbnRlbnQ6IFwiJ1xcXFxhMCdcIlxuICAgICAgfSxcbiAgICAgIC8vIENoZWNrYm94IG5lYXIgY2hlY2tib3hcbiAgICAgIFtgJiArICR7d3JhcHBlckNsc31gXToge1xuICAgICAgICBtYXJnaW5JbmxpbmVTdGFydDogdG9rZW4ubWFyZ2luWFNcbiAgICAgIH0sXG4gICAgICBbYCYke3dyYXBwZXJDbHN9LWluLWZvcm0taXRlbWBdOiB7XG4gICAgICAgICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nOiB7XG4gICAgICAgICAgd2lkdGg6IDE0LFxuICAgICAgICAgIGhlaWdodDogMTQgLy8gRklYTUU6IG1hZ2ljXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8vIFdyYXBwZXIgPiBDaGVja2JveFxuICAgIFtjaGVja2JveENsc106IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwge1xuICAgICAgdG9wOiAnMC4yZW0nLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIC8vIFdyYXBwZXIgPiBDaGVja2JveCA+IGlucHV0XG4gICAgICBbYCR7Y2hlY2tib3hDbHN9LWlucHV0YF06IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGluc2V0OiAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgW2AmOmZvY3VzLXZpc2libGUgKyAke2NoZWNrYm94Q2xzfS1pbm5lcmBdOiBPYmplY3QuYXNzaWduKHt9LCBnZW5Gb2N1c091dGxpbmUodG9rZW4pKVxuICAgICAgfSxcbiAgICAgIC8vIFdyYXBwZXIgPiBDaGVja2JveCA+IGlubmVyXG4gICAgICBbYCR7Y2hlY2tib3hDbHN9LWlubmVyYF06IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGluc2V0SW5saW5lU3RhcnQ6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiB0b2tlbi5jaGVja2JveFNpemUsXG4gICAgICAgIGhlaWdodDogdG9rZW4uY2hlY2tib3hTaXplLFxuICAgICAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yQmdDb250YWluZXIsXG4gICAgICAgIGJvcmRlcjogYCR7dG9rZW4ubGluZVdpZHRofXB4ICR7dG9rZW4ubGluZVR5cGV9ICR7dG9rZW4uY29sb3JCb3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNTTSxcbiAgICAgICAgYm9yZGVyQ29sbGFwc2U6ICdzZXBhcmF0ZScsXG4gICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3d9YCxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICBpbnNldElubGluZVN0YXJ0OiAnMjEuNSUnLFxuICAgICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgICAgICAgd2lkdGg6IHRva2VuLmNoZWNrYm94U2l6ZSAvIDE0ICogNSxcbiAgICAgICAgICBoZWlnaHQ6IHRva2VuLmNoZWNrYm94U2l6ZSAvIDE0ICogOCxcbiAgICAgICAgICBib3JkZXI6IGAke3Rva2VuLmxpbmVXaWR0aEJvbGR9cHggc29saWQgJHt0b2tlbi5jb2xvcldoaXRlfWAsXG4gICAgICAgICAgYm9yZGVyVG9wOiAwLFxuICAgICAgICAgIGJvcmRlcklubGluZVN0YXJ0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKC01MCUsLTUwJSknLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0b2tlbi5tb3Rpb25EdXJhdGlvbkZhc3R9ICR7dG9rZW4ubW90aW9uRWFzZUluQmFja30sIG9wYWNpdHkgJHt0b2tlbi5tb3Rpb25EdXJhdGlvbkZhc3R9YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gV3JhcHBlciA+IENoZWNrYm94ICsgVGV4dFxuICAgICAgJyYgKyBzcGFuJzoge1xuICAgICAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IHRva2VuLnBhZGRpbmdYUyxcbiAgICAgICAgcGFkZGluZ0lubGluZUVuZDogdG9rZW4ucGFkZGluZ1hTXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8gPT09PT09PT09PT09PT09PT0gSW5kZXRlcm1pbmF0ZSA9PT09PT09PT09PT09PT09PVxuICB7XG4gICAgW2NoZWNrYm94Q2xzXToge1xuICAgICAgJyYtaW5kZXRlcm1pbmF0ZSc6IHtcbiAgICAgICAgLy8gV3JhcHBlciA+IENoZWNrYm94ID4gaW5uZXJcbiAgICAgICAgW2Ake2NoZWNrYm94Q2xzfS1pbm5lcmBdOiB7XG4gICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogJzUwJScsXG4gICAgICAgICAgICB3aWR0aDogdG9rZW4uZm9udFNpemVMRyAvIDIsXG4gICAgICAgICAgICBoZWlnaHQ6IHRva2VuLmZvbnRTaXplTEcgLyAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb2xvclByaW1hcnksXG4gICAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09IEhvdmVyID09PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgLy8gV3JhcHBlclxuICAgIFtgJHt3cmFwcGVyQ2xzfTpob3ZlciAke2NoZWNrYm94Q2xzfTphZnRlcmBdOiB7XG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgICB9LFxuICAgIC8vIFdyYXBwZXIgJiBXcmFwcGVyID4gQ2hlY2tib3hcbiAgICBbYFxuICAgICAgICAke3dyYXBwZXJDbHN9Om5vdCgke3dyYXBwZXJDbHN9LWRpc2FibGVkKSxcbiAgICAgICAgJHtjaGVja2JveENsc306bm90KCR7Y2hlY2tib3hDbHN9LWRpc2FibGVkKVxuICAgICAgYF06IHtcbiAgICAgIFtgJjpob3ZlciAke2NoZWNrYm94Q2xzfS1pbm5lcmBdOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHt3cmFwcGVyQ2xzfTpub3QoJHt3cmFwcGVyQ2xzfS1kaXNhYmxlZClgXToge1xuICAgICAgW2AmOmhvdmVyICR7Y2hlY2tib3hDbHN9LWNoZWNrZWQ6bm90KCR7Y2hlY2tib3hDbHN9LWRpc2FibGVkKSAke2NoZWNrYm94Q2xzfS1pbm5lcmBdOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5SG92ZXIsXG4gICAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICB9LFxuICAgICAgW2AmOmhvdmVyICR7Y2hlY2tib3hDbHN9LWNoZWNrZWQ6bm90KCR7Y2hlY2tib3hDbHN9LWRpc2FibGVkKTphZnRlcmBdOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlIb3ZlclxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gQ2hlY2tlZCA9PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgLy8gV3JhcHBlciA+IENoZWNrYm94XG4gICAgW2Ake2NoZWNrYm94Q2xzfS1jaGVja2VkYF06IHtcbiAgICAgIFtgJHtjaGVja2JveENsc30taW5uZXJgXToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLC01MCUpJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dG9rZW4ubW90aW9uRHVyYXRpb25NaWR9ICR7dG9rZW4ubW90aW9uRWFzZU91dEJhY2t9ICR7dG9rZW4ubW90aW9uRHVyYXRpb25GYXN0fWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIENoZWNrZWQgRWZmZWN0XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgaW5zZXRJbmxpbmVTdGFydDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzU00sXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBib3JkZXI6IGAke3Rva2VuLmxpbmVXaWR0aEJvbGR9cHggc29saWQgJHt0b2tlbi5jb2xvclByaW1hcnl9YCxcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogYW50Q2hlY2tib3hFZmZlY3QsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0b2tlbi5tb3Rpb25EdXJhdGlvblNsb3csXG4gICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgICBhbmltYXRpb25GaWxsTW9kZTogJ2JhY2t3YXJkcycsXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgdHJhbnNpdGlvbjogYGFsbCAke3Rva2VuLm1vdGlvbkR1cmF0aW9uU2xvd31gXG4gICAgICB9XG4gICAgfSxcbiAgICBbYFxuICAgICAgICAke3dyYXBwZXJDbHN9LWNoZWNrZWQ6bm90KCR7d3JhcHBlckNsc30tZGlzYWJsZWQpLFxuICAgICAgICAke2NoZWNrYm94Q2xzfS1jaGVja2VkOm5vdCgke2NoZWNrYm94Q2xzfS1kaXNhYmxlZClcbiAgICAgIGBdOiB7XG4gICAgICBbYCY6aG92ZXIgJHtjaGVja2JveENsc30taW5uZXJgXToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yUHJpbWFyeUhvdmVyLFxuICAgICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgIFtgJjpob3ZlciAke2NoZWNrYm94Q2xzfTphZnRlcmBdOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlIb3ZlclxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT0gRGlzYWJsZSA9PT09PT09PT09PT09PT09PT09PVxuICB7XG4gICAgLy8gV3JhcHBlclxuICAgIFtgJHt3cmFwcGVyQ2xzfS1kaXNhYmxlZGBdOiB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCdcbiAgICB9LFxuICAgIC8vIFdyYXBwZXIgPiBDaGVja2JveFxuICAgIFtgJHtjaGVja2JveENsc30tZGlzYWJsZWRgXToge1xuICAgICAgLy8gV3JhcHBlciA+IENoZWNrYm94ID4gaW5wdXRcbiAgICAgIFtgJiwgJHtjaGVja2JveENsc30taW5wdXRgXToge1xuICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgIC8vIERpc2FibGVkIGZvciBuYXRpdmUgaW5wdXQgdG8gZW5hYmxlIFRvb2x0aXAgZXZlbnQgaGFuZGxlclxuICAgICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzM5ODIyI2lzc3VlY29tbWVudC0xMzY1MDc1OTAxXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIC8vIFdyYXBwZXIgPiBDaGVja2JveCA+IGlubmVyXG4gICAgICBbYCR7Y2hlY2tib3hDbHN9LWlubmVyYF06IHtcbiAgICAgICAgYmFja2dyb3VuZDogdG9rZW4uY29sb3JCZ0NvbnRhaW5lckRpc2FibGVkLFxuICAgICAgICBib3JkZXJDb2xvcjogdG9rZW4uY29sb3JCb3JkZXIsXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiB0b2tlbi5jb2xvclRleHREaXNhYmxlZFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmICsgc3Bhbic6IHtcbiAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERpc2FibGVkXG4gICAgICB9LFxuICAgICAgW2AmJHtjaGVja2JveENsc30taW5kZXRlcm1pbmF0ZSAke2NoZWNrYm94Q2xzfS1pbm5lcjo6YWZ0ZXJgXToge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0b2tlbi5jb2xvclRleHREaXNhYmxlZFxuICAgICAgfVxuICAgIH1cbiAgfV07XG59O1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEV4cG9ydCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShwcmVmaXhDbHMsIHRva2VuKSB7XG4gIGNvbnN0IGNoZWNrYm94VG9rZW4gPSBtZXJnZVRva2VuKHRva2VuLCB7XG4gICAgY2hlY2tib3hDbHM6IGAuJHtwcmVmaXhDbHN9YCxcbiAgICBjaGVja2JveFNpemU6IHRva2VuLmNvbnRyb2xJbnRlcmFjdGl2ZVNpemVcbiAgfSk7XG4gIHJldHVybiBbZ2VuQ2hlY2tib3hTdHlsZShjaGVja2JveFRva2VuKV07XG59XG5leHBvcnQgZGVmYXVsdCBnZW5Db21wb25lbnRTdHlsZUhvb2soJ0NoZWNrYm94JywgKHRva2VuLCBfcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgcHJlZml4Q2xzXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gW2dldFN0eWxlKHByZWZpeENscywgdG9rZW4pXTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///63185
`)},42409:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ dropdown; }
});

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(18073);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-dropdown/es/index.js + 3 modules
var es = __webpack_require__(60057);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(66680);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(21770);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 11 modules
var es_menu = __webpack_require__(68508);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/OverrideContext.js
var OverrideContext = __webpack_require__(76529);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/PurePanel.js
var PurePanel = __webpack_require__(8745);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/placements.js
var placements = __webpack_require__(80636);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(89705);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(71577);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(26713);
// EXTERNAL MODULE: ./node_modules/antd/es/style/placementArrow.js
var placementArrow = __webpack_require__(97414);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(67771);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/move.js
var move = __webpack_require__(33297);
// EXTERNAL MODULE: ./node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(50438);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(67968);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(45503);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/button.js
const genButtonStyle = token => {
  const {
    componentCls,
    antCls,
    paddingXS,
    opacityLoading
  } = token;
  return {
    [\`\${componentCls}-button\`]: {
      whiteSpace: 'nowrap',
      [\`&\${antCls}-btn-group > \${antCls}-btn\`]: {
        [\`&-loading, &-loading + \${antCls}-btn\`]: {
          cursor: 'default',
          pointerEvents: 'none',
          opacity: opacityLoading
        },
        [\`&:last-child:not(:first-child):not(\${antCls}-btn-icon-only)\`]: {
          paddingInline: paddingXS
        }
      }
    }
  };
};
/* harmony default export */ var style_button = (genButtonStyle);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/status.js
const genStatusStyle = token => {
  const {
    componentCls,
    menuCls,
    colorError,
    colorTextLightSolid
  } = token;
  const itemCls = \`\${menuCls}-item\`;
  return {
    [\`\${componentCls}, \${componentCls}-menu-submenu\`]: {
      [\`\${menuCls} \${itemCls}\`]: {
        [\`&\${itemCls}-danger:not(\${itemCls}-disabled)\`]: {
          color: colorError,
          '&:hover': {
            color: colorTextLightSolid,
            backgroundColor: colorError
          }
        }
      }
    }
  };
};
/* harmony default export */ var style_status = (genStatusStyle);
// EXTERNAL MODULE: ./node_modules/antd/es/style/index.js
var style = __webpack_require__(14747);
// EXTERNAL MODULE: ./node_modules/antd/es/style/roundedArrow.js
var roundedArrow = __webpack_require__(79511);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/style/index.js






// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    menuCls,
    zIndexPopup,
    dropdownArrowDistance,
    dropdownArrowOffset,
    sizePopupArrow,
    antCls,
    iconCls,
    motionDurationMid,
    dropdownPaddingVertical,
    fontSize,
    dropdownEdgeChildPadding,
    colorTextDisabled,
    fontSizeIcon,
    controlPaddingHorizontal,
    colorBgElevated,
    boxShadowPopoverArrow
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: zIndexPopup,
      display: 'block',
      // A placeholder out of dropdown visible range to avoid close when user moving
      '&::before': {
        position: 'absolute',
        insetBlock: -dropdownArrowDistance + sizePopupArrow / 2,
        // insetInlineStart: -7, // FIXME: Seems not work for hidden element
        zIndex: -9999,
        opacity: 0.0001,
        content: '""'
      },
      [\`\${componentCls}-wrap\`]: {
        position: 'relative',
        [\`\${antCls}-btn > \${iconCls}-down\`]: {
          fontSize: fontSizeIcon
        },
        [\`\${iconCls}-down::before\`]: {
          transition: \`transform \${motionDurationMid}\`
        }
      },
      [\`\${componentCls}-wrap-open\`]: {
        [\`\${iconCls}-down::before\`]: {
          transform: \`rotate(180deg)\`
        }
      },
      [\`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      \`]: {
        display: 'none'
      },
      // =============================================================
      // ==                          Arrow                          ==
      // =============================================================
      // Offset the popover to account for the dropdown arrow
      [\`
        &-show-arrow\${componentCls}-placement-topLeft,
        &-show-arrow\${componentCls}-placement-top,
        &-show-arrow\${componentCls}-placement-topRight
      \`]: {
        paddingBottom: dropdownArrowDistance
      },
      [\`
        &-show-arrow\${componentCls}-placement-bottomLeft,
        &-show-arrow\${componentCls}-placement-bottom,
        &-show-arrow\${componentCls}-placement-bottomRight
      \`]: {
        paddingTop: dropdownArrowDistance
      },
      // Note: .popover-arrow is outer, .popover-arrow:after is inner
      [\`\${componentCls}-arrow\`]: Object.assign({
        position: 'absolute',
        zIndex: 1,
        display: 'block'
      }, (0,roundedArrow/* roundedArrow */.r)(sizePopupArrow, token.borderRadiusXS, token.borderRadiusOuter, colorBgElevated, boxShadowPopoverArrow)),
      [\`
        &-placement-top > \${componentCls}-arrow,
        &-placement-topLeft > \${componentCls}-arrow,
        &-placement-topRight > \${componentCls}-arrow
      \`]: {
        bottom: dropdownArrowDistance,
        transform: 'translateY(100%) rotate(180deg)'
      },
      [\`&-placement-top > \${componentCls}-arrow\`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
      },
      [\`&-placement-topLeft > \${componentCls}-arrow\`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [\`&-placement-topRight > \${componentCls}-arrow\`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [\`
          &-placement-bottom > \${componentCls}-arrow,
          &-placement-bottomLeft > \${componentCls}-arrow,
          &-placement-bottomRight > \${componentCls}-arrow
        \`]: {
        top: dropdownArrowDistance,
        transform: \`translateY(-100%)\`
      },
      [\`&-placement-bottom > \${componentCls}-arrow\`]: {
        left: {
          _skip_check_: true,
          value: '50%'
        },
        transform: \`translateY(-100%) translateX(-50%)\`
      },
      [\`&-placement-bottomLeft > \${componentCls}-arrow\`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [\`&-placement-bottomRight > \${componentCls}-arrow\`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      // =============================================================
      // ==                         Motion                          ==
      // =============================================================
      // When position is not enough for dropdown, the placement will revert.
      // We will handle this with revert motion name.
      [\`&\${antCls}-slide-down-enter\${antCls}-slide-down-enter-active\${componentCls}-placement-bottomLeft,
          &\${antCls}-slide-down-appear\${antCls}-slide-down-appear-active\${componentCls}-placement-bottomLeft,
          &\${antCls}-slide-down-enter\${antCls}-slide-down-enter-active\${componentCls}-placement-bottom,
          &\${antCls}-slide-down-appear\${antCls}-slide-down-appear-active\${componentCls}-placement-bottom,
          &\${antCls}-slide-down-enter\${antCls}-slide-down-enter-active\${componentCls}-placement-bottomRight,
          &\${antCls}-slide-down-appear\${antCls}-slide-down-appear-active\${componentCls}-placement-bottomRight\`]: {
        animationName: slide/* slideUpIn */.fJ
      },
      [\`&\${antCls}-slide-up-enter\${antCls}-slide-up-enter-active\${componentCls}-placement-topLeft,
          &\${antCls}-slide-up-appear\${antCls}-slide-up-appear-active\${componentCls}-placement-topLeft,
          &\${antCls}-slide-up-enter\${antCls}-slide-up-enter-active\${componentCls}-placement-top,
          &\${antCls}-slide-up-appear\${antCls}-slide-up-appear-active\${componentCls}-placement-top,
          &\${antCls}-slide-up-enter\${antCls}-slide-up-enter-active\${componentCls}-placement-topRight,
          &\${antCls}-slide-up-appear\${antCls}-slide-up-appear-active\${componentCls}-placement-topRight\`]: {
        animationName: slide/* slideDownIn */.Qt
      },
      [\`&\${antCls}-slide-down-leave\${antCls}-slide-down-leave-active\${componentCls}-placement-bottomLeft,
          &\${antCls}-slide-down-leave\${antCls}-slide-down-leave-active\${componentCls}-placement-bottom,
          &\${antCls}-slide-down-leave\${antCls}-slide-down-leave-active\${componentCls}-placement-bottomRight\`]: {
        animationName: slide/* slideUpOut */.Uw
      },
      [\`&\${antCls}-slide-up-leave\${antCls}-slide-up-leave-active\${componentCls}-placement-topLeft,
          &\${antCls}-slide-up-leave\${antCls}-slide-up-leave-active\${componentCls}-placement-top,
          &\${antCls}-slide-up-leave\${antCls}-slide-up-leave-active\${componentCls}-placement-topRight\`]: {
        animationName: slide/* slideDownOut */.ly
      }
    })
  }, {
    // =============================================================
    // ==                          Menu                           ==
    // =============================================================
    [\`\${componentCls} \${menuCls}\`]: {
      position: 'relative',
      margin: 0
    },
    [\`\${menuCls}-submenu-popup\`]: {
      position: 'absolute',
      zIndex: zIndexPopup,
      background: 'transparent',
      boxShadow: 'none',
      transformOrigin: '0 0',
      'ul, li': {
        listStyle: 'none',
        margin: 0
      }
    },
    [\`\${componentCls}, \${componentCls}-menu-submenu\`]: {
      [menuCls]: Object.assign(Object.assign({
        padding: dropdownEdgeChildPadding,
        listStyleType: 'none',
        backgroundColor: colorBgElevated,
        backgroundClip: 'padding-box',
        borderRadius: token.borderRadiusLG,
        outline: 'none',
        boxShadow: token.boxShadowSecondary
      }, (0,style/* genFocusStyle */.Qy)(token)), {
        [\`\${menuCls}-item-group-title\`]: {
          padding: \`\${dropdownPaddingVertical}px \${controlPaddingHorizontal}px\`,
          color: token.colorTextDescription,
          transition: \`all \${motionDurationMid}\`
        },
        // ======================= Item Content =======================
        [\`\${menuCls}-item\`]: {
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        },
        [\`\${menuCls}-item-icon\`]: {
          minWidth: fontSize,
          marginInlineEnd: token.marginXS,
          fontSize: token.fontSizeSM
        },
        [\`\${menuCls}-title-content\`]: {
          flex: 'auto',
          '> a': {
            color: 'inherit',
            transition: \`all \${motionDurationMid}\`,
            '&:hover': {
              color: 'inherit'
            },
            '&::after': {
              position: 'absolute',
              inset: 0,
              content: '""'
            }
          }
        },
        // =========================== Item ===========================
        [\`\${menuCls}-item, \${menuCls}-submenu-title\`]: Object.assign(Object.assign({
          clear: 'both',
          margin: 0,
          padding: \`\${dropdownPaddingVertical}px \${controlPaddingHorizontal}px\`,
          color: token.colorText,
          fontWeight: 'normal',
          fontSize,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          transition: \`all \${motionDurationMid}\`,
          borderRadius: token.borderRadiusSM,
          [\`&:hover, &-active\`]: {
            backgroundColor: token.controlItemBgHover
          }
        }, (0,style/* genFocusStyle */.Qy)(token)), {
          '&-selected': {
            color: token.colorPrimary,
            backgroundColor: token.controlItemBgActive,
            '&:hover, &-active': {
              backgroundColor: token.controlItemBgActiveHover
            }
          },
          '&-disabled': {
            color: colorTextDisabled,
            cursor: 'not-allowed',
            '&:hover': {
              color: colorTextDisabled,
              backgroundColor: colorBgElevated,
              cursor: 'not-allowed'
            },
            a: {
              pointerEvents: 'none'
            }
          },
          '&-divider': {
            height: 1,
            margin: \`\${token.marginXXS}px 0\`,
            overflow: 'hidden',
            lineHeight: 0,
            backgroundColor: token.colorSplit
          },
          [\`\${componentCls}-menu-submenu-expand-icon\`]: {
            position: 'absolute',
            insetInlineEnd: token.paddingXS,
            [\`\${componentCls}-menu-submenu-arrow-icon\`]: {
              marginInlineEnd: '0 !important',
              color: token.colorTextDescription,
              fontSize: fontSizeIcon,
              fontStyle: 'normal'
            }
          }
        }),
        [\`\${menuCls}-item-group-list\`]: {
          margin: \`0 \${token.marginXS}px\`,
          padding: 0,
          listStyle: 'none'
        },
        [\`\${menuCls}-submenu-title\`]: {
          paddingInlineEnd: controlPaddingHorizontal + token.fontSizeSM
        },
        [\`\${menuCls}-submenu-vertical\`]: {
          position: 'relative'
        },
        [\`\${menuCls}-submenu\${menuCls}-submenu-disabled \${componentCls}-menu-submenu-title\`]: {
          [\`&, \${componentCls}-menu-submenu-arrow-icon\`]: {
            color: colorTextDisabled,
            backgroundColor: colorBgElevated,
            cursor: 'not-allowed'
          }
        },
        // https://github.com/ant-design/ant-design/issues/19264
        [\`\${menuCls}-submenu-selected \${componentCls}-menu-submenu-title\`]: {
          color: token.colorPrimary
        }
      })
    }
  },
  // Follow code may reuse in other components
  [(0,slide/* initSlideMotion */.oN)(token, 'slide-up'), (0,slide/* initSlideMotion */.oN)(token, 'slide-down'), (0,move/* initMoveMotion */.Fm)(token, 'move-up'), (0,move/* initMoveMotion */.Fm)(token, 'move-down'), (0,zoom/* initZoomMotion */._y)(token, 'zoom-big')]];
};
// ============================== Export ==============================
/* harmony default export */ var dropdown_style = ((0,genComponentStyleHook/* default */.Z)('Dropdown', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const {
    marginXXS,
    sizePopupArrow,
    controlHeight,
    fontSize,
    lineHeight,
    paddingXXS,
    componentCls,
    borderRadiusOuter,
    borderRadiusLG
  } = token;
  const dropdownPaddingVertical = (controlHeight - fontSize * lineHeight) / 2;
  const {
    dropdownArrowOffset
  } = (0,placementArrow/* getArrowOffset */.fS)({
    sizePopupArrow,
    contentRadius: borderRadiusLG,
    borderRadiusOuter
  });
  const dropdownToken = (0,statistic/* merge */.TS)(token, {
    menuCls: \`\${componentCls}-menu\`,
    rootPrefixCls,
    dropdownArrowDistance: sizePopupArrow / 2 + marginXXS,
    dropdownArrowOffset,
    dropdownPaddingVertical,
    dropdownEdgeChildPadding: paddingXXS
  });
  return [genBaseStyle(dropdownToken), style_button(dropdownToken), style_status(dropdownToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 50
})));
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown-button.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const DropdownButton = props => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      type = 'default',
      danger,
      disabled,
      loading,
      onClick,
      htmlType,
      children,
      className,
      menu,
      arrow,
      autoFocus,
      overlay,
      trigger,
      align,
      open,
      onOpenChange,
      placement,
      getPopupContainer,
      href,
      icon = /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
      title,
      buttonsRender = buttons => buttons,
      mouseEnterDelay,
      mouseLeaveDelay,
      overlayClassName,
      overlayStyle,
      destroyPopupOnHide,
      dropdownRender
    } = props,
    restProps = __rest(props, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const buttonPrefixCls = \`\${prefixCls}-button\`;
  const [wrapSSR, hashId] = dropdown_style(prefixCls);
  const dropdownProps = {
    menu,
    arrow,
    autoFocus,
    align,
    disabled,
    trigger: disabled ? [] : trigger,
    onOpenChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    destroyPopupOnHide,
    dropdownRender
  };
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const classes = classnames_default()(buttonPrefixCls, compactItemClassnames, className, hashId);
  if ('overlay' in props) {
    dropdownProps.overlay = overlay;
  }
  if ('open' in props) {
    dropdownProps.open = open;
  }
  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }
  const leftButton = /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
    type: type,
    danger: danger,
    disabled: disabled,
    loading: loading,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  const rightButton = /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
    type: type,
    danger: danger,
    icon: icon
  });
  const [leftButtonToRender, rightButtonToRender] = buttonsRender([leftButton, rightButton]);
  return wrapSSR( /*#__PURE__*/react.createElement(space/* default.Compact */.Z.Compact, Object.assign({
    className: classes,
    size: compactSize,
    block: true
  }, restProps), leftButtonToRender, /*#__PURE__*/react.createElement(dropdown, Object.assign({}, dropdownProps), rightButtonToRender)));
};
DropdownButton.__ANT_BUTTON = true;
/* harmony default export */ var dropdown_button = (DropdownButton);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown.js
















const Placements = (/* unused pure expression or super */ null && (['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom']));
const Dropdown = props => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  // Warning for deprecated usage
  if (false) {}
  const getTransitionName = () => {
    const rootPrefixCls = getPrefixCls();
    const {
      placement = '',
      transitionName
    } = props;
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return \`\${rootPrefixCls}-slide-down\`;
    }
    return \`\${rootPrefixCls}-slide-up\`;
  };
  const getPlacement = () => {
    const {
      placement
    } = props;
    if (!placement) {
      return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }
    if (placement.includes('Center')) {
      const newPlacement = placement.slice(0, placement.indexOf('Center'));
       false ? 0 : void 0;
      return newPlacement;
    }
    return placement;
  };
  const {
    menu,
    arrow,
    prefixCls: customizePrefixCls,
    children,
    trigger,
    disabled,
    dropdownRender,
    getPopupContainer,
    overlayClassName,
    open,
    onOpenChange,
    // Deprecated
    visible,
    onVisibleChange,
    mouseEnterDelay = 0.15,
    mouseLeaveDelay = 0.1
  } = props;
  if (false) {}
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const [wrapSSR, hashId] = dropdown_style(prefixCls);
  const child = react.Children.only(children);
  const dropdownTrigger = (0,reactNode/* cloneElement */.Tm)(child, {
    className: classnames_default()(\`\${prefixCls}-trigger\`, {
      [\`\${prefixCls}-rtl\`]: direction === 'rtl'
    }, child.props.className),
    disabled
  });
  const triggerActions = disabled ? [] : trigger;
  let alignPoint;
  if (triggerActions && triggerActions.includes('contextMenu')) {
    alignPoint = true;
  }
  // =========================== Open ============================
  const [mergedOpen, setOpen] = (0,useMergedState/* default */.Z)(false, {
    value: open !== null && open !== void 0 ? open : visible
  });
  const onInnerOpenChange = (0,useEvent/* default */.Z)(nextOpen => {
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen);
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
    setOpen(nextOpen);
  });
  // =========================== Overlay ============================
  const overlayClassNameCustomized = classnames_default()(overlayClassName, hashId, {
    [\`\${prefixCls}-rtl\`]: direction === 'rtl'
  });
  const builtinPlacements = (0,placements/* default */.Z)({
    arrowPointAtCenter: typeof arrow === 'object' && arrow.pointAtCenter,
    autoAdjustOverflow: true
  });
  const onMenuClick = react.useCallback(() => {
    setOpen(false);
  }, []);
  const renderOverlay = () => {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    const {
      overlay
    } = props;
    let overlayNode;
    if (menu === null || menu === void 0 ? void 0 : menu.items) {
      overlayNode = /*#__PURE__*/react.createElement(es_menu/* default */.Z, Object.assign({}, menu));
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = react.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/react.createElement("span", null, overlayNode) : overlayNode);
    return /*#__PURE__*/react.createElement(OverrideContext/* OverrideProvider */.J, {
      prefixCls: \`\${prefixCls}-menu\`,
      expandIcon: /*#__PURE__*/react.createElement("span", {
        className: \`\${prefixCls}-menu-submenu-arrow\`
      }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
        className: \`\${prefixCls}-menu-submenu-arrow-icon\`
      })),
      mode: "vertical",
      selectable: false,
      onClick: onMenuClick,
      validator: _ref3 => {
        let {
          mode
        } = _ref3;
        // Warning if use other mode
         false ? 0 : void 0;
      }
    }, /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, overlayNode));
  };
  // ============================ Render ============================
  return wrapSSR( /*#__PURE__*/react.createElement(es/* default */.Z, Object.assign({
    alignPoint: alignPoint
  }, props, {
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    visible: mergedOpen,
    builtinPlacements: builtinPlacements,
    arrow: !!arrow,
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: renderOverlay,
    placement: getPlacement(),
    onVisibleChange: onInnerOpenChange
  }), dropdownTrigger));
};
Dropdown.Button = dropdown_button;
// We don't care debug panel
const dropdown_PurePanel = (0,PurePanel/* default */.Z)(Dropdown, 'dropdown', prefixCls => prefixCls);
/* istanbul ignore next */
const WrapPurePanel = props => /*#__PURE__*/react.createElement(dropdown_PurePanel, Object.assign({}, props), /*#__PURE__*/react.createElement("span", null));
Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
if (false) {}
/* harmony default export */ var dropdown = (Dropdown);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxtQkFBbUIsQ0FBQyw4QkFBYztBQUN0RDtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQixDQUFDLGlCQUFVO0FBQzdEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLGVBQWM7QUFDaEM7QUFDQSxNQUFNLGtCQUFTLEdBQUcsNEJBQVk7QUFDOUI7QUFDQSw0Q0FBNEMsbUJBQW1CLENBQUMsa0JBQVMsa0JBQWtCLHVCQUF1QixtQkFBbUI7QUFDckk7QUFDQSxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCw2Q0FBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZHJvcGRvd24vc3R5bGUvYnV0dG9uLmpzPzM1MjMiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZHJvcGRvd24vc3R5bGUvc3RhdHVzLmpzP2ExMDIiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZHJvcGRvd24vc3R5bGUvaW5kZXguanM/M2FiMyIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kcm9wZG93bi9kcm9wZG93bi1idXR0b24uanM/MGFlMyIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kcm9wZG93bi9kcm9wZG93bi5qcz9iZjUzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdlbkJ1dHRvblN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGFudENscyxcbiAgICBwYWRkaW5nWFMsXG4gICAgb3BhY2l0eUxvYWRpbmdcbiAgfSA9IHRva2VuO1xuICByZXR1cm4ge1xuICAgIFtgJHtjb21wb25lbnRDbHN9LWJ1dHRvbmBdOiB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIFtgJiR7YW50Q2xzfS1idG4tZ3JvdXAgPiAke2FudENsc30tYnRuYF06IHtcbiAgICAgICAgW2AmLWxvYWRpbmcsICYtbG9hZGluZyArICR7YW50Q2xzfS1idG5gXToge1xuICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5TG9hZGluZ1xuICAgICAgICB9LFxuICAgICAgICBbYCY6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoJHthbnRDbHN9LWJ0bi1pY29uLW9ubHkpYF06IHtcbiAgICAgICAgICBwYWRkaW5nSW5saW5lOiBwYWRkaW5nWFNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZW5CdXR0b25TdHlsZTsiLCJjb25zdCBnZW5TdGF0dXNTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBtZW51Q2xzLFxuICAgIGNvbG9yRXJyb3IsXG4gICAgY29sb3JUZXh0TGlnaHRTb2xpZFxuICB9ID0gdG9rZW47XG4gIGNvbnN0IGl0ZW1DbHMgPSBgJHttZW51Q2xzfS1pdGVtYDtcbiAgcmV0dXJuIHtcbiAgICBbYCR7Y29tcG9uZW50Q2xzfSwgJHtjb21wb25lbnRDbHN9LW1lbnUtc3VibWVudWBdOiB7XG4gICAgICBbYCR7bWVudUNsc30gJHtpdGVtQ2xzfWBdOiB7XG4gICAgICAgIFtgJiR7aXRlbUNsc30tZGFuZ2VyOm5vdCgke2l0ZW1DbHN9LWRpc2FibGVkKWBdOiB7XG4gICAgICAgICAgY29sb3I6IGNvbG9yRXJyb3IsXG4gICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3JUZXh0TGlnaHRTb2xpZCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JFcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZW5TdGF0dXNTdHlsZTsiLCJpbXBvcnQgeyBnZXRBcnJvd09mZnNldCB9IGZyb20gJy4uLy4uL3N0eWxlL3BsYWNlbWVudEFycm93JztcbmltcG9ydCB7IGluaXRNb3ZlTW90aW9uLCBpbml0U2xpZGVNb3Rpb24sIGluaXRab29tTW90aW9uLCBzbGlkZURvd25Jbiwgc2xpZGVEb3duT3V0LCBzbGlkZVVwSW4sIHNsaWRlVXBPdXQgfSBmcm9tICcuLi8uLi9zdHlsZS9tb3Rpb24nO1xuaW1wb3J0IHsgZ2VuQ29tcG9uZW50U3R5bGVIb29rLCBtZXJnZVRva2VuIH0gZnJvbSAnLi4vLi4vdGhlbWUvaW50ZXJuYWwnO1xuaW1wb3J0IGdlbkJ1dHRvblN0eWxlIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBnZW5TdGF0dXNTdHlsZSBmcm9tICcuL3N0YXR1cyc7XG5pbXBvcnQgeyBnZW5Gb2N1c1N0eWxlLCByZXNldENvbXBvbmVudCwgcm91bmRlZEFycm93IH0gZnJvbSAnLi4vLi4vc3R5bGUnO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBCYXNlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGdlbkJhc2VTdHlsZSA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudENscyxcbiAgICBtZW51Q2xzLFxuICAgIHpJbmRleFBvcHVwLFxuICAgIGRyb3Bkb3duQXJyb3dEaXN0YW5jZSxcbiAgICBkcm9wZG93bkFycm93T2Zmc2V0LFxuICAgIHNpemVQb3B1cEFycm93LFxuICAgIGFudENscyxcbiAgICBpY29uQ2xzLFxuICAgIG1vdGlvbkR1cmF0aW9uTWlkLFxuICAgIGRyb3Bkb3duUGFkZGluZ1ZlcnRpY2FsLFxuICAgIGZvbnRTaXplLFxuICAgIGRyb3Bkb3duRWRnZUNoaWxkUGFkZGluZyxcbiAgICBjb2xvclRleHREaXNhYmxlZCxcbiAgICBmb250U2l6ZUljb24sXG4gICAgY29udHJvbFBhZGRpbmdIb3Jpem9udGFsLFxuICAgIGNvbG9yQmdFbGV2YXRlZCxcbiAgICBib3hTaGFkb3dQb3BvdmVyQXJyb3dcbiAgfSA9IHRva2VuO1xuICByZXR1cm4gW3tcbiAgICBbY29tcG9uZW50Q2xzXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXNldENvbXBvbmVudCh0b2tlbikpLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogLTk5OTksXG4gICAgICBsZWZ0OiB7XG4gICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IC05OTk5XG4gICAgICB9LFxuICAgICAgekluZGV4OiB6SW5kZXhQb3B1cCxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAvLyBBIHBsYWNlaG9sZGVyIG91dCBvZiBkcm9wZG93biB2aXNpYmxlIHJhbmdlIHRvIGF2b2lkIGNsb3NlIHdoZW4gdXNlciBtb3ZpbmdcbiAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBpbnNldEJsb2NrOiAtZHJvcGRvd25BcnJvd0Rpc3RhbmNlICsgc2l6ZVBvcHVwQXJyb3cgLyAyLFxuICAgICAgICAvLyBpbnNldElubGluZVN0YXJ0OiAtNywgLy8gRklYTUU6IFNlZW1zIG5vdCB3b3JrIGZvciBoaWRkZW4gZWxlbWVudFxuICAgICAgICB6SW5kZXg6IC05OTk5LFxuICAgICAgICBvcGFjaXR5OiAwLjAwMDEsXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJ1xuICAgICAgfSxcbiAgICAgIFtgJHtjb21wb25lbnRDbHN9LXdyYXBgXToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgW2Ake2FudENsc30tYnRuID4gJHtpY29uQ2xzfS1kb3duYF06IHtcbiAgICAgICAgICBmb250U2l6ZTogZm9udFNpemVJY29uXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtpY29uQ2xzfS1kb3duOjpiZWZvcmVgXToge1xuICAgICAgICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gJHttb3Rpb25EdXJhdGlvbk1pZH1gXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS13cmFwLW9wZW5gXToge1xuICAgICAgICBbYCR7aWNvbkNsc30tZG93bjo6YmVmb3JlYF06IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoMTgwZGVnKWBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtgXG4gICAgICAgICYtaGlkZGVuLFxuICAgICAgICAmLW1lbnUtaGlkZGVuLFxuICAgICAgICAmLW1lbnUtc3VibWVudS1oaWRkZW5cbiAgICAgIGBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIC8vID09ICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgPT1cbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIC8vIE9mZnNldCB0aGUgcG9wb3ZlciB0byBhY2NvdW50IGZvciB0aGUgZHJvcGRvd24gYXJyb3dcbiAgICAgIFtgXG4gICAgICAgICYtc2hvdy1hcnJvdyR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtdG9wTGVmdCxcbiAgICAgICAgJi1zaG93LWFycm93JHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC10b3AsXG4gICAgICAgICYtc2hvdy1hcnJvdyR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtdG9wUmlnaHRcbiAgICAgIGBdOiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IGRyb3Bkb3duQXJyb3dEaXN0YW5jZVxuICAgICAgfSxcbiAgICAgIFtgXG4gICAgICAgICYtc2hvdy1hcnJvdyR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtYm90dG9tTGVmdCxcbiAgICAgICAgJi1zaG93LWFycm93JHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC1ib3R0b20sXG4gICAgICAgICYtc2hvdy1hcnJvdyR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtYm90dG9tUmlnaHRcbiAgICAgIGBdOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IGRyb3Bkb3duQXJyb3dEaXN0YW5jZVxuICAgICAgfSxcbiAgICAgIC8vIE5vdGU6IC5wb3BvdmVyLWFycm93IGlzIG91dGVyLCAucG9wb3Zlci1hcnJvdzphZnRlciBpcyBpbm5lclxuICAgICAgW2Ake2NvbXBvbmVudENsc30tYXJyb3dgXTogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH0sIHJvdW5kZWRBcnJvdyhzaXplUG9wdXBBcnJvdywgdG9rZW4uYm9yZGVyUmFkaXVzWFMsIHRva2VuLmJvcmRlclJhZGl1c091dGVyLCBjb2xvckJnRWxldmF0ZWQsIGJveFNoYWRvd1BvcG92ZXJBcnJvdykpLFxuICAgICAgW2BcbiAgICAgICAgJi1wbGFjZW1lbnQtdG9wID4gJHtjb21wb25lbnRDbHN9LWFycm93LFxuICAgICAgICAmLXBsYWNlbWVudC10b3BMZWZ0ID4gJHtjb21wb25lbnRDbHN9LWFycm93LFxuICAgICAgICAmLXBsYWNlbWVudC10b3BSaWdodCA+ICR7Y29tcG9uZW50Q2xzfS1hcnJvd1xuICAgICAgYF06IHtcbiAgICAgICAgYm90dG9tOiBkcm9wZG93bkFycm93RGlzdGFuY2UsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSkgcm90YXRlKDE4MGRlZyknXG4gICAgICB9LFxuICAgICAgW2AmLXBsYWNlbWVudC10b3AgPiAke2NvbXBvbmVudENsc30tYXJyb3dgXToge1xuICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiAnNTAlJ1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlKDE4MGRlZyknXG4gICAgICB9LFxuICAgICAgW2AmLXBsYWNlbWVudC10b3BMZWZ0ID4gJHtjb21wb25lbnRDbHN9LWFycm93YF06IHtcbiAgICAgICAgbGVmdDoge1xuICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogZHJvcGRvd25BcnJvd09mZnNldFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmLXBsYWNlbWVudC10b3BSaWdodCA+ICR7Y29tcG9uZW50Q2xzfS1hcnJvd2BdOiB7XG4gICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBkcm9wZG93bkFycm93T2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYFxuICAgICAgICAgICYtcGxhY2VtZW50LWJvdHRvbSA+ICR7Y29tcG9uZW50Q2xzfS1hcnJvdyxcbiAgICAgICAgICAmLXBsYWNlbWVudC1ib3R0b21MZWZ0ID4gJHtjb21wb25lbnRDbHN9LWFycm93LFxuICAgICAgICAgICYtcGxhY2VtZW50LWJvdHRvbVJpZ2h0ID4gJHtjb21wb25lbnRDbHN9LWFycm93XG4gICAgICAgIGBdOiB7XG4gICAgICAgIHRvcDogZHJvcGRvd25BcnJvd0Rpc3RhbmNlLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWBcbiAgICAgIH0sXG4gICAgICBbYCYtcGxhY2VtZW50LWJvdHRvbSA+ICR7Y29tcG9uZW50Q2xzfS1hcnJvd2BdOiB7XG4gICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICBfc2tpcF9jaGVja186IHRydWUsXG4gICAgICAgICAgdmFsdWU6ICc1MCUnXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVgoLTUwJSlgXG4gICAgICB9LFxuICAgICAgW2AmLXBsYWNlbWVudC1ib3R0b21MZWZ0ID4gJHtjb21wb25lbnRDbHN9LWFycm93YF06IHtcbiAgICAgICAgbGVmdDoge1xuICAgICAgICAgIF9za2lwX2NoZWNrXzogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogZHJvcGRvd25BcnJvd09mZnNldFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW2AmLXBsYWNlbWVudC1ib3R0b21SaWdodCA+ICR7Y29tcG9uZW50Q2xzfS1hcnJvd2BdOiB7XG4gICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgX3NraXBfY2hlY2tfOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBkcm9wZG93bkFycm93T2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAvLyA9PSAgICAgICAgICAgICAgICAgICAgICAgICBNb3Rpb24gICAgICAgICAgICAgICAgICAgICAgICAgID09XG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAvLyBXaGVuIHBvc2l0aW9uIGlzIG5vdCBlbm91Z2ggZm9yIGRyb3Bkb3duLCB0aGUgcGxhY2VtZW50IHdpbGwgcmV2ZXJ0LlxuICAgICAgLy8gV2Ugd2lsbCBoYW5kbGUgdGhpcyB3aXRoIHJldmVydCBtb3Rpb24gbmFtZS5cbiAgICAgIFtgJiR7YW50Q2xzfS1zbGlkZS1kb3duLWVudGVyJHthbnRDbHN9LXNsaWRlLWRvd24tZW50ZXItYWN0aXZlJHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC1ib3R0b21MZWZ0LFxuICAgICAgICAgICYke2FudENsc30tc2xpZGUtZG93bi1hcHBlYXIke2FudENsc30tc2xpZGUtZG93bi1hcHBlYXItYWN0aXZlJHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC1ib3R0b21MZWZ0LFxuICAgICAgICAgICYke2FudENsc30tc2xpZGUtZG93bi1lbnRlciR7YW50Q2xzfS1zbGlkZS1kb3duLWVudGVyLWFjdGl2ZSR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtYm90dG9tLFxuICAgICAgICAgICYke2FudENsc30tc2xpZGUtZG93bi1hcHBlYXIke2FudENsc30tc2xpZGUtZG93bi1hcHBlYXItYWN0aXZlJHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC1ib3R0b20sXG4gICAgICAgICAgJiR7YW50Q2xzfS1zbGlkZS1kb3duLWVudGVyJHthbnRDbHN9LXNsaWRlLWRvd24tZW50ZXItYWN0aXZlJHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC1ib3R0b21SaWdodCxcbiAgICAgICAgICAmJHthbnRDbHN9LXNsaWRlLWRvd24tYXBwZWFyJHthbnRDbHN9LXNsaWRlLWRvd24tYXBwZWFyLWFjdGl2ZSR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtYm90dG9tUmlnaHRgXToge1xuICAgICAgICBhbmltYXRpb25OYW1lOiBzbGlkZVVwSW5cbiAgICAgIH0sXG4gICAgICBbYCYke2FudENsc30tc2xpZGUtdXAtZW50ZXIke2FudENsc30tc2xpZGUtdXAtZW50ZXItYWN0aXZlJHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC10b3BMZWZ0LFxuICAgICAgICAgICYke2FudENsc30tc2xpZGUtdXAtYXBwZWFyJHthbnRDbHN9LXNsaWRlLXVwLWFwcGVhci1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LXRvcExlZnQsXG4gICAgICAgICAgJiR7YW50Q2xzfS1zbGlkZS11cC1lbnRlciR7YW50Q2xzfS1zbGlkZS11cC1lbnRlci1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LXRvcCxcbiAgICAgICAgICAmJHthbnRDbHN9LXNsaWRlLXVwLWFwcGVhciR7YW50Q2xzfS1zbGlkZS11cC1hcHBlYXItYWN0aXZlJHtjb21wb25lbnRDbHN9LXBsYWNlbWVudC10b3AsXG4gICAgICAgICAgJiR7YW50Q2xzfS1zbGlkZS11cC1lbnRlciR7YW50Q2xzfS1zbGlkZS11cC1lbnRlci1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LXRvcFJpZ2h0LFxuICAgICAgICAgICYke2FudENsc30tc2xpZGUtdXAtYXBwZWFyJHthbnRDbHN9LXNsaWRlLXVwLWFwcGVhci1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LXRvcFJpZ2h0YF06IHtcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogc2xpZGVEb3duSW5cbiAgICAgIH0sXG4gICAgICBbYCYke2FudENsc30tc2xpZGUtZG93bi1sZWF2ZSR7YW50Q2xzfS1zbGlkZS1kb3duLWxlYXZlLWFjdGl2ZSR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtYm90dG9tTGVmdCxcbiAgICAgICAgICAmJHthbnRDbHN9LXNsaWRlLWRvd24tbGVhdmUke2FudENsc30tc2xpZGUtZG93bi1sZWF2ZS1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LWJvdHRvbSxcbiAgICAgICAgICAmJHthbnRDbHN9LXNsaWRlLWRvd24tbGVhdmUke2FudENsc30tc2xpZGUtZG93bi1sZWF2ZS1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LWJvdHRvbVJpZ2h0YF06IHtcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogc2xpZGVVcE91dFxuICAgICAgfSxcbiAgICAgIFtgJiR7YW50Q2xzfS1zbGlkZS11cC1sZWF2ZSR7YW50Q2xzfS1zbGlkZS11cC1sZWF2ZS1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LXRvcExlZnQsXG4gICAgICAgICAgJiR7YW50Q2xzfS1zbGlkZS11cC1sZWF2ZSR7YW50Q2xzfS1zbGlkZS11cC1sZWF2ZS1hY3RpdmUke2NvbXBvbmVudENsc30tcGxhY2VtZW50LXRvcCxcbiAgICAgICAgICAmJHthbnRDbHN9LXNsaWRlLXVwLWxlYXZlJHthbnRDbHN9LXNsaWRlLXVwLWxlYXZlLWFjdGl2ZSR7Y29tcG9uZW50Q2xzfS1wbGFjZW1lbnQtdG9wUmlnaHRgXToge1xuICAgICAgICBhbmltYXRpb25OYW1lOiBzbGlkZURvd25PdXRcbiAgICAgIH1cbiAgICB9KVxuICB9LCB7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vID09ICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51ICAgICAgICAgICAgICAgICAgICAgICAgICAgPT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgW2Ake2NvbXBvbmVudENsc30gJHttZW51Q2xzfWBdOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG1hcmdpbjogMFxuICAgIH0sXG4gICAgW2Ake21lbnVDbHN9LXN1Ym1lbnUtcG9wdXBgXToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6IHpJbmRleFBvcHVwLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICAgICd1bCwgbGknOiB7XG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgICBtYXJnaW46IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJHtjb21wb25lbnRDbHN9LCAke2NvbXBvbmVudENsc30tbWVudS1zdWJtZW51YF06IHtcbiAgICAgIFttZW51Q2xzXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZzogZHJvcGRvd25FZGdlQ2hpbGRQYWRkaW5nLFxuICAgICAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JCZ0VsZXZhdGVkLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3BhZGRpbmctYm94JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0b2tlbi5ib3JkZXJSYWRpdXNMRyxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBib3hTaGFkb3c6IHRva2VuLmJveFNoYWRvd1NlY29uZGFyeVxuICAgICAgfSwgZ2VuRm9jdXNTdHlsZSh0b2tlbikpLCB7XG4gICAgICAgIFtgJHttZW51Q2xzfS1pdGVtLWdyb3VwLXRpdGxlYF06IHtcbiAgICAgICAgICBwYWRkaW5nOiBgJHtkcm9wZG93blBhZGRpbmdWZXJ0aWNhbH1weCAke2NvbnRyb2xQYWRkaW5nSG9yaXpvbnRhbH1weGAsXG4gICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dERlc2NyaXB0aW9uLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHttb3Rpb25EdXJhdGlvbk1pZH1gXG4gICAgICAgIH0sXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09IEl0ZW0gQ29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBbYCR7bWVudUNsc30taXRlbWBdOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHttZW51Q2xzfS1pdGVtLWljb25gXToge1xuICAgICAgICAgIG1pbldpZHRoOiBmb250U2l6ZSxcbiAgICAgICAgICBtYXJnaW5JbmxpbmVFbmQ6IHRva2VuLm1hcmdpblhTLFxuICAgICAgICAgIGZvbnRTaXplOiB0b2tlbi5mb250U2l6ZVNNXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHttZW51Q2xzfS10aXRsZS1jb250ZW50YF06IHtcbiAgICAgICAgICBmbGV4OiAnYXV0bycsXG4gICAgICAgICAgJz4gYSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBgYWxsICR7bW90aW9uRHVyYXRpb25NaWR9YCxcbiAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgaW5zZXQ6IDAsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IEl0ZW0gPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIFtgJHttZW51Q2xzfS1pdGVtLCAke21lbnVDbHN9LXN1Ym1lbnUtdGl0bGVgXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiBgJHtkcm9wZG93blBhZGRpbmdWZXJ0aWNhbH1weCAke2NvbnRyb2xQYWRkaW5nSG9yaXpvbnRhbH1weGAsXG4gICAgICAgICAgY29sb3I6IHRva2VuLmNvbG9yVGV4dCxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgICBmb250U2l6ZSxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiB0b2tlbi5saW5lSGVpZ2h0LFxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHttb3Rpb25EdXJhdGlvbk1pZH1gLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogdG9rZW4uYm9yZGVyUmFkaXVzU00sXG4gICAgICAgICAgW2AmOmhvdmVyLCAmLWFjdGl2ZWBdOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbnRyb2xJdGVtQmdIb3ZlclxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZ2VuRm9jdXNTdHlsZSh0b2tlbikpLCB7XG4gICAgICAgICAgJyYtc2VsZWN0ZWQnOiB7XG4gICAgICAgICAgICBjb2xvcjogdG9rZW4uY29sb3JQcmltYXJ5LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b2tlbi5jb250cm9sSXRlbUJnQWN0aXZlLFxuICAgICAgICAgICAgJyY6aG92ZXIsICYtYWN0aXZlJzoge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbnRyb2xJdGVtQmdBY3RpdmVIb3ZlclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyYtZGlzYWJsZWQnOiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3JUZXh0RGlzYWJsZWQsXG4gICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgY29sb3I6IGNvbG9yVGV4dERpc2FibGVkLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yQmdFbGV2YXRlZCxcbiAgICAgICAgICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICcmLWRpdmlkZXInOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICBtYXJnaW46IGAke3Rva2VuLm1hcmdpblhYU31weCAwYCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRva2VuLmNvbG9yU3BsaXRcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJHtjb21wb25lbnRDbHN9LW1lbnUtc3VibWVudS1leHBhbmQtaWNvbmBdOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGluc2V0SW5saW5lRW5kOiB0b2tlbi5wYWRkaW5nWFMsXG4gICAgICAgICAgICBbYCR7Y29tcG9uZW50Q2xzfS1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvbmBdOiB7XG4gICAgICAgICAgICAgIG1hcmdpbklubGluZUVuZDogJzAgIWltcG9ydGFudCcsXG4gICAgICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclRleHREZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgZm9udFNpemU6IGZvbnRTaXplSWNvbixcbiAgICAgICAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFtgJHttZW51Q2xzfS1pdGVtLWdyb3VwLWxpc3RgXToge1xuICAgICAgICAgIG1hcmdpbjogYDAgJHt0b2tlbi5tYXJnaW5YU31weGAsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBsaXN0U3R5bGU6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBbYCR7bWVudUNsc30tc3VibWVudS10aXRsZWBdOiB7XG4gICAgICAgICAgcGFkZGluZ0lubGluZUVuZDogY29udHJvbFBhZGRpbmdIb3Jpem9udGFsICsgdG9rZW4uZm9udFNpemVTTVxuICAgICAgICB9LFxuICAgICAgICBbYCR7bWVudUNsc30tc3VibWVudS12ZXJ0aWNhbGBdOiB7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgfSxcbiAgICAgICAgW2Ake21lbnVDbHN9LXN1Ym1lbnUke21lbnVDbHN9LXN1Ym1lbnUtZGlzYWJsZWQgJHtjb21wb25lbnRDbHN9LW1lbnUtc3VibWVudS10aXRsZWBdOiB7XG4gICAgICAgICAgW2AmLCAke2NvbXBvbmVudENsc30tbWVudS1zdWJtZW51LWFycm93LWljb25gXToge1xuICAgICAgICAgICAgY29sb3I6IGNvbG9yVGV4dERpc2FibGVkLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvckJnRWxldmF0ZWQsXG4gICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE5MjY0XG4gICAgICAgIFtgJHttZW51Q2xzfS1zdWJtZW51LXNlbGVjdGVkICR7Y29tcG9uZW50Q2xzfS1tZW51LXN1Ym1lbnUtdGl0bGVgXToge1xuICAgICAgICAgIGNvbG9yOiB0b2tlbi5jb2xvclByaW1hcnlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIC8vIEZvbGxvdyBjb2RlIG1heSByZXVzZSBpbiBvdGhlciBjb21wb25lbnRzXG4gIFtpbml0U2xpZGVNb3Rpb24odG9rZW4sICdzbGlkZS11cCcpLCBpbml0U2xpZGVNb3Rpb24odG9rZW4sICdzbGlkZS1kb3duJyksIGluaXRNb3ZlTW90aW9uKHRva2VuLCAnbW92ZS11cCcpLCBpbml0TW92ZU1vdGlvbih0b2tlbiwgJ21vdmUtZG93bicpLCBpbml0Wm9vbU1vdGlvbih0b2tlbiwgJ3pvb20tYmlnJyldXTtcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRXhwb3J0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGRlZmF1bHQgZ2VuQ29tcG9uZW50U3R5bGVIb29rKCdEcm9wZG93bicsICh0b2tlbiwgX3JlZikgPT4ge1xuICBsZXQge1xuICAgIHJvb3RQcmVmaXhDbHNcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBtYXJnaW5YWFMsXG4gICAgc2l6ZVBvcHVwQXJyb3csXG4gICAgY29udHJvbEhlaWdodCxcbiAgICBmb250U2l6ZSxcbiAgICBsaW5lSGVpZ2h0LFxuICAgIHBhZGRpbmdYWFMsXG4gICAgY29tcG9uZW50Q2xzLFxuICAgIGJvcmRlclJhZGl1c091dGVyLFxuICAgIGJvcmRlclJhZGl1c0xHXG4gIH0gPSB0b2tlbjtcbiAgY29uc3QgZHJvcGRvd25QYWRkaW5nVmVydGljYWwgPSAoY29udHJvbEhlaWdodCAtIGZvbnRTaXplICogbGluZUhlaWdodCkgLyAyO1xuICBjb25zdCB7XG4gICAgZHJvcGRvd25BcnJvd09mZnNldFxuICB9ID0gZ2V0QXJyb3dPZmZzZXQoe1xuICAgIHNpemVQb3B1cEFycm93LFxuICAgIGNvbnRlbnRSYWRpdXM6IGJvcmRlclJhZGl1c0xHLFxuICAgIGJvcmRlclJhZGl1c091dGVyXG4gIH0pO1xuICBjb25zdCBkcm9wZG93blRva2VuID0gbWVyZ2VUb2tlbih0b2tlbiwge1xuICAgIG1lbnVDbHM6IGAke2NvbXBvbmVudENsc30tbWVudWAsXG4gICAgcm9vdFByZWZpeENscyxcbiAgICBkcm9wZG93bkFycm93RGlzdGFuY2U6IHNpemVQb3B1cEFycm93IC8gMiArIG1hcmdpblhYUyxcbiAgICBkcm9wZG93bkFycm93T2Zmc2V0LFxuICAgIGRyb3Bkb3duUGFkZGluZ1ZlcnRpY2FsLFxuICAgIGRyb3Bkb3duRWRnZUNoaWxkUGFkZGluZzogcGFkZGluZ1hYU1xuICB9KTtcbiAgcmV0dXJuIFtnZW5CYXNlU3R5bGUoZHJvcGRvd25Ub2tlbiksIGdlbkJ1dHRvblN0eWxlKGRyb3Bkb3duVG9rZW4pLCBnZW5TdGF0dXNTdHlsZShkcm9wZG93blRva2VuKV07XG59LCB0b2tlbiA9PiAoe1xuICB6SW5kZXhQb3B1cDogdG9rZW4uekluZGV4UG9wdXBCYXNlICsgNTBcbn0pKTsiLCJ2YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRWxsaXBzaXNPdXRsaW5lZCBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnMvZXMvaWNvbnMvRWxsaXBzaXNPdXRsaW5lZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgU3BhY2UgZnJvbSAnLi4vc3BhY2UnO1xuaW1wb3J0IHsgdXNlQ29tcGFjdEl0ZW1Db250ZXh0IH0gZnJvbSAnLi4vc3BhY2UvQ29tcGFjdCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBEcm9wZG93bkJ1dHRvbiA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRDb250ZXh0UG9wdXBDb250YWluZXIsXG4gICAgZ2V0UHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvblxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgICB0eXBlID0gJ2RlZmF1bHQnLFxuICAgICAgZGFuZ2VyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsb2FkaW5nLFxuICAgICAgb25DbGljayxcbiAgICAgIGh0bWxUeXBlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBtZW51LFxuICAgICAgYXJyb3csXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBvdmVybGF5LFxuICAgICAgdHJpZ2dlcixcbiAgICAgIGFsaWduLFxuICAgICAgb3BlbixcbiAgICAgIG9uT3BlbkNoYW5nZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgaHJlZixcbiAgICAgIGljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGxpcHNpc091dGxpbmVkLCBudWxsKSxcbiAgICAgIHRpdGxlLFxuICAgICAgYnV0dG9uc1JlbmRlciA9IGJ1dHRvbnMgPT4gYnV0dG9ucyxcbiAgICAgIG1vdXNlRW50ZXJEZWxheSxcbiAgICAgIG1vdXNlTGVhdmVEZWxheSxcbiAgICAgIG92ZXJsYXlDbGFzc05hbWUsXG4gICAgICBvdmVybGF5U3R5bGUsXG4gICAgICBkZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICBkcm9wZG93blJlbmRlclxuICAgIH0gPSBwcm9wcyxcbiAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJkYW5nZXJcIiwgXCJkaXNhYmxlZFwiLCBcImxvYWRpbmdcIiwgXCJvbkNsaWNrXCIsIFwiaHRtbFR5cGVcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcIm1lbnVcIiwgXCJhcnJvd1wiLCBcImF1dG9Gb2N1c1wiLCBcIm92ZXJsYXlcIiwgXCJ0cmlnZ2VyXCIsIFwiYWxpZ25cIiwgXCJvcGVuXCIsIFwib25PcGVuQ2hhbmdlXCIsIFwicGxhY2VtZW50XCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIiwgXCJocmVmXCIsIFwiaWNvblwiLCBcInRpdGxlXCIsIFwiYnV0dG9uc1JlbmRlclwiLCBcIm1vdXNlRW50ZXJEZWxheVwiLCBcIm1vdXNlTGVhdmVEZWxheVwiLCBcIm92ZXJsYXlDbGFzc05hbWVcIiwgXCJvdmVybGF5U3R5bGVcIiwgXCJkZXN0cm95UG9wdXBPbkhpZGVcIiwgXCJkcm9wZG93blJlbmRlclwiXSk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnZHJvcGRvd24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICBjb25zdCBidXR0b25QcmVmaXhDbHMgPSBgJHtwcmVmaXhDbHN9LWJ1dHRvbmA7XG4gIGNvbnN0IFt3cmFwU1NSLCBoYXNoSWRdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3QgZHJvcGRvd25Qcm9wcyA9IHtcbiAgICBtZW51LFxuICAgIGFycm93LFxuICAgIGF1dG9Gb2N1cyxcbiAgICBhbGlnbixcbiAgICBkaXNhYmxlZCxcbiAgICB0cmlnZ2VyOiBkaXNhYmxlZCA/IFtdIDogdHJpZ2dlcixcbiAgICBvbk9wZW5DaGFuZ2UsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIHx8IGdldENvbnRleHRQb3B1cENvbnRhaW5lcixcbiAgICBtb3VzZUVudGVyRGVsYXksXG4gICAgbW91c2VMZWF2ZURlbGF5LFxuICAgIG92ZXJsYXlDbGFzc05hbWUsXG4gICAgb3ZlcmxheVN0eWxlLFxuICAgIGRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICBkcm9wZG93blJlbmRlclxuICB9O1xuICBjb25zdCB7XG4gICAgY29tcGFjdFNpemUsXG4gICAgY29tcGFjdEl0ZW1DbGFzc25hbWVzXG4gIH0gPSB1c2VDb21wYWN0SXRlbUNvbnRleHQocHJlZml4Q2xzLCBkaXJlY3Rpb24pO1xuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhidXR0b25QcmVmaXhDbHMsIGNvbXBhY3RJdGVtQ2xhc3NuYW1lcywgY2xhc3NOYW1lLCBoYXNoSWQpO1xuICBpZiAoJ292ZXJsYXknIGluIHByb3BzKSB7XG4gICAgZHJvcGRvd25Qcm9wcy5vdmVybGF5ID0gb3ZlcmxheTtcbiAgfVxuICBpZiAoJ29wZW4nIGluIHByb3BzKSB7XG4gICAgZHJvcGRvd25Qcm9wcy5vcGVuID0gb3BlbjtcbiAgfVxuICBpZiAoJ3BsYWNlbWVudCcgaW4gcHJvcHMpIHtcbiAgICBkcm9wZG93blByb3BzLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgfSBlbHNlIHtcbiAgICBkcm9wZG93blByb3BzLnBsYWNlbWVudCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnYm90dG9tTGVmdCcgOiAnYm90dG9tUmlnaHQnO1xuICB9XG4gIGNvbnN0IGxlZnRCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRhbmdlcjogZGFuZ2VyLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgaHRtbFR5cGU6IGh0bWxUeXBlLFxuICAgIGhyZWY6IGhyZWYsXG4gICAgdGl0bGU6IHRpdGxlXG4gIH0sIGNoaWxkcmVuKTtcbiAgY29uc3QgcmlnaHRCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRhbmdlcjogZGFuZ2VyLFxuICAgIGljb246IGljb25cbiAgfSk7XG4gIGNvbnN0IFtsZWZ0QnV0dG9uVG9SZW5kZXIsIHJpZ2h0QnV0dG9uVG9SZW5kZXJdID0gYnV0dG9uc1JlbmRlcihbbGVmdEJ1dHRvbiwgcmlnaHRCdXR0b25dKTtcbiAgcmV0dXJuIHdyYXBTU1IoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNwYWNlLkNvbXBhY3QsIE9iamVjdC5hc3NpZ24oe1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICBzaXplOiBjb21wYWN0U2l6ZSxcbiAgICBibG9jazogdHJ1ZVxuICB9LCByZXN0UHJvcHMpLCBsZWZ0QnV0dG9uVG9SZW5kZXIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duLCBPYmplY3QuYXNzaWduKHt9LCBkcm9wZG93blByb3BzKSwgcmlnaHRCdXR0b25Ub1JlbmRlcikpKTtcbn07XG5Ecm9wZG93bkJ1dHRvbi5fX0FOVF9CVVRUT04gPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25CdXR0b247IiwiaW1wb3J0IFJpZ2h0T3V0bGluZWQgZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zL2VzL2ljb25zL1JpZ2h0T3V0bGluZWRcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJjRHJvcGRvd24gZnJvbSAncmMtZHJvcGRvd24nO1xuaW1wb3J0IHVzZUV2ZW50IGZyb20gXCJyYy11dGlsL2VzL2hvb2tzL3VzZUV2ZW50XCI7XG5pbXBvcnQgdXNlTWVyZ2VkU3RhdGUgZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTWVyZ2VkU3RhdGVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51IGZyb20gJy4uL21lbnUnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgeyBPdmVycmlkZVByb3ZpZGVyIH0gZnJvbSAnLi4vbWVudS9PdmVycmlkZUNvbnRleHQnO1xuaW1wb3J0IGdlblB1cmVQYW5lbCBmcm9tICcuLi9fdXRpbC9QdXJlUGFuZWwnO1xuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSAnLi4vX3V0aWwvcGxhY2VtZW50cyc7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tICcuLi9fdXRpbC9yZWFjdE5vZGUnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5pbXBvcnQgeyBOb0NvbXBhY3RTdHlsZSB9IGZyb20gJy4uL3NwYWNlL0NvbXBhY3QnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vZHJvcGRvd24tYnV0dG9uJztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IFBsYWNlbWVudHMgPSBbJ3RvcExlZnQnLCAndG9wQ2VudGVyJywgJ3RvcFJpZ2h0JywgJ2JvdHRvbUxlZnQnLCAnYm90dG9tQ2VudGVyJywgJ2JvdHRvbVJpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcbmNvbnN0IERyb3Bkb3duID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldENvbnRleHRQb3B1cENvbnRhaW5lcixcbiAgICBnZXRQcmVmaXhDbHMsXG4gICAgZGlyZWN0aW9uXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICAvLyBXYXJuaW5nIGZvciBkZXByZWNhdGVkIHVzYWdlXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgW1sndmlzaWJsZScsICdvcGVuJ10sIFsnb25WaXNpYmxlQ2hhbmdlJywgJ29uT3BlbkNoYW5nZSddXS5mb3JFYWNoKF9yZWYgPT4ge1xuICAgICAgbGV0IFtkZXByZWNhdGVkTmFtZSwgbmV3TmFtZV0gPSBfcmVmO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKGRlcHJlY2F0ZWROYW1lIGluIHByb3BzKSwgJ0Ryb3Bkb3duJywgYFxcYCR7ZGVwcmVjYXRlZE5hbWV9XFxgIGlzIGRlcHJlY2F0ZWQgd2hpY2ggd2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgcGxlYXNlIHVzZSBcXGAke25ld05hbWV9XFxgIGluc3RlYWQuYCkgOiB2b2lkIDA7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKCdvdmVybGF5JyBpbiBwcm9wcyksICdEcm9wZG93bicsICdgb3ZlcmxheWAgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgbWVudWAgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgfVxuICBjb25zdCBnZXRUcmFuc2l0aW9uTmFtZSA9ICgpID0+IHtcbiAgICBjb25zdCByb290UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCk7XG4gICAgY29uc3Qge1xuICAgICAgcGxhY2VtZW50ID0gJycsXG4gICAgICB0cmFuc2l0aW9uTmFtZVxuICAgIH0gPSBwcm9wcztcbiAgICBpZiAodHJhbnNpdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgIH1cbiAgICBpZiAocGxhY2VtZW50LmluY2x1ZGVzKCd0b3AnKSkge1xuICAgICAgcmV0dXJuIGAke3Jvb3RQcmVmaXhDbHN9LXNsaWRlLWRvd25gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdFByZWZpeENsc30tc2xpZGUtdXBgO1xuICB9O1xuICBjb25zdCBnZXRQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcGxhY2VtZW50XG4gICAgfSA9IHByb3BzO1xuICAgIGlmICghcGxhY2VtZW50KSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAncnRsJyA/ICdib3R0b21SaWdodCcgOiAnYm90dG9tTGVmdCc7XG4gICAgfVxuICAgIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoJ0NlbnRlcicpKSB7XG4gICAgICBjb25zdCBuZXdQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc2xpY2UoMCwgcGxhY2VtZW50LmluZGV4T2YoJ0NlbnRlcicpKTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXBsYWNlbWVudC5pbmNsdWRlcygnQ2VudGVyJyksICdEcm9wZG93bicsIGBZb3UgYXJlIHVzaW5nICcke3BsYWNlbWVudH0nIHBsYWNlbWVudCBpbiBEcm9wZG93biwgd2hpY2ggaXMgZGVwcmVjYXRlZC4gVHJ5IHRvIHVzZSAnJHtuZXdQbGFjZW1lbnR9JyBpbnN0ZWFkLmApIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIG5ld1BsYWNlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfTtcbiAgY29uc3Qge1xuICAgIG1lbnUsXG4gICAgYXJyb3csXG4gICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgY2hpbGRyZW4sXG4gICAgdHJpZ2dlcixcbiAgICBkaXNhYmxlZCxcbiAgICBkcm9wZG93blJlbmRlcixcbiAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICBvdmVybGF5Q2xhc3NOYW1lLFxuICAgIG9wZW4sXG4gICAgb25PcGVuQ2hhbmdlLFxuICAgIC8vIERlcHJlY2F0ZWRcbiAgICB2aXNpYmxlLFxuICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICBtb3VzZUVudGVyRGVsYXkgPSAwLjE1LFxuICAgIG1vdXNlTGVhdmVEZWxheSA9IDAuMVxuICB9ID0gcHJvcHM7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgW1sndmlzaWJsZScsICdvcGVuJ10sIFsnb25WaXNpYmxlQ2hhbmdlJywgJ29uT3BlbkNoYW5nZSddXS5mb3JFYWNoKF9yZWYyID0+IHtcbiAgICAgIGxldCBbZGVwcmVjYXRlZE5hbWUsIG5ld05hbWVdID0gX3JlZjI7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEoZGVwcmVjYXRlZE5hbWUgaW4gcHJvcHMpLCAnRHJvcGRvd24nLCBgXFxgJHtkZXByZWNhdGVkTmFtZX1cXGAgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcXGAke25ld05hbWV9XFxgIGluc3RlYWQuYCkgOiB2b2lkIDA7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdkcm9wZG93bicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIGNvbnN0IFt3cmFwU1NSLCBoYXNoSWRdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3QgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgY29uc3QgZHJvcGRvd25UcmlnZ2VyID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGAke3ByZWZpeENsc30tdHJpZ2dlcmAsIHtcbiAgICAgIFtgJHtwcmVmaXhDbHN9LXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnXG4gICAgfSwgY2hpbGQucHJvcHMuY2xhc3NOYW1lKSxcbiAgICBkaXNhYmxlZFxuICB9KTtcbiAgY29uc3QgdHJpZ2dlckFjdGlvbnMgPSBkaXNhYmxlZCA/IFtdIDogdHJpZ2dlcjtcbiAgbGV0IGFsaWduUG9pbnQ7XG4gIGlmICh0cmlnZ2VyQWN0aW9ucyAmJiB0cmlnZ2VyQWN0aW9ucy5pbmNsdWRlcygnY29udGV4dE1lbnUnKSkge1xuICAgIGFsaWduUG9pbnQgPSB0cnVlO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBPcGVuID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgW21lcmdlZE9wZW4sIHNldE9wZW5dID0gdXNlTWVyZ2VkU3RhdGUoZmFsc2UsIHtcbiAgICB2YWx1ZTogb3BlbiAhPT0gbnVsbCAmJiBvcGVuICE9PSB2b2lkIDAgPyBvcGVuIDogdmlzaWJsZVxuICB9KTtcbiAgY29uc3Qgb25Jbm5lck9wZW5DaGFuZ2UgPSB1c2VFdmVudChuZXh0T3BlbiA9PiB7XG4gICAgb25PcGVuQ2hhbmdlID09PSBudWxsIHx8IG9uT3BlbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25PcGVuQ2hhbmdlKG5leHRPcGVuKTtcbiAgICBvblZpc2libGVDaGFuZ2UgPT09IG51bGwgfHwgb25WaXNpYmxlQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblZpc2libGVDaGFuZ2UobmV4dE9wZW4pO1xuICAgIHNldE9wZW4obmV4dE9wZW4pO1xuICB9KTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IE92ZXJsYXkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBvdmVybGF5Q2xhc3NOYW1lQ3VzdG9taXplZCA9IGNsYXNzTmFtZXMob3ZlcmxheUNsYXNzTmFtZSwgaGFzaElkLCB7XG4gICAgW2Ake3ByZWZpeENsc30tcnRsYF06IGRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgfSk7XG4gIGNvbnN0IGJ1aWx0aW5QbGFjZW1lbnRzID0gZ2V0UGxhY2VtZW50cyh7XG4gICAgYXJyb3dQb2ludEF0Q2VudGVyOiB0eXBlb2YgYXJyb3cgPT09ICdvYmplY3QnICYmIGFycm93LnBvaW50QXRDZW50ZXIsXG4gICAgYXV0b0FkanVzdE92ZXJmbG93OiB0cnVlXG4gIH0pO1xuICBjb25zdCBvbk1lbnVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfSwgW10pO1xuICBjb25zdCByZW5kZXJPdmVybGF5ID0gKCkgPT4ge1xuICAgIC8vIHJjLWRyb3Bkb3duIGFscmVhZHkgY2FuIHByb2Nlc3MgdGhlIGZ1bmN0aW9uIG9mIG92ZXJsYXksIGJ1dCB3ZSBoYXZlIGNoZWNrIGxvZ2ljIGhlcmUuXG4gICAgLy8gU28gd2UgbmVlZCByZW5kZXIgdGhlIGVsZW1lbnQgdG8gY2hlY2sgYW5kIHBhc3MgYmFjayB0byByYy1kcm9wZG93bi5cbiAgICBjb25zdCB7XG4gICAgICBvdmVybGF5XG4gICAgfSA9IHByb3BzO1xuICAgIGxldCBvdmVybGF5Tm9kZTtcbiAgICBpZiAobWVudSA9PT0gbnVsbCB8fCBtZW51ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51Lml0ZW1zKSB7XG4gICAgICBvdmVybGF5Tm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIE9iamVjdC5hc3NpZ24oe30sIG1lbnUpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvdmVybGF5Tm9kZSA9IG92ZXJsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheU5vZGUgPSBvdmVybGF5O1xuICAgIH1cbiAgICBpZiAoZHJvcGRvd25SZW5kZXIpIHtcbiAgICAgIG92ZXJsYXlOb2RlID0gZHJvcGRvd25SZW5kZXIob3ZlcmxheU5vZGUpO1xuICAgIH1cbiAgICBvdmVybGF5Tm9kZSA9IFJlYWN0LkNoaWxkcmVuLm9ubHkodHlwZW9mIG92ZXJsYXlOb2RlID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBvdmVybGF5Tm9kZSkgOiBvdmVybGF5Tm9kZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE92ZXJyaWRlUHJvdmlkZXIsIHtcbiAgICAgIHByZWZpeENsczogYCR7cHJlZml4Q2xzfS1tZW51YCxcbiAgICAgIGV4cGFuZEljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4Q2xzfS1tZW51LXN1Ym1lbnUtYXJyb3dgXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSaWdodE91dGxpbmVkLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4Q2xzfS1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvbmBcbiAgICAgIH0pKSxcbiAgICAgIG1vZGU6IFwidmVydGljYWxcIixcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgb25DbGljazogb25NZW51Q2xpY2ssXG4gICAgICB2YWxpZGF0b3I6IF9yZWYzID0+IHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBtb2RlXG4gICAgICAgIH0gPSBfcmVmMztcbiAgICAgICAgLy8gV2FybmluZyBpZiB1c2Ugb3RoZXIgbW9kZVxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFtb2RlIHx8IG1vZGUgPT09ICd2ZXJ0aWNhbCcsICdEcm9wZG93bicsIGBtb2RlPVwiJHttb2RlfVwiIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIERyb3Bkb3duJ3MgTWVudS5gKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOb0NvbXBhY3RTdHlsZSwgbnVsbCwgb3ZlcmxheU5vZGUpKTtcbiAgfTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICByZXR1cm4gd3JhcFNTUiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmNEcm9wZG93biwgT2JqZWN0LmFzc2lnbih7XG4gICAgYWxpZ25Qb2ludDogYWxpZ25Qb2ludFxuICB9LCBwcm9wcywge1xuICAgIG1vdXNlRW50ZXJEZWxheTogbW91c2VFbnRlckRlbGF5LFxuICAgIG1vdXNlTGVhdmVEZWxheTogbW91c2VMZWF2ZURlbGF5LFxuICAgIHZpc2libGU6IG1lcmdlZE9wZW4sXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IGJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgIGFycm93OiAhIWFycm93LFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IG92ZXJsYXlDbGFzc05hbWVDdXN0b21pemVkLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRDb250ZXh0UG9wdXBDb250YWluZXIsXG4gICAgdHJhbnNpdGlvbk5hbWU6IGdldFRyYW5zaXRpb25OYW1lKCksXG4gICAgdHJpZ2dlcjogdHJpZ2dlckFjdGlvbnMsXG4gICAgb3ZlcmxheTogcmVuZGVyT3ZlcmxheSxcbiAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCgpLFxuICAgIG9uVmlzaWJsZUNoYW5nZTogb25Jbm5lck9wZW5DaGFuZ2VcbiAgfSksIGRyb3Bkb3duVHJpZ2dlcikpO1xufTtcbkRyb3Bkb3duLkJ1dHRvbiA9IERyb3Bkb3duQnV0dG9uO1xuLy8gV2UgZG9uJ3QgY2FyZSBkZWJ1ZyBwYW5lbFxuY29uc3QgUHVyZVBhbmVsID0gZ2VuUHVyZVBhbmVsKERyb3Bkb3duLCAnZHJvcGRvd24nLCBwcmVmaXhDbHMgPT4gcHJlZml4Q2xzKTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBXcmFwUHVyZVBhbmVsID0gcHJvcHMgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUHVyZVBhbmVsLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsKSk7XG5Ecm9wZG93bi5fSW50ZXJuYWxQYW5lbERvTm90VXNlT3JZb3VXaWxsQmVGaXJlZCA9IFdyYXBQdXJlUGFuZWw7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBEcm9wZG93bi5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bic7XG59XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///42409
`)},13013:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42409);

/* harmony default export */ __webpack_exports__["Z"] = (_dropdown__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMwMTMuanMiLCJtYXBwaW5ncyI6IjtBQUFrQztBQUNsQyx5REFBZSwwREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2Ryb3Bkb3duL2luZGV4LmpzPzA5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///13013
`)},26713:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": function() { return /* binding */ SpaceContext; },
  "Z": function() { return /* binding */ space; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js
var useFlexGapSupport = __webpack_require__(98082);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/Item.js


function Item(_ref) {
  let {
    className,
    direction,
    index,
    marginDirection,
    children,
    split,
    wrap
  } = _ref;
  const {
    horizontalSize,
    verticalSize,
    latestIndex,
    supportFlexGap
  } = react.useContext(SpaceContext);
  let style = {};
  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = {
          marginBottom: horizontalSize / (split ? 2 : 1)
        };
      }
    } else {
      style = Object.assign(Object.assign({}, index < latestIndex && {
        [marginDirection]: horizontalSize / (split ? 2 : 1)
      }), wrap && {
        paddingBottom: verticalSize
      });
    }
  }
  if (children === null || children === undefined) {
    return null;
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/react.createElement("span", {
    className: \`\${className}-split\`,
    style: style
  }, split));
}
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(4173);
// EXTERNAL MODULE: ./node_modules/antd/es/space/style/index.js + 1 modules
var space_style = __webpack_require__(51916);
;// CONCATENATED MODULE: ./node_modules/antd/es/space/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








const SpaceContext = /*#__PURE__*/react.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});
const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}
const Space = props => {
  const {
    getPrefixCls,
    space,
    direction: directionConfig
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      size = (space === null || space === void 0 ? void 0 : space.size) || 'small',
      align,
      className,
      children,
      direction = 'horizontal',
      prefixCls: customizePrefixCls,
      split,
      style,
      wrap = false
    } = props,
    otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls", "split", "style", "wrap"]);
  const supportFlexGap = (0,useFlexGapSupport/* default */.Z)();
  const [horizontalSize, verticalSize] = react.useMemo(() => (Array.isArray(size) ? size : [size, size]).map(item => getNumberSize(item)), [size]);
  const childNodes = (0,toArray/* default */.Z)(children, {
    keepEmpty: true
  });
  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapSSR, hashId] = (0,space_style/* default */.Z)(prefixCls);
  const cn = classnames_default()(prefixCls, hashId, \`\${prefixCls}-\${direction}\`, {
    [\`\${prefixCls}-rtl\`]: directionConfig === 'rtl',
    [\`\${prefixCls}-align-\${mergedAlign}\`]: mergedAlign
  }, className);
  const itemClassName = \`\${prefixCls}-item\`;
  const marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = child && child.key || \`\${itemClassName}-\${i}\`;
    return /*#__PURE__*/react.createElement(Item, {
      className: itemClassName,
      key: key,
      direction: direction,
      index: i,
      marginDirection: marginDirection,
      split: split,
      wrap: wrap
    }, child);
  });
  const spaceContext = react.useMemo(() => ({
    horizontalSize,
    verticalSize,
    latestIndex,
    supportFlexGap
  }), [horizontalSize, verticalSize, latestIndex, supportFlexGap]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle = {};
  if (wrap) {
    gapStyle.flexWrap = 'wrap';
    // Patch for gap not support
    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }
  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }
  return wrapSSR( /*#__PURE__*/react.createElement("div", Object.assign({
    className: cn,
    style: Object.assign(Object.assign({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/react.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes)));
};
if (false) {}
const CompoundedSpace = Space;
CompoundedSpace.Compact = Compact/* default */.ZP;
/* harmony default export */ var space = (CompoundedSpace);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY3MTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBQ2xCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0Q0FBNEM7QUFDNUM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUIsQ0FBQyxjQUFjLHFCQUFxQixtQkFBbUI7QUFDaEc7QUFDQTtBQUNBLEdBQUcsMERBQTBELG1CQUFtQjtBQUNoRixrQkFBa0IsVUFBVTtBQUM1QjtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7QUM1Q0EsYUFBYSxTQUFJLElBQUksU0FBSTtBQUN6QjtBQUNBO0FBQ0EsNEhBQTRILGNBQWM7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7QUFDYztBQUNuQjtBQUNvQjtBQUNjO0FBQ3ZDO0FBQ007QUFDRDtBQUN4QixrQ0FBa0MsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxFQUFFLGdCQUFnQixDQUFDLDZCQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EseUJBQXlCLG9DQUFpQjtBQUMxQyx5Q0FBeUMsYUFBYTtBQUN0RCxxQkFBcUIsMEJBQU87QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDRCQUE0Qiw4QkFBUTtBQUNwQyxhQUFhLG9CQUFVLHVCQUF1QixVQUFVLEdBQUcsVUFBVTtBQUNyRSxRQUFRLFVBQVU7QUFDbEIsUUFBUSxVQUFVLFNBQVMsWUFBWTtBQUN2QyxHQUFHO0FBQ0gsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYyxHQUFHLEVBQUU7QUFDNUQsd0JBQXdCLG1CQUFtQixDQUFDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQjtBQUNsRDtBQUNBLHlDQUF5QztBQUN6QyxHQUFHLDRCQUE0QixtQkFBbUI7QUFDbEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRDtBQUNBLDBCQUEwQix1QkFBTztBQUNqQywwQ0FBZSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3BhY2UvSXRlbS5qcz81ZDZhIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NwYWNlL2luZGV4LmpzP2M2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3BhY2VDb250ZXh0IH0gZnJvbSAnLic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgZGlyZWN0aW9uLFxuICAgIGluZGV4LFxuICAgIG1hcmdpbkRpcmVjdGlvbixcbiAgICBjaGlsZHJlbixcbiAgICBzcGxpdCxcbiAgICB3cmFwXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgaG9yaXpvbnRhbFNpemUsXG4gICAgdmVydGljYWxTaXplLFxuICAgIGxhdGVzdEluZGV4LFxuICAgIHN1cHBvcnRGbGV4R2FwXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFNwYWNlQ29udGV4dCk7XG4gIGxldCBzdHlsZSA9IHt9O1xuICBpZiAoIXN1cHBvcnRGbGV4R2FwKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKGluZGV4IDwgbGF0ZXN0SW5kZXgpIHtcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBob3Jpem9udGFsU2l6ZSAvIChzcGxpdCA/IDIgOiAxKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5kZXggPCBsYXRlc3RJbmRleCAmJiB7XG4gICAgICAgIFttYXJnaW5EaXJlY3Rpb25dOiBob3Jpem9udGFsU2l6ZSAvIChzcGxpdCA/IDIgOiAxKVxuICAgICAgfSksIHdyYXAgJiYge1xuICAgICAgICBwYWRkaW5nQm90dG9tOiB2ZXJ0aWNhbFNpemVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwgfHwgY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBjaGlsZHJlbiksIGluZGV4IDwgbGF0ZXN0SW5kZXggJiYgc3BsaXQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGAke2NsYXNzTmFtZX0tc3BsaXRgLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBzcGxpdCkpO1xufSIsInZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IHVzZUZsZXhHYXBTdXBwb3J0IGZyb20gJy4uL191dGlsL2hvb2tzL3VzZUZsZXhHYXBTdXBwb3J0JztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG5pbXBvcnQgQ29tcGFjdCBmcm9tICcuL0NvbXBhY3QnO1xuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUnO1xuZXhwb3J0IGNvbnN0IFNwYWNlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgbGF0ZXN0SW5kZXg6IDAsXG4gIGhvcml6b250YWxTaXplOiAwLFxuICB2ZXJ0aWNhbFNpemU6IDAsXG4gIHN1cHBvcnRGbGV4R2FwOiBmYWxzZVxufSk7XG5jb25zdCBzcGFjZVNpemUgPSB7XG4gIHNtYWxsOiA4LFxuICBtaWRkbGU6IDE2LFxuICBsYXJnZTogMjRcbn07XG5mdW5jdGlvbiBnZXROdW1iZXJTaXplKHNpemUpIHtcbiAgcmV0dXJuIHR5cGVvZiBzaXplID09PSAnc3RyaW5nJyA/IHNwYWNlU2l6ZVtzaXplXSA6IHNpemUgfHwgMDtcbn1cbmNvbnN0IFNwYWNlID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgZ2V0UHJlZml4Q2xzLFxuICAgIHNwYWNlLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uQ29uZmlnXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICBjb25zdCB7XG4gICAgICBzaXplID0gKHNwYWNlID09PSBudWxsIHx8IHNwYWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzcGFjZS5zaXplKSB8fCAnc21hbGwnLFxuICAgICAgYWxpZ24sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJyxcbiAgICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzLFxuICAgICAgc3BsaXQsXG4gICAgICBzdHlsZSxcbiAgICAgIHdyYXAgPSBmYWxzZVxuICAgIH0gPSBwcm9wcyxcbiAgICBvdGhlclByb3BzID0gX19yZXN0KHByb3BzLCBbXCJzaXplXCIsIFwiYWxpZ25cIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImRpcmVjdGlvblwiLCBcInByZWZpeENsc1wiLCBcInNwbGl0XCIsIFwic3R5bGVcIiwgXCJ3cmFwXCJdKTtcbiAgY29uc3Qgc3VwcG9ydEZsZXhHYXAgPSB1c2VGbGV4R2FwU3VwcG9ydCgpO1xuICBjb25zdCBbaG9yaXpvbnRhbFNpemUsIHZlcnRpY2FsU2l6ZV0gPSBSZWFjdC51c2VNZW1vKCgpID0+IChBcnJheS5pc0FycmF5KHNpemUpID8gc2l6ZSA6IFtzaXplLCBzaXplXSkubWFwKGl0ZW0gPT4gZ2V0TnVtYmVyU2l6ZShpdGVtKSksIFtzaXplXSk7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSB0b0FycmF5KGNoaWxkcmVuLCB7XG4gICAga2VlcEVtcHR5OiB0cnVlXG4gIH0pO1xuICBjb25zdCBtZXJnZWRBbGlnbiA9IGFsaWduID09PSB1bmRlZmluZWQgJiYgZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAnY2VudGVyJyA6IGFsaWduO1xuICBjb25zdCBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NwYWNlJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgY29uc3QgW3dyYXBTU1IsIGhhc2hJZF0gPSB1c2VTdHlsZShwcmVmaXhDbHMpO1xuICBjb25zdCBjbiA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBoYXNoSWQsIGAke3ByZWZpeENsc30tJHtkaXJlY3Rpb259YCwge1xuICAgIFtgJHtwcmVmaXhDbHN9LXJ0bGBdOiBkaXJlY3Rpb25Db25maWcgPT09ICdydGwnLFxuICAgIFtgJHtwcmVmaXhDbHN9LWFsaWduLSR7bWVyZ2VkQWxpZ259YF06IG1lcmdlZEFsaWduXG4gIH0sIGNsYXNzTmFtZSk7XG4gIGNvbnN0IGl0ZW1DbGFzc05hbWUgPSBgJHtwcmVmaXhDbHN9LWl0ZW1gO1xuICBjb25zdCBtYXJnaW5EaXJlY3Rpb24gPSBkaXJlY3Rpb25Db25maWcgPT09ICdydGwnID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JztcbiAgLy8gQ2FsY3VsYXRlIGxhdGVzdCBvbmVcbiAgbGV0IGxhdGVzdEluZGV4ID0gMDtcbiAgY29uc3Qgbm9kZXMgPSBjaGlsZE5vZGVzLm1hcCgoY2hpbGQsIGkpID0+IHtcbiAgICBpZiAoY2hpbGQgIT09IG51bGwgJiYgY2hpbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGF0ZXN0SW5kZXggPSBpO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSBjaGlsZCAmJiBjaGlsZC5rZXkgfHwgYCR7aXRlbUNsYXNzTmFtZX0tJHtpfWA7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtcbiAgICAgIGNsYXNzTmFtZTogaXRlbUNsYXNzTmFtZSxcbiAgICAgIGtleToga2V5LFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBpbmRleDogaSxcbiAgICAgIG1hcmdpbkRpcmVjdGlvbjogbWFyZ2luRGlyZWN0aW9uLFxuICAgICAgc3BsaXQ6IHNwbGl0LFxuICAgICAgd3JhcDogd3JhcFxuICAgIH0sIGNoaWxkKTtcbiAgfSk7XG4gIGNvbnN0IHNwYWNlQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBob3Jpem9udGFsU2l6ZSxcbiAgICB2ZXJ0aWNhbFNpemUsXG4gICAgbGF0ZXN0SW5kZXgsXG4gICAgc3VwcG9ydEZsZXhHYXBcbiAgfSksIFtob3Jpem9udGFsU2l6ZSwgdmVydGljYWxTaXplLCBsYXRlc3RJbmRleCwgc3VwcG9ydEZsZXhHYXBdKTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZ2FwU3R5bGUgPSB7fTtcbiAgaWYgKHdyYXApIHtcbiAgICBnYXBTdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcbiAgICAvLyBQYXRjaCBmb3IgZ2FwIG5vdCBzdXBwb3J0XG4gICAgaWYgKCFzdXBwb3J0RmxleEdhcCkge1xuICAgICAgZ2FwU3R5bGUubWFyZ2luQm90dG9tID0gLXZlcnRpY2FsU2l6ZTtcbiAgICB9XG4gIH1cbiAgaWYgKHN1cHBvcnRGbGV4R2FwKSB7XG4gICAgZ2FwU3R5bGUuY29sdW1uR2FwID0gaG9yaXpvbnRhbFNpemU7XG4gICAgZ2FwU3R5bGUucm93R2FwID0gdmVydGljYWxTaXplO1xuICB9XG4gIHJldHVybiB3cmFwU1NSKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBjbGFzc05hbWU6IGNuLFxuICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdhcFN0eWxlKSwgc3R5bGUpXG4gIH0sIG90aGVyUHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3BhY2VDb250ZXh0XG4gIH0sIG5vZGVzKSkpO1xufTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFNwYWNlLmRpc3BsYXlOYW1lID0gJ1NwYWNlJztcbn1cbmNvbnN0IENvbXBvdW5kZWRTcGFjZSA9IFNwYWNlO1xuQ29tcG91bmRlZFNwYWNlLkNvbXBhY3QgPSBDb21wYWN0O1xuZXhwb3J0IGRlZmF1bHQgQ29tcG91bmRlZFNwYWNlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///26713
`)}}]);
