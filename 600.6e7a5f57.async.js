(self.webpackChunk_weblif_fast_ui=self.webpackChunk_weblif_fast_ui||[]).push([[600],{33603:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mL": function() { return /* binding */ getTransitionName; },
/* harmony export */   "q0": function() { return /* binding */ getTransitionDirection; }
/* harmony export */ });
// ================== Collapse Motion ==================
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = node => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
const getCurrentHeight = node => ({
  height: node ? node.offsetHeight : 0
});
const skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = function () {
  let rootCls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant';
  return {
    motionName: \`\${rootCls}-motion-collapse\`,
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500
  };
};
const SelectPlacements = (/* unused pure expression or super */ null && (['bottomLeft', 'bottomRight', 'topLeft', 'topRight']));
const getTransitionDirection = placement => {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return \`slide-down\`;
  }
  return \`slide-up\`;
};
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return \`\${rootPrefixCls}-\${motion}\`;
};

/* harmony default export */ __webpack_exports__["ZP"] = (initCollapseMotion);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM2MDMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvR0FBb0Q7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWMsR0FBRyxPQUFPO0FBQ3BDO0FBQ3FEO0FBQ3JELDBEQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL191dGlsL21vdGlvbi5qcz9lYTI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PSBDb2xsYXBzZSBNb3Rpb24gPT09PT09PT09PT09PT09PT09XG5jb25zdCBnZXRDb2xsYXBzZWRIZWlnaHQgPSAoKSA9PiAoe1xuICBoZWlnaHQ6IDAsXG4gIG9wYWNpdHk6IDBcbn0pO1xuY29uc3QgZ2V0UmVhbEhlaWdodCA9IG5vZGUgPT4ge1xuICBjb25zdCB7XG4gICAgc2Nyb2xsSGVpZ2h0XG4gIH0gPSBub2RlO1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogc2Nyb2xsSGVpZ2h0LFxuICAgIG9wYWNpdHk6IDFcbiAgfTtcbn07XG5jb25zdCBnZXRDdXJyZW50SGVpZ2h0ID0gbm9kZSA9PiAoe1xuICBoZWlnaHQ6IG5vZGUgPyBub2RlLm9mZnNldEhlaWdodCA6IDBcbn0pO1xuY29uc3Qgc2tpcE9wYWNpdHlUcmFuc2l0aW9uID0gKF8sIGV2ZW50KSA9PiAoZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LmRlYWRsaW5lKSA9PT0gdHJ1ZSB8fCBldmVudC5wcm9wZXJ0eU5hbWUgPT09ICdoZWlnaHQnO1xuY29uc3QgaW5pdENvbGxhcHNlTW90aW9uID0gZnVuY3Rpb24gKCkge1xuICBsZXQgcm9vdENscyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2FudCc7XG4gIHJldHVybiB7XG4gICAgbW90aW9uTmFtZTogYCR7cm9vdENsc30tbW90aW9uLWNvbGxhcHNlYCxcbiAgICBvbkFwcGVhclN0YXJ0OiBnZXRDb2xsYXBzZWRIZWlnaHQsXG4gICAgb25FbnRlclN0YXJ0OiBnZXRDb2xsYXBzZWRIZWlnaHQsXG4gICAgb25BcHBlYXJBY3RpdmU6IGdldFJlYWxIZWlnaHQsXG4gICAgb25FbnRlckFjdGl2ZTogZ2V0UmVhbEhlaWdodCxcbiAgICBvbkxlYXZlU3RhcnQ6IGdldEN1cnJlbnRIZWlnaHQsXG4gICAgb25MZWF2ZUFjdGl2ZTogZ2V0Q29sbGFwc2VkSGVpZ2h0LFxuICAgIG9uQXBwZWFyRW5kOiBza2lwT3BhY2l0eVRyYW5zaXRpb24sXG4gICAgb25FbnRlckVuZDogc2tpcE9wYWNpdHlUcmFuc2l0aW9uLFxuICAgIG9uTGVhdmVFbmQ6IHNraXBPcGFjaXR5VHJhbnNpdGlvbixcbiAgICBtb3Rpb25EZWFkbGluZTogNTAwXG4gIH07XG59O1xuY29uc3QgU2VsZWN0UGxhY2VtZW50cyA9IFsnYm90dG9tTGVmdCcsICdib3R0b21SaWdodCcsICd0b3BMZWZ0JywgJ3RvcFJpZ2h0J107XG5jb25zdCBnZXRUcmFuc2l0aW9uRGlyZWN0aW9uID0gcGxhY2VtZW50ID0+IHtcbiAgaWYgKHBsYWNlbWVudCAhPT0gdW5kZWZpbmVkICYmIChwbGFjZW1lbnQgPT09ICd0b3BMZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICd0b3BSaWdodCcpKSB7XG4gICAgcmV0dXJuIGBzbGlkZS1kb3duYDtcbiAgfVxuICByZXR1cm4gYHNsaWRlLXVwYDtcbn07XG5jb25zdCBnZXRUcmFuc2l0aW9uTmFtZSA9IChyb290UHJlZml4Q2xzLCBtb3Rpb24sIHRyYW5zaXRpb25OYW1lKSA9PiB7XG4gIGlmICh0cmFuc2l0aW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICB9XG4gIHJldHVybiBgJHtyb290UHJlZml4Q2xzfS0ke21vdGlvbn1gO1xufTtcbmV4cG9ydCB7IGdldFRyYW5zaXRpb25OYW1lLCBnZXRUcmFuc2l0aW9uRGlyZWN0aW9uIH07XG5leHBvcnQgZGVmYXVsdCBpbml0Q29sbGFwc2VNb3Rpb247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///33603
`)},74228:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87206);

/* harmony default export */ __webpack_exports__["Z"] = (_date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQyMjguanMiLCJtYXBwaW5ncyI6IjtBQUFrRDtBQUNsRCx5REFBZSwwRUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcz81Yjc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlblVTIGZyb20gJy4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUyc7XG5leHBvcnQgZGVmYXVsdCBlblVTOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///74228
`)},87206:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ date_picker_locale_en_US; }
});

;// CONCATENATED MODULE: ./node_modules/rc-picker/es/locale/en_US.js
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ var en_US = (locale);
// EXTERNAL MODULE: ./node_modules/antd/es/time-picker/locale/en_US.js
var locale_en_US = __webpack_require__(42115);
;// CONCATENATED MODULE: ./node_modules/antd/es/date-picker/locale/en_US.js


// Merge into a locale object
const en_US_locale = {
  lang: Object.assign({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, en_US),
  timePickerLocale: Object.assign({}, locale_en_US/* default */.Z)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ var date_picker_locale_en_US = (en_US_locale);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODcyMDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBZSxNQUFNLEU7Ozs7QUM3QmtDO0FBQ087QUFDOUQ7QUFDQSxNQUFNLFlBQU07QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFLEtBQWM7QUFDbkIsb0NBQW9DLEVBQUUsMkJBQWdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLDZEQUFlLFlBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2VzL2xvY2FsZS9lbl9VUy5qcz80NzRhIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcz8yYjYxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBsb2NhbGUgPSB7XG4gIGxvY2FsZTogJ2VuX1VTJyxcbiAgdG9kYXk6ICdUb2RheScsXG4gIG5vdzogJ05vdycsXG4gIGJhY2tUb1RvZGF5OiAnQmFjayB0byB0b2RheScsXG4gIG9rOiAnT0snLFxuICBjbGVhcjogJ0NsZWFyJyxcbiAgbW9udGg6ICdNb250aCcsXG4gIHllYXI6ICdZZWFyJyxcbiAgdGltZVNlbGVjdDogJ3NlbGVjdCB0aW1lJyxcbiAgZGF0ZVNlbGVjdDogJ3NlbGVjdCBkYXRlJyxcbiAgd2Vla1NlbGVjdDogJ0Nob29zZSBhIHdlZWsnLFxuICBtb250aFNlbGVjdDogJ0Nob29zZSBhIG1vbnRoJyxcbiAgeWVhclNlbGVjdDogJ0Nob29zZSBhIHllYXInLFxuICBkZWNhZGVTZWxlY3Q6ICdDaG9vc2UgYSBkZWNhZGUnLFxuICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gIGRhdGVGb3JtYXQ6ICdNL0QvWVlZWScsXG4gIGRheUZvcm1hdDogJ0QnLFxuICBkYXRlVGltZUZvcm1hdDogJ00vRC9ZWVlZIEhIOm1tOnNzJyxcbiAgbW9udGhCZWZvcmVZZWFyOiB0cnVlLFxuICBwcmV2aW91c01vbnRoOiAnUHJldmlvdXMgbW9udGggKFBhZ2VVcCknLFxuICBuZXh0TW9udGg6ICdOZXh0IG1vbnRoIChQYWdlRG93biknLFxuICBwcmV2aW91c1llYXI6ICdMYXN0IHllYXIgKENvbnRyb2wgKyBsZWZ0KScsXG4gIG5leHRZZWFyOiAnTmV4dCB5ZWFyIChDb250cm9sICsgcmlnaHQpJyxcbiAgcHJldmlvdXNEZWNhZGU6ICdMYXN0IGRlY2FkZScsXG4gIG5leHREZWNhZGU6ICdOZXh0IGRlY2FkZScsXG4gIHByZXZpb3VzQ2VudHVyeTogJ0xhc3QgY2VudHVyeScsXG4gIG5leHRDZW50dXJ5OiAnTmV4dCBjZW50dXJ5J1xufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgQ2FsZW5kYXJMb2NhbGUgZnJvbSBcInJjLXBpY2tlci9lcy9sb2NhbGUvZW5fVVNcIjtcbmltcG9ydCBUaW1lUGlja2VyTG9jYWxlIGZyb20gJy4uLy4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VUyc7XG4vLyBNZXJnZSBpbnRvIGEgbG9jYWxlIG9iamVjdFxuY29uc3QgbG9jYWxlID0ge1xuICBsYW5nOiBPYmplY3QuYXNzaWduKHtcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBkYXRlJyxcbiAgICB5ZWFyUGxhY2Vob2xkZXI6ICdTZWxlY3QgeWVhcicsXG4gICAgcXVhcnRlclBsYWNlaG9sZGVyOiAnU2VsZWN0IHF1YXJ0ZXInLFxuICAgIG1vbnRoUGxhY2Vob2xkZXI6ICdTZWxlY3QgbW9udGgnLFxuICAgIHdlZWtQbGFjZWhvbGRlcjogJ1NlbGVjdCB3ZWVrJyxcbiAgICByYW5nZVBsYWNlaG9sZGVyOiBbJ1N0YXJ0IGRhdGUnLCAnRW5kIGRhdGUnXSxcbiAgICByYW5nZVllYXJQbGFjZWhvbGRlcjogWydTdGFydCB5ZWFyJywgJ0VuZCB5ZWFyJ10sXG4gICAgcmFuZ2VRdWFydGVyUGxhY2Vob2xkZXI6IFsnU3RhcnQgcXVhcnRlcicsICdFbmQgcXVhcnRlciddLFxuICAgIHJhbmdlTW9udGhQbGFjZWhvbGRlcjogWydTdGFydCBtb250aCcsICdFbmQgbW9udGgnXSxcbiAgICByYW5nZVdlZWtQbGFjZWhvbGRlcjogWydTdGFydCB3ZWVrJywgJ0VuZCB3ZWVrJ11cbiAgfSwgQ2FsZW5kYXJMb2NhbGUpLFxuICB0aW1lUGlja2VyTG9jYWxlOiBPYmplY3QuYXNzaWduKHt9LCBUaW1lUGlja2VyTG9jYWxlKVxufTtcbi8vIEFsbCBzZXR0aW5ncyBhdDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kYXRlLXBpY2tlci9sb2NhbGUvZXhhbXBsZS5qc29uXG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///87206
`)},74342:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ useLocaleReceiver; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76745);
/* harmony import */ var _en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40378);



const LocaleReceiver = props => {
  const {
    componentName = 'global',
    defaultLocale,
    children
  } = props;
  const antLocale = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  const getLocale = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  const getLocaleCode = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const localeCode = antLocale && antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (antLocale && antLocale.exist && !localeCode) {
      return _en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"].locale */ .Z.locale;
    }
    return localeCode;
  }, [antLocale]);
  return children(getLocale, getLocaleCode, antLocale);
};
/* harmony default export */ __webpack_exports__["Z"] = (LocaleReceiver);
const useLocaleReceiver = (componentName, defaultLocale) => {
  const antLocale = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  const getLocale = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [getLocale];
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQzNDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQ087QUFDRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9CQUFvQiw2Q0FBZ0IsQ0FBQyx5REFBYTtBQUNsRCxvQkFBb0IsMENBQWE7QUFDakM7QUFDQSxvQ0FBb0MsdURBQWlCO0FBQ3JEO0FBQ0EseUNBQXlDLDBFQUEwRTtBQUNuSCxHQUFHO0FBQ0gsd0JBQXdCLDBDQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQXdCO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlEQUFlLGNBQWMsRUFBQztBQUN2QjtBQUNQLG9CQUFvQiw2Q0FBZ0IsQ0FBQyx5REFBYTtBQUNsRCxvQkFBb0IsMENBQWE7QUFDakM7QUFDQSxvQ0FBb0MsdURBQWlCO0FBQ3JEO0FBQ0EseUNBQXlDLDRFQUE0RTtBQUNySCxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2xvY2FsZS9Mb2NhbGVSZWNlaXZlci5qcz85MTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2NhbGVDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgZGVmYXVsdExvY2FsZURhdGEgZnJvbSAnLi9lbl9VUyc7XG5jb25zdCBMb2NhbGVSZWNlaXZlciA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbXBvbmVudE5hbWUgPSAnZ2xvYmFsJyxcbiAgICBkZWZhdWx0TG9jYWxlLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgYW50TG9jYWxlID0gUmVhY3QudXNlQ29udGV4dChMb2NhbGVDb250ZXh0KTtcbiAgY29uc3QgZ2V0TG9jYWxlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgZGVmYXVsdExvY2FsZURhdGFbY29tcG9uZW50TmFtZV07XG4gICAgY29uc3QgbG9jYWxlRnJvbUNvbnRleHQgPSAoX2EgPSBhbnRMb2NhbGUgPT09IG51bGwgfHwgYW50TG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhbnRMb2NhbGVbY29tcG9uZW50TmFtZV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9O1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGxvY2FsZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gbG9jYWxlKCkgOiBsb2NhbGUpLCBsb2NhbGVGcm9tQ29udGV4dCB8fCB7fSk7XG4gIH0sIFtjb21wb25lbnROYW1lLCBkZWZhdWx0TG9jYWxlLCBhbnRMb2NhbGVdKTtcbiAgY29uc3QgZ2V0TG9jYWxlQ29kZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsZUNvZGUgPSBhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmxvY2FsZTtcbiAgICAvLyBIYWQgdXNlIExvY2FsZVByb3ZpZGUgYnV0IGRpZG4ndCBzZXQgbG9jYWxlXG4gICAgaWYgKGFudExvY2FsZSAmJiBhbnRMb2NhbGUuZXhpc3QgJiYgIWxvY2FsZUNvZGUpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0TG9jYWxlRGF0YS5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVDb2RlO1xuICB9LCBbYW50TG9jYWxlXSk7XG4gIHJldHVybiBjaGlsZHJlbihnZXRMb2NhbGUsIGdldExvY2FsZUNvZGUsIGFudExvY2FsZSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9jYWxlUmVjZWl2ZXI7XG5leHBvcnQgY29uc3QgdXNlTG9jYWxlUmVjZWl2ZXIgPSAoY29tcG9uZW50TmFtZSwgZGVmYXVsdExvY2FsZSkgPT4ge1xuICBjb25zdCBhbnRMb2NhbGUgPSBSZWFjdC51c2VDb250ZXh0KExvY2FsZUNvbnRleHQpO1xuICBjb25zdCBnZXRMb2NhbGUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbG9jYWxlID0gZGVmYXVsdExvY2FsZSB8fCBkZWZhdWx0TG9jYWxlRGF0YVtjb21wb25lbnROYW1lXTtcbiAgICBjb25zdCBsb2NhbGVGcm9tQ29udGV4dCA9IChfYSA9IGFudExvY2FsZSA9PT0gbnVsbCB8fCBhbnRMb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFudExvY2FsZVtjb21wb25lbnROYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSgpIDogbG9jYWxlKSwgbG9jYWxlRnJvbUNvbnRleHQgfHwge30pO1xuICB9LCBbY29tcG9uZW50TmFtZSwgZGVmYXVsdExvY2FsZSwgYW50TG9jYWxlXSk7XG4gIHJldHVybiBbZ2V0TG9jYWxlXTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///74342
`)},76745:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62435);

const LocaleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ __webpack_exports__["Z"] = (LocaleContext);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzY3NDUuanMiLCJtYXBwaW5ncyI6IjtBQUFzQztBQUN0QyxtQ0FBbUMsb0RBQWE7QUFDaEQseURBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2xvY2FsZS9jb250ZXh0LmpzPzlhYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IExvY2FsZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuZXhwb3J0IGRlZmF1bHQgTG9jYWxlQ29udGV4dDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///76745
`)},40378:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62906);
/* harmony import */ var _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74228);
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87206);
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42115);
/* eslint-disable no-template-curly-in-string */




const typeTemplate = '\${label} is not a valid \${type}';
const localeValues = {
  locale: 'en',
  Pagination: rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  DatePicker: _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  TimePicker: _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  Calendar: _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for \${label}',
      required: 'Please enter \${label}',
      enum: '\${label} must be one of [\${enum}]',
      whitespace: '\${label} cannot be a blank character',
      date: {
        format: '\${label} date format is invalid',
        parse: '\${label} cannot be converted to a date',
        invalid: '\${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '\${label} must be \${len} characters',
        min: '\${label} must be at least \${min} characters',
        max: '\${label} must be up to \${max} characters',
        range: '\${label} must be between \${min}-\${max} characters'
      },
      number: {
        len: '\${label} must be equal to \${len}',
        min: '\${label} must be minimum \${min}',
        max: '\${label} must be maximum \${max}',
        range: '\${label} must be between \${min}-\${max}'
      },
      array: {
        len: 'Must be \${len} \${label}',
        min: 'At least \${min} \${label}',
        max: 'At most \${max} \${label}',
        range: 'The amount of \${label} must be between \${min}-\${max}'
      },
      pattern: {
        mismatch: '\${label} does not match the pattern \${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh'
  }
};
/* harmony default export */ __webpack_exports__["Z"] = (localeValues);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAzNzguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ3VEO0FBQ1A7QUFDSztBQUNBO0FBQ3JELHdCQUF3QixPQUFPLGlCQUFpQixLQUFLO0FBQ3JEO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLFlBQVk7QUFDWixVQUFVO0FBQ1Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE1BQU07QUFDbkQsZ0NBQWdDLE1BQU07QUFDdEMsZUFBZSxPQUFPLGtCQUFrQixLQUFLO0FBQzdDLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsa0JBQWtCLE9BQU87QUFDekIsb0JBQW9CLE9BQU87QUFDM0IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxnQkFBZ0IsT0FBTyxVQUFVLEtBQUs7QUFDdEMsZ0JBQWdCLE9BQU8sbUJBQW1CLEtBQUs7QUFDL0MsZ0JBQWdCLE9BQU8sZ0JBQWdCLEtBQUs7QUFDNUMsa0JBQWtCLE9BQU8sa0JBQWtCLElBQUksR0FBRyxLQUFLO0FBQ3ZELE9BQU87QUFDUDtBQUNBLGdCQUFnQixPQUFPLG1CQUFtQixJQUFJO0FBQzlDLGdCQUFnQixPQUFPLGtCQUFrQixJQUFJO0FBQzdDLGdCQUFnQixPQUFPLGtCQUFrQixJQUFJO0FBQzdDLGtCQUFrQixPQUFPLGtCQUFrQixJQUFJLEdBQUcsSUFBSTtBQUN0RCxPQUFPO0FBQ1A7QUFDQSx3QkFBd0IsS0FBSyxFQUFFLE1BQU07QUFDckMseUJBQXlCLEtBQUssRUFBRSxNQUFNO0FBQ3RDLHdCQUF3QixLQUFLLEVBQUUsTUFBTTtBQUNyQyxnQ0FBZ0MsT0FBTyxrQkFBa0IsSUFBSSxHQUFHLElBQUk7QUFDcEUsT0FBTztBQUNQO0FBQ0EscUJBQXFCLE9BQU8sNkJBQTZCLFFBQVE7QUFDakU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBZSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbG9jYWxlL2VuX1VTLmpzPzE4NDQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nICovXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwicmMtcGFnaW5hdGlvbi9lcy9sb2NhbGUvZW5fVVNcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuLi9jYWxlbmRhci9sb2NhbGUvZW5fVVMnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTJztcbmltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VUyc7XG5jb25zdCB0eXBlVGVtcGxhdGUgPSAnJHtsYWJlbH0gaXMgbm90IGEgdmFsaWQgJHt0eXBlfSc7XG5jb25zdCBsb2NhbGVWYWx1ZXMgPSB7XG4gIGxvY2FsZTogJ2VuJyxcbiAgUGFnaW5hdGlvbixcbiAgRGF0ZVBpY2tlcixcbiAgVGltZVBpY2tlcixcbiAgQ2FsZW5kYXIsXG4gIGdsb2JhbDoge1xuICAgIHBsYWNlaG9sZGVyOiAnUGxlYXNlIHNlbGVjdCdcbiAgfSxcbiAgVGFibGU6IHtcbiAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRlciBtZW51JyxcbiAgICBmaWx0ZXJDb25maXJtOiAnT0snLFxuICAgIGZpbHRlclJlc2V0OiAnUmVzZXQnLFxuICAgIGZpbHRlckVtcHR5VGV4dDogJ05vIGZpbHRlcnMnLFxuICAgIGZpbHRlckNoZWNrYWxsOiAnU2VsZWN0IGFsbCBpdGVtcycsXG4gICAgZmlsdGVyU2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2ggaW4gZmlsdGVycycsXG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0Tm9uZTogJ0NsZWFyIGFsbCBkYXRhJyxcbiAgICBzZWxlY3Rpb25BbGw6ICdTZWxlY3QgYWxsIGRhdGEnLFxuICAgIHNvcnRUaXRsZTogJ1NvcnQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCByb3cnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2Ugcm93JyxcbiAgICB0cmlnZ2VyRGVzYzogJ0NsaWNrIHRvIHNvcnQgZGVzY2VuZGluZycsXG4gICAgdHJpZ2dlckFzYzogJ0NsaWNrIHRvIHNvcnQgYXNjZW5kaW5nJyxcbiAgICBjYW5jZWxTb3J0OiAnQ2xpY2sgdG8gY2FuY2VsIHNvcnRpbmcnXG4gIH0sXG4gIFRvdXI6IHtcbiAgICBOZXh0OiAnTmV4dCcsXG4gICAgUHJldmlvdXM6ICdQcmV2aW91cycsXG4gICAgRmluaXNoOiAnRmluaXNoJ1xuICB9LFxuICBNb2RhbDoge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJyxcbiAgICBqdXN0T2tUZXh0OiAnT0snXG4gIH0sXG4gIFBvcGNvbmZpcm06IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCdcbiAgfSxcbiAgVHJhbnNmZXI6IHtcbiAgICB0aXRsZXM6IFsnJywgJyddLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAnU2VhcmNoIGhlcmUnLFxuICAgIGl0ZW1Vbml0OiAnaXRlbScsXG4gICAgaXRlbXNVbml0OiAnaXRlbXMnLFxuICAgIHJlbW92ZTogJ1JlbW92ZScsXG4gICAgc2VsZWN0Q3VycmVudDogJ1NlbGVjdCBjdXJyZW50IHBhZ2UnLFxuICAgIHJlbW92ZUN1cnJlbnQ6ICdSZW1vdmUgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsIGRhdGEnLFxuICAgIHJlbW92ZUFsbDogJ1JlbW92ZSBhbGwgZGF0YScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZSdcbiAgfSxcbiAgVXBsb2FkOiB7XG4gICAgdXBsb2FkaW5nOiAnVXBsb2FkaW5nLi4uJyxcbiAgICByZW1vdmVGaWxlOiAnUmVtb3ZlIGZpbGUnLFxuICAgIHVwbG9hZEVycm9yOiAnVXBsb2FkIGVycm9yJyxcbiAgICBwcmV2aWV3RmlsZTogJ1ByZXZpZXcgZmlsZScsXG4gICAgZG93bmxvYWRGaWxlOiAnRG93bmxvYWQgZmlsZSdcbiAgfSxcbiAgRW1wdHk6IHtcbiAgICBkZXNjcmlwdGlvbjogJ05vIGRhdGEnXG4gIH0sXG4gIEljb246IHtcbiAgICBpY29uOiAnaWNvbidcbiAgfSxcbiAgVGV4dDoge1xuICAgIGVkaXQ6ICdFZGl0JyxcbiAgICBjb3B5OiAnQ29weScsXG4gICAgY29waWVkOiAnQ29waWVkJyxcbiAgICBleHBhbmQ6ICdFeHBhbmQnXG4gIH0sXG4gIFBhZ2VIZWFkZXI6IHtcbiAgICBiYWNrOiAnQmFjaydcbiAgfSxcbiAgRm9ybToge1xuICAgIG9wdGlvbmFsOiAnKG9wdGlvbmFsKScsXG4gICAgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXM6IHtcbiAgICAgIGRlZmF1bHQ6ICdGaWVsZCB2YWxpZGF0aW9uIGVycm9yIGZvciAke2xhYmVsfScsXG4gICAgICByZXF1aXJlZDogJ1BsZWFzZSBlbnRlciAke2xhYmVsfScsXG4gICAgICBlbnVtOiAnJHtsYWJlbH0gbXVzdCBiZSBvbmUgb2YgWyR7ZW51bX1dJyxcbiAgICAgIHdoaXRlc3BhY2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgYSBibGFuayBjaGFyYWN0ZXInLFxuICAgICAgZGF0ZToge1xuICAgICAgICBmb3JtYXQ6ICcke2xhYmVsfSBkYXRlIGZvcm1hdCBpcyBpbnZhbGlkJyxcbiAgICAgICAgcGFyc2U6ICcke2xhYmVsfSBjYW5ub3QgYmUgY29udmVydGVkIHRvIGEgZGF0ZScsXG4gICAgICAgIGludmFsaWQ6ICcke2xhYmVsfSBpcyBhbiBpbnZhbGlkIGRhdGUnXG4gICAgICB9LFxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgc3RyaW5nOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG1ldGhvZDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBhcnJheTogdHlwZVRlbXBsYXRlLFxuICAgICAgICBvYmplY3Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgbnVtYmVyOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGRhdGU6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgYm9vbGVhbjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBpbnRlZ2VyOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGZsb2F0OiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHJlZ2V4cDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBlbWFpbDogdHlwZVRlbXBsYXRlLFxuICAgICAgICB1cmw6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaGV4OiB0eXBlVGVtcGxhdGVcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgbGVuOiAnJHtsYWJlbH0gbXVzdCBiZSAke2xlbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMnLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtdXN0IGJlIHVwIHRvICR7bWF4fSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSBjaGFyYWN0ZXJzJ1xuICAgICAgfSxcbiAgICAgIG51bWJlcjoge1xuICAgICAgICBsZW46ICcke2xhYmVsfSBtdXN0IGJlIGVxdWFsIHRvICR7bGVufScsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IG11c3QgYmUgbWluaW11bSAke21pbn0nLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtdXN0IGJlIG1heGltdW0gJHttYXh9JyxcbiAgICAgICAgcmFuZ2U6ICcke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSdcbiAgICAgIH0sXG4gICAgICBhcnJheToge1xuICAgICAgICBsZW46ICdNdXN0IGJlICR7bGVufSAke2xhYmVsfScsXG4gICAgICAgIG1pbjogJ0F0IGxlYXN0ICR7bWlufSAke2xhYmVsfScsXG4gICAgICAgIG1heDogJ0F0IG1vc3QgJHttYXh9ICR7bGFiZWx9JyxcbiAgICAgICAgcmFuZ2U6ICdUaGUgYW1vdW50IG9mICR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9J1xuICAgICAgfSxcbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgbWlzbWF0Y2g6ICcke2xhYmVsfSBkb2VzIG5vdCBtYXRjaCB0aGUgcGF0dGVybiAke3BhdHRlcm59J1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgSW1hZ2U6IHtcbiAgICBwcmV2aWV3OiAnUHJldmlldydcbiAgfSxcbiAgUVJDb2RlOiB7XG4gICAgZXhwaXJlZDogJ1FSIGNvZGUgZXhwaXJlZCcsXG4gICAgcmVmcmVzaDogJ1JlZnJlc2gnXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGVWYWx1ZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///40378
`)},93590:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ initMotion; }
/* harmony export */ });
const initMotionCommon = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
const initMotion = function (motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return {
    [\`
      \${sameLevelPrefix}\${motionCls}-enter,
      \${sameLevelPrefix}\${motionCls}-appear
    \`]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: 'paused'
    }),
    [\`\${sameLevelPrefix}\${motionCls}-leave\`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: 'paused'
    }),
    [\`
      \${sameLevelPrefix}\${motionCls}-enter\${motionCls}-enter-active,
      \${sameLevelPrefix}\${motionCls}-appear\${motionCls}-appear-active
    \`]: {
      animationName: inKeyframes,
      animationPlayState: 'running'
    },
    [\`\${sameLevelPrefix}\${motionCls}-leave\${motionCls}-leave-active\`]: {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    }
  };
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTM1OTAuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdCQUFnQixFQUFFLFVBQVU7QUFDcEMsUUFBUSxnQkFBZ0IsRUFBRSxVQUFVO0FBQ3BDLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTCxRQUFRLGdCQUFnQixFQUFFLFVBQVUsd0NBQXdDO0FBQzVFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSxnQkFBZ0IsRUFBRSxVQUFVLFFBQVEsVUFBVTtBQUN0RCxRQUFRLGdCQUFnQixFQUFFLFVBQVUsU0FBUyxVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxRQUFRLGdCQUFnQixFQUFFLFVBQVUsUUFBUSxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0eWxlL21vdGlvbi9tb3Rpb24uanM/OWYzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0TW90aW9uQ29tbW9uID0gZHVyYXRpb24gPT4gKHtcbiAgYW5pbWF0aW9uRHVyYXRpb246IGR1cmF0aW9uLFxuICBhbmltYXRpb25GaWxsTW9kZTogJ2JvdGgnXG59KTtcbi8vIEZJWE1FOiBvcmlnaW4gbGVzcyBjb2RlIHNlZW1zIHNhbWUgYXMgaW5pdE1vdGlvbkNvbW1vbi4gTWF5YmUgd2UgY2FuIHNhZmUgcmVtb3ZlXG5jb25zdCBpbml0TW90aW9uQ29tbW9uTGVhdmUgPSBkdXJhdGlvbiA9PiAoe1xuICBhbmltYXRpb25EdXJhdGlvbjogZHVyYXRpb24sXG4gIGFuaW1hdGlvbkZpbGxNb2RlOiAnYm90aCdcbn0pO1xuZXhwb3J0IGNvbnN0IGluaXRNb3Rpb24gPSBmdW5jdGlvbiAobW90aW9uQ2xzLCBpbktleWZyYW1lcywgb3V0S2V5ZnJhbWVzLCBkdXJhdGlvbikge1xuICBsZXQgc2FtZUxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcbiAgY29uc3Qgc2FtZUxldmVsUHJlZml4ID0gc2FtZUxldmVsID8gJyYnIDogJyc7XG4gIHJldHVybiB7XG4gICAgW2BcbiAgICAgICR7c2FtZUxldmVsUHJlZml4fSR7bW90aW9uQ2xzfS1lbnRlcixcbiAgICAgICR7c2FtZUxldmVsUHJlZml4fSR7bW90aW9uQ2xzfS1hcHBlYXJcbiAgICBgXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpbml0TW90aW9uQ29tbW9uKGR1cmF0aW9uKSksIHtcbiAgICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogJ3BhdXNlZCdcbiAgICB9KSxcbiAgICBbYCR7c2FtZUxldmVsUHJlZml4fSR7bW90aW9uQ2xzfS1sZWF2ZWBdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGluaXRNb3Rpb25Db21tb25MZWF2ZShkdXJhdGlvbikpLCB7XG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6ICdwYXVzZWQnXG4gICAgfSksXG4gICAgW2BcbiAgICAgICR7c2FtZUxldmVsUHJlZml4fSR7bW90aW9uQ2xzfS1lbnRlciR7bW90aW9uQ2xzfS1lbnRlci1hY3RpdmUsXG4gICAgICAke3NhbWVMZXZlbFByZWZpeH0ke21vdGlvbkNsc30tYXBwZWFyJHttb3Rpb25DbHN9LWFwcGVhci1hY3RpdmVcbiAgICBgXToge1xuICAgICAgYW5pbWF0aW9uTmFtZTogaW5LZXlmcmFtZXMsXG4gICAgICBhbmltYXRpb25QbGF5U3RhdGU6ICdydW5uaW5nJ1xuICAgIH0sXG4gICAgW2Ake3NhbWVMZXZlbFByZWZpeH0ke21vdGlvbkNsc30tbGVhdmUke21vdGlvbkNsc30tbGVhdmUtYWN0aXZlYF06IHtcbiAgICAgIGFuaW1hdGlvbk5hbWU6IG91dEtleWZyYW1lcyxcbiAgICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogJ3J1bm5pbmcnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfVxuICB9O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///93590
`)},67771:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qt": function() { return /* binding */ slideDownIn; },
/* harmony export */   "Uw": function() { return /* binding */ slideUpOut; },
/* harmony export */   "fJ": function() { return /* binding */ slideUpIn; },
/* harmony export */   "ly": function() { return /* binding */ slideDownOut; },
/* harmony export */   "oN": function() { return /* binding */ initSlideMotion; }
/* harmony export */ });
/* unused harmony exports slideLeftIn, slideLeftOut, slideRightIn, slideRightOut */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24599);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93590);


const slideUpIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = \`\${antCls}-\${motionName}\`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [(0,_motion__WEBPACK_IMPORTED_MODULE_1__/* .initMotion */ .R)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [\`
      \${motionCls}-enter,
      \${motionCls}-appear
    \`]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    },
    [\`\${motionCls}-leave\`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjc3NzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUNWO0FBQy9CLHNCQUFzQixvRUFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHVCQUF1QixvRUFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHdCQUF3QixvRUFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHlCQUF5QixvRUFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHdCQUF3QixvRUFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHlCQUF5QixvRUFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLHlCQUF5QixvRUFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNLDBCQUEwQixvRUFBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSix1QkFBdUIsT0FBTyxHQUFHLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLFVBQVUsNERBQVU7QUFDcEI7QUFDQSxRQUFRLFVBQVU7QUFDbEIsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zdHlsZS9tb3Rpb24vc2xpZGUuanM/YTI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlmcmFtZXMgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmltcG9ydCB7IGluaXRNb3Rpb24gfSBmcm9tICcuL21vdGlvbic7XG5leHBvcnQgY29uc3Qgc2xpZGVVcEluID0gbmV3IEtleWZyYW1lcygnYW50U2xpZGVVcEluJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSk7XG5leHBvcnQgY29uc3Qgc2xpZGVVcE91dCA9IG5ldyBLZXlmcmFtZXMoJ2FudFNsaWRlVXBPdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZURvd25JbiA9IG5ldyBLZXlmcmFtZXMoJ2FudFNsaWRlRG93bkluJywge1xuICAnMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVZKDAuOCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZURvd25PdXQgPSBuZXcgS2V5ZnJhbWVzKCdhbnRTbGlkZURvd25PdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMC44KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMTAwJSAxMDAlJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pO1xuZXhwb3J0IGNvbnN0IHNsaWRlTGVmdEluID0gbmV3IEtleWZyYW1lcygnYW50U2xpZGVMZWZ0SW4nLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMC44KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJScsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZUxlZnRPdXQgPSBuZXcgS2V5ZnJhbWVzKCdhbnRTbGlkZUxlZnRPdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwLjgpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzbGlkZVJpZ2h0SW4gPSBuZXcgS2V5ZnJhbWVzKCdhbnRTbGlkZVJpZ2h0SW4nLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMC44KScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMTAwJSAwJScsXG4gICAgb3BhY2l0eTogMFxuICB9LFxuICAnMTAwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMCUnLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSk7XG5leHBvcnQgY29uc3Qgc2xpZGVSaWdodE91dCA9IG5ldyBLZXlmcmFtZXMoJ2FudFNsaWRlUmlnaHRPdXQnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMCUnLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGVYKDAuOCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMCUnLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSk7XG5jb25zdCBzbGlkZU1vdGlvbiA9IHtcbiAgJ3NsaWRlLXVwJzoge1xuICAgIGluS2V5ZnJhbWVzOiBzbGlkZVVwSW4sXG4gICAgb3V0S2V5ZnJhbWVzOiBzbGlkZVVwT3V0XG4gIH0sXG4gICdzbGlkZS1kb3duJzoge1xuICAgIGluS2V5ZnJhbWVzOiBzbGlkZURvd25JbixcbiAgICBvdXRLZXlmcmFtZXM6IHNsaWRlRG93bk91dFxuICB9LFxuICAnc2xpZGUtbGVmdCc6IHtcbiAgICBpbktleWZyYW1lczogc2xpZGVMZWZ0SW4sXG4gICAgb3V0S2V5ZnJhbWVzOiBzbGlkZUxlZnRPdXRcbiAgfSxcbiAgJ3NsaWRlLXJpZ2h0Jzoge1xuICAgIGluS2V5ZnJhbWVzOiBzbGlkZVJpZ2h0SW4sXG4gICAgb3V0S2V5ZnJhbWVzOiBzbGlkZVJpZ2h0T3V0XG4gIH1cbn07XG5leHBvcnQgY29uc3QgaW5pdFNsaWRlTW90aW9uID0gKHRva2VuLCBtb3Rpb25OYW1lKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbnRDbHNcbiAgfSA9IHRva2VuO1xuICBjb25zdCBtb3Rpb25DbHMgPSBgJHthbnRDbHN9LSR7bW90aW9uTmFtZX1gO1xuICBjb25zdCB7XG4gICAgaW5LZXlmcmFtZXMsXG4gICAgb3V0S2V5ZnJhbWVzXG4gIH0gPSBzbGlkZU1vdGlvblttb3Rpb25OYW1lXTtcbiAgcmV0dXJuIFtpbml0TW90aW9uKG1vdGlvbkNscywgaW5LZXlmcmFtZXMsIG91dEtleWZyYW1lcywgdG9rZW4ubW90aW9uRHVyYXRpb25NaWQpLCB7XG4gICAgW2BcbiAgICAgICR7bW90aW9uQ2xzfS1lbnRlcixcbiAgICAgICR7bW90aW9uQ2xzfS1hcHBlYXJcbiAgICBgXToge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0b2tlbi5tb3Rpb25FYXNlT3V0UXVpbnRcbiAgICB9LFxuICAgIFtgJHttb3Rpb25DbHN9LWxlYXZlYF06IHtcbiAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0b2tlbi5tb3Rpb25FYXNlSW5RdWludFxuICAgIH1cbiAgfV07XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///67771
`)},42115:function(__unused_webpack_module,__webpack_exports__){"use strict";eval(`const locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ __webpack_exports__["Z"] = (locale);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDIxMTUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBZSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzP2Q1ODMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9jYWxlID0ge1xuICBwbGFjZWhvbGRlcjogJ1NlbGVjdCB0aW1lJyxcbiAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCB0aW1lJywgJ0VuZCB0aW1lJ11cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///42115
`)},34155:function(module){eval(`// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQxNTUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzPzVjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///34155
`)},24407:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gN": function() { return /* reexport */ es_Field; },
  "zb": function() { return /* reexport */ FieldContext; },
  "RV": function() { return /* reexport */ FormProvider; },
  "aV": function() { return /* reexport */ es_List; },
  "ZM": function() { return /* reexport */ es_ListContext; },
  "ZP": function() { return /* binding */ es; },
  "cI": function() { return /* reexport */ es_useForm; },
  "qo": function() { return /* reexport */ es_useWatch; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/preset-umi/node_modules/react/index.js
var react = __webpack_require__(62435);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(32531);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(73568);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FieldContext.js


var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var warningFunc = function warningFunc() {
  (0,warning/* default */.ZP)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};

var Context = /*#__PURE__*/react.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
/* harmony default export */ var FieldContext = (Context);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/typeUtil.js
function typeUtil_toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(74165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
;// CONCATENATED MODULE: ./node_modules/async-validator/dist-web/index.js
/* provided dependency */ var process = __webpack_require__(34155);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var dist_web_warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && ({"NODE_ENV":"production","PUBLIC_PATH":"/"}) && "production" !== 'production' && 0 && 0) {}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = (function () {
  if (urlReg) {
    return urlReg;
  }

  var word = '[a-fA-F\\\\d:]';

  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\\\s|$))" : '';
  };

  var v4 = '(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)(?:\\\\.(?:25[0-5]|2[0-4]\\\\d|1\\\\d\\\\d|[1-9]\\\\d|\\\\d)){3}';
  var v6seg = '[a-fA-F\\\\d]{1,4}';
  var v6 = ("\\n(?:\\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\\n").replace(/\\s*\\/\\/.*$/gm, '').replace(/\\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");

  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
  };

  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
  };

  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
  };

  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\\\S+(?::\\\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\\\u00a1-\\\\uffff0-9][-_]*)*[a-z\\\\u00a1-\\\\uffff0-9]+)";
  var domain = "(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*";
  var tld = "(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff]{2,}))";
  var port = '(?::\\\\d{2,5})?';
  var path = '(?:[/?#][^\\\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
  return urlReg;
});

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]+\\.)+[a-zA-Z\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\\\S+(?::\\\\S*)?@)?(?:(?:(?:[1-9]\\\\d?|1\\\\d\\\\d|2[01]\\\\d|22[0-3])(?:\\\\.(?:1?\\\\d{1,2}|2[0-4]\\\\d|25[0-5])){2}(?:\\\\.(?:[0-9]\\\\d?|1\\\\d\\\\d|2[0-4]\\\\d|25[0-4]))|(?:(?:[a-z\\\\u00a1-\\\\uffff0-9]+-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff0-9]+-*)*[a-z\\\\u00a1-\\\\uffff0-9]+)*(?:\\\\.(?:[a-z\\\\u00a1-\\\\uffff]{2,})))|localhost)(?::\\\\d{2,5})?(?:(/|\\\\?|#)[^\\\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // \u6B63\u5219\u5339\u914D\u7801\u70B9\u8303\u56F4\u4ECEU+010000\u4E00\u76F4\u5230U+10FFFF\u7684\u6587\u5B57\uFF08\u8865\u5145\u5E73\u9762Supplementary Plane\uFF09

  var spRegexp = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // \u5904\u7406\u7801\u70B9\u5927\u4E8EU+010000\u7684\u6587\u5B57length\u5C5E\u6027\u4E0D\u51C6\u786E\u7684bug\uFF0C\u5982"\u{20BB7}\u{20BB7}\u{20BB7}".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset \`lastIndex\` in case its \`global\`
      // flag is accidentally set to \`true\`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error); // rethrow to report error

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }

          cb(error.message);
        }

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = dist_web_warning;
Schema.messages = messages;
Schema.validators = validators;


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/messages.js
var typeTemplate = "'\${name}' is not a valid \${type}";
var defaultValidateMessages = {
  default: "Validation error on field '\${name}'",
  required: "'\${name}' is required",
  enum: "'\${name}' must be one of [\${enum}]",
  whitespace: "'\${name}' cannot be empty",
  date: {
    format: "'\${name}' is invalid for format date",
    parse: "'\${name}' could not be parsed as date",
    invalid: "'\${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'\${name}' must be exactly \${len} characters",
    min: "'\${name}' must be at least \${min} characters",
    max: "'\${name}' cannot be longer than \${max} characters",
    range: "'\${name}' must be between \${min} and \${max} characters"
  },
  number: {
    len: "'\${name}' must equal \${len}",
    min: "'\${name}' cannot be less than \${min}",
    max: "'\${name}' cannot be greater than \${max}",
    range: "'\${name}' must be between \${min} and \${max}"
  },
  array: {
    len: "'\${name}' must be exactly \${len} in length",
    min: "'\${name}' cannot be less than \${min} in length",
    max: "'\${name}' cannot be greater than \${max} in length",
    range: "'\${name}' must be between \${min} and \${max} in length"
  },
  pattern: {
    mismatch: "'\${name}' does not match pattern \${pattern}"
  }
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/utils/get.js
var get = __webpack_require__(88306);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var esm_toArray = __webpack_require__(84506);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/utils/set.js




function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = (0,esm_toArray/* default */.Z)(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = (0,toConsumableArray/* default */.Z)(entity);
  } else {
    clone = (0,objectSpread2/* default */.Z)({}, entity);
  }
  // Delete prop if \`removeIfUndefined\` and value is undefined
  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Do nothing if \`removeIfUndefined\` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !(0,get/* default */.Z)(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/cloneDeep.js


function cloneDeep(val) {
  if (Array.isArray(val)) {
    return cloneArrayDeep(val);
  } else if ((0,esm_typeof/* default */.Z)(val) === 'object' && val !== null) {
    return cloneObjectDeep(val);
  }

  return val;
}

function cloneObjectDeep(val) {
  if (Object.getPrototypeOf(val) === Object.prototype) {
    var res = {};

    for (var key in val) {
      res[key] = cloneDeep(val[key]);
    }

    return res;
  }

  return val;
}

function cloneArrayDeep(val) {
  return val.map(function (item) {
    return cloneDeep(item);
  });
}

/* harmony default export */ var utils_cloneDeep = (cloneDeep);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/valueUtil.js







/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like \`a.b.c\` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */

function getNamePath(path) {
  return typeUtil_toArray(path);
}
function valueUtil_getValue(store, namePath) {
  var value = (0,get/* default */.Z)(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = valueUtil_getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}

function isObject(obj) {
  return (0,esm_typeof/* default */.Z)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */


function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? (0,toConsumableArray/* default */.Z)(store) : (0,objectSpread2/* default */.Z)({}, store);

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : utils_cloneDeep(value); // Clone deep for arrays
  });
  return newStore;
}

function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }

  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }

  if (!source && target || source && !target) {
    return false;
  }

  if (!source || !target || (0,esm_typeof/* default */.Z)(source) !== 'object' || (0,esm_typeof/* default */.Z)(target) !== 'object') {
    return false;
  }

  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return (0,toConsumableArray/* default */.Z)(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];

    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }

    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && (0,esm_typeof/* default */.Z)(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */

function valueUtil_move(array, moveIndex, toIndex) {
  var length = array.length;

  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }

  var item = array[moveIndex];
  var diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, toIndex)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, length)));
  }

  if (diff < 0) {
    // move right
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, toIndex + 1)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex + 1, length)));
  }

  return array;
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/validateUtil.js









 // Remove incorrect original ts define

var AsyncValidator = Schema;
/**
 * Replace with template.
 *   \`I'm \${name}\` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\\$\\{\\w+\\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}

var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';

function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use \`async-validator\` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */


function _validateRule() {
  _validateRule = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = (0,objectSpread2/* default */.Z)({}, rule); // Bug of \`async-validator\`
            // https://github.com/react-component/field-form/issues/316
            // https://github.com/react-component/field-form/issues/313

            delete cloneRule.ruleIndex;

            if (cloneRule.validator) {
              originValidator = cloneRule.validator;

              cloneRule.validator = function () {
                try {
                  return originValidator.apply(void 0, arguments);
                } catch (error) {
                  console.error(error);
                  return Promise.reject(CODE_LOGIC_ERROR);
                }
              };
            } // We should special handle array validate


            subRuleField = null;

            if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }

            validator = new AsyncValidator((0,defineProperty/* default */.Z)({}, name, [cloneRule]));
            messages = setValues({}, defaultValidateMessages, options.validateMessages);
            validator.messages(messages);
            result = [];
            _context2.prev = 9;
            _context2.next = 12;
            return Promise.resolve(validator.validate((0,defineProperty/* default */.Z)({}, name, value), (0,objectSpread2/* default */.Z)({}, options)));

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](9);

            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function (_ref4, index) {
                var message = _ref4.message;
                var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
                return /*#__PURE__*/react.isValidElement(mergedMessage) ?
                /*#__PURE__*/
                // Wrap ReactNode with \`key\`
                react.cloneElement(mergedMessage, {
                  key: "error_".concat(index)
                }) : mergedMessage;
              });
            }

          case 17:
            if (!(!result.length && subRuleField)) {
              _context2.next = 22;
              break;
            }

            _context2.next = 20;
            return Promise.all(value.map(function (subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));

          case 20:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
              return [].concat((0,toConsumableArray/* default */.Z)(prev), (0,toConsumableArray/* default */.Z)(errors));
            }, []));

          case 22:
            // Replace message with variables
            kv = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rule), {}, {
              name: name,
              enum: (rule.enum || []).join(', ')
            }, messageVariables);
            fillVariableResult = result.map(function (error) {
              if (typeof error === 'string') {
                return replaceMessage(error, kv);
              }

              return error;
            });
            return _context2.abrupt("return", fillVariableResult);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 14]]);
  }));
  return _validateRule.apply(this, arguments);
}

function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;

    var cloneRule = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentRule), {}, {
      ruleIndex: ruleIndex
    }); // Replace validator if needed


    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false; // Wrap callback only accept when promise not provided

        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            (0,warning/* default */.ZP)(!hasPromise, 'Your validator function has already return a promise. \`callback\` will be ignored.');

            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        }; // Get promise


        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */

        (0,warning/* default */.ZP)(hasPromise, '\`callback\` is deprecated. Please return a promise instead.');

        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }

    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
        i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
        i2 = _ref2.ruleIndex;

    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }

    if (w1) {
      return 1;
    }

    return -1;
  }); // Do validate rules

  var summaryPromise;

  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 12;
                  break;
                }

                rule = filledRules[i];
                _context.next = 5;
                return validateRule(name, value, rule, options, messageVariables);

              case 5:
                errors = _context.sent;

                if (!errors.length) {
                  _context.next = 9;
                  break;
                }

                reject([{
                  errors: errors,
                  rule: rule
                }]);
                return _context.abrupt("return");

              case 9:
                i += 1;
                _context.next = 1;
                break;

              case 12:
                /* eslint-enable */
                resolve([]);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  } // Internal catch error to avoid console error log.


  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}

function _finishOnAllFailed() {
  _finishOnAllFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee3(rulePromises) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
              var _ref5;

              var errors = (_ref5 = []).concat.apply(_ref5, (0,toConsumableArray/* default */.Z)(errorsList));

              return errors;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}

function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}

function _finishOnFirstFailed() {
  _finishOnFirstFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee4(rulePromises) {
    var count;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function (resolve) {
              rulePromises.forEach(function (promise) {
                promise.then(function (ruleError) {
                  if (ruleError.errors.length) {
                    resolve([ruleError]);
                  }

                  count += 1;

                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Field.js










var _excluded = ["name"];







var EMPTY_ERRORS = [];

function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }

  return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.


var Field = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Field, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Field);

  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */

  /**
   * Mark when touched & validated. Currently only used for \`dependencies\`.
   * Note that we do not think field with \`initialValue\` is dirty
   * but this will be by \`isFieldDirty\` func.
   */
  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Field);

    _this = _super.call(this, props); // Register on init

    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    _this.touched = false;
    _this.dirty = false;
    _this.validatePromise = null;
    _this.prevValidating = void 0;
    _this.errors = EMPTY_ERRORS;
    _this.warnings = EMPTY_ERRORS;

    _this.cancelRegister = function () {
      var _this$props = _this.props,
          preserve = _this$props.preserve,
          isListField = _this$props.isListField,
          name = _this$props.name;

      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }

      _this.cancelRegisterFunc = null;
    };

    _this.getNamePath = function () {
      var _this$props2 = _this.props,
          name = _this$props2.name,
          fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
          prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat((0,toConsumableArray/* default */.Z)(prefixName), (0,toConsumableArray/* default */.Z)(name)) : [];
    };

    _this.getRules = function () {
      var _this$props3 = _this.props,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
          fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }

        return rule;
      });
    };

    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */

      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    };

    _this.triggerMetaEvent = function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      onMetaChange === null || onMetaChange === void 0 ? void 0 : onMetaChange((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getMeta()), {}, {
        destroy: destroy
      }));
    };

    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
          shouldUpdate = _this$props4.shouldUpdate,
          _this$props4$dependen = _this$props4.dependencies,
          dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
          onReset = _this$props4.onReset;
      var store = info.store;

      var namePath = _this.getNamePath();

      var prevValue = _this.getValue(prevStore);

      var curValue = _this.getValue(store);

      var namePathMatch = namePathList && containsNamePath(namePathList, namePath); // \`setFieldsValue\` is a quick access to update related status

      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;

        _this.triggerMetaEvent();
      }

      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;

            _this.triggerMetaEvent();

            onReset === null || onReset === void 0 ? void 0 : onReset();

            _this.refresh();

            return;
          }

          break;

        /**
         * In case field with \`preserve = false\` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */

        case 'remove':
          {
            if (shouldUpdate) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;

              if ('touched' in data) {
                _this.touched = data.touched;
              }

              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }

              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }

              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }

              _this.dirty = true;

              _this.triggerMetaEvent();

              _this.reRender();

              return;
            } // Handle update by \`setField\` with \`shouldUpdate\`


            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked \`dependencies\` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath); // No need for \`namePathMath\` check and \`shouldUpdate\` check, since \`valueUpdate\` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering

            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();

              return;
            }

            break;
          }

        default:
          // 1. If \`namePath\` exists in \`namePathList\`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If \`namePathList\` is [['list']] (List value update), Field should be updated
          //      If \`namePathList\` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If \`dependencies\` is set, \`name\` is not set and \`shouldUpdate\` is not set,
          //       don't use \`shouldUpdate\`. \`dependencies\` is view as a shortcut if \`shouldUpdate\`
          //       is not provided
          //   2.2 If \`shouldUpdate\` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();

            return;
          }

          break;
      }

      if (shouldUpdate === true) {
        _this.reRender();
      }
    };

    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();

      var currentValue = _this.getValue(); // Force change to async to avoid rule OOD under renderProps field


      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }

        var _this$props5 = _this.props,
            _this$props5$validate = _this$props5.validateFirst,
            validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
            messageVariables = _this$props5.messageVariables;

        var _ref2 = options || {},
            triggerName = _ref2.triggerName;

        var filteredRules = _this.getRules();

        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            var validateTrigger = rule.validateTrigger;

            if (!validateTrigger) {
              return true;
            }

            var triggerList = typeUtil_toArray(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }

        var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch(function (e) {
          return e;
        }).then(function () {
          var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;

          if (_this.validatePromise === rootPromise) {
            var _ruleErrors$forEach;

            _this.validatePromise = null; // Get errors & warnings

            var nextErrors = [];
            var nextWarnings = [];
            (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref3) {
              var warningOnly = _ref3.rule.warningOnly,
                  _ref3$errors = _ref3.errors,
                  errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;

              if (warningOnly) {
                nextWarnings.push.apply(nextWarnings, (0,toConsumableArray/* default */.Z)(errors));
              } else {
                nextErrors.push.apply(nextErrors, (0,toConsumableArray/* default */.Z)(errors));
              }
            });
            _this.errors = nextErrors;
            _this.warnings = nextWarnings;

            _this.triggerMetaEvent();

            _this.reRender();
          }
        });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;

      _this.triggerMetaEvent(); // Force trigger re-render since we need sync renderProps with new meta


      _this.reRender();

      return rootPromise;
    };

    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };

    _this.isFieldTouched = function () {
      return _this.touched;
    };

    _this.isFieldDirty = function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      } // Form set initialValue


      var fieldContext = _this.props.fieldContext;

      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
          getInitialValue = _fieldContext$getInte.getInitialValue;

      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }

      return false;
    };

    _this.getErrors = function () {
      return _this.errors;
    };

    _this.getWarnings = function () {
      return _this.warnings;
    };

    _this.isListField = function () {
      return _this.props.isListField;
    };

    _this.isList = function () {
      return _this.props.isList;
    };

    _this.isPreserve = function () {
      return _this.props.preserve;
    };

    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath()
      };
      return meta;
    };

    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      } // Filed element only


      var childList = (0,toArray/* default */.Z)(children);

      if (childList.length !== 1 || ! /*#__PURE__*/react.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }

      return {
        child: childList[0],
        isFunction: false
      };
    };

    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;

      var namePath = _this.getNamePath();

      return valueUtil_getValue(store || getFieldsValue(true), namePath);
    };

    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          validateTrigger = _this$props6.validateTrigger,
          getValueFromEvent = _this$props6.getValueFromEvent,
          normalize = _this$props6.normalize,
          valuePropName = _this$props6.valuePropName,
          getValueProps = _this$props6.getValueProps,
          fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;

      var namePath = _this.getNamePath();

      var getInternalHooks = fieldContext.getInternalHooks,
          getFieldsValue = fieldContext.getFieldsValue;

      var _getInternalHooks = getInternalHooks(HOOK_MARK),
          dispatch = _getInternalHooks.dispatch;

      var value = _this.getValue();

      var mergedGetValueProps = getValueProps || function (val) {
        return (0,defineProperty/* default */.Z)({}, valuePropName, val);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var originTriggerFunc = childProps[trigger];

      var control = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, childProps), mergedGetValueProps(value)); // Add trigger


      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;

        _this.triggerMetaEvent();

        var newValue;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }

        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }

        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      }; // Add validateTrigger


      var validateTriggerList = typeUtil_toArray(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          } // Always use latest rules


          var rules = _this.props.rules;

          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    };

    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;

      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
          initEntityValue = _getInternalHooks2.initEntityValue;

      initEntityValue((0,assertThisInitialized/* default */.Z)(_this));
    }

    return _this;
  }

  (0,createClass/* default */.Z)(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          shouldUpdate = _this$props7.shouldUpdate,
          fieldContext = _this$props7.fieldContext;
      this.mounted = true; // Register on init

      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;

        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
            registerField = _getInternalHooks3.registerField;

        this.cancelRegisterFunc = registerField(this);
      } // One more render for component in case fields not ready


      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;

      var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction; // Not need to \`cloneElement\` since user can handle this in render function self


      var returnChildNode;

      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/react.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/react.cloneElement(child, this.getControlled(child.props));
      } else {
        (0,warning/* default */.ZP)(!child, '\`children\` of Field is not validate ReactElement.');
        returnChildNode = child;
      }

      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);

  return Field;
}(react.Component);

Field.contextType = FieldContext;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};

function WrapperField(_ref5) {
  var name = _ref5.name,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref5, _excluded);

  var fieldContext = react.useContext(FieldContext);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';

  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  } // Warning if it's a directly list field.
  // We can still support multiple level field preserve.


  if (false) {}

  return /*#__PURE__*/react.createElement(Field, (0,esm_extends/* default */.Z)({
    key: key,
    name: namePath
  }, restProps, {
    fieldContext: fieldContext
  }));
}

/* harmony default export */ var es_Field = (WrapperField);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/ListContext.js

var ListContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_ListContext = (ListContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/List.js









var List = function List(_ref) {
  var name = _ref.name,
      initialValue = _ref.initialValue,
      children = _ref.children,
      rules = _ref.rules,
      validateTrigger = _ref.validateTrigger;
  var context = react.useContext(FieldContext);
  var keyRef = react.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = react.useMemo(function () {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat((0,toConsumableArray/* default */.Z)(parentPrefixName), (0,toConsumableArray/* default */.Z)(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]); // List context

  var listContext = react.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]); // User should not pass \`children\` as other type.

  if (typeof children !== 'function') {
    (0,warning/* default */.ZP)(false, 'Form.List only accepts function as children.');
    return null;
  }

  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;

    if (source === 'internal') {
      return false;
    }

    return prevValue !== nextValue;
  };

  return /*#__PURE__*/react.createElement(es_ListContext.Provider, {
    value: listContext
  }, /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: fieldContext
  }, /*#__PURE__*/react.createElement(es_Field, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? [] : _ref3$value,
        onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;

    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by \`form\` api.
     */


    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();

        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys.slice(0, index)), [keyManager.id], (0,toConsumableArray/* default */.Z)(keyManager.keys.slice(index)));
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue.slice(0, index)), [defaultValue], (0,toConsumableArray/* default */.Z)(newValue.slice(index))));
        } else {
          if (false) {}

          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys), [keyManager.id]);
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue), [defaultValue]));
        }

        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);

        if (indexSet.size <= 0) {
          return;
        }

        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        }); // Trigger store change

        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }

        var newValue = getNewValue(); // Do not handle out of range

        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }

        keyManager.keys = valueUtil_move(keyManager.keys, from, to); // Trigger store change

        onChange(valueUtil_move(newValue, from, to));
      }
    };
    var listValue = value || [];

    if (!Array.isArray(listValue)) {
      listValue = [];

      if (false) {}
    }

    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];

      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }

      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
};

/* harmony default export */ var es_List = (List);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;

        if (count > 0) {
          return;
        }

        if (hasError) {
          reject(results);
        }

        resolve(results);
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/NameMap.js





var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */

function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat((0,esm_typeof/* default */.Z)(cell), ":").concat(cell);
  }) // Magic split
  .join(SPLIT);
}
/**
 * NameMap like a \`Map\` but accepts \`string[]\` as key.
 */


var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    (0,classCallCheck/* default */.Z)(this, NameMap);

    this.kvs = new Map();
  }

  (0,createClass/* default */.Z)(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);

      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    } // Since we only use this in test, let simply realize this

  }, {
    key: "map",
    value: function map(callback) {
      return (0,toConsumableArray/* default */.Z)(this.kvs.entries()).map(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
                _cell$match2 = (0,slicedToArray/* default */.Z)(_cell$match, 3),
                type = _cell$match2[1],
                unit = _cell$match2[2];

            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
            value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);

  return NameMap;
}();

/* harmony default export */ var utils_NameMap = (NameMap);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useForm.js






var useForm_excluded = ["name", "errors"];








var FormStore = /*#__PURE__*/(0,createClass/* default */.Z)(function FormStore(forceRootUpdate) {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, FormStore);

  this.formHooked = false;
  this.forceRootUpdate = void 0;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;

  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  };

  this.getInternalHooks = function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }

    (0,warning/* default */.ZP)(false, '\`getInternalHooks\` is internal usage. Should not call directly.');
    return null;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };

  this.prevWithoutPreserves = null;

  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};

    if (init) {
      var _this$prevWithoutPres;

      var nextStore = setValues({}, initialValues, _this.store); // We will take consider prev form unmount fields.
      // When the field is not \`preserve\`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return

      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = setValue(nextStore, namePath, valueUtil_getValue(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;

      _this.updateStore(nextStore);
    }
  };

  this.destroyForm = function () {
    var prevWithoutPreserves = new utils_NameMap();

    _this.getFieldEntities(true).forEach(function (entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });

    _this.prevWithoutPreserves = prevWithoutPreserves;
  };

  this.getInitialValue = function (namePath) {
    var initValue = valueUtil_getValue(_this.initialValues, namePath); // Not cloneDeep when without \`namePath\`

    return namePath.length ? utils_cloneDeep(initValue) : initValue;
  };

  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };

  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };

  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  };

  this.watchList = [];

  this.registerWatch = function (callback) {
    _this.watchList.push(callback);

    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  };

  this.notifyWatch = function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // No need to cost perf when nothing need to watch
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();

      _this.watchList.forEach(function (callback) {
        callback(values, namePath);
      });
    }
  };

  this.timeoutId = null;

  this.warningUnhooked = function () {
    if (false) {}
  };

  this.updateStore = function (nextStore) {
    _this.store = nextStore;
  };

  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!pure) {
      return _this.fieldEntities;
    }

    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };

  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new utils_NameMap();

    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });

    return cache;
  };

  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }

    var cache = _this.getFieldsMap(true);

    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  };

  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();

    if (nameList === true && !filterFunc) {
      return _this.store;
    }

    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);

    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;

      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count

      if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
        return;
      }

      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;

        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };

  this.getFieldValue = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);
    return valueUtil_getValue(_this.store, namePath);
  };

  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }

      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };

  this.getFieldError = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.errors;
  };

  this.getFieldWarning = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.warnings;
  };

  this.isFieldsTouched = function () {
    _this.warningUnhooked();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arg0 = args[0],
        arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;

    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }

    var fieldEntities = _this.getFieldEntities(true);

    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    }; // ===== Will get fully compare when not config namePathList =====


    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    } // Generate a nest tree for validate


    var map = new utils_NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath(); // Find matched entity and put into list

      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat((0,toConsumableArray/* default */.Z)(list), [field]);
          });
        }
      });
    }); // Check if NameMap value is touched

    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };

    var namePathListEntities = map.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };

  this.isFieldTouched = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsTouched([name]);
  };

  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntities();

    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }

    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };

  this.isFieldValidating = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsValidating([name]);
  };

  this.resetWithFieldInitialValue = function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new utils_NameMap();

    var fieldEntities = _this.getFieldEntities(true);

    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath(); // Record only if has \`initialValue\`

      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    }); // Reset

    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;

        if (initialValue !== undefined) {
          var namePath = field.getNamePath();

          var formInitialValue = _this.getInitialValue(namePath);

          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0,warning/* default */.ZP)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);

            if (records && records.size > 1) {
              // Warning if multiple field set \`initialValue\`and do not modify value
              (0,warning/* default */.ZP)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath); // Set \`initialValue\`


              if (!info.skipExist || originValue === undefined) {
                _this.updateStore(setValue(_this.store, namePath, (0,toConsumableArray/* default */.Z)(records)[0].value));
              }
            }
          }
        }
      });
    };

    var requiredFieldEntities;

    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);

        if (records) {
          var _requiredFieldEntitie;

          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0,toConsumableArray/* default */.Z)((0,toConsumableArray/* default */.Z)(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }

    resetWithFields(requiredFieldEntities);
  };

  this.resetFields = function (nameList) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (!nameList) {
      _this.updateStore(setValues({}, _this.initialValues));

      _this.resetWithFieldInitialValue();

      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });

      _this.notifyWatch();

      return;
    } // Reset by \`nameList\`


    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);

      _this.updateStore(setValue(_this.store, namePath, initialValue));
    });

    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });

    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });

    _this.notifyWatch(namePathList);
  };

  this.setFields = function (fields) {
    _this.warningUnhooked();

    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
          errors = fieldData.errors,
          data = (0,objectWithoutProperties/* default */.Z)(fieldData, useForm_excluded);

      var namePath = getNamePath(name);
      namePathList.push(namePath); // Value

      if ('value' in data) {
        _this.updateStore(setValue(_this.store, namePath, data.value));
      }

      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });

    _this.notifyWatch(namePathList);
  };

  this.getFields = function () {
    var entities = _this.getFieldEntities(true);

    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();

      var fieldData = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });

      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  };

  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;

    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = valueUtil_getValue(_this.store, namePath);

      if (prevValue === undefined) {
        _this.updateStore(setValue(_this.store, namePath, initialValue));
      }
    }
  };

  this.isMergedPreserve = function (fieldPreserve) {
    var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  };

  this.registerField = function (entity) {
    _this.fieldEntities.push(entity);

    var namePath = entity.getNamePath();

    _this.notifyWatch([namePath]); // Set initial values


    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;

      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });

      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    } // un-register field callback


    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      }); // Clean up store value if not preserve

      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);

        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (// Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;

          _this.updateStore(setValue(_prevStore, namePath, defaultValue, true)); // Notify that field is unmount


          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          }); // Dependencies update


          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }

      _this.notifyWatch([namePath]);
    };
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
              value = action.value;

          _this.updateValue(namePath, value);

          break;
        }

      case 'validateField':
        {
          var _namePath = action.namePath,
              triggerName = action.triggerName;

          _this.validateFields([_namePath], {
            triggerName: triggerName
          });

          break;
        }

      default: // Currently we don't have other action. Do nothing.

    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        store: _this.getFieldsValue(true)
      });

      _this.getFieldEntities().forEach(function (_ref3) {
        var onStoreChange = _ref3.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.triggerDependenciesUpdate = function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);

    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }

    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields))
    });

    return childrenFields;
  };

  this.updateValue = function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;

    _this.updateStore(setValue(_this.store, namePath, value));

    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });

    _this.notifyWatch([namePath]); // Dependencies update


    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath); // trigger callback function


    var onValuesChange = _this.callbacks.onValuesChange;

    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }

    _this.triggerOnFieldsChange([namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields)));
  };

  this.setFieldsValue = function (store) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (store) {
      var nextStore = setValues(_this.store, store);

      _this.updateStore(nextStore);
    }

    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });

    _this.notifyWatch();
  };

  this.setFieldValue = function (name, value) {
    _this.setFields([{
      name: name,
      value: value
    }]);
  };

  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new utils_NameMap();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */

    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });

    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();

          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);
    return childrenFields;
  };

  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;

    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since \`fields\` may be replaced by controlled fields
       */


      if (filedErrors) {
        var cache = new utils_NameMap();
        filedErrors.forEach(function (_ref4) {
          var name = _ref4.name,
              errors = _ref4.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }

      var changedFields = fields.filter(function (_ref5) {
        var fieldName = _ref5.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  };

  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();

    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : []; // Collect result in promise list

    var promiseList = [];

    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide \`nameList\`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */


      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();

        if ( // nameList[i] === undefined \u8BF4\u660E\u662F\u4EE5 nameList \u5F00\u5934\u7684
        // ['name'] -> ['name','list']
        namePath.every(function (nameUnit, i) {
          return nameList[i] === nameUnit || nameList[i] === undefined;
        })) {
          namePathList.push(namePath);
        }
      } // Skip if without rule


      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules((0,objectSpread2/* default */.Z)({
          validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultValidateMessages), _this.validateMessages)
        }, options)); // Wrap promise with field

        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var _ruleErrors$forEach;

          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref6) {
            var warningOnly = _ref6.rule.warningOnly,
                errors = _ref6.errors;

            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, (0,toConsumableArray/* default */.Z)(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, (0,toConsumableArray/* default */.Z)(errors));
            }
          });

          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }

          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });

    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref7) {
        var name = _ref7.name;
        return name;
      });

      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });

      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }

      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  };

  this.submit = function () {
    _this.warningUnhooked();

    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;

      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user \`onFinish\` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;

      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };

  this.forceRootUpdate = forceRootUpdate;
});

function useForm(form) {
  var formRef = react.useRef();

  var _React$useState = react.useState({}),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

/* harmony default export */ var es_useForm = (useForm);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FormContext.js



var FormContext = /*#__PURE__*/react.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});

var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
      onFormChange = _ref.onFormChange,
      onFormFinish = _ref.onFormFinish,
      children = _ref.children;
  var formContext = react.useContext(FormContext);
  var formsRef = react.useRef({});
  return /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext), {}, {
      validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }

        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }

        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formsRef.current), {}, (0,defineProperty/* default */.Z)({}, name, form));
        }

        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = (0,objectSpread2/* default */.Z)({}, formsRef.current);

        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};


/* harmony default export */ var es_FormContext = (FormContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Form.js




var Form_excluded = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];






var Form = function Form(_ref, ref) {
  var name = _ref.name,
      initialValues = _ref.initialValues,
      fields = _ref.fields,
      form = _ref.form,
      preserve = _ref.preserve,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'form' : _ref$component,
      validateMessages = _ref.validateMessages,
      _ref$validateTrigger = _ref.validateTrigger,
      validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
      onValuesChange = _ref.onValuesChange,
      _onFieldsChange = _ref.onFieldsChange,
      _onFinish = _ref.onFinish,
      onFinishFailed = _ref.onFinishFailed,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Form_excluded);

  var formContext = react.useContext(es_FormContext); // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider

  var _useForm = es_useForm(form),
      _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 1),
      formInstance = _useForm2[0];

  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
      useSubscribe = _formInstance$getInte.useSubscribe,
      setInitialValues = _formInstance$getInte.setInitialValues,
      setCallbacks = _formInstance$getInte.setCallbacks,
      setValidateMessages = _formInstance$getInte.setValidateMessages,
      setPreserve = _formInstance$getInte.setPreserve,
      destroyForm = _formInstance$getInte.destroyForm; // Pass ref with form instance


  react.useImperativeHandle(ref, function () {
    return formInstance;
  }); // Register form into Context

  react.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]); // Pass props to store

  setValidateMessages((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);

      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);

      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve); // Set initial value, init store value when first mount

  var mountRef = react.useRef(null);
  setInitialValues(initialValues, !mountRef.current);

  if (!mountRef.current) {
    mountRef.current = true;
  }

  react.useEffect(function () {
    return destroyForm;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []); // Prepare children by \`children\` type

  var childrenNode;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  } // Not use subscribe when using render props


  useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

  var prevFieldsRef = react.useRef();
  react.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }

    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: formContextValue
  }, childrenNode);

  if (Component === false) {
    return wrapperNode;
  }

  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;

      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};

/* harmony default export */ var es_Form = (Form);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useWatch.js






function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}

function useWatch() {
  var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var form = arguments.length > 1 ? arguments[1] : undefined;

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var valueStr = (0,react.useMemo)(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = (0,react.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0,react.useContext)(FieldContext);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init; // Warning if not exist form instance

  if (false) {}

  var namePath = getNamePath(dependencies);
  var namePathRef = (0,react.useRef)(namePath);
  namePathRef.current = namePath;
  (0,react.useEffect)(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }

    var getFieldsValue = formInstance.getFieldsValue,
        getInternalHooks = formInstance.getInternalHooks;

    var _getInternalHooks = getInternalHooks(HOOK_MARK),
        registerWatch = _getInternalHooks.registerWatch;

    var cancelRegister = registerWatch(function (store) {
      var newValue = valueUtil_getValue(store, namePathRef.current);
      var nextValueStr = stringify(newValue); // Compare stringify in case it's nest object

      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(newValue);
      }
    }); // TODO: We can improve this perf in future

    var initialValue = valueUtil_getValue(getFieldsValue(), namePathRef.current);
    setValue(initialValue);
    return cancelRegister;
  }, // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return value;
}

/* harmony default export */ var es_useWatch = (useWatch);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/index.js









var InternalForm = /*#__PURE__*/react.forwardRef(es_Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = es_Field;
RefForm.List = es_List;
RefForm.useForm = es_useForm;
RefForm.useWatch = es_useWatch;

/* harmony default export */ var es = (RefForm);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUY7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QjtBQUM1QixVQUFVOzs7QUFHVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOzs7QUFHVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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cy9yYy1maWVsZC1mb3JtL2VzL0ZpZWxkQ29udGV4dC5qcz9lZjJlIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL3V0aWxzL3R5cGVVdGlsLmpzPzc2NzgiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9kaXN0LXdlYi9pbmRleC5qcz9mZTNkIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL3V0aWxzL21lc3NhZ2VzLmpzP2ZjNTAiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvdXRpbHMvc2V0LmpzPzVjM2IiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXRpbHMvY2xvbmVEZWVwLmpzP2VlNjEiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXRpbHMvdmFsdWVVdGlsLmpzPzUyNDkiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXRpbHMvdmFsaWRhdGVVdGlsLmpzP2E5NjciLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvRmllbGQuanM/NmE1NyIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy9MaXN0Q29udGV4dC5qcz80NDZjIiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL0xpc3QuanM/ZDYzNSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy91dGlscy9hc3luY1V0aWwuanM/MjcyOSIsIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvcmMtZmllbGQtZm9ybS9lcy91dGlscy9OYW1lTWFwLmpzP2QzYWMiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvdXNlRm9ybS5qcz8zY2E3Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL0Zvcm1Db250ZXh0LmpzPzY1YzUiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvRm9ybS5qcz9lMDc1Iiwid2VicGFjazovL0B3ZWJsaWYvZmFzdC11aS8uL25vZGVfbW9kdWxlcy9yYy1maWVsZC1mb3JtL2VzL3VzZVdhdGNoLmpzPzNhNzQiLCJ3ZWJwYWNrOi8vQHdlYmxpZi9mYXN0LXVpLy4vbm9kZV9tb2R1bGVzL3JjLWZpZWxkLWZvcm0vZXMvaW5kZXguanM/NTkwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2FybmluZyBmcm9tIFwicmMtdXRpbC9lcy93YXJuaW5nXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIEhPT0tfTUFSSyA9ICdSQ19GT1JNX0lOVEVSTkFMX0hPT0tTJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblxudmFyIHdhcm5pbmdGdW5jID0gZnVuY3Rpb24gd2FybmluZ0Z1bmMoKSB7XG4gIHdhcm5pbmcoZmFsc2UsICdDYW4gbm90IGZpbmQgRm9ybUNvbnRleHQuIFBsZWFzZSBtYWtlIHN1cmUgeW91IHdyYXAgRmllbGQgdW5kZXIgRm9ybS4nKTtcbn07XG5cbnZhciBDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBnZXRGaWVsZFZhbHVlOiB3YXJuaW5nRnVuYyxcbiAgZ2V0RmllbGRzVmFsdWU6IHdhcm5pbmdGdW5jLFxuICBnZXRGaWVsZEVycm9yOiB3YXJuaW5nRnVuYyxcbiAgZ2V0RmllbGRXYXJuaW5nOiB3YXJuaW5nRnVuYyxcbiAgZ2V0RmllbGRzRXJyb3I6IHdhcm5pbmdGdW5jLFxuICBpc0ZpZWxkc1RvdWNoZWQ6IHdhcm5pbmdGdW5jLFxuICBpc0ZpZWxkVG91Y2hlZDogd2FybmluZ0Z1bmMsXG4gIGlzRmllbGRWYWxpZGF0aW5nOiB3YXJuaW5nRnVuYyxcbiAgaXNGaWVsZHNWYWxpZGF0aW5nOiB3YXJuaW5nRnVuYyxcbiAgcmVzZXRGaWVsZHM6IHdhcm5pbmdGdW5jLFxuICBzZXRGaWVsZHM6IHdhcm5pbmdGdW5jLFxuICBzZXRGaWVsZFZhbHVlOiB3YXJuaW5nRnVuYyxcbiAgc2V0RmllbGRzVmFsdWU6IHdhcm5pbmdGdW5jLFxuICB2YWxpZGF0ZUZpZWxkczogd2FybmluZ0Z1bmMsXG4gIHN1Ym1pdDogd2FybmluZ0Z1bmMsXG4gIGdldEludGVybmFsSG9va3M6IGZ1bmN0aW9uIGdldEludGVybmFsSG9va3MoKSB7XG4gICAgd2FybmluZ0Z1bmMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGF0Y2g6IHdhcm5pbmdGdW5jLFxuICAgICAgaW5pdEVudGl0eVZhbHVlOiB3YXJuaW5nRnVuYyxcbiAgICAgIHJlZ2lzdGVyRmllbGQ6IHdhcm5pbmdGdW5jLFxuICAgICAgdXNlU3Vic2NyaWJlOiB3YXJuaW5nRnVuYyxcbiAgICAgIHNldEluaXRpYWxWYWx1ZXM6IHdhcm5pbmdGdW5jLFxuICAgICAgZGVzdHJveUZvcm06IHdhcm5pbmdGdW5jLFxuICAgICAgc2V0Q2FsbGJhY2tzOiB3YXJuaW5nRnVuYyxcbiAgICAgIHJlZ2lzdGVyV2F0Y2g6IHdhcm5pbmdGdW5jLFxuICAgICAgZ2V0RmllbGRzOiB3YXJuaW5nRnVuYyxcbiAgICAgIHNldFZhbGlkYXRlTWVzc2FnZXM6IHdhcm5pbmdGdW5jLFxuICAgICAgc2V0UHJlc2VydmU6IHdhcm5pbmdGdW5jLFxuICAgICAgZ2V0SW5pdGlhbFZhbHVlOiB3YXJuaW5nRnVuY1xuICAgIH07XG4gIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgQ29udGV4dDsiLCJleHBvcnQgZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn0iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcblxuICBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCk7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbi8qIGVzbGludCBuby1jb25zb2xlOjAgKi9cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xudmFyIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKCkge307IC8vIGRvbid0IHByaW50IHdhcm5pbmcgbWVzc2FnZSB3aGVuIGluIHByb2R1Y3Rpb24gZW52IG9yIG5vZGUgcnVudGltZVxuXG5pZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyh0eXBlLCBlcnJvcnMpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUud2FybiAmJiB0eXBlb2YgQVNZTkNfVkFMSURBVE9SX05PX1dBUk5JTkcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoZXJyb3JzLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PT0gJ3N0cmluZyc7XG4gICAgICB9KSkge1xuICAgICAgICBjb25zb2xlLndhcm4odHlwZSwgZXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGaWVsZHNFcnJvcihlcnJvcnMpIHtcbiAgaWYgKCFlcnJvcnMgfHwgIWVycm9ycy5sZW5ndGgpIHJldHVybiBudWxsO1xuICB2YXIgZmllbGRzID0ge307XG4gIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHZhciBmaWVsZCA9IGVycm9yLmZpZWxkO1xuICAgIGZpZWxkc1tmaWVsZF0gPSBmaWVsZHNbZmllbGRdIHx8IFtdO1xuICAgIGZpZWxkc1tmaWVsZF0ucHVzaChlcnJvcik7XG4gIH0pO1xuICByZXR1cm4gZmllbGRzO1xufVxuZnVuY3Rpb24gZm9ybWF0KHRlbXBsYXRlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBpID0gMDtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuXG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkobnVsbCwgYXJncyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzdHIgPSB0ZW1wbGF0ZS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmICh4ID09PSAnJSUnKSB7XG4gICAgICAgIHJldHVybiAnJSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID49IGxlbikge1xuICAgICAgICByZXR1cm4geDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh4KSB7XG4gICAgICAgIGNhc2UgJyVzJzpcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG5cbiAgICAgICAgY2FzZSAnJWQnOlxuICAgICAgICAgIHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcblxuICAgICAgICBjYXNlICclaic6XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4geDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZVN0cmluZ1R5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ3VybCcgfHwgdHlwZSA9PT0gJ2hleCcgfHwgdHlwZSA9PT0gJ2VtYWlsJyB8fCB0eXBlID09PSAnZGF0ZScgfHwgdHlwZSA9PT0gJ3BhdHRlcm4nO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5VmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnYXJyYXknICYmIEFycmF5LmlzQXJyYXkodmFsdWUpICYmICF2YWx1ZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc05hdGl2ZVN0cmluZ1R5cGUodHlwZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYXN5bmNQYXJhbGxlbEFycmF5KGFyciwgZnVuYywgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIHRvdGFsID0gMDtcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gY291bnQoZXJyb3JzKSB7XG4gICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIGVycm9ycyB8fCBbXSk7XG4gICAgdG90YWwrKztcblxuICAgIGlmICh0b3RhbCA9PT0gYXJyTGVuZ3RoKSB7XG4gICAgICBjYWxsYmFjayhyZXN1bHRzKTtcbiAgICB9XG4gIH1cblxuICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgIGZ1bmMoYSwgY291bnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXN5bmNTZXJpYWxBcnJheShhcnIsIGZ1bmMsIGNhbGxiYWNrKSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIG5leHQoZXJyb3JzKSB7XG4gICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjYWxsYmFjayhlcnJvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbCA9IGluZGV4O1xuICAgIGluZGV4ID0gaW5kZXggKyAxO1xuXG4gICAgaWYgKG9yaWdpbmFsIDwgYXJyTGVuZ3RoKSB7XG4gICAgICBmdW5jKGFycltvcmlnaW5hbF0sIG5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhbXSk7XG4gICAgfVxuICB9XG5cbiAgbmV4dChbXSk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5PYmpBcnIob2JqQXJyKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgT2JqZWN0LmtleXMob2JqQXJyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0LnB1c2guYXBwbHkocmV0LCBvYmpBcnJba10gfHwgW10pO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxudmFyIEFzeW5jVmFsaWRhdGlvbkVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoQXN5bmNWYWxpZGF0aW9uRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gQXN5bmNWYWxpZGF0aW9uRXJyb3IoZXJyb3JzLCBmaWVsZHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsICdBc3luYyBWYWxpZGF0aW9uIEVycm9yJykgfHwgdGhpcztcbiAgICBfdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgX3RoaXMuZmllbGRzID0gZmllbGRzO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBBc3luY1ZhbGlkYXRpb25FcnJvcjtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG5mdW5jdGlvbiBhc3luY01hcChvYmpBcnIsIG9wdGlvbiwgZnVuYywgY2FsbGJhY2ssIHNvdXJjZSkge1xuICBpZiAob3B0aW9uLmZpcnN0KSB7XG4gICAgdmFyIF9wZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGVycm9ycykge1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMpO1xuICAgICAgICByZXR1cm4gZXJyb3JzLmxlbmd0aCA/IHJlamVjdChuZXcgQXN5bmNWYWxpZGF0aW9uRXJyb3IoZXJyb3JzLCBjb252ZXJ0RmllbGRzRXJyb3IoZXJyb3JzKSkpIDogcmVzb2x2ZShzb3VyY2UpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGZsYXR0ZW5BcnIgPSBmbGF0dGVuT2JqQXJyKG9iakFycik7XG4gICAgICBhc3luY1NlcmlhbEFycmF5KGZsYXR0ZW5BcnIsIGZ1bmMsIG5leHQpO1xuICAgIH0pO1xuXG4gICAgX3BlbmRpbmdbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3BlbmRpbmc7XG4gIH1cblxuICB2YXIgZmlyc3RGaWVsZHMgPSBvcHRpb24uZmlyc3RGaWVsZHMgPT09IHRydWUgPyBPYmplY3Qua2V5cyhvYmpBcnIpIDogb3B0aW9uLmZpcnN0RmllbGRzIHx8IFtdO1xuICB2YXIgb2JqQXJyS2V5cyA9IE9iamVjdC5rZXlzKG9iakFycik7XG4gIHZhciBvYmpBcnJMZW5ndGggPSBvYmpBcnJLZXlzLmxlbmd0aDtcbiAgdmFyIHRvdGFsID0gMDtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGVycm9ycykge1xuICAgICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIGVycm9ycyk7XG4gICAgICB0b3RhbCsrO1xuXG4gICAgICBpZiAodG90YWwgPT09IG9iakFyckxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhyZXN1bHRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID8gcmVqZWN0KG5ldyBBc3luY1ZhbGlkYXRpb25FcnJvcihyZXN1bHRzLCBjb252ZXJ0RmllbGRzRXJyb3IocmVzdWx0cykpKSA6IHJlc29sdmUoc291cmNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFvYmpBcnJLZXlzLmxlbmd0aCkge1xuICAgICAgY2FsbGJhY2socmVzdWx0cyk7XG4gICAgICByZXNvbHZlKHNvdXJjZSk7XG4gICAgfVxuXG4gICAgb2JqQXJyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBhcnIgPSBvYmpBcnJba2V5XTtcblxuICAgICAgaWYgKGZpcnN0RmllbGRzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgYXN5bmNTZXJpYWxBcnJheShhcnIsIGZ1bmMsIG5leHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXN5bmNQYXJhbGxlbEFycmF5KGFyciwgZnVuYywgbmV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBwZW5kaW5nW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG4gIHJldHVybiBwZW5kaW5nO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yT2JqKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIG9iai5tZXNzYWdlICE9PSB1bmRlZmluZWQpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSwgcGF0aCkge1xuICB2YXIgdiA9IHZhbHVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgdiA9IHZbcGF0aFtpXV07XG4gIH1cblxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY29tcGxlbWVudEVycm9yKHJ1bGUsIHNvdXJjZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKG9lKSB7XG4gICAgdmFyIGZpZWxkVmFsdWU7XG5cbiAgICBpZiAocnVsZS5mdWxsRmllbGRzKSB7XG4gICAgICBmaWVsZFZhbHVlID0gZ2V0VmFsdWUoc291cmNlLCBydWxlLmZ1bGxGaWVsZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZFZhbHVlID0gc291cmNlW29lLmZpZWxkIHx8IHJ1bGUuZnVsbEZpZWxkXTtcbiAgICB9XG5cbiAgICBpZiAoaXNFcnJvck9iaihvZSkpIHtcbiAgICAgIG9lLmZpZWxkID0gb2UuZmllbGQgfHwgcnVsZS5mdWxsRmllbGQ7XG4gICAgICBvZS5maWVsZFZhbHVlID0gZmllbGRWYWx1ZTtcbiAgICAgIHJldHVybiBvZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdHlwZW9mIG9lID09PSAnZnVuY3Rpb24nID8gb2UoKSA6IG9lLFxuICAgICAgZmllbGRWYWx1ZTogZmllbGRWYWx1ZSxcbiAgICAgIGZpZWxkOiBvZS5maWVsZCB8fCBydWxlLmZ1bGxGaWVsZFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSkge1xuICAgIGZvciAodmFyIHMgaW4gc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHMpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtzXTtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0W3NdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRhcmdldFtzXSA9IF9leHRlbmRzKHt9LCB0YXJnZXRbc10sIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRbc10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciByZXF1aXJlZCQxID0gZnVuY3Rpb24gcmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zLCB0eXBlKSB7XG4gIGlmIChydWxlLnJlcXVpcmVkICYmICghc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpIHx8IGlzRW1wdHlWYWx1ZSh2YWx1ZSwgdHlwZSB8fCBydWxlLnR5cGUpKSkge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLnJlcXVpcmVkLCBydWxlLmZ1bGxGaWVsZCkpO1xuICB9XG59O1xuXG4vKipcbiAqICBSdWxlIGZvciB2YWxpZGF0aW5nIHdoaXRlc3BhY2UuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIGVycm9ycyBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB0aGlzIHJ1bGUgbWF5IGFkZFxuICogIHZhbGlkYXRpb24gZXJyb3JzIHRvLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cblxudmFyIHdoaXRlc3BhY2UgPSBmdW5jdGlvbiB3aGl0ZXNwYWNlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICBpZiAoL15cXHMrJC8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMud2hpdGVzcGFjZSwgcnVsZS5mdWxsRmllbGQpKTtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tldnZhL3VybC1yZWdleC9ibG9iL21hc3Rlci9pbmRleC5qc1xudmFyIHVybFJlZztcbnZhciBnZXRVcmxSZWdleCA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICh1cmxSZWcpIHtcbiAgICByZXR1cm4gdXJsUmVnO1xuICB9XG5cbiAgdmFyIHdvcmQgPSAnW2EtZkEtRlxcXFxkOl0nO1xuXG4gIHZhciBiID0gZnVuY3Rpb24gYihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5pbmNsdWRlQm91bmRhcmllcyA/IFwiKD86KD88PVxcXFxzfF4pKD89XCIgKyB3b3JkICsgXCIpfCg/PD1cIiArIHdvcmQgKyBcIikoPz1cXFxcc3wkKSlcIiA6ICcnO1xuICB9O1xuXG4gIHZhciB2NCA9ICcoPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKD86XFxcXC4oPzoyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldXFxcXGR8XFxcXGQpKXszfSc7XG4gIHZhciB2NnNlZyA9ICdbYS1mQS1GXFxcXGRdezEsNH0nO1xuICB2YXIgdjYgPSAoXCJcXG4oPzpcXG4oPzpcIiArIHY2c2VnICsgXCI6KXs3fSg/OlwiICsgdjZzZWcgKyBcInw6KXwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxOjI6Mzo0OjU6Njo3OjogIDE6MjozOjQ6NTo2Ojc6OFxcbig/OlwiICsgdjZzZWcgKyBcIjopezZ9KD86XCIgKyB2NCArIFwifDpcIiArIHY2c2VnICsgXCJ8Oil8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxOjI6Mzo0OjU6Njo6ICAgIDE6MjozOjQ6NTo2Ojo4ICAgMToyOjM6NDo1OjY6OjggIDE6MjozOjQ6NTo2OjoxLjIuMy40XFxuKD86XCIgKyB2NnNlZyArIFwiOil7NX0oPzo6XCIgKyB2NCArIFwifCg/OjpcIiArIHY2c2VnICsgXCIpezEsMn18Oil8ICAgICAgICAgICAgICAgICAgIC8vIDE6MjozOjQ6NTo6ICAgICAgMToyOjM6NDo1Ojo3OjggICAxOjI6Mzo0OjU6OjggICAgMToyOjM6NDo1Ojo3OjEuMi4zLjRcXG4oPzpcIiArIHY2c2VnICsgXCI6KXs0fSg/Oig/OjpcIiArIHY2c2VnICsgXCIpezAsMX06XCIgKyB2NCArIFwifCg/OjpcIiArIHY2c2VnICsgXCIpezEsM318Oil8IC8vIDE6MjozOjQ6OiAgICAgICAgMToyOjM6NDo6Njo3OjggICAxOjI6Mzo0Ojo4ICAgICAgMToyOjM6NDo6Njo3OjEuMi4zLjRcXG4oPzpcIiArIHY2c2VnICsgXCI6KXszfSg/Oig/OjpcIiArIHY2c2VnICsgXCIpezAsMn06XCIgKyB2NCArIFwifCg/OjpcIiArIHY2c2VnICsgXCIpezEsNH18Oil8IC8vIDE6MjozOjogICAgICAgICAgMToyOjM6OjU6Njo3OjggICAxOjI6Mzo6OCAgICAgICAgMToyOjM6OjU6Njo3OjEuMi4zLjRcXG4oPzpcIiArIHY2c2VnICsgXCI6KXsyfSg/Oig/OjpcIiArIHY2c2VnICsgXCIpezAsM306XCIgKyB2NCArIFwifCg/OjpcIiArIHY2c2VnICsgXCIpezEsNX18Oil8IC8vIDE6Mjo6ICAgICAgICAgICAgMToyOjo0OjU6Njo3OjggICAxOjI6OjggICAgICAgICAgMToyOjo0OjU6Njo3OjEuMi4zLjRcXG4oPzpcIiArIHY2c2VnICsgXCI6KXsxfSg/Oig/OjpcIiArIHY2c2VnICsgXCIpezAsNH06XCIgKyB2NCArIFwifCg/OjpcIiArIHY2c2VnICsgXCIpezEsNn18Oil8IC8vIDE6OiAgICAgICAgICAgICAgMTo6Mzo0OjU6Njo3OjggICAxOjo4ICAgICAgICAgICAgMTo6Mzo0OjU6Njo3OjEuMi4zLjRcXG4oPzo6KD86KD86OlwiICsgdjZzZWcgKyBcIil7MCw1fTpcIiArIHY0ICsgXCJ8KD86OlwiICsgdjZzZWcgKyBcIil7MSw3fXw6KSkgICAgICAgICAgICAgLy8gOjoyOjM6NDo1OjY6Nzo4ICA6OjI6Mzo0OjU6Njo3OjggIDo6OCAgICAgICAgICAgICA6OjEuMi4zLjRcXG4pKD86JVswLTlhLXpBLVpdezEsfSk/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJWV0aDAgICAgICAgICAgICAlMVxcblwiKS5yZXBsYWNlKC9cXHMqXFwvXFwvLiokL2dtLCAnJykucmVwbGFjZSgvXFxuL2csICcnKS50cmltKCk7IC8vIFByZS1jb21waWxlIG9ubHkgdGhlIGV4YWN0IHJlZ2V4ZXMgYmVjYXVzZSBhZGRpbmcgYSBnbG9iYWwgZmxhZyBtYWtlIHJlZ2V4ZXMgc3RhdGVmdWxcblxuICB2YXIgdjQ2RXhhY3QgPSBuZXcgUmVnRXhwKFwiKD86XlwiICsgdjQgKyBcIiQpfCg/Ol5cIiArIHY2ICsgXCIkKVwiKTtcbiAgdmFyIHY0ZXhhY3QgPSBuZXcgUmVnRXhwKFwiXlwiICsgdjQgKyBcIiRcIik7XG4gIHZhciB2NmV4YWN0ID0gbmV3IFJlZ0V4cChcIl5cIiArIHY2ICsgXCIkXCIpO1xuXG4gIHZhciBpcCA9IGZ1bmN0aW9uIGlwKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLmV4YWN0ID8gdjQ2RXhhY3QgOiBuZXcgUmVnRXhwKFwiKD86XCIgKyBiKG9wdGlvbnMpICsgdjQgKyBiKG9wdGlvbnMpICsgXCIpfCg/OlwiICsgYihvcHRpb25zKSArIHY2ICsgYihvcHRpb25zKSArIFwiKVwiLCAnZycpO1xuICB9O1xuXG4gIGlwLnY0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLmV4YWN0ID8gdjRleGFjdCA6IG5ldyBSZWdFeHAoXCJcIiArIGIob3B0aW9ucykgKyB2NCArIGIob3B0aW9ucyksICdnJyk7XG4gIH07XG5cbiAgaXAudjYgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuZXhhY3QgPyB2NmV4YWN0IDogbmV3IFJlZ0V4cChcIlwiICsgYihvcHRpb25zKSArIHY2ICsgYihvcHRpb25zKSwgJ2cnKTtcbiAgfTtcblxuICB2YXIgcHJvdG9jb2wgPSBcIig/Oig/OlthLXpdKzopPy8vKVwiO1xuICB2YXIgYXV0aCA9ICcoPzpcXFxcUysoPzo6XFxcXFMqKT9AKT8nO1xuICB2YXIgaXB2NCA9IGlwLnY0KCkuc291cmNlO1xuICB2YXIgaXB2NiA9IGlwLnY2KCkuc291cmNlO1xuICB2YXIgaG9zdCA9IFwiKD86KD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldWy1fXSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspXCI7XG4gIHZhciBkb21haW4gPSBcIig/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKlwiO1xuICB2YXIgdGxkID0gXCIoPzpcXFxcLig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmXXsyLH0pKVwiO1xuICB2YXIgcG9ydCA9ICcoPzo6XFxcXGR7Miw1fSk/JztcbiAgdmFyIHBhdGggPSAnKD86Wy8/I11bXlxcXFxzXCJdKik/JztcbiAgdmFyIHJlZ2V4ID0gXCIoPzpcIiArIHByb3RvY29sICsgXCJ8d3d3XFxcXC4pXCIgKyBhdXRoICsgXCIoPzpsb2NhbGhvc3R8XCIgKyBpcHY0ICsgXCJ8XCIgKyBpcHY2ICsgXCJ8XCIgKyBob3N0ICsgZG9tYWluICsgdGxkICsgXCIpXCIgKyBwb3J0ICsgcGF0aDtcbiAgdXJsUmVnID0gbmV3IFJlZ0V4cChcIig/Ol5cIiArIHJlZ2V4ICsgXCIkKVwiLCAnaScpO1xuICByZXR1cm4gdXJsUmVnO1xufSk7XG5cbi8qIGVzbGludCBtYXgtbGVuOjAgKi9cblxudmFyIHBhdHRlcm4kMiA9IHtcbiAgLy8gaHR0cDovL2VtYWlscmVnZXguY29tL1xuICBlbWFpbDogL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXStcXC4pK1thLXpBLVpcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdezIsfSkpJC8sXG4gIC8vIHVybDogbmV3IFJlZ0V4cChcbiAgLy8gICAnXig/IW1haWx0bzopKD86KD86aHR0cHxodHRwc3xmdHApOi8vfC8vKSg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPyg/Oig/Oig/OlsxLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMDFdXFxcXGR8MjJbMC0zXSkoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn0oPzpcXFxcLig/OlswLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLSopKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKig/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpKXxsb2NhbGhvc3QpKD86OlxcXFxkezIsNX0pPyg/OigvfFxcXFw/fCMpW15cXFxcc10qKT8kJyxcbiAgLy8gICAnaScsXG4gIC8vICksXG4gIGhleDogL14jPyhbYS1mMC05XXs2fXxbYS1mMC05XXszfSkkL2lcbn07XG52YXIgdHlwZXMgPSB7XG4gIGludGVnZXI6IGZ1bmN0aW9uIGludGVnZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZXMubnVtYmVyKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZSwgMTApID09PSB2YWx1ZTtcbiAgfSxcbiAgXCJmbG9hdFwiOiBmdW5jdGlvbiBmbG9hdCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlcy5udW1iZXIodmFsdWUpICYmICF0eXBlcy5pbnRlZ2VyKHZhbHVlKTtcbiAgfSxcbiAgYXJyYXk6IGZ1bmN0aW9uIGFycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9LFxuICByZWdleHA6IGZ1bmN0aW9uIHJlZ2V4cCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAhIW5ldyBSZWdFeHAodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGRhdGU6IGZ1bmN0aW9uIGRhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlLmdldFRpbWUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmdldE1vbnRoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5nZXRZZWFyID09PSAnZnVuY3Rpb24nICYmICFpc05hTih2YWx1ZS5nZXRUaW1lKCkpO1xuICB9LFxuICBudW1iZXI6IGZ1bmN0aW9uIG51bWJlcih2YWx1ZSkge1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiBvYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhdHlwZXMuYXJyYXkodmFsdWUpO1xuICB9LFxuICBtZXRob2Q6IGZ1bmN0aW9uIG1ldGhvZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH0sXG4gIGVtYWlsOiBmdW5jdGlvbiBlbWFpbCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA8PSAzMjAgJiYgISF2YWx1ZS5tYXRjaChwYXR0ZXJuJDIuZW1haWwpO1xuICB9LFxuICB1cmw6IGZ1bmN0aW9uIHVybCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA8PSAyMDQ4ICYmICEhdmFsdWUubWF0Y2goZ2V0VXJsUmVnZXgoKSk7XG4gIH0sXG4gIGhleDogZnVuY3Rpb24gaGV4KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISF2YWx1ZS5tYXRjaChwYXR0ZXJuJDIuaGV4KTtcbiAgfVxufTtcblxudmFyIHR5cGUkMSA9IGZ1bmN0aW9uIHR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKSB7XG4gIGlmIChydWxlLnJlcXVpcmVkICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXF1aXJlZCQxKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGN1c3RvbSA9IFsnaW50ZWdlcicsICdmbG9hdCcsICdhcnJheScsICdyZWdleHAnLCAnb2JqZWN0JywgJ21ldGhvZCcsICdlbWFpbCcsICdudW1iZXInLCAnZGF0ZScsICd1cmwnLCAnaGV4J107XG4gIHZhciBydWxlVHlwZSA9IHJ1bGUudHlwZTtcblxuICBpZiAoY3VzdG9tLmluZGV4T2YocnVsZVR5cGUpID4gLTEpIHtcbiAgICBpZiAoIXR5cGVzW3J1bGVUeXBlXSh2YWx1ZSkpIHtcbiAgICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLnR5cGVzW3J1bGVUeXBlXSwgcnVsZS5mdWxsRmllbGQsIHJ1bGUudHlwZSkpO1xuICAgIH0gLy8gc3RyYWlnaHQgdHlwZW9mIGNoZWNrXG5cbiAgfSBlbHNlIGlmIChydWxlVHlwZSAmJiB0eXBlb2YgdmFsdWUgIT09IHJ1bGUudHlwZSkge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLnR5cGVzW3J1bGVUeXBlXSwgcnVsZS5mdWxsRmllbGQsIHJ1bGUudHlwZSkpO1xuICB9XG59O1xuXG52YXIgcmFuZ2UgPSBmdW5jdGlvbiByYW5nZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpIHtcbiAgdmFyIGxlbiA9IHR5cGVvZiBydWxlLmxlbiA9PT0gJ251bWJlcic7XG4gIHZhciBtaW4gPSB0eXBlb2YgcnVsZS5taW4gPT09ICdudW1iZXInO1xuICB2YXIgbWF4ID0gdHlwZW9mIHJ1bGUubWF4ID09PSAnbnVtYmVyJzsgLy8g5q2j5YiZ5Yy56YWN56CB54K56IyD5Zu05LuOVSswMTAwMDDkuIDnm7TliLBVKzEwRkZGRueahOaWh+Wtl++8iOihpeWFheW5s+mdolN1cHBsZW1lbnRhcnkgUGxhbmXvvIlcblxuICB2YXIgc3BSZWdleHAgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xuICB2YXIgdmFsID0gdmFsdWU7XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgbnVtID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgdmFyIHN0ciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIHZhciBhcnIgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcblxuICBpZiAobnVtKSB7XG4gICAga2V5ID0gJ251bWJlcic7XG4gIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAga2V5ID0gJ3N0cmluZyc7XG4gIH0gZWxzZSBpZiAoYXJyKSB7XG4gICAga2V5ID0gJ2FycmF5JztcbiAgfSAvLyBpZiB0aGUgdmFsdWUgaXMgbm90IG9mIGEgc3VwcG9ydGVkIHR5cGUgZm9yIHJhbmdlIHZhbGlkYXRpb25cbiAgLy8gdGhlIHZhbGlkYXRpb24gcnVsZSBydWxlIHNob3VsZCB1c2UgdGhlXG4gIC8vIHR5cGUgcHJvcGVydHkgdG8gYWxzbyB0ZXN0IGZvciBhIHBhcnRpY3VsYXIgdHlwZVxuXG5cbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYXJyKSB7XG4gICAgdmFsID0gdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgaWYgKHN0cikge1xuICAgIC8vIOWkhOeQhueggeeCueWkp+S6jlUrMDEwMDAw55qE5paH5a2XbGVuZ3Ro5bGe5oCn5LiN5YeG56Gu55qEYnVn77yM5aaCXCLwoK638KCut/CgrrdcIi5sZW5naHQgIT09IDNcbiAgICB2YWwgPSB2YWx1ZS5yZXBsYWNlKHNwUmVnZXhwLCAnXycpLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChsZW4pIHtcbiAgICBpZiAodmFsICE9PSBydWxlLmxlbikge1xuICAgICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXNba2V5XS5sZW4sIHJ1bGUuZnVsbEZpZWxkLCBydWxlLmxlbikpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtaW4gJiYgIW1heCAmJiB2YWwgPCBydWxlLm1pbikge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW2tleV0ubWluLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS5taW4pKTtcbiAgfSBlbHNlIGlmIChtYXggJiYgIW1pbiAmJiB2YWwgPiBydWxlLm1heCkge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW2tleV0ubWF4LCBydWxlLmZ1bGxGaWVsZCwgcnVsZS5tYXgpKTtcbiAgfSBlbHNlIGlmIChtaW4gJiYgbWF4ICYmICh2YWwgPCBydWxlLm1pbiB8fCB2YWwgPiBydWxlLm1heCkpIHtcbiAgICBlcnJvcnMucHVzaChmb3JtYXQob3B0aW9ucy5tZXNzYWdlc1trZXldLnJhbmdlLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS5taW4sIHJ1bGUubWF4KSk7XG4gIH1cbn07XG5cbnZhciBFTlVNJDEgPSAnZW51bSc7XG5cbnZhciBlbnVtZXJhYmxlJDEgPSBmdW5jdGlvbiBlbnVtZXJhYmxlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICBydWxlW0VOVU0kMV0gPSBBcnJheS5pc0FycmF5KHJ1bGVbRU5VTSQxXSkgPyBydWxlW0VOVU0kMV0gOiBbXTtcblxuICBpZiAocnVsZVtFTlVNJDFdLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGVycm9ycy5wdXNoKGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW0VOVU0kMV0sIHJ1bGUuZnVsbEZpZWxkLCBydWxlW0VOVU0kMV0uam9pbignLCAnKSkpO1xuICB9XG59O1xuXG52YXIgcGF0dGVybiQxID0gZnVuY3Rpb24gcGF0dGVybihydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpIHtcbiAgaWYgKHJ1bGUucGF0dGVybikge1xuICAgIGlmIChydWxlLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIGlmIGEgUmVnRXhwIGluc3RhbmNlIGlzIHBhc3NlZCwgcmVzZXQgYGxhc3RJbmRleGAgaW4gY2FzZSBpdHMgYGdsb2JhbGBcbiAgICAgIC8vIGZsYWcgaXMgYWNjaWRlbnRhbGx5IHNldCB0byBgdHJ1ZWAsIHdoaWNoIGluIGEgdmFsaWRhdGlvbiBzY2VuYXJpb1xuICAgICAgLy8gaXMgbm90IG5lY2Vzc2FyeSBhbmQgdGhlIHJlc3VsdCBtaWdodCBiZSBtaXNsZWFkaW5nXG4gICAgICBydWxlLnBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuICAgICAgaWYgKCFydWxlLnBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucGF0dGVybi5taXNtYXRjaCwgcnVsZS5mdWxsRmllbGQsIHZhbHVlLCBydWxlLnBhdHRlcm4pKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBydWxlLnBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgX3BhdHRlcm4gPSBuZXcgUmVnRXhwKHJ1bGUucGF0dGVybik7XG5cbiAgICAgIGlmICghX3BhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucGF0dGVybi5taXNtYXRjaCwgcnVsZS5mdWxsRmllbGQsIHZhbHVlLCBydWxlLnBhdHRlcm4pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBydWxlcyA9IHtcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkJDEsXG4gIHdoaXRlc3BhY2U6IHdoaXRlc3BhY2UsXG4gIHR5cGU6IHR5cGUkMSxcbiAgcmFuZ2U6IHJhbmdlLFxuICBcImVudW1cIjogZW51bWVyYWJsZSQxLFxuICBwYXR0ZXJuOiBwYXR0ZXJuJDFcbn07XG5cbnZhciBzdHJpbmcgPSBmdW5jdGlvbiBzdHJpbmcocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlLCAnc3RyaW5nJykgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgJ3N0cmluZycpO1xuXG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgcnVsZXMucmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnBhdHRlcm4ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHJ1bGUud2hpdGVzcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBydWxlcy53aGl0ZXNwYWNlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn07XG5cbnZhciBtZXRob2QgPSBmdW5jdGlvbiBtZXRob2QocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn07XG5cbnZhciBudW1iZXIgPSBmdW5jdGlvbiBudW1iZXIocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICBydWxlcy5yYW5nZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59O1xuXG52YXIgX2Jvb2xlYW4gPSBmdW5jdGlvbiBfYm9vbGVhbihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjayhlcnJvcnMpO1xufTtcblxudmFyIHJlZ2V4cCA9IGZ1bmN0aW9uIHJlZ2V4cChydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn07XG5cbnZhciBpbnRlZ2VyID0gZnVuY3Rpb24gaW50ZWdlcihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn07XG5cbnZhciBmbG9hdEZuID0gZnVuY3Rpb24gZmxvYXRGbihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn07XG5cbnZhciBhcnJheSA9IGZ1bmN0aW9uIGFycmF5KHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKCh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zLCAnYXJyYXknKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICBydWxlcy5yYW5nZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59O1xuXG52YXIgb2JqZWN0ID0gZnVuY3Rpb24gb2JqZWN0KHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59O1xuXG52YXIgRU5VTSA9ICdlbnVtJztcblxudmFyIGVudW1lcmFibGUgPSBmdW5jdGlvbiBlbnVtZXJhYmxlKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXNbRU5VTV0ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjayhlcnJvcnMpO1xufTtcblxudmFyIHBhdHRlcm4gPSBmdW5jdGlvbiBwYXR0ZXJuKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG5cbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSwgJ3N0cmluZycpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgcnVsZXMucGF0dGVybihydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59O1xuXG52YXIgZGF0ZSA9IGZ1bmN0aW9uIGRhdGUocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgLy8gY29uc29sZS5sb2coJ2ludGVnZXIgcnVsZSBjYWxsZWQgJWonLCBydWxlKTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTsgLy8gY29uc29sZS5sb2coJ3ZhbGlkYXRlIG9uICVzIHZhbHVlJywgdmFsdWUpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUsICdkYXRlJykgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG5cbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSwgJ2RhdGUnKSkge1xuICAgICAgdmFyIGRhdGVPYmplY3Q7XG5cbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgZGF0ZU9iamVjdCA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcnVsZXMudHlwZShydWxlLCBkYXRlT2JqZWN0LCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG5cbiAgICAgIGlmIChkYXRlT2JqZWN0KSB7XG4gICAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIGRhdGVPYmplY3QuZ2V0VGltZSgpLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn07XG5cbnZhciByZXF1aXJlZCA9IGZ1bmN0aW9uIHJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHR5cGUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/ICdhcnJheScgOiB0eXBlb2YgdmFsdWU7XG4gIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgdHlwZSk7XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59O1xuXG52YXIgdHlwZSA9IGZ1bmN0aW9uIHR5cGUocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHJ1bGVUeXBlID0gcnVsZS50eXBlO1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuXG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUsIHJ1bGVUeXBlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zLCBydWxlVHlwZSk7XG5cbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSwgcnVsZVR5cGUpKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn07XG5cbnZhciBhbnkgPSBmdW5jdGlvbiBhbnkocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcblxuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNhbGxiYWNrKGVycm9ycyk7XG59O1xuXG52YXIgdmFsaWRhdG9ycyA9IHtcbiAgc3RyaW5nOiBzdHJpbmcsXG4gIG1ldGhvZDogbWV0aG9kLFxuICBudW1iZXI6IG51bWJlcixcbiAgXCJib29sZWFuXCI6IF9ib29sZWFuLFxuICByZWdleHA6IHJlZ2V4cCxcbiAgaW50ZWdlcjogaW50ZWdlcixcbiAgXCJmbG9hdFwiOiBmbG9hdEZuLFxuICBhcnJheTogYXJyYXksXG4gIG9iamVjdDogb2JqZWN0LFxuICBcImVudW1cIjogZW51bWVyYWJsZSxcbiAgcGF0dGVybjogcGF0dGVybixcbiAgZGF0ZTogZGF0ZSxcbiAgdXJsOiB0eXBlLFxuICBoZXg6IHR5cGUsXG4gIGVtYWlsOiB0eXBlLFxuICByZXF1aXJlZDogcmVxdWlyZWQsXG4gIGFueTogYW55XG59O1xuXG5mdW5jdGlvbiBuZXdNZXNzYWdlcygpIHtcbiAgcmV0dXJuIHtcbiAgICBcImRlZmF1bHRcIjogJ1ZhbGlkYXRpb24gZXJyb3Igb24gZmllbGQgJXMnLFxuICAgIHJlcXVpcmVkOiAnJXMgaXMgcmVxdWlyZWQnLFxuICAgIFwiZW51bVwiOiAnJXMgbXVzdCBiZSBvbmUgb2YgJXMnLFxuICAgIHdoaXRlc3BhY2U6ICclcyBjYW5ub3QgYmUgZW1wdHknLFxuICAgIGRhdGU6IHtcbiAgICAgIGZvcm1hdDogJyVzIGRhdGUgJXMgaXMgaW52YWxpZCBmb3IgZm9ybWF0ICVzJyxcbiAgICAgIHBhcnNlOiAnJXMgZGF0ZSBjb3VsZCBub3QgYmUgcGFyc2VkLCAlcyBpcyBpbnZhbGlkICcsXG4gICAgICBpbnZhbGlkOiAnJXMgZGF0ZSAlcyBpcyBpbnZhbGlkJ1xuICAgIH0sXG4gICAgdHlwZXM6IHtcbiAgICAgIHN0cmluZzogJyVzIGlzIG5vdCBhICVzJyxcbiAgICAgIG1ldGhvZDogJyVzIGlzIG5vdCBhICVzIChmdW5jdGlvbiknLFxuICAgICAgYXJyYXk6ICclcyBpcyBub3QgYW4gJXMnLFxuICAgICAgb2JqZWN0OiAnJXMgaXMgbm90IGFuICVzJyxcbiAgICAgIG51bWJlcjogJyVzIGlzIG5vdCBhICVzJyxcbiAgICAgIGRhdGU6ICclcyBpcyBub3QgYSAlcycsXG4gICAgICBcImJvb2xlYW5cIjogJyVzIGlzIG5vdCBhICVzJyxcbiAgICAgIGludGVnZXI6ICclcyBpcyBub3QgYW4gJXMnLFxuICAgICAgXCJmbG9hdFwiOiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgcmVnZXhwOiAnJXMgaXMgbm90IGEgdmFsaWQgJXMnLFxuICAgICAgZW1haWw6ICclcyBpcyBub3QgYSB2YWxpZCAlcycsXG4gICAgICB1cmw6ICclcyBpcyBub3QgYSB2YWxpZCAlcycsXG4gICAgICBoZXg6ICclcyBpcyBub3QgYSB2YWxpZCAlcydcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgbGVuOiAnJXMgbXVzdCBiZSBleGFjdGx5ICVzIGNoYXJhY3RlcnMnLFxuICAgICAgbWluOiAnJXMgbXVzdCBiZSBhdCBsZWFzdCAlcyBjaGFyYWN0ZXJzJyxcbiAgICAgIG1heDogJyVzIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAlcyBjaGFyYWN0ZXJzJyxcbiAgICAgIHJhbmdlOiAnJXMgbXVzdCBiZSBiZXR3ZWVuICVzIGFuZCAlcyBjaGFyYWN0ZXJzJ1xuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBsZW46ICclcyBtdXN0IGVxdWFsICVzJyxcbiAgICAgIG1pbjogJyVzIGNhbm5vdCBiZSBsZXNzIHRoYW4gJXMnLFxuICAgICAgbWF4OiAnJXMgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAlcycsXG4gICAgICByYW5nZTogJyVzIG11c3QgYmUgYmV0d2VlbiAlcyBhbmQgJXMnXG4gICAgfSxcbiAgICBhcnJheToge1xuICAgICAgbGVuOiAnJXMgbXVzdCBiZSBleGFjdGx5ICVzIGluIGxlbmd0aCcsXG4gICAgICBtaW46ICclcyBjYW5ub3QgYmUgbGVzcyB0aGFuICVzIGluIGxlbmd0aCcsXG4gICAgICBtYXg6ICclcyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICVzIGluIGxlbmd0aCcsXG4gICAgICByYW5nZTogJyVzIG11c3QgYmUgYmV0d2VlbiAlcyBhbmQgJXMgaW4gbGVuZ3RoJ1xuICAgIH0sXG4gICAgcGF0dGVybjoge1xuICAgICAgbWlzbWF0Y2g6ICclcyB2YWx1ZSAlcyBkb2VzIG5vdCBtYXRjaCBwYXR0ZXJuICVzJ1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgdmFyIGNsb25lZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgY2xvbmVkLmNsb25lID0gdGhpcy5jbG9uZTtcbiAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfVxuICB9O1xufVxudmFyIG1lc3NhZ2VzID0gbmV3TWVzc2FnZXMoKTtcblxuLyoqXG4gKiAgRW5jYXBzdWxhdGVzIGEgdmFsaWRhdGlvbiBzY2hlbWEuXG4gKlxuICogIEBwYXJhbSBkZXNjcmlwdG9yIEFuIG9iamVjdCBkZWNsYXJpbmcgdmFsaWRhdGlvbiBydWxlc1xuICogIGZvciB0aGlzIHNjaGVtYS5cbiAqL1xuXG52YXIgU2NoZW1hID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBTdGF0aWMgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gSW5zdGFuY2UgPT09PT09PT09PT09PT09PT09PT09PT09XG4gIGZ1bmN0aW9uIFNjaGVtYShkZXNjcmlwdG9yKSB7XG4gICAgdGhpcy5ydWxlcyA9IG51bGw7XG4gICAgdGhpcy5fbWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB0aGlzLmRlZmluZShkZXNjcmlwdG9yKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTY2hlbWEucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUocnVsZXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFydWxlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29uZmlndXJlIGEgc2NoZW1hIHdpdGggbm8gcnVsZXMnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJ1bGVzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSdWxlcyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGl0ZW0gPSBydWxlc1tuYW1lXTtcbiAgICAgIF90aGlzLnJ1bGVzW25hbWVdID0gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW0gOiBbaXRlbV07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm1lc3NhZ2VzID0gZnVuY3Rpb24gbWVzc2FnZXMoX21lc3NhZ2VzKSB7XG4gICAgaWYgKF9tZXNzYWdlcykge1xuICAgICAgdGhpcy5fbWVzc2FnZXMgPSBkZWVwTWVyZ2UobmV3TWVzc2FnZXMoKSwgX21lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXM7XG4gIH07XG5cbiAgX3Byb3RvLnZhbGlkYXRlID0gZnVuY3Rpb24gdmFsaWRhdGUoc291cmNlXywgbywgb2MpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmIChvID09PSB2b2lkIDApIHtcbiAgICAgIG8gPSB7fTtcbiAgICB9XG5cbiAgICBpZiAob2MgPT09IHZvaWQgMCkge1xuICAgICAgb2MgPSBmdW5jdGlvbiBvYygpIHt9O1xuICAgIH1cblxuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VfO1xuICAgIHZhciBvcHRpb25zID0gbztcbiAgICB2YXIgY2FsbGJhY2sgPSBvYztcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ydWxlcyB8fCBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBzb3VyY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNvdXJjZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGxldGUocmVzdWx0cykge1xuICAgICAgdmFyIGVycm9ycyA9IFtdO1xuICAgICAgdmFyIGZpZWxkcyA9IHt9O1xuXG4gICAgICBmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgICAgIHZhciBfZXJyb3JzO1xuXG4gICAgICAgICAgZXJyb3JzID0gKF9lcnJvcnMgPSBlcnJvcnMpLmNvbmNhdC5hcHBseShfZXJyb3JzLCBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRkKHJlc3VsdHNbaV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgc291cmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkcyA9IGNvbnZlcnRGaWVsZHNFcnJvcihlcnJvcnMpO1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMsIGZpZWxkcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWVzc2FnZXMpIHtcbiAgICAgIHZhciBtZXNzYWdlcyQxID0gdGhpcy5tZXNzYWdlcygpO1xuXG4gICAgICBpZiAobWVzc2FnZXMkMSA9PT0gbWVzc2FnZXMpIHtcbiAgICAgICAgbWVzc2FnZXMkMSA9IG5ld01lc3NhZ2VzKCk7XG4gICAgICB9XG5cbiAgICAgIGRlZXBNZXJnZShtZXNzYWdlcyQxLCBvcHRpb25zLm1lc3NhZ2VzKTtcbiAgICAgIG9wdGlvbnMubWVzc2FnZXMgPSBtZXNzYWdlcyQxO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcygpO1xuICAgIH1cblxuICAgIHZhciBzZXJpZXMgPSB7fTtcbiAgICB2YXIga2V5cyA9IG9wdGlvbnMua2V5cyB8fCBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKHopIHtcbiAgICAgIHZhciBhcnIgPSBfdGhpczIucnVsZXNbel07XG4gICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vbel07XG4gICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICB2YXIgcnVsZSA9IHI7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBydWxlLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChzb3VyY2UgPT09IHNvdXJjZV8pIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IF9leHRlbmRzKHt9LCBzb3VyY2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhbHVlID0gc291cmNlW3pdID0gcnVsZS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBydWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcnVsZSA9IHtcbiAgICAgICAgICAgIHZhbGlkYXRvcjogcnVsZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVsZSA9IF9leHRlbmRzKHt9LCBydWxlKTtcbiAgICAgICAgfSAvLyBGaWxsIHZhbGlkYXRvci4gU2tpcCBpZiBub3RoaW5nIG5lZWQgdG8gdmFsaWRhdGVcblxuXG4gICAgICAgIHJ1bGUudmFsaWRhdG9yID0gX3RoaXMyLmdldFZhbGlkYXRpb25NZXRob2QocnVsZSk7XG5cbiAgICAgICAgaWYgKCFydWxlLnZhbGlkYXRvcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bGUuZmllbGQgPSB6O1xuICAgICAgICBydWxlLmZ1bGxGaWVsZCA9IHJ1bGUuZnVsbEZpZWxkIHx8IHo7XG4gICAgICAgIHJ1bGUudHlwZSA9IF90aGlzMi5nZXRUeXBlKHJ1bGUpO1xuICAgICAgICBzZXJpZXNbel0gPSBzZXJpZXNbel0gfHwgW107XG4gICAgICAgIHNlcmllc1t6XS5wdXNoKHtcbiAgICAgICAgICBydWxlOiBydWxlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBmaWVsZDogelxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBlcnJvckZpZWxkcyA9IHt9O1xuICAgIHJldHVybiBhc3luY01hcChzZXJpZXMsIG9wdGlvbnMsIGZ1bmN0aW9uIChkYXRhLCBkb0l0KSB7XG4gICAgICB2YXIgcnVsZSA9IGRhdGEucnVsZTtcbiAgICAgIHZhciBkZWVwID0gKHJ1bGUudHlwZSA9PT0gJ29iamVjdCcgfHwgcnVsZS50eXBlID09PSAnYXJyYXknKSAmJiAodHlwZW9mIHJ1bGUuZmllbGRzID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcnVsZS5kZWZhdWx0RmllbGQgPT09ICdvYmplY3QnKTtcbiAgICAgIGRlZXAgPSBkZWVwICYmIChydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIGRhdGEudmFsdWUpO1xuICAgICAgcnVsZS5maWVsZCA9IGRhdGEuZmllbGQ7XG5cbiAgICAgIGZ1bmN0aW9uIGFkZEZ1bGxGaWVsZChrZXksIHNjaGVtYSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNjaGVtYSwge1xuICAgICAgICAgIGZ1bGxGaWVsZDogcnVsZS5mdWxsRmllbGQgKyBcIi5cIiArIGtleSxcbiAgICAgICAgICBmdWxsRmllbGRzOiBydWxlLmZ1bGxGaWVsZHMgPyBbXS5jb25jYXQocnVsZS5mdWxsRmllbGRzLCBba2V5XSkgOiBba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2IoZSkge1xuICAgICAgICBpZiAoZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVycm9yTGlzdCA9IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW2VdO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5zdXBwcmVzc1dhcm5pbmcgJiYgZXJyb3JMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIFNjaGVtYS53YXJuaW5nKCdhc3luYy12YWxpZGF0b3I6JywgZXJyb3JMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvckxpc3QubGVuZ3RoICYmIHJ1bGUubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZXJyb3JMaXN0ID0gW10uY29uY2F0KHJ1bGUubWVzc2FnZSk7XG4gICAgICAgIH0gLy8gRmlsbCBlcnJvciBpbmZvXG5cblxuICAgICAgICB2YXIgZmlsbGVkRXJyb3JzID0gZXJyb3JMaXN0Lm1hcChjb21wbGVtZW50RXJyb3IocnVsZSwgc291cmNlKSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZmlyc3QgJiYgZmlsbGVkRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGVycm9yRmllbGRzW3J1bGUuZmllbGRdID0gMTtcbiAgICAgICAgICByZXR1cm4gZG9JdChmaWxsZWRFcnJvcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkZWVwKSB7XG4gICAgICAgICAgZG9JdChmaWxsZWRFcnJvcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIHJ1bGUgaXMgcmVxdWlyZWQgYnV0IHRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICAgICAgLy8gZG9lcyBub3QgZXhpc3QgZmFpbCBhdCB0aGUgcnVsZSBsZXZlbCBhbmQgZG9uJ3RcbiAgICAgICAgICAvLyBnbyBkZWVwZXJcbiAgICAgICAgICBpZiAocnVsZS5yZXF1aXJlZCAmJiAhZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHJ1bGUubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGZpbGxlZEVycm9ycyA9IFtdLmNvbmNhdChydWxlLm1lc3NhZ2UpLm1hcChjb21wbGVtZW50RXJyb3IocnVsZSwgc291cmNlKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgZmlsbGVkRXJyb3JzID0gW29wdGlvbnMuZXJyb3IocnVsZSwgZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucmVxdWlyZWQsIHJ1bGUuZmllbGQpKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkb0l0KGZpbGxlZEVycm9ycyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGZpZWxkc1NjaGVtYSA9IHt9O1xuXG4gICAgICAgICAgaWYgKHJ1bGUuZGVmYXVsdEZpZWxkKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnZhbHVlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICBmaWVsZHNTY2hlbWFba2V5XSA9IHJ1bGUuZGVmYXVsdEZpZWxkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmllbGRzU2NoZW1hID0gX2V4dGVuZHMoe30sIGZpZWxkc1NjaGVtYSwgZGF0YS5ydWxlLmZpZWxkcyk7XG4gICAgICAgICAgdmFyIHBhcmVkRmllbGRzU2NoZW1hID0ge307XG4gICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzU2NoZW1hKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgICAgdmFyIGZpZWxkU2NoZW1hID0gZmllbGRzU2NoZW1hW2ZpZWxkXTtcbiAgICAgICAgICAgIHZhciBmaWVsZFNjaGVtYUxpc3QgPSBBcnJheS5pc0FycmF5KGZpZWxkU2NoZW1hKSA/IGZpZWxkU2NoZW1hIDogW2ZpZWxkU2NoZW1hXTtcbiAgICAgICAgICAgIHBhcmVkRmllbGRzU2NoZW1hW2ZpZWxkXSA9IGZpZWxkU2NoZW1hTGlzdC5tYXAoYWRkRnVsbEZpZWxkLmJpbmQobnVsbCwgZmllbGQpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgc2NoZW1hID0gbmV3IFNjaGVtYShwYXJlZEZpZWxkc1NjaGVtYSk7XG4gICAgICAgICAgc2NoZW1hLm1lc3NhZ2VzKG9wdGlvbnMubWVzc2FnZXMpO1xuXG4gICAgICAgICAgaWYgKGRhdGEucnVsZS5vcHRpb25zKSB7XG4gICAgICAgICAgICBkYXRhLnJ1bGUub3B0aW9ucy5tZXNzYWdlcyA9IG9wdGlvbnMubWVzc2FnZXM7XG4gICAgICAgICAgICBkYXRhLnJ1bGUub3B0aW9ucy5lcnJvciA9IG9wdGlvbnMuZXJyb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2NoZW1hLnZhbGlkYXRlKGRhdGEudmFsdWUsIGRhdGEucnVsZS5vcHRpb25zIHx8IG9wdGlvbnMsIGZ1bmN0aW9uIChlcnJzKSB7XG4gICAgICAgICAgICB2YXIgZmluYWxFcnJvcnMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGZpbGxlZEVycm9ycyAmJiBmaWxsZWRFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGZpbmFsRXJyb3JzLnB1c2guYXBwbHkoZmluYWxFcnJvcnMsIGZpbGxlZEVycm9ycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJzICYmIGVycnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGZpbmFsRXJyb3JzLnB1c2guYXBwbHkoZmluYWxFcnJvcnMsIGVycnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb0l0KGZpbmFsRXJyb3JzLmxlbmd0aCA/IGZpbmFsRXJyb3JzIDogbnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHJlcztcblxuICAgICAgaWYgKHJ1bGUuYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgcmVzID0gcnVsZS5hc3luY1ZhbGlkYXRvcihydWxlLCBkYXRhLnZhbHVlLCBjYiwgZGF0YS5zb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChydWxlLnZhbGlkYXRvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHJ1bGUudmFsaWRhdG9yKHJ1bGUsIGRhdGEudmFsdWUsIGNiLCBkYXRhLnNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29uc29sZS5lcnJvcihlcnJvcik7IC8vIHJldGhyb3cgdG8gcmVwb3J0IGVycm9yXG5cbiAgICAgICAgICBpZiAoIW9wdGlvbnMuc3VwcHJlc3NWYWxpZGF0b3JFcnJvcikge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzID09PSB0cnVlKSB7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY2IodHlwZW9mIHJ1bGUubWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyA/IHJ1bGUubWVzc2FnZShydWxlLmZ1bGxGaWVsZCB8fCBydWxlLmZpZWxkKSA6IHJ1bGUubWVzc2FnZSB8fCAocnVsZS5mdWxsRmllbGQgfHwgcnVsZS5maWVsZCkgKyBcIiBmYWlsc1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIGNiKHJlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBjYihyZXMubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlcyAmJiByZXMudGhlbikge1xuICAgICAgICByZXMudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGNiKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgY29tcGxldGUocmVzdWx0cyk7XG4gICAgfSwgc291cmNlKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VHlwZSA9IGZ1bmN0aW9uIGdldFR5cGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgPT09IHVuZGVmaW5lZCAmJiBydWxlLnBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJ1bGUudHlwZSA9ICdwYXR0ZXJuJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJ1bGUudmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nICYmIHJ1bGUudHlwZSAmJiAhdmFsaWRhdG9ycy5oYXNPd25Qcm9wZXJ0eShydWxlLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0KCdVbmtub3duIHJ1bGUgdHlwZSAlcycsIHJ1bGUudHlwZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlLnR5cGUgfHwgJ3N0cmluZyc7XG4gIH07XG5cbiAgX3Byb3RvLmdldFZhbGlkYXRpb25NZXRob2QgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWV0aG9kKHJ1bGUpIHtcbiAgICBpZiAodHlwZW9mIHJ1bGUudmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcnVsZS52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKTtcbiAgICB2YXIgbWVzc2FnZUluZGV4ID0ga2V5cy5pbmRleE9mKCdtZXNzYWdlJyk7XG5cbiAgICBpZiAobWVzc2FnZUluZGV4ICE9PSAtMSkge1xuICAgICAga2V5cy5zcGxpY2UobWVzc2FnZUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgcmV0dXJuIHZhbGlkYXRvcnMucmVxdWlyZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnNbdGhpcy5nZXRUeXBlKHJ1bGUpXSB8fCB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmV0dXJuIFNjaGVtYTtcbn0oKTtcblxuU2NoZW1hLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIodHlwZSwgdmFsaWRhdG9yKSB7XG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVnaXN0ZXIgYSB2YWxpZGF0b3IgYnkgdHlwZSwgdmFsaWRhdG9yIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YWxpZGF0b3JzW3R5cGVdID0gdmFsaWRhdG9yO1xufTtcblxuU2NoZW1hLndhcm5pbmcgPSB3YXJuaW5nO1xuU2NoZW1hLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG5TY2hlbWEudmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG5cbmV4cG9ydCB7IFNjaGVtYSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsInZhciB0eXBlVGVtcGxhdGUgPSBcIicke25hbWV9JyBpcyBub3QgYSB2YWxpZCAke3R5cGV9XCI7XG5leHBvcnQgdmFyIGRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzID0ge1xuICBkZWZhdWx0OiBcIlZhbGlkYXRpb24gZXJyb3Igb24gZmllbGQgJyR7bmFtZX0nXCIsXG4gIHJlcXVpcmVkOiBcIicke25hbWV9JyBpcyByZXF1aXJlZFwiLFxuICBlbnVtOiBcIicke25hbWV9JyBtdXN0IGJlIG9uZSBvZiBbJHtlbnVtfV1cIixcbiAgd2hpdGVzcGFjZTogXCInJHtuYW1lfScgY2Fubm90IGJlIGVtcHR5XCIsXG4gIGRhdGU6IHtcbiAgICBmb3JtYXQ6IFwiJyR7bmFtZX0nIGlzIGludmFsaWQgZm9yIGZvcm1hdCBkYXRlXCIsXG4gICAgcGFyc2U6IFwiJyR7bmFtZX0nIGNvdWxkIG5vdCBiZSBwYXJzZWQgYXMgZGF0ZVwiLFxuICAgIGludmFsaWQ6IFwiJyR7bmFtZX0nIGlzIGludmFsaWQgZGF0ZVwiXG4gIH0sXG4gIHR5cGVzOiB7XG4gICAgc3RyaW5nOiB0eXBlVGVtcGxhdGUsXG4gICAgbWV0aG9kOiB0eXBlVGVtcGxhdGUsXG4gICAgYXJyYXk6IHR5cGVUZW1wbGF0ZSxcbiAgICBvYmplY3Q6IHR5cGVUZW1wbGF0ZSxcbiAgICBudW1iZXI6IHR5cGVUZW1wbGF0ZSxcbiAgICBkYXRlOiB0eXBlVGVtcGxhdGUsXG4gICAgYm9vbGVhbjogdHlwZVRlbXBsYXRlLFxuICAgIGludGVnZXI6IHR5cGVUZW1wbGF0ZSxcbiAgICBmbG9hdDogdHlwZVRlbXBsYXRlLFxuICAgIHJlZ2V4cDogdHlwZVRlbXBsYXRlLFxuICAgIGVtYWlsOiB0eXBlVGVtcGxhdGUsXG4gICAgdXJsOiB0eXBlVGVtcGxhdGUsXG4gICAgaGV4OiB0eXBlVGVtcGxhdGVcbiAgfSxcbiAgc3RyaW5nOiB7XG4gICAgbGVuOiBcIicke25hbWV9JyBtdXN0IGJlIGV4YWN0bHkgJHtsZW59IGNoYXJhY3RlcnNcIixcbiAgICBtaW46IFwiJyR7bmFtZX0nIG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnNcIixcbiAgICBtYXg6IFwiJyR7bmFtZX0nIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAke21heH0gY2hhcmFjdGVyc1wiLFxuICAgIHJhbmdlOiBcIicke25hbWV9JyBtdXN0IGJlIGJldHdlZW4gJHttaW59IGFuZCAke21heH0gY2hhcmFjdGVyc1wiXG4gIH0sXG4gIG51bWJlcjoge1xuICAgIGxlbjogXCInJHtuYW1lfScgbXVzdCBlcXVhbCAke2xlbn1cIixcbiAgICBtaW46IFwiJyR7bmFtZX0nIGNhbm5vdCBiZSBsZXNzIHRoYW4gJHttaW59XCIsXG4gICAgbWF4OiBcIicke25hbWV9JyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICR7bWF4fVwiLFxuICAgIHJhbmdlOiBcIicke25hbWV9JyBtdXN0IGJlIGJldHdlZW4gJHttaW59IGFuZCAke21heH1cIlxuICB9LFxuICBhcnJheToge1xuICAgIGxlbjogXCInJHtuYW1lfScgbXVzdCBiZSBleGFjdGx5ICR7bGVufSBpbiBsZW5ndGhcIixcbiAgICBtaW46IFwiJyR7bmFtZX0nIGNhbm5vdCBiZSBsZXNzIHRoYW4gJHttaW59IGluIGxlbmd0aFwiLFxuICAgIG1heDogXCInJHtuYW1lfScgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAke21heH0gaW4gbGVuZ3RoXCIsXG4gICAgcmFuZ2U6IFwiJyR7bmFtZX0nIG11c3QgYmUgYmV0d2VlbiAke21pbn0gYW5kICR7bWF4fSBpbiBsZW5ndGhcIlxuICB9LFxuICBwYXR0ZXJuOiB7XG4gICAgbWlzbWF0Y2g6IFwiJyR7bmFtZX0nIGRvZXMgbm90IG1hdGNoIHBhdHRlcm4gJHtwYXR0ZXJufVwiXG4gIH1cbn07IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX3RvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQXJyYXlcIjtcbmltcG9ydCBnZXQgZnJvbSAnLi9nZXQnO1xuZnVuY3Rpb24gaW50ZXJuYWxTZXQoZW50aXR5LCBwYXRocywgdmFsdWUsIHJlbW92ZUlmVW5kZWZpbmVkKSB7XG4gIGlmICghcGF0aHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBfcGF0aHMgPSBfdG9BcnJheShwYXRocyksXG4gICAgcGF0aCA9IF9wYXRoc1swXSxcbiAgICByZXN0UGF0aCA9IF9wYXRocy5zbGljZSgxKTtcbiAgdmFyIGNsb25lO1xuICBpZiAoIWVudGl0eSAmJiB0eXBlb2YgcGF0aCA9PT0gJ251bWJlcicpIHtcbiAgICBjbG9uZSA9IFtdO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZW50aXR5KSkge1xuICAgIGNsb25lID0gX3RvQ29uc3VtYWJsZUFycmF5KGVudGl0eSk7XG4gIH0gZWxzZSB7XG4gICAgY2xvbmUgPSBfb2JqZWN0U3ByZWFkKHt9LCBlbnRpdHkpO1xuICB9XG4gIC8vIERlbGV0ZSBwcm9wIGlmIGByZW1vdmVJZlVuZGVmaW5lZGAgYW5kIHZhbHVlIGlzIHVuZGVmaW5lZFxuICBpZiAocmVtb3ZlSWZVbmRlZmluZWQgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCAmJiByZXN0UGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICBkZWxldGUgY2xvbmVbcGF0aF1bcmVzdFBhdGhbMF1dO1xuICB9IGVsc2Uge1xuICAgIGNsb25lW3BhdGhdID0gaW50ZXJuYWxTZXQoY2xvbmVbcGF0aF0sIHJlc3RQYXRoLCB2YWx1ZSwgcmVtb3ZlSWZVbmRlZmluZWQpO1xuICB9XG4gIHJldHVybiBjbG9uZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldChlbnRpdHksIHBhdGhzLCB2YWx1ZSkge1xuICB2YXIgcmVtb3ZlSWZVbmRlZmluZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuICAvLyBEbyBub3RoaW5nIGlmIGByZW1vdmVJZlVuZGVmaW5lZGAgYW5kIHBhcmVudCBvYmplY3Qgbm90IGV4aXN0XG4gIGlmIChwYXRocy5sZW5ndGggJiYgcmVtb3ZlSWZVbmRlZmluZWQgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhZ2V0KGVudGl0eSwgcGF0aHMuc2xpY2UoMCwgLTEpKSkge1xuICAgIHJldHVybiBlbnRpdHk7XG4gIH1cbiAgcmV0dXJuIGludGVybmFsU2V0KGVudGl0eSwgcGF0aHMsIHZhbHVlLCByZW1vdmVJZlVuZGVmaW5lZCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gY2xvbmVBcnJheURlZXAodmFsKTtcbiAgfSBlbHNlIGlmIChfdHlwZW9mKHZhbCkgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBjbG9uZU9iamVjdERlZXAodmFsKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0RGVlcCh2YWwpIHtcbiAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpID09PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgICAgcmVzW2tleV0gPSBjbG9uZURlZXAodmFsW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBjbG9uZUFycmF5RGVlcCh2YWwpIHtcbiAgcmV0dXJuIHZhbC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gY2xvbmVEZWVwKGl0ZW0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVEZWVwOyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGdldCBmcm9tIFwicmMtdXRpbC9lcy91dGlscy9nZXRcIjtcbmltcG9ydCBzZXQgZnJvbSBcInJjLXV0aWwvZXMvdXRpbHMvc2V0XCI7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi90eXBlVXRpbCc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJy4uL3V0aWxzL2Nsb25lRGVlcCc7XG4vKipcbiAqIENvbnZlcnQgbmFtZSB0byBpbnRlcm5hbCBzdXBwb3J0ZWQgZm9ybWF0LlxuICogVGhpcyBmdW5jdGlvbiBzaG91bGQga2VlcCBzaW5jZSB3ZSBzdGlsbCB0aGlua2luZyBpZiBuZWVkIHN1cHBvcnQgbGlrZSBgYS5iLmNgIGZvcm1hdC5cbiAqICdhJyA9PiBbJ2EnXVxuICogMTIzID0+IFsxMjNdXG4gKiBbJ2EnLCAxMjNdID0+IFsnYScsIDEyM11cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZVBhdGgocGF0aCkge1xuICByZXR1cm4gdG9BcnJheShwYXRoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShzdG9yZSwgbmFtZVBhdGgpIHtcbiAgdmFyIHZhbHVlID0gZ2V0KHN0b3JlLCBuYW1lUGF0aCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRWYWx1ZShzdG9yZSwgbmFtZVBhdGgsIHZhbHVlKSB7XG4gIHZhciByZW1vdmVJZlVuZGVmaW5lZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gIHZhciBuZXdTdG9yZSA9IHNldChzdG9yZSwgbmFtZVBhdGgsIHZhbHVlLCByZW1vdmVJZlVuZGVmaW5lZCk7XG4gIHJldHVybiBuZXdTdG9yZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUJ5TmFtZVBhdGhMaXN0KHN0b3JlLCBuYW1lUGF0aExpc3QpIHtcbiAgdmFyIG5ld1N0b3JlID0ge307XG4gIG5hbWVQYXRoTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lUGF0aCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKHN0b3JlLCBuYW1lUGF0aCk7XG4gICAgbmV3U3RvcmUgPSBzZXRWYWx1ZShuZXdTdG9yZSwgbmFtZVBhdGgsIHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBuZXdTdG9yZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluc05hbWVQYXRoKG5hbWVQYXRoTGlzdCwgbmFtZVBhdGgpIHtcbiAgcmV0dXJuIG5hbWVQYXRoTGlzdCAmJiBuYW1lUGF0aExpc3Quc29tZShmdW5jdGlvbiAocGF0aCkge1xuICAgIHJldHVybiBtYXRjaE5hbWVQYXRoKHBhdGgsIG5hbWVQYXRoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gX3R5cGVvZihvYmopID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG4vKipcbiAqIENvcHkgdmFsdWVzIGludG8gc3RvcmUgYW5kIHJldHVybiBhIG5ldyB2YWx1ZXMgb2JqZWN0XG4gKiAoeyBhOiAxLCBiOiB7IGM6IDIgfSB9LCB7IGE6IDQsIGI6IHsgZDogNSB9IH0pID0+IHsgYTogNCwgYjogeyBjOiAyLCBkOiA1IH0gfVxuICovXG5cblxuZnVuY3Rpb24gaW50ZXJuYWxTZXRWYWx1ZXMoc3RvcmUsIHZhbHVlcykge1xuICB2YXIgbmV3U3RvcmUgPSBBcnJheS5pc0FycmF5KHN0b3JlKSA/IF90b0NvbnN1bWFibGVBcnJheShzdG9yZSkgOiBfb2JqZWN0U3ByZWFkKHt9LCBzdG9yZSk7XG5cbiAgaWYgKCF2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3U3RvcmU7XG4gIH1cblxuICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcmV2VmFsdWUgPSBuZXdTdG9yZVtrZXldO1xuICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldOyAvLyBJZiBib3RoIGFyZSBvYmplY3QgKGJ1dCB0YXJnZXQgaXMgbm90IGFycmF5KSwgd2UgdXNlIHJlY3Vyc2lvbiB0byBzZXQgZGVlcCB2YWx1ZVxuXG4gICAgdmFyIHJlY3Vyc2l2ZSA9IGlzT2JqZWN0KHByZXZWYWx1ZSkgJiYgaXNPYmplY3QodmFsdWUpO1xuICAgIG5ld1N0b3JlW2tleV0gPSByZWN1cnNpdmUgPyBpbnRlcm5hbFNldFZhbHVlcyhwcmV2VmFsdWUsIHZhbHVlIHx8IHt9KSA6IGNsb25lRGVlcCh2YWx1ZSk7IC8vIENsb25lIGRlZXAgZm9yIGFycmF5c1xuICB9KTtcbiAgcmV0dXJuIG5ld1N0b3JlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsdWVzKHN0b3JlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0VmFsdWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZXN0VmFsdWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiByZXN0VmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY3VycmVudCwgbmV3U3RvcmUpIHtcbiAgICByZXR1cm4gaW50ZXJuYWxTZXRWYWx1ZXMoY3VycmVudCwgbmV3U3RvcmUpO1xuICB9LCBzdG9yZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hOYW1lUGF0aChuYW1lUGF0aCwgY2hhbmdlZE5hbWVQYXRoKSB7XG4gIGlmICghbmFtZVBhdGggfHwgIWNoYW5nZWROYW1lUGF0aCB8fCBuYW1lUGF0aC5sZW5ndGggIT09IGNoYW5nZWROYW1lUGF0aC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gbmFtZVBhdGguZXZlcnkoZnVuY3Rpb24gKG5hbWVVbml0LCBpKSB7XG4gICAgcmV0dXJuIGNoYW5nZWROYW1lUGF0aFtpXSA9PT0gbmFtZVVuaXQ7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU2ltaWxhcihzb3VyY2UsIHRhcmdldCkge1xuICBpZiAoc291cmNlID09PSB0YXJnZXQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghc291cmNlICYmIHRhcmdldCB8fCBzb3VyY2UgJiYgIXRhcmdldCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghc291cmNlIHx8ICF0YXJnZXQgfHwgX3R5cGVvZihzb3VyY2UpICE9PSAnb2JqZWN0JyB8fCBfdHlwZW9mKHRhcmdldCkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIgdGFyZ2V0S2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XG4gIHZhciBrZXlzID0gbmV3IFNldChbXS5jb25jYXQoc291cmNlS2V5cywgdGFyZ2V0S2V5cykpO1xuICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KGtleXMpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc291cmNlVmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB2YXIgdGFyZ2V0VmFsdWUgPSB0YXJnZXRba2V5XTtcblxuICAgIGlmICh0eXBlb2Ygc291cmNlVmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHRhcmdldFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlVmFsdWUgPT09IHRhcmdldFZhbHVlO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0R2V0VmFsdWVGcm9tRXZlbnQodmFsdWVQcm9wTmFtZSkge1xuICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG5cbiAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBfdHlwZW9mKGV2ZW50LnRhcmdldCkgPT09ICdvYmplY3QnICYmIHZhbHVlUHJvcE5hbWUgaW4gZXZlbnQudGFyZ2V0KSB7XG4gICAgcmV0dXJuIGV2ZW50LnRhcmdldFt2YWx1ZVByb3BOYW1lXTtcbiAgfVxuXG4gIHJldHVybiBldmVudDtcbn1cbi8qKlxuICogTW92ZXMgYW4gYXJyYXkgaXRlbSBmcm9tIG9uZSBwb3NpdGlvbiBpbiBhbiBhcnJheSB0byBhbm90aGVyLlxuICpcbiAqIE5vdGU6IFRoaXMgaXMgYSBwdXJlIGZ1bmN0aW9uIHNvIGEgbmV3IGFycmF5IHdpbGwgYmUgcmV0dXJuZWQsIGluc3RlYWRcbiAqIG9mIGFsdGVyaW5nIHRoZSBhcnJheSBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0gYXJyYXkgICAgICAgICBBcnJheSBpbiB3aGljaCB0byBtb3ZlIGFuIGl0ZW0uICAgICAgICAgKHJlcXVpcmVkKVxuICogQHBhcmFtIG1vdmVJbmRleCAgICAgVGhlIGluZGV4IG9mIHRoZSBpdGVtIHRvIG1vdmUuICAgICAgICAgIChyZXF1aXJlZClcbiAqIEBwYXJhbSB0b0luZGV4ICAgICAgIFRoZSBpbmRleCB0byBtb3ZlIGl0ZW0gYXQgbW92ZUluZGV4IHRvLiAocmVxdWlyZWQpXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmUoYXJyYXksIG1vdmVJbmRleCwgdG9JbmRleCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChtb3ZlSW5kZXggPCAwIHx8IG1vdmVJbmRleCA+PSBsZW5ndGggfHwgdG9JbmRleCA8IDAgfHwgdG9JbmRleCA+PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICB2YXIgaXRlbSA9IGFycmF5W21vdmVJbmRleF07XG4gIHZhciBkaWZmID0gbW92ZUluZGV4IC0gdG9JbmRleDtcblxuICBpZiAoZGlmZiA+IDApIHtcbiAgICAvLyBtb3ZlIGxlZnRcbiAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcnJheS5zbGljZSgwLCB0b0luZGV4KSksIFtpdGVtXSwgX3RvQ29uc3VtYWJsZUFycmF5KGFycmF5LnNsaWNlKHRvSW5kZXgsIG1vdmVJbmRleCkpLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkuc2xpY2UobW92ZUluZGV4ICsgMSwgbGVuZ3RoKSkpO1xuICB9XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgLy8gbW92ZSByaWdodFxuICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFycmF5LnNsaWNlKDAsIG1vdmVJbmRleCkpLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkuc2xpY2UobW92ZUluZGV4ICsgMSwgdG9JbmRleCArIDEpKSwgW2l0ZW1dLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyYXkuc2xpY2UodG9JbmRleCArIDEsIGxlbmd0aCkpKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn0iLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWdlbmVyYXRvclJ1bnRpbWVcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3JcIjtcbmltcG9ydCBSYXdBc3luY1ZhbGlkYXRvciBmcm9tICdhc3luYy12YWxpZGF0b3InO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IHsgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMgfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB7IHNldFZhbHVlcyB9IGZyb20gJy4vdmFsdWVVdGlsJzsgLy8gUmVtb3ZlIGluY29ycmVjdCBvcmlnaW5hbCB0cyBkZWZpbmVcblxudmFyIEFzeW5jVmFsaWRhdG9yID0gUmF3QXN5bmNWYWxpZGF0b3I7XG4vKipcbiAqIFJlcGxhY2Ugd2l0aCB0ZW1wbGF0ZS5cbiAqICAgYEknbSAke25hbWV9YCArIHsgbmFtZTogJ2JhbWJvbycgfSA9IEknbSBiYW1ib29cbiAqL1xuXG5mdW5jdGlvbiByZXBsYWNlTWVzc2FnZSh0ZW1wbGF0ZSwga3YpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xcJFxce1xcdytcXH0vZywgZnVuY3Rpb24gKHN0cikge1xuICAgIHZhciBrZXkgPSBzdHIuc2xpY2UoMiwgLTEpO1xuICAgIHJldHVybiBrdltrZXldO1xuICB9KTtcbn1cblxudmFyIENPREVfTE9HSUNfRVJST1IgPSAnQ09ERV9MT0dJQ19FUlJPUic7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUnVsZShfeCwgX3gyLCBfeDMsIF94NCwgX3g1KSB7XG4gIHJldHVybiBfdmFsaWRhdGVSdWxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG4vKipcbiAqIFdlIHVzZSBgYXN5bmMtdmFsaWRhdG9yYCB0byB2YWxpZGF0ZSB0aGUgdmFsdWUuXG4gKiBCdXQgb25seSBjaGVjayBvbmUgdmFsdWUgaW4gYSB0aW1lIHRvIGF2b2lkIG5hbWVQYXRoIHZhbGlkYXRlIGlzc3VlLlxuICovXG5cblxuZnVuY3Rpb24gX3ZhbGlkYXRlUnVsZSgpIHtcbiAgX3ZhbGlkYXRlUnVsZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIobmFtZSwgdmFsdWUsIHJ1bGUsIG9wdGlvbnMsIG1lc3NhZ2VWYXJpYWJsZXMpIHtcbiAgICB2YXIgY2xvbmVSdWxlLCBvcmlnaW5WYWxpZGF0b3IsIHN1YlJ1bGVGaWVsZCwgdmFsaWRhdG9yLCBtZXNzYWdlcywgcmVzdWx0LCBzdWJSZXN1bHRzLCBrdiwgZmlsbFZhcmlhYmxlUmVzdWx0O1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjbG9uZVJ1bGUgPSBfb2JqZWN0U3ByZWFkKHt9LCBydWxlKTsgLy8gQnVnIG9mIGBhc3luYy12YWxpZGF0b3JgXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2ZpZWxkLWZvcm0vaXNzdWVzLzMxNlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9maWVsZC1mb3JtL2lzc3Vlcy8zMTNcblxuICAgICAgICAgICAgZGVsZXRlIGNsb25lUnVsZS5ydWxlSW5kZXg7XG5cbiAgICAgICAgICAgIGlmIChjbG9uZVJ1bGUudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgIG9yaWdpblZhbGlkYXRvciA9IGNsb25lUnVsZS52YWxpZGF0b3I7XG5cbiAgICAgICAgICAgICAgY2xvbmVSdWxlLnZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpblZhbGlkYXRvci5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KENPREVfTE9HSUNfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gLy8gV2Ugc2hvdWxkIHNwZWNpYWwgaGFuZGxlIGFycmF5IHZhbGlkYXRlXG5cblxuICAgICAgICAgICAgc3ViUnVsZUZpZWxkID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKGNsb25lUnVsZSAmJiBjbG9uZVJ1bGUudHlwZSA9PT0gJ2FycmF5JyAmJiBjbG9uZVJ1bGUuZGVmYXVsdEZpZWxkKSB7XG4gICAgICAgICAgICAgIHN1YlJ1bGVGaWVsZCA9IGNsb25lUnVsZS5kZWZhdWx0RmllbGQ7XG4gICAgICAgICAgICAgIGRlbGV0ZSBjbG9uZVJ1bGUuZGVmYXVsdEZpZWxkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWxpZGF0b3IgPSBuZXcgQXN5bmNWYWxpZGF0b3IoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCBbY2xvbmVSdWxlXSkpO1xuICAgICAgICAgICAgbWVzc2FnZXMgPSBzZXRWYWx1ZXMoe30sIGRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzLCBvcHRpb25zLnZhbGlkYXRlTWVzc2FnZXMpO1xuICAgICAgICAgICAgdmFsaWRhdG9yLm1lc3NhZ2VzKG1lc3NhZ2VzKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSA5O1xuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxMjtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdG9yLnZhbGlkYXRlKF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgdmFsdWUpLCBfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zKSkpO1xuXG4gICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDE0O1xuICAgICAgICAgICAgX2NvbnRleHQyLnQwID0gX2NvbnRleHQyW1wiY2F0Y2hcIl0oOSk7XG5cbiAgICAgICAgICAgIGlmIChfY29udGV4dDIudDAuZXJyb3JzKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCA9IF9jb250ZXh0Mi50MC5lcnJvcnMubWFwKGZ1bmN0aW9uIChfcmVmNCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IF9yZWY0Lm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgdmFyIG1lcmdlZE1lc3NhZ2UgPSBtZXNzYWdlID09PSBDT0RFX0xPR0lDX0VSUk9SID8gbWVzc2FnZXMuZGVmYXVsdCA6IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChtZXJnZWRNZXNzYWdlKSA/XG4gICAgICAgICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgICAgICAgIC8vIFdyYXAgUmVhY3ROb2RlIHdpdGggYGtleWBcbiAgICAgICAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQobWVyZ2VkTWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImVycm9yX1wiLmNvbmNhdChpbmRleClcbiAgICAgICAgICAgICAgICB9KSA6IG1lcmdlZE1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgIGlmICghKCFyZXN1bHQubGVuZ3RoICYmIHN1YlJ1bGVGaWVsZCkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjA7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodmFsdWUubWFwKGZ1bmN0aW9uIChzdWJWYWx1ZSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVSdWxlKFwiXCIuY29uY2F0KG5hbWUsIFwiLlwiKS5jb25jYXQoaSksIHN1YlZhbHVlLCBzdWJSdWxlRmllbGQsIG9wdGlvbnMsIG1lc3NhZ2VWYXJpYWJsZXMpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIHN1YlJlc3VsdHMgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHN1YlJlc3VsdHMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBlcnJvcnMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocHJldiksIF90b0NvbnN1bWFibGVBcnJheShlcnJvcnMpKTtcbiAgICAgICAgICAgIH0sIFtdKSk7XG5cbiAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgLy8gUmVwbGFjZSBtZXNzYWdlIHdpdGggdmFyaWFibGVzXG4gICAgICAgICAgICBrdiA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcnVsZSksIHt9LCB7XG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGVudW06IChydWxlLmVudW0gfHwgW10pLmpvaW4oJywgJylcbiAgICAgICAgICAgIH0sIG1lc3NhZ2VWYXJpYWJsZXMpO1xuICAgICAgICAgICAgZmlsbFZhcmlhYmxlUmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZU1lc3NhZ2UoZXJyb3IsIGt2KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgZmlsbFZhcmlhYmxlUmVzdWx0KTtcblxuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMiwgbnVsbCwgW1s5LCAxNF1dKTtcbiAgfSkpO1xuICByZXR1cm4gX3ZhbGlkYXRlUnVsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSdWxlcyhuYW1lUGF0aCwgdmFsdWUsIHJ1bGVzLCBvcHRpb25zLCB2YWxpZGF0ZUZpcnN0LCBtZXNzYWdlVmFyaWFibGVzKSB7XG4gIHZhciBuYW1lID0gbmFtZVBhdGguam9pbignLicpOyAvLyBGaWxsIHJ1bGUgd2l0aCBjb250ZXh0XG5cbiAgdmFyIGZpbGxlZFJ1bGVzID0gcnVsZXMubWFwKGZ1bmN0aW9uIChjdXJyZW50UnVsZSwgcnVsZUluZGV4KSB7XG4gICAgdmFyIG9yaWdpblZhbGlkYXRvckZ1bmMgPSBjdXJyZW50UnVsZS52YWxpZGF0b3I7XG5cbiAgICB2YXIgY2xvbmVSdWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjdXJyZW50UnVsZSksIHt9LCB7XG4gICAgICBydWxlSW5kZXg6IHJ1bGVJbmRleFxuICAgIH0pOyAvLyBSZXBsYWNlIHZhbGlkYXRvciBpZiBuZWVkZWRcblxuXG4gICAgaWYgKG9yaWdpblZhbGlkYXRvckZ1bmMpIHtcbiAgICAgIGNsb25lUnVsZS52YWxpZGF0b3IgPSBmdW5jdGlvbiAocnVsZSwgdmFsLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaGFzUHJvbWlzZSA9IGZhbHNlOyAvLyBXcmFwIGNhbGxiYWNrIG9ubHkgYWNjZXB0IHdoZW4gcHJvbWlzZSBub3QgcHJvdmlkZWRcblxuICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gZnVuY3Rpb24gd3JhcHBlZENhbGxiYWNrKCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXYWl0IGEgdGljayB0byBtYWtlIHN1cmUgcmV0dXJuIHR5cGUgaXMgYSBwcm9taXNlXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YXJuaW5nKCFoYXNQcm9taXNlLCAnWW91ciB2YWxpZGF0b3IgZnVuY3Rpb24gaGFzIGFscmVhZHkgcmV0dXJuIGEgcHJvbWlzZS4gYGNhbGxiYWNrYCB3aWxsIGJlIGlnbm9yZWQuJyk7XG5cbiAgICAgICAgICAgIGlmICghaGFzUHJvbWlzZSkge1xuICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9OyAvLyBHZXQgcHJvbWlzZVxuXG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBvcmlnaW5WYWxpZGF0b3JGdW5jKHJ1bGUsIHZhbCwgd3JhcHBlZENhbGxiYWNrKTtcbiAgICAgICAgaGFzUHJvbWlzZSA9IHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJvbWlzZS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDEuIFVzZSBwcm9taXNlIGFzIHRoZSBmaXJzdCBwcmlvcml0eS5cbiAgICAgICAgICogMi4gSWYgcHJvbWlzZSBub3QgZXhpc3QsIHVzZSBjYWxsYmFjayB3aXRoIHdhcm5pbmcgaW5zdGVhZFxuICAgICAgICAgKi9cblxuICAgICAgICB3YXJuaW5nKGhhc1Byb21pc2UsICdgY2FsbGJhY2tgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSByZXR1cm4gYSBwcm9taXNlIGluc3RlYWQuJyk7XG5cbiAgICAgICAgaWYgKGhhc1Byb21pc2UpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIgfHwgJyAnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVSdWxlO1xuICB9KS5zb3J0KGZ1bmN0aW9uIChfcmVmLCBfcmVmMikge1xuICAgIHZhciB3MSA9IF9yZWYud2FybmluZ09ubHksXG4gICAgICAgIGkxID0gX3JlZi5ydWxlSW5kZXg7XG4gICAgdmFyIHcyID0gX3JlZjIud2FybmluZ09ubHksXG4gICAgICAgIGkyID0gX3JlZjIucnVsZUluZGV4O1xuXG4gICAgaWYgKCEhdzEgPT09ICEhdzIpIHtcbiAgICAgIC8vIExldCBrZWVwIG9yaWdpbiBvcmRlclxuICAgICAgcmV0dXJuIGkxIC0gaTI7XG4gICAgfVxuXG4gICAgaWYgKHcxKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH0pOyAvLyBEbyB2YWxpZGF0ZSBydWxlc1xuXG4gIHZhciBzdW1tYXJ5UHJvbWlzZTtcblxuICBpZiAodmFsaWRhdGVGaXJzdCA9PT0gdHJ1ZSkge1xuICAgIC8vID4+Pj4+IFZhbGlkYXRlIGJ5IHNlcmlhbGl6YXRpb25cbiAgICBzdW1tYXJ5UHJvbWlzZSA9IG5ldyBQcm9taXNlKCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaSwgcnVsZSwgZXJyb3JzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmICghKGkgPCBmaWxsZWRSdWxlcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBydWxlID0gZmlsbGVkUnVsZXNbaV07XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUnVsZShuYW1lLCB2YWx1ZSwgcnVsZSwgb3B0aW9ucywgbWVzc2FnZVZhcmlhYmxlcyk7XG5cbiAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGVycm9ycyA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVqZWN0KFt7XG4gICAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9ycyxcbiAgICAgICAgICAgICAgICAgIHJ1bGU6IHJ1bGVcbiAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3g2LCBfeDcpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gPj4+Pj4gVmFsaWRhdGUgYnkgcGFyYWxsZWxcbiAgICB2YXIgcnVsZVByb21pc2VzID0gZmlsbGVkUnVsZXMubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVSdWxlKG5hbWUsIHZhbHVlLCBydWxlLCBvcHRpb25zLCBtZXNzYWdlVmFyaWFibGVzKS50aGVuKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcnM6IGVycm9ycyxcbiAgICAgICAgICBydWxlOiBydWxlXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzdW1tYXJ5UHJvbWlzZSA9ICh2YWxpZGF0ZUZpcnN0ID8gZmluaXNoT25GaXJzdEZhaWxlZChydWxlUHJvbWlzZXMpIDogZmluaXNoT25BbGxGYWlsZWQocnVsZVByb21pc2VzKSkudGhlbihmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAvLyBBbHdheXMgY2hhbmdlIHRvIHJlamVjdGlvbiBmb3IgRmllbGQgdG8gY2F0Y2hcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcnMpO1xuICAgIH0pO1xuICB9IC8vIEludGVybmFsIGNhdGNoIGVycm9yIHRvIGF2b2lkIGNvbnNvbGUgZXJyb3IgbG9nLlxuXG5cbiAgc3VtbWFyeVByb21pc2UuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG4gIHJldHVybiBzdW1tYXJ5UHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gZmluaXNoT25BbGxGYWlsZWQoX3g4KSB7XG4gIHJldHVybiBfZmluaXNoT25BbGxGYWlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2ZpbmlzaE9uQWxsRmFpbGVkKCkge1xuICBfZmluaXNoT25BbGxGYWlsZWQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKHJ1bGVQcm9taXNlcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCBQcm9taXNlLmFsbChydWxlUHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKGVycm9yc0xpc3QpIHtcbiAgICAgICAgICAgICAgdmFyIF9yZWY1O1xuXG4gICAgICAgICAgICAgIHZhciBlcnJvcnMgPSAoX3JlZjUgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWY1LCBfdG9Db25zdW1hYmxlQXJyYXkoZXJyb3JzTGlzdCkpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMyk7XG4gIH0pKTtcbiAgcmV0dXJuIF9maW5pc2hPbkFsbEZhaWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBmaW5pc2hPbkZpcnN0RmFpbGVkKF94OSkge1xuICByZXR1cm4gX2ZpbmlzaE9uRmlyc3RGYWlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2ZpbmlzaE9uRmlyc3RGYWlsZWQoKSB7XG4gIF9maW5pc2hPbkZpcnN0RmFpbGVkID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlNChydWxlUHJvbWlzZXMpIHtcbiAgICB2YXIgY291bnQ7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgIHJ1bGVQcm9taXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChydWxlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChydWxlRXJyb3IuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtydWxlRXJyb3JdKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY291bnQgKz0gMTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSBydWxlUHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0KTtcbiAgfSkpO1xuICByZXR1cm4gX2ZpbmlzaE9uRmlyc3RGYWlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xudmFyIF9leGNsdWRlZCA9IFtcIm5hbWVcIl07XG5pbXBvcnQgdG9DaGlsZHJlbkFycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWVsZENvbnRleHQsIHsgSE9PS19NQVJLIH0gZnJvbSAnLi9GaWVsZENvbnRleHQnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbHMvdHlwZVV0aWwnO1xuaW1wb3J0IHsgdmFsaWRhdGVSdWxlcyB9IGZyb20gJy4vdXRpbHMvdmFsaWRhdGVVdGlsJztcbmltcG9ydCB7IGNvbnRhaW5zTmFtZVBhdGgsIGRlZmF1bHRHZXRWYWx1ZUZyb21FdmVudCwgZ2V0TmFtZVBhdGgsIGdldFZhbHVlIH0gZnJvbSAnLi91dGlscy92YWx1ZVV0aWwnO1xudmFyIEVNUFRZX0VSUk9SUyA9IFtdO1xuXG5mdW5jdGlvbiByZXF1aXJlVXBkYXRlKHNob3VsZFVwZGF0ZSwgcHJldiwgbmV4dCwgcHJldlZhbHVlLCBuZXh0VmFsdWUsIGluZm8pIHtcbiAgaWYgKHR5cGVvZiBzaG91bGRVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2hvdWxkVXBkYXRlKHByZXYsIG5leHQsICdzb3VyY2UnIGluIGluZm8gPyB7XG4gICAgICBzb3VyY2U6IGluZm8uc291cmNlXG4gICAgfSA6IHt9KTtcbiAgfVxuXG4gIHJldHVybiBwcmV2VmFsdWUgIT09IG5leHRWYWx1ZTtcbn0gLy8gV2UgdXNlIENsYXNzIGluc3RlYWQgb2YgSG9va3MgaGVyZSBzaW5jZSBpdCB3aWxsIGNvc3QgbXVjaCBjb2RlIGJ5IHVzaW5nIEhvb2tzLlxuXG5cbnZhciBGaWVsZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmllbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRmllbGQpO1xuXG4gIC8qKlxuICAgKiBGb2xsb3cgc3RhdGUgc2hvdWxkIG5vdCBtYW5hZ2VtZW50IGluIFN0YXRlIHNpbmNlIGl0IHdpbGwgYXN5bmMgdXBkYXRlIGJ5IFJlYWN0LlxuICAgKiBUaGlzIG1ha2VzIGZpcnN0IHJlbmRlciBvZiBmb3JtIGNhbiBub3QgZ2V0IGNvcnJlY3Qgc3RhdGUgdmFsdWUuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBNYXJrIHdoZW4gdG91Y2hlZCAmIHZhbGlkYXRlZC4gQ3VycmVudGx5IG9ubHkgdXNlZCBmb3IgYGRlcGVuZGVuY2llc2AuXG4gICAqIE5vdGUgdGhhdCB3ZSBkbyBub3QgdGhpbmsgZmllbGQgd2l0aCBgaW5pdGlhbFZhbHVlYCBpcyBkaXJ0eVxuICAgKiBidXQgdGhpcyB3aWxsIGJlIGJ5IGBpc0ZpZWxkRGlydHlgIGZ1bmMuXG4gICAqL1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU3Vic2NyaXB0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmllbGQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7IC8vIFJlZ2lzdGVyIG9uIGluaXRcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgcmVzZXRDb3VudDogMFxuICAgIH07XG4gICAgX3RoaXMuY2FuY2VsUmVnaXN0ZXJGdW5jID0gbnVsbDtcbiAgICBfdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgX3RoaXMudG91Y2hlZCA9IGZhbHNlO1xuICAgIF90aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgX3RoaXMudmFsaWRhdGVQcm9taXNlID0gbnVsbDtcbiAgICBfdGhpcy5wcmV2VmFsaWRhdGluZyA9IHZvaWQgMDtcbiAgICBfdGhpcy5lcnJvcnMgPSBFTVBUWV9FUlJPUlM7XG4gICAgX3RoaXMud2FybmluZ3MgPSBFTVBUWV9FUlJPUlM7XG5cbiAgICBfdGhpcy5jYW5jZWxSZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHByZXNlcnZlID0gX3RoaXMkcHJvcHMucHJlc2VydmUsXG4gICAgICAgICAgaXNMaXN0RmllbGQgPSBfdGhpcyRwcm9wcy5pc0xpc3RGaWVsZCxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZTtcblxuICAgICAgaWYgKF90aGlzLmNhbmNlbFJlZ2lzdGVyRnVuYykge1xuICAgICAgICBfdGhpcy5jYW5jZWxSZWdpc3RlckZ1bmMoaXNMaXN0RmllbGQsIHByZXNlcnZlLCBnZXROYW1lUGF0aChuYW1lKSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNhbmNlbFJlZ2lzdGVyRnVuYyA9IG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmdldE5hbWVQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczIubmFtZSxcbiAgICAgICAgICBmaWVsZENvbnRleHQgPSBfdGhpcyRwcm9wczIuZmllbGRDb250ZXh0O1xuICAgICAgdmFyIF9maWVsZENvbnRleHQkcHJlZml4TiA9IGZpZWxkQ29udGV4dC5wcmVmaXhOYW1lLFxuICAgICAgICAgIHByZWZpeE5hbWUgPSBfZmllbGRDb250ZXh0JHByZWZpeE4gPT09IHZvaWQgMCA/IFtdIDogX2ZpZWxkQ29udGV4dCRwcmVmaXhOO1xuICAgICAgcmV0dXJuIG5hbWUgIT09IHVuZGVmaW5lZCA/IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocHJlZml4TmFtZSksIF90b0NvbnN1bWFibGVBcnJheShuYW1lKSkgOiBbXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UnVsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMzJHJ1bGVzID0gX3RoaXMkcHJvcHMzLnJ1bGVzLFxuICAgICAgICAgIHJ1bGVzID0gX3RoaXMkcHJvcHMzJHJ1bGVzID09PSB2b2lkIDAgPyBbXSA6IF90aGlzJHByb3BzMyRydWxlcyxcbiAgICAgICAgICBmaWVsZENvbnRleHQgPSBfdGhpcyRwcm9wczMuZmllbGRDb250ZXh0O1xuICAgICAgcmV0dXJuIHJ1bGVzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gcnVsZShmaWVsZENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMubW91bnRlZCkgcmV0dXJuO1xuICAgICAgLyoqXG4gICAgICAgKiBDbGVhbiB1cCBjdXJyZW50IG5vZGUuXG4gICAgICAgKi9cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHJlc2V0Q291bnQgPSBfcmVmLnJlc2V0Q291bnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzZXRDb3VudDogcmVzZXRDb3VudCArIDFcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy50cmlnZ2VyTWV0YUV2ZW50ID0gZnVuY3Rpb24gKGRlc3Ryb3kpIHtcbiAgICAgIHZhciBvbk1ldGFDaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbk1ldGFDaGFuZ2U7XG4gICAgICBvbk1ldGFDaGFuZ2UgPT09IG51bGwgfHwgb25NZXRhQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbk1ldGFDaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5nZXRNZXRhKCkpLCB7fSwge1xuICAgICAgICBkZXN0cm95OiBkZXN0cm95XG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uU3RvcmVDaGFuZ2UgPSBmdW5jdGlvbiAocHJldlN0b3JlLCBuYW1lUGF0aExpc3QsIGluZm8pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBzaG91bGRVcGRhdGUgPSBfdGhpcyRwcm9wczQuc2hvdWxkVXBkYXRlLFxuICAgICAgICAgIF90aGlzJHByb3BzNCRkZXBlbmRlbiA9IF90aGlzJHByb3BzNC5kZXBlbmRlbmNpZXMsXG4gICAgICAgICAgZGVwZW5kZW5jaWVzID0gX3RoaXMkcHJvcHM0JGRlcGVuZGVuID09PSB2b2lkIDAgPyBbXSA6IF90aGlzJHByb3BzNCRkZXBlbmRlbixcbiAgICAgICAgICBvblJlc2V0ID0gX3RoaXMkcHJvcHM0Lm9uUmVzZXQ7XG4gICAgICB2YXIgc3RvcmUgPSBpbmZvLnN0b3JlO1xuXG4gICAgICB2YXIgbmFtZVBhdGggPSBfdGhpcy5nZXROYW1lUGF0aCgpO1xuXG4gICAgICB2YXIgcHJldlZhbHVlID0gX3RoaXMuZ2V0VmFsdWUocHJldlN0b3JlKTtcblxuICAgICAgdmFyIGN1clZhbHVlID0gX3RoaXMuZ2V0VmFsdWUoc3RvcmUpO1xuXG4gICAgICB2YXIgbmFtZVBhdGhNYXRjaCA9IG5hbWVQYXRoTGlzdCAmJiBjb250YWluc05hbWVQYXRoKG5hbWVQYXRoTGlzdCwgbmFtZVBhdGgpOyAvLyBgc2V0RmllbGRzVmFsdWVgIGlzIGEgcXVpY2sgYWNjZXNzIHRvIHVwZGF0ZSByZWxhdGVkIHN0YXR1c1xuXG4gICAgICBpZiAoaW5mby50eXBlID09PSAndmFsdWVVcGRhdGUnICYmIGluZm8uc291cmNlID09PSAnZXh0ZXJuYWwnICYmIHByZXZWYWx1ZSAhPT0gY3VyVmFsdWUpIHtcbiAgICAgICAgX3RoaXMudG91Y2hlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMudmFsaWRhdGVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgX3RoaXMuZXJyb3JzID0gRU1QVFlfRVJST1JTO1xuICAgICAgICBfdGhpcy53YXJuaW5ncyA9IEVNUFRZX0VSUk9SUztcblxuICAgICAgICBfdGhpcy50cmlnZ2VyTWV0YUV2ZW50KCk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoaW5mby50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgICAgICBpZiAoIW5hbWVQYXRoTGlzdCB8fCBuYW1lUGF0aE1hdGNoKSB7XG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBzdGF0ZVxuICAgICAgICAgICAgX3RoaXMudG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLnZhbGlkYXRlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICBfdGhpcy5lcnJvcnMgPSBFTVBUWV9FUlJPUlM7XG4gICAgICAgICAgICBfdGhpcy53YXJuaW5ncyA9IEVNUFRZX0VSUk9SUztcblxuICAgICAgICAgICAgX3RoaXMudHJpZ2dlck1ldGFFdmVudCgpO1xuXG4gICAgICAgICAgICBvblJlc2V0ID09PSBudWxsIHx8IG9uUmVzZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUmVzZXQoKTtcblxuICAgICAgICAgICAgX3RoaXMucmVmcmVzaCgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluIGNhc2UgZmllbGQgd2l0aCBgcHJlc2VydmUgPSBmYWxzZWAgbmVzdCBkZXBzIGxpa2U6XG4gICAgICAgICAqIC0gQSA9IDEgPT4gc2hvdyBCXG4gICAgICAgICAqIC0gQiA9IDEgPT4gc2hvdyBDXG4gICAgICAgICAqIC0gUmVzZXQgQSwgbmVlZCBjbGVhbiBCLCBDXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICBfdGhpcy5yZVJlbmRlcigpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3NldEZpZWxkJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZiAobmFtZVBhdGhNYXRjaCkge1xuICAgICAgICAgICAgICB2YXIgZGF0YSA9IGluZm8uZGF0YTtcblxuICAgICAgICAgICAgICBpZiAoJ3RvdWNoZWQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50b3VjaGVkID0gZGF0YS50b3VjaGVkO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCd2YWxpZGF0aW5nJyBpbiBkYXRhICYmICEoJ29yaWdpblJDRmllbGQnIGluIGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsaWRhdGVQcm9taXNlID0gZGF0YS52YWxpZGF0aW5nID8gUHJvbWlzZS5yZXNvbHZlKFtdKSA6IG51bGw7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoJ2Vycm9ycycgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVycm9ycyA9IGRhdGEuZXJyb3JzIHx8IEVNUFRZX0VSUk9SUztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgnd2FybmluZ3MnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy53YXJuaW5ncyA9IGRhdGEud2FybmluZ3MgfHwgRU1QVFlfRVJST1JTO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX3RoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIF90aGlzLnRyaWdnZXJNZXRhRXZlbnQoKTtcblxuICAgICAgICAgICAgICBfdGhpcy5yZVJlbmRlcigpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gLy8gSGFuZGxlIHVwZGF0ZSBieSBgc2V0RmllbGRgIHdpdGggYHNob3VsZFVwZGF0ZWBcblxuXG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICYmICFuYW1lUGF0aC5sZW5ndGggJiYgcmVxdWlyZVVwZGF0ZShzaG91bGRVcGRhdGUsIHByZXZTdG9yZSwgc3RvcmUsIHByZXZWYWx1ZSwgY3VyVmFsdWUsIGluZm8pKSB7XG4gICAgICAgICAgICAgIF90aGlzLnJlUmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnZGVwZW5kZW5jaWVzVXBkYXRlJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaWdnZXIgd2hlbiBtYXJrZWQgYGRlcGVuZGVuY2llc2AgdXBkYXRlZC4gUmVsYXRlZCBmaWVsZHMgd2lsbCBhbGwgdXBkYXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBkZXBlbmRlbmN5TGlzdCA9IGRlcGVuZGVuY2llcy5tYXAoZ2V0TmFtZVBhdGgpOyAvLyBObyBuZWVkIGZvciBgbmFtZVBhdGhNYXRoYCBjaGVjayBhbmQgYHNob3VsZFVwZGF0ZWAgY2hlY2ssIHNpbmNlIGB2YWx1ZVVwZGF0ZWAgd2lsbCBiZVxuICAgICAgICAgICAgLy8gZW1pdHRlZCBlYXJsaWVyIGFuZCB0aGV5IHdpbGwgd29yayB0aGVyZVxuICAgICAgICAgICAgLy8gSWYgc2V0IGl0IG1heSBjYXVzZSB1bm5lY2Vzc2FyeSB0d2ljZSByZXJlbmRlcmluZ1xuXG4gICAgICAgICAgICBpZiAoZGVwZW5kZW5jeUxpc3Quc29tZShmdW5jdGlvbiAoZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgICByZXR1cm4gY29udGFpbnNOYW1lUGF0aChpbmZvLnJlbGF0ZWRGaWVsZHMsIGRlcGVuZGVuY3kpO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgX3RoaXMucmVSZW5kZXIoKTtcblxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIDEuIElmIGBuYW1lUGF0aGAgZXhpc3RzIGluIGBuYW1lUGF0aExpc3RgLCBtZWFucyBpdCdzIHJlbGF0ZWQgdmFsdWUgYW5kIHNob3VsZCB1cGRhdGVcbiAgICAgICAgICAvLyAgICAgIEZvciBleGFtcGxlIDxMaXN0IG5hbWU9XCJsaXN0XCI+PEZpZWxkIG5hbWU9e1snbGlzdCcsIDBdfT48L0xpc3Q+XG4gICAgICAgICAgLy8gICAgICBJZiBgbmFtZVBhdGhMaXN0YCBpcyBbWydsaXN0J11dIChMaXN0IHZhbHVlIHVwZGF0ZSksIEZpZWxkIHNob3VsZCBiZSB1cGRhdGVkXG4gICAgICAgICAgLy8gICAgICBJZiBgbmFtZVBhdGhMaXN0YCBpcyBbWydsaXN0JywgMF1dIChGaWVsZCB2YWx1ZSB1cGRhdGUpLCBMaXN0IHNob3VsZG4ndCBiZSB1cGRhdGVkXG4gICAgICAgICAgLy8gMi5cbiAgICAgICAgICAvLyAgIDIuMSBJZiBgZGVwZW5kZW5jaWVzYCBpcyBzZXQsIGBuYW1lYCBpcyBub3Qgc2V0IGFuZCBgc2hvdWxkVXBkYXRlYCBpcyBub3Qgc2V0LFxuICAgICAgICAgIC8vICAgICAgIGRvbid0IHVzZSBgc2hvdWxkVXBkYXRlYC4gYGRlcGVuZGVuY2llc2AgaXMgdmlldyBhcyBhIHNob3J0Y3V0IGlmIGBzaG91bGRVcGRhdGVgXG4gICAgICAgICAgLy8gICAgICAgaXMgbm90IHByb3ZpZGVkXG4gICAgICAgICAgLy8gICAyLjIgSWYgYHNob3VsZFVwZGF0ZWAgcHJvdmlkZWQsIHVzZSBjdXN0b21pemUgbG9naWMgdG8gdXBkYXRlIHRoZSBmaWVsZFxuICAgICAgICAgIC8vICAgICAgIGVsc2UgdG8gY2hlY2sgaWYgdmFsdWUgY2hhbmdlZFxuICAgICAgICAgIGlmIChuYW1lUGF0aE1hdGNoIHx8ICghZGVwZW5kZW5jaWVzLmxlbmd0aCB8fCBuYW1lUGF0aC5sZW5ndGggfHwgc2hvdWxkVXBkYXRlKSAmJiByZXF1aXJlVXBkYXRlKHNob3VsZFVwZGF0ZSwgcHJldlN0b3JlLCBzdG9yZSwgcHJldlZhbHVlLCBjdXJWYWx1ZSwgaW5mbykpIHtcbiAgICAgICAgICAgIF90aGlzLnJlUmVuZGVyKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBfdGhpcy5yZVJlbmRlcigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy52YWxpZGF0ZVJ1bGVzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIC8vIFdlIHNob3VsZCBmaXhlZCBuYW1lUGF0aCAmIHZhbHVlIHRvIGF2b2lkIGRldmVsb3BlciBjaGFuZ2UgdGhlbiBieSBmb3JtIGZ1bmN0aW9uXG4gICAgICB2YXIgbmFtZVBhdGggPSBfdGhpcy5nZXROYW1lUGF0aCgpO1xuXG4gICAgICB2YXIgY3VycmVudFZhbHVlID0gX3RoaXMuZ2V0VmFsdWUoKTsgLy8gRm9yY2UgY2hhbmdlIHRvIGFzeW5jIHRvIGF2b2lkIHJ1bGUgT09EIHVuZGVyIHJlbmRlclByb3BzIGZpZWxkXG5cblxuICAgICAgdmFyIHJvb3RQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMubW91bnRlZCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIF90aGlzJHByb3BzNSR2YWxpZGF0ZSA9IF90aGlzJHByb3BzNS52YWxpZGF0ZUZpcnN0LFxuICAgICAgICAgICAgdmFsaWRhdGVGaXJzdCA9IF90aGlzJHByb3BzNSR2YWxpZGF0ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfdGhpcyRwcm9wczUkdmFsaWRhdGUsXG4gICAgICAgICAgICBtZXNzYWdlVmFyaWFibGVzID0gX3RoaXMkcHJvcHM1Lm1lc3NhZ2VWYXJpYWJsZXM7XG5cbiAgICAgICAgdmFyIF9yZWYyID0gb3B0aW9ucyB8fCB7fSxcbiAgICAgICAgICAgIHRyaWdnZXJOYW1lID0gX3JlZjIudHJpZ2dlck5hbWU7XG5cbiAgICAgICAgdmFyIGZpbHRlcmVkUnVsZXMgPSBfdGhpcy5nZXRSdWxlcygpO1xuXG4gICAgICAgIGlmICh0cmlnZ2VyTmFtZSkge1xuICAgICAgICAgIGZpbHRlcmVkUnVsZXMgPSBmaWx0ZXJlZFJ1bGVzLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRlVHJpZ2dlciA9IHJ1bGUudmFsaWRhdGVUcmlnZ2VyO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlVHJpZ2dlcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRyaWdnZXJMaXN0ID0gdG9BcnJheSh2YWxpZGF0ZVRyaWdnZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJMaXN0LmluY2x1ZGVzKHRyaWdnZXJOYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9taXNlID0gdmFsaWRhdGVSdWxlcyhuYW1lUGF0aCwgY3VycmVudFZhbHVlLCBmaWx0ZXJlZFJ1bGVzLCBvcHRpb25zLCB2YWxpZGF0ZUZpcnN0LCBtZXNzYWdlVmFyaWFibGVzKTtcbiAgICAgICAgcHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcnVsZUVycm9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogRU1QVFlfRVJST1JTO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnZhbGlkYXRlUHJvbWlzZSA9PT0gcm9vdFByb21pc2UpIHtcbiAgICAgICAgICAgIHZhciBfcnVsZUVycm9ycyRmb3JFYWNoO1xuXG4gICAgICAgICAgICBfdGhpcy52YWxpZGF0ZVByb21pc2UgPSBudWxsOyAvLyBHZXQgZXJyb3JzICYgd2FybmluZ3NcblxuICAgICAgICAgICAgdmFyIG5leHRFcnJvcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBuZXh0V2FybmluZ3MgPSBbXTtcbiAgICAgICAgICAgIChfcnVsZUVycm9ycyRmb3JFYWNoID0gcnVsZUVycm9ycy5mb3JFYWNoKSA9PT0gbnVsbCB8fCBfcnVsZUVycm9ycyRmb3JFYWNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcnVsZUVycm9ycyRmb3JFYWNoLmNhbGwocnVsZUVycm9ycywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgICAgIHZhciB3YXJuaW5nT25seSA9IF9yZWYzLnJ1bGUud2FybmluZ09ubHksXG4gICAgICAgICAgICAgICAgICBfcmVmMyRlcnJvcnMgPSBfcmVmMy5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICBlcnJvcnMgPSBfcmVmMyRlcnJvcnMgPT09IHZvaWQgMCA/IEVNUFRZX0VSUk9SUyA6IF9yZWYzJGVycm9ycztcblxuICAgICAgICAgICAgICBpZiAod2FybmluZ09ubHkpIHtcbiAgICAgICAgICAgICAgICBuZXh0V2FybmluZ3MucHVzaC5hcHBseShuZXh0V2FybmluZ3MsIF90b0NvbnN1bWFibGVBcnJheShlcnJvcnMpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0RXJyb3JzLnB1c2guYXBwbHkobmV4dEVycm9ycywgX3RvQ29uc3VtYWJsZUFycmF5KGVycm9ycykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLmVycm9ycyA9IG5leHRFcnJvcnM7XG4gICAgICAgICAgICBfdGhpcy53YXJuaW5ncyA9IG5leHRXYXJuaW5ncztcblxuICAgICAgICAgICAgX3RoaXMudHJpZ2dlck1ldGFFdmVudCgpO1xuXG4gICAgICAgICAgICBfdGhpcy5yZVJlbmRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy52YWxpZGF0ZVByb21pc2UgPSByb290UHJvbWlzZTtcbiAgICAgIF90aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIF90aGlzLmVycm9ycyA9IEVNUFRZX0VSUk9SUztcbiAgICAgIF90aGlzLndhcm5pbmdzID0gRU1QVFlfRVJST1JTO1xuXG4gICAgICBfdGhpcy50cmlnZ2VyTWV0YUV2ZW50KCk7IC8vIEZvcmNlIHRyaWdnZXIgcmUtcmVuZGVyIHNpbmNlIHdlIG5lZWQgc3luYyByZW5kZXJQcm9wcyB3aXRoIG5ldyBtZXRhXG5cblxuICAgICAgX3RoaXMucmVSZW5kZXIoKTtcblxuICAgICAgcmV0dXJuIHJvb3RQcm9taXNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5pc0ZpZWxkVmFsaWRhdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIV90aGlzLnZhbGlkYXRlUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaXNGaWVsZFRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMudG91Y2hlZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaXNGaWVsZERpcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVG91Y2hlZCBvciB2YWxpZGF0ZSBvciBoYXMgaW5pdGlhbFZhbHVlXG4gICAgICBpZiAoX3RoaXMuZGlydHkgfHwgX3RoaXMucHJvcHMuaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IC8vIEZvcm0gc2V0IGluaXRpYWxWYWx1ZVxuXG5cbiAgICAgIHZhciBmaWVsZENvbnRleHQgPSBfdGhpcy5wcm9wcy5maWVsZENvbnRleHQ7XG5cbiAgICAgIHZhciBfZmllbGRDb250ZXh0JGdldEludGUgPSBmaWVsZENvbnRleHQuZ2V0SW50ZXJuYWxIb29rcyhIT09LX01BUkspLFxuICAgICAgICAgIGdldEluaXRpYWxWYWx1ZSA9IF9maWVsZENvbnRleHQkZ2V0SW50ZS5nZXRJbml0aWFsVmFsdWU7XG5cbiAgICAgIGlmIChnZXRJbml0aWFsVmFsdWUoX3RoaXMuZ2V0TmFtZVBhdGgoKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRFcnJvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZXJyb3JzO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRXYXJuaW5ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy53YXJuaW5ncztcbiAgICB9O1xuXG4gICAgX3RoaXMuaXNMaXN0RmllbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMuaXNMaXN0RmllbGQ7XG4gICAgfTtcblxuICAgIF90aGlzLmlzTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5pc0xpc3Q7XG4gICAgfTtcblxuICAgIF90aGlzLmlzUHJlc2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMucHJlc2VydmU7XG4gICAgfTtcblxuICAgIF90aGlzLmdldE1ldGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBNYWtlIGVycm9yICYgdmFsaWRhdGluZyBpbiBjYWNoZSB0byBzYXZlIHBlcmZcbiAgICAgIF90aGlzLnByZXZWYWxpZGF0aW5nID0gX3RoaXMuaXNGaWVsZFZhbGlkYXRpbmcoKTtcbiAgICAgIHZhciBtZXRhID0ge1xuICAgICAgICB0b3VjaGVkOiBfdGhpcy5pc0ZpZWxkVG91Y2hlZCgpLFxuICAgICAgICB2YWxpZGF0aW5nOiBfdGhpcy5wcmV2VmFsaWRhdGluZyxcbiAgICAgICAgZXJyb3JzOiBfdGhpcy5lcnJvcnMsXG4gICAgICAgIHdhcm5pbmdzOiBfdGhpcy53YXJuaW5ncyxcbiAgICAgICAgbmFtZTogX3RoaXMuZ2V0TmFtZVBhdGgoKVxuICAgICAgfTtcbiAgICAgIHJldHVybiBtZXRhO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRPbmx5Q2hpbGQgPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgIC8vIFN1cHBvcnQgcmVuZGVyIHByb3BzXG4gICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBtZXRhID0gX3RoaXMuZ2V0TWV0YSgpO1xuXG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLmdldE9ubHlDaGlsZChjaGlsZHJlbihfdGhpcy5nZXRDb250cm9sbGVkKCksIG1ldGEsIF90aGlzLnByb3BzLmZpZWxkQ29udGV4dCkpKSwge30sIHtcbiAgICAgICAgICBpc0Z1bmN0aW9uOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBGaWxlZCBlbGVtZW50IG9ubHlcblxuXG4gICAgICB2YXIgY2hpbGRMaXN0ID0gdG9DaGlsZHJlbkFycmF5KGNoaWxkcmVuKTtcblxuICAgICAgaWYgKGNoaWxkTGlzdC5sZW5ndGggIT09IDEgfHwgISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRMaXN0WzBdKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkOiBjaGlsZExpc3QsXG4gICAgICAgICAgaXNGdW5jdGlvbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGQ6IGNoaWxkTGlzdFswXSxcbiAgICAgICAgaXNGdW5jdGlvbjogZmFsc2VcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLmdldFZhbHVlID0gZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICB2YXIgZ2V0RmllbGRzVmFsdWUgPSBfdGhpcy5wcm9wcy5maWVsZENvbnRleHQuZ2V0RmllbGRzVmFsdWU7XG5cbiAgICAgIHZhciBuYW1lUGF0aCA9IF90aGlzLmdldE5hbWVQYXRoKCk7XG5cbiAgICAgIHJldHVybiBnZXRWYWx1ZShzdG9yZSB8fCBnZXRGaWVsZHNWYWx1ZSh0cnVlKSwgbmFtZVBhdGgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDb250cm9sbGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNoaWxkUHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRyaWdnZXIgPSBfdGhpcyRwcm9wczYudHJpZ2dlcixcbiAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXIgPSBfdGhpcyRwcm9wczYudmFsaWRhdGVUcmlnZ2VyLFxuICAgICAgICAgIGdldFZhbHVlRnJvbUV2ZW50ID0gX3RoaXMkcHJvcHM2LmdldFZhbHVlRnJvbUV2ZW50LFxuICAgICAgICAgIG5vcm1hbGl6ZSA9IF90aGlzJHByb3BzNi5ub3JtYWxpemUsXG4gICAgICAgICAgdmFsdWVQcm9wTmFtZSA9IF90aGlzJHByb3BzNi52YWx1ZVByb3BOYW1lLFxuICAgICAgICAgIGdldFZhbHVlUHJvcHMgPSBfdGhpcyRwcm9wczYuZ2V0VmFsdWVQcm9wcyxcbiAgICAgICAgICBmaWVsZENvbnRleHQgPSBfdGhpcyRwcm9wczYuZmllbGRDb250ZXh0O1xuICAgICAgdmFyIG1lcmdlZFZhbGlkYXRlVHJpZ2dlciA9IHZhbGlkYXRlVHJpZ2dlciAhPT0gdW5kZWZpbmVkID8gdmFsaWRhdGVUcmlnZ2VyIDogZmllbGRDb250ZXh0LnZhbGlkYXRlVHJpZ2dlcjtcblxuICAgICAgdmFyIG5hbWVQYXRoID0gX3RoaXMuZ2V0TmFtZVBhdGgoKTtcblxuICAgICAgdmFyIGdldEludGVybmFsSG9va3MgPSBmaWVsZENvbnRleHQuZ2V0SW50ZXJuYWxIb29rcyxcbiAgICAgICAgICBnZXRGaWVsZHNWYWx1ZSA9IGZpZWxkQ29udGV4dC5nZXRGaWVsZHNWYWx1ZTtcblxuICAgICAgdmFyIF9nZXRJbnRlcm5hbEhvb2tzID0gZ2V0SW50ZXJuYWxIb29rcyhIT09LX01BUkspLFxuICAgICAgICAgIGRpc3BhdGNoID0gX2dldEludGVybmFsSG9va3MuZGlzcGF0Y2g7XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIHZhciBtZXJnZWRHZXRWYWx1ZVByb3BzID0gZ2V0VmFsdWVQcm9wcyB8fCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHZhbHVlUHJvcE5hbWUsIHZhbCk7XG4gICAgICB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXG5cbiAgICAgIHZhciBvcmlnaW5UcmlnZ2VyRnVuYyA9IGNoaWxkUHJvcHNbdHJpZ2dlcl07XG5cbiAgICAgIHZhciBjb250cm9sID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZFByb3BzKSwgbWVyZ2VkR2V0VmFsdWVQcm9wcyh2YWx1ZSkpOyAvLyBBZGQgdHJpZ2dlclxuXG5cbiAgICAgIGNvbnRyb2xbdHJpZ2dlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1hcmsgYXMgdG91Y2hlZFxuICAgICAgICBfdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuZGlydHkgPSB0cnVlO1xuXG4gICAgICAgIF90aGlzLnRyaWdnZXJNZXRhRXZlbnQoKTtcblxuICAgICAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZXRWYWx1ZUZyb21FdmVudCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gZ2V0VmFsdWVGcm9tRXZlbnQuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGRlZmF1bHRHZXRWYWx1ZUZyb21FdmVudC5hcHBseSh2b2lkIDAsIFt2YWx1ZVByb3BOYW1lXS5jb25jYXQoYXJncykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vcm1hbGl6ZSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gbm9ybWFsaXplKG5ld1ZhbHVlLCB2YWx1ZSwgZ2V0RmllbGRzVmFsdWUodHJ1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd1cGRhdGVWYWx1ZScsXG4gICAgICAgICAgbmFtZVBhdGg6IG5hbWVQYXRoLFxuICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3JpZ2luVHJpZ2dlckZ1bmMpIHtcbiAgICAgICAgICBvcmlnaW5UcmlnZ2VyRnVuYy5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBBZGQgdmFsaWRhdGVUcmlnZ2VyXG5cblxuICAgICAgdmFyIHZhbGlkYXRlVHJpZ2dlckxpc3QgPSB0b0FycmF5KG1lcmdlZFZhbGlkYXRlVHJpZ2dlciB8fCBbXSk7XG4gICAgICB2YWxpZGF0ZVRyaWdnZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXJOYW1lKSB7XG4gICAgICAgIC8vIFdyYXAgYWRkaXRpb25hbCBmdW5jdGlvbiBvZiBjb21wb25lbnQsIHNvIHRoYXQgd2UgY2FuIGdldCBsYXRlc3QgdmFsdWUgZnJvbSBzdG9yZVxuICAgICAgICB2YXIgb3JpZ2luVHJpZ2dlciA9IGNvbnRyb2xbdHJpZ2dlck5hbWVdO1xuXG4gICAgICAgIGNvbnRyb2xbdHJpZ2dlck5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvcmlnaW5UcmlnZ2VyKSB7XG4gICAgICAgICAgICBvcmlnaW5UcmlnZ2VyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9IC8vIEFsd2F5cyB1c2UgbGF0ZXN0IHJ1bGVzXG5cblxuICAgICAgICAgIHZhciBydWxlcyA9IF90aGlzLnByb3BzLnJ1bGVzO1xuXG4gICAgICAgICAgaWYgKHJ1bGVzICYmIHJ1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gV2UgZGlzcGF0Y2ggdmFsaWRhdGUgdG8gcm9vdCxcbiAgICAgICAgICAgIC8vIHNpbmNlIGl0IHdpbGwgdXBkYXRlIHJlbGF0ZWQgZGF0YSB3aXRoIG90aGVyIGZpZWxkIHdpdGggc2FtZSBuYW1lXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICd2YWxpZGF0ZUZpZWxkJyxcbiAgICAgICAgICAgICAgbmFtZVBhdGg6IG5hbWVQYXRoLFxuICAgICAgICAgICAgICB0cmlnZ2VyTmFtZTogdHJpZ2dlck5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbnRyb2w7XG4gICAgfTtcblxuICAgIGlmIChwcm9wcy5maWVsZENvbnRleHQpIHtcbiAgICAgIHZhciBnZXRJbnRlcm5hbEhvb2tzID0gcHJvcHMuZmllbGRDb250ZXh0LmdldEludGVybmFsSG9va3M7XG5cbiAgICAgIHZhciBfZ2V0SW50ZXJuYWxIb29rczIgPSBnZXRJbnRlcm5hbEhvb2tzKEhPT0tfTUFSSyksXG4gICAgICAgICAgaW5pdEVudGl0eVZhbHVlID0gX2dldEludGVybmFsSG9va3MyLmluaXRFbnRpdHlWYWx1ZTtcblxuICAgICAgaW5pdEVudGl0eVZhbHVlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRmllbGQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc2hvdWxkVXBkYXRlID0gX3RoaXMkcHJvcHM3LnNob3VsZFVwZGF0ZSxcbiAgICAgICAgICBmaWVsZENvbnRleHQgPSBfdGhpcyRwcm9wczcuZmllbGRDb250ZXh0O1xuICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTsgLy8gUmVnaXN0ZXIgb24gaW5pdFxuXG4gICAgICBpZiAoZmllbGRDb250ZXh0KSB7XG4gICAgICAgIHZhciBnZXRJbnRlcm5hbEhvb2tzID0gZmllbGRDb250ZXh0LmdldEludGVybmFsSG9va3M7XG5cbiAgICAgICAgdmFyIF9nZXRJbnRlcm5hbEhvb2tzMyA9IGdldEludGVybmFsSG9va3MoSE9PS19NQVJLKSxcbiAgICAgICAgICAgIHJlZ2lzdGVyRmllbGQgPSBfZ2V0SW50ZXJuYWxIb29rczMucmVnaXN0ZXJGaWVsZDtcblxuICAgICAgICB0aGlzLmNhbmNlbFJlZ2lzdGVyRnVuYyA9IHJlZ2lzdGVyRmllbGQodGhpcyk7XG4gICAgICB9IC8vIE9uZSBtb3JlIHJlbmRlciBmb3IgY29tcG9uZW50IGluIGNhc2UgZmllbGRzIG5vdCByZWFkeVxuXG5cbiAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5yZVJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuY2FuY2VsUmVnaXN0ZXIoKTtcbiAgICAgIHRoaXMudHJpZ2dlck1ldGFFdmVudCh0cnVlKTtcbiAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZVJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZVJlbmRlcigpIHtcbiAgICAgIGlmICghdGhpcy5tb3VudGVkKSByZXR1cm47XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcmVzZXRDb3VudCA9IHRoaXMuc3RhdGUucmVzZXRDb3VudDtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIHZhciBfdGhpcyRnZXRPbmx5Q2hpbGQgPSB0aGlzLmdldE9ubHlDaGlsZChjaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGQgPSBfdGhpcyRnZXRPbmx5Q2hpbGQuY2hpbGQsXG4gICAgICAgICAgaXNGdW5jdGlvbiA9IF90aGlzJGdldE9ubHlDaGlsZC5pc0Z1bmN0aW9uOyAvLyBOb3QgbmVlZCB0byBgY2xvbmVFbGVtZW50YCBzaW5jZSB1c2VyIGNhbiBoYW5kbGUgdGhpcyBpbiByZW5kZXIgZnVuY3Rpb24gc2VsZlxuXG5cbiAgICAgIHZhciByZXR1cm5DaGlsZE5vZGU7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybkNoaWxkTm9kZSA9IGNoaWxkO1xuICAgICAgfSBlbHNlIGlmICggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm5DaGlsZE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB0aGlzLmdldENvbnRyb2xsZWQoY2hpbGQucHJvcHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm5pbmcoIWNoaWxkLCAnYGNoaWxkcmVuYCBvZiBGaWVsZCBpcyBub3QgdmFsaWRhdGUgUmVhY3RFbGVtZW50LicpO1xuICAgICAgICByZXR1cm5DaGlsZE5vZGUgPSBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7XG4gICAgICAgIGtleTogcmVzZXRDb3VudFxuICAgICAgfSwgcmV0dXJuQ2hpbGROb2RlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmllbGQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkZpZWxkLmNvbnRleHRUeXBlID0gRmllbGRDb250ZXh0O1xuRmllbGQuZGVmYXVsdFByb3BzID0ge1xuICB0cmlnZ2VyOiAnb25DaGFuZ2UnLFxuICB2YWx1ZVByb3BOYW1lOiAndmFsdWUnXG59O1xuXG5mdW5jdGlvbiBXcmFwcGVyRmllbGQoX3JlZjUpIHtcbiAgdmFyIG5hbWUgPSBfcmVmNS5uYW1lLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWY1LCBfZXhjbHVkZWQpO1xuXG4gIHZhciBmaWVsZENvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEZpZWxkQ29udGV4dCk7XG4gIHZhciBuYW1lUGF0aCA9IG5hbWUgIT09IHVuZGVmaW5lZCA/IGdldE5hbWVQYXRoKG5hbWUpIDogdW5kZWZpbmVkO1xuICB2YXIga2V5ID0gJ2tlZXAnO1xuXG4gIGlmICghcmVzdFByb3BzLmlzTGlzdEZpZWxkKSB7XG4gICAga2V5ID0gXCJfXCIuY29uY2F0KChuYW1lUGF0aCB8fCBbXSkuam9pbignXycpKTtcbiAgfSAvLyBXYXJuaW5nIGlmIGl0J3MgYSBkaXJlY3RseSBsaXN0IGZpZWxkLlxuICAvLyBXZSBjYW4gc3RpbGwgc3VwcG9ydCBtdWx0aXBsZSBsZXZlbCBmaWVsZCBwcmVzZXJ2ZS5cblxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHJlc3RQcm9wcy5wcmVzZXJ2ZSA9PT0gZmFsc2UgJiYgcmVzdFByb3BzLmlzTGlzdEZpZWxkICYmIG5hbWVQYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgd2FybmluZyhmYWxzZSwgJ2BwcmVzZXJ2ZWAgc2hvdWxkIG5vdCBhcHBseSBvbiBGb3JtLkxpc3QgZmllbGRzLicpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZpZWxkLCBfZXh0ZW5kcyh7XG4gICAga2V5OiBrZXksXG4gICAgbmFtZTogbmFtZVBhdGhcbiAgfSwgcmVzdFByb3BzLCB7XG4gICAgZmllbGRDb250ZXh0OiBmaWVsZENvbnRleHRcbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyRmllbGQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIExpc3RDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZGVmYXVsdCBMaXN0Q29udGV4dDsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCBGaWVsZENvbnRleHQgZnJvbSAnLi9GaWVsZENvbnRleHQnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnO1xuaW1wb3J0IHsgbW92ZSBhcyBfbW92ZSwgZ2V0TmFtZVBhdGggfSBmcm9tICcuL3V0aWxzL3ZhbHVlVXRpbCc7XG5pbXBvcnQgTGlzdENvbnRleHQgZnJvbSAnLi9MaXN0Q29udGV4dCc7XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gTGlzdChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgaW5pdGlhbFZhbHVlID0gX3JlZi5pbml0aWFsVmFsdWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBydWxlcyA9IF9yZWYucnVsZXMsXG4gICAgICB2YWxpZGF0ZVRyaWdnZXIgPSBfcmVmLnZhbGlkYXRlVHJpZ2dlcjtcbiAgdmFyIGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEZpZWxkQ29udGV4dCk7XG4gIHZhciBrZXlSZWYgPSBSZWFjdC51c2VSZWYoe1xuICAgIGtleXM6IFtdLFxuICAgIGlkOiAwXG4gIH0pO1xuICB2YXIga2V5TWFuYWdlciA9IGtleVJlZi5jdXJyZW50O1xuICB2YXIgcHJlZml4TmFtZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRQcmVmaXhOYW1lID0gZ2V0TmFtZVBhdGgoY29udGV4dC5wcmVmaXhOYW1lKSB8fCBbXTtcbiAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJlbnRQcmVmaXhOYW1lKSwgX3RvQ29uc3VtYWJsZUFycmF5KGdldE5hbWVQYXRoKG5hbWUpKSk7XG4gIH0sIFtjb250ZXh0LnByZWZpeE5hbWUsIG5hbWVdKTtcbiAgdmFyIGZpZWxkQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNvbnRleHQpLCB7fSwge1xuICAgICAgcHJlZml4TmFtZTogcHJlZml4TmFtZVxuICAgIH0pO1xuICB9LCBbY29udGV4dCwgcHJlZml4TmFtZV0pOyAvLyBMaXN0IGNvbnRleHRcblxuICB2YXIgbGlzdENvbnRleHQgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0S2V5OiBmdW5jdGlvbiBnZXRLZXkobmFtZVBhdGgpIHtcbiAgICAgICAgdmFyIGxlbiA9IHByZWZpeE5hbWUubGVuZ3RoO1xuICAgICAgICB2YXIgcGF0aE5hbWUgPSBuYW1lUGF0aFtsZW5dO1xuICAgICAgICByZXR1cm4gW2tleU1hbmFnZXIua2V5c1twYXRoTmFtZV0sIG5hbWVQYXRoLnNsaWNlKGxlbiArIDEpXTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbcHJlZml4TmFtZV0pOyAvLyBVc2VyIHNob3VsZCBub3QgcGFzcyBgY2hpbGRyZW5gIGFzIG90aGVyIHR5cGUuXG5cbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHdhcm5pbmcoZmFsc2UsICdGb3JtLkxpc3Qgb25seSBhY2NlcHRzIGZ1bmN0aW9uIGFzIGNoaWxkcmVuLicpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHNob3VsZFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZFVwZGF0ZShwcmV2VmFsdWUsIG5leHRWYWx1ZSwgX3JlZjIpIHtcbiAgICB2YXIgc291cmNlID0gX3JlZjIuc291cmNlO1xuXG4gICAgaWYgKHNvdXJjZSA9PT0gJ2ludGVybmFsJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2VmFsdWUgIT09IG5leHRWYWx1ZTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbGlzdENvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmllbGRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGZpZWxkQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZCwge1xuICAgIG5hbWU6IFtdLFxuICAgIHNob3VsZFVwZGF0ZTogc2hvdWxkVXBkYXRlLFxuICAgIHJ1bGVzOiBydWxlcyxcbiAgICB2YWxpZGF0ZVRyaWdnZXI6IHZhbGlkYXRlVHJpZ2dlcixcbiAgICBpbml0aWFsVmFsdWU6IGluaXRpYWxWYWx1ZSxcbiAgICBpc0xpc3Q6IHRydWVcbiAgfSwgZnVuY3Rpb24gKF9yZWYzLCBtZXRhKSB7XG4gICAgdmFyIF9yZWYzJHZhbHVlID0gX3JlZjMudmFsdWUsXG4gICAgICAgIHZhbHVlID0gX3JlZjMkdmFsdWUgPT09IHZvaWQgMCA/IFtdIDogX3JlZjMkdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlID0gX3JlZjMub25DaGFuZ2U7XG4gICAgdmFyIGdldEZpZWxkVmFsdWUgPSBjb250ZXh0LmdldEZpZWxkVmFsdWU7XG5cbiAgICB2YXIgZ2V0TmV3VmFsdWUgPSBmdW5jdGlvbiBnZXROZXdWYWx1ZSgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBnZXRGaWVsZFZhbHVlKHByZWZpeE5hbWUgfHwgW10pO1xuICAgICAgcmV0dXJuIHZhbHVlcyB8fCBbXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFsd2F5cyBnZXQgbGF0ZXN0IHZhbHVlIGluIGNhc2UgdXNlciB1cGRhdGUgZmllbGRzIGJ5IGBmb3JtYCBhcGkuXG4gICAgICovXG5cblxuICAgIHZhciBvcGVyYXRpb25zID0ge1xuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQoZGVmYXVsdFZhbHVlLCBpbmRleCkge1xuICAgICAgICAvLyBNYXBwaW5nIGtleXNcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gZ2V0TmV3VmFsdWUoKTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSBuZXdWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBrZXlNYW5hZ2VyLmtleXMgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGtleU1hbmFnZXIua2V5cy5zbGljZSgwLCBpbmRleCkpLCBba2V5TWFuYWdlci5pZF0sIF90b0NvbnN1bWFibGVBcnJheShrZXlNYW5hZ2VyLmtleXMuc2xpY2UoaW5kZXgpKSk7XG4gICAgICAgICAgb25DaGFuZ2UoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShuZXdWYWx1ZS5zbGljZSgwLCBpbmRleCkpLCBbZGVmYXVsdFZhbHVlXSwgX3RvQ29uc3VtYWJsZUFycmF5KG5ld1ZhbHVlLnNsaWNlKGluZGV4KSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gbmV3VmFsdWUubGVuZ3RoKSkge1xuICAgICAgICAgICAgd2FybmluZyhmYWxzZSwgJ1RoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIHRoZSBhZGQgZnVuY3Rpb24gc2hvdWxkIGJlIGEgdmFsaWQgcG9zaXRpdmUgbnVtYmVyLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGtleU1hbmFnZXIua2V5cyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoa2V5TWFuYWdlci5rZXlzKSwgW2tleU1hbmFnZXIuaWRdKTtcbiAgICAgICAgICBvbkNoYW5nZShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5ld1ZhbHVlKSwgW2RlZmF1bHRWYWx1ZV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleU1hbmFnZXIuaWQgKz0gMTtcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBnZXROZXdWYWx1ZSgpO1xuICAgICAgICB2YXIgaW5kZXhTZXQgPSBuZXcgU2V0KEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXggOiBbaW5kZXhdKTtcblxuICAgICAgICBpZiAoaW5kZXhTZXQuc2l6ZSA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5TWFuYWdlci5rZXlzID0ga2V5TWFuYWdlci5rZXlzLmZpbHRlcihmdW5jdGlvbiAoXywga2V5c0luZGV4KSB7XG4gICAgICAgICAgcmV0dXJuICFpbmRleFNldC5oYXMoa2V5c0luZGV4KTtcbiAgICAgICAgfSk7IC8vIFRyaWdnZXIgc3RvcmUgY2hhbmdlXG5cbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChfLCB2YWx1ZUluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuICFpbmRleFNldC5oYXModmFsdWVJbmRleCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKGZyb20sIHRvKSB7XG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGdldE5ld1ZhbHVlKCk7IC8vIERvIG5vdCBoYW5kbGUgb3V0IG9mIHJhbmdlXG5cbiAgICAgICAgaWYgKGZyb20gPCAwIHx8IGZyb20gPj0gbmV3VmFsdWUubGVuZ3RoIHx8IHRvIDwgMCB8fCB0byA+PSBuZXdWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXlNYW5hZ2VyLmtleXMgPSBfbW92ZShrZXlNYW5hZ2VyLmtleXMsIGZyb20sIHRvKTsgLy8gVHJpZ2dlciBzdG9yZSBjaGFuZ2VcblxuICAgICAgICBvbkNoYW5nZShfbW92ZShuZXdWYWx1ZSwgZnJvbSwgdG8pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBsaXN0VmFsdWUgPSB2YWx1ZSB8fCBbXTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShsaXN0VmFsdWUpKSB7XG4gICAgICBsaXN0VmFsdWUgPSBbXTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybmluZyhmYWxzZSwgXCJDdXJyZW50IHZhbHVlIG9mICdcIi5jb25jYXQocHJlZml4TmFtZS5qb2luKCcgPiAnKSwgXCInIGlzIG5vdCBhbiBhcnJheSB0eXBlLlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuKGxpc3RWYWx1ZS5tYXAoZnVuY3Rpb24gKF9fLCBpbmRleCkge1xuICAgICAgdmFyIGtleSA9IGtleU1hbmFnZXIua2V5c1tpbmRleF07XG5cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXlNYW5hZ2VyLmtleXNbaW5kZXhdID0ga2V5TWFuYWdlci5pZDtcbiAgICAgICAga2V5ID0ga2V5TWFuYWdlci5rZXlzW2luZGV4XTtcbiAgICAgICAga2V5TWFuYWdlci5pZCArPSAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBpbmRleCxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGlzTGlzdEZpZWxkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pLCBvcGVyYXRpb25zLCBtZXRhKTtcbiAgfSkpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7IiwiZXhwb3J0IGZ1bmN0aW9uIGFsbFByb21pc2VGaW5pc2gocHJvbWlzZUxpc3QpIHtcbiAgdmFyIGhhc0Vycm9yID0gZmFsc2U7XG4gIHZhciBjb3VudCA9IHByb21pc2VMaXN0Lmxlbmd0aDtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICBpZiAoIXByb21pc2VMaXN0Lmxlbmd0aCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwcm9taXNlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9taXNlLCBpbmRleCkge1xuICAgICAgcHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGNvdW50IC09IDE7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gcmVzdWx0O1xuXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgICByZWplY3QocmVzdWx0cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xudmFyIFNQTElUID0gJ19fQGZpZWxkX3NwbGl0X18nO1xuLyoqXG4gKiBDb252ZXJ0IG5hbWUgcGF0aCBpbnRvIHN0cmluZyB0byBmYXN0IHRoZSBmZXRjaCBzcGVlZCBvZiBNYXAuXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplKG5hbWVQYXRoKSB7XG4gIHJldHVybiBuYW1lUGF0aC5tYXAoZnVuY3Rpb24gKGNlbGwpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoX3R5cGVvZihjZWxsKSwgXCI6XCIpLmNvbmNhdChjZWxsKTtcbiAgfSkgLy8gTWFnaWMgc3BsaXRcbiAgLmpvaW4oU1BMSVQpO1xufVxuLyoqXG4gKiBOYW1lTWFwIGxpa2UgYSBgTWFwYCBidXQgYWNjZXB0cyBgc3RyaW5nW11gIGFzIGtleS5cbiAqL1xuXG5cbnZhciBOYW1lTWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTmFtZU1hcCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTmFtZU1hcCk7XG5cbiAgICB0aGlzLmt2cyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOYW1lTWFwLCBbe1xuICAgIGtleTogXCJzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIHRoaXMua3ZzLnNldChub3JtYWxpemUoa2V5KSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMua3ZzLmdldChub3JtYWxpemUoa2V5KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoa2V5LCB1cGRhdGVyKSB7XG4gICAgICB2YXIgb3JpZ2luID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgIHZhciBuZXh0ID0gdXBkYXRlcihvcmlnaW4pO1xuXG4gICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgbmV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlKGtleSkge1xuICAgICAgdGhpcy5rdnMuZGVsZXRlKG5vcm1hbGl6ZShrZXkpKTtcbiAgICB9IC8vIFNpbmNlIHdlIG9ubHkgdXNlIHRoaXMgaW4gdGVzdCwgbGV0IHNpbXBseSByZWFsaXplIHRoaXNcblxuICB9LCB7XG4gICAga2V5OiBcIm1hcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5rdnMuZW50cmllcygpKS5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBrZXkgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIHZhbHVlID0gX3JlZjJbMV07XG5cbiAgICAgICAgdmFyIGNlbGxzID0ga2V5LnNwbGl0KFNQTElUKTtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcbiAgICAgICAgICBrZXk6IGNlbGxzLm1hcChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICAgICAgdmFyIF9jZWxsJG1hdGNoID0gY2VsbC5tYXRjaCgvXihbXjpdKik6KC4qKSQvKSxcbiAgICAgICAgICAgICAgICBfY2VsbCRtYXRjaDIgPSBfc2xpY2VkVG9BcnJheShfY2VsbCRtYXRjaCwgMyksXG4gICAgICAgICAgICAgICAgdHlwZSA9IF9jZWxsJG1hdGNoMlsxXSxcbiAgICAgICAgICAgICAgICB1bml0ID0gX2NlbGwkbWF0Y2gyWzJdO1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ251bWJlcicgPyBOdW1iZXIodW5pdCkgOiB1bml0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b0pTT05cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgdmFyIGpzb24gPSB7fTtcbiAgICAgIHRoaXMubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxuICAgICAgICAgICAgdmFsdWUgPSBfcmVmMy52YWx1ZTtcbiAgICAgICAganNvbltrZXkuam9pbignLicpXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5hbWVNYXA7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hbWVNYXA7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJuYW1lXCIsIFwiZXJyb3JzXCJdO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSE9PS19NQVJLIH0gZnJvbSAnLi9GaWVsZENvbnRleHQnO1xuaW1wb3J0IHsgYWxsUHJvbWlzZUZpbmlzaCB9IGZyb20gJy4vdXRpbHMvYXN5bmNVdGlsJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnLi91dGlscy9jbG9uZURlZXAnO1xuaW1wb3J0IHsgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzJztcbmltcG9ydCBOYW1lTWFwIGZyb20gJy4vdXRpbHMvTmFtZU1hcCc7XG5pbXBvcnQgeyBjbG9uZUJ5TmFtZVBhdGhMaXN0LCBjb250YWluc05hbWVQYXRoLCBnZXROYW1lUGF0aCwgZ2V0VmFsdWUsIG1hdGNoTmFtZVBhdGgsIHNldFZhbHVlLCBzZXRWYWx1ZXMgfSBmcm9tICcuL3V0aWxzL3ZhbHVlVXRpbCc7XG5leHBvcnQgdmFyIEZvcm1TdG9yZSA9IC8qI19fUFVSRV9fKi9fY3JlYXRlQ2xhc3MoZnVuY3Rpb24gRm9ybVN0b3JlKGZvcmNlUm9vdFVwZGF0ZSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtU3RvcmUpO1xuXG4gIHRoaXMuZm9ybUhvb2tlZCA9IGZhbHNlO1xuICB0aGlzLmZvcmNlUm9vdFVwZGF0ZSA9IHZvaWQgMDtcbiAgdGhpcy5zdWJzY3JpYmFibGUgPSB0cnVlO1xuICB0aGlzLnN0b3JlID0ge307XG4gIHRoaXMuZmllbGRFbnRpdGllcyA9IFtdO1xuICB0aGlzLmluaXRpYWxWYWx1ZXMgPSB7fTtcbiAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgdGhpcy52YWxpZGF0ZU1lc3NhZ2VzID0gbnVsbDtcbiAgdGhpcy5wcmVzZXJ2ZSA9IG51bGw7XG4gIHRoaXMubGFzdFZhbGlkYXRlUHJvbWlzZSA9IG51bGw7XG5cbiAgdGhpcy5nZXRGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRGaWVsZFZhbHVlOiBfdGhpcy5nZXRGaWVsZFZhbHVlLFxuICAgICAgZ2V0RmllbGRzVmFsdWU6IF90aGlzLmdldEZpZWxkc1ZhbHVlLFxuICAgICAgZ2V0RmllbGRFcnJvcjogX3RoaXMuZ2V0RmllbGRFcnJvcixcbiAgICAgIGdldEZpZWxkV2FybmluZzogX3RoaXMuZ2V0RmllbGRXYXJuaW5nLFxuICAgICAgZ2V0RmllbGRzRXJyb3I6IF90aGlzLmdldEZpZWxkc0Vycm9yLFxuICAgICAgaXNGaWVsZHNUb3VjaGVkOiBfdGhpcy5pc0ZpZWxkc1RvdWNoZWQsXG4gICAgICBpc0ZpZWxkVG91Y2hlZDogX3RoaXMuaXNGaWVsZFRvdWNoZWQsXG4gICAgICBpc0ZpZWxkVmFsaWRhdGluZzogX3RoaXMuaXNGaWVsZFZhbGlkYXRpbmcsXG4gICAgICBpc0ZpZWxkc1ZhbGlkYXRpbmc6IF90aGlzLmlzRmllbGRzVmFsaWRhdGluZyxcbiAgICAgIHJlc2V0RmllbGRzOiBfdGhpcy5yZXNldEZpZWxkcyxcbiAgICAgIHNldEZpZWxkczogX3RoaXMuc2V0RmllbGRzLFxuICAgICAgc2V0RmllbGRWYWx1ZTogX3RoaXMuc2V0RmllbGRWYWx1ZSxcbiAgICAgIHNldEZpZWxkc1ZhbHVlOiBfdGhpcy5zZXRGaWVsZHNWYWx1ZSxcbiAgICAgIHZhbGlkYXRlRmllbGRzOiBfdGhpcy52YWxpZGF0ZUZpZWxkcyxcbiAgICAgIHN1Ym1pdDogX3RoaXMuc3VibWl0LFxuICAgICAgX2luaXQ6IHRydWUsXG4gICAgICBnZXRJbnRlcm5hbEhvb2tzOiBfdGhpcy5nZXRJbnRlcm5hbEhvb2tzXG4gICAgfTtcbiAgfTtcblxuICB0aGlzLmdldEludGVybmFsSG9va3MgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gSE9PS19NQVJLKSB7XG4gICAgICBfdGhpcy5mb3JtSG9va2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BhdGNoOiBfdGhpcy5kaXNwYXRjaCxcbiAgICAgICAgaW5pdEVudGl0eVZhbHVlOiBfdGhpcy5pbml0RW50aXR5VmFsdWUsXG4gICAgICAgIHJlZ2lzdGVyRmllbGQ6IF90aGlzLnJlZ2lzdGVyRmllbGQsXG4gICAgICAgIHVzZVN1YnNjcmliZTogX3RoaXMudXNlU3Vic2NyaWJlLFxuICAgICAgICBzZXRJbml0aWFsVmFsdWVzOiBfdGhpcy5zZXRJbml0aWFsVmFsdWVzLFxuICAgICAgICBkZXN0cm95Rm9ybTogX3RoaXMuZGVzdHJveUZvcm0sXG4gICAgICAgIHNldENhbGxiYWNrczogX3RoaXMuc2V0Q2FsbGJhY2tzLFxuICAgICAgICBzZXRWYWxpZGF0ZU1lc3NhZ2VzOiBfdGhpcy5zZXRWYWxpZGF0ZU1lc3NhZ2VzLFxuICAgICAgICBnZXRGaWVsZHM6IF90aGlzLmdldEZpZWxkcyxcbiAgICAgICAgc2V0UHJlc2VydmU6IF90aGlzLnNldFByZXNlcnZlLFxuICAgICAgICBnZXRJbml0aWFsVmFsdWU6IF90aGlzLmdldEluaXRpYWxWYWx1ZSxcbiAgICAgICAgcmVnaXN0ZXJXYXRjaDogX3RoaXMucmVnaXN0ZXJXYXRjaFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXJuaW5nKGZhbHNlLCAnYGdldEludGVybmFsSG9va3NgIGlzIGludGVybmFsIHVzYWdlLiBTaG91bGQgbm90IGNhbGwgZGlyZWN0bHkuJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy51c2VTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJhYmxlKSB7XG4gICAgX3RoaXMuc3Vic2NyaWJhYmxlID0gc3Vic2NyaWJhYmxlO1xuICB9O1xuXG4gIHRoaXMucHJldldpdGhvdXRQcmVzZXJ2ZXMgPSBudWxsO1xuXG4gIHRoaXMuc2V0SW5pdGlhbFZhbHVlcyA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBpbml0KSB7XG4gICAgX3RoaXMuaW5pdGlhbFZhbHVlcyA9IGluaXRpYWxWYWx1ZXMgfHwge307XG5cbiAgICBpZiAoaW5pdCkge1xuICAgICAgdmFyIF90aGlzJHByZXZXaXRob3V0UHJlcztcblxuICAgICAgdmFyIG5leHRTdG9yZSA9IHNldFZhbHVlcyh7fSwgaW5pdGlhbFZhbHVlcywgX3RoaXMuc3RvcmUpOyAvLyBXZSB3aWxsIHRha2UgY29uc2lkZXIgcHJldiBmb3JtIHVubW91bnQgZmllbGRzLlxuICAgICAgLy8gV2hlbiB0aGUgZmllbGQgaXMgbm90IGBwcmVzZXJ2ZWAsIHdlIG5lZWQgZmlsbCB0aGlzIHdpdGggaW5pdGlhbFZhbHVlcyBpbnN0ZWFkIG9mIHN0b3JlLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuXG4gICAgICAoX3RoaXMkcHJldldpdGhvdXRQcmVzID0gX3RoaXMucHJldldpdGhvdXRQcmVzZXJ2ZXMpID09PSBudWxsIHx8IF90aGlzJHByZXZXaXRob3V0UHJlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkcHJldldpdGhvdXRQcmVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgbmFtZVBhdGggPSBfcmVmLmtleTtcbiAgICAgICAgbmV4dFN0b3JlID0gc2V0VmFsdWUobmV4dFN0b3JlLCBuYW1lUGF0aCwgZ2V0VmFsdWUoaW5pdGlhbFZhbHVlcywgbmFtZVBhdGgpKTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMucHJldldpdGhvdXRQcmVzZXJ2ZXMgPSBudWxsO1xuXG4gICAgICBfdGhpcy51cGRhdGVTdG9yZShuZXh0U3RvcmUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmRlc3Ryb3lGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmV2V2l0aG91dFByZXNlcnZlcyA9IG5ldyBOYW1lTWFwKCk7XG5cbiAgICBfdGhpcy5nZXRGaWVsZEVudGl0aWVzKHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGVudGl0eSkge1xuICAgICAgaWYgKCFfdGhpcy5pc01lcmdlZFByZXNlcnZlKGVudGl0eS5pc1ByZXNlcnZlKCkpKSB7XG4gICAgICAgIHByZXZXaXRob3V0UHJlc2VydmVzLnNldChlbnRpdHkuZ2V0TmFtZVBhdGgoKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfdGhpcy5wcmV2V2l0aG91dFByZXNlcnZlcyA9IHByZXZXaXRob3V0UHJlc2VydmVzO1xuICB9O1xuXG4gIHRoaXMuZ2V0SW5pdGlhbFZhbHVlID0gZnVuY3Rpb24gKG5hbWVQYXRoKSB7XG4gICAgdmFyIGluaXRWYWx1ZSA9IGdldFZhbHVlKF90aGlzLmluaXRpYWxWYWx1ZXMsIG5hbWVQYXRoKTsgLy8gTm90IGNsb25lRGVlcCB3aGVuIHdpdGhvdXQgYG5hbWVQYXRoYFxuXG4gICAgcmV0dXJuIG5hbWVQYXRoLmxlbmd0aCA/IGNsb25lRGVlcChpbml0VmFsdWUpIDogaW5pdFZhbHVlO1xuICB9O1xuXG4gIHRoaXMuc2V0Q2FsbGJhY2tzID0gZnVuY3Rpb24gKGNhbGxiYWNrcykge1xuICAgIF90aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgfTtcblxuICB0aGlzLnNldFZhbGlkYXRlTWVzc2FnZXMgPSBmdW5jdGlvbiAodmFsaWRhdGVNZXNzYWdlcykge1xuICAgIF90aGlzLnZhbGlkYXRlTWVzc2FnZXMgPSB2YWxpZGF0ZU1lc3NhZ2VzO1xuICB9O1xuXG4gIHRoaXMuc2V0UHJlc2VydmUgPSBmdW5jdGlvbiAocHJlc2VydmUpIHtcbiAgICBfdGhpcy5wcmVzZXJ2ZSA9IHByZXNlcnZlO1xuICB9O1xuXG4gIHRoaXMud2F0Y2hMaXN0ID0gW107XG5cbiAgdGhpcy5yZWdpc3RlcldhdGNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgX3RoaXMud2F0Y2hMaXN0LnB1c2goY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLndhdGNoTGlzdCA9IF90aGlzLndhdGNoTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbiAhPT0gY2FsbGJhY2s7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMubm90aWZ5V2F0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hbWVQYXRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcblxuICAgIC8vIE5vIG5lZWQgdG8gY29zdCBwZXJmIHdoZW4gbm90aGluZyBuZWVkIHRvIHdhdGNoXG4gICAgaWYgKF90aGlzLndhdGNoTGlzdC5sZW5ndGgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBfdGhpcy5nZXRGaWVsZHNWYWx1ZSgpO1xuXG4gICAgICBfdGhpcy53YXRjaExpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sodmFsdWVzLCBuYW1lUGF0aCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuXG4gIHRoaXMud2FybmluZ1VuaG9va2VkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFfdGhpcy50aW1lb3V0SWQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF90aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICAgIGlmICghX3RoaXMuZm9ybUhvb2tlZCkge1xuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdJbnN0YW5jZSBjcmVhdGVkIGJ5IGB1c2VGb3JtYCBpcyBub3QgY29ubmVjdGVkIHRvIGFueSBGb3JtIGVsZW1lbnQuIEZvcmdldCB0byBwYXNzIGBmb3JtYCBwcm9wPycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy51cGRhdGVTdG9yZSA9IGZ1bmN0aW9uIChuZXh0U3RvcmUpIHtcbiAgICBfdGhpcy5zdG9yZSA9IG5leHRTdG9yZTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkRW50aXRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHB1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgaWYgKCFwdXJlKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZmllbGRFbnRpdGllcztcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMuZmllbGRFbnRpdGllcy5maWx0ZXIoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICByZXR1cm4gZmllbGQuZ2V0TmFtZVBhdGgoKS5sZW5ndGg7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZHNNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHB1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgIHZhciBjYWNoZSA9IG5ldyBOYW1lTWFwKCk7XG5cbiAgICBfdGhpcy5nZXRGaWVsZEVudGl0aWVzKHB1cmUpLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICB2YXIgbmFtZVBhdGggPSBmaWVsZC5nZXROYW1lUGF0aCgpO1xuICAgICAgY2FjaGUuc2V0KG5hbWVQYXRoLCBmaWVsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZEVudGl0aWVzRm9yTmFtZVBhdGhMaXN0ID0gZnVuY3Rpb24gKG5hbWVMaXN0KSB7XG4gICAgaWYgKCFuYW1lTGlzdCkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldEZpZWxkRW50aXRpZXModHJ1ZSk7XG4gICAgfVxuXG4gICAgdmFyIGNhY2hlID0gX3RoaXMuZ2V0RmllbGRzTWFwKHRydWUpO1xuXG4gICAgcmV0dXJuIG5hbWVMaXN0Lm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIG5hbWVQYXRoID0gZ2V0TmFtZVBhdGgobmFtZSk7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KG5hbWVQYXRoKSB8fCB7XG4gICAgICAgIElOVkFMSURBVEVfTkFNRV9QQVRIOiBnZXROYW1lUGF0aChuYW1lKVxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkc1ZhbHVlID0gZnVuY3Rpb24gKG5hbWVMaXN0LCBmaWx0ZXJGdW5jKSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICBpZiAobmFtZUxpc3QgPT09IHRydWUgJiYgIWZpbHRlckZ1bmMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdG9yZTtcbiAgICB9XG5cbiAgICB2YXIgZmllbGRFbnRpdGllcyA9IF90aGlzLmdldEZpZWxkRW50aXRpZXNGb3JOYW1lUGF0aExpc3QoQXJyYXkuaXNBcnJheShuYW1lTGlzdCkgPyBuYW1lTGlzdCA6IG51bGwpO1xuXG4gICAgdmFyIGZpbHRlcmVkTmFtZUxpc3QgPSBbXTtcbiAgICBmaWVsZEVudGl0aWVzLmZvckVhY2goZnVuY3Rpb24gKGVudGl0eSkge1xuICAgICAgdmFyIF9lbnRpdHkkaXNMaXN0RmllbGQ7XG5cbiAgICAgIHZhciBuYW1lUGF0aCA9ICdJTlZBTElEQVRFX05BTUVfUEFUSCcgaW4gZW50aXR5ID8gZW50aXR5LklOVkFMSURBVEVfTkFNRV9QQVRIIDogZW50aXR5LmdldE5hbWVQYXRoKCk7IC8vIElnbm9yZSB3aGVuIGl0J3MgYSBsaXN0IGl0ZW0gYW5kIG5vdCBzcGVjaWZpYyB0aGUgbmFtZVBhdGgsXG4gICAgICAvLyBzaW5jZSBwYXJlbnQgZmllbGQgaXMgYWxyZWFkeSB0YWtlIGluIGNvdW50XG5cbiAgICAgIGlmICghbmFtZUxpc3QgJiYgKChfZW50aXR5JGlzTGlzdEZpZWxkID0gZW50aXR5LmlzTGlzdEZpZWxkKSA9PT0gbnVsbCB8fCBfZW50aXR5JGlzTGlzdEZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZW50aXR5JGlzTGlzdEZpZWxkLmNhbGwoZW50aXR5KSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbHRlckZ1bmMpIHtcbiAgICAgICAgZmlsdGVyZWROYW1lTGlzdC5wdXNoKG5hbWVQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXRhID0gJ2dldE1ldGEnIGluIGVudGl0eSA/IGVudGl0eS5nZXRNZXRhKCkgOiBudWxsO1xuXG4gICAgICAgIGlmIChmaWx0ZXJGdW5jKG1ldGEpKSB7XG4gICAgICAgICAgZmlsdGVyZWROYW1lTGlzdC5wdXNoKG5hbWVQYXRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbG9uZUJ5TmFtZVBhdGhMaXN0KF90aGlzLnN0b3JlLCBmaWx0ZXJlZE5hbWVMaXN0Lm1hcChnZXROYW1lUGF0aCkpO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgbmFtZVBhdGggPSBnZXROYW1lUGF0aChuYW1lKTtcbiAgICByZXR1cm4gZ2V0VmFsdWUoX3RoaXMuc3RvcmUsIG5hbWVQYXRoKTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkc0Vycm9yID0gZnVuY3Rpb24gKG5hbWVMaXN0KSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgZmllbGRFbnRpdGllcyA9IF90aGlzLmdldEZpZWxkRW50aXRpZXNGb3JOYW1lUGF0aExpc3QobmFtZUxpc3QpO1xuXG4gICAgcmV0dXJuIGZpZWxkRW50aXRpZXMubWFwKGZ1bmN0aW9uIChlbnRpdHksIGluZGV4KSB7XG4gICAgICBpZiAoZW50aXR5ICYmICEoJ0lOVkFMSURBVEVfTkFNRV9QQVRIJyBpbiBlbnRpdHkpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogZW50aXR5LmdldE5hbWVQYXRoKCksXG4gICAgICAgICAgZXJyb3JzOiBlbnRpdHkuZ2V0RXJyb3JzKCksXG4gICAgICAgICAgd2FybmluZ3M6IGVudGl0eS5nZXRXYXJuaW5ncygpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGdldE5hbWVQYXRoKG5hbWVMaXN0W2luZGV4XSksXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIHdhcm5pbmdzOiBbXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkRXJyb3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgdmFyIG5hbWVQYXRoID0gZ2V0TmFtZVBhdGgobmFtZSk7XG5cbiAgICB2YXIgZmllbGRFcnJvciA9IF90aGlzLmdldEZpZWxkc0Vycm9yKFtuYW1lUGF0aF0pWzBdO1xuXG4gICAgcmV0dXJuIGZpZWxkRXJyb3IuZXJyb3JzO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmllbGRXYXJuaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdGhpcy53YXJuaW5nVW5ob29rZWQoKTtcblxuICAgIHZhciBuYW1lUGF0aCA9IGdldE5hbWVQYXRoKG5hbWUpO1xuXG4gICAgdmFyIGZpZWxkRXJyb3IgPSBfdGhpcy5nZXRGaWVsZHNFcnJvcihbbmFtZVBhdGhdKVswXTtcblxuICAgIHJldHVybiBmaWVsZEVycm9yLndhcm5pbmdzO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZHNUb3VjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmcwID0gYXJnc1swXSxcbiAgICAgICAgYXJnMSA9IGFyZ3NbMV07XG4gICAgdmFyIG5hbWVQYXRoTGlzdDtcbiAgICB2YXIgaXNBbGxGaWVsZHNUb3VjaGVkID0gZmFsc2U7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVQYXRoTGlzdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnMCkpIHtcbiAgICAgICAgbmFtZVBhdGhMaXN0ID0gYXJnMC5tYXAoZ2V0TmFtZVBhdGgpO1xuICAgICAgICBpc0FsbEZpZWxkc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWVQYXRoTGlzdCA9IG51bGw7XG4gICAgICAgIGlzQWxsRmllbGRzVG91Y2hlZCA9IGFyZzA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWVQYXRoTGlzdCA9IGFyZzAubWFwKGdldE5hbWVQYXRoKTtcbiAgICAgIGlzQWxsRmllbGRzVG91Y2hlZCA9IGFyZzE7XG4gICAgfVxuXG4gICAgdmFyIGZpZWxkRW50aXRpZXMgPSBfdGhpcy5nZXRGaWVsZEVudGl0aWVzKHRydWUpO1xuXG4gICAgdmFyIGlzRmllbGRUb3VjaGVkID0gZnVuY3Rpb24gaXNGaWVsZFRvdWNoZWQoZmllbGQpIHtcbiAgICAgIHJldHVybiBmaWVsZC5pc0ZpZWxkVG91Y2hlZCgpO1xuICAgIH07IC8vID09PT09IFdpbGwgZ2V0IGZ1bGx5IGNvbXBhcmUgd2hlbiBub3QgY29uZmlnIG5hbWVQYXRoTGlzdCA9PT09PVxuXG5cbiAgICBpZiAoIW5hbWVQYXRoTGlzdCkge1xuICAgICAgcmV0dXJuIGlzQWxsRmllbGRzVG91Y2hlZCA/IGZpZWxkRW50aXRpZXMuZXZlcnkoaXNGaWVsZFRvdWNoZWQpIDogZmllbGRFbnRpdGllcy5zb21lKGlzRmllbGRUb3VjaGVkKTtcbiAgICB9IC8vIEdlbmVyYXRlIGEgbmVzdCB0cmVlIGZvciB2YWxpZGF0ZVxuXG5cbiAgICB2YXIgbWFwID0gbmV3IE5hbWVNYXAoKTtcbiAgICBuYW1lUGF0aExpc3QuZm9yRWFjaChmdW5jdGlvbiAoc2hvcnROYW1lUGF0aCkge1xuICAgICAgbWFwLnNldChzaG9ydE5hbWVQYXRoLCBbXSk7XG4gICAgfSk7XG4gICAgZmllbGRFbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgdmFyIGZpZWxkTmFtZVBhdGggPSBmaWVsZC5nZXROYW1lUGF0aCgpOyAvLyBGaW5kIG1hdGNoZWQgZW50aXR5IGFuZCBwdXQgaW50byBsaXN0XG5cbiAgICAgIG5hbWVQYXRoTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChzaG9ydE5hbWVQYXRoKSB7XG4gICAgICAgIGlmIChzaG9ydE5hbWVQYXRoLmV2ZXJ5KGZ1bmN0aW9uIChuYW1lVW5pdCwgaSkge1xuICAgICAgICAgIHJldHVybiBmaWVsZE5hbWVQYXRoW2ldID09PSBuYW1lVW5pdDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBtYXAudXBkYXRlKHNob3J0TmFtZVBhdGgsIGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShsaXN0KSwgW2ZpZWxkXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pOyAvLyBDaGVjayBpZiBOYW1lTWFwIHZhbHVlIGlzIHRvdWNoZWRcblxuICAgIHZhciBpc05hbWVQYXRoTGlzdFRvdWNoZWQgPSBmdW5jdGlvbiBpc05hbWVQYXRoTGlzdFRvdWNoZWQoZW50aXRpZXMpIHtcbiAgICAgIHJldHVybiBlbnRpdGllcy5zb21lKGlzRmllbGRUb3VjaGVkKTtcbiAgICB9O1xuXG4gICAgdmFyIG5hbWVQYXRoTGlzdEVudGl0aWVzID0gbWFwLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBpc0FsbEZpZWxkc1RvdWNoZWQgPyBuYW1lUGF0aExpc3RFbnRpdGllcy5ldmVyeShpc05hbWVQYXRoTGlzdFRvdWNoZWQpIDogbmFtZVBhdGhMaXN0RW50aXRpZXMuc29tZShpc05hbWVQYXRoTGlzdFRvdWNoZWQpO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZFRvdWNoZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgcmV0dXJuIF90aGlzLmlzRmllbGRzVG91Y2hlZChbbmFtZV0pO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZHNWYWxpZGF0aW5nID0gZnVuY3Rpb24gKG5hbWVMaXN0KSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgZmllbGRFbnRpdGllcyA9IF90aGlzLmdldEZpZWxkRW50aXRpZXMoKTtcblxuICAgIGlmICghbmFtZUxpc3QpIHtcbiAgICAgIHJldHVybiBmaWVsZEVudGl0aWVzLnNvbWUoZnVuY3Rpb24gKHRlc3RGaWVsZCkge1xuICAgICAgICByZXR1cm4gdGVzdEZpZWxkLmlzRmllbGRWYWxpZGF0aW5nKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgbmFtZVBhdGhMaXN0ID0gbmFtZUxpc3QubWFwKGdldE5hbWVQYXRoKTtcbiAgICByZXR1cm4gZmllbGRFbnRpdGllcy5zb21lKGZ1bmN0aW9uICh0ZXN0RmllbGQpIHtcbiAgICAgIHZhciBmaWVsZE5hbWVQYXRoID0gdGVzdEZpZWxkLmdldE5hbWVQYXRoKCk7XG4gICAgICByZXR1cm4gY29udGFpbnNOYW1lUGF0aChuYW1lUGF0aExpc3QsIGZpZWxkTmFtZVBhdGgpICYmIHRlc3RGaWVsZC5pc0ZpZWxkVmFsaWRhdGluZygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZFZhbGlkYXRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgcmV0dXJuIF90aGlzLmlzRmllbGRzVmFsaWRhdGluZyhbbmFtZV0pO1xuICB9O1xuXG4gIHRoaXMucmVzZXRXaXRoRmllbGRJbml0aWFsVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluZm8gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIENyZWF0ZSBjYWNoZVxuICAgIHZhciBjYWNoZSA9IG5ldyBOYW1lTWFwKCk7XG5cbiAgICB2YXIgZmllbGRFbnRpdGllcyA9IF90aGlzLmdldEZpZWxkRW50aXRpZXModHJ1ZSk7XG5cbiAgICBmaWVsZEVudGl0aWVzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICB2YXIgaW5pdGlhbFZhbHVlID0gZmllbGQucHJvcHMuaW5pdGlhbFZhbHVlO1xuICAgICAgdmFyIG5hbWVQYXRoID0gZmllbGQuZ2V0TmFtZVBhdGgoKTsgLy8gUmVjb3JkIG9ubHkgaWYgaGFzIGBpbml0aWFsVmFsdWVgXG5cbiAgICAgIGlmIChpbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgcmVjb3JkcyA9IGNhY2hlLmdldChuYW1lUGF0aCkgfHwgbmV3IFNldCgpO1xuICAgICAgICByZWNvcmRzLmFkZCh7XG4gICAgICAgICAgZW50aXR5OiBmaWVsZCxcbiAgICAgICAgICB2YWx1ZTogaW5pdGlhbFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBjYWNoZS5zZXQobmFtZVBhdGgsIHJlY29yZHMpO1xuICAgICAgfVxuICAgIH0pOyAvLyBSZXNldFxuXG4gICAgdmFyIHJlc2V0V2l0aEZpZWxkcyA9IGZ1bmN0aW9uIHJlc2V0V2l0aEZpZWxkcyhlbnRpdGllcykge1xuICAgICAgZW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IGZpZWxkLnByb3BzLmluaXRpYWxWYWx1ZTtcblxuICAgICAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmFtZVBhdGggPSBmaWVsZC5nZXROYW1lUGF0aCgpO1xuXG4gICAgICAgICAgdmFyIGZvcm1Jbml0aWFsVmFsdWUgPSBfdGhpcy5nZXRJbml0aWFsVmFsdWUobmFtZVBhdGgpO1xuXG4gICAgICAgICAgaWYgKGZvcm1Jbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gV2FybmluZyBpZiBjb25mbGljdCB3aXRoIGZvcm0gaW5pdGlhbFZhbHVlcyBhbmQgZG8gbm90IG1vZGlmeSB2YWx1ZVxuICAgICAgICAgICAgd2FybmluZyhmYWxzZSwgXCJGb3JtIGFscmVhZHkgc2V0ICdpbml0aWFsVmFsdWVzJyB3aXRoIHBhdGggJ1wiLmNvbmNhdChuYW1lUGF0aC5qb2luKCcuJyksIFwiJy4gRmllbGQgY2FuIG5vdCBvdmVyd3JpdGUgaXQuXCIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlY29yZHMgPSBjYWNoZS5nZXQobmFtZVBhdGgpO1xuXG4gICAgICAgICAgICBpZiAocmVjb3JkcyAmJiByZWNvcmRzLnNpemUgPiAxKSB7XG4gICAgICAgICAgICAgIC8vIFdhcm5pbmcgaWYgbXVsdGlwbGUgZmllbGQgc2V0IGBpbml0aWFsVmFsdWVgYW5kIGRvIG5vdCBtb2RpZnkgdmFsdWVcbiAgICAgICAgICAgICAgd2FybmluZyhmYWxzZSwgXCJNdWx0aXBsZSBGaWVsZCB3aXRoIHBhdGggJ1wiLmNvbmNhdChuYW1lUGF0aC5qb2luKCcuJyksIFwiJyBzZXQgJ2luaXRpYWxWYWx1ZScuIENhbiBub3QgZGVjaWRlIHdoaWNoIG9uZSB0byBwaWNrLlwiKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZHMpIHtcbiAgICAgICAgICAgICAgdmFyIG9yaWdpblZhbHVlID0gX3RoaXMuZ2V0RmllbGRWYWx1ZShuYW1lUGF0aCk7IC8vIFNldCBgaW5pdGlhbFZhbHVlYFxuXG5cbiAgICAgICAgICAgICAgaWYgKCFpbmZvLnNraXBFeGlzdCB8fCBvcmlnaW5WYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlU3RvcmUoc2V0VmFsdWUoX3RoaXMuc3RvcmUsIG5hbWVQYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkocmVjb3JkcylbMF0udmFsdWUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciByZXF1aXJlZEZpZWxkRW50aXRpZXM7XG5cbiAgICBpZiAoaW5mby5lbnRpdGllcykge1xuICAgICAgcmVxdWlyZWRGaWVsZEVudGl0aWVzID0gaW5mby5lbnRpdGllcztcbiAgICB9IGVsc2UgaWYgKGluZm8ubmFtZVBhdGhMaXN0KSB7XG4gICAgICByZXF1aXJlZEZpZWxkRW50aXRpZXMgPSBbXTtcbiAgICAgIGluZm8ubmFtZVBhdGhMaXN0LmZvckVhY2goZnVuY3Rpb24gKG5hbWVQYXRoKSB7XG4gICAgICAgIHZhciByZWNvcmRzID0gY2FjaGUuZ2V0KG5hbWVQYXRoKTtcblxuICAgICAgICBpZiAocmVjb3Jkcykge1xuICAgICAgICAgIHZhciBfcmVxdWlyZWRGaWVsZEVudGl0aWU7XG5cbiAgICAgICAgICAoX3JlcXVpcmVkRmllbGRFbnRpdGllID0gcmVxdWlyZWRGaWVsZEVudGl0aWVzKS5wdXNoLmFwcGx5KF9yZXF1aXJlZEZpZWxkRW50aXRpZSwgX3RvQ29uc3VtYWJsZUFycmF5KF90b0NvbnN1bWFibGVBcnJheShyZWNvcmRzKS5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHJldHVybiByLmVudGl0eTtcbiAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWlyZWRGaWVsZEVudGl0aWVzID0gZmllbGRFbnRpdGllcztcbiAgICB9XG5cbiAgICByZXNldFdpdGhGaWVsZHMocmVxdWlyZWRGaWVsZEVudGl0aWVzKTtcbiAgfTtcblxuICB0aGlzLnJlc2V0RmllbGRzID0gZnVuY3Rpb24gKG5hbWVMaXN0KSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICB2YXIgcHJldlN0b3JlID0gX3RoaXMuc3RvcmU7XG5cbiAgICBpZiAoIW5hbWVMaXN0KSB7XG4gICAgICBfdGhpcy51cGRhdGVTdG9yZShzZXRWYWx1ZXMoe30sIF90aGlzLmluaXRpYWxWYWx1ZXMpKTtcblxuICAgICAgX3RoaXMucmVzZXRXaXRoRmllbGRJbml0aWFsVmFsdWUoKTtcblxuICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKHByZXZTdG9yZSwgbnVsbCwge1xuICAgICAgICB0eXBlOiAncmVzZXQnXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMubm90aWZ5V2F0Y2goKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVzZXQgYnkgYG5hbWVMaXN0YFxuXG5cbiAgICB2YXIgbmFtZVBhdGhMaXN0ID0gbmFtZUxpc3QubWFwKGdldE5hbWVQYXRoKTtcbiAgICBuYW1lUGF0aExpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZVBhdGgpIHtcbiAgICAgIHZhciBpbml0aWFsVmFsdWUgPSBfdGhpcy5nZXRJbml0aWFsVmFsdWUobmFtZVBhdGgpO1xuXG4gICAgICBfdGhpcy51cGRhdGVTdG9yZShzZXRWYWx1ZShfdGhpcy5zdG9yZSwgbmFtZVBhdGgsIGluaXRpYWxWYWx1ZSkpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMucmVzZXRXaXRoRmllbGRJbml0aWFsVmFsdWUoe1xuICAgICAgbmFtZVBhdGhMaXN0OiBuYW1lUGF0aExpc3RcbiAgICB9KTtcblxuICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhwcmV2U3RvcmUsIG5hbWVQYXRoTGlzdCwge1xuICAgICAgdHlwZTogJ3Jlc2V0J1xuICAgIH0pO1xuXG4gICAgX3RoaXMubm90aWZ5V2F0Y2gobmFtZVBhdGhMaXN0KTtcbiAgfTtcblxuICB0aGlzLnNldEZpZWxkcyA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgICBfdGhpcy53YXJuaW5nVW5ob29rZWQoKTtcblxuICAgIHZhciBwcmV2U3RvcmUgPSBfdGhpcy5zdG9yZTtcbiAgICB2YXIgbmFtZVBhdGhMaXN0ID0gW107XG4gICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkRGF0YSkge1xuICAgICAgdmFyIG5hbWUgPSBmaWVsZERhdGEubmFtZSxcbiAgICAgICAgICBlcnJvcnMgPSBmaWVsZERhdGEuZXJyb3JzLFxuICAgICAgICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZmllbGREYXRhLCBfZXhjbHVkZWQpO1xuXG4gICAgICB2YXIgbmFtZVBhdGggPSBnZXROYW1lUGF0aChuYW1lKTtcbiAgICAgIG5hbWVQYXRoTGlzdC5wdXNoKG5hbWVQYXRoKTsgLy8gVmFsdWVcblxuICAgICAgaWYgKCd2YWx1ZScgaW4gZGF0YSkge1xuICAgICAgICBfdGhpcy51cGRhdGVTdG9yZShzZXRWYWx1ZShfdGhpcy5zdG9yZSwgbmFtZVBhdGgsIGRhdGEudmFsdWUpKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKHByZXZTdG9yZSwgW25hbWVQYXRoXSwge1xuICAgICAgICB0eXBlOiAnc2V0RmllbGQnLFxuICAgICAgICBkYXRhOiBmaWVsZERhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX3RoaXMubm90aWZ5V2F0Y2gobmFtZVBhdGhMaXN0KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZW50aXRpZXMgPSBfdGhpcy5nZXRGaWVsZEVudGl0aWVzKHRydWUpO1xuXG4gICAgdmFyIGZpZWxkcyA9IGVudGl0aWVzLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIHZhciBuYW1lUGF0aCA9IGZpZWxkLmdldE5hbWVQYXRoKCk7XG4gICAgICB2YXIgbWV0YSA9IGZpZWxkLmdldE1ldGEoKTtcblxuICAgICAgdmFyIGZpZWxkRGF0YSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWV0YSksIHt9LCB7XG4gICAgICAgIG5hbWU6IG5hbWVQYXRoLFxuICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0RmllbGRWYWx1ZShuYW1lUGF0aClcbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGREYXRhLCAnb3JpZ2luUkNGaWVsZCcsIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZpZWxkRGF0YTtcbiAgICB9KTtcbiAgICByZXR1cm4gZmllbGRzO1xuICB9O1xuXG4gIHRoaXMuaW5pdEVudGl0eVZhbHVlID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICAgIHZhciBpbml0aWFsVmFsdWUgPSBlbnRpdHkucHJvcHMuaW5pdGlhbFZhbHVlO1xuXG4gICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgbmFtZVBhdGggPSBlbnRpdHkuZ2V0TmFtZVBhdGgoKTtcbiAgICAgIHZhciBwcmV2VmFsdWUgPSBnZXRWYWx1ZShfdGhpcy5zdG9yZSwgbmFtZVBhdGgpO1xuXG4gICAgICBpZiAocHJldlZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlU3RvcmUoc2V0VmFsdWUoX3RoaXMuc3RvcmUsIG5hbWVQYXRoLCBpbml0aWFsVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdGhpcy5pc01lcmdlZFByZXNlcnZlID0gZnVuY3Rpb24gKGZpZWxkUHJlc2VydmUpIHtcbiAgICB2YXIgbWVyZ2VkUHJlc2VydmUgPSBmaWVsZFByZXNlcnZlICE9PSB1bmRlZmluZWQgPyBmaWVsZFByZXNlcnZlIDogX3RoaXMucHJlc2VydmU7XG4gICAgcmV0dXJuIG1lcmdlZFByZXNlcnZlICE9PSBudWxsICYmIG1lcmdlZFByZXNlcnZlICE9PSB2b2lkIDAgPyBtZXJnZWRQcmVzZXJ2ZSA6IHRydWU7XG4gIH07XG5cbiAgdGhpcy5yZWdpc3RlckZpZWxkID0gZnVuY3Rpb24gKGVudGl0eSkge1xuICAgIF90aGlzLmZpZWxkRW50aXRpZXMucHVzaChlbnRpdHkpO1xuXG4gICAgdmFyIG5hbWVQYXRoID0gZW50aXR5LmdldE5hbWVQYXRoKCk7XG5cbiAgICBfdGhpcy5ub3RpZnlXYXRjaChbbmFtZVBhdGhdKTsgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cblxuICAgIGlmIChlbnRpdHkucHJvcHMuaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBwcmV2U3RvcmUgPSBfdGhpcy5zdG9yZTtcblxuICAgICAgX3RoaXMucmVzZXRXaXRoRmllbGRJbml0aWFsVmFsdWUoe1xuICAgICAgICBlbnRpdGllczogW2VudGl0eV0sXG4gICAgICAgIHNraXBFeGlzdDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm5vdGlmeU9ic2VydmVycyhwcmV2U3RvcmUsIFtlbnRpdHkuZ2V0TmFtZVBhdGgoKV0sIHtcbiAgICAgICAgdHlwZTogJ3ZhbHVlVXBkYXRlJyxcbiAgICAgICAgc291cmNlOiAnaW50ZXJuYWwnXG4gICAgICB9KTtcbiAgICB9IC8vIHVuLXJlZ2lzdGVyIGZpZWxkIGNhbGxiYWNrXG5cblxuICAgIHJldHVybiBmdW5jdGlvbiAoaXNMaXN0RmllbGQsIHByZXNlcnZlKSB7XG4gICAgICB2YXIgc3ViTmFtZVBhdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgX3RoaXMuZmllbGRFbnRpdGllcyA9IF90aGlzLmZpZWxkRW50aXRpZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBlbnRpdHk7XG4gICAgICB9KTsgLy8gQ2xlYW4gdXAgc3RvcmUgdmFsdWUgaWYgbm90IHByZXNlcnZlXG5cbiAgICAgIGlmICghX3RoaXMuaXNNZXJnZWRQcmVzZXJ2ZShwcmVzZXJ2ZSkgJiYgKCFpc0xpc3RGaWVsZCB8fCBzdWJOYW1lUGF0aC5sZW5ndGggPiAxKSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gaXNMaXN0RmllbGQgPyB1bmRlZmluZWQgOiBfdGhpcy5nZXRJbml0aWFsVmFsdWUobmFtZVBhdGgpO1xuXG4gICAgICAgIGlmIChuYW1lUGF0aC5sZW5ndGggJiYgX3RoaXMuZ2V0RmllbGRWYWx1ZShuYW1lUGF0aCkgIT09IGRlZmF1bHRWYWx1ZSAmJiBfdGhpcy5maWVsZEVudGl0aWVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgIHJldHVybiAoLy8gT25seSByZXNldCB3aGVuIG5vIG5hbWVQYXRoIGV4aXN0XG4gICAgICAgICAgICAhbWF0Y2hOYW1lUGF0aChmaWVsZC5nZXROYW1lUGF0aCgpLCBuYW1lUGF0aClcbiAgICAgICAgICApO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIHZhciBfcHJldlN0b3JlID0gX3RoaXMuc3RvcmU7XG5cbiAgICAgICAgICBfdGhpcy51cGRhdGVTdG9yZShzZXRWYWx1ZShfcHJldlN0b3JlLCBuYW1lUGF0aCwgZGVmYXVsdFZhbHVlLCB0cnVlKSk7IC8vIE5vdGlmeSB0aGF0IGZpZWxkIGlzIHVubW91bnRcblxuXG4gICAgICAgICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKF9wcmV2U3RvcmUsIFtuYW1lUGF0aF0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmUnXG4gICAgICAgICAgfSk7IC8vIERlcGVuZGVuY2llcyB1cGRhdGVcblxuXG4gICAgICAgICAgX3RoaXMudHJpZ2dlckRlcGVuZGVuY2llc1VwZGF0ZShfcHJldlN0b3JlLCBuYW1lUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMubm90aWZ5V2F0Y2goW25hbWVQYXRoXSk7XG4gICAgfTtcbiAgfTtcblxuICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3VwZGF0ZVZhbHVlJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBuYW1lUGF0aCA9IGFjdGlvbi5uYW1lUGF0aCxcbiAgICAgICAgICAgICAgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cbiAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShuYW1lUGF0aCwgdmFsdWUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAndmFsaWRhdGVGaWVsZCc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgX25hbWVQYXRoID0gYWN0aW9uLm5hbWVQYXRoLFxuICAgICAgICAgICAgICB0cmlnZ2VyTmFtZSA9IGFjdGlvbi50cmlnZ2VyTmFtZTtcblxuICAgICAgICAgIF90aGlzLnZhbGlkYXRlRmllbGRzKFtfbmFtZVBhdGhdLCB7XG4gICAgICAgICAgICB0cmlnZ2VyTmFtZTogdHJpZ2dlck5hbWVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IC8vIEN1cnJlbnRseSB3ZSBkb24ndCBoYXZlIG90aGVyIGFjdGlvbi4gRG8gbm90aGluZy5cblxuICAgIH1cbiAgfTtcblxuICB0aGlzLm5vdGlmeU9ic2VydmVycyA9IGZ1bmN0aW9uIChwcmV2U3RvcmUsIG5hbWVQYXRoTGlzdCwgaW5mbykge1xuICAgIGlmIChfdGhpcy5zdWJzY3JpYmFibGUpIHtcbiAgICAgIHZhciBtZXJnZWRJbmZvID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpbmZvKSwge30sIHtcbiAgICAgICAgc3RvcmU6IF90aGlzLmdldEZpZWxkc1ZhbHVlKHRydWUpXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuZ2V0RmllbGRFbnRpdGllcygpLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBvblN0b3JlQ2hhbmdlID0gX3JlZjMub25TdG9yZUNoYW5nZTtcbiAgICAgICAgb25TdG9yZUNoYW5nZShwcmV2U3RvcmUsIG5hbWVQYXRoTGlzdCwgbWVyZ2VkSW5mbyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuZm9yY2VSb290VXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMudHJpZ2dlckRlcGVuZGVuY2llc1VwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2U3RvcmUsIG5hbWVQYXRoKSB7XG4gICAgdmFyIGNoaWxkcmVuRmllbGRzID0gX3RoaXMuZ2V0RGVwZW5kZW5jeUNoaWxkcmVuRmllbGRzKG5hbWVQYXRoKTtcblxuICAgIGlmIChjaGlsZHJlbkZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIF90aGlzLnZhbGlkYXRlRmllbGRzKGNoaWxkcmVuRmllbGRzKTtcbiAgICB9XG5cbiAgICBfdGhpcy5ub3RpZnlPYnNlcnZlcnMocHJldlN0b3JlLCBjaGlsZHJlbkZpZWxkcywge1xuICAgICAgdHlwZTogJ2RlcGVuZGVuY2llc1VwZGF0ZScsXG4gICAgICByZWxhdGVkRmllbGRzOiBbbmFtZVBhdGhdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2hpbGRyZW5GaWVsZHMpKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuRmllbGRzO1xuICB9O1xuXG4gIHRoaXMudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgbmFtZVBhdGggPSBnZXROYW1lUGF0aChuYW1lKTtcbiAgICB2YXIgcHJldlN0b3JlID0gX3RoaXMuc3RvcmU7XG5cbiAgICBfdGhpcy51cGRhdGVTdG9yZShzZXRWYWx1ZShfdGhpcy5zdG9yZSwgbmFtZVBhdGgsIHZhbHVlKSk7XG5cbiAgICBfdGhpcy5ub3RpZnlPYnNlcnZlcnMocHJldlN0b3JlLCBbbmFtZVBhdGhdLCB7XG4gICAgICB0eXBlOiAndmFsdWVVcGRhdGUnLFxuICAgICAgc291cmNlOiAnaW50ZXJuYWwnXG4gICAgfSk7XG5cbiAgICBfdGhpcy5ub3RpZnlXYXRjaChbbmFtZVBhdGhdKTsgLy8gRGVwZW5kZW5jaWVzIHVwZGF0ZVxuXG5cbiAgICB2YXIgY2hpbGRyZW5GaWVsZHMgPSBfdGhpcy50cmlnZ2VyRGVwZW5kZW5jaWVzVXBkYXRlKHByZXZTdG9yZSwgbmFtZVBhdGgpOyAvLyB0cmlnZ2VyIGNhbGxiYWNrIGZ1bmN0aW9uXG5cblxuICAgIHZhciBvblZhbHVlc0NoYW5nZSA9IF90aGlzLmNhbGxiYWNrcy5vblZhbHVlc0NoYW5nZTtcblxuICAgIGlmIChvblZhbHVlc0NoYW5nZSkge1xuICAgICAgdmFyIGNoYW5nZWRWYWx1ZXMgPSBjbG9uZUJ5TmFtZVBhdGhMaXN0KF90aGlzLnN0b3JlLCBbbmFtZVBhdGhdKTtcbiAgICAgIG9uVmFsdWVzQ2hhbmdlKGNoYW5nZWRWYWx1ZXMsIF90aGlzLmdldEZpZWxkc1ZhbHVlKCkpO1xuICAgIH1cblxuICAgIF90aGlzLnRyaWdnZXJPbkZpZWxkc0NoYW5nZShbbmFtZVBhdGhdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2hpbGRyZW5GaWVsZHMpKSk7XG4gIH07XG5cbiAgdGhpcy5zZXRGaWVsZHNWYWx1ZSA9IGZ1bmN0aW9uIChzdG9yZSkge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgdmFyIHByZXZTdG9yZSA9IF90aGlzLnN0b3JlO1xuXG4gICAgaWYgKHN0b3JlKSB7XG4gICAgICB2YXIgbmV4dFN0b3JlID0gc2V0VmFsdWVzKF90aGlzLnN0b3JlLCBzdG9yZSk7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVN0b3JlKG5leHRTdG9yZSk7XG4gICAgfVxuXG4gICAgX3RoaXMubm90aWZ5T2JzZXJ2ZXJzKHByZXZTdG9yZSwgbnVsbCwge1xuICAgICAgdHlwZTogJ3ZhbHVlVXBkYXRlJyxcbiAgICAgIHNvdXJjZTogJ2V4dGVybmFsJ1xuICAgIH0pO1xuXG4gICAgX3RoaXMubm90aWZ5V2F0Y2goKTtcbiAgfTtcblxuICB0aGlzLnNldEZpZWxkVmFsdWUgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBfdGhpcy5zZXRGaWVsZHMoW3tcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9XSk7XG4gIH07XG5cbiAgdGhpcy5nZXREZXBlbmRlbmN5Q2hpbGRyZW5GaWVsZHMgPSBmdW5jdGlvbiAocm9vdE5hbWVQYXRoKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbmV3IFNldCgpO1xuICAgIHZhciBjaGlsZHJlbkZpZWxkcyA9IFtdO1xuICAgIHZhciBkZXBlbmRlbmNpZXMyZmllbGRzID0gbmV3IE5hbWVNYXAoKTtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBtYXBzXG4gICAgICogQ2FuIHVzZSBjYWNoZSB0byBzYXZlIHBlcmYgaWYgdXNlciByZXBvcnQgcGVyZm9ybWFuY2UgaXNzdWUgd2l0aCB0aGlzXG4gICAgICovXG5cbiAgICBfdGhpcy5nZXRGaWVsZEVudGl0aWVzKCkuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIHZhciBkZXBlbmRlbmNpZXMgPSBmaWVsZC5wcm9wcy5kZXBlbmRlbmNpZXM7XG4gICAgICAoZGVwZW5kZW5jaWVzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChkZXBlbmRlbmN5KSB7XG4gICAgICAgIHZhciBkZXBlbmRlbmN5TmFtZVBhdGggPSBnZXROYW1lUGF0aChkZXBlbmRlbmN5KTtcbiAgICAgICAgZGVwZW5kZW5jaWVzMmZpZWxkcy51cGRhdGUoZGVwZW5kZW5jeU5hbWVQYXRoLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZpZWxkcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbmV3IFNldCgpO1xuICAgICAgICAgIGZpZWxkcy5hZGQoZmllbGQpO1xuICAgICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgZmlsbENoaWxkcmVuID0gZnVuY3Rpb24gZmlsbENoaWxkcmVuKG5hbWVQYXRoKSB7XG4gICAgICB2YXIgZmllbGRzID0gZGVwZW5kZW5jaWVzMmZpZWxkcy5nZXQobmFtZVBhdGgpIHx8IG5ldyBTZXQoKTtcbiAgICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICBpZiAoIWNoaWxkcmVuLmhhcyhmaWVsZCkpIHtcbiAgICAgICAgICBjaGlsZHJlbi5hZGQoZmllbGQpO1xuICAgICAgICAgIHZhciBmaWVsZE5hbWVQYXRoID0gZmllbGQuZ2V0TmFtZVBhdGgoKTtcblxuICAgICAgICAgIGlmIChmaWVsZC5pc0ZpZWxkRGlydHkoKSAmJiBmaWVsZE5hbWVQYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY2hpbGRyZW5GaWVsZHMucHVzaChmaWVsZE5hbWVQYXRoKTtcbiAgICAgICAgICAgIGZpbGxDaGlsZHJlbihmaWVsZE5hbWVQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmaWxsQ2hpbGRyZW4ocm9vdE5hbWVQYXRoKTtcbiAgICByZXR1cm4gY2hpbGRyZW5GaWVsZHM7XG4gIH07XG5cbiAgdGhpcy50cmlnZ2VyT25GaWVsZHNDaGFuZ2UgPSBmdW5jdGlvbiAobmFtZVBhdGhMaXN0LCBmaWxlZEVycm9ycykge1xuICAgIHZhciBvbkZpZWxkc0NoYW5nZSA9IF90aGlzLmNhbGxiYWNrcy5vbkZpZWxkc0NoYW5nZTtcblxuICAgIGlmIChvbkZpZWxkc0NoYW5nZSkge1xuICAgICAgdmFyIGZpZWxkcyA9IF90aGlzLmdldEZpZWxkcygpO1xuICAgICAgLyoqXG4gICAgICAgKiBGaWxsIGVycm9ycyBzaW5jZSBgZmllbGRzYCBtYXkgYmUgcmVwbGFjZWQgYnkgY29udHJvbGxlZCBmaWVsZHNcbiAgICAgICAqL1xuXG5cbiAgICAgIGlmIChmaWxlZEVycm9ycykge1xuICAgICAgICB2YXIgY2FjaGUgPSBuZXcgTmFtZU1hcCgpO1xuICAgICAgICBmaWxlZEVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgICAgIHZhciBuYW1lID0gX3JlZjQubmFtZSxcbiAgICAgICAgICAgICAgZXJyb3JzID0gX3JlZjQuZXJyb3JzO1xuICAgICAgICAgIGNhY2hlLnNldChuYW1lLCBlcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgZmllbGQuZXJyb3JzID0gY2FjaGUuZ2V0KGZpZWxkLm5hbWUpIHx8IGZpZWxkLmVycm9ycztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGFuZ2VkRmllbGRzID0gZmllbGRzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgICAgdmFyIGZpZWxkTmFtZSA9IF9yZWY1Lm5hbWU7XG4gICAgICAgIHJldHVybiBjb250YWluc05hbWVQYXRoKG5hbWVQYXRoTGlzdCwgZmllbGROYW1lKTtcbiAgICAgIH0pO1xuICAgICAgb25GaWVsZHNDaGFuZ2UoY2hhbmdlZEZpZWxkcywgZmllbGRzKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy52YWxpZGF0ZUZpZWxkcyA9IGZ1bmN0aW9uIChuYW1lTGlzdCwgb3B0aW9ucykge1xuICAgIF90aGlzLndhcm5pbmdVbmhvb2tlZCgpO1xuXG4gICAgdmFyIHByb3ZpZGVOYW1lTGlzdCA9ICEhbmFtZUxpc3Q7XG4gICAgdmFyIG5hbWVQYXRoTGlzdCA9IHByb3ZpZGVOYW1lTGlzdCA/IG5hbWVMaXN0Lm1hcChnZXROYW1lUGF0aCkgOiBbXTsgLy8gQ29sbGVjdCByZXN1bHQgaW4gcHJvbWlzZSBsaXN0XG5cbiAgICB2YXIgcHJvbWlzZUxpc3QgPSBbXTtcblxuICAgIF90aGlzLmdldEZpZWxkRW50aXRpZXModHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIC8vIEFkZCBmaWVsZCBpZiBub3QgcHJvdmlkZSBgbmFtZUxpc3RgXG4gICAgICBpZiAoIXByb3ZpZGVOYW1lTGlzdCkge1xuICAgICAgICBuYW1lUGF0aExpc3QucHVzaChmaWVsZC5nZXROYW1lUGF0aCgpKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmVjdXJzaXZlIHZhbGlkYXRlIGlmIGNvbmZpZ3VyZWQuXG4gICAgICAgKiBUT0RPOiBwZXJmIGltcHJvdmVtZW50IEB6b21iaWVKXG4gICAgICAgKi9cblxuXG4gICAgICBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZWN1cnNpdmUpICYmIHByb3ZpZGVOYW1lTGlzdCkge1xuICAgICAgICB2YXIgbmFtZVBhdGggPSBmaWVsZC5nZXROYW1lUGF0aCgpO1xuXG4gICAgICAgIGlmICggLy8gbmFtZUxpc3RbaV0gPT09IHVuZGVmaW5lZCDor7TmmI7mmK/ku6UgbmFtZUxpc3Qg5byA5aS055qEXG4gICAgICAgIC8vIFsnbmFtZSddIC0+IFsnbmFtZScsJ2xpc3QnXVxuICAgICAgICBuYW1lUGF0aC5ldmVyeShmdW5jdGlvbiAobmFtZVVuaXQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gbmFtZUxpc3RbaV0gPT09IG5hbWVVbml0IHx8IG5hbWVMaXN0W2ldID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgbmFtZVBhdGhMaXN0LnB1c2gobmFtZVBhdGgpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFNraXAgaWYgd2l0aG91dCBydWxlXG5cblxuICAgICAgaWYgKCFmaWVsZC5wcm9wcy5ydWxlcyB8fCAhZmllbGQucHJvcHMucnVsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpZWxkTmFtZVBhdGggPSBmaWVsZC5nZXROYW1lUGF0aCgpOyAvLyBBZGQgZmllbGQgdmFsaWRhdGUgcnVsZSBpbiB0byBwcm9taXNlIGxpc3RcblxuICAgICAgaWYgKCFwcm92aWRlTmFtZUxpc3QgfHwgY29udGFpbnNOYW1lUGF0aChuYW1lUGF0aExpc3QsIGZpZWxkTmFtZVBhdGgpKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gZmllbGQudmFsaWRhdGVSdWxlcyhfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICB2YWxpZGF0ZU1lc3NhZ2VzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzKSwgX3RoaXMudmFsaWRhdGVNZXNzYWdlcylcbiAgICAgICAgfSwgb3B0aW9ucykpOyAvLyBXcmFwIHByb21pc2Ugd2l0aCBmaWVsZFxuXG4gICAgICAgIHByb21pc2VMaXN0LnB1c2gocHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZmllbGROYW1lUGF0aCxcbiAgICAgICAgICAgIGVycm9yczogW10sXG4gICAgICAgICAgICB3YXJuaW5nczogW11cbiAgICAgICAgICB9O1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAocnVsZUVycm9ycykge1xuICAgICAgICAgIHZhciBfcnVsZUVycm9ycyRmb3JFYWNoO1xuXG4gICAgICAgICAgdmFyIG1lcmdlZEVycm9ycyA9IFtdO1xuICAgICAgICAgIHZhciBtZXJnZWRXYXJuaW5ncyA9IFtdO1xuICAgICAgICAgIChfcnVsZUVycm9ycyRmb3JFYWNoID0gcnVsZUVycm9ycy5mb3JFYWNoKSA9PT0gbnVsbCB8fCBfcnVsZUVycm9ycyRmb3JFYWNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcnVsZUVycm9ycyRmb3JFYWNoLmNhbGwocnVsZUVycm9ycywgZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgICAgICAgICB2YXIgd2FybmluZ09ubHkgPSBfcmVmNi5ydWxlLndhcm5pbmdPbmx5LFxuICAgICAgICAgICAgICAgIGVycm9ycyA9IF9yZWY2LmVycm9ycztcblxuICAgICAgICAgICAgaWYgKHdhcm5pbmdPbmx5KSB7XG4gICAgICAgICAgICAgIG1lcmdlZFdhcm5pbmdzLnB1c2guYXBwbHkobWVyZ2VkV2FybmluZ3MsIF90b0NvbnN1bWFibGVBcnJheShlcnJvcnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lcmdlZEVycm9ycy5wdXNoLmFwcGx5KG1lcmdlZEVycm9ycywgX3RvQ29uc3VtYWJsZUFycmF5KGVycm9ycykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG1lcmdlZEVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgIG5hbWU6IGZpZWxkTmFtZVBhdGgsXG4gICAgICAgICAgICAgIGVycm9yczogbWVyZ2VkRXJyb3JzLFxuICAgICAgICAgICAgICB3YXJuaW5nczogbWVyZ2VkV2FybmluZ3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBmaWVsZE5hbWVQYXRoLFxuICAgICAgICAgICAgZXJyb3JzOiBtZXJnZWRFcnJvcnMsXG4gICAgICAgICAgICB3YXJuaW5nczogbWVyZ2VkV2FybmluZ3NcbiAgICAgICAgICB9O1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgc3VtbWFyeVByb21pc2UgPSBhbGxQcm9taXNlRmluaXNoKHByb21pc2VMaXN0KTtcbiAgICBfdGhpcy5sYXN0VmFsaWRhdGVQcm9taXNlID0gc3VtbWFyeVByb21pc2U7IC8vIE5vdGlmeSBmaWVsZHMgd2l0aCBydWxlIHRoYXQgdmFsaWRhdGUgaGFzIGZpbmlzaGVkIGFuZCBuZWVkIHVwZGF0ZVxuXG4gICAgc3VtbWFyeVByb21pc2UuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIHZhciByZXN1bHROYW1lUGF0aExpc3QgPSByZXN1bHRzLm1hcChmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmNy5uYW1lO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5ub3RpZnlPYnNlcnZlcnMoX3RoaXMuc3RvcmUsIHJlc3VsdE5hbWVQYXRoTGlzdCwge1xuICAgICAgICB0eXBlOiAndmFsaWRhdGVGaW5pc2gnXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMudHJpZ2dlck9uRmllbGRzQ2hhbmdlKHJlc3VsdE5hbWVQYXRoTGlzdCwgcmVzdWx0cyk7XG4gICAgfSk7XG4gICAgdmFyIHJldHVyblByb21pc2UgPSBzdW1tYXJ5UHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5sYXN0VmFsaWRhdGVQcm9taXNlID09PSBzdW1tYXJ5UHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF90aGlzLmdldEZpZWxkc1ZhbHVlKG5hbWVQYXRoTGlzdCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoW10pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICB2YXIgZXJyb3JMaXN0ID0gcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5lcnJvcnMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICB2YWx1ZXM6IF90aGlzLmdldEZpZWxkc1ZhbHVlKG5hbWVQYXRoTGlzdCksXG4gICAgICAgIGVycm9yRmllbGRzOiBlcnJvckxpc3QsXG4gICAgICAgIG91dE9mRGF0ZTogX3RoaXMubGFzdFZhbGlkYXRlUHJvbWlzZSAhPT0gc3VtbWFyeVByb21pc2VcbiAgICAgIH0pO1xuICAgIH0pOyAvLyBEbyBub3QgdGhyb3cgaW4gY29uc29sZVxuXG4gICAgcmV0dXJuUHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblByb21pc2U7XG4gIH07XG5cbiAgdGhpcy5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMud2FybmluZ1VuaG9va2VkKCk7XG5cbiAgICBfdGhpcy52YWxpZGF0ZUZpZWxkcygpLnRoZW4oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgdmFyIG9uRmluaXNoID0gX3RoaXMuY2FsbGJhY2tzLm9uRmluaXNoO1xuXG4gICAgICBpZiAob25GaW5pc2gpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvbkZpbmlzaCh2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBTaG91bGQgcHJpbnQgZXJyb3IgaWYgdXNlciBgb25GaW5pc2hgIGNhbGxiYWNrIGZhaWxlZFxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25GaW5pc2hGYWlsZWQgPSBfdGhpcy5jYWxsYmFja3Mub25GaW5pc2hGYWlsZWQ7XG5cbiAgICAgIGlmIChvbkZpbmlzaEZhaWxlZCkge1xuICAgICAgICBvbkZpbmlzaEZhaWxlZChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmZvcmNlUm9vdFVwZGF0ZSA9IGZvcmNlUm9vdFVwZGF0ZTtcbn0pO1xuXG5mdW5jdGlvbiB1c2VGb3JtKGZvcm0pIHtcbiAgdmFyIGZvcm1SZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe30pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgaWYgKCFmb3JtUmVmLmN1cnJlbnQpIHtcbiAgICBpZiAoZm9ybSkge1xuICAgICAgZm9ybVJlZi5jdXJyZW50ID0gZm9ybTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IEZvcm1TdG9yZSBpZiBub3QgcHJvdmlkZWRcbiAgICAgIHZhciBmb3JjZVJlUmVuZGVyID0gZnVuY3Rpb24gZm9yY2VSZVJlbmRlcigpIHtcbiAgICAgICAgZm9yY2VVcGRhdGUoe30pO1xuICAgICAgfTtcblxuICAgICAgdmFyIGZvcm1TdG9yZSA9IG5ldyBGb3JtU3RvcmUoZm9yY2VSZVJlbmRlcik7XG4gICAgICBmb3JtUmVmLmN1cnJlbnQgPSBmb3JtU3RvcmUuZ2V0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbZm9ybVJlZi5jdXJyZW50XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBGb3JtQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgdHJpZ2dlckZvcm1DaGFuZ2U6IGZ1bmN0aW9uIHRyaWdnZXJGb3JtQ2hhbmdlKCkge30sXG4gIHRyaWdnZXJGb3JtRmluaXNoOiBmdW5jdGlvbiB0cmlnZ2VyRm9ybUZpbmlzaCgpIHt9LFxuICByZWdpc3RlckZvcm06IGZ1bmN0aW9uIHJlZ2lzdGVyRm9ybSgpIHt9LFxuICB1bnJlZ2lzdGVyRm9ybTogZnVuY3Rpb24gdW5yZWdpc3RlckZvcm0oKSB7fVxufSk7XG5cbnZhciBGb3JtUHJvdmlkZXIgPSBmdW5jdGlvbiBGb3JtUHJvdmlkZXIoX3JlZikge1xuICB2YXIgdmFsaWRhdGVNZXNzYWdlcyA9IF9yZWYudmFsaWRhdGVNZXNzYWdlcyxcbiAgICAgIG9uRm9ybUNoYW5nZSA9IF9yZWYub25Gb3JtQ2hhbmdlLFxuICAgICAgb25Gb3JtRmluaXNoID0gX3JlZi5vbkZvcm1GaW5pc2gsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBmb3JtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xuICB2YXIgZm9ybXNSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBmb3JtQ29udGV4dCksIHt9LCB7XG4gICAgICB2YWxpZGF0ZU1lc3NhZ2VzOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGZvcm1Db250ZXh0LnZhbGlkYXRlTWVzc2FnZXMpLCB2YWxpZGF0ZU1lc3NhZ2VzKSxcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgLy8gPSAgICAgICAgICAgICAgICAgIEdsb2JhbCBGb3JtIENvbnRyb2wgICAgICAgICAgICAgICAgICA9XG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIHRyaWdnZXJGb3JtQ2hhbmdlOiBmdW5jdGlvbiB0cmlnZ2VyRm9ybUNoYW5nZShuYW1lLCBjaGFuZ2VkRmllbGRzKSB7XG4gICAgICAgIGlmIChvbkZvcm1DaGFuZ2UpIHtcbiAgICAgICAgICBvbkZvcm1DaGFuZ2UobmFtZSwge1xuICAgICAgICAgICAgY2hhbmdlZEZpZWxkczogY2hhbmdlZEZpZWxkcyxcbiAgICAgICAgICAgIGZvcm1zOiBmb3Jtc1JlZi5jdXJyZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtQ29udGV4dC50cmlnZ2VyRm9ybUNoYW5nZShuYW1lLCBjaGFuZ2VkRmllbGRzKTtcbiAgICAgIH0sXG4gICAgICB0cmlnZ2VyRm9ybUZpbmlzaDogZnVuY3Rpb24gdHJpZ2dlckZvcm1GaW5pc2gobmFtZSwgdmFsdWVzKSB7XG4gICAgICAgIGlmIChvbkZvcm1GaW5pc2gpIHtcbiAgICAgICAgICBvbkZvcm1GaW5pc2gobmFtZSwge1xuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgICBmb3JtczogZm9ybXNSZWYuY3VycmVudFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybUNvbnRleHQudHJpZ2dlckZvcm1GaW5pc2gobmFtZSwgdmFsdWVzKTtcbiAgICAgIH0sXG4gICAgICByZWdpc3RlckZvcm06IGZ1bmN0aW9uIHJlZ2lzdGVyRm9ybShuYW1lLCBmb3JtKSB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgZm9ybXNSZWYuY3VycmVudCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZm9ybXNSZWYuY3VycmVudCksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIG5hbWUsIGZvcm0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1Db250ZXh0LnJlZ2lzdGVyRm9ybShuYW1lLCBmb3JtKTtcbiAgICAgIH0sXG4gICAgICB1bnJlZ2lzdGVyRm9ybTogZnVuY3Rpb24gdW5yZWdpc3RlckZvcm0obmFtZSkge1xuICAgICAgICB2YXIgbmV3Rm9ybXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBmb3Jtc1JlZi5jdXJyZW50KTtcblxuICAgICAgICBkZWxldGUgbmV3Rm9ybXNbbmFtZV07XG4gICAgICAgIGZvcm1zUmVmLmN1cnJlbnQgPSBuZXdGb3JtcztcbiAgICAgICAgZm9ybUNvbnRleHQudW5yZWdpc3RlckZvcm0obmFtZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IHsgRm9ybVByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udGV4dDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wibmFtZVwiLCBcImluaXRpYWxWYWx1ZXNcIiwgXCJmaWVsZHNcIiwgXCJmb3JtXCIsIFwicHJlc2VydmVcIiwgXCJjaGlsZHJlblwiLCBcImNvbXBvbmVudFwiLCBcInZhbGlkYXRlTWVzc2FnZXNcIiwgXCJ2YWxpZGF0ZVRyaWdnZXJcIiwgXCJvblZhbHVlc0NoYW5nZVwiLCBcIm9uRmllbGRzQ2hhbmdlXCIsIFwib25GaW5pc2hcIiwgXCJvbkZpbmlzaEZhaWxlZFwiXTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4vdXNlRm9ybSc7XG5pbXBvcnQgRmllbGRDb250ZXh0LCB7IEhPT0tfTUFSSyB9IGZyb20gJy4vRmllbGRDb250ZXh0JztcbmltcG9ydCBGb3JtQ29udGV4dCBmcm9tICcuL0Zvcm1Db250ZXh0JztcbmltcG9ydCB7IGlzU2ltaWxhciB9IGZyb20gJy4vdXRpbHMvdmFsdWVVdGlsJztcblxudmFyIEZvcm0gPSBmdW5jdGlvbiBGb3JtKF9yZWYsIHJlZikge1xuICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIGluaXRpYWxWYWx1ZXMgPSBfcmVmLmluaXRpYWxWYWx1ZXMsXG4gICAgICBmaWVsZHMgPSBfcmVmLmZpZWxkcyxcbiAgICAgIGZvcm0gPSBfcmVmLmZvcm0sXG4gICAgICBwcmVzZXJ2ZSA9IF9yZWYucHJlc2VydmUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBfcmVmJGNvbXBvbmVudCA9IF9yZWYuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdmb3JtJyA6IF9yZWYkY29tcG9uZW50LFxuICAgICAgdmFsaWRhdGVNZXNzYWdlcyA9IF9yZWYudmFsaWRhdGVNZXNzYWdlcyxcbiAgICAgIF9yZWYkdmFsaWRhdGVUcmlnZ2VyID0gX3JlZi52YWxpZGF0ZVRyaWdnZXIsXG4gICAgICB2YWxpZGF0ZVRyaWdnZXIgPSBfcmVmJHZhbGlkYXRlVHJpZ2dlciA9PT0gdm9pZCAwID8gJ29uQ2hhbmdlJyA6IF9yZWYkdmFsaWRhdGVUcmlnZ2VyLFxuICAgICAgb25WYWx1ZXNDaGFuZ2UgPSBfcmVmLm9uVmFsdWVzQ2hhbmdlLFxuICAgICAgX29uRmllbGRzQ2hhbmdlID0gX3JlZi5vbkZpZWxkc0NoYW5nZSxcbiAgICAgIF9vbkZpbmlzaCA9IF9yZWYub25GaW5pc2gsXG4gICAgICBvbkZpbmlzaEZhaWxlZCA9IF9yZWYub25GaW5pc2hGYWlsZWQsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICB2YXIgZm9ybUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEZvcm1Db250ZXh0KTsgLy8gV2UgY3VzdG9taXplIGhhbmRsZSBldmVudCBzaW5jZSBDb250ZXh0IHdpbGwgbWFrZXMgYWxsIHRoZSBjb25zdW1lciByZS1yZW5kZXI6XG4gIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9jb250ZXh0Lmh0bWwjY29udGV4dHByb3ZpZGVyXG5cbiAgdmFyIF91c2VGb3JtID0gdXNlRm9ybShmb3JtKSxcbiAgICAgIF91c2VGb3JtMiA9IF9zbGljZWRUb0FycmF5KF91c2VGb3JtLCAxKSxcbiAgICAgIGZvcm1JbnN0YW5jZSA9IF91c2VGb3JtMlswXTtcblxuICB2YXIgX2Zvcm1JbnN0YW5jZSRnZXRJbnRlID0gZm9ybUluc3RhbmNlLmdldEludGVybmFsSG9va3MoSE9PS19NQVJLKSxcbiAgICAgIHVzZVN1YnNjcmliZSA9IF9mb3JtSW5zdGFuY2UkZ2V0SW50ZS51c2VTdWJzY3JpYmUsXG4gICAgICBzZXRJbml0aWFsVmFsdWVzID0gX2Zvcm1JbnN0YW5jZSRnZXRJbnRlLnNldEluaXRpYWxWYWx1ZXMsXG4gICAgICBzZXRDYWxsYmFja3MgPSBfZm9ybUluc3RhbmNlJGdldEludGUuc2V0Q2FsbGJhY2tzLFxuICAgICAgc2V0VmFsaWRhdGVNZXNzYWdlcyA9IF9mb3JtSW5zdGFuY2UkZ2V0SW50ZS5zZXRWYWxpZGF0ZU1lc3NhZ2VzLFxuICAgICAgc2V0UHJlc2VydmUgPSBfZm9ybUluc3RhbmNlJGdldEludGUuc2V0UHJlc2VydmUsXG4gICAgICBkZXN0cm95Rm9ybSA9IF9mb3JtSW5zdGFuY2UkZ2V0SW50ZS5kZXN0cm95Rm9ybTsgLy8gUGFzcyByZWYgd2l0aCBmb3JtIGluc3RhbmNlXG5cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmb3JtSW5zdGFuY2U7XG4gIH0pOyAvLyBSZWdpc3RlciBmb3JtIGludG8gQ29udGV4dFxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZm9ybUNvbnRleHQucmVnaXN0ZXJGb3JtKG5hbWUsIGZvcm1JbnN0YW5jZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvcm1Db250ZXh0LnVucmVnaXN0ZXJGb3JtKG5hbWUpO1xuICAgIH07XG4gIH0sIFtmb3JtQ29udGV4dCwgZm9ybUluc3RhbmNlLCBuYW1lXSk7IC8vIFBhc3MgcHJvcHMgdG8gc3RvcmVcblxuICBzZXRWYWxpZGF0ZU1lc3NhZ2VzKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZm9ybUNvbnRleHQudmFsaWRhdGVNZXNzYWdlcyksIHZhbGlkYXRlTWVzc2FnZXMpKTtcbiAgc2V0Q2FsbGJhY2tzKHtcbiAgICBvblZhbHVlc0NoYW5nZTogb25WYWx1ZXNDaGFuZ2UsXG4gICAgb25GaWVsZHNDaGFuZ2U6IGZ1bmN0aW9uIG9uRmllbGRzQ2hhbmdlKGNoYW5nZWRGaWVsZHMpIHtcbiAgICAgIGZvcm1Db250ZXh0LnRyaWdnZXJGb3JtQ2hhbmdlKG5hbWUsIGNoYW5nZWRGaWVsZHMpO1xuXG4gICAgICBpZiAoX29uRmllbGRzQ2hhbmdlKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9vbkZpZWxkc0NoYW5nZS5hcHBseSh2b2lkIDAsIFtjaGFuZ2VkRmllbGRzXS5jb25jYXQocmVzdCkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25GaW5pc2g6IGZ1bmN0aW9uIG9uRmluaXNoKHZhbHVlcykge1xuICAgICAgZm9ybUNvbnRleHQudHJpZ2dlckZvcm1GaW5pc2gobmFtZSwgdmFsdWVzKTtcblxuICAgICAgaWYgKF9vbkZpbmlzaCkge1xuICAgICAgICBfb25GaW5pc2godmFsdWVzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRmluaXNoRmFpbGVkOiBvbkZpbmlzaEZhaWxlZFxuICB9KTtcbiAgc2V0UHJlc2VydmUocHJlc2VydmUpOyAvLyBTZXQgaW5pdGlhbCB2YWx1ZSwgaW5pdCBzdG9yZSB2YWx1ZSB3aGVuIGZpcnN0IG1vdW50XG5cbiAgdmFyIG1vdW50UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBzZXRJbml0aWFsVmFsdWVzKGluaXRpYWxWYWx1ZXMsICFtb3VudFJlZi5jdXJyZW50KTtcblxuICBpZiAoIW1vdW50UmVmLmN1cnJlbnQpIHtcbiAgICBtb3VudFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3lGb3JtO1xuICB9LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtdKTsgLy8gUHJlcGFyZSBjaGlsZHJlbiBieSBgY2hpbGRyZW5gIHR5cGVcblxuICB2YXIgY2hpbGRyZW5Ob2RlO1xuICB2YXIgY2hpbGRyZW5SZW5kZXJQcm9wcyA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJztcblxuICBpZiAoY2hpbGRyZW5SZW5kZXJQcm9wcykge1xuICAgIHZhciB2YWx1ZXMgPSBmb3JtSW5zdGFuY2UuZ2V0RmllbGRzVmFsdWUodHJ1ZSk7XG4gICAgY2hpbGRyZW5Ob2RlID0gY2hpbGRyZW4odmFsdWVzLCBmb3JtSW5zdGFuY2UpO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkcmVuTm9kZSA9IGNoaWxkcmVuO1xuICB9IC8vIE5vdCB1c2Ugc3Vic2NyaWJlIHdoZW4gdXNpbmcgcmVuZGVyIHByb3BzXG5cblxuICB1c2VTdWJzY3JpYmUoIWNoaWxkcmVuUmVuZGVyUHJvcHMpOyAvLyBMaXN0ZW4gaWYgZmllbGRzIHByb3ZpZGVkLiBXZSB1c2UgcmVmIHRvIHNhdmUgcHJldiBkYXRhIGhlcmUgdG8gYXZvaWQgYWRkaXRpb25hbCByZW5kZXJcblxuICB2YXIgcHJldkZpZWxkc1JlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNTaW1pbGFyKHByZXZGaWVsZHNSZWYuY3VycmVudCB8fCBbXSwgZmllbGRzIHx8IFtdKSkge1xuICAgICAgZm9ybUluc3RhbmNlLnNldEZpZWxkcyhmaWVsZHMgfHwgW10pO1xuICAgIH1cblxuICAgIHByZXZGaWVsZHNSZWYuY3VycmVudCA9IGZpZWxkcztcbiAgfSwgW2ZpZWxkcywgZm9ybUluc3RhbmNlXSk7XG4gIHZhciBmb3JtQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZm9ybUluc3RhbmNlKSwge30sIHtcbiAgICAgIHZhbGlkYXRlVHJpZ2dlcjogdmFsaWRhdGVUcmlnZ2VyXG4gICAgfSk7XG4gIH0sIFtmb3JtSW5zdGFuY2UsIHZhbGlkYXRlVHJpZ2dlcl0pO1xuICB2YXIgd3JhcHBlck5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGaWVsZENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZm9ybUNvbnRleHRWYWx1ZVxuICB9LCBjaGlsZHJlbk5vZGUpO1xuXG4gIGlmIChDb21wb25lbnQgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHdyYXBwZXJOb2RlO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHJlc3RQcm9wcywge1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZm9ybUluc3RhbmNlLnN1Ym1pdCgpO1xuICAgIH0sXG4gICAgb25SZXNldDogZnVuY3Rpb24gb25SZXNldChldmVudCkge1xuICAgICAgdmFyIF9yZXN0UHJvcHMkb25SZXNldDtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGZvcm1JbnN0YW5jZS5yZXNldEZpZWxkcygpO1xuICAgICAgKF9yZXN0UHJvcHMkb25SZXNldCA9IHJlc3RQcm9wcy5vblJlc2V0KSA9PT0gbnVsbCB8fCBfcmVzdFByb3BzJG9uUmVzZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXN0UHJvcHMkb25SZXNldC5jYWxsKHJlc3RQcm9wcywgZXZlbnQpO1xuICAgIH1cbiAgfSksIHdyYXBwZXJOb2RlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyBGaWVsZENvbnRleHQgfSBmcm9tICcuJztcbmltcG9ydCB3YXJuaW5nIGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCB7IEhPT0tfTUFSSyB9IGZyb20gJy4vRmllbGRDb250ZXh0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldE5hbWVQYXRoLCBnZXRWYWx1ZSB9IGZyb20gJy4vdXRpbHMvdmFsdWVVdGlsJztcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VXYXRjaCgpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciBmb3JtID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHZhbHVlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgdmFsdWVTdHIgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5KHZhbHVlKTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHZhciB2YWx1ZVN0clJlZiA9IHVzZVJlZih2YWx1ZVN0cik7XG4gIHZhbHVlU3RyUmVmLmN1cnJlbnQgPSB2YWx1ZVN0cjtcbiAgdmFyIGZpZWxkQ29udGV4dCA9IHVzZUNvbnRleHQoRmllbGRDb250ZXh0KTtcbiAgdmFyIGZvcm1JbnN0YW5jZSA9IGZvcm0gfHwgZmllbGRDb250ZXh0O1xuICB2YXIgaXNWYWxpZEZvcm0gPSBmb3JtSW5zdGFuY2UgJiYgZm9ybUluc3RhbmNlLl9pbml0OyAvLyBXYXJuaW5nIGlmIG5vdCBleGlzdCBmb3JtIGluc3RhbmNlXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuaW5nKGlzVmFsaWRGb3JtLCAndXNlV2F0Y2ggcmVxdWlyZXMgYSBmb3JtIGluc3RhbmNlIHNpbmNlIGl0IGNhbiBub3QgYXV0byBkZXRlY3QgZnJvbSBjb250ZXh0LicpO1xuICB9XG5cbiAgdmFyIG5hbWVQYXRoID0gZ2V0TmFtZVBhdGgoZGVwZW5kZW5jaWVzKTtcbiAgdmFyIG5hbWVQYXRoUmVmID0gdXNlUmVmKG5hbWVQYXRoKTtcbiAgbmFtZVBhdGhSZWYuY3VycmVudCA9IG5hbWVQYXRoO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIFNraXAgaWYgbm90IGV4aXN0IGZvcm0gaW5zdGFuY2VcbiAgICBpZiAoIWlzVmFsaWRGb3JtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGdldEZpZWxkc1ZhbHVlID0gZm9ybUluc3RhbmNlLmdldEZpZWxkc1ZhbHVlLFxuICAgICAgICBnZXRJbnRlcm5hbEhvb2tzID0gZm9ybUluc3RhbmNlLmdldEludGVybmFsSG9va3M7XG5cbiAgICB2YXIgX2dldEludGVybmFsSG9va3MgPSBnZXRJbnRlcm5hbEhvb2tzKEhPT0tfTUFSSyksXG4gICAgICAgIHJlZ2lzdGVyV2F0Y2ggPSBfZ2V0SW50ZXJuYWxIb29rcy5yZWdpc3RlcldhdGNoO1xuXG4gICAgdmFyIGNhbmNlbFJlZ2lzdGVyID0gcmVnaXN0ZXJXYXRjaChmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGdldFZhbHVlKHN0b3JlLCBuYW1lUGF0aFJlZi5jdXJyZW50KTtcbiAgICAgIHZhciBuZXh0VmFsdWVTdHIgPSBzdHJpbmdpZnkobmV3VmFsdWUpOyAvLyBDb21wYXJlIHN0cmluZ2lmeSBpbiBjYXNlIGl0J3MgbmVzdCBvYmplY3RcblxuICAgICAgaWYgKHZhbHVlU3RyUmVmLmN1cnJlbnQgIT09IG5leHRWYWx1ZVN0cikge1xuICAgICAgICB2YWx1ZVN0clJlZi5jdXJyZW50ID0gbmV4dFZhbHVlU3RyO1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIFRPRE86IFdlIGNhbiBpbXByb3ZlIHRoaXMgcGVyZiBpbiBmdXR1cmVcblxuICAgIHZhciBpbml0aWFsVmFsdWUgPSBnZXRWYWx1ZShnZXRGaWVsZHNWYWx1ZSgpLCBuYW1lUGF0aFJlZi5jdXJyZW50KTtcbiAgICBzZXRWYWx1ZShpbml0aWFsVmFsdWUpO1xuICAgIHJldHVybiBjYW5jZWxSZWdpc3RlcjtcbiAgfSwgLy8gV2UgZG8gbm90IG5lZWQgcmUtcmVnaXN0ZXIgc2luY2UgbmFtZVBhdGggY29udGVudCBpcyB0aGUgc2FtZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIFtdKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VXYXRjaDsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi91c2VGb3JtJztcbmltcG9ydCBGaWVsZEZvcm0gZnJvbSAnLi9Gb3JtJztcbmltcG9ydCB7IEZvcm1Qcm92aWRlciB9IGZyb20gJy4vRm9ybUNvbnRleHQnO1xuaW1wb3J0IEZpZWxkQ29udGV4dCBmcm9tICcuL0ZpZWxkQ29udGV4dCc7XG5pbXBvcnQgTGlzdENvbnRleHQgZnJvbSAnLi9MaXN0Q29udGV4dCc7XG5pbXBvcnQgdXNlV2F0Y2ggZnJvbSAnLi91c2VXYXRjaCc7XG52YXIgSW50ZXJuYWxGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoRmllbGRGb3JtKTtcbnZhciBSZWZGb3JtID0gSW50ZXJuYWxGb3JtO1xuUmVmRm9ybS5Gb3JtUHJvdmlkZXIgPSBGb3JtUHJvdmlkZXI7XG5SZWZGb3JtLkZpZWxkID0gRmllbGQ7XG5SZWZGb3JtLkxpc3QgPSBMaXN0O1xuUmVmRm9ybS51c2VGb3JtID0gdXNlRm9ybTtcblJlZkZvcm0udXNlV2F0Y2ggPSB1c2VXYXRjaDtcbmV4cG9ydCB7IEZpZWxkLCBMaXN0LCB1c2VGb3JtLCBGb3JtUHJvdmlkZXIsIEZpZWxkQ29udGV4dCwgTGlzdENvbnRleHQsIHVzZVdhdGNoIH07XG5leHBvcnQgZGVmYXVsdCBSZWZGb3JtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///24407
`)},62906:function(__unused_webpack_module,__webpack_exports__){"use strict";eval(`/* harmony default export */ __webpack_exports__["Z"] = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
});//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjI5MDYuanMiLCJtYXBwaW5ncyI6IkFBQUEseURBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9lcy9sb2NhbGUvZW5fVVMuanM/NzIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIE9wdGlvbnMuanN4XG4gIGl0ZW1zX3Blcl9wYWdlOiAnLyBwYWdlJyxcbiAganVtcF90bzogJ0dvIHRvJyxcbiAganVtcF90b19jb25maXJtOiAnY29uZmlybScsXG4gIHBhZ2U6ICdQYWdlJyxcbiAgLy8gUGFnaW5hdGlvbi5qc3hcbiAgcHJldl9wYWdlOiAnUHJldmlvdXMgUGFnZScsXG4gIG5leHRfcGFnZTogJ05leHQgUGFnZScsXG4gIHByZXZfNTogJ1ByZXZpb3VzIDUgUGFnZXMnLFxuICBuZXh0XzU6ICdOZXh0IDUgUGFnZXMnLFxuICBwcmV2XzM6ICdQcmV2aW91cyAzIFBhZ2VzJyxcbiAgbmV4dF8zOiAnTmV4dCAzIFBhZ2VzJyxcbiAgcGFnZV9zaXplOiAnUGFnZSBTaXplJ1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///62906
`)},88306:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ get; }
/* harmony export */ });
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[path[i]];
  }
  return current;
}//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgzMDYuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWU7QUFDZjtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VibGlmL2Zhc3QtdWkvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy91dGlscy9nZXQuanM/YzhlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXQoZW50aXR5LCBwYXRoKSB7XG4gIHZhciBjdXJyZW50ID0gZW50aXR5O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhbaV1dO1xuICB9XG4gIHJldHVybiBjdXJyZW50O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///88306
`)}}]);
