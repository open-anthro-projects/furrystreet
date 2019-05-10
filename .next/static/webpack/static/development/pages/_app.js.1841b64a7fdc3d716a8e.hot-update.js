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
        className: "jsx-1900672961" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.handleNavButtonOnClick();
        },
        className: "jsx-1900672961" + " " + "material-icons md-light"
      }, "menu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1900672961"
      }, "Navbar")), this.state.menuVisible === true && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "left",
        className: "jsx-1900672961" + " " + "column navposition"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1900672961" + " " + "bottom"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "Home",
        className: "jsx-1900672961"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "About",
        className: "jsx-1900672961"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "ten"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "eleven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twelve"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "thirteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "fourteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "fifteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "sixteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "seventeen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "eighteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "nineteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-one"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "twenty-nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-1900672961"
      }, "thirty"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1900672961"
      }, "@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:local('Material:Icons'), local('MaterialIcons-Regular'), url(/static/MaterialIcons-Regular.woff) format('woff');}body{background-color:hsl(0,0%,7%);height:100%;overflow:hidden;margin:0px;box-sizing:border-box;width:100%;padding-top:56px;color:hsl(60,18%,87%);}html{height:100%;font-family:Roboto,Arial,sans-serif;}#__next{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;height:100%;margin:0px;top:0;right:0;left:0;}.column{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.info{padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:3px;background:linear-gradient(rgba(5,6,6,0),rgba(5,6,6,.95));width:100%;}.title{font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1.125rem;line-height:1.3;text-shadow:2px 2px 3px rgba(5,6,6,.5);}.sub-title{display:block;font-size:.75rem;font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;margin-bottom:.25rem;}#right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}#left{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;z-index:1030;width:240px;background-color:hsl(0,0%,11%);}.top-left{-webkit-flex-shink:0;-ms-flex-shink:0;flex-shink:0;}.top-right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}ul{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}.bottom{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}.contentheader{max-height:2rem;font-size:1.6rem;font-weight:500;line-height:2rem;margin:auto;color:#ffffff;}.app-drawer{position:fixed;top:-120px;right:0;bottom:-120px;left:0;-webkit-transition-property:visibility;transition-property:visibility;z-index:1030;}.content-container{position:absolute;top:0;bottom:0;left:0;width:256px;padding:120px 0;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transform:translate3d(-100%,0,0);-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);background-color:#FFF;}.wrapper2{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;}.item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.wrapper{min-height:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content{margin-top:70px;}.menu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:fixed;top:56px;background:#272727;width:240px;}.menu2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:relative;top:56px;background:#272727;width:240px;}.nav{position:fixed;top:0;right:0;left:0;z-index:1030;background:#272727;height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;background:none;border:none;padding:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga';}.material-icons.md-light{color:#ffffff;}.material-icons:focus{outline:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VtQixBQUdxQyxBQVdwQixBQUtELEFBWUMsQUFPRixBQUtNLEFBU21ELEFBT3ZELEFBT0EsQUFJRSxBQU9ELEFBSUMsQUFLTSxBQUtSLEFBTUUsQUFXQyxBQVNHLEFBYVYsQUFXRyxBQVdLLEFBUUEsQUFJSCxBQVVBLEFBVUUsQUFjYyxBQVNBLEFBMEJTLEFBSTFCLFdBek5DLENBTHlCLEFBaUJ6QixBQW1HQSxBQTJHakIsRUFsTG1CLEFBNkt3QixDQTVINUIsQUE0RUwsQ0F2RlMsQUF1REgsQUFRaEIsRUFySHFCLEFBMEVYLEdBb0VFLEdBbkVDLEVBVEQsRUE0Q1UsQ0FpQ1gsQUFZVyxBQVNDLENBNU1QLENBeUR1RCxFQXNDckQsQUFxQlAsQ0FUTyxFQTZFRCxDQS9JRSxHQTRFSCxFQXBISSxJQXNKSCxDQTZDRyxDQXhMbEIsQUFnR1MsQUFpR1csQ0E3R0gsQUF5RkksRUEvR3ZCLENBNENvQixFQTVFQyxDQW1FYyxDQTlDbkMsQUFJaUIsQUFXTyxFQTVFVCxLQXFNNkMsR0F0Ry9DLEFBNkdNLEVBdkZ1QixBQW1FMUIsQ0F2TFUsQUE4Q0wsQUFtQk4sRUFvQkssRUE3Q3dDLENBUnhDLEFBdUdPLEFBdUJELEFBVUEsSUF6RVgsRUF5RkksQ0F0SGtCLEFBMElaLElBOUxDLENBWUEsQUFtR0ksQ0F0QzlCLENBeENrQixHQTlDSixDQStGZCxHQXlGaUIsRUFqRGMsR0FqRlIsRUFyREYsQUE4RUQsQUE2SEYsRUE3SnVCLEdBakN6QixLQW9EaEIsQUEyRGtDLElBZ0ZWLEVBN0h4QixDQTlFMkIsQUFhWixDQXFJVyxDQTdGMUIsR0FpRnVCLENBOUJOLEtBMUZQLENBd0JFLEtBdkJBLEFBNkxjLEVBbkcxQixHQXhHRSxDQXNDRixBQXFGMEIsQ0E5RTFCLENBOUJXLENBY1gsTUFaRSxDQTBJZSxBQVVBLE1BN0ZqQixNQWpEYyxDQXFJSyxBQVVHLElBZ0JDLE1BOUp2QixJQXlLRSxDQXBDVyxHQVVBLE1BVFUsR0FVQSxDQWxDRyxLQXJCUSxBQWlDbEMsVUFhZ0IsR0FVQSxJQWxDZSxLQVhkLEFBb0NmLEdBVUEsVUE3Q0YsS0EwRHVCLEdBcUJGLENBcEVFLGdCQXFFQSxtQkFDTCxjQUNFLGdCQUNKLEtBOUYrQixPQStGakMsVUFHeUIsRUE1QnJDLElBL0NhLFdBQ2YsT0F2QnVDLFdBbUdELGtDQUdBLGtDQUdMLDZCQUMvQixHQXpHd0Isc0JBQzFCIiwiZmlsZSI6IkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrID0gdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge21lbnVWaXNpYmxlOiBmYWxzZX07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBoYW5kbGVOYXZCdXR0b25PbkNsaWNrKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZW51VmlzaWJsZTogIXRoaXMuc3RhdGUubWVudVZpc2libGV9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiA8PiAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtbGlnaHRcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVOYXZCdXR0b25PbkNsaWNrKCl9PlxyXG4gICAgICBtZW51XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXY+TmF2YmFyPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG57dGhpcy5zdGF0ZS5tZW51VmlzaWJsZSA9PT0gdHJ1ZSAmJlxyXG4gICAgPGRpdiBpZD1cImxlZnRcIiBjbGFzc05hbWU9XCJjb2x1bW4gbmF2cG9zaXRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgdGl0bGU9XCJIb21lXCI+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgIDxhIHRpdGxlPVwiQWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblx0XHRcdFx0PHA+dHdvPC9wPlxyXG5cdFx0XHRcdDxwPnRocmVlPC9wPlxyXG5cdFx0XHRcdDxwPmZvdXI8L3A+XHJcblx0XHRcdFx0PHA+Zml2ZTwvcD5cclxuXHRcdFx0XHQ8cD5zaXg8L3A+XHJcblx0XHRcdFx0PHA+c2V2ZW48L3A+XHJcblx0XHRcdFx0PHA+ZWlnaHQ8L3A+XHJcblx0XHRcdFx0PHA+bmluZTwvcD5cclxuXHRcdFx0XHQ8cD50ZW48L3A+XHJcblx0XHRcdFx0PHA+ZWxldmVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZWx2ZTwvcD5cclxuXHRcdFx0XHQ8cD50aGlydGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5mb3VydGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5maWZ0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPnNpeHRlZW48L3A+XHJcblx0XHRcdFx0PHA+c2V2ZW50ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPmVpZ2h0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPm5pbmV0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eTwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktb25lPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS10d288L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXRocmVlPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1mb3VyPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1maXZlPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1zaXg8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LXNldmVuPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1laWdodDwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktbmluZTwvcD5cclxuXHRcdFx0XHQ8cD50aGlydHk8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG48c3R5bGUganN4IGdsb2JhbD57YFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA3JSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAgLyptYWtlcyB0aGUgYm9keSBub24tc2Nyb2xsYWJsZSAod2Ugd2lsbCBhZGQgc2Nyb2xsaW5nIHRvIHRoZSBzaWRlYmFyIGFuZCBtYWluIGNvbnRlbnQgY29udGFpbmVycykqL1xyXG4gICAgbWFyZ2luOiAwcHg7ICAvKnJlbW92ZXMgZGVmYXVsdCBzdHlsZSovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xyXG4gICAgY29sb3I6aHNsKDYwLCAxOCUsIDg3JSk7XHJcbiAgfVxyXG5cclxuICBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgI19fbmV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIGhlaWdodDogMTAwJTsgIC8qYWxsb3dzIGJvdGggY29sdW1ucyB0byBzcGFuIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgYnJvd3NlciB3aW5kb3cqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAvKnBsYWNlcyB0aGUgbGVmdCBhbmQgcmlnaHQgaGVhZGVycyBhYm92ZSB0aGUgYm90dG9tIGNvbnRlbnQqL1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuYXtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg1LDYsNiwwKSxyZ2JhKDUsNiw2LC45NSkpO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LWZhbWlseTogb3Blbl9zYW5zX2JvbGQsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDUsNiw2LC41KTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5fc2Fuc19ib2xkLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxufVxyXG5cclxuI3JpZ2h0IHtcclxuICBmbGV4LXNocmluazogMDsgXHJcbn1cclxuXHJcbiNsZWZ0IHtcclxuICAgIGZsZXgtc2hyaW5rOiAwOyAgLyptYWtlcyBzdXJlIHRoYXQgY29udGVudCBpcyBub3QgY3V0IG9mZiBpbiBhIHNtYWxsZXIgYnJvd3NlciB3aW5kb3cqL1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxMSUpO1xyXG59XHJcblxyXG4udG9wLWxlZnQge1xyXG4gICAgZmxleC1zaGluazogMDtcclxufVxyXG5cclxuLnRvcC1yaWdodCB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gICAgZmxleC1ncm93OiAxOyAgLyplbnN1cmVzIHRoYXQgdGhlIGNvbnRhaW5lciB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyKi9cclxuICAgIG92ZXJmbG93LXk6IGF1dG87ICAvKmFkZHMgc2Nyb2xsIHRvIHRoaXMgY29udGFpbmVyKi9cclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudGhlYWRlcntcclxuICBtYXgtaGVpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuXHJcblxyXG4gIC5hcHAtZHJhd2VyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTEyMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC0xMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB2aXNpYmlsaXR5O1xyXG4gICAgei1pbmRleDogMTAzMDtcclxufVxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyNTZweDtcclxuICAgIHBhZGRpbmc6IDEyMHB4IDA7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuLndyYXBwZXIyIHtcclxuaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuXHJcblxyXG5cclxuLml0ZW17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51MiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSxcclxuICAgICAgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLFxyXG4gICAgICB1cmwoL3N0YXRpYy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIFxyXG4gICAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gIFxyXG4gICAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgXHJcbiAgICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cclxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG4gIH1cclxuICAubWF0ZXJpYWwtaWNvbnMubWQtbGlnaHQgeyBjb2xvcjogI2ZmZmZmZjsgfVxyXG5cclxuXHJcbiAgLm1hdGVyaWFsLWljb25zIDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwcHg7XHJcbn1cclxuYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExheW91dC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\_app.js */"));
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
//# sourceMappingURL=_app.js.1841b64a7fdc3d716a8e.hot-update.js.map