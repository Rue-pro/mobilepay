"use strict";
(() => {
var exports = {};
exports.id = 561;
exports.ids = [561];
exports.modules = {

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOperators": () => (/* binding */ getOperators)
/* harmony export */ });
const fakeOperators = [{
  id: 1,
  name: "МТС",
  logoURL: "https://upload.wikimedia.org/wikipedia/commons/8/86/MTS_logo_2015.svg"
}, {
  id: 2,
  name: "Билайн",
  logoURL: "https://upload.wikimedia.org/wikipedia/commons/7/7a/BeeLine_logo.png"
}, {
  id: 3,
  name: "Мегафон",
  logoURL: "https://upload.wikimedia.org/wikipedia/commons/9/9e/MegaFon_logo.svg"
}];
const getOperators = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(fakeOperators), 2000);
  });
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(843));
module.exports = __webpack_exports__;

})();