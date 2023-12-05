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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_component_Table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/component/Table/page */ \"(app-pages-browser)/./src/app/component/Table/page.js\");\n/* harmony import */ var _component_NavBar_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/NavBar/page */ \"(app-pages-browser)/./src/app/component/NavBar/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [vacancyList, setVacancyList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const fetchVacancies = async ()=>{\n        const res = await fetch(\"http://localhost:4000/vacancies\");\n        const data = await res.json();\n        setVacancyList(data.vacancyList);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchVacancies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_NavBar_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: NavItem\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0\",\n                            href: \"#\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: [\n                                \"By Prashann Raj\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"\",\n                                    alt: \"\",\n                                    className: \"dark:invert\",\n                                    width: 100,\n                                    height: 24,\n                                    priority: true\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert\",\n                    src: \"/logo.png\",\n                    alt: \"Apply Online\",\n                    width: 180,\n                    height: 37,\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"The Following vacancies has been published .\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_component_Table_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        data: vacancyList\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hr7Ql0oozk56v/0Y+CPm9SPSzck=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ21CO0FBRUY7QUFDRjtBQUk5QixTQUFTTTs7SUFFdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTU8saUJBQWlCO1FBQ3JCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtRQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7UUFDM0JMLGVBQWVJLEtBQUtMLFdBQVc7SUFDakM7SUFHQUosZ0RBQVNBLENBQUM7UUFDVk07SUFDQSxHQUFFLEVBQUU7SUFHSixxQkFDRSw4REFBQ0s7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ1YsOERBQU1BO3dCQUFDTyxNQUFNSzs7Ozs7O2tDQUNaLDhEQUFDRDt3QkFBSUQsV0FBVTtrQ0FDZiw0RUFBQ0c7NEJBQ0NILFdBQVU7NEJBQ1ZJLE1BQUs7NEJBQ0xDLFFBQU87NEJBQ1BDLEtBQUk7O2dDQUNMO2dDQUNpQjs4Q0FDaEIsOERBQUNyQixtREFBS0E7b0NBQ0pzQixLQUFJO29DQUNKQyxLQUFJO29DQUNKUixXQUFVO29DQUNWUyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNaEIsOERBQUNWO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDZixtREFBS0E7b0JBQ0plLFdBQVU7b0JBQ1ZPLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLFFBQVE7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDVjs7a0NBQ0MsOERBQUNXO2tDQUFHOzs7Ozs7a0NBQ1IsOERBQUNDOzs7OztrQ0FFRCw4REFBQ3hCLGlFQUFLQTt3QkFBQ1EsTUFBTUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtHQTNEd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9hcHAvY29tcG9uZW50L1RhYmxlL3BhZ2VcIlxyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50L05hdkJhci9wYWdlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBcclxuICBjb25zdCBbdmFjYW5jeUxpc3QsIHNldFZhY2FuY3lMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IGZldGNoVmFjYW5jaWVzID0gYXN5bmMoKT0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvdmFjYW5jaWVzJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBzZXRWYWNhbmN5TGlzdChkYXRhLnZhY2FuY3lMaXN0KVxyXG4gIH1cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gIGZldGNoVmFjYW5jaWVzKClcclxuICB9LFtdKVxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBtYXgtdy01eGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleFwiPlxyXG4gICAgICAgIDxOYXZCYXIgZGF0YT17TmF2SXRlbX0vPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBsZWZ0LTAgZmxleCBoLTQ4IHctZnVsbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHZpYS13aGl0ZSBkYXJrOmZyb20tYmxhY2sgZGFyazp2aWEtYmxhY2sgbGc6c3RhdGljIGxnOmgtYXV0byBsZzp3LWF1dG8gbGc6Ymctbm9uZVwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlciBnYXAtMiBwLTggbGc6cG9pbnRlci1ldmVudHMtYXV0byBsZzpwLTBcIlxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCeSBQcmFzaGFubiBSYWp7JyAnfVxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCJcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFyazppbnZlcnRcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF0gei1bLTFdXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBkYXJrOmRyb3Atc2hhZG93LVswXzBfMC4zcmVtXyNmZmZmZmY3MF0gZGFyazppbnZlcnRcIlxyXG4gICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkFwcGx5IE9ubGluZVwiXHJcbiAgICAgICAgICB3aWR0aD17MTgwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszN31cclxuICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlRoZSBGb2xsb3dpbmcgdmFjYW5jaWVzIGhhcyBiZWVuIHB1Ymxpc2hlZCAuPC9oMT5cclxuICAgIDxicj48L2JyPlxyXG4gICAgXHJcbiAgICA8VGFibGUgZGF0YT17dmFjYW5jeUxpc3R9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICBcclxuICAgIDwvbWFpbj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGFibGUiLCJOYXZCYXIiLCJIb21lIiwidmFjYW5jeUxpc3QiLCJzZXRWYWNhbmN5TGlzdCIsImZldGNoVmFjYW5jaWVzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJOYXZJdGVtIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwiaDEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});