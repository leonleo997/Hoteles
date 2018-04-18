webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"indigo darken-4\">\r\n    <div class=\"nav-wrapper\">\r\n      <a href=\"#\" class=\"brand-logo\">JourneyBooking</a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <li>\r\n          <a routerLink=\"hotel\">Busca tu hotel</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"nuevo-hotel\">Agrega un hotel</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"sobre-nosotros\">Sobre nosotros</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n  <router-outlet></router-outlet>\r\n  \r\n  \r\n\r\n \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Finding Hotels';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__ = __webpack_require__("./node_modules/angularfire2/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_hotel_hotel_component__ = __webpack_require__("./src/app/components/hotel/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_hotel_service__ = __webpack_require__("./src/app/services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_busqueda_busqueda_component__ = __webpack_require__("./src/app/components/busqueda/busqueda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_nuevo_hotel_nuevo_hotel_component__ = __webpack_require__("./src/app/components/nuevo-hotel/nuevo-hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_router_config__ = __webpack_require__("./src/app/components/router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sobre_nosotros_sobre_nosotros_component__ = __webpack_require__("./src/app/components/sobre-nosotros/sobre-nosotros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_comentarios_comentarios_component__ = __webpack_require__("./src/app/components/comentarios/comentarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_comentario_crear_comentario_crear_component__ = __webpack_require__("./src/app/components/comentario-crear/comentario-crear.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_hotel_hotel_component__["a" /* HotelComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_busqueda_busqueda_component__["a" /* BusquedaComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_nuevo_hotel_nuevo_hotel_component__["a" /* NuevoHotelComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sobre_nosotros_sobre_nosotros_component__["a" /* SobreNosotrosComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_comentarios_comentarios_component__["a" /* ComentariosComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_comentario_crear_comentario_crear_component__["a" /* ComentarioCrearComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__components_router_config__["a" /* RouterConfig */]),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_18__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDQDEONMhppVg8b1bK2bi2kbvsFkbJ2Q5Q'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_hotel_service__["a" /* HotelService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/busqueda/busqueda.component.css":
/***/ (function(module, exports) {

module.exports = "#contentCards {\r\n\ttext-align:center;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n#contentCards h1 {\r\n    text-align: center;\r\n    font-size: 4em;\r\n}\r\n\r\nagm-map {\r\n    height: 300px;\r\n  }\r\n\r\n.parallax {\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#buscador {\r\n    width: 50%;\r\n    margin-left: 25%;\r\n    border-radius: 2em;\r\n}\r\n\r\n#content h1 {\r\n    font-size: 3em;\r\n}\r\n\r\n#inputBuscador input {\r\nfont-family:'Raleway', sans-serif;\r\nfont-size: 2em;\r\nborder-radius: 2em;\r\n}\r\n\r\n#iconoBuscar {\r\n    font-size: 3rem;\r\n}\r\n\r\n#imagenDos {\r\n\tbackground-image: url(https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a575215444e7625d52ca102bb9c78ad1&auto=format&fit=crop&w=1500&q=80);\r\n\tmin-height: 60%;\r\n}\r\n\r\n#bushotel h1 {\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 4em;\r\n}\r\n\r\n#cardComentarios {\r\n    margin: 0;\r\n    height: 300px;\r\n    width: 700px;\r\n    overflow: auto;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/busqueda/busqueda.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"indigo darken-3\" id=\"buscador\">\r\n    <div class=\"nav-wrapper\">\r\n      <form>\r\n        <div class=\"input-field\" id=\"inputBuscador\">\r\n          <input id=\"search\" type=\"search\" required=\"true\" placeholder=\"Encuentra tu hotel aquí\" name=\"nombre\" [(ngModel)]=\"nombre\"\r\n            (ngModelChange)=\"buscar()\">\r\n          <label class=\"label-icon\" for=\"search\">\r\n            <i class=\"material-icons\" id=\"iconoBuscar\">search </i>\r\n          </label>\r\n          <i class=\"material-icons\" onClick=\"search.value=''\" update=\"search\">close</i>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<br/>\r\n<div class=\"container-fluid\">\r\n  <h1>Resultado de la busqueda</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col l12\">\r\n      <div id=\"bushotel\" class=\"card-panel brown lighten-5\" *ngFor=\"let hotel of busqueda\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n              <h1>{{hotel.nombre}}</h1>\r\n              <h2>Costo por habitación: ${{hotel.costoHabitacion}}</h2>\r\n          </div>\r\n        </div>\r\n        <p>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\r\n            aria-controls=\"hotel.nombre\">\r\n            más\r\n          </button>\r\n        </p>\r\n        <div id=\"hotel.nombre\" [ngbCollapse]=\"isCollapsed\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col s5 container-fluid\">\r\n                <h3>Ubicación</h3>\r\n                <agm-map [latitude]=\"hotel.latitud\" [longitude]=\"hotel.longitud\" [zoom]=\"zoom\">\r\n                  <agm-marker [latitude]=\"hotel.latitud\" [longitude]=\"hotel.longitud\"></agm-marker>\r\n                </agm-map>\r\n              </div>\r\n              <div class=\"col s7\">\r\n                <h3>Comentarios</h3>\r\n                <div id=\"cardComentarios\" class=\"card-panel\">\r\n                  <ngb-tabset>\r\n                    <ngb-tab title=\"Comentarios\">\r\n                      <ng-template ngbTabContent>\r\n                        <ul class=\"collection\">\r\n                          <app-comentarios [hotel]=\"hotel.id\" [hoteles]=\"hoteles\"></app-comentarios>\r\n                        </ul>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                      <ng-template ngbTabTitle>\r\n                        <b>Mi</b> Comentario</ng-template>\r\n                      <ng-template ngbTabContent>\r\n                        <div class=\"container\">\r\n                          <app-comentario-crear [hotel]=\"hotel\"></app-comentario-crear>\r\n                        </div>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n\r\n                  </ngb-tabset>\r\n                </div>\r\n                <br/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/busqueda/busqueda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaComponent; });
/* unused harmony export NgbdRatingEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("./src/app/services/hotel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusquedaComponent = /** @class */ (function () {
    function BusquedaComponent(hotelService) {
        var _this = this;
        this.hotelService = hotelService;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.zoom = 13;
        this.hotelService.getHotels().subscribe(function (valores) { return _this.hoteles = valores; });
        this.hotelService.getHotels().subscribe(function (valores) { return _this.busqueda = valores; });
        this.nombre = '';
        this.nombre = '';
    }
    BusquedaComponent.prototype.ngOnInit = function () {
        //this.isCollapsed = false;
    };
    BusquedaComponent.prototype.buscar = function () {
        var _this = this;
        console.log('inicia buscar');
        if (this.nombre === '') {
            this.nombre = ' ';
        }
        if (this.nombre !== null && this.busqueda !== null) {
            this.busqueda = this.busqueda.filter(function (hotel) { return hotel.nombre.toLowerCase().startsWith(_this.nombre.toLocaleLowerCase()); });
        }
        if ((this.busqueda.length) === 0) {
            this.busqueda = this.hoteles;
        }
        var m = this.busqueda.length;
    };
    BusquedaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-busqueda',
            template: __webpack_require__("./src/app/components/busqueda/busqueda.component.html"),
            styles: [__webpack_require__("./src/app/components/busqueda/busqueda.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]])
    ], BusquedaComponent);
    return BusquedaComponent;
}());

var NgbdRatingEvents = /** @class */ (function () {
    function NgbdRatingEvents() {
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
    }
    return NgbdRatingEvents;
}());



/***/ }),

/***/ "./src/app/components/comentario-crear/comentario-crear.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/comentario-crear/comentario-crear.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"addComment()\">\n    <div class=\"col s12 input-field\">\n        <i class=\"material-icons prefix\">email</i>\n        <input id=\"correo\" type=\"text\" class=\"validate\" name=\"correo\" [(ngModel)]=\"comentario.email\">\n        <label for=\"correo\" >correo</label>\n      </div>\n      <div class=\"col s12 input-field\">\n        <i class=\"material-icons prefix\">account_circle</i>\n        <input id=\"usuario\" type=\"text\" class=\"validate\" name=\"usuario\" [(ngModel)]=\"comentario.usuario\">\n        <label for=\"usuario\">Usuario</label>\n      </div>\n      <div class=\"col s12 input-field\">\n        <i class=\"material-icons prefix\">comment</i>\n        <textarea id=\"textarea\" class=\"materialize-textarea\" name=\"descripcion\" [(ngModel)]=\"comentario.comentario\"></textarea>\n        <label for=\"textarea\">Comentario</label>\n      </div>\n      <div class=\"col s12 input-field\">\n        <p>Calificación</p>\n        <ngb-rating [(rate)]=\"comentario.calificacion\" [readonly]=\"false\"></ngb-rating>\n        <br/>\n        <br/>\n        <button type=\"button\" class=\"btn btn-outline-primary\" type=\"submit\">Comentar</button>\n        <button type=\"button\" class=\"btn btn-outline-danger\">Cancelar</button>\n      </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/comentario-crear/comentario-crear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentarioCrearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("./src/app/services/hotel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_hotel__ = __webpack_require__("./src/app/model/hotel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComentarioCrearComponent = /** @class */ (function () {
    function ComentarioCrearComponent(hotelService) {
        this.hotelService = hotelService;
        this.refrescar();
    }
    ComentarioCrearComponent.prototype.refrescar = function () {
        this.comentario = {
            id: null,
            usuario: null,
            email: null,
            comentario: null,
            calificacion: 0
        };
    };
    ComentarioCrearComponent.prototype.ngOnInit = function () {
    };
    ComentarioCrearComponent.prototype.addComment = function () {
        if (this.comentario.email !== null && this.comentario.usuario !== null
            && this.comentario.comentario !== null) {
            this.hotelService.addComment(this.comentario, this.hotel);
            this.refrescar();
            alert('comentario agregado exitosamente');
        }
        else {
            alert('Para añadir un comentario se deben llenar todos los campos');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hotel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_hotel__["a" /* Hotel */])
    ], ComentarioCrearComponent.prototype, "hotel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hoteles'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_hotel__["a" /* Hotel */])
    ], ComentarioCrearComponent.prototype, "hoteles", void 0);
    ComentarioCrearComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comentario-crear',
            template: __webpack_require__("./src/app/components/comentario-crear/comentario-crear.component.html"),
            styles: [__webpack_require__("./src/app/components/comentario-crear/comentario-crear.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]])
    ], ComentarioCrearComponent);
    return ComentarioCrearComponent;
}());



/***/ }),

/***/ "./src/app/components/comentarios/comentarios.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/comentarios/comentarios.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"collection-item avatar\" *ngFor=\"let comentario of comentarios\">\r\n    <i class=\"material-icons circle\">person</i>\r\n    <span class=\"title\">{{comentario.usuario}}</span>\r\n    <br>\r\n    <p>{{comentario.email}}</p>\r\n    <p>{{comentario.comentario}}</p>\r\n\r\n    <p>\r\n      <br>\r\n      <ngb-rating [(rate)]=\"comentario.calificacion \" [readonly]=\"true\"></ngb-rating>\r\n    </p>\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/components/comentarios/comentarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentariosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("./src/app/services/hotel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComentariosComponent = /** @class */ (function () {
    function ComentariosComponent(hotelService) {
        this.hotelService = hotelService;
    }
    ComentariosComponent.prototype.ngOnInit = function () {
        this.calificacionProm = 0;
    };
    ComentariosComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(this.hotel);
        this.hotelService.getComments(this.hotel).subscribe(function (valores) { return _this.comentarios = valores; });
        var cantidad = 0;
        /*
        for (let index = 0; index < this.comentarios.length; index++) {
          cantidad += this.comentarios[index].calificacion;
        }
        this.calificacionProm = cantidad/this.comentarios.length;
        }*/
        console.log();
    };
    ComentariosComponent.prototype.refrescar = function () {
        this.comentario = {
            id: null,
            usuario: null,
            email: null,
            comentario: null,
            calificacion: 0
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hotel'),
        __metadata("design:type", String)
    ], ComentariosComponent.prototype, "hotel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('hoteles'),
        __metadata("design:type", Array)
    ], ComentariosComponent.prototype, "hoteles", void 0);
    ComentariosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comentarios',
            template: __webpack_require__("./src/app/components/comentarios/comentarios.component.html"),
            styles: [__webpack_require__("./src/app/components/comentarios/comentarios.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]])
    ], ComentariosComponent);
    return ComentariosComponent;
}());



/***/ }),

/***/ "./src/app/components/hotel/hotel.component.css":
/***/ (function(module, exports) {

module.exports = ".parallax {\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n#imagenUno {\r\n\tbackground-image: url(https://images.unsplash.com/photo-1492455417212-e162ed4446e1?ixlib=rb-0.3.5&s=240ea5c54f32b10d809e361272c6a8f4&auto=format&fit=crop&w=1500&q=80);\r\n\tmin-height: 100%;\r\n}\r\n#content {\r\n\ttext-align: center;\r\n\tmargin-top: 9%;\r\n\tcolor:white;\r\n\tbackground-color: rgba(0,0,0,0);\r\n}\r\nhr {\r\n\twidth: 40%;\r\n}\r\n#buscador {\r\n    width: 50%;\r\n    margin-left: 25%;\r\n    border-radius: 2em;\r\n}\r\n#content h1 {\r\n    font-size: 3em;\r\n}\r\n#inputBuscador input {\r\nfont-family:'Raleway', sans-serif;\r\nfont-size: 2em;\r\nborder-radius: 2em;\r\n}\r\n#iconoBuscar {\r\n    font-size: 3rem;\r\n}\r\n#imagenDos {\r\n\tbackground-image: url(https://images.unsplash.com/photo-1479502806991-251c94be6b15?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a575215444e7625d52ca102bb9c78ad1&auto=format&fit=crop&w=1500&q=80);\r\n\tmin-height: 60%;\r\n}\r\n#lema {\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\nh1 h3 {\r\n    background-color: black;\r\n}"

/***/ }),

/***/ "./src/app/components/hotel/hotel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\" id=\"imagenUno\">\r\n  <div class=\"container-fluid\" id=\"primero\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div id=\"content\">\r\n          <br/>\r\n          <br/>\r\n          <br/>\r\n          <br/>\r\n          <br/>\r\n          <div class=\"container-fluid\" id=\"lema\">\r\n            <h1>JourneyBooking.com</h1>\r\n            <h3>Encuentra los mejores hoteles en lugares geniales al mejor precio.\r\n              <br /> Con JourneyBooking tendrás la mejor experiencia </h3>\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n  <app-busqueda></app-busqueda>\r\n</div>\r\n\r\n<div class=\"parallax\" id=\"imagenDos\">\r\n  <div class=\"container-fluid\">\r\n  </div>\r\n</div>\r\n\r\n\r\n<footer class=\"page-footer indigo darken-4\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col l6 s12\">\r\n        <h5 class=\"white-text\">Footer Content</h5>\r\n        <p class=\"grey-text text-lighten-4\">JourneyBooking se encuentra ubicada en el sur de la ciudad de Cali, en colombia. Es propiedad de la Universidad Icesi.</p>\r\n        <p>Desarrolladores y Arquitectos</p>\r\n        <p>Yesid Leonardo Lopéz</p>\r\n        <p>Christian Osorio Trejos</p>\r\n      </div>\r\n      <div class=\"col l4 offset-l2 s12\">\r\n        <h5 class=\"white-text\">Siguenos en:</h5>\r\n        <ul>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-facebook-square\"></i> Facebook</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-twitter\"></i> Twitter</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-instagram\"></i> Instagram</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-pinterest\"></i> Pinterest</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-copyright\">\r\n    <div class=\"container\">\r\n      © 2018 Copyright Text\r\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">Propiedad intelectual</a>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/hotel/hotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("./src/app/services/hotel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelComponent = /** @class */ (function () {
    function HotelComponent(hotelService) {
        this.hotelService = hotelService;
        this.nombre = '';
    }
    HotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelService.getHotels().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    };
    HotelComponent.prototype.delHotel = function (e, hotel) {
        console.log('eliminar hotel');
        this.hotelService.delHotel(hotel);
    };
    HotelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hotel',
            template: __webpack_require__("./src/app/components/hotel/hotel.component.html"),
            styles: [__webpack_require__("./src/app/components/hotel/hotel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/components/nuevo-hotel/nuevo-hotel.component.css":
/***/ (function(module, exports) {

module.exports = ".parallax {\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#banner {\r\n\tbackground-image: url(https://images.unsplash.com/photo-1440558953273-969c107f78a4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5eaa0f30a1c37f38a4a365bd0c7d54ea&auto=format&fit=crop&w=1525&q=80);\r\n\tmin-height: 60%;\r\n}\r\n\r\n#content {\r\n\ttext-align: center;\r\n\tmargin-top: 9%;\r\n\tcolor:white;\r\n\tbackground-color: rgba(0,0,0,0);\r\n}\r\n\r\n#content h1 {\r\n    font-size: 3em;\r\n    font-family:'Raleway', sans-serif;\r\n}\r\n\r\n#content h3 {\r\n    font-family: 'Merriweather' serif;\r\n}\r\n\r\n#formulario h2 {\r\n    font-family:'Raleway', sans-serif;\r\n    text-align: center;\r\n\r\n}\r\n\r\n#formulario h3 {\r\n    font-family: 'Merriweather' serif;\r\n    text-align: center;\r\n}\r\n\r\nagm-map {\r\n  height: 300px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/nuevo-hotel/nuevo-hotel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\" id=\"banner\">\r\n  <div class=\"container-fluid\" id=\"primero\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div id=\"content\">\r\n          <h1>¿Quieres ser parte de la familia JourneyBooking.com?</h1>\r\n          <h3>Continua abajo.</h3>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br/>\r\n\r\n<div class=\"container\" id=\"formulario\">\r\n  <h2>Deja que nosotros te ayudemos a crecer en tu negocio de hoteleria.</h2>\r\n  <h3>Agrega tus hoteles con nosotros y emprezarás a ser parte de la familia JourneyBooking.com</h3>\r\n\r\n  <br/>\r\n  <br/>\r\n  <form (ngSubmit)=\"addHotel()\">\r\n    <div class=\"container \">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 border\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <input type=\"text\" name=\"nombre\" placeholder=\"Nombre del hotel\" [(ngModel)]=\"hotel.nombre\" required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <input type=\"number\" name=\"costoHabitacion\" placeholder=\"Costo por habitación\" [(ngModel)]=\"hotel.costoHabitacion\" required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <input type=\"number\" placeholder=\"Latitud\" name=\"latitud\" [(ngModel)]=\"hotel.latitud\" required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <input type=\"number\" placeholder=\"Longitud\" name=\"longitud\" [(ngModel)]='hotel.longitud' required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" value=\"Agregar\">\r\n                  <i class=\"material-icons right\">send</i>Agregar\r\n                </button>\r\n              </div>\r\n              <div class=\"col-lg-6\">\r\n                <button class=\"btn waves-effect red darken-4\" type=\"button\" name=\"action\" value=\"Cancelar\" (click)=\"nada()\">Cancelar\r\n                </button>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-1\"></div>\r\n        <div class=\"col-lg-6\">\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (mapClick)=\"click($event)\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n          </agm-map>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n<br/>\r\n<footer class=\"page-footer indigo darken-4\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col l6 s12\">\r\n        <h5 class=\"white-text\">Footer Content</h5>\r\n        <p class=\"grey-text text-lighten-4\">JourneyBooking se encuentra ubicada en el sur de la ciudad de Cali, en colombia. Es propiedad de la Universidad Icesi.</p>\r\n        <p>Desarrolladores y Arquitectos</p>\r\n        <p>Yesid Leonardo Lopéz</p>\r\n        <p>Christian Osorio Trejos</p>\r\n      </div>\r\n      <div class=\"col l4 offset-l2 s12\">\r\n        <h5 class=\"white-text\">Siguenos en:</h5>\r\n        <ul>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-facebook-square\"></i> Facebook</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-twitter\"></i> Twitter</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-instagram\"></i> Instagram</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-pinterest\"></i> Pinterest</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-copyright\">\r\n    <div class=\"container\">\r\n      © 2018 Copyright Text\r\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">Propiedad intelectual</a>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/nuevo-hotel/nuevo-hotel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoHotelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hotel_service__ = __webpack_require__("./src/app/services/hotel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NuevoHotelComponent = /** @class */ (function () {
    function NuevoHotelComponent(hotelService) {
        var _this = this;
        this.hotelService = hotelService;
        this.hotel = {
            id: null,
            nombre: null,
            costoHabitacion: null,
            latitud: null,
            longitud: null
        };
        this.hotelService.getHotels().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
    }
    NuevoHotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelService.getHotels().subscribe(function (hotels) {
            _this.hotels = hotels;
        });
        this.lat = 3.4460088;
        this.lng = -76.50336999999999;
        this.zoom = 13;
    };
    NuevoHotelComponent.prototype.addHotel = function () {
        if (this.hotel.nombre !== null && this.hotel.costoHabitacion !== null &&
            this.hotel.latitud !== null && this.hotel.longitud !== null) {
            this.hotelService.addHotel(this.hotel, this.hotels);
            this.hotel = {
                id: null,
                nombre: null,
                costoHabitacion: null,
                latitud: null,
                longitud: null
            };
            alert('Hotel agregado exitosamente');
        }
        else {
            alert('Todos los campos deben de estar completos');
        }
    };
    NuevoHotelComponent.prototype.click = function (event) {
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.hotel.latitud = this.lat;
        this.hotel.longitud = this.lng;
    };
    NuevoHotelComponent.prototype.nada = function () {
        this.hotelService.nada();
    };
    NuevoHotelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nuevo-hotel',
            template: __webpack_require__("./src/app/components/nuevo-hotel/nuevo-hotel.component.html"),
            styles: [__webpack_require__("./src/app/components/nuevo-hotel/nuevo-hotel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_hotel_service__["a" /* HotelService */]])
    ], NuevoHotelComponent);
    return NuevoHotelComponent;
}());



/***/ }),

/***/ "./src/app/components/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hotel_hotel_component__ = __webpack_require__("./src/app/components/hotel/hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuevo_hotel_nuevo_hotel_component__ = __webpack_require__("./src/app/components/nuevo-hotel/nuevo-hotel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sobre_nosotros_sobre_nosotros_component__ = __webpack_require__("./src/app/components/sobre-nosotros/sobre-nosotros.component.ts");



var RouterConfig = [
    { path: 'hotel', component: __WEBPACK_IMPORTED_MODULE_0__hotel_hotel_component__["a" /* HotelComponent */] },
    { path: 'nuevo-hotel', component: __WEBPACK_IMPORTED_MODULE_1__nuevo_hotel_nuevo_hotel_component__["a" /* NuevoHotelComponent */] },
    { path: 'sobre-nosotros', component: __WEBPACK_IMPORTED_MODULE_2__sobre_nosotros_sobre_nosotros_component__["a" /* SobreNosotrosComponent */] },
    { path: '', redirectTo: 'hotel', pathMatch: "full" },
    { path: '**', redirectTo: 'hotel' },
];


/***/ }),

/***/ "./src/app/components/sobre-nosotros/sobre-nosotros.component.css":
/***/ (function(module, exports) {

module.exports = ".parallax {\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#banner {\r\n\tbackground-image: url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-0.3.5&s=db802b72adc82f97904d37dde9d0d401&auto=format&fit=crop&w=1489&q=80);\r\n\tmin-height: 60%;\r\n}\r\n\r\n#content {\r\n\ttext-align: center;\r\n\tmargin-top: 9%;\r\n\tcolor:white;\r\n\tbackground-color: rgba(0,0,0,0);\r\n}\r\n\r\n#content h1 {\r\n    font-size: 3em;\r\n    font-family:'Raleway', sans-serif;\r\n}\r\n\r\n#content h3 {\r\n    font-family: 'Merriweather', sans-serif;\r\n}\r\n\r\n#sobreNosotros h1 {\r\n    text-align: center;\r\n    font-family: 'Merriweather', sans-serif;\r\n    font-size: 3em;\r\n\r\n}\r\n\r\n#sobreNosotros p {\r\n    font-family:'Raleway', sans-serif;\r\n    font-size: large; \r\n}"

/***/ }),

/***/ "./src/app/components/sobre-nosotros/sobre-nosotros.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\" id=\"banner\">\r\n  <div class=\"container-fluid\" id=\"primero\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div id=\"content\">\r\n          <h1>Conoce sobre el desarrollo de este trabajo</h1>\r\n          <h3>Continua abajo.</h3>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"sobreNosotros\" class=\"container-fluid\">\r\n  <h1>Acerca de</h1>\r\n  <p>Para hacer esta aplicación web, Christian y Yesid utilizarón AngularJS, Materialize y Bootstrap 4 para el diseño. También\r\n    utilizarón Firebase para el manejo de los datos y el lenguaje JavaScript para la interpretación de ellos. Se descargaron\r\n    algunos modulos o librerias que fueron necesarios para llevar a cabo el desarrollo, entre los modulos utilizados se encuentran:\r\n    el modulo de Google Maps, el modulo de Materialize, el Ngb-Module para utilizar algunos componentes de Bootstrap 4 especialmente\r\n    para Angular. Se crearon cinco componentes para la implementación de la herramienta, uno para las busquedas de hoteles,\r\n    otro para los comentarios, uno que es el contenedor general, otro para crear nuevos hoteles y el ultimo para la sección\r\n    sobre nosotros. Se aplicaron estilos en CSS a cada uno de los componentes, se utilizaron las fuentes de Googgle y los\r\n    iconos de Fontawesome y Materialicons. </p>\r\n\r\n\r\n</div>\r\n\r\n<footer class=\"page-footer indigo darken-4\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col l6 s12\">\r\n        <h5 class=\"white-text\">Footer Content</h5>\r\n        <p class=\"grey-text text-lighten-4\">JourneyBooking se encuentra ubicada en el sur de la ciudad de Cali, en colombia. Es propiedad de la Universidad Icesi.</p>\r\n        <p>Desarrolladores y Arquitectos</p>\r\n        <p>Yesid Leonardo Lopéz</p>\r\n        <p>Christian Osorio Trejos</p>\r\n      </div>\r\n      <div class=\"col l4 offset-l2 s12\">\r\n        <h5 class=\"white-text\">Siguenos en:</h5>\r\n        <ul>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-facebook-square\"></i> Facebook</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-twitter\"></i> Twitter</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-instagram\"></i> Instagram</a>\r\n          </li>\r\n          <li>\r\n            <a class=\"grey-text text-lighten-3\">\r\n              <i class=\"fab fa-pinterest\"></i> Pinterest</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-copyright\">\r\n    <div class=\"container\">\r\n      © 2018 Copyright Text\r\n      <a class=\"grey-text text-lighten-4 right\" href=\"#!\">Propiedad intelectual</a>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/sobre-nosotros/sobre-nosotros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreNosotrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SobreNosotrosComponent = /** @class */ (function () {
    function SobreNosotrosComponent() {
    }
    SobreNosotrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sobre-nosotros',
            template: __webpack_require__("./src/app/components/sobre-nosotros/sobre-nosotros.component.html"),
            styles: [__webpack_require__("./src/app/components/sobre-nosotros/sobre-nosotros.component.css")]
        })
    ], SobreNosotrosComponent);
    return SobreNosotrosComponent;
}());



/***/ }),

/***/ "./src/app/model/hotel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel; });
var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    return Hotel;
}());



/***/ }),

/***/ "./src/app/services/hotel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelService = /** @class */ (function () {
    function HotelService(db) {
        this.db = db;
        this.hotelCollection = db.collection('hotels');
        console.log('entra');
        this.hotels = this.hotelCollection.snapshotChanges().map(function (hotels) {
            return hotels.map(function (hotel) { return ({
                id: hotel.payload.doc.id,
                nombre: hotel.payload.doc.get('nombre'),
                costoHabitacion: hotel.payload.doc.get('costoHabitacion'),
                latitud: hotel.payload.doc.get('latitud'),
                longitud: hotel.payload.doc.get('longitud')
            }); });
        });
        this.busqueda = this.hotels;
    }
    HotelService.prototype.getHotels = function () {
        return this.hotels;
    };
    HotelService.prototype.getBusqueda = function () {
        return this.busqueda;
    };
    HotelService.prototype.addHotel = function (hotel, hotelitos) {
        this.hotelCollection.add(hotel);
        var algo;
        this.hotels.subscribe(function (valores) { return algo = valores; });
        console.log(algo);
        console.log(hotel.nombre);
        //const url = 'hotels/' + varHotel.id + '/comentarios';
        /*
        const come: Comentario = {
          id: null,
          usuario: 'yesid',
          email: null,
          comentario: null,
          calificacion: 0
        };
        console.log(url);
        this.db.doc(url).collection('comentarios').add(come);
        */
    };
    HotelService.prototype.nada = function () {
        var algo;
        this.hotels.subscribe(function (valores) { return algo = valores; });
        console.log(algo);
    };
    HotelService.prototype.delHotel = function (hotel) {
        var url = 'hotels/' + hotel.id;
        console.log(hotel.nombre);
        console.log(url);
        this.hotelDocument = this.db.doc(url);
        this.hotelDocument.delete();
    };
    HotelService.prototype.getComments = function (hotel) {
        var _this = this;
        var url = 'hotels/' + hotel;
        console.log(hotel);
        console.log(url);
        this.comentarios = this.db.doc(url).collection('comentarios').snapshotChanges().map(function (comentarios) {
            return comentarios.map(function (comentariesito) { return ({
                id: comentariesito.payload.doc.id,
                email: comentariesito.payload.doc.get('email'),
                usuario: comentariesito.payload.doc.get('usuario'),
                calificacion: comentariesito.payload.doc.get('calificacion'),
                comentario: comentariesito.payload.doc.get('comentario')
            }); });
        });
        console.log('comentariooooooooooos ');
        this.comentarios.subscribe(function (valores) { return _this.comentar = valores; });
        if (this.comentar != null) {
            this.comentar.forEach(function (value) { return console.log(value.comentario); });
        }
        console.log(this.comentar);
        return this.comentarios;
    };
    HotelService.prototype.addComment = function (comentario, hotel) {
        var url = 'hotels/' + hotel.id;
        this.db.doc(url).collection('comentarios').add(comentario);
        console.log(hotel.nombre);
        console.log(url);
    };
    HotelService.prototype.filterHotel = function (nombre) {
        console.log('inicia filter ' + nombre);
        this.nombre = nombre;
        this.nombreObservable.subscribe(function (value) { return nombre = value; });
        //console.log(this.nombre);
        //this.busqueda = null;
        //this.busqueda = this.hotels.map( hoteles => {
        //  return (hoteles.filter( hotel => hotel.nombre === this.nombre ));
        //});
        //this.busqueda.forEach(element => element.forEach(element2 => {
        //  console.log(element2.nombre);
        //}) );
        console.log('end filter');
    };
    HotelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCFXS-S8JsVk7TgJDhOn3rUxupIsD1W9xs",
        authDomain: "todo-a631a.firebaseapp.com",
        databaseURL: "https://todo-a631a.firebaseio.com",
        projectId: "todo-a631a",
        storageBucket: "todo-a631a.appspot.com",
        messagingSenderId: "859396848636"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map