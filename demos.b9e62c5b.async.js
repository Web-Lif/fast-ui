"use strict";(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[2433],{90520:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_fast_ui_fast_ui_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27424);
/* harmony import */ var _home_runner_work_fast_ui_fast_ui_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_fast_ui_fast_ui_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _weblif_fast_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1662);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62435);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86074);


/**
 * title: \u57FA\u672C\u4F7F\u7528
 * description: \u57FA\u7840\u7528\u6CD5\u4FE1\u606F
 */



var Option = _weblif_fast_ui__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Option */ .Z.Option;

var SimpleAutoComplete = function SimpleAutoComplete() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _home_runner_work_fast_ui_fast_ui_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var handleSearch = function handleSearch(value) {
    var res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(function (domain) {
        return "".concat(value, "@").concat(domain);
      });
    }

    setResult(res);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_weblif_fast_ui__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    style: {
      width: 200
    },
    onSearch: handleSearch,
    placeholder: "\\u5728\\u6B64\\u8F93\\u5165",
    children: result.map(function (email) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Option, {
        value: email,
        children: email
      }, email);
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SimpleAutoComplete);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTA1MjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBUUUsTUFBUixHQUFtQkYsOEVBQW5COztBQUVBLElBQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtFQUM3QixnQkFBNEJGLCtDQUFRLENBQVcsRUFBWCxDQUFwQztFQUFBO0VBQUEsSUFBT0csTUFBUDtFQUFBLElBQWVDLFNBQWY7O0VBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFtQjtJQUNwQyxJQUFJQyxHQUFhLEdBQUcsRUFBcEI7O0lBQ0EsSUFBSSxDQUFDRCxLQUFELElBQVVBLEtBQUssQ0FBQ0UsT0FBTixDQUFjLEdBQWQsS0FBc0IsQ0FBcEMsRUFBdUM7TUFDbkNELEdBQUcsR0FBRyxFQUFOO0lBQ0gsQ0FGRCxNQUVPO01BQ0hBLEdBQUcsR0FBRyxDQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLFFBQXpCLEVBQW1DRSxHQUFuQyxDQUNGLFVBQUNDLE1BQUQ7UUFBQSxpQkFBZUosS0FBZixjQUF3QkksTUFBeEI7TUFBQSxDQURFLENBQU47SUFHSDs7SUFDRE4sU0FBUyxDQUFDRyxHQUFELENBQVQ7RUFDSCxDQVZEOztFQVlBLG9CQUNJLHVEQUFDLGdFQUFEO0lBQ0ksS0FBSyxFQUFFO01BQUVJLEtBQUssRUFBRTtJQUFULENBRFg7SUFFSSxRQUFRLEVBQUVOLFlBRmQ7SUFHSSxXQUFXLEVBQUMsMEJBSGhCO0lBQUEsVUFLS0YsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0csS0FBRDtNQUFBLG9CQUNSLHVEQUFDLE1BQUQ7UUFBb0IsS0FBSyxFQUFFQSxLQUEzQjtRQUFBLFVBQ0tBO01BREwsR0FBYUEsS0FBYixDQURRO0lBQUEsQ0FBWDtFQUxMLEVBREo7QUFhSCxDQTVCRDs7QUE2QkEsK0RBQWVWLGtCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vc3JjL2F1dG8tY29tcGxldGUvX19kZW1vX18vc2ltcGxlLnRzeD82YmZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdGl0bGU6IOWfuuacrOS9v+eUqFxuICogZGVzY3JpcHRpb246IOWfuuehgOeUqOazleS/oeaBr1xuICovXG5pbXBvcnQgeyBBdXRvQ29tcGxldGUgfSBmcm9tICdAd2VibGlmL2Zhc3QtdWknXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gQXV0b0NvbXBsZXRlXG5cbmNvbnN0IFNpbXBsZUF1dG9Db21wbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHJlczogc3RyaW5nW10gPSBbXVxuICAgICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmluZGV4T2YoJ0AnKSA+PSAwKSB7XG4gICAgICAgICAgICByZXMgPSBbXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gWydnbWFpbC5jb20nLCAnMTYzLmNvbScsICdxcS5jb20nXS5tYXAoXG4gICAgICAgICAgICAgICAgKGRvbWFpbikgPT4gYCR7dmFsdWV9QCR7ZG9tYWlufWBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBzZXRSZXN1bHQocmVzKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRvQ29tcGxldGVcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyMDAgfX1cbiAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuWcqOatpOi+k+WFpVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHtyZXN1bHQubWFwKChlbWFpbDogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2VtYWlsfSB2YWx1ZT17ZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICB7ZW1haWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BdXRvQ29tcGxldGU+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQXV0b0NvbXBsZXRlXG4iXSwibmFtZXMiOlsiQXV0b0NvbXBsZXRlIiwidXNlU3RhdGUiLCJPcHRpb24iLCJTaW1wbGVBdXRvQ29tcGxldGUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJoYW5kbGVTZWFyY2giLCJ2YWx1ZSIsInJlcyIsImluZGV4T2YiLCJtYXAiLCJkb21haW4iLCJ3aWR0aCIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///90520
`)},1470:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weblif_fast_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87290);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86074);
/**
 * title: \u57FA\u7840
 * description: \u7B80\u5355\u7684\u751F\u6210\u4E00\u4E2A\u4E8C\u7EF4\u7801\u4FE1\u606F
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_weblif_fast_ui__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    value: "https://github.com/Web-Lif/fast-ui"
  });
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ3MC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLCtEQUFlLFlBQU07RUFDakIsb0JBQU8sdURBQUMsZ0VBQUQ7SUFBUSxLQUFLLEVBQUM7RUFBZCxFQUFQO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL3NyYy9xcmNvZGUvX19kZW1vX18vYmFzaXMudHN4P2YzYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiB0aXRsZTog5Z+656GAXG4gKiBkZXNjcmlwdGlvbjog566A5Y2V55qE55Sf5oiQ5LiA5Liq5LqM57u056CB5L+h5oGvXG4gKi9cblxuaW1wb3J0IHsgUVJDb2RlIH0gZnJvbSAnQHdlYmxpZi9mYXN0LXVpJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmV0dXJuIDxRUkNvZGUgdmFsdWU9XCJodHRwczovL2dpdGh1Yi5jb20vV2ViLUxpZi9mYXN0LXVpXCIgLz5cbn1cbiJdLCJuYW1lcyI6WyJRUkNvZGUiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///1470
`)}}]);
