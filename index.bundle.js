/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! 2210.jpg */ "./src/2210.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.jpg */ "./src/incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.board1, .board2 {
  display: grid;
  height: 550px;
  width: 550px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 1px solid black;
  gap: 2px;
  padding: 2px;
  background-color: yellow;
  grid-row: 2/3;
  margin-top: 60px;
  }
  body{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 1fr;
    height: 100%;
    margin: 0px;
  }
  .board1 {
    grid-column: 1/2;
    justify-self: center;
    align-self: flex-end;
  }
  .board2 {
    grid-column: 2/3;
    justify-self: center;
    align-self: flex-end;
  }
  #player1{
    grid-row: 1/2; 
    justify-self: flex-end;
    color: white;
    background: rgba(0, 0, 0, 0.55);
    text-align: center;
    height: 40px;
    margin-top: 0px;
    padding: 10px;
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    border: 1px solid grey;
    background: lightyellow;
    cursor: pointer;
  }

  #myModal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    background: rgba(31, 28, 28, 0.55);
  }

  #container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px 1fr;
    column-gap: 150px;
    width: 100%;
    height: 100%;
    grid-row: 2/3;
    grid-column: 1/3;
    row-gap: 10px;
  }
#container > label {
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-self: center;
  color: white;
  
  font-size: large;
}
  #myModal2 {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    background: rgba(31, 28, 28, 0.55);
  }

  #img {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
  }
  
  #modal-content {
    background-size: 700px;
    background-repeat: no-repeat;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 20%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
  }
  #modal-content2 {
    background-size: 700px;
    background-repeat: no-repeat;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 20%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
  }

  #modal-content > input{
    background-color: white;
    border: 2px solid black;
    color: black;
  }

  body{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: 85%;
    background-repeat: no-repeat;
    background-position:top ;
  }

  #form{
    margin-top: 0px;
    align-self: center;
    justify-self: center;
    display: grid;
width: 500px;

  }

  #form > div {
    background: rgba(0, 0, 0, 0.55);
    color: white;
    text-align: center;
    width: 200px;
    font-size: large;
    justify-self: center;
  }

  #form > label {
    background: rgb(0, 0, 0);
    color: white;
    text-align: center;
    width: 300px;
    justify-self: center;
  }
  #form > input, select {
    width: 300px;
    justify-self: center;
  }
  #form > button {
    width: 100px;
    justify-self: center;
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,sCAAsC;EACtC,mCAAmC;EACnC,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb,gBAAgB;EAChB;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,YAAY;IACZ,WAAW;EACb;EACA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,aAAa;EACf;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,aAAa;EACf;AACF;EACE,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,oBAAoB;EACpB,YAAY;;EAEZ,gBAAgB;AAClB;EACE;IACE,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,kCAAkC;EACpC;;EAEA;IACE,yDAA+B;IAC/B,qBAAqB;IACrB,4BAA4B;IAC5B,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,sBAAsB;IACtB,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,yDAAgH;IAChH,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;EAC1B;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;AACjB,YAAY;;EAEV;;EAEA;IACE,+BAA+B;IAC/B,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,YAAY;IACZ,oBAAoB;EACtB","sourcesContent":[".board1, .board2 {\n  display: grid;\n  height: 550px;\n  width: 550px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  gap: 2px;\n  padding: 2px;\n  background-color: yellow;\n  grid-row: 2/3;\n  margin-top: 60px;\n  }\n  body{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 50px 1fr;\n    height: 100%;\n    margin: 0px;\n  }\n  .board1 {\n    grid-column: 1/2;\n    justify-self: center;\n    align-self: flex-end;\n  }\n  .board2 {\n    grid-column: 2/3;\n    justify-self: center;\n    align-self: flex-end;\n  }\n  #player1{\n    grid-row: 1/2; \n    justify-self: flex-end;\n    color: white;\n    background: rgba(0, 0, 0, 0.55);\n    text-align: center;\n    height: 40px;\n    margin-top: 0px;\n    padding: 10px;\n  }\n\n  .cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 2rem;\n    border: 1px solid grey;\n    background: lightyellow;\n    cursor: pointer;\n  }\n\n  #myModal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n    color: white;\n    background: rgba(31, 28, 28, 0.55);\n  }\n\n  #container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 200px 1fr;\n    column-gap: 150px;\n    width: 100%;\n    height: 100%;\n    grid-row: 2/3;\n    grid-column: 1/3;\n    row-gap: 10px;\n  }\n#container > label {\n  grid-row: 1/2;\n  grid-column: 1/2;\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  justify-self: center;\n  color: white;\n  \n  font-size: large;\n}\n  #myModal2 {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n    color: white;\n    background: rgba(31, 28, 28, 0.55);\n  }\n\n  #img {\n    background-image: url(2210.jpg);\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 70%;\n    height: 70%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n  \n  #modal-content {\n    background-size: 700px;\n    background-repeat: no-repeat;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 20%;\n    height: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n  #modal-content2 {\n    background-size: 700px;\n    background-repeat: no-repeat;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 20%;\n    height: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n\n  #modal-content > input{\n    background-color: white;\n    border: 2px solid black;\n    color: black;\n  }\n\n  body{\n    background-image: url(incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.jpg);\n    background-size: 85%;\n    background-repeat: no-repeat;\n    background-position:top ;\n  }\n\n  #form{\n    margin-top: 0px;\n    align-self: center;\n    justify-self: center;\n    display: grid;\nwidth: 500px;\n\n  }\n\n  #form > div {\n    background: rgba(0, 0, 0, 0.55);\n    color: white;\n    text-align: center;\n    width: 200px;\n    font-size: large;\n    justify-self: center;\n  }\n\n  #form > label {\n    background: rgb(0, 0, 0);\n    color: white;\n    text-align: center;\n    width: 300px;\n    justify-self: center;\n  }\n  #form > input, select {\n    width: 300px;\n    justify-self: center;\n  }\n  #form > button {\n    width: 100px;\n    justify-self: center;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Createboard),
/* harmony export */   imgContainer: () => (/* binding */ imgContainer),
/* harmony export */   placeShip1Name: () => (/* binding */ placeShip1Name),
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   player1: () => (/* binding */ player1),
/* harmony export */   player2: () => (/* binding */ player2),
/* harmony export */   playerName1: () => (/* binding */ playerName1),
/* harmony export */   playerName2: () => (/* binding */ playerName2),
/* harmony export */   players: () => (/* binding */ players)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");





const players = (0,_player__WEBPACK_IMPORTED_MODULE_3__.createPlayers)();
const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
const placeShip1Label = document.createElement('form');
placeShip1Label.setAttribute('id', 'form');
const placeShip1Name = document.createElement('select');

const placeShip1CordinatesLabel = document.createElement('label');
const placeShip1Cordinates = document.createElement('input');
placeShip1Cordinates.setAttribute('type', 'number');
placeShip1Cordinates.setAttribute('min', '00');
placeShip1Cordinates.setAttribute('max', '99');
const placeShip2CordinatesLabel = document.createElement('label');
const placeShip2Cordinates = document.createElement('input');
placeShip2Cordinates.setAttribute('type', 'number');
placeShip2Cordinates.setAttribute('min', '00');
placeShip2Cordinates.setAttribute('max', '99');
const placeShipBtn = document.createElement('button');
const description = document.createElement('div');

function createOption() {
  while (placeShip1Name.firstChild) {
    placeShip1Name.removeChild(placeShip1Name.firstChild);
  }
  for (let i = 0; i < 5; i++) {
    const ships = [
      _gameboard__WEBPACK_IMPORTED_MODULE_0__.carrier.name,
      _gameboard__WEBPACK_IMPORTED_MODULE_0__.battleship.name,
      _gameboard__WEBPACK_IMPORTED_MODULE_0__.cruiser.name,
      _gameboard__WEBPACK_IMPORTED_MODULE_0__.submarine.name,
      _gameboard__WEBPACK_IMPORTED_MODULE_0__.destroyer.name,
    ];
    const shipOptions = document.createElement('option');
    placeShip1Name.appendChild(shipOptions);
    shipOptions.setAttribute('id', 'newOption');
    shipOptions.setAttribute('value', ships[i]);
    shipOptions.textContent = ships[i];
  }
}

function Createboard() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const boardDiv1 = document.createElement('div');
  const boardDiv2 = document.createElement('div');
  boardDiv1.classList.add('board1');
  boardDiv2.classList.add('board2');
  container.appendChild(boardDiv1);
  container.appendChild(boardDiv2);
  let temp = 0;
  const activePlayer = players.getActivePlayer();
  let boardToinsert = _gameboard__WEBPACK_IMPORTED_MODULE_0__.board;
  let boardToAtt = _gameboard__WEBPACK_IMPORTED_MODULE_0__.board2;

  if (activePlayer.name !== playerName1.value && activePlayer.name !== player.value) {
    boardToinsert = _gameboard__WEBPACK_IMPORTED_MODULE_0__.board2;
    boardToAtt = _gameboard__WEBPACK_IMPORTED_MODULE_0__.board;
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellButton1 = document.createElement('button');
      cellButton1.classList.add('cell');
      boardDiv1.appendChild(cellButton1);
      cellButton1.setAttribute('x', i);
      cellButton1.setAttribute('y', j);
      const cellButton2 = document.createElement('button');
      cellButton2.classList.add('cell2');
      boardDiv2.appendChild(cellButton2);
      cellButton2.setAttribute('x', i);
      cellButton2.setAttribute('y', j);
      cellButton2.setAttribute('value', temp++);
      cellButton1.textContent = `${i}${j}`;
      cellButton1.style.color = '#909692';
      if (
        typeof boardToinsert.board[i][j] === 'object'
        || boardToinsert.board[i][j] === 'hit'
      ) {
        cellButton1.style.backgroundColor = 'blue';
        cellButton1.textContent = '';
      }
      if (boardToAtt.board[i][j] === 'miss') {
        cellButton2.style.backgroundColor = 'red';
        cellButton2.disabled = true;
      } else if (boardToAtt.board[i][j] === 'hit') {
        cellButton2.disabled = true;
        cellButton2.style.backgroundColor = 'green';
      }
      if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) === false) {
        container.appendChild(placeShip1Label);
        placeShip1Label.appendChild(description);
        description.textContent = `Carrier-size: 5-cells
                                  Battleship-size: 4-cells
                                  Cruiser-size: 3-cells
                                  Submarine-size: 3-cells
                                  Destroyer-size: 2-cells`;
        placeShip1Label.appendChild(placeShip1Name);
        placeShip1Label.appendChild(placeShip1CordinatesLabel);
        placeShip1CordinatesLabel.textContent = `Type in two digit number of board's cell
                                                where you want your ship to start`;
        placeShip1Label.appendChild(placeShip1Cordinates);
        placeShip1Label.appendChild(placeShip2CordinatesLabel);
        placeShip2CordinatesLabel.textContent = `Type in two digit number of board's cell
                                                  where you want your ship to end, TIP:
                                                  each ship has how much cells it can take.`;
        placeShip1Label.appendChild(placeShip2Cordinates);
        placeShip1Label.appendChild(placeShipBtn);
        placeShipBtn.textContent = 'Submit';
        placeShip1Cordinates.setAttribute(
          'placeholder',
          '00 - 99',
        );
        placeShip2Cordinates.setAttribute(
          'placeholder',
          '00 - 99',
        );
        cellButton2.disabled = true;
        player1.textContent = `Place your ships Player: ${activePlayer.name}`;
      }

      cellButton2.addEventListener('click', (e) => {
        boardToAtt.recieveAttack(
          Number(e.currentTarget.attributes.x.value),
          Number(e.currentTarget.attributes.y.value),
        );
        // e.currentTarget.disabled = true;

        if ((0,_game__WEBPACK_IMPORTED_MODULE_2__.Game)() === false) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
          players.switchPlayerTurn();
          popModule.style.visibility = 'visible';
          popModule2.style.visibility = 'visible';
        }
      });
    }
  }
  if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) === false && activePlayer.name !== 'AI') {
    createOption();
  }

  if (
    _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) !== false
    && _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToAtt.board) === false
    && activePlayer.name !== 'AI'
  ) {
    players.switchPlayerTurn();
    Createboard();
    // activePlayer = players.getActivePlayer();
  }
  if (
    _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) !== false
    && _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToAtt.board) !== false
    && activePlayer.name !== 'AI'
  ) {
    return false;
  }
  const cells = document.getElementsByClassName('cell2');
  let computerChoice = Math.floor(Math.random() * cells.length);
  if (
    activePlayer.name === 'AI'
    && _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) !== false
    && _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToAtt.board) !== false
  ) {
    while (
      boardToAtt.board[cells[computerChoice].attributes.x.value][
        cells[computerChoice].attributes.y.value
      ] === 'hit'
      || boardToAtt.board[cells[computerChoice].attributes.x.value][
        cells[computerChoice].attributes.y.value
      ] === 'miss'
    ) {
      computerChoice = Math.floor(Math.random() * cells.length);
    }
    window.setTimeout((e) => {
      cells[computerChoice].click(e);
    }, 1000);
  } else if (
    activePlayer.name === 'AI'
    && _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) === false
    && _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToAtt.board) !== false
  ) {
    const ships = [_gameboard__WEBPACK_IMPORTED_MODULE_0__.carrier, _gameboard__WEBPACK_IMPORTED_MODULE_0__.battleship, _gameboard__WEBPACK_IMPORTED_MODULE_0__.cruiser, _gameboard__WEBPACK_IMPORTED_MODULE_0__.submarine, _gameboard__WEBPACK_IMPORTED_MODULE_0__.destroyer];
    while (_gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) === false) {
      let start;
      let end;
      let status;
      computerChoice = Math.floor(Math.random() * cells.length);
      const ship = ships.shift();
      const pointA = [
        Number(cells[computerChoice].attributes.x.value),
        Number(cells[computerChoice].attributes.y.value),
      ];
      const pointB = [];
      pointB.push(pointA[0], pointA[1]);
      const random = Math.floor(Math.random() * 2);
      const temp1 = pointA[random];
      if (pointA[random] + ship.length < 10) {
        pointB[random] = temp1 + ship.length;
      } else {
        pointB[random] = temp1 - ship.length;
      }
      start = pointA;
      end = pointB;

      if (pointB[0] < pointA[0] || pointB[1] < pointA[1]) {
        start = pointB;
        end = pointA;
      }
      if (end[1] > start[1]) {
        for (let i = 0; i < ship.length; i++) {
          if (typeof boardToinsert.board[start[0]][start[1] + i] === 'object') {
            ships.unshift(ship);
            status = false;
            break;
          }
        }
      } else if (end[0] > start[0]) {
        for (let i = 0; i < ship.length; i++) {
          if (typeof boardToinsert.board[start[0] + i][start[1]] === 'object') {
            ships.unshift(ship);
            status = false;
            break;
          }
        }
      }
      if (status === false) {
        continue;
      } else {
        _gameboard__WEBPACK_IMPORTED_MODULE_0__.board2.placeShip(ship, pointA, pointB);
      }
    }
    Createboard();
  }
}

placeShipBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const activePlayer = players.getActivePlayer();
  const ships = [_gameboard__WEBPACK_IMPORTED_MODULE_0__.carrier, _gameboard__WEBPACK_IMPORTED_MODULE_0__.battleship, _gameboard__WEBPACK_IMPORTED_MODULE_0__.cruiser, _gameboard__WEBPACK_IMPORTED_MODULE_0__.submarine, _gameboard__WEBPACK_IMPORTED_MODULE_0__.destroyer];

  let ship;
  const selectedOption = placeShip1Name.options[placeShip1Name.selectedIndex];
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].name === selectedOption.value) {
      ship = ships[i];
    }
  }
  if (placeShip1Cordinates.value > 99 && placeShip2Cordinates.value > 99) {
    alert('Cant enter number bigger than 9 try again!');
    return false;
  }

  let x = Number(placeShip1Cordinates.value[0]);
  let y = Number(placeShip1Cordinates.value[1]);
  let x2 = Number(placeShip2Cordinates.value[0]);
  let y2 = Number(placeShip2Cordinates.value[1]);
  if (x > x2) {
    x2 += ship.length;
    x += 1;
  } else if (x2 > x) {
    x += ship.length;
    x2 += 1;
  } else if (y > y2) {
    y2 += ship.length;
    y += 1;
  } else {
    y += ship.length;
    y2 += 1;
  }
  if (x !== x2 || y !== y2) {
    alert('Cordinates are Invalid try again!');
    return false;
  }
  if ((activePlayer.name !== playerName1.value && activePlayer.name !== player.value)
    && activePlayer.name !== 'AI') {
    _gameboard__WEBPACK_IMPORTED_MODULE_0__.board2.placeShip(
      ship,
      [
        Number(placeShip1Cordinates.value[0]),
        Number(placeShip1Cordinates.value[1]),
      ],
      [
        Number(placeShip2Cordinates.value[0]),
        Number(placeShip2Cordinates.value[1]),
      ],
    );
  } else if (activePlayer.name === playerName1.value || activePlayer.name === player.value) {
    _gameboard__WEBPACK_IMPORTED_MODULE_0__.board.placeShip(
      ship,
      [
        Number(placeShip1Cordinates.value[0]),
        Number(placeShip1Cordinates.value[1]),
      ],
      [
        Number(placeShip2Cordinates.value[0]),
        Number(placeShip2Cordinates.value[1]),
      ],
    );
  }
  placeShip1Cordinates.value = '';
  placeShip2Cordinates.value = '';
  Createboard();
});
const createModal = document.createElement('div');
const modalContent = document.createElement('form');
createModal.classList.add('modal-div');
const confirm = document.createElement('button');
const playerName1Label = document.createElement('label');
const playerName2Label = document.createElement('label');
const playerName1 = document.createElement('input');
const playerName2 = document.createElement('input');

document.body.appendChild(createModal);

const exit1 = document.createElement('button');
exit1.textContent = 'X';
createModal.appendChild(modalContent);
modalContent.appendChild(exit1);
modalContent.appendChild(confirm);
modalContent.appendChild(playerName1Label);
modalContent.appendChild(playerName1);
modalContent.appendChild(playerName2Label);
modalContent.appendChild(playerName2);

playerName1Label.textContent = 'PLAYER-1';
playerName2Label.textContent = 'PLAYER-2';
playerName1.setAttribute('placeholder', 'type-name');
playerName2.setAttribute('placeholder', 'type-name');
confirm.textContent = 'CONFIRM';
confirm.setAttribute('id', 'confirm');
modalContent.setAttribute('id', 'modal-content');
createModal.setAttribute('id', 'myModal');

const player1 = document.createElement('h2');
player1.setAttribute('id', 'player1');

const player2 = document.createElement('h2');
player2.setAttribute('id', 'player2');
confirm.addEventListener('click', (event) => {
  players.choosePlayerName();
  player1.textContent = playerName1.value;
  document.body.appendChild(player1);
  document.body.appendChild(player2);
  createModal.style.display = 'none';
  Createboard();
  event.preventDefault();
});

const popModule = document.createElement('button');
const popModule2 = document.createElement('button');
document.body.appendChild(popModule);
document.body.appendChild(popModule2);
popModule2.textContent = 'PLAY VS AI';
popModule.textContent = 'PLAYER VS PLAYER';
popModule.addEventListener('click', () => {
  popModule.style.visibility = 'hidden';
  popModule2.style.visibility = 'hidden';
  createModal.style.display = 'block';
});

const createModal2 = document.createElement('div');
const modalContent2 = document.createElement('form');
createModal2.classList.add('modal-div');
const confirm2 = document.createElement('button');
const playerLabel = document.createElement('label');
const player = document.createElement('input');
const exit2 = document.createElement('button');

exit2.textContent = 'X';
document.body.appendChild(createModal2);
createModal2.appendChild(modalContent2);
modalContent2.appendChild(exit2);
exit1.style.width = '24px';
exit2.style.width = '24px';
modalContent2.appendChild(confirm2);
modalContent2.appendChild(playerLabel);
modalContent2.appendChild(player);
playerLabel.textContent = 'PLAYER-1';
confirm2.textContent = 'CONFIRM';
confirm2.setAttribute('id', 'confirm');
modalContent2.setAttribute('id', 'modal-content2');
createModal2.setAttribute('id', 'myModal');

popModule2.addEventListener('click', () => {
  popModule2.style.visibility = 'hidden';
  popModule.style.visibility = 'hidden';
  createModal2.style.display = 'block';
});

confirm2.addEventListener('click', (event) => {
  playerName2.setAttribute('value', 'AI');
  players.choosePlayerName();
  player1.textContent = player.value;
  document.body.appendChild(player1);
  document.body.appendChild(player2);
  createModal2.style.display = 'none';
  Createboard();
  event.preventDefault();
});

const imgContainer = document.createElement('div');
const img = document.createElement('div');
document.body.appendChild(imgContainer);
imgContainer.appendChild(img);
img.setAttribute('id', 'img');
imgContainer.setAttribute('id', 'myModal2');
imgContainer.style.display = 'none';
imgContainer.addEventListener('click', () => {
  imgContainer.style.display = 'none';
});
exit1.addEventListener('click', () => {
  createModal.style.display = 'none';
  popModule2.style.visibility = 'visible';
  popModule.style.visibility = 'visible';
});
exit2.addEventListener('click', () => {
  popModule2.style.visibility = 'visible';
  popModule.style.visibility = 'visible';
  createModal2.style.display = 'none';
});



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





function Game() {
  const activePlayer = _dom__WEBPACK_IMPORTED_MODULE_1__.players.getActivePlayer();
  if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(_gameboard__WEBPACK_IMPORTED_MODULE_0__.board.board) === 'all ships have been sunk') {
    alert(`${activePlayer.name} Wins`);
    return false;
  } 
  if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(_gameboard__WEBPACK_IMPORTED_MODULE_0__.board2.board) === 'all ships have been sunk') {
    alert(`${activePlayer.name} Wins`);
    _dom__WEBPACK_IMPORTED_MODULE_1__.imgContainer.style.display = 'block';
    return false;
  } 
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   battleship: () => (/* binding */ battleship),
/* harmony export */   board: () => (/* binding */ board),
/* harmony export */   board2: () => (/* binding */ board2),
/* harmony export */   carrier: () => (/* binding */ carrier),
/* harmony export */   cruiser: () => (/* binding */ cruiser),
/* harmony export */   "default": () => (/* binding */ Gameboard),
/* harmony export */   destroyer: () => (/* binding */ destroyer),
/* harmony export */   submarine: () => (/* binding */ submarine)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




function Gameboard() {
  const createBoard = (arr = []) => {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = false;
      }
    }
    return arr;
  };
  const board = createBoard();
  const placeShip = (ship, pointA, pointB) => {
    let start = pointA;
    let end = pointB;

    if (board.some((row) => row.includes(ship))) {
      alert('Allready have that ship');
      return false;
    }

    if (pointB[0] < pointA[0] || pointB[1] < pointA[1]) {
      start = pointB;
      end = pointA;
    }

    if (end[1] > start[1]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0]][start[1] + i] = ship;
      }
    } else if (end[0] > start[0]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0] + i][start[1]] = ship;
      }
    }
    return true;
  };


  const recieveAttack = (x, y) => {
    if (board[x][y] !== false && board[x][y] !== 'hit' && board[x][y] !== 'miss') {
      const temp = board[x][y];
      temp.hit(temp);
      board[x][y] = 'hit';
      alert('hit');    
    } else if (board[x][y] === false && board[x][y] !== 'miss' && board[x][y] !== 'hit' && typeof board[x][y] !== 'object') {
      board[x][y] = 'miss';
      alert('miss');
    } else if (board[x][y] === 'miss' || board[x][y] === 'hit') {
      alert('that position is allready hit');
      return false;
    }
  };

  const status = (board) => {
    let hits = 0;
    let ships = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === 'hit') {
          hits++;
          ships++
        }
        if (typeof board[i][j] === 'object') {
          ships++;
        }
      }
    }
    if (hits === 17) {
      return 'all ships have been sunk';
    }
    if (ships !== 17) {
      return false;
    }
    return 'keep playing';
  };
  return {
    get board() {
      return board;
    },
    createBoard,
    placeShip,
    recieveAttack,
    status,
  };
}
const board = Gameboard();
const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier', 5);
const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship', 4);
const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('cruiser', 3);
const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine', 3);
const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('destroyer', 2);
const board2 = Gameboard();

/*board.placeShip(carrier, [4, 0], [0, 0]);
board.placeShip(battleship, [7, 5], [7, 9]);
board.placeShip(cruiser, [5, 5], [5, 7]);
board.placeShip(submarine, [2, 2], [2, 4]);
board.placeShip(destroyer, [8, 5], [8, 6]);
board2.placeShip(carrier, [4, 0], [0, 0]);
board2.placeShip(battleship, [7, 5], [7, 9]);
board2.placeShip(cruiser, [5, 5], [5, 7]);
board2.placeShip(submarine, [2, 2], [2, 4]);
board2.placeShip(destroyer, [8, 5], [8, 6]);
// board2.recieveAttack(8, 6);*/


board2.status(board2.board);




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayers: () => (/* binding */ createPlayers)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


function createPlayers(name) {
  const players = [
    {
      name,
    },
    {
      name,
    },
  ];
  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
      _dom__WEBPACK_IMPORTED_MODULE_0__.player1.textContent = `Player: ${activePlayer.name}'s turn`;
    } else {
      activePlayer = players[0];
      _dom__WEBPACK_IMPORTED_MODULE_0__.player1.textContent = `Player: ${activePlayer.name}'s turn`;
    }
    return activePlayer;
  };
  const getActivePlayer = () => activePlayer;
  const choosePlayerName = () => {
    players[0].name = '';
    players[1].name = '';
    players[0].name = _dom__WEBPACK_IMPORTED_MODULE_0__.playerName1.value;
    if (_dom__WEBPACK_IMPORTED_MODULE_0__.playerName1.value === '') {
      players[0].name = _dom__WEBPACK_IMPORTED_MODULE_0__.player.value;
    }
    players[1].name = _dom__WEBPACK_IMPORTED_MODULE_0__.playerName2.value;
  };

  return {
    name,
    switchPlayerTurn,
    choosePlayerName,
    getActivePlayer,
  };
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


 function Ship(name = null, length = null, hitTimes = 0, isSunk = false) {
  const hit = (obj) => { obj.hitTimes += 1 };

  const isSunkFn = (obj, shipLength, hits) => {
    if (shipLength === hits) {
      obj.isSunk = true;
      return 'Ship is sunk';
    } 
    return 'Ship is alive';
  };

  return {
    name, length, hitTimes, isSunk, hit, isSunkFn,
  };
}


/***/ }),

/***/ "./src/2210.jpg":
/*!**********************!*\
  !*** ./src/2210.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d40623b4e83482181a1.jpg";

/***/ }),

/***/ "./src/incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.jpg":
/*!*******************************************************************************************************!*\
  !*** ./src/incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.jpg ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4729d49b20a2f42255de.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ship.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0ZBQTJCO0FBQ3ZFLDRDQUE0QyxpUUFBNEc7QUFDeEosOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFB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QUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiMjIxMC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbmNyZWRpYmxlLW1ham9yLXN0ZWFtcHVuay1iYWxsb29uLWZsb2F0aW5nLXdhdGVyLXN1cmZhY2UtaWxsdXN0cmF0aW9ucy1nZW5lcmF0aXZlLWFpLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2FyZDEsIC5ib2FyZDIge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDU1MHB4O1xuICB3aWR0aDogNTUwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGdhcDogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgZ3JpZC1yb3c6IDIvMztcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuICBib2R5e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5ib2FyZDEge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbiAgLmJvYXJkMiB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuICAjcGxheWVyMXtcbiAgICBncmlkLXJvdzogMS8yOyBcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAjbXlNb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMjgsIDI4LCAwLjU1KTtcbiAgfVxuXG4gICNjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyO1xuICAgIGNvbHVtbi1nYXA6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXJvdzogMi8zO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgcm93LWdhcDogMTBweDtcbiAgfVxuI2NvbnRhaW5lciA+IGxhYmVsIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwMHB4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbiAgI215TW9kYWwyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMjgsIDI4LCAwLjU1KTtcbiAgfVxuXG4gICNpbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gICNtb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgI21vZGFsLWNvbnRlbnQyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAjbW9kYWwtY29udGVudCA+IGlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjp0b3AgO1xuICB9XG5cbiAgI2Zvcm17XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xud2lkdGg6IDUwMHB4O1xuXG4gIH1cblxuICAjZm9ybSA+IGRpdiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG5cbiAgI2Zvcm0gPiBsYWJlbCB7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG4gICNmb3JtID4gaW5wdXQsIHNlbGVjdCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG4gICNmb3JtID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpc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O0VBQ3RCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ib2FyZDEsIC5ib2FyZDIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICB3aWR0aDogNTUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBnYXA6IDJweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgfVxcbiAgYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgfVxcbiAgLmJvYXJkMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIH1cXG4gIC5ib2FyZDIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB9XFxuICAjcGxheWVyMXtcXG4gICAgZ3JpZC1yb3c6IDEvMjsgXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIC5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgI215TW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDI4LCAyOCwgMC41NSk7XFxuICB9XFxuXFxuICAjY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDFmcjtcXG4gICAgY29sdW1uLWdhcDogMTUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICB9XFxuI2NvbnRhaW5lciA+IGxhYmVsIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDAwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIFxcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuICAjbXlNb2RhbDIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDI4LCAyOCwgMC41NSk7XFxuICB9XFxuXFxuICAjaW1nIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKDIyMTAuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuICBcXG4gICNtb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gICNtb2RhbC1jb250ZW50MiB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuXFxuICAjbW9kYWwtY29udGVudCA+IGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIGJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbmNyZWRpYmxlLW1ham9yLXN0ZWFtcHVuay1iYWxsb29uLWZsb2F0aW5nLXdhdGVyLXN1cmZhY2UtaWxsdXN0cmF0aW9ucy1nZW5lcmF0aXZlLWFpLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODUlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnRvcCA7XFxuICB9XFxuXFxuICAjZm9ybXtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbndpZHRoOiA1MDBweDtcXG5cXG4gIH1cXG5cXG4gICNmb3JtID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjZm9ybSA+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG4gICNmb3JtID4gaW5wdXQsIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAjZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBib2FyZCxcbiAgYm9hcmQyLFxuICBiYXR0bGVzaGlwLFxuICBkZXN0cm95ZXIsXG4gIHN1Ym1hcmluZSxcbiAgY3J1aXNlcixcbiAgY2Fycmllcixcbn0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IGNyZWF0ZVBsYXllcnMgfSBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IHBsYXllcnMgPSBjcmVhdGVQbGF5ZXJzKCk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuY29uc3QgcGxhY2VTaGlwMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xucGxhY2VTaGlwMUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xuY29uc3QgcGxhY2VTaGlwMU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuY29uc3QgcGxhY2VTaGlwMUNvcmRpbmF0ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBwbGFjZVNoaXAxQ29yZGluYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5wbGFjZVNoaXAxQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG5wbGFjZVNoaXAxQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoJ21pbicsICcwMCcpO1xucGxhY2VTaGlwMUNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCdtYXgnLCAnOTknKTtcbmNvbnN0IHBsYWNlU2hpcDJDb3JkaW5hdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxhY2VTaGlwMkNvcmRpbmF0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucGxhY2VTaGlwMkNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xucGxhY2VTaGlwMkNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCdtaW4nLCAnMDAnKTtcbnBsYWNlU2hpcDJDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgnbWF4JywgJzk5Jyk7XG5jb25zdCBwbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbigpIHtcbiAgd2hpbGUgKHBsYWNlU2hpcDFOYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICBwbGFjZVNoaXAxTmFtZS5yZW1vdmVDaGlsZChwbGFjZVNoaXAxTmFtZS5maXJzdENoaWxkKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgY2Fycmllci5uYW1lLFxuICAgICAgYmF0dGxlc2hpcC5uYW1lLFxuICAgICAgY3J1aXNlci5uYW1lLFxuICAgICAgc3VibWFyaW5lLm5hbWUsXG4gICAgICBkZXN0cm95ZXIubmFtZSxcbiAgICBdO1xuICAgIGNvbnN0IHNoaXBPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGxhY2VTaGlwMU5hbWUuYXBwZW5kQ2hpbGQoc2hpcE9wdGlvbnMpO1xuICAgIHNoaXBPcHRpb25zLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3T3B0aW9uJyk7XG4gICAgc2hpcE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHNoaXBzW2ldKTtcbiAgICBzaGlwT3B0aW9ucy50ZXh0Q29udGVudCA9IHNoaXBzW2ldO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZWJvYXJkKCkge1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgYm9hcmREaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJvYXJkRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZERpdjEuY2xhc3NMaXN0LmFkZCgnYm9hcmQxJyk7XG4gIGJvYXJkRGl2Mi5jbGFzc0xpc3QuYWRkKCdib2FyZDInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRGl2MSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZERpdjIpO1xuICBsZXQgdGVtcCA9IDA7XG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXllcnMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gIGxldCBib2FyZFRvaW5zZXJ0ID0gYm9hcmQ7XG4gIGxldCBib2FyZFRvQXR0ID0gYm9hcmQyO1xuXG4gIGlmIChhY3RpdmVQbGF5ZXIubmFtZSAhPT0gcGxheWVyTmFtZTEudmFsdWUgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09IHBsYXllci52YWx1ZSkge1xuICAgIGJvYXJkVG9pbnNlcnQgPSBib2FyZDI7XG4gICAgYm9hcmRUb0F0dCA9IGJvYXJkO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbEJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNlbGxCdXR0b24xLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIGJvYXJkRGl2MS5hcHBlbmRDaGlsZChjZWxsQnV0dG9uMSk7XG4gICAgICBjZWxsQnV0dG9uMS5zZXRBdHRyaWJ1dGUoJ3gnLCBpKTtcbiAgICAgIGNlbGxCdXR0b24xLnNldEF0dHJpYnV0ZSgneScsIGopO1xuICAgICAgY29uc3QgY2VsbEJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNlbGxCdXR0b24yLmNsYXNzTGlzdC5hZGQoJ2NlbGwyJyk7XG4gICAgICBib2FyZERpdjIuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbjIpO1xuICAgICAgY2VsbEJ1dHRvbjIuc2V0QXR0cmlidXRlKCd4JywgaSk7XG4gICAgICBjZWxsQnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ3knLCBqKTtcbiAgICAgIGNlbGxCdXR0b24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0ZW1wKyspO1xuICAgICAgY2VsbEJ1dHRvbjEudGV4dENvbnRlbnQgPSBgJHtpfSR7an1gO1xuICAgICAgY2VsbEJ1dHRvbjEuc3R5bGUuY29sb3IgPSAnIzkwOTY5Mic7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZFRvaW5zZXJ0LmJvYXJkW2ldW2pdID09PSAnb2JqZWN0J1xuICAgICAgICB8fCBib2FyZFRvaW5zZXJ0LmJvYXJkW2ldW2pdID09PSAnaGl0J1xuICAgICAgKSB7XG4gICAgICAgIGNlbGxCdXR0b24xLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICAgICAgY2VsbEJ1dHRvbjEudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmIChib2FyZFRvQXR0LmJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgY2VsbEJ1dHRvbjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIGNlbGxCdXR0b24yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRUb0F0dC5ib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY2VsbEJ1dHRvbjIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsQnV0dG9uMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgfVxuICAgICAgaWYgKGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcDFMYWJlbCk7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYENhcnJpZXItc2l6ZTogNS1jZWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhdHRsZXNoaXAtc2l6ZTogNC1jZWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENydWlzZXItc2l6ZTogMy1jZWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1hcmluZS1zaXplOiAzLWNlbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzdHJveWVyLXNpemU6IDItY2VsbHNgO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMU5hbWUpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMUNvcmRpbmF0ZXNMYWJlbCk7XG4gICAgICAgIHBsYWNlU2hpcDFDb3JkaW5hdGVzTGFiZWwudGV4dENvbnRlbnQgPSBgVHlwZSBpbiB0d28gZGlnaXQgbnVtYmVyIG9mIGJvYXJkJ3MgY2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgeW91IHdhbnQgeW91ciBzaGlwIHRvIHN0YXJ0YDtcbiAgICAgICAgcGxhY2VTaGlwMUxhYmVsLmFwcGVuZENoaWxkKHBsYWNlU2hpcDFDb3JkaW5hdGVzKTtcbiAgICAgICAgcGxhY2VTaGlwMUxhYmVsLmFwcGVuZENoaWxkKHBsYWNlU2hpcDJDb3JkaW5hdGVzTGFiZWwpO1xuICAgICAgICBwbGFjZVNoaXAyQ29yZGluYXRlc0xhYmVsLnRleHRDb250ZW50ID0gYFR5cGUgaW4gdHdvIGRpZ2l0IG51bWJlciBvZiBib2FyZCdzIGNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgeW91IHdhbnQgeW91ciBzaGlwIHRvIGVuZCwgVElQOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYWNoIHNoaXAgaGFzIGhvdyBtdWNoIGNlbGxzIGl0IGNhbiB0YWtlLmA7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChwbGFjZVNoaXAyQ29yZGluYXRlcyk7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChwbGFjZVNoaXBCdG4pO1xuICAgICAgICBwbGFjZVNoaXBCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgcGxhY2VTaGlwMUNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgJzAwIC0gOTknLFxuICAgICAgICApO1xuICAgICAgICBwbGFjZVNoaXAyQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAnMDAgLSA5OScsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxCdXR0b24yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyMS50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyIHNoaXBzIFBsYXllcjogJHthY3RpdmVQbGF5ZXIubmFtZX1gO1xuICAgICAgfVxuXG4gICAgICBjZWxsQnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGJvYXJkVG9BdHQucmVjaWV2ZUF0dGFjayhcbiAgICAgICAgICBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMueC52YWx1ZSksXG4gICAgICAgICAgTnVtYmVyKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLnkudmFsdWUpLFxuICAgICAgICApO1xuICAgICAgICAvLyBlLmN1cnJlbnRUYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChHYW1lKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXJzLnN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgICAgICBwb3BNb2R1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICBwb3BNb2R1bGUyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoYm9hcmQuc3RhdHVzKGJvYXJkVG9pbnNlcnQuYm9hcmQpID09PSBmYWxzZSAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gJ0FJJykge1xuICAgIGNyZWF0ZU9wdGlvbigpO1xuICB9XG5cbiAgaWYgKFxuICAgIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSAhPT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgPT09IGZhbHNlXG4gICAgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09ICdBSSdcbiAgKSB7XG4gICAgcGxheWVycy5zd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgQ3JlYXRlYm9hcmQoKTtcbiAgICAvLyBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICB9XG4gIGlmIChcbiAgICBib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgIT09IGZhbHNlXG4gICAgJiYgYm9hcmQuc3RhdHVzKGJvYXJkVG9BdHQuYm9hcmQpICE9PSBmYWxzZVxuICAgICYmIGFjdGl2ZVBsYXllci5uYW1lICE9PSAnQUknXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGwyJyk7XG4gIGxldCBjb21wdXRlckNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGxzLmxlbmd0aCk7XG4gIGlmIChcbiAgICBhY3RpdmVQbGF5ZXIubmFtZSA9PT0gJ0FJJ1xuICAgICYmIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSAhPT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgIT09IGZhbHNlXG4gICkge1xuICAgIHdoaWxlIChcbiAgICAgIGJvYXJkVG9BdHQuYm9hcmRbY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmF0dHJpYnV0ZXMueC52YWx1ZV1bXG4gICAgICAgIGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLnkudmFsdWVcbiAgICAgIF0gPT09ICdoaXQnXG4gICAgICB8fCBib2FyZFRvQXR0LmJvYXJkW2NlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLngudmFsdWVdW1xuICAgICAgICBjZWxsc1tjb21wdXRlckNob2ljZV0uYXR0cmlidXRlcy55LnZhbHVlXG4gICAgICBdID09PSAnbWlzcydcbiAgICApIHtcbiAgICAgIGNvbXB1dGVyQ2hvaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2VsbHMubGVuZ3RoKTtcbiAgICB9XG4gICAgd2luZG93LnNldFRpbWVvdXQoKGUpID0+IHtcbiAgICAgIGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5jbGljayhlKTtcbiAgICB9LCAxMDAwKTtcbiAgfSBlbHNlIGlmIChcbiAgICBhY3RpdmVQbGF5ZXIubmFtZSA9PT0gJ0FJJ1xuICAgICYmIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSA9PT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgIT09IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgICB3aGlsZSAoYm9hcmQuc3RhdHVzKGJvYXJkVG9pbnNlcnQuYm9hcmQpID09PSBmYWxzZSkge1xuICAgICAgbGV0IHN0YXJ0O1xuICAgICAgbGV0IGVuZDtcbiAgICAgIGxldCBzdGF0dXM7XG4gICAgICBjb21wdXRlckNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGxzLmxlbmd0aCk7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHMuc2hpZnQoKTtcbiAgICAgIGNvbnN0IHBvaW50QSA9IFtcbiAgICAgICAgTnVtYmVyKGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLngudmFsdWUpLFxuICAgICAgICBOdW1iZXIoY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmF0dHJpYnV0ZXMueS52YWx1ZSksXG4gICAgICBdO1xuICAgICAgY29uc3QgcG9pbnRCID0gW107XG4gICAgICBwb2ludEIucHVzaChwb2ludEFbMF0sIHBvaW50QVsxXSk7XG4gICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGNvbnN0IHRlbXAxID0gcG9pbnRBW3JhbmRvbV07XG4gICAgICBpZiAocG9pbnRBW3JhbmRvbV0gKyBzaGlwLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHBvaW50QltyYW5kb21dID0gdGVtcDEgKyBzaGlwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50QltyYW5kb21dID0gdGVtcDEgLSBzaGlwLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gcG9pbnRBO1xuICAgICAgZW5kID0gcG9pbnRCO1xuXG4gICAgICBpZiAocG9pbnRCWzBdIDwgcG9pbnRBWzBdIHx8IHBvaW50QlsxXSA8IHBvaW50QVsxXSkge1xuICAgICAgICBzdGFydCA9IHBvaW50QjtcbiAgICAgICAgZW5kID0gcG9pbnRBO1xuICAgICAgfVxuICAgICAgaWYgKGVuZFsxXSA+IHN0YXJ0WzFdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRUb2luc2VydC5ib2FyZFtzdGFydFswXV1bc3RhcnRbMV0gKyBpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoaXBzLnVuc2hpZnQoc2hpcCk7XG4gICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkVG9pbnNlcnQuYm9hcmRbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGlwcy51bnNoaWZ0KHNoaXApO1xuICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQyLnBsYWNlU2hpcChzaGlwLCBwb2ludEEsIHBvaW50Qik7XG4gICAgICB9XG4gICAgfVxuICAgIENyZWF0ZWJvYXJkKCk7XG4gIH1cbn1cblxucGxhY2VTaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXllcnMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcblxuICBsZXQgc2hpcDtcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBwbGFjZVNoaXAxTmFtZS5vcHRpb25zW3BsYWNlU2hpcDFOYW1lLnNlbGVjdGVkSW5kZXhdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNoaXBzW2ldLm5hbWUgPT09IHNlbGVjdGVkT3B0aW9uLnZhbHVlKSB7XG4gICAgICBzaGlwID0gc2hpcHNbaV07XG4gICAgfVxuICB9XG4gIGlmIChwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZSA+IDk5ICYmIHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlID4gOTkpIHtcbiAgICBhbGVydCgnQ2FudCBlbnRlciBudW1iZXIgYmlnZ2VyIHRoYW4gOSB0cnkgYWdhaW4hJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHggPSBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMF0pO1xuICBsZXQgeSA9IE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVsxXSk7XG4gIGxldCB4MiA9IE51bWJlcihwbGFjZVNoaXAyQ29yZGluYXRlcy52YWx1ZVswXSk7XG4gIGxldCB5MiA9IE51bWJlcihwbGFjZVNoaXAyQ29yZGluYXRlcy52YWx1ZVsxXSk7XG4gIGlmICh4ID4geDIpIHtcbiAgICB4MiArPSBzaGlwLmxlbmd0aDtcbiAgICB4ICs9IDE7XG4gIH0gZWxzZSBpZiAoeDIgPiB4KSB7XG4gICAgeCArPSBzaGlwLmxlbmd0aDtcbiAgICB4MiArPSAxO1xuICB9IGVsc2UgaWYgKHkgPiB5Mikge1xuICAgIHkyICs9IHNoaXAubGVuZ3RoO1xuICAgIHkgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICB5ICs9IHNoaXAubGVuZ3RoO1xuICAgIHkyICs9IDE7XG4gIH1cbiAgaWYgKHggIT09IHgyIHx8IHkgIT09IHkyKSB7XG4gICAgYWxlcnQoJ0NvcmRpbmF0ZXMgYXJlIEludmFsaWQgdHJ5IGFnYWluIScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoKGFjdGl2ZVBsYXllci5uYW1lICE9PSBwbGF5ZXJOYW1lMS52YWx1ZSAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gcGxheWVyLnZhbHVlKVxuICAgICYmIGFjdGl2ZVBsYXllci5uYW1lICE9PSAnQUknKSB7XG4gICAgYm9hcmQyLnBsYWNlU2hpcChcbiAgICAgIHNoaXAsXG4gICAgICBbXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVswXSksXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVsxXSksXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWVbMF0pLFxuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWVbMV0pLFxuICAgICAgXSxcbiAgICApO1xuICB9IGVsc2UgaWYgKGFjdGl2ZVBsYXllci5uYW1lID09PSBwbGF5ZXJOYW1lMS52YWx1ZSB8fCBhY3RpdmVQbGF5ZXIubmFtZSA9PT0gcGxheWVyLnZhbHVlKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKFxuICAgICAgc2hpcCxcbiAgICAgIFtcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDFDb3JkaW5hdGVzLnZhbHVlWzBdKSxcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDFDb3JkaW5hdGVzLnZhbHVlWzFdKSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAyQ29yZGluYXRlcy52YWx1ZVswXSksXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAyQ29yZGluYXRlcy52YWx1ZVsxXSksXG4gICAgICBdLFxuICAgICk7XG4gIH1cbiAgcGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWUgPSAnJztcbiAgcGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWUgPSAnJztcbiAgQ3JlYXRlYm9hcmQoKTtcbn0pO1xuY29uc3QgY3JlYXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRpdicpO1xuY29uc3QgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgcGxheWVyTmFtZTFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBwbGF5ZXJOYW1lMkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IHBsYXllck5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IHBsYXllck5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbCk7XG5cbmNvbnN0IGV4aXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5leGl0MS50ZXh0Q29udGVudCA9ICdYJztcbmNyZWF0ZU1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZXhpdDEpO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNvbmZpcm0pO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHBsYXllck5hbWUxTGFiZWwpO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHBsYXllck5hbWUxKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMkxhYmVsKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMik7XG5cbnBsYXllck5hbWUxTGFiZWwudGV4dENvbnRlbnQgPSAnUExBWUVSLTEnO1xucGxheWVyTmFtZTJMYWJlbC50ZXh0Q29udGVudCA9ICdQTEFZRVItMic7XG5wbGF5ZXJOYW1lMS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3R5cGUtbmFtZScpO1xucGxheWVyTmFtZTIuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0eXBlLW5hbWUnKTtcbmNvbmZpcm0udGV4dENvbnRlbnQgPSAnQ09ORklSTSc7XG5jb25maXJtLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29uZmlybScpO1xubW9kYWxDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwtY29udGVudCcpO1xuY3JlYXRlTW9kYWwuc2V0QXR0cmlidXRlKCdpZCcsICdteU1vZGFsJyk7XG5cbmNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucGxheWVyMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllcjEnKTtcblxuY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5wbGF5ZXIyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyMicpO1xuY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBwbGF5ZXJzLmNob29zZVBsYXllck5hbWUoKTtcbiAgcGxheWVyMS50ZXh0Q29udGVudCA9IHBsYXllck5hbWUxLnZhbHVlO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXllcjEpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXllcjIpO1xuICBjcmVhdGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBDcmVhdGVib2FyZCgpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmNvbnN0IHBvcE1vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgcG9wTW9kdWxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BNb2R1bGUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BNb2R1bGUyKTtcbnBvcE1vZHVsZTIudGV4dENvbnRlbnQgPSAnUExBWSBWUyBBSSc7XG5wb3BNb2R1bGUudGV4dENvbnRlbnQgPSAnUExBWUVSIFZTIFBMQVlFUic7XG5wb3BNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcE1vZHVsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBvcE1vZHVsZTIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBjcmVhdGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25zdCBjcmVhdGVNb2RhbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1vZGFsQ29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jcmVhdGVNb2RhbDIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGl2Jyk7XG5jb25zdCBjb25maXJtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgcGxheWVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGV4aXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmV4aXQyLnRleHRDb250ZW50ID0gJ1gnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbDIpO1xuY3JlYXRlTW9kYWwyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudDIpO1xubW9kYWxDb250ZW50Mi5hcHBlbmRDaGlsZChleGl0Mik7XG5leGl0MS5zdHlsZS53aWR0aCA9ICcyNHB4JztcbmV4aXQyLnN0eWxlLndpZHRoID0gJzI0cHgnO1xubW9kYWxDb250ZW50Mi5hcHBlbmRDaGlsZChjb25maXJtMik7XG5tb2RhbENvbnRlbnQyLmFwcGVuZENoaWxkKHBsYXllckxhYmVsKTtcbm1vZGFsQ29udGVudDIuYXBwZW5kQ2hpbGQocGxheWVyKTtcbnBsYXllckxhYmVsLnRleHRDb250ZW50ID0gJ1BMQVlFUi0xJztcbmNvbmZpcm0yLnRleHRDb250ZW50ID0gJ0NPTkZJUk0nO1xuY29uZmlybTIuc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtJyk7XG5tb2RhbENvbnRlbnQyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwtY29udGVudDInKTtcbmNyZWF0ZU1vZGFsMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwnKTtcblxucG9wTW9kdWxlMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBvcE1vZHVsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIGNyZWF0ZU1vZGFsMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25maXJtMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBwbGF5ZXJOYW1lMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FJJyk7XG4gIHBsYXllcnMuY2hvb3NlUGxheWVyTmFtZSgpO1xuICBwbGF5ZXIxLnRleHRDb250ZW50ID0gcGxheWVyLnZhbHVlO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXllcjEpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBsYXllcjIpO1xuICBjcmVhdGVNb2RhbDIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgQ3JlYXRlYm9hcmQoKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5jb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5pbWcuc2V0QXR0cmlidXRlKCdpZCcsICdpbWcnKTtcbmltZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwyJyk7XG5pbWdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbmltZ0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaW1nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbmV4aXQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjcmVhdGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBwb3BNb2R1bGUyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIHBvcE1vZHVsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xufSk7XG5leGl0Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBwb3BNb2R1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgY3JlYXRlTW9kYWwyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbmV4cG9ydCB7XG4gIHBsYXllck5hbWUxLFxuICBwbGF5ZXJOYW1lMixcbiAgcGxheWVyMSxcbiAgcGxheWVyMixcbiAgaW1nQ29udGFpbmVyLFxuICBwbGF5ZXJzLFxuICBwbGFjZVNoaXAxTmFtZSxcbiAgcGxheWVyLFxufTtcbiIsImltcG9ydCB7IGJvYXJkMiwgYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgQ3JlYXRlYm9hcmQgZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgcGxheWVycyB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IGltZ0NvbnRhaW5lciB9IGZyb20gJy4vZG9tLmpzJztcblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgYWN0aXZlUGxheWVyID0gcGxheWVycy5nZXRBY3RpdmVQbGF5ZXIoKTtcbiAgaWYgKGJvYXJkLnN0YXR1cyhib2FyZC5ib2FyZCkgPT09ICdhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsnKSB7XG4gICAgYWxlcnQoYCR7YWN0aXZlUGxheWVyLm5hbWV9IFdpbnNgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gXG4gIGlmIChib2FyZC5zdGF0dXMoYm9hcmQyLmJvYXJkKSA9PT0gJ2FsbCBzaGlwcyBoYXZlIGJlZW4gc3VuaycpIHtcbiAgICBhbGVydChgJHthY3RpdmVQbGF5ZXIubmFtZX0gV2luc2ApO1xuICAgIGltZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gXG4gIENyZWF0ZWJvYXJkKCk7XG59XG5cbmV4cG9ydCB7IEdhbWUgfTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgQ3JlYXRlYm9hcmQgZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaW1nQ29udGFpbmVyIH0gZnJvbSAnLi9kb20uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKGFyciA9IFtdKSA9PiB7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuICAgIGNvbnN0IGNvbHVtbnMgPSAxMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgYXJyW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICBhcnJbaV1bal0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgcG9pbnRBLCBwb2ludEIpID0+IHtcbiAgICBsZXQgc3RhcnQgPSBwb2ludEE7XG4gICAgbGV0IGVuZCA9IHBvaW50QjtcblxuICAgIGlmIChib2FyZC5zb21lKChyb3cpID0+IHJvdy5pbmNsdWRlcyhzaGlwKSkpIHtcbiAgICAgIGFsZXJ0KCdBbGxyZWFkeSBoYXZlIHRoYXQgc2hpcCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChwb2ludEJbMF0gPCBwb2ludEFbMF0gfHwgcG9pbnRCWzFdIDwgcG9pbnRBWzFdKSB7XG4gICAgICBzdGFydCA9IHBvaW50QjtcbiAgICAgIGVuZCA9IHBvaW50QTtcbiAgICB9XG5cbiAgICBpZiAoZW5kWzFdID4gc3RhcnRbMV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFtzdGFydFswXV1bc3RhcnRbMV0gKyBpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0WzBdICsgaV1bc3RhcnRbMV1dID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gIT09IGZhbHNlICYmIGJvYXJkW3hdW3ldICE9PSAnaGl0JyAmJiBib2FyZFt4XVt5XSAhPT0gJ21pc3MnKSB7XG4gICAgICBjb25zdCB0ZW1wID0gYm9hcmRbeF1beV07XG4gICAgICB0ZW1wLmhpdCh0ZW1wKTtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ2hpdCc7XG4gICAgICBhbGVydCgnaGl0Jyk7ICAgIFxuICAgIH0gZWxzZSBpZiAoYm9hcmRbeF1beV0gPT09IGZhbHNlICYmIGJvYXJkW3hdW3ldICE9PSAnbWlzcycgJiYgYm9hcmRbeF1beV0gIT09ICdoaXQnICYmIHR5cGVvZiBib2FyZFt4XVt5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ21pc3MnO1xuICAgICAgYWxlcnQoJ21pc3MnKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSAnbWlzcycgfHwgYm9hcmRbeF1beV0gPT09ICdoaXQnKSB7XG4gICAgICBhbGVydCgndGhhdCBwb3NpdGlvbiBpcyBhbGxyZWFkeSBoaXQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhdHVzID0gKGJvYXJkKSA9PiB7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzaGlwcyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGhpdHMrKztcbiAgICAgICAgICBzaGlwcysrXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtpXVtqXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBzaGlwcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoaXRzID09PSAxNykge1xuICAgICAgcmV0dXJuICdhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsnO1xuICAgIH1cbiAgICBpZiAoc2hpcHMgIT09IDE3KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAna2VlcCBwbGF5aW5nJztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBjcmVhdGVCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBzdGF0dXMsXG4gIH07XG59XG5jb25zdCBib2FyZCA9IEdhbWVib2FyZCgpO1xuY29uc3QgY2FycmllciA9IFNoaXAoJ2NhcnJpZXInLCA1KTtcbmNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKCdiYXR0bGVzaGlwJywgNCk7XG5jb25zdCBjcnVpc2VyID0gU2hpcCgnY3J1aXNlcicsIDMpO1xuY29uc3Qgc3VibWFyaW5lID0gU2hpcCgnc3VibWFyaW5lJywgMyk7XG5jb25zdCBkZXN0cm95ZXIgPSBTaGlwKCdkZXN0cm95ZXInLCAyKTtcbmNvbnN0IGJvYXJkMiA9IEdhbWVib2FyZCgpO1xuXG4vKmJvYXJkLnBsYWNlU2hpcChjYXJyaWVyLCBbNCwgMF0sIFswLCAwXSk7XG5ib2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcCwgWzcsIDVdLCBbNywgOV0pO1xuYm9hcmQucGxhY2VTaGlwKGNydWlzZXIsIFs1LCA1XSwgWzUsIDddKTtcbmJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIFsyLCAyXSwgWzIsIDRdKTtcbmJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIFs4LCA1XSwgWzgsIDZdKTtcbmJvYXJkMi5wbGFjZVNoaXAoY2FycmllciwgWzQsIDBdLCBbMCwgMF0pO1xuYm9hcmQyLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBbNywgNV0sIFs3LCA5XSk7XG5ib2FyZDIucGxhY2VTaGlwKGNydWlzZXIsIFs1LCA1XSwgWzUsIDddKTtcbmJvYXJkMi5wbGFjZVNoaXAoc3VibWFyaW5lLCBbMiwgMl0sIFsyLCA0XSk7XG5ib2FyZDIucGxhY2VTaGlwKGRlc3Ryb3llciwgWzgsIDVdLCBbOCwgNl0pO1xuLy8gYm9hcmQyLnJlY2lldmVBdHRhY2soOCwgNik7Ki9cblxuXG5ib2FyZDIuc3RhdHVzKGJvYXJkMi5ib2FyZCk7XG5cbmV4cG9ydCB7XG4gIGJvYXJkMiwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNydWlzZXIsIGJvYXJkLCBjYXJyaWVyLFxufTtcbiIsImltcG9ydCB7XG4gIHBsYXllck5hbWUxLCBwbGF5ZXJOYW1lMiwgcGxheWVyMSwgcGxheWVyMiwgcGxheWVyLFxufSBmcm9tICcuL2RvbSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcnMobmFtZSkge1xuICBjb25zdCBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lLFxuICAgIH0sXG4gIF07XG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV07XG4gICAgICBwbGF5ZXIxLnRleHRDb250ZW50ID0gYFBsYXllcjogJHthY3RpdmVQbGF5ZXIubmFtZX0ncyB0dXJuYDtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcbiAgICAgIHBsYXllcjEudGV4dENvbnRlbnQgPSBgUGxheWVyOiAke2FjdGl2ZVBsYXllci5uYW1lfSdzIHR1cm5gO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlUGxheWVyO1xuICB9O1xuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XG4gIGNvbnN0IGNob29zZVBsYXllck5hbWUgPSAoKSA9PiB7XG4gICAgcGxheWVyc1swXS5uYW1lID0gJyc7XG4gICAgcGxheWVyc1sxXS5uYW1lID0gJyc7XG4gICAgcGxheWVyc1swXS5uYW1lID0gcGxheWVyTmFtZTEudmFsdWU7XG4gICAgaWYgKHBsYXllck5hbWUxLnZhbHVlID09PSAnJykge1xuICAgICAgcGxheWVyc1swXS5uYW1lID0gcGxheWVyLnZhbHVlO1xuICAgIH1cbiAgICBwbGF5ZXJzWzFdLm5hbWUgPSBwbGF5ZXJOYW1lMi52YWx1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgc3dpdGNoUGxheWVyVHVybixcbiAgICBjaG9vc2VQbGF5ZXJOYW1lLFxuICAgIGdldEFjdGl2ZVBsYXllcixcbiAgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUGxheWVycyB9O1xuIiwiaW1wb3J0IHtib2FyZDJ9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobmFtZSA9IG51bGwsIGxlbmd0aCA9IG51bGwsIGhpdFRpbWVzID0gMCwgaXNTdW5rID0gZmFsc2UpIHtcbiAgY29uc3QgaGl0ID0gKG9iaikgPT4geyBvYmouaGl0VGltZXMgKz0gMSB9O1xuXG4gIGNvbnN0IGlzU3Vua0ZuID0gKG9iaiwgc2hpcExlbmd0aCwgaGl0cykgPT4ge1xuICAgIGlmIChzaGlwTGVuZ3RoID09PSBoaXRzKSB7XG4gICAgICBvYmouaXNTdW5rID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnU2hpcCBpcyBzdW5rJztcbiAgICB9IFxuICAgIHJldHVybiAnU2hpcCBpcyBhbGl2ZSc7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLCBsZW5ndGgsIGhpdFRpbWVzLCBpc1N1bmssIGhpdCwgaXNTdW5rRm4sXG4gIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zaGlwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9