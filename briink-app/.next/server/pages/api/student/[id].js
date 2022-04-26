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
exports.id = "pages/api/student/[id]";
exports.ids = ["pages/api/student/[id]"];
exports.modules = {

/***/ "(api)/./data/students.js":
/*!**************************!*\
  !*** ./data/students.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"students\": () => (/* binding */ students)\n/* harmony export */ });\nconst students = [\n    {\n        id: 1,\n        name: \"Elaine\"\n    },\n    {\n        id: 2,\n        name: \"Jerry\"\n    },\n    {\n        id: 3,\n        name: \"George\"\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL3N0dWRlbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUc7SUFDdEI7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLFFBQVE7S0FBRTtJQUN6QjtRQUFFRCxFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsT0FBTztLQUFFO0lBQ3hCO1FBQUVELEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxRQUFRO0tBQUU7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmlpbmstYXBwLy4vZGF0YS9zdHVkZW50cy5qcz9mM2Q1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdHVkZW50cyA9IFtcbiAgeyBpZDogMSwgbmFtZTogXCJFbGFpbmVcIiB9LFxuICB7IGlkOiAyLCBuYW1lOiBcIkplcnJ5XCIgfSxcbiAgeyBpZDogMywgbmFtZTogXCJHZW9yZ2VcIiB9XG5dXG4iXSwibmFtZXMiOlsic3R1ZGVudHMiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./data/students.js\n");

/***/ }),

/***/ "(api)/./pages/api/student/[id].js":
/*!***********************************!*\
  !*** ./pages/api/student/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ studentHandler)\n/* harmony export */ });\n/* harmony import */ var _data_students_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/students.js */ \"(api)/./data/students.js\");\n\nfunction studentHandler(req, res) {\n    const { query: { id , name  } , method ,  } = req;\n    switch(method){\n        case \"GET\":\n            // Fake get data from the database\n            var student = _data_students_js__WEBPACK_IMPORTED_MODULE_0__.students.find((el)=>el.id === parseInt(id)\n            );\n            res.status(200).json(student);\n            break;\n        case \"PUT\":\n            student = _data_students_js__WEBPACK_IMPORTED_MODULE_0__.students.find((el)=>el.id === parseInt(id)\n            );\n            // Update or create data in the database\n            res.status(200).json(student);\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3R1ZGVudC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBRXJDLFNBQVNDLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUNKQyxLQUFLLEVBQUUsRUFBRUMsRUFBRSxHQUFFQyxJQUFJLEdBQUUsR0FDbkJDLE1BQU0sS0FDUCxHQUFHTCxHQUFHO0lBRVAsT0FBUUssTUFBTTtRQUNaLEtBQUssS0FBSztZQUNSLGtDQUFrQztZQUNsQyxJQUFJQyxPQUFPLEdBQUdSLDREQUFhLENBQUNVLENBQUFBLEVBQUUsR0FBSUEsRUFBRSxDQUFDTCxFQUFFLEtBQUtNLFFBQVEsQ0FBQ04sRUFBRSxDQUFDO1lBQUEsQ0FBQztZQUN6REYsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsT0FBTyxDQUFDO1lBQzdCLE1BQUs7UUFDUCxLQUFLLEtBQUs7WUFDUkEsT0FBTyxHQUFHUiw0REFBYSxDQUFDVSxDQUFBQSxFQUFFLEdBQUlBLEVBQUUsQ0FBQ0wsRUFBRSxLQUFLTSxRQUFRLENBQUNOLEVBQUUsQ0FBQztZQUFBLENBQUM7WUFDckQsd0NBQXdDO1lBQ3hDRixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxPQUFPLENBQUM7WUFDN0IsTUFBSztRQUNQO1lBQ0VMLEdBQUcsQ0FBQ1csU0FBUyxDQUFDLE9BQU8sRUFBRTtnQkFBQyxLQUFLO2dCQUFFLEtBQUs7YUFBQyxDQUFDO1lBQ3RDWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFUixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDdEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaWluay1hcHAvLi9wYWdlcy9hcGkvc3R1ZGVudC9baWRdLmpzP2JkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R1ZGVudHMgfSBmcm9tICcuLi8uLi8uLi9kYXRhL3N0dWRlbnRzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHVkZW50SGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgaWQsIG5hbWUgfSxcbiAgICBtZXRob2QsXG4gIH0gPSByZXFcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICAvLyBGYWtlIGdldCBkYXRhIGZyb20gdGhlIGRhdGFiYXNlXG4gICAgICB2YXIgc3R1ZGVudCA9IHN0dWRlbnRzLmZpbmQoZWwgPT4gZWwuaWQgPT09IHBhcnNlSW50KGlkKSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHN0dWRlbnQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ1BVVCc6XG4gICAgICBzdHVkZW50ID0gc3R1ZGVudHMuZmluZChlbCA9PiBlbC5pZCA9PT0gcGFyc2VJbnQoaWQpKVxuICAgICAgLy8gVXBkYXRlIG9yIGNyZWF0ZSBkYXRhIGluIHRoZSBkYXRhYmFzZVxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc3R1ZGVudClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUFVUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgfVxufVxuIl0sIm5hbWVzIjpbInN0dWRlbnRzIiwic3R1ZGVudEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibmFtZSIsIm1ldGhvZCIsInN0dWRlbnQiLCJmaW5kIiwiZWwiLCJwYXJzZUludCIsInN0YXR1cyIsImpzb24iLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/student/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/student/[id].js"));
module.exports = __webpack_exports__;

})();