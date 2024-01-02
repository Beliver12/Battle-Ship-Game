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
/* harmony export */   board: () => (/* binding */ board),
/* harmony export */   board2: () => (/* binding */ board2),
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

let board2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
function updateBoards() {
  board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  board2 = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

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
  let boardToinsert = board;
  let boardToAtt = board2;
  if (activePlayer.name !== playerName1.value && activePlayer.name !== player.value
    && activePlayer.name !== 'AI') {
    createOption();
  }
  if (activePlayer.name !== playerName1.value && activePlayer.name !== player.value) {
    boardToinsert = board2;
    boardToAtt = board;
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
      if (board.status(boardToinsert.board) === false) {
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
        if ((0,_game__WEBPACK_IMPORTED_MODULE_2__.Game)() === false) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
          player1.style.display = 'none';
          player2.style.display = 'none';
          document.body.appendChild(popModule);
          document.body.appendChild(popModule2);
          popModule.style.visibility = 'visible';
          popModule2.style.visibility = 'visible';
          updateBoards();
          return false;
        }
        players.switchPlayerTurn();
        Createboard();
      });
    }
  }

  if (
    board.status(boardToinsert.board) !== false
    && board.status(boardToAtt.board) === false
    && activePlayer.name !== 'AI'
  ) {
    players.switchPlayerTurn();
    Createboard();
    // activePlayer = players.getActivePlayer();
  }
  if (
    board.status(boardToinsert.board) !== false
    && board.status(boardToAtt.board) !== false
    && activePlayer.name !== 'AI'
  ) {
    return false;
  }
  const cells = document.getElementsByClassName('cell2');
  let computerChoice = Math.floor(Math.random() * cells.length);
  if (
    activePlayer.name === 'AI'
    && board.status(boardToinsert.board) !== false
    && board.status(boardToAtt.board) !== false
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

    cells[computerChoice].click();
  } else if (
    activePlayer.name === 'AI'
    && board.status(boardToinsert.board) === false
    && board.status(boardToAtt.board) !== false
  ) {
    const ships = [_gameboard__WEBPACK_IMPORTED_MODULE_0__.carrier, _gameboard__WEBPACK_IMPORTED_MODULE_0__.battleship, _gameboard__WEBPACK_IMPORTED_MODULE_0__.cruiser, _gameboard__WEBPACK_IMPORTED_MODULE_0__.submarine, _gameboard__WEBPACK_IMPORTED_MODULE_0__.destroyer];
    while (board.status(boardToinsert.board) === false) {
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
        board2.placeShip(ship, pointA, pointB);
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
     selectedOption.remove(selectedOption[i]);
    }
  }
  if (placeShip1Cordinates.value > 99 && placeShip2Cordinates.value > 99) {
    alert('Cant enter number bigger than 9 try again!');
    const shipOptions = document.createElement('option');
    placeShip1Name.appendChild(shipOptions);
    shipOptions.setAttribute('id', 'newOption');
    shipOptions.setAttribute('value', ship.name);
    shipOptions.textContent = ship.name;
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
    const shipOptions = document.createElement('option');
    placeShip1Name.appendChild(shipOptions);
    shipOptions.setAttribute('id', 'newOption');
    shipOptions.setAttribute('value', ship.name);
    shipOptions.textContent = ship.name;
    return false;
  }
  if ((activePlayer.name !== playerName1.value && activePlayer.name !== player.value)
    && activePlayer.name !== 'AI') {
    board2.placeShip(
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
    board.placeShip(
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
  player1.style.display = 'block';
  player2.style.display = 'block';
  Createboard();
  createOption();
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
  playerName2.value = '';
  player.value = '';
  playerName1.value = '';
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
  playerName2.value = '';
  player.value = '';
  playerName1.value = '';
  createModal2.style.display = 'block';
});

confirm2.addEventListener('click', (event) => {
  playerName2.value = 'AI';
  players.choosePlayerName();
  player1.textContent = player.value;
  player1.style.display = 'block';
  player2.style.display = 'block';
  document.body.appendChild(player1);
  document.body.appendChild(player2);
  createModal2.style.display = 'none';

  Createboard();
  createOption();
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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





function Game() {
  const activePlayer = _dom_js__WEBPACK_IMPORTED_MODULE_0__.players.getActivePlayer();
  if (_dom_js__WEBPACK_IMPORTED_MODULE_0__.board.status(_dom_js__WEBPACK_IMPORTED_MODULE_0__.board.board) === 'all ships have been sunk') {
    alert(`${activePlayer.name} Wins`);
    return false;
  } 
  if (_dom_js__WEBPACK_IMPORTED_MODULE_0__.board.status(_dom_js__WEBPACK_IMPORTED_MODULE_0__.board2.board) === 'all ships have been sunk') {
    alert(`${activePlayer.name} Wins`);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.imgContainer.style.display = 'block';
    return false;
  } 
  return true;
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   battleship: () => (/* binding */ battleship),
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
    const activePlayer = _dom_js__WEBPACK_IMPORTED_MODULE_1__.players.getActivePlayer();
    if (board[x][y] !== false && board[x][y] !== 'hit' && board[x][y] !== 'miss') {
      const temp = board[x][y];
      temp.hit(temp);
      board[x][y] = 'hit';
      alert(`${activePlayer.name} hit a target`);
    } else if (board[x][y] === false && board[x][y] !== 'miss' && board[x][y] !== 'hit' && typeof board[x][y] !== 'object') {
      board[x][y] = 'miss';
      alert(`${activePlayer.name} missed a target`);
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
          ships++;
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

const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier', 5);
const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship', 4);
const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('cruiser', 3);
const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine', 3);
const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('destroyer', 2);

/* board.placeShip(carrier, [4, 0], [0, 0]);
board.placeShip(battleship, [7, 5], [7, 9]);
board.placeShip(cruiser, [5, 5], [5, 7]);
board.placeShip(submarine, [2, 2], [2, 4]);
board.placeShip(destroyer, [8, 5], [8, 6]);
board2.placeShip(carrier, [4, 0], [0, 0]);
board2.placeShip(battleship, [7, 5], [7, 9]);
board2.placeShip(cruiser, [5, 5], [5, 7]);
board2.placeShip(submarine, [2, 2], [2, 4]);
board2.placeShip(destroyer, [8, 5], [8, 6]);
// board2.recieveAttack(8, 6); */





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0ZBQTJCO0FBQ3ZFLDRDQUE0QyxpUUFBNEc7QUFDeEosOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQ0FBTyxFQUFFLGtEQUFVLEVBQUUsK0NBQU8sRUFBRSxpREFBUyxFQUFFLGlEQUFTOztBQUVuRTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIyMjEwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImluY3JlZGlibGUtbWFqb3Itc3RlYW1wdW5rLWJhbGxvb24tZmxvYXRpbmctd2F0ZXItc3VyZmFjZS1pbGx1c3RyYXRpb25zLWdlbmVyYXRpdmUtYWkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJvYXJkMSwgLmJvYXJkMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogNTUwcHg7XG4gIHdpZHRoOiA1NTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZ2FwOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBncmlkLXJvdzogMi8zO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG4gIGJvZHl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmJvYXJkMSB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuICAuYm9hcmQyIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG4gICNwbGF5ZXIxe1xuICAgIGdyaWQtcm93OiAxLzI7IFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5jZWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICNteU1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAyOCwgMjgsIDAuNTUpO1xuICB9XG5cbiAgI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAxZnI7XG4gICAgY29sdW1uLWdhcDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICByb3ctZ2FwOiAxMHB4O1xuICB9XG4jY29udGFpbmVyID4gbGFiZWwge1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDAwcHg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIFxuICBmb250LXNpemU6IGxhcmdlO1xufVxuICAjbXlNb2RhbDIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCAyOCwgMjgsIDAuNTUpO1xuICB9XG5cbiAgI2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgI21vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAjbW9kYWwtY29udGVudDIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gICNtb2RhbC1jb250ZW50ID4gaW5wdXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnRvcCA7XG4gIH1cblxuICAjZm9ybXtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG53aWR0aDogNTAwcHg7XG5cbiAgfVxuXG4gICNmb3JtID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cblxuICAjZm9ybSA+IGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgI2Zvcm0gPiBpbnB1dCwgc2VsZWN0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgI2Zvcm0gPiBidXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6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LFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvYXJkMSwgLmJvYXJkMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIHdpZHRoOiA1NTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGdhcDogMnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICB9XFxuICBib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICB9XFxuICAuYm9hcmQxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcbiAgLmJvYXJkMiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIH1cXG4gICNwbGF5ZXIxe1xcbiAgICBncmlkLXJvdzogMS8yOyBcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAjbXlNb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMjgsIDI4LCAwLjU1KTtcXG4gIH1cXG5cXG4gICNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgcm93LWdhcDogMTBweDtcXG4gIH1cXG4jY29udGFpbmVyID4gbGFiZWwge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgXFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4gICNteU1vZGFsMiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMjgsIDI4LCAwLjU1KTtcXG4gIH1cXG5cXG4gICNpbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoMjIxMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gIFxcbiAgI21vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcbiAgI21vZGFsLWNvbnRlbnQyIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICNtb2RhbC1jb250ZW50ID4gaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgYm9keXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGluY3JlZGlibGUtbWFqb3Itc3RlYW1wdW5rLWJhbGxvb24tZmxvYXRpbmctd2F0ZXItc3VyZmFjZS1pbGx1c3RyYXRpb25zLWdlbmVyYXRpdmUtYWkuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246dG9wIDtcXG4gIH1cXG5cXG4gICNmb3Jte1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxud2lkdGg6IDUwMHB4O1xcblxcbiAgfVxcblxcbiAgI2Zvcm0gPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNmb3JtID4gbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgfVxcbiAgI2Zvcm0gPiBpbnB1dCwgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG4gICNmb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lYm9hcmQsIHtcbiAgYmF0dGxlc2hpcCxcbiAgZGVzdHJveWVyLFxuICBzdWJtYXJpbmUsXG4gIGNydWlzZXIsXG4gIGNhcnJpZXIsXG59IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5jb25zdCBwbGF5ZXJzID0gY3JlYXRlUGxheWVycygpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IHBsYWNlU2hpcDFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbnBsYWNlU2hpcDFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0nKTtcbmNvbnN0IHBsYWNlU2hpcDFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbmNvbnN0IHBsYWNlU2hpcDFDb3JkaW5hdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxhY2VTaGlwMUNvcmRpbmF0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucGxhY2VTaGlwMUNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xucGxhY2VTaGlwMUNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCdtaW4nLCAnMDAnKTtcbnBsYWNlU2hpcDFDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgnbWF4JywgJzk5Jyk7XG5jb25zdCBwbGFjZVNoaXAyQ29yZGluYXRlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IHBsYWNlU2hpcDJDb3JkaW5hdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnBsYWNlU2hpcDJDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbnBsYWNlU2hpcDJDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgnbWluJywgJzAwJyk7XG5wbGFjZVNoaXAyQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoJ21heCcsICc5OScpO1xuY29uc3QgcGxhY2VTaGlwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5sZXQgYm9hcmQyID0gR2FtZWJvYXJkKCk7XG5sZXQgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkcygpIHtcbiAgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgYm9hcmQyID0gR2FtZWJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbigpIHtcbiAgd2hpbGUgKHBsYWNlU2hpcDFOYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICBwbGFjZVNoaXAxTmFtZS5yZW1vdmVDaGlsZChwbGFjZVNoaXAxTmFtZS5maXJzdENoaWxkKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgY2Fycmllci5uYW1lLFxuICAgICAgYmF0dGxlc2hpcC5uYW1lLFxuICAgICAgY3J1aXNlci5uYW1lLFxuICAgICAgc3VibWFyaW5lLm5hbWUsXG4gICAgICBkZXN0cm95ZXIubmFtZSxcbiAgICBdO1xuICAgIGNvbnN0IHNoaXBPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGxhY2VTaGlwMU5hbWUuYXBwZW5kQ2hpbGQoc2hpcE9wdGlvbnMpO1xuICAgIHNoaXBPcHRpb25zLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3T3B0aW9uJyk7XG4gICAgc2hpcE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHNoaXBzW2ldKTtcbiAgICBzaGlwT3B0aW9ucy50ZXh0Q29udGVudCA9IHNoaXBzW2ldO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZWJvYXJkKCkge1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgYm9hcmREaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJvYXJkRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZERpdjEuY2xhc3NMaXN0LmFkZCgnYm9hcmQxJyk7XG4gIGJvYXJkRGl2Mi5jbGFzc0xpc3QuYWRkKCdib2FyZDInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRGl2MSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZERpdjIpO1xuICBsZXQgdGVtcCA9IDA7XG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXllcnMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gIGxldCBib2FyZFRvaW5zZXJ0ID0gYm9hcmQ7XG4gIGxldCBib2FyZFRvQXR0ID0gYm9hcmQyO1xuICBpZiAoYWN0aXZlUGxheWVyLm5hbWUgIT09IHBsYXllck5hbWUxLnZhbHVlICYmIGFjdGl2ZVBsYXllci5uYW1lICE9PSBwbGF5ZXIudmFsdWVcbiAgICAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gJ0FJJykge1xuICAgIGNyZWF0ZU9wdGlvbigpO1xuICB9XG4gIGlmIChhY3RpdmVQbGF5ZXIubmFtZSAhPT0gcGxheWVyTmFtZTEudmFsdWUgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09IHBsYXllci52YWx1ZSkge1xuICAgIGJvYXJkVG9pbnNlcnQgPSBib2FyZDI7XG4gICAgYm9hcmRUb0F0dCA9IGJvYXJkO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbEJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNlbGxCdXR0b24xLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIGJvYXJkRGl2MS5hcHBlbmRDaGlsZChjZWxsQnV0dG9uMSk7XG4gICAgICBjZWxsQnV0dG9uMS5zZXRBdHRyaWJ1dGUoJ3gnLCBpKTtcbiAgICAgIGNlbGxCdXR0b24xLnNldEF0dHJpYnV0ZSgneScsIGopO1xuICAgICAgY29uc3QgY2VsbEJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNlbGxCdXR0b24yLmNsYXNzTGlzdC5hZGQoJ2NlbGwyJyk7XG4gICAgICBib2FyZERpdjIuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbjIpO1xuICAgICAgY2VsbEJ1dHRvbjIuc2V0QXR0cmlidXRlKCd4JywgaSk7XG4gICAgICBjZWxsQnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ3knLCBqKTtcbiAgICAgIGNlbGxCdXR0b24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0ZW1wKyspO1xuICAgICAgY2VsbEJ1dHRvbjEudGV4dENvbnRlbnQgPSBgJHtpfSR7an1gO1xuICAgICAgY2VsbEJ1dHRvbjEuc3R5bGUuY29sb3IgPSAnIzkwOTY5Mic7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBib2FyZFRvaW5zZXJ0LmJvYXJkW2ldW2pdID09PSAnb2JqZWN0J1xuICAgICAgICB8fCBib2FyZFRvaW5zZXJ0LmJvYXJkW2ldW2pdID09PSAnaGl0J1xuICAgICAgKSB7XG4gICAgICAgIGNlbGxCdXR0b24xLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICAgICAgY2VsbEJ1dHRvbjEudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmIChib2FyZFRvQXR0LmJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgY2VsbEJ1dHRvbjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIGNlbGxCdXR0b24yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRUb0F0dC5ib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY2VsbEJ1dHRvbjIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjZWxsQnV0dG9uMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgfVxuICAgICAgaWYgKGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlU2hpcDFMYWJlbCk7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYENhcnJpZXItc2l6ZTogNS1jZWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhdHRsZXNoaXAtc2l6ZTogNC1jZWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENydWlzZXItc2l6ZTogMy1jZWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1hcmluZS1zaXplOiAzLWNlbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzdHJveWVyLXNpemU6IDItY2VsbHNgO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMU5hbWUpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMUNvcmRpbmF0ZXNMYWJlbCk7XG4gICAgICAgIHBsYWNlU2hpcDFDb3JkaW5hdGVzTGFiZWwudGV4dENvbnRlbnQgPSBgVHlwZSBpbiB0d28gZGlnaXQgbnVtYmVyIG9mIGJvYXJkJ3MgY2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgeW91IHdhbnQgeW91ciBzaGlwIHRvIHN0YXJ0YDtcbiAgICAgICAgcGxhY2VTaGlwMUxhYmVsLmFwcGVuZENoaWxkKHBsYWNlU2hpcDFDb3JkaW5hdGVzKTtcbiAgICAgICAgcGxhY2VTaGlwMUxhYmVsLmFwcGVuZENoaWxkKHBsYWNlU2hpcDJDb3JkaW5hdGVzTGFiZWwpO1xuICAgICAgICBwbGFjZVNoaXAyQ29yZGluYXRlc0xhYmVsLnRleHRDb250ZW50ID0gYFR5cGUgaW4gdHdvIGRpZ2l0IG51bWJlciBvZiBib2FyZCdzIGNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgeW91IHdhbnQgeW91ciBzaGlwIHRvIGVuZCwgVElQOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYWNoIHNoaXAgaGFzIGhvdyBtdWNoIGNlbGxzIGl0IGNhbiB0YWtlLmA7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChwbGFjZVNoaXAyQ29yZGluYXRlcyk7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChwbGFjZVNoaXBCdG4pO1xuICAgICAgICBwbGFjZVNoaXBCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgcGxhY2VTaGlwMUNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgJzAwIC0gOTknLFxuICAgICAgICApO1xuICAgICAgICBwbGFjZVNoaXAyQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAnMDAgLSA5OScsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxCdXR0b24yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyMS50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyIHNoaXBzIFBsYXllcjogJHthY3RpdmVQbGF5ZXIubmFtZX1gO1xuICAgICAgfVxuXG4gICAgICBjZWxsQnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGJvYXJkVG9BdHQucmVjaWV2ZUF0dGFjayhcbiAgICAgICAgICBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMueC52YWx1ZSksXG4gICAgICAgICAgTnVtYmVyKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLnkudmFsdWUpLFxuICAgICAgICApO1xuICAgICAgICBpZiAoR2FtZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHBsYXllcjIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcE1vZHVsZSk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BNb2R1bGUyKTtcbiAgICAgICAgICBwb3BNb2R1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICBwb3BNb2R1bGUyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgdXBkYXRlQm9hcmRzKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllcnMuc3dpdGNoUGxheWVyVHVybigpO1xuICAgICAgICBDcmVhdGVib2FyZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKFxuICAgIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSAhPT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgPT09IGZhbHNlXG4gICAgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09ICdBSSdcbiAgKSB7XG4gICAgcGxheWVycy5zd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgQ3JlYXRlYm9hcmQoKTtcbiAgICAvLyBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICB9XG4gIGlmIChcbiAgICBib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgIT09IGZhbHNlXG4gICAgJiYgYm9hcmQuc3RhdHVzKGJvYXJkVG9BdHQuYm9hcmQpICE9PSBmYWxzZVxuICAgICYmIGFjdGl2ZVBsYXllci5uYW1lICE9PSAnQUknXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGwyJyk7XG4gIGxldCBjb21wdXRlckNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGxzLmxlbmd0aCk7XG4gIGlmIChcbiAgICBhY3RpdmVQbGF5ZXIubmFtZSA9PT0gJ0FJJ1xuICAgICYmIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSAhPT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgIT09IGZhbHNlXG4gICkge1xuICAgIHdoaWxlIChcbiAgICAgIGJvYXJkVG9BdHQuYm9hcmRbY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmF0dHJpYnV0ZXMueC52YWx1ZV1bXG4gICAgICAgIGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLnkudmFsdWVcbiAgICAgIF0gPT09ICdoaXQnXG4gICAgICB8fCBib2FyZFRvQXR0LmJvYXJkW2NlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLngudmFsdWVdW1xuICAgICAgICBjZWxsc1tjb21wdXRlckNob2ljZV0uYXR0cmlidXRlcy55LnZhbHVlXG4gICAgICBdID09PSAnbWlzcydcbiAgICApIHtcbiAgICAgIGNvbXB1dGVyQ2hvaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2VsbHMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBjZWxsc1tjb21wdXRlckNob2ljZV0uY2xpY2soKTtcbiAgfSBlbHNlIGlmIChcbiAgICBhY3RpdmVQbGF5ZXIubmFtZSA9PT0gJ0FJJ1xuICAgICYmIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSA9PT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgIT09IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgICB3aGlsZSAoYm9hcmQuc3RhdHVzKGJvYXJkVG9pbnNlcnQuYm9hcmQpID09PSBmYWxzZSkge1xuICAgICAgbGV0IHN0YXJ0O1xuICAgICAgbGV0IGVuZDtcbiAgICAgIGxldCBzdGF0dXM7XG4gICAgICBjb21wdXRlckNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGxzLmxlbmd0aCk7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHMuc2hpZnQoKTtcbiAgICAgIGNvbnN0IHBvaW50QSA9IFtcbiAgICAgICAgTnVtYmVyKGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLngudmFsdWUpLFxuICAgICAgICBOdW1iZXIoY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmF0dHJpYnV0ZXMueS52YWx1ZSksXG4gICAgICBdO1xuICAgICAgY29uc3QgcG9pbnRCID0gW107XG4gICAgICBwb2ludEIucHVzaChwb2ludEFbMF0sIHBvaW50QVsxXSk7XG4gICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGNvbnN0IHRlbXAxID0gcG9pbnRBW3JhbmRvbV07XG4gICAgICBpZiAocG9pbnRBW3JhbmRvbV0gKyBzaGlwLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHBvaW50QltyYW5kb21dID0gdGVtcDEgKyBzaGlwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50QltyYW5kb21dID0gdGVtcDEgLSBzaGlwLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gcG9pbnRBO1xuICAgICAgZW5kID0gcG9pbnRCO1xuXG4gICAgICBpZiAocG9pbnRCWzBdIDwgcG9pbnRBWzBdIHx8IHBvaW50QlsxXSA8IHBvaW50QVsxXSkge1xuICAgICAgICBzdGFydCA9IHBvaW50QjtcbiAgICAgICAgZW5kID0gcG9pbnRBO1xuICAgICAgfVxuICAgICAgaWYgKGVuZFsxXSA+IHN0YXJ0WzFdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRUb2luc2VydC5ib2FyZFtzdGFydFswXV1bc3RhcnRbMV0gKyBpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoaXBzLnVuc2hpZnQoc2hpcCk7XG4gICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkVG9pbnNlcnQuYm9hcmRbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGlwcy51bnNoaWZ0KHNoaXApO1xuICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQyLnBsYWNlU2hpcChzaGlwLCBwb2ludEEsIHBvaW50Qik7XG4gICAgICB9XG4gICAgfVxuICAgIENyZWF0ZWJvYXJkKCk7XG4gIH1cbn1cblxucGxhY2VTaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXllcnMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcblxuICBsZXQgc2hpcDtcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBwbGFjZVNoaXAxTmFtZS5vcHRpb25zW3BsYWNlU2hpcDFOYW1lLnNlbGVjdGVkSW5kZXhdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNoaXBzW2ldLm5hbWUgPT09IHNlbGVjdGVkT3B0aW9uLnZhbHVlKSB7XG4gICAgICBzaGlwID0gc2hpcHNbaV07XG4gICAgIHNlbGVjdGVkT3B0aW9uLnJlbW92ZShzZWxlY3RlZE9wdGlvbltpXSk7XG4gICAgfVxuICB9XG4gIGlmIChwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZSA+IDk5ICYmIHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlID4gOTkpIHtcbiAgICBhbGVydCgnQ2FudCBlbnRlciBudW1iZXIgYmlnZ2VyIHRoYW4gOSB0cnkgYWdhaW4hJyk7XG4gICAgY29uc3Qgc2hpcE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwbGFjZVNoaXAxTmFtZS5hcHBlbmRDaGlsZChzaGlwT3B0aW9ucyk7XG4gICAgc2hpcE9wdGlvbnMuc2V0QXR0cmlidXRlKCdpZCcsICduZXdPcHRpb24nKTtcbiAgICBzaGlwT3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2hpcC5uYW1lKTtcbiAgICBzaGlwT3B0aW9ucy50ZXh0Q29udGVudCA9IHNoaXAubmFtZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgeCA9IE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVswXSk7XG4gIGxldCB5ID0gTnVtYmVyKHBsYWNlU2hpcDFDb3JkaW5hdGVzLnZhbHVlWzFdKTtcbiAgbGV0IHgyID0gTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzBdKTtcbiAgbGV0IHkyID0gTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzFdKTtcbiAgaWYgKHggPiB4Mikge1xuICAgIHgyICs9IHNoaXAubGVuZ3RoO1xuICAgIHggKz0gMTtcbiAgfSBlbHNlIGlmICh4MiA+IHgpIHtcbiAgICB4ICs9IHNoaXAubGVuZ3RoO1xuICAgIHgyICs9IDE7XG4gIH0gZWxzZSBpZiAoeSA+IHkyKSB7XG4gICAgeTIgKz0gc2hpcC5sZW5ndGg7XG4gICAgeSArPSAxO1xuICB9IGVsc2Uge1xuICAgIHkgKz0gc2hpcC5sZW5ndGg7XG4gICAgeTIgKz0gMTtcbiAgfVxuICBpZiAoeCAhPT0geDIgfHwgeSAhPT0geTIpIHtcbiAgICBhbGVydCgnQ29yZGluYXRlcyBhcmUgSW52YWxpZCB0cnkgYWdhaW4hJyk7XG4gICAgY29uc3Qgc2hpcE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwbGFjZVNoaXAxTmFtZS5hcHBlbmRDaGlsZChzaGlwT3B0aW9ucyk7XG4gICAgc2hpcE9wdGlvbnMuc2V0QXR0cmlidXRlKCdpZCcsICduZXdPcHRpb24nKTtcbiAgICBzaGlwT3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2hpcC5uYW1lKTtcbiAgICBzaGlwT3B0aW9ucy50ZXh0Q29udGVudCA9IHNoaXAubmFtZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKChhY3RpdmVQbGF5ZXIubmFtZSAhPT0gcGxheWVyTmFtZTEudmFsdWUgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09IHBsYXllci52YWx1ZSlcbiAgICAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gJ0FJJykge1xuICAgIGJvYXJkMi5wbGFjZVNoaXAoXG4gICAgICBzaGlwLFxuICAgICAgW1xuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMF0pLFxuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMV0pLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzBdKSxcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzFdKSxcbiAgICAgIF0sXG4gICAgKTtcbiAgfSBlbHNlIGlmIChhY3RpdmVQbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZTEudmFsdWUgfHwgYWN0aXZlUGxheWVyLm5hbWUgPT09IHBsYXllci52YWx1ZSkge1xuICAgIGJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHNoaXAsXG4gICAgICBbXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVswXSksXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVsxXSksXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWVbMF0pLFxuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWVbMV0pLFxuICAgICAgXSxcbiAgICApO1xuICB9XG4gIHBsYWNlU2hpcDFDb3JkaW5hdGVzLnZhbHVlID0gJyc7XG4gIHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlID0gJyc7XG4gIENyZWF0ZWJvYXJkKCk7XG59KTtcbmNvbnN0IGNyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jcmVhdGVNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kaXYnKTtcbmNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IHBsYXllck5hbWUxTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxheWVyTmFtZTJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBwbGF5ZXJOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBwbGF5ZXJOYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWwpO1xuXG5jb25zdCBleGl0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhpdDEudGV4dENvbnRlbnQgPSAnWCc7XG5jcmVhdGVNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGV4aXQxKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb25maXJtKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMUxhYmVsKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMSk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZTJMYWJlbCk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZTIpO1xuXG5wbGF5ZXJOYW1lMUxhYmVsLnRleHRDb250ZW50ID0gJ1BMQVlFUi0xJztcbnBsYXllck5hbWUyTGFiZWwudGV4dENvbnRlbnQgPSAnUExBWUVSLTInO1xucGxheWVyTmFtZTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0eXBlLW5hbWUnKTtcbnBsYXllck5hbWUyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndHlwZS1uYW1lJyk7XG5jb25maXJtLnRleHRDb250ZW50ID0gJ0NPTkZJUk0nO1xuY29uZmlybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbmZpcm0nKTtcbm1vZGFsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWNvbnRlbnQnKTtcbmNyZWF0ZU1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnbXlNb2RhbCcpO1xuXG5jb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnBsYXllcjEuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXIxJyk7XG5cbmNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucGxheWVyMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllcjInKTtcbmNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgcGxheWVycy5jaG9vc2VQbGF5ZXJOYW1lKCk7XG4gIHBsYXllcjEudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lMS52YWx1ZTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIxKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcbiAgY3JlYXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcGxheWVyMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgcGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgQ3JlYXRlYm9hcmQoKTtcbiAgY3JlYXRlT3B0aW9uKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY29uc3QgcG9wTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBwb3BNb2R1bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcE1vZHVsZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcE1vZHVsZTIpO1xucG9wTW9kdWxlMi50ZXh0Q29udGVudCA9ICdQTEFZIFZTIEFJJztcbnBvcE1vZHVsZS50ZXh0Q29udGVudCA9ICdQTEFZRVIgVlMgUExBWUVSJztcbnBvcE1vZHVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wTW9kdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBsYXllck5hbWUyLnZhbHVlID0gJyc7XG4gIHBsYXllci52YWx1ZSA9ICcnO1xuICBwbGF5ZXJOYW1lMS52YWx1ZSA9ICcnO1xuICBjcmVhdGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25zdCBjcmVhdGVNb2RhbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1vZGFsQ29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jcmVhdGVNb2RhbDIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGl2Jyk7XG5jb25zdCBjb25maXJtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgcGxheWVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGV4aXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmV4aXQyLnRleHRDb250ZW50ID0gJ1gnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbDIpO1xuY3JlYXRlTW9kYWwyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudDIpO1xubW9kYWxDb250ZW50Mi5hcHBlbmRDaGlsZChleGl0Mik7XG5leGl0MS5zdHlsZS53aWR0aCA9ICcyNHB4JztcbmV4aXQyLnN0eWxlLndpZHRoID0gJzI0cHgnO1xubW9kYWxDb250ZW50Mi5hcHBlbmRDaGlsZChjb25maXJtMik7XG5tb2RhbENvbnRlbnQyLmFwcGVuZENoaWxkKHBsYXllckxhYmVsKTtcbm1vZGFsQ29udGVudDIuYXBwZW5kQ2hpbGQocGxheWVyKTtcbnBsYXllckxhYmVsLnRleHRDb250ZW50ID0gJ1BMQVlFUi0xJztcbmNvbmZpcm0yLnRleHRDb250ZW50ID0gJ0NPTkZJUk0nO1xuY29uZmlybTIuc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtJyk7XG5tb2RhbENvbnRlbnQyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwtY29udGVudDInKTtcbmNyZWF0ZU1vZGFsMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwnKTtcblxucG9wTW9kdWxlMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBvcE1vZHVsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBsYXllck5hbWUyLnZhbHVlID0gJyc7XG4gIHBsYXllci52YWx1ZSA9ICcnO1xuICBwbGF5ZXJOYW1lMS52YWx1ZSA9ICcnO1xuICBjcmVhdGVNb2RhbDIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcblxuY29uZmlybTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgcGxheWVyTmFtZTIudmFsdWUgPSAnQUknO1xuICBwbGF5ZXJzLmNob29zZVBsYXllck5hbWUoKTtcbiAgcGxheWVyMS50ZXh0Q29udGVudCA9IHBsYXllci52YWx1ZTtcbiAgcGxheWVyMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgcGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIxKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcbiAgY3JlYXRlTW9kYWwyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgQ3JlYXRlYm9hcmQoKTtcbiAgY3JlYXRlT3B0aW9uKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbmltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1nJyk7XG5pbWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdteU1vZGFsMicpO1xuaW1nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5pbWdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGltZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5leGl0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3JlYXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBwb3BNb2R1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbn0pO1xuZXhpdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcE1vZHVsZTIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgcG9wTW9kdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGNyZWF0ZU1vZGFsMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5leHBvcnQge1xuICBwbGF5ZXJOYW1lMSxcbiAgcGxheWVyTmFtZTIsXG4gIHBsYXllcjEsXG4gIHBsYXllcjIsXG4gIGltZ0NvbnRhaW5lcixcbiAgcGxheWVycyxcbiAgcGxhY2VTaGlwMU5hbWUsXG4gIHBsYXllcixcbiAgYm9hcmQsXG4gIGJvYXJkMixcbn07XG4iLCJpbXBvcnQgeyBib2FyZDIsIGJvYXJkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IENyZWF0ZWJvYXJkIGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBpbWdDb250YWluZXIgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXllcnMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gIGlmIChib2FyZC5zdGF0dXMoYm9hcmQuYm9hcmQpID09PSAnYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rJykge1xuICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBXaW5zYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IFxuICBpZiAoYm9hcmQuc3RhdHVzKGJvYXJkMi5ib2FyZCkgPT09ICdhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsnKSB7XG4gICAgYWxlcnQoYCR7YWN0aXZlUGxheWVyLm5hbWV9IFdpbnNgKTtcbiAgICBpbWdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgR2FtZSB9O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBDcmVhdGVib2FyZCwgeyBpbWdDb250YWluZXIsIHBsYXllcnMgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoYXJyID0gW10pID0+IHtcbiAgICBjb25zdCByb3dzID0gMTA7XG4gICAgY29uc3QgY29sdW1ucyA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBhcnJbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGFycltpXVtqXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBwb2ludEEsIHBvaW50QikgPT4ge1xuICAgIGxldCBzdGFydCA9IHBvaW50QTtcbiAgICBsZXQgZW5kID0gcG9pbnRCO1xuXG4gICAgaWYgKGJvYXJkLnNvbWUoKHJvdykgPT4gcm93LmluY2x1ZGVzKHNoaXApKSkge1xuICAgICAgYWxlcnQoJ0FsbHJlYWR5IGhhdmUgdGhhdCBzaGlwJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50QlswXSA8IHBvaW50QVswXSB8fCBwb2ludEJbMV0gPCBwb2ludEFbMV0pIHtcbiAgICAgIHN0YXJ0ID0gcG9pbnRCO1xuICAgICAgZW5kID0gcG9pbnRBO1xuICAgIH1cblxuICAgIGlmIChlbmRbMV0gPiBzdGFydFsxXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0WzBdXVtzdGFydFsxXSArIGldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVuZFswXSA+IHN0YXJ0WzBdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICAgIGlmIChib2FyZFt4XVt5XSAhPT0gZmFsc2UgJiYgYm9hcmRbeF1beV0gIT09ICdoaXQnICYmIGJvYXJkW3hdW3ldICE9PSAnbWlzcycpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBib2FyZFt4XVt5XTtcbiAgICAgIHRlbXAuaGl0KHRlbXApO1xuICAgICAgYm9hcmRbeF1beV0gPSAnaGl0JztcbiAgICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBoaXQgYSB0YXJnZXRgKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSBmYWxzZSAmJiBib2FyZFt4XVt5XSAhPT0gJ21pc3MnICYmIGJvYXJkW3hdW3ldICE9PSAnaGl0JyAmJiB0eXBlb2YgYm9hcmRbeF1beV0gIT09ICdvYmplY3QnKSB7XG4gICAgICBib2FyZFt4XVt5XSA9ICdtaXNzJztcbiAgICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBtaXNzZWQgYSB0YXJnZXRgKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSAnbWlzcycgfHwgYm9hcmRbeF1beV0gPT09ICdoaXQnKSB7XG4gICAgICBhbGVydCgndGhhdCBwb3NpdGlvbiBpcyBhbGxyZWFkeSBoaXQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RhdHVzID0gKGJvYXJkKSA9PiB7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzaGlwcyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGhpdHMrKztcbiAgICAgICAgICBzaGlwcysrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRbaV1bal0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgc2hpcHMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGl0cyA9PT0gMTcpIHtcbiAgICAgIHJldHVybiAnYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rJztcbiAgICB9XG4gICAgaWYgKHNoaXBzICE9PSAxNykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gJ2tlZXAgcGxheWluZyc7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgc3RhdHVzLFxuICB9O1xufVxuXG5jb25zdCBjYXJyaWVyID0gU2hpcCgnY2FycmllcicsIDUpO1xuY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcbmNvbnN0IGNydWlzZXIgPSBTaGlwKCdjcnVpc2VyJywgMyk7XG5jb25zdCBzdWJtYXJpbmUgPSBTaGlwKCdzdWJtYXJpbmUnLCAzKTtcbmNvbnN0IGRlc3Ryb3llciA9IFNoaXAoJ2Rlc3Ryb3llcicsIDIpO1xuXG4vKiBib2FyZC5wbGFjZVNoaXAoY2FycmllciwgWzQsIDBdLCBbMCwgMF0pO1xuYm9hcmQucGxhY2VTaGlwKGJhdHRsZXNoaXAsIFs3LCA1XSwgWzcsIDldKTtcbmJvYXJkLnBsYWNlU2hpcChjcnVpc2VyLCBbNSwgNV0sIFs1LCA3XSk7XG5ib2FyZC5wbGFjZVNoaXAoc3VibWFyaW5lLCBbMiwgMl0sIFsyLCA0XSk7XG5ib2FyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCBbOCwgNV0sIFs4LCA2XSk7XG5ib2FyZDIucGxhY2VTaGlwKGNhcnJpZXIsIFs0LCAwXSwgWzAsIDBdKTtcbmJvYXJkMi5wbGFjZVNoaXAoYmF0dGxlc2hpcCwgWzcsIDVdLCBbNywgOV0pO1xuYm9hcmQyLnBsYWNlU2hpcChjcnVpc2VyLCBbNSwgNV0sIFs1LCA3XSk7XG5ib2FyZDIucGxhY2VTaGlwKHN1Ym1hcmluZSwgWzIsIDJdLCBbMiwgNF0pO1xuYm9hcmQyLnBsYWNlU2hpcChkZXN0cm95ZXIsIFs4LCA1XSwgWzgsIDZdKTtcbi8vIGJvYXJkMi5yZWNpZXZlQXR0YWNrKDgsIDYpOyAqL1xuXG5cbmV4cG9ydCB7XG4gIEdhbWVib2FyZCwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNydWlzZXIsIGNhcnJpZXIsXG59O1xuIiwiaW1wb3J0IHtcbiAgcGxheWVyTmFtZTEsIHBsYXllck5hbWUyLCBwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIsXG59IGZyb20gJy4vZG9tJztcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVycyhuYW1lKSB7XG4gIGNvbnN0IHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgbmFtZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgXTtcbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG4gIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSkge1xuICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1sxXTtcbiAgICAgIHBsYXllcjEudGV4dENvbnRlbnQgPSBgUGxheWVyOiAke2FjdGl2ZVBsYXllci5uYW1lfSdzIHR1cm5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICAgICAgcGxheWVyMS50ZXh0Q29udGVudCA9IGBQbGF5ZXI6ICR7YWN0aXZlUGxheWVyLm5hbWV9J3MgdHVybmA7XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmVQbGF5ZXI7XG4gIH07XG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcbiAgY29uc3QgY2hvb3NlUGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXJzWzBdLm5hbWUgPSAnJztcbiAgICBwbGF5ZXJzWzFdLm5hbWUgPSAnJztcbiAgICBwbGF5ZXJzWzBdLm5hbWUgPSBwbGF5ZXJOYW1lMS52YWx1ZTtcbiAgICBpZiAocGxheWVyTmFtZTEudmFsdWUgPT09ICcnKSB7XG4gICAgICBwbGF5ZXJzWzBdLm5hbWUgPSBwbGF5ZXIudmFsdWU7XG4gICAgfVxuICAgIHBsYXllcnNbMV0ubmFtZSA9IHBsYXllck5hbWUyLnZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgIGNob29zZVBsYXllck5hbWUsXG4gICAgZ2V0QWN0aXZlUGxheWVyLFxuICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVQbGF5ZXJzIH07XG4iLCJpbXBvcnQge2JvYXJkMn0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lID0gbnVsbCwgbGVuZ3RoID0gbnVsbCwgaGl0VGltZXMgPSAwLCBpc1N1bmsgPSBmYWxzZSkge1xuICBjb25zdCBoaXQgPSAob2JqKSA9PiB7IG9iai5oaXRUaW1lcyArPSAxIH07XG5cbiAgY29uc3QgaXNTdW5rRm4gPSAob2JqLCBzaGlwTGVuZ3RoLCBoaXRzKSA9PiB7XG4gICAgaWYgKHNoaXBMZW5ndGggPT09IGhpdHMpIHtcbiAgICAgIG9iai5pc1N1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuICdTaGlwIGlzIHN1bmsnO1xuICAgIH0gXG4gICAgcmV0dXJuICdTaGlwIGlzIGFsaXZlJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsIGxlbmd0aCwgaGl0VGltZXMsIGlzU3VuaywgaGl0LCBpc1N1bmtGbixcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NoaXAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=