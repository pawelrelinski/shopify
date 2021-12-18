"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

customElements.define(
  "compodoc-menu",
  /*#__PURE__*/ (function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this);
      _this.isNormalMode = _this.getAttribute("mode") === "normal";
      return _this;
    }

    _createClass(_class, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: "render",
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">client documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : "",
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#modules-links"'
                  : 'data-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"'
                  : 'data-target="#xs-components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"'
                  : 'id="xs-components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"',
                '>\n                                            <li class="link">\n                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"'
                  : 'data-target="#xs-components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"'
                  : 'id="xs-components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"',
                '>\n                                            <li class="link">\n                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"'
                  : 'data-target="#xs-components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"'
                  : 'id="xs-components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"',
                '>\n                                            <li class="link">\n                                                <a href="components/BannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BannerComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/MenFlyoutMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenFlyoutMenuComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/MobileMenuCloseBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileMenuCloseBtnComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/MobileMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileMenuComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/MobileMenuOpenBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileMenuOpenBtnComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/StructureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StructureComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/WomenFlyoutMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WomenFlyoutMenuComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/NotFoundPageModule.html" data-type="entity-link" >NotFoundPageModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"'
                  : 'data-target="#xs-components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"'
                  : 'id="xs-components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"',
                '>\n                                            <li class="link">\n                                                <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundPageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/NotFoundPageRoutingModule.html" data-type="entity-link" >NotFoundPageRoutingModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"'
                  : 'data-target="#xs-components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"'
                  : 'id="xs-components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"',
                '>\n                                            <li class="link">\n                                                <a href="components/ProductsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsListComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/ProductsListElementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsListElementComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ProductsPageModule.html" data-type="entity-link" >ProductsPageModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"'
                  : 'data-target="#xs-components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"'
                  : 'id="xs-components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"',
                '>\n                                            <li class="link">\n                                                <a href="components/ProductsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsPageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ProductsPageRoutingModule.html" data-type="entity-link" >ProductsPageRoutingModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ShopifyFooterModule.html" data-type="entity-link" >ShopifyFooterModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"'
                  : 'data-target="#xs-components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"'
                  : 'id="xs-components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"',
                '>\n                                            <li class="link">\n                                                <a href="components/ShopifyFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopifyFooterComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/SignInPageModule.html" data-type="entity-link" >SignInPageModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"'
                  : 'data-target="#xs-components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"'
                  : 'id="xs-components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"',
                '>\n                                            <li class="link">\n                                                <a href="components/SignInPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInPageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/SignInPageRoutingModule.html" data-type="entity-link" >SignInPageRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links"'
                  : 'data-target="#xs-components-links"',
                '>\n                            <span class="icon ion-md-cog"></span>\n                            <span>Components</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links"'
                  : 'id="xs-components-links"',
                '>\n                            <li class="link">\n                                <a href="components/MobileMenuComponent.html" data-type="entity-link" >MobileMenuComponent</a>\n                            </li>\n                            <li class="link">\n                                <a href="components/WomenFlyoutMenuComponent.html" data-type="entity-link" >WomenFlyoutMenuComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#classes-links"'
                  : 'data-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/Constants.html" data-type="entity-link" >Constants</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/Product.html" data-type="entity-link" >Product</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/QueryStringParameters.html" data-type="entity-link" >QueryStringParameters</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/SegmentsUrl.html" data-type="entity-link" >SegmentsUrl</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UrlBuilder.html" data-type="entity-link" >UrlBuilder</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links"'
                  : 'data-target="#xs-injectables-links"',
                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links"'
                  : 'id="xs-injectables-links"',
                '>\n                                <li class="link">\n                                    <a href="injectables/ApiEndpointService.html" data-type="entity-link" >ApiEndpointService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/FlyoutMenuService.html" data-type="entity-link" >FlyoutMenuService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/MobileMenuService.html" data-type="entity-link" >MobileMenuService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#miscellaneous-links"'
                  : 'data-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="miscellaneous-links"'
                  : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n                        </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        '
              )
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);

    return _class;
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement))
);
