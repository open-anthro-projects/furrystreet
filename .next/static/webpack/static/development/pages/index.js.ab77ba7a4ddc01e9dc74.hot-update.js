webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/Takuma.jpeg */ "./static/Takuma.jpeg");
/* harmony import */ var _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_yokai_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/yokai.png */ "./static/yokai.png");
/* harmony import */ var _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_yokai_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/kaoru.png */ "./static/kaoru.png");
/* harmony import */ var _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_kaoru_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/icon.png */ "./static/icon.png");
/* harmony import */ var _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_icon_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_come_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/come.jpg */ "./static/come.jpg");
/* harmony import */ var _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_come_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_ninja_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/ninja.png */ "./static/ninja.png");
/* harmony import */ var _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_ninja_png__WEBPACK_IMPORTED_MODULE_14__);
















var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.handleNavButtonOnClick = _this.handleNavButtonOnClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      menuVisible: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "handleNavButtonOnClick",
    value: function handleNavButtonOnClick() {
      this.setState({
        menuVisible: !this.state.menuVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "pageContent"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "right",
        className: "jsx-111434248" + " " + "content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "contentheader"
      }, "Recent Artwork"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: {
          pathname: '/artwork',
          query: {
            id: '2'
          }
        },
        as: "/artwork/2/Yokai-Takuma"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "jsx-111434248"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "img__description"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figcaption", {
        className: "jsx-111434248" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "title"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "sub-title"
      }, "by TV_thari")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "contentheader"
      }, "Recent Offers"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-111434248" + " " + "contentheader"
      }, "Recent Offers"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cp"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_kaoru_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_Takuma_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_come_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111434248" + " " + "cptest"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _static_ninja_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        className: "jsx-111434248" + " " + "cptestImage"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3900323627"
      }, ".navposition{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGcUIsQUFHdUIsa0JBQ3BCIiwiZmlsZSI6IkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IFRha3VtYSBmcm9tIFwiLi4vc3RhdGljL1Rha3VtYS5qcGVnXCJcclxuaW1wb3J0IFlva2FpIGZyb20gXCIuLi9zdGF0aWMveW9rYWkucG5nXCJcclxuaW1wb3J0IEthb3J1IGZyb20gXCIuLi9zdGF0aWMva2FvcnUucG5nXCJcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL3N0YXRpYy9pY29uLnBuZ1wiXHJcbmltcG9ydCBDb21lIGZyb20gXCIuLi9zdGF0aWMvY29tZS5qcGdcIlxyXG5pbXBvcnQgTmluamEgZnJvbSBcIi4uL3N0YXRpYy9uaW5qYS5wbmdcIlxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrID0gdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7bWVudVZpc2libGU6IGZhbHNlfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHttZW51VmlzaWJsZTogIXRoaXMuc3RhdGUubWVudVZpc2libGV9KVxyXG5cdH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICA8PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250ZW50XCI+XHJcbiAgICA8ZGl2IGlkPVwicmlnaHRcIiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50aGVhZGVyXCI+UmVjZW50IEFydHdvcms8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvYXJ0d29yaycsIHF1ZXJ5OiB7IGlkOiAnMicgfSB9fSBhcz0nL2FydHdvcmsvMi9Zb2thaS1UYWt1bWEnPlxyXG4gICAgICAgIDxhPjxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48ZGl2IGNsYXNzTmFtZT1cImltZ19fZGVzY3JpcHRpb25cIj48ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Zb2thaSBUYWt1bWE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+YnkgVFZfdGhhcmk8L3NwYW4+PC9maWdjYXB0aW9uPjwvZGl2PjwvZmlndXJlPlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0ljb259PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRoZWFkZXJcIj5SZWNlbnQgT2ZmZXJzPC9zcGFuPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17S2FvcnV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17TmluamF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtJY29ufT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0thb3J1fT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1Rha3VtYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtZb2thaX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtDb21lfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50aGVhZGVyXCI+UmVjZW50IE9mZmVyczwvc3Bhbj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1lva2FpfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17VGFrdW1hfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0thb3J1fT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17SWNvbn0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtOaW5qYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgLm5hdnBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICA8c3R5bGUganN4PntgXHJcbiAgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI19fbmV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZsZXg6MTtcclxuICB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6MTZweDtcclxuICBoZWlnaHQ6IDEwMCU7ICAvKmFsbG93cyBib3RoIGNvbHVtbnMgdG8gc3BhbiB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgd2luZG93Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcclxuICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gIH1cclxuXHJcbiAgLnBhZ2VDb250ZW50e1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5jcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleDogMTtcclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gIC5jcHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5jcHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uY3B0ZXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY3B0ZXN0OmhvdmVyIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jcHRlc3RJbWFnZSB7XHJcbiAgbWF4LXdpZHRoOmNhbGMoMTAwdncgLSAzMnB4KTsgXHJcbiAgbWF4LWhlaWdodDoyNTBweDtcclxufVxyXG5cclxuLmltZ19fZGVzY3JpcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbWFyZ2luOjBweDtcclxuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbWF4LWhlaWdodDoyNTBweDtcclxuICBtaW4taGVpZ2h0OjI1MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgLyogdHJhbnNpdGlvbiBlZmZlY3QuIG5vdCBuZWNlc3NhcnkgKi9cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDUsNiw2LDApLHJnYmEoNSw2LDYsLjk1KSk7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuX3NhbnNfYm9sZCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoNSw2LDYsLjUpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICBmb250LWZhbWlseTogb3Blbl9zYW5zX2JvbGQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG59XHJcblxyXG4jcmlnaHQge1xyXG4gIGZsZXgtc2hyaW5rOiAwOyBcclxufVxyXG5cclxuI2xlZnQge1xyXG4gICAgZmxleC1zaHJpbms6IDA7ICAvKm1ha2VzIHN1cmUgdGhhdCBjb250ZW50IGlzIG5vdCBjdXQgb2ZmIGluIGEgc21hbGxlciBicm93c2VyIHdpbmRvdyovXHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgd2lkdGg6MjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDExJSk7XHJcbn1cclxuXHJcbi50b3AtbGVmdCB7XHJcbiAgICBmbGV4LXNoaW5rOiAwO1xyXG59XHJcblxyXG4udG9wLXJpZ2h0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50aGVhZGVye1xyXG4gIG1heC1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXJnaW46YXV0bztcclxuICBjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbiAgLmFwcC1kcmF3ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMTIwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHZpc2liaWxpdHk7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgcGFkZGluZzogMTIwcHggMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG4ud3JhcHBlcjIge1xyXG5oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuLmltYWdldGVzdHtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuXHJcbi5pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51Q29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuXHJcbmB9PC9zdHlsZT5cclxuPC8+XHJcbil9fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcbiJdfQ== */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\index.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2651409098"
      }, "html.jsx-111434248{height:100%;font-family:Roboto,Arial,sans-serif;width:100%;}#__next.jsx-111434248{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;height:100%;margin:0px;top:0;right:0;left:0;-webkit-flex:1;-ms-flex:1;flex:1;}.content.jsx-111434248{padding-top:16px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-ms-flex:1 1 0.000000001px;-webkit-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-basis:0.000000001px;-webkit-flex-basis:0.000000001px;-ms-flex-preferred-size:0.000000001px;flex-basis:0.000000001px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.pageContent.jsx-111434248{overflow-y:auto;height:100%;}.cp.jsx-111434248{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:1;-ms-flex:1;flex:1;}@media (min-width:1025px){.cp.jsx-111434248{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}@media (max-width:1024px){.cp.jsx-111434248{overflow-x:auto;}}.cptest.jsx-111434248{margin-right:16px;margin-left:16px;margin-top:16px;margin-bottom:16px;position:relative;min-width:auto;}.cptest.jsx-111434248:hover .img__description.jsx-111434248{visibility:visible;opacity:1;}.cptestImage.jsx-111434248{max-width:calc(100vw - 32px);max-height:250px;}.img__description.jsx-111434248{position:absolute;top:0;bottom:0;left:0;right:0;color:#fff;visibility:hidden;opacity:0;margin:0px;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;max-height:250px;min-height:250px;vertical-align:bottom;-webkit-transition:opacity .2s,visibility .2s;transition:opacity .2s,visibility .2s;}.info.jsx-111434248{padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:3px;background:linear-gradient(rgba(5,6,6,0),rgba(5,6,6,.95));width:100%;}.title.jsx-111434248{font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1.125rem;line-height:1.3;text-shadow:2px 2px 3px rgba(5,6,6,.5);}.sub-title.jsx-111434248{display:block;font-size:.75rem;font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;margin-bottom:.25rem;}#right.jsx-111434248{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}#left.jsx-111434248{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;z-index:1030;width:240px;background-color:hsl(0,0%,11%);}.top-left.jsx-111434248{-webkit-flex-shink:0;-ms-flex-shink:0;flex-shink:0;}.top-right.jsx-111434248{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}ul.jsx-111434248{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}.bottom.jsx-111434248{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}.contentheader.jsx-111434248{max-height:2rem;font-size:1.6rem;font-weight:500;line-height:2rem;margin:auto;color:#ffffff;}.app-drawer.jsx-111434248{position:fixed;top:-120px;right:0;bottom:-120px;left:0;-webkit-transition-property:visibility;transition-property:visibility;z-index:1030;}.content-container.jsx-111434248{position:absolute;top:0;bottom:0;left:0;width:256px;padding:120px 0;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transform:translate3d(-100%,0,0);-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);background-color:#FFF;}.wrapper2.jsx-111434248{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;}.imagetest.jsx-111434248{height:100%;}.item.jsx-111434248{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.wrapper.jsx-111434248{min-height:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content.jsx-111434248{margin-top:70px;}.menu.jsx-111434248{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:fixed;top:56px;background:#272727;width:240px;}.menu2.jsx-111434248{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:relative;top:56px;background:#272727;width:240px;}.menuContainer.jsx-111434248{min-height:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:240px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGYyxBQUdpQixBQU1ELEFBWUcsQUFjRSxBQUtMLEFBUUksQUFPQyxBQUtBLEFBU0MsQUFLUyxBQUtWLEFBb0JBLEFBU21ELEFBT3ZELEFBT0EsQUFJRSxBQU9ELEFBSUMsQUFLTSxBQUtSLEFBTUUsQUFXQyxBQVNHLEFBYVYsQUFTQyxBQUtFLEFBV0ssQUFRQSxBQUlILEFBVUEsQUFVRyxXQXpPSCxDQU55QixBQXVMekIsQUFTakIsRUFoRm1CLENBaURKLENBaklDLEFBb0JkLEFBa0dpQixBQTBESCxBQVFoQixBQXdCZ0IsQ0E5TkYsQ0F1Q0ksQUFtQlYsQUFvQmEsQUEwRVgsQ0F4R0UsS0FXRCxBQThGRSxFQVRELEVBaklWLEFBZ0xvQixBQWdDQSxDQTlOUCxBQWdEZixBQUlrQixFQTBDcUQsRUFuQzlELEFBeUVTLEFBcUJQLENBVE8sQ0F6R0EsRUF1Q0MsR0FsQlQsQUE4Rk0sTUFyR2hCLEFBMElpQixBQWdDQSxFQWpQRixBQStFRixBQW9GRixDQVpRLEVBN0ZFLEFBdUVyQixDQTRDb0IsRUE1RUMsQ0FtRWMsQ0E5Q25DLEFBSWlCLEFBV08sQ0F6RkcsRUEzQ3pCLEFBK0VrQixPQXdFUCxFQXNCNkIsQ0F0RXJCLEFBbUJOLENBaEVLLENBb0ZBLEVBN0N3QyxDQTlEdkMsQUFnS00sQUF1QkQsQUFVQSxHQXBKZCxDQXdFRyxHQTdCc0IsSUF0SFgsQ0FpTEksQ0FyR2xCLEFBK0RaLENBckZpQixBQTZDQyxJQWlEbEIsS0EyQytCLENBbEhWLEVBOEJFLEVBeUJILENBdkhJLEFBMEN4QixDQTZDeUMsR0FuR3pCLEtBc0hoQixBQTJEa0MsTUE3Q2xDLENBbkllLENBME1XLEFBZ0NBLENBaEkxQixHQW9GdUIsQ0FqQ04sS0E1SlAsQ0EwRkUsS0F6RkEsRUE0SlosSUFsRUEsQUFxRjBCLENBcEpqQixBQXNFVCxDQWhHVyxPQUNELENBZ05PLEFBVUEsSUF6TGYsRUF5RkYsT0F1Rm1CLEFBVUcsS0FuSlAsTUE3Q2YsSUF1TGEsQ0ExTUEsRUFvTkEsQ0EzTlgsS0FrTnFCLEdBMU1NLEFBb05OLENBbENHLEtBeEJRLEFBb0NsQyxBQWdDZ0IsVUFuQkEsRUFvQmQsQ0FWYyxJQWxDZSxJQWxMZCxDQW9LQSxBQXVDZixHQVVBLFVBaERGLENBcEtTLFFBa0xjLEVBcEhFLHVCQTdEVSxpQ0FDUixZQXVKb0IsdUJBMEJoQyxVQXBIRyxDQXFIbEIsT0ExQnVDLFNBMUZyQixpQkFDTSxpQkE5RFYsS0FnRTJCLCtEQXdGZixHQXZKeEIsa0JBZ0VGLENBd0ZBIiwiZmlsZSI6IkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IFRha3VtYSBmcm9tIFwiLi4vc3RhdGljL1Rha3VtYS5qcGVnXCJcclxuaW1wb3J0IFlva2FpIGZyb20gXCIuLi9zdGF0aWMveW9rYWkucG5nXCJcclxuaW1wb3J0IEthb3J1IGZyb20gXCIuLi9zdGF0aWMva2FvcnUucG5nXCJcclxuaW1wb3J0IEljb24gZnJvbSBcIi4uL3N0YXRpYy9pY29uLnBuZ1wiXHJcbmltcG9ydCBDb21lIGZyb20gXCIuLi9zdGF0aWMvY29tZS5qcGdcIlxyXG5pbXBvcnQgTmluamEgZnJvbSBcIi4uL3N0YXRpYy9uaW5qYS5wbmdcIlxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrID0gdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7bWVudVZpc2libGU6IGZhbHNlfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHttZW51VmlzaWJsZTogIXRoaXMuc3RhdGUubWVudVZpc2libGV9KVxyXG5cdH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICA8PlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VDb250ZW50XCI+XHJcbiAgICA8ZGl2IGlkPVwicmlnaHRcIiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50aGVhZGVyXCI+UmVjZW50IEFydHdvcms8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvYXJ0d29yaycsIHF1ZXJ5OiB7IGlkOiAnMicgfSB9fSBhcz0nL2FydHdvcmsvMi9Zb2thaS1UYWt1bWEnPlxyXG4gICAgICAgIDxhPjxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48ZGl2IGNsYXNzTmFtZT1cImltZ19fZGVzY3JpcHRpb25cIj48ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbmZvXCI+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Zb2thaSBUYWt1bWE8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+YnkgVFZfdGhhcmk8L3NwYW4+PC9maWdjYXB0aW9uPjwvZGl2PjwvZmlndXJlPlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0ljb259PjwvaW1nPjxkaXYgY2xhc3NOYW1lPVwiaW1nX19kZXNjcmlwdGlvblwiPjxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImluZm9cIj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPllva2FpIFRha3VtYTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5ieSBUVl90aGFyaTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9kaXY+PC9maWd1cmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PGRpdiBjbGFzc05hbWU9XCJpbWdfX2Rlc2NyaXB0aW9uXCI+PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW5mb1wiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WW9rYWkgVGFrdW1hPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPmJ5IFRWX3RoYXJpPC9zcGFuPjwvZmlnY2FwdGlvbj48L2Rpdj48L2ZpZ3VyZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRoZWFkZXJcIj5SZWNlbnQgT2ZmZXJzPC9zcGFuPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17S2FvcnV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17TmluamF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtJY29ufT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0thb3J1fT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1Rha3VtYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtZb2thaX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtDb21lfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICBcclxuXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50aGVhZGVyXCI+UmVjZW50IE9mZmVyczwvc3Bhbj4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e1lva2FpfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17VGFrdW1hfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0thb3J1fT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e05pbmphfT48L2ltZz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNwdGVzdFwiPjxpbWcgY2xhc3NOYW1lPVwiY3B0ZXN0SW1hZ2VcIiBzcmM9e0NvbWV9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17SWNvbn0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtLYW9ydX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtUYWt1bWF9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17WW9rYWl9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3B0ZXN0XCI+PGltZyBjbGFzc05hbWU9XCJjcHRlc3RJbWFnZVwiIHNyYz17Q29tZX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcHRlc3RcIj48aW1nIGNsYXNzTmFtZT1cImNwdGVzdEltYWdlXCIgc3JjPXtOaW5qYX0+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgLm5hdnBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICA8c3R5bGUganN4PntgXHJcbiAgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI19fbmV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZsZXg6MTtcclxuICB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6MTZweDtcclxuICBoZWlnaHQ6IDEwMCU7ICAvKmFsbG93cyBib3RoIGNvbHVtbnMgdG8gc3BhbiB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgd2luZG93Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcclxuICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gIH1cclxuXHJcbiAgLnBhZ2VDb250ZW50e1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbi5jcHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleDogMTtcclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gIC5jcHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5jcHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uY3B0ZXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTZweDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4uY3B0ZXN0OmhvdmVyIC5pbWdfX2Rlc2NyaXB0aW9uIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jcHRlc3RJbWFnZSB7XHJcbiAgbWF4LXdpZHRoOmNhbGMoMTAwdncgLSAzMnB4KTsgXHJcbiAgbWF4LWhlaWdodDoyNTBweDtcclxufVxyXG5cclxuLmltZ19fZGVzY3JpcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgbWFyZ2luOjBweDtcclxuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbWF4LWhlaWdodDoyNTBweDtcclxuICBtaW4taGVpZ2h0OjI1MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgLyogdHJhbnNpdGlvbiBlZmZlY3QuIG5vdCBuZWNlc3NhcnkgKi9cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDUsNiw2LDApLHJnYmEoNSw2LDYsLjk1KSk7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuX3NhbnNfYm9sZCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoNSw2LDYsLjUpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICBmb250LWZhbWlseTogb3Blbl9zYW5zX2JvbGQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG59XHJcblxyXG4jcmlnaHQge1xyXG4gIGZsZXgtc2hyaW5rOiAwOyBcclxufVxyXG5cclxuI2xlZnQge1xyXG4gICAgZmxleC1zaHJpbms6IDA7ICAvKm1ha2VzIHN1cmUgdGhhdCBjb250ZW50IGlzIG5vdCBjdXQgb2ZmIGluIGEgc21hbGxlciBicm93c2VyIHdpbmRvdyovXHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgd2lkdGg6MjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDExJSk7XHJcbn1cclxuXHJcbi50b3AtbGVmdCB7XHJcbiAgICBmbGV4LXNoaW5rOiAwO1xyXG59XHJcblxyXG4udG9wLXJpZ2h0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50aGVhZGVye1xyXG4gIG1heC1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXJnaW46YXV0bztcclxuICBjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbiAgLmFwcC1kcmF3ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMTIwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHZpc2liaWxpdHk7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgcGFkZGluZzogMTIwcHggMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG4ud3JhcHBlcjIge1xyXG5oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuLmltYWdldGVzdHtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuXHJcbi5pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51Q29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuXHJcbmB9PC9zdHlsZT5cclxuPC8+XHJcbil9fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcbiJdfQ== */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ab77ba7a4ddc01e9dc74.hot-update.js.map