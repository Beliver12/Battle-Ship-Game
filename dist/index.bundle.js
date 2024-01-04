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
    padding: 20px;
    border: 1px solid #888;
    width: 70%;
    height: 70%;
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
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,sCAAsC;EACtC,mCAAmC;EACnC,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb,gBAAgB;EAChB;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,YAAY;IACZ,WAAW;EACb;EACA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,oBAAoB;EACtB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,aAAa;EACf;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,kCAAkC;EACpC;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,aAAa;EACf;AACF;EACE,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,oBAAoB;EACpB,YAAY;;EAEZ,gBAAgB;AAClB;EACE;IACE,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;IACpC,YAAY;IACZ,kCAAkC;EACpC;;EAEA;IACE,yDAA+B;IAC/B,qBAAqB;IACrB,4BAA4B;IAC5B,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,sBAAsB;IACtB,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,yDAAgH;IAChH,oBAAoB;IACpB,4BAA4B;IAC5B,wBAAwB;EAC1B;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;AACjB,YAAY;;EAEV;;EAEA;IACE,+BAA+B;IAC/B,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,YAAY;IACZ,oBAAoB;EACtB;EACA;IACE,YAAY;IACZ,oBAAoB;EACtB","sourcesContent":[".board1, .board2 {\n  display: grid;\n  height: 550px;\n  width: 550px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  gap: 2px;\n  padding: 2px;\n  background-color: yellow;\n  grid-row: 2/3;\n  margin-top: 60px;\n  }\n  body{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 50px 1fr;\n    height: 100%;\n    margin: 0px;\n  }\n  .board1 {\n    grid-column: 1/2;\n    justify-self: center;\n    align-self: flex-end;\n  }\n  .board2 {\n    grid-column: 2/3;\n    justify-self: center;\n    align-self: flex-end;\n  }\n  #player1{\n    grid-row: 1/2; \n    justify-self: flex-end;\n    color: white;\n    background: rgba(0, 0, 0, 0.55);\n    text-align: center;\n    height: 40px;\n    margin-top: 0px;\n    padding: 10px;\n  }\n\n  .cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 2rem;\n    border: 1px solid grey;\n    background: lightyellow;\n    cursor: pointer;\n  }\n\n  #myModal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n    color: white;\n    background: rgba(31, 28, 28, 0.55);\n  }\n\n  #container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 200px 1fr;\n    column-gap: 150px;\n    width: 100%;\n    height: 100%;\n    grid-row: 2/3;\n    grid-column: 1/3;\n    row-gap: 10px;\n  }\n#container > label {\n  grid-row: 1/2;\n  grid-column: 1/2;\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  justify-self: center;\n  color: white;\n  \n  font-size: large;\n}\n  #myModal2 {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n    color: white;\n    background: rgba(31, 28, 28, 0.55);\n  }\n\n  #img {\n    background-image: url(2210.jpg);\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 70%;\n    height: 70%;\n    border-radius: 10px;\n  }\n  \n  #modal-content {\n    background-size: 700px;\n    background-repeat: no-repeat;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 20%;\n    height: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n  #modal-content2 {\n    background-size: 700px;\n    background-repeat: no-repeat;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 20%;\n    height: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n\n  #modal-content > input{\n    background-color: white;\n    border: 2px solid black;\n    color: black;\n  }\n\n  body{\n    background-image: url(incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.jpg);\n    background-size: 85%;\n    background-repeat: no-repeat;\n    background-position:top ;\n  }\n\n  #form{\n    margin-top: 0px;\n    align-self: center;\n    justify-self: center;\n    display: grid;\nwidth: 500px;\n\n  }\n\n  #form > div {\n    background: rgba(0, 0, 0, 0.55);\n    color: white;\n    text-align: center;\n    width: 200px;\n    font-size: large;\n    justify-self: center;\n  }\n\n  #form > label {\n    background: rgb(0, 0, 0);\n    color: white;\n    text-align: center;\n    width: 300px;\n    justify-self: center;\n  }\n  #form > input, select {\n    width: 300px;\n    justify-self: center;\n  }\n  #form > button {\n    width: 100px;\n    justify-self: center;\n  }"],"sourceRoot":""}]);
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
  if (placeShip1Cordinates.value > 99 || placeShip2Cordinates.value > 99) {
    alert('Cant enter number bigger than 9 try again!');
    const shipOptions = document.createElement('option');
    placeShip1Name.prepend(shipOptions);
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
    placeShip1Name.prepend(shipOptions);
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
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.imgContainer.style.display = 'block';
    alert(`${activePlayer.name} Wins`);
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
   // if (ships === 0) {
   //   return 'board has no ships';
   // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0ZBQTJCO0FBQ3ZFLDRDQUE0QyxpUUFBNEc7QUFDeEosOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFB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O0FBQ0E7QUFDQSxpQkFBaUIsK0NBQU8sRUFBRSxrREFBVSxFQUFFLCtDQUFPLEVBQUUsaURBQVMsRUFBRSxpREFBUzs7QUFFbkU7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIjIyMTAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW5jcmVkaWJsZS1tYWpvci1zdGVhbXB1bmstYmFsbG9vbi1mbG9hdGluZy13YXRlci1zdXJmYWNlLWlsbHVzdHJhdGlvbnMtZ2VuZXJhdGl2ZS1haS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9hcmQxLCAuYm9hcmQyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgd2lkdGg6IDU1MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBnYXA6IDJweDtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGdyaWQtcm93OiAyLzM7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbiAgYm9keXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAuYm9hcmQxIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG4gIC5ib2FyZDIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbiAgI3BsYXllcjF7XG4gICAgZ3JpZC1yb3c6IDEvMjsgXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLmNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgI215TW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDI4LCAyOCwgMC41NSk7XG4gIH1cblxuICAjY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDFmcjtcbiAgICBjb2x1bW4tZ2FwOiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgIHJvdy1nYXA6IDEwcHg7XG4gIH1cbiNjb250YWluZXIgPiBsYWJlbCB7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MDBweDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4gICNteU1vZGFsMiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzEsIDI4LCAyOCwgMC41NSk7XG4gIH1cblxuICAjaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gICNtb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgI21vZGFsLWNvbnRlbnQyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAjbW9kYWwtY29udGVudCA+IGlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODUlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjp0b3AgO1xuICB9XG5cbiAgI2Zvcm17XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xud2lkdGg6IDUwMHB4O1xuXG4gIH1cblxuICAjZm9ybSA+IGRpdiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG5cbiAgI2Zvcm0gPiBsYWJlbCB7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG4gICNmb3JtID4gaW5wdXQsIHNlbGVjdCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG4gICNmb3JtID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFDRjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFlBQVk7O0VBRVosZ0JBQWdCO0FBQ2xCO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UseURBQStCO0lBQy9CLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5REFBZ0g7SUFDaEgsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCLFlBQVk7O0VBRVY7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvYXJkMSwgLmJvYXJkMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIHdpZHRoOiA1NTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGdhcDogMnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICB9XFxuICBib2R5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICB9XFxuICAuYm9hcmQxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcbiAgLmJvYXJkMiB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIH1cXG4gICNwbGF5ZXIxe1xcbiAgICBncmlkLXJvdzogMS8yOyBcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAjbXlNb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMjgsIDI4LCAwLjU1KTtcXG4gIH1cXG5cXG4gICNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgcm93LWdhcDogMTBweDtcXG4gIH1cXG4jY29udGFpbmVyID4gbGFiZWwge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgXFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4gICNteU1vZGFsMiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMjgsIDI4LCAwLjU1KTtcXG4gIH1cXG5cXG4gICNpbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoMjIxMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuICBcXG4gICNtb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gICNtb2RhbC1jb250ZW50MiB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuXFxuICAjbW9kYWwtY29udGVudCA+IGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG4gIGJvZHl7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbmNyZWRpYmxlLW1ham9yLXN0ZWFtcHVuay1iYWxsb29uLWZsb2F0aW5nLXdhdGVyLXN1cmZhY2UtaWxsdXN0cmF0aW9ucy1nZW5lcmF0aXZlLWFpLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODUlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnRvcCA7XFxuICB9XFxuXFxuICAjZm9ybXtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbndpZHRoOiA1MDBweDtcXG5cXG4gIH1cXG5cXG4gICNmb3JtID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjZm9ybSA+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG4gICNmb3JtID4gaW5wdXQsIHNlbGVjdCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAjZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZWJvYXJkLCB7XG4gIGJhdHRsZXNoaXAsXG4gIGRlc3Ryb3llcixcbiAgc3VibWFyaW5lLFxuICBjcnVpc2VyLFxuICBjYXJyaWVyLFxufSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVycyB9IGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgcGxheWVycyA9IGNyZWF0ZVBsYXllcnMoKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFpbmVyJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5jb25zdCBwbGFjZVNoaXAxTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5wbGFjZVNoaXAxTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJyk7XG5jb25zdCBwbGFjZVNoaXAxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG5jb25zdCBwbGFjZVNoaXAxQ29yZGluYXRlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IHBsYWNlU2hpcDFDb3JkaW5hdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnBsYWNlU2hpcDFDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbnBsYWNlU2hpcDFDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgnbWluJywgJzAwJyk7XG5wbGFjZVNoaXAxQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoJ21heCcsICc5OScpO1xuY29uc3QgcGxhY2VTaGlwMkNvcmRpbmF0ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBwbGFjZVNoaXAyQ29yZGluYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5wbGFjZVNoaXAyQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG5wbGFjZVNoaXAyQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoJ21pbicsICcwMCcpO1xucGxhY2VTaGlwMkNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCdtYXgnLCAnOTknKTtcbmNvbnN0IHBsYWNlU2hpcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxubGV0IGJvYXJkMiA9IEdhbWVib2FyZCgpO1xubGV0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5mdW5jdGlvbiB1cGRhdGVCb2FyZHMoKSB7XG4gIGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGJvYXJkMiA9IEdhbWVib2FyZCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb24oKSB7XG4gIHdoaWxlIChwbGFjZVNoaXAxTmFtZS5maXJzdENoaWxkKSB7XG4gICAgcGxhY2VTaGlwMU5hbWUucmVtb3ZlQ2hpbGQocGxhY2VTaGlwMU5hbWUuZmlyc3RDaGlsZCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgIGNhcnJpZXIubmFtZSxcbiAgICAgIGJhdHRsZXNoaXAubmFtZSxcbiAgICAgIGNydWlzZXIubmFtZSxcbiAgICAgIHN1Ym1hcmluZS5uYW1lLFxuICAgICAgZGVzdHJveWVyLm5hbWUsXG4gICAgXTtcbiAgICBjb25zdCBzaGlwT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHBsYWNlU2hpcDFOYW1lLmFwcGVuZENoaWxkKHNoaXBPcHRpb25zKTtcbiAgICBzaGlwT3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld09wdGlvbicpO1xuICAgIHNoaXBPcHRpb25zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBzaGlwc1tpXSk7XG4gICAgc2hpcE9wdGlvbnMudGV4dENvbnRlbnQgPSBzaGlwc1tpXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVib2FyZCgpIHtcbiAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGJvYXJkRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBib2FyZERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmREaXYxLmNsYXNzTGlzdC5hZGQoJ2JvYXJkMScpO1xuICBib2FyZERpdjIuY2xhc3NMaXN0LmFkZCgnYm9hcmQyJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZERpdjEpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmREaXYyKTtcbiAgbGV0IHRlbXAgPSAwO1xuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICBsZXQgYm9hcmRUb2luc2VydCA9IGJvYXJkO1xuICBsZXQgYm9hcmRUb0F0dCA9IGJvYXJkMjtcbiAgaWYgKGFjdGl2ZVBsYXllci5uYW1lICE9PSBwbGF5ZXJOYW1lMS52YWx1ZSAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gcGxheWVyLnZhbHVlXG4gICAgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09ICdBSScpIHtcbiAgICBjcmVhdGVPcHRpb24oKTtcbiAgfVxuICBpZiAoYWN0aXZlUGxheWVyLm5hbWUgIT09IHBsYXllck5hbWUxLnZhbHVlICYmIGFjdGl2ZVBsYXllci5uYW1lICE9PSBwbGF5ZXIudmFsdWUpIHtcbiAgICBib2FyZFRvaW5zZXJ0ID0gYm9hcmQyO1xuICAgIGJvYXJkVG9BdHQgPSBib2FyZDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGNlbGxCdXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjZWxsQnV0dG9uMS5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICBib2FyZERpdjEuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbjEpO1xuICAgICAgY2VsbEJ1dHRvbjEuc2V0QXR0cmlidXRlKCd4JywgaSk7XG4gICAgICBjZWxsQnV0dG9uMS5zZXRBdHRyaWJ1dGUoJ3knLCBqKTtcbiAgICAgIGNvbnN0IGNlbGxCdXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjZWxsQnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdjZWxsMicpO1xuICAgICAgYm9hcmREaXYyLmFwcGVuZENoaWxkKGNlbGxCdXR0b24yKTtcbiAgICAgIGNlbGxCdXR0b24yLnNldEF0dHJpYnV0ZSgneCcsIGkpO1xuICAgICAgY2VsbEJ1dHRvbjIuc2V0QXR0cmlidXRlKCd5Jywgaik7XG4gICAgICBjZWxsQnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGVtcCsrKTtcbiAgICAgIGNlbGxCdXR0b24xLnRleHRDb250ZW50ID0gYCR7aX0ke2p9YDtcbiAgICAgIGNlbGxCdXR0b24xLnN0eWxlLmNvbG9yID0gJyM5MDk2OTInO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmRUb2luc2VydC5ib2FyZFtpXVtqXSA9PT0gJ29iamVjdCdcbiAgICAgICAgfHwgYm9hcmRUb2luc2VydC5ib2FyZFtpXVtqXSA9PT0gJ2hpdCdcbiAgICAgICkge1xuICAgICAgICBjZWxsQnV0dG9uMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgIGNlbGxCdXR0b24xLnRleHRDb250ZW50ID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAoYm9hcmRUb0F0dC5ib2FyZFtpXVtqXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGNlbGxCdXR0b24yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICBjZWxsQnV0dG9uMi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkVG9BdHQuYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgIGNlbGxCdXR0b24yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbEJ1dHRvbjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgIH1cbiAgICAgIGlmIChib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXAxTGFiZWwpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBDYXJyaWVyLXNpemU6IDUtY2VsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXR0bGVzaGlwLXNpemU6IDQtY2VsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcnVpc2VyLXNpemU6IDMtY2VsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtYXJpbmUtc2l6ZTogMy1jZWxsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc3Ryb3llci1zaXplOiAyLWNlbGxzYDtcbiAgICAgICAgcGxhY2VTaGlwMUxhYmVsLmFwcGVuZENoaWxkKHBsYWNlU2hpcDFOYW1lKTtcbiAgICAgICAgcGxhY2VTaGlwMUxhYmVsLmFwcGVuZENoaWxkKHBsYWNlU2hpcDFDb3JkaW5hdGVzTGFiZWwpO1xuICAgICAgICBwbGFjZVNoaXAxQ29yZGluYXRlc0xhYmVsLnRleHRDb250ZW50ID0gYFR5cGUgaW4gdHdvIGRpZ2l0IG51bWJlciBvZiBib2FyZCdzIGNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHlvdSB3YW50IHlvdXIgc2hpcCB0byBzdGFydGA7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChwbGFjZVNoaXAxQ29yZGluYXRlcyk7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC5hcHBlbmRDaGlsZChwbGFjZVNoaXAyQ29yZGluYXRlc0xhYmVsKTtcbiAgICAgICAgcGxhY2VTaGlwMkNvcmRpbmF0ZXNMYWJlbC50ZXh0Q29udGVudCA9IGBUeXBlIGluIHR3byBkaWdpdCBudW1iZXIgb2YgYm9hcmQncyBjZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHlvdSB3YW50IHlvdXIgc2hpcCB0byBlbmQsIFRJUDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFjaCBzaGlwIGhhcyBob3cgbXVjaCBjZWxscyBpdCBjYW4gdGFrZS5gO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMkNvcmRpbmF0ZXMpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwQnRuKTtcbiAgICAgICAgcGxhY2VTaGlwQnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHBsYWNlU2hpcDFDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAncGxhY2Vob2xkZXInLFxuICAgICAgICAgICcwMCAtIDk5JyxcbiAgICAgICAgKTtcbiAgICAgICAgcGxhY2VTaGlwMkNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdwbGFjZWhvbGRlcicsXG4gICAgICAgICAgJzAwIC0gOTknLFxuICAgICAgICApO1xuICAgICAgICBjZWxsQnV0dG9uMi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXllcjEudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciBzaGlwcyBQbGF5ZXI6ICR7YWN0aXZlUGxheWVyLm5hbWV9YDtcbiAgICAgIH1cblxuICAgICAgY2VsbEJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBib2FyZFRvQXR0LnJlY2lldmVBdHRhY2soXG4gICAgICAgICAgTnVtYmVyKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLngudmFsdWUpLFxuICAgICAgICAgIE51bWJlcihlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy55LnZhbHVlKSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKEdhbWUoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllcjEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBwbGF5ZXIyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BNb2R1bGUpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wTW9kdWxlMik7XG4gICAgICAgICAgcG9wTW9kdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgIHVwZGF0ZUJvYXJkcygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJzLnN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgICAgQ3JlYXRlYm9hcmQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChcbiAgICBib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgIT09IGZhbHNlXG4gICAgJiYgYm9hcmQuc3RhdHVzKGJvYXJkVG9BdHQuYm9hcmQpID09PSBmYWxzZVxuICAgICYmIGFjdGl2ZVBsYXllci5uYW1lICE9PSAnQUknXG4gICkge1xuICAgIHBsYXllcnMuc3dpdGNoUGxheWVyVHVybigpO1xuICAgIENyZWF0ZWJvYXJkKCk7XG4gICAgLy8gYWN0aXZlUGxheWVyID0gcGxheWVycy5nZXRBY3RpdmVQbGF5ZXIoKTtcbiAgfVxuICBpZiAoXG4gICAgYm9hcmQuc3RhdHVzKGJvYXJkVG9pbnNlcnQuYm9hcmQpICE9PSBmYWxzZVxuICAgICYmIGJvYXJkLnN0YXR1cyhib2FyZFRvQXR0LmJvYXJkKSAhPT0gZmFsc2VcbiAgICAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gJ0FJJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZWxsMicpO1xuICBsZXQgY29tcHV0ZXJDaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjZWxscy5sZW5ndGgpO1xuICBpZiAoXG4gICAgYWN0aXZlUGxheWVyLm5hbWUgPT09ICdBSSdcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgIT09IGZhbHNlXG4gICAgJiYgYm9hcmQuc3RhdHVzKGJvYXJkVG9BdHQuYm9hcmQpICE9PSBmYWxzZVxuICApIHtcbiAgICB3aGlsZSAoXG4gICAgICBib2FyZFRvQXR0LmJvYXJkW2NlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLngudmFsdWVdW1xuICAgICAgICBjZWxsc1tjb21wdXRlckNob2ljZV0uYXR0cmlidXRlcy55LnZhbHVlXG4gICAgICBdID09PSAnaGl0J1xuICAgICAgfHwgYm9hcmRUb0F0dC5ib2FyZFtjZWxsc1tjb21wdXRlckNob2ljZV0uYXR0cmlidXRlcy54LnZhbHVlXVtcbiAgICAgICAgY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmF0dHJpYnV0ZXMueS52YWx1ZVxuICAgICAgXSA9PT0gJ21pc3MnXG4gICAgKSB7XG4gICAgICBjb21wdXRlckNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGxzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmNsaWNrKCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgYWN0aXZlUGxheWVyLm5hbWUgPT09ICdBSSdcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgPT09IGZhbHNlXG4gICAgJiYgYm9hcmQuc3RhdHVzKGJvYXJkVG9BdHQuYm9hcmQpICE9PSBmYWxzZVxuICApIHtcbiAgICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG4gICAgd2hpbGUgKGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSA9PT0gZmFsc2UpIHtcbiAgICAgIGxldCBzdGFydDtcbiAgICAgIGxldCBlbmQ7XG4gICAgICBsZXQgc3RhdHVzO1xuICAgICAgY29tcHV0ZXJDaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjZWxscy5sZW5ndGgpO1xuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzLnNoaWZ0KCk7XG4gICAgICBjb25zdCBwb2ludEEgPSBbXG4gICAgICAgIE51bWJlcihjZWxsc1tjb21wdXRlckNob2ljZV0uYXR0cmlidXRlcy54LnZhbHVlKSxcbiAgICAgICAgTnVtYmVyKGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLnkudmFsdWUpLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHBvaW50QiA9IFtdO1xuICAgICAgcG9pbnRCLnB1c2gocG9pbnRBWzBdLCBwb2ludEFbMV0pO1xuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zdCB0ZW1wMSA9IHBvaW50QVtyYW5kb21dO1xuICAgICAgaWYgKHBvaW50QVtyYW5kb21dICsgc2hpcC5sZW5ndGggPCAxMCkge1xuICAgICAgICBwb2ludEJbcmFuZG9tXSA9IHRlbXAxICsgc2hpcC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb2ludEJbcmFuZG9tXSA9IHRlbXAxIC0gc2hpcC5sZW5ndGg7XG4gICAgICB9XG4gICAgICBzdGFydCA9IHBvaW50QTtcbiAgICAgIGVuZCA9IHBvaW50QjtcblxuICAgICAgaWYgKHBvaW50QlswXSA8IHBvaW50QVswXSB8fCBwb2ludEJbMV0gPCBwb2ludEFbMV0pIHtcbiAgICAgICAgc3RhcnQgPSBwb2ludEI7XG4gICAgICAgIGVuZCA9IHBvaW50QTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRbMV0gPiBzdGFydFsxXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkVG9pbnNlcnQuYm9hcmRbc3RhcnRbMF1dW3N0YXJ0WzFdICsgaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGlwcy51bnNoaWZ0KHNoaXApO1xuICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kWzBdID4gc3RhcnRbMF0pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBib2FyZFRvaW5zZXJ0LmJvYXJkW3N0YXJ0WzBdICsgaV1bc3RhcnRbMV1dID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2hpcHMudW5zaGlmdChzaGlwKTtcbiAgICAgICAgICAgIHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkMi5wbGFjZVNoaXAoc2hpcCwgcG9pbnRBLCBwb2ludEIpO1xuICAgICAgfVxuICAgIH1cbiAgICBDcmVhdGVib2FyZCgpO1xuICB9XG59XG5cbnBsYWNlU2hpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG5cbiAgbGV0IHNoaXA7XG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gcGxhY2VTaGlwMU5hbWUub3B0aW9uc1twbGFjZVNoaXAxTmFtZS5zZWxlY3RlZEluZGV4XTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzaGlwc1tpXS5uYW1lID09PSBzZWxlY3RlZE9wdGlvbi52YWx1ZSkge1xuICAgICAgc2hpcCA9IHNoaXBzW2ldO1xuICAgICAgc2VsZWN0ZWRPcHRpb24ucmVtb3ZlKHNlbGVjdGVkT3B0aW9uW2ldKTtcbiAgICB9XG4gIH1cbiAgaWYgKHBsYWNlU2hpcDFDb3JkaW5hdGVzLnZhbHVlID4gOTkgfHwgcGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWUgPiA5OSkge1xuICAgIGFsZXJ0KCdDYW50IGVudGVyIG51bWJlciBiaWdnZXIgdGhhbiA5IHRyeSBhZ2FpbiEnKTtcbiAgICBjb25zdCBzaGlwT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHBsYWNlU2hpcDFOYW1lLnByZXBlbmQoc2hpcE9wdGlvbnMpO1xuICAgIHNoaXBPcHRpb25zLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3T3B0aW9uJyk7XG4gICAgc2hpcE9wdGlvbnMuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHNoaXAubmFtZSk7XG4gICAgc2hpcE9wdGlvbnMudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHggPSBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMF0pO1xuICBsZXQgeSA9IE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVsxXSk7XG4gIGxldCB4MiA9IE51bWJlcihwbGFjZVNoaXAyQ29yZGluYXRlcy52YWx1ZVswXSk7XG4gIGxldCB5MiA9IE51bWJlcihwbGFjZVNoaXAyQ29yZGluYXRlcy52YWx1ZVsxXSk7XG4gIGlmICh4ID4geDIpIHtcbiAgICB4MiArPSBzaGlwLmxlbmd0aDtcbiAgICB4ICs9IDE7XG4gIH0gZWxzZSBpZiAoeDIgPiB4KSB7XG4gICAgeCArPSBzaGlwLmxlbmd0aDtcbiAgICB4MiArPSAxO1xuICB9IGVsc2UgaWYgKHkgPiB5Mikge1xuICAgIHkyICs9IHNoaXAubGVuZ3RoO1xuICAgIHkgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICB5ICs9IHNoaXAubGVuZ3RoO1xuICAgIHkyICs9IDE7XG4gIH1cbiAgaWYgKHggIT09IHgyIHx8IHkgIT09IHkyKSB7XG4gICAgYWxlcnQoJ0NvcmRpbmF0ZXMgYXJlIEludmFsaWQgdHJ5IGFnYWluIScpO1xuICAgIGNvbnN0IHNoaXBPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGxhY2VTaGlwMU5hbWUucHJlcGVuZChzaGlwT3B0aW9ucyk7XG4gICAgc2hpcE9wdGlvbnMuc2V0QXR0cmlidXRlKCdpZCcsICduZXdPcHRpb24nKTtcbiAgICBzaGlwT3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2hpcC5uYW1lKTtcbiAgICBzaGlwT3B0aW9ucy50ZXh0Q29udGVudCA9IHNoaXAubmFtZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKChhY3RpdmVQbGF5ZXIubmFtZSAhPT0gcGxheWVyTmFtZTEudmFsdWUgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09IHBsYXllci52YWx1ZSlcbiAgICAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gJ0FJJykge1xuICAgIGJvYXJkMi5wbGFjZVNoaXAoXG4gICAgICBzaGlwLFxuICAgICAgW1xuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMF0pLFxuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMV0pLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzBdKSxcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzFdKSxcbiAgICAgIF0sXG4gICAgKTtcbiAgfSBlbHNlIGlmIChhY3RpdmVQbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZTEudmFsdWUgfHwgYWN0aXZlUGxheWVyLm5hbWUgPT09IHBsYXllci52YWx1ZSkge1xuICAgIGJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHNoaXAsXG4gICAgICBbXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVswXSksXG4gICAgICAgIE51bWJlcihwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZVsxXSksXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWVbMF0pLFxuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWVbMV0pLFxuICAgICAgXSxcbiAgICApO1xuICB9XG4gIHBsYWNlU2hpcDFDb3JkaW5hdGVzLnZhbHVlID0gJyc7XG4gIHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlID0gJyc7XG4gIENyZWF0ZWJvYXJkKCk7XG59KTtcbmNvbnN0IGNyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jcmVhdGVNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kaXYnKTtcbmNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IHBsYXllck5hbWUxTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxheWVyTmFtZTJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5jb25zdCBwbGF5ZXJOYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBwbGF5ZXJOYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWwpO1xuXG5jb25zdCBleGl0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuZXhpdDEudGV4dENvbnRlbnQgPSAnWCc7XG5jcmVhdGVNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xubW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGV4aXQxKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb25maXJtKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMUxhYmVsKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMSk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZTJMYWJlbCk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZTIpO1xuXG5wbGF5ZXJOYW1lMUxhYmVsLnRleHRDb250ZW50ID0gJ1BMQVlFUi0xJztcbnBsYXllck5hbWUyTGFiZWwudGV4dENvbnRlbnQgPSAnUExBWUVSLTInO1xucGxheWVyTmFtZTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0eXBlLW5hbWUnKTtcbnBsYXllck5hbWUyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndHlwZS1uYW1lJyk7XG5jb25maXJtLnRleHRDb250ZW50ID0gJ0NPTkZJUk0nO1xuY29uZmlybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbmZpcm0nKTtcbm1vZGFsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vZGFsLWNvbnRlbnQnKTtcbmNyZWF0ZU1vZGFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnbXlNb2RhbCcpO1xuXG5jb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnBsYXllcjEuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXIxJyk7XG5cbmNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucGxheWVyMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYXllcjInKTtcbmNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgcGxheWVycy5jaG9vc2VQbGF5ZXJOYW1lKCk7XG4gIHBsYXllcjEudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lMS52YWx1ZTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIxKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcbiAgY3JlYXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcGxheWVyMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgcGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgQ3JlYXRlYm9hcmQoKTtcbiAgY3JlYXRlT3B0aW9uKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY29uc3QgcG9wTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBwb3BNb2R1bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcE1vZHVsZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcE1vZHVsZTIpO1xucG9wTW9kdWxlMi50ZXh0Q29udGVudCA9ICdQTEFZIFZTIEFJJztcbnBvcE1vZHVsZS50ZXh0Q29udGVudCA9ICdQTEFZRVIgVlMgUExBWUVSJztcbnBvcE1vZHVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wTW9kdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBsYXllck5hbWUyLnZhbHVlID0gJyc7XG4gIHBsYXllci52YWx1ZSA9ICcnO1xuICBwbGF5ZXJOYW1lMS52YWx1ZSA9ICcnO1xuICBjcmVhdGVNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25zdCBjcmVhdGVNb2RhbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1vZGFsQ29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jcmVhdGVNb2RhbDIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGl2Jyk7XG5jb25zdCBjb25maXJtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgcGxheWVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGV4aXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbmV4aXQyLnRleHRDb250ZW50ID0gJ1gnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbDIpO1xuY3JlYXRlTW9kYWwyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudDIpO1xubW9kYWxDb250ZW50Mi5hcHBlbmRDaGlsZChleGl0Mik7XG5leGl0MS5zdHlsZS53aWR0aCA9ICcyNHB4JztcbmV4aXQyLnN0eWxlLndpZHRoID0gJzI0cHgnO1xubW9kYWxDb250ZW50Mi5hcHBlbmRDaGlsZChjb25maXJtMik7XG5tb2RhbENvbnRlbnQyLmFwcGVuZENoaWxkKHBsYXllckxhYmVsKTtcbm1vZGFsQ29udGVudDIuYXBwZW5kQ2hpbGQocGxheWVyKTtcbnBsYXllckxhYmVsLnRleHRDb250ZW50ID0gJ1BMQVlFUi0xJztcbmNvbmZpcm0yLnRleHRDb250ZW50ID0gJ0NPTkZJUk0nO1xuY29uZmlybTIuc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtJyk7XG5tb2RhbENvbnRlbnQyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwtY29udGVudDInKTtcbmNyZWF0ZU1vZGFsMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwnKTtcblxucG9wTW9kdWxlMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBvcE1vZHVsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBsYXllck5hbWUyLnZhbHVlID0gJyc7XG4gIHBsYXllci52YWx1ZSA9ICcnO1xuICBwbGF5ZXJOYW1lMS52YWx1ZSA9ICcnO1xuICBjcmVhdGVNb2RhbDIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcblxuY29uZmlybTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgcGxheWVyTmFtZTIudmFsdWUgPSAnQUknO1xuICBwbGF5ZXJzLmNob29zZVBsYXllck5hbWUoKTtcbiAgcGxheWVyMS50ZXh0Q29udGVudCA9IHBsYXllci52YWx1ZTtcbiAgcGxheWVyMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgcGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIxKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcbiAgY3JlYXRlTW9kYWwyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgQ3JlYXRlYm9hcmQoKTtcbiAgY3JlYXRlT3B0aW9uKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbmltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1nJyk7XG5pbWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdteU1vZGFsMicpO1xuaW1nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5pbWdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGltZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5leGl0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3JlYXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBwb3BNb2R1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbn0pO1xuZXhpdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcE1vZHVsZTIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgcG9wTW9kdWxlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGNyZWF0ZU1vZGFsMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5leHBvcnQge1xuICBwbGF5ZXJOYW1lMSxcbiAgcGxheWVyTmFtZTIsXG4gIHBsYXllcjEsXG4gIHBsYXllcjIsXG4gIGltZ0NvbnRhaW5lcixcbiAgcGxheWVycyxcbiAgcGxhY2VTaGlwMU5hbWUsXG4gIHBsYXllcixcbiAgYm9hcmQsXG4gIGJvYXJkMixcbn07XG4iLCJpbXBvcnQgeyBib2FyZDIsIGJvYXJkIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IENyZWF0ZWJvYXJkIGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBpbWdDb250YWluZXIgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXllcnMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gIGlmIChib2FyZC5zdGF0dXMoYm9hcmQuYm9hcmQpID09PSAnYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rJykge1xuICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBXaW5zYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IFxuICBpZiAoYm9hcmQuc3RhdHVzKGJvYXJkMi5ib2FyZCkgPT09ICdhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsnKSB7XG4gICAgaW1nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBXaW5zYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgR2FtZSB9O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBDcmVhdGVib2FyZCwgeyBpbWdDb250YWluZXIsIHBsYXllcnMgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoYXJyID0gW10pID0+IHtcbiAgICBjb25zdCByb3dzID0gMTA7XG4gICAgY29uc3QgY29sdW1ucyA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBhcnJbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGFycltpXVtqXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBwb2ludEEsIHBvaW50QikgPT4ge1xuICAgIGxldCBzdGFydCA9IHBvaW50QTtcbiAgICBsZXQgZW5kID0gcG9pbnRCO1xuXG4gICAgaWYgKGJvYXJkLnNvbWUoKHJvdykgPT4gcm93LmluY2x1ZGVzKHNoaXApKSkge1xuICAgICAgYWxlcnQoJ0FsbHJlYWR5IGhhdmUgdGhhdCBzaGlwJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50QlswXSA8IHBvaW50QVswXSB8fCBwb2ludEJbMV0gPCBwb2ludEFbMV0pIHtcbiAgICAgIHN0YXJ0ID0gcG9pbnRCO1xuICAgICAgZW5kID0gcG9pbnRBO1xuICAgIH1cblxuICAgIGlmIChlbmRbMV0gPiBzdGFydFsxXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0WzBdXVtzdGFydFsxXSArIGldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVuZFswXSA+IHN0YXJ0WzBdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICAgIGlmIChib2FyZFt4XVt5XSAhPT0gZmFsc2UgJiYgYm9hcmRbeF1beV0gIT09ICdoaXQnICYmIGJvYXJkW3hdW3ldICE9PSAnbWlzcycpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBib2FyZFt4XVt5XTtcbiAgICAgIHRlbXAuaGl0KHRlbXApO1xuICAgICAgYm9hcmRbeF1beV0gPSAnaGl0JztcbiAgICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBoaXQgYSB0YXJnZXRgKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSBmYWxzZSAmJiBib2FyZFt4XVt5XSAhPT0gJ21pc3MnICYmIGJvYXJkW3hdW3ldICE9PSAnaGl0JyAmJiB0eXBlb2YgYm9hcmRbeF1beV0gIT09ICdvYmplY3QnKSB7XG4gICAgICBib2FyZFt4XVt5XSA9ICdtaXNzJztcbiAgICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBtaXNzZWQgYSB0YXJnZXRgKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkW3hdW3ldID09PSAnbWlzcycgfHwgYm9hcmRbeF1beV0gPT09ICdoaXQnKSB7XG4gICAgICBhbGVydCgndGhhdCBwb3NpdGlvbiBpcyBhbGxyZWFkeSBoaXQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHN0YXR1cyA9IChib2FyZCkgPT4ge1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc2hpcHMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBoaXRzKys7XG4gICAgICAgICAgc2hpcHMrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHNoaXBzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAvLyBpZiAoc2hpcHMgPT09IDApIHtcbiAgIC8vICAgcmV0dXJuICdib2FyZCBoYXMgbm8gc2hpcHMnO1xuICAgLy8gfVxuICAgIGlmIChoaXRzID09PSAxNykge1xuICAgICAgcmV0dXJuICdhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmsnO1xuICAgIH1cbiAgICBpZiAoc2hpcHMgIT09IDE3KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAna2VlcCBwbGF5aW5nJztcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgICBjcmVhdGVCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICBzdGF0dXMsXG4gIH07XG59XG5cbmNvbnN0IGNhcnJpZXIgPSBTaGlwKCdjYXJyaWVyJywgNSk7XG5jb25zdCBiYXR0bGVzaGlwID0gU2hpcCgnYmF0dGxlc2hpcCcsIDQpO1xuY29uc3QgY3J1aXNlciA9IFNoaXAoJ2NydWlzZXInLCAzKTtcbmNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ3N1Ym1hcmluZScsIDMpO1xuY29uc3QgZGVzdHJveWVyID0gU2hpcCgnZGVzdHJveWVyJywgMik7XG5cbi8qIGJvYXJkLnBsYWNlU2hpcChjYXJyaWVyLCBbNCwgMF0sIFswLCAwXSk7XG5ib2FyZC5wbGFjZVNoaXAoYmF0dGxlc2hpcCwgWzcsIDVdLCBbNywgOV0pO1xuYm9hcmQucGxhY2VTaGlwKGNydWlzZXIsIFs1LCA1XSwgWzUsIDddKTtcbmJvYXJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIFsyLCAyXSwgWzIsIDRdKTtcbmJvYXJkLnBsYWNlU2hpcChkZXN0cm95ZXIsIFs4LCA1XSwgWzgsIDZdKTtcbmJvYXJkMi5wbGFjZVNoaXAoY2FycmllciwgWzQsIDBdLCBbMCwgMF0pO1xuYm9hcmQyLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBbNywgNV0sIFs3LCA5XSk7XG5ib2FyZDIucGxhY2VTaGlwKGNydWlzZXIsIFs1LCA1XSwgWzUsIDddKTtcbmJvYXJkMi5wbGFjZVNoaXAoc3VibWFyaW5lLCBbMiwgMl0sIFsyLCA0XSk7XG5ib2FyZDIucGxhY2VTaGlwKGRlc3Ryb3llciwgWzgsIDVdLCBbOCwgNl0pO1xuLy8gYm9hcmQyLnJlY2lldmVBdHRhY2soOCwgNik7ICovXG5cbmV4cG9ydCB7XG4gIEdhbWVib2FyZCwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIGNydWlzZXIsIGNhcnJpZXIsXG59O1xuIiwiaW1wb3J0IHtcbiAgcGxheWVyTmFtZTEsIHBsYXllck5hbWUyLCBwbGF5ZXIxLCBwbGF5ZXIyLCBwbGF5ZXIsXG59IGZyb20gJy4vZG9tJztcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVycyhuYW1lKSB7XG4gIGNvbnN0IHBsYXllcnMgPSBbXG4gICAge1xuICAgICAgbmFtZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgXTtcbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG4gIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSkge1xuICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1sxXTtcbiAgICAgIHBsYXllcjEudGV4dENvbnRlbnQgPSBgUGxheWVyOiAke2FjdGl2ZVBsYXllci5uYW1lfSdzIHR1cm5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICAgICAgcGxheWVyMS50ZXh0Q29udGVudCA9IGBQbGF5ZXI6ICR7YWN0aXZlUGxheWVyLm5hbWV9J3MgdHVybmA7XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmVQbGF5ZXI7XG4gIH07XG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcbiAgY29uc3QgY2hvb3NlUGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXJzWzBdLm5hbWUgPSAnJztcbiAgICBwbGF5ZXJzWzFdLm5hbWUgPSAnJztcbiAgICBwbGF5ZXJzWzBdLm5hbWUgPSBwbGF5ZXJOYW1lMS52YWx1ZTtcbiAgICBpZiAocGxheWVyTmFtZTEudmFsdWUgPT09ICcnKSB7XG4gICAgICBwbGF5ZXJzWzBdLm5hbWUgPSBwbGF5ZXIudmFsdWU7XG4gICAgfVxuICAgIHBsYXllcnNbMV0ubmFtZSA9IHBsYXllck5hbWUyLnZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBzd2l0Y2hQbGF5ZXJUdXJuLFxuICAgIGNob29zZVBsYXllck5hbWUsXG4gICAgZ2V0QWN0aXZlUGxheWVyLFxuICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVQbGF5ZXJzIH07XG4iLCJpbXBvcnQge2JvYXJkMn0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lID0gbnVsbCwgbGVuZ3RoID0gbnVsbCwgaGl0VGltZXMgPSAwLCBpc1N1bmsgPSBmYWxzZSkge1xuICBjb25zdCBoaXQgPSAob2JqKSA9PiB7IG9iai5oaXRUaW1lcyArPSAxIH07XG5cbiAgY29uc3QgaXNTdW5rRm4gPSAob2JqLCBzaGlwTGVuZ3RoLCBoaXRzKSA9PiB7XG4gICAgaWYgKHNoaXBMZW5ndGggPT09IGhpdHMpIHtcbiAgICAgIG9iai5pc1N1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuICdTaGlwIGlzIHN1bmsnO1xuICAgIH0gXG4gICAgcmV0dXJuICdTaGlwIGlzIGFsaXZlJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsIGxlbmd0aCwgaGl0VGltZXMsIGlzU3VuaywgaGl0LCBpc1N1bmtGbixcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NoaXAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=