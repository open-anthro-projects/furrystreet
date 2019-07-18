module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/artwork.js":
/*!**************************!*\
  !*** ./pages/artwork.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_yokai_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/yokai.png */ "./static/yokai.png");
/* harmony import */ var _static_yokai_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_yokai_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_kaoru_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/kaoru.png */ "./static/kaoru.png");
/* harmony import */ var _static_kaoru_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_kaoru_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_test_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/test.png */ "./static/test.png");
/* harmony import */ var _static_test_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_test_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_test3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/test3.png */ "./static/test3.png");
/* harmony import */ var _static_test3_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_test3_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_ad300250_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/ad300250.png */ "./static/ad300250.png");
/* harmony import */ var _static_ad300250_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_ad300250_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_kemukujara_1992_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/kemukujara-1992.gif */ "./static/kemukujara-1992.gif");
/* harmony import */ var _static_kemukujara_1992_gif__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_kemukujara_1992_gif__WEBPACK_IMPORTED_MODULE_12__);














var Artwork =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Artwork, _Component);

  function Artwork() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Artwork);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Artwork).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Artwork, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
        className: "jsx-4270697069" + " " + "test"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "jsx-4270697069" + " " + "imagetest"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "sidecolumn"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "side"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _static_ad300250_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-4270697069" + " " + "adtest"
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "primary-info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-4270697069"
      }, "Yokai Takuma"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "views"
      }, "0 views"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favorite"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-4270697069" + " " + "material-icons md-grey articon"
      }, "favorite"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favcounter"
      }, "0")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favorite"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-4270697069" + " " + "material-icons md-grey articon"
      }, "share"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favcounter"
      }, "Share")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favorite"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-4270697069" + " " + "material-icons md-grey articon"
      }, "remove_circle"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favcounter"
      }, "Request takedown")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favorite"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "jsx-4270697069" + " " + "material-icons md-grey articon"
      }, "report"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "favcounter"
      }, "Report problem")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069" + " " + "primary-info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-4270697069"
      }, "Artist:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-4270697069"
      }, "TV_Thari"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-4270697069"
      }, "Featuring:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4270697069"
      }, "Takuma from ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _static_kemukujara_1992_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
        className: "jsx-4270697069" + " " + "avatar"
      }), " Kemukujara-1992"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1780029922"
      }, ".navposition{position:fixed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGFydHdvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0Z5QixBQUdvQixlQUNqQiIsImZpbGUiOiJGOlxcY29tbXVuaXR5LXdlYnNpdGUtYWxwaGFcXHBhZ2VzXFxhcnR3b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFlva2FpIGZyb20gXCIuLi9zdGF0aWMveW9rYWkucG5nXCJcclxuaW1wb3J0IEthb3J1IGZyb20gXCIuLi9zdGF0aWMva2FvcnUucG5nXCJcclxuaW1wb3J0IFRlc3QgZnJvbSBcIi4uL3N0YXRpYy90ZXN0LnBuZ1wiXHJcbmltcG9ydCBUZXN0MyBmcm9tIFwiLi4vc3RhdGljL3Rlc3QzLnBuZ1wiXHJcbmltcG9ydCBhZDMwMDI1MCBmcm9tIFwiLi4vc3RhdGljL2FkMzAwMjUwLnBuZ1wiXHJcbmltcG9ydCBpY29uIGZyb20gXCIuLi9zdGF0aWMva2VtdWt1amFyYS0xOTkyLmdpZlwiXHJcblxyXG5jbGFzcyBBcnR3b3JrIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IGlkIH0gfSkge1xyXG4gICAgcmV0dXJuIHsgcG9zdElkOiBpZCB9XHJcbiAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInRlc3RcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZXRlc3RcIiBzcmM9e1lva2FpfT48L2ltZz5cclxuICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVjb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFkdGVzdFwiIHNyYz17YWQzMDAyNTB9PjwvaW1nPlxyXG5cdFx0XHRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktaW5mb1wiPlxyXG4gICAgICA8aDE+WW9rYWkgVGFrdW1hPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3c1wiPlxyXG4gICAgICAgICAgMCB2aWV3c1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC1ncmV5IGFydGljb25cIj5cclxuICAgICAgICAgICAgZmF2b3JpdGVcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdmNvdW50ZXJcIj5cclxuICAgICAgICAgIDBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC1ncmV5IGFydGljb25cIj5cclxuICAgICAgICAgICAgc2hhcmVcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdmNvdW50ZXJcIj5cclxuICAgICAgICAgIFNoYXJlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtZ3JleSBhcnRpY29uXCI+XHJcbiAgICAgICAgICByZW1vdmVfY2lyY2xlXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZjb3VudGVyXCI+XHJcbiAgICAgICAgICBSZXF1ZXN0IHRha2Vkb3duXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtZ3JleSBhcnRpY29uXCI+XHJcbiAgICAgICAgICByZXBvcnRcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdmNvdW50ZXJcIj5cclxuICAgICAgICAgIFJlcG9ydCBwcm9ibGVtXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1pbmZvXCI+XHJcbiAgICAgICAgPGgyPkFydGlzdDo8L2gyPlxyXG4gICAgICAgIDxoMj5UVl9UaGFyaTwvaDI+XHJcbiAgICAgICAgPGgyPkZlYXR1cmluZzo8L2gyPlxyXG4gICAgICAgIDxkaXY+VGFrdW1hIGZyb20gPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e2ljb259PjwvaW1nPiBLZW11a3VqYXJhLTE5OTI8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgLm5hdnBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCBhdXRvIDE2cHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMjAsIGF1dG8pO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgd2lkdGg6NTBweDtcclxuICBoZWlnaHQ6NTBweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zLm1kLWdyZXkgeyBjb2xvcjogI2FhYWFhYTsgfVxyXG5cclxuZmlndXJle1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDg4cHgpO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBncmlkLWNvbHVtbjogMSAvIDQ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG9yZGVyOjE7XHJcbn1cclxuXHJcbi5hcnRpY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogQWRqdXN0IHRoZXNlIHZhbHVlcyBhY2NvcmRpbmdseSAqL1xyXG4gIHRvcDogM3B4O1xyXG4gIGxlZnQ6IDNweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG5cclxuLmZhdmNvdW50ZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJpbWFyeS1pbmZve1xyXG4gIGdyaWQtY29sdW1uOiAgMiAvIDM7XHJcbiAgb3JkZXI6MjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmEyYTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5oMXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbmgye1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuaDN7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uaW5mb3tcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBjb2xvcjojYWFhYWFhO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG5cclxufVxyXG5cclxuLmZhdm9yaXRle1xyXG4gIGZsZXg6MTtcclxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kOyAgXHJcbn1cclxuXHJcbi52aWV3c3tcclxuICBmbGV4OjE7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4uY29udGFpbmVyIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cHggcmVwZWF0KDE0LCBhdXRvKSAxNnB4IHJlcGVhdCg0LCA4MHB4KTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyMCwgYXV0byk7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBncmlkLWNvbHVtbjogMSAvIDE3O1xyXG59XHJcblxyXG4ucHJpbWFyeS1pbmZvIHtcclxuICBncmlkLWNvbHVtbjogMiAvIDE2O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmEyYTJhO1xyXG59XHJcblxyXG5oMXtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxufVxyXG5cclxuLmltYWdldGVzdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDg4cHgpO1xyXG4gIGFsaWduLXNlbGY6Y2VudGVyO1xyXG59XHJcblxyXG4uYWR0ZXN0e1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gODhweCk7XHJcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcGFkZGluZy10b3A6MWVtO1xyXG59XHJcblxyXG4udGVzdDk5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50ZXN0MTAwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBvdmVyZmxvdy15OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbiAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG59XHJcblxyXG4udGVzdDEwMntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZmxleDowIDAgNzUlO1xyXG59XHJcbi50ZXN0MTA0e1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBmbGV4OjAgMCA3NSU7XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbi5sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIC8qcGxhY2VzIHRoZSBsZWZ0IGFuZCByaWdodCBoZWFkZXJzIGFib3ZlIHRoZSBib3R0b20gY29udGVudCovXHJcbiAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xyXG4gIC13ZWJraXQtZmxleDogMTtcclxuICBmbGV4OiAwIDAgMTAwJTtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIGZsZXgtYmFzaXM6IDc5JTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIFxyXG59XHJcbiAgfVxyXG5cclxuLnN1Ym1pc3Npb257XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbi5zdWJtaXNzaW9ue1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGZsZXg6IDEgMSA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcclxuICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xyXG4gIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1ncm93OiAxOyAgLyplbnN1cmVzIHRoYXQgdGhlIGNvbnRhaW5lciB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyKi9cclxuICBvdmVyZmxvdy15OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbn1cclxuXHJcbn1cclxuXHJcbi5zaWRlY29sdW1uIHtcclxuICBoZWlnaHQ6IDEwMCU7ICAvKmFsbG93cyBib3RoIGNvbHVtbnMgdG8gc3BhbiB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgd2luZG93Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICBvcmRlcjozO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcblxyXG4uc2lkZWNvbHVtbiB7XHJcbiAgaGVpZ2h0OiAxMDAlOyAgLyphbGxvd3MgYm90aCBjb2x1bW5zIHRvIHNwYW4gdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBicm93c2VyIHdpbmRvdyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLypwbGFjZXMgdGhlIGxlZnQgYW5kIHJpZ2h0IGhlYWRlcnMgYWJvdmUgdGhlIGJvdHRvbSBjb250ZW50Ki9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgwLCAwJSwgMTElKTtcclxuICBncmlkLWNvbHVtbjogMTcgLyAyMTtcclxuICBncmlkLXJvdzogMSAvIDQ7XHJcbn1cclxuXHJcbn1cclxuXHJcbi5zaWRlIHtcclxuICBvdmVyZmxvdy15OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxufVxyXG5cclxuLnRlc3Qze1xyXG4gIGZsZXg6IDEgMSA4MCU7XHJcbn1cclxuXHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG5cclxuXHJcbiAgICAgIDwvPjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQXJ0d29yazsiXX0= */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\artwork.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1289144102"
      }, ".container.jsx-4270697069{display:grid;width:100%;overflow-y:auto;grid-template-columns:16px auto 16px;grid-template-rows:repeat(20,auto);grid-auto-flow:row;}.avatar.jsx-4270697069{width:50px;height:50px;}.material-icons.md-grey.jsx-4270697069{color:#aaaaaa;}figure.jsx-4270697069{margin:0px;max-height:calc(100vh - 88px);}.content.jsx-4270697069{grid-column:1 / 4;text-align:center;margin-left:auto;margin-right:auto;-webkit-order:1;-ms-flex-order:1;order:1;}.articon.jsx-4270697069{position:relative;top:3px;left:3px;font-size:20px;padding-right:8px;}.favcounter.jsx-4270697069{display:inline-block;}.primary-info.jsx-4270697069{grid-column:2 / 3;-webkit-order:2;-ms-flex-order:2;order:2;border-bottom:1px solid #2a2a2a;padding-bottom:8px;}h1.jsx-4270697069{color:#fff;font-size:1.2rem;font-weight:400;margin:0px;padding-top:16px;}h2.jsx-4270697069{color:#fff;font-size:0.9rem;font-weight:400;margin:0px;padding-top:16px;}h3.jsx-4270697069{color:#fff;font-size:0.9rem;font-weight:400;margin:0px;padding-top:16px;}.info.jsx-4270697069{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;color:#aaaaaa;font-size:1.1rem;line-height:2rem;}.favorite.jsx-4270697069{-webkit-flex:1;-ms-flex:1;flex:1;justify-self:flex-end;}.views.jsx-4270697069{-webkit-flex:1;-ms-flex:1;flex:1;font-weight:400;}@media (min-width:1025px){.container.jsx-4270697069{grid-template-columns:16px repeat(14,auto) 16px repeat(4,80px);grid-template-rows:repeat(20,auto);grid-auto-flow:row;}.content.jsx-4270697069{margin-top:1em;margin-bottom:1em;grid-column:1 / 17;}.primary-info.jsx-4270697069{grid-column:2 / 16;border-top:1px solid #2a2a2a;}h1.jsx-4270697069{padding-top:16px;}}.imagetest.jsx-4270697069{max-width:100%;height:auto;max-height:calc(100vh - 88px);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.adtest.jsx-4270697069{max-width:100%;height:auto;max-height:calc(100vh - 88px);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;padding-top:1em;}.test99.jsx-4270697069{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.test100.jsx-4270697069{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;overflow-y:auto;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.test102.jsx-4270697069{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;margin-right:auto;margin-left:auto;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;}.test104.jsx-4270697069{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;margin-right:auto;margin-left:auto;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;}@media (min-width:1024px){.layout.jsx-4270697069{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0.000000001px;-webkit-flex:1;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-flex-basis:0.000000001px;-webkit-flex-basis:0.000000001px;-ms-flex-preferred-size:0.000000001px;flex-basis:0.000000001px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-flex-basis:79%;-ms-flex-preferred-size:79%;flex-basis:79%;overflow-y:auto;}}@media (min-width:1024px){.submission.jsx-4270697069{height:100%;-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0.000000001px;-webkit-flex:1;-webkit-flex-basis:0.000000001px;-webkit-flex-basis:0.000000001px;-ms-flex-preferred-size:0.000000001px;flex-basis:0.000000001px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}}.sidecolumn.jsx-4270697069{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;grid-column:2 / 3;-webkit-order:3;-ms-flex-order:3;order:3;}@media (min-width:1025px){.sidecolumn.jsx-4270697069{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:hsl(0,0%,11%);grid-column:17 / 21;grid-row:1 / 4;}}.side.jsx-4270697069{overflow-y:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.test3.jsx-4270697069{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGFydHdvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZrQixBQUlnQixBQVNILEFBSTJCLEFBRzFCLEFBS08sQUFRQSxBQVVHLEFBSUYsQUFPUixBQVFBLEFBUUEsQUFRRCxBQVVKLEFBS0EsQUFNMkQsQUFNbEQsQUFNSSxBQUtGLEFBTUYsQUFPQSxBQVNGLEFBSUEsQUFTRCxBQVFBLEFBYUMsQUFzQkYsQUFlQyxBQVVBLEFBV0ksQUFRSCxXQWhPRixBQU9rQixBQWtDWixBQVFBLEFBUUEsQUFRSixDQW9IQSxBQWVBLEFBVUEsQ0F2TkgsQ0FZNEIsQ0F5RnBCLEFBaUJOLEFBT0EsQ0FxR00sQ0FsSHBCLENBM0ZtQixBQVNULEFBYUQsQ0FnRXNCLEVBcEUvQixFQTdCQSxDQVRrQixFQThCUCxDQXdGb0IsQUFPQSxDQTNFYixBQVFBLEFBUUEsS0FpQk0sQUFLTixBQWFHLEVBdEVKLENBVkUsSUFwQm9CLENBZXZDLEdBbUNZLEFBUUEsQUFRQSxJQXdDWixDQWxCQSxDQXpEb0IsQ0F5TXBCLENBbklBLENBaEZvQixFQThCRCxBQVFBLEFBUUEsQUFnQm5CLEVBbUNtQixBQU9BLEVBbkZlLElBbURJLEFBZ0d2QixLQTdKZixHQVZTLENBOEJULEFBUUEsQUFRQSxFQWdFQSxBQUlTLEFBU1UsQUFRQSxBQWFLLEdBcktjLFFBd0VqQixDQW1JRyxBQVVBLEtBM0tILENBdUdHLEFBUUEsTUE1REgsU0EyQ0osRUF3RkgsQ0FyTGQsRUExQ3FCLEFBcUJyQixLQXdFQSxXQXdCQSxBQU9hLEdBM0hiLE1BMkx3QixHQS9EUCxZQXdDWSxFQTdGZCxFQXNEZixRQVVxQixBQW1FRCxBQVVjLElBNUlmLEVBd0VDLEFBUUEsU0FhSCxHQXNDUixDQW9CZSxFQXRKTCxHQXdFQSxBQVFBLE1BYUgsQ0ErQ00sT0ExSXRCLEdBdUVjLEFBUUEsVUFrQ2UsQUEwQlosUUFWakIsT0FXQSxHQS9Fa0IsU0FxREQsTUF0QmtCLENBOUJULE9BVTFCLEFBUUEsQ0FtQ21DLElBbUNuQyxvQkF6RDJCLFNBdUJBLHdEQXJEM0IsK0JBK0JjLFNBdUJBLDhEQXRCRyxTQXVCQyxnQkFDbEIsZ0NBdkJxQiwwRUFDSixrRUFDQyxnQkFFbEIiLCJmaWxlIjoiRjpcXGNvbW11bml0eS13ZWJzaXRlLWFscGhhXFxwYWdlc1xcYXJ0d29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBZb2thaSBmcm9tIFwiLi4vc3RhdGljL3lva2FpLnBuZ1wiXHJcbmltcG9ydCBLYW9ydSBmcm9tIFwiLi4vc3RhdGljL2thb3J1LnBuZ1wiXHJcbmltcG9ydCBUZXN0IGZyb20gXCIuLi9zdGF0aWMvdGVzdC5wbmdcIlxyXG5pbXBvcnQgVGVzdDMgZnJvbSBcIi4uL3N0YXRpYy90ZXN0My5wbmdcIlxyXG5pbXBvcnQgYWQzMDAyNTAgZnJvbSBcIi4uL3N0YXRpYy9hZDMwMDI1MC5wbmdcIlxyXG5pbXBvcnQgaWNvbiBmcm9tIFwiLi4vc3RhdGljL2tlbXVrdWphcmEtMTk5Mi5naWZcIlxyXG5cclxuY2xhc3MgQXJ0d29yayBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBpZCB9IH0pIHtcclxuICAgIHJldHVybiB7IHBvc3RJZDogaWQgfVxyXG4gIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ0ZXN0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2V0ZXN0XCIgc3JjPXtZb2thaX0+PC9pbWc+XHJcbiAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhZHRlc3RcIiBzcmM9e2FkMzAwMjUwfT48L2ltZz5cclxuXHRcdFx0XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmltYXJ5LWluZm9cIj5cclxuICAgICAgPGgxPllva2FpIFRha3VtYTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld3NcIj5cclxuICAgICAgICAgIDAgdmlld3NcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtZ3JleSBhcnRpY29uXCI+XHJcbiAgICAgICAgICAgIGZhdm9yaXRlXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZjb3VudGVyXCI+XHJcbiAgICAgICAgICAwXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtZ3JleSBhcnRpY29uXCI+XHJcbiAgICAgICAgICAgIHNoYXJlXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZjb3VudGVyXCI+XHJcbiAgICAgICAgICBTaGFyZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZVwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLWdyZXkgYXJ0aWNvblwiPlxyXG4gICAgICAgICAgcmVtb3ZlX2NpcmNsZVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2Y291bnRlclwiPlxyXG4gICAgICAgICAgUmVxdWVzdCB0YWtlZG93blxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLWdyZXkgYXJ0aWNvblwiPlxyXG4gICAgICAgICAgcmVwb3J0XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZjb3VudGVyXCI+XHJcbiAgICAgICAgICBSZXBvcnQgcHJvYmxlbVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktaW5mb1wiPlxyXG4gICAgICAgIDxoMj5BcnRpc3Q6PC9oMj5cclxuICAgICAgICA8aDI+VFZfVGhhcmk8L2gyPlxyXG4gICAgICAgIDxoMj5GZWF0dXJpbmc6PC9oMj5cclxuICAgICAgICA8ZGl2PlRha3VtYSBmcm9tIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXtpY29ufT48L2ltZz4gS2VtdWt1amFyYS0xOTkyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gIC5uYXZwb3NpdGlvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cHggYXV0byAxNnB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIwLCBhdXRvKTtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIHdpZHRoOjUwcHg7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucy5tZC1ncmV5IHsgY29sb3I6ICNhYWFhYWE7IH1cclxuXHJcbmZpZ3VyZXtcclxuICBtYXJnaW46IDBweDtcclxuICBtYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSA4OHB4KTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBvcmRlcjoxO1xyXG59XHJcblxyXG4uYXJ0aWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIEFkanVzdCB0aGVzZSB2YWx1ZXMgYWNjb3JkaW5nbHkgKi9cclxuICB0b3A6IDNweDtcclxuICBsZWZ0OiAzcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuXHJcbi5mYXZjb3VudGVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnByaW1hcnktaW5mb3tcclxuICBncmlkLWNvbHVtbjogIDIgLyAzO1xyXG4gIG9yZGVyOjI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYTJhMmE7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxufVxyXG5cclxuaDF7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW46MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG5oMntcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbmgze1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmluZm97XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgY29sb3I6I2FhYWFhYTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuXHJcbn1cclxuXHJcbi5mYXZvcml0ZXtcclxuICBmbGV4OjE7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDsgIFxyXG59XHJcblxyXG4udmlld3N7XHJcbiAgZmxleDoxO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuLmNvbnRhaW5lciB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnB4IHJlcGVhdCgxNCwgYXV0bykgMTZweCByZXBlYXQoNCwgODBweCk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMjAsIGF1dG8pO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAxNztcclxufVxyXG5cclxuLnByaW1hcnktaW5mbyB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAxNjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzJhMmEyYTtcclxufVxyXG5cclxuaDF7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbi5pbWFnZXRlc3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSA4OHB4KTtcclxuICBhbGlnbi1zZWxmOmNlbnRlcjtcclxufVxyXG5cclxuLmFkdGVzdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDg4cHgpO1xyXG4gIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBhZGRpbmctdG9wOjFlbTtcclxufVxyXG5cclxuLnRlc3Q5OXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGVzdDEwMHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxufVxyXG5cclxuLnRlc3QxMDJ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGZsZXg6MCAwIDc1JTtcclxufVxyXG4udGVzdDEwNHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZmxleDowIDAgNzUlO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4ubGF5b3V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcclxuICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgZmxleDogMCAwIDEwMCU7XHJcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xyXG4gIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1ncm93OiAxOyAgLyplbnN1cmVzIHRoYXQgdGhlIGNvbnRhaW5lciB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyKi9cclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICBmbGV4LWJhc2lzOiA3OSU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBcclxufVxyXG4gIH1cclxuXHJcbi5zdWJtaXNzaW9ue1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4uc3VibWlzc2lvbntcclxuICBoZWlnaHQ6MTAwJTtcclxuICBmbGV4OiAxIDEgODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XHJcbiAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xyXG4gIGZsZXgtZ3JvdzogMTsgIC8qZW5zdXJlcyB0aGF0IHRoZSBjb250YWluZXIgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lciovXHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG59XHJcblxyXG59XHJcblxyXG4uc2lkZWNvbHVtbiB7XHJcbiAgaGVpZ2h0OiAxMDAlOyAgLyphbGxvd3MgYm90aCBjb2x1bW5zIHRvIHNwYW4gdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBicm93c2VyIHdpbmRvdyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLypwbGFjZXMgdGhlIGxlZnQgYW5kIHJpZ2h0IGhlYWRlcnMgYWJvdmUgdGhlIGJvdHRvbSBjb250ZW50Ki9cclxuICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgb3JkZXI6MztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG5cclxuLnNpZGVjb2x1bW4ge1xyXG4gIGhlaWdodDogMTAwJTsgIC8qYWxsb3dzIGJvdGggY29sdW1ucyB0byBzcGFuIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgYnJvd3NlciB3aW5kb3cqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIC8qcGxhY2VzIHRoZSBsZWZ0IGFuZCByaWdodCBoZWFkZXJzIGFib3ZlIHRoZSBib3R0b20gY29udGVudCovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDExJSk7XHJcbiAgZ3JpZC1jb2x1bW46IDE3IC8gMjE7XHJcbiAgZ3JpZC1yb3c6IDEgLyA0O1xyXG59XHJcblxyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbn1cclxuXHJcbi50ZXN0M3tcclxuICBmbGV4OiAxIDEgODAlO1xyXG59XHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcblxyXG4gICAgICA8Lz47XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEFydHdvcms7Il19 */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\artwork.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var id = _ref.query.id;
      return {
        postId: id
      };
    }
  }]);

  return Artwork;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Artwork);

/***/ }),

/***/ "./static/ad300250.png":
/*!*****************************!*\
  !*** ./static/ad300250.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAD6CAIAAACUD+2kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAk3SURBVHhe7dxtYps4AEXRWVcWlPV0Nd1MFtMBTBp/IIFA+DnNOb+maSyEpOvGrjv//QGiRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoSwfzzC3+//LXv79TF/C4SJEMJOivDj19t82pc9qwER8vrOiXCtwadFIEJe3ykRrjf4rApEyOs7I8Liyb/1/nv+/hOJkNd3QoQbG3xKhSLk9fWPcHODz6hQhLy+7hE2NPiECkXI6+sdYVOD51coQl5f3wi3vC1661gMHx+/f72/vd1cdPjl+6/fH5dhAxGOc/r1Ps7qfi3GL729D5P7nN1RC7c/3vxw9/M3bPMxjDPNeZr0wg5OXx5+u8vMi+tzucg4++ZrrAzZa73P0jXCcoPDCs3/dW9nDR+/iyP+NZ7HJ0Y4Tml1TlfGXpZzqazj/JPDVN/8tUXD2Ks3OFymZb5fihOvWZ3yrU3XaBlz16Sfo2eEtbNT/r32HMpjbdc3wi1PCQVLP5DXI9x+sWHZ5xEXNb50uPO2MvqV3ctT2aV9YzZM+ok6RrhydDpVuP+43+gY4bHnhLYIhx+u2i62NPynYxGONqzigeen8viHlrzj1nfSL8J6g9WTtXlVjp33a7124vCM2iLcoZzh8QhX1/HgJRZH77A6taemgG4Rlpf7844PV9jzbPaJ8KTz0DXC8q32iLB2oI/fxsLU+0z6tTLsFWFxba7WsbIpG9ZkbUunF95Xeza+51d+2d4lwsqULu+63FxjmtDDjNojvB+6ep+Twure7Nkw6Djq7apc3jetD15aydb9mu/j5kEPY1cSfNz/6g/Cr1Rhpwi3NFjdl9U1qT4DFpPaNq+dyrezdjfj+Zgf2xZhedrVM788n3Fxym/R3hgmPA/1aHlO+/ZrdPWccvd9tQUvDFieRo8T0EmfCLee9f0V1va08tCtE9vl4AZfDltbhLVVqmW4sroblEdfutnaXDZN5vLH2O3QpfWur3Zxl46vSS9dItx+1PdWWD7vOx+3KZMVlUkNPxzd/TDaYl+EtQl1uN2WpTzl+aA0gZV727uYT9QhwvJdtm1PZU32PWpwaoS1o/Zp+sTG9EmThuvtPTe7l+na9DpwfCU4Gj9yMpgHWbawlJWnp90nv3hzayOeega6OB5heecXb7JyUMqLUt7UlYU8dwMq91IwNbn6Z2R53JUDt3udLm8Ztd7NxePQlXXZ3WAt7J26nIEeDkfY2GB1h0qrsn9TT34WrExsRfX9kPKwK7fbvBnX74Ls9Tj07ueCiv1LXdTnDHRwNMK+a1NYlvaz9enkCA/e//DCcR7mVnnQvhH2+fTR49AibHMwwt5Ls7wujWfryukRDg4d5cV5PCXCcimNWobev+wiLOm2kX81Hsq1dXxGhIMjH5BcmMkTIlzbufHF6/AT8+BjVHvE4w2IsM2hCPs3OFg4Z5UNWDmVT4rw4vETH5s8TmV3hOUNuX1g7US/FV6sNizl/v0q270m38CRCE9pcHFRy1daiempEX6Z3uW//CvZ+Xo1Dze898BtXqY9y9LymN37VRHaymc4EGF5pQ96PGm7n1pfY+dWPsb4MJedEVY25PZxxfFrq9KylJX9Wtmwin+3wv0Rlrd826JsPjKjyq5Wr3bmxo1z2vbJy0n5Fh7mUv7WygluOPi7VqXpQbXJbFr6lo+tbRzyy2Xw3c8G3e2NsLLKW1ekqcLKN5cvOLxIK82ycduWfC3BphQbymr41tlwrObvWPBwrztOc+XP8sXH1CpcW/2va919X/UmN/2b+eu/Fv32EXZosLqmj4Os7Ort51Au/ypm/r1F22dZ9Dij6Z8kTG8nzt9yMfy69uPo42Eo3+v4rsnN6Jc7bbzV6lrefep191LWN2y8zs2WjVd6uJf7odfGnAa9W6HLwAur9N0jrCxGy+nuWGGrlmkWdJrQwlnoeauLN9p1LYtLWfuDa5tTT8E3j7CyEm2Hu6nC889mmy7TWTwJ/W60dJtPWsqjl1kc+njbF987wsrStp7ttgpbN6Dyv0VqneiC4we5NIlOiZQ+FTdpvMb4d/fzf96rL+WheykNXfvpfrNvHWFrOFXNg23d1MsL9eLw7TN9cOx41d7L6RHhhhvcepQPL+XHyqvKosrQqy9VV33nCLs2WB2utExr6391wM+McLD+rsWCan+TcoTDQ9evt+2NwslaHldDHV3KxqV6Gy+9OvD4jlfr+l82YOsKPcO+N2ZeweWttOsdGH61er7PcnkDbv5XsPN8/hq/Nn0Uc+PWVyK8PC3N7yPeXmm8xq7bX1rJ887pNPfLQs1X+zR+qWGVro2Dzv8j/Melm746DHzaLR31fSP8h61GyD9FhC9IhD+LCF+QCH8WEb4gEf4sInxBIvxZRPiCRPiziPAFifBnEeELEuHPIsIXJMKfRYQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCFMhBAmQggTIYSJEMJECGEihDARQpgIIUyEECZCCBMhhIkQwkQIYSKEMBFCmAghTIQQJkIIEyGEiRDCRAhhIoQwEUKYCCHqz5//ASi0/JDr/p5IAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/kaoru.png":
/*!**************************!*\
  !*** ./static/kaoru.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kaoru-768b878f66a7456aca0e34f86ff037ae.png";

/***/ }),

/***/ "./static/kemukujara-1992.gif":
/*!************************************!*\
  !*** ./static/kemukujara-1992.gif ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./static/test.png":
/*!*************************!*\
  !*** ./static/test.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/test-8bbfb5e7f5a6744112b75fadb42a8f4f.png";

/***/ }),

/***/ "./static/test3.png":
/*!**************************!*\
  !*** ./static/test3.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/yokai.png":
/*!**************************!*\
  !*** ./static/yokai.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/yokai-6a340cb7a0e0a48f85b3b5aafb7ec2f4.png";

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/artwork.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\community-website-alpha\pages\artwork.js */"./pages/artwork.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=artwork.js.map