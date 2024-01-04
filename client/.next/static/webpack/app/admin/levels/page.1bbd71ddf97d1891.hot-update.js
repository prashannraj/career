"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/levels/page",{

/***/ "(app-pages-browser)/./src/app/admin/levels/page.js":
/*!**************************************!*\
  !*** ./src/app/admin/levels/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"(app-pages-browser)/./node_modules/yup/index.esm.js\");\n/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/message */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/modal */ \"(app-pages-browser)/./node_modules/antd/es/modal/index.js\");\n/* harmony import */ var _component_Table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Table/page */ \"(app-pages-browser)/./src/app/component/Table/page.js\");\n/* harmony import */ var _styles_fields_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/fields.module.css */ \"(app-pages-browser)/./src/app/styles/fields.module.css\");\n/* harmony import */ var _styles_fields_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_fields_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst gridStyle = {\n    width: \"10%\",\n    textAlign: \"center\",\n    margin: \"0px 10px\"\n};\nconst levelSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    levelName: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(2, \"Too Short!\").max(50, \"Too Long!\").required(\"Required\")\n});\nconst index = ()=>{\n    _s();\n    const [messageApi, contextHolder] = antd_es_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useMessage();\n    const [isModalOpen1, setIsModalOpen1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isModalOpen2, setIsModalOpen2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedEditLevel, setSelectedEditLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [levelList, setlevelList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const showModal1 = (item)=>{\n        setSelectedEditLevel(item);\n        setIsModalOpen1(true);\n    };\n    const showModal2 = (item)=>{\n        setSelectedEditLevel(item);\n        setIsModalOpen2(true);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen1(false);\n        setIsModalOpen2(false);\n    };\n    const levelFetch = async ()=>{\n        const res = await fetch(\"http://localhost:4000/levels\");\n        const data = await res.json();\n        setlevelList(data.levelList);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        levelFetch();\n    }, []);\n    const registerLevel = async (values, resetForm)=>{\n        const res = await fetch(\"http://localhost:4000/levels\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(values)\n        });\n        const data = await res.json();\n        messageApi.open({\n            type: res.status == 200 ? \"success\" : \"error\",\n            content: data.msg\n        });\n        console.log(res);\n        if (res.status === 200) {\n            levelFetch();\n            resetForm();\n        }\n    };\n    const deleteLevel = async (id)=>{\n        const res = await fetch(\"http://localhost:4000/levels\", {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                id\n            })\n        });\n        const data = await res.json();\n        messageApi.open({\n            type: res.status == 200 ? \"success\" : \"error\",\n            content: data.msg\n        });\n        console.log(res);\n        if (res.status === 200) {\n            levelFetch();\n            setIsModalOpen2(false);\n        }\n    };\n    const editLevel = async (values, resetForm)=>{\n        const res = await fetch(\"http://localhost:4000/levels\", {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(values)\n        });\n        const data = await res.json();\n        messageApi.open({\n            type: res.status == 200 ? \"success\" : \"error\",\n            content: data.msg\n        });\n        if (res.status === 200) {\n            levelFetch();\n            handleCancel();\n            resetForm();\n        }\n    };\n    const EditForm = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {\n            initialValues: selectedEditLevel,\n            enableReinitialize: true,\n            // validationSchema={SignupSchema}\n            onSubmit: (values, param)=>{\n                let { resetForm } = param;\n                editLevel(values, resetForm);\n            },\n            children: (param)=>{\n                let { errors, touched } = param;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                    className: (_styles_fields_module_css__WEBPACK_IMPORTED_MODULE_6___default().editForm),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"level Name:\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                                    name: \"levelName\",\n                                    placeholder: \"levelName\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, undefined),\n                                errors.levelName && touched.levelName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: errors.levelName\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 17\n                                }, undefined) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                            lineNumber: 136,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_fields_module_css__WEBPACK_IMPORTED_MODULE_6___default().submitBtn),\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                            lineNumber: 137,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                    lineNumber: 127,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }, void 0, false, {\n            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n            lineNumber: 118,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_fields_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_fields_module_css__WEBPACK_IMPORTED_MODULE_6___default().Box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            fontSize: \"30px\",\n                            fontWeight: \"bold\",\n                            textAlign: \"center\"\n                        },\n                        children: \"Add new level\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                        lineNumber: 150,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {\n                        initialValues: {\n                            levelName: \"\"\n                        },\n                        // validationSchema={SignupSchema}\n                        onSubmit: (values, param)=>{\n                            let { resetForm } = param;\n                            registerLevel(values, resetForm);\n                        },\n                        children: (param)=>{\n                            let { errors, touched } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                                className: \"addCategoryForm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"formDiv\",\n                                    children: [\n                                        contextHolder,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                                            name: \"levelName\",\n                                            type: \"text\",\n                                            placeholder: \"Enter New level Name\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                            lineNumber: 164,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        errors.levelName && touched.levelName ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: errors.levelName\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                            lineNumber: 165,\n                                            columnNumber: 50\n                                        }, undefined) : null,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                            lineNumber: 166,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"button\",\n                                            type: \"submit\",\n                                            children: \"Submit\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                            lineNumber: 167,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                    lineNumber: 162,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                                lineNumber: 161,\n                                columnNumber: 7\n                            }, undefined);\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                        lineNumber: 151,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        title: \"Edit level\",\n                        open: isModalOpen1,\n                        onCancel: handleCancel,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EditForm, {}, void 0, false, {\n                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                            lineNumber: 173,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                        lineNumber: 172,\n                        columnNumber: 3\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        title: \"Delete level\",\n                        open: isModalOpen2,\n                        onCancel: handleCancel,\n                        onOk: ()=>deleteLevel(selectedEditLevel._id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Are you sure you want to delete this level ?\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                            lineNumber: 176,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                        lineNumber: 175,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Table_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onDelete: deleteLevel,\n                        onEdit: editLevel,\n                        list: levelList,\n                        title: [\n                            \"levelName\"\n                        ],\n                        endpoint: \"/levels\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n                lineNumber: 149,\n                columnNumber: 1\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\career\\\\career\\\\client\\\\src\\\\app\\\\admin\\\\levels\\\\page.js\",\n            lineNumber: 148,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false);\n};\n_s(index, \"0E9wywEc/+dtJdVyWrz84SMdxpk=\", false, function() {\n    return [\n        antd_es_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].useMessage\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWRtaW4vbGV2ZWxzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUVKO0FBQ2xCO0FBQ1c7QUFBQTtBQUNTO0FBQ0s7QUFFcEQsTUFBTVcsWUFBWTtJQUNoQkMsT0FBTztJQUNQQyxXQUFXO0lBQ1hDLFFBQVE7QUFDVjtBQU1BLE1BQU1DLGNBQWNULHVDQUFVLEdBQUdXLEtBQUssQ0FBQztJQUNuQ0MsV0FBV1osdUNBQVUsR0FDcEJjLEdBQUcsQ0FBQyxHQUFHLGNBQ1BDLEdBQUcsQ0FBQyxJQUFJLGFBQ1JDLFFBQVEsQ0FBQztBQUNWO0FBR0osTUFBTUMsUUFBUTs7SUFDZCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2xCLHVEQUFPQSxDQUFDbUIsVUFBVTtJQUN0RCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHM0IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDNEIsY0FBY0MsZ0JBQWdCLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUM4QixtQkFBbUJDLHFCQUFxQixHQUFHL0IsK0NBQVFBLENBQUMsQ0FBQztJQUM1RCxNQUFNLENBQUNnQyxXQUFXQyxhQUFhLEdBQUdqQywrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLE1BQU1rQyxhQUFhLENBQUNDO1FBQ2xCSixxQkFBcUJJO1FBQ3JCUixnQkFBZ0I7SUFDbEI7SUFDQSxNQUFNUyxhQUFhLENBQUNEO1FBQ2xCSixxQkFBcUJJO1FBQ3JCTixnQkFBZ0I7SUFDbEI7SUFDQSxNQUFNUSxlQUFlO1FBQ25CVixnQkFBZ0I7UUFDaEJFLGdCQUFnQjtJQUNsQjtJQUdHLE1BQU1TLGFBQWE7UUFDbEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFPO1FBQ3pCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUMzQlQsYUFBYVEsS0FBS1QsU0FBUztJQUM3QjtJQUdBL0IsZ0RBQVNBLENBQUM7UUFDUnFDO0lBQ0YsR0FB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Q0FBQ3BCO2dDQUFPLEVBQUNDLFNBQVMsRUFBQzs0QkFDM0JGLGNBQWNDLFFBQU9DO3dCQUN2QjtrQ0FFQztnQ0FBQyxFQUFFb0IsTUFBTSxFQUFFQyxPQUFPLEVBQUU7aURBQ25CLDhEQUFDL0Qsd0NBQUlBO2dDQUFDZ0UsV0FBVTswQ0FDWiw0RUFBQ0U7b0NBQUlGLFdBQVU7O3dDQUNoQjNDO3NEQUNELDhEQUFDcEIseUNBQUtBOzRDQUFDbUUsTUFBSzs0Q0FBWW5CLE1BQUs7NENBQU9vQixhQUFZOzs7Ozs7d0NBQy9DUCxPQUFPaEQsU0FBUyxJQUFJaUQsUUFBUWpELFNBQVMsaUJBQUcsOERBQUNvRDtzREFBS0osT0FBT2hELFNBQVM7Ozs7O3dEQUFVO3NEQUN6RSw4REFBQ3dEOzs7OztzREFDRCw4REFBQ0M7NENBQU9QLFdBQVU7NENBQVNmLE1BQUs7c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUsvQyw4REFBQzdDLHFEQUFLQTt3QkFBQzJFLE9BQU07d0JBQWEvQixNQUFNekI7d0JBQWN5RCxVQUFVOUM7a0NBQ2hELDRFQUFDd0I7Ozs7Ozs7Ozs7a0NBRUgsOERBQUN0RCxxREFBS0E7d0JBQUMyRSxPQUFNO3dCQUFlL0IsTUFBTXZCO3dCQUFjdUQsVUFBVTlDO3dCQUFjK0MsTUFBTSxJQUFJMUIsWUFBWTVCLGtCQUFrQnVELEdBQUc7a0NBQ2pILDRFQUFDQztzQ0FBRTs7Ozs7Ozs7Ozs7a0NBR0wsOERBQUM5RSw2REFBS0E7d0JBQ04rRSxVQUFVN0I7d0JBQ1Y4QixRQUFRNUI7d0JBQ1I2QixNQUFNekQ7d0JBQVdrRCxPQUFPOzRCQUFDO3lCQUFZO3dCQUFFUSxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEQ7R0FoS01wRTs7UUFDOEJoQix1REFBT0EsQ0FBQ21COzs7QUFpSzVDLCtEQUFlSCxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYWRtaW4vbGV2ZWxzL3BhZ2UuanM/Mzg5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IG1lc3NhZ2UsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnQvVGFibGUvcGFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2ZpZWxkcy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IGdyaWRTdHlsZSA9IHtcclxuICB3aWR0aDogJzEwJScsXHJcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICBtYXJnaW46ICcwcHggMTBweCdcclxufTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG5jb25zdCBsZXZlbFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBsZXZlbE5hbWU6IFl1cC5zdHJpbmcoKVxyXG4gICAgLm1pbigyLCAnVG9vIFNob3J0IScpXHJcbiAgICAubWF4KDUwLCAnVG9vIExvbmchJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQnKSxcclxuICAgIH0pO1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG5jb25zdCBbbWVzc2FnZUFwaSwgY29udGV4dEhvbGRlcl0gPSBtZXNzYWdlLnVzZU1lc3NhZ2UoKTtcclxuY29uc3QgW2lzTW9kYWxPcGVuMSwgc2V0SXNNb2RhbE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgW2lzTW9kYWxPcGVuMiwgc2V0SXNNb2RhbE9wZW4yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgW3NlbGVjdGVkRWRpdExldmVsLCBzZXRTZWxlY3RlZEVkaXRMZXZlbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbmNvbnN0IFtsZXZlbExpc3QsIHNldGxldmVsTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbmNvbnN0IHNob3dNb2RhbDEgPSAoaXRlbSkgPT4ge1xyXG4gIHNldFNlbGVjdGVkRWRpdExldmVsKGl0ZW0pO1xyXG4gIHNldElzTW9kYWxPcGVuMSh0cnVlKTtcclxufTtcclxuY29uc3Qgc2hvd01vZGFsMiA9IChpdGVtKSA9PiB7XHJcbiAgc2V0U2VsZWN0ZWRFZGl0TGV2ZWwoaXRlbSk7XHJcbiAgc2V0SXNNb2RhbE9wZW4yKHRydWUpO1xyXG59O1xyXG5jb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgc2V0SXNNb2RhbE9wZW4xKGZhbHNlKTtcclxuICBzZXRJc01vZGFsT3BlbjIoZmFsc2UpO1xyXG59O1xyXG5cclxuXHJcbiAgIGNvbnN0IGxldmVsRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2xldmVsc2ApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgc2V0bGV2ZWxMaXN0KGRhdGEubGV2ZWxMaXN0KVxyXG4gIH1cclxuICAgIFxyXG4gICAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldmVsRmV0Y2goKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCByZWdpc3RlckxldmVsID0gYXN5bmMgKHZhbHVlcywgcmVzZXRGb3JtKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2xldmVsc2AsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIG1lc3NhZ2VBcGkub3Blbih7XHJcbiAgICAgIHR5cGU6IHJlcy5zdGF0dXMgPT0gMjAwID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcclxuICAgICAgY29udGVudDogZGF0YS5tc2csXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgbGV2ZWxGZXRjaCgpO1xyXG4gICAgICByZXNldEZvcm0oKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVMZXZlbCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9sZXZlbHNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIG1lc3NhZ2VBcGkub3Blbih7XHJcbiAgICAgIHR5cGU6IHJlcy5zdGF0dXMgPT0gMjAwID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcclxuICAgICAgY29udGVudDogZGF0YS5tc2csXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgbGV2ZWxGZXRjaCgpO1xyXG4gICAgICBzZXRJc01vZGFsT3BlbjIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBlZGl0TGV2ZWwgPSBhc3luYyAodmFsdWVzLHJlc2V0Rm9ybSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9sZXZlbHNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIG1lc3NhZ2VBcGkub3Blbih7XHJcbiAgICAgIHR5cGU6IHJlcy5zdGF0dXMgPT0gMjAwID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcclxuICAgICAgY29udGVudDogZGF0YS5tc2csXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgbGV2ZWxGZXRjaCgpO1xyXG4gICAgICBoYW5kbGVDYW5jZWwoKTtcclxuICAgICAgcmVzZXRGb3JtKClcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgRWRpdEZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17c2VsZWN0ZWRFZGl0TGV2ZWx9XHJcbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXHJcbiAgICAgICAgLy8gdmFsaWRhdGlvblNjaGVtYT17U2lnbnVwU2NoZW1hfVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzLHsgcmVzZXRGb3JtIH0pID0+IHtcclxuICAgICAgICAgIGVkaXRMZXZlbCh2YWx1ZXMscmVzZXRGb3JtKVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHsgZXJyb3JzLCB0b3VjaGVkIH0pID0+IChcclxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRGb3JtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWw+bGV2ZWwgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwibGV2ZWxOYW1lXCIgcGxhY2Vob2xkZXI9XCJsZXZlbE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMubGV2ZWxOYW1lICYmIHRvdWNoZWQubGV2ZWxOYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj57ZXJyb3JzLmxldmVsTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdG59IHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Cb3h9PlxyXG48aDMgc3R5bGU9e3tmb250U2l6ZTonMzBweCcsZm9udFdlaWdodDonYm9sZCcsdGV4dEFsaWduOidjZW50ZXInfX0+QWRkIG5ldyBsZXZlbDwvaDM+XHJcbiAgICA8Rm9ybWlrXHJcbiAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgIGxldmVsTmFtZTogJydcclxuICAgICAgICB9fVxyXG4gICAgLy8gdmFsaWRhdGlvblNjaGVtYT17U2lnbnVwU2NoZW1hfVxyXG4gICAgb25TdWJtaXQ9eyh2YWx1ZXMse3Jlc2V0Rm9ybX0pID0+IHtcclxuICAgICAgcmVnaXN0ZXJMZXZlbCh2YWx1ZXMscmVzZXRGb3JtKTtcclxuICAgIH19XHJcbiAgPlxyXG4gICAgeyh7IGVycm9ycywgdG91Y2hlZCB9KSA9PiAoXHJcbiAgICAgIDxGb3JtIGNsYXNzTmFtZT0nYWRkQ2F0ZWdvcnlGb3JtJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtRGl2Jz5cclxuICAgICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgICA8RmllbGQgbmFtZT1cImxldmVsTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBOZXcgbGV2ZWwgTmFtZVwiIC8+XHJcbiAgICAgICAge2Vycm9ycy5sZXZlbE5hbWUgJiYgdG91Y2hlZC5sZXZlbE5hbWUgPyA8ZGl2PntlcnJvcnMubGV2ZWxOYW1lfTwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbicgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICApfVxyXG4gIDwvRm9ybWlrPlxyXG4gIDxNb2RhbCB0aXRsZT1cIkVkaXQgbGV2ZWxcIiBvcGVuPXtpc01vZGFsT3BlbjF9IG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9ID5cclxuICAgICAgICAgIDxFZGl0Rm9ybSAvPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPE1vZGFsIHRpdGxlPVwiRGVsZXRlIGxldmVsXCIgb3Blbj17aXNNb2RhbE9wZW4yfSBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfSBvbk9rPXsoKT0+ZGVsZXRlTGV2ZWwoc2VsZWN0ZWRFZGl0TGV2ZWwuX2lkKX0+XHJcbiAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGV2ZWwgPzwvcD5cclxuICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICA8VGFibGUgXHJcbiAgICAgICAgb25EZWxldGU9e2RlbGV0ZUxldmVsfVxyXG4gICAgICAgIG9uRWRpdD17ZWRpdExldmVsfVxyXG4gICAgICAgIGxpc3Q9e2xldmVsTGlzdH0gdGl0bGU9e1snbGV2ZWxOYW1lJ119IGVuZHBvaW50PVwiL2xldmVsc1wiIC8+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4ICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9ybWlrIiwiRm9ybSIsIkZpZWxkIiwiWXVwIiwibWVzc2FnZSIsIk1vZGFsIiwiVGFibGUiLCJzdHlsZXMiLCJncmlkU3R5bGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpbiIsImxldmVsU2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJsZXZlbE5hbWUiLCJzdHJpbmciLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsImluZGV4IiwibWVzc2FnZUFwaSIsImNvbnRleHRIb2xkZXIiLCJ1c2VNZXNzYWdlIiwiaXNNb2RhbE9wZW4xIiwic2V0SXNNb2RhbE9wZW4xIiwiaXNNb2RhbE9wZW4yIiwic2V0SXNNb2RhbE9wZW4yIiwic2VsZWN0ZWRFZGl0TGV2ZWwiLCJzZXRTZWxlY3RlZEVkaXRMZXZlbCIsImxldmVsTGlzdCIsInNldGxldmVsTGlzdCIsInNob3dNb2RhbDEiLCJpdGVtIiwic2hvd01vZGFsMiIsImhhbmRsZUNhbmNlbCIsImxldmVsRmV0Y2giLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicmVnaXN0ZXJMZXZlbCIsInZhbHVlcyIsInJlc2V0Rm9ybSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wZW4iLCJ0eXBlIiwic3RhdHVzIiwiY29udGVudCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVMZXZlbCIsImlkIiwiZWRpdExldmVsIiwiRWRpdEZvcm0iLCJpbml0aWFsVmFsdWVzIiwiZW5hYmxlUmVpbml0aWFsaXplIiwib25TdWJtaXQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiY2xhc3NOYW1lIiwiZWRpdEZvcm0iLCJkaXYiLCJsYWJlbCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIiwic3VibWl0QnRuIiwiY29udGFpbmVyIiwiQm94IiwiaDMiLCJzdHlsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRpdGxlIiwib25DYW5jZWwiLCJvbk9rIiwiX2lkIiwicCIsIm9uRGVsZXRlIiwib25FZGl0IiwibGlzdCIsImVuZHBvaW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/admin/levels/page.js\n"));

/***/ })

});