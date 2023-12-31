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
  height: 600px;
  width: 600px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 1px solid black;
  gap: 2px;
  padding: 2px;
  background-color: yellow;
  grid-row: 2/3;
  }
  body{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
  }
  .board1 {
    grid-column: 1/2;
    justify-self: center;
  }
  .board2 {
    grid-column: 2/3;
    justify-self: center;
  }
  #player1{
    grid-row: 1/2; 
    justify-self: center;
    color: white;
  }
#player2 {
  grid-row: 1/2;
  justify-self: center;
  color: white;
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
  }

  #container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 150px;
    width: 100%;
    height: 100%;
    grid-row: 2/3;
    grid-column: 1/3;
    background: rgba(48, 6, 6, 0.55);
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
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,sCAAsC;EACtC,mCAAmC;EACnC,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;EAC/B;EACA;IACE,gBAAgB;IAChB,oBAAoB;EACtB;EACA;IACE,gBAAgB;IAChB,oBAAoB;EACtB;EACA;IACE,aAAa;IACb,oBAAoB;IACpB,YAAY;EACd;AACF;EACE,aAAa;EACb,oBAAoB;EACpB,YAAY;AACd;EACE;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;EACtC;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,gCAAgC;EAClC;AACF;EACE,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,oBAAoB;EACpB,YAAY;;EAEZ,gBAAgB;AAClB;EACE;IACE,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,oCAAoC;EACtC;;EAEA;IACE,yDAA+B;IAC/B,qBAAqB;IACrB,4BAA4B;IAC5B,2BAA2B;IAC3B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,sBAAsB;IACtB,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,yDAAgH;IAChH,qBAAqB;IACrB,4BAA4B;IAC5B,2BAA2B;EAC7B","sourcesContent":[".board1, .board2 {\n  display: grid;\n  height: 600px;\n  width: 600px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  gap: 2px;\n  padding: 2px;\n  background-color: yellow;\n  grid-row: 2/3;\n  }\n  body{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 100px 1fr;\n  }\n  .board1 {\n    grid-column: 1/2;\n    justify-self: center;\n  }\n  .board2 {\n    grid-column: 2/3;\n    justify-self: center;\n  }\n  #player1{\n    grid-row: 1/2; \n    justify-self: center;\n    color: white;\n  }\n#player2 {\n  grid-row: 1/2;\n  justify-self: center;\n  color: white;\n}\n  .cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 2rem;\n    border: 1px solid grey;\n    background: lightyellow;\n    cursor: pointer;\n  }\n\n  #myModal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n\n  #container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 150px;\n    width: 100%;\n    height: 100%;\n    grid-row: 2/3;\n    grid-column: 1/3;\n    background: rgba(48, 6, 6, 0.55);\n  }\n#container > label {\n  grid-row: 1/2;\n  grid-column: 1/2;\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  justify-self: center;\n  color: white;\n  \n  font-size: large;\n}\n  #myModal2 {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n\n  #img {\n    background-image: url(2210.jpg);\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 70%;\n    height: 70%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n  \n  #modal-content {\n    background-size: 700px;\n    background-repeat: no-repeat;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 20%;\n    height: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n  #modal-content2 {\n    background-size: 700px;\n    background-repeat: no-repeat;\n    margin: 15% auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 20%;\n    height: 10%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n  }\n\n  #modal-content > input{\n    background-color: white;\n    border: 2px solid black;\n    color: black;\n  }\n\n  body{\n    background-image: url(incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.jpg);\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n  }"],"sourceRoot":""}]);
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
const placeShip1Label = document.createElement('label');
const placeShip1Name = document.createElement('select');

const placeShip1Cordinates = document.createElement('input');
placeShip1Cordinates.setAttribute('type', 'number');
placeShip1Cordinates.setAttribute('min', '00');
placeShip1Cordinates.setAttribute('max', '99');
const placeShip2Cordinates = document.createElement('input');
placeShip2Cordinates.setAttribute('type', 'number');
placeShip2Cordinates.setAttribute('min', '00');
placeShip2Cordinates.setAttribute('max', '99');
const placeShipBtn = document.createElement('button');

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

  if (activePlayer.name !== playerName1.value) {
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
      if (
        typeof boardToinsert.board[i][j] === 'object'
        || boardToinsert.board[i][j] === 'hit'
      ) {
        cellButton1.style.backgroundColor = 'blue';
      }
      if (boardToAtt.board[i][j] === 'miss') {
        cellButton2.style.backgroundColor = 'red';
        cellButton2.disabled = true;
      } else if (boardToAtt.board[i][j] === 'hit') {
        cellButton2.disabled = true;
        cellButton2.style.backgroundColor = 'green';
      }
      if (_gameboard__WEBPACK_IMPORTED_MODULE_0__.board.status(boardToinsert.board) === false) {
        placeShip1Label.textContent = 'Enter ship name and X and Y Cordinates';
        container.appendChild(placeShip1Label);
        placeShip1Label.appendChild(placeShip1Name);
        placeShip1Label.appendChild(placeShip1Cordinates);
        placeShip1Label.appendChild(placeShip2Cordinates);
        placeShip1Label.appendChild(placeShipBtn);
        placeShipBtn.textContent = 'Submit';
        placeShip1Cordinates.setAttribute(
          'placeholder',
          'point-a = 2 numbers from 0 - 9',
        );
        placeShip2Cordinates.setAttribute(
          'placeholder',
          'point-b = 2 numbers from 0 - 9',
        );
        cellButton2.disabled = true;
        player1.textContent = `Place your ships Player ${activePlayer.name}`;
      }

      cellButton2.addEventListener('click', (e) => {
        boardToAtt.recieveAttack(
          Number(e.currentTarget.attributes.x.value),
          Number(e.currentTarget.attributes.y.value),
        );
        // e.currentTarget.disabled = true;
        players.switchPlayerTurn();
        if ((0,_game__WEBPACK_IMPORTED_MODULE_2__.Game)() === false) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
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
  const activePlayer = players.getActivePlayer();
  const ships = [_gameboard__WEBPACK_IMPORTED_MODULE_0__.carrier, _gameboard__WEBPACK_IMPORTED_MODULE_0__.battleship, _gameboard__WEBPACK_IMPORTED_MODULE_0__.cruiser, _gameboard__WEBPACK_IMPORTED_MODULE_0__.submarine, _gameboard__WEBPACK_IMPORTED_MODULE_0__.destroyer];

  let ship;
  const selectedOption = placeShip1Name.options[placeShip1Name.selectedIndex];
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].name === selectedOption.value) {
      ship = ships[i];
      selectedOption.disabled = true;
    }
  }
  if (placeShip1Cordinates.value > 99 && placeShip2Cordinates.value > 99) {
    alert('Cant enter number bigger than 9 try again!');
    return false;
  }
  let x = Number(placeShip1Cordinates.value);
  let y = Number(placeShip2Cordinates.value);
  if (x > y) {
    y += ship.length;
    x += 1;
  } else {
    x += ship.length;
    y += 1;
  }
  if (x !== y) {
    alert('Cordinates are Invalid try again!');
    return false;
  }
  if (activePlayer.name !== playerName1.value && activePlayer.name !== 'AI') {
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
  } else if (activePlayer.name === playerName1.value) {
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
  event.preventDefault();
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

createModal.appendChild(modalContent);
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
  player2.textContent = playerName2.value;
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

document.body.appendChild(createModal2);
createModal2.appendChild(modalContent2);
modalContent2.appendChild(confirm2);
modalContent2.appendChild(playerLabel);
modalContent2.appendChild(playerName1);
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
  player1.textContent = playerName1.value;
  player2.textContent = playerName2.value;
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
      console.log('Allready have that ship');
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
      _dom__WEBPACK_IMPORTED_MODULE_0__.player2.textContent = `Player: ${players[0].name}`;
    } else {
      activePlayer = players[0];
      _dom__WEBPACK_IMPORTED_MODULE_0__.player1.textContent = `Player: ${activePlayer.name}'s turn`;
      _dom__WEBPACK_IMPORTED_MODULE_0__.player2.textContent = `Player: ${players[1].name}`;
    }
    return activePlayer;
  };
  const getActivePlayer = () => activePlayer;
  const choosePlayerName = () => {
    players[0].name = '';
    players[1].name = '';
    players[0].name = _dom__WEBPACK_IMPORTED_MODULE_0__.playerName1.value;
    players[1].name = _dom__WEBPACK_IMPORTED_MODULE_0__.playerName2.value;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIjIyMTAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW5jcmVkaWJsZS1tYWpvci1zdGVhbXB1bmstYmFsbG9vbi1mbG9hdGluZy13YXRlci1zdXJmYWNlLWlsbHVzdHJhdGlvbnMtZ2VuZXJhdGl2ZS1haS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9hcmQxLCAuYm9hcmQyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBnYXA6IDJweDtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGdyaWQtcm93OiAyLzM7XG4gIH1cbiAgYm9keXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbiAgfVxuICAuYm9hcmQxIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB9XG4gIC5ib2FyZDIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgI3BsYXllcjF7XG4gICAgZ3JpZC1yb3c6IDEvMjsgXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4jcGxheWVyMiB7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4gIC5jZWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICNteU1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB9XG5cbiAgI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgY29sdW1uLWdhcDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtcm93OiAyLzM7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ4LCA2LCA2LCAwLjU1KTtcbiAgfVxuI2NvbnRhaW5lciA+IGxhYmVsIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQwMHB4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbiAgI215TW9kYWwyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuXG4gICNpbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gICNtb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgI21vZGFsLWNvbnRlbnQyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAjbW9kYWwtY29udGVudCA+IGlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtFQUNkO0FBQ0Y7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0VBQ2xDO0FBQ0Y7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixZQUFZOztFQUVaLGdCQUFnQjtBQUNsQjtFQUNFO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSx5REFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5REFBZ0g7SUFDaEgscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvYXJkMSwgLmJvYXJkMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGdhcDogMnB4O1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIH1cXG4gIGJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICB9XFxuICAuYm9hcmQxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAuYm9hcmQyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAjcGxheWVyMXtcXG4gICAgZ3JpZC1yb3c6IDEvMjsgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuI3BsYXllcjIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4gIC5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgI215TW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgfVxcblxcbiAgI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgY29sdW1uLWdhcDogMTUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDgsIDYsIDYsIDAuNTUpO1xcbiAgfVxcbiNjb250YWluZXIgPiBsYWJlbCB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcbiAgI215TW9kYWwyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIH1cXG5cXG4gICNpbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoMjIxMC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gIFxcbiAgI21vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcbiAgI21vZGFsLWNvbnRlbnQyIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA3MDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICNtb2RhbC1jb250ZW50ID4gaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbiAgYm9keXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGluY3JlZGlibGUtbWFqb3Itc3RlYW1wdW5rLWJhbGxvb24tZmxvYXRpbmctd2F0ZXItc3VyZmFjZS1pbGx1c3RyYXRpb25zLWdlbmVyYXRpdmUtYWkuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBib2FyZCxcbiAgYm9hcmQyLFxuICBiYXR0bGVzaGlwLFxuICBkZXN0cm95ZXIsXG4gIHN1Ym1hcmluZSxcbiAgY3J1aXNlcixcbiAgY2Fycmllcixcbn0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IGNyZWF0ZVBsYXllcnMgfSBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IHBsYXllcnMgPSBjcmVhdGVQbGF5ZXJzKCk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuY29uc3QgcGxhY2VTaGlwMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IHBsYWNlU2hpcDFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbmNvbnN0IHBsYWNlU2hpcDFDb3JkaW5hdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnBsYWNlU2hpcDFDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcbnBsYWNlU2hpcDFDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgnbWluJywgJzAwJyk7XG5wbGFjZVNoaXAxQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoJ21heCcsICc5OScpO1xuY29uc3QgcGxhY2VTaGlwMkNvcmRpbmF0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucGxhY2VTaGlwMkNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xucGxhY2VTaGlwMkNvcmRpbmF0ZXMuc2V0QXR0cmlidXRlKCdtaW4nLCAnMDAnKTtcbnBsYWNlU2hpcDJDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZSgnbWF4JywgJzk5Jyk7XG5jb25zdCBwbGFjZVNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKCkge1xuICB3aGlsZSAocGxhY2VTaGlwMU5hbWUuZmlyc3RDaGlsZCkge1xuICAgIHBsYWNlU2hpcDFOYW1lLnJlbW92ZUNoaWxkKHBsYWNlU2hpcDFOYW1lLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICBjYXJyaWVyLm5hbWUsXG4gICAgICBiYXR0bGVzaGlwLm5hbWUsXG4gICAgICBjcnVpc2VyLm5hbWUsXG4gICAgICBzdWJtYXJpbmUubmFtZSxcbiAgICAgIGRlc3Ryb3llci5uYW1lLFxuICAgIF07XG4gICAgY29uc3Qgc2hpcE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwbGFjZVNoaXAxTmFtZS5hcHBlbmRDaGlsZChzaGlwT3B0aW9ucyk7XG4gICAgc2hpcE9wdGlvbnMuc2V0QXR0cmlidXRlKCdpZCcsICduZXdPcHRpb24nKTtcbiAgICBzaGlwT3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgc2hpcHNbaV0pO1xuICAgIHNoaXBPcHRpb25zLnRleHRDb250ZW50ID0gc2hpcHNbaV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlYm9hcmQoKSB7XG4gIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBib2FyZERpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYm9hcmREaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkRGl2MS5jbGFzc0xpc3QuYWRkKCdib2FyZDEnKTtcbiAgYm9hcmREaXYyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkMicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmREaXYxKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRGl2Mik7XG4gIGxldCB0ZW1wID0gMDtcbiAgY29uc3QgYWN0aXZlUGxheWVyID0gcGxheWVycy5nZXRBY3RpdmVQbGF5ZXIoKTtcbiAgbGV0IGJvYXJkVG9pbnNlcnQgPSBib2FyZDtcbiAgbGV0IGJvYXJkVG9BdHQgPSBib2FyZDI7XG5cbiAgaWYgKGFjdGl2ZVBsYXllci5uYW1lICE9PSBwbGF5ZXJOYW1lMS52YWx1ZSkge1xuICAgIGJvYXJkVG9pbnNlcnQgPSBib2FyZDI7XG4gICAgYm9hcmRUb0F0dCA9IGJvYXJkO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgY2VsbEJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNlbGxCdXR0b24xLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgIGJvYXJkRGl2MS5hcHBlbmRDaGlsZChjZWxsQnV0dG9uMSk7XG4gICAgICBjZWxsQnV0dG9uMS5zZXRBdHRyaWJ1dGUoJ3gnLCBpKTtcbiAgICAgIGNlbGxCdXR0b24xLnNldEF0dHJpYnV0ZSgneScsIGopO1xuICAgICAgY29uc3QgY2VsbEJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNlbGxCdXR0b24yLmNsYXNzTGlzdC5hZGQoJ2NlbGwyJyk7XG4gICAgICBib2FyZERpdjIuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbjIpO1xuICAgICAgY2VsbEJ1dHRvbjIuc2V0QXR0cmlidXRlKCd4JywgaSk7XG4gICAgICBjZWxsQnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ3knLCBqKTtcbiAgICAgIGNlbGxCdXR0b24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0ZW1wKyspO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgYm9hcmRUb2luc2VydC5ib2FyZFtpXVtqXSA9PT0gJ29iamVjdCdcbiAgICAgICAgfHwgYm9hcmRUb2luc2VydC5ib2FyZFtpXVtqXSA9PT0gJ2hpdCdcbiAgICAgICkge1xuICAgICAgICBjZWxsQnV0dG9uMS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICB9XG4gICAgICBpZiAoYm9hcmRUb0F0dC5ib2FyZFtpXVtqXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGNlbGxCdXR0b24yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICBjZWxsQnV0dG9uMi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkVG9BdHQuYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgIGNlbGxCdXR0b24yLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbEJ1dHRvbjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgIH1cbiAgICAgIGlmIChib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHBsYWNlU2hpcDFMYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciBzaGlwIG5hbWUgYW5kIFggYW5kIFkgQ29yZGluYXRlcyc7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZVNoaXAxTGFiZWwpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMU5hbWUpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMUNvcmRpbmF0ZXMpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwMkNvcmRpbmF0ZXMpO1xuICAgICAgICBwbGFjZVNoaXAxTGFiZWwuYXBwZW5kQ2hpbGQocGxhY2VTaGlwQnRuKTtcbiAgICAgICAgcGxhY2VTaGlwQnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHBsYWNlU2hpcDFDb3JkaW5hdGVzLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAncGxhY2Vob2xkZXInLFxuICAgICAgICAgICdwb2ludC1hID0gMiBudW1iZXJzIGZyb20gMCAtIDknLFxuICAgICAgICApO1xuICAgICAgICBwbGFjZVNoaXAyQ29yZGluYXRlcy5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ3BsYWNlaG9sZGVyJyxcbiAgICAgICAgICAncG9pbnQtYiA9IDIgbnVtYmVycyBmcm9tIDAgLSA5JyxcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbEJ1dHRvbjIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXIxLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgc2hpcHMgUGxheWVyICR7YWN0aXZlUGxheWVyLm5hbWV9YDtcbiAgICAgIH1cblxuICAgICAgY2VsbEJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBib2FyZFRvQXR0LnJlY2lldmVBdHRhY2soXG4gICAgICAgICAgTnVtYmVyKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLngudmFsdWUpLFxuICAgICAgICAgIE51bWJlcihlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy55LnZhbHVlKSxcbiAgICAgICAgKTtcbiAgICAgICAgLy8gZS5jdXJyZW50VGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVycy5zd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgICAgIGlmIChHYW1lKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb3BNb2R1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICBwb3BNb2R1bGUyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZiAoYm9hcmQuc3RhdHVzKGJvYXJkVG9pbnNlcnQuYm9hcmQpID09PSBmYWxzZSAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gJ0FJJykge1xuICAgIGNyZWF0ZU9wdGlvbigpO1xuICB9XG5cbiAgaWYgKFxuICAgIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSAhPT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgPT09IGZhbHNlXG4gICAgJiYgYWN0aXZlUGxheWVyLm5hbWUgIT09ICdBSSdcbiAgKSB7XG4gICAgcGxheWVycy5zd2l0Y2hQbGF5ZXJUdXJuKCk7XG4gICAgQ3JlYXRlYm9hcmQoKTtcbiAgICAvLyBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICB9XG4gIGlmIChcbiAgICBib2FyZC5zdGF0dXMoYm9hcmRUb2luc2VydC5ib2FyZCkgIT09IGZhbHNlXG4gICAgJiYgYm9hcmQuc3RhdHVzKGJvYXJkVG9BdHQuYm9hcmQpICE9PSBmYWxzZVxuICAgICYmIGFjdGl2ZVBsYXllci5uYW1lICE9PSAnQUknXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NlbGwyJyk7XG4gIGxldCBjb21wdXRlckNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGxzLmxlbmd0aCk7XG4gIGlmIChcbiAgICBhY3RpdmVQbGF5ZXIubmFtZSA9PT0gJ0FJJ1xuICAgICYmIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSAhPT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgIT09IGZhbHNlXG4gICkge1xuICAgIHdoaWxlIChcbiAgICAgIGJvYXJkVG9BdHQuYm9hcmRbY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmF0dHJpYnV0ZXMueC52YWx1ZV1bXG4gICAgICAgIGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLnkudmFsdWVcbiAgICAgIF0gPT09ICdoaXQnXG4gICAgICB8fCBib2FyZFRvQXR0LmJvYXJkW2NlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLngudmFsdWVdW1xuICAgICAgICBjZWxsc1tjb21wdXRlckNob2ljZV0uYXR0cmlidXRlcy55LnZhbHVlXG4gICAgICBdID09PSAnbWlzcydcbiAgICApIHtcbiAgICAgIGNvbXB1dGVyQ2hvaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2VsbHMubGVuZ3RoKTtcbiAgICB9XG4gICAgd2luZG93LnNldFRpbWVvdXQoKGUpID0+IHtcbiAgICAgIGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5jbGljayhlKTtcbiAgICB9LCAxMDAwKTtcbiAgfSBlbHNlIGlmIChcbiAgICBhY3RpdmVQbGF5ZXIubmFtZSA9PT0gJ0FJJ1xuICAgICYmIGJvYXJkLnN0YXR1cyhib2FyZFRvaW5zZXJ0LmJvYXJkKSA9PT0gZmFsc2VcbiAgICAmJiBib2FyZC5zdGF0dXMoYm9hcmRUb0F0dC5ib2FyZCkgIT09IGZhbHNlXG4gICkge1xuICAgIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgICB3aGlsZSAoYm9hcmQuc3RhdHVzKGJvYXJkVG9pbnNlcnQuYm9hcmQpID09PSBmYWxzZSkge1xuICAgICAgbGV0IHN0YXJ0O1xuICAgICAgbGV0IGVuZDtcbiAgICAgIGxldCBzdGF0dXM7XG4gICAgICBjb21wdXRlckNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGxzLmxlbmd0aCk7XG4gICAgICBjb25zdCBzaGlwID0gc2hpcHMuc2hpZnQoKTtcbiAgICAgIGNvbnN0IHBvaW50QSA9IFtcbiAgICAgICAgTnVtYmVyKGNlbGxzW2NvbXB1dGVyQ2hvaWNlXS5hdHRyaWJ1dGVzLngudmFsdWUpLFxuICAgICAgICBOdW1iZXIoY2VsbHNbY29tcHV0ZXJDaG9pY2VdLmF0dHJpYnV0ZXMueS52YWx1ZSksXG4gICAgICBdO1xuICAgICAgY29uc3QgcG9pbnRCID0gW107XG4gICAgICBwb2ludEIucHVzaChwb2ludEFbMF0sIHBvaW50QVsxXSk7XG4gICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGNvbnN0IHRlbXAxID0gcG9pbnRBW3JhbmRvbV07XG4gICAgICBpZiAocG9pbnRBW3JhbmRvbV0gKyBzaGlwLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgIHBvaW50QltyYW5kb21dID0gdGVtcDEgKyBzaGlwLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvaW50QltyYW5kb21dID0gdGVtcDEgLSBzaGlwLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gcG9pbnRBO1xuICAgICAgZW5kID0gcG9pbnRCO1xuXG4gICAgICBpZiAocG9pbnRCWzBdIDwgcG9pbnRBWzBdIHx8IHBvaW50QlsxXSA8IHBvaW50QVsxXSkge1xuICAgICAgICBzdGFydCA9IHBvaW50QjtcbiAgICAgICAgZW5kID0gcG9pbnRBO1xuICAgICAgfVxuICAgICAgaWYgKGVuZFsxXSA+IHN0YXJ0WzFdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRUb2luc2VydC5ib2FyZFtzdGFydFswXV1bc3RhcnRbMV0gKyBpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNoaXBzLnVuc2hpZnQoc2hpcCk7XG4gICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmRbMF0gPiBzdGFydFswXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkVG9pbnNlcnQuYm9hcmRbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBzaGlwcy51bnNoaWZ0KHNoaXApO1xuICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQyLnBsYWNlU2hpcChzaGlwLCBwb2ludEEsIHBvaW50Qik7XG4gICAgICB9XG4gICAgfVxuICAgIENyZWF0ZWJvYXJkKCk7XG4gIH1cbn1cblxucGxhY2VTaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGFjdGl2ZVBsYXllciA9IHBsYXllcnMuZ2V0QWN0aXZlUGxheWVyKCk7XG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcblxuICBsZXQgc2hpcDtcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBwbGFjZVNoaXAxTmFtZS5vcHRpb25zW3BsYWNlU2hpcDFOYW1lLnNlbGVjdGVkSW5kZXhdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNoaXBzW2ldLm5hbWUgPT09IHNlbGVjdGVkT3B0aW9uLnZhbHVlKSB7XG4gICAgICBzaGlwID0gc2hpcHNbaV07XG4gICAgICBzZWxlY3RlZE9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChwbGFjZVNoaXAxQ29yZGluYXRlcy52YWx1ZSA+IDk5ICYmIHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlID4gOTkpIHtcbiAgICBhbGVydCgnQ2FudCBlbnRlciBudW1iZXIgYmlnZ2VyIHRoYW4gOSB0cnkgYWdhaW4hJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCB4ID0gTnVtYmVyKHBsYWNlU2hpcDFDb3JkaW5hdGVzLnZhbHVlKTtcbiAgbGV0IHkgPSBOdW1iZXIocGxhY2VTaGlwMkNvcmRpbmF0ZXMudmFsdWUpO1xuICBpZiAoeCA+IHkpIHtcbiAgICB5ICs9IHNoaXAubGVuZ3RoO1xuICAgIHggKz0gMTtcbiAgfSBlbHNlIHtcbiAgICB4ICs9IHNoaXAubGVuZ3RoO1xuICAgIHkgKz0gMTtcbiAgfVxuICBpZiAoeCAhPT0geSkge1xuICAgIGFsZXJ0KCdDb3JkaW5hdGVzIGFyZSBJbnZhbGlkIHRyeSBhZ2FpbiEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFjdGl2ZVBsYXllci5uYW1lICE9PSBwbGF5ZXJOYW1lMS52YWx1ZSAmJiBhY3RpdmVQbGF5ZXIubmFtZSAhPT0gJ0FJJykge1xuICAgIGJvYXJkMi5wbGFjZVNoaXAoXG4gICAgICBzaGlwLFxuICAgICAgW1xuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMF0pLFxuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMV0pLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzBdKSxcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzFdKSxcbiAgICAgIF0sXG4gICAgKTtcbiAgfSBlbHNlIGlmIChhY3RpdmVQbGF5ZXIubmFtZSA9PT0gcGxheWVyTmFtZTEudmFsdWUpIHtcbiAgICBib2FyZC5wbGFjZVNoaXAoXG4gICAgICBzaGlwLFxuICAgICAgW1xuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMF0pLFxuICAgICAgICBOdW1iZXIocGxhY2VTaGlwMUNvcmRpbmF0ZXMudmFsdWVbMV0pLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzBdKSxcbiAgICAgICAgTnVtYmVyKHBsYWNlU2hpcDJDb3JkaW5hdGVzLnZhbHVlWzFdKSxcbiAgICAgIF0sXG4gICAgKTtcbiAgfVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBDcmVhdGVib2FyZCgpO1xufSk7XG5jb25zdCBjcmVhdGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGl2Jyk7XG5jb25zdCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb25zdCBwbGF5ZXJOYW1lMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IHBsYXllck5hbWUyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuY29uc3QgcGxheWVyTmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY29uc3QgcGxheWVyTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1vZGFsKTtcblxuY3JlYXRlTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb25maXJtKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMUxhYmVsKTtcbm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lMSk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZTJMYWJlbCk7XG5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyTmFtZTIpO1xucGxheWVyTmFtZTFMYWJlbC50ZXh0Q29udGVudCA9ICdQTEFZRVItMSc7XG5wbGF5ZXJOYW1lMkxhYmVsLnRleHRDb250ZW50ID0gJ1BMQVlFUi0yJztcbnBsYXllck5hbWUxLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndHlwZS1uYW1lJyk7XG5wbGF5ZXJOYW1lMi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3R5cGUtbmFtZScpO1xuY29uZmlybS50ZXh0Q29udGVudCA9ICdDT05GSVJNJztcbmNvbmZpcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtJyk7XG5tb2RhbENvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1jb250ZW50Jyk7XG5jcmVhdGVNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwnKTtcblxuY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5wbGF5ZXIxLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyMScpO1xuXG5jb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnBsYXllcjIuc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5ZXIyJyk7XG5jb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIHBsYXllcnMuY2hvb3NlUGxheWVyTmFtZSgpO1xuICBwbGF5ZXIxLnRleHRDb250ZW50ID0gcGxheWVyTmFtZTEudmFsdWU7XG4gIHBsYXllcjIudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lMi52YWx1ZTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIxKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcbiAgY3JlYXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgQ3JlYXRlYm9hcmQoKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5jb25zdCBwb3BNb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IHBvcE1vZHVsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wTW9kdWxlKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wTW9kdWxlMik7XG5wb3BNb2R1bGUyLnRleHRDb250ZW50ID0gJ1BMQVkgVlMgQUknO1xucG9wTW9kdWxlLnRleHRDb250ZW50ID0gJ1BMQVlFUiBWUyBQTEFZRVInO1xucG9wTW9kdWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3BNb2R1bGUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBwb3BNb2R1bGUyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgY3JlYXRlTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcblxuY29uc3QgY3JlYXRlTW9kYWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtb2RhbENvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY3JlYXRlTW9kYWwyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRpdicpO1xuY29uc3QgY29uZmlybTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbnN0IHBsYXllckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbmNvbnN0IHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWwyKTtcbmNyZWF0ZU1vZGFsMi5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQyKTtcbm1vZGFsQ29udGVudDIuYXBwZW5kQ2hpbGQoY29uZmlybTIpO1xubW9kYWxDb250ZW50Mi5hcHBlbmRDaGlsZChwbGF5ZXJMYWJlbCk7XG5tb2RhbENvbnRlbnQyLmFwcGVuZENoaWxkKHBsYXllck5hbWUxKTtcbnBsYXllckxhYmVsLnRleHRDb250ZW50ID0gJ1BMQVlFUi0xJztcbmNvbmZpcm0yLnRleHRDb250ZW50ID0gJ0NPTkZJUk0nO1xuY29uZmlybTIuc2V0QXR0cmlidXRlKCdpZCcsICdjb25maXJtJyk7XG5tb2RhbENvbnRlbnQyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9kYWwtY29udGVudDInKTtcbmNyZWF0ZU1vZGFsMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215TW9kYWwnKTtcblxucG9wTW9kdWxlMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wTW9kdWxlMi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBvcE1vZHVsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIGNyZWF0ZU1vZGFsMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25maXJtMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBwbGF5ZXJOYW1lMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FJJyk7XG4gIHBsYXllcnMuY2hvb3NlUGxheWVyTmFtZSgpO1xuICBwbGF5ZXIxLnRleHRDb250ZW50ID0gcGxheWVyTmFtZTEudmFsdWU7XG4gIHBsYXllcjIudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lMi52YWx1ZTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIxKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcbiAgY3JlYXRlTW9kYWwyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIENyZWF0ZWJvYXJkKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbmltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1nJyk7XG5pbWdDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdteU1vZGFsMicpO1xuaW1nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5pbWdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGltZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5leHBvcnQge1xuICBwbGF5ZXJOYW1lMSxcbiAgcGxheWVyTmFtZTIsXG4gIHBsYXllcjEsXG4gIHBsYXllcjIsXG4gIGltZ0NvbnRhaW5lcixcbiAgcGxheWVycyxcbiAgcGxhY2VTaGlwMU5hbWUsXG59O1xuIiwiaW1wb3J0IHsgYm9hcmQyLCBib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBDcmVhdGVib2FyZCBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgaW1nQ29udGFpbmVyIH0gZnJvbSAnLi9kb20uanMnO1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzLmdldEFjdGl2ZVBsYXllcigpO1xuICBpZiAoYm9hcmQuc3RhdHVzKGJvYXJkLmJvYXJkKSA9PT0gJ2FsbCBzaGlwcyBoYXZlIGJlZW4gc3VuaycpIHtcbiAgICBhbGVydChgJHthY3RpdmVQbGF5ZXIubmFtZX0gV2luc2ApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBcbiAgaWYgKGJvYXJkLnN0YXR1cyhib2FyZDIuYm9hcmQpID09PSAnYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rJykge1xuICAgIGFsZXJ0KGAke2FjdGl2ZVBsYXllci5uYW1lfSBXaW5zYCk7XG4gICAgaW1nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBcbiAgQ3JlYXRlYm9hcmQoKTtcbn1cblxuZXhwb3J0IHsgR2FtZSB9O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBDcmVhdGVib2FyZCBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpbWdDb250YWluZXIgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoYXJyID0gW10pID0+IHtcbiAgICBjb25zdCByb3dzID0gMTA7XG4gICAgY29uc3QgY29sdW1ucyA9IDEwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBhcnJbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGFycltpXVtqXSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBwb2ludEEsIHBvaW50QikgPT4ge1xuICAgIGxldCBzdGFydCA9IHBvaW50QTtcbiAgICBsZXQgZW5kID0gcG9pbnRCO1xuXG4gICAgaWYgKGJvYXJkLnNvbWUoKHJvdykgPT4gcm93LmluY2x1ZGVzKHNoaXApKSkge1xuICAgICAgY29uc29sZS5sb2coJ0FsbHJlYWR5IGhhdmUgdGhhdCBzaGlwJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50QlswXSA8IHBvaW50QVswXSB8fCBwb2ludEJbMV0gPCBwb2ludEFbMV0pIHtcbiAgICAgIHN0YXJ0ID0gcG9pbnRCO1xuICAgICAgZW5kID0gcG9pbnRBO1xuICAgIH1cblxuICAgIGlmIChlbmRbMV0gPiBzdGFydFsxXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0WzBdXVtzdGFydFsxXSArIGldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVuZFswXSA+IHN0YXJ0WzBdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSAhPT0gZmFsc2UgJiYgYm9hcmRbeF1beV0gIT09ICdoaXQnICYmIGJvYXJkW3hdW3ldICE9PSAnbWlzcycpIHtcbiAgICAgIGNvbnN0IHRlbXAgPSBib2FyZFt4XVt5XTtcbiAgICAgIHRlbXAuaGl0KHRlbXApO1xuICAgICAgYm9hcmRbeF1beV0gPSAnaGl0JztcbiAgICAgIGFsZXJ0KCdoaXQnKTsgICAgXG4gICAgfSBlbHNlIGlmIChib2FyZFt4XVt5XSA9PT0gZmFsc2UgJiYgYm9hcmRbeF1beV0gIT09ICdtaXNzJyAmJiBib2FyZFt4XVt5XSAhPT0gJ2hpdCcgJiYgdHlwZW9mIGJvYXJkW3hdW3ldICE9PSAnb2JqZWN0Jykge1xuICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcyc7XG4gICAgICBhbGVydCgnbWlzcycpO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRbeF1beV0gPT09ICdtaXNzJyB8fCBib2FyZFt4XVt5XSA9PT0gJ2hpdCcpIHtcbiAgICAgIGFsZXJ0KCd0aGF0IHBvc2l0aW9uIGlzIGFsbHJlYWR5IGhpdCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdGF0dXMgPSAoYm9hcmQpID0+IHtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHNoaXBzID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgaGl0cysrO1xuICAgICAgICAgIHNoaXBzKytcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2ldW2pdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHNoaXBzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhpdHMgPT09IDE3KSB7XG4gICAgICByZXR1cm4gJ2FsbCBzaGlwcyBoYXZlIGJlZW4gc3Vuayc7XG4gICAgfVxuICAgIGlmIChzaGlwcyAhPT0gMTcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICdrZWVwIHBsYXlpbmcnO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9LFxuICAgIGNyZWF0ZUJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIHN0YXR1cyxcbiAgfTtcbn1cbmNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5jb25zdCBjYXJyaWVyID0gU2hpcCgnY2FycmllcicsIDUpO1xuY29uc3QgYmF0dGxlc2hpcCA9IFNoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcbmNvbnN0IGNydWlzZXIgPSBTaGlwKCdjcnVpc2VyJywgMyk7XG5jb25zdCBzdWJtYXJpbmUgPSBTaGlwKCdzdWJtYXJpbmUnLCAzKTtcbmNvbnN0IGRlc3Ryb3llciA9IFNoaXAoJ2Rlc3Ryb3llcicsIDIpO1xuY29uc3QgYm9hcmQyID0gR2FtZWJvYXJkKCk7XG5cbi8qYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIFs0LCAwXSwgWzAsIDBdKTtcbmJvYXJkLnBsYWNlU2hpcChiYXR0bGVzaGlwLCBbNywgNV0sIFs3LCA5XSk7XG5ib2FyZC5wbGFjZVNoaXAoY3J1aXNlciwgWzUsIDVdLCBbNSwgN10pO1xuYm9hcmQucGxhY2VTaGlwKHN1Ym1hcmluZSwgWzIsIDJdLCBbMiwgNF0pO1xuYm9hcmQucGxhY2VTaGlwKGRlc3Ryb3llciwgWzgsIDVdLCBbOCwgNl0pO1xuYm9hcmQyLnBsYWNlU2hpcChjYXJyaWVyLCBbNCwgMF0sIFswLCAwXSk7XG5ib2FyZDIucGxhY2VTaGlwKGJhdHRsZXNoaXAsIFs3LCA1XSwgWzcsIDldKTtcbmJvYXJkMi5wbGFjZVNoaXAoY3J1aXNlciwgWzUsIDVdLCBbNSwgN10pO1xuYm9hcmQyLnBsYWNlU2hpcChzdWJtYXJpbmUsIFsyLCAyXSwgWzIsIDRdKTtcbmJvYXJkMi5wbGFjZVNoaXAoZGVzdHJveWVyLCBbOCwgNV0sIFs4LCA2XSk7XG4vLyBib2FyZDIucmVjaWV2ZUF0dGFjayg4LCA2KTsqL1xuXG5cbmJvYXJkMi5zdGF0dXMoYm9hcmQyLmJvYXJkKTtcblxuZXhwb3J0IHtcbiAgYm9hcmQyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgY3J1aXNlciwgYm9hcmQsIGNhcnJpZXIsXG59O1xuIiwiaW1wb3J0IHsgcGxheWVyTmFtZTEsIHBsYXllck5hbWUyLCBwbGF5ZXIxLCBwbGF5ZXIyIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcnMobmFtZSkge1xuICBjb25zdCBwbGF5ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lLFxuICAgIH0sXG4gIF07XG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV07XG4gICAgICBwbGF5ZXIxLnRleHRDb250ZW50ID0gYFBsYXllcjogJHthY3RpdmVQbGF5ZXIubmFtZX0ncyB0dXJuYDtcbiAgICAgIHBsYXllcjIudGV4dENvbnRlbnQgPSBgUGxheWVyOiAke3BsYXllcnNbMF0ubmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICAgICAgcGxheWVyMS50ZXh0Q29udGVudCA9IGBQbGF5ZXI6ICR7YWN0aXZlUGxheWVyLm5hbWV9J3MgdHVybmA7XG4gICAgICBwbGF5ZXIyLnRleHRDb250ZW50ID0gYFBsYXllcjogJHtwbGF5ZXJzWzFdLm5hbWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZVBsYXllcjtcbiAgfTtcbiAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuICBjb25zdCBjaG9vc2VQbGF5ZXJOYW1lID0gKCkgPT4ge1xuICAgIHBsYXllcnNbMF0ubmFtZSA9ICcnO1xuICAgIHBsYXllcnNbMV0ubmFtZSA9ICcnO1xuICAgIHBsYXllcnNbMF0ubmFtZSA9IHBsYXllck5hbWUxLnZhbHVlO1xuICAgIHBsYXllcnNbMV0ubmFtZSA9IHBsYXllck5hbWUyLnZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHN3aXRjaFBsYXllclR1cm4sXG4gICAgY2hvb3NlUGxheWVyTmFtZSxcbiAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gIH07XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlUGxheWVyc307XG4iLCJpbXBvcnQge2JvYXJkMn0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChuYW1lID0gbnVsbCwgbGVuZ3RoID0gbnVsbCwgaGl0VGltZXMgPSAwLCBpc1N1bmsgPSBmYWxzZSkge1xuICBjb25zdCBoaXQgPSAob2JqKSA9PiB7IG9iai5oaXRUaW1lcyArPSAxIH07XG5cbiAgY29uc3QgaXNTdW5rRm4gPSAob2JqLCBzaGlwTGVuZ3RoLCBoaXRzKSA9PiB7XG4gICAgaWYgKHNoaXBMZW5ndGggPT09IGhpdHMpIHtcbiAgICAgIG9iai5pc1N1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuICdTaGlwIGlzIHN1bmsnO1xuICAgIH0gXG4gICAgcmV0dXJuICdTaGlwIGlzIGFsaXZlJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsIGxlbmd0aCwgaGl0VGltZXMsIGlzU3VuaywgaGl0LCBpc1N1bmtGbixcbiAgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NoaXAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=