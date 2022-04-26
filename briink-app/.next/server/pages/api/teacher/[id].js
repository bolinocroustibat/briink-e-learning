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
exports.id = "pages/api/teacher/[id]";
exports.ids = ["pages/api/teacher/[id]"];
exports.modules = {

/***/ "(api)/./data/teachers.js":
/*!**************************!*\
  !*** ./data/teachers.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"teachers\": () => (/* binding */ teachers)\n/* harmony export */ });\nconst teachers = [\n    {\n        id: 1,\n        name: \"Sandy Cheeks\"\n    },\n    {\n        id: 2,\n        name: \"Patrick Star\"\n    },\n    {\n        id: 3,\n        name: \"Spongebob Squarepants\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL3RlYWNoZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUc7SUFDdEI7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLGNBQWM7S0FBRTtJQUMvQjtRQUFFRCxFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsY0FBYztLQUFFO0lBQy9CO1FBQUVELEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSx1QkFBdUI7S0FBRTtDQUN6QyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaWluay1hcHAvLi9kYXRhL3RlYWNoZXJzLmpzP2YxZTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlYWNoZXJzID0gW1xuICB7IGlkOiAxLCBuYW1lOiBcIlNhbmR5IENoZWVrc1wiIH0sXG4gIHsgaWQ6IDIsIG5hbWU6IFwiUGF0cmljayBTdGFyXCIgfSxcbiAgeyBpZDogMywgbmFtZTogXCJTcG9uZ2Vib2IgU3F1YXJlcGFudHNcIiB9XG5dXG4iXSwibmFtZXMiOlsidGVhY2hlcnMiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./data/teachers.js\n");

/***/ }),

/***/ "(api)/./pages/api/teacher/[id].js":
/*!***********************************!*\
  !*** ./pages/api/teacher/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ teacherHandler)\n/* harmony export */ });\n/* harmony import */ var _data_teachers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/teachers.js */ \"(api)/./data/teachers.js\");\n\nfunction teacherHandler(req, res) {\n    const { query: { id , name  } , method ,  } = req;\n    switch(method){\n        case \"GET\":\n            var teacher = _data_teachers_js__WEBPACK_IMPORTED_MODULE_0__.teachers.find((el)=>el.id === parseInt(id)\n            );\n            res.status(200).json(teacher);\n            break;\n        case \"PUT\":\n            var teacher = _data_teachers_js__WEBPACK_IMPORTED_MODULE_0__.teachers.find((el)=>el.id === parseInt(id)\n            );\n            res.status(200).json(teacher);\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhY2hlci9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBRXJDLFNBQVNDLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUNKQyxLQUFLLEVBQUUsRUFBRUMsRUFBRSxHQUFFQyxJQUFJLEdBQUUsR0FDbkJDLE1BQU0sS0FDUCxHQUFHTCxHQUFHO0lBRVAsT0FBUUssTUFBTTtRQUNaLEtBQUssS0FBSztZQUNSLElBQUlDLE9BQU8sR0FBR1IsNERBQWEsQ0FBQ1UsQ0FBQUEsRUFBRSxHQUFJQSxFQUFFLENBQUNMLEVBQUUsS0FBS00sUUFBUSxDQUFDTixFQUFFLENBQUM7WUFBQSxDQUFDO1lBQ3pERixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxPQUFPLENBQUM7WUFDN0IsTUFBSztRQUNQLEtBQUssS0FBSztZQUNSLElBQUlBLE9BQU8sR0FBR1IsNERBQWEsQ0FBQ1UsQ0FBQUEsRUFBRSxHQUFJQSxFQUFFLENBQUNMLEVBQUUsS0FBS00sUUFBUSxDQUFDTixFQUFFLENBQUM7WUFBQSxDQUFDO1lBQ3pERixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxPQUFPLENBQUM7WUFDN0IsTUFBSztRQUNQO1lBQ0VMLEdBQUcsQ0FBQ1csU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFBQyxLQUFLO2dCQUFFLEtBQUs7YUFBQyxDQUFDO1lBQ3RDWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFUixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDdEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaWluay1hcHAvLi9wYWdlcy9hcGkvdGVhY2hlci9baWRdLmpzP2Y3YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGVhY2hlcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhL3RlYWNoZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZWFjaGVySGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgaWQsIG5hbWUgfSxcbiAgICBtZXRob2QsXG4gIH0gPSByZXFcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICB2YXIgdGVhY2hlciA9IHRlYWNoZXJzLmZpbmQoZWwgPT4gZWwuaWQgPT09IHBhcnNlSW50KGlkKSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRlYWNoZXIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ1BVVCc6XG4gICAgICB2YXIgdGVhY2hlciA9IHRlYWNoZXJzLmZpbmQoZWwgPT4gZWwuaWQgPT09IHBhcnNlSW50KGlkKSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRlYWNoZXIpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BVVCddKVxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0ZWFjaGVycyIsInRlYWNoZXJIYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm5hbWUiLCJtZXRob2QiLCJ0ZWFjaGVyIiwiZmluZCIsImVsIiwicGFyc2VJbnQiLCJzdGF0dXMiLCJqc29uIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/teacher/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teacher/[id].js"));
module.exports = __webpack_exports__;

})();