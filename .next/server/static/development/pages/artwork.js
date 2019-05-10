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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
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
        className: "jsx-619349572" + " " + "layout"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-619349572" + " " + "submission"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
        className: "jsx-619349572" + " " + "test"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _static_yokai_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "jsx-619349572" + " " + "imagetest"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-619349572"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-619349572"
      }, this.props.postId))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-619349572" + " " + "sidecolumn"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-619349572" + " " + "side"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _static_ad300250_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        className: "jsx-619349572" + " " + "adtest"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "five"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "six"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "seven"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "eight"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "nine"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "ten"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "eleven"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twelve"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "thirteen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "fourteen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "fifteen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "sixteen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "seventeen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "eighteen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "nineteen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-one"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-two"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-three"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-four"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-five"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-six"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-seven"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-eight"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "twenty-nine"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-619349572"
      }, "thirty")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1780029922"
      }, ".navposition{position:fixed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGFydHdvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR5QixBQUdvQixlQUNqQiIsImZpbGUiOiJGOlxcY29tbXVuaXR5LXdlYnNpdGUtYWxwaGFcXHBhZ2VzXFxhcnR3b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFlva2FpIGZyb20gXCIuLi9zdGF0aWMveW9rYWkucG5nXCJcclxuaW1wb3J0IEthb3J1IGZyb20gXCIuLi9zdGF0aWMva2FvcnUucG5nXCJcclxuaW1wb3J0IFRlc3QgZnJvbSBcIi4uL3N0YXRpYy90ZXN0LnBuZ1wiXHJcbmltcG9ydCBUZXN0MyBmcm9tIFwiLi4vc3RhdGljL3Rlc3QzLnBuZ1wiXHJcbmltcG9ydCBhZDMwMDI1MCBmcm9tIFwiLi4vc3RhdGljL2FkMzAwMjUwLnBuZ1wiXHJcblxyXG5jbGFzcyBBcnR3b3JrIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IGlkIH0gfSkge1xyXG4gICAgcmV0dXJuIHsgcG9zdElkOiBpZCB9XHJcbiAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDw+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pc3Npb25cIj5cclxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJ0ZXN0XCI+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2V0ZXN0XCIgc3JjPXtZb2thaX0+PC9pbWc+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8aDE+e3RoaXMucHJvcHMucG9zdElkfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhZHRlc3RcIiBzcmM9e2FkMzAwMjUwfT48L2ltZz5cclxuXHRcdFx0XHQ8cD5maXZlPC9wPlxyXG5cdFx0XHRcdDxwPnNpeDwvcD5cclxuXHRcdFx0XHQ8cD5zZXZlbjwvcD5cclxuXHRcdFx0XHQ8cD5laWdodDwvcD5cclxuXHRcdFx0XHQ8cD5uaW5lPC9wPlxyXG5cdFx0XHRcdDxwPnRlbjwvcD5cclxuXHRcdFx0XHQ8cD5lbGV2ZW48L3A+XHJcblx0XHRcdFx0PHA+dHdlbHZlPC9wPlxyXG5cdFx0XHRcdDxwPnRoaXJ0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPmZvdXJ0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPmZpZnRlZW48L3A+XHJcblx0XHRcdFx0PHA+c2l4dGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5zZXZlbnRlZW48L3A+XHJcblx0XHRcdFx0PHA+ZWlnaHRlZW48L3A+XHJcblx0XHRcdFx0PHA+bmluZXRlZW48L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5PC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1vbmU8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXR3bzwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktdGhyZWU8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LWZvdXI8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LWZpdmU8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXNpeDwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktc2V2ZW48L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LWVpZ2h0PC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1uaW5lPC9wPlxyXG5cdFx0XHRcdDxwPnRoaXJ0eTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgLm5hdnBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbi5pbWFnZXRlc3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSA4OHB4KTtcclxuICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmFkdGVzdHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDg4cHgpO1xyXG4gIGFsaWduLXNlbGY6Y2VudGVyO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBhZGRpbmctdG9wOjFlbTtcclxufVxyXG5cclxuLnRlc3R7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXlvdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbi5sYXlvdXQge1xyXG4gIGhlaWdodDogMTAwJTsgIC8qYWxsb3dzIGJvdGggY29sdW1ucyB0byBzcGFuIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgYnJvd3NlciB3aW5kb3cqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgIC8qcGxhY2VzIHRoZSBsZWZ0IGFuZCByaWdodCBoZWFkZXJzIGFib3ZlIHRoZSBib3R0b20gY29udGVudCovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xyXG4gIC13ZWJraXQtZmxleDogMTtcclxuICBmbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xyXG4gIGZsZXgtZ3JvdzogMTsgIC8qZW5zdXJlcyB0aGF0IHRoZSBjb250YWluZXIgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lciovXHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiAgfVxyXG5cclxuLnN1Ym1pc3Npb257XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuLnN1Ym1pc3Npb257XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZmxleDogMSAxIDgwJTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XHJcbiAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xyXG4gIGZsZXgtZ3JvdzogMTsgIC8qZW5zdXJlcyB0aGF0IHRoZSBjb250YWluZXIgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lciovXHJcbiAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG59XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4uc2lkZWNvbHVtbiB7XHJcbiAgaGVpZ2h0OiAxMDAlOyAgLyphbGxvd3MgYm90aCBjb2x1bW5zIHRvIHNwYW4gdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBicm93c2VyIHdpbmRvdyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLypwbGFjZXMgdGhlIGxlZnQgYW5kIHJpZ2h0IGhlYWRlcnMgYWJvdmUgdGhlIGJvdHRvbSBjb250ZW50Ki9cclxuICBmbGV4OiAwIDAgMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgMCUsIDExJSk7XHJcbn1cclxuXHJcbn1cclxuXHJcbi5zaWRlIHtcclxuICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gIG92ZXJmbG93LXk6IGF1dG87ICAvKmFkZHMgc2Nyb2xsIHRvIHRoaXMgY29udGFpbmVyKi9cclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG59XHJcblxyXG4udGVzdDN7XHJcbiAgZmxleDogMSAxIDgwJTtcclxufVxyXG5cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG5cclxuICAgICAgPC8+O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBBcnR3b3JrOyJdfQ== */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\artwork.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1288186991"
      }, ".imagetest.jsx-619349572{max-width:100%;height:auto;max-height:calc(100vh - 88px);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.adtest.jsx-619349572{max-width:100%;height:auto;max-height:calc(100vh - 88px);-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;padding-top:1em;}.test.jsx-619349572{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;}.layout.jsx-619349572{width:100%;}@media (min-width:1024px){.layout.jsx-619349572{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;-ms-flex:1 1 0.000000001px;-webkit-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-basis:0.000000001px;-webkit-flex-basis:0.000000001px;-ms-flex-preferred-size:0.000000001px;flex-basis:0.000000001px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}}.submission.jsx-619349572{width:100%;}@media (min-width:1024px){.submission.jsx-619349572{height:100%;-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 0.000000001px;-webkit-flex:1;-webkit-flex-basis:0.000000001px;-webkit-flex-basis:0.000000001px;-ms-flex-preferred-size:0.000000001px;flex-basis:0.000000001px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}}@media (min-width:1024px){.sidecolumn.jsx-619349572{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:0 0 25rem;-ms-flex:0 0 25rem;flex:0 0 25rem;background-color:hsl(0,0%,11%);}}.side.jsx-619349572{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.test3.jsx-619349572{-webkit-flex:1 1 80%;-ms-flex:1 1 80%;flex:1 1 80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXGFydHdvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERrQixBQUlrQixBQVFBLEFBU0ksQUFNUixBQUtDLEFBZUYsQUFNQyxBQWtCQyxBQVVBLEFBUUMsV0E3RGYsQUFvQkEsQ0FmZSxBQXFCQSxBQWtCQSxHQW5FRCxBQVFBLFlBUGlCLEFBUUEsd0JBNEUvQixNQW5GbUIsQUFRQSxNQXdDUCxRQTJCTSxHQTFCSCxZQXRCTSxBQXVDRyxDQVVKLE1BN0ROLG1DQWRELEFBUUEsWUFQYixBQVFpQixRQXdDTyxPQXRCWCxDQWpCYixRQXdEaUIsRUF0Q1ksQ0FiVixhQTZETCxLQTVEZCxRQWFpQixlQUNSLGFBcUN5QixLQWpCTCxlQW5CTSxXQXFDbkMsQ0FqQmlCLENBMEJPLGNBekJXLE1BcEJSLDJCQXFCQSwrQkF5QjNCLHNDQTdDYywyQkFxQkEsNENBcEJHLDJCQXFCQyxnQkFDbEIsY0FyQkEiLCJmaWxlIjoiRjpcXGNvbW11bml0eS13ZWJzaXRlLWFscGhhXFxwYWdlc1xcYXJ0d29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBZb2thaSBmcm9tIFwiLi4vc3RhdGljL3lva2FpLnBuZ1wiXHJcbmltcG9ydCBLYW9ydSBmcm9tIFwiLi4vc3RhdGljL2thb3J1LnBuZ1wiXHJcbmltcG9ydCBUZXN0IGZyb20gXCIuLi9zdGF0aWMvdGVzdC5wbmdcIlxyXG5pbXBvcnQgVGVzdDMgZnJvbSBcIi4uL3N0YXRpYy90ZXN0My5wbmdcIlxyXG5pbXBvcnQgYWQzMDAyNTAgZnJvbSBcIi4uL3N0YXRpYy9hZDMwMDI1MC5wbmdcIlxyXG5cclxuY2xhc3MgQXJ0d29yayBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBpZCB9IH0pIHtcclxuICAgIHJldHVybiB7IHBvc3RJZDogaWQgfVxyXG4gIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8PiBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXNzaW9uXCI+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwidGVzdFwiPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdldGVzdFwiIHNyYz17WW9rYWl9PjwvaW1nPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgPGgxPnt0aGlzLnByb3BzLnBvc3RJZH08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWR0ZXN0XCIgc3JjPXthZDMwMDI1MH0+PC9pbWc+XHJcblx0XHRcdFx0PHA+Zml2ZTwvcD5cclxuXHRcdFx0XHQ8cD5zaXg8L3A+XHJcblx0XHRcdFx0PHA+c2V2ZW48L3A+XHJcblx0XHRcdFx0PHA+ZWlnaHQ8L3A+XHJcblx0XHRcdFx0PHA+bmluZTwvcD5cclxuXHRcdFx0XHQ8cD50ZW48L3A+XHJcblx0XHRcdFx0PHA+ZWxldmVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZWx2ZTwvcD5cclxuXHRcdFx0XHQ8cD50aGlydGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5mb3VydGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5maWZ0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPnNpeHRlZW48L3A+XHJcblx0XHRcdFx0PHA+c2V2ZW50ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPmVpZ2h0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPm5pbmV0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eTwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktb25lPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS10d288L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXRocmVlPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1mb3VyPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1maXZlPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1zaXg8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXNldmVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1laWdodDwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktbmluZTwvcD5cclxuXHRcdFx0XHQ8cD50aGlydHk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gIC5uYXZwb3NpdGlvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uaW1hZ2V0ZXN0e1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gODhweCk7XHJcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5hZHRlc3R7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSA4OHB4KTtcclxuICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICBtYXJnaW46YXV0bztcclxuICBwYWRkaW5nLXRvcDoxZW07XHJcbn1cclxuXHJcbi50ZXN0e1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4ubGF5b3V0IHtcclxuICBoZWlnaHQ6IDEwMCU7ICAvKmFsbG93cyBib3RoIGNvbHVtbnMgdG8gc3BhbiB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgd2luZG93Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcclxuICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4gIH1cclxuXHJcbi5zdWJtaXNzaW9ue1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbi5zdWJtaXNzaW9ue1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGZsZXg6IDEgMSA4MCU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xyXG4gIC13ZWJraXQtZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XHJcbiAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcclxuICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gIG92ZXJmbG93LXk6IGF1dG87ICAvKmFkZHMgc2Nyb2xsIHRvIHRoaXMgY29udGFpbmVyKi9cclxufVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cclxuLnNpZGVjb2x1bW4ge1xyXG4gIGhlaWdodDogMTAwJTsgIC8qYWxsb3dzIGJvdGggY29sdW1ucyB0byBzcGFuIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgYnJvd3NlciB3aW5kb3cqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIC8qcGxhY2VzIHRoZSBsZWZ0IGFuZCByaWdodCBoZWFkZXJzIGFib3ZlIHRoZSBib3R0b20gY29udGVudCovXHJcbiAgZmxleDogMCAwIDI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6aHNsKDAsIDAlLCAxMSUpO1xyXG59XHJcblxyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgZmxleC1ncm93OiAxOyAgLyplbnN1cmVzIHRoYXQgdGhlIGNvbnRhaW5lciB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyKi9cclxuICBvdmVyZmxvdy15OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxufVxyXG5cclxuLnRlc3Qze1xyXG4gIGZsZXg6IDEgMSA4MCU7XHJcbn1cclxuXHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG5cclxuXHJcbiAgICAgIDwvPjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQXJ0d29yazsiXX0= */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\artwork.js */"));
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

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/kaoru.png":
/*!**************************!*\
  !*** ./static/kaoru.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kaoru-768b878f66a7456aca0e34f86ff037ae.png";

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

/***/ 6:
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

/***/ })

/******/ });
//# sourceMappingURL=artwork.js.map