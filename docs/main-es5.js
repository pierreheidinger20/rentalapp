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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _monthly_rental_monthly_rental_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./monthly-rental/monthly-rental.component */
    "./src/app/monthly-rental/monthly-rental.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'appMensualidad';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-monthly-rental");
        }
      },
      directives: [_monthly_rental_monthly_rental_component__WEBPACK_IMPORTED_MODULE_1__["MonthlyRentalComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _monthly_rental_monthly_rental_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./monthly-rental/monthly-rental.component */
    "./src/app/monthly-rental/monthly-rental.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _monthly_rental_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./monthly-rental/navbar/navbar.component */
    "./src/app/monthly-rental/navbar/navbar.component.ts");
    /* harmony import */


    var _monthly_rental_rental_list_rental_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./monthly-rental/rental-list/rental-list.component */
    "./src/app/monthly-rental/rental-list/rental-list.component.ts");
    /* harmony import */


    var _monthly_rental_rental_rental_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./monthly-rental/rental/rental.component */
    "./src/app/monthly-rental/rental/rental.component.ts");
    /* harmony import */


    var _monthly_rental_users_rental_users_rental_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./monthly-rental/users-rental/users-rental.component */
    "./src/app/monthly-rental/users-rental/users-rental.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _app_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.reducer */
    "./src/app/app.reducer.ts");
    /* harmony import */


    var _monthly_rental_rental_add_rental_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./monthly-rental/rental-add/rental-add.component */
    "./src/app/monthly-rental/rental-add/rental-add.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_16__["appReducer"]), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _monthly_rental_monthly_rental_component__WEBPACK_IMPORTED_MODULE_6__["MonthlyRentalComponent"], _monthly_rental_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _monthly_rental_rental_list_rental_list_component__WEBPACK_IMPORTED_MODULE_12__["RentalListComponent"], _monthly_rental_rental_rental_component__WEBPACK_IMPORTED_MODULE_13__["RentalComponent"], _monthly_rental_users_rental_users_rental_component__WEBPACK_IMPORTED_MODULE_14__["UsersRentalComponent"], _monthly_rental_rental_add_rental_add_component__WEBPACK_IMPORTED_MODULE_17__["RentalAddComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _monthly_rental_monthly_rental_component__WEBPACK_IMPORTED_MODULE_6__["MonthlyRentalComponent"], _monthly_rental_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _monthly_rental_rental_list_rental_list_component__WEBPACK_IMPORTED_MODULE_12__["RentalListComponent"], _monthly_rental_rental_rental_component__WEBPACK_IMPORTED_MODULE_13__["RentalComponent"], _monthly_rental_users_rental_users_rental_component__WEBPACK_IMPORTED_MODULE_14__["UsersRentalComponent"], _monthly_rental_rental_add_rental_add_component__WEBPACK_IMPORTED_MODULE_17__["RentalAddComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_16__["appReducer"]), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.reducer.ts":
  /*!********************************!*\
    !*** ./src/app/app.reducer.ts ***!
    \********************************/

  /*! exports provided: appReducer */

  /***/
  function srcAppAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducer", function () {
      return appReducer;
    });
    /* harmony import */


    var _monthly_rental_users_rental_users_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./monthly-rental/users-rental/users.reducer */
    "./src/app/monthly-rental/users-rental/users.reducer.ts");
    /* harmony import */


    var _monthly_rental_rental_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./monthly-rental/rental.reducer */
    "./src/app/monthly-rental/rental.reducer.ts");

    var appReducer = {
      usersRental: _monthly_rental_users_rental_users_reducer__WEBPACK_IMPORTED_MODULE_0__["usersRentalReducer"],
      rentals: _monthly_rental_rental_reducer__WEBPACK_IMPORTED_MODULE_1__["rentalReducer"]
    };
    /***/
  },

  /***/
  "./src/app/monthly-rental/monthly-rental.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/monthly-rental/monthly-rental.component.ts ***!
    \************************************************************/

  /*! exports provided: MonthlyRentalComponent */

  /***/
  function srcAppMonthlyRentalMonthlyRentalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyRentalComponent", function () {
      return MonthlyRentalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/monthly-rental/navbar/navbar.component.ts");
    /* harmony import */


    var _rental_list_rental_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rental-list/rental-list.component */
    "./src/app/monthly-rental/rental-list/rental-list.component.ts");

    var MonthlyRentalComponent =
    /*#__PURE__*/
    function () {
      function MonthlyRentalComponent(_firestore) {
        _classCallCheck(this, MonthlyRentalComponent);

        this._firestore = _firestore;
      }

      _createClass(MonthlyRentalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MonthlyRentalComponent;
    }();

    MonthlyRentalComponent.ɵfac = function MonthlyRentalComponent_Factory(t) {
      return new (t || MonthlyRentalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
    };

    MonthlyRentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MonthlyRentalComponent,
      selectors: [["app-monthly-rental"]],
      decls: 4,
      vars: 0,
      consts: [[1, "row"]],
      template: function MonthlyRentalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-rental-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _rental_list_rental_list_component__WEBPACK_IMPORTED_MODULE_4__["RentalListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbnRobHktcmVudGFsL21vbnRobHktcmVudGFsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthlyRentalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-monthly-rental',
          templateUrl: './monthly-rental.component.html',
          styleUrls: ['./monthly-rental.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/monthly-rental/navbar/navbar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/monthly-rental/navbar/navbar.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppMonthlyRentalNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _users_rental_users_rental_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../users-rental/users-rental.component */
    "./src/app/monthly-rental/users-rental/users-rental.component.ts");
    /* harmony import */


    var _rental_add_rental_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rental-add/rental-add.component */
    "./src/app/monthly-rental/rental-add/rental-add.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(_dialog) {
        _classCallCheck(this, NavbarComponent);

        this._dialog = _dialog;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickOpenListUsers",
        value: function onClickOpenListUsers() {
          this._dialog.open(_users_rental_users_rental_component__WEBPACK_IMPORTED_MODULE_1__["UsersRentalComponent"], {
            width: '550px'
          });
        }
      }, {
        key: "onClickOpenNewPay",
        value: function onClickOpenNewPay() {
          this._dialog.open(_rental_add_rental_add_component__WEBPACK_IMPORTED_MODULE_2__["RentalAddComponent"], {
            width: '80%',
            maxHeight: '90vh'
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 14,
      vars: 0,
      consts: [[1, "nav-wrapper"], ["href", "#", 1, "brand-logo", "center"], [1, "fas", "fa-calendar-alt"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], [3, "click"], [1, "fas", "fa-users"], [1, "fas", "fa-money-bill-wave"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Monthly rent ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_6_listener($event) {
            return ctx.onClickOpenListUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_10_listener($event) {
            return ctx.onClickOpenNewPay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\xA0New Pay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbnRobHktcmVudGFsL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/monthly-rental/rental-add/rental-add.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/monthly-rental/rental-add/rental-add.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RentalAddComponent */

  /***/
  function srcAppMonthlyRentalRentalAddRentalAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RentalAddComponent", function () {
      return RentalAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rental_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rental.model */
    "./src/app/monthly-rental/rental.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _users_rental_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../users-rental/users.service */
    "./src/app/monthly-rental/users-rental/users.service.ts");
    /* harmony import */


    var _rental_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../rental.service */
    "./src/app/monthly-rental/rental.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RentalAddComponent_div_30_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rentalPayment_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rentalPayment_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R$ ", rentalPayment_r6.cost, "");
      }
    }

    function RentalAddComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RentalAddComponent_div_30_li_2_Template, 7, 2, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Full Cost");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.rental.rentalPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R$ ", ctx_r2.rental.fullPaymentRental, "");
      }
    }

    function RentalAddComponent_div_49_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rentalOther_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rentalOther_r8.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R$ ", rentalOther_r8.cost, "");
      }
    }

    function RentalAddComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RentalAddComponent_div_49_li_2_Template, 7, 2, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Full Cost");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.rental.otherPayments);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R$ ", ctx_r3.rental.fullPaymentsOthers, "");
      }
    }

    function RentalAddComponent_li_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userPayment_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](userPayment_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R$ ", userPayment_r9.payment, "");
      }
    }

    var RentalAddComponent =
    /*#__PURE__*/
    function () {
      function RentalAddComponent(_dialogRef, _store, _userService, _rentalService) {
        _classCallCheck(this, RentalAddComponent);

        this._dialogRef = _dialogRef;
        this._store = _store;
        this._userService = _userService;
        this._rentalService = _rentalService;
        /**Model */

        this.rental = new _rental_model__WEBPACK_IMPORTED_MODULE_2__["Rental"]();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      }

      _createClass(RentalAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._userService.getUsers();

          this.usersSubscriptions = this._store.select('usersRental').subscribe(function (users) {
            return _this.users = users;
          });
          this.initData();
          this.initForms();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.usersSubscriptions.unsubscribe();
        }
      }, {
        key: "newRentalPayment",
        value: function newRentalPayment() {
          if (this.txtNamePaymentRental.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "name is requerid", 'warning');
            return;
          }

          if (this.txtCostPaymentRental.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "cost is requerid", 'warning');
            return;
          }

          var paymentRental = new _rental_model__WEBPACK_IMPORTED_MODULE_2__["Payments"]();
          paymentRental.name = this.txtNamePaymentRental.value;
          paymentRental.cost = this.txtCostPaymentRental.value;
          this.rental.rentalPayments.push(paymentRental);
          this.txtNamePaymentRental.reset('');
          this.txtCostPaymentRental.reset(0);
          this.rental.fullPaymentRental = this.calculateFullPayment(this.rental.rentalPayments);
        }
      }, {
        key: "newRentalOthers",
        value: function newRentalOthers() {
          if (this.txtNamePaymentOthers.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "name is requerid", 'warning');
            return;
          }

          ;

          if (this.txtCostPaymentOthers.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "cost is requerid", 'warning');
            return;
          }

          ;
          var paymentOther = new _rental_model__WEBPACK_IMPORTED_MODULE_2__["Payments"]();
          paymentOther.name = this.txtNamePaymentOthers.value;
          paymentOther.cost = this.txtCostPaymentOthers.value;
          this.rental.otherPayments.push(paymentOther);
          this.txtNamePaymentOthers.reset('');
          this.txtCostPaymentOthers.reset(0);
          this.rental.fullPaymentsOthers = this.calculateFullPayment(this.rental.otherPayments);
        }
      }, {
        key: "calculatePayment",
        value: function calculatePayment() {
          if (!this.validate()) return;
          var countUsers = this.users.length;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var user = _step.value;
              var paymentRental = Math.round(this.rental.fullPaymentRental * (user.porcentual / 100));
              var paymentOthers = Math.round(this.rental.fullPaymentsOthers / countUsers);
              var userPayment = new _rental_model__WEBPACK_IMPORTED_MODULE_2__["UserPayment"]();
              userPayment.name = user.name;
              userPayment.payment = paymentRental + paymentOthers;
              this.rental.usersPayments.push(userPayment);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.calculated = true;
        }
      }, {
        key: "clean",
        value: function clean() {
          this.rental = new _rental_model__WEBPACK_IMPORTED_MODULE_2__["Rental"]();
          this.initData();
          this.calculated = false;
        }
      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.validate()) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    if (this.calculated) {
                      _context.next = 5;
                      break;
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "not calculated", 'error');
                    return _context.abrupt("return");

                  case 5:
                    this.rental.registerDate = new Date();

                    this._rentalService.addRental(this.rental).then(function (result) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', "Saved", 'success');

                      _this2._dialogRef.close();
                    }).catch(function (erro) {
                      return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire(erro.message, erro.message, 'error');
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "validate",
        value: function validate() {
          var result = true;

          if (this.users.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "users missing", 'error');
            result = false;
          }

          ;

          if (this.rental.rentalPayments.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "An income is necessary", 'error');
            result = false;
          }

          ;

          if (this.rental.otherPayments.length == 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Alert', "An income (others) is necessary", 'error');
            result = false;
          }

          ;
          return result;
        }
      }, {
        key: "getNameMonth",
        value: function getNameMonth() {
          return this.monthNames[new Date().getMonth()];
        }
      }, {
        key: "initData",
        value: function initData() {
          this.rental.name = this.getNameMonth();
          this.rental.year = new Date().getFullYear();
          this.rental.month = new Date().getMonth() + 1;
        }
      }, {
        key: "initForms",
        value: function initForms() {
          this.txtNamePaymentRental = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
          this.txtCostPaymentRental = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
          this.txtNamePaymentOthers = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
          this.txtCostPaymentOthers = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('0', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        }
      }, {
        key: "calculateFullPayment",
        value: function calculateFullPayment(payments) {
          var allCost = payments.map(function (payment) {
            return payment.cost;
          }).reduce(function (x, y) {
            return x + y;
          });
          return Math.round(allCost);
        }
      }]);

      return RentalAddComponent;
    }();

    RentalAddComponent.ɵfac = function RentalAddComponent_Factory(t) {
      return new (t || RentalAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_users_rental_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rental_service__WEBPACK_IMPORTED_MODULE_8__["RentalService"]));
    };

    RentalAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RentalAddComponent,
      selectors: [["app-rental-add"]],
      decls: 68,
      vars: 10,
      consts: [[1, "modal-content"], [1, "row"], [1, "input-field", "col", "s5"], ["id", "name", "type", "text", 1, "validate", 3, "ngModel", "ngModelChange"], ["for", "first_name"], ["placeholder", "Year", "id", "name", "type", "text", 1, "validate", 3, "ngModel", "ngModelChange"], ["placeholder", "Month", "id", "name", "type", "text", 1, "validate", 3, "ngModel", "ngModelChange"], [1, "card"], [1, "card-content"], [1, "card-title"], ["id", "name", "type", "text", 1, "validate", 3, "formControl"], [1, "input-field", "col", "s6"], ["id", "cost", "type", "number", 1, "validate", 3, "formControl"], [1, "input-field", "col", "s1"], [1, "btn-floating", "btn-large", "waves-effect", "waves-light", "red", 3, "click"], [1, "material-icons"], ["class", "card-action", 4, "ngIf"], [1, "collection"], ["class", "collection-item avatar", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "waves-effect", "waves-light", "btn", 3, "click"], [1, "card-action"], [1, "collection-item"], ["href", "#!", 1, "secondary-content"], [1, "collection-item", "avatar"], [1, "fas", "fa-gopuram", "circle"], [1, "title"], [1, "fas", "fa-user", "circle"]],
      template: function RentalAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RentalAddComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.rental.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Name Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RentalAddComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.rental.year = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RentalAddComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.rental.month = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Rental payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cost");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RentalAddComponent_Template_a_click_27_listener($event) {
            return ctx.newRentalPayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RentalAddComponent_div_30_Template, 8, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Others payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Cost");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RentalAddComponent_Template_a_click_46_listener($event) {
            return ctx.newRentalOthers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, RentalAddComponent_div_49_Template, 8, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Results ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, RentalAddComponent_li_56_Template, 7, 2, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RentalAddComponent_Template_a_click_59_listener($event) {
            return ctx.calculatePayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Calculate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RentalAddComponent_Template_a_click_62_listener($event) {
            return ctx.clean();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Clean Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RentalAddComponent_Template_a_click_65_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rental.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rental.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rental.month);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.txtNamePaymentRental);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.txtCostPaymentRental);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rental.rentalPayments.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.txtNamePaymentOthers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.txtCostPaymentOthers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rental.otherPayments.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rental.usersPayments);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbnRobHktcmVudGFsL3JlbnRhbC1hZGQvcmVudGFsLWFkZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RentalAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-rental-add',
          templateUrl: './rental-add.component.html',
          styleUrls: ['./rental-add.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }, {
          type: _users_rental_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
        }, {
          type: _rental_service__WEBPACK_IMPORTED_MODULE_8__["RentalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/monthly-rental/rental-list/rental-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/monthly-rental/rental-list/rental-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RentalListComponent */

  /***/
  function srcAppMonthlyRentalRentalListRentalListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RentalListComponent", function () {
      return RentalListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _rental_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rental.service */
    "./src/app/monthly-rental/rental.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rental_rental_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rental/rental.component */
    "./src/app/monthly-rental/rental/rental.component.ts");

    function RentalListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-rental", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var rental_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rental", rental_r11);
      }
    }

    var RentalListComponent =
    /*#__PURE__*/
    function () {
      function RentalListComponent(_store, _rentalService) {
        _classCallCheck(this, RentalListComponent);

        this._store = _store;
        this._rentalService = _rentalService;
        this.rentals = [];
      }

      _createClass(RentalListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._rentalService.getRentals();

          this._store.select('rentals').subscribe(function (rentals) {
            return _this3.rentals = rentals;
          });
        }
      }]);

      return RentalListComponent;
    }();

    RentalListComponent.ɵfac = function RentalListComponent_Factory(t) {
      return new (t || RentalListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rental_service__WEBPACK_IMPORTED_MODULE_2__["RentalService"]));
    };

    RentalListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RentalListComponent,
      selectors: [["app-rental-list"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "rental"]],
      template: function RentalListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RentalListComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rentals);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _rental_rental_component__WEBPACK_IMPORTED_MODULE_4__["RentalComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbnRobHktcmVudGFsL3JlbnRhbC1saXN0L3JlbnRhbC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RentalListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rental-list',
          templateUrl: './rental-list.component.html',
          styleUrls: ['./rental-list.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _rental_service__WEBPACK_IMPORTED_MODULE_2__["RentalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/monthly-rental/rental.actions.ts":
  /*!**************************************************!*\
    !*** ./src/app/monthly-rental/rental.actions.ts ***!
    \**************************************************/

  /*! exports provided: LIST_RENTALS, ListRentalsAction */

  /***/
  function srcAppMonthlyRentalRentalActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIST_RENTALS", function () {
      return LIST_RENTALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListRentalsAction", function () {
      return ListRentalsAction;
    });

    var LIST_RENTALS = '[Rental Component List]';

    var ListRentalsAction = function ListRentalsAction(rentals) {
      _classCallCheck(this, ListRentalsAction);

      this.rentals = rentals;
      this.type = LIST_RENTALS;
    };
    /***/

  },

  /***/
  "./src/app/monthly-rental/rental.model.ts":
  /*!************************************************!*\
    !*** ./src/app/monthly-rental/rental.model.ts ***!
    \************************************************/

  /*! exports provided: Payments, UserPayment, Rental */

  /***/
  function srcAppMonthlyRentalRentalModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Payments", function () {
      return Payments;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPayment", function () {
      return UserPayment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rental", function () {
      return Rental;
    });

    var Payments = function Payments() {
      _classCallCheck(this, Payments);
    };

    var UserPayment = function UserPayment() {
      _classCallCheck(this, UserPayment);
    };

    var Rental = function Rental() {
      _classCallCheck(this, Rental);

      this.rentalPayments = [];
      this.otherPayments = [];
      this.usersPayments = [];
    };
    /***/

  },

  /***/
  "./src/app/monthly-rental/rental.reducer.ts":
  /*!**************************************************!*\
    !*** ./src/app/monthly-rental/rental.reducer.ts ***!
    \**************************************************/

  /*! exports provided: rentalReducer */

  /***/
  function srcAppMonthlyRentalRentalReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rentalReducer", function () {
      return rentalReducer;
    });
    /* harmony import */


    var _rental_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rental.actions */
    "./src/app/monthly-rental/rental.actions.ts");

    var initState = [];

    function rentalReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _rental_actions__WEBPACK_IMPORTED_MODULE_0__["LIST_RENTALS"]:
          return action.rentals.map(function (rentals) {
            return Object.assign({}, rentals);
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/monthly-rental/rental.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/monthly-rental/rental.service.ts ***!
    \**************************************************/

  /*! exports provided: RentalService */

  /***/
  function srcAppMonthlyRentalRentalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RentalService", function () {
      return RentalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rental_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./rental.actions */
    "./src/app/monthly-rental/rental.actions.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var RentalService =
    /*#__PURE__*/
    function () {
      function RentalService(_firestore, _store) {
        _classCallCheck(this, RentalService);

        this._firestore = _firestore;
        this._store = _store;
      }

      _createClass(RentalService, [{
        key: "getRentals",
        value: function getRentals() {
          var _this4 = this;

          this._firestore.collection('rentals').valueChanges().subscribe(function (rentals) {
            var action = new _rental_actions__WEBPACK_IMPORTED_MODULE_1__["ListRentalsAction"](rentals);

            _this4._store.dispatch(action);
          });
        }
      }, {
        key: "addRental",
        value: function addRental(rental) {
          var number = Math.round(Math.random() * 1000);
          var documentName = "".concat(rental.name).concat(rental.month).concat(rental.year).concat(number);
          var obj = {
            name: rental.name,
            month: rental.month,
            year: rental.year,
            registerDate: rental.registerDate,
            rentalPayments: rental.rentalPayments.map(function (obj) {
              return Object.assign({}, obj);
            }),
            fullPaymentRental: rental.fullPaymentRental,
            otherPayments: rental.otherPayments.map(function (obj) {
              return Object.assign({}, obj);
            }),
            fullPaymentsOthers: rental.fullPaymentsOthers,
            usersPayments: rental.usersPayments.map(function (obj) {
              return Object.assign({}, obj);
            })
          };
          console.log(obj);
          return this._firestore.collection('rentals').add(Object.assign({}, obj));
        }
      }]);

      return RentalService;
    }();

    RentalService.ɵfac = function RentalService_Factory(t) {
      return new (t || RentalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    RentalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RentalService,
      factory: RentalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RentalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/monthly-rental/rental/rental.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/monthly-rental/rental/rental.component.ts ***!
    \***********************************************************/

  /*! exports provided: RentalComponent */

  /***/
  function srcAppMonthlyRentalRentalRentalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RentalComponent", function () {
      return RentalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RentalComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r13.name, " - R$ ", user_r13.payment, "");
      }
    }

    var RentalComponent =
    /*#__PURE__*/
    function () {
      function RentalComponent() {
        _classCallCheck(this, RentalComponent);
      }

      _createClass(RentalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RentalComponent;
    }();

    RentalComponent.ɵfac = function RentalComponent_Factory(t) {
      return new (t || RentalComponent)();
    };

    RentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RentalComponent,
      selectors: [["app-rental"]],
      inputs: {
        rental: "rental"
      },
      decls: 25,
      vars: 7,
      consts: [[1, "col", "s4"], [1, "card", "rental-card"], [1, "card-content"], [1, "card-title", "activator", "grey-text", "text-darken-4"], [1, "fas", "fa-money-check-alt"], [1, "material-icons", "right"], [1, "card-reveal"], [1, "card-title", "grey-text", "text-darken-4"], [4, "ngFor", "ngForOf"]],
      template: function RentalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Payments Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RentalComponent_div_24_Template, 3, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0 ", ctx.rental.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.rental.month, " - ", ctx.rental.year, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Full Rental : R$ ", ctx.rental.fullPaymentRental, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Full Others : R$ ", ctx.rental.fullPaymentsOthers, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Full : R$ ", ctx.rental.fullPaymentRental + ctx.rental.fullPaymentsOthers, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rental.usersPayments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".rental-card[_ngcontent-%COMP%] {\n    height: 250px!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGhseS1yZW50YWwvcmVudGFsL3JlbnRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21vbnRobHktcmVudGFsL3JlbnRhbC9yZW50YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJlbnRhbC1jYXJkIHtcbiAgICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RentalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rental',
          templateUrl: './rental.component.html',
          styleUrls: ['./rental.component.css']
        }]
      }], function () {
        return [];
      }, {
        rental: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/monthly-rental/users-rental/user-rental.model.ts":
  /*!******************************************************************!*\
    !*** ./src/app/monthly-rental/users-rental/user-rental.model.ts ***!
    \******************************************************************/

  /*! exports provided: UserRental */

  /***/
  function srcAppMonthlyRentalUsersRentalUserRentalModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRental", function () {
      return UserRental;
    });

    var UserRental = function UserRental(uid, userObj) {
      _classCallCheck(this, UserRental);

      this.uid = uid;
      this.name = userObj.name;
      this.porcentual = userObj.porcentual;
    };
    /***/

  },

  /***/
  "./src/app/monthly-rental/users-rental/users-rental.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/monthly-rental/users-rental/users-rental.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UsersRentalComponent */

  /***/
  function srcAppMonthlyRentalUsersRentalUsersRentalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersRentalComponent", function () {
      return UsersRentalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/monthly-rental/users-rental/users.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UsersRentalComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("% ", user_r1.porcentual, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.name, " \xA0 ");
      }
    }

    var UsersRentalComponent =
    /*#__PURE__*/
    function () {
      function UsersRentalComponent(_store, _usersService) {
        _classCallCheck(this, UsersRentalComponent);

        this._store = _store;
        this._usersService = _usersService;
        this.users = [];
      }

      _createClass(UsersRentalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.usersSubscription = this._store.select('usersRental').subscribe(function (users) {
            return _this5.users = users;
          });

          this._usersService.getUsers();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.usersSubscription.unsubscribe();
        }
      }]);

      return UsersRentalComponent;
    }();

    UsersRentalComponent.ɵfac = function UsersRentalComponent_Factory(t) {
      return new (t || UsersRentalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]));
    };

    UsersRentalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersRentalComponent,
      selectors: [["app-users-rental"]],
      decls: 7,
      vars: 1,
      consts: [[1, "card"], [1, "card-content"], [1, "card-title", "activator", "grey-text", "text-darken-4"], [1, "row"], [1, "collection"], ["class", "collection-item", 4, "ngFor", "ngForOf"], [1, "collection-item"], [1, "badge"]],
      template: function UsersRentalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsersRentalComponent_a_6_Template, 4, 2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbnRobHktcmVudGFsL3VzZXJzLXJlbnRhbC91c2Vycy1yZW50YWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRentalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users-rental',
          templateUrl: './users-rental.component.html',
          styleUrls: ['./users-rental.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/monthly-rental/users-rental/users.actions.ts":
  /*!**************************************************************!*\
    !*** ./src/app/monthly-rental/users-rental/users.actions.ts ***!
    \**************************************************************/

  /*! exports provided: LIST_USERS, ListUserAction */

  /***/
  function srcAppMonthlyRentalUsersRentalUsersActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIST_USERS", function () {
      return LIST_USERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUserAction", function () {
      return ListUserAction;
    });

    var LIST_USERS = '[Users Rental Component List]';

    var ListUserAction = function ListUserAction(usersRental) {
      _classCallCheck(this, ListUserAction);

      this.usersRental = usersRental;
      this.type = LIST_USERS;
    };
    /***/

  },

  /***/
  "./src/app/monthly-rental/users-rental/users.reducer.ts":
  /*!**************************************************************!*\
    !*** ./src/app/monthly-rental/users-rental/users.reducer.ts ***!
    \**************************************************************/

  /*! exports provided: usersRentalReducer */

  /***/
  function srcAppMonthlyRentalUsersRentalUsersReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "usersRentalReducer", function () {
      return usersRentalReducer;
    });
    /* harmony import */


    var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./users.actions */
    "./src/app/monthly-rental/users-rental/users.actions.ts");

    var initState = [];

    function usersRentalReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _users_actions__WEBPACK_IMPORTED_MODULE_0__["LIST_USERS"]:
          return action.usersRental.map(function (users) {
            return Object.assign({}, users);
          });

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/monthly-rental/users-rental/users.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/monthly-rental/users-rental/users.service.ts ***!
    \**************************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppMonthlyRentalUsersRentalUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_rental_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-rental.model */
    "./src/app/monthly-rental/users-rental/user-rental.model.ts");
    /* harmony import */


    var _users_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.actions */
    "./src/app/monthly-rental/users-rental/users.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var UsersService =
    /*#__PURE__*/
    function () {
      function UsersService(_store, _firestore) {
        _classCallCheck(this, UsersService);

        this._store = _store;
        this._firestore = _firestore;
      }

      _createClass(UsersService, [{
        key: "getUsers",
        value: function getUsers() {
          var _this6 = this;

          this._firestore.collection("users").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data.map(function (doc) {
              return {
                uid: doc.payload.doc.id,
                data: doc.payload.doc.data()
              };
            });
          })).subscribe(function (collections) {
            var users = collections.map(function (collection) {
              return new _user_rental_model__WEBPACK_IMPORTED_MODULE_2__["UserRental"](collection.uid, collection.data);
            });
            var action = new _users_actions__WEBPACK_IMPORTED_MODULE_3__["ListUserAction"](users);

            _this6._store.dispatch(action);
          });
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      }, null);
    })();
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

    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyC12HKT_1K-DRRjv3WuI4VMAjjc20m9R70",
        authDomain: "rental-app-abcad.firebaseapp.com",
        databaseURL: "https://rental-app-abcad.firebaseio.com",
        projectId: "rental-app-abcad",
        storageBucket: "rental-app-abcad.appspot.com",
        messagingSenderId: "598882149897",
        appId: "1:598882149897:web:00e5fc99a9695757b1fad8",
        measurementId: "G-S6E9795FB0"
      }
    };
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! /Users/pierrebo/Dev/angular/appMensualidad/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map