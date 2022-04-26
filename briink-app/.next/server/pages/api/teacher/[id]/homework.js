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
exports.id = "pages/api/teacher/[id]/homework";
exports.ids = ["pages/api/teacher/[id]/homework"];
exports.modules = {

/***/ "(api)/./pages/api/teacher/[id]/homework.js":
/*!********************************************!*\
  !*** ./pages/api/teacher/[id]/homework.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ teacherHomeworkHandler)\n/* harmony export */ });\nfunction teacherHomeworkHandler(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"POST\":\n            res.status(200).json({});\n            break;\n        case \"PUT\":\n            res.status(200).json({});\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"POST\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhY2hlci9baWRdL2hvbWV3b3JrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxzQkFBc0IsQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEQsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0YsR0FBRztJQUV0QixPQUFRRSxNQUFNO1FBQ1osS0FBSyxNQUFNO1lBQ1RELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3hCLE1BQUs7UUFDUCxLQUFLLEtBQUs7WUFDUkgsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDeEIsTUFBSztRQUNQO1lBQ0VILEdBQUcsQ0FBQ0ksU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFBQyxNQUFNO2dCQUFFLEtBQUs7YUFBQyxDQUFDO1lBQ3ZDSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFSixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDdEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaWluay1hcHAvLi9wYWdlcy9hcGkvdGVhY2hlci9baWRdL2hvbWV3b3JrLmpzPzQ1YjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVhY2hlckhvbWV3b3JrSGFuZGxlciAocmVxLCByZXMpIHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcVxuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7fSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt9KVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnLCAnUFVUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRlYWNoZXJIb21ld29ya0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/teacher/[id]/homework.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teacher/[id]/homework.js"));
module.exports = __webpack_exports__;

})();