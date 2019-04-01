(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_purchase_page_purchase_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/purchase-page/purchase-page.component */ "./src/app/components/purchase-page/purchase-page.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'purchase', component: _components_purchase_page_purchase_page_component__WEBPACK_IMPORTED_MODULE_4__["PurchasePageComponent"] },
    { path: 'payment', component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_5__["PaymentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-dashboard></app-dashboard>-->\n<router-outlet></router-outlet>\n<!--<router-outlet></router-outlet>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ui-ecommerce-website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_product_table_product_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-table/product-table.component */ "./src/app/components/product-table/product-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _components_purchase_page_purchase_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/purchase-page/purchase-page.component */ "./src/app/components/purchase-page/purchase-page.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _components_product_table_product_table_component__WEBPACK_IMPORTED_MODULE_6__["ProductTableComponent"],
                _components_purchase_page_purchase_page_component__WEBPACK_IMPORTED_MODULE_12__["PurchasePageComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
            ],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]],
            entryComponents: [_components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContentComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var appRoutes = [
    { path: 'purchase', component: _components_purchase_page_purchase_page_component__WEBPACK_IMPORTED_MODULE_12__["PurchasePageComponent"] },
    { path: 'payment', component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_13__["PaymentComponent"] }
];


/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-outline {\r\n  border-radius: 25px;\r\n  height: 200px;\r\n}\r\n\r\n.dashboard {\r\n  margin-top: 10%;\r\n}\r\n\r\n.dashboard-form {\r\n  margin-top: 5%;\r\n  margin-left: 3%;\r\n  margin-right: 3%;\r\n}\r\n\r\n.scrollable-menu {\r\n  height: auto;\r\n  max-height: 500px;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.dropdown-toggle {\r\n  width: 100%;\r\n}\r\n\r\ndiv.text-overflow-ellipsis {\r\n  width: 80%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.horizontal {\r\n  display: flex;\r\n}\r\n\r\n.dropdown-button {\r\n  width: 100%;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.p-table {\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  margin-top: 10%;\r\n  margin-bottom: 10%;\r\n  width: 100%;\r\n  max-height: 75rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.p-table-entry {\r\n  margin: 30px 20px 20px;\r\n}\r\n\r\n.no-results {\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  margin-top: 10%;\r\n  margin-bottom: 10%;\r\n  width: 100%;\r\n  max-height: 75rem;\r\n}\r\n\r\n.btn-inline {\r\n  display:inline-block;\r\n}\r\n\r\n#gray-scrollbar::-webkit-scrollbar-track\r\n{\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n  border-radius: 10px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n#gray-scrollbar::-webkit-scrollbar\r\n{\r\n  width: 12px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n#gray-scrollbar::-webkit-scrollbar-thumb\r\n{\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n  background-color: #9d9d9d;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztDQUNmOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6Qjs7QUFFRDtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxxQkFBcUI7Q0FDdEI7O0FBRUQ7O0VBRUUsa0RBQWtEO0VBQ2xELG9CQUFvQjtFQUNwQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7O0VBRUUsWUFBWTtFQUNaLDBCQUEwQjtDQUMzQjs7QUFFRDs7RUFFRSxvQkFBb0I7RUFDcEIsaURBQWlEO0VBQ2pELDBCQUEwQjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1vdXRsaW5lIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1mb3JtIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuLnNjcm9sbGFibGUtbWVudSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi50ZXh0LW92ZXJmbG93LWVsbGlwc2lzIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmhvcml6b250YWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wLXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNzVyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnAtdGFibGUtZW50cnkge1xyXG4gIG1hcmdpbjogMzBweCAyMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5uby1yZXN1bHRzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNzVyZW07XHJcbn1cclxuXHJcbi5idG4taW5saW5lIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuI2dyYXktc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbiNncmF5LXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXJcclxue1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbiNncmF5LXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZDlkOWQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-product-table></app-product-table>-->\n<div class=\"container-fluid default-background\">\n  <div class=\"row\">\n    <div class=\"col\"></div>\n\n    <div class=\"col-6 dashboard-outline dashboard\" style=\"background: white;\">\n      <form class=\"dashboard-form\">\n        <div class=\"form-group mb-4\">\n          <input type=\"text\" class=\"form-control text-left\" [(ngModel)]=\"searchText\" name=\"search\" (input)=\"filterTable()\" placeholder=\"Search..\">\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group dropdown col\">\n            <button class=\"btn btn-outline-primary dropdown-toggle text-right\" type=\"button\" id=\"makeDropDownMenuButton\" data-toggle=\"dropdown\">\n              Make\n            </button>\n            <form class=\"dropdown-menu p-4 scrollable-menu\">\n              <div class=\"form-group\">\n                <button type=\"reset\" class=\"btn btn-outline-primary btn-sm dropdown-button\" (click)=\"clearMakeCheckboxes('make')\">Clear all</button>\n                <div *ngFor=\"let checkbox of makeCheckboxes\">\n                  <label><input type=\"checkbox\" value=\"{{checkbox.make}}\" [checked]=\"checkbox.checked\" (change)=\"onMakeSelect(checkbox.make.toLowerCase(), $event)\"></label> {{checkbox.make}}\n                </div>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"form-group dropdown col\">\n            <button class=\"btn btn-outline-primary dropdown-toggle text-right\" type=\"button\" id=\"modelDropDownMenuButton\" data-toggle=\"dropdown\">\n              Model\n            </button>\n            <form class=\"dropdown-menu p-4 scrollable-menu disabled\">\n              <div class=\"form-group\">\n                <button type=\"reset\" class=\"btn btn-outline-primary btn-sm dropdown-button\" (click)=\"clearMakeCheckboxes('model')\">Clear all</button>\n                <div *ngFor=\"let checkbox of modelCheckBoxes\">\n                  <label><input type=\"checkbox\" value=\"{{checkbox.model}}\" [checked]=\"checkbox.checked\" (change)=\"onModelSelection(checkbox.model.toLowerCase(), $event)\"></label> {{checkbox.model}}\n                </div>\n              </div>\n            </form>\n          </div>\n\n          <!--<div class=\"form-group col-md-2\">-->\n            <!--<input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchYear\" name=\"year\" (input)=\"filterTable()\" placeholder=\"Year\">-->\n          <!--</div>-->\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"horizontal text-muted\">\n              <div class=\"text-overflow-ellipsis\">\n                <span *ngFor=\"let selected of selectedMakes\">\n                  {{selected}},&nbsp;\n                </span>\n              </div>\n            </div>\n          </div>\n          <!--<div class=\"col\">-->\n            <!--<div class=\"horizontal text-muted\">-->\n              <!--<div class=\"text-overflow-ellipsis\">-->\n                <!--<span *ngFor=\"let selected of selectedModels\">-->\n                  <!--{{selected}},&nbsp;-->\n                <!--</span>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <div class=\"col-md-2\"></div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xl-10\">\n      <div class=\"row no-results\" *ngIf=\"noResults\">\n        No results found!\n      </div>\n      <div class=\"col p-table\" id=\"gray-scrollbar\">\n        <mat-card class=\"p-table-entry\" *ngFor=\"let product of productsToDisplay\">\n          <div class=\"row\">\n            <div class=\"col-sm-1\" style=\"margin-right: 10px; margin-top: 5px\">\n              <img mat-card-image\n                   src=\"https://thenewswheel.com/wp-content/uploads/2018/08/Ford-Mustang-NASCAR-Cup-race-car-10-100x100.jpeg\"\n                   style=\"width: 125px; height: 125px\">\n            </div>\n            <div class=\"col\">\n              <mat-card-title>{{product.model}}</mat-card-title>\n              <mat-card-subtitle>{{product.make}}, {{product.year}}</mat-card-subtitle>\n              <mat-card-content>\n                <p>\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n                  scrambled it to make a type specimen book.\n                </p>\n              </mat-card-content>\n            </div>\n            <div>\n              <button class=\"btn btn-outline-primary btn-inline\" (click)=\"paymentPage()\">Buy now</button>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_retriever_product_retriever_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product_retriever/product-retriever.service */ "./src/app/services/product_retriever/product-retriever.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(productService, router) {
        this.router = router;
        this.products = productService.getProducts();
        this.makes = productService.getMakeList();
        this.models = productService.getModelList();
        this.makeCheckboxes = [];
        this.modelCheckBoxes = [];
        this.selectedMakes = [];
        this.selectedModels = [];
        this.availableModels = [];
        this.filters = [];
        this.searchText = '';
        this.searchYear = '';
        this.noResults = false;
        this.productsToDisplay = this.products;
        this.initializeCheckboxes();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.filterTable = function () {
        this.noResults = false;
        if (this.searchText.length === 0 && this.filters.length === 0 && this.searchYear.length === 0) {
            this.productsToDisplay = this.products;
            return;
        }
        this.productsToDisplay = [];
        if (this.searchText.length !== 0) {
            this.applySearchTermFilter();
            // this.noResults = this.productsToDisplay.length === 0;
            // if (this.filters.length !== 0) {
            //   this.applyCheckboxFiltersWithSearchTerm();
            // }
            this.noResults = this.productsToDisplay.length === 0;
            return;
        }
        if (this.productsToDisplay.length === 0) {
            this.productsToDisplay = this.products;
        }
        // if (this.searchYear.length !== 0) {
        //   this.applyYearFilter();
        // }
        if (this.productsToDisplay.length === 0) {
            this.productsToDisplay = this.products;
        }
        if (this.filters.length === 0) {
            return;
        }
        this.applyCheckboxFilters();
        this.noResults = this.productsToDisplay.length === 0;
    };
    DashboardComponent.prototype.applyCheckboxFilters = function () {
        console.log(this.filters);
        if (this.searchText.length === 0 && this.searchYear.length === 0) {
            this.productsToDisplay = this.products;
        }
        var newList = [];
        for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
            var filter = _a[_i];
            for (var _b = 0, _c = this.productsToDisplay; _b < _c.length; _b++) {
                var product = _c[_b];
                if (product.make.toLowerCase().includes(filter) ||
                    product.model.toLowerCase().includes(filter)) {
                    newList.push(product);
                }
            }
        }
        this.productsToDisplay = newList;
    };
    // private applyCheckboxFilters() {
    //   for (const filter of this.filters) {
    //     for (const product of this.products) {
    //       if (product.year.toString().toLowerCase().includes(filter) ||
    //         product.make.toLowerCase().includes(filter) ||
    //         product.model.toLowerCase().includes(filter)) {
    //         this.productsToDisplay.push(product);
    //       }
    //     }
    //   }
    // }
    DashboardComponent.prototype.applySearchTermFilter = function () {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.year.toString().includes(this.searchText.toLowerCase()) ||
                product.make.toLowerCase().includes(this.searchText.toLowerCase()) ||
                product.model.toLowerCase().includes(this.searchText.toLowerCase())) {
                console.log(product);
                this.productsToDisplay.push(product);
            }
        }
    };
    DashboardComponent.prototype.applyCheckboxFiltersWithSearchTerm = function () {
        var productsSearchList = this.productsToDisplay;
        var newProductList = [];
        for (var _i = 0, _a = this.filters; _i < _a.length; _i++) {
            var filter = _a[_i];
            for (var _b = 0, productsSearchList_1 = productsSearchList; _b < productsSearchList_1.length; _b++) {
                var product = productsSearchList_1[_b];
                if (product.year.toString().toLowerCase().includes(filter) ||
                    product.make.toLowerCase().includes(filter) ||
                    product.model.toLowerCase().includes(filter)) {
                    newProductList.push(product);
                }
            }
        }
        this.productsToDisplay = newProductList;
    };
    DashboardComponent.prototype.applyYearFilter = function () {
        var newList = [];
        for (var _i = 0, _a = this.productsToDisplay; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.year.toString().includes(this.searchYear)) {
                console.log('hi');
                newList.push(product);
            }
        }
        this.productsToDisplay = newList;
    };
    DashboardComponent.prototype.initializeCheckboxes = function () {
        for (var _i = 0, _a = this.makes; _i < _a.length; _i++) {
            var make = _a[_i];
            this.makeCheckboxes.push({ 'make': make, 'checked': false });
        }
    };
    DashboardComponent.prototype.generateModelCheckboxes = function () {
        this.modelCheckBoxes = [];
        for (var _i = 0, _a = this.availableModels; _i < _a.length; _i++) {
            var model = _a[_i];
            this.modelCheckBoxes.push({ 'model': model, 'checked': false });
        }
    };
    DashboardComponent.prototype.generateAvailableModels = function () {
        this.availableModels = [];
        for (var _i = 0, _a = this.selectedMakes; _i < _a.length; _i++) {
            var make = _a[_i];
            for (var _b = 0, _c = this.products; _b < _c.length; _b++) {
                var product = _c[_b];
                if (product.make.toLowerCase() === make.toLowerCase()) {
                    if (!this.availableModels.includes(product.model)) {
                        this.availableModels.push(product.model);
                    }
                }
            }
        }
    };
    DashboardComponent.prototype.onMakeSelect = function (value, event) {
        if (event.target.checked === true) {
            this.selectedMakes.push(value);
        }
        else {
            var index = this.selectedMakes.indexOf(value);
            this.selectedMakes.splice(index, 1);
        }
        this.generateAvailableModels();
        this.generateModelCheckboxes();
        this.onMakeSelection(value, event);
    };
    DashboardComponent.prototype.onMakeSelection = function (value, event) {
        if (event.target.checked === true) {
            this.addFilter(value);
        }
        else {
            this.removeFilter(value);
        }
        this.filterTable();
    };
    DashboardComponent.prototype.onModelSelection = function (value, event) {
        var newList = [];
        console.log(this.selectedModels);
        if (event.target.checked === true) {
            this.selectedModels.push(value);
            this.applyCheckboxFilters();
            for (var _i = 0, _a = this.productsToDisplay; _i < _a.length; _i++) {
                var product = _a[_i];
                for (var _b = 0, _c = this.selectedModels; _b < _c.length; _b++) {
                    var model = _c[_b];
                    if (product.model.toLowerCase().includes(model)) {
                        newList.push(product);
                    }
                }
            }
            this.productsToDisplay = newList;
            // this.applyCheckboxFilters();
        }
        else {
            var index = this.selectedModels.indexOf(value);
            this.selectedModels.splice(index, 1);
            console.log('selected models ' + this.selectedModels);
            this.applyCheckboxFilters();
            for (var _d = 0, _e = this.productsToDisplay; _d < _e.length; _d++) {
                var product = _e[_d];
                for (var _f = 0, _g = this.selectedModels; _f < _g.length; _f++) {
                    var model = _g[_f];
                    if (product.model.toLowerCase().includes(model)) {
                        newList.push(product);
                    }
                }
            }
            return;
        }
        // this.productsToDisplay = newList;
    };
    DashboardComponent.prototype.clearMakeCheckboxes = function (type) {
        if (type === 'make') {
            for (var _i = 0, _a = this.makeCheckboxes; _i < _a.length; _i++) {
                var checkbox = _a[_i];
                checkbox.checked = false;
            }
        }
        if (type === 'model') {
            for (var _b = 0, _c = this.modelCheckBoxes; _b < _c.length; _b++) {
                var checkbox = _c[_b];
                checkbox.checked = false;
            }
        }
    };
    DashboardComponent.prototype.addFilter = function (filterVal) {
        if (!this.filters.includes(filterVal)) {
            this.filters.push(filterVal);
        }
    };
    DashboardComponent.prototype.removeFilter = function (filterVal) {
        if (this.filters.includes(filterVal)) {
            var index = this.filters.indexOf(filterVal);
            this.filters.splice(index, 1);
        }
    };
    DashboardComponent.prototype.paymentPage = function () {
        this.router.navigate(['/purchase']);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_retriever_product_retriever_service__WEBPACK_IMPORTED_MODULE_2__["ProductRetrieverService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/payment/payment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/payment/payment.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/payment/payment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\"></div>\n    <div class=\"col-md-4\">\n        <form class=\"form-horizontal\">\n            <!-- Form Name -->\n            <h2 style=\"margin-left: 120px\">Confirm Your Payment</h2>\n            <!--<legend>Confirm Your Payment</legend>-->\n\n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Name</label>\n              <div class=\"col\">\n                <input id=\"textinput\" name=\"textinput\" type=\"text\" placeholder=\"Enter name..\" class=\"form-control input-md\" required=\"\">\n\n              </div>\n            </div>\n\n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Address</label>\n              <div class=\"col\">\n                <input id=\"textnput\" name=\"textinput\" type=\"text\" placeholder=\"Enter address..\" class=\"form-control input-md\" required=\"\">\n\n              </div>\n            </div>\n\n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Phone Number</label>\n              <div class=\"col\">\n                <input id=\"textinut\" name=\"textinput\" type=\"text\" placeholder=\"Enter phone number..\" class=\"form-control input-md\">\n\n              </div>\n            </div>\n\n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"text\">E-mail Address</label>\n              <div class=\"col\">\n                <input id=\"text\" name=\"\" type=\"text\" placeholder=\"Enter e-mail..\" class=\"form-control input-md\" required=\"\">\n\n              </div>\n            </div>\n\n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\" for=\"textinput\">Card Number</label>\n              <div class=\"col\">\n                <input id=\"tex\" name=\"\" type=\"text\" placeholder=\"Enter card number..\" class=\"form-control input-md\" required=\"\">\n\n              </div>\n            </div>\n\n            <!-- Button -->\n            <div class=\"form-group\" style=\"margin-left: 175px\">\n              <label class=\"col-md-4 control-label\" for=\"singlebutton\"></label>\n              <div class=\"col\">\n                <button id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary\" (click)=\"open()\">Confirm Purchase</button>\n              </div>\n            </div>\n\n        </form>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: NgbdModalContentComponent, PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContentComponent", function() { return NgbdModalContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



// @ts-ignore
var NgbdModalContentComponent = /** @class */ (function () {
    function NgbdModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgbdModalContentComponent.prototype, "name");
    NgbdModalContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-modal',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Congratulations!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>You successfully purchased your vehicle!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NgbdModalContentComponent);
    return NgbdModalContentComponent;
}());

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(modalService) {
        this.modalService = modalService;
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContentComponent);
        modalRef.componentInstance.name = 'World';
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/components/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/product-table/product-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/product-table/product-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-table {\r\n  border-radius: 25px;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  margin-top: 10%;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LXRhYmxlL3Byb2R1Y3QtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtdGFibGUvcHJvZHVjdC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtdGFibGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/product-table/product-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-table/product-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product-table/product-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-table/product-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableComponent", function() { return ProductTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_retriever_product_retriever_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product_retriever/product-retriever.service */ "./src/app/services/product_retriever/product-retriever.service.ts");



var ProductTableComponent = /** @class */ (function () {
    function ProductTableComponent(productService) {
        this.products = productService.getProducts();
    }
    ProductTableComponent.prototype.ngOnInit = function () { };
    ProductTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-table',
            template: __webpack_require__(/*! ./product-table.component.html */ "./src/app/components/product-table/product-table.component.html"),
            styles: [__webpack_require__(/*! ./product-table.component.css */ "./src/app/components/product-table/product-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_retriever_product_retriever_service__WEBPACK_IMPORTED_MODULE_2__["ProductRetrieverService"]])
    ], ProductTableComponent);
    return ProductTableComponent;
}());



/***/ }),

/***/ "./src/app/components/purchase-page/purchase-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/purchase-page/purchase-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-outline {\r\n  border-radius: 25px;\r\n  height: 200px;\r\n}\r\n\r\n.dashboard {\r\n  margin-top: 10%;\r\n}\r\n\r\n.dashboard-form {\r\n  margin-top: 5%;\r\n  margin-left: 3%;\r\n  margin-right: 3%;\r\n}\r\n\r\n.scrollable-menu {\r\n  height: auto;\r\n  max-height: 500px;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.dropdown-toggle {\r\n  width: 100%;\r\n}\r\n\r\ndiv.text-overflow-ellipsis {\r\n  width: 80%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.horizontal {\r\n  display: flex;\r\n}\r\n\r\n#demoFont {\r\n  font-family: \"Arial Black\", Gadget, sans-serif;\r\n  font-size: 35px;\r\n  letter-spacing: 2px;\r\n  word-spacing: 2px;\r\n  color: #218C07;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1wYWdlL3B1cmNoYXNlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsK0NBQStDO0VBQy9DLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIscUJBQXFCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1wYWdlL3B1cmNoYXNlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtb3V0bGluZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlLW1lbnUge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5kaXYudGV4dC1vdmVyZmxvdy1lbGxpcHNpcyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jZGVtb0ZvbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIEdhZGdldCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB3b3JkLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzIxOEMwNztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/purchase-page/purchase-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/purchase-page/purchase-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Codes by HTML.am -->\n\n<!-- CSS Code -->\n<style type=\"text/css\" scoped>\n  .GeneratedText {\n    font-family:Arial, sans-serif;font-size:2em;letter-spacing:0.2em;line-height:1.3em;text-align:center;color:#330099;background-color:#CCFFFF;padding:1.5em;\n  }\n</style>\n\n<!-- HTML Code -->\n<div class=\"GeneratedText\">2019 BMW X6</div>\n\n<div class=\"row\">\n  <div class=\"col\"></div>\n  <div class=\"col text-center\">\n    <div id=\"demoFont\">$63,550</div>\n    <table style=\"width: 239px; margin-left: 150px; margin-top: 20px\">\n      <tbody>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">MSRP</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;$70,000</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">Location</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;San Antonio, TX</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">Mileage</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;15 miles</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">Transmission</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;Automatic</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">Exterior Color</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;Black</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">Fuel Economy</td>\n        <td style=\"width: 119px; height: 23px;\">\n          <p>&nbsp;23 MPG City</p>\n          <p>34 MPG Highway</p>\n        </td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">&nbsp;Engine</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;I4</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">&nbsp;Drivetrain</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;Rear-Wheel Drive</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">Condition</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;New</td>\n      </tr>\n      <tr style=\"height: 23px;\">\n        <td style=\"width: 119px; height: 23px;\">Available</td>\n        <td style=\"width: 119px; height: 23px;\">&nbsp;Yes</td>\n      </tr>\n      </tbody>\n    </table>\n    <!-- DivTable.com -->\n    <div style=\" margin-top: 30px; color:#218C07\" >\n      <input type=\"button\" class=\"btn btn-primary\" (click)=\"onPurchaseButtonClick()\" value=\"Purchase Vehicle\" />\n    </div>\n  </div>\n  <div class=\"col\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/purchase-page/purchase-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/purchase-page/purchase-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: PurchasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePageComponent", function() { return PurchasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




var PurchasePageComponent = /** @class */ (function () {
    function PurchasePageComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    PurchasePageComponent.prototype.onPurchaseButtonClick = function () {
        this.router.navigate(['/payment']);
    };
    PurchasePageComponent.prototype.ngOnInit = function () {
    };
    PurchasePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-page',
            template: __webpack_require__(/*! ./purchase-page.component.html */ "./src/app/components/purchase-page/purchase-page.component.html"),
            styles: [__webpack_require__(/*! ./purchase-page.component.css */ "./src/app/components/purchase-page/purchase-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PurchasePageComponent);
    return PurchasePageComponent;
}());



/***/ }),

/***/ "./src/app/models/Product.ts":
/*!***********************************!*\
  !*** ./src/app/models/Product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, model, make, year, vin) {
        this.id = id;
        this.model = model;
        this.make = make;
        this.year = year;
        this.vin = vin;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/services/product_retriever/product-retriever.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/product_retriever/product-retriever.service.ts ***!
  \*************************************************************************/
/*! exports provided: ProductRetrieverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRetrieverService", function() { return ProductRetrieverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/MOCK_DATA.json */ "./src/assets/MOCK_DATA.json");
var _assets_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/MOCK_DATA.json */ "./src/assets/MOCK_DATA.json", 1);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Product */ "./src/app/models/Product.ts");




var ProductRetrieverService = /** @class */ (function () {
    function ProductRetrieverService() {
        this.products = [];
        this.convertToProducts();
    }
    ProductRetrieverService.prototype.getProducts = function () {
        return this.products;
    };
    ProductRetrieverService.prototype.convertToProducts = function () {
        for (var _i = 0, MOCK_DATA_1 = _assets_MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_2__; _i < MOCK_DATA_1.length; _i++) {
            var jsonProduct = MOCK_DATA_1[_i];
            var product = new _models_Product__WEBPACK_IMPORTED_MODULE_3__["Product"](jsonProduct.id, jsonProduct.model, jsonProduct.make, jsonProduct.year, jsonProduct.vin);
            this.products.push(product);
        }
    };
    ProductRetrieverService.prototype.getMakeList = function () {
        var makes = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (!makes.includes(product.make)) {
                makes.push(product.make);
            }
        }
        return makes;
    };
    ProductRetrieverService.prototype.getModelList = function () {
        var models = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (!models.includes(product.model)) {
                models.push(product.model);
            }
        }
        return models;
    };
    ProductRetrieverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductRetrieverService);
    return ProductRetrieverService;
}());



/***/ }),

/***/ "./src/assets/MOCK_DATA.json":
/*!***********************************!*\
  !*** ./src/assets/MOCK_DATA.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, default */
/***/ (function(module) {

module.exports = [{"id":1,"model":"X6","make":"BMW","year":2010,"vin":"JN1CV6FE8AM484176"},{"id":2,"model":"Suburban 1500","make":"Chevrolet","year":2003,"vin":"1GYS3HEF8DR072748"},{"id":3,"model":"Corvair","make":"Chevrolet","year":1960,"vin":"5FRYD3H99GB833236"},{"id":4,"model":"Yukon","make":"GMC","year":2005,"vin":"4F2CY0C71BK518477"},{"id":5,"model":"XJ Series","make":"Jaguar","year":2003,"vin":"SALAG2D49BA388067"},{"id":6,"model":"Matrix","make":"Toyota","year":2007,"vin":"5J8TB4H32FL800868"},{"id":7,"model":"LS","make":"Lexus","year":2012,"vin":"5GADV23W27D308550"},{"id":8,"model":"Bronco","make":"Ford","year":1990,"vin":"3VWJP7AT5CM295371"},{"id":9,"model":"LX","make":"Lexus","year":2005,"vin":"5FNRL3H27AB542866"},{"id":10,"model":"C8","make":"Spyker","year":2007,"vin":"WAUXU64B42N044183"},{"id":11,"model":"Accord","make":"Honda","year":2012,"vin":"JH4CU2F65CC723420"},{"id":12,"model":"5 Series","make":"BMW","year":2001,"vin":"JN1BV7AP7FM554445"},{"id":13,"model":"Camry","make":"Toyota","year":1998,"vin":"1FAHP3EN6BW667987"},{"id":14,"model":"Impala","make":"Chevrolet","year":2012,"vin":"WBAPN7C58BF630927"},{"id":15,"model":"Voyager","make":"Plymouth","year":1993,"vin":"SALGS2TF7FA339337"},{"id":16,"model":"SX4","make":"Suzuki","year":2008,"vin":"2B3CK8CT3AH731063"},{"id":17,"model":"6000","make":"Pontiac","year":1988,"vin":"1FTEW1CW2AK873357"},{"id":18,"model":"Avalon","make":"Toyota","year":2009,"vin":"JA32X8HW9AU257520"},{"id":19,"model":"Mark VIII","make":"Lincoln","year":1996,"vin":"1C4RDHEG8EC130226"},{"id":20,"model":"Bonneville","make":"Pontiac","year":1998,"vin":"2FMGK5B83FB225215"},{"id":21,"model":"Armada","make":"Nissan","year":2007,"vin":"1GD020CG9BF461020"},{"id":22,"model":"SL-Class","make":"Mercedes-Benz","year":2003,"vin":"WBA1M1C52FV239323"},{"id":23,"model":"Pacifica","make":"Chrysler","year":2007,"vin":"SAJWA0EX2E8035484"},{"id":24,"model":"944","make":"Porsche","year":1990,"vin":"WAUWG74F19N850150"},{"id":25,"model":"Prius","make":"Toyota","year":2012,"vin":"5NMSG3AB6AH384597"},{"id":26,"model":"Continental","make":"Lincoln","year":1986,"vin":"YV1672MK4D2271709"},{"id":27,"model":"Relay","make":"Saturn","year":2005,"vin":"WAUGFAFC0DN153939"},{"id":28,"model":"Range Rover","make":"Land Rover","year":1989,"vin":"1G6KD54Y41U273191"},{"id":29,"model":"Carens","make":"Kia","year":2008,"vin":"WAUEF48H57K937525"},{"id":30,"model":"300","make":"Chrysler","year":2005,"vin":"5YMGZ0C53CL594556"},{"id":31,"model":"Topaz","make":"Mercury","year":1985,"vin":"WAUHFBFL3AN370794"},{"id":32,"model":"Taurus","make":"Ford","year":1987,"vin":"2C3CDYAG2CH564622"},{"id":33,"model":"Cabriolet","make":"Volkswagen","year":2001,"vin":"WVGEF9BP3ED960685"},{"id":34,"model":"Roadster","make":"Tesla","year":2010,"vin":"JHMZE2H3XDS497246"},{"id":35,"model":"D350 Club","make":"Dodge","year":1993,"vin":"2GKALMEK3D6978703"},{"id":36,"model":"Ranger","make":"Ford","year":2011,"vin":"WBANU5C53AC004037"},{"id":37,"model":"M-Class","make":"Mercedes-Benz","year":2011,"vin":"5XYKT3A17DG116367"},{"id":38,"model":"Outback","make":"Subaru","year":2001,"vin":"3D73M4CLXBG512979"},{"id":39,"model":"Classic","make":"Chevrolet","year":2004,"vin":"WBA4C9C58FG590661"},{"id":40,"model":"Patriot","make":"Jeep","year":2010,"vin":"5TDBY5G1XDS510470"},{"id":41,"model":"Cougar","make":"Mercury","year":1994,"vin":"WAUEG98EX6A105487"},{"id":42,"model":"F150","make":"Ford","year":2012,"vin":"1G6DA67V490656155"},{"id":43,"model":"Taurus","make":"Ford","year":2007,"vin":"1G4CU541424572097"},{"id":44,"model":"Sportage","make":"Kia","year":1996,"vin":"1G6DD67V180450717"},{"id":45,"model":"V8","make":"Audi","year":1990,"vin":"1G6DK67VX80701059"},{"id":46,"model":"960","make":"Volvo","year":1997,"vin":"WAULC68E55A076769"},{"id":47,"model":"645","make":"BMW","year":2004,"vin":"WAULT58E94A427644"},{"id":48,"model":"Ram 2500 Club","make":"Dodge","year":1995,"vin":"KMHCT4AE3EU444846"},{"id":49,"model":"PT Cruiser","make":"Chrysler","year":2006,"vin":"WBADN53423G751897"},{"id":50,"model":"S70","make":"Volvo","year":1998,"vin":"1GYS4BEF1BR245887"}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mark-Laptop\ui-ecommerce-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map