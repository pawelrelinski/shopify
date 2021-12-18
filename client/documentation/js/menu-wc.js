"use strict";

customElements.define(
  "compodoc-menu",
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute("mode") === "normal";
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">client documentation</a>
                </li>

                <li class="divider"></li>
                ${
                  isNormalMode
                    ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>`
                    : ""
                }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${
                              isNormalMode
                                ? 'data-target="#modules-links"'
                                : 'data-target="#xs-modules-links"'
                            }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="modules-links"'
                            : 'id="xs-modules-links"'
                        }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"'
                                            : 'data-target="#xs-components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"'
                                            : 'id="xs-components-links-module-AppModule-4f45fca4c978ebcc41869cf2d9a38abe"'
                                        }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"'
                                            : 'data-target="#xs-components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"'
                                            : 'id="xs-components-links-module-HomePageModule-c483cc441dd583ddaae4ecc57eea413b"'
                                        }>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"'
                                            : 'data-target="#xs-components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"'
                                            : 'id="xs-components-links-module-LayoutModule-91a7f4976735b28ae31ca1e7480d40d0"'
                                        }>
                                            <li class="link">
                                                <a href="components/BannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenFlyoutMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenFlyoutMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileMenuCloseBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileMenuCloseBtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileMenuOpenBtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileMenuOpenBtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StructureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StructureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WomenFlyoutMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WomenFlyoutMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundPageModule.html" data-type="entity-link" >NotFoundPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"'
                                            : 'data-target="#xs-components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"'
                                            : 'id="xs-components-links-module-NotFoundPageModule-d8f5f5de93da706afd73f32d68d8a310"'
                                        }>
                                            <li class="link">
                                                <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundPageRoutingModule.html" data-type="entity-link" >NotFoundPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"'
                                            : 'data-target="#xs-components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"'
                                            : 'id="xs-components-links-module-ProductModule-62a944558085030baae1ee0c395097bc"'
                                        }>
                                            <li class="link">
                                                <a href="components/ProductsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsListElementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsListElementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsPageModule.html" data-type="entity-link" >ProductsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"'
                                            : 'data-target="#xs-components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"'
                                            : 'id="xs-components-links-module-ProductsPageModule-274ab656f70676ff8691b033b0894da9"'
                                        }>
                                            <li class="link">
                                                <a href="components/ProductsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsPageRoutingModule.html" data-type="entity-link" >ProductsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShopifyFooterModule.html" data-type="entity-link" >ShopifyFooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"'
                                            : 'data-target="#xs-components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"'
                                            : 'id="xs-components-links-module-ShopifyFooterModule-1882b69e78b7bce00f5ae75cb7a05f00"'
                                        }>
                                            <li class="link">
                                                <a href="components/ShopifyFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopifyFooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageModule.html" data-type="entity-link" >SignInPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${
                                          isNormalMode
                                            ? 'data-target="#components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"'
                                            : 'data-target="#xs-components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"'
                                        }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${
                                          isNormalMode
                                            ? 'id="components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"'
                                            : 'id="xs-components-links-module-SignInPageModule-b3147437926154d293242fd8975ce525"'
                                        }>
                                            <li class="link">
                                                <a href="components/SignInPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInPageRoutingModule.html" data-type="entity-link" >SignInPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#components-links"'
                            : 'data-target="#xs-components-links"'
                        }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="components-links"'
                            : 'id="xs-components-links"'
                        }>
                            <li class="link">
                                <a href="components/MobileMenuComponent.html" data-type="entity-link" >MobileMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WomenFlyoutMenuComponent.html" data-type="entity-link" >WomenFlyoutMenuComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#classes-links"'
                            : 'data-target="#xs-classes-links"'
                        }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="classes-links"'
                            : 'id="xs-classes-links"'
                        }>
                            <li class="link">
                                <a href="classes/Constants.html" data-type="entity-link" >Constants</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryStringParameters.html" data-type="entity-link" >QueryStringParameters</a>
                            </li>
                            <li class="link">
                                <a href="classes/SegmentsUrl.html" data-type="entity-link" >SegmentsUrl</a>
                            </li>
                            <li class="link">
                                <a href="classes/UrlBuilder.html" data-type="entity-link" >UrlBuilder</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${
                              isNormalMode
                                ? 'data-target="#injectables-links"'
                                : 'data-target="#xs-injectables-links"'
                            }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${
                              isNormalMode
                                ? 'id="injectables-links"'
                                : 'id="xs-injectables-links"'
                            }>
                                <li class="link">
                                    <a href="injectables/ApiEndpointService.html" data-type="entity-link" >ApiEndpointService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FlyoutMenuService.html" data-type="entity-link" >FlyoutMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MobileMenuService.html" data-type="entity-link" >MobileMenuService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${
                          isNormalMode
                            ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"'
                        }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${
                          isNormalMode
                            ? 'id="miscellaneous-links"'
                            : 'id="xs-miscellaneous-links"'
                        }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
      this.innerHTML = tp.strings;
    }
  }
);
