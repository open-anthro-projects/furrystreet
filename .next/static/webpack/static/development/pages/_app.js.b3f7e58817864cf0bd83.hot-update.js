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
        className: "jsx-2412453837" + " " + "nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.handleNavButtonOnClick();
        },
        className: "jsx-2412453837" + " " + "material-icons md-light menubutton"
      }, "menu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2412453837"
      }, "Navbar")), this.state.menuVisible === true && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "left",
        className: "jsx-2412453837" + " " + "column navposition"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2412453837" + " " + "bottom"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "Home",
        className: "jsx-2412453837" + " " + "menulink"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2412453837" + " " + "menuitem"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2412453837" + " " + "linkdiv"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2412453837" + " " + "material-icons md-light icon"
      }, "home"), "Home")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        title: "About",
        className: "jsx-2412453837"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "ten"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "eleven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twelve"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "thirteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "fourteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "fifteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "sixteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "seventeen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "eighteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "nineteen"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-one"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-two"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-three"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-four"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-five"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-six"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-seven"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-eight"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "twenty-nine"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "jsx-2412453837"
      }, "thirty"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2412453837"
      }, "@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:local('Material:Icons'), local('MaterialIcons-Regular'), url(/static/MaterialIcons-Regular.woff) format('woff');}body{background-color:hsl(0,0%,7%);height:100%;overflow:hidden;margin:0px;box-sizing:border-box;width:100%;padding-top:56px;color:hsl(60,18%,87%);}html{height:100%;font-family:Roboto,Arial,sans-serif;}#__next{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;height:100%;margin:0px;top:0;right:0;left:0;}.column{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}.linkdiv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;padding-left:24px;padding-right:24px;}.menuitem{width:100%;}.menulink{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;}.icon{margin-right:24px;}.info{padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:3px;background:linear-gradient(rgba(5,6,6,0),rgba(5,6,6,.95));width:100%;}.title{font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:1.125rem;line-height:1.3;text-shadow:2px 2px 3px rgba(5,6,6,.5);}.sub-title{display:block;font-size:.75rem;font-family:open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;margin-bottom:.25rem;}#right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}#left{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;z-index:1030;width:240px;background-color:hsl(0,0%,11%);}.top-left{-webkit-flex-shink:0;-ms-flex-shink:0;flex-shink:0;}.top-right{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}ul{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;list-style:none;}.bottom{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;overflow-y:auto;}.contentheader{max-height:2rem;font-size:1.6rem;font-weight:500;line-height:2rem;margin:auto;color:#ffffff;}.app-drawer{position:fixed;top:-120px;right:0;bottom:-120px;left:0;-webkit-transition-property:visibility;transition-property:visibility;z-index:1030;}.content-container{position:absolute;top:0;bottom:0;left:0;width:256px;padding:120px 0;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transform:translate3d(-100%,0,0);-webkit-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);background-color:#FFF;}.wrapper2{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;}.item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;-webkit-align-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.wrapper{min-height:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main-content{margin-top:70px;}.menu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:fixed;top:56px;background:#272727;width:240px;}.menu2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1030;position:relative;top:56px;background:#272727;width:240px;}.nav{position:fixed;top:0;right:0;left:0;z-index:1030;background:#272727;height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;background:none;border:none;padding:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga';}.material-icons.md-light{color:#ffffff;}.material-icons:focus{outline:0px;}.menubutton{padding:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxjb21tdW5pdHktd2Vic2l0ZS1hbHBoYVxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVtQixBQUdxQyxBQVdwQixBQUtELEFBWUMsQUFPRixBQVFGLEFBSUEsQUFRUSxBQUlBLEFBU21ELEFBT3ZELEFBT0EsQUFJRSxBQU9ELEFBSUMsQUFLTSxBQUtSLEFBTUUsQUFXQyxBQVNHLEFBYVYsQUFXRyxBQVdLLEFBUUEsQUFJSCxBQVVBLEFBVUUsQUFjYyxBQVNBLEFBMEJTLEFBSTFCLEFBSUYsV0FoUEcsQUEyQmpCLEFBSWMsQ0FwQzRCLEFBaUJ6QixBQXNIQSxBQTJHakIsQUFJQSxFQXRMbUIsQUE2S3dCLENBNUg1QixBQTRFTCxDQXZGUyxBQXVESCxBQVFoQixFQXpIQSxBQUlxQixBQTBFWCxHQW9FRSxHQW5FQyxFQVRELEVBNENVLENBaUNYLEFBWVcsQUFTQyxDQS9OUCxDQTRFdUQsRUFzQ3JELEFBcUJQLENBVE8sRUE2RUQsQ0EvSUUsR0E0RUgsRUF2SUksSUF5S0gsQ0E2Q0csQ0EzTWxCLEFBbUhTLEFBaUdXLENBN0dILEFBeUZJLEVBL0d2QixDQTRDb0IsRUE1RUMsQ0FtRWMsQ0E5Q25DLEFBSWlCLEFBV08sRUEvRlQsS0F3TjZDLEdBdEcvQyxBQTZHTSxFQXZGdUIsQUFtRTFCLENBMU1VLEFBaUVMLEFBbUJOLEVBb0JLLEVBN0N3QyxDQTNCdkMsQUEwSE0sQUF1QkQsQUFVQSxJQXpFWCxFQXlGSSxDQXRIa0IsQUEwSVosSUFqTkMsQUErQkQsQ0FuQkMsQUFzSEksQ0F0QzlCLENBeENrQixHQWpFSixDQWtIZCxHQXlGaUIsRUFqRGMsR0FqRlIsRUF4RUYsQUFpR0QsQUE2SEYsRUE3SnVCLEdBcER6QixLQXVFaEIsQUEyRGtDLElBZ0ZWLEVBN0h4QixDQWpHMkIsQUFhWixDQXdKVyxDQTdGMUIsR0FpRnVCLENBOUJOLEtBN0dQLENBMkNFLEtBMUNBLEFBZ05jLEVBbkcxQixHQTNIRSxDQXlERixBQXFGMEIsQ0E5RTFCLENBakRXLE9BRVQsQ0E2SmUsQUFVQSxNQTdGakIsTUFwRWMsQ0F3SkssQUFVRyxFQTVKUixFQTRLUyxNQWpMdkIsSUFNb0IsQUFzTGxCLENBcENXLEdBVUEsQ0FoSlEsS0F1SUUsR0FVQSxDQWxDRyxJQTFITCxDQXFHYSxBQWlDbEMsVUFhZ0IsR0FVQSxJQWxDZSxDQTFIL0IsSUErR2lCLEFBb0NmLEdBVUEsVUE3Q0YsS0EwRHVCLEdBcUJGLENBcEVFLGdCQXFFQSxtQkFyTEQsQUFzTEosY0FDRSxnQkFDSixLQTlGK0IsT0ErRmpDLFFBeExkLEVBMkx1QyxFQTVCckMsSUEvQ2EsV0FDZixPQXZCdUMsV0FtR0Qsa0NBR0Esa0NBR0wsNkJBQy9CLEdBekd3QixzQkFDMUIiLCJmaWxlIjoiRjpcXGNvbW11bml0eS13ZWJzaXRlLWFscGhhXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2sgPSB0aGlzLmhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2suYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bWVudVZpc2libGU6IGZhbHNlfTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGhhbmRsZU5hdkJ1dHRvbk9uQ2xpY2soKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5tZW51VmlzaWJsZX0pXHJcbiAgICAgICAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDw+ICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC1saWdodCBtZW51YnV0dG9uXCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlTmF2QnV0dG9uT25DbGljaygpfT5cclxuICAgICAgbWVudVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2Pk5hdmJhcjwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxue3RoaXMuc3RhdGUubWVudVZpc2libGUgPT09IHRydWUgJiZcclxuICAgIDxkaXYgaWQ9XCJsZWZ0XCIgY2xhc3NOYW1lPVwiY29sdW1uIG5hdnBvc2l0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lbnVsaW5rXCIgdGl0bGU9XCJIb21lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51aXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua2RpdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC1saWdodCBpY29uXCI+aG9tZTwvZGl2PkhvbWVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICA8YSB0aXRsZT1cIkFib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHRcdDxwPnR3bzwvcD5cclxuXHRcdFx0XHQ8cD50aHJlZTwvcD5cclxuXHRcdFx0XHQ8cD5mb3VyPC9wPlxyXG5cdFx0XHRcdDxwPmZpdmU8L3A+XHJcblx0XHRcdFx0PHA+c2l4PC9wPlxyXG5cdFx0XHRcdDxwPnNldmVuPC9wPlxyXG5cdFx0XHRcdDxwPmVpZ2h0PC9wPlxyXG5cdFx0XHRcdDxwPm5pbmU8L3A+XHJcblx0XHRcdFx0PHA+dGVuPC9wPlxyXG5cdFx0XHRcdDxwPmVsZXZlbjwvcD5cclxuXHRcdFx0XHQ8cD50d2VsdmU8L3A+XHJcblx0XHRcdFx0PHA+dGhpcnRlZW48L3A+XHJcblx0XHRcdFx0PHA+Zm91cnRlZW48L3A+XHJcblx0XHRcdFx0PHA+ZmlmdGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5zaXh0ZWVuPC9wPlxyXG5cdFx0XHRcdDxwPnNldmVudGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5laWdodGVlbjwvcD5cclxuXHRcdFx0XHQ8cD5uaW5ldGVlbjwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHk8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LW9uZTwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktdHdvPC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS10aHJlZTwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktZm91cjwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktZml2ZTwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktc2l4PC9wPlxyXG5cdFx0XHRcdDxwPnR3ZW50eS1zZXZlbjwvcD5cclxuXHRcdFx0XHQ8cD50d2VudHktZWlnaHQ8L3A+XHJcblx0XHRcdFx0PHA+dHdlbnR5LW5pbmU8L3A+XHJcblx0XHRcdFx0PHA+dGhpcnR5PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNyUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgIC8qbWFrZXMgdGhlIGJvZHkgbm9uLXNjcm9sbGFibGUgKHdlIHdpbGwgYWRkIHNjcm9sbGluZyB0byB0aGUgc2lkZWJhciBhbmQgbWFpbiBjb250ZW50IGNvbnRhaW5lcnMpKi9cclxuICAgIG1hcmdpbjogMHB4OyAgLypyZW1vdmVzIGRlZmF1bHQgc3R5bGUqL1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcclxuICAgIGNvbG9yOmhzbCg2MCwgMTglLCA4NyUpO1xyXG4gIH1cclxuXHJcbiAgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gICNfX25leHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAvKmFsbG93cyBib3RoIGNvbHVtbnMgdG8gc3BhbiB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgd2luZG93Ki9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgLypwbGFjZXMgdGhlIGxlZnQgYW5kIHJpZ2h0IGhlYWRlcnMgYWJvdmUgdGhlIGJvdHRvbSBjb250ZW50Ki9cclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5saW5rZGl2e1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxufVxyXG5cclxuLm1lbnVpdGVtIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4ubWVudWxpbmt7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMjRweDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoNSw2LDYsMCkscmdiYSg1LDYsNiwuOTUpKTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW5fc2Fuc19ib2xkLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSg1LDYsNiwuNSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuX3NhbnNfYm9sZCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbn1cclxuXHJcbiNyaWdodCB7XHJcbiAgZmxleC1zaHJpbms6IDA7IFxyXG59XHJcblxyXG4jbGVmdCB7XHJcbiAgICBmbGV4LXNocmluazogMDsgIC8qbWFrZXMgc3VyZSB0aGF0IGNvbnRlbnQgaXMgbm90IGN1dCBvZmYgaW4gYSBzbWFsbGVyIGJyb3dzZXIgd2luZG93Ki9cclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICB3aWR0aDoyNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTElKTtcclxufVxyXG5cclxuLnRvcC1sZWZ0IHtcclxuICAgIGZsZXgtc2hpbms6IDA7XHJcbn1cclxuXHJcbi50b3AtcmlnaHQge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxudWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICAgIGZsZXgtZ3JvdzogMTsgIC8qZW5zdXJlcyB0aGF0IHRoZSBjb250YWluZXIgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lciovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAgLyphZGRzIHNjcm9sbCB0byB0aGlzIGNvbnRhaW5lciovXHJcbiAgICBcclxufVxyXG5cclxuLmNvbnRlbnRoZWFkZXJ7XHJcbiAgbWF4LWhlaWdodDogMnJlbTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuICAuYXBwLWRyYXdlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IC0xMjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAtMTIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdmlzaWJpbGl0eTtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjU2cHg7XHJcbiAgICBwYWRkaW5nOiAxMjBweCAwO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcbi53cmFwcGVyMiB7XHJcbmhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG5cclxuXHJcbi5pdGVte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICB9XHJcblxyXG4gIC5uYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHNyYzogbG9jYWwoJ01hdGVyaWFsIEljb25zJyksXHJcbiAgICAgIGxvY2FsKCdNYXRlcmlhbEljb25zLVJlZ3VsYXInKSxcclxuICAgICAgdXJsKC9zdGF0aWMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDsgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgd29yZC13cmFwOiBub3JtYWw7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICBcclxuICAgIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICBcclxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIFxyXG4gICAgLyogU3VwcG9ydCBmb3IgSUUuICovXHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxuICB9XHJcbiAgLm1hdGVyaWFsLWljb25zLm1kLWxpZ2h0IHsgY29sb3I6ICNmZmZmZmY7IH1cclxuXHJcblxyXG4gIC5tYXRlcmlhbC1pY29ucyA6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMHB4O1xyXG59XHJcblxyXG4ubWVudWJ1dHRvbntcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExheW91dC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gIH1cclxufSJdfQ== */\n/*@ sourceURL=F:\\community-website-alpha\\pages\\_app.js */"));
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
//# sourceMappingURL=_app.js.b3f7e58817864cf0bd83.hot-update.js.map