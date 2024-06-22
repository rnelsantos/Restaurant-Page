/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \***************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/coffeeBG.jpg */ "./assets/coffeeBG.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*CSS RESET*/
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }


/*holy grail format*/
.wrapper {
    z-index: 0;
    display: grid;
    grid-template-columns:
      1fr
      min(65ch, 100%)
      1fr;
  }
  .wrapper > * {
    display: grid;
    grid-column: 2;
    grid-template-columns: 1fr min(5000px, calc(100% - 70px)) 1fr;
    
  }
  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }


/*  UTILITIES */
html,body 
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}

#content, .firstChild{
  padding-top:1rem;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width:100vw;
  gap:10px;
 overflow-x:
}


nav{
  padding-left:30px; 
  padding-right:30px;
  text-align: center;
  cursor: pointer;
  border-bottom: 3px solid rgb(19, 19, 19);

}

nav:hover{
  box-sizing:border-box;
  padding-left:30px; 
  padding-right:30px;
  text-align: center;
  border-bottom: 3px solid maroon;
}

.select{
  background-color: rgba(255, 0, 0, 0.418);
}



.switchFood{
  transition: transform 450ms;
  color:maroon;
  position:absolute;
  background-color:rgba(128, 0, 0, 0.815);
  height:100%;
  width:48%;
  top:1;
  left:0;
 
}

.switchDrink{
  color:maroon;
  position:absolute;
  background-color:rgba(128, 0, 0, 0.699);
  width:55%;
  top:1;
  transform:translate(50px);
  z-index: 0;

}

 .choose-container{
  background-color:rgba(54, 54, 54, 0.137);
 
  position:relative;
  z-index:1;
  display:flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif; 
  user-select: none;
  font-weight: 700; 
  width:7rem;
  color:gray;
 }
 
 .option{
  z-index: 0;
  color:gray;
 }

 .chosenMenu{
  color:white;
 }

 .menuContainer{
  border:2px solid red;
 }





/* HOME */
  header {
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
    background-color: rgb(19, 19, 19);
    font-family:Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    width:100%;
  }

  nav{
    text-align: center;
    min-width: 100px;
    flex-basis: auto;
    flex-shrink: 1;
  }

  main{
    width: 100%;
    height: auto;
    min-height:100vh;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position:center;
    background-attachment:fixed;
  }


  #LogoName{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 3rem;
    color:rgb(255, 255, 255);
    height:90vh;
    gap:20px;
  
  }

  .titleText{
    text-shadow: 3px 5px 2px #290909d7, 6px 5px 12px rgb(0, 0, 0);
  }

  .logo{
    height: 350px;
    width: 350px;
    shadow:3px 5px 2px #290909d7, 6px 5px 12px rgb(0, 0, 0);
  }

  @media only screen and (max-width: 650px) { /*   small screen remove naav bar              */
    .input-form{
        display:flex;
        flex-direction: column;
       
        gap:5px;
        width:100%;
      }

      #datePicker{
        align:Center;
        display:flex;
        flex-direction:column ;
        justify-content: space-around;
        gap:10px;
        align-items: center;
      }

      #LogoName{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 1.5rem;
        color:rgb(255, 255, 255);
        height:100vh;
        gap:20px;
        text-align:center;
      }
      .logo{
        height: 200px;
        width: 200px;
        shadow:3px 5px 2px #290909d7, 6px 5px 12px rgb(0, 0, 0);
      }

      nav{
       font-size: 1rem;
      }

}

/*Menu*/
.foodMenu{
  display:grid;
  width:90%;
  grid-template-columns:repeat(auto-fit, minmax(300px,2fr));
  grid-auto-rows: repeat( 1fr);
  justify-content: center;
  align-items: center;
  gap:20px;
  max-width:1200px;
  justify-items:stretch;
}

.drinksMenu{
  display:grid;
  width:90%;
  grid-template-columns:repeat(auto-fit, minmax(300px,2fr));
  grid-auto-rows: repeat( 1fr);
  justify-content: center;
  align-items: center;
  gap:20px;
  max-width:1200px;
  justify-items:stretch;
}

.hide{
  display:none;
}


/*About*/
.aboutContainer{
  border:2px solid rgba(66, 66, 66, 0.459);
  height:80vh;
  width:500px;
  background-color: rgba(0, 0, 0, 0.637);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:3rem;
  font-family:Arial, Helvetica, sans-serif;
}




`, "",{"version":3,"sources":["webpack://./styles/main.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;IACI,sBAAsB;EACxB;EACA;IACE,SAAS;EACX;EACA;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;IACE,cAAc;IACd,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,kBAAkB;EACpB;;;AAGF,oBAAoB;AACpB;IACI,UAAU;IACV,aAAa;IACb;;;SAGK;EACP;EACA;IACE,aAAa;IACb,cAAc;IACd,6DAA6D;;EAE/D;EACA;IACE,WAAW;IACX,mBAAmB;EACrB;;;AAGF,eAAe;AACf;;IAEI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;EACX,QAAQ;CACT;AACD;;;AAGA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,wCAAwC;;AAE1C;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,wCAAwC;AAC1C;;;;AAIA;EACE,2BAA2B;EAC3B,YAAY;EACZ,iBAAiB;EACjB,uCAAuC;EACvC,WAAW;EACX,SAAS;EACT,KAAK;EACL,MAAM;;AAER;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,uCAAuC;EACvC,SAAS;EACT,KAAK;EACL,yBAAyB;EACzB,UAAU;;AAEZ;;CAEC;EACC,wCAAwC;;EAExC,iBAAiB;EACjB,SAAS;EACT,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;EACd,yCAAyC;EACzC,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;EACV,UAAU;CACX;;CAEA;EACC,UAAU;EACV,UAAU;CACX;;CAEA;EACC,WAAW;CACZ;;CAEA;EACC,oBAAoB;CACrB;;;;;;AAMD,SAAS;EACP;IACE,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,iCAAiC;IACjC,wCAAwC;IACxC,iBAAiB;IACjB,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,yDAA+C;IAC/C,sBAAsB;IACtB,0BAA0B;IAC1B,2BAA2B;EAC7B;;;EAGA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,qEAAqE;IACrE,eAAe;IACf,wBAAwB;IACxB,WAAW;IACX,QAAQ;;EAEV;;EAEA;IACE,6DAA6D;EAC/D;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,uDAAuD;EACzD;;EAEA,4CAA4C,gDAAgD;IAC1F;QACI,YAAY;QACZ,sBAAsB;;QAEtB,OAAO;QACP,UAAU;MACZ;;MAEA;QACE,YAAY;QACZ,YAAY;QACZ,sBAAsB;QACtB,6BAA6B;QAC7B,QAAQ;QACR,mBAAmB;MACrB;;MAEA;QACE,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;QACvB,qEAAqE;QACrE,iBAAiB;QACjB,wBAAwB;QACxB,YAAY;QACZ,QAAQ;QACR,iBAAiB;MACnB;MACA;QACE,aAAa;QACb,YAAY;QACZ,uDAAuD;MACzD;;MAEA;OACC,eAAe;MAChB;;AAEN;;AAEA,OAAO;AACP;EACE,YAAY;EACZ,SAAS;EACT,yDAAyD;EACzD,4BAA4B;EAC5B,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,yDAAyD;EACzD,4BAA4B;EAC5B,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;;AAGA,QAAQ;AACR;EACE,wCAAwC;EACxC,WAAW;EACX,WAAW;EACX,sCAAsC;EACtC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,wCAAwC;AAC1C","sourcesContent":["/*CSS RESET*/\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n\n/*holy grail format*/\n.wrapper {\n    z-index: 0;\n    display: grid;\n    grid-template-columns:\n      1fr\n      min(65ch, 100%)\n      1fr;\n  }\n  .wrapper > * {\n    display: grid;\n    grid-column: 2;\n    grid-template-columns: 1fr min(5000px, calc(100% - 70px)) 1fr;\n    \n  }\n  .full-bleed {\n    width: 100%;\n    grid-column: 1 / -1;\n  }\n\n\n/*  UTILITIES */\nhtml,body \n{\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden; \n}\n\n#content, .firstChild{\n  padding-top:1rem;\n  color:white;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction:column;\n  width:100vw;\n  gap:10px;\n overflow-x:\n}\n\n\nnav{\n  padding-left:30px; \n  padding-right:30px;\n  text-align: center;\n  cursor: pointer;\n  border-bottom: 3px solid rgb(19, 19, 19);\n\n}\n\nnav:hover{\n  box-sizing:border-box;\n  padding-left:30px; \n  padding-right:30px;\n  text-align: center;\n  border-bottom: 3px solid maroon;\n}\n\n.select{\n  background-color: rgba(255, 0, 0, 0.418);\n}\n\n\n\n.switchFood{\n  transition: transform 450ms;\n  color:maroon;\n  position:absolute;\n  background-color:rgba(128, 0, 0, 0.815);\n  height:100%;\n  width:48%;\n  top:1;\n  left:0;\n \n}\n\n.switchDrink{\n  color:maroon;\n  position:absolute;\n  background-color:rgba(128, 0, 0, 0.699);\n  width:55%;\n  top:1;\n  transform:translate(50px);\n  z-index: 0;\n\n}\n\n .choose-container{\n  background-color:rgba(54, 54, 54, 0.137);\n \n  position:relative;\n  z-index:1;\n  display:flex;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1em;\n  font-family: Arial, Helvetica, sans-serif; \n  user-select: none;\n  font-weight: 700; \n  width:7rem;\n  color:gray;\n }\n \n .option{\n  z-index: 0;\n  color:gray;\n }\n\n .chosenMenu{\n  color:white;\n }\n\n .menuContainer{\n  border:2px solid red;\n }\n\n\n\n\n\n/* HOME */\n  header {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    color:white;\n    background-color: rgb(19, 19, 19);\n    font-family:Arial, Helvetica, sans-serif;\n    font-size: 1.5rem;\n    width:100%;\n  }\n\n  nav{\n    text-align: center;\n    min-width: 100px;\n    flex-basis: auto;\n    flex-shrink: 1;\n  }\n\n  main{\n    width: 100%;\n    height: auto;\n    min-height:100vh;\n    background-image: url('../assets/coffeeBG.jpg');\n    background-size: cover;\n    background-position:center;\n    background-attachment:fixed;\n  }\n\n\n  #LogoName{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 3rem;\n    color:rgb(255, 255, 255);\n    height:90vh;\n    gap:20px;\n  \n  }\n\n  .titleText{\n    text-shadow: 3px 5px 2px #290909d7, 6px 5px 12px rgb(0, 0, 0);\n  }\n\n  .logo{\n    height: 350px;\n    width: 350px;\n    shadow:3px 5px 2px #290909d7, 6px 5px 12px rgb(0, 0, 0);\n  }\n\n  @media only screen and (max-width: 650px) { /*   small screen remove naav bar              */\n    .input-form{\n        display:flex;\n        flex-direction: column;\n       \n        gap:5px;\n        width:100%;\n      }\n\n      #datePicker{\n        align:Center;\n        display:flex;\n        flex-direction:column ;\n        justify-content: space-around;\n        gap:10px;\n        align-items: center;\n      }\n\n      #LogoName{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n        font-size: 1.5rem;\n        color:rgb(255, 255, 255);\n        height:100vh;\n        gap:20px;\n        text-align:center;\n      }\n      .logo{\n        height: 200px;\n        width: 200px;\n        shadow:3px 5px 2px #290909d7, 6px 5px 12px rgb(0, 0, 0);\n      }\n\n      nav{\n       font-size: 1rem;\n      }\n\n}\n\n/*Menu*/\n.foodMenu{\n  display:grid;\n  width:90%;\n  grid-template-columns:repeat(auto-fit, minmax(300px,2fr));\n  grid-auto-rows: repeat( 1fr);\n  justify-content: center;\n  align-items: center;\n  gap:20px;\n  max-width:1200px;\n  justify-items:stretch;\n}\n\n.drinksMenu{\n  display:grid;\n  width:90%;\n  grid-template-columns:repeat(auto-fit, minmax(300px,2fr));\n  grid-auto-rows: repeat( 1fr);\n  justify-content: center;\n  align-items: center;\n  gap:20px;\n  max-width:1200px;\n  justify-items:stretch;\n}\n\n.hide{\n  display:none;\n}\n\n\n/*About*/\n.aboutContainer{\n  border:2px solid rgba(66, 66, 66, 0.459);\n  height:80vh;\n  width:500px;\n  background-color: rgba(0, 0, 0, 0.637);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap:3rem;\n  font-family:Arial, Helvetica, sans-serif;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAbout: () => (/* binding */ loadAbout)
/* harmony export */ });



function loadAbout() {

    const content = document.querySelector ('#content');
    const main = document.querySelector('main');
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add('firstChild');
    aboutContainer.classList.add('aboutContainer');
    content.appendChild(aboutContainer);

    //load branch 1 content
    const aboutTitle = document.createElement('h2')
    aboutTitle.innerText = "PISCES COFFEE HUB BRANCHES";
    aboutContainer.appendChild(aboutTitle);

    const branchDiv1= document.createElement('div')
    const branch1 = document.createElement('p')
    const branch2 = document.createElement('p')
    const branch3 = document.createElement('p')
    const branch4 = document.createElement('p')
    const branch5 = document.createElement('p');
    branch1.innerText = "PISCES COFFEE HUB SAN CARLOS (MAIN)"
    branch2.innerText = "📍𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: 𝗕𝗮𝗿𝗮𝗻𝗴𝗮𝘆 𝗜𝗹𝗮𝗻𝗴, 𝗦𝗮𝗻 𝗖𝗮𝗿𝗹𝗼𝘀 𝗖𝗶𝘁𝘆, 𝗣𝗮𝗻𝗴𝗮𝘀𝗶𝗻𝗮𝗻"
    branch3.innerText = "🕗 ꜱᴛᴏʀᴇ ʜᴏᴜʀꜱ: 9ᴀᴍ ᴛᴏ 9ᴘᴍ ᴅᴀɪʟʏ"
    branch4.innerText = "📱𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐍𝐮𝐦𝐛𝐞𝐫: 𝟎𝟗𝟒𝟓𝟖𝟑𝟗𝟑𝟕𝟗𝟒"
    branch5.innerText = "📞 ᴛᴇʟᴇᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ:637-4692"
    branchDiv1.appendChild(branch1);
    branchDiv1.appendChild(branch2);
    branchDiv1.appendChild(branch3);
    branchDiv1.appendChild(branch4);
    branchDiv1.appendChild(branch5);
    aboutContainer.appendChild(branchDiv1);

     //load branch 1 content
     const branchDiv2= document.createElement('div')
     const branch6 = document.createElement('p')
     const branch7 = document.createElement('p')
     const branch8 = document.createElement('p')
     const branch9 = document.createElement('p')
     branch6.innerText = "PISCES COFFEE HUB MANGATAREM"
     branch7.innerText = "𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: ʀᴏʏᴀʟ ᴘᴀʟᴍ ᴄᴇɴᴛᴇʀ, ᴘᴏɢᴏɴʟᴏᴍʙᴏʏ ᴍᴀɴɢᴀᴛᴀʀᴇᴍ"
     branch8.innerText = "🕗 ꜱᴛᴏʀᴇ ʜᴏᴜʀꜱ: 9ᴀᴍ ᴛᴏ 9ᴘᴍ ᴅᴀɪʟʏ"
     branch9.innerText = "📱𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐍𝐮𝐦𝐛𝐞𝐫: 𝟬𝟵𝟯𝟭𝟴𝟲𝟮𝟵𝟱𝟲𝟯"
     branchDiv2.appendChild(branch6);
     branchDiv2.appendChild(branch7);
     branchDiv2.appendChild(branch8);
     branchDiv2.appendChild(branch9);
     aboutContainer.appendChild(branchDiv2);
    








    //remove previous tab highlight
    const selected = document.querySelector('.select');
    if (selected!=null){ selected.classList.remove("select"); console.log(selected);};
    //Highlight current page tab
    const menu = document.querySelector('#about');
    about.classList.add('select');
    }


    


    

    

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ "./assets/logo.png");



function loadHome() {
    //Create logo and title container div
    const content = document.querySelector ('#content');
    const main = document.querySelector('main');
    const logoContainer = document.createElement("div");
    logoContainer.classList.add('full-bleed');
    logoContainer.classList.add('firstChild');
    logoContainer.id = "LogoName";
    content.appendChild(logoContainer);
    
    // Add the image to our existing div.
    const myLogo = new Image();
    myLogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    myLogo.classList.add('logo');
    logoContainer.appendChild(myLogo);
    
    // Add title text
    const piscesTitle = document.createElement('h1');
    piscesTitle.innerText ='Pisces Coffee Hub';
    piscesTitle.classList.add('titleText');
    logoContainer.appendChild(piscesTitle);
    
    //remove previous tab highlight
    const selected = document.querySelector('.select');
    if (selected!=null){ selected.classList.remove("select"); console.log(selected);};
    //Highlight current page tab
    const home = document.querySelector('#home');
    home.classList.add('select');


    
    }


    function toggleCont(){
        //for food/drink toggle switch
        const chooseOption = document.querySelectorAll(".option");
        const slide = document.querySelector(".switchFood");
        
        
        chooseOption.forEach((opt) =>
        opt.addEventListener("click", (e) => {
          chooseOption.forEach((opt) =>  {opt.classList.remove('chosenMenu');} );
          let option= e.target.dataset.index;
          console.log(String(option));
           
          if (String(option) === "Drinks" ){
            slide.classList.add('switchDrink');
            opt.classList.add('chosenMenu');
          }
          else {
            slide.classList.remove('switchDrink');
            opt.classList.add('chosenMenu');
          };
        
        })
        );
        
        };

    

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _assets_food_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/food/1.png */ "./assets/food/1.png");
/* harmony import */ var _assets_food_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/food/2.png */ "./assets/food/2.png");
/* harmony import */ var _assets_food_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/food/3.png */ "./assets/food/3.png");
/* harmony import */ var _assets_food_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/food/4.png */ "./assets/food/4.png");
/* harmony import */ var _assets_food_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/food/5.png */ "./assets/food/5.png");
/* harmony import */ var _assets_food_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/food/6.png */ "./assets/food/6.png");
/* harmony import */ var _assets_food_7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/food/7.png */ "./assets/food/7.png");
/* harmony import */ var _assets_drinks_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/drinks/1.png */ "./assets/drinks/1.png");
/* harmony import */ var _assets_drinks_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/drinks/2.png */ "./assets/drinks/2.png");
/* harmony import */ var _assets_drinks_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/drinks/3.png */ "./assets/drinks/3.png");
/* harmony import */ var _assets_drinks_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/drinks/4.png */ "./assets/drinks/4.png");
/* harmony import */ var _assets_drinks_5_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/drinks/5.png */ "./assets/drinks/5.png");
/* harmony import */ var _assets_drinks_6_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/drinks/6.png */ "./assets/drinks/6.png");
/* harmony import */ var _assets_drinks_7_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/drinks/7.png */ "./assets/drinks/7.png");
/* harmony import */ var _assets_drinks_8_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/drinks/8.png */ "./assets/drinks/8.png");
/* harmony import */ var _assets_drinks_9_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/drinks/9.png */ "./assets/drinks/9.png");
/* harmony import */ var _assets_drinks_10_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/drinks/10.png */ "./assets/drinks/10.png");
/* harmony import */ var _assets_drinks_11_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/drinks/11.png */ "./assets/drinks/11.png");
/* harmony import */ var _assets_drinks_12_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/drinks/12.png */ "./assets/drinks/12.png");
/* harmony import */ var _assets_drinks_13_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/drinks/13.png */ "./assets/drinks/13.png");
/* harmony import */ var _assets_drinks_14_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/drinks/14.png */ "./assets/drinks/14.png");
/* harmony import */ var _assets_drinks_15_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/drinks/15.png */ "./assets/drinks/15.png");
//import food menu images









//import drink menu iamges

















let foodArray =[_assets_food_1_png__WEBPACK_IMPORTED_MODULE_0__, _assets_food_2_png__WEBPACK_IMPORTED_MODULE_1__, _assets_food_3_png__WEBPACK_IMPORTED_MODULE_2__, _assets_food_4_png__WEBPACK_IMPORTED_MODULE_3__, _assets_food_5_png__WEBPACK_IMPORTED_MODULE_4__, _assets_food_6_png__WEBPACK_IMPORTED_MODULE_5__, _assets_food_7_png__WEBPACK_IMPORTED_MODULE_6__];
let drinksArray = [
    _assets_drinks_1_png__WEBPACK_IMPORTED_MODULE_7__,
    _assets_drinks_2_png__WEBPACK_IMPORTED_MODULE_8__, 
    _assets_drinks_3_png__WEBPACK_IMPORTED_MODULE_9__, 
    _assets_drinks_4_png__WEBPACK_IMPORTED_MODULE_10__,
    _assets_drinks_5_png__WEBPACK_IMPORTED_MODULE_11__,
    _assets_drinks_6_png__WEBPACK_IMPORTED_MODULE_12__,
    _assets_drinks_7_png__WEBPACK_IMPORTED_MODULE_13__,
    _assets_drinks_8_png__WEBPACK_IMPORTED_MODULE_14__,
    _assets_drinks_9_png__WEBPACK_IMPORTED_MODULE_15__,
    _assets_drinks_10_png__WEBPACK_IMPORTED_MODULE_16__,
    _assets_drinks_11_png__WEBPACK_IMPORTED_MODULE_17__,
    _assets_drinks_12_png__WEBPACK_IMPORTED_MODULE_18__,
    _assets_drinks_13_png__WEBPACK_IMPORTED_MODULE_19__,
    _assets_drinks_14_png__WEBPACK_IMPORTED_MODULE_20__,
    _assets_drinks_15_png__WEBPACK_IMPORTED_MODULE_21__,
];

function loadMenu() {

//attach menu container to content
const content = document.querySelector ('#content');
const main = document.querySelector('main');
const menuContainer = document.createElement("div");
menuContainer.classList.add('firstChild');
content.appendChild(menuContainer);

//append menuoption toggle
const chooseContainer = document.createElement("div");
chooseContainer.classList.add("choose-container");
        const switchMenu = document.createElement("div");
        switchMenu.classList.add("switchFood");
        const food = document.createElement("div");
        food.classList.add("option");
        food.classList.add("chosenMenu");
        food.innerText = "Food"
        food.setAttribute("data-index", "Food");
        const drinks = document.createElement("div");
        drinks.classList.add("option");
        drinks.innerText = "Drinks";
        drinks.setAttribute("data-index", "Drinks");
    chooseContainer.appendChild(switchMenu);
    chooseContainer.appendChild(food);
    chooseContainer.appendChild(drinks);
    menuContainer.appendChild(chooseContainer);

//remove previous tab highlight
const selected = document.querySelector('.select');
if (selected!=null){ selected.classList.remove("select"); console.log(selected);};   
//Highlight current page tab
const menu = document.querySelector('#menu');
menu.classList.add('select');



function appendMenu(menuURL) {
    const menuIMG = new Image();
    menuIMG.src = menuURL;
    foodMenu.appendChild(menuIMG);
};




//Load foodMenu images at food folder
const foodMenu = document.createElement("div");
foodMenu.classList.add('foodMenu');

foodArray.forEach(function(menuURL) {
    const menuIMG = new Image();
    menuIMG.src = menuURL;
    foodMenu.appendChild(menuIMG);
});


//Load drinksMenu images at food folder
const drinksMenu = document.createElement("div");
drinksMenu.classList.add('drinksMenu');
drinksMenu.classList.add('hide');

drinksArray.forEach(function(menuURL) {
    const menuIMG = new Image();
    menuIMG.src = menuURL;
    drinksMenu.appendChild(menuIMG);
});




menuContainer.appendChild(foodMenu);
menuContainer.appendChild(drinksMenu);


};



            
    
    
    
    
   

/***/ }),

/***/ "./assets/coffeeBG.jpg":
/*!*****************************!*\
  !*** ./assets/coffeeBG.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "917e7bef3fcbc7de1719.jpg";

/***/ }),

/***/ "./assets/drinks/1.png":
/*!*****************************!*\
  !*** ./assets/drinks/1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75e940985c59d4885995.png";

/***/ }),

/***/ "./assets/drinks/10.png":
/*!******************************!*\
  !*** ./assets/drinks/10.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "080785111d368b28672a.png";

/***/ }),

/***/ "./assets/drinks/11.png":
/*!******************************!*\
  !*** ./assets/drinks/11.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e04285b84e6c6c83b311.png";

/***/ }),

/***/ "./assets/drinks/12.png":
/*!******************************!*\
  !*** ./assets/drinks/12.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70eee8c57124f30f7942.png";

/***/ }),

/***/ "./assets/drinks/13.png":
/*!******************************!*\
  !*** ./assets/drinks/13.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6101be74dd21f2109962.png";

/***/ }),

/***/ "./assets/drinks/14.png":
/*!******************************!*\
  !*** ./assets/drinks/14.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b068a9ced724f09993f4.png";

/***/ }),

/***/ "./assets/drinks/15.png":
/*!******************************!*\
  !*** ./assets/drinks/15.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0098d519cc3e85900da4.png";

/***/ }),

/***/ "./assets/drinks/2.png":
/*!*****************************!*\
  !*** ./assets/drinks/2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf77e152942143ef4e48.png";

/***/ }),

/***/ "./assets/drinks/3.png":
/*!*****************************!*\
  !*** ./assets/drinks/3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4997bf35fc5ad39ea1b.png";

/***/ }),

/***/ "./assets/drinks/4.png":
/*!*****************************!*\
  !*** ./assets/drinks/4.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92d66792a7817c7b4ab2.png";

/***/ }),

/***/ "./assets/drinks/5.png":
/*!*****************************!*\
  !*** ./assets/drinks/5.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e61f8f8472ae90795457.png";

/***/ }),

/***/ "./assets/drinks/6.png":
/*!*****************************!*\
  !*** ./assets/drinks/6.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43262130d0de9f2110e6.png";

/***/ }),

/***/ "./assets/drinks/7.png":
/*!*****************************!*\
  !*** ./assets/drinks/7.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cab7ebdf3749bef22423.png";

/***/ }),

/***/ "./assets/drinks/8.png":
/*!*****************************!*\
  !*** ./assets/drinks/8.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "079d1b9a16fb0a5672f6.png";

/***/ }),

/***/ "./assets/drinks/9.png":
/*!*****************************!*\
  !*** ./assets/drinks/9.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c06ae593656556c6f763.png";

/***/ }),

/***/ "./assets/food/1.png":
/*!***************************!*\
  !*** ./assets/food/1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd4320a54ad192aece99.png";

/***/ }),

/***/ "./assets/food/2.png":
/*!***************************!*\
  !*** ./assets/food/2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02ed9e447f386b66bb37.png";

/***/ }),

/***/ "./assets/food/3.png":
/*!***************************!*\
  !*** ./assets/food/3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2a3cb9a15b7b272e948.png";

/***/ }),

/***/ "./assets/food/4.png":
/*!***************************!*\
  !*** ./assets/food/4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9521ee22afda37aaa03e.png";

/***/ }),

/***/ "./assets/food/5.png":
/*!***************************!*\
  !*** ./assets/food/5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58247f54d507f880145b.png";

/***/ }),

/***/ "./assets/food/6.png":
/*!***************************!*\
  !*** ./assets/food/6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "303dbbe9a4714542666e.png";

/***/ }),

/***/ "./assets/food/7.png":
/*!***************************!*\
  !*** ./assets/food/7.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b9b193a88a9de01238b.png";

/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5e142d95a6d4dedc022.png";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
 







(0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)(); 



//event listener for tab pages
const allNavTabs = document.querySelectorAll("nav");
allNavTabs.forEach((nav) =>
nav.addEventListener("click", (e) => {
 let currentTab = String(e.target.id);
  console.log(e.target.id);

  switch (currentTab.toLowerCase()) {  
    case "home":
        page.resetDisplay();
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
      break;
      case "menu":
        page.resetDisplay();
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();
        page.toggleControl();

      break;
      case "about":
        page.resetDisplay();
        (0,_about__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();
      break;
      default:
        //
  };
})
);

function loadToggle(){
//for food/drink toggle switch
const chooseOption = document.querySelectorAll(".option");
const slide = document.querySelector(".switchFood");


chooseOption.forEach((opt) =>
opt.addEventListener("click", (e) => {
  chooseOption.forEach((opt) =>  {opt.classList.remove('chosenMenu');} );
  let option= e.target.dataset.index;
  console.log(String(option));
   
  if (String(option) === "Drinks" ){
    slide.classList.add('switchDrink');
    opt.classList.add('chosenMenu');
  }
  else {
    slide.classList.remove('switchDrink');
    opt.classList.add('chosenMenu');
  };

})
);

};

const page = (function () {
  const content = document.querySelector("#content");
  const firstChild= document.querySelector(".firstChild")  // apprently this only get read  once.

  
  
  const resetDisplay = () => {if( document.querySelector(".firstChild") != null){content.removeChild(document.querySelector(".firstChild"))}}
  
  const toggleFood = () => {
    const foodMenu = document.querySelector(".foodMenu");
    const drinksMenu = document.querySelector(".drinksMenu");
    foodMenu.classList.remove('hide')
    drinksMenu.classList.add('hide')
  }

  const toggleDrinks = () => {
    const foodMenu = document.querySelector(".foodMenu");
    const drinksMenu = document.querySelector(".drinksMenu");
    foodMenu.classList.add('hide')
    drinksMenu.classList.remove('hide')
  }


  const toggleControl = () => {
    const chooseOption = document.querySelectorAll(".option");
    const slide = document.querySelector(".switchFood");
    chooseOption.forEach((opt) =>
      opt.addEventListener("click", (e) => {
        chooseOption.forEach((opt) =>  {opt.classList.remove('chosenMenu');} );
        let option= e.target.dataset.index;
        console.log(String(option));
          if (String(option) === "Drinks" ){
            slide.classList.add('switchDrink');
            opt.classList.add('chosenMenu')
            page.toggleDrinks()};
          if(String(option) === "Food"){
            slide.classList.remove('switchDrink');
            opt.classList.add('chosenMenu')
            page.toggleFood(); };
                
      })
      );
  }

  return {resetDisplay,toggleControl,toggleFood,toggleDrinks }
  
  }
  )();




/*
  function loadToggle(){
    //for food/drink toggle switch
    const chooseOption = document.querySelectorAll(".option");
    const slide = document.querySelector(".switchFood");
    
    
    chooseOption.forEach((opt) =>
    opt.addEventListener("click", (e) => {
      chooseOption.forEach((opt) =>  {opt.classList.remove('chosenMenu');} );
      let option= e.target.dataset.index;
      console.log(String(option));
       
      if (String(option) === "Drinks" ){
        slide.classList.add('switchDrink');
        opt.classList.add('chosenMenu');
      }
      else {
        slide.classList.remove('switchDrink');
        opt.classList.add('chosenMenu');
      };
    
    })
    );
    
    };

    */
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map