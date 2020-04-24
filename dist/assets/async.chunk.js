(this["webpackJsonpr"] = this["webpackJsonpr"] || []).push([["async"],{

/***/ "./src/router/async.tsx":
/*!******************************!*\
  !*** ./src/router/async.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @file 异步加载的模块
 */
var AsyncComponent = /** @class */ (function (_super) {
    __extends(AsyncComponent, _super);
    function AsyncComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsyncComponent.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "\u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], { to: "/async/test" }, "\u52A8\u6001\u5B50\u8DEF\u7531"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], { path: "/async/test", exact: true, component: function () { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, "test"); } })));
    };
    return AsyncComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (AsyncComponent);


/***/ })

}]);