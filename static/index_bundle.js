/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/Components/BarComponent/BarComponent.hbs":
/*!**********************************************************!*\
  !*** ./src/App/Components/BarComponent/BarComponent.hbs ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"barClass") || (depth0 != null ? lookupProperty(depth0,"barClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"barClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":26}}}) : helper)))
    + " js-bar\">\r\n    <div class=\"bar w-100\">\r\n        <div class=\"bar__full\"></div>\r\n        <div class=\"bar__load\">\r\n            <div class=\"bar-load__progress\"></div>\r\n        </div>\r\n        <div class=\"bar__current\"></div>\r\n        <div id=\"bar__helper\"></div>\r\n        <div id=\"bar__current-circle\"></div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/RootComponent/RootComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"root js-root\">\r\n    <div class=\"header js-header\"></div>\r\n    <div class=\"content js-content\"></div>\r\n    <div class=\"footer js-footer\"></div>\r\n    <div class=\"right-modal js-right-modal\"></div>\r\n    <div class=\"modal modal--right js-modal--right\"></div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/ButtonComponent/ButtonComponent.hbs":
/*!****************************************************************!*\
  !*** ./src/App/Components/ButtonComponent/ButtonComponent.hbs ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":27},"end":{"line":2,"column":35}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " data-action=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dataAction") || (depth0 != null ? lookupProperty(depth0,"dataAction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dataAction","hash":{},"data":data,"loc":{"start":{"line":2,"column":237},"end":{"line":2,"column":252}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"js-button "
    + alias4(((helper = (helper = lookupProperty(helpers,"upperClass") || (depth0 != null ? lookupProperty(depth0,"upperClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"upperClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":38}}}) : helper)))
    + "\">\r\n    <button "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":44}}})) != null ? stack1 : "")
    + " class=\"gradient-button gradient-button--blue "
    + alias4(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":90},"end":{"line":2,"column":105}}}) : helper)))
    + " normal-text p-10\" style=\"--coord-y: 42.8px; --diameter-highlight: 264.308px;--coord-x: 70.3375px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dataAction") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":205},"end":{"line":2,"column":261}}})) != null ? stack1 : "")
    + ">\r\n        <div class=\"gradient-button__border js-gradient-button__border\"></div>\r\n        <span class=\"gradient-button__text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":4,"column":44},"end":{"line":4,"column":54}}}) : helper)))
    + "</span>\r\n    </button>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/DivComponent/DivComponent.hbs":
/*!**********************************************************!*\
  !*** ./src/App/Components/DivComponent/DivComponent.hbs ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":23}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":35}}}) : helper)))
    + "</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.hbs":
/*!********************************************************************************!*\
  !*** ./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.hbs ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " data-action=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dataAction") || (depth0 != null ? lookupProperty(depth0,"dataAction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dataAction","hash":{},"data":data,"loc":{"start":{"line":1,"column":66},"end":{"line":1,"column":82}}}) : helper)))
    + "\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dropdown js-dropdown\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dataAction") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":91}}})) != null ? stack1 : "")
    + ">\r\n    <a class=\"dropdown__button\">\r\n        <img class=\"dropdown-button__image\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"avatar") || (depth0 != null ? lookupProperty(depth0,"avatar") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"avatar","hash":{},"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":61}}}) : helper)))
    + "\">\r\n    </a>\r\n\r\n    <div class=\"dropdown__content js-dropdown__content\">\r\n        <div class=\"dropdown-content__container\">\r\n            <div class=\"dropdown-content-container__items js-dropdown-content-container__items\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/FormComponent/FormComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/FormComponent/FormComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return " enctype=\"multipart/form-data\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"formId") || (depth0 != null ? lookupProperty(depth0,"formId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"formId","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":22}}}) : helper)))
    + "\" class=\"form js-form\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"enctype") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":99}}})) != null ? stack1 : "")
    + ">\r\n    <div class=\"form__content js-form__content\"></div>\r\n\r\n    <div class=\"form__footer\"></div>\r\n</form>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/InputComponent/InputComponent.hbs":
/*!**************************************************************!*\
  !*** ./src/App/Components/InputComponent/InputComponent.hbs ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " accept=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"accept") || (depth0 != null ? lookupProperty(depth0,"accept") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"accept","hash":{},"data":data,"loc":{"start":{"line":2,"column":142},"end":{"line":2,"column":152}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"checkboxText") || (depth0 != null ? lookupProperty(depth0,"checkboxText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"checkboxText","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":44}}}) : helper)))
    + " ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"input-field js-input-field "
    + alias4(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\r\n    <input type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":17},"end":{"line":2,"column":27}}}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":41}}}) : helper)))
    + "\" placeholder=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":2,"column":56},"end":{"line":2,"column":73}}}) : helper)))
    + "\" class=\"input-field__input "
    + alias4(((helper = (helper = lookupProperty(helpers,"inputClass") || (depth0 != null ? lookupProperty(depth0,"inputClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"inputClass","hash":{},"data":data,"loc":{"start":{"line":2,"column":101},"end":{"line":2,"column":117}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"accept") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":119},"end":{"line":2,"column":161}}})) != null ? stack1 : "")
    + " />\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"checkboxText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":52}}})) != null ? stack1 : "")
    + "\r\n    <div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":13},"end":{"line":4,"column":21}}}) : helper)))
    + "-msg\" class=\"input-field__error-msg\"></div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/LinkComponent/LinkComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/LinkComponent/LinkComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":26}}}) : helper)))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"linkHref") || (depth0 != null ? lookupProperty(depth0,"linkHref") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"linkHref","hash":{},"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":73}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " data-action=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dataAction") || (depth0 != null ? lookupProperty(depth0,"dataAction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dataAction","hash":{},"data":data,"loc":{"start":{"line":1,"column":152},"end":{"line":1,"column":168}}}) : helper)))
    + "\" ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"link__image "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkImageClass") || (depth0 != null ? lookupProperty(depth0,"linkImageClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkImageClass","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":49}}}) : helper)))
    + "\">\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkImageSrc") || (depth0 != null ? lookupProperty(depth0,"linkImageSrc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkImageSrc","hash":{},"data":data,"loc":{"start":{"line":4,"column":18},"end":{"line":4,"column":36}}}) : helper)))
    + "\" width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkImageWidth") || (depth0 != null ? lookupProperty(depth0,"linkImageWidth") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkImageWidth","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":65}}}) : helper)))
    + "\">\r\n    </span>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <span class=\"link__text "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkTextClass") || (depth0 != null ? lookupProperty(depth0,"linkTextClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkTextClass","hash":{},"data":data,"loc":{"start":{"line":9,"column":32},"end":{"line":9,"column":51}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":9,"column":53},"end":{"line":9,"column":67}}}) : helper)))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":35}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"linkHref") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":82}}})) != null ? stack1 : "")
    + " class=\"link js-link "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"linkClass") || (depth0 != null ? lookupProperty(depth0,"linkClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"linkClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":103},"end":{"line":1,"column":118}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dataAction") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":120},"end":{"line":1,"column":177}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"linkImageSrc") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"linkText") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "</a>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/ListComponent/ListComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/ListComponent/ListComponent.hbs ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"list js-list "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"listClass") || (depth0 != null ? lookupProperty(depth0,"listClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"listClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":39}}}) : helper)))
    + "\"></ul>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.hbs":
/*!********************************************************************************!*\
  !*** ./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.hbs ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vertical-spacer js-vertical-spacer vertical-spacer-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"size") || (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"size","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":73}}}) : helper)))
    + "\"></div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/VideoComponent/VideoComponent.hbs":
/*!**************************************************************!*\
  !*** ./src/App/Components/VideoComponent/VideoComponent.hbs ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":19}}}) : helper)))
    + "\">\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":23}}}) : helper)))
    + "\" alt=\"\">\r\n</a>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/CarouselView/CarouselView.hbs":
/*!*****************************************************!*\
  !*** ./src/App/Views/CarouselView/CarouselView.hbs ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"carousel js-carousel\">\r\n    <button class=\"carousel__chevron-left\">\r\n        <img src=\"/img/icons/chevron-left.svg\">\r\n    </button>\r\n\r\n<!--    <ul class=\"carousel__list\"></ul>-->\r\n\r\n    <button class=\"carousel__chevron-right\">\r\n        <img src=\"img/icons/chevron-right.svg\">\r\n    </button>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/FilmView/FilmView.hbs":
/*!*********************************************!*\
  !*** ./src/App/Views/FilmView/FilmView.hbs ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"film__background\">\r\n        <img class=\"film-background__image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"previewURL") || (depth0 != null ? lookupProperty(depth0,"previewURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":49},"end":{"line":4,"column":65}}}) : helper)))
    + "\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"film__content\">\r\n        <div class=\"film__content-container\">\r\n            <div class=\"film-content__title\">\r\n                <h1 class=\"film-content-title__text\">\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":11,"column":31}}}) : helper)))
    + "\r\n                </h1>\r\n            </div>\r\n\r\n            <div class=\"film-content__info-container\">\r\n                <div class=\"film-content__info\">\r\n                    <div class=\"film-content__rating\">\r\n                        <span class=\"film-content-rating__text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":18,"column":64},"end":{"line":18,"column":76}}}) : helper)))
    + "</span>\r\n                    </div>\r\n                    <span class=\"film-content__year\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":20,"column":53},"end":{"line":20,"column":63}}}) : helper)))
    + "</span>\r\n                    <span class=\"film-content__type\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":21,"column":53},"end":{"line":21,"column":63}}}) : helper)))
    + "</span>\r\n                    <span class=\"film-content__country\"></span>\r\n                    <span class=\"film-content__age-limit\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ageLimit") || (depth0 != null ? lookupProperty(depth0,"ageLimit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ageLimit","hash":{},"data":data,"loc":{"start":{"line":23,"column":58},"end":{"line":23,"column":72}}}) : helper)))
    + "+</span>\r\n                </div>\r\n                <p class=\"film-content__description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":25,"column":53},"end":{"line":25,"column":70}}}) : helper)))
    + "</p>\r\n            </div>\r\n\r\n            <div class=\"film-content__authors\">\r\n                <div class=\"film-content-authors__director\">\r\n                    <div class=\"film-content-authors-director__text\">Режиссёры:</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"directors") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":20},"end":{"line":33,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"film-content-authors__actors\">\r\n                    <div class=\"film-content-authors-actors__text\">Актёры:</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"actors") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":20},"end":{"line":39,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n\r\n            <div class=\"film-content__buttons\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a href=\"/persons/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":32,"column":38},"end":{"line":32,"column":46}}}) : helper)))
    + "\" class=\"film-content-authors-director__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":32,"column":92},"end":{"line":32,"column":102}}}) : helper)))
    + "</a>"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":106},"end":{"line":32,"column":136}}})) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return ", ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"/persons/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":38,"column":42},"end":{"line":38,"column":50}}}) : helper)))
    + "\" class=\"film-content-authors-actors__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":38,"column":94},"end":{"line":38,"column":104}}}) : helper)))
    + "</a>"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":108},"end":{"line":38,"column":138}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"film\">\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":48,"column":13}}})) != null ? stack1 : "")
    + "</article>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header-container js-header-container\">\r\n    <div class=\"header-container__left js-header-container__left\"></div>\r\n\r\n    <div class=\"header-container__right js-header-container__right\">\r\n        <div class=\"user-profile js-user-profile\"></div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/MainView/MainView.hbs":
/*!*********************************************!*\
  !*** ./src/App/Views/MainView/MainView.hbs ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <article class=\"category\">\r\n\r\n            <a class=\"category__link\">\r\n                <div class=\"category__block\">\r\n                    <h2 class=\"category__name\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":58}}}) : helper)))
    + "</h2>\r\n                    <img src=\"/img/icons/chevron-right.svg\" alt=\"\" class=\"icon-right\">\r\n                </div>\r\n            </a>\r\n\r\n            <div class=\"category__container\">\r\n                <div class=\"category__container__list\">\r\n                    <ul class=\"category__container__items\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":22,"column":33}}})) != null ? stack1 : "")
    + "\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"category__container__buttons\">\r\n                    <button class=\"category__container__button-left\">\r\n                        <img src=\"/img/icons/chevron-left.svg\" alt=\"\" class=\"icon-left\">\r\n                    </button>\r\n                    <button class=\"category__container__button-right\">\r\n                        <img src=\"/img/icons/chevron-right.svg\" alt=\"\" class=\"icon-right\">\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </article>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li class=\"category__container__item\">\r\n                                <a href=\"/films/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":48},"end":{"line":18,"column":56}}}) : helper)))
    + "\" class=\"category__container__item-link\">\r\n                                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"previewURL") || (depth0 != null ? lookupProperty(depth0,"previewURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previewURL","hash":{},"data":data,"loc":{"start":{"line":19,"column":46},"end":{"line":19,"column":62}}}) : helper)))
    + "\" alt=\"\" class=\"category__container__item-image\">\r\n                                </a>\r\n                            </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"categories\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"selections") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "</main>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightView.hbs":
/*!*********************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightView.hbs ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal__area js-modal__area\">\r\n    <div class=\"modal__close-btn-container\">\r\n        <div class=\"modal__close-btn\" aria-label=\"Close Modal\">\r\n            <img class=\"modal__close-btn-image\" src=\"/img/icons/close.svg\" alt=\"Close image\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal__content\">\r\n        <div class=\"modal__header-container\">\r\n            <div class=\"modal__header\">\r\n                <h2 class=\"modal__title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":41},"end":{"line":10,"column":52}}}) : helper)))
    + "</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal__body-container\">\r\n            <div class=\"modal__body js-modal__body\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/NotFoundView/NotFoundView.hbs":
/*!*****************************************************!*\
  !*** ./src/App/Views/NotFoundView/NotFoundView.hbs ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"space\">\r\n    <div class=\"space__stars\">\r\n        <div class=\"space__error js-space__error\">\r\n            <img class=\"image-404\" src=\"/img/notfound/404.svg\">\r\n        </div>\r\n\r\n        <div class=\"space__objects\">\r\n            <img class=\"space-object__rocket\" src=\"/img/notfound/rocket.svg\">\r\n\r\n            <div>\r\n                <img class=\"space-object__earth\" src=\"/img/notfound/earth.svg\">\r\n                <img class=\"space-object__moon\" src=\"/img/notfound/moon.svg\">\r\n            </div>\r\n\r\n            <div class=\"space__astronaut-container\">\r\n                <img class=\"space-object__astronaut\" src=\"/img/notfound/astronaut.svg\">\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <div class=\"space__star\"></div>\r\n            <div class=\"space__star\"></div>\r\n            <div class=\"space__star\"></div>\r\n            <div class=\"space__star\"></div>\r\n            <div class=\"space__star\"></div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/PersonView/PersonView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/PersonView/PersonView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"person-table__row person-table__row--medium\">\r\n                                    <div class=\"person-table-row__title\">Возраст</div>\r\n                                    <div class=\"person-table-row__info\">\r\n                                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"age") || (depth0 != null ? lookupProperty(depth0,"age") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"age","hash":{},"data":data,"loc":{"start":{"line":33,"column":40},"end":{"line":33,"column":49}}}) : helper)))
    + "\r\n                                    </div>\r\n                                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Рост</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"growth") || (depth0 != null ? lookupProperty(depth0,"growth") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"growth","hash":{},"data":data,"loc":{"start":{"line":42,"column":36},"end":{"line":42,"column":48}}}) : helper)))
    + "\r\n                                </div>\r\n                            </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Пол</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"gender") || (depth0 != null ? lookupProperty(depth0,"gender") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gender","hash":{},"data":data,"loc":{"start":{"line":51,"column":36},"end":{"line":51,"column":48}}}) : helper)))
    + "\r\n                                </div>\r\n                            </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Место рождения</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"birthPlace") || (depth0 != null ? lookupProperty(depth0,"birthPlace") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"birthPlace","hash":{},"data":data,"loc":{"start":{"line":60,"column":36},"end":{"line":60,"column":52}}}) : helper)))
    + "\r\n                                </div>\r\n                            </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = (lookupProperty(helpers,"stringItems")||(depth0 && lookupProperty(depth0,"stringItems"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"genres") : depth0),"name",{"name":"stringItems","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":49},"end":{"line":69,"column":95}}})) != null ? stack1 : "")
    + " ";
},"10":function(container,depth0,helpers,partials,data) {
    return "";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":71,"column":40},"end":{"line":71,"column":50}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":50},"end":{"line":71,"column":80}}})) != null ? stack1 : "")
    + "\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return ", ";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":80,"column":40},"end":{"line":80,"column":51}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":51},"end":{"line":80,"column":81}}})) != null ? stack1 : "")
    + "\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <li class=\"person-panel-films-item\">\r\n                                        <a href=\"/films/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":93,"column":56},"end":{"line":93,"column":64}}}) : helper)))
    + "\" class=\"person-panel-films-item__link\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":93,"column":104},"end":{"line":93,"column":115}}}) : helper)))
    + "</a>\r\n                                    </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<article class=\"person\">\r\n    <div class=\"person-container\">\r\n        <div class=\"person__column person__column--left\">\r\n            <div class=\"person-column-left__container\">\r\n                <div class=\"person-column-left-container__items\">\r\n                    <div class=\"person__photo\">\r\n                        <a class=\"person-photo__link\">\r\n                            <img class=\"person-photo__image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"avatarURL") || (depth0 != null ? lookupProperty(depth0,"avatarURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatarURL","hash":{},"data":data,"loc":{"start":{"line":8,"column":66},"end":{"line":8,"column":81}}}) : helper)))
    + "\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"person__delimiter\"></div>\r\n\r\n        <div class=\"person__column person__column--right\">\r\n            <div class=\"person-column-right__container\">\r\n                <div class=\"person-column-right-container__items\">\r\n                    <div class=\"person__header\">\r\n                        <div class=\"person-header-container\">\r\n                            <h1 class=\"person-header__ru-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":22,"column":63},"end":{"line":22,"column":73}}}) : helper)))
    + "</h1>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"person__table\">\r\n                        <h3 class=\"person-table__title\">О персоне</h3>\r\n                        <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"age") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":28},"end":{"line":36,"column":35}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"growth") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":28},"end":{"line":45,"column":35}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gender") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":54,"column":35}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"birthPlace") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":28},"end":{"line":63,"column":35}}})) != null ? stack1 : "")
    + "\r\n\r\n                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Жанры</div>\r\n                                <div class=\"person-table-row__info\">\r\n                                    ";
  stack1 = ((helper = (helper = lookupProperty(helpers,"comment") || (depth0 != null ? lookupProperty(depth0,"comment") : depth0)) != null ? helper : alias2),(options={"name":"comment","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":36},"end":{"line":69,"column":108}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"comment")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"genres") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":36},"end":{"line":72,"column":45}}})) != null ? stack1 : "")
    + "                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"person-table__row person-table__row--medium\">\r\n                                <div class=\"person-table-row__title\">Роли</div>\r\n                                <div class=\"person-table-row__info\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"roles") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":36},"end":{"line":81,"column":45}}})) != null ? stack1 : "")
    + "                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"person__panel\">\r\n                        <div class=\"person-panel__films\">\r\n                            <h3 class=\"person-panel-films__title\">Лучшие фильмы</h3>\r\n                            <ul class=\"person-panel-films__items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"participatedIn") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":32},"end":{"line":95,"column":41}}})) != null ? stack1 : "")
    + "                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</article>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/PlayerView/PlayerView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/PlayerView/PlayerView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--<div class=\"wrapper\">-->\r\n<!--    <div class=\"player\">-->\r\n<!--        <video class=\"video\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"videoURL") || (depth0 != null ? lookupProperty(depth0,"videoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":38},"end":{"line":3,"column":52}}}) : helper)))
    + "\"></video>-->\r\n<!--        <div class=\"controls\">-->\r\n<!--            <div class=\"controls__play\" data-action=\"play\">-->\r\n<!--                <img src=\"/img/icons/play.svg\" class=\"play__btn\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__stop\" data-action=\"stop\">-->\r\n<!--                <img src=\"/img/icons/stop.svg\" class=\"stop__btn\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__progress\" data-action=\"videoScroll\">-->\r\n<!--                <input type=\"range\" class=\"progress\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__volume\">-->\r\n<!--                <img src=\"/img/icons/volume.svg\" class=\"volume__btn\" data-action=\"volumeScroll\">-->\r\n<!--                <input type=\"range\" class=\"volume__progress\">-->\r\n<!--            </div>-->\r\n<!--            <div class=\"controls__time\">00:00/00:00</div>-->\r\n<!--        </div>-->\r\n<!--    </div>-->\r\n<!--</div>-->\r\n\r\n<div id=\"fullscreen-modal\">\r\n    <div class=\"fullscreen-modal\">\r\n        <div class=\"relative-overflow\">\r\n            <div class=\"relative\">\r\n                <div class=\"relative current-background\">\r\n                    <div id=\"video-controls\" class=\"video relative\">\r\n                        <div class=\"video__storage\">\r\n                            <div class=\"video__background\"></div>\r\n                            <video id=\"video-player\" autoplay playsinline src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":31,"column":79},"end":{"line":31,"column":88}}}) : helper)))
    + "\"></video>\r\n                        </div>\r\n\r\n<!--                        <div class=\"video__title-container\">-->\r\n<!--                            <div class=\"video__title-align\">-->\r\n<!--                                <div class=\"video__title\">-->\r\n<!--                                    <div class=\"video-title__text\">Петровы в гриппе</div>-->\r\n<!--                                </div>-->\r\n<!--                            </div>-->\r\n<!--                        </div>-->\r\n\r\n                        <div>\r\n                            <div class=\"video__close-button\">\r\n                                <!-- Gradient button (upper to) -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__bottom-filter\"></div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__panel\">\r\n                                <div class=\"video__bottom-container\">\r\n                                    <div class=\"flex-center\">\r\n                                        <div>\r\n                                            <div class=\"video__play-button\"></div>\r\n                                        </div>\r\n                                        <div>\r\n                                            <div class=\"video__duration-time\"></div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"flex-center\">\r\n                                        <div class=\"ml-5 mr-24\"> <!-- TODO div with title in -->\r\n                                            <div title=\"Воспроизводится в HD качестве\" class=\"video__quality\">\r\n                                                <img src=\"/img/icons/player/hd.svg\" alt=\"Воспроизводится в HD качестве\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"mr-24\">\r\n                                            <div class=\"flex-center\">\r\n                                                <div class=\"video__icon\"> <!-- TODO div with title in -->\r\n                                                    <div title=\"Выключить / Включить звук\" class=\"video__volume\">\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div>\r\n                                            <div class=\"video__icon\">\r\n                                                <div title=\"Во весь экран\" class=\"video__icon-fill\">\r\n                                                    <img src=\"/img/icons/player/fullscreen.svg\" alt=\"Во весь экран\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsView.hbs":
/*!*****************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsView.hbs ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"settings-container\">\r\n    <div class=\"settings\">\r\n        <h1 class=\"settings__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":36},"end":{"line":3,"column":47}}}) : helper)))
    + "</h1>\r\n        <div class=\"settings__content\">\r\n            <div class=\"settings__left-menu-container js-settings__left-menu-container\">\r\n\r\n            </div>\r\n\r\n            <div class=\"settings__right\">\r\n                <div class=\"settings__form js-settings__form\">\r\n                    <!-- This is the same as in signIn and SignUp -->\r\n                    <!-- TODO: move two field in form and add classes for it -->\r\n\r\n                    <h2 class=\"settings-form__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"formTitle") || (depth0 != null ? lookupProperty(depth0,"formTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formTitle","hash":{},"data":data,"loc":{"start":{"line":14,"column":53},"end":{"line":14,"column":68}}}) : helper)))
    + "</h2>\r\n                    <p class=\"settings-form__description\"> "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":59},"end":{"line":15,"column":76}}}) : helper)))
    + "</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</main>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/SignInView/SignInView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/SignInView/SignInView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <h3 class=\"signIn__title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":44},"end":{"line":2,"column":55}}}) : helper)))
    + "</h3> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <p class=\"signIn__description\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":72}}}) : helper)))
    + "</p> ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"signIn js-signIn\">\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":84}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpView.hbs":
/*!*************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpView.hbs ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <h3 class=\"signUp__title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":44},"end":{"line":2,"column":55}}}) : helper)))
    + "</h3> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <p class=\"signUp__description\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":72}}}) : helper)))
    + "</p> ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"signUp js-signUp\">\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":84}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js");

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js");

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js");

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports["default"] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _decorators = __webpack_require__(/*! ./decorators */ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js");

var _logger = __webpack_require__(/*! ./logger */ "./node_modules/handlebars/dist/cjs/handlebars/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

var VERSION = '4.7.7';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;

exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0 <4.3.0',
  8: '>= 4.3.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  },
  /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess.resetLoggedProperties();
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQThDLFNBQVM7O3lCQUNqQyxhQUFhOzs7O3VCQUNJLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNyQyxVQUFVOzs7O21DQUNTLHlCQUF5Qjs7QUFFeEQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUN4QixJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7QUFDNUIsSUFBTSxpQ0FBaUMsR0FBRyxDQUFDLENBQUM7OztBQUU1QyxJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxpQkFBaUI7QUFDcEIsR0FBQyxFQUFFLFVBQVU7Q0FDZCxDQUFDOzs7QUFFRixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFOUIsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNuRSxNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQzs7QUFFbkMsa0NBQXVCLElBQUksQ0FBQyxDQUFDO0FBQzdCLHdDQUEwQixJQUFJLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7QUFDaEMsYUFBVyxFQUFFLHFCQUFxQjs7QUFFbEMsUUFBTSxxQkFBUTtBQUNkLEtBQUcsRUFBRSxvQkFBTyxHQUFHOztBQUVmLGdCQUFjLEVBQUUsd0JBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNqQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFDTixjQUFNLDJCQUFjLHlDQUF5QyxDQUFDLENBQUM7T0FDaEU7QUFDRCxvQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtHQUNGO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQy9CLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUMzQjs7QUFFRCxpQkFBZSxFQUFFLHlCQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0IsTUFBTTtBQUNMLFVBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGNBQU0seUVBQ3dDLElBQUksb0JBQ2pELENBQUM7T0FDSDtBQUNELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQy9CO0dBQ0Y7QUFDRCxtQkFBaUIsRUFBRSwyQkFBUyxJQUFJLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzVCOztBQUVELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDcEMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQ04sY0FBTSwyQkFBYyw0Q0FBNEMsQ0FBQyxDQUFDO09BQ25FO0FBQ0Qsb0JBQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvQixNQUFNO0FBQ0wsVUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDNUI7R0FDRjtBQUNELHFCQUFtQixFQUFFLDZCQUFTLElBQUksRUFBRTtBQUNsQyxXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDOUI7Ozs7O0FBS0QsNkJBQTJCLEVBQUEsdUNBQUc7QUFDNUIsZ0RBQXVCLENBQUM7R0FDekI7Q0FDRixDQUFDOztBQUVLLElBQUksR0FBRyxHQUFHLG9CQUFPLEdBQUcsQ0FBQzs7O1FBRW5CLFdBQVc7UUFBRSxNQUFNIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVGcmFtZSwgZXh0ZW5kLCB0b1N0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyByZWdpc3RlckRlZmF1bHRIZWxwZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgfSBmcm9tICcuL2RlY29yYXRvcnMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyByZXNldExvZ2dlZFByb3BlcnRpZXMgfSBmcm9tICcuL2ludGVybmFsL3Byb3RvLWFjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzQuNy43JztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5leHBvcnQgY29uc3QgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAgPDQuMy4wJyxcbiAgODogJz49IDQuMy4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcbiAgICAgIH1cbiAgICAgIGV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBleHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICAgICBgQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJHtuYW1lfVwiIGFzIHVuZGVmaW5lZGBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuICAgICAgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH0sXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbWVtb3J5IG9mIGlsbGVnYWwgcHJvcGVydHkgYWNjZXNzZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBsb2dnZWQuXG4gICAqIEBkZXByZWNhdGVkIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gaGFuZGxlYmFycyB0ZXN0LWNhc2VzXG4gICAqL1xuICByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXMoKSB7XG4gICAgcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHsgY3JlYXRlRnJhbWUsIGxvZ2dlciB9O1xuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js");

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports["default"] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXVCLFVBQVU7O3FCQUVsQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuICAgICAgICBsZXQgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcbiAgICAgICAgbGV0IHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      endLineNumber = undefined,
      column = undefined,
      endColumn = undefined;

  if (loc) {
    line = loc.start.line;
    endLineNumber = loc.end.line;
    column = loc.start.column;
    endColumn = loc.end.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;
      this.endLineNumber = endLineNumber;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
        Object.defineProperty(this, 'endColumn', {
          value: endColumn,
          enumerable: true
        });
      } else {
        this.column = column;
        this.endColumn = endColumn;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFVBQVUsR0FBRyxDQUNqQixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsT0FBTyxDQUNSLENBQUM7O0FBRUYsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDeEIsSUFBSSxZQUFBO01BQ0osYUFBYSxZQUFBO01BQ2IsTUFBTSxZQUFBO01BQ04sU0FBUyxZQUFBLENBQUM7O0FBRVosTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdEIsaUJBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM3QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsYUFBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztBQUUzQixXQUFPLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0dBQ3hDOztBQUVELE1BQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7OztBQUcxRCxPQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNoRCxRQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQzlDOzs7QUFHRCxNQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtBQUMzQixTQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQzFDOztBQUVELE1BQUk7QUFDRixRQUFJLEdBQUcsRUFBRTtBQUNQLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOzs7O0FBSW5DLFVBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtBQUN6QixjQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDcEMsZUFBSyxFQUFFLE1BQU07QUFDYixvQkFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0FBQ0gsY0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDLGVBQUssRUFBRSxTQUFTO0FBQ2hCLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7T0FDNUI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVycm9yUHJvcHMgPSBbXG4gICdkZXNjcmlwdGlvbicsXG4gICdmaWxlTmFtZScsXG4gICdsaW5lTnVtYmVyJyxcbiAgJ2VuZExpbmVOdW1iZXInLFxuICAnbWVzc2FnZScsXG4gICduYW1lJyxcbiAgJ251bWJlcicsXG4gICdzdGFjaydcbl07XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgIGxpbmUsXG4gICAgZW5kTGluZU51bWJlcixcbiAgICBjb2x1bW4sXG4gICAgZW5kQ29sdW1uO1xuXG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgZW5kTGluZU51bWJlciA9IGxvYy5lbmQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuICAgIGVuZENvbHVtbiA9IGxvYy5lbmQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IGVuZExpbmVOdW1iZXI7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGNvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2VuZENvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogZW5kQ29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChub3ApIHtcbiAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js");

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(/*! ./helpers/each */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js");

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js");

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(/*! ./helpers/if */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js");

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(/*! ./helpers/log */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js");

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js");

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(/*! ./helpers/with */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js");

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}

function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lDQUF1QyxnQ0FBZ0M7Ozs7MkJBQzlDLGdCQUFnQjs7OztvQ0FDUCwwQkFBMEI7Ozs7eUJBQ3JDLGNBQWM7Ozs7MEJBQ2IsZUFBZTs7Ozs2QkFDWixrQkFBa0I7Ozs7MkJBQ3BCLGdCQUFnQjs7OztBQUVsQyxTQUFTLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtBQUMvQyx5Q0FBMkIsUUFBUSxDQUFDLENBQUM7QUFDckMsMkJBQWEsUUFBUSxDQUFDLENBQUM7QUFDdkIsb0NBQXNCLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLHlCQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLDBCQUFZLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDZCQUFlLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLDJCQUFhLFFBQVEsQ0FBQyxDQUFDO0NBQ3hCOztBQUVNLFNBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDbEUsTUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxRCxRQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2YsYUFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDO0dBQ0Y7Q0FDRiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJFYWNoIGZyb20gJy4vaGVscGVycy9lYWNoJztcbmltcG9ydCByZWdpc3RlckhlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlcklmIGZyb20gJy4vaGVscGVycy9pZic7XG5pbXBvcnQgcmVnaXN0ZXJMb2cgZnJvbSAnLi9oZWxwZXJzL2xvZyc7XG5pbXBvcnQgcmVnaXN0ZXJMb29rdXAgZnJvbSAnLi9oZWxwZXJzL2xvb2t1cCc7XG5pbXBvcnQgcmVnaXN0ZXJXaXRoIGZyb20gJy4vaGVscGVycy93aXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlckVhY2goaW5zdGFuY2UpO1xuICByZWdpc3RlckhlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlcklmKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb2coaW5zdGFuY2UpO1xuICByZWdpc3Rlckxvb2t1cChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyV2l0aChpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuICBpZiAoaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXSkge1xuICAgIGluc3RhbmNlLmhvb2tzW2hlbHBlck5hbWVdID0gaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBpZiAoIWtlZXBIZWxwZXIpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIH1cbiAgfVxufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports["default"] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBd0QsVUFBVTs7cUJBRW5ELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQzNCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVsQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNGLGVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztPQUMxQjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVuZENvbnRleHRQYXRoLCBjcmVhdGVGcmFtZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBsZXQgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else if (__webpack_require__.g.Symbol && context[__webpack_require__.g.Symbol.iterator]) {
        var newContext = [];
        var iterator = context[__webpack_require__.g.Symbol.iterator]();
        for (var it = iterator.next(); !it.done; it = iterator.next()) {
          newContext.push(it.value);
        }
        context = newContext;
        for (var j = context.length; i < j; i++) {
          execIteration(i, i, i === context.length - 1);
        }
      } else {
        (function () {
          var priorKey = undefined;

          Object.keys(context).forEach(function (key) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          });
          if (priorKey !== undefined) {
            execIteration(priorKey, i - 1, true);
          }
        })();
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osWUFBTSwyQkFBYyw2QkFBNkIsQ0FBQyxDQUFDO0tBQ3BEOztBQUVELFFBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTztRQUN6QixDQUFDLEdBQUcsQ0FBQztRQUNMLEdBQUcsR0FBRyxFQUFFO1FBQ1IsSUFBSSxZQUFBO1FBQ0osV0FBVyxZQUFBLENBQUM7O0FBRWQsUUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDL0IsaUJBQVcsR0FDVCx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNyRTs7QUFFRCxRQUFJLGtCQUFXLE9BQU8sQ0FBQyxFQUFFO0FBQ3ZCLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOztBQUVELFFBQUksT0FBTyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztBQUVELGFBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3pDLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7QUFFbkIsWUFBSSxXQUFXLEVBQUU7QUFDZixjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDeEM7T0FDRjs7QUFFRCxTQUFHLEdBQ0QsR0FBRyxHQUNILEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUNYLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUN2QixDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQzVCO09BQ0YsQ0FBQyxDQUFDO0tBQ047O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzRCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUNuRCxhQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUM3RCxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7QUFDRCxlQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ3JCLGFBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLHVCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQztPQUNGLE1BQU07O0FBQ0wsY0FBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7Ozs7QUFJbEMsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0wsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLHlCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDdEM7O09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFwcGVuZENvbnRleHRQYXRoLFxuICBibG9ja1BhcmFtcyxcbiAgY3JlYXRlRnJhbWUsXG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb25cbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgaSA9IDAsXG4gICAgICByZXQgPSAnJyxcbiAgICAgIGRhdGEsXG4gICAgICBjb250ZXh0UGF0aDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID1cbiAgICAgICAgYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID1cbiAgICAgICAgcmV0ICtcbiAgICAgICAgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhcbiAgICAgICAgICAgIFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLFxuICAgICAgICAgICAgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLlN5bWJvbCAmJiBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBbXTtcbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGZvciAobGV0IGl0ID0gaXRlcmF0b3IubmV4dCgpOyAhaXQuZG9uZTsgaXQgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICAgICAgICBuZXdDb250ZXh0LnB1c2goaXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSBuZXdDb250ZXh0O1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBPYmplY3Qua2V5cyhjb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFDSixtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUNqRSxDQUFDO0tBQ0g7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXG4gICAgICAgICdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJ1xuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#if requires exactly one argument');
    }
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#unless requires exactly one argument');
    }
    return instance.helpers['if'].call(this, conditional, {
      fn: options.inverse,
      inverse: options.fn,
      hash: options.hash
    });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQkFBb0MsVUFBVTs7eUJBQ3hCLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztLQUMxRDtBQUNELFFBQUksa0JBQVcsV0FBVyxDQUFDLEVBQUU7QUFDM0IsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7OztBQUtELFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFFBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDekIsWUFBTSwyQkFBYyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQzlEO0FBQ0QsV0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3BELFFBQUUsRUFBRSxPQUFPLENBQUMsT0FBTztBQUNuQixhQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDbkIsVUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0tBQ25CLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eSwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG4gICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBpc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjdW5sZXNzIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtcbiAgICAgIGZuOiBvcHRpb25zLmludmVyc2UsXG4gICAgICBpbnZlcnNlOiBvcHRpb25zLmZuLFxuICAgICAgaGFzaDogb3B0aW9ucy5oYXNoXG4gICAgfSk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVEsSUFBSSxDQUFDLENBQUM7R0FDdkIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2coLi4uYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (instance) {
  instance.registerHelper('lookup', function (obj, field, options) {
    if (!obj) {
      // Note for 5.0: Change to "obj == null" in 5.0
      return obj;
    }
    return options.lookupProperty(obj, field);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM5RCxRQUFJLENBQUMsR0FBRyxFQUFFOztBQUVSLGFBQU8sR0FBRyxDQUFDO0tBQ1o7QUFDRCxXQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNDLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6Imxvb2t1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbihvYmosIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIC8vIE5vdGUgZm9yIDUuMDogQ2hhbmdlIHRvIFwib2JqID09IG51bGxcIiBpbiA1LjBcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLmxvb2t1cFByb3BlcnR5KG9iaiwgZmllbGQpO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#with requires exactly one argument');
    }
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMscUNBQXFDLENBQUMsQ0FBQztLQUM1RDtBQUNELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFDdkIsYUFBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLGVBQVEsT0FBTyxDQUFDLEVBQUU7QUFDckIsVUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN4QixVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxXQUFXLEdBQUcseUJBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7T0FDSDs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQ2hFLENBQUMsQ0FBQztLQUNKLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJ3aXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXBwZW5kQ29udGV4dFBhdGgsXG4gIGJsb2NrUGFyYW1zLFxuICBjcmVhdGVGcmFtZSxcbiAgaXNFbXB0eSxcbiAgaXNGdW5jdGlvblxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJyN3aXRoIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIWlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLmlkc1swXVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */

function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return _utils.extend.apply(undefined, [Object.create(null)].concat(sources));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFBdUIsVUFBVTs7Ozs7Ozs7O0FBUTFCLFNBQVMscUJBQXFCLEdBQWE7b0NBQVQsT0FBTztBQUFQLFdBQU87OztBQUM5QyxTQUFPLGdDQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQUssT0FBTyxFQUFDLENBQUM7Q0FDaEQiLCJmaWxlIjoiY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBcIm51bGxcIi1wcm90b3R5cGUgdG8gYXZvaWQgdHJ1dGh5IHJlc3VsdHMgb24gcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBUaGUgcmVzdWx0aW5nIG9iamVjdCBjYW4gYmUgdXNlZCB3aXRoIFwib2JqZWN0W3Byb3BlcnR5XVwiIHRvIGNoZWNrIGlmIGEgcHJvcGVydHkgZXhpc3RzXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyBhIHZhcmFyZ3MgcGFyYW1ldGVyIG9mIHNvdXJjZSBvYmplY3RzIHRoYXQgd2lsbCBiZSBtZXJnZWRcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdMb29rdXBPYmplY3QoLi4uc291cmNlcykge1xuICByZXR1cm4gZXh0ZW5kKE9iamVjdC5jcmVhdGUobnVsbCksIC4uLnNvdXJjZXMpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js":
/*!******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _createNewLookupObject = __webpack_require__(/*! ./create-new-lookup-object */ "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js");

var _logger = __webpack_require__(/*! ../logger */ "./node_modules/handlebars/dist/cjs/handlebars/logger.js");

var logger = _interopRequireWildcard(_logger);

var loggedProperties = Object.create(null);

function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = Object.create(null);
  defaultMethodWhiteList['constructor'] = false;
  defaultMethodWhiteList['__defineGetter__'] = false;
  defaultMethodWhiteList['__defineSetter__'] = false;
  defaultMethodWhiteList['__lookupGetter__'] = false;

  var defaultPropertyWhiteList = Object.create(null);
  // eslint-disable-next-line no-proto
  defaultPropertyWhiteList['__proto__'] = false;

  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}

function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === 'function') {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}

function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== undefined) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}

function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}

function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function (propertyName) {
    delete loggedProperties[propertyName];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FDQUFzQyw0QkFBNEI7O3NCQUMxQyxXQUFXOztJQUF2QixNQUFNOztBQUVsQixJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRDLFNBQVMsd0JBQXdCLENBQUMsY0FBYyxFQUFFO0FBQ3ZELE1BQUksc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRCx3QkFBc0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUMsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRW5ELE1BQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbkQsMEJBQXdCLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUU5QyxTQUFPO0FBQ0wsY0FBVSxFQUFFO0FBQ1YsZUFBUyxFQUFFLDZDQUNULHdCQUF3QixFQUN4QixjQUFjLENBQUMsc0JBQXNCLENBQ3RDO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsNkJBQTZCO0tBQzNEO0FBQ0QsV0FBTyxFQUFFO0FBQ1AsZUFBUyxFQUFFLDZDQUNULHNCQUFzQixFQUN0QixjQUFjLENBQUMsbUJBQW1CLENBQ25DO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsMEJBQTBCO0tBQ3hEO0dBQ0YsQ0FBQztDQUNIOztBQUVNLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUU7QUFDeEUsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7QUFDaEMsV0FBTyxjQUFjLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQ2pFLE1BQU07QUFDTCxXQUFPLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDcEU7Q0FDRjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxZQUFZLEVBQUU7QUFDL0QsTUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ25FLFdBQU8seUJBQXlCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQztHQUNuRTtBQUNELE1BQUkseUJBQXlCLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtBQUN4RCxXQUFPLHlCQUF5QixDQUFDLFlBQVksQ0FBQztHQUMvQztBQUNELGdDQUE4QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdDLFNBQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUU7QUFDcEQsTUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDM0Msb0JBQWdCLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFVBQU0sQ0FBQyxHQUFHLENBQ1IsT0FBTyxFQUNQLGlFQUErRCxZQUFZLG9JQUNILG9IQUMyQyxDQUNwSCxDQUFDO0dBQ0g7Q0FDRjs7QUFFTSxTQUFTLHFCQUFxQixHQUFHO0FBQ3RDLFFBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLEVBQUk7QUFDcEQsV0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUN2QyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJwcm90by1hY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdMb29rdXBPYmplY3QgfSBmcm9tICcuL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdCc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VkUHJvcGVydGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wocnVudGltZU9wdGlvbnMpIHtcbiAgbGV0IGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lR2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZVNldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cbiAgbGV0IGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3RbJ19fcHJvdG9fXyddID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IGNyZWF0ZU5ld0xvb2t1cE9iamVjdChcbiAgICAgICAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0LFxuICAgICAgICBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzXG4gICAgICApLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvUHJvcGVydGllc0J5RGVmYXVsdFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgd2hpdGVsaXN0OiBjcmVhdGVOZXdMb29rdXBPYmplY3QoXG4gICAgICAgIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsXG4gICAgICAgIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHNcbiAgICAgICksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgcHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLm1ldGhvZHMsIHByb3BlcnR5TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gPT09IHRydWU7XG4gIH1cbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSkge1xuICBpZiAobG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdICE9PSB0cnVlKSB7XG4gICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIGBIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJHtwcm9wZXJ0eU5hbWV9XCIgYmVjYXVzZSBpdCBpcyBub3QgYW4gXCJvd24gcHJvcGVydHlcIiBvZiBpdHMgcGFyZW50LlxcbmAgK1xuICAgICAgICBgWW91IGNhbiBhZGQgYSBydW50aW1lIG9wdGlvbiB0byBkaXNhYmxlIHRoZSBjaGVjayBvciB0aGlzIHdhcm5pbmc6XFxuYCArXG4gICAgICAgIGBTZWUgaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL2FwaS1yZWZlcmVuY2UvcnVudGltZS1vcHRpb25zLmh0bWwjb3B0aW9ucy10by1jb250cm9sLXByb3RvdHlwZS1hY2Nlc3MgZm9yIGRldGFpbHNgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCkge1xuICBPYmplY3Qua2V5cyhsb2dnZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgZGVsZXRlIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.wrapHelper = wrapHelper;

function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== 'function') {
    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
  }
  var wrapper = function wrapper() /* dynamic arguments */{
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3dyYXBIZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7QUFDckQsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7OztBQUdoQyxXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLDBCQUFxQztBQUM5QyxRQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxhQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxXQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ3RDLENBQUM7QUFDRixTQUFPLE9BQU8sQ0FBQztDQUNoQiIsImZpbGUiOiJ3cmFwSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHdyYXBIZWxwZXIoaGVscGVyLCB0cmFuc2Zvcm1PcHRpb25zRm4pIHtcbiAgaWYgKHR5cGVvZiBoZWxwZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYXBwYXJlbnRseSBpdCBkb2VzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS93eWNhdHMvaGFuZGxlYmFycy5qcy9pc3N1ZXMvMTYzOVxuICAgIC8vIFdlIHRyeSB0byBtYWtlIHRoZSB3cmFwcGVyIGxlYXN0LWludmFzaXZlIGJ5IG5vdCB3cmFwcGluZyBpdCwgaWYgdGhlIGhlbHBlciBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gaGVscGVyO1xuICB9XG4gIGxldCB3cmFwcGVyID0gZnVuY3Rpb24oLyogZHluYW1pYyBhcmd1bWVudHMgKi8pIHtcbiAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID0gdHJhbnNmb3JtT3B0aW9uc0ZuKG9wdGlvbnMpO1xuICAgIHJldHVybiBoZWxwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      // eslint-disable-next-line no-console
      if (!console[method]) {
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports["default"] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUF3QixTQUFTOztBQUVqQyxJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUNFLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUN6QztBQUNBLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXJDLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDcEIsY0FBTSxHQUFHLEtBQUssQ0FBQztPQUNoQjs7d0NBWG1CLE9BQU87QUFBUCxlQUFPOzs7QUFZM0IsYUFBTyxDQUFDLE1BQU0sT0FBQyxDQUFmLE9BQU8sRUFBWSxPQUFPLENBQUMsQ0FBQztLQUM3QjtHQUNGO0NBQ0YsQ0FBQzs7cUJBRWEsTUFBTSIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWxcbiAgICApIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgICBtZXRob2QgPSAnbG9nJztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5tZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxVQUFVLEVBQUU7O0FBRWxDLE1BQUksSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLEdBQUcsTUFBTTtNQUN4RCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7QUFFaEMsWUFBVSxDQUFDLFVBQVUsR0FBRyxZQUFXO0FBQ2pDLFFBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7QUFDbEMsVUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7S0FDL0I7QUFDRCxXQUFPLFVBQVUsQ0FBQztHQUNuQixDQUFDO0NBQ0giLCJmaWxlIjoibm8tY29uZmxpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGxldCByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(/*! ./base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _internalWrapHelper = __webpack_require__(/*! ./internal/wrapHelper */ "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js");

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }

  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
  } else {
    // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as pseudo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);

    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });

    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name, loc) {
      if (!obj || !(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
          loc: loc
        });
      }
      return container.lookupProperty(obj, name);
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }

      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return undefined;
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name);
        if (result != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }

    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }

  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;

      if (templateSpec.usePartial) {
        // Use mergeIfNeeded here to prevent compiling global partials multiple times
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }

      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl; // internal option
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}

function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function (helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}

function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function (options) {
    return Utils.extend({ lookupProperty: lookupProperty }, options);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBTTVCLFFBQVE7O3VCQUNtQixXQUFXOztrQ0FDbEIsdUJBQXVCOzttQ0FJM0MseUJBQXlCOztBQUV6QixTQUFTLGFBQWEsQ0FBQyxZQUFZLEVBQUU7QUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxBQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQztNQUM3RCxlQUFlLDBCQUFvQixDQUFDOztBQUV0QyxNQUNFLGdCQUFnQiwyQ0FBcUMsSUFDckQsZ0JBQWdCLDJCQUFxQixFQUNyQztBQUNBLFdBQU87R0FDUjs7QUFFRCxNQUFJLGdCQUFnQiwwQ0FBb0MsRUFBRTtBQUN4RCxRQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1FBQ3ZELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hELFVBQU0sMkJBQ0oseUZBQXlGLEdBQ3ZGLHFEQUFxRCxHQUNyRCxlQUFlLEdBQ2YsbURBQW1ELEdBQ25ELGdCQUFnQixHQUNoQixJQUFJLENBQ1AsQ0FBQztHQUNILE1BQU07O0FBRUwsVUFBTSwyQkFDSix3RkFBd0YsR0FDdEYsaURBQWlELEdBQ2pELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FDZixJQUFJLENBQ1AsQ0FBQztHQUNIO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztH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QUFDbkMsV0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFkLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xELENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHtcbiAgQ09NUElMRVJfUkVWSVNJT04sXG4gIGNyZWF0ZUZyYW1lLFxuICBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04sXG4gIFJFVklTSU9OX0NIQU5HRVNcbn0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IG1vdmVIZWxwZXJUb0hvb2tzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHdyYXBIZWxwZXIgfSBmcm9tICcuL2ludGVybmFsL3dyYXBIZWxwZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sLFxuICByZXN1bHRJc0FsbG93ZWRcbn0gZnJvbSAnLi9pbnRlcm5hbC9wcm90by1hY2Nlc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgY29uc3QgY29tcGlsZXJSZXZpc2lvbiA9IChjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdKSB8fCAxLFxuICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChcbiAgICBjb21waWxlclJldmlzaW9uID49IExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJlxuICAgIGNvbXBpbGVyUmV2aXNpb24gPD0gQ09NUElMRVJfUkVWSVNJT05cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICBjb25zdCBydW50aW1lVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIHJ1bnRpbWVWZXJzaW9ucyArXG4gICAgICAgICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgK1xuICAgICAgICBjb21waWxlckluZm9bMV0gK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHNldWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgd2l0aCBjb21waWxlci12ZXJzaW9uIDcgKDw0LjMuMClcbiAgY29uc3QgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3ID1cbiAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXIgJiYgdGVtcGxhdGVTcGVjLmNvbXBpbGVyWzBdID09PSA3O1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgbGV0IGV4dGVuZGVkT3B0aW9ucyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgaG9va3M6IHRoaXMuaG9va3MsXG4gICAgICBwcm90b0FjY2Vzc0NvbnRyb2w6IHRoaXMucHJvdG9BY2Nlc3NDb250cm9sXG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbChcbiAgICAgIHRoaXMsXG4gICAgICBwYXJ0aWFsLFxuICAgICAgY29udGV4dCxcbiAgICAgIGV4dGVuZGVkT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKFxuICAgICAgICBwYXJ0aWFsLFxuICAgICAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLFxuICAgICAgICBlbnZcbiAgICAgICk7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgICAnVGhlIHBhcnRpYWwgJyArXG4gICAgICAgICAgb3B0aW9ucy5uYW1lICtcbiAgICAgICAgICAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUsIGxvYykge1xuICAgICAgaWYgKCFvYmogfHwgIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqLCB7XG4gICAgICAgICAgbG9jOiBsb2NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5KG9iaiwgbmFtZSk7XG4gICAgfSxcbiAgICBsb29rdXBQcm9wZXJ0eTogZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIGxldCByZXN1bHQgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdElzQWxsb3dlZChyZXN1bHQsIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uKGRlcHRocywgbmFtZSkge1xuICAgICAgY29uc3QgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRlcHRoc1tpXSAmJiBjb250YWluZXIubG9va3VwUHJvcGVydHkoZGVwdGhzW2ldLCBuYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBmbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGRlY2xhcmVkQmxvY2tQYXJhbXMsXG4gICAgICAgICAgYmxvY2tQYXJhbXMsXG4gICAgICAgICAgZGVwdGhzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2VJZk5lZWRlZDogZnVuY3Rpb24ocGFyYW0sIGNvbW1vbikge1xuICAgICAgbGV0IG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9XG4gICAgICAgICAgY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXVxuICAgICAgICAgICAgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKVxuICAgICAgICAgICAgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICB0ZW1wbGF0ZVNwZWMubWFpbihcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBjb250YWluZXIuaGVscGVycyxcbiAgICAgICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBibG9ja1BhcmFtcyxcbiAgICAgICAgICBkZXB0aHNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnMoXG4gICAgICB0ZW1wbGF0ZVNwZWMubWFpbixcbiAgICAgIG1haW4sXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcHRpb25zLmRlcHRocyB8fCBbXSxcbiAgICAgIGRhdGEsXG4gICAgICBibG9ja1BhcmFtc1xuICAgICk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cblxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGxldCBtZXJnZWRIZWxwZXJzID0gVXRpbHMuZXh0ZW5kKHt9LCBlbnYuaGVscGVycywgb3B0aW9ucy5oZWxwZXJzKTtcbiAgICAgIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKTtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gbWVyZ2VkSGVscGVycztcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIC8vIFVzZSBtZXJnZUlmTmVlZGVkIGhlcmUgdG8gcHJldmVudCBjb21waWxpbmcgZ2xvYmFsIHBhcnRpYWxzIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZUlmTmVlZGVkKFxuICAgICAgICAgIG9wdGlvbnMucGFydGlhbHMsXG4gICAgICAgICAgZW52LnBhcnRpYWxzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBVdGlscy5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgZW52LmRlY29yYXRvcnMsXG4gICAgICAgICAgb3B0aW9ucy5kZWNvcmF0b3JzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IHt9O1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChvcHRpb25zKTtcblxuICAgICAgbGV0IGtlZXBIZWxwZXJJbkhlbHBlcnMgPVxuICAgICAgICBvcHRpb25zLmFsbG93Q2FsbHNUb0hlbHBlck1pc3NpbmcgfHxcbiAgICAgICAgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3O1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnaGVscGVyTWlzc2luZycsIGtlZXBIZWxwZXJJbkhlbHBlcnMpO1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnYmxvY2tIZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wgPSBvcHRpb25zLnByb3RvQWNjZXNzQ29udHJvbDsgLy8gaW50ZXJuYWwgb3B0aW9uXG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IG9wdGlvbnMuaG9va3M7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbihpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oXG4gICAgICBjb250YWluZXIsXG4gICAgICBpLFxuICAgICAgdGVtcGxhdGVTcGVjW2ldLFxuICAgICAgZGF0YSxcbiAgICAgIDAsXG4gICAgICBibG9ja1BhcmFtcyxcbiAgICAgIGRlcHRoc1xuICAgICk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShcbiAgY29udGFpbmVyLFxuICBpLFxuICBmbixcbiAgZGF0YSxcbiAgZGVjbGFyZWRCbG9ja1BhcmFtcyxcbiAgYmxvY2tQYXJhbXMsXG4gIGRlcHRoc1xuKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKFxuICAgICAgZGVwdGhzICYmXG4gICAgICBjb250ZXh0ICE9IGRlcHRoc1swXSAmJlxuICAgICAgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKVxuICAgICkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oXG4gICAgICBjb250YWluZXIsXG4gICAgICBjb250ZXh0LFxuICAgICAgY29udGFpbmVyLmhlbHBlcnMsXG4gICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICBvcHRpb25zLmRhdGEgfHwgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLFxuICAgICAgY3VycmVudERlcHRoc1xuICAgICk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGN1cnJlbnRseSBwYXJ0IG9mIHRoZSBvZmZpY2lhbCBBUEksIHRoZXJlZm9yZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKFxuICAgICAgY29udGV4dCxcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgICkge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG4gICAgICBvcHRpb25zLmRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IoXG4gICAgICBwcm9nLFxuICAgICAgcHJvcHMsXG4gICAgICBjb250YWluZXIsXG4gICAgICBkZXB0aHMgJiYgZGVwdGhzWzBdLFxuICAgICAgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgZGVwdGhzXG4gICAgKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiB3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5KG1lcmdlZEhlbHBlcnMsIGNvbnRhaW5lcikge1xuICBPYmplY3Qua2V5cyhtZXJnZWRIZWxwZXJzKS5mb3JFYWNoKGhlbHBlck5hbWUgPT4ge1xuICAgIGxldCBoZWxwZXIgPSBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV0gPSBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5O1xuICByZXR1cm4gd3JhcEhlbHBlcihoZWxwZXIsIG9wdGlvbnMgPT4ge1xuICAgIHJldHVybiBVdGlscy5leHRlbmQoeyBsb29rdXBQcm9wZXJ0eSB9LCBvcHRpb25zKTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports["default"] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRXpCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFvQjtBQUM1QyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQU9PLFVBQVUsR0FQakIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQ0UsT0FBTyxLQUFLLEtBQUssVUFBVSxJQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUM1QztHQUNILENBQUM7Q0FDSDtRQUNRLFVBQVUsR0FBVixVQUFVOzs7OztBQUlaLElBQU0sT0FBTyxHQUNsQixLQUFLLENBQUMsT0FBTyxJQUNiLFVBQVMsS0FBSyxFQUFFO0FBQ2QsU0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxHQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUN6QyxLQUFLLENBQUM7Q0FDWCxDQUFDOzs7OztBQUdHLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUVNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUMxQixXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICApO1xuICB9O1xufVxuZXhwb3J0IHsgaXNGdW5jdGlvbiB9O1xuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9XG4gIEFycmF5LmlzQXJyYXkgfHxcbiAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICAgICAgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIGxldCBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js")["default"];


/***/ }),

/***/ "./src/App/App.css":
/*!*************************!*\
  !*** ./src/App/App.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/BarComponent/BarComponent.css":
/*!**********************************************************!*\
  !*** ./src/App/Components/BarComponent/BarComponent.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/RootComponent/RootComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/ButtonComponent/ButtonComponent.css":
/*!****************************************************************!*\
  !*** ./src/App/Components/ButtonComponent/ButtonComponent.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/Css/HeaderActionList/HeaderActionList.css":
/*!**********************************************************************!*\
  !*** ./src/App/Components/Css/HeaderActionList/HeaderActionList.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css":
/*!********************************************************************************!*\
  !*** ./src/App/Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/Css/HeaderSignIn/HeaderSignIn.css":
/*!**************************************************************!*\
  !*** ./src/App/Components/Css/HeaderSignIn/HeaderSignIn.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.css":
/*!********************************************************************************!*\
  !*** ./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/FormComponent/FormComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/FormComponent/FormComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/InputComponent/InputComponent.css":
/*!**************************************************************!*\
  !*** ./src/App/Components/InputComponent/InputComponent.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/LinkComponent/LinkComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/LinkComponent/LinkComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/ListComponent/ListComponent.css":
/*!************************************************************!*\
  !*** ./src/App/Components/ListComponent/ListComponent.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.css":
/*!********************************************************************************!*\
  !*** ./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Components/VideoComponent/VideoComponent.css":
/*!**************************************************************!*\
  !*** ./src/App/Components/VideoComponent/VideoComponent.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/CarouselView/CarouselView.css":
/*!*****************************************************!*\
  !*** ./src/App/Views/CarouselView/CarouselView.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/FilmView/FilmView.css":
/*!*********************************************!*\
  !*** ./src/App/Views/FilmView/FilmView.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/MainView/MainView.css":
/*!*********************************************!*\
  !*** ./src/App/Views/MainView/MainView.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightView.css":
/*!*********************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightView.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/NotFoundView/NotFoundView.css":
/*!*****************************************************!*\
  !*** ./src/App/Views/NotFoundView/NotFoundView.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/PersonView/PersonView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/PersonView/PersonView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/PlayerView/PlayerView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/PlayerView/PlayerView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsView.css":
/*!*****************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsView.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/SignInView/SignInView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/SignInView/SignInView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpView.css":
/*!*************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpView.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/Ajax/Ajax.ts":
/*!******************************!*\
  !*** ./src/App/Ajax/Ajax.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/Config */ "./src/App/Config/Config.ts");

class Ajax {
    csrfToken;
    async ajax(params, body) {
        const headers = new Headers(params.headers);
        if (params.url === _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.signIn.url || params.url === _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.signUp.url) {
        }
        else {
            if (params.method !== _Config_Config__WEBPACK_IMPORTED_MODULE_0__.REQUEST_METHODS.GET) {
                if (!this.csrfToken) {
                    await this.getCsrfTokenFromServer();
                }
                headers.append('CSRF-Token', this.csrfToken);
            }
        }
        const response = await fetch(`${_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.host}${params.url}`, {
            method: params.method,
            headers,
            body,
            credentials: 'include',
        });
        let responseBody;
        try {
            responseBody = await response.json();
            if (response.status === 400) {
                const customStatus = responseBody.status.toString();
                responseBody.message = _Config_Config__WEBPACK_IMPORTED_MODULE_0__.customFailures[customStatus];
            }
        }
        catch (error) {
            responseBody = {};
        }
        return {
            status: response.status,
            responseBody
        };
    }
    ;
    setCsrfToken(csrfToken) {
        this.csrfToken = csrfToken;
    }
    ;
    async getCsrfTokenFromServer() {
        const csrfResponse = await fetch(`${_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.host}${_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.csrf.url}`, {
            method: _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.csrf.method,
            headers: new Headers(_Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.csrf.headers),
            credentials: 'include',
        });
        const csrfToken = await csrfResponse.json();
        this.setCsrfToken(csrfToken.body['csrf-token']);
        return csrfToken;
    }
    async checkResponseStatus(response, conf) {
        if (response.status.toString() in conf.statuses.success) {
            return Promise.resolve();
        }
        if (response.status.toString() in conf.statuses.failure) {
            const keyStatus = response.status.toString();
            if (keyStatus === '400') {
                const customStatus = response.responseBody.status.toString();
                return Promise.reject({
                    msg: _Config_Config__WEBPACK_IMPORTED_MODULE_0__.customFailures[customStatus],
                });
            }
            return Promise.reject({
                msg: _Config_Config__WEBPACK_IMPORTED_MODULE_0__.config.api.signin.statuses.failure[keyStatus],
            });
        }
        return Promise.reject({
            msg: 'Неожиданная ошибка',
        });
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Ajax());


/***/ }),

/***/ "./src/App/App.ts":
/*!************************!*\
  !*** ./src/App/App.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App/App.css");
/* harmony import */ var _Components_BaseComponent_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/RootComponent/RootComponent */ "./src/App/Components/BaseComponent/BaseComponent.ts");
/* harmony import */ var _Views_HeaderView_HeaderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Views/HeaderView/HeaderView */ "./src/App/Views/HeaderView/HeaderView.ts");
/* harmony import */ var _Controllers_HeaderController_HeaderController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controllers/HeaderController/HeaderController */ "./src/App/Controllers/HeaderController/HeaderController.ts");
/* harmony import */ var _Views_ModalRightView_ModalRightView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Views/ModalRightView/ModalRightView */ "./src/App/Views/ModalRightView/ModalRightView.ts");
/* harmony import */ var _Controllers_ModalRightController_ModalRightController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controllers/ModalRightController/ModalRightController */ "./src/App/Controllers/ModalRightController/ModalRightController.ts");
/* harmony import */ var _Views_FilmView_FilmView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Views/FilmView/FilmView */ "./src/App/Views/FilmView/FilmView.ts");
/* harmony import */ var _Controllers_FilmController_FilmController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Controllers/FilmController/FilmController */ "./src/App/Controllers/FilmController/FilmController.ts");
/* harmony import */ var _Views_SettingsView_SettingsView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Views/SettingsView/SettingsView */ "./src/App/Views/SettingsView/SettingsView.ts");
/* harmony import */ var _Controllers_SettingsController_SettingsController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Controllers/SettingsController/SettingsController */ "./src/App/Controllers/SettingsController/SettingsController.ts");
/* harmony import */ var _Views_PersonView_PersonView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Views/PersonView/PersonView */ "./src/App/Views/PersonView/PersonView.ts");
/* harmony import */ var _Controllers_PersonController_PersonController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Controllers/PersonController/PersonController */ "./src/App/Controllers/PersonController/PersonController.ts");
/* harmony import */ var _Views_MainView_MainView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Views/MainView/MainView */ "./src/App/Views/MainView/MainView.ts");
/* harmony import */ var _Controllers_MainController_MainController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Controllers/MainController/MainController */ "./src/App/Controllers/MainController/MainController.ts");
/* harmony import */ var _Views_NotFoundView_NotFoundView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Views/NotFoundView/NotFoundView */ "./src/App/Views/NotFoundView/NotFoundView.ts");
/* harmony import */ var _Controllers_NotFoundController_NotFoundController__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Controllers/NotFoundController/NotFoundController */ "./src/App/Controllers/NotFoundController/NotFoundController.ts");
/* harmony import */ var _Models_UserModel_UserModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Models/UserModel/UserModel */ "./src/App/Models/UserModel/UserModel.ts");
/* harmony import */ var _Models_FilmModel_FilmModel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Models/FilmModel/FilmModel */ "./src/App/Models/FilmModel/FilmModel.ts");
/* harmony import */ var _Models_PersonModel_PersonModel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Models/PersonModel/PersonModel */ "./src/App/Models/PersonModel/PersonModel.ts");
/* harmony import */ var _Models_SelectionModel_SelectionModel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Models/SelectionModel/SelectionModel */ "./src/App/Models/SelectionModel/SelectionModel.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Router/RouterPaths */ "./src/App/Router/RouterPaths.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");























class App {
    // Views
    headerView;
    modalRightView;
    filmView;
    settingsView;
    personView;
    mainView;
    notFoundView;
    // Controllers
    headerController;
    modalRightController;
    filmController;
    settingsController;
    personController;
    mainController;
    notFoundController;
    // Models
    userModel;
    filmModel;
    personModel;
    selectionModel;
    // Elements
    root;
    header;
    footer;
    content;
    modalRight;
    constructor() {
        this.initPage();
        this.initViews();
        this.initModels();
        this.initControllers();
        this.initRoutes();
    }
    run(url) {
        _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].start(url);
    }
    /**
     * Функция инициализирует базовую вёрстку страницы
     * (приватное поле класса)
     * @return {void}
     */
    initPage() {
        const baseComponent = new _Components_BaseComponent_BaseComponent__WEBPACK_IMPORTED_MODULE_1__["default"](document.body);
        baseComponent.show();
        this.root = baseComponent.querySelector('.js-root');
        this.header = baseComponent.querySelector('.js-header');
        this.footer = baseComponent.querySelector('.js-footer');
        this.content = baseComponent.querySelector('.js-content');
        this.modalRight = baseComponent.querySelector('.js-modal--right');
    }
    ;
    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    initViews() {
        this.headerView = new _Views_HeaderView_HeaderView__WEBPACK_IMPORTED_MODULE_2__["default"](this.header);
        this.modalRightView = new _Views_ModalRightView_ModalRightView__WEBPACK_IMPORTED_MODULE_4__["default"](this.modalRight);
        this.filmView = new _Views_FilmView_FilmView__WEBPACK_IMPORTED_MODULE_6__["default"](this.content);
        this.settingsView = new _Views_SettingsView_SettingsView__WEBPACK_IMPORTED_MODULE_8__["default"](this.content);
        this.personView = new _Views_PersonView_PersonView__WEBPACK_IMPORTED_MODULE_10__["default"](this.content);
        this.mainView = new _Views_MainView_MainView__WEBPACK_IMPORTED_MODULE_12__["default"](this.content);
        this.notFoundView = new _Views_NotFoundView_NotFoundView__WEBPACK_IMPORTED_MODULE_14__["default"](this.content);
    }
    ;
    /**
     * Функция инициализирует все моедели (models)
     * (приватное поле класса)
     * @return {void}
     */
    initModels() {
        this.userModel = new _Models_UserModel_UserModel__WEBPACK_IMPORTED_MODULE_16__["default"]();
        this.filmModel = new _Models_FilmModel_FilmModel__WEBPACK_IMPORTED_MODULE_17__["default"]();
        this.personModel = new _Models_PersonModel_PersonModel__WEBPACK_IMPORTED_MODULE_18__["default"]();
        this.selectionModel = new _Models_SelectionModel_SelectionModel__WEBPACK_IMPORTED_MODULE_19__["default"]();
    }
    ;
    /**
     * Функция инициализирует все отображения (views)
     * (приватное поле класса)
     * @return {void}
     */
    initControllers() {
        this.headerController = new _Controllers_HeaderController_HeaderController__WEBPACK_IMPORTED_MODULE_3__["default"](this.headerView);
        this.modalRightController = new _Controllers_ModalRightController_ModalRightController__WEBPACK_IMPORTED_MODULE_5__["default"](this.modalRightView, this.userModel);
        this.filmController = new _Controllers_FilmController_FilmController__WEBPACK_IMPORTED_MODULE_7__["default"](this.filmView, this.filmModel);
        this.settingsController = new _Controllers_SettingsController_SettingsController__WEBPACK_IMPORTED_MODULE_9__["default"](this.settingsView, this.userModel);
        this.personController = new _Controllers_PersonController_PersonController__WEBPACK_IMPORTED_MODULE_11__["default"](this.personView, this.personModel);
        this.mainController = new _Controllers_MainController_MainController__WEBPACK_IMPORTED_MODULE_13__["default"](this.mainView, { selections: this.selectionModel });
        this.notFoundController = new _Controllers_NotFoundController_NotFoundController__WEBPACK_IMPORTED_MODULE_15__["default"](this.notFoundView);
    }
    ;
    /**
     * Функция задаёт связи между страницами (URL -> обработчик)
     * (приватное поле класса)
     * @return {void}
     */
    initRoutes() {
        _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].setUnknownPageHandler(this.handleRedirectToNotFound.bind(this));
        const routes = [
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].main, handler: this.handleRedirectToMain },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].catalog, handler: this.handleRedirectToCatalog },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].store, handler: this.handleRedirectToStore },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].myMovie, handler: this.handleRedirectToMyMovie },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].signIn, handler: this.handleRedirectToSignIn },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].signUp, handler: this.handleRedirectToSignUp },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].logout, handler: this.handleRedirectToLogout },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].settings, handler: this.handleRedirectToSettings },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].films, handler: this.handleRedirectToFilm },
            { path: _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].persons, handler: this.handleRedirectToPerson },
        ];
        routes.forEach(({ path, handler }) => {
            _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].addRule(path, handler.bind(this));
        });
    }
    ;
    handleRedirectToMain() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        this.mainController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/');
    }
    ;
    handleRedirectToSignIn() {
        this.userModel.authUserByCookie()
            .then(() => {
            _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].getNearestNotAuthUrl());
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('modalRight-setSignIn', this.userModel);
            this.modalRightController.mountComponent();
        });
    }
    ;
    handleRedirectToSignUp() {
        this.userModel.authUserByCookie()
            .then(() => {
            _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].getNearestNotAuthUrl());
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('modalRight-setSignUp', this.userModel);
            this.modalRightController.mountComponent();
        });
    }
    ;
    handleRedirectToCatalog() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/catalog');
    }
    ;
    handleRedirectToStore() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/store');
    }
    ;
    handleRedirectToMyMovie() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
        });
        // mount
        this.headerController.mountComponent();
        // states
        this.headerView.changeActiveHeaderListItem('/my-movie');
    }
    ;
    handleRedirectToSettings() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            // mount
            this.headerController.mountComponent();
            this.settingsController.mountComponent();
            // states
            this.headerView.changeActiveHeaderListItem('#');
            this.settingsView.changeActiveLeftMenuItem(_Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].settings);
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('user-changed', this.userModel.getCurrentUser());
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
            _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].getNearestNotAuthUrl());
        });
    }
    ;
    handleRedirectToFilm(data) {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
        });
        if (!data || !data[0]) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].showUnknownPage();
            return;
        }
        const filmId = data[0];
        // mount
        this.headerController.mountComponent();
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('new-player');
        this.filmController.mountComponent({ id: filmId.toString() });
        // states
        this.headerView.changeActiveHeaderListItem('#');
    }
    ;
    handleRedirectToPerson(data) {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
        });
        if (!data || !data[0]) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].showUnknownPage();
            return;
        }
        const personId = data[0];
        // mount
        this.headerController.mountComponent();
        this.personController.mountComponent({ id: personId.toString() });
        // states
        this.headerView.changeActiveHeaderListItem('#');
    }
    ;
    handleRedirectToLogout() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('redirect', _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].logout);
        this.userModel.logoutUser();
        _Router_Router__WEBPACK_IMPORTED_MODULE_20__["default"].goToPath(_Router_RouterPaths__WEBPACK_IMPORTED_MODULE_21__["default"].main);
    }
    ;
    handleRedirectToNotFound() {
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('unmount-all');
        this.userModel.authUserByCookie()
            .then(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-profileButton');
        })
            .catch(() => {
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_22__["default"].emit('render-signInButton');
        });
        this.headerController.mountComponent();
        this.notFoundController.mountComponent();
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/App/Components/BarComponent/BarComponent.ts":
/*!*********************************************************!*\
  !*** ./src/App/Components/BarComponent/BarComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarComponent.hbs */ "./src/App/Components/BarComponent/BarComponent.hbs");
/* harmony import */ var _BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BarComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarComponent.css */ "./src/App/Components/BarComponent/BarComponent.css");
/* harmony import */ var _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DivComponent/DivComponent */ "./src/App/Components/DivComponent/DivComponent.ts");




// TODO
// type EventTuple = [string, (e: TouchEvent | MouseEvent) => void];
class BarComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    fullBar;
    loadBar;
    loadProgressBar;
    currentBar;
    barHelper;
    currentBarCircle;
    // TODO
    // private eventTuples: EventTuple[] = [
    //     ["mousedown", (e: MouseEvent) => { this.onMouseDown(e); }],
    //     // ["mousemove", this.onMouseMove.bind(this)],
    //     // ["mouseup", this.onMouseUp.bind(this)],
    //     // ["touchstart", this.onTouchStart.bind(this)],
    //     // ["touchmove", this.onTouchMove.bind(this)],
    //     // ["touchend", this.onTouchEnd.bind(this)],
    // ];
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _BarComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ barClass: data.barClass }), '.js-bar');
        this.fullBar = this.element.querySelector('.bar__full');
        this.loadBar = this.element.querySelector('.bar__load');
        this.loadProgressBar = this.element.querySelector('.bar-load__progress');
        this.currentBar = this.element.querySelector('.bar__current');
        this.initHiddenElements();
        // EventDispatcher.subscribe('bar_update-progress', (percentage: number) => {
        //     this.updateCurrentBar(percentage);
        // });
    }
    ;
    initHiddenElements() {
        const barHelperDiv = this.element.querySelector('#bar__helper');
        this.barHelper = new _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__["default"](barHelperDiv, '', '', { class: 'bar__helper' });
        const currentBarCircleDiv = this.element.querySelector('#bar__current-circle');
        this.currentBarCircle = new _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__["default"](currentBarCircleDiv, '', '', { class: 'bar__current-circle' });
    }
    ;
    updateCurrentBar(percentage) {
        this.currentBar.style.width = `${percentage}%`;
        this.currentBarCircle.div.style.left = `${percentage}%`;
    }
    ;
    calculatePercentage(cursorX) {
        const barWidth = this.fullBar.offsetWidth;
        const clickOffset = cursorX - this.fullBar.getBoundingClientRect().left;
        return (clickOffset / barWidth) * 100;
    }
    ;
    // private onMouseOut(e: MouseEvent): void {
    //     this.barHelper.hide(); // TODO check before hide?
    //     // this.currentBarCircle.hide();
    // }
    //
    // private onTouchStart(e: TouchEvent): void {
    //     // console.log('onTouchStart')
    //     this.isDragging = true;
    //     const touchEventWithTarget = e as TouchEventWithTarget;
    //     this.updateProgressBar(touchEventWithTarget);
    // };
    //
    // private onTouchMove(e: TouchEvent): void {
    //     // console.log('onTouchMove')
    //     if (this.isDragging) {
    //         const touchEventWithTarget = e as TouchEventWithTarget;
    //         this.updateProgressBar(touchEventWithTarget);
    //     }
    // };
    //
    // private onTouchEnd(e: TouchEvent): void {
    //     // console.log('onTouchEnd')
    //     this.isDragging = false;
    // };
    //
    // Helpers
    checkHelper() {
        return Boolean(this.element.querySelector('.bar__helper'));
    }
    ;
    checkCircle() {
        return Boolean(this.element.querySelector('.bar__current-circle'));
    }
    ;
    // Binds
    bindMouseDownEvent(listener) {
        this.element.addEventListener('mousedown', listener);
    }
    bindMouseUpEvent(listener) {
        this.element.addEventListener('mouseup', listener);
    }
    ;
    bindMouseMoveEvent(listener) {
        this.element.addEventListener('mousemove', listener);
    }
    ;
    bindMouseOutEvent(listener) {
        this.element.addEventListener('mouseout', listener);
    }
    ;
    bindTouchStartEvent(listener) {
        this.element.addEventListener('touchstart', listener);
    }
    ;
    bindTouchEndEvent(listener) {
        this.element.addEventListener('touchend', listener);
    }
    ;
    bindTouchMoveEvent(listener) {
        this.element.addEventListener('touchmove', listener);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarComponent);


/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/RootComponent/RootComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RootComponent.hbs */ "./src/App/Components/BaseComponent/BaseComponent.hbs");
/* harmony import */ var _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RootComponent.css */ "./src/App/Components/BaseComponent/BaseComponent.css");



class BaseComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-root');
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseComponent);


/***/ }),

/***/ "./src/App/Components/ButtonComponent/ButtonComponent.ts":
/*!***************************************************************!*\
  !*** ./src/App/Components/ButtonComponent/ButtonComponent.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonComponent.hbs */ "./src/App/Components/ButtonComponent/ButtonComponent.hbs");
/* harmony import */ var _ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonComponent.css */ "./src/App/Components/ButtonComponent/ButtonComponent.css");



class ButtonComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    buttonProps = {
        coordinateX: { name: '--coord-x', value: 0 },
        coordinateY: { name: '--coord-y', value: 0 },
        sizeSquare: { name: '--size-square', value: 0 },
        diameterHighlight: { name: '--diameter-highlight', value: 0 },
    };
    button;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _ButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-button');
        this.button = this.element.querySelector('button') || this.element;
        this.setSizeSquare();
        this.setDiameterHighlight();
        this.bindMouseMoveEvent(this.onMouseMoveEvent);
    }
    ;
    setSizeSquare() {
        setTimeout(() => {
            const buttonWidth = this.button.offsetWidth;
            const buttonHeight = this.button.offsetHeight;
            this.buttonProps['sizeSquare'].value = Math.sqrt(buttonWidth * buttonWidth + buttonHeight * buttonHeight);
            this.button.style.setProperty(this.buttonProps['sizeSquare'].name, `${this.buttonProps['sizeSquare'].value}px`);
        }, 0);
    }
    ;
    setDiameterHighlight() {
        setTimeout(() => {
            const buttonWidth = this.button.offsetWidth;
            const buttonHeight = this.button.offsetHeight;
            const diameter = Math.sqrt(buttonWidth * buttonWidth + buttonHeight * buttonHeight);
            const multiplySqrt = Math.sqrt(buttonWidth * buttonHeight);
            this.buttonProps['diameterHighlight'].value = diameter + multiplySqrt;
            this.button.style.setProperty(this.buttonProps['diameterHighlight'].name, `${this.buttonProps['diameterHighlight'].value}px`);
        }, 0);
    }
    block() {
        this.button.disabled = true;
    }
    ;
    unblock() {
        this.button.disabled = false;
    }
    ;
    bindClickEvent(listener) {
        this.button.addEventListener('click', listener.bind(this));
    }
    ;
    unbindClickEvent(listener) {
        this.button.removeEventListener('click', listener.bind(this));
    }
    ;
    bindMouseMoveEvent(listener) {
        this.button.addEventListener('mousemove', listener.bind(this));
    }
    ;
    unbindMouseMoveEvent(listener) {
        this.button.removeEventListener('mousemove', listener.bind(this));
    }
    ;
    onMouseMoveEvent(e) {
        const mouseEvent = e;
        this.buttonProps['coordinateX'].value = mouseEvent.offsetX;
        this.buttonProps['coordinateY'].value = mouseEvent.offsetY;
        this.button.style.setProperty(this.buttonProps['coordinateX'].name, `${this.buttonProps['coordinateX'].value}px`);
        this.button.style.setProperty(this.buttonProps['coordinateY'].name, `${this.buttonProps['coordinateY'].value}px`);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonComponent);


/***/ }),

/***/ "./src/App/Components/DivComponent/DivComponent.ts":
/*!*********************************************************!*\
  !*** ./src/App/Components/DivComponent/DivComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DivComponent.hbs */ "./src/App/Components/DivComponent/DivComponent.hbs");
/* harmony import */ var _DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);


class DivComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    div;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _DivComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), 'div');
        this.div = this.element.querySelector('div') || this.element;
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DivComponent);


/***/ }),

/***/ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.ts":
/*!*******************************************************************************!*\
  !*** ./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownButtonComponent.hbs */ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.hbs");
/* harmony import */ var _DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DropdownButtonComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownButtonComponent.css */ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.css");
/* harmony import */ var _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");




class DropdownButtonComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    dropdownContentItems;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _DropdownButtonComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ dataAction: data.dataAction, avatar: data.avatar }), '.js-dropdown');
        this.dropdownContentItems = this.element.querySelector('.js-dropdown-content-container__items');
        data.items?.forEach(item => {
            const link = new _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this.dropdownContentItems, '', '', item);
            link.show();
        });
        // this.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    // /**
    //  * Функция добавления обработчика события нажатия на компонент
    //  * @param  {any} listener - Callback функция для события
    //  * @returns {void}
    //  */
    // public bindClickEvent(listener: any): void {
    //     this.element.addEventListener('click', listener.bind(this));
    // };
    handleClick(e) {
        // this.querySelector('.dropdown__content')?.classList.toggle('dropdown__content__show');
        // e.preventDefault();
        // e.stopPropagation();
        // TODO: How to check it I clicked somewhere not to this. Add transparent div and handleClick on it?
        // if (!(<HTMLElement>e.target).matches('.dropdown__button')) {
        //     const dropdownItems = document.getElementsByClassName('dropdown__content');
        //     console.log(dropdownItems);
        //
        //     for (let item of dropdownItems) {
        //         if (item.classList.contains('dropdown__content__show')) {
        //             item.classList.remove('dropdown__content__show');
        //         }
        //     }
        // }
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownButtonComponent);


/***/ }),

/***/ "./src/App/Components/FormComponent/FormComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/FormComponent/FormComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormComponent.hbs */ "./src/App/Components/FormComponent/FormComponent.hbs");
/* harmony import */ var _FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormComponent.css */ "./src/App/Components/FormComponent/FormComponent.css");
/* harmony import */ var _InputComponent_InputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputComponent/InputComponent */ "./src/App/Components/InputComponent/InputComponent.ts");
/* harmony import */ var _ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonComponent/ButtonComponent */ "./src/App/Components/ButtonComponent/ButtonComponent.ts");
/* harmony import */ var _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");
/* harmony import */ var _Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utils/Validators/Validator */ "./src/App/Utils/Validators/Validator.ts");







class FormComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    inputs;
    submitButton;
    links;
    constructor(parent, template = '', topElem = '', data) {
        super(parent, _FormComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ formId: data?.formId, enctype: data?.enctype }), '.js-form');
        const formContent = this.element.querySelector('.form__content');
        const formFooter = this.element.querySelector('.form__footer');
        this.inputs = [];
        this.links = [];
        data?.inputs.forEach(input => {
            const inputComponent = new _InputComponent_InputComponent__WEBPACK_IMPORTED_MODULE_3__["default"](formContent, '', '', input);
            inputComponent.show();
            this.inputs.push(inputComponent);
        });
        this.submitButton = new _ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__["default"](formContent, '', '', data?.button);
        this.submitButton.show();
        data?.links?.forEach(link => {
            const linkElement = new _LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_5__["default"](formFooter, '', '', link);
            linkElement.show();
            this.links.push(linkElement);
        });
    }
    ;
    // public getData(): { id: string, value: string }[] {
    //     return this.inputs.map((inputComponent) => {
    //         return inputComponent.getData();
    //     });
    // };
    validateEmptyFields(fields) {
        return fields.map(field => {
            if (field.isEmptyData()) {
                field.showErrorMsg('Пустое поле');
                return false;
            }
            field.hideErrorMsg();
            return true;
        }).every(isValid => isValid);
    }
    ;
    validatePasswordFields() {
        let isValid = true;
        const passwordField = this.findInputComponent('password');
        const repeatPasswordField = this.findInputComponent('repeat-password');
        if (passwordField) { // If exists password field
            const validatedPassword = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__.validateInput)(passwordField.getData());
            if (!validatedPassword.isValid) { // If data in password field is incorrect
                passwordField.showErrorMsg(validatedPassword.errorMsg);
                isValid = false;
            }
            else {
                passwordField.hideErrorMsg();
                isValid = true;
            }
            if (repeatPasswordField) { // If exists repeat password field
                const validatedPasswords = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__.validatePasswords)(passwordField.input.value, repeatPasswordField.input.value);
                if (!validatedPasswords.isValid) { // If passwords not match
                    repeatPasswordField.showErrorMsg(validatedPasswords.passwordErrorMsg);
                    isValid = false;
                }
                else {
                    repeatPasswordField.hideErrorMsg();
                    isValid = true;
                }
            }
        }
        return isValid;
    }
    ;
    validateInputFields() {
        let isValid = true;
        const inputFields = this.inputs.filter(inputComponent => inputComponent.input.id.toLowerCase().indexOf('password') === -1);
        if (inputFields) {
            inputFields.forEach(inputField => {
                const validatedInput = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_6__.validateInput)(inputField.getData());
                if (!validatedInput.isValid) {
                    inputField.showErrorMsg(validatedInput.errorMsg);
                    // this.submitButton.block(); // TODO: block here or in controller?
                    isValid = false;
                    return;
                }
                inputField.hideErrorMsg();
                // this.submitButton.unblock(); // TODO: unblock here or in controller? Also this block needs in validatePasswordFields
            });
        }
        return isValid;
    }
    ;
    validateWithEmpty() {
        return this.validateInputFields() && this.validatePasswordFields();
    }
    ;
    validateWithoutEmpty() {
        return this.validatePasswordFields();
    }
    ;
    setDataToFields(fieldsWithValue) {
        fieldsWithValue.forEach(({ id, value }) => {
            this.findInputComponent(id).input.value = value;
        });
    }
    findInputComponent(id) {
        return this.inputs.find(inputComponent => inputComponent.input.id === id);
    }
    ;
    bindInputsEvent(listener) {
        this.inputs.forEach((inputComponent) => {
            inputComponent.bindInputEvent(listener);
        });
    }
    ;
    bindSubmitEvent(listener) {
        this.submitButton.bindClickEvent(listener);
    }
    ;
    bindLinksEvent(listener) {
        this.links.forEach((linkComponent) => {
            linkComponent.bindClickEvent(listener);
        });
    }
    ;
    bindFileClickEvent(listener) {
        this.findInputComponent('avatar').bindClickEvent(listener);
    }
    ;
    bindCheckboxClickEvent(listener) {
        this.findInputComponent('avatar-checkbox').bindClickEvent(listener);
    }
    ;
    saveDataToStorage(key) {
        const data = {};
        this.inputs.forEach((inputComponent) => {
            data[inputComponent.input.id] = inputComponent.input.value;
        });
        localStorage.setItem(key, JSON.stringify(data));
    }
    ;
    getDataFromStorage(key) {
        const savedData = localStorage.getItem(key);
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.entries(data).forEach(([id, value]) => {
                this.findInputComponent(id).input.value = value;
            });
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormComponent);


/***/ }),

/***/ "./src/App/Components/IComponent/IComponent.ts":
/*!*****************************************************!*\
  !*** ./src/App/Components/IComponent/IComponent.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class IComponent {
    /**
     * Родительский элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    parent;
    /**
     * Корневой элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    element;
    constructor(parent, template, topElement, data) {
        this.parent = parent;
        const parser = new DOMParser();
        const element = parser.parseFromString(template, 'text/html').querySelector(topElement);
        if (!element) {
            throw Error('Невозможно найти элемент в шаблоне!');
        }
        this.element = element;
    }
    ;
    toHTMLElement() {
        return this.element;
    }
    ;
    querySelector(element) {
        return this.parent.querySelector(element);
    }
    ;
    show() {
        this.parent.appendChild(this.element);
    }
    ;
    hide() {
        this.parent.removeChild(this.element);
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IComponent);


/***/ }),

/***/ "./src/App/Components/InputComponent/InputComponent.ts":
/*!*************************************************************!*\
  !*** ./src/App/Components/InputComponent/InputComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputComponent.hbs */ "./src/App/Components/InputComponent/InputComponent.hbs");
/* harmony import */ var _InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputComponent.css */ "./src/App/Components/InputComponent/InputComponent.css");



class InputComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    input;
    inputError;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _InputComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-input-field');
        this.input = this.element.querySelector('input') || this.element;
        this.inputError = this.element.querySelector('[class*=error-msg]');
    }
    ;
    getData() {
        return { id: this.input.id, value: this.input.value };
    }
    ;
    isEmptyData() {
        return this.input.value === '';
    }
    ;
    showErrorMsg(errorMsg) {
        this.input.classList.add('input-field__input--error');
        this.inputError.innerHTML = errorMsg;
        this.inputError.classList.add('input-field__error-msg--error');
    }
    ;
    hideErrorMsg() {
        this.input.classList.remove('input-field__input--error');
        this.inputError.innerHTML = '';
        this.inputError.classList.remove('input-field__error-msg--error');
    }
    bindInputEvent(listener) {
        const input = this.toHTMLElement();
        if (input !== null) {
            input.addEventListener('input', listener.bind(this));
        }
    }
    ;
    bindClickEvent(listener) {
        this.input.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputComponent);


/***/ }),

/***/ "./src/App/Components/LinkComponent/LinkComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/LinkComponent/LinkComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkComponent.hbs */ "./src/App/Components/LinkComponent/LinkComponent.hbs");
/* harmony import */ var _LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkComponent.css */ "./src/App/Components/LinkComponent/LinkComponent.css");



class LinkComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    link;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _LinkComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-link');
        this.link = this.element.querySelector('a') || this.element;
    }
    ;
    bindClickEvent(listener) {
        this.link.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkComponent);


/***/ }),

/***/ "./src/App/Components/ListComponent/ListComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/ListComponent/ListComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListComponent.hbs */ "./src/App/Components/ListComponent/ListComponent.hbs");
/* harmony import */ var _ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListComponent.css */ "./src/App/Components/ListComponent/ListComponent.css");



class ListComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    items;
    get getElement() {
        return this.element;
    }
    ;
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ listClass: data.listClass }), '.js-list');
        this.items = Object.assign([], data.items);
        this.renderItems(data.itemClass);
    }
    ;
    renderItems(itemClass) {
        this.items.forEach(({ componentType, componentData }) => {
            const li = document.createElement('li');
            li.classList.add(itemClass || '');
            const l = new componentType(li, '', '', componentData);
            l.show();
            this.element.appendChild(li);
        });
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListComponent);


/***/ }),

/***/ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.ts":
/*!*******************************************************************************!*\
  !*** ./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalSpacerComponent.hbs */ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.hbs");
/* harmony import */ var _VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VerticalSpacerComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalSpacerComponent.css */ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.css");



class VerticalSpacerComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _VerticalSpacerComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), '.js-vertical-spacer');
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerticalSpacerComponent);


/***/ }),

/***/ "./src/App/Components/VideoComponent/VideoComponent.ts":
/*!*************************************************************!*\
  !*** ./src/App/Components/VideoComponent/VideoComponent.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _VideoComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoComponent.hbs */ "./src/App/Components/VideoComponent/VideoComponent.hbs");
/* harmony import */ var _VideoComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_VideoComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VideoComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoComponent.css */ "./src/App/Components/VideoComponent/VideoComponent.css");



class VideoComponent extends _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent, template = '', topElement = '', data) {
        super(parent, _VideoComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data), 'a');
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoComponent);


/***/ }),

/***/ "./src/App/Config/Config.ts":
/*!**********************************!*\
  !*** ./src/App/Config/Config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsrfTokenName": () => (/* binding */ CsrfTokenName),
/* harmony export */   "REQUEST_METHODS": () => (/* binding */ REQUEST_METHODS),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "customFailures": () => (/* binding */ customFailures)
/* harmony export */ });
const REQUEST_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
const CsrfTokenName = 'csrf_token';
const headersWithUnicode = {
    'Content-Type': 'application/json;charset=utf-8',
};
const headersWithEmpty = {
    'Content-Type': '',
};
const failureDefaultStatuses = {
    '400': 'Неверный запрос',
    // '401': 'No Cookie',
    // '405': 'Неверный HTTP метод',
    '500': 'Ошибка сервера',
};
const customFailures = {
    '1': 'Пользователь уже существует',
    '2': 'Неверный формат почты',
    '3': 'Пароль должен быть...',
    '4': 'Неверная почта или пароль',
    '5': 'Размер файла выше максимально допустимого',
    '6': 'Файл не является картинкой формата jpg',
    '7': 'Пользователь с этой почтой уже существует',
};
const config = {
    // host: 'http://89.208.199.170/',
    host: 'http://filmium.ru/api',
    // host: 'http://89.208.199.170:8100/api',
    api: {
        csrf: {
            url: '/user/csrf',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': '',
                },
                failure: failureDefaultStatuses,
            },
        },
        signIn: {
            url: '/user/signin',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Авторизация успешна',
                },
                failure: failureDefaultStatuses,
            },
        },
        signUp: {
            url: '/user/signup',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Регистрация успешна',
                },
                failure: failureDefaultStatuses,
            },
        },
        logout: {
            url: '/user/logout',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Пользователь вышел',
                },
                failure: failureDefaultStatuses,
            },
        },
        profile: {
            url: '/user/profile',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о пользователе успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        film: {
            url: '/films/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о фильме успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        selections: {
            url: '/selections',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Подборки успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        person: {
            url: '/persons/{:id}',
            method: REQUEST_METHODS.GET,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные о персоне успешно получены',
                },
                failure: failureDefaultStatuses,
            },
        },
        update: {
            url: '/user/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Данные успешно обновлены',
                },
                failure: failureDefaultStatuses,
            },
        },
        avatarUpdate: {
            url: '/user/avatar/update',
            method: REQUEST_METHODS.POST,
            headers: headersWithEmpty,
            statuses: {
                success: {
                    '200': 'Аватарка успешно обновлена',
                },
                failure: {
                    ...failureDefaultStatuses,
                    '413': 'Слишком большой размер файла',
                },
            },
        },
        avatarDelete: {
            url: '/user/avatar/delete',
            method: REQUEST_METHODS.POST,
            headers: headersWithUnicode,
            statuses: {
                success: {
                    '200': 'Аватарка успешно удалена',
                },
                failure: failureDefaultStatuses,
            },
        }
    }
};



/***/ }),

/***/ "./src/App/Controllers/CarouselController/CarouselController.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Controllers/CarouselController/CarouselController.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");




class CarouselController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view) {
        super(view, _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].goToPath(href);
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselController);


/***/ }),

/***/ "./src/App/Controllers/FilmController/FilmController.ts":
/*!**************************************************************!*\
  !*** ./src/App/Controllers/FilmController/FilmController.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Controllers_PlayerController_PlayerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controllers/PlayerController/PlayerController */ "./src/App/Controllers/PlayerController/PlayerController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");




class FilmController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    filmId;
    trailerSrc;
    playerController;
    constructor(view, model) {
        super(view, model);
        this.filmId = null;
        this.trailerSrc = null;
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('new-player', () => {
            this.view.playerView?.hide();
            this.view.newPlayerView();
            this.playerController = new _Controllers_PlayerController_PlayerController__WEBPACK_IMPORTED_MODULE_1__["default"](this.view.playerView);
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    async mountComponent(opts) {
        if (!opts) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].showUnknownPage();
        }
        if (!this.isMounted) {
            if (opts?.id) {
                this.filmId = opts.id;
                this.model.getFilm(this.filmId)
                    .then((data) => {
                    this.trailerSrc = data.content?.trailerURL || null;
                    this.view.fillFilm(data);
                    super.mountComponent();
                })
                    .catch((error) => {
                    _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].showUnknownPage();
                    return;
                });
            }
        }
    }
    ;
    unmountComponent() {
        if (this.isMounted) {
            this.playerController.unmountComponent();
            super.unmountComponent();
            this.filmId = null;
            this.trailerSrc = null;
        }
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].goToPath(href);
            }
            const target = e.target;
            const action = target.closest('[data-action]')?.dataset['action'];
            switch (action) {
                case 'subscribe': {
                    break;
                }
                case 'trailer': {
                    if (this.trailerSrc) {
                        this.playerController.mountComponent();
                        this.playerController.setSrc(this.trailerSrc);
                    }
                    break;
                }
                default:
                    break;
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmController);


/***/ }),

/***/ "./src/App/Controllers/HeaderController/HeaderController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/HeaderController/HeaderController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");




/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */
class HeaderController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view) {
        super(view, _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
        // TODO
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('user-changed', (user) => {
            if (user) {
                this.view.changeHeaderProfile('profile', user);
            }
            else {
                this.view.changeHeaderProfile('signIn');
            }
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('render-signInButton', () => {
            this.view.changeHeaderProfile('signIn');
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('render-profileButton', () => {
            this.view.changeHeaderProfile('profile');
        });
    }
    ;
    /**
     * Функция обработки нажатия на хедер
     * (приватное поле класса)
     * @param  {Event} e
     * @returns {void}
     */
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            this.view.hideProfile();
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].goToPath(href);
            }
            const target = e.target;
            const action = target.closest('[data-action]')?.dataset['action'];
            switch (action) {
                case 'profile': {
                    this.view.toggleProfile();
                    break;
                }
                case 'signIn': {
                    // EventDispatcher.emit('signIn');
                    break;
                }
                default:
                    break;
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderController);


/***/ }),

/***/ "./src/App/Controllers/IController/IController.ts":
/*!********************************************************!*\
  !*** ./src/App/Controllers/IController/IController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Базовый класс для контроллера компонента приложения.
 * Связывает вид с моделью
 * @class
 * @virtual
 * @param  {tView<IView>} view Вид, которым управляет контроллер
 * @param  {tModel<IModel>} model Модель, которой пользуется контроллер
 */
class IController {
    /**
     * Вид, которым управляет контроллер
     * @protected
     */
    view;
    /**
     * Модель, которой пользуется контроллер
     * @protected
     */
    model;
    /**
     * Флаг. Отображается ли данный компонент на странице
     * @protected
     */
    isMounted;
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.isMounted = false;
    }
    /**
     * Функция устрановки компонента.
     * Отрисовывает элемент и управляет им.
     * @return {void}
     */
    mountComponent() {
        if (!this.isMounted) {
            this.view.show();
            this.isMounted = true;
        }
    }
    /**
     * Функция убирания компонента.
     * Отрисовывает элемент и управляет им.
     * @return {void}
     */
    unmountComponent() {
        if (this.isMounted) {
            this.view.hide();
            this.isMounted = false;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IController);


/***/ }),

/***/ "./src/App/Controllers/MainController/MainController.ts":
/*!**************************************************************!*\
  !*** ./src/App/Controllers/MainController/MainController.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _CarouselController_CarouselController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CarouselController/CarouselController */ "./src/App/Controllers/CarouselController/CarouselController.ts");




class MainController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    carouselController;
    constructor(view, model) {
        super(view, model);
        this.carouselController = new _CarouselController_CarouselController__WEBPACK_IMPORTED_MODULE_3__["default"](this.view.carouselView);
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    async mountComponent() {
        if (!this.isMounted) {
            this.carouselController.mountComponent();
            super.mountComponent();
            this.model.selections.getSelections()
                .then((data) => {
                this.view.fillSelections(data);
                this.view.bindClickEvent(this.handleClick.bind(this));
            })
                .catch((error) => {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].showUnknownPage();
                return;
            });
        }
    }
    ;
    unmountComponent() {
        this.carouselController.unmountComponent();
        super.unmountComponent();
    }
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].goToPath(href);
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainController);


/***/ }),

/***/ "./src/App/Controllers/ModalRightController/ModalRightController.ts":
/*!**************************************************************************!*\
  !*** ./src/App/Controllers/ModalRightController/ModalRightController.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Controllers_SignInController_SignInController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Controllers/SignInController/SignInController */ "./src/App/Controllers/SignInController/SignInController.ts");
/* harmony import */ var _Controllers_SignUpController_SignUpController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Controllers/SignUpController/SignUpController */ "./src/App/Controllers/SignUpController/SignUpController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");





/**
 * Котроллер для правого модального окна
 * @category ModalRight
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента правого модального окна
 * @param  {UserModel} model Объект модели пользователя
 */
class ModalRightController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    currentController;
    constructor(view, model) {
        super(view, model);
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('modalRight-setSignIn', (userModel) => {
            this.view.currentView?.hide();
            this.view.setSignInView();
            this.currentController = new _Controllers_SignInController_SignInController__WEBPACK_IMPORTED_MODULE_1__["default"](this.view.currentView, userModel);
        });
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe('modalRight-setSignUp', (userModel) => {
            this.view.currentView?.hide();
            this.view.setSignUpView();
            this.currentController = new _Controllers_SignUpController_SignUpController__WEBPACK_IMPORTED_MODULE_2__["default"](this.view.currentView, userModel);
        });
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    mountComponent() {
        this.currentController.getFormDataFromStorage();
        this.currentController?.mountComponent();
        super.mountComponent();
    }
    ;
    unmountComponent() {
        this.currentController?.unmountComponent();
        super.unmountComponent();
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            // TODO: check only if click not on modal right, it also click on close btn (not necessary check it?)
            const modalContent = e.target.closest('.modal__content');
            if (!modalContent) {
                this.currentController.saveFormDataToStorage();
                this.unmountComponent();
                _Router_Router__WEBPACK_IMPORTED_MODULE_4__["default"].goToPath(_Router_Router__WEBPACK_IMPORTED_MODULE_4__["default"].getNearestNotAuthUrl());
            }
        }
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalRightController);


/***/ }),

/***/ "./src/App/Controllers/NotFoundController/NotFoundController.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Controllers/NotFoundController/NotFoundController.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");




class NotFoundController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view) {
        super(view, _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindHomeButtonClick(this.handleClick.bind(this));
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_3__["default"].goToPath(href);
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundController);


/***/ }),

/***/ "./src/App/Controllers/PersonController/PersonController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/PersonController/PersonController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");



class PersonController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    personId;
    constructor(view, model) {
        super(view, model);
        this.personId = null;
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
        this.view.bindClickEvent(this.handleClick.bind(this));
    }
    ;
    async mountComponent(opts) {
        if (!opts) {
            _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].showUnknownPage();
        }
        if (!this.isMounted) {
            if (opts?.id) {
                this.personId = opts.id;
                this.model.getPerson(this.personId)
                    .then((data) => {
                    this.view.fillPerson(data);
                    super.mountComponent();
                })
                    .catch((error) => {
                    _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].showUnknownPage();
                    return;
                });
            }
        }
    }
    ;
    unmountComponent() {
        if (this.isMounted) {
            super.unmountComponent();
            this.personId = null;
        }
    }
    ;
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const href = e.target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].goToPath(href);
            }
            return;
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonController);


/***/ }),

/***/ "./src/App/Controllers/PlayerController/PlayerController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/PlayerController/PlayerController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/IModel/IModel */ "./src/App/Models/IModel/IModel.ts");


class PlayerController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    isDragging;
    isVolumeDragging;
    videoTime;
    videoTimeMinutes;
    videoTimeSeconds;
    currentVolume;
    previousVolume;
    constructor(view) {
        super(view, _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
        this.addEventListeners();
        this.isDragging = false;
        this.videoTime = 0;
        this.videoTimeMinutes = 0;
        this.videoTimeSeconds = 0;
        this.currentVolume = 0.5;
        this.previousVolume = 0;
    }
    ;
    addEventListeners() {
        this.view.video.addEventListener('canplay', this.initVideo.bind(this)); // ?
        this.view.playStopContainer.addEventListener('click', this.onPlayButtonClick.bind(this));
        this.view.muteUnmuteContainer.addEventListener('click', this.onVolumeClick.bind(this));
        this.view.video.addEventListener('timeupdate', this.updateTime.bind(this));
        this.view.videoBar.bindMouseDownEvent(this.onBarMouseDown.bind(this));
        this.view.videoBar.bindMouseUpEvent(this.onBarMouseUp.bind(this));
        this.view.videoBar.bindMouseMoveEvent(this.onBarMouseMove.bind(this));
        this.view.videoBar.bindMouseOutEvent(this.onBarMouseOut.bind(this));
        this.view.volumeBar.bindMouseDownEvent(this.onVolumeMouseDown.bind(this));
        this.view.volumeBar.bindMouseUpEvent(this.onVolumeMouseUp.bind(this));
        this.view.volumeBar.bindMouseMoveEvent(this.onVolumeMouseMove.bind(this));
        this.view.volumeBar.bindMouseOutEvent(this.onVolumeMouseOut.bind(this));
    }
    ;
    removeEventListeners() {
    }
    ;
    setSrc(src) {
        this.view.video.src = src;
    }
    ;
    percentageToTime(percentage) {
        return (percentage / 100) * this.view.video.duration;
    }
    ;
    timeToPercentage(time) {
        return (time / this.view.video.duration) * 100;
    }
    ;
    percentageToVolume(percentage) {
        return percentage / 100;
    }
    volumeToPercentage(volume) {
        return volume * 100;
    }
    ;
    timeToTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    }
    ;
    onPlayButtonClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            if (this.view.video.paused) {
                this.playVideo();
            }
            else {
                this.stopVideo();
            }
            return;
        }
    }
    ;
    initVideo() {
        this.view.videoBar.updateCurrentBar(this.timeToPercentage(this.view.video.currentTime));
        this.view.video.volume = 0.5;
        this.videoTime = this.view.video.duration;
        this.videoTimeMinutes = Math.floor(this.videoTime / 60);
        this.videoTimeSeconds = Math.floor(this.videoTime % 60);
        this.updateTime();
        this.updateVolume();
    }
    ;
    playVideo() {
        this.view.video.play();
        this.view.toggleVideoStatus(true);
    }
    ;
    stopVideo() {
        this.view.video.pause();
        this.view.toggleVideoStatus(false);
    }
    ;
    updateTime() {
        this.view.videoBar.updateCurrentBar(this.timeToPercentage(this.view.video.currentTime));
        this.view.time.innerHTML = `${this.timeToTime(this.view.video.currentTime)}/${this.videoTimeMinutes}:${this.videoTimeSeconds}`;
    }
    ;
    updateVolume() {
        this.view.volumeBar.updateCurrentBar(this.volumeToPercentage(this.view.video.volume));
        if (this.view.video.volume < 0.01) {
            this.view.toggleVolumeStatus(false);
        }
        else {
            this.view.toggleVolumeStatus(true);
        }
    }
    muteVolume() {
        // Math.abs(a - b) < tolerance;
        if (this.view.video.volume < 0.01) {
            this.view.video.volume = this.previousVolume;
            this.updateVolume();
            this.view.toggleVolumeStatus(true);
        }
        else {
            this.previousVolume = this.view.video.volume;
            this.view.video.volume = 0;
            this.updateVolume();
            this.view.toggleVolumeStatus(false);
        }
    }
    ;
    onVolumeClick(e) {
        e.preventDefault();
        this.muteVolume();
    }
    ;
    onVolumeMouseDown(e) {
        this.isVolumeDragging = true;
        const floorPercentage = Math.floor(this.view.volumeBar.calculatePercentage(e.clientX));
        const boundedPercentage = floorPercentage < 0 ? 0 : Math.min(floorPercentage, 100);
        this.view.video.volume = this.percentageToVolume(boundedPercentage);
        this.updateVolume();
    }
    ;
    onVolumeMouseUp(e) {
        this.isVolumeDragging = false;
    }
    ;
    onVolumeMouseMove(e) {
        const cursorX = e.clientX;
        const percentage = this.view.volumeBar.calculatePercentage(cursorX);
        const floorPercentage = Math.floor(percentage);
        const boundedPercentage = floorPercentage < 0 ? 0 : Math.min(floorPercentage, 100);
        this.view.volumeBar.barHelper.div.style.left = `${percentage}%`;
        this.view.volumeBar.barHelper.div.innerText = `${boundedPercentage}%`;
        this.view.volumeBar.barHelper.show();
        this.view.volumeBar.currentBarCircle.show();
        if (this.isDragging) {
            this.view.video.volume = this.percentageToVolume(percentage);
            this.updateVolume();
        }
    }
    ;
    onVolumeMouseOut(e) {
        if (this.view.volumeBar.checkHelper()) {
            this.view.volumeBar.barHelper.hide();
        }
        if (this.view.volumeBar.checkCircle()) {
            this.view.volumeBar.currentBarCircle.hide();
        }
    }
    ;
    onBarMouseDown(e) {
        this.isDragging = true;
        this.view.video.currentTime = this.percentageToTime(this.view.videoBar.calculatePercentage(e.clientX));
        this.updateTime();
    }
    ;
    onBarMouseUp(e) {
        this.isDragging = false;
    }
    ;
    onBarMouseMove(e) {
        const cursorX = e.clientX;
        const percentage = this.view.videoBar.calculatePercentage(cursorX);
        this.view.videoBar.barHelper.div.style.left = `${percentage}%`;
        this.view.videoBar.barHelper.div.innerText = this.timeToTime(this.percentageToTime(percentage)); // TODO change trailer time
        this.view.videoBar.barHelper.show();
        this.view.videoBar.currentBarCircle.show();
        if (this.isDragging) {
            // EventDispatcher.emit('bar_update-progress', percentage);
            this.view.videoBar.updateCurrentBar(percentage);
        }
    }
    ;
    onBarMouseOut(e) {
        if (this.view.videoBar.checkHelper()) {
            this.view.videoBar.barHelper.hide();
        }
        if (this.view.videoBar.checkCircle()) {
            this.view.videoBar.currentBarCircle.hide();
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerController);


/***/ }),

/***/ "./src/App/Controllers/SettingsController/SettingsController.ts":
/*!**********************************************************************!*\
  !*** ./src/App/Controllers/SettingsController/SettingsController.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/Validators/Validator */ "./src/App/Utils/Validators/Validator.ts");




/**
 * Котроллер для
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 */
class SettingsController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.form.bindFileClickEvent(this.onFileClick.bind(this));
        this.view.form.bindCheckboxClickEvent(this.onCheckboxClick.bind(this));
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
    }
    ;
    mountComponent() {
        if (!this.isMounted) {
            const user = this.model.getCurrentUser();
            if (!user) {
                return;
            }
            this.view.show({ user: user });
            this.isMounted = true;
        }
    }
    ;
    onFileClick(e) {
        e.stopPropagation();
    }
    ;
    onCheckboxClick(e) {
        e.stopPropagation();
    }
    ;
    validate() {
        const emailComponent = this.view.form.findInputComponent('email');
        const passwordComponent = this.view.form.findInputComponent('password');
        const repeatPasswordComponent = this.view.form.findInputComponent('repeat-password');
        // const email = emailComponent.input.value;
        const password = passwordComponent.input.value;
        const repeatPassword = repeatPasswordComponent.input.value;
        const validateEmail = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_3__.validateInput)(emailComponent.getData());
        if (!validateEmail.isValid) {
            emailComponent.showErrorMsg(validateEmail.errorMsg);
            return false;
        }
        if (password !== '') {
            if (password !== repeatPassword) {
                passwordComponent.showErrorMsg('');
                repeatPasswordComponent.showErrorMsg('Пароли не совпадают');
                return false;
            }
            const validatedPassword = (0,_Utils_Validators_Validator__WEBPACK_IMPORTED_MODULE_3__.validateInput)(passwordComponent.getData());
            if (!validatedPassword.isValid) {
                passwordComponent.showErrorMsg('');
                repeatPasswordComponent.showErrorMsg(validatedPassword.errorMsg);
                return false;
            }
            passwordComponent.hideErrorMsg();
            repeatPasswordComponent.hideErrorMsg();
        }
        return true;
    }
    handleClick(e) {
        e.preventDefault();
        if (this.isMounted) {
            const target = e.target;
            const href = target.closest('[href]')?.getAttribute('href');
            if (href !== undefined && href !== null) {
                _Router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].goToPath(href);
            }
            const button = target.closest('#save-submit-btn');
            if (button !== undefined && button !== null) {
                if (!this.validate()) {
                    return;
                }
                const userData = {
                    email: this.view.form.findInputComponent('email').input.value,
                    date_birth: '2000-Jan-01',
                    password: this.view.form.findInputComponent('password').input.value,
                };
                const fileInput = this.view.form.findInputComponent('avatar').input;
                const formData = new FormData();
                const file = fileInput.files && fileInput.files[0];
                if (file) {
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        this.view.form.findInputComponent('repeat-password').showErrorMsg('Нельзя удалить и поставить аватарку!');
                        return;
                    }
                    else {
                        formData.append('avatar', file);
                        this.model.avatarUpdate(formData)
                            .then(() => {
                            this.view.form.inputs.forEach((inputComponent) => {
                                inputComponent.hideErrorMsg();
                            });
                        })
                            .catch(({ msg }) => {
                            this.view.form.findInputComponent('avatar').showErrorMsg(msg);
                        });
                        return;
                    }
                }
                else {
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        this.model.avatarDelete()
                            .then(() => {
                        })
                            .catch((errorMsg) => {
                        });
                        return;
                    }
                }
                this.model.updateUser(userData)
                    .then(() => {
                    this.view.form.inputs.forEach((inputComponent) => {
                        inputComponent.hideErrorMsg();
                    });
                })
                    .catch(({ msg }) => {
                    this.view.form.findInputComponent('email').showErrorMsg(msg);
                });
                // this.model.avatarUpdate(formData);
            }
            return;
        }
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsController);


/***/ }),

/***/ "./src/App/Controllers/SignInController/SignInController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/SignInController/SignInController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/RouterPaths */ "./src/App/Router/RouterPaths.ts");



/**
 * Котроллер для
 * @category SignIn
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 * @param  {UserModel} model Объект модели пользователя
 */
class SignInController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        this.view.form.bindSubmitEvent(this.onSubmit.bind(this));
        this.view.form.bindLinksEvent(this.onRedirect.bind(this));
    }
    ;
    validateFormFields() {
        const emailField = this.view.form.findInputComponent('email');
        const passwordField = this.view.form.findInputComponent('password');
        if (!emailField || !passwordField) {
            throw Error('Fields dont exists');
        }
        return this.view.form.validateEmptyFields([emailField, passwordField]);
    }
    ;
    onInput(e) {
        e.preventDefault();
        if (this.isMounted) {
        }
    }
    ;
    onSubmit(e) {
        e.preventDefault();
        if (this.isMounted) {
            this.view.form.bindInputsEvent(this.onInput.bind(this));
            const button = e.target.closest('.signIn-button');
            if (button.classList.contains('button--disabled')) { // TODO: check if disabled
                return;
            }
            if (!this.validateFormFields()) {
                return;
            }
            const userSignIn = {
                email: this.view.form.findInputComponent('email').input.value,
                password: this.view.form.findInputComponent('password').input.value,
            };
            this.model.signInUser(userSignIn).then(() => {
                _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(_Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__["default"].main);
            }).catch((errorMsg) => {
                this.view.form.findInputComponent('email').showErrorMsg('');
                this.view.form.findInputComponent('password').showErrorMsg(errorMsg);
            });
        }
    }
    ;
    onRedirect(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.isMounted) {
            const target = e.target;
            const href = target.closest('[href]').getAttribute('href') || '';
            this.saveFormDataToStorage();
            _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(href);
        }
    }
    ;
    saveFormDataToStorage() {
        this.view.form.saveDataToStorage('SignInData');
    }
    ;
    getFormDataFromStorage() {
        this.view.form.getDataFromStorage('SignInData');
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInController);


/***/ }),

/***/ "./src/App/Controllers/SignUpController/SignUpController.ts":
/*!******************************************************************!*\
  !*** ./src/App/Controllers/SignUpController/SignUpController.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IController_IController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IController/IController */ "./src/App/Controllers/IController/IController.ts");
/* harmony import */ var _Router_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Router/Router */ "./src/App/Router/Router.ts");
/* harmony import */ var _Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Router/RouterPaths */ "./src/App/Router/RouterPaths.ts");



/**
 * Котроллер для
 * @category SignUp
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента
 * @param  {UserModel} model Объект модели пользователя
 */
class SignUpController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        this.view.form.bindSubmitEvent(this.onSubmit.bind(this));
        this.view.form.bindLinksEvent(this.onRedirect.bind(this));
    }
    ;
    onInput(e) {
        e.preventDefault();
        if (this.isMounted) {
            const isValid = this.view.form.validateWithEmpty();
            if (!isValid) {
                this.view.form.submitButton.block();
            }
            else {
                this.view.form.submitButton.unblock();
            }
        }
    }
    ;
    onSubmit(e) {
        e.preventDefault();
        if (this.isMounted) {
            this.view.form.bindInputsEvent(this.onInput.bind(this));
            const button = e.target.closest('.signUp-button');
            if (button.classList.contains('button--disabled')) { // TODO: check if disabled
                return;
            }
            if (!this.view.form.validateWithEmpty()) { // TODO: check if valid, but if valid always disabled. Useless check?
                return;
            }
            const userSignUp = {
                email: this.view.form.findInputComponent('email').input.value,
                password: this.view.form.findInputComponent('password').input.value,
                date_birth: '2000-Jan-01',
            };
            this.model.signUpUser(userSignUp).then(() => {
                _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(_Router_RouterPaths__WEBPACK_IMPORTED_MODULE_2__["default"].main);
            }).catch((errorMsg) => {
                this.view.form.findInputComponent('repeat-password').showErrorMsg(errorMsg);
            });
        }
    }
    ;
    onRedirect(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.isMounted) {
            const target = e.target;
            const href = target.closest('[href]').getAttribute('href') || '';
            this.saveFormDataToStorage();
            _Router_Router__WEBPACK_IMPORTED_MODULE_1__["default"].goToPath(href);
        }
    }
    ;
    saveFormDataToStorage() {
        this.view.form.saveDataToStorage('SignUpData');
    }
    ;
    getFormDataFromStorage() {
        this.view.form.getDataFromStorage('SignUpData');
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpController);


/***/ }),

/***/ "./src/App/EventDispatcher/EventDispatcher.ts":
/*!****************************************************!*\
  !*** ./src/App/EventDispatcher/EventDispatcher.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Класс работы с событиями приложения (cинглтон)
 * @class
 * @category EventDispatcher
 */
class EventDispatcher {
    /**
     * Хранилище эвентов
     * (Приватное поле класса)
     * @type {Map<string, Array<Function>>}
     */
    events;
    constructor() {
        this.events = new Map;
    }
    ;
    /**
     * Функция подписки на событие
     * @param  {string} eventName - Имя события
     * @param  {Function} callback - Действие, которое нужно выполнить при срабатывании события
     * @return {void}
     */
    subscribe(eventName, callback) {
        const callbackList = this.events.get(eventName);
        if (!callbackList) {
            this.events.set(eventName, [callback]);
            return;
        }
        callbackList.push(callback);
    }
    ;
    /**
     * Функция отписки от события
     * @param  {string} eventName - Имя события
     * @param  {Function} callback - Действие, которое нужно было выполнить при срабатывании события
     * @return {void}
     */
    unsubscribe(eventName, callback) {
        const callbackList = this.events.get(eventName);
        if (!callbackList) {
            return;
        }
        this.events.set(eventName, callbackList
            .filter((func) => {
            return func !== callback;
        }));
    }
    ;
    /**
     * Функция вызова события
     * @param  {string} eventName - Имя события
     * @param  {?any} data - Данные, которые нужно передать в функцию-обработчик
     * @return {void}
     */
    emit(eventName, data) {
        this.events.get(eventName)?.forEach(callback => {
            callback(data);
        });
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventDispatcher());


/***/ }),

/***/ "./src/App/Models/FilmModel/FilmModel.ts":
/*!***********************************************!*\
  !*** ./src/App/Models/FilmModel/FilmModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");



class FilmModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }
    ;
    parseFilm(json) {
        return {
            id: json.id,
            contentURL: json.content_url,
            content: this.parseContentForFilm(json.content),
        };
    }
    ;
    parseContentForFilm(content) {
        return {
            id: content.id,
            title: content.title,
            description: content.description,
            rating: content.rating,
            year: content.year,
            persons: this.parsePersonsForFilm(content.persons_roles),
            isFree: content.is_free,
            ageLimit: content.age_limit,
            trailerURL: content.trailer_url,
            previewURL: content.preview_url,
            type: content.type,
        };
    }
    ;
    parsePersonsForFilm(personsWithRoles) {
        return personsWithRoles.map((personWithRole) => {
            return this.parsePersonForFilm(personWithRole);
        });
    }
    ;
    parsePersonForFilm(personWithRole) {
        return {
            id: personWithRole.person.id,
            name: personWithRole.person.name,
            role: personWithRole.role.title,
        };
    }
    ;
    getFilmActors(persons) {
        const actorRole = { id: 0, title: 'ACTOR' };
        return persons.filter(person => person.role === actorRole.title);
    }
    getFilmDirectors(persons) {
        const directorRole = { id: 0, title: 'DIRECTOR' };
        return persons.filter(person => person.role === directorRole.title);
    }
    async getFilm(id) {
        let conf = Object.assign({}, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.film);
        conf.url = conf.url.replace('{:id}', id.toString());
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(conf);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, conf);
        const filmData = this.parseFilm(response.responseBody.body.film);
        if (filmData.content) {
            filmData.content.actors = this.getFilmActors(filmData.content.persons || []);
            filmData.content.directors = this.getFilmDirectors(filmData.content.persons || []);
        }
        return Promise.resolve(filmData);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmModel);


/***/ }),

/***/ "./src/App/Models/IModel/IModel.ts":
/*!*****************************************!*\
  !*** ./src/App/Models/IModel/IModel.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Базовый класс для модели.
 * Выполняет бизнес логику и работает с данными и сетью.
 * @class
 * @virtual
 */
class IModel {
    constructor() { }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IModel);


/***/ }),

/***/ "./src/App/Models/PersonModel/PersonModel.ts":
/*!***************************************************!*\
  !*** ./src/App/Models/PersonModel/PersonModel.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");



class PersonModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    genderMap = {
        F: 'Женский',
        M: 'Мужской',
    };
    roleMap = {
        DIRECTOR: 'Режиссёр',
        COMPOSER: 'Композитор',
        DESIGN: 'Дизайнер',
        EDITOR: 'Редактор',
        ACTOR: 'Актёр',
        OPERATOR: 'Оператор',
        PRODUCER: 'Продюссер',
        WRITER: 'Сценарист',
    };
    constructor() {
        super();
    }
    ;
    parsePerson(json) {
        return {
            id: json.id,
            name: json.name,
            gender: this.transformGender(json.gender),
            genres: this.parseGenres(json.genres),
            growth: json.growth,
            birthPlace: json.birthplace,
            avatarURL: json.avatar_url,
            age: json.age,
            roles: this.parsePersonRoles(json.roles),
            participatedIn: this.parseParticipatedContents(json.participated_in),
        };
    }
    ;
    parseGenres(genres) {
        return genres.map((genre) => {
            return this.parseGenre(genre);
        });
    }
    ;
    parseGenre(genre) {
        return {
            id: genre.id,
            name: genre.name,
        };
    }
    ;
    parsePersonRoles(roles) {
        return roles.map((role) => {
            return this.parsePersonRole(role);
        });
    }
    ;
    parsePersonRole(role) {
        return {
            id: role.id,
            title: this.transformRole(role.title),
        };
    }
    ;
    parseParticipatedContents(contents) {
        return contents.map((content) => {
            return this.parseParticipatedContent(content);
        });
    }
    ;
    parseParticipatedContent(content) {
        return {
            id: content.id,
            title: content.title,
        };
    }
    ;
    transformGender(gender) {
        return this.genderMap[gender];
    }
    ;
    transformRole(role) {
        return this.roleMap[role];
    }
    ;
    async getPerson(id) {
        let conf = Object.assign({}, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.person);
        conf.url = conf.url.replace('{:id}', id.toString());
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(conf);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, conf);
        const personData = await this.parsePerson(response.responseBody.body.person);
        return Promise.resolve(personData);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonModel);


/***/ }),

/***/ "./src/App/Models/SelectionModel/SelectionModel.ts":
/*!*********************************************************!*\
  !*** ./src/App/Models/SelectionModel/SelectionModel.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");



class SelectionModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
    }
    ;
    parseSelections(json) {
        return json.map((selection) => {
            return this.parseSelection(selection);
        });
    }
    parseSelection(selection) {
        return {
            id: selection.id,
            title: selection.title,
            content: this.parseSelectionContents(selection.content),
        };
    }
    ;
    parseSelectionContents(selectionContents) {
        return selectionContents.map((selectionContent) => {
            return this.parseSelectionContent(selectionContent);
        });
    }
    ;
    parseSelectionContent(selectionContent) {
        return {
            id: selectionContent.id,
            title: selectionContent.title,
            description: selectionContent.description,
            rating: selectionContent.rating,
            year: selectionContent.year,
            isFree: selectionContent.is_free,
            ageLimit: selectionContent.age_limit,
            trailerURL: selectionContent.trailer_url,
            previewURL: selectionContent.preview_url,
            type: selectionContent.type,
        };
    }
    ;
    async getSelections() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_2__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.config.api.selections);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_2__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_1__.config.api.selections);
        const selectionData = this.parseSelections(response.responseBody.body.selections);
        return Promise.resolve(selectionData);
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectionModel);


/***/ }),

/***/ "./src/App/Models/UserModel/UserModel.ts":
/*!***********************************************!*\
  !*** ./src/App/Models/UserModel/UserModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IModel/IModel */ "./src/App/Models/IModel/IModel.ts");
/* harmony import */ var _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ajax/Ajax */ "./src/App/Ajax/Ajax.ts");
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Config/Config */ "./src/App/Config/Config.ts");
/* harmony import */ var _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../EventDispatcher/EventDispatcher */ "./src/App/EventDispatcher/EventDispatcher.ts");




class UserModel extends _IModel_IModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    currentUser;
    constructor() {
        super();
        this.currentUser = null;
    }
    ;
    parseUser(json) {
        return {
            email: json.email,
            birthDate: json.date_birth,
            avatar: json.avatar_url,
        };
    }
    ;
    getCurrentUser() {
        return this.currentUser;
    }
    ;
    async signInUser(signData) {
        const signInResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn, JSON.stringify(signData));
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(signInResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
        }
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        if (this.currentUser === null)
            return Promise.reject(signInResponse.responseBody.message);
    }
    ;
    async signUpUser(signData) {
        const signUpResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signUp, JSON.stringify(signData));
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(signUpResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signUp);
            const signInResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn, JSON.stringify(signData));
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(signInResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.signIn);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
        }
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        if (this.currentUser === null) {
            return Promise.reject(signUpResponse.responseBody.message);
        }
    }
    ;
    async logoutUser() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.logout);
        await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.logout);
        this.currentUser = null;
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
    }
    ;
    async updateUser(user) {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.update, JSON.stringify(user));
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.update);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        }
        catch {
            if (response.status === 400) {
                const customStatus = response.responseBody.status.toString();
                return Promise.reject({
                    msg: _Config_Config__WEBPACK_IMPORTED_MODULE_2__.customFailures[customStatus],
                });
            }
            return Promise.reject();
        }
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
    }
    ;
    async avatarUpdate(formData) {
        // const response = await Ajax.ajax(config.api.avatarUpdate, JSON.stringify(formData));
        // console.log(response)
        //
        // try {
        //     await Ajax.checkResponseStatus(response, config.api.avatarUpdate);
        //     console.log('response', response)
        //
        //     const profileResponse = await Ajax.ajax(config.api.profile);
        //     console.log('profileResponse', profileResponse);
        //     await Ajax.checkResponseStatus(profileResponse, config.api.profile);
        //
        //     this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
        //     console.log('currentUser', this.currentUser);
        // }
        // catch {
        //     return Promise.reject();
        // }
        const request = new XMLHttpRequest();
        request.open("POST", _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.host + _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.avatarUpdate.url, false);
        request.withCredentials = true;
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].getCsrfTokenFromServer();
        request.setRequestHeader('csrf-token', response.body['csrf-token']);
        request.send(formData);
        if (request.status === 200) {
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        }
        else {
            if (request.status === 413) {
                return Promise.reject({
                    msg: 'Слишком большой размер файла',
                });
            }
            if (request.status === 400) {
                const customStatus = response.responseBody.status.toString();
                return Promise.reject({
                    msg: _Config_Config__WEBPACK_IMPORTED_MODULE_2__.customFailures[customStatus],
                });
            }
            return Promise.reject();
        }
    }
    ;
    async avatarDelete() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.avatarDelete);
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.avatarDelete);
            const profileResponse = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(profileResponse, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
            _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"].emit('user-changed', this.currentUser);
        }
        catch {
            return Promise.reject();
        }
    }
    ;
    async authUserByCookie() {
        const response = await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(_Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
        try {
            await _Ajax_Ajax__WEBPACK_IMPORTED_MODULE_1__["default"].checkResponseStatus(response, _Config_Config__WEBPACK_IMPORTED_MODULE_2__.config.api.profile);
            this.currentUser = this.parseUser(response.responseBody.body.user);
        }
        catch {
            this.currentUser = null;
            return Promise.reject();
        }
        // EventDispatcher.emit('user-changed', this.currentUser); TODO: need?
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);


/***/ }),

/***/ "./src/App/Router/Router.ts":
/*!**********************************!*\
  !*** ./src/App/Router/Router.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RouterPaths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterPaths */ "./src/App/Router/RouterPaths.ts");

class Router {
    routes;
    unknownPageHandler;
    nearestNotAuthUrl;
    constructor() {
        this.routes = [];
        this.unknownPageHandler = () => { };
        this.nearestNotAuthUrl = _RouterPaths__WEBPACK_IMPORTED_MODULE_0__["default"].main;
    }
    ;
    start(entryPath) {
        history.replaceState({ path: entryPath }, '', entryPath);
        window.addEventListener('popstate', (e) => {
            e.preventDefault();
            this.route();
        });
        this.route();
    }
    ;
    goToPath(path) {
        history.pushState({ path: path }, '', path);
        this.route();
    }
    ;
    route() {
        const rawPath = history.state?.path;
        if (!rawPath) {
            return;
        }
        const path = this.sanitizeUrl(rawPath);
        const tmpPath = '/' + path;
        if (tmpPath !== _RouterPaths__WEBPACK_IMPORTED_MODULE_0__["default"].signIn && tmpPath !== _RouterPaths__WEBPACK_IMPORTED_MODULE_0__["default"].signUp) {
            this.nearestNotAuthUrl = path;
        }
        const foundedPath = this.routes.find(({ rule, handler }) => {
            const match = path.match(rule);
            if (match) {
                handler(match.slice(1));
            }
            return match;
        });
        if (!foundedPath) {
            this.unknownPageHandler();
            return;
        }
    }
    ;
    showUnknownPage() {
        this.unknownPageHandler();
    }
    ;
    setUnknownPageHandler(handler) {
        this.unknownPageHandler = handler;
    }
    ;
    addRule(rule, handler) {
        const newRoute = {
            rule: this.parseRule(rule),
            handler: handler,
        };
        this.routes.push(newRoute);
        return newRoute;
    }
    removeRule(rule) {
        const index = this.routes.findIndex((route) => route.rule.source === this.parseRule(rule).source);
        if (index > -1) {
            this.routes.splice(index, 1);
        }
    }
    ;
    getNearestNotAuthUrl() {
        return this.nearestNotAuthUrl;
    }
    ;
    parseRule(rule) {
        let uri = this.sanitizeUrl(rule)
            .replace(/{\:number}/g, '(\\d+)')
            .replace(/{\:word}/g, '(\\w+)')
            .replace(/{\:\w+}/g, '(\\w+)');
        return new RegExp(`^${uri}$`, 'i');
    }
    sanitizeUrl(rule) {
        return rule.replace(/\/$/, '').replace(/^\//, '');
    }
    ;
}
const router = new Router();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./src/App/Router/RouterPaths.ts":
/*!***************************************!*\
  !*** ./src/App/Router/RouterPaths.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Конфигурация URL адресов приложения
 * @category Router
 * @constant {Object}
 * @param {{name: string, URL: string}} Структура конфигурации
 */
const paths = {
    main: '/',
    catalog: '/catalog',
    store: '/store',
    myMovie: '/my-movie',
    settings: '/settings',
    signIn: '/signIn',
    signUp: '/signUp',
    logout: '/logout',
    films: '/films/{:id}',
    persons: '/persons/{:id}',
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paths);


/***/ }),

/***/ "./src/App/Utils/Validators/Validator.ts":
/*!***********************************************!*\
  !*** ./src/App/Utils/Validators/Validator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateInput": () => (/* binding */ validateInput),
/* harmony export */   "validatePasswords": () => (/* binding */ validatePasswords)
/* harmony export */ });
/* harmony import */ var _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidatorConfig */ "./src/App/Utils/Validators/ValidatorConfig.ts");

const unknownValidator = {
    isValid: false,
    errorMsg: 'Неизвестный тип поля',
};
const validValidator = {
    isValid: true,
    errorMsg: '',
};
// const emptyValidator: ValidatorResult = {
//     isValid:      false,
//     errorMsg:     'Пустое поле',
// }
function validateInput(input) {
    if (input.id === 'avatar') {
        return validValidator;
    }
    const validator = _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(input.id);
    if (!validator) {
        return unknownValidator;
    }
    const isValid = validator.regExp.test(input.value);
    if (!isValid) {
        return { isValid: false, errorMsg: validator.errorMsg };
    }
    return validValidator;
}
function validatePasswords(password, repeatPassword) {
    const validatedPassword = validateInput({ id: 'password', value: password });
    if (!validatedPassword.isValid) {
        return { isValid: false, errorMsg: validatedPassword.errorMsg, passwordErrorMsg: _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get('repeat-password')?.errorMsg };
    }
    if (password !== repeatPassword) {
        return { isValid: false, errorMsg: validatedPassword.errorMsg, passwordErrorMsg: _ValidatorConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get('repeat-password')?.errorMsg };
    }
    return { isValid: true, errorMsg: '' };
}



/***/ }),

/***/ "./src/App/Utils/Validators/ValidatorConfig.ts":
/*!*****************************************************!*\
  !*** ./src/App/Utils/Validators/ValidatorConfig.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const validators = new Map([
    [
        'email',
        {
            regExp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            errorMsg: 'Введённый email имеет некорректный вид'
        },
    ],
    [
        'password',
        {
            regExp: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
            errorMsg: 'Пароль должен содержать минимум 8 символов, включая одну цифру'
        },
    ],
    [
        'repeat-password',
        {
            regExp: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
            errorMsg: 'Пароли должны совпадать',
        },
    ],
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validators);


/***/ }),

/***/ "./src/App/Views/CarouselView/CarouselView.ts":
/*!****************************************************!*\
  !*** ./src/App/Views/CarouselView/CarouselView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _CarouselView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselView.hbs */ "./src/App/Views/CarouselView/CarouselView.hbs");
/* harmony import */ var _CarouselView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CarouselView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CarouselViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselViewConfig */ "./src/App/Views/CarouselView/CarouselViewConfig.ts");
/* harmony import */ var _CarouselView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselView.css */ "./src/App/Views/CarouselView/CarouselView.css");
/* harmony import */ var _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/ListComponent/ListComponent */ "./src/App/Components/ListComponent/ListComponent.ts");





class CarouselView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    list;
    constructor(parent) {
        super(parent, _CarouselView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.js-carousel');
        const div = document.createElement('div');
        this.list = new _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_4__["default"](div, '', '', _CarouselViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].list);
        this.list.show();
        this.element.firstElementChild?.after(div);
    }
    ;
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselView);


/***/ }),

/***/ "./src/App/Views/CarouselView/CarouselViewConfig.ts":
/*!**********************************************************!*\
  !*** ./src/App/Views/CarouselView/CarouselViewConfig.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_VideoComponent_VideoComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/VideoComponent/VideoComponent */ "./src/App/Components/VideoComponent/VideoComponent.ts");

const CarouselData = {
    list: {
        listClass: 'carousel__list',
        itemClass: 'carousel-list__item',
        items: [
            {
                componentData: { href: '/films/11', src: '/img/test/2.jpg' },
                componentType: _Components_VideoComponent_VideoComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
            },
            {
                componentData: { href: '/films/63', src: '/img/test/1.jpg' },
                componentType: _Components_VideoComponent_VideoComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
            },
            {
                componentData: { href: '/films/95', src: '/img/test/3.jpg' },
                componentType: _Components_VideoComponent_VideoComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
            },
        ],
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselData);


/***/ }),

/***/ "./src/App/Views/FilmView/FilmView.ts":
/*!********************************************!*\
  !*** ./src/App/Views/FilmView/FilmView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilmView.hbs */ "./src/App/Views/FilmView/FilmView.hbs");
/* harmony import */ var _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FilmView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilmView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilmView.css */ "./src/App/Views/FilmView/FilmView.css");
/* harmony import */ var _PlayerView_PlayerView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlayerView/PlayerView */ "./src/App/Views/PlayerView/PlayerView.ts");
/* harmony import */ var _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilmViewConfig */ "./src/App/Views/FilmView/FilmViewConfig.ts");





/**
 * Отображение фильма приложения
 * @category Film
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class FilmView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    playerView;
    trailerButton;
    subscribeButton;
    constructor(parent) {
        super(parent, _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.film');
    }
    ;
    newPlayerView() {
        this.playerView = new _PlayerView_PlayerView__WEBPACK_IMPORTED_MODULE_3__["default"](this.parent.parentElement);
    }
    ;
    hide() {
        this.playerView = null;
        super.hide();
    }
    fillFilm(data) {
        this.element.innerHTML = _FilmView_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data);
        this.renderButtons();
    }
    ;
    renderButtons() {
        const buttonsContainer = this.element.querySelector('.film-content__buttons');
        this.trailerButton = (new _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].trailerButton.componentType(buttonsContainer, '', '', _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].trailerButton.componentData));
        this.trailerButton.show();
        this.subscribeButton = (new _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].subscribeButton.componentType(buttonsContainer, '', '', _FilmViewConfig__WEBPACK_IMPORTED_MODULE_4__["default"].subscribeButton.componentData));
        this.subscribeButton.show();
    }
    ;
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmView);


/***/ }),

/***/ "./src/App/Views/FilmView/FilmViewConfig.ts":
/*!**************************************************!*\
  !*** ./src/App/Views/FilmView/FilmViewConfig.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/ButtonComponent/ButtonComponent */ "./src/App/Components/ButtonComponent/ButtonComponent.ts");

const FilmData = {
    trailerButton: {
        componentData: {
            text: 'Оформить подписку',
            className: 'subscribe-button',
            dataAction: 'subscribe',
        },
        componentType: _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    subscribeButton: {
        componentData: {
            text: 'Трейлер',
            className: 'subscribe-button',
            dataAction: 'trailer',
        },
        componentType: _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilmData);


/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderView.hbs */ "./src/App/Views/HeaderView/HeaderView.hbs");
/* harmony import */ var _HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderView.css */ "./src/App/Views/HeaderView/HeaderView.css");
/* harmony import */ var _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderViewConfig */ "./src/App/Views/HeaderView/HeaderViewConfig.ts");




/**
 * Отображение хедера приложения
 * @category Header
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для хедера
 */
class HeaderView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    leftSide;
    rightSide;
    profile;
    actionsList;
    currentActiveItem;
    constructor(parent) {
        super(parent, _HeaderView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.js-header-container');
        // Initialize fields
        this.leftSide = this.element.querySelector('.js-header-container__left');
        this.rightSide = this.element.querySelector('.js-header-container__right');
        this.profile = this.element.querySelector('.js-user-profile');
        // Render components
        _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].leftItems.forEach(({ componentType, componentData }) => {
            const component = new componentType(this.leftSide, '', '', componentData);
            component.show();
        });
        this.actionsList = (new _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].actionsList.componentType(this.leftSide, '', '', _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].actionsList.componentData));
        this.actionsList.show();
        this.currentActiveItem = null;
        _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"].rightItems.forEach(({ componentType, componentData }) => {
            const component = new componentType(this.rightSide, '', '', componentData);
            component.show();
        });
        this.rightSide.removeChild(this.profile);
        this.rightSide.appendChild(this.profile);
    }
    ;
    changeActiveHeaderListItem(href) {
        const listElement = this.actionsList.getElement;
        listElement.querySelector(`[href="${this.currentActiveItem}"]`)?.parentElement?.classList.remove('active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('active');
    }
    ;
    /**
     * Функция изменения элемента в хэдере
     * @param  {string} profileItemName - название элемента
     * @param  {any} data - Данные, необходимые для отрисовки элемента
     * @returns {void}
     */
    changeHeaderProfile(profileItemName, data) {
        if (!(profileItemName in _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"])) {
            return;
        }
        const component = _HeaderViewConfig__WEBPACK_IMPORTED_MODULE_3__["default"][profileItemName];
        this.profile.innerHTML = '';
        if (data?.avatar) {
            component.componentData.avatar = data.avatar;
        }
        const profileItem = new component.componentType(this.profile, '', '', component.componentData);
        profileItem.show();
    }
    ;
    toggleProfile() {
        this.profile.querySelector('.js-dropdown__content')?.classList.toggle('dropdown__content__show');
    }
    ;
    hideProfile() {
        this.profile.querySelector('.js-dropdown__content')?.classList.remove('dropdown__content__show');
    }
    ;
    /**
     * Функция добавления обработчика события нажатия на хедер
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderView);


/***/ }),

/***/ "./src/App/Views/HeaderView/HeaderViewConfig.ts":
/*!******************************************************!*\
  !*** ./src/App/Views/HeaderView/HeaderViewConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");
/* harmony import */ var _Components_VerticalSpacerComponent_VerticalSpacerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/VerticalSpacerComponent/VerticalSpacerComponent */ "./src/App/Components/VerticalSpacerComponent/VerticalSpacerComponent.ts");
/* harmony import */ var _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/ButtonComponent/ButtonComponent */ "./src/App/Components/ButtonComponent/ButtonComponent.ts");
/* harmony import */ var _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/ListComponent/ListComponent */ "./src/App/Components/ListComponent/ListComponent.ts");
/* harmony import */ var _Components_DropdownButtonComponent_DropdownButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/DropdownButtonComponent/DropdownButtonComponent */ "./src/App/Components/DropdownButtonComponent/DropdownButtonComponent.ts");
/* harmony import */ var _Components_Css_HeaderActionList_HeaderActionList_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Css/HeaderActionList/HeaderActionList.css */ "./src/App/Components/Css/HeaderActionList/HeaderActionList.css");
/* harmony import */ var _Components_Css_HeaderProfileDropdown_HeaderProfileDropdown_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css */ "./src/App/Components/Css/HeaderProfileDropdown/HeaderProfileDropdown.css");
/* harmony import */ var _Components_Css_HeaderSignIn_HeaderSignIn_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/Css/HeaderSignIn/HeaderSignIn.css */ "./src/App/Components/Css/HeaderSignIn/HeaderSignIn.css");








;
const HeaderData = {
    leftItems: [
        {
            componentData: {
                linkHref: '/',
                linkClass: 'logo',
                linkImageSrc: '/img/logo/logo.svg',
                linkImageWidth: '40px',
            },
            componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
        },
    ],
    actionsList: {
        componentData: {
            listClass: 'header-container__action-list',
            itemClass: 'header-container-action',
            items: [
                {
                    componentData: {
                        linkHref: '/',
                        linkClass: 'header-container-action__link',
                        linkText: 'Главная',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
                {
                    componentData: {
                        linkHref: '/catalog',
                        linkClass: 'header-container-action__link',
                        linkText: 'Каталог',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
                {
                    componentData: {
                        linkHref: '/store',
                        linkClass: 'header-container-action__link',
                        linkText: 'Магазин',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
                {
                    componentData: {
                        linkHref: '/my-movie',
                        linkClass: 'header-container-action__link',
                        linkText: 'Моё',
                        linkTextClass: 'header-container-action-link__text',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
                },
            ],
        },
        componentType: _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
    rightItems: [
        {
            componentData: {
                linkHref: '#',
                linkClass: 'search',
                linkImageSrc: '/img/icons/search.svg',
                linkImageWidth: '24px',
            },
            componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
        },
        {
            componentData: {
                size: '24',
            },
            componentType: _Components_VerticalSpacerComponent_VerticalSpacerComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
        },
        {
            componentData: {
                text: 'Купить подписку',
                className: 'subscribe-button',
            },
            componentType: _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
        },
        {
            componentData: {
                size: '24',
            },
            componentType: _Components_VerticalSpacerComponent_VerticalSpacerComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
        },
    ],
    profile: {
        componentData: {
            dataAction: 'profile',
            avatar: '/img/profile/profile.jpg',
            items: [
                {
                    linkHref: '/settings',
                    linkClass: 'profile-link',
                    linkImageSrc: '/img/icons/settings.svg',
                    linkImageClass: 'profile-link__image',
                    linkImageWidth: '24px',
                    linkText: 'Настройки',
                    linkTextClass: 'profile-link__text',
                },
            ],
        },
        componentType: _Components_DropdownButtonComponent_DropdownButtonComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    },
    signIn: {
        componentData: {
            dataAction: 'signIn',
            linkHref: '/signIn',
            linkClass: 'header__signIn-link',
            linkImageSrc: '/img/icons/circle-user.svg',
            linkImageWidth: '30px',
            linkText: 'Войти',
        },
        componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderData);


/***/ }),

/***/ "./src/App/Views/IView/IView.ts":
/*!**************************************!*\
  !*** ./src/App/Views/IView/IView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Базовый класс для отображения компонента приложения
 * @class
 * @param {HTMLElement} parent - родительский элемент для отображения
 */
class IView {
    /**
     * Родительский элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    parent;
    /**
     * Корневой элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    element;
    constructor(parent, template, topElement) {
        this.parent = parent;
        const parser = new DOMParser();
        const element = parser.parseFromString(template, 'text/html').querySelector(topElement);
        if (!element) {
            throw Error('Can not find element from template!');
        }
        this.element = element;
    }
    ;
    /**
     * Функция для отрисовки вида
     * @method
     * @returns {void}
     */
    show() {
        this.parent.appendChild(this.element);
    }
    ;
    /**
     * Функция для скрытия вида
     * @method
     * @returns {void}
     */
    hide() {
        this.parent.removeChild(this.element);
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IView);


/***/ }),

/***/ "./src/App/Views/MainView/MainView.ts":
/*!********************************************!*\
  !*** ./src/App/Views/MainView/MainView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _MainView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.hbs */ "./src/App/Views/MainView/MainView.hbs");
/* harmony import */ var _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainView.css */ "./src/App/Views/MainView/MainView.css");
/* harmony import */ var _CarouselView_CarouselView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CarouselView/CarouselView */ "./src/App/Views/CarouselView/CarouselView.ts");




class MainView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    carouselView;
    article; // TODO how to update content not render all page
    constructor(parent) {
        super(parent, _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.categories');
        this.article = document.createElement('article');
        this.article.classList.add('news');
        this.carouselView = new _CarouselView_CarouselView__WEBPACK_IMPORTED_MODULE_3__["default"](this.article);
        this.carouselView.show();
    }
    ;
    fillSelections(selections) {
        this.parent.innerHTML = _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ selections: selections }); // TODO how to update content not render all page
        this.element = this.parent.querySelector('.categories');
        this.parent.prepend(this.article);
    }
    ;
    bindClickEvent(listener) {
        this.element.querySelectorAll('img.category__container__item-image').forEach((element) => {
            element.addEventListener('click', listener.bind(this));
        });
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainView);


/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightView.ts":
/*!********************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightView.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalRightView.hbs */ "./src/App/Views/ModalRightView/ModalRightView.hbs");
/* harmony import */ var _ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalRightViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalRightViewConfig */ "./src/App/Views/ModalRightView/ModalRightViewConfig.ts");
/* harmony import */ var _ModalRightView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalRightView.css */ "./src/App/Views/ModalRightView/ModalRightView.css");
/* harmony import */ var _SignInView_SignInView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SignInView/SignInView */ "./src/App/Views/SignInView/SignInView.ts");
/* harmony import */ var _SignUpView_SignUpView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SignUpView/SignUpView */ "./src/App/Views/SignUpView/SignUpView.ts");






/**
 * Отображение правого модального окна
 * @category ModalRight
 * @extends {IView}
 * @param {HTMLElement} parent - родительский элемент для правого модального окна
 */
class ModalRightView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    modalBody;
    currentView;
    constructor(parent) {
        super(parent, _ModalRightView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ title: _ModalRightViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].title }), '.js-modal__area');
        this.modalBody = this.element.querySelector('.js-modal__body');
        this.currentView = null;
    }
    ;
    setSignInView() {
        this.currentView = new _SignInView_SignInView__WEBPACK_IMPORTED_MODULE_4__["default"](this.modalBody);
    }
    ;
    setSignUpView() {
        this.currentView = new _SignUpView_SignUpView__WEBPACK_IMPORTED_MODULE_5__["default"](this.modalBody);
    }
    ;
    show() {
        this.parent.classList.add('modal--right--open');
        super.show();
    }
    ;
    hide() {
        this.parent.classList.remove('modal--right--open');
        setTimeout(() => {
            this.currentView = null;
            super.hide();
        }, 200);
    }
    ;
    /**
     * Функция добавления обработчика события нажатия на
     * @param  {any} listener - Callback функция для события
     * @returns {void}
     */
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalRightView);


/***/ }),

/***/ "./src/App/Views/ModalRightView/ModalRightViewConfig.ts":
/*!**************************************************************!*\
  !*** ./src/App/Views/ModalRightView/ModalRightViewConfig.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
;
const ModalRightData = {
    title: 'Вход или регистрация',
    // signInView: SignInView,
    // signUpView: SignUpView,
    // signInData: SignInData,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalRightData);


/***/ }),

/***/ "./src/App/Views/NotFoundView/NotFoundView.ts":
/*!****************************************************!*\
  !*** ./src/App/Views/NotFoundView/NotFoundView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _NotFoundView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFoundView.hbs */ "./src/App/Views/NotFoundView/NotFoundView.hbs");
/* harmony import */ var _NotFoundView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NotFoundView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NotFoundView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFoundView.css */ "./src/App/Views/NotFoundView/NotFoundView.css");
/* harmony import */ var _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/ButtonComponent/ButtonComponent */ "./src/App/Components/ButtonComponent/ButtonComponent.ts");




class NotFoundView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    homeButton;
    constructor(parent) {
        super(parent, _NotFoundView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.space');
        const container = this.element.querySelector('.js-space__error');
        this.homeButton = new _Components_ButtonComponent_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__["default"](container, '', '', { className: 'home-button', text: 'Вернуться на главную' });
        this.homeButton.show();
    }
    ;
    bindHomeButtonClick(listener) {
        this.homeButton.bindClickEvent(listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundView);


/***/ }),

/***/ "./src/App/Views/PersonView/PersonView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/PersonView/PersonView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonView.hbs */ "./src/App/Views/PersonView/PersonView.hbs");
/* harmony import */ var _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PersonView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PersonView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonView.css */ "./src/App/Views/PersonView/PersonView.css");



class PersonView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent) {
        super(parent, _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.person');
    }
    ;
    fillPerson(data) {
        this.element.innerHTML = _PersonView_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data);
    }
    ;
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonView);


/***/ }),

/***/ "./src/App/Views/PlayerView/PlayerView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/PlayerView/PlayerView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerView.hbs */ "./src/App/Views/PlayerView/PlayerView.hbs");
/* harmony import */ var _PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlayerView_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerView.css */ "./src/App/Views/PlayerView/PlayerView.css");
/* harmony import */ var _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");
/* harmony import */ var _Components_BarComponent_BarComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/BarComponent/BarComponent */ "./src/App/Components/BarComponent/BarComponent.ts");
/* harmony import */ var _PlayerViewConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerViewConfig */ "./src/App/Views/PlayerView/PlayerViewConfig.ts");






class PlayerView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    video;
    videoPanel;
    videoBar;
    volumeContainer;
    volumeBar;
    playStopContainer;
    playButton;
    stopButton;
    muteUnmuteContainer;
    muteButton;
    unmuteButton;
    time;
    constructor(parent) {
        super(parent, _PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '#fullscreen-modal');
        this.video = this.element.querySelector('video');
        this.videoPanel = this.element.querySelector('.video__panel');
        this.videoPanel.prepend(this.renderVideoBar());
        this.renderVolumeBar();
        this.initPlayButtons();
        this.stopButton.show();
        this.initVolumeButtons();
        this.unmuteButton.show();
        this.time = this.element.querySelector('.video__duration-time');
    }
    ;
    initPlayButtons() {
        this.playStopContainer = this.element.querySelector('.video__play-button');
        this.playButton = new _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this.playStopContainer, '', '', _PlayerViewConfig__WEBPACK_IMPORTED_MODULE_5__["default"].playButton);
        this.stopButton = new _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this.playStopContainer, '', '', _PlayerViewConfig__WEBPACK_IMPORTED_MODULE_5__["default"].stopButton);
    }
    ;
    initVolumeButtons() {
        this.muteUnmuteContainer = this.element.querySelector('.video__volume');
        this.muteButton = new _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this.muteUnmuteContainer, '', '', _PlayerViewConfig__WEBPACK_IMPORTED_MODULE_5__["default"].muteVolume);
        this.unmuteButton = new _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_3__["default"](this.muteUnmuteContainer, '', '', _PlayerViewConfig__WEBPACK_IMPORTED_MODULE_5__["default"].unmuteVolume);
    }
    ;
    toggleVideoStatus(isPlay) {
        if (isPlay) {
            this.playButton.hide();
            this.stopButton.show();
        }
        else {
            this.stopButton.hide();
            this.playButton.show();
        }
    }
    ;
    toggleVolumeStatus(isMute) {
        if (isMute) {
            try {
                this.muteButton.hide();
                this.unmuteButton.show();
            }
            catch {
            }
        }
        else {
            try {
                this.unmuteButton.hide();
                this.muteButton.show();
            }
            catch {
            }
        }
    }
    ;
    renderVideoBar() {
        const div = document.createElement('div');
        this.videoBar = new _Components_BarComponent_BarComponent__WEBPACK_IMPORTED_MODULE_4__["default"](div, '', '', { barClass: 'video__bar' });
        this.videoBar.show();
        return div;
    }
    ;
    renderVolumeBar() {
        this.volumeContainer = this.element.querySelector('.video__icon')?.parentElement;
        this.volumeBar = new _Components_BarComponent_BarComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.volumeContainer, '', '', { barClass: 'video__volume-bar' });
        this.volumeBar.show();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerView);


/***/ }),

/***/ "./src/App/Views/PlayerView/PlayerViewConfig.ts":
/*!******************************************************!*\
  !*** ./src/App/Views/PlayerView/PlayerViewConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PlayerData = {
    playButton: {
        linkImageSrc: '/img/icons/player/play-circle.svg',
        linkImageWidth: '32px',
    },
    stopButton: {
        linkImageSrc: '/img/icons/player/pause-circle.svg',
        linkImageWidth: '32px',
    },
    muteVolume: {
        linkImageSrc: '/img/icons/player/volume-mute.svg',
        linkImageWidth: '32px',
    },
    unmuteVolume: {
        linkImageSrc: '/img/icons/player/volume-up.svg',
        linkImageWidth: '32px',
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerData);


/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsView.ts":
/*!****************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsView.hbs */ "./src/App/Views/SettingsView/SettingsView.hbs");
/* harmony import */ var _SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsViewConfig */ "./src/App/Views/SettingsView/SettingsViewConfig.ts");
/* harmony import */ var _SettingsView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsView.css */ "./src/App/Views/SettingsView/SettingsView.css");
/* harmony import */ var _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/FormComponent/FormComponent */ "./src/App/Components/FormComponent/FormComponent.ts");





class SettingsView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    leftMenuContainer;
    settingsFormContainer;
    leftMenu;
    currentActiveItem;
    form;
    constructor(parent) {
        super(parent, _SettingsView_hbs__WEBPACK_IMPORTED_MODULE_1___default()(_SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"]), 'main');
        this.leftMenuContainer = this.element.querySelector('.js-settings__left-menu-container');
        this.settingsFormContainer = this.element.querySelector('.js-settings__form');
        this.leftMenu = (new _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].leftMenu.componentType(this.leftMenuContainer, '', '', _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].leftMenu.componentData));
        this.leftMenu.show();
        this.currentActiveItem = null;
        this.form = new _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.settingsFormContainer, '', '', _SettingsViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].formData);
        this.form.show();
    }
    ;
    changeActiveLeftMenuItem(href) {
        const listElement = this.leftMenu.getElement;
        listElement.querySelector(`[href="${this.currentActiveItem}"]`)?.parentElement?.classList.remove('settings-left-menu__item--active');
        this.currentActiveItem = href;
        listElement.querySelector(`[href="${href}"]`)?.parentElement?.classList.add('settings-left-menu__item--active');
    }
    ;
    show(opts) {
        if (!opts)
            return;
        this.form.setDataToFields([{ id: 'email', value: opts.user.email }]);
        super.show();
    }
    ;
    bindClickEvent(listener) {
        this.element.addEventListener('click', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsView);


/***/ }),

/***/ "./src/App/Views/SettingsView/SettingsViewConfig.ts":
/*!**********************************************************!*\
  !*** ./src/App/Views/SettingsView/SettingsViewConfig.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/ListComponent/ListComponent */ "./src/App/Components/ListComponent/ListComponent.ts");
/* harmony import */ var _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/LinkComponent/LinkComponent */ "./src/App/Components/LinkComponent/LinkComponent.ts");


const SettingsData = {
    title: 'Настройки',
    description: 'Оставьте контактные данные для получения уведомлений от сервиса и взаимодействия со службой поддержки.',
    formTitle: 'Контакты',
    leftMenu: {
        componentData: {
            listClass: 'settings__left-menu',
            itemClass: 'settings-left-menu__item',
            items: [
                {
                    componentData: {
                        linkHref: '/settings',
                        linkClass: 'settings-left-menu-item__link',
                        linkText: 'Основные',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                },
                {
                    componentData: {
                        linkHref: '/settings/payments',
                        linkClass: 'settings-left-menu-item__link',
                        linkText: 'Оплата услуг',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                },
                {
                    componentData: {
                        linkHref: '/settings/subscriptions',
                        linkClass: 'settings-left-menu-item__link',
                        linkText: 'Подписки',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                },
                {
                    componentData: {
                        linkHref: '/logout',
                        linkClass: 'settings-left-menu-item__link',
                        linkImageSrc: '/img/icons/logout.svg',
                        linkImageClass: '',
                        linkImageWidth: 24,
                        linkText: 'Выйти',
                    },
                    componentType: _Components_LinkComponent_LinkComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
                }
            ]
        },
        componentType: _Components_ListComponent_ListComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    },
    formData: {
        formId: 'settings__form',
        enctype: true,
        inputs: [
            {
                inputClass: 'input-field__input--dark',
                type: 'email',
                id: 'email',
                placeholder: 'vasiliy.pupkin@mail.ru',
            },
            {
                type: 'file',
                id: 'avatar',
                accept: 'image/jpeg',
            },
            {
                type: 'checkbox',
                id: 'avatar-checkbox',
                checkboxText: 'Удалить аватарку?',
                class: 'input-checkbox'
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'password',
                placeholder: '********',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'repeat-password',
                placeholder: '********',
            }
        ],
        button: {
            id: 'save-submit-btn',
            text: 'Сохранить',
            className: 'save-button'
        },
        links: [],
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsData);


/***/ }),

/***/ "./src/App/Views/SignInView/SignInView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/SignInView/SignInView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _SignInView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInView.hbs */ "./src/App/Views/SignInView/SignInView.hbs");
/* harmony import */ var _SignInView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SignInView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignInViewConfig */ "./src/App/Views/SignInView/SignInViewConfig.ts");
/* harmony import */ var _SignInView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignInView.css */ "./src/App/Views/SignInView/SignInView.css");
/* harmony import */ var _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/FormComponent/FormComponent */ "./src/App/Components/FormComponent/FormComponent.ts");





class SignInView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    form;
    constructor(parent) {
        super(parent, _SignInView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ title: _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].title, description: _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].description }), '.js-signIn');
        this.form = new _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.element, '', '', _SignInViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].formData);
        this.form.show();
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInView);


/***/ }),

/***/ "./src/App/Views/SignInView/SignInViewConfig.ts":
/*!******************************************************!*\
  !*** ./src/App/Views/SignInView/SignInViewConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
;
const SignInData = {
    title: 'Войдите или зарегистрируйтесь',
    description: 'Чтобы начать пользоваться серависом Filmium',
    formData: {
        formId: 'signIn__form',
        inputs: [
            {
                inputClass: 'input-field__input--dark',
                type: 'email',
                id: 'email',
                placeholder: 'vasiliy.pupkin@mail.ru',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'password',
                placeholder: '********',
            },
        ],
        button: {
            id: 'signIn-submit-btn',
            text: 'Войти',
            className: 'signIn-button'
        },
        links: [
            {
                id: 'link-signUp',
                linkHref: '/signUp',
                linkText: 'Нет аккаунта? Зарегистрироваться',
                linkTextClass: 'signUp-link'
            },
        ],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInData);


/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpView.ts":
/*!************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IView_IView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IView/IView */ "./src/App/Views/IView/IView.ts");
/* harmony import */ var _SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpView.hbs */ "./src/App/Views/SignUpView/SignUpView.hbs");
/* harmony import */ var _SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpViewConfig */ "./src/App/Views/SignUpView/SignUpViewConfig.ts");
/* harmony import */ var _SignUpView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignUpView.css */ "./src/App/Views/SignUpView/SignUpView.css");
/* harmony import */ var _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/FormComponent/FormComponent */ "./src/App/Components/FormComponent/FormComponent.ts");





class SignUpView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    form;
    constructor(parent) {
        super(parent, _SignUpView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ title: _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].title, description: _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].description }), '.js-signUp');
        this.form = new _Components_FormComponent_FormComponent__WEBPACK_IMPORTED_MODULE_4__["default"](this.element, '', '', _SignUpViewConfig__WEBPACK_IMPORTED_MODULE_2__["default"].formData);
        this.form.show();
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpView);


/***/ }),

/***/ "./src/App/Views/SignUpView/SignUpViewConfig.ts":
/*!******************************************************!*\
  !*** ./src/App/Views/SignUpView/SignUpViewConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
;
const SignUpData = {
    title: 'Войдите или зарегистрируйтесь',
    description: 'Чтобы начать пользоваться серависом Filmium',
    formData: {
        formId: 'signUp__form',
        inputs: [
            {
                inputClass: 'input-field__input--dark',
                type: 'email',
                id: 'email',
                placeholder: 'vasiliy.pupkin@mail.ru',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'password',
                placeholder: '********',
            },
            {
                inputClass: 'input-field__input--dark',
                type: 'password',
                id: 'repeat-password',
                placeholder: '********',
            },
        ],
        button: {
            id: 'signUp-submit-btn',
            text: 'Войти',
            className: 'signUp-button'
        },
        links: [
            {
                id: 'link-signIn',
                linkHref: '/signIn',
                linkText: 'Есть аккаунт? Войти',
                linkTextClass: 'signIn-link'
            },
        ],
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpData);


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/App */ "./src/App/App.ts");

const app = new _App_App__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.run(location.pathname);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUM1QixnQkFBZ0IsZ0RBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC9CYXNlQ29tcG9uZW50LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0J1dHRvbkNvbXBvbmVudC9CdXR0b25Db21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvRGl2Q29tcG9uZW50L0RpdkNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L0Zvcm1Db21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvSW5wdXRDb21wb25lbnQvSW5wdXRDb21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0xpc3RDb21wb25lbnQvTGlzdENvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9WaWRlb0NvbXBvbmVudC9WaWRlb0NvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvQ2Fyb3VzZWxWaWV3L0Nhcm91c2VsVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvRmlsbVZpZXcvRmlsbVZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvTWFpblZpZXcvTWFpblZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01vZGFsUmlnaHRWaWV3L01vZGFsUmlnaHRWaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Ob3RGb3VuZFZpZXcvTm90Rm91bmRWaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QZXJzb25WaWV3L1BlcnNvblZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BsYXllclZpZXcvUGxheWVyVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2V0dGluZ3NWaWV3L1NldHRpbmdzVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnbkluVmlldy9TaWduSW5WaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduVXBWaWV3L1NpZ25VcFZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9lYWNoLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9pZi5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvZy5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL3dpdGguanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaW50ZXJuYWwvY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9pbnRlcm5hbC93cmFwSGVscGVyLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0FwcC5jc3M/MDZlYSIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnQuY3NzPzQ3NWEiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CYXNlQ29tcG9uZW50L0Jhc2VDb21wb25lbnQuY3NzP2YxMDkiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CdXR0b25Db21wb25lbnQvQnV0dG9uQ29tcG9uZW50LmNzcz82MTk4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ3NzL0hlYWRlckFjdGlvbkxpc3QvSGVhZGVyQWN0aW9uTGlzdC5jc3M/ODM1NyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Nzcy9IZWFkZXJQcm9maWxlRHJvcGRvd24vSGVhZGVyUHJvZmlsZURyb3Bkb3duLmNzcz9mMmEyIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ3NzL0hlYWRlclNpZ25Jbi9IZWFkZXJTaWduSW4uY3NzPzViYWEiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5jc3M/OGY2ZiIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Zvcm1Db21wb25lbnQvRm9ybUNvbXBvbmVudC5jc3M/N2Y1ZCIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0lucHV0Q29tcG9uZW50L0lucHV0Q29tcG9uZW50LmNzcz83NTA3Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50LmNzcz81OWE2Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlzdENvbXBvbmVudC9MaXN0Q29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50L1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50LmNzcz80NGU4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvVmlkZW9Db21wb25lbnQvVmlkZW9Db21wb25lbnQuY3NzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0Nhcm91c2VsVmlldy9DYXJvdXNlbFZpZXcuY3NzP2Y2Y2MiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvRmlsbVZpZXcvRmlsbVZpZXcuY3NzPzRmZDgiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvSGVhZGVyVmlldy9IZWFkZXJWaWV3LmNzcz8xNzQ5Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01haW5WaWV3L01haW5WaWV3LmNzcz9mZDUyIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01vZGFsUmlnaHRWaWV3L01vZGFsUmlnaHRWaWV3LmNzcz81NmIyIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL05vdEZvdW5kVmlldy9Ob3RGb3VuZFZpZXcuY3NzPzg3ZTAiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvUGVyc29uVmlldy9QZXJzb25WaWV3LmNzcz9jNjFkIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BsYXllclZpZXcvUGxheWVyVmlldy5jc3M/M2U3NSIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TZXR0aW5nc1ZpZXcvU2V0dGluZ3NWaWV3LmNzcz81NThjIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NpZ25JblZpZXcvU2lnbkluVmlldy5jc3M/ZmQ0ZCIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduVXBWaWV3L1NpZ25VcFZpZXcuY3NzPzhjNjkiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQWpheC9BamF4LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0FwcC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CYXNlQ29tcG9uZW50L0Jhc2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CdXR0b25Db21wb25lbnQvQnV0dG9uQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvRGl2Q29tcG9uZW50L0RpdkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Ryb3Bkb3duQnV0dG9uQ29tcG9uZW50L0Ryb3Bkb3duQnV0dG9uQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvRm9ybUNvbXBvbmVudC9Gb3JtQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvSUNvbXBvbmVudC9JQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvSW5wdXRDb21wb25lbnQvSW5wdXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9MaW5rQ29tcG9uZW50L0xpbmtDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9MaXN0Q29tcG9uZW50L0xpc3RDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL1ZpZGVvQ29tcG9uZW50L1ZpZGVvQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbmZpZy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvQ2Fyb3VzZWxDb250cm9sbGVyL0Nhcm91c2VsQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9GaWxtQ29udHJvbGxlci9GaWxtQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9IZWFkZXJDb250cm9sbGVyL0hlYWRlckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvTW9kYWxSaWdodENvbnRyb2xsZXIvTW9kYWxSaWdodENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvTm90Rm91bmRDb250cm9sbGVyL05vdEZvdW5kQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9QZXJzb25Db250cm9sbGVyL1BlcnNvbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvUGxheWVyQ29udHJvbGxlci9QbGF5ZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL1NldHRpbmdzQ29udHJvbGxlci9TZXR0aW5nc0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvU2lnbkluQ29udHJvbGxlci9TaWduSW5Db250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL1NpZ25VcENvbnRyb2xsZXIvU2lnblVwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9FdmVudERpc3BhdGNoZXIvRXZlbnREaXNwYXRjaGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL01vZGVscy9GaWxtTW9kZWwvRmlsbU1vZGVsLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL01vZGVscy9JTW9kZWwvSU1vZGVsLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL01vZGVscy9QZXJzb25Nb2RlbC9QZXJzb25Nb2RlbC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWwvU2VsZWN0aW9uTW9kZWwudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvTW9kZWxzL1VzZXJNb2RlbC9Vc2VyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvUm91dGVyL1JvdXRlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Sb3V0ZXIvUm91dGVyUGF0aHMudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVXRpbHMvVmFsaWRhdG9ycy9WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVXRpbHMvVmFsaWRhdG9ycy9WYWxpZGF0b3JDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvQ2Fyb3VzZWxWaWV3L0Nhcm91c2VsVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9DYXJvdXNlbFZpZXcvQ2Fyb3VzZWxWaWV3Q29uZmlnLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0ZpbG1WaWV3L0ZpbG1WaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0ZpbG1WaWV3L0ZpbG1WaWV3Q29uZmlnLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9IZWFkZXJWaWV3L0hlYWRlclZpZXdDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvSVZpZXcvSVZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvTWFpblZpZXcvTWFpblZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvTW9kYWxSaWdodFZpZXcvTW9kYWxSaWdodFZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvTW9kYWxSaWdodFZpZXcvTW9kYWxSaWdodFZpZXdDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvTm90Rm91bmRWaWV3L05vdEZvdW5kVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QZXJzb25WaWV3L1BlcnNvblZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvUGxheWVyVmlldy9QbGF5ZXJWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BsYXllclZpZXcvUGxheWVyVmlld0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TZXR0aW5nc1ZpZXcvU2V0dGluZ3NWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NldHRpbmdzVmlldy9TZXR0aW5nc1ZpZXdDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnbkluVmlldy9TaWduSW5WaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NpZ25JblZpZXcvU2lnbkluVmlld0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduVXBWaWV3L1NpZ25VcFZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnblVwVmlldy9TaWduVXBWaWV3Q29uZmlnLnRzIiwid2VicGFjazovL2ZpbG1pdW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlsbWl1bS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9maWxtaXVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWxtaXVtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmlsbWl1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbG1pdW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiYmFyQ2xhc3NcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYmFyQ2xhc3NcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImJhckNsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxMn0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjI2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCIganMtYmFyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYmFyIHctMTAwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJhcl9fZnVsbFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJfX2xvYWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhci1sb2FkX19wcm9ncmVzc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJhcl9fY3VycmVudFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJiYXJfX2hlbHBlclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJiYXJfX2N1cnJlbnQtY2lyY2xlXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJyb290IGpzLXJvb3RcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXIganMtaGVhZGVyXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudCBqcy1jb250ZW50XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyIGpzLWZvb3RlclxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0LW1vZGFsIGpzLXJpZ2h0LW1vZGFsXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgbW9kYWwtLXJpZ2h0IGpzLW1vZGFsLS1yaWdodFxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgaWQ9XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoyN30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjM1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBkYXRhLWFjdGlvbj1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkYXRhQWN0aW9uXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRhdGFBY3Rpb25cIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImRhdGFBY3Rpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjIzN30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjI1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwianMtYnV0dG9uIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVwcGVyQ2xhc3NcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidXBwZXJDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidXBwZXJDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MjJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjozOH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0NH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgY2xhc3M9XFxcImdyYWRpZW50LWJ1dHRvbiBncmFkaWVudC1idXR0b24tLWJsdWUgXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY2xhc3NOYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY2xhc3NOYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo5MH0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjEwNX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIG5vcm1hbC10ZXh0IHAtMTBcXFwiIHN0eWxlPVxcXCItLWNvb3JkLXk6IDQyLjhweDsgLS1kaWFtZXRlci1oaWdobGlnaHQ6IDI2NC4zMDhweDstLWNvb3JkLXg6IDcwLjMzNzVweDtcXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkYXRhQWN0aW9uXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjIwNX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjI2MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJncmFkaWVudC1idXR0b25fX2JvcmRlciBqcy1ncmFkaWVudC1idXR0b25fX2JvcmRlclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JhZGllbnQtYnV0dG9uX190ZXh0XFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0ZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQ0fSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NTR9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyM319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0ZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjI1fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIGRhdGEtYWN0aW9uPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRhdGFBY3Rpb25cIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGF0YUFjdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZGF0YUFjdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6NjZ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo4Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBqcy1kcm9wZG93blxcXCIgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRhdGFBY3Rpb25cIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzR9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo5MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bl9fYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImRyb3Bkb3duLWJ1dHRvbl9faW1hZ2VcXFwiIHNyYz1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJhdmF0YXJcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYXZhdGFyXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImF2YXRhclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NDl9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo2MX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPC9hPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bl9fY29udGVudCBqcy1kcm9wZG93bl9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50X19jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnQtY29udGFpbmVyX19pdGVtcyBqcy1kcm9wZG93bi1jb250ZW50LWNvbnRhaW5lcl9faXRlbXNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiIGVuY3R5cGU9XFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiIFwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxmb3JtIGlkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImZvcm1JZFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJmb3JtSWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZm9ybUlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxMH0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjIyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJmb3JtIGpzLWZvcm1cXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJlbmN0eXBlXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjQ1fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6OTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtX19jb250ZW50IGpzLWZvcm1fX2NvbnRlbnRcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtX19mb290ZXJcXFwiPjwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBhY2NlcHQ9XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiYWNjZXB0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFjY2VwdFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiYWNjZXB0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoxNDJ9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoxNTJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY2hlY2tib3hUZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNoZWNrYm94VGV4dFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiY2hlY2tib3hUZXh0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjoyNn0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjQ0fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCIgXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImlucHV0LWZpZWxkIGpzLWlucHV0LWZpZWxkIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6Mzl9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo1MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInR5cGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MTd9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoyN319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBpZD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjozM30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjQxfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJwbGFjZWhvbGRlclwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJwbGFjZWhvbGRlclwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwicGxhY2Vob2xkZXJcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjU2fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NzN9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkX19pbnB1dCBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpbnB1dENsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlucHV0Q2xhc3NcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlucHV0Q2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjEwMX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjExN319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWNjZXB0XCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjExOX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjE2MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgLz5cXHJcXG4gICAgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNoZWNrYm94VGV4dFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NTJ9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgIDxkaXYgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6MTN9LFwiZW5kXCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjoyMX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiLW1zZ1xcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkX19lcnJvci1tc2dcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIGlkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTh9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyNn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgaHJlZj1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaW5rSHJlZlwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaW5rSHJlZlwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwibGlua0hyZWZcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjU5fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6NzN9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIGRhdGEtYWN0aW9uPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRhdGFBY3Rpb25cIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGF0YUFjdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZGF0YUFjdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTUyfSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTY4fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgIDxzcGFuIGNsYXNzPVxcXCJsaW5rX19pbWFnZSBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaW5rSW1hZ2VDbGFzc1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaW5rSW1hZ2VDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGlua0ltYWdlQ2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjI5fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NDl9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua0ltYWdlU3JjXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtJbWFnZVNyY1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGlua0ltYWdlU3JjXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjoxOH0sXCJlbmRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjM2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIHdpZHRoPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaW5rSW1hZ2VXaWR0aFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaW5rSW1hZ2VXaWR0aFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGlua0ltYWdlV2lkdGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQ1fSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NjV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgIDwvc3Bhbj5cXHJcXG5cIjtcbn0sXCI5XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxpbmtfX3RleHQgXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua1RleHRDbGFzc1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaW5rVGV4dENsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rVGV4dENsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjksXCJjb2x1bW5cIjozMn0sXCJlbmRcIjp7XCJsaW5lXCI6OSxcImNvbHVtblwiOjUxfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImxpbmtUZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtUZXh0XCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rVGV4dFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo5LFwiY29sdW1uXCI6NTN9LFwiZW5kXCI6e1wibGluZVwiOjksXCJjb2x1bW5cIjo2N319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxhIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpZFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjozfSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaW5rSHJlZlwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjgyfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBjbGFzcz1cXFwibGluayBqcy1saW5rIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua0NsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rQ2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjEwM30sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjExOH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGF0YUFjdGlvblwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxMjB9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxNzd9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaW5rSW1hZ2VTcmNcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NixcImNvbHVtblwiOjExfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaW5rVGV4dFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oOSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjgsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoxMCxcImNvbHVtblwiOjExfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvYT5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjx1bCBjbGFzcz1cXFwibGlzdCBqcy1saXN0IFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlzdENsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpc3RDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwibGlzdENsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyNH0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjM5fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvdWw+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJ2ZXJ0aWNhbC1zcGFjZXIganMtdmVydGljYWwtc3BhY2VyIHZlcnRpY2FsLXNwYWNlci1cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInNpemVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwic2l6ZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwic2l6ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6NjN9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo3M319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L2Rpdj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGEgaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaHJlZlwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJocmVmXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJocmVmXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo5fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTl9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJzcmNcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwic3JjXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJzcmNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjE0fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MjN9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbjwvYT5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNhcm91c2VsIGpzLWNhcm91c2VsXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiY2Fyb3VzZWxfX2NoZXZyb24tbGVmdFxcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9jaGV2cm9uLWxlZnQuc3ZnXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuXFxyXFxuPCEtLSAgICA8dWwgY2xhc3M9XFxcImNhcm91c2VsX19saXN0XFxcIj48L3VsPi0tPlxcclxcblxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXJvdXNlbF9fY2hldnJvbi1yaWdodFxcXCI+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiaW1nL2ljb25zL2NoZXZyb24tcmlnaHQuc3ZnXFxcIj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgIDxkaXYgY2xhc3M9XFxcImZpbG1fX2JhY2tncm91bmRcXFwiPlxcclxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiZmlsbS1iYWNrZ3JvdW5kX19pbWFnZVxcXCIgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJwcmV2aWV3VVJMXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInByZXZpZXdVUkxcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInByZXZpZXdVUkxcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQ5fSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NjV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsbV9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtX19jb250ZW50LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X190aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiZmlsbS1jb250ZW50LXRpdGxlX190ZXh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMSxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjoxMSxcImNvbHVtblwiOjMxfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgPC9oMT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX2luZm8tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X19pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9fcmF0aW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmlsbS1jb250ZW50LXJhdGluZ19fdGV4dFxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwicmF0aW5nXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInJhdGluZ1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwicmF0aW5nXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NjR9LFwiZW5kXCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NzZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZpbG0tY29udGVudF9feWVhclxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwieWVhclwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ5ZWFyXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ5ZWFyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIwLFwiY29sdW1uXCI6NTN9LFwiZW5kXCI6e1wibGluZVwiOjIwLFwiY29sdW1uXCI6NjN9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX3R5cGVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInR5cGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMSxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjoyMSxcImNvbHVtblwiOjYzfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X19jb3VudHJ5XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X19hZ2UtbGltaXRcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImFnZUxpbWl0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFnZUxpbWl0XCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJhZ2VMaW1pdFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMyxcImNvbHVtblwiOjU4fSxcImVuZFwiOntcImxpbmVcIjoyMyxcImNvbHVtblwiOjcyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCIrPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImZpbG0tY29udGVudF9fZGVzY3JpcHRpb25cXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRlc2NyaXB0aW9uXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRlc2NyaXB0aW9uXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJkZXNjcmlwdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyNSxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjoyNSxcImNvbHVtblwiOjcwfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X19hdXRob3JzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50LWF1dGhvcnNfX2RpcmVjdG9yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzLWRpcmVjdG9yX190ZXh0XFxcIj7QoNC10LbQuNGB0YHRkdGA0Ys6PC9kaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGlyZWN0b3JzXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMSxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjozMyxcImNvbHVtblwiOjI5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50LWF1dGhvcnNfX2FjdG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnQtYXV0aG9ycy1hY3RvcnNfX3RleHRcXFwiPtCQ0LrRgtGR0YDRizo8L2Rpdj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhY3RvcnNcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM3LFwiY29sdW1uXCI6MjB9LFwiZW5kXCI6e1wibGluZVwiOjM5LFwiY29sdW1uXCI6Mjl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9fYnV0dG9uc1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3BlcnNvbnMvXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6Mzh9LFwiZW5kXCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6NDZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzLWRpcmVjdG9yX19uYW1lXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJuYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIm5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzIsXCJjb2x1bW5cIjo5Mn0sXCJlbmRcIjp7XCJsaW5lXCI6MzIsXCJjb2x1bW5cIjoxMDJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvYT5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidW5sZXNzXCIpLmNhbGwoYWxpYXMxLChkYXRhICYmIGxvb2t1cFByb3BlcnR5KGRhdGEsXCJsYXN0XCIpKSx7XCJuYW1lXCI6XCJ1bmxlc3NcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6MTA2fSxcImVuZFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjEzNn19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIsIFwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIvcGVyc29ucy9cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpZFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjo0Mn0sXCJlbmRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjo1MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZmlsbS1jb250ZW50LWF1dGhvcnMtYWN0b3JzX19uYW1lXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJuYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIm5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjo5NH0sXCJlbmRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjoxMDR9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvYT5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidW5sZXNzXCIpLmNhbGwoYWxpYXMxLChkYXRhICYmIGxvb2t1cFByb3BlcnR5KGRhdGEsXCJsYXN0XCIpKSx7XCJuYW1lXCI6XCJ1bmxlc3NcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6MTA4fSxcImVuZFwiOntcImxpbmVcIjozOCxcImNvbHVtblwiOjEzOH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8YXJ0aWNsZSBjbGFzcz1cXFwiZmlsbVxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcIndpdGhcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbnRlbnRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcIndpdGhcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjo0OCxcImNvbHVtblwiOjEzfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvYXJ0aWNsZT5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250YWluZXIganMtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250YWluZXJfX2xlZnQganMtaGVhZGVyLWNvbnRhaW5lcl9fbGVmdFxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250YWluZXJfX3JpZ2h0IGpzLWhlYWRlci1jb250YWluZXJfX3JpZ2h0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVzZXItcHJvZmlsZSBqcy11c2VyLXByb2ZpbGVcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcImNhdGVnb3J5XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2F0ZWdvcnlfX2xpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeV9fYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJjYXRlZ29yeV9fbmFtZVxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6NDd9LFwiZW5kXCI6e1wibGluZVwiOjcsXCJjb2x1bW5cIjo1OH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL2NoZXZyb24tcmlnaHQuc3ZnXFxcIiBhbHQ9XFxcIlxcXCIgY2xhc3M9XFxcImljb24tcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2E+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5X19jb250YWluZXJfX2xpc3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19pdGVtc1xcXCI+XFxyXFxuXFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiY29udGVudFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTYsXCJjb2x1bW5cIjoyNH0sXCJlbmRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjozM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19idXR0b25zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhdGVnb3J5X19jb250YWluZXJfX2J1dHRvbi1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9jaGV2cm9uLWxlZnQuc3ZnXFxcIiBhbHQ9XFxcIlxcXCIgY2xhc3M9XFxcImljb24tbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImNhdGVnb3J5X19jb250YWluZXJfX2J1dHRvbi1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvY2hldnJvbi1yaWdodC5zdmdcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiaWNvbi1yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi9maWxtcy9cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpZFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTgsXCJjb2x1bW5cIjo0OH0sXCJlbmRcIjp7XCJsaW5lXCI6MTgsXCJjb2x1bW5cIjo1Nn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9faXRlbS1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwicHJldmlld1VSTFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJwcmV2aWV3VVJMXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJwcmV2aWV3VVJMXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6NDZ9LFwiZW5kXCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6NjJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19pdGVtLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8bWFpbiBjbGFzcz1cXFwiY2F0ZWdvcmllc1xcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInNlbGVjdGlvbnNcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozOCxcImNvbHVtblwiOjEzfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvbWFpbj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsX19hcmVhIGpzLW1vZGFsX19hcmVhXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2Nsb3NlLWJ0bi1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2Nsb3NlLWJ0blxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xvc2UgTW9kYWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcIm1vZGFsX19jbG9zZS1idG4taW1hZ2VcXFwiIHNyYz1cXFwiL2ltZy9pY29ucy9jbG9zZS5zdmdcXFwiIGFsdD1cXFwiQ2xvc2UgaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbF9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbF9faGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2hlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibW9kYWxfX3RpdGxlXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxMCxcImNvbHVtblwiOjQxfSxcImVuZFwiOntcImxpbmVcIjoxMCxcImNvbHVtblwiOjUyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gyPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbF9fYm9keS1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsX19ib2R5IGpzLW1vZGFsX19ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInNwYWNlXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic3BhY2VfX3N0YXJzXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlX19lcnJvciBqcy1zcGFjZV9fZXJyb3JcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltYWdlLTQwNFxcXCIgc3JjPVxcXCIvaW1nL25vdGZvdW5kLzQwNC5zdmdcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZV9fb2JqZWN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic3BhY2Utb2JqZWN0X19yb2NrZXRcXFwiIHNyYz1cXFwiL2ltZy9ub3Rmb3VuZC9yb2NrZXQuc3ZnXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJzcGFjZS1vYmplY3RfX2VhcnRoXFxcIiBzcmM9XFxcIi9pbWcvbm90Zm91bmQvZWFydGguc3ZnXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic3BhY2Utb2JqZWN0X19tb29uXFxcIiBzcmM9XFxcIi9pbWcvbm90Zm91bmQvbW9vbi5zdmdcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlX19hc3Ryb25hdXQtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic3BhY2Utb2JqZWN0X19hc3Ryb25hdXRcXFwiIHNyYz1cXFwiL2ltZy9ub3Rmb3VuZC9hc3Ryb25hdXQuc3ZnXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZV9fc3RhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BhY2VfX3N0YXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlX19zdGFyXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZV9fc3RhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BhY2VfX3N0YXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGVfX3JvdyBwZXJzb24tdGFibGVfX3Jvdy0tbWVkaXVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X190aXRsZVxcXCI+0JLQvtC30YDQsNGB0YI8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X19pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJhZ2VcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWdlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJhZ2VcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzMsXCJjb2x1bW5cIjo0MH0sXCJlbmRcIjp7XCJsaW5lXCI6MzMsXCJjb2x1bW5cIjo0OX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlX19yb3cgcGVyc29uLXRhYmxlX19yb3ctLW1lZGl1bVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X190aXRsZVxcXCI+0KDQvtGB0YI8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX2luZm9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZ3Jvd3RoXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImdyb3d0aFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZ3Jvd3RoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQyLFwiY29sdW1uXCI6MzZ9LFwiZW5kXCI6e1wibGluZVwiOjQyLFwiY29sdW1uXCI6NDh9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGVfX3JvdyBwZXJzb24tdGFibGVfX3Jvdy0tbWVkaXVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX3RpdGxlXFxcIj7Qn9C+0Ls8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX2luZm9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZ2VuZGVyXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImdlbmRlclwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZ2VuZGVyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjUxLFwiY29sdW1uXCI6MzZ9LFwiZW5kXCI6e1wibGluZVwiOjUxLFwiY29sdW1uXCI6NDh9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGVfX3JvdyBwZXJzb24tdGFibGVfX3Jvdy0tbWVkaXVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX3RpdGxlXFxcIj7QnNC10YHRgtC+INGA0L7QttC00LXQvdC40Y88L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX2luZm9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiYmlydGhQbGFjZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJiaXJ0aFBsYWNlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJiaXJ0aFBsYWNlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjYwLFwiY29sdW1uXCI6MzZ9LFwiZW5kXCI6e1wibGluZVwiOjYwLFwiY29sdW1uXCI6NTJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblwiO1xufSxcIjlcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBcIlxuICAgICsgKChzdGFjazEgPSAobG9va3VwUHJvcGVydHkoaGVscGVycyxcInN0cmluZ0l0ZW1zXCIpfHwoZGVwdGgwICYmIGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInN0cmluZ0l0ZW1zXCIpKXx8Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJnZW5yZXNcIikgOiBkZXB0aDApLFwibmFtZVwiLHtcIm5hbWVcIjpcInN0cmluZ0l0ZW1zXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEwLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NjksXCJjb2x1bW5cIjo0OX0sXCJlbmRcIjp7XCJsaW5lXCI6NjksXCJjb2x1bW5cIjo5NX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgXCI7XG59LFwiMTBcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIlwiO1xufSxcIjEyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJuYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3MSxcImNvbHVtblwiOjQwfSxcImVuZFwiOntcImxpbmVcIjo3MSxcImNvbHVtblwiOjUwfX19KSA6IGhlbHBlcikpKVxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidW5sZXNzXCIpLmNhbGwoYWxpYXMxLChkYXRhICYmIGxvb2t1cFByb3BlcnR5KGRhdGEsXCJsYXN0XCIpKSx7XCJuYW1lXCI6XCJ1bmxlc3NcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3MSxcImNvbHVtblwiOjUwfSxcImVuZFwiOntcImxpbmVcIjo3MSxcImNvbHVtblwiOjgwfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiO1xufSxcIjEzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCIsIFwiO1xufSxcIjE1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4MCxcImNvbHVtblwiOjQwfSxcImVuZFwiOntcImxpbmVcIjo4MCxcImNvbHVtblwiOjUxfX19KSA6IGhlbHBlcikpKVxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidW5sZXNzXCIpLmNhbGwoYWxpYXMxLChkYXRhICYmIGxvb2t1cFByb3BlcnR5KGRhdGEsXCJsYXN0XCIpKSx7XCJuYW1lXCI6XCJ1bmxlc3NcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4MCxcImNvbHVtblwiOjUxfSxcImVuZFwiOntcImxpbmVcIjo4MCxcImNvbHVtblwiOjgxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiO1xufSxcIjE3XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwicGVyc29uLXBhbmVsLWZpbG1zLWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIvZmlsbXMvXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjkzLFwiY29sdW1uXCI6NTZ9LFwiZW5kXCI6e1wibGluZVwiOjkzLFwiY29sdW1uXCI6NjR9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcInBlcnNvbi1wYW5lbC1maWxtcy1pdGVtX19saW5rXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OTMsXCJjb2x1bW5cIjoxMDR9LFwiZW5kXCI6e1wibGluZVwiOjkzLFwiY29sdW1uXCI6MTE1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIG9wdGlvbnMsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sIGJ1ZmZlciA9IFxuICBcIjxhcnRpY2xlIGNsYXNzPVxcXCJwZXJzb25cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbl9fY29sdW1uIHBlcnNvbl9fY29sdW1uLS1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tY29sdW1uLWxlZnRfX2NvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi1jb2x1bW4tbGVmdC1jb250YWluZXJfX2l0ZW1zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbl9fcGhvdG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwZXJzb24tcGhvdG9fX2xpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJwZXJzb24tcGhvdG9fX2ltYWdlXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImF2YXRhclVSTFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhdmF0YXJVUkxcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImF2YXRhclVSTFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4LFwiY29sdW1uXCI6NjZ9LFwiZW5kXCI6e1wibGluZVwiOjgsXCJjb2x1bW5cIjo4MX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb25fX2RlbGltaXRlclxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb25fX2NvbHVtbiBwZXJzb25fX2NvbHVtbi0tcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi1jb2x1bW4tcmlnaHRfX2NvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi1jb2x1bW4tcmlnaHQtY29udGFpbmVyX19pdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb25fX2hlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcInBlcnNvbi1oZWFkZXJfX3J1LW5hbWVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcIm5hbWVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibmFtZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMixcImNvbHVtblwiOjYzfSxcImVuZFwiOntcImxpbmVcIjoyMixcImNvbHVtblwiOjczfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gxPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb25fX3RhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInBlcnNvbi10YWJsZV9fdGl0bGVcXFwiPtCeINC/0LXRgNGB0L7QvdC1PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhZ2VcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyOSxcImNvbHVtblwiOjI4fSxcImVuZFwiOntcImxpbmVcIjozNixcImNvbHVtblwiOjM1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJncm93dGhcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozOCxcImNvbHVtblwiOjI4fSxcImVuZFwiOntcImxpbmVcIjo0NSxcImNvbHVtblwiOjM1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJnZW5kZXJcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0NyxcImNvbHVtblwiOjI4fSxcImVuZFwiOntcImxpbmVcIjo1NCxcImNvbHVtblwiOjM1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJiaXJ0aFBsYWNlXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg3LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NTYsXCJjb2x1bW5cIjoyOH0sXCJlbmRcIjp7XCJsaW5lXCI6NjMsXCJjb2x1bW5cIjozNX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlX19yb3cgcGVyc29uLXRhYmxlX19yb3ctLW1lZGl1bVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X190aXRsZVxcXCI+0JbQsNC90YDRizwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19faW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI7XG4gIHN0YWNrMSA9ICgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJjb21tZW50XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1lbnRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwob3B0aW9ucz17XCJuYW1lXCI6XCJjb21tZW50XCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDksIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2OSxcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjo2OSxcImNvbHVtblwiOjEwOH19fSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSxvcHRpb25zKSA6IGhlbHBlcikpO1xuICBpZiAoIWxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJjb21tZW50XCIpKSB7IHN0YWNrMSA9IGNvbnRhaW5lci5ob29rcy5ibG9ja0hlbHBlck1pc3NpbmcuY2FsbChkZXB0aDAsc3RhY2sxLG9wdGlvbnMpfVxuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJnZW5yZXNcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3MCxcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjo3MixcImNvbHVtblwiOjQ1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGVfX3JvdyBwZXJzb24tdGFibGVfX3Jvdy0tbWVkaXVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX3RpdGxlXFxcIj7QoNC+0LvQuDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19faW5mb1xcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwicm9sZXNcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo3OSxcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjo4MSxcImNvbHVtblwiOjQ1fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb25fX3BhbmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tcGFuZWxfX2ZpbG1zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwZXJzb24tcGFuZWwtZmlsbXNfX3RpdGxlXFxcIj7Qm9GD0YfRiNC40LUg0YTQuNC70YzQvNGLPC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwZXJzb24tcGFuZWwtZmlsbXNfX2l0ZW1zXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZWFjaFwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJwYXJ0aWNpcGF0ZWRJblwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxNywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjkxLFwiY29sdW1uXCI6MzJ9LFwiZW5kXCI6e1wibGluZVwiOjk1LFwiY29sdW1uXCI6NDF9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9hcnRpY2xlPlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8IS0tPGRpdiBjbGFzcz1cXFwid3JhcHBlclxcXCI+LS0+XFxyXFxuPCEtLSAgICA8ZGl2IGNsYXNzPVxcXCJwbGF5ZXJcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgIDx2aWRlbyBjbGFzcz1cXFwidmlkZW9cXFwiIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidmlkZW9VUkxcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidmlkZW9VUkxcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInZpZGVvVVJMXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjozOH0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjUyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvdmlkZW8+LS0+XFxyXFxuPCEtLSAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbHNcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sc19fcGxheVxcXCIgZGF0YS1hY3Rpb249XFxcInBsYXlcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvcGxheS5zdmdcXFwiIGNsYXNzPVxcXCJwbGF5X19idG5cXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbHNfX3N0b3BcXFwiIGRhdGEtYWN0aW9uPVxcXCJzdG9wXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL3N0b3Auc3ZnXFxcIiBjbGFzcz1cXFwic3RvcF9fYnRuXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzX19wcm9ncmVzc1xcXCIgZGF0YS1hY3Rpb249XFxcInZpZGVvU2Nyb2xsXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgY2xhc3M9XFxcInByb2dyZXNzXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzX192b2x1bWVcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvdm9sdW1lLnN2Z1xcXCIgY2xhc3M9XFxcInZvbHVtZV9fYnRuXFxcIiBkYXRhLWFjdGlvbj1cXFwidm9sdW1lU2Nyb2xsXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgY2xhc3M9XFxcInZvbHVtZV9fcHJvZ3Jlc3NcXFwiPi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbHNfX3RpbWVcXFwiPjAwOjAwLzAwOjAwPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICA8L2Rpdj4tLT5cXHJcXG48IS0tPC9kaXY+LS0+XFxyXFxuXFxyXFxuPGRpdiBpZD1cXFwiZnVsbHNjcmVlbi1tb2RhbFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZ1bGxzY3JlZW4tbW9kYWxcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVsYXRpdmUtb3ZlcmZsb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVsYXRpdmUgY3VycmVudC1iYWNrZ3JvdW5kXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInZpZGVvLWNvbnRyb2xzXFxcIiBjbGFzcz1cXFwidmlkZW8gcmVsYXRpdmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19zdG9yYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2JhY2tncm91bmRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XFxcInZpZGVvLXBsYXllclxcXCIgYXV0b3BsYXkgcGxheXNpbmxpbmUgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJzcmNcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwic3JjXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJzcmNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjo3OX0sXCJlbmRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjo4OH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L3ZpZGVvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fdGl0bGUtY29udGFpbmVyXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX190aXRsZS1hbGlnblxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX3RpdGxlXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW8tdGl0bGVfX3RleHRcXFwiPtCf0LXRgtGA0L7QstGLINCyINCz0YDQuNC/0L/QtTwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19jbG9zZS1idXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBHcmFkaWVudCBidXR0b24gKHVwcGVyIHRvKSAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2JvdHRvbS1maWx0ZXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19wYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fYm90dG9tLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX3BsYXktYnV0dG9uXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fZHVyYXRpb24tdGltZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXgtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWwtNSBtci0yNFxcXCI+IDwhLS0gVE9ETyBkaXYgd2l0aCB0aXRsZSBpbiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9XFxcItCS0L7RgdC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQsiBIRCDQutCw0YfQtdGB0YLQstC1XFxcIiBjbGFzcz1cXFwidmlkZW9fX3F1YWxpdHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL3BsYXllci9oZC5zdmdcXFwiIGFsdD1cXFwi0JLQvtGB0L/RgNC+0LjQt9Cy0L7QtNC40YLRgdGPINCyIEhEINC60LDRh9C10YHRgtCy0LVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtci0yNFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2ljb25cXFwiPiA8IS0tIFRPRE8gZGl2IHdpdGggdGl0bGUgaW4gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9XFxcItCS0YvQutC70Y7Rh9C40YLRjCAvINCS0LrQu9GO0YfQuNGC0Ywg0LfQstGD0LpcXFwiIGNsYXNzPVxcXCJ2aWRlb19fdm9sdW1lXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19faWNvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cXFwi0JLQviDQstC10YHRjCDRjdC60YDQsNC9XFxcIiBjbGFzcz1cXFwidmlkZW9fX2ljb24tZmlsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL3BsYXllci9mdWxsc2NyZWVuLnN2Z1xcXCIgYWx0PVxcXCLQktC+INCy0LXRgdGMINGN0LrRgNCw0L1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8bWFpbiBjbGFzcz1cXFwic2V0dGluZ3MtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJzZXR0aW5nc19fdGl0bGVcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6MzZ9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0N319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fbGVmdC1tZW51LWNvbnRhaW5lciBqcy1zZXR0aW5nc19fbGVmdC1tZW51LWNvbnRhaW5lclxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX3JpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2Zvcm0ganMtc2V0dGluZ3NfX2Zvcm1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBUaGlzIGlzIHRoZSBzYW1lIGFzIGluIHNpZ25JbiBhbmQgU2lnblVwIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBUT0RPOiBtb3ZlIHR3byBmaWVsZCBpbiBmb3JtIGFuZCBhZGQgY2xhc3NlcyBmb3IgaXQgLS0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInNldHRpbmdzLWZvcm1fX3RpdGxlXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJmb3JtVGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZm9ybVRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJmb3JtVGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTQsXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6MTQsXCJjb2x1bW5cIjo2OH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzZXR0aW5ncy1mb3JtX19kZXNjcmlwdGlvblxcXCI+IFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRlc2NyaXB0aW9uXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRlc2NyaXB0aW9uXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJkZXNjcmlwdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjU5fSxcImVuZFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjc2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3A+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbjwvbWFpbj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiA8aDMgY2xhc3M9XFxcInNpZ25Jbl9fdGl0bGVcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0NH0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjU1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gzPiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgPHAgY2xhc3M9XFxcInNpZ25Jbl9fZGVzY3JpcHRpb25cXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZGVzY3JpcHRpb25cIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGVzY3JpcHRpb25cIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImRlc2NyaXB0aW9uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo1NX0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjcyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3A+IFwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJzaWduSW4ganMtc2lnbkluXFxcIj5cXHJcXG4gICAgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo2OH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRlc2NyaXB0aW9uXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo4NH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG48L2Rpdj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiA8aDMgY2xhc3M9XFxcInNpZ25VcF9fdGl0bGVcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0NH0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjU1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gzPiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgPHAgY2xhc3M9XFxcInNpZ25VcF9fZGVzY3JpcHRpb25cXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZGVzY3JpcHRpb25cIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGVzY3JpcHRpb25cIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImRlc2NyaXB0aW9uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo1NX0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjcyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3A+IFwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJzaWduVXAganMtc2lnblVwXFxcIj5cXHJcXG4gICAgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo2OH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRlc2NyaXB0aW9uXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo4NH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG48L2Rpdj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9oYW5kbGViYXJzQmFzZSA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9iYXNlJyk7XG5cbnZhciBiYXNlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNCYXNlKTtcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcblxudmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZyA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZycpO1xuXG52YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcblxudmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2V4Y2VwdGlvbicpO1xuXG52YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0V4Y2VwdGlvbik7XG5cbnZhciBfaGFuZGxlYmFyc1V0aWxzID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzVXRpbHMpO1xuXG52YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3J1bnRpbWUnKTtcblxudmFyIHJ1bnRpbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1J1bnRpbWUpO1xuXG52YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL25vLWNvbmZsaWN0Jyk7XG5cbnZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc05vQ29uZmxpY3QpO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IF9oYW5kbGViYXJzU2FmZVN0cmluZzJbJ2RlZmF1bHQnXTtcbiAgaGIuRXhjZXB0aW9uID0gX2hhbmRsZWJhcnNFeGNlcHRpb24yWydkZWZhdWx0J107XG4gIGhiLlV0aWxzID0gVXRpbHM7XG4gIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIGhiLlZNID0gcnVudGltZTtcbiAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbiAoc3BlYykge1xuICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcbiAgfTtcblxuICByZXR1cm4gaGI7XG59XG5cbnZhciBpbnN0ID0gY3JlYXRlKCk7XG5pbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuX2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5pbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TG5KMWJuUnBiV1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN09FSkJRWE5DTEcxQ1FVRnRRanM3U1VGQk4wSXNTVUZCU1RzN096czdiME5CU1U4c01FSkJRVEJDT3pzN08yMURRVU16UWl4M1FrRkJkMEk3T3pzN0swSkJRM1pDTEc5Q1FVRnZRanM3U1VGQkwwSXNTMEZCU3pzN2FVTkJRMUVzYzBKQlFYTkNPenRKUVVGdVF5eFBRVUZQT3p0dlEwRkZTU3d3UWtGQk1FSTdPenM3TzBGQlIycEVMRk5CUVZNc1RVRkJUU3hIUVVGSE8wRkJRMmhDTEUxQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNN08wRkJSVEZETEU5QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzWkNMRWxCUVVVc1EwRkJReXhWUVVGVkxHOURRVUZoTEVOQlFVTTdRVUZETTBJc1NVRkJSU3hEUVVGRExGTkJRVk1zYlVOQlFWa3NRMEZCUXp0QlFVTjZRaXhKUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhKUVVGRkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRPenRCUVVVM1F5eEpRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVOb1FpeEpRVUZGTEVOQlFVTXNVVUZCVVN4SFFVRkhMRlZCUVZNc1NVRkJTU3hGUVVGRk8wRkJRek5DTEZkQlFVOHNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdSMEZEYmtNc1EwRkJRenM3UVVGRlJpeFRRVUZQTEVWQlFVVXNRMEZCUXp0RFFVTllPenRCUVVWRUxFbEJRVWtzU1VGQlNTeEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUTNCQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPenRCUVVWeVFpeHJRMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRmFrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6czdjVUpCUlZJc1NVRkJTU0lzSW1acGJHVWlPaUpvWVc1a2JHVmlZWEp6TG5KMWJuUnBiV1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJpWVhObElHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OWlZWE5sSnp0Y2JseHVMeThnUldGamFDQnZaaUIwYUdWelpTQmhkV2R0Wlc1MElIUm9aU0JJWVc1a2JHVmlZWEp6SUc5aWFtVmpkQzRnVG04Z2JtVmxaQ0IwYnlCelpYUjFjQ0JvWlhKbExseHVMeThnS0ZSb2FYTWdhWE1nWkc5dVpTQjBieUJsWVhOcGJIa2djMmhoY21VZ1kyOWtaU0JpWlhSM1pXVnVJR052YlcxdmJtcHpJR0Z1WkNCaWNtOTNjMlVnWlc1MmN5bGNibWx0Y0c5eWRDQlRZV1psVTNSeWFXNW5JR1p5YjIwZ0p5NHZhR0Z1Wkd4bFltRnljeTl6WVdabExYTjBjbWx1WnljN1hHNXBiWEJ2Y25RZ1JYaGpaWEIwYVc5dUlHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OWxlR05sY0hScGIyNG5PMXh1YVcxd2IzSjBJQ29nWVhNZ1ZYUnBiSE1nWm5KdmJTQW5MaTlvWVc1a2JHVmlZWEp6TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0FxSUdGeklISjFiblJwYldVZ1puSnZiU0FuTGk5b1lXNWtiR1ZpWVhKekwzSjFiblJwYldVbk8xeHVYRzVwYlhCdmNuUWdibTlEYjI1bWJHbGpkQ0JtY205dElDY3VMMmhoYm1Sc1pXSmhjbk12Ym04dFkyOXVabXhwWTNRbk8xeHVYRzR2THlCR2IzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCaGJtUWdkWE5oWjJVZ2IzVjBjMmxrWlNCdlppQnRiMlIxYkdVZ2MzbHpkR1Z0Y3l3Z2JXRnJaU0IwYUdVZ1NHRnVaR3hsWW1GeWN5QnZZbXBsWTNRZ1lTQnVZVzFsYzNCaFkyVmNibVoxYm1OMGFXOXVJR055WldGMFpTZ3BJSHRjYmlBZ2JHVjBJR2hpSUQwZ2JtVjNJR0poYzJVdVNHRnVaR3hsWW1GeWMwVnVkbWx5YjI1dFpXNTBLQ2s3WEc1Y2JpQWdWWFJwYkhNdVpYaDBaVzVrS0doaUxDQmlZWE5sS1R0Y2JpQWdhR0l1VTJGbVpWTjBjbWx1WnlBOUlGTmhabVZUZEhKcGJtYzdYRzRnSUdoaUxrVjRZMlZ3ZEdsdmJpQTlJRVY0WTJWd2RHbHZianRjYmlBZ2FHSXVWWFJwYkhNZ1BTQlZkR2xzY3p0Y2JpQWdhR0l1WlhOallYQmxSWGh3Y21WemMybHZiaUE5SUZWMGFXeHpMbVZ6WTJGd1pVVjRjSEpsYzNOcGIyNDdYRzVjYmlBZ2FHSXVWazBnUFNCeWRXNTBhVzFsTzF4dUlDQm9ZaTUwWlcxd2JHRjBaU0E5SUdaMWJtTjBhVzl1S0hOd1pXTXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NuVnVkR2x0WlM1MFpXMXdiR0YwWlNoemNHVmpMQ0JvWWlrN1hHNGdJSDA3WEc1Y2JpQWdjbVYwZFhKdUlHaGlPMXh1ZlZ4dVhHNXNaWFFnYVc1emRDQTlJR055WldGMFpTZ3BPMXh1YVc1emRDNWpjbVZoZEdVZ1BTQmpjbVZoZEdVN1hHNWNibTV2UTI5dVpteHBZM1FvYVc1emRDazdYRzVjYm1sdWMzUmJKMlJsWm1GMWJIUW5YU0E5SUdsdWMzUTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR2x1YzNRN1hHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhhbmRsZWJhcnNFbnZpcm9ubWVudCA9IEhhbmRsZWJhcnNFbnZpcm9ubWVudDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG52YXIgX2hlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxudmFyIF9kZWNvcmF0b3JzID0gcmVxdWlyZSgnLi9kZWNvcmF0b3JzJyk7XG5cbnZhciBfbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcblxudmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxudmFyIF9pbnRlcm5hbFByb3RvQWNjZXNzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9wcm90by1hY2Nlc3MnKTtcblxudmFyIFZFUlNJT04gPSAnNC43LjcnO1xuZXhwb3J0cy5WRVJTSU9OID0gVkVSU0lPTjtcbnZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5leHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG52YXIgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0cy5MQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04gPSBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT047XG52YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcbiAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcbiAgMjogJz09IDEuMC4wLXJjLjMnLFxuICAzOiAnPT0gMS4wLjAtcmMuNCcsXG4gIDQ6ICc9PSAxLngueCcsXG4gIDU6ICc9PSAyLjAuMC1hbHBoYS54JyxcbiAgNjogJz49IDIuMC4wLWJldGEuMScsXG4gIDc6ICc+PSA0LjAuMCA8NC4zLjAnLFxuICA4OiAnPj0gNC4zLjAnXG59O1xuXG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIG9iamVjdFR5cGUgPSAnW29iamVjdCBPYmplY3RdJztcblxuZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICBfaGVscGVycy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICBfZGVjb3JhdG9ycy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogX2xvZ2dlcjJbJ2RlZmF1bHQnXSxcbiAgbG9nOiBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXIobmFtZSwgZm4pIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7XG4gICAgICB9XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHJlZ2lzdGVyUGFydGlhbChuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCInICsgbmFtZSArICdcIiBhcyB1bmRlZmluZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHVucmVnaXN0ZXJQYXJ0aWFsKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IobmFtZSwgZm4pIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBkZWNvcmF0b3JzJyk7XG4gICAgICB9XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gdW5yZWdpc3RlckRlY29yYXRvcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfSxcbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBtZW1vcnkgb2YgaWxsZWdhbCBwcm9wZXJ0eSBhY2Nlc3NlcyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGxvZ2dlZC5cbiAgICogQGRlcHJlY2F0ZWQgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBoYW5kbGViYXJzIHRlc3QtY2FzZXNcbiAgICovXG4gIHJlc2V0TG9nZ2VkUHJvcGVydHlBY2Nlc3NlczogZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0eUFjY2Vzc2VzKCkge1xuICAgIF9pbnRlcm5hbFByb3RvQWNjZXNzLnJlc2V0TG9nZ2VkUHJvcGVydGllcygpO1xuICB9XG59O1xuXG52YXIgbG9nID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2c7XG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IF91dGlscy5jcmVhdGVGcmFtZTtcbmV4cG9ydHMubG9nZ2VyID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJKaGMyVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdjVUpCUVRoRExGTkJRVk03TzNsQ1FVTnFReXhoUVVGaE96czdPM1ZDUVVOSkxGZEJRVmM3T3pCQ1FVTlNMR05CUVdNN08zTkNRVU55UXl4VlFVRlZPenM3TzIxRFFVTlRMSGxDUVVGNVFqczdRVUZGZUVRc1NVRkJUU3hQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZET3p0QlFVTjRRaXhKUVVGTkxHbENRVUZwUWl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRE5VSXNTVUZCVFN4cFEwRkJhVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPenRCUVVVMVF5eEpRVUZOTEdkQ1FVRm5RaXhIUVVGSE8wRkJRemxDTEVkQlFVTXNSVUZCUlN4aFFVRmhPMEZCUTJoQ0xFZEJRVU1zUlVGQlJTeGxRVUZsTzBGQlEyeENMRWRCUVVNc1JVRkJSU3hsUVVGbE8wRkJRMnhDTEVkQlFVTXNSVUZCUlN4VlFVRlZPMEZCUTJJc1IwRkJReXhGUVVGRkxHdENRVUZyUWp0QlFVTnlRaXhIUVVGRExFVkJRVVVzYVVKQlFXbENPMEZCUTNCQ0xFZEJRVU1zUlVGQlJTeHBRa0ZCYVVJN1FVRkRjRUlzUjBGQlF5eEZRVUZGTEZWQlFWVTdRMEZEWkN4RFFVRkRPenM3UVVGRlJpeEpRVUZOTEZWQlFWVXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6czdRVUZGT1VJc1UwRkJVeXh4UWtGQmNVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJUdEJRVU51UlN4TlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzU1VGQlNTeEZRVUZGTEVOQlFVTTdRVUZETjBJc1RVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPMEZCUXk5Q0xFMUJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4SlFVRkpMRVZCUVVVc1EwRkJRenM3UVVGRmJrTXNhME5CUVhWQ0xFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF6ZENMSGREUVVFd1FpeEpRVUZKTEVOQlFVTXNRMEZCUXp0RFFVTnFRenM3UVVGRlJDeHhRa0ZCY1VJc1EwRkJReXhUUVVGVExFZEJRVWM3UVVGRGFFTXNZVUZCVnl4RlFVRkZMSEZDUVVGeFFqczdRVUZGYkVNc1VVRkJUU3h4UWtGQlVUdEJRVU5rTEV0QlFVY3NSVUZCUlN4dlFrRkJUeXhIUVVGSE96dEJRVVZtTEdkQ1FVRmpMRVZCUVVVc2QwSkJRVk1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0QlFVTnFReXhSUVVGSkxHZENRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGRFTXNWVUZCU1N4RlFVRkZMRVZCUVVVN1FVRkRUaXhqUVVGTkxESkNRVUZqTEhsRFFVRjVReXhEUVVGRExFTkJRVU03VDBGRGFFVTdRVUZEUkN4dlFrRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXpWQ0xFMUJRVTA3UVVGRFRDeFZRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU42UWp0SFFVTkdPMEZCUTBRc2EwSkJRV2RDTEVWQlFVVXNNRUpCUVZNc1NVRkJTU3hGUVVGRk8wRkJReTlDTEZkQlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEhRVU16UWpzN1FVRkZSQ3hwUWtGQlpTeEZRVUZGTEhsQ1FVRlRMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGRrTXNVVUZCU1N4blFrRkJVeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMEZCUTNSRExHOUNRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE4wSXNUVUZCVFR0QlFVTk1MRlZCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVjBGQlZ5eEZRVUZGTzBGQlEyeERMR05CUVUwc2VVVkJRM2RETEVsQlFVa3NiMEpCUTJwRUxFTkJRVU03VDBGRFNEdEJRVU5FTEZWQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzB0QlF5OUNPMGRCUTBZN1FVRkRSQ3h0UWtGQmFVSXNSVUZCUlN3eVFrRkJVeXhKUVVGSkxFVkJRVVU3UVVGRGFFTXNWMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBkQlF6VkNPenRCUVVWRUxHMUNRVUZwUWl4RlFVRkZMREpDUVVGVExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVTdRVUZEY0VNc1VVRkJTU3huUWtGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8wRkJRM1JETEZWQlFVa3NSVUZCUlN4RlFVRkZPMEZCUTA0c1kwRkJUU3d5UWtGQll5dzBRMEZCTkVNc1EwRkJReXhEUVVGRE8wOUJRMjVGTzBGQlEwUXNiMEpCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTXZRaXhOUVVGTk8wRkJRMHdzVlVGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRE5VSTdSMEZEUmp0QlFVTkVMSEZDUVVGdFFpeEZRVUZGTERaQ1FVRlRMRWxCUVVrc1JVRkJSVHRCUVVOc1F5eFhRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UjBGRE9VSTdPenM3TzBGQlMwUXNOa0pCUVRKQ0xFVkJRVUVzZFVOQlFVYzdRVUZETlVJc1owUkJRWFZDTEVOQlFVTTdSMEZEZWtJN1EwRkRSaXhEUVVGRE96dEJRVVZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRzlDUVVGUExFZEJRVWNzUTBGQlF6czdPMUZCUlc1Q0xGZEJRVmM3VVVGQlJTeE5RVUZOSWl3aVptbHNaU0k2SW1KaGMyVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZHY21GdFpTd2daWGgwWlc1a0xDQjBiMU4wY21sdVp5QjlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVhVzF3YjNKMElFVjRZMlZ3ZEdsdmJpQm1jbTl0SUNjdUwyVjRZMlZ3ZEdsdmJpYzdYRzVwYlhCdmNuUWdleUJ5WldkcGMzUmxja1JsWm1GMWJIUklaV3h3WlhKeklIMGdabkp2YlNBbkxpOW9aV3h3WlhKekp6dGNibWx0Y0c5eWRDQjdJSEpsWjJsemRHVnlSR1ZtWVhWc2RFUmxZMjl5WVhSdmNuTWdmU0JtY205dElDY3VMMlJsWTI5eVlYUnZjbk1uTzF4dWFXMXdiM0owSUd4dloyZGxjaUJtY205dElDY3VMMnh2WjJkbGNpYzdYRzVwYlhCdmNuUWdleUJ5WlhObGRFeHZaMmRsWkZCeWIzQmxjblJwWlhNZ2ZTQm1jbTl0SUNjdUwybHVkR1Z5Ym1Gc0wzQnliM1J2TFdGalkyVnpjeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JXUlZKVFNVOU9JRDBnSnpRdU55NDNKenRjYm1WNGNHOXlkQ0JqYjI1emRDQkRUMDFRU1V4RlVsOVNSVlpKVTBsUFRpQTlJRGc3WEc1bGVIQnZjblFnWTI5dWMzUWdURUZUVkY5RFQwMVFRVlJKUWt4RlgwTlBUVkJKVEVWU1gxSkZWa2xUU1U5T0lEMGdOenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRkpGVmtsVFNVOU9YME5JUVU1SFJWTWdQU0I3WEc0Z0lERTZJQ2M4UFNBeExqQXVjbU11TWljc0lDOHZJREV1TUM1eVl5NHlJR2x6SUdGamRIVmhiR3g1SUhKbGRqSWdZblYwSUdSdlpYTnVKM1FnY21Wd2IzSjBJR2wwWEc0Z0lESTZJQ2M5UFNBeExqQXVNQzF5WXk0ekp5eGNiaUFnTXpvZ0p6MDlJREV1TUM0d0xYSmpMalFuTEZ4dUlDQTBPaUFuUFQwZ01TNTRMbmduTEZ4dUlDQTFPaUFuUFQwZ01pNHdMakF0WVd4d2FHRXVlQ2NzWEc0Z0lEWTZJQ2MrUFNBeUxqQXVNQzFpWlhSaExqRW5MRnh1SUNBM09pQW5QajBnTkM0d0xqQWdQRFF1TXk0d0p5eGNiaUFnT0RvZ0p6NDlJRFF1TXk0d0oxeHVmVHRjYmx4dVkyOXVjM1FnYjJKcVpXTjBWSGx3WlNBOUlDZGJiMkpxWldOMElFOWlhbVZqZEYwbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdTR0Z1Wkd4bFltRnljMFZ1ZG1seWIyNXRaVzUwS0dobGJIQmxjbk1zSUhCaGNuUnBZV3h6TENCa1pXTnZjbUYwYjNKektTQjdYRzRnSUhSb2FYTXVhR1ZzY0dWeWN5QTlJR2hsYkhCbGNuTWdmSHdnZTMwN1hHNGdJSFJvYVhNdWNHRnlkR2xoYkhNZ1BTQndZWEowYVdGc2N5QjhmQ0I3ZlR0Y2JpQWdkR2hwY3k1a1pXTnZjbUYwYjNKeklEMGdaR1ZqYjNKaGRHOXljeUI4ZkNCN2ZUdGNibHh1SUNCeVpXZHBjM1JsY2tSbFptRjFiSFJJWld4d1pYSnpLSFJvYVhNcE8xeHVJQ0J5WldkcGMzUmxja1JsWm1GMWJIUkVaV052Y21GMGIzSnpLSFJvYVhNcE8xeHVmVnh1WEc1SVlXNWtiR1ZpWVhKelJXNTJhWEp2Ym0xbGJuUXVjSEp2ZEc5MGVYQmxJRDBnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjam9nU0dGdVpHeGxZbUZ5YzBWdWRtbHliMjV0Wlc1MExGeHVYRzRnSUd4dloyZGxjam9nYkc5bloyVnlMRnh1SUNCc2IyYzZJR3h2WjJkbGNpNXNiMmNzWEc1Y2JpQWdjbVZuYVhOMFpYSklaV3h3WlhJNklHWjFibU4wYVc5dUtHNWhiV1VzSUdadUtTQjdYRzRnSUNBZ2FXWWdLSFJ2VTNSeWFXNW5MbU5oYkd3b2JtRnRaU2tnUFQwOUlHOWlhbVZqZEZSNWNHVXBJSHRjYmlBZ0lDQWdJR2xtSUNobWJpa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkQmNtY2dibTkwSUhOMWNIQnZjblJsWkNCM2FYUm9JRzExYkhScGNHeGxJR2hsYkhCbGNuTW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR1Y0ZEdWdVpDaDBhR2x6TG1obGJIQmxjbk1zSUc1aGJXVXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFHbHpMbWhsYkhCbGNuTmJibUZ0WlYwZ1BTQm1ianRjYmlBZ0lDQjlYRzRnSUgwc1hHNGdJSFZ1Y21WbmFYTjBaWEpJWld4d1pYSTZJR1oxYm1OMGFXOXVLRzVoYldVcElIdGNiaUFnSUNCa1pXeGxkR1VnZEdocGN5NW9aV3h3WlhKelcyNWhiV1ZkTzF4dUlDQjlMRnh1WEc0Z0lISmxaMmx6ZEdWeVVHRnlkR2xoYkRvZ1puVnVZM1JwYjI0b2JtRnRaU3dnY0dGeWRHbGhiQ2tnZTF4dUlDQWdJR2xtSUNoMGIxTjBjbWx1Wnk1allXeHNLRzVoYldVcElEMDlQU0J2WW1wbFkzUlVlWEJsS1NCN1hHNGdJQ0FnSUNCbGVIUmxibVFvZEdocGN5NXdZWEowYVdGc2N5d2dibUZ0WlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNoMGVYQmxiMllnY0dGeWRHbGhiQ0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmloY2JpQWdJQ0FnSUNBZ0lDQmdRWFIwWlcxd2RHbHVaeUIwYnlCeVpXZHBjM1JsY2lCaElIQmhjblJwWVd3Z1kyRnNiR1ZrSUZ3aUpIdHVZVzFsZlZ3aUlHRnpJSFZ1WkdWbWFXNWxaR0JjYmlBZ0lDQWdJQ0FnS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVjR0Z5ZEdsaGJITmJibUZ0WlYwZ1BTQndZWEowYVdGc08xeHVJQ0FnSUgxY2JpQWdmU3hjYmlBZ2RXNXlaV2RwYzNSbGNsQmhjblJwWVd3NklHWjFibU4wYVc5dUtHNWhiV1VwSUh0Y2JpQWdJQ0JrWld4bGRHVWdkR2hwY3k1d1lYSjBhV0ZzYzF0dVlXMWxYVHRjYmlBZ2ZTeGNibHh1SUNCeVpXZHBjM1JsY2tSbFkyOXlZWFJ2Y2pvZ1puVnVZM1JwYjI0b2JtRnRaU3dnWm00cElIdGNiaUFnSUNCcFppQW9kRzlUZEhKcGJtY3VZMkZzYkNodVlXMWxLU0E5UFQwZ2IySnFaV04wVkhsd1pTa2dlMXh1SUNBZ0lDQWdhV1lnS0dadUtTQjdYRzRnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjBGeVp5QnViM1FnYzNWd2NHOXlkR1ZrSUhkcGRHZ2diWFZzZEdsd2JHVWdaR1ZqYjNKaGRHOXljeWNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWlhoMFpXNWtLSFJvYVhNdVpHVmpiM0poZEc5eWN5d2dibUZ0WlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdVpHVmpiM0poZEc5eWMxdHVZVzFsWFNBOUlHWnVPMXh1SUNBZ0lIMWNiaUFnZlN4Y2JpQWdkVzV5WldkcGMzUmxja1JsWTI5eVlYUnZjam9nWm5WdVkzUnBiMjRvYm1GdFpTa2dlMXh1SUNBZ0lHUmxiR1YwWlNCMGFHbHpMbVJsWTI5eVlYUnZjbk5iYm1GdFpWMDdYRzRnSUgwc1hHNGdJQzhxS2x4dUlDQWdLaUJTWlhObGRDQjBhR1VnYldWdGIzSjVJRzltSUdsc2JHVm5ZV3dnY0hKdmNHVnlkSGtnWVdOalpYTnpaWE1nZEdoaGRDQm9ZWFpsSUdGc2NtVmhaSGtnWW1WbGJpQnNiMmRuWldRdVhHNGdJQ0FxSUVCa1pYQnlaV05oZEdWa0lITm9iM1ZzWkNCdmJteDVJR0psSUhWelpXUWdhVzRnYUdGdVpHeGxZbUZ5Y3lCMFpYTjBMV05oYzJWelhHNGdJQ0FxTDF4dUlDQnlaWE5sZEV4dloyZGxaRkJ5YjNCbGNuUjVRV05qWlhOelpYTW9LU0I3WEc0Z0lDQWdjbVZ6WlhSTWIyZG5aV1JRY205d1pYSjBhV1Z6S0NrN1hHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQnNaWFFnYkc5bklEMGdiRzluWjJWeUxteHZaenRjYmx4dVpYaHdiM0owSUhzZ1kzSmxZWFJsUm5KaGJXVXNJR3h2WjJkbGNpQjlPMXh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzID0gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZWNvcmF0b3JzSW5saW5lID0gcmVxdWlyZSgnLi9kZWNvcmF0b3JzL2lubGluZScpO1xuXG52YXIgX2RlY29yYXRvcnNJbmxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdG9yc0lubGluZSk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcbiAgX2RlY29yYXRvcnNJbmxpbmUyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMlJsWTI5eVlYUnZjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3WjBOQlFUSkNMSEZDUVVGeFFqczdPenRCUVVWNlF5eFRRVUZUTEhsQ1FVRjVRaXhEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5zUkN4blEwRkJaU3hSUVVGUkxFTkJRVU1zUTBGQlF6dERRVU14UWlJc0ltWnBiR1VpT2lKa1pXTnZjbUYwYjNKekxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpsWjJsemRHVnlTVzVzYVc1bElHWnliMjBnSnk0dlpHVmpiM0poZEc5eWN5OXBibXhwYm1Vbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjbVZuYVhOMFpYSkVaV1poZFd4MFJHVmpiM0poZEc5eWN5aHBibk4wWVc1alpTa2dlMXh1SUNCeVpXZHBjM1JsY2tsdWJHbHVaU2hwYm5OMFlXNWpaU2s3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uIChmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIHZhciByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcnRpYWxzIHN0YWNrIGZyYW1lIHByaW9yIHRvIGV4ZWMuXG4gICAgICAgIHZhciBvcmlnaW5hbCA9IGNvbnRhaW5lci5wYXJ0aWFscztcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gX3V0aWxzLmV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcbiAgICAgICAgdmFyIHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJSbFkyOXlZWFJ2Y25NdmFXNXNhVzVsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVhWQ0xGVkJRVlU3TzNGQ1FVVnNRaXhWUVVGVExGRkJRVkVzUlVGQlJUdEJRVU5vUXl4VlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRlZCUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXpORkxGRkJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmlMRkZCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlEyNUNMRmRCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzQkNMRk5CUVVjc1IwRkJSeXhWUVVGVExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVTdPMEZCUlM5Q0xGbEJRVWtzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRiRU1zYVVKQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1kwRkJUeXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVNeFJDeFpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlF5OUNMR2xDUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0QlFVTTVRaXhsUVVGUExFZEJRVWNzUTBGQlF6dFBRVU5hTEVOQlFVTTdTMEZEU0RzN1FVRkZSQ3hUUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVVM1F5eFhRVUZQTEVkQlFVY3NRMEZCUXp0SFFVTmFMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNkltbHViR2x1WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR1Y0ZEdWdVpDQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKRVpXTnZjbUYwYjNJb0oybHViR2x1WlNjc0lHWjFibU4wYVc5dUtHWnVMQ0J3Y205d2N5d2dZMjl1ZEdGcGJtVnlMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdiR1YwSUhKbGRDQTlJR1p1TzF4dUlDQWdJR2xtSUNnaGNISnZjSE11Y0dGeWRHbGhiSE1wSUh0Y2JpQWdJQ0FnSUhCeWIzQnpMbkJoY25ScFlXeHpJRDBnZTMwN1hHNGdJQ0FnSUNCeVpYUWdQU0JtZFc1amRHbHZiaWhqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFTnlaV0YwWlNCaElHNWxkeUJ3WVhKMGFXRnNjeUJ6ZEdGamF5Qm1jbUZ0WlNCd2NtbHZjaUIwYnlCbGVHVmpMbHh1SUNBZ0lDQWdJQ0JzWlhRZ2IzSnBaMmx1WVd3Z1BTQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITTdYRzRnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTV3WVhKMGFXRnNjeUE5SUdWNGRHVnVaQ2g3ZlN3Z2IzSnBaMmx1WVd3c0lIQnliM0J6TG5CaGNuUnBZV3h6S1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsZENBOUlHWnVLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBPMXh1SUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE1nUFNCdmNtbG5hVzVoYkR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NISnZjSE11Y0dGeWRHbGhiSE5iYjNCMGFXOXVjeTVoY21keld6QmRYU0E5SUc5d2RHbHZibk11Wm00N1hHNWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGVycm9yUHJvcHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnZW5kTGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIHZhciBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSA9IHVuZGVmaW5lZCxcbiAgICAgIGVuZExpbmVOdW1iZXIgPSB1bmRlZmluZWQsXG4gICAgICBjb2x1bW4gPSB1bmRlZmluZWQsXG4gICAgICBlbmRDb2x1bW4gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBlbmRMaW5lTnVtYmVyID0gbG9jLmVuZC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG4gICAgZW5kQ29sdW1uID0gbG9jLmVuZC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAobG9jKSB7XG4gICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuICAgICAgdGhpcy5lbmRMaW5lTnVtYmVyID0gZW5kTGluZU51bWJlcjtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZW5kQ29sdW1uJywge1xuICAgICAgICAgIHZhbHVlOiBlbmRDb2x1bW4sXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgICB0aGlzLmVuZENvbHVtbiA9IGVuZENvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV4Y2VwdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMlY0WTJWd2RHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxGVkJRVlVzUjBGQlJ5eERRVU5xUWl4aFFVRmhMRVZCUTJJc1ZVRkJWU3hGUVVOV0xGbEJRVmtzUlVGRFdpeGxRVUZsTEVWQlEyWXNVMEZCVXl4RlFVTlVMRTFCUVUwc1JVRkRUaXhSUVVGUkxFVkJRMUlzVDBGQlR5eERRVU5TTEVOQlFVTTdPMEZCUlVZc1UwRkJVeXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTm9ReXhOUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjN1RVRkRlRUlzU1VGQlNTeFpRVUZCTzAxQlEwb3NZVUZCWVN4WlFVRkJPMDFCUTJJc1RVRkJUU3haUVVGQk8wMUJRMDRzVTBGQlV5eFpRVUZCTEVOQlFVTTdPMEZCUlZvc1RVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFVDeFJRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU03UVVGRGRFSXNhVUpCUVdFc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXp0QlFVTTNRaXhWUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkRNVUlzWVVGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVV6UWl4WFFVRlBMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRPMGRCUTNoRE96dEJRVVZFTEUxQlFVa3NSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03T3p0QlFVY3hSQ3hQUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0QlFVTm9SQ3hSUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGRCUXpsRE96czdRVUZIUkN4TlFVRkpMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNSVUZCUlR0QlFVTXpRaXhUUVVGTExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBkQlF6RkRPenRCUVVWRUxFMUJRVWs3UVVGRFJpeFJRVUZKTEVkQlFVY3NSVUZCUlR0QlFVTlFMRlZCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzWkNMRlZCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZET3pzN08wRkJTVzVETEZWQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1JVRkJSVHRCUVVONlFpeGpRVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVU3UVVGRGNFTXNaVUZCU3l4RlFVRkZMRTFCUVUwN1FVRkRZaXh2UWtGQlZTeEZRVUZGTEVsQlFVazdVMEZEYWtJc1EwRkJReXhEUVVGRE8wRkJRMGdzWTBGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRk8wRkJRM1pETEdWQlFVc3NSVUZCUlN4VFFVRlRPMEZCUTJoQ0xHOUNRVUZWTEVWQlFVVXNTVUZCU1R0VFFVTnFRaXhEUVVGRExFTkJRVU03VDBGRFNpeE5RVUZOTzBGQlEwd3NXVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03UVVGRGNrSXNXVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03VDBGRE5VSTdTMEZEUmp0SFFVTkdMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3TzBkQlJXSTdRMEZEUmpzN1FVRkZSQ3hUUVVGVExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNN08zRkNRVVZ1UWl4VFFVRlRJaXdpWm1sc1pTSTZJbVY0WTJWd2RHbHZiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUdWeWNtOXlVSEp2Y0hNZ1BTQmJYRzRnSUNka1pYTmpjbWx3ZEdsdmJpY3NYRzRnSUNkbWFXeGxUbUZ0WlNjc1hHNGdJQ2RzYVc1bFRuVnRZbVZ5Snl4Y2JpQWdKMlZ1WkV4cGJtVk9kVzFpWlhJbkxGeHVJQ0FuYldWemMyRm5aU2NzWEc0Z0lDZHVZVzFsSnl4Y2JpQWdKMjUxYldKbGNpY3NYRzRnSUNkemRHRmpheWRjYmwwN1hHNWNibVoxYm1OMGFXOXVJRVY0WTJWd2RHbHZiaWh0WlhOellXZGxMQ0J1YjJSbEtTQjdYRzRnSUd4bGRDQnNiMk1nUFNCdWIyUmxJQ1ltSUc1dlpHVXViRzlqTEZ4dUlDQWdJR3hwYm1Vc1hHNGdJQ0FnWlc1a1RHbHVaVTUxYldKbGNpeGNiaUFnSUNCamIyeDFiVzRzWEc0Z0lDQWdaVzVrUTI5c2RXMXVPMXh1WEc0Z0lHbG1JQ2hzYjJNcElIdGNiaUFnSUNCc2FXNWxJRDBnYkc5akxuTjBZWEowTG14cGJtVTdYRzRnSUNBZ1pXNWtUR2x1WlU1MWJXSmxjaUE5SUd4dll5NWxibVF1YkdsdVpUdGNiaUFnSUNCamIyeDFiVzRnUFNCc2IyTXVjM1JoY25RdVkyOXNkVzF1TzF4dUlDQWdJR1Z1WkVOdmJIVnRiaUE5SUd4dll5NWxibVF1WTI5c2RXMXVPMXh1WEc0Z0lDQWdiV1Z6YzJGblpTQXJQU0FuSUMwZ0p5QXJJR3hwYm1VZ0t5QW5PaWNnS3lCamIyeDFiVzQ3WEc0Z0lIMWNibHh1SUNCc1pYUWdkRzF3SUQwZ1JYSnliM0l1Y0hKdmRHOTBlWEJsTG1OdmJuTjBjblZqZEc5eUxtTmhiR3dvZEdocGN5d2diV1Z6YzJGblpTazdYRzVjYmlBZ0x5OGdWVzVtYjNKMGRXNWhkR1ZzZVNCbGNuSnZjbk1nWVhKbElHNXZkQ0JsYm5WdFpYSmhZbXhsSUdsdUlFTm9jbTl0WlNBb1lYUWdiR1ZoYzNRcExDQnpieUJnWm05eUlIQnliM0FnYVc0Z2RHMXdZQ0JrYjJWemJpZDBJSGR2Y21zdVhHNGdJR1p2Y2lBb2JHVjBJR2xrZUNBOUlEQTdJR2xrZUNBOElHVnljbTl5VUhKdmNITXViR1Z1WjNSb095QnBaSGdyS3lrZ2UxeHVJQ0FnSUhSb2FYTmJaWEp5YjNKUWNtOXdjMXRwWkhoZFhTQTlJSFJ0Y0Z0bGNuSnZjbEJ5YjNCelcybGtlRjFkTzF4dUlDQjlYRzVjYmlBZ0x5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHVnNjMlVnS2k5Y2JpQWdhV1lnS0VWeWNtOXlMbU5oY0hSMWNtVlRkR0ZqYTFSeVlXTmxLU0I3WEc0Z0lDQWdSWEp5YjNJdVkyRndkSFZ5WlZOMFlXTnJWSEpoWTJVb2RHaHBjeXdnUlhoalpYQjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lIUnllU0I3WEc0Z0lDQWdhV1lnS0d4dll5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FXNWxUblZ0WW1WeUlEMGdiR2x1WlR0Y2JpQWdJQ0FnSUhSb2FYTXVaVzVrVEdsdVpVNTFiV0psY2lBOUlHVnVaRXhwYm1WT2RXMWlaWEk3WEc1Y2JpQWdJQ0FnSUM4dklGZHZjbXNnWVhKdmRXNWtJR2x6YzNWbElIVnVaR1Z5SUhOaFptRnlhU0IzYUdWeVpTQjNaU0JqWVc0bmRDQmthWEpsWTNSc2VTQnpaWFFnZEdobElHTnZiSFZ0YmlCMllXeDFaVnh1SUNBZ0lDQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNiaUFnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrcElIdGNiaUFnSUNBZ0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0hSb2FYTXNJQ2RqYjJ4MWJXNG5MQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnNkV1U2SUdOdmJIVnRiaXhjYmlBZ0lDQWdJQ0FnSUNCbGJuVnRaWEpoWW14bE9pQjBjblZsWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvZEdocGN5d2dKMlZ1WkVOdmJIVnRiaWNzSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ1pXNWtRMjlzZFcxdUxGeHVJQ0FnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVmNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZiSFZ0YmlBOUlHTnZiSFZ0Ymp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1SRGIyeDFiVzRnUFNCbGJtUkRiMngxYlc0N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlJR05oZEdOb0lDaHViM0FwSUh0Y2JpQWdJQ0F2S2lCSloyNXZjbVVnYVdZZ2RHaGxJR0p5YjNkelpYSWdhWE1nZG1WeWVTQndZWEowYVdOMWJHRnlJQ292WEc0Z0lIMWNibjFjYmx4dVJYaGpaWEIwYVc5dUxuQnliM1J2ZEhsd1pTQTlJRzVsZHlCRmNuSnZjaWdwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCRmVHTmxjSFJwYjI0N1hHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMgPSByZWdpc3RlckRlZmF1bHRIZWxwZXJzO1xuZXhwb3J0cy5tb3ZlSGVscGVyVG9Ib29rcyA9IG1vdmVIZWxwZXJUb0hvb2tzO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnKTtcblxudmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcpO1xuXG52YXIgX2hlbHBlcnNFYWNoID0gcmVxdWlyZSgnLi9oZWxwZXJzL2VhY2gnKTtcblxudmFyIF9oZWxwZXJzRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzRWFjaCk7XG5cbnZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcgPSByZXF1aXJlKCcuL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcnKTtcblxudmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSGVscGVyTWlzc2luZyk7XG5cbnZhciBfaGVscGVyc0lmID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lmJyk7XG5cbnZhciBfaGVscGVyc0lmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNJZik7XG5cbnZhciBfaGVscGVyc0xvZyA9IHJlcXVpcmUoJy4vaGVscGVycy9sb2cnKTtcblxudmFyIF9oZWxwZXJzTG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb2cpO1xuXG52YXIgX2hlbHBlcnNMb29rdXAgPSByZXF1aXJlKCcuL2hlbHBlcnMvbG9va3VwJyk7XG5cbnZhciBfaGVscGVyc0xvb2t1cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9va3VwKTtcblxudmFyIF9oZWxwZXJzV2l0aCA9IHJlcXVpcmUoJy4vaGVscGVycy93aXRoJyk7XG5cbnZhciBfaGVscGVyc1dpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc1dpdGgpO1xuXG5mdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNFYWNoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNJZjJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzTG9nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc1dpdGgyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xufVxuXG5mdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuICBpZiAoaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXSkge1xuICAgIGluc3RhbmNlLmhvb2tzW2hlbHBlck5hbWVdID0gaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBpZiAoIWtlZXBIZWxwZXIpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIH1cbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPM2xEUVVGMVF5eG5RMEZCWjBNN096czdNa0pCUXpsRExHZENRVUZuUWpzN096dHZRMEZEVUN3d1FrRkJNRUk3T3pzN2VVSkJRM0pETEdOQlFXTTdPenM3TUVKQlEySXNaVUZCWlRzN096czJRa0ZEV2l4clFrRkJhMEk3T3pzN01rSkJRM0JDTEdkQ1FVRm5RanM3T3p0QlFVVnNReXhUUVVGVExITkNRVUZ6UWl4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVNdlF5eDVRMEZCTWtJc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGNrTXNNa0pCUVdFc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGRrSXNiME5CUVhOQ0xGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEyaERMSGxDUVVGWExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEzSkNMREJDUVVGWkxGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEzUkNMRFpDUVVGbExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEzcENMREpDUVVGaExGRkJRVkVzUTBGQlF5eERRVUZETzBOQlEzaENPenRCUVVWTkxGTkJRVk1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVTdRVUZEYkVVc1RVRkJTU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMEZCUTJoRExGbEJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0QlFVTXhSQ3hSUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTzBGQlEyWXNZVUZCVHl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzB0QlEzSkRPMGRCUTBZN1EwRkRSaUlzSW1acGJHVWlPaUpvWld4d1pYSnpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbFoybHpkR1Z5UW14dlkydElaV3h3WlhKTmFYTnphVzVuSUdaeWIyMGdKeTR2YUdWc2NHVnljeTlpYkc5amF5MW9aV3h3WlhJdGJXbHpjMmx1WnljN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKRllXTm9JR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWxZV05vSnp0Y2JtbHRjRzl5ZENCeVpXZHBjM1JsY2tobGJIQmxjazFwYzNOcGJtY2dabkp2YlNBbkxpOW9aV3h3WlhKekwyaGxiSEJsY2kxdGFYTnphVzVuSnp0Y2JtbHRjRzl5ZENCeVpXZHBjM1JsY2tsbUlHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5cFppYzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSk1iMmNnWm5KdmJTQW5MaTlvWld4d1pYSnpMMnh2WnljN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKTWIyOXJkWEFnWm5KdmJTQW5MaTlvWld4d1pYSnpMMnh2YjJ0MWNDYzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSlhhWFJvSUdaeWIyMGdKeTR2YUdWc2NHVnljeTkzYVhSb0p6dGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEpsWjJsemRHVnlSR1ZtWVhWc2RFaGxiSEJsY25Nb2FXNXpkR0Z1WTJVcElIdGNiaUFnY21WbmFYTjBaWEpDYkc5amEwaGxiSEJsY2sxcGMzTnBibWNvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNrVmhZMmdvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNraGxiSEJsY2sxcGMzTnBibWNvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNrbG1LR2x1YzNSaGJtTmxLVHRjYmlBZ2NtVm5hWE4wWlhKTWIyY29hVzV6ZEdGdVkyVXBPMXh1SUNCeVpXZHBjM1JsY2t4dmIydDFjQ2hwYm5OMFlXNWpaU2s3WEc0Z0lISmxaMmx6ZEdWeVYybDBhQ2hwYm5OMFlXNWpaU2s3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnRiM1psU0dWc2NHVnlWRzlJYjI5cmN5aHBibk4wWVc1alpTd2dhR1ZzY0dWeVRtRnRaU3dnYTJWbGNFaGxiSEJsY2lrZ2UxeHVJQ0JwWmlBb2FXNXpkR0Z1WTJVdWFHVnNjR1Z5YzF0b1pXeHdaWEpPWVcxbFhTa2dlMXh1SUNBZ0lHbHVjM1JoYm1ObExtaHZiMnR6VzJobGJIQmxjazVoYldWZElEMGdhVzV6ZEdGdVkyVXVhR1ZzY0dWeWMxdG9aV3h3WlhKT1lXMWxYVHRjYmlBZ0lDQnBaaUFvSVd0bFpYQklaV3h3WlhJcElIdGNiaUFnSUNBZ0lHUmxiR1YwWlNCcGJuTjBZVzVqWlM1b1pXeHdaWEp6VzJobGJIQmxjazVoYldWZE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZZbXh2WTJzdGFHVnNjR1Z5TFcxcGMzTnBibWN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dHhRa0ZCZDBRc1ZVRkJWVHM3Y1VKQlJXNUVMRlZCUVZNc1VVRkJVU3hGUVVGRk8wRkJRMmhETEZWQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNWVUZCVXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM1pGTEZGQlFVa3NUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUE8xRkJRek5DTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRE96dEJRVVZzUWl4UlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFVkJRVVU3UVVGRGNFSXNZVUZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGFrSXNUVUZCVFN4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzVDBGQlR5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTXZReXhoUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTjBRaXhOUVVGTkxFbEJRVWtzWlVGQlVTeFBRVUZQTEVOQlFVTXNSVUZCUlR0QlFVTXpRaXhWUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNSQ0xGbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTm1MR2xDUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemxDT3p0QlFVVkVMR1ZCUVU4c1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wOUJRMmhFTEUxQlFVMDdRVUZEVEN4bFFVRlBMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFBRVU4wUWp0TFFVTkdMRTFCUVUwN1FVRkRUQ3hWUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVNdlFpeFpRVUZKTEVsQlFVa3NSMEZCUnl4dFFrRkJXU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEY2tNc1dVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eDVRa0ZEYWtJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlEzaENMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRMklzUTBGQlF6dEJRVU5HTEdWQlFVOHNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFBRVU14UWpzN1FVRkZSQ3hoUVVGUExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1MwRkROMEk3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKaWJHOWpheTFvWld4d1pYSXRiV2x6YzJsdVp5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvTENCamNtVmhkR1ZHY21GdFpTd2dhWE5CY25KaGVTQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJKc2IyTnJTR1ZzY0dWeVRXbHpjMmx1Wnljc0lHWjFibU4wYVc5dUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCc1pYUWdhVzUyWlhKelpTQTlJRzl3ZEdsdmJuTXVhVzUyWlhKelpTeGNiaUFnSUNBZ0lHWnVJRDBnYjNCMGFXOXVjeTVtYmp0Y2JseHVJQ0FnSUdsbUlDaGpiMjUwWlhoMElEMDlQU0IwY25WbEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNG9kR2hwY3lrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoamIyNTBaWGgwSUQwOVBTQm1ZV3h6WlNCOGZDQmpiMjUwWlhoMElEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCcGJuWmxjbk5sS0hSb2FYTXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaGpiMjUwWlhoMEtTa2dlMXh1SUNBZ0lDQWdhV1lnS0dOdmJuUmxlSFF1YkdWdVozUm9JRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVwWkhNcElIdGNiaUFnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbWxrY3lBOUlGdHZjSFJwYjI1ekxtNWhiV1ZkTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbHVjM1JoYm1ObExtaGxiSEJsY25NdVpXRmphQ2hqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBiblpsY25ObEtIUm9hWE1wTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVrWVhSaElDWW1JRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JrWVhSaElEMGdZM0psWVhSbFJuSmhiV1VvYjNCMGFXOXVjeTVrWVhSaEtUdGNiaUFnSUNBZ0lDQWdaR0YwWVM1amIyNTBaWGgwVUdGMGFDQTlJR0Z3Y0dWdVpFTnZiblJsZUhSUVlYUm9LRnh1SUNBZ0lDQWdJQ0FnSUc5d2RHbHZibk11WkdGMFlTNWpiMjUwWlhoMFVHRjBhQ3hjYmlBZ0lDQWdJQ0FnSUNCdmNIUnBiMjV6TG01aGJXVmNiaUFnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJQ0FnYjNCMGFXOXVjeUE5SUhzZ1pHRjBZVG9nWkdGMFlTQjlPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWs3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibjFjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbixcbiAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJldCA9ICcnLFxuICAgICAgICBkYXRhID0gdW5kZWZpbmVkLFxuICAgICAgICBjb250ZXh0UGF0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgaW4gY29udGV4dCkge1xuICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChnbG9iYWwuU3ltYm9sICYmIGNvbnRleHRbZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgICAgdmFyIG5ld0NvbnRleHQgPSBbXTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gY29udGV4dFtnbG9iYWwuU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICBmb3IgKHZhciBpdCA9IGl0ZXJhdG9yLm5leHQoKTsgIWl0LmRvbmU7IGl0ID0gaXRlcmF0b3IubmV4dCgpKSB7XG4gICAgICAgICAgbmV3Q29udGV4dC5wdXNoKGl0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0ID0gbmV3Q29udGV4dDtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBwcmlvcktleSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRleHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgICAvLyB0aGUgbGFzdCBpdGVyYXRpb24gd2l0aG91dCBoYXZlIHRvIHNjYW4gdGhlIG9iamVjdCB0d2ljZSBhbmQgY3JlYXRlXG4gICAgICAgICAgICAvLyBhbiBpdGVybWVkaWF0ZSBrZXlzIGFycmF5LlxuICAgICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHJldCA9IGludmVyc2UodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdlpXRmphQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPM0ZDUVUxUExGVkJRVlU3TzNsQ1FVTkxMR05CUVdNN096czdjVUpCUlhKQ0xGVkJRVk1zVVVGQlVTeEZRVUZGTzBGQlEyaERMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEZWQlFWTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVONlJDeFJRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTFvc1dVRkJUU3d5UWtGQll5dzJRa0ZCTmtJc1EwRkJReXhEUVVGRE8wdEJRM0JFT3p0QlFVVkVMRkZCUVVrc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEZRVUZGTzFGQlEycENMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR6dFJRVU42UWl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVOTUxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFGQlExSXNTVUZCU1N4WlFVRkJPMUZCUTBvc1YwRkJWeXhaUVVGQkxFTkJRVU03TzBGQlJXUXNVVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVTdRVUZETDBJc2FVSkJRVmNzUjBGRFZDeDVRa0ZCYTBJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0TFFVTnlSVHM3UVVGRlJDeFJRVUZKTEd0Q1FVRlhMRTlCUVU4c1EwRkJReXhGUVVGRk8wRkJRM1pDTEdGQlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlF6bENPenRCUVVWRUxGRkJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlR0QlFVTm9RaXhWUVVGSkxFZEJRVWNzYlVKQlFWa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRMnhET3p0QlFVVkVMR0ZCUVZNc1lVRkJZU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZPMEZCUTNwRExGVkJRVWtzU1VGQlNTeEZRVUZGTzBGQlExSXNXVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRGFrSXNXVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRGJrSXNXVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEzcENMRmxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXpzN1FVRkZia0lzV1VGQlNTeFhRVUZYTEVWQlFVVTdRVUZEWml4alFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVMEZEZUVNN1QwRkRSanM3UVVGRlJDeFRRVUZITEVkQlEwUXNSMEZCUnl4SFFVTklMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdRVUZEYWtJc1dVRkJTU3hGUVVGRkxFbEJRVWs3UVVGRFZpeHRRa0ZCVnl4RlFVRkZMRzFDUVVOWUxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVOMlFpeERRVUZETEZkQlFWY3NSMEZCUnl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRelZDTzA5QlEwWXNRMEZCUXl4RFFVRkRPMHRCUTA0N08wRkJSVVFzVVVGQlNTeFBRVUZQTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRekZETEZWQlFVa3NaVUZCVVN4UFFVRlBMRU5CUVVNc1JVRkJSVHRCUVVOd1FpeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOMlF5eGpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRVZCUVVVN1FVRkRhRUlzZVVKQlFXRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xZEJReTlETzFOQlEwWTdUMEZEUml4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdEJRVU16UkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNXVUZCVFN4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOdVJDeGhRVUZMTEVsQlFVa3NSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlR0QlFVTTNSQ3h2UWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRE0wSTdRVUZEUkN4bFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE8wRkJRM0pDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM1pETEhWQ1FVRmhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU12UXp0UFFVTkdMRTFCUVUwN08wRkJRMHdzWTBGQlNTeFJRVUZSTEZsQlFVRXNRMEZCUXpzN1FVRkZZaXhuUWtGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlFTeEhRVUZITEVWQlFVazdPenM3UVVGSmJFTXNaMEpCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU14UWl3eVFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRhRU03UVVGRFJDeHZRa0ZCVVN4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVObUxHRkJRVU1zUlVGQlJTeERRVUZETzFkQlEwd3NRMEZCUXl4RFFVRkRPMEZCUTBnc1kwRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEZRVUZGTzBGQlF6RkNMSGxDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VjBGRGRFTTdPMDlCUTBZN1MwRkRSanM3UVVGRlJDeFJRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRXQ3hUUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTNKQ096dEJRVVZFTEZkQlFVOHNSMEZCUnl4RFFVRkRPMGRCUTFvc1EwRkJReXhEUVVGRE8wTkJRMG9pTENKbWFXeGxJam9pWldGamFDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lHRndjR1Z1WkVOdmJuUmxlSFJRWVhSb0xGeHVJQ0JpYkc5amExQmhjbUZ0Y3l4Y2JpQWdZM0psWVhSbFJuSmhiV1VzWEc0Z0lHbHpRWEp5WVhrc1hHNGdJR2x6Um5WdVkzUnBiMjVjYm4wZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dWFXMXdiM0owSUVWNFkyVndkR2x2YmlCbWNtOXRJQ2N1TGk5bGVHTmxjSFJwYjI0bk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpaHBibk4wWVc1alpTa2dlMXh1SUNCcGJuTjBZVzVqWlM1eVpXZHBjM1JsY2tobGJIQmxjaWduWldGamFDY3NJR1oxYm1OMGFXOXVLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvSVc5d2RHbHZibk1wSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0owMTFjM1FnY0dGemN5QnBkR1Z5WVhSdmNpQjBieUFqWldGamFDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNHNYRzRnSUNBZ0lDQnBiblpsY25ObElEMGdiM0IwYVc5dWN5NXBiblpsY25ObExGeHVJQ0FnSUNBZ2FTQTlJREFzWEc0Z0lDQWdJQ0J5WlhRZ1BTQW5KeXhjYmlBZ0lDQWdJR1JoZEdFc1hHNGdJQ0FnSUNCamIyNTBaWGgwVUdGMGFEdGNibHh1SUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbVJoZEdFZ0ppWWdiM0IwYVc5dWN5NXBaSE1wSUh0Y2JpQWdJQ0FnSUdOdmJuUmxlSFJRWVhSb0lEMWNiaUFnSUNBZ0lDQWdZWEJ3Wlc1a1EyOXVkR1Y0ZEZCaGRHZ29iM0IwYVc5dWN5NWtZWFJoTG1OdmJuUmxlSFJRWVhSb0xDQnZjSFJwYjI1ekxtbGtjMXN3WFNrZ0t5QW5MaWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dselJuVnVZM1JwYjI0b1kyOXVkR1Y0ZENrcElIdGNiaUFnSUNBZ0lHTnZiblJsZUhRZ1BTQmpiMjUwWlhoMExtTmhiR3dvZEdocGN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVaR0YwWVNrZ2UxeHVJQ0FnSUNBZ1pHRjBZU0E5SUdOeVpXRjBaVVp5WVcxbEtHOXdkR2x2Ym5NdVpHRjBZU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdablZ1WTNScGIyNGdaWGhsWTBsMFpYSmhkR2x2YmlobWFXVnNaQ3dnYVc1a1pYZ3NJR3hoYzNRcElIdGNiaUFnSUNBZ0lHbG1JQ2hrWVhSaEtTQjdYRzRnSUNBZ0lDQWdJR1JoZEdFdWEyVjVJRDBnWm1sbGJHUTdYRzRnSUNBZ0lDQWdJR1JoZEdFdWFXNWtaWGdnUFNCcGJtUmxlRHRjYmlBZ0lDQWdJQ0FnWkdGMFlTNW1hWEp6ZENBOUlHbHVaR1Y0SUQwOVBTQXdPMXh1SUNBZ0lDQWdJQ0JrWVhSaExteGhjM1FnUFNBaElXeGhjM1E3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR052Ym5SbGVIUlFZWFJvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdaR0YwWVM1amIyNTBaWGgwVUdGMGFDQTlJR052Ym5SbGVIUlFZWFJvSUNzZ1ptbGxiR1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBJRDFjYmlBZ0lDQWdJQ0FnY21WMElDdGNiaUFnSUNBZ0lDQWdabTRvWTI5dWRHVjRkRnRtYVdWc1pGMHNJSHRjYmlBZ0lDQWdJQ0FnSUNCa1lYUmhPaUJrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJR0pzYjJOclVHRnlZVzF6T2lCaWJHOWphMUJoY21GdGN5aGNiaUFnSUNBZ0lDQWdJQ0FnSUZ0amIyNTBaWGgwVzJacFpXeGtYU3dnWm1sbGJHUmRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1cyTnZiblJsZUhSUVlYUm9JQ3NnWm1sbGJHUXNJRzUxYkd4ZFhHNGdJQ0FnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1kyOXVkR1Y0ZENBbUppQjBlWEJsYjJZZ1kyOXVkR1Y0ZENBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJR2xtSUNocGMwRnljbUY1S0dOdmJuUmxlSFFwS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHb2dQU0JqYjI1MFpYaDBMbXhsYm1kMGFEc2dhU0E4SUdvN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2hwSUdsdUlHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWNFpXTkpkR1Z5WVhScGIyNG9hU3dnYVN3Z2FTQTlQVDBnWTI5dWRHVjRkQzVzWlc1bmRHZ2dMU0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvWjJ4dlltRnNMbE41YldKdmJDQW1KaUJqYjI1MFpYaDBXMmRzYjJKaGJDNVRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNWxkME52Ym5SbGVIUWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVhSbGNtRjBiM0lnUFNCamIyNTBaWGgwVzJkc2IySmhiQzVUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2s3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdsMElEMGdhWFJsY21GMGIzSXVibVY0ZENncE95QWhhWFF1Wkc5dVpUc2dhWFFnUFNCcGRHVnlZWFJ2Y2k1dVpYaDBLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQnVaWGREYjI1MFpYaDBMbkIxYzJnb2FYUXVkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUWdQU0J1WlhkRGIyNTBaWGgwTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcUlEMGdZMjl1ZEdWNGRDNXNaVzVuZEdnN0lHa2dQQ0JxT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCbGVHVmpTWFJsY21GMGFXOXVLR2tzSUdrc0lHa2dQVDA5SUdOdmJuUmxlSFF1YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3Y21sdmNrdGxlVHRjYmx4dUlDQWdJQ0FnSUNCUFltcGxZM1F1YTJWNWN5aGpiMjUwWlhoMEtTNW1iM0pGWVdOb0tHdGxlU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnVjJVbmNtVWdjblZ1Ym1sdVp5QjBhR1VnYVhSbGNtRjBhVzl1Y3lCdmJtVWdjM1JsY0NCdmRYUWdiMllnYzNsdVl5QnpieUIzWlNCallXNGdaR1YwWldOMFhHNGdJQ0FnSUNBZ0lDQWdMeThnZEdobElHeGhjM1FnYVhSbGNtRjBhVzl1SUhkcGRHaHZkWFFnYUdGMlpTQjBieUJ6WTJGdUlIUm9aU0J2WW1wbFkzUWdkSGRwWTJVZ1lXNWtJR055WldGMFpWeHVJQ0FnSUNBZ0lDQWdJQzh2SUdGdUlHbDBaWEp0WldScFlYUmxJR3RsZVhNZ1lYSnlZWGt1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YVc5eVMyVjVJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWNFpXTkpkR1Z5WVhScGIyNG9jSEpwYjNKTFpYa3NJR2tnTFNBeEtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2NISnBiM0pMWlhrZ1BTQnJaWGs3WEc0Z0lDQWdJQ0FnSUNBZ2FTc3JPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YVc5eVMyVjVJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0JsZUdWalNYUmxjbUYwYVc5dUtIQnlhVzl5UzJWNUxDQnBJQzBnTVN3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FTQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBJRDBnYVc1MlpYSnpaU2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4uL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSAvKiBbYXJncywgXW9wdGlvbnMgKi97XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3RydWN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmFHVnNjR1Z5TFcxcGMzTnBibWN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenQ1UWtGQmMwSXNZMEZCWXpzN096dHhRa0ZGY2tJc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhsUVVGbExFVkJRVVVzYVVOQlFXZERPMEZCUTNaRkxGRkJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN08wRkJSVEZDTEdGQlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q0xFMUJRVTA3TzBGQlJVd3NXVUZCVFN3eVFrRkRTaXh0UWtGQmJVSXNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVOcVJTeERRVUZETzB0QlEwZzdSMEZEUml4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUpvWld4d1pYSXRiV2x6YzJsdVp5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JGZUdObGNIUnBiMjRnWm5KdmJTQW5MaTR2WlhoalpYQjBhVzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMmhsYkhCbGNrMXBjM05wYm1jbkxDQm1kVzVqZEdsdmJpZ3ZLaUJiWVhKbmN5d2dYVzl3ZEdsdmJuTWdLaThwSUh0Y2JpQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnTHk4Z1FTQnRhWE56YVc1bklHWnBaV3hrSUdsdUlHRWdlM3RtYjI5OWZTQmpiMjV6ZEhKMVkzUXVYRzRnSUNBZ0lDQnlaWFIxY200Z2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0F2THlCVGIyMWxiMjVsSUdseklHRmpkSFZoYkd4NUlIUnllV2x1WnlCMGJ5QmpZV3hzSUhOdmJXVjBhR2x1Wnl3Z1lteHZkeUIxY0M1Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b1hHNGdJQ0FnSUNBZ0lDZE5hWE56YVc1bklHaGxiSEJsY2pvZ1hDSW5JQ3NnWVhKbmRXMWxiblJ6VzJGeVozVnRaVzUwY3k1c1pXNW5kR2dnTFNBeFhTNXVZVzFsSUNzZ0oxd2lKMXh1SUNBZ0lDQWdLVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVmVnh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IF91dGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMikge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJyN1bmxlc3MgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge1xuICAgICAgZm46IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgIGludmVyc2U6IG9wdGlvbnMuZm4sXG4gICAgICBoYXNoOiBvcHRpb25zLmhhc2hcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmFXWXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dHhRa0ZCYjBNc1ZVRkJWVHM3ZVVKQlEzaENMR05CUVdNN096czdjVUpCUlhKQ0xGVkJRVk1zVVVGQlVTeEZRVUZGTzBGQlEyaERMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWTXNWMEZCVnl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVNelJDeFJRVUZKTEZOQlFWTXNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRM3BDTEZsQlFVMHNNa0pCUVdNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0TFFVTXhSRHRCUVVORUxGRkJRVWtzYTBKQlFWY3NWMEZCVnl4RFFVRkRMRVZCUVVVN1FVRkRNMElzYVVKQlFWY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEzUkRPenM3T3p0QlFVdEVMRkZCUVVrc1FVRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGTExHVkJRVkVzVjBGQlZ5eERRVUZETEVWQlFVVTdRVUZEZGtVc1lVRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXpsQ0xFMUJRVTA3UVVGRFRDeGhRVUZQTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGVrSTdSMEZEUml4RFFVRkRMRU5CUVVNN08wRkJSVWdzVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1ZVRkJVeXhYUVVGWExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlF5OUVMRkZCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVWQlFVVTdRVUZEZWtJc1dVRkJUU3d5UWtGQll5eDFRMEZCZFVNc1EwRkJReXhEUVVGRE8wdEJRemxFTzBGQlEwUXNWMEZCVHl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRk8wRkJRM0JFTEZGQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1QwRkJUenRCUVVOdVFpeGhRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVN1FVRkRia0lzVlVGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4SlFVRkpPMHRCUTI1Q0xFTkJRVU1zUTBGQlF6dEhRVU5LTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbWxtTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dhWE5GYlhCMGVTd2dhWE5HZFc1amRHbHZiaUI5SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0JGZUdObGNIUnBiMjRnWm5KdmJTQW5MaTR2WlhoalpYQjBhVzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMmxtSnl3Z1puVnVZM1JwYjI0b1kyOXVaR2wwYVc5dVlXd3NJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0FoUFNBeUtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2NqYVdZZ2NtVnhkV2x5WlhNZ1pYaGhZM1JzZVNCdmJtVWdZWEpuZFcxbGJuUW5LVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLR2x6Um5WdVkzUnBiMjRvWTI5dVpHbDBhVzl1WVd3cEtTQjdYRzRnSUNBZ0lDQmpiMjVrYVhScGIyNWhiQ0E5SUdOdmJtUnBkR2x2Ym1Gc0xtTmhiR3dvZEdocGN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdSR1ZtWVhWc2RDQmlaV2hoZG1sdmNpQnBjeUIwYnlCeVpXNWtaWElnZEdobElIQnZjMmwwYVhabElIQmhkR2dnYVdZZ2RHaGxJSFpoYkhWbElHbHpJSFJ5ZFhSb2VTQmhibVFnYm05MElHVnRjSFI1TGx4dUlDQWdJQzh2SUZSb1pTQmdhVzVqYkhWa1pWcGxjbTlnSUc5d2RHbHZiaUJ0WVhrZ1ltVWdjMlYwSUhSdklIUnlaV0YwSUhSb1pTQmpiMjVrZEdsdmJtRnNJR0Z6SUhCMWNtVnNlU0J1YjNRZ1pXMXdkSGtnWW1GelpXUWdiMjRnZEdobFhHNGdJQ0FnTHk4Z1ltVm9ZWFpwYjNJZ2IyWWdhWE5GYlhCMGVTNGdSV1ptWldOMGFYWmxiSGtnZEdocGN5QmtaWFJsY20xcGJtVnpJR2xtSURBZ2FYTWdhR0Z1Wkd4bFpDQmllU0IwYUdVZ2NHOXphWFJwZG1VZ2NHRjBhQ0J2Y2lCdVpXZGhkR2wyWlM1Y2JpQWdJQ0JwWmlBb0tDRnZjSFJwYjI1ekxtaGhjMmd1YVc1amJIVmtaVnBsY204Z0ppWWdJV052Ym1ScGRHbHZibUZzS1NCOGZDQnBjMFZ0Y0hSNUtHTnZibVJwZEdsdmJtRnNLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzl3ZEdsdmJuTXVhVzUyWlhKelpTaDBhR2x6S1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOXdkR2x2Ym5NdVptNG9kR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQnBibk4wWVc1alpTNXlaV2RwYzNSbGNraGxiSEJsY2lnbmRXNXNaWE56Snl3Z1puVnVZM1JwYjI0b1kyOXVaR2wwYVc5dVlXd3NJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0FoUFNBeUtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2NqZFc1c1pYTnpJSEpsY1hWcGNtVnpJR1Y0WVdOMGJIa2diMjVsSUdGeVozVnRaVzUwSnlrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnBibk4wWVc1alpTNW9aV3h3WlhKeld5ZHBaaWRkTG1OaGJHd29kR2hwY3l3Z1kyOXVaR2wwYVc5dVlXd3NJSHRjYmlBZ0lDQWdJR1p1T2lCdmNIUnBiMjV6TG1sdWRtVnljMlVzWEc0Z0lDQWdJQ0JwYm5abGNuTmxPaUJ2Y0hScGIyNXpMbVp1TEZ4dUlDQWdJQ0FnYUdGemFEb2diM0IwYVc5dWN5NW9ZWE5vWEc0Z0lDQWdmU2s3WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb2cnLCBmdW5jdGlvbiAoKSAvKiBtZXNzYWdlLCBvcHRpb25zICove1xuICAgIHZhciBhcmdzID0gW3VuZGVmaW5lZF0sXG4gICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIGxldmVsID0gMTtcbiAgICBpZiAob3B0aW9ucy5oYXNoLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuZGF0YS5sZXZlbDtcbiAgICB9XG4gICAgYXJnc1swXSA9IGxldmVsO1xuXG4gICAgaW5zdGFuY2UubG9nLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmJHOW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN2NVSkJRV1VzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVWQlFVVXNhME5CUVdsRE8wRkJRemxFTEZGQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0JDTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTTFReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkROME1zVlVGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU42UWpzN1FVRkZSQ3hSUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEWkN4UlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTTVRaXhYUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1MwRkROVUlzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNKRUxGZEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVNMVFqdEJRVU5FTEZGQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJXaENMRmxCUVZFc1EwRkJReXhIUVVGSExFMUJRVUVzUTBGQldpeFJRVUZSTEVWQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNN1IwRkRka0lzUTBGQlF5eERRVUZETzBOQlEwb2lMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMnh2Wnljc0lHWjFibU4wYVc5dUtDOHFJRzFsYzNOaFoyVXNJRzl3ZEdsdmJuTWdLaThwSUh0Y2JpQWdJQ0JzWlhRZ1lYSm5jeUE5SUZ0MWJtUmxabWx1WldSZExGeHVJQ0FnSUNBZ2IzQjBhVzl1Y3lBOUlHRnlaM1Z0Wlc1MGMxdGhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNVjA3WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVRzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JoY21kekxuQjFjMmdvWVhKbmRXMWxiblJ6VzJsZEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdiR1YyWld3Z1BTQXhPMXh1SUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbWhoYzJndWJHVjJaV3dnSVQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnYkdWMlpXd2dQU0J2Y0hScGIyNXpMbWhoYzJndWJHVjJaV3c3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2h2Y0hScGIyNXpMbVJoZEdFZ0ppWWdiM0IwYVc5dWN5NWtZWFJoTG14bGRtVnNJQ0U5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJR3hsZG1Wc0lEMGdiM0IwYVc5dWN5NWtZWFJoTG14bGRtVnNPMXh1SUNBZ0lIMWNiaUFnSUNCaGNtZHpXekJkSUQwZ2JHVjJaV3c3WEc1Y2JpQWdJQ0JwYm5OMFlXNWpaUzVzYjJjb0xpNHVZWEpuY3lrN1hHNGdJSDBwTzF4dWZWeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24gKG9iaiwgZmllbGQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgLy8gTm90ZSBmb3IgNS4wOiBDaGFuZ2UgdG8gXCJvYmogPT0gbnVsbFwiIGluIDUuMFxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMubG9va3VwUHJvcGVydHkob2JqLCBmaWVsZCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZiRzl2YTNWd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3Y1VKQlFXVXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1ZVRkJVeXhIUVVGSExFVkJRVVVzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTTVSQ3hSUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGT3p0QlFVVlNMR0ZCUVU4c1IwRkJSeXhEUVVGRE8wdEJRMW83UVVGRFJDeFhRVUZQTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBkQlF6TkRMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNklteHZiMnQxY0M1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUtHbHVjM1JoYm1ObEtTQjdYRzRnSUdsdWMzUmhibU5sTG5KbFoybHpkR1Z5U0dWc2NHVnlLQ2RzYjI5cmRYQW5MQ0JtZFc1amRHbHZiaWh2WW1vc0lHWnBaV3hrTENCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnYVdZZ0tDRnZZbW9wSUh0Y2JpQWdJQ0FnSUM4dklFNXZkR1VnWm05eUlEVXVNRG9nUTJoaGJtZGxJSFJ2SUZ3aWIySnFJRDA5SUc1MWJHeGNJaUJwYmlBMUxqQmNiaUFnSUNBZ0lISmxkSFZ5YmlCdlltbzdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ2Y0hScGIyNXpMbXh2YjJ0MWNGQnliM0JsY25SNUtHOWlhaXdnWm1sbGJHUXBPMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignd2l0aCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMikge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJyN3aXRoIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKCFfdXRpbHMuaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12ZDJsMGFDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08zRkNRVTFQTEZWQlFWVTdPM2xDUVVOTExHTkJRV003T3pzN2NVSkJSWEpDTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU42UkN4UlFVRkpMRk5CUVZNc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEzcENMRmxCUVUwc01rSkJRV01zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRMUVVNMVJEdEJRVU5FTEZGQlFVa3NhMEpCUVZjc1QwRkJUeXhEUVVGRExFVkJRVVU3UVVGRGRrSXNZVUZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZET1VJN08wRkJSVVFzVVVGQlNTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJRenM3UVVGRmNFSXNVVUZCU1N4RFFVRkRMR1ZCUVZFc1QwRkJUeXhEUVVGRExFVkJRVVU3UVVGRGNrSXNWVUZCU1N4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU40UWl4VlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTXZRaXhaUVVGSkxFZEJRVWNzYlVKQlFWa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRMnBETEZsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc2VVSkJRMnBDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVONFFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVObUxFTkJRVU03VDBGRFNEczdRVUZGUkN4aFFVRlBMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRGFrSXNXVUZCU1N4RlFVRkZMRWxCUVVrN1FVRkRWaXh0UWtGQlZ5eEZRVUZGTEcxQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wOUJRMmhGTEVOQlFVTXNRMEZCUXp0TFFVTktMRTFCUVUwN1FVRkRUQ3hoUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRPVUk3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKM2FYUm9MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdZWEJ3Wlc1a1EyOXVkR1Y0ZEZCaGRHZ3NYRzRnSUdKc2IyTnJVR0Z5WVcxekxGeHVJQ0JqY21WaGRHVkdjbUZ0WlN4Y2JpQWdhWE5GYlhCMGVTeGNiaUFnYVhOR2RXNWpkR2x2Ymx4dWZTQm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1JYaGpaWEIwYVc5dUlHWnliMjBnSnk0dUwyVjRZMlZ3ZEdsdmJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVLR2x1YzNSaGJtTmxLU0I3WEc0Z0lHbHVjM1JoYm1ObExuSmxaMmx6ZEdWeVNHVnNjR1Z5S0NkM2FYUm9KeXdnWm5WdVkzUnBiMjRvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUNFOUlESXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSnlOM2FYUm9JSEpsY1hWcGNtVnpJR1Y0WVdOMGJIa2diMjVsSUdGeVozVnRaVzUwSnlrN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNocGMwWjFibU4wYVc5dUtHTnZiblJsZUhRcEtTQjdYRzRnSUNBZ0lDQmpiMjUwWlhoMElEMGdZMjl1ZEdWNGRDNWpZV3hzS0hSb2FYTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNDdYRzVjYmlBZ0lDQnBaaUFvSVdselJXMXdkSGtvWTI5dWRHVjRkQ2twSUh0Y2JpQWdJQ0FnSUd4bGRDQmtZWFJoSUQwZ2IzQjBhVzl1Y3k1a1lYUmhPMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11WkdGMFlTQW1KaUJ2Y0hScGIyNXpMbWxrY3lrZ2UxeHVJQ0FnSUNBZ0lDQmtZWFJoSUQwZ1kzSmxZWFJsUm5KaGJXVW9iM0IwYVc5dWN5NWtZWFJoS1R0Y2JpQWdJQ0FnSUNBZ1pHRjBZUzVqYjI1MFpYaDBVR0YwYUNBOUlHRndjR1Z1WkVOdmJuUmxlSFJRWVhSb0tGeHVJQ0FnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVaR0YwWVM1amIyNTBaWGgwVUdGMGFDeGNiaUFnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbWxrYzFzd1hWeHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvWTI5dWRHVjRkQ3dnZTF4dUlDQWdJQ0FnSUNCa1lYUmhPaUJrWVhSaExGeHVJQ0FnSUNBZ0lDQmliRzlqYTFCaGNtRnRjem9nWW14dlkydFFZWEpoYlhNb1cyTnZiblJsZUhSZExDQmJaR0YwWVNBbUppQmtZWFJoTG1OdmJuUmxlSFJRWVhSb1hTbGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNCMGFXOXVjeTVwYm5abGNuTmxLSFJvYVhNcE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZU5ld0xvb2t1cE9iamVjdCA9IGNyZWF0ZU5ld0xvb2t1cE9iamVjdDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIFwibnVsbFwiLXByb3RvdHlwZSB0byBhdm9pZCB0cnV0aHkgcmVzdWx0cyBvbiBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAqIFRoZSByZXN1bHRpbmcgb2JqZWN0IGNhbiBiZSB1c2VkIHdpdGggXCJvYmplY3RbcHJvcGVydHldXCIgdG8gY2hlY2sgaWYgYSBwcm9wZXJ0eSBleGlzdHNcbiAqIEBwYXJhbSB7Li4ub2JqZWN0fSBzb3VyY2VzIGEgdmFyYXJncyBwYXJhbWV0ZXIgb2Ygc291cmNlIG9iamVjdHMgdGhhdCB3aWxsIGJlIG1lcmdlZFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdMb29rdXBPYmplY3QoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzb3VyY2VzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc291cmNlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBfdXRpbHMuZXh0ZW5kLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5jcmVhdGUobnVsbCldLmNvbmNhdChzb3VyY2VzKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmx1ZEdWeWJtRnNMMk55WldGMFpTMXVaWGN0Ykc5dmEzVndMVzlpYW1WamRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0eFFrRkJkVUlzVlVGQlZUczdPenM3T3pzN08wRkJVVEZDTEZOQlFWTXNjVUpCUVhGQ0xFZEJRV0U3YjBOQlFWUXNUMEZCVHp0QlFVRlFMRmRCUVU4N096dEJRVU01UXl4VFFVRlBMR2REUVVGUExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVVzc1QwRkJUeXhGUVVGRExFTkJRVU03UTBGRGFFUWlMQ0ptYVd4bElqb2lZM0psWVhSbExXNWxkeTFzYjI5cmRYQXRiMkpxWldOMExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWlhoMFpXNWtJSDBnWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUc1bGR5QnZZbXBsWTNRZ2QybDBhQ0JjSW01MWJHeGNJaTF3Y205MGIzUjVjR1VnZEc4Z1lYWnZhV1FnZEhKMWRHaDVJSEpsYzNWc2RITWdiMjRnY0hKdmRHOTBlWEJsSUhCeWIzQmxjblJwWlhNdVhHNGdLaUJVYUdVZ2NtVnpkV3gwYVc1bklHOWlhbVZqZENCallXNGdZbVVnZFhObFpDQjNhWFJvSUZ3aWIySnFaV04wVzNCeWIzQmxjblI1WFZ3aUlIUnZJR05vWldOcklHbG1JR0VnY0hKdmNHVnlkSGtnWlhocGMzUnpYRzRnS2lCQWNHRnlZVzBnZXk0dUxtOWlhbVZqZEgwZ2MyOTFjbU5sY3lCaElIWmhjbUZ5WjNNZ2NHRnlZVzFsZEdWeUlHOW1JSE52ZFhKalpTQnZZbXBsWTNSeklIUm9ZWFFnZDJsc2JDQmlaU0J0WlhKblpXUmNiaUFxSUVCeVpYUjFjbTV6SUh0dlltcGxZM1I5WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmpjbVZoZEdWT1pYZE1iMjlyZFhCUFltcGxZM1FvTGk0dWMyOTFjbU5sY3lrZ2UxeHVJQ0J5WlhSMWNtNGdaWGgwWlc1a0tFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDa3NJQzR1TG5OdmRYSmpaWE1wTzF4dWZWeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbCA9IGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbDtcbmV4cG9ydHMucmVzdWx0SXNBbGxvd2VkID0gcmVzdWx0SXNBbGxvd2VkO1xuZXhwb3J0cy5yZXNldExvZ2dlZFByb3BlcnRpZXMgPSByZXNldExvZ2dlZFByb3BlcnRpZXM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX2NyZWF0ZU5ld0xvb2t1cE9iamVjdCA9IHJlcXVpcmUoJy4vY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0Jyk7XG5cbnZhciBfbG9nZ2VyID0gcmVxdWlyZSgnLi4vbG9nZ2VyJyk7XG5cbnZhciBsb2dnZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9nZ2VyKTtcblxudmFyIGxvZ2dlZFByb3BlcnRpZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wocnVudGltZU9wdGlvbnMpIHtcbiAgdmFyIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lR2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZVNldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cbiAgdmFyIGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3RbJ19fcHJvdG9fXyddID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IF9jcmVhdGVOZXdMb29rdXBPYmplY3QuY3JlYXRlTmV3TG9va3VwT2JqZWN0KGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCwgcnVudGltZU9wdGlvbnMuYWxsb3dlZFByb3RvUHJvcGVydGllcyksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9Qcm9wZXJ0aWVzQnlEZWZhdWx0XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IF9jcmVhdGVOZXdMb29rdXBPYmplY3QuY3JlYXRlTmV3TG9va3VwT2JqZWN0KGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHMpLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvTWV0aG9kc0J5RGVmYXVsdFxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgcHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLm1ldGhvZHMsIHByb3BlcnR5TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gPT09IHRydWU7XG4gIH1cbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSkge1xuICBpZiAobG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdICE9PSB0cnVlKSB7XG4gICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICBsb2dnZXIubG9nKCdlcnJvcicsICdIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJyArIHByb3BlcnR5TmFtZSArICdcIiBiZWNhdXNlIGl0IGlzIG5vdCBhbiBcIm93biBwcm9wZXJ0eVwiIG9mIGl0cyBwYXJlbnQuXFxuJyArICdZb3UgY2FuIGFkZCBhIHJ1bnRpbWUgb3B0aW9uIHRvIGRpc2FibGUgdGhlIGNoZWNrIG9yIHRoaXMgd2FybmluZzpcXG4nICsgJ1NlZSBodHRwczovL2hhbmRsZWJhcnNqcy5jb20vYXBpLXJlZmVyZW5jZS9ydW50aW1lLW9wdGlvbnMuaHRtbCNvcHRpb25zLXRvLWNvbnRyb2wtcHJvdG90eXBlLWFjY2VzcyBmb3IgZGV0YWlscycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0TG9nZ2VkUHJvcGVydGllcygpIHtcbiAgT2JqZWN0LmtleXMobG9nZ2VkUHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgZGVsZXRlIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmx1ZEdWeWJtRnNMM0J5YjNSdkxXRmpZMlZ6Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08zRkRRVUZ6UXl3MFFrRkJORUk3TzNOQ1FVTXhReXhYUVVGWE96dEpRVUYyUWl4TlFVRk5PenRCUVVWc1FpeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN08wRkJSWFJETEZOQlFWTXNkMEpCUVhkQ0xFTkJRVU1zWTBGQll5eEZRVUZGTzBGQlEzWkVMRTFCUVVrc2MwSkJRWE5DTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU5xUkN4M1FrRkJjMElzUTBGQlF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRPVU1zZDBKQlFYTkNMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRia1FzZDBKQlFYTkNMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRia1FzZDBKQlFYTkNMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSVzVFTEUxQlFVa3NkMEpCUVhkQ0xFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRmJrUXNNRUpCUVhkQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPenRCUVVVNVF5eFRRVUZQTzBGQlEwd3NZMEZCVlN4RlFVRkZPMEZCUTFZc1pVRkJVeXhGUVVGRkxEWkRRVU5VTEhkQ1FVRjNRaXhGUVVONFFpeGpRVUZqTEVOQlFVTXNjMEpCUVhOQ0xFTkJRM1JETzBGQlEwUXNhMEpCUVZrc1JVRkJSU3hqUVVGakxFTkJRVU1zTmtKQlFUWkNPMHRCUXpORU8wRkJRMFFzVjBGQlR5eEZRVUZGTzBGQlExQXNaVUZCVXl4RlFVRkZMRFpEUVVOVUxITkNRVUZ6UWl4RlFVTjBRaXhqUVVGakxFTkJRVU1zYlVKQlFXMUNMRU5CUTI1RE8wRkJRMFFzYTBKQlFWa3NSVUZCUlN4alFVRmpMRU5CUVVNc01FSkJRVEJDTzB0QlEzaEVPMGRCUTBZc1EwRkJRenREUVVOSU96dEJRVVZOTEZOQlFWTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hyUWtGQmEwSXNSVUZCUlN4WlFVRlpMRVZCUVVVN1FVRkRlRVVzVFVGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4VlFVRlZMRVZCUVVVN1FVRkRhRU1zVjBGQlR5eGpRVUZqTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMGRCUTJwRkxFMUJRVTA3UVVGRFRDeFhRVUZQTEdOQlFXTXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eFZRVUZWTEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNN1IwRkRjRVU3UTBGRFJqczdRVUZGUkN4VFFVRlRMR05CUVdNc1EwRkJReXg1UWtGQmVVSXNSVUZCUlN4WlFVRlpMRVZCUVVVN1FVRkRMMFFzVFVGQlNTeDVRa0ZCZVVJc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUTI1RkxGZEJRVThzZVVKQlFYbENMRU5CUVVNc1UwRkJVeXhEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXp0SFFVTnVSVHRCUVVORUxFMUJRVWtzZVVKQlFYbENMRU5CUVVNc1dVRkJXU3hMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU40UkN4WFFVRlBMSGxDUVVGNVFpeERRVUZETEZsQlFWa3NRMEZCUXp0SFFVTXZRenRCUVVORUxHZERRVUU0UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRemRETEZOQlFVOHNTMEZCU3l4RFFVRkRPME5CUTJRN08wRkJSVVFzVTBGQlV5dzRRa0ZCT0VJc1EwRkJReXhaUVVGWkxFVkJRVVU3UVVGRGNFUXNUVUZCU1N4blFrRkJaMElzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN1FVRkRNME1zYjBKQlFXZENMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzUkRMRlZCUVUwc1EwRkJReXhIUVVGSExFTkJRMUlzVDBGQlR5eEZRVU5RTEdsRlFVRXJSQ3haUVVGWkxHOUpRVU5JTEc5SVFVTXlReXhEUVVOd1NDeERRVUZETzBkQlEwZzdRMEZEUmpzN1FVRkZUU3hUUVVGVExIRkNRVUZ4UWl4SFFVRkhPMEZCUTNSRExGRkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUVN4WlFVRlpMRVZCUVVrN1FVRkRjRVFzVjBGQlR5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEhRVU4yUXl4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUp3Y205MGJ5MWhZMk5sYzNNdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqY21WaGRHVk9aWGRNYjI5cmRYQlBZbXBsWTNRZ2ZTQm1jbTl0SUNjdUwyTnlaV0YwWlMxdVpYY3RiRzl2YTNWd0xXOWlhbVZqZENjN1hHNXBiWEJ2Y25RZ0tpQmhjeUJzYjJkblpYSWdabkp2YlNBbkxpNHZiRzluWjJWeUp6dGNibHh1WTI5dWMzUWdiRzluWjJWa1VISnZjR1Z5ZEdsbGN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZRY205MGIwRmpZMlZ6YzBOdmJuUnliMndvY25WdWRHbHRaVTl3ZEdsdmJuTXBJSHRjYmlBZ2JHVjBJR1JsWm1GMWJIUk5aWFJvYjJSWGFHbDBaVXhwYzNRZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUNCa1pXWmhkV3gwVFdWMGFHOWtWMmhwZEdWTWFYTjBXeWRqYjI1emRISjFZM1J2Y2lkZElEMGdabUZzYzJVN1hHNGdJR1JsWm1GMWJIUk5aWFJvYjJSWGFHbDBaVXhwYzNSYkoxOWZaR1ZtYVc1bFIyVjBkR1Z5WDE4blhTQTlJR1poYkhObE8xeHVJQ0JrWldaaGRXeDBUV1YwYUc5a1YyaHBkR1ZNYVhOMFd5ZGZYMlJsWm1sdVpWTmxkSFJsY2w5ZkoxMGdQU0JtWVd4elpUdGNiaUFnWkdWbVlYVnNkRTFsZEdodlpGZG9hWFJsVEdsemRGc25YMTlzYjI5cmRYQkhaWFIwWlhKZlh5ZGRJRDBnWm1Gc2MyVTdYRzVjYmlBZ2JHVjBJR1JsWm1GMWJIUlFjbTl3WlhKMGVWZG9hWFJsVEdsemRDQTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTF3Y205MGIxeHVJQ0JrWldaaGRXeDBVSEp2Y0dWeWRIbFhhR2wwWlV4cGMzUmJKMTlmY0hKdmRHOWZYeWRkSUQwZ1ptRnNjMlU3WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCd2NtOXdaWEowYVdWek9pQjdYRzRnSUNBZ0lDQjNhR2wwWld4cGMzUTZJR055WldGMFpVNWxkMHh2YjJ0MWNFOWlhbVZqZENoY2JpQWdJQ0FnSUNBZ1pHVm1ZWFZzZEZCeWIzQmxjblI1VjJocGRHVk1hWE4wTEZ4dUlDQWdJQ0FnSUNCeWRXNTBhVzFsVDNCMGFXOXVjeTVoYkd4dmQyVmtVSEp2ZEc5UWNtOXdaWEowYVdWelhHNGdJQ0FnSUNBcExGeHVJQ0FnSUNBZ1pHVm1ZWFZzZEZaaGJIVmxPaUJ5ZFc1MGFXMWxUM0IwYVc5dWN5NWhiR3h2ZDFCeWIzUnZVSEp2Y0dWeWRHbGxjMEo1UkdWbVlYVnNkRnh1SUNBZ0lIMHNYRzRnSUNBZ2JXVjBhRzlrY3pvZ2UxeHVJQ0FnSUNBZ2QyaHBkR1ZzYVhOME9pQmpjbVZoZEdWT1pYZE1iMjlyZFhCUFltcGxZM1FvWEc0Z0lDQWdJQ0FnSUdSbFptRjFiSFJOWlhSb2IyUlhhR2wwWlV4cGMzUXNYRzRnSUNBZ0lDQWdJSEoxYm5ScGJXVlBjSFJwYjI1ekxtRnNiRzkzWldSUWNtOTBiMDFsZEdodlpITmNiaUFnSUNBZ0lDa3NYRzRnSUNBZ0lDQmtaV1poZFd4MFZtRnNkV1U2SUhKMWJuUnBiV1ZQY0hScGIyNXpMbUZzYkc5M1VISnZkRzlOWlhSb2IyUnpRbmxFWldaaGRXeDBYRzRnSUNBZ2ZWeHVJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjbVZ6ZFd4MFNYTkJiR3h2ZDJWa0tISmxjM1ZzZEN3Z2NISnZkRzlCWTJObGMzTkRiMjUwY205c0xDQndjbTl3WlhKMGVVNWhiV1VwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ5WlhOMWJIUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCeVpYUjFjbTRnWTJobFkydFhhR2wwWlV4cGMzUW9jSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNMbTFsZEdodlpITXNJSEJ5YjNCbGNuUjVUbUZ0WlNrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUdOb1pXTnJWMmhwZEdWTWFYTjBLSEJ5YjNSdlFXTmpaWE56UTI5dWRISnZiQzV3Y205d1pYSjBhV1Z6TENCd2NtOXdaWEowZVU1aGJXVXBPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdOb1pXTnJWMmhwZEdWTWFYTjBLSEJ5YjNSdlFXTmpaWE56UTI5dWRISnZiRVp2Y2xSNWNHVXNJSEJ5YjNCbGNuUjVUbUZ0WlNrZ2UxeHVJQ0JwWmlBb2NISnZkRzlCWTJObGMzTkRiMjUwY205c1JtOXlWSGx3WlM1M2FHbDBaV3hwYzNSYmNISnZjR1Z5ZEhsT1lXMWxYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhCeWIzUnZRV05qWlhOelEyOXVkSEp2YkVadmNsUjVjR1V1ZDJocGRHVnNhWE4wVzNCeWIzQmxjblI1VG1GdFpWMGdQVDA5SUhSeWRXVTdYRzRnSUgxY2JpQWdhV1lnS0hCeWIzUnZRV05qWlhOelEyOXVkSEp2YkVadmNsUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNSbTl5Vkhsd1pTNWtaV1poZFd4MFZtRnNkV1U3WEc0Z0lIMWNiaUFnYkc5blZXNWxlSEJsWTJWa1VISnZjR1Z5ZEhsQlkyTmxjM05QYm1ObEtIQnliM0JsY25SNVRtRnRaU2s3WEc0Z0lISmxkSFZ5YmlCbVlXeHpaVHRjYm4xY2JseHVablZ1WTNScGIyNGdiRzluVlc1bGVIQmxZMlZrVUhKdmNHVnlkSGxCWTJObGMzTlBibU5sS0hCeWIzQmxjblI1VG1GdFpTa2dlMXh1SUNCcFppQW9iRzluWjJWa1VISnZjR1Z5ZEdsbGMxdHdjbTl3WlhKMGVVNWhiV1ZkSUNFOVBTQjBjblZsS1NCN1hHNGdJQ0FnYkc5bloyVmtVSEp2Y0dWeWRHbGxjMXR3Y205d1pYSjBlVTVoYldWZElEMGdkSEoxWlR0Y2JpQWdJQ0JzYjJkblpYSXViRzluS0Z4dUlDQWdJQ0FnSjJWeWNtOXlKeXhjYmlBZ0lDQWdJR0JJWVc1a2JHVmlZWEp6T2lCQlkyTmxjM01nYUdGeklHSmxaVzRnWkdWdWFXVmtJSFJ2SUhKbGMyOXNkbVVnZEdobElIQnliM0JsY25SNUlGd2lKSHR3Y205d1pYSjBlVTVoYldWOVhDSWdZbVZqWVhWelpTQnBkQ0JwY3lCdWIzUWdZVzRnWENKdmQyNGdjSEp2Y0dWeWRIbGNJaUJ2WmlCcGRITWdjR0Z5Wlc1MExseGNibUFnSzF4dUlDQWdJQ0FnSUNCZ1dXOTFJR05oYmlCaFpHUWdZU0J5ZFc1MGFXMWxJRzl3ZEdsdmJpQjBieUJrYVhOaFlteGxJSFJvWlNCamFHVmpheUJ2Y2lCMGFHbHpJSGRoY201cGJtYzZYRnh1WUNBclhHNGdJQ0FnSUNBZ0lHQlRaV1VnYUhSMGNITTZMeTlvWVc1a2JHVmlZWEp6YW5NdVkyOXRMMkZ3YVMxeVpXWmxjbVZ1WTJVdmNuVnVkR2x0WlMxdmNIUnBiMjV6TG1oMGJXd2piM0IwYVc5dWN5MTBieTFqYjI1MGNtOXNMWEJ5YjNSdmRIbHdaUzFoWTJObGMzTWdabTl5SUdSbGRHRnBiSE5nWEc0Z0lDQWdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY21WelpYUk1iMmRuWldSUWNtOXdaWEowYVdWektDa2dlMXh1SUNCUFltcGxZM1F1YTJWNWN5aHNiMmRuWldSUWNtOXdaWEowYVdWektTNW1iM0pGWVdOb0tIQnliM0JsY25SNVRtRnRaU0E5UGlCN1hHNGdJQ0FnWkdWc1pYUmxJR3h2WjJkbFpGQnliM0JsY25ScFpYTmJjSEp2Y0dWeWRIbE9ZVzFsWFR0Y2JpQWdmU2s3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLndyYXBIZWxwZXIgPSB3cmFwSGVscGVyO1xuXG5mdW5jdGlvbiB3cmFwSGVscGVyKGhlbHBlciwgdHJhbnNmb3JtT3B0aW9uc0ZuKSB7XG4gIGlmICh0eXBlb2YgaGVscGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGFwcGFyZW50bHkgaXQgZG9lcyBpbiBodHRwczovL2dpdGh1Yi5jb20vd3ljYXRzL2hhbmRsZWJhcnMuanMvaXNzdWVzLzE2MzlcbiAgICAvLyBXZSB0cnkgdG8gbWFrZSB0aGUgd3JhcHBlciBsZWFzdC1pbnZhc2l2ZSBieSBub3Qgd3JhcHBpbmcgaXQsIGlmIHRoZSBoZWxwZXIgaXMgbm90IGEgZnVuY3Rpb24uXG4gICAgcmV0dXJuIGhlbHBlcjtcbiAgfVxuICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uIHdyYXBwZXIoKSAvKiBkeW5hbWljIGFyZ3VtZW50cyAqL3tcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9IHRyYW5zZm9ybU9wdGlvbnNGbihvcHRpb25zKTtcbiAgICByZXR1cm4gaGVscGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIHJldHVybiB3cmFwcGVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJsdWRHVnlibUZzTDNkeVlYQklaV3h3WlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlR5eFRRVUZUTEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc2EwSkJRV3RDTEVWQlFVVTdRVUZEY2tRc1RVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFZRVUZWTEVWQlFVVTdPenRCUVVkb1F5eFhRVUZQTEUxQlFVMHNRMEZCUXp0SFFVTm1PMEZCUTBRc1RVRkJTU3hQUVVGUExFZEJRVWNzVTBGQlZpeFBRVUZQTERCQ1FVRnhRenRCUVVNNVF5eFJRVUZOTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm9SQ3hoUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVNNVJDeFhRVUZQTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBkQlEzUkRMRU5CUVVNN1FVRkRSaXhUUVVGUExFOUJRVThzUTBGQlF6dERRVU5vUWlJc0ltWnBiR1VpT2lKM2NtRndTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1oxYm1OMGFXOXVJSGR5WVhCSVpXeHdaWElvYUdWc2NHVnlMQ0IwY21GdWMyWnZjbTFQY0hScGIyNXpSbTRwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJvWld4d1pYSWdJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBdkx5QlVhR2x6SUhOb2IzVnNaQ0J1YjNRZ2FHRndjR1Z1TENCaWRYUWdZWEJ3WVhKbGJuUnNlU0JwZENCa2IyVnpJR2x1SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5M2VXTmhkSE12YUdGdVpHeGxZbUZ5Y3k1cWN5OXBjM04xWlhNdk1UWXpPVnh1SUNBZ0lDOHZJRmRsSUhSeWVTQjBieUJ0WVd0bElIUm9aU0IzY21Gd2NHVnlJR3hsWVhOMExXbHVkbUZ6YVhabElHSjVJRzV2ZENCM2NtRndjR2x1WnlCcGRDd2dhV1lnZEdobElHaGxiSEJsY2lCcGN5QnViM1FnWVNCbWRXNWpkR2x2Ymk1Y2JpQWdJQ0J5WlhSMWNtNGdhR1ZzY0dWeU8xeHVJQ0I5WEc0Z0lHeGxkQ0IzY21Gd2NHVnlJRDBnWm5WdVkzUnBiMjRvTHlvZ1pIbHVZVzFwWXlCaGNtZDFiV1Z1ZEhNZ0tpOHBJSHRjYmlBZ0lDQmpiMjV6ZENCdmNIUnBiMjV6SUQwZ1lYSm5kVzFsYm5SelcyRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ0xTQXhYVHRjYmlBZ0lDQmhjbWQxYldWdWRITmJZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQXRJREZkSUQwZ2RISmhibk5tYjNKdFQzQjBhVzl1YzBadUtHOXdkR2x2Ym5NcE8xeHVJQ0FnSUhKbGRIVnliaUJvWld4d1pYSXVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2JpQWdmVHRjYmlBZ2NtVjBkWEp1SUhkeVlYQndaWEk3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbiBsb29rdXBMZXZlbChsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbGV2ZWxNYXAgPSBfdXRpbHMuaW5kZXhPZihsb2dnZXIubWV0aG9kTWFwLCBsZXZlbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChsZXZlbE1hcCA+PSAwKSB7XG4gICAgICAgIGxldmVsID0gbGV2ZWxNYXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9LFxuXG4gIC8vIENhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBob3N0IGVudmlyb25tZW50XG4gIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XG4gICAgbGV2ZWwgPSBsb2dnZXIubG9va3VwTGV2ZWwobGV2ZWwpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBsb2dnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJ4dloyZGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08zRkNRVUYzUWl4VFFVRlRPenRCUVVWcVF5eEpRVUZKTEUxQlFVMHNSMEZCUnp0QlFVTllMRmRCUVZNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJRenRCUVVNM1F5eFBRVUZMTEVWQlFVVXNUVUZCVFRzN08wRkJSMklzWVVGQlZ5eEZRVUZGTEhGQ1FVRlRMRXRCUVVzc1JVRkJSVHRCUVVNelFpeFJRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1JVRkJSVHRCUVVNM1FpeFZRVUZKTEZGQlFWRXNSMEZCUnl4bFFVRlJMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRPVVFzVlVGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUTJwQ0xHRkJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdUMEZEYkVJc1RVRkJUVHRCUVVOTUxHRkJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wOUJRemRDTzB0QlEwWTdPMEZCUlVRc1YwRkJUeXhMUVVGTExFTkJRVU03UjBGRFpEczdPMEZCUjBRc1MwRkJSeXhGUVVGRkxHRkJRVk1zUzBGQlN5eEZRVUZqTzBGQlF5OUNMRk5CUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenRCUVVWc1F5eFJRVU5GTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjc1NVRkRPVUlzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eEZRVU42UXp0QlFVTkJMRlZCUVVrc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wRkJSWEpETEZWQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3UVVGRGNFSXNZMEZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRQUVVOb1FqczdkME5CV0cxQ0xFOUJRVTg3UVVGQlVDeGxRVUZQT3pzN1FVRlpNMElzWVVGQlR5eERRVUZETEUxQlFVMHNUMEZCUXl4RFFVRm1MRTlCUVU4c1JVRkJXU3hQUVVGUExFTkJRVU1zUTBGQlF6dExRVU0zUWp0SFFVTkdPME5CUTBZc1EwRkJRenM3Y1VKQlJXRXNUVUZCVFNJc0ltWnBiR1VpT2lKc2IyZG5aWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnBibVJsZUU5bUlIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibXhsZENCc2IyZG5aWElnUFNCN1hHNGdJRzFsZEdodlpFMWhjRG9nV3lka1pXSjFaeWNzSUNkcGJtWnZKeXdnSjNkaGNtNG5MQ0FuWlhKeWIzSW5YU3hjYmlBZ2JHVjJaV3c2SUNkcGJtWnZKeXhjYmx4dUlDQXZMeUJOWVhCeklHRWdaMmwyWlc0Z2JHVjJaV3dnZG1Gc2RXVWdkRzhnZEdobElHQnRaWFJvYjJSTllYQmdJR2x1WkdWNFpYTWdZV0p2ZG1VdVhHNGdJR3h2YjJ0MWNFeGxkbVZzT2lCbWRXNWpkR2x2Ymloc1pYWmxiQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYkdWMlpXd2dQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCc1pYUWdiR1YyWld4TllYQWdQU0JwYm1SbGVFOW1LR3h2WjJkbGNpNXRaWFJvYjJSTllYQXNJR3hsZG1Wc0xuUnZURzkzWlhKRFlYTmxLQ2twTzF4dUlDQWdJQ0FnYVdZZ0tHeGxkbVZzVFdGd0lENDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjJaV3dnUFNCc1pYWmxiRTFoY0R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUd4bGRtVnNJRDBnY0dGeWMyVkpiblFvYkdWMlpXd3NJREV3S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiR1YyWld3N1hHNGdJSDBzWEc1Y2JpQWdMeThnUTJGdUlHSmxJRzkyWlhKeWFXUmtaVzRnYVc0Z2RHaGxJR2h2YzNRZ1pXNTJhWEp2Ym0xbGJuUmNiaUFnYkc5bk9pQm1kVzVqZEdsdmJpaHNaWFpsYkN3Z0xpNHViV1Z6YzJGblpTa2dlMXh1SUNBZ0lHeGxkbVZzSUQwZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeGxkbVZzS1R0Y2JseHVJQ0FnSUdsbUlDaGNiaUFnSUNBZ0lIUjVjR1Z2WmlCamIyNXpiMnhsSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmx4dUlDQWdJQ0FnYkc5bloyVnlMbXh2YjJ0MWNFeGxkbVZzS0d4dloyZGxjaTVzWlhabGJDa2dQRDBnYkdWMlpXeGNiaUFnSUNBcElIdGNiaUFnSUNBZ0lHeGxkQ0J0WlhSb2IyUWdQU0JzYjJkblpYSXViV1YwYUc5a1RXRndXMnhsZG1Wc1hUdGNiaUFnSUNBZ0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTFqYjI1emIyeGxYRzRnSUNBZ0lDQnBaaUFvSVdOdmJuTnZiR1ZiYldWMGFHOWtYU2tnZTF4dUlDQWdJQ0FnSUNCdFpYUm9iMlFnUFNBbmJHOW5KenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR052Ym5OdmJHVmJiV1YwYUc5a1hTZ3VMaTV0WlhOellXZGxLVHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTFqYjI1emIyeGxYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnNiMmRuWlhJN1hHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgICAkSGFuZGxlYmFycyA9IHJvb3QuSGFuZGxlYmFycztcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgSGFuZGxlYmFycy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMjV2TFdOdmJtWnNhV04wTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVdVc1ZVRkJVeXhWUVVGVkxFVkJRVVU3TzBGQlJXeERMRTFCUVVrc1NVRkJTU3hIUVVGSExFOUJRVThzVFVGQlRTeExRVUZMTEZkQlFWY3NSMEZCUnl4TlFVRk5MRWRCUVVjc1RVRkJUVHROUVVONFJDeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJRenM3UVVGRmFFTXNXVUZCVlN4RFFVRkRMRlZCUVZVc1IwRkJSeXhaUVVGWE8wRkJRMnBETEZGQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGJFTXNWVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhYUVVGWExFTkJRVU03UzBGREwwSTdRVUZEUkN4WFFVRlBMRlZCUVZVc1EwRkJRenRIUVVOdVFpeERRVUZETzBOQlEwZ2lMQ0ptYVd4bElqb2libTh0WTI5dVpteHBZM1F1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmloSVlXNWtiR1ZpWVhKektTQjdYRzRnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ292WEc0Z0lHeGxkQ0J5YjI5MElEMGdkSGx3Wlc5bUlHZHNiMkpoYkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCbmJHOWlZV3dnT2lCM2FXNWtiM2NzWEc0Z0lDQWdKRWhoYm1Sc1pXSmhjbk1nUFNCeWIyOTBMa2hoYm1Sc1pXSmhjbk03WEc0Z0lDOHFJR2x6ZEdGdVluVnNJR2xuYm05eVpTQnVaWGgwSUNvdlhHNGdJRWhoYm1Sc1pXSmhjbk11Ym05RGIyNW1iR2xqZENBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lHbG1JQ2h5YjI5MExraGhibVJzWldKaGNuTWdQVDA5SUVoaGJtUnNaV0poY25NcElIdGNiaUFnSUNBZ0lISnZiM1F1U0dGdVpHeGxZbUZ5Y3lBOUlDUklZVzVrYkdWaVlYSnpPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnU0dGdVpHeGxZbUZ5Y3p0Y2JpQWdmVHRjYm4xY2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNoZWNrUmV2aXNpb24gPSBjaGVja1JldmlzaW9uO1xuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuZXhwb3J0cy53cmFwUHJvZ3JhbSA9IHdyYXBQcm9ncmFtO1xuZXhwb3J0cy5yZXNvbHZlUGFydGlhbCA9IHJlc29sdmVQYXJ0aWFsO1xuZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcbmV4cG9ydHMubm9vcCA9IG5vb3A7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlscyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxudmFyIF9iYXNlID0gcmVxdWlyZSgnLi9iYXNlJyk7XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG52YXIgX2ludGVybmFsV3JhcEhlbHBlciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvd3JhcEhlbHBlcicpO1xuXG52YXIgX2ludGVybmFsUHJvdG9BY2Nlc3MgPSByZXF1aXJlKCcuL2ludGVybmFsL3Byb3RvLWFjY2VzcycpO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uID49IF9iYXNlLkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJiBjb21waWxlclJldmlzaW9uIDw9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBfYmFzZS5MQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICB2YXIgcnVudGltZVZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICBjb21waWxlclZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSB0aGUgZW1iZWRkZWQgdmVyc2lvbiBpbmZvIHNpbmNlIHRoZSBydW50aW1lIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHJldmlzaW9uIHlldFxuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc2V1ZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHByZWNvbXBpbGVkIHRlbXBsYXRlcyB3aXRoIGNvbXBpbGVyLXZlcnNpb24gNyAoPDQuMy4wKVxuICB2YXIgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3ID0gdGVtcGxhdGVTcGVjLmNvbXBpbGVyICYmIHRlbXBsYXRlU3BlYy5jb21waWxlclswXSA9PT0gNztcblxuICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgICAgY29udGV4dCA9IFV0aWxzLmV4dGVuZCh7fSwgY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcbiAgICAgIGlmIChvcHRpb25zLmlkcykge1xuICAgICAgICBvcHRpb25zLmlkc1swXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIHZhciBleHRlbmRlZE9wdGlvbnMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMsIHtcbiAgICAgIGhvb2tzOiB0aGlzLmhvb2tzLFxuICAgICAgcHJvdG9BY2Nlc3NDb250cm9sOiB0aGlzLnByb3RvQWNjZXNzQ29udHJvbFxuICAgIH0pO1xuXG4gICAgdmFyIHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBleHRlbmRlZE9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgdmFyIGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uIHN0cmljdChvYmosIG5hbWUsIGxvYykge1xuICAgICAgaWYgKCFvYmogfHwgIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaiwge1xuICAgICAgICAgIGxvYzogbG9jXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eShvYmosIG5hbWUpO1xuICAgIH0sXG4gICAgbG9va3VwUHJvcGVydHk6IGZ1bmN0aW9uIGxvb2t1cFByb3BlcnR5KHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaW50ZXJuYWxQcm90b0FjY2Vzcy5yZXN1bHRJc0FsbG93ZWQocmVzdWx0LCBjb250YWluZXIucHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAoZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGRlcHRoc1tpXSAmJiBjb250YWluZXIubG9va3VwUHJvcGVydHkoZGVwdGhzW2ldLCBuYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbiBsYW1iZGEoY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbiBmbihpKSB7XG4gICAgICB2YXIgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xuICAgICAgcmV0LmRlY29yYXRvciA9IHRlbXBsYXRlU3BlY1tpICsgJ19kJ107XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24gcHJvZ3JhbShpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2VJZk5lZWRlZDogZnVuY3Rpb24gbWVyZ2VJZk5lZWRlZChwYXJhbSwgY29tbW9uKSB7XG4gICAgICB2YXIgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcbiAgICBudWxsQ29udGV4dDogT2JqZWN0LnNlYWwoe30pLFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocyA9IHVuZGVmaW5lZCxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cblxuICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgdmFyIG1lcmdlZEhlbHBlcnMgPSBVdGlscy5leHRlbmQoe30sIGVudi5oZWxwZXJzLCBvcHRpb25zLmhlbHBlcnMpO1xuICAgICAgd3JhcEhlbHBlcnNUb1Bhc3NMb29rdXBQcm9wZXJ0eShtZXJnZWRIZWxwZXJzLCBjb250YWluZXIpO1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBtZXJnZWRIZWxwZXJzO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgLy8gVXNlIG1lcmdlSWZOZWVkZWQgaGVyZSB0byBwcmV2ZW50IGNvbXBpbGluZyBnbG9iYWwgcGFydGlhbHMgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlSWZOZWVkZWQob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IFV0aWxzLmV4dGVuZCh7fSwgZW52LmRlY29yYXRvcnMsIG9wdGlvbnMuZGVjb3JhdG9ycyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IHt9O1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IF9pbnRlcm5hbFByb3RvQWNjZXNzLmNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChvcHRpb25zKTtcblxuICAgICAgdmFyIGtlZXBIZWxwZXJJbkhlbHBlcnMgPSBvcHRpb25zLmFsbG93Q2FsbHNUb0hlbHBlck1pc3NpbmcgfHwgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3O1xuICAgICAgX2hlbHBlcnMubW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnaGVscGVyTWlzc2luZycsIGtlZXBIZWxwZXJJbkhlbHBlcnMpO1xuICAgICAgX2hlbHBlcnMubW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnYmxvY2tIZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wgPSBvcHRpb25zLnByb3RvQWNjZXNzQ29udHJvbDsgLy8gaW50ZXJuYWwgb3B0aW9uXG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IG9wdGlvbnMuaG9va3M7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmICEoY29udGV4dCA9PT0gY29udGFpbmVyLm51bGxDb250ZXh0ICYmIGRlcHRoc1swXSA9PT0gbnVsbCkpIHtcbiAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgY3VycmVudGx5IHBhcnQgb2YgdGhlIG9mZmljaWFsIEFQSSwgdGhlcmVmb3JlIGltcGxlbWVudGF0aW9uIGRldGFpbHMgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5mdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuICB2YXIgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgdmFyIHBhcnRpYWxCbG9jayA9IHVuZGVmaW5lZDtcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcbiAgICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gZnVuY3Rpb24gcGFydGlhbEJsb2NrV3JhcHBlcihjb250ZXh0KSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBfYmFzZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cblxuZnVuY3Rpb24gd3JhcEhlbHBlcnNUb1Bhc3NMb29rdXBQcm9wZXJ0eShtZXJnZWRIZWxwZXJzLCBjb250YWluZXIpIHtcbiAgT2JqZWN0LmtleXMobWVyZ2VkSGVscGVycykuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyTmFtZSkge1xuICAgIHZhciBoZWxwZXIgPSBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV0gPSBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKSB7XG4gIHZhciBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eTtcbiAgcmV0dXJuIF9pbnRlcm5hbFdyYXBIZWxwZXIud3JhcEhlbHBlcihoZWxwZXIsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIFV0aWxzLmV4dGVuZCh7IGxvb2t1cFByb3BlcnR5OiBsb29rdXBQcm9wZXJ0eSB9LCBvcHRpb25zKTtcbiAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzSjFiblJwYldVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN2NVSkJRWFZDTEZOQlFWTTdPMGxCUVhCQ0xFdEJRVXM3TzNsQ1FVTkxMR0ZCUVdFN096czdiMEpCVFRWQ0xGRkJRVkU3TzNWQ1FVTnRRaXhYUVVGWE96dHJRMEZEYkVJc2RVSkJRWFZDT3p0dFEwRkpNME1zZVVKQlFYbENPenRCUVVWNlFpeFRRVUZUTEdGQlFXRXNRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRNVU1zVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhCUVVGRExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVzc1EwRkJRenROUVVNM1JDeGxRVUZsTERCQ1FVRnZRaXhEUVVGRE96dEJRVVYwUXl4TlFVTkZMR2RDUVVGblFpd3lRMEZCY1VNc1NVRkRja1FzWjBKQlFXZENMREpDUVVGeFFpeEZRVU55UXp0QlFVTkJMRmRCUVU4N1IwRkRVanM3UVVGRlJDeE5RVUZKTEdkQ1FVRm5RaXd3UTBGQmIwTXNSVUZCUlR0QlFVTjRSQ3hSUVVGTkxHVkJRV1VzUjBGQlJ5eDFRa0ZCYVVJc1pVRkJaU3hEUVVGRE8xRkJRM1pFTEdkQ1FVRm5RaXhIUVVGSExIVkNRVUZwUWl4blFrRkJaMElzUTBGQlF5eERRVUZETzBGQlEzaEVMRlZCUVUwc01rSkJRMG9zZVVaQlFYbEdMRWRCUTNaR0xIRkVRVUZ4UkN4SFFVTnlSQ3hsUVVGbExFZEJRMllzYlVSQlFXMUVMRWRCUTI1RUxHZENRVUZuUWl4SFFVTm9RaXhKUVVGSkxFTkJRMUFzUTBGQlF6dEhRVU5JTEUxQlFVMDdPMEZCUlV3c1ZVRkJUU3d5UWtGRFNpeDNSa0ZCZDBZc1IwRkRkRVlzYVVSQlFXbEVMRWRCUTJwRUxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZEWml4SlFVRkpMRU5CUTFBc1EwRkJRenRIUVVOSU8wTkJRMFk3TzBGQlJVMHNVMEZCVXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJUczdRVUZGTVVNc1RVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5TTEZWQlFVMHNNa0pCUVdNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0SFFVTXhSRHRCUVVORUxFMUJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRk8wRkJRM1pETEZWQlFVMHNNa0pCUVdNc01rSkJRVEpDTEVkQlFVY3NUMEZCVHl4WlFVRlpMRU5CUVVNc1EwRkJRenRIUVVONFJUczdRVUZGUkN4alFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRPenM3TzBGQlNXeEVMRXRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenM3TzBGQlJ6VkRMRTFCUVUwc2IwTkJRVzlETEVkQlEzaERMRmxCUVZrc1EwRkJReXhSUVVGUkxFbEJRVWtzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzBGQlJURkVMRmRCUVZNc2IwSkJRVzlDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGRrUXNVVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRk8wRkJRMmhDTEdGQlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRMnhFTEZWQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVObUxHVkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wOUJRM1pDTzB0QlEwWTdRVUZEUkN4WFFVRlBMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPenRCUVVWMFJTeFJRVUZKTEdWQlFXVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZET1VNc1YwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTzBGQlEycENMSGRDUVVGclFpeEZRVUZGTEVsQlFVa3NRMEZCUXl4clFrRkJhMEk3UzBGRE5VTXNRMEZCUXl4RFFVRkRPenRCUVVWSUxGRkJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGRGNFTXNTVUZCU1N4RlFVTktMRTlCUVU4c1JVRkRVQ3hQUVVGUExFVkJRMUFzWlVGQlpTeERRVU5vUWl4RFFVRkRPenRCUVVWR0xGRkJRVWtzVFVGQlRTeEpRVUZKTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMnBETEdGQlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUXpGRExFOUJRVThzUlVGRFVDeFpRVUZaTEVOQlFVTXNaVUZCWlN4RlFVTTFRaXhIUVVGSExFTkJRMG9zUTBGQlF6dEJRVU5HTEZsQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03UzBGRGJrVTdRVUZEUkN4UlFVRkpMRTFCUVUwc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRGJFSXNWVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRMnhDTEZsQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETDBJc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNMVF5eGpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUXpWQ0xHdENRVUZOTzFkQlExQTdPMEZCUlVRc1pVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzUkRPMEZCUTBRc1kwRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1QwRkRNMEk3UVVGRFJDeGhRVUZQTEUxQlFVMHNRMEZCUXp0TFFVTm1MRTFCUVUwN1FVRkRUQ3haUVVGTkxESkNRVU5LTEdOQlFXTXNSMEZEV2l4UFFVRlBMRU5CUVVNc1NVRkJTU3hIUVVOYUxEQkVRVUV3UkN4RFFVTTNSQ3hEUVVGRE8wdEJRMGc3UjBGRFJqczdPMEZCUjBRc1RVRkJTU3hUUVVGVExFZEJRVWM3UVVGRFpDeFZRVUZOTEVWQlFVVXNaMEpCUVZNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVTdRVUZETDBJc1ZVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeEZRVUZGTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVFc1FVRkJReXhGUVVGRk8wRkJRekZDTEdOQlFVMHNNa0pCUVdNc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eHRRa0ZCYlVJc1IwRkJSeXhIUVVGSExFVkJRVVU3UVVGRE1VUXNZVUZCUnl4RlFVRkZMRWRCUVVjN1UwRkRWQ3hEUVVGRExFTkJRVU03VDBGRFNqdEJRVU5FTEdGQlFVOHNVMEZCVXl4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZETlVNN1FVRkRSQ3hyUWtGQll5eEZRVUZGTEhkQ1FVRlRMRTFCUVUwc1JVRkJSU3haUVVGWkxFVkJRVVU3UVVGRE4wTXNWVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEyeERMRlZCUVVrc1RVRkJUU3hKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU5zUWl4bFFVRlBMRTFCUVUwc1EwRkJRenRQUVVObU8wRkJRMFFzVlVGQlNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEZsQlFWa3NRMEZCUXl4RlFVRkZPMEZCUXpsRUxHVkJRVThzVFVGQlRTeERRVUZETzA5QlEyWTdPMEZCUlVRc1ZVRkJTU3h4UTBGQlowSXNUVUZCVFN4RlFVRkZMRk5CUVZNc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4WlFVRlpMRU5CUVVNc1JVRkJSVHRCUVVOMlJTeGxRVUZQTEUxQlFVMHNRMEZCUXp0UFFVTm1PMEZCUTBRc1lVRkJUeXhUUVVGVExFTkJRVU03UzBGRGJFSTdRVUZEUkN4VlFVRk5MRVZCUVVVc1owSkJRVk1zVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTTNRaXhWUVVGTkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMEZCUXpGQ0xGZEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZETlVJc1dVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRM0JGTEZsQlFVa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVOc1FpeHBRa0ZCVHl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEZUVJN1QwRkRSanRMUVVOR08wRkJRMFFzVlVGQlRTeEZRVUZGTEdkQ1FVRlRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGFrTXNZVUZCVHl4UFFVRlBMRTlCUVU4c1MwRkJTeXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03UzBGRGVFVTdPMEZCUlVRc2IwSkJRV2RDTEVWQlFVVXNTMEZCU3l4RFFVRkRMR2RDUVVGblFqdEJRVU40UXl4cFFrRkJZU3hGUVVGRkxHOUNRVUZ2UWpzN1FVRkZia01zVFVGQlJTeEZRVUZGTEZsQlFWTXNRMEZCUXl4RlFVRkZPMEZCUTJRc1ZVRkJTU3hIUVVGSExFZEJRVWNzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xGTkJRVWNzUTBGQlF5eFRRVUZUTEVkQlFVY3NXVUZCV1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4yUXl4aFFVRlBMRWRCUVVjc1EwRkJRenRMUVVOYU96dEJRVVZFTEZsQlFWRXNSVUZCUlN4RlFVRkZPMEZCUTFvc1YwRkJUeXhGUVVGRkxHbENRVUZUTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNWMEZCVnl4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVOdVJTeFZRVUZKTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFZRVU51UXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnNRaXhWUVVGSkxFbEJRVWtzU1VGQlNTeE5RVUZOTEVsQlFVa3NWMEZCVnl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTzBGQlEzaEVMSE5DUVVGakxFZEJRVWNzVjBGQlZ5eERRVU14UWl4SlFVRkpMRVZCUTBvc1EwRkJReXhGUVVORUxFVkJRVVVzUlVGRFJpeEpRVUZKTEVWQlEwb3NiVUpCUVcxQ0xFVkJRMjVDTEZkQlFWY3NSVUZEV0N4TlFVRk5MRU5CUTFBc1EwRkJRenRQUVVOSUxFMUJRVTBzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlR0QlFVTXhRaXh6UWtGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VDBGRE9VUTdRVUZEUkN4aFFVRlBMR05CUVdNc1EwRkJRenRMUVVOMlFqczdRVUZGUkN4UlFVRkpMRVZCUVVVc1kwRkJVeXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlF6TkNMR0ZCUVU4c1MwRkJTeXhKUVVGSkxFdEJRVXNzUlVGQlJTeEZRVUZGTzBGQlEzWkNMR0ZCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzA5QlEzWkNPMEZCUTBRc1lVRkJUeXhMUVVGTExFTkJRVU03UzBGRFpEdEJRVU5FTEdsQ1FVRmhMRVZCUVVVc2RVSkJRVk1zUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTnlReXhWUVVGSkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRPenRCUVVVeFFpeFZRVUZKTEV0QlFVc3NTVUZCU1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhMUVVGTExFMUJRVTBzUlVGQlJUdEJRVU4yUXl4WFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wOUJRM1pET3p0QlFVVkVMR0ZCUVU4c1IwRkJSeXhEUVVGRE8wdEJRMW83TzBGQlJVUXNaVUZCVnl4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZET3p0QlFVVTFRaXhSUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpPMEZCUTJwQ0xHZENRVUZaTEVWQlFVVXNXVUZCV1N4RFFVRkRMRkZCUVZFN1IwRkRjRU1zUTBGQlF6czdRVUZGUml4WFFVRlRMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRV2RDTzFGQlFXUXNUMEZCVHl4NVJFRkJSeXhGUVVGRk96dEJRVU5vUXl4UlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZET3p0QlFVVjRRaXhQUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTNCQ0xGRkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRE5VTXNWVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEYUVNN1FVRkRSQ3hSUVVGSkxFMUJRVTBzV1VGQlFUdFJRVU5TTEZkQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFVkJRVVVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdRVUZETjBRc1VVRkJTU3haUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlF6RkNMRlZCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5zUWl4alFVRk5MRWRCUTBvc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUTNoQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGRGFFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRQUVVOMFFpeE5RVUZOTzBGQlEwd3NZMEZCVFN4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VDBGRGNFSTdTMEZEUmpzN1FVRkZSQ3hoUVVGVExFbEJRVWtzUTBGQlF5eFBRVUZQTEdkQ1FVRm5RanRCUVVOdVF5eGhRVU5GTEVWQlFVVXNSMEZEUml4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVObUxGTkJRVk1zUlVGRFZDeFBRVUZQTEVWQlExQXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkRha0lzVTBGQlV5eERRVUZETEZGQlFWRXNSVUZEYkVJc1NVRkJTU3hGUVVOS0xGZEJRVmNzUlVGRFdDeE5RVUZOTEVOQlExQXNRMEZEUkR0TFFVTklPenRCUVVWRUxGRkJRVWtzUjBGQlJ5eHBRa0ZCYVVJc1EwRkRkRUlzV1VGQldTeERRVUZETEVsQlFVa3NSVUZEYWtJc1NVRkJTU3hGUVVOS0xGTkJRVk1zUlVGRFZDeFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1JVRkRjRUlzU1VGQlNTeEZRVU5LTEZkQlFWY3NRMEZEV2l4RFFVRkRPMEZCUTBZc1YwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGRCUXk5Q096dEJRVVZFTEV0QlFVY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE96dEJRVVZxUWl4TFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVk1zVDBGQlR5eEZRVUZGTzBGQlF6ZENMRkZCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEzQkNMRlZCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTI1RkxIRkRRVUVyUWl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dEJRVU14UkN4bFFVRlRMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzUTBGQlF6czdRVUZGYkVNc1ZVRkJTU3haUVVGWkxFTkJRVU1zVlVGQlZTeEZRVUZGT3p0QlFVVXpRaXhwUWtGQlV5eERRVUZETEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1lVRkJZU3hEUVVNeFF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVTm9RaXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVU5pTEVOQlFVTTdUMEZEU0R0QlFVTkVMRlZCUVVrc1dVRkJXU3hEUVVGRExGVkJRVlVzU1VGQlNTeFpRVUZaTEVOQlFVTXNZVUZCWVN4RlFVRkZPMEZCUTNwRUxHbENRVUZUTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRMnBETEVWQlFVVXNSVUZEUml4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVOa0xFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlEyNUNMRU5CUVVNN1QwRkRTRHM3UVVGRlJDeGxRVUZUTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOeVFpeGxRVUZUTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzT0VOQlFYbENMRTlCUVU4c1EwRkJReXhEUVVGRE96dEJRVVZxUlN4VlFVRkpMRzFDUVVGdFFpeEhRVU55UWl4UFFVRlBMRU5CUVVNc2VVSkJRWGxDTEVsQlEycERMRzlEUVVGdlF5eERRVUZETzBGQlEzWkRMR2xEUVVGclFpeFRRVUZUTEVWQlFVVXNaVUZCWlN4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdRVUZEYmtVc2FVTkJRV3RDTEZOQlFWTXNSVUZCUlN4dlFrRkJiMElzUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8wdEJRM3BGTEUxQlFVMDdRVUZEVEN4bFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NUMEZCVHl4RFFVRkRMR3RDUVVGclFpeERRVUZETzBGQlF6RkVMR1ZCUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXp0QlFVTndReXhsUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRkRU1zWlVGQlV5eERRVUZETEZWQlFWVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wRkJRekZETEdWQlFWTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dExRVU5xUXp0SFFVTkdMRU5CUVVNN08wRkJSVVlzUzBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRlRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTnNSQ3hSUVVGSkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1FVRkRMME1zV1VGQlRTd3lRa0ZCWXl4M1FrRkJkMElzUTBGQlF5eERRVUZETzB0QlF5OURPMEZCUTBRc1VVRkJTU3haUVVGWkxFTkJRVU1zVTBGQlV5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTNKRExGbEJRVTBzTWtKQlFXTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dExRVU5vUkRzN1FVRkZSQ3hYUVVGUExGZEJRVmNzUTBGRGFFSXNVMEZCVXl4RlFVTlVMRU5CUVVNc1JVRkRSQ3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEyWXNTVUZCU1N4RlFVTktMRU5CUVVNc1JVRkRSQ3hYUVVGWExFVkJRMWdzVFVGQlRTeERRVU5RTEVOQlFVTTdSMEZEU0N4RFFVRkRPMEZCUTBZc1UwRkJUeXhIUVVGSExFTkJRVU03UTBGRFdqczdRVUZGVFN4VFFVRlRMRmRCUVZjc1EwRkRla0lzVTBGQlV5eEZRVU5VTEVOQlFVTXNSVUZEUkN4RlFVRkZMRVZCUTBZc1NVRkJTU3hGUVVOS0xHMUNRVUZ0UWl4RlFVTnVRaXhYUVVGWExFVkJRMWdzVFVGQlRTeEZRVU5PTzBGQlEwRXNWMEZCVXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGblFqdFJRVUZrTEU5QlFVOHNlVVJCUVVjc1JVRkJSVHM3UVVGRGFrTXNVVUZCU1N4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRE8wRkJRek5DTEZGQlEwVXNUVUZCVFN4SlFVTk9MRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlEzQkNMRVZCUVVVc1QwRkJUeXhMUVVGTExGTkJRVk1zUTBGQlF5eFhRVUZYTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlFTeEJRVUZETEVWQlF6RkVPMEZCUTBFc2JVSkJRV0VzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU14UXpzN1FVRkZSQ3hYUVVGUExFVkJRVVVzUTBGRFVDeFRRVUZUTEVWQlExUXNUMEZCVHl4RlFVTlFMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRMnBDTEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUTJ4Q0xFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RlFVTndRaXhYUVVGWExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVU40UkN4aFFVRmhMRU5CUTJRc1EwRkJRenRIUVVOSU96dEJRVVZFTEUxQlFVa3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPenRCUVVWNlJTeE5RVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOcVFpeE5RVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXhOUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEcxQ1FVRnRRaXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU0xUXl4VFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96czdPenM3UVVGTFRTeFRRVUZUTEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU40UkN4TlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMW9zVVVGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2RDUVVGblFpeEZRVUZGTzBGQlEzSkRMR0ZCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMHRCUTNwRExFMUJRVTA3UVVGRFRDeGhRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZETVVNN1IwRkRSaXhOUVVGTkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJUczdRVUZGZWtNc1YwRkJUeXhEUVVGRExFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZEZGtJc1YwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1IwRkRja003UVVGRFJDeFRRVUZQTEU5QlFVOHNRMEZCUXp0RFFVTm9RanM3UVVGRlRTeFRRVUZUTEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUczdRVUZGZGtRc1RVRkJUU3h0UWtGQmJVSXNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1FVRkRNVVVzVTBGQlR5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRka0lzVFVGQlNTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTJZc1YwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRIUVVOMlJUczdRVUZGUkN4TlFVRkpMRmxCUVZrc1dVRkJRU3hEUVVGRE8wRkJRMnBDTEUxQlFVa3NUMEZCVHl4RFFVRkRMRVZCUVVVc1NVRkJTU3hQUVVGUExFTkJRVU1zUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlRzN1FVRkRja01zWVVGQlR5eERRVUZETEVsQlFVa3NSMEZCUnl4clFrRkJXU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMEZCUlhwRExGVkJRVWtzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkRjRUlzYTBKQlFWa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEhRVUZITEZOQlFWTXNiVUpCUVcxQ0xFTkJRM3BGTEU5QlFVOHNSVUZGVUR0WlFVUkJMRTlCUVU4c2VVUkJRVWNzUlVGQlJUczdPenRCUVVsYUxHVkJRVThzUTBGQlF5eEpRVUZKTEVkQlFVY3NhMEpCUVZrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzcERMR1ZCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03UVVGRGNFUXNaVUZCVHl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzA5QlF6ZENMRU5CUVVNN1FVRkRSaXhWUVVGSkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZEWml4bFFVRlBMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMDlCUTNCRk96dEhRVU5HT3p0QlFVVkVMRTFCUVVrc1QwRkJUeXhMUVVGTExGTkJRVk1zU1VGQlNTeFpRVUZaTEVWQlFVVTdRVUZEZWtNc1YwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF6dEhRVU40UWpzN1FVRkZSQ3hOUVVGSkxFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdRVUZEZWtJc1ZVRkJUU3d5UWtGQll5eGpRVUZqTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMGRCUXpWRkxFMUJRVTBzU1VGQlNTeFBRVUZQTEZsQlFWa3NVVUZCVVN4RlFVRkZPMEZCUTNSRExGZEJRVThzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRIUVVOc1F6dERRVU5HT3p0QlFVVk5MRk5CUVZNc1NVRkJTU3hIUVVGSE8wRkJRM0pDTEZOQlFVOHNSVUZCUlN4RFFVRkRPME5CUTFnN08wRkJSVVFzVTBGQlV5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVNdlFpeE5RVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlFTeEJRVUZETEVWQlFVVTdRVUZET1VJc1VVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eHJRa0ZCV1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGNrTXNVVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU03UjBGRGNrSTdRVUZEUkN4VFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96dEJRVVZFTEZOQlFWTXNhVUpCUVdsQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFhRVUZYTEVWQlFVVTdRVUZEZWtVc1RVRkJTU3hGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlEyaENMRkZCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5tTEZGQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVOcVFpeEpRVUZKTEVWQlEwb3NTMEZCU3l4RlFVTk1MRk5CUVZNc1JVRkRWQ3hOUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTnVRaXhKUVVGSkxFVkJRMG9zVjBGQlZ5eEZRVU5ZTEUxQlFVMHNRMEZEVUN4RFFVRkRPMEZCUTBZc1UwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1IwRkRNMEk3UVVGRFJDeFRRVUZQTEVsQlFVa3NRMEZCUXp0RFFVTmlPenRCUVVWRUxGTkJRVk1zSzBKQlFTdENMRU5CUVVNc1lVRkJZU3hGUVVGRkxGTkJRVk1zUlVGQlJUdEJRVU5xUlN4UlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkJMRlZCUVZVc1JVRkJTVHRCUVVNdlF5eFJRVUZKTEUxQlFVMHNSMEZCUnl4aFFVRmhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRGRrTXNhVUpCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdSMEZEZWtVc1EwRkJReXhEUVVGRE8wTkJRMG83TzBGQlJVUXNVMEZCVXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZPMEZCUTI1RUxFMUJRVTBzWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXl4alFVRmpMRU5CUVVNN1FVRkRhRVFzVTBGQlR5d3JRa0ZCVnl4TlFVRk5MRVZCUVVVc1ZVRkJRU3hQUVVGUExFVkJRVWs3UVVGRGJrTXNWMEZCVHl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzWTBGQll5eEZRVUZrTEdOQlFXTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wZEJRMnhFTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbkoxYm5ScGJXVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QlZkR2xzY3lCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0JGZUdObGNIUnBiMjRnWm5KdmJTQW5MaTlsZUdObGNIUnBiMjRuTzF4dWFXMXdiM0owSUh0Y2JpQWdRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNHNYRzRnSUdOeVpXRjBaVVp5WVcxbExGeHVJQ0JNUVZOVVgwTlBUVkJCVkVsQ1RFVmZRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNHNYRzRnSUZKRlZrbFRTVTlPWDBOSVFVNUhSVk5jYm4wZ1puSnZiU0FuTGk5aVlYTmxKenRjYm1sdGNHOXlkQ0I3SUcxdmRtVklaV3h3WlhKVWIwaHZiMnR6SUgwZ1puSnZiU0FuTGk5b1pXeHdaWEp6Snp0Y2JtbHRjRzl5ZENCN0lIZHlZWEJJWld4d1pYSWdmU0JtY205dElDY3VMMmx1ZEdWeWJtRnNMM2R5WVhCSVpXeHdaWEluTzF4dWFXMXdiM0owSUh0Y2JpQWdZM0psWVhSbFVISnZkRzlCWTJObGMzTkRiMjUwY205c0xGeHVJQ0J5WlhOMWJIUkpjMEZzYkc5M1pXUmNibjBnWm5KdmJTQW5MaTlwYm5SbGNtNWhiQzl3Y205MGJ5MWhZMk5sYzNNbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZMmhsWTJ0U1pYWnBjMmx2YmloamIyMXdhV3hsY2tsdVptOHBJSHRjYmlBZ1kyOXVjM1FnWTI5dGNHbHNaWEpTWlhacGMybHZiaUE5SUNoamIyMXdhV3hsY2tsdVptOGdKaVlnWTI5dGNHbHNaWEpKYm1adld6QmRLU0I4ZkNBeExGeHVJQ0FnSUdOMWNuSmxiblJTWlhacGMybHZiaUE5SUVOUFRWQkpURVZTWDFKRlZrbFRTVTlPTzF4dVhHNGdJR2xtSUNoY2JpQWdJQ0JqYjIxd2FXeGxjbEpsZG1semFXOXVJRDQ5SUV4QlUxUmZRMDlOVUVGVVNVSk1SVjlEVDAxUVNVeEZVbDlTUlZaSlUwbFBUaUFtSmx4dUlDQWdJR052YlhCcGJHVnlVbVYyYVhOcGIyNGdQRDBnUTA5TlVFbE1SVkpmVWtWV1NWTkpUMDVjYmlBZ0tTQjdYRzRnSUNBZ2NtVjBkWEp1TzF4dUlDQjlYRzVjYmlBZ2FXWWdLR052YlhCcGJHVnlVbVYyYVhOcGIyNGdQQ0JNUVZOVVgwTlBUVkJCVkVsQ1RFVmZRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNHBJSHRjYmlBZ0lDQmpiMjV6ZENCeWRXNTBhVzFsVm1WeWMybHZibk1nUFNCU1JWWkpVMGxQVGw5RFNFRk9SMFZUVzJOMWNuSmxiblJTWlhacGMybHZibDBzWEc0Z0lDQWdJQ0JqYjIxd2FXeGxjbFpsY25OcGIyNXpJRDBnVWtWV1NWTkpUMDVmUTBoQlRrZEZVMXRqYjIxd2FXeGxjbEpsZG1semFXOXVYVHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLRnh1SUNBZ0lDQWdKMVJsYlhCc1lYUmxJSGRoY3lCd2NtVmpiMjF3YVd4bFpDQjNhWFJvSUdGdUlHOXNaR1Z5SUhabGNuTnBiMjRnYjJZZ1NHRnVaR3hsWW1GeWN5QjBhR0Z1SUhSb1pTQmpkWEp5Wlc1MElISjFiblJwYldVdUlDY2dLMXh1SUNBZ0lDQWdJQ0FuVUd4bFlYTmxJSFZ3WkdGMFpTQjViM1Z5SUhCeVpXTnZiWEJwYkdWeUlIUnZJR0VnYm1WM1pYSWdkbVZ5YzJsdmJpQW9KeUFyWEc0Z0lDQWdJQ0FnSUhKMWJuUnBiV1ZXWlhKemFXOXVjeUFyWEc0Z0lDQWdJQ0FnSUNjcElHOXlJR1J2ZDI1bmNtRmtaU0I1YjNWeUlISjFiblJwYldVZ2RHOGdZVzRnYjJ4a1pYSWdkbVZ5YzJsdmJpQW9KeUFyWEc0Z0lDQWdJQ0FnSUdOdmJYQnBiR1Z5Vm1WeWMybHZibk1nSzF4dUlDQWdJQ0FnSUNBbktTNG5YRzRnSUNBZ0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQXZMeUJWYzJVZ2RHaGxJR1Z0WW1Wa1pHVmtJSFpsY25OcGIyNGdhVzVtYnlCemFXNWpaU0IwYUdVZ2NuVnVkR2x0WlNCa2IyVnpiaWQwSUd0dWIzY2dZV0p2ZFhRZ2RHaHBjeUJ5WlhacGMybHZiaUI1WlhSY2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0Z4dUlDQWdJQ0FnSjFSbGJYQnNZWFJsSUhkaGN5QndjbVZqYjIxd2FXeGxaQ0IzYVhSb0lHRWdibVYzWlhJZ2RtVnljMmx2YmlCdlppQklZVzVrYkdWaVlYSnpJSFJvWVc0Z2RHaGxJR04xY25KbGJuUWdjblZ1ZEdsdFpTNGdKeUFyWEc0Z0lDQWdJQ0FnSUNkUWJHVmhjMlVnZFhCa1lYUmxJSGx2ZFhJZ2NuVnVkR2x0WlNCMGJ5QmhJRzVsZDJWeUlIWmxjbk5wYjI0Z0tDY2dLMXh1SUNBZ0lDQWdJQ0JqYjIxd2FXeGxja2x1Wm05Yk1WMGdLMXh1SUNBZ0lDQWdJQ0FuS1M0blhHNGdJQ0FnS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2RHVnRjR3hoZEdVb2RHVnRjR3hoZEdWVGNHVmpMQ0JsYm5ZcElIdGNiaUFnTHlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUc1bGVIUWdLaTljYmlBZ2FXWWdLQ0ZsYm5ZcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZE9ieUJsYm5acGNtOXViV1Z1ZENCd1lYTnpaV1FnZEc4Z2RHVnRjR3hoZEdVbktUdGNiaUFnZlZ4dUlDQnBaaUFvSVhSbGJYQnNZWFJsVTNCbFl5QjhmQ0FoZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzRwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkVmJtdHViM2R1SUhSbGJYQnNZWFJsSUc5aWFtVmpkRG9nSnlBcklIUjVjR1Z2WmlCMFpXMXdiR0YwWlZOd1pXTXBPMXh1SUNCOVhHNWNiaUFnZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzR1WkdWamIzSmhkRzl5SUQwZ2RHVnRjR3hoZEdWVGNHVmpMbTFoYVc1ZlpEdGNibHh1SUNBdkx5Qk9iM1JsT2lCVmMybHVaeUJsYm5ZdVZrMGdjbVZtWlhKbGJtTmxjeUJ5WVhSb1pYSWdkR2hoYmlCc2IyTmhiQ0IyWVhJZ2NtVm1aWEpsYm1ObGN5QjBhSEp2ZFdkb2IzVjBJSFJvYVhNZ2MyVmpkR2x2YmlCMGJ5QmhiR3h2ZDF4dUlDQXZMeUJtYjNJZ1pYaDBaWEp1WVd3Z2RYTmxjbk1nZEc4Z2IzWmxjbkpwWkdVZ2RHaGxjMlVnWVhNZ2NITmxkV1J2TFhOMWNIQnZjblJsWkNCQlVFbHpMbHh1SUNCbGJuWXVWazB1WTJobFkydFNaWFpwYzJsdmJpaDBaVzF3YkdGMFpWTndaV011WTI5dGNHbHNaWElwTzF4dVhHNGdJQzh2SUdKaFkydDNZWEprY3lCamIyMXdZWFJwWW1sc2FYUjVJR1p2Y2lCd2NtVmpiMjF3YVd4bFpDQjBaVzF3YkdGMFpYTWdkMmwwYUNCamIyMXdhV3hsY2kxMlpYSnphVzl1SURjZ0tEdzBMak11TUNsY2JpQWdZMjl1YzNRZ2RHVnRjR3hoZEdWWFlYTlFjbVZqYjIxd2FXeGxaRmRwZEdoRGIyMXdhV3hsY2xZM0lEMWNiaUFnSUNCMFpXMXdiR0YwWlZOd1pXTXVZMjl0Y0dsc1pYSWdKaVlnZEdWdGNHeGhkR1ZUY0dWakxtTnZiWEJwYkdWeVd6QmRJRDA5UFNBM08xeHVYRzRnSUdaMWJtTjBhVzl1SUdsdWRtOXJaVkJoY25ScFlXeFhjbUZ3Y0dWeUtIQmhjblJwWVd3c0lHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9iM0IwYVc5dWN5NW9ZWE5vS1NCN1hHNGdJQ0FnSUNCamIyNTBaWGgwSUQwZ1ZYUnBiSE11WlhoMFpXNWtLSHQ5TENCamIyNTBaWGgwTENCdmNIUnBiMjV6TG1oaGMyZ3BPMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVhV1J6V3pCZElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjR0Z5ZEdsaGJDQTlJR1Z1ZGk1V1RTNXlaWE52YkhabFVHRnlkR2xoYkM1allXeHNLSFJvYVhNc0lIQmhjblJwWVd3c0lHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVYRzRnSUNBZ2JHVjBJR1Y0ZEdWdVpHVmtUM0IwYVc5dWN5QTlJRlYwYVd4ekxtVjRkR1Z1WkNoN2ZTd2diM0IwYVc5dWN5d2dlMXh1SUNBZ0lDQWdhRzl2YTNNNklIUm9hWE11YUc5dmEzTXNYRzRnSUNBZ0lDQndjbTkwYjBGalkyVnpjME52Ym5SeWIydzZJSFJvYVhNdWNISnZkRzlCWTJObGMzTkRiMjUwY205c1hHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCc1pYUWdjbVZ6ZFd4MElEMGdaVzUyTGxaTkxtbHVkbTlyWlZCaGNuUnBZV3d1WTJGc2JDaGNiaUFnSUNBZ0lIUm9hWE1zWEc0Z0lDQWdJQ0J3WVhKMGFXRnNMRnh1SUNBZ0lDQWdZMjl1ZEdWNGRDeGNiaUFnSUNBZ0lHVjRkR1Z1WkdWa1QzQjBhVzl1YzF4dUlDQWdJQ2s3WEc1Y2JpQWdJQ0JwWmlBb2NtVnpkV3gwSUQwOUlHNTFiR3dnSmlZZ1pXNTJMbU52YlhCcGJHVXBJSHRjYmlBZ0lDQWdJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITmJiM0IwYVc5dWN5NXVZVzFsWFNBOUlHVnVkaTVqYjIxd2FXeGxLRnh1SUNBZ0lDQWdJQ0J3WVhKMGFXRnNMRnh1SUNBZ0lDQWdJQ0IwWlcxd2JHRjBaVk53WldNdVkyOXRjR2xzWlhKUGNIUnBiMjV6TEZ4dUlDQWdJQ0FnSUNCbGJuWmNiaUFnSUNBZ0lDazdYRzRnSUNBZ0lDQnlaWE4xYkhRZ1BTQnZjSFJwYjI1ekxuQmhjblJwWVd4elcyOXdkR2x2Ym5NdWJtRnRaVjBvWTI5dWRHVjRkQ3dnWlhoMFpXNWtaV1JQY0hScGIyNXpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSEpsYzNWc2RDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVwYm1SbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHeHBibVZ6SUQwZ2NtVnpkV3gwTG5Od2JHbDBLQ2RjWEc0bktUdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBc0lHd2dQU0JzYVc1bGN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9JV3hwYm1WelcybGRJQ1ltSUdrZ0t5QXhJRDA5UFNCc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JzYVc1bGMxdHBYU0E5SUc5d2RHbHZibk11YVc1a1pXNTBJQ3NnYkdsdVpYTmJhVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVnpkV3gwSUQwZ2JHbHVaWE11YW05cGJpZ25YRnh1SnlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtGeHVJQ0FnSUNBZ0lDQW5WR2hsSUhCaGNuUnBZV3dnSnlBclhHNGdJQ0FnSUNBZ0lDQWdiM0IwYVc5dWN5NXVZVzFsSUN0Y2JpQWdJQ0FnSUNBZ0lDQW5JR052ZFd4a0lHNXZkQ0JpWlNCamIyMXdhV3hsWkNCM2FHVnVJSEoxYm01cGJtY2dhVzRnY25WdWRHbHRaUzF2Ym14NUlHMXZaR1VuWEc0Z0lDQWdJQ0FwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4dklFcDFjM1FnWVdSa0lIZGhkR1Z5WEc0Z0lHeGxkQ0JqYjI1MFlXbHVaWElnUFNCN1hHNGdJQ0FnYzNSeWFXTjBPaUJtZFc1amRHbHZiaWh2WW1vc0lHNWhiV1VzSUd4dll5a2dlMXh1SUNBZ0lDQWdhV1lnS0NGdlltb2dmSHdnSVNodVlXMWxJR2x1SUc5aWFpa3BJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnblhDSW5JQ3NnYm1GdFpTQXJJQ2RjSWlCdWIzUWdaR1ZtYVc1bFpDQnBiaUFuSUNzZ2IySnFMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2JHOWpPaUJzYjJOY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z1kyOXVkR0ZwYm1WeUxteHZiMnQxY0ZCeWIzQmxjblI1S0c5aWFpd2dibUZ0WlNrN1hHNGdJQ0FnZlN4Y2JpQWdJQ0JzYjI5cmRYQlFjbTl3WlhKMGVUb2dablZ1WTNScGIyNG9jR0Z5Wlc1MExDQndjbTl3WlhKMGVVNWhiV1VwSUh0Y2JpQWdJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQndZWEpsYm5SYmNISnZjR1Z5ZEhsT1lXMWxYVHRjYmlBZ0lDQWdJR2xtSUNoeVpYTjFiSFFnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNod1lYSmxiblFzSUhCeWIzQmxjblI1VG1GdFpTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hKbGMzVnNkRWx6UVd4c2IzZGxaQ2h5WlhOMWJIUXNJR052Ym5SaGFXNWxjaTV3Y205MGIwRmpZMlZ6YzBOdmJuUnliMndzSUhCeWIzQmxjblI1VG1GdFpTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN1hHNGdJQ0FnZlN4Y2JpQWdJQ0JzYjI5cmRYQTZJR1oxYm1OMGFXOXVLR1JsY0hSb2N5d2dibUZ0WlNrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYkdWdUlEMGdaR1Z3ZEdoekxteGxibWQwYUR0Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUdSbGNIUm9jMXRwWFNBbUppQmpiMjUwWVdsdVpYSXViRzl2YTNWd1VISnZjR1Z5ZEhrb1pHVndkR2h6VzJsZExDQnVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsYzNWc2RDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1JsY0hSb2MxdHBYVnR1WVcxbFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzRnSUNBZ2JHRnRZbVJoT2lCbWRXNWpkR2x2YmloamRYSnlaVzUwTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEhsd1pXOW1JR04xY25KbGJuUWdQVDA5SUNkbWRXNWpkR2x2YmljZ1B5QmpkWEp5Wlc1MExtTmhiR3dvWTI5dWRHVjRkQ2tnT2lCamRYSnlaVzUwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JsYzJOaGNHVkZlSEJ5WlhOemFXOXVPaUJWZEdsc2N5NWxjMk5oY0dWRmVIQnlaWE56YVc5dUxGeHVJQ0FnSUdsdWRtOXJaVkJoY25ScFlXdzZJR2x1ZG05clpWQmhjblJwWVd4WGNtRndjR1Z5TEZ4dVhHNGdJQ0FnWm00NklHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ0lDQWdJR3hsZENCeVpYUWdQU0IwWlcxd2JHRjBaVk53WldOYmFWMDdYRzRnSUNBZ0lDQnlaWFF1WkdWamIzSmhkRzl5SUQwZ2RHVnRjR3hoZEdWVGNHVmpXMmtnS3lBblgyUW5YVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnlaWFE3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJkeVlXMXpPaUJiWFN4Y2JpQWdJQ0J3Y205bmNtRnRPaUJtZFc1amRHbHZiaWhwTENCa1lYUmhMQ0JrWldOc1lYSmxaRUpzYjJOclVHRnlZVzF6TENCaWJHOWphMUJoY21GdGN5d2daR1Z3ZEdoektTQjdYRzRnSUNBZ0lDQnNaWFFnY0hKdlozSmhiVmR5WVhCd1pYSWdQU0IwYUdsekxuQnliMmR5WVcxelcybGRMRnh1SUNBZ0lDQWdJQ0JtYmlBOUlIUm9hWE11Wm00b2FTazdYRzRnSUNBZ0lDQnBaaUFvWkdGMFlTQjhmQ0JrWlhCMGFITWdmSHdnWW14dlkydFFZWEpoYlhNZ2ZId2daR1ZqYkdGeVpXUkNiRzlqYTFCaGNtRnRjeWtnZTF4dUlDQWdJQ0FnSUNCd2NtOW5jbUZ0VjNKaGNIQmxjaUE5SUhkeVlYQlFjbTluY21GdEtGeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNc1hHNGdJQ0FnSUNBZ0lDQWdhU3hjYmlBZ0lDQWdJQ0FnSUNCbWJpeGNiaUFnSUNBZ0lDQWdJQ0JrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJR1JsWTJ4aGNtVmtRbXh2WTJ0UVlYSmhiWE1zWEc0Z0lDQWdJQ0FnSUNBZ1lteHZZMnRRWVhKaGJYTXNYRzRnSUNBZ0lDQWdJQ0FnWkdWd2RHaHpYRzRnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NGd2NtOW5jbUZ0VjNKaGNIQmxjaWtnZTF4dUlDQWdJQ0FnSUNCd2NtOW5jbUZ0VjNKaGNIQmxjaUE5SUhSb2FYTXVjSEp2WjNKaGJYTmJhVjBnUFNCM2NtRndVSEp2WjNKaGJTaDBhR2x6TENCcExDQm1iaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjSEp2WjNKaGJWZHlZWEJ3WlhJN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdSaGRHRTZJR1oxYm1OMGFXOXVLSFpoYkhWbExDQmtaWEIwYUNrZ2UxeHVJQ0FnSUNBZ2QyaHBiR1VnS0haaGJIVmxJQ1ltSUdSbGNIUm9MUzBwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaUzVmY0dGeVpXNTBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTzF4dUlDQWdJSDBzWEc0Z0lDQWdiV1Z5WjJWSlprNWxaV1JsWkRvZ1puVnVZM1JwYjI0b2NHRnlZVzBzSUdOdmJXMXZiaWtnZTF4dUlDQWdJQ0FnYkdWMElHOWlhaUE5SUhCaGNtRnRJSHg4SUdOdmJXMXZianRjYmx4dUlDQWdJQ0FnYVdZZ0tIQmhjbUZ0SUNZbUlHTnZiVzF2YmlBbUppQndZWEpoYlNBaFBUMGdZMjl0Ylc5dUtTQjdYRzRnSUNBZ0lDQWdJRzlpYWlBOUlGVjBhV3h6TG1WNGRHVnVaQ2g3ZlN3Z1kyOXRiVzl1TENCd1lYSmhiU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2WW1vN1hHNGdJQ0FnZlN4Y2JpQWdJQ0F2THlCQmJpQmxiWEIwZVNCdlltcGxZM1FnZEc4Z2RYTmxJR0Z6SUhKbGNHeGhZMlZ0Wlc1MElHWnZjaUJ1ZFd4c0xXTnZiblJsZUhSelhHNGdJQ0FnYm5Wc2JFTnZiblJsZUhRNklFOWlhbVZqZEM1elpXRnNLSHQ5S1N4Y2JseHVJQ0FnSUc1dmIzQTZJR1Z1ZGk1V1RTNXViMjl3TEZ4dUlDQWdJR052YlhCcGJHVnlTVzVtYnpvZ2RHVnRjR3hoZEdWVGNHVmpMbU52YlhCcGJHVnlYRzRnSUgwN1hHNWNiaUFnWm5WdVkzUnBiMjRnY21WMEtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NZ1BTQjdmU2tnZTF4dUlDQWdJR3hsZENCa1lYUmhJRDBnYjNCMGFXOXVjeTVrWVhSaE8xeHVYRzRnSUNBZ2NtVjBMbDl6WlhSMWNDaHZjSFJwYjI1ektUdGNiaUFnSUNCcFppQW9JVzl3ZEdsdmJuTXVjR0Z5ZEdsaGJDQW1KaUIwWlcxd2JHRjBaVk53WldNdWRYTmxSR0YwWVNrZ2UxeHVJQ0FnSUNBZ1pHRjBZU0E5SUdsdWFYUkVZWFJoS0dOdmJuUmxlSFFzSUdSaGRHRXBPMXh1SUNBZ0lIMWNiaUFnSUNCc1pYUWdaR1Z3ZEdoekxGeHVJQ0FnSUNBZ1lteHZZMnRRWVhKaGJYTWdQU0IwWlcxd2JHRjBaVk53WldNdWRYTmxRbXh2WTJ0UVlYSmhiWE1nUHlCYlhTQTZJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQnBaaUFvZEdWdGNHeGhkR1ZUY0dWakxuVnpaVVJsY0hSb2N5a2dlMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11WkdWd2RHaHpLU0I3WEc0Z0lDQWdJQ0FnSUdSbGNIUm9jeUE5WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR1Y0ZENBaFBTQnZjSFJwYjI1ekxtUmxjSFJvYzFzd1hWeHVJQ0FnSUNBZ0lDQWdJQ0FnUHlCYlkyOXVkR1Y0ZEYwdVkyOXVZMkYwS0c5d2RHbHZibk11WkdWd2RHaHpLVnh1SUNBZ0lDQWdJQ0FnSUNBZ09pQnZjSFJwYjI1ekxtUmxjSFJvY3p0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdSbGNIUm9jeUE5SUZ0amIyNTBaWGgwWFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJ0WVdsdUtHTnZiblJsZUhRZ0x5b3NJRzl3ZEdsdmJuTXFMeWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSnljZ0sxeHVJQ0FnSUNBZ0lDQjBaVzF3YkdGMFpWTndaV011YldGcGJpaGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEN4Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVhR1ZzY0dWeWN5eGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE1zWEc0Z0lDQWdJQ0FnSUNBZ1pHRjBZU3hjYmlBZ0lDQWdJQ0FnSUNCaWJHOWphMUJoY21GdGN5eGNiaUFnSUNBZ0lDQWdJQ0JrWlhCMGFITmNiaUFnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnRZV2x1SUQwZ1pYaGxZM1YwWlVSbFkyOXlZWFJ2Y25Nb1hHNGdJQ0FnSUNCMFpXMXdiR0YwWlZOd1pXTXViV0ZwYml4Y2JpQWdJQ0FnSUcxaGFXNHNYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ0lDQnZjSFJwYjI1ekxtUmxjSFJvY3lCOGZDQmJYU3hjYmlBZ0lDQWdJR1JoZEdFc1hHNGdJQ0FnSUNCaWJHOWphMUJoY21GdGMxeHVJQ0FnSUNrN1hHNGdJQ0FnY21WMGRYSnVJRzFoYVc0b1kyOXVkR1Y0ZEN3Z2IzQjBhVzl1Y3lrN1hHNGdJSDFjYmx4dUlDQnlaWFF1YVhOVWIzQWdQU0IwY25WbE8xeHVYRzRnSUhKbGRDNWZjMlYwZFhBZ1BTQm1kVzVqZEdsdmJpaHZjSFJwYjI1ektTQjdYRzRnSUNBZ2FXWWdLQ0Z2Y0hScGIyNXpMbkJoY25ScFlXd3BJSHRjYmlBZ0lDQWdJR3hsZENCdFpYSm5aV1JJWld4d1pYSnpJRDBnVlhScGJITXVaWGgwWlc1a0tIdDlMQ0JsYm5ZdWFHVnNjR1Z5Y3l3Z2IzQjBhVzl1Y3k1b1pXeHdaWEp6S1R0Y2JpQWdJQ0FnSUhkeVlYQklaV3h3WlhKelZHOVFZWE56VEc5dmEzVndVSEp2Y0dWeWRIa29iV1Z5WjJWa1NHVnNjR1Z5Y3l3Z1kyOXVkR0ZwYm1WeUtUdGNiaUFnSUNBZ0lHTnZiblJoYVc1bGNpNW9aV3h3WlhKeklEMGdiV1Z5WjJWa1NHVnNjR1Z5Y3p0Y2JseHVJQ0FnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVlFZWEowYVdGc0tTQjdYRzRnSUNBZ0lDQWdJQzh2SUZWelpTQnRaWEpuWlVsbVRtVmxaR1ZrSUdobGNtVWdkRzhnY0hKbGRtVnVkQ0JqYjIxd2FXeHBibWNnWjJ4dlltRnNJSEJoY25ScFlXeHpJRzExYkhScGNHeGxJSFJwYldWelhHNGdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNXdZWEowYVdGc2N5QTlJR052Ym5SaGFXNWxjaTV0WlhKblpVbG1UbVZsWkdWa0tGeHVJQ0FnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITXNYRzRnSUNBZ0lDQWdJQ0FnWlc1MkxuQmhjblJwWVd4elhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaUFvZEdWdGNHeGhkR1ZUY0dWakxuVnpaVkJoY25ScFlXd2dmSHdnZEdWdGNHeGhkR1ZUY0dWakxuVnpaVVJsWTI5eVlYUnZjbk1wSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtUmxZMjl5WVhSdmNuTWdQU0JWZEdsc2N5NWxlSFJsYm1Rb1hHNGdJQ0FnSUNBZ0lDQWdlMzBzWEc0Z0lDQWdJQ0FnSUNBZ1pXNTJMbVJsWTI5eVlYUnZjbk1zWEc0Z0lDQWdJQ0FnSUNBZ2IzQjBhVzl1Y3k1a1pXTnZjbUYwYjNKelhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTVvYjI5cmN5QTlJSHQ5TzF4dUlDQWdJQ0FnWTI5dWRHRnBibVZ5TG5CeWIzUnZRV05qWlhOelEyOXVkSEp2YkNBOUlHTnlaV0YwWlZCeWIzUnZRV05qWlhOelEyOXVkSEp2YkNodmNIUnBiMjV6S1R0Y2JseHVJQ0FnSUNBZ2JHVjBJR3RsWlhCSVpXeHdaWEpKYmtobGJIQmxjbk1nUFZ4dUlDQWdJQ0FnSUNCdmNIUnBiMjV6TG1Gc2JHOTNRMkZzYkhOVWIwaGxiSEJsY2sxcGMzTnBibWNnZkh4Y2JpQWdJQ0FnSUNBZ2RHVnRjR3hoZEdWWFlYTlFjbVZqYjIxd2FXeGxaRmRwZEdoRGIyMXdhV3hsY2xZM08xeHVJQ0FnSUNBZ2JXOTJaVWhsYkhCbGNsUnZTRzl2YTNNb1kyOXVkR0ZwYm1WeUxDQW5hR1ZzY0dWeVRXbHpjMmx1Wnljc0lHdGxaWEJJWld4d1pYSkpia2hsYkhCbGNuTXBPMXh1SUNBZ0lDQWdiVzkyWlVobGJIQmxjbFJ2U0c5dmEzTW9ZMjl1ZEdGcGJtVnlMQ0FuWW14dlkydElaV3h3WlhKTmFYTnphVzVuSnl3Z2EyVmxjRWhsYkhCbGNrbHVTR1ZzY0dWeWN5azdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuUmhhVzVsY2k1d2NtOTBiMEZqWTJWemMwTnZiblJ5YjJ3Z1BTQnZjSFJwYjI1ekxuQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJEc2dMeThnYVc1MFpYSnVZV3dnYjNCMGFXOXVYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXVhR1ZzY0dWeWN5QTlJRzl3ZEdsdmJuTXVhR1ZzY0dWeWN6dGNiaUFnSUNBZ0lHTnZiblJoYVc1bGNpNXdZWEowYVdGc2N5QTlJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITTdYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXVaR1ZqYjNKaGRHOXljeUE5SUc5d2RHbHZibk11WkdWamIzSmhkRzl5Y3p0Y2JpQWdJQ0FnSUdOdmJuUmhhVzVsY2k1b2IyOXJjeUE5SUc5d2RHbHZibk11YUc5dmEzTTdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJSEpsZEM1ZlkyaHBiR1FnUFNCbWRXNWpkR2x2YmlocExDQmtZWFJoTENCaWJHOWphMUJoY21GdGN5d2daR1Z3ZEdoektTQjdYRzRnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVkNiRzlqYTFCaGNtRnRjeUFtSmlBaFlteHZZMnRRWVhKaGJYTXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjIxMWMzUWdjR0Z6Y3lCaWJHOWpheUJ3WVhKaGJYTW5LVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVkVaWEIwYUhNZ0ppWWdJV1JsY0hSb2N5a2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVY0WTJWd2RHbHZiaWduYlhWemRDQndZWE56SUhCaGNtVnVkQ0JrWlhCMGFITW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2QzSmhjRkJ5YjJkeVlXMG9YRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ0lDQnBMRnh1SUNBZ0lDQWdkR1Z0Y0d4aGRHVlRjR1ZqVzJsZExGeHVJQ0FnSUNBZ1pHRjBZU3hjYmlBZ0lDQWdJREFzWEc0Z0lDQWdJQ0JpYkc5amExQmhjbUZ0Y3l4Y2JpQWdJQ0FnSUdSbGNIUm9jMXh1SUNBZ0lDazdYRzRnSUgwN1hHNGdJSEpsZEhWeWJpQnlaWFE3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQjNjbUZ3VUhKdlozSmhiU2hjYmlBZ1kyOXVkR0ZwYm1WeUxGeHVJQ0JwTEZ4dUlDQm1iaXhjYmlBZ1pHRjBZU3hjYmlBZ1pHVmpiR0Z5WldSQ2JHOWphMUJoY21GdGN5eGNiaUFnWW14dlkydFFZWEpoYlhNc1hHNGdJR1JsY0hSb2MxeHVLU0I3WEc0Z0lHWjFibU4wYVc5dUlIQnliMmNvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeUE5SUh0OUtTQjdYRzRnSUNBZ2JHVjBJR04xY25KbGJuUkVaWEIwYUhNZ1BTQmtaWEIwYUhNN1hHNGdJQ0FnYVdZZ0tGeHVJQ0FnSUNBZ1pHVndkR2h6SUNZbVhHNGdJQ0FnSUNCamIyNTBaWGgwSUNFOUlHUmxjSFJvYzFzd1hTQW1KbHh1SUNBZ0lDQWdJU2hqYjI1MFpYaDBJRDA5UFNCamIyNTBZV2x1WlhJdWJuVnNiRU52Ym5SbGVIUWdKaVlnWkdWd2RHaHpXekJkSUQwOVBTQnVkV3hzS1Z4dUlDQWdJQ2tnZTF4dUlDQWdJQ0FnWTNWeWNtVnVkRVJsY0hSb2N5QTlJRnRqYjI1MFpYaDBYUzVqYjI1allYUW9aR1Z3ZEdoektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWm00b1hHNGdJQ0FnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNCamIyNTBaWGgwTEZ4dUlDQWdJQ0FnWTI5dWRHRnBibVZ5TG1obGJIQmxjbk1zWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpMbVJoZEdFZ2ZId2daR0YwWVN4Y2JpQWdJQ0FnSUdKc2IyTnJVR0Z5WVcxeklDWW1JRnR2Y0hScGIyNXpMbUpzYjJOclVHRnlZVzF6WFM1amIyNWpZWFFvWW14dlkydFFZWEpoYlhNcExGeHVJQ0FnSUNBZ1kzVnljbVZ1ZEVSbGNIUm9jMXh1SUNBZ0lDazdYRzRnSUgxY2JseHVJQ0J3Y205bklEMGdaWGhsWTNWMFpVUmxZMjl5WVhSdmNuTW9abTRzSUhCeWIyY3NJR052Ym5SaGFXNWxjaXdnWkdWd2RHaHpMQ0JrWVhSaExDQmliRzlqYTFCaGNtRnRjeWs3WEc1Y2JpQWdjSEp2Wnk1d2NtOW5jbUZ0SUQwZ2FUdGNiaUFnY0hKdlp5NWtaWEIwYUNBOUlHUmxjSFJvY3lBL0lHUmxjSFJvY3k1c1pXNW5kR2dnT2lBd08xeHVJQ0J3Y205bkxtSnNiMk5yVUdGeVlXMXpJRDBnWkdWamJHRnlaV1JDYkc5amExQmhjbUZ0Y3lCOGZDQXdPMXh1SUNCeVpYUjFjbTRnY0hKdlp6dGNibjFjYmx4dUx5b3FYRzRnS2lCVWFHbHpJR2x6SUdOMWNuSmxiblJzZVNCd1lYSjBJRzltSUhSb1pTQnZabVpwWTJsaGJDQkJVRWtzSUhSb1pYSmxabTl5WlNCcGJYQnNaVzFsYm5SaGRHbHZiaUJrWlhSaGFXeHpJSE5vYjNWc1pDQnViM1FnWW1VZ1kyaGhibWRsWkM1Y2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEpsYzI5c2RtVlFZWEowYVdGc0tIQmhjblJwWVd3c0lHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnYVdZZ0tDRndZWEowYVdGc0tTQjdYRzRnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVibUZ0WlNBOVBUMGdKMEJ3WVhKMGFXRnNMV0pzYjJOckp5a2dlMXh1SUNBZ0lDQWdjR0Z5ZEdsaGJDQTlJRzl3ZEdsdmJuTXVaR0YwWVZzbmNHRnlkR2xoYkMxaWJHOWpheWRkTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQndZWEowYVdGc0lEMGdiM0IwYVc5dWN5NXdZWEowYVdGc2MxdHZjSFJwYjI1ekxtNWhiV1ZkTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUdsbUlDZ2hjR0Z5ZEdsaGJDNWpZV3hzSUNZbUlDRnZjSFJwYjI1ekxtNWhiV1VwSUh0Y2JpQWdJQ0F2THlCVWFHbHpJR2x6SUdFZ1pIbHVZVzFwWXlCd1lYSjBhV0ZzSUhSb1lYUWdjbVYwZFhKdVpXUWdZU0J6ZEhKcGJtZGNiaUFnSUNCdmNIUnBiMjV6TG01aGJXVWdQU0J3WVhKMGFXRnNPMXh1SUNBZ0lIQmhjblJwWVd3Z1BTQnZjSFJwYjI1ekxuQmhjblJwWVd4elczQmhjblJwWVd4ZE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCd1lYSjBhV0ZzTzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdhVzUyYjJ0bFVHRnlkR2xoYkNod1lYSjBhV0ZzTENCamIyNTBaWGgwTENCdmNIUnBiMjV6S1NCN1hHNGdJQzh2SUZWelpTQjBhR1VnWTNWeWNtVnVkQ0JqYkc5emRYSmxJR052Ym5SbGVIUWdkRzhnYzJGMlpTQjBhR1VnY0dGeWRHbGhiQzFpYkc5amF5QnBaaUIwYUdseklIQmhjblJwWVd4Y2JpQWdZMjl1YzNRZ1kzVnljbVZ1ZEZCaGNuUnBZV3hDYkc5amF5QTlJRzl3ZEdsdmJuTXVaR0YwWVNBbUppQnZjSFJwYjI1ekxtUmhkR0ZiSjNCaGNuUnBZV3d0WW14dlkyc25YVHRjYmlBZ2IzQjBhVzl1Y3k1d1lYSjBhV0ZzSUQwZ2RISjFaVHRjYmlBZ2FXWWdLRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnYjNCMGFXOXVjeTVrWVhSaExtTnZiblJsZUhSUVlYUm9JRDBnYjNCMGFXOXVjeTVwWkhOYk1GMGdmSHdnYjNCMGFXOXVjeTVrWVhSaExtTnZiblJsZUhSUVlYUm9PMXh1SUNCOVhHNWNiaUFnYkdWMElIQmhjblJwWVd4Q2JHOWphenRjYmlBZ2FXWWdLRzl3ZEdsdmJuTXVabTRnSmlZZ2IzQjBhVzl1Y3k1bWJpQWhQVDBnYm05dmNDa2dlMXh1SUNBZ0lHOXdkR2x2Ym5NdVpHRjBZU0E5SUdOeVpXRjBaVVp5WVcxbEtHOXdkR2x2Ym5NdVpHRjBZU2s3WEc0Z0lDQWdMeThnVjNKaGNIQmxjaUJtZFc1amRHbHZiaUIwYnlCblpYUWdZV05qWlhOeklIUnZJR04xY25KbGJuUlFZWEowYVdGc1FteHZZMnNnWm5KdmJTQjBhR1VnWTJ4dmMzVnlaVnh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNDdYRzRnSUNBZ2NHRnlkR2xoYkVKc2IyTnJJRDBnYjNCMGFXOXVjeTVrWVhSaFd5ZHdZWEowYVdGc0xXSnNiMk5ySjEwZ1BTQm1kVzVqZEdsdmJpQndZWEowYVdGc1FteHZZMnRYY21Gd2NHVnlLRnh1SUNBZ0lDQWdZMjl1ZEdWNGRDeGNiaUFnSUNBZ0lHOXdkR2x2Ym5NZ1BTQjdmVnh1SUNBZ0lDa2dlMXh1SUNBZ0lDQWdMeThnVW1WemRHOXlaU0IwYUdVZ2NHRnlkR2xoYkMxaWJHOWpheUJtY205dElIUm9aU0JqYkc5emRYSmxJR1p2Y2lCMGFHVWdaWGhsWTNWMGFXOXVJRzltSUhSb1pTQmliRzlqYTF4dUlDQWdJQ0FnTHk4Z2FTNWxMaUIwYUdVZ2NHRnlkQ0JwYm5OcFpHVWdkR2hsSUdKc2IyTnJJRzltSUhSb1pTQndZWEowYVdGc0lHTmhiR3d1WEc0Z0lDQWdJQ0J2Y0hScGIyNXpMbVJoZEdFZ1BTQmpjbVZoZEdWR2NtRnRaU2h2Y0hScGIyNXpMbVJoZEdFcE8xeHVJQ0FnSUNBZ2IzQjBhVzl1Y3k1a1lYUmhXeWR3WVhKMGFXRnNMV0pzYjJOckoxMGdQU0JqZFhKeVpXNTBVR0Z5ZEdsaGJFSnNiMk5yTzF4dUlDQWdJQ0FnY21WMGRYSnVJR1p1S0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wTzF4dUlDQWdJSDA3WEc0Z0lDQWdhV1lnS0dadUxuQmhjblJwWVd4ektTQjdYRzRnSUNBZ0lDQnZjSFJwYjI1ekxuQmhjblJwWVd4eklEMGdWWFJwYkhNdVpYaDBaVzVrS0h0OUxDQnZjSFJwYjI1ekxuQmhjblJwWVd4ekxDQm1iaTV3WVhKMGFXRnNjeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tIQmhjblJwWVd3Z1BUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCd1lYSjBhV0ZzUW14dlkyc3BJSHRjYmlBZ0lDQndZWEowYVdGc0lEMGdjR0Z5ZEdsaGJFSnNiMk5yTzF4dUlDQjlYRzVjYmlBZ2FXWWdLSEJoY25ScFlXd2dQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0oxUm9aU0J3WVhKMGFXRnNJQ2NnS3lCdmNIUnBiMjV6TG01aGJXVWdLeUFuSUdOdmRXeGtJRzV2ZENCaVpTQm1iM1Z1WkNjcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0hCaGNuUnBZV3dnYVc1emRHRnVZMlZ2WmlCR2RXNWpkR2x2YmlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ3WVhKMGFXRnNLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ1YjI5d0tDa2dlMXh1SUNCeVpYUjFjbTRnSnljN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdsdWFYUkVZWFJoS0dOdmJuUmxlSFFzSUdSaGRHRXBJSHRjYmlBZ2FXWWdLQ0ZrWVhSaElIeDhJQ0VvSjNKdmIzUW5JR2x1SUdSaGRHRXBLU0I3WEc0Z0lDQWdaR0YwWVNBOUlHUmhkR0VnUHlCamNtVmhkR1ZHY21GdFpTaGtZWFJoS1NBNklIdDlPMXh1SUNBZ0lHUmhkR0V1Y205dmRDQTlJR052Ym5SbGVIUTdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHUmhkR0U3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Y0WldOMWRHVkVaV052Y21GMGIzSnpLR1p1TENCd2NtOW5MQ0JqYjI1MFlXbHVaWElzSUdSbGNIUm9jeXdnWkdGMFlTd2dZbXh2WTJ0UVlYSmhiWE1wSUh0Y2JpQWdhV1lnS0dadUxtUmxZMjl5WVhSdmNpa2dlMXh1SUNBZ0lHeGxkQ0J3Y205d2N5QTlJSHQ5TzF4dUlDQWdJSEJ5YjJjZ1BTQm1iaTVrWldOdmNtRjBiM0lvWEc0Z0lDQWdJQ0J3Y205bkxGeHVJQ0FnSUNBZ2NISnZjSE1zWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0JrWlhCMGFITWdKaVlnWkdWd2RHaHpXekJkTEZ4dUlDQWdJQ0FnWkdGMFlTeGNiaUFnSUNBZ0lHSnNiMk5yVUdGeVlXMXpMRnh1SUNBZ0lDQWdaR1Z3ZEdoelhHNGdJQ0FnS1R0Y2JpQWdJQ0JWZEdsc2N5NWxlSFJsYm1Rb2NISnZaeXdnY0hKdmNITXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQndjbTluTzF4dWZWeHVYRzVtZFc1amRHbHZiaUIzY21Gd1NHVnNjR1Z5YzFSdlVHRnpjMHh2YjJ0MWNGQnliM0JsY25SNUtHMWxjbWRsWkVobGJIQmxjbk1zSUdOdmJuUmhhVzVsY2lrZ2UxeHVJQ0JQWW1wbFkzUXVhMlY1Y3lodFpYSm5aV1JJWld4d1pYSnpLUzVtYjNKRllXTm9LR2hsYkhCbGNrNWhiV1VnUFQ0Z2UxeHVJQ0FnSUd4bGRDQm9aV3h3WlhJZ1BTQnRaWEpuWldSSVpXeHdaWEp6VzJobGJIQmxjazVoYldWZE8xeHVJQ0FnSUcxbGNtZGxaRWhsYkhCbGNuTmJhR1ZzY0dWeVRtRnRaVjBnUFNCd1lYTnpURzl2YTNWd1VISnZjR1Z5ZEhsUGNIUnBiMjRvYUdWc2NHVnlMQ0JqYjI1MFlXbHVaWElwTzF4dUlDQjlLVHRjYm4xY2JseHVablZ1WTNScGIyNGdjR0Z6YzB4dmIydDFjRkJ5YjNCbGNuUjVUM0IwYVc5dUtHaGxiSEJsY2l3Z1kyOXVkR0ZwYm1WeUtTQjdYRzRnSUdOdmJuTjBJR3h2YjJ0MWNGQnliM0JsY25SNUlEMGdZMjl1ZEdGcGJtVnlMbXh2YjJ0MWNGQnliM0JsY25SNU8xeHVJQ0J5WlhSMWNtNGdkM0poY0VobGJIQmxjaWhvWld4d1pYSXNJRzl3ZEdsdmJuTWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQlZkR2xzY3k1bGVIUmxibVFvZXlCc2IyOXJkWEJRY205d1pYSjBlU0I5TENCdmNIUnBiMjV6S1R0Y2JpQWdmU2s3WEc1OVhHNGlYWDA9XG4iLCIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNhZmVTdHJpbmc7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDNOaFptVXRjM1J5YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGRFFTeFRRVUZUTEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRNVUlzVFVGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1EwRkRkRUk3TzBGQlJVUXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1dVRkJWenRCUVVOMlJTeFRRVUZQTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wTkJRM3BDTEVOQlFVTTdPM0ZDUVVWaExGVkJRVlVpTENKbWFXeGxJam9pYzJGbVpTMXpkSEpwYm1jdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQ2RXbHNaQ0J2ZFhRZ2IzVnlJR0poYzJsaklGTmhabVZUZEhKcGJtY2dkSGx3WlZ4dVpuVnVZM1JwYjI0Z1UyRm1aVk4wY21sdVp5aHpkSEpwYm1jcElIdGNiaUFnZEdocGN5NXpkSEpwYm1jZ1BTQnpkSEpwYm1jN1hHNTlYRzVjYmxOaFptVlRkSEpwYm1jdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bklEMGdVMkZtWlZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZEc5SVZFMU1JRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJSEpsZEhWeWJpQW5KeUFySUhSb2FYTXVjM1J5YVc1bk8xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTJGbVpWTjBjbWx1Wnp0Y2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbmV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XG5leHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcbmV4cG9ydHMuYmxvY2tQYXJhbXMgPSBibG9ja1BhcmFtcztcbmV4cG9ydHMuYXBwZW5kQ29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aDtcbnZhciBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2A9XS9nLFxuICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcbi8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtc3R5bGUgKi9cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH07XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IGZhbHNlO1xufTtcblxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcbiAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG4gICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICB9XG5cbiAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcbiAgdmFyIGZyYW1lID0gZXh0ZW5kKHt9LCBvYmplY3QpO1xuICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzVjBhV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1FVRkJRU3hKUVVGTkxFMUJRVTBzUjBGQlJ6dEJRVU5pTEV0QlFVY3NSVUZCUlN4UFFVRlBPMEZCUTFvc1MwRkJSeXhGUVVGRkxFMUJRVTA3UVVGRFdDeExRVUZITEVWQlFVVXNUVUZCVFR0QlFVTllMRXRCUVVjc1JVRkJSU3hSUVVGUk8wRkJRMklzUzBGQlJ5eEZRVUZGTEZGQlFWRTdRVUZEWWl4TFFVRkhMRVZCUVVVc1VVRkJVVHRCUVVOaUxFdEJRVWNzUlVGQlJTeFJRVUZSTzBOQlEyUXNRMEZCUXpzN1FVRkZSaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTzBsQlF6TkNMRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU03TzBGQlJYcENMRk5CUVZNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU4yUWl4VFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dERRVU53UWpzN1FVRkZUU3hUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZITEc5Q1FVRnZRanRCUVVNMVF5eFBRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVONlF5eFRRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4VlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETTBRc1YwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFBRVU01UWp0TFFVTkdPMGRCUTBZN08wRkJSVVFzVTBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN1FVRkZUU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJRenM3T3pzN08wRkJTMmhFTEVsQlFVa3NWVUZCVlN4SFFVRkhMRzlDUVVGVExFdEJRVXNzUlVGQlJUdEJRVU12UWl4VFFVRlBMRTlCUVU4c1MwRkJTeXhMUVVGTExGVkJRVlVzUTBGQlF6dERRVU53UXl4RFFVRkRPenM3UVVGSFJpeEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOdVFpeFZRVTlQTEZWQlFWVXNSMEZRYWtJc1ZVRkJWU3hIUVVGSExGVkJRVk1zUzBGQlN5eEZRVUZGTzBGQlF6TkNMRmRCUTBVc1QwRkJUeXhMUVVGTExFdEJRVXNzVlVGQlZTeEpRVU16UWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEcxQ1FVRnRRaXhEUVVNMVF6dEhRVU5JTEVOQlFVTTdRMEZEU0R0UlFVTlJMRlZCUVZVc1IwRkJWaXhWUVVGVk96czdPenRCUVVsYUxFbEJRVTBzVDBGQlR5eEhRVU5zUWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhKUVVOaUxGVkJRVk1zUzBGQlN5eEZRVUZGTzBGQlEyUXNVMEZCVHl4TFFVRkxMRWxCUVVrc1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVTeEhRVU55UXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEdkQ1FVRm5RaXhIUVVONlF5eExRVUZMTEVOQlFVTTdRMEZEV0N4RFFVRkRPenM3T3p0QlFVZEhMRk5CUVZNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVTdRVUZEY0VNc1QwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOb1JDeFJRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFVkJRVVU3UVVGRGRFSXNZVUZCVHl4RFFVRkRMRU5CUVVNN1MwRkRWanRIUVVOR08wRkJRMFFzVTBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTllPenRCUVVWTkxGTkJRVk1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRM1pETEUxQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hGUVVGRk96dEJRVVU1UWl4UlFVRkpMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlF6TkNMR0ZCUVU4c1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzB0QlEzaENMRTFCUVUwc1NVRkJTU3hOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEzcENMR0ZCUVU4c1JVRkJSU3hEUVVGRE8wdEJRMWdzVFVGQlRTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTJ4Q0xHRkJRVThzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTndRanM3T3pzN1FVRkxSQ3hWUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXp0SFFVTjBRanM3UVVGRlJDeE5RVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdEJRVU14UWl4WFFVRlBMRTFCUVUwc1EwRkJRenRIUVVObU8wRkJRMFFzVTBGQlR5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dERRVU0zUXpzN1FVRkZUU3hUUVVGVExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZETjBJc1RVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUTNwQ0xGZEJRVThzU1VGQlNTeERRVUZETzBkQlEySXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVNdlF5eFhRVUZQTEVsQlFVa3NRMEZCUXp0SFFVTmlMRTFCUVUwN1FVRkRUQ3hYUVVGUExFdEJRVXNzUTBGQlF6dEhRVU5rTzBOQlEwWTdPMEZCUlUwc1UwRkJVeXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyeERMRTFCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRMMElzVDBGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1FVRkRka0lzVTBGQlR5eExRVUZMTEVOQlFVTTdRMEZEWkRzN1FVRkZUU3hUUVVGVExGZEJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZPMEZCUTNaRExGRkJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMEZCUTJ4Q0xGTkJRVThzVFVGQlRTeERRVUZETzBOQlEyWTdPMEZCUlUwc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hGUVVGRk8wRkJRMnBFTEZOQlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVRXNSMEZCU1N4RlFVRkZMRU5CUVVNN1EwRkRjRVFpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JsYzJOaGNHVWdQU0I3WEc0Z0lDY21Kem9nSnlaaGJYQTdKeXhjYmlBZ0p6d25PaUFuSm14ME95Y3NYRzRnSUNjK0p6b2dKeVpuZERzbkxGeHVJQ0FuWENJbk9pQW5KbkYxYjNRN0p5eGNiaUFnWENJblhDSTZJQ2NtSTNneU56c25MRnh1SUNBbllDYzZJQ2NtSTNnMk1Ec25MRnh1SUNBblBTYzZJQ2NtSTNnelJEc25YRzU5TzF4dVhHNWpiMjV6ZENCaVlXUkRhR0Z5Y3lBOUlDOWJKancrWENJbllEMWRMMmNzWEc0Z0lIQnZjM05wWW14bElEMGdMMXNtUEQ1Y0lpZGdQVjB2TzF4dVhHNW1kVzVqZEdsdmJpQmxjMk5oY0dWRGFHRnlLR05vY2lrZ2UxeHVJQ0J5WlhSMWNtNGdaWE5qWVhCbFcyTm9jbDA3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmxlSFJsYm1Rb2IySnFJQzhxSUN3Z0xpNHVjMjkxY21ObElDb3ZLU0I3WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0Z5WjNWdFpXNTBjMXRwWFNrZ2UxeHVJQ0FnSUNBZ2FXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2hoY21kMWJXVnVkSE5iYVYwc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ2IySnFXMnRsZVYwZ1BTQmhjbWQxYldWdWRITmJhVjFiYTJWNVhUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2IySnFPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ2JHVjBJSFJ2VTNSeWFXNW5JRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaenRjYmx4dUx5OGdVMjkxY21ObFpDQm1jbTl0SUd4dlpHRnphRnh1THk4Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwySmxjM1JwWldwekwyeHZaR0Z6YUM5aWJHOWlMMjFoYzNSbGNpOU1TVU5GVGxORkxuUjRkRnh1THlvZ1pYTnNhVzUwTFdScGMyRmliR1VnWm5WdVl5MXpkSGxzWlNBcUwxeHViR1YwSUdselJuVnVZM1JwYjI0Z1BTQm1kVzVqZEdsdmJpaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5ablZ1WTNScGIyNG5PMXh1ZlR0Y2JpOHZJR1poYkd4aVlXTnJJR1p2Y2lCdmJHUmxjaUIyWlhKemFXOXVjeUJ2WmlCRGFISnZiV1VnWVc1a0lGTmhabUZ5YVZ4dUx5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHNWxlSFFnS2k5Y2JtbG1JQ2hwYzBaMWJtTjBhVzl1S0M5NEx5a3BJSHRjYmlBZ2FYTkdkVzVqZEdsdmJpQTlJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUpseHVJQ0FnSUNBZ2RHOVRkSEpwYm1jdVkyRnNiQ2gyWVd4MVpTa2dQVDA5SUNkYmIySnFaV04wSUVaMWJtTjBhVzl1WFNkY2JpQWdJQ0FwTzF4dUlDQjlPMXh1ZlZ4dVpYaHdiM0owSUhzZ2FYTkdkVzVqZEdsdmJpQjlPMXh1THlvZ1pYTnNhVzUwTFdWdVlXSnNaU0JtZFc1akxYTjBlV3hsSUNvdlhHNWNiaThxSUdsemRHRnVZblZzSUdsbmJtOXlaU0J1WlhoMElDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkJjbkpoZVNBOVhHNGdJRUZ5Y21GNUxtbHpRWEp5WVhrZ2ZIeGNiaUFnWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1VnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSjF4dUlDQWdJQ0FnUHlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkhWbEtTQTlQVDBnSjF0dlltcGxZM1FnUVhKeVlYbGRKMXh1SUNBZ0lDQWdPaUJtWVd4elpUdGNiaUFnZlR0Y2JseHVMeThnVDJ4a1pYSWdTVVVnZG1WeWMybHZibk1nWkc4Z2JtOTBJR1JwY21WamRHeDVJSE4xY0hCdmNuUWdhVzVrWlhoUFppQnpieUIzWlNCdGRYTjBJR2x0Y0d4bGJXVnVkQ0J2ZFhJZ2IzZHVMQ0J6WVdSc2VTNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnBibVJsZUU5bUtHRnljbUY1TENCMllXeDFaU2tnZTF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTUN3Z2JHVnVJRDBnWVhKeVlYa3ViR1Z1WjNSb095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JpQWdJQ0JwWmlBb1lYSnlZWGxiYVYwZ1BUMDlJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2FUdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NtVjBkWEp1SUMweE8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWlhOallYQmxSWGh3Y21WemMybHZiaWh6ZEhKcGJtY3BJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnpkSEpwYm1jZ0lUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdMeThnWkc5dUozUWdaWE5qWVhCbElGTmhabVZUZEhKcGJtZHpMQ0J6YVc1alpTQjBhR1Y1SjNKbElHRnNjbVZoWkhrZ2MyRm1aVnh1SUNBZ0lHbG1JQ2h6ZEhKcGJtY2dKaVlnYzNSeWFXNW5MblJ2U0ZSTlRDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlITjBjbWx1Wnk1MGIwaFVUVXdvS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hOMGNtbHVaeUE5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdKeWM3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doYzNSeWFXNW5LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjM1J5YVc1bklDc2dKeWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUm05eVkyVWdZU0J6ZEhKcGJtY2dZMjl1ZG1WeWMybHZiaUJoY3lCMGFHbHpJSGRwYkd3Z1ltVWdaRzl1WlNCaWVTQjBhR1VnWVhCd1pXNWtJSEpsWjJGeVpHeGxjM01nWVc1a1hHNGdJQ0FnTHk4Z2RHaGxJSEpsWjJWNElIUmxjM1FnZDJsc2JDQmtieUIwYUdseklIUnlZVzV6Y0dGeVpXNTBiSGtnWW1Wb2FXNWtJSFJvWlNCelkyVnVaWE1zSUdOaGRYTnBibWNnYVhOemRXVnpJR2xtWEc0Z0lDQWdMeThnWVc0Z2IySnFaV04wSjNNZ2RHOGdjM1J5YVc1bklHaGhjeUJsYzJOaGNHVmtJR05vWVhKaFkzUmxjbk1nYVc0Z2FYUXVYRzRnSUNBZ2MzUnlhVzVuSUQwZ0p5Y2dLeUJ6ZEhKcGJtYzdYRzRnSUgxY2JseHVJQ0JwWmlBb0lYQnZjM05wWW14bExuUmxjM1FvYzNSeWFXNW5LU2tnZTF4dUlDQWdJSEpsZEhWeWJpQnpkSEpwYm1jN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhOMGNtbHVaeTV5WlhCc1lXTmxLR0poWkVOb1lYSnpMQ0JsYzJOaGNHVkRhR0Z5S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR2x6Ulcxd2RIa29kbUZzZFdVcElIdGNiaUFnYVdZZ0tDRjJZV3gxWlNBbUppQjJZV3gxWlNBaFBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR2x6UVhKeVlYa29kbUZzZFdVcElDWW1JSFpoYkhWbExteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZM0psWVhSbFJuSmhiV1VvYjJKcVpXTjBLU0I3WEc0Z0lHeGxkQ0JtY21GdFpTQTlJR1Y0ZEdWdVpDaDdmU3dnYjJKcVpXTjBLVHRjYmlBZ1puSmhiV1V1WDNCaGNtVnVkQ0E5SUc5aWFtVmpkRHRjYmlBZ2NtVjBkWEp1SUdaeVlXMWxPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1lteHZZMnRRWVhKaGJYTW9jR0Z5WVcxekxDQnBaSE1wSUh0Y2JpQWdjR0Z5WVcxekxuQmhkR2dnUFNCcFpITTdYRzRnSUhKbGRIVnliaUJ3WVhKaGJYTTdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCaGNIQmxibVJEYjI1MFpYaDBVR0YwYUNoamIyNTBaWGgwVUdGMGFDd2dhV1FwSUh0Y2JpQWdjbVYwZFhKdUlDaGpiMjUwWlhoMFVHRjBhQ0EvSUdOdmJuUmxlSFJRWVhSb0lDc2dKeTRuSURvZ0p5Y3BJQ3NnYVdRN1hHNTlYRzRpWFgwPVxuIiwiLy8gQ3JlYXRlIGEgc2ltcGxlIHBhdGggYWxpYXMgdG8gYWxsb3cgYnJvd3NlcmlmeSB0byByZXNvbHZlXG4vLyB0aGUgcnVudGltZSBvbiBhIHN1cHBvcnRlZCBwYXRoLlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZScpWydkZWZhdWx0J107XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBSRVFVRVNUX01FVEhPRFMsIGNvbmZpZywgY3VzdG9tRmFpbHVyZXMgfSBmcm9tICcuLi9Db25maWcvQ29uZmlnJztcbmNsYXNzIEFqYXgge1xuICAgIGNzcmZUb2tlbjtcbiAgICBhc3luYyBhamF4KHBhcmFtcywgYm9keSkge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocGFyYW1zLmhlYWRlcnMpO1xuICAgICAgICBpZiAocGFyYW1zLnVybCA9PT0gY29uZmlnLmFwaS5zaWduSW4udXJsIHx8IHBhcmFtcy51cmwgPT09IGNvbmZpZy5hcGkuc2lnblVwLnVybCkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5tZXRob2QgIT09IFJFUVVFU1RfTUVUSE9EUy5HRVQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0Q3NyZlRva2VuRnJvbVNlcnZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ1NSRi1Ub2tlbicsIHRoaXMuY3NyZlRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5ob3N0fSR7cGFyYW1zLnVybH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcmVzcG9uc2VCb2R5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2VCb2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tU3RhdHVzID0gcmVzcG9uc2VCb2R5LnN0YXR1cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keS5tZXNzYWdlID0gY3VzdG9tRmFpbHVyZXNbY3VzdG9tU3RhdHVzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlQm9keSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIHJlc3BvbnNlQm9keVxuICAgICAgICB9O1xuICAgIH1cbiAgICA7XG4gICAgc2V0Q3NyZlRva2VuKGNzcmZUb2tlbikge1xuICAgICAgICB0aGlzLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIGdldENzcmZUb2tlbkZyb21TZXJ2ZXIoKSB7XG4gICAgICAgIGNvbnN0IGNzcmZSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5ob3N0fSR7Y29uZmlnLmFwaS5jc3JmLnVybH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IGNvbmZpZy5hcGkuY3NyZi5tZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhjb25maWcuYXBpLmNzcmYuaGVhZGVycyksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY3NyZlRva2VuID0gYXdhaXQgY3NyZlJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhpcy5zZXRDc3JmVG9rZW4oY3NyZlRva2VuLmJvZHlbJ2NzcmYtdG9rZW4nXSk7XG4gICAgICAgIHJldHVybiBjc3JmVG9rZW47XG4gICAgfVxuICAgIGFzeW5jIGNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmYpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cy50b1N0cmluZygpIGluIGNvbmYuc3RhdHVzZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMudG9TdHJpbmcoKSBpbiBjb25mLnN0YXR1c2VzLmZhaWx1cmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cy50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKGtleVN0YXR1cyA9PT0gJzQwMCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21TdGF0dXMgPSByZXNwb25zZS5yZXNwb25zZUJvZHkuc3RhdHVzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgbXNnOiBjdXN0b21GYWlsdXJlc1tjdXN0b21TdGF0dXNdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICAgICAgICBtc2c6IGNvbmZpZy5hcGkuc2lnbmluLnN0YXR1c2VzLmZhaWx1cmVba2V5U3RhdHVzXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICBtc2c6ICfQndC10L7QttC40LTQsNC90L3QsNGPINC+0YjQuNCx0LrQsCcsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQWpheCgpO1xuIiwiaW1wb3J0ICcuL0FwcC5jc3MnO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnRzL0Jhc2VDb21wb25lbnQvQmFzZUNvbXBvbmVudCc7XG5pbXBvcnQgSGVhZGVyVmlldyBmcm9tICcuL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlldyc7XG5pbXBvcnQgSGVhZGVyQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXJzL0hlYWRlckNvbnRyb2xsZXIvSGVhZGVyQ29udHJvbGxlcic7XG5pbXBvcnQgTW9kYWxSaWdodFZpZXcgZnJvbSAnLi9WaWV3cy9Nb2RhbFJpZ2h0Vmlldy9Nb2RhbFJpZ2h0Vmlldyc7XG5pbXBvcnQgTW9kYWxSaWdodENvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVycy9Nb2RhbFJpZ2h0Q29udHJvbGxlci9Nb2RhbFJpZ2h0Q29udHJvbGxlcic7XG5pbXBvcnQgRmlsbVZpZXcgZnJvbSAnLi9WaWV3cy9GaWxtVmlldy9GaWxtVmlldyc7XG5pbXBvcnQgRmlsbUNvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVycy9GaWxtQ29udHJvbGxlci9GaWxtQ29udHJvbGxlcic7XG5pbXBvcnQgU2V0dGluZ3NWaWV3IGZyb20gJy4vVmlld3MvU2V0dGluZ3NWaWV3L1NldHRpbmdzVmlldyc7XG5pbXBvcnQgU2V0dGluZ3NDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcnMvU2V0dGluZ3NDb250cm9sbGVyL1NldHRpbmdzQ29udHJvbGxlcic7XG5pbXBvcnQgUGVyc29uVmlldyBmcm9tICcuL1ZpZXdzL1BlcnNvblZpZXcvUGVyc29uVmlldyc7XG5pbXBvcnQgUGVyc29uQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXJzL1BlcnNvbkNvbnRyb2xsZXIvUGVyc29uQ29udHJvbGxlcic7XG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi9WaWV3cy9NYWluVmlldy9NYWluVmlldyc7XG5pbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVycy9NYWluQ29udHJvbGxlci9NYWluQ29udHJvbGxlcic7XG5pbXBvcnQgTm90Rm91bmRWaWV3IGZyb20gJy4vVmlld3MvTm90Rm91bmRWaWV3L05vdEZvdW5kVmlldyc7XG5pbXBvcnQgTm90Rm91bmRDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcnMvTm90Rm91bmRDb250cm9sbGVyL05vdEZvdW5kQ29udHJvbGxlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vTW9kZWxzL1VzZXJNb2RlbC9Vc2VyTW9kZWwnO1xuaW1wb3J0IEZpbG1Nb2RlbCBmcm9tICcuL01vZGVscy9GaWxtTW9kZWwvRmlsbU1vZGVsJztcbmltcG9ydCBQZXJzb25Nb2RlbCBmcm9tICcuL01vZGVscy9QZXJzb25Nb2RlbC9QZXJzb25Nb2RlbCc7XG5pbXBvcnQgU2VsZWN0aW9uTW9kZWwgZnJvbSBcIi4vTW9kZWxzL1NlbGVjdGlvbk1vZGVsL1NlbGVjdGlvbk1vZGVsXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vUm91dGVyL1JvdXRlcic7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi9Sb3V0ZXIvUm91dGVyUGF0aHMnO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tICcuL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuY2xhc3MgQXBwIHtcbiAgICAvLyBWaWV3c1xuICAgIGhlYWRlclZpZXc7XG4gICAgbW9kYWxSaWdodFZpZXc7XG4gICAgZmlsbVZpZXc7XG4gICAgc2V0dGluZ3NWaWV3O1xuICAgIHBlcnNvblZpZXc7XG4gICAgbWFpblZpZXc7XG4gICAgbm90Rm91bmRWaWV3O1xuICAgIC8vIENvbnRyb2xsZXJzXG4gICAgaGVhZGVyQ29udHJvbGxlcjtcbiAgICBtb2RhbFJpZ2h0Q29udHJvbGxlcjtcbiAgICBmaWxtQ29udHJvbGxlcjtcbiAgICBzZXR0aW5nc0NvbnRyb2xsZXI7XG4gICAgcGVyc29uQ29udHJvbGxlcjtcbiAgICBtYWluQ29udHJvbGxlcjtcbiAgICBub3RGb3VuZENvbnRyb2xsZXI7XG4gICAgLy8gTW9kZWxzXG4gICAgdXNlck1vZGVsO1xuICAgIGZpbG1Nb2RlbDtcbiAgICBwZXJzb25Nb2RlbDtcbiAgICBzZWxlY3Rpb25Nb2RlbDtcbiAgICAvLyBFbGVtZW50c1xuICAgIHJvb3Q7XG4gICAgaGVhZGVyO1xuICAgIGZvb3RlcjtcbiAgICBjb250ZW50O1xuICAgIG1vZGFsUmlnaHQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdFBhZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0Vmlld3MoKTtcbiAgICAgICAgdGhpcy5pbml0TW9kZWxzKCk7XG4gICAgICAgIHRoaXMuaW5pdENvbnRyb2xsZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdFJvdXRlcygpO1xuICAgIH1cbiAgICBydW4odXJsKSB7XG4gICAgICAgIHJvdXRlci5zdGFydCh1cmwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINCx0LDQt9C+0LLRg9GOINCy0ZHRgNGB0YLQutGDINGB0YLRgNCw0L3QuNGG0YtcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRQYWdlKCkge1xuICAgICAgICBjb25zdCBiYXNlQ29tcG9uZW50ID0gbmV3IEJhc2VDb21wb25lbnQoZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIGJhc2VDb21wb25lbnQuc2hvdygpO1xuICAgICAgICB0aGlzLnJvb3QgPSBiYXNlQ29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yb290Jyk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gYmFzZUNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyJyk7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gYmFzZUNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9vdGVyJyk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGJhc2VDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbnRlbnQnKTtcbiAgICAgICAgdGhpcy5tb2RhbFJpZ2h0ID0gYmFzZUNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuanMtbW9kYWwtLXJpZ2h0Jyk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINCy0YHQtSDQvtGC0L7QsdGA0LDQttC10L3QuNGPICh2aWV3cylcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRWaWV3cygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3ID0gbmV3IEhlYWRlclZpZXcodGhpcy5oZWFkZXIpO1xuICAgICAgICB0aGlzLm1vZGFsUmlnaHRWaWV3ID0gbmV3IE1vZGFsUmlnaHRWaWV3KHRoaXMubW9kYWxSaWdodCk7XG4gICAgICAgIHRoaXMuZmlsbVZpZXcgPSBuZXcgRmlsbVZpZXcodGhpcy5jb250ZW50KTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc1ZpZXcgPSBuZXcgU2V0dGluZ3NWaWV3KHRoaXMuY29udGVudCk7XG4gICAgICAgIHRoaXMucGVyc29uVmlldyA9IG5ldyBQZXJzb25WaWV3KHRoaXMuY29udGVudCk7XG4gICAgICAgIHRoaXMubWFpblZpZXcgPSBuZXcgTWFpblZpZXcodGhpcy5jb250ZW50KTtcbiAgICAgICAgdGhpcy5ub3RGb3VuZFZpZXcgPSBuZXcgTm90Rm91bmRWaWV3KHRoaXMuY29udGVudCk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINCy0YHQtSDQvNC+0LXQtNC10LvQuCAobW9kZWxzKVxuICAgICAqICjQv9GA0LjQstCw0YLQvdC+0LUg0L/QvtC70LUg0LrQu9Cw0YHRgdCwKVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdE1vZGVscygpIHtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwgPSBuZXcgVXNlck1vZGVsKCk7XG4gICAgICAgIHRoaXMuZmlsbU1vZGVsID0gbmV3IEZpbG1Nb2RlbCgpO1xuICAgICAgICB0aGlzLnBlcnNvbk1vZGVsID0gbmV3IFBlcnNvbk1vZGVsKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwgPSBuZXcgU2VsZWN0aW9uTW9kZWwoKTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10YIg0LLRgdC1INC+0YLQvtCx0YDQsNC20LXQvdC40Y8gKHZpZXdzKVxuICAgICAqICjQv9GA0LjQstCw0YLQvdC+0LUg0L/QvtC70LUg0LrQu9Cw0YHRgdCwKVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgaW5pdENvbnRyb2xsZXJzKCkge1xuICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIgPSBuZXcgSGVhZGVyQ29udHJvbGxlcih0aGlzLmhlYWRlclZpZXcpO1xuICAgICAgICB0aGlzLm1vZGFsUmlnaHRDb250cm9sbGVyID0gbmV3IE1vZGFsUmlnaHRDb250cm9sbGVyKHRoaXMubW9kYWxSaWdodFZpZXcsIHRoaXMudXNlck1vZGVsKTtcbiAgICAgICAgdGhpcy5maWxtQ29udHJvbGxlciA9IG5ldyBGaWxtQ29udHJvbGxlcih0aGlzLmZpbG1WaWV3LCB0aGlzLmZpbG1Nb2RlbCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLnNldHRpbmdzVmlldywgdGhpcy51c2VyTW9kZWwpO1xuICAgICAgICB0aGlzLnBlcnNvbkNvbnRyb2xsZXIgPSBuZXcgUGVyc29uQ29udHJvbGxlcih0aGlzLnBlcnNvblZpZXcsIHRoaXMucGVyc29uTW9kZWwpO1xuICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKHRoaXMubWFpblZpZXcsIHsgc2VsZWN0aW9uczogdGhpcy5zZWxlY3Rpb25Nb2RlbCB9KTtcbiAgICAgICAgdGhpcy5ub3RGb3VuZENvbnRyb2xsZXIgPSBuZXcgTm90Rm91bmRDb250cm9sbGVyKHRoaXMubm90Rm91bmRWaWV3KTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC30LDQtNCw0ZHRgiDRgdCy0Y/Qt9C4INC80LXQttC00YMg0YHRgtGA0LDQvdC40YbQsNC80LggKFVSTCAtPiDQvtCx0YDQsNCx0L7RgtGH0LjQuilcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRSb3V0ZXMoKSB7XG4gICAgICAgIHJvdXRlci5zZXRVbmtub3duUGFnZUhhbmRsZXIodGhpcy5oYW5kbGVSZWRpcmVjdFRvTm90Rm91bmQuYmluZCh0aGlzKSk7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IFtcbiAgICAgICAgICAgIHsgcGF0aDogcGF0aHMubWFpbiwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvTWFpbiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5jYXRhbG9nLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9DYXRhbG9nIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnN0b3JlLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9TdG9yZSB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5teU1vdmllLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9NeU1vdmllIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnNpZ25JbiwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvU2lnbkluIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnNpZ25VcCwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvU2lnblVwIH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLmxvZ291dCwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvTG9nb3V0IH0sXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLnNldHRpbmdzLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9TZXR0aW5ncyB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5maWxtcywgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvRmlsbSB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5wZXJzb25zLCBoYW5kbGVyOiB0aGlzLmhhbmRsZVJlZGlyZWN0VG9QZXJzb24gfSxcbiAgICAgICAgXTtcbiAgICAgICAgcm91dGVzLmZvckVhY2goKHsgcGF0aCwgaGFuZGxlciB9KSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuYWRkUnVsZShwYXRoLCBoYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9NYWluKCkge1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndW5tb3VudC1hbGwnKTtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXByb2ZpbGVCdXR0b24nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXNpZ25JbkJ1dHRvbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbW91bnRcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgLy8gc3RhdGVzXG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnLycpO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlUmVkaXJlY3RUb1NpZ25JbigpIHtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocm91dGVyLmdldE5lYXJlc3ROb3RBdXRoVXJsKCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdtb2RhbFJpZ2h0LXNldFNpZ25JbicsIHRoaXMudXNlck1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubW9kYWxSaWdodENvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvU2lnblVwKCkge1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChyb3V0ZXIuZ2V0TmVhcmVzdE5vdEF1dGhVcmwoKSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ21vZGFsUmlnaHQtc2V0U2lnblVwJywgdGhpcy51c2VyTW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5tb2RhbFJpZ2h0Q29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9DYXRhbG9nKCkge1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndW5tb3VudC1hbGwnKTtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXByb2ZpbGVCdXR0b24nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXNpZ25JbkJ1dHRvbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbW91bnRcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIC8vIHN0YXRlc1xuICAgICAgICB0aGlzLmhlYWRlclZpZXcuY2hhbmdlQWN0aXZlSGVhZGVyTGlzdEl0ZW0oJy9jYXRhbG9nJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvU3RvcmUoKSB7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1bm1vdW50LWFsbCcpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItcHJvZmlsZUJ1dHRvbicpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtb3VudFxuICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgLy8gc3RhdGVzXG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnL3N0b3JlJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvTXlNb3ZpZSgpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1vdW50XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcvbXktbW92aWUnKTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9TZXR0aW5ncygpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gbW91bnRcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc0NvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIC8vIHN0YXRlc1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcjJyk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzVmlldy5jaGFuZ2VBY3RpdmVMZWZ0TWVudUl0ZW0ocGF0aHMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMudXNlck1vZGVsLmdldEN1cnJlbnRVc2VyKCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocm91dGVyLmdldE5lYXJlc3ROb3RBdXRoVXJsKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9GaWxtKGRhdGEpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YVswXSkge1xuICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbG1JZCA9IGRhdGFbMF07XG4gICAgICAgIC8vIG1vdW50XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgnbmV3LXBsYXllcicpO1xuICAgICAgICB0aGlzLmZpbG1Db250cm9sbGVyLm1vdW50Q29tcG9uZW50KHsgaWQ6IGZpbG1JZC50b1N0cmluZygpIH0pO1xuICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcjJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvUGVyc29uKGRhdGEpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZGF0YSB8fCAhZGF0YVswXSkge1xuICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBlcnNvbklkID0gZGF0YVswXTtcbiAgICAgICAgLy8gbW91bnRcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMucGVyc29uQ29udHJvbGxlci5tb3VudENvbXBvbmVudCh7IGlkOiBwZXJzb25JZC50b1N0cmluZygpIH0pO1xuICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcjJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvTG9nb3V0KCkge1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVkaXJlY3QnLCBwYXRocy5sb2dvdXQpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5sb2dvdXRVc2VyKCk7XG4gICAgICAgIHJvdXRlci5nb1RvUGF0aChwYXRocy5tYWluKTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9Ob3RGb3VuZCgpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLm5vdEZvdW5kQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IEJhckNvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vQmFyQ29tcG9uZW50Lmhicyc7XG5pbXBvcnQgJy4vQmFyQ29tcG9uZW50LmNzcyc7XG5pbXBvcnQgRGl2Q29tcG9uZW50IGZyb20gJy4uL0RpdkNvbXBvbmVudC9EaXZDb21wb25lbnQnO1xuLy8gVE9ET1xuLy8gdHlwZSBFdmVudFR1cGxlID0gW3N0cmluZywgKGU6IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB2b2lkXTtcbmNsYXNzIEJhckNvbXBvbmVudCBleHRlbmRzIElDb21wb25lbnQge1xuICAgIGZ1bGxCYXI7XG4gICAgbG9hZEJhcjtcbiAgICBsb2FkUHJvZ3Jlc3NCYXI7XG4gICAgY3VycmVudEJhcjtcbiAgICBiYXJIZWxwZXI7XG4gICAgY3VycmVudEJhckNpcmNsZTtcbiAgICAvLyBUT0RPXG4gICAgLy8gcHJpdmF0ZSBldmVudFR1cGxlczogRXZlbnRUdXBsZVtdID0gW1xuICAgIC8vICAgICBbXCJtb3VzZWRvd25cIiwgKGU6IE1vdXNlRXZlbnQpID0+IHsgdGhpcy5vbk1vdXNlRG93bihlKTsgfV0sXG4gICAgLy8gICAgIC8vIFtcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyldLFxuICAgIC8vICAgICAvLyBbXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyldLFxuICAgIC8vICAgICAvLyBbXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaFN0YXJ0LmJpbmQodGhpcyldLFxuICAgIC8vICAgICAvLyBbXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpXSxcbiAgICAvLyAgICAgLy8gW1widG91Y2hlbmRcIiwgdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyldLFxuICAgIC8vIF07XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBCYXJDb21wb25lbnRUZW1wbGF0ZSh7IGJhckNsYXNzOiBkYXRhLmJhckNsYXNzIH0pLCAnLmpzLWJhcicpO1xuICAgICAgICB0aGlzLmZ1bGxCYXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJhcl9fZnVsbCcpO1xuICAgICAgICB0aGlzLmxvYWRCYXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJhcl9fbG9hZCcpO1xuICAgICAgICB0aGlzLmxvYWRQcm9ncmVzc0JhciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYmFyLWxvYWRfX3Byb2dyZXNzJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYmFyX19jdXJyZW50Jyk7XG4gICAgICAgIHRoaXMuaW5pdEhpZGRlbkVsZW1lbnRzKCk7XG4gICAgICAgIC8vIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ2Jhcl91cGRhdGUtcHJvZ3Jlc3MnLCAocGVyY2VudGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRCYXIocGVyY2VudGFnZSk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbiAgICA7XG4gICAgaW5pdEhpZGRlbkVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBiYXJIZWxwZXJEaXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Jhcl9faGVscGVyJyk7XG4gICAgICAgIHRoaXMuYmFySGVscGVyID0gbmV3IERpdkNvbXBvbmVudChiYXJIZWxwZXJEaXYsICcnLCAnJywgeyBjbGFzczogJ2Jhcl9faGVscGVyJyB9KTtcbiAgICAgICAgY29uc3QgY3VycmVudEJhckNpcmNsZURpdiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYmFyX19jdXJyZW50LWNpcmNsZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXJDaXJjbGUgPSBuZXcgRGl2Q29tcG9uZW50KGN1cnJlbnRCYXJDaXJjbGVEaXYsICcnLCAnJywgeyBjbGFzczogJ2Jhcl9fY3VycmVudC1jaXJjbGUnIH0pO1xuICAgIH1cbiAgICA7XG4gICAgdXBkYXRlQ3VycmVudEJhcihwZXJjZW50YWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2V9JWA7XG4gICAgICAgIHRoaXMuY3VycmVudEJhckNpcmNsZS5kaXYuc3R5bGUubGVmdCA9IGAke3BlcmNlbnRhZ2V9JWA7XG4gICAgfVxuICAgIDtcbiAgICBjYWxjdWxhdGVQZXJjZW50YWdlKGN1cnNvclgpIHtcbiAgICAgICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmZ1bGxCYXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IGNsaWNrT2Zmc2V0ID0gY3Vyc29yWCAtIHRoaXMuZnVsbEJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICByZXR1cm4gKGNsaWNrT2Zmc2V0IC8gYmFyV2lkdGgpICogMTAwO1xuICAgIH1cbiAgICA7XG4gICAgLy8gcHJpdmF0ZSBvbk1vdXNlT3V0KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyAgICAgdGhpcy5iYXJIZWxwZXIuaGlkZSgpOyAvLyBUT0RPIGNoZWNrIGJlZm9yZSBoaWRlP1xuICAgIC8vICAgICAvLyB0aGlzLmN1cnJlbnRCYXJDaXJjbGUuaGlkZSgpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ29uVG91Y2hTdGFydCcpXG4gICAgLy8gICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgLy8gICAgIGNvbnN0IHRvdWNoRXZlbnRXaXRoVGFyZ2V0ID0gZSBhcyBUb3VjaEV2ZW50V2l0aFRhcmdldDtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0Jhcih0b3VjaEV2ZW50V2l0aFRhcmdldCk7XG4gICAgLy8gfTtcbiAgICAvL1xuICAgIC8vIHByaXZhdGUgb25Ub3VjaE1vdmUoZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnb25Ub3VjaE1vdmUnKVxuICAgIC8vICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgLy8gICAgICAgICBjb25zdCB0b3VjaEV2ZW50V2l0aFRhcmdldCA9IGUgYXMgVG91Y2hFdmVudFdpdGhUYXJnZXQ7XG4gICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHRvdWNoRXZlbnRXaXRoVGFyZ2V0KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG4gICAgLy9cbiAgICAvLyBwcml2YXRlIG9uVG91Y2hFbmQoZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnb25Ub3VjaEVuZCcpXG4gICAgLy8gICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIC8vIH07XG4gICAgLy9cbiAgICAvLyBIZWxwZXJzXG4gICAgY2hlY2tIZWxwZXIoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYmFyX19oZWxwZXInKSk7XG4gICAgfVxuICAgIDtcbiAgICBjaGVja0NpcmNsZSgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXJfX2N1cnJlbnQtY2lyY2xlJykpO1xuICAgIH1cbiAgICA7XG4gICAgLy8gQmluZHNcbiAgICBiaW5kTW91c2VEb3duRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgYmluZE1vdXNlVXBFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRNb3VzZU1vdmVFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbGlzdGVuZXIpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZE1vdXNlT3V0RXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbGlzdGVuZXIpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZFRvdWNoU3RhcnRFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRUb3VjaEVuZEV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRUb3VjaE1vdmVFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbGlzdGVuZXIpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBCYXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IEJhc2VDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0Jhc2VDb21wb25lbnQuaGJzJztcbmltcG9ydCAnLi9CYXNlQ29tcG9uZW50LmNzcyc7XG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBCYXNlQ29tcG9uZW50VGVtcGxhdGUoZGF0YSksICcuanMtcm9vdCcpO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50O1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b25Db21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0J1dHRvbkNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0J1dHRvbkNvbXBvbmVudC5jc3MnO1xuY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgYnV0dG9uUHJvcHMgPSB7XG4gICAgICAgIGNvb3JkaW5hdGVYOiB7IG5hbWU6ICctLWNvb3JkLXgnLCB2YWx1ZTogMCB9LFxuICAgICAgICBjb29yZGluYXRlWTogeyBuYW1lOiAnLS1jb29yZC15JywgdmFsdWU6IDAgfSxcbiAgICAgICAgc2l6ZVNxdWFyZTogeyBuYW1lOiAnLS1zaXplLXNxdWFyZScsIHZhbHVlOiAwIH0sXG4gICAgICAgIGRpYW1ldGVySGlnaGxpZ2h0OiB7IG5hbWU6ICctLWRpYW1ldGVyLWhpZ2hsaWdodCcsIHZhbHVlOiAwIH0sXG4gICAgfTtcbiAgICBidXR0b247XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBCdXR0b25Db21wb25lbnRUZW1wbGF0ZShkYXRhKSwgJy5qcy1idXR0b24nKTtcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykgfHwgdGhpcy5lbGVtZW50O1xuICAgICAgICB0aGlzLnNldFNpemVTcXVhcmUoKTtcbiAgICAgICAgdGhpcy5zZXREaWFtZXRlckhpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLmJpbmRNb3VzZU1vdmVFdmVudCh0aGlzLm9uTW91c2VNb3ZlRXZlbnQpO1xuICAgIH1cbiAgICA7XG4gICAgc2V0U2l6ZVNxdWFyZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25XaWR0aCA9IHRoaXMuYnV0dG9uLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uSGVpZ2h0ID0gdGhpcy5idXR0b24ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5idXR0b25Qcm9wc1snc2l6ZVNxdWFyZSddLnZhbHVlID0gTWF0aC5zcXJ0KGJ1dHRvbldpZHRoICogYnV0dG9uV2lkdGggKyBidXR0b25IZWlnaHQgKiBidXR0b25IZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24uc3R5bGUuc2V0UHJvcGVydHkodGhpcy5idXR0b25Qcm9wc1snc2l6ZVNxdWFyZSddLm5hbWUsIGAke3RoaXMuYnV0dG9uUHJvcHNbJ3NpemVTcXVhcmUnXS52YWx1ZX1weGApO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG4gICAgO1xuICAgIHNldERpYW1ldGVySGlnaGxpZ2h0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbldpZHRoID0gdGhpcy5idXR0b24ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBidXR0b25IZWlnaHQgPSB0aGlzLmJ1dHRvbi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBkaWFtZXRlciA9IE1hdGguc3FydChidXR0b25XaWR0aCAqIGJ1dHRvbldpZHRoICsgYnV0dG9uSGVpZ2h0ICogYnV0dG9uSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IG11bHRpcGx5U3FydCA9IE1hdGguc3FydChidXR0b25XaWR0aCAqIGJ1dHRvbkhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByb3BzWydkaWFtZXRlckhpZ2hsaWdodCddLnZhbHVlID0gZGlhbWV0ZXIgKyBtdWx0aXBseVNxcnQ7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLmJ1dHRvblByb3BzWydkaWFtZXRlckhpZ2hsaWdodCddLm5hbWUsIGAke3RoaXMuYnV0dG9uUHJvcHNbJ2RpYW1ldGVySGlnaGxpZ2h0J10udmFsdWV9cHhgKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuICAgIGJsb2NrKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIDtcbiAgICB1bmJsb2NrKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xuICAgIHVuYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRNb3VzZU1vdmVFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xuICAgIHVuYmluZE1vdXNlTW92ZUV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgb25Nb3VzZU1vdmVFdmVudChlKSB7XG4gICAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBlO1xuICAgICAgICB0aGlzLmJ1dHRvblByb3BzWydjb29yZGluYXRlWCddLnZhbHVlID0gbW91c2VFdmVudC5vZmZzZXRYO1xuICAgICAgICB0aGlzLmJ1dHRvblByb3BzWydjb29yZGluYXRlWSddLnZhbHVlID0gbW91c2VFdmVudC5vZmZzZXRZO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLmJ1dHRvblByb3BzWydjb29yZGluYXRlWCddLm5hbWUsIGAke3RoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVYJ10udmFsdWV9cHhgKTtcbiAgICAgICAgdGhpcy5idXR0b24uc3R5bGUuc2V0UHJvcGVydHkodGhpcy5idXR0b25Qcm9wc1snY29vcmRpbmF0ZVknXS5uYW1lLCBgJHt0aGlzLmJ1dHRvblByb3BzWydjb29yZGluYXRlWSddLnZhbHVlfXB4YCk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgRGl2Q29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9EaXZDb21wb25lbnQuaGJzJztcbmNsYXNzIERpdkNvbXBvbmVudCBleHRlbmRzIElDb21wb25lbnQge1xuICAgIGRpdjtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIERpdkNvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnZGl2Jyk7XG4gICAgICAgIHRoaXMuZGl2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpIHx8IHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgRGl2Q29tcG9uZW50O1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbkNvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vRHJvcGRvd25CdXR0b25Db21wb25lbnQuaGJzJztcbmltcG9ydCAnLi9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5jc3MnO1xuaW1wb3J0IExpbmtDb21wb25lbnQgZnJvbSAnLi4vTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50JztcbmNsYXNzIERyb3Bkb3duQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgZHJvcGRvd25Db250ZW50SXRlbXM7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBEcm9wZG93bkJ1dHRvbkNvbXBvbmVudFRlbXBsYXRlKHsgZGF0YUFjdGlvbjogZGF0YS5kYXRhQWN0aW9uLCBhdmF0YXI6IGRhdGEuYXZhdGFyIH0pLCAnLmpzLWRyb3Bkb3duJyk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25Db250ZW50SXRlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWRyb3Bkb3duLWNvbnRlbnQtY29udGFpbmVyX19pdGVtcycpO1xuICAgICAgICBkYXRhLml0ZW1zPy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IG5ldyBMaW5rQ29tcG9uZW50KHRoaXMuZHJvcGRvd25Db250ZW50SXRlbXMsICcnLCAnJywgaXRlbSk7XG4gICAgICAgICAgICBsaW5rLnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuYmluZENsaWNrRXZlbnQodGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xuICAgIC8vIC8qKlxuICAgIC8vICAqINCk0YPQvdC60YbQuNGPINC00L7QsdCw0LLQu9C10L3QuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0YHQvtCx0YvRgtC40Y8g0L3QsNC20LDRgtC40Y8g0L3QsCDQutC+0LzQv9C+0L3QtdC90YJcbiAgICAvLyAgKiBAcGFyYW0gIHthbnl9IGxpc3RlbmVyIC0gQ2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0L7QsdGL0YLQuNGPXG4gICAgLy8gICogQHJldHVybnMge3ZvaWR9XG4gICAgLy8gICovXG4gICAgLy8gcHVibGljIGJpbmRDbGlja0V2ZW50KGxpc3RlbmVyOiBhbnkpOiB2b2lkIHtcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgLy8gfTtcbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIC8vIHRoaXMucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19jb250ZW50Jyk/LmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duX19jb250ZW50X19zaG93Jyk7XG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gVE9ETzogSG93IHRvIGNoZWNrIGl0IEkgY2xpY2tlZCBzb21ld2hlcmUgbm90IHRvIHRoaXMuIEFkZCB0cmFuc3BhcmVudCBkaXYgYW5kIGhhbmRsZUNsaWNrIG9uIGl0P1xuICAgICAgICAvLyBpZiAoISg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpLm1hdGNoZXMoJy5kcm9wZG93bl9fYnV0dG9uJykpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bl9fY29udGVudCcpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZHJvcGRvd25JdGVtcyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpdGVtIG9mIGRyb3Bkb3duSXRlbXMpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duX19jb250ZW50X19zaG93JykpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9fY29udGVudF9fc2hvdycpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkJ1dHRvbkNvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vRm9ybUNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0Zvcm1Db21wb25lbnQuY3NzJztcbmltcG9ydCBJbnB1dENvbXBvbmVudCBmcm9tICcuLi9JbnB1dENvbXBvbmVudC9JbnB1dENvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4uL0J1dHRvbkNvbXBvbmVudC9CdXR0b25Db21wb25lbnQnO1xuaW1wb3J0IExpbmtDb21wb25lbnQgZnJvbSBcIi4uL0xpbmtDb21wb25lbnQvTGlua0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dCwgdmFsaWRhdGVQYXNzd29yZHMgfSBmcm9tICcuLi8uLi9VdGlscy9WYWxpZGF0b3JzL1ZhbGlkYXRvcic7XG5jbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgaW5wdXRzO1xuICAgIHN1Ym1pdEJ1dHRvbjtcbiAgICBsaW5rcztcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW0gPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEZvcm1Db21wb25lbnRUZW1wbGF0ZSh7IGZvcm1JZDogZGF0YT8uZm9ybUlkLCBlbmN0eXBlOiBkYXRhPy5lbmN0eXBlIH0pLCAnLmpzLWZvcm0nKTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRlbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgZm9ybUZvb3RlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZm9vdGVyJyk7XG4gICAgICAgIHRoaXMuaW5wdXRzID0gW107XG4gICAgICAgIHRoaXMubGlua3MgPSBbXTtcbiAgICAgICAgZGF0YT8uaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRDb21wb25lbnQgPSBuZXcgSW5wdXRDb21wb25lbnQoZm9ybUNvbnRlbnQsICcnLCAnJywgaW5wdXQpO1xuICAgICAgICAgICAgaW5wdXRDb21wb25lbnQuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dHMucHVzaChpbnB1dENvbXBvbmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IG5ldyBCdXR0b25Db21wb25lbnQoZm9ybUNvbnRlbnQsICcnLCAnJywgZGF0YT8uYnV0dG9uKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uc2hvdygpO1xuICAgICAgICBkYXRhPy5saW5rcz8uZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gbmV3IExpbmtDb21wb25lbnQoZm9ybUZvb3RlciwgJycsICcnLCBsaW5rKTtcbiAgICAgICAgICAgIGxpbmtFbGVtZW50LnNob3coKTtcbiAgICAgICAgICAgIHRoaXMubGlua3MucHVzaChsaW5rRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgLy8gcHVibGljIGdldERhdGEoKTogeyBpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmlucHV0cy5tYXAoKGlucHV0Q29tcG9uZW50KSA9PiB7XG4gICAgLy8gICAgICAgICByZXR1cm4gaW5wdXRDb21wb25lbnQuZ2V0RGF0YSgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9O1xuICAgIHZhbGlkYXRlRW1wdHlGaWVsZHMoZmllbGRzKSB7XG4gICAgICAgIHJldHVybiBmaWVsZHMubWFwKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5pc0VtcHR5RGF0YSgpKSB7XG4gICAgICAgICAgICAgICAgZmllbGQuc2hvd0Vycm9yTXNnKCfQn9GD0YHRgtC+0LUg0L/QvtC70LUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KS5ldmVyeShpc1ZhbGlkID0+IGlzVmFsaWQpO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVQYXNzd29yZEZpZWxkcygpIHtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gdGhpcy5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJyk7XG4gICAgICAgIGNvbnN0IHJlcGVhdFBhc3N3b3JkRmllbGQgPSB0aGlzLmZpbmRJbnB1dENvbXBvbmVudCgncmVwZWF0LXBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChwYXNzd29yZEZpZWxkKSB7IC8vIElmIGV4aXN0cyBwYXNzd29yZCBmaWVsZFxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkUGFzc3dvcmQgPSB2YWxpZGF0ZUlucHV0KHBhc3N3b3JkRmllbGQuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkUGFzc3dvcmQuaXNWYWxpZCkgeyAvLyBJZiBkYXRhIGluIHBhc3N3b3JkIGZpZWxkIGlzIGluY29ycmVjdFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQuc2hvd0Vycm9yTXNnKHZhbGlkYXRlZFBhc3N3b3JkLmVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZEZpZWxkLmhpZGVFcnJvck1zZygpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcGVhdFBhc3N3b3JkRmllbGQpIHsgLy8gSWYgZXhpc3RzIHJlcGVhdCBwYXNzd29yZCBmaWVsZFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZFBhc3N3b3JkcyA9IHZhbGlkYXRlUGFzc3dvcmRzKHBhc3N3b3JkRmllbGQuaW5wdXQudmFsdWUsIHJlcGVhdFBhc3N3b3JkRmllbGQuaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVkUGFzc3dvcmRzLmlzVmFsaWQpIHsgLy8gSWYgcGFzc3dvcmRzIG5vdCBtYXRjaFxuICAgICAgICAgICAgICAgICAgICByZXBlYXRQYXNzd29yZEZpZWxkLnNob3dFcnJvck1zZyh2YWxpZGF0ZWRQYXNzd29yZHMucGFzc3dvcmRFcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdFBhc3N3b3JkRmllbGQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG4gICAgO1xuICAgIHZhbGlkYXRlSW5wdXRGaWVsZHMoKSB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZHMgPSB0aGlzLmlucHV0cy5maWx0ZXIoaW5wdXRDb21wb25lbnQgPT4gaW5wdXRDb21wb25lbnQuaW5wdXQuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdwYXNzd29yZCcpID09PSAtMSk7XG4gICAgICAgIGlmIChpbnB1dEZpZWxkcykge1xuICAgICAgICAgICAgaW5wdXRGaWVsZHMuZm9yRWFjaChpbnB1dEZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRJbnB1dCA9IHZhbGlkYXRlSW5wdXQoaW5wdXRGaWVsZC5nZXREYXRhKCkpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVkSW5wdXQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnNob3dFcnJvck1zZyh2YWxpZGF0ZWRJbnB1dC5lcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3VibWl0QnV0dG9uLmJsb2NrKCk7IC8vIFRPRE86IGJsb2NrIGhlcmUgb3IgaW4gY29udHJvbGxlcj9cbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0RmllbGQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdWJtaXRCdXR0b24udW5ibG9jaygpOyAvLyBUT0RPOiB1bmJsb2NrIGhlcmUgb3IgaW4gY29udHJvbGxlcj8gQWxzbyB0aGlzIGJsb2NrIG5lZWRzIGluIHZhbGlkYXRlUGFzc3dvcmRGaWVsZHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVXaXRoRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlSW5wdXRGaWVsZHMoKSAmJiB0aGlzLnZhbGlkYXRlUGFzc3dvcmRGaWVsZHMoKTtcbiAgICB9XG4gICAgO1xuICAgIHZhbGlkYXRlV2l0aG91dEVtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBhc3N3b3JkRmllbGRzKCk7XG4gICAgfVxuICAgIDtcbiAgICBzZXREYXRhVG9GaWVsZHMoZmllbGRzV2l0aFZhbHVlKSB7XG4gICAgICAgIGZpZWxkc1dpdGhWYWx1ZS5mb3JFYWNoKCh7IGlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbmRJbnB1dENvbXBvbmVudChpZCkuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbmRJbnB1dENvbXBvbmVudChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dHMuZmluZChpbnB1dENvbXBvbmVudCA9PiBpbnB1dENvbXBvbmVudC5pbnB1dC5pZCA9PT0gaWQpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZElucHV0c0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0Q29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBpbnB1dENvbXBvbmVudC5iaW5kSW5wdXRFdmVudChsaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgYmluZFN1Ym1pdEV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uLmJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRMaW5rc0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMubGlua3MuZm9yRWFjaCgobGlua0NvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgbGlua0NvbXBvbmVudC5iaW5kQ2xpY2tFdmVudChsaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgYmluZEZpbGVDbGlja0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXInKS5iaW5kQ2xpY2tFdmVudChsaXN0ZW5lcik7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2hlY2tib3hDbGlja0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXItY2hlY2tib3gnKS5iaW5kQ2xpY2tFdmVudChsaXN0ZW5lcik7XG4gICAgfVxuICAgIDtcbiAgICBzYXZlRGF0YVRvU3RvcmFnZShrZXkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgZGF0YVtpbnB1dENvbXBvbmVudC5pbnB1dC5pZF0gPSBpbnB1dENvbXBvbmVudC5pbnB1dC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0RGF0YUZyb21TdG9yYWdlKGtleSkge1xuICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzYXZlZERhdGEpO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmRJbnB1dENvbXBvbmVudChpZCkuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db21wb25lbnQ7XG4iLCJjbGFzcyBJQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiDQoNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC00LDQvdC90L7Qs9C+INCy0LjQtNCwXG4gICAgICogQG1lbWJlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcGFyZW50O1xuICAgIC8qKlxuICAgICAqINCa0L7RgNC90LXQstC+0Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC00LDQvdC90L7Qs9C+INCy0LjQtNCwXG4gICAgICogQG1lbWJlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlLCB0b3BFbGVtZW50LCBkYXRhKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHRlbXBsYXRlLCAndGV4dC9odG1sJykucXVlcnlTZWxlY3Rvcih0b3BFbGVtZW50KTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcign0J3QtdCy0L7Qt9C80L7QttC90L4g0L3QsNC50YLQuCDRjdC70LXQvNC10L3RgiDQsiDRiNCw0LHQu9C+0L3QtSEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICA7XG4gICAgdG9IVE1MRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgO1xuICAgIHF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICB9XG4gICAgO1xuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIDtcbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBJQ29tcG9uZW50O1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBJbnB1dENvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vSW5wdXRDb21wb25lbnQuaGJzJztcbmltcG9ydCAnLi9JbnB1dENvbXBvbmVudC5jc3MnO1xuY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBpbnB1dDtcbiAgICBpbnB1dEVycm9yO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgSW5wdXRDb21wb25lbnRUZW1wbGF0ZShkYXRhKSwgJy5qcy1pbnB1dC1maWVsZCcpO1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgfHwgdGhpcy5lbGVtZW50O1xuICAgICAgICB0aGlzLmlucHV0RXJyb3IgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzKj1lcnJvci1tc2ddJyk7XG4gICAgfVxuICAgIDtcbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4geyBpZDogdGhpcy5pbnB1dC5pZCwgdmFsdWU6IHRoaXMuaW5wdXQudmFsdWUgfTtcbiAgICB9XG4gICAgO1xuICAgIGlzRW1wdHlEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZSA9PT0gJyc7XG4gICAgfVxuICAgIDtcbiAgICBzaG93RXJyb3JNc2coZXJyb3JNc2cpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1maWVsZF9faW5wdXQtLWVycm9yJyk7XG4gICAgICAgIHRoaXMuaW5wdXRFcnJvci5pbm5lckhUTUwgPSBlcnJvck1zZztcbiAgICAgICAgdGhpcy5pbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkX19lcnJvci1tc2ctLWVycm9yJyk7XG4gICAgfVxuICAgIDtcbiAgICBoaWRlRXJyb3JNc2coKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZmllbGRfX2lucHV0LS1lcnJvcicpO1xuICAgICAgICB0aGlzLmlucHV0RXJyb3IuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuaW5wdXRFcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1maWVsZF9fZXJyb3ItbXNnLS1lcnJvcicpO1xuICAgIH1cbiAgICBiaW5kSW5wdXRFdmVudChsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMudG9IVE1MRWxlbWVudCgpO1xuICAgICAgICBpZiAoaW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgSW5wdXRDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IExpbmtDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0xpbmtDb21wb25lbnQuaGJzJztcbmltcG9ydCAnLi9MaW5rQ29tcG9uZW50LmNzcyc7XG5jbGFzcyBMaW5rQ29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgbGluaztcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIExpbmtDb21wb25lbnRUZW1wbGF0ZShkYXRhKSwgJy5qcy1saW5rJyk7XG4gICAgICAgIHRoaXMubGluayA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhJykgfHwgdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5saW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IExpbmtDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IExpc3RDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0xpc3RDb21wb25lbnQuaGJzJztcbmltcG9ydCAnLi9MaXN0Q29tcG9uZW50LmNzcyc7XG5jbGFzcyBMaXN0Q29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgaXRlbXM7XG4gICAgZ2V0IGdldEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIDtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIExpc3RDb21wb25lbnRUZW1wbGF0ZSh7IGxpc3RDbGFzczogZGF0YS5saXN0Q2xhc3MgfSksICcuanMtbGlzdCcpO1xuICAgICAgICB0aGlzLml0ZW1zID0gT2JqZWN0LmFzc2lnbihbXSwgZGF0YS5pdGVtcyk7XG4gICAgICAgIHRoaXMucmVuZGVySXRlbXMoZGF0YS5pdGVtQ2xhc3MpO1xuICAgIH1cbiAgICA7XG4gICAgcmVuZGVySXRlbXMoaXRlbUNsYXNzKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoeyBjb21wb25lbnRUeXBlLCBjb21wb25lbnREYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoaXRlbUNsYXNzIHx8ICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGwgPSBuZXcgY29tcG9uZW50VHlwZShsaSwgJycsICcnLCBjb21wb25lbnREYXRhKTtcbiAgICAgICAgICAgIGwuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IExpc3RDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IFZlcnRpY2FsQ29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50LmNzcyc7XG5jbGFzcyBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudCBleHRlbmRzIElDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgVmVydGljYWxDb21wb25lbnRUZW1wbGF0ZShkYXRhKSwgJy5qcy12ZXJ0aWNhbC1zcGFjZXInKTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgVmVydGljYWxTcGFjZXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IFZpZGVvQ29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9WaWRlb0NvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL1ZpZGVvQ29tcG9uZW50LmNzcyc7XG5jbGFzcyBWaWRlb0NvbXBvbmVudCBleHRlbmRzIElDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgVmlkZW9Db21wb25lbnRUZW1wbGF0ZShkYXRhKSwgJ2EnKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgVmlkZW9Db21wb25lbnQ7XG4iLCJjb25zdCBSRVFVRVNUX01FVEhPRFMgPSB7XG4gICAgR0VUOiAnR0VUJyxcbiAgICBQT1NUOiAnUE9TVCcsXG4gICAgUFVUOiAnUFVUJyxcbiAgICBERUxFVEU6ICdERUxFVEUnLFxufTtcbmNvbnN0IENzcmZUb2tlbk5hbWUgPSAnY3NyZl90b2tlbic7XG5jb25zdCBoZWFkZXJzV2l0aFVuaWNvZGUgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxufTtcbmNvbnN0IGhlYWRlcnNXaXRoRW1wdHkgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICcnLFxufTtcbmNvbnN0IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMgPSB7XG4gICAgJzQwMCc6ICfQndC10LLQtdGA0L3Ri9C5INC30LDQv9GA0L7RgScsXG4gICAgLy8gJzQwMSc6ICdObyBDb29raWUnLFxuICAgIC8vICc0MDUnOiAn0J3QtdCy0LXRgNC90YvQuSBIVFRQINC80LXRgtC+0LQnLFxuICAgICc1MDAnOiAn0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwJyxcbn07XG5jb25zdCBjdXN0b21GYWlsdXJlcyA9IHtcbiAgICAnMSc6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCJyxcbiAgICAnMic6ICfQndC10LLQtdGA0L3Ri9C5INGE0L7RgNC80LDRgiDQv9C+0YfRgtGLJyxcbiAgICAnMyc6ICfQn9Cw0YDQvtC70Ywg0LTQvtC70LbQtdC9INCx0YvRgtGMLi4uJyxcbiAgICAnNCc6ICfQndC10LLQtdGA0L3QsNGPINC/0L7Rh9GC0LAg0LjQu9C4INC/0LDRgNC+0LvRjCcsXG4gICAgJzUnOiAn0KDQsNC30LzQtdGAINGE0LDQudC70LAg0LLRi9GI0LUg0LzQsNC60YHQuNC80LDQu9GM0L3QviDQtNC+0L/Rg9GB0YLQuNC80L7Qs9C+JyxcbiAgICAnNic6ICfQpNCw0LnQuyDQvdC1INGP0LLQu9GP0LXRgtGB0Y8g0LrQsNGA0YLQuNC90LrQvtC5INGE0L7RgNC80LDRgtCwIGpwZycsXG4gICAgJzcnOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGN0YLQvtC5INC/0L7Rh9GC0L7QuSDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YInLFxufTtcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICAvLyBob3N0OiAnaHR0cDovLzg5LjIwOC4xOTkuMTcwLycsXG4gICAgaG9zdDogJ2h0dHA6Ly9maWxtaXVtLnJ1L2FwaScsXG4gICAgLy8gaG9zdDogJ2h0dHA6Ly84OS4yMDguMTk5LjE3MDo4MTAwL2FwaScsXG4gICAgYXBpOiB7XG4gICAgICAgIGNzcmY6IHtcbiAgICAgICAgICAgIHVybDogJy91c2VyL2NzcmYnLFxuICAgICAgICAgICAgbWV0aG9kOiBSRVFVRVNUX01FVEhPRFMuR0VULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzaWduSW46IHtcbiAgICAgICAgICAgIHVybDogJy91c2VyL3NpZ25pbicsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5QT1NULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0JDQstGC0L7RgNC40LfQsNGG0LjRjyDRg9GB0L/QtdGI0L3QsCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2lnblVwOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9zaWdudXAnLFxuICAgICAgICAgICAgbWV0aG9kOiBSRVFVRVNUX01FVEhPRFMuUE9TVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9Cg0LXQs9C40YHRgtGA0LDRhtC40Y8g0YPRgdC/0LXRiNC90LAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogZmFpbHVyZURlZmF1bHRTdGF0dXNlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ291dDoge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvbG9nb3V0JyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLlBPU1QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LLRi9GI0LXQuycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvcHJvZmlsZScsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5HRVQsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQlNCw0L3QvdGL0LUg0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1INGD0YHQv9C10YjQvdC+INC/0L7Qu9GD0YfQtdC90YsnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogZmFpbHVyZURlZmF1bHRTdGF0dXNlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpbG06IHtcbiAgICAgICAgICAgIHVybDogJy9maWxtcy97OmlkfScsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5HRVQsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQlNCw0L3QvdGL0LUg0L4g0YTQuNC70YzQvNC1INGD0YHQv9C10YjQvdC+INC/0L7Qu9GD0YfQtdC90YsnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogZmFpbHVyZURlZmF1bHRTdGF0dXNlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGlvbnM6IHtcbiAgICAgICAgICAgIHVybDogJy9zZWxlY3Rpb25zJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLkdFVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9Cf0L7QtNCx0L7RgNC60Lgg0YPRgdC/0LXRiNC90L4g0L/QvtC70YPRh9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGVyc29uOiB7XG4gICAgICAgICAgICB1cmw6ICcvcGVyc29ucy97OmlkfScsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5HRVQsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQlNCw0L3QvdGL0LUg0L4g0L/QtdGA0YHQvtC90LUg0YPRgdC/0LXRiNC90L4g0L/QvtC70YPRh9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci91cGRhdGUnLFxuICAgICAgICAgICAgbWV0aG9kOiBSRVFVRVNUX01FVEhPRFMuUE9TVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CU0LDQvdC90YvQtSDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC90YsnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogZmFpbHVyZURlZmF1bHRTdGF0dXNlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGF2YXRhclVwZGF0ZToge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvYXZhdGFyL3VwZGF0ZScsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5QT1NULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhFbXB0eSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CQ0LLQsNGC0LDRgNC60LAg0YPRgdC/0LXRiNC90L4g0L7QsdC90L7QstC70LXQvdCwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZmFpbHVyZURlZmF1bHRTdGF0dXNlcyxcbiAgICAgICAgICAgICAgICAgICAgJzQxMyc6ICfQodC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QuSDRgNCw0LfQvNC10YAg0YTQsNC50LvQsCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGF2YXRhckRlbGV0ZToge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvYXZhdGFyL2RlbGV0ZScsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5QT1NULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0JDQstCw0YLQsNGA0LrQsCDRg9GB0L/QtdGI0L3QviDRg9C00LDQu9C10L3QsCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgeyBSRVFVRVNUX01FVEhPRFMsIENzcmZUb2tlbk5hbWUsIGNvbmZpZywgY3VzdG9tRmFpbHVyZXMgfTtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgSU1vZGVsIGZyb20gJy4uLy4uL01vZGVscy9JTW9kZWwvSU1vZGVsJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuY2xhc3MgQ2Fyb3VzZWxDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcbiAgICAgICAgc3VwZXIodmlldywgSU1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vQ29udHJvbGxlcnMvUGxheWVyQ29udHJvbGxlci9QbGF5ZXJDb250cm9sbGVyJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuY2xhc3MgRmlsbUNvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgZmlsbUlkO1xuICAgIHRyYWlsZXJTcmM7XG4gICAgcGxheWVyQ29udHJvbGxlcjtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMuZmlsbUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy50cmFpbGVyU3JjID0gbnVsbDtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgnbmV3LXBsYXllcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5wbGF5ZXJWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcubmV3UGxheWVyVmlldygpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIodGhpcy52aWV3LnBsYXllclZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgbW91bnRDb21wb25lbnQob3B0cykge1xuICAgICAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgICAgIHJvdXRlci5zaG93VW5rbm93blBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAob3B0cz8uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbG1JZCA9IG9wdHMuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5nZXRGaWxtKHRoaXMuZmlsbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWlsZXJTcmMgPSBkYXRhLmNvbnRlbnQ/LnRyYWlsZXJVUkwgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZpbGxGaWxtKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHVubW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sbGVyLnVubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIHN1cGVyLnVubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbUlkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudHJhaWxlclNyYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBlLnRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY3Rpb25dJyk/LmRhdGFzZXRbJ2FjdGlvbiddO1xuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdWJzY3JpYmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICd0cmFpbGVyJzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFpbGVyU3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ29udHJvbGxlci5zZXRTcmModGhpcy50cmFpbGVyU3JjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgRmlsbUNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IElNb2RlbCBmcm9tICcuLi8uLi9Nb2RlbHMvSU1vZGVsL0lNb2RlbCc7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi8uLi9Sb3V0ZXIvUm91dGVyJztcbi8qKlxuICog0JrQvtGC0YDQvtC70LvQtdGAINC00LvRjyDRhdGN0LTQtdGA0LBcbiAqIEBjYXRlZ29yeSBIZWFkZXJcbiAqIEBleHRlbmRzIHtJQ29udHJvbGxlcn1cbiAqIEBwYXJhbSAge0hlYWRlclZpZXd9IHZpZXcg0J7QsdGK0LXQutGCINCy0LjQtNCwINC60L7QvNC/0L7QvdC10L3RgtCwINGF0Y3QtNC10YBcbiAqL1xuY2xhc3MgSGVhZGVyQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIElNb2RlbCk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VubW91bnQtYWxsJywgdGhpcy51bm1vdW50Q29tcG9uZW50LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcuYmluZENsaWNrRXZlbnQodGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuc3Vic2NyaWJlKCd1c2VyLWNoYW5nZWQnLCAodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlSGVhZGVyUHJvZmlsZSgncHJvZmlsZScsIHVzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmNoYW5nZUhlYWRlclByb2ZpbGUoJ3NpZ25JbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgncmVuZGVyLXNpZ25JbkJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5jaGFuZ2VIZWFkZXJQcm9maWxlKCdzaWduSW4nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3JlbmRlci1wcm9maWxlQnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmNoYW5nZUhlYWRlclByb2ZpbGUoJ3Byb2ZpbGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQvtCx0YDQsNCx0L7RgtC60Lgg0L3QsNC20LDRgtC40Y8g0L3QsCDRhdC10LTQtdGAXG4gICAgICogKNC/0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHBhcmFtICB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuaGlkZVByb2ZpbGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBlLnRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY3Rpb25dJyk/LmRhdGFzZXRbJ2FjdGlvbiddO1xuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwcm9maWxlJzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudG9nZ2xlUHJvZmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbkluJzoge1xuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudERpc3BhdGNoZXIuZW1pdCgnc2lnbkluJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb250cm9sbGVyO1xuIiwiLyoqXG4gKiDQkdCw0LfQvtCy0YvQuSDQutC70LDRgdGBINC00LvRjyDQutC+0L3RgtGA0L7Qu9C70LXRgNCwINC60L7QvNC/0L7QvdC10L3RgtCwINC/0YDQuNC70L7QttC10L3QuNGPLlxuICog0KHQstGP0LfRi9Cy0LDQtdGCINCy0LjQtCDRgSDQvNC+0LTQtdC70YzRjlxuICogQGNsYXNzXG4gKiBAdmlydHVhbFxuICogQHBhcmFtICB7dFZpZXc8SVZpZXc+fSB2aWV3INCS0LjQtCwg0LrQvtGC0L7RgNGL0Lwg0YPQv9GA0LDQstC70Y/QtdGCINC60L7QvdGC0YDQvtC70LvQtdGAXG4gKiBAcGFyYW0gIHt0TW9kZWw8SU1vZGVsPn0gbW9kZWwg0JzQvtC00LXQu9GMLCDQutC+0YLQvtGA0L7QuSDQv9C+0LvRjNC30YPQtdGC0YHRjyDQutC+0L3RgtGA0L7Qu9C70LXRgFxuICovXG5jbGFzcyBJQ29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICog0JLQuNC0LCDQutC+0YLQvtGA0YvQvCDRg9C/0YDQsNCy0LvRj9C10YIg0LrQvtC90YLRgNC+0LvQu9C10YBcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdmlldztcbiAgICAvKipcbiAgICAgKiDQnNC+0LTQtdC70YwsINC60L7RgtC+0YDQvtC5INC/0L7Qu9GM0LfRg9C10YLRgdGPINC60L7QvdGC0YDQvtC70LvQtdGAXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG1vZGVsO1xuICAgIC8qKlxuICAgICAqINCk0LvQsNCzLiDQntGC0L7QsdGA0LDQttCw0LXRgtGB0Y8g0LvQuCDQtNCw0L3QvdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc01vdW50ZWQ7XG4gICAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLmlzTW91bnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDRg9GB0YLRgNCw0L3QvtCy0LrQuCDQutC+0LzQv9C+0L3QtdC90YLQsC5cbiAgICAgKiDQntGC0YDQuNGB0L7QstGL0LLQsNC10YIg0Y3Qu9C10LzQtdC90YIg0Lgg0YPQv9GA0LDQstC70Y/QtdGCINC40LwuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBtb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDRg9Cx0LjRgNCw0L3QuNGPINC60L7QvNC/0L7QvdC10L3RgtCwLlxuICAgICAqINCe0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRjdC70LXQvNC10L3RgiDQuCDRg9C/0YDQsNCy0LvRj9C10YIg0LjQvC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHVubW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBJQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi8uLi9FdmVudERpc3BhdGNoZXIvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuLi8uLi9Sb3V0ZXIvUm91dGVyXCI7XG5pbXBvcnQgQ2Fyb3VzZWxDb250cm9sbGVyIGZyb20gXCIuLi9DYXJvdXNlbENvbnRyb2xsZXIvQ2Fyb3VzZWxDb250cm9sbGVyXCI7XG5jbGFzcyBNYWluQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBjYXJvdXNlbENvbnRyb2xsZXI7XG4gICAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICAgICAgc3VwZXIodmlldywgbW9kZWwpO1xuICAgICAgICB0aGlzLmNhcm91c2VsQ29udHJvbGxlciA9IG5ldyBDYXJvdXNlbENvbnRyb2xsZXIodGhpcy52aWV3LmNhcm91c2VsVmlldyk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VubW91bnQtYWxsJywgdGhpcy51bm1vdW50Q29tcG9uZW50LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcuYmluZENsaWNrRXZlbnQodGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIG1vdW50Q29tcG9uZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgc3VwZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VsZWN0aW9ucy5nZXRTZWxlY3Rpb25zKClcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5maWxsU2VsZWN0aW9ucyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuYmluZENsaWNrRXZlbnQodGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlci5zaG93VW5rbm93blBhZ2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbENvbnRyb2xsZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBzdXBlci51bm1vdW50Q29tcG9uZW50KCk7XG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBlLnRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IFNpZ25JbkNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vQ29udHJvbGxlcnMvU2lnbkluQ29udHJvbGxlci9TaWduSW5Db250cm9sbGVyJztcbmltcG9ydCBTaWduVXBDb250cm9sbGVyIGZyb20gJy4uLy4uL0NvbnRyb2xsZXJzL1NpZ25VcENvbnRyb2xsZXIvU2lnblVwQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi8uLi9Sb3V0ZXIvUm91dGVyJztcbi8qKlxuICog0JrQvtGC0YDQvtC70LvQtdGAINC00LvRjyDQv9GA0LDQstC+0LPQviDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxuICogQGNhdGVnb3J5IE1vZGFsUmlnaHRcbiAqIEBleHRlbmRzIHtJQ29udHJvbGxlcn1cbiAqIEBwYXJhbSAge0hlYWRlclZpZXd9IHZpZXcg0J7QsdGK0LXQutGCINCy0LjQtNCwINC60L7QvNC/0L7QvdC10L3RgtCwINC/0YDQsNCy0L7Qs9C+INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXG4gKiBAcGFyYW0gIHtVc2VyTW9kZWx9IG1vZGVsINCe0LHRitC10LrRgiDQvNC+0LTQtdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gKi9cbmNsYXNzIE1vZGFsUmlnaHRDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGN1cnJlbnRDb250cm9sbGVyO1xuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIG1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ21vZGFsUmlnaHQtc2V0U2lnbkluJywgKHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmN1cnJlbnRWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0U2lnbkluVmlldygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IG5ldyBTaWduSW5Db250cm9sbGVyKHRoaXMudmlldy5jdXJyZW50VmlldywgdXNlck1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ21vZGFsUmlnaHQtc2V0U2lnblVwJywgKHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmN1cnJlbnRWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0U2lnblVwVmlldygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IG5ldyBTaWduVXBDb250cm9sbGVyKHRoaXMudmlldy5jdXJyZW50VmlldywgdXNlck1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuZ2V0Rm9ybURhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250cm9sbGVyPy5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBzdXBlci5tb3VudENvbXBvbmVudCgpO1xuICAgIH1cbiAgICA7XG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlcj8udW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBzdXBlci51bm1vdW50Q29tcG9uZW50KCk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBjaGVjayBvbmx5IGlmIGNsaWNrIG5vdCBvbiBtb2RhbCByaWdodCwgaXQgYWxzbyBjbGljayBvbiBjbG9zZSBidG4gKG5vdCBuZWNlc3NhcnkgY2hlY2sgaXQ/KVxuICAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoIW1vZGFsQ29udGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKHJvdXRlci5nZXROZWFyZXN0Tm90QXV0aFVybCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBNb2RhbFJpZ2h0Q29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgSU1vZGVsIGZyb20gJy4uLy4uL01vZGVscy9JTW9kZWwvSU1vZGVsJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuY2xhc3MgTm90Rm91bmRDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcbiAgICAgICAgc3VwZXIodmlldywgSU1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kSG9tZUJ1dHRvbkNsaWNrKHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gZS50YXJnZXQuY2xvc2VzdCgnW2hyZWZdJyk/LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgaWYgKGhyZWYgIT09IHVuZGVmaW5lZCAmJiBocmVmICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKGhyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuY2xhc3MgUGVyc29uQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBwZXJzb25JZDtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMucGVyc29uSWQgPSBudWxsO1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuc3Vic2NyaWJlKCd1bm1vdW50LWFsbCcsIHRoaXMudW5tb3VudENvbXBvbmVudC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmJpbmRDbGlja0V2ZW50KHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBtb3VudENvbXBvbmVudChvcHRzKSB7XG4gICAgICAgIGlmICghb3B0cykge1xuICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRzPy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uSWQgPSBvcHRzLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0UGVyc29uKHRoaXMucGVyc29uSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5maWxsUGVyc29uKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHVubW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgc3VwZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25JZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBlLnRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQZXJzb25Db250cm9sbGVyO1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCBJTW9kZWwgZnJvbSBcIi4uLy4uL01vZGVscy9JTW9kZWwvSU1vZGVsXCI7XG5jbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGlzRHJhZ2dpbmc7XG4gICAgaXNWb2x1bWVEcmFnZ2luZztcbiAgICB2aWRlb1RpbWU7XG4gICAgdmlkZW9UaW1lTWludXRlcztcbiAgICB2aWRlb1RpbWVTZWNvbmRzO1xuICAgIGN1cnJlbnRWb2x1bWU7XG4gICAgcHJldmlvdXNWb2x1bWU7XG4gICAgY29uc3RydWN0b3Iodmlldykge1xuICAgICAgICBzdXBlcih2aWV3LCBJTW9kZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZpZGVvVGltZSA9IDA7XG4gICAgICAgIHRoaXMudmlkZW9UaW1lTWludXRlcyA9IDA7XG4gICAgICAgIHRoaXMudmlkZW9UaW1lU2Vjb25kcyA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFZvbHVtZSA9IDAuNTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZvbHVtZSA9IDA7XG4gICAgfVxuICAgIDtcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy52aWV3LnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLmluaXRWaWRlby5iaW5kKHRoaXMpKTsgLy8gP1xuICAgICAgICB0aGlzLnZpZXcucGxheVN0b3BDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUGxheUJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcubXV0ZVVubXV0ZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Wb2x1bWVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVRpbWUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy52aWRlb0Jhci5iaW5kTW91c2VEb3duRXZlbnQodGhpcy5vbkJhck1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LnZpZGVvQmFyLmJpbmRNb3VzZVVwRXZlbnQodGhpcy5vbkJhck1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy52aWRlb0Jhci5iaW5kTW91c2VNb3ZlRXZlbnQodGhpcy5vbkJhck1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LnZpZGVvQmFyLmJpbmRNb3VzZU91dEV2ZW50KHRoaXMub25CYXJNb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LnZvbHVtZUJhci5iaW5kTW91c2VEb3duRXZlbnQodGhpcy5vblZvbHVtZU1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LnZvbHVtZUJhci5iaW5kTW91c2VVcEV2ZW50KHRoaXMub25Wb2x1bWVNb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcudm9sdW1lQmFyLmJpbmRNb3VzZU1vdmVFdmVudCh0aGlzLm9uVm9sdW1lTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcudm9sdW1lQmFyLmJpbmRNb3VzZU91dEV2ZW50KHRoaXMub25Wb2x1bWVNb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIH1cbiAgICA7XG4gICAgc2V0U3JjKHNyYykge1xuICAgICAgICB0aGlzLnZpZXcudmlkZW8uc3JjID0gc3JjO1xuICAgIH1cbiAgICA7XG4gICAgcGVyY2VudGFnZVRvVGltZShwZXJjZW50YWdlKSB7XG4gICAgICAgIHJldHVybiAocGVyY2VudGFnZSAvIDEwMCkgKiB0aGlzLnZpZXcudmlkZW8uZHVyYXRpb247XG4gICAgfVxuICAgIDtcbiAgICB0aW1lVG9QZXJjZW50YWdlKHRpbWUpIHtcbiAgICAgICAgcmV0dXJuICh0aW1lIC8gdGhpcy52aWV3LnZpZGVvLmR1cmF0aW9uKSAqIDEwMDtcbiAgICB9XG4gICAgO1xuICAgIHBlcmNlbnRhZ2VUb1ZvbHVtZShwZXJjZW50YWdlKSB7XG4gICAgICAgIHJldHVybiBwZXJjZW50YWdlIC8gMTAwO1xuICAgIH1cbiAgICB2b2x1bWVUb1BlcmNlbnRhZ2Uodm9sdW1lKSB7XG4gICAgICAgIHJldHVybiB2b2x1bWUgKiAxMDA7XG4gICAgfVxuICAgIDtcbiAgICB0aW1lVG9UaW1lKHRpbWUpIHtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcbiAgICAgICAgcmV0dXJuIGAke21pbnV0ZXMgPiA5ID8gbWludXRlcyA6ICcwJyArIG1pbnV0ZXN9OiR7c2Vjb25kcyA+IDkgPyBzZWNvbmRzIDogJzAnICsgc2Vjb25kc31gO1xuICAgIH1cbiAgICA7XG4gICAgb25QbGF5QnV0dG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlldy52aWRlby5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wVmlkZW8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgaW5pdFZpZGVvKCkge1xuICAgICAgICB0aGlzLnZpZXcudmlkZW9CYXIudXBkYXRlQ3VycmVudEJhcih0aGlzLnRpbWVUb1BlcmNlbnRhZ2UodGhpcy52aWV3LnZpZGVvLmN1cnJlbnRUaW1lKSk7XG4gICAgICAgIHRoaXMudmlldy52aWRlby52b2x1bWUgPSAwLjU7XG4gICAgICAgIHRoaXMudmlkZW9UaW1lID0gdGhpcy52aWV3LnZpZGVvLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnZpZGVvVGltZU1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMudmlkZW9UaW1lIC8gNjApO1xuICAgICAgICB0aGlzLnZpZGVvVGltZVNlY29uZHMgPSBNYXRoLmZsb29yKHRoaXMudmlkZW9UaW1lICUgNjApO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVWb2x1bWUoKTtcbiAgICB9XG4gICAgO1xuICAgIHBsYXlWaWRlbygpIHtcbiAgICAgICAgdGhpcy52aWV3LnZpZGVvLnBsYXkoKTtcbiAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVZpZGVvU3RhdHVzKHRydWUpO1xuICAgIH1cbiAgICA7XG4gICAgc3RvcFZpZGVvKCkge1xuICAgICAgICB0aGlzLnZpZXcudmlkZW8ucGF1c2UoKTtcbiAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVZpZGVvU3RhdHVzKGZhbHNlKTtcbiAgICB9XG4gICAgO1xuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgIHRoaXMudmlldy52aWRlb0Jhci51cGRhdGVDdXJyZW50QmFyKHRoaXMudGltZVRvUGVyY2VudGFnZSh0aGlzLnZpZXcudmlkZW8uY3VycmVudFRpbWUpKTtcbiAgICAgICAgdGhpcy52aWV3LnRpbWUuaW5uZXJIVE1MID0gYCR7dGhpcy50aW1lVG9UaW1lKHRoaXMudmlldy52aWRlby5jdXJyZW50VGltZSl9LyR7dGhpcy52aWRlb1RpbWVNaW51dGVzfToke3RoaXMudmlkZW9UaW1lU2Vjb25kc31gO1xuICAgIH1cbiAgICA7XG4gICAgdXBkYXRlVm9sdW1lKCkge1xuICAgICAgICB0aGlzLnZpZXcudm9sdW1lQmFyLnVwZGF0ZUN1cnJlbnRCYXIodGhpcy52b2x1bWVUb1BlcmNlbnRhZ2UodGhpcy52aWV3LnZpZGVvLnZvbHVtZSkpO1xuICAgICAgICBpZiAodGhpcy52aWV3LnZpZGVvLnZvbHVtZSA8IDAuMDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVWb2x1bWVTdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVZvbHVtZVN0YXR1cyh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtdXRlVm9sdW1lKCkge1xuICAgICAgICAvLyBNYXRoLmFicyhhIC0gYikgPCB0b2xlcmFuY2U7XG4gICAgICAgIGlmICh0aGlzLnZpZXcudmlkZW8udm9sdW1lIDwgMC4wMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnZpZGVvLnZvbHVtZSA9IHRoaXMucHJldmlvdXNWb2x1bWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVZvbHVtZVN0YXR1cyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNWb2x1bWUgPSB0aGlzLnZpZXcudmlkZW8udm9sdW1lO1xuICAgICAgICAgICAgdGhpcy52aWV3LnZpZGVvLnZvbHVtZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3LnRvZ2dsZVZvbHVtZVN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uVm9sdW1lQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubXV0ZVZvbHVtZSgpO1xuICAgIH1cbiAgICA7XG4gICAgb25Wb2x1bWVNb3VzZURvd24oZSkge1xuICAgICAgICB0aGlzLmlzVm9sdW1lRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBmbG9vclBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKHRoaXMudmlldy52b2x1bWVCYXIuY2FsY3VsYXRlUGVyY2VudGFnZShlLmNsaWVudFgpKTtcbiAgICAgICAgY29uc3QgYm91bmRlZFBlcmNlbnRhZ2UgPSBmbG9vclBlcmNlbnRhZ2UgPCAwID8gMCA6IE1hdGgubWluKGZsb29yUGVyY2VudGFnZSwgMTAwKTtcbiAgICAgICAgdGhpcy52aWV3LnZpZGVvLnZvbHVtZSA9IHRoaXMucGVyY2VudGFnZVRvVm9sdW1lKGJvdW5kZWRQZXJjZW50YWdlKTtcbiAgICAgICAgdGhpcy51cGRhdGVWb2x1bWUoKTtcbiAgICB9XG4gICAgO1xuICAgIG9uVm9sdW1lTW91c2VVcChlKSB7XG4gICAgICAgIHRoaXMuaXNWb2x1bWVEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgICA7XG4gICAgb25Wb2x1bWVNb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zdCBjdXJzb3JYID0gZS5jbGllbnRYO1xuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gdGhpcy52aWV3LnZvbHVtZUJhci5jYWxjdWxhdGVQZXJjZW50YWdlKGN1cnNvclgpO1xuICAgICAgICBjb25zdCBmbG9vclBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKHBlcmNlbnRhZ2UpO1xuICAgICAgICBjb25zdCBib3VuZGVkUGVyY2VudGFnZSA9IGZsb29yUGVyY2VudGFnZSA8IDAgPyAwIDogTWF0aC5taW4oZmxvb3JQZXJjZW50YWdlLCAxMDApO1xuICAgICAgICB0aGlzLnZpZXcudm9sdW1lQmFyLmJhckhlbHBlci5kaXYuc3R5bGUubGVmdCA9IGAke3BlcmNlbnRhZ2V9JWA7XG4gICAgICAgIHRoaXMudmlldy52b2x1bWVCYXIuYmFySGVscGVyLmRpdi5pbm5lclRleHQgPSBgJHtib3VuZGVkUGVyY2VudGFnZX0lYDtcbiAgICAgICAgdGhpcy52aWV3LnZvbHVtZUJhci5iYXJIZWxwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLnZpZXcudm9sdW1lQmFyLmN1cnJlbnRCYXJDaXJjbGUuc2hvdygpO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudmlkZW8udm9sdW1lID0gdGhpcy5wZXJjZW50YWdlVG9Wb2x1bWUocGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZvbHVtZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvblZvbHVtZU1vdXNlT3V0KGUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldy52b2x1bWVCYXIuY2hlY2tIZWxwZXIoKSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnZvbHVtZUJhci5iYXJIZWxwZXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZpZXcudm9sdW1lQmFyLmNoZWNrQ2lyY2xlKCkpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy52b2x1bWVCYXIuY3VycmVudEJhckNpcmNsZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uQmFyTW91c2VEb3duKGUpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWV3LnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5wZXJjZW50YWdlVG9UaW1lKHRoaXMudmlldy52aWRlb0Jhci5jYWxjdWxhdGVQZXJjZW50YWdlKGUuY2xpZW50WCkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB9XG4gICAgO1xuICAgIG9uQmFyTW91c2VVcChlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cbiAgICA7XG4gICAgb25CYXJNb3VzZU1vdmUoZSkge1xuICAgICAgICBjb25zdCBjdXJzb3JYID0gZS5jbGllbnRYO1xuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gdGhpcy52aWV3LnZpZGVvQmFyLmNhbGN1bGF0ZVBlcmNlbnRhZ2UoY3Vyc29yWCk7XG4gICAgICAgIHRoaXMudmlldy52aWRlb0Jhci5iYXJIZWxwZXIuZGl2LnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgICAgICB0aGlzLnZpZXcudmlkZW9CYXIuYmFySGVscGVyLmRpdi5pbm5lclRleHQgPSB0aGlzLnRpbWVUb1RpbWUodGhpcy5wZXJjZW50YWdlVG9UaW1lKHBlcmNlbnRhZ2UpKTsgLy8gVE9ETyBjaGFuZ2UgdHJhaWxlciB0aW1lXG4gICAgICAgIHRoaXMudmlldy52aWRlb0Jhci5iYXJIZWxwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLnZpZXcudmlkZW9CYXIuY3VycmVudEJhckNpcmNsZS5zaG93KCk7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIC8vIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdiYXJfdXBkYXRlLXByb2dyZXNzJywgcGVyY2VudGFnZSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcudmlkZW9CYXIudXBkYXRlQ3VycmVudEJhcihwZXJjZW50YWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgb25CYXJNb3VzZU91dChlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcudmlkZW9CYXIuY2hlY2tIZWxwZXIoKSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnZpZGVvQmFyLmJhckhlbHBlci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmlldy52aWRlb0Jhci5jaGVja0NpcmNsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcudmlkZW9CYXIuY3VycmVudEJhckNpcmNsZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dCB9IGZyb20gXCIuLi8uLi9VdGlscy9WYWxpZGF0b3JzL1ZhbGlkYXRvclwiO1xuLyoqXG4gKiDQmtC+0YLRgNC+0LvQu9C10YAg0LTQu9GPXG4gKiBAY2F0ZWdvcnkgSGVhZGVyXG4gKiBAZXh0ZW5kcyB7SUNvbnRyb2xsZXJ9XG4gKiBAcGFyYW0gIHtIZWFkZXJWaWV3fSB2aWV3INCe0LHRitC10LrRgiDQstC40LTQsCDQutC+0LzQv9C+0L3QtdC90YLQsFxuICovXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICAgICAgc3VwZXIodmlldywgbW9kZWwpO1xuICAgICAgICB0aGlzLnZpZXcuYmluZENsaWNrRXZlbnQodGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uYmluZEZpbGVDbGlja0V2ZW50KHRoaXMub25GaWxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRDaGVja2JveENsaWNrRXZlbnQodGhpcy5vbkNoZWNrYm94Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VubW91bnQtYWxsJywgdGhpcy51bm1vdW50Q29tcG9uZW50LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLm1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvdyh7IHVzZXI6IHVzZXIgfSk7XG4gICAgICAgICAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uRmlsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgO1xuICAgIG9uQ2hlY2tib3hDbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIDtcbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZW1haWxDb21wb25lbnQgPSB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2VtYWlsJyk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkQ29tcG9uZW50ID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpO1xuICAgICAgICBjb25zdCByZXBlYXRQYXNzd29yZENvbXBvbmVudCA9IHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgncmVwZWF0LXBhc3N3b3JkJyk7XG4gICAgICAgIC8vIGNvbnN0IGVtYWlsID0gZW1haWxDb21wb25lbnQuaW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRDb21wb25lbnQuaW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHJlcGVhdFBhc3N3b3JkID0gcmVwZWF0UGFzc3dvcmRDb21wb25lbnQuaW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlRW1haWwgPSB2YWxpZGF0ZUlucHV0KGVtYWlsQ29tcG9uZW50LmdldERhdGEoKSk7XG4gICAgICAgIGlmICghdmFsaWRhdGVFbWFpbC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBlbWFpbENvbXBvbmVudC5zaG93RXJyb3JNc2codmFsaWRhdGVFbWFpbC5lcnJvck1zZyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3N3b3JkICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkICE9PSByZXBlYXRQYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29tcG9uZW50LnNob3dFcnJvck1zZygnJyk7XG4gICAgICAgICAgICAgICAgcmVwZWF0UGFzc3dvcmRDb21wb25lbnQuc2hvd0Vycm9yTXNnKCfQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YInKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRQYXNzd29yZCA9IHZhbGlkYXRlSW5wdXQocGFzc3dvcmRDb21wb25lbnQuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVkUGFzc3dvcmQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29tcG9uZW50LnNob3dFcnJvck1zZygnJyk7XG4gICAgICAgICAgICAgICAgcmVwZWF0UGFzc3dvcmRDb21wb25lbnQuc2hvd0Vycm9yTXNnKHZhbGlkYXRlZFBhc3N3b3JkLmVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXNzd29yZENvbXBvbmVudC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgIHJlcGVhdFBhc3N3b3JkQ29tcG9uZW50LmhpZGVFcnJvck1zZygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSB0YXJnZXQuY2xvc2VzdCgnW2hyZWZdJyk/LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgaWYgKGhyZWYgIT09IHVuZGVmaW5lZCAmJiBocmVmICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKGhyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGFyZ2V0LmNsb3Nlc3QoJyNzYXZlLXN1Ym1pdC1idG4nKTtcbiAgICAgICAgICAgIGlmIChidXR0b24gIT09IHVuZGVmaW5lZCAmJiBidXR0b24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlX2JpcnRoOiAnMjAwMC1KYW4tMDEnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUlucHV0ID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXInKS5pbnB1dDtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXQuZmlsZXMgJiYgZmlsZUlucHV0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2F2YXRhci1jaGVja2JveCcpLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgncmVwZWF0LXBhc3N3b3JkJykuc2hvd0Vycm9yTXNnKCfQndC10LvRjNC30Y8g0YPQtNCw0LvQuNGC0Ywg0Lgg0L/QvtGB0YLQsNCy0LjRgtGMINCw0LLQsNGC0LDRgNC60YMhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F2YXRhcicsIGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5hdmF0YXJVcGRhdGUoZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCh7IG1zZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXInKS5zaG93RXJyb3JNc2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXItY2hlY2tib3gnKS5pbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmF2YXRhckRlbGV0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZVVzZXIodXNlckRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uaW5wdXRzLmZvckVhY2goKGlucHV0Q29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dENvbXBvbmVudC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCh7IG1zZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnZW1haWwnKS5zaG93RXJyb3JNc2cobXNnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vZGVsLmF2YXRhclVwZGF0ZShmb3JtRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NDb250cm9sbGVyO1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vLi4vUm91dGVyL1JvdXRlcic7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vLi4vUm91dGVyL1JvdXRlclBhdGhzJztcbi8qKlxuICog0JrQvtGC0YDQvtC70LvQtdGAINC00LvRj1xuICogQGNhdGVnb3J5IFNpZ25JblxuICogQGV4dGVuZHMge0lDb250cm9sbGVyfVxuICogQHBhcmFtICB7SGVhZGVyVmlld30gdmlldyDQntCx0YrQtdC60YIg0LLQuNC00LAg0LrQvtC80L/QvtC90LXQvdGC0LBcbiAqIEBwYXJhbSAge1VzZXJNb2RlbH0gbW9kZWwg0J7QsdGK0LXQutGCINC80L7QtNC10LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbiAqL1xuY2xhc3MgU2lnbkluQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRTdWJtaXRFdmVudCh0aGlzLm9uU3VibWl0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5iaW5kTGlua3NFdmVudCh0aGlzLm9uUmVkaXJlY3QuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICB2YWxpZGF0ZUZvcm1GaWVsZHMoKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2VtYWlsJyk7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJyk7XG4gICAgICAgIGlmICghZW1haWxGaWVsZCB8fCAhcGFzc3dvcmRGaWVsZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ZpZWxkcyBkb250IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXcuZm9ybS52YWxpZGF0ZUVtcHR5RmllbGRzKFtlbWFpbEZpZWxkLCBwYXNzd29yZEZpZWxkXSk7XG4gICAgfVxuICAgIDtcbiAgICBvbklucHV0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgb25TdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uYmluZElucHV0c0V2ZW50KHRoaXMub25JbnB1dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zaWduSW4tYnV0dG9uJyk7XG4gICAgICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uLS1kaXNhYmxlZCcpKSB7IC8vIFRPRE86IGNoZWNrIGlmIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybUZpZWxkcygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXNlclNpZ25JbiA9IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJykuaW5wdXQudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zaWduSW5Vc2VyKHVzZXJTaWduSW4pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChwYXRocy5tYWluKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnZW1haWwnKS5zaG93RXJyb3JNc2coJycpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgncGFzc3dvcmQnKS5zaG93RXJyb3JNc2coZXJyb3JNc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uUmVkaXJlY3QoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gdGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5zYXZlRm9ybURhdGFUb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCkge1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5zYXZlRGF0YVRvU3RvcmFnZSgnU2lnbkluRGF0YScpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0Rm9ybURhdGFGcm9tU3RvcmFnZSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uZ2V0RGF0YUZyb21TdG9yYWdlKCdTaWduSW5EYXRhJyk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi8uLi9Sb3V0ZXIvUm91dGVyJztcbmltcG9ydCBwYXRocyBmcm9tICcuLi8uLi9Sb3V0ZXIvUm91dGVyUGF0aHMnO1xuLyoqXG4gKiDQmtC+0YLRgNC+0LvQu9C10YAg0LTQu9GPXG4gKiBAY2F0ZWdvcnkgU2lnblVwXG4gKiBAZXh0ZW5kcyB7SUNvbnRyb2xsZXJ9XG4gKiBAcGFyYW0gIHtIZWFkZXJWaWV3fSB2aWV3INCe0LHRitC10LrRgiDQstC40LTQsCDQutC+0LzQv9C+0L3QtdC90YLQsFxuICogQHBhcmFtICB7VXNlck1vZGVsfSBtb2RlbCDQntCx0YrQtdC60YIg0LzQvtC00LXQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuICovXG5jbGFzcyBTaWduVXBDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIG1vZGVsKTtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uYmluZFN1Ym1pdEV2ZW50KHRoaXMub25TdWJtaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRMaW5rc0V2ZW50KHRoaXMub25SZWRpcmVjdC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xuICAgIG9uSW5wdXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmlldy5mb3JtLnZhbGlkYXRlV2l0aEVtcHR5KCk7XG4gICAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5zdWJtaXRCdXR0b24uYmxvY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLnN1Ym1pdEJ1dHRvbi51bmJsb2NrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRJbnB1dHNFdmVudCh0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuc2lnblVwLWJ1dHRvbicpO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi0tZGlzYWJsZWQnKSkgeyAvLyBUT0RPOiBjaGVjayBpZiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy52aWV3LmZvcm0udmFsaWRhdGVXaXRoRW1wdHkoKSkgeyAvLyBUT0RPOiBjaGVjayBpZiB2YWxpZCwgYnV0IGlmIHZhbGlkIGFsd2F5cyBkaXNhYmxlZC4gVXNlbGVzcyBjaGVjaz9cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1c2VyU2lnblVwID0ge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2VtYWlsJykuaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgncGFzc3dvcmQnKS5pbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRlX2JpcnRoOiAnMjAwMC1KYW4tMDEnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2lnblVwVXNlcih1c2VyU2lnblVwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocGF0aHMubWFpbik7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3JlcGVhdC1wYXNzd29yZCcpLnNob3dFcnJvck1zZyhlcnJvck1zZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgb25SZWRpcmVjdChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSB0YXJnZXQuY2xvc2VzdCgnW2hyZWZdJykuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG4gICAgICAgICAgICB0aGlzLnNhdmVGb3JtRGF0YVRvU3RvcmFnZSgpO1xuICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKGhyZWYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzYXZlRm9ybURhdGFUb1N0b3JhZ2UoKSB7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLnNhdmVEYXRhVG9TdG9yYWdlKCdTaWduVXBEYXRhJyk7XG4gICAgfVxuICAgIDtcbiAgICBnZXRGb3JtRGF0YUZyb21TdG9yYWdlKCkge1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5nZXREYXRhRnJvbVN0b3JhZ2UoJ1NpZ25VcERhdGEnKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgU2lnblVwQ29udHJvbGxlcjtcbiIsIi8qKlxuICog0JrQu9Cw0YHRgSDRgNCw0LHQvtGC0Ysg0YEg0YHQvtCx0YvRgtC40Y/QvNC4INC/0YDQuNC70L7QttC10L3QuNGPIChj0LjQvdCz0LvRgtC+0L0pXG4gKiBAY2xhc3NcbiAqIEBjYXRlZ29yeSBFdmVudERpc3BhdGNoZXJcbiAqL1xuY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcbiAgICAvKipcbiAgICAgKiDQpdGA0LDQvdC40LvQuNGJ0LUg0Y3QstC10L3RgtC+0LJcbiAgICAgKiAo0J/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAdHlwZSB7TWFwPHN0cmluZywgQXJyYXk8RnVuY3Rpb24+Pn1cbiAgICAgKi9cbiAgICBldmVudHM7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IE1hcDtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC/0L7QtNC/0LjRgdC60Lgg0L3QsCDRgdC+0LHRi9GC0LjQtVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIC0g0JjQvNGPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0g0JTQtdC50YHRgtCy0LjQtSwg0LrQvtGC0L7RgNC+0LUg0L3Rg9C20L3QviDQstGL0L/QvtC70L3QuNGC0Ywg0L/RgNC4INGB0YDQsNCx0LDRgtGL0LLQsNC90LjQuCDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tMaXN0ID0gdGhpcy5ldmVudHMuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmICghY2FsbGJhY2tMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnROYW1lLCBbY2FsbGJhY2tdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFja0xpc3QucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQvtGC0L/QuNGB0LrQuCDQvtGCINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgLSDQmNC80Y8g0YHQvtCx0YvRgtC40Y9cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSDQlNC10LnRgdGC0LLQuNC1LCDQutC+0YLQvtGA0L7QtSDQvdGD0LbQvdC+INCx0YvQu9C+INCy0YvQv9C+0LvQvdC40YLRjCDQv9GA0Lgg0YHRgNCw0LHQsNGC0YvQstCw0L3QuNC4INGB0L7QsdGL0YLQuNGPXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB1bnN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrTGlzdCA9IHRoaXMuZXZlbnRzLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWNhbGxiYWNrTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRzLnNldChldmVudE5hbWUsIGNhbGxiYWNrTGlzdFxuICAgICAgICAgICAgLmZpbHRlcigoZnVuYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQstGL0LfQvtCy0LAg0YHQvtCx0YvRgtC40Y9cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSAtINCY0LzRjyDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEBwYXJhbSAgez9hbnl9IGRhdGEgLSDQlNCw0L3QvdGL0LUsINC60L7RgtC+0YDRi9C1INC90YPQttC90L4g0L/QtdGA0LXQtNCw0YLRjCDQsiDRhNGD0L3QutGG0LjRji3QvtCx0YDQsNCx0L7RgtGH0LjQulxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5ldmVudHMuZ2V0KGV2ZW50TmFtZSk/LmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnREaXNwYXRjaGVyKCk7XG4iLCJpbXBvcnQgSU1vZGVsIGZyb20gJy4uL0lNb2RlbC9JTW9kZWwnO1xuaW1wb3J0IEFqYXggZnJvbSAnLi4vLi4vQWpheC9BamF4JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL0NvbmZpZy9Db25maWcnO1xuY2xhc3MgRmlsbU1vZGVsIGV4dGVuZHMgSU1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlRmlsbShqc29uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDoganNvbi5pZCxcbiAgICAgICAgICAgIGNvbnRlbnRVUkw6IGpzb24uY29udGVudF91cmwsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLnBhcnNlQ29udGVudEZvckZpbG0oanNvbi5jb250ZW50KSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlQ29udGVudEZvckZpbG0oY29udGVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGNvbnRlbnQuaWQsXG4gICAgICAgICAgICB0aXRsZTogY29udGVudC50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmF0aW5nOiBjb250ZW50LnJhdGluZyxcbiAgICAgICAgICAgIHllYXI6IGNvbnRlbnQueWVhcixcbiAgICAgICAgICAgIHBlcnNvbnM6IHRoaXMucGFyc2VQZXJzb25zRm9yRmlsbShjb250ZW50LnBlcnNvbnNfcm9sZXMpLFxuICAgICAgICAgICAgaXNGcmVlOiBjb250ZW50LmlzX2ZyZWUsXG4gICAgICAgICAgICBhZ2VMaW1pdDogY29udGVudC5hZ2VfbGltaXQsXG4gICAgICAgICAgICB0cmFpbGVyVVJMOiBjb250ZW50LnRyYWlsZXJfdXJsLFxuICAgICAgICAgICAgcHJldmlld1VSTDogY29udGVudC5wcmV2aWV3X3VybCxcbiAgICAgICAgICAgIHR5cGU6IGNvbnRlbnQudHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGVyc29uc0ZvckZpbG0ocGVyc29uc1dpdGhSb2xlcykge1xuICAgICAgICByZXR1cm4gcGVyc29uc1dpdGhSb2xlcy5tYXAoKHBlcnNvbldpdGhSb2xlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVBlcnNvbkZvckZpbG0ocGVyc29uV2l0aFJvbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGVyc29uRm9yRmlsbShwZXJzb25XaXRoUm9sZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHBlcnNvbldpdGhSb2xlLnBlcnNvbi5pZCxcbiAgICAgICAgICAgIG5hbWU6IHBlcnNvbldpdGhSb2xlLnBlcnNvbi5uYW1lLFxuICAgICAgICAgICAgcm9sZTogcGVyc29uV2l0aFJvbGUucm9sZS50aXRsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIGdldEZpbG1BY3RvcnMocGVyc29ucykge1xuICAgICAgICBjb25zdCBhY3RvclJvbGUgPSB7IGlkOiAwLCB0aXRsZTogJ0FDVE9SJyB9O1xuICAgICAgICByZXR1cm4gcGVyc29ucy5maWx0ZXIocGVyc29uID0+IHBlcnNvbi5yb2xlID09PSBhY3RvclJvbGUudGl0bGUpO1xuICAgIH1cbiAgICBnZXRGaWxtRGlyZWN0b3JzKHBlcnNvbnMpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3JSb2xlID0geyBpZDogMCwgdGl0bGU6ICdESVJFQ1RPUicgfTtcbiAgICAgICAgcmV0dXJuIHBlcnNvbnMuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24ucm9sZSA9PT0gZGlyZWN0b3JSb2xlLnRpdGxlKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0RmlsbShpZCkge1xuICAgICAgICBsZXQgY29uZiA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZy5hcGkuZmlsbSk7XG4gICAgICAgIGNvbmYudXJsID0gY29uZi51cmwucmVwbGFjZSgnezppZH0nLCBpZC50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZik7XG4gICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhyZXNwb25zZSwgY29uZik7XG4gICAgICAgIGNvbnN0IGZpbG1EYXRhID0gdGhpcy5wYXJzZUZpbG0ocmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkuZmlsbSk7XG4gICAgICAgIGlmIChmaWxtRGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICBmaWxtRGF0YS5jb250ZW50LmFjdG9ycyA9IHRoaXMuZ2V0RmlsbUFjdG9ycyhmaWxtRGF0YS5jb250ZW50LnBlcnNvbnMgfHwgW10pO1xuICAgICAgICAgICAgZmlsbURhdGEuY29udGVudC5kaXJlY3RvcnMgPSB0aGlzLmdldEZpbG1EaXJlY3RvcnMoZmlsbURhdGEuY29udGVudC5wZXJzb25zIHx8IFtdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZpbG1EYXRhKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgRmlsbU1vZGVsO1xuIiwiLyoqXG4gKiDQkdCw0LfQvtCy0YvQuSDQutC70LDRgdGBINC00LvRjyDQvNC+0LTQtdC70LguXG4gKiDQktGL0L/QvtC70L3Rj9C10YIg0LHQuNC30L3QtdGBINC70L7Qs9C40LrRgyDQuCDRgNCw0LHQvtGC0LDQtdGCINGBINC00LDQvdC90YvQvNC4INC4INGB0LXRgtGM0Y4uXG4gKiBAY2xhc3NcbiAqIEB2aXJ0dWFsXG4gKi9cbmNsYXNzIElNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbn1cbmV4cG9ydCBkZWZhdWx0IElNb2RlbDtcbiIsImltcG9ydCBJTW9kZWwgZnJvbSAnLi4vSU1vZGVsL0lNb2RlbCc7XG5pbXBvcnQgQWpheCBmcm9tICcuLi8uLi9BamF4L0FqYXgnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vQ29uZmlnL0NvbmZpZyc7XG5jbGFzcyBQZXJzb25Nb2RlbCBleHRlbmRzIElNb2RlbCB7XG4gICAgZ2VuZGVyTWFwID0ge1xuICAgICAgICBGOiAn0JbQtdC90YHQutC40LknLFxuICAgICAgICBNOiAn0JzRg9C20YHQutC+0LknLFxuICAgIH07XG4gICAgcm9sZU1hcCA9IHtcbiAgICAgICAgRElSRUNUT1I6ICfQoNC10LbQuNGB0YHRkdGAJyxcbiAgICAgICAgQ09NUE9TRVI6ICfQmtC+0LzQv9C+0LfQuNGC0L7RgCcsXG4gICAgICAgIERFU0lHTjogJ9CU0LjQt9Cw0LnQvdC10YAnLFxuICAgICAgICBFRElUT1I6ICfQoNC10LTQsNC60YLQvtGAJyxcbiAgICAgICAgQUNUT1I6ICfQkNC60YLRkdGAJyxcbiAgICAgICAgT1BFUkFUT1I6ICfQntC/0LXRgNCw0YLQvtGAJyxcbiAgICAgICAgUFJPRFVDRVI6ICfQn9GA0L7QtNGO0YHRgdC10YAnLFxuICAgICAgICBXUklURVI6ICfQodGG0LXQvdCw0YDQuNGB0YInLFxuICAgIH07XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBlcnNvbihqc29uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDoganNvbi5pZCxcbiAgICAgICAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgICAgICAgIGdlbmRlcjogdGhpcy50cmFuc2Zvcm1HZW5kZXIoanNvbi5nZW5kZXIpLFxuICAgICAgICAgICAgZ2VucmVzOiB0aGlzLnBhcnNlR2VucmVzKGpzb24uZ2VucmVzKSxcbiAgICAgICAgICAgIGdyb3d0aDoganNvbi5ncm93dGgsXG4gICAgICAgICAgICBiaXJ0aFBsYWNlOiBqc29uLmJpcnRocGxhY2UsXG4gICAgICAgICAgICBhdmF0YXJVUkw6IGpzb24uYXZhdGFyX3VybCxcbiAgICAgICAgICAgIGFnZToganNvbi5hZ2UsXG4gICAgICAgICAgICByb2xlczogdGhpcy5wYXJzZVBlcnNvblJvbGVzKGpzb24ucm9sZXMpLFxuICAgICAgICAgICAgcGFydGljaXBhdGVkSW46IHRoaXMucGFyc2VQYXJ0aWNpcGF0ZWRDb250ZW50cyhqc29uLnBhcnRpY2lwYXRlZF9pbiksXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZUdlbnJlcyhnZW5yZXMpIHtcbiAgICAgICAgcmV0dXJuIGdlbnJlcy5tYXAoKGdlbnJlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUdlbnJlKGdlbnJlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZUdlbnJlKGdlbnJlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZ2VucmUuaWQsXG4gICAgICAgICAgICBuYW1lOiBnZW5yZS5uYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VQZXJzb25Sb2xlcyhyb2xlcykge1xuICAgICAgICByZXR1cm4gcm9sZXMubWFwKChyb2xlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVBlcnNvblJvbGUocm9sZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VQZXJzb25Sb2xlKHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiByb2xlLmlkLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNmb3JtUm9sZShyb2xlLnRpdGxlKSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGFydGljaXBhdGVkQ29udGVudHMoY29udGVudHMpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRzLm1hcCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQYXJ0aWNpcGF0ZWRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGFydGljaXBhdGVkQ29udGVudChjb250ZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogY29udGVudC5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBjb250ZW50LnRpdGxlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICA7XG4gICAgdHJhbnNmb3JtR2VuZGVyKGdlbmRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5kZXJNYXBbZ2VuZGVyXTtcbiAgICB9XG4gICAgO1xuICAgIHRyYW5zZm9ybVJvbGUocm9sZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb2xlTWFwW3JvbGVdO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgZ2V0UGVyc29uKGlkKSB7XG4gICAgICAgIGxldCBjb25mID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLmFwaS5wZXJzb24pO1xuICAgICAgICBjb25mLnVybCA9IGNvbmYudXJsLnJlcGxhY2UoJ3s6aWR9JywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmYpO1xuICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmYpO1xuICAgICAgICBjb25zdCBwZXJzb25EYXRhID0gYXdhaXQgdGhpcy5wYXJzZVBlcnNvbihyZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS5wZXJzb24pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBlcnNvbkRhdGEpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBQZXJzb25Nb2RlbDtcbiIsImltcG9ydCBJTW9kZWwgZnJvbSAnLi4vSU1vZGVsL0lNb2RlbCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vQ29uZmlnL0NvbmZpZ1wiO1xuaW1wb3J0IEFqYXggZnJvbSBcIi4uLy4uL0FqYXgvQWpheFwiO1xuY2xhc3MgU2VsZWN0aW9uTW9kZWwgZXh0ZW5kcyBJTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VTZWxlY3Rpb25zKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGpzb24ubWFwKChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2VsZWN0aW9uKHNlbGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXJzZVNlbGVjdGlvbihzZWxlY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBzZWxlY3Rpb24uaWQsXG4gICAgICAgICAgICB0aXRsZTogc2VsZWN0aW9uLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5wYXJzZVNlbGVjdGlvbkNvbnRlbnRzKHNlbGVjdGlvbi5jb250ZW50KSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlU2VsZWN0aW9uQ29udGVudHMoc2VsZWN0aW9uQ29udGVudHMpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbkNvbnRlbnRzLm1hcCgoc2VsZWN0aW9uQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VTZWxlY3Rpb25Db250ZW50KHNlbGVjdGlvbkNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlU2VsZWN0aW9uQ29udGVudChzZWxlY3Rpb25Db250ZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogc2VsZWN0aW9uQ29udGVudC5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBzZWxlY3Rpb25Db250ZW50LnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGlvbkNvbnRlbnQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByYXRpbmc6IHNlbGVjdGlvbkNvbnRlbnQucmF0aW5nLFxuICAgICAgICAgICAgeWVhcjogc2VsZWN0aW9uQ29udGVudC55ZWFyLFxuICAgICAgICAgICAgaXNGcmVlOiBzZWxlY3Rpb25Db250ZW50LmlzX2ZyZWUsXG4gICAgICAgICAgICBhZ2VMaW1pdDogc2VsZWN0aW9uQ29udGVudC5hZ2VfbGltaXQsXG4gICAgICAgICAgICB0cmFpbGVyVVJMOiBzZWxlY3Rpb25Db250ZW50LnRyYWlsZXJfdXJsLFxuICAgICAgICAgICAgcHJldmlld1VSTDogc2VsZWN0aW9uQ29udGVudC5wcmV2aWV3X3VybCxcbiAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbkNvbnRlbnQudHlwZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIGdldFNlbGVjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkuc2VsZWN0aW9ucyk7XG4gICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhyZXNwb25zZSwgY29uZmlnLmFwaS5zZWxlY3Rpb25zKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRGF0YSA9IHRoaXMucGFyc2VTZWxlY3Rpb25zKHJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnNlbGVjdGlvbnMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGVjdGlvbkRhdGEpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb25Nb2RlbDtcbiIsImltcG9ydCBJTW9kZWwgZnJvbSAnLi4vSU1vZGVsL0lNb2RlbCc7XG5pbXBvcnQgQWpheCBmcm9tICcuLi8uLi9BamF4L0FqYXgnO1xuaW1wb3J0IHsgY29uZmlnLCBjdXN0b21GYWlsdXJlcyB9IGZyb20gJy4uLy4uL0NvbmZpZy9Db25maWcnO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tICcuLi8uLi9FdmVudERpc3BhdGNoZXIvRXZlbnREaXNwYXRjaGVyJztcbmNsYXNzIFVzZXJNb2RlbCBleHRlbmRzIElNb2RlbCB7XG4gICAgY3VycmVudFVzZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VVc2VyKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtYWlsOiBqc29uLmVtYWlsLFxuICAgICAgICAgICAgYmlydGhEYXRlOiBqc29uLmRhdGVfYmlydGgsXG4gICAgICAgICAgICBhdmF0YXI6IGpzb24uYXZhdGFyX3VybCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIGdldEN1cnJlbnRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlcjtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIHNpZ25JblVzZXIoc2lnbkRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2lnbkluUmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5zaWduSW4sIEpTT04uc3RyaW5naWZ5KHNpZ25EYXRhKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMoc2lnbkluUmVzcG9uc2UsIGNvbmZpZy5hcGkuc2lnbkluKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChzaWduSW5SZXNwb25zZS5yZXNwb25zZUJvZHkubWVzc2FnZSk7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBzaWduVXBVc2VyKHNpZ25EYXRhKSB7XG4gICAgICAgIGNvbnN0IHNpZ25VcFJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkuc2lnblVwLCBKU09OLnN0cmluZ2lmeShzaWduRGF0YSkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHNpZ25VcFJlc3BvbnNlLCBjb25maWcuYXBpLnNpZ25VcCk7XG4gICAgICAgICAgICBjb25zdCBzaWduSW5SZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnNpZ25JbiwgSlNPTi5zdHJpbmdpZnkoc2lnbkRhdGEpKTtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhzaWduSW5SZXNwb25zZSwgY29uZmlnLmFwaS5zaWduSW4pO1xuICAgICAgICAgICAgY29uc3QgcHJvZmlsZVJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocHJvZmlsZVJlc3BvbnNlLCBjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMucGFyc2VVc2VyKHByb2ZpbGVSZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS51c2VyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2lnblVwUmVzcG9uc2UucmVzcG9uc2VCb2R5Lm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBsb2dvdXRVc2VyKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLmxvZ291dCk7XG4gICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhyZXNwb25zZSwgY29uZmlnLmFwaS5sb2dvdXQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgdXBkYXRlVXNlcih1c2VyKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkudXBkYXRlLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkudXBkYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tU3RhdHVzID0gcmVzcG9uc2UucmVzcG9uc2VCb2R5LnN0YXR1cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIG1zZzogY3VzdG9tRmFpbHVyZXNbY3VzdG9tU3RhdHVzXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLmN1cnJlbnRVc2VyKTtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIGF2YXRhclVwZGF0ZShmb3JtRGF0YSkge1xuICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLmF2YXRhclVwZGF0ZSwgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkuYXZhdGFyVXBkYXRlKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29uc3QgcHJvZmlsZVJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncHJvZmlsZVJlc3BvbnNlJywgcHJvZmlsZVJlc3BvbnNlKTtcbiAgICAgICAgLy8gICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhwcm9maWxlUmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocHJvZmlsZVJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnVzZXIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRVc2VyJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY2F0Y2gge1xuICAgICAgICAvLyAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIGNvbmZpZy5ob3N0ICsgY29uZmlnLmFwaS5hdmF0YXJVcGRhdGUudXJsLCBmYWxzZSk7XG4gICAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBamF4LmdldENzcmZUb2tlbkZyb21TZXJ2ZXIoKTtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdjc3JmLXRva2VuJywgcmVzcG9uc2UuYm9keVsnY3NyZi10b2tlbiddKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQxMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIG1zZzogJ9Ch0LvQuNGI0LrQvtC8INCx0L7Qu9GM0YjQvtC5INGA0LDQt9C80LXRgCDRhNCw0LnQu9CwJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tU3RhdHVzID0gcmVzcG9uc2UucmVzcG9uc2VCb2R5LnN0YXR1cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIG1zZzogY3VzdG9tRmFpbHVyZXNbY3VzdG9tU3RhdHVzXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBhdmF0YXJEZWxldGUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkuYXZhdGFyRGVsZXRlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhyZXNwb25zZSwgY29uZmlnLmFwaS5hdmF0YXJEZWxldGUpO1xuICAgICAgICAgICAgY29uc3QgcHJvZmlsZVJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocHJvZmlsZVJlc3BvbnNlLCBjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHRoaXMucGFyc2VVc2VyKHByb2ZpbGVSZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS51c2VyKTtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLmN1cnJlbnRVc2VyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgYXV0aFVzZXJCeUNvb2tpZSgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhyZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihyZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS51c2VyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLmN1cnJlbnRVc2VyKTsgVE9ETzogbmVlZD9cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsO1xuIiwiaW1wb3J0IHBhdGhzIGZyb20gXCIuL1JvdXRlclBhdGhzXCI7XG5jbGFzcyBSb3V0ZXIge1xuICAgIHJvdXRlcztcbiAgICB1bmtub3duUGFnZUhhbmRsZXI7XG4gICAgbmVhcmVzdE5vdEF1dGhVcmw7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVzID0gW107XG4gICAgICAgIHRoaXMudW5rbm93blBhZ2VIYW5kbGVyID0gKCkgPT4geyB9O1xuICAgICAgICB0aGlzLm5lYXJlc3ROb3RBdXRoVXJsID0gcGF0aHMubWFpbjtcbiAgICB9XG4gICAgO1xuICAgIHN0YXJ0KGVudHJ5UGF0aCkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IHBhdGg6IGVudHJ5UGF0aCB9LCAnJywgZW50cnlQYXRoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm91dGUoKTtcbiAgICB9XG4gICAgO1xuICAgIGdvVG9QYXRoKHBhdGgpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBwYXRoIH0sICcnLCBwYXRoKTtcbiAgICAgICAgdGhpcy5yb3V0ZSgpO1xuICAgIH1cbiAgICA7XG4gICAgcm91dGUoKSB7XG4gICAgICAgIGNvbnN0IHJhd1BhdGggPSBoaXN0b3J5LnN0YXRlPy5wYXRoO1xuICAgICAgICBpZiAoIXJhd1BhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5zYW5pdGl6ZVVybChyYXdQYXRoKTtcbiAgICAgICAgY29uc3QgdG1wUGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgIGlmICh0bXBQYXRoICE9PSBwYXRocy5zaWduSW4gJiYgdG1wUGF0aCAhPT0gcGF0aHMuc2lnblVwKSB7XG4gICAgICAgICAgICB0aGlzLm5lYXJlc3ROb3RBdXRoVXJsID0gcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3VuZGVkUGF0aCA9IHRoaXMucm91dGVzLmZpbmQoKHsgcnVsZSwgaGFuZGxlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHBhdGgubWF0Y2gocnVsZSk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZm91bmRlZFBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMudW5rbm93blBhZ2VIYW5kbGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHNob3dVbmtub3duUGFnZSgpIHtcbiAgICAgICAgdGhpcy51bmtub3duUGFnZUhhbmRsZXIoKTtcbiAgICB9XG4gICAgO1xuICAgIHNldFVua25vd25QYWdlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudW5rbm93blBhZ2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gICAgO1xuICAgIGFkZFJ1bGUocnVsZSwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBuZXdSb3V0ZSA9IHtcbiAgICAgICAgICAgIHJ1bGU6IHRoaXMucGFyc2VSdWxlKHJ1bGUpLFxuICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZXMucHVzaChuZXdSb3V0ZSk7XG4gICAgICAgIHJldHVybiBuZXdSb3V0ZTtcbiAgICB9XG4gICAgcmVtb3ZlUnVsZShydWxlKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yb3V0ZXMuZmluZEluZGV4KChyb3V0ZSkgPT4gcm91dGUucnVsZS5zb3VyY2UgPT09IHRoaXMucGFyc2VSdWxlKHJ1bGUpLnNvdXJjZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBnZXROZWFyZXN0Tm90QXV0aFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmVhcmVzdE5vdEF1dGhVcmw7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVJ1bGUocnVsZSkge1xuICAgICAgICBsZXQgdXJpID0gdGhpcy5zYW5pdGl6ZVVybChydWxlKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3tcXDpudW1iZXJ9L2csICcoXFxcXGQrKScpXG4gICAgICAgICAgICAucmVwbGFjZSgve1xcOndvcmR9L2csICcoXFxcXHcrKScpXG4gICAgICAgICAgICAucmVwbGFjZSgve1xcOlxcdyt9L2csICcoXFxcXHcrKScpO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7dXJpfSRgLCAnaScpO1xuICAgIH1cbiAgICBzYW5pdGl6ZVVybChydWxlKSB7XG4gICAgICAgIHJldHVybiBydWxlLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICB9XG4gICAgO1xufVxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiLyoqXG4gKiDQmtC+0L3RhNC40LPRg9GA0LDRhtC40Y8gVVJMINCw0LTRgNC10YHQvtCyINC/0YDQuNC70L7QttC10L3QuNGPXG4gKiBAY2F0ZWdvcnkgUm91dGVyXG4gKiBAY29uc3RhbnQge09iamVjdH1cbiAqIEBwYXJhbSB7e25hbWU6IHN0cmluZywgVVJMOiBzdHJpbmd9fSDQodGC0YDRg9C60YLRg9GA0LAg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC4XG4gKi9cbmNvbnN0IHBhdGhzID0ge1xuICAgIG1haW46ICcvJyxcbiAgICBjYXRhbG9nOiAnL2NhdGFsb2cnLFxuICAgIHN0b3JlOiAnL3N0b3JlJyxcbiAgICBteU1vdmllOiAnL215LW1vdmllJyxcbiAgICBzZXR0aW5nczogJy9zZXR0aW5ncycsXG4gICAgc2lnbkluOiAnL3NpZ25JbicsXG4gICAgc2lnblVwOiAnL3NpZ25VcCcsXG4gICAgbG9nb3V0OiAnL2xvZ291dCcsXG4gICAgZmlsbXM6ICcvZmlsbXMvezppZH0nLFxuICAgIHBlcnNvbnM6ICcvcGVyc29ucy97OmlkfScsXG59O1xuZXhwb3J0IGRlZmF1bHQgcGF0aHM7XG4iLCJpbXBvcnQgdmFsaWRhdG9ycyBmcm9tICcuL1ZhbGlkYXRvckNvbmZpZyc7XG5jb25zdCB1bmtub3duVmFsaWRhdG9yID0ge1xuICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgIGVycm9yTXNnOiAn0J3QtdC40LfQstC10YHRgtC90YvQuSDRgtC40L8g0L/QvtC70Y8nLFxufTtcbmNvbnN0IHZhbGlkVmFsaWRhdG9yID0ge1xuICAgIGlzVmFsaWQ6IHRydWUsXG4gICAgZXJyb3JNc2c6ICcnLFxufTtcbi8vIGNvbnN0IGVtcHR5VmFsaWRhdG9yOiBWYWxpZGF0b3JSZXN1bHQgPSB7XG4vLyAgICAgaXNWYWxpZDogICAgICBmYWxzZSxcbi8vICAgICBlcnJvck1zZzogICAgICfQn9GD0YHRgtC+0LUg0L/QvtC70LUnLFxuLy8gfVxuZnVuY3Rpb24gdmFsaWRhdGVJbnB1dChpbnB1dCkge1xuICAgIGlmIChpbnB1dC5pZCA9PT0gJ2F2YXRhcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkVmFsaWRhdG9yO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZGF0b3IgPSB2YWxpZGF0b3JzLmdldChpbnB1dC5pZCk7XG4gICAgaWYgKCF2YWxpZGF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHVua25vd25WYWxpZGF0b3I7XG4gICAgfVxuICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0b3IucmVnRXhwLnRlc3QoaW5wdXQudmFsdWUpO1xuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICByZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3JNc2c6IHZhbGlkYXRvci5lcnJvck1zZyB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRWYWxpZGF0b3I7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkcyhwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpIHtcbiAgICBjb25zdCB2YWxpZGF0ZWRQYXNzd29yZCA9IHZhbGlkYXRlSW5wdXQoeyBpZDogJ3Bhc3N3b3JkJywgdmFsdWU6IHBhc3N3b3JkIH0pO1xuICAgIGlmICghdmFsaWRhdGVkUGFzc3dvcmQuaXNWYWxpZCkge1xuICAgICAgICByZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3JNc2c6IHZhbGlkYXRlZFBhc3N3b3JkLmVycm9yTXNnLCBwYXNzd29yZEVycm9yTXNnOiB2YWxpZGF0b3JzLmdldCgncmVwZWF0LXBhc3N3b3JkJyk/LmVycm9yTXNnIH07XG4gICAgfVxuICAgIGlmIChwYXNzd29yZCAhPT0gcmVwZWF0UGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIGVycm9yTXNnOiB2YWxpZGF0ZWRQYXNzd29yZC5lcnJvck1zZywgcGFzc3dvcmRFcnJvck1zZzogdmFsaWRhdG9ycy5nZXQoJ3JlcGVhdC1wYXNzd29yZCcpPy5lcnJvck1zZyB9O1xuICAgIH1cbiAgICByZXR1cm4geyBpc1ZhbGlkOiB0cnVlLCBlcnJvck1zZzogJycgfTtcbn1cbmV4cG9ydCB7IHZhbGlkYXRlSW5wdXQsIHZhbGlkYXRlUGFzc3dvcmRzIH07XG4iLCJjb25zdCB2YWxpZGF0b3JzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZW1haWwnLFxuICAgICAgICB7XG4gICAgICAgICAgICByZWdFeHA6IC9eW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0kLyxcbiAgICAgICAgICAgIGVycm9yTXNnOiAn0JLQstC10LTRkdC90L3Ri9C5IGVtYWlsINC40LzQtdC10YIg0L3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCy0LjQtCdcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ3Bhc3N3b3JkJyxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVnRXhwOiAvXig/PS4qW2EtekEtWl0pKD89LipbMC05XSlbYS16QS1aMC05XXs4LH0kLyxcbiAgICAgICAgICAgIGVycm9yTXNnOiAn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDRgdC+0LTQtdGA0LbQsNGC0Ywg0LzQuNC90LjQvNGD0LwgOCDRgdC40LzQstC+0LvQvtCyLCDQstC60LvRjtGH0LDRjyDQvtC00L3RgyDRhtC40YTRgNGDJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgW1xuICAgICAgICAncmVwZWF0LXBhc3N3b3JkJyxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVnRXhwOiAvXig/PS4qW2EtekEtWl0pKD89LipbMC05XSlbYS16QS1aMC05XXs4LH0kLyxcbiAgICAgICAgICAgIGVycm9yTXNnOiAn0J/QsNGA0L7Qu9C4INC00L7Qu9C20L3RiyDRgdC+0LLQv9Cw0LTQsNGC0YwnLFxuICAgICAgICB9LFxuICAgIF0sXG5dKTtcbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRvcnM7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IENhcm91c2VsVGVtcGxhdGUgZnJvbSAnLi9DYXJvdXNlbFZpZXcuaGJzJztcbmltcG9ydCBDYXJvdXNlbERhdGEgZnJvbSAnLi9DYXJvdXNlbFZpZXdDb25maWcnO1xuaW1wb3J0ICcuL0Nhcm91c2VsVmlldy5jc3MnO1xuaW1wb3J0IExpc3RDb21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9MaXN0Q29tcG9uZW50L0xpc3RDb21wb25lbnQnO1xuY2xhc3MgQ2Fyb3VzZWxWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIGxpc3Q7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgQ2Fyb3VzZWxUZW1wbGF0ZSh7fSksICcuanMtY2Fyb3VzZWwnKTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBMaXN0Q29tcG9uZW50KGRpdiwgJycsICcnLCBDYXJvdXNlbERhdGEubGlzdCk7XG4gICAgICAgIHRoaXMubGlzdC5zaG93KCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZD8uYWZ0ZXIoZGl2KTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFZpZXc7XG4iLCJpbXBvcnQgVmlkZW9Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9WaWRlb0NvbXBvbmVudC9WaWRlb0NvbXBvbmVudCc7XG5jb25zdCBDYXJvdXNlbERhdGEgPSB7XG4gICAgbGlzdDoge1xuICAgICAgICBsaXN0Q2xhc3M6ICdjYXJvdXNlbF9fbGlzdCcsXG4gICAgICAgIGl0ZW1DbGFzczogJ2Nhcm91c2VsLWxpc3RfX2l0ZW0nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHsgaHJlZjogJy9maWxtcy8xMScsIHNyYzogJy9pbWcvdGVzdC8yLmpwZycgfSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBWaWRlb0NvbXBvbmVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhOiB7IGhyZWY6ICcvZmlsbXMvNjMnLCBzcmM6ICcvaW1nL3Rlc3QvMS5qcGcnIH0sXG4gICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogVmlkZW9Db21wb25lbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YTogeyBocmVmOiAnL2ZpbG1zLzk1Jywgc3JjOiAnL2ltZy90ZXN0LzMuanBnJyB9LFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IFZpZGVvQ29tcG9uZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbERhdGE7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IEZpbG1UZW1wbGF0ZSBmcm9tICcuL0ZpbG1WaWV3Lmhicyc7XG5pbXBvcnQgJy4vRmlsbVZpZXcuY3NzJztcbmltcG9ydCBQbGF5ZXJWaWV3IGZyb20gXCIuLi9QbGF5ZXJWaWV3L1BsYXllclZpZXdcIjtcbmltcG9ydCBGaWxtRGF0YSBmcm9tIFwiLi9GaWxtVmlld0NvbmZpZ1wiO1xuLyoqXG4gKiDQntGC0L7QsdGA0LDQttC10L3QuNC1INGE0LjQu9GM0LzQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICogQGNhdGVnb3J5IEZpbG1cbiAqIEBleHRlbmRzIHtJVmlld31cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCAtINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0YXQtdC00LXRgNCwXG4gKi9cbmNsYXNzIEZpbG1WaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIHBsYXllclZpZXc7XG4gICAgdHJhaWxlckJ1dHRvbjtcbiAgICBzdWJzY3JpYmVCdXR0b247XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgRmlsbVRlbXBsYXRlKHt9KSwgJy5maWxtJyk7XG4gICAgfVxuICAgIDtcbiAgICBuZXdQbGF5ZXJWaWV3KCkge1xuICAgICAgICB0aGlzLnBsYXllclZpZXcgPSBuZXcgUGxheWVyVmlldyh0aGlzLnBhcmVudC5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG4gICAgO1xuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyVmlldyA9IG51bGw7XG4gICAgICAgIHN1cGVyLmhpZGUoKTtcbiAgICB9XG4gICAgZmlsbEZpbG0oZGF0YSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gRmlsbVRlbXBsYXRlKGRhdGEpO1xuICAgICAgICB0aGlzLnJlbmRlckJ1dHRvbnMoKTtcbiAgICB9XG4gICAgO1xuICAgIHJlbmRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZpbG0tY29udGVudF9fYnV0dG9ucycpO1xuICAgICAgICB0aGlzLnRyYWlsZXJCdXR0b24gPSAobmV3IEZpbG1EYXRhLnRyYWlsZXJCdXR0b24uY29tcG9uZW50VHlwZShidXR0b25zQ29udGFpbmVyLCAnJywgJycsIEZpbG1EYXRhLnRyYWlsZXJCdXR0b24uY29tcG9uZW50RGF0YSkpO1xuICAgICAgICB0aGlzLnRyYWlsZXJCdXR0b24uc2hvdygpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZUJ1dHRvbiA9IChuZXcgRmlsbURhdGEuc3Vic2NyaWJlQnV0dG9uLmNvbXBvbmVudFR5cGUoYnV0dG9uc0NvbnRhaW5lciwgJycsICcnLCBGaWxtRGF0YS5zdWJzY3JpYmVCdXR0b24uY29tcG9uZW50RGF0YSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZUJ1dHRvbi5zaG93KCk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgRmlsbVZpZXc7XG4iLCJpbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvQnV0dG9uQ29tcG9uZW50L0J1dHRvbkNvbXBvbmVudCc7XG5jb25zdCBGaWxtRGF0YSA9IHtcbiAgICB0cmFpbGVyQnV0dG9uOiB7XG4gICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgIHRleHQ6ICfQntGE0L7RgNC80LjRgtGMINC/0L7QtNC/0LjRgdC60YMnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic2NyaWJlLWJ1dHRvbicsXG4gICAgICAgICAgICBkYXRhQWN0aW9uOiAnc3Vic2NyaWJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogQnV0dG9uQ29tcG9uZW50LFxuICAgIH0sXG4gICAgc3Vic2NyaWJlQnV0dG9uOiB7XG4gICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgIHRleHQ6ICfQotGA0LXQudC70LXRgCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzY3JpYmUtYnV0dG9uJyxcbiAgICAgICAgICAgIGRhdGFBY3Rpb246ICd0cmFpbGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogQnV0dG9uQ29tcG9uZW50LFxuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsbURhdGE7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSBcIi4uL0lWaWV3L0lWaWV3XCI7XG5pbXBvcnQgSGVhZGVyVGVtcGxhdGUgZnJvbSAnLi9IZWFkZXJWaWV3Lmhicyc7XG5pbXBvcnQgJy4vSGVhZGVyVmlldy5jc3MnO1xuaW1wb3J0IEhlYWRlckRhdGEgZnJvbSAnLi9IZWFkZXJWaWV3Q29uZmlnJztcbi8qKlxuICog0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDRhdC10LTQtdGA0LAg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAqIEBjYXRlZ29yeSBIZWFkZXJcbiAqIEBleHRlbmRzIHtJVmlld31cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCAtINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0YXQtdC00LXRgNCwXG4gKi9cbmNsYXNzIEhlYWRlclZpZXcgZXh0ZW5kcyBJVmlldyB7XG4gICAgbGVmdFNpZGU7XG4gICAgcmlnaHRTaWRlO1xuICAgIHByb2ZpbGU7XG4gICAgYWN0aW9uc0xpc3Q7XG4gICAgY3VycmVudEFjdGl2ZUl0ZW07XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgSGVhZGVyVGVtcGxhdGUoe30pLCAnLmpzLWhlYWRlci1jb250YWluZXInKTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBmaWVsZHNcbiAgICAgICAgdGhpcy5sZWZ0U2lkZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyLWNvbnRhaW5lcl9fbGVmdCcpO1xuICAgICAgICB0aGlzLnJpZ2h0U2lkZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyLWNvbnRhaW5lcl9fcmlnaHQnKTtcbiAgICAgICAgdGhpcy5wcm9maWxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy11c2VyLXByb2ZpbGUnKTtcbiAgICAgICAgLy8gUmVuZGVyIGNvbXBvbmVudHNcbiAgICAgICAgSGVhZGVyRGF0YS5sZWZ0SXRlbXMuZm9yRWFjaCgoeyBjb21wb25lbnRUeXBlLCBjb21wb25lbnREYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBjb21wb25lbnRUeXBlKHRoaXMubGVmdFNpZGUsICcnLCAnJywgY29tcG9uZW50RGF0YSk7XG4gICAgICAgICAgICBjb21wb25lbnQuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zTGlzdCA9IChuZXcgSGVhZGVyRGF0YS5hY3Rpb25zTGlzdC5jb21wb25lbnRUeXBlKHRoaXMubGVmdFNpZGUsICcnLCAnJywgSGVhZGVyRGF0YS5hY3Rpb25zTGlzdC5jb21wb25lbnREYXRhKSk7XG4gICAgICAgIHRoaXMuYWN0aW9uc0xpc3Quc2hvdygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmVJdGVtID0gbnVsbDtcbiAgICAgICAgSGVhZGVyRGF0YS5yaWdodEl0ZW1zLmZvckVhY2goKHsgY29tcG9uZW50VHlwZSwgY29tcG9uZW50RGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50VHlwZSh0aGlzLnJpZ2h0U2lkZSwgJycsICcnLCBjb21wb25lbnREYXRhKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zaG93KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJpZ2h0U2lkZS5yZW1vdmVDaGlsZCh0aGlzLnByb2ZpbGUpO1xuICAgICAgICB0aGlzLnJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0aGlzLnByb2ZpbGUpO1xuICAgIH1cbiAgICA7XG4gICAgY2hhbmdlQWN0aXZlSGVhZGVyTGlzdEl0ZW0oaHJlZikge1xuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IHRoaXMuYWN0aW9uc0xpc3QuZ2V0RWxlbWVudDtcbiAgICAgICAgbGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIke3RoaXMuY3VycmVudEFjdGl2ZUl0ZW19XCJdYCk/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmVJdGVtID0gaHJlZjtcbiAgICAgICAgbGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIke2hyZWZ9XCJdYCk/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LjQt9C80LXQvdC10L3QuNGPINGN0LvQtdC80LXQvdGC0LAg0LIg0YXRjdC00LXRgNC1XG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBwcm9maWxlSXRlbU5hbWUgLSDQvdCw0LfQstCw0L3QuNC1INGN0LvQtdC80LXQvdGC0LBcbiAgICAgKiBAcGFyYW0gIHthbnl9IGRhdGEgLSDQlNCw0L3QvdGL0LUsINC90LXQvtCx0YXQvtC00LjQvNGL0LUg0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDRjdC70LXQvNC10L3RgtCwXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2hhbmdlSGVhZGVyUHJvZmlsZShwcm9maWxlSXRlbU5hbWUsIGRhdGEpIHtcbiAgICAgICAgaWYgKCEocHJvZmlsZUl0ZW1OYW1lIGluIEhlYWRlckRhdGEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gSGVhZGVyRGF0YVtwcm9maWxlSXRlbU5hbWVdO1xuICAgICAgICB0aGlzLnByb2ZpbGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmIChkYXRhPy5hdmF0YXIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREYXRhLmF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2ZpbGVJdGVtID0gbmV3IGNvbXBvbmVudC5jb21wb25lbnRUeXBlKHRoaXMucHJvZmlsZSwgJycsICcnLCBjb21wb25lbnQuY29tcG9uZW50RGF0YSk7XG4gICAgICAgIHByb2ZpbGVJdGVtLnNob3coKTtcbiAgICB9XG4gICAgO1xuICAgIHRvZ2dsZVByb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMucHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcuanMtZHJvcGRvd25fX2NvbnRlbnQnKT8uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd25fX2NvbnRlbnRfX3Nob3cnKTtcbiAgICB9XG4gICAgO1xuICAgIGhpZGVQcm9maWxlKCkge1xuICAgICAgICB0aGlzLnByb2ZpbGUucXVlcnlTZWxlY3RvcignLmpzLWRyb3Bkb3duX19jb250ZW50Jyk/LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19jb250ZW50X19zaG93Jyk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNGPINC90LDQttCw0YLQuNGPINC90LAg0YXQtdC00LXRgFxuICAgICAqIEBwYXJhbSAge2FueX0gbGlzdGVuZXIgLSBDYWxsYmFjayDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvtCx0YvRgtC40Y9cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVmlldztcbiIsImltcG9ydCBMaW5rQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50JztcbmltcG9ydCBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50L1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50JztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9CdXR0b25Db21wb25lbnQvQnV0dG9uQ29tcG9uZW50JztcbmltcG9ydCBMaXN0Q29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlzdENvbXBvbmVudC9MaXN0Q29tcG9uZW50JztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbkNvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0Ryb3Bkb3duQnV0dG9uQ29tcG9uZW50L0Ryb3Bkb3duQnV0dG9uQ29tcG9uZW50JztcbmltcG9ydCAnLi4vLi4vQ29tcG9uZW50cy9Dc3MvSGVhZGVyQWN0aW9uTGlzdC9IZWFkZXJBY3Rpb25MaXN0LmNzcyc7XG5pbXBvcnQgJy4uLy4uL0NvbXBvbmVudHMvQ3NzL0hlYWRlclByb2ZpbGVEcm9wZG93bi9IZWFkZXJQcm9maWxlRHJvcGRvd24uY3NzJztcbmltcG9ydCAnLi4vLi4vQ29tcG9uZW50cy9Dc3MvSGVhZGVyU2lnbkluL0hlYWRlclNpZ25Jbi5jc3MnO1xuO1xuY29uc3QgSGVhZGVyRGF0YSA9IHtcbiAgICBsZWZ0SXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnLycsXG4gICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnbG9nbycsXG4gICAgICAgICAgICAgICAgbGlua0ltYWdlU3JjOiAnL2ltZy9sb2dvL2xvZ28uc3ZnJyxcbiAgICAgICAgICAgICAgICBsaW5rSW1hZ2VXaWR0aDogJzQwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBhY3Rpb25zTGlzdDoge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICBsaXN0Q2xhc3M6ICdoZWFkZXItY29udGFpbmVyX19hY3Rpb24tbGlzdCcsXG4gICAgICAgICAgICBpdGVtQ2xhc3M6ICdoZWFkZXItY29udGFpbmVyLWFjdGlvbicsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JPQu9Cw0LLQvdCw0Y8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uLWxpbmtfX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL2NhdGFsb2cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnaGVhZGVyLWNvbnRhaW5lci1hY3Rpb25fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQmtCw0YLQsNC70L7QsycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dENsYXNzOiAnaGVhZGVyLWNvbnRhaW5lci1hY3Rpb24tbGlua19fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvc3RvcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnaGVhZGVyLWNvbnRhaW5lci1hY3Rpb25fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQnNCw0LPQsNC30LjQvScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dENsYXNzOiAnaGVhZGVyLWNvbnRhaW5lci1hY3Rpb24tbGlua19fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvbXktbW92aWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnaGVhZGVyLWNvbnRhaW5lci1hY3Rpb25fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQnNC+0ZEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uLWxpbmtfX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IExpc3RDb21wb25lbnQsXG4gICAgfSxcbiAgICByaWdodEl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICBsaW5rSHJlZjogJyMnLFxuICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgbGlua0ltYWdlU3JjOiAnL2ltZy9pY29ucy9zZWFyY2guc3ZnJyxcbiAgICAgICAgICAgICAgICBsaW5rSW1hZ2VXaWR0aDogJzI0cHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICBzaXplOiAnMjQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IFZlcnRpY2FsU3BhY2VyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ9Ca0YPQv9C40YLRjCDQv9C+0LTQv9C40YHQutGDJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdWJzY3JpYmUtYnV0dG9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBCdXR0b25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICBzaXplOiAnMjQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IFZlcnRpY2FsU3BhY2VyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgcHJvZmlsZToge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICBkYXRhQWN0aW9uOiAncHJvZmlsZScsXG4gICAgICAgICAgICBhdmF0YXI6ICcvaW1nL3Byb2ZpbGUvcHJvZmlsZS5qcGcnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3NldHRpbmdzJyxcbiAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAncHJvZmlsZS1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlU3JjOiAnL2ltZy9pY29ucy9zZXR0aW5ncy5zdmcnLFxuICAgICAgICAgICAgICAgICAgICBsaW5rSW1hZ2VDbGFzczogJ3Byb2ZpbGUtbGlua19faW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBsaW5rSW1hZ2VXaWR0aDogJzI0cHgnLFxuICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9Cd0LDRgdGC0YDQvtC50LrQuCcsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0Q2xhc3M6ICdwcm9maWxlLWxpbmtfX3RleHQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRUeXBlOiBEcm9wZG93bkJ1dHRvbkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHNpZ25Jbjoge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICBkYXRhQWN0aW9uOiAnc2lnbkluJyxcbiAgICAgICAgICAgIGxpbmtIcmVmOiAnL3NpZ25JbicsXG4gICAgICAgICAgICBsaW5rQ2xhc3M6ICdoZWFkZXJfX3NpZ25Jbi1saW5rJyxcbiAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvaWNvbnMvY2lyY2xlLXVzZXIuc3ZnJyxcbiAgICAgICAgICAgIGxpbmtJbWFnZVdpZHRoOiAnMzBweCcsXG4gICAgICAgICAgICBsaW5rVGV4dDogJ9CS0L7QudGC0LgnLFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50LFxuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZGVyRGF0YTtcbiIsIi8qKlxuICog0JHQsNC30L7QstGL0Lkg0LrQu9Cw0YHRgSDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQutC+0LzQv9C+0L3QtdC90YLQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICogQGNsYXNzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y9cbiAqL1xuY2xhc3MgSVZpZXcge1xuICAgIC8qKlxuICAgICAqINCg0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0LLQuNC00LBcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBwYXJlbnQ7XG4gICAgLyoqXG4gICAgICog0JrQvtGA0L3QtdCy0L7QuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0LLQuNC00LBcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBlbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUsIHRvcEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGVtcGxhdGUsICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKHRvcEVsZW1lbnQpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW4gbm90IGZpbmQgZWxlbWVudCBmcm9tIHRlbXBsYXRlIScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4INCy0LjQtNCwXG4gICAgICogQG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQutGA0YvRgtC40Y8g0LLQuNC00LBcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgSVZpZXc7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IE1haW5UZW1wbGF0ZSBmcm9tICcuL01haW5WaWV3Lmhicyc7XG5pbXBvcnQgJy4vTWFpblZpZXcuY3NzJztcbmltcG9ydCBDYXJvdXNlbFZpZXcgZnJvbSBcIi4uL0Nhcm91c2VsVmlldy9DYXJvdXNlbFZpZXdcIjtcbmNsYXNzIE1haW5WaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIGNhcm91c2VsVmlldztcbiAgICBhcnRpY2xlOyAvLyBUT0RPIGhvdyB0byB1cGRhdGUgY29udGVudCBub3QgcmVuZGVyIGFsbCBwYWdlXG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgTWFpblRlbXBsYXRlKHt9KSwgJy5jYXRlZ29yaWVzJyk7XG4gICAgICAgIHRoaXMuYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgdGhpcy5hcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ25ld3MnKTtcbiAgICAgICAgdGhpcy5jYXJvdXNlbFZpZXcgPSBuZXcgQ2Fyb3VzZWxWaWV3KHRoaXMuYXJ0aWNsZSk7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWxWaWV3LnNob3coKTtcbiAgICB9XG4gICAgO1xuICAgIGZpbGxTZWxlY3Rpb25zKHNlbGVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaW5uZXJIVE1MID0gTWFpblRlbXBsYXRlKHsgc2VsZWN0aW9uczogc2VsZWN0aW9ucyB9KTsgLy8gVE9ETyBob3cgdG8gdXBkYXRlIGNvbnRlbnQgbm90IHJlbmRlciBhbGwgcGFnZVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpO1xuICAgICAgICB0aGlzLnBhcmVudC5wcmVwZW5kKHRoaXMuYXJ0aWNsZSk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNhdGVnb3J5X19jb250YWluZXJfX2l0ZW0taW1hZ2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBNYWluVmlldztcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgTW9kYWxSaWdodFRlbXBsYXRlIGZyb20gJy4vTW9kYWxSaWdodFZpZXcuaGJzJztcbmltcG9ydCBNb2RhbFJpZ2h0RGF0YSBmcm9tICcuL01vZGFsUmlnaHRWaWV3Q29uZmlnJztcbmltcG9ydCAnLi9Nb2RhbFJpZ2h0Vmlldy5jc3MnO1xuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSAnLi4vU2lnbkluVmlldy9TaWduSW5WaWV3JztcbmltcG9ydCBTaWduVXBWaWV3IGZyb20gJy4uL1NpZ25VcFZpZXcvU2lnblVwVmlldyc7XG4vKipcbiAqINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L/RgNCw0LLQvtCz0L4g0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcbiAqIEBjYXRlZ29yeSBNb2RhbFJpZ2h0XG4gKiBAZXh0ZW5kcyB7SVZpZXd9XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC/0YDQsNCy0L7Qs9C+INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXG4gKi9cbmNsYXNzIE1vZGFsUmlnaHRWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIG1vZGFsQm9keTtcbiAgICBjdXJyZW50VmlldztcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBNb2RhbFJpZ2h0VGVtcGxhdGUoeyB0aXRsZTogTW9kYWxSaWdodERhdGEudGl0bGUgfSksICcuanMtbW9kYWxfX2FyZWEnKTtcbiAgICAgICAgdGhpcy5tb2RhbEJvZHkgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsX19ib2R5Jyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBudWxsO1xuICAgIH1cbiAgICA7XG4gICAgc2V0U2lnbkluVmlldygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG5ldyBTaWduSW5WaWV3KHRoaXMubW9kYWxCb2R5KTtcbiAgICB9XG4gICAgO1xuICAgIHNldFNpZ25VcFZpZXcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBuZXcgU2lnblVwVmlldyh0aGlzLm1vZGFsQm9keSk7XG4gICAgfVxuICAgIDtcbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tcmlnaHQtLW9wZW4nKTtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLXJpZ2h0LS1vcGVuJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG51bGw7XG4gICAgICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNGPINC90LDQttCw0YLQuNGPINC90LBcbiAgICAgKiBAcGFyYW0gIHthbnl9IGxpc3RlbmVyIC0gQ2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsUmlnaHRWaWV3O1xuIiwiO1xuY29uc3QgTW9kYWxSaWdodERhdGEgPSB7XG4gICAgdGl0bGU6ICfQktGF0L7QtCDQuNC70Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjycsXG4gICAgLy8gc2lnbkluVmlldzogU2lnbkluVmlldyxcbiAgICAvLyBzaWduVXBWaWV3OiBTaWduVXBWaWV3LFxuICAgIC8vIHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEsXG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxSaWdodERhdGE7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IE5vdEZvdW5kVGVtcGxhdGUgZnJvbSAnLi9Ob3RGb3VuZFZpZXcuaGJzJztcbmltcG9ydCAnLi9Ob3RGb3VuZFZpZXcuY3NzJztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9CdXR0b25Db21wb25lbnQvQnV0dG9uQ29tcG9uZW50JztcbmNsYXNzIE5vdEZvdW5kVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBob21lQnV0dG9uO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIE5vdEZvdW5kVGVtcGxhdGUoe30pLCAnLnNwYWNlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3BhY2VfX2Vycm9yJyk7XG4gICAgICAgIHRoaXMuaG9tZUJ1dHRvbiA9IG5ldyBCdXR0b25Db21wb25lbnQoY29udGFpbmVyLCAnJywgJycsIHsgY2xhc3NOYW1lOiAnaG9tZS1idXR0b24nLCB0ZXh0OiAn0JLQtdGA0L3Rg9GC0YzRgdGPINC90LAg0LPQu9Cw0LLQvdGD0Y4nIH0pO1xuICAgICAgICB0aGlzLmhvbWVCdXR0b24uc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZEhvbWVCdXR0b25DbGljayhsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmhvbWVCdXR0b24uYmluZENsaWNrRXZlbnQobGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kVmlldztcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgUGVyc29uVGVtcGxhdGUgZnJvbSAnLi9QZXJzb25WaWV3Lmhicyc7XG5pbXBvcnQgJy4vUGVyc29uVmlldy5jc3MnO1xuY2xhc3MgUGVyc29uVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBQZXJzb25UZW1wbGF0ZSh7fSksICcucGVyc29uJyk7XG4gICAgfVxuICAgIDtcbiAgICBmaWxsUGVyc29uKGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFBlcnNvblRlbXBsYXRlKGRhdGEpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFBlcnNvblZpZXc7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IFBsYXllclRlbXBsYXRlIGZyb20gJy4vUGxheWVyVmlldy5oYnMnO1xuaW1wb3J0ICcuL1BsYXllclZpZXcuY3NzJztcbmltcG9ydCBMaW5rQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50JztcbmltcG9ydCBCYXJDb21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9CYXJDb21wb25lbnQvQmFyQ29tcG9uZW50JztcbmltcG9ydCBQbGF5ZXJEYXRhIGZyb20gXCIuL1BsYXllclZpZXdDb25maWdcIjtcbmNsYXNzIFBsYXllclZpZXcgZXh0ZW5kcyBJVmlldyB7XG4gICAgdmlkZW87XG4gICAgdmlkZW9QYW5lbDtcbiAgICB2aWRlb0JhcjtcbiAgICB2b2x1bWVDb250YWluZXI7XG4gICAgdm9sdW1lQmFyO1xuICAgIHBsYXlTdG9wQ29udGFpbmVyO1xuICAgIHBsYXlCdXR0b247XG4gICAgc3RvcEJ1dHRvbjtcbiAgICBtdXRlVW5tdXRlQ29udGFpbmVyO1xuICAgIG11dGVCdXR0b247XG4gICAgdW5tdXRlQnV0dG9uO1xuICAgIHRpbWU7XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgUGxheWVyVGVtcGxhdGUoe30pLCAnI2Z1bGxzY3JlZW4tbW9kYWwnKTtcbiAgICAgICAgdGhpcy52aWRlbyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpO1xuICAgICAgICB0aGlzLnZpZGVvUGFuZWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvX19wYW5lbCcpO1xuICAgICAgICB0aGlzLnZpZGVvUGFuZWwucHJlcGVuZCh0aGlzLnJlbmRlclZpZGVvQmFyKCkpO1xuICAgICAgICB0aGlzLnJlbmRlclZvbHVtZUJhcigpO1xuICAgICAgICB0aGlzLmluaXRQbGF5QnV0dG9ucygpO1xuICAgICAgICB0aGlzLnN0b3BCdXR0b24uc2hvdygpO1xuICAgICAgICB0aGlzLmluaXRWb2x1bWVCdXR0b25zKCk7XG4gICAgICAgIHRoaXMudW5tdXRlQnV0dG9uLnNob3coKTtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fZHVyYXRpb24tdGltZScpO1xuICAgIH1cbiAgICA7XG4gICAgaW5pdFBsYXlCdXR0b25zKCkge1xuICAgICAgICB0aGlzLnBsYXlTdG9wQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fcGxheS1idXR0b24nKTtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uID0gbmV3IExpbmtDb21wb25lbnQodGhpcy5wbGF5U3RvcENvbnRhaW5lciwgJycsICcnLCBQbGF5ZXJEYXRhLnBsYXlCdXR0b24pO1xuICAgICAgICB0aGlzLnN0b3BCdXR0b24gPSBuZXcgTGlua0NvbXBvbmVudCh0aGlzLnBsYXlTdG9wQ29udGFpbmVyLCAnJywgJycsIFBsYXllckRhdGEuc3RvcEJ1dHRvbik7XG4gICAgfVxuICAgIDtcbiAgICBpbml0Vm9sdW1lQnV0dG9ucygpIHtcbiAgICAgICAgdGhpcy5tdXRlVW5tdXRlQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fdm9sdW1lJyk7XG4gICAgICAgIHRoaXMubXV0ZUJ1dHRvbiA9IG5ldyBMaW5rQ29tcG9uZW50KHRoaXMubXV0ZVVubXV0ZUNvbnRhaW5lciwgJycsICcnLCBQbGF5ZXJEYXRhLm11dGVWb2x1bWUpO1xuICAgICAgICB0aGlzLnVubXV0ZUJ1dHRvbiA9IG5ldyBMaW5rQ29tcG9uZW50KHRoaXMubXV0ZVVubXV0ZUNvbnRhaW5lciwgJycsICcnLCBQbGF5ZXJEYXRhLnVubXV0ZVZvbHVtZSk7XG4gICAgfVxuICAgIDtcbiAgICB0b2dnbGVWaWRlb1N0YXR1cyhpc1BsYXkpIHtcbiAgICAgICAgaWYgKGlzUGxheSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BCdXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5QnV0dG9uLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgdG9nZ2xlVm9sdW1lU3RhdHVzKGlzTXV0ZSkge1xuICAgICAgICBpZiAoaXNNdXRlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMubXV0ZUJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm11dGVCdXR0b24uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVubXV0ZUJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tdXRlQnV0dG9uLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgcmVuZGVyVmlkZW9CYXIoKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnZpZGVvQmFyID0gbmV3IEJhckNvbXBvbmVudChkaXYsICcnLCAnJywgeyBiYXJDbGFzczogJ3ZpZGVvX19iYXInIH0pO1xuICAgICAgICB0aGlzLnZpZGVvQmFyLnNob3coKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgO1xuICAgIHJlbmRlclZvbHVtZUJhcigpIHtcbiAgICAgICAgdGhpcy52b2x1bWVDb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvX19pY29uJyk/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMudm9sdW1lQmFyID0gbmV3IEJhckNvbXBvbmVudCh0aGlzLnZvbHVtZUNvbnRhaW5lciwgJycsICcnLCB7IGJhckNsYXNzOiAndmlkZW9fX3ZvbHVtZS1iYXInIH0pO1xuICAgICAgICB0aGlzLnZvbHVtZUJhci5zaG93KCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGxheWVyVmlldztcbiIsImNvbnN0IFBsYXllckRhdGEgPSB7XG4gICAgcGxheUJ1dHRvbjoge1xuICAgICAgICBsaW5rSW1hZ2VTcmM6ICcvaW1nL2ljb25zL3BsYXllci9wbGF5LWNpcmNsZS5zdmcnLFxuICAgICAgICBsaW5rSW1hZ2VXaWR0aDogJzMycHgnLFxuICAgIH0sXG4gICAgc3RvcEJ1dHRvbjoge1xuICAgICAgICBsaW5rSW1hZ2VTcmM6ICcvaW1nL2ljb25zL3BsYXllci9wYXVzZS1jaXJjbGUuc3ZnJyxcbiAgICAgICAgbGlua0ltYWdlV2lkdGg6ICczMnB4JyxcbiAgICB9LFxuICAgIG11dGVWb2x1bWU6IHtcbiAgICAgICAgbGlua0ltYWdlU3JjOiAnL2ltZy9pY29ucy9wbGF5ZXIvdm9sdW1lLW11dGUuc3ZnJyxcbiAgICAgICAgbGlua0ltYWdlV2lkdGg6ICczMnB4JyxcbiAgICB9LFxuICAgIHVubXV0ZVZvbHVtZToge1xuICAgICAgICBsaW5rSW1hZ2VTcmM6ICcvaW1nL2ljb25zL3BsYXllci92b2x1bWUtdXAuc3ZnJyxcbiAgICAgICAgbGlua0ltYWdlV2lkdGg6ICczMnB4JyxcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUGxheWVyRGF0YTtcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgU2V0dGluZ3NUZW1wbGF0ZSBmcm9tICcuL1NldHRpbmdzVmlldy5oYnMnO1xuaW1wb3J0IFNldHRpbmdzRGF0YSBmcm9tICcuL1NldHRpbmdzVmlld0NvbmZpZyc7XG5pbXBvcnQgJy4vU2V0dGluZ3NWaWV3LmNzcyc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0Zvcm1Db21wb25lbnQvRm9ybUNvbXBvbmVudCc7XG5jbGFzcyBTZXR0aW5nc1ZpZXcgZXh0ZW5kcyBJVmlldyB7XG4gICAgbGVmdE1lbnVDb250YWluZXI7XG4gICAgc2V0dGluZ3NGb3JtQ29udGFpbmVyO1xuICAgIGxlZnRNZW51O1xuICAgIGN1cnJlbnRBY3RpdmVJdGVtO1xuICAgIGZvcm07XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgU2V0dGluZ3NUZW1wbGF0ZShTZXR0aW5nc0RhdGEpLCAnbWFpbicpO1xuICAgICAgICB0aGlzLmxlZnRNZW51Q29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZXR0aW5nc19fbGVmdC1tZW51LWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnNldHRpbmdzRm9ybUNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2V0dGluZ3NfX2Zvcm0nKTtcbiAgICAgICAgdGhpcy5sZWZ0TWVudSA9IChuZXcgU2V0dGluZ3NEYXRhLmxlZnRNZW51LmNvbXBvbmVudFR5cGUodGhpcy5sZWZ0TWVudUNvbnRhaW5lciwgJycsICcnLCBTZXR0aW5nc0RhdGEubGVmdE1lbnUuY29tcG9uZW50RGF0YSkpO1xuICAgICAgICB0aGlzLmxlZnRNZW51LnNob3coKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtQ29tcG9uZW50KHRoaXMuc2V0dGluZ3NGb3JtQ29udGFpbmVyLCAnJywgJycsIFNldHRpbmdzRGF0YS5mb3JtRGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybS5zaG93KCk7XG4gICAgfVxuICAgIDtcbiAgICBjaGFuZ2VBY3RpdmVMZWZ0TWVudUl0ZW0oaHJlZikge1xuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IHRoaXMubGVmdE1lbnUuZ2V0RWxlbWVudDtcbiAgICAgICAgbGlzdEVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIke3RoaXMuY3VycmVudEFjdGl2ZUl0ZW19XCJdYCk/LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHRpbmdzLWxlZnQtbWVudV9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZUl0ZW0gPSBocmVmO1xuICAgICAgICBsaXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbaHJlZj1cIiR7aHJlZn1cIl1gKT8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MtbGVmdC1tZW51X19pdGVtLS1hY3RpdmUnKTtcbiAgICB9XG4gICAgO1xuICAgIHNob3cob3B0cykge1xuICAgICAgICBpZiAoIW9wdHMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZm9ybS5zZXREYXRhVG9GaWVsZHMoW3sgaWQ6ICdlbWFpbCcsIHZhbHVlOiBvcHRzLnVzZXIuZW1haWwgfV0pO1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NWaWV3O1xuIiwiaW1wb3J0IExpc3RDb21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9MaXN0Q29tcG9uZW50L0xpc3RDb21wb25lbnQnO1xuaW1wb3J0IExpbmtDb21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9MaW5rQ29tcG9uZW50L0xpbmtDb21wb25lbnQnO1xuY29uc3QgU2V0dGluZ3NEYXRhID0ge1xuICAgIHRpdGxlOiAn0J3QsNGB0YLRgNC+0LnQutC4JyxcbiAgICBkZXNjcmlwdGlvbjogJ9Ce0YHRgtCw0LLRjNGC0LUg0LrQvtC90YLQsNC60YLQvdGL0LUg0LTQsNC90L3Ri9C1INC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0YPQstC10LTQvtC80LvQtdC90LjQuSDQvtGCINGB0LXRgNCy0LjRgdCwINC4INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Y8g0YHQviDRgdC70YPQttCx0L7QuSDQv9C+0LTQtNC10YDQttC60LguJyxcbiAgICBmb3JtVGl0bGU6ICfQmtC+0L3RgtCw0LrRgtGLJyxcbiAgICBsZWZ0TWVudToge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICBsaXN0Q2xhc3M6ICdzZXR0aW5nc19fbGVmdC1tZW51JyxcbiAgICAgICAgICAgIGl0ZW1DbGFzczogJ3NldHRpbmdzLWxlZnQtbWVudV9faXRlbScsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvc2V0dGluZ3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnc2V0dGluZ3MtbGVmdC1tZW51LWl0ZW1fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQntGB0L3QvtCy0L3Ri9C1JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9zZXR0aW5ncy9wYXltZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdzZXR0aW5ncy1sZWZ0LW1lbnUtaXRlbV9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9Ce0L/Qu9Cw0YLQsCDRg9GB0LvRg9CzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9zZXR0aW5ncy9zdWJzY3JpcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ3NldHRpbmdzLWxlZnQtbWVudS1pdGVtX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0J/QvtC00L/QuNGB0LrQuCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvbG9nb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ3NldHRpbmdzLWxlZnQtbWVudS1pdGVtX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvaWNvbnMvbG9nb3V0LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSW1hZ2VDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSW1hZ2VXaWR0aDogMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9CS0YvQudGC0LgnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRUeXBlOiBMaXN0Q29tcG9uZW50LFxuICAgIH0sXG4gICAgZm9ybURhdGE6IHtcbiAgICAgICAgZm9ybUlkOiAnc2V0dGluZ3NfX2Zvcm0nLFxuICAgICAgICBlbmN0eXBlOiB0cnVlLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIGlkOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndmFzaWxpeS5wdXBraW5AbWFpbC5ydScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICBpZDogJ2F2YXRhcicsXG4gICAgICAgICAgICAgICAgYWNjZXB0OiAnaW1hZ2UvanBlZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdhdmF0YXItY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIGNoZWNrYm94VGV4dDogJ9Cj0LTQsNC70LjRgtGMINCw0LLQsNGC0LDRgNC60YM/JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ2lucHV0LWNoZWNrYm94J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGlkOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnKioqKioqKionLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGlkOiAncmVwZWF0LXBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJyoqKioqKioqJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBpZDogJ3NhdmUtc3VibWl0LWJ0bicsXG4gICAgICAgICAgICB0ZXh0OiAn0KHQvtGF0YDQsNC90LjRgtGMJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NhdmUtYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICBsaW5rczogW10sXG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzRGF0YTtcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgU2lnbkluVGVtcGxhdGUgZnJvbSAnLi9TaWduSW5WaWV3Lmhicyc7XG5pbXBvcnQgU2lnbkluRGF0YSBmcm9tICcuL1NpZ25JblZpZXdDb25maWcnO1xuaW1wb3J0ICcuL1NpZ25JblZpZXcuY3NzJztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRm9ybUNvbXBvbmVudC9Gb3JtQ29tcG9uZW50JztcbmNsYXNzIFNpZ25JblZpZXcgZXh0ZW5kcyBJVmlldyB7XG4gICAgZm9ybTtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBTaWduSW5UZW1wbGF0ZSh7IHRpdGxlOiBTaWduSW5EYXRhLnRpdGxlLCBkZXNjcmlwdGlvbjogU2lnbkluRGF0YS5kZXNjcmlwdGlvbiB9KSwgJy5qcy1zaWduSW4nKTtcbiAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Db21wb25lbnQodGhpcy5lbGVtZW50LCAnJywgJycsIFNpZ25JbkRhdGEuZm9ybURhdGEpO1xuICAgICAgICB0aGlzLmZvcm0uc2hvdygpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBTaWduSW5WaWV3O1xuIiwiO1xuY29uc3QgU2lnbkluRGF0YSA9IHtcbiAgICB0aXRsZTogJ9CS0L7QudC00LjRgtC1INC40LvQuCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMJyxcbiAgICBkZXNjcmlwdGlvbjogJ9Cn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDRgdC10YDQsNCy0LjRgdC+0LwgRmlsbWl1bScsXG4gICAgZm9ybURhdGE6IHtcbiAgICAgICAgZm9ybUlkOiAnc2lnbkluX19mb3JtJyxcbiAgICAgICAgaW5wdXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBpZDogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3Zhc2lsaXkucHVwa2luQG1haWwucnUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGlkOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnKioqKioqKionLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBpZDogJ3NpZ25Jbi1zdWJtaXQtYnRuJyxcbiAgICAgICAgICAgIHRleHQ6ICfQktC+0LnRgtC4JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NpZ25Jbi1idXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdsaW5rLXNpZ25VcCcsXG4gICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvc2lnblVwJyxcbiAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9Cd0LXRgiDQsNC60LrQsNGD0L3RgtCwPyDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8nLFxuICAgICAgICAgICAgICAgIGxpbmtUZXh0Q2xhc3M6ICdzaWduVXAtbGluaydcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBTaWduSW5EYXRhO1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBTaWduVXBUZW1wbGF0ZSBmcm9tICcuL1NpZ25VcFZpZXcuaGJzJztcbmltcG9ydCBTaWduVXBEYXRhIGZyb20gJy4vU2lnblVwVmlld0NvbmZpZyc7XG5pbXBvcnQgJy4vU2lnblVwVmlldy5jc3MnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L0Zvcm1Db21wb25lbnQnO1xuY2xhc3MgU2lnblVwVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBmb3JtO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIFNpZ25VcFRlbXBsYXRlKHsgdGl0bGU6IFNpZ25VcERhdGEudGl0bGUsIGRlc2NyaXB0aW9uOiBTaWduVXBEYXRhLmRlc2NyaXB0aW9uIH0pLCAnLmpzLXNpZ25VcCcpO1xuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUNvbXBvbmVudCh0aGlzLmVsZW1lbnQsICcnLCAnJywgU2lnblVwRGF0YS5mb3JtRGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybS5zaG93KCk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFZpZXc7XG4iLCI7XG5jb25zdCBTaWduVXBEYXRhID0ge1xuICAgIHRpdGxlOiAn0JLQvtC50LTQuNGC0LUg0LjQu9C4INC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0YwnLFxuICAgIGRlc2NyaXB0aW9uOiAn0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINGB0LXRgNCw0LLQuNGB0L7QvCBGaWxtaXVtJyxcbiAgICBmb3JtRGF0YToge1xuICAgICAgICBmb3JtSWQ6ICdzaWduVXBfX2Zvcm0nLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIGlkOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndmFzaWxpeS5wdXBraW5AbWFpbC5ydScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcqKioqKioqKicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdyZXBlYXQtcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnKioqKioqKionLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBpZDogJ3NpZ25VcC1zdWJtaXQtYnRuJyxcbiAgICAgICAgICAgIHRleHQ6ICfQktC+0LnRgtC4JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NpZ25VcC1idXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdsaW5rLXNpZ25JbicsXG4gICAgICAgICAgICAgICAgbGlua0hyZWY6ICcvc2lnbkluJyxcbiAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9CV0YHRgtGMINCw0LrQutCw0YPQvdGCPyDQktC+0LnRgtC4JyxcbiAgICAgICAgICAgICAgICBsaW5rVGV4dENsYXNzOiAnc2lnbkluLWxpbmsnXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnblVwRGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9BcHAvQXBwJztcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5ydW4obG9jYXRpb24ucGF0aG5hbWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
