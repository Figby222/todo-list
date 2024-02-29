/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --todo-color: rgb(253, 202, 108);
}

* {
    box-sizing: border-box;
}

button {
    /* background-color: blue; */
    font-weight: bold;
}

body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: orange;
    display: grid;
    grid-template-rows: auto auto 1fr;

}

header {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    text-decoration: underline;
}

nav.projects {
    display: grid;
    grid-template-columns: repeat(auto, 50px);
    grid-template-rows: 50px;
    grid-auto-flow: column;
    grid-auto-columns: 100px;
    overflow: auto;
}

.project-button {
    border-radius: 10px;
}

.newProject {
    max-width: 50px;
    font-size: 2rem;
}

div.project {
    grid-row: 3 / -1;
    background-color: white;
    border: 10px solid red;
    display: grid;
    grid-template-rows: auto 1fr repeat(2, 50px);
    overflow: auto;
}

.project-title {
    background-color: orange;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.75rem;
    padding: 10px;
}

.todos {
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;

    overflow: auto;
}

.todo {
    padding: 30px;
    /* background-color: rgb(177, 177, 177); */
    background-color: var(--todo-color);
    border-radius: 30px;
}

.todo > div {
    display: grid;

}

label {
    font-weight: bold;
}

dialog {
    background-color: var(--todo-color);
    padding: 4rem;
}

input {
    background-color: var(--todo-color);
    color: red;
    border-radius: 10px;
    font-weight: bold
}

input:focus {
    background-color: white;
}

input:hover {
    background-color: white;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;AACpC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,aAAa;IACb,iCAAiC;;AAErC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,wBAAwB;IACxB,sBAAsB;IACtB,wBAAwB;IACxB,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;IACb,4CAA4C;IAC5C,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,2DAA2D;IAC3D,SAAS;;IAET,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,UAAU;IACV,mBAAmB;IACnB;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":[":root {\n    --todo-color: rgb(253, 202, 108);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbutton {\n    /* background-color: blue; */\n    font-weight: bold;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: orange;\n    display: grid;\n    grid-template-rows: auto auto 1fr;\n\n}\n\nheader {\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    font-size: 2rem;\n    text-decoration: underline;\n}\n\nnav.projects {\n    display: grid;\n    grid-template-columns: repeat(auto, 50px);\n    grid-template-rows: 50px;\n    grid-auto-flow: column;\n    grid-auto-columns: 100px;\n    overflow: auto;\n}\n\n.project-button {\n    border-radius: 10px;\n}\n\n.newProject {\n    max-width: 50px;\n    font-size: 2rem;\n}\n\ndiv.project {\n    grid-row: 3 / -1;\n    background-color: white;\n    border: 10px solid red;\n    display: grid;\n    grid-template-rows: auto 1fr repeat(2, 50px);\n    overflow: auto;\n}\n\n.project-title {\n    background-color: orange;\n    text-align: center;\n    color: white;\n    font-weight: bold;\n    font-size: 1.75rem;\n    padding: 10px;\n}\n\n.todos {\n    padding: 30px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 30px;\n\n    overflow: auto;\n}\n\n.todo {\n    padding: 30px;\n    /* background-color: rgb(177, 177, 177); */\n    background-color: var(--todo-color);\n    border-radius: 30px;\n}\n\n.todo > div {\n    display: grid;\n\n}\n\nlabel {\n    font-weight: bold;\n}\n\ndialog {\n    background-color: var(--todo-color);\n    padding: 4rem;\n}\n\ninput {\n    background-color: var(--todo-color);\n    color: red;\n    border-radius: 10px;\n    font-weight: bold\n}\n\ninput:focus {\n    background-color: white;\n}\n\ninput:hover {\n    background-color: white;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMControl.js":
/*!***************************!*\
  !*** ./src/DOMControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/input.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






const storage = new _storage_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

const DOMController = function() {
    this.body = document.querySelector('body');
    this.currentRenderedProject;

    this.addProjectButton = document.querySelector('.newProject');
    this.dialog = document.querySelector('.create-project');
    this.projectSubmitButton = document.querySelector('.project-submit');

    this.projectSubmitButton.addEventListener('click', (e) => {
        const titleInput = document.querySelector('#project-title');

        if (titleInput.value) {
            this.dialog.open = false;

            const project = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](titleInput.value);
            this.createProject(project);
        }

        titleInput.value = '';
    });

    this.addProjectButton.addEventListener('click', (e) => {
        e.preventDefault();

        this.dialog.open = true;

    });

}

DOMController.prototype.removeElement = function(container) {
    container.remove();
}

DOMController.prototype.createProject = function(project) {
    const DOMNav = document.querySelector('.projects');
    
    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    
    projectButton.textContent = project.title;
    
    project.class = project.title.split(' ');
    project.class = project.class.join('-').toLowerCase();
    
    projectButton.classList.add(project.class);
    
    projectButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        
        this.renderProject(project);
    });
    
    DOMNav.insertBefore(projectButton, this.addProjectButton);
    
    this.renderProject(project);
}

DOMController.prototype.renderProject = function(project) {
    if (this.currentRenderedProject) {
        this.removeElement(this.currentRenderedProject.container);
    }
    
    storage.populateStorage(project);
    
    this.currentRenderedProject = project;
    
    const DOMTodos = document.createElement('div');
    DOMTodos.classList.add('todos');

    const container = document.createElement('div');
    container.classList.add('project');
    project.container = container;
    
    const title = document.createElement('div');
    title.textContent = project.title;
    title.classList.add('project-title');
    
    container.appendChild(title);
    // container.appendChild(description.getContainer());
    
    project.todoList.forEach((todo) => {
        DOMTodos.appendChild(this.renderTodo(todo, project));
    });
    
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = 'new todo';
    
    newTodoButton.addEventListener('click', (e) => {
        e.preventDefault;
        
        const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        
        project.addTodo(newTodo);
        
        this.renderProject(project);
    });
    
    const completeProject = document.createElement('button');
    completeProject.textContent = 'Complete Project';
    
    completeProject.addEventListener('click', (e) => {
        e.preventDefault();
        const projectButton = document.querySelector(`.projects > .${project.class}`);
        
        this.removeElement(container);
        projectButton.remove();
        storage.removeProject(project);
    })
    container.appendChild(DOMTodos);
    container.appendChild(newTodoButton);
    container.appendChild(completeProject);
    
    this.insertElement(container);
}

DOMController.prototype.renderTodo = function (object, project) {
    const container = document.createElement('div');
    container.classList.add('todo');

    const title = new _input__WEBPACK_IMPORTED_MODULE_0__.DOMTextInput(object, 'Title: ', 'title', object.title);
    const dueDate = new _input__WEBPACK_IMPORTED_MODULE_0__.DOMDateInput(object, 'Date: ', 'dueDate', object.dueDate);

    const description = new _input__WEBPACK_IMPORTED_MODULE_0__.DOMTextInput(object, 'Description', 'description', object.description);
    const priority = new _input__WEBPACK_IMPORTED_MODULE_0__.DOMSelect(object, 'Priority: ', 'priority', ['Low', 'Medium', 'High']);
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete Todo';

    completeButton.addEventListener('click', (e) => {
        e.preventDefault();

        project.removeTodo(object); // remove from project
        this.renderProject(project);
    });

    
    const expandedButton = document.createElement('button');
    expandedButton.textContent = '^';
    
    expandedButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        object.expanded = !(object.expanded);
        
        // container.remove();
        
        this.renderProject(project);
    })
    
    container.appendChild(title.getContainer());
    container.appendChild(dueDate.getContainer());
    
    if (object.expanded) {
        container.appendChild(description.getContainer());
        container.appendChild(priority.getContainer());
    }
    
    container.appendChild(completeButton);
    container.appendChild(expandedButton);

    return container;
}

DOMController.prototype.insertElement = (element, query = 'body') => {
    query = document.querySelector(query);

    query.appendChild(element);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMCheckboxInput: () => (/* binding */ DOMCheckboxInput),
/* harmony export */   DOMDateInput: () => (/* binding */ DOMDateInput),
/* harmony export */   DOMSelect: () => (/* binding */ DOMSelect),
/* harmony export */   DOMTextInput: () => (/* binding */ DOMTextInput)
/* harmony export */ });
const DOMInput = function () {

};

DOMInput.prototype.getContainer = function () {
    this._container.innerHTML = '';
    
    this._container.appendChild(this._DOMLabel);
    this._container.appendChild(this._DOMInput);
    
    return this._container;
};

DOMInput.prototype.setValue = function(value) {
    object[id] = value;
    console.log(object);
};

DOMInput.prototype.setLabel = function(label) {
    this._label = label;
    this._DOMLabel.textContent = label;
};

const DOMTextInput = function(object, label, id, value) {
    this._container = document.createElement('div');
    this._container.classList.add('input-container');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMInput = document.createElement('input');
    this._DOMInput.type = 'text';
    this._DOMInput.id = id;
    this._DOMInput.name = id;
    this._DOMInput.value = value;
    this._DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.value;
    });
};

Object.setPrototypeOf(DOMTextInput.prototype, DOMInput.prototype);

const DOMDateInput = function(object, label, id, value) {
    this._container = document.createElement('div');
    this._container.classList.add('input-container');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMInput = document.createElement('input');
    this._DOMInput.type = 'date';
    this._DOMInput.id = id;
    this._DOMInput.name = id;
    this._DOMInput.value = value;
    
    this._DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.value;
    });
};

Object.setPrototypeOf(DOMDateInput.prototype, DOMInput.prototype);

const DOMCheckboxInput = function(object, label, id, checked) {
    this._container = document.createElement('div');
    this._container.classList.add('input-container');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMInput = document.createElement('input');
    this._DOMInput.type = 'checkbox';
    this._DOMInput.id = id;
    this._DOMInput.name = id;
    this._DOMInput.checked = checked;

    this._DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.checked;
    });
};

DOMCheckboxInput.setChecked = function ()  {
    this._DOMInput.checked = !(this._DOMInput.checked);
}

DOMCheckboxInput.prototype.setLabel = function(label) {
    this._label = label;
    this._DOMLabel.textContent = label;
};

DOMCheckboxInput.prototype.getContainer = function () {
    this._container.innerHTML = '';
    
    this._container.appendChild(this._DOMLabel);
    this._container.appendChild(this._DOMInput);
    
    return this._container;
};

const DOMSelect = function (object, label, id, options) {
    this._container = document.createElement('div');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMSelect = document.createElement('select');
    this._DOMSelect.id = id;
    this._DOMSelect.name = id;

    for (const option of options) {
        const DOMOption = document.createElement('option');
        DOMOption.value = option;
        DOMOption.textContent = option;

        this._DOMSelect.appendChild(DOMOption);
    }

    this._DOMSelect.addEventListener('change', (e) => {
        object[id] = e.target.value;
    });
}

Object.setPrototypeOf(DOMSelect.prototype, DOMInput.prototype);

DOMSelect.prototype.getContainer = function() {
    this._container.innerHTML = '';

    this._container.appendChild(this._DOMLabel);
    this._container.appendChild(this._DOMSelect);

    return this._container;
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = function
(
    title = 'project', 
    description = 'stuff', 
    todoList = [], 
    defaultProject = false
) {
    this.title = title;
    this.description = description;
    this.todoList = todoList;
    this.container;
    this.defaultProject = defaultProject;
}

Project.prototype.removeTodo = function (todo) {
    const index = this.todoList.indexOf(todo);

    if (index > -1) { // only splice if todo is found
        this.todoList.splice(index, 1);
    }
}

Project.prototype.addTodo = function (todo) {
    this.todoList.push(todo);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let projects = [];

const StorageInterface = function() {
};

StorageInterface.prototype.populateStorage = function(project) {
    if (project) {
        const projectIndex = projects.indexOf(project);
        
        if (projectIndex > -1) { // check if project exists in projects
            projects[projectIndex] = project;
        } else { 
            projects.push(project);
        }
    }
    
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem('projects', projectsJSON);
};

StorageInterface.prototype.getProjects = () => JSON.parse(localStorage.getItem('projects'));

StorageInterface.prototype.removeProject = function(project) {
    projects.splice(projects.indexOf(project), 1);
    this.populateStorage();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageInterface);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = function (title = '', description = '', dueDate = '', priority = 'medium', notes = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorty = priority;
    this.notes = notes;
    this.complete = false;
    this.expanded = false;
}

Todo.prototype.changeCompletionStatus = function() {
    this.complete = !(this.complete);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _DOMControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMControl.js */ "./src/DOMControl.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





const storage = new _storage_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const DOMCtrl = new _DOMControl_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

let storedProjects = storage.getProjects();

if (!(storedProjects[0]) || !(storedProjects[0].defaultProject)) {
    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Default Project');
    defaultProject.defaultProject = true;

    storedProjects.unshift(defaultProject);
}

for (const project of storedProjects) {
    const currentProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](project.title, project.description, project.todoList, project.defaultProject);
    DOMCtrl.createProject(currentProject);
}

console.log('hi');

// let todoList = [];

// const myTodo = new Todo("Todo 1", "My first todo", '2024-09-01', 'high', ['hello', 'hello', 'hello2']);
// console.log(myTodo);

// const element = document.createElement('div');
// element.textContent = 'hello';



// // DOMCtrl.insertElement(element);

// // const DOMReady = DOMCtrl.renderTodo(myTodo);
// // DOMCtrl.insertElement(DOMReady);

// const getPizza  = new Todo('Get Pizza', 'Cheese Pizza', '2024-03-01', 'high');

// // DOMCtrl.insertElement(DOMCtrl.renderTodo(getPizza))

// todoList.push(myTodo);
// todoList.push(getPizza);

// let project = new Project('title', 'description', todoList);
// DOMCtrl.createProject(project);

// let todoList2 = [];
// todoList2.push(new Todo('TestTodo', 'hello', '2021-04-04', 'high', ['test']));
// todoList2.push(new Todo('hi', 'hi', '2024-02-24', 'high', ['test']));
// let project2 = new Project('myProject', 'description', todoList2);

// DOMCtrl.createProject(project2);


// DOMCtrl.renderProject(project);
// project.addTodo(new Todo('test', 'desc', '2024-10-04', 'low', ['test']))

// DOMCtrl.renderProject(project);

// project.forEach((todo) => {
//     DOMCtrl.insertElement(DOMCtrl.renderTodo(todo));
// })


// console.log(storage.getObject(JSON.stringify(project2)));

// console.log(localStorage.getItem(project2.title));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQixtREFBZ0I7QUFDcEMsb0JBQW9CLHNEQUFhOztBQUVqQzs7QUFFQTtBQUNBLCtCQUErQixtREFBTztBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG1EQUFPO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBLHFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2lucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tdG9kby1jb2xvcjogcmdiKDI1MywgMjAyLCAxMDgpO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcblxufVxuXG5oZWFkZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5uYXYucHJvamVjdHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0bywgNTBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uZXdQcm9qZWN0IHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5kaXYucHJvamVjdCB7XG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciByZXBlYXQoMiwgNTBweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRvZG9zIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgZ2FwOiAzMHB4O1xuXG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50b2RvIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2RvLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4udG9kbyA+IGRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcblxufVxuXG5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpYWxvZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1jb2xvcik7XG4gICAgcGFkZGluZzogNHJlbTtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZG8tY29sb3IpO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG5pbnB1dDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlucHV0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTOztJQUVULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdG9kby1jb2xvcjogcmdiKDI1MywgMjAyLCAxMDgpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuXFxufVxcblxcbmhlYWRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxubmF2LnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0bywgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDEwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBtYXgtd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuZGl2LnByb2plY3Qge1xcbiAgICBncmlkLXJvdzogMyAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHJlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciByZXBlYXQoMiwgNTBweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kby1jb2xvcik7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IERPTVRleHRJbnB1dCwgRE9NRGF0ZUlucHV0LCBET01DaGVja2JveElucHV0LCBET01TZWxlY3QgfSBmcm9tICcuL2lucHV0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IFN0b3JhZ2VJbnRlcmZhY2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlSW50ZXJmYWNlKCk7XG5cbmNvbnN0IERPTUNvbnRyb2xsZXIgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgdGhpcy5jdXJyZW50UmVuZGVyZWRQcm9qZWN0O1xuXG4gICAgdGhpcy5hZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3QnKTtcbiAgICB0aGlzLmRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpO1xuICAgIHRoaXMucHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdCcpO1xuXG4gICAgdGhpcy5wcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgaWYgKHRpdGxlSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLm9wZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuZGlhbG9nLm9wZW4gPSB0cnVlO1xuXG4gICAgfSk7XG5cbn1cblxuRE9NQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbn1cblxuRE9NQ29udHJvbGxlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBjb25zdCBET01OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgIFxuICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIFxuICAgIHByb2plY3QuY2xhc3MgPSBwcm9qZWN0LnRpdGxlLnNwbGl0KCcgJyk7XG4gICAgcHJvamVjdC5jbGFzcyA9IHByb2plY3QuY2xhc3Muam9pbignLScpLnRvTG93ZXJDYXNlKCk7XG4gICAgXG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHByb2plY3QuY2xhc3MpO1xuICAgIFxuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuICAgIFxuICAgIERPTU5hdi5pbnNlcnRCZWZvcmUocHJvamVjdEJ1dHRvbiwgdGhpcy5hZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBcbiAgICB0aGlzLnJlbmRlclByb2plY3QocHJvamVjdCk7XG59XG5cbkRPTUNvbnRyb2xsZXIucHJvdG90eXBlLnJlbmRlclByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFJlbmRlcmVkUHJvamVjdCkge1xuICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy5jdXJyZW50UmVuZGVyZWRQcm9qZWN0LmNvbnRhaW5lcik7XG4gICAgfVxuICAgIFxuICAgIHN0b3JhZ2UucG9wdWxhdGVTdG9yYWdlKHByb2plY3QpO1xuICAgIFxuICAgIHRoaXMuY3VycmVudFJlbmRlcmVkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgXG4gICAgY29uc3QgRE9NVG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBET01Ub2Rvcy5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0LmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24uZ2V0Q29udGFpbmVyKCkpO1xuICAgIFxuICAgIHByb2plY3QudG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBET01Ub2Rvcy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRvZG8odG9kbywgcHJvamVjdCkpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ25ldyB0b2RvJztcbiAgICBcbiAgICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbygpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGNvbXBsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSBQcm9qZWN0JztcbiAgICBcbiAgICBjb21wbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdHMgPiAuJHtwcm9qZWN0LmNsYXNzfWApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KGNvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChET01Ub2Rvcyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZVByb2plY3QpO1xuICAgIFxuICAgIHRoaXMuaW5zZXJ0RWxlbWVudChjb250YWluZXIpO1xufVxuXG5ET01Db250cm9sbGVyLnByb3RvdHlwZS5yZW5kZXJUb2RvID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvamVjdCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IG5ldyBET01UZXh0SW5wdXQob2JqZWN0LCAnVGl0bGU6ICcsICd0aXRsZScsIG9iamVjdC50aXRsZSk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBET01EYXRlSW5wdXQob2JqZWN0LCAnRGF0ZTogJywgJ2R1ZURhdGUnLCBvYmplY3QuZHVlRGF0ZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IG5ldyBET01UZXh0SW5wdXQob2JqZWN0LCAnRGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24nLCBvYmplY3QuZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gbmV3IERPTVNlbGVjdChvYmplY3QsICdQcmlvcml0eTogJywgJ3ByaW9yaXR5JywgWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXSk7XG4gICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSBUb2RvJztcblxuICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyhvYmplY3QpOyAvLyByZW1vdmUgZnJvbSBwcm9qZWN0XG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIFxuICAgIGNvbnN0IGV4cGFuZGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhwYW5kZWRCdXR0b24udGV4dENvbnRlbnQgPSAnXic7XG4gICAgXG4gICAgZXhwYW5kZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBvYmplY3QuZXhwYW5kZWQgPSAhKG9iamVjdC5leHBhbmRlZCk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlbmRlclByb2plY3QocHJvamVjdCk7XG4gICAgfSlcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUuZ2V0Q29udGFpbmVyKCkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlLmdldENvbnRhaW5lcigpKTtcbiAgICBcbiAgICBpZiAob2JqZWN0LmV4cGFuZGVkKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5nZXRDb250YWluZXIoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eS5nZXRDb250YWluZXIoKSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGV4cGFuZGVkQnV0dG9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbkRPTUNvbnRyb2xsZXIucHJvdG90eXBlLmluc2VydEVsZW1lbnQgPSAoZWxlbWVudCwgcXVlcnkgPSAnYm9keScpID0+IHtcbiAgICBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXG4gICAgcXVlcnkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUNvbnRyb2xsZXI7IiwiY29uc3QgRE9NSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cbn07XG5cbkRPTUlucHV0LnByb3RvdHlwZS5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9ET01MYWJlbCk7XG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX0RPTUlucHV0KTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xufTtcblxuRE9NSW5wdXQucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBvYmplY3RbaWRdID0gdmFsdWU7XG4gICAgY29uc29sZS5sb2cob2JqZWN0KTtcbn07XG5cbkRPTUlucHV0LnByb3RvdHlwZS5zZXRMYWJlbCA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLl9ET01MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xufTtcblxuY29uc3QgRE9NVGV4dElucHV0ID0gZnVuY3Rpb24ob2JqZWN0LCBsYWJlbCwgaWQsIHZhbHVlKSB7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuXG4gICAgdGhpcy5fRE9NTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRoaXMuX0RPTUxhYmVsLmZvciA9IGlkO1xuICAgIHRoaXMuX0RPTUxhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgICB0aGlzLl9ET01JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5fRE9NSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aGlzLl9ET01JbnB1dC5pZCA9IGlkO1xuICAgIHRoaXMuX0RPTUlucHV0Lm5hbWUgPSBpZDtcbiAgICB0aGlzLl9ET01JbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX0RPTUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgb2JqZWN0W2lkXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xufTtcblxuT2JqZWN0LnNldFByb3RvdHlwZU9mKERPTVRleHRJbnB1dC5wcm90b3R5cGUsIERPTUlucHV0LnByb3RvdHlwZSk7XG5cbmNvbnN0IERPTURhdGVJbnB1dCA9IGZ1bmN0aW9uKG9iamVjdCwgbGFiZWwsIGlkLCB2YWx1ZSkge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcblxuICAgIHRoaXMuX0RPTUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aGlzLl9ET01MYWJlbC5mb3IgPSBpZDtcbiAgICB0aGlzLl9ET01MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuXG4gICAgdGhpcy5fRE9NSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuX0RPTUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgdGhpcy5fRE9NSW5wdXQuaWQgPSBpZDtcbiAgICB0aGlzLl9ET01JbnB1dC5uYW1lID0gaWQ7XG4gICAgdGhpcy5fRE9NSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICBcbiAgICB0aGlzLl9ET01JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIG9iamVjdFtpZF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9KTtcbn07XG5cbk9iamVjdC5zZXRQcm90b3R5cGVPZihET01EYXRlSW5wdXQucHJvdG90eXBlLCBET01JbnB1dC5wcm90b3R5cGUpO1xuXG5jb25zdCBET01DaGVja2JveElucHV0ID0gZnVuY3Rpb24ob2JqZWN0LCBsYWJlbCwgaWQsIGNoZWNrZWQpIHtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG5cbiAgICB0aGlzLl9ET01MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGhpcy5fRE9NTGFiZWwuZm9yID0gaWQ7XG4gICAgdGhpcy5fRE9NTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICAgIHRoaXMuX0RPTUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLl9ET01JbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICB0aGlzLl9ET01JbnB1dC5pZCA9IGlkO1xuICAgIHRoaXMuX0RPTUlucHV0Lm5hbWUgPSBpZDtcbiAgICB0aGlzLl9ET01JbnB1dC5jaGVja2VkID0gY2hlY2tlZDtcblxuICAgIHRoaXMuX0RPTUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgb2JqZWN0W2lkXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgfSk7XG59O1xuXG5ET01DaGVja2JveElucHV0LnNldENoZWNrZWQgPSBmdW5jdGlvbiAoKSAge1xuICAgIHRoaXMuX0RPTUlucHV0LmNoZWNrZWQgPSAhKHRoaXMuX0RPTUlucHV0LmNoZWNrZWQpO1xufVxuXG5ET01DaGVja2JveElucHV0LnByb3RvdHlwZS5zZXRMYWJlbCA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLl9ET01MYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xufTtcblxuRE9NQ2hlY2tib3hJbnB1dC5wcm90b3R5cGUuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fRE9NTGFiZWwpO1xuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9ET01JbnB1dCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbn07XG5cbmNvbnN0IERPTVNlbGVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIGxhYmVsLCBpZCwgb3B0aW9ucykge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5fRE9NTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRoaXMuX0RPTUxhYmVsLmZvciA9IGlkO1xuICAgIHRoaXMuX0RPTUxhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgICB0aGlzLl9ET01TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0aGlzLl9ET01TZWxlY3QuaWQgPSBpZDtcbiAgICB0aGlzLl9ET01TZWxlY3QubmFtZSA9IGlkO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICBjb25zdCBET01PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgRE9NT3B0aW9uLnZhbHVlID0gb3B0aW9uO1xuICAgICAgICBET01PcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb247XG5cbiAgICAgICAgdGhpcy5fRE9NU2VsZWN0LmFwcGVuZENoaWxkKERPTU9wdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5fRE9NU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIG9iamVjdFtpZF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9KTtcbn1cblxuT2JqZWN0LnNldFByb3RvdHlwZU9mKERPTVNlbGVjdC5wcm90b3R5cGUsIERPTUlucHV0LnByb3RvdHlwZSk7XG5cbkRPTVNlbGVjdC5wcm90b3R5cGUuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX0RPTUxhYmVsKTtcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fRE9NU2VsZWN0KTtcblxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG59XG5cbmV4cG9ydCB7IERPTVRleHRJbnB1dCwgRE9NRGF0ZUlucHV0LCBET01DaGVja2JveElucHV0LCBET01TZWxlY3QgfTsiLCJjb25zdCBQcm9qZWN0ID0gZnVuY3Rpb25cbihcbiAgICB0aXRsZSA9ICdwcm9qZWN0JywgXG4gICAgZGVzY3JpcHRpb24gPSAnc3R1ZmYnLCBcbiAgICB0b2RvTGlzdCA9IFtdLCBcbiAgICBkZWZhdWx0UHJvamVjdCA9IGZhbHNlXG4pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdDtcbiAgICB0aGlzLmNvbnRhaW5lcjtcbiAgICB0aGlzLmRlZmF1bHRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XG59XG5cblByb2plY3QucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2RvTGlzdC5pbmRleE9mKHRvZG8pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHsgLy8gb25seSBzcGxpY2UgaWYgdG9kbyBpcyBmb3VuZFxuICAgICAgICB0aGlzLnRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwibGV0IHByb2plY3RzID0gW107XG5cbmNvbnN0IFN0b3JhZ2VJbnRlcmZhY2UgPSBmdW5jdGlvbigpIHtcbn07XG5cblN0b3JhZ2VJbnRlcmZhY2UucHJvdG90eXBlLnBvcHVsYXRlU3RvcmFnZSA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHByb2plY3RJbmRleCA+IC0xKSB7IC8vIGNoZWNrIGlmIHByb2plY3QgZXhpc3RzIGluIHByb2plY3RzXG4gICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbiAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBwcm9qZWN0c0pTT04pO1xufTtcblxuU3RvcmFnZUludGVyZmFjZS5wcm90b3R5cGUuZ2V0UHJvamVjdHMgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblxuU3RvcmFnZUludGVyZmFjZS5wcm90b3R5cGUucmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgdGhpcy5wb3B1bGF0ZVN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZUludGVyZmFjZTsiLCJjb25zdCBUb2RvID0gZnVuY3Rpb24gKHRpdGxlID0gJycsIGRlc2NyaXB0aW9uID0gJycsIGR1ZURhdGUgPSAnJywgcHJpb3JpdHkgPSAnbWVkaXVtJywgbm90ZXMgPSBbXSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9ydHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbn1cblxuVG9kby5wcm90b3R5cGUuY2hhbmdlQ29tcGxldGlvblN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29tcGxldGUgPSAhKHRoaXMuY29tcGxldGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSAnLi9ET01Db250cm9sLmpzJztcbmltcG9ydCBTdG9yYWdlSW50ZXJmYWNlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZUludGVyZmFjZSgpO1xuY29uc3QgRE9NQ3RybCA9IG5ldyBET01Db250cm9sbGVyKCk7XG5cbmxldCBzdG9yZWRQcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblxuaWYgKCEoc3RvcmVkUHJvamVjdHNbMF0pIHx8ICEoc3RvcmVkUHJvamVjdHNbMF0uZGVmYXVsdFByb2plY3QpKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgZGVmYXVsdFByb2plY3QuZGVmYXVsdFByb2plY3QgPSB0cnVlO1xuXG4gICAgc3RvcmVkUHJvamVjdHMudW5zaGlmdChkZWZhdWx0UHJvamVjdCk7XG59XG5cbmZvciAoY29uc3QgcHJvamVjdCBvZiBzdG9yZWRQcm9qZWN0cykge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdC50aXRsZSwgcHJvamVjdC5kZXNjcmlwdGlvbiwgcHJvamVjdC50b2RvTGlzdCwgcHJvamVjdC5kZWZhdWx0UHJvamVjdCk7XG4gICAgRE9NQ3RybC5jcmVhdGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuY29uc29sZS5sb2coJ2hpJyk7XG5cbi8vIGxldCB0b2RvTGlzdCA9IFtdO1xuXG4vLyBjb25zdCBteVRvZG8gPSBuZXcgVG9kbyhcIlRvZG8gMVwiLCBcIk15IGZpcnN0IHRvZG9cIiwgJzIwMjQtMDktMDEnLCAnaGlnaCcsIFsnaGVsbG8nLCAnaGVsbG8nLCAnaGVsbG8yJ10pO1xuLy8gY29uc29sZS5sb2cobXlUb2RvKTtcblxuLy8gY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gZWxlbWVudC50ZXh0Q29udGVudCA9ICdoZWxsbyc7XG5cblxuXG4vLyAvLyBET01DdHJsLmluc2VydEVsZW1lbnQoZWxlbWVudCk7XG5cbi8vIC8vIGNvbnN0IERPTVJlYWR5ID0gRE9NQ3RybC5yZW5kZXJUb2RvKG15VG9kbyk7XG4vLyAvLyBET01DdHJsLmluc2VydEVsZW1lbnQoRE9NUmVhZHkpO1xuXG4vLyBjb25zdCBnZXRQaXp6YSAgPSBuZXcgVG9kbygnR2V0IFBpenphJywgJ0NoZWVzZSBQaXp6YScsICcyMDI0LTAzLTAxJywgJ2hpZ2gnKTtcblxuLy8gLy8gRE9NQ3RybC5pbnNlcnRFbGVtZW50KERPTUN0cmwucmVuZGVyVG9kbyhnZXRQaXp6YSkpXG5cbi8vIHRvZG9MaXN0LnB1c2gobXlUb2RvKTtcbi8vIHRvZG9MaXN0LnB1c2goZ2V0UGl6emEpO1xuXG4vLyBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCd0aXRsZScsICdkZXNjcmlwdGlvbicsIHRvZG9MaXN0KTtcbi8vIERPTUN0cmwuY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcblxuLy8gbGV0IHRvZG9MaXN0MiA9IFtdO1xuLy8gdG9kb0xpc3QyLnB1c2gobmV3IFRvZG8oJ1Rlc3RUb2RvJywgJ2hlbGxvJywgJzIwMjEtMDQtMDQnLCAnaGlnaCcsIFsndGVzdCddKSk7XG4vLyB0b2RvTGlzdDIucHVzaChuZXcgVG9kbygnaGknLCAnaGknLCAnMjAyNC0wMi0yNCcsICdoaWdoJywgWyd0ZXN0J10pKTtcbi8vIGxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdteVByb2plY3QnLCAnZGVzY3JpcHRpb24nLCB0b2RvTGlzdDIpO1xuXG4vLyBET01DdHJsLmNyZWF0ZVByb2plY3QocHJvamVjdDIpO1xuXG5cbi8vIERPTUN0cmwucmVuZGVyUHJvamVjdChwcm9qZWN0KTtcbi8vIHByb2plY3QuYWRkVG9kbyhuZXcgVG9kbygndGVzdCcsICdkZXNjJywgJzIwMjQtMTAtMDQnLCAnbG93JywgWyd0ZXN0J10pKVxuXG4vLyBET01DdHJsLnJlbmRlclByb2plY3QocHJvamVjdCk7XG5cbi8vIHByb2plY3QuZm9yRWFjaCgodG9kbykgPT4ge1xuLy8gICAgIERPTUN0cmwuaW5zZXJ0RWxlbWVudChET01DdHJsLnJlbmRlclRvZG8odG9kbykpO1xuLy8gfSlcblxuXG4vLyBjb25zb2xlLmxvZyhzdG9yYWdlLmdldE9iamVjdChKU09OLnN0cmluZ2lmeShwcm9qZWN0MikpKTtcblxuLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdDIudGl0bGUpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=