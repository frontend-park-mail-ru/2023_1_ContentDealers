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
    + " js-bar\">\r\n    <div class=\"bar w-100\">\r\n        <div class=\"bar__full\"></div>\r\n        <div class=\"bar__load\">\r\n            <div class=\"bar-load__progress\"></div>\r\n        </div>\r\n        <div class=\"bar__current\"></div>\r\n<!--        <div class=\"bar__helper\">1.35</div>-->\r\n<!--        <div class=\"bar__current-circle\"></div>-->\r\n        <div id=\"bar__helper\"></div>\r\n        <div id=\"bar__current-circle\"></div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.hbs":
/*!************************************************************!*\
  !*** ./src/App/Components/BaseComponent/BaseComponent.hbs ***!
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

  return " data-action=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dataAction") || (depth0 != null ? lookupProperty(depth0,"dataAction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dataAction","hash":{},"data":data,"loc":{"start":{"line":1,"column":126},"end":{"line":1,"column":142}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
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
},"7":function(container,depth0,helpers,partials,data) {
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
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":3},"end":{"line":1,"column":35}}})) != null ? stack1 : "")
    + "href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"linkHref") || (depth0 != null ? lookupProperty(depth0,"linkHref") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkHref","hash":{},"data":data,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":55}}}) : helper)))
    + "\" class=\"link js-link "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkClass") || (depth0 != null ? lookupProperty(depth0,"linkClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkClass","hash":{},"data":data,"loc":{"start":{"line":1,"column":77},"end":{"line":1,"column":92}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dataAction") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":94},"end":{"line":1,"column":151}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"linkImageSrc") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"linkText") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
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
    return "<ul class=\"list js-list "
    + container.escapeExpression(container.lambda(depth0, depth0))
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
    + "\"></video>\r\n                        </div>\r\n\r\n                        <div class=\"video__title-container\">\r\n                            <div class=\"video__title-align\">\r\n                                <div class=\"video__title\">\r\n                                    <div class=\"video-title__text\">Петровы в гриппе</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__close-button\">\r\n                                <!-- Gradient button (upper to) -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__bottom-filter\"></div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"video__panel\">\r\n                                <div>\r\n<!--                                    <div class=\"video__bar\">-->\r\n<!--                                        <div class=\"video__bar-padding w-100\">-->\r\n<!--                                            <div class=\"full-bar\"></div>-->\r\n<!--                                            <div class=\"load-bar\">-->\r\n<!--                                                <div class=\"load-bar__progress\"></div>-->\r\n<!--                                            </div>-->\r\n<!--                                            <div class=\"current-bar\"></div>-->\r\n<!--                                            <div>-->\r\n<!--                                                <div class=\"bar-helper\">1.35</div>-->\r\n<!--                                            </div>-->\r\n<!--                                            <div>-->\r\n<!--                                                <button class=\"current-bar-circle\"></button>-->\r\n<!--                                            </div>-->\r\n<!--                                        </div>-->\r\n<!--                                    </div>-->\r\n                                </div>\r\n                                <div class=\"video__bottom-container\">\r\n                                    <div class=\"flex-center\">\r\n                                        <div>\r\n                                            <div class=\"video__play-button\">\r\n                                                <!-- Gradient button (upper to) -->\r\n                                            </div>\r\n                                        </div>\r\n                                        <div>\r\n                                            <div class=\"video__duration-time\">00:06 / 02:37</div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"flex-center\">\r\n                                        <div class=\"ml-5 mr-24\"> <!-- TODO div with title in -->\r\n                                            <div title=\"Воспроизводится в HD качестве\" class=\"video__quality\">\r\n                                                <img src=\"/img/icons/player/hd.svg\" alt=\"Воспроизводится в HD качестве\">\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"mr-24\">\r\n                                            <div class=\"flex-center\">\r\n                                                <div class=\"video__icon\"> <!-- TODO div with title in -->\r\n                                                    <div title=\"Выключить / Включить звук\" class=\"video__icon-fill\">\r\n                                                        <img src=\"/img/icons/player/volume-up.svg\" alt=\"Выключить / Включить звук\">\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <div class=\"video__bar-padding video__volume-bar\">\r\n                                                    <div class=\"full-bar\"></div>\r\n                                                    <div class=\"load-bar\"></div>\r\n                                                    <div class=\"current-bar\"></div>\r\n                                                    <div>\r\n                                                        <div class=\"bar-helper\">46%</div>\r\n                                                    </div>\r\n                                                    <div>\r\n                                                        <button class=\"current-bar-circle\"></button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div>\r\n                                            <div class=\"video__icon\">\r\n                                                <div title=\"Во весь экран\" class=\"video__icon-fill\">\r\n                                                    <img src=\"/img/icons/player/fullscreen.svg\" alt=\"Во весь экран\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
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
  !*** ./src/App/Components/BaseComponent/BaseComponent.css ***!
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
/* harmony import */ var _Components_BaseComponent_BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/BaseComponent/BaseComponent */ "./src/App/Components/BaseComponent/BaseComponent.ts");
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
    isDragging;
    fullBar;
    loadBar;
    loadProgressBar;
    currentBar;
    barHelper;
    currentBarCircle;
    // private maxValue: number;
    // private postscript: string;
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
        this.isDragging = false;
        // this.maxValue = 2.37;
        // this.postscript = '';
        this.fullBar = this.element.querySelector('.bar__full');
        this.loadBar = this.element.querySelector('.bar__load');
        this.loadProgressBar = this.element.querySelector('.bar-load__progress');
        this.currentBar = this.element.querySelector('.bar__current');
        this.initHiddenElements();
        // this.addEventListeners();
    }
    ;
    initHiddenElements() {
        const barHelperDiv = this.element.querySelector('#bar__helper');
        this.barHelper = new _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__["default"](barHelperDiv, '', '', { class: 'bar__helper' });
        const currentBarCircleDiv = this.element.querySelector('#bar__current-circle');
        this.currentBarCircle = new _DivComponent_DivComponent__WEBPACK_IMPORTED_MODULE_3__["default"](currentBarCircleDiv, '', '', { class: 'bar__current-circle' });
    }
    ;
    //
    // private updateProgressBar(e: Event): void {
    //     let percentage: number = 0;
    //     if (e instanceof MouseEvent) {
    //         percentage = this.calculatePercentage(e.clientX);
    //     } else {
    //         percentage = this.calculatePercentage((<TouchEventWithTarget>e).touches[0].clientX);
    //     }
    //
    //     this.currentBar.style.width = `${percentage}%`;
    //     // this.currentBarCircle.div.style.left = `${percentage}%`;
    // };
    //
    // private calculatePercentage(cursorX: number): number {
    //     const barWidth = this.fullBar.offsetWidth;
    //     const clickOffset = cursorX - this.fullBar.getBoundingClientRect().left;
    //     return (clickOffset / barWidth) * 100;
    // }
    //
    // private onMouseDown(e: MouseEvent): void {
    //     // this.isDragging = true;
    //     // const percentage = this.calculatePercentage(e.clientX);
    //     //
    //     // this.currentBarCircle.div.style.left = `${percentage}%`;
    //     // this.currentBar.style.width = `${percentage}%`;
    //
    //     // console.log('onMouseDown')
    //     this.isDragging = true;
    //     this.updateProgressBar(e);
    // };
    //
    // private onMouseMove(e: MouseEvent): void {
    //     console.log('onMouseMove')
    //     const cursorX = e.clientX;
    //     const percentage = this.calculatePercentage(cursorX);
    //
    //     this.barHelper.div.style.left = `${percentage}%`;
    //     this.barHelper.div.innerText = (percentage / 100 * this.maxValue).toFixed(2); // TODO change trailer time
    //     this.barHelper.show();
    //
    //     this.currentBarCircle.show();
    //
    //     if (this.isDragging) {
    //         this.updateProgressBar(e);
    //     }
    // };
    //
    // private onMouseUp(e: MouseEvent): void {
    //     console.log('onMouseUp')
    //     this.isDragging = false;
    // };
    //
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
    // private addEventListeners(): void {
    //     this.element.addEventListener("mousedown", (e) => this.onMouseDown(e));
    //     this.element.addEventListener("mousemove", (e) => this.onMouseMove(e));
    //     this.element.addEventListener("mouseup", (e) => this.onMouseUp(e));
    //     this.element.addEventListener("mouseout", (e) => this.onMouseOut(e));
    //     this.element.addEventListener("touchstart", (e) => this.onTouchStart(e));
    //     this.element.addEventListener("touchmove", (e) => this.onTouchMove(e));
    //     this.element.addEventListener("touchend", (e) => this.onTouchEnd(e));
    // };
    //
    // private removeEventListeners(): void {
    //     this.element.removeEventListener("mousedown", (e) => this.onMouseDown(e));
    //     this.element.removeEventListener("mousemove", (e) => this.onMouseMove(e));
    //     this.element.removeEventListener("mouseup", (e) => this.onMouseUp(e));
    //     this.element.removeEventListener("mouseout", (e) => this.onMouseOut(e));
    //     this.element.removeEventListener("touchstart", (e) => this.onTouchStart(e));
    //     this.element.removeEventListener("touchmove", (e) => this.onTouchMove(e));
    //     this.element.removeEventListener("touchend", (e) => this.onTouchEnd(e));
    // };
    //     New Life
    bindMouseMoveEvent(listener) {
        this.element.addEventListener('mousemove', listener.bind(this));
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BarComponent);


/***/ }),

/***/ "./src/App/Components/BaseComponent/BaseComponent.ts":
/*!***********************************************************!*\
  !*** ./src/App/Components/BaseComponent/BaseComponent.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IComponent_IComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IComponent/IComponent */ "./src/App/Components/IComponent/IComponent.ts");
/* harmony import */ var _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseComponent.hbs */ "./src/App/Components/BaseComponent/BaseComponent.hbs");
/* harmony import */ var _BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BaseComponent_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseComponent.css */ "./src/App/Components/BaseComponent/BaseComponent.css");



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
        super(parent, _ListComponent_hbs__WEBPACK_IMPORTED_MODULE_1___default()(data.listClass), '.js-list');
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
                    // this.view.show();
                    // this.isMounted = true;
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
                    console.log('Clicked!');
                    console.log(this.trailerSrc);
                    if (this.trailerSrc) {
                        // this.playerController.setSrc(this.trailerSrc);
                    }
                    this.playerController.mountComponent();
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
            console.log('user-changed', user);
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



class MainController extends _IController_IController__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(view, model) {
        super(view, model);
        // this.view.bindClickEvent(this.handleClick.bind(this));
        _EventDispatcher_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('unmount-all', this.unmountComponent.bind(this));
    }
    ;
    async mountComponent() {
        if (!this.isMounted) {
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
        console.log('Person handleClick');
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
    videoTime;
    videoTimeMinutes;
    videoTimeSeconds;
    previousVolume;
    constructor(view) {
        super(view, _Models_IModel_IModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
        // this.videoTime = 0;
        // this.videoTimeMinutes = 0;
        // this.videoTimeSeconds = 0;
        // this.previousVolume = 0;
        //
        // this.initialVideo = this.initialVideo.bind(this);
        // this.toggleVideoStatus = this.toggleVideoStatus.bind(this);
        // this.stopVideo = this.stopVideo.bind(this);
        // this.mute = this.mute.bind(this);
        // this.setVideoVolume = this.setVideoVolume.bind(this);
        // this.updateTime = this.updateTime.bind(this);
        // this.setProgress = this.setProgress.bind(this);
        //
        // this.initialVideo();
        // this.addEventListeners();
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
            console.log('Settings controller', user);
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
        console.log('Click checkbox');
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
                console.log(this.view.form.inputs);
                console.log('validate');
                if (!this.validate()) {
                    console.log('return');
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
                    console.log('If file');
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 1');
                        this.view.form.findInputComponent('repeat-password').showErrorMsg('Нельзя удалить и поставить аватарку!');
                        return;
                    }
                    else {
                        console.log('Not checked 1');
                        formData.append('avatar', file);
                        this.model.avatarUpdate(formData)
                            .then(() => {
                            this.view.form.inputs.forEach((inputComponent) => {
                                inputComponent.hideErrorMsg();
                            });
                        })
                            .catch(({ msg }) => {
                            console.log(msg);
                            this.view.form.findInputComponent('avatar').showErrorMsg(msg);
                        });
                        return;
                    }
                }
                else {
                    console.log('Not file');
                    console.log(this.view.form.findInputComponent('avatar-checkbox').input.checked);
                    if (this.view.form.findInputComponent('avatar-checkbox').input.checked) {
                        console.log('If checked 2');
                        this.model.avatarDelete()
                            .then(() => {
                        })
                            .catch((errorMsg) => {
                        });
                        return;
                    }
                }
                console.log('userData', userData);
                console.log({ body: formData });
                this.model.updateUser(userData)
                    .then(() => {
                    this.view.form.inputs.forEach((inputComponent) => {
                        inputComponent.hideErrorMsg();
                    });
                })
                    .catch(({ msg }) => {
                    console.log('errorMsg', msg);
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
            console.log(signUpResponse);
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
        console.log('updateUser');
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
        console.log('avatarUpdate');
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
            console.log('profileResponse.responseBody.body.user', profileResponse.responseBody.body.user);
            this.currentUser = this.parseUser(profileResponse.responseBody.body.user);
            console.log('this.currentUser', this.currentUser);
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



class MainView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parent) {
        super(parent, _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '.categories');
    }
    ;
    fillSelections(selections) {
        this.element.innerHTML = _MainView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({ selections: selections });
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
/* harmony import */ var _Components_BarComponent_BarComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/BarComponent/BarComponent */ "./src/App/Components/BarComponent/BarComponent.ts");




class PlayerView extends _IView_IView__WEBPACK_IMPORTED_MODULE_0__["default"] {
    videoPanel;
    videoBar;
    video;
    playBtn;
    playBtnImg;
    stopBtn;
    progress;
    volumeBtnImg;
    progressVolume;
    time;
    constructor(parent) {
        super(parent, _PlayerView_hbs__WEBPACK_IMPORTED_MODULE_1___default()({}), '#fullscreen-modal');
        this.videoPanel = this.element.querySelector('.video__panel');
        this.videoPanel.prepend(this.renderVideoBar());
        // EventDispatcher.subscribe('video-bar-hover', this.videoBar.)
        // super(parent, PlayerTemplate({}), '.wrapper');
        // this.video = <HTMLVideoElement>this.element.querySelector('.video');
        //
        // this.playBtn = <HTMLButtonElement>this.element.querySelector('.controls__play');
        // this.playBtnImg = <HTMLImageElement>this.element.querySelector('.play__btn');
        // this.stopBtn = <HTMLButtonElement>this.element.querySelector('.controls__stop');
        //
        // this.progress = <HTMLProgressElement>this.element.querySelector('.progress');
        //
        // this.volumeBtnImg = <HTMLImageElement>this.element.querySelector('.volume__btn');
        // this.progressVolume = <HTMLInputElement>this.element.querySelector('.volume__progress');
        //
        // this.time = <HTMLDivElement>this.element.querySelector('.controls__time');
        // this.videoBar.
    }
    ;
    renderVideoBar() {
        const div = document.createElement('div');
        this.videoBar = new _Components_BarComponent_BarComponent__WEBPACK_IMPORTED_MODULE_3__["default"](div, '', '', { barClass: 'video__bar' });
        this.videoBar.show();
        return div;
    }
    ;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerView);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDekMxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUM1QixnQkFBZ0IsZ0RBQUc7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC9CYXNlQ29tcG9uZW50LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0J1dHRvbkNvbXBvbmVudC9CdXR0b25Db21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvRGl2Q29tcG9uZW50L0RpdkNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L0Zvcm1Db21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvSW5wdXRDb21wb25lbnQvSW5wdXRDb21wb25lbnQuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0xpc3RDb21wb25lbnQvTGlzdENvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvRmlsbVZpZXcvRmlsbVZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvTWFpblZpZXcvTWFpblZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL01vZGFsUmlnaHRWaWV3L01vZGFsUmlnaHRWaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Ob3RGb3VuZFZpZXcvTm90Rm91bmRWaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QZXJzb25WaWV3L1BlcnNvblZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BsYXllclZpZXcvUGxheWVyVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2V0dGluZ3NWaWV3L1NldHRpbmdzVmlldy5oYnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnbkluVmlldy9TaWduSW5WaWV3LmhicyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduVXBWaWV3L1NpZ25VcFZpZXcuaGJzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9lYWNoLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9pZi5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvZy5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL3dpdGguanMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaW50ZXJuYWwvY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9pbnRlcm5hbC93cmFwSGVscGVyLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0FwcC5jc3M/MDZlYSIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0JhckNvbXBvbmVudC9CYXJDb21wb25lbnQuY3NzPzQ3NWEiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CYXNlQ29tcG9uZW50L0Jhc2VDb21wb25lbnQuY3NzP2YxMDkiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CdXR0b25Db21wb25lbnQvQnV0dG9uQ29tcG9uZW50LmNzcz82MTk4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ3NzL0hlYWRlckFjdGlvbkxpc3QvSGVhZGVyQWN0aW9uTGlzdC5jc3M/ODM1NyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Nzcy9IZWFkZXJQcm9maWxlRHJvcGRvd24vSGVhZGVyUHJvZmlsZURyb3Bkb3duLmNzcz9mMmEyIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQ3NzL0hlYWRlclNpZ25Jbi9IZWFkZXJTaWduSW4uY3NzPzViYWEiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5jc3M/OGY2ZiIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Zvcm1Db21wb25lbnQvRm9ybUNvbXBvbmVudC5jc3M/N2Y1ZCIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0lucHV0Q29tcG9uZW50L0lucHV0Q29tcG9uZW50LmNzcz83NTA3Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50LmNzcz81OWE2Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlzdENvbXBvbmVudC9MaXN0Q29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50L1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50LmNzcz80NGU4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0ZpbG1WaWV3L0ZpbG1WaWV3LmNzcz80ZmQ4Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlldy5jc3M/MTc0OSIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9NYWluVmlldy9NYWluVmlldy5jc3M/ZmQ1MiIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Nb2RhbFJpZ2h0Vmlldy9Nb2RhbFJpZ2h0Vmlldy5jc3M/NTZiMiIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Ob3RGb3VuZFZpZXcvTm90Rm91bmRWaWV3LmNzcz84N2UwIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BlcnNvblZpZXcvUGVyc29uVmlldy5jc3M/YzYxZCIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QbGF5ZXJWaWV3L1BsYXllclZpZXcuY3NzPzNlNzUiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2V0dGluZ3NWaWV3L1NldHRpbmdzVmlldy5jc3M/NTU4YyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduSW5WaWV3L1NpZ25JblZpZXcuY3NzP2ZkNGQiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnblVwVmlldy9TaWduVXBWaWV3LmNzcz84YzY5Iiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0FqYXgvQWpheC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9BcHAudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9CYXJDb21wb25lbnQvQmFyQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC9CYXNlQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvQnV0dG9uQ29tcG9uZW50L0J1dHRvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0RpdkNvbXBvbmVudC9EaXZDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0Zvcm1Db21wb25lbnQvRm9ybUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0lDb21wb25lbnQvSUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db21wb25lbnRzL0lucHV0Q29tcG9uZW50L0lucHV0Q29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvTGlzdENvbXBvbmVudC9MaXN0Q29tcG9uZW50LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbXBvbmVudHMvVmVydGljYWxTcGFjZXJDb21wb25lbnQvVmVydGljYWxTcGFjZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29uZmlnL0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9GaWxtQ29udHJvbGxlci9GaWxtQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9IZWFkZXJDb250cm9sbGVyL0hlYWRlckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIvTWFpbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvTW9kYWxSaWdodENvbnRyb2xsZXIvTW9kYWxSaWdodENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvTm90Rm91bmRDb250cm9sbGVyL05vdEZvdW5kQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Db250cm9sbGVycy9QZXJzb25Db250cm9sbGVyL1BlcnNvbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvUGxheWVyQ29udHJvbGxlci9QbGF5ZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL1NldHRpbmdzQ29udHJvbGxlci9TZXR0aW5nc0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvQ29udHJvbGxlcnMvU2lnbkluQ29udHJvbGxlci9TaWduSW5Db250cm9sbGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL0NvbnRyb2xsZXJzL1NpZ25VcENvbnRyb2xsZXIvU2lnblVwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9FdmVudERpc3BhdGNoZXIvRXZlbnREaXNwYXRjaGVyLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL01vZGVscy9GaWxtTW9kZWwvRmlsbU1vZGVsLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL01vZGVscy9JTW9kZWwvSU1vZGVsLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL01vZGVscy9QZXJzb25Nb2RlbC9QZXJzb25Nb2RlbC50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Nb2RlbHMvU2VsZWN0aW9uTW9kZWwvU2VsZWN0aW9uTW9kZWwudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvTW9kZWxzL1VzZXJNb2RlbC9Vc2VyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvUm91dGVyL1JvdXRlci50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9Sb3V0ZXIvUm91dGVyUGF0aHMudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVXRpbHMvVmFsaWRhdG9ycy9WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVXRpbHMvVmFsaWRhdG9ycy9WYWxpZGF0b3JDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvRmlsbVZpZXcvRmlsbVZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvRmlsbVZpZXcvRmlsbVZpZXdDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvSGVhZGVyVmlldy9IZWFkZXJWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL0hlYWRlclZpZXcvSGVhZGVyVmlld0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9JVmlldy9JVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9NYWluVmlldy9NYWluVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Nb2RhbFJpZ2h0Vmlldy9Nb2RhbFJpZ2h0Vmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Nb2RhbFJpZ2h0Vmlldy9Nb2RhbFJpZ2h0Vmlld0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9Ob3RGb3VuZFZpZXcvTm90Rm91bmRWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1BlcnNvblZpZXcvUGVyc29uVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9QbGF5ZXJWaWV3L1BsYXllclZpZXcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2V0dGluZ3NWaWV3L1NldHRpbmdzVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TZXR0aW5nc1ZpZXcvU2V0dGluZ3NWaWV3Q29uZmlnLnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NpZ25JblZpZXcvU2lnbkluVmlldy50cyIsIndlYnBhY2s6Ly9maWxtaXVtLy4vc3JjL0FwcC9WaWV3cy9TaWduSW5WaWV3L1NpZ25JblZpZXdDb25maWcudHMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9BcHAvVmlld3MvU2lnblVwVmlldy9TaWduVXBWaWV3LnRzIiwid2VicGFjazovL2ZpbG1pdW0vLi9zcmMvQXBwL1ZpZXdzL1NpZ25VcFZpZXcvU2lnblVwVmlld0NvbmZpZy50cyIsIndlYnBhY2s6Ly9maWxtaXVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbG1pdW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlsbWl1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlsbWl1bS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZpbG1pdW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWxtaXVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlsbWl1bS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImJhckNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImJhckNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJiYXJDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyNn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIGpzLWJhclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJhciB3LTEwMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJfX2Z1bGxcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyX19sb2FkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXItbG9hZF9fcHJvZ3Jlc3NcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXJfX2N1cnJlbnRcXFwiPjwvZGl2PlxcclxcbjwhLS0gICAgICAgIDxkaXYgY2xhc3M9XFxcImJhcl9faGVscGVyXFxcIj4xLjM1PC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyX19jdXJyZW50LWNpcmNsZVxcXCI+PC9kaXY+LS0+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJiYXJfX2hlbHBlclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJiYXJfX2N1cnJlbnQtY2lyY2xlXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJyb290IGpzLXJvb3RcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXIganMtaGVhZGVyXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudCBqcy1jb250ZW50XFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyIGpzLWZvb3RlclxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJpZ2h0LW1vZGFsIGpzLXJpZ2h0LW1vZGFsXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwgbW9kYWwtLXJpZ2h0IGpzLW1vZGFsLS1yaWdodFxcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgaWQ9XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoyN30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjM1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBkYXRhLWFjdGlvbj1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkYXRhQWN0aW9uXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRhdGFBY3Rpb25cIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImRhdGFBY3Rpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjIzN30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjI1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwianMtYnV0dG9uIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVwcGVyQ2xhc3NcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidXBwZXJDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidXBwZXJDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MjJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjozOH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0NH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgY2xhc3M9XFxcImdyYWRpZW50LWJ1dHRvbiBncmFkaWVudC1idXR0b24tLWJsdWUgXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY2xhc3NOYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzTmFtZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY2xhc3NOYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo5MH0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjEwNX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiIG5vcm1hbC10ZXh0IHAtMTBcXFwiIHN0eWxlPVxcXCItLWNvb3JkLXk6IDQyLjhweDsgLS1kaWFtZXRlci1oaWdobGlnaHQ6IDI2NC4zMDhweDstLWNvb3JkLXg6IDcwLjMzNzVweDtcXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkYXRhQWN0aW9uXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjIwNX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjI2MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJncmFkaWVudC1idXR0b25fX2JvcmRlciBqcy1ncmFkaWVudC1idXR0b25fX2JvcmRlclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JhZGllbnQtYnV0dG9uX190ZXh0XFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0ZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjQ0fSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NTR9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyM319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0ZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRleHRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjI1fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzV9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIGRhdGEtYWN0aW9uPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRhdGFBY3Rpb25cIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZGF0YUFjdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiZGF0YUFjdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6NjZ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo4Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBqcy1kcm9wZG93blxcXCIgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRhdGFBY3Rpb25cIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzR9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo5MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bl9fYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImRyb3Bkb3duLWJ1dHRvbl9faW1hZ2VcXFwiIHNyYz1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJhdmF0YXJcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYXZhdGFyXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImF2YXRhclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NDl9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo2MX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPC9hPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bl9fY29udGVudCBqcy1kcm9wZG93bl9fY29udGVudFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50X19jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnQtY29udGFpbmVyX19pdGVtcyBqcy1kcm9wZG93bi1jb250ZW50LWNvbnRhaW5lcl9faXRlbXNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiIGVuY3R5cGU9XFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiIFwiO1xufSxcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxmb3JtIGlkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImZvcm1JZFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJmb3JtSWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZm9ybUlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxMH0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjIyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJmb3JtIGpzLWZvcm1cXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJlbmN0eXBlXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjQ1fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6OTl9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtX19jb250ZW50IGpzLWZvcm1fX2NvbnRlbnRcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtX19mb290ZXJcXFwiPjwvZGl2PlxcclxcbjwvZm9ybT5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiBhY2NlcHQ9XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiYWNjZXB0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFjY2VwdFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiYWNjZXB0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoxNDJ9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoxNTJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY2hlY2tib3hUZXh0XCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNoZWNrYm94VGV4dFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiY2hlY2tib3hUZXh0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjoyNn0sXCJlbmRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjQ0fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCIgXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImlucHV0LWZpZWxkIGpzLWlucHV0LWZpZWxkIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6Mzl9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo1MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInR5cGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidHlwZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MTd9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoyN319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBpZD1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjozM30sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjQxfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJwbGFjZWhvbGRlclwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJwbGFjZWhvbGRlclwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwicGxhY2Vob2xkZXJcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjU2fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NzN9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkX19pbnB1dCBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpbnB1dENsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlucHV0Q2xhc3NcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlucHV0Q2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjEwMX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjExN319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWNjZXB0XCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjExOX0sXCJlbmRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjE2MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgLz5cXHJcXG4gICAgXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlmXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNoZWNrYm94VGV4dFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NTJ9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgIDxkaXYgaWQ9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6MTN9LFwiZW5kXCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjoyMX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiLW1zZ1xcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkX19lcnJvci1tc2dcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIGlkPVxcXCJcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTh9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoyNn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgZGF0YS1hY3Rpb249XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZGF0YUFjdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkYXRhQWN0aW9uXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJkYXRhQWN0aW9uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxMjZ9LFwiZW5kXCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjoxNDJ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgPHNwYW4gY2xhc3M9XFxcImxpbmtfX2ltYWdlIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImxpbmtJbWFnZUNsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtJbWFnZUNsYXNzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rSW1hZ2VDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6Mjl9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0OX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaW5rSW1hZ2VTcmNcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua0ltYWdlU3JjXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rSW1hZ2VTcmNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjE4fSxcImVuZFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6MzZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgd2lkdGg9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImxpbmtJbWFnZVdpZHRoXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtJbWFnZVdpZHRoXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsaW5rSW1hZ2VXaWR0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0LFwiY29sdW1uXCI6NDV9LFwiZW5kXCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjo2NX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgPC9zcGFuPlxcclxcblwiO1xufSxcIjdcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICA8c3BhbiBjbGFzcz1cXFwibGlua19fdGV4dCBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaW5rVGV4dENsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtUZXh0Q2xhc3NcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxpbmtUZXh0Q2xhc3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OSxcImNvbHVtblwiOjMyfSxcImVuZFwiOntcImxpbmVcIjo5LFwiY29sdW1uXCI6NTF9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua1RleHRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua1RleHRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxpbmtUZXh0XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjksXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6OSxcImNvbHVtblwiOjY3fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxhIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJpZFwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjozfSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MzV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiaHJlZj1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua0hyZWZcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua0hyZWZcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxpbmtIcmVmXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo0MX0sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjU1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJsaW5rIGpzLWxpbmsgXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibGlua0NsYXNzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImxpbmtDbGFzc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGlua0NsYXNzXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo3N30sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjkyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkYXRhQWN0aW9uXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjk0fSxcImVuZFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MTUxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua0ltYWdlU3JjXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MixcImNvbHVtblwiOjR9LFwiZW5kXCI6e1wibGluZVwiOjYsXCJjb2x1bW5cIjoxMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGlua1RleHRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo4LFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjoxMX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2E+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8dWwgY2xhc3M9XFxcImxpc3QganMtbGlzdCBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oY29udGFpbmVyLmxhbWJkYShkZXB0aDAsIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+PC91bD5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcInZlcnRpY2FsLXNwYWNlciBqcy12ZXJ0aWNhbC1zcGFjZXIgdmVydGljYWwtc3BhY2VyLVwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwic2l6ZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJzaXplXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJzaXplXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjEsXCJjb2x1bW5cIjo2M30sXCJlbmRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjczfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPjwvZGl2PlxcclxcblwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7IiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvcnVudGltZS5qc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtX19iYWNrZ3JvdW5kXFxcIj5cXHJcXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImZpbG0tYmFja2dyb3VuZF9faW1hZ2VcXFwiIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwicHJldmlld1VSTFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJwcmV2aWV3VVJMXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJwcmV2aWV3VVJMXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjQsXCJjb2x1bW5cIjo0OX0sXCJlbmRcIjp7XCJsaW5lXCI6NCxcImNvbHVtblwiOjY1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbG1fX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbV9fY29udGVudC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9fdGl0bGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcImZpbG0tY29udGVudC10aXRsZV9fdGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjozMX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIDwvaDE+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X19pbmZvLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9faW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX3JhdGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZpbG0tY29udGVudC1yYXRpbmdfX3RleHRcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInJhdGluZ1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJyYXRpbmdcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInJhdGluZ1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjY0fSxcImVuZFwiOntcImxpbmVcIjoxOCxcImNvbHVtblwiOjc2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX3llYXJcXFwiPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInllYXJcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwieWVhclwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwieWVhclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyMCxcImNvbHVtblwiOjUzfSxcImVuZFwiOntcImxpbmVcIjoyMCxcImNvbHVtblwiOjYzfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmlsbS1jb250ZW50X190eXBlXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0eXBlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInR5cGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInR5cGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjEsXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6MjEsXCJjb2x1bW5cIjo2M319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZpbG0tY29udGVudF9fY291bnRyeVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZpbG0tY29udGVudF9fYWdlLWxpbWl0XFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJhZ2VMaW1pdFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJhZ2VMaW1pdFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYWdlTGltaXRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjMsXCJjb2x1bW5cIjo1OH0sXCJlbmRcIjp7XCJsaW5lXCI6MjMsXCJjb2x1bW5cIjo3Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiKzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX2Rlc2NyaXB0aW9uXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkZXNjcmlwdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjUsXCJjb2x1bW5cIjo1M30sXCJlbmRcIjp7XCJsaW5lXCI6MjUsXCJjb2x1bW5cIjo3MH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudF9fYXV0aG9yc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzX19kaXJlY3RvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnQtYXV0aG9ycy1kaXJlY3Rvcl9fdGV4dFxcXCI+0KDQtdC20LjRgdGB0ZHRgNGLOjwvZGl2PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRpcmVjdG9yc1wiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzEsXCJjb2x1bW5cIjoyMH0sXCJlbmRcIjp7XCJsaW5lXCI6MzMsXCJjb2x1bW5cIjoyOX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzX19hY3RvcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsbS1jb250ZW50LWF1dGhvcnMtYWN0b3JzX190ZXh0XFxcIj7QkNC60YLRkdGA0Ys6PC9kaXY+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWN0b3JzXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDUsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozNyxcImNvbHVtblwiOjIwfSxcImVuZFwiOntcImxpbmVcIjozOSxcImNvbHVtblwiOjI5fX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxtLWNvbnRlbnRfX2J1dHRvbnNcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi9wZXJzb25zL1wiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjM4fSxcImVuZFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjQ2fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJmaWxtLWNvbnRlbnQtYXV0aG9ycy1kaXJlY3Rvcl9fbmFtZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibmFtZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6OTJ9LFwiZW5kXCI6e1wibGluZVwiOjMyLFwiY29sdW1uXCI6MTAyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+XCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVubGVzc1wiKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBsb29rdXBQcm9wZXJ0eShkYXRhLFwibGFzdFwiKSkse1wibmFtZVwiOlwidW5sZXNzXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozMixcImNvbHVtblwiOjEwNn0sXCJlbmRcIjp7XCJsaW5lXCI6MzIsXCJjb2x1bW5cIjoxMzZ9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiLCBcIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3BlcnNvbnMvXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6NDJ9LFwiZW5kXCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6NTB9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImZpbG0tY29udGVudC1hdXRob3JzLWFjdG9yc19fbmFtZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibmFtZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJuYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6OTR9LFwiZW5kXCI6e1wibGluZVwiOjM4LFwiY29sdW1uXCI6MTA0fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2E+XCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVubGVzc1wiKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBsb29rdXBQcm9wZXJ0eShkYXRhLFwibGFzdFwiKSkse1wibmFtZVwiOlwidW5sZXNzXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozOCxcImNvbHVtblwiOjEwOH0sXCJlbmRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjoxMzh9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGFydGljbGUgY2xhc3M9XFxcImZpbG1cXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ3aXRoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb250ZW50XCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJ3aXRoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6NDgsXCJjb2x1bW5cIjoxM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L2FydGljbGU+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGFpbmVyIGpzLWhlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGFpbmVyX19sZWZ0IGpzLWhlYWRlci1jb250YWluZXJfX2xlZnRcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGFpbmVyX19yaWdodCBqcy1oZWFkZXItY29udGFpbmVyX19yaWdodFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1c2VyLXByb2ZpbGUganMtdXNlci1wcm9maWxlXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJjYXRlZ29yeVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhdGVnb3J5X19saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2Jsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiY2F0ZWdvcnlfX25hbWVcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NyxcImNvbHVtblwiOjQ3fSxcImVuZFwiOntcImxpbmVcIjo3LFwiY29sdW1uXCI6NTh9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9jaGV2cm9uLXJpZ2h0LnN2Z1xcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJpY29uLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5X19jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19saXN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9faXRlbXNcXFwiPlxcclxcblxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbnRlbnRcIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE2LFwiY29sdW1uXCI6MjR9LFwiZW5kXCI6e1wibGluZVwiOjIyLFwiY29sdW1uXCI6MzN9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9fYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19idXR0b24tbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9pbWcvaWNvbnMvY2hldnJvbi1sZWZ0LnN2Z1xcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJpY29uLWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYXRlZ29yeV9fY29udGFpbmVyX19idXR0b24tcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL2NoZXZyb24tcmlnaHQuc3ZnXFxcIiBhbHQ9XFxcIlxcXCIgY2xhc3M9XFxcImljb24tcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9faXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIvZmlsbXMvXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWRcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiaWRcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImlkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NDh9LFwiZW5kXCI6e1wibGluZVwiOjE4LFwiY29sdW1uXCI6NTZ9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImNhdGVnb3J5X19jb250YWluZXJfX2l0ZW0tbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInByZXZpZXdVUkxcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwicHJldmlld1VSTFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwicHJldmlld1VSTFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjQ2fSxcImVuZFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjYyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiY2F0ZWdvcnlfX2NvbnRhaW5lcl9faXRlbS1pbWFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPG1haW4gY2xhc3M9XFxcImNhdGVnb3JpZXNcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJzZWxlY3Rpb25zXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NH0sXCJlbmRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjoxM319fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L21haW4+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbF9fYXJlYSBqcy1tb2RhbF9fYXJlYVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsX19jbG9zZS1idG4tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsX19jbG9zZS1idG5cXFwiIGFyaWEtbGFiZWw9XFxcIkNsb3NlIE1vZGFsXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJtb2RhbF9fY2xvc2UtYnRuLWltYWdlXFxcIiBzcmM9XFxcIi9pbWcvaWNvbnMvY2xvc2Uuc3ZnXFxcIiBhbHQ9XFxcIkNsb3NlIGltYWdlXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2NvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2hlYWRlci1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsX19oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm1vZGFsX190aXRsZVxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjo0MX0sXCJlbmRcIjp7XCJsaW5lXCI6MTAsXCJjb2x1bW5cIjo1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWxfX2JvZHktY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbF9fYm9keSBqcy1tb2RhbF9fYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJzcGFjZVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlX19zdGFyc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZV9fZXJyb3IganMtc3BhY2VfX2Vycm9yXFxcIj5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWFnZS00MDRcXFwiIHNyYz1cXFwiL2ltZy9ub3Rmb3VuZC80MDQuc3ZnXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BhY2VfX29iamVjdHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInNwYWNlLW9iamVjdF9fcm9ja2V0XFxcIiBzcmM9XFxcIi9pbWcvbm90Zm91bmQvcm9ja2V0LnN2Z1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic3BhY2Utb2JqZWN0X19lYXJ0aFxcXCIgc3JjPVxcXCIvaW1nL25vdGZvdW5kL2VhcnRoLnN2Z1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInNwYWNlLW9iamVjdF9fbW9vblxcXCIgc3JjPVxcXCIvaW1nL25vdGZvdW5kL21vb24uc3ZnXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZV9fYXN0cm9uYXV0LWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInNwYWNlLW9iamVjdF9fYXN0cm9uYXV0XFxcIiBzcmM9XFxcIi9pbWcvbm90Zm91bmQvYXN0cm9uYXV0LnN2Z1xcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BhY2VfX3N0YXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlX19zdGFyXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGFjZV9fc3RhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BhY2VfX3N0YXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwYWNlX19zdGFyXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlX19yb3cgcGVyc29uLXRhYmxlX19yb3ctLW1lZGl1bVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19fdGl0bGVcXFwiPtCS0L7Qt9GA0LDRgdGCPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19faW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiYWdlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImFnZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiYWdlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMzLFwiY29sdW1uXCI6NDB9LFwiZW5kXCI6e1wibGluZVwiOjMzLFwiY29sdW1uXCI6NDl9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZV9fcm93IHBlcnNvbi10YWJsZV9fcm93LS1tZWRpdW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19fdGl0bGVcXFwiPtCg0L7RgdGCPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X19pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImdyb3d0aFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJncm93dGhcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImdyb3d0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo0MixcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjo0MixcImNvbHVtblwiOjQ4fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cIjtcbn0sXCI1XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlX19yb3cgcGVyc29uLXRhYmxlX19yb3ctLW1lZGl1bVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X190aXRsZVxcXCI+0J/QvtC7PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X19pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImdlbmRlclwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJnZW5kZXJcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLHtcIm5hbWVcIjpcImdlbmRlclwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo1MSxcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjo1MSxcImNvbHVtblwiOjQ4fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cIjtcbn0sXCI3XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlX19yb3cgcGVyc29uLXRhYmxlX19yb3ctLW1lZGl1bVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X190aXRsZVxcXCI+0JzQtdGB0YLQviDRgNC+0LbQtNC10L3QuNGPPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X19pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImJpcnRoUGxhY2VcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYmlydGhQbGFjZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBjb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSkse1wibmFtZVwiOlwiYmlydGhQbGFjZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo2MCxcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjo2MCxcImNvbHVtblwiOjUyfX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cIjtcbn0sXCI5XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgXCJcbiAgICArICgoc3RhY2sxID0gKGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJzdHJpbmdJdGVtc1wiKXx8KGRlcHRoMCAmJiBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJzdHJpbmdJdGVtc1wiKSl8fGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZ2VucmVzXCIpIDogZGVwdGgwKSxcIm5hbWVcIix7XCJuYW1lXCI6XCJzdHJpbmdJdGVtc1wiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxMCwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjY5LFwiY29sdW1uXCI6NDl9LFwiZW5kXCI6e1wibGluZVwiOjY5LFwiY29sdW1uXCI6OTV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiIFwiO1xufSxcIjEwXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCJcIjtcbn0sXCIxMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwibmFtZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJuYW1lXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIm5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzEsXCJjb2x1bW5cIjo0MH0sXCJlbmRcIjp7XCJsaW5lXCI6NzEsXCJjb2x1bW5cIjo1MH19fSkgOiBoZWxwZXIpKSlcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVubGVzc1wiKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBsb29rdXBQcm9wZXJ0eShkYXRhLFwibGFzdFwiKSkse1wibmFtZVwiOlwidW5sZXNzXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzEsXCJjb2x1bW5cIjo1MH0sXCJlbmRcIjp7XCJsaW5lXCI6NzEsXCJjb2x1bW5cIjo4MH19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIjtcbn0sXCIxM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiLCBcIjtcbn0sXCIxNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogY29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBcImZ1bmN0aW9uXCIgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6ODAsXCJjb2x1bW5cIjo0MH0sXCJlbmRcIjp7XCJsaW5lXCI6ODAsXCJjb2x1bW5cIjo1MX19fSkgOiBoZWxwZXIpKSlcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInVubGVzc1wiKS5jYWxsKGFsaWFzMSwoZGF0YSAmJiBsb29rdXBQcm9wZXJ0eShkYXRhLFwibGFzdFwiKSkse1wibmFtZVwiOlwidW5sZXNzXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6ODAsXCJjb2x1bW5cIjo1MX0sXCJlbmRcIjp7XCJsaW5lXCI6ODAsXCJjb2x1bW5cIjo4MX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIjtcbn0sXCIxN1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuaG9va3MuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInBlcnNvbi1wYW5lbC1maWxtcy1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiL2ZpbG1zL1wiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImlkXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImlkXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo5MyxcImNvbHVtblwiOjU2fSxcImVuZFwiOntcImxpbmVcIjo5MyxcImNvbHVtblwiOjY0fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJwZXJzb24tcGFuZWwtZmlsbXMtaXRlbV9fbGlua1xcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwidGl0bGVcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwidGl0bGVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjkzLFwiY29sdW1uXCI6MTA0fSxcImVuZFwiOntcImxpbmVcIjo5MyxcImNvbHVtblwiOjExNX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbOCxcIj49IDQuMy4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBvcHRpb25zLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LCBidWZmZXIgPSBcbiAgXCI8YXJ0aWNsZSBjbGFzcz1cXFwicGVyc29uXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb25fX2NvbHVtbiBwZXJzb25fX2NvbHVtbi0tbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLWNvbHVtbi1sZWZ0X19jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tY29sdW1uLWxlZnQtY29udGFpbmVyX19pdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb25fX3Bob3RvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGVyc29uLXBob3RvX19saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwicGVyc29uLXBob3RvX19pbWFnZVxcXCIgc3JjPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJhdmF0YXJVUkxcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYXZhdGFyVVJMXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJhdmF0YXJVUkxcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6OCxcImNvbHVtblwiOjY2fSxcImVuZFwiOntcImxpbmVcIjo4LFwiY29sdW1uXCI6ODF9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uX19kZWxpbWl0ZXJcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uX19jb2x1bW4gcGVyc29uX19jb2x1bW4tLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tY29sdW1uLXJpZ2h0X19jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tY29sdW1uLXJpZ2h0LWNvbnRhaW5lcl9faXRlbXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uX19oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi1oZWFkZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJwZXJzb24taGVhZGVyX19ydS1uYW1lXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJuYW1lXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcIm5hbWVcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIm5hbWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo2M30sXCJlbmRcIjp7XCJsaW5lXCI6MjIsXCJjb2x1bW5cIjo3M319fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uX190YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJwZXJzb24tdGFibGVfX3RpdGxlXFxcIj7QniDQv9C10YDRgdC+0L3QtTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYWdlXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MjksXCJjb2x1bW5cIjoyOH0sXCJlbmRcIjp7XCJsaW5lXCI6MzYsXCJjb2x1bW5cIjozNX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZ3Jvd3RoXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MzgsXCJjb2x1bW5cIjoyOH0sXCJlbmRcIjp7XCJsaW5lXCI6NDUsXCJjb2x1bW5cIjozNX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZ2VuZGVyXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NDcsXCJjb2x1bW5cIjoyOH0sXCJlbmRcIjp7XCJsaW5lXCI6NTQsXCJjb2x1bW5cIjozNX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiaWZcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiYmlydGhQbGFjZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjU2LFwiY29sdW1uXCI6Mjh9LFwiZW5kXCI6e1wibGluZVwiOjYzLFwiY29sdW1uXCI6MzV9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZV9fcm93IHBlcnNvbi10YWJsZV9fcm93LS1tZWRpdW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlLXJvd19fdGl0bGVcXFwiPtCW0LDQvdGA0Ys8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX2luZm9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY29tbWVudFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJjb21tZW50XCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKG9wdGlvbnM9e1wibmFtZVwiOlwiY29tbWVudFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg5LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NjksXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6NjksXCJjb2x1bW5cIjoxMDh9fX0pLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEsb3B0aW9ucykgOiBoZWxwZXIpKTtcbiAgaWYgKCFsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiY29tbWVudFwiKSkgeyBzdGFjazEgPSBjb250YWluZXIuaG9va3MuYmxvY2tIZWxwZXJNaXNzaW5nLmNhbGwoZGVwdGgwLHN0YWNrMSxvcHRpb25zKX1cbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwiZ2VucmVzXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzAsXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6NzIsXCJjb2x1bW5cIjo0NX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXRhYmxlX19yb3cgcGVyc29uLXRhYmxlX19yb3ctLW1lZGl1bVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwZXJzb24tdGFibGUtcm93X190aXRsZVxcXCI+0KDQvtC70Lg8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBlcnNvbi10YWJsZS1yb3dfX2luZm9cXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJlYWNoXCIpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInJvbGVzXCIpIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDE1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NzksXCJjb2x1bW5cIjozNn0sXCJlbmRcIjp7XCJsaW5lXCI6ODEsXCJjb2x1bW5cIjo0NX19fSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uX19wYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGVyc29uLXBhbmVsX19maWxtc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwicGVyc29uLXBhbmVsLWZpbG1zX190aXRsZVxcXCI+0JvRg9GH0YjQuNC1INGE0LjQu9GM0LzRizwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicGVyc29uLXBhbmVsLWZpbG1zX19pdGVtc1xcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImVhY2hcIikuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwicGFydGljaXBhdGVkSW5cIikgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMTcsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjo5MSxcImNvbHVtblwiOjMyfSxcImVuZFwiOntcImxpbmVcIjo5NSxcImNvbHVtblwiOjQxfX19KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvYXJ0aWNsZT5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPCEtLTxkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiPi0tPlxcclxcbjwhLS0gICAgPGRpdiBjbGFzcz1cXFwicGxheWVyXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICA8dmlkZW8gY2xhc3M9XFxcInZpZGVvXFxcIiBzcmM9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInZpZGVvVVJMXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInZpZGVvVVJMXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ2aWRlb1VSTFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6Mzh9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo1Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj48L3ZpZGVvPi0tPlxcclxcbjwhLS0gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbHNfX3BsYXlcXFwiIGRhdGEtYWN0aW9uPVxcXCJwbGF5XFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL3BsYXkuc3ZnXFxcIiBjbGFzcz1cXFwicGxheV9fYnRuXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzX19zdG9wXFxcIiBkYXRhLWFjdGlvbj1cXFwic3RvcFxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9zdG9wLnN2Z1xcXCIgY2xhc3M9XFxcInN0b3BfX2J0blxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sc19fcHJvZ3Jlc3NcXFwiIGRhdGEtYWN0aW9uPVxcXCJ2aWRlb1Njcm9sbFxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIGNsYXNzPVxcXCJwcm9ncmVzc1xcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sc19fdm9sdW1lXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIvaW1nL2ljb25zL3ZvbHVtZS5zdmdcXFwiIGNsYXNzPVxcXCJ2b2x1bWVfX2J0blxcXCIgZGF0YS1hY3Rpb249XFxcInZvbHVtZVNjcm9sbFxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIGNsYXNzPVxcXCJ2b2x1bWVfX3Byb2dyZXNzXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2xzX190aW1lXFxcIj4wMDowMC8wMDowMDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgPC9kaXY+LS0+XFxyXFxuPCEtLTwvZGl2Pi0tPlxcclxcblxcclxcbjxkaXYgaWQ9XFxcImZ1bGxzY3JlZW4tbW9kYWxcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmdWxsc2NyZWVuLW1vZGFsXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlLW92ZXJmbG93XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZWxhdGl2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlIGN1cnJlbnQtYmFja2dyb3VuZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJ2aWRlby1jb250cm9sc1xcXCIgY2xhc3M9XFxcInZpZGVvIHJlbGF0aXZlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fc3RvcmFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGlkPVxcXCJ2aWRlby1wbGF5ZXJcXFwiIGF1dG9wbGF5IHBsYXlzaW5saW5lIHNyYz1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwic3JjXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInNyY1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwic3JjXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6Nzl9LFwiZW5kXCI6e1wibGluZVwiOjMxLFwiY29sdW1uXCI6ODh9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+PC92aWRlbz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fdGl0bGUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX3RpdGxlLWFsaWduXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX190aXRsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW8tdGl0bGVfX3RleHRcXFwiPtCf0LXRgtGA0L7QstGLINCyINCz0YDQuNC/0L/QtTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19jbG9zZS1idXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBHcmFkaWVudCBidXR0b24gKHVwcGVyIHRvKSAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2JvdHRvbS1maWx0ZXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19wYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fYmFyXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19iYXItcGFkZGluZyB3LTEwMFxcXCI+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnVsbC1iYXJcXFwiPjwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvYWQtYmFyXFxcIj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9hZC1iYXJfX3Byb2dyZXNzXFxcIj48L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50LWJhclxcXCI+PC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFyLWhlbHBlclxcXCI+MS4zNTwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcclxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImN1cnJlbnQtYmFyLWNpcmNsZVxcXCI+PC9idXR0b24+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXHJcXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19ib3R0b20tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fcGxheS1idXR0b25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gR3JhZGllbnQgYnV0dG9uICh1cHBlciB0bykgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fZHVyYXRpb24tdGltZVxcXCI+MDA6MDYgLyAwMjozNzwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1sLTUgbXItMjRcXFwiPiA8IS0tIFRPRE8gZGl2IHdpdGggdGl0bGUgaW4gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPVxcXCLQktC+0YHQv9GA0L7QuNC30LLQvtC00LjRgtGB0Y8g0LIgSEQg0LrQsNGH0LXRgdGC0LLQtVxcXCIgY2xhc3M9XFxcInZpZGVvX19xdWFsaXR5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9wbGF5ZXIvaGQuc3ZnXFxcIiBhbHQ9XFxcItCS0L7RgdC/0YDQvtC40LfQstC+0LTQuNGC0YHRjyDQsiBIRCDQutCw0YfQtdGB0YLQstC1XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibXItMjRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZGVvX19pY29uXFxcIj4gPCEtLSBUT0RPIGRpdiB3aXRoIHRpdGxlIGluIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPVxcXCLQktGL0LrQu9GO0YfQuNGC0YwgLyDQktC60LvRjtGH0LjRgtGMINC30LLRg9C6XFxcIiBjbGFzcz1cXFwidmlkZW9fX2ljb24tZmlsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9wbGF5ZXIvdm9sdW1lLXVwLnN2Z1xcXCIgYWx0PVxcXCLQktGL0LrQu9GO0YfQuNGC0YwgLyDQktC60LvRjtGH0LjRgtGMINC30LLRg9C6XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2Jhci1wYWRkaW5nIHZpZGVvX192b2x1bWUtYmFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZnVsbC1iYXJcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2FkLWJhclxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImN1cnJlbnQtYmFyXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhci1oZWxwZXJcXFwiPjQ2JTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImN1cnJlbnQtYmFyLWNpcmNsZVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2ljb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9XFxcItCS0L4g0LLQtdGB0Ywg0Y3QutGA0LDQvVxcXCIgY2xhc3M9XFxcInZpZGVvX19pY29uLWZpbGxcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiL2ltZy9pY29ucy9wbGF5ZXIvZnVsbHNjcmVlbi5zdmdcXFwiIGFsdD1cXFwi0JLQviDQstC10YHRjCDRjdC60YDQsNC9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzgsXCI+PSA0LjMuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmhvb2tzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPG1haW4gY2xhc3M9XFxcInNldHRpbmdzLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzXFxcIj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwic2V0dGluZ3NfX3RpdGxlXFxcIj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ0aXRsZVwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MyxcImNvbHVtblwiOjM2fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NDd9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDE+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXR0aW5nc19fY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2V0dGluZ3NfX2xlZnQtbWVudS1jb250YWluZXIganMtc2V0dGluZ3NfX2xlZnQtbWVudS1jb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19yaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNldHRpbmdzX19mb3JtIGpzLXNldHRpbmdzX19mb3JtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gVGhpcyBpcyB0aGUgc2FtZSBhcyBpbiBzaWduSW4gYW5kIFNpZ25VcCAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gVE9ETzogbW92ZSB0d28gZmllbGQgaW4gZm9ybSBhbmQgYWRkIGNsYXNzZXMgZm9yIGl0IC0tPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJzZXR0aW5ncy1mb3JtX190aXRsZVxcXCI+XCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBsb29rdXBQcm9wZXJ0eShoZWxwZXJzLFwiZm9ybVRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImZvcm1UaXRsZVwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZm9ybVRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjE0LFwiY29sdW1uXCI6NTN9LFwiZW5kXCI6e1wibGluZVwiOjE0LFwiY29sdW1uXCI6Njh9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvaDI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic2V0dGluZ3MtZm9ybV9fZGVzY3JpcHRpb25cXFwiPiBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJkZXNjcmlwdGlvblwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiZGVzY3JpcHRpb25cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTUsXCJjb2x1bW5cIjo1OX0sXCJlbmRcIjp7XCJsaW5lXCI6MTUsXCJjb2x1bW5cIjo3Nn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L21haW4+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgPGgzIGNsYXNzPVxcXCJzaWduSW5fX3RpdGxlXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NDR9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo1NX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMz4gXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIDxwIGNsYXNzPVxcXCJzaWduSW5fX2Rlc2NyaXB0aW9uXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRlc2NyaXB0aW9uXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRlc2NyaXB0aW9uXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJkZXNjcmlwdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NTV9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo3Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9wPiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwic2lnbkluIGpzLXNpZ25JblxcXCI+XFxyXFxuICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6Njh9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6ODR9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eSB8fCBmdW5jdGlvbihwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfTtcblxuICByZXR1cm4gXCIgPGgzIGNsYXNzPVxcXCJzaWduVXBfX3RpdGxlXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcInRpdGxlXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcInRpdGxlXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NDR9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo1NX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9oMz4gXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiIDxwIGNsYXNzPVxcXCJzaWduVXBfX2Rlc2NyaXB0aW9uXFxcIj5cIlxuICAgICsgY29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRlc2NyaXB0aW9uXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImRlc2NyaXB0aW9uXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSx7XCJuYW1lXCI6XCJkZXNjcmlwdGlvblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6NTV9LFwiZW5kXCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo3Mn19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC9wPiBcIjtcbn0sXCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHkgfHwgZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH07XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwic2lnblVwIGpzLXNpZ25VcFxcXCI+XFxyXFxuICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ0aXRsZVwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6Njh9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJpZlwiKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkZXNjcmlwdGlvblwiKSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YSxcImxvY1wiOntcInN0YXJ0XCI6e1wibGluZVwiOjMsXCJjb2x1bW5cIjo0fSxcImVuZFwiOntcImxpbmVcIjozLFwiY29sdW1uXCI6ODR9fX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuPC9kaXY+XFxyXFxuXCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfaGFuZGxlYmFyc0Jhc2UgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvYmFzZScpO1xuXG52YXIgYmFzZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzQmFzZSk7XG5cbi8vIEVhY2ggb2YgdGhlc2UgYXVnbWVudCB0aGUgSGFuZGxlYmFycyBvYmplY3QuIE5vIG5lZWQgdG8gc2V0dXAgaGVyZS5cbi8vIChUaGlzIGlzIGRvbmUgdG8gZWFzaWx5IHNoYXJlIGNvZGUgYmV0d2VlbiBjb21tb25qcyBhbmQgYnJvd3NlIGVudnMpXG5cbnZhciBfaGFuZGxlYmFyc1NhZmVTdHJpbmcgPSByZXF1aXJlKCcuL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcnKTtcblxudmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYW5kbGViYXJzU2FmZVN0cmluZyk7XG5cbnZhciBfaGFuZGxlYmFyc0V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9leGNlcHRpb24nKTtcblxudmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNFeGNlcHRpb24pO1xuXG52YXIgX2hhbmRsZWJhcnNVdGlscyA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy91dGlscycpO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1V0aWxzKTtcblxudmFyIF9oYW5kbGViYXJzUnVudGltZSA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9ydW50aW1lJyk7XG5cbnZhciBydW50aW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNSdW50aW1lKTtcblxudmFyIF9oYW5kbGViYXJzTm9Db25mbGljdCA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9uby1jb25mbGljdCcpO1xuXG52YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNOb0NvbmZsaWN0KTtcblxuLy8gRm9yIGNvbXBhdGliaWxpdHkgYW5kIHVzYWdlIG91dHNpZGUgb2YgbW9kdWxlIHN5c3RlbXMsIG1ha2UgdGhlIEhhbmRsZWJhcnMgb2JqZWN0IGEgbmFtZXNwYWNlXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBoYiA9IG5ldyBiYXNlLkhhbmRsZWJhcnNFbnZpcm9ubWVudCgpO1xuXG4gIFV0aWxzLmV4dGVuZChoYiwgYmFzZSk7XG4gIGhiLlNhZmVTdHJpbmcgPSBfaGFuZGxlYmFyc1NhZmVTdHJpbmcyWydkZWZhdWx0J107XG4gIGhiLkV4Y2VwdGlvbiA9IF9oYW5kbGViYXJzRXhjZXB0aW9uMlsnZGVmYXVsdCddO1xuICBoYi5VdGlscyA9IFV0aWxzO1xuICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcblxuICBoYi5WTSA9IHJ1bnRpbWU7XG4gIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG52YXIgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbl9oYW5kbGViYXJzTm9Db25mbGljdDJbJ2RlZmF1bHQnXShpbnN0KTtcblxuaW5zdFsnZGVmYXVsdCddID0gaW5zdDtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gaW5zdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekxuSjFiblJwYldVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPRUpCUVhOQ0xHMUNRVUZ0UWpzN1NVRkJOMElzU1VGQlNUczdPenM3YjBOQlNVOHNNRUpCUVRCQ096czdPMjFEUVVNelFpeDNRa0ZCZDBJN096czdLMEpCUTNaQ0xHOUNRVUZ2UWpzN1NVRkJMMElzUzBGQlN6czdhVU5CUTFFc2MwSkJRWE5DT3p0SlFVRnVReXhQUVVGUE96dHZRMEZGU1N3d1FrRkJNRUk3T3pzN08wRkJSMnBFTEZOQlFWTXNUVUZCVFN4SFFVRkhPMEZCUTJoQ0xFMUJRVWtzUlVGQlJTeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVOQlFVTTdPMEZCUlRGRExFOUJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRM1pDTEVsQlFVVXNRMEZCUXl4VlFVRlZMRzlEUVVGaExFTkJRVU03UVVGRE0wSXNTVUZCUlN4RFFVRkRMRk5CUVZNc2JVTkJRVmtzUTBGQlF6dEJRVU42UWl4SlFVRkZMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEJRVU5xUWl4SlFVRkZMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZET3p0QlFVVTNReXhKUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTm9RaXhKUVVGRkxFTkJRVU1zVVVGQlVTeEhRVUZITEZWQlFWTXNTVUZCU1N4RlFVRkZPMEZCUXpOQ0xGZEJRVThzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UjBGRGJrTXNRMEZCUXpzN1FVRkZSaXhUUVVGUExFVkJRVVVzUTBGQlF6dERRVU5ZT3p0QlFVVkVMRWxCUVVrc1NVRkJTU3hIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETzBGQlEzQkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZET3p0QlFVVnlRaXhyUTBGQlZ5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1FVRkZha0lzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenM3Y1VKQlJWSXNTVUZCU1NJc0ltWnBiR1VpT2lKb1lXNWtiR1ZpWVhKekxuSjFiblJwYldVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCaVlYTmxJR1p5YjIwZ0p5NHZhR0Z1Wkd4bFltRnljeTlpWVhObEp6dGNibHh1THk4Z1JXRmphQ0J2WmlCMGFHVnpaU0JoZFdkdFpXNTBJSFJvWlNCSVlXNWtiR1ZpWVhKeklHOWlhbVZqZEM0Z1RtOGdibVZsWkNCMGJ5QnpaWFIxY0NCb1pYSmxMbHh1THk4Z0tGUm9hWE1nYVhNZ1pHOXVaU0IwYnlCbFlYTnBiSGtnYzJoaGNtVWdZMjlrWlNCaVpYUjNaV1Z1SUdOdmJXMXZibXB6SUdGdVpDQmljbTkzYzJVZ1pXNTJjeWxjYm1sdGNHOXlkQ0JUWVdabFUzUnlhVzVuSUdaeWIyMGdKeTR2YUdGdVpHeGxZbUZ5Y3k5ellXWmxMWE4wY21sdVp5YzdYRzVwYlhCdmNuUWdSWGhqWlhCMGFXOXVJR1p5YjIwZ0p5NHZhR0Z1Wkd4bFltRnljeTlsZUdObGNIUnBiMjRuTzF4dWFXMXdiM0owSUNvZ1lYTWdWWFJwYkhNZ1puSnZiU0FuTGk5b1lXNWtiR1ZpWVhKekwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENBcUlHRnpJSEoxYm5ScGJXVWdabkp2YlNBbkxpOW9ZVzVrYkdWaVlYSnpMM0oxYm5ScGJXVW5PMXh1WEc1cGJYQnZjblFnYm05RGIyNW1iR2xqZENCbWNtOXRJQ2N1TDJoaGJtUnNaV0poY25NdmJtOHRZMjl1Wm14cFkzUW5PMXh1WEc0dkx5QkdiM0lnWTI5dGNHRjBhV0pwYkdsMGVTQmhibVFnZFhOaFoyVWdiM1YwYzJsa1pTQnZaaUJ0YjJSMWJHVWdjM2x6ZEdWdGN5d2diV0ZyWlNCMGFHVWdTR0Z1Wkd4bFltRnljeUJ2WW1wbFkzUWdZU0J1WVcxbGMzQmhZMlZjYm1aMWJtTjBhVzl1SUdOeVpXRjBaU2dwSUh0Y2JpQWdiR1YwSUdoaUlEMGdibVYzSUdKaGMyVXVTR0Z1Wkd4bFltRnljMFZ1ZG1seWIyNXRaVzUwS0NrN1hHNWNiaUFnVlhScGJITXVaWGgwWlc1a0tHaGlMQ0JpWVhObEtUdGNiaUFnYUdJdVUyRm1aVk4wY21sdVp5QTlJRk5oWm1WVGRISnBibWM3WEc0Z0lHaGlMa1Y0WTJWd2RHbHZiaUE5SUVWNFkyVndkR2x2Ymp0Y2JpQWdhR0l1VlhScGJITWdQU0JWZEdsc2N6dGNiaUFnYUdJdVpYTmpZWEJsUlhod2NtVnpjMmx2YmlBOUlGVjBhV3h6TG1WelkyRndaVVY0Y0hKbGMzTnBiMjQ3WEc1Y2JpQWdhR0l1VmswZ1BTQnlkVzUwYVcxbE8xeHVJQ0JvWWk1MFpXMXdiR0YwWlNBOUlHWjFibU4wYVc5dUtITndaV01wSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjblZ1ZEdsdFpTNTBaVzF3YkdGMFpTaHpjR1ZqTENCb1lpazdYRzRnSUgwN1hHNWNiaUFnY21WMGRYSnVJR2hpTzF4dWZWeHVYRzVzWlhRZ2FXNXpkQ0E5SUdOeVpXRjBaU2dwTzF4dWFXNXpkQzVqY21WaGRHVWdQU0JqY21WaGRHVTdYRzVjYm01dlEyOXVabXhwWTNRb2FXNXpkQ2s3WEc1Y2JtbHVjM1JiSjJSbFptRjFiSFFuWFNBOUlHbHVjM1E3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdsdWMzUTdYRzRpWFgwPVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5IYW5kbGViYXJzRW52aXJvbm1lbnQgPSBIYW5kbGViYXJzRW52aXJvbm1lbnQ7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxudmFyIF9oZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbnZhciBfZGVjb3JhdG9ycyA9IHJlcXVpcmUoJy4vZGVjb3JhdG9ycycpO1xuXG52YXIgX2xvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG5cbnZhciBfbG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ2dlcik7XG5cbnZhciBfaW50ZXJuYWxQcm90b0FjY2VzcyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvcHJvdG8tYWNjZXNzJyk7XG5cbnZhciBWRVJTSU9OID0gJzQuNy43JztcbmV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047XG52YXIgQ09NUElMRVJfUkVWSVNJT04gPSA4O1xuZXhwb3J0cy5DT01QSUxFUl9SRVZJU0lPTiA9IENPTVBJTEVSX1JFVklTSU9OO1xudmFyIExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydHMuTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAgPDQuMy4wJyxcbiAgODogJz49IDQuMy4wJ1xufTtcblxuZXhwb3J0cy5SRVZJU0lPTl9DSEFOR0VTID0gUkVWSVNJT05fQ0hBTkdFUztcbnZhciBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmZ1bmN0aW9uIEhhbmRsZWJhcnNFbnZpcm9ubWVudChoZWxwZXJzLCBwYXJ0aWFscywgZGVjb3JhdG9ycykge1xuICB0aGlzLmhlbHBlcnMgPSBoZWxwZXJzIHx8IHt9O1xuICB0aGlzLnBhcnRpYWxzID0gcGFydGlhbHMgfHwge307XG4gIHRoaXMuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnMgfHwge307XG5cbiAgX2hlbHBlcnMucmVnaXN0ZXJEZWZhdWx0SGVscGVycyh0aGlzKTtcbiAgX2RlY29yYXRvcnMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyh0aGlzKTtcbn1cblxuSGFuZGxlYmFyc0Vudmlyb25tZW50LnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEhhbmRsZWJhcnNFbnZpcm9ubWVudCxcblxuICBsb2dnZXI6IF9sb2dnZXIyWydkZWZhdWx0J10sXG4gIGxvZzogX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHJlZ2lzdGVySGVscGVyKG5hbWUsIGZuKSB7XG4gICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpO1xuICAgICAgfVxuICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uIHVucmVnaXN0ZXJIZWxwZXIobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiByZWdpc3RlclBhcnRpYWwobmFtZSwgcGFydGlhbCkge1xuICAgIGlmIChfdXRpbHMudG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJyArIG5hbWUgKyAnXCIgYXMgdW5kZWZpbmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiB1bnJlZ2lzdGVyUGFydGlhbChuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHJlZ2lzdGVyRGVjb3JhdG9yKG5hbWUsIGZuKSB7XG4gICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuICAgICAgfVxuICAgICAgX3V0aWxzLmV4dGVuZCh0aGlzLmRlY29yYXRvcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlY29yYXRvcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uIHVucmVnaXN0ZXJEZWNvcmF0b3IobmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH0sXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbWVtb3J5IG9mIGlsbGVnYWwgcHJvcGVydHkgYWNjZXNzZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBsb2dnZWQuXG4gICAqIEBkZXByZWNhdGVkIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gaGFuZGxlYmFycyB0ZXN0LWNhc2VzXG4gICAqL1xuICByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXM6IGZ1bmN0aW9uIHJlc2V0TG9nZ2VkUHJvcGVydHlBY2Nlc3NlcygpIHtcbiAgICBfaW50ZXJuYWxQcm90b0FjY2Vzcy5yZXNldExvZ2dlZFByb3BlcnRpZXMoKTtcbiAgfVxufTtcblxudmFyIGxvZyA9IF9sb2dnZXIyWydkZWZhdWx0J10ubG9nO1xuXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBfdXRpbHMuY3JlYXRlRnJhbWU7XG5leHBvcnRzLmxvZ2dlciA9IF9sb2dnZXIyWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwySmhjMlV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3Y1VKQlFUaERMRk5CUVZNN08zbENRVU5xUXl4aFFVRmhPenM3TzNWQ1FVTkpMRmRCUVZjN096QkNRVU5TTEdOQlFXTTdPM05DUVVOeVF5eFZRVUZWT3pzN08yMURRVU5UTEhsQ1FVRjVRanM3UVVGRmVFUXNTVUZCVFN4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRE96dEJRVU40UWl4SlFVRk5MR2xDUVVGcFFpeEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkROVUlzU1VGQlRTeHBRMEZCYVVNc1IwRkJSeXhEUVVGRExFTkJRVU03T3p0QlFVVTFReXhKUVVGTkxHZENRVUZuUWl4SFFVRkhPMEZCUXpsQ0xFZEJRVU1zUlVGQlJTeGhRVUZoTzBGQlEyaENMRWRCUVVNc1JVRkJSU3hsUVVGbE8wRkJRMnhDTEVkQlFVTXNSVUZCUlN4bFFVRmxPMEZCUTJ4Q0xFZEJRVU1zUlVGQlJTeFZRVUZWTzBGQlEySXNSMEZCUXl4RlFVRkZMR3RDUVVGclFqdEJRVU55UWl4SFFVRkRMRVZCUVVVc2FVSkJRV2xDTzBGQlEzQkNMRWRCUVVNc1JVRkJSU3hwUWtGQmFVSTdRVUZEY0VJc1IwRkJReXhGUVVGRkxGVkJRVlU3UTBGRFpDeERRVUZET3pzN1FVRkZSaXhKUVVGTkxGVkJRVlVzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenM3UVVGRk9VSXNVMEZCVXl4eFFrRkJjVUlzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSVHRCUVVOdVJTeE5RVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1NVRkJTU3hGUVVGRkxFTkJRVU03UVVGRE4wSXNUVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETzBGQlF5OUNMRTFCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeEpRVUZKTEVWQlFVVXNRMEZCUXpzN1FVRkZia01zYTBOQlFYVkNMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRemRDTEhkRFFVRXdRaXhKUVVGSkxFTkJRVU1zUTBGQlF6dERRVU5xUXpzN1FVRkZSQ3h4UWtGQmNVSXNRMEZCUXl4VFFVRlRMRWRCUVVjN1FVRkRhRU1zWVVGQlZ5eEZRVUZGTEhGQ1FVRnhRanM3UVVGRmJFTXNVVUZCVFN4eFFrRkJVVHRCUVVOa0xFdEJRVWNzUlVGQlJTeHZRa0ZCVHl4SFFVRkhPenRCUVVWbUxHZENRVUZqTEVWQlFVVXNkMEpCUVZNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUlVGQlJUdEJRVU5xUXl4UlFVRkpMR2RDUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4VlFVRlZMRVZCUVVVN1FVRkRkRU1zVlVGQlNTeEZRVUZGTEVWQlFVVTdRVUZEVGl4alFVRk5MREpDUVVGakxIbERRVUY1UXl4RFFVRkRMRU5CUVVNN1QwRkRhRVU3UVVGRFJDeHZRa0ZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzB0QlF6VkNMRTFCUVUwN1FVRkRUQ3hWUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVONlFqdEhRVU5HTzBGQlEwUXNhMEpCUVdkQ0xFVkJRVVVzTUVKQlFWTXNTVUZCU1N4RlFVRkZPMEZCUXk5Q0xGZEJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRIUVVNelFqczdRVUZGUkN4cFFrRkJaU3hGUVVGRkxIbENRVUZUTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRka01zVVVGQlNTeG5Ra0ZCVXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzVlVGQlZTeEZRVUZGTzBGQlEzUkRMRzlDUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkROMElzVFVGQlRUdEJRVU5NTEZWQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1YwRkJWeXhGUVVGRk8wRkJRMnhETEdOQlFVMHNlVVZCUTNkRExFbEJRVWtzYjBKQlEycEVMRU5CUVVNN1QwRkRTRHRCUVVORUxGVkJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRE8wdEJReTlDTzBkQlEwWTdRVUZEUkN4dFFrRkJhVUlzUlVGQlJTd3lRa0ZCVXl4SlFVRkpMRVZCUVVVN1FVRkRhRU1zVjBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wZEJRelZDT3p0QlFVVkVMRzFDUVVGcFFpeEZRVUZGTERKQ1FVRlRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVU3UVVGRGNFTXNVVUZCU1N4blFrRkJVeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMEZCUTNSRExGVkJRVWtzUlVGQlJTeEZRVUZGTzBGQlEwNHNZMEZCVFN3eVFrRkJZeXcwUTBGQk5FTXNRMEZCUXl4RFFVRkRPMDlCUTI1Rk8wRkJRMFFzYjBKQlFVOHNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU12UWl4TlFVRk5PMEZCUTB3c1ZVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1MwRkROVUk3UjBGRFJqdEJRVU5FTEhGQ1FVRnRRaXhGUVVGRkxEWkNRVUZUTEVsQlFVa3NSVUZCUlR0QlFVTnNReXhYUVVGUExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1IwRkRPVUk3T3pzN08wRkJTMFFzTmtKQlFUSkNMRVZCUVVFc2RVTkJRVWM3UVVGRE5VSXNaMFJCUVhWQ0xFTkJRVU03UjBGRGVrSTdRMEZEUml4RFFVRkRPenRCUVVWTExFbEJRVWtzUjBGQlJ5eEhRVUZITEc5Q1FVRlBMRWRCUVVjc1EwRkJRenM3TzFGQlJXNUNMRmRCUVZjN1VVRkJSU3hOUVVGTklpd2labWxzWlNJNkltSmhjMlV1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpjbVZoZEdWR2NtRnRaU3dnWlhoMFpXNWtMQ0IwYjFOMGNtbHVaeUI5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1YVcxd2IzSjBJRVY0WTJWd2RHbHZiaUJtY205dElDY3VMMlY0WTJWd2RHbHZiaWM3WEc1cGJYQnZjblFnZXlCeVpXZHBjM1JsY2tSbFptRjFiSFJJWld4d1pYSnpJSDBnWm5KdmJTQW5MaTlvWld4d1pYSnpKenRjYm1sdGNHOXlkQ0I3SUhKbFoybHpkR1Z5UkdWbVlYVnNkRVJsWTI5eVlYUnZjbk1nZlNCbWNtOXRJQ2N1TDJSbFkyOXlZWFJ2Y25Nbk8xeHVhVzF3YjNKMElHeHZaMmRsY2lCbWNtOXRJQ2N1TDJ4dloyZGxjaWM3WEc1cGJYQnZjblFnZXlCeVpYTmxkRXh2WjJkbFpGQnliM0JsY25ScFpYTWdmU0JtY205dElDY3VMMmx1ZEdWeWJtRnNMM0J5YjNSdkxXRmpZMlZ6Y3ljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCV1JWSlRTVTlPSUQwZ0p6UXVOeTQzSnp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JEVDAxUVNVeEZVbDlTUlZaSlUwbFBUaUE5SURnN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnVEVGVFZGOURUMDFRUVZSSlFreEZYME5QVFZCSlRFVlNYMUpGVmtsVFNVOU9JRDBnTnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUZKRlZrbFRTVTlPWDBOSVFVNUhSVk1nUFNCN1hHNGdJREU2SUNjOFBTQXhMakF1Y21NdU1pY3NJQzh2SURFdU1DNXlZeTR5SUdseklHRmpkSFZoYkd4NUlISmxkaklnWW5WMElHUnZaWE51SjNRZ2NtVndiM0owSUdsMFhHNGdJREk2SUNjOVBTQXhMakF1TUMxeVl5NHpKeXhjYmlBZ016b2dKejA5SURFdU1DNHdMWEpqTGpRbkxGeHVJQ0EwT2lBblBUMGdNUzU0TG5nbkxGeHVJQ0ExT2lBblBUMGdNaTR3TGpBdFlXeHdhR0V1ZUNjc1hHNGdJRFk2SUNjK1BTQXlMakF1TUMxaVpYUmhMakVuTEZ4dUlDQTNPaUFuUGowZ05DNHdMakFnUERRdU15NHdKeXhjYmlBZ09Eb2dKejQ5SURRdU15NHdKMXh1ZlR0Y2JseHVZMjl1YzNRZ2IySnFaV04wVkhsd1pTQTlJQ2RiYjJKcVpXTjBJRTlpYW1WamRGMG5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnU0dGdVpHeGxZbUZ5YzBWdWRtbHliMjV0Wlc1MEtHaGxiSEJsY25Nc0lIQmhjblJwWVd4ekxDQmtaV052Y21GMGIzSnpLU0I3WEc0Z0lIUm9hWE11YUdWc2NHVnljeUE5SUdobGJIQmxjbk1nZkh3Z2UzMDdYRzRnSUhSb2FYTXVjR0Z5ZEdsaGJITWdQU0J3WVhKMGFXRnNjeUI4ZkNCN2ZUdGNiaUFnZEdocGN5NWtaV052Y21GMGIzSnpJRDBnWkdWamIzSmhkRzl5Y3lCOGZDQjdmVHRjYmx4dUlDQnlaV2RwYzNSbGNrUmxabUYxYkhSSVpXeHdaWEp6S0hSb2FYTXBPMXh1SUNCeVpXZHBjM1JsY2tSbFptRjFiSFJFWldOdmNtRjBiM0p6S0hSb2FYTXBPMXh1ZlZ4dVhHNUlZVzVrYkdWaVlYSnpSVzUyYVhKdmJtMWxiblF1Y0hKdmRHOTBlWEJsSUQwZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2pvZ1NHRnVaR3hsWW1GeWMwVnVkbWx5YjI1dFpXNTBMRnh1WEc0Z0lHeHZaMmRsY2pvZ2JHOW5aMlZ5TEZ4dUlDQnNiMmM2SUd4dloyZGxjaTVzYjJjc1hHNWNiaUFnY21WbmFYTjBaWEpJWld4d1pYSTZJR1oxYm1OMGFXOXVLRzVoYldVc0lHWnVLU0I3WEc0Z0lDQWdhV1lnS0hSdlUzUnlhVzVuTG1OaGJHd29ibUZ0WlNrZ1BUMDlJRzlpYW1WamRGUjVjR1VwSUh0Y2JpQWdJQ0FnSUdsbUlDaG1iaWtnZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZEJjbWNnYm05MElITjFjSEJ2Y25SbFpDQjNhWFJvSUcxMWJIUnBjR3hsSUdobGJIQmxjbk1uS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdWNGRHVnVaQ2gwYUdsekxtaGxiSEJsY25Nc0lHNWhiV1VwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG1obGJIQmxjbk5iYm1GdFpWMGdQU0JtYmp0Y2JpQWdJQ0I5WEc0Z0lIMHNYRzRnSUhWdWNtVm5hWE4wWlhKSVpXeHdaWEk2SUdaMWJtTjBhVzl1S0c1aGJXVXBJSHRjYmlBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVvWld4d1pYSnpXMjVoYldWZE8xeHVJQ0I5TEZ4dVhHNGdJSEpsWjJsemRHVnlVR0Z5ZEdsaGJEb2dablZ1WTNScGIyNG9ibUZ0WlN3Z2NHRnlkR2xoYkNrZ2UxeHVJQ0FnSUdsbUlDaDBiMU4wY21sdVp5NWpZV3hzS0c1aGJXVXBJRDA5UFNCdlltcGxZM1JVZVhCbEtTQjdYRzRnSUNBZ0lDQmxlSFJsYm1Rb2RHaHBjeTV3WVhKMGFXRnNjeXdnYm1GdFpTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NHRnlkR2xoYkNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVjRZMlZ3ZEdsdmJpaGNiaUFnSUNBZ0lDQWdJQ0JnUVhSMFpXMXdkR2x1WnlCMGJ5QnlaV2RwYzNSbGNpQmhJSEJoY25ScFlXd2dZMkZzYkdWa0lGd2lKSHR1WVcxbGZWd2lJR0Z6SUhWdVpHVm1hVzVsWkdCY2JpQWdJQ0FnSUNBZ0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIUm9hWE11Y0dGeWRHbGhiSE5iYm1GdFpWMGdQU0J3WVhKMGFXRnNPMXh1SUNBZ0lIMWNiaUFnZlN4Y2JpQWdkVzV5WldkcGMzUmxjbEJoY25ScFlXdzZJR1oxYm1OMGFXOXVLRzVoYldVcElIdGNiaUFnSUNCa1pXeGxkR1VnZEdocGN5NXdZWEowYVdGc2MxdHVZVzFsWFR0Y2JpQWdmU3hjYmx4dUlDQnlaV2RwYzNSbGNrUmxZMjl5WVhSdmNqb2dablZ1WTNScGIyNG9ibUZ0WlN3Z1ptNHBJSHRjYmlBZ0lDQnBaaUFvZEc5VGRISnBibWN1WTJGc2JDaHVZVzFsS1NBOVBUMGdiMkpxWldOMFZIbHdaU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHWnVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0owRnlaeUJ1YjNRZ2MzVndjRzl5ZEdWa0lIZHBkR2dnYlhWc2RHbHdiR1VnWkdWamIzSmhkRzl5Y3ljcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1pYaDBaVzVrS0hSb2FYTXVaR1ZqYjNKaGRHOXljeXdnYm1GdFpTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVaR1ZqYjNKaGRHOXljMXR1WVcxbFhTQTlJR1p1TzF4dUlDQWdJSDFjYmlBZ2ZTeGNiaUFnZFc1eVpXZHBjM1JsY2tSbFkyOXlZWFJ2Y2pvZ1puVnVZM1JwYjI0b2JtRnRaU2tnZTF4dUlDQWdJR1JsYkdWMFpTQjBhR2x6TG1SbFkyOXlZWFJ2Y25OYmJtRnRaVjA3WEc0Z0lIMHNYRzRnSUM4cUtseHVJQ0FnS2lCU1pYTmxkQ0IwYUdVZ2JXVnRiM0o1SUc5bUlHbHNiR1ZuWVd3Z2NISnZjR1Z5ZEhrZ1lXTmpaWE56WlhNZ2RHaGhkQ0JvWVhabElHRnNjbVZoWkhrZ1ltVmxiaUJzYjJkblpXUXVYRzRnSUNBcUlFQmtaWEJ5WldOaGRHVmtJSE5vYjNWc1pDQnZibXg1SUdKbElIVnpaV1FnYVc0Z2FHRnVaR3hsWW1GeWN5QjBaWE4wTFdOaGMyVnpYRzRnSUNBcUwxeHVJQ0J5WlhObGRFeHZaMmRsWkZCeWIzQmxjblI1UVdOalpYTnpaWE1vS1NCN1hHNGdJQ0FnY21WelpYUk1iMmRuWldSUWNtOXdaWEowYVdWektDazdYRzRnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JzWlhRZ2JHOW5JRDBnYkc5bloyVnlMbXh2Wnp0Y2JseHVaWGh3YjNKMElIc2dZM0psWVhSbFJuSmhiV1VzSUd4dloyZGxjaUI5TzF4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyA9IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfZGVjb3JhdG9yc0lubGluZSA9IHJlcXVpcmUoJy4vZGVjb3JhdG9ycy9pbmxpbmUnKTtcblxudmFyIF9kZWNvcmF0b3JzSW5saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlY29yYXRvcnNJbmxpbmUpO1xuXG5mdW5jdGlvbiByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKGluc3RhbmNlKSB7XG4gIF9kZWNvcmF0b3JzSW5saW5lMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJSbFkyOXlZWFJ2Y25NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1owTkJRVEpDTEhGQ1FVRnhRanM3T3p0QlFVVjZReXhUUVVGVExIbENRVUY1UWl4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVOc1JDeG5RMEZCWlN4UlFVRlJMRU5CUVVNc1EwRkJRenREUVVNeFFpSXNJbVpwYkdVaU9pSmtaV052Y21GMGIzSnpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbFoybHpkR1Z5U1c1c2FXNWxJR1p5YjIwZ0p5NHZaR1ZqYjNKaGRHOXljeTlwYm14cGJtVW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY21WbmFYTjBaWEpFWldaaGRXeDBSR1ZqYjNKaGRHOXljeWhwYm5OMFlXNWpaU2tnZTF4dUlDQnlaV2RwYzNSbGNrbHViR2x1WlNocGJuTjBZVzVqWlNrN1hHNTlYRzRpWFgwPVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbiAoZm4sIHByb3BzLCBjb250YWluZXIsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmV0ID0gZm47XG4gICAgaWYgKCFwcm9wcy5wYXJ0aWFscykge1xuICAgICAgcHJvcHMucGFydGlhbHMgPSB7fTtcbiAgICAgIHJldCA9IGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuICAgICAgICB2YXIgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IF91dGlscy5leHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIHZhciByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyUmxZMjl5WVhSdmNuTXZhVzVzYVc1bExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3Y1VKQlFYVkNMRlZCUVZVN08zRkNRVVZzUWl4VlFVRlRMRkZCUVZFc1JVRkJSVHRCUVVOb1F5eFZRVUZSTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEZWQlFWTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlF6TkZMRkZCUVVrc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5pTEZGQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJRMjVDTEZkQlFVc3NRMEZCUXl4UlFVRlJMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM0JDTEZOQlFVY3NSMEZCUnl4VlFVRlRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVU3TzBGQlJTOUNMRmxCUVVrc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTTdRVUZEYkVNc2FVSkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NZMEZCVHl4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTXhSQ3haUVVGSkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJReTlDTEdsQ1FVRlRMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF6dEJRVU01UWl4bFFVRlBMRWRCUVVjc1EwRkJRenRQUVVOYUxFTkJRVU03UzBGRFNEczdRVUZGUkN4VFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZET3p0QlFVVTNReXhYUVVGUExFZEJRVWNzUTBGQlF6dEhRVU5hTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbWx1YkdsdVpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdWNGRHVnVaQ0I5SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSkVaV052Y21GMGIzSW9KMmx1YkdsdVpTY3NJR1oxYm1OMGFXOXVLR1p1TENCd2NtOXdjeXdnWTI5dWRHRnBibVZ5TENCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnYkdWMElISmxkQ0E5SUdadU8xeHVJQ0FnSUdsbUlDZ2hjSEp2Y0hNdWNHRnlkR2xoYkhNcElIdGNiaUFnSUNBZ0lIQnliM0J6TG5CaGNuUnBZV3h6SUQwZ2UzMDdYRzRnSUNBZ0lDQnlaWFFnUFNCbWRXNWpkR2x2YmloamIyNTBaWGgwTENCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRU55WldGMFpTQmhJRzVsZHlCd1lYSjBhV0ZzY3lCemRHRmpheUJtY21GdFpTQndjbWx2Y2lCMGJ5QmxlR1ZqTGx4dUlDQWdJQ0FnSUNCc1pYUWdiM0pwWjJsdVlXd2dQU0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE03WEc0Z0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1d1lYSjBhV0ZzY3lBOUlHVjRkR1Z1WkNoN2ZTd2diM0pwWjJsdVlXd3NJSEJ5YjNCekxuQmhjblJwWVd4ektUdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGRDQTlJR1p1S0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wTzF4dUlDQWdJQ0FnSUNCamIyNTBZV2x1WlhJdWNHRnlkR2xoYkhNZ1BTQnZjbWxuYVc1aGJEdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxkRHRjYmlBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjSEp2Y0hNdWNHRnlkR2xoYkhOYmIzQjBhVzl1Y3k1aGNtZHpXekJkWFNBOUlHOXdkR2x2Ym5NdVptNDdYRzVjYmlBZ0lDQnlaWFIxY200Z2NtVjBPMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ2VuZExpbmVOdW1iZXInLCAnbWVzc2FnZScsICduYW1lJywgJ251bWJlcicsICdzdGFjayddO1xuXG5mdW5jdGlvbiBFeGNlcHRpb24obWVzc2FnZSwgbm9kZSkge1xuICB2YXIgbG9jID0gbm9kZSAmJiBub2RlLmxvYyxcbiAgICAgIGxpbmUgPSB1bmRlZmluZWQsXG4gICAgICBlbmRMaW5lTnVtYmVyID0gdW5kZWZpbmVkLFxuICAgICAgY29sdW1uID0gdW5kZWZpbmVkLFxuICAgICAgZW5kQ29sdW1uID0gdW5kZWZpbmVkO1xuXG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgZW5kTGluZU51bWJlciA9IGxvYy5lbmQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuICAgIGVuZENvbHVtbiA9IGxvYy5lbmQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICB2YXIgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IGVuZExpbmVOdW1iZXI7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGNvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2VuZENvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogZW5kQ29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChub3ApIHtcbiAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBFeGNlcHRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJWNFkyVndkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5MRlZCUVZVc1IwRkJSeXhEUVVOcVFpeGhRVUZoTEVWQlEySXNWVUZCVlN4RlFVTldMRmxCUVZrc1JVRkRXaXhsUVVGbExFVkJRMllzVTBGQlV5eEZRVU5VTEUxQlFVMHNSVUZEVGl4UlFVRlJMRVZCUTFJc1QwRkJUeXhEUVVOU0xFTkJRVU03TzBGQlJVWXNVMEZCVXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU5vUXl4TlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVYzdUVUZEZUVJc1NVRkJTU3haUVVGQk8wMUJRMG9zWVVGQllTeFpRVUZCTzAxQlEySXNUVUZCVFN4WlFVRkJPMDFCUTA0c1UwRkJVeXhaUVVGQkxFTkJRVU03TzBGQlJWb3NUVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRVQ3hSUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNN1FVRkRkRUlzYVVKQlFXRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU0zUWl4VlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZETVVJc1lVRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRPenRCUVVVelFpeFhRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETzBkQlEzaERPenRCUVVWRUxFMUJRVWtzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN096dEJRVWN4UkN4UFFVRkxMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdEJRVU5vUkN4UlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBkQlF6bERPenM3UVVGSFJDeE5RVUZKTEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJUdEJRVU16UWl4VFFVRkxMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wZEJRekZET3p0QlFVVkVMRTFCUVVrN1FVRkRSaXhSUVVGSkxFZEJRVWNzUlVGQlJUdEJRVU5RTEZWQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRM1pDTEZWQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1lVRkJZU3hEUVVGRE96czdPMEZCU1c1RExGVkJRVWtzVFVGQlRTeERRVUZETEdOQlFXTXNSVUZCUlR0QlFVTjZRaXhqUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVN1FVRkRjRU1zWlVGQlN5eEZRVUZGTEUxQlFVMDdRVUZEWWl4dlFrRkJWU3hGUVVGRkxFbEJRVWs3VTBGRGFrSXNRMEZCUXl4RFFVRkRPMEZCUTBnc1kwRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZPMEZCUTNaRExHVkJRVXNzUlVGQlJTeFRRVUZUTzBGQlEyaENMRzlDUVVGVkxFVkJRVVVzU1VGQlNUdFRRVU5xUWl4RFFVRkRMRU5CUVVNN1QwRkRTaXhOUVVGTk8wRkJRMHdzV1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1FVRkRja0lzV1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1QwRkROVUk3UzBGRFJqdEhRVU5HTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN08wZEJSV0k3UTBGRFJqczdRVUZGUkN4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTEVOQlFVTTdPM0ZDUVVWdVFpeFRRVUZUSWl3aVptbHNaU0k2SW1WNFkyVndkR2x2Ymk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElHVnljbTl5VUhKdmNITWdQU0JiWEc0Z0lDZGtaWE5qY21sd2RHbHZiaWNzWEc0Z0lDZG1hV3hsVG1GdFpTY3NYRzRnSUNkc2FXNWxUblZ0WW1WeUp5eGNiaUFnSjJWdVpFeHBibVZPZFcxaVpYSW5MRnh1SUNBbmJXVnpjMkZuWlNjc1hHNGdJQ2R1WVcxbEp5eGNiaUFnSjI1MWJXSmxjaWNzWEc0Z0lDZHpkR0ZqYXlkY2JsMDdYRzVjYm1aMWJtTjBhVzl1SUVWNFkyVndkR2x2YmlodFpYTnpZV2RsTENCdWIyUmxLU0I3WEc0Z0lHeGxkQ0JzYjJNZ1BTQnViMlJsSUNZbUlHNXZaR1V1Ykc5akxGeHVJQ0FnSUd4cGJtVXNYRzRnSUNBZ1pXNWtUR2x1WlU1MWJXSmxjaXhjYmlBZ0lDQmpiMngxYlc0c1hHNGdJQ0FnWlc1a1EyOXNkVzF1TzF4dVhHNGdJR2xtSUNoc2IyTXBJSHRjYmlBZ0lDQnNhVzVsSUQwZ2JHOWpMbk4wWVhKMExteHBibVU3WEc0Z0lDQWdaVzVrVEdsdVpVNTFiV0psY2lBOUlHeHZZeTVsYm1RdWJHbHVaVHRjYmlBZ0lDQmpiMngxYlc0Z1BTQnNiMk11YzNSaGNuUXVZMjlzZFcxdU8xeHVJQ0FnSUdWdVpFTnZiSFZ0YmlBOUlHeHZZeTVsYm1RdVkyOXNkVzF1TzF4dVhHNGdJQ0FnYldWemMyRm5aU0FyUFNBbklDMGdKeUFySUd4cGJtVWdLeUFuT2ljZ0t5QmpiMngxYlc0N1hHNGdJSDFjYmx4dUlDQnNaWFFnZEcxd0lEMGdSWEp5YjNJdWNISnZkRzkwZVhCbExtTnZibk4wY25WamRHOXlMbU5oYkd3b2RHaHBjeXdnYldWemMyRm5aU2s3WEc1Y2JpQWdMeThnVlc1bWIzSjBkVzVoZEdWc2VTQmxjbkp2Y25NZ1lYSmxJRzV2ZENCbGJuVnRaWEpoWW14bElHbHVJRU5vY205dFpTQW9ZWFFnYkdWaGMzUXBMQ0J6YnlCZ1ptOXlJSEJ5YjNBZ2FXNGdkRzF3WUNCa2IyVnpiaWQwSUhkdmNtc3VYRzRnSUdadmNpQW9iR1YwSUdsa2VDQTlJREE3SUdsa2VDQThJR1Z5Y205eVVISnZjSE11YkdWdVozUm9PeUJwWkhnckt5a2dlMXh1SUNBZ0lIUm9hWE5iWlhKeWIzSlFjbTl3YzF0cFpIaGRYU0E5SUhSdGNGdGxjbkp2Y2xCeWIzQnpXMmxrZUYxZE8xeHVJQ0I5WEc1Y2JpQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJR1ZzYzJVZ0tpOWNiaUFnYVdZZ0tFVnljbTl5TG1OaGNIUjFjbVZUZEdGamExUnlZV05sS1NCN1hHNGdJQ0FnUlhKeWIzSXVZMkZ3ZEhWeVpWTjBZV05yVkhKaFkyVW9kR2hwY3l3Z1JYaGpaWEIwYVc5dUtUdGNiaUFnZlZ4dVhHNGdJSFJ5ZVNCN1hHNGdJQ0FnYVdZZ0tHeHZZeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNhVzVsVG5WdFltVnlJRDBnYkdsdVpUdGNiaUFnSUNBZ0lIUm9hWE11Wlc1a1RHbHVaVTUxYldKbGNpQTlJR1Z1WkV4cGJtVk9kVzFpWlhJN1hHNWNiaUFnSUNBZ0lDOHZJRmR2Y21zZ1lYSnZkVzVrSUdsemMzVmxJSFZ1WkdWeUlITmhabUZ5YVNCM2FHVnlaU0IzWlNCallXNG5kQ0JrYVhKbFkzUnNlU0J6WlhRZ2RHaGxJR052YkhWdGJpQjJZV3gxWlZ4dUlDQWdJQ0FnTHlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUc1bGVIUWdLaTljYmlBZ0lDQWdJR2xtSUNoUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa3BJSHRjYmlBZ0lDQWdJQ0FnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtIUm9hWE1zSUNkamIyeDFiVzRuTENCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZzZFdVNklHTnZiSFZ0Yml4Y2JpQWdJQ0FnSUNBZ0lDQmxiblZ0WlhKaFlteGxPaUIwY25WbFhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2RHaHBjeXdnSjJWdVpFTnZiSFZ0Ymljc0lIdGNiaUFnSUNBZ0lDQWdJQ0IyWVd4MVpUb2daVzVrUTI5c2RXMXVMRnh1SUNBZ0lDQWdJQ0FnSUdWdWRXMWxjbUZpYkdVNklIUnlkV1ZjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbU52YkhWdGJpQTlJR052YkhWdGJqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtUkRiMngxYlc0Z1BTQmxibVJEYjJ4MWJXNDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5SUdOaGRHTm9JQ2h1YjNBcElIdGNiaUFnSUNBdktpQkpaMjV2Y21VZ2FXWWdkR2hsSUdKeWIzZHpaWElnYVhNZ2RtVnllU0J3WVhKMGFXTjFiR0Z5SUNvdlhHNGdJSDFjYm4xY2JseHVSWGhqWlhCMGFXOXVMbkJ5YjNSdmRIbHdaU0E5SUc1bGR5QkZjbkp2Y2lncE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkZlR05sY0hScGIyNDdYRzRpWFgwPVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzID0gcmVnaXN0ZXJEZWZhdWx0SGVscGVycztcbmV4cG9ydHMubW92ZUhlbHBlclRvSG9va3MgPSBtb3ZlSGVscGVyVG9Ib29rcztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Jsb2NrLWhlbHBlci1taXNzaW5nJyk7XG5cbnZhciBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nKTtcblxudmFyIF9oZWxwZXJzRWFjaCA9IHJlcXVpcmUoJy4vaGVscGVycy9lYWNoJyk7XG5cbnZhciBfaGVscGVyc0VhY2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0VhY2gpO1xuXG52YXIgX2hlbHBlcnNIZWxwZXJNaXNzaW5nID0gcmVxdWlyZSgnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJyk7XG5cbnZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0hlbHBlck1pc3NpbmcpO1xuXG52YXIgX2hlbHBlcnNJZiA9IHJlcXVpcmUoJy4vaGVscGVycy9pZicpO1xuXG52YXIgX2hlbHBlcnNJZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSWYpO1xuXG52YXIgX2hlbHBlcnNMb2cgPSByZXF1aXJlKCcuL2hlbHBlcnMvbG9nJyk7XG5cbnZhciBfaGVscGVyc0xvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9nKTtcblxudmFyIF9oZWxwZXJzTG9va3VwID0gcmVxdWlyZSgnLi9oZWxwZXJzL2xvb2t1cCcpO1xuXG52YXIgX2hlbHBlcnNMb29rdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc0xvb2t1cCk7XG5cbnZhciBfaGVscGVyc1dpdGggPSByZXF1aXJlKCcuL2hlbHBlcnMvd2l0aCcpO1xuXG52YXIgX2hlbHBlcnNXaXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNXaXRoKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0SGVscGVycyhpbnN0YW5jZSkge1xuICBfaGVscGVyc0Jsb2NrSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzRWFjaDJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzSGVscGVyTWlzc2luZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzSWYyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc0xvZzJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzTG9va3VwMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNXaXRoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbn1cblxuZnVuY3Rpb24gbW92ZUhlbHBlclRvSG9va3MoaW5zdGFuY2UsIGhlbHBlck5hbWUsIGtlZXBIZWxwZXIpIHtcbiAgaWYgKGluc3RhbmNlLmhlbHBlcnNbaGVscGVyTmFtZV0pIHtcbiAgICBpbnN0YW5jZS5ob29rc1toZWxwZXJOYW1lXSA9IGluc3RhbmNlLmhlbHBlcnNbaGVscGVyTmFtZV07XG4gICAgaWYgKCFrZWVwSGVscGVyKSB7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICB9XG4gIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3TzNsRFFVRjFReXhuUTBGQlowTTdPenM3TWtKQlF6bERMR2RDUVVGblFqczdPenR2UTBGRFVDd3dRa0ZCTUVJN096czdlVUpCUTNKRExHTkJRV003T3pzN01FSkJRMklzWlVGQlpUczdPenMyUWtGRFdpeHJRa0ZCYTBJN096czdNa0pCUTNCQ0xHZENRVUZuUWpzN096dEJRVVZzUXl4VFFVRlRMSE5DUVVGelFpeERRVUZETEZGQlFWRXNSVUZCUlR0QlFVTXZReXg1UTBGQk1rSXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRja01zTWtKQlFXRXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRka0lzYjBOQlFYTkNMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRMmhETEhsQ1FVRlhMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRM0pDTERCQ1FVRlpMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRM1JDTERaQ1FVRmxMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRM3BDTERKQ1FVRmhMRkZCUVZFc1EwRkJReXhEUVVGRE8wTkJRM2hDT3p0QlFVVk5MRk5CUVZNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVU3UVVGRGJFVXNUVUZCU1N4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTzBGQlEyaERMRmxCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEJRVU14UkN4UlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8wRkJRMllzWVVGQlR5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wdEJRM0pETzBkQlEwWTdRMEZEUmlJc0ltWnBiR1VpT2lKb1pXeHdaWEp6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISmxaMmx6ZEdWeVFteHZZMnRJWld4d1pYSk5hWE56YVc1bklHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5aWJHOWpheTFvWld4d1pYSXRiV2x6YzJsdVp5YzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSkZZV05vSUdaeWIyMGdKeTR2YUdWc2NHVnljeTlsWVdOb0p6dGNibWx0Y0c5eWRDQnlaV2RwYzNSbGNraGxiSEJsY2sxcGMzTnBibWNnWm5KdmJTQW5MaTlvWld4d1pYSnpMMmhsYkhCbGNpMXRhWE56YVc1bkp6dGNibWx0Y0c5eWRDQnlaV2RwYzNSbGNrbG1JR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OXBaaWM3WEc1cGJYQnZjblFnY21WbmFYTjBaWEpNYjJjZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJ4dlp5YzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSk1iMjlyZFhBZ1puSnZiU0FuTGk5b1pXeHdaWEp6TDJ4dmIydDFjQ2M3WEc1cGJYQnZjblFnY21WbmFYTjBaWEpYYVhSb0lHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5M2FYUm9KenRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhKbFoybHpkR1Z5UkdWbVlYVnNkRWhsYkhCbGNuTW9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2NtVm5hWE4wWlhKQ2JHOWphMGhsYkhCbGNrMXBjM05wYm1jb2FXNXpkR0Z1WTJVcE8xeHVJQ0J5WldkcGMzUmxja1ZoWTJnb2FXNXpkR0Z1WTJVcE8xeHVJQ0J5WldkcGMzUmxja2hsYkhCbGNrMXBjM05wYm1jb2FXNXpkR0Z1WTJVcE8xeHVJQ0J5WldkcGMzUmxja2xtS0dsdWMzUmhibU5sS1R0Y2JpQWdjbVZuYVhOMFpYSk1iMmNvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNreHZiMnQxY0NocGJuTjBZVzVqWlNrN1hHNGdJSEpsWjJsemRHVnlWMmwwYUNocGJuTjBZVzVqWlNrN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ0YjNabFNHVnNjR1Z5Vkc5SWIyOXJjeWhwYm5OMFlXNWpaU3dnYUdWc2NHVnlUbUZ0WlN3Z2EyVmxjRWhsYkhCbGNpa2dlMXh1SUNCcFppQW9hVzV6ZEdGdVkyVXVhR1ZzY0dWeWMxdG9aV3h3WlhKT1lXMWxYU2tnZTF4dUlDQWdJR2x1YzNSaGJtTmxMbWh2YjJ0elcyaGxiSEJsY2s1aGJXVmRJRDBnYVc1emRHRnVZMlV1YUdWc2NHVnljMXRvWld4d1pYSk9ZVzFsWFR0Y2JpQWdJQ0JwWmlBb0lXdGxaWEJJWld4d1pYSXBJSHRjYmlBZ0lDQWdJR1JsYkdWMFpTQnBibk4wWVc1alpTNW9aV3h3WlhKelcyaGxiSEJsY2s1aGJXVmRPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgIGlmIChjb250ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgICAgb3B0aW9ucy5pZHMgPSBbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzLmVhY2goY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICB2YXIgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12WW14dlkyc3RhR1ZzY0dWeUxXMXBjM05wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenR4UWtGQmQwUXNWVUZCVlRzN2NVSkJSVzVFTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzVlVGQlV5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTNaRkxGRkJRVWtzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBPMUZCUXpOQ0xFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVWc1FpeFJRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRVZCUVVVN1FVRkRjRUlzWVVGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRha0lzVFVGQlRTeEpRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1QwRkJUeXhKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU12UXl4aFFVRlBMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dExRVU4wUWl4TlFVRk5MRWxCUVVrc1pVRkJVU3hQUVVGUExFTkJRVU1zUlVGQlJUdEJRVU16UWl4VlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzUkNMRmxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5tTEdsQ1FVRlBMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpsQ096dEJRVVZFTEdWQlFVOHNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMDlCUTJoRUxFMUJRVTA3UVVGRFRDeGxRVUZQTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRQUVVOMFFqdExRVU5HTEUxQlFVMDdRVUZEVEN4VlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTXZRaXhaUVVGSkxFbEJRVWtzUjBGQlJ5eHRRa0ZCV1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRGNrTXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXg1UWtGRGFrSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRM2hDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUTJJc1EwRkJRenRCUVVOR0xHVkJRVThzUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJRenRQUVVNeFFqczdRVUZGUkN4aFFVRlBMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTMEZETjBJN1IwRkRSaXhEUVVGRExFTkJRVU03UTBGRFNpSXNJbVpwYkdVaU9pSmliRzlqYXkxb1pXeHdaWEl0YldsemMybHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHRndjR1Z1WkVOdmJuUmxlSFJRWVhSb0xDQmpjbVZoZEdWR2NtRnRaU3dnYVhOQmNuSmhlU0I5SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRvYVc1emRHRnVZMlVwSUh0Y2JpQWdhVzV6ZEdGdVkyVXVjbVZuYVhOMFpYSklaV3h3WlhJb0oySnNiMk5yU0dWc2NHVnlUV2x6YzJsdVp5Y3NJR1oxYm1OMGFXOXVLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnNaWFFnYVc1MlpYSnpaU0E5SUc5d2RHbHZibk11YVc1MlpYSnpaU3hjYmlBZ0lDQWdJR1p1SUQwZ2IzQjBhVzl1Y3k1bWJqdGNibHh1SUNBZ0lHbG1JQ2hqYjI1MFpYaDBJRDA5UFNCMGNuVmxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvZEdocGN5azdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMjUwWlhoMElEMDlQU0JtWVd4elpTQjhmQ0JqYjI1MFpYaDBJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnBiblpsY25ObEtIUm9hWE1wTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOQmNuSmhlU2hqYjI1MFpYaDBLU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHTnZiblJsZUhRdWJHVnVaM1JvSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1cFpITXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdmNIUnBiMjV6TG1sa2N5QTlJRnR2Y0hScGIyNXpMbTVoYldWZE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YzNSaGJtTmxMbWhsYkhCbGNuTXVaV0ZqYUNoamIyNTBaWGgwTENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJwYm5abGNuTmxLSFJvYVhNcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1a1lYUmhJQ1ltSUc5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ0lDQWdJR3hsZENCa1lYUmhJRDBnWTNKbFlYUmxSbkpoYldVb2IzQjBhVzl1Y3k1a1lYUmhLVHRjYmlBZ0lDQWdJQ0FnWkdGMFlTNWpiMjUwWlhoMFVHRjBhQ0E5SUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvS0Z4dUlDQWdJQ0FnSUNBZ0lHOXdkR2x2Ym5NdVpHRjBZUzVqYjI1MFpYaDBVR0YwYUN4Y2JpQWdJQ0FnSUNBZ0lDQnZjSFJwYjI1ekxtNWhiV1ZjYmlBZ0lDQWdJQ0FnS1R0Y2JpQWdJQ0FnSUNBZ2IzQjBhVzl1Y3lBOUlIc2daR0YwWVRvZ1pHRjBZU0I5TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnWm00b1kyOXVkR1Y0ZEN3Z2IzQjBhVzl1Y3lrN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4uL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2VhY2gnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIHZhciBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSA9IHVuZGVmaW5lZCxcbiAgICAgICAgY29udGV4dFBhdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcbiAgICB9XG5cbiAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IF91dGlscy5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRbZmllbGRdLCBmaWVsZF0sIFtjb250ZXh0UGF0aCArIGZpZWxkLCBudWxsXSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKF91dGlscy5pc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLlN5bWJvbCAmJiBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgIHZhciBuZXdDb250ZXh0ID0gW107XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGNvbnRleHRbZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgZm9yICh2YXIgaXQgPSBpdGVyYXRvci5uZXh0KCk7ICFpdC5kb25lOyBpdCA9IGl0ZXJhdG9yLm5leHQoKSkge1xuICAgICAgICAgIG5ld0NvbnRleHQucHVzaChpdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dCA9IG5ld0NvbnRleHQ7XG4gICAgICAgIGZvciAodmFyIGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcHJpb3JLZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBPYmplY3Qua2V5cyhjb250ZXh0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIC8vIFdlJ3JlIHJ1bm5pbmcgdGhlIGl0ZXJhdGlvbnMgb25lIHN0ZXAgb3V0IG9mIHN5bmMgc28gd2UgY2FuIGRldGVjdFxuICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgICAgLy8gYW4gaXRlcm1lZGlhdGUga2V5cyBhcnJheS5cbiAgICAgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW9yS2V5ID0ga2V5O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChwcmlvcktleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZaV0ZqYUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzNGQ1FVMVBMRlZCUVZVN08zbENRVU5MTEdOQlFXTTdPenM3Y1VKQlJYSkNMRlZCUVZNc1VVRkJVU3hGUVVGRk8wRkJRMmhETEZWQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVk1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTjZSQ3hSUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlExb3NXVUZCVFN3eVFrRkJZeXcyUWtGQk5rSXNRMEZCUXl4RFFVRkRPMHRCUTNCRU96dEJRVVZFTEZGQlFVa3NSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhGUVVGRk8xRkJRMnBDTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUenRSUVVONlFpeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTk1MRWRCUVVjc1IwRkJSeXhGUVVGRk8xRkJRMUlzU1VGQlNTeFpRVUZCTzFGQlEwb3NWMEZCVnl4WlFVRkJMRU5CUVVNN08wRkJSV1FzVVVGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVU3UVVGREwwSXNhVUpCUVZjc1IwRkRWQ3g1UWtGQmEwSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dExRVU55UlRzN1FVRkZSQ3hSUVVGSkxHdENRVUZYTEU5QlFVOHNRMEZCUXl4RlFVRkZPMEZCUTNaQ0xHRkJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRemxDT3p0QlFVVkVMRkZCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJUdEJRVU5vUWl4VlFVRkpMRWRCUVVjc2JVSkJRVmtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTJ4RE96dEJRVVZFTEdGQlFWTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeEZRVUZGTzBGQlEzcERMRlZCUVVrc1NVRkJTU3hGUVVGRk8wRkJRMUlzV1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRha0lzV1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRia0lzV1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM3BDTEZsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF6czdRVUZGYmtJc1dVRkJTU3hYUVVGWExFVkJRVVU3UVVGRFppeGpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRGVFTTdUMEZEUmpzN1FVRkZSQ3hUUVVGSExFZEJRMFFzUjBGQlJ5eEhRVU5JTEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRGFrSXNXVUZCU1N4RlFVRkZMRWxCUVVrN1FVRkRWaXh0UWtGQlZ5eEZRVUZGTEcxQ1FVTllMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVTjJRaXhEUVVGRExGZEJRVmNzUjBGQlJ5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUXpWQ08wOUJRMFlzUTBGQlF5eERRVUZETzB0QlEwNDdPMEZCUlVRc1VVRkJTU3hQUVVGUExFbEJRVWtzVDBGQlR5eFBRVUZQTEV0QlFVc3NVVUZCVVN4RlFVRkZPMEZCUXpGRExGVkJRVWtzWlVGQlVTeFBRVUZQTEVOQlFVTXNSVUZCUlR0QlFVTndRaXhoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjJReXhqUVVGSkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVWQlFVVTdRVUZEYUVJc2VVSkJRV0VzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWRCUXk5RE8xTkJRMFk3VDBGRFJpeE5RVUZOTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRCUVVNelJDeFpRVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRkRUlzV1VGQlRTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXp0QlFVTnVSQ3hoUVVGTExFbEJRVWtzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJUdEJRVU0zUkN4dlFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRNMEk3UVVGRFJDeGxRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRPMEZCUTNKQ0xHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNaRExIVkNRVUZoTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNdlF6dFBRVU5HTEUxQlFVMDdPMEZCUTB3c1kwRkJTU3hSUVVGUkxGbEJRVUVzUTBGQlF6czdRVUZGWWl4blFrRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJRU3hIUVVGSExFVkJRVWs3T3pzN1FVRkpiRU1zWjBKQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRCUVVNeFFpd3lRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYUVNN1FVRkRSQ3h2UWtGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTm1MR0ZCUVVNc1JVRkJSU3hEUVVGRE8xZEJRMHdzUTBGQlF5eERRVUZETzBGQlEwZ3NZMEZCU1N4UlFVRlJMRXRCUVVzc1UwRkJVeXhGUVVGRk8wRkJRekZDTEhsQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1YwRkRkRU03TzA5QlEwWTdTMEZEUmpzN1FVRkZSQ3hSUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdRVUZEV0N4VFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEzSkNPenRCUVVWRUxGZEJRVThzUjBGQlJ5eERRVUZETzBkQlExb3NRMEZCUXl4RFFVRkRPME5CUTBvaUxDSm1hV3hsSWpvaVpXRmphQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1hHNGdJR0Z3Y0dWdVpFTnZiblJsZUhSUVlYUm9MRnh1SUNCaWJHOWphMUJoY21GdGN5eGNiaUFnWTNKbFlYUmxSbkpoYldVc1hHNGdJR2x6UVhKeVlYa3NYRzRnSUdselJuVnVZM1JwYjI1Y2JuMGdabkp2YlNBbkxpNHZkWFJwYkhNbk8xeHVhVzF3YjNKMElFVjRZMlZ3ZEdsdmJpQm1jbTl0SUNjdUxpOWxlR05sY0hScGIyNG5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaWhwYm5OMFlXNWpaU2tnZTF4dUlDQnBibk4wWVc1alpTNXlaV2RwYzNSbGNraGxiSEJsY2lnblpXRmphQ2NzSUdaMWJtTjBhVzl1S0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wSUh0Y2JpQWdJQ0JwWmlBb0lXOXdkR2x2Ym5NcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMDExYzNRZ2NHRnpjeUJwZEdWeVlYUnZjaUIwYnlBalpXRmphQ2NwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCbWJpQTlJRzl3ZEdsdmJuTXVabTRzWEc0Z0lDQWdJQ0JwYm5abGNuTmxJRDBnYjNCMGFXOXVjeTVwYm5abGNuTmxMRnh1SUNBZ0lDQWdhU0E5SURBc1hHNGdJQ0FnSUNCeVpYUWdQU0FuSnl4Y2JpQWdJQ0FnSUdSaGRHRXNYRzRnSUNBZ0lDQmpiMjUwWlhoMFVHRjBhRHRjYmx4dUlDQWdJR2xtSUNodmNIUnBiMjV6TG1SaGRHRWdKaVlnYjNCMGFXOXVjeTVwWkhNcElIdGNiaUFnSUNBZ0lHTnZiblJsZUhSUVlYUm9JRDFjYmlBZ0lDQWdJQ0FnWVhCd1pXNWtRMjl1ZEdWNGRGQmhkR2dvYjNCMGFXOXVjeTVrWVhSaExtTnZiblJsZUhSUVlYUm9MQ0J2Y0hScGIyNXpMbWxrYzFzd1hTa2dLeUFuTGljN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHbHpSblZ1WTNScGIyNG9ZMjl1ZEdWNGRDa3BJSHRjYmlBZ0lDQWdJR052Ym5SbGVIUWdQU0JqYjI1MFpYaDBMbU5oYkd3b2RHaHBjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0c5d2RHbHZibk11WkdGMFlTa2dlMXh1SUNBZ0lDQWdaR0YwWVNBOUlHTnlaV0YwWlVaeVlXMWxLRzl3ZEdsdmJuTXVaR0YwWVNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnWlhobFkwbDBaWEpoZEdsdmJpaG1hV1ZzWkN3Z2FXNWtaWGdzSUd4aGMzUXBJSHRjYmlBZ0lDQWdJR2xtSUNoa1lYUmhLU0I3WEc0Z0lDQWdJQ0FnSUdSaGRHRXVhMlY1SUQwZ1ptbGxiR1E3WEc0Z0lDQWdJQ0FnSUdSaGRHRXVhVzVrWlhnZ1BTQnBibVJsZUR0Y2JpQWdJQ0FnSUNBZ1pHRjBZUzVtYVhKemRDQTlJR2x1WkdWNElEMDlQU0F3TzF4dUlDQWdJQ0FnSUNCa1lYUmhMbXhoYzNRZ1BTQWhJV3hoYzNRN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dOdmJuUmxlSFJRWVhSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdGMFlTNWpiMjUwWlhoMFVHRjBhQ0E5SUdOdmJuUmxlSFJRWVhSb0lDc2dabWxsYkdRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwSUQxY2JpQWdJQ0FnSUNBZ2NtVjBJQ3RjYmlBZ0lDQWdJQ0FnWm00b1kyOXVkR1Y0ZEZ0bWFXVnNaRjBzSUh0Y2JpQWdJQ0FnSUNBZ0lDQmtZWFJoT2lCa1lYUmhMRnh1SUNBZ0lDQWdJQ0FnSUdKc2IyTnJVR0Z5WVcxek9pQmliRzlqYTFCaGNtRnRjeWhjYmlBZ0lDQWdJQ0FnSUNBZ0lGdGpiMjUwWlhoMFcyWnBaV3hrWFN3Z1ptbGxiR1JkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdXMk52Ym5SbGVIUlFZWFJvSUNzZ1ptbGxiR1FzSUc1MWJHeGRYRzRnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9ZMjl1ZEdWNGRDQW1KaUIwZVhCbGIyWWdZMjl1ZEdWNGRDQTlQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0FnSUdsbUlDaHBjMEZ5Y21GNUtHTnZiblJsZUhRcEtTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR29nUFNCamIyNTBaWGgwTG14bGJtZDBhRHNnYVNBOElHbzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocElHbHVJR052Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjRaV05KZEdWeVlYUnBiMjRvYVN3Z2FTd2dhU0E5UFQwZ1kyOXVkR1Y0ZEM1c1pXNW5kR2dnTFNBeEtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1oyeHZZbUZzTGxONWJXSnZiQ0FtSmlCamIyNTBaWGgwVzJkc2IySmhiQzVUZVcxaWIyd3VhWFJsY21GMGIzSmRLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzVsZDBOdmJuUmxlSFFnUFNCYlhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FYUmxjbUYwYjNJZ1BTQmpiMjUwWlhoMFcyZHNiMkpoYkM1VGVXMWliMnd1YVhSbGNtRjBiM0pkS0NrN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHbDBJRDBnYVhSbGNtRjBiM0l1Ym1WNGRDZ3BPeUFoYVhRdVpHOXVaVHNnYVhRZ1BTQnBkR1Z5WVhSdmNpNXVaWGgwS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0J1WlhkRGIyNTBaWGgwTG5CMWMyZ29hWFF1ZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdOdmJuUmxlSFFnUFNCdVpYZERiMjUwWlhoME8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnFJRDBnWTI5dWRHVjRkQzVzWlc1bmRHZzdJR2tnUENCcU95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmxlR1ZqU1hSbGNtRjBhVzl1S0drc0lHa3NJR2tnUFQwOUlHTnZiblJsZUhRdWJHVnVaM1JvSUMwZ01TazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR3hsZENCd2NtbHZja3RsZVR0Y2JseHVJQ0FnSUNBZ0lDQlBZbXBsWTNRdWEyVjVjeWhqYjI1MFpYaDBLUzVtYjNKRllXTm9LR3RsZVNBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1YyVW5jbVVnY25WdWJtbHVaeUIwYUdVZ2FYUmxjbUYwYVc5dWN5QnZibVVnYzNSbGNDQnZkWFFnYjJZZ2MzbHVZeUJ6YnlCM1pTQmpZVzRnWkdWMFpXTjBYRzRnSUNBZ0lDQWdJQ0FnTHk4Z2RHaGxJR3hoYzNRZ2FYUmxjbUYwYVc5dUlIZHBkR2h2ZFhRZ2FHRjJaU0IwYnlCelkyRnVJSFJvWlNCdlltcGxZM1FnZEhkcFkyVWdZVzVrSUdOeVpXRjBaVnh1SUNBZ0lDQWdJQ0FnSUM4dklHRnVJR2wwWlhKdFpXUnBZWFJsSUd0bGVYTWdZWEp5WVhrdVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWFXOXlTMlY1SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVjRaV05KZEdWeVlYUnBiMjRvY0hKcGIzSkxaWGtzSUdrZ0xTQXhLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdjSEpwYjNKTFpYa2dQU0JyWlhrN1hHNGdJQ0FnSUNBZ0lDQWdhU3NyTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWFXOXlTMlY1SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCbGVHVmpTWFJsY21GMGFXOXVLSEJ5YVc5eVMyVjVMQ0JwSUMwZ01Td2dkSEoxWlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hU0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwSUQwZ2FXNTJaWEp6WlNoMGFHbHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2NtVjBPMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdoZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKCkgLyogW2FyZ3MsIF1vcHRpb25zICove1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBBIG1pc3NpbmcgZmllbGQgaW4gYSB7e2Zvb319IGNvbnN0cnVjdC5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbWVvbmUgaXMgYWN0dWFsbHkgdHJ5aW5nIHRvIGNhbGwgc29tZXRoaW5nLCBibG93IHVwLlxuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZhR1ZzY0dWeUxXMXBjM05wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0NVFrRkJjMElzWTBGQll6czdPenR4UWtGRmNrSXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4bFFVRmxMRVZCUVVVc2FVTkJRV2RETzBGQlEzWkZMRkZCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdPMEZCUlRGQ0xHRkJRVThzVTBGQlV5eERRVUZETzB0QlEyeENMRTFCUVUwN08wRkJSVXdzV1VGQlRTd3lRa0ZEU2l4dFFrRkJiVUlzUjBGQlJ5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVTnFSU3hEUVVGRE8wdEJRMGc3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKb1pXeHdaWEl0YldsemMybHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCRmVHTmxjSFJwYjI0Z1puSnZiU0FuTGk0dlpYaGpaWEIwYVc5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJobGJIQmxjazFwYzNOcGJtY25MQ0JtZFc1amRHbHZiaWd2S2lCYllYSm5jeXdnWFc5d2RHbHZibk1nS2k4cElIdGNiaUFnSUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0x5OGdRU0J0YVhOemFXNW5JR1pwWld4a0lHbHVJR0VnZTN0bWIyOTlmU0JqYjI1emRISjFZM1F1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkVzVrWldacGJtVmtPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5QlRiMjFsYjI1bElHbHpJR0ZqZEhWaGJHeDVJSFJ5ZVdsdVp5QjBieUJqWVd4c0lITnZiV1YwYUdsdVp5d2dZbXh2ZHlCMWNDNWNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9YRzRnSUNBZ0lDQWdJQ2ROYVhOemFXNW5JR2hsYkhCbGNqb2dYQ0luSUNzZ1lYSm5kVzFsYm5SelcyRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ0xTQXhYUzV1WVcxbElDc2dKMXdpSjF4dUlDQWdJQ0FnS1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnI2lmIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHtcbiAgICAgIGNvbmRpdGlvbmFsID0gY29uZGl0aW9uYWwuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG4gICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcbiAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuICAgIGlmICghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCB8fCBfdXRpbHMuaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCcjdW5sZXNzIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtcbiAgICAgIGZuOiBvcHRpb25zLmludmVyc2UsXG4gICAgICBpbnZlcnNlOiBvcHRpb25zLmZuLFxuICAgICAgaGFzaDogb3B0aW9ucy5oYXNoXG4gICAgfSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZhV1l1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenR4UWtGQmIwTXNWVUZCVlRzN2VVSkJRM2hDTEdOQlFXTTdPenM3Y1VKQlJYSkNMRlZCUVZNc1VVRkJVU3hGUVVGRk8wRkJRMmhETEZWQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVk1zVjBGQlZ5eEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTXpSQ3hSUVVGSkxGTkJRVk1zUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUTNwQ0xGbEJRVTBzTWtKQlFXTXNiVU5CUVcxRExFTkJRVU1zUTBGQlF6dExRVU14UkR0QlFVTkVMRkZCUVVrc2EwSkJRVmNzVjBGQlZ5eERRVUZETEVWQlFVVTdRVUZETTBJc2FVSkJRVmNzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM1JET3pzN096dEJRVXRFTEZGQlFVa3NRVUZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkxMR1ZCUVZFc1YwRkJWeXhEUVVGRExFVkJRVVU3UVVGRGRrVXNZVUZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlF6bENMRTFCUVUwN1FVRkRUQ3hoUVVGUExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRla0k3UjBGRFJpeERRVUZETEVOQlFVTTdPMEZCUlVnc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eFJRVUZSTEVWQlFVVXNWVUZCVXl4WFFVRlhMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJReTlFTEZGQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFVkJRVVU3UVVGRGVrSXNXVUZCVFN3eVFrRkJZeXgxUTBGQmRVTXNRMEZCUXl4RFFVRkRPMHRCUXpsRU8wRkJRMFFzVjBGQlR5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZPMEZCUTNCRUxGRkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTXNUMEZCVHp0QlFVTnVRaXhoUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVWQlFVVTdRVUZEYmtJc1ZVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eEpRVUZKTzB0QlEyNUNMRU5CUVVNc1EwRkJRenRIUVVOS0xFTkJRVU1zUTBGQlF6dERRVU5LSWl3aVptbHNaU0k2SW1sbUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYVhORmJYQjBlU3dnYVhOR2RXNWpkR2x2YmlCOUlHWnliMjBnSnk0dUwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCRmVHTmxjSFJwYjI0Z1puSnZiU0FuTGk0dlpYaGpaWEIwYVc5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJsbUp5d2dablZ1WTNScGIyNG9ZMjl1WkdsMGFXOXVZV3dzSUc5d2RHbHZibk1wSUh0Y2JpQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBaFBTQXlLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NjamFXWWdjbVZ4ZFdseVpYTWdaWGhoWTNSc2VTQnZibVVnWVhKbmRXMWxiblFuS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0dselJuVnVZM1JwYjI0b1kyOXVaR2wwYVc5dVlXd3BLU0I3WEc0Z0lDQWdJQ0JqYjI1a2FYUnBiMjVoYkNBOUlHTnZibVJwZEdsdmJtRnNMbU5oYkd3b2RHaHBjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUkdWbVlYVnNkQ0JpWldoaGRtbHZjaUJwY3lCMGJ5QnlaVzVrWlhJZ2RHaGxJSEJ2YzJsMGFYWmxJSEJoZEdnZ2FXWWdkR2hsSUhaaGJIVmxJR2x6SUhSeWRYUm9lU0JoYm1RZ2JtOTBJR1Z0Y0hSNUxseHVJQ0FnSUM4dklGUm9aU0JnYVc1amJIVmtaVnBsY205Z0lHOXdkR2x2YmlCdFlYa2dZbVVnYzJWMElIUnZJSFJ5WldGMElIUm9aU0JqYjI1a2RHbHZibUZzSUdGeklIQjFjbVZzZVNCdWIzUWdaVzF3ZEhrZ1ltRnpaV1FnYjI0Z2RHaGxYRzRnSUNBZ0x5OGdZbVZvWVhacGIzSWdiMllnYVhORmJYQjBlUzRnUldabVpXTjBhWFpsYkhrZ2RHaHBjeUJrWlhSbGNtMXBibVZ6SUdsbUlEQWdhWE1nYUdGdVpHeGxaQ0JpZVNCMGFHVWdjRzl6YVhScGRtVWdjR0YwYUNCdmNpQnVaV2RoZEdsMlpTNWNiaUFnSUNCcFppQW9LQ0Z2Y0hScGIyNXpMbWhoYzJndWFXNWpiSFZrWlZwbGNtOGdKaVlnSVdOdmJtUnBkR2x2Ym1Gc0tTQjhmQ0JwYzBWdGNIUjVLR052Ym1ScGRHbHZibUZzS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5d2RHbHZibk11YVc1MlpYSnpaU2gwYUdsektUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzl3ZEdsdmJuTXVabTRvZEdocGN5azdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0JwYm5OMFlXNWpaUzV5WldkcGMzUmxja2hsYkhCbGNpZ25kVzVzWlhOekp5d2dablZ1WTNScGIyNG9ZMjl1WkdsMGFXOXVZV3dzSUc5d2RHbHZibk1wSUh0Y2JpQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBaFBTQXlLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NjamRXNXNaWE56SUhKbGNYVnBjbVZ6SUdWNFlXTjBiSGtnYjI1bElHRnlaM1Z0Wlc1MEp5azdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJwYm5OMFlXNWpaUzVvWld4d1pYSnpXeWRwWmlkZExtTmhiR3dvZEdocGN5d2dZMjl1WkdsMGFXOXVZV3dzSUh0Y2JpQWdJQ0FnSUdadU9pQnZjSFJwYjI1ekxtbHVkbVZ5YzJVc1hHNGdJQ0FnSUNCcGJuWmxjbk5sT2lCdmNIUnBiMjV6TG1adUxGeHVJQ0FnSUNBZ2FHRnphRG9nYjNCMGFXOXVjeTVvWVhOb1hHNGdJQ0FnZlNrN1hHNGdJSDBwTzF4dWZWeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24gKCkgLyogbWVzc2FnZSwgb3B0aW9ucyAqL3tcbiAgICB2YXIgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZy5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZiRzluTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVdVc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFVkJRVVVzYTBOQlFXbERPMEZCUXpsRUxGRkJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNCQ0xFOUJRVThzUjBGQlJ5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU0xUXl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZETjBNc1ZVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVONlFqczdRVUZGUkN4UlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRFpDeFJRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU01UWl4WFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZETlVJc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEzSkVMRmRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TFFVTTFRanRCUVVORUxGRkJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSV2hDTEZsQlFWRXNRMEZCUXl4SFFVRkhMRTFCUVVFc1EwRkJXaXhSUVVGUkxFVkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTTdSMEZEZGtJc1EwRkJReXhEUVVGRE8wTkJRMG9pTENKbWFXeGxJam9pYkc5bkxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJ4dlp5Y3NJR1oxYm1OMGFXOXVLQzhxSUcxbGMzTmhaMlVzSUc5d2RHbHZibk1nS2k4cElIdGNiaUFnSUNCc1pYUWdZWEpuY3lBOUlGdDFibVJsWm1sdVpXUmRMRnh1SUNBZ0lDQWdiM0IwYVc5dWN5QTlJR0Z5WjNWdFpXNTBjMXRoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVYwN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUMwZ01Uc2dhU3NyS1NCN1hHNGdJQ0FnSUNCaGNtZHpMbkIxYzJnb1lYSm5kVzFsYm5SelcybGRLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNaWFFnYkdWMlpXd2dQU0F4TzF4dUlDQWdJR2xtSUNodmNIUnBiMjV6TG1oaGMyZ3ViR1YyWld3Z0lUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2JHVjJaV3dnUFNCdmNIUnBiMjV6TG1oaGMyZ3ViR1YyWld3N1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNodmNIUnBiMjV6TG1SaGRHRWdKaVlnYjNCMGFXOXVjeTVrWVhSaExteGxkbVZzSUNFOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUd4bGRtVnNJRDBnYjNCMGFXOXVjeTVrWVhSaExteGxkbVZzTzF4dUlDQWdJSDFjYmlBZ0lDQmhjbWR6V3pCZElEMGdiR1YyWld3N1hHNWNiaUFnSUNCcGJuTjBZVzVqWlM1c2IyY29MaTR1WVhKbmN5azdYRzRnSUgwcE8xeHVmVnh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvb2t1cCcsIGZ1bmN0aW9uIChvYmosIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIC8vIE5vdGUgZm9yIDUuMDogQ2hhbmdlIHRvIFwib2JqID09IG51bGxcIiBpbiA1LjBcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLmxvb2t1cFByb3BlcnR5KG9iaiwgZmllbGQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12Ykc5dmEzVndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN2NVSkJRV1VzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eFJRVUZSTEVWQlFVVXNWVUZCVXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU01UkN4UlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRk96dEJRVVZTTEdGQlFVOHNSMEZCUnl4RFFVRkRPMHRCUTFvN1FVRkRSQ3hYUVVGUExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wZEJRek5ETEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbXh2YjJ0MWNDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVLR2x1YzNSaGJtTmxLU0I3WEc0Z0lHbHVjM1JoYm1ObExuSmxaMmx6ZEdWeVNHVnNjR1Z5S0Nkc2IyOXJkWEFuTENCbWRXNWpkR2x2Ymlodlltb3NJR1pwWld4a0xDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2FXWWdLQ0Z2WW1vcElIdGNiaUFnSUNBZ0lDOHZJRTV2ZEdVZ1ptOXlJRFV1TURvZ1EyaGhibWRsSUhSdklGd2liMkpxSUQwOUlHNTFiR3hjSWlCcGJpQTFMakJjYmlBZ0lDQWdJSEpsZEhWeWJpQnZZbW83WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCdmNIUnBiMjV6TG14dmIydDFjRkJ5YjNCbGNuUjVLRzlpYWl3Z1ptbGxiR1FwTzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4uL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCcjd2l0aCByZXF1aXJlcyBleGFjdGx5IG9uZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoX3V0aWxzLmlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghX3V0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBfdXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmQybDBhQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPM0ZDUVUxUExGVkJRVlU3TzNsQ1FVTkxMR05CUVdNN096czdjVUpCUlhKQ0xGVkJRVk1zVVVGQlVTeEZRVUZGTzBGQlEyaERMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEZWQlFWTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVONlJDeFJRVUZKTEZOQlFWTXNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRM3BDTEZsQlFVMHNNa0pCUVdNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0TFFVTTFSRHRCUVVORUxGRkJRVWtzYTBKQlFWY3NUMEZCVHl4RFFVRkRMRVZCUVVVN1FVRkRka0lzWVVGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE9VSTdPMEZCUlVRc1VVRkJTU3hGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXpzN1FVRkZjRUlzVVVGQlNTeERRVUZETEdWQlFWRXNUMEZCVHl4RFFVRkRMRVZCUVVVN1FVRkRja0lzVlVGQlNTeEpRVUZKTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJRenRCUVVONFFpeFZRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU12UWl4WlFVRkpMRWRCUVVjc2JVSkJRVmtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTJwRExGbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NlVUpCUTJwQ0xFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVTjRRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTm1MRU5CUVVNN1QwRkRTRHM3UVVGRlJDeGhRVUZQTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVN1FVRkRha0lzV1VGQlNTeEZRVUZGTEVsQlFVazdRVUZEVml4dFFrRkJWeXhGUVVGRkxHMUNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMDlCUTJoRkxFTkJRVU1zUTBGQlF6dExRVU5LTEUxQlFVMDdRVUZEVEN4aFFVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZET1VJN1IwRkRSaXhEUVVGRExFTkJRVU03UTBGRFNpSXNJbVpwYkdVaU9pSjNhWFJvTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIdGNiaUFnWVhCd1pXNWtRMjl1ZEdWNGRGQmhkR2dzWEc0Z0lHSnNiMk5yVUdGeVlXMXpMRnh1SUNCamNtVmhkR1ZHY21GdFpTeGNiaUFnYVhORmJYQjBlU3hjYmlBZ2FYTkdkVzVqZEdsdmJseHVmU0JtY205dElDY3VMaTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdSWGhqWlhCMGFXOXVJR1p5YjIwZ0p5NHVMMlY0WTJWd2RHbHZiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1S0dsdWMzUmhibU5sS1NCN1hHNGdJR2x1YzNSaGJtTmxMbkpsWjJsemRHVnlTR1ZzY0dWeUtDZDNhWFJvSnl3Z1puVnVZM1JwYjI0b1kyOXVkR1Y0ZEN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0lDRTlJRElwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0p5TjNhWFJvSUhKbGNYVnBjbVZ6SUdWNFlXTjBiSGtnYjI1bElHRnlaM1Z0Wlc1MEp5azdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHBjMFoxYm1OMGFXOXVLR052Ym5SbGVIUXBLU0I3WEc0Z0lDQWdJQ0JqYjI1MFpYaDBJRDBnWTI5dWRHVjRkQzVqWVd4c0tIUm9hWE1wTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCbWJpQTlJRzl3ZEdsdmJuTXVabTQ3WEc1Y2JpQWdJQ0JwWmlBb0lXbHpSVzF3ZEhrb1kyOXVkR1Y0ZENrcElIdGNiaUFnSUNBZ0lHeGxkQ0JrWVhSaElEMGdiM0IwYVc5dWN5NWtZWFJoTzF4dUlDQWdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdVpHRjBZU0FtSmlCdmNIUnBiMjV6TG1sa2N5a2dlMXh1SUNBZ0lDQWdJQ0JrWVhSaElEMGdZM0psWVhSbFJuSmhiV1VvYjNCMGFXOXVjeTVrWVhSaEtUdGNiaUFnSUNBZ0lDQWdaR0YwWVM1amIyNTBaWGgwVUdGMGFDQTlJR0Z3Y0dWdVpFTnZiblJsZUhSUVlYUm9LRnh1SUNBZ0lDQWdJQ0FnSUc5d2RHbHZibk11WkdGMFlTNWpiMjUwWlhoMFVHRjBhQ3hjYmlBZ0lDQWdJQ0FnSUNCdmNIUnBiMjV6TG1sa2Mxc3dYVnh1SUNBZ0lDQWdJQ0FwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnWm00b1kyOXVkR1Y0ZEN3Z2UxeHVJQ0FnSUNBZ0lDQmtZWFJoT2lCa1lYUmhMRnh1SUNBZ0lDQWdJQ0JpYkc5amExQmhjbUZ0Y3pvZ1lteHZZMnRRWVhKaGJYTW9XMk52Ym5SbGVIUmRMQ0JiWkdGMFlTQW1KaUJrWVhSaExtTnZiblJsZUhSUVlYUm9YU2xjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2IzQjBhVzl1Y3k1cGJuWmxjbk5sS0hSb2FYTXBPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVOZXdMb29rdXBPYmplY3QgPSBjcmVhdGVOZXdMb29rdXBPYmplY3Q7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBcIm51bGxcIi1wcm90b3R5cGUgdG8gYXZvaWQgdHJ1dGh5IHJlc3VsdHMgb24gcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBUaGUgcmVzdWx0aW5nIG9iamVjdCBjYW4gYmUgdXNlZCB3aXRoIFwib2JqZWN0W3Byb3BlcnR5XVwiIHRvIGNoZWNrIGlmIGEgcHJvcGVydHkgZXhpc3RzXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyBhIHZhcmFyZ3MgcGFyYW1ldGVyIG9mIHNvdXJjZSBvYmplY3RzIHRoYXQgd2lsbCBiZSBtZXJnZWRcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTmV3TG9va3VwT2JqZWN0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHNvdXJjZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gX3V0aWxzLmV4dGVuZC5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuY3JlYXRlKG51bGwpXS5jb25jYXQoc291cmNlcykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJsdWRHVnlibUZzTDJOeVpXRjBaUzF1WlhjdGJHOXZhM1Z3TFc5aWFtVmpkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dHhRa0ZCZFVJc1ZVRkJWVHM3T3pzN096czdPMEZCVVRGQ0xGTkJRVk1zY1VKQlFYRkNMRWRCUVdFN2IwTkJRVlFzVDBGQlR6dEJRVUZRTEZkQlFVODdPenRCUVVNNVF5eFRRVUZQTEdkRFFVRlBMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFVc3NUMEZCVHl4RlFVRkRMRU5CUVVNN1EwRkRhRVFpTENKbWFXeGxJam9pWTNKbFlYUmxMVzVsZHkxc2IyOXJkWEF0YjJKcVpXTjBMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1pYaDBaVzVrSUgwZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlNCaElHNWxkeUJ2WW1wbFkzUWdkMmwwYUNCY0ltNTFiR3hjSWkxd2NtOTBiM1I1Y0dVZ2RHOGdZWFp2YVdRZ2RISjFkR2g1SUhKbGMzVnNkSE1nYjI0Z2NISnZkRzkwZVhCbElIQnliM0JsY25ScFpYTXVYRzRnS2lCVWFHVWdjbVZ6ZFd4MGFXNW5JRzlpYW1WamRDQmpZVzRnWW1VZ2RYTmxaQ0IzYVhSb0lGd2liMkpxWldOMFczQnliM0JsY25SNVhWd2lJSFJ2SUdOb1pXTnJJR2xtSUdFZ2NISnZjR1Z5ZEhrZ1pYaHBjM1J6WEc0Z0tpQkFjR0Z5WVcwZ2V5NHVMbTlpYW1WamRIMGdjMjkxY21ObGN5QmhJSFpoY21GeVozTWdjR0Z5WVcxbGRHVnlJRzltSUhOdmRYSmpaU0J2WW1wbFkzUnpJSFJvWVhRZ2QybHNiQ0JpWlNCdFpYSm5aV1JjYmlBcUlFQnlaWFIxY201eklIdHZZbXBsWTNSOVhHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqY21WaGRHVk9aWGRNYjI5cmRYQlBZbXBsWTNRb0xpNHVjMjkxY21ObGN5a2dlMXh1SUNCeVpYUjFjbTRnWlhoMFpXNWtLRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2tzSUM0dUxuTnZkWEpqWlhNcE8xeHVmVnh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wgPSBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2w7XG5leHBvcnRzLnJlc3VsdElzQWxsb3dlZCA9IHJlc3VsdElzQWxsb3dlZDtcbmV4cG9ydHMucmVzZXRMb2dnZWRQcm9wZXJ0aWVzID0gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9jcmVhdGVOZXdMb29rdXBPYmplY3QgPSByZXF1aXJlKCcuL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdCcpO1xuXG52YXIgX2xvZ2dlciA9IHJlcXVpcmUoJy4uL2xvZ2dlcicpO1xuXG52YXIgbG9nZ2VyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xvZ2dlcik7XG5cbnZhciBsb2dnZWRQcm9wZXJ0aWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sKHJ1bnRpbWVPcHRpb25zKSB7XG4gIHZhciBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnY29uc3RydWN0b3InXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZUdldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19kZWZpbmVTZXR0ZXJfXyddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fbG9va3VwR2V0dGVyX18nXSA9IGZhbHNlO1xuXG4gIHZhciBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cbiAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0WydfX3Byb3RvX18nXSA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgd2hpdGVsaXN0OiBfY3JlYXRlTmV3TG9va3VwT2JqZWN0LmNyZWF0ZU5ld0xvb2t1cE9iamVjdChkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3QsIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b1Byb3BlcnRpZXMpLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvUHJvcGVydGllc0J5RGVmYXVsdFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgd2hpdGVsaXN0OiBfY3JlYXRlTmV3TG9va3VwT2JqZWN0LmNyZWF0ZU5ld0xvb2t1cE9iamVjdChkZWZhdWx0TWV0aG9kV2hpdGVMaXN0LCBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9NZXRob2RzKSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogcnVudGltZU9wdGlvbnMuYWxsb3dQcm90b01ldGhvZHNCeURlZmF1bHRcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc3VsdElzQWxsb3dlZChyZXN1bHQsIHByb3RvQWNjZXNzQ29udHJvbCwgcHJvcGVydHlOYW1lKSB7XG4gIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5tZXRob2RzLCBwcm9wZXJ0eU5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaGVja1doaXRlTGlzdChwcm90b0FjY2Vzc0NvbnRyb2wucHJvcGVydGllcywgcHJvcGVydHlOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1doaXRlTGlzdChwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLndoaXRlbGlzdFtwcm9wZXJ0eU5hbWVdID09PSB0cnVlO1xuICB9XG4gIGlmIChwcm90b0FjY2Vzc0NvbnRyb2xGb3JUeXBlLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlO1xuICB9XG4gIGxvZ1VuZXhwZWNlZFByb3BlcnR5QWNjZXNzT25jZShwcm9wZXJ0eU5hbWUpO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGxvZ1VuZXhwZWNlZFByb3BlcnR5QWNjZXNzT25jZShwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSAhPT0gdHJ1ZSkge1xuICAgIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSA9IHRydWU7XG4gICAgbG9nZ2VyLmxvZygnZXJyb3InLCAnSGFuZGxlYmFyczogQWNjZXNzIGhhcyBiZWVuIGRlbmllZCB0byByZXNvbHZlIHRoZSBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eU5hbWUgKyAnXCIgYmVjYXVzZSBpdCBpcyBub3QgYW4gXCJvd24gcHJvcGVydHlcIiBvZiBpdHMgcGFyZW50LlxcbicgKyAnWW91IGNhbiBhZGQgYSBydW50aW1lIG9wdGlvbiB0byBkaXNhYmxlIHRoZSBjaGVjayBvciB0aGlzIHdhcm5pbmc6XFxuJyArICdTZWUgaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL2FwaS1yZWZlcmVuY2UvcnVudGltZS1vcHRpb25zLmh0bWwjb3B0aW9ucy10by1jb250cm9sLXByb3RvdHlwZS1hY2Nlc3MgZm9yIGRldGFpbHMnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldExvZ2dlZFByb3BlcnRpZXMoKSB7XG4gIE9iamVjdC5rZXlzKGxvZ2dlZFByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgIGRlbGV0ZSBsb2dnZWRQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJsdWRHVnlibUZzTDNCeWIzUnZMV0ZqWTJWemN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPM0ZEUVVGelF5dzBRa0ZCTkVJN08zTkNRVU14UXl4WFFVRlhPenRKUVVGMlFpeE5RVUZOT3p0QlFVVnNRaXhKUVVGTkxHZENRVUZuUWl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMEZCUlhSRExGTkJRVk1zZDBKQlFYZENMRU5CUVVNc1kwRkJZeXhGUVVGRk8wRkJRM1pFTEUxQlFVa3NjMEpCUVhOQ0xFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOcVJDeDNRa0ZCYzBJc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZET1VNc2QwSkJRWE5DTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZEYmtRc2QwSkJRWE5DTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZEYmtRc2QwSkJRWE5DTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlc1RUxFMUJRVWtzZDBKQlFYZENMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1FVRkZia1FzTUVKQlFYZENMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZET3p0QlFVVTVReXhUUVVGUE8wRkJRMHdzWTBGQlZTeEZRVUZGTzBGQlExWXNaVUZCVXl4RlFVRkZMRFpEUVVOVUxIZENRVUYzUWl4RlFVTjRRaXhqUVVGakxFTkJRVU1zYzBKQlFYTkNMRU5CUTNSRE8wRkJRMFFzYTBKQlFWa3NSVUZCUlN4alFVRmpMRU5CUVVNc05rSkJRVFpDTzB0QlF6TkVPMEZCUTBRc1YwRkJUeXhGUVVGRk8wRkJRMUFzWlVGQlV5eEZRVUZGTERaRFFVTlVMSE5DUVVGelFpeEZRVU4wUWl4alFVRmpMRU5CUVVNc2JVSkJRVzFDTEVOQlEyNURPMEZCUTBRc2EwSkJRVmtzUlVGQlJTeGpRVUZqTEVOQlFVTXNNRUpCUVRCQ08wdEJRM2hFTzBkQlEwWXNRMEZCUXp0RFFVTklPenRCUVVWTkxGTkJRVk1zWlVGQlpTeERRVUZETEUxQlFVMHNSVUZCUlN4clFrRkJhMElzUlVGQlJTeFpRVUZaTEVWQlFVVTdRVUZEZUVVc1RVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFZRVUZWTEVWQlFVVTdRVUZEYUVNc1YwRkJUeXhqUVVGakxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1QwRkJUeXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzBkQlEycEZMRTFCUVUwN1FVRkRUQ3hYUVVGUExHTkJRV01zUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhWUVVGVkxFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdSMEZEY0VVN1EwRkRSanM3UVVGRlJDeFRRVUZUTEdOQlFXTXNRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeFpRVUZaTEVWQlFVVTdRVUZETDBRc1RVRkJTU3g1UWtGQmVVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzVTBGQlV5eEZRVUZGTzBGQlEyNUZMRmRCUVU4c2VVSkJRWGxDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF6dEhRVU51UlR0QlFVTkVMRTFCUVVrc2VVSkJRWGxDTEVOQlFVTXNXVUZCV1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRCUVVONFJDeFhRVUZQTEhsQ1FVRjVRaXhEUVVGRExGbEJRVmtzUTBGQlF6dEhRVU12UXp0QlFVTkVMR2REUVVFNFFpeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMEZCUXpkRExGTkJRVThzUzBGQlN5eERRVUZETzBOQlEyUTdPMEZCUlVRc1UwRkJVeXc0UWtGQk9FSXNRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRjRVFzVFVGQlNTeG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVWQlFVVTdRVUZETTBNc2IwSkJRV2RDTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRM1JETEZWQlFVMHNRMEZCUXl4SFFVRkhMRU5CUTFJc1QwRkJUeXhGUVVOUUxHbEZRVUVyUkN4WlFVRlpMRzlKUVVOSUxHOUlRVU15UXl4RFFVTndTQ3hEUVVGRE8wZEJRMGc3UTBGRFJqczdRVUZGVFN4VFFVRlRMSEZDUVVGeFFpeEhRVUZITzBGQlEzUkRMRkZCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlFTeFpRVUZaTEVWQlFVazdRVUZEY0VRc1YwRkJUeXhuUWtGQlowSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRIUVVOMlF5eERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKd2NtOTBieTFoWTJObGMzTXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZPWlhkTWIyOXJkWEJQWW1wbFkzUWdmU0JtY205dElDY3VMMk55WldGMFpTMXVaWGN0Ykc5dmEzVndMVzlpYW1WamRDYzdYRzVwYlhCdmNuUWdLaUJoY3lCc2IyZG5aWElnWm5KdmJTQW5MaTR2Ykc5bloyVnlKenRjYmx4dVkyOXVjM1FnYkc5bloyVmtVSEp2Y0dWeWRHbGxjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmpjbVZoZEdWUWNtOTBiMEZqWTJWemMwTnZiblJ5YjJ3b2NuVnVkR2x0WlU5d2RHbHZibk1wSUh0Y2JpQWdiR1YwSUdSbFptRjFiSFJOWlhSb2IyUlhhR2wwWlV4cGMzUWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlDQmtaV1poZFd4MFRXVjBhRzlrVjJocGRHVk1hWE4wV3lkamIyNXpkSEoxWTNSdmNpZGRJRDBnWm1Gc2MyVTdYRzRnSUdSbFptRjFiSFJOWlhSb2IyUlhhR2wwWlV4cGMzUmJKMTlmWkdWbWFXNWxSMlYwZEdWeVgxOG5YU0E5SUdaaGJITmxPMXh1SUNCa1pXWmhkV3gwVFdWMGFHOWtWMmhwZEdWTWFYTjBXeWRmWDJSbFptbHVaVk5sZEhSbGNsOWZKMTBnUFNCbVlXeHpaVHRjYmlBZ1pHVm1ZWFZzZEUxbGRHaHZaRmRvYVhSbFRHbHpkRnNuWDE5c2IyOXJkWEJIWlhSMFpYSmZYeWRkSUQwZ1ptRnNjMlU3WEc1Y2JpQWdiR1YwSUdSbFptRjFiSFJRY205d1pYSjBlVmRvYVhSbFRHbHpkQ0E5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1Ynkxd2NtOTBiMXh1SUNCa1pXWmhkV3gwVUhKdmNHVnlkSGxYYUdsMFpVeHBjM1JiSjE5ZmNISnZkRzlmWHlkZElEMGdabUZzYzJVN1hHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQndjbTl3WlhKMGFXVnpPaUI3WEc0Z0lDQWdJQ0IzYUdsMFpXeHBjM1E2SUdOeVpXRjBaVTVsZDB4dmIydDFjRTlpYW1WamRDaGNiaUFnSUNBZ0lDQWdaR1ZtWVhWc2RGQnliM0JsY25SNVYyaHBkR1ZNYVhOMExGeHVJQ0FnSUNBZ0lDQnlkVzUwYVcxbFQzQjBhVzl1Y3k1aGJHeHZkMlZrVUhKdmRHOVFjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQXBMRnh1SUNBZ0lDQWdaR1ZtWVhWc2RGWmhiSFZsT2lCeWRXNTBhVzFsVDNCMGFXOXVjeTVoYkd4dmQxQnliM1J2VUhKdmNHVnlkR2xsYzBKNVJHVm1ZWFZzZEZ4dUlDQWdJSDBzWEc0Z0lDQWdiV1YwYUc5a2N6b2dlMXh1SUNBZ0lDQWdkMmhwZEdWc2FYTjBPaUJqY21WaGRHVk9aWGRNYjI5cmRYQlBZbXBsWTNRb1hHNGdJQ0FnSUNBZ0lHUmxabUYxYkhSTlpYUm9iMlJYYUdsMFpVeHBjM1FzWEc0Z0lDQWdJQ0FnSUhKMWJuUnBiV1ZQY0hScGIyNXpMbUZzYkc5M1pXUlFjbTkwYjAxbGRHaHZaSE5jYmlBZ0lDQWdJQ2tzWEc0Z0lDQWdJQ0JrWldaaGRXeDBWbUZzZFdVNklISjFiblJwYldWUGNIUnBiMjV6TG1Gc2JHOTNVSEp2ZEc5TlpYUm9iMlJ6UW5sRVpXWmhkV3gwWEc0Z0lDQWdmVnh1SUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY21WemRXeDBTWE5CYkd4dmQyVmtLSEpsYzNWc2RDd2djSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNMQ0J3Y205d1pYSjBlVTVoYldVcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCeVpYTjFiSFFnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQnlaWFIxY200Z1kyaGxZMnRYYUdsMFpVeHBjM1FvY0hKdmRHOUJZMk5sYzNORGIyNTBjbTlzTG0xbGRHaHZaSE1zSUhCeWIzQmxjblI1VG1GdFpTazdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjbVYwZFhKdUlHTm9aV05yVjJocGRHVk1hWE4wS0hCeWIzUnZRV05qWlhOelEyOXVkSEp2YkM1d2NtOXdaWEowYVdWekxDQndjbTl3WlhKMGVVNWhiV1VwTzF4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTm9aV05yVjJocGRHVk1hWE4wS0hCeWIzUnZRV05qWlhOelEyOXVkSEp2YkVadmNsUjVjR1VzSUhCeWIzQmxjblI1VG1GdFpTa2dlMXh1SUNCcFppQW9jSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNSbTl5Vkhsd1pTNTNhR2wwWld4cGMzUmJjSEp2Y0dWeWRIbE9ZVzFsWFNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJFWnZjbFI1Y0dVdWQyaHBkR1ZzYVhOMFczQnliM0JsY25SNVRtRnRaVjBnUFQwOUlIUnlkV1U3WEc0Z0lIMWNiaUFnYVdZZ0tIQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJFWnZjbFI1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNCeVpYUjFjbTRnY0hKdmRHOUJZMk5sYzNORGIyNTBjbTlzUm05eVZIbHdaUzVrWldaaGRXeDBWbUZzZFdVN1hHNGdJSDFjYmlBZ2JHOW5WVzVsZUhCbFkyVmtVSEp2Y0dWeWRIbEJZMk5sYzNOUGJtTmxLSEJ5YjNCbGNuUjVUbUZ0WlNrN1hHNGdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYkc5blZXNWxlSEJsWTJWa1VISnZjR1Z5ZEhsQlkyTmxjM05QYm1ObEtIQnliM0JsY25SNVRtRnRaU2tnZTF4dUlDQnBaaUFvYkc5bloyVmtVSEp2Y0dWeWRHbGxjMXR3Y205d1pYSjBlVTVoYldWZElDRTlQU0IwY25WbEtTQjdYRzRnSUNBZ2JHOW5aMlZrVUhKdmNHVnlkR2xsYzF0d2NtOXdaWEowZVU1aGJXVmRJRDBnZEhKMVpUdGNiaUFnSUNCc2IyZG5aWEl1Ykc5bktGeHVJQ0FnSUNBZ0oyVnljbTl5Snl4Y2JpQWdJQ0FnSUdCSVlXNWtiR1ZpWVhKek9pQkJZMk5sYzNNZ2FHRnpJR0psWlc0Z1pHVnVhV1ZrSUhSdklISmxjMjlzZG1VZ2RHaGxJSEJ5YjNCbGNuUjVJRndpSkh0d2NtOXdaWEowZVU1aGJXVjlYQ0lnWW1WallYVnpaU0JwZENCcGN5QnViM1FnWVc0Z1hDSnZkMjRnY0hKdmNHVnlkSGxjSWlCdlppQnBkSE1nY0dGeVpXNTBMbHhjYm1BZ0sxeHVJQ0FnSUNBZ0lDQmdXVzkxSUdOaGJpQmhaR1FnWVNCeWRXNTBhVzFsSUc5d2RHbHZiaUIwYnlCa2FYTmhZbXhsSUhSb1pTQmphR1ZqYXlCdmNpQjBhR2x6SUhkaGNtNXBibWM2WEZ4dVlDQXJYRzRnSUNBZ0lDQWdJR0JUWldVZ2FIUjBjSE02THk5b1lXNWtiR1ZpWVhKemFuTXVZMjl0TDJGd2FTMXlaV1psY21WdVkyVXZjblZ1ZEdsdFpTMXZjSFJwYjI1ekxtaDBiV3dqYjNCMGFXOXVjeTEwYnkxamIyNTBjbTlzTFhCeWIzUnZkSGx3WlMxaFkyTmxjM01nWm05eUlHUmxkR0ZwYkhOZ1hHNGdJQ0FnS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtVnpaWFJNYjJkblpXUlFjbTl3WlhKMGFXVnpLQ2tnZTF4dUlDQlBZbXBsWTNRdWEyVjVjeWhzYjJkblpXUlFjbTl3WlhKMGFXVnpLUzVtYjNKRllXTm9LSEJ5YjNCbGNuUjVUbUZ0WlNBOVBpQjdYRzRnSUNBZ1pHVnNaWFJsSUd4dloyZGxaRkJ5YjNCbGNuUnBaWE5iY0hKdmNHVnlkSGxPWVcxbFhUdGNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy53cmFwSGVscGVyID0gd3JhcEhlbHBlcjtcblxuZnVuY3Rpb24gd3JhcEhlbHBlcihoZWxwZXIsIHRyYW5zZm9ybU9wdGlvbnNGbikge1xuICBpZiAodHlwZW9mIGhlbHBlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCBhcHBhcmVudGx5IGl0IGRvZXMgaW4gaHR0cHM6Ly9naXRodWIuY29tL3d5Y2F0cy9oYW5kbGViYXJzLmpzL2lzc3Vlcy8xNjM5XG4gICAgLy8gV2UgdHJ5IHRvIG1ha2UgdGhlIHdyYXBwZXIgbGVhc3QtaW52YXNpdmUgYnkgbm90IHdyYXBwaW5nIGl0LCBpZiB0aGUgaGVscGVyIGlzIG5vdCBhIGZ1bmN0aW9uLlxuICAgIHJldHVybiBoZWxwZXI7XG4gIH1cbiAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbiB3cmFwcGVyKCkgLyogZHluYW1pYyBhcmd1bWVudHMgKi97XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPSB0cmFuc2Zvcm1PcHRpb25zRm4ob3B0aW9ucyk7XG4gICAgcmV0dXJuIGhlbHBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICByZXR1cm4gd3JhcHBlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwybHVkR1Z5Ym1Gc0wzZHlZWEJJWld4d1pYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJUeXhUUVVGVExGVkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVXNhMEpCUVd0Q0xFVkJRVVU3UVVGRGNrUXNUVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhWUVVGVkxFVkJRVVU3T3p0QlFVZG9ReXhYUVVGUExFMUJRVTBzUTBGQlF6dEhRVU5tTzBGQlEwUXNUVUZCU1N4UFFVRlBMRWRCUVVjc1UwRkJWaXhQUVVGUExEQkNRVUZ4UXp0QlFVTTVReXhSUVVGTkxFOUJRVThzUjBGQlJ5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5vUkN4aFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTTVSQ3hYUVVGUExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wZEJRM1JETEVOQlFVTTdRVUZEUml4VFFVRlBMRTlCUVU4c1EwRkJRenREUVVOb1FpSXNJbVpwYkdVaU9pSjNjbUZ3U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdaMWJtTjBhVzl1SUhkeVlYQklaV3h3WlhJb2FHVnNjR1Z5TENCMGNtRnVjMlp2Y20xUGNIUnBiMjV6Um00cElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCb1pXeHdaWElnSVQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQXZMeUJVYUdseklITm9iM1ZzWkNCdWIzUWdhR0Z3Y0dWdUxDQmlkWFFnWVhCd1lYSmxiblJzZVNCcGRDQmtiMlZ6SUdsdUlHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOTNlV05oZEhNdmFHRnVaR3hsWW1GeWN5NXFjeTlwYzNOMVpYTXZNVFl6T1Z4dUlDQWdJQzh2SUZkbElIUnllU0IwYnlCdFlXdGxJSFJvWlNCM2NtRndjR1Z5SUd4bFlYTjBMV2x1ZG1GemFYWmxJR0o1SUc1dmRDQjNjbUZ3Y0dsdVp5QnBkQ3dnYVdZZ2RHaGxJR2hsYkhCbGNpQnBjeUJ1YjNRZ1lTQm1kVzVqZEdsdmJpNWNiaUFnSUNCeVpYUjFjbTRnYUdWc2NHVnlPMXh1SUNCOVhHNGdJR3hsZENCM2NtRndjR1Z5SUQwZ1puVnVZM1JwYjI0b0x5b2daSGx1WVcxcFl5QmhjbWQxYldWdWRITWdLaThwSUh0Y2JpQWdJQ0JqYjI1emRDQnZjSFJwYjI1eklEMGdZWEpuZFcxbGJuUnpXMkZ5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4WFR0Y2JpQWdJQ0JoY21kMWJXVnVkSE5iWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0F0SURGZElEMGdkSEpoYm5ObWIzSnRUM0IwYVc5dWMwWnVLRzl3ZEdsdmJuTXBPMXh1SUNBZ0lISmxkSFZ5YmlCb1pXeHdaWEl1WVhCd2JIa29kR2hwY3l3Z1lYSm5kVzFsYm5SektUdGNiaUFnZlR0Y2JpQWdjbVYwZFhKdUlIZHlZWEJ3WlhJN1hHNTlYRzRpWFgwPVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgbG9nZ2VyID0ge1xuICBtZXRob2RNYXA6IFsnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ10sXG4gIGxldmVsOiAnaW5mbycsXG5cbiAgLy8gTWFwcyBhIGdpdmVuIGxldmVsIHZhbHVlIHRvIHRoZSBgbWV0aG9kTWFwYCBpbmRleGVzIGFib3ZlLlxuICBsb29rdXBMZXZlbDogZnVuY3Rpb24gbG9va3VwTGV2ZWwobGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGxldmVsTWFwID0gX3V0aWxzLmluZGV4T2YobG9nZ2VyLm1ldGhvZE1hcCwgbGV2ZWwudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZiAobGV2ZWxNYXAgPj0gMCkge1xuICAgICAgICBsZXZlbCA9IGxldmVsTWFwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV2ZWwgPSBwYXJzZUludChsZXZlbCwgMTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZXZlbDtcbiAgfSxcblxuICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuICBsb2c6IGZ1bmN0aW9uIGxvZyhsZXZlbCkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIHZhciBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgICBtZXRob2QgPSAnbG9nJztcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lc3NhZ2UgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIG1lc3NhZ2VbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgbWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gbG9nZ2VyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyeHZaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPM0ZDUVVGM1FpeFRRVUZUT3p0QlFVVnFReXhKUVVGSkxFMUJRVTBzUjBGQlJ6dEJRVU5ZTEZkQlFWTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXp0QlFVTTNReXhQUVVGTExFVkJRVVVzVFVGQlRUczdPMEZCUjJJc1lVRkJWeXhGUVVGRkxIRkNRVUZUTEV0QlFVc3NSVUZCUlR0QlFVTXpRaXhSUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNSVUZCUlR0QlFVTTNRaXhWUVVGSkxGRkJRVkVzUjBGQlJ5eGxRVUZSTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZET1VRc1ZVRkJTU3hSUVVGUkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEycENMR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU03VDBGRGJFSXNUVUZCVFR0QlFVTk1MR0ZCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMDlCUXpkQ08wdEJRMFk3TzBGQlJVUXNWMEZCVHl4TFFVRkxMRU5CUVVNN1IwRkRaRHM3TzBGQlIwUXNTMEZCUnl4RlFVRkZMR0ZCUVZNc1MwRkJTeXhGUVVGak8wRkJReTlDTEZOQlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0QlFVVnNReXhSUVVORkxFOUJRVThzVDBGQlR5eExRVUZMTEZkQlFWY3NTVUZET1VJc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1MwRkJTeXhGUVVONlF6dEJRVU5CTEZWQlFVa3NUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMEZCUlhKRExGVkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1FVRkRjRUlzWTBGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0UFFVTm9RanM3ZDBOQldHMUNMRTlCUVU4N1FVRkJVQ3hsUVVGUE96czdRVUZaTTBJc1lVRkJUeXhEUVVGRExFMUJRVTBzVDBGQlF5eERRVUZtTEU5QlFVOHNSVUZCV1N4UFFVRlBMRU5CUVVNc1EwRkJRenRMUVVNM1FqdEhRVU5HTzBOQlEwWXNRMEZCUXpzN2NVSkJSV0VzVFVGQlRTSXNJbVpwYkdVaU9pSnNiMmRuWlhJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYm1SbGVFOW1JSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm14bGRDQnNiMmRuWlhJZ1BTQjdYRzRnSUcxbGRHaHZaRTFoY0RvZ1d5ZGtaV0oxWnljc0lDZHBibVp2Snl3Z0ozZGhjbTRuTENBblpYSnliM0luWFN4Y2JpQWdiR1YyWld3NklDZHBibVp2Snl4Y2JseHVJQ0F2THlCTllYQnpJR0VnWjJsMlpXNGdiR1YyWld3Z2RtRnNkV1VnZEc4Z2RHaGxJR0J0WlhSb2IyUk5ZWEJnSUdsdVpHVjRaWE1nWVdKdmRtVXVYRzRnSUd4dmIydDFjRXhsZG1Wc09pQm1kVzVqZEdsdmJpaHNaWFpsYkNrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2JHVjJaV3dnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQnNaWFFnYkdWMlpXeE5ZWEFnUFNCcGJtUmxlRTltS0d4dloyZGxjaTV0WlhSb2IyUk5ZWEFzSUd4bGRtVnNMblJ2VEc5M1pYSkRZWE5sS0NrcE8xeHVJQ0FnSUNBZ2FXWWdLR3hsZG1Wc1RXRndJRDQ5SURBcElIdGNiaUFnSUNBZ0lDQWdiR1YyWld3Z1BTQnNaWFpsYkUxaGNEdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHeGxkbVZzSUQwZ2NHRnljMlZKYm5Rb2JHVjJaV3dzSURFd0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYkdWMlpXdzdYRzRnSUgwc1hHNWNiaUFnTHk4Z1EyRnVJR0psSUc5MlpYSnlhV1JrWlc0Z2FXNGdkR2hsSUdodmMzUWdaVzUyYVhKdmJtMWxiblJjYmlBZ2JHOW5PaUJtZFc1amRHbHZiaWhzWlhabGJDd2dMaTR1YldWemMyRm5aU2tnZTF4dUlDQWdJR3hsZG1Wc0lEMGdiRzluWjJWeUxteHZiMnQxY0V4bGRtVnNLR3hsZG1Wc0tUdGNibHh1SUNBZ0lHbG1JQ2hjYmlBZ0lDQWdJSFI1Y0dWdlppQmpiMjV6YjJ4bElDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUpseHVJQ0FnSUNBZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeHZaMmRsY2k1c1pYWmxiQ2tnUEQwZ2JHVjJaV3hjYmlBZ0lDQXBJSHRjYmlBZ0lDQWdJR3hsZENCdFpYUm9iMlFnUFNCc2IyZG5aWEl1YldWMGFHOWtUV0Z3VzJ4bGRtVnNYVHRjYmlBZ0lDQWdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J1YnkxamIyNXpiMnhsWEc0Z0lDQWdJQ0JwWmlBb0lXTnZibk52YkdWYmJXVjBhRzlrWFNrZ2UxeHVJQ0FnSUNBZ0lDQnRaWFJvYjJRZ1BTQW5iRzluSnp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdOdmJuTnZiR1ZiYldWMGFHOWtYU2d1TGk1dFpYTnpZV2RsS1RzZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJHbHVaU0J1YnkxamIyNXpiMnhsWEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JzYjJkblpYSTdYRzRpWFgwPVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG4gICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcbiAgICB9XG4gICAgcmV0dXJuIEhhbmRsZWJhcnM7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDI1dkxXTnZibVpzYVdOMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3Y1VKQlFXVXNWVUZCVXl4VlFVRlZMRVZCUVVVN08wRkJSV3hETEUxQlFVa3NTVUZCU1N4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGZEJRVmNzUjBGQlJ5eE5RVUZOTEVkQlFVY3NUVUZCVFR0TlFVTjRSQ3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXpzN1FVRkZhRU1zV1VGQlZTeERRVUZETEZWQlFWVXNSMEZCUnl4WlFVRlhPMEZCUTJwRExGRkJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNTMEZCU3l4VlFVRlZMRVZCUVVVN1FVRkRiRU1zVlVGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4WFFVRlhMRU5CUVVNN1MwRkRMMEk3UVVGRFJDeFhRVUZQTEZWQlFWVXNRMEZCUXp0SFFVTnVRaXhEUVVGRE8wTkJRMGdpTENKbWFXeGxJam9pYm04dFkyOXVabXhwWTNRdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpaElZVzVrYkdWaVlYSnpLU0I3WEc0Z0lDOHFJR2x6ZEdGdVluVnNJR2xuYm05eVpTQnVaWGgwSUNvdlhHNGdJR3hsZENCeWIyOTBJRDBnZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5Qm5iRzlpWVd3Z09pQjNhVzVrYjNjc1hHNGdJQ0FnSkVoaGJtUnNaV0poY25NZ1BTQnliMjkwTGtoaGJtUnNaV0poY25NN1hHNGdJQzhxSUdsemRHRnVZblZzSUdsbmJtOXlaU0J1WlhoMElDb3ZYRzRnSUVoaGJtUnNaV0poY25NdWJtOURiMjVtYkdsamRDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJR2xtSUNoeWIyOTBMa2hoYm1Sc1pXSmhjbk1nUFQwOUlFaGhibVJzWldKaGNuTXBJSHRjYmlBZ0lDQWdJSEp2YjNRdVNHRnVaR3hsWW1GeWN5QTlJQ1JJWVc1a2JHVmlZWEp6TzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1NHRnVaR3hsWW1GeWN6dGNiaUFnZlR0Y2JuMWNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcbmV4cG9ydHMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbmV4cG9ydHMud3JhcFByb2dyYW0gPSB3cmFwUHJvZ3JhbTtcbmV4cG9ydHMucmVzb2x2ZVBhcnRpYWwgPSByZXNvbHZlUGFydGlhbDtcbmV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7XG5leHBvcnRzLm5vb3AgPSBub29wO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbnZhciBfYmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpO1xuXG52YXIgX2hlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxudmFyIF9pbnRlcm5hbFdyYXBIZWxwZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL3dyYXBIZWxwZXInKTtcblxudmFyIF9pbnRlcm5hbFByb3RvQWNjZXNzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9wcm90by1hY2Nlc3MnKTtcblxuZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgdmFyIGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICBjdXJyZW50UmV2aXNpb24gPSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiA+PSBfYmFzZS5MQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04gJiYgY29tcGlsZXJSZXZpc2lvbiA8PSBfYmFzZS5DT01QSUxFUl9SRVZJU0lPTikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb21waWxlclJldmlzaW9uIDwgX2Jhc2UuTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OKSB7XG4gICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IF9iYXNlLlJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKHRlbXBsYXRlU3BlYywgZW52KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICghZW52KSB7XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHNldWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgd2l0aCBjb21waWxlci12ZXJzaW9uIDcgKDw0LjMuMClcbiAgdmFyIHRlbXBsYXRlV2FzUHJlY29tcGlsZWRXaXRoQ29tcGlsZXJWNyA9IHRlbXBsYXRlU3BlYy5jb21waWxlciAmJiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJbMF0gPT09IDc7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cbiAgICB2YXIgZXh0ZW5kZWRPcHRpb25zID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLCB7XG4gICAgICBob29rczogdGhpcy5ob29rcyxcbiAgICAgIHByb3RvQWNjZXNzQ29udHJvbDogdGhpcy5wcm90b0FjY2Vzc0NvbnRyb2xcbiAgICB9KTtcblxuICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIGV4dGVuZGVkT3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgdmFyIGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIHZhciBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbiBzdHJpY3Qob2JqLCBuYW1lLCBsb2MpIHtcbiAgICAgIGlmICghb2JqIHx8ICEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmosIHtcbiAgICAgICAgICBsb2M6IGxvY1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250YWluZXIubG9va3VwUHJvcGVydHkob2JqLCBuYW1lKTtcbiAgICB9LFxuICAgIGxvb2t1cFByb3BlcnR5OiBmdW5jdGlvbiBsb29rdXBQcm9wZXJ0eShwYXJlbnQsIHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmVudCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBpZiAoX2ludGVybmFsUHJvdG9BY2Nlc3MucmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24gbG9va3VwKGRlcHRocywgbmFtZSkge1xuICAgICAgdmFyIGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBkZXB0aHNbaV0gJiYgY29udGFpbmVyLmxvb2t1cFByb3BlcnR5KGRlcHRoc1tpXSwgbmFtZSk7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24gbGFtYmRhKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24gZm4oaSkge1xuICAgICAgdmFyIHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uIHByb2dyYW0oaSwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgICAgdmFyIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSxcbiAgICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXByb2dyYW1XcmFwcGVyKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gdGhpcy5wcm9ncmFtc1tpXSA9IHdyYXBQcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSh2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlSWZOZWVkZWQ6IGZ1bmN0aW9uIG1lcmdlSWZOZWVkZWQocGFyYW0sIGNvbW1vbikge1xuICAgICAgdmFyIG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG4gICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIHZhciBkZXB0aHMgPSB1bmRlZmluZWQsXG4gICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcbiAgICAgIGlmIChvcHRpb25zLmRlcHRocykge1xuICAgICAgICBkZXB0aHMgPSBjb250ZXh0ICE9IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG5cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIHZhciBtZXJnZWRIZWxwZXJzID0gVXRpbHMuZXh0ZW5kKHt9LCBlbnYuaGVscGVycywgb3B0aW9ucy5oZWxwZXJzKTtcbiAgICAgIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKTtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gbWVyZ2VkSGVscGVycztcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIC8vIFVzZSBtZXJnZUlmTmVlZGVkIGhlcmUgdG8gcHJldmVudCBjb21waWxpbmcgZ2xvYmFsIHBhcnRpYWxzIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZUlmTmVlZGVkKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBVdGlscy5leHRlbmQoe30sIGVudi5kZWNvcmF0b3JzLCBvcHRpb25zLmRlY29yYXRvcnMpO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuaG9va3MgPSB7fTtcbiAgICAgIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wgPSBfaW50ZXJuYWxQcm90b0FjY2Vzcy5jcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wob3B0aW9ucyk7XG5cbiAgICAgIHZhciBrZWVwSGVscGVySW5IZWxwZXJzID0gb3B0aW9ucy5hbGxvd0NhbGxzVG9IZWxwZXJNaXNzaW5nIHx8IHRlbXBsYXRlV2FzUHJlY29tcGlsZWRXaXRoQ29tcGlsZXJWNztcbiAgICAgIF9oZWxwZXJzLm1vdmVIZWxwZXJUb0hvb2tzKGNvbnRhaW5lciwgJ2hlbHBlck1pc3NpbmcnLCBrZWVwSGVscGVySW5IZWxwZXJzKTtcbiAgICAgIF9oZWxwZXJzLm1vdmVIZWxwZXJUb0hvb2tzKGNvbnRhaW5lciwgJ2Jsb2NrSGVscGVyTWlzc2luZycsIGtlZXBIZWxwZXJJbkhlbHBlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIucHJvdG9BY2Nlc3NDb250cm9sID0gb3B0aW9ucy5wcm90b0FjY2Vzc0NvbnRyb2w7IC8vIGludGVybmFsIG9wdGlvblxuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBvcHRpb25zLmRlY29yYXRvcnM7XG4gICAgICBjb250YWluZXIuaG9va3MgPSBvcHRpb25zLmhvb2tzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24gKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICBmdW5jdGlvbiBwcm9nKGNvbnRleHQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIG9wdGlvbnMuZGF0YSB8fCBkYXRhLCBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSwgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGN1cnJlbnRseSBwYXJ0IG9mIHRoZSBvZmZpY2lhbCBBUEksIHRoZXJlZm9yZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG4gICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcbiAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcbiAgfVxuICByZXR1cm4gcGFydGlhbDtcbn1cblxuZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgdmFyIGN1cnJlbnRQYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ107XG4gIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG4gIGlmIChvcHRpb25zLmlkcykge1xuICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCA9IG9wdGlvbnMuaWRzWzBdIHx8IG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aDtcbiAgfVxuXG4gIHZhciBwYXJ0aWFsQmxvY2sgPSB1bmRlZmluZWQ7XG4gIGlmIChvcHRpb25zLmZuICYmIG9wdGlvbnMuZm4gIT09IG5vb3ApIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgIC8vIFdyYXBwZXIgZnVuY3Rpb24gdG8gZ2V0IGFjY2VzcyB0byBjdXJyZW50UGFydGlhbEJsb2NrIGZyb20gdGhlIGNsb3N1cmVcbiAgICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG4gICAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGZ1bmN0aW9uIHBhcnRpYWxCbG9ja1dyYXBwZXIoY29udGV4dCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIHBhcnRpYWwtYmxvY2sgZnJvbSB0aGUgY2xvc3VyZSBmb3IgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgYmxvY2tcbiAgICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IF9iYXNlLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gY3VycmVudFBhcnRpYWxCbG9jaztcbiAgICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgfTtcbiAgICAgIGlmIChmbi5wYXJ0aWFscykge1xuICAgICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG4gICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gX2Jhc2UuY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG5cbmZ1bmN0aW9uIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKSB7XG4gIE9iamVjdC5rZXlzKG1lcmdlZEhlbHBlcnMpLmZvckVhY2goZnVuY3Rpb24gKGhlbHBlck5hbWUpIHtcbiAgICB2YXIgaGVscGVyID0gbWVyZ2VkSGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdID0gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhc3NMb29rdXBQcm9wZXJ0eU9wdGlvbihoZWxwZXIsIGNvbnRhaW5lcikge1xuICB2YXIgbG9va3VwUHJvcGVydHkgPSBjb250YWluZXIubG9va3VwUHJvcGVydHk7XG4gIHJldHVybiBfaW50ZXJuYWxXcmFwSGVscGVyLndyYXBIZWxwZXIoaGVscGVyLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHJldHVybiBVdGlscy5leHRlbmQoeyBsb29rdXBQcm9wZXJ0eTogbG9va3VwUHJvcGVydHkgfSwgb3B0aW9ucyk7XG4gIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMM0oxYm5ScGJXVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdjVUpCUVhWQ0xGTkJRVk03TzBsQlFYQkNMRXRCUVVzN08zbENRVU5MTEdGQlFXRTdPenM3YjBKQlRUVkNMRkZCUVZFN08zVkNRVU50UWl4WFFVRlhPenRyUTBGRGJFSXNkVUpCUVhWQ096dHRRMEZKTTBNc2VVSkJRWGxDT3p0QlFVVjZRaXhUUVVGVExHRkJRV0VzUTBGQlF5eFpRVUZaTEVWQlFVVTdRVUZETVVNc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4QlFVRkRMRmxCUVZrc1NVRkJTU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVc3NRMEZCUXp0TlFVTTNSQ3hsUVVGbExEQkNRVUZ2UWl4RFFVRkRPenRCUVVWMFF5eE5RVU5GTEdkQ1FVRm5RaXd5UTBGQmNVTXNTVUZEY2tRc1owSkJRV2RDTERKQ1FVRnhRaXhGUVVOeVF6dEJRVU5CTEZkQlFVODdSMEZEVWpzN1FVRkZSQ3hOUVVGSkxHZENRVUZuUWl3d1EwRkJiME1zUlVGQlJUdEJRVU40UkN4UlFVRk5MR1ZCUVdVc1IwRkJSeXgxUWtGQmFVSXNaVUZCWlN4RFFVRkRPMUZCUTNaRUxHZENRVUZuUWl4SFFVRkhMSFZDUVVGcFFpeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wRkJRM2hFTEZWQlFVMHNNa0pCUTBvc2VVWkJRWGxHTEVkQlEzWkdMSEZFUVVGeFJDeEhRVU55UkN4bFFVRmxMRWRCUTJZc2JVUkJRVzFFTEVkQlEyNUVMR2RDUVVGblFpeEhRVU5vUWl4SlFVRkpMRU5CUTFBc1EwRkJRenRIUVVOSUxFMUJRVTA3TzBGQlJVd3NWVUZCVFN3eVFrRkRTaXgzUmtGQmQwWXNSMEZEZEVZc2FVUkJRV2xFTEVkQlEycEVMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGRFppeEpRVUZKTEVOQlExQXNRMEZCUXp0SFFVTklPME5CUTBZN08wRkJSVTBzVTBGQlV5eFJRVUZSTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSVHM3UVVGRk1VTXNUVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVOU0xGVkJRVTBzTWtKQlFXTXNiVU5CUVcxRExFTkJRVU1zUTBGQlF6dEhRVU14UkR0QlFVTkVMRTFCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZPMEZCUTNaRExGVkJRVTBzTWtKQlFXTXNNa0pCUVRKQ0xFZEJRVWNzVDBGQlR5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SFFVTjRSVHM3UVVGRlJDeGpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZET3pzN08wRkJTV3hFTEV0QlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXpzN08wRkJSelZETEUxQlFVMHNiME5CUVc5RExFZEJRM2hETEZsQlFWa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wRkJSVEZFTEZkQlFWTXNiMEpCUVc5Q0xFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRka1FzVVVGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZPMEZCUTJoQ0xHRkJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTJ4RUxGVkJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTm1MR1ZCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMDlCUTNaQ08wdEJRMFk3UVVGRFJDeFhRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZET3p0QlFVVjBSU3hSUVVGSkxHVkJRV1VzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRE9VTXNWMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTE8wRkJRMnBDTEhkQ1FVRnJRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJN1MwRkROVU1zUTBGQlF5eERRVUZET3p0QlFVVklMRkZCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkRjRU1zU1VGQlNTeEZRVU5LTEU5QlFVOHNSVUZEVUN4UFFVRlBMRVZCUTFBc1pVRkJaU3hEUVVOb1FpeERRVUZET3p0QlFVVkdMRkZCUVVrc1RVRkJUU3hKUVVGSkxFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTJwRExHRkJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlF6RkRMRTlCUVU4c1JVRkRVQ3haUVVGWkxFTkJRVU1zWlVGQlpTeEZRVU0xUWl4SFFVRkhMRU5CUTBvc1EwRkJRenRCUVVOR0xGbEJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1MwRkRia1U3UVVGRFJDeFJRVUZKTEUxQlFVMHNTVUZCU1N4SlFVRkpMRVZCUVVVN1FVRkRiRUlzVlVGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTJ4Q0xGbEJRVWtzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGREwwSXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTTFReXhqUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlF6VkNMR3RDUVVGTk8xZEJRMUE3TzBGQlJVUXNaVUZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM1JETzBGQlEwUXNZMEZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdUMEZETTBJN1FVRkRSQ3hoUVVGUExFMUJRVTBzUTBGQlF6dExRVU5tTEUxQlFVMDdRVUZEVEN4WlFVRk5MREpDUVVOS0xHTkJRV01zUjBGRFdpeFBRVUZQTEVOQlFVTXNTVUZCU1N4SFFVTmFMREJFUVVFd1JDeERRVU0zUkN4RFFVRkRPMHRCUTBnN1IwRkRSanM3TzBGQlIwUXNUVUZCU1N4VFFVRlRMRWRCUVVjN1FVRkRaQ3hWUVVGTkxFVkJRVVVzWjBKQlFWTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVVU3UVVGREwwSXNWVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVRXNRVUZCUXl4RlFVRkZPMEZCUXpGQ0xHTkJRVTBzTWtKQlFXTXNSMEZCUnl4SFFVRkhMRWxCUVVrc1IwRkJSeXh0UWtGQmJVSXNSMEZCUnl4SFFVRkhMRVZCUVVVN1FVRkRNVVFzWVVGQlJ5eEZRVUZGTEVkQlFVYzdVMEZEVkN4RFFVRkRMRU5CUVVNN1QwRkRTanRCUVVORUxHRkJRVThzVTBGQlV5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE5VTTdRVUZEUkN4clFrRkJZeXhGUVVGRkxIZENRVUZUTEUxQlFVMHNSVUZCUlN4WlFVRlpMRVZCUVVVN1FVRkROME1zVlVGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRMnhETEZWQlFVa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVOc1FpeGxRVUZQTEUxQlFVMHNRMEZCUXp0UFFVTm1PMEZCUTBRc1ZVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGbEJRVmtzUTBGQlF5eEZRVUZGTzBGQlF6bEVMR1ZCUVU4c1RVRkJUU3hEUVVGRE8wOUJRMlk3TzBGQlJVUXNWVUZCU1N4eFEwRkJaMElzVFVGQlRTeEZRVUZGTEZOQlFWTXNRMEZCUXl4clFrRkJhMElzUlVGQlJTeFpRVUZaTEVOQlFVTXNSVUZCUlR0QlFVTjJSU3hsUVVGUExFMUJRVTBzUTBGQlF6dFBRVU5tTzBGQlEwUXNZVUZCVHl4VFFVRlRMRU5CUVVNN1MwRkRiRUk3UVVGRFJDeFZRVUZOTEVWQlFVVXNaMEpCUVZNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU0zUWl4VlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzBGQlF6RkNMRmRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRE5VSXNXVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTNCRkxGbEJRVWtzVFVGQlRTeEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTnNRaXhwUWtGQlR5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRGVFSTdUMEZEUmp0TFFVTkdPMEZCUTBRc1ZVRkJUU3hGUVVGRkxHZENRVUZUTEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRha01zWVVGQlR5eFBRVUZQTEU5QlFVOHNTMEZCU3l4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1MwRkRlRVU3TzBGQlJVUXNiMEpCUVdkQ0xFVkJRVVVzUzBGQlN5eERRVUZETEdkQ1FVRm5RanRCUVVONFF5eHBRa0ZCWVN4RlFVRkZMRzlDUVVGdlFqczdRVUZGYmtNc1RVRkJSU3hGUVVGRkxGbEJRVk1zUTBGQlF5eEZRVUZGTzBGQlEyUXNWVUZCU1N4SFFVRkhMRWRCUVVjc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6RkNMRk5CUVVjc1EwRkJReXhUUVVGVExFZEJRVWNzV1VGQldTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOMlF5eGhRVUZQTEVkQlFVY3NRMEZCUXp0TFFVTmFPenRCUVVWRUxGbEJRVkVzUlVGQlJTeEZRVUZGTzBGQlExb3NWMEZCVHl4RlFVRkZMR2xDUVVGVExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNiVUpCUVcxQ0xFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTnVSU3hWUVVGSkxHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRWUVVOdVF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5zUWl4VlFVRkpMRWxCUVVrc1NVRkJTU3hOUVVGTkxFbEJRVWtzVjBGQlZ5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM2hFTEhOQ1FVRmpMRWRCUVVjc1YwRkJWeXhEUVVNeFFpeEpRVUZKTEVWQlEwb3NRMEZCUXl4RlFVTkVMRVZCUVVVc1JVRkRSaXhKUVVGSkxFVkJRMG9zYlVKQlFXMUNMRVZCUTI1Q0xGZEJRVmNzUlVGRFdDeE5RVUZOTEVOQlExQXNRMEZCUXp0UFFVTklMRTFCUVUwc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJUdEJRVU14UWl4elFrRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1QwRkRPVVE3UVVGRFJDeGhRVUZQTEdOQlFXTXNRMEZCUXp0TFFVTjJRanM3UVVGRlJDeFJRVUZKTEVWQlFVVXNZMEZCVXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRk8wRkJRek5DTEdGQlFVOHNTMEZCU3l4SlFVRkpMRXRCUVVzc1JVRkJSU3hGUVVGRk8wRkJRM1pDTEdGQlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8wOUJRM1pDTzBGQlEwUXNZVUZCVHl4TFFVRkxMRU5CUVVNN1MwRkRaRHRCUVVORUxHbENRVUZoTEVWQlFVVXNkVUpCUVZNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU55UXl4VlFVRkpMRWRCUVVjc1IwRkJSeXhMUVVGTExFbEJRVWtzVFVGQlRTeERRVUZET3p0QlFVVXhRaXhWUVVGSkxFdEJRVXNzU1VGQlNTeE5RVUZOTEVsQlFVa3NTMEZCU3l4TFFVRkxMRTFCUVUwc1JVRkJSVHRCUVVOMlF5eFhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMDlCUTNaRE96dEJRVVZFTEdGQlFVOHNSMEZCUnl4RFFVRkRPMHRCUTFvN08wRkJSVVFzWlVGQlZ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE96dEJRVVUxUWl4UlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTzBGQlEycENMR2RDUVVGWkxFVkJRVVVzV1VGQldTeERRVUZETEZGQlFWRTdSMEZEY0VNc1EwRkJRenM3UVVGRlJpeFhRVUZUTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVdkQ08xRkJRV1FzVDBGQlR5eDVSRUZCUnl4RlFVRkZPenRCUVVOb1F5eFJRVUZKTEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRE96dEJRVVY0UWl4UFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzQkNMRkZCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1FVRkROVU1zVlVGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGFFTTdRVUZEUkN4UlFVRkpMRTFCUVUwc1dVRkJRVHRSUVVOU0xGZEJRVmNzUjBGQlJ5eFpRVUZaTEVOQlFVTXNZMEZCWXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhUUVVGVExFTkJRVU03UVVGRE4wUXNVVUZCU1N4WlFVRlpMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRekZDTEZWQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOc1FpeGpRVUZOTEVkQlEwb3NUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlEzaENMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkRhRU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UFFVTjBRaXhOUVVGTk8wRkJRMHdzWTBGQlRTeEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1QwRkRjRUk3UzBGRFJqczdRVUZGUkN4aFFVRlRMRWxCUVVrc1EwRkJReXhQUVVGUExHZENRVUZuUWp0QlFVTnVReXhoUVVORkxFVkJRVVVzUjBGRFJpeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVTm1MRk5CUVZNc1JVRkRWQ3hQUVVGUExFVkJRMUFzVTBGQlV5eERRVUZETEU5QlFVOHNSVUZEYWtJc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGRGJFSXNTVUZCU1N4RlFVTktMRmRCUVZjc1JVRkRXQ3hOUVVGTkxFTkJRMUFzUTBGRFJEdExRVU5JT3p0QlFVVkVMRkZCUVVrc1IwRkJSeXhwUWtGQmFVSXNRMEZEZEVJc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGRGFrSXNTVUZCU1N4RlFVTktMRk5CUVZNc1JVRkRWQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEVWQlFVVXNSVUZEY0VJc1NVRkJTU3hGUVVOS0xGZEJRVmNzUTBGRFdpeERRVUZETzBGQlEwWXNWMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBkQlF5OUNPenRCUVVWRUxFdEJRVWNzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPenRCUVVWcVFpeExRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRlZCUVZNc1QwRkJUeXhGUVVGRk8wRkJRemRDTEZGQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRM0JDTEZWQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBGQlEyNUZMSEZEUVVFclFpeERRVUZETEdGQlFXRXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRCUVVNeFJDeGxRVUZUTEVOQlFVTXNUMEZCVHl4SFFVRkhMR0ZCUVdFc1EwRkJRenM3UVVGRmJFTXNWVUZCU1N4WlFVRlpMRU5CUVVNc1ZVRkJWU3hGUVVGRk96dEJRVVV6UWl4cFFrRkJVeXhEUVVGRExGRkJRVkVzUjBGQlJ5eFRRVUZUTEVOQlFVTXNZVUZCWVN4RFFVTXhReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVU5vUWl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVOaUxFTkJRVU03VDBGRFNEdEJRVU5FTEZWQlFVa3NXVUZCV1N4RFFVRkRMRlZCUVZVc1NVRkJTU3haUVVGWkxFTkJRVU1zWVVGQllTeEZRVUZGTzBGQlEzcEVMR2xDUVVGVExFTkJRVU1zVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUTJwRExFVkJRVVVzUlVGRFJpeEhRVUZITEVOQlFVTXNWVUZCVlN4RlFVTmtMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRMjVDTEVOQlFVTTdUMEZEU0RzN1FVRkZSQ3hsUVVGVExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnlRaXhsUVVGVExFTkJRVU1zYTBKQlFXdENMRWRCUVVjc09FTkJRWGxDTEU5QlFVOHNRMEZCUXl4RFFVRkRPenRCUVVWcVJTeFZRVUZKTEcxQ1FVRnRRaXhIUVVOeVFpeFBRVUZQTEVOQlFVTXNlVUpCUVhsQ0xFbEJRMnBETEc5RFFVRnZReXhEUVVGRE8wRkJRM1pETEdsRFFVRnJRaXhUUVVGVExFVkJRVVVzWlVGQlpTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03UVVGRGJrVXNhVU5CUVd0Q0xGTkJRVk1zUlVGQlJTeHZRa0ZCYjBJc1JVRkJSU3h0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMHRCUTNwRkxFMUJRVTA3UVVGRFRDeGxRVUZUTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhEUVVGRE8wRkJRekZFTEdWQlFWTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF6dEJRVU53UXl4bFFVRlRMRU5CUVVNc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTTdRVUZEZEVNc1pVRkJVeXhEUVVGRExGVkJRVlVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRPMEZCUXpGRExHVkJRVk1zUTBGQlF5eExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVOcVF6dEhRVU5HTEVOQlFVTTdPMEZCUlVZc1MwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZUTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU5zUkN4UlFVRkpMRmxCUVZrc1EwRkJReXhqUVVGakxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdRVUZETDBNc1dVRkJUU3d5UWtGQll5eDNRa0ZCZDBJc1EwRkJReXhEUVVGRE8wdEJReTlETzBGQlEwUXNVVUZCU1N4WlFVRlpMRU5CUVVNc1UwRkJVeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEzSkRMRmxCUVUwc01rSkJRV01zZVVKQlFYbENMRU5CUVVNc1EwRkJRenRMUVVOb1JEczdRVUZGUkN4WFFVRlBMRmRCUVZjc1EwRkRhRUlzVTBGQlV5eEZRVU5VTEVOQlFVTXNSVUZEUkN4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRMllzU1VGQlNTeEZRVU5LTEVOQlFVTXNSVUZEUkN4WFFVRlhMRVZCUTFnc1RVRkJUU3hEUVVOUUxFTkJRVU03UjBGRFNDeERRVUZETzBGQlEwWXNVMEZCVHl4SFFVRkhMRU5CUVVNN1EwRkRXanM3UVVGRlRTeFRRVUZUTEZkQlFWY3NRMEZEZWtJc1UwRkJVeXhGUVVOVUxFTkJRVU1zUlVGRFJDeEZRVUZGTEVWQlEwWXNTVUZCU1N4RlFVTktMRzFDUVVGdFFpeEZRVU51UWl4WFFVRlhMRVZCUTFnc1RVRkJUU3hGUVVOT08wRkJRMEVzVjBGQlV5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRm5RanRSUVVGa0xFOUJRVThzZVVSQlFVY3NSVUZCUlRzN1FVRkRha01zVVVGQlNTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRPMEZCUXpOQ0xGRkJRMFVzVFVGQlRTeEpRVU5PTEU5QlFVOHNTVUZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRM0JDTEVWQlFVVXNUMEZCVHl4TFFVRkxMRk5CUVZNc1EwRkJReXhYUVVGWExFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJRU3hCUVVGRExFVkJRekZFTzBGQlEwRXNiVUpCUVdFc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRMUVVNeFF6czdRVUZGUkN4WFFVRlBMRVZCUVVVc1EwRkRVQ3hUUVVGVExFVkJRMVFzVDBGQlR5eEZRVU5RTEZOQlFWTXNRMEZCUXl4UFFVRlBMRVZCUTJwQ0xGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlEyeENMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeEZRVU53UWl4WFFVRlhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVONFJDeGhRVUZoTEVOQlEyUXNRMEZCUXp0SFFVTklPenRCUVVWRUxFMUJRVWtzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZET3p0QlFVVjZSU3hOUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTnFRaXhOUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU40UXl4TlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExHMUNRVUZ0UWl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVNMVF5eFRRVUZQTEVsQlFVa3NRMEZCUXp0RFFVTmlPenM3T3pzN1FVRkxUU3hUUVVGVExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVONFJDeE5RVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTFvc1VVRkJTU3hQUVVGUExFTkJRVU1zU1VGQlNTeExRVUZMTEdkQ1FVRm5RaXhGUVVGRk8wRkJRM0pETEdGQlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzB0QlEzcERMRTFCUVUwN1FVRkRUQ3hoUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE1VTTdSMEZEUml4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSVHM3UVVGRmVrTXNWMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU03UVVGRGRrSXNWMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdSMEZEY2tNN1FVRkRSQ3hUUVVGUExFOUJRVThzUTBGQlF6dERRVU5vUWpzN1FVRkZUU3hUUVVGVExHRkJRV0VzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHM3UVVGRmRrUXNUVUZCVFN4dFFrRkJiVUlzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZETVVVc1UwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEZGtJc1RVRkJTU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlEyWXNWMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0SFFVTjJSVHM3UVVGRlJDeE5RVUZKTEZsQlFWa3NXVUZCUVN4RFFVRkRPMEZCUTJwQ0xFMUJRVWtzVDBGQlR5eERRVUZETEVWQlFVVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1JVRkJSU3hMUVVGTExFbEJRVWtzUlVGQlJUczdRVUZEY2tNc1lVRkJUeXhEUVVGRExFbEJRVWtzUjBGQlJ5eHJRa0ZCV1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03TzBGQlJYcERMRlZCUVVrc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZEY0VJc2EwSkJRVmtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhIUVVGSExGTkJRVk1zYlVKQlFXMUNMRU5CUTNwRkxFOUJRVThzUlVGRlVEdFpRVVJCTEU5QlFVOHNlVVJCUVVjc1JVRkJSVHM3T3p0QlFVbGFMR1ZCUVU4c1EwRkJReXhKUVVGSkxFZEJRVWNzYTBKQlFWa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRM3BETEdWQlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNN1FVRkRjRVFzWlVGQlR5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wOUJRemRDTEVOQlFVTTdRVUZEUml4VlFVRkpMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3UVVGRFppeGxRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzA5QlEzQkZPenRIUVVOR096dEJRVVZFTEUxQlFVa3NUMEZCVHl4TFFVRkxMRk5CUVZNc1NVRkJTU3haUVVGWkxFVkJRVVU3UVVGRGVrTXNWMEZCVHl4SFFVRkhMRmxCUVZrc1EwRkJRenRIUVVONFFqczdRVUZGUkN4TlFVRkpMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3UVVGRGVrSXNWVUZCVFN3eVFrRkJZeXhqUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NSMEZCUnl4eFFrRkJjVUlzUTBGQlF5eERRVUZETzBkQlF6VkZMRTFCUVUwc1NVRkJTU3hQUVVGUExGbEJRVmtzVVVGQlVTeEZRVUZGTzBGQlEzUkRMRmRCUVU4c1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0SFFVTnNRenREUVVOR096dEJRVVZOTEZOQlFWTXNTVUZCU1N4SFFVRkhPMEZCUTNKQ0xGTkJRVThzUlVGQlJTeERRVUZETzBOQlExZzdPMEZCUlVRc1UwRkJVeXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTXZRaXhOUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJRU3hCUVVGRExFVkJRVVU3UVVGRE9VSXNVVUZCU1N4SFFVRkhMRWxCUVVrc1IwRkJSeXhyUWtGQldTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRja01zVVVGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNN1IwRkRja0k3UVVGRFJDeFRRVUZQTEVsQlFVa3NRMEZCUXp0RFFVTmlPenRCUVVWRUxGTkJRVk1zYVVKQlFXbENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hYUVVGWExFVkJRVVU3UVVGRGVrVXNUVUZCU1N4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRMmhDTEZGQlFVa3NTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVObUxGRkJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVTnFRaXhKUVVGSkxFVkJRMG9zUzBGQlN5eEZRVU5NTEZOQlFWTXNSVUZEVkN4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU51UWl4SlFVRkpMRVZCUTBvc1YwRkJWeXhGUVVOWUxFMUJRVTBzUTBGRFVDeERRVUZETzBGQlEwWXNVMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdSMEZETTBJN1FVRkRSQ3hUUVVGUExFbEJRVWtzUTBGQlF6dERRVU5pT3p0QlFVVkVMRk5CUVZNc0swSkJRU3RDTEVOQlFVTXNZVUZCWVN4RlFVRkZMRk5CUVZNc1JVRkJSVHRCUVVOcVJTeFJRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZCTEZWQlFWVXNSVUZCU1R0QlFVTXZReXhSUVVGSkxFMUJRVTBzUjBGQlJ5eGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1FVRkRka01zYVVKQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03UjBGRGVrVXNRMEZCUXl4RFFVRkRPME5CUTBvN08wRkJSVVFzVTBGQlV5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTzBGQlEyNUVMRTFCUVUwc1kwRkJZeXhIUVVGSExGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTTdRVUZEYUVRc1UwRkJUeXdyUWtGQlZ5eE5RVUZOTEVWQlFVVXNWVUZCUVN4UFFVRlBMRVZCUVVrN1FVRkRia01zVjBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1kwRkJZeXhGUVVGa0xHTkJRV01zUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGRCUTJ4RUxFTkJRVU1zUTBGQlF6dERRVU5LSWl3aVptbHNaU0k2SW5KMWJuUnBiV1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJWZEdsc2N5Qm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCRmVHTmxjSFJwYjI0Z1puSnZiU0FuTGk5bGVHTmxjSFJwYjI0bk8xeHVhVzF3YjNKMElIdGNiaUFnUTA5TlVFbE1SVkpmVWtWV1NWTkpUMDRzWEc0Z0lHTnlaV0YwWlVaeVlXMWxMRnh1SUNCTVFWTlVYME5QVFZCQlZFbENURVZmUTA5TlVFbE1SVkpmVWtWV1NWTkpUMDRzWEc0Z0lGSkZWa2xUU1U5T1gwTklRVTVIUlZOY2JuMGdabkp2YlNBbkxpOWlZWE5sSnp0Y2JtbHRjRzl5ZENCN0lHMXZkbVZJWld4d1pYSlViMGh2YjJ0eklIMGdabkp2YlNBbkxpOW9aV3h3WlhKekp6dGNibWx0Y0c5eWRDQjdJSGR5WVhCSVpXeHdaWElnZlNCbWNtOXRJQ2N1TDJsdWRHVnlibUZzTDNkeVlYQklaV3h3WlhJbk8xeHVhVzF3YjNKMElIdGNiaUFnWTNKbFlYUmxVSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNMRnh1SUNCeVpYTjFiSFJKYzBGc2JHOTNaV1JjYm4wZ1puSnZiU0FuTGk5cGJuUmxjbTVoYkM5d2NtOTBieTFoWTJObGMzTW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWTJobFkydFNaWFpwYzJsdmJpaGpiMjF3YVd4bGNrbHVabThwSUh0Y2JpQWdZMjl1YzNRZ1kyOXRjR2xzWlhKU1pYWnBjMmx2YmlBOUlDaGpiMjF3YVd4bGNrbHVabThnSmlZZ1kyOXRjR2xzWlhKSmJtWnZXekJkS1NCOGZDQXhMRnh1SUNBZ0lHTjFjbkpsYm5SU1pYWnBjMmx2YmlBOUlFTlBUVkJKVEVWU1gxSkZWa2xUU1U5T08xeHVYRzRnSUdsbUlDaGNiaUFnSUNCamIyMXdhV3hsY2xKbGRtbHphVzl1SUQ0OUlFeEJVMVJmUTA5TlVFRlVTVUpNUlY5RFQwMVFTVXhGVWw5U1JWWkpVMGxQVGlBbUpseHVJQ0FnSUdOdmJYQnBiR1Z5VW1WMmFYTnBiMjRnUEQwZ1EwOU5VRWxNUlZKZlVrVldTVk5KVDA1Y2JpQWdLU0I3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0dOdmJYQnBiR1Z5VW1WMmFYTnBiMjRnUENCTVFWTlVYME5QVFZCQlZFbENURVZmUTA5TlVFbE1SVkpmVWtWV1NWTkpUMDRwSUh0Y2JpQWdJQ0JqYjI1emRDQnlkVzUwYVcxbFZtVnljMmx2Ym5NZ1BTQlNSVlpKVTBsUFRsOURTRUZPUjBWVFcyTjFjbkpsYm5SU1pYWnBjMmx2Ymwwc1hHNGdJQ0FnSUNCamIyMXdhV3hsY2xabGNuTnBiMjV6SUQwZ1VrVldTVk5KVDA1ZlEwaEJUa2RGVTF0amIyMXdhV3hsY2xKbGRtbHphVzl1WFR0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0Z4dUlDQWdJQ0FnSjFSbGJYQnNZWFJsSUhkaGN5QndjbVZqYjIxd2FXeGxaQ0IzYVhSb0lHRnVJRzlzWkdWeUlIWmxjbk5wYjI0Z2IyWWdTR0Z1Wkd4bFltRnljeUIwYUdGdUlIUm9aU0JqZFhKeVpXNTBJSEoxYm5ScGJXVXVJQ2NnSzF4dUlDQWdJQ0FnSUNBblVHeGxZWE5sSUhWd1pHRjBaU0I1YjNWeUlIQnlaV052YlhCcGJHVnlJSFJ2SUdFZ2JtVjNaWElnZG1WeWMybHZiaUFvSnlBclhHNGdJQ0FnSUNBZ0lISjFiblJwYldWV1pYSnphVzl1Y3lBclhHNGdJQ0FnSUNBZ0lDY3BJRzl5SUdSdmQyNW5jbUZrWlNCNWIzVnlJSEoxYm5ScGJXVWdkRzhnWVc0Z2IyeGtaWElnZG1WeWMybHZiaUFvSnlBclhHNGdJQ0FnSUNBZ0lHTnZiWEJwYkdWeVZtVnljMmx2Ym5NZ0sxeHVJQ0FnSUNBZ0lDQW5LUzRuWEc0Z0lDQWdLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0F2THlCVmMyVWdkR2hsSUdWdFltVmtaR1ZrSUhabGNuTnBiMjRnYVc1bWJ5QnphVzVqWlNCMGFHVWdjblZ1ZEdsdFpTQmtiMlZ6YmlkMElHdHViM2NnWVdKdmRYUWdkR2hwY3lCeVpYWnBjMmx2YmlCNVpYUmNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtGeHVJQ0FnSUNBZ0oxUmxiWEJzWVhSbElIZGhjeUJ3Y21WamIyMXdhV3hsWkNCM2FYUm9JR0VnYm1WM1pYSWdkbVZ5YzJsdmJpQnZaaUJJWVc1a2JHVmlZWEp6SUhSb1lXNGdkR2hsSUdOMWNuSmxiblFnY25WdWRHbHRaUzRnSnlBclhHNGdJQ0FnSUNBZ0lDZFFiR1ZoYzJVZ2RYQmtZWFJsSUhsdmRYSWdjblZ1ZEdsdFpTQjBieUJoSUc1bGQyVnlJSFpsY25OcGIyNGdLQ2NnSzF4dUlDQWdJQ0FnSUNCamIyMXdhV3hsY2tsdVptOWJNVjBnSzF4dUlDQWdJQ0FnSUNBbktTNG5YRzRnSUNBZ0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdkR1Z0Y0d4aGRHVW9kR1Z0Y0d4aGRHVlRjR1ZqTENCbGJuWXBJSHRjYmlBZ0x5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHNWxlSFFnS2k5Y2JpQWdhV1lnS0NGbGJuWXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2RPYnlCbGJuWnBjbTl1YldWdWRDQndZWE56WldRZ2RHOGdkR1Z0Y0d4aGRHVW5LVHRjYmlBZ2ZWeHVJQ0JwWmlBb0lYUmxiWEJzWVhSbFUzQmxZeUI4ZkNBaGRHVnRjR3hoZEdWVGNHVmpMbTFoYVc0cElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZFZibXR1YjNkdUlIUmxiWEJzWVhSbElHOWlhbVZqZERvZ0p5QXJJSFI1Y0dWdlppQjBaVzF3YkdGMFpWTndaV01wTzF4dUlDQjlYRzVjYmlBZ2RHVnRjR3hoZEdWVGNHVmpMbTFoYVc0dVpHVmpiM0poZEc5eUlEMGdkR1Z0Y0d4aGRHVlRjR1ZqTG0xaGFXNWZaRHRjYmx4dUlDQXZMeUJPYjNSbE9pQlZjMmx1WnlCbGJuWXVWazBnY21WbVpYSmxibU5sY3lCeVlYUm9aWElnZEdoaGJpQnNiMk5oYkNCMllYSWdjbVZtWlhKbGJtTmxjeUIwYUhKdmRXZG9iM1YwSUhSb2FYTWdjMlZqZEdsdmJpQjBieUJoYkd4dmQxeHVJQ0F2THlCbWIzSWdaWGgwWlhKdVlXd2dkWE5sY25NZ2RHOGdiM1psY25KcFpHVWdkR2hsYzJVZ1lYTWdjSE5sZFdSdkxYTjFjSEJ2Y25SbFpDQkJVRWx6TGx4dUlDQmxibll1VmswdVkyaGxZMnRTWlhacGMybHZiaWgwWlcxd2JHRjBaVk53WldNdVkyOXRjR2xzWlhJcE8xeHVYRzRnSUM4dklHSmhZMnQzWVhKa2N5QmpiMjF3WVhScFltbHNhWFI1SUdadmNpQndjbVZqYjIxd2FXeGxaQ0IwWlcxd2JHRjBaWE1nZDJsMGFDQmpiMjF3YVd4bGNpMTJaWEp6YVc5dUlEY2dLRHcwTGpNdU1DbGNiaUFnWTI5dWMzUWdkR1Z0Y0d4aGRHVlhZWE5RY21WamIyMXdhV3hsWkZkcGRHaERiMjF3YVd4bGNsWTNJRDFjYmlBZ0lDQjBaVzF3YkdGMFpWTndaV011WTI5dGNHbHNaWElnSmlZZ2RHVnRjR3hoZEdWVGNHVmpMbU52YlhCcGJHVnlXekJkSUQwOVBTQTNPMXh1WEc0Z0lHWjFibU4wYVc5dUlHbHVkbTlyWlZCaGNuUnBZV3hYY21Gd2NHVnlLSEJoY25ScFlXd3NJR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvYjNCMGFXOXVjeTVvWVhOb0tTQjdYRzRnSUNBZ0lDQmpiMjUwWlhoMElEMGdWWFJwYkhNdVpYaDBaVzVrS0h0OUxDQmpiMjUwWlhoMExDQnZjSFJwYjI1ekxtaGhjMmdwTzF4dUlDQWdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdWFXUnpLU0I3WEc0Z0lDQWdJQ0FnSUc5d2RHbHZibk11YVdSeld6QmRJRDBnZEhKMVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY0dGeWRHbGhiQ0E5SUdWdWRpNVdUUzV5WlhOdmJIWmxVR0Z5ZEdsaGJDNWpZV3hzS0hSb2FYTXNJSEJoY25ScFlXd3NJR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBPMXh1WEc0Z0lDQWdiR1YwSUdWNGRHVnVaR1ZrVDNCMGFXOXVjeUE5SUZWMGFXeHpMbVY0ZEdWdVpDaDdmU3dnYjNCMGFXOXVjeXdnZTF4dUlDQWdJQ0FnYUc5dmEzTTZJSFJvYVhNdWFHOXZhM01zWEc0Z0lDQWdJQ0J3Y205MGIwRmpZMlZ6YzBOdmJuUnliMnc2SUhSb2FYTXVjSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNYRzRnSUNBZ2ZTazdYRzVjYmlBZ0lDQnNaWFFnY21WemRXeDBJRDBnWlc1MkxsWk5MbWx1ZG05clpWQmhjblJwWVd3dVkyRnNiQ2hjYmlBZ0lDQWdJSFJvYVhNc1hHNGdJQ0FnSUNCd1lYSjBhV0ZzTEZ4dUlDQWdJQ0FnWTI5dWRHVjRkQ3hjYmlBZ0lDQWdJR1Y0ZEdWdVpHVmtUM0IwYVc5dWMxeHVJQ0FnSUNrN1hHNWNiaUFnSUNCcFppQW9jbVZ6ZFd4MElEMDlJRzUxYkd3Z0ppWWdaVzUyTG1OdmJYQnBiR1VwSUh0Y2JpQWdJQ0FnSUc5d2RHbHZibk11Y0dGeWRHbGhiSE5iYjNCMGFXOXVjeTV1WVcxbFhTQTlJR1Z1ZGk1amIyMXdhV3hsS0Z4dUlDQWdJQ0FnSUNCd1lYSjBhV0ZzTEZ4dUlDQWdJQ0FnSUNCMFpXMXdiR0YwWlZOd1pXTXVZMjl0Y0dsc1pYSlBjSFJwYjI1ekxGeHVJQ0FnSUNBZ0lDQmxiblpjYmlBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0J5WlhOMWJIUWdQU0J2Y0hScGIyNXpMbkJoY25ScFlXeHpXMjl3ZEdsdmJuTXVibUZ0WlYwb1kyOXVkR1Y0ZEN3Z1pYaDBaVzVrWldSUGNIUnBiMjV6S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hKbGMzVnNkQ0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1cGJtUmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR3hwYm1WeklEMGdjbVZ6ZFd4MExuTndiR2wwS0NkY1hHNG5LVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQXNJR3dnUFNCc2FXNWxjeTVzWlc1bmRHZzdJR2tnUENCc095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvSVd4cGJtVnpXMmxkSUNZbUlHa2dLeUF4SUQwOVBTQnNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCc2FXNWxjMXRwWFNBOUlHOXdkR2x2Ym5NdWFXNWtaVzUwSUNzZ2JHbHVaWE5iYVYwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVZ6ZFd4MElEMGdiR2x1WlhNdWFtOXBiaWduWEZ4dUp5azdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLRnh1SUNBZ0lDQWdJQ0FuVkdobElIQmhjblJwWVd3Z0p5QXJYRzRnSUNBZ0lDQWdJQ0FnYjNCMGFXOXVjeTV1WVcxbElDdGNiaUFnSUNBZ0lDQWdJQ0FuSUdOdmRXeGtJRzV2ZENCaVpTQmpiMjF3YVd4bFpDQjNhR1Z1SUhKMWJtNXBibWNnYVc0Z2NuVnVkR2x0WlMxdmJteDVJRzF2WkdVblhHNGdJQ0FnSUNBcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZJRXAxYzNRZ1lXUmtJSGRoZEdWeVhHNGdJR3hsZENCamIyNTBZV2x1WlhJZ1BTQjdYRzRnSUNBZ2MzUnlhV04wT2lCbWRXNWpkR2x2Ymlodlltb3NJRzVoYldVc0lHeHZZeWtnZTF4dUlDQWdJQ0FnYVdZZ0tDRnZZbW9nZkh3Z0lTaHVZVzFsSUdsdUlHOWlhaWtwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVjRZMlZ3ZEdsdmJpZ25YQ0luSUNzZ2JtRnRaU0FySUNkY0lpQnViM1FnWkdWbWFXNWxaQ0JwYmlBbklDc2diMkpxTENCN1hHNGdJQ0FnSUNBZ0lDQWdiRzlqT2lCc2IyTmNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZMjl1ZEdGcGJtVnlMbXh2YjJ0MWNGQnliM0JsY25SNUtHOWlhaXdnYm1GdFpTazdYRzRnSUNBZ2ZTeGNiaUFnSUNCc2IyOXJkWEJRY205d1pYSjBlVG9nWm5WdVkzUnBiMjRvY0dGeVpXNTBMQ0J3Y205d1pYSjBlVTVoYldVcElIdGNiaUFnSUNBZ0lHeGxkQ0J5WlhOMWJIUWdQU0J3WVhKbGJuUmJjSEp2Y0dWeWRIbE9ZVzFsWFR0Y2JpQWdJQ0FnSUdsbUlDaHlaWE4xYkhRZ1BUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnpkV3gwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHdZWEpsYm5Rc0lIQnliM0JsY25SNVRtRnRaU2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tISmxjM1ZzZEVselFXeHNiM2RsWkNoeVpYTjFiSFFzSUdOdmJuUmhhVzVsY2k1d2NtOTBiMEZqWTJWemMwTnZiblJ5YjJ3c0lIQnliM0JsY25SNVRtRnRaU2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEpsZEhWeWJpQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2ZTeGNiaUFnSUNCc2IyOXJkWEE2SUdaMWJtTjBhVzl1S0dSbGNIUm9jeXdnYm1GdFpTa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2JHVnVJRDBnWkdWd2RHaHpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmxjM1ZzZENBOUlHUmxjSFJvYzF0cFhTQW1KaUJqYjI1MFlXbHVaWEl1Ykc5dmEzVndVSEp2Y0dWeWRIa29aR1Z3ZEdoelcybGRMQ0J1WVcxbEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbGMzVnNkQ0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSbGNIUm9jMXRwWFZ0dVlXMWxYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc0Z0lDQWdiR0Z0WW1SaE9pQm1kVzVqZEdsdmJpaGpkWEp5Wlc1MExDQmpiMjUwWlhoMEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RIbHdaVzltSUdOMWNuSmxiblFnUFQwOUlDZG1kVzVqZEdsdmJpY2dQeUJqZFhKeVpXNTBMbU5oYkd3b1kyOXVkR1Y0ZENrZ09pQmpkWEp5Wlc1ME8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCbGMyTmhjR1ZGZUhCeVpYTnphVzl1T2lCVmRHbHNjeTVsYzJOaGNHVkZlSEJ5WlhOemFXOXVMRnh1SUNBZ0lHbHVkbTlyWlZCaGNuUnBZV3c2SUdsdWRtOXJaVkJoY25ScFlXeFhjbUZ3Y0dWeUxGeHVYRzRnSUNBZ1ptNDZJR1oxYm1OMGFXOXVLR2twSUh0Y2JpQWdJQ0FnSUd4bGRDQnlaWFFnUFNCMFpXMXdiR0YwWlZOd1pXTmJhVjA3WEc0Z0lDQWdJQ0J5WlhRdVpHVmpiM0poZEc5eUlEMGdkR1Z0Y0d4aGRHVlRjR1ZqVzJrZ0t5QW5YMlFuWFR0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ5WlhRN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCeWIyZHlZVzF6T2lCYlhTeGNiaUFnSUNCd2NtOW5jbUZ0T2lCbWRXNWpkR2x2YmlocExDQmtZWFJoTENCa1pXTnNZWEpsWkVKc2IyTnJVR0Z5WVcxekxDQmliRzlqYTFCaGNtRnRjeXdnWkdWd2RHaHpLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2NISnZaM0poYlZkeVlYQndaWElnUFNCMGFHbHpMbkJ5YjJkeVlXMXpXMmxkTEZ4dUlDQWdJQ0FnSUNCbWJpQTlJSFJvYVhNdVptNG9hU2s3WEc0Z0lDQWdJQ0JwWmlBb1pHRjBZU0I4ZkNCa1pYQjBhSE1nZkh3Z1lteHZZMnRRWVhKaGJYTWdmSHdnWkdWamJHRnlaV1JDYkc5amExQmhjbUZ0Y3lrZ2UxeHVJQ0FnSUNBZ0lDQndjbTluY21GdFYzSmhjSEJsY2lBOUlIZHlZWEJRY205bmNtRnRLRnh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXNYRzRnSUNBZ0lDQWdJQ0FnYVN4Y2JpQWdJQ0FnSUNBZ0lDQm1iaXhjYmlBZ0lDQWdJQ0FnSUNCa1lYUmhMRnh1SUNBZ0lDQWdJQ0FnSUdSbFkyeGhjbVZrUW14dlkydFFZWEpoYlhNc1hHNGdJQ0FnSUNBZ0lDQWdZbXh2WTJ0UVlYSmhiWE1zWEc0Z0lDQWdJQ0FnSUNBZ1pHVndkR2h6WEc0Z0lDQWdJQ0FnSUNrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDRndjbTluY21GdFYzSmhjSEJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQndjbTluY21GdFYzSmhjSEJsY2lBOUlIUm9hWE11Y0hKdlozSmhiWE5iYVYwZ1BTQjNjbUZ3VUhKdlozSmhiU2gwYUdsekxDQnBMQ0JtYmlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnY0hKdlozSmhiVmR5WVhCd1pYSTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHUmhkR0U2SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0JrWlhCMGFDa2dlMXh1SUNBZ0lDQWdkMmhwYkdVZ0tIWmhiSFZsSUNZbUlHUmxjSFJvTFMwcElIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVZ1BTQjJZV3gxWlM1ZmNHRnlaVzUwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbE8xeHVJQ0FnSUgwc1hHNGdJQ0FnYldWeVoyVkpaazVsWldSbFpEb2dablZ1WTNScGIyNG9jR0Z5WVcwc0lHTnZiVzF2YmlrZ2UxeHVJQ0FnSUNBZ2JHVjBJRzlpYWlBOUlIQmhjbUZ0SUh4OElHTnZiVzF2Ymp0Y2JseHVJQ0FnSUNBZ2FXWWdLSEJoY21GdElDWW1JR052YlcxdmJpQW1KaUJ3WVhKaGJTQWhQVDBnWTI5dGJXOXVLU0I3WEc0Z0lDQWdJQ0FnSUc5aWFpQTlJRlYwYVd4ekxtVjRkR1Z1WkNoN2ZTd2dZMjl0Ylc5dUxDQndZWEpoYlNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCdlltbzdYRzRnSUNBZ2ZTeGNiaUFnSUNBdkx5QkJiaUJsYlhCMGVTQnZZbXBsWTNRZ2RHOGdkWE5sSUdGeklISmxjR3hoWTJWdFpXNTBJR1p2Y2lCdWRXeHNMV052Ym5SbGVIUnpYRzRnSUNBZ2JuVnNiRU52Ym5SbGVIUTZJRTlpYW1WamRDNXpaV0ZzS0h0OUtTeGNibHh1SUNBZ0lHNXZiM0E2SUdWdWRpNVdUUzV1YjI5d0xGeHVJQ0FnSUdOdmJYQnBiR1Z5U1c1bWJ6b2dkR1Z0Y0d4aGRHVlRjR1ZqTG1OdmJYQnBiR1Z5WEc0Z0lIMDdYRzVjYmlBZ1puVnVZM1JwYjI0Z2NtVjBLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTWdQU0I3ZlNrZ2UxeHVJQ0FnSUd4bGRDQmtZWFJoSUQwZ2IzQjBhVzl1Y3k1a1lYUmhPMXh1WEc0Z0lDQWdjbVYwTGw5elpYUjFjQ2h2Y0hScGIyNXpLVHRjYmlBZ0lDQnBaaUFvSVc5d2RHbHZibk11Y0dGeWRHbGhiQ0FtSmlCMFpXMXdiR0YwWlZOd1pXTXVkWE5sUkdGMFlTa2dlMXh1SUNBZ0lDQWdaR0YwWVNBOUlHbHVhWFJFWVhSaEtHTnZiblJsZUhRc0lHUmhkR0VwTzF4dUlDQWdJSDFjYmlBZ0lDQnNaWFFnWkdWd2RHaHpMRnh1SUNBZ0lDQWdZbXh2WTJ0UVlYSmhiWE1nUFNCMFpXMXdiR0YwWlZOd1pXTXVkWE5sUW14dlkydFFZWEpoYlhNZ1B5QmJYU0E2SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0JwWmlBb2RHVnRjR3hoZEdWVGNHVmpMblZ6WlVSbGNIUm9jeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdVpHVndkR2h6S1NCN1hHNGdJQ0FnSUNBZ0lHUmxjSFJvY3lBOVhHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWNGRDQWhQU0J2Y0hScGIyNXpMbVJsY0hSb2Mxc3dYVnh1SUNBZ0lDQWdJQ0FnSUNBZ1B5QmJZMjl1ZEdWNGRGMHVZMjl1WTJGMEtHOXdkR2x2Ym5NdVpHVndkR2h6S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdPaUJ2Y0hScGIyNXpMbVJsY0hSb2N6dGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHUmxjSFJvY3lBOUlGdGpiMjUwWlhoMFhUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCdFlXbHVLR052Ym5SbGVIUWdMeW9zSUc5d2RHbHZibk1xTHlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNBZ0p5Y2dLMXh1SUNBZ0lDQWdJQ0IwWlcxd2JHRjBaVk53WldNdWJXRnBiaWhjYmlBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWNGRDeGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1YUdWc2NHVnljeXhjYmlBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJdWNHRnlkR2xoYkhNc1hHNGdJQ0FnSUNBZ0lDQWdaR0YwWVN4Y2JpQWdJQ0FnSUNBZ0lDQmliRzlqYTFCaGNtRnRjeXhjYmlBZ0lDQWdJQ0FnSUNCa1pYQjBhSE5jYmlBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J0WVdsdUlEMGdaWGhsWTNWMFpVUmxZMjl5WVhSdmNuTW9YRzRnSUNBZ0lDQjBaVzF3YkdGMFpWTndaV011YldGcGJpeGNiaUFnSUNBZ0lHMWhhVzRzWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0J2Y0hScGIyNXpMbVJsY0hSb2N5QjhmQ0JiWFN4Y2JpQWdJQ0FnSUdSaGRHRXNYRzRnSUNBZ0lDQmliRzlqYTFCaGNtRnRjMXh1SUNBZ0lDazdYRzRnSUNBZ2NtVjBkWEp1SUcxaGFXNG9ZMjl1ZEdWNGRDd2diM0IwYVc5dWN5azdYRzRnSUgxY2JseHVJQ0J5WlhRdWFYTlViM0FnUFNCMGNuVmxPMXh1WEc0Z0lISmxkQzVmYzJWMGRYQWdQU0JtZFc1amRHbHZiaWh2Y0hScGIyNXpLU0I3WEc0Z0lDQWdhV1lnS0NGdmNIUnBiMjV6TG5CaGNuUnBZV3dwSUh0Y2JpQWdJQ0FnSUd4bGRDQnRaWEpuWldSSVpXeHdaWEp6SUQwZ1ZYUnBiSE11WlhoMFpXNWtLSHQ5TENCbGJuWXVhR1ZzY0dWeWN5d2diM0IwYVc5dWN5NW9aV3h3WlhKektUdGNiaUFnSUNBZ0lIZHlZWEJJWld4d1pYSnpWRzlRWVhOelRHOXZhM1Z3VUhKdmNHVnlkSGtvYldWeVoyVmtTR1ZzY0dWeWN5d2dZMjl1ZEdGcGJtVnlLVHRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTVvWld4d1pYSnpJRDBnYldWeVoyVmtTR1ZzY0dWeWN6dGNibHh1SUNBZ0lDQWdhV1lnS0hSbGJYQnNZWFJsVTNCbFl5NTFjMlZRWVhKMGFXRnNLU0I3WEc0Z0lDQWdJQ0FnSUM4dklGVnpaU0J0WlhKblpVbG1UbVZsWkdWa0lHaGxjbVVnZEc4Z2NISmxkbVZ1ZENCamIyMXdhV3hwYm1jZ1oyeHZZbUZzSUhCaGNuUnBZV3h6SUcxMWJIUnBjR3hsSUhScGJXVnpYRzRnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTV3WVhKMGFXRnNjeUE5SUdOdmJuUmhhVzVsY2k1dFpYSm5aVWxtVG1WbFpHVmtLRnh1SUNBZ0lDQWdJQ0FnSUc5d2RHbHZibk11Y0dGeWRHbGhiSE1zWEc0Z0lDQWdJQ0FnSUNBZ1pXNTJMbkJoY25ScFlXeHpYRzRnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWmlBb2RHVnRjR3hoZEdWVGNHVmpMblZ6WlZCaGNuUnBZV3dnZkh3Z2RHVnRjR3hoZEdWVGNHVmpMblZ6WlVSbFkyOXlZWFJ2Y25NcElIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbVJsWTI5eVlYUnZjbk1nUFNCVmRHbHNjeTVsZUhSbGJtUW9YRzRnSUNBZ0lDQWdJQ0FnZTMwc1hHNGdJQ0FnSUNBZ0lDQWdaVzUyTG1SbFkyOXlZWFJ2Y25Nc1hHNGdJQ0FnSUNBZ0lDQWdiM0IwYVc5dWN5NWtaV052Y21GMGIzSnpYRzRnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdOdmJuUmhhVzVsY2k1b2IyOXJjeUE5SUh0OU8xeHVJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxuQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJDQTlJR055WldGMFpWQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJDaHZjSFJwYjI1ektUdGNibHh1SUNBZ0lDQWdiR1YwSUd0bFpYQklaV3h3WlhKSmJraGxiSEJsY25NZ1BWeHVJQ0FnSUNBZ0lDQnZjSFJwYjI1ekxtRnNiRzkzUTJGc2JITlViMGhsYkhCbGNrMXBjM05wYm1jZ2ZIeGNiaUFnSUNBZ0lDQWdkR1Z0Y0d4aGRHVlhZWE5RY21WamIyMXdhV3hsWkZkcGRHaERiMjF3YVd4bGNsWTNPMXh1SUNBZ0lDQWdiVzkyWlVobGJIQmxjbFJ2U0c5dmEzTW9ZMjl1ZEdGcGJtVnlMQ0FuYUdWc2NHVnlUV2x6YzJsdVp5Y3NJR3RsWlhCSVpXeHdaWEpKYmtobGJIQmxjbk1wTzF4dUlDQWdJQ0FnYlc5MlpVaGxiSEJsY2xSdlNHOXZhM01vWTI5dWRHRnBibVZ5TENBbllteHZZMnRJWld4d1pYSk5hWE56YVc1bkp5d2dhMlZsY0VobGJIQmxja2x1U0dWc2NHVnljeWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZiblJoYVc1bGNpNXdjbTkwYjBGalkyVnpjME52Ym5SeWIyd2dQU0J2Y0hScGIyNXpMbkJ5YjNSdlFXTmpaWE56UTI5dWRISnZiRHNnTHk4Z2FXNTBaWEp1WVd3Z2IzQjBhVzl1WEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1YUdWc2NHVnljeUE5SUc5d2RHbHZibk11YUdWc2NHVnljenRjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTV3WVhKMGFXRnNjeUE5SUc5d2RHbHZibk11Y0dGeWRHbGhiSE03WEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1WkdWamIzSmhkRzl5Y3lBOUlHOXdkR2x2Ym5NdVpHVmpiM0poZEc5eWN6dGNiaUFnSUNBZ0lHTnZiblJoYVc1bGNpNW9iMjlyY3lBOUlHOXdkR2x2Ym5NdWFHOXZhM003WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUhKbGRDNWZZMmhwYkdRZ1BTQm1kVzVqZEdsdmJpaHBMQ0JrWVhSaExDQmliRzlqYTFCaGNtRnRjeXdnWkdWd2RHaHpLU0I3WEc0Z0lDQWdhV1lnS0hSbGJYQnNZWFJsVTNCbFl5NTFjMlZDYkc5amExQmhjbUZ0Y3lBbUppQWhZbXh2WTJ0UVlYSmhiWE1wSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0oyMTFjM1FnY0dGemN5QmliRzlqYXlCd1lYSmhiWE1uS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSbGJYQnNZWFJsVTNCbFl5NTFjMlZFWlhCMGFITWdKaVlnSVdSbGNIUm9jeWtnZTF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnbmJYVnpkQ0J3WVhOeklIQmhjbVZ1ZENCa1pYQjBhSE1uS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkM0poY0ZCeWIyZHlZVzBvWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0JwTEZ4dUlDQWdJQ0FnZEdWdGNHeGhkR1ZUY0dWalcybGRMRnh1SUNBZ0lDQWdaR0YwWVN4Y2JpQWdJQ0FnSURBc1hHNGdJQ0FnSUNCaWJHOWphMUJoY21GdGN5eGNiaUFnSUNBZ0lHUmxjSFJvYzF4dUlDQWdJQ2s3WEc0Z0lIMDdYRzRnSUhKbGRIVnliaUJ5WlhRN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUIzY21Gd1VISnZaM0poYlNoY2JpQWdZMjl1ZEdGcGJtVnlMRnh1SUNCcExGeHVJQ0JtYml4Y2JpQWdaR0YwWVN4Y2JpQWdaR1ZqYkdGeVpXUkNiRzlqYTFCaGNtRnRjeXhjYmlBZ1lteHZZMnRRWVhKaGJYTXNYRzRnSUdSbGNIUm9jMXh1S1NCN1hHNGdJR1oxYm1OMGFXOXVJSEJ5YjJjb1kyOXVkR1Y0ZEN3Z2IzQjBhVzl1Y3lBOUlIdDlLU0I3WEc0Z0lDQWdiR1YwSUdOMWNuSmxiblJFWlhCMGFITWdQU0JrWlhCMGFITTdYRzRnSUNBZ2FXWWdLRnh1SUNBZ0lDQWdaR1Z3ZEdoeklDWW1YRzRnSUNBZ0lDQmpiMjUwWlhoMElDRTlJR1JsY0hSb2Mxc3dYU0FtSmx4dUlDQWdJQ0FnSVNoamIyNTBaWGgwSUQwOVBTQmpiMjUwWVdsdVpYSXViblZzYkVOdmJuUmxlSFFnSmlZZ1pHVndkR2h6V3pCZElEMDlQU0J1ZFd4c0tWeHVJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ1kzVnljbVZ1ZEVSbGNIUm9jeUE5SUZ0amIyNTBaWGgwWFM1amIyNWpZWFFvWkdWd2RHaHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1ptNG9YRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ0lDQmpiMjUwWlhoMExGeHVJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtaGxiSEJsY25Nc1hHNGdJQ0FnSUNCamIyNTBZV2x1WlhJdWNHRnlkR2xoYkhNc1hHNGdJQ0FnSUNCdmNIUnBiMjV6TG1SaGRHRWdmSHdnWkdGMFlTeGNiaUFnSUNBZ0lHSnNiMk5yVUdGeVlXMXpJQ1ltSUZ0dmNIUnBiMjV6TG1Kc2IyTnJVR0Z5WVcxelhTNWpiMjVqWVhRb1lteHZZMnRRWVhKaGJYTXBMRnh1SUNBZ0lDQWdZM1Z5Y21WdWRFUmxjSFJvYzF4dUlDQWdJQ2s3WEc0Z0lIMWNibHh1SUNCd2NtOW5JRDBnWlhobFkzVjBaVVJsWTI5eVlYUnZjbk1vWm00c0lIQnliMmNzSUdOdmJuUmhhVzVsY2l3Z1pHVndkR2h6TENCa1lYUmhMQ0JpYkc5amExQmhjbUZ0Y3lrN1hHNWNiaUFnY0hKdlp5NXdjbTluY21GdElEMGdhVHRjYmlBZ2NISnZaeTVrWlhCMGFDQTlJR1JsY0hSb2N5QS9JR1JsY0hSb2N5NXNaVzVuZEdnZ09pQXdPMXh1SUNCd2NtOW5MbUpzYjJOclVHRnlZVzF6SUQwZ1pHVmpiR0Z5WldSQ2JHOWphMUJoY21GdGN5QjhmQ0F3TzF4dUlDQnlaWFIxY200Z2NISnZaenRjYm4xY2JseHVMeW9xWEc0Z0tpQlVhR2x6SUdseklHTjFjbkpsYm5Sc2VTQndZWEowSUc5bUlIUm9aU0J2Wm1acFkybGhiQ0JCVUVrc0lIUm9aWEpsWm05eVpTQnBiWEJzWlcxbGJuUmhkR2x2YmlCa1pYUmhhV3h6SUhOb2IzVnNaQ0J1YjNRZ1ltVWdZMmhoYm1kbFpDNWNiaUFxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhKbGMyOXNkbVZRWVhKMGFXRnNLSEJoY25ScFlXd3NJR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ2FXWWdLQ0Z3WVhKMGFXRnNLU0I3WEc0Z0lDQWdhV1lnS0c5d2RHbHZibk11Ym1GdFpTQTlQVDBnSjBCd1lYSjBhV0ZzTFdKc2IyTnJKeWtnZTF4dUlDQWdJQ0FnY0dGeWRHbGhiQ0E5SUc5d2RHbHZibk11WkdGMFlWc25jR0Z5ZEdsaGJDMWliRzlqYXlkZE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J3WVhKMGFXRnNJRDBnYjNCMGFXOXVjeTV3WVhKMGFXRnNjMXR2Y0hScGIyNXpMbTVoYldWZE8xeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElHbG1JQ2doY0dGeWRHbGhiQzVqWVd4c0lDWW1JQ0Z2Y0hScGIyNXpMbTVoYldVcElIdGNiaUFnSUNBdkx5QlVhR2x6SUdseklHRWdaSGx1WVcxcFl5QndZWEowYVdGc0lIUm9ZWFFnY21WMGRYSnVaV1FnWVNCemRISnBibWRjYmlBZ0lDQnZjSFJwYjI1ekxtNWhiV1VnUFNCd1lYSjBhV0ZzTzF4dUlDQWdJSEJoY25ScFlXd2dQU0J2Y0hScGIyNXpMbkJoY25ScFlXeHpXM0JoY25ScFlXeGRPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQndZWEowYVdGc08xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYVc1MmIydGxVR0Z5ZEdsaGJDaHdZWEowYVdGc0xDQmpiMjUwWlhoMExDQnZjSFJwYjI1ektTQjdYRzRnSUM4dklGVnpaU0IwYUdVZ1kzVnljbVZ1ZENCamJHOXpkWEpsSUdOdmJuUmxlSFFnZEc4Z2MyRjJaU0IwYUdVZ2NHRnlkR2xoYkMxaWJHOWpheUJwWmlCMGFHbHpJSEJoY25ScFlXeGNiaUFnWTI5dWMzUWdZM1Z5Y21WdWRGQmhjblJwWVd4Q2JHOWpheUE5SUc5d2RHbHZibk11WkdGMFlTQW1KaUJ2Y0hScGIyNXpMbVJoZEdGYkozQmhjblJwWVd3dFlteHZZMnNuWFR0Y2JpQWdiM0IwYVc5dWN5NXdZWEowYVdGc0lEMGdkSEoxWlR0Y2JpQWdhV1lnS0c5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ2IzQjBhVzl1Y3k1a1lYUmhMbU52Ym5SbGVIUlFZWFJvSUQwZ2IzQjBhVzl1Y3k1cFpITmJNRjBnZkh3Z2IzQjBhVzl1Y3k1a1lYUmhMbU52Ym5SbGVIUlFZWFJvTzF4dUlDQjlYRzVjYmlBZ2JHVjBJSEJoY25ScFlXeENiRzlqYXp0Y2JpQWdhV1lnS0c5d2RHbHZibk11Wm00Z0ppWWdiM0IwYVc5dWN5NW1iaUFoUFQwZ2JtOXZjQ2tnZTF4dUlDQWdJRzl3ZEdsdmJuTXVaR0YwWVNBOUlHTnlaV0YwWlVaeVlXMWxLRzl3ZEdsdmJuTXVaR0YwWVNrN1hHNGdJQ0FnTHk4Z1YzSmhjSEJsY2lCbWRXNWpkR2x2YmlCMGJ5Qm5aWFFnWVdOalpYTnpJSFJ2SUdOMWNuSmxiblJRWVhKMGFXRnNRbXh2WTJzZ1puSnZiU0IwYUdVZ1kyeHZjM1Z5WlZ4dUlDQWdJR3hsZENCbWJpQTlJRzl3ZEdsdmJuTXVabTQ3WEc0Z0lDQWdjR0Z5ZEdsaGJFSnNiMk5ySUQwZ2IzQjBhVzl1Y3k1a1lYUmhXeWR3WVhKMGFXRnNMV0pzYjJOckoxMGdQU0JtZFc1amRHbHZiaUJ3WVhKMGFXRnNRbXh2WTJ0WGNtRndjR1Z5S0Z4dUlDQWdJQ0FnWTI5dWRHVjRkQ3hjYmlBZ0lDQWdJRzl3ZEdsdmJuTWdQU0I3ZlZ4dUlDQWdJQ2tnZTF4dUlDQWdJQ0FnTHk4Z1VtVnpkRzl5WlNCMGFHVWdjR0Z5ZEdsaGJDMWliRzlqYXlCbWNtOXRJSFJvWlNCamJHOXpkWEpsSUdadmNpQjBhR1VnWlhobFkzVjBhVzl1SUc5bUlIUm9aU0JpYkc5amExeHVJQ0FnSUNBZ0x5OGdhUzVsTGlCMGFHVWdjR0Z5ZENCcGJuTnBaR1VnZEdobElHSnNiMk5ySUc5bUlIUm9aU0J3WVhKMGFXRnNJR05oYkd3dVhHNGdJQ0FnSUNCdmNIUnBiMjV6TG1SaGRHRWdQU0JqY21WaGRHVkdjbUZ0WlNodmNIUnBiMjV6TG1SaGRHRXBPMXh1SUNBZ0lDQWdiM0IwYVc5dWN5NWtZWFJoV3lkd1lYSjBhV0ZzTFdKc2IyTnJKMTBnUFNCamRYSnlaVzUwVUdGeWRHbGhiRUpzYjJOck8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUdadUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYVdZZ0tHWnVMbkJoY25ScFlXeHpLU0I3WEc0Z0lDQWdJQ0J2Y0hScGIyNXpMbkJoY25ScFlXeHpJRDBnVlhScGJITXVaWGgwWlc1a0tIdDlMQ0J2Y0hScGIyNXpMbkJoY25ScFlXeHpMQ0JtYmk1d1lYSjBhV0ZzY3lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLSEJoY25ScFlXd2dQVDA5SUhWdVpHVm1hVzVsWkNBbUppQndZWEowYVdGc1FteHZZMnNwSUh0Y2JpQWdJQ0J3WVhKMGFXRnNJRDBnY0dGeWRHbGhiRUpzYjJOck8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0hCaGNuUnBZV3dnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZlR05sY0hScGIyNG9KMVJvWlNCd1lYSjBhV0ZzSUNjZ0t5QnZjSFJwYjI1ekxtNWhiV1VnS3lBbklHTnZkV3hrSUc1dmRDQmlaU0JtYjNWdVpDY3BPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIQmhjblJwWVd3Z2FXNXpkR0Z1WTJWdlppQkdkVzVqZEdsdmJpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCd1lYSjBhV0ZzS0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdWIyOXdLQ2tnZTF4dUlDQnlaWFIxY200Z0p5YzdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHVhWFJFWVhSaEtHTnZiblJsZUhRc0lHUmhkR0VwSUh0Y2JpQWdhV1lnS0NGa1lYUmhJSHg4SUNFb0ozSnZiM1FuSUdsdUlHUmhkR0VwS1NCN1hHNGdJQ0FnWkdGMFlTQTlJR1JoZEdFZ1B5QmpjbVZoZEdWR2NtRnRaU2hrWVhSaEtTQTZJSHQ5TzF4dUlDQWdJR1JoZEdFdWNtOXZkQ0E5SUdOdmJuUmxlSFE3WEc0Z0lIMWNiaUFnY21WMGRYSnVJR1JoZEdFN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdWNFpXTjFkR1ZFWldOdmNtRjBiM0p6S0dadUxDQndjbTluTENCamIyNTBZV2x1WlhJc0lHUmxjSFJvY3l3Z1pHRjBZU3dnWW14dlkydFFZWEpoYlhNcElIdGNiaUFnYVdZZ0tHWnVMbVJsWTI5eVlYUnZjaWtnZTF4dUlDQWdJR3hsZENCd2NtOXdjeUE5SUh0OU8xeHVJQ0FnSUhCeWIyY2dQU0JtYmk1a1pXTnZjbUYwYjNJb1hHNGdJQ0FnSUNCd2NtOW5MRnh1SUNBZ0lDQWdjSEp2Y0hNc1hHNGdJQ0FnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNCa1pYQjBhSE1nSmlZZ1pHVndkR2h6V3pCZExGeHVJQ0FnSUNBZ1pHRjBZU3hjYmlBZ0lDQWdJR0pzYjJOclVHRnlZVzF6TEZ4dUlDQWdJQ0FnWkdWd2RHaHpYRzRnSUNBZ0tUdGNiaUFnSUNCVmRHbHNjeTVsZUhSbGJtUW9jSEp2Wnl3Z2NISnZjSE1wTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ3Y205bk8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCM2NtRndTR1ZzY0dWeWMxUnZVR0Z6YzB4dmIydDFjRkJ5YjNCbGNuUjVLRzFsY21kbFpFaGxiSEJsY25Nc0lHTnZiblJoYVc1bGNpa2dlMXh1SUNCUFltcGxZM1F1YTJWNWN5aHRaWEpuWldSSVpXeHdaWEp6S1M1bWIzSkZZV05vS0dobGJIQmxjazVoYldVZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JvWld4d1pYSWdQU0J0WlhKblpXUklaV3h3WlhKelcyaGxiSEJsY2s1aGJXVmRPMXh1SUNBZ0lHMWxjbWRsWkVobGJIQmxjbk5iYUdWc2NHVnlUbUZ0WlYwZ1BTQndZWE56VEc5dmEzVndVSEp2Y0dWeWRIbFBjSFJwYjI0b2FHVnNjR1Z5TENCamIyNTBZV2x1WlhJcE8xeHVJQ0I5S1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnY0dGemMweHZiMnQxY0ZCeWIzQmxjblI1VDNCMGFXOXVLR2hsYkhCbGNpd2dZMjl1ZEdGcGJtVnlLU0I3WEc0Z0lHTnZibk4wSUd4dmIydDFjRkJ5YjNCbGNuUjVJRDBnWTI5dWRHRnBibVZ5TG14dmIydDFjRkJ5YjNCbGNuUjVPMXh1SUNCeVpYUjFjbTRnZDNKaGNFaGxiSEJsY2lob1pXeHdaWElzSUc5d2RHbHZibk1nUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUJWZEdsc2N5NWxlSFJsYm1Rb2V5QnNiMjlyZFhCUWNtOXdaWEowZVNCOUxDQnZjSFJwYjI1ektUdGNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuIiwiLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IFNhZmVTdHJpbmcucHJvdG90eXBlLnRvSFRNTCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICcnICsgdGhpcy5zdHJpbmc7XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBTYWZlU3RyaW5nO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzTmhabVV0YzNSeWFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkRRU3hUUVVGVExGVkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZETVVJc1RVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdRMEZEZEVJN08wRkJSVVFzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NXVUZCVnp0QlFVTjJSU3hUUVVGUExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPME5CUTNwQ0xFTkJRVU03TzNGQ1FVVmhMRlZCUVZVaUxDSm1hV3hsSWpvaWMyRm1aUzF6ZEhKcGJtY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkNkV2xzWkNCdmRYUWdiM1Z5SUdKaGMybGpJRk5oWm1WVGRISnBibWNnZEhsd1pWeHVablZ1WTNScGIyNGdVMkZtWlZOMGNtbHVaeWh6ZEhKcGJtY3BJSHRjYmlBZ2RHaHBjeTV6ZEhKcGJtY2dQU0J6ZEhKcGJtYzdYRzU5WEc1Y2JsTmhabVZUZEhKcGJtY3VjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5JRDBnVTJGbVpWTjBjbWx1Wnk1d2NtOTBiM1I1Y0dVdWRHOUlWRTFNSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUhKbGRIVnliaUFuSnlBcklIUm9hWE11YzNSeWFXNW5PMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1UyRm1aVk4wY21sdVp6dGNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5leHBvcnRzLmluZGV4T2YgPSBpbmRleE9mO1xuZXhwb3J0cy5lc2NhcGVFeHByZXNzaW9uID0gZXNjYXBlRXhwcmVzc2lvbjtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmNyZWF0ZUZyYW1lID0gY3JlYXRlRnJhbWU7XG5leHBvcnRzLmJsb2NrUGFyYW1zID0gYmxvY2tQYXJhbXM7XG5leHBvcnRzLmFwcGVuZENvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGg7XG52YXIgZXNjYXBlID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgJ2AnOiAnJiN4NjA7JyxcbiAgJz0nOiAnJiN4M0Q7J1xufTtcblxudmFyIGJhZENoYXJzID0gL1smPD5cIidgPV0vZyxcbiAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5mdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5leHBvcnRzLnRvU3RyaW5nID0gdG9TdHJpbmc7XG4vLyBTb3VyY2VkIGZyb20gbG9kYXNoXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYmVzdGllanMvbG9kYXNoL2Jsb2IvbWFzdGVyL0xJQ0VOU0UudHh0XG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLXN0eWxlICovXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaXNGdW5jdGlvbigveC8pKSB7XG4gIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG4vLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuXG5mdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVFeHByZXNzaW9uKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBlc2NhcGUgU2FmZVN0cmluZ3MsIHNpbmNlIHRoZXkncmUgYWxyZWFkeSBzYWZlXG4gICAgaWYgKHN0cmluZyAmJiBzdHJpbmcudG9IVE1MKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnRvSFRNTCgpO1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcgKyAnJztcbiAgICB9XG5cbiAgICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgICAvLyB0aGUgcmVnZXggdGVzdCB3aWxsIGRvIHRoaXMgdHJhbnNwYXJlbnRseSBiZWhpbmQgdGhlIHNjZW5lcywgY2F1c2luZyBpc3N1ZXMgaWZcbiAgICAvLyBhbiBvYmplY3QncyB0byBzdHJpbmcgaGFzIGVzY2FwZWQgY2hhcmFjdGVycyBpbiBpdC5cbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZztcbiAgfVxuXG4gIGlmICghcG9zc2libGUudGVzdChzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIHZhciBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuICBwYXJhbXMucGF0aCA9IGlkcztcbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMM1YwYVd4ekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdRVUZCUVN4SlFVRk5MRTFCUVUwc1IwRkJSenRCUVVOaUxFdEJRVWNzUlVGQlJTeFBRVUZQTzBGQlExb3NTMEZCUnl4RlFVRkZMRTFCUVUwN1FVRkRXQ3hMUVVGSExFVkJRVVVzVFVGQlRUdEJRVU5ZTEV0QlFVY3NSVUZCUlN4UlFVRlJPMEZCUTJJc1MwRkJSeXhGUVVGRkxGRkJRVkU3UVVGRFlpeExRVUZITEVWQlFVVXNVVUZCVVR0QlFVTmlMRXRCUVVjc1JVRkJSU3hSUVVGUk8wTkJRMlFzUTBGQlF6czdRVUZGUml4SlFVRk5MRkZCUVZFc1IwRkJSeXhaUVVGWk8wbEJRek5DTEZGQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNN08wRkJSWHBDTEZOQlFWTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVOMlFpeFRRVUZQTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenREUVVOd1FqczdRVUZGVFN4VFFVRlRMRTFCUVUwc1EwRkJReXhIUVVGSExHOUNRVUZ2UWp0QlFVTTFReXhQUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjZReXhUUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVNMVFpeFZRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRE0wUXNWMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRQUVVNNVFqdExRVU5HTzBkQlEwWTdPMEZCUlVRc1UwRkJUeXhIUVVGSExFTkJRVU03UTBGRFdqczdRVUZGVFN4SlFVRkpMRkZCUVZFc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXpzN096czdPMEZCUzJoRUxFbEJRVWtzVlVGQlZTeEhRVUZITEc5Q1FVRlRMRXRCUVVzc1JVRkJSVHRCUVVNdlFpeFRRVUZQTEU5QlFVOHNTMEZCU3l4TFFVRkxMRlZCUVZVc1EwRkJRenREUVVOd1F5eERRVUZET3pzN1FVRkhSaXhKUVVGSkxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnVRaXhWUVU5UExGVkJRVlVzUjBGUWFrSXNWVUZCVlN4SFFVRkhMRlZCUVZNc1MwRkJTeXhGUVVGRk8wRkJRek5DTEZkQlEwVXNUMEZCVHl4TFFVRkxMRXRCUVVzc1ZVRkJWU3hKUVVNelFpeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExHMUNRVUZ0UWl4RFFVTTFRenRIUVVOSUxFTkJRVU03UTBGRFNEdFJRVU5STEZWQlFWVXNSMEZCVml4VlFVRlZPenM3T3p0QlFVbGFMRWxCUVUwc1QwRkJUeXhIUVVOc1FpeExRVUZMTEVOQlFVTXNUMEZCVHl4SlFVTmlMRlZCUVZNc1MwRkJTeXhGUVVGRk8wRkJRMlFzVTBGQlR5eExRVUZMTEVsQlFVa3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hIUVVOeVF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExHZENRVUZuUWl4SFFVTjZReXhMUVVGTExFTkJRVU03UTBGRFdDeERRVUZET3pzN096dEJRVWRITEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVU3UVVGRGNFTXNUMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTm9SQ3hSUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4TFFVRkxMRVZCUVVVN1FVRkRkRUlzWVVGQlR5eERRVUZETEVOQlFVTTdTMEZEVmp0SFFVTkdPMEZCUTBRc1UwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVU5ZT3p0QlFVVk5MRk5CUVZNc1owSkJRV2RDTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTNaRExFMUJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RlFVRkZPenRCUVVVNVFpeFJRVUZKTEUxQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRek5DTEdGQlFVOHNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wdEJRM2hDTEUxQlFVMHNTVUZCU1N4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRM3BDTEdGQlFVOHNSVUZCUlN4RFFVRkRPMHRCUTFnc1RVRkJUU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyeENMR0ZCUVU4c1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dExRVU53UWpzN096czdRVUZMUkN4VlFVRk5MRWRCUVVjc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF6dEhRVU4wUWpzN1FVRkZSQ3hOUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRCUVVNeFFpeFhRVUZQTEUxQlFVMHNRMEZCUXp0SFFVTm1PMEZCUTBRc1UwRkJUeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenREUVVNM1F6czdRVUZGVFN4VFFVRlRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRE4wSXNUVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEzcENMRmRCUVU4c1NVRkJTU3hEUVVGRE8wZEJRMklzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0QlFVTXZReXhYUVVGUExFbEJRVWtzUTBGQlF6dEhRVU5pTEUxQlFVMDdRVUZEVEN4WFFVRlBMRXRCUVVzc1EwRkJRenRIUVVOa08wTkJRMFk3TzBGQlJVMHNVMEZCVXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRMnhETEUxQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETDBJc1QwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdRVUZEZGtJc1UwRkJUeXhMUVVGTExFTkJRVU03UTBGRFpEczdRVUZGVFN4VFFVRlRMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEzWkRMRkZCUVUwc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlEyeENMRk5CUVU4c1RVRkJUU3hEUVVGRE8wTkJRMlk3TzBGQlJVMHNVMEZCVXl4cFFrRkJhVUlzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RlFVRkZPMEZCUTJwRUxGTkJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVUVzUjBGQlNTeEZRVUZGTEVOQlFVTTdRMEZEY0VRaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCbGMyTmhjR1VnUFNCN1hHNGdJQ2NtSnpvZ0p5WmhiWEE3Snl4Y2JpQWdKenduT2lBbkpteDBPeWNzWEc0Z0lDYytKem9nSnlabmREc25MRnh1SUNBblhDSW5PaUFuSm5GMWIzUTdKeXhjYmlBZ1hDSW5YQ0k2SUNjbUkzZ3lOenNuTEZ4dUlDQW5ZQ2M2SUNjbUkzZzJNRHNuTEZ4dUlDQW5QU2M2SUNjbUkzZ3pSRHNuWEc1OU8xeHVYRzVqYjI1emRDQmlZV1JEYUdGeWN5QTlJQzliSmp3K1hDSW5ZRDFkTDJjc1hHNGdJSEJ2YzNOcFlteGxJRDBnTDFzbVBENWNJaWRnUFYwdk8xeHVYRzVtZFc1amRHbHZiaUJsYzJOaGNHVkRhR0Z5S0dOb2Npa2dlMXh1SUNCeVpYUjFjbTRnWlhOallYQmxXMk5vY2wwN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJsZUhSbGJtUW9iMkpxSUM4cUlDd2dMaTR1YzI5MWNtTmxJQ292S1NCN1hHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdGeVozVnRaVzUwYzF0cFhTa2dlMXh1SUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNoaGNtZDFiV1Z1ZEhOYmFWMHNJR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdiMkpxVzJ0bGVWMGdQU0JoY21kMWJXVnVkSE5iYVYxYmEyVjVYVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdiMkpxTzF4dWZWeHVYRzVsZUhCdmNuUWdiR1YwSUhSdlUzUnlhVzVuSUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnp0Y2JseHVMeThnVTI5MWNtTmxaQ0JtY205dElHeHZaR0Z6YUZ4dUx5OGdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkpsYzNScFpXcHpMMnh2WkdGemFDOWliRzlpTDIxaGMzUmxjaTlNU1VORlRsTkZMblI0ZEZ4dUx5b2daWE5zYVc1MExXUnBjMkZpYkdVZ1puVnVZeTF6ZEhsc1pTQXFMMXh1YkdWMElHbHpSblZ1WTNScGIyNGdQU0JtZFc1amRHbHZiaWgyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuWm5WdVkzUnBiMjRuTzF4dWZUdGNiaTh2SUdaaGJHeGlZV05ySUdadmNpQnZiR1JsY2lCMlpYSnphVzl1Y3lCdlppQkRhSEp2YldVZ1lXNWtJRk5oWm1GeWFWeHVMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNibWxtSUNocGMwWjFibU4wYVc5dUtDOTRMeWtwSUh0Y2JpQWdhWE5HZFc1amRHbHZiaUE5SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KbHh1SUNBZ0lDQWdkRzlUZEhKcGJtY3VZMkZzYkNoMllXeDFaU2tnUFQwOUlDZGJiMkpxWldOMElFWjFibU4wYVc5dVhTZGNiaUFnSUNBcE8xeHVJQ0I5TzF4dWZWeHVaWGh3YjNKMElIc2dhWE5HZFc1amRHbHZiaUI5TzF4dUx5b2daWE5zYVc1MExXVnVZV0pzWlNCbWRXNWpMWE4wZVd4bElDb3ZYRzVjYmk4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5CY25KaGVTQTlYRzRnSUVGeWNtRjVMbWx6UVhKeVlYa2dmSHhjYmlBZ1puVnVZM1JwYjI0b2RtRnNkV1VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkbUZzZFdVZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEoxeHVJQ0FnSUNBZ1B5QjBiMU4wY21sdVp5NWpZV3hzS0haaGJIVmxLU0E5UFQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxkSjF4dUlDQWdJQ0FnT2lCbVlXeHpaVHRjYmlBZ2ZUdGNibHh1THk4Z1QyeGtaWElnU1VVZ2RtVnljMmx2Ym5NZ1pHOGdibTkwSUdScGNtVmpkR3g1SUhOMWNIQnZjblFnYVc1a1pYaFBaaUJ6YnlCM1pTQnRkWE4wSUdsdGNHeGxiV1Z1ZENCdmRYSWdiM2R1TENCellXUnNlUzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJwYm1SbGVFOW1LR0Z5Y21GNUxDQjJZV3gxWlNrZ2UxeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Dd2diR1Z1SUQwZ1lYSnlZWGt1YkdWdVozUm9PeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNiaUFnSUNCcFppQW9ZWEp5WVhsYmFWMGdQVDA5SUhaaGJIVmxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdhVHRjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlDMHhPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pYTmpZWEJsUlhod2NtVnpjMmx2YmloemRISnBibWNwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ6ZEhKcGJtY2dJVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnTHk4Z1pHOXVKM1FnWlhOallYQmxJRk5oWm1WVGRISnBibWR6TENCemFXNWpaU0IwYUdWNUozSmxJR0ZzY21WaFpIa2djMkZtWlZ4dUlDQWdJR2xtSUNoemRISnBibWNnSmlZZ2MzUnlhVzVuTG5SdlNGUk5UQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSE4wY21sdVp5NTBiMGhVVFV3b0tUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tITjBjbWx1WnlBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnSnljN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGMzUnlhVzVuS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYzNSeWFXNW5JQ3NnSnljN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1JtOXlZMlVnWVNCemRISnBibWNnWTI5dWRtVnljMmx2YmlCaGN5QjBhR2x6SUhkcGJHd2dZbVVnWkc5dVpTQmllU0IwYUdVZ1lYQndaVzVrSUhKbFoyRnlaR3hsYzNNZ1lXNWtYRzRnSUNBZ0x5OGdkR2hsSUhKbFoyVjRJSFJsYzNRZ2QybHNiQ0JrYnlCMGFHbHpJSFJ5WVc1emNHRnlaVzUwYkhrZ1ltVm9hVzVrSUhSb1pTQnpZMlZ1WlhNc0lHTmhkWE5wYm1jZ2FYTnpkV1Z6SUdsbVhHNGdJQ0FnTHk4Z1lXNGdiMkpxWldOMEozTWdkRzhnYzNSeWFXNW5JR2hoY3lCbGMyTmhjR1ZrSUdOb1lYSmhZM1JsY25NZ2FXNGdhWFF1WEc0Z0lDQWdjM1J5YVc1bklEMGdKeWNnS3lCemRISnBibWM3WEc0Z0lIMWNibHh1SUNCcFppQW9JWEJ2YzNOcFlteGxMblJsYzNRb2MzUnlhVzVuS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6ZEhKcGJtYzdYRzRnSUgxY2JpQWdjbVYwZFhKdUlITjBjbWx1Wnk1eVpYQnNZV05sS0dKaFpFTm9ZWEp6TENCbGMyTmhjR1ZEYUdGeUtUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdselJXMXdkSGtvZG1Gc2RXVXBJSHRjYmlBZ2FXWWdLQ0YyWVd4MVpTQW1KaUIyWVd4MVpTQWhQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0dselFYSnlZWGtvZG1Gc2RXVXBJQ1ltSUhaaGJIVmxMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWTNKbFlYUmxSbkpoYldVb2IySnFaV04wS1NCN1hHNGdJR3hsZENCbWNtRnRaU0E5SUdWNGRHVnVaQ2g3ZlN3Z2IySnFaV04wS1R0Y2JpQWdabkpoYldVdVgzQmhjbVZ1ZENBOUlHOWlhbVZqZER0Y2JpQWdjbVYwZFhKdUlHWnlZVzFsTzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZbXh2WTJ0UVlYSmhiWE1vY0dGeVlXMXpMQ0JwWkhNcElIdGNiaUFnY0dGeVlXMXpMbkJoZEdnZ1BTQnBaSE03WEc0Z0lISmxkSFZ5YmlCd1lYSmhiWE03WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmhjSEJsYm1SRGIyNTBaWGgwVUdGMGFDaGpiMjUwWlhoMFVHRjBhQ3dnYVdRcElIdGNiaUFnY21WMGRYSnVJQ2hqYjI1MFpYaDBVR0YwYUNBL0lHTnZiblJsZUhSUVlYUm9JQ3NnSnk0bklEb2dKeWNwSUNzZ2FXUTdYRzU5WEc0aVhYMD1cbiIsIi8vIENyZWF0ZSBhIHNpbXBsZSBwYXRoIGFsaWFzIHRvIGFsbG93IGJyb3dzZXJpZnkgdG8gcmVzb2x2ZVxuLy8gdGhlIHJ1bnRpbWUgb24gYSBzdXBwb3J0ZWQgcGF0aC5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUnKVsnZGVmYXVsdCddO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgUkVRVUVTVF9NRVRIT0RTLCBjb25maWcsIGN1c3RvbUZhaWx1cmVzIH0gZnJvbSAnLi4vQ29uZmlnL0NvbmZpZyc7XG5jbGFzcyBBamF4IHtcbiAgICBjc3JmVG9rZW47XG4gICAgYXN5bmMgYWpheChwYXJhbXMsIGJvZHkpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHBhcmFtcy5oZWFkZXJzKTtcbiAgICAgICAgaWYgKHBhcmFtcy51cmwgPT09IGNvbmZpZy5hcGkuc2lnbkluLnVybCB8fCBwYXJhbXMudXJsID09PSBjb25maWcuYXBpLnNpZ25VcC51cmwpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMubWV0aG9kICE9PSBSRVFVRVNUX01FVEhPRFMuR0VUKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmdldENzcmZUb2tlbkZyb21TZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NTUkYtVG9rZW4nLCB0aGlzLmNzcmZUb2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuaG9zdH0ke3BhcmFtcy51cmx9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlQm9keTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlQm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVN0YXR1cyA9IHJlc3BvbnNlQm9keS5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZUJvZHkubWVzc2FnZSA9IGN1c3RvbUZhaWx1cmVzW2N1c3RvbVN0YXR1c107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXNwb25zZUJvZHkgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICByZXNwb25zZUJvZHlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHNldENzcmZUb2tlbihjc3JmVG9rZW4pIHtcbiAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBnZXRDc3JmVG9rZW5Gcm9tU2VydmVyKCkge1xuICAgICAgICBjb25zdCBjc3JmUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuaG9zdH0ke2NvbmZpZy5hcGkuY3NyZi51cmx9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBjb25maWcuYXBpLmNzcmYubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoY29uZmlnLmFwaS5jc3JmLmhlYWRlcnMpLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNzcmZUb2tlbiA9IGF3YWl0IGNzcmZSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHRoaXMuc2V0Q3NyZlRva2VuKGNzcmZUb2tlbi5ib2R5Wydjc3JmLXRva2VuJ10pO1xuICAgICAgICByZXR1cm4gY3NyZlRva2VuO1xuICAgIH1cbiAgICBhc3luYyBjaGVja1Jlc3BvbnNlU3RhdHVzKHJlc3BvbnNlLCBjb25mKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMudG9TdHJpbmcoKSBpbiBjb25mLnN0YXR1c2VzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzLnRvU3RyaW5nKCkgaW4gY29uZi5zdGF0dXNlcy5mYWlsdXJlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlTdGF0dXMgPSByZXNwb25zZS5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChrZXlTdGF0dXMgPT09ICc0MDAnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tU3RhdHVzID0gcmVzcG9uc2UucmVzcG9uc2VCb2R5LnN0YXR1cy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIG1zZzogY3VzdG9tRmFpbHVyZXNbY3VzdG9tU3RhdHVzXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgbXNnOiBjb25maWcuYXBpLnNpZ25pbi5zdGF0dXNlcy5mYWlsdXJlW2tleVN0YXR1c10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgbXNnOiAn0J3QtdC+0LbQuNC00LDQvdC90LDRjyDQvtGI0LjQsdC60LAnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgbmV3IEFqYXgoKTtcbiIsImltcG9ydCAnLi9BcHAuY3NzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50cy9CYXNlQ29tcG9uZW50L0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlclZpZXcgZnJvbSAnLi9WaWV3cy9IZWFkZXJWaWV3L0hlYWRlclZpZXcnO1xuaW1wb3J0IEhlYWRlckNvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVycy9IZWFkZXJDb250cm9sbGVyL0hlYWRlckNvbnRyb2xsZXInO1xuaW1wb3J0IE1vZGFsUmlnaHRWaWV3IGZyb20gJy4vVmlld3MvTW9kYWxSaWdodFZpZXcvTW9kYWxSaWdodFZpZXcnO1xuaW1wb3J0IE1vZGFsUmlnaHRDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcnMvTW9kYWxSaWdodENvbnRyb2xsZXIvTW9kYWxSaWdodENvbnRyb2xsZXInO1xuaW1wb3J0IEZpbG1WaWV3IGZyb20gJy4vVmlld3MvRmlsbVZpZXcvRmlsbVZpZXcnO1xuaW1wb3J0IEZpbG1Db250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcnMvRmlsbUNvbnRyb2xsZXIvRmlsbUNvbnRyb2xsZXInO1xuaW1wb3J0IFNldHRpbmdzVmlldyBmcm9tICcuL1ZpZXdzL1NldHRpbmdzVmlldy9TZXR0aW5nc1ZpZXcnO1xuaW1wb3J0IFNldHRpbmdzQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXJzL1NldHRpbmdzQ29udHJvbGxlci9TZXR0aW5nc0NvbnRyb2xsZXInO1xuaW1wb3J0IFBlcnNvblZpZXcgZnJvbSAnLi9WaWV3cy9QZXJzb25WaWV3L1BlcnNvblZpZXcnO1xuaW1wb3J0IFBlcnNvbkNvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVycy9QZXJzb25Db250cm9sbGVyL1BlcnNvbkNvbnRyb2xsZXInO1xuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4vVmlld3MvTWFpblZpZXcvTWFpblZpZXcnO1xuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcnMvTWFpbkNvbnRyb2xsZXIvTWFpbkNvbnRyb2xsZXInO1xuaW1wb3J0IE5vdEZvdW5kVmlldyBmcm9tICcuL1ZpZXdzL05vdEZvdW5kVmlldy9Ob3RGb3VuZFZpZXcnO1xuaW1wb3J0IE5vdEZvdW5kQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXJzL05vdEZvdW5kQ29udHJvbGxlci9Ob3RGb3VuZENvbnRyb2xsZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuL01vZGVscy9Vc2VyTW9kZWwvVXNlck1vZGVsJztcbmltcG9ydCBGaWxtTW9kZWwgZnJvbSAnLi9Nb2RlbHMvRmlsbU1vZGVsL0ZpbG1Nb2RlbCc7XG5pbXBvcnQgUGVyc29uTW9kZWwgZnJvbSAnLi9Nb2RlbHMvUGVyc29uTW9kZWwvUGVyc29uTW9kZWwnO1xuaW1wb3J0IFNlbGVjdGlvbk1vZGVsIGZyb20gXCIuL01vZGVscy9TZWxlY3Rpb25Nb2RlbC9TZWxlY3Rpb25Nb2RlbFwiO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL1JvdXRlci9Sb3V0ZXInO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4vUm91dGVyL1JvdXRlclBhdGhzJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi9FdmVudERpc3BhdGNoZXIvRXZlbnREaXNwYXRjaGVyJztcbmNsYXNzIEFwcCB7XG4gICAgLy8gVmlld3NcbiAgICBoZWFkZXJWaWV3O1xuICAgIG1vZGFsUmlnaHRWaWV3O1xuICAgIGZpbG1WaWV3O1xuICAgIHNldHRpbmdzVmlldztcbiAgICBwZXJzb25WaWV3O1xuICAgIG1haW5WaWV3O1xuICAgIG5vdEZvdW5kVmlldztcbiAgICAvLyBDb250cm9sbGVyc1xuICAgIGhlYWRlckNvbnRyb2xsZXI7XG4gICAgbW9kYWxSaWdodENvbnRyb2xsZXI7XG4gICAgZmlsbUNvbnRyb2xsZXI7XG4gICAgc2V0dGluZ3NDb250cm9sbGVyO1xuICAgIHBlcnNvbkNvbnRyb2xsZXI7XG4gICAgbWFpbkNvbnRyb2xsZXI7XG4gICAgbm90Rm91bmRDb250cm9sbGVyO1xuICAgIC8vIE1vZGVsc1xuICAgIHVzZXJNb2RlbDtcbiAgICBmaWxtTW9kZWw7XG4gICAgcGVyc29uTW9kZWw7XG4gICAgc2VsZWN0aW9uTW9kZWw7XG4gICAgLy8gRWxlbWVudHNcbiAgICByb290O1xuICAgIGhlYWRlcjtcbiAgICBmb290ZXI7XG4gICAgY29udGVudDtcbiAgICBtb2RhbFJpZ2h0O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRQYWdlKCk7XG4gICAgICAgIHRoaXMuaW5pdFZpZXdzKCk7XG4gICAgICAgIHRoaXMuaW5pdE1vZGVscygpO1xuICAgICAgICB0aGlzLmluaXRDb250cm9sbGVycygpO1xuICAgICAgICB0aGlzLmluaXRSb3V0ZXMoKTtcbiAgICB9XG4gICAgcnVuKHVybCkge1xuICAgICAgICByb3V0ZXIuc3RhcnQodXJsKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiDQsdCw0LfQvtCy0YPRjiDQstGR0YDRgdGC0LrRgyDRgdGC0YDQsNC90LjRhtGLXG4gICAgICogKNC/0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0UGFnZSgpIHtcbiAgICAgICAgY29uc3QgYmFzZUNvbXBvbmVudCA9IG5ldyBCYXNlQ29tcG9uZW50KGRvY3VtZW50LmJvZHkpO1xuICAgICAgICBiYXNlQ29tcG9uZW50LnNob3coKTtcbiAgICAgICAgdGhpcy5yb290ID0gYmFzZUNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuanMtcm9vdCcpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGJhc2VDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmZvb3RlciA9IGJhc2VDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBiYXNlQ29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMubW9kYWxSaWdodCA9IGJhc2VDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsLS1yaWdodCcpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiDQstGB0LUg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyAodmlld3MpXG4gICAgICogKNC/0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0Vmlld3MoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyVmlldyA9IG5ldyBIZWFkZXJWaWV3KHRoaXMuaGVhZGVyKTtcbiAgICAgICAgdGhpcy5tb2RhbFJpZ2h0VmlldyA9IG5ldyBNb2RhbFJpZ2h0Vmlldyh0aGlzLm1vZGFsUmlnaHQpO1xuICAgICAgICB0aGlzLmZpbG1WaWV3ID0gbmV3IEZpbG1WaWV3KHRoaXMuY29udGVudCk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NWaWV3ID0gbmV3IFNldHRpbmdzVmlldyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLnBlcnNvblZpZXcgPSBuZXcgUGVyc29uVmlldyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLm1haW5WaWV3ID0gbmV3IE1haW5WaWV3KHRoaXMuY29udGVudCk7XG4gICAgICAgIHRoaXMubm90Rm91bmRWaWV3ID0gbmV3IE5vdEZvdW5kVmlldyh0aGlzLmNvbnRlbnQpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgiDQstGB0LUg0LzQvtC10LTQtdC70LggKG1vZGVscylcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRNb2RlbHMoKSB7XG4gICAgICAgIHRoaXMudXNlck1vZGVsID0gbmV3IFVzZXJNb2RlbCgpO1xuICAgICAgICB0aGlzLmZpbG1Nb2RlbCA9IG5ldyBGaWxtTW9kZWwoKTtcbiAgICAgICAgdGhpcy5wZXJzb25Nb2RlbCA9IG5ldyBQZXJzb25Nb2RlbCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsID0gbmV3IFNlbGVjdGlvbk1vZGVsKCk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINCy0YHQtSDQvtGC0L7QsdGA0LDQttC10L3QuNGPICh2aWV3cylcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGluaXRDb250cm9sbGVycygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyID0gbmV3IEhlYWRlckNvbnRyb2xsZXIodGhpcy5oZWFkZXJWaWV3KTtcbiAgICAgICAgdGhpcy5tb2RhbFJpZ2h0Q29udHJvbGxlciA9IG5ldyBNb2RhbFJpZ2h0Q29udHJvbGxlcih0aGlzLm1vZGFsUmlnaHRWaWV3LCB0aGlzLnVzZXJNb2RlbCk7XG4gICAgICAgIHRoaXMuZmlsbUNvbnRyb2xsZXIgPSBuZXcgRmlsbUNvbnRyb2xsZXIodGhpcy5maWxtVmlldywgdGhpcy5maWxtTW9kZWwpO1xuICAgICAgICB0aGlzLnNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5zZXR0aW5nc1ZpZXcsIHRoaXMudXNlck1vZGVsKTtcbiAgICAgICAgdGhpcy5wZXJzb25Db250cm9sbGVyID0gbmV3IFBlcnNvbkNvbnRyb2xsZXIodGhpcy5wZXJzb25WaWV3LCB0aGlzLnBlcnNvbk1vZGVsKTtcbiAgICAgICAgdGhpcy5tYWluQ29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcih0aGlzLm1haW5WaWV3LCB7IHNlbGVjdGlvbnM6IHRoaXMuc2VsZWN0aW9uTW9kZWwgfSk7XG4gICAgICAgIHRoaXMubm90Rm91bmRDb250cm9sbGVyID0gbmV3IE5vdEZvdW5kQ29udHJvbGxlcih0aGlzLm5vdEZvdW5kVmlldyk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQt9Cw0LTQsNGR0YIg0YHQstGP0LfQuCDQvNC10LbQtNGDINGB0YLRgNCw0L3QuNGG0LDQvNC4IChVUkwgLT4g0L7QsdGA0LDQsdC+0YLRh9C40LopXG4gICAgICogKNC/0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0Um91dGVzKCkge1xuICAgICAgICByb3V0ZXIuc2V0VW5rbm93blBhZ2VIYW5kbGVyKHRoaXMuaGFuZGxlUmVkaXJlY3RUb05vdEZvdW5kLmJpbmQodGhpcykpO1xuICAgICAgICBjb25zdCByb3V0ZXMgPSBbXG4gICAgICAgICAgICB7IHBhdGg6IHBhdGhzLm1haW4sIGhhbmRsZXI6IHRoaXMuaGFuZGxlUmVkaXJlY3RUb01haW4gfSxcbiAgICAgICAgICAgIHsgcGF0aDogcGF0aHMuY2F0YWxvZywgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvQ2F0YWxvZyB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5zdG9yZSwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvU3RvcmUgfSxcbiAgICAgICAgICAgIHsgcGF0aDogcGF0aHMubXlNb3ZpZSwgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvTXlNb3ZpZSB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5zaWduSW4sIGhhbmRsZXI6IHRoaXMuaGFuZGxlUmVkaXJlY3RUb1NpZ25JbiB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5zaWduVXAsIGhhbmRsZXI6IHRoaXMuaGFuZGxlUmVkaXJlY3RUb1NpZ25VcCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5sb2dvdXQsIGhhbmRsZXI6IHRoaXMuaGFuZGxlUmVkaXJlY3RUb0xvZ291dCB9LFxuICAgICAgICAgICAgeyBwYXRoOiBwYXRocy5zZXR0aW5ncywgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvU2V0dGluZ3MgfSxcbiAgICAgICAgICAgIHsgcGF0aDogcGF0aHMuZmlsbXMsIGhhbmRsZXI6IHRoaXMuaGFuZGxlUmVkaXJlY3RUb0ZpbG0gfSxcbiAgICAgICAgICAgIHsgcGF0aDogcGF0aHMucGVyc29ucywgaGFuZGxlcjogdGhpcy5oYW5kbGVSZWRpcmVjdFRvUGVyc29uIH0sXG4gICAgICAgIF07XG4gICAgICAgIHJvdXRlcy5mb3JFYWNoKCh7IHBhdGgsIGhhbmRsZXIgfSkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmFkZFJ1bGUocGF0aCwgaGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvTWFpbigpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1vdW50XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLm1haW5Db250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIC8vIHN0YXRlc1xuICAgICAgICB0aGlzLmhlYWRlclZpZXcuY2hhbmdlQWN0aXZlSGVhZGVyTGlzdEl0ZW0oJy8nKTtcbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZVJlZGlyZWN0VG9TaWduSW4oKSB7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKHJvdXRlci5nZXROZWFyZXN0Tm90QXV0aFVybCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgnbW9kYWxSaWdodC1zZXRTaWduSW4nLCB0aGlzLnVzZXJNb2RlbCk7XG4gICAgICAgICAgICB0aGlzLm1vZGFsUmlnaHRDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlUmVkaXJlY3RUb1NpZ25VcCgpIHtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocm91dGVyLmdldE5lYXJlc3ROb3RBdXRoVXJsKCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdtb2RhbFJpZ2h0LXNldFNpZ25VcCcsIHRoaXMudXNlck1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMubW9kYWxSaWdodENvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvQ2F0YWxvZygpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VubW91bnQtYWxsJyk7XG4gICAgICAgIHRoaXMudXNlck1vZGVsLmF1dGhVc2VyQnlDb29raWUoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1wcm9maWxlQnV0dG9uJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlbmRlci1zaWduSW5CdXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1vdW50XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgdGhpcy5oZWFkZXJWaWV3LmNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKCcvY2F0YWxvZycpO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlUmVkaXJlY3RUb1N0b3JlKCkge1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndW5tb3VudC1hbGwnKTtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwuYXV0aFVzZXJCeUNvb2tpZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXByb2ZpbGVCdXR0b24nKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXNpZ25JbkJ1dHRvbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gbW91bnRcbiAgICAgICAgdGhpcy5oZWFkZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgIC8vIHN0YXRlc1xuICAgICAgICB0aGlzLmhlYWRlclZpZXcuY2hhbmdlQWN0aXZlSGVhZGVyTGlzdEl0ZW0oJy9zdG9yZScpO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlUmVkaXJlY3RUb015TW92aWUoKSB7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1bm1vdW50LWFsbCcpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItcHJvZmlsZUJ1dHRvbicpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtb3VudFxuICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgLy8gc3RhdGVzXG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnL215LW1vdmllJyk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvU2V0dGluZ3MoKSB7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1bm1vdW50LWFsbCcpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIG1vdW50XG4gICAgICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAvLyBzdGF0ZXNcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnIycpO1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1ZpZXcuY2hhbmdlQWN0aXZlTGVmdE1lbnVJdGVtKHBhdGhzLnNldHRpbmdzKTtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLnVzZXJNb2RlbC5nZXRDdXJyZW50VXNlcigpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgncmVuZGVyLXNpZ25JbkJ1dHRvbicpO1xuICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKHJvdXRlci5nZXROZWFyZXN0Tm90QXV0aFVybCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvRmlsbShkYXRhKSB7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1bm1vdW50LWFsbCcpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItcHJvZmlsZUJ1dHRvbicpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbMF0pIHtcbiAgICAgICAgICAgIHJvdXRlci5zaG93VW5rbm93blBhZ2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxtSWQgPSBkYXRhWzBdO1xuICAgICAgICAvLyBtb3VudFxuICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ25ldy1wbGF5ZXInKTtcbiAgICAgICAgdGhpcy5maWxtQ29udHJvbGxlci5tb3VudENvbXBvbmVudCh7IGlkOiBmaWxtSWQudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgLy8gc3RhdGVzXG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnIycpO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlUmVkaXJlY3RUb1BlcnNvbihkYXRhKSB7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1bm1vdW50LWFsbCcpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItcHJvZmlsZUJ1dHRvbicpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGFbMF0pIHtcbiAgICAgICAgICAgIHJvdXRlci5zaG93VW5rbm93blBhZ2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwZXJzb25JZCA9IGRhdGFbMF07XG4gICAgICAgIC8vIG1vdW50XG4gICAgICAgIHRoaXMuaGVhZGVyQ29udHJvbGxlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLnBlcnNvbkNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoeyBpZDogcGVyc29uSWQudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgLy8gc3RhdGVzXG4gICAgICAgIHRoaXMuaGVhZGVyVmlldy5jaGFuZ2VBY3RpdmVIZWFkZXJMaXN0SXRlbSgnIycpO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlUmVkaXJlY3RUb0xvZ291dCgpIHtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3JlZGlyZWN0JywgcGF0aHMubG9nb3V0KTtcbiAgICAgICAgdGhpcy51c2VyTW9kZWwubG9nb3V0VXNlcigpO1xuICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocGF0aHMubWFpbik7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVSZWRpcmVjdFRvTm90Rm91bmQoKSB7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1bm1vdW50LWFsbCcpO1xuICAgICAgICB0aGlzLnVzZXJNb2RlbC5hdXRoVXNlckJ5Q29va2llKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItcHJvZmlsZUJ1dHRvbicpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdyZW5kZXItc2lnbkluQnV0dG9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhlYWRlckNvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5ub3RGb3VuZENvbnRyb2xsZXIubW91bnRDb21wb25lbnQoKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBCYXJDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0JhckNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0JhckNvbXBvbmVudC5jc3MnO1xuaW1wb3J0IERpdkNvbXBvbmVudCBmcm9tICcuLi9EaXZDb21wb25lbnQvRGl2Q29tcG9uZW50Jztcbi8vIFRPRE9cbi8vIHR5cGUgRXZlbnRUdXBsZSA9IFtzdHJpbmcsIChlOiBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4gdm9pZF07XG5jbGFzcyBCYXJDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBpc0RyYWdnaW5nO1xuICAgIGZ1bGxCYXI7XG4gICAgbG9hZEJhcjtcbiAgICBsb2FkUHJvZ3Jlc3NCYXI7XG4gICAgY3VycmVudEJhcjtcbiAgICBiYXJIZWxwZXI7XG4gICAgY3VycmVudEJhckNpcmNsZTtcbiAgICAvLyBwcml2YXRlIG1heFZhbHVlOiBudW1iZXI7XG4gICAgLy8gcHJpdmF0ZSBwb3N0c2NyaXB0OiBzdHJpbmc7XG4gICAgLy8gVE9ET1xuICAgIC8vIHByaXZhdGUgZXZlbnRUdXBsZXM6IEV2ZW50VHVwbGVbXSA9IFtcbiAgICAvLyAgICAgW1wibW91c2Vkb3duXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7IHRoaXMub25Nb3VzZURvd24oZSk7IH1dLFxuICAgIC8vICAgICAvLyBbXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpXSxcbiAgICAvLyAgICAgLy8gW1wibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpXSxcbiAgICAvLyAgICAgLy8gW1widG91Y2hzdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpXSxcbiAgICAvLyAgICAgLy8gW1widG91Y2htb3ZlXCIsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKV0sXG4gICAgLy8gICAgIC8vIFtcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpXSxcbiAgICAvLyBdO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgQmFyQ29tcG9uZW50VGVtcGxhdGUoeyBiYXJDbGFzczogZGF0YS5iYXJDbGFzcyB9KSwgJy5qcy1iYXInKTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMubWF4VmFsdWUgPSAyLjM3O1xuICAgICAgICAvLyB0aGlzLnBvc3RzY3JpcHQgPSAnJztcbiAgICAgICAgdGhpcy5mdWxsQmFyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXJfX2Z1bGwnKTtcbiAgICAgICAgdGhpcy5sb2FkQmFyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXJfX2xvYWQnKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvZ3Jlc3NCYXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJhci1sb2FkX19wcm9ncmVzcycpO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJhcl9fY3VycmVudCcpO1xuICAgICAgICB0aGlzLmluaXRIaWRkZW5FbGVtZW50cygpO1xuICAgICAgICAvLyB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIDtcbiAgICBpbml0SGlkZGVuRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGJhckhlbHBlckRpdiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYmFyX19oZWxwZXInKTtcbiAgICAgICAgdGhpcy5iYXJIZWxwZXIgPSBuZXcgRGl2Q29tcG9uZW50KGJhckhlbHBlckRpdiwgJycsICcnLCB7IGNsYXNzOiAnYmFyX19oZWxwZXInIH0pO1xuICAgICAgICBjb25zdCBjdXJyZW50QmFyQ2lyY2xlRGl2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXJfX2N1cnJlbnQtY2lyY2xlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEJhckNpcmNsZSA9IG5ldyBEaXZDb21wb25lbnQoY3VycmVudEJhckNpcmNsZURpdiwgJycsICcnLCB7IGNsYXNzOiAnYmFyX19jdXJyZW50LWNpcmNsZScgfSk7XG4gICAgfVxuICAgIDtcbiAgICAvL1xuICAgIC8vIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NCYXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICAvLyAgICAgbGV0IHBlcmNlbnRhZ2U6IG51bWJlciA9IDA7XG4gICAgLy8gICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgIC8vICAgICAgICAgcGVyY2VudGFnZSA9IHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZShlLmNsaWVudFgpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgcGVyY2VudGFnZSA9IHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZSgoPFRvdWNoRXZlbnRXaXRoVGFyZ2V0PmUpLnRvdWNoZXNbMF0uY2xpZW50WCk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICB0aGlzLmN1cnJlbnRCYXIuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgIC8vICAgICAvLyB0aGlzLmN1cnJlbnRCYXJDaXJjbGUuZGl2LnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgIC8vIH07XG4gICAgLy9cbiAgICAvLyBwcml2YXRlIGNhbGN1bGF0ZVBlcmNlbnRhZ2UoY3Vyc29yWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyAgICAgY29uc3QgYmFyV2lkdGggPSB0aGlzLmZ1bGxCYXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gICAgIGNvbnN0IGNsaWNrT2Zmc2V0ID0gY3Vyc29yWCAtIHRoaXMuZnVsbEJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIC8vICAgICByZXR1cm4gKGNsaWNrT2Zmc2V0IC8gYmFyV2lkdGgpICogMTAwO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGUgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vICAgICAvLyB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgIC8vICAgICAvLyBjb25zdCBwZXJjZW50YWdlID0gdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlKGUuY2xpZW50WCk7XG4gICAgLy8gICAgIC8vXG4gICAgLy8gICAgIC8vIHRoaXMuY3VycmVudEJhckNpcmNsZS5kaXYuc3R5bGUubGVmdCA9IGAke3BlcmNlbnRhZ2V9JWA7XG4gICAgLy8gICAgIC8vIHRoaXMuY3VycmVudEJhci5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2V9JWA7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ29uTW91c2VEb3duJylcbiAgICAvLyAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcihlKTtcbiAgICAvLyB9O1xuICAgIC8vXG4gICAgLy8gcHJpdmF0ZSBvbk1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlTW92ZScpXG4gICAgLy8gICAgIGNvbnN0IGN1cnNvclggPSBlLmNsaWVudFg7XG4gICAgLy8gICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2UoY3Vyc29yWCk7XG4gICAgLy9cbiAgICAvLyAgICAgdGhpcy5iYXJIZWxwZXIuZGl2LnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50YWdlfSVgO1xuICAgIC8vICAgICB0aGlzLmJhckhlbHBlci5kaXYuaW5uZXJUZXh0ID0gKHBlcmNlbnRhZ2UgLyAxMDAgKiB0aGlzLm1heFZhbHVlKS50b0ZpeGVkKDIpOyAvLyBUT0RPIGNoYW5nZSB0cmFpbGVyIHRpbWVcbiAgICAvLyAgICAgdGhpcy5iYXJIZWxwZXIuc2hvdygpO1xuICAgIC8vXG4gICAgLy8gICAgIHRoaXMuY3VycmVudEJhckNpcmNsZS5zaG93KCk7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIC8vICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcihlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG4gICAgLy9cbiAgICAvLyBwcml2YXRlIG9uTW91c2VVcChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdvbk1vdXNlVXAnKVxuICAgIC8vICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAvLyB9O1xuICAgIC8vXG4gICAgLy8gcHJpdmF0ZSBvbk1vdXNlT3V0KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyAgICAgdGhpcy5iYXJIZWxwZXIuaGlkZSgpOyAvLyBUT0RPIGNoZWNrIGJlZm9yZSBoaWRlP1xuICAgIC8vICAgICAvLyB0aGlzLmN1cnJlbnRCYXJDaXJjbGUuaGlkZSgpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ29uVG91Y2hTdGFydCcpXG4gICAgLy8gICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgLy8gICAgIGNvbnN0IHRvdWNoRXZlbnRXaXRoVGFyZ2V0ID0gZSBhcyBUb3VjaEV2ZW50V2l0aFRhcmdldDtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0Jhcih0b3VjaEV2ZW50V2l0aFRhcmdldCk7XG4gICAgLy8gfTtcbiAgICAvL1xuICAgIC8vIHByaXZhdGUgb25Ub3VjaE1vdmUoZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnb25Ub3VjaE1vdmUnKVxuICAgIC8vICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgLy8gICAgICAgICBjb25zdCB0b3VjaEV2ZW50V2l0aFRhcmdldCA9IGUgYXMgVG91Y2hFdmVudFdpdGhUYXJnZXQ7XG4gICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKHRvdWNoRXZlbnRXaXRoVGFyZ2V0KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG4gICAgLy9cbiAgICAvLyBwcml2YXRlIG9uVG91Y2hFbmQoZTogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnb25Ub3VjaEVuZCcpXG4gICAgLy8gICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIC8vIH07XG4gICAgLy9cbiAgICAvLyBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4gdGhpcy5vbk1vdXNlRG93bihlKSk7XG4gICAgLy8gICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpKTtcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlKSA9PiB0aGlzLm9uTW91c2VVcChlKSk7XG4gICAgLy8gICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHRoaXMub25Nb3VzZU91dChlKSk7XG4gICAgLy8gICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4gdGhpcy5vblRvdWNoU3RhcnQoZSkpO1xuICAgIC8vICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4gdGhpcy5vblRvdWNoTW92ZShlKSk7XG4gICAgLy8gICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKGUpID0+IHRoaXMub25Ub3VjaEVuZChlKSk7XG4gICAgLy8gfTtcbiAgICAvL1xuICAgIC8vIHByaXZhdGUgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgLy8gICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB0aGlzLm9uTW91c2VEb3duKGUpKTtcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHRoaXMub25Nb3VzZU1vdmUoZSkpO1xuICAgIC8vICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHRoaXMub25Nb3VzZVVwKGUpKTtcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5vbk1vdXNlT3V0KGUpKTtcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB0aGlzLm9uVG91Y2hTdGFydChlKSk7XG4gICAgLy8gICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChlKSA9PiB0aGlzLm9uVG91Y2hNb3ZlKGUpKTtcbiAgICAvLyAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZSkgPT4gdGhpcy5vblRvdWNoRW5kKGUpKTtcbiAgICAvLyB9O1xuICAgIC8vICAgICBOZXcgTGlmZVxuICAgIGJpbmRNb3VzZU1vdmVFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEJhckNvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgQmFzZUNvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vQmFzZUNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0Jhc2VDb21wb25lbnQuY3NzJztcbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEJhc2VDb21wb25lbnRUZW1wbGF0ZShkYXRhKSwgJy5qcy1yb290Jyk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vQnV0dG9uQ29tcG9uZW50Lmhicyc7XG5pbXBvcnQgJy4vQnV0dG9uQ29tcG9uZW50LmNzcyc7XG5jbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBidXR0b25Qcm9wcyA9IHtcbiAgICAgICAgY29vcmRpbmF0ZVg6IHsgbmFtZTogJy0tY29vcmQteCcsIHZhbHVlOiAwIH0sXG4gICAgICAgIGNvb3JkaW5hdGVZOiB7IG5hbWU6ICctLWNvb3JkLXknLCB2YWx1ZTogMCB9LFxuICAgICAgICBzaXplU3F1YXJlOiB7IG5hbWU6ICctLXNpemUtc3F1YXJlJywgdmFsdWU6IDAgfSxcbiAgICAgICAgZGlhbWV0ZXJIaWdobGlnaHQ6IHsgbmFtZTogJy0tZGlhbWV0ZXItaGlnaGxpZ2h0JywgdmFsdWU6IDAgfSxcbiAgICB9O1xuICAgIGJ1dHRvbjtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEJ1dHRvbkNvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSB8fCB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2V0U2l6ZVNxdWFyZSgpO1xuICAgICAgICB0aGlzLnNldERpYW1ldGVySGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuYmluZE1vdXNlTW92ZUV2ZW50KHRoaXMub25Nb3VzZU1vdmVFdmVudCk7XG4gICAgfVxuICAgIDtcbiAgICBzZXRTaXplU3F1YXJlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbldpZHRoID0gdGhpcy5idXR0b24ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBidXR0b25IZWlnaHQgPSB0aGlzLmJ1dHRvbi5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblByb3BzWydzaXplU3F1YXJlJ10udmFsdWUgPSBNYXRoLnNxcnQoYnV0dG9uV2lkdGggKiBidXR0b25XaWR0aCArIGJ1dHRvbkhlaWdodCAqIGJ1dHRvbkhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLmJ1dHRvblByb3BzWydzaXplU3F1YXJlJ10ubmFtZSwgYCR7dGhpcy5idXR0b25Qcm9wc1snc2l6ZVNxdWFyZSddLnZhbHVlfXB4YCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICA7XG4gICAgc2V0RGlhbWV0ZXJIaWdobGlnaHQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uV2lkdGggPSB0aGlzLmJ1dHRvbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkhlaWdodCA9IHRoaXMuYnV0dG9uLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGRpYW1ldGVyID0gTWF0aC5zcXJ0KGJ1dHRvbldpZHRoICogYnV0dG9uV2lkdGggKyBidXR0b25IZWlnaHQgKiBidXR0b25IZWlnaHQpO1xuICAgICAgICAgICAgY29uc3QgbXVsdGlwbHlTcXJ0ID0gTWF0aC5zcXJ0KGJ1dHRvbldpZHRoICogYnV0dG9uSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJvcHNbJ2RpYW1ldGVySGlnaGxpZ2h0J10udmFsdWUgPSBkaWFtZXRlciArIG11bHRpcGx5U3FydDtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuYnV0dG9uUHJvcHNbJ2RpYW1ldGVySGlnaGxpZ2h0J10ubmFtZSwgYCR7dGhpcy5idXR0b25Qcm9wc1snZGlhbWV0ZXJIaWdobGlnaHQnXS52YWx1ZX1weGApO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG4gICAgYmxvY2soKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgO1xuICAgIHVuYmxvY2soKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgdW5iaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZE1vdXNlTW92ZUV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgdW5iaW5kTW91c2VNb3ZlRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBvbk1vdXNlTW92ZUV2ZW50KGUpIHtcbiAgICAgICAgY29uc3QgbW91c2VFdmVudCA9IGU7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVYJ10udmFsdWUgPSBtb3VzZUV2ZW50Lm9mZnNldFg7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVZJ10udmFsdWUgPSBtb3VzZUV2ZW50Lm9mZnNldFk7XG4gICAgICAgIHRoaXMuYnV0dG9uLnN0eWxlLnNldFByb3BlcnR5KHRoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVYJ10ubmFtZSwgYCR7dGhpcy5idXR0b25Qcm9wc1snY29vcmRpbmF0ZVgnXS52YWx1ZX1weGApO1xuICAgICAgICB0aGlzLmJ1dHRvbi5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLmJ1dHRvblByb3BzWydjb29yZGluYXRlWSddLm5hbWUsIGAke3RoaXMuYnV0dG9uUHJvcHNbJ2Nvb3JkaW5hdGVZJ10udmFsdWV9cHhgKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29tcG9uZW50O1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBEaXZDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL0RpdkNvbXBvbmVudC5oYnMnO1xuY2xhc3MgRGl2Q29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgZGl2O1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgRGl2Q29tcG9uZW50VGVtcGxhdGUoZGF0YSksICdkaXYnKTtcbiAgICAgICAgdGhpcy5kaXYgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykgfHwgdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBEaXZDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uQ29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0Ryb3Bkb3duQnV0dG9uQ29tcG9uZW50LmNzcyc7XG5pbXBvcnQgTGlua0NvbXBvbmVudCBmcm9tICcuLi9MaW5rQ29tcG9uZW50L0xpbmtDb21wb25lbnQnO1xuY2xhc3MgRHJvcGRvd25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBkcm9wZG93bkNvbnRlbnRJdGVtcztcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlID0gJycsIHRvcEVsZW1lbnQgPSAnJywgZGF0YSkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIERyb3Bkb3duQnV0dG9uQ29tcG9uZW50VGVtcGxhdGUoeyBkYXRhQWN0aW9uOiBkYXRhLmRhdGFBY3Rpb24sIGF2YXRhcjogZGF0YS5hdmF0YXIgfSksICcuanMtZHJvcGRvd24nKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkNvbnRlbnRJdGVtcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZHJvcGRvd24tY29udGVudC1jb250YWluZXJfX2l0ZW1zJyk7XG4gICAgICAgIGRhdGEuaXRlbXM/LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gbmV3IExpbmtDb21wb25lbnQodGhpcy5kcm9wZG93bkNvbnRlbnRJdGVtcywgJycsICcnLCBpdGVtKTtcbiAgICAgICAgICAgIGxpbmsuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgLy8gLyoqXG4gICAgLy8gICog0KTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDRgdC+0LHRi9GC0LjRjyDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L7QvNC/0L7QvdC10L3RglxuICAgIC8vICAqIEBwYXJhbSAge2FueX0gbGlzdGVuZXIgLSBDYWxsYmFjayDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvtCx0YvRgtC40Y9cbiAgICAvLyAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAvLyAgKi9cbiAgICAvLyBwdWJsaWMgYmluZENsaWNrRXZlbnQobGlzdGVuZXI6IGFueSk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAvLyB9O1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgLy8gdGhpcy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2NvbnRlbnQnKT8uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd25fX2NvbnRlbnRfX3Nob3cnKTtcbiAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBUT0RPOiBIb3cgdG8gY2hlY2sgaXQgSSBjbGlja2VkIHNvbWV3aGVyZSBub3QgdG8gdGhpcy4gQWRkIHRyYW5zcGFyZW50IGRpdiBhbmQgaGFuZGxlQ2xpY2sgb24gaXQ/XG4gICAgICAgIC8vIGlmICghKDxIVE1MRWxlbWVudD5lLnRhcmdldCkubWF0Y2hlcygnLmRyb3Bkb3duX19idXR0b24nKSkge1xuICAgICAgICAvLyAgICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duX19jb250ZW50Jyk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkcm9wZG93bkl0ZW1zKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGZvciAobGV0IGl0ZW0gb2YgZHJvcGRvd25JdGVtcykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd25fX2NvbnRlbnRfX3Nob3cnKSkge1xuICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19jb250ZW50X19zaG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQnV0dG9uQ29tcG9uZW50O1xuIiwiaW1wb3J0IElDb21wb25lbnQgZnJvbSAnLi4vSUNvbXBvbmVudC9JQ29tcG9uZW50JztcbmltcG9ydCBGb3JtQ29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9Gb3JtQ29tcG9uZW50Lmhicyc7XG5pbXBvcnQgJy4vRm9ybUNvbXBvbmVudC5jc3MnO1xuaW1wb3J0IElucHV0Q29tcG9uZW50IGZyb20gJy4uL0lucHV0Q29tcG9uZW50L0lucHV0Q29tcG9uZW50JztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi4vQnV0dG9uQ29tcG9uZW50L0J1dHRvbkNvbXBvbmVudCc7XG5pbXBvcnQgTGlua0NvbXBvbmVudCBmcm9tIFwiLi4vTGlua0NvbXBvbmVudC9MaW5rQ29tcG9uZW50XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0LCB2YWxpZGF0ZVBhc3N3b3JkcyB9IGZyb20gJy4uLy4uL1V0aWxzL1ZhbGlkYXRvcnMvVmFsaWRhdG9yJztcbmNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBpbnB1dHM7XG4gICAgc3VibWl0QnV0dG9uO1xuICAgIGxpbmtzO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbSA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgRm9ybUNvbXBvbmVudFRlbXBsYXRlKHsgZm9ybUlkOiBkYXRhPy5mb3JtSWQsIGVuY3R5cGU6IGRhdGE/LmVuY3R5cGUgfSksICcuanMtZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtQ29udGVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY29udGVudCcpO1xuICAgICAgICBjb25zdCBmb3JtRm9vdGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19mb290ZXInKTtcbiAgICAgICAgdGhpcy5pbnB1dHMgPSBbXTtcbiAgICAgICAgdGhpcy5saW5rcyA9IFtdO1xuICAgICAgICBkYXRhPy5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dENvbXBvbmVudCA9IG5ldyBJbnB1dENvbXBvbmVudChmb3JtQ29udGVudCwgJycsICcnLCBpbnB1dCk7XG4gICAgICAgICAgICBpbnB1dENvbXBvbmVudC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmlucHV0cy5wdXNoKGlucHV0Q29tcG9uZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gbmV3IEJ1dHRvbkNvbXBvbmVudChmb3JtQ29udGVudCwgJycsICcnLCBkYXRhPy5idXR0b24pO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5zaG93KCk7XG4gICAgICAgIGRhdGE/LmxpbmtzPy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBuZXcgTGlua0NvbXBvbmVudChmb3JtRm9vdGVyLCAnJywgJycsIGxpbmspO1xuICAgICAgICAgICAgbGlua0VsZW1lbnQuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKGxpbmtFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICAvLyBwdWJsaWMgZ2V0RGF0YSgpOiB7IGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaW5wdXRzLm1hcCgoaW5wdXRDb21wb25lbnQpID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBpbnB1dENvbXBvbmVudC5nZXREYXRhKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH07XG4gICAgdmFsaWRhdGVFbXB0eUZpZWxkcyhmaWVsZHMpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoZmllbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmlzRW1wdHlEYXRhKCkpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5zaG93RXJyb3JNc2coJ9Cf0YPRgdGC0L7QtSDQv9C+0LvQtScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkLmhpZGVFcnJvck1zZygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pLmV2ZXJ5KGlzVmFsaWQgPT4gaXNWYWxpZCk7XG4gICAgfVxuICAgIDtcbiAgICB2YWxpZGF0ZVBhc3N3b3JkRmllbGRzKCkge1xuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSB0aGlzLmZpbmRJbnB1dENvbXBvbmVudCgncGFzc3dvcmQnKTtcbiAgICAgICAgY29uc3QgcmVwZWF0UGFzc3dvcmRGaWVsZCA9IHRoaXMuZmluZElucHV0Q29tcG9uZW50KCdyZXBlYXQtcGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQpIHsgLy8gSWYgZXhpc3RzIHBhc3N3b3JkIGZpZWxkXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZWRQYXNzd29yZCA9IHZhbGlkYXRlSW5wdXQocGFzc3dvcmRGaWVsZC5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRQYXNzd29yZC5pc1ZhbGlkKSB7IC8vIElmIGRhdGEgaW4gcGFzc3dvcmQgZmllbGQgaXMgaW5jb3JyZWN0XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC5zaG93RXJyb3JNc2codmFsaWRhdGVkUGFzc3dvcmQuZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmllbGQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVwZWF0UGFzc3dvcmRGaWVsZCkgeyAvLyBJZiBleGlzdHMgcmVwZWF0IHBhc3N3b3JkIGZpZWxkXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkUGFzc3dvcmRzID0gdmFsaWRhdGVQYXNzd29yZHMocGFzc3dvcmRGaWVsZC5pbnB1dC52YWx1ZSwgcmVwZWF0UGFzc3dvcmRGaWVsZC5pbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRQYXNzd29yZHMuaXNWYWxpZCkgeyAvLyBJZiBwYXNzd29yZHMgbm90IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdFBhc3N3b3JkRmllbGQuc2hvd0Vycm9yTXNnKHZhbGlkYXRlZFBhc3N3b3Jkcy5wYXNzd29yZEVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0UGFzc3dvcmRGaWVsZC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVJbnB1dEZpZWxkcygpIHtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHRoaXMuaW5wdXRzLmZpbHRlcihpbnB1dENvbXBvbmVudCA9PiBpbnB1dENvbXBvbmVudC5pbnB1dC5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3Bhc3N3b3JkJykgPT09IC0xKTtcbiAgICAgICAgaWYgKGlucHV0RmllbGRzKSB7XG4gICAgICAgICAgICBpbnB1dEZpZWxkcy5mb3JFYWNoKGlucHV0RmllbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZElucHV0ID0gdmFsaWRhdGVJbnB1dChpbnB1dEZpZWxkLmdldERhdGEoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRJbnB1dC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmllbGQuc2hvd0Vycm9yTXNnKHZhbGlkYXRlZElucHV0LmVycm9yTXNnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdWJtaXRCdXR0b24uYmxvY2soKTsgLy8gVE9ETzogYmxvY2sgaGVyZSBvciBpbiBjb250cm9sbGVyP1xuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXRGaWVsZC5oaWRlRXJyb3JNc2coKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN1Ym1pdEJ1dHRvbi51bmJsb2NrKCk7IC8vIFRPRE86IHVuYmxvY2sgaGVyZSBvciBpbiBjb250cm9sbGVyPyBBbHNvIHRoaXMgYmxvY2sgbmVlZHMgaW4gdmFsaWRhdGVQYXNzd29yZEZpZWxkc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuICAgIDtcbiAgICB2YWxpZGF0ZVdpdGhFbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVJbnB1dEZpZWxkcygpICYmIHRoaXMudmFsaWRhdGVQYXNzd29yZEZpZWxkcygpO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVXaXRob3V0RW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUGFzc3dvcmRGaWVsZHMoKTtcbiAgICB9XG4gICAgO1xuICAgIHNldERhdGFUb0ZpZWxkcyhmaWVsZHNXaXRoVmFsdWUpIHtcbiAgICAgICAgZmllbGRzV2l0aFZhbHVlLmZvckVhY2goKHsgaWQsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmluZElucHV0Q29tcG9uZW50KGlkKS5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZElucHV0Q29tcG9uZW50KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0cy5maW5kKGlucHV0Q29tcG9uZW50ID0+IGlucHV0Q29tcG9uZW50LmlucHV0LmlkID09PSBpZCk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kSW5wdXRzRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGlucHV0Q29tcG9uZW50LmJpbmRJbnB1dEV2ZW50KGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kU3VibWl0RXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYmluZENsaWNrRXZlbnQobGlzdGVuZXIpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZExpbmtzRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5saW5rcy5mb3JFYWNoKChsaW5rQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBsaW5rQ29tcG9uZW50LmJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kRmlsZUNsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXRDb21wb25lbnQoJ2F2YXRhcicpLmJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRDaGVja2JveENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXRDb21wb25lbnQoJ2F2YXRhci1jaGVja2JveCcpLmJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKTtcbiAgICB9XG4gICAgO1xuICAgIHNhdmVEYXRhVG9TdG9yYWdlKGtleSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0Q29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBkYXRhW2lucHV0Q29tcG9uZW50LmlucHV0LmlkXSA9IGlucHV0Q29tcG9uZW50LmlucHV0LnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICAgIDtcbiAgICBnZXREYXRhRnJvbVN0b3JhZ2Uoa2V5KSB7XG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmIChzYXZlZERhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHNhdmVkRGF0YSk7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChbaWQsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluZElucHV0Q29tcG9uZW50KGlkKS5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbXBvbmVudDtcbiIsImNsYXNzIElDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqINCg0L7QtNC40YLQtdC70YzRgdC60LjQuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0LLQuNC00LBcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBwYXJlbnQ7XG4gICAgLyoqXG4gICAgICog0JrQvtGA0L3QtdCy0L7QuSDRjdC70LXQvNC10L3RgiDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0LLQuNC00LBcbiAgICAgKiBAbWVtYmVyXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBlbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUsIHRvcEVsZW1lbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGVtcGxhdGUsICd0ZXh0L2h0bWwnKS5xdWVyeVNlbGVjdG9yKHRvcEVsZW1lbnQpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCfQndC10LLQvtC30LzQvtC20L3QviDQvdCw0LnRgtC4INGN0LvQtdC80LXQvdGCINCyINGI0LDQsdC70L7QvdC1IScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIDtcbiAgICB0b0hUTUxFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICA7XG4gICAgcXVlcnlTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIH1cbiAgICA7XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgO1xuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IElDb21wb25lbnQ7XG4iLCJpbXBvcnQgSUNvbXBvbmVudCBmcm9tICcuLi9JQ29tcG9uZW50L0lDb21wb25lbnQnO1xuaW1wb3J0IElucHV0Q29tcG9uZW50VGVtcGxhdGUgZnJvbSAnLi9JbnB1dENvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0lucHV0Q29tcG9uZW50LmNzcyc7XG5jbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIElDb21wb25lbnQge1xuICAgIGlucHV0O1xuICAgIGlucHV0RXJyb3I7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBJbnB1dENvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLWlucHV0LWZpZWxkJyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSB8fCB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5wdXRFcnJvciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbY2xhc3MqPWVycm9yLW1zZ10nKTtcbiAgICB9XG4gICAgO1xuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB7IGlkOiB0aGlzLmlucHV0LmlkLCB2YWx1ZTogdGhpcy5pbnB1dC52YWx1ZSB9O1xuICAgIH1cbiAgICA7XG4gICAgaXNFbXB0eURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlID09PSAnJztcbiAgICB9XG4gICAgO1xuICAgIHNob3dFcnJvck1zZyhlcnJvck1zZykge1xuICAgICAgICB0aGlzLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWZpZWxkX19pbnB1dC0tZXJyb3InKTtcbiAgICAgICAgdGhpcy5pbnB1dEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xuICAgICAgICB0aGlzLmlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnaW5wdXQtZmllbGRfX2Vycm9yLW1zZy0tZXJyb3InKTtcbiAgICB9XG4gICAgO1xuICAgIGhpZGVFcnJvck1zZygpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1maWVsZF9faW5wdXQtLWVycm9yJyk7XG4gICAgICAgIHRoaXMuaW5wdXRFcnJvci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dEVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWZpZWxkX19lcnJvci1tc2ctLWVycm9yJyk7XG4gICAgfVxuICAgIGJpbmRJbnB1dEV2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy50b0hUTUxFbGVtZW50KCk7XG4gICAgICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgTGlua0NvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vTGlua0NvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0xpbmtDb21wb25lbnQuY3NzJztcbmNsYXNzIExpbmtDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBsaW5rO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgTGlua0NvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLWxpbmsnKTtcbiAgICAgICAgdGhpcy5saW5rID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSB8fCB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgTGlua0NvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgTGlzdENvbXBvbmVudFRlbXBsYXRlIGZyb20gJy4vTGlzdENvbXBvbmVudC5oYnMnO1xuaW1wb3J0ICcuL0xpc3RDb21wb25lbnQuY3NzJztcbmNsYXNzIExpc3RDb21wb25lbnQgZXh0ZW5kcyBJQ29tcG9uZW50IHtcbiAgICBpdGVtcztcbiAgICBnZXQgZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGVtcGxhdGUgPSAnJywgdG9wRWxlbWVudCA9ICcnLCBkYXRhKSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgTGlzdENvbXBvbmVudFRlbXBsYXRlKGRhdGEubGlzdENsYXNzKSwgJy5qcy1saXN0Jyk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBPYmplY3QuYXNzaWduKFtdLCBkYXRhLml0ZW1zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJJdGVtcyhkYXRhLml0ZW1DbGFzcyk7XG4gICAgfVxuICAgIDtcbiAgICByZW5kZXJJdGVtcyhpdGVtQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKCh7IGNvbXBvbmVudFR5cGUsIGNvbXBvbmVudERhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChpdGVtQ2xhc3MgfHwgJycpO1xuICAgICAgICAgICAgY29uc3QgbCA9IG5ldyBjb21wb25lbnRUeXBlKGxpLCAnJywgJycsIGNvbXBvbmVudERhdGEpO1xuICAgICAgICAgICAgbC5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgTGlzdENvbXBvbmVudDtcbiIsImltcG9ydCBJQ29tcG9uZW50IGZyb20gJy4uL0lDb21wb25lbnQvSUNvbXBvbmVudCc7XG5pbXBvcnQgVmVydGljYWxDb21wb25lbnRUZW1wbGF0ZSBmcm9tICcuL1ZlcnRpY2FsU3BhY2VyQ29tcG9uZW50Lmhicyc7XG5pbXBvcnQgJy4vVmVydGljYWxTcGFjZXJDb21wb25lbnQuY3NzJztcbmNsYXNzIFZlcnRpY2FsU3BhY2VyQ29tcG9uZW50IGV4dGVuZHMgSUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZW1wbGF0ZSA9ICcnLCB0b3BFbGVtZW50ID0gJycsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBWZXJ0aWNhbENvbXBvbmVudFRlbXBsYXRlKGRhdGEpLCAnLmpzLXZlcnRpY2FsLXNwYWNlcicpO1xuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudDtcbiIsImNvbnN0IFJFUVVFU1RfTUVUSE9EUyA9IHtcbiAgICBHRVQ6ICdHRVQnLFxuICAgIFBPU1Q6ICdQT1NUJyxcbiAgICBQVVQ6ICdQVVQnLFxuICAgIERFTEVURTogJ0RFTEVURScsXG59O1xuY29uc3QgQ3NyZlRva2VuTmFtZSA9ICdjc3JmX3Rva2VuJztcbmNvbnN0IGhlYWRlcnNXaXRoVW5pY29kZSA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG59O1xuY29uc3QgaGVhZGVyc1dpdGhFbXB0eSA9IHtcbiAgICAnQ29udGVudC1UeXBlJzogJycsXG59O1xuY29uc3QgZmFpbHVyZURlZmF1bHRTdGF0dXNlcyA9IHtcbiAgICAnNDAwJzogJ9Cd0LXQstC10YDQvdGL0Lkg0LfQsNC/0YDQvtGBJyxcbiAgICAvLyAnNDAxJzogJ05vIENvb2tpZScsXG4gICAgLy8gJzQwNSc6ICfQndC10LLQtdGA0L3Ri9C5IEhUVFAg0LzQtdGC0L7QtCcsXG4gICAgJzUwMCc6ICfQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAnLFxufTtcbmNvbnN0IGN1c3RvbUZhaWx1cmVzID0ge1xuICAgICcxJzogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDRg9C20LUg0YHRg9GJ0LXRgdGC0LLRg9C10YInLFxuICAgICcyJzogJ9Cd0LXQstC10YDQvdGL0Lkg0YTQvtGA0LzQsNGCINC/0L7Rh9GC0YsnLFxuICAgICczJzogJ9Cf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0LHRi9GC0YwuLi4nLFxuICAgICc0JzogJ9Cd0LXQstC10YDQvdCw0Y8g0L/QvtGH0YLQsCDQuNC70Lgg0L/QsNGA0L7Qu9GMJyxcbiAgICAnNSc6ICfQoNCw0LfQvNC10YAg0YTQsNC50LvQsCDQstGL0YjQtSDQvNCw0LrRgdC40LzQsNC70YzQvdC+INC00L7Qv9GD0YHRgtC40LzQvtCz0L4nLFxuICAgICc2JzogJ9Ck0LDQudC7INC90LUg0Y/QstC70Y/QtdGC0YHRjyDQutCw0YDRgtC40L3QutC+0Lkg0YTQvtGA0LzQsNGC0LAganBnJyxcbiAgICAnNyc6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEg0Y3RgtC+0Lkg0L/QvtGH0YLQvtC5INGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgicsXG59O1xuY29uc3QgY29uZmlnID0ge1xuICAgIC8vIGhvc3Q6ICdodHRwOi8vODkuMjA4LjE5OS4xNzAvJyxcbiAgICBob3N0OiAnaHR0cDovL2ZpbG1pdW0ucnUvYXBpJyxcbiAgICAvLyBob3N0OiAnaHR0cDovLzg5LjIwOC4xOTkuMTcwOjgxMDAvYXBpJyxcbiAgICBhcGk6IHtcbiAgICAgICAgY3NyZjoge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvY3NyZicsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5HRVQsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogZmFpbHVyZURlZmF1bHRTdGF0dXNlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNpZ25Jbjoge1xuICAgICAgICAgICAgdXJsOiAnL3VzZXIvc2lnbmluJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLlBPU1QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQkNCy0YLQvtGA0LjQt9Cw0YbQuNGPINGD0YHQv9C10YjQvdCwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzaWduVXA6IHtcbiAgICAgICAgICAgIHVybDogJy91c2VyL3NpZ251cCcsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5QT1NULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDRg9GB0L/QtdGI0L3QsCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9nb3V0OiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9sb2dvdXQnLFxuICAgICAgICAgICAgbWV0aG9kOiBSRVFVRVNUX01FVEhPRFMuUE9TVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQstGL0YjQtdC7JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9wcm9maWxlJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLkdFVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CU0LDQvdC90YvQtSDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LUg0YPRgdC/0LXRiNC90L4g0L/QvtC70YPRh9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsbToge1xuICAgICAgICAgICAgdXJsOiAnL2ZpbG1zL3s6aWR9JyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLkdFVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CU0LDQvdC90YvQtSDQviDRhNC40LvRjNC80LUg0YPRgdC/0LXRiNC90L4g0L/QvtC70YPRh9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0aW9uczoge1xuICAgICAgICAgICAgdXJsOiAnL3NlbGVjdGlvbnMnLFxuICAgICAgICAgICAgbWV0aG9kOiBSRVFVRVNUX01FVEhPRFMuR0VULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0J/QvtC00LHQvtGA0LrQuCDRg9GB0L/QtdGI0L3QviDQv9C+0LvRg9GH0LXQvdGLJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwZXJzb246IHtcbiAgICAgICAgICAgIHVybDogJy9wZXJzb25zL3s6aWR9JyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLkdFVCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNXaXRoVW5pY29kZSxcbiAgICAgICAgICAgIHN0YXR1c2VzOiB7XG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAnMjAwJzogJ9CU0LDQvdC90YvQtSDQviDQv9C10YDRgdC+0L3QtSDRg9GB0L/QtdGI0L3QviDQv9C+0LvRg9GH0LXQvdGLJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgIHVybDogJy91c2VyL3VwZGF0ZScsXG4gICAgICAgICAgICBtZXRob2Q6IFJFUVVFU1RfTUVUSE9EUy5QT1NULFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1dpdGhVbmljb2RlLFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0JTQsNC90L3Ri9C1INGD0YHQv9C10YjQvdC+INC+0LHQvdC+0LLQu9C10L3RiycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsdXJlOiBmYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyVXBkYXRlOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9hdmF0YXIvdXBkYXRlJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLlBPU1QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aEVtcHR5LFxuICAgICAgICAgICAgc3RhdHVzZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICcyMDAnOiAn0JDQstCw0YLQsNGA0LrQsCDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC90LAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5mYWlsdXJlRGVmYXVsdFN0YXR1c2VzLFxuICAgICAgICAgICAgICAgICAgICAnNDEzJzogJ9Ch0LvQuNGI0LrQvtC8INCx0L7Qu9GM0YjQvtC5INGA0LDQt9C80LXRgCDRhNCw0LnQu9CwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyRGVsZXRlOiB7XG4gICAgICAgICAgICB1cmw6ICcvdXNlci9hdmF0YXIvZGVsZXRlJyxcbiAgICAgICAgICAgIG1ldGhvZDogUkVRVUVTVF9NRVRIT0RTLlBPU1QsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzV2l0aFVuaWNvZGUsXG4gICAgICAgICAgICBzdGF0dXNlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgJzIwMCc6ICfQkNCy0LDRgtCw0YDQutCwINGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvdCwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IGZhaWx1cmVEZWZhdWx0U3RhdHVzZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IFJFUVVFU1RfTUVUSE9EUywgQ3NyZlRva2VuTmFtZSwgY29uZmlnLCBjdXN0b21GYWlsdXJlcyB9O1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gJy4uLy4uL0NvbnRyb2xsZXJzL1BsYXllckNvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuY2xhc3MgRmlsbUNvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgZmlsbUlkO1xuICAgIHRyYWlsZXJTcmM7XG4gICAgcGxheWVyQ29udHJvbGxlcjtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMuZmlsbUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy50cmFpbGVyU3JjID0gbnVsbDtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgnbmV3LXBsYXllcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5wbGF5ZXJWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcubmV3UGxheWVyVmlldygpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sbGVyID0gbmV3IFBsYXllckNvbnRyb2xsZXIodGhpcy52aWV3LnBsYXllclZpZXcpO1xuICAgICAgICB9KTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgbW91bnRDb21wb25lbnQob3B0cykge1xuICAgICAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgICAgIHJvdXRlci5zaG93VW5rbm93blBhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAob3B0cz8uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbG1JZCA9IG9wdHMuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5nZXRGaWxtKHRoaXMuZmlsbUlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWlsZXJTcmMgPSBkYXRhLmNvbnRlbnQ/LnRyYWlsZXJVUkwgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZpbGxGaWxtKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnZpZXcuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIuc2hvd1Vua25vd25QYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckNvbnRyb2xsZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgc3VwZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgdGhpcy5maWxtSWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy50cmFpbGVyU3JjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjdGlvbl0nKT8uZGF0YXNldFsnYWN0aW9uJ107XG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1YnNjcmliZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyYWlsZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRyYWlsZXJTcmMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFpbGVyU3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllckNvbnRyb2xsZXIuc2V0U3JjKHRoaXMudHJhaWxlclNyYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb250cm9sbGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBGaWxtQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgSU1vZGVsIGZyb20gJy4uLy4uL01vZGVscy9JTW9kZWwvSU1vZGVsJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuLyoqXG4gKiDQmtC+0YLRgNC+0LvQu9C10YAg0LTQu9GPINGF0Y3QtNC10YDQsFxuICogQGNhdGVnb3J5IEhlYWRlclxuICogQGV4dGVuZHMge0lDb250cm9sbGVyfVxuICogQHBhcmFtICB7SGVhZGVyVmlld30gdmlldyDQntCx0YrQtdC60YIg0LLQuNC00LAg0LrQvtC80L/QvtC90LXQvdGC0LAg0YXRjdC00LXRgFxuICovXG5jbGFzcyBIZWFkZXJDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcbiAgICAgICAgc3VwZXIodmlldywgSU1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VzZXItY2hhbmdlZCcsICh1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlci1jaGFuZ2VkJywgdXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5jaGFuZ2VIZWFkZXJQcm9maWxlKCdwcm9maWxlJywgdXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlSGVhZGVyUHJvZmlsZSgnc2lnbkluJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuc3Vic2NyaWJlKCdyZW5kZXItc2lnbkluQnV0dG9uJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmNoYW5nZUhlYWRlclByb2ZpbGUoJ3NpZ25JbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgncmVuZGVyLXByb2ZpbGVCdXR0b24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlSGVhZGVyUHJvZmlsZSgncHJvZmlsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0LHQvtGC0LrQuCDQvdCw0LbQsNGC0LjRjyDQvdCwINGF0LXQtNC10YBcbiAgICAgKiAo0L/RgNC40LLQsNGC0L3QvtC1INC/0L7Qu9C1INC60LvQsNGB0YHQsClcbiAgICAgKiBAcGFyYW0gIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5oaWRlUHJvZmlsZSgpO1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjdGlvbl0nKT8uZGF0YXNldFsnYWN0aW9uJ107XG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2ZpbGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy50b2dnbGVQcm9maWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdzaWduSW4nOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCdzaWduSW4nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbnRyb2xsZXI7XG4iLCIvKipcbiAqINCR0LDQt9C+0LLRi9C5INC60LvQsNGB0YEg0LTQu9GPINC60L7QvdGC0YDQvtC70LvQtdGA0LAg0LrQvtC80L/QvtC90LXQvdGC0LAg0L/RgNC40LvQvtC20LXQvdC40Y8uXG4gKiDQodCy0Y/Qt9GL0LLQsNC10YIg0LLQuNC0INGBINC80L7QtNC10LvRjNGOXG4gKiBAY2xhc3NcbiAqIEB2aXJ0dWFsXG4gKiBAcGFyYW0gIHt0VmlldzxJVmlldz59IHZpZXcg0JLQuNC0LCDQutC+0YLQvtGA0YvQvCDRg9C/0YDQsNCy0LvRj9C10YIg0LrQvtC90YLRgNC+0LvQu9C10YBcbiAqIEBwYXJhbSAge3RNb2RlbDxJTW9kZWw+fSBtb2RlbCDQnNC+0LTQtdC70YwsINC60L7RgtC+0YDQvtC5INC/0L7Qu9GM0LfRg9C10YLRgdGPINC60L7QvdGC0YDQvtC70LvQtdGAXG4gKi9cbmNsYXNzIElDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiDQktC40LQsINC60L7RgtC+0YDRi9C8INGD0L/RgNCw0LLQu9GP0LXRgiDQutC+0L3RgtGA0L7Qu9C70LXRgFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB2aWV3O1xuICAgIC8qKlxuICAgICAqINCc0L7QtNC10LvRjCwg0LrQvtGC0L7RgNC+0Lkg0L/QvtC70YzQt9GD0LXRgtGB0Y8g0LrQvtC90YLRgNC+0LvQu9C10YBcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgbW9kZWw7XG4gICAgLyoqXG4gICAgICog0KTQu9Cw0LMuINCe0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDQu9C4INC00LDQvdC90YvQuSDQutC+0LzQv9C+0L3QtdC90YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzTW91bnRlZDtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINGD0YHRgtGA0LDQvdC+0LLQutC4INC60L7QvNC/0L7QvdC10L3RgtCwLlxuICAgICAqINCe0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRjdC70LXQvNC10L3RgiDQuCDRg9C/0YDQsNCy0LvRj9C10YIg0LjQvC5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIG1vdW50Q29tcG9uZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINGD0LHQuNGA0LDQvdC40Y8g0LrQvtC80L/QvtC90LXQvdGC0LAuXG4gICAgICog0J7RgtGA0LjRgdC+0LLRi9Cy0LDQtdGCINGN0LvQtdC80LXQvdGCINC4INGD0L/RgNCw0LLQu9GP0LXRgiDQuNC8LlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IElDb250cm9sbGVyO1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4uLy4uL1JvdXRlci9Sb3V0ZXJcIjtcbmNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIG1vZGVsKTtcbiAgICAgICAgLy8gdGhpcy52aWV3LmJpbmRDbGlja0V2ZW50KHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VubW91bnQtYWxsJywgdGhpcy51bm1vdW50Q29tcG9uZW50LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHN1cGVyLm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlbGVjdGlvbnMuZ2V0U2VsZWN0aW9ucygpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZmlsbFNlbGVjdGlvbnMoZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmJpbmRDbGlja0V2ZW50KHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuc2hvd1Vua25vd25QYWdlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBlLnRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IFNpZ25JbkNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vQ29udHJvbGxlcnMvU2lnbkluQ29udHJvbGxlci9TaWduSW5Db250cm9sbGVyJztcbmltcG9ydCBTaWduVXBDb250cm9sbGVyIGZyb20gJy4uLy4uL0NvbnRyb2xsZXJzL1NpZ25VcENvbnRyb2xsZXIvU2lnblVwQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi8uLi9Sb3V0ZXIvUm91dGVyJztcbi8qKlxuICog0JrQvtGC0YDQvtC70LvQtdGAINC00LvRjyDQv9GA0LDQstC+0LPQviDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxuICogQGNhdGVnb3J5IE1vZGFsUmlnaHRcbiAqIEBleHRlbmRzIHtJQ29udHJvbGxlcn1cbiAqIEBwYXJhbSAge0hlYWRlclZpZXd9IHZpZXcg0J7QsdGK0LXQutGCINCy0LjQtNCwINC60L7QvNC/0L7QvdC10L3RgtCwINC/0YDQsNCy0L7Qs9C+INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXG4gKiBAcGFyYW0gIHtVc2VyTW9kZWx9IG1vZGVsINCe0LHRitC10LrRgiDQvNC+0LTQtdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gKi9cbmNsYXNzIE1vZGFsUmlnaHRDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGN1cnJlbnRDb250cm9sbGVyO1xuICAgIGNvbnN0cnVjdG9yKHZpZXcsIG1vZGVsKSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIG1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ21vZGFsUmlnaHQtc2V0U2lnbkluJywgKHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmN1cnJlbnRWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0U2lnbkluVmlldygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IG5ldyBTaWduSW5Db250cm9sbGVyKHRoaXMudmlldy5jdXJyZW50VmlldywgdXNlck1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ21vZGFsUmlnaHQtc2V0U2lnblVwJywgKHVzZXJNb2RlbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmN1cnJlbnRWaWV3Py5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0U2lnblVwVmlldygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IG5ldyBTaWduVXBDb250cm9sbGVyKHRoaXMudmlldy5jdXJyZW50VmlldywgdXNlck1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kQ2xpY2tFdmVudCh0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuZ2V0Rm9ybURhdGFGcm9tU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb250cm9sbGVyPy5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBzdXBlci5tb3VudENvbXBvbmVudCgpO1xuICAgIH1cbiAgICA7XG4gICAgdW5tb3VudENvbXBvbmVudCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlcj8udW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICBzdXBlci51bm1vdW50Q29tcG9uZW50KCk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBjaGVjayBvbmx5IGlmIGNsaWNrIG5vdCBvbiBtb2RhbCByaWdodCwgaXQgYWxzbyBjbGljayBvbiBjbG9zZSBidG4gKG5vdCBuZWNlc3NhcnkgY2hlY2sgaXQ/KVxuICAgICAgICAgICAgY29uc3QgbW9kYWxDb250ZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoIW1vZGFsQ29udGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm1vdW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKHJvdXRlci5nZXROZWFyZXN0Tm90QXV0aFVybCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG59XG47XG5leHBvcnQgZGVmYXVsdCBNb2RhbFJpZ2h0Q29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgSU1vZGVsIGZyb20gJy4uLy4uL01vZGVscy9JTW9kZWwvSU1vZGVsJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuY2xhc3MgTm90Rm91bmRDb250cm9sbGVyIGV4dGVuZHMgSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcbiAgICAgICAgc3VwZXIodmlldywgSU1vZGVsKTtcbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnN1YnNjcmliZSgndW5tb3VudC1hbGwnLCB0aGlzLnVubW91bnRDb21wb25lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kSG9tZUJ1dHRvbkNsaWNrKHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gZS50YXJnZXQuY2xvc2VzdCgnW2hyZWZdJyk/LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgaWYgKGhyZWYgIT09IHVuZGVmaW5lZCAmJiBocmVmICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKGhyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuY2xhc3MgUGVyc29uQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBwZXJzb25JZDtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMucGVyc29uSWQgPSBudWxsO1xuICAgICAgICBFdmVudERpc3BhdGNoZXIuc3Vic2NyaWJlKCd1bm1vdW50LWFsbCcsIHRoaXMudW5tb3VudENvbXBvbmVudC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmJpbmRDbGlja0V2ZW50KHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBtb3VudENvbXBvbmVudChvcHRzKSB7XG4gICAgICAgIGlmICghb3B0cykge1xuICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRzPy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uSWQgPSBvcHRzLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZ2V0UGVyc29uKHRoaXMucGVyc29uSWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5maWxsUGVyc29uKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzdXBlci5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnNob3dVbmtub3duUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHVubW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgc3VwZXIudW5tb3VudENvbXBvbmVudCgpO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25JZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BlcnNvbiBoYW5kbGVDbGljaycpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbkNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgSUNvbnRyb2xsZXIgZnJvbSAnLi4vSUNvbnRyb2xsZXIvSUNvbnRyb2xsZXInO1xuaW1wb3J0IElNb2RlbCBmcm9tIFwiLi4vLi4vTW9kZWxzL0lNb2RlbC9JTW9kZWxcIjtcbmNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgdmlkZW9UaW1lO1xuICAgIHZpZGVvVGltZU1pbnV0ZXM7XG4gICAgdmlkZW9UaW1lU2Vjb25kcztcbiAgICBwcmV2aW91c1ZvbHVtZTtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KSB7XG4gICAgICAgIHN1cGVyKHZpZXcsIElNb2RlbCk7XG4gICAgICAgIC8vIHRoaXMudmlkZW9UaW1lID0gMDtcbiAgICAgICAgLy8gdGhpcy52aWRlb1RpbWVNaW51dGVzID0gMDtcbiAgICAgICAgLy8gdGhpcy52aWRlb1RpbWVTZWNvbmRzID0gMDtcbiAgICAgICAgLy8gdGhpcy5wcmV2aW91c1ZvbHVtZSA9IDA7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMuaW5pdGlhbFZpZGVvID0gdGhpcy5pbml0aWFsVmlkZW8uYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy50b2dnbGVWaWRlb1N0YXR1cyA9IHRoaXMudG9nZ2xlVmlkZW9TdGF0dXMuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5zdG9wVmlkZW8gPSB0aGlzLnN0b3BWaWRlby5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm11dGUgPSB0aGlzLm11dGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5zZXRWaWRlb1ZvbHVtZSA9IHRoaXMuc2V0VmlkZW9Wb2x1bWUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVUaW1lID0gdGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuc2V0UHJvZ3Jlc3MgPSB0aGlzLnNldFByb2dyZXNzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMuaW5pdGlhbFZpZGVvKCk7XG4gICAgICAgIC8vIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgUGxheWVyQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJy4uLy4uL0V2ZW50RGlzcGF0Y2hlci9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi4vLi4vUm91dGVyL1JvdXRlclwiO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dCB9IGZyb20gXCIuLi8uLi9VdGlscy9WYWxpZGF0b3JzL1ZhbGlkYXRvclwiO1xuLyoqXG4gKiDQmtC+0YLRgNC+0LvQu9C10YAg0LTQu9GPXG4gKiBAY2F0ZWdvcnkgSGVhZGVyXG4gKiBAZXh0ZW5kcyB7SUNvbnRyb2xsZXJ9XG4gKiBAcGFyYW0gIHtIZWFkZXJWaWV3fSB2aWV3INCe0LHRitC10LrRgiDQstC40LTQsCDQutC+0LzQv9C+0L3QtdC90YLQsFxuICovXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICAgICAgc3VwZXIodmlldywgbW9kZWwpO1xuICAgICAgICB0aGlzLnZpZXcuYmluZENsaWNrRXZlbnQodGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uYmluZEZpbGVDbGlja0V2ZW50KHRoaXMub25GaWxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRDaGVja2JveENsaWNrRXZlbnQodGhpcy5vbkNoZWNrYm94Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3VubW91bnQtYWxsJywgdGhpcy51bm1vdW50Q29tcG9uZW50LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgbW91bnRDb21wb25lbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLm1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2V0dGluZ3MgY29udHJvbGxlcicsIHVzZXIpO1xuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3LnNob3coeyB1c2VyOiB1c2VyIH0pO1xuICAgICAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvbkZpbGVDbGljayhlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIDtcbiAgICBvbkNoZWNrYm94Q2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2sgY2hlY2tib3gnKTtcbiAgICB9XG4gICAgO1xuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICBjb25zdCBlbWFpbENvbXBvbmVudCA9IHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnZW1haWwnKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRDb21wb25lbnQgPSB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJyk7XG4gICAgICAgIGNvbnN0IHJlcGVhdFBhc3N3b3JkQ29tcG9uZW50ID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdyZXBlYXQtcGFzc3dvcmQnKTtcbiAgICAgICAgLy8gY29uc3QgZW1haWwgPSBlbWFpbENvbXBvbmVudC5pbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZENvbXBvbmVudC5pbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVwZWF0UGFzc3dvcmQgPSByZXBlYXRQYXNzd29yZENvbXBvbmVudC5pbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVFbWFpbCA9IHZhbGlkYXRlSW5wdXQoZW1haWxDb21wb25lbnQuZ2V0RGF0YSgpKTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGVtYWlsQ29tcG9uZW50LnNob3dFcnJvck1zZyh2YWxpZGF0ZUVtYWlsLmVycm9yTXNnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc3dvcmQgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb21wb25lbnQuc2hvd0Vycm9yTXNnKCcnKTtcbiAgICAgICAgICAgICAgICByZXBlYXRQYXNzd29yZENvbXBvbmVudC5zaG93RXJyb3JNc2coJ9Cf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlZFBhc3N3b3JkID0gdmFsaWRhdGVJbnB1dChwYXNzd29yZENvbXBvbmVudC5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWRQYXNzd29yZC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb21wb25lbnQuc2hvd0Vycm9yTXNnKCcnKTtcbiAgICAgICAgICAgICAgICByZXBlYXRQYXNzd29yZENvbXBvbmVudC5zaG93RXJyb3JNc2codmFsaWRhdGVkUGFzc3dvcmQuZXJyb3JNc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhc3N3b3JkQ29tcG9uZW50LmhpZGVFcnJvck1zZygpO1xuICAgICAgICAgICAgcmVwZWF0UGFzc3dvcmRDb21wb25lbnQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKT8uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAoaHJlZiAhPT0gdW5kZWZpbmVkICYmIGhyZWYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQuY2xvc2VzdCgnI3NhdmUtc3VibWl0LWJ0bicpO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGJ1dHRvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmlldy5mb3JtLmlucHV0cyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlJyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JldHVybicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlX2JpcnRoOiAnMjAwMC1KYW4tMDEnLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUlucHV0ID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXInKS5pbnB1dDtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXQuZmlsZXMgJiYgZmlsZUlucHV0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZiBmaWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2F2YXRhci1jaGVja2JveCcpLmlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZiBjaGVja2VkIDEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgncmVwZWF0LXBhc3N3b3JkJykuc2hvd0Vycm9yTXNnKCfQndC10LvRjNC30Y8g0YPQtNCw0LvQuNGC0Ywg0Lgg0L/QvtGB0YLQsNCy0LjRgtGMINCw0LLQsNGC0LDRgNC60YMhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGNoZWNrZWQgMScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdmF0YXInLCBmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuYXZhdGFyVXBkYXRlKGZvcm1EYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5pbnB1dHMuZm9yRWFjaCgoaW5wdXRDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoeyBtc2cgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXInKS5zaG93RXJyb3JNc2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IGZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdhdmF0YXItY2hlY2tib3gnKS5pbnB1dC5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnYXZhdGFyLWNoZWNrYm94JykuaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0lmIGNoZWNrZWQgMicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5hdmF0YXJEZWxldGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvck1zZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXJEYXRhJywgdXNlckRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgYm9keTogZm9ybURhdGEgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGVVc2VyKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmlucHV0cy5mb3JFYWNoKChpbnB1dENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb21wb25lbnQuaGlkZUVycm9yTXNnKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoeyBtc2cgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3JNc2cnLCBtc2cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2VtYWlsJykuc2hvd0Vycm9yTXNnKG1zZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb2RlbC5hdmF0YXJVcGRhdGUoZm9ybURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzQ29udHJvbGxlcjtcbiIsImltcG9ydCBJQ29udHJvbGxlciBmcm9tICcuLi9JQ29udHJvbGxlci9JQ29udHJvbGxlcic7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXInO1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uLy4uL1JvdXRlci9Sb3V0ZXJQYXRocyc7XG4vKipcbiAqINCa0L7RgtGA0L7Qu9C70LXRgCDQtNC70Y9cbiAqIEBjYXRlZ29yeSBTaWduSW5cbiAqIEBleHRlbmRzIHtJQ29udHJvbGxlcn1cbiAqIEBwYXJhbSAge0hlYWRlclZpZXd9IHZpZXcg0J7QsdGK0LXQutGCINCy0LjQtNCwINC60L7QvNC/0L7QvdC10L3RgtCwXG4gKiBAcGFyYW0gIHtVc2VyTW9kZWx9IG1vZGVsINCe0LHRitC10LrRgiDQvNC+0LTQtdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gKi9cbmNsYXNzIFNpZ25JbkNvbnRyb2xsZXIgZXh0ZW5kcyBJQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICAgICAgc3VwZXIodmlldywgbW9kZWwpO1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5iaW5kU3VibWl0RXZlbnQodGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uYmluZExpbmtzRXZlbnQodGhpcy5vblJlZGlyZWN0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG4gICAgdmFsaWRhdGVGb3JtRmllbGRzKCkge1xuICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpO1xuICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpO1xuICAgICAgICBpZiAoIWVtYWlsRmllbGQgfHwgIXBhc3N3b3JkRmllbGQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdGaWVsZHMgZG9udCBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWV3LmZvcm0udmFsaWRhdGVFbXB0eUZpZWxkcyhbZW1haWxGaWVsZCwgcGFzc3dvcmRGaWVsZF0pO1xuICAgIH1cbiAgICA7XG4gICAgb25JbnB1dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRJbnB1dHNFdmVudCh0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCcuc2lnbkluLWJ1dHRvbicpO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi0tZGlzYWJsZWQnKSkgeyAvLyBUT0RPOiBjaGVjayBpZiBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm1GaWVsZHMoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXJTaWduSW4gPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMudmlldy5mb3JtLmZpbmRJbnB1dENvbXBvbmVudCgnZW1haWwnKS5pbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdwYXNzd29yZCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2lnbkluVXNlcih1c2VyU2lnbkluKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgocGF0aHMubWFpbik7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3JNc2cpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ2VtYWlsJykuc2hvd0Vycm9yTXNnKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJykuc2hvd0Vycm9yTXNnKGVycm9yTXNnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvblJlZGlyZWN0KGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHRhcmdldC5jbG9zZXN0KCdbaHJlZl0nKS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICAgICAgICAgIHRoaXMuc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCk7XG4gICAgICAgICAgICByb3V0ZXIuZ29Ub1BhdGgoaHJlZik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHNhdmVGb3JtRGF0YVRvU3RvcmFnZSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uc2F2ZURhdGFUb1N0b3JhZ2UoJ1NpZ25JbkRhdGEnKTtcbiAgICB9XG4gICAgO1xuICAgIGdldEZvcm1EYXRhRnJvbVN0b3JhZ2UoKSB7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmdldERhdGFGcm9tU3RvcmFnZSgnU2lnbkluRGF0YScpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBTaWduSW5Db250cm9sbGVyO1xuIiwiaW1wb3J0IElDb250cm9sbGVyIGZyb20gJy4uL0lDb250cm9sbGVyL0lDb250cm9sbGVyJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vLi4vUm91dGVyL1JvdXRlcic7XG5pbXBvcnQgcGF0aHMgZnJvbSAnLi4vLi4vUm91dGVyL1JvdXRlclBhdGhzJztcbi8qKlxuICog0JrQvtGC0YDQvtC70LvQtdGAINC00LvRj1xuICogQGNhdGVnb3J5IFNpZ25VcFxuICogQGV4dGVuZHMge0lDb250cm9sbGVyfVxuICogQHBhcmFtICB7SGVhZGVyVmlld30gdmlldyDQntCx0YrQtdC60YIg0LLQuNC00LAg0LrQvtC80L/QvtC90LXQvdGC0LBcbiAqIEBwYXJhbSAge1VzZXJNb2RlbH0gbW9kZWwg0J7QsdGK0LXQutGCINC80L7QtNC10LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbiAqL1xuY2xhc3MgU2lnblVwQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xuICAgICAgICBzdXBlcih2aWV3LCBtb2RlbCk7XG4gICAgICAgIHRoaXMudmlldy5mb3JtLmJpbmRTdWJtaXRFdmVudCh0aGlzLm9uU3VibWl0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5iaW5kTGlua3NFdmVudCh0aGlzLm9uUmVkaXJlY3QuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbiAgICBvbklucHV0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZpZXcuZm9ybS52YWxpZGF0ZVdpdGhFbXB0eSgpO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uc3VibWl0QnV0dG9uLmJsb2NrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5zdWJtaXRCdXR0b24udW5ibG9jaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBvblN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZm9ybS5iaW5kSW5wdXRzRXZlbnQodGhpcy5vbklucHV0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZS50YXJnZXQuY2xvc2VzdCgnLnNpZ25VcC1idXR0b24nKTtcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tLWRpc2FibGVkJykpIHsgLy8gVE9ETzogY2hlY2sgaWYgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlldy5mb3JtLnZhbGlkYXRlV2l0aEVtcHR5KCkpIHsgLy8gVE9ETzogY2hlY2sgaWYgdmFsaWQsIGJ1dCBpZiB2YWxpZCBhbHdheXMgZGlzYWJsZWQuIFVzZWxlc3MgY2hlY2s/XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXNlclNpZ25VcCA9IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdlbWFpbCcpLmlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnZpZXcuZm9ybS5maW5kSW5wdXRDb21wb25lbnQoJ3Bhc3N3b3JkJykuaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0ZV9iaXJ0aDogJzIwMDAtSmFuLTAxJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNpZ25VcFVzZXIodXNlclNpZ25VcCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVyLmdvVG9QYXRoKHBhdGhzLm1haW4pO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yTXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmZvcm0uZmluZElucHV0Q29tcG9uZW50KCdyZXBlYXQtcGFzc3dvcmQnKS5zaG93RXJyb3JNc2coZXJyb3JNc2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIG9uUmVkaXJlY3QoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gdGFyZ2V0LmNsb3Nlc3QoJ1tocmVmXScpLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy5zYXZlRm9ybURhdGFUb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgIHJvdXRlci5nb1RvUGF0aChocmVmKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc2F2ZUZvcm1EYXRhVG9TdG9yYWdlKCkge1xuICAgICAgICB0aGlzLnZpZXcuZm9ybS5zYXZlRGF0YVRvU3RvcmFnZSgnU2lnblVwRGF0YScpO1xuICAgIH1cbiAgICA7XG4gICAgZ2V0Rm9ybURhdGFGcm9tU3RvcmFnZSgpIHtcbiAgICAgICAgdGhpcy52aWV3LmZvcm0uZ2V0RGF0YUZyb21TdG9yYWdlKCdTaWduVXBEYXRhJyk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcENvbnRyb2xsZXI7XG4iLCIvKipcbiAqINCa0LvQsNGB0YEg0YDQsNCx0L7RgtGLINGBINGB0L7QsdGL0YLQuNGP0LzQuCDQv9GA0LjQu9C+0LbQtdC90LjRjyAoY9C40L3Qs9C70YLQvtC9KVxuICogQGNsYXNzXG4gKiBAY2F0ZWdvcnkgRXZlbnREaXNwYXRjaGVyXG4gKi9cbmNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG4gICAgLyoqXG4gICAgICog0KXRgNCw0L3QuNC70LjRidC1INGN0LLQtdC90YLQvtCyXG4gICAgICogKNCf0YDQuNCy0LDRgtC90L7QtSDQv9C+0LvQtSDQutC70LDRgdGB0LApXG4gICAgICogQHR5cGUge01hcDxzdHJpbmcsIEFycmF5PEZ1bmN0aW9uPj59XG4gICAgICovXG4gICAgZXZlbnRzO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBNYXA7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQv9C+0LTQv9C40YHQutC4INC90LAg0YHQvtCx0YvRgtC40LVcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSAtINCY0LzRjyDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAtINCU0LXQudGB0YLQstC40LUsINC60L7RgtC+0YDQvtC1INC90YPQttC90L4g0LLRi9C/0L7Qu9C90LjRgtGMINC/0YDQuCDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40Lgg0YHQvtCx0YvRgtC40Y9cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrTGlzdCA9IHRoaXMuZXZlbnRzLmdldChldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWNhbGxiYWNrTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0KGV2ZW50TmFtZSwgW2NhbGxiYWNrXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2tMaXN0LnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0L7RgtC/0LjRgdC60Lgg0L7RgiDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIC0g0JjQvNGPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0g0JTQtdC50YHRgtCy0LjQtSwg0LrQvtGC0L7RgNC+0LUg0L3Rg9C20L3QviDQsdGL0LvQviDQstGL0L/QvtC70L3QuNGC0Ywg0L/RgNC4INGB0YDQsNCx0LDRgtGL0LLQsNC90LjQuCDRgdC+0LHRi9GC0LjRj1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja0xpc3QgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKCFjYWxsYmFja0xpc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnROYW1lLCBjYWxsYmFja0xpc3RcbiAgICAgICAgICAgIC5maWx0ZXIoKGZ1bmMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jICE9PSBjYWxsYmFjaztcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LLRi9C30L7QstCwINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgLSDQmNC80Y8g0YHQvtCx0YvRgtC40Y9cbiAgICAgKiBAcGFyYW0gIHs/YW55fSBkYXRhIC0g0JTQsNC90L3Ri9C1LCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INC/0LXRgNC10LTQsNGC0Ywg0LIg0YTRg9C90LrRhtC40Y4t0L7QsdGA0LDQsdC+0YLRh9C40LpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmdldChldmVudE5hbWUpPy5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuIiwiaW1wb3J0IElNb2RlbCBmcm9tICcuLi9JTW9kZWwvSU1vZGVsJztcbmltcG9ydCBBamF4IGZyb20gJy4uLy4uL0FqYXgvQWpheCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9Db25maWcvQ29uZmlnJztcbmNsYXNzIEZpbG1Nb2RlbCBleHRlbmRzIElNb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZUZpbG0oanNvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICAgICAgICBjb250ZW50VVJMOiBqc29uLmNvbnRlbnRfdXJsLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5wYXJzZUNvbnRlbnRGb3JGaWxtKGpzb24uY29udGVudCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZUNvbnRlbnRGb3JGaWxtKGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBjb250ZW50LmlkLFxuICAgICAgICAgICAgdGl0bGU6IGNvbnRlbnQudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogY29udGVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJhdGluZzogY29udGVudC5yYXRpbmcsXG4gICAgICAgICAgICB5ZWFyOiBjb250ZW50LnllYXIsXG4gICAgICAgICAgICBwZXJzb25zOiB0aGlzLnBhcnNlUGVyc29uc0ZvckZpbG0oY29udGVudC5wZXJzb25zX3JvbGVzKSxcbiAgICAgICAgICAgIGlzRnJlZTogY29udGVudC5pc19mcmVlLFxuICAgICAgICAgICAgYWdlTGltaXQ6IGNvbnRlbnQuYWdlX2xpbWl0LFxuICAgICAgICAgICAgdHJhaWxlclVSTDogY29udGVudC50cmFpbGVyX3VybCxcbiAgICAgICAgICAgIHByZXZpZXdVUkw6IGNvbnRlbnQucHJldmlld191cmwsXG4gICAgICAgICAgICB0eXBlOiBjb250ZW50LnR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBlcnNvbnNGb3JGaWxtKHBlcnNvbnNXaXRoUm9sZXMpIHtcbiAgICAgICAgcmV0dXJuIHBlcnNvbnNXaXRoUm9sZXMubWFwKChwZXJzb25XaXRoUm9sZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQZXJzb25Gb3JGaWxtKHBlcnNvbldpdGhSb2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBlcnNvbkZvckZpbG0ocGVyc29uV2l0aFJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBwZXJzb25XaXRoUm9sZS5wZXJzb24uaWQsXG4gICAgICAgICAgICBuYW1lOiBwZXJzb25XaXRoUm9sZS5wZXJzb24ubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IHBlcnNvbldpdGhSb2xlLnJvbGUudGl0bGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBnZXRGaWxtQWN0b3JzKHBlcnNvbnMpIHtcbiAgICAgICAgY29uc3QgYWN0b3JSb2xlID0geyBpZDogMCwgdGl0bGU6ICdBQ1RPUicgfTtcbiAgICAgICAgcmV0dXJuIHBlcnNvbnMuZmlsdGVyKHBlcnNvbiA9PiBwZXJzb24ucm9sZSA9PT0gYWN0b3JSb2xlLnRpdGxlKTtcbiAgICB9XG4gICAgZ2V0RmlsbURpcmVjdG9ycyhwZXJzb25zKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yUm9sZSA9IHsgaWQ6IDAsIHRpdGxlOiAnRElSRUNUT1InIH07XG4gICAgICAgIHJldHVybiBwZXJzb25zLmZpbHRlcihwZXJzb24gPT4gcGVyc29uLnJvbGUgPT09IGRpcmVjdG9yUm9sZS50aXRsZSk7XG4gICAgfVxuICAgIGFzeW5jIGdldEZpbG0oaWQpIHtcbiAgICAgICAgbGV0IGNvbmYgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcuYXBpLmZpbG0pO1xuICAgICAgICBjb25mLnVybCA9IGNvbmYudXJsLnJlcGxhY2UoJ3s6aWR9JywgaWQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmYpO1xuICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmYpO1xuICAgICAgICBjb25zdCBmaWxtRGF0YSA9IHRoaXMucGFyc2VGaWxtKHJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LmZpbG0pO1xuICAgICAgICBpZiAoZmlsbURhdGEuY29udGVudCkge1xuICAgICAgICAgICAgZmlsbURhdGEuY29udGVudC5hY3RvcnMgPSB0aGlzLmdldEZpbG1BY3RvcnMoZmlsbURhdGEuY29udGVudC5wZXJzb25zIHx8IFtdKTtcbiAgICAgICAgICAgIGZpbG1EYXRhLmNvbnRlbnQuZGlyZWN0b3JzID0gdGhpcy5nZXRGaWxtRGlyZWN0b3JzKGZpbG1EYXRhLmNvbnRlbnQucGVyc29ucyB8fCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmaWxtRGF0YSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEZpbG1Nb2RlbDtcbiIsIi8qKlxuICog0JHQsNC30L7QstGL0Lkg0LrQu9Cw0YHRgSDQtNC70Y8g0LzQvtC00LXQu9C4LlxuICog0JLRi9C/0L7Qu9C90Y/QtdGCINCx0LjQt9C90LXRgSDQu9C+0LPQuNC60YMg0Lgg0YDQsNCx0L7RgtCw0LXRgiDRgSDQtNCw0L3QvdGL0LzQuCDQuCDRgdC10YLRjNGOLlxuICogQGNsYXNzXG4gKiBAdmlydHVhbFxuICovXG5jbGFzcyBJTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5leHBvcnQgZGVmYXVsdCBJTW9kZWw7XG4iLCJpbXBvcnQgSU1vZGVsIGZyb20gJy4uL0lNb2RlbC9JTW9kZWwnO1xuaW1wb3J0IEFqYXggZnJvbSAnLi4vLi4vQWpheC9BamF4JztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL0NvbmZpZy9Db25maWcnO1xuY2xhc3MgUGVyc29uTW9kZWwgZXh0ZW5kcyBJTW9kZWwge1xuICAgIGdlbmRlck1hcCA9IHtcbiAgICAgICAgRjogJ9CW0LXQvdGB0LrQuNC5JyxcbiAgICAgICAgTTogJ9Cc0YPQttGB0LrQvtC5JyxcbiAgICB9O1xuICAgIHJvbGVNYXAgPSB7XG4gICAgICAgIERJUkVDVE9SOiAn0KDQtdC20LjRgdGB0ZHRgCcsXG4gICAgICAgIENPTVBPU0VSOiAn0JrQvtC80L/QvtC30LjRgtC+0YAnLFxuICAgICAgICBERVNJR046ICfQlNC40LfQsNC50L3QtdGAJyxcbiAgICAgICAgRURJVE9SOiAn0KDQtdC00LDQutGC0L7RgCcsXG4gICAgICAgIEFDVE9SOiAn0JDQutGC0ZHRgCcsXG4gICAgICAgIE9QRVJBVE9SOiAn0J7Qv9C10YDQsNGC0L7RgCcsXG4gICAgICAgIFBST0RVQ0VSOiAn0J/RgNC+0LTRjtGB0YHQtdGAJyxcbiAgICAgICAgV1JJVEVSOiAn0KHRhtC10L3QsNGA0LjRgdGCJyxcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VQZXJzb24oanNvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICAgICAgICBuYW1lOiBqc29uLm5hbWUsXG4gICAgICAgICAgICBnZW5kZXI6IHRoaXMudHJhbnNmb3JtR2VuZGVyKGpzb24uZ2VuZGVyKSxcbiAgICAgICAgICAgIGdlbnJlczogdGhpcy5wYXJzZUdlbnJlcyhqc29uLmdlbnJlcyksXG4gICAgICAgICAgICBncm93dGg6IGpzb24uZ3Jvd3RoLFxuICAgICAgICAgICAgYmlydGhQbGFjZToganNvbi5iaXJ0aHBsYWNlLFxuICAgICAgICAgICAgYXZhdGFyVVJMOiBqc29uLmF2YXRhcl91cmwsXG4gICAgICAgICAgICBhZ2U6IGpzb24uYWdlLFxuICAgICAgICAgICAgcm9sZXM6IHRoaXMucGFyc2VQZXJzb25Sb2xlcyhqc29uLnJvbGVzKSxcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlZEluOiB0aGlzLnBhcnNlUGFydGljaXBhdGVkQ29udGVudHMoanNvbi5wYXJ0aWNpcGF0ZWRfaW4pLFxuICAgICAgICB9O1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VHZW5yZXMoZ2VucmVzKSB7XG4gICAgICAgIHJldHVybiBnZW5yZXMubWFwKChnZW5yZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VHZW5yZShnZW5yZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VHZW5yZShnZW5yZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGdlbnJlLmlkLFxuICAgICAgICAgICAgbmFtZTogZ2VucmUubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGVyc29uUm9sZXMocm9sZXMpIHtcbiAgICAgICAgcmV0dXJuIHJvbGVzLm1hcCgocm9sZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VQZXJzb25Sb2xlKHJvbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlUGVyc29uUm9sZShyb2xlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm9sZS5pZCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zZm9ybVJvbGUocm9sZS50aXRsZSksXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBhcnRpY2lwYXRlZENvbnRlbnRzKGNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50cy5tYXAoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUGFydGljaXBhdGVkQ29udGVudChjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVBhcnRpY2lwYXRlZENvbnRlbnQoY29udGVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGNvbnRlbnQuaWQsXG4gICAgICAgICAgICB0aXRsZTogY29udGVudC50aXRsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgO1xuICAgIHRyYW5zZm9ybUdlbmRlcihnZW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZGVyTWFwW2dlbmRlcl07XG4gICAgfVxuICAgIDtcbiAgICB0cmFuc2Zvcm1Sb2xlKHJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9sZU1hcFtyb2xlXTtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIGdldFBlcnNvbihpZCkge1xuICAgICAgICBsZXQgY29uZiA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZy5hcGkucGVyc29uKTtcbiAgICAgICAgY29uZi51cmwgPSBjb25mLnVybC5yZXBsYWNlKCd7OmlkfScsIGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25mKTtcbiAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHJlc3BvbnNlLCBjb25mKTtcbiAgICAgICAgY29uc3QgcGVyc29uRGF0YSA9IGF3YWl0IHRoaXMucGFyc2VQZXJzb24ocmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkucGVyc29uKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwZXJzb25EYXRhKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgUGVyc29uTW9kZWw7XG4iLCJpbXBvcnQgSU1vZGVsIGZyb20gJy4uL0lNb2RlbC9JTW9kZWwnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL0NvbmZpZy9Db25maWdcIjtcbmltcG9ydCBBamF4IGZyb20gXCIuLi8uLi9BamF4L0FqYXhcIjtcbmNsYXNzIFNlbGVjdGlvbk1vZGVsIGV4dGVuZHMgSU1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlU2VsZWN0aW9ucyhqc29uKSB7XG4gICAgICAgIHJldHVybiBqc29uLm1hcCgoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVNlbGVjdGlvbihzZWxlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFyc2VTZWxlY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogc2VsZWN0aW9uLmlkLFxuICAgICAgICAgICAgdGl0bGU6IHNlbGVjdGlvbi50aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucGFyc2VTZWxlY3Rpb25Db250ZW50cyhzZWxlY3Rpb24uY29udGVudCksXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVNlbGVjdGlvbkNvbnRlbnRzKHNlbGVjdGlvbkNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb25Db250ZW50cy5tYXAoKHNlbGVjdGlvbkNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU2VsZWN0aW9uQ29udGVudChzZWxlY3Rpb25Db250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIDtcbiAgICBwYXJzZVNlbGVjdGlvbkNvbnRlbnQoc2VsZWN0aW9uQ29udGVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHNlbGVjdGlvbkNvbnRlbnQuaWQsXG4gICAgICAgICAgICB0aXRsZTogc2VsZWN0aW9uQ29udGVudC50aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3Rpb25Db250ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmF0aW5nOiBzZWxlY3Rpb25Db250ZW50LnJhdGluZyxcbiAgICAgICAgICAgIHllYXI6IHNlbGVjdGlvbkNvbnRlbnQueWVhcixcbiAgICAgICAgICAgIGlzRnJlZTogc2VsZWN0aW9uQ29udGVudC5pc19mcmVlLFxuICAgICAgICAgICAgYWdlTGltaXQ6IHNlbGVjdGlvbkNvbnRlbnQuYWdlX2xpbWl0LFxuICAgICAgICAgICAgdHJhaWxlclVSTDogc2VsZWN0aW9uQ29udGVudC50cmFpbGVyX3VybCxcbiAgICAgICAgICAgIHByZXZpZXdVUkw6IHNlbGVjdGlvbkNvbnRlbnQucHJldmlld191cmwsXG4gICAgICAgICAgICB0eXBlOiBzZWxlY3Rpb25Db250ZW50LnR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBnZXRTZWxlY3Rpb25zKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnNlbGVjdGlvbnMpO1xuICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkuc2VsZWN0aW9ucyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkRhdGEgPSB0aGlzLnBhcnNlU2VsZWN0aW9ucyhyZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS5zZWxlY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxlY3Rpb25EYXRhKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uTW9kZWw7XG4iLCJpbXBvcnQgSU1vZGVsIGZyb20gJy4uL0lNb2RlbC9JTW9kZWwnO1xuaW1wb3J0IEFqYXggZnJvbSAnLi4vLi4vQWpheC9BamF4JztcbmltcG9ydCB7IGNvbmZpZywgY3VzdG9tRmFpbHVyZXMgfSBmcm9tICcuLi8uLi9Db25maWcvQ29uZmlnJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnLi4vLi4vRXZlbnREaXNwYXRjaGVyL0V2ZW50RGlzcGF0Y2hlcic7XG5jbGFzcyBVc2VyTW9kZWwgZXh0ZW5kcyBJTW9kZWwge1xuICAgIGN1cnJlbnRVc2VyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICB9XG4gICAgO1xuICAgIHBhcnNlVXNlcihqc29uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbWFpbDoganNvbi5lbWFpbCxcbiAgICAgICAgICAgIGJpcnRoRGF0ZToganNvbi5kYXRlX2JpcnRoLFxuICAgICAgICAgICAgYXZhdGFyOiBqc29uLmF2YXRhcl91cmwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIDtcbiAgICBnZXRDdXJyZW50VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXI7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBzaWduSW5Vc2VyKHNpZ25EYXRhKSB7XG4gICAgICAgIGNvbnN0IHNpZ25JblJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkuc2lnbkluLCBKU09OLnN0cmluZ2lmeShzaWduRGF0YSkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHNpZ25JblJlc3BvbnNlLCBjb25maWcuYXBpLnNpZ25Jbik7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlUmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhwcm9maWxlUmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocHJvZmlsZVJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLmN1cnJlbnRVc2VyKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoc2lnbkluUmVzcG9uc2UucmVzcG9uc2VCb2R5Lm1lc3NhZ2UpO1xuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgc2lnblVwVXNlcihzaWduRGF0YSkge1xuICAgICAgICBjb25zdCBzaWduVXBSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnNpZ25VcCwgSlNPTi5zdHJpbmdpZnkoc2lnbkRhdGEpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhzaWduVXBSZXNwb25zZSwgY29uZmlnLmFwaS5zaWduVXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2lnblVwUmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3Qgc2lnbkluUmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5zaWduSW4sIEpTT04uc3RyaW5naWZ5KHNpZ25EYXRhKSk7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMoc2lnbkluUmVzcG9uc2UsIGNvbmZpZy5hcGkuc2lnbkluKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHNpZ25VcFJlc3BvbnNlLnJlc3BvbnNlQm9keS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgbG9nb3V0VXNlcigpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5sb2dvdXQpO1xuICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkubG9nb3V0KTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5lbWl0KCd1c2VyLWNoYW5nZWQnLCB0aGlzLmN1cnJlbnRVc2VyKTtcbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIHVwZGF0ZVVzZXIodXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlVXNlcicpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnVwZGF0ZSwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHJlc3BvbnNlLCBjb25maWcuYXBpLnVwZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlUmVzcG9uc2UgPSBhd2FpdCBBamF4LmFqYXgoY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhwcm9maWxlUmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocHJvZmlsZVJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVN0YXR1cyA9IHJlc3BvbnNlLnJlc3BvbnNlQm9keS5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBtc2c6IGN1c3RvbUZhaWx1cmVzW2N1c3RvbVN0YXR1c10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgfVxuICAgIDtcbiAgICBhc3luYyBhdmF0YXJVcGRhdGUoZm9ybURhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F2YXRhclVwZGF0ZScpO1xuICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLmF2YXRhclVwZGF0ZSwgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRyeSB7XG4gICAgICAgIC8vICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkuYXZhdGFyVXBkYXRlKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29uc3QgcHJvZmlsZVJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncHJvZmlsZVJlc3BvbnNlJywgcHJvZmlsZVJlc3BvbnNlKTtcbiAgICAgICAgLy8gICAgIGF3YWl0IEFqYXguY2hlY2tSZXNwb25zZVN0YXR1cyhwcm9maWxlUmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocHJvZmlsZVJlc3BvbnNlLnJlc3BvbnNlQm9keS5ib2R5LnVzZXIpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRVc2VyJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY2F0Y2gge1xuICAgICAgICAvLyAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIGNvbmZpZy5ob3N0ICsgY29uZmlnLmFwaS5hdmF0YXJVcGRhdGUudXJsLCBmYWxzZSk7XG4gICAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBamF4LmdldENzcmZUb2tlbkZyb21TZXJ2ZXIoKTtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdjc3JmLXRva2VuJywgcmVzcG9uc2UuYm9keVsnY3NyZi10b2tlbiddKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcicsIHByb2ZpbGVSZXNwb25zZS5yZXNwb25zZUJvZHkuYm9keS51c2VyKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jdXJyZW50VXNlcicsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgRXZlbnREaXNwYXRjaGVyLmVtaXQoJ3VzZXItY2hhbmdlZCcsIHRoaXMuY3VycmVudFVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MTMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBtc2c6ICfQodC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QuSDRgNCw0LfQvNC10YAg0YTQsNC50LvQsCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVN0YXR1cyA9IHJlc3BvbnNlLnJlc3BvbnNlQm9keS5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBtc2c6IGN1c3RvbUZhaWx1cmVzW2N1c3RvbVN0YXR1c10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgYXN5bmMgYXZhdGFyRGVsZXRlKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLmF2YXRhckRlbGV0ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkuYXZhdGFyRGVsZXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVSZXNwb25zZSA9IGF3YWl0IEFqYXguYWpheChjb25maWcuYXBpLnByb2ZpbGUpO1xuICAgICAgICAgICAgYXdhaXQgQWpheC5jaGVja1Jlc3BvbnNlU3RhdHVzKHByb2ZpbGVSZXNwb25zZSwgY29uZmlnLmFwaS5wcm9maWxlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLnBhcnNlVXNlcihwcm9maWxlUmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIGFzeW5jIGF1dGhVc2VyQnlDb29raWUoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWpheC5hamF4KGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBBamF4LmNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2UsIGNvbmZpZy5hcGkucHJvZmlsZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdGhpcy5wYXJzZVVzZXIocmVzcG9uc2UucmVzcG9uc2VCb2R5LmJvZHkudXNlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFdmVudERpc3BhdGNoZXIuZW1pdCgndXNlci1jaGFuZ2VkJywgdGhpcy5jdXJyZW50VXNlcik7IFRPRE86IG5lZWQ/XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDtcbiIsImltcG9ydCBwYXRocyBmcm9tIFwiLi9Sb3V0ZXJQYXRoc1wiO1xuY2xhc3MgUm91dGVyIHtcbiAgICByb3V0ZXM7XG4gICAgdW5rbm93blBhZ2VIYW5kbGVyO1xuICAgIG5lYXJlc3ROb3RBdXRoVXJsO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgICAgICB0aGlzLnVua25vd25QYWdlSGFuZGxlciA9ICgpID0+IHsgfTtcbiAgICAgICAgdGhpcy5uZWFyZXN0Tm90QXV0aFVybCA9IHBhdGhzLm1haW47XG4gICAgfVxuICAgIDtcbiAgICBzdGFydChlbnRyeVBhdGgpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBwYXRoOiBlbnRyeVBhdGggfSwgJycsIGVudHJ5UGF0aCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvdXRlKCk7XG4gICAgfVxuICAgIDtcbiAgICBnb1RvUGF0aChwYXRoKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogcGF0aCB9LCAnJywgcGF0aCk7XG4gICAgICAgIHRoaXMucm91dGUoKTtcbiAgICB9XG4gICAgO1xuICAgIHJvdXRlKCkge1xuICAgICAgICBjb25zdCByYXdQYXRoID0gaGlzdG9yeS5zdGF0ZT8ucGF0aDtcbiAgICAgICAgaWYgKCFyYXdQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuc2FuaXRpemVVcmwocmF3UGF0aCk7XG4gICAgICAgIGNvbnN0IHRtcFBhdGggPSAnLycgKyBwYXRoO1xuICAgICAgICBpZiAodG1wUGF0aCAhPT0gcGF0aHMuc2lnbkluICYmIHRtcFBhdGggIT09IHBhdGhzLnNpZ25VcCkge1xuICAgICAgICAgICAgdGhpcy5uZWFyZXN0Tm90QXV0aFVybCA9IHBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm91bmRlZFBhdGggPSB0aGlzLnJvdXRlcy5maW5kKCh7IHJ1bGUsIGhhbmRsZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBwYXRoLm1hdGNoKHJ1bGUpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZvdW5kZWRQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnVua25vd25QYWdlSGFuZGxlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzaG93VW5rbm93blBhZ2UoKSB7XG4gICAgICAgIHRoaXMudW5rbm93blBhZ2VIYW5kbGVyKCk7XG4gICAgfVxuICAgIDtcbiAgICBzZXRVbmtub3duUGFnZUhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnVua25vd25QYWdlSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIDtcbiAgICBhZGRSdWxlKHJ1bGUsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgbmV3Um91dGUgPSB7XG4gICAgICAgICAgICBydWxlOiB0aGlzLnBhcnNlUnVsZShydWxlKSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGVzLnB1c2gobmV3Um91dGUpO1xuICAgICAgICByZXR1cm4gbmV3Um91dGU7XG4gICAgfVxuICAgIHJlbW92ZVJ1bGUocnVsZSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucm91dGVzLmZpbmRJbmRleCgocm91dGUpID0+IHJvdXRlLnJ1bGUuc291cmNlID09PSB0aGlzLnBhcnNlUnVsZShydWxlKS5zb3VyY2UpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgZ2V0TmVhcmVzdE5vdEF1dGhVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5lYXJlc3ROb3RBdXRoVXJsO1xuICAgIH1cbiAgICA7XG4gICAgcGFyc2VSdWxlKHJ1bGUpIHtcbiAgICAgICAgbGV0IHVyaSA9IHRoaXMuc2FuaXRpemVVcmwocnVsZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97XFw6bnVtYmVyfS9nLCAnKFxcXFxkKyknKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3tcXDp3b3JkfS9nLCAnKFxcXFx3KyknKVxuICAgICAgICAgICAgLnJlcGxhY2UoL3tcXDpcXHcrfS9nLCAnKFxcXFx3KyknKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3VyaX0kYCwgJ2knKTtcbiAgICB9XG4gICAgc2FuaXRpemVVcmwocnVsZSkge1xuICAgICAgICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC8kLywgJycpLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgfVxuICAgIDtcbn1cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsIi8qKlxuICog0JrQvtC90YTQuNCz0YPRgNCw0YbQuNGPIFVSTCDQsNC00YDQtdGB0L7QsiDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICogQGNhdGVnb3J5IFJvdXRlclxuICogQGNvbnN0YW50IHtPYmplY3R9XG4gKiBAcGFyYW0ge3tuYW1lOiBzdHJpbmcsIFVSTDogc3RyaW5nfX0g0KHRgtGA0YPQutGC0YPRgNCwINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuFxuICovXG5jb25zdCBwYXRocyA9IHtcbiAgICBtYWluOiAnLycsXG4gICAgY2F0YWxvZzogJy9jYXRhbG9nJyxcbiAgICBzdG9yZTogJy9zdG9yZScsXG4gICAgbXlNb3ZpZTogJy9teS1tb3ZpZScsXG4gICAgc2V0dGluZ3M6ICcvc2V0dGluZ3MnLFxuICAgIHNpZ25JbjogJy9zaWduSW4nLFxuICAgIHNpZ25VcDogJy9zaWduVXAnLFxuICAgIGxvZ291dDogJy9sb2dvdXQnLFxuICAgIGZpbG1zOiAnL2ZpbG1zL3s6aWR9JyxcbiAgICBwZXJzb25zOiAnL3BlcnNvbnMvezppZH0nLFxufTtcbmV4cG9ydCBkZWZhdWx0IHBhdGhzO1xuIiwiaW1wb3J0IHZhbGlkYXRvcnMgZnJvbSAnLi9WYWxpZGF0b3JDb25maWcnO1xuY29uc3QgdW5rbm93blZhbGlkYXRvciA9IHtcbiAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICBlcnJvck1zZzogJ9Cd0LXQuNC30LLQtdGB0YLQvdGL0Lkg0YLQuNC/INC/0L7Qu9GPJyxcbn07XG5jb25zdCB2YWxpZFZhbGlkYXRvciA9IHtcbiAgICBpc1ZhbGlkOiB0cnVlLFxuICAgIGVycm9yTXNnOiAnJyxcbn07XG4vLyBjb25zdCBlbXB0eVZhbGlkYXRvcjogVmFsaWRhdG9yUmVzdWx0ID0ge1xuLy8gICAgIGlzVmFsaWQ6ICAgICAgZmFsc2UsXG4vLyAgICAgZXJyb3JNc2c6ICAgICAn0J/Rg9GB0YLQvtC1INC/0L7Qu9C1Jyxcbi8vIH1cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQuaWQgPT09ICdhdmF0YXInKSB7XG4gICAgICAgIHJldHVybiB2YWxpZFZhbGlkYXRvcjtcbiAgICB9XG4gICAgY29uc3QgdmFsaWRhdG9yID0gdmFsaWRhdG9ycy5nZXQoaW5wdXQuaWQpO1xuICAgIGlmICghdmFsaWRhdG9yKSB7XG4gICAgICAgIHJldHVybiB1bmtub3duVmFsaWRhdG9yO1xuICAgIH1cbiAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdG9yLnJlZ0V4cC50ZXN0KGlucHV0LnZhbHVlKTtcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIGVycm9yTXNnOiB2YWxpZGF0b3IuZXJyb3JNc2cgfTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkVmFsaWRhdG9yO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZHMocGFzc3dvcmQsIHJlcGVhdFBhc3N3b3JkKSB7XG4gICAgY29uc3QgdmFsaWRhdGVkUGFzc3dvcmQgPSB2YWxpZGF0ZUlucHV0KHsgaWQ6ICdwYXNzd29yZCcsIHZhbHVlOiBwYXNzd29yZCB9KTtcbiAgICBpZiAoIXZhbGlkYXRlZFBhc3N3b3JkLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIGVycm9yTXNnOiB2YWxpZGF0ZWRQYXNzd29yZC5lcnJvck1zZywgcGFzc3dvcmRFcnJvck1zZzogdmFsaWRhdG9ycy5nZXQoJ3JlcGVhdC1wYXNzd29yZCcpPy5lcnJvck1zZyB9O1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQgIT09IHJlcGVhdFBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlLCBlcnJvck1zZzogdmFsaWRhdGVkUGFzc3dvcmQuZXJyb3JNc2csIHBhc3N3b3JkRXJyb3JNc2c6IHZhbGlkYXRvcnMuZ2V0KCdyZXBlYXQtcGFzc3dvcmQnKT8uZXJyb3JNc2cgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaXNWYWxpZDogdHJ1ZSwgZXJyb3JNc2c6ICcnIH07XG59XG5leHBvcnQgeyB2YWxpZGF0ZUlucHV0LCB2YWxpZGF0ZVBhc3N3b3JkcyB9O1xuIiwiY29uc3QgdmFsaWRhdG9ycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAge1xuICAgICAgICAgICAgcmVnRXhwOiAvXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC8sXG4gICAgICAgICAgICBlcnJvck1zZzogJ9CS0LLQtdC00ZHQvdC90YvQuSBlbWFpbCDQuNC80LXQtdGCINC90LXQutC+0YDRgNC10LrRgtC90YvQuSDQstC40LQnXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdwYXNzd29yZCcsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZ0V4cDogL14oPz0uKlthLXpBLVpdKSg/PS4qWzAtOV0pW2EtekEtWjAtOV17OCx9JC8sXG4gICAgICAgICAgICBlcnJvck1zZzogJ9Cf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0YHQvtC00LXRgNC20LDRgtGMINC80LjQvdC40LzRg9C8IDgg0YHQuNC80LLQvtC70L7Qsiwg0LLQutC70Y7Rh9Cw0Y8g0L7QtNC90YMg0YbQuNGE0YDRgydcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ3JlcGVhdC1wYXNzd29yZCcsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlZ0V4cDogL14oPz0uKlthLXpBLVpdKSg/PS4qWzAtOV0pW2EtekEtWjAtOV17OCx9JC8sXG4gICAgICAgICAgICBlcnJvck1zZzogJ9Cf0LDRgNC+0LvQuCDQtNC+0LvQttC90Ysg0YHQvtCy0L/QsNC00LDRgtGMJyxcbiAgICAgICAgfSxcbiAgICBdLFxuXSk7XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0b3JzO1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBGaWxtVGVtcGxhdGUgZnJvbSAnLi9GaWxtVmlldy5oYnMnO1xuaW1wb3J0ICcuL0ZpbG1WaWV3LmNzcyc7XG5pbXBvcnQgUGxheWVyVmlldyBmcm9tIFwiLi4vUGxheWVyVmlldy9QbGF5ZXJWaWV3XCI7XG5pbXBvcnQgRmlsbURhdGEgZnJvbSBcIi4vRmlsbVZpZXdDb25maWdcIjtcbi8qKlxuICog0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDRhNC40LvRjNC80LAg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAqIEBjYXRlZ29yeSBGaWxtXG4gKiBAZXh0ZW5kcyB7SVZpZXd9XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINGF0LXQtNC10YDQsFxuICovXG5jbGFzcyBGaWxtVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBwbGF5ZXJWaWV3O1xuICAgIHRyYWlsZXJCdXR0b247XG4gICAgc3Vic2NyaWJlQnV0dG9uO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEZpbG1UZW1wbGF0ZSh7fSksICcuZmlsbScpO1xuICAgIH1cbiAgICA7XG4gICAgbmV3UGxheWVyVmlldygpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJWaWV3ID0gbmV3IFBsYXllclZpZXcodGhpcy5wYXJlbnQucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICAgIDtcbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnBsYXllclZpZXcgPSBudWxsO1xuICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgfVxuICAgIGZpbGxGaWxtKGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IEZpbG1UZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCdXR0b25zKCk7XG4gICAgfVxuICAgIDtcbiAgICByZW5kZXJCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxtLWNvbnRlbnRfX2J1dHRvbnMnKTtcbiAgICAgICAgdGhpcy50cmFpbGVyQnV0dG9uID0gKG5ldyBGaWxtRGF0YS50cmFpbGVyQnV0dG9uLmNvbXBvbmVudFR5cGUoYnV0dG9uc0NvbnRhaW5lciwgJycsICcnLCBGaWxtRGF0YS50cmFpbGVyQnV0dG9uLmNvbXBvbmVudERhdGEpKTtcbiAgICAgICAgdGhpcy50cmFpbGVyQnV0dG9uLnNob3coKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVCdXR0b24gPSAobmV3IEZpbG1EYXRhLnN1YnNjcmliZUJ1dHRvbi5jb21wb25lbnRUeXBlKGJ1dHRvbnNDb250YWluZXIsICcnLCAnJywgRmlsbURhdGEuc3Vic2NyaWJlQnV0dG9uLmNvbXBvbmVudERhdGEpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVCdXR0b24uc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEZpbG1WaWV3O1xuIiwiaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0J1dHRvbkNvbXBvbmVudC9CdXR0b25Db21wb25lbnQnO1xuY29uc3QgRmlsbURhdGEgPSB7XG4gICAgdHJhaWxlckJ1dHRvbjoge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICB0ZXh0OiAn0J7RhNC+0YDQvNC40YLRjCDQv9C+0LTQv9C40YHQutGDJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnNjcmliZS1idXR0b24nLFxuICAgICAgICAgICAgZGF0YUFjdGlvbjogJ3N1YnNjcmliZScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHN1YnNjcmliZUJ1dHRvbjoge1xuICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICB0ZXh0OiAn0KLRgNC10LnQu9C10YAnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic2NyaWJlLWJ1dHRvbicsXG4gICAgICAgICAgICBkYXRhQWN0aW9uOiAndHJhaWxlcicsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IEJ1dHRvbkNvbXBvbmVudCxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEZpbG1EYXRhO1xuIiwiaW1wb3J0IElWaWV3IGZyb20gXCIuLi9JVmlldy9JVmlld1wiO1xuaW1wb3J0IEhlYWRlclRlbXBsYXRlIGZyb20gJy4vSGVhZGVyVmlldy5oYnMnO1xuaW1wb3J0ICcuL0hlYWRlclZpZXcuY3NzJztcbmltcG9ydCBIZWFkZXJEYXRhIGZyb20gJy4vSGVhZGVyVmlld0NvbmZpZyc7XG4vKipcbiAqINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0YXQtdC00LXRgNCwINC/0YDQuNC70L7QttC10L3QuNGPXG4gKiBAY2F0ZWdvcnkgSGVhZGVyXG4gKiBAZXh0ZW5kcyB7SVZpZXd9XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINGF0LXQtNC10YDQsFxuICovXG5jbGFzcyBIZWFkZXJWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIGxlZnRTaWRlO1xuICAgIHJpZ2h0U2lkZTtcbiAgICBwcm9maWxlO1xuICAgIGFjdGlvbnNMaXN0O1xuICAgIGN1cnJlbnRBY3RpdmVJdGVtO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIEhlYWRlclRlbXBsYXRlKHt9KSwgJy5qcy1oZWFkZXItY29udGFpbmVyJyk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgZmllbGRzXG4gICAgICAgIHRoaXMubGVmdFNpZGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1jb250YWluZXJfX2xlZnQnKTtcbiAgICAgICAgdGhpcy5yaWdodFNpZGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1jb250YWluZXJfX3JpZ2h0Jyk7XG4gICAgICAgIHRoaXMucHJvZmlsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdXNlci1wcm9maWxlJyk7XG4gICAgICAgIC8vIFJlbmRlciBjb21wb25lbnRzXG4gICAgICAgIEhlYWRlckRhdGEubGVmdEl0ZW1zLmZvckVhY2goKHsgY29tcG9uZW50VHlwZSwgY29tcG9uZW50RGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgY29tcG9uZW50VHlwZSh0aGlzLmxlZnRTaWRlLCAnJywgJycsIGNvbXBvbmVudERhdGEpO1xuICAgICAgICAgICAgY29tcG9uZW50LnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9uc0xpc3QgPSAobmV3IEhlYWRlckRhdGEuYWN0aW9uc0xpc3QuY29tcG9uZW50VHlwZSh0aGlzLmxlZnRTaWRlLCAnJywgJycsIEhlYWRlckRhdGEuYWN0aW9uc0xpc3QuY29tcG9uZW50RGF0YSkpO1xuICAgICAgICB0aGlzLmFjdGlvbnNMaXN0LnNob3coKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlSXRlbSA9IG51bGw7XG4gICAgICAgIEhlYWRlckRhdGEucmlnaHRJdGVtcy5mb3JFYWNoKCh7IGNvbXBvbmVudFR5cGUsIGNvbXBvbmVudERhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IGNvbXBvbmVudFR5cGUodGhpcy5yaWdodFNpZGUsICcnLCAnJywgY29tcG9uZW50RGF0YSk7XG4gICAgICAgICAgICBjb21wb25lbnQuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yaWdodFNpZGUucmVtb3ZlQ2hpbGQodGhpcy5wcm9maWxlKTtcbiAgICAgICAgdGhpcy5yaWdodFNpZGUuYXBwZW5kQ2hpbGQodGhpcy5wcm9maWxlKTtcbiAgICB9XG4gICAgO1xuICAgIGNoYW5nZUFjdGl2ZUhlYWRlckxpc3RJdGVtKGhyZWYpIHtcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSB0aGlzLmFjdGlvbnNMaXN0LmdldEVsZW1lbnQ7XG4gICAgICAgIGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHt0aGlzLmN1cnJlbnRBY3RpdmVJdGVtfVwiXWApPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlSXRlbSA9IGhyZWY7XG4gICAgICAgIGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHtocmVmfVwiXWApPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqINCk0YPQvdC60YbQuNGPINC40LfQvNC10L3QtdC90LjRjyDRjdC70LXQvNC10L3RgtCwINCyINGF0Y3QtNC10YDQtVxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcHJvZmlsZUl0ZW1OYW1lIC0g0L3QsNC30LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwXG4gICAgICogQHBhcmFtICB7YW55fSBkYXRhIC0g0JTQsNC90L3Ri9C1LCDQvdC10L7QsdGF0L7QtNC40LzRi9C1INC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0Y3Qu9C10LzQtdC90YLQsFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGNoYW5nZUhlYWRlclByb2ZpbGUocHJvZmlsZUl0ZW1OYW1lLCBkYXRhKSB7XG4gICAgICAgIGlmICghKHByb2ZpbGVJdGVtTmFtZSBpbiBIZWFkZXJEYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IEhlYWRlckRhdGFbcHJvZmlsZUl0ZW1OYW1lXTtcbiAgICAgICAgdGhpcy5wcm9maWxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoZGF0YT8uYXZhdGFyKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGF0YS5hdmF0YXIgPSBkYXRhLmF2YXRhcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9maWxlSXRlbSA9IG5ldyBjb21wb25lbnQuY29tcG9uZW50VHlwZSh0aGlzLnByb2ZpbGUsICcnLCAnJywgY29tcG9uZW50LmNvbXBvbmVudERhdGEpO1xuICAgICAgICBwcm9maWxlSXRlbS5zaG93KCk7XG4gICAgfVxuICAgIDtcbiAgICB0b2dnbGVQcm9maWxlKCkge1xuICAgICAgICB0aGlzLnByb2ZpbGUucXVlcnlTZWxlY3RvcignLmpzLWRyb3Bkb3duX19jb250ZW50Jyk/LmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duX19jb250ZW50X19zaG93Jyk7XG4gICAgfVxuICAgIDtcbiAgICBoaWRlUHJvZmlsZSgpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1kcm9wZG93bl9fY29udGVudCcpPy5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9fY29udGVudF9fc2hvdycpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDRgdC+0LHRi9GC0LjRjyDQvdCw0LbQsNGC0LjRjyDQvdCwINGF0LXQtNC10YBcbiAgICAgKiBAcGFyYW0gIHthbnl9IGxpc3RlbmVyIC0gQ2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclZpZXc7XG4iLCJpbXBvcnQgTGlua0NvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpbmtDb21wb25lbnQvTGlua0NvbXBvbmVudCc7XG5pbXBvcnQgVmVydGljYWxTcGFjZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudC9WZXJ0aWNhbFNwYWNlckNvbXBvbmVudCc7XG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvQnV0dG9uQ29tcG9uZW50L0J1dHRvbkNvbXBvbmVudCc7XG5pbXBvcnQgTGlzdENvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RDb21wb25lbnQvTGlzdENvbXBvbmVudCc7XG5pbXBvcnQgRHJvcGRvd25CdXR0b25Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudC9Ecm9wZG93bkJ1dHRvbkNvbXBvbmVudCc7XG5pbXBvcnQgJy4uLy4uL0NvbXBvbmVudHMvQ3NzL0hlYWRlckFjdGlvbkxpc3QvSGVhZGVyQWN0aW9uTGlzdC5jc3MnO1xuaW1wb3J0ICcuLi8uLi9Db21wb25lbnRzL0Nzcy9IZWFkZXJQcm9maWxlRHJvcGRvd24vSGVhZGVyUHJvZmlsZURyb3Bkb3duLmNzcyc7XG5pbXBvcnQgJy4uLy4uL0NvbXBvbmVudHMvQ3NzL0hlYWRlclNpZ25Jbi9IZWFkZXJTaWduSW4uY3NzJztcbjtcbmNvbnN0IEhlYWRlckRhdGEgPSB7XG4gICAgbGVmdEl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy8nLFxuICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2xvZ28nLFxuICAgICAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvbG9nby9sb2dvLnN2ZycsXG4gICAgICAgICAgICAgICAgbGlua0ltYWdlV2lkdGg6ICc0MHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgYWN0aW9uc0xpc3Q6IHtcbiAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgbGlzdENsYXNzOiAnaGVhZGVyLWNvbnRhaW5lcl9fYWN0aW9uLWxpc3QnLFxuICAgICAgICAgICAgaXRlbUNsYXNzOiAnaGVhZGVyLWNvbnRhaW5lci1hY3Rpb24nLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnLycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdoZWFkZXItY29udGFpbmVyLWFjdGlvbl9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9CT0LvQsNCy0L3QsNGPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0Q2xhc3M6ICdoZWFkZXItY29udGFpbmVyLWFjdGlvbi1saW5rX190ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9jYXRhbG9nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JrQsNGC0LDQu9C+0LMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uLWxpbmtfX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3N0b3JlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JzQsNCz0LDQt9C40L0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uLWxpbmtfX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL215LW1vdmllJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ2hlYWRlci1jb250YWluZXItYWN0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JzQvtGRJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0Q2xhc3M6ICdoZWFkZXItY29udGFpbmVyLWFjdGlvbi1saW5rX190ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRUeXBlOiBMaXN0Q29tcG9uZW50LFxuICAgIH0sXG4gICAgcmlnaHRJdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgbGlua0hyZWY6ICcjJyxcbiAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvaWNvbnMvc2VhcmNoLnN2ZycsXG4gICAgICAgICAgICAgICAgbGlua0ltYWdlV2lkdGg6ICcyNHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogJzI0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICfQmtGD0L/QuNGC0Ywg0L/QvtC00L/QuNGB0LrRgycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic2NyaWJlLWJ1dHRvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50VHlwZTogQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogJzI0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRUeXBlOiBWZXJ0aWNhbFNwYWNlckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIHByb2ZpbGU6IHtcbiAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgZGF0YUFjdGlvbjogJ3Byb2ZpbGUnLFxuICAgICAgICAgICAgYXZhdGFyOiAnL2ltZy9wcm9maWxlL3Byb2ZpbGUuanBnJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9zZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ3Byb2ZpbGUtbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtJbWFnZVNyYzogJy9pbWcvaWNvbnMvc2V0dGluZ3Muc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlQ2xhc3M6ICdwcm9maWxlLWxpbmtfX2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlV2lkdGg6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQndCw0YHRgtGA0L7QudC60LgnLFxuICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dENsYXNzOiAncHJvZmlsZS1saW5rX190ZXh0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogRHJvcGRvd25CdXR0b25Db21wb25lbnQsXG4gICAgfSxcbiAgICBzaWduSW46IHtcbiAgICAgICAgY29tcG9uZW50RGF0YToge1xuICAgICAgICAgICAgZGF0YUFjdGlvbjogJ3NpZ25JbicsXG4gICAgICAgICAgICBsaW5rSHJlZjogJy9zaWduSW4nLFxuICAgICAgICAgICAgbGlua0NsYXNzOiAnaGVhZGVyX19zaWduSW4tbGluaycsXG4gICAgICAgICAgICBsaW5rSW1hZ2VTcmM6ICcvaW1nL2ljb25zL2NpcmNsZS11c2VyLnN2ZycsXG4gICAgICAgICAgICBsaW5rSW1hZ2VXaWR0aDogJzMwcHgnLFxuICAgICAgICAgICAgbGlua1RleHQ6ICfQktC+0LnRgtC4JyxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudCxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckRhdGE7XG4iLCIvKipcbiAqINCR0LDQt9C+0LLRi9C5INC60LvQsNGB0YEg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LrQvtC80L/QvtC90LXQvdGC0LAg0L/RgNC40LvQvtC20LXQvdC40Y9cbiAqIEBjbGFzc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IC0g0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGN0LvQtdC80LXQvdGCINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPXG4gKi9cbmNsYXNzIElWaWV3IHtcbiAgICAvKipcbiAgICAgKiDQoNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC00LDQvdC90L7Qs9C+INCy0LjQtNCwXG4gICAgICogQG1lbWJlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgcGFyZW50O1xuICAgIC8qKlxuICAgICAqINCa0L7RgNC90LXQstC+0Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC00LDQvdC90L7Qs9C+INCy0LjQtNCwXG4gICAgICogQG1lbWJlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRlbXBsYXRlLCB0b3BFbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHRlbXBsYXRlLCAndGV4dC9odG1sJykucXVlcnlTZWxlY3Rvcih0b3BFbGVtZW50KTtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCBmaW5kIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDQstC40LTQsFxuICAgICAqIEBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICA7XG4gICAgLyoqXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINGB0LrRgNGL0YLQuNGPINCy0LjQtNCwXG4gICAgICogQG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IElWaWV3O1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBNYWluVGVtcGxhdGUgZnJvbSAnLi9NYWluVmlldy5oYnMnO1xuaW1wb3J0ICcuL01haW5WaWV3LmNzcyc7XG5jbGFzcyBNYWluVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBNYWluVGVtcGxhdGUoe30pLCAnLmNhdGVnb3JpZXMnKTtcbiAgICB9XG4gICAgO1xuICAgIGZpbGxTZWxlY3Rpb25zKHNlbGVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IE1haW5UZW1wbGF0ZSh7IHNlbGVjdGlvbnM6IHNlbGVjdGlvbnMgfSk7XG4gICAgfVxuICAgIDtcbiAgICBiaW5kQ2xpY2tFdmVudChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmNhdGVnb3J5X19jb250YWluZXJfX2l0ZW0taW1hZ2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBNYWluVmlldztcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgTW9kYWxSaWdodFRlbXBsYXRlIGZyb20gJy4vTW9kYWxSaWdodFZpZXcuaGJzJztcbmltcG9ydCBNb2RhbFJpZ2h0RGF0YSBmcm9tICcuL01vZGFsUmlnaHRWaWV3Q29uZmlnJztcbmltcG9ydCAnLi9Nb2RhbFJpZ2h0Vmlldy5jc3MnO1xuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSAnLi4vU2lnbkluVmlldy9TaWduSW5WaWV3JztcbmltcG9ydCBTaWduVXBWaWV3IGZyb20gJy4uL1NpZ25VcFZpZXcvU2lnblVwVmlldyc7XG4vKipcbiAqINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L/RgNCw0LLQvtCz0L4g0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcbiAqIEBjYXRlZ29yeSBNb2RhbFJpZ2h0XG4gKiBAZXh0ZW5kcyB7SVZpZXd9XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0Y3Qu9C10LzQtdC90YIg0LTQu9GPINC/0YDQsNCy0L7Qs9C+INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXG4gKi9cbmNsYXNzIE1vZGFsUmlnaHRWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIG1vZGFsQm9keTtcbiAgICBjdXJyZW50VmlldztcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBNb2RhbFJpZ2h0VGVtcGxhdGUoeyB0aXRsZTogTW9kYWxSaWdodERhdGEudGl0bGUgfSksICcuanMtbW9kYWxfX2FyZWEnKTtcbiAgICAgICAgdGhpcy5tb2RhbEJvZHkgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1vZGFsX19ib2R5Jyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBudWxsO1xuICAgIH1cbiAgICA7XG4gICAgc2V0U2lnbkluVmlldygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG5ldyBTaWduSW5WaWV3KHRoaXMubW9kYWxCb2R5KTtcbiAgICB9XG4gICAgO1xuICAgIHNldFNpZ25VcFZpZXcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBuZXcgU2lnblVwVmlldyh0aGlzLm1vZGFsQm9keSk7XG4gICAgfVxuICAgIDtcbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnBhcmVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tcmlnaHQtLW9wZW4nKTtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLXJpZ2h0LS1vcGVuJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IG51bGw7XG4gICAgICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIDtcbiAgICAvKipcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINGB0L7QsdGL0YLQuNGPINC90LDQttCw0YLQuNGPINC90LBcbiAgICAgKiBAcGFyYW0gIHthbnl9IGxpc3RlbmVyIC0gQ2FsbGJhY2sg0YTRg9C90LrRhtC40Y8g0LTQu9GPINGB0L7QsdGL0YLQuNGPXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsUmlnaHRWaWV3O1xuIiwiO1xuY29uc3QgTW9kYWxSaWdodERhdGEgPSB7XG4gICAgdGl0bGU6ICfQktGF0L7QtCDQuNC70Lgg0YDQtdCz0LjRgdGC0YDQsNGG0LjRjycsXG4gICAgLy8gc2lnbkluVmlldzogU2lnbkluVmlldyxcbiAgICAvLyBzaWduVXBWaWV3OiBTaWduVXBWaWV3LFxuICAgIC8vIHNpZ25JbkRhdGE6IFNpZ25JbkRhdGEsXG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxSaWdodERhdGE7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IE5vdEZvdW5kVGVtcGxhdGUgZnJvbSAnLi9Ob3RGb3VuZFZpZXcuaGJzJztcbmltcG9ydCAnLi9Ob3RGb3VuZFZpZXcuY3NzJztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9CdXR0b25Db21wb25lbnQvQnV0dG9uQ29tcG9uZW50JztcbmNsYXNzIE5vdEZvdW5kVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBob21lQnV0dG9uO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIE5vdEZvdW5kVGVtcGxhdGUoe30pLCAnLnNwYWNlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3BhY2VfX2Vycm9yJyk7XG4gICAgICAgIHRoaXMuaG9tZUJ1dHRvbiA9IG5ldyBCdXR0b25Db21wb25lbnQoY29udGFpbmVyLCAnJywgJycsIHsgY2xhc3NOYW1lOiAnaG9tZS1idXR0b24nLCB0ZXh0OiAn0JLQtdGA0L3Rg9GC0YzRgdGPINC90LAg0LPQu9Cw0LLQvdGD0Y4nIH0pO1xuICAgICAgICB0aGlzLmhvbWVCdXR0b24uc2hvdygpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZEhvbWVCdXR0b25DbGljayhsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmhvbWVCdXR0b24uYmluZENsaWNrRXZlbnQobGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kVmlldztcbiIsImltcG9ydCBJVmlldyBmcm9tICcuLi9JVmlldy9JVmlldyc7XG5pbXBvcnQgUGVyc29uVGVtcGxhdGUgZnJvbSAnLi9QZXJzb25WaWV3Lmhicyc7XG5pbXBvcnQgJy4vUGVyc29uVmlldy5jc3MnO1xuY2xhc3MgUGVyc29uVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBQZXJzb25UZW1wbGF0ZSh7fSksICcucGVyc29uJyk7XG4gICAgfVxuICAgIDtcbiAgICBmaWxsUGVyc29uKGRhdGEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFBlcnNvblRlbXBsYXRlKGRhdGEpO1xuICAgIH1cbiAgICA7XG4gICAgYmluZENsaWNrRXZlbnQobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFBlcnNvblZpZXc7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IFBsYXllclRlbXBsYXRlIGZyb20gJy4vUGxheWVyVmlldy5oYnMnO1xuaW1wb3J0ICcuL1BsYXllclZpZXcuY3NzJztcbmltcG9ydCBCYXJDb21wb25lbnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvQmFyQ29tcG9uZW50L0JhckNvbXBvbmVudFwiO1xuY2xhc3MgUGxheWVyVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICB2aWRlb1BhbmVsO1xuICAgIHZpZGVvQmFyO1xuICAgIHZpZGVvO1xuICAgIHBsYXlCdG47XG4gICAgcGxheUJ0bkltZztcbiAgICBzdG9wQnRuO1xuICAgIHByb2dyZXNzO1xuICAgIHZvbHVtZUJ0bkltZztcbiAgICBwcm9ncmVzc1ZvbHVtZTtcbiAgICB0aW1lO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIFBsYXllclRlbXBsYXRlKHt9KSwgJyNmdWxsc2NyZWVuLW1vZGFsJyk7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX3BhbmVsJyk7XG4gICAgICAgIHRoaXMudmlkZW9QYW5lbC5wcmVwZW5kKHRoaXMucmVuZGVyVmlkZW9CYXIoKSk7XG4gICAgICAgIC8vIEV2ZW50RGlzcGF0Y2hlci5zdWJzY3JpYmUoJ3ZpZGVvLWJhci1ob3ZlcicsIHRoaXMudmlkZW9CYXIuKVxuICAgICAgICAvLyBzdXBlcihwYXJlbnQsIFBsYXllclRlbXBsYXRlKHt9KSwgJy53cmFwcGVyJyk7XG4gICAgICAgIC8vIHRoaXMudmlkZW8gPSA8SFRNTFZpZGVvRWxlbWVudD50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMucGxheUJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzX19wbGF5Jyk7XG4gICAgICAgIC8vIHRoaXMucGxheUJ0bkltZyA9IDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxheV9fYnRuJyk7XG4gICAgICAgIC8vIHRoaXMuc3RvcEJ0biA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzX19zdG9wJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMucHJvZ3Jlc3MgPSA8SFRNTFByb2dyZXNzRWxlbWVudD50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMudm9sdW1lQnRuSW1nID0gPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWVfX2J0bicpO1xuICAgICAgICAvLyB0aGlzLnByb2dyZXNzVm9sdW1lID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWVfX3Byb2dyZXNzJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMudGltZSA9IDxIVE1MRGl2RWxlbWVudD50aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzX190aW1lJyk7XG4gICAgICAgIC8vIHRoaXMudmlkZW9CYXIuXG4gICAgfVxuICAgIDtcbiAgICByZW5kZXJWaWRlb0JhcigpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMudmlkZW9CYXIgPSBuZXcgQmFyQ29tcG9uZW50KGRpdiwgJycsICcnLCB7IGJhckNsYXNzOiAndmlkZW9fX2JhcicgfSk7XG4gICAgICAgIHRoaXMudmlkZW9CYXIuc2hvdygpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJWaWV3O1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBTZXR0aW5nc1RlbXBsYXRlIGZyb20gJy4vU2V0dGluZ3NWaWV3Lmhicyc7XG5pbXBvcnQgU2V0dGluZ3NEYXRhIGZyb20gJy4vU2V0dGluZ3NWaWV3Q29uZmlnJztcbmltcG9ydCAnLi9TZXR0aW5nc1ZpZXcuY3NzJztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRm9ybUNvbXBvbmVudC9Gb3JtQ29tcG9uZW50JztcbmNsYXNzIFNldHRpbmdzVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBsZWZ0TWVudUNvbnRhaW5lcjtcbiAgICBzZXR0aW5nc0Zvcm1Db250YWluZXI7XG4gICAgbGVmdE1lbnU7XG4gICAgY3VycmVudEFjdGl2ZUl0ZW07XG4gICAgZm9ybTtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBTZXR0aW5nc1RlbXBsYXRlKFNldHRpbmdzRGF0YSksICdtYWluJyk7XG4gICAgICAgIHRoaXMubGVmdE1lbnVDb250YWluZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNldHRpbmdzX19sZWZ0LW1lbnUtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NGb3JtQ29udGFpbmVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZXR0aW5nc19fZm9ybScpO1xuICAgICAgICB0aGlzLmxlZnRNZW51ID0gKG5ldyBTZXR0aW5nc0RhdGEubGVmdE1lbnUuY29tcG9uZW50VHlwZSh0aGlzLmxlZnRNZW51Q29udGFpbmVyLCAnJywgJycsIFNldHRpbmdzRGF0YS5sZWZ0TWVudS5jb21wb25lbnREYXRhKSk7XG4gICAgICAgIHRoaXMubGVmdE1lbnUuc2hvdygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmVJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Db21wb25lbnQodGhpcy5zZXR0aW5nc0Zvcm1Db250YWluZXIsICcnLCAnJywgU2V0dGluZ3NEYXRhLmZvcm1EYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtLnNob3coKTtcbiAgICB9XG4gICAgO1xuICAgIGNoYW5nZUFjdGl2ZUxlZnRNZW51SXRlbShocmVmKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gdGhpcy5sZWZ0TWVudS5nZXRFbGVtZW50O1xuICAgICAgICBsaXN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbaHJlZj1cIiR7dGhpcy5jdXJyZW50QWN0aXZlSXRlbX1cIl1gKT8ucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnc2V0dGluZ3MtbGVmdC1tZW51X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlSXRlbSA9IGhyZWY7XG4gICAgICAgIGxpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtocmVmPVwiJHtocmVmfVwiXWApPy5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncy1sZWZ0LW1lbnVfX2l0ZW0tLWFjdGl2ZScpO1xuICAgIH1cbiAgICA7XG4gICAgc2hvdyhvcHRzKSB7XG4gICAgICAgIGlmICghb3B0cylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5mb3JtLnNldERhdGFUb0ZpZWxkcyhbeyBpZDogJ2VtYWlsJywgdmFsdWU6IG9wdHMudXNlci5lbWFpbCB9XSk7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICB9XG4gICAgO1xuICAgIGJpbmRDbGlja0V2ZW50KGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1ZpZXc7XG4iLCJpbXBvcnQgTGlzdENvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpc3RDb21wb25lbnQvTGlzdENvbXBvbmVudCc7XG5pbXBvcnQgTGlua0NvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0xpbmtDb21wb25lbnQvTGlua0NvbXBvbmVudCc7XG5jb25zdCBTZXR0aW5nc0RhdGEgPSB7XG4gICAgdGl0bGU6ICfQndCw0YHRgtGA0L7QudC60LgnLFxuICAgIGRlc2NyaXB0aW9uOiAn0J7RgdGC0LDQstGM0YLQtSDQutC+0L3RgtCw0LrRgtC90YvQtSDQtNCw0L3QvdGL0LUg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDRg9Cy0LXQtNC+0LzQu9C10L3QuNC5INC+0YIg0YHQtdGA0LLQuNGB0LAg0Lgg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjRjyDRgdC+INGB0LvRg9C20LHQvtC5INC/0L7QtNC00LXRgNC20LrQuC4nLFxuICAgIGZvcm1UaXRsZTogJ9Ca0L7QvdGC0LDQutGC0YsnLFxuICAgIGxlZnRNZW51OiB7XG4gICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgIGxpc3RDbGFzczogJ3NldHRpbmdzX19sZWZ0LW1lbnUnLFxuICAgICAgICAgICAgaXRlbUNsYXNzOiAnc2V0dGluZ3MtbGVmdC1tZW51X19pdGVtJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9zZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rQ2xhc3M6ICdzZXR0aW5ncy1sZWZ0LW1lbnUtaXRlbV9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dDogJ9Ce0YHQvdC+0LLQvdGL0LUnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3NldHRpbmdzL3BheW1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtDbGFzczogJ3NldHRpbmdzLWxlZnQtbWVudS1pdGVtX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0J7Qv9C70LDRgtCwINGD0YHQu9GD0LMnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRUeXBlOiBMaW5rQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtIcmVmOiAnL3NldHRpbmdzL3N1YnNjcmlwdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnc2V0dGluZ3MtbGVmdC1tZW51LWl0ZW1fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ6ICfQn9C+0LTQv9C40YHQutC4JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50VHlwZTogTGlua0NvbXBvbmVudFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9sb2dvdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0NsYXNzOiAnc2V0dGluZ3MtbGVmdC1tZW51LWl0ZW1fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua0ltYWdlU3JjOiAnL2ltZy9pY29ucy9sb2dvdXQuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtJbWFnZUNsYXNzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtJbWFnZVdpZHRoOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JLRi9C50YLQuCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFR5cGU6IExpbmtDb21wb25lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFR5cGU6IExpc3RDb21wb25lbnQsXG4gICAgfSxcbiAgICBmb3JtRGF0YToge1xuICAgICAgICBmb3JtSWQ6ICdzZXR0aW5nc19fZm9ybScsXG4gICAgICAgIGVuY3R5cGU6IHRydWUsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd2YXNpbGl5LnB1cGtpbkBtYWlsLnJ1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgIGlkOiAnYXZhdGFyJyxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICdpbWFnZS9qcGVnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICBpZDogJ2F2YXRhci1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgY2hlY2tib3hUZXh0OiAn0KPQtNCw0LvQuNGC0Ywg0LDQstCw0YLQsNGA0LrRgz8nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnaW5wdXQtY2hlY2tib3gnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcqKioqKioqKicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdyZXBlYXQtcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnKioqKioqKionLFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIGlkOiAnc2F2ZS1zdWJtaXQtYnRuJyxcbiAgICAgICAgICAgIHRleHQ6ICfQodC+0YXRgNCw0L3QuNGC0YwnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2F2ZS1idXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmtzOiBbXSxcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NEYXRhO1xuIiwiaW1wb3J0IElWaWV3IGZyb20gJy4uL0lWaWV3L0lWaWV3JztcbmltcG9ydCBTaWduSW5UZW1wbGF0ZSBmcm9tICcuL1NpZ25JblZpZXcuaGJzJztcbmltcG9ydCBTaWduSW5EYXRhIGZyb20gJy4vU2lnbkluVmlld0NvbmZpZyc7XG5pbXBvcnQgJy4vU2lnbkluVmlldy5jc3MnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Gb3JtQ29tcG9uZW50L0Zvcm1Db21wb25lbnQnO1xuY2xhc3MgU2lnbkluVmlldyBleHRlbmRzIElWaWV3IHtcbiAgICBmb3JtO1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQsIFNpZ25JblRlbXBsYXRlKHsgdGl0bGU6IFNpZ25JbkRhdGEudGl0bGUsIGRlc2NyaXB0aW9uOiBTaWduSW5EYXRhLmRlc2NyaXB0aW9uIH0pLCAnLmpzLXNpZ25JbicpO1xuICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUNvbXBvbmVudCh0aGlzLmVsZW1lbnQsICcnLCAnJywgU2lnbkluRGF0YS5mb3JtRGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybS5zaG93KCk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpZ25JblZpZXc7XG4iLCI7XG5jb25zdCBTaWduSW5EYXRhID0ge1xuICAgIHRpdGxlOiAn0JLQvtC50LTQuNGC0LUg0LjQu9C4INC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0YwnLFxuICAgIGRlc2NyaXB0aW9uOiAn0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINGB0LXRgNCw0LLQuNGB0L7QvCBGaWxtaXVtJyxcbiAgICBmb3JtRGF0YToge1xuICAgICAgICBmb3JtSWQ6ICdzaWduSW5fX2Zvcm0nLFxuICAgICAgICBpbnB1dHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsYXNzOiAnaW5wdXQtZmllbGRfX2lucHV0LS1kYXJrJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIGlkOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndmFzaWxpeS5wdXBraW5AbWFpbC5ydScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcqKioqKioqKicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIGlkOiAnc2lnbkluLXN1Ym1pdC1idG4nLFxuICAgICAgICAgICAgdGV4dDogJ9CS0L7QudGC0LgnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2lnbkluLWJ1dHRvbidcbiAgICAgICAgfSxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2xpbmstc2lnblVwJyxcbiAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9zaWduVXAnLFxuICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0J3QtdGCINCw0LrQutCw0YPQvdGC0LA/INCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRjycsXG4gICAgICAgICAgICAgICAgbGlua1RleHRDbGFzczogJ3NpZ25VcC1saW5rJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbkRhdGE7XG4iLCJpbXBvcnQgSVZpZXcgZnJvbSAnLi4vSVZpZXcvSVZpZXcnO1xuaW1wb3J0IFNpZ25VcFRlbXBsYXRlIGZyb20gJy4vU2lnblVwVmlldy5oYnMnO1xuaW1wb3J0IFNpZ25VcERhdGEgZnJvbSAnLi9TaWduVXBWaWV3Q29uZmlnJztcbmltcG9ydCAnLi9TaWduVXBWaWV3LmNzcyc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0Zvcm1Db21wb25lbnQvRm9ybUNvbXBvbmVudCc7XG5jbGFzcyBTaWduVXBWaWV3IGV4dGVuZHMgSVZpZXcge1xuICAgIGZvcm07XG4gICAgY29uc3RydWN0b3IocGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHBhcmVudCwgU2lnblVwVGVtcGxhdGUoeyB0aXRsZTogU2lnblVwRGF0YS50aXRsZSwgZGVzY3JpcHRpb246IFNpZ25VcERhdGEuZGVzY3JpcHRpb24gfSksICcuanMtc2lnblVwJyk7XG4gICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtQ29tcG9uZW50KHRoaXMuZWxlbWVudCwgJycsICcnLCBTaWduVXBEYXRhLmZvcm1EYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtLnNob3coKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGRlZmF1bHQgU2lnblVwVmlldztcbiIsIjtcbmNvbnN0IFNpZ25VcERhdGEgPSB7XG4gICAgdGl0bGU6ICfQktC+0LnQtNC40YLQtSDQuNC70Lgg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjCcsXG4gICAgZGVzY3JpcHRpb246ICfQp9GC0L7QsdGLINC90LDRh9Cw0YLRjCDQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0YHQtdGA0LDQstC40YHQvtC8IEZpbG1pdW0nLFxuICAgIGZvcm1EYXRhOiB7XG4gICAgICAgIGZvcm1JZDogJ3NpZ25VcF9fZm9ybScsXG4gICAgICAgIGlucHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlucHV0Q2xhc3M6ICdpbnB1dC1maWVsZF9faW5wdXQtLWRhcmsnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd2YXNpbGl5LnB1cGtpbkBtYWlsLnJ1JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJyoqKioqKioqJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5wdXRDbGFzczogJ2lucHV0LWZpZWxkX19pbnB1dC0tZGFyaycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBpZDogJ3JlcGVhdC1wYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcqKioqKioqKicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIGlkOiAnc2lnblVwLXN1Ym1pdC1idG4nLFxuICAgICAgICAgICAgdGV4dDogJ9CS0L7QudGC0LgnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2lnblVwLWJ1dHRvbidcbiAgICAgICAgfSxcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2xpbmstc2lnbkluJyxcbiAgICAgICAgICAgICAgICBsaW5rSHJlZjogJy9zaWduSW4nLFxuICAgICAgICAgICAgICAgIGxpbmtUZXh0OiAn0JXRgdGC0Ywg0LDQutC60LDRg9C90YI/INCS0L7QudGC0LgnLFxuICAgICAgICAgICAgICAgIGxpbmtUZXh0Q2xhc3M6ICdzaWduSW4tbGluaydcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBTaWduVXBEYXRhO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcC9BcHAnO1xuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnJ1bihsb2NhdGlvbi5wYXRobmFtZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=