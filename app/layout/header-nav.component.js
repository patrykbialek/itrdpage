System.register(['angular2/core', 'angular2/router', 'ng2-translate/ng2-translate'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ng2_translate_1;
    var HeaderNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            HeaderNavComponent = (function () {
                function HeaderNavComponent(translate, _router, _location) {
                    // use navigator lang if available
                    // let userLang = navigator.language.split('-')[0];
                    // userLang = /(pl|en)/gi.test(userLang) ? userLang : 'en';
                    this.translate = translate;
                    this._router = _router;
                    this._location = _location;
                    this.hideTitle = false;
                    this.hidet = false;
                    this.isHidden = false;
                    this.isStart = true;
                    this.startPage = false;
                    this.top = true;
                    // translate.use(userLang);
                }
                HeaderNavComponent.prototype.getCurrentRoute = function (path) {
                    var isCurrent = this._router.isRouteActive(this._router.generate([path]));
                    this.checkStartRoute();
                    return isCurrent;
                };
                HeaderNavComponent.prototype.changeLanguage = function (currentLang) {
                    var userLang = currentLang === 'pl' ? 'en' : 'pl';
                    this.translate.use(userLang);
                };
                HeaderNavComponent.prototype.ngOnInit = function () {
                    this.top = false;
                    this.checkStartRoute();
                };
                HeaderNavComponent.prototype.onScroll = function (event) {
                    if (this.isStart && scrollY > 20 && this.top === false && this.startPage === true) {
                        this.hideTitle = false;
                    }
                    if (this.isStart && scrollY < 20 && this.top === false && this.startPage === true) {
                        this.hideTitle = true;
                    }
                    if (scrollY >= 205 && this.top === false) {
                        this.top = true;
                    }
                    if (scrollY <= 205 && this.top === true) {
                        this.top = false;
                    }
                    if (scrollY > 1 && this.isHidden === false) {
                        this.isHidden = true;
                    }
                    if (scrollY < 1 && this.isHidden === true) {
                        this.isHidden = false;
                    }
                    //console.log(this.hideTitle);
                };
                HeaderNavComponent.prototype.checkStartRoute = function () {
                    var startRoute = this._location.path() === '';
                    this.startPage = startRoute;
                    if (scrollY <= 1) {
                        this.hideTitle = startRoute;
                    }
                };
                HeaderNavComponent = __decorate([
                    core_1.Component({
                        selector: 'itrd-header-nav',
                        templateUrl: 'app/layout/header-nav.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [ng2_translate_1.TranslateService, router_1.Router, router_1.Location])
                ], HeaderNavComponent);
                return HeaderNavComponent;
            }());
            exports_1("HeaderNavComponent", HeaderNavComponent);
        }
    }
});
/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */ 
//# sourceMappingURL=header-nav.component.js.map