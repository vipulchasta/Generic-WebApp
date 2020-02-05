function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ngx-spinner type=\"square-jelly-box\" color=\"black\"></ngx-spinner>\n\n<app-nav-bar></app-nav-bar>\n\n  <main id=\"main\">\n\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n\n  </main>\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/dashboard/dashboard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/dashboard/dashboard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAdminDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"intro\" class=\"clearfix\">\n    <div class=\"container d-flex h-100\">\n        <div class=\"row justify-content-center align-self-center\">\n        <div class=\"col-md-6 intro-info order-md-first order-last\">\n            <h2>Dashboard<br>for Your <span>Website!</span></h2>\n            <div>\n            <a href=\"#about\" class=\"btn-get-started scrollto\">Get Started</a>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 intro-img order-md-last order-first\">\n            <img src=\"assets/img/intro-img.svg\" alt=\"\" class=\"img-fluid\">\n        </div>\n        </div>\n\n    </div>\n</section><!-- #intro -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/login/login.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/login/login.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAdminLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n\n<div class=\"container\">\n\n  <!-- Outer Row -->\n  <div class=\"row justify-content-center\">\n\n    <div class=\"col-xl-10 col-lg-12 col-md-9\">\n\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\n        <div class=\"card-body p-0\">\n          <!-- Nested Row within Card Body -->\n          <div class=\"row\">\n            <div class=\"col-lg-3\"></div>\n            <div class=\"col-lg-6\">\n              <div class=\"p-5\">\n                <div class=\"text-center\">\n                  <h1 class=\"h4 text-gray-900 mb-4\">Welcome Back!</h1>\n                </div>\n                <form class=\"user\">\n                  <div class=\"form-group\">\n                    <input type=\"password\" [(ngModel)]=\"inputUserPassword\" class=\"form-control form-control-user\" name=\"userPassword\" placeholder=\"Password\">\n                  </div>\n                  <a (click)=\"userLogin();\" class=\"btn btn-primary btn-user btn-block\">\n                    Login\n                  </a>\n                </form>\n                <hr>\n                <div class=\"text-center\">\n                  <a class=\"small\" href=\"https://me.BullTronics.com\">Need Help?</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<br>\n<br>\n<br>\n<br>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/logout/logout.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/logout/logout.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAdminLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>logout works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/manage-website/manage-website.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/manage-website/manage-website.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAdminManageWebsiteManageWebsiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<ul>\n    <li *ngFor=\"let recipient of websiteData.htmlPages | keyvalue\">\n        {{recipient.key}} --> {{recipient.value}}\n    </li>\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/view-logs/view-logs.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/view-logs/view-logs.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAdminViewLogsViewLogsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>view-logs works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/blog-post/blog-post.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/blog-post/blog-post.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentBlogPostBlogPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"about\" style=\"padding-top: 150px;\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n        <div class=\"col-lg-5 col-md-6\">\n            <div class=\"about-img\">\n            <img src=\"assets/img/about-img.jpg\" alt=\"\">\n            </div>\n        </div>\n\n        <div class=\"col-lg-7 col-md-6\">\n            <div class=\"about-content\">\n            <h2>{{data.title}}</h2>\n            <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>\n            <p [innerHTML]=\"data.content\"></p>\n            <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>\n            <ul>\n                <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>\n                <li><i class=\"ion-android-checkmark-circle\"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>\n                <li><i class=\"ion-android-checkmark-circle\"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>\n            </ul>\n            </div>\n        </div>\n        </div>\n    </div>\n\n</section><!-- #about -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/call-to-action/call-to-action.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/call-to-action/call-to-action.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentCallToActionCallToActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"call-to-action\" class=\"wow fadeInUp\">\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col-lg-9 text-center text-lg-left\">\n            <h3 class=\"cta-title\">{{data.title}}</h3>\n            <p class=\"cta-text\" [innerHTML]=\"data.content\"></p>\n        </div>\n        <div class=\"col-lg-3 cta-btn-container text-center\">\n            <a *ngIf=\"data.actionRouterLink!=null\" class=\"cta-btn align-middle\" routerLink=\"{{data.actionRouterLink}}\">{{data.actionText}}</a>\n            <a *ngIf=\"data.actionExternalLink!=null\" class=\"cta-btn align-middle\" href=\"{{data.actionExternalLink}}\">{{data.actionText}}</a>\n        </div>\n        </div>\n    </div>\n</section><!-- #call-to-action -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/clients-section/clients-section.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/clients-section/clients-section.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentClientsSectionClientsSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"testimonials\">\n    <div class=\"container\">\n\n        <header class=\"section-header\">\n        <h3>Testimonials</h3>\n        </header>\n\n        <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8\">\n\n            <div class=\"owl-carousel testimonials-carousel wow fadeInUp\">\n    \n            <div class=\"testimonial-item\">\n                <img src=\"assets/img/testimonial/testimonial-1.jpg\" class=\"testimonial-img\" alt=\"\">\n                <h3>Saul Goodman</h3>\n                <h4>Ceo &amp; Founder</h4>\n                <p>\n                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\n                </p>\n            </div>\n    \n            <div class=\"testimonial-item\">\n                <img src=\"assets/img/testimonial/testimonial-2.jpg\" class=\"testimonial-img\" alt=\"\">\n                <h3>Sara Wilsson</h3>\n                <h4>Designer</h4>\n                <p>\n                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n                </p>\n            </div>\n    \n            <div class=\"testimonial-item\">\n                <img src=\"assets/img/testimonial/testimonial-3.jpg\" class=\"testimonial-img\" alt=\"\">\n                <h3>Jena Karlis</h3>\n                <h4>Store Owner</h4>\n                <p>\n                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.\n                </p>\n            </div>\n    \n            <div class=\"testimonial-item\">\n                <img src=\"assets/img/testimonial/testimonial-4.jpg\" class=\"testimonial-img\" alt=\"\">\n                <h3>Matt Brandon</h3>\n                <h4>Freelancer</h4>\n                <p>\n                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\n                </p>\n            </div>\n\n            </div>\n\n        </div>\n        </div>\n\n\n    </div>\n    </section><!-- #testimonials -->\n\n\n    <!--==========================\n    Clients Section\n    ============================-->\n    <section id=\"clients\" class=\"wow fadeInUp\">\n    <div class=\"container\">\n\n        <header class=\"section-header\">\n        <h3>Our Clients</h3>\n        </header>\n\n        <div class=\"owl-carousel clients-carousel\">\n        <img src=\"assets/img/clients/client-1.png\" alt=\"\">\n        <img src=\"assets/img/clients/client-2.png\" alt=\"\">\n        <img src=\"assets/img/clients/client-3.png\" alt=\"\">\n        <img src=\"assets/img/clients/client-4.png\" alt=\"\">\n        <img src=\"assets/img/clients/client-5.png\" alt=\"\">\n        <img src=\"assets/img/clients/client-6.png\" alt=\"\">\n        <img src=\"assets/img/clients/client-7.png\" alt=\"\">\n        <img src=\"assets/img/clients/client-8.png\" alt=\"\">\n        </div>\n\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/clients/clients.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/clients/clients.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentClientsClientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>clients works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/counter/counter.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/counter/counter.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentCounterCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row counters\">\n\n        <div *ngFor=\"let counter of data.counterList\" class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">{{counter.counter}}</span>\n            <p>{{counter.title}}</p>\n        </div>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/faq/faq.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/faq/faq.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n    <!--==========================\n      Frequently Asked Questions Section\n    ============================-->\n    <section id=\"faq\">\n        <div class=\"container\">\n          <header class=\"section-header\">\n            <h3>Frequently Asked Questions</h3>\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n          </header>\n  \n          <ul id=\"faq-list\" class=\"wow fadeInUp\">\n            <li>\n              <a data-toggle=\"collapse\" class=\"collapsed\" href=\"#faq1\">Non consectetur a erat nam at lectus urna duis? <i class=\"ion-android-remove\"></i></a>\n              <div id=\"faq1\" class=\"collapse\" data-parent=\"#faq-list\">\n                <p>\n                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.\n                </p>\n              </div>\n            </li>\n  \n            <li>\n              <a data-toggle=\"collapse\" href=\"#faq2\" class=\"collapsed\">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class=\"ion-android-remove\"></i></a>\n              <div id=\"faq2\" class=\"collapse\" data-parent=\"#faq-list\">\n                <p>\n                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.\n                </p>\n              </div>\n            </li>\n  \n            <li>\n              <a data-toggle=\"collapse\" href=\"#faq3\" class=\"collapsed\">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class=\"ion-android-remove\"></i></a>\n              <div id=\"faq3\" class=\"collapse\" data-parent=\"#faq-list\">\n                <p>\n                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis\n                </p>\n              </div>\n            </li>\n  \n            <li>\n              <a data-toggle=\"collapse\" href=\"#faq4\" class=\"collapsed\">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class=\"ion-android-remove\"></i></a>\n              <div id=\"faq4\" class=\"collapse\" data-parent=\"#faq-list\">\n                <p>\n                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.\n                </p>\n              </div>\n            </li>\n  \n            <li>\n              <a data-toggle=\"collapse\" href=\"#faq5\" class=\"collapsed\">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class=\"ion-android-remove\"></i></a>\n              <div id=\"faq5\" class=\"collapse\" data-parent=\"#faq-list\">\n                <p>\n                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in\n                </p>\n              </div>\n            </li>\n  \n            <li>\n              <a data-toggle=\"collapse\" href=\"#faq6\" class=\"collapsed\">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class=\"ion-android-remove\"></i></a>\n              <div id=\"faq6\" class=\"collapse\" data-parent=\"#faq-list\">\n                <p>\n                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.\n                </p>\n              </div>\n            </li>\n  \n          </ul>\n  \n        </div>\n      </section><!-- #faq -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/features/features.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/features/features.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentFeaturesFeaturesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"features\" style=\"padding-top: 150px;\">\n    <div class=\"container\">\n\n        <div class=\"row feature-item\">\n        <div class=\"col-lg-6 wow fadeInUp\">\n            <img src=\"assets/img/features-1.svg\" class=\"img-fluid\" alt=\"\">\n        </div>\n        <div class=\"col-lg-6 wow fadeInUp pt-5 pt-lg-0\">\n            <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>\n            <p>\n            Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.\n            </p>\n            <p>\n            Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.\n            </p>\n        </div>\n        </div>\n\n        <div class=\"row feature-item mt-5 pt-5\">\n        <div class=\"col-lg-6 wow fadeInUp order-1 order-lg-2\">\n            <img src=\"assets/img/features-2.svg\" class=\"img-fluid\" alt=\"\">\n        </div>\n\n        <div class=\"col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1\">\n            <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>\n            <p>\n            Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. \n            </p>\n            <p>\n            Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.\n            </p>\n            <p>\n            Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.\n            </p>\n        </div>\n        \n        </div>\n\n    </div>\n</section>  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer id=\"footer\" class=\"section-bg\">\n  <div class=\"footer-top\">\n    <div class=\"container\">\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-6\">\n\n          <div class=\"row\">\n\n              <div class=\"col-sm-6\">\n\n                <div class=\"footer-info\">\n                  <h2>{{footer.title}}</h2>\n                  <p [innerHTML]=\"footer.description\"></p>\n                </div>\n\n                <div class=\"footer-newsletter\">\n                  <h4>Our Newsletter</h4>\n                  <p [innerHTML]=\"footer.newsletterDescription\"></p>\n                  <form (ngSubmit)=\"subscribeNewsletter();\">\n                    <input [(ngModel)]=\"userEmail\" type=\"email\" name=\"email\"><input type=\"submit\"  value=\"Subscribe\">\n                  </form>\n                </div>\n\n              </div>\n\n              <div class=\"col-sm-6\">\n                <div class=\"footer-links\">\n                  <h4>Useful Links</h4>\n                  <ul>\n                    <li *ngFor=\"let navLink of footer.navigationLinks\">\n                      <a routerLink=\"/{{navLink.link}}\">{{navLink.title}}</a>\n                    </li>\n                  </ul>\n                </div>\n\n                <div class=\"footer-links\">\n                  <h4>Contact Us</h4>\n                  <p *ngIf=\"websiteContact!=null && websiteContact.address!=null\">\n                    {{websiteContact.address.line1}} <br>\n                    {{websiteContact.address.line2}}, {{websiteContact.address.pincode}}<br>\n                    {{websiteContact.address.country}}  <br>\n                    <strong>Phone:</strong> {{websiteContact.contactNo1}}<br>\n                    <strong>Email:</strong> {{websiteContact.email}}<br>\n                  </p>\n                </div>\n\n                <div *ngIf=\"socialLinks != null\" class=\"social-links\">\n                  <a *ngIf=\"socialLinks.twitter\" href=\"{{socialLinks.twitter}}\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n                  <a *ngIf=\"socialLinks.facebook\" href=\"{{socialLinks.facebook}}\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n                  <a *ngIf=\"socialLinks.linkedin\" href=\"{{socialLinks.linkedin}}\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                  <a *ngIf=\"socialLinks.instagram\" href=\"{{socialLinks.instagram}}\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n                  <a *ngIf=\"socialLinks.github\" href=\"{{socialLinks.github}}\" class=\"github\"><i class=\"fa fa-github\"></i></a>\n                  <a *ngIf=\"socialLinks.whatsapp\" href=\"{{socialLinks.whatsapp}}\" class=\"whatsapp\"><i class=\"fa fa-whatsapp\"></i></a>\n                </div>\n\n              </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"col-lg-6\">\n\n          <div class=\"form\">\n            \n            <h4>Send us a message</h4>\n            <p [innerHTML]=\"footer.sendMessageDescription\"></p>\n            <form (ngSubmit)=\"submitMessage();\" action=\"\" role=\"form\" class=\"contactForm\">\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"userMessage.name\" type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"userMessage.emailId\" type=\"email\" class=\"form-control\" name=\"emailId\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group\">\n                <input [(ngModel)]=\"userMessage.subject\" type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n                <div class=\"validation\"></div>\n              </div>\n              <div class=\"form-group\">\n                <textarea [(ngModel)]=\"userMessage.content\" class=\"form-control\" name=\"content\" rows=\"5\" data-rule=\"minlen:50\" data-msg=\"Please write something for us, at least 50 chars\" placeholder=\"Message\"></textarea>\n                <div class=\"validation\"></div>\n              </div>\n\n              <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n              <div id=\"errormessage\"></div>\n\n              <div class=\"text-center\"><button type=\"submit\" title=\"Send Message\">Send Message</button></div>\n            </form>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"copyright\" [innerHTML]=\"footer.copyrightDisclaimer\">\n    </div>\n    <div class=\"credits\" [innerHTML]=\"footer.creditsDisclaimer\">\n    </div>\n  </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav-bar/nav-bar.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav-bar/nav-bar.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header id=\"header\">\n  <div id=\"topbar\">\n    <div class=\"container\">\n      <div *ngIf=\"socialLinks!=null\" class=\"social-links\">\n        <a *ngIf=\"socialLinks.twitter\" href=\"{{socialLinks.twitter}}\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n        <a *ngIf=\"socialLinks.facebook\" href=\"{{socialLinks.facebook}}\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n        <a *ngIf=\"socialLinks.linkedin\" href=\"{{socialLinks.linkedin}}\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n        <a *ngIf=\"socialLinks.instagram\" href=\"{{socialLinks.instagram}}\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n        <a *ngIf=\"socialLinks.github\" href=\"{{socialLinks.github}}\" class=\"github\"><i class=\"fa fa-github\"></i></a>\n        <a *ngIf=\"socialLinks.whatsapp\" href=\"{{socialLinks.whatsapp}}\" class=\"whatsapp\"><i class=\"fa fa-whatsapp\"></i></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"logo float-left\">\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <h1 class=\"text-light\"><a routerLink=\"/\" class=\"scrollto\"><span>{{navbar.title}}</span></a></h1>\n      <!-- <a href=\"#header\" class=\"scrollto\"><img src=\"img/logo.png\" alt=\"\" class=\"img-fluid\"></a> -->\n    </div>\n    <div id=\"navbarLoaded\" *ngIf=\"navbar!=null && navbar.navigationLinks!=null\"></div>\n    <nav class=\"main-nav float-right d-none d-lg-block\">\n      <ul *ngIf=\"navbar!=null\">\n        <li *ngFor=\"let navLink of navbar.navigationLinks\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          <a routerLink=\"/{{navLink.link}}\">{{navLink.title}}</a>\n        </li>\n      </ul>\n    </nav><!-- .main-nav -->    \n  </div>\n</header><!-- #header -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-landing/page-landing.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-landing/page-landing.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentPageLandingPageLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"intro\" class=\"clearfix\">\n    <div class=\"container d-flex h-100\">\n        <div class=\"row justify-content-center align-self-center\">\n        <div class=\"col-md-6 intro-info order-md-first order-last\">\n            <h2>Rapid Solutions<br>for Your <span>Business!</span></h2>\n            <div>\n            <a href=\"#about\" class=\"btn-get-started scrollto\">Get Started</a>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 intro-img order-md-last order-first\">\n            <img src=\"assets/img/intro-img.svg\" alt=\"\" class=\"img-fluid\">\n        </div>\n        </div>\n\n    </div>\n</section><!-- #intro -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-not-found/page-not-found.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-not-found/page-not-found.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<section id=\"about\" style=\"padding-top: 150px;\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n        <div class=\"col-lg-5 col-md-6\">\n            <div class=\"about-img\">\n            <img src=\"assets/img/about-img.jpg\" alt=\"\">\n            </div>\n        </div>\n\n        <div class=\"col-lg-7 col-md-6\">\n            <div class=\"about-content\">\n            <h2>Page Not Found</h2>\n            <h3>Resource you are looking is currenly not available.</h3>\n            <p>The HTTP 404, 404 Not Found, 404, Page Not Found, or Server Not Found error message is a Hypertext Transfer Protocol standard response code, in computer network communications, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested.</p>\n            <ul>\n                <li><i class=\"ion-android-checkmark-circle\"></i> Check your target URL.</li>\n                <li><i class=\"ion-android-checkmark-circle\"></i> Check the domain name.</li>\n                <li><i class=\"ion-android-checkmark-circle\"></i> Contact us.</li>\n            </ul>\n            </div>\n        </div>\n        </div>\n    </div>\n\n</section><!-- #about -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-show-html/page-show-html.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-show-html/page-show-html.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentPageShowHtmlPageShowHtmlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let websitePageSegment of pageData.body\">\n    <app-portfolio *ngIf=\"websitePageSegment.component=='portfolio'\" [data]=\"websitePageSegment.data\"></app-portfolio>\n    <app-team *ngIf=\"websitePageSegment.component=='team'\" [data]=\"websitePageSegment.data\"></app-team>\n    <app-features *ngIf=\"websitePageSegment.component=='features'\" [data]=\"websitePageSegment.data\"></app-features>\n    <app-services *ngIf=\"websitePageSegment.component=='services'\" [data]=\"websitePageSegment.data\"></app-services>\n    <app-pricing *ngIf=\"websitePageSegment.component=='pricing'\" [data]=\"websitePageSegment.data\"></app-pricing>\n    <app-faq *ngIf=\"websitePageSegment.component=='faq'\" [data]=\"websitePageSegment.data\"></app-faq>\n    <app-call-to-action *ngIf=\"websitePageSegment.component=='call-to-action'\" [data]=\"websitePageSegment.data\"></app-call-to-action>\n    <app-blog-post *ngIf=\"websitePageSegment.component=='blog-post'\" [data]=\"websitePageSegment.data\"></app-blog-post>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/portfolio/portfolio.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/portfolio/portfolio.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentPortfolioPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--==========================\n  Portfolio Section\n============================-->\n<section id=\"portfolio\" class=\"section-bg\">\n  <div class=\"container\">\n\n    <header class=\"section-header\">\n      <h3 class=\"section-title\">Our Portfolio</h3>\n    </header>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul id=\"portfolio-flters\">\n          <li data-filter=\"*\" class=\"filter-active\">All</li>\n          <li data-filter=\".filter-app\">App</li>\n          <li data-filter=\".filter-card\">Card</li>\n          <li data-filter=\".filter-web\">Web</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"row portfolio-container\" style=\"position: relative; height: 1081.05px;\">\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" style=\"position: absolute; left: 0px; top: 0px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/app1.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">App 1</a></h4>\n            <p>App</p>\n            <div>\n              <a href=\"/assets/img/portfolio/app1.jpg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\" style=\"position: absolute; left: 380px; top: 0px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/web3.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">Web 3</a></h4>\n            <p>Web</p>\n            <div>\n              <a href=\"/assets/img/portfolio/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\" style=\"position: absolute; left: 760px; top: 0px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/app2.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">App 2</a></h4>\n            <p>App</p>\n            <div>\n              <a href=\"/assets/img/portfolio/app2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\" style=\"position: absolute; left: 760px; top: 226px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/card2.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">Card 2</a></h4>\n            <p>Card</p>\n            <div>\n              <a href=\"/assets/img/portfolio/card2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.1s\" style=\"position: absolute; left: 380px; top: 264px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/web2.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">Web 2</a></h4>\n            <p>Web</p>\n            <div>\n              <a href=\"/assets/img/portfolio/web2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\" data-wow-delay=\"0.2s\" style=\"position: absolute; left: 0px; top: 384px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/app3.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">App 3</a></h4>\n            <p>App</p>\n            <div>\n              <a href=\"/assets/img/portfolio/app3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\" style=\"position: absolute; left: 0px; top: 646px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/card1.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">Card 1</a></h4>\n            <p>Card</p>\n            <div>\n              <a href=\"/assets/img/portfolio/card1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\" data-wow-delay=\"0.1s\" style=\"position: absolute; left: 760px; top: 777px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/card3.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">Card 3</a></h4>\n            <p>Card</p>\n            <div>\n              <a href=\"/assets/img/portfolio/card3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\" data-wow-delay=\"0.2s\" style=\"position: absolute; left: 380px; top: 817px;\">\n        <div class=\"portfolio-wrap\">\n          <img src=\"/assets/img/portfolio/web1.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">Web 1</a></h4>\n            <p>Web</p>\n            <div>\n              <a href=\"/assets/img/portfolio/web1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n              <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/pricing/pricing.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/pricing/pricing.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentPricingPricingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"pricing\" class=\"wow fadeInUp section-bg\">\n  <div class=\"container\">\n\n    <header class=\"section-header\">\n      <h3>Pricing</h3>\n      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n    </header>\n\n    <div class=\"row flex-items-xs-middle flex-items-xs-center\">\n\n      <!-- Basic Plan  -->\n      <div class=\"col-xs-12 col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3><span class=\"currency\">$</span>19<span class=\"period\">/month</span></h3>\n          </div>\n          <div class=\"card-block\">\n            <h4 class=\"card-title\"> \n              Basic Plan\n            </h4>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">Odio animi voluptates</li>\n              <li class=\"list-group-item\">Inventore quisquam et</li>\n              <li class=\"list-group-item\">Et perspiciatis suscipit</li>\n              <li class=\"list-group-item\">24/7 Support System</li>\n            </ul>\n            <a href=\"#\" class=\"btn\">Choose Plan</a>\n          </div>\n        </div>\n      </div>\n\n      <!-- Regular Plan  -->\n      <div class=\"col-xs-12 col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3><span class=\"currency\">$</span>29<span class=\"period\">/month</span></h3>\n          </div>\n          <div class=\"card-block\">\n            <h4 class=\"card-title\"> \n              Regular Plan\n            </h4>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">Odio animi voluptates</li>\n              <li class=\"list-group-item\">Inventore quisquam et</li>\n              <li class=\"list-group-item\">Et perspiciatis suscipit</li>\n              <li class=\"list-group-item\">24/7 Support System</li>\n            </ul>\n            <a href=\"#\" class=\"btn\">Choose Plan</a>\n          </div>\n        </div>\n      </div>\n\n      <!-- Premium Plan  -->\n      <div class=\"col-xs-12 col-lg-4\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3><span class=\"currency\">$</span>39<span class=\"period\">/month</span></h3>\n          </div>\n          <div class=\"card-block\">\n            <h4 class=\"card-title\"> \n              Premium Plan\n            </h4>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">Odio animi voluptates</li>\n              <li class=\"list-group-item\">Inventore quisquam et</li>\n              <li class=\"list-group-item\">Et perspiciatis suscipit</li>\n              <li class=\"list-group-item\">24/7 Support System</li>\n            </ul>\n            <a href=\"#\" class=\"btn\">Choose Plan</a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</section><!-- #pricing -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/services/services.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/services/services.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--==========================\n  Services Section\n============================-->\n<section id=\"services\" class=\"section-bg\" style=\"padding-top: 150px;\">\n    <div class=\"container\">\n  \n      <header class=\"section-header\">\n        <h3>{{data.title}}</h3>\n        <p>{{data.content}}</p>\n      </header>\n  \n      <div class=\"row\">\n  \n        <div *ngFor=\"let service of data.servicesList; let i = index;\" class=\"col-md-6 col-lg-4 wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n          <div class=\"box\">\n            <div class=\"icon\" [style.color]=\"service.iconBackground\" style=\"background: #fceef3;\">\n              <i class=\"{{service.iconClass}}\"></i>\n            </div>\n            <h4 class=\"title\">\n              <a *ngIf=\"service.routerLink != null\"  routerLink=\"{{service.routerLink}}\">{{service.title}}</a>\n              <a *ngIf=\"service.externalLink != null\"  href=\"{{service.externalLink}}\">{{service.title}}</a>\n              <a *ngIf=\"service.routerLink == null && service.externalLink == null\" >{{service.title}}</a>\n            </h4>\n            <p class=\"description\" style=\"text-align: justify; text-justify: inter-word;\">{{service.content}}</p>\n          </div>\n        </div>\n  \n      </div>\n  \n    </div>\n  </section><!-- #services -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/team/team.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/team/team.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentTeamTeamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"team\" class=\"section-bg\" style=\"padding-top: 150px;\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h3>{{data.title}}</h3>\n      <p>{{data.content}}</p>\n    </div>\n\n    <div class=\"row\">\n\n      <div *ngFor=\"let teamMember of data.teamList\" class=\"col-lg-3 col-md-6 wow fadeInUp\">\n        <div class=\"member\">\n          <img [defaultImage]=\"defaultImage\" [lazyLoad]=\"teamMember.imageLink\" class=\"img-fluid\" alt=\"\">\n          <div class=\"member-info\">\n            <div class=\"member-info-content\">\n              <h4>{{teamMember.name}}</h4>\n              <span>{{teamMember.title}}</span>\n              <div class=\"social\">\n                <a *ngIf=\"teamMember.socialLink.twitter!=null\" href=\"{{teamMember.socialLink.twitter}}\"><i class=\"fa fa-twitter\"></i></a>\n                <a *ngIf=\"teamMember.socialLink.facebook!=null\" href=\"{{teamMember.socialLink.facebook}}\"><i class=\"fa fa-facebook\"></i></a>\n                <a *ngIf=\"teamMember.socialLink.linkedin!=null\" href=\"{{teamMember.socialLink.linkedin}}\"><i class=\"fa fa-linkedin\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <!-- Team Member-->\n      <div class=\"col-xl-3 col-md-6 mb-4\" *ngFor=\"let teamMember of data.teamList\">\n        <div class=\"card border-0 shadow\">\n          <img [defaultImage]=\"defaultImage\" [lazyLoad]=\"teamMember.imageLink\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body text-center\">\n            <h5 class=\"card-title mb-0\">{{teamMember.name}}</h5>\n            <div class=\"card-text text-black-50\">{{teamMember.title}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section><!-- #team -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/why-us/why-us.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/why-us/why-us.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentWhyUsWhyUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <!--==========================\n      Why Us Section\n    ============================-->\n    <section id=\"why-us\" class=\"wow fadeIn\">\n        <div class=\"container-fluid\">\n          \n          <header class=\"section-header\">\n            <h3>Why choose us?</h3>\n            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>\n          </header>\n  \n          <div class=\"row\">\n  \n            <div class=\"col-lg-6\">\n              <div class=\"why-us-img\">\n                <img src=\"assets/img/why-us.jpg\" alt=\"\" class=\"img-fluid\">\n              </div>\n            </div>\n  \n            <div class=\"col-lg-6\">\n              <div class=\"why-us-content\">\n                <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>\n                <p>\n                  Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur\n                  et temporibus. Labore est odio.\n  \n                  Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..\n                </p>\n  \n                <div class=\"features wow bounceInUp clearfix\">\n                  <i class=\"fa fa-diamond\" style=\"color: #f058dc;\"></i>\n                  <h4>Corporis dolorem</h4>\n                  <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>\n                </div>\n  \n                <div class=\"features wow bounceInUp clearfix\">\n                  <i class=\"fa fa-object-group\" style=\"color: #ffb774;\"></i>\n                  <h4>Eum ut aspernatur</h4>\n                  <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>\n                </div>\n                \n                <div class=\"features wow bounceInUp clearfix\">\n                  <i class=\"fa fa-language\" style=\"color: #589af1;\"></i>\n                  <h4>Voluptates dolores</h4>\n                  <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>\n                </div>\n                \n              </div>\n  \n            </div>\n  \n          </div>\n  \n        </div>\n        <app-counter></app-counter>\n    </section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_page_landing_page_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/page-landing/page-landing.component */
    "./src/app/component/page-landing/page-landing.component.ts");
    /* harmony import */


    var _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/page-not-found/page-not-found.component */
    "./src/app/component/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _component_page_show_html_page_show_html_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/page-show-html/page-show-html.component */
    "./src/app/component/page-show-html/page-show-html.component.ts");
    /* harmony import */


    var _component_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/admin/dashboard/dashboard.component */
    "./src/app/component/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _component_admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/admin/login/login.component */
    "./src/app/component/admin/login/login.component.ts");
    /* harmony import */


    var _component_admin_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/admin/logout/logout.component */
    "./src/app/component/admin/logout/logout.component.ts");
    /* harmony import */


    var _component_admin_manage_website_manage_website_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/admin/manage-website/manage-website.component */
    "./src/app/component/admin/manage-website/manage-website.component.ts");
    /* harmony import */


    var _component_admin_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/admin/view-logs/view-logs.component */
    "./src/app/component/admin/view-logs/view-logs.component.ts");

    var routes = [{
      path: '',
      component: _component_page_landing_page_landing_component__WEBPACK_IMPORTED_MODULE_3__["PageLandingComponent"]
    }, {
      path: '404',
      component: _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }, {
      path: 'login',
      component: _component_admin_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }, {
      path: 'logout',
      component: _component_admin_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"]
    }, {
      path: 'admin',
      component: _component_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
    }, {
      path: 'admin/manage',
      component: _component_admin_manage_website_manage_website_component__WEBPACK_IMPORTED_MODULE_9__["ManageWebsiteComponent"]
    }, {
      path: 'admin/logs',
      component: _component_admin_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_10__["ViewLogsComponent"]
    }, {
      path: ':pageId',
      component: _component_page_show_html_page_show_html_component__WEBPACK_IMPORTED_MODULE_5__["PageShowHTMLComponent"]
    }, {
      path: '**',
      component: _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Generic-WebApp';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onActivate",
        value: function onActivate(event) {
          var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;

            if (pos > 0) {
              window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
              window.clearInterval(scrollToTop);
            }
          }, 16);
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./component/page-not-found/page-not-found.component */
    "./src/app/component/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _component_page_landing_page_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./component/page-landing/page-landing.component */
    "./src/app/component/page-landing/page-landing.component.ts");
    /* harmony import */


    var _component_page_show_html_page_show_html_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./component/page-show-html/page-show-html.component */
    "./src/app/component/page-show-html/page-show-html.component.ts");
    /* harmony import */


    var _component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./component/nav-bar/nav-bar.component */
    "./src/app/component/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component/footer/footer.component */
    "./src/app/component/footer/footer.component.ts");
    /* harmony import */


    var _component_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./component/portfolio/portfolio.component */
    "./src/app/component/portfolio/portfolio.component.ts");
    /* harmony import */


    var _component_team_team_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./component/team/team.component */
    "./src/app/component/team/team.component.ts");
    /* harmony import */


    var _component_services_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./component/services/services.component */
    "./src/app/component/services/services.component.ts");
    /* harmony import */


    var _component_clients_clients_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./component/clients/clients.component */
    "./src/app/component/clients/clients.component.ts");
    /* harmony import */


    var _component_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./component/pricing/pricing.component */
    "./src/app/component/pricing/pricing.component.ts");
    /* harmony import */


    var _component_faq_faq_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./component/faq/faq.component */
    "./src/app/component/faq/faq.component.ts");
    /* harmony import */


    var _component_call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./component/call-to-action/call-to-action.component */
    "./src/app/component/call-to-action/call-to-action.component.ts");
    /* harmony import */


    var _component_features_features_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./component/features/features.component */
    "./src/app/component/features/features.component.ts");
    /* harmony import */


    var _component_clients_section_clients_section_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./component/clients-section/clients-section.component */
    "./src/app/component/clients-section/clients-section.component.ts");
    /* harmony import */


    var _module_website_website_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./module/website/website.module */
    "./src/app/module/website/website.module.ts");
    /* harmony import */


    var _service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");
    /* harmony import */


    var _component_counter_counter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./component/counter/counter.component */
    "./src/app/component/counter/counter.component.ts");
    /* harmony import */


    var _component_why_us_why_us_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./component/why-us/why-us.component */
    "./src/app/component/why-us/why-us.component.ts");
    /* harmony import */


    var _component_admin_login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./component/admin/login/login.component */
    "./src/app/component/admin/login/login.component.ts");
    /* harmony import */


    var _component_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./component/admin/dashboard/dashboard.component */
    "./src/app/component/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _component_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./component/blog-post/blog-post.component */
    "./src/app/component/blog-post/blog-post.component.ts");
    /* harmony import */


    var _component_admin_logout_logout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./component/admin/logout/logout.component */
    "./src/app/component/admin/logout/logout.component.ts");
    /* harmony import */


    var _component_admin_manage_website_manage_website_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./component/admin/manage-website/manage-website.component */
    "./src/app/component/admin/manage-website/manage-website.component.ts");
    /* harmony import */


    var _component_admin_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./component/admin/view-logs/view-logs.component */
    "./src/app/component/admin/view-logs/view-logs.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _component_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _component_page_landing_page_landing_component__WEBPACK_IMPORTED_MODULE_11__["PageLandingComponent"], _component_page_show_html_page_show_html_component__WEBPACK_IMPORTED_MODULE_12__["PageShowHTMLComponent"], _component_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"], _component_team_team_component__WEBPACK_IMPORTED_MODULE_16__["TeamComponent"], _component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"], _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _component_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"], _component_clients_clients_component__WEBPACK_IMPORTED_MODULE_18__["ClientsComponent"], _component_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_19__["PricingComponent"], _component_faq_faq_component__WEBPACK_IMPORTED_MODULE_20__["FAQComponent"], _component_call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_21__["CallToActionComponent"], _component_features_features_component__WEBPACK_IMPORTED_MODULE_22__["FeaturesComponent"], _component_clients_section_clients_section_component__WEBPACK_IMPORTED_MODULE_23__["ClientsSectionComponent"], _component_counter_counter_component__WEBPACK_IMPORTED_MODULE_26__["CounterComponent"], _component_why_us_why_us_component__WEBPACK_IMPORTED_MODULE_27__["WhyUsComponent"], _component_admin_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"], _component_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"], _component_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_30__["BlogPostComponent"], _component_admin_logout_logout_component__WEBPACK_IMPORTED_MODULE_31__["LogoutComponent"], _component_admin_manage_website_manage_website_component__WEBPACK_IMPORTED_MODULE_32__["ManageWebsiteComponent"], _component_admin_view_logs_view_logs_component__WEBPACK_IMPORTED_MODULE_33__["ViewLogsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["LazyLoadImageModule"].forRoot({
        preset: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__["intersectionObserverPreset"] // <-- tell LazyLoadImage that you want to use IntersectionObserver

      }), _module_website_website_module__WEBPACK_IMPORTED_MODULE_24__["WebsiteModule"]],
      providers: [_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_25__["DataRetrievalService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/admin/dashboard/dashboard.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/component/admin/dashboard/dashboard.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAdminDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/admin/dashboard/dashboard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component/admin/dashboard/dashboard.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/user-authentication/user-authentication.service */
    "./src/app/service/user-authentication/user-authentication.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(spinner, titleService, router, userAuthenticationService) {
        _classCallCheck(this, DashboardComponent);

        this.spinner = spinner;
        this.titleService = titleService;
        this.router = router;
        this.userAuthenticationService = userAuthenticationService;
        titleService.setTitle("Dashboard");

        if (userAuthenticationService.isUserLoggedIn() == false) {
          this.router.navigate(['/login']);
          return;
        }
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthenticationService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/component/admin/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/component/admin/login/login.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/component/admin/login/login.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAdminLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/admin/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/admin/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentAdminLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/user-authentication/user-authentication.service */
    "./src/app/service/user-authentication/user-authentication.service.ts");
    /* harmony import */


    var src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(dataRetrievalService, spinner, titleService, router, userAuthenticationService) {
        _classCallCheck(this, LoginComponent);

        this.dataRetrievalService = dataRetrievalService;
        this.spinner = spinner;
        this.titleService = titleService;
        this.router = router;
        this.userAuthenticationService = userAuthenticationService;
        this.inputUserPassword = "";
        this.error = "";
        titleService.setTitle("Login || Admin Dashboard");

        if (userAuthenticationService.isUserLoggedIn() == true) {
          this.router.navigate(['/admin']);
          return;
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "userLogin",
        value: function userLogin() {
          var _this = this;

          this.spinner.show();
          this.dataRetrievalService.getAdminData(this.inputUserPassword).subscribe(function (data) {
            /* Condition to verify that the data received is not valid (Due to token invalid) */
            if (data == null || data["data"] == null) {
              /* Token is not valid */
              _this.spinner.hide();

              return;
            }

            _this.userAuthenticationService.makeUserLoggedIn(_this.inputUserPassword);

            _this.spinner.hide();

            _this.router.navigate(['/admin']);
          }, function (error) {
            _this.error = error;
            console.log(error);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_6__["DataRetrievalService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_5__["UserAuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/component/admin/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/component/admin/logout/logout.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/component/admin/logout/logout.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAdminLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/admin/logout/logout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/admin/logout/logout.component.ts ***!
    \************************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentAdminLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/service/user-authentication/user-authentication.service */
    "./src/app/service/user-authentication/user-authentication.service.ts");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(dataRetrievalService, spinner, titleService, router, userAuthenticationService) {
        _classCallCheck(this, LogoutComponent);

        this.dataRetrievalService = dataRetrievalService;
        this.spinner = spinner;
        this.titleService = titleService;
        this.router = router;
        this.userAuthenticationService = userAuthenticationService;
        titleService.setTitle("Logout || Admin Dashboard");

        if (userAuthenticationService.isUserLoggedIn() == true) {
          userAuthenticationService.makeUserLoggedOut();
        }

        this.router.navigate(['/']);
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["DataRetrievalService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthenticationService"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/component/admin/logout/logout.component.css")).default]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/component/admin/manage-website/manage-website.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/component/admin/manage-website/manage-website.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAdminManageWebsiteManageWebsiteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi9tYW5hZ2Utd2Vic2l0ZS9tYW5hZ2Utd2Vic2l0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/admin/manage-website/manage-website.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/component/admin/manage-website/manage-website.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ManageWebsiteComponent */

  /***/
  function srcAppComponentAdminManageWebsiteManageWebsiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageWebsiteComponent", function () {
      return ManageWebsiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");
    /* harmony import */


    var src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/module/website/website.module */
    "./src/app/module/website/website.module.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ManageWebsiteComponent =
    /*#__PURE__*/
    function () {
      function ManageWebsiteComponent(dataRetrievalService, spinner, titleService) {
        _classCallCheck(this, ManageWebsiteComponent);

        this.dataRetrievalService = dataRetrievalService;
        this.spinner = spinner;
        this.titleService = titleService;
        this.websiteData = new src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__["WebSiteData"]();
        this.error = "";
      }

      _createClass(ManageWebsiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.titleService.setTitle("Manage Pages");
          this.spinner.show();
          this.dataRetrievalService.getWebsiteData().subscribe(function (data) {
            _this2.websiteData = data;

            _this2.spinner.hide();
          }, function (error) {
            _this2.error = error;
            console.log(error);

            _this2.spinner.hide();
          });
        }
      }]);

      return ManageWebsiteComponent;
    }();

    ManageWebsiteComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["DataRetrievalService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
      }];
    };

    ManageWebsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-website',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-website.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/manage-website/manage-website.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-website.component.css */
      "./src/app/component/admin/manage-website/manage-website.component.css")).default]
    })], ManageWebsiteComponent);
    /***/
  },

  /***/
  "./src/app/component/admin/view-logs/view-logs.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/component/admin/view-logs/view-logs.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAdminViewLogsViewLogsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZG1pbi92aWV3LWxvZ3Mvdmlldy1sb2dzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/admin/view-logs/view-logs.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component/admin/view-logs/view-logs.component.ts ***!
    \******************************************************************/

  /*! exports provided: ViewLogsComponent */

  /***/
  function srcAppComponentAdminViewLogsViewLogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewLogsComponent", function () {
      return ViewLogsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewLogsComponent =
    /*#__PURE__*/
    function () {
      function ViewLogsComponent() {
        _classCallCheck(this, ViewLogsComponent);
      }

      _createClass(ViewLogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewLogsComponent;
    }();

    ViewLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-logs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-logs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/view-logs/view-logs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-logs.component.css */
      "./src/app/component/admin/view-logs/view-logs.component.css")).default]
    })], ViewLogsComponent);
    /***/
  },

  /***/
  "./src/app/component/blog-post/blog-post.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/component/blog-post/blog-post.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentBlogPostBlogPostComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ibG9nLXBvc3QvYmxvZy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/blog-post/blog-post.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/blog-post/blog-post.component.ts ***!
    \************************************************************/

  /*! exports provided: BlogPostComponent */

  /***/
  function srcAppComponentBlogPostBlogPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function () {
      return BlogPostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlogPostComponent =
    /*#__PURE__*/
    function () {
      function BlogPostComponent() {
        _classCallCheck(this, BlogPostComponent);
      }

      _createClass(BlogPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogPostComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BlogPostComponent.prototype, "data", void 0);
    BlogPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog-post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/blog-post/blog-post.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog-post.component.css */
      "./src/app/component/blog-post/blog-post.component.css")).default]
    })], BlogPostComponent);
    /***/
  },

  /***/
  "./src/app/component/call-to-action/call-to-action.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/component/call-to-action/call-to-action.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentCallToActionCallToActionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYWxsLXRvLWFjdGlvbi9jYWxsLXRvLWFjdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/call-to-action/call-to-action.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/component/call-to-action/call-to-action.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CallToActionComponent */

  /***/
  function srcAppComponentCallToActionCallToActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallToActionComponent", function () {
      return CallToActionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CallToActionComponent =
    /*#__PURE__*/
    function () {
      function CallToActionComponent() {
        _classCallCheck(this, CallToActionComponent);
      }

      _createClass(CallToActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CallToActionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CallToActionComponent.prototype, "data", void 0);
    CallToActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-call-to-action',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./call-to-action.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/call-to-action/call-to-action.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./call-to-action.component.css */
      "./src/app/component/call-to-action/call-to-action.component.css")).default]
    })], CallToActionComponent);
    /***/
  },

  /***/
  "./src/app/component/clients-section/clients-section.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/component/clients-section/clients-section.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentClientsSectionClientsSectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jbGllbnRzLXNlY3Rpb24vY2xpZW50cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/clients-section/clients-section.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/component/clients-section/clients-section.component.ts ***!
    \************************************************************************/

  /*! exports provided: ClientsSectionComponent */

  /***/
  function srcAppComponentClientsSectionClientsSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsSectionComponent", function () {
      return ClientsSectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClientsSectionComponent =
    /*#__PURE__*/
    function () {
      function ClientsSectionComponent() {
        _classCallCheck(this, ClientsSectionComponent);
      }

      _createClass(ClientsSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientsSectionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ClientsSectionComponent.prototype, "data", void 0);
    ClientsSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clients-section',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clients-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/clients-section/clients-section.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clients-section.component.css */
      "./src/app/component/clients-section/clients-section.component.css")).default]
    })], ClientsSectionComponent);
    /***/
  },

  /***/
  "./src/app/component/clients/clients.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/component/clients/clients.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentClientsClientsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/clients/clients.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/component/clients/clients.component.ts ***!
    \********************************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppComponentClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClientsComponent =
    /*#__PURE__*/
    function () {
      function ClientsComponent() {
        _classCallCheck(this, ClientsComponent);
      }

      _createClass(ClientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ClientsComponent.prototype, "data", void 0);
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-clients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/clients/clients.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clients.component.css */
      "./src/app/component/clients/clients.component.css")).default]
    })], ClientsComponent);
    /***/
  },

  /***/
  "./src/app/component/counter/counter.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/component/counter/counter.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentCounterCounterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/counter/counter.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/component/counter/counter.component.ts ***!
    \********************************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppComponentCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CounterComponent =
    /*#__PURE__*/
    function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);

        this.data = {
          "counterList": [{
            "title": "Clients",
            "counter": 274
          }, {
            "title": "Projects",
            "counter": 420
          }, {
            "title": "Hours Of Support",
            "counter": 1365
          }, {
            "title": "Hard Workers",
            "counter": 20
          }]
        };
      }

      _createClass(CounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 1000
          });
        }
      }]);

      return CounterComponent;
    }();

    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-counter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./counter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/counter/counter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./counter.component.css */
      "./src/app/component/counter/counter.component.css")).default]
    })], CounterComponent);
    /***/
  },

  /***/
  "./src/app/component/faq/faq.component.css":
  /*!*************************************************!*\
    !*** ./src/app/component/faq/faq.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentFaqFaqComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mYXEvZmFxLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/faq/faq.component.ts":
  /*!************************************************!*\
    !*** ./src/app/component/faq/faq.component.ts ***!
    \************************************************/

  /*! exports provided: FAQComponent */

  /***/
  function srcAppComponentFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FAQComponent", function () {
      return FAQComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FAQComponent =
    /*#__PURE__*/
    function () {
      function FAQComponent() {
        _classCallCheck(this, FAQComponent);
      }

      _createClass(FAQComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FAQComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FAQComponent.prototype, "data", void 0);
    FAQComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/faq/faq.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.css */
      "./src/app/component/faq/faq.component.css")).default]
    })], FAQComponent);
    /***/
  },

  /***/
  "./src/app/component/features/features.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/component/features/features.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentFeaturesFeaturesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/features/features.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/features/features.component.ts ***!
    \**********************************************************/

  /*! exports provided: FeaturesComponent */

  /***/
  function srcAppComponentFeaturesFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
      return FeaturesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FeaturesComponent =
    /*#__PURE__*/
    function () {
      function FeaturesComponent() {
        _classCallCheck(this, FeaturesComponent);
      }

      _createClass(FeaturesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeaturesComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeaturesComponent.prototype, "data", void 0);
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-features',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./features.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/features/features.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./features.component.css */
      "./src/app/component/features/features.component.css")).default]
    })], FeaturesComponent);
    /***/
  },

  /***/
  "./src/app/component/footer/footer.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/component/footer/footer.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/footer/footer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/footer/footer.component.ts ***!
    \******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");
    /* harmony import */


    var src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/module/website/website.module */
    "./src/app/module/website/website.module.ts");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(dataRetrivalService) {
        _classCallCheck(this, FooterComponent);

        this.dataRetrivalService = dataRetrivalService;
        this.socialLinks = new src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__["SocialLinks"]();
        this.footer = new src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__["Footer"]();
        this.websiteContact = new src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__["WebsiteContact"]();
        this.error = "";
        this.userMessage = new Message();
        this.userEmail = "";
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dataRetrivalService.getFooterData().subscribe(function (data) {
            _this3.footer = data;
            _this3.socialLinks = _this3.footer.socialLinks;
            _this3.websiteContact = _this3.footer.contact;
          }, function (error) {
            _this3.error = error;
            console.log(error);
          });
        }
      }, {
        key: "subscribeNewsletter",
        value: function subscribeNewsletter() {
          function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }

          if (validateEmail(this.userEmail)) {
            console.log("Newsletter Subscribed.");
            console.log(this.userEmail);
            alert("Newsletter Subscribed.");
          } else {
            console.log("Invalid Message ");
          }
        }
      }, {
        key: "submitMessage",
        value: function submitMessage() {
          if (this.userMessage.isValid()) {
            console.log("Submit Message: ");
            console.log(this.userMessage);
            alert("Message Submitted.");
          } else {
            console.log("Invalid Message ");
          }
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["DataRetrievalService"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/component/footer/footer.component.css")).default]
    })], FooterComponent);

    var Message =
    /*#__PURE__*/
    function () {
      function Message() {
        _classCallCheck(this, Message);

        this.name = "";
        this.emailId = "";
        this.subject = "";
        this.content = "";
      }

      _createClass(Message, [{
        key: "isValid",
        value: function isValid() {
          function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
          }

          if (this.name.length < 4 || this.subject.length < 4 || !validateEmail(this.emailId) || this.content.length < 50) {
            return false;
          }

          return true;
        }
      }]);

      return Message;
    }();
    /***/

  },

  /***/
  "./src/app/component/nav-bar/nav-bar.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/component/nav-bar/nav-bar.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/nav-bar/nav-bar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/component/nav-bar/nav-bar.component.ts ***!
    \********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");
    /* harmony import */


    var src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/module/website/website.module */
    "./src/app/module/website/website.module.ts");
    /* harmony import */


    var src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/user-authentication/user-authentication.service */
    "./src/app/service/user-authentication/user-authentication.service.ts");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent(dataRetrivalService, userAuthenticationService) {
        _classCallCheck(this, NavBarComponent);

        this.dataRetrivalService = dataRetrivalService;
        this.userAuthenticationService = userAuthenticationService;
        this.socialLinks = new src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__["SocialLinks"]();
        this.navbar = new src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_3__["NavBar"]();
        this.error = "";
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.isUserLoggedIn = this.userAuthenticationService.isUserLoggedIn();
          this.dataRetrivalService.getNavbarData().subscribe(function (data) {
            _this4.navbar = data;
            _this4.socialLinks = _this4.navbar.socialLinks;

            if (_this4.isUserLoggedIn == true) {
              _this4.navbar.navigationLinks = [{
                "title": "Home",
                "link": "/admin"
              }, {
                "title": "Manage",
                "link": "/admin/manage"
              }, {
                "title": "View Logs",
                "link": "/admin/logs"
              }, {
                "title": "Logout",
                "link": "/logout"
              }];
            }
          }, function (error) {
            _this4.error = error;
            console.log(error);
          });
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["DataRetrievalService"]
      }, {
        type: src_app_service_user_authentication_user_authentication_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthenticationService"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/component/nav-bar/nav-bar.component.css")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/component/page-landing/page-landing.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/component/page-landing/page-landing.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentPageLandingPageLandingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlLWxhbmRpbmcvcGFnZS1sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/page-landing/page-landing.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/component/page-landing/page-landing.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageLandingComponent */

  /***/
  function srcAppComponentPageLandingPageLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLandingComponent", function () {
      return PageLandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var PageLandingComponent =
    /*#__PURE__*/
    function () {
      function PageLandingComponent(spinner, titleService) {
        _classCallCheck(this, PageLandingComponent);

        this.spinner = spinner;
        this.titleService = titleService;
      }

      _createClass(PageLandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.spinner.show();
          this.titleService.setTitle("BullTronics");
          setTimeout(function () {
            /** spinner ends after 500 m-seconds */
            _this5.spinner.hide();
          }, 700);
        }
      }]);

      return PageLandingComponent;
    }();

    PageLandingComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    PageLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-landing/page-landing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-landing.component.css */
      "./src/app/component/page-landing/page-landing.component.css")).default]
    })], PageLandingComponent);
    /***/
  },

  /***/
  "./src/app/component/page-not-found/page-not-found.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/component/page-not-found/page-not-found.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/page-not-found/page-not-found.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/component/page-not-found/page-not-found.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/component/page-not-found/page-not-found.component.css")).default]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/component/page-show-html/page-show-html.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/component/page-show-html/page-show-html.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentPageShowHtmlPageShowHtmlComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wYWdlLXNob3ctaHRtbC9wYWdlLXNob3ctaHRtbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/page-show-html/page-show-html.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/component/page-show-html/page-show-html.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PageShowHTMLComponent */

  /***/
  function srcAppComponentPageShowHtmlPageShowHtmlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageShowHTMLComponent", function () {
      return PageShowHTMLComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");
    /* harmony import */


    var src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/module/website/website.module */
    "./src/app/module/website/website.module.ts");

    var PageShowHTMLComponent =
    /*#__PURE__*/
    function () {
      function PageShowHTMLComponent(spinner, titleService, route, router, dataRetrievalService) {
        var _this6 = this;

        _classCallCheck(this, PageShowHTMLComponent);

        this.spinner = spinner;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.dataRetrievalService = dataRetrievalService;
        this.pageId = "";
        this.pageData = new src_app_module_website_website_module__WEBPACK_IMPORTED_MODULE_6__["WebsitePage"]();
        this.error = "";
        this.route.params.subscribe(function (params) {
          _this6.spinner.show();

          console.log(params);
          _this6.pageId = params["pageId"];

          _this6.renderViewPage();

          _this6.onActivate();
        });
      }

      _createClass(PageShowHTMLComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onActivate",
        value: function onActivate() {
          var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;

            if (pos > 0) {
              window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
              window.clearInterval(scrollToTop);
            }
          }, 16);
        }
      }, {
        key: "renderViewPage",
        value: function renderViewPage() {
          var _this7 = this;

          this.dataRetrievalService.getHtmlPageData(this.pageId).subscribe(function (data) {
            _this7.pageData = data;

            if (_this7.pageData == null) {
              _this7.spinner.hide();

              _this7.router.navigate(['/404']);

              return;
            }

            _this7.titleService.setTitle(_this7.pageData.title);

            setTimeout(function () {
              /** spinner ends after 500 m-seconds */
              _this7.spinner.hide();
            }, 800);
          }, function (error) {
            _this7.error = error;
            console.log(error);

            _this7.spinner.hide();
          });
        }
      }]);

      return PageShowHTMLComponent;
    }();

    PageShowHTMLComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_5__["DataRetrievalService"]
      }];
    };

    PageShowHTMLComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-show-html',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-show-html.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/page-show-html/page-show-html.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-show-html.component.css */
      "./src/app/component/page-show-html/page-show-html.component.css")).default]
    })], PageShowHTMLComponent);
    /***/
  },

  /***/
  "./src/app/component/portfolio/portfolio.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/component/portfolio/portfolio.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentPortfolioPortfolioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/portfolio/portfolio.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/component/portfolio/portfolio.component.ts ***!
    \************************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppComponentPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var PortfolioComponent =
    /*#__PURE__*/
    function () {
      function PortfolioComponent(spinner, titleService) {
        _classCallCheck(this, PortfolioComponent);

        this.spinner = spinner;
        this.titleService = titleService;
        this.spinner.show();
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.titleService.setTitle("Portfolio || BullTronics");
          setTimeout(function () {
            /** spinner ends after 500 m-seconds */
            _this8.spinner.hide();
          }, 500);
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PortfolioComponent.prototype, "data", void 0);
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/portfolio/portfolio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio.component.css */
      "./src/app/component/portfolio/portfolio.component.css")).default]
    })], PortfolioComponent);
    /***/
  },

  /***/
  "./src/app/component/pricing/pricing.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/component/pricing/pricing.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentPricingPricingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/pricing/pricing.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/component/pricing/pricing.component.ts ***!
    \********************************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppComponentPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PricingComponent =
    /*#__PURE__*/
    function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PricingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PricingComponent.prototype, "data", void 0);
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pricing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pricing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/pricing/pricing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pricing.component.css */
      "./src/app/component/pricing/pricing.component.css")).default]
    })], PricingComponent);
    /***/
  },

  /***/
  "./src/app/component/services/services.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/component/services/services.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentServicesServicesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/services/services.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/component/services/services.component.ts ***!
    \**********************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppComponentServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServicesComponent =
    /*#__PURE__*/
    function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ServicesComponent.prototype, "data", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/services/services.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.css */
      "./src/app/component/services/services.component.css")).default]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/component/team/team.component.css":
  /*!***************************************************!*\
    !*** ./src/app/component/team/team.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentTeamTeamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/team/team.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/team/team.component.ts ***!
    \**************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppComponentTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");

    var TeamComponent =
    /*#__PURE__*/
    function () {
      function TeamComponent(spinner, titleService, route, dataRetrievalService) {
        _classCallCheck(this, TeamComponent);

        this.spinner = spinner;
        this.titleService = titleService;
        this.route = route;
        this.dataRetrievalService = dataRetrievalService;
        this.TeamMembers = {};
        this.defaultImage = '/assets/img/loading.gif';
        this.spinner.show();
        this.titleService.setTitle("Team || BullTronics");
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          //this.TeamMembers = this.dataRetrievalService.getTeam();
          setTimeout(function () {
            /** spinner ends after 500 m-seconds */
            _this9.spinner.hide();
          }, 500);
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _service_data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_5__["DataRetrievalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TeamComponent.prototype, "data", void 0);
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/team/team.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team.component.css */
      "./src/app/component/team/team.component.css")).default]
    })], TeamComponent);
    /***/
  },

  /***/
  "./src/app/component/why-us/why-us.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/component/why-us/why-us.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentWhyUsWhyUsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC93aHktdXMvd2h5LXVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/why-us/why-us.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/why-us/why-us.component.ts ***!
    \******************************************************/

  /*! exports provided: WhyUsComponent */

  /***/
  function srcAppComponentWhyUsWhyUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhyUsComponent", function () {
      return WhyUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WhyUsComponent =
    /*#__PURE__*/
    function () {
      function WhyUsComponent() {
        _classCallCheck(this, WhyUsComponent);
      }

      _createClass(WhyUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WhyUsComponent;
    }();

    WhyUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-why-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./why-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/why-us/why-us.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./why-us.component.css */
      "./src/app/component/why-us/why-us.component.css")).default]
    })], WhyUsComponent);
    /***/
  },

  /***/
  "./src/app/module/website/website.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/module/website/website.module.ts ***!
    \**************************************************/

  /*! exports provided: WebsiteModule, WebSiteData, WebsitePageMetaTags, WebsitePageSegment, WebsitePage, NavBar, Footer, SocialLinks, Address, WebsiteContact */

  /***/
  function srcAppModuleWebsiteWebsiteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsiteModule", function () {
      return WebsiteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSiteData", function () {
      return WebSiteData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsitePageMetaTags", function () {
      return WebsitePageMetaTags;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsitePageSegment", function () {
      return WebsitePageSegment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsitePage", function () {
      return WebsitePage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBar", function () {
      return NavBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Footer", function () {
      return Footer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialLinks", function () {
      return SocialLinks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Address", function () {
      return Address;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsiteContact", function () {
      return WebsiteContact;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var WebsiteModule = function WebsiteModule() {
      _classCallCheck(this, WebsiteModule);
    };

    WebsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], WebsiteModule);

    var WebSiteData = function WebSiteData() {
      _classCallCheck(this, WebSiteData);

      this.title = "WebApp";
      this.htmlPages = new Map();
      this.navbar = new NavBar();
      this.footer = new Footer();
    };

    var WebsitePageMetaTags = function WebsitePageMetaTags() {
      _classCallCheck(this, WebsitePageMetaTags);
    };

    var WebsitePageSegment = function WebsitePageSegment() {
      _classCallCheck(this, WebsitePageSegment);
    };

    var WebsitePage = function WebsitePage() {
      _classCallCheck(this, WebsitePage);
    };

    var NavBar = function NavBar() {
      _classCallCheck(this, NavBar);

      this.navigationLinks = null;
      this.socialLinks = new SocialLinks();
    };

    var Footer = function Footer() {
      _classCallCheck(this, Footer);

      this.newsletterREST = null;
      this.sendMessageREST = null;
      this.title = "BullTronics";
      this.description = "Generic WebApp By Vipul Chasta";
      this.newsletterDescription = "Subscribe to our newsletter for getting our latest updates.";
      this.sendMessageDescription = "Have any queries..? leave us a message we will get back to you soon.";
      this.contact = new WebsiteContact();
      this.socialLinks = new SocialLinks();
      this.navigationLinks = [];
      this.copyrightDisclaimer = "&copy; Copyright <strong>BullTronics</strong>. All Rights Reserved";
      this.creditsDisclaimer = "Template Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>";
    };

    var SocialLinks = function SocialLinks() {
      _classCallCheck(this, SocialLinks);

      this.facebook = null;
      this.linkedin = null;
      this.twitter = null;
      this.instagram = null;
      this.github = null;
      this.hackerrank = null;
      this.whatsapp = null;
    };

    var Address = function Address() {
      _classCallCheck(this, Address);

      this.line1 = "";
      this.line2 = "";
      this.pincode = null;
      this.country = "";
    };

    var WebsiteContact = function WebsiteContact() {
      _classCallCheck(this, WebsiteContact);

      this.address = null;
      this.contactNo1 = "";
      this.contactNo2 = "";
      this.email = "";
    };
    /***/

  },

  /***/
  "./src/app/service/data-retrieval/data-retrieval.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/service/data-retrieval/data-retrieval.service.ts ***!
    \******************************************************************/

  /*! exports provided: DataRetrievalService */

  /***/
  function srcAppServiceDataRetrievalDataRetrievalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataRetrievalService", function () {
      return DataRetrievalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DataRetrievalService =
    /*#__PURE__*/
    function () {
      function DataRetrievalService(httpClient) {
        _classCallCheck(this, DataRetrievalService);

        this.httpClient = httpClient; //baseurl = '/assets/data.json';

        this.baseurl = 'https://api.jsonbin.io/b/5e2e081f593fd7418570e3f3'; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'secret-key': '$2a$10$Czs941C24iIp1xHGnweHN.6yQxfndYyrw3bZCQFQzM.COGSeDkdTi'
          })
        };
      }

      _createClass(DataRetrievalService, [{
        key: "getNavbarData",
        value: function getNavbarData() {
          return this.httpClient.get(this.baseurl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.navbar;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getFooterData",
        value: function getFooterData() {
          return this.httpClient.get(this.baseurl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.footer;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getHtmlPageData",
        value: function getHtmlPageData(pageId) {
          return this.httpClient.get(this.baseurl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.htmlPages[pageId];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getAdminData",
        value: function getAdminData(authKey) {
          var adminBaseurl = "https://shop.bulltronics.com/SrvHosting?id=5d3f4b82d1c7ae038bb112e4&operation=GET_ADMIN_DATA&key=" + authKey;
          return this.httpClient.get(adminBaseurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getWebsiteData",
        value: function getWebsiteData() {
          return this.httpClient.get(this.baseurl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "updateWebsiteData",
        value: function updateWebsiteData(websiteData) {
          return this.httpClient.put(this.baseurl, websiteData, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: ".concat(error.error.message);
          } else {
            // server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          window.alert(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return DataRetrievalService;
    }();

    DataRetrievalService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataRetrievalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataRetrievalService);
    /***/
  },

  /***/
  "./src/app/service/user-authentication/user-authentication.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/service/user-authentication/user-authentication.service.ts ***!
    \****************************************************************************/

  /*! exports provided: UserAuthenticationService */

  /***/
  function srcAppServiceUserAuthenticationUserAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAuthenticationService", function () {
      return UserAuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data-retrieval/data-retrieval.service */
    "./src/app/service/data-retrieval/data-retrieval.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserAuthenticationService =
    /*#__PURE__*/
    function () {
      function UserAuthenticationService(dataRetrievalService) {
        _classCallCheck(this, UserAuthenticationService);

        this.dataRetrievalService = dataRetrievalService;
        this.userLoginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.error = "";
      }

      _createClass(UserAuthenticationService, [{
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var token = localStorage.getItem('authenticationToken');

          if (token == null) {
            console.log("No Token Available");
            return false;
          } else {
            console.log("Token is: " + token);
            return true;
          }
        }
      }, {
        key: "makeUserLoggedIn",
        value: function makeUserLoggedIn(token) {
          localStorage.setItem('authenticationToken', token);
        }
      }, {
        key: "makeUserLoggedOut",
        value: function makeUserLoggedOut() {
          localStorage.removeItem('authenticationToken');
        }
      }]);

      return UserAuthenticationService;
    }();

    UserAuthenticationService.ctorParameters = function () {
      return [{
        type: _data_retrieval_data_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["DataRetrievalService"]
      }];
    };

    UserAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserAuthenticationService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vipulchasta/Codebase/Generic-WebApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map