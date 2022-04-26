"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/teacher/[id]/zob";
exports.ids = ["pages/api/teacher/[id]/zob"];
exports.modules = {

/***/ "(api)/./pages/api/teacher/[id]/zob.js":
/*!***************************************!*\
  !*** ./pages/api/teacher/[id]/zob.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ teacherHomeworkHandler)\n/* harmony export */ });\nfunction teacherHomeworkHandler(req, res) {\n    const { query: { id , name  } , method  } = req;\n    switch(method){\n        case \"GET\":\n            res.status(200).json({});\n            break;\n        case \"PUT\":\n            res.status(200).json({});\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhY2hlci9baWRdL3pvYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ2UsU0FBU0Esc0JBQXNCLENBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hELE1BQU0sRUFDSkMsS0FBSyxFQUFFLEVBQUVDLEVBQUUsR0FBRUMsSUFBSSxHQUFFLEdBQ25CQyxNQUFNLEdBQ1AsR0FBR0wsR0FBRztJQUVQLE9BQVFLLE1BQU07UUFDWixLQUFLLEtBQUs7WUFDUkosR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDeEIsTUFBSztRQUNQLEtBQUssS0FBSztZQUNSTixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN4QixNQUFLO1FBQ1A7WUFDRU4sR0FBRyxDQUFDTyxTQUFTLENBQUMsT0FBTyxFQUFFO2dCQUFDLEtBQUs7Z0JBQUUsS0FBSzthQUFDLENBQUM7WUFDdENQLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVKLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN0RDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpaW5rLWFwcC8uL3BhZ2VzL2FwaS90ZWFjaGVyL1tpZF0vem9iLmpzP2E5NzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZWFjaGVySG9tZXdvcmtIYW5kbGVyIChyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgaWQsIG5hbWUgfSxcbiAgICBtZXRob2RcbiAgfSA9IHJlcVxuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt9KVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdQVVQnOlxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe30pXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BVVCddKVxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0ZWFjaGVySG9tZXdvcmtIYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm5hbWUiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/teacher/[id]/zob.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teacher/[id]/zob.js"));
module.exports = __webpack_exports__;

})();