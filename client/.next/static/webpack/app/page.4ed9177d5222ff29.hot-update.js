"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/Table/page.js":
/*!*****************************************!*\
  !*** ./src/app/component/Table/page.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_es_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/space */ \"(app-pages-browser)/./node_modules/antd/es/space/index.js\");\n/* harmony import */ var antd_es_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/table */ \"(app-pages-browser)/./node_modules/antd/es/table/index.js\");\n\n\n\n\n\nconst columns = [\n    {\n        title: \"Post Name:\",\n        dataIndex: \"postName\",\n        key: \"postName\",\n        render: (text)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\component\\\\Table\\\\page.js\",\n                lineNumber: 11,\n                columnNumber: 23\n            }, undefined)\n    },\n    {\n        title: \"Required Qualification:\",\n        dataIndex: \"requiredQualification\",\n        key: \"requiredQualification\"\n    },\n    {\n        title: \"Level:\",\n        dataIndex: \"level\",\n        key: \"level\"\n    },\n    {\n        title: \"service:\",\n        key: \"service\",\n        dataIndex: \"service\"\n    },\n    {\n        title: \"vacancy Publish date:\",\n        key: \"minPublishDate\",\n        dataIndex: \"minPublishDate\"\n    },\n    {\n        title: \"Exam Single Fee:\",\n        key: \"examFeeSingle\",\n        dataIndex: \"examFeeSingle\"\n    },\n    {\n        title: \"Singly Payment date:\",\n        key: \"sinPublishDate\",\n        dataIndex: \"sinPublishDate\"\n    },\n    {\n        title: \"Exam Double Fee:\",\n        key: \"examFeeDouble\",\n        dataIndex: \"examFeeDouble\"\n    },\n    {\n        title: \"Double Payment date:\",\n        key: \"douPublishDate\",\n        dataIndex: \"douPublishDate\"\n    },\n    {\n        title: \"Apply Link:\",\n        key: \"apply\",\n        render: (_, record)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_space__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                size: \"middle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: [\n                        \"Apply \",\n                        record.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\component\\\\Table\\\\page.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\component\\\\Table\\\\page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n    }\n];\nconst App = (props)=>{\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        columns: columns,\n        dataSource: props.data\n    }, void 0, false, {\n        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\component\\\\Table\\\\page.js\",\n        lineNumber: 68,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/vacancies/\".concat(props.item.id)\n    }, void 0, false, {\n        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\component\\\\Table\\\\page.js\",\n        lineNumber: 70,\n        columnNumber: 3\n    }, undefined);\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L1RhYmxlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDTztBQUFBO0FBR3BDLE1BQU1JLFVBQVU7SUFDZDtRQUNFQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsS0FBSztRQUNMQyxRQUFRLENBQUNDLHFCQUFTLDhEQUFDQzswQkFBR0Q7Ozs7OztJQUN4QjtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsV0FBVztRQUNYQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsS0FBSztJQUNQO0lBQ0E7UUFDRUYsT0FBTztRQUNQRSxLQUFLO1FBQ0xELFdBQVc7SUFDYjtJQUNBO1FBQ0VELE9BQU87UUFDUEUsS0FBSztRQUNMRCxXQUFXO0lBQ2I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BFLEtBQUs7UUFDTEQsV0FBVztJQUNiO0lBQ0E7UUFDRUQsT0FBTztRQUNQRSxLQUFLO1FBQ0xELFdBQVc7SUFDYjtJQUNBO1FBQ0VELE9BQU87UUFDUEUsS0FBSztRQUNMRCxXQUFXO0lBQ2I7SUFFQTtRQUNFRCxPQUFPO1FBQ1BFLEtBQUs7UUFDTEQsV0FBVztJQUNiO0lBR0E7UUFDRUQsT0FBTztRQUNQRSxLQUFLO1FBQ0xDLFFBQVEsQ0FBQ0csR0FBR0MsdUJBQ1YsOERBQUNWLHFEQUFLQTtnQkFBQ1csTUFBSzswQkFDViw0RUFBQ0g7O3dCQUFFO3dCQUFPRSxPQUFPRSxJQUFJOzs7Ozs7Ozs7Ozs7SUFJM0I7Q0FDRDtBQUVELE1BQU1DLE1BQU0sQ0FBQ0M7a0JBQVcsOERBQUNiLHFEQUFLQTtRQUFDQyxTQUFTQTtRQUFTYSxZQUFZRCxNQUFNRSxJQUFJOzs7Ozs7SUFDdkUscUJBQ0UsOERBQUNqQixrREFBSUE7UUFBQ2tCLE1BQU0sY0FBNEIsT0FBZEgsTUFBTUksSUFBSSxDQUFDQyxFQUFFOzs7Ozs7QUFFekM7S0FKTU47QUFLTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9UYWJsZS9wYWdlLmpzPzY3NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgU3BhY2UsIFRhYmxlLH0gZnJvbSAnYW50ZCc7XHJcblxyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ1Bvc3QgTmFtZTonLFxyXG4gICAgZGF0YUluZGV4OiAncG9zdE5hbWUnLFxyXG4gICAga2V5OiAncG9zdE5hbWUnLFxyXG4gICAgcmVuZGVyOiAodGV4dCkgPT4gPGE+e3RleHR9PC9hPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUmVxdWlyZWQgUXVhbGlmaWNhdGlvbjonLFxyXG4gICAgZGF0YUluZGV4OiAncmVxdWlyZWRRdWFsaWZpY2F0aW9uJyxcclxuICAgIGtleTogJ3JlcXVpcmVkUXVhbGlmaWNhdGlvbicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xldmVsOicsXHJcbiAgICBkYXRhSW5kZXg6ICdsZXZlbCcsXHJcbiAgICBrZXk6ICdsZXZlbCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ3NlcnZpY2U6JyxcclxuICAgIGtleTogJ3NlcnZpY2UnLFxyXG4gICAgZGF0YUluZGV4OiAnc2VydmljZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ3ZhY2FuY3kgUHVibGlzaCBkYXRlOicsXHJcbiAgICBrZXk6ICdtaW5QdWJsaXNoRGF0ZScsXHJcbiAgICBkYXRhSW5kZXg6ICdtaW5QdWJsaXNoRGF0ZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0V4YW0gU2luZ2xlIEZlZTonLFxyXG4gICAga2V5OiAnZXhhbUZlZVNpbmdsZScsXHJcbiAgICBkYXRhSW5kZXg6ICdleGFtRmVlU2luZ2xlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU2luZ2x5IFBheW1lbnQgZGF0ZTonLFxyXG4gICAga2V5OiAnc2luUHVibGlzaERhdGUnLFxyXG4gICAgZGF0YUluZGV4OiAnc2luUHVibGlzaERhdGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFeGFtIERvdWJsZSBGZWU6JyxcclxuICAgIGtleTogJ2V4YW1GZWVEb3VibGUnLFxyXG4gICAgZGF0YUluZGV4OiAnZXhhbUZlZURvdWJsZScsXHJcbiAgfSxcclxuICAgXHJcbiAge1xyXG4gICAgdGl0bGU6ICdEb3VibGUgUGF5bWVudCBkYXRlOicsXHJcbiAgICBrZXk6ICdkb3VQdWJsaXNoRGF0ZScsXHJcbiAgICBkYXRhSW5kZXg6ICdkb3VQdWJsaXNoRGF0ZScsXHJcbiAgfSxcclxuICBcclxuICAgIFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQXBwbHkgTGluazonLFxyXG4gICAga2V5OiAnYXBwbHknLFxyXG4gICAgcmVuZGVyOiAoXywgcmVjb3JkKSA9PiAoXHJcbiAgICAgIDxTcGFjZSBzaXplPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPGE+QXBwbHkge3JlY29yZC5uYW1lfTwvYT5cclxuICAgICAgIFxyXG4gICAgICA8L1NwYWNlPlxyXG4gICAgKSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7PFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e3Byb3BzLmRhdGF9IC8+O1xyXG5yZXR1cm4gKFxyXG4gIDxMaW5rIGhyZWY9e2AvdmFjYW5jaWVzLyR7cHJvcHMuaXRlbS5pZH1gfT48L0xpbms+XHJcbilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlNwYWNlIiwiVGFibGUiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwiYSIsIl8iLCJyZWNvcmQiLCJzaXplIiwibmFtZSIsIkFwcCIsInByb3BzIiwiZGF0YVNvdXJjZSIsImRhdGEiLCJocmVmIiwiaXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Table/page.js\n"));

/***/ })

});