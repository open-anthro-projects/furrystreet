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
        className: "jsx-234457322" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.handleNavButtonOnClick();
        },
        className: "jsx-234457322" + " " + "material-icons md-light"
      }, "menu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-234457322"
      }, "Navbar")), this.state.menuVisible === true && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "left",
        className: "jsx-234457322" + " " + "column navposition"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-234457322" + " " + "bottom"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-234457322" + " " + "linkdiv"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "Home",
        className: "jsx-234457322"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-234457322" + " " + "material-icons md-light"
      }, "home"), "Home"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "About",
        className: "jsx-234457322"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "ten"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "eleven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twelve"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "thirteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "fourteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "fifteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "sixteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "seventeen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "eighteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "nineteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-one"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "twenty-nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-234457322"
      }, "thirty"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "234457322"
      }, "@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:local('Material:Icons'), local('MaterialIcons-Regular'), url(/static/MaterialIcons-Regular.woff) format('woff');}body{background-color:hsl(0,0%,7%);height:100%;overflow:hidden;margin:0px;box-sizing:border-box;width:100%;padding-top:56px;color:hsl(60,18%,87%);}html{height:100%;font-family:Roboto,Arial,sans-serif;}#__next{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;height:100%;margin:0px;top:0;right:0;left:0;}.column{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.linkdiv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;}a{height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.info{padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:3px;background:linear-gradient(rgba(5,6,6,0),rgba(5,6,6,.95));width:100%;}.title{font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1.125rem;line-height:1.3;text-shadow:2px 2px 3px rgba(5,6,6,.5);}.sub-title{display:block;font-size:.75rem;font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;margin-bottom:.25rem;}#right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}#left{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;z-index:1030;width:240px;background-color:hsl(0,0%,11%);}.top-left{-webkit-flex-shink:0;-ms-flex-shink:0;flex-shink:0;}.top-right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}ul{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}.bottom{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}.contentheader{max-height:2rem;font-size:1.6rem;font-weight:500;line-height:2rem;margin:auto;color:#ffffff;}.app-drawer{position:fixed;top:-120px;right:0;bottom:-120px;left:0;-webkit-transition-property:visibility;transition-property:visibility;z-index:1030;}.content-container{position:absolute;top:0;bottom:0;left:0;width:256px;padding:120px 0;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transform:translate3d(-100%,0,0);-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);background-color:#FFF;}.wrapper2{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;}.item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.wrapper{min-height:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content{margin-top:70px;}.menu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:fixed;top:56px;background:#272727;width:240px;}.menu2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:relative;top:56px;background:#272727;width:240px;}.nav{position:fixed;top:0;right:0;left:0;z-index:1030;background:#272727;height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;background:none;border:none;padding:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga';}.material-icons.md-light{color:#ffffff;}.material-icons:focus{outline:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VtQixBQUdxQyxBQVdwQixBQUtELEFBWUMsQUFTRixBQU9ELEFBS08sQUFTbUQsQUFPdkQsQUFPQSxBQUlFLEFBT0QsQUFJQyxBQUtNLEFBS1IsQUFNRSxBQVdDLEFBU0csQUFhVixBQVdHLEFBV0ssQUFRQSxBQUlILEFBVUEsQUFVRSxBQWNjLEFBU0EsQUEwQlMsQUFJMUIsV0FsT0MsQ0FMeUIsQUFpQnpCLEFBZ0JHLEFBNEZILEFBMkdqQixFQWxMbUIsQUE2S3dCLENBNUg1QixBQTRFTCxDQXZGUyxBQXVESCxBQVFoQixFQXJIcUIsQUEwRVgsR0FvRUUsR0FuRUMsRUFURCxFQTRDVSxDQWlDWCxBQVlXLEFBU0MsQ0FyTlAsQ0FrRXVELEVBc0NyRCxBQXFCUCxDQVRPLEVBNkVELENBL0lFLEdBNEVILEVBN0hJLElBK0pILENBNkNHLENBak1sQixBQXlHUyxBQWlHVyxDQTdHSCxBQXlGSSxFQS9HdkIsQ0E0Q29CLEVBNUVDLENBbUVjLENBOUNuQyxBQUlpQixBQVdPLEVBckZULEtBOE02QyxHQXRHL0MsQUE2R00sRUF2RnVCLEFBbUUxQixDQWhNVSxBQXVETCxBQW1CTixFQW9CSyxFQTdDd0MsQ0FmbkMsQUE4R0UsQUF1QkQsQUFVQSxJQXpFWCxFQXlGSSxDQXRIa0IsQUEwSVosSUF2TUMsQ0FZQSxBQTRHSSxDQXRDOUIsQ0F4Q2tCLEdBdkRKLENBd0dkLEdBeUZpQixFQWpEYyxHQWpGUixFQTlERixBQXVGRCxBQTZIRixFQTdKdUIsQ0FmekMsRUEzQmdCLEtBNkRoQixBQTJEa0MsSUFnRlYsRUE3SHhCLENBdkYyQixBQWFaLENBOElXLENBN0YxQixHQWlGdUIsQ0E5Qk4sS0FuR1AsQ0FpQ0UsS0FoQ0EsQUFzTWMsRUFuRzFCLEdBakhFLENBK0NGLEFBcUYwQixDQTlFMUIsQ0F2Q1csT0FFVCxDQW1KZSxBQVVBLE1BN0ZqQixNQTFEYyxDQThJSyxBQVVHLElBZ0JDLElBaEtGLEVBUEEsSUFrTG5CLENBcENXLEdBVUEsTUFUVSxHQVVBLENBeEpJLEFBc0hELEtBckJRLEFBaUNsQyxVQWFnQixHQVVBLElBbENlLEtBWGQsQUFvQ2YsR0FVQSxVQTdDRixLQTBEdUIsR0FxQkYsQ0FwRUUsZ0JBcUVBLFFBdExULFdBdUxJLENBdExsQixhQXVMb0IsQ0E5THBCLGVBK0xnQixLQTlGK0IsT0ErRmpDLFVBR3lCLEVBNUJyQyxJQS9DYSxXQUNmLE9BdkJ1QyxXQW1HRCxrQ0FHQSxrQ0FHTCw2QkFDL0IsR0F6R3dCLHNCQUMxQiIsImZpbGUiOiJGOlxcY29tbXVuaXR5LXdlYnNpdGUtYWxwaGFcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTmF2QnV0dG9uT25DbGljayA9IHRoaXMuaGFuZGxlTmF2QnV0dG9uT25DbGljay5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHttZW51VmlzaWJsZTogZmFsc2V9O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaGFuZGxlTmF2QnV0dG9uT25DbGljaygpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudVZpc2libGU6ICF0aGlzLnN0YXRlLm1lbnVWaXNpYmxlfSlcclxuICAgICAgICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gPD4gICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLWxpZ2h0XCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlTmF2QnV0dG9uT25DbGljaygpfT5cclxuICAgICAgbWVudVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2Pk5hdmJhcjwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxue3RoaXMuc3RhdGUubWVudVZpc2libGUgPT09IHRydWUgJiZcclxuICAgIDxkaXYgaWQ9XCJsZWZ0XCIgY2xhc3NOYW1lPVwiY29sdW1uIG5hdnBvc2l0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtkaXZcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIHRpdGxlPVwiSG9tZVwiPjxkaXYgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtbGlnaHRcIj5ob21lPC9kaXY+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgIDxhIHRpdGxlPVwiQWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblx0XHRcdFx0PHA+dHdvPC9wPlxyXG5cdFx0XHRcdDxwPnRocmVlPC9wPlxyXG5cdFx0XHRcdDxwPmZvdXI8L3A+XHJcblx0XHRcdFx0PHA+Zml2ZTwvcD5cclxuXHRcdFx0XHQ8cD5zaXg8L3A+XHJcblx0XHRcdFx0PHA+c2V2ZW48L3A+XHJcblx0XHRcdFx0PHA+ZWlnaHQ8L3A+XHJcblx0XHRcdFx0PHA+bmluZTwvcD5cclxuXHRcdFx0XHQ8cD50ZW48L3A+XHJcblx0XHRcdFx0PHA+ZWxldmVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZWx2ZTwvcD5cclxuXHRcdFx0XHQ8cD50aGlydGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5mb3VydGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5maWZ0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPnNpeHRlZW48L3A+XHJcblx0XHRcdFx0PHA+c2V2ZW50ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPmVpZ2h0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPm5pbmV0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eTwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktb25lPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS10d288L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXRocmVlPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1mb3VyPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1maXZlPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1zaXg8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXNldmVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1laWdodDwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktbmluZTwvcD5cclxuXHRcdFx0XHQ8cD50aGlydHk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG48c3R5bGUganN4IGdsb2JhbD57YFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA3JSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgLyptYWtlcyB0aGUgYm9keSBub24tc2Nyb2xsYWJsZSAod2Ugd2lsbCBhZGQgc2Nyb2xsaW5nIHRvIHRoZSBzaWRlYmFyIGFuZCBtYWluIGNvbnRlbnQgY29udGFpbmVycykqL1xyXG4gICAgbWFyZ2luOiAwcHg7ICAvKnJlbW92ZXMgZGVmYXVsdCBzdHlsZSovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xyXG4gICAgY29sb3I6aHNsKDYwLCAxOCUsIDg3JSk7XHJcbiAgfVxyXG5cclxuICBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgI19fbmV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIGhlaWdodDogMTAwJTsgIC8qYWxsb3dzIGJvdGggY29sdW1ucyB0byBzcGFuIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgYnJvd3NlciB3aW5kb3cqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rZGl2e1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuYXtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDUsNiw2LDApLHJnYmEoNSw2LDYsLjk1KSk7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuX3NhbnNfYm9sZCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoNSw2LDYsLjUpO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICBmb250LWZhbWlseTogb3Blbl9zYW5zX2JvbGQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG59XHJcblxyXG4jcmlnaHQge1xyXG4gIGZsZXgtc2hyaW5rOiAwOyBcclxufVxyXG5cclxuI2xlZnQge1xyXG4gICAgZmxleC1zaHJpbms6IDA7ICAvKm1ha2VzIHN1cmUgdGhhdCBjb250ZW50IGlzIG5vdCBjdXQgb2ZmIGluIGEgc21hbGxlciBicm93c2VyIHdpbmRvdyovXHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgd2lkdGg6MjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDExJSk7XHJcbn1cclxuXHJcbi50b3AtbGVmdCB7XHJcbiAgICBmbGV4LXNoaW5rOiAwO1xyXG59XHJcblxyXG4udG9wLXJpZ2h0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7ICAvKmVuc3VyZXMgdGhhdCB0aGUgY29udGFpbmVyIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgIC8qYWRkcyBzY3JvbGwgdG8gdGhpcyBjb250YWluZXIqL1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50aGVhZGVye1xyXG4gIG1heC1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBtYXJnaW46YXV0bztcclxuICBjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbiAgLmFwcC1kcmF3ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAtMTIwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHZpc2liaWxpdHk7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgcGFkZGluZzogMTIwcHggMDtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxufVxyXG4ud3JhcHBlcjIge1xyXG5oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuXHJcblxyXG4uaXRlbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuICAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBzcmM6IGxvY2FsKCdNYXRlcmlhbCBJY29ucycpLFxyXG4gICAgICBsb2NhbCgnTWF0ZXJpYWxJY29ucy1SZWd1bGFyJyksXHJcbiAgICAgIHVybCgvc3RhdGljL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmKSBmb3JtYXQoJ3dvZmYnKTtcclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7ICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgXHJcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgXHJcbiAgICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBcclxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1pY29ucy5tZC1saWdodCB7IGNvbG9yOiAjZmZmZmZmOyB9XHJcblxyXG5cclxuICAubWF0ZXJpYWwtaWNvbnMgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDBweDtcclxufVxyXG5gfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8TGF5b3V0Lz5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\_app.js */"));
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
//# sourceMappingURL=_app.js.6a1aa76292f887a63ece.hot-update.js.map