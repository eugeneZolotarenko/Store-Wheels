webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
var _jsxFileName = "C:\\Users\\He Mi\\Desktop\\Store-Wheels\\frontend\\components\\Header.js";












next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_6___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();
};

var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-2cpreo-0"
})([".bar{position:fixed;z-index:1000;width:100%;display:flex;justify-content:space-between;background-color:", ";padding:1rem;box-shadow:0px 0px 5px 0px ", ";min-height:70px;.main-logo,.order-button{width:fit-content;}.nav-orders{display:flex;.order-button{background:none;border:none;display:flex;padding:1rem 2rem 0.5rem 2rem;text-transform:uppercase;font-weight:600;font-family:Montserrat;font-size:1.1em;cursor:pointer;color:", ";align-items:center;transition:0.3s;outline:none;&:hover{color:", ";}&:hover .count{background:", ";}@media (max-width:900px){padding:1rem 1.2rem 0.5rem 1.2rem;}}@media (max-width:700px){flex-direction:row-reverse;}}}"], function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.semiblack;
}, function (props) {
  return props.theme.pink;
}, function (props) {
  return props.theme.olive;
});

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "main-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../static/logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-orders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: _Cart__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_CART_MATATION"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, function (toggleCart) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "order-button",
        onClick: toggleCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-shopping-basket fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartCount__WEBPACK_IMPORTED_MODULE_9__["default"], {
        count: me.cart.reduce(function (tally, cartItem) {
          return tally + cartItem.quantity;
        }, 0),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }));
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.57e3e9d6d73ea392bc49.hot-update.js.map