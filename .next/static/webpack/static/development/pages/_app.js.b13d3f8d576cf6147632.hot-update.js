webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
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
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);











var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.handleNavButtonOnClick = _this.handleNavButtonOnClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      menuVisible: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "handleNavButtonOnClick",
    value: function handleNavButtonOnClick() {
      this.setState({
        menuVisible: !this.state.menuVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3379838312" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.handleNavButtonOnClick();
        },
        className: "jsx-3379838312" + " " + "material-icons md-light"
      }, "menu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3379838312"
      }, "Navbar")), this.state.menuVisible === true && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "left",
        className: "jsx-3379838312" + " " + "column navposition"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3379838312" + " " + "bottom"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3379838312" + " " + "linkdiv"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "Home",
        className: "jsx-3379838312"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-3379838312" + " " + "material-icons md-light"
      }, "menu"), "Home"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "About",
        className: "jsx-3379838312"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "ten"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "eleven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twelve"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "thirteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "fourteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "fifteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "sixteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "seventeen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "eighteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "nineteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-one"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "twenty-nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-3379838312"
      }, "thirty"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3379838312"
      }, "@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:local('Material:Icons'), local('MaterialIcons-Regular'), url(/static/MaterialIcons-Regular.woff) format('woff');}body{background-color:hsl(0,0%,7%);height:100%;overflow:hidden;margin:0px;box-sizing:border-box;width:100%;padding-top:56px;color:hsl(60,18%,87%);}html{height:100%;font-family:Roboto,Arial,sans-serif;}#__next{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;height:100%;margin:0px;top:0;right:0;left:0;}.column{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.linkdiv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.info{padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:3px;background:linear-gradient(rgba(5,6,6,0),rgba(5,6,6,.95));width:100%;}.title{font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1.125rem;line-height:1.3;text-shadow:2px 2px 3px rgba(5,6,6,.5);}.sub-title{display:block;font-size:.75rem;font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;margin-bottom:.25rem;}#right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}#left{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;z-index:1030;width:240px;background-color:hsl(0,0%,11%);}.top-left{-webkit-flex-shink:0;-ms-flex-shink:0;flex-shink:0;}.top-right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}ul{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}.bottom{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}.contentheader{max-height:2rem;font-size:1.6rem;font-weight:500;line-height:2rem;margin:auto;color:#ffffff;}.app-drawer{position:fixed;top:-120px;right:0;bottom:-120px;left:0;-webkit-transition-property:visibility;transition-property:visibility;z-index:1030;}.content-container{position:absolute;top:0;bottom:0;left:0;width:256px;padding:120px 0;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transform:translate3d(-100%,0,0);-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);background-color:#FFF;}.wrapper2{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;}.item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.wrapper{min-height:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content{margin-top:70px;}.menu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:fixed;top:56px;background:#272727;width:240px;}.menu2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:relative;top:56px;background:#272727;width:240px;}.nav{position:fixed;top:0;right:0;left:0;z-index:1030;background:#272727;height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;background:none;border:none;padding:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga';}.material-icons.md-light{color:#ffffff;}.material-icons:focus{outline:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VtQixBQUdxQyxBQVdwQixBQUtELEFBWUMsQUFTRixBQVFNLEFBU21ELEFBT3ZELEFBT0EsQUFJRSxBQU9ELEFBSUMsQUFLTSxBQUtSLEFBTUUsQUFXQyxBQVNHLEFBYVYsQUFXRyxBQVdLLEFBUUEsQUFJSCxBQVVBLEFBVUUsQUFjYyxBQVNBLEFBMEJTLEFBSTFCLFdBOU5DLENBTHlCLEFBaUJ6QixBQXdHQSxBQTJHakIsRUFsTG1CLEFBNkt3QixDQTVINUIsQUE0RUwsQ0F2RlMsQUF1REgsQUFRaEIsRUFySHFCLEFBMEVYLEdBb0VFLEdBbkVDLEVBVEQsRUE0Q1UsQ0FpQ1gsQUFZVyxBQVNDLENBak5QLENBOER1RCxFQXNDckQsQUFxQlAsQ0FUTyxFQTZFRCxDQS9JRSxHQTRFSCxFQXpISSxJQTJKSCxDQTZDRyxDQTdMbEIsQUFxR1MsQUFpR1csQ0E3R0gsQUF5RkksRUEvR3ZCLENBNENvQixFQTVFQyxDQW1FYyxDQTlDbkMsQUFJaUIsQUFXTyxFQWpGVCxLQTBNNkMsR0F0Ry9DLEFBNkdNLEVBdkZ1QixBQW1FMUIsQ0E1TFUsQUFtREwsQUFtQk4sRUFvQkssRUE3Q3dDLENBWG5DLEFBMEdFLEFBdUJELEFBVUEsSUF6RVgsRUF5RkksQ0F0SGtCLEFBMElaLElBbk1DLENBWUEsQUF3R0ksQ0F0QzlCLENBeENrQixHQW5ESixDQW9HZCxHQXlGaUIsRUFqRGMsR0FqRlIsRUExREYsQUFtRkQsQUE2SEYsRUE3SnVCLEdBdEN6QixLQXlEaEIsQUEyRGtDLElBZ0ZWLEVBN0h4QixDQW5GMkIsQUFhWixDQTBJVyxDQTdGMUIsR0FpRnVCLENBOUJOLEtBL0ZQLENBNkJFLEtBNUJBLEFBa01jLEVBbkcxQixHQTdHRSxDQTJDRixBQXFGMEIsQ0E5RTFCLENBbkNXLE9BRVQsQ0ErSWUsQUFVQSxNQTdGakIsTUF0RGMsQ0EwSUssQUFVRyxJQWdCQyxJQTVKdkIsRUFQcUIsSUE4S25CLENBcENXLEdBVUEsTUFUVSxHQVVBLENBcEpJLEFBa0hELEtBckJRLEFBaUNsQyxVQWFnQixHQVVBLElBbENlLEtBWGQsQUFvQ2YsR0FVQSxVQTdDRixLQTBEdUIsR0FxQkYsQ0FwRUUsZ0JBcUVBLG1CQUNMLGNBQ0UsQ0ExTHBCLGVBMkxnQixLQTlGK0IsT0ErRmpDLFVBR3lCLEVBNUJyQyxJQS9DYSxXQUNmLE9BdkJ1QyxXQW1HRCxrQ0FHQSxrQ0FHTCw2QkFDL0IsR0F6R3dCLHNCQUMxQiIsImZpbGUiOiJGOlxcY29tbXVuaXR5LXdlYnNpdGUtYWxwaGFcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTmF2QnV0dG9uT25DbGljayA9IHRoaXMuaGFuZGxlTmF2QnV0dG9uT25DbGljay5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHttZW51VmlzaWJsZTogZmFsc2V9O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaGFuZGxlTmF2QnV0dG9uT25DbGljaygpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudVZpc2libGU6ICF0aGlzLnN0YXRlLm1lbnVWaXNpYmxlfSlcclxuICAgICAgICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gPD4gICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLWxpZ2h0XCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlTmF2QnV0dG9uT25DbGljaygpfT5cclxuICAgICAgbWVudVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2Pk5hdmJhcjwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxue3RoaXMuc3RhdGUubWVudVZpc2libGUgPT09IHRydWUgJiZcclxuICAgIDxkaXYgaWQ9XCJsZWZ0XCIgY2xhc3NOYW1lPVwiY29sdW1uIG5hdnBvc2l0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtkaXZcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIHRpdGxlPVwiSG9tZVwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLWxpZ2h0XCI+bWVudTwvc3Bhbj5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgPGEgdGl0bGU9XCJBYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHRcdFx0XHQ8cD50d288L3A+XHJcblx0XHRcdFx0PHA+dGhyZWU8L3A+XHJcblx0XHRcdFx0PHA+Zm91cjwvcD5cclxuXHRcdFx0XHQ8cD5maXZlPC9wPlxyXG5cdFx0XHRcdDxwPnNpeDwvcD5cclxuXHRcdFx0XHQ8cD5zZXZlbjwvcD5cclxuXHRcdFx0XHQ8cD5laWdodDwvcD5cclxuXHRcdFx0XHQ8cD5uaW5lPC9wPlxyXG5cdFx0XHRcdDxwPnRlbjwvcD5cclxuXHRcdFx0XHQ8cD5lbGV2ZW48L3A+XHJcblx0XHRcdFx0PHA+dHdlbHZlPC9wPlxyXG5cdFx0XHRcdDxwPnRoaXJ0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPmZvdXJ0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPmZpZnRlZW48L3A+XHJcblx0XHRcdFx0PHA+c2l4dGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5zZXZlbnRlZW48L3A+XHJcblx0XHRcdFx0PHA+ZWlnaHRlZW48L3A+XHJcblx0XHRcdFx0PHA+bmluZXRlZW48L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5PC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1vbmU8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXR3bzwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktdGhyZWU8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LWZvdXI8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LWZpdmU8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXNpeDwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktc2V2ZW48L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LWVpZ2h0PC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1uaW5lPC9wPlxyXG5cdFx0XHRcdDxwPnRoaXJ0eTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbjxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDclKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICAvKm1ha2VzIHRoZSBib2R5IG5vbi1zY3JvbGxhYmxlICh3ZSB3aWxsIGFkZCBzY3JvbGxpbmcgdG8gdGhlIHNpZGViYXIgYW5kIG1haW4gY29udGVudCBjb250YWluZXJzKSovXHJcbiAgICBtYXJnaW46IDBweDsgIC8qcmVtb3ZlcyBkZWZhdWx0IHN0eWxlKi9cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDU2cHg7XHJcbiAgICBjb2xvcjpoc2woNjAsIDE4JSwgODclKTtcclxuICB9XHJcblxyXG4gIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAjX19uZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgLyphbGxvd3MgYm90aCBjb2x1bW5zIHRvIHNwYW4gdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBicm93c2VyIHdpbmRvdyovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIC8qcGxhY2VzIHRoZSBsZWZ0IGFuZCByaWdodCBoZWFkZXJzIGFib3ZlIHRoZSBib3R0b20gY29udGVudCovXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmtkaXZ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5he1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1LDYsNiwwKSxyZ2JhKDUsNiw2LC45NSkpO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LWZhbWlseTogb3Blbl9zYW5zX2JvbGQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDUsNiw2LC41KTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5fc2Fuc19ib2xkLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxufVxyXG5cclxuI3JpZ2h0IHtcclxuICBmbGV4LXNocmluazogMDsgXHJcbn1cclxuXHJcbiNsZWZ0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwOyAgLyptYWtlcyBzdXJlIHRoYXQgY29udGVudCBpcyBub3QgY3V0IG9mZiBpbiBhIHNtYWxsZXIgYnJvd3NlciB3aW5kb3cqL1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMSUpO1xyXG59XHJcblxyXG4udG9wLWxlZnQge1xyXG4gICAgZmxleC1zaGluazogMDtcclxufVxyXG5cclxuLnRvcC1yaWdodCB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gICAgZmxleC1ncm93OiAxOyAgLyplbnN1cmVzIHRoYXQgdGhlIGNvbnRhaW5lciB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyKi9cclxuICAgIG92ZXJmbG93LXk6IGF1dG87ICAvKmFkZHMgc2Nyb2xsIHRvIHRoaXMgY29udGFpbmVyKi9cclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudGhlYWRlcntcclxuICBtYXgtaGVpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuXHJcblxyXG4gIC5hcHAtZHJhd2VyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTEyMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC0xMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB2aXNpYmlsaXR5O1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyNTZweDtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuLndyYXBwZXIyIHtcclxuaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuXHJcblxyXG5cclxuLml0ZW17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51MiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSxcclxuICAgICAgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLFxyXG4gICAgICB1cmwoL3N0YXRpYy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gIFxyXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgXHJcbiAgICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG4gIH1cclxuICAubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogI2ZmZmZmZjsgfVxyXG5cclxuXHJcbiAgLm1hdGVyaWFsLWljb25zIDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwcHg7XHJcbn1cclxuYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExheW91dC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\_app.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Layout, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, pageProps));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.b13d3f8d576cf6147632.hot-update.js.map